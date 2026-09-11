import {studyDocuments,cleanStudyState,chapterProgress} from './study.js';
import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFileSync} from 'node:fs';
import {lessons,annexes} from './lessons.js';
import {tracks,sources,questions,pool,score} from './data.js';
test('every article has substantial text, valid citations and working quiz references',()=>{assert.equal(new Set(lessons.map(l=>l.id)).size,lessons.length);for(const l of lessons){assert.ok(l.sections.length>=3);assert.ok(l.sections.every(s=>s.text.length>70&&l.refs[s.ref]));assert.ok(l.refs.every(r=>new URL(r.url).protocol==='https:'&&r.version&&r.checked));assert.ok(l.questionIds.every(id=>questions.some(q=>q.id===id)));}});
function environment(hash,existing,chapterStored){const elements=new Map(),events={};const element=id=>{if(!elements.has(id))elements.set(id,{innerHTML:'',textContent:'',value:id==='#lesson-track'?'all':id==='#lesson-subject'?'all':'',validity:{valid:true},addEventListener:(type,fn)=>{const key='app:'+type,previous=events[key];events[key]=event=>{previous?.(event);fn(event);};},insertAdjacentHTML(){}});return elements.get(id);};const stored=new Map([['flightdeck.v1',existing],['flightdeck.study.v1',chapterStored]]);const context={studyDocuments,cleanStudyState,chapterProgress,lessons,annexes,tracks,sources,questions,pool,score,document:{querySelector:element,querySelectorAll:()=>[],addEventListener:(type,fn)=>{const previous=events[type];events[type]=event=>{previous?.(event);fn(event);};}},location:{hash},localStorage:{getItem:key=>stored.get(key)??null,setItem:(key,value)=>{stored.set(key,value);}},window:{addEventListener:(type,fn)=>{const previous=events[type];events[type]=event=>{previous?.(event);fn(event);};},scrollTo(){}},setInterval:()=>1,clearInterval(){},console};vm.createContext(context);vm.runInContext(readFileSync('app.js','utf8').replace(/^import .*;$/gm,''),context);return {context,element,events,stored:()=>JSON.parse(stored.get('flightdeck.v1')),studyStored:()=>JSON.parse(stored.get('flightdeck.study.v1')||'null')};}
test('article routes render sources; old quiz history survives read-progress migration',()=>{const old=JSON.stringify({track:'FAA',attempts:[{id:'i1',correct:true}],wrong:[]});const env=environment('#lesson/angle-of-attack',old);assert.match(env.element('#app').innerHTML,/官方來源與版本/);assert.equal(env.stored().attempts.length,1);env.events.click({target:{closest:()=>({dataset:{read:'angle-of-attack'}})}});assert.deepEqual(env.stored().read,['angle-of-attack']);const reload=environment('#learn',JSON.stringify(env.stored()));assert.match(reload.element('#app').innerHTML,new RegExp(`已讀 1 / ${lessons.length}`));});
test('article quiz launches matching questions and unknown article has recovery link',()=>{const env=environment('#lesson/angle-of-attack');env.events.click({target:{closest:()=>({dataset:{lessonQuiz:'angle-of-attack'}})}});assert.match(env.element('#app').innerHTML,/迎角（Angle of attack）/);assert.match(environment('#lesson/missing').element('#app').innerHTML,/返回學習教室/);});
test('navigation calculator handles example and nonpositive groundspeed',()=>{const env=environment('#learn');for(const [id,value] of [['tas','100'],['wind','20'],['distance','60']])env.element('#'+id).value=value;vm.runInContext('calculate()',env.context);assert.match(env.element('#calc-result').textContent,/80.0 kt.*45.0 分鐘/);env.element('#wind').value='100';vm.runInContext('calculate()',env.context);assert.match(env.element('#calc-result').textContent,/地速需大於 0/);});
test('expanded lessons render goals, misconceptions, self checks and correct chapter quizzes',()=>{for(const l of lessons.filter(l=>l.objectives)){const env=environment('#lesson/'+l.id);const html=env.element('#app').innerHTML;assert.ok(html.includes(l.objectives[0]));assert.ok(html.includes(l.selfCheck.question));assert.ok(html.includes(l.misconception.correction));assert.ok(html.includes(l.refs[0].url));env.events.click({target:{closest:()=>({dataset:{lessonQuiz:l.id}})}});const q=questions.find(q=>q.id===l.questionIds[0]);assert.ok(env.element('#app').innerHTML.includes(q.title));}});
test('learning filters combine jurisdiction, subject and article body search',()=>{const env=environment('#learn');env.element('#lesson-track').value='TW';env.element('#lesson-subject').value='航空氣象';env.element('#lesson-search').value='';vm.runInContext('filterLessons()',env.context);assert.match(env.element('#lesson-grid').innerHTML,/溫度、露點與霧/);assert.doesNotMatch(env.element('#lesson-grid').innerHTML,/逐段讀 METAR/);env.element('#lesson-track').value='FAA';env.element('#lesson-search').value='A2992';vm.runInContext('filterLessons()',env.context);assert.match(env.element('#lesson-grid').innerHTML,/逐段讀 METAR/);assert.match(env.element('#lesson-count').textContent,/1 篇/);env.element('#lesson-search').value='zzzz-no-match';vm.runInContext('filterLessons()',env.context);assert.match(env.element('#lesson-grid').innerHTML,/沒有符合的文章/);});
test('ICAO atlas covers all 19 annexes independently of selected track',()=>{assert.deepEqual(annexes.map(a=>a.number),Array.from({length:19},(_,i)=>i+1));const env=environment('#icao',JSON.stringify({track:'TW',attempts:[],wrong:[]}));assert.match(env.element('#app').innerHTML,/ANNEX 19/);assert.match(env.element('#app').innerHTML,/ICAO 全文教材/);env.element('#annex-group').value='all';env.element('#annex-search').value='Aerodromes';vm.runInContext('filterAnnexes()',env.context);assert.match(env.element('#annex-grid').innerHTML,/ANNEX 14/);assert.doesNotMatch(env.element('#annex-grid').innerHTML,/ANNEX 1<\/span>/);const guide=environment('#icao/icao-foundations');assert.match(guide.element('#app').innerHTML,/返回ICAO 知識專區/);guide.events.click({target:{closest:()=>({dataset:{read:'icao-foundations'}})}});assert.ok(guide.stored().read.includes('icao-foundations'));});
test('chapter navigation, notes and completion keep the original quiz history intact',()=>{const existing=JSON.stringify({track:'TW',attempts:[{id:'t1',correct:true}],wrong:['t2']});const env=environment('#chapter/smm4-1',existing);assert.match(env.element('#app').innerHTML,/官方唯讀文件/);assert.match(env.element('#app').innerHTML,/#chapter\/smm4-2/);env.events['app:input']({target:{id:'study-notes',dataset:{chapter:'smm4-1'},value:'<script>example</script>我的筆記'}});env.events.click({target:{closest:()=>({dataset:{studyRead:'smm4-1'}})}});const c=studyDocuments[0].chapters[0];env.events.click({target:{closest:()=>({dataset:{studyChapter:c.id,studyAnswer:String(c.answer)}})}});assert.match(env.element('#app').innerHTML,/本章閱讀與情境檢核已完成/);assert.match(env.element('#app').innerHTML,/&lt;script&gt;example&lt;\/script&gt;/);assert.ok(env.studyStored().read.includes(c.id));assert.equal(env.studyStored().notes[c.id],'<script>example</script>我的筆記');assert.equal(env.stored().attempts.length,1);assert.deepEqual(env.stored().wrong,['t2']);assert.match(environment('#chapter/missing').element('#app').innerHTML,/找不到這份文件或章節/);assert.match(environment('#document/smm4').element('#app').innerHTML,/0 \/ 9/);});

test('chapter notes and completed state restore after reload',()=>{const c=studyDocuments[0].chapters[0];const saved=JSON.stringify({read:[c.id],answers:{[c.id]:c.answer},notes:{[c.id]:'下次複習這個例子'}});const env=environment('#chapter/'+c.id,undefined,saved);assert.match(env.element('#app').innerHTML,/下次複習這個例子/);assert.match(env.element('#app').innerHTML,/本章閱讀與情境檢核已完成/);assert.match(environment('#document/smm4',undefined,saved).element('#app').innerHTML,/1 \/ 9/);});

test('PHAK entry and all chapters render FAA material without ICAO reader labels',()=>{
 const d=studyDocuments.find(d=>d.id==='phak25c');
 for(const route of ['#phak','#document/phak25c']){
  const env=environment(route);assert.equal(env.element('#page-name').textContent,'PHAK 飛行知識');
  assert.match(env.element('#app').innerHTML,/0 \/ 17/);assert.match(env.element('#app').innerHTML,/#chapter\/phak25c-17/);
 }
 for(const c of d.chapters){
  const env=environment('#chapter/'+c.id),html=env.element('#app').innerHTML;
  assert.equal(env.element('#page-name').textContent,'PHAK 飛行知識');
  assert.ok(html.includes(c.reader));assert.ok(html.includes(c.detailSections[4].title));
  assert.ok(html.includes(c.detailSections[0].locator));assert.match(html,/本章 FAA 原文 PDF/);
  assert.doesNotMatch(html,/ICAO 官方補充|唯讀文件|ICAO 官方文件/);
  if(c.number>1)assert.ok(html.includes('#chapter/phak25c-'+(c.number-1)));
  if(c.number<17)assert.ok(html.includes('#chapter/phak25c-'+(c.number+1)));
 }
 const library=environment('#documents');assert.equal(library.element('#page-name').textContent,'官方文件學習庫');
 assert.match(library.element('#app').innerHTML,/PHAK/);assert.match(library.element('#app').innerHTML,/Doc 9859/);
 assert.match(environment('#learn').element('#app').innerHTML,/#phak/);
});
test('PHAK read, answer and note changes preserve ICAO records after reload',()=>{
 const a=studyDocuments[0].chapters[0],b=studyDocuments.find(d=>d.id==='phak25c').chapters[9];
 const old={read:[a.id],answers:{[a.id]:a.answer},notes:{[a.id]:'保留 ICAO'}};
 const env=environment('#chapter/'+b.id,undefined,JSON.stringify(old));
 env.events['app:input']({target:{id:'study-notes',dataset:{chapter:b.id},value:'重心＝總力矩÷總重量'}});
 env.events.click({target:{closest:()=>({dataset:{studyRead:b.id}})}});
 env.events.click({target:{closest:()=>({dataset:{studyChapter:b.id,studyAnswer:String(b.answer)}})}});
 const state=env.studyStored();assert.equal(state.notes[a.id],'保留 ICAO');assert.ok(state.read.includes(a.id));
 const reload=environment('#chapter/'+b.id,undefined,JSON.stringify(state));
 assert.match(reload.element('#app').innerHTML,/重心＝總力矩÷總重量/);assert.match(reload.element('#app').innerHTML,/本章閱讀與情境檢核已完成/);
 assert.match(environment('#phak',undefined,JSON.stringify(state)).element('#app').innerHTML,/1 \/ 17/);
});

test('Chapter 1 hierarchical navigation reaches distinct sections and keeps chapter routes intact',()=>{
 const env=environment('#chapter/phak25c-1'),html=env.element('#app').innerHTML;
 assert.match(html,/本章分層目錄 · 54 節/);assert.match(html,/<ol>.*<ol>/s);
 assert.match(html,/Chapter 1 : Introduction to Flying/);
 for(const id of ['sport-privileges','recreational-privileges','medical','dpe-role']){
  const target='detail-phak25c-1-'+id;
  assert.equal(html.split('id="'+target+'"').length-1,1);
  assert.ok(html.includes('data-detail-target="'+target+'"'));
 }
 assert.match(html,/FAA 本節原文 · 1-24/);assert.match(html,/版本與現行資料/);
 let focused=false,scrolled=false;
 env.context.document.getElementById=id=>id==='detail-phak25c-1-medical'?{setAttribute(){},focus(){focused=true;},scrollIntoView(){scrolled=true;}}:null;
 env.events.click({target:{closest:()=>({dataset:{detailTarget:'detail-phak25c-1-medical'}})}});
 assert.ok(focused&&scrolled);assert.equal(env.context.location.hash,'#chapter/phak25c-1');
 const index=environment('#phak').element('#app').innerHTML;
 assert.match(index,/原書目錄逐節講解 · 54 節/);assert.match(index,/主題導讀 · 5 個主題/);
});

test('Chapter 2 renders model comparisons, subsection lists and preserves saved completion',()=>{
 const c=studyDocuments.find(d=>d.id==='phak25c').chapters[1];
 const saved=JSON.stringify({read:[c.id],answers:{[c.id]:c.answer},notes:{[c.id]:'第二章原有筆記'}});
 const env=environment('#chapter/'+c.id,undefined,saved),html=env.element('#app').innerHTML;
 assert.match(html,/本章分層目錄 · 60 節/);assert.match(html,/Chapter 2 : Aeronautical Decision-Making/);
 assert.match(html,/<caption>決策工具比較（本站整理）<\/caption>/);
 assert.match(html,/第二章原有筆記/);assert.match(html,/本章閱讀與情境檢核已完成/);
 for(const s of c.detailSections){const target='detail-'+c.id+'-'+s.id;assert.equal(html.split('id="'+target+'"').length-1,1);assert.ok(html.includes('data-detail-target="'+target+'"'));}
 assert.match(html,/FAA 本節原文 · 2-32/);
 assert.ok(html.includes(c.detailSections.find(s=>s.id==='pitfalls').points[11]));
 let reached=false;env.context.document.getElementById=id=>id==='detail-phak25c-2-automation-risk'?{setAttribute(){},focus(){},scrollIntoView(){reached=true;}}:null;
 env.events.click({target:{closest:()=>({dataset:{detailTarget:'detail-phak25c-2-automation-risk'}})}});
 assert.ok(reached);assert.equal(env.context.location.hash,'#chapter/phak25c-2');
});

test('Chapter 3 full outline renders supplemental headings, version note and retained study records',()=>{
 const c=studyDocuments.find(d=>d.id==='phak25c').chapters[2];
 const saved=JSON.stringify({read:[c.id],answers:{[c.id]:c.answer},notes:{[c.id]:'第三章原有筆記'}});
 const env=environment('#chapter/'+c.id,undefined,saved),html=env.element('#app').innerHTML;
 assert.match(html,/Chapter 3 : Aircraft Construction/);assert.match(html,/本章分層目錄 · 30 節/);
 assert.match(html,/補入原文標題/);assert.match(html,/FAA MOSAIC/);assert.match(html,/FAA 本節原文 · 3-13/);
 assert.match(html,/第三章原有筆記/);assert.match(html,/本章閱讀與情境檢核已完成/);
 for(const s of c.detailSections){const target='detail-'+c.id+'-'+s.id;assert.equal(html.split('id="'+target+'"').length-1,1);assert.ok(html.includes('data-detail-target="'+target+'"'));}
 assert.match(environment('#phak').element('#app').innerHTML,/原書目錄逐節講解 · 30 節/);
});

test('Chapter 4 renders all detailed sections and retains existing chapter records',()=>{
 const c=studyDocuments.find(d=>d.id==='phak25c').chapters[3];
 const saved=JSON.stringify({read:[c.id],answers:{[c.id]:c.answer},notes:{[c.id]:'第四章複習筆記'}});
 const env=environment('#chapter/'+c.id,undefined,saved),html=env.element('#app').innerHTML;
 assert.match(html,/Chapter 4 : Principles of Flight/);assert.match(html,/本章分層目錄 · 22 節/);
 assert.match(html,/FAA 本節原文 · 4-9/);assert.match(html,/NASA：Bernoulli and Newton/);
 assert.match(html,/第四章複習筆記/);assert.match(html,/本章閱讀與情境檢核已完成/);
 for(const s of c.detailSections){const target='detail-'+c.id+'-'+s.id;assert.equal(html.split('id="'+target+'"').length-1,1);assert.ok(html.includes('data-detail-target="'+target+'"'));}
 assert.match(environment('#phak').element('#app').innerHTML,/原書目錄逐節講解 · 22 節/);
});

test('Chapter 5 full outline, formula examples and source notes render without losing study history',()=>{
 const c=studyDocuments.find(d=>d.id==='phak25c').chapters[4];
 const saved=JSON.stringify({read:[c.id],answers:{[c.id]:c.answer},notes:{[c.id]:'第五章原有筆記'}});
 const env=environment('#chapter/'+c.id,undefined,saved),html=env.element('#app').innerHTML;
 assert.match(html,/Chapter 5 : Aerodynamics of Flight/);assert.match(html,/本章分層目錄 · 62 節/);
 assert.match(html,/FAA 本節原文 · 5-51/);assert.match(html,/FAA AIM 7-4/);assert.match(html,/70.7 kt/);
 assert.match(html,/第五章原有筆記/);assert.match(html,/本章閱讀與情境檢核已完成/);
 for(const s of c.detailSections){const target='detail-'+c.id+'-'+s.id;assert.equal(html.split('id="'+target+'"').length-1,1);assert.ok(html.includes('data-detail-target="'+target+'"'));}
 let reached=false;env.context.document.getElementById=id=>id==='detail-phak25c-5-buffet'?{setAttribute(){},focus(){},scrollIntoView(){reached=true;}}:null;
 env.events.click({target:{closest:()=>({dataset:{detailTarget:'detail-phak25c-5-buffet'}})}});
 assert.ok(reached);assert.equal(env.context.location.hash,'#chapter/phak25c-5');
 assert.match(environment('#phak').element('#app').innerHTML,/原書目錄逐節講解 · 62 節/);
});

test('Chapter 6 renders all sections and preserves existing notes and completion',()=>{
 const c=studyDocuments.find(d=>d.id==='phak25c').chapters[5];
 const saved=JSON.stringify({read:[c.id],answers:{[c.id]:c.answer},notes:{[c.id]:'第六章原有筆記'}});
 const html=environment('#chapter/'+c.id,undefined,saved).element('#app').innerHTML;
 assert.match(html,/Chapter 6 : Flight Controls/);assert.match(html,/本章分層目錄 · 29 節/);assert.match(html,/補入原文標題/);
 assert.match(html,/FAA 本節原文 · 6-12/);assert.match(html,/第六章原有筆記/);assert.match(html,/本章閱讀與情境檢核已完成/);
 for(const s of c.detailSections){const target='detail-'+c.id+'-'+s.id;assert.equal(html.split('id="'+target+'"').length-1,1);assert.ok(html.includes('data-detail-target="'+target+'"'));}
});

test('Chapter 7 renders all sections and restores notes and completion',()=>{
 const c=studyDocuments.find(d=>d.id==='phak25c').chapters[6];
 const saved=JSON.stringify({read:[c.id],answers:{[c.id]:c.answer},notes:{[c.id]:'第七章原有筆記'}});
 const html=environment('#chapter/'+c.id,undefined,saved).element('#app').innerHTML;
 assert.match(html,/Chapter 7 : Aircraft Systems/);assert.match(html,/本章分層目錄 · 89 節/);
 assert.match(html,/FAA 本節原文 · 7-41/);assert.match(html,/第七章原有筆記/);assert.match(html,/本章閱讀與情境檢核已完成/);
 assert.match(html,/Diluter-Demand Oxygen Systems/);assert.match(html,/www.fda.gov/);
 for(const s of c.detailSections){const target='detail-'+c.id+'-'+s.id;assert.equal(html.split('id="'+target+'"').length-1,1);assert.ok(html.includes('data-detail-target="'+target+'"'));}
});

test('Chapter 8 renders distinct duplicate headings and restores existing progress',()=>{
 const c=studyDocuments.find(d=>d.id==='phak25c').chapters[7];
 const saved=JSON.stringify({read:[c.id],answers:{[c.id]:c.answer},notes:{[c.id]:'第八章原有筆記'}});
 const env=environment('#chapter/'+c.id,undefined,saved),html=env.element('#app').innerHTML;
 assert.match(html,/Chapter 8 : Flight Instruments/);assert.match(html,/本章分層目錄 · 66 節/);
 assert.match(html,/FAA 本節原文 · 8-28/);assert.match(html,/第八章原有筆記/);assert.match(html,/本章閱讀與情境檢核已完成/);
 assert.match(html,/補入原文標題/);
 for(const s of c.detailSections){const target='detail-'+c.id+'-'+s.id;assert.equal(html.split('id="'+target+'"').length-1,1);assert.ok(html.includes('data-detail-target="'+target+'"'));}
 let reached=false;env.context.document.getElementById=id=>id==='detail-phak25c-8-heading-check'?{setAttribute(){},focus(){},scrollIntoView(){reached=true;}}:null;
 env.events.click({target:{closest:()=>({dataset:{detailTarget:'detail-phak25c-8-heading-check'}})}});
 assert.ok(reached);assert.equal(env.context.location.hash,'#chapter/phak25c-8');
 assert.match(environment('#phak').element('#app').innerHTML,/原書目錄逐節講解 · 66 節/);
});

test('Chapter 9 displays regulatory sources and preserves saved learning records',()=>{
 const c=studyDocuments.find(d=>d.id==='phak25c').chapters[8];
 const saved=JSON.stringify({read:[c.id],answers:{[c.id]:c.answer},notes:{[c.id]:'第九章原有筆記'}});
 const env=environment('#chapter/'+c.id,undefined,saved),html=env.element('#app').innerHTML;
 assert.match(html,/Chapter 9 : Flight Manuals and Other Documents/);assert.match(html,/本章分層目錄 · 39 節/);
 assert.match(html,/FAA 本節原文 · 9-13/);assert.match(html,/第九章原有筆記/);assert.match(html,/本章閱讀與情境檢核已完成/);
 assert.match(html,/AC 91-67A/);assert.match(html,/www.ecfr.gov/);assert.match(html,/十二個月/);
 for(const s of c.detailSections){const target='detail-'+c.id+'-'+s.id;assert.equal(html.split('id="'+target+'"').length-1,1);assert.ok(html.includes('data-detail-target="'+target+'"'));}
 let reached=false;env.context.document.getElementById=id=>id==='detail-phak25c-9-special-permit'?{setAttribute(){},focus(){},scrollIntoView(){reached=true;}}:null;
 env.events.click({target:{closest:()=>({dataset:{detailTarget:'detail-phak25c-9-special-permit'}})}});
 assert.ok(reached);assert.equal(env.context.location.hash,'#chapter/phak25c-9');
});

test('Chapter 10 renders calculations and preserves existing notes and completion',()=>{
 const c=studyDocuments.find(d=>d.id==='phak25c').chapters[9];
 const saved=JSON.stringify({read:[c.id],answers:{[c.id]:c.answer},notes:{[c.id]:'第十章原有筆記'}});
 const env=environment('#chapter/'+c.id,undefined,saved),html=env.element('#app').innerHTML;
 assert.match(html,/Chapter 10 : Weight and Balance/);assert.match(html,/本章分層目錄 · 23 節/);
 assert.match(html,/FAA 本節原文 · 10-11/);assert.match(html,/第十章原有筆記/);assert.match(html,/本章閱讀與情境檢核已完成/);
 assert.match(html,/88,620/);assert.match(html,/42.20/);assert.match(html,/−200/);assert.match(html,/MZFW/);
 for(const s of c.detailSections){const target='detail-'+c.id+'-'+s.id;assert.equal(html.split('id="'+target+'"').length-1,1);assert.ok(html.includes('data-detail-target="'+target+'"'));}
 let reached=false;env.context.document.getElementById=id=>id==='detail-phak25c-10-addition-removal'?{setAttribute(){},focus(){},scrollIntoView(){reached=true;}}:null;
 env.events.click({target:{closest:()=>({dataset:{detailTarget:'detail-phak25c-10-addition-removal'}})}});
 assert.ok(reached);assert.equal(env.context.location.hash,'#chapter/phak25c-10');
});

for(const [number,count,english,note,last] of [[11,34,'Aircraft Performance','第十一章原有筆記','obstacles'],[12,51,'Weather Theory','第十二章原有筆記','water-ingestion']]){
 test('Chapter '+number+' renders its full outline and restores saved progress',()=>{
  const c=studyDocuments.find(d=>d.id==='phak25c').chapters[number-1];
  const saved=JSON.stringify({read:[c.id],answers:{[c.id]:c.answer},notes:{[c.id]:note}});
  const env=environment('#chapter/'+c.id,undefined,saved),html=env.element('#app').innerHTML;
  assert.ok(html.includes('Chapter '+number+' : '+english));assert.ok(html.includes('本章分層目錄 · '+count+' 節'));
  assert.ok(html.includes(note));assert.match(html,/本章閱讀與情境檢核已完成/);
  for(const s of c.detailSections){const target='detail-'+c.id+'-'+s.id;assert.equal(html.split('id="'+target+'"').length-1,1);assert.ok(html.includes('data-detail-target="'+target+'"'));}
  const target='detail-'+c.id+'-'+last;let reached=false;env.context.document.getElementById=id=>id===target?{setAttribute(){},focus(){},scrollIntoView(){reached=true;}}:null;
  env.events.click({target:{closest:()=>({dataset:{detailTarget:target}})}});
  assert.ok(reached);assert.equal(env.context.location.hash,'#chapter/'+c.id);
  if(number===11){assert.match(html,/400 ft\/NM/);assert.match(html,/1,320 ft/);assert.match(html,/121.189/);}
  else{assert.match(html,/SCT010 BKN025/);assert.match(html,/chap7_section_1/);assert.match(html,/8083-28B/);}
 });
}


for(const [number,count,english,last] of [[13,45,'Aviation Weather Services','fisb'],[14,90,'Airport Operations','emas-pilot'],[15,33,'Airspace','vfr-minima']]){
 test('Chapter '+number+' renders its bilingual full outline, sources and saved learning state',()=>{
  const c=studyDocuments.find(d=>d.id==='phak25c').chapters[number-1],note='原有第 '+number+' 章筆記';
  const saved=JSON.stringify({read:[c.id],answers:{[c.id]:c.answer},notes:{[c.id]:note}});
  const env=environment('#chapter/'+c.id,undefined,saved),html=env.element('#app').innerHTML;
  assert.ok(html.includes('Chapter '+number+' : '+english));assert.ok(html.includes('Chapter '+number+' : '+c.title));
  assert.ok(html.includes('本章分層目錄 · '+count+' 節'));assert.ok(html.includes(note));assert.match(html,/本章閱讀與情境檢核已完成/);
  for(const s of c.detailSections){const target='detail-'+c.id+'-'+s.id;assert.equal(html.split('id="'+target+'"').length-1,1);assert.ok(html.includes('data-detail-target="'+target+'"'));assert.ok(html.includes(s.source));}
  const target='detail-'+c.id+'-'+last;let reached=false;env.context.document.getElementById=id=>id===target?{setAttribute(){},focus(){},scrollIntoView(){reached=true;}}:null;
  env.events.click({target:{closest:()=>({dataset:{detailTarget:target}})}});
  assert.ok(reached);assert.equal(env.context.location.hash,'#chapter/'+c.id);
  if(number===13){assert.match(html,/2025-01-27/);assert.match(html,/978 MHz/);assert.match(html,/A2992/);}
  if(number===14){assert.match(html,/16_phak_ch14_0/);assert.match(html,/14-30/);assert.match(html,/LUAW/);}
  if(number===15){assert.match(html,/1,200 ft AGL/);assert.match(html,/remain outside/);assert.match(html,/91.225/);}
 });
}
