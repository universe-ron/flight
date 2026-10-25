export const chapter={
  "id": "phak25c-10",
  "number": 10,
  "title": "重量與平衡",
  "english": "Weight and Balance",
  "section": "第 10 章；10-1～10-11，全章目錄逐節講解",
  "goal": "能計算重心，並理解重量、分布與飛行中的變化。",
  "primer": "總重量影響所需升力與性能，重心位置則影響力矩平衡、穩定性與操縱能力。兩者需要同時符合適用範圍；總重低於上限，不代表任何座位與行李配置都可用。",
  "terms": [
    "Datum · 基準面",
    "Arm · 力臂",
    "Moment · 力矩",
    "CG · 重心"
  ],
  "prompts": [
    "用本章 2,100 lb 算例重算總力矩與重心，再說明還缺哪些本機資料才能判斷可否起飛。",
    "比較把後艙行李前移與直接卸下兩種方案，列出各自的總重量、力矩和 CG，並解釋分母為何不同。"
  ],
  "keyPoints": [
    "重量與 CG 都要合格，且須核對不同飛行階段和局部承重。",
    "M = w × a；CG = ΣM/Σw；所有項目共用基準與單位。",
    "圖解與表格法仍在處理力矩，指數倍率不能混用。",
    "移動重量的總重量不變；增加、移除重量要用新總重量。",
    "燃油消耗的 CG 方向取決於油箱位置，少加油不會降低 ZFW。"
  ],
  "detailSections": [
    {
      "id": "introduction",
      "english": "Introduction",
      "title": "導論：重量與重心要同時合格",
      "parent": null,
      "locator": "PHAK C 版 · 10-1",
      "printedPage": "10-1",
      "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=1",
      "paragraphs": [
        "重量平衡要回答兩個問題：飛機有多重，以及這些重量集中在哪裡。即使總重量低於上限，裝載分布仍可能使重心超限；即使重心在包線內，也可能因超重而不符合限制。",
        "計算必須使用本機最新空重、力矩與設備資料，並核對滑行、起飛、航程中與落地等相關狀態。本章數字是學習算例，不是任何實機的放行資料，實際限制以適用 AFM／POH 及補充為準。"
      ],
      "lessonBlocks": [
        {
          "title": "先分別回答重量、分布與性能三個問題",
          "paragraphs": [
            "最大重量是總量限制，重心包線是分布限制，當日性能則取決於重量、環境、跑道與操作條件。三者要同時符合，不能以其中一項通過替代其他項；小飛機有空座位也不表示還能加人。",
            "本章將原書算例、讀圖步驟與自編延伸分開標示。原圖中的空重和限制只適用該教學例；實際計畫從本機最新重量平衡資料、設備清單及 AFM／POH 開始，並涵蓋飛行中可能出現的裝載狀態。"
          ],
          "check": {
            "question": "總重合格、重心超過後限，可以改查較長跑道來補救嗎？",
            "answer": "不能。跑道長度不會修正超限重心；須先調整裝載及重新核對。"
          }
        }
      ]
    },
    {
      "id": "weight-control",
      "english": "Weight Control",
      "title": "重量控制與性能需求",
      "parent": null,
      "locator": "PHAK C 版 · 10-1",
      "printedPage": "10-1",
      "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=1",
      "paragraphs": [
        "重量是重力作用的力，實務裝載資料依手冊以磅或公斤等單位表達。增加重量會改變所需升力、起飛與落地能量以及爬升能力，因此座位、行李空間與油箱能裝多少，不等於都能同時裝滿。",
        "穩定平直飛行的受力平衡不能直接套到所有機動，轉彎時還需考慮負荷因數。自編例：先確認結構重量限制，再查當天天氣、跑道和障礙下的性能，取能滿足所有條件的裝載。"
      ],
      "lessonBlocks": [
        {
          "title": "重量是力，平飛的受力圖有適用條件",
          "paragraphs": [
            "物理上 W＝mg；航空裝載資料常使用 lb 或 kg 記錄重量／質量數值。按手冊同一單位系統計算時，不要再把表內每個公斤值另乘一次 g，也不要將 lb·in 力矩和 kg·mm 直接相加。",
            "原文以升力對抗重量說明基本概念；較精確地說，定常水平飛行需由所有力的垂直分量平衡。升力是相對氣流垂直的力，並非任何姿態都等於重量；轉彎、加速、爬降與推力方向均會改變受力關係。"
          ]
        }
      ]
    },
    {
      "id": "weight-effects",
      "english": "Effects of Weight",
      "title": "重量增加的影響",
      "parent": "weight-control",
      "locator": "PHAK C 版 · 10-2",
      "printedPage": "10-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=2",
      "paragraphs": [
        "其他條件相近時，重量增加通常提高所需起飛與失速速度，延長滑跑，並降低爬升率與爬升角。落地時也需處理較多能量，影響距離、煞車與起落架負荷。",
        "固定構型、負荷因數與最大升力係數下，失速速度約隨重量平方根變化。自編例：重量由 2,000 增至 2,420 lb，若原失速速度為 50 kt，估算變為 50 × √(2,420/2,000) = 55 kt；這不是核准性能表的替代。"
      ],
      "lessonBlocks": [
        {
          "title": "由速度、能量與剩餘功率理解超重代價",
          "paragraphs": [
            "其他條件相同時，較重通常需要較高的起飛、進場及失速速度，滑跑和落地距離增加；爬升率、爬升角及升限減少。巡航、航程與操縱表現也受速度、功率及燃油安排影響，不能把原書趨勢當成所有情境下的固定百分比。",
            "動能與質量及速度平方有關，較重又較快會增加停止所需處理的能量。高密度高度、坡度、軟跑道、順風或障礙會再限制性能；遇到引擎失效或積冰，原本不足的裕度也不會因飛機已離地而消失。"
          ],
          "table": {
            "caption": "重量增加的影響鏈",
            "headers": [
              "階段",
              "常見趨勢",
              "仍須查核"
            ],
            "rows": [
              [
                "起飛",
                "速度與滑跑增加",
                "跑道、風、密度高度及障礙"
              ],
              [
                "爬升",
                "剩餘功率裕度減少",
                "爬升率、梯度及單發條件"
              ],
              [
                "巡航",
                "所需升力與阻力改變",
                "適用功率、速度及航程"
              ],
              [
                "落地",
                "能量、距離及結構負荷增加",
                "落地重量、煞車及場地"
              ]
            ]
          },
          "check": {
            "question": "低於結構最大重量就一定能越過障礙嗎？",
            "answer": "不一定。還要用當天條件和適用性能資料確認爬升及距離。"
          }
        }
      ]
    },
    {
      "id": "weight-changes",
      "english": "Weight Changes",
      "title": "燃油、設備與裝載變動",
      "parent": "weight-control",
      "locator": "PHAK C 版 · 10-2",
      "printedPage": "10-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=2",
      "paragraphs": [
        "乘客、行李、燃油與固定設備變更都會影響重量，還可能因位置不同改變重心。燃油消耗要同時減去重量與相應力矩；改裝後則需使用已更新的空重和設備紀錄。",
        "原書算例將 AVGAS 取為 6 lb/US gal，所以 30 US gal 約為 180 lb；這不是所有燃料與溫度的固定密度。減少燃油也會影響航程與所需備份，不能只為讓重量過關而忽略燃油計畫。"
      ],
      "lessonBlocks": [
        {
          "title": "少加燃油要同時重算航程與重心",
          "paragraphs": [
            "依本章 AVGAS 近似值，30 US gal × 6 lb/US gal＝180 lb；是實際重量，而不是「還有空間」就能忽略的負荷。若為載人減少燃油，必須重新核對航程、備份與可能轉降的需要，不能只讓重量表過關。",
            "飛行中常見的重量變化是燃油消耗，但重心方向取決於油箱位置和使用順序；較輕不保證更接近重心包線中央。固定設備增減也可能改變空重與空重力矩，須用更新後資料，避免把新設備漏算或舊設備重複算入。"
          ]
        }
      ]
    },
    {
      "id": "balance",
      "english": "Balance, Stability, and Center of Gravity",
      "title": "平衡、穩定性與重心",
      "parent": null,
      "locator": "PHAK C 版 · 10-2",
      "printedPage": "10-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=2",
      "paragraphs": [
        "重心是整體質量分布的平衡點，具有縱向、橫向與垂直位置。本章主要計算縱向重心，但側向燃油或貨物不平衡仍可能影響操縱與阻力，尤其不能忽略機型明定的橫向限制。",
        "重心會隨裝載、燃油消耗或物品移動改變，並不是機身上永久固定的標記。配平可以減少持續操縱力，卻不會改變超限裝載本身；自編例：用配平把桿力消除，不能證明重心已回包線。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 10-1 · 縱向與橫向失衡是不同問題",
          "paragraphs": [
            "圖上半部以左右油量不同說明翼重，下半部以過多後艙行李說明尾重。縱向計算通過並不能證明側向裝載合格；燃油不平衡還需遵守本機差量限制與使用程序。",
            "橫向平衡的條件是左右力矩合計平衡，不要求每件左側物品都在右側有一件同重量的鏡像物品。用副翼、方向舵或配平維持姿態可能增加阻力和工作負擔，卻不會把重量真的搬回合法位置。"
          ],
          "figure": {
            "label": "Figure 10-1 · Lateral and longitudinal unbalance",
            "page": "10-2",
            "url": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=2"
          },
          "check": {
            "question": "左右各 100 lb，一側距中心線 20 in、另一側 40 in，是否已平衡？",
            "answer": "沒有。兩側力矩為 2,000 與 4,000 lb·in，重量相同但距離不同。"
          }
        }
      ]
    },
    {
      "id": "adverse",
      "english": "Effects of Adverse Balance",
      "title": "不良平衡的影響",
      "parent": "balance",
      "locator": "PHAK C 版 · 10-3",
      "printedPage": "10-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=3",
      "paragraphs": [
        "重心過前或過後會改變力矩平衡、操縱裕度與穩定特性，影響可能在低速起飛、拉平或失速恢復時才明顯。不能以巡航時還能保持平飛，推論所有飛行階段都可控制。",
        "自編例：後行李艙加入少量但力臂很長的貨物，可能比前座同重量更顯著地改變重心。評估應同時看重量與位置，也需固定貨物，避免飛行中滑動讓原計算失效。"
      ],
      "lessonBlocks": [
        {
          "title": "把貨物固定納入計算的有效條件",
          "paragraphs": [
            "起飛前算出的重心，是以項目確實位於所列位置為前提。行李滑動、乘員換位或裝載位置判斷錯誤，都會改變力矩；固定方式與允許裝載位置因此是重量平衡的一部分。",
            "自編例：2,000 lb 飛機內一件 50 lb 貨物向後滑 60 in，總重沒變，卻增加 3,000 lb·in 力矩，使 CG 後移 1.5 in。配平可改變控制力，不能讓已移動的貨物重新固定。"
          ]
        }
      ]
    },
    {
      "id": "stability",
      "english": "Stability",
      "title": "重心與縱向穩定性",
      "parent": "adverse",
      "locator": "PHAK C 版 · 10-3",
      "printedPage": "10-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=3",
      "paragraphs": [
        "對典型傳統尾翼飛機，重心後移通常減少縱向靜穩定裕度，操縱力可能變輕，失速或旋轉恢復也可能受影響。較輕的桿力不是更安全的證據，反而可能增加過度操縱風險。",
        "重心前移常提高所需尾翼配平作用，並可能增加阻力和操縱需求。這些是理解趨勢的概念，實際機型構型與限制仍需個別判讀，不能把「越靠前越穩」當成無限制往前裝載的理由。"
      ],
      "lessonBlocks": [
        {
          "title": "穩定性和操縱力不是同一件事",
          "paragraphs": [
            "在典型傳統尾翼構型，重心後移通常縮小相對中性點的靜穩定裕度。輕微擾動後的恢復傾向減弱，桿力也可能變輕，增加過度操縱與失速恢復困難的風險；不可把輕巧手感當成裝載理想。",
            "重心前移常需更大的尾翼配平作用，翼面可能需額外承擔尾翼下壓所增加的升力需求。這可影響阻力與失速速度，但實際關係依構型而定；原書「CG 在升力中心之前」是典型示意，穩定性不能只由那一個位置比較判定。"
          ]
        }
      ]
    },
    {
      "id": "stability-cg",
      "english": "Stability and Center of Gravity",
      "title": "重心界限與核准資料",
      "parent": "adverse",
      "locator": "PHAK C 版 · 10-3",
      "printedPage": "10-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=3",
      "paragraphs": [
        "正文另以此標題說明前後重心界限：它們是經核准的操作範圍，應由適用手冊、規格與相關資料確認。界限可以隨總重量、構型或操作種類改變，不一定是一條固定寬度的區間。",
        "自編例：同一重心位置在較輕重量時合格，在較重重量時可能落到包線外，因此必須用當時重量查界限。若不合格，應先調整裝載或計畫，再重新驗證整個航程的相關狀態。"
      ],
      "supplementalHeading": true,
      "lessonBlocks": [
        {
          "title": "包線的前後界限可能隨重量而變",
          "paragraphs": [
            "前後 CG 限值由核准資料界定，CG range 是兩界限之間的範圍。查包線時需同時輸入重量與重心，且確認 normal、utility 或其他允許操作條件；不能從某一重量抄出兩個數字就套遍全航程。",
            "若同一重心在較低重量屬於包線內，在較高重量可能超過前限。某些構型變化也有不同要求，應按手冊查起落架、特殊裝載與補充限制；TCDS 能協助核對認證資料，但不能取代本機完整操作資料。"
          ]
        }
      ]
    },
    {
      "id": "control",
      "english": "Control",
      "title": "前後重心與操縱裕度",
      "parent": "adverse",
      "locator": "PHAK C 版 · 10-3",
      "printedPage": "10-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=3",
      "paragraphs": [
        "重心過前可能需要更多抬頭操縱，低速時升降舵不足以完成起飛旋轉或落地拉平；重心過後則可能減少恢復所需的穩定和操縱裕度。前後界限因此不只是舒適或效率建議。",
        "自編例：把後艙貨物移到前艙可修正後重，但仍需檢查前限與前艙承重，不能無限前移。燃油箱位置、起落架狀態或特殊設備也可能影響重心，應按本機程序納入計算。"
      ],
      "lessonBlocks": [
        {
          "title": "前限保留低速操縱能力，後限保留穩定與恢復裕度",
          "paragraphs": [
            "前重可能使升降舵在低速時無法提供足夠抬頭力矩，影響起飛旋轉及落地拉平；鼻輪負荷或尾輪機前翻傾向也可能受影響。前限不是製造商任意選擇的位置，更不是只由落地一項條件決定。",
            "後重則可能帶來過輕桿力、較差失速／旋轉恢復及操縱困難。原文說配平減少操縱行程，應理解為可用操縱裕度可能受影響，不能推成所有配平機構都機械式縮短操縱面行程。"
          ],
          "table": {
            "caption": "典型傳統尾翼構型的比較",
            "headers": [
              "狀態",
              "主要關切",
              "不成立的推論"
            ],
            "rows": [
              [
                "CG 太前",
                "抬頭能力、配平與前起落架負荷",
                "越前越安全"
              ],
              [
                "CG 太後",
                "穩定性、恢復能力與過度操縱",
                "桿力輕就是性能更好"
              ],
              [
                "配平後桿力消失",
                "只代表當下控制力改變",
                "重量與 CG 限制已自動滿足"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "management",
      "english": "Management of Weight and Balance Control",
      "title": "資料更新與重量平衡管理",
      "parent": "balance",
      "locator": "PHAK C 版 · 10-4",
      "printedPage": "10-4",
      "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=4",
      "paragraphs": [
        "可靠管理先建立本機最新空重、力矩、設備清單及適用包線，再依實際乘員、行李與燃油確認裝載。維修或改裝後資料沒有更新，後續算式即使正確也會產生錯誤結果。",
        "FAA §91.9 要求遵守適用操作限制，不能把原書對是否需逐次書面計算的討論讀成可不確認重量平衡。不同營運制度另有核准方法與紀錄要求；重秤週期或可忽略變更門檻不可概括套用。"
      ],
      "references": [
        {
          "title": "14 CFR §91.9：遵守飛行手冊操作限制",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-A/section-91.9",
          "checked": "2026-09-18"
        },
        {
          "title": "eCFR §23.2100 · 重量與重心認證要求",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-23#p-23.2100",
          "checked": "2026-09-18"
        },
        {
          "title": "eCFR §125.91 · 適用 Part 125 飛機重秤",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-G/part-125/subpart-D/section-125.91",
          "checked": "2026-09-18"
        },
        {
          "title": "eCFR Part 125 · 適用範圍與例外",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-G/part-125#p-125.1",
          "checked": "2026-09-18"
        },
        {
          "title": "eCFR §135.185 · 多發航空器重秤與例外",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-G/part-135/subpart-C/section-135.185",
          "checked": "2026-09-18"
        },
        {
          "title": "FAA AC 43.13-1B · Chapter 10 可忽略變更與維修資料",
          "url": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_43.13-1B_w-chg1.pdf",
          "checked": "2026-09-18"
        },
        {
          "title": "FAA AC 120-27F · 重量平衡控制計畫指引",
          "url": "https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1035868",
          "checked": "2026-09-18"
        }
      ],
      "currentNote": "查閱 2026-09-18：現行 Part 23 重量與重心條文為 §23.2100；操作仍遵守 §91.9 與本機限制。§125.91／§135.185 的重秤制度有適用範圍及例外。AC 43.13-1B 的旋翼機重心百分比以最大允許 CG 範圍為基準，不是 MAC；指引不構成任意改裝或忽略累積變更的授權。",
      "lessonBlocks": [
        {
          "title": "從本機紀錄到每次裝載，保持資料一致",
          "paragraphs": [
            "核對航空器身分、空重、空重力矩、設備清單、有效修訂及補充。安裝、拆除或修理後，應確認適用紀錄已反映變動，再以實際乘員、行李、燃油及位置建立本次裝載；算式正確不能補救錯誤輸入。",
            "原書引用舊版 §23.23；現行 Part 23 的重量與重心認證要求列在 §23.2100，舊機仍需依其適用認證基礎理解。操作層面的 §91.9 要求遵守核准限制，不應把「未普遍規定每次書面計算」讀成不需確認本次重量平衡。"
          ]
        },
        {
          "title": "可忽略變更門檻，先讀適用範圍和百分比基準",
          "paragraphs": [
            "AC 43.13-1B Chapter 10 的輕微標準零件例子及可忽略重量門檻屬維修指引，不能當成可任意增加未核准設備的授權。書中列出 1、2、5 lb 等分級數字，仍需核對空重級距、全部變更及本機資料；邊界或累積影響不明時不自行假定豁免。",
            "原書對旋翼機百分比省略了基準：AC 寫固定翼為小於 0.05% MAC，旋翼機為最大允許 CG 範圍的 0.2%，不是 0.2% MAC。自編例：MAC 60 in 的 0.05% 是 0.03 in；CG 範圍 10 in 的 0.2% 是 0.02 in，兩者定義不同。"
          ],
          "check": {
            "question": "一個零件重量很小，是否即可不查它的位置和本機維修要求？",
            "answer": "不可以。重量門檻、重心影響、累積變更及適用技術資料都需核對。"
          }
        },
        {
          "title": "三十六曆月重秤要求與營運制度連在一起",
          "paragraphs": [
            "§125.91 對其適用飛機、§135.185 對其適用多發航空器，規定以先前三十六曆月內實際秤重值建立現行空重與重心，並各有例外。Part 125 的適用性還涉及操作與例外，不能只看到二十座或 6,000 lb 酬載就忽略整部規則範圍。",
            "兩條均列近三十六曆月內首次適航證書的例外；§135.185 另列依操作規範核准的重量平衡系統。AC 120-27F 提供 Part 91K、121、125、135 的計畫指引；這些不是所有普通 Part 91 輕型機每三年重秤的通用規定。"
          ]
        }
      ]
    },
    {
      "id": "terms",
      "english": "Terms and Definitions",
      "title": "術語、基準與單位",
      "parent": "balance",
      "locator": "PHAK C 版 · 10-4",
      "printedPage": "10-4",
      "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=4",
      "paragraphs": [
        "Datum 是由製造商指定的參考基準，arm 是從該基準量到項目重心的力臂，station 表示位置，moment 是重量乘力臂。所有項目必須使用同一基準、方向和單位，才可相加。",
        "空重定義隨年代與手冊而異，GAMA 標準空重包含不可用燃油與全量引擎油，基本空重再包含已安裝選配設備。不能重複加入已含的油量，亦不能把基本空重、有效載重與酬載當成同一概念。"
      ],
      "points": [
        "CG limits／range：前後界限及其範圍；ΔCG 表示重心變化量，不是新重心位置。",
        "Moment index：力矩除以指定常數，合計前要確認所有項目採同一縮放比例。",
        "Payload：乘員、貨物與行李；Useful load 常由相應最大允許重量減基本空重求得，再依手冊定義分配。",
        "Ramp、takeoff、landing weight：分別對應停機坪／滑行前、起飛及落地狀態，最大值未必相同。",
        "Zero fuel weight：不含可用燃油的重量；不可用燃油通常已在適用空重內。",
        "MAC 是平均氣動弦，不宜只當幾何弦長的簡單平均。%MAC = (CG station − LEMAC station) ÷ MAC × 100%，必須共用單位與基準。",
        "Floor load limit：局部地板承載限制；即使總行李重量合格，接觸面積太小仍可能超限。"
      ],
      "lessonBlocks": [
        {
          "title": "位置、變化量與力矩分別帶上單位",
          "paragraphs": [
            "Datum 是共同參考基準，station 是指定位置，arm 是至該項重心的距離；本章向後為正、向前為負。CG 是三維點，本章主要報告縱向座標；Δ 是變化量符號，原文顯示的 rCG 應讀作 ΔCG。",
            "M＝w×a；moment index 是 M 除以指定常數。指數 88.62 若倍率為 1,000，代表 88,620 lb·in，而非 88.62 in。先確認表頭、倍率、方向及英公制軸，才能相加。"
          ],
          "table": {
            "caption": "符號與物理量",
            "headers": [
              "量",
              "意義",
              "示例"
            ],
            "rows": [
              [
                "w／W",
                "項目／總重量",
                "100 lb／2,000 lb"
              ],
              [
                "a／station",
                "相對 datum 的位置",
                "+70 in 或 −31 in"
              ],
              [
                "M",
                "重量乘力臂",
                "7,000 lb·in"
              ],
              [
                "M／1,000",
                "縮放後力矩",
                "7.0"
              ],
              [
                "xCG",
                "總力矩除以總重",
                "40 in"
              ],
              [
                "ΔCG",
                "新 CG 減舊 CG",
                "−2 in 為前移"
              ]
            ]
          }
        },
        {
          "title": "三種空重用語與可用載重不可混算",
          "paragraphs": [
            "GAMA standard empty weight 包含固定裝備、固定配重、液壓液、不可用燃油及全量引擎油；basic empty weight 再加已安裝選配及特殊設備。較舊 licensed empty weight 的油量基準可不同，例如僅含不可排出的油，需依本機文件確認。",
            "Useful load 通常由相應最大允許重量減基本空重求得，供乘員、行李、可用燃油等分配；payload 指乘員、貨物與行李。已在空重內的全量滑油或不可用燃油不能再加一次；舊定義提到可排出油時也不能不看空重基準。"
          ]
        },
        {
          "title": "各階段重量與零燃油重量各自有上限",
          "paragraphs": [
            "Ramp weight 是起動／滑行前裝載重量，takeoff weight 扣掉起飛前耗用，landing weight 再按航程消耗求得。最大停機坪重量可能高於最大起飛重量，差值應按手冊處理，不是可以超過起飛限制的理由。",
            "Zero fuel weight 排除可用燃油，但仍包含空重內的不可用燃油等。MZFW 若有公布需另核對，不能由 MTOW 自行推算；減少可用燃油不會降低 ZFW。總重合格也不代表行李艙、座位或地板局部載荷合格。"
          ]
        },
        {
          "title": "液體換算：標準值是近似數，US gal 不是英制 gal",
          "paragraphs": [
            "原書提供學習用標準換算值，實際用本機資料與適用重量平衡方法。溫度、燃料種類及實際密度可能不同；已知可用實際值時不可任意用近似值取代。平均乘員重量也不是可隨意套到任何輕型機的數字。",
            "自編比較：40 US gal AVGAS 以 6 lb/US gal 得 240 lb；相同體積 Jet A 以 6.8 得 272 lb。兩者差 32 lb，但燃料可否使用由機型核准決定，不能由換算表推論可互換。"
          ],
          "table": {
            "caption": "原書液體近似換算",
            "headers": [
              "液體",
              "lb／US gal"
            ],
            "rows": [
              [
                "AVGAS",
                "6.0"
              ],
              [
                "Jet A／Jet A-1",
                "6.8"
              ],
              [
                "Jet B",
                "6.5"
              ],
              [
                "滑油",
                "7.5"
              ],
              [
                "水",
                "8.35"
              ]
            ]
          }
        },
        {
          "title": "%MAC 需要 LEMAC，地板載荷需要受力面積",
          "paragraphs": [
            "MAC 是等效描述機翼氣動特性的平均氣動弦，非任意弦長的簡單算術平均。已知同一基準下的 LEMAC station，%MAC＝(CG station−LEMAC station)／MAC×100%。自編例：CG 90 in、LEMAC 80 in、MAC 50 in，結果為 20% MAC。",
            "地板載荷需依核准承載方式計算；簡化均勻受力例中，100 lb 分布於 2 ft² 為 50 lb/ft²，若只由 0.5 ft² 承受便是 200 lb/ft²。箱體外形面積不一定等於真正受力面積，不能自行加木板就假定結構限制已解決。"
          ],
          "check": {
            "question": "CG station 為 90 in，是否等於 90% MAC？",
            "answer": "不是。需先減去 LEMAC station，再除以 MAC 長度並乘 100%。"
          }
        }
      ]
    },
    {
      "id": "principles",
      "english": "Principles of Weight and Balance Computations",
      "title": "力矩與加權平均原理",
      "parent": "balance",
      "locator": "PHAK C 版 · 10-5",
      "printedPage": "10-5",
      "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=5",
      "paragraphs": [
        "每項力矩 M = w × a，合計重量 W = Σw、力矩 M總 = Σ(w × a)，重心位置 xCG = M總/W。這是位置依重量加權的平均，不是把各座位或貨物力臂直接算術平均。",
        "自編例：100 lb 在 20 in，50 lb 在 80 in，總力矩為 2,000 + 4,000 = 6,000 lb·in，重心為 6,000/150 = 40 in。20 與 80 的平均是 50，但較重項目會把真正重心拉近 20。"
      ],
      "points": [
        "先固定正方向，例如基準後方為正、前方為負。",
        "單位示例：lb × in = lb·in；除以 lb 後得到 in。",
        "改變參考基準會改變所有力臂與力矩數字，不會改變實際裝載的物理重心。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 10-2 · datum 可以在重心之外",
          "paragraphs": [
            "圖中的 station 0 是基準，10 lb 位於 station +70，對此 datum 的力矩為 +700 lb·in。Datum 是計算原點，不必是支點、機鼻或空機 CG；CG 包線也必須使用相同原點和單位。",
            "自編換基準例：整機 W＝2,000 lb、原 CG＝40 in，原 M＝80,000 lb·in。若新 datum 比原 datum 向後 10 in，所有 arm 減 10，新 M＝60,000、新 CG＝30 in；物理位置不變，只是座標變了。"
          ],
          "figure": {
            "label": "Figure 10-2 · Weight and balance",
            "page": "10-6",
            "url": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=6"
          }
        },
        {
          "title": "Figure 10-3 · 重量乘距離產生力矩",
          "paragraphs": [
            "原圖把 datum 放在支點，50 lb 距支點 100 in，力矩大小為 5,000 lb·in。相同轉動作用可由不同重量與距離組合產生，不能只比重量而忽略力臂。",
            "計算整機 CG 時，把各項重量和有符號力矩分別相加，再以總力矩除總重。不要把項目 arm 直接平均；也不要把 datum 的選擇誤當成真實平衡點已在該處。"
          ],
          "figure": {
            "label": "Figure 10-3 · Determining moment",
            "page": "10-6",
            "url": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=6"
          }
        },
        {
          "title": "Figure 10-4 · 左右力矩大小相等，代數合計為零",
          "paragraphs": [
            "忽略板重的原圖中，左側 100 lb 在 −25 in、50 lb 在 −50 in，右側 50 lb 在 +100 in。力矩合計 −2,500−2,500＋5,000＝0，所以 200 lb 總重的 CG 在支點 station 0。",
            "圖用正的距離大小說明兩側各 5,000 lb·in；若改用帶符號座標，左側必須負號，不能把三項正力矩相加後再說它平衡。若板本身有重量且重心不在支點，也需另加入。"
          ],
          "figure": {
            "label": "Figure 10-4 · Establishing a balance",
            "page": "10-6",
            "url": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=6"
          },
          "check": {
            "question": "總力矩為零是否表示整體沒有重量？",
            "answer": "不是。表示相對所選 datum 的重心座標為零；本例仍重 200 lb。"
          }
        }
      ]
    },
    {
      "id": "restrictions",
      "english": "Weight and Balance Restrictions",
      "title": "包線、局部限制與性能",
      "parent": "balance",
      "locator": "PHAK C 版 · 10-6",
      "printedPage": "10-6",
      "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=6",
      "paragraphs": [
        "限制核對包含各階段最大重量、隨重量變動的前後重心界限，以及座位、行李艙、地板和側向不平衡等適用限制。手冊示範空重或其他同型機數值不能取代本機紀錄。",
        "最大核准起飛重量也不代表每條跑道、每種溫度都能安全起飛，當日性能可能要求更低重量。自編例：重量和重心都合格，卻無足夠越障爬升能力，仍需調整計畫而非只保留「包線內」的結論。"
      ],
      "lessonBlocks": [
        {
          "title": "重量、CG、局部承重、性能逐項通過",
          "paragraphs": [
            "限制包含各階段總重、重量相關 CG 包線、行李艙及地板承載、橫向不平衡與特殊操作限制。小型飛機即使座位都靠近 CG、不易裝出重心包線，也仍可能超重；另一架則可能未超重先超後限。",
            "高海拔、高溫、濕度、跑道坡度／表面、風與障礙會影響性能可接受重量。核准最大值不是保證所有環境下都可用的計畫值，也不能用將來燒油變輕來合理化起飛時的超限。"
          ]
        }
      ]
    },
    {
      "id": "loaded",
      "english": "Determining Loaded Weight and CG",
      "title": "求裝載重量與重心的流程",
      "parent": null,
      "locator": "PHAK C 版 · 10-7",
      "printedPage": "10-7",
      "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=7",
      "paragraphs": [
        "計算法、圖解法與表格法都在追蹤同一組重量及力矩關係，差別在如何取得或呈現數值。先列完整裝載，再使用本機允許的方法，最後對照相符的重量—重心或重量—力矩包線。",
        "檢查輸入是否為當前設備、正確燃油單位、實際乘員與行李，並分別扣除相關燃油消耗。自編例：起飛合格但落地重心因後方油箱耗油而前移，仍可能需要重新檢查落地前限。"
      ],
      "lessonBlocks": [
        {
          "title": "三種方法共用一套輸入與驗證流程",
          "paragraphs": [
            "先核對空重及力矩，再列乘員、油量、行李與位置，確定油量是否已包含在空重。計算法直接相乘，圖解法沿載重線讀值，表格法查預算力矩；最後都要合計並對照相符包線。",
            "先保留足夠精度，再按手冊方法取位。起飛、各油箱切換後、航程中及落地都可能是關鍵狀態；只檢查起點與終點未必能涵蓋多油箱使用造成的中途極值。"
          ],
          "table": {
            "caption": "計算完成前的核對",
            "headers": [
              "步驟",
              "核對事項"
            ],
            "rows": [
              [
                "資料",
                "本機空重、力矩、設備與版本"
              ],
              [
                "輸入",
                "實際重量、油量基準、位置及單位"
              ],
              [
                "計算",
                "有符號力矩、正確倍率與分母"
              ],
              [
                "限制",
                "每階段重量／CG 與局部限制"
              ],
              [
                "性能及現場",
                "跑道、障礙、貨物固定與實際座位"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "computational",
      "english": "Computational Method",
      "title": "計算法：逐項相加",
      "parent": "loaded",
      "locator": "PHAK C 版 · 10-7",
      "printedPage": "10-7",
      "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=7",
      "paragraphs": [
        "自編學習例使用基本空重 1,500 lb、力臂 40 in；前座 300 lb 在 37 in；燃油 240 lb 在 48 in；行李 60 lb 在 100 in。先各自求力矩，再加總，不可先把所有力臂平均。",
        "四項力矩分別為 60,000、11,100、11,520、6,000 lb·in，總重量 2,100 lb，總力矩 88,620 lb·in，因此 CG = 42.20 in。只有再比對該重量的真實包線和局部承重，才能判斷裝載是否允許。"
      ],
      "points": [
        "基本空重：1,500 × 40 = 60,000 lb·in。",
        "前座：300 × 37 = 11,100；燃油：240 × 48 = 11,520；行李：60 × 100 = 6,000 lb·in。",
        "合計：W = 2,100 lb；M = 88,620 lb·in；CG = 88,620 ÷ 2,100 = 42.20 in。",
        "此例只驗證算法，未提供任何實機核准重量或重心範圍。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 10-5 · 完整重算原書 3,320 lb 範例",
          "paragraphs": [
            "燃油 75 US gal × 6＝450 lb。依原表逐項相乘，再合計得 W＝3,320 lb、M＝281,430 lb·in；CG＝281,430÷3,320＝84.768… in，取一位小數約 84.8 in。",
            "以這個教學題明定的最大重量 3,400 lb、CG 範圍 78～86 in 判斷，兩項均通過。這只證明題目給定的重量與 CG 條件，不代表其他機型、局部載荷或當日性能也已核對。"
          ],
          "figure": {
            "label": "Figure 10-5 · Example of weight and balance computations",
            "page": "10-7",
            "url": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=7"
          },
          "table": {
            "caption": "Figure 10-5 逐項驗算",
            "headers": [
              "項目",
              "重量 lb",
              "力臂 in",
              "力矩 lb·in"
            ],
            "rows": [
              [
                "空機",
                "2,100",
                "78.3",
                "164,430"
              ],
              [
                "前座",
                "340",
                "85.0",
                "28,900"
              ],
              [
                "後座",
                "350",
                "121.0",
                "42,350"
              ],
              [
                "燃油",
                "450",
                "75.0",
                "33,750"
              ],
              [
                "行李區 1",
                "80",
                "150.0",
                "12,000"
              ],
              [
                "合計",
                "3,320",
                "CG 約 84.8",
                "281,430"
              ]
            ]
          },
          "check": {
            "question": "281,430 除以 3,400 能算出本次 CG 嗎？",
            "answer": "不能。分母用實際總重量 3,320 lb；3,400 是限制，不是這次重量。"
          }
        }
      ]
    },
    {
      "id": "graph",
      "english": "Graph Method",
      "title": "圖解法：載重圖與包線圖",
      "parent": "loaded",
      "locator": "PHAK C 版 · 10-7",
      "printedPage": "10-7",
      "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=7",
      "paragraphs": [
        "載重圖以各位置的線條把重量轉成力矩或力矩指數；先找該項重量、移到正確位置線，再讀另一軸。之後加上本機空重力矩，將總重量與合計力矩放入對應包線圖。",
        "圖上的 moment/1,000 不是力臂，也不能與未縮放的力矩直接相加。沿用前例，88,620 lb·in 對應指數 88.62；在重量—力矩指數圖上應用 (88.62, 2,100)，而不是把 CG 42.20 當成力矩指數。"
      ],
      "points": [
        "先看軸名、單位、縮放與各載重線的標籤，不假設每張圖方向相同。",
        "靠近邊界時，線寬和讀圖誤差可能影響判斷，應依手冊允許方法提高精度。",
        "重量—CG 包線與重量—moment 包線是不同座標，不能拿同一個橫軸數字互換。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 10-6 · 表格先統一 moment／1,000",
          "paragraphs": [
            "這是另一個獨立範例，不能沿用 Figure 10-5 的空機或限制。原表空重 1,467 lb、力矩指數 57.3；燃油 240 lb、前座 340 lb、後座 300 lb、行李 20 lb，依載重圖讀出其指數後合計。",
            "總重為 2,367 lb；指數為 57.3＋11.5＋12.7＋21.8＋1.9＝105.2，代表約 105,200 lb·in。依圖上取位數字反算 CG 約 44.44 in，但原題應使用配套的重量—力矩包線核對。"
          ],
          "figure": {
            "label": "Figure 10-6 · Weight and balance data",
            "page": "10-7",
            "url": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=7"
          },
          "table": {
            "caption": "Figure 10-6 指數合計",
            "headers": [
              "項目",
              "重量 lb",
              "M／1,000"
            ],
            "rows": [
              [
                "基本空重",
                "1,467",
                "57.3"
              ],
              [
                "可用燃油 40 US gal",
                "240",
                "11.5"
              ],
              [
                "前座",
                "340",
                "12.7"
              ],
              [
                "後座",
                "300",
                "21.8"
              ],
              [
                "行李區 1",
                "20",
                "1.9"
              ],
              [
                "合計",
                "2,367",
                "105.2"
              ]
            ]
          }
        },
        {
          "title": "Figure 10-7 · 從重量找對那一條載重線",
          "paragraphs": [
            "使用左側 pounds 軸和下側 inch-pounds／1,000 軸：由前座 340 lb 水平移至 pilot and front passenger 線，再垂直往下，原圖示約 12.7。其他項目各自使用燃油、後座或相應行李線，不可沿同一條線算全部。",
            "上方與右側提供公制軸，必須成套使用，不可把公斤重量對到英制指數。燃油圖還標不同油箱容量；讀圖範圍不是每架機都裝有最大容量油箱的證明。可調座椅與行李的實際位置仍依配套資料處理。"
          ],
          "figure": {
            "label": "Figure 10-7 · Loading graph",
            "page": "10-8",
            "url": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=8"
          }
        },
        {
          "title": "Figure 10-8 · 用總重與指數定位，再分辨操作類別",
          "paragraphs": [
            "在左軸 2,367 lb 畫水平線、下軸 105.2 畫垂直線，交點位於圖示 normal category 包線內。橫軸不是 CG inches，因此不可把約 44.44 填在這個指數軸上。",
            "圖上 utility category 是另一個較小區域，正常類包線內不代表 utility 操作也獲准；本例重量已超過該圖 utility 區域頂端。靠近邊界時應按手冊允許方法確認精度，不能讓粗線或四捨五入掩蓋超限。"
          ],
          "figure": {
            "label": "Figure 10-8 · CG moment envelope",
            "page": "10-8",
            "url": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=8"
          },
          "check": {
            "question": "圖解法橫軸的 105.2 是 105.2 in 的重心嗎？",
            "answer": "不是，它是 moment／1,000。CG 須以 105,200 lb·in 除以 2,367 lb。"
          }
        }
      ]
    },
    {
      "id": "table",
      "english": "Table Method",
      "title": "表格法：查值與內插",
      "parent": "loaded",
      "locator": "PHAK C 版 · 10-9",
      "printedPage": "10-9",
      "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=9",
      "paragraphs": [
        "表格法將特定位置、重量所對應的力矩預先列出，再依規定合計並查允許區間。某些表使用力矩指數，另一些直接提供可接受的總力矩範圍，必須先讀清欄位與倍率。",
        "自編例：固定 40 in 力臂，200 lb 的力矩為 8,000，300 lb 為 12,000 lb·in，允許線性內插時 250 lb 對應 10,000。可移動座椅、非線性燃油力臂或超出表格範圍時，不能擅自套同樣比例。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 10-9 · 查項目表，再查總重量的力矩上下限",
          "paragraphs": [
            "原圖使用 moment／100。44 US gal 燃油查得 264 lb、指數 198；前座 130 和 170 lb 查得 110 和 144，合為 254；後座 190 lb 查得 230；行李 30 lb 查得 42，再加基本空重 2,015 lb、指數 1,554。",
            "合計重量 2,799 lb、指數 2,278。原圖以附近 2,800 lb 列示範，指數限值為 2,254～2,381，2,278 位於其中。真正使用時按製造商查值或內插規則，不能把任意往上取整當作通用保守方法。"
          ],
          "figure": {
            "label": "Figure 10-9 · Loading schedule placard",
            "page": "10-9",
            "url": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=9"
          },
          "table": {
            "caption": "Figure 10-9 表列數字",
            "headers": [
              "項目",
              "重量 lb",
              "M／100"
            ],
            "rows": [
              [
                "基本空重",
                "2,015",
                "1,554"
              ],
              [
                "燃油",
                "264",
                "198"
              ],
              [
                "前座合計",
                "300",
                "254"
              ],
              [
                "後座",
                "190",
                "230"
              ],
              [
                "行李",
                "30",
                "42"
              ],
              [
                "合計",
                "2,799",
                "2,278"
              ]
            ]
          }
        },
        {
          "title": "不要把已縮放的 2,278 再除以 100",
          "paragraphs": [
            "圖末「2,278/100」的寫法容易誤導；由各列和表頭可知 2,278 已是 M／100，換回力矩為 227,800 lb·in，CG 約 81.39 in。若再除以 100，就會錯兩個數量級。",
            "本表前座以個別已取整指數相加：110＋144＝254；直接用合計 300×85／100 則為 255。這是查表取位差異，不能不說明就混用兩套精度。原圖油量欄也註明已在空重內，勿把表列滑油再加一次。"
          ],
          "check": {
            "question": "M／100＝2,278 時，總力矩是多少？",
            "answer": "227,800 lb·in；2,278 是指數本身，不是尚待除以 100 的原始力矩。"
          }
        }
      ]
    },
    {
      "id": "negative-arm",
      "english": "Computations With a Negative Arm",
      "title": "負力臂與代數符號",
      "parent": "loaded",
      "locator": "PHAK C 版 · 10-10",
      "printedPage": "10-10",
      "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=10",
      "paragraphs": [
        "負力臂表示項目在指定基準前方，不表示它沒有重量或重量本身為負。加入正重量而力臂為負，新增力矩就是負值；移除該項時，則扣掉原本的負力矩。",
        "自編例：原機 2,000 lb、CG 40 in，總力矩 80,000 lb·in；加入 20 lb 在 −10 in，得到 W = 2,020、M = 79,800，CG 約 39.505 in。重量增加而力矩減少完全可能，不能把負號改成絕對值。"
      ],
      "points": [
        "新增：(+20 lb) × (−10 in) = −200 lb·in。",
        "移除同一項：ΔW = −20 lb，ΔM = (−20) × (−10) = +200 lb·in，應回復原結果。",
        "先按代數運算，再檢查方向是否合理；加入前方重量應把 CG 拉向前方。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 10-10 · 加入滑油增加重量，卻帶入負力矩",
          "paragraphs": [
            "原表 licensed empty weight 為 1,011.9 lb，表列空重力矩 69,393 lb·in。滑油 11 lb 在 −31 in，力矩 −341；兩組燃油各 108 lb 在 84 in，兩位乘員各 170 lb 在 81 in，行李 70 lb 在 105 in。",
            "總重 1,648.9 lb、總力矩 122,086 lb·in，CG＝122,086÷1,648.9≈74.04 in，原圖取為 74.0。這個較舊空重例另加滑油，不能將其方法直接套到已含全量油的 GAMA 基本空重。"
          ],
          "figure": {
            "label": "Figure 10-10 · Sample weight and balance using a negative arm",
            "page": "10-10",
            "url": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=10"
          },
          "table": {
            "caption": "Figure 10-10 有符號合計",
            "headers": [
              "項目",
              "重量 lb",
              "力矩 lb·in"
            ],
            "rows": [
              [
                "表列空重",
                "1,011.9",
                "69,393"
              ],
              [
                "滑油，arm −31 in",
                "11.0",
                "−341"
              ],
              [
                "主油箱",
                "108.0",
                "9,072"
              ],
              [
                "副油箱",
                "108.0",
                "9,072"
              ],
              [
                "飛行員",
                "170.0",
                "13,770"
              ],
              [
                "乘客",
                "170.0",
                "13,770"
              ],
              [
                "行李",
                "70.0",
                "7,350"
              ],
              [
                "合計",
                "1,648.9",
                "122,086"
              ]
            ]
          }
        },
        {
          "title": "保留表列精度，並區分位置負號與移除負號",
          "paragraphs": [
            "原表空重 arm 顯示 68.6 in，但 1,011.9×68.6＝69,416.34，與表列 69,393 有小差距。後者除以空重約為 68.5769，取一位小數即 68.6；重現此例應採給定空重力矩，不以已取位的 arm 覆蓋它。",
            "若從原表卸下這 11 lb 滑油，重量增量為 −11，力矩增量為 (−11)×(−31)＝+341；這是扣除原本負力矩。方向判斷也一致：移除前方重量會把重心向後推。此處只教代數，不表示飛機可無油運轉。"
          ]
        }
      ]
    },
    {
      "id": "zero-fuel",
      "english": "Computations With Zero Fuel Weight",
      "title": "零燃油重量與階段核對",
      "parent": "loaded",
      "locator": "PHAK C 版 · 10-10",
      "printedPage": "10-10",
      "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=10",
      "paragraphs": [
        "零燃油重量是不含可用燃油的裝載重量，並非把所有液體或空重內的不可用燃油都扣掉。最大零燃油重量若有公布，通常涉及結構載荷分布，不能以未超最大起飛重量代替此項核對。",
        "自編例：ZFW 4,300 lb、MZFW 4,400 lb；加可用燃油 700 lb 得停機坪重量 5,000，耗用滑行燃油 20 得起飛 4,980，航程再耗 400 得落地 4,580 lb。各階段仍須分別核對重量、力矩及重心，不能只做重量減法。"
      ],
      "points": [
        "若 ZFW 已是 4,500 lb 而 MZFW 為 4,400，少加可用燃油無法修正，須減少非燃油載重等。",
        "起飛重量 = 停機坪重量 − 起動／滑行等起飛前消耗；落地重量再扣航程消耗。",
        "燃油力臂可能隨油量或油箱使用次序改變，應用手冊資料逐段計算。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 10-11 · 把每個階段的重量與力矩一起減",
          "paragraphs": [
            "原表非可用燃油裝載合計 4,240 lb、403,205 lb·in，低於 MZFW 4,400 lb。加燃油 822 lb 在 113 in，增加 92,886 lb·in，得到停機坪 5,062 lb、496,091 lb·in。",
            "扣起飛前耗油 24 lb／2,712 lb·in，起飛為 5,038 lb、493,379 lb·in；再扣航程燃油 450 lb／50,850 lb·in，落地為 4,588 lb、442,529 lb·in。分別除以當階段重量，CG 約 95.1、98.0、97.9、96.5 in。"
          ],
          "figure": {
            "label": "Figure 10-11 · Sample weight and balance using an aircraft with a published zero fuel weight",
            "page": "10-10",
            "url": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=10"
          },
          "table": {
            "caption": "Figure 10-11 階段核對",
            "headers": [
              "階段",
              "重量 lb",
              "力矩 lb·in",
              "CG in（約）"
            ],
            "rows": [
              [
                "零燃油",
                "4,240",
                "403,205",
                "95.1"
              ],
              [
                "停機坪",
                "5,062",
                "496,091",
                "98.0"
              ],
              [
                "起飛",
                "5,038",
                "493,379",
                "97.9"
              ],
              [
                "落地",
                "4,588",
                "442,529",
                "96.5"
              ]
            ]
          }
        },
        {
          "title": "最大停機坪、起飛、落地與零燃油限制分開查",
          "paragraphs": [
            "圖列最大停機坪 5,224 lb、最大落地 4,940 lb，例題的 5,062 和 4,588 分別低於它們。但圖未完整提供起飛重量限制及 CG 包線，不能只憑這張表宣布所有限制已通過；還須回本機資料逐項查。",
            "油箱在本例 CG 後方，耗油後 CG 前移；各階段不得只扣重量、不扣力矩。若非燃油裝載超過 4,400 lb，減少可用燃油不能修正 MZFW，需減少相應乘員、行李或貨物等非燃油重量。"
          ],
          "check": {
            "question": "ZFW 4,500 lb、MZFW 4,400 lb，少加 100 lb 燃油是否已解決？",
            "answer": "沒有。ZFW 仍為 4,500 lb，必須處理非可用燃油部分的超重。"
          }
        }
      ]
    },
    {
      "id": "changes",
      "english": "Shifting, Adding, and Removing Weight",
      "title": "三種改變方式的共同原理",
      "parent": "loaded",
      "locator": "PHAK C 版 · 10-10",
      "printedPage": "10-10",
      "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=10",
      "paragraphs": [
        "移動既有重量只改變分布，增加或移除重量則同時改變分子總力矩與分母總重量。最可靠的方法是把每個變動寫成 ΔW 與 ΔM，再用新總力矩除以新總重量。",
        "自編練習：同樣把後艙影響減小，可以前移行李，也可以卸下行李，但兩者新重量不同，不能共用一個不變分母的公式。改完還需重新查新重量的包線與局部限制，而非只看 CG 方向正確。"
      ],
      "lessonBlocks": [
        {
          "title": "先寫 ΔW 和 ΔM，再決定使用哪個公式",
          "paragraphs": [
            "共同算式是 W新＝W舊＋ΔW、M新＝M舊＋ΔM、CG新＝M新／W新。移動既有項目時 ΔW＝0；增加或移除時 ΔW 不為零，分母也要變。",
            "結果出來後先做方向檢查：移動朝哪邊、加入靠哪邊、移除遠離哪邊。接著再查新重量包線、區域承重及固定方式；重心改善不代表重量、地板載荷或性能一定合格。"
          ],
          "table": {
            "caption": "三種改變共用力矩帳",
            "headers": [
              "操作",
              "ΔW",
              "ΔM"
            ],
            "rows": [
              [
                "w 由 a1 移至 a2",
                "0",
                "w(a2−a1)"
              ],
              [
                "在 a 加入 w",
                "+w",
                "+wa"
              ],
              [
                "從 a 移除 w",
                "−w",
                "−wa"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "shifting",
      "english": "Weight Shifting",
      "title": "移動重量：總重量不變",
      "parent": "changes",
      "locator": "PHAK C 版 · 10-10",
      "printedPage": "10-10",
      "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=10",
      "paragraphs": [
        "重量 w 由力臂 a1 移到 a2 時，ΔM = w(a2 − a1)，因此 ΔCG = w(a2 − a1)/W，W 為不變的整機重量。用有符號的距離，向後移得到正變化，向前移得到負變化。",
        "自編例：W = 2,000 lb、原 CG 40 in，把 100 lb 由 100 in 移到 60 in，ΔCG = 100 × (−40)/2,000 = −2 in，新 CG 38 in。原總力矩 80,000 減 4,000 得 76,000，除以 2,000 亦為 38。"
      ],
      "points": [
        "反求搬動重量：w = W × ΔCG ÷ (a2 − a1)，符號需一致。",
        "若同例只需前移 CG 1 in，移動 50 lb 跨越 −40 in 即得 −1 in 的變化。",
        "搬動前仍需確認前艙承重、可固定位置與人員座位限制，不只求出數學答案。"
      ],
      "lessonBlocks": [
        {
          "title": "原書移動例：100 lb 後移 120 in",
          "paragraphs": [
            "整機 8,000 lb、原 CG 77 in，原力矩為 616,000 lb·in。把 100 lb 由 station 30 移到 150，新增力矩＝100×(150−30)＝12,000 lb·in，總力矩成為 628,000。",
            "新 CG＝628,000÷8,000＝78.5 in；也可直接算 ΔCG＝100×120÷8,000＝1.5 in，再加原 CG。分母不變，因為重量仍在同一架飛機上；120 是兩個裝載位置的差，不是對舊重心的距離。"
          ],
          "check": {
            "question": "移動後為何不把分母改成 8,100 lb？",
            "answer": "因為只是搬動機內原有 100 lb，沒有增加重量，總重仍是 8,000 lb。"
          }
        },
        {
          "title": "反求最少搬動重量：65 lb 是此題的邊界解",
          "paragraphs": [
            "原題總重 7,800 lb、CG 81.5 in、後限 80.5 in；行李由 station 150 搬到 30，需 ΔCG＝−1.0 in、移動距離 −120 in。w＝7,800×(−1)÷(−120)＝65 lb。",
            "以力矩驗算：原 635,700 減 65×120＝7,800，得到 627,900 lb·in，除以 7,800 即 80.5 in。這只把題目理想數值移到邊界，實際還要考慮輸入精度、裝載固定、前艙限制及航程 CG 變化。"
          ]
        }
      ]
    },
    {
      "id": "addition-removal",
      "english": "Weight Addition or Removal",
      "title": "增減重量：使用新的分母",
      "parent": "changes",
      "locator": "PHAK C 版 · 10-11",
      "printedPage": "10-11",
      "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=11",
      "paragraphs": [
        "以帶符號的增量 δw 表示加入或移除，x新 = (W × x舊 + δw × a)/(W + δw)，亦可寫 ΔCG = δw(a − x舊)/(W + δw)。a 是增減項目的力臂，距離要相對舊 CG，不能用移動貨物的公式硬套。",
        "自編例：原 2,000 lb、CG 40 in，加入 100 lb 在 100 in，新 CG = 90,000/2,100 ≈ 42.857 in；若改成從原機移除同位置既有 100 lb，新 CG = 70,000/1,900 ≈ 36.842 in。兩例是各自從原狀態開始，不是連續兩步。"
      ],
      "points": [
        "加入項目通常把 CG 拉向該位置；移除項目通常把 CG 推離該位置。",
        "加入後分母用 2,100；移除後用 1,900，不能都除以原 2,000。",
        "燃油消耗也是移除重量：若油箱在舊 CG 後方，消耗會使 CG 前移；在前方則可後移。",
        "所有算例保留精度到最後再依手冊處理進位，貼近界限時不可用四捨五入掩蓋超限。"
      ],
      "lessonBlocks": [
        {
          "title": "原書增加例：140 lb 加在 station 150",
          "paragraphs": [
            "原 W＝6,860 lb、CG＝80 in、M＝548,800 lb·in。加入 140 lb×150 in＝21,000 lb·in，新 W＝7,000、新 M＝569,800，所以 CG＝81.4 in，向後移 1.4 in。",
            "比例法 ΔCG＝140×(150−80)／7,000＝1.4 in；距離為加入位置到舊 CG 的 70 in，分母用加入後重量。若誤除原 6,860，便與完整力矩法不一致。"
          ]
        },
        {
          "title": "原書移除例：100 lb 從 station 150 卸下",
          "paragraphs": [
            "本題另從 W＝6,100 lb、CG＝80 in 開始，並非接續上一題。原 M＝488,000；移除後 W＝6,000、M＝473,000 lb·in，因此 CG≈78.833 in，取一位小數為 78.8 in。",
            "帶符號變化量 ΔCG＝(−100)×(150−80)／6,000≈−1.1667 in。原書將其變化量取成約 1.2 in 再相減；精算應保留更多位到最後，免得貼近界限時因提前取位作出錯誤結論。"
          ],
          "check": {
            "question": "移除後方貨物，是把 CG 拉向還是推離該貨物原位置？",
            "answer": "推離，亦即往前移；本例約由 80 移到 78.833 in。"
          }
        },
        {
          "title": "燃油是移除重量，油箱順序決定重心路徑",
          "paragraphs": [
            "若耗用的油箱在當下 CG 後方，卸掉這部分重量使 CG 前移；在前方則後移。燃油力臂若隨油量變化，須依配套圖表求各油量力矩，不能假定一個固定 arm 適用所有狀態。",
            "自編例：2,000 lb、CG 40 in，消耗 100 lb、arm 50 in 的燃油後，CG＝(80,000−5,000)／1,900≈39.474 in。若原重量與 CG 相同但油箱在 30 in，則新 CG≈40.526 in；不能只記「燒油一定往前」。"
          ]
        }
      ]
    },
    {
      "id": "summary",
      "english": "Chapter Summary",
      "title": "全章統整：從數據到裝載判斷",
      "parent": null,
      "locator": "PHAK C 版 · 10-11",
      "printedPage": "10-11",
      "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=11",
      "paragraphs": [
        "重量平衡計算以正確本機資料為起點，統一基準與單位後求總重量、總力矩與重心，再核對各階段包線、局部限制與性能。計算正確只是必要一步，貨物固定和資料更新同樣不可缺少。",
        "自編複習：不用重新背公式，先判斷前移、加入前方重量、移除後方重量各會讓 CG 往哪裡，再用總力矩驗證。最後說明為何減少燃油不能解決超過 MZFW，以及起飛合格為何不保證落地也合格。"
      ],
      "lessonBlocks": [
        {
          "title": "從方向預判到數值驗算，再回到限制",
          "paragraphs": [
            "先確認本機資料與空重包含項目，統一 datum、單位及指數倍率；逐項列重量和力矩，求各階段 CG，再查總重、包線、局部承重和當日性能。最後核對實際乘坐位置、燃油狀態與貨物固定是否符合計畫。",
            "複習原題四個差別：3,320 lb 要除實際重量；105.2 是千分之一力矩；2,278 是百分之一力矩；移動 65 lb 不改變總重量。能說明每個數字的單位、位置與用途，比只背最後的 CG 更可靠。"
          ],
          "check": {
            "question": "計算器顯示重心在包線內，還有哪些事情不能省略？",
            "answer": "各階段重量與 CG、局部承重、資料與實際配置一致、燃油計畫、貨物固定及當日性能。"
          }
        }
      ]
    }
  ],
  "confusions": [
    {
      "title": "總重量與重心",
      "clarification": "前者是重量總和，後者是分布結果。",
      "example": "同樣 1,200 lb 可以有不同重心。"
    },
    {
      "title": "力臂與力矩",
      "clarification": "力臂是位置，力矩還包括重量。",
      "example": "同位置放兩倍重量，力矩也加倍。"
    },
    {
      "title": "負力臂與負重量",
      "clarification": "負力臂是基準前方的位置；負重量增量用於表示移除。",
      "example": "加入 20 lb 在 −10 in，新增重量為正而力矩為 −200 lb·in。"
    },
    {
      "title": "重心與力矩指數",
      "clarification": "CG 是距離，力矩指數是力矩除以特定倍率。",
      "example": "88,620 lb·in 的千分之一是 88.62，不是 CG 42.20 in。"
    },
    {
      "title": "移動與增減的分母",
      "clarification": "移動現有重量不改變整機重量，增減則必須用新重量。",
      "example": "2,000 lb 原機加入 100 lb，計算新 CG 的分母為 2,100。"
    },
    {
      "title": "零燃油重量與低油量",
      "clarification": "ZFW 不含可用燃油，少加可用燃油不會降低 ZFW。",
      "example": "ZFW 超限時不能只抽掉可用燃油來修正。"
    }
  ],
  "scenario": "自編算例：把兩項重量簡化為 1,000 lb 在 40 in、200 lb 在 70 in，總力矩為 40,000＋14,000＝54,000 lb·in，總重量 1,200 lb，重心為 45 in。",
  "question": "上述總力矩 54,000 lb·in、總重 1,200 lb 的重心為？",
  "options": [
    "45 in",
    "70 in",
    "1,200 in"
  ],
  "answer": 0,
  "explanation": "54,000÷1,200＝45 in；仍須另查航空器包線，算例不能判定適航。",
  "verified": true,
  "reader": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=245",
  "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=245",
  "detailMode": "outline",
  "checked": "2026-09-18",
  "coverageNote": "全章 23 節均已加入深入講解，共 39 個單元，附 Figure 10-1～10-11 官方原圖指引。涵蓋重量與穩定性、術語、管理、計算／圖解／表格法、負力臂、零燃油重量與載重變動；保留原有自編例，另逐步驗算原書數字並說明取位及指數歧義。法規補充查閱於 2026-09-18，原有章節題目、筆記與完成紀錄保留。"
};
