export const chapter={
  "id": "phak25c-4",
  "number": 4,
  "title": "飛行基本原理",
  "english": "Principles of Flight",
  "section": "第 4 章；4-1～4-9，全章目錄逐節講解",
  "goal": "用空氣性質、壓力與流動建立升力的理解。",
  "primer": "空氣有密度、黏性與壓力，因此流過物體時會產生作用力。飛機並不是在空的背景中移動；機翼與周圍流場彼此影響，黏性也關係到貼近表面的流動。",
  "terms": [
    "Density altitude · 密度高度",
    "Airfoil · 翼型",
    "Relative wind · 相對風"
  ],
  "prompts": [
    "同一機場在氣壓近似固定而升溫時，壓力高度、密度高度與幾何標高分別如何變化？",
    "如何用對稱翼型反駁等時會合說法？壓力分布與下洗為什麼不能算成兩份升力相加？"
  ],
  "keyPoints": [
    "空氣有質量、黏性與壓力；邊界層具有速度分布，不只是一層黏住的分子。",
    "壓力高度對應氣壓，密度高度對應密度；溫度與濕度的比較須說明固定條件。",
    "牛頓與伯努利描述同一流動；上下氣流不必在後緣同時會合。",
    "翼型、迎角與三維翼尖效應共同影響氣動力，固定上下升力占比並不適用。"
  ],
  "detailSections": [
    {
      "id": "introduction",
      "english": "Introduction",
      "title": "導論：環境、流動與受力",
      "parent": null,
      "locator": "PHAK C 版 · 4-1",
      "printedPage": "4-1",
      "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=1",
      "paragraphs": [
        "本章從空氣的物理性質出發，連到航空器的受力與性能。空氣具有質量、壓力和黏性，機翼在其中運動會改變周圍氣流；理解飛行不是只背四個力的名稱，而是說清楚環境及流動改變後，受力為什麼也改變。",
        "可以把閱讀分成三步：先了解壓力、溫度與濕度如何影響密度，再用運動定律和壓力分布解釋升力，最後從二維翼型延伸到有翼尖的三維機翼。後續章節的失速、阻力與性能計算，都以這些觀念為基礎。"
      ],
      "lessonBlocks": [
        {
          "title": "本章的因果鏈：環境 → 密度與流動 → 受力 → 性能",
          "paragraphs": [
            "本章先建立空氣的物理性質，再用壓力、速度與動量解釋航空器受力。學習時把兩類問題分開：環境改變讓空氣有多稀薄，以及機翼如何使周圍流動改變。前者影響性能條件，後者解釋氣動力的形成。",
            "飛機與直升機主要利用翼面相對空氣運動產生氣動力；氣球則主要利用浮力。都遵守物理定律，但不能把「機翼升力大於重量」當成所有航空器或所有飛行狀態的共同條件。穩定直線水平飛行可以有升力與重量平衡。"
          ]
        }
      ]
    },
    {
      "id": "atmosphere",
      "english": "Structure of the Atmosphere",
      "title": "大氣的組成與性質",
      "parent": null,
      "locator": "PHAK C 版 · 4-1",
      "printedPage": "4-1",
      "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=1",
      "paragraphs": [
        "大氣是包圍地球的氣體混合物，具有質量並受到重力作用。乾空氣按體積約含 78% 氮、21% 氧及少量其他氣體；實際空氣還包含變動的水氣。這些比例描述組成，不能和每單位體積內有多少空氣的密度混為一談。",
        "閱讀時要分開「氧氣占比」與「一定體積內的氧氣量」：大氣越稀薄，即使組成比例近似，單位體積中的分子數仍會下降。本章把重點放在空氣密度、壓力與性能的關係；不要用氧氣較重的單一描述推論日常飛行高度中的氣體完全分層。"
      ],
      "references": [
        {
          "title": "NASA：對流層的混合作用與大氣環境",
          "url": "https://science.nasa.gov/wp-content/uploads/2023/09/chap3.pdf",
          "checked": "2026-09-10"
        },
        {
          "title": "NASA · 大氣混合與 homosphere",
          "url": "https://ntrs.nasa.gov/api/citations/19960000860/downloads/19960000860.pdf",
          "checked": "2026-09-12"
        }
      ],
      "lessonBlocks": [
        {
          "title": "乾空氣比例，不是氧氣沉在下面的分層圖",
          "paragraphs": [
            "約 78% 氮、21% 氧、1% 其他氣體是乾空氣的近似體積比例，水蒸氣含量會變動。空氣具有質量、重量及可壓縮性，因此能傳遞動量、形成壓力，也能在流經機翼時產生氣動作用。",
            "原文以較重氣體沉降來解釋低空氧氣較多，容易造成錯誤印象。在一般航空活動涉及的低層大氣中，混合作用使氮氧比例大致均勻；高處呼吸可用氧減少，主要是總氣壓與氧分壓下降，不是氧氣比例突然消失。",
            "所謂大量大氣或氧分子位於較低高度，是因整體大氣質量集中在下方，不能解讀成 35,000 ft 以上沒有氧氣。這裡先學大氣概念，人體缺氧與供氧另見第 17 章。"
          ]
        }
      ],
      "currentNote": "原文把低空氧氣較多歸因於重氣體沉降，需配合低層大氣充分混合的觀念修正。高空氧分壓降低不等於氧的體積比例在一般飛行高度快速下降。"
    },
    {
      "id": "fluid",
      "english": "Air is a Fluid",
      "title": "空氣也是流體",
      "parent": "atmosphere",
      "locator": "PHAK C 版 · 4-2",
      "printedPage": "4-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=2",
      "paragraphs": [
        "Fluid 包括液體與氣體，不只指水或油。流體在剪力作用下會持續變形並流動，氣體還會膨脹以占據容器的可用空間；因此空氣能繞過機翼，卻同時對表面施加壓力與黏性剪力。",
        "低速問題常可近似把空氣視為密度變化很小的流體，但空氣本身仍具有可壓縮性。這個近似是為了處理特定條件，不代表密度永遠固定；討論高度變化、高溫或高速流動時，必須重新檢查假設。"
      ],
      "lessonBlocks": [
        {
          "title": "流體包含氣體，能流動不代表沒有阻力",
          "paragraphs": [
            "Fluid 指在持續剪應力下會持續變形的物質，液體與氣體都屬流體。空氣會填滿可用容積，水則通常保有較固定體積；兩者在可壓縮性等特性上不同，不能把所有液體直覺直接搬到空氣。",
            "風洞中讓氣流經固定模型，與觀察機翼穿過空氣，都可以研究相對運動造成的氣動作用。先說明參考座標很重要：說翼面旁空氣速度接近零，通常是相對於該翼面而言。"
          ]
        }
      ]
    },
    {
      "id": "viscosity",
      "english": "Viscosity",
      "title": "黏性：流層之間的動量傳遞",
      "parent": "fluid",
      "locator": "PHAK C 版 · 4-2",
      "printedPage": "4-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=2",
      "paragraphs": [
        "黏性描述流體抵抗相鄰流層相對滑動的特性，會使不同速度的流層互相影響。原文以油和水的流動作比喻；空氣雖然容易流動，黏性仍非零，靠近翼面時的黏性效應尤其重要。",
        "不要把黏性和密度當成同一個量：密度是單位體積的質量，黏性則關係到速度差造成的剪力。自編例：知道某流體更重，並不足以判定它流動時的內部阻力更大；兩者必須分別辨識。"
      ],
      "lessonBlocks": [
        {
          "title": "黏性如何把表面的影響傳到外側氣流？",
          "paragraphs": [
            "黏性描述流體抵抗相鄰流層相對滑動的性質。較慢的近壁流與較快的外側流互相傳遞動量，因此即使只有最貼近表面的流速接近零，速度變化仍能延伸到一段厚度內。",
            "原書用油與水的流動速度作比喻，但氣動問題不能只以「摸起來黏不黏」判斷。空氣的黏性雖小，仍對表面摩擦、邊界層與流動分離很重要；忽略某處黏性效應的理想模型，不等於真實空氣沒有黏性。"
          ]
        }
      ]
    },
    {
      "id": "friction",
      "english": "Friction",
      "title": "表面摩擦與邊界層",
      "parent": "fluid",
      "locator": "PHAK C 版 · 4-2",
      "printedPage": "4-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=2",
      "paragraphs": [
        "在通常的黏性流動模型中，貼近固體表面的空氣相對表面速度趨近零，往外才逐漸接近外部流速。這個速度明顯受表面影響的薄區域稱為邊界層，不只是貼住翼面的單一層分子；速度差形成壁面剪力與摩擦阻力。",
        "表面粗糙、污染及流動狀態會影響邊界層發展，但即使表面非常光滑，也不代表摩擦完全消失。自編例：機翼外觀平整仍有黏性效應；而翼面異常也可能改變流動分離，影響不一定只是多一點表面摩擦。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 4-1 · 從微觀粗糙度讀到邊界層",
          "paragraphs": [
            "圖把肉眼平滑的翼面放大，提醒表面仍有細微結構。相對翼面，貼近表面的空氣通常滿足無滑移條件；往外速度逐漸接近主流，這個受黏性影響明顯的區域就是邊界層。它不只是「黏住的一層分子」。",
            "表面摩擦不是只由粗糙凸點造成；理想光滑表面也會有黏性剪應力。粗糙度、污染或結冰可能改變轉捩與分離，進而影響升阻特性。不能因此推定任何表面自行磨得越光越好，實際表面處置仍要遵守機型要求。",
            "阻力除了表面摩擦，還有壓力分布造成的分量及三維升力相關阻力。因此把黏性與摩擦相加就當成全部 drag，會漏掉後面章節要學的效應。"
          ],
          "figure": {
            "label": "Figure 4-1 · Microscopic surface of a wing",
            "page": "4-2",
            "url": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=2"
          }
        }
      ]
    },
    {
      "id": "pressure",
      "english": "Pressure",
      "title": "壓力：每單位面積的正向作用力",
      "parent": "fluid",
      "locator": "PHAK C 版 · 4-3",
      "printedPage": "4-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=3",
      "paragraphs": [
        "壓力是單位面積上的正向力，常見單位有 Pa、hPa、psi 或 inHg；同一壓力作用在不同面積上，總力會不同。壓力與沿表面方向的剪力要分開，計算物體受力時還須考慮每一小片表面的方向。",
        "在同一位置，靜止流體的壓力向各方向作用；這不表示整個物體各處必然有相同壓力。高度差或流動都可能造成壓力分布差異，將各處作用力按方向加總，才能判斷淨力，不能只挑一個測點代表整片機翼。"
      ],
      "lessonBlocks": [
        {
          "title": "壓力是單位面積的力，不是只有向下的重量",
          "paragraphs": [
            "p = F／A 表示均勻壓力在面積上的正向作用。流體靜壓在某一點對各方向相同，但不同位置可以有不同壓力；浸在流體中的物體並不是所有位置都一定受同一數值的壓力。",
            "要計算整體受力，需把整個表面的壓力作用連同方向一起加總。簡單平板模型中，兩面壓差 100 Pa、面積 2 m²，若各處均勻，合力大小為 200 N。真實機翼表面彎曲且壓力不均，不能只用一個測點乘整個機翼面積。",
            "壓力沿表面法線作用，黏性剪力沿表面切向作用；兩者合成得到總氣動力。升力與阻力則是把這個力按相對來流方向分解後的名稱。"
          ],
          "check": {
            "question": "低壓一側是在用「負的絕對壓力」吸住機翼嗎？",
            "answer": "不是。低壓通常是相對環境壓力較低；整體受力來自各處壓力與剪力的合成。"
          }
        }
      ]
    },
    {
      "id": "atmospheric-pressure",
      "english": "Atmospheric Pressure",
      "title": "大氣壓力與標準大氣",
      "parent": "atmosphere",
      "locator": "PHAK C 版 · 4-3",
      "printedPage": "4-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=3",
      "paragraphs": [
        "大氣壓力與上方空氣的重量相關，一般隨高度增加而下降，也隨天氣、時間及位置改變。ISA 提供共同參考：海平面溫度 15°C、壓力約 1013.25 hPa（29.92 inHg）；這是比較性能與校準的模型，不是每天實際天氣的承諾。",
        "原書用每千呎約下降 2°C 描述標準對流層溫度變化，並提供壓力對照表。氣壓隨高度的變化不是固定直線，不能把低空的每千呎約 1 inHg 粗估延伸到所有高度；使用性能資料時，應依指定的壓力與溫度輸入。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 4-2 · 氣壓計與標準海平面基準",
          "paragraphs": [
            "氣壓來自大氣的狀態，在靜力近似下，越往上，上方空氣柱通常越少，氣壓越低。圖中的水銀柱示意外部氣壓如何由液柱高度表示；29.92 inHg 指水銀柱高度單位，不是某個空氣柱的幾何高度。",
            "ISA 海平面基準為 15 °C、1013.25 hPa，常近似寫成 29.92 inHg 或 1013.2 mb；hPa 與 mb 數值相同。這是共同參考，不是世界各地海平面每天都量到這些數字。"
          ],
          "figure": {
            "label": "Figure 4-2 · Standard sea level pressure",
            "page": "4-3",
            "url": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=3"
          }
        },
        {
          "title": "Figure 4-3 · 標準大氣表是模型，不能當即時觀測",
          "paragraphs": [
            "ISA 對流層溫度遞減率約為每 1,000 ft 降 1.98 °C，直到約 36,089 ft；常以 2 °C／1,000 ft 心算。原文對高層等溫區的描述也是近似，標準模型並非一直遞減，也不是任意高處都維持相同溫度。",
            "表中的氣壓下降不是固定每 1,000 ft 減 1 inHg。那只是低空附近的粗略心算，在高處誤差增加。也不能把標準表中 8,000 ft 的氣壓當成當天某個 8,000 ft 機場的實測壓力。",
            "原文說所有儀表按標準大氣校準，是過度概括。高度表利用壓力—標準高度關係，空速指示也有標準參考，但溫度感測器、姿態儀等量測目的不同；不要推論所有顯示都能用同一 ISA 修正。"
          ],
          "table": {
            "caption": "先辨認資料種類",
            "headers": [
              "資料",
              "意義",
              "不能混用成"
            ],
            "rows": [
              [
                "ISA 標準表",
                "理論高度、壓力與溫度關係",
                "當日實測天氣。"
              ],
              [
                "Station pressure 場站氣壓",
                "場站所在高度的實際氣壓",
                "已修正的高度表設定值。"
              ],
              [
                "Altimeter setting 高度表設定",
                "讓高度表在該場站顯示相應標高的設定值",
                "密度計算要求的實際場站氣壓。"
              ]
            ]
          },
          "figure": {
            "label": "Figure 4-3 · Properties of standard atmosphere",
            "page": "4-3",
            "url": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=3"
          }
        }
      ],
      "references": [
        {
          "title": "NWS · Station pressure 與 altimeter setting 定義",
          "url": "https://www.weather.gov/bou/pressure_definitions",
          "checked": "2026-09-12"
        }
      ]
    },
    {
      "id": "pressure-altitude",
      "english": "Pressure Altitude",
      "title": "壓力高度：把氣壓換成標準高度",
      "parent": "atmosphere",
      "locator": "PHAK C 版 · 4-4",
      "printedPage": "4-4",
      "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=4",
      "paragraphs": [
        "壓力高度是當地靜壓在標準大氣中對應的高度。把高度表設定為 29.92 inHg／約 1013.25 hPa 時，理想指示就是壓力高度；它使用共同壓力基準，而不是直接量測飛機到海面或地面的幾何距離。",
        "同一座機場在不同氣壓下可以有不同壓力高度，標高本身則沒有改變。自編例：氣壓下降而機場位置不變，標準大氣會把該氣壓對應到更高的位置。這個量可供性能資料使用，但不要把計算示例理解為任意改動飛行中的高度表設定程序。"
      ],
      "lessonBlocks": [
        {
          "title": "壓力高度：同一個壓力對應哪個標準高度？",
          "paragraphs": [
            "Pressure altitude（PA）把量到的氣壓對應到標準大氣中的高度。把高度表設定為 29.92 inHg，可讀取壓力高度；它不是在量你離地有多高，也不保證等於真實海拔。",
            "SDP 是說明標準基準的理論面，不是每次天氣改變時都要到海面找一個實體平面。氣壓高度作為性能資料輸入時，還要搭配溫度及其他條件；它本身沒有把溫度對密度的影響全部算進去。"
          ]
        },
        {
          "title": "自編算例：先算 PA，再看它的用途",
          "paragraphs": [
            "低空附近可用 PA（ft）≈ 場站標高（ft）+ [29.92 − 高度表設定（inHg）] × 1,000 作粗估。若標高 3,000 ft，設定值 29.72 inHg，則 PA ≈ 3,200 ft。符號的直覺是低壓時，同一地點對應較高的標準壓力高度。",
            "這是近似算例，不是精密高度換算。實際性能計算應依 AFM／POH 圖表或適用工具；不要為了心算而在飛行中任意變更高度表設定。原文的 18,000 ft 是美國制度背景，其他地區的 transition altitude／level 要依當地 AIP 與程序。"
          ],
          "check": {
            "question": "機場沒有變高，PA 為何會變？",
            "answer": "PA 是氣壓的標準高度表示；當地氣壓改變，PA 就能改變，地形本身不用移動。"
          }
        }
      ]
    },
    {
      "id": "density-altitude",
      "english": "Density Altitude",
      "title": "密度高度：把空氣密度換成標準高度",
      "parent": "atmosphere",
      "locator": "PHAK C 版 · 4-4",
      "printedPage": "4-4",
      "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=4",
      "paragraphs": [
        "密度高度是當時空氣密度在標準大氣中所對應的高度。密度越低，等效高度越高；常見方法先求壓力高度，再修正非標準溫度。它描述性能環境，不能由高度表直接讀出，也不是飛機的離地高度。",
        "在相同真空速、翼面積與升力係數下，密度降低會使升力減少；若要支撐相同重量，就需調整相應條件。稀薄空氣亦影響螺旋槳與引擎能力，程度依系統而異。實際起飛與爬升性能仍需查機型圖表，不能把「像在更高處」當成所有參數都完全相同。"
      ],
      "points": [
        "同一機場：氣壓近似不變而溫度升高時，壓力高度近似不變，密度高度升高。",
        "標準溫度條件下：常用乾空氣模型的壓力高度與密度高度相等。",
        "圖表輸入：若手冊已要求壓力高度及溫度，不要擅自改填密度高度而重複修正。"
      ],
      "lessonBlocks": [
        {
          "title": "密度高度是性能環境，不是離地高度",
          "paragraphs": [
            "Density altitude（DA）是在標準大氣中具有相同空氣密度的高度。DA 高代表稀薄，DA 低代表稠密。它可以高於、低於或等於 PA，但不會把機場的真實海拔或障礙物位置改變。",
            "常用「PA 修正非標準溫度」求 DA，是忽略或簡化濕度的實務方法；更完整的空氣密度也受水蒸氣影響。ISA 對應條件下 PA 與 DA 相等，但現場高度表不能直接讀出當時 DA。"
          ]
        },
        {
          "title": "密度如何同時影響機翼與動力？",
          "paragraphs": [
            "以 L = ½ρV²S C_L 觀察，在相同真空速 V、翼面積 S 和升力係數 C_L 下，密度 ρ 降低就會使升力減少。若要保持相同重量所需升力，可需要較高真空速或改變 C_L；不要推論同樣指示空速下升力必然也按同一比例下降。",
            "高 DA 下，典型自然進氣活塞引擎可用功率下降，螺旋槳推力與整體性能也受影響；渦輪增壓或其他動力系統的反應則有其工作範圍與限制。起飛真空速、地速及滑跑需求可能增加，爬升表現可能下降，具體幅度必須查機型資料。",
            "DA 相同也不表示所有性能必然相同：重量、風、跑道坡度、表面、構型、引擎溫度限制等仍可能不同。不能把一句「像在那個高度飛」當成完整性能模型。"
          ]
        },
        {
          "title": "自編算例：比標準溫度熱多少？",
          "paragraphs": [
            "延續 PA 3,200 ft，使用近似 ISA 溫度 15 − 2 × 3.2 = 8.6 °C。若外氣溫度 OAT 為 30 °C，則高於標準 21.4 °C。粗估 DA（ft）≈ PA + 120 × [OAT − ISA 溫度]，得到 3,200 + 120 × 21.4 ≈ 5,768 ft，可讀作約 5,800 ft。",
            "此處 120 的單位是 ft／°C，不能把華氏溫差直接代入；這個近似不含完整濕度修正，也不是起飛距離公式。你仍在標高 3,000 ft 的場站，接下來要用該機圖表按其指定輸入求性能，而不是把所有「高度」欄位都改填 5,800。"
          ],
          "check": {
            "question": "DA 是 5,800 ft，障礙物間隔就要改用這個高度嗎？",
            "answer": "不能。DA 表示密度環境；地形、真實高度與障礙物間隔是不同問題。"
          }
        }
      ]
    },
    {
      "id": "density-pressure",
      "english": "Effect of Pressure on Density",
      "title": "壓力如何影響密度",
      "parent": "density-altitude",
      "locator": "PHAK C 版 · 4-4",
      "printedPage": "4-4",
      "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=4",
      "paragraphs": [
        "在溫度及氣體組成相同時，提高壓力會增加單位體積中的質量，因此密度與絕對壓力成正比。這裡的「其他條件相同」是結論的一部分；若壓縮同時讓溫度上升，就不能只用壓力倍數推算密度倍數。",
        "自編例：比較兩個溫度相同、成分相同但氣壓不同的空氣樣本，較低壓的樣本密度較低。航空性能的壓力輸入也須用正確定義，不能把已換算到海平面的高度表設定值直接當作高地機場的實際站壓。"
      ],
      "lessonBlocks": [
        {
          "title": "ρ = p／RT：先寫下保持不變的條件",
          "paragraphs": [
            "對固定組成的理想氣體，密度等於絕對壓力除以氣體常數與絕對溫度的乘積。若溫度與組成不變，壓力增加 10%，密度也增加 10%；原文說壓力加倍則密度加倍，依賴的正是這些條件。",
            "不要混淆固定質量的一團空氣和固定體積的空間。讓同一團空氣膨脹時，質量沒有自動消失，但體積增加、密度降低；若觀察固定 1 m³ 的空間，稀薄時其中質量較少。"
          ]
        }
      ]
    },
    {
      "id": "density-temperature",
      "english": "Effect of Temperature on Density",
      "title": "溫度如何影響密度",
      "parent": "density-altitude",
      "locator": "PHAK C 版 · 4-4",
      "printedPage": "4-4",
      "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=4",
      "paragraphs": [
        "在壓力與組成相同時，空氣密度與絕對溫度成反比，溫度升高便會降低密度。絕對溫度應使用 Kelvin；不能說攝氏溫度從 10°C 變成 20°C，密度就減半，因為攝氏零點不是分子熱運動的零點。",
        "自編例：早晨與午後的機場標高相同，如果壓力近似不變而午後更熱，午後密度高度就較高。真實大氣中的溫度和壓力常同時變化，因此不能只因高空較冷就推論高空空氣一定比較密。"
      ],
      "lessonBlocks": [
        {
          "title": "反比關係用 Kelvin，不用攝氏數值相除",
          "paragraphs": [
            "在壓力與組成固定時，溫度越高密度越低。若由 0 °C 升到 30 °C，應比較 273.15 K 與 303.15 K：後者密度約為前者的 273.15／303.15 ≈ 90.1%。不能用 30／0 計算，也不能說攝氏溫度翻倍密度就減半。",
            "向上飛時，氣壓與溫度常同時下降，兩者對密度方向不同；在一般低層大氣中，氣壓降低通常占主導，使密度隨高度上升而減小。實際溫度還可能逆溫，因此不應把每次上升都一定變冷當成定律。"
          ]
        }
      ]
    },
    {
      "id": "density-humidity",
      "english": "Effect of Humidity (Moisture) on Density",
      "title": "水氣如何影響密度",
      "parent": "density-altitude",
      "locator": "PHAK C 版 · 4-5",
      "printedPage": "4-5",
      "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=5",
      "paragraphs": [
        "在總壓力和溫度相同時，水氣比例增加會降低空氣密度，因為水分子的分子量小於乾空氣的平均值。這裡討論的是氣態水取代部分其他氣體，不是把可見水滴或雨水重量加進空氣的直覺模型。",
        "相對濕度是相對於該溫度下飽和狀態的比例，不是空氣中水氣的質量百分比；不同溫度即使相對濕度相同，水氣量仍可能不同。濕度會影響密度，但常用性能圖表的處理方式不同，應遵循手冊，不能自行套用固定起飛距離加成。"
      ],
      "lessonBlocks": [
        {
          "title": "為什麼潮濕空氣反而較輕？",
          "paragraphs": [
            "比較同一溫度、同一總壓力的兩份空氣時，水蒸氣取代部分乾空氣分子。水分子的分子量約 18，乾空氣平均約 29，因此水蒸氣比例較高時，平均分子量與密度降低。這裡說的是氣態水，不是把霧滴或雨水重量混進同一比較。",
            "Humidity 是濕度的總稱，relative humidity（RH）只是其中一種表達。RH 比較實際水蒸氣壓與同溫度下飽和水蒸氣壓，不能把 80% RH 解讀成空氣有 80% 是水。暖空氣在飽和時能對應更高水蒸氣量，因此不同溫度的相同 RH 不表示相同水氣含量。",
            "原文「溫暖潮濕必比寒冷乾燥輕」還需控制壓力；若兩者壓力相差很大，不能只看溫濕度就下結論。濕度對 DA 的影響也不是固定加幾百呎。"
          ]
        },
        {
          "title": "重讀原書算例：22.22 inHg 是什麼壓力？",
          "paragraphs": [
            "原書假設使用 8,000 ft 標準氣壓約 22.22 inHg，溫度 80 °F（約 26.7 °C）、露點 75 °F（約 23.9 °C），列出 DA 約 11,564 ft 的結果。這是書中示例，不是當天機場觀測，也不是本站重新查得的即時數值。",
            "NWS 工具要求 actual station pressure，明確不是 altimeter setting。若把 METAR 的高度表設定直接填進場站氣壓欄，或把 80 當攝氏，就會算出不同且不適用的結果。露點用來描述水氣，不能用 RH 百分比代替。",
            "實作時先核對壓力種類和單位，再輸入溫度及露點；工具顯示的 DA 仍只是一項環境資訊。原書約 500 ft 的濕度差是該例的比較，不能對任何天氣都加同一修正。"
          ],
          "check": {
            "question": "高度表設定 29.92 inHg，就可以填進任何 DA 計算器的 station pressure 嗎？",
            "answer": "不可以。先看工具欄位要求；場站氣壓與高度表設定不同，尤其高海拔時差異很大。"
          }
        }
      ],
      "references": [
        {
          "title": "NWS · Density Altitude Calculator",
          "url": "https://www.weather.gov/epz/wxcalc_densityaltitude",
          "checked": "2026-09-12"
        }
      ]
    },
    {
      "id": "lift-theories",
      "english": "Theories in the Production of Lift",
      "title": "升力的壓力與動量觀點",
      "parent": null,
      "locator": "PHAK C 版 · 4-5",
      "printedPage": "4-5",
      "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=5",
      "paragraphs": [
        "升力是氣動合力中垂直於相對氣流的分量。機翼改變周圍流場，翼面各處的壓力作用形成合力，同一流場也呈現空氣動量的改變；這是描述同一個物理作用的不同方式，不是各算一次再把兩份升力相加。",
        "牛頓定律提供力與動量的關係，伯努利關係在適用條件下連結速度和壓力。定常平直水平飛行的簡化平衡中，升力與重量相等即可維持飛行；不必持續讓升力大於重量，轉彎或加速則要另外分析合力。"
      ],
      "references": [
        {
          "title": "NASA：Bernoulli and Newton — 壓力與動量的共同解釋",
          "url": "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/bernoulli-and-newton/",
          "checked": "2026-09-10"
        }
      ],
      "lessonBlocks": [
        {
          "title": "壓力分布與動量改變，是同一流場的兩種觀察",
          "paragraphs": [
            "從機翼表面看，壓力與剪力的合成給出氣動力；從周圍空氣看，機翼改變氣流動量，氣流也對機翼施力。這兩種觀察必須相容，不能當成互斥理論，也不能把「伯努力升力」再加上「牛頓升力」算兩次。",
            "對多數常見低速翼型，壓力作用是升力的主要來源，黏性則透過邊界層與分離深刻影響整個流場。不能因此說壓力完全無法解釋升力，也不能只畫下表面的碰撞就忽略上表面。",
            "原文把升力大於重量與能飛連在一起，是不完整的狀態描述。穩定水平飛行的簡化模型是 L = W；爬升或轉彎須按方向分解全部力，不能只比較兩個數字。"
          ]
        }
      ]
    },
    {
      "id": "newton",
      "english": "Newton’s Basic Laws of Motion",
      "title": "牛頓三大運動定律",
      "parent": "lift-theories",
      "locator": "PHAK C 版 · 4-5",
      "printedPage": "4-5",
      "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=5",
      "paragraphs": [
        "第一定律說明沒有淨外力時物體維持靜止或等速直線運動；第二定律把淨力與動量變化相連，定質量時可寫成 F = ma。加速度包括速度大小或方向的變化，因此定速轉彎仍需要非零合力。",
        "第三定律的作用力與反作用力作用在不同物體上。機翼對空氣施力、空氣對機翼施力，不能把它們放進同一張飛機受力圖互相抵消；同樣地，螺旋槳推動空氣向後，空氣對槳提供向前的作用力。"
      ],
      "points": [
        "第一定律：平衡的是同一物體上的外力，不是沒有任何力存在。",
        "第二定律：比較相同淨力時，質量越大，加速度越小；速度方向改變也算加速。",
        "第三定律：機翼作用於空氣的力與空氣作用於機翼的力是一對；升力與重量不是這一對。"
      ],
      "lessonBlocks": [
        {
          "title": "三定律：先指定物體，再畫受力",
          "paragraphs": [
            "第一定律的核心是合力為零時，物體維持靜止或等速直線運動。慣性不是額外一股向後力，也不存在必須「超過慣性門檻」才能加速的普遍規則；在地面開始移動還可能需要克服煞車或滾動阻力。",
            "第二定律對固定質量可寫成 ΣF = ma。等速轉彎仍有加速度，因為速度方向改變；同一合力作用於較大質量會產生較小加速度。自編例：2,000 N 合力作用於 1,000 kg 質量，得到 2 m/s²，而不是把引擎推力直接當成已扣除所有阻力的合力。",
            "第三定律的成對作用在不同物體上：機翼對空氣施力，空氣對機翼施反向力。它們不會在「只研究飛機」的受力圖中彼此抵消。螺旋槳與噴射推進也利用動量交換，不需靠後方的固體牆壁反推。"
          ],
          "check": {
            "question": "機翼向下作用於空氣，反作用力不是抵消了，所以無法升起嗎？",
            "answer": "不會這樣抵消。兩力分別作用於空氣與機翼；判斷飛機加速度時，計算作用在飛機上的所有力。"
          }
        }
      ]
    },
    {
      "id": "bernoulli",
      "english": "Bernoulli’s Principle of Differential Pressure",
      "title": "伯努利原理與壓力差",
      "parent": "lift-theories",
      "locator": "PHAK C 版 · 4-6",
      "printedPage": "4-6",
      "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=6",
      "paragraphs": [
        "對穩定、可近似不可壓縮且黏性耗散可忽略的流動，沿同一流線可用 p + ½ρV² + ρgh 為常數來理解能量關係。同高度時，流速增加對應靜壓降低；不能在不同能量來源的任意兩股氣流之間直接套用這句話。",
        "文氏管在適用近似下以流通面積縮小、流速增加示範此關係，但機翼周圍沒有形成相同的封閉管壁。要預測翼面壓力，仍須知道正確流場；「上方路程長所以必須趕上」不是可用來決定流速的物理條件。"
      ],
      "references": [
        {
          "title": "NASA：Bernoulli and Newton — 壓力與動量的共同解釋",
          "url": "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/bernoulli-and-newton/",
          "checked": "2026-09-10"
        },
        {
          "title": "NASA · Bernoulli’s Equation 與適用假設",
          "url": "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/bernoullis-equation/",
          "checked": "2026-09-12"
        }
      ],
      "lessonBlocks": [
        {
          "title": "Figure 4-4 · 文氏管先用連續方程，再用能量關係",
          "paragraphs": [
            "定常流動在無洩漏的管內滿足質量守恆：ρAV 在不同截面相同。若低速下可近似密度不變，截面面積縮小時，流速增加；例如面積減半，平均流速約加倍。這不是先假設壓力變小再硬湊出較快流速。",
            "在適用的低速、定常、可忽略黏性損失與高度差的同一流線上，p + ½ρV² 近似不變，因此速度增加伴隨靜壓降低。出口變寬時速度下降、靜壓回升；真實管流有損失，不能保證總壓或出口靜壓完全回復。",
            "機翼上方沒有實體管壁，不能把半根文氏管當成完整升力解釋。伯努力關係描述已形成的速度與壓力之間如何相容；翼型、迎角、流動邊界與其他物理條件才共同決定流場。"
          ],
          "figure": {
            "label": "Figure 4-4 · Venturi tube",
            "page": "4-6",
            "url": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=6"
          }
        },
        {
          "title": "套公式前的限制：不是看到快就任意推論低壓",
          "paragraphs": [
            "不同流線可以有不同總壓；壓縮機、螺旋槳附近能量輸入、衝擊波或強黏性損失，也不能直接沿用最簡單的 p + ½ρV² 常數形式。高速可壓縮流還要用適合的關係。",
            "自編低速理想例：ρ = 1.2 kg/m³，同一等高流線由 20 m/s 增至 40 m/s，靜壓差 p₂ − p₁ = ½ × 1.2 × (20² − 40²) = −720 Pa。負號表示相對入口壓力降低，不表示絕對壓力是負值。"
          ]
        }
      ]
    },
    {
      "id": "airfoil",
      "english": "Airfoil Design",
      "title": "翼型幾何與設計取捨",
      "parent": null,
      "locator": "PHAK C 版 · 4-6",
      "printedPage": "4-6",
      "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=6",
      "paragraphs": [
        "翼型是機翼等部件的剖面形狀。前緣、後緣的連線是翼弦線，平均弧線描述上下表面中間的彎曲趨勢；厚度與彎度是不同幾何特性。迎角是翼弦與相對氣流之間的角度，不能直接拿機頭相對地平線的俯仰角代替。",
        "不同任務在升力、阻力、速度範圍及其他需求間取捨，沒有適合所有條件的單一最佳翼型。襟翼等裝置可改變翼型或有效面積以配合低速需求；「上凸下平」只是某些設計的外形，對稱翼型和薄板也能在適當條件下產生升力。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 4-5 · 弦線、中弧線、厚度與迎角分開",
          "paragraphs": [
            "Leading edge 與 trailing edge 是前緣及後緣；chord line 是兩者之間的直線，chord 是其長度。Mean camber line 描述上下表面中間的曲線；它偏離弦線的程度描述翼型彎度，而上下表面間距描述厚度，兩者不能混為一談。",
            "Angle of attack（AOA）是弦線與相對來流之間的角度；姿態是機體相對地平的角度。相同俯仰姿態在不同航跡下可能有不同 AOA。對稱翼型的中弧線可與弦線重合，但在適當迎角仍可產生升力。"
          ],
          "figure": {
            "label": "Figure 4-5 · Typical airfoil section",
            "page": "4-7",
            "url": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=7"
          }
        },
        {
          "title": "Figure 4-6 · 沒有一種翼型在所有條件下最好",
          "paragraphs": [
            "圖中從早期翼型、常見次音速翼型到較薄的超音速剖面，是為了比較設計需求。機翼要同時考慮升阻特性、失速、內部容積與結構；只追求最大彎度或最薄剖面，都可能犧牲其他性能。",
            "Laminar-flow airfoil 的名稱不保證整個翼面永遠層流；實際流態仍受粗糙度、雷諾數和壓力梯度等影響。襟翼等增升裝置則讓同一機翼在低速時改變幾何，以滿足不同飛行階段的需求。"
          ],
          "figure": {
            "label": "Figure 4-6 · Airfoil designs",
            "page": "4-7",
            "url": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=7"
          }
        }
      ]
    },
    {
      "id": "low-pressure",
      "english": "Low Pressure Above",
      "title": "上表面的低壓區",
      "parent": "airfoil",
      "locator": "PHAK C 版 · 4-7",
      "printedPage": "4-7",
      "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=7",
      "paragraphs": [
        "在許多產生正升力的流動狀態下，上表面外側氣流加速，靜壓相較自由流降低。低壓區沿翼弦並不均勻，位置與強度隨翼型、迎角及流動條件而變，不能用上表面的一個速度值代表全翼。",
        "上下分開的氣流沒有必須在後緣同時會合的規則；也不需要先指定一條較長路徑才能形成升力。自編練習：若某解釋無法說明對稱翼型在正迎角產生升力，就應重新檢查它對流場所做的假設。"
      ],
      "references": [
        {
          "title": "NASA：Bernoulli and Newton — 壓力與動量的共同解釋",
          "url": "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/bernoulli-and-newton/",
          "checked": "2026-09-10"
        },
        {
          "title": "NASA · Incorrect Lift Theory（Equal Transit）",
          "url": "https://www.grc.nasa.gov/WWW/k-12/VirtualAero/BottleRocket/airplane/wrong1.html",
          "checked": "2026-09-12"
        }
      ],
      "currentNote": "閱讀原文時，不採用「上下氣流必須同時到達後緣」的解釋。NASA 將 equal-transit-time theory 列為錯誤升力理論；伯努力與牛頓定律仍同時成立。",
      "lessonBlocks": [
        {
          "title": "上方流速較快，不是因為兩股空氣約好重逢",
          "paragraphs": [
            "常見產生正升力的翼型上表面有局部加速與低壓區，但不能用「上方路較長，所以必須與下方同時到尾緣」推導。沒有物理條件要求在前緣分開的兩個流體微團同時到達尾緣。",
            "NASA 以等時通過理論為錯誤例子：它無法正確預測速度與升力。解釋升力時，應保留壓力—速度關係，去掉必須重逢的前提，也不能把上表面說成固定提供某個百分比升力。"
          ],
          "check": {
            "question": "對稱翼型上下路徑相同，是否必然沒有升力？",
            "answer": "不是。迎角能改變流場與壓力分布；上下路徑長度不是決定能否產生升力的充分條件。"
          }
        }
      ]
    },
    {
      "id": "high-pressure",
      "english": "High Pressure Below",
      "title": "下表面的壓力貢獻",
      "parent": "airfoil",
      "locator": "PHAK C 版 · 4-8",
      "printedPage": "4-8",
      "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=8",
      "paragraphs": [
        "典型正迎角流動中，下表面部分區域可能出現高於自由流的靜壓，提供升力貢獻；前緣附近的停滯區流速低、靜壓較高。但下表面不是在每種翼型及迎角下都整片維持正壓，必須看實際壓力分布。",
        "上下表面都參與氣流轉向與表面受力，不能把下表面專門歸給牛頓、上表面專門歸給伯努利。原書也提醒兩側升力占比不是固定值；背誦固定的上方百分比與下方百分比，會掩蓋飛行條件改變的影響。"
      ],
      "references": [
        {
          "title": "NASA：Bernoulli and Newton — 壓力與動量的共同解釋",
          "url": "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/bernoulli-and-newton/",
          "checked": "2026-09-10"
        }
      ],
      "lessonBlocks": [
        {
          "title": "下方也有壓力貢獻，但不是所有位置都高壓",
          "paragraphs": [
            "典型正升力狀態下，下表面某些區域可高於自由流靜壓，與上表面壓力一起形成合力。實際分布依迎角、翼型及流況而變，不是整個下表面在任何狀態都保持同一高壓。",
            "Stagnation point 是局部流速降到零的點，位置會隨流場改變。低速理想情況下，此處靜壓較高，但它不代表整片翼面空氣停住。下表面流動也沒有必須在後緣與原先配對的上表面空氣同時會合的義務。"
          ]
        }
      ]
    },
    {
      "id": "distribution",
      "english": "Pressure Distribution",
      "title": "壓力分布與壓力中心",
      "parent": "airfoil",
      "locator": "PHAK C 版 · 4-8",
      "printedPage": "4-8",
      "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=8",
      "paragraphs": [
        "壓力分布圖中的正負通常是相對自由流壓力而言，負值不代表絕對壓力小於零。各處壓力需乘上對應面積並考慮方向，才能加總成氣動力；壓力中心 CP 描述合力作用線的位置，不是簡單取幾個壓力數值的算術平均。",
        "原圖示範特定翼型在不同迎角下的 CP 移動，不能把其移動方向視為所有翼型及失速狀態的定律。CP 是氣動概念，重心 CG 由質量分布決定；即使位置接近，也不能互換，兩者相對關係會影響俯仰力矩。"
      ],
      "references": [
        {
          "title": "NASA：Bernoulli and Newton — 壓力與動量的共同解釋",
          "url": "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/bernoulli-and-newton/",
          "checked": "2026-09-10"
        }
      ],
      "lessonBlocks": [
        {
          "title": "Figure 4-7 · 箭頭是分布，CP 是合力表示",
          "paragraphs": [
            "圖用不同迎角下的箭頭示意各處壓力相對環境的差異。不能只挑最長箭頭當成總升力；需考慮整個表面的面積、方向與作用位置，才能得到合力及力矩。負壓區指相對壓力較低，不是絕對真空。",
            "Center of pressure（CP）是用合力作用位置來表達壓力分布力矩的概念，不是壓力數值的簡單平均，也不等於質量分布形成的 CG。兩者相對位置會影響俯仰力矩，但還要連同尾翼與其他作用一起看。",
            "原圖所示 CP 隨迎角移動，是特定示意，不是所有翼型都有完全相同方向和距離。也要區分 aerodynamic center（氣動中心）：它關心的是力矩對迎角變化較不敏感的位置。圖上的 1.8°、4.4° 等不是任一飛機的核准 AOA 限制。"
          ],
          "figure": {
            "label": "Figure 4-7 · Pressure distribution and center of pressure",
            "page": "4-8",
            "url": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=8"
          }
        }
      ]
    },
    {
      "id": "behavior",
      "english": "Airfoil Behavior",
      "title": "翼型行為：形狀與迎角共同作用",
      "parent": "airfoil",
      "locator": "PHAK C 版 · 4-8",
      "printedPage": "4-8",
      "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=8",
      "paragraphs": [
        "對稱翼型的上下表面形狀相同，仍可因相對氣流的入射角而形成不對稱流場和升力。這說明翼型外形與迎角需要一起考慮；同一翼型在不同迎角下，不會具有完全相同的壓力與流動分布。",
        "增加迎角在一定範圍內通常能增加升力係數，但不能無限制延伸，流動分離與失速會改變這個關係。自編練習：說明「翼弦如何對著氣流」與「飛機機頭朝哪裡」各自的基準，再到第五章連結臨界迎角與失速。"
      ],
      "lessonBlocks": [
        {
          "title": "平板與對稱翼型提醒我們：迎角與流動轉向不可漏掉",
          "paragraphs": [
            "平板或對稱翼型在適當迎角可以產生升力，說明上表面一定要比較長、下表面一定要平，都不是升力的必要條件。機翼使周圍流動的方向與速度改變，壓力分布則反映這個流場。",
            "增加 AOA 在一定範圍內常增加升力係數，但不是無限增加。流動分離變強、超過臨界迎角後可能失速，最大升力係數及失速特性依翼型、構型與流況而定。不能從示意圖最高一幅仍有箭頭，就推論繼續拉機頭永遠有更多升力。"
          ]
        }
      ]
    },
    {
      "id": "third-dimension",
      "english": "A Third Dimension",
      "title": "從二維翼型到三維機翼",
      "parent": null,
      "locator": "PHAK C 版 · 4-9",
      "printedPage": "4-9",
      "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=9",
      "paragraphs": [
        "真實機翼具有有限翼展，翼尖附近有上下表面壓力差造成的繞流，形成尾隨渦流及下洗。這些三維效應會改變機翼遇到的局部氣流方向與有效迎角，並與誘導阻力相連，因此不能把二維剖面的結果原封不動套到整片機翼。",
        "翼尖小翼和其他翼尖設計可改善流場、降低適當條件下的誘導阻力，但不會讓尾流或翼尖渦流完全消失。原書以堤防比喻阻隔繞流，學習時應理解為減弱或重新安排三維效應，而非安裝小翼後就沒有尾流。"
      ],
      "references": [
        {
          "title": "NASA：Winglets 的作用與限制",
          "url": "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/winglets/",
          "checked": "2026-09-10"
        },
        {
          "title": "NASA · Winglets 與誘導阻力",
          "url": "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/winglets/",
          "checked": "2026-09-12"
        }
      ],
      "lessonBlocks": [
        {
          "title": "Figure 4-8 · 真實機翼有翼尖，流動不是只有前後",
          "paragraphs": [
            "二維翼型剖面忽略翼尖與展向變化；有限翼展機翼的上下壓力差會形成展向流動與尾流渦系，翼尖附近常可看到其捲起的結果。尾流中的下洗改變局部相對來流，使有效迎角及氣動力方向改變，並產生誘導阻力。",
            "不能把這理解為只要堵住一個小洞，就能消除整個尾流。誘導阻力是有限翼展產生升力相關的三維效應，大小與升力、翼展及載荷分布有關；尾流風險也不能只看是否有可見凝結線。",
            "Winglet 透過改變翼尖附近流動及載荷分布，可能改善誘導阻力，但不會完全阻止渦流形成。它必須與整體機翼設計整合，也有重量與其他阻力代價；裝了翼尖小翼的飛機仍會產生尾流，相關避讓觀念在第 5 章展開。"
          ],
          "figure": {
            "label": "Figure 4-8 · Tip vortex",
            "page": "4-9",
            "url": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=9"
          },
          "check": {
            "question": "有 winglet，就不必考慮尾流嗎？",
            "answer": "仍須考慮。減少某些工況下的誘導阻力，不等於消除升力相關尾流。"
          }
        }
      ]
    },
    {
      "id": "summary",
      "english": "Chapter Summary",
      "title": "全章統整與自我解釋",
      "parent": null,
      "locator": "PHAK C 版 · 4-9",
      "printedPage": "4-9",
      "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=9",
      "paragraphs": [
        "本章串起兩條主線：壓力、溫度與水氣決定空氣密度，而翼型、迎角及周圍流動共同決定氣動力。壓力高度與密度高度協助描述環境，牛頓與伯努利觀點協助理解流動和受力，最後再加入有限翼展的三維效應。",
        "自編練習：同一機場午後升溫時，先說明哪些高度概念改變；再用對稱翼型說明為什麼不需要等時會合假設；最後解釋翼尖小翼為何可以減少某些阻力卻不會消除尾流。每題都回到本章小節和來源核對，而非只背答案。"
      ],
      "lessonBlocks": [
        {
          "title": "用三個問題檢查是否理解本章",
          "paragraphs": [
            "第一，環境比較時有沒有固定其他條件？說高溫或潮濕使密度下降，需先交代壓力等比較條件。第二，高度名稱是否正確？PA 表示氣壓、DA 表示密度，兩者都不是直接的離地高度。",
            "第三，是否用同一套物理解釋不同翼型？壓力分布、流動轉向與動量交換應相容；不能為對稱翼型另發明一個不遵守伯努力或牛頓定律的例外。能說明這三點，再到第 5 章學四力、失速、穩定性及誘導阻力會更容易。"
          ]
        }
      ]
    }
  ],
  "confusions": [
    {
      "title": "迎角與俯仰姿態",
      "clarification": "迎角以相對風為基準，姿態以地平線為基準。",
      "example": "下降中也可能有較大的迎角。"
    },
    {
      "title": "密度高度與地面高度",
      "clarification": "密度高度描述空氣密度，不是離地距離。",
      "example": "炎熱天密度高度升高，機場本身並沒有升高。"
    },
    {
      "title": "氣壓、密度與高度",
      "clarification": "壓力與密度成正比需固定溫度及組成；壓力高度和密度高度不必相同。",
      "example": "同一氣壓下升溫，壓力高度不變但密度高度升高。"
    },
    {
      "title": "濕空氣是否比較重",
      "clarification": "同溫同總壓下，水氣比例增加使空氣密度降低；相對濕度也不是水氣質量百分比。",
      "example": "不能因霧滴看似有重量，就把氣態水增加的密度效果說反。"
    },
    {
      "title": "兩種觀點不是兩份升力",
      "clarification": "完整壓力分布與氣流動量變化描述同一受力；等時會合不是伯努利原理的要求。",
      "example": "不能先算壓差升力再額外加上相同氣流的下洗反作用力。"
    },
    {
      "title": "壓力中心與重心",
      "clarification": "CP 關係到氣動合力作用位置，CG 關係到質量分布。",
      "example": "迎角變化可改變壓力分布，不表示機內貨物因此移位。"
    },
    {
      "title": "翼尖小翼與尾流",
      "clarification": "翼尖小翼可改善流場及誘導阻力，不能完全消除渦流。",
      "example": "不能因前機裝有翼尖小翼就認為沒有尾流影響。"
    }
  ],
  "scenario": "自編案例：同一架飛機在同一機場，早晨與炎熱午後起飛。機場標高相同，但空氣密度可能不同，因此不能直接沿用早晨的性能判斷。",
  "question": "密度高度主要幫助理解什麼？",
  "options": [
    "機場跑道編號",
    "當時空氣密度對性能的影響",
    "飛機精確離地高度"
  ],
  "answer": 1,
  "explanation": "密度高度以標準大氣的等效高度表示空氣密度，性能仍應查機型資料。",
  "verified": true,
  "reader": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=88",
  "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=88",
  "detailMode": "outline",
  "checked": "2026-09-10",
  "coverageNote": "保留原書 22 節目錄，每節加入深入講解；涵蓋 Figure 4-1～4-8 官方原圖讀圖指引、壓力高度與密度高度自編算例、公式假設及易混淆觀念。原書簡化與補充來源分開說明；算例不是機型性能或操作限制。"
};
