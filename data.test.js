import test from 'node:test';
import assert from 'node:assert/strict';
import {questions,tracks,sources,pool,score} from './data.js';
test('all questions have unique IDs, valid answer and traceable sources',()=>{assert.equal(new Set(questions.map(q=>q.id)).size,questions.length);for(const q of questions){assert.ok(q.options[q.answer]);assert.ok(sources[q.source].url.startsWith('https://'));assert.ok(q.explanation&&q.reviewed&&q.effective);}});
test('jurisdiction pools include shared knowledge without leaking other jurisdictions',()=>{for(const t of tracks){const p=pool(t.id);assert.ok(p.length);assert.ok(p.every(q=>q.track===t.id||q.track==='ICAO'));assert.ok(p.some(q=>q.track===t.id));}});
test('subject filters and incomplete exam scoring',()=>{assert.ok(pool('FAA','導航').every(q=>q.subject==='導航'));const items=questions.slice(0,3);assert.equal(score(items,{}),0);assert.equal(score(items,{[items[0].id]:items[0].answer}),1);assert.equal(score(items,Object.fromEntries(items.map(q=>[q.id,q.answer]))),3);});
