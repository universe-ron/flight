export const chapter={
  "id": "phak25c-9",
  "number": 9,
  "title": "飛行手冊與相關文件",
  "english": "Flight Manuals and Other Documents",
  "section": "第 9 章；9-1～9-13，全章目錄逐節講解",
  "goal": "學會定位機型限制、程序、性能與適航資料。",
  "primer": "AFM／POH 涉及特定航空器的程序、限制與資料。先確認機型、序號適用範圍、修訂及裝備狀態，再使用裡面的內容；相似型號的手冊不能自動替代。",
  "terms": [
    "AFM · 飛行手冊",
    "POH · 操作手冊",
    "AD · 適航指令"
  ],
  "prompts": [
    "用本機手冊或學習範例找出一項限制、相應程序及一份補充，說明如何核對版本與適用性。",
    "設想年度仍有效但一項設備失效，列出需查的文件、規則及維修紀錄，說明為何不能只看年度日期。"
  ],
  "keyPoints": [
    "先核對 AFM／POH 的適用性、核准部分、修訂與補充，再使用限制與程序。",
    "登記、適航證書、檢查有效期與當下安全狀態是不同層次。",
    "年度與百小時的適用條件、曆月與使用時間計算需分開。",
    "失效設備不能只貼標籤；MEL 或 §91.213(d) 路徑各有條件。",
    "預防性維修工作權限、恢復使用簽放、AD 與紀錄需逐項核對。"
  ],
  "detailSections": [
    {
      "id": "introduction",
      "english": "Introduction",
      "title": "導論：文件如何支持飛行決策",
      "parent": null,
      "locator": "PHAK C 版 · 9-1",
      "printedPage": "9-1",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=1",
      "paragraphs": [
        "本章以美國 FAA 制度說明飛行手冊、登記、適航與維修文件。閱讀文件不是只確認它存在，而是核對它是否適用這架飛機、是否有效，以及是否支持今天計畫進行的操作。",
        "PHAK 提供共同知識，實際機型的核准資料提供操作依據，現行法規則決定適用要求。自編例：網站上的同型機 POH 可以協助學習，但不能直接替代本機最新重量平衡、改裝補充與限制。"
      ],
      "lessonBlocks": [
        {
          "title": "文件各自回答一個問題，再共同支持可飛判斷",
          "paragraphs": [
            "手冊說明本機怎麼操作、限制在哪裡；登記文件處理身分，適航證書處理認證，維修紀錄則證明檢查與工作狀態。這些文件互相補充，不能以一張證書取代其餘條件，也不能只因文件齊全就忽略眼前的故障。",
            "本章採 FAA 制度，從手冊結構一路連到文件、維修與操作責任。原書的表格與證書是讀圖範例，計算例為學習用途；法規補充標明查閱日期。實際判斷須以適用航空器、操作、現行規定與核准文件為準。"
          ],
          "table": {
            "caption": "從問題找到文件",
            "headers": [
              "問題",
              "優先查找",
              "再核對"
            ],
            "rows": [
              [
                "這架飛機能怎麼飛？",
                "本機 AFM／POH、限制與補充",
                "實際裝備及改裝"
              ],
              [
                "身分與證明有效嗎？",
                "登記與適航文件",
                "有效期、條件及限制"
              ],
              [
                "檢查和缺陷處理了嗎？",
                "維修紀錄、AD 狀態",
                "當下狀況與當次操作"
              ],
              [
                "一項設備失效還可起飛嗎？",
                "適用 MEL／§91.213 路徑",
                "資格、程序、紀錄與安全判斷"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "afm",
      "english": "Airplane Flight Manuals (AFM)",
      "title": "AFM、POH 與一般參考手冊",
      "parent": null,
      "locator": "PHAK C 版 · 9-1",
      "printedPage": "9-1",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=1",
      "paragraphs": [
        "AFM 是經核准的飛行手冊，POH 則是製造商編製的操作手冊，可能包含被核准為 AFM 的部分。封面叫 POH 並不表示每頁都是核准內容，也不表示所有年代的飛機都採相同格式。",
        "一般 owner／information manual 可作概念參考，但若未反映本機適用性、修訂與設備，就不能當成其所需飛行手冊。閱讀時先核對核准聲明、序號範圍與補充文件，再使用限制和程序。"
      ],
      "supplementalHeading": true,
      "references": [
        {
          "title": "14 CFR §91.9",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-A/section-91.9",
          "checked": "2026-09-18"
        }
      ],
      "lessonBlocks": [
        {
          "title": "AFM、POH 與 information manual 的地位不同",
          "paragraphs": [
            "AFM 是經核准、供適用航空器使用的飛行手冊；POH 是製造商編製的操作手冊，可包含被核准為 AFM 的內容。先讀核准聲明與適用性，再分辨哪些頁面具核准地位，不能只靠書名或出版年份判斷。",
            "Owner／information manual 可用來熟悉同型機，但未必維持本機所需修訂與配置，不能直接代替所需的適用、最新資料。GAMA 格式讓常見輕型機手冊較容易查找，卻不是每架飛機、每個年代都只有同一種法定格式。"
          ],
          "table": {
            "caption": "三種常見文件",
            "headers": [
              "文件",
              "主要用途",
              "使用前確認"
            ],
            "rows": [
              [
                "AFM",
                "核准操作資料",
                "適用機型／序號及現行修訂"
              ],
              [
                "POH",
                "製造商操作手冊，可含 AFM",
                "核准聲明與核准部分"
              ],
              [
                "Owner／information manual",
                "一般參考與學習",
                "不能直接取代本機所需文件"
              ]
            ]
          }
        },
        {
          "title": "用九節結構找資料，再回到真正的適用版本",
          "paragraphs": [
            "典型順序為一般、限制、緊急、正常、性能、重量平衡／設備、系統、處理保養、補充；安全提示可作選用第十節。先找到資料的位置，再核對同一架飛機的版本，會比把所有數字背在一起更可靠。",
            "§91.9 要求遵守適用核准手冊、標示及標牌中的操作限制，也規定適用資料的機上可用性。不同年代與認證基礎的文件要求可能不同，不可把「沒有一本叫 POH 的書」與「沒有任何限制」畫上等號。"
          ],
          "check": {
            "question": "下載同型號最新 POH，就一定能取代本機文件嗎？",
            "answer": "不能。仍須核對本機序號、核准部分、實際設備、改裝補充與重量平衡資料。"
          }
        }
      ]
    },
    {
      "id": "preliminary",
      "english": "Preliminary Pages",
      "title": "前置頁：適用性與修訂狀態",
      "parent": "afm",
      "locator": "PHAK C 版 · 9-2",
      "printedPage": "9-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=2",
      "paragraphs": [
        "前置頁通常包含機型識別、適用序號、核准聲明、目錄及修訂資訊，幫助確認拿到的是哪一版資料。相同機型名稱仍可能有不同引擎、儀表、設備或改裝，不能只比對封面照片。",
        "以有效頁清單、修訂紀錄及適用補充資料核對完整性，比單看一本書是否新印更可靠。自編例：主手冊已更新但仍夾著舊版自動駕駛補充，使用程序前必須先釐清適用版本。"
      ],
      "lessonBlocks": [
        {
          "title": "適用性、修訂紀錄與有效頁清單一起讀",
          "paragraphs": [
            "檢查型號、序號適用範圍、登記識別、核准聲明、修訂日期及有效頁清單。書封看起來一樣不代表內容適用同一配置；散頁式手冊也可能只換了部分頁面，需逐項確認更新完整。",
            "原書以標題頁的登記與序號提醒本機適用性；實務上仍要依該手冊的識別制度確認，不能只看某一欄是否印字。自編例：同一型號換裝自動駕駛後，主手冊未改名，但補充、限制及相關檢查單可能已不同。"
          ]
        }
      ]
    },
    {
      "id": "general",
      "english": "General (Section 1)",
      "title": "一般資料與術語",
      "parent": "afm",
      "locator": "PHAK C 版 · 9-2",
      "printedPage": "9-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=2",
      "paragraphs": [
        "一般資料介紹機體、引擎、尺寸、容量與術語，建立閱讀後續表格所需的共同語言。翼展與高度可協助地面空間判斷，符號、單位及速度定義則直接影響操作和性能計算。",
        "同一縮寫或容量可能有特定定義，例如總燃油量與可用燃油量不能互換。自編練習：先查手冊如何定義基本空重及速度單位，再讀重量平衡和起飛表，避免拿對數字卻用錯意義。"
      ],
      "lessonBlocks": [
        {
          "title": "尺寸、容量與術語是後續計算的輸入",
          "paragraphs": [
            "翼展、機高、輪距、轉彎半徑與螺旋槳離地間隙等可支援地面規劃；引擎、燃油與速度定義則支援操作。讀數字時連同單位、條件與用語一起讀，特別區分總容量、可用量及不同空速基準。",
            "自編例：標示總燃油 50 gal、可用 48 gal，不能把 50 gal 全部視為可供飛行計畫使用。這只是術語練習，實際還需確認美制或英制加侖、加油限制與本機資料。"
          ]
        }
      ]
    },
    {
      "id": "limitations",
      "english": "Limitations (Section 2)",
      "title": "限制與核准操作範圍",
      "parent": "afm",
      "locator": "PHAK C 版 · 9-2",
      "printedPage": "9-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=2",
      "paragraphs": [
        "限制章列出航空器、動力與設備允許操作的邊界，包括速度、重量、重心、負荷與操作種類。這些限制需連同核准補充、標示及適用 AD 一起讀，不能只記儀表紅線。",
        "建議值、正常程序與限制各有不同作用，不能因某次操作看似順利就推翻核准限制。自編例：某設備可在系統說明中找到，不等於飛機已獲准在所有需要該設備的環境使用。"
      ],
      "references": [
        {
          "title": "14 CFR §91.9",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-A/section-91.9",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "限制章定義允許範圍，不只是紅線集合",
          "paragraphs": [
            "速度、功率、重量、重心、載荷與操作種類各有邊界，可能附帶時間、構型或高度條件。查限制時也要看有效補充與 AD，因為後續改裝或安全要求可能改變原始規定。",
            "自編情境：儀表全在綠弧、總重低於上限，但行李艙超載或重心越界，仍不符合限制。單項正常只能證明該項，不能替代整體核對。"
          ]
        }
      ]
    },
    {
      "id": "airspeed",
      "english": "Airspeed",
      "title": "空速限制與條件",
      "parent": "limitations",
      "locator": "PHAK C 版 · 9-2",
      "printedPage": "9-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=2",
      "paragraphs": [
        "本節將空速色弧、徑向線及圖表連到核准限制，常見 VNE、VNO、VFE 等各有不同目的。限制可能依高度、重量、襟翼位置或構型而改變，需讀附註而非只看表上的顏色。",
        "自編例：襟翼第一段允許的速度可能高於全襟翼限制，白弧並不完整描述所有操作細節。VMC 也不能當成單發爬升保證，速度數值必須連同認證條件與當前性能一起理解。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 9-1 · 色弧連到文字限制與附註",
          "paragraphs": [
            "白弧通常由 VS0 至 VFE，綠弧由 VS1 至 VNO，黃弧由 VNO 至 VNE，紅線為 VNE。VNO 的最後一碼是字母 O。下端失速速度各有指定重量、構型及飛行條件，不能當成任意載荷下的失速界線。",
            "黃弧僅限平穩空氣並謹慎操作；白弧也不一定描述全部襟翼角度的限制。還需查未完整畫在表上的 VA、VLO／VLE 及適用高度限制。圖中刻度只屬範例，不直接拿來操作訓練機。"
          ],
          "figure": {
            "label": "Figure 9-1 · Single-engine airspeed indicator",
            "page": "9-3",
            "url": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=3"
          }
        },
        {
          "title": "Figure 9-2 · 雙發機紅徑線與藍線的意義",
          "paragraphs": [
            "紅色徑向線 VMC 表示特定認證條件下的最低控制速度；藍線 VYSE 表示單發最佳爬升率速度。它們與 VNE 的紅線不同，也不是所有重量、高度或故障情境都能保證控制與爬升的通用數字。",
            "即使在藍線速度，受重量、密度高度、阻力與可用功率影響，飛機仍可能下沉。圖示說明標記的用途，實際單發操作速度、程序與性能需一起查本機手冊。"
          ],
          "figure": {
            "label": "Figure 9-2 · Multi-engine airspeed indicator",
            "page": "9-3",
            "url": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=3"
          },
          "check": {
            "question": "保持藍線是否保證能越過前方障礙？",
            "answer": "不保證。速度只是性能計算的一個條件，還需查單發爬升能力、構型及障礙需求。"
          }
        }
      ]
    },
    {
      "id": "powerplant",
      "english": "Powerplant",
      "title": "動力裝置限制",
      "parent": "limitations",
      "locator": "PHAK C 版 · 9-3",
      "printedPage": "9-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=3",
      "paragraphs": [
        "動力限制可包括起飛與連續功率、轉速、壓力、溫度、時間限制，以及燃油、滑油和螺旋槳適用規格。相同指示值在起飛與連續運轉情境下，允許的持續時間可能不同。",
        "有些轉速區間需要避免持續操作，並不只是不得超越最高 RPM。自編例：歧管壓力與轉速各自未超紅線，不一定代表其組合被允許，還需查手冊的組合限制與程序。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 9-3 · 壓力與溫度的上下限都重要",
          "paragraphs": [
            "動力限制不只有最大 RPM，還可包括滑油與燃油壓力、溫度、燃油及滑油規格、螺旋槳限制。圖中最小、最大與正常範圍提醒你：低於下限可能和超過上限一樣值得注意，不能只找最高紅線。",
            "綠弧代表指定正常範圍，仍須符合其他限制及程序。起飛功率和最大連續功率可能不同，特定範圍也可能有時間限制；原文「無任何限制」不能理解成只要在綠弧就沒有其他條件。"
          ],
          "figure": {
            "label": "Figure 9-3 · Minimum, maximum and normal operating range",
            "page": "9-3",
            "url": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=3"
          }
        },
        {
          "title": "Figure 9-4 · MAP 與 RPM 要配合動力型式判讀",
          "paragraphs": [
            "圖中的歧管壓力與轉速表是常見往復引擎、定速槳配置。MAP 表示進氣歧管壓力，不是直接量測馬力；RPM 也只描述轉速。判斷功率要連同設定、環境及手冊資料。",
            "不能把這組儀表套到所有定速螺旋槳或旋翼系統：渦輪機可能主要使用扭矩、溫度與轉子轉速等資訊。即使 MAP 和 RPM 各未超限，也要確認兩者組合及持續運轉範圍獲允許。"
          ],
          "figure": {
            "label": "Figure 9-4 · Manifold pressure gauge and tachometer",
            "page": "9-3",
            "url": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=3"
          }
        }
      ]
    },
    {
      "id": "weight-limits",
      "english": "Weight and Loading Distribution",
      "title": "重量與裝載分布限制",
      "parent": "limitations",
      "locator": "PHAK C 版 · 9-3",
      "printedPage": "9-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=3",
      "paragraphs": [
        "本節定義最大核准重量、重心範圍、基準面及適用裝載限制，回答「結果允許在哪裡」。實際計算方法和本機空重資料則通常在第六節，兩者必須配合使用。",
        "總重量合格仍可能超出重心或行李艙局部承重限制，燃油消耗也可能改變重心。自編練習：分別核對起飛與落地狀態，不要只因總重量小於上限就判斷整趟航程裝載合格。"
      ],
      "lessonBlocks": [
        {
          "title": "第二節給包線，第六節給本機計算資料",
          "paragraphs": [
            "限制章回答最大重量、重心前後界限、參考基準面與局部裝載限值。重量平衡章提供本機空重、力矩、設備與計算方法；先算出結果，再對照相應重量和構型的包線。",
            "自編例：總重 2,200 lb 雖低於假設上限 2,400 lb，但行李艙若超過其自己的限制，仍不能判定裝載合格。燃油消耗也會改變重量與重心，應核對起飛、航程和落地相關狀態。"
          ],
          "check": {
            "question": "總重合格就代表重心與各艙裝載都合格嗎？",
            "answer": "不代表。總重、重心包線與局部限制是不同檢查。"
          }
        }
      ]
    },
    {
      "id": "flight-limits",
      "english": "Flight Limits",
      "title": "機動與操作種類限制",
      "parent": "limitations",
      "locator": "PHAK C 版 · 9-4",
      "printedPage": "9-4",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=4",
      "paragraphs": [
        "飛行限制說明允許與禁止的機動、負荷因數、進入速度及操作種類，例如是否允許旋轉或特定結冰操作。核准類別與實際重量、重心、設備條件可能共同決定可做的機動。",
        "自編例：同型機某架可以作某項機動，不表示這架在目前裝載下也可以。應沿手冊限制、適用補充與標牌核對，避免把一般飛行技術文章當成機型核准證據。"
      ],
      "lessonBlocks": [
        {
          "title": "核准機動必須連同當前裝載與設備讀",
          "paragraphs": [
            "允許機動、進入速度、負荷因數與操作種類可受類別、重量、重心及構型限制。某型機在特定條件可作旋轉，不表示它每次裝載都可作，也不表示相似機型有同樣核准。",
            "結冰、夜間或 IFR 操作同樣要查本機核准、裝備狀態與規則。裝有加熱或導航設備本身不能代替操作核准，應由限制、補充及當次所需設備共同確認。"
          ]
        }
      ]
    },
    {
      "id": "placards",
      "english": "Placards",
      "title": "標牌與操作限制",
      "parent": "limitations",
      "locator": "PHAK C 版 · 9-4",
      "printedPage": "9-4",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=4",
      "paragraphs": [
        "標牌將與操作直接相關的要求放在使用者能看到的位置，可能來自原始設計、改裝或 AD。手冊限制章常重列其文字，但座艙與機體實際標牌的可讀性及適用性仍需檢查。",
        "標牌不全是同一種法律或操作功能，應先辨別警告、限制與失效設備標示。自編例：貼上 INOPERATIVE 只是在失效設備處理中的一環，不能讓本來必需的設備自動變成可缺少。"
      ],
      "references": [
        {
          "title": "14 CFR §91.9",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-A/section-91.9",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "Figure 9-5 · 座艙中的短句可能是必要限制",
          "paragraphs": [
            "標牌把燃油、機動、裝載或其他重要要求放在操作位置。它可能來自原始型別設計、改裝或 AD，應與手冊所列文字及本機配置相符，並維持可讀、適當的位置。",
            "限制標牌與 INOPERATIVE 標示有不同功能。後者只告訴使用者設備失效，不會自行產生延修權限；前者也不能因製造商另有一般安全提示而被忽略。圖中範例不代表可任意製作標牌來改變本機核准限制。"
          ],
          "figure": {
            "label": "Figure 9-5 · Aircraft limitation placards",
            "page": "9-4",
            "url": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=4"
          }
        }
      ]
    },
    {
      "id": "emergency",
      "english": "Emergency Procedures (Section 3)",
      "title": "緊急程序與詳解",
      "parent": "afm",
      "locator": "PHAK C 版 · 9-4",
      "printedPage": "9-4",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=4",
      "paragraphs": [
        "緊急章把發動機失效、火災及系統異常等情況整理成程序，部分另有簡要檢查單與擴充說明。擴充段落解釋辨識條件、原因與步驟依賴，平時應先理解而不只背動作順序。",
        "只有機型明確指定的立即動作才按訓練要求記憶執行，再於適當時機核對檢查單。自編例：不同機型的重新起動條件與控制配置不同，不能把一架飛機的口訣搬到另一架。"
      ],
      "lessonBlocks": [
        {
          "title": "簡要清單、立即動作與擴充說明各有用途",
          "paragraphs": [
            "緊急章可能先給依序執行的簡短清單，再以 amplified procedures 說明辨識條件、原因與附帶注意事項。平時應理解完整說明，才知道一項警示對應哪份程序，而不是只背控制開關的位置。",
            "僅對本機明確指定的立即／記憶項目按訓練執行，再於適當時機核對清單；不把所有檢查單都擅自變成記憶動作。Abnormal 與 emergency 的分類依製造商，不能只因標題寫異常就假定不需及時處理。"
          ]
        }
      ]
    },
    {
      "id": "normal",
      "english": "Normal Procedures (Section 4)",
      "title": "正常程序與階段檢查",
      "parent": "afm",
      "locator": "PHAK C 版 · 9-4",
      "printedPage": "9-4",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=4",
      "paragraphs": [
        "正常章依飛行階段組織檢查與操作，通常包含飛行前、起動、滑行、起飛、爬升、巡航、下降、落地及停機。簡要清單方便執行，詳解則補充何時、為何與如何判斷結果。",
        "動作完成與狀態確認是兩件事，設定開關後仍需看回饋是否符合預期。自編例：檢查單要求確認燃油來源，不能只摸一下選擇器而未讀定位和指示；實際流程依本機程序。"
      ],
      "lessonBlocks": [
        {
          "title": "完成操作後，還要確認回饋",
          "paragraphs": [
            "正常程序由飛行前到停機分階段排列，包含速度、設定、檢查與判斷。Checklists 提供執行時的核對，擴充說明提供平時學習所需的條件和理由，兩者應配合閱讀。",
            "自編例：某項要求「確認燃油來源」，動過選擇器不等於已確認定位、可用燃油與相應指示。被打斷後依程序恢復檢查，避免憑印象跳過項目；實際流程和檢查方式以本機資料為準。"
          ]
        }
      ]
    },
    {
      "id": "performance",
      "english": "Performance (Section 5)",
      "title": "性能資料與假設條件",
      "parent": "afm",
      "locator": "PHAK C 版 · 9-4",
      "printedPage": "9-4",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=4",
      "paragraphs": [
        "性能章提供起飛、爬升、巡航及落地等資料，讀表前需確認重量、壓力高度、溫度、風、跑道與操縱技術假設。表格內插與修正要依說明，不能自行把超出資料範圍的外推當成核准結果。",
        "自編例：越過障礙的起飛距離與地面滑跑長度是不同量，平整乾燥跑道數據也不能直接代表濕草地。本站的性能深入課程在 Chapter 11；原文此處寫 Chapter 10 Aircraft Performance 是交叉引用錯誤。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 9-6 · 先選 IAS／CAS 曲線，再一路追蹤",
          "paragraphs": [
            "原圖左側用總重修正、右側用傾斜角修正，曲線另分襟翼位置與校正／指示失速速度。先讀圖例分清虛線 CAS 與實線 IAS，再從重量出發接到適用襟翼曲線，依導引線轉到傾斜角區域，最後由右側速度刻度讀值。",
            "沿原圖例：2,170 lb、20°傾斜、襟翼 40°，讀到約 44 kt IAS。不要誤用 2,440 lb 最大重量、0°襟翼或 CAS 曲線；這些都會得到不同答案。這是原書示範圖，不是任何實際訓練機的失速資料。"
          ],
          "figure": {
            "label": "Figure 9-6 · Stall speed chart",
            "page": "9-5",
            "url": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=5"
          },
          "check": {
            "question": "原圖例的 44 kt 可以直接當成進場速度嗎？",
            "answer": "不可以。它是指定條件下的指示失速速度示例；進場速度須依本機程序及適用條件決定。"
          }
        },
        {
          "title": "讀圖結果要與飛行條件一致",
          "paragraphs": [
            "在其他條件相同的簡化模型中，失速速度隨重量平方根增加；協調平飛轉彎的載荷因數為 n＝1／cosφ，失速速度約按 √n 增加。自編例：60°協調平飛轉彎 n＝2，約為一倍重力失速速度的 1.414 倍；傾斜角本身不是任意飛行狀態下的載荷因數保證。",
            "起飛和落地性能也需按表列重量、溫度、壓力高度、風、跑道與技術假設處理，不把外推當核准結果。本書重量平衡是 Chapter 10、Aircraft Performance 是 Chapter 11；原文將性能指向 Chapter 10 的交叉引用有誤。"
          ]
        }
      ]
    },
    {
      "id": "weight-balance",
      "english": "Weight and Balance/Equipment List (Section 6)",
      "title": "本機重量平衡與設備清單",
      "parent": "afm",
      "locator": "PHAK C 版 · 9-4",
      "printedPage": "9-4",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=4",
      "paragraphs": [
        "第六節提供計算重量、力矩與重心所需方法，並配合本機最新空重、設備清單及修訂紀錄。設備增減或改裝可能改變空重與重心，手冊範例不能替代實際航空器資料。",
        "計算完成後還要回到限制章核對包線與局部裝載上限。自編例：拆除一項設備後仍沿用原空重，算式即使沒有算錯，結果仍建立在錯誤輸入上；Chapter 10 會進一步解釋計算。"
      ],
      "lessonBlocks": [
        {
          "title": "用本機最新空重計算，而不是手冊範例空重",
          "paragraphs": [
            "設備安裝或拆除可能改變空重與力矩，需以本機有效紀錄作輸入。手冊範例教方法，設備清單和實際修訂則提供這架飛機的狀態，不能只因同型號就沿用另一架的數字。",
            "自編簡化例：合計重量 2,000 lb、總力矩 80,000 lb·in，CG＝80,000÷2,000＝40 in。這只算出相對指定 datum 的位置，仍要核對該重量的重心包線及局部限制；不同基準面或力矩縮放欄位不能混算。"
          ]
        }
      ]
    },
    {
      "id": "systems",
      "english": "Systems Description (Section 7)",
      "title": "系統說明與程序依賴",
      "parent": "afm",
      "locator": "PHAK C 版 · 9-4",
      "printedPage": "9-4",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=4",
      "paragraphs": [
        "系統章解釋本機燃油、電力、操縱、起落架、航電等配置，幫助飛行員理解正常指示與故障後果。通用原理要在這裡轉成「這架飛機的來源、控制、回饋和備援」。",
        "自編例：通用教材說有備用燃油泵，不代表本機在每個飛行階段都使用相同設定。系統說明幫助理解程序，但不能自行推導一套不同於核准資料的緊急操作。"
      ],
      "lessonBlocks": [
        {
          "title": "把通用原理映射到這架飛機",
          "paragraphs": [
            "由系統說明找來源、控制、指示、保護與備援。例如兩個航電顯示器是否共用 ADC，燃油泵由哪條匯流排供電，或備用靜壓取自哪裡，會直接影響故障判斷。",
            "Chapter 7、8 提供通用原理，本節提供本機實作。理解系統能幫助辨認程序背後的原因，但不能據此自行編寫替代核准程序，尤其是隔離、重設及緊急操作。"
          ]
        }
      ]
    },
    {
      "id": "handling",
      "english": "Handling, Service, and Maintenance (Section 8)",
      "title": "地面處理、保養與維修",
      "parent": "afm",
      "locator": "PHAK C 版 · 9-5",
      "printedPage": "9-5",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=5",
      "paragraphs": [
        "本節通常涵蓋牽引、繫留、儲存、清潔、補充油液及建議檢查，避免在地面操作中傷害結構或系統。使用的工具、油液規格與接觸位置，仍需對照本機資料。",
        "手冊說明某項保養方法，不等於每位飛行員都有執行與簽放權限。自編例：知道輪胎如何拆裝與是否可依法自行完成，是不同問題；後面要另查工作分類、人員資格及維修紀錄要求。"
      ],
      "lessonBlocks": [
        {
          "title": "地面操作和保養也需要適用資料與資格",
          "paragraphs": [
            "牽引點、轉向限制、繫留方式、停放、清潔與油液規格都可能因機型不同。錯誤地面處理可以損傷操縱、起落架或表面，即使當下外觀看不出來，也可能影響後續飛行。",
            "製造商提供保養方法，不等於授權每位飛行員執行或簽放所有工作。建議保養、核准壽限、AD 及法定檢查的地位不同，應逐項核對；原書每 25 或 100 小時的經驗描述不是通用法定週期。"
          ]
        }
      ]
    },
    {
      "id": "supplements",
      "english": "Supplements (Section 9)",
      "title": "補充手冊與改裝影響",
      "parent": "afm",
      "locator": "PHAK C 版 · 9-5",
      "printedPage": "9-5",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=5",
      "paragraphs": [
        "補充資料說明加裝或改裝設備帶來的限制、程序與性能變化，可能來自原製造商或改裝核准持有人。它不是可有可無的附讀文章，而可能是正確操作這架飛機不可缺少的一部分。",
        "讀補充時確認適用設備、序號、版本及哪些主手冊段落被修改；未修改的部分仍按主手冊。自編例：更換螺旋槳可能不只改變系統說明，也影響速度、重量平衡或性能資料。"
      ],
      "references": [
        {
          "title": "14 CFR §91.9",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-A/section-91.9",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "Figure 9-7 · 補充可能修改限制、程序與性能",
          "paragraphs": [
            "加裝導航、自動駕駛、空調或其他設備時，適用補充可說明不同於基本手冊的限制與操作。先確認設備型號、適用航空器、修訂狀態，再找哪些章節被修改；未受影響部分仍依基本手冊。",
            "自編例：裝了新自動駕駛，不能只看設備操作指南就宣稱具備所有使用權限，還需讀本機核准補充中的最低使用高度、模式限制及斷開程序。圖示介紹補充文件的角色，不替代本機實際內容。"
          ],
          "figure": {
            "label": "Figure 9-7 · Flight manual supplements",
            "page": "9-5",
            "url": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=5"
          },
          "check": {
            "question": "補充只改了正常程序，是否代表其他章節都不再需要？",
            "answer": "不是。按補充標明的修改範圍使用，其餘仍需遵守基本手冊與其他適用要求。"
          }
        }
      ]
    },
    {
      "id": "safety-tips",
      "english": "Safety Tips (Section 10)",
      "title": "安全提示與文件地位",
      "parent": "afm",
      "locator": "PHAK C 版 · 9-6",
      "printedPage": "9-6",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=6",
      "paragraphs": [
        "部分製造商增加安全與操作提示，整理常見錯誤、使用經驗或補充建議；不是每本手冊都有第十節。這些資料可幫助建立習慣，但需辨別建議、程序與核准限制的不同角色。",
        "自編例：某段建議較保守的天氣條件，可納入個人標準，卻不能藉另一段概括建議放寬限制章要求。遇到看似矛盾的文字，先查適用版本與核准補充，不自行挑選較方便的一句。"
      ],
      "lessonBlocks": [
        {
          "title": "安全提示可以提高標準，不能放寬核准限制",
          "paragraphs": [
            "製造商可加入低溫、高空、燃油或人體因素等經驗提醒，協助飛行員建立保守習慣。這類選用章節的存在與名稱依手冊，不是所有 POH 都必須有同樣第十節。",
            "自編情境：安全提示建議更充足燃油，可納入個人計畫；但不能從概括性文字推導出可超重或忽略明確限制。遇到矛盾先核對適用修訂、核准地位與補充，不自行選比較方便的內容。"
          ]
        }
      ]
    },
    {
      "id": "documents",
      "english": "Aircraft Documents",
      "title": "航空器文件與攜帶要求",
      "parent": null,
      "locator": "PHAK C 版 · 9-6",
      "printedPage": "9-6",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=6",
      "paragraphs": [
        "航空器文件分別回答登記身分、適航證明、操作限制與持續維修狀態等問題。常見記憶口訣只是索引，實際攜帶、展示與可供查閱要求仍需按適用規則和操作種類核對。",
        "FAA §91.203 對登記及適航文件有要求，其中適航證書還有對乘客或機組可讀的展示要求。維修紀錄的保存不等於所有日誌都必須放在座艙，跨境操作也可能有額外文件需求。"
      ],
      "references": [
        {
          "title": "14 CFR §91.203",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-C/section-91.203",
          "checked": "2026-09-18"
        }
      ],
      "lessonBlocks": [
        {
          "title": "攜帶、展示、保存是三種要求",
          "paragraphs": [
            "§91.203 規定適用登記與適航文件，適航證書還需在客艙或座艙入口展示，對乘客或機組可讀；§91.9 處理適用操作資料。核對不只問「有沒有」，也要問是否適用、有效、可取得以及符合展示方式。",
            "維修日誌需保存及供查核，卻不代表所有原始日誌都必須隨每次飛行放在座艙。ARROW 等口訣只是查找索引；無線電、跨境、特殊證書與操作限制應依具體法規另核對。"
          ],
          "table": {
            "caption": "常見文件角色",
            "headers": [
              "文件",
              "主要證明",
              "不能替代"
            ],
            "rows": [
              [
                "Registration",
                "登記身分與狀態",
                "適航或所有權保證"
              ],
              [
                "Airworthiness",
                "相應認證與條件",
                "當下缺陷及到期檢查處理"
              ],
              [
                "AFM／限制／補充",
                "本機操作依據",
                "實際裝載和維修狀態"
              ],
              [
                "維修與 AD 紀錄",
                "工作、符合與到期狀態",
                "飛行前現況檢查"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "registration",
      "english": "Certificate of Aircraft Registration",
      "title": "航空器登記證書",
      "parent": "documents",
      "locator": "PHAK C 版 · 9-6",
      "printedPage": "9-6",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=6",
      "paragraphs": [
        "登記證書識別航空器的登記狀態，並非 FAA 對財產所有權的保證，也不能代替適航證書。查核時需比較航空器識別、登記資料和有效狀態，出售、出口等情況可能影響有效性。",
        "FAA 已自 2023 年起把相關登記證書期限由三年延為七年；申請書臨時操作依據也不能再只背原書九十天。應核對現行條件與終止事件，而不是只看舊紙本上的日期或表格顏色。"
      ],
      "references": [
        {
          "title": "FAA Aircraft Registry：登記期限與臨時操作依據",
          "url": "https://www.faa.gov/licenses_certificates/aircraft_certification/aircraft_registry/index.cfm",
          "checked": "2026-09-11"
        },
        {
          "title": "eCFR · §47.31",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-47/subpart-B/section-47.31",
          "checked": "2026-09-18"
        },
        {
          "title": "FAA Aircraft Registry · 七年期限與臨時操作說明",
          "url": "https://www.faa.gov/licenses_certificates/aircraft_certification/aircraft_registry",
          "checked": "2026-09-18"
        }
      ],
      "currentNote": "查閱 2026-09-18：依 FAA Registry 現行說明，相關登記證書期限已延為七年，符合條件的申請書臨時操作依據通常不超過十二個月並受提早終止條件限制；原書九十天敘述已過時，且臨時國內操作不等於跨境許可。",
      "lessonBlocks": [
        {
          "title": "Figure 9-8 · 登記證書不是所有權保證",
          "paragraphs": [
            "比對 N 號碼、型號、製造序號、登記持有人及有效狀態。FAA 登記不等於對財產所有權或擔保權利的保證，也不表示該機已符合適航或適用操作條件。原圖只是證書欄位範例。",
            "所有權轉移、取消、報廢、外國登記或登記資格喪失等可使原證書失效，不能因紙本仍在機上就繼續使用。申報、地址與轉移事項應依現行 Registry 流程及 Part 47 處理，不只沿用舊教材郵寄說明。"
          ],
          "figure": {
            "label": "Figure 9-8 · Certificate of Aircraft Registration",
            "page": "9-6",
            "url": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=6"
          }
        },
        {
          "title": "七年登記與十二個月臨時依據，不是無條件有效",
          "paragraphs": [
            "查閱 2026-09-18：FAA 說明相關登記證書已由三年延至七年。符合條件的登記申請書臨時操作依據，至收到證書、FAA 拒絕申請或申請待辦滿十二個月等終止事件為止；原書固定九十天的說法已過時。",
            "仍需符合 §47.31 的資格與條件，例如不能把已到期或已取消登記的情況一律當成可憑申請書飛行。臨時依據的美國國內操作範圍不等於跨境許可，dealer certificate 也有特定用途，不能在售出後當成買方的一般登記證書。"
          ],
          "check": {
            "question": "尚未滿七年，但飛機已出售，原證書一定繼續有效嗎？",
            "answer": "不一定；所有權轉移等終止條件須另核對，期限不是唯一條件。"
          }
        }
      ]
    },
    {
      "id": "airworthiness",
      "english": "Airworthiness Certificate",
      "title": "適航證書與持續適航",
      "parent": "documents",
      "locator": "PHAK C 版 · 9-7",
      "printedPage": "9-7",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=7",
      "paragraphs": [
        "適航證書說明航空器在相應核准基礎下獲得證明，標準與特殊適航證書的用途和限制不同。有證書不表示當下沒有故障，也不表示每種操作都已被允許。",
        "標準適航證書的持續有效有登記、適用維修與其他條件，不能把「沒有一般固定到期日」理解成永遠可飛。自編例：檢查逾期或出現影響安全的缺陷時，證書仍在機上也不能替代問題處理。"
      ],
      "references": [
        {
          "title": "14 CFR §21.181",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-21/subpart-H/section-21.181",
          "checked": "2026-09-18"
        },
        {
          "title": "FAA MOSAIC · 分階段生效與認證規則",
          "url": "https://www.faa.gov/aircraft/MOSAIC",
          "checked": "2026-09-18"
        }
      ],
      "lessonBlocks": [
        {
          "title": "Figure 9-9 · 六組欄位把航空器與認證連起來",
          "paragraphs": [
            "依序讀 nationality／registration、manufacturer／model、serial number、category、authority／basis，以及 terms／conditions，再核對簽發日期與人員資訊。類別與條件告訴你依什麼核准運作，不是只讀到 N 號碼相同就完成全部檢查。",
            "標準適航證書通常沒有一般固定到期日，但 §21.181 有美國登記、依規維修等持續有效條件，也可能被繳回、暫停、撤銷或另定終止日。證書表示認證基礎，當日能否飛仍要看持續適航與現況。"
          ],
          "figure": {
            "label": "Figure 9-9 · Standard Airworthiness Certificate",
            "page": "9-7",
            "url": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=7"
          }
        },
        {
          "title": "證書類別與 sport pilot 可操作範圍分開",
          "paragraphs": [
            "特殊適航證書包括不同類別與目的，其操作限制和檢查制度不一定與標準適航相同。某架傳統正常類別飛機符合 sport pilot 的操作資格，不會因此自動變成持有 light-sport category 特殊適航證書的飛機；原書 Piper Cub 的例子應如此分辨。",
            "查閱 2026-09-18：MOSAIC 的輕型運動類別認證相關規則已於 2026-07-24 生效。§21.181 也保留較早認證 LSA 的特定持續有效條件，不能用新機認證範圍自行放寬舊機限制。實際核對證書種類、發證條件與本機 operating limitations。"
          ]
        }
      ]
    },
    {
      "id": "maintenance",
      "english": "Aircraft Maintenance",
      "title": "維修與持續狀態管理",
      "parent": "documents",
      "locator": "PHAK C 版 · 9-8",
      "printedPage": "9-8",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=8",
      "paragraphs": [
        "航空器維修包含檢查、保存、翻修、修理及零件更換等工作，規劃需考慮使用時間、曆日、循環、環境及核准資料。原書提及的二十五或一百小時經驗說法，不是所有航空器的通用法定保養表。",
        "完成某次檢查只反映相應範圍和當時狀態，之後出現的故障仍需處理。自編例：昨天剛完成年度檢查，今天發現燃油滲漏，不能因下次年度尚未到期就忽略新的適航問題。"
      ],
      "lessonBlocks": [
        {
          "title": "管理使用時間、日曆、循環與環境",
          "paragraphs": [
            "維修計畫可能同時包含飛行使用時間、曆日、起落或啟動循環、壽限及狀況觸發要求。高濕、鹽害、停放與頻繁短程使用的影響不同，不能只用飛了幾小時判斷所有保養需求。",
            "自編例：飛得很少但長期在潮濕環境停放，時間表上的使用小時未到，不代表可忽略腐蝕或日曆限制。必要工作需用適用技術資料、工具與資格完成，再留下可追蹤的紀錄。"
          ]
        }
      ]
    },
    {
      "id": "inspections",
      "english": "Aircraft Inspections",
      "title": "檢查種類、期限與適用性",
      "parent": null,
      "locator": "PHAK C 版 · 9-8",
      "printedPage": "9-8",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=8",
      "paragraphs": [
        "先確認航空器和操作所適用的檢查制度，再分別追蹤年度、使用時間、設備檢驗、壽限及 AD 要求。不同檢查可能同一天執行，但完成其中一項不會自動把其他項目的時鐘全部重設。",
        "§91.409 有年度、百小時與其他檢查方案的適用條件及例外，不能簡化為所有飛機都用同一套。自編練習：做一張「要求、上次完成、下次到期、紀錄位置」清單，再核對今天飛行用途。"
      ],
      "references": [
        {
          "title": "14 CFR §91.409",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-E/section-91.409",
          "checked": "2026-09-18"
        }
      ],
      "lessonBlocks": [
        {
          "title": "把每個檢查的時鐘單獨列出來",
          "paragraphs": [
            "先確認 §91.409 所適用的檢查制度，再建立本機清單。年度、百小時、高度系統、應答機、ELT、壽限與 AD 不是同一時鐘；同一天完成可以方便管理，但只完成其中一項不會自動重設其他項目。",
            "下面是常見 FAA Part 91 教學索引，不是所有飛機皆適用的一張通用表。每列仍需核對條文範圍、例外、實際檢查紀錄及維修後追加測試條件。"
          ],
          "table": {
            "caption": "常見檢查索引",
            "headers": [
              "項目",
              "主要尺度",
              "先確認"
            ],
            "rows": [
              [
                "年度",
                "前 12 曆月",
                "§91.409(a) 與例外"
              ],
              [
                "百小時",
                "前 100 小時 time in service",
                "§91.409(b) 操作關係"
              ],
              [
                "高度／靜壓／高度回報",
                "前 24 曆月及特定維修後",
                "§91.411 的 IFR 管制空域條件"
              ],
              [
                "ATC 應答機",
                "前 24 曆月及特定維修後",
                "§91.413 所指設備使用"
              ],
              [
                "所要求的 ELT",
                "12 曆月；電池另計",
                "§91.207 適用性與例外"
              ],
              [
                "AD／壽限",
                "依指令或核准資料",
                "日曆、小時、循環及組合門檻"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "annual",
      "english": "Annual Inspection",
      "title": "年度檢查與曆月",
      "parent": "inspections",
      "locator": "PHAK C 版 · 9-8",
      "printedPage": "9-8",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=8",
      "paragraphs": [
        "適用 §91.409(a) 的航空器需在前十二個曆月內完成規定檢查並獲准恢復使用。自編例：2026 年 9 月 11 日完成年度檢查，該十二曆月期限至 2027 年 9 月底，而不是僅到同一天。",
        "一般百小時檢查不能取代年度，除非由有權執行年度檢查者完成並按年度檢查登錄。年度逾期沒有一般十小時寬限；若需移機送檢，另確認特殊飛行許可及其條件，不能自行先飛。"
      ],
      "references": [
        {
          "title": "14 CFR §91.409",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-E/section-91.409",
          "checked": "2026-09-18"
        }
      ],
      "lessonBlocks": [
        {
          "title": "曆月計算與年度簽放",
          "paragraphs": [
            "自編例：2026-09-18 完成適用年度檢查並獲准恢復使用，其十二曆月期限到 2027-09-30，不是 2027-09-18。到 2027-10-01 時不能再只靠這次年度作一般操作依據；飛得少也不會延長日曆期限。",
            "年度檢查由具適當資格與授權者執行、批准，例如具有 IA 的適格技師、適當維修站或符合條件的製造商。普通百小時工作不能自動算成年度，除非有權執行年度者按要求完成並登錄為年度。"
          ],
          "check": {
            "question": "年度逾期是否也有十小時寬限？",
            "answer": "沒有一般十小時寬限。該例外屬百小時送檢情況；年度逾期移機須另評估適用特殊飛行許可。"
          }
        }
      ]
    },
    {
      "id": "hundred-hour",
      "english": "100-Hour Inspection",
      "title": "百小時檢查與十小時例外",
      "parent": "inspections",
      "locator": "PHAK C 版 · 9-8",
      "printedPage": "9-8",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=8",
      "paragraphs": [
        "§91.409(b) 涵蓋載運非機組人員取酬，或由提供航空器者收費教學等情況，並受該條例外影響。因此不能單憑「租來的飛機」或「有人付錢」就跳過對實際操作關係的判斷。",
        "為飛往可執行檢查之處，百小時可超過最多十小時，超時須計入下一週期。自編例：原應在累計 1,200 小時檢查，於 1,207 小時到維修點完成，下次通常仍以 1,300 小時計，而非 1,307。"
      ],
      "points": [
        "判斷依 time in service；不要未經確認便把任何計時表讀值當成同一定義。",
        "年度可滿足相應百小時檢查要求，百小時不能自動取代年度。",
        "最多十小時僅供前往檢查地點，不是一般教學或載客的寬限。"
      ],
      "references": [
        {
          "title": "14 CFR §91.409",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-E/section-91.409",
          "checked": "2026-09-18"
        }
      ],
      "lessonBlocks": [
        {
          "title": "先看取酬和供機關係，再看時間",
          "paragraphs": [
            "§91.409(b) 涵蓋載運非機組人員取酬，以及在教學者提供的航空器中取酬教學，並受條文例外影響。租機本身或教官有收費，都不足以省略供機與實際操作關係的判斷；也不能用「只有私人飛行」就忽略年度。",
            "百小時計算用 time in service，不能不經確認就把 Hobbs、tach 或飛行員記錄的 flight time 當成相同定義。年度可滿足相應百小時要求，反方向則需年度資格與登錄條件。"
          ]
        },
        {
          "title": "十小時只供送檢，超用時間要扣回",
          "paragraphs": [
            "為到達能執行檢查的地點，百小時限制可超過不多於十小時；這不是讓學校多排十小時課程的自由額度。仍要符合其他適航與操作要求，不能拿這個例外越過 AD 或年度期限。",
            "自編例：上次完成時 1,100 小時，應在 1,200 前檢查，送檢用到 1,207。下次仍按 1,300 小時到期，這一輪完成後可用 93 小時，而非重新獲得 100 小時到 1,307。"
          ],
          "check": {
            "question": "原定百小時到期後多飛七小時送檢，下輪可用多久？",
            "answer": "此例可用 93 小時；超出的七小時須計入下一個百小時週期。"
          }
        }
      ]
    },
    {
      "id": "other-programs",
      "english": "Other Inspection Programs",
      "title": "漸進式及其他檢查方案",
      "parent": "inspections",
      "locator": "PHAK C 版 · 9-9",
      "printedPage": "9-9",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=9",
      "paragraphs": [
        "大型飛機、特定多引擎渦輪飛機與其他航空器可能適用 §91.409 的其他方案，漸進式檢查也有申請、監督、程序與完整檢查要求。不是把年度項目自行分幾次做，就可宣稱採用漸進式制度。",
        "選擇或轉換方案時，原已累積的曆日、使用時間與循環仍需依規則納入追蹤。自編例：換一家維修廠或改用另一方案，不會讓壽限零件及既有到期要求自動歸零。"
      ],
      "references": [
        {
          "title": "14 CFR §91.409",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-E/section-91.409",
          "checked": "2026-09-18"
        }
      ],
      "lessonBlocks": [
        {
          "title": "替代檢查方案需要完整制度，不是免檢",
          "paragraphs": [
            "§91.409 對漸進式檢查、特定大型／多發渦輪飛機及其他配置有不同途徑；實驗類別與特殊輕型運動類別也須核對其適用規則和操作限制。不能把原文縮成「所有噴射機免年度」或「不是年度就不用檢查」。",
            "漸進式方案須依核准安排分階段完成，頻率與細節仍要使整機在十二曆月內獲完整檢查。原書引用 §43.11 是檢查紀錄要求；選擇哪種檢查制度與適用例外，主要回到 §91.409 等相關規定。"
          ]
        }
      ]
    },
    {
      "id": "altimeter-inspection",
      "english": "Altimeter System Inspection",
      "title": "高度與靜壓系統檢驗",
      "parent": "other-programs",
      "locator": "PHAK C 版 · 9-9",
      "printedPage": "9-9",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=9",
      "paragraphs": [
        "§91.411 對飛機與直升機在管制空域依 IFR 操作，要求相關靜壓、高度表及自動氣壓高度回報系統在前二十四曆月內完成規定檢驗。這不是把整架航空器一律認證為可飛 IFR。",
        "特定靜壓拆接或可能引入高度資料對應誤差的安裝維修後，也有追加測試要求與例外。自編例：日曆期限仍未到，但剛拆接管路，不能只看上次檢驗日期就忽略維修後檢查。"
      ],
      "references": [
        {
          "title": "14 CFR §91.411",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-E/section-91.411",
          "checked": "2026-09-18"
        }
      ],
      "lessonBlocks": [
        {
          "title": "二十四曆月之外，還要看拆接與測試範圍",
          "paragraphs": [
            "§91.411 的這項要求針對飛機或直升機在管制空域依 IFR 操作，涵蓋每套靜壓、高度表及自動氣壓高度回報系統。檢查合格不代表已同時滿足所有 IFR 裝備、資料庫或人員要求。",
            "靜壓系統打開再接合後，除條文明列的排水與備用靜壓閥使用例外，需相應測試；可能引入高度資料對應誤差的安裝維修也需整合測試。並且不能使用超過所有高度表及高度回報系統已測試最高高度的 IFR 操作範圍。"
          ]
        }
      ]
    },
    {
      "id": "transponder-inspection",
      "english": "Transponder Inspection",
      "title": "應答機檢驗",
      "parent": "other-programs",
      "locator": "PHAK C 版 · 9-9",
      "printedPage": "9-9",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=9",
      "paragraphs": [
        "§91.413 對所指 ATC 應答機的使用要求前二十四曆月內完成規定測試與檢查，並非只在 IFR 飛行才需要。是否需要配備或使用應答機，與設備檢驗是否合格是不同問題。",
        "可能造成高度資料對應誤差的安裝維修後，還需相關整合測試。自編例：管制員能收到代碼，不足以證明所有檢驗項目合格；也不能把此檢查當成 ADS-B 所有性能要求的替代證明。"
      ],
      "references": [
        {
          "title": "14 CFR §91.413",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-E/section-91.413",
          "checked": "2026-09-18"
        }
      ],
      "lessonBlocks": [
        {
          "title": "VFR 使用也不能略過適用應答機檢驗",
          "paragraphs": [
            "§91.413 對其所指 ATC 應答機的使用要求前二十四曆月內符合規定測試，並非只要 VFR 就不用。若安裝維修可能引入高度資料對應誤差，還須完成適用整合測試。",
            "自編例：2026 年 9 月完成檢驗，通常依二十四曆月計至 2028 年 9 月底；但中途相關維修仍可能觸發追加要求。管制員看得到回覆，不等於精度與全部測試均符合，也不能取代獨立 ADS-B 要求。"
          ]
        }
      ]
    },
    {
      "id": "elt",
      "english": "Emergency Locator Transmitter",
      "title": "ELT 檢查與電池期限",
      "parent": "other-programs",
      "locator": "PHAK C 版 · 9-9",
      "printedPage": "9-9",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=9",
      "paragraphs": [
        "對 §91.207 所要求的 ELT，須按規定在上次檢查後十二曆月內檢查安裝、腐蝕、控制與撞擊感測及天線訊號。ELT 配備本身有適用範圍和例外，不能把一句「全部都要」套到所有操作。",
        "規定電池在發射器累計使用超過一小時，或達到核准壽命／充電壽命百分之五十時更換或充電，另有特定儲存型電池例外。新期限需標示並記錄，不能等到例行年度檢查才處理已到期電池。"
      ],
      "references": [
        {
          "title": "14 CFR §91.207",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-C/section-91.207",
          "checked": "2026-09-18"
        }
      ],
      "lessonBlocks": [
        {
          "title": "年度檢查與電池條件分開追蹤",
          "paragraphs": [
            "對 §91.207 要求的 ELT，十二曆月檢查包括安裝、電池腐蝕、控制與撞擊感測及足夠天線輻射訊號。電池另在累計發射使用超過一小時，或核准有效壽命／充電壽命已用百分之五十時更換或充電，並有條文明列的儲存型電池例外。",
            "自編例：年度 ELT 檢查才做完，但之後誤發射累計超過一小時，不能等下一年度才處理電池。新的期限要在發射器外部清楚標示並記入紀錄；檢查與測試按設備程序執行，避免自行長時間發射造成誤警。"
          ]
        },
        {
          "title": "移除與移機例外都有條件",
          "paragraphs": [
            "§91.207 有特定操作例外，並非每一種航空器與每趟飛行都同樣適用。因檢查、修理、修改或更換而暫時拆除 ELT 的例外，需要紀錄初次拆除日期、型號序號、理由及可見 ELT not installed 標示，且不得超過初次拆除後九十天。",
            "失效 ELT 從無法修復的地點移往可修復地點另有條文，該移機僅可載必要機組。這些是 ELT 專屬條件，不是所有設備都可用同一九十天例外；也不取代其他適用要求。"
          ]
        }
      ]
    },
    {
      "id": "preflight",
      "english": "Preflight Inspections",
      "title": "飛行前檢查與放行判斷",
      "parent": "other-programs",
      "locator": "PHAK C 版 · 9-9",
      "printedPage": "9-9",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=9",
      "paragraphs": [
        "飛行前檢查依本機清單系統性確認外觀、油液、設備和相關文件狀態，也要閱讀尚未處理的缺陷。它不能取代維修人員的定期檢查，但能發現兩次定檢之間新出現的問題。",
        "自編例：外觀正常而年度檢查已逾期，或文件都有效但輪胎明顯受損，兩者都不能只憑另一半正常就判斷可飛。應把維修狀態、當下狀況和預定操作一起評估。"
      ],
      "lessonBlocks": [
        {
          "title": "把記錄中的飛機與眼前的飛機對起來",
          "paragraphs": [
            "飛行前依本機清單看外觀、油液、設備與控制，也讀取未完成缺陷、已延修項目及其限制。紀錄可能指出某設備被停用，現場也可能出現上次維修後新增的損傷，兩邊都不能省略。",
            "自編情境：年度仍有效但輪胎損傷；或外觀正常但登記已失效。兩者都不能因另一半正常就當成可飛，需處理各自問題，再依當次飛行的需求和規則判斷。"
          ]
        }
      ]
    },
    {
      "id": "mel",
      "english": "Minimum Equipment Lists (MEL) and Operations With Inoperative Equipment",
      "title": "MEL 與失效設備操作",
      "parent": null,
      "locator": "PHAK C 版 · 9-9",
      "printedPage": "9-9",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=9",
      "paragraphs": [
        "MEL 是在核准條件下允許部分設備失效時操作的依據，MMEL 是建立相關清單的主清單，不能下載後就直接當成本機放行許可。需確認授權、適用項目、操作與維修程序、期限及多項故障的相互影響。",
        "未使用核准 MEL 的特定 Part 91 操作，才可在符合 §91.213(d) 全部條件下評估失效設備。白天不需要某盞燈，不代表只貼標籤就可飛；還需查型別、設備清單、操作規則、AD、停用與安全判斷。"
      ],
      "points": [
        "先確認是否適用 §91.213(d)(1) 的航空器與操作範圍；不能任意從 MEL 改用較方便的路徑。",
        "逐項查日間 VFR 型別認證要求、設備清單／KOEL、當次操作規則及 AD。",
        "移除時處理控制標示與維修紀錄；停用並標 INOPERATIVE，涉及維修者依 Part 43 執行與記錄。",
        "由具適當資格者判斷不構成危險，並評估其他失效項目的組合影響。",
        "MEL 是起飛前失效設備處理依據；飛行中故障先用本機異常／緊急程序。"
      ],
      "references": [
        {
          "title": "14 CFR §91.213",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-C/section-91.213",
          "checked": "2026-09-18"
        },
        {
          "title": "FAA AC 91-67A：失效設備指引",
          "url": "https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1042212",
          "checked": "2026-09-11"
        },
        {
          "title": "FAA AC 91-67A · MEL、無 MEL 操作及停用紀錄",
          "url": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-67A.pdf",
          "checked": "2026-09-18"
        }
      ],
      "currentNote": "查閱 2026-09-18：AC 91-67A 區分 D095／D195 等授權途徑，並在 4.2.2 明確說明停用與維修紀錄。原書拉斷路器的例子不是通用飛行員授權；依 §91.213、適用核准文件及合格人員處理。",
      "lessonBlocks": [
        {
          "title": "發現失效設備，先選適用路徑",
          "paragraphs": [
            "起飛前發現失效設備，可取消、先修復，或依適用規則評估延修。常見路徑是核准 MEL 與 LOA、符合 §91.213(d) 的無 MEL 操作，或另取得特殊飛行許可；不能只因某項「今天不想用」就視為非必要。",
            "飛行中失效先按本機異常／緊急程序處理，MEL 不是替代飛行中處置的清單。下一次起飛前才重新確認修復或適用延修條件，同時評估多項故障之間的相互影響。"
          ],
          "table": {
            "caption": "三種依據不可混用",
            "headers": [
              "路徑",
              "必要起點",
              "不能做的推論"
            ],
            "rows": [
              [
                "MEL＋LOA",
                "適用操作人、航空器與有效授權",
                "下載 MMEL 就能延修"
              ],
              [
                "§91.213(d)",
                "符合航空器及操作範圍",
                "所有機型都可以用"
              ],
              [
                "特殊飛行許可",
                "能安全進行特定飛行且獲許可",
                "機長自行宣布為移機即可飛"
              ]
            ]
          }
        },
        {
          "title": "無 MEL：四個必需性關卡全數核對",
          "paragraphs": [
            "先依 §91.213(d)(1) 查航空器種類、是否已有 MMEL 及大小等條件，不能省略其分類。再依 (d)(2) 確認失效項目不是日間 VFR 型別認證必需設備、設備清單或當次操作 KOEL 必需項目、當次操作法規所需設備，且沒有 AD 要求它可用。",
            "只查 §91.205 的記憶口訣並不完整。任何一關要求可用，就不能用此段無 MEL 路徑略過；全數不要求也還沒完成，仍需合規移除／停用、標示、必要紀錄與無危險判斷。"
          ],
          "table": {
            "caption": "§91.213(d) 判斷順序",
            "headers": [
              "順序",
              "要回答的問題"
            ],
            "rows": [
              [
                "1 適用範圍",
                "這架航空器與此操作可用 (d) 嗎？"
              ],
              [
                "2 必需性",
                "型別、設備清單／KOEL、操作規則、AD 是否要求？"
              ],
              [
                "3 處置",
                "移除或停用、標示及維修紀錄是否合規？"
              ],
              [
                "4 安全",
                "適當合格飛行員或維修人員是否判定不構成危險？"
              ]
            ]
          },
          "check": {
            "question": "白天不需要位置燈，能否直接貼 INOPERATIVE 起飛？",
            "answer": "不能只看白天。須完成適用範圍、全部必需性來源、合規處置與安全判斷。"
          }
        },
        {
          "title": "停用不是任意拔斷路器，原書例子不能當通用程序",
          "paragraphs": [
            "§91.213(d)(3) 區分移除及停用；移除須處理座艙控制標示與維修紀錄，停用須標 INOPERATIVE，涉及維修則按 Part 43 執行與記錄。開關 OFF 未必真正隔離故障，也可能影響共用電路，具體方法須有適用資料。",
            "AC 91-67A 4.2.2 的現行指引更明確指出：系統停用不視為 Appendix A 所述預防性維修，須由適當授權者完成，並由有權恢復使用者作 §43.9 紀錄。AC 是指引，條文與指引的文字地位應分清；本教材不把舊例子當成飛行員可自行停用並免記錄的普遍授權。"
          ]
        },
        {
          "title": "MMEL、MEL 與 LOA 的關係",
          "paragraphs": [
            "MMEL 是機型主清單，真正的延修依據還需要本操作人的適用文件與 FAA 授權。AC 91-67A 分別說明 D095（適用 MMEL 加程序文件）及 D195（操作人編製 MEL）等核准路徑，不是把主清單改個檔名就完成。",
            "§91.213(a) 明定 MEL 與 LOA 合起來構成該機的 STC 法律地位；這不等於某人另辦一般設計改裝 STC 就可略過 MEL 程序。操作須遵守清單與授權全部條件，不能為了某項不允許延修的缺陷，臨時改選比較方便的路徑。"
          ]
        },
        {
          "title": "每次延修都要核對項目、程序、期限與組合影響",
          "paragraphs": [
            "查清單項目名稱、裝機數量、可用數量、附註、適用操作，以及所需 (M) 維修與 (O) 操作程序。再確認記錄、標示與適用修復期限；不同制度的期限不能只憑熟悉的字母分類套用。AD 要求設備可用時，MEL 不能自行推翻它。",
            "自編情境：單項燈具允許在特定日間條件延修，但另一項共用電源故障也存在，原先的單項放行結論可能不再成立。未列為可延修的項目不能任意假定獲准，需修復或另評估合法、安全的特殊許可途徑。"
          ],
          "check": {
            "question": "兩項故障各自都曾獲延修，這次一起出現就一定可飛嗎？",
            "answer": "不一定。須重新核對清單條件、系統依賴、其他故障影響與整體安全。"
          }
        }
      ]
    },
    {
      "id": "preventive",
      "english": "Preventive Maintenance",
      "title": "預防性維修與人員權限",
      "parent": null,
      "locator": "PHAK C 版 · 9-10",
      "printedPage": "9-10",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=10",
      "paragraphs": [
        "預防性維修是法規定義的工作類型，不能只憑自己覺得簡單就歸入其中。Part 43 Appendix A(c) 列出項目與條件，§43.3 說明誰可執行，§43.7 則另規定誰可批准恢復使用。",
        "對一般飛行員自行完成並簽放的情況，至少私人飛行員資格、擁有或操作該機及使用範圍等條件需一起核對；sport pilot 在特殊輕型運動類別另有條款。這不授權任意修理，也不能略過技術資料與紀錄。"
      ],
      "points": [
        "§43.3(g)：執行權限與航空器使用限制；另有明定例外，不用一句「非營業」概括全部。",
        "§43.7(f)、(h)：預防性維修後的恢復使用簽放權限，與執行工作分別判讀。",
        "§43.3(k)：符合條件的航電資料庫更新不視為維修，不能把所有軟體作業一律歸為預防性維修。"
      ],
      "references": [
        {
          "title": "14 CFR §43.3",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-43/section-43.3",
          "checked": "2026-09-18"
        },
        {
          "title": "14 CFR §43.7",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-43/section-43.7",
          "checked": "2026-09-18"
        }
      ],
      "lessonBlocks": [
        {
          "title": "先問工作分類，再問執行與簽放資格",
          "paragraphs": [
            "預防性維修不是「我覺得簡單的修理」。先按 Part 43 Appendix A(c) 的項目及不涉及複雜組裝等條件判斷，再查 §43.3 執行權限、§43.7 恢復使用權限與適用技術資料。合法分類不會自動給任何人施工或簽放資格。",
            "§43.3(g) 的一般執行文字是持 Part 61 飛行員證書、擁有或操作該機，且該機不使用於 Parts 121、129、135，另有明定例外；§43.7(f) 的自行簽放則要求至少私人飛行員資格。原書把 student、recreational 一概列為不能執行，會掩蓋這兩個條款的差別；能參與工作不等於能自行批准恢復使用。"
          ],
          "table": {
            "caption": "權限分開核對",
            "headers": [
              "問題",
              "主要條款",
              "不能省略"
            ],
            "rows": [
              [
                "工作是否屬預防性維修？",
                "Appendix A(c)",
                "項目細節與複雜組裝限制"
              ],
              [
                "誰可以執行？",
                "§43.3",
                "證書、機體關係、用途與例外"
              ],
              [
                "誰可以批准恢復使用？",
                "§43.7",
                "相應簽放資格"
              ],
              [
                "完成後怎樣留證據？",
                "§43.9",
                "內容、日期、簽名與證書資訊"
              ]
            ]
          }
        },
        {
          "title": "Sport pilot 與航電資料庫更新有各自條件",
          "paragraphs": [
            "Sport pilot 在 §43.3(g) 下的預防性維修權限，仍連到本人擁有或操作且獲發 light-sport category 特殊適航證書的航空器；§43.7(h) 另規定相應恢復使用資格。飛行權限擴大不等於可自行維修所有可飛的正常類別飛機。",
            "§43.3(k) 另規定符合條件的航電資料庫更新不視為維修：由座艙發起、不拆機、不用工具或特殊設備，並遵守適用程序及製造商指示。這與更換航電設備或更新飛控軟體不同，不能把所有下載都視為同一豁免。"
          ],
          "check": {
            "question": "可以在 sport pilot 權限下飛某架正常類別機，是否就能依 sport pilot 條款替它簽放換油？",
            "answer": "不能由飛行權限直接推論維修權限；須另核對證書類別、§43.3 與 §43.7。"
          }
        }
      ]
    },
    {
      "id": "entries",
      "english": "Maintenance Entries",
      "title": "維修紀錄與簽放範圍",
      "parent": "preventive",
      "locator": "PHAK C 版 · 9-10",
      "printedPage": "9-10",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=10",
      "paragraphs": [
        "§43.9 的一般維修紀錄包含工作說明或可接受資料引用、完成日期，以及適當的執行者與批准者資訊。滿意完成後的簽名、證書號碼與類別，表示對所做工作的恢復使用批准。",
        "簽放只涵蓋所完成工作，不代表其人同時證明整機所有檢查和設備都有效。自編例：只有「更換電池」四個字而沒有日期與批准資訊，不足以完整呈現該項工作；定期檢查另有 §43.11 紀錄要求。"
      ],
      "references": [
        {
          "title": "14 CFR §43.9",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-43/section-43.9",
          "checked": "2026-09-18"
        }
      ],
      "lessonBlocks": [
        {
          "title": "簽名批准的是所做工作，不是無限範圍的整機保證",
          "paragraphs": [
            "§43.9 的一般工作紀錄包含工作說明或可接受資料引用、完成日期、必要時另列執行人姓名，以及滿意完成後批准者簽名、證書號碼與種類。簽名構成對所做工作的恢復使用批准，不能只留「已修好」三字。",
            "教學用紀錄骨架可依序寫：航空器／項目識別、實際工作及資料依據、完成日期、適用檢查結果、批准者資料。時間和零件等資訊依工作需要完整記載；不得把範例抄成並未完成的維修紀錄。定期檢查另依 §43.11 等要求處理。"
          ],
          "check": {
            "question": "已簽放更換電池，是否同時證明年度和所有 AD 都有效？",
            "answer": "不是。該簽放的範圍是所完成工作，其他適用要求仍須逐項核對。"
          }
        }
      ]
    },
    {
      "id": "preventive-examples",
      "english": "Examples of Preventive Maintenance",
      "title": "預防性維修例子與邊界",
      "parent": "preventive",
      "locator": "PHAK C 版 · 9-10",
      "printedPage": "9-10",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=10",
      "paragraphs": [
        "Appendix A(c) 的例子包含清潔或更換火星塞、燃油或滑油濾芯、電池維護，以及特定燈具部件更換等，但各自有限制。相似名稱不等於相同工作範圍，複雜組裝或系統改裝可能超出預防性維修。",
        "自編例：清潔火星塞與修理點火系統不是同一授權，更換既有核准電池與改裝另一種電池系統也不同。先核對法規項目、機型資料、零件適用性、本人資格與簽放紀錄，再判斷是否可做。"
      ],
      "points": [
        "照明：列舉位置燈／落地燈的燈泡、反射器與透鏡，不表示可任意重設整套電路。",
        "濾芯與火星塞：需遵守適用技術資料，不因列入項目便免除工具、程序與檢查要求。",
        "航電抽換：清單有指定安裝與設備例外，不能概括成所有面板設備都可自行換裝。"
      ],
      "references": [
        {
          "title": "14 CFR Part 43 Appendix A(c)：預防性維修項目",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-43/appendix-Appendix%20A%20to%20Part%2043",
          "checked": "2026-09-18"
        }
      ],
      "lessonBlocks": [
        {
          "title": "起落架、潤滑與非結構部件：名稱相似不等於授權相同",
          "paragraphs": [
            "以下依 Appendix A(c) 分組作查找索引，不是施工步驟，也不取代每一款的完整條件。共同前提包括不涉及複雜組裝、使用適用零件與技術資料，以及具備執行和簽放資格。",
            "輪胎作業不等於可拆修整支起落架；表面塗裝也不等於可改變平衡操縱面的重量或拆解主要結構。先辨認工作實際會動到哪些系統，才知道是否仍在清單邊界內。"
          ],
          "table": {
            "caption": "常見工作索引之一",
            "headers": [
              "工作群",
              "列舉例子",
              "關鍵邊界"
            ],
            "rows": [
              [
                "起落架",
                "輪胎、彈性減震繩、支柱補油氣、輪軸承維護",
                "不是任意結構或收放機構修理"
              ],
              [
                "固定與潤滑",
                "安全線、開口銷；適用潤滑與非結構固定件",
                "依列舉範圍，不任意拆主要組件"
              ],
              [
                "蒙布",
                "不需肋縫或拆結構的小補片",
                "氣球布面另依製造商條件，非承力帶修理"
              ],
              [
                "液壓",
                "油箱補充液壓油",
                "不是任意液壓接頭更換"
              ],
              [
                "表面",
                "裝飾塗裝、保護塗層、簡單整流罩補修",
                "平衡操縱面、結構拆解、氣流外形有限制"
              ],
              [
                "座艙",
                "簡單內裝、合格安全帶／座椅件、側窗",
                "不得涉及所列主要結構或系統干擾"
              ],
              [
                "輪／雪橇／整流罩",
                "符合條件的替換",
                "重量平衡、螺旋槳及操縱拆接限制"
              ]
            ]
          }
        },
        {
          "title": "引擎、燈具與航電：查明允許的那個動作",
          "paragraphs": [
            "清潔火星塞不等於修理整套點火；更換濾芯不等於改裝管路；維護電池不等於換成未核准的電池系統。原文把磁屑偵測器接在航電抽換句末，應拆開理解，它在清單中是獨立項目。",
            "航電抽換有安裝方式、核准設備、說明及使用前功能檢查條件，且排除自動飛控、應答機與微波 DME 等指定設備。原文資料庫更新還須配合現行 §43.3(k) 判讀，不能把抽換與資料更新混為同一權限。"
          ],
          "table": {
            "caption": "常見工作索引之二",
            "headers": [
              "工作群",
              "列舉例子",
              "關鍵邊界"
            ],
            "rows": [
              [
                "引擎／油路",
                "火星塞清潔更換與間隙、燃油／滑油濾件",
                "適用資料及檢查"
              ],
              [
                "軟管",
                "指定 hose connections、預製燃油管",
                "液壓接頭例外，非任意改管"
              ],
              [
                "燈具",
                "位置／落地燈燈泡、反射器、透鏡；落地燈斷路修理",
                "不是整套照明改裝"
              ],
              [
                "電池／磁屑",
                "電池維護；磁屑偵測器拆檢換",
                "不同項目，各按資料執行"
              ],
              [
                "航電",
                "符合條件的面板滑架式通訊／導航單元",
                "特定排除設備及功能檢查"
              ],
              [
                "防誤加油",
                "核准的注油口縮徑裝置",
                "列入型別資料、有核准指示且符合拆解限制"
              ]
            ]
          }
        },
        {
          "title": "氣球與 primary category 的特別項目",
          "paragraphs": [
            "氣球燃燒器噴嘴清潔依製造商指示；吊籃與燃燒器互換須在型別資料指定可互換並具有相應快拆設計等條件下進行。不能把熱氣球的列舉項目直接套到一般飛機。",
            "Primary category 的特殊檢查／預防性維修方案還有經核准方案、至少私人飛行員、登記所有人及相應能力訓練證明等要求。它不是只因工作名稱叫檢查，就允許一般飛行員做年度檢查。"
          ]
        }
      ]
    },
    {
      "id": "repairs",
      "english": "Repairs and Alterations",
      "title": "修理、改裝與核准資料",
      "parent": null,
      "locator": "PHAK C 版 · 9-12",
      "printedPage": "9-12",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=12",
      "paragraphs": [
        "修理著重恢復狀態，改裝涉及變更設計或配置，重大與輕微分類需依定義及工作內容判斷。價格低、零件小或施工時間短，都不能單獨證明只是輕微工作。",
        "重大修理與改裝有相應技術資料、授權與紀錄要求，常涉及 Form 337，並需依適用條款處理。自編例：新增設備後除了完成安裝，還可能要更新重量平衡、設備清單與飛行手冊補充。"
      ],
      "references": [
        {
          "title": "14 CFR §43.9",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-43/section-43.9",
          "checked": "2026-09-18"
        }
      ],
      "lessonBlocks": [
        {
          "title": "重大或輕微分類看影響，不看費用",
          "paragraphs": [
            "修理用來恢復狀態，改裝涉及設計或配置變更；重大性須依法規定義和 Appendix A 等適用資料判斷。便宜、零件小、施工快，都不能單獨證明輕微，因為重量平衡、結構、性能與系統影響可能很大。",
            "重大修理／改裝有技術資料、資格、檢查及紀錄要求，常涉及 Form 337，並依 §43.9(d) 和 Appendix B 的適用程序與例外處理。Form 337 本身不替代所需核准資料，普通 A&P 權限也不等於所有重大工作的批准權限。"
          ]
        },
        {
          "title": "改裝完成，文件也要跟著更新",
          "paragraphs": [
            "設備改變可能連動重量平衡、設備清單、AFM 補充、ICA、操作限制及 AD 適用性。完成安裝只處理其中一環，實際飛行還需要文件能正確描述目前配置。",
            "實驗類別的改裝應查該機 operating limitations 與適用程序，可能涉及通知或重新完成指定試飛階段；不能把所有實驗機概括為任意改裝、任意飛行，也不應把標準類別的全部流程機械式照搬。"
          ]
        }
      ]
    },
    {
      "id": "special-permit",
      "english": "Special Flight Permits",
      "title": "特殊飛行許可與移機",
      "parent": null,
      "locator": "PHAK C 版 · 9-12",
      "printedPage": "9-12",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=12",
      "paragraphs": [
        "特殊飛行許可可讓未完全符合適用適航要求、但仍能安全飛行的航空器，在核准目的與限制下飛行，例如移往維修地點。它不是一般商業載客授權，也不是飛行員自行宣布的臨時豁免。",
        "年度逾期或失效設備可能需要這類許可，但是否核發和附帶條件由適用程序決定。涉及 AD 時另查其許可限制及 §39.23；不能概括為所有未完成 AD 都可移機，也不能說所有情況都絕對禁止。"
      ],
      "references": [
        {
          "title": "14 CFR §21.197",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-21/subpart-H/section-21.197",
          "checked": "2026-09-18"
        },
        {
          "title": "14 CFR §39.23",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-39/section-39.23",
          "checked": "2026-09-18"
        }
      ],
      "lessonBlocks": [
        {
          "title": "Figure 9-10 · 特殊許可是指定目的與條件的授權",
          "paragraphs": [
            "特殊飛行許可用於尚未完全符合適用適航要求、但能安全完成特定飛行的航空器，可包括移往維修地點、交付出口、撤離迫近危險等核准目的。§21.197 另有特定超重遠程飛行的條件，不是普遍超重豁免。",
            "原圖是 Form 8130-7 的範例，其 purpose 顯示生產試飛／客戶展示，不是所有許可都只用於送修。讀 category／designation、purpose、適用機體、期限與附帶 operating limitations；核准條件是許可的一部分。"
          ],
          "figure": {
            "label": "Figure 9-10 · Special Airworthiness Certificate",
            "page": "9-13",
            "url": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=13"
          }
        },
        {
          "title": "年度逾期與 AD 限制要分別處理",
          "paragraphs": [
            "年度逾期可評估送檢許可，但不是機長自行決定「只飛一小段」即可。FAA 可要求相應檢查與紀錄，再決定是否能在指定天氣、人員、航線或其他限制下飛行。",
            "原文說所有到期 AD 都必須先完成，過於概括。§39.23 容許在 AD 未另行禁止等條件下由適用途徑核發特殊許可；有的 AD 明定不得移機或有附帶要求。因此先讀該 AD，再查許可條件，不能推定全部可飛或全部不可飛。"
          ],
          "check": {
            "question": "維修廠在附近，年度逾期能否自行飛過去？",
            "answer": "不能只憑距離短就出發。須先確認合法授權、能安全完成該飛行及所有附帶條件。"
          }
        }
      ]
    },
    {
      "id": "ads",
      "english": "Airworthiness Directives (ADs)",
      "title": "適航指令：適用性與符合狀態",
      "parent": null,
      "locator": "PHAK C 版 · 9-12",
      "printedPage": "9-12",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=12",
      "paragraphs": [
        "AD 是 FAA 用來處理不安全狀況的強制規則，可能適用機體、引擎、螺旋槳或裝置。查核應比對型號、序號、零件及安裝狀態，再讀生效日、完成期限、重複週期與符合方法。",
        "一項 AD 做過一次，不表示其中重複檢查就永遠結束；替代符合方法 AMOC 也不能自行發明。自編例：換裝另一具引擎後需重新核對適用 AD，不能只沿用機身型號的清單。"
      ],
      "points": [
        "Applicability：先確認產品與序號範圍，不能只看 AD 標題。",
        "Compliance：確認一次性、重複性、終止措施與下一次到期條件。",
        "Service Bulletin 與 AD 不同；服務通告若被 AD 或其他適用要求納入，須按相應要求判讀。",
        "查詢使用 FAA AD 官方入口與其現行連結，不依賴原書的舊 RGL 位址。"
      ],
      "references": [
        {
          "title": "FAA：Airworthiness Directives 官方入口",
          "url": "https://www.faa.gov/aircraft/air_cert/continued_operation/ad",
          "checked": "2026-09-11"
        },
        {
          "title": "FAA · 現行 AD 查詢與發布",
          "url": "https://www.faa.gov/regulations_policies/airworthiness_directives",
          "checked": "2026-09-18"
        }
      ],
      "lessonBlocks": [
        {
          "title": "適用性、完成方法與下一次期限缺一不可",
          "paragraphs": [
            "AD 是處理產品不安全狀況的強制規則，可能適用機體、引擎、螺旋槳或裝置。查型號、序號、零件及改裝狀態，再讀生效日、符合時間、必要工作、重複間隔與可能終止措施，不只查機身型號或 AD 標題。",
            "自編例：某 AD 要求每 50 小時重複檢查，上次於 2,350 小時完成，下一次為 2,400 小時，除非實際指令另有規定。百小時的十小時送檢例外不會自動加到 AD；若尚有日曆或循環條件也要一起追蹤。"
          ],
          "check": {
            "question": "去年執行過某項 AD，是否表示已永久符合？",
            "answer": "不一定。需查是否有重複要求，以及是否已完成適用且有效的終止措施。"
          }
        },
        {
          "title": "查正式規則，區分 AD、提案、服務通告與 AMOC",
          "paragraphs": [
            "原書 RGL 和紙本訂購說明屬舊查找方式，現行可由 FAA AD 官方入口進入 DRS，並核對正式發布與修訂狀態。NPRM 提案不等於已生效 AD；服務通告也不因名稱有 mandatory 就自動與 AD 相同，但可能被 AD 或其他適用要求納入。",
            "AMOC 是獲核准的替代符合方法，必須確認對本產品、操作人與條件的適用性，不能自行用類似工作代替。緊急或一般發布途徑也不能代替閱讀 compliance 段，真正時限由該指令文字決定。"
          ]
        }
      ]
    },
    {
      "id": "responsibilities",
      "english": "Aircraft Owner/Operator Responsibilities",
      "title": "所有人／操作人的持續責任",
      "parent": null,
      "locator": "PHAK C 版 · 9-13",
      "printedPage": "9-13",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=13",
      "paragraphs": [
        "§91.403 將維持適航、包括符合適用 AD 的主要責任放在所有人或操作人。委託維修廠不會讓此責任消失，飛行前還需確認登記、適航、限制、缺陷及當次操作需求。",
        "§91.417 將一般工作紀錄與總使用時間、壽限、檢查及 AD 狀態等資料分別規定保存方式，部分需隨飛機出售移交。自編例：一疊發票不一定能證明重複 AD 的下次到期或零件剩餘壽命。"
      ],
      "references": [
        {
          "title": "14 CFR §91.403",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-E/section-91.403",
          "checked": "2026-09-11"
        },
        {
          "title": "14 CFR §91.417",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-E/section-91.417",
          "checked": "2026-09-18"
        },
        {
          "title": "47 CFR §87.18 · 航空電台執照",
          "url": "https://www.ecfr.gov/current/title-47/chapter-I/subchapter-D/part-87/subpart-B/section-87.18",
          "checked": "2026-09-18"
        }
      ],
      "lessonBlocks": [
        {
          "title": "委託維修不會消除所有人與操作人的責任",
          "paragraphs": [
            "§91.403 將維持適航、包括適用 AD 的主要責任放在所有人／操作人；飛行員仍需按適用規則判斷當次安全狀況。持續追蹤登記、適航、缺陷、壽限與紀錄，比只收集維修發票更能支持判斷。",
            "§91.417 區分一般工作紀錄與持續狀態資料的保存要求。總使用時間、壽限、檢查和 AD 狀態及所需重大改裝表格等不得因做完年度就一律丟棄，相關持續資料須依規定保存並隨出售移交。"
          ],
          "table": {
            "caption": "責任與證據",
            "headers": [
              "需管理的事項",
              "可以回查的證據"
            ],
            "rows": [
              [
                "手冊與配置",
                "修訂、補充、設備清單及重量平衡"
              ],
              [
                "定檢／壽限",
                "完成紀錄、使用時間及下一次門檻"
              ],
              [
                "AD",
                "編號／修訂、方法、重複期限"
              ],
              [
                "缺陷與延修",
                "適用依據、處置、簽放及限制"
              ],
              [
                "登記與交易",
                "有效登記、必要申報與移交資料"
              ]
            ]
          }
        },
        {
          "title": "跨境前另核對電台與登記要求",
          "paragraphs": [
            "FCC 電台執照與 FAA 登記／適航證書是不同文件。47 CFR §87.18 的免個別執照條件要求非依法約需攜帶電台且不進行國際飛行或通訊等；跨境操作不能只沿用國內的 licensed by rule 例外。",
            "同樣地，登記申請的國內臨時操作依據不能當跨境證書。應確認目的地、航路、通訊與適用個人操作資格要求，並用現行官方流程辦理所需文件，不能只依原書一行總結。"
          ]
        }
      ]
    },
    {
      "id": "summary",
      "english": "Chapter Summary",
      "title": "全章統整：證明與狀態相互核對",
      "parent": null,
      "locator": "PHAK C 版 · 9-13",
      "printedPage": "9-13",
      "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=13",
      "paragraphs": [
        "本章將手冊適用性、核准限制、文件有效性、維修紀錄與實際狀況串在一起。判斷可否操作不能只靠單張證書、一個到期日期或一項正常檢查，而要核對各項適用要求。",
        "自編複習：找到本機最新補充資料、核對年度與設備檢驗期限、選一項缺陷說明評估路徑，再找出一項 AD 的符合紀錄。每個結論都應能指回具體文件與條款，並分清 FAA 與其他體制。"
      ],
      "lessonBlocks": [
        {
          "title": "把本機文件組成可追查的決策鏈",
          "paragraphs": [
            "先確認航空器識別與配置，找到適用手冊及補充；再核對登記、適航與操作限制；接著查定檢、壽限、AD、維修與延修紀錄；最後對照眼前狀況和今日飛行需求。任何一環出現問題，都需解決或找到確實適用的合法、安全途徑。",
            "自編整合題：一架訓練機年度有效，百小時將到期，位置燈失效且預計日落後返場。先查供機／教學關係、剩餘 time in service、夜間設備及 MEL 或 §91.213 路徑，再確認處置資格和紀錄；不能只因去程白天就宣告整趟可飛。"
          ],
          "check": {
            "question": "所有證書都在機上，是否足以證明今天一定可飛？",
            "answer": "不夠。仍須核對有效條件、操作限制、檢查與 AD、失效設備、當下安全狀況及當次飛行需求。"
          }
        }
      ]
    }
  ],
  "confusions": [
    {
      "title": "示例與核准限制",
      "clarification": "教學例題不是航空器限制。",
      "example": "PHAK 例題數值不能直接用於你的訓練機。"
    },
    {
      "title": "同型號與同配置",
      "clarification": "設備及修訂仍可能不同。",
      "example": "補充手冊可能改變適用程序。"
    },
    {
      "title": "年度與百小時",
      "clarification": "適用條件與期限不同，百小時不能自動取代年度。",
      "example": "十小時移機例外不會讓年度逾期也自動獲得寬限。"
    },
    {
      "title": "MEL 與 MMEL",
      "clarification": "主清單不是本機已獲准延修的證明，還需適用授權與程序。",
      "example": "網路下載 MMEL 後不能直接把故障項目標成可放行。"
    },
    {
      "title": "執行維修與批准恢復使用",
      "clarification": "§43.3 與 §43.7 分別處理權限，完成動作不代表已取得簽放資格。",
      "example": "工作符合預防性維修項目仍需核對人員資格和紀錄。"
    },
    {
      "title": "AD 做過與持續符合",
      "clarification": "重複 AD 需追蹤下一次期限，除非已完成適用終止措施。",
      "example": "去年檢查過不代表今年無須再做。"
    },
    {
      "title": "有適航證書與當下可飛",
      "clarification": "證書不是忽略後續故障、檢查與限制的許可。",
      "example": "證書在機上，但檢查逾期或有未處理缺陷仍需評估。"
    }
  ],
  "scenario": "自編案例：兩架外觀相同的訓練機，其中一架裝了不同設備並附有補充手冊。直接把另一架的資料套上，可能漏掉重量、程序或限制差異。",
  "question": "使用性能表之前最先應核對什麼？",
  "options": [
    "表格是否彩色",
    "機型、配置與文件適用版本",
    "網路下載次數"
  ],
  "answer": 1,
  "explanation": "資料必須對應實際航空器及條件，才能進行後續計算。",
  "verified": true,
  "reader": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=231",
  "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=231",
  "detailMode": "outline",
  "checked": "2026-09-18",
  "coverageNote": "全章 39 節均已加入深入講解，共 58 個單元，附 Figure 9-1～9-10 官方原圖頁面指引。涵蓋 AFM／POH、文件、檢查、MEL、預防性維修、特殊許可、AD 及責任；案例與比較表為本站編寫。2026-09-18 核對 FAA／eCFR 補充，區分原書歷史描述、現行要求與機型適用條件，保留原有情境題及學習紀錄。"
};
