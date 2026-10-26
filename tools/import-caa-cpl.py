#!/usr/bin/env python3
"""Rebuild the seven dedicated CPL subjects from official PDFs.
Requires pdftotext, curl and PyMuPDF. PDFs are cached outside the repository.
Usage: python tools/import-caa-cpl.py --cache /tmp/caa-cpl
"""
import argparse,collections,hashlib,json,pathlib,re,subprocess
import pymupdf
SOURCES={
 'A21':('基本航行學',27207,'110/12/27 更新（2021/12/27）',442),
 'A22':('飛機飛航原理',27209,'110/12/27 更新（2021/12/27）',480),
 'A23':('飛航管理程序',14396,'107/02/08 更新（2018/02/08）',376),
 'A24':('航空氣象',14399,'105/12/01 更新（2016/12/01）',296),
 'A25':('航空器一般維護',14400,'107/06/11 更新（2018/06/11）',382),
 'A26':('陸空通訊',20233,'108/11/18 更新（2019/11/18）',256),
 'A27':('載重平衡',14402,'107/02/08 更新（2018/02/08）',150),
}
FIGURE_FILES={'A21':(27208,'110/12/27'),'A22':(14394,'106/08/21'),'A23':(14397,'106/08/21')}

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
   header=re.search(r'\(\s*([A-D])\s*\)\s*(\d+)\s*[.．]',raw);assert header,(code,i)
   body=raw[header.end():];body=re.sub(r'\('+code+r'\)[^\n]*\n[\s\S]*$','',body);figure_count=body.count('題目圖');body=body.split('題目圖')[0]
   note=None
   # Preserve wording and answer; repair only a visibly truncated option delimiter.
   broken=re.findall(r'\(([A-D])\n',body)
   if broken:
    assert (code,orig) in {('A22','0011778'),('A22','0011793'),('A23','0012019')},(code,orig,broken)
    body=re.sub(r'\(([A-D])\n',r'(\1)\n',body)
    note='官方 PDF 的選項標記缺右括號；本站僅補齊選項分隔，題文與官方答案不變。'
    patches.append({'orig':orig,'lang':'zh' if i<expected//2 else 'en','note':note})
   parts=re.split(r'\(\s*([A-D])\s*\)',body);assert len(parts) in (7,9) and parts[1::2]==list('ABCD')[:len(parts)//2],(code,i,body)
   lang='zh' if i<expected//2 else 'en';rev=re.search(r'\(R(\d+)\)',raw[:header.start()])
   figures=images[image_index:image_index+figure_count];assert len(figures)==figure_count
   image_index+=figure_count
   q={'seq':i+1,'pdfQuestion':int(header[2]),'orig':orig,'group':int(group),'difficulty':diff,'lang':lang,'subject':name,'phak':None,'stem':clean(parts[0]),'options':list(map(clean,parts[2::2])),'answer':'ABCD'.index(header[1]),'sourcePage':source[:m.start()].count('\f')+1,'revision':rev[1] if rev else None,'figures':figures}
   if note:q['sourceNote']=note
   if code=='A22' and orig=='0011728' and lang=='en':
    assert q['stem'].endswith('\ue5b8');q['stem']=q['stem'][:-1].rstrip()
    patches.append({'orig':orig,'lang':lang,'note':'對照原始 PDF 畫面及第二解析器，移除抽字多出的私用區字元。'})
   if code=='A22' and orig=='0011730' and lang=='en':
    assert '\ue5b8' in q['options'][0];q['options'][0]=q['options'][0].replace('\ue5b8','')
    patches.append({'orig':orig,'lang':lang,'note':'對照原始 PDF 畫面，移除不可見的私用區字元。'})
   if code=='A24' and orig=='0012088' and lang=='zh':
    assert 'force)' in q['options'][2];q['options'][2]=q['options'][2].replace('force)','force')
    patches.append({'orig':orig,'lang':lang,'note':'對照原始 PDF 畫面及第二解析器，移除抽字多出的右括號。'})
   if code=='A24' and orig=='0012177' and lang=='zh':
    assert q['options'][1].endswith(')');q['options'][1]=q['options'][1][:-1]
    patches.append({'orig':orig,'lang':lang,'note':'對照原始 PDF 畫面及第二解析器，移除抽字多出的右括號。'})
   if code=='A24' and orig=='0012109' and lang=='en':
    assert 'performed,' in q['stem'];q['stem']=q['stem'].replace('performed,','performed')
    patches.append({'orig':orig,'lang':lang,'note':'對照原始 PDF 畫面及第二解析器，移除抽字多出的逗號。'})
   assert q['stem'] and q['answer']<len(q['options']),(code,i+1,q)
   if not all(q['options']):
    q['scorable']=False;q['sourceNote']='官方 PDF 的 D 選項留白，待核對；本題不開放計分。'
    pending.append(q);continue
   # General concepts only; Taiwan procedures continue to cite CAA.
   if code=='A24':q['phak']='phak25c-13' if re.search(r'TAF|METAR|SIGMET|CHART|預報|報告|圖',q['stem'],re.I) else 'phak25c-12'
   if code=='A25':q['phak']='phak25c-7'
   if code=='A22':q['phak']='phak25c-5'
   if code=='A27':q['phak']='phak25c-10'
   questions.append(q)
  assert image_index==len(images),(code,image_index,len(images))
  counts=collections.Counter((q['orig'],q['lang']) for q in questions);assert max(counts.values())==1
  zh={q['orig'] for q in questions if q['lang']=='zh'};en={q['orig'] for q in questions if q['lang']=='en'};assert zh==en|{q['orig'] for q in pending}
  namevar='caa'+code+'Questions';filename='caa-'+code.lower()+'-questions.js'
  (out/filename).write_text('// Generated from CAA official PDF by tools/import-caa-cpl.py.\nexport const '+namevar+'='+json.dumps(questions,ensure_ascii=False,indent=2)+';\nexport const caa'+code+'Pending='+json.dumps(pending,ensure_ascii=False,indent=2)+';\n')
  note='官方題目範例與答案依來源版本保存；不保證為實際試題或現行法規。'
  if code in ('A21','A22','A23','A24'):note+='附圖直接取自同一份官方 PDF，點圖可開啟原圖。'
  docs.append({'id':'caa-cpl-'+code.lower(),'key':'CPL-'+code,'license':'CPL','subject':code,'subjectName':name,'exam':'CPL 飛機商用駕駛員檢定','authority':'CAA','authorityName':'交通部民用航空局','sourceUrl':'https://www.caa.gov.tw/ContentAndMorefiles.aspx?a=474&lang=1','fileUrl':url,'fileVersion':version,'note':note})
  if code in FIGURE_FILES:
   fid,fversion=FIGURE_FILES[code];docs[-1]['figureUrl']=f'https://www.caa.gov.tw/FileAtt.ashx?lang=1&id={fid}';docs[-1]['figureVersion']=fversion+' 更新'
  report[code]={'fileUrl':url,'fileVersion':version,'pdfSha256':hashlib.sha256(pdf.read_bytes()).hexdigest(),'records':len(questions)+len(pending),'playable':len(questions),'zh':len(zh),'en':sum(q['lang']=='en' for q in questions),'figureOccurrences':len(images),'excluded':len(pending),'pending':pending,'normalizations':patches,'questionsSha256':hashlib.sha256(json.dumps(questions,ensure_ascii=False,sort_keys=True).encode()).hexdigest()}
  print(code,len(questions),'figures',len(images))
 # Require an exact PDF hash match before reusing common subject data.
 ppl_report=json.loads((out/'caa-import-report.json').read_text())
 for code,fileid in [('B01',20823),('B09',20499)]:
  pdf=a.cache/(code+'.pdf');url=f'https://www.caa.gov.tw/FileAtt.ashx?lang=1&id={fileid}'
  if not pdf.exists():subprocess.run(['curl','-fLsS','--retry','2',url,'-o',str(pdf)],check=True)
  digest=hashlib.sha256(pdf.read_bytes()).hexdigest();assert digest==ppl_report[code]['pdfSha256'],(code,'shared data changed; parse independently')
  name='民用航空法及相關法規(航務)' if code=='B01' else '人為因素學'
  docs.append({'id':'caa-cpl-'+code.lower(),'key':'CPL-'+code,'license':'CPL','subject':code,'subjectName':name,'exam':'CPL 飛機商用駕駛員檢定','authority':'CAA','authorityName':'交通部民用航空局','sourceUrl':'https://www.caa.gov.tw/ContentAndMorefiles.aspx?a=474&lang=1','fileUrl':url,'fileVersion':ppl_report[code]['fileVersion'],'note':'CPL 官方附件與 PPL 同科 PDF 雜湊一致；共用原始題目，作答進度依證照分開保存。'})
  report[code]={**ppl_report[code],'fileUrl':url,'sharedWith':'PPL-'+code,'pdfSha256':digest}
 imports=''.join(f"import {{caa{d['subject']}Questions,caa{d['subject']}Pending}} from './caa-{d['subject'].lower()}-questions.js';\n" for d in docs)
 definitions=[]
 for d in docs:definitions.append(json.dumps(d,ensure_ascii=False)[:-1]+f",questions:caa{d['subject']}Questions,pendingQuestions:caa{d['subject']}Pending"+'}')
 (out/'caa-cpl.js').write_text(imports+'export const caaCplDocuments=['+',\n'.join(definitions)+'];\n')
 (out/'caa-cpl-import-report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
if __name__=='__main__':main()
