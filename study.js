export const studyDocuments = [
  {
    "id": "smm4",
    "title": "安全管理手冊",
    "english": "Safety Management Manual",
    "number": "Doc 9859",
    "edition": "第四版（2018）",
    "checked": "2026-09-07",
    "source": "https://www.icao.int/safety-management/SMI/SMM",
    "reader": "https://elibrary.icao.int/product/229751",
    "accessSource": "https://www.icao.int/safety-management/access-icao-annexes-and-guidance",
    "chapters": [
      {
        "id": "smm4-1",
        "number": 1,
        "title": "導論",
        "english": "Introduction",
        "section": "1.1–1.4",
        "goal": "建立安全管理的用途與角色觀念。",
        "primer": "安全管理以主動辨認與降低風險為方向；閱讀時先區分國家與服務提供者所扮演的角色。",
        "terms": [
          "Safety management · 安全管理",
          "Implementation · 實施"
        ],
        "prompts": [
          "這份文件希望協助誰解決什麼問題？",
          "如果只在事故後才檢討，會漏掉哪些改進機會？"
        ],
        "scenario": "某訓練單位半年沒有事故，但教官持續回報交接資訊不完整。主管認為沒有事故就不需處理。",
        "explanation": "先整理回報內容、了解交接流程與潛在影響，再討論可追蹤的改善；不能只靠事故數判斷所有風險。",
        "question": "哪個回應比較符合主動學習的方向？",
        "options": [
          "等事故發生再收集資料",
          "檢視交接問題與可能後果",
          "直接刪掉所有回報"
        ],
        "answer": 1,
        "source": "https://www.icao.int/safety-management/SMI/SMM/Chapter%201",
        "verified": true
      },
      {
        "id": "smm4-2",
        "number": 2,
        "title": "安全管理基礎",
        "english": "Safety Management Fundamentals",
        "section": "2.1–2.5",
        "goal": "從危害、後果與風險控制思考問題。",
        "primer": "危害辨認、風險評估與風險降低是安全風險管理的相連工作。人員行為與組織環境都值得納入觀察。",
        "terms": [
          "Hazard · 危害",
          "Risk mitigation · 風險降低"
        ],
        "prompts": [
          "危害本身與它可能造成的後果有何差別？",
          "你提出的控制措施，改變的是發生機會、後果或暴露程度？"
        ],
        "scenario": "虛構機坪上有一條照明不足的車道。學員把「撞到人」寫在危害欄，卻沒有描述現場條件。",
        "explanation": "先描述照明與視線等條件，再列可能後果。這能讓改善討論聚焦於可觀察的因素，而不是只寫一個最壞結果。",
        "question": "哪個記錄方式最有助後續分析？",
        "options": [
          "只寫很危險",
          "先描述照明不足的條件與可能後果",
          "只寫某人不小心"
        ],
        "answer": 1,
        "source": "https://www.icao.int/safety-management/SMI/SMM/Chapter%202",
        "verified": true
      },
      {
        "id": "smm4-3",
        "number": 3,
        "title": "安全文化",
        "english": "Safety Culture",
        "section": "3.1–3.3",
        "goal": "觀察回報意願與組織如何回應問題。",
        "primer": "管理者與員工如何看待安全，會影響回報和學習。閱讀本章時留意信任、回饋以及實際行動之間的關係。",
        "terms": [
          "Safety culture · 安全文化",
          "Reporting · 回報"
        ],
        "prompts": [
          "同仁願意回報的原因和顧慮可能有哪些？",
          "如何知道鼓勵回報的口號真的反映在日常行動？"
        ],
        "scenario": "兩個虛構團隊都有回報表單。甲收到回報後提供處理進度；乙從不回覆。你想知道兩隊為何回報量不同。",
        "explanation": "訪談使用者並查看處理流程，不只比較表單是否存在。回報數量也可能受信任、作業量或分類方式影響。",
        "question": "哪項資訊最值得補查？",
        "options": [
          "員工對回報後續的經驗",
          "表單使用的字體",
          "只看公司標誌"
        ],
        "answer": 0,
        "source": "https://www.icao.int/safety-management/SMI/SMM/Chapter%203",
        "verified": true
      },
      {
        "id": "smm4-4",
        "number": 4,
        "title": "安全績效管理",
        "english": "Safety Performance Management",
        "section": "4.1–4.5",
        "goal": "把學習目標轉成可解釋的觀察指標。",
        "primer": "安全目標提供方向，指標與目標值則協助追蹤表現。挑選指標時要連回自己的問題與情境，而不是只挑容易取得的數字。",
        "terms": [
          "SPI · 安全績效指標",
          "Target · 目標值"
        ],
        "prompts": [
          "這個指標與你想改善的問題有何關聯？",
          "作業量改變時，只有事件件數會不會誤導？"
        ],
        "scenario": "虛構單位甲月有 2 件事件、100 次作業；乙月有 3 件事件、300 次作業。有人因為件數上升便說狀況一定惡化。",
        "explanation": "例題事件率分別為每百次 2 件與 1 件。仍需比較事件嚴重性、定義及回報方式；這個算式只示範分母的重要性。",
        "question": "依例題，乙月每百次作業的事件數為何？",
        "options": [
          "3 件",
          "1 件",
          "100 件"
        ],
        "answer": 1,
        "source": "https://www.icao.int/safety-management/SMI/SMM/Chapter%204",
        "verified": true
      },
      {
        "id": "smm4-5",
        "number": 5,
        "title": "安全資料蒐集與處理",
        "english": "Safety Data Collection and Processing Systems",
        "section": "5.1–5.5",
        "goal": "建立能支持分析的資料紀錄。",
        "primer": "資料的蒐集、分類、處理與管理會影響之後的判讀。先想清楚決策需要哪些資料，再設計紀錄方式。",
        "terms": [
          "Taxonomy · 分類體系",
          "Data quality · 資料品質"
        ],
        "prompts": [
          "兩筆記錄指向同一事件時如何辨識？",
          "缺漏值與零件數是否應用相同方式記錄？"
        ],
        "scenario": "兩名學員回報同一時間、同一位置的虛構事件。若直接累計兩張表單，就可能把一次事件當成兩次。",
        "explanation": "保留來源紀錄並建立事件關聯，再依清楚定義統計；不要為了去重就無紀錄地刪除原始資訊。",
        "question": "統計前最需要做什麼？",
        "options": [
          "把每張表單都當不同事件",
          "核對事件識別與重複關係",
          "把缺漏欄位全部填零"
        ],
        "answer": 1,
        "source": "https://www.icao.int/safety-management/SMI/SMM/Chapter%205",
        "verified": true
      },
      {
        "id": "smm4-6",
        "number": 6,
        "title": "安全分析",
        "english": "Safety Analysis",
        "section": "6.1–6.5",
        "goal": "區分描述、推論與預測。",
        "primer": "描述分析整理已觀察的資料；推論與預測處理的問題不同。閱讀時練習辨認每個結論需要什麼證據。",
        "terms": [
          "Descriptive analysis · 描述分析",
          "Prediction · 預測"
        ],
        "prompts": [
          "圖表直接顯示了什麼？哪些結論是額外推論？",
          "若樣本只涵蓋一個月份，推廣結論有什麼限制？"
        ],
        "scenario": "虛構圖表顯示改版表單後回報增加。團隊立刻宣稱新表單造成更多事故。",
        "explanation": "先確認記錄的是回報量還是事故量，並查作業量、使用率與時間範圍。兩件事一起改變，不足以單獨建立因果。",
        "question": "圖表最直接支持哪種說法？",
        "options": [
          "記錄到的回報數增加",
          "事故一定因表單而增加",
          "所有風險都已消除"
        ],
        "answer": 0,
        "source": "https://www.icao.int/safety-management/SMI/SMM/Chapter%206",
        "verified": true
      },
      {
        "id": "smm4-7",
        "number": 7,
        "title": "安全資料與資訊保護",
        "english": "Protection of Safety Data and Information",
        "section": "7.1–7.9",
        "goal": "帶著用途、存取與例外問題閱讀原文。",
        "primer": "本章目前依官方目錄提供閱讀提示。章節補充頁未成功讀取，因此不在本站推定具體保護條件、例外或揭露義務；請在官方唯讀文件核對原文。",
        "terms": [
          "Protection · 保護",
          "Disclosure · 揭露"
        ],
        "prompts": [
          "原文如何界定受保護的資料和使用目的？",
          "遇到揭露或例外問題，需要誰依哪些規定判定？"
        ],
        "scenario": "學員想把虛構案例的回報資料做成課堂簡報。表中包含姓名、班別與事件細節，但尚未確認分享範圍。",
        "explanation": "先確認適用規定、資料權限與必要範圍，再決定如何處理。本文不提供法律結論，也不把移除姓名當成必然足夠的判定。",
        "question": "尚未確認權限時，較合理的下一步是？",
        "options": [
          "直接公開完整名單",
          "先查規定與分享權限",
          "認為所有回報永遠不能使用"
        ],
        "answer": 1,
        "source": "https://www.icao.int/safety-management/SMI/SMM/Chapter%207",
        "verified": false
      },
      {
        "id": "smm4-8",
        "number": 8,
        "title": "國家安全管理",
        "english": "State Safety Management",
        "section": "第 8 章；先讀 8.2 SSP",
        "goal": "分清國家層級工作與組織層級工作。",
        "primer": "SSP 涉及國家層級的安全管理。閱讀本章時，要把國家的責任與服務提供者的工作分開記錄，避免因工作交由其他單位執行便忽略責任配置。",
        "terms": [
          "SSP · 國家安全計畫",
          "Oversight · 監理"
        ],
        "prompts": [
          "這個措施由國家還是服務提供者負責？",
          "涉及跨組織協作時，誰追蹤結果與接口？"
        ],
        "scenario": "一份虛構計畫把主管機關政策、航空公司內部訓練和機場回報流程混在同一欄，未標明主責。",
        "explanation": "先建立角色清單，逐項標記主責、配合者與確認機制。這是資料整理練習，並非某個國家的正式權責配置。",
        "question": "改善這份計畫的第一個整理步驟是？",
        "options": [
          "刪除全部主管機關項目",
          "先區分角色與主責",
          "把所有工作都標成機師負責"
        ],
        "answer": 1,
        "source": "https://www.icao.int/safety-management/SMI/SMM/Chapter%208",
        "verified": true
      },
      {
        "id": "smm4-9",
        "number": 9,
        "title": "安全管理系統",
        "english": "Safety Management Systems (SMS)",
        "section": "第 9 章；先讀 9.2 SMS 架構",
        "goal": "把風險控制、追蹤與組織學習串起來。",
        "primer": "SMS 架構涵蓋政策與目標、風險管理、安全保證與安全推廣。閱讀時留意如何從一項措施走到成效追蹤和持續改進。",
        "terms": [
          "SMS · 安全管理系統",
          "Safety assurance · 安全保證"
        ],
        "prompts": [
          "措施上線後，怎麼確認它確實有效？",
          "作業改變時，原來的控制措施是否還適合？"
        ],
        "scenario": "虛構單位改善交接表後就宣告結案，沒有指定誰看回報或何時檢查。三個月後發現問題仍然存在。",
        "explanation": "補上負責人、檢查時點與觀察指標，並保留修正機制。完成表單只是一次行動，不等於已確認改善有效。",
        "question": "哪項安排能補足成效追蹤？",
        "options": [
          "只宣布已完成",
          "指定追蹤人、指標與檢查日期",
          "不再接受回報"
        ],
        "answer": 1,
        "source": "https://www.icao.int/safety-management/SMI/SMM/Chapter%209",
        "verified": true
      }
    ]
  }
];
export function cleanStudyState(value){
 const state={read:[],answers:{},notes:{}};
 if(!value||typeof value!=='object')return state;
 for(const c of studyDocuments.flatMap(d=>d.chapters)){
  if(Array.isArray(value.read)&&value.read.includes(c.id))state.read.push(c.id);
  if(Number.isInteger(value.answers?.[c.id])&&value.answers[c.id]>=0&&value.answers[c.id]<c.options.length)state.answers[c.id]=value.answers[c.id];
  if(typeof value.notes?.[c.id]==='string')state.notes[c.id]=value.notes[c.id].slice(0,6000);
 }
 return state;
}
export function chapterProgress(chapter,state){
 const read=state.read.includes(chapter.id),answered=Number.isInteger(state.answers[chapter.id]),correct=state.answers[chapter.id]===chapter.answer;
 return {read,answered,correct,complete:read&&correct};
}
