import {phakDocument} from './phak.js';
import {studyDocuments} from './study-core.js';
studyDocuments[1]=phakDocument;
export {studyDocuments,ensurePhak} from './study-core.js';
export {cleanStudyState,chapterProgress} from './study-core.js';
