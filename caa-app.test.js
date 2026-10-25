import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFileSync} from 'node:fs';
import {tracks,sources,questions,pool,score} from './data.js';
import {caaA14} from './caa.js';
import * as caaUI from './caa-ui.js';

function environment(hash,caaStored){
 const elements=new Map(),events={};
 const element=id=>{if(!elements.has(id))elements.set(id,{innerHTML:'',textContent:'',value:'',validity:{valid:true},addEventListener:(type,fn)=>{const key='app:'+type,previous=events[key];events[key]=event=>{previous?.(event);fn(event);};},insertAdjacentHTML(){}});return elements.get(id);};
 const stored=new Map([['flightdeck.v1',null],['flightdeck.study.v1',null],['flightdeck.caa.v1',caaStored]]);
 const context={studyDocuments:[],cleanStudyState:v=>({read:[],answers:{},notes:{}}),chapterProgress:()=>({read:false,answered:false,correct:false,complete:false}),lessons:[],annexes:[],tracks,sources,questions,pool,score,caaA14,caaUI,document:{querySelector:element,querySelectorAll:()=>[],addEventListener:(type,fn)=>{const previous=events[type];events[type]=event=>{previous?.(event);fn(event);};}},location:{hash},localStorage:{getItem:key=>stored.get(key)??null,setItem:(key,value)=>{stored.set(key,value);}},window:{addEventListener:(type,fn)=>{const previous=events[type];events[type]=event=>{previous?.(event);fn(event);};},scrollTo(){}},setInterval:()=>1,clearInterval(){},console};
 vm.createContext(context);
 vm.runInContext(readFileSync('app.js','utf8').replace(/^import .*;$/gm,''),context);
 return {context,element,events,caa:()=>JSON.parse(stored.get('flightdeck.caa.v1')||'null')};
}

test('CAA question browser defaults to 111 Chinese questions with official source and version',()=>{
 const env=environment('#caa/PPL/A14/questions');
 const html=env.element('#app').innerHTML;
 assert.match(html,/瀏覽全部題目/);
 assert.match(html,/FileAtt\.ashx\?lang=1&amp;id=14461/);
 assert.match(html,/105\/12\/01/);
 assert.match(env.element('#caa-results').innerHTML,/共 111 題/);
 assert.equal((env.element('#caa-results').innerHTML.match(/data-caa-question="\d+"/g)||[]).length,111);
});

test('CAA single-question practice shows official answer (no guessed explanation) and official source',()=>{
 const env=environment('#caa/PPL/A14/questions');
 env.events.click({target:{closest:()=>({dataset:{caaQuestion:String(caaA14.questions[0].seq)}})}});
 const html=env.element('#app').innerHTML;
 assert.ok(html.includes(caaA14.questions[0].stem));
 assert.match(html,/官方題目範例/);
 assert.equal((html.match(/data-answer="\d"/g)||[]).length,3);
 // choose the correct answer and confirm
 const q=caaA14.questions[0];
 env.events.click({target:{closest:()=>({dataset:{answer:String(q.answer)}})}});
 env.events.click({target:{closest:()=>({dataset:{action:'check'}})}});
 const after=env.element('#app').innerHTML;
 assert.match(after,/官方題目範例僅提供答案標示/);
 assert.match(after,/FileAtt\.ashx/);
 assert.match(after,/正確答案 /);
});

test('CAA wrong answers are recorded, appear in review, and clear after a correct answer',()=>{
 const q=caaA14.questions[0];
 const wrongAnswer=(q.answer+1)%3;
 let env=environment('#caa/PPL/A14/questions');
 env.events.click({target:{closest:()=>({dataset:{caaQuestion:String(q.seq)}})}});
 env.events.click({target:{closest:()=>({dataset:{answer:String(wrongAnswer)}})}});
 env.events.click({target:{closest:()=>({dataset:{action:'check'}})}});
 env.events.click({target:{closest:()=>({dataset:{action:'next'}})}});
 let st=env.caa();
 assert.equal(st.attempts.length,1);
 assert.deepEqual(st.wrong,[q.seq]);
 assert.equal(st.attempts[0].correct,false);
 // reload with stored state, wrong review should list it
 env=environment('#caa/PPL/A14/questions',JSON.stringify(st));
 assert.equal(vm.runInContext('caaState.wrong.length',env.context),1);
 // answer correctly now
 env.events.click({target:{closest:()=>({dataset:{caaQuestion:String(q.seq)}})}});
 env.events.click({target:{closest:()=>({dataset:{answer:String(q.answer)}})}});
 env.events.click({target:{closest:()=>({dataset:{action:'check'}})}});
 env.events.click({target:{closest:()=>({dataset:{action:'next'}})}});
 st=env.caa();
 assert.equal(st.attempts.length,2);
 assert.deepEqual(st.wrong,[]);
 assert.equal(st.attempts[1].correct,true);
});

test('CAA lang filter narrows to the English half (111) without touching progress',()=>{
 const env=environment('#caa/PPL/A14/questions');
 env.element('#caa-lang').value='en';
 vm.runInContext("caaLang='en';drawCaa();",env.context);
 assert.equal((env.element('#caa-results').innerHTML.match(/data-caa-question="\d+"/g)||[]).length,111);
});

test('CAA items adapt to the quiz shape and keep official fields separated from display fields',()=>{
 const env=environment('#caa/PPL/A14/questions');
 const item=vm.runInContext('caaItem(caaA14.questions[0])',env.context);
 assert.equal(item.track,'CAA');
 assert.equal(item.id,caaA14.questions[0].seq);
 assert.equal(item.kind,'官方題目範例');
 assert.equal(item.explanation,'');
 assert.equal(item.options.length,3);
 assert.ok(item.orig&&item.seq);
});


test('CAA results return to the CAA review page instead of the unrelated demo question bank',()=>{
 const env=environment('#caa/PPL/A14/questions');
 const q=caaA14.questions[0];
 env.events.click({target:{closest:()=>({dataset:{caaQuestion:String(q.seq)}})}});
 env.events.click({target:{closest:()=>({dataset:{answer:String((q.answer+1)%3)}})}});
 env.events.click({target:{closest:()=>({dataset:{action:'check'}})}});
 env.events.click({target:{closest:()=>({dataset:{action:'next'}})}});
 env.events.click({target:{closest:()=>({dataset:{action:'mistakes'}})}});
 assert.equal(env.context.location.hash,'#caa/PPL/A14');
 assert.equal(vm.runInContext('caaState.wrong.length',env.context),1);
});

test('CAA topic filter includes a selected all-topics option on first load',()=>{
 const env=environment('#caa/PPL/A14/questions');
 assert.match(env.element('#app').innerHTML,/<option value="all" selected>所有主題<\/option>/);
});

test('CAA practice warns when browser storage cannot save answers',()=>{
 const env=environment('#caa/PPL/A14/questions');
 env.context.localStorage.setItem=()=>{throw new Error('Storage disabled');};
 const q=caaA14.questions[0];
 env.events.click({target:{closest:()=>({dataset:{caaQuestion:String(q.seq)}})}});
 env.events.click({target:{closest:()=>({dataset:{answer:String(q.answer)}})}});
 env.events.click({target:{closest:()=>({dataset:{action:'check'}})}});
 assert.match(env.element('#app').innerHTML,/無法儲存 CAA 練習紀錄/);
});


test('every official and self-made question exposes a traceable number and source before answering',()=>{
 const env=environment('#caa/PPL/A14/questions');
 for(const q of caaA14.questions){
  env.context.originQuestion=q;
  const html=vm.runInContext('questionOriginHTML(caaItem(originQuestion))',env.context);
  assert.ok(html.includes('官方題號 '+q.orig));
  assert.ok(html.includes('PDF 第 '+q.seq+' 題'));
  assert.ok(html.includes('href="'+caaA14.fileUrl.replaceAll('&','&amp;')+'"'));
 }
 for(const q of questions){
  env.context.originQuestion=q;
  const html=vm.runInContext('questionOriginHTML(originQuestion)',env.context);
  assert.ok(html.includes('自編題號 '+q.id));
  assert.ok(html.includes(sources[q.source].url.replaceAll('&','&amp;')));
  assert.ok(!html.includes('官方題號'));
 }
 env.events.click({target:{closest:()=>({dataset:{caaQuestion:'1'}})}});
 assert.match(env.element('#app').innerHTML,/官方題號 0011087/);
 assert.match(env.element('#app').innerHTML,/question-origin/);
 assert.doesNotMatch(env.element('#app').innerHTML,/正確答案/);
});

test('question lists and completed review keep source and question numbers visible',()=>{
 const env=environment('#caa/PPL/A14/questions');
 assert.equal((env.element('#caa-results').innerHTML.match(/class="muted question-origin"/g)||[]).length,111);
 const q=caaA14.questions[0];
 env.events.click({target:{closest:()=>({dataset:{caaQuestion:String(q.seq)}})}});
 env.events.click({target:{closest:()=>({dataset:{answer:String(q.answer)}})}});
 env.events.click({target:{closest:()=>({dataset:{action:'check'}})}});
 env.events.click({target:{closest:()=>({dataset:{action:'next'}})}});
 const html=env.element('#app').innerHTML;
 assert.match(html,/<h3>[^]*?question-origin[^]*?<details>/);
 vm.runInContext('saved.track="FAA";list();',env.context);
 assert.match(env.element('#question-results').innerHTML,/自編題號 f1/);
 assert.match(env.element('#question-results').innerHTML,/命題參考來源/);
});


test('exam navigation separates goals, unavailable subjects and the A14 dashboard',()=>{
 const goals=environment('#caa');
 assert.match(goals.element('#app').innerHTML,/#caa\/PPL/);
 assert.match(goals.element('#app').innerHTML,/#caa\/CPL/);
 assert.doesNotMatch(goals.element('#app').innerHTML,/data-caa-question/);
 const ppl=environment('#caa/PPL');
 assert.match(ppl.element('#app').innerHTML,/#caa\/PPL\/A14/);
 assert.equal((ppl.element('#app').innerHTML.match(/disabled>尚未提供/g)||[]).length,8);
 const cpl=environment('#caa/CPL');
 assert.equal((cpl.element('#app').innerHTML.match(/disabled>尚未提供/g)||[]).length,9);
 assert.doesNotMatch(cpl.element('#app').innerHTML,/href="#caa\/CPL\/A14/);
 const subject=environment('#caa/PPL/A14');
 assert.match(subject.element('#app').innerHTML,/data-action="caa-continue"/);
 assert.match(subject.element('#app').innerHTML,/瀏覽全部題目/);
 assert.doesNotMatch(subject.element('#app').innerHTML,/data-caa-question/);
 assert.match(environment('#caa/CPL/A14').element('#app').innerHTML,/這個科目尚未提供/);
});

test('continue practice retains old attempts and starts at an unattempted question in the selected language',()=>{
 const old={attempts:[{id:1,correct:false},{id:112,correct:true}],wrong:[1]};
 const env=environment('#caa/PPL/A14',JSON.stringify(old));
 assert.match(env.element('#app').innerHTML,/已練習 1／111/);
 assert.match(env.element('#app').innerHTML,/複習錯題（1）/);
 env.events.click({target:{closest:()=>({dataset:{action:'caa-continue'}})}});
 assert.equal(vm.runInContext('session.items.length',env.context),10);
 assert.equal(vm.runInContext('session.items[0].seq',env.context),2);
 assert.ok(vm.runInContext('session.items.every(q=>q.lang==="zh")',env.context));
 assert.equal(vm.runInContext('caaState.attempts.length',env.context),2);
});

test('language-specific statistics and topic batches do not double-count bilingual questions',()=>{
 const state={attempts:[{id:1,correct:false},{id:1,correct:true},{id:112,correct:false}],wrong:[112]};
 assert.deepEqual(caaUI.progress(caaA14,state,'zh'),{total:111,done:1,correct:1,wrong:0});
 assert.deepEqual(caaUI.progress(caaA14,state,'en'),{total:111,done:1,correct:0,wrong:1});
 const env=environment('#caa/PPL/A14');
 env.events.click({target:{closest:()=>({dataset:{caaTopic:'飛操系統'}})}});
 assert.ok(vm.runInContext('session.items.every(q=>q.subject==="飛操系統"&&q.lang==="zh")',env.context));
 assert.ok(vm.runInContext('session.items.length<=10',env.context));
});

test('review hub includes both official and demo wrong-answer sources and can review both languages',()=>{
 const env=environment('#review',JSON.stringify({attempts:[],wrong:[1,112]}));
 assert.match(env.element('#app').innerHTML,/中文 1 題 · 英文 1 題/);
 assert.match(env.element('#app').innerHTML,/#mistakes/);
 assert.match(env.element('#app').innerHTML,/#documents/);
 env.events.click({target:{closest:()=>({dataset:{action:'caa-review-all'}})}});
 assert.equal(vm.runInContext('session.items.length',env.context),2);
 assert.equal(vm.runInContext('new Set(session.items.map(q=>q.lang)).size',env.context),2);
});


test('question map lists the whole current topic, keeps historic answers lit and highlights the current question',()=>{
 const env=environment('#caa/PPL/A14',JSON.stringify({attempts:[{id:3,correct:false}],wrong:[3]}));
 env.events.click({target:{closest:()=>({dataset:{caaQuestion:'3'}})}});
 const current=caaA14.questions.find(q=>q.seq===3);
 const expected=caaA14.questions.filter(q=>q.subject===current.subject&&q.lang==='zh');
 const html=env.element('#app').innerHTML;
 assert.equal((html.match(/data-quiz-jump=/g)||[]).length,expected.length);
 assert.match(html,/class="question-number answered current" data-quiz-jump="3" aria-current="step"/);
 assert.ok(expected.length>1);
 assert.ok(expected.every(q=>html.includes('data-quiz-jump="'+q.seq+'"')));
});

test('jumping outside a practice batch preserves unsubmitted selections and submitted answers',()=>{
 const env=environment('#caa/PPL/A14');
 env.events.click({target:{closest:()=>({dataset:{caaTopic:'飛操系統'}})}});
 const first=vm.runInContext('session.items[0]',env.context);
 const outside=caaA14.questions.find(q=>q.subject===first.subject&&q.lang==='zh'&&!vm.runInContext('session.items.map(q=>q.id)',env.context).includes(q.seq));
 assert.ok(outside,'topic must exceed the initial ten-question batch');
 env.events.click({target:{closest:()=>({dataset:{answer:'0'}})}});
 env.events.click({target:{closest:()=>({dataset:{quizJump:String(outside.seq)}})}});
 assert.equal(vm.runInContext('session.items[session.index].seq',env.context),outside.seq);
 env.events.click({target:{closest:()=>({dataset:{quizJump:String(first.seq)}})}});
 assert.equal(vm.runInContext('session.answers[session.items[session.index].id]',env.context),0);
 assert.equal(env.caa(),null,'choosing an option must not record a submitted answer');
 env.events.click({target:{closest:()=>({dataset:{action:'check'}})}});
 assert.match(env.element('#app').innerHTML,new RegExp('question-number answered current" data-quiz-jump="'+first.seq+'"'));
 const before=vm.runInContext('session.items.length',env.context);
 env.events.click({target:{closest:()=>({dataset:{quizJump:'999999'}})}});
 assert.equal(vm.runInContext('session.items.length',env.context),before);
});

test('exam question map is restricted to the current exam and hides historic answer status',()=>{
 const env=environment('#caa/PPL/A14',JSON.stringify({attempts:[{id:1,correct:true}],wrong:[]}));
 vm.runInContext('start(caaItems([1,2,3]),"exam")',env.context);
 let html=env.element('#app').innerHTML;
 assert.equal((html.match(/data-quiz-jump=/g)||[]).length,3);
 assert.doesNotMatch(html,/class="question-number answered/);
 const firstId=vm.runInContext('session.items[0].id',env.context);
 env.events.click({target:{closest:()=>({dataset:{answer:'1'}})}});
 html=env.element('#app').innerHTML;
 assert.match(html,new RegExp('class="question-number answered current" data-quiz-jump="'+firstId+'"'));
 assert.equal((html.match(/class="question-number answered/g)||[]).length,1);
});
