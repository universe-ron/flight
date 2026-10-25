import {chapter as c1} from './phak-ch01.js';
import {chapter as c2} from './phak-ch02.js';
import {chapter as c3} from './phak-ch03.js';
import {chapter as c4} from './phak-ch04.js';
import {chapter as c5} from './phak-ch05.js';
import {chapter as c6} from './phak-ch06.js';
import {chapter as c7} from './phak-ch07.js';
import {chapter as c8} from './phak-ch08.js';
import {chapter as c9} from './phak-ch09.js';
import {chapter as c10} from './phak-ch10.js';
import {chapter as c11} from './phak-ch11.js';
import {chapter as c12} from './phak-ch12.js';
import {chapter as c13} from './phak-ch13.js';
import {chapter as c14} from './phak-ch14.js';
import {chapter as c15} from './phak-ch15.js';
import {chapter as c16} from './phak-ch16.js';
import {chapter as c17} from './phak-ch17.js';
export const phakDocument={
  "id": "phak25c",
  "authority": "FAA",
  "title": "PHAK 飛行知識手冊",
  "english": "Pilot’s Handbook of Aeronautical Knowledge",
  "number": "FAA-H-8083-25C",
  "edition": "C 版（2023）",
  "checked": "2026-09-08",
  "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
  "reader": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf",
  "accessSource": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
  "chapters": [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17]
};
phakDocument.fullChapters=phakDocument.chapters.map(c=>c.id);
