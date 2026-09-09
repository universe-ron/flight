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
  assert.ok(c.detailSections.length>=5);assert.ok(c.confusions.length>=2);
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

test('PHAK Chapter 1 preserves the supplied outline, parents and original page locations',()=>{
 const c=studyDocuments.find(d=>d.id==='phak25c').chapters[0];
 const expected=[['Introduction','1-1'],['History of Flight','1-2'],['History of the Federal Aviation Administration (FAA)','1-3'],['Transcontinental Air Mail Route','1-4'],['Federal Certification of Pilots and Mechanics','1-4'],['The Federal Aviation Act of 1958','1-6'],['Department of Transportation (DOT)','1-6'],['ATC Automation','1-6'],['The Professional Air Traffic Controllers Organization (PATCO) Strike','1-6'],['The Airline Deregulation Act of 1978','1-7'],['The Role of the FAA','1-7'],['The Code of Federal Regulations (CFR)','1-7'],['Primary Locations of the FAA','1-8'],['Field Offices','1-8'],['Aviation Safety Inspector (ASI)','1-9'],['FAA Safety Team (FAASTeam)','1-9'],['Obtaining Assistance from the FAA','1-9'],['Aeronautical Information Manual (AIM)','1-9'],['Handbooks','1-10'],['Advisory Circulars (ACs)','1-10'],['Flight Publications','1-11'],['Pilot and Aeronautical Information','1-12'],['Notices to Airmen (NOTAMs)','1-12'],['Safety Program Airmen Notification System (SPANS)','1-14'],['Aircraft Classifications and Ultralight Vehicles','1-14'],['Pilot Certifications','1-16'],['Privileges:','1-16'],['Limitations:','1-17'],['Recreational Pilot','1-17'],['Privileges:','1-17'],['Limitations:','1-17'],['Private Pilot','1-17'],['Commercial Pilot','1-18'],['Airline Transport Pilot','1-18'],['Selecting a Flight School','1-18'],['How To Find a Reputable Flight Program','1-19'],['How To Choose a Certificated Flight Instructor (CFI)','1-19'],['The Student Pilot','1-20'],['Basic Requirements','1-20'],['Medical Certification Requirements','1-20'],['Becoming a Pilot','1-21'],['Knowledge and Skill Tests','1-21'],['Knowledge Tests','1-21'],['When To Take the Knowledge Test','1-22'],['Practical Test','1-22'],['When To Take the Practical Test','1-23'],['Who Administers the FAA Practical Tests?','1-23'],['Role of the Certificated Flight Instructor','1-23'],['Role of the Designated Pilot Examiner','1-24'],['Chapter Summary','1-24']];
 assert.equal(c.detailSections.length,54);
 assert.deepEqual(c.detailSections.filter(s=>!s.supplementalHeading).map(s=>[s.english,s.printedPage]),expected);
 const seen=new Set();for(const s of c.detailSections){assert.ok(!seen.has(s.id));if(s.parent)assert.ok(seen.has(s.parent),'parent precedes child: '+s.id);seen.add(s.id);assert.equal(s.source,'https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page='+s.printedPage.split('-')[1]);}
 for(const parent of ['sport','recreational'])assert.deepEqual(c.detailSections.filter(s=>s.parent===parent).map(s=>s.english),['Privileges:','Limitations:']);
 assert.ok(c.detailSections.find(s=>s.id==='practical').currentNote);
 assert.equal(c.checked,'2026-09-10');
});

test('Chapter 2 covers all 60 TOC sections with distinct model and automation hierarchies',()=>{
 const c=studyDocuments.find(d=>d.id==='phak25c').chapters[1];
 assert.equal(c.detailSections.length,60);
 const seen=new Set();for(const s of c.detailSections){assert.ok(!seen.has(s.id));if(s.parent)assert.ok(seen.has(s.parent));seen.add(s.id);assert.equal(s.source,'https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page='+s.printedPage.split('-')[1]);assert.ok(Number(s.printedPage.split('-')[1])<=32);}
 const children=id=>c.detailSections.filter(s=>s.parent===id).map(s=>s.id);
 assert.deepEqual(children('three-p'),['three-pave','care','team']);
 assert.deepEqual(children('decide'),['decide-detect','decide-estimate','decide-choose','decide-identify','decide-do','decide-evaluate']);
 assert.deepEqual(children('five-ps'),['five-plan','five-plane','five-pilot','five-passengers','five-programming']);
 assert.equal(c.detailSections.filter(s=>s.english==='Risk Management').length,2);
 assert.equal(c.detailSections.find(s=>s.id==='attitudes').points.length,5);
 assert.equal(c.detailSections.find(s=>s.id==='pitfalls').points.length,12);
 assert.equal(c.detailSections.at(-1).printedPage,'2-32');
 assert.deepEqual(c.modelComparison.map(row=>row[0]),['PAVE','5P','3P','CARE','TEAM','DECIDE']);
});
