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
