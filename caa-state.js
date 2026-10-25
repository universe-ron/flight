// Persist official identity rather than the PDF row number; retain legacy storage as backup.
export const questionId=(code,q)=>`${code}:${q.orig}:${q.lang}`;
export const storageKey=code=>`flightdeck.caa.${code.toLowerCase()}.v2`;
export function resolveQuestion(doc,id){
 const value=String(id);
 return doc.questions.find(q=>value===questionId(doc.subject,q)||value===`${doc.subject}:${q.seq}`||(doc.subject==='A14'&&value===String(q.seq)));
}
export function normalizeState(doc,raw){
 if(!raw||!Array.isArray(raw.attempts)||!Array.isArray(raw.wrong))throw new Error('Invalid CAA history');
 const attempts=raw.attempts.flatMap(a=>{const q=a&&resolveQuestion(doc,a.id);return q&&typeof a.correct==='boolean'?[{...a,id:questionId(doc.subject,q)}]:[];});
 const wrong=new Set(raw.wrong.flatMap(id=>{const q=resolveQuestion(doc,id);return q?[questionId(doc.subject,q)]:[];}));
 for(const a of attempts){if(a.correct)wrong.delete(a.id);else wrong.add(a.id);}
 return {attempts,wrong:[...wrong]};
}
export function saveState(doc,storage,state){
 try{storage.setItem(storageKey(doc.subject),JSON.stringify(normalizeState(doc,state)));return true;}catch{return false;}
}
export function readState(doc,storage){
 const empty={attempts:[],wrong:[]};
 try{
  const keys=[storageKey(doc.subject),`flightdeck.caa.${doc.subject.toLowerCase()}.v1`,...(doc.subject==='A14'?['flightdeck.caa.v1']:[])];
  for(const key of keys){
   const value=storage.getItem(key);
   if(value===null)continue;
   const state=normalizeState(doc,JSON.parse(value));
   const error=key!==keys[0]&&!saveState(doc,storage,state);
   return {state,error};
  }
  return {state:empty,error:false};
 }catch{return {state:empty,error:true};}
}
