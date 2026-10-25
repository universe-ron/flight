import test from 'node:test';
import assert from 'node:assert/strict';
import {caaA13,caaA14} from './caa.js';
import {questionId,storageKey,resolveQuestion,readState,saveState} from './caa-state.js';
const memory=entries=>{const data=new Map(entries);return {data,getItem:key=>data.get(key)??null,setItem:(key,value)=>data.set(key,value)};};
const legacy={attempts:[{id:1,correct:false,date:'first'},{id:1,correct:true,date:'second'}],wrong:[1]};
test('migration preserves repeated attempts and latest outcome, then never remerges legacy',()=>{
 const store=memory([['flightdeck.caa.v1',JSON.stringify(legacy)]]);
 const first=readState(caaA14,store);
 assert.equal(first.error,false);assert.equal(first.state.attempts.length,2);assert.deepEqual(first.state.wrong,[]);
 assert.equal(first.state.attempts[1].date,'second');
 assert.equal(first.state.attempts[0].id,questionId('A14',caaA14.questions[0]));
 assert.ok(saveState(caaA14,store,{attempts:[],wrong:[]}));
 assert.deepEqual(readState(caaA14,store).state,{attempts:[],wrong:[]});
 assert.equal(store.data.get('flightdeck.caa.v1'),JSON.stringify(legacy));
});
test('an empty per-subject legacy store takes precedence over older global history',()=>{
 const store=memory([['flightdeck.caa.v1',JSON.stringify(legacy)],['flightdeck.caa.a14.v1','{"attempts":[],"wrong":[]}']]);
 assert.deepEqual(readState(caaA14,store).state,{attempts:[],wrong:[]});
});
test('subject-prefixed legacy records migrate without leaking other subjects',()=>{
 const store=memory([['flightdeck.caa.a13.v1',JSON.stringify({attempts:[{id:'A13:1',correct:false},{id:'A14:1',correct:false}],wrong:['A13:1','A14:1']})]]);
 const state=readState(caaA13,store).state;
 assert.equal(state.attempts.length,1);assert.deepEqual(state.wrong,[questionId('A13',caaA13.questions[0])]);
});
test('official identity remains valid when PDF rows change and distinguishes languages',()=>{
 const q=caaA14.questions[0],id=questionId('A14',q);
 assert.equal(resolveQuestion({...caaA14,questions:[{...q,seq:999}]},id).orig,q.orig);
 assert.notEqual(id,questionId('A14',{...q,lang:'en'}));
});
test('failed migration retains original history and retries successfully',()=>{
 const store=memory([['flightdeck.caa.v1',JSON.stringify(legacy)]]),set=store.setItem;
 store.setItem=()=>{throw new Error('quota');};
 assert.equal(readState(caaA14,store).error,true);
 assert.equal(readState(caaA14,store).state.attempts.length,2);
 assert.equal(store.getItem(storageKey('A14')),null);
 store.setItem=set;assert.equal(readState(caaA14,store).error,false);
});
test('malformed newer storage reports an error without silently resurrecting older records',()=>{
 const store=memory([[storageKey('A14'),'{'],['flightdeck.caa.v1',JSON.stringify(legacy)]]);
 assert.equal(readState(caaA14,store).error,true);assert.equal(store.getItem(storageKey('A14')),'{');
});
