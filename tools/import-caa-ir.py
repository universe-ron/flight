#!/usr/bin/env python3
"""Rebuild aircraft IR A03 from official CAA PDF. Requires curl, pdftotext, PyMuPDF.
Usage: python tools/import-caa-ir.py --cache /tmp/caa-ir
"""
import argparse,collections,hashlib,json,pathlib,re,subprocess
import pymupdf
CODE='A03';COUNT=558
FILE_URL='https://www.caa.gov.tw/FileAtt.ashx?lang=1&id=27203'
FIGURE_URL='https://www.caa.gov.tw/FileAtt.ashx?lang=1&id=27204'
VERSION='110/12/27 更新（2021/12/27）'
META=re.compile(r'原始題號\s*[:：]\s*(\d+)\s*題組\s*[:：]\s*(\d+)\s*難易度\s*[:：]\s*(\S+)')
TEXT_FIXES={}
def clean(s):return re.sub(r'\s+',' ',s).strip()
def main():
 ap=argparse.ArgumentParser();ap.add_argument('--cache',type=pathlib.Path,required=True);ap.add_argument('--output',type=pathlib.Path,default=pathlib.Path(__file__).resolve().parents[1]);a=ap.parse_args()
 a.cache.mkdir(parents=True,exist_ok=True);out=a.output;figdir=out/'assets/caa';figdir.mkdir(parents=True,exist_ok=True)
 pdf=a.cache/'A03.pdf';txt=a.cache/'A03.txt'
 if not pdf.exists():subprocess.run(['curl','-fLsS','--retry','2',FILE_URL,'-o',str(pdf)],check=True)
 subprocess.run(['pdftotext','-layout',str(pdf),str(txt)],check=True)
 source=txt.read_text();matches=list(META.finditer(source));assert len(matches)==COUNT,len(matches)
 images=[]
 with pymupdf.open(pdf) as doc:
  for pn,page in enumerate(doc,1):
   for info in sorted(page.get_image_info(xrefs=True),key=lambda x:(x['bbox'][1],x['bbox'][0])):
    image=doc.extract_image(info['xref']);digest=hashlib.sha256(image['image']).hexdigest()[:16];path=figdir/(digest+'.'+image['ext']);path.write_bytes(image['image'])
    images.append({'src':path.relative_to(out).as_posix(),'page':pn,'width':image['width'],'height':image['height']})
 questions=[];pending=[];image_index=0;patches=[]
 for i,m in enumerate(matches):
  orig,group,diff=m.groups();raw=source[m.end():matches[i+1].start() if i+1<len(matches) else len(source)]
  raw=re.sub(r'^[ \t]*\d+[ \t]*\n(?=\f|$)','',raw,flags=re.M)
  h=re.search(r'\(\s*([A-Da-d])\s*\)\s*(\d+)\s*[.．]',raw);assert h,(i+1,orig,'answer header')
  body=raw[h.end():];body=re.sub(r'\(A03\)[^\n]*\n[\s\S]*$','',body);figure_count=body.count('題目圖');body=body.split('題目圖')[0]
  lang='zh' if i<COUNT//2 else 'en';note=None
  if re.findall(r'\(([A-D])\n',body):
   assert lang=='zh' and orig in ('0010786','0010835','0010912'),(orig,'unexpected broken delimiter')
   body=re.sub(r'\(([A-D])\n',r'(\1)\n',body);note='官方 PDF 的選項標記缺右括號；本站僅補齊選項分隔，題文與官方答案不變。'
   patches.append({'orig':orig,'lang':lang,'note':note})
  parts=re.split(r'\(\s*([A-D])\s*\)',body)
  assert len(parts) in (5,7,9) and parts[1::2]==list('ABCD')[:len(parts)//2],(i+1,orig,body)
  rev=re.search(r'\(R(\d+)\)',raw[:h.start()]);figures=images[image_index:image_index+figure_count];assert len(figures)==figure_count;image_index+=figure_count
  q={'seq':i+1,'pdfQuestion':int(h[2]),'orig':orig,'group':int(group),'difficulty':diff,'lang':lang,'subject':'儀器飛航','phak':None,'stem':clean(parts[0]),'options':list(map(clean,parts[2::2])),'answer':'ABCD'.index(h[1].upper()),'sourcePage':source[:m.start()].count('\f')+1,'revision':rev[1] if rev else None,'figures':figures}
  if note:q['sourceNote']=note
  for correction in TEXT_FIXES.get(i+1,[]):
   field=correction['field'];current=q['stem'] if field=='stem' else q['options'][field]
   assert current==correction['before'],(orig,'source text changed')
   if field=='stem':q['stem']=correction['after']
   else:q['options'][field]=correction['after']
   patches.append({'orig':orig,'lang':lang,'field':field,'note':'對照原始 PDF 畫面及第二解析器，移除抽字多出的行尾標點；題文與答案不變。'})
  assert q['stem'] and q['answer']<len(q['options']),(orig,'missing question or answer')
  if not all(q['options']):
   q['scorable']=False;q['sourceNote']='官方 PDF 有選項留白，待核對；本題不開放計分。';pending.append(q);continue
  # General instrument concepts only; local operating rules remain with CAA.
  if re.search(r'Mach meter|馬赫錶|陀螺|gyroscopic|pressure altitude|壓力高度',q['stem'],re.I):q['phak']='phak25c-8'
  questions.append(q)
 assert image_index==len(images),(image_index,len(images))
 allq=questions+pending;ids=collections.Counter((q['orig'],q['lang']) for q in allq);assert max(ids.values())==1
 zh={q['orig'] for q in allq if q['lang']=='zh'};en={q['orig'] for q in allq if q['lang']=='en'};assert zh==en and len(zh)==COUNT//2
 (out/'caa-a03-questions.js').write_text('// Generated from CAA official PDF by tools/import-caa-ir.py.\nexport const caaA03Questions='+json.dumps(questions,ensure_ascii=False,indent=2)+';\nexport const caaA03Pending='+json.dumps(pending,ensure_ascii=False,indent=2)+';\n')
 doc={'id':'caa-ir-a03','key':'IR-A03','license':'IR','subject':'A03','subjectName':'儀器飛航','exam':'儀器飛航檢定（飛機）','authority':'CAA','authorityName':'交通部民用航空局','sourceUrl':'https://www.caa.gov.tw/ContentAndMorefiles.aspx?a=474&lang=1','fileUrl':FILE_URL,'fileVersion':VERSION,'figureUrl':FIGURE_URL,'figureVersion':VERSION,'note':'官方題目範例與答案依來源版本保存；不保證為實際試題或現行法規。附圖直接取自同一份官方 PDF，點圖可開啟原圖。保留原有兩選項題型。'}
 (out/'caa-ir.js').write_text("import {caaA03Questions,caaA03Pending} from './caa-a03-questions.js';\nexport const caaIrDocuments=["+json.dumps(doc,ensure_ascii=False)[:-1]+',questions:caaA03Questions,pendingQuestions:caaA03Pending}];\n')
 report={'A03':{'fileUrl':FILE_URL,'fileVersion':VERSION,'figureUrl':FIGURE_URL,'figureVersion':VERSION,'pdfSha256':hashlib.sha256(pdf.read_bytes()).hexdigest(),'records':len(allq),'playable':len(questions),'zh':sum(q['lang']=='zh' for q in questions),'en':sum(q['lang']=='en' for q in questions),'figureOccurrences':len(images),'excluded':len(pending),'pending':pending,'normalizations':patches,'optionCounts':dict(collections.Counter(len(q['options']) for q in questions)),'questionsSha256':hashlib.sha256(json.dumps(questions,ensure_ascii=False,sort_keys=True).encode()).hexdigest()}}
 (out/'caa-ir-import-report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
 print('A03',len(questions),'playable;',len(pending),'pending;',len(images),'figure references')
if __name__=='__main__':main()
