export const chapter={
  "id": "phak25c-6",
  "number": 6,
  "title": "飛行操縱",
  "english": "Flight Controls",
  "section": "第 6 章；6-1～6-12，全章目錄逐節講解",
  "goal": "理解操縱面、配平及自動駕駛如何改變飛機反應。",
  "primer": "副翼主要控制滾轉，升降舵控制俯仰，方向舵控制偏航。名稱對應的是主要作用；真實飛機存在耦合，單一操縱可能伴隨其他軸的反應。",
  "terms": [
    "Aileron · 副翼",
    "Rudder · 方向舵",
    "Trim · 配平"
  ],
  "prompts": [
    "比較 balance tab、servo tab 與 antiservo tab：機師首先控制哪個部件、小翼片如何動、控制力增加還是減少？",
    "從本章找一項尾翼和一項增升裝置，說明其設計作用及不能跨機型直接套用的操作假設。"
  ],
  "keyPoints": [
    "從指令、傳動、作動器及回饋理解系統，電傳操縱不等於自動駕駛。",
    "副翼主要滾轉、升降舵主要俯仰、方向舵主要偏航；混合機構可讓翼面兼具功能。",
    "配平片、平衡片、伺服片與反伺服片的連動和目的不同，不能只看外觀或同一個方向口訣。",
    "自動駕駛需要模式與路徑監控，不能以設備存在推定具備全部功能或通用解除方式。"
  ],
  "detailSections": [
    {
      "id": "introduction",
      "english": "Introduction",
      "title": "導論：從輸入到氣動力矩",
      "parent": null,
      "locator": "PHAK C 版 · 6-1",
      "printedPage": "6-1",
      "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=1",
      "paragraphs": [
        "飛行操縱系統把機師輸入傳到操縱面，再由氣流與壓力分布的改變產生力及力矩。機械式可用鋼索、滑輪、推拉桿等傳遞；較大或較快的飛機可能使用液壓助力及電傳操縱，不能假設座艙動作永遠直接拉動外部翼面。",
        "電傳操縱以電訊號及控制邏輯連結輸入和作動器，不代表所有操縱面都由電動馬達直接推動，也不等於自動駕駛。原文的智慧控制研究屬歷史背景，閱讀重點是辨認指令、動力、回饋及備援路徑。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 6-1 · 沿著機械傳動路徑追蹤一次輸入",
          "paragraphs": [
            "先找左側控制桿，再沿鋼索走過滑輪，最後看推桿如何使升降舵繞鉸鏈轉動。滑輪改變傳力方向，連桿與搖臂可改變位移及力的比例；座艙與尾端的移動距離不必相等。圖中線路是工作原理示意，不是可拿來調整鋼索張力的裝配圖。",
            "機師透過傳動機構克服摩擦與舵面的氣動鉸鏈力矩；操縱面再透過外部氣流對飛機施力。不要把「機師拉動升降舵」與「尾翼對飛機產生力矩」當成同一段因果。前者是機械傳動，後者才使姿態改變。"
          ],
          "figure": {
            "label": "Figure 6-1 · Mechanical flight control system",
            "page": "6-2",
            "url": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=2"
          },
          "check": {
            "question": "鋼索傳動是否表示升降舵的氣動力直接把飛機往上拉？",
            "answer": "不是。鋼索改變舵面位置，尾翼氣動力再對重心形成俯仰力矩；高度變化還取決於速度、功率與飛行路徑。"
          }
        },
        {
          "title": "IFCS：把研究年代與一般飛行系統分開",
          "paragraphs": [
            "原書提到 NASA Dryden 的 Intelligent Flight Control System，是神經網路自適應控制的研究脈絡。NASA 的技術報告記錄了 2006 年 NF-15B 飛行試驗；讀到「目前研究」時，應回到資料年代，不能當成今日所有飛機已具備的能力。",
            "自適應控制研究試圖在飛機動態特性改變時調整控制反應，但研究目標不等於任何損傷都能補救。它和機械傳動、電傳架構、自動駕駛模式是不同層次的概念，不能因飛機裝了電腦便推論具有自學或損傷恢復功能。"
          ]
        }
      ],
      "references": [
        {
          "title": "NASA：NF-15B 神經網路飛控的 2006 年試驗",
          "url": "https://ntrs.nasa.gov/citations/20060049153",
          "checked": "2026-09-14"
        }
      ]
    },
    {
      "id": "systems",
      "english": "Flight Control Systems",
      "title": "飛行操縱系統的整體關係",
      "parent": null,
      "locator": "PHAK C 版 · 6-2",
      "printedPage": "6-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=2",
      "paragraphs": [
        "同一架飛機可能結合機械連桿、液壓、電力與電腦控制。理解系統時可沿著機師輸入、訊號傳遞、作動器、操縱面和回饋逐段看，確認哪一段負責傳遞命令、哪一段提供實際移動所需能量。",
        "助力或電傳系統可能利用人工感覺裝置提供操縱回饋，手上阻力不一定等於直接承受的氣動力。自編例：液壓失效後是否仍能人工操縱，不能由控制桿還能移動就判定，須查該機型的備援設計。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 6-2 · 訊號走哪裡，移動能量從哪裡來",
          "paragraphs": [
            "圖中的控制鋼索先改變控制閥位置，液壓流向再讓動力活塞移動，帶動升降舵。機師不必直接提供全部舵面作動功；液壓供能與機械發令可以同時存在，因此「有鋼索」並不等於純人工操縱。",
            "中立表示系統在相應的平衡位置，不是沒有液壓或舵面必須永遠與尾翼齊平。圖中亦有動力解除連桿，但一張示意圖不能證明其他飛機具有同樣的人工備援；要逐段查明失去液壓、電力或訊號後，尚存哪條控制路徑。"
          ],
          "figure": {
            "label": "Figure 6-2 · Hydromechanical flight control system",
            "page": "6-2",
            "url": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=2"
          },
          "table": {
            "caption": "三種架構的比較",
            "headers": [
              "架構",
              "命令傳遞",
              "舵面移動能量／回饋"
            ],
            "rows": [
              [
                "機械式",
                "鋼索、推拉桿、連桿",
                "機師供力；可感受經機構傳回的氣動力"
              ],
              [
                "液壓機械式",
                "機械連結控制閥",
                "液壓作動；可另設人工感覺或助力回饋"
              ],
              [
                "電傳操縱",
                "電訊號與控制律",
                "可用液壓或電動作動器；手感依設計"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "controls",
      "english": "Flight Controls",
      "title": "主要與次要操縱的分類",
      "parent": "systems",
      "locator": "PHAK C 版 · 6-2",
      "printedPage": "6-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=2",
      "paragraphs": [
        "原書將副翼、升降舵或全動式水平尾翼、方向舵列為主要操縱，用於控制滾轉、俯仰及偏航；襟翼、前緣裝置、擾流板與配平系統列為次要操縱，用於性能、氣流或持續操縱力的調整。",
        "這是功能分類，不表示次要操縱不重要，也不表示一個翼面只能執行一種功能。襟副翼可同時執行增升與滾轉功能，擾流板也可參與滾轉；應從整個控制系統理解各部件的分工。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 6-3 · 從功能辨認控制，而不是照搬固定翼名稱",
          "paragraphs": [
            "直升機圖中 cyclic 改變旋翼一周中的槳距分布，讓旋翼盤與推力方向改變；collective 同時改變各槳葉槳距，改變旋翼推力需求。增加 collective 往往也增加所需功率及反扭力，並非把固定翼的升降舵換一個名字。",
            "尾旋翼構型以反扭力踏板調整偏航平衡。三種輸入彼此耦合，不能由某一控制桿的位置單獨推定爬升率或機頭姿態。本章用這張圖提醒：主要控制的名稱、傳動及操作效果，必須放回該類航空器的設計。"
          ],
          "figure": {
            "label": "Figure 6-3 · Helicopter flight control system",
            "page": "6-2",
            "url": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=2"
          }
        }
      ]
    },
    {
      "id": "primary",
      "english": "Primary Flight Controls",
      "title": "主要操縱面與三軸",
      "parent": "systems",
      "locator": "PHAK C 版 · 6-2",
      "printedPage": "6-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=2",
      "paragraphs": [
        "操縱面偏轉改變周圍流場，產生使飛機繞重心轉動的力矩。副翼主要控制縱軸滾轉，升降舵或 stabilator 主要控制橫軸俯仰，方向舵主要控制垂直軸偏航；實際動作還可能伴隨其他軸的耦合。",
        "低速時氣動操縱效能通常較低，高速時小偏轉也可能產生較大作用，但助力系統的手感與限制依機型而異。操縱止擋限制行程，不代表全行程在所有速度和多軸組合下都安全，仍須遵守操作限制。"
      ],
      "points": [
        "Aileron → Roll → Longitudinal axis：副翼、滾轉、縱軸。",
        "Elevator／Stabilator → Pitch → Lateral axis：升降舵／全動式水平尾翼、俯仰、橫軸。",
        "Rudder → Yaw → Vertical axis：方向舵、偏航、垂直軸。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 6-4 · 運動軸與穩定性名稱交叉對照",
          "paragraphs": [
            "三條軸都通過重心。滾轉繞機頭到機尾的縱軸，俯仰繞左右翼方向的橫軸，偏航繞垂直軸。容易混淆的是「縱向穩定性」描述俯仰穩定，而不是繞縱軸滾轉；應把軸的幾何方向與穩定性分類分開記。",
            "舵面偏轉先產生力矩，力矩改變角運動，飛機才逐漸形成新姿態。相同偏轉在不同速度、迎角與局部流場下不會給出固定姿態；人工手感或控制律也可能改變機師感受到的反應。"
          ],
          "figure": {
            "label": "Figure 6-4 · Controls, axes and stability",
            "page": "6-3",
            "url": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=3"
          },
          "table": {
            "caption": "三軸對照",
            "headers": [
              "主要控制",
              "運動",
              "旋轉軸",
              "相關穩定性"
            ],
            "rows": [
              [
                "副翼",
                "Roll 滾轉",
                "Longitudinal 縱軸",
                "Lateral 橫向"
              ],
              [
                "升降舵／stabilator",
                "Pitch 俯仰",
                "Lateral 橫軸",
                "Longitudinal 縱向"
              ],
              [
                "方向舵",
                "Yaw 偏航",
                "Vertical 垂直軸",
                "Directional 方向"
              ]
            ]
          },
          "check": {
            "question": "俯仰繞橫軸，為何稱縱向穩定？",
            "answer": "軸名稱指出旋轉軸的方向；縱向穩定則是描述俯仰方面的穩定性，兩套名稱不是同一種分類。"
          }
        },
        {
          "title": "操縱力、操縱效能與止擋是三件事",
          "paragraphs": [
            "對常規氣動操縱面，可用動壓 q＝½ρV² 理解速度影響：密度及係數相同時，局部氣流速度加倍，動壓成為四倍。實際力矩還乘上面積、尺度與氣動係數，因此不能把所有飛行狀態下的舵面力量簡化為同一倍數。",
            "止擋限制幾何行程，不會自動限制機翼或尾翼載荷。人工感覺裝置提供的阻力也未必是實際舵面載荷的直接縮小版；速度限制、迎角、操縱輸入率與多軸組合仍需分別考慮。"
          ]
        }
      ]
    },
    {
      "id": "ailerons",
      "english": "Ailerons",
      "title": "副翼：左右升力差產生滾轉",
      "parent": "primary",
      "locator": "PHAK C 版 · 6-3",
      "printedPage": "6-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=3",
      "paragraphs": [
        "典型副翼位於機翼外側後緣，左右反向偏轉。向右輸入時，右副翼上偏降低該側翼型的升力貢獻，左副翼下偏提高另一側的升力貢獻，形成向右滾轉力矩；這是常規未失速流動下的入門描述。",
        "副翼控制的是滾轉反應，不是把操縱盤固定某角度就保證飛機停在相同傾斜角。建立傾斜後仍需觀察並調整，偏轉帶來的阻力差也可能產生反向偏航，必須連同方向舵協調理解。"
      ],
      "supplementalHeading": true,
      "lessonBlocks": [
        {
          "title": "右滾輸入：先分左右升力，再看機頭方向",
          "paragraphs": [
            "在常規未失速流動下，右副翼上偏使右側升力減少，左副翼下偏使左側升力增加；兩側作用乘上距重心的力臂，形成右滾力矩。副翼常設在外翼，正是因為較大的力臂可有效產生滾轉。",
            "要區分滾轉開始、建立傾斜與維持轉彎。固定右輸入通常仍在要求右滾力矩，不是把傾斜角鎖在某個數字。完成入坡後所需輸入受滾轉阻尼、機型特性與擾動影響；不能把原書「放鬆壓力」解讀成所有轉彎中控制必然完全置中。"
          ],
          "check": {
            "question": "右副翼上偏時，機頭一定立即向右偏嗎？",
            "answer": "不一定。右滾與偏航是不同運動；副翼阻力差可能先產生向左的不利偏航。"
          }
        }
      ]
    },
    {
      "id": "adverse-yaw",
      "english": "Adverse Yaw",
      "title": "反向偏航與協調",
      "parent": "ailerons",
      "locator": "PHAK C 版 · 6-3",
      "printedPage": "6-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=3",
      "paragraphs": [
        "副翼讓兩翼升力及阻力改變，可能使機頭暫時朝預期滾轉的反方向偏航。例如開始右滾時，左翼增加的阻力可使機頭偏左；這與需要向右建立傾斜的意圖相反，因此稱為反向偏航。",
        "低速、大副翼偏轉等條件下效果可能更明顯，但所需協調量隨機型與狀態而異。自編辨別：機翼向右傾斜不保證機身已對準相對氣流；應以適當觀察與操縱保持協調，不能一律用固定踏板量。"
      ],
      "supplementalHeading": true,
      "lessonBlocks": [
        {
          "title": "Figure 6-5 · 看升起的機翼，也看它增加的阻力",
          "paragraphs": [
            "圖中較大的升力箭頭對應正在抬高的一側機翼，該側增加的阻力使它稍微落後，機頭便朝它偏轉。以右滾為例，左翼升力增加並上升，左翼較大的阻力卻使機頭偏左；這就是 adverse yaw，也常稱不利偏航。",
            "低速時為取得相同滾轉反應可能需要較大副翼偏轉，而方向舵在較小動壓下的效能也可能下降，因此協調更需要觀察。方向舵用於抵銷偏航；升降舵則配合轉彎中的升力需求，不能用過量方向舵替代所需傾斜角。"
          ],
          "figure": {
            "label": "Figure 6-5 · Adverse yaw",
            "page": "6-3",
            "url": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=3"
          }
        },
        {
          "title": "入坡、穩定轉彎與出坡的控制目的",
          "paragraphs": [
            "入坡時副翼建立滾轉，方向舵配合維持協調；若要求保持高度，傾斜後的升力垂直分量減少，通常需調整迎角及功率。協調、等高度、穩定轉彎才適用 n＝1／cosφ；不是任何瞬間都因傾斜就自動得到同樣載荷。",
            "出坡時以反向滾轉輸入減小傾斜，所需偏航協調也跟著改變。回到較小傾斜時，維持等高度所需升力減少，原先的後拉力通常要調整。這是一串依反應修正的動作，不是一組不分速度與構型的固定控制角度。"
          ]
        }
      ]
    },
    {
      "id": "differential",
      "english": "Differential Ailerons",
      "title": "差動副翼",
      "parent": "ailerons",
      "locator": "PHAK C 版 · 6-4",
      "printedPage": "6-4",
      "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=4",
      "paragraphs": [
        "差動副翼讓上偏副翼的行程大於另一側下偏行程，藉調整兩側氣動作用減輕反向偏航。這裡的 differential 是上下偏轉幅度不同，不只是一般副翼左右反向動作。",
        "它是減輕副作用的設計方式，不保證完全消除反向偏航或不需方向舵。自編練習：在原圖中比較上下偏角，再解釋為何僅看到兩邊都在動，還不足以辨認它是否具有差動安排。"
      ],
      "supplementalHeading": true,
      "lessonBlocks": [
        {
          "title": "Figure 6-6 · 「差動」比較的是上下偏轉量",
          "paragraphs": [
            "對照上、下兩個截面：上偏角度比下偏角度大。這種安排限制下偏側的部分增升與增阻，同時利用上偏側的氣動阻力特性，減少兩側造成不利偏航的差別；不是讓兩個副翼往同一方向動。",
            "觀察時要有中立位置作基準，才能比較角度。差動比是設計結果，不應從這張非比例示意圖計算某機型的角度；它也不保證在所有迎角下消除偏航。"
          ],
          "figure": {
            "label": "Figure 6-6 · Differential ailerons",
            "page": "6-4",
            "url": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=4"
          }
        }
      ]
    },
    {
      "id": "frise",
      "english": "Frise-Type Ailerons",
      "title": "Frise 型副翼",
      "parent": "ailerons",
      "locator": "PHAK C 版 · 6-4",
      "printedPage": "6-4",
      "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=4",
      "paragraphs": [
        "Frise 型副翼利用偏置鉸鏈，使上偏時部分前緣伸入翼下氣流，增加該側阻力，以協助平衡另一側副翼下偏所增加的阻力。原文也說明其縫隙安排可幫助下偏副翼的氣流。",
        "這種方式與差動副翼不是互斥，某設計可以同時具有兩者。辨認時看鉸鏈位置及偏轉後前緣的相對位置，而不是只看外觀名稱；其作用仍是減輕反向偏航，不能視為所有狀態自動協調。"
      ],
      "supplementalHeading": true,
      "lessonBlocks": [
        {
          "title": "Figure 6-7 · 找鉸鏈與上偏副翼伸出的前緣",
          "paragraphs": [
            "先比較 Neutral、Raised、Lowered 三個截面。Raised 圖的副翼後緣上移，但因鉸鏈位置安排，副翼前緣的一部分向翼下伸出；這部分與氣流作用增加阻力，協助抵銷另一翼下偏副翼的增阻。",
            "Lowered 圖的通道讓氣流流過下偏副翼上表面，有助於維持附著。Frise 描述外形及鉸鏈效果，differential 描述行程比例，兩者可以出現在同一組副翼上；不宜把它們背成只能二選一的型號。"
          ],
          "figure": {
            "label": "Figure 6-7 · Frise-type ailerons",
            "page": "6-4",
            "url": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=4"
          },
          "check": {
            "question": "上偏副翼既然降低升力，為何還刻意增加阻力？",
            "answer": "為了減少它與另一側下偏副翼的阻力差，降低不利偏航；目的不是增加該側升力。"
          }
        }
      ]
    },
    {
      "id": "coupled",
      "english": "Coupled Ailerons and Rudder",
      "title": "副翼與方向舵連動",
      "parent": "ailerons",
      "locator": "PHAK C 版 · 6-4",
      "printedPage": "6-4",
      "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=4",
      "paragraphs": [
        "某些系統以彈簧及連桿連結副翼和方向舵，滾轉輸入時同時提供部分方向舵偏轉，協助抵銷副翼造成的偏航。原書例子中的彈簧連動可由機師克服，以保留需要側滑等情況的操縱能力。",
        "連動不是自動駕駛，也不是保證所有速度與功率下都完全協調。自編例：操縱盤轉動時踏板跟著動，可能是連動特性，應先理解該機型設計，不能僅憑這個現象判定方向舵由電腦控制。"
      ],
      "supplementalHeading": true,
      "lessonBlocks": [
        {
          "title": "Figure 6-8 · 連動彈簧提供協調幫助，不是閉迴路導航",
          "paragraphs": [
            "上圖顯示副翼與方向舵同時動，下圖則把原因定位到兩組操縱間的彈簧與連接機構。機師給滾轉輸入時，連動機構一併施加部分方向舵需求；它依機械關係動作，而不是讀取航跡後自動追蹤目的地。",
            "原文示例的彈簧力可以由踏板輸入克服，讓兩軸仍可有不同需求。但是否可克服、所需力量及可用側滑範圍，都不能由這張圖推廣到別的機型；連動也無法事先固定補償所有速度和功率造成的偏航。"
          ],
          "figure": {
            "label": "Figure 6-8 · Coupled ailerons and rudder",
            "page": "6-5",
            "url": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=5"
          }
        }
      ]
    },
    {
      "id": "flaperons",
      "english": "Flaperons",
      "title": "襟副翼與混合機構",
      "parent": "ailerons",
      "locator": "PHAK C 版 · 6-5",
      "printedPage": "6-5",
      "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=5",
      "paragraphs": [
        "襟副翼將副翼與襟翼功能合在同一組活動面：差動偏轉提供滾轉，共同下偏提供襟翼效果。機師仍可有分開的滾轉與襟翼輸入，混合機構再將兩者組合成各翼面的實際位置。",
        "自編例：左右襟副翼已共同下偏時，向右滾轉輸入是在這個基礎上增加左右差別，不代表其中一側一定回到原來收起的位置。可用行程、操縱效能及襟翼限制需依機型，不能直接套用傳統分離式副翼配置。"
      ],
      "supplementalHeading": true,
      "lessonBlocks": [
        {
          "title": "Figure 6-9 · 把共同下偏與左右差動疊加",
          "paragraphs": [
            "照片中的 Kitfox 用外露於機翼後方的翼面同時執行襟翼與副翼功能。要理解其運動，可先想像兩側共同下偏到襟翼設定，再疊加左右相反的滾轉需求；混合機構負責把兩個輸入轉成實際行程。",
            "因此「右側上移」可能只是從較大的下偏回到較小的下偏，不一定越過收起時的中立線。襟翼設定改變可用行程與流場，實際滾轉效能需由設計及手冊判定；照片不能告訴你允許的最大速度或操縱量。"
          ],
          "figure": {
            "label": "Figure 6-9 · Flaperons",
            "page": "6-5",
            "url": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=5"
          }
        }
      ]
    },
    {
      "id": "elevator",
      "english": "Elevator",
      "title": "升降舵與俯仰力矩",
      "parent": "primary",
      "locator": "PHAK C 版 · 6-5",
      "printedPage": "6-5",
      "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=5",
      "paragraphs": [
        "傳統尾翼的升降舵位於水平安定面後緣。向後拉控制桿通常使其後緣上偏，改變尾翼氣動力，對重心產生抬頭力矩；力矩大小與尾翼效能、力臂、局部氣流及重心位置有關。",
        "升降舵直接影響俯仰與迎角，不是按一下就直接增加高度。自編例：機頭抬起後，飛機可能爬升或因速度不足而減速，需結合功率和整體飛行狀態判斷；尾翼受力方向也不能由這個典型例子推論所有構型。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 6-10 · 以重心為支點讀俯仰力矩",
          "paragraphs": [
            "圖中控制柱後移、升降舵後緣上偏，尾翼向下的氣動作用增加；這個力位於重心後方，於是尾部下移、機頭上仰。讀箭頭時必須同時看施力點與重心，不能把尾端向下的力誤讀成飛機只會下降。",
            "力矩約為尾翼力乘上對重心的垂直力臂。重心移動、螺旋槳滑流、機翼下洗及尾翼迎角都會影響結果。圖畫的是典型尾翼受向下力的情境；某些構型或狀態的尾翼可以承受向上力，但控制仍靠改變對重心的淨力矩。"
          ],
          "figure": {
            "label": "Figure 6-10 · Elevator and pitching moment",
            "page": "6-5",
            "url": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=5"
          },
          "check": {
            "question": "拉桿讓機頭上仰，是否就保證爬升？",
            "answer": "不保證。姿態、迎角與飛行路徑不同；可用能量與速度不足時，抬頭可能主要造成減速。"
          }
        }
      ]
    },
    {
      "id": "t-tail",
      "english": "T-Tail",
      "title": "T 型尾翼的氣流與深失速",
      "parent": "primary",
      "locator": "PHAK C 版 · 6-6",
      "printedPage": "6-6",
      "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=6",
      "paragraphs": [
        "T 型尾翼將水平尾翼設在垂直尾翼頂端，正常狀態下可避開部分機身、機翼或引擎排流，亦有安裝及離水高度等考量。它同時帶來結構剛性、重量與局部氣流的設計取捨，不能只按字形判定操縱優劣。",
        "在某些大迎角狀態下，機翼分離尾流可能遮蔽高置水平尾翼，降低壓低機頭的能力，形成深失速風險。實際是否易發、控制力大小及保護裝置都依機型；後重心可能加重恢復困難，不能認為保護裝置允許超出重心範圍。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 6-11 · 深失速的關鍵是尾翼落入分離尾流",
          "paragraphs": [
            "圖中的機翼大迎角分離流向後擴展，水平尾翼可能正好進入低能量、紊亂的尾流。此時即使升降舵已偏轉，尾翼也未必能產生足夠壓低機頭的力矩；困難不是控制桿本身少移動了幾公分，而是氣動效能降低。",
            "高置尾翼在其他狀態可以避開部分干擾，但不代表所有迎角都在乾淨氣流中。後重心可使恢復俯仰控制更困難；深失速也不是所有 T 型尾翼必然發生、其他尾翼必然不會發生的二分法。"
          ],
          "figure": {
            "label": "Figure 6-11 · T-tail at high AOA and aft CG",
            "page": "6-6",
            "url": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=6"
          }
        },
        {
          "title": "Figure 6-12 · 升降舵下壓彈簧與配平的平衡",
          "paragraphs": [
            "沿圖中搖臂、支點與 down spring 追蹤：彈簧在機構中加入使升降舵朝低頭方向移動的偏置力。正常配平時，氣動作用與配平安排可平衡這個偏置；流場與速度改變時，這份機械力不會像氣動力一樣依動壓衰減。",
            "它是特定設計中的操縱力安排，不是偵測迎角後主動推桿的 stick pusher，也不是保證不失速的裝置。其存在更不能擴大允許重心範圍；落地拉平時的升降舵效能仍要考慮低速、功率與前重心需求。"
          ],
          "figure": {
            "label": "Figure 6-12 · Elevator down spring",
            "page": "6-7",
            "url": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=7"
          }
        }
      ]
    },
    {
      "id": "stabilator",
      "english": "Stabilator",
      "title": "全動式水平尾翼",
      "parent": "primary",
      "locator": "PHAK C 版 · 6-7",
      "printedPage": "6-7",
      "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=7",
      "paragraphs": [
        "Stabilator 由整片水平尾翼繞樞軸轉動，結合安定面與升降舵的功能，和固定安定面後方附一片升降舵不同。整片翼面的氣動作用讓它能有效控制俯仰，也需適當的操縱力與平衡設計。",
        "原書例子在後緣設置 antiservo tab，使操縱時的回饋力增加、降低過度敏感；也可能設平衡配重。配重是質量平衡部件，antiservo tab 則用氣動作用調整手感，不能把兩種「平衡」機制混成同一零件。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 6-13 · 全動尾翼、反伺服片與配重各做什麼",
          "paragraphs": [
            "先找 pivot point：整片 stabilator 繞樞軸轉動，並非只有後緣小片在動。圖中的 antiservo tab 隨主面後緣同向偏轉，產生反對繼續操縱的氣動鉸鏈力矩，增加手感，讓機師不易用很小力量造成過大反應。",
            "balance weight 位於樞軸前方，主要改變翼面的質量平衡，與小翼片利用氣流產生力矩是不同機制。質量平衡與振動／顫振設計有關，不是機師日常移動重物以設定飛行配平。"
          ],
          "figure": {
            "label": "Figure 6-13 · Stabilator",
            "page": "6-7",
            "url": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=7"
          },
          "check": {
            "question": "反伺服片與主面同向，是否表示它在幫忙主面偏轉？",
            "answer": "不是。後緣同向偏轉所產生的氣動鉸鏈力矩反對主面的操縱，增加所需控制力。"
          }
        }
      ]
    },
    {
      "id": "canard",
      "english": "Canard",
      "title": "鴨式前翼與升力分配",
      "parent": "primary",
      "locator": "PHAK C 版 · 6-7",
      "printedPage": "6-7",
      "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=7",
      "paragraphs": [
        "Canard 把提供縱向功能的翼面放在主翼前方，常以向上的氣動力形成俯仰平衡，與原書典型後尾翼例子不同。全機需共同安排前翼、主翼的升力、力矩及相互氣流，而不是單把尾翼搬到前面即可。",
        "不同前翼可為固定、可動或帶活動面，不能只看前方有翼面就認定整片都能轉動。原書的效率描述是設計概念，實際阻力與失速順序依整體設計；前翼構型也不自動代表不會失速或必然較省油。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 6-14 · 前翼的位置不等於全機控制配置",
          "paragraphs": [
            "看照片時除機鼻前翼，也要找主翼與後方水平尾翼。P.180 是製造商描述的三升力面構型，不能把照片解讀為任何有前翼的飛機都取消了後尾翼。全機升力分配與俯仰平衡要同時考慮這些翼面。",
            "原圖說中的「variable-sweep canard」不宜當成辨識 P.180 的依據；本頁以可核對的三升力面配置說明，不由照片推論前翼能改變後掠角。一般 canard 的活動方式與失速順序仍依設計，不能保證前翼永遠先失速、主翼永遠受到保護。"
          ],
          "figure": {
            "label": "Figure 6-14 · P.180 three-lifting-surface configuration",
            "page": "6-7",
            "url": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=7"
          }
        }
      ],
      "references": [
        {
          "title": "Piaggio Aerospace：P.180 的三升力面構型",
          "url": "https://www.piaggioaerospace.it/en/news/piaggio-aerospace-the-p180-fleet-reaches-one-million-flight-hours",
          "checked": "2026-09-14"
        }
      ]
    },
    {
      "id": "rudder",
      "english": "Rudder",
      "title": "方向舵與偏航",
      "parent": "primary",
      "locator": "PHAK C 版 · 6-8",
      "printedPage": "6-8",
      "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=8",
      "paragraphs": [
        "方向舵位於垂直尾翼後緣，偏轉後改變側向氣動力，使飛機繞垂直軸偏航。典型左踏板輸入使方向舵左偏，尾部受力向右，機頭偏左；效果取決於氣流速度，螺旋槳滑流也可能影響它。",
        "方向舵可協助協調轉彎與處理側滑，但不是像汽車方向盤一樣單獨完成所有轉彎。大幅或快速反向輸入可能帶來高載荷，即使操縱行程允許也不表示任何速度皆適合；須依機型限制和訓練操作。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 6-15 · 尾部受力方向與機頭轉向相反",
          "paragraphs": [
            "左踏板前推，方向舵後緣向左偏轉，圖中的尾部側向氣動力向右。因為施力點在重心後方，形成機頭向左的偏航力矩；以重心為支點，就能理解為何「力向右」卻「機頭向左」。",
            "方向舵也可能間接引起滾轉，主因包括側滑與機翼的橫向氣動反應，所以偏航控制不是與其他軸完全隔離。踏板能動到止擋並不表示尾翼載荷可接受，尤其不能把設計機動速度當作快速反覆反向踏舵的通用保證。"
          ],
          "figure": {
            "label": "Figure 6-15 · Effect of left rudder pressure",
            "page": "6-8",
            "url": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=8"
          }
        }
      ]
    },
    {
      "id": "v-tail",
      "english": "V-Tail",
      "title": "V 型尾翼與舵面混合",
      "parent": "primary",
      "locator": "PHAK C 版 · 6-8",
      "printedPage": "6-8",
      "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=8",
      "paragraphs": [
        "V 型尾翼用兩片傾斜翼面共同提供水平及垂直尾翼的功能，其活動面常稱 ruddervators。俯仰輸入使兩側按俯仰需求共同動作，偏航輸入則透過差動作用形成所需側向力與力矩。",
        "同時輸入升降舵與方向舵時，混合機構將兩種需求合成到各舵面，不能把單片簡單標成升降舵、另一片標成方向舵。結構、耦合反應與阻力效果依設計，不應僅因少一片尾翼就保證效率更高。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 6-16 · 兩片 ruddervator 如何合成兩種控制",
          "paragraphs": [
            "圖中的 V35 尾翼兩片面都傾斜，因此各自的氣動力同時有垂直與側向分量。俯仰輸入讓兩側共同形成所需的垂直合力；偏航輸入則利用差動形成側向合力，混合機構把控制柱與踏板需求組合。",
            "同時輸入兩軸時，每片的實際角度是混合結果，行程也需共同分配。少一片尾翼並不保證全機更輕或阻力必然更小，原文對 Dutch roll 的概括也不能直接當成每一架 V 型尾翼的相同特性。"
          ],
          "figure": {
            "label": "Figure 6-16 · V-tail and ruddervators",
            "page": "6-8",
            "url": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=8"
          }
        }
      ]
    },
    {
      "id": "secondary",
      "english": "Secondary Flight Controls",
      "title": "次要操縱系統的角色",
      "parent": "systems",
      "locator": "PHAK C 版 · 6-8",
      "printedPage": "6-8",
      "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=8",
      "paragraphs": [
        "次要操縱系統包括襟翼、前緣裝置、擾流板及配平系統，協助調整性能、流動或持續操縱力。這些裝置的展開可能同時改變升力、阻力、力矩與操縱需求，所以不能把它們視為彼此獨立的開關。",
        "自編例：放襟翼後即使目的是低速飛行，仍要管理姿態、速度與配平變化。分類中的「次要」不代表可忽略故障或限制，實際使用需確認對稱性、位置指示及機型允許的速度與構型。"
      ],
      "lessonBlocks": [
        {
          "title": "構型變化是一組力與力矩的變化",
          "paragraphs": [
            "襟翼或前緣裝置主要為低速升力能力服務，擾流板可降低升力並增加阻力，配平則處理持續操縱力。但同一裝置展開時，可能同時改變升力、阻力、俯仰力矩與其他操縱面的局部流場。",
            "自編情境：飛機放下襟翼後仍沿原方向前進，不代表已自動穩定在新的進場速度。應辨認速度及姿態趨勢，再按機型程序建立需要的飛行狀態；是否要重新配平、調整多少功率，取決於新狀態而不是裝置名稱。"
          ]
        }
      ]
    },
    {
      "id": "flaps",
      "english": "Flaps",
      "title": "襟翼類型與增升、增阻",
      "parent": "secondary",
      "locator": "PHAK C 版 · 6-8",
      "printedPage": "6-8",
      "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=8",
      "paragraphs": [
        "襟翼改變後緣幾何，通常增加彎度及最大升力係數，某些設計也增加有效翼面積。原書依基本機制介紹簡單式、分裂式、開縫式及 Fowler 式，圖中另呈現開縫 Fowler 的組合；分類不是互斥的商品名稱。",
        "小幅與大幅展開的升力、阻力增益不同，後段行程可能主要增加阻力，俯仰反應也依全機而異。不能把襟翼當成越多越能爬升的裝置，或一概認為會抬頭／低頭；操作速度、起飛設定及收放順序須查手冊。"
      ],
      "points": [
        "Plain flap／簡單式：後緣整段下偏，改變翼型彎度。",
        "Split flap／分裂式：下表面片下偏，常形成較大的尾流與阻力。",
        "Slotted flap／開縫式：縫隙使氣流進入襟翼上表面，幫助延緩分離。",
        "Fowler flap／Fowler 式：向後移動增加面積並配合下偏，亦可結合多段開縫。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 6-17 · 用幾何與氣流比較五種襟翼示例",
          "paragraphs": [
            "從基本翼型往下看：plain 是後緣整段下偏，split 是下表面片張開，slotted 加入通道，Fowler 則後移並下偏，最下方把後移與開縫結合。圖中的五種示例包含組合型式，不是五種互不相容的基本原理。",
            "增加彎度可改變相同迎角下的升力係數；向後移動也能增加有效翼面積；開縫則讓較高能量氣流到達襟翼上表面，幫助延緩分離。這些效果共同提高低速升力能力，但大角度展開的新增阻力可能遠大於新增升力。"
          ],
          "figure": {
            "label": "Figure 6-17 · Flap types",
            "page": "6-9",
            "url": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=9"
          },
          "table": {
            "caption": "襟翼讀圖比較",
            "headers": [
              "型式",
              "主要幾何特徵",
              "讀圖重點"
            ],
            "rows": [
              [
                "Plain",
                "整段後緣下偏",
                "增加彎度；大角度可能分離"
              ],
              [
                "Split",
                "下表面片下偏",
                "後方尾流及增阻明顯"
              ],
              [
                "Slotted",
                "襟翼前方有通道",
                "上表面氣流能量與附著"
              ],
              [
                "Fowler",
                "向後移動再下偏",
                "有效面積與彎度改變"
              ],
              [
                "Slotted Fowler",
                "後移加開縫",
                "面積與延緩分離的組合"
              ]
            ]
          }
        },
        {
          "title": "較低失速速度，不等於任何襟翼位置都有較好爬升",
          "paragraphs": [
            "固定重量、載荷與密度下，失速速度由可用的最大升力能力決定。襟翼提高最大升力係數，若同時改變面積，也須使用一致的參考面積與係數定義；不能任意把同一增升效果重複算兩次。",
            "爬升還要看剩餘推力或功率。大襟翼帶來的阻力可降低爬升能力，收襟翼也會改變升力與俯仰需求，並非只把阻力拿掉。不同襟翼位置的限制速度、起飛或重飛程序，應回到該機型資料。"
          ],
          "check": {
            "question": "為何不能說「最大襟翼讓失速速度最低，所以最適合爬升」？",
            "answer": "因為爬升取決於剩餘推力或功率；大襟翼雖提高低速升力能力，也可能產生大量阻力。"
          }
        }
      ]
    },
    {
      "id": "leading-edge",
      "english": "Leading Edge Devices",
      "title": "前緣縫隙、縫翼、襟翼與袖套",
      "parent": "secondary",
      "locator": "PHAK C 版 · 6-9",
      "printedPage": "6-9",
      "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=9",
      "paragraphs": [
        "前緣裝置用於改善較大迎角下的流動及最大升力能力。Slot 是縫隙，slat 是可形成縫隙的前緣翼段，兩者不是同一零件名稱；固定縫隙與可動裝置的幾何和運作方式也不同。",
        "某些縫翼會依氣動力自動伸出，另一些由機師或系統控制，不能只因名稱是 slat 就假定自動。前緣襟翼改變幾何，固定 cuff 則改變前緣輪廓；各方式在低速效能、阻力及複雜度間取捨。"
      ],
      "points": [
        "Fixed slot：固定氣流通道；與活動翼段分開辨識。",
        "Movable slat：前緣翼段可移動，展開形成適當氣流通道。",
        "Leading edge flap：改變前緣幾何，常配合後緣增升裝置。",
        "Leading edge cuff：固定的前緣外形修改，並非每次起降都收放。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 6-18 · Slot 是通道，slat 是翼段",
          "paragraphs": [
            "第一圖是固定 slot，第二圖的可動前緣翼段是 slat，展開後形成 slot；第三圖改變前緣形狀，第四圖則以固定 cuff 修改輪廓。圖中「Movable slot」強調可形成的通道，學零件名稱時仍應把翼段與縫隙分開。",
            "這些裝置主要透過延緩分離、改變前緣流場或彎度增加最大升力能力，並不具有完全相同的運動。自動縫翼可隨氣動載荷移動，但其他縫翼由控制系統作動；固定 cuff 不會因機師放襟翼才伸出。"
          ],
          "figure": {
            "label": "Figure 6-18 · Leading edge high-lift devices",
            "page": "6-9",
            "url": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=9"
          },
          "table": {
            "caption": "前緣裝置辨認",
            "headers": [
              "裝置",
              "是否必須活動",
              "主要特徵"
            ],
            "rows": [
              [
                "固定 slot",
                "否",
                "固定通道改善大迎角流動"
              ],
              [
                "Slat 縫翼",
                "依設計",
                "前緣翼段移動後形成通道"
              ],
              [
                "前緣襟翼",
                "是",
                "改變前緣幾何／彎度"
              ],
              [
                "Cuff 袖套",
                "否",
                "永久修改前緣輪廓"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "spoilers",
      "english": "Spoilers",
      "title": "擾流板的三種用途",
      "parent": "secondary",
      "locator": "PHAK C 版 · 6-10",
      "printedPage": "6-10",
      "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=10",
      "paragraphs": [
        "擾流板展開會減少相關翼段升力並增加阻力，可用於下降與減速、輔助滾轉，以及接地後卸除升力。單側展開可使該翼下降；接地後減少翼面支承，能增加由輪子承受的重量並改善煞車條件。",
        "各機型的飛行擾流板、地面擾流板與減速板邏輯可能不同，同一翼面也可兼用。展開後的速度和下降率仍取決於姿態、功率及控制，不保證自動維持速度；不得將接地專用展開方式直接搬到空中。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 6-19 · 對稱、差動與地面卸升力",
          "paragraphs": [
            "照片顯示翼面上的板片升起，破壞原有流動，通常降低升力並增加阻力。兩側對稱伸出可用來管理減速或下降；不對稱伸出可降低一側升力，協助向該側滾轉。哪幾片負責哪種功能，則依控制系統安排。",
            "接地後卸除機翼升力，會增加起落架承受的正向負荷，使輪胎煞車更有效。這和空中產生滾轉是不同用途；地面擾流板的自動展開條件、空中使用限制及故障處置，無法只從照片判讀。"
          ],
          "figure": {
            "label": "Figure 6-19 · Spoilers",
            "page": "6-10",
            "url": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=10"
          },
          "check": {
            "question": "擾流板和襟翼都伸出翼面，為何不能視為同一種增升裝置？",
            "answer": "擾流板主要破壞流動、降低升力並增加阻力；襟翼則主要提高低速升力能力，兩者作用不同。"
          }
        }
      ]
    },
    {
      "id": "trim-systems",
      "english": "Trim Systems",
      "title": "配平：減輕持續操縱力",
      "parent": "secondary",
      "locator": "PHAK C 版 · 6-10",
      "printedPage": "6-10",
      "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=10",
      "paragraphs": [
        "配平讓機師在選定飛行狀態下不必長時間維持相同控制力，可透過小翼片、可調安定面或其他機構達成。目的在設定適當的力平衡，不是把飛機鎖在某高度，也不是移動行李來改變重心。",
        "通常先建立所需功率、姿態和構型，再配平以減輕持續操縱力；狀態改變後可能需重新配平。自編例：巡航時手感輕鬆，放襟翼減速後又需要施力，是新狀態的力矩需求改變，不代表先前配平失效。"
      ],
      "supplementalHeading": true,
      "lessonBlocks": [
        {
          "title": "配平消除持續施力，不是鎖住高度",
          "paragraphs": [
            "假設手動飛行時，為維持目前速度與姿態一直需要後拉力。配平調整系統的力矩或控制力平衡，讓機師維持該狀態所需的持續力量減小；它不是保證飛機對所有擾動都回到同一高度的控制模式。",
            "功率、速度或襟翼改變後，原來的平衡通常也改變。先按訓練程序建立需要的狀態，再配平減少施力，能把「操縱飛機」與「解除持續控制力」分清楚；有配平仍需監控，配平失效也可能顯著影響操縱工作量。"
          ],
          "table": {
            "caption": "小翼片依作用分類",
            "headers": [
              "型式",
              "誰先受命令",
              "相對動作與目的"
            ],
            "rows": [
              [
                "Trim tab",
                "配平控制改變小片設定",
                "以氣動力矩減少持續控制力"
              ],
              [
                "Balance tab",
                "主面移動帶動連桿",
                "小片通常反向，協助偏轉"
              ],
              [
                "Servo tab",
                "機師主要驅動小片",
                "小片氣動力帶動主面"
              ],
              [
                "Antiservo tab",
                "主面移動帶動小片",
                "通常同向，增加控制力；可兼配平"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "trim-tabs",
      "english": "Trim Tabs",
      "title": "配平片與主操縱面的反向作用",
      "parent": "trim-systems",
      "locator": "PHAK C 版 · 6-10",
      "printedPage": "6-10",
      "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=10",
      "paragraphs": [
        "在典型升降舵配平片系統中，nose-up 配平使小翼片後緣向下，氣流作用再使升降舵傾向上偏，減輕原先需要持續向後拉的力。名稱 nose-up 描述對飛機的配平意圖，不是小翼片本身一定向上。",
        "這個反向關係適用於此種配平片，不能直接套到全動尾翼的 antiservo tab 或可調安定面。閱讀原圖時依正文追蹤「配平片 → 升降舵 → 尾部受力 → 機頭」的順序，避免只記某一支箭頭。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 6-20 · 修正下半圖的方向標示",
          "paragraphs": [
            "典型升降舵配平片要分三步看：nose-down trim 使配平片後緣上偏，其氣動鉸鏈力矩促使升降舵後緣下偏，形成低頭方向的控制效果。nose-up trim 則相反：配平片後緣下偏，促使升降舵後緣上偏。",
            "原圖下半部雖標「Nose-up trim」，底下文字卻寫「Tab up—elevator up」，與同頁正文及配平片原理不一致；應讀成「Tab down—elevator up」。這個修正針對圖示的升降舵配平片，不可套用到同向運動的反伺服片。"
          ],
          "figure": {
            "label": "Figure 6-20 · Elevator trim tab direction",
            "page": "6-11",
            "url": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=11"
          },
          "table": {
            "caption": "典型升降舵配平片方向",
            "headers": [
              "配平需求",
              "配平片後緣",
              "促使升降舵後緣"
            ],
            "rows": [
              [
                "低頭 Nose-down",
                "上偏",
                "下偏"
              ],
              [
                "抬頭 Nose-up",
                "下偏",
                "上偏"
              ]
            ]
          },
          "check": {
            "question": "抬頭配平時，典型升降舵配平片往哪邊偏？",
            "answer": "後緣下偏，利用氣動鉸鏈力矩促使升降舵上偏；別把原圖下半部誤標的 Tab up 背下來。"
          }
        },
        {
          "title": "配平片位置與升降舵實際位置不要混為一談",
          "paragraphs": [
            "配平片建立的是促使主舵面轉動的氣動力矩；主舵面最後在哪裡，還取決於機師施力、連桿、彈簧、局部流場及其他載荷。機師若握住控制柱維持姿態，先感受到的可能是控制力改變，而不是升降舵立即自由轉到某個固定角度。",
            "地面沒有足夠氣流時，轉動配平控制也未必會看見升降舵隨即走到圖示位置。配平指示通常表示設定位置，不直接代表飛機必然抬頭或低頭多少度；起飛配平範圍仍要按機型與載重設定。"
          ]
        }
      ]
    },
    {
      "id": "balance-tabs",
      "english": "Balance Tabs",
      "title": "平衡片：減輕主操縱面負荷",
      "parent": "trim-systems",
      "locator": "PHAK C 版 · 6-11",
      "printedPage": "6-11",
      "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=11",
      "paragraphs": [
        "Balance tab 透過與主操縱面連結的機構，在主面偏轉時相對朝反方向偏轉。氣流對小翼片的作用協助抵銷部分主面鉸鏈力矩，讓機師更容易移動或保持主操縱面。",
        "它與獨立設定的配平片外觀可能相近，但核心是隨主面動作的連動安排。若其連桿可由座艙調整，也可能兼具配平功能；不能只憑後緣有一片小翼面就判定其唯一用途。"
      ],
      "lessonBlocks": [
        {
          "title": "平衡片：主面先動，連桿讓小片助力",
          "paragraphs": [
            "機師經原有操縱機構移動主舵面時，平衡片的連桿使小片相對主面反向偏轉。小片氣動力對主面鉸鏈產生協助力矩，分擔機師原本需要克服的部分氣動負荷，降低操縱力。",
            "若其連接設定可以從座艙調整，同一小片也能結合配平功能。辨認時應先問「哪個部件由機師直接控制、哪個跟著連桿動」，比只記小片反向更可靠，因為配平片與伺服片也可能呈現相似方向。"
          ]
        }
      ]
    },
    {
      "id": "servo-tabs",
      "english": "Servo Tabs",
      "title": "伺服片：先控制小翼片再帶動主面",
      "parent": "trim-systems",
      "locator": "PHAK C 版 · 6-11",
      "printedPage": "6-11",
      "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=11",
      "paragraphs": [
        "Servo tab 系統中，機師的輸入主要先移動小翼片，再利用小翼片的氣動作用帶動較大的主操縱面。它以氣動力協助產生主面動作，和機師直接移動主面、平衡片隨之助力的描述有所不同。",
        "自編比較：兩種系統都可能減輕手力，但應追問「輸入首先連到哪個部件」。因作用依賴氣流，地面沒有足夠氣流時的反應不一定像空中；系統檢查必須按機型資料，不能以手感自行推定功能正常。"
      ],
      "lessonBlocks": [
        {
          "title": "伺服片：機師先動小片，氣流再帶動主面",
          "paragraphs": [
            "Servo tab 的核心是以小片作為氣動作動器：機師輸入先改變小片角度，氣流在小片產生的力矩促使整片主舵面轉動。機師不必直接提供全部主面操縱力，因此這和主面先動、平衡片跟動的機械關係不同。",
            "由於需要氣流產生作動效果，地面靜止時的觀察未必呈現飛行中的主面反應。有些機型在失去助力後使用控制片備援，但這是特定設計，不能推論任何液壓或電傳飛機都能靠小片接手；「降低工作量」也不等於刻意降低全機穩定性。"
          ],
          "check": {
            "question": "如何分辨伺服片與平衡片？",
            "answer": "看輸入路徑：伺服片由機師先驅動，氣動力再帶動主面；平衡片通常隨主面的機械連動而偏轉。"
          }
        }
      ]
    },
    {
      "id": "antiservo-tabs",
      "english": "Antiservo Tabs",
      "title": "反伺服片：增加操縱回饋",
      "parent": "trim-systems",
      "locator": "PHAK C 版 · 6-11",
      "printedPage": "6-11",
      "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=11",
      "paragraphs": [
        "Antiservo tab 通常隨全動式水平尾翼後緣同向偏轉，使氣動作用抵抗主面的偏轉，增加機師所需控制力，降低過度敏感。這與 balance tab 反向動作、減輕控制力的目的不同。",
        "這類翼片也可能兼具配平功能，因此「增加動作回饋」和「減輕某狀態下持續操縱力」可以同時存在。自編例：尾翼上偏時小翼片也上偏，不應套用傳統升降舵配平片的反向口訣判定連桿裝反。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 6-21 · 同向運動所產生的是反對力矩",
          "paragraphs": [
            "圖中的 stabilator 後緣向上時，連桿讓 antiservo tab 後緣也相對主面向上。這使小片產生阻止主面繼續偏轉的氣動力矩，增加機師所需施力，改善過度敏感的操縱感覺；同向是位置關係，不等於助動方向。",
            "若連桿的基準設定可調整，反伺服片也可兼作配平。它與一般升降舵配平片的運動口訣不同，但都能改變操縱力平衡；應先確認主面是全動尾翼還是鉸接升降舵，以及小片如何連結。"
          ],
          "figure": {
            "label": "Figure 6-21 · Antiservo tab",
            "page": "6-11",
            "url": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=11"
          }
        }
      ]
    },
    {
      "id": "ground-tabs",
      "english": "Ground Adjustable Tabs",
      "title": "地面可調翼片",
      "parent": "trim-systems",
      "locator": "PHAK C 版 · 6-11",
      "printedPage": "6-11",
      "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=11",
      "paragraphs": [
        "某些小型飛機在方向舵上有地面可調的金屬翼片，設定後利用氣動作用改善某個巡航條件下的偏航或持續操縱力。其設定在飛行中不由座艙連續調整，和可操作的配平輪系統不同。",
        "固定設定通常只對特定工況提供折衷，不代表各種速度及功率下都無需方向舵。原書描述地面調整的原理，並不是授權讀者自行彎折；調整、檢查與紀錄要依該機型資料及適用維修要求。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 6-22 · 地面可調，不代表每次飛行自行彎折",
          "paragraphs": [
            "圖中的小金屬片固定在方向舵後緣，藉預設角度提供氣動偏置，補償特定巡航狀態下的持續偏航需求。它不是飛行中可從座艙連續調整的操縱器，效果也會隨速度、功率與構型改變。",
            "原文用逐步試調描述原理，不能取代機型維護資料、調整程序及適用人員資格。若飛機持續偏航，還需確認載重、構型與機械狀態，不能直接假定只要彎小片就能修正所有原因。"
          ],
          "figure": {
            "label": "Figure 6-22 · Ground adjustable tab",
            "page": "6-12",
            "url": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=12"
          }
        }
      ]
    },
    {
      "id": "adjustable-stabilizer",
      "english": "Adjustable Stabilizer",
      "title": "可調安定面與配平行程",
      "parent": "trim-systems",
      "locator": "PHAK C 版 · 6-12",
      "printedPage": "6-12",
      "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=12",
      "paragraphs": [
        "可調水平安定面透過改變安裝角來提供俯仰配平，可能由螺桿、鋼索或馬達驅動。與只轉動升降舵後緣小配平片相比，它改變較大翼面的氣動條件，可處理較大的配平需求。",
        "可調安定面不等於 stabilator：前者通常仍搭配升降舵，由安定面處理配平，後者以整片尾翼動作作主要俯仰操縱。兩者都可能看見水平翼面移動，必須依功能和控制路徑辨認，不能只看外觀。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 6-23 · 改變安定面安裝角，讓升降舵保有調整餘裕",
          "paragraphs": [
            "先找後方 pivot，再看前方 jackscrew：螺旋千斤頂改變安定面前端高度，使整片安定面相對機身轉動，調整配平所需的尾翼氣動力。小型機可用鋼索與配平輪驅動，大型機可用馬達；實際傳動及備援設計依機型。",
            "大速度範圍、重心範圍與高升力裝置帶來的力矩變化，若全靠升降舵長時間大偏轉處理，會消耗同方向操縱餘裕並增加配平阻力。可調安定面分擔持續需求，讓升降舵處理其餘控制；不是保證任何配平位置都剩完整而有效的全行程。"
          ],
          "figure": {
            "label": "Figure 6-23 · Adjustable stabilizer",
            "page": "6-12",
            "url": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=12"
          }
        },
        {
          "title": "Stabilator 與 adjustable stabilizer：看控制角色",
          "paragraphs": [
            "兩種設計都可能讓整片水平面改變角度，但 stabilator 直接作為主要俯仰操縱面；可調安定面通常處理配平，再搭配獨立升降舵控制短期俯仰需求。只看外部有沒有整片活動，仍不足以判斷系統。",
            "安定面偏轉能改變很大的尾翼氣動力，配平作動速度或故障也可能帶來顯著控制需求。學習重點是辨認配平指令、位置指示、作動與停用路徑；不能把所有機型的千斤頂方向、開關或處置順序寫成同一套。"
          ],
          "table": {
            "caption": "水平尾翼配置",
            "headers": [
              "配置",
              "主要俯仰控制",
              "典型配平方式"
            ],
            "rows": [
              [
                "固定安定面＋升降舵",
                "後緣升降舵",
                "配平片或其他控制力安排"
              ],
              [
                "Stabilator",
                "整片全動尾翼",
                "可結合反伺服片"
              ],
              [
                "可調安定面＋升降舵",
                "升降舵配合安定面設定",
                "改變安定面安裝角"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "autopilot",
      "english": "Autopilot",
      "title": "自動駕駛的軸向、模式與監控",
      "parent": null,
      "locator": "PHAK C 版 · 6-12",
      "printedPage": "6-12",
      "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=12",
      "paragraphs": [
        "自動駕駛根據感測資訊與所選模式，透過伺服作動器或整合控制系統操作飛機。單軸系統常控制滾轉，更完整系統可控制俯仰及偏航；航向保持、高度保持和導航耦合是不同功能，不能只因有 AP 就假定全部具備。",
        "Flight director 可顯示操縱指令，但不代表自動駕駛已接通並移動操縱面。使用時需辨認模式、來源、限制與脫離方式，持續監控實際路徑；遇異常時按機型程序處置，不能假定所有系統都能安全地靠用力推拉控制桿解除。"
      ],
      "points": [
        "模式已選擇、已待命與正在作用不同；確認目前實際控制的目標。",
        "單軸自動駕駛不必具備高度保持；導航耦合也不等於可自動起降。",
        "脫離自動駕駛後仍需留意配平及操縱力；實際限制依 AFM／POH 與補充手冊。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 6-24 · 伺服器是執行端，模式才決定需求",
          "paragraphs": [
            "照片顯示自動駕駛伺服器與操縱系統的機械連接。感測器提供姿態等狀態，控制系統比較所選模式的目標，再命令伺服器修正；僅看伺服器照片，無法知道系統能否保持高度、追蹤航路或自動落地。",
            "單軸系統常只控制滾轉；具俯仰或偏航控制的系統也不必然具備所有導航功能。軸數描述可以施力的方向，模式描述控制目標，導航耦合則涉及指令來源；三者應分開閱讀操作資料。"
          ],
          "figure": {
            "label": "Figure 6-24 · Autopilot servo installation",
            "page": "6-12",
            "url": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=12"
          }
        },
        {
          "title": "FD、AP、模式預位與模式生效",
          "paragraphs": [
            "Flight director 提供應如何操縱的指引；AP 接通後，系統才透過可用的控制通道執行相應指令。畫面有指引桿，不能單憑這點認定自動駕駛已接管。航向保持、航路追蹤與高度控制也是不同功能，需各自確認模式與資料來源。",
            "自編情境：某導航模式已預位，但捕捉條件尚未達成，飛機仍可能依原來的有效模式飛行。應觀察實際有效模式、預位狀態與飛行趨勢，而不只記得自己按過哪個鍵；預位不是立即執行的同義詞。"
          ],
          "table": {
            "caption": "自動飛行的不同概念",
            "headers": [
              "項目",
              "代表什麼",
              "不能單憑它推論"
            ],
            "rows": [
              [
                "FD 指引",
                "顯示控制需求",
                "AP 已接通"
              ],
              [
                "AP 接通",
                "執行可用控制模式",
                "自動油門或自動落地可用"
              ],
              [
                "Armed 預位",
                "等待模式轉換條件",
                "新模式已生效"
              ],
              [
                "Active 有效模式",
                "目前控制目標",
                "能處理所有超限或故障"
              ]
            ]
          }
        },
        {
          "title": "解除與人工接管：不能假定所有系統都自動退出",
          "paragraphs": [
            "原文提到人工克服自動駕駛，但不同系統對操縱力、配平輸入及解除按鈕的反應不同。FAA 的飛行指引系統認證指引亦分別討論人工克服、解除與自動配平的相互影響；這些差異應依 AFM 及自動駕駛補充手冊理解。",
            "持續對抗仍接通的系統，可能伴隨配平狀態改變，解除時才顯現不預期的控制力或姿態反應。接管時應按該機型程序解除並確認狀態，不把「控制柱可以移動」當成「AP 已解除」的證據；本節不提供跨機型通用的斷路器或開關順序。"
          ],
          "check": {
            "question": "指引桿仍顯示，且控制柱能移動，能否證明 AP 已解除？",
            "answer": "不能。FD 顯示、AP 接通與操縱器能否移動是不同狀態，應以該系統的模式／接通指示及核准程序確認。"
          }
        }
      ],
      "references": [
        {
          "title": "FAA AC 25.1329-1C Change 2：飛行指引、人工克服與配平",
          "url": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_25.1329-1C_CHG2.pdf",
          "checked": "2026-09-14"
        }
      ]
    },
    {
      "id": "summary",
      "english": "Chapter Summary",
      "title": "全章統整：功能、連動與機型差異",
      "parent": null,
      "locator": "PHAK C 版 · 6-12",
      "printedPage": "6-12",
      "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=12",
      "paragraphs": [
        "本章可沿「輸入傳到哪裡、翼面怎麼動、氣流造成什麼力矩」整理。先掌握主要操縱的三軸，再比較尾翼構型與混合機構，最後以增升、增阻及操縱力調整來區分次要系統。",
        "自編練習：說明為何 nose-up 配平不代表配平片向上，為何可調安定面不等於 stabilator，以及伺服片和反伺服片的目的差在哪裡。回到熟悉機型的 AFM／POH 核對名稱、限制與檢查方法，把通用概念連到實際配置。"
      ],
      "lessonBlocks": [
        {
          "title": "整章串連：從控制輸入到飛行反應",
          "paragraphs": [
            "解釋任何操縱裝置時，依序問：命令從哪裡來、如何傳遞、誰提供移動能量、哪片翼面先動、氣動力如何對重心形成力矩，以及機師如何取得回饋。這條路徑可同時比較機械操縱、助力、控制片及自動駕駛。",
            "最後把位置、力量與飛行狀態分開：小片同向不一定助力，配平完成不等於高度鎖住，AP 有指引不等於已接通，操縱面有行程也不等於任何速度都允許全偏轉。掌握這些差異，再回到實際機型的 AFM／POH 與設備補充資料。"
          ],
          "check": {
            "question": "一片小翼片能同時是反伺服片和配平裝置嗎？",
            "answer": "可以。它可藉主面連動增加操縱力，再藉可調的基準設定提供配平；功能要看連桿與控制方式，不是只由外觀決定。"
          }
        }
      ]
    }
  ],
  "confusions": [
    {
      "title": "配平與主要操縱",
      "clarification": "配平減輕持續操縱力，不能取代控制飛機狀態。",
      "example": "構型改變後可能需要重新配平。"
    },
    {
      "title": "襟翼與擾流板",
      "clarification": "兩者對升力的作用不同。",
      "example": "不能把所有翼面伸出都當成增加升力。"
    },
    {
      "title": "電傳操縱與自動駕駛",
      "clarification": "電傳描述操縱指令傳遞與控制架構，自動駕駛則執行所選自動控制模式。",
      "example": "機師可手動飛行一架電傳操縱飛機。"
    },
    {
      "title": "配平片與反伺服片方向",
      "clarification": "典型升降舵配平片靠反向作用助動；反伺服片隨全動尾翼同向偏轉以增加回饋。",
      "example": "看到小翼片與主面同向不能立即判定機構錯誤。"
    },
    {
      "title": "Stabilator 與 Adjustable Stabilizer",
      "clarification": "前者是全動式主要俯仰操縱面，後者通常改變安定面安裝角來配平並搭配升降舵。",
      "example": "兩者都可能使整片水平面改變角度，但控制角色不同。"
    },
    {
      "title": "Slot 與 Slat",
      "clarification": "Slot 是縫隙，slat 是前緣翼段，可移動後形成縫隙。",
      "example": "固定縫隙不代表裝有自動伸出的縫翼。"
    },
    {
      "title": "飛行指引與自動駕駛接通",
      "clarification": "指引可顯示所需操縱，自動駕駛接通才由相應控制系統執行；可用功能依設備。",
      "example": "看到飛行指引桿不代表飛機已自動保持高度。"
    }
  ],
  "scenario": "自編案例：學員在模擬器改變襟翼後，發現原先操縱力與速度趨勢改變。先辨認構型導致的升力、阻力與力矩變化，再依訓練程序建立需要的狀態與配平。",
  "question": "配平的主要用途是什麼？",
  "options": [
    "降低維持狀態所需的持續操縱力",
    "讓飛機免受所有失速影響",
    "取代所有主要操縱面"
  ],
  "answer": 0,
  "explanation": "配平調整平衡與操縱力，仍需監控姿態、速度與適用限制。",
  "verified": true,
  "reader": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=149",
  "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=149",
  "detailMode": "outline",
  "checked": "2026-09-14",
  "coverageNote": "全章 29 節均已加入深入講解，附 Figure 6-1～6-24 官方原圖讀圖指引、控制系統與翼片比較表及自編理解練習。涵蓋機械／液壓／電傳、三軸控制、尾翼、增升裝置、配平及自動駕駛；釐清原圖標示與機型差異，具體操縱仍依 AFM／POH 及設備補充手冊。"
};
