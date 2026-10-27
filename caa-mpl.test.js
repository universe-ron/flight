import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import {caaMplDocuments} from './caa-mpl.js';
import {caaDocuments} from './caa.js';
import {questionId,resolveQuestion,readState,saveState,storageKey} from './caa-state.js';
import {phakSummary} from './phak-summary.js';
const report=JSON.parse(readFileSync('caa-mpl-import-report.json'));
const totals={A31:194,A32:368,A33:392,A34:352,A35:336,A36:106,A37:172,B01:588,B09:410,A03:558};
for(const [code,total] of Object.entries(totals))test(`MPL ${code} retains all official records, answers, figures and source version`,()=>{
 const d=caaMplDocuments.find(d=>d.subject===code),all=[...d.questions,...d.pendingQuestions];
 assert.equal(d.license,'MPL');assert.equal(d.key,'MPL-'+code);assert.equal(all.length,total);
 assert.equal(report[code].records,total);assert.equal(report[code].fileUrl,d.fileUrl);assert.equal(report[code].fileVersion,d.fileVersion);
 assert.equal(new Set(all.map(q=>questionId(d.key,q))).size,total);
 assert.equal(all.filter(q=>q.lang==='zh').length,total/2);assert.equal(all.filter(q=>q.lang==='en').length,total/2);
 for(const q of d.questions){
  assert.match(q.orig,/^\d{7}$/);assert.ok(q.stem&&q.options.every(Boolean));assert.ok(q.options.length>=2&&q.options.length<=4);
  assert.ok(q.answer>=0&&q.answer<q.options.length);assert.ok(q.sourcePage>0&&q.pdfQuestion>0);
  assert.doesNotMatch(q.stem+q.options.join(''),/最近更新日期|原始題號|題目圖|[\ue000-\uf8ff]/);
  const pair=all.find(x=>x.orig===q.orig&&x.lang!==q.lang);assert.ok(pair);assert.equal(pair.answer,q.answer);
  if(q.phak)assert.ok(phakSummary.chapters.some(c=>c.id===q.phak));
  for(const f of q.figures){assert.ok(existsSync(f.src));assert.ok(f.width>0&&f.height>0);assert.ok(f.page>=q.sourcePage);}
 }
 assert.equal(d.questions.reduce((n,q)=>n+q.figures.length,0),report[code].figureOccurrences);
 for(const q of d.pendingQuestions){assert.equal(q.scorable,false);assert.equal(resolveQuestion(d,questionId(d.key,q)),undefined);}
});
test('MPL imports 3476 records, excludes one incomplete question, and verifies shared PDF hashes',()=>{
 assert.equal(caaMplDocuments.length,10);assert.equal(caaMplDocuments.reduce((n,d)=>n+d.questions.length+d.pendingQuestions.length,0),3476);
 assert.equal(caaMplDocuments.reduce((n,d)=>n+d.questions.length,0),3475);
 const pplReport=JSON.parse(readFileSync('caa-import-report.json'));
 for(const code of ['B01','B09']){assert.equal(report[code].pdfSha256,pplReport[code].pdfSha256);assert.equal(report[code].sharedWith,'PPL-'+code);}
});
test('shared B01 questions never migrate or overwrite PPL history in MPL',()=>{
 const ppl=caaDocuments.find(d=>d.subject==='B01'),cpl=caaMplDocuments.find(d=>d.subject==='B01'),q=ppl.questions[0];
 const old=JSON.stringify({attempts:[{id:questionId('B01',q),correct:false}],wrong:[questionId('B01',q)]});
 const data=new Map([[storageKey('B01'),old],['flightdeck.caa.b01.v1',old]]),store={getItem:k=>data.get(k)??null,setItem:(k,v)=>data.set(k,v)};
 assert.deepEqual(readState(cpl,store).state,{attempts:[],wrong:[]});
 assert.ok(saveState(cpl,store,{attempts:[{id:questionId(cpl.key,q),correct:true}],wrong:[]}));
 assert.equal(readState(cpl,store).state.attempts[0].id,'MPL-B01:'+q.orig+':zh');
 assert.equal(data.get(storageKey('B01')),old);assert.equal(readState(ppl,store).state.wrong.length,1);
 assert.ok(saveState(cpl,store,{attempts:[],wrong:[]}));assert.equal(readState(ppl,store).state.attempts.length,1);
});

test('MPL instrument data is verified against IR but uses its own official attachment',()=>{
 const ir=JSON.parse(readFileSync('caa-ir-import-report.json')).A03,doc=caaMplDocuments.find(d=>d.subject==='A03');
 assert.equal(report.A03.pdfSha256,ir.pdfSha256);assert.equal(report.A03.sharedWith,'IR-A03');
 assert.equal(doc.fileUrl,'https://www.caa.gov.tw/FileAtt.ashx?lang=1&id=27205');
 assert.equal(doc.figureUrl,'https://www.caa.gov.tw/FileAtt.ashx?lang=1&id=27206');
 assert.equal(doc.questions.filter(q=>q.options.length===2).length,4);
 assert.equal(caaMplDocuments.reduce((n,d)=>n+d.questions.reduce((m,q)=>m+q.figures.length,0),0),372);
});
test('MPL preserves separate PDF and figure versions and normalizes lowercase answers',()=>{
 for(const code of ['A31','A33']){const d=caaMplDocuments.find(d=>d.subject===code);assert.match(d.fileVersion,/110\/09\/03/);assert.equal(d.figureVersion,'106/08/21 更新');}
 const a37=caaMplDocuments.find(d=>d.subject==='A37');assert.match(a37.fileVersion,/105\/12\/01/);assert.equal(a37.figureVersion,'106/08/21 更新');
 const a34=caaMplDocuments.find(d=>d.subject==='A34');assert.ok(a34.questions.filter(q=>q.orig==='0013151').every(q=>q.answer===1));
 assert.equal(report.A34.normalizations.filter(n=>n.orig==='0013151').length,2);
});
