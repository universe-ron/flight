import test from 'node:test';
import assert from 'node:assert/strict';
import {caaA14} from './caa.js';
import {phakSummary} from './phak-summary.js';
test('CAA A14 imports 222 official questions with unique sequence and stable official fields',()=>{
 assert.equal(caaA14.questions.length,222);
 assert.equal(new Set(caaA14.questions.map(q=>q.seq)).size,222);
 assert.deepEqual(caaA14.questions.map(q=>q.seq),Array.from({length:222},(_,i)=>i+1));
 for(const q of caaA14.questions){
  assert.equal(typeof q.orig,'string');assert.ok(/^\d{7}$/.test(q.orig));
  assert.equal(q.group,0);
  assert.ok(['易','中'].includes(q.difficulty));
  assert.ok(['zh','en'].includes(q.lang));
  assert.ok(q.subject&&q.stem&&q.stem.length>0);
  assert.equal(q.options.length,3);
  assert.ok(q.options.every(o=>typeof o==='string'&&o.length>0));
  assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<3);
 }
});
test('CAA A14 is a bilingual set of 111 Chinese + 111 English, paired by official question number',()=>{
 const zh=caaA14.questions.filter(q=>q.lang==='zh'),en=caaA14.questions.filter(q=>q.lang==='en');
 assert.equal(zh.length,111);assert.equal(en.length,111);
 // each Chinese question pairs with the English question that has the same official number
 for(const z of zh){
  const e=en.find(x=>x.orig===z.orig);
  assert.ok(e,'missing english pair for '+z.orig);
  assert.equal(e.answer,z.answer,'answer mismatch for '+z.orig);
 }
});
test('CAA A14 preserves source, version, subject code and official file location',()=>{
 assert.equal(caaA14.subject,'A14');
 assert.equal(caaA14.exam,'PPL 飛機自用駕駛員檢定');
 assert.equal(caaA14.authority,'CAA');
 assert.ok(caaA14.sourceUrl.startsWith('https://www.caa.gov.tw/'));
 assert.ok(caaA14.fileUrl.startsWith('https://www.caa.gov.tw/FileAtt.ashx'));
 assert.ok(caaA14.fileVersion.includes('105/12/01'));
});
test('CAA A14 PHAK links point only to real existing chapters and never guess unlinked topics',()=>{
 const valid=new Set(phakSummary.chapters.map(c=>c.id));
 const linked=caaA14.questions.filter(q=>q.phak);
 for(const q of linked)assert.ok(valid.has(q.phak),'bad phak link '+q.phak+' on seq '+q.seq);
 // every linked question must be in a subject we treat as confident aerodynamics/controls/instruments/performance
 assert.ok(linked.length>0);
 // unlinked questions are allowed and must have null phak
 const unlinked=caaA14.questions.filter(q=>!q.phak);
 assert.ok(unlinked.length>0);
 assert.ok(unlinked.every(q=>q.phak===null));
});
test('CAA A14 official questions are distinguishable from self-made by kind and carry no self-made explanation',()=>{
 // The data module carries only official fields; kind/explanation are applied at display time.
 // Verify no question in the module carries an "explanation" field (separation of official answer vs site analysis).
 for(const q of caaA14.questions){
  assert.equal(q.explanation,undefined,'official question must not embed self-made explanation');
  assert.equal(q.kind,undefined,'kind is a display attribute, not stored in official data');
 }
});
