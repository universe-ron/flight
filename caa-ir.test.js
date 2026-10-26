import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import {caaIrDocuments} from './caa-ir.js';
import {questionId,readState,saveState,storageKey} from './caa-state.js';
import {phakSummary} from './phak-summary.js';
const doc=caaIrDocuments[0],report=JSON.parse(readFileSync('caa-ir-import-report.json')).A03;
test('IR A03 preserves 558 complete official questions and paired answers',()=>{
 assert.equal(caaIrDocuments.length,1);assert.equal(doc.key,'IR-A03');assert.equal(doc.license,'IR');assert.equal(doc.questions.length,558);assert.equal(doc.pendingQuestions.length,0);
 assert.equal(new Set(doc.questions.map(q=>questionId(doc.key,q))).size,558);
 assert.deepEqual(doc.questions.map(q=>q.seq),Array.from({length:558},(_,i)=>i+1));
 assert.equal(doc.questions.filter(q=>q.lang==='zh').length,279);assert.equal(doc.questions.filter(q=>q.lang==='en').length,279);
 for(const q of doc.questions){
  assert.match(q.orig,/^\d{7}$/);assert.ok(q.stem&&q.options.every(Boolean));assert.ok([2,3,4].includes(q.options.length));
  assert.ok(q.answer>=0&&q.answer<q.options.length);assert.ok(q.pdfQuestion>0&&q.sourcePage>0);assert.ok(q.subject);
  assert.doesNotMatch(q.stem+q.options.join(''),/最近更新日期|原始題號|題目圖|[\ue000-\uf8ff]/);
  const pair=doc.questions.find(e=>e.orig===q.orig&&e.lang!==q.lang);assert.ok(pair);assert.equal(pair.answer,q.answer);
  assert.equal(pair.options.length,q.options.length);
  if(q.phak)assert.ok(phakSummary.chapters.some(c=>c.id===q.phak));
 }
});
test('IR preserves official two-choice items instead of inventing extra options',()=>{
 const items=doc.questions.filter(q=>q.options.length===2);
 assert.equal(items.length,4);assert.deepEqual([...new Set(items.map(q=>q.orig))].sort(),['0011032','0011044']);
 assert.deepEqual(report.optionCounts,{'2':4,'3':532,'4':22});
});
test('IR source, PDF version and all 162 official figure references are traceable',()=>{
 assert.equal(doc.fileUrl,'https://www.caa.gov.tw/FileAtt.ashx?lang=1&id=27203');
 assert.equal(doc.figureUrl,'https://www.caa.gov.tw/FileAtt.ashx?lang=1&id=27204');
 assert.match(doc.fileVersion,/110\/12\/27/);assert.equal(doc.fileVersion,doc.figureVersion);assert.equal(report.fileUrl,doc.fileUrl);
 assert.match(report.pdfSha256,/^[a-f0-9]{64}$/);assert.equal(report.records,558);assert.equal(report.playable,558);assert.equal(report.excluded,0);
 const figures=doc.questions.flatMap(q=>q.figures);assert.equal(figures.length,162);assert.equal(figures.length,report.figureOccurrences);
 for(const f of figures){assert.ok(existsSync(f.src));assert.ok(f.width>0&&f.height>0&&f.page>0);}
 for(const q of doc.questions)if(/A03_\s*Fig/i.test(q.stem))assert.ok(q.figures.length);
 assert.equal(report.normalizations.length,3);
 assert.deepEqual(report.normalizations.map(n=>n.orig),['0010786','0010835','0010912']);
});
test('IR stores independent history and never migrates or changes earlier licenses',()=>{
 const old='{"attempts":[],"wrong":[]}',data=new Map([['flightdeck.caa.v1',old],['flightdeck.caa.a03.v1',old],[storageKey('A14'),old],[storageKey('CPL-B01'),old],[storageKey('ATPL-B01'),old]]);
 const store={getItem:k=>data.get(k)??null,setItem:(k,v)=>data.set(k,v)},before=new Map(data);
 assert.deepEqual(readState(doc,store).state,{attempts:[],wrong:[]});assert.equal(data.has(storageKey(doc.key)),false);
 const id=questionId(doc.key,doc.questions[0]);assert.ok(saveState(doc,store,{attempts:[{id,correct:false}],wrong:[id]}));
 assert.deepEqual(readState(doc,store).state.wrong,[id]);assert.ok(saveState(doc,store,{attempts:[],wrong:[]}));
 for(const [key,value] of before)assert.equal(data.get(key),value);
});
