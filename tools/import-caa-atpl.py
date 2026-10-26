#!/usr/bin/env python3
"""Rebuild the six dedicated ATPL subjects from official PDFs.
Requires pdftotext, curl and PyMuPDF. PDFs are cached outside the repository.
Usage: python tools/import-caa-atpl.py --cache /tmp/caa-atpl
"""
import argparse,collections,hashlib,json,pathlib,re,subprocess
import pymupdf
SOURCES={
 'A41':('基本航行學',23900,'109/12/22 更新（2020/12/22）',172),
 'A42':('飛航管理程序',23901,'109/12/22 更新（2020/12/22）',368),
 'A43':('航空氣象',23902,'109/12/22 更新（2020/12/22）',470),
 'A44':('航空器一般維護',19225,'108/07/08 更新（2019/07/08）',380),
 'A45':('陸空通訊',23903,'109/12/22 更新（2020/12/22）',382),
 'A46':('載重平衡',19209,'108/07/02 更新（2019/07/02）',120),
}
FIGURE_FILES={'A41':(14429,'106/08/21'),'A42':(14432,'106/08/21'),'A43':(14435,'106/08/21')}

TEXT_FIXES={
 ('A42', 140):[{'field': 1, 'before': 'Indicated airspeed increases, aircraft pitches down, and altitude increases.', 'after': 'Indicated airspeed increases, aircraft pitches down, and altitude increases'}],
 ('A42', 221):[{'field': 2, 'before': 'High-white and green, on glidepath-green; low-red.', 'after': 'High-white and green, on glidepath-green low-red.'}],
 ('A42', 270):[{'field': 1, 'before': 'Zero-zero, fifty-fifty, or normal.', 'after': 'Zero-zero, fifty-fifty or normal.'}],
 ('A42', 294):[{'field': 2, 'before': 'Heavy, fast, gear and flaps down.', 'after': 'Heavy fast, gear and flaps down.'}],
 ('A42', 324):[{'field': 1, 'before': 'Indicated airspeed increases, aircraft pitches down, and altitude increases.', 'after': 'Indicated airspeed increases, aircraft pitches down, and altitude increases'}],
 ('A42', 332):[{'field': 1, 'before': 'Decreased takeoff distance.', 'after': 'Decreased takeoff distance'}],
 ('A42', 362):[{'field': 'stem', 'before': 'What type turbulence should be reported when it causes slight, rapid, and somewhat rhythmic bumpiness without appreciable changes in attitude or altitude, less than one-third of the time?', 'after': 'What type turbulence should be reported when it causes slight, rapid, and somewhat rhythmic bumpiness without appreciable changes in attitude or altitude less than one-third of the time?'}],
 ('A43', 143):[{'field': 'stem', 'before': '來自塔台的下述指示傳達出何種資訊？"SOUTH BOUNDARY WIND ONE SIX ZERO AT TWO FIVE, WEST BOUNDARY WIND TWO FOUR ZERO AT THREE FIVE."', 'after': '來自塔台的下述指示傳達出何種資訊？"SOUTH BOUNDARY WIND ONE SIX ZERO AT TWO FIVE WEST BOUNDARY WIND TWO FOUR ZERO AT THREE FIVE."'}],
 ('A43', 163):[{'field': 'stem', 'before': '哪一種積冰(icing)與類似於低高度層雲(stratus cloud)中的最小水滴(water droplet) 有關？', 'after': '哪一種積冰(icing)與類似於低高度層雲(stratus cloud)中的最小水滴(water droplet 有關？'}],
 ('A43', 279):[{'field': 1, 'before': 'Wind direction shifts to the left.', 'after': 'Wind direction shifts to the left'}],
 ('A43', 314):[{'field': 1, 'before': 'Wind direction shifts to the left.', 'after': 'Wind direction shifts to the left'}],
 ('A43', 409):[{'field': 'stem', 'before': 'What type turbulence should be reported when it causes slight, rapid, and somewhat rhythmic bumpiness without appreciable changes in attitude or altitude, less than one-third of the time?', 'after': 'What type turbulence should be reported when it causes slight, rapid, and somewhat rhythmic bumpiness without appreciable changes in attitude or altitude less than one-third of the time?'}],
 ('A44', 273):[{'field': 0, 'before': 'The turbine case cools faster and may shrink down and seize the turbine blades.', 'after': 'The turbine case cools faster and may shrink down and seize the turbine blades'}],
 ('A44', 293):[{'field': 'stem', 'before': 'A turbojet aircraft is equipped with heated inlet ducts and airfoil leading edges. When is this type of anti-icing system usually activated during flight?', 'after': 'A turbojet aircraft is equipped with heated inlet ducts and airfoil leading edges When is this type of anti-icing system usually activated during flight?'}],
 ('A44', 333):[{'field': 2, 'before': 'Constant-potential (voltage) charging.', 'after': 'Constant-potential (voltage charging.'}],
 ('A45', 192):[{'field': 1, 'before': 'Azimuth, range, and vertical angle.', 'after': 'Azimuth, range, and vertical angle'}],
 ('A45', 285):[{'field': 1, 'before': 'Azimuth, range, and vertical angle.', 'after': 'Azimuth, range, and vertical angle'}],
 ('A46', 24):[{'field': 'stem', 'before': '"已知: 飛機種量為176000kg ,MAC = 327.8 inch, LEMAC= 1258 inch, 重心位置為25%MAC, 如果在1500 inch 處 , 加裝5000kg 之貨物, 則重心位置會移動多少? ?"', 'after': '"已知: 飛機種量為176000kg ,MAC = 327.8 inch, LEMAC= 1258 inch, 重心位置為25%MAC 如果在1500 inch 處 , 加裝5000kg 之貨物, 則重心位置會移動多少? ?"'}],
 ('A46', 32):[{'field': 'stem', 'before': '已知: MZFW=130634, MLDW=145149, MTOW=170000, DOW=89886, TIF=20000, TOF=30000, 此趟飛行允許之最大酬載重量maximum allowed traffic load 為何?', 'after': '已知: MZFW=130634, MLDW=145149, MTOW=170000, DOW=89886, TIF=20000, TOF=30000 此趟飛行允許之最大酬載重量maximum allowed traffic load 為何?'}],
 ('A46', 33):[{'field': 'stem', 'before': '已知: MZFW=130634, MLDW=145149, MTOW=170000, DOW=89886, TIF=20000, TOF=40000, 此趟飛行允許之最大起飛重量 allowed weight for take off為何?', 'after': '已知: MZFW=130634, MLDW=145149, MTOW=170000, DOW=89886, TIF=20000, TOF=40000 此趟飛行允許之最大起飛重量 allowed weight for take off為何?'}],
 ('A46', 34):[{'field': 'stem', 'before': '已知: MZFW=130634, MLDW=145149, MTOW=170000, DOW=89886, TIF=30000, TOF=40000, 此趟飛行允許之最大酬載重量maximum allowed traffic load為何?', 'after': '已知: MZFW=130634, MLDW=145149, MTOW=170000, DOW=89886, TIF=30000, TOF=40000 此趟飛行允許之最大酬載重量maximum allowed traffic load為何?'}],
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
   # Unknown option layouts stop the importer instead of guessing.
   assert not re.findall(r'\(([A-D])\n',body),(code,orig,'broken option delimiter')
   parts=re.split(r'\(\s*([A-D])\s*\)',body);assert len(parts) in (7,9) and parts[1::2]==list('ABCD')[:len(parts)//2],(code,i,body)
   lang='zh' if i<expected//2 else 'en';rev=re.search(r'\(R(\d+)\)',raw[:header.start()])
   figures=images[image_index:image_index+figure_count];assert len(figures)==figure_count
   image_index+=figure_count
   q={'seq':i+1,'pdfQuestion':int(header[2]),'orig':orig,'group':int(group),'difficulty':diff,'lang':lang,'subject':name,'phak':None,'stem':clean(parts[0]),'options':list(map(clean,parts[2::2])),'answer':'ABCD'.index(header[1].upper()),'sourcePage':source[:m.start()].count('\f')+1,'revision':rev[1] if rev else None,'figures':figures}
   if note:q['sourceNote']=note
   for correction in TEXT_FIXES.get((code,i+1),[]):
    field=correction['field'];current=q['stem'] if field=='stem' else q['options'][field]
    assert current==correction['before'],(code,orig,'source text changed')
    if field=='stem':q['stem']=correction['after']
    else:q['options'][field]=correction['after']
    patches.append({'orig':orig,'lang':lang,'field':field,'note':'對照原始 PDF 畫面及第二解析器，移除抽字多出的行尾標點；題文與答案不變。'})
   if header[1].islower():
    assert code=='A44' and orig=='0014023'
    patches.append({'orig':orig,'lang':lang,'note':'官方答案使用小寫 b，僅將標記正規化為 B，答案不變。'})
   assert q['stem'] and q['answer']<len(q['options']),(code,i+1,q)
   if not all(q['options']):
    q['scorable']=False;q['sourceNote']='官方 PDF 的 D 選項留白，待核對；本題不開放計分。'
    pending.append(q);continue
   # Link only general concepts; retain CAA as authority for local procedures.
   if code=='A43':q['phak']='phak25c-13' if re.search(r'TAF|METAR|SIGMET|CHART|預報|報告|圖',q['stem'],re.I) else 'phak25c-12'
   if code=='A44' and re.search(r'engine|fuel system|螺旋槳|液壓|發動機',q['stem'],re.I):q['phak']='phak25c-7'
   if code=='A41' and re.search(r'VOR|ADF|DME|地速|ground speed|耗油',q['stem'],re.I):q['phak']='phak25c-16'
   if code=='A46':q['phak']='phak25c-10'
   questions.append(q)
  assert image_index==len(images),(code,image_index,len(images))
  counts=collections.Counter((q['orig'],q['lang']) for q in questions);assert max(counts.values())==1
  zh={q['orig'] for q in questions if q['lang']=='zh'};en={q['orig'] for q in questions if q['lang']=='en'};assert zh==en|{q['orig'] for q in pending}
  namevar='caa'+code+'Questions';filename='caa-'+code.lower()+'-questions.js'
  (out/filename).write_text('// Generated from CAA official PDF by tools/import-caa-atpl.py.\nexport const '+namevar+'='+json.dumps(questions,ensure_ascii=False,indent=2)+';\nexport const caa'+code+'Pending='+json.dumps(pending,ensure_ascii=False,indent=2)+';\n')
  note='官方題目範例與答案依來源版本保存；不保證為實際試題或現行法規。'
  if code in ('A41','A42','A43'):note+='附圖直接取自同一份官方 PDF，點圖可開啟原圖。'
  docs.append({'id':'caa-atpl-'+code.lower(),'key':'ATPL-'+code,'license':'ATPL','subject':code,'subjectName':name,'exam':'ATPL 飛機民航運輸駕駛員檢定','authority':'CAA','authorityName':'交通部民用航空局','sourceUrl':'https://www.caa.gov.tw/ContentAndMorefiles.aspx?a=474&lang=1','fileUrl':url,'fileVersion':version,'note':note})
  if code in FIGURE_FILES:
   fid,fversion=FIGURE_FILES[code];docs[-1]['figureUrl']=f'https://www.caa.gov.tw/FileAtt.ashx?lang=1&id={fid}';docs[-1]['figureVersion']=fversion+' 更新'
  report[code]={'fileUrl':url,'fileVersion':version,'pdfSha256':hashlib.sha256(pdf.read_bytes()).hexdigest(),'records':len(questions)+len(pending),'playable':len(questions),'zh':len(zh),'en':sum(q['lang']=='en' for q in questions),'figureOccurrences':len(images),'excluded':len(pending),'pending':pending,'normalizations':patches,'questionsSha256':hashlib.sha256(json.dumps(questions,ensure_ascii=False,sort_keys=True).encode()).hexdigest()}
  print(code,len(questions),'figures',len(images))
 # Require an exact PDF hash match before reusing common subject data.
 ppl_report=json.loads((out/'caa-import-report.json').read_text())
 for code,fileid in [('B01',20825),('B09',20503)]:
  pdf=a.cache/(code+'.pdf');url=f'https://www.caa.gov.tw/FileAtt.ashx?lang=1&id={fileid}'
  if not pdf.exists():subprocess.run(['curl','-fLsS','--retry','2',url,'-o',str(pdf)],check=True)
  digest=hashlib.sha256(pdf.read_bytes()).hexdigest();assert digest==ppl_report[code]['pdfSha256'],(code,'shared data changed; parse independently')
  name='民用航空法及相關法規(航務)' if code=='B01' else '人為因素學'
  docs.append({'id':'caa-atpl-'+code.lower(),'key':'ATPL-'+code,'license':'ATPL','subject':code,'subjectName':name,'exam':'ATPL 飛機民航運輸駕駛員檢定','authority':'CAA','authorityName':'交通部民用航空局','sourceUrl':'https://www.caa.gov.tw/ContentAndMorefiles.aspx?a=474&lang=1','fileUrl':url,'fileVersion':ppl_report[code]['fileVersion'],'note':'ATPL 官方附件與 PPL 同科 PDF 雜湊一致；共用原始題目，作答進度依證照分開保存。'})
  report[code]={**ppl_report[code],'fileUrl':url,'sharedWith':'PPL-'+code,'pdfSha256':digest}
 imports=''.join(f"import {{caa{d['subject']}Questions,caa{d['subject']}Pending}} from './caa-{d['subject'].lower()}-questions.js';\n" for d in docs)
 definitions=[]
 for d in docs:definitions.append(json.dumps(d,ensure_ascii=False)[:-1]+f",questions:caa{d['subject']}Questions,pendingQuestions:caa{d['subject']}Pending"+'}')
 (out/'caa-atpl.js').write_text(imports+'export const caaAtplDocuments=['+',\n'.join(definitions)+'];\n')
 (out/'caa-atpl-import-report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
if __name__=='__main__':main()
