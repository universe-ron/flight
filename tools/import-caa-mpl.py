#!/usr/bin/env python3
"""Rebuild the seven dedicated MPL subjects from official PDFs.
Requires pdftotext, curl and PyMuPDF. PDFs are cached outside the repository.
Usage: python tools/import-caa-mpl.py --cache /tmp/caa-mpl
"""
import argparse,collections,hashlib,json,pathlib,re,subprocess
import pymupdf
SOURCES={
 'A31':('飛機飛航原理',26405,'110/09/03 更新（2021/09/03）',194),
 'A32':('飛航管理程序',14618,'105/12/01 更新（2016/12/01）',368),
 'A33':('航空氣象',26406,'110/09/03 更新（2021/09/03）',392),
 'A34':('航空器一般維護',14622,'105/12/01 更新（2016/12/01）',352),
 'A35':('陸空通訊',14623,'105/12/01 更新（2016/12/01）',336),
 'A36':('載重平衡',14624,'105/12/01 更新（2016/12/01）',106),
 'A37':('基本航行學',14625,'105/12/01 更新（2016/12/01）',172),
}
FIGURE_FILES={'A31':(14616,'106/08/21'),'A33':(14620,'106/08/21'),'A37':(14626,'106/08/21')}
TEXT_FIXES={
 ('A32', 83):[{'field': 2, 'before': '每秒1.5度, 或坡度25度, 取較小者', 'after': '每秒1.5度 或坡度25度, 取較小者'}],
 ('A32', 87):[{'field': 2, 'before': 'Nil, poor, fair, or good.', 'after': 'Nil, poor, fair or good.'}],
 ('A32', 101):[{'field': 2, 'before': '離開高度, 無法保持爬升率500ft/min, 到達待命點或許可點的時間及高度,及離開該待命點或許可點, 及平均真空速改變超過 5%或10浬', 'after': '離開高度, 無法保持爬升率500ft/min 到達待命點或許可點的時間及高度,及離開該待命點或許可點, 及平均真空速改變超過 5%或10浬'}],
 ('A32', 112):[{'field': 2, 'before': 'Nil, poor, fair, or good.', 'after': 'Nil, poor, fair or good.'}],
 ('A32', 209):[{'field': 'stem', 'before': 'When a dashed blue circles surrounds an airport on a sectional aeronautical chart, it will depict the boundary of', 'after': 'When a dashed blue circles surrounds an airport on a sectional aeronautical chart it will depict the boundary of'}],
 ('A32', 212):[{'field': 0, 'before': 'aircraft is continuously in a position from which a descent to a normal landing, on the intended runway, can be made', 'after': 'aircraft is continuously in a position from which a descent to a normal landing on the intended runway, can be made'}],
 ('A32', 241):[{'field': 2, 'before': 'High-white and green, on glidepath-green; low-red.', 'after': 'High-white and green, on glidepath-green low-red.'}],
 ('A32', 271):[{'field': 1, 'before': 'Zero-zero, fifty-fifty, or normal.', 'after': 'Zero-zero, fifty-fifty or normal.'}],
 ('A32', 296):[{'field': 1, 'before': 'Zero-zero, fifty-fifty, or normal.', 'after': 'Zero-zero, fifty-fifty or normal.'}],
 ('A34', 243):[{'field': 1, 'before': 'Mixture is leaned and power is decreased.', 'after': 'Mixture is leaned and power is decreased'}],
 ('A34', 274):[{'field': 2, 'before': 'Constant-potential (voltage) charging.', 'after': 'Constant-potential (voltage charging.'}],
 ('A34', 301):[{'field': 1, 'before': 'air manifold pressure increasing slightly.', 'after': 'air manifold pressure increasing slightly'}],
 ('A34', 309):[{'field': 'stem', 'before': 'A turbojet aircraft is equipped with heated inlet ducts and airfoil leading edges. When is this type of anti-icing system usually activated during flight?', 'after': 'A turbojet aircraft is equipped with heated inlet ducts and airfoil leading edges When is this type of anti-icing system usually activated during flight?'}],
 ('A35', 260):[{'field': 1, 'before': 'Broadcast position and intentions on the Common Traffic Advisory Frequency and monitor the frequency.', 'after': 'Broadcast position and intentions on the Common Traffic Advisory Frequency and monitor the frequency'}],
 ('A35', 271):[{'field': 1, 'before': 'Azimuth, range, and vertical angle.', 'after': 'Azimuth, range, and vertical angle'}],
 ('A36', 1):[{'field': 'stem', 'before': '"已知: MZFW=130634, MLDW=145149, MTOW=170000, DOW=89886, TIF=20000, TOF=30000, 此趟飛行允許之最大起飛重量為何?"', 'after': '"已知: MZFW=130634, MLDW=145149, MTOW=170000, DOW=89886, TIF=20000, TOF=30000 此趟飛行允許之最大起飛重量為何?"'}],
 ('A36', 24):[{'field': 'stem', 'before': '"已知: MZFW=130000, MLDW=140000, MTOW=170000, DOW=90000, TIF=20000, TOF=30000, 酬載為40000, 此趟飛行之零油重為何?"', 'after': '"已知: MZFW=130000, MLDW=140000, MTOW=170000, DOW=90000, TIF=20000, TOF=30000 酬載為40000, 此趟飛行之零油重為何?"'}],
 ('A36', 25):[{'field': 'stem', 'before': '"已知: MZFW=140000, MLDW=140000, MTOW=170000, DOW=90000, TIF=20000, TOF=30000, 酬載為40000, 此趟飛行之零油重為何?"', 'after': '"已知: MZFW=140000, MLDW=140000, MTOW=170000, DOW=90000, TIF=20000, TOF=30000 酬載為40000, 此趟飛行之零油重為何?"'}],
 ('A37', 119):[{'field': 1, 'before': '.Azimuth, range and vertical angle.', 'after': '.Azimuth, range and vertical angle'}],
 ('A37', 142):[{'field': 0, 'before': 'the data base will contain all of the transition or departures From all runways.', 'after': 'the data base will contain all of the transition or departures From all runways'}],
}

META=re.compile(r'原始題號\s*[:：]\s*(\d+)\s*題組\s*[:：]\s*(\d+)\s*難易度\s*[:：]\s*(\S+)')
def clean(s):return re.sub(r'\s+',' ',s).strip()
def main():
 ap=argparse.ArgumentParser();ap.add_argument('--cache',type=pathlib.Path,required=True);ap.add_argument('--output',type=pathlib.Path,default=pathlib.Path(__file__).resolve().parents[1]);a=ap.parse_args()
 a.cache.mkdir(parents=True,exist_ok=True);out=a.output;figdir=out/'assets/caa';figdir.mkdir(parents=True,exist_ok=True)
 docs=[];report={}
 for code,(name,fileid,version,expected) in SOURCES.items():
  pdf=a.cache/(code+'.pdf');txt=a.cache/(code+'.txt');url=f'https://www.caa.gov.tw/FileAtt.ashx?lang=1&id={fileid}'
  if not pdf.exists():subprocess.run(['curl','-fLsS','--retry','2',url,'-o',str(pdf)],check=True)
  subprocess.run(['pdftotext','-layout',str(pdf),str(txt)],check=True)
  source=txt.read_text();matches=list(META.finditer(source));assert len(matches)==expected,(code,len(matches))
  images=[]
  with pymupdf.open(pdf) as doc:
   for page_no,page in enumerate(doc,1):
    for info in sorted(page.get_image_info(xrefs=True),key=lambda x:(x['bbox'][1],x['bbox'][0])):
     image=doc.extract_image(info['xref']);digest=hashlib.sha256(image['image']).hexdigest()[:16];path=figdir/(digest+'.'+image['ext']);path.write_bytes(image['image']);images.append({'src':path.relative_to(out).as_posix(),'page':page_no,'width':image['width'],'height':image['height']})
  questions=[];pending=[];image_index=0;patches=[]
  for i,m in enumerate(matches):
   orig,group,diff=m.groups();raw=source[m.end():matches[i+1].start() if i+1<len(matches) else len(source)]
   # Remove standalone PDF page numbers, keeping question/option content intact.
   raw=re.sub(r'^[ \t]*\d+[ \t]*\n(?=\f|$)', '',raw,flags=re.M)
   header=re.search(r'\(\s*([A-Da-d])\s*\)\s*(\d+)\s*[.．]',raw);assert header,(code,i)
   body=raw[header.end():];body=re.sub(r'\('+code+r'\)[^\n]*\n[\s\S]*$','',body);figure_count=body.count('題目圖');body=body.split('題目圖')[0]
   note=None
   # Preserve wording and answer; repair only a visibly truncated option delimiter.
   broken=re.findall(r'\(([A-D])\n',body)
   if broken:
    assert code=='A33' and orig=='0013055' and i<expected//2,(code,orig,broken)
    body=re.sub(r'\(([A-D])\n',r'(\1)\n',body)
    note='官方 PDF 的選項標記缺右括號；本站僅補齊選項分隔，題文與官方答案不變。'
    patches.append({'orig':orig,'lang':'zh' if i<expected//2 else 'en','note':note})
   parts=re.split(r'\(\s*([A-D])\s*\)',body);assert len(parts) in (5,7,9) and parts[1::2]==list('ABCD')[:len(parts)//2],(code,i,body)
   lang='zh' if i<expected//2 else 'en';rev=re.search(r'\(R(\d+)\)',raw[:header.start()])
   figures=images[image_index:image_index+figure_count];assert len(figures)==figure_count
   image_index+=figure_count
   q={'seq':i+1,'pdfQuestion':int(header[2]),'orig':orig,'group':int(group),'difficulty':diff,'lang':lang,'subject':name,'phak':None,'stem':clean(parts[0]),'options':list(map(clean,parts[2::2])),'answer':'ABCD'.index(header[1].upper()),'sourcePage':source[:m.start()].count('\f')+1,'revision':rev[1] if rev else None,'figures':figures}
   if note:q['sourceNote']=note
   if code=='A31' and orig=='0012699' and lang=='en':
    assert '\ue5b8' in q['options'][0];q['options'][0]=q['options'][0].replace('\ue5b8','')
    patches.append({'orig':orig,'lang':lang,'note':'對照 PDF 畫面，移除不可見的字型私用字元。'})
   if header[1].islower():
    patches.append({'orig':orig,'lang':lang,'note':'官方答案使用小寫標記，僅正規化大小寫，答案不變。'})
   for correction in TEXT_FIXES.get((code,i+1),[]):
    field=correction['field'];current=q['stem'] if field=='stem' else q['options'][field]
    assert current==correction['before'],(code,orig,'source text changed')
    if field=='stem':q['stem']=correction['after']
    else:q['options'][field]=correction['after']
    patches.append({'orig':orig,'lang':lang,'field':field,'note':'對照原始 PDF 畫面及第二解析器，移除抽字多出的行尾標點；題文與答案不變。'})
   assert q['stem'] and q['answer']<len(q['options']),(code,i+1,q)
   if not all(q['options']):
    q['scorable']=False;q['sourceNote']='官方 PDF 的 D 選項留白，待核對；本題不開放計分。'
    pending.append(q);continue
   # Link general concepts; official CAA material remains the authority.
   if code=='A31':q['phak']='phak25c-5'
   if code=='A33':q['phak']='phak25c-13' if re.search(r'TAF|METAR|SIGMET|CHART|預報|報告|圖',q['stem'],re.I) else 'phak25c-12'
   if code=='A34' and re.search(r'engine|fuel system|螺旋槳|液壓|發動機',q['stem'],re.I):q['phak']='phak25c-7'
   if code=='A36':q['phak']='phak25c-10'
   if code=='A37' and re.search(r'VOR|ADF|DME|地速|ground speed|耗油',q['stem'],re.I):q['phak']='phak25c-16'
   questions.append(q)
  assert image_index==len(images),(code,image_index,len(images))
  counts=collections.Counter((q['orig'],q['lang']) for q in questions);assert max(counts.values())==1
  zh={q['orig'] for q in questions if q['lang']=='zh'};en={q['orig'] for q in questions if q['lang']=='en'};assert zh==en|{q['orig'] for q in pending}
  namevar='caa'+code+'Questions';filename='caa-'+code.lower()+'-questions.js'
  (out/filename).write_text('// Generated from CAA official PDF by tools/import-caa-mpl.py.\nexport const '+namevar+'='+json.dumps(questions,ensure_ascii=False,indent=2)+';\nexport const caa'+code+'Pending='+json.dumps(pending,ensure_ascii=False,indent=2)+';\n')
  note='官方題目範例與答案依來源版本保存；不保證為實際試題或現行法規。'
  if code in ('A31','A33','A37'):note+='附圖直接取自同一份官方 PDF，點圖可開啟原圖。'
  docs.append({'id':'caa-mpl-'+code.lower(),'key':'MPL-'+code,'license':'MPL','subject':code,'subjectName':name,'exam':'多組員飛機駕駛員檢定（加考儀器飛航）','authority':'CAA','authorityName':'交通部民用航空局','sourceUrl':'https://www.caa.gov.tw/ContentAndMorefiles.aspx?a=474&lang=1','fileUrl':url,'fileVersion':version,'note':note})
  if code in FIGURE_FILES:
   fid,fversion=FIGURE_FILES[code];docs[-1]['figureUrl']=f'https://www.caa.gov.tw/FileAtt.ashx?lang=1&id={fid}';docs[-1]['figureVersion']=fversion+' 更新'
  report[code]={'fileUrl':url,'fileVersion':version,'pdfSha256':hashlib.sha256(pdf.read_bytes()).hexdigest(),'records':len(questions)+len(pending),'playable':len(questions),'zh':len(zh),'en':sum(q['lang']=='en' for q in questions),'figureOccurrences':len(images),'excluded':len(pending),'pending':pending,'normalizations':patches,'questionsSha256':hashlib.sha256(json.dumps(questions,ensure_ascii=False,sort_keys=True).encode()).hexdigest()}
  print(code,len(questions),'figures',len(images))
 # Require an exact PDF hash match before reusing common subject data.
 ppl_report=json.loads((out/'caa-import-report.json').read_text())
 for code,fileid in [('B01',20837),('B09',20530)]:
  pdf=a.cache/(code+'.pdf');url=f'https://www.caa.gov.tw/FileAtt.ashx?lang=1&id={fileid}'
  if not pdf.exists():subprocess.run(['curl','-fLsS','--retry','2',url,'-o',str(pdf)],check=True)
  digest=hashlib.sha256(pdf.read_bytes()).hexdigest();assert digest==ppl_report[code]['pdfSha256'],(code,'shared data changed; parse independently')
  name='民用航空法及相關法規(航務)' if code=='B01' else '人為因素學'
  docs.append({'id':'caa-mpl-'+code.lower(),'key':'MPL-'+code,'license':'MPL','subject':code,'subjectName':name,'exam':'多組員飛機駕駛員檢定（加考儀器飛航）','authority':'CAA','authorityName':'交通部民用航空局','sourceUrl':'https://www.caa.gov.tw/ContentAndMorefiles.aspx?a=474&lang=1','fileUrl':url,'fileVersion':ppl_report[code]['fileVersion'],'note':'MPL 官方附件與 PPL 同科 PDF 雜湊一致；共用原始題目，作答進度依證照分開保存。'})
  report[code]={**ppl_report[code],'fileUrl':url,'sharedWith':'PPL-'+code,'pdfSha256':digest}
 ir_report=json.loads((out/'caa-ir-import-report.json').read_text())['A03']
 ir_pdf=a.cache/'A03.pdf';ir_url='https://www.caa.gov.tw/FileAtt.ashx?lang=1&id=27205'
 if not ir_pdf.exists():subprocess.run(['curl','-fLsS','--retry','2',ir_url,'-o',str(ir_pdf)],check=True)
 digest=hashlib.sha256(ir_pdf.read_bytes()).hexdigest();assert digest==ir_report['pdfSha256'],'MPL instrument PDF changed; parse independently'
 docs.append({'id':'caa-mpl-a03','key':'MPL-A03','license':'MPL','subject':'A03','subjectName':'儀器飛航','exam':'多組員飛機駕駛員檢定（加考儀器飛航）','authority':'CAA','authorityName':'交通部民用航空局','sourceUrl':'https://www.caa.gov.tw/ContentAndMorefiles.aspx?a=474&lang=1','fileUrl':ir_url,'fileVersion':ir_report['fileVersion'],'figureUrl':'https://www.caa.gov.tw/FileAtt.ashx?lang=1&id=27206','figureVersion':ir_report['figureVersion'],'note':'MPL 官方 A03 附件與 IR PDF 雜湊一致；共用原始題目，進度與錯題依證照分開保存。保留原有二、三、四選項題型。'})
 report['A03']={**ir_report,'fileUrl':ir_url,'figureUrl':'https://www.caa.gov.tw/FileAtt.ashx?lang=1&id=27206','sharedWith':'IR-A03','pdfSha256':digest}
 imports=''.join(f"import {{caa{d['subject']}Questions,caa{d['subject']}Pending}} from './caa-{d['subject'].lower()}-questions.js';\n" for d in docs)
 definitions=[]
 for d in docs:definitions.append(json.dumps(d,ensure_ascii=False)[:-1]+f",questions:caa{d['subject']}Questions,pendingQuestions:caa{d['subject']}Pending"+'}')
 (out/'caa-mpl.js').write_text(imports+'export const caaMplDocuments=['+',\n'.join(definitions)+'];\n')
 (out/'caa-mpl-import-report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
if __name__=='__main__':main()
