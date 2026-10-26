#!/usr/bin/env python3
"""Rebuild the seven remaining PPL subjects from official PDFs.
Requires pdftotext, curl and PyMuPDF. PDFs are cached outside the repository.
Usage: python tools/import-caa-ppl.py --cache /tmp/caa-ppl
"""
import argparse,collections,hashlib,json,pathlib,re,subprocess
import pymupdf
SOURCES={
 'A15':('航空氣象',14462,'105/12/01 更新（2016/12/01）',130),
 'A16':('航空器一般維護',14463,'105/12/01 更新（2016/12/01）',70),
 'A17':('基本航行學',14464,'105/12/01 更新（2016/12/01）',94),
 'A18':('陸空通訊',14465,'105/12/01 更新（2016/12/01）',100),
 'A19':('載重平衡',14466,'105/12/01 更新（2016/12/01）',70),
 'B01':('民用航空法及相關法規(航務)',20827,'109/01/13 更新（2020/01/13）',588),
 'B09':('人為因素學',20507,'108/12/05 更新（2019/12/05）',410),
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
   header=re.search(r'\(\s*([A-D])\s*\)\s*(\d+)\s*[.．]',raw);assert header,(code,i)
   body=raw[header.end():];body=re.sub(r'\('+code+r'\)[^\n]*\n[\s\S]*$','',body);figure_count=body.count('題目圖');body=body.split('題目圖')[0]
   note=None
   # Preserve wording and answer; repair only a visibly truncated option delimiter.
   broken=re.findall(r'\(([A-D])\n',body)
   if broken:
    assert code=='B01' and orig in ('0068212','0068213','0068256'),(code,orig,broken)
    body=re.sub(r'\(([A-D])\n',r'(\1)\n',body)
    note='官方 PDF 的選項標記缺右括號；本站僅補齊選項分隔，題文與官方答案不變。'
    patches.append({'orig':orig,'lang':'zh' if i<expected//2 else 'en','note':note})
   parts=re.split(r'\(\s*([A-D])\s*\)',body);assert len(parts) in (7,9) and parts[1::2]==list('ABCD')[:len(parts)//2],(code,i,body)
   lang='zh' if i<expected//2 else 'en';rev=re.search(r'\(R(\d+)\)',raw[:header.start()])
   figures=images[image_index:image_index+figure_count];assert len(figures)==figure_count
   image_index+=figure_count
   q={'seq':i+1,'pdfQuestion':int(header[2]),'orig':orig,'group':int(group),'difficulty':diff,'lang':lang,'subject':name,'phak':None,'stem':clean(parts[0]),'options':list(map(clean,parts[2::2])),'answer':'ABCD'.index(header[1]),'sourcePage':source[:m.start()].count('\f')+1,'revision':rev[1] if rev else None,'figures':figures}
   if note:q['sourceNote']=note
   if code=='A16' and orig=='0011271' and lang=='en':
    assert q['options'][1].endswith('.')
    q['options'][1]=q['options'][1][:-1]
    patches.append({'orig':orig,'lang':lang,'note':'pdftotext 多出句點；對照原始 PDF 畫面與第二解析器後移除。'})
   assert q['stem'] and q['answer']<len(q['options']),(code,i+1,q)
   if not all(q['options']):
    q['scorable']=False;q['sourceNote']='官方 PDF 的 D 選項留白，待核對；本題不開放計分。'
    pending.append(q);continue
   # Only link general knowledge; the official material remains the authority.
   if code=='A15':q['phak']='phak25c-13' if re.search(r'TAF|METAR|SIGMET|CHART|預報|報告|圖',q['stem'],re.I) else 'phak25c-12'
   if code=='A16':q['phak']='phak25c-7'
   if code=='A17':q['phak']='phak25c-16' if int(header[2])>12 else None
   if code=='A19':q['phak']='phak25c-10'
   questions.append(q)
  assert image_index==len(images),(code,image_index,len(images))
  counts=collections.Counter((q['orig'],q['lang']) for q in questions);assert max(counts.values())==1
  zh={q['orig'] for q in questions if q['lang']=='zh'};en={q['orig'] for q in questions if q['lang']=='en'};assert zh==en|{q['orig'] for q in pending}
  namevar='caa'+code+'Questions';filename='caa-'+code.lower()+'-questions.js'
  (out/filename).write_text('// Generated from CAA official PDF by tools/import-caa-ppl.py.\nexport const '+namevar+'='+json.dumps(questions,ensure_ascii=False,indent=2)+';\nexport const caa'+code+'Pending='+json.dumps(pending,ensure_ascii=False,indent=2)+';\n')
  note='官方題目範例與答案依來源版本保存；不保證為實際試題或現行法規。'
  if code in ('A15','A17'):note+='附圖直接取自同一份官方 PDF，點圖可開啟原圖。'
  docs.append({'id':'caa-ppl-'+code.lower(),'subject':code,'subjectName':name,'exam':'PPL 飛機自用駕駛員檢定','authority':'CAA','authorityName':'交通部民用航空局','sourceUrl':'https://www.caa.gov.tw/ContentAndMorefiles.aspx?a=474&lang=1','fileUrl':url,'fileVersion':version,'note':note})
  report[code]={'fileUrl':url,'fileVersion':version,'pdfSha256':hashlib.sha256(pdf.read_bytes()).hexdigest(),'records':len(questions)+len(pending),'playable':len(questions),'zh':len(zh),'en':sum(q['lang']=='en' for q in questions),'figureOccurrences':len(images),'excluded':len(pending),'pending':pending,'normalizations':patches,'questionsSha256':hashlib.sha256(json.dumps(questions,ensure_ascii=False,sort_keys=True).encode()).hexdigest()}
  print(code,len(questions),'figures',len(images))
 imports=''.join(f"import {{caa{d['subject']}Questions,caa{d['subject']}Pending}} from './caa-{d['subject'].lower()}-questions.js';\n" for d in docs)
 definitions=[]
 for d in docs:definitions.append(json.dumps(d,ensure_ascii=False)[:-1]+f",questions:caa{d['subject']}Questions,pendingQuestions:caa{d['subject']}Pending"+'}')
 (out/'caa-ppl.js').write_text(imports+'export const caaRemaining=['+',\n'.join(definitions)+'];\n')
 (out/'caa-import-report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
if __name__=='__main__':main()
