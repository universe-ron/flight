import * as caaStore from './caa-state.js';
import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFileSync} from 'node:fs';
import {tracks,sources,questions,pool,score} from './data.js';
import {caaA13,caaA14,caaDocuments} from './caa.js';
import * as caaUI from './caa-ui.js';

const A14_KEY='flightdeck.caa.a14.v2';
const A13_KEY='flightdeck.caa.a13.v2';

function environment(hash,storage={}){
 const elements=new Map(),events={};
 const element=id=>{if(!elements.has(id))elements.set(id,{innerHTML:'',textContent:'',value:'',validity:{valid:true},addEventListener:(type,fn)=>{const key='app:'+type,previous=events[key];events[key]=event=>{previous?.(event);fn(event);};},insertAdjacentHTML(){}});return elements.get(id);};
 const stored=new Map([['flightdeck.v1',null],['flightdeck.study.v1',null],['flightdeck.caa.v1',null],[A13_KEY,null],[A14_KEY,null],...Object.entries(storage)]);
 const context={studyDocuments:[],cleanStudyState:v=>({read:[],answers:{},notes:{}}),chapterProgress:()=>({read:false,answered:false,correct:false,complete:false}),lessons:[],annexes:[],tracks,sources,questions,pool,score,caaA13,caaA14,caaDocuments,caaUI,caaStore,document:{querySelector:element,querySelectorAll:()=>[],addEventListener:(type,fn)=>{const previous=events[type];events[type]=event=>{previous?.(event);fn(event);};}},location:{hash},localStorage:{getItem:key=>stored.get(key)??null,setItem:(key,value)=>{stored.set(key,value);}},window:{addEventListener:(type,fn)=>{const previous=events[type];events[type]=event=>{previous?.(event);fn(event);};},scrollTo(){}},setInterval:()=>1,clearInterval(){},console};
 vm.createContext(context);
 vm.runInContext(readFileSync('app.js','utf8').replace(/^import .*;$/gm,''),context);
 return {context,element,events,storage:stored};
}
const a14=id=>JSON.parse(environment.storage.get(A14_KEY)||'null');

test('A14 question browser defaults to 111 Chinese questions with official source and version',()=>{
 const env=environment('#caa/PPL/A14/questions');
 const html=env.element('#app').innerHTML;
 assert.match(html,/瀏覽全部題目/);
 assert.match(html,/FileAtt\.ashx\?lang=1&amp;id=14461/);
 assert.match(html,/105\/12\/01/);
 assert.match(env.element('#caa-results').innerHTML,/共 111 題/);
 assert.equal((env.element('#caa-results').innerHTML.match(/data-caa-question="A14:\d+:zh"/g)||[]).length,111);
});

test('A13 question browser defaults to 35 Chinese questions with official source and version',()=>{
 const env=environment('#caa/PPL/A13/questions');
 const html=env.element('#app').innerHTML;
 assert.match(html,/瀏覽全部題目/);
 assert.match(html,/FileAtt\.ashx\?lang=1&amp;id=14459/);
 assert.match(html,/105\/12\/01/);
 assert.match(env.element('#caa-results').innerHTML,/共 35 題/);
 assert.equal((env.element('#caa-results').innerHTML.match(/data-caa-question="A13:\d+:zh"/g)||[]).length,35);
});

test('A14 single-question practice shows official answer and source',()=>{
 const env=environment('#caa/PPL/A14/questions');
 env.events.click({target:{closest:()=>({dataset:{caaQuestion:'A14:0011087:zh'}})}});
 const html=env.element('#app').innerHTML;
 assert.ok(html.includes(caaA14.questions[0].stem));
 assert.match(html,/官方題目範例/);
 assert.equal((html.match(/data-answer="\d"/g)||[]).length,3);
 const q=caaA14.questions[0];
 env.events.click({target:{closest:()=>({dataset:{answer:String(q.answer)}})}});
 env.events.click({target:{closest:()=>({dataset:{action:'check'}})}});
 const after=env.element('#app').innerHTML;
 assert.match(after,/官方題目範例僅提供答案標示/);
 assert.match(after,/FileAtt\.ashx/);
 assert.match(after,/正確答案 /);
});

test('A13 single-question practice shows official answer and source',()=>{
 const env=environment('#caa/PPL/A13/questions');
 env.events.click({target:{closest:()=>({dataset:{caaQuestion:'A13:0011052:zh'}})}});
 const html=env.element('#app').innerHTML;
 assert.ok(html.includes(caaA13.questions[0].stem));
 assert.match(html,/官方題目範例/);
 assert.equal((html.match(/data-answer="\d"/g)||[]).length,3);
 const q=caaA13.questions[0];
 env.events.click({target:{closest:()=>({dataset:{answer:String(q.answer)}})}});
 env.events.click({target:{closest:()=>({dataset:{action:'check'}})}});
 const after=env.element('#app').innerHTML;
 assert.match(after,/官方題目範例僅提供答案標示/);
 assert.match(after,/FileAtt\.ashx/);
 assert.match(after,/正確答案 /);
});

test('A14 wrong answers are recorded with stable IDs and clear after correct answer',()=>{
 const q=caaA14.questions[0];
 const wrongAnswer=(q.answer+1)%3;
 let env=environment('#caa/PPL/A14/questions');
 env.events.click({target:{closest:()=>({dataset:{caaQuestion:'A14:0011087:zh'}})}});
 env.events.click({target:{closest:()=>({dataset:{answer:String(wrongAnswer)}})}});
 env.events.click({target:{closest:()=>({dataset:{action:'check'}})}});
 env.events.click({target:{closest:()=>({dataset:{action:'next'}})}});
 const st=env.storage.get(A14_KEY)?JSON.parse(env.storage.get(A14_KEY)):null;
 assert.equal(st.attempts.length,1);
 assert.deepEqual(st.wrong,['A14:0011087:zh']);
 assert.equal(st.attempts[0].correct,false);
 env=environment('#caa/PPL/A14/questions',{[A14_KEY]:JSON.stringify(st)});
 assert.equal(vm.runInContext('caaState.wrong.length',env.context),1);
 env.events.click({target:{closest:()=>({dataset:{caaQuestion:'A14:0011087:zh'}})}});
 env.events.click({target:{closest:()=>({dataset:{answer:String(q.answer)}})}});
 env.events.click({target:{closest:()=>({dataset:{action:'check'}})}});
 env.events.click({target:{closest:()=>({dataset:{action:'next'}})}});
 const st2=JSON.parse(env.storage.get(A14_KEY));
 assert.equal(st2.attempts.length,2);
 assert.deepEqual(st2.wrong,[]);
 assert.equal(st2.attempts[1].correct,true);
});

test('A13 and A14 records are stored in separate localStorage keys',()=>{
 let env=environment('#caa/PPL/A13/questions');
 env.events.click({target:{closest:()=>({dataset:{caaQuestion:'A13:0011052:zh'}})}});
 env.events.click({target:{closest:()=>({dataset:{answer:String(caaA13.questions[0].answer)}})}});
 env.events.click({target:{closest:()=>({dataset:{action:'check'}})}});
 env.events.click({target:{closest:()=>({dataset:{action:'next'}})}});
 const a13st=JSON.parse(env.storage.get(A13_KEY));
 assert.equal(a13st.attempts.length,1);
 assert.ok(a13st.attempts[0].id.startsWith('A13:'));
 assert.equal(env.storage.get(A14_KEY),null,'A14 storage must remain empty');
});

test('A14 records do not appear in A13 progress and vice versa',()=>{
 const a14st={attempts:[{id:'A14:0011087:zh',correct:false}],wrong:['A14:0011087:zh']};
 const a13st={attempts:[{id:'A13:0011052:zh',correct:true}],wrong:[]};
 const env=environment('#caa/PPL',{[A14_KEY]:JSON.stringify(a14st),[A13_KEY]:JSON.stringify(a13st)});
 const html=env.element('#app').innerHTML;
 assert.match(html,/A13 · 飛航管理程序/);
 assert.match(html,/A14 · 飛機飛航原理/);
 assert.match(html,/中文已練習 1／35/);
 assert.match(html,/中文已練習 1／111/);
});

test('legacy flightdeck.caa.v1 records migrate to A14 stable IDs',()=>{
 const legacy={attempts:[{id:1,correct:false},{id:5,correct:true}],wrong:[1]};
 const env=environment('#caa/PPL/A14',{ 'flightdeck.caa.v1':JSON.stringify(legacy)});
 const st=vm.runInContext('caaDocState("A14")',env.context);
 assert.equal(st.attempts.length,2);
 assert.ok(st.attempts.some(a=>a.id==='A14:0011087:zh'));
 assert.ok(st.attempts.some(a=>a.id==='A14:0011091:zh'));
 assert.equal(st.wrong.length,1);
 assert.equal(st.wrong[0],'A14:0011087:zh');
});

test('A14 lang filter narrows to the English half (111)',()=>{
 const env=environment('#caa/PPL/A14/questions');
 env.element('#caa-lang').value='en';
 vm.runInContext("caaLang='en';drawCaa();",env.context);
 assert.equal((env.element('#caa-results').innerHTML.match(/data-caa-question="A14:\d+:en"/g)||[]).length,111);
});

test('A13 lang filter narrows to the English half (35)',()=>{
 const env=environment('#caa/PPL/A13/questions');
 env.element('#caa-lang').value='en';
 vm.runInContext("caaLang='en';drawCaa();",env.context);
 assert.equal((env.element('#caa-results').innerHTML.match(/data-caa-question="A13:\d+:en"/g)||[]).length,35);
});

test('items adapt to the quiz shape with stable subject-prefixed IDs',()=>{
 const env=environment('#caa/PPL/A14/questions');
 const item14=vm.runInContext('caaItem(caaA14.questions[0],"A14")',env.context);
 assert.equal(item14.track,'CAA');
 assert.equal(item14.id,'A14:0011087:zh');
 assert.equal(item14.code,'A14');
 assert.equal(item14.kind,'官方題目範例');
 const item13=vm.runInContext('caaItem(caaA13.questions[0],"A13")',env.context);
 assert.equal(item13.id,'A13:0011052:zh');
 assert.equal(item13.code,'A13');
});

test('A14 results return to A14 subject page',()=>{
 const env=environment('#caa/PPL/A14/questions');
 env.events.click({target:{closest:()=>({dataset:{caaQuestion:'A14:0011087:zh'}})}});
 env.events.click({target:{closest:()=>({dataset:{answer:String((caaA14.questions[0].answer+1)%3)}})}});
 env.events.click({target:{closest:()=>({dataset:{action:'check'}})}});
 env.events.click({target:{closest:()=>({dataset:{action:'next'}})}});
 env.events.click({target:{closest:()=>({dataset:{action:'mistakes'}})}});
 assert.equal(env.context.location.hash,'#caa/PPL/A14');
});

test('A13 results return to A13 subject page',()=>{
 const env=environment('#caa/PPL/A13/questions');
 env.events.click({target:{closest:()=>({dataset:{caaQuestion:'A13:0011052:zh'}})}});
 env.events.click({target:{closest:()=>({dataset:{answer:String((caaA13.questions[0].answer+1)%3)}})}});
 env.events.click({target:{closest:()=>({dataset:{action:'check'}})}});
 env.events.click({target:{closest:()=>({dataset:{action:'next'}})}});
 env.events.click({target:{closest:()=>({dataset:{action:'mistakes'}})}});
 assert.equal(env.context.location.hash,'#caa/PPL/A13');
});

test('every official question exposes a traceable number and source',()=>{
 const env=environment('#caa/PPL/A14/questions');
 for(const q of caaA14.questions){
  env.context.originQuestion=q;
  const html=vm.runInContext('questionOriginHTML(caaItem(originQuestion,"A14"))',env.context);
  assert.ok(html.includes('官方題號 '+q.orig));
  assert.ok(html.includes('A14 PDF 第 '+q.seq+' 題'));
  assert.ok(html.includes('href="'+caaA14.fileUrl.replaceAll('&','&amp;')+'"'));
 }
 for(const q of caaA13.questions){
  env.context.originQuestion=q;
  const html=vm.runInContext('questionOriginHTML(caaItem(originQuestion,"A13"))',env.context);
  assert.ok(html.includes('官方題號 '+q.orig));
  assert.ok(html.includes('A13 PDF 第 '+q.seq+' 題'));
  assert.ok(html.includes('href="'+caaA13.fileUrl.replaceAll('&','&amp;')+'"'));
 }
 for(const q of questions){
  env.context.originQuestion=q;
  const html=vm.runInContext('questionOriginHTML(originQuestion)',env.context);
  assert.ok(html.includes('自編題號 '+q.id));
  assert.ok(html.includes(sources[q.source].url.replaceAll('&','&amp;')));
  assert.ok(!html.includes('官方題號'));
 }
});

test('exam navigation separates goals, unavailable subjects and A13/A14 dashboards',()=>{
 const goals=environment('#caa');
 assert.match(goals.element('#app').innerHTML,/#caa\/PPL/);
 assert.match(goals.element('#app').innerHTML,/#caa\/CPL/);
 const ppl=environment('#caa/PPL');
 assert.match(ppl.element('#app').innerHTML,/#caa\/PPL\/A13/);
 assert.match(ppl.element('#app').innerHTML,/#caa\/PPL\/A14/);
 assert.equal((ppl.element('#app').innerHTML.match(/disabled>尚未提供/g)||[]).length,0);
 const cpl=environment('#caa/CPL');
 assert.equal((cpl.element('#app').innerHTML.match(/disabled>尚未提供/g)||[]).length,9);
 assert.doesNotMatch(cpl.element('#app').innerHTML,/href="#caa\/CPL\/A14/);
 const a14subj=environment('#caa/PPL/A14');
 assert.match(a14subj.element('#app').innerHTML,/data-action="caa-continue"/);
 assert.match(a14subj.element('#app').innerHTML,/瀏覽全部題目/);
 const a13subj=environment('#caa/PPL/A13');
 assert.match(a13subj.element('#app').innerHTML,/data-action="caa-continue"/);
 assert.match(a13subj.element('#app').innerHTML,/瀏覽全部題目/);
 assert.match(environment('#caa/CPL/A14').element('#app').innerHTML,/這個科目尚未提供/);
});

test('continue practice retains old attempts and starts at unattempted question',()=>{
 const old={attempts:[{id:'A14:0011087:zh',correct:false},{id:'A14:0011087:en',correct:true}],wrong:['A14:0011087:zh']};
 const env=environment('#caa/PPL/A14',{[A14_KEY]:JSON.stringify(old)});
 assert.match(env.element('#app').innerHTML,/已練習 1／111/);
 assert.match(env.element('#app').innerHTML,/複習錯題（1）/);
 env.events.click({target:{closest:()=>({dataset:{action:'caa-continue'}})}});
 assert.equal(vm.runInContext('session.items.length',env.context),10);
 assert.equal(vm.runInContext('session.items[0].seq',env.context),2);
 assert.ok(vm.runInContext('session.items.every(q=>q.lang==="zh")',env.context));
 assert.equal(vm.runInContext('caaState.attempts.length',env.context),2);
});

test('language-specific statistics and topic batches do not double-count bilingual questions',()=>{
 const state={attempts:[{id:'A14:0011087:zh',correct:false},{id:'A14:0011087:zh',correct:true},{id:'A14:0011087:en',correct:false}],wrong:['A14:0011087:en']};
 assert.deepEqual(caaUI.progress(caaA14,state,'zh'),{total:111,done:1,correct:1,wrong:0});
 assert.deepEqual(caaUI.progress(caaA14,state,'en'),{total:111,done:1,correct:0,wrong:1});
 const env=environment('#caa/PPL/A14');
 env.events.click({target:{closest:()=>({dataset:{caaTopic:'飛操系統'}})}});
 assert.ok(vm.runInContext('session.items.every(q=>q.subject==="飛操系統"&&q.lang==="zh")',env.context));
 assert.ok(vm.runInContext('session.items.length<=10',env.context));
});

test('review hub shows per-subject wrong counts and can review each subject',()=>{
 const a14st={attempts:[],wrong:['A14:0011087:zh','A14:0011087:en']};
 const a13st={attempts:[],wrong:['A13:0011052:zh']};
 const env=environment('#review',{[A14_KEY]:JSON.stringify(a14st),[A13_KEY]:JSON.stringify(a13st)});
 const html=env.element('#app').innerHTML;
 assert.match(html,/CAA · PPL A13/);
 assert.match(html,/CAA · PPL A14/);
 assert.match(html,/1 題待複習/);
 assert.match(html,/2 題待複習/);
 env.events.click({target:{closest:()=>({dataset:{action:'caa-review-all',caaCode:'A13'}})}});
 assert.equal(vm.runInContext('session.items.length',env.context),1);
 assert.equal(vm.runInContext('session.items[0].code',env.context),'A13');
});

test('question map lists the whole current topic for A14',()=>{
 const env=environment('#caa/PPL/A14',{[A14_KEY]:JSON.stringify({attempts:[{id:'A14:0011089:zh',correct:false}],wrong:['A14:0011089:zh']})});
 env.events.click({target:{closest:()=>({dataset:{caaQuestion:'A14:0011089:zh'}})}});
 const current=caaA14.questions.find(q=>q.seq===3);
 const expected=caaA14.questions.filter(q=>q.subject===current.subject&&q.lang==='zh');
 const html=env.element('#app').innerHTML;
 assert.equal((html.match(/data-quiz-jump=/g)||[]).length,expected.length);
 assert.match(html,/class="question-number answered current" data-quiz-jump="A14:0011089:zh" aria-current="step"/);
 assert.ok(expected.length>1);
 assert.ok(expected.every(q=>html.includes('data-quiz-jump="'+caaStore.questionId('A14',q)+'"')));
});

test('question map lists the whole current topic for A13',()=>{
 const env=environment('#caa/PPL/A13',{[A13_KEY]:JSON.stringify({attempts:[{id:'A13:0011054:zh',correct:false}],wrong:['A13:0011054:zh']})});
 env.events.click({target:{closest:()=>({dataset:{caaQuestion:'A13:0011054:zh'}})}});
 const current=caaA13.questions.find(q=>q.seq===3);
 const expected=caaA13.questions.filter(q=>q.subject===current.subject&&q.lang==='zh');
 const html=env.element('#app').innerHTML;
 assert.equal((html.match(/data-quiz-jump=/g)||[]).length,expected.length);
 assert.match(html,/class="question-number answered current" data-quiz-jump="A13:0011054:zh" aria-current="step"/);
 assert.ok(expected.length>1);
 assert.ok(expected.every(q=>html.includes('data-quiz-jump="'+caaStore.questionId('A13',q)+'"')));
});

test('exam question map is restricted to the current exam',()=>{
 const env=environment('#caa/PPL/A14');
 vm.runInContext('start(caaItems("A14",[1,2,3]),"exam")',env.context);
 let html=env.element('#app').innerHTML;
 assert.equal((html.match(/data-quiz-jump=/g)||[]).length,3);
 assert.doesNotMatch(html,/class="question-number answered/);
 const firstId=vm.runInContext('session.items[0].id',env.context);
 env.events.click({target:{closest:()=>({dataset:{answer:'1'}})}});
 html=env.element('#app').innerHTML;
 assert.match(html,new RegExp('class="question-number answered current" data-quiz-jump="'+firstId+'"'));
 assert.equal((html.match(/class="question-number answered/g)||[]).length,1);
});

test('clearing A14 topic answers does not affect A13 records',()=>{
 const a14st={attempts:[{id:'A14:0011089:zh',correct:false},{id:'A14:0011090:zh',correct:true},{id:'A14:0011089:en',correct:false},{id:'A14:0011087:zh',correct:false}],wrong:['A14:0011089:zh','A14:0011089:en','A14:0011087:zh']};
 const a13st={attempts:[{id:'A13:0011052:zh',correct:false}],wrong:['A13:0011052:zh']};
 const env=environment('#caa/PPL/A14',{[A14_KEY]:JSON.stringify(a14st),[A13_KEY]:JSON.stringify(a13st)});
 const action=name=>env.events.click({target:{closest:()=>({dataset:{action:name}})}});
 env.events.click({target:{closest:()=>({dataset:{caaQuestion:'A14:0011089:zh'}})}});
 env.events.click({target:{closest:()=>({dataset:{answer:'2'}})}});
 action('check');
 const beforeA14=JSON.parse(env.storage.get(A14_KEY));
 const beforeA13=JSON.parse(env.storage.get(A13_KEY));
 action('clear-topic');action('confirm-clear-topic');
 const afterA14=JSON.parse(env.storage.get(A14_KEY));
 const afterA13=JSON.parse(env.storage.get(A13_KEY));
 assert.deepEqual(afterA13,beforeA13,'A13 records must be preserved');
 assert.ok(afterA14.attempts.length<a14st.attempts.length);
});

test('A14 PDF comparison is visible on subject home and question browser',()=>{
 for(const route of ['#caa/PPL/A14','#caa/PPL/A14/questions']){
  const env=environment(route);const html=env.element('#app').innerHTML;
  assert.ok(html.indexOf('對照 A14 官方 PDF')<html.indexOf('<details class="exam-source">'));
 }
 const env=environment('#caa/PPL/A14');
 env.events.click({target:{closest:()=>({dataset:{caaQuestion:'A14:0011089:zh'}})}});
 const html=env.element('#app').innerHTML;
 assert.ok(html.indexOf('對照 A14 官方 PDF')<html.indexOf('<article class="panel">'));
});

test('A13 PDF comparison is visible on subject home and question browser',()=>{
 for(const route of ['#caa/PPL/A13','#caa/PPL/A13/questions']){
  const env=environment(route);const html=env.element('#app').innerHTML;
  assert.ok(html.indexOf('對照 A13 官方 PDF')<html.indexOf('<details class="exam-source">'));
 }
 const env=environment('#caa/PPL/A13');
 env.events.click({target:{closest:()=>({dataset:{caaQuestion:'A13:0011054:zh'}})}});
 const html=env.element('#app').innerHTML;
 assert.ok(html.indexOf('對照 A13 官方 PDF')<html.indexOf('<article class="panel">'));
});

test('PPL cards expose A13 and A14 as available subjects with official files',()=>{
 const env=environment('#caa/PPL');const html=env.element('#app').innerHTML;
 assert.match(html,/<h2>A13 · 飛航管理程序<\/h2>/);
 assert.match(html,/<h2>A14 · 飛機飛航原理<\/h2>/);
 assert.match(html,/href="https:\/\/www.caa.gov.tw\/FileAtt.ashx\?lang=1&amp;id=14459"/);
 assert.match(html,/href="https:\/\/www.caa.gov.tw\/FileAtt.ashx\?lang=1&amp;id=14461"/);
 assert.match(html,/對照 A13 官方 PDF/);
 assert.match(html,/對照 A14 官方 PDF/);
 assert.match(html,/href="#caa\/PPL\/A13"/);
 assert.match(html,/href="#caa\/PPL\/A14"/);
});

test('leave menu returns to the correct subject level for A13 and A14',()=>{
 for(const [code,route] of [['A14','caa/PPL/A14'],['A13','caa/PPL/A13']]){
  const env=environment('#caa/PPL/'+code);
  env.events.click({target:{closest:()=>({dataset:{caaQuestion:code+':1'}})}});
  assert.ok(env.element('#app').innerHTML.includes('data-leave-to="'+route+'"'));
  env.events.click({target:{closest:()=>({dataset:{answer:'0'}})}});
  env.events.click({target:{closest:()=>({dataset:{action:'check'}})}});
  const key=code==='A14'?A14_KEY:A13_KEY;
  const before=env.storage.get(key);
  env.events.click({target:{closest:()=>({dataset:{leaveTo:route}})}});
  assert.equal(env.context.location.hash,'#'+route);
  assert.equal(env.storage.get(key),before);
 }
});

test('A13 practice warns when browser storage cannot save answers',()=>{
 const env=environment('#caa/PPL/A13/questions');
 env.context.localStorage.setItem=()=>{throw new Error('Storage disabled');};
 env.events.click({target:{closest:()=>({dataset:{caaQuestion:'A13:0011052:zh'}})}});
 env.events.click({target:{closest:()=>({dataset:{answer:String(caaA13.questions[0].answer)}})}});
 env.events.click({target:{closest:()=>({dataset:{action:'check'}})}});
 assert.match(env.element('#app').innerHTML,/無法儲存 CAA 練習紀錄/);
});


test('legacy mistakes stay removed after correction, clear and a fresh application load',()=>{
 const legacy=JSON.stringify({attempts:[{id:1,correct:false},{id:1,correct:true}],wrong:[1]});
 const env=environment('#caa/PPL/A14/questions',{'flightdeck.caa.v1':legacy});
 assert.equal(JSON.parse(env.storage.get(A14_KEY)).attempts.length,2);
 assert.deepEqual(JSON.parse(env.storage.get(A14_KEY)).wrong,[]);
 env.events.click({target:{closest:()=>({dataset:{caaQuestion:'A14:1'}})}});
 env.events.click({target:{closest:()=>({dataset:{action:'clear-topic'}})}});
 env.events.click({target:{closest:()=>({dataset:{action:'confirm-clear-topic'}})}});
 const fresh=environment('#caa/PPL/A14/questions',Object.fromEntries(env.storage));
 assert.equal(vm.runInContext('caaDocState("A14").attempts.length',fresh.context),0);
 assert.equal(vm.runInContext('caaDocState("A14").wrong.length',fresh.context),0);
 assert.equal(fresh.storage.get('flightdeck.caa.v1'),legacy);
});

for(const doc of caaDocuments.filter(d=>!['A13','A14'].includes(d.subject)))test(`${doc.subject} supports source, answers, progress, review and isolated clear`,()=>{
 const code=doc.subject,q=doc.questions[0],id=caaStore.questionId(code,q),key=caaStore.storageKey(code);
 const old=JSON.stringify({attempts:[{id:'A14:0011087:zh',correct:false}],wrong:['A14:0011087:zh']});
 const env=environment('#caa/PPL/'+code+'/questions',{[A14_KEY]:old});
 env.events.click({target:{closest:()=>({dataset:{caaQuestion:id}})}});
 let html=env.element('#app').innerHTML;assert.ok(html.includes(q.orig));assert.ok(html.includes(doc.fileUrl.replaceAll('&','&amp;')));
 if(q.figures.length)assert.ok(html.includes(q.figures[0].src));
 env.events.click({target:{closest:()=>({dataset:{answer:String((q.answer+1)%q.options.length)}})}});
 env.events.click({target:{closest:()=>({dataset:{action:'check'}})}});
 assert.deepEqual(JSON.parse(env.storage.get(key)).wrong,[id]);
 const review=environment('#review',Object.fromEntries(env.storage));
 assert.ok(review.element('#app').innerHTML.includes('data-caa-code="'+code+'"'));
 review.events.click({target:{closest:()=>({dataset:{action:'caa-review-all',caaCode:code}})}});
 assert.ok(review.element('#app').innerHTML.includes(q.orig));
 review.events.click({target:{closest:()=>({dataset:{answer:String(q.answer)}})}});
 review.events.click({target:{closest:()=>({dataset:{action:'check'}})}});
 assert.deepEqual(JSON.parse(review.storage.get(key)).wrong,[]);
 review.events.click({target:{closest:()=>({dataset:{action:'clear-topic'}})}});
 review.events.click({target:{closest:()=>({dataset:{action:'confirm-clear-topic'}})}});
 assert.deepEqual(JSON.parse(review.storage.get(key)),{attempts:[],wrong:[]});
 assert.equal(review.storage.get(A14_KEY),old);
});
test('incomplete B01 English item is visible with official ID and cannot enter a practice queue',()=>{
 const env=environment('#caa/PPL/B01/questions');
 vm.runInContext("caaLang='en';drawCaa();",env.context);
 const html=env.element('#caa-results').innerHTML;
 assert.match(html,/data-caa-question="B01:0068367:en" disabled/);assert.match(html,/待核對，不計分/);
 env.events.click({target:{closest:()=>({dataset:{caaQuestion:'B01:0068367:en'}})}});
 assert.equal(vm.runInContext('session',env.context),null);
 vm.runInContext('caaBatch()',env.context);
 assert.ok(vm.runInContext('session.items.every(q=>q.id!=="B01:0068367:en")',env.context));
});
