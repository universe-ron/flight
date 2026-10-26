import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import {caaCplDocuments} from './caa-cpl.js';
import {caaDocuments} from './caa.js';
import {questionId,resolveQuestion,readState,saveState,storageKey} from './caa-state.js';
import {phakSummary} from './phak-summary.js';
const report=JSON.parse(readFileSync('caa-cpl-import-report.json'));
const totals={A21:442,A22:480,A23:376,A24:296,A25:382,A26:256,A27:150,B01:588,B09:410};
for(const [code,total] of Object.entries(totals))test(`CPL ${code} retains all official records, answers, figures and source version`,()=>{
 const d=caaCplDocuments.find(d=>d.subject===code),all=[...d.questions,...d.pendingQuestions];
 assert.equal(d.license,'CPL');assert.equal(d.key,'CPL-'+code);assert.equal(all.length,total);
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
test('CPL imports 3380 records, excludes one incomplete question, and verifies shared PDF hashes',()=>{
 assert.equal(caaCplDocuments.length,9);assert.equal(caaCplDocuments.reduce((n,d)=>n+d.questions.length+d.pendingQuestions.length,0),3380);
 assert.equal(caaCplDocuments.reduce((n,d)=>n+d.questions.length,0),3379);
 const pplReport=JSON.parse(readFileSync('caa-import-report.json'));
 for(const code of ['B01','B09']){assert.equal(report[code].pdfSha256,pplReport[code].pdfSha256);assert.equal(report[code].sharedWith,'PPL-'+code);}
});
test('shared B01 questions never migrate or overwrite PPL history in CPL',()=>{
 const ppl=caaDocuments.find(d=>d.subject==='B01'),cpl=caaCplDocuments.find(d=>d.subject==='B01'),q=ppl.questions[0];
 const old=JSON.stringify({attempts:[{id:questionId('B01',q),correct:false}],wrong:[questionId('B01',q)]});
 const data=new Map([[storageKey('B01'),old],['flightdeck.caa.b01.v1',old]]),store={getItem:k=>data.get(k)??null,setItem:(k,v)=>data.set(k,v)};
 assert.deepEqual(readState(cpl,store).state,{attempts:[],wrong:[]});
 assert.ok(saveState(cpl,store,{attempts:[{id:questionId(cpl.key,q),correct:true}],wrong:[]}));
 assert.equal(readState(cpl,store).state.attempts[0].id,'CPL-B01:'+q.orig+':zh');
 assert.equal(data.get(storageKey('B01')),old);assert.equal(readState(ppl,store).state.wrong.length,1);
 assert.ok(saveState(cpl,store,{attempts:[],wrong:[]}));assert.equal(readState(ppl,store).state.attempts.length,1);
});
