export const chapter={
  "id": "phak25c-3",
  "number": 3,
  "title": "航空器構造",
  "english": "Aircraft Construction",
  "section": "第 3 章；3-1～3-13，附圖至 3-16",
  "goal": "理解結構如何承載，以及主要部件如何配合。",
  "primer": "機身容納人員與設備，機翼提供主要升力，尾翼參與穩定與控制，起落架支撐地面作業，動力裝置提供推進。這些部件透過接合與結構把載荷傳遞，不能只把外形當作彼此無關的零件。",
  "terms": [
    "Fuselage · 機身",
    "Empennage · 尾翼組",
    "Semimonocoque · 半硬殼式"
  ],
  "prompts": [
    "半硬殼式蒙皮與複合材料表面各有哪些不能僅憑外觀判斷的事項？請指出原文位置。",
    "設定爬升姿態後，哪些儀表告訴你控制設定、實際結果，以及相對航道的位置？"
  ],
  "keyPoints": [
    "辨識五個主要部件，從連接處理解載荷傳遞。",
    "區分桁架、硬殼式與半硬殼式，以及纖維與基材的功能。",
    "複材的重量優勢取決於設計；碰撞、熱、油液與雷擊需分別理解。",
    "控制儀表看姿態與功率，性能儀表看實際結果，導航儀表看相對路徑。"
  ],
  "detailSections": [
    {
      "id": "introduction",
      "english": "Introduction",
      "title": "導論：從構造理解飛行",
      "parent": null,
      "locator": "PHAK C 版 · 3-1",
      "printedPage": "3-1",
      "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=1",
      "paragraphs": [
        "Aircraft 是航空器的總稱，airplane 則是其中以動力推進、固定翼產生主要支承力的飛機。本章主要用飛機解釋構造，不能把其機翼、尾翼與操縱方式直接套用到旋翼機、氣球或重心移動控制航空器。",
        "學習構造可以依序問三件事：這個部件做什麼、承受的力如何傳遞、它依賴哪些系統。先建立整架飛機的空間關係，再閱讀後續的空氣動力、飛行操縱與系統章節，名稱就能連到實際功能。"
      ]
    },
    {
      "id": "certification",
      "english": "Aircraft Design, Certification, and Airworthiness",
      "title": "設計、認證與適航",
      "parent": null,
      "locator": "PHAK C 版 · 3-2",
      "printedPage": "3-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=2",
      "paragraphs": [
        "型別合格證（TC）處理產品型別設計是否符合適用標準；型別合格證資料表（TCDS）記載該型別的重要特性與限制。製造符合性檢查則確認實際製成的產品符合核准設計，不能用設計已通過來代替製造品質的確認。",
        "適航證對應到個別航空器；對具有核准型別設計的航空器，理解適航還必須同時看符合其核准構型，以及處於安全操作狀態。自編例：同型號的兩架飛機即使依相同設計製造，其中一架發現未處理的結構損傷，也不能因另一架正常而判斷它能安全飛行。"
      ],
      "references": [
        {
          "title": "FAA：標準適航證與持續有效條件",
          "url": "https://www.faa.gov/aircraft/air_cert/aw_cert/standard_aw_certificates",
          "checked": "2026-09-10"
        },
        {
          "title": "eCFR · Part 23 現行設計標準",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-23",
          "checked": "2026-09-12"
        },
        {
          "title": "eCFR · Part 21 Subpart H 適航證",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-21/subpart-H",
          "checked": "2026-09-12"
        },
        {
          "title": "eCFR · § 91.203 證書攜帶與展示",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-C/section-91.203",
          "checked": "2026-09-12"
        },
        {
          "title": "eCFR · § 21.225 暫定適航證",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-21/subpart-I/section-21.225",
          "checked": "2026-09-12"
        }
      ],
      "lessonBlocks": [
        {
          "title": "1 · 認證先回答：認證的是什麼？",
          "paragraphs": [
            "本段的 product 指航空器、航空器發動機、螺旋槳三種認證產品。三者可以各有適用的設計標準；發動機本身通過認證，不代表把它裝到任意機身就成為核准組合。安裝方式、結構負載、冷卻、燃油供應與操作限制，都仍須符合航空器適用的核准設計。",
            "Airworthiness standards 是設計必須達到的安全要求，例如結構承受能力、操縱特性及系統安全性。它不是飛行員執照考試規則，也不表示任何使用方式都安全。先區分「產品設計要求」與「飛行時的操作規則」，才能讀懂後面的證書。"
          ],
          "table": {
            "caption": "原書的產品分類與法規閱讀定位",
            "headers": [
              "法規",
              "對象",
              "閱讀時的辨別"
            ],
            "rows": [
              [
                "14 CFR Part 23",
                "Normal category airplanes",
                "原書列 normal、utility、acrobatic、commuter；現行 Part 23 標題與架構已改為 normal category airplanes。舊型號應查其核准認證基礎。"
              ],
              [
                "Part 25",
                "Transport category airplanes",
                "運輸類飛機的設計標準；不能單憑是否收費載客決定適用 Part。"
              ],
              [
                "Part 27",
                "Normal category rotorcraft",
                "這裡的 normal 指正常類旋翼航空器，並非把所有正常類航空器放在一起。"
              ],
              [
                "Part 29",
                "Transport category rotorcraft",
                "同為運輸類，也要區分 airplane 與 rotorcraft。"
              ],
              [
                "Part 31",
                "Manned free balloons",
                "有人自由氣球。"
              ],
              [
                "Part 33",
                "Aircraft engines",
                "發動機產品的標準。"
              ],
              [
                "Part 35",
                "Propellers",
                "螺旋槳產品的標準。"
              ]
            ]
          }
        },
        {
          "title": "2 · Special class：沒有專屬 Part，不等於沒有標準",
          "paragraphs": [
            "原書以滑翔機與 powered-lift 說明 special classes：不能直接套用單一既有產品類別時，FAA 會依適用程序訂定相應認證基礎，採取適用的要求。學習重點是「仍須有被接受的安全要求與符合性證明」，並非由設計者自由挑選較容易的條文。",
            "不要將 special class 和 special airworthiness certificate 畫上等號。前者描述設計認證分類；後者是個別航空器適航證的分類。符合相關條件的 special-class 航空器可以取得 standard airworthiness certificate。"
          ]
        },
        {
          "title": "3 · TC、TCDS、製造符合性與個別適航證",
          "paragraphs": [
            "把流程拆成設計、製造、個別航空器三層：先確認型別設計符合適用標準，再確認實物按照核准設計製造，最後確認這一架航空器符合適用核准構型且處於安全操作狀態。這是一般型別認證產品的理解路徑；LSA 的不同路徑見下一節。"
          ],
          "table": {
            "caption": "四個常被混用的概念",
            "headers": [
              "名詞",
              "回答的問題",
              "不能代替什麼"
            ],
            "rows": [
              [
                "Type Certificate（TC）",
                "這個產品型別的設計是否符合適用認證要求？",
                "不能證明某一架今天沒有損傷。"
              ],
              [
                "Type Certificate Data Sheet（TCDS）",
                "該型別有哪些重要特性、限制及認證資料？",
                "不是完整設計圖，也不能取代該機適用 AFM／POH 與補充文件。"
              ],
              [
                "Conformity inspection（符合性檢查）",
                "實際產品或零件是否符合規定的設計資料？",
                "不是飛行員起飛前繞機檢查的同義詞。"
              ],
              [
                "Airworthiness certificate（適航證）",
                "這一架航空器取得哪一類適航認證？",
                "不是對往後每一次飛行狀態的永久保證。"
              ]
            ]
          }
        },
        {
          "title": "4 · 為什麼有了圖紙，仍要檢查製造？",
          "paragraphs": [
            "設計圖指定的材料、尺寸、製程與組裝要求必須落實到實物。例如圖面要求某種合金與特定接合方式，只做到外形相似仍可能沒有足夠強度。符合性檢查的目的，就是把「文件上合格」連接到「實際製成符合要求」。",
            "Production Certificate（PC，生產許可）涉及核准的生產與品質系統，與 TC 的設計核准不同。Part 21 也有依 TC 生產的規定，不能簡化成每個製造商一律必須先持有 PC；同樣不能因工廠有 PC 就忽略個別航空器的適航認證。"
          ]
        },
        {
          "title": "5 · Standard 與 Special：看分類與限制，不只看顏色",
          "paragraphs": [
            "原書用白色與粉紅色辨識傳統紙本 standard 與 special 適航證。閱讀實際文件時，關鍵是證書類別、用途、有效條件與操作限制；顏色只是外觀辨識提示。"
          ],
          "table": {
            "caption": "適航證的兩大分類",
            "headers": [
              "分類",
              "常見核發對象",
              "容易誤解處"
            ],
            "rows": [
              [
                "Standard",
                "正常、實用、特技、通勤、運輸類；有人自由氣球；special classes",
                "Special class 的名稱含 special，仍可能取得 standard 證。"
              ],
              [
                "Special",
                "Primary、restricted、limited、provisional、light-sport；experimental；special flight permit",
                "各用途限制不同。特別飛行許可不是讓不適航飛機自由營運。"
              ]
            ]
          }
        },
        {
          "title": "6 · 攜帶證書、證書有效與當次適航，是三件事",
          "paragraphs": [
            "在適用 § 91.203 的美國民用航空器操作中，須有相應有效證書；適航證還有展示於艙室入口或座艙、讓乘員可看見的要求。把證書留在家裡，與飛機本身機械狀況正常，是不同的問題。",
            "標準適航證通常沒有固定到期日，但其持續有效涉及美國註冊、依適用 Part 43 與 Part 91 執行維護及改裝，以及未被繳回、暫停、撤銷或另訂終止日等條件。其他證書的有效條件可能不同，例如 special flight permit 依核准期間；不能將標準證書的規則推廣到所有 special 證書。",
            "即使文件仍有效，也要判斷當次安全操作狀態。自編例：昨天檢查合格，今天發現機翼結構損傷，不能只看證書仍在就決定出發。此處先建立觀念，後續第 9 章再學維護紀錄、檢查及不工作設備的處理。"
          ],
          "check": {
            "question": "同型號另一架正常，能否證明這一架適航？",
            "answer": "不能。型別設計相同，不代表每架實物的構型、損傷、維護及安全狀態相同。"
          }
        }
      ],
      "currentNote": "版本核對（2026-09-12）：Part 23 現行標題為 Airworthiness Standards: Normal Category Airplanes；原書的四類並列應配合歷史認證基礎理解。原文「14 CFR parts 175–225」不是適航證的正確查找方式：應從 Part 21 Subpart H（如 §§ 21.175、21.181、21.183）閱讀；§ 21.225 屬 Subpart I 的暫定適航證，不能將 section 號碼當成 Part 號碼。"
    },
    {
      "id": "lsa",
      "english": "A Note About Light Sport Aircraft",
      "title": "輕型運動航空器的認證差異",
      "parent": "certification",
      "locator": "PHAK C 版 · 3-2",
      "printedPage": "3-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=2",
      "paragraphs": [
        "這節用 LSA 引出另一條認證途徑：FAA 接受的產業共識標準可作為符合要求的依據。共識標準不是製造商自行宣稱安全即可，仍需對照適用要求、符合性文件與個別航空器的證件；也不能把運動類機師權限和航空器認證類別視為同一件事。",
        "閱讀 2023 年原文時，要特別區分型別設計核准與個別適航證的核發。原文把 LSA 描述成整機取得 TC，容易造成誤解；請搭配下方 FAA 說明理解此差異，並以適用於該航空器及交付時間的文件查核實際認證依據。"
      ],
      "currentNote": "查閱 2026-09-10：FAA 的 MOSAIC 製造與認證 FAQ 明確說明，FAA 不向 light-sport category aircraft 或 experimental LSA 核發設計／生產核准，而依適用條文向個別航空器核發適航證。2026-07-24 起的 LSA 認證變更亦涉及 Part 22 與新的共識標準；本節不沿用原書「整機取得 TC」的說法作為現行規則。",
      "references": [
        {
          "title": "FAA MOSAIC：LSA 製造與認證 FAQ",
          "url": "https://www.faa.gov/aircraft/MOSAIC/mosaic_faq_manufacture_cert_LSA",
          "checked": "2026-09-10"
        }
      ],
      "lessonBlocks": [
        {
          "title": "共識標準如何形成認證路徑？",
          "paragraphs": [
            "Consensus standards 是業界標準制定機構共同制定、並經 FAA 接受作為適用符合性依據的標準。不是任一社團自行發布規格就自動可用，也不是完全不受 FAA 管理。製造商必須證明符合適用要求，提供符合性聲明，航空器再依相應規定取得個別適航證。",
            "原文「整機包含機身、發動機、螺旋槳取得 TC」容易把 LSA 路徑和一般型別認證混為一談。FAA 的 MOSAIC FAQ 明確說明，LSA 與 experimental LSA 不取得 FAA 設計或生產核准；認證透過核發給個別航空器的適航證進行。這也不表示零件可以任意更換；整體配置及改裝仍須符合適用要求。"
          ],
          "check": {
            "question": "Sport pilot 能飛的航空器，是否一定持 light-sport category 適航證？",
            "answer": "不能只由飛行員資格推定證書類別。飛行員操作資格與航空器認證路徑，是兩組須分別查核的條件。"
          }
        }
      ]
    },
    {
      "id": "forces",
      "english": "Lift and Basic Aerodynamics",
      "title": "升力、四力與三軸",
      "parent": null,
      "locator": "PHAK C 版 · 3-2",
      "printedPage": "3-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=2",
      "paragraphs": [
        "飛機的基本受力包括升力、重力、推力與阻力。升力方向垂直於相對氣流，阻力沿相對氣流方向向後，重力通過重心向地心作用；只有在相應的平衡條件下，才能用升力等於重量、推力等於阻力的簡化圖像，轉彎或加速時需重新分析。",
        "三個轉動軸通過重心：縱軸對應滾轉、橫軸對應俯仰、垂直軸對應偏航。重心位置影響穩定與操縱能力，燃油消耗也可能改變重心；不能只查起飛時的裝載，還要依機型資料確認飛行中的重量與重心保持在限制內。"
      ],
      "points": [
        "Roll／滾轉：繞機頭到機尾的縱軸轉動，並非繞翼尖連線。",
        "Pitch／俯仰：繞橫軸轉動；機頭姿態改變不等於飛行路徑立即等量改變。",
        "Yaw／偏航：繞垂直軸轉動；方向舵作用與協調轉彎需在操縱章節進一步理解。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 3-1 · 先辨識力，再判斷是否平衡",
          "paragraphs": [
            "圖中四支箭頭是概念示意。Thrust 來自動力裝置推進作用；drag 是相對氣流方向上的阻力；weight 是重力，指向地心；lift 是空氣動力相對來流的垂直分量。這些定義比「上、下、前、後」更可靠，因為飛機可以傾斜或沿斜向航跡飛行。",
            "以機翼為例，表面壓力分布等氣動作用合成後，可分解成升力與阻力。機翼是主要升力來源，但尾翼與其他表面也會產生氣動力。圖上的升力箭頭不能理解成只有某個點會產生力。",
            "在簡化的直線、水平、等速模型中，推力與阻力平衡、升力與重量平衡，所以沒有平移加速度。飛機仍然向前移動：合力為零代表速度不改變，而非速度等於零。若轉彎，速度方向改變就有加速度；若爬升，應沿航跡與垂直航跡分解各力，不能直接搬用水平模型。"
          ],
          "table": {
            "caption": "四力的方向基準",
            "headers": [
              "力",
              "方向或作用點",
              "常見混淆"
            ],
            "rows": [
              [
                "Thrust 推力",
                "通常接近機身縱軸，依推進裝置配置而定",
                "不能假設任何姿態都水平向前。"
              ],
              [
                "Drag 阻力",
                "平行相對風、阻礙相對空氣運動",
                "不一定水平朝向機尾。"
              ],
              [
                "Weight 重量",
                "等效作用於 CG，指向地心",
                "飛機傾斜不會讓重力跟著傾斜。"
              ],
              [
                "Lift 升力",
                "垂直相對來流；機翼傾斜時也隨之傾斜",
                "不一定鉛直向上，也不一定等於重量。"
              ]
            ]
          },
          "figure": {
            "label": "Figure 3-1 · The four forces",
            "page": "3-3",
            "url": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=3"
          }
        },
        {
          "title": "Figure 3-2 · 軸是轉動的支線，名稱不是機頭移動方向",
          "paragraphs": [
            "先把三條假想軸放在 CG，並讓它們隨機體一起運動。Longitudinal axis 沿機頭到機尾；lateral axis 橫向穿過機體；vertical axis 在機體座標中上下穿過機體。所謂機體垂直軸，在飛機傾斜時不一定對準地心。",
            "讀圖時看黃色旋轉箭頭「繞哪一條軸」，不要看機頭朝哪裡移動來命名。Pitch 是繞橫軸，roll 是繞縱軸，yaw 是繞垂直軸。三者可以同時發生；實際轉彎還涉及傾斜升力產生的向心作用，所以 yaw 不能直接等同完整的轉彎。"
          ],
          "table": {
            "caption": "三種旋轉的對照",
            "headers": [
              "運動",
              "旋轉軸",
              "典型主要控制面"
            ],
            "rows": [
              [
                "Pitch 俯仰",
                "Lateral axis 橫軸",
                "Elevator／stabilator"
              ],
              [
                "Roll 滾轉",
                "Longitudinal axis 縱軸",
                "Ailerons（部分機型也使用 spoilers）"
              ],
              [
                "Yaw 偏航",
                "Vertical axis 垂直軸",
                "Rudder"
              ]
            ]
          },
          "figure": {
            "label": "Figure 3-2 · Pitching, rolling, yawing",
            "page": "3-3",
            "url": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=3"
          }
        },
        {
          "title": "Figure 3-3 · 重心位置為什麼影響俯仰？",
          "paragraphs": [
            "CG 是全機質量分布的等效集中位置。要理解俯仰，還要看各力與 CG 的距離：力矩大小等於力乘垂直力臂。即使總向上力與總向下力相等，若俯仰力矩不平衡，飛機仍可能開始旋轉。圖中的 CL 表示升力合力作用位置的簡化標示，不能把它當成 CG，也不能假定在所有迎角都固定不變。",
            "上圖以傳統尾翼配置示意重量、機翼升力與尾翼力如何平衡。這是理解力矩的示意，不是所有航空器的固定受力圖；尾翼力的方向與大小取決於設計、構型和飛行狀態。尤其不能推論所有尾翼在所有時候都必須向下施力。",
            "中圖的重心過後，提醒你低速時可能沒有足夠低頭操縱能力來恢復迎角；後移 CG 一般也會減少傳統配置的縱向靜穩定裕度。下圖的重心過前，則可能使抬頭能力不足，例如降落拉平受限。「過前／過後」指超出該機允許範圍，不是拿兩架不同設計飛機的外觀位置相比。",
            "原文把 CG 後移直接說成越來越 dynamically unstable，讀時要細分：靜穩定描述受到擾動後的初始回復趨勢，動穩定描述之後隨時間的運動。後 CG 常削弱縱向靜穩定，但不能僅由一個 CG 位置就概括所有動態模態；操縱能力也不等於穩定性。"
          ],
          "figure": {
            "label": "Figure 3-3 · Center of gravity",
            "page": "3-4",
            "url": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=4"
          }
        },
        {
          "title": "燃油用掉後，CG 往哪裡移？",
          "paragraphs": [
            "移除一項重量後，剩餘整體的 CG 會向遠離該重量位置的方向移動。因此油箱在原 CG 前方，消耗該油箱的燃油通常使 CG 後移；油箱在原 CG 後方則相反。多油箱供油順序、移油與其他載重變化還會改變結果，不能把「油箱空時設定 CG」當成適用所有飛機的操作方法。",
            "自編計算：全機 1,000 kg，CG 距基準點 2.0 m，總質量矩為 2,000 kg·m。若消耗前方 1.0 m 處的 100 kg 燃油，剩餘 CG = (2,000 − 100 × 1.0) ÷ 900 ≈ 2.11 m，往後移。若同樣燃油位於 3.0 m，則結果約 1.89 m，往前移。這是教學數字，不是任一機型的核准資料。",
            "實際規劃應使用該機重量平衡資料，確認起飛、預期燃油消耗過程及降落時的重量與 CG 都在適用包線內。包線可能隨重量或構型改變；只確認起飛 CG 合格，不能保證整段飛行都符合。"
          ],
          "check": {
            "question": "同樣減少 100 kg 燃油，CG 移動方向必然相同嗎？",
            "answer": "不必然。先比較燃油位置與當時全機 CG，再計算剩餘總力矩除以剩餘總重量。"
          }
        }
      ]
    },
    {
      "id": "components",
      "english": "Major Components",
      "title": "主要部件與載荷路徑",
      "parent": null,
      "locator": "PHAK C 版 · 3-3",
      "printedPage": "3-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=3",
      "paragraphs": [
        "多數傳統飛機可分成機身、機翼、尾翼組、起落架和動力裝置。外形會隨載人、運貨、訓練或其他設計任務而變，但每個部件的功能都必須和全機的重量、阻力、穩定性與結構需求配合。",
        "自編例：落地衝擊由輪胎與起落架傳入機體，飛行時翼面受力則經翼內構件與接合處傳遞。檢視飛機時，除了認出部件，也應能指出它連到哪裡，以及連接處為什麼具有結構上的重要性。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 3-4 · 用功能把五大部件串起來",
          "paragraphs": [
            "沿圖從機頭讀到機尾：powerplant 提供推進所需動力；fuselage 容納人員與載荷並連接結構；wings 提供主要升力；empennage 支援穩定及操縱；landing gear 支承地面重量並承受滑行與落地載荷。這是常見飛機的分解方式，其他布局可能沒有完全相同的外形。",
            "再倒過來讀載荷路徑：飛行中機翼氣動負載經翼內結構、翼根接頭傳到機身；落地時地面反力經輪胎、起落架與接點進入機體。部件名稱相同不代表接法相同，起落架可能裝於機身或機翼，因此要追蹤實際機型的連接方式。"
          ],
          "figure": {
            "label": "Figure 3-4 · Airplane components",
            "page": "3-4",
            "url": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=4"
          }
        }
      ]
    },
    {
      "id": "fuselage",
      "english": "Fuselage",
      "title": "機身",
      "parent": "components",
      "locator": "PHAK C 版 · 3-3",
      "printedPage": "3-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=3",
      "paragraphs": [
        "機身容納機組、旅客與貨物，也是機翼及尾翼組的主要結構連接中心。座艙空間與外表只是它的一部分，內部框架、外皮及接合位置還必須把不同方向的載荷傳遞到其他構件。",
        "早期常見桁架骨架加覆面，另有硬殼式與半硬殼式構造。不同方式的外皮承力程度不同，因此不能因為看到的是薄板或布面，就用同一套直覺評估損傷；先辨識承力方式，才能理解為何檢查與修理依據不同。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 3-5 · 桁架圖的線條不是裝飾",
          "paragraphs": [
            "上半圖先找沿機身前後延伸的 longerons（縱樑），再看連接它們的 struts（支桿）形成三角形框架。三角化使載荷可以透過桿件的拉力與壓力傳遞；外部覆蓋材料可以負責外形，未必承擔與主框架相同的結構工作。",
            "下半圖增加 bulkheads（隔框／框架）與 stringers（縱向加強條）的辨識。Bulkhead 沿截面提供形狀、支承或局部載荷傳遞；stringer 沿縱向支承蒙皮並參與承載。Longeron 通常是較主要的縱向構件，但名稱與分工依設計而異，不能只按圖中顏色判斷強度。",
            "比較後面的 monocoque 與 semimonocoque：單殼體依賴承力外殼，半單殼體讓蒙皮與內部加強構件共同承載。因此「蒙皮只是防風外罩」只對部分結構成立。看見蒙皮損傷時，應先辨認它在該結構的功能，不能以表面凹痕大小自行判定無影響。"
          ],
          "figure": {
            "label": "Figure 3-5 · Truss-type fuselage structure",
            "page": "3-4",
            "url": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=4"
          }
        }
      ]
    },
    {
      "id": "wings",
      "english": "Wings",
      "title": "機翼：配置、骨架與活動面",
      "parent": "components",
      "locator": "PHAK C 版 · 3-3",
      "printedPage": "3-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=3",
      "paragraphs": [
        "機翼是主要升力面，依安裝位置可分高翼、中翼及低翼，依翼面組數可分單翼與雙翼。半懸臂式利用外部支柱分擔載荷，全懸臂式由內部結構承載而不需這類外部支柱；看不到支柱不代表機翼缺少支撐。",
        "翼樑、翼肋、縱向加強構件與蒙皮共同工作：翼肋維持翼型，翼樑等構件傳遞主要載荷，機翼內也可能設置油箱。典型副翼位於較外側後緣，以左右差動動作控制滾轉；襟翼較靠內側，通常同向放下以改變升阻特性，兩者不可只按位置背誦而忽略功能。"
      ],
      "lessonBlocks": [
        {
          "title": "機翼配置：位置、數量、支撐方式分開看",
          "paragraphs": [
            "High-wing、mid-wing、low-wing 描述機翼相對機身的安裝高度。Monoplane 與 biplane 描述一組或上下兩組主翼；單翼機左右各有翼面，仍是 monoplane，不是看到左右兩片就叫 biplane。Figure 3-6 的兩張照片正是比較主翼組數。",
            "另一個獨立分類是外部支撐：原書稱有翼支桿分擔載荷的布局為 semi-cantilever，完全靠內部結構與翼根接合傳遞負載的為 full cantilever。高翼也可以沒有外部支桿；沒有支桿不是沒有支撐，而是支撐功能由內部結構承擔。"
          ],
          "figure": {
            "label": "Figure 3-6 · Monoplane and biplane",
            "page": "3-5",
            "url": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=5"
          }
        },
        {
          "title": "Figure 3-7 · 從氣流受力一路追到翼根",
          "paragraphs": [
            "先把外表 skin 想成承受分布氣動壓力的表面，再找 ribs、stringers 與 spars：它們組成一個能維持翼型、抵抗彎曲與扭轉的結構。真實載荷如何分配取決於設計，下面列的是辨識功能，並不是每件構件只承受單一種類的力。"
          ],
          "table": {
            "caption": "機翼剖面讀圖",
            "headers": [
              "構件",
              "主要功能",
              "觀察提示"
            ],
            "rows": [
              [
                "Spar 翼樑",
                "主要跨翼展承力構件，對抵抗彎曲很重要",
                "由翼根朝翼尖延伸；數量依設計而定。"
              ],
              [
                "Rib 翼肋",
                "維持翼型，支承蒙皮並傳遞局部載荷",
                "剖面形狀幫助你看出翼型。"
              ],
              [
                "Stringer 縱向加強條",
                "加強蒙皮、改善穩定性並參與承載",
                "通常是較細長的縱向構件。"
              ],
              [
                "Skin 蒙皮",
                "形成氣動表面；承力蒙皮也參與傳遞剪力等載荷",
                "不能普遍當成可有可無的外罩。"
              ],
              [
                "Fuel tank 油箱",
                "儲存燃油，影響重量與載荷分布",
                "圖中位置只是示意；不同機型可用整體式或囊式等設計。"
              ],
              [
                "Wing tip 翼尖",
                "主翼外端，影響局部流場",
                "翼尖形狀與渦流的關係到第 5 章再展開。"
              ]
            ]
          },
          "figure": {
            "label": "Figure 3-7 · Wing components",
            "page": "3-5",
            "url": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=5"
          }
        },
        {
          "title": "副翼與襟翼都在後緣，工作卻不同",
          "paragraphs": [
            "原書描繪的典型布局中，ailerons 位於較外側後緣，左右通常反向偏轉，使兩翼氣動作用不對稱而產生滾轉力矩。不能只記「上去或下來」：偏轉還會改變阻力，並可能伴隨不利偏航，後面操縱章節會再說明。",
            "Flaps 通常在較內側後緣，左右對稱放下，用來改變翼型與低速升力能力，也通常增加阻力；適合起降時依核准程序使用。放下襟翼不代表飛機必然立即爬升，因為速度、迎角、推力及俯仰力矩也會改變。",
            "原文使用「正常與機翼表面齊平」描述巡航時收起的襟翼，不是指所有副翼永遠完全中立。也有 flaperon 等整合功能或其他布局，因此先學典型結構，再查該機 POH 的實際系統。"
          ],
          "check": {
            "question": "左右後緣表面一起向下，是否就是在做滾轉？",
            "answer": "典型左右襟翼對稱放下主要改變低速升阻特性；典型副翼以左右不對稱作用產生滾轉。仍應按機型辨認控制面功能。"
          }
        },
        {
          "title": "Figure 3-8 · 六種襟翼剖面怎麼讀？",
          "paragraphs": [
            "圖由上往下以 basic section 作為收起時的比較基準，再列出不同的後緣改形方式。看每張圖時，依序問：哪部分偏轉、是否後移增加面積、有沒有讓空氣流過的縫隙？這三個問題比背輪廓更能理解功能。",
            "襟翼主要提高最大升力係數，並改變阻力及俯仰力矩；在相同重量與其他條件下，較高的最大升力係數可使失速速度下降。實際效果依構型而定，不是偏轉越多就一定越適合起飛，也不能把一種襟翼的速度限制用到另一種機型。"
          ],
          "table": {
            "caption": "襟翼剖面的差異",
            "headers": [
              "型式",
              "圖上改變",
              "理解重點"
            ],
            "rows": [
              [
                "Plain",
                "整段後緣向下偏轉",
                "增加翼型彎度。"
              ],
              [
                "Split",
                "主要是後緣下表面偏轉",
                "增加升力的同時可產生較大阻力。"
              ],
              [
                "Slotted",
                "翼與襟翼間保留導流縫隙",
                "氣流經縫隙協助延緩襟翼上表面分離。"
              ],
              [
                "Fowler",
                "向後伸出並向下偏轉",
                "增加面積，也增加彎度。"
              ],
              [
                "Slotted Fowler",
                "結合後移與縫隙",
                "兼有增加面積及改善局部氣流的作用。"
              ]
            ]
          },
          "figure": {
            "label": "Figure 3-8 · Types of flaps",
            "page": "3-6",
            "url": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=6"
          }
        }
      ]
    },
    {
      "id": "alternate-wings",
      "english": "Alternate Types of Wings",
      "title": "其他機翼形式",
      "parent": "wings",
      "locator": "PHAK C 版 · 3-5",
      "printedPage": "3-5",
      "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=5",
      "paragraphs": [
        "本節補入正文中的其他機翼形式。不同任務可採不同平面形狀、後掠與柔性設計，重心移動控制航空器更可能透過機體相對翼面的重量位置變化達到操縱，不能預設都有傳統副翼與升降舵。",
        "自編練習：對照原圖，找出固定翼飛機與重心移動控制航空器各自改變什麼來控制飛行。重點是結構與控制方法的配合，不是把某一種翼型直接判定為所有速度與用途下都比較好。"
      ],
      "supplementalHeading": true,
      "lessonBlocks": [
        {
          "title": "柔性翼與重心移動操縱：改變的是控制方式",
          "paragraphs": [
            "傳統固定翼多透過可動控制面改變氣動力；柔性翼或 weight-shift control aircraft 可以利用翼面變形、機翼與懸吊重量的相對移動來產生操縱效果。這不表示飛機不受四力與力矩支配，而是飛行員改變力矩的方式不同。",
            "原文提到後掠與重量移動，是特定布局的概述，不能推成「所有後掠翼都用重心操縱」，也不能推成「後掠在任何速度下都比較省阻力」。比較不同機種時，應先問設計目的、結構與操作方式，再到對應手冊學習。"
          ]
        },
        {
          "title": "Figure 3-9 · 移動重量如何產生操縱？",
          "paragraphs": [
            "圖中的 weight-shift aircraft 將乘員與動力等重量懸吊在柔性翼下。飛行員透過操縱架改變機翼與懸吊部分的相對位置，改變受力與力矩關係，以操縱俯仰或滾轉。不能把它套用成一般飛機上移動身體就等同操作升降舵。",
            "讀圖時分辨上方的翼與下方的懸吊結構，而不是尋找傳統副翼。這也說明「飛行控制」是一種功能，不限定一定要由鉸接式後緣控制面完成。"
          ],
          "figure": {
            "label": "Figure 3-9 · Weight-shift control aircraft",
            "page": "3-6",
            "url": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=6"
          }
        }
      ]
    },
    {
      "id": "empennage",
      "english": "Empennage",
      "title": "尾翼組與配平面",
      "parent": "components",
      "locator": "PHAK C 版 · 3-6",
      "printedPage": "3-6",
      "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=6",
      "paragraphs": [
        "傳統尾翼組包括水平與垂直安定面，以及升降舵、方向舵和可能設置的配平片。安定面與活動面分工不同：前者參與穩定，後者提供控制力矩；配平片則協助減少機師持續施加的操縱力。",
        "全動式水平尾翼（stabilator）由整個水平面轉動，不是固定安定面後面再接一片升降舵。原文示例的 antiservo tab 隨尾翼後緣同向偏轉，增加操縱回饋並可兼作配平；不要把它和所有其他種類的小翼片都視為相同機構。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 3-10 · 固定安定面、可動舵面與配平片",
          "paragraphs": [
            "Empennage 指整個尾部組件。典型布局中，horizontal stabilizer 與 vertical stabilizer 是水平及垂直安定面；elevator 裝在水平安定面後緣，rudder 裝在垂直安定面後緣。前者主要改變俯仰力矩，後者主要改變偏航力矩。",
            "固定安定面提供穩定作用，可動表面讓飛行員改變氣動作用；兩者工作會相互影響。方向舵能讓機頭偏向一側，但保持協調轉彎通常還需要副翼建立傾斜與其他操縱配合，並不是「踩方向舵就等於轉彎」。",
            "Trim tab 是控制面後緣的小表面，可用氣動力矩減少維持某一狀態所需的操縱力。它不是把飛機鎖在某個高度，也不代表速度、構型改變後完全不用重新配平。圖中顯示可能位置，不代表每架飛機都有每一種可調配平片。"
          ],
          "figure": {
            "label": "Figure 3-10 · Empennage components",
            "page": "3-6",
            "url": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=6"
          }
        },
        {
          "title": "Figure 3-11 · Stabilator 與 antiservo tab",
          "paragraphs": [
            "Stabilator 是整片可轉動的水平尾翼，不是固定水平安定面後面另接 elevator。先找圖上的 pivot point，再看整片尾翼如何繞樞軸轉動：改變尾翼氣動力後，利用相對 CG 的力臂產生俯仰力矩。",
            "Antiservo tab 的後緣通常與 stabilator 後緣同向偏轉，所產生的氣動力矩會增加操縱阻力，降低整片尾翼過度敏感的感覺。它也可以兼任配平功能。這和為了協助主控制面偏轉的 servo tab 不同；不能只看到 tab 就推定它的方向與目的。"
          ],
          "figure": {
            "label": "Figure 3-11 · Stabilator components",
            "page": "3-7",
            "url": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=7"
          },
          "check": {
            "question": "整片水平尾翼轉動、後緣小片同向偏轉，兩者各做什麼？",
            "answer": "整片 stabilator 改變俯仰氣動作用；antiservo tab 增加操縱阻力，且可能兼具配平功能。"
          }
        }
      ]
    },
    {
      "id": "gear",
      "english": "Landing Gear",
      "title": "起落架與地面支承",
      "parent": "components",
      "locator": "PHAK C 版 · 3-7",
      "printedPage": "3-7",
      "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=7",
      "paragraphs": [
        "起落架在停放、滑行、起飛與落地時支撐飛機，接地裝置可為輪子、浮筒或滑橇。常見輪式配置是兩個主輪加鼻輪或尾輪；鼻輪式稱三點式，尾輪式又稱 conventional gear，這裡的 conventional 是配置名稱。",
        "地面方向控制可能透過可轉向鼻輪或尾輪，也可能配合差動煞車，實際連動依機型而異。自編例：同樣踩方向舵踏板，不能假設不同飛機的地面轉向角度與反應一致，必須先了解其轉向及煞車安排。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 3-12 · 起落架不只有輪子",
          "paragraphs": [
            "起落架在停放、滑行、起飛滑跑與降落時支承飛機並傳遞地面或水面載荷。圖中的 floats、skis、wheels 分別對應水面、雪地及一般跑道；有些系統會結合可收放輪子，因此看到浮筒也不能直接推定只能在水面起降。",
            "Tricycle gear 的第三個輪子在機頭；conventional／tailwheel gear 在機尾。這裡 conventional 是配置名稱，不是「現代飛機最常見」的統計描述。地面轉向可能透過可轉向的鼻輪／尾輪、方向舵踏板連動或差動煞車，依機型而異。",
            "不要把方向舵踏板的所有動作都當成空中的偏航操縱：在地面，同一套踏板可能同時涉及輪子轉向或另有腳尖煞車。實際操作須先辨認該機連動與自由回轉設計。"
          ],
          "figure": {
            "label": "Figure 3-12 · Floats, skis, and wheels",
            "page": "3-7",
            "url": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=7"
          }
        }
      ]
    },
    {
      "id": "powerplant",
      "english": "The Powerplant",
      "title": "動力裝置與螺旋槳",
      "parent": "components",
      "locator": "PHAK C 版 · 3-7",
      "printedPage": "3-7",
      "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=7",
      "paragraphs": [
        "本章以引擎加螺旋槳的組合為主：引擎提供轉矩，旋轉的槳葉作為翼型把能量轉成推力。引擎也可能驅動發電或儀表所需的附屬設備，整流罩除了整理外部氣流，還引導冷卻氣流；不是每架飛機都使用相同的真空或供暖方式。",
        "槳葉各半徑位置的周向速度不同，沿展向的扭轉讓各段更接近設計所需的工作迎角。槳葉幾何角度、相對氣流迎角與螺距不能混為一談；螺距描述理想一圈的前進距離，並不表示真實空氣中每轉必然前進同樣距離。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 3-13 · 引擎、螺旋槳與外罩分工",
          "paragraphs": [
            "在圖示的螺旋槳飛機中，引擎把燃料能量轉成軸功率，螺旋槳再把旋轉作用轉成推力。引擎也可能驅動發電機、真空泵等附件，並供應暖氣來源；這些是特定系統配置，並非每架飛機都具備。",
            "Cowling 是引擎外罩，作用包括整理外部氣流與引導冷卻氣流；nacelle 通常是包覆動力裝置的艙體。外罩不是純裝飾，冷卻導流與固定狀態都可能影響系統工作。圖示是典型牽引式螺旋槳配置，推進式則把螺旋槳放在後方。"
          ],
          "figure": {
            "label": "Figure 3-13 · Engine compartment",
            "page": "3-8",
            "url": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=8"
          }
        },
        {
          "title": "葉片扭轉、葉片角、迎角與槳距",
          "paragraphs": [
            "螺旋槳葉片可當成旋轉中的翼型，但各半徑位置的切向速度不同：轉速相同時，離槳轂越遠，移動速度越快。葉片沿展向扭轉，是為了讓不同位置在設計工況下具有合適的局部迎角與負載分布。",
            "Blade angle 是葉片弦線相對旋轉平面的幾何角度；angle of attack 是弦線相對局部來流的角度。局部來流同時受到旋轉與前進等速度影響，所以即使固定槳距，飛機速度或轉速改變，迎角仍會改變。不能把幾何葉片角直接叫作迎角。",
            "原文的 pitch 是假設在固體中每轉一圈前進的幾何距離。真正在空氣中每圈的前進距離還取決於流場和工況，因此不能單用標稱槳距乘轉速保證實際空速。螺旋槳效率也隨飛行速度與工作點改變，選型必須配合引擎與航空器。"
          ],
          "check": {
            "question": "固定槳距螺旋槳的迎角固定嗎？",
            "answer": "不固定。幾何葉片角固定，但局部相對氣流會隨前進速度、轉速與誘導流改變。"
          }
        }
      ]
    },
    {
      "id": "subcomponents",
      "english": "Subcomponents",
      "title": "機體、電力、操縱與煞車系統",
      "parent": null,
      "locator": "PHAK C 版 · 3-8",
      "printedPage": "3-8",
      "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=8",
      "paragraphs": [
        "Airframe 是承受氣動力及燃油、人員、載荷所造成應力的基本機體結構。電力系統則負責發電、調節與分配，來源可隨飛機大小和配置包括引擎驅動發電機、輔助動力裝置或外部電源；閱讀列舉時不要當成每架訓練機都有的設備。",
        "飛行操縱系統把機師或自動駕駛的命令傳到操縱面，煞車則透過摩擦吸收地面運動能量。這些系統與結構彼此依賴：例如電力異常可能影響儀表資訊，而起落架承力正常也不代表其煞車功能正常。"
      ],
      "lessonBlocks": [
        {
          "title": "結構、電力、操縱、煞車：把功能和能量連起來",
          "paragraphs": [
            "Airframe 承受氣動與載重造成的負載。Electrical system 則處理發電、儲存及配電，可能由引擎驅動發電裝置、電池、APU 或外接電源供電；這是跨機型列舉，不是每架小飛機都裝有 APU。即使顯示器只是一個螢幕，它仍依賴背後的供電與資料來源。",
            "Flight controls 使飛行員或自動駕駛改變控制面，進而影響姿態及航跡。應把「命令來源」與「真正移動的控制面」分開：按下自動駕駛按鈕不會取消機體的氣動限制。",
            "典型碟式煞車用液壓讓來令片夾住隨輪子轉動的煞車碟，將動能轉成熱能。高速或大重量煞停需要吸收更多能量，因此煞車限制不能只由剩餘摩擦材料厚度推定；原文所說壽命以落地次數描述，是強調使用循環的重要性，不是所有煞車都有同一更換週期。"
          ]
        }
      ]
    },
    {
      "id": "construction",
      "english": "Types of Aircraft Construction",
      "title": "構造方式：誰在承受載荷",
      "parent": null,
      "locator": "PHAK C 版 · 3-8",
      "printedPage": "3-8",
      "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=8",
      "paragraphs": [
        "分類結構時，應看載荷由哪些部分分擔，而不只看材料名稱。桁架式以骨架承力，硬殼式高度依賴承力外殼，半硬殼式由外皮與內部加強構件共同工作；複合材料則是在描述材料系統，可用於不同結構安排。",
        "自編比較：兩架外形相似的飛機，一架覆面主要整理氣流，另一架蒙皮承受重要的剪力與彎扭載荷。同樣大小的表面異常未必具有相同意義，結構名稱的用途是幫助理解力的路徑，並非自行制定可接受損傷尺寸。"
      ],
      "lessonBlocks": [
        {
          "title": "材料和承力布局，是兩個不同分類",
          "paragraphs": [
            "Truss、monocoque、semimonocoque 描述結構如何承載；金屬、木材、複合材料描述用什麼材料製作。因此「複合材料」不一定是與半單殼體互斥的第四種布局，複合材料也能形成承力蒙皮與內部加強結構。",
            "比較一個設計時，依序問：外部負載進入哪裡、由什麼構件傳遞、最後通過哪些接點？這樣才能解釋為什麼同樣一道刮傷，在不同材料或位置可能有不同意義。"
          ]
        }
      ]
    },
    {
      "id": "truss",
      "english": "Truss Structure",
      "title": "桁架式結構",
      "parent": "construction",
      "locator": "PHAK C 版 · 3-8",
      "printedPage": "3-8",
      "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=8",
      "paragraphs": [
        "桁架透過縱向構件、支柱與斜撐形成穩定骨架，承受不同方向的載荷。整形框與縱向小構件可用來維持機身外形和支撐覆面；在典型桁架設計中，外部布面主要提供平順外形，不承擔與承力蒙皮相同的角色。",
        "早期骨架外形不利於流線化，因此逐漸加入覆面整理氣流。自編例：看到一架覆布飛機時，可以分辨「讓外形平順的表面」與「在內部傳力的骨架」，但覆面本身仍需符合該機型的狀態要求，不能因非主要承力就忽視破損。"
      ],
      "lessonBlocks": [
        {
          "title": "桁架為何使用縱樑和斜撐？",
          "paragraphs": [
            "Longerons 沿機身縱向延伸，支桿與斜撐把它們連成穩定框架。三角化可以讓桿件有效傳遞拉力與壓力；若只有易變形的四邊形，而沒有適當支撐或剛性接點，就難以保持形狀。",
            "桁架本身不一定形成平順流線外形，因此可用 formers、stringers 與覆蓋材料塑形。不要由外觀看起來平滑就判斷是 monocoque；必須看載荷主要由內框架還是承力蒙皮負擔。"
          ]
        }
      ]
    },
    {
      "id": "monocoque",
      "english": "Monocoque",
      "title": "硬殼式結構",
      "parent": "construction",
      "locator": "PHAK C 版 · 3-8",
      "printedPage": "3-8",
      "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=8",
      "paragraphs": [
        "硬殼式主要由承力外殼承受載荷，內部框形構件協助維持形狀。原文用飲料罐比喻薄殼：外形完整時可承受相當軸向力，局部變形卻可能明顯降低抵抗失穩的能力，說明外皮幾何形狀也是結構功能的一部分。",
        "這個比喻不能用來計算航空器損傷允許值，也不表示硬殼式內部完全沒有構件。學習時要抓住它與桁架的核心差別：主要彎扭載荷更多透過外殼傳遞，因此不能將凹陷僅視為外觀問題。"
      ],
      "supplementalHeading": true,
      "lessonBlocks": [
        {
          "title": "Figure 3-14 上圖 · 薄殼如何承載，為何怕局部變形？",
          "paragraphs": [
            "Monocoque 主要依靠 stressed skin 承載，並可有隔框維持形狀。飲料罐的比喻用來說明薄殼在形狀完整時能承受一定負載，一旦局部凹陷，可能更容易屈曲，導致承載能力下降。",
            "這個比喻不能用來計算實際機身強度，也不表示所有單殼體損傷都會立即崩潰。重點是外殼形狀與完整性本身就是結構的一部分，蒙皮不能只當成遮住內部的薄片。"
          ],
          "figure": {
            "label": "Figure 3-14 · Monocoque and semimonocoque",
            "page": "3-9",
            "url": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=9"
          }
        }
      ]
    },
    {
      "id": "semimonocoque",
      "english": "Semimonocoque",
      "title": "半硬殼式結構",
      "parent": "construction",
      "locator": "PHAK C 版 · 3-9",
      "printedPage": "3-9",
      "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=9",
      "paragraphs": [
        "半硬殼式在承力外皮內加入隔框、整形框與縱向構件，讓外皮與骨架共同分擔載荷，維持形狀並提高抗彎等能力。「半」不是固定各負擔一半的數學比例，而是描述相較純承力外殼增加內部加強的構造概念。",
        "機身主要結構還包括機翼連接處及防火牆。典型單引擎飛機的防火牆隔開引擎艙和座艙，以耐熱材料協助保護人員；它的功能與一般隔板不同，但也不能理解成發生引擎火災後可無限期隔絕所有熱與煙。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 3-14 下圖 · 共同承載，不是各承受一半",
          "paragraphs": [
            "Semimonocoque 的蒙皮與 stringers、frames／formers、bulkheads 共同維持外形及傳遞載荷。Semi 不代表數學上各承受 50%；不同位置的彎曲、剪力、扭矩分配由實際結構決定。",
            "翼根接點、起落架接點或動力裝置連接區需要把集中負載導入整體機身。Firewall 是把引擎艙與人員艙隔開的防火屏障，其材料與穿越件設計都與功能有關，不能因一般蒙皮也有金屬外觀就把兩者視為等同。"
          ]
        }
      ]
    },
    {
      "id": "composites",
      "english": "Composite Construction",
      "title": "複合材料構造",
      "parent": "construction",
      "locator": "PHAK C 版 · 3-9",
      "printedPage": "3-9",
      "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=9",
      "paragraphs": [
        "複合材料把不同材料結合，利用纖維與基材的互補特性製成結構。玻璃纖維、碳纖維與芳綸纖維等名稱描述增強材料，樹脂則把纖維結合並形成構件；複材不是某一種單一塑膠的同義詞。",
        "設計者可透過纖維方向、材料與構形配合受力需求，因此不能僅憑「碳纖維」三字推定重量、強度或耐撞能力。學習本節要同時看到設計自由度與檢查限制，避免把材料優勢等同整架飛機在所有情境都更安全。"
      ],
      "lessonBlocks": [
        {
          "title": "先讀完整名稱：纖維強化基材系統",
          "paragraphs": [
            "本節所說的複合材料主要是 fiber-reinforced matrix systems：纖維、基材、鋪層與製程共同決定成品性能。不能只看到外觀黑色或白色，就推定承載方向、耐熱程度或修理方式。",
            "接下來的優缺點描述的是設計可能性。實際承載結構必須配合環境、損傷容許、接合方式與可檢查性評估，不能以某種材料單獨的高強度取代整體設計。"
          ]
        }
      ]
    },
    {
      "id": "composite-history",
      "english": "History",
      "title": "複合材料的應用歷史",
      "parent": "composites",
      "locator": "PHAK C 版 · 3-9",
      "printedPage": "3-9",
      "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=9",
      "paragraphs": [
        "原文從二戰時玻璃纖維作為隔熱用途，談到後來滑翔機把它用作主要結構，呈現同一類材料如何從附屬用途進入承力用途。高性能滑翔機需要平順曲面與良好氣動外形，提供了複材應用的重要場景。",
        "歷史段落中的年份、當時新機使用比例與產品例子，是技術演進的背景，並非目前市場統計。閱讀時可整理成「用途如何擴大、製造如何成熟、結構責任如何增加」三條線，不必把過去的比例當成今天選機的依據。"
      ],
      "lessonBlocks": [
        {
          "title": "從非主要結構用途走向主要承力件",
          "paragraphs": [
            "原書先提及早期玻璃纖維的隔熱等用途，再談滑翔機與後續動力飛機的結構應用。重點是區分「在飛機上用到材料」與「由它承受主要飛行載荷」：兩者的設計責任和驗證需求不同。",
            "原文的型號、年代及新機比例是書中歷史敘事，不能將其中比例直接當成今天的市場統計。閱讀 Figure 3-15 時，要注意材料已能用於完整流線外形，但照片本身不能揭露內部鋪層與接頭。"
          ],
          "figure": {
            "label": "Figure 3-15 · Composite aircraft",
            "page": "3-10",
            "url": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=10"
          }
        }
      ]
    },
    {
      "id": "composite-materials",
      "english": "Composite Materials in Aircraft",
      "title": "纖維與基材如何共同工作",
      "parent": "composites",
      "locator": "PHAK C 版 · 3-9",
      "printedPage": "3-9",
      "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=9",
      "paragraphs": [
        "纖維承受大部分主要載荷，基材把纖維結合、維持形狀並協助傳遞載荷。航空常見環氧樹脂屬熱固性材料，不同配方的固化條件、耐熱與結構性能各異；即使增強纖維相同，基材不同也可能改變構件表現。",
        "玻璃纖維通常較容易加工且成本較低，碳纖維可提供較高剛性與重量方面的優勢，但脆性及撞擊反應也需考慮。原文強調材料與樹脂系統的選擇會影響結果，因此不能用一種複材的經驗推論所有複材。"
      ],
      "supplementalHeading": true,
      "lessonBlocks": [
        {
          "title": "纖維、樹脂、鋪層：各自提供什麼？",
          "paragraphs": [
            "纖維通常在自身方向提供很高的承載能力；樹脂基材把纖維固定、傳遞纖維間的載荷並支承纖維。原文用 glue 作比喻，不是指任何膠水都能替代航空結構樹脂。若基材或界面受損，即使部分纖維尚未斷裂，結構仍可能失去重要能力。",
            "Epoxy 是本節常見的熱固性基材，固化後形成交聯結構。其性能受配方、固化製程、溫度及濕度等影響；不是所有 epoxy 都有相同耐熱或耐燃油能力。鋪層方向也很重要，沿一個方向很強的板材，不代表橫向、層間或受衝擊時同樣強。"
          ]
        },
        {
          "title": "Fiberglass 與 carbon fiber：強度不等於剛性，也不等於韌性",
          "paragraphs": [
            "Strength（強度）是承受負載到失效的能力；stiffness（剛性）描述受力後抵抗變形的程度；impact resistance／toughness 涉及衝擊與吸收能量、抵抗損傷的能力。這些不是同一排行榜：一個很硬、很強的結構，仍可能對局部尖銳撞擊敏感。",
            "原書中的碳纖維相對玻璃纖維通常較輕、較高剛性的比較，是材料選擇的概括。成品還受到纖維等級、體積比例、鋪層厚度、接頭和防護層影響。Toughened epoxy 可改善系統抗損傷表現，但不會把碳纖維變成不會受傷的材料。"
          ],
          "table": {
            "caption": "兩種強化纖維的典型取捨",
            "headers": [
              "面向",
              "Fiberglass 玻璃纖維",
              "Carbon fiber 碳纖維"
            ],
            "rows": [
              [
                "成本與加工",
                "通常較便宜、容易取得及加工",
                "通常較昂貴，製程品質同樣重要。"
              ],
              [
                "剛性與重量",
                "要達到所需剛性，可能需要較重結構",
                "常可提供較高比剛性與減重空間。"
              ],
              [
                "衝擊",
                "原書描述有較好的抗衝擊表現",
                "脆性纖維可能斷裂，外觀不一定揭露全部損傷。"
              ],
              [
                "電性",
                "通常為良好絕緣材料",
                "可導電，但與鋁的導電表現不同。"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "advantages",
      "english": "Advantages of Composites",
      "title": "複合材料的優點",
      "parent": "composites",
      "locator": "PHAK C 版 · 3-10",
      "printedPage": "3-10",
      "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=10",
      "paragraphs": [
        "複材能形成平順且複雜的曲面，有助於降低外形阻力，也可能在適當設計下減輕重量。減重並非自動發生：纖維種類、結構尺寸、接合方式及實際載荷需求都會影響成品是否比其他方案輕。",
        "相較金屬，複材具有不同的腐蝕與疲勞特性，適合某些反覆彎曲的結構用途。這不等於它永不老化或不需檢查；應把優點理解成工程設計可運用的特性，而不是對所有環境與損傷的免疫能力。"
      ],
      "lessonBlocks": [
        {
          "title": "減重與低阻力：必須比較完整結構",
          "paragraphs": [
            "減重來自材料和設計一起最佳化，而不是把金屬名稱換成 carbon 就自動變輕。接頭、局部補強、最低厚度、損傷容許及雷擊防護都會帶來重量。原書提到約 30% 是特定良好設計可能達到的量級，不是可套用所有零件的保證。",
            "複合材料可製作平順的複曲面，使外形更容易符合氣動設計並減少某些接縫帶來的干擾。但飛機總阻力還受翼型、表面狀態、起落架與操作狀態影響，不能僅因採用複材就推定比任何金屬飛機快。"
          ]
        },
        {
          "title": "耐腐蝕、循環負載與匿蹤：優點都有邊界",
          "paragraphs": [
            "複材不像鋁合金以相同方式腐蝕，但整架飛機仍包含金屬接件，並可能有碳纖維與金屬接觸造成的電偶腐蝕問題；樹脂也可能受濕熱環境影響。因此「沒有金屬式腐蝕」不能簡化成完全不受環境劣化。",
            "原文說複材不會像金屬一樣疲勞裂紋成長，應理解為損傷機制不同。複材在重複負載下仍可能產生基材裂紋、分層或纖維損傷，旋翼片的壽命仍須由設計與維護要求決定，不能從材質推定無限壽命。",
            "原書提及較高客艙壓差、濕度及雷達特徵，是設計應用的例子。匿蹤效果還需要外形、電磁材料與系統整合；「使用碳纖維」本身不等於雷達看不到。原文以「正在設計 787」敘述也反映了段落的歷史背景，不應當作現況新聞。"
          ]
        }
      ],
      "references": [
        {
          "title": "FAA AC 20-107B Change 1 · 複合結構設計、環境與損傷容許",
          "url": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_20-107B_with_change_1.pdf",
          "checked": "2026-09-12"
        }
      ]
    },
    {
      "id": "disadvantages",
      "english": "Disadvantages of Composites",
      "title": "隱藏損傷、熱與化學限制",
      "parent": "composites",
      "locator": "PHAK C 版 · 3-10",
      "printedPage": "3-10",
      "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=10",
      "paragraphs": [
        "複材受撞後可能發生分層、纖維斷裂或基材損傷，外表痕跡卻不明顯。低能量碰撞也可能造成內部損傷範圍大於可見痕跡；有碰撞事實就應完整記錄並由熟悉該結構的人員依資料評估，而不是只摸表面是否平滑。",
        "樹脂也有耐熱和化學相容性限制，塗裝顏色與吸熱會影響溫度，除漆劑可能損害材料。原文的溫度例子並非所有複材的通用限制；表面補土或臨時遮蓋也不等於恢復承力能力，真正的結構修理須使用適用資料。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 3-16 · 撞擊能量與可見損傷不是等比例",
          "paragraphs": [
            "低能量撞擊可能只留下很小表面痕跡，內部卻有分層、基材裂紋或背面損傷；中、高能量撞擊可能出現壓碎或穿孔，但可見邊界也不一定等於實際損傷邊界。圖中的錐狀擴展是示意，不能拿來按表面直徑直接計算修補大小。",
            "玻璃纖維的局部白化可能提示纖維、樹脂或界面受損，但不是每種損傷都會變白。原文拿鋁凹痕作對比也太絕對：金屬沒有凹痕仍可能有裂紋、接頭或背面損傷。共同原則是外觀正常不能單獨證明結構完好。",
            "自編情境：工具掉落到翼面後，記錄撞擊位置與已知經過，交由熟悉該結構的人員依適用維修資料評估，必要時採用相應非破壞檢查。不能由「摸起來平整」或自行敲擊的感覺決定可繼續飛行。"
          ],
          "figure": {
            "label": "Figure 3-16 · Impact damage visibility",
            "page": "3-11",
            "url": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=11"
          },
          "check": {
            "question": "表面只有小痕跡，修理範圍就一定很小嗎？",
            "answer": "不一定。內部分層、核心壓碎或背面損傷可能超過可見邊界，應依適用資料完成評估。"
          }
        },
        {
          "title": "夾層結構、進水與臨時遮蓋",
          "paragraphs": [
            "Sandwich structure 用兩側面板與較厚、較輕的核心形成高彎曲剛性的結構。核心可能是蜂巢或其他材料，除了隔開面板，也參與剪力傳遞與支承面板；不能把它當成完全不承力的空心填充物。",
            "破孔可能使水進入核心，增加後續損傷與修理難度。原書所說膠帶遮蓋是暫時防護概念，並非結構修復，也不代表可在該狀態飛行。覆蓋材料、暫存及後續處置應依該機維修資料決定，不能用填土或膠帶掩蓋損傷取代評估。"
          ]
        },
        {
          "title": "溫度與塗裝：原文數字是例子，不是通用紅線",
          "paragraphs": [
            "原文以 150 °F（約 66 °C）說明部分 epoxy 在升溫時可能弱化，又比較黑色表面約 220 °F（104 °C）與白色表面約 140 °F（60 °C）的情境。這些數字用來提醒太陽輻射可使表面比環境熱，不是所有複材的核准溫度限制。",
            "耐熱能力取決於樹脂系統、固化狀態、含水情況及受熱時間。重漆應依製造商核准的顏色與塗裝規範；煞車火災即使很快撲滅，也可能使附近蒙皮、起落架或整流罩受熱損傷，不能只看火已熄滅或外形尚好。"
          ]
        },
        {
          "title": "除漆和修理：不能把教科書概述當成施工程序",
          "paragraphs": [
            "PHAK 強烈提醒化學除漆劑可能損害複材，並列舉打磨等方式。實際可用的化學品、機械處理與移除深度必須查該部件維修程序；打磨本身也可能切斷承力纖維，並不是任何砂紙、噴砂或力道都安全。",
            "修復的目標是恢復所需結構能力與功能，不只是讓表面看起來平順。損傷是否在允許範圍內、需修理還是更換、用什麼檢查驗證，都需依適用資料判定。本站解說不提供自行製作結構補片或放行飛行的判定方法。"
          ]
        }
      ],
      "references": [
        {
          "title": "FAA AC 20-107B Change 1 · 複合結構設計、環境與損傷容許",
          "url": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_20-107B_with_change_1.pdf",
          "checked": "2026-09-12"
        }
      ],
      "currentNote": "查閱 2026-09-12：PHAK 是入門概述。無凹痕不等於無損傷；複材也可能在循環負載與環境作用下劣化。溫度、塗裝、化學品及損傷處置必須依該機型與部件適用的維修資料，不把書中示例當成通用放行限制。AC 20-107B 是認證指引，不是個別部件的修理程序。"
    },
    {
      "id": "fluids",
      "english": "Fluid Spills on Composites",
      "title": "液體接觸與材料相容性",
      "parent": "composites",
      "locator": "PHAK C 版 · 3-11",
      "printedPage": "3-11",
      "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=11",
      "paragraphs": [
        "燃油、油液或液壓液是否影響複材，取決於樹脂、塗層、液體成分與接觸條件。原文說明某些現代環氧系統能承受常見油液接觸，但也指出不同聚酯樹脂與含乙醇燃油可能有相容性問題。",
        "不能從「某些玻璃纖維油箱可直接接觸燃油」推論任何複材油箱都可加任何汽油。自編例：發現潑灑後，先辨識液體及接觸部位，再依該機型資料處置；表面漆色看似正常，並不是對所有材料和情況的充分證明。"
      ],
      "lessonBlocks": [
        {
          "title": "樹脂相容性與燃油核准，是兩個問題",
          "paragraphs": [
            "原文指出某些現代 epoxy 系統對燃油、滑油與液壓液有良好耐受性，也提醒部分 polyester 系統對含乙醇汽油可能不相容。不能把它記成「epoxy 永遠耐所有油」，因為液體成分、溫度、暴露時間、密封材料與塗層都會影響結果。",
            "「油漆沒壞，下面就沒事」只能視為原文的概括，不能取代相容性與檢查資料。遇到洩漏先依適用程序處理並確認來源；更不能由某油箱材料耐受某燃料，就推定該飛機或引擎獲准使用那種燃料。"
          ],
          "check": {
            "question": "油箱樹脂耐得住含乙醇汽油，就能加進飛機嗎？",
            "answer": "不能。材料相容性只是其中一項，還須符合該航空器、引擎及燃油系統的核准燃料要求。"
          }
        }
      ],
      "references": [
        {
          "title": "FAA AC 20-107B Change 1 · 複合結構設計、環境與損傷容許",
          "url": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_20-107B_with_change_1.pdf",
          "checked": "2026-09-12"
        }
      ]
    },
    {
      "id": "lightning",
      "english": "Lightning Strike Protection",
      "title": "雷擊防護與導電路徑",
      "parent": "composites",
      "locator": "PHAK C 版 · 3-11",
      "printedPage": "3-11",
      "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=11",
      "paragraphs": [
        "雷擊防護需要把電流經設計的路徑分散並導出，降低局部損害，同時保護燃油系統與航電。鋁蒙皮具有良好導電性，玻璃纖維偏向絕緣，碳纖維雖導電卻不能直接視同鋁，因此複材外層常需另設金屬網等導電安排。",
        "修理具有雷擊防護的區域時，承力結構與導電防護都必須納入，不能只恢復表面形狀。原文亦提到內置天線需要與防護網及材料的無線電特性配合；這說明結構修理可能同時影響通訊與電氣防護。"
      ],
      "lessonBlocks": [
        {
          "title": "導電路徑與金屬網：不能只補回外形",
          "paragraphs": [
            "雷擊防護要控制電流通過航空器的路徑，分散局部電流密度，並減少對燃油系統、電子裝備及結構的不利影響。原文以「讓能量離開」概括過程，但不是只有把機殼做成導體就能保護所有設備；接合與電磁耦合也需處理。",
            "玻璃纖維通常不導電，碳纖維雖可導電，仍與鋁不同，因此複材外層可加入導電金屬網或箔等。原書的鋁網／銅網搭配是常見例子，不是讓維修者自由互換的選材規則。修復受保護區域時，也須恢復適用的導電層、連續性與表面系統，不能只修好纖維層。",
            "玻璃纖維常能讓某些無線電頻率穿透，適合設計天線罩或內藏天線區；碳纖維與金屬網可能遮蔽或改變訊號。原文的 antenna window 是經設計的區域，不能為了改善收訊自行割開導電網。"
          ]
        }
      ],
      "references": [
        {
          "title": "FAA AC 20-107B Change 1 · 複合結構設計、環境與損傷容許",
          "url": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_20-107B_with_change_1.pdf",
          "checked": "2026-09-12"
        }
      ]
    },
    {
      "id": "future",
      "english": "The Future of Composites",
      "title": "複合材料的發展方向",
      "parent": "composites",
      "locator": "PHAK C 版 · 3-12",
      "printedPage": "3-12",
      "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=12",
      "paragraphs": [
        "本節以設計彈性、耐腐蝕特性及可能達成的高強度重量比，說明複材為何持續受到航空設計採用。從滑翔機到運輸機，材料的價值要和製造、檢查及全壽命維護能力一起評估，不能單靠外觀或新穎程度判斷。",
        "原書使用的「未來」是該段文字的時代觀點，並非本站對最新產業趨勢的調查。自編閱讀問題：若一種材料更輕但需要不同損傷檢測方法，使用者和維修體系需要增加哪些能力，才能實際取得設計帶來的好處？"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 3-17 · 成熟應用仍需要完整工程",
          "paragraphs": [
            "這張圖把複材在不同尺寸航空器上的應用放在一起，說明它不只適用滑翔機，也能成為大型航空器結構的一部分。不要單由外觀判斷整架飛機都是同一種材料，或所有零件使用同一鋪層。",
            "本節的未來展望應讀成設計潛力：曲面成形、比強度及抗腐蝕特性提供更多選項，同時需要可重複製造、檢查及修理的配套。材料選擇是在性能、維護、成本與風險間取得平衡。"
          ],
          "figure": {
            "label": "Figure 3-17 · Composite applications",
            "page": "3-12",
            "url": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=12"
          }
        }
      ]
    },
    {
      "id": "instrumentation",
      "english": "Instrumentation: Moving into the Future",
      "title": "從傳統儀表到整合顯示",
      "parent": null,
      "locator": "PHAK C 版 · 3-12",
      "printedPage": "3-12",
      "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=12",
      "paragraphs": [
        "電子飛行顯示把原本分散的資訊整合到螢幕，常見主飛行顯示器 PFD 與多功能顯示器 MFD 分別呈現核心飛行資訊及地圖、系統等資料，實際配置依機型而異。顯示方式變了，資訊仍可依性能、控制與導航三種功能分類。",
        "一個螢幕可能同時顯示多種功能，不代表它們都由同一種感測器取得，也不表示備援一定獨立。學習玻璃座艙時應連結第二章的自動化管理：辨識資料來源、模式與失效提示，並理解何時需要交叉核對其他資訊。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 3-18 · PFD、MFD 是畫面分工，不是資料來源",
          "paragraphs": [
            "PFD 以主要飛行資訊為核心，常整合姿態、空速、高度及航向等；MFD 可呈現地圖、航路、發動機或系統資訊，依安裝配置而定。位置與功能可因機型改變，不能只依螢幕在中央就判定它只能當 MFD。",
            "EFD 把資訊整合在螢幕，但後面仍有空氣資料、姿態航向、導航接收器與供電等來源。兩個螢幕可能共享感測器或電源，因此畫面都亮著且數值一致，也不一定代表兩份獨立證據。",
            "原書把固態儀器的可靠性與安全收益連在一起，實際安全仍取決於整體設計、備援、模式辨認與訓練。要熟悉資料失效旗標、顯示切換及備用儀表；螢幕較新或資訊較多，不保證飛行員不會選錯模式或忽略異常。"
          ],
          "figure": {
            "label": "Figure 3-18 · Analog and digital displays",
            "page": "3-13",
            "url": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=13"
          }
        },
        {
          "title": "Performance、control、navigation：同一畫面可以屬於三類",
          "paragraphs": [
            "這是按照資訊用途分類，不是把每個實體儀表永遠放進互不重疊的盒子。PFD 可以同時顯示姿態、空速與 CDI；你仍需知道當下用哪個資訊回答哪個問題。"
          ],
          "table": {
            "caption": "三類儀表的閱讀順序",
            "headers": [
              "類別",
              "先問什麼",
              "典型資訊"
            ],
            "rows": [
              [
                "Control",
                "我設定了什麼姿態與動力？",
                "姿態、轉速／歧管壓力或其他動力指示。"
              ],
              [
                "Performance",
                "飛機實際達到什麼結果？",
                "空速、高度、垂直速度、轉彎等。"
              ],
              [
                "Navigation",
                "相對預定航路或導航參考在哪裡？",
                "航道偏差、方位、距離、下滑道偏差。"
              ]
            ]
          },
          "check": {
            "question": "拉高機頭後，姿態指示顯示抬頭，就代表已經穩定爬升嗎？",
            "answer": "不代表。姿態是控制資訊，仍須交叉檢查空速、高度和垂直速度等實際結果。"
          }
        }
      ]
    },
    {
      "id": "performance",
      "english": "Performance Instruments",
      "title": "性能儀表：實際達成的結果",
      "parent": "instrumentation",
      "locator": "PHAK C 版 · 3-12",
      "printedPage": "3-12",
      "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=12",
      "paragraphs": [
        "性能儀表反映飛機實際達成的狀態，例如空速、高度、垂直速度及航向等資訊。這裡的 performance 並不只指起飛距離或最大速度，而是用來回答目前飛機的表現如何，和控制設定是否達到想要的結果。",
        "自編例：設定爬升姿態與功率後，仍要查看空速及垂直速度等變化，才能確認實際爬升狀態。性能資訊可能有反應延遲或感測限制，因此不能用一個瞬間讀值取代持續交叉檢查。"
      ],
      "supplementalHeading": true,
      "lessonBlocks": [
        {
          "title": "Figure 3-19 · 結果要交叉檢查，不能只盯一個數字",
          "paragraphs": [
            "原書把空速、高度、VSI、航向與轉彎等指示放在 performance 範疇，是用它們觀察航空器正在達到的狀態。自編例：動力增加且機頭抬高後，若空速快速下降而爬升率未如預期，不能只因姿態設定看似正確就假定性能正常。",
            "不同指示有不同來源與延遲：VSI 不一定立即反映剛開始的變化；航向指示不是對地航跡；AOA 與 slip/skid 各有其感測與用途，不能把它們都當成直接量測「爬升能力」的儀表。學習時用多項一致資訊形成判斷。"
          ],
          "figure": {
            "label": "Figure 3-19 · Performance instruments",
            "page": "3-14",
            "url": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=14"
          }
        }
      ]
    },
    {
      "id": "control",
      "english": "Control Instruments",
      "title": "控制儀表：姿態與功率",
      "parent": "instrumentation",
      "locator": "PHAK C 版 · 3-13",
      "printedPage": "3-13",
      "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=13",
      "paragraphs": [
        "控制儀表呈現姿態與功率的變化，讓機師能精確建立與調整控制設定。姿態指示器說明飛機如何傾斜，適用的動力儀表反映功率相關參數；本分類不是指所有能被手操作的旋鈕或控制面。",
        "機頭抬高和功率設定完成，並不能單靠這兩項就知道飛機現在的高度或空速。自編例：相似姿態在重量、阻力或其他條件不同時可能產生不同結果，因此要用性能儀表驗證，形成設定與結果的回饋。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 3-20 · 姿態加動力，仍須驗證性能",
          "paragraphs": [
            "Control instruments 提供姿態與動力設定資訊。姿態儀顯示機體相對地平的姿態；動力指示可能包括轉速、歧管壓力或適用的渦輪發動機參數。油門桿位置本身不等同已經產生所需推力。",
            "相同姿態與動力設定，在不同重量、高度、構型及環境下不一定得到同樣空速或爬升率。因此使用控制資訊設定初始狀態，再由性能資訊驗證並調整。姿態儀上抬頭的角度也不等於迎角，因為迎角還取決於相對來流方向。"
          ],
          "figure": {
            "label": "Figure 3-20 · Control instruments",
            "page": "3-15",
            "url": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=15"
          }
        }
      ]
    },
    {
      "id": "navigation",
      "english": "Navigation Instruments",
      "title": "導航儀表：相對預定路徑的位置",
      "parent": "instrumentation",
      "locator": "PHAK C 版 · 3-13",
      "printedPage": "3-13",
      "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=13",
      "paragraphs": [
        "導航儀表呈現航空器相對於選定導航設施、定位點或航道的位置，資訊可包括方位、距離、航道偏差與下滑道偏差。它們可能使用 GPS、VOR、NDB 或 ILS 等不同來源；同一顯示器呈現的指針也可能因所選來源而改變意義。",
        "導航偏差回答相對於目標路徑在哪裡，不直接告訴你目前姿態或應施加多少操縱量。自編例：看到偏差後，先確認選定的航道、訊號來源和有效性，再結合飛行狀態修正；詳細判讀與程序在導航章節繼續學習。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 3-21 · 導航先確認來源與參考",
          "paragraphs": [
            "CDI、HSI、bearing pointer 等是呈現資訊的方式；GPS、VOR、NDB／ADF 或 ILS 則涉及訊號來源。看到同一根指針，不代表它永遠來自同一設備。先確認選用來源、頻率或航點、選定航道及有效旗標，再解讀偏差。",
            "Course deviation 告訴你相對選定航道的位置；bearing 告訴你指向某個參考的方向；heading 是機頭所指，track 是實際對地移動方向。受側風影響時，指向航點並不必然能沿所選航道飛行；也不能把 bearing pointer 的偏轉當成 CDI 的航道偏差。"
          ],
          "figure": {
            "label": "Figure 3-21 · Analog and digital navigation indications",
            "page": "3-16",
            "url": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=16"
          }
        },
        {
          "title": "Figure 3-22 · 橫向、垂直引導與有效性",
          "paragraphs": [
            "ILS localizer 提供橫向引導，glideslope 提供相對下滑道的垂直偏差。數位顯示可以把它們整合到姿態畫面，但數位化不會取消來源辨認與有效性檢查。圖中的截獲過程應與核准程序及第 16 章導航知識一起閱讀。",
            "GPS 進場也可能提供垂直引導，但其核准模式、完整性及最低標準並不因畫面類似就與 ILS 相同。失效旗標、錯誤來源或不適用的模式，不能靠「指針在中央」彌補；訊號必須有效且支援所需操作。"
          ],
          "figure": {
            "label": "Figure 3-22 · Glideslope interception indications",
            "page": "3-16",
            "url": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=16"
          }
        }
      ]
    },
    {
      "id": "gps",
      "english": "Global Positioning System (GPS)",
      "title": "GPS 定位原理與使用限制",
      "parent": null,
      "locator": "PHAK C 版 · 3-13",
      "printedPage": "3-13",
      "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=13",
      "paragraphs": [
        "GPS 接收器利用多顆衛星訊號解算位置；原文用三顆衛星與二維、四顆以上與三維定位的入門模型介紹。實際解算還涉及接收器時鐘誤差與衛星幾何，三顆衛星的二維解通常需要高度等額外約束，不能把衛星數量當成定位品質的唯一判準。",
        "能顯示經緯度不等於已符合特定航空導航用途的完整性與設備要求。自編例：移動地圖上有飛機符號時，仍應確認資料有效性和設備提示；本節建立定位概念，航空使用方式與限制應搭配第十六章、適用 AIM 及設備文件。"
      ],
      "references": [
        {
          "title": "GPS.gov：定位與時間解算原理",
          "url": "https://archive.gps.gov/cgsic/meetings/2008/kelley.pdf",
          "checked": "2026-09-10"
        },
        {
          "title": "GPS.gov：定位精度的影響因素",
          "url": "https://www.gps.gov/gps-accuracy-0",
          "checked": "2026-09-10"
        },
        {
          "title": "FAA · GPS How It Works",
          "url": "https://www.faa.gov/about/office_org/headquarters_offices/ato/service_units/techops/navservices/gnss/gps/howitworks",
          "checked": "2026-09-12"
        },
        {
          "title": "FAA AIM · Air Navigation（GPS、完整性與導航用途）",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html",
          "checked": "2026-09-12"
        }
      ],
      "lessonBlocks": [
        {
          "title": "四顆衛星為何是基本三維定位的重要數字？",
          "paragraphs": [
            "接收器利用衛星訊號的傳播時間估算距離，但機載接收器時鐘不是與衛星時鐘完美同步。因此基本解算除了三個位置座標，還要解接收器時鐘偏差，通常需要至少四顆具有合適幾何分布的衛星。",
            "原文提到三顆可做二維定位，必須理解成加入高度等約束的情況，不是任意三顆都能提供完整航空三維定位。衛星數量也不是唯一條件：幾何、訊號品質與設備解算都影響結果。"
          ]
        },
        {
          "title": "定位、完整性與可用操作分開看",
          "paragraphs": [
            "GPS 能在各種天氣中提供全球服務，不表示每一時刻、每個位置與每台接收器都不會中斷。遮蔽、干擾、欺騙及設備故障都可能影響導航。GPS 計算的高度也不能直接取代所有以氣壓高度為基準的飛行操作。",
            "RAIM 用多餘量測檢查一致性；典型故障偵測需五顆衛星，或四顆加適用的氣壓高度輔助。具故障排除功能的典型需求更高。這是概念辨識，不是只數畫面衛星就能判定某進場可用；還須看設備、完整性狀態與核准用途。",
            "自編情境：地圖仍顯示航點，但完整性告警出現。此時不能把「還有位置圖示」當成所需導航能力仍成立的證據，應依 AFM／補充手冊與適用程序處理。更多來源、RAIM 與備援導航在第 16 章展開。"
          ],
          "check": {
            "question": "收到四顆衛星訊號，就必然能執行任何 GPS 進場嗎？",
            "answer": "不能。基本定位不等於所需精度、完整性、設備核准與操作條件全部滿足。"
          }
        }
      ]
    },
    {
      "id": "summary",
      "english": "Chapter Summary",
      "title": "全章統整與練習",
      "parent": null,
      "locator": "PHAK C 版 · 3-13",
      "printedPage": "3-13",
      "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=13",
      "paragraphs": [
        "讀完本章應能沿著機身、機翼、尾翼、起落架與動力裝置說明功能及連接關係，再比較桁架、硬殼式與半硬殼式的承力方式。複材部分要同時記得纖維與基材的分工、設計優勢及外觀難以顯示全部損傷的限制。",
        "自編練習：選一張熟悉機型的圖，指出五個主要部件，再選三項座艙資訊分成控制、性能與導航，說明各自回答什麼問題。把尚不能確認的構造與設備記在筆記，對照原文及該機型資料；本章末的 3-14～3-16 尚有儀表比較圖可一併閱讀。"
      ],
      "lessonBlocks": [
        {
          "title": "把第三章串成一次閱讀檢核",
          "paragraphs": [
            "先用部件與載荷路徑描述飛機，再解釋其材料與結構如何共同承載；接著說明損傷為什麼不能只看外觀，最後用控制、性能與導航三類資訊描述如何觀察飛行狀態。這些是後續空氣動力、系統、儀表和重量平衡章節的基礎。",
            "可以拿一張航空器照片，標出主部件與可能的控制面，再找官方手冊確認自己的推測。模擬器能幫助練習辨認儀表與資訊關係，但不會替你證明實機結構適航、材料無損或某項維修合格。"
          ]
        }
      ]
    }
  ],
  "confusions": [
    {
      "title": "外皮與裝飾板",
      "clarification": "承力外皮可能參與傳遞載荷。",
      "example": "半硬殼式的蒙皮不是單純包住骨架。"
    },
    {
      "title": "看不見與不存在",
      "clarification": "外觀檢查可能不足以排除內部損傷。",
      "example": "複合材料受撞後可能需要特定檢查。"
    },
    {
      "title": "材料與結構分類",
      "clarification": "複合材料描述材料系統；半硬殼式描述承力安排，兩者不是必然互斥的類別。",
      "example": "知道一架飛機使用碳纖維，仍需確認外皮與內部構件如何分擔載荷。"
    },
    {
      "title": "控制、性能與導航儀表",
      "clarification": "姿態與功率設定、飛機實際表現、相對導航路徑的位置，回答的是不同問題；同一螢幕可以整合三類資訊。",
      "example": "抬頭姿態不保證正在爬升，航道指針置中也不表示高度正確。"
    },
    {
      "title": "螺距與迎角",
      "clarification": "螺距是幾何前進距離的概念，迎角是槳葉與相對氣流之間的角度。",
      "example": "幾何設定不變時，飛行速度改變仍可能改變槳葉迎角。"
    }
  ],
  "scenario": "自編案例：學員看到機翼表面有一處新凹痕。較有用的紀錄包含位置、大小、是否接近接合、發現時間及是否有已知碰撞，而不是只寫「應該沒事」。",
  "question": "半硬殼式結構的載荷主要如何承受？",
  "options": [
    "只有座椅承受",
    "外皮與內部結構共同承受",
    "外皮完全不受力"
  ],
  "answer": 1,
  "explanation": "半硬殼式使用內部構件強化承力外皮，兩者共同工作。",
  "verified": true,
  "reader": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=72",
  "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=72",
  "detailMode": "outline",
  "checked": "2026-09-10",
  "coverageNote": "沿原書目錄保留 30 節，並在 3-2～3-13 的主題內加入深入講解、比較表及自編理解練習；Figure 3-1～3-22 附讀圖指引與官方 PDF 頁碼連結（圖表延伸至 3-16）。補充觀念與版本修正分開標示，不是原文逐字翻譯或機型維修程序。"
};
