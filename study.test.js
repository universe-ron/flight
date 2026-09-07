import test from 'node:test';
import assert from 'node:assert/strict';
import {studyDocuments,cleanStudyState,chapterProgress} from './study.js';
test('SMM fourth edition has nine distinct chapter learning packages',()=>{const d=studyDocuments[0];assert.equal(d.chapters.length,9);assert.deepEqual(d.chapters.map(c=>c.number),[1,2,3,4,5,6,7,8,9]);assert.equal(new Set(d.chapters.map(c=>c.id)).size,9);for(const c of d.chapters){assert.ok(c.primer&&c.scenario&&c.explanation&&c.goal);assert.equal(c.prompts.length,2);assert.ok(c.options[c.answer]);assert.equal(new URL(c.source).hostname,'www.icao.int');}});
test('read and correct check are independently required for completion',()=>{const c=studyDocuments[0].chapters[0],state=cleanStudyState(null);assert.equal(chapterProgress(c,state).complete,false);state.read.push(c.id);assert.equal(chapterProgress(c,state).complete,false);state.answers[c.id]=(c.answer+1)%3;assert.equal(chapterProgress(c,state).complete,false);state.answers[c.id]=c.answer;assert.equal(chapterProgress(c,state).complete,true);state.read=[];assert.equal(chapterProgress(c,state).complete,false);});
test('stored chapter data rejects unknown keys and invalid answers; limits notes',()=>{const id=studyDocuments[0].chapters[0].id;const state=cleanStudyState({read:[id,id,'unknown'],answers:{[id]:99,unknown:1},notes:{[id]:'a'.repeat(7000),unknown:'x'}});assert.deepEqual(state.read,[id]);assert.deepEqual(state.answers,{});assert.equal(state.notes[id].length,6000);assert.equal(state.notes.unknown,undefined);assert.deepEqual(cleanStudyState(JSON.parse(JSON.stringify(state))),state);});

test('PHAK covers all 17 chapters with FAA sources, locators and detailed teaching',()=>{
 const d=studyDocuments.find(d=>d.id==='phak25c');
 assert.equal(d.authority,'FAA');assert.equal(d.number,'FAA-H-8083-25C');
 assert.deepEqual(d.chapters.map(c=>c.number),Array.from({length:17},(_,i)=>i+1));
 const ids=studyDocuments.flatMap(d=>d.chapters.map(c=>c.id));assert.equal(new Set(ids).size,ids.length);
 let lastPage=0;
 for(const c of d.chapters){
  assert.equal(c.detailSections.length,5);assert.equal(c.confusions.length,2);
  assert.ok(c.detailSections.every(s=>s.locator&&s.paragraphs.length===2&&s.paragraphs.every(p=>p.length>40)));
  const source=new URL(c.source);assert.equal(source.hostname,'www.faa.gov');
  const page=Number(source.hash.replace('#page=',''));assert.ok(page>lastPage);lastPage=page;
  assert.ok(c.options[c.answer]);assert.ok(c.explanation&&c.scenario&&c.goal);
 }
});
test('ICAO and PHAK progress and notes persist independently in the shared store',()=>{
 const a=studyDocuments[0].chapters[0],b=studyDocuments.find(d=>d.id==='phak25c').chapters[0];
 const state=cleanStudyState({read:[a.id,b.id],answers:{[a.id]:a.answer,[b.id]:(b.answer+1)%3},notes:{[a.id]:'ICAO 筆記',[b.id]:'PHAK 筆記'}});
 assert.ok(chapterProgress(a,state).complete);assert.equal(chapterProgress(b,state).complete,false);
 assert.equal(state.notes[a.id],'ICAO 筆記');assert.equal(state.notes[b.id],'PHAK 筆記');
 assert.deepEqual(cleanStudyState(JSON.parse(JSON.stringify(state))),state);
});
