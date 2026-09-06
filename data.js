export const tracks=[{id:'ICAO',name:'國際航空基礎',label:'ICAO / FOUNDATION',mark:'◎',description:'從航空共通知識開始，建立扎實的飛行思維。',color:'green'},{id:'TW',name:'台灣民航局',label:'TAIWAN CAA',mark:'TW',description:'認識學科檢定資源，銜接台灣機師學習路徑。',color:'blue'},{id:'FAA',name:'美國 FAA',label:'FEDERAL AVIATION ADMINISTRATION',mark:'US',description:'以 FAA 手冊學習基礎知識與飛行判斷。',color:'orange'},{id:'EASA',name:'歐洲 EASA',label:'EUROPEAN UNION AVIATION SAFETY AGENCY',mark:'EU',description:'認識 Part-FCL 架構與歐洲飛行訓練概念。',color:'purple'}];
export const sources={icao:{title:'ICAO · Personnel Training and Licensing',url:'https://www.icao.int/operational-safety/Personnel-Training-and-Licensing',section:'Annex 1 概要',version:'官方網頁；未標示版本'},faa:{title:'FAA · Pilot’s Handbook of Aeronautical Knowledge',url:'https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak',section:'Aerodynamics / Navigation / Aeromedical Factors',version:'請由官方入口確認現行手冊版本'},tw:{title:'交通部民用航空局 · 學科檢定',url:'https://www.caa.gov.tw/Article.aspx?a=465&lang=1',section:'學科檢定與題目範例入口',version:'官方網頁；依各公告生效日期'},easa:{title:'EASA · Easy Access Rules for Aircrew',url:'https://www.easa.europa.eu/en/document-library/easy-access-rules/easy-access-rules-aircrew-regulation-eu-no-11782011',section:'Annex I (Part-FCL)',version:'依官方下載文件修訂日期'}};
const q=(id,track,subject,title,options,answer,explanation,source,term)=>({id,track,subject,title,options,answer,explanation,source,term,kind:'自編示範題',reviewed:'2026-09-06',effective:'概念練習；無獨立法規生效日'});
export const questions=[
q('i1','ICAO','航空法規','ICAO Annex 1 主要處理哪個領域？',['航空人員執照','危險物品運送','機場設計','航空保安'],0,'Annex 1 的主題是航空人員執照與相關國際標準；其他选項屬於不同領域的附件。','icao','Personnel Licensing · 航空人員執照'),
q('i2','ICAO','飛行原理','迎角（Angle of attack）是下列哪兩者的夾角？',['機翼弦線與相對氣流','機身與地平線','航向與航跡','跑道與磁北'],0,'迎角以翼弦線和相對氣流定義。機身相對地平線是姿態；航向與航跡之差不是迎角。','faa','Angle of attack · 迎角'),
q('i3','ICAO','導航','真空速保持 100 kt，正頂風 20 kt，忽略其他因素，地速為多少？',['120 kt','100 kt','80 kt','20 kt'],2,'正頂風直接抵銷部分前進地速：100 − 20 = 80 kt。順風才相加，風速本身不是地速。','faa','Groundspeed · 地速'),
q('i4','ICAO','人因','缺氧（Hypoxia）指的是什麼？',['身體組織氧氣供應不足','單純口渴','耳內壓力差','視線被雲遮蔽'],0,'缺氧涉及組織可用氧氣不足；口渴、耳壓與能見度分別是不同問題。','faa','Hypoxia · 缺氧'),
q('i5','ICAO','飛行原理','固定翼航空器發生氣動失速的關鍵條件是什麼？',['超過臨界迎角','引擎一定已停止','高度一定太高','地速等於零'],0,'超過臨界迎角會導致氣流分離與升力特性改變。失速並不等於引擎停止，也不能只靠地速判斷。','faa','Critical angle of attack · 臨界迎角'),
q('i6','ICAO','導航','無風時以 120 kt 地速飛行 30 分鐘，航程是多少？',['30 NM','60 NM','120 NM','240 NM'],1,'航程 = 地速 × 時間。30 分鐘是 0.5 小時，120 × 0.5 = 60 海里。','faa','Nautical mile · 海里'),
q('f1','FAA','飛行原理','FAA 基礎教材中的四種主要飛行作用力是哪組？',['升力、重力、推力、阻力','升力、壓力、溫度、濕度','重力、地速、推力、時間','阻力、電流、重量、航向'],0,'四種作用力是 lift、weight、thrust 和 drag。其餘組合混入環境條件或運動量。','faa','Four forces of flight · 四種飛行作用力'),
q('f2','FAA','導航','航向（Heading）與航跡（Track）最適當的區別是？',['航向是機頭方向，航跡是地面移動路徑方向','兩者永遠相同','航向只在地面使用','航跡就是空速'],0,'風會使機頭方向與實際地面路徑不同。航跡是方向概念，並非速度。','faa','Heading / Track · 航向／航跡'),
q('f3','FAA','人因','學習 FAA 基礎航空知識，哪個官方資源最直接相關？',['Pilot’s Handbook of Aeronautical Knowledge','航班售票網站','機上免稅品目錄','旅遊評分網站'],0,'PHAK 是 FAA 的航空基礎知識手冊。其他資源不是飛行知識訓練教材。','faa','PHAK · 航空知識手冊'),
q('t1','TW','航空法規','查找台灣航空人員學科檢定題目範例，應優先使用哪個來源？',['民航局學科檢定專區','未附日期的論壇截圖','航空公司促銷頁','機票搜尋平台'],0,'民航局學科檢定專區提供官方題目範例與相关入口；論壇截圖可能過期，售票網站不負責檢定資訊。','tw','CAA · 民用航空局'),
q('t2','TW','航空法規','民航局的題目範例與個人自編練習題，應如何呈現？',['明確區分來源與題目性質','全部標成官方考古題','只保留答案不留來源','混合後刪除日期'],0,'官方入口與自編內容的來源性質不同。清楚標示才能回查，不能推定示範題是實際考題。','tw','Source verification · 來源查核'),
q('t3','TW','航空法規','需要確認學科檢定申請與考試資訊，最合理的下一步是？',['從民航局專區確認對應公告','直接套用 FAA 的報名資訊','只看往年私人筆記','以模擬考成績代替報名'],0,'台灣的檢定資訊須回到台灣主管機關公告確認。其他體系、舊筆記或本站成績不能代替申請程序。','tw','Examination information · 檢定資訊'),
q('e1','EASA','航空法規','EASA 飛行組員執照相關規則的主要索引是哪個？',['Part-FCL','機場餐飲目錄','旅客退票政策','行李價格表'],0,'Part-FCL 是 Flight Crew Licensing 的規則部分；其餘不是組員執照規則。','easa','FCL · Flight Crew Licensing'),
q('e2','EASA','航空法規','在 EASA Aircrew 文件中，FCL 的全名是什麼？',['Flight Crew Licensing','Flight Cargo Loading','Fuel Control Light','Final Cabin List'],0,'FCL 是 Flight Crew Licensing，表示飛行組員執照；其餘是干擾選項。','easa','Flight Crew Licensing · 飛行組員執照'),
q('e3','EASA','航空法規','引用 EASA Aircrew 文件中的規則時，應保留哪些資訊以便回查？',['文件修訂版本與適用條文','只有搜尋結果排名','只有筆記的字體大小','只有答題速度'],0,'Easy Access Rules 是會修訂的文件。記錄版本與條文有助於回查適用內容，搜尋排名或答題速度無法識別規則版本。','easa','Revision · 修訂版本')
];
export function pool(track,subject='all'){return questions.filter(q=>(q.track===track||q.track==='ICAO')&&(subject==='all'||q.subject===subject));}
export function score(items,answers){return items.reduce((n,q)=>n+(answers[q.id]===q.answer?1:0),0);}

Object.assign(sources, {
  "lesson_flight-controls": {
    "title": "FAA PHAK · Chapter 6: Flight Controls",
    "url": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf",
    "section": "Primary Flight Controls / Ailerons / Adverse Yaw / Elevator / Rudder",
    "version": "FAA-H-8083-25C；2023 章節 PDF，已核對引用段落"
  },
  "lesson_pitot-static": {
    "title": "FAA PHAK · Chapter 8: Flight Instruments",
    "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf",
    "section": "Pitot-Static Flight Instruments / Altimeter / Vertical Speed Indicator / Airspeed Indicator",
    "version": "FAA-H-8083-25C；2023 章節 PDF，已核對引用段落"
  },
  "lesson_weight-balance": {
    "title": "FAA PHAK · Chapter 10: Weight and Balance",
    "url": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf",
    "section": "Balance, Stability, and Center of Gravity / Weight and Balance Computations",
    "version": "FAA-H-8083-25C；2023 章節 PDF，已核對引用段落"
  },
  "lesson_density-altitude": {
    "title": "FAA · Density Altitude",
    "url": "https://www.faasafety.gov/files/events/WP/WP09/2023/WP09123760/FAA-P-8740-02-DensityAltitude.pdf",
    "section": "Density Altitude Defined / High, Hot, and Humid / Check the Charts Carefully",
    "version": "FAA–P–8740–2，AFS–8（2008）；本文僅引用原理，不採用通用距離修正值"
  },
  "lesson_clouds-fog": {
    "title": "FAA PHAK · Chapter 12: Weather Theory",
    "url": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf",
    "section": "Temperature/Dew Point Relationship / Fog（印刷頁 12-14 至 12-15 附近）",
    "version": "FAA-H-8083-25C；2023 章節 PDF，已核對引用段落"
  },
  "lesson_metar-basics": {
    "title": "NOAA / NWS Aviation Weather Center · Aviation Weather Data",
    "url": "https://aviationweather.gov/help/data/#metars",
    "section": "METARs / Date and Time / Winds / Visibility / Sky Condition / Altimeter",
    "version": "線上說明，查閱 2026-09-06；本文採美式報告慣例"
  }
});
questions.push(...[
  {
    "id": "n1",
    "track": "ICAO",
    "subject": "飛行操縱",
    "title": "副翼主要控制繞哪個軸的運動？",
    "options": [
      "縱軸滾轉",
      "橫軸俯仰",
      "垂直軸偏航",
      "地球自轉軸"
    ],
    "answer": 0,
    "explanation": "副翼主要控制繞機頭到機尾之縱軸的滾轉。升降舵主要控制俯仰，方向舵主要控制偏航。",
    "source": "lesson_flight-controls",
    "term": "Roll · 滾轉",
    "kind": "自編示範題",
    "reviewed": "2026-09-06",
    "effective": "概念練習；無獨立法規生效日"
  },
  {
    "id": "n2",
    "track": "ICAO",
    "subject": "飛行操縱",
    "title": "配平的主要用途是什麼？",
    "options": [
      "自動取得起飛許可",
      "減少持續操縱力",
      "保證航向不變",
      "取代所有舵面"
    ],
    "answer": 1,
    "explanation": "配平降低維持特定飛行狀態所需的持續操縱力，不等於自動駕駛或飛航許可。",
    "source": "lesson_flight-controls",
    "term": "Roll · 滾轉",
    "kind": "自編示範題",
    "reviewed": "2026-09-06",
    "effective": "概念練習；無獨立法規生效日"
  },
  {
    "id": "n3",
    "track": "ICAO",
    "subject": "飛行儀表",
    "title": "傳統空速表比較哪兩種壓力？",
    "options": [
      "總壓與靜壓",
      "油壓與燃油壓",
      "胎壓與艙壓",
      "只有大氣溫度"
    ],
    "answer": 0,
    "explanation": "空速表利用總壓與靜壓之差建立指示，不是 GPS 的地面速度。",
    "source": "lesson_pitot-static",
    "term": "Pitot · 皮托",
    "kind": "自編示範題",
    "reviewed": "2026-09-06",
    "effective": "概念練習；無獨立法規生效日"
  },
  {
    "id": "n4",
    "track": "ICAO",
    "subject": "飛行儀表",
    "title": "哪些傳統儀表使用靜壓？",
    "options": [
      "只有空速表",
      "只有高度表",
      "空速表、高度表及升降率表",
      "只有磁羅盤"
    ],
    "answer": 2,
    "explanation": "這三種儀表都依賴靜壓；磁羅盤使用的是磁場方向。",
    "source": "lesson_pitot-static",
    "term": "Pitot · 皮托",
    "kind": "自編示範題",
    "reviewed": "2026-09-06",
    "effective": "概念練習；無獨立法規生效日"
  },
  {
    "id": "n5",
    "track": "ICAO",
    "subject": "重量平衡",
    "title": "總力矩 1,500 kg·m、總重量 700 kg，重心力臂約多少？",
    "options": [
      "0.467 m",
      "2.143 m",
      "700 m",
      "1,500 m"
    ],
    "answer": 1,
    "explanation": "重心 = 總力矩 ÷ 總重量 = 1500÷700 ≈ 2.143 m，須再比對實機限制。",
    "source": "lesson_weight-balance",
    "term": "CG · 重心",
    "kind": "自編示範題",
    "reviewed": "2026-09-06",
    "effective": "概念練習；無獨立法規生效日"
  },
  {
    "id": "n6",
    "track": "ICAO",
    "subject": "重量平衡",
    "title": "同一件行李往後移，總重不變時還會改變什麼？",
    "options": [
      "總力矩與重心",
      "地球重力常數",
      "所有機場標高",
      "不會改變任何資料"
    ],
    "answer": 0,
    "explanation": "力臂改變使力矩改變，重心因此移動，不能只檢查總重。",
    "source": "lesson_weight-balance",
    "term": "CG · 重心",
    "kind": "自編示範題",
    "reviewed": "2026-09-06",
    "effective": "概念練習；無獨立法規生效日"
  },
  {
    "id": "n7",
    "track": "ICAO",
    "subject": "飛行性能",
    "title": "相同氣壓下，溫度升高通常對密度高度有何影響？",
    "options": [
      "降低",
      "升高",
      "永遠不變",
      "等於跑道長度"
    ],
    "answer": 1,
    "explanation": "溫度升高通常使密度降低，對應較高的密度高度。",
    "source": "lesson_density-altitude",
    "term": "Density altitude · 密度高度",
    "kind": "自編示範題",
    "reviewed": "2026-09-06",
    "effective": "概念練習；無獨立法規生效日"
  },
  {
    "id": "n8",
    "track": "ICAO",
    "subject": "飛行性能",
    "title": "計算特定航空器的起飛性能，應優先回查哪個資料？",
    "options": [
      "其他機型論壇貼文",
      "該航空器 AFM／POH 性能資料",
      "本站虛構例題的數字",
      "只有機場名稱"
    ],
    "answer": 1,
    "explanation": "實機性能應使用對應機型、構型、重量及環境條件的核准或適用文件。",
    "source": "lesson_density-altitude",
    "term": "Density altitude · 密度高度",
    "kind": "自編示範題",
    "reviewed": "2026-09-06",
    "effective": "概念練習；無獨立法規生效日"
  },
  {
    "id": "n9",
    "track": "ICAO",
    "subject": "航空氣象",
    "title": "潮濕空氣移過冷表面造成的霧，最符合哪一種類型？",
    "options": [
      "平流霧",
      "只有輻射霧",
      "永遠是冰霧",
      "與冷卻無關"
    ],
    "answer": 0,
    "explanation": "平流霧的核心機制是潮濕空氣移過冷表面而冷卻。",
    "source": "lesson_clouds-fog",
    "term": "Dew point · 露點",
    "kind": "自編示範題",
    "reviewed": "2026-09-06",
    "effective": "概念練習；無獨立法規生效日"
  },
  {
    "id": "n10",
    "track": "ICAO",
    "subject": "航空氣象",
    "title": "溫度 18°C、露點 17°C，哪項判讀較適當？",
    "options": [
      "一分鐘後一定下雨",
      "一定能安全起飛",
      "接近飽和，還需查看其他氣象資訊",
      "露點就是雲底 17 呎"
    ],
    "answer": 2,
    "explanation": "小溫露差是接近飽和的線索，不能單獨保證天氣結果或飛行條件。",
    "source": "lesson_clouds-fog",
    "term": "Dew point · 露點",
    "kind": "自編示範題",
    "reviewed": "2026-09-06",
    "effective": "概念練習；無獨立法規生效日"
  },
  {
    "id": "n11",
    "track": "FAA",
    "subject": "航空氣象",
    "title": "美式 METAR 的 BKN040 中，040 表示什麼？",
    "options": [
      "40 呎 MSL",
      "4,000 呎 AGL",
      "400 公尺 MSL",
      "能見度 40 海里"
    ],
    "answer": 1,
    "explanation": "雲底碼按百呎讀取，040 是 4,000 呎，參考地面 AGL。",
    "source": "lesson_metar-basics",
    "term": "METAR · 例行航空天氣報告",
    "kind": "自編示範題",
    "reviewed": "2026-09-06",
    "effective": "概念練習；無獨立法規生效日"
  },
  {
    "id": "n12",
    "track": "FAA",
    "subject": "航空氣象",
    "title": "美式 METAR 中的 10SM 是多少？",
    "options": [
      "10 海里",
      "10 公尺",
      "10 法定英里",
      "10 節"
    ],
    "answer": 2,
    "explanation": "SM 表示 statute miles，法定英里；NM 才是海里，KT 是速度單位。",
    "source": "lesson_metar-basics",
    "term": "METAR · 例行航空天氣報告",
    "kind": "自編示範題",
    "reviewed": "2026-09-06",
    "effective": "概念練習；無獨立法規生效日"
  }
]);
