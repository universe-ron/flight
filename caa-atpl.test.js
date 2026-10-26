import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import {caaAtplDocuments} from './caa-atpl.js';
import {caaDocuments} from './caa.js';
import {questionId,resolveQuestion,readState,saveState,storageKey} from './caa-state.js';
import {phakSummary} from './phak-summary.js';
const report=JSON.parse(readFileSync('caa-atpl-import-report.json'));
const totals={A41:172,A42:368,A43:470,A44:380,A45:382,A46:120,B01:588,B09:410};
for(const [code,total] of Object.entries(totals))test(`ATPL ${code} retains all official records, answers, figures and source version`,()=>{
 const d=caaAtplDocuments.find(d=>d.subject===code),all=[...d.questions,...d.pendingQuestions];
 assert.equal(d.license,'ATPL');assert.equal(d.key,'ATPL-'+code);assert.equal(all.length,total);
 assert.equal(report[code].records,total);assert.equal(report[code].fileUrl,d.fileUrl);assert.equal(report[code].fileVersion,d.fileVersion);
 assert.equal(new Set(all.map(q=>questionId(d.key,q))).size,total);
 assert.equal(all.filter(q=>q.lang==='zh').length,total/2);assert.equal(all.filter(q=>q.lang==='en').length,total/2);
 for(const q of d.questions){
  assert.match(q.orig,/^\d{7}$/);assert.ok(q.stem&&q.options.every(Boolean));assert.ok(q.options.length>=3&&q.options.length<=4);
  assert.ok(q.answer>=0&&q.answer<q.options.length);assert.ok(q.sourcePage>0&&q.pdfQuestion>0);
  assert.doesNotMatch(q.stem+q.options.join(''),/最近更新日期|原始題號|題目圖|[\ue000-\uf8ff]/);
  const pair=all.find(x=>x.orig===q.orig&&x.lang!==q.lang);assert.ok(pair);assert.equal(pair.answer,q.answer);
  if(q.phak)assert.ok(phakSummary.chapters.some(c=>c.id===q.phak));
  for(const f of q.figures){assert.ok(existsSync(f.src));assert.ok(f.width>0&&f.height>0);assert.ok(f.page>=q.sourcePage);}
 }
 assert.equal(d.questions.reduce((n,q)=>n+q.figures.length,0),report[code].figureOccurrences);
 for(const q of d.pendingQuestions){assert.equal(q.scorable,false);assert.equal(resolveQuestion(d,questionId(d.key,q)),undefined);}
});
test('ATPL imports 2890 records, excludes one incomplete question, and verifies shared PDF hashes',()=>{
 assert.equal(caaAtplDocuments.length,8);assert.equal(caaAtplDocuments.reduce((n,d)=>n+d.questions.length+d.pendingQuestions.length,0),2890);
 assert.equal(caaAtplDocuments.reduce((n,d)=>n+d.questions.length,0),2889);
 const pplReport=JSON.parse(readFileSync('caa-import-report.json'));
 for(const code of ['B01','B09']){assert.equal(report[code].pdfSha256,pplReport[code].pdfSha256);assert.equal(report[code].sharedWith,'PPL-'+code);}
});
test('shared B01 questions never migrate or overwrite PPL history in ATPL',()=>{
 const ppl=caaDocuments.find(d=>d.subject==='B01'),cpl=caaAtplDocuments.find(d=>d.subject==='B01'),q=ppl.questions[0];
 const old=JSON.stringify({attempts:[{id:questionId('B01',q),correct:false}],wrong:[questionId('B01',q)]});
 const data=new Map([[storageKey('B01'),old],['flightdeck.caa.b01.v1',old]]),store={getItem:k=>data.get(k)??null,setItem:(k,v)=>data.set(k,v)};
 assert.deepEqual(readState(cpl,store).state,{attempts:[],wrong:[]});
 assert.ok(saveState(cpl,store,{attempts:[{id:questionId(cpl.key,q),correct:true}],wrong:[]}));
 assert.equal(readState(cpl,store).state.attempts[0].id,'ATPL-B01:'+q.orig+':zh');
 assert.equal(data.get(storageKey('B01')),old);assert.equal(readState(ppl,store).state.wrong.length,1);
 assert.ok(saveState(cpl,store,{attempts:[],wrong:[]}));assert.equal(readState(ppl,store).state.attempts.length,1);
});

test('ATPL keeps independent question PDF and figure-document versions',()=>{
 for(const code of ['A41','A42','A43']){
  const doc=caaAtplDocuments.find(d=>d.subject===code);
  assert.match(doc.fileVersion,/109\/12\/22/);assert.equal(doc.figureVersion,'106/08/21 更新');
  assert.ok(doc.figureUrl.startsWith('https://www.caa.gov.tw/FileAtt.ashx?'));
 }
 const a44=caaAtplDocuments.find(d=>d.subject==='A44');
 const lower=a44.questions.filter(q=>q.orig==='0014023');assert.equal(lower.length,2);assert.ok(lower.every(q=>q.answer===1));
 assert.equal(report.A44.normalizations.filter(n=>n.orig==='0014023').length,2);
});
