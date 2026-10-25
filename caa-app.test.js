import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFileSync} from 'node:fs';
import {tracks,sources,questions,pool,score} from './data.js';
import {caaA14} from './caa.js';

function environment(hash,caaStored){
 const elements=new Map(),events={};
 const element=id=>{if(!elements.has(id))elements.set(id,{innerHTML:'',textContent:'',value:'',validity:{valid:true},addEventListener:(type,fn)=>{const key='app:'+type,previous=events[key];events[key]=event=>{previous?.(event);fn(event);};},insertAdjacentHTML(){}});return elements.get(id);};
 const stored=new Map([['flightdeck.v1',null],['flightdeck.study.v1',null],['flightdeck.caa.v1',caaStored]]);
 const context={studyDocuments:[],cleanStudyState:v=>({read:[],answers:{},notes:{}}),chapterProgress:()=>({read:false,answered:false,correct:false,complete:false}),lessons:[],annexes:[],tracks,sources,questions,pool,score,caaA14,document:{querySelector:element,querySelectorAll:()=>[],addEventListener:(type,fn)=>{const previous=events[type];events[type]=event=>{previous?.(event);fn(event);};}},location:{hash},localStorage:{getItem:key=>stored.get(key)??null,setItem:(key,value)=>{stored.set(key,value);}},window:{addEventListener:(type,fn)=>{const previous=events[type];events[type]=event=>{previous?.(event);fn(event);};},scrollTo(){}},setInterval:()=>1,clearInterval(){},console};
 vm.createContext(context);
 vm.runInContext(readFileSync('app.js','utf8').replace(/^import .*;$/gm,''),context);
 return {context,element,events,caa:()=>JSON.parse(stored.get('flightdeck.caa.v1')||'null')};
}

test('CAA page renders official source, version and all 222 questions with per-question practice',()=>{
 const env=environment('#caa');
 const html=env.element('#app').innerHTML;
 assert.match(html,/CAA 學科題庫 · PPL \(A14\)/);
 assert.match(html,/FileAtt\.ashx\?lang=1&id=14461/);
 assert.match(html,/105\/12\/01/);
 assert.match(env.element('#caa-results').innerHTML,/共 222 題/);
 assert.equal((env.element('#caa-results').innerHTML.match(/data-caa-question="\d+"/g)||[]).length,222);
});

test('CAA single-question practice shows official answer (no guessed explanation) and official source',()=>{
 const env=environment('#caa');
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
 let env=environment('#caa');
 env.events.click({target:{closest:()=>({dataset:{caaQuestion:String(q.seq)}})}});
 env.events.click({target:{closest:()=>({dataset:{answer:String(wrongAnswer)}})}});
 env.events.click({target:{closest:()=>({dataset:{action:'check'}})}});
 env.events.click({target:{closest:()=>({dataset:{action:'next'}})}});
 let st=env.caa();
 assert.equal(st.attempts.length,1);
 assert.deepEqual(st.wrong,[q.seq]);
 assert.equal(st.attempts[0].correct,false);
 // reload with stored state, wrong review should list it
 env=environment('#caa',JSON.stringify(st));
 assert.match(env.element('#app').innerHTML,/重練錯題（1）/);
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
 const env=environment('#caa');
 env.element('#caa-lang').value='en';
 vm.runInContext("caaLang='en';drawCaa();",env.context);
 assert.equal((env.element('#caa-results').innerHTML.match(/data-caa-question="\d+"/g)||[]).length,111);
});

test('CAA items adapt to the quiz shape and keep official fields separated from display fields',()=>{
 const env=environment('#caa');
 const item=vm.runInContext('caaItem(caaA14.questions[0])',env.context);
 assert.equal(item.track,'CAA');
 assert.equal(item.id,caaA14.questions[0].seq);
 assert.equal(item.kind,'官方題目範例');
 assert.equal(item.explanation,'');
 assert.equal(item.options.length,3);
 assert.ok(item.orig&&item.seq);
});


test('CAA results return to the CAA review page instead of the unrelated demo question bank',()=>{
 const env=environment('#caa');
 const q=caaA14.questions[0];
 env.events.click({target:{closest:()=>({dataset:{caaQuestion:String(q.seq)}})}});
 env.events.click({target:{closest:()=>({dataset:{answer:String((q.answer+1)%3)}})}});
 env.events.click({target:{closest:()=>({dataset:{action:'check'}})}});
 env.events.click({target:{closest:()=>({dataset:{action:'next'}})}});
 env.events.click({target:{closest:()=>({dataset:{action:'mistakes'}})}});
 assert.equal(env.context.location.hash,'#caa');
 assert.match(env.element('#app').innerHTML,/重練錯題（1）/);
});

test('CAA topic filter includes a selected all-topics option on first load',()=>{
 const env=environment('#caa');
 assert.match(env.element('#app').innerHTML,/<option value="all" selected>所有主題<\/option>/);
});

test('CAA practice warns when browser storage cannot save answers',()=>{
 const env=environment('#caa');
 env.context.localStorage.setItem=()=>{throw new Error('Storage disabled');};
 const q=caaA14.questions[0];
 env.events.click({target:{closest:()=>({dataset:{caaQuestion:String(q.seq)}})}});
 env.events.click({target:{closest:()=>({dataset:{answer:String(q.answer)}})}});
 env.events.click({target:{closest:()=>({dataset:{action:'check'}})}});
 assert.match(env.element('#app').innerHTML,/無法儲存 CAA 練習紀錄/);
});


test('every official and self-made question exposes a traceable number and source before answering',()=>{
 const env=environment('#caa');
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
 const env=environment('#caa');
 assert.equal((env.element('#caa-results').innerHTML.match(/class="muted question-origin"/g)||[]).length,222);
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
