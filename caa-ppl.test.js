import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {caaDocuments} from './caa.js';
import {questionId,resolveQuestion} from './caa-state.js';
import {phakSummary} from './phak-summary.js';
const report=JSON.parse(readFileSync('caa-import-report.json','utf8'));
const expected={A15:130,A16:70,A17:94,A18:100,A19:70,B01:588,B09:410};
for(const [code,total] of Object.entries(expected))test(`${code} official records, answers, source identity and images are complete`,()=>{
 const d=caaDocuments.find(d=>d.subject===code),pending=d.pendingQuestions||[],all=[...d.questions,...pending];
 assert.equal(all.length,total);assert.equal(report[code].records,total);assert.equal(report[code].playable,d.questions.length);
 assert.equal(new Set(all.map(q=>q.seq)).size,total);assert.equal(new Set(all.map(q=>questionId(code,q))).size,total);
 assert.equal(all.filter(q=>q.lang==='zh').length,total/2);assert.equal(all.filter(q=>q.lang==='en').length,total/2);
 assert.equal(d.fileUrl,report[code].fileUrl);assert.equal(d.fileVersion,report[code].fileVersion);
 assert.match(report[code].pdfSha256,/^[a-f0-9]{64}$/);
 for(const q of d.questions){
  assert.match(q.orig,/^\d{7}$/);assert.ok(q.stem);assert.ok(q.options.length>=3&&q.options.length<=4);assert.ok(q.options.every(Boolean));
  assert.ok(q.answer>=0&&q.answer<q.options.length);assert.ok(q.sourcePage>0&&q.pdfQuestion>0);
  assert.doesNotMatch(q.options.join(''),/最近更新日期|原始題號|題目圖/);
  if(q.phak)assert.ok(phakSummary.chapters.some(c=>c.id===q.phak));
  for(const f of q.figures){assert.ok(existsSync(f.src));assert.ok(f.page>=q.sourcePage);assert.ok(f.width>0&&f.height>0);}
  const pair=all.find(x=>x.orig===q.orig&&x.lang!==q.lang);assert.ok(pair);assert.equal(q.answer,pair.answer);
  if(q.figures.length)assert.deepEqual(q.figures.map(f=>f.src),pair.figures.map(f=>f.src));
 }
 assert.equal(d.questions.reduce((n,q)=>n+q.figures.length,0),report[code].figureOccurrences);
 for(const q of pending){assert.equal(q.scorable,false);assert.ok(q.sourceNote);assert.equal(resolveQuestion(d,questionId(code,q)),undefined);}
});
test('PPL has nine independent subjects with 1754 records and one incomplete official item excluded',()=>{
 assert.equal(caaDocuments.length,9);
 assert.equal(caaDocuments.reduce((n,d)=>n+d.questions.length+(d.pendingQuestions?.length||0),0),1754);
 assert.equal(caaDocuments.reduce((n,d)=>n+d.questions.length,0),1753);
 const b01=caaDocuments.find(d=>d.subject==='B01');
 assert.equal(b01.pendingQuestions[0].orig,'0068367');assert.equal(b01.pendingQuestions[0].lang,'en');
 assert.equal(b01.questions.filter(q=>q.sourceNote).length,3);
});
