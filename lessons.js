const ref=(title,url,section,version)=>({title,url,section,version,checked:'2026-09-06'});
const phak='https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak';
export const lessons=[
{id:'angle-of-attack',track:'COMMON',subject:'飛行原理',title:'迎角與失速：先分清機頭朝向和氣流',summary:'用兩條線理解迎角，修正「失速就是引擎熄火」的誤解。',minutes:5,terms:['Angle of attack · 迎角','Chord line · 翼弦線','Relative wind · 相對氣流','Stall · 氣動失速'],questionIds:['i2','i5'],sections:[
{title:'先建立定義',text:'迎角是翼弦線與相對氣流的夾角。翼弦線是連接翼型前緣與後緣的參考直線；相對氣流則描述空氣相對機翼的來向。因此，判斷迎角必須同時知道機翼方向與氣流方向。只看機頭相對地平線的角度，得到的是姿態資訊，不能直接當成迎角。',ref:0},
{title:'為什麼會失速？',text:'在一定構型下，迎角增加到臨界值以上，氣流分離會使升力特性明顯改變，形成氣動失速。關鍵是超過臨界迎角，而不是引擎是否運轉。空速是重要的操作資訊，但不能把某個單一速度當成所有重量、負載及構型下都相同的失速條件。',ref:0},
{title:'用反例檢查理解',text:'假設兩架飛機的機頭都相對地平線上仰 5 度，其中一架沿上升航徑飛行，另一架沿下降航徑飛行。因為相對氣流方向不同，即使機頭姿態相同，迎角仍可能不同。這是本站設計的概念例子，目的在於分開「姿態」與「迎角」，不是要求依姿態角推算實際飛行極限。',ref:0},
{title:'讀完應該記住',text:'答題遇到「引擎停止」「地速歸零」「超過臨界迎角」三種敘述時，先辨認題目問的是氣動失速還是動力失效。能解釋迎角由哪兩條方向構成，比單純背誦答案更重要。實際失速訓練的辨識與改出程序，需依機型文件與教官指導。',ref:0}],refs:[ref('FAA · Airplane Flying Handbook, Chapter 5','https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/06_afh_ch5.pdf','Maintaining Aircraft Control / Angle of Attack and Stalls','FAA-H-8083-3C，2021 教材；概念引用') ]},
{id:'navigation',track:'COMMON',subject:'導航',title:'航向、航跡與地速：把風放進你的計算',summary:'從正頂風例題學會換算海里、節與飛行時間。',minutes:5,terms:['Heading · 航向','Track · 航跡','True airspeed · 真空速','Groundspeed · 地速'],questionIds:['i3','i6','f2'],calculator:true,sections:[
{title:'方向與速度是兩個問題',text:'航向是機頭所指的方向；航跡是航空器在地面上移動的路徑方向。真空速描述航空器相對周圍空氣的速度，地速描述相對地面的速度。風使這兩組概念產生差異：有側風時，機頭方向不一定等於地面路徑方向。',ref:0},
{title:'先從正頂風開始',text:'本站例題：真空速保持 100 kt，風正好從前方以 20 kt 吹來，並假設穩定直線飛行。此時地速為 100 − 20 = 80 kt。若同樣的風改為正順風，地速則為 120 kt。這個直接加減的算法只用在風與航向共線的簡化條件；側風要用向量處理，不能把全部風速直接減掉。',ref:0},
{title:'用地速計算時間',text:'1 kt 表示每小時 1 海里。距離等於地速乘以時間，因此以 120 kt 地速飛行 30 分鐘，距離是 120 × 0.5 = 60 NM。反過來，60 NM 航段以 80 kt 地速飛行，所需時間是 0.75 小時，也就是 45 分鐘。計算前先把分鐘轉成小時，可避免常見的 60 倍誤差。',ref:0},
{title:'把算法與規劃分開',text:'下面的計算器只示範恆定真空速與正頂風／順風。它不計算爬升、下降、航路繞飛或燃油需求。完成例題後，試著用自己的話說明：為什麼相同真空速不保證相同到達時間？因為飛越地面距離所需的時間取決於地速。',ref:0}],refs:[ref('FAA · PHAK, Chapter 16: Navigation','https://www.faa.gov/regulationspolicies/handbooksmanuals/aviation/phak/chapter-16-navigation','Effect of Wind / Basic Calculations','FAA-H-8083-25C；章節入口更新 2023-07-10，PDF 全文未完成逐頁查核')]},
{id:'runways',track:'FAA',subject:'機場知識',title:'跑道 09 / 27：編號背後的方向概念',summary:'讀懂磁方位、相反跑道方向與平行跑道字母。',minutes:4,terms:['Runway designator · 跑道識別','Magnetic azimuth · 磁方位','Parallel runways · 平行跑道'],questionIds:[],sections:[
{title:'編號不是跑道長度',text:'依 FAA AIP 的跑道標示說明，跑道編號取自跑道中心線的磁方位，以磁北順時針量測後除以十，再取最接近的整數。因此，09 大致代表 090 度方向，27 大致代表 270 度方向。編號本身不能告訴你跑道長度、寬度或承載能力。',ref:0},
{title:'同一條鋪面，兩個使用方向',text:'把一條東西向跑道想成同一條道路：朝東使用與朝西使用，方向相差約 180 度。本站簡化例子是 09 / 27，兩個編號相差 18。編號經過取整，所以不應把「跑道 09」理解成精確的磁航向一定等於 090.0 度；精確資料要看對應機場文件。',ref:0},
{title:'L 和 R 也有觀看方向',text:'平行跑道可能使用 L、C、R，分別表示相對該進場方向的左、中、右。從反方向看同一組跑道，左右關係會翻轉。因此，簡化的一對平行跑道中，09L 的另一端可標為 27R。學習時要同時讀數字與字母，不能只記住數字。',ref:0},
{title:'閱讀機場資料的小練習',text:'在紙上畫兩條東西向平行線，再從朝東的視角標出左、右，最後改成朝西看。這個自編練習能幫助理解方向相對性。本文採 FAA 資料示範，不把標示概念當成特定機場的現行運作資料，也不由編號推定可用跑道或起降許可。',ref:0}],refs:[ref('FAA AIP · AD 1.1: Aerodrome/Heliport Availability and Conditions of Use','https://www.faa.gov/Air_traffic/Publications/atpubs/aip_html/part3_ad_section_1.1.html','Runway Designators / Runway Markings','線上 AIP；生效版次請依官方頁面確認')]},
{id:'icao-reading',track:'ICAO',subject:'航空法規',title:'認識 ICAO Annex 1：國際標準與執照學習',summary:'先辨認國際文件的用途，再決定該查哪個主管機關。',minutes:3,terms:['ICAO · 國際民航組織','Annex 1 · 附件一','Personnel Licensing · 航空人員執照'],questionIds:['i1'],sections:[
{title:'Annex 1 在談什麼？',text:'ICAO 的航空人員訓練與執照介紹指出，Annex 1 涵蓋航空人員執照的標準與建議措施，對象包含飛航組員、管制員及其他相關人員。因此看到 Personnel Licensing 時，應聯想到「人員資格與執照」；不要把它當成機場設計手冊。',ref:0},
{title:'為自己的筆記分兩層',text:'本站建議把筆記分成「國際文件的概念」與「我要報考地區的申請要求」。例如第一層記錄 Annex 1 的主題，第二層再記錄台灣、FAA 或 EASA 對應的官方入口。這是學習整理方法，不表示不同體系的證照或申請條件可以直接互換。',ref:0},
{title:'先問文件，再問答案',text:'遇到一個執照問題，先寫出涉及哪個地區、哪種執照以及需要確認什麼資訊。接著找對應來源，不要只搜尋一段看似相似的答案。本文只使用 ICAO 公開概述建立閱讀方向，並未重製或逐條解析付費附件全文。',ref:0}],refs:[ref('ICAO · Personnel Training and Licensing','https://www.icao.int/operational-safety/Personnel-Training-and-Licensing','Annex 1 範圍概述','公開介紹頁；未標示附件完整版本與生效日')]},
{id:'taiwan-study',track:'TW',subject:'航空法規',title:'台灣學科檢定：建立可追溯的備考筆記',summary:'從官方題目範例出發，分清公告、教材與自編題。',minutes:3,terms:['CAA · 民用航空局','Source · 來源','Revision · 修訂'],questionIds:['t1','t2','t3'],sections:[
{title:'先找到官方入口',text:'民航局的「學科檢定」專區提供各類航空人員學科檢定題目範例等入口。它適合當作備考資料的起點：先確認題目範例的類別，再查看相關公告。題目範例與特定考試實際出題內容不是同一個承諾。',ref:0},
{title:'一則筆記要留下什麼？',text:'本站建議每則備考筆記保留題目主題、適用類別、官方文件名稱、章節及查閱日期。若檔案列出修訂或生效日期，再把兩者分別記下。自己的下載日期只能表示何時取得資料，不能當成文件的生效日期。',ref:0},
{title:'用一個問題練習資料判讀',text:'假設你拿到一張沒有日期的考題截圖，旁邊還有一份民航局提供的題目範例。先確認截圖能否回查原始來源，再核對範例類別。若兩者不一致，應把差異列為待確認事項，不要因為截圖流傳廣泛就推定它較新。這是本站的自編閱讀練習。',ref:0}],refs:[ref('交通部民用航空局 · 學科檢定','https://www.caa.gov.tw/Article.aspx?a=465&lang=1','各類航空人員學科檢定題目範例入口','入口頁；各附件及考試公告日期分別確認')]},
{id:'easa-reading',track:'EASA',subject:'航空法規',title:'EASA 文件怎麼讀：從 Aircrew 找到 Part-FCL',summary:'建立法規索引概念，避免把網站更新日當成條文生效日。',minutes:3,terms:['Aircrew · 航空組員','Part-FCL · 飛行組員執照','Amendment · 修正'],questionIds:['e1','e2','e3'],sections:[
{title:'先辨認文件架構',text:'EASA 的 Aircrew 官方入口以 Regulation (EU) No 1178/2011 為索引，列出相關修正與 Easy Access Rules 入口。Part-FCL 指向 Flight Crew Licensing，也就是飛行組員執照這一部分；先辨認文件名稱與部分名稱，會比只記住一段搜尋摘錄更容易回查。',ref:0},
{title:'版本是筆記的一部分',text:'Aircrew 頁面分開列出規則與 AMC／GM 資料及日期。做筆記時，應記下自己實際閱讀的文件與修訂資訊，而不只是「EASA 網站」四個字。本文介紹如何定位資料，並未根據索引頁推算個人適用的訓練時數或考試資格。',ref:0},
{title:'從目錄建立閱讀順序',text:'本站建議先從 Aircrew 官方入口進入 Easy Access Rules，再找 Part-FCL 與自己關心的執照主題，最後記錄條文位置與版本。若需要比較不同時期文件，分別保存兩份的日期，不把舊筆記上的答案直接搬到新的版本。完成後，可用章末題檢查自己是否記住 FCL 的含義。',ref:0}],refs:[ref('EASA · Aircrew regulations','https://www.easa.europa.eu/en/regulations/aircrew','Regulation (EU) No 1178/2011 / Regulations / AMC and GM','持續更新索引；各修正文件的生效／適用日另行確認')]}
];

// Original foundation lessons, referenced to official publications.
lessons.push(...[
  {
    "id": "flight-controls",
    "track": "COMMON",
    "subject": "飛行操縱",
    "title": "三個軸、三種動作：副翼、升降舵與方向舵",
    "summary": "把滾轉、俯仰與偏航連回操縱面，理解為什麼轉彎需要協調。",
    "minutes": 6,
    "terms": [
      "Roll · 滾轉",
      "Pitch · 俯仰",
      "Yaw · 偏航",
      "Adverse yaw · 反向偏航"
    ],
    "objectives": [
      "把三種旋轉配對到正確的航空器軸線",
      "說明副翼造成滾轉的基本原理",
      "辨認方向舵與配平的不同用途"
    ],
    "prerequisite": "適合入門；先閱讀英文術語，再進入例題。",
    "sections": [
      {
        "title": "先把飛機想成有三根轉軸",
        "text": "縱軸由機頭通往機尾，繞它旋轉稱為滾轉；橫軸由一側機翼通往另一側，繞它旋轉稱為俯仰；垂直軸上下貫穿航空器，繞它旋轉稱為偏航。軸線跟著航空器移動，不是固定在地面上的東西南北。先用手掌模擬三種旋轉，再配對英文術語，可避免把「縱軸」誤認成抬頭動作。",
        "ref": 0
      },
      {
        "title": "操縱面如何改變動作",
        "text": "以傳統配置為例，副翼主要控制滾轉，升降舵或全動式水平尾翼主要控制俯仰，方向舵主要控制偏航。向右操縱副翼時，通常右副翼上偏、左副翼下偏，兩翼升力差使航空器向右滾轉。這是在說明典型機械配置的基本原理；實際航空器可能有飛控電腦、擾流板或其他混合控制方式。",
        "ref": 0
      },
      {
        "title": "為什麼不能只背「副翼轉彎」",
        "text": "副翼造成升力差時也可能帶來阻力差，使機頭產生與滾轉方向相反的偏航傾向，稱為反向偏航。方向舵能參與協調飛行，並不是把飛機當汽車一樣用踏板直接轉向。協調轉彎還牽涉傾側、升力方向與操縱配合，不能只用一個舵面的動作概括全部過程。",
        "ref": 0
      },
      {
        "title": "練習：把動作說清楚",
        "text": "自編情境：教官問「右翼下降是繞哪個軸？機頭向左擺又是什麼動作？」先答縱軸滾轉，再答垂直軸偏航。接著想想配平：配平的用途是減少持續維持姿態所需的操縱力，而非讓飛機自動遵守航線。完成這個分類後，再讀原始手冊的舵面圖，會更容易把平面圖連到三維動作。",
        "ref": 0
      }
    ],
    "misconception": {
      "claim": "方向舵就是飛機的方向盤。",
      "correction": "方向舵主要控制偏航；一般協調轉彎需要傾側與其他操縱配合，不能直接套用汽車轉向的想像。"
    },
    "selfCheck": {
      "question": "機頭上仰與右翼下降各屬於哪種運動？",
      "answer": "機頭上仰是繞橫軸的俯仰；右翼下降是繞縱軸的滾轉。"
    },
    "refs": [
      {
        "title": "FAA PHAK · Chapter 6: Flight Controls",
        "url": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf",
        "section": "Primary Flight Controls / Ailerons / Adverse Yaw / Elevator / Rudder",
        "version": "FAA-H-8083-25C；2023 章節 PDF，已核對引用段落",
        "checked": "2026-09-06"
      }
    ],
    "questionIds": [
      "n1",
      "n2"
    ],
    "table": {
      "headers": [
        "動作",
        "旋轉軸",
        "典型主要操縱面"
      ],
      "rows": [
        [
          "滾轉 Roll",
          "縱軸",
          "副翼"
        ],
        [
          "俯仰 Pitch",
          "橫軸",
          "升降舵／全動式水平尾翼"
        ],
        [
          "偏航 Yaw",
          "垂直軸",
          "方向舵"
        ]
      ]
    }
  },
  {
    "id": "pitot-static",
    "track": "COMMON",
    "subject": "飛行儀表",
    "title": "空速表為什麼需要兩種壓力？",
    "summary": "從皮托管與靜壓孔，建立空速、高度與升降率的訊號來源概念。",
    "minutes": 6,
    "terms": [
      "Pitot · 皮托",
      "Static pressure · 靜壓",
      "ASI · 空速表",
      "VSI · 升降率表"
    ],
    "objectives": [
      "辨認三種皮托靜壓儀表",
      "解釋空速表比較總壓與靜壓的原因",
      "用訊號來源理解儀表異常"
    ],
    "prerequisite": "適合入門；先閱讀英文術語，再進入例題。",
    "sections": [
      {
        "title": "先看儀表收到什麼",
        "text": "傳統皮托靜壓系統使用靜壓孔取得周圍空氣的靜壓，並以面向氣流的皮托入口取得總壓。儀表不是直接用尺量出每秒走了多遠，而是把壓力及壓力變化轉換為指示。從訊號來源學習儀表，比先背一長串失效結果更有幫助；但實際管路與備援方式仍需依機型文件辨認。",
        "ref": 0
      },
      {
        "title": "三個儀表，三種讀法",
        "text": "空速表使用總壓與靜壓的差；高度表使用靜壓並依所設壓力基準顯示高度；傳統升降率表則利用靜壓變化及校準漏孔產生的壓差，反映高度變化率。三者不是完全獨立的資訊來源。若共用的靜壓來源受到影響，可能有不只一個指示同時出現問題。",
        "ref": 0
      },
      {
        "title": "先區分空速與地速",
        "text": "當有穩定順風時，即使航空器相對空氣的狀態近似不變，GPS 顯示的地速仍可能增加。不能因此認定皮托靜壓空速表必須顯示相同增加量。空速與地速使用不同參考對象；儀表判讀還須區分指示空速、校正空速與真空速，不能把所有以 kt 顯示的數值混為一談。",
        "ref": 0
      },
      {
        "title": "情境：不要直接判定三個儀表都壞了",
        "text": "自編練習：若空速、高度與升降率同時出現不合理變化，你應先畫出三者共同使用的壓力來源。這是故障思考的起點，不是本文提供的實際排故程序。皮托入口、排水孔與靜壓孔的堵塞組合會造成不同現象，因此「管子堵住就全都歸零」並不是可靠的通則。",
        "ref": 0
      }
    ],
    "misconception": {
      "claim": "空速表顯示的速度應與 GPS 地速永遠相同。",
      "correction": "空速表反映空氣相對運動的壓力訊號；GPS 地速以地面為參考，風會造成兩者差異。"
    },
    "selfCheck": {
      "question": "哪個來源可能同時影響空速表、高度表與傳統升降率表？",
      "answer": "靜壓來源；三者都使用它，但使用方式不同。"
    },
    "refs": [
      {
        "title": "FAA PHAK · Chapter 8: Flight Instruments",
        "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf",
        "section": "Pitot-Static Flight Instruments / Altimeter / Vertical Speed Indicator / Airspeed Indicator",
        "version": "FAA-H-8083-25C；2023 章節 PDF，已核對引用段落",
        "checked": "2026-09-06"
      }
    ],
    "questionIds": [
      "n3",
      "n4"
    ],
    "table": {
      "headers": [
        "儀表",
        "主要壓力資訊"
      ],
      "rows": [
        [
          "空速表",
          "總壓與靜壓的差"
        ],
        [
          "高度表",
          "靜壓"
        ],
        [
          "傳統升降率表",
          "靜壓隨時間的變化"
        ]
      ]
    }
  },
  {
    "id": "weight-balance",
    "track": "COMMON",
    "subject": "重量平衡",
    "title": "總重沒超標，為什麼還要算重心？",
    "summary": "用一個簡單裝載例子，學會重量、力臂、力矩與重心的關係。",
    "minutes": 6,
    "terms": [
      "CG · 重心",
      "Datum · 基準面",
      "Arm · 力臂",
      "Moment · 力矩"
    ],
    "objectives": [
      "計算重量乘以力臂得到的力矩",
      "以總力矩除以總重量求重心",
      "區分總重限制與重心包線"
    ],
    "prerequisite": "適合入門；先閱讀英文術語，再進入例題。",
    "sections": [
      {
        "title": "重量與位置是兩份答案",
        "text": "總重量告訴你航空器帶了多少重量，重心則描述重量如何分布。就像蹺蹺板，把同一個物品往外移，即使總重量沒有改變，平衡仍會改變。航空器必須同時符合重量與重心限制；只確認最大重量而忽略位置，不能證明裝載符合要求。本文以單一縱向軸的理想例子建立算法。",
        "ref": 0
      },
      {
        "title": "從基準面開始算",
        "text": "力臂是重量所在位置相對指定基準面的距離；力矩是重量乘以力臂。要用相同基準與一致單位計算所有項目，再把重量及力矩分別加總。重心位置等於總力矩除以總重量。有些實際表單會使用縮小後的力矩索引，使用前應辨認縮放係數，不能混用原始力矩與索引。",
        "ref": 0
      },
      {
        "title": "算一次完整例題",
        "text": "自編模型：物體甲重 600 kg，位於基準後方 2.0 m；物體乙重 100 kg，位於後方 3.0 m。總力矩為 600×2.0 + 100×3.0 = 1,500 kg·m；總重量 700 kg，因此重心為 1,500÷700 ≈ 2.143 m。若乙移到 4.0 m，總力矩變成 1,600 kg·m，重心約 2.286 m；總重量不變，重心卻後移了。",
        "ref": 0
      },
      {
        "title": "數值算出來後還沒結束",
        "text": "真正的下一步是把結果與該航空器在該重量及構型下的允許範圍比較。燃油消耗、乘員位置、行李與設備變動都可能影響重量或重心。本文例子的數值沒有對應任何實機限制，因此不能從 2.143 m 本身判定「安全」或「不安全」；計算與限制比對是兩個都不可少的步驟。",
        "ref": 0
      }
    ],
    "misconception": {
      "claim": "只要沒有超重，坐哪裡都沒差。",
      "correction": "重量相同但位置不同，總力矩與重心仍會改變。重量與重心限制都需符合。"
    },
    "selfCheck": {
      "question": "例題中把 100 kg 從 3 m 移到 4 m，增加多少力矩？",
      "answer": "增加 100×(4−3)=100 kg·m；總重量保持 700 kg，重心後移約 0.143 m。"
    },
    "refs": [
      {
        "title": "FAA PHAK · Chapter 10: Weight and Balance",
        "url": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf",
        "section": "Balance, Stability, and Center of Gravity / Weight and Balance Computations",
        "version": "FAA-H-8083-25C；2023 章節 PDF，已核對引用段落",
        "checked": "2026-09-06"
      }
    ],
    "questionIds": [
      "n5",
      "n6"
    ],
    "table": {
      "headers": [
        "項目",
        "重量 kg",
        "力臂 m",
        "力矩 kg·m"
      ],
      "rows": [
        [
          "甲",
          "600",
          "2.0",
          "1,200"
        ],
        [
          "乙",
          "100",
          "3.0",
          "300"
        ],
        [
          "總計",
          "700",
          "CG ≈ 2.143",
          "1,500"
        ]
      ]
    }
  },
  {
    "id": "density-altitude",
    "track": "COMMON",
    "subject": "飛行性能",
    "title": "高、熱、濕：密度高度與飛行性能",
    "summary": "把機場海拔與性能條件分開，理解為什麼同一條跑道不代表同樣的起飛表現。",
    "minutes": 6,
    "terms": [
      "Density altitude · 密度高度",
      "Pressure altitude · 氣壓高度",
      "POH · 飛行員操作手冊"
    ],
    "objectives": [
      "區分機場標高與密度高度",
      "說明高溫與低密度的關係",
      "辨認性能計算需要回查的文件"
    ],
    "prerequisite": "適合入門；先閱讀英文術語，再進入例題。",
    "sections": [
      {
        "title": "用空氣狀態理解高度",
        "text": "密度高度用標準大氣中具有相同密度的高度來描述當前空氣狀態，基礎教材常以「經非標準溫度修正的氣壓高度」介紹它。機場標高是地理位置資訊，密度高度則與空氣密度及性能相關。同一座機場不會因下午變熱而搬到山上，但航空器面對的空氣條件可能更像較高海拔。",
        "ref": 0
      },
      {
        "title": "高溫為什麼重要？",
        "text": "在相同氣壓下，溫度增加通常使空氣密度降低。較高的密度高度可能伴隨較差的起飛與爬升表現；自然進氣式引擎的可用功率也會受到影響。高海拔、高溫與高濕度是值得留意的條件組合，但不能只靠某個關鍵字推算實際可用性能，更不能把同一百分比修正套用到所有航空器。",
        "ref": 0
      },
      {
        "title": "比較早晨與午後",
        "text": "自編情境：同一機場、同一航空器與裝載，早晨涼爽，午後炎熱，並暫時假設其他因素相同。你應預期午後的低密度條件可能不利於起飛與爬升，而不是認為跑道一樣長就能照用早晨的數字。這個情境只用來判讀變化方向，沒有提供足以計算實際起飛距離的完整資料。",
        "ref": 0
      },
      {
        "title": "從概念走到文件",
        "text": "性能判讀應回到該航空器的 AFM／POH，確認圖表要求的輸入與條件，例如重量、氣壓高度、溫度及風。若圖表還有跑道、構型或程序條件，也必須對應。密度高度可以提醒你關注性能，但不會取代圖表、限制或飛行前規劃；理解「為什麼變差」與量化「差多少」是不同的學習層次。",
        "ref": 0
      }
    ],
    "misconception": {
      "claim": "機場接近海平面，就不必考慮高密度高度。",
      "correction": "低標高機場在高溫等條件下仍可能有不利性能；標高不能單獨代表當天的密度高度。"
    },
    "selfCheck": {
      "question": "機場標高不變，午後較熱時應直接沿用早晨的起飛距離嗎？",
      "answer": "不應直接沿用；應使用當時條件回查該機型性能資料。本文只能判讀趨勢。"
    },
    "refs": [
      {
        "title": "FAA · Density Altitude",
        "url": "https://www.faasafety.gov/files/events/WP/WP09/2023/WP09123760/FAA-P-8740-02-DensityAltitude.pdf",
        "section": "Density Altitude Defined / High, Hot, and Humid / Check the Charts Carefully",
        "version": "FAA–P–8740–2，AFS–8（2008）；本文僅引用原理，不採用通用距離修正值",
        "checked": "2026-09-06"
      }
    ],
    "questionIds": [
      "n7",
      "n8"
    ],
    "table": null
  },
  {
    "id": "clouds-fog",
    "track": "COMMON",
    "subject": "航空氣象",
    "title": "溫度、露點與霧：看懂接近飽和的線索",
    "summary": "理解輻射霧和平流霧的差異，避免把溫露差當成確定預報。",
    "minutes": 6,
    "terms": [
      "Dew point · 露點",
      "Saturation · 飽和",
      "Radiation fog · 輻射霧",
      "Advection fog · 平流霧"
    ],
    "objectives": [
      "說明露點的意思",
      "比較輻射霧與平流霧的形成機制",
      "解釋小溫露差的用途與限制"
    ],
    "prerequisite": "適合入門；先閱讀英文術語，再進入例題。",
    "sections": [
      {
        "title": "露點描述什麼條件？",
        "text": "露點是在氣壓及水氣含量保持不變的條件下，空氣冷卻至飽和的溫度。當氣溫與露點接近時，代表空氣接近飽和，值得注意雲、霧或其他能見度變化的可能性。露點不是雲底高度，也不是能直接拿來當作降雨開始時間的數值；它是一個狀態線索。",
        "ref": 0
      },
      {
        "title": "雲和霧的共同點",
        "text": "當空氣中的水氣凝結形成懸浮小水滴，或在適當條件下形成冰晶，便可呈現可見的雲。霧可以理解為接觸地面的雲。空氣的冷卻、混合與抬升等過程會影響是否飽和，所以不能只看單一時刻的溫露差，就斷言幾分鐘後一定出現某種天氣。學習氣象需要同時比較環境與趨勢。",
        "ref": 0
      },
      {
        "title": "比較兩種常見機制",
        "text": "輻射霧與地表輻射冷卻有關，典型有利背景是晴朗夜晚、潮濕近地面空氣與弱風。平流霧則與潮濕空氣移過較冷表面、被冷卻至接近飽和有關，常見於沿海環境。兩者都有冷卻過程，但冷卻的來源不同；不要把所有霧都歸因於無風夜晚，也不要假定日出後所有霧都會迅速消散。",
        "ref": 0
      },
      {
        "title": "把資訊轉成待確認問題",
        "text": "自編情境：清晨報告溫度 18°C、露點 17°C。你可以辨認溫露差只有 1°C，接著詢問風、地表條件、近期能見度以及預報趨勢，而不是直接宣布機場一定起霧。若另一份報告是 28°C／17°C，也不能僅憑較大的溫露差保證後續全程無雲無霧。練習的重點是提出需要補充的資訊。",
        "ref": 0
      }
    ],
    "misconception": {
      "claim": "溫度等於露點，就能保證下一分鐘下雨。",
      "correction": "接近或達到飽和不是精確降雨預報，降水還涉及雲內過程與其他條件。"
    },
    "selfCheck": {
      "question": "潮濕海風吹過較冷陸地，較符合哪一種霧的機制？",
      "answer": "較符合平流霧：潮濕空氣移經冷表面受到冷卻。"
    },
    "refs": [
      {
        "title": "FAA PHAK · Chapter 12: Weather Theory",
        "url": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf",
        "section": "Temperature/Dew Point Relationship / Fog（印刷頁 12-14 至 12-15 附近）",
        "version": "FAA-H-8083-25C；2023 章節 PDF，已核對引用段落",
        "checked": "2026-09-06"
      }
    ],
    "questionIds": [
      "n9",
      "n10"
    ],
    "table": {
      "headers": [
        "類型",
        "主要冷卻方式",
        "典型學習線索"
      ],
      "rows": [
        [
          "輻射霧",
          "地表夜間輻射冷卻",
          "晴朗、潮濕、弱風"
        ],
        [
          "平流霧",
          "潮濕空氣移經冷表面",
          "空氣移動與地表溫差"
        ]
      ]
    }
  },
  {
    "id": "metar-basics",
    "track": "FAA",
    "subject": "航空氣象",
    "title": "逐段讀 METAR：從一串字母到天氣摘要",
    "summary": "以明確標示的美式虛構電報，練習風、能見度、雲層與高度表設定。",
    "minutes": 6,
    "terms": [
      "METAR · 例行航空天氣報告",
      "UTC · 世界協調時間",
      "BKN · 多雲",
      "SM · 法定英里"
    ],
    "objectives": [
      "按順序拆解簡化美式 METAR",
      "分清真北風向、AGL 雲底及 SM 能見度",
      "區分觀測報告與天氣預報"
    ],
    "prerequisite": "適合入門；先閱讀英文術語，再進入例題。",
    "sections": [
      {
        "title": "先確認是觀測，不是預報",
        "text": "METAR 是航空天氣觀測的編碼報告。閱讀時先找站台識別與觀測日期時間，再看風、能見度、天氣、雲況、溫度／露點與高度表設定。SPECI 是特別天氣報告；TAF 則是預報。兩者用途與時間含義不同，不能用一份當下觀測直接取代未來抵達時段的天氣資訊。",
        "ref": 0
      },
      {
        "title": "拆解本站的虛構報告",
        "text": "以下完全是教學用自編電報，不是 KSEA 的即時或歷史觀測：METAR KSEA 061200Z 18012G20KT 10SM SCT020 BKN040 18/12 A2992。061200Z 表示該月 6 日 12:00 UTC；18012G20KT 表示風從真北基準的 180 度吹來，風速 12 kt、陣風 20 kt。日期碼沒有月份與年份，不能脫離報告上下文自行補齊。",
        "ref": 0
      },
      {
        "title": "能見度與雲底各用什麼單位？",
        "text": "在這個美式範例中，10SM 是 10 法定英里，不是 10 海里。SCT020 的雲量是疏雲，雲底為地面以上 2,000 呎；BKN040 是多雲，雲底為地面以上 4,000 呎。高度碼以百呎讀取，而不是把 040 讀成 40 呎。AGL 是地面以上，不能不經轉換就當成海拔 MSL 高度。",
        "ref": 0
      },
      {
        "title": "溫度、氣壓與適用範圍",
        "text": "18/12 代表溫度 18°C、露點 12°C；A2992 是高度表設定 29.92 inHg。本文刻意採美式編碼範例，其他地區可能使用公尺能見度與不同氣壓編碼，不能直接照抄所有單位。完整 METAR 還可能包含其他天氣、跑道視程、備註或修正標誌，本篇先建立閱讀順序，不提供通用自動解碼器。",
        "ref": 0
      }
    ],
    "misconception": {
      "claim": "BKN040 表示海拔 40 呎有雲。",
      "correction": "此例是地面以上 4,000 呎的雲底；040 要乘以 100，且參考面是 AGL。"
    },
    "selfCheck": {
      "question": "範例中的 18012G20KT 與 10SM，哪個是海里相關單位？",
      "answer": "KT 是節，也就是海里／小時；SM 是法定英里，並非海里。"
    },
    "refs": [
      {
        "title": "NOAA / NWS Aviation Weather Center · Aviation Weather Data",
        "url": "https://aviationweather.gov/help/data/#metars",
        "section": "METARs / Date and Time / Winds / Visibility / Sky Condition / Altimeter",
        "version": "線上說明，查閱 2026-09-06；本文採美式報告慣例",
        "checked": "2026-09-06"
      }
    ],
    "questionIds": [
      "n11",
      "n12"
    ],
    "table": {
      "headers": [
        "自編報告片段",
        "讀法"
      ],
      "rows": [
        [
          "061200Z",
          "本月 6 日 12:00 UTC"
        ],
        [
          "18012G20KT",
          "真風向 180°，12 kt，陣風 20 kt"
        ],
        [
          "10SM",
          "能見度 10 法定英里"
        ],
        [
          "SCT020 / BKN040",
          "雲底 2,000 / 4,000 呎 AGL"
        ],
        [
          "18/12",
          "溫度 18°C／露點 12°C"
        ],
        [
          "A2992",
          "高度表設定 29.92 inHg"
        ]
      ]
    }
  }
]);
