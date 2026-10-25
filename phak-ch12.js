export const chapter={
  "id": "phak25c-12",
  "number": 12,
  "title": "氣象原理",
  "english": "Weather Theory",
  "section": "第 12 章；12-1～12-25，全章目錄逐節講解",
  "goal": "連結大氣運動、水氣、穩定度與飛行危害。",
  "primer": "壓力差提供氣流運動的驅動，地球自轉與地面摩擦等因素改變風向及速度。地形、障礙與對流又會造成局部差異，因此地面一個測站不能代表整段航路的風。",
  "terms": [
    "Dew point · 露點",
    "Stability · 穩定度",
    "Wind shear · 風切"
  ],
  "prompts": [
    "選一種霧和一種鋒面，說明水氣來源、冷卻或抬升機制，以及為何日出後不一定立即消散。",
    "列出雷暴在可見雲外的三種危害，說明資料鏈圖像為何適合整區避讓而不能當成即時穿越導航。"
  ],
  "keyPoints": [
    "大氣穩定度要比較氣塊與環境，不能只看地面冷暖或乾濕。",
    "相對濕度受溫度影響，溫露差小不保證立即有霧。",
    "不同霧、雲與鋒面有不同形成和消散條件，不使用固定好壞天氣口訣。",
    "雷暴危害可延伸到雲外，少雨、無可見漏斗或回波空隙都不是安全證據。",
    "所有天氣判斷需核對地點、高度、有效時間與產品限制。"
  ],
  "detailSections": [
    {
      "id": "introduction",
      "english": "Introduction",
      "title": "導論：用機制理解天氣",
      "parent": null,
      "locator": "PHAK C 版 · 12-1",
      "printedPage": "12-1",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=1",
      "paragraphs": [
        "天氣是特定時間和地點的大氣狀態，包含溫度、濕度、風、氣壓、雲與能見度。理解形成機制可以幫助判讀觀測和預報，但理論不能取代當次航路、時段及高度的最新資料。",
        "本章從大氣受熱與運動，連到飽和、雲、鋒面和雷暴。自編練習：每遇到一個現象，都問水氣從哪裡來、空氣如何被抬升或冷卻，以及對性能、視野和操縱造成什麼影響。"
      ],
      "lessonBlocks": [
        {
          "title": "從天氣機制走到飛行問題",
          "paragraphs": [
            "先辨認觀測描述什麼，再問形成原因與飛行影響。例如高溫不只是不舒服：它會降低空氣密度；低雲不只代表水氣多，還涉及冷卻、抬升與混合。",
            "本輪深化導論至暖鋒入門。每個示意圖都要帶著地點、高度、時間與適用條件閱讀；觀測是當時狀態，預報則描述未來可能變化。"
          ]
        }
      ]
    },
    {
      "id": "atmosphere",
      "english": "Atmosphere",
      "title": "大氣與分層",
      "parent": null,
      "locator": "PHAK C 版 · 12-2",
      "printedPage": "12-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=2",
      "paragraphs": [
        "大氣的溫度、壓力和密度隨高度改變，對流層容納大部分日常天氣，其頂部高度隨緯度與季節不同。分層是依溫度等特徵描述，不是固定高度的硬殼。",
        "對流層上方不等於完全沒有亂流、雲或對流突破，強雷暴可影響很高的空域。自編例：不能只因巡航接近對流層頂就排除天氣風險，仍需對照該時段的高空風和危害資訊。"
      ],
      "lessonBlocks": [
        {
          "title": "沿高度辨認大氣層",
          "paragraphs": [
            "Figure 12-2 以溫度結構分出對流層、平流層、中氣層與增溫層。大部分日常天氣集中於對流層；對流層頂高度隨緯度與季節變化，通常低緯較高、極區較低。",
            "圖上的高度是概念尺度，不是全球一致的固定分界；大氣也沒有在 350 miles 處突然終止。對流層頂附近可能有噴射氣流與晴空亂流，不能把「較少雲」解讀成沒有亂流。"
          ],
          "figure": {
            "label": "Figure 12-2 · Layers of the atmosphere",
            "page": "12-2",
            "url": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=2"
          }
        }
      ]
    },
    {
      "id": "composition",
      "english": "Composition of the Atmosphere",
      "title": "氣體組成與水氣",
      "parent": "atmosphere",
      "locator": "PHAK C 版 · 12-2",
      "printedPage": "12-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=2",
      "paragraphs": [
        "乾空氣約含 78% 氮、21% 氧及少量其他氣體；水蒸氣含量則隨環境變動，並對雲、降水與能量交換有重要作用。氧氣比例與氧分壓不同，不能由比例大致相同推論高空呼吸條件不變。",
        "氣態水蒸氣通常不可見，看到的雲或霧主要是小水滴或冰晶。自編例：天空透明不代表完全沒有水氣，空氣抬升冷卻後，原本不可見的水蒸氣就可能凝結成可見雲。"
      ],
      "lessonBlocks": [
        {
          "title": "乾空氣比例與可變水氣",
          "paragraphs": [
            "Figure 12-1 的氮約 78%、氧約 21%、其他氣體約 1%，描述乾空氣的近似組成。水氣含量會隨環境改變，加入水氣後不能仍把這些乾空氣比例視為全部濕空氣的精確百分比。",
            "水氣雖只占小部分，卻參與雲、降水、潛熱交換與密度變化。可見的白雲是水滴或冰晶，水蒸氣本身不可見。"
          ],
          "figure": {
            "label": "Figure 12-1 · Composition of the atmosphere",
            "page": "12-2",
            "url": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=2"
          }
        }
      ]
    },
    {
      "id": "circulation",
      "english": "Atmospheric Circulation",
      "title": "受熱差異與環流",
      "parent": "atmosphere",
      "locator": "PHAK C 版 · 12-3",
      "printedPage": "12-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=3",
      "paragraphs": [
        "太陽加熱並不均勻，陸海、緯度與日夜差異造成溫度和壓力分布，驅動大尺度與地方環流。上升、下沉及水平輸送共同搬運能量與水氣，不能只用「熱空氣一定向上」描述所有流動。",
        "自編例：海岸的日間地面風可能受海風影響，但同時存在的天氣系統可加強或抵銷它。全球環流圖適合建立概念，不能直接當成某機場某時刻的風向預報。"
      ],
      "lessonBlocks": [
        {
          "title": "受熱不均建立環流",
          "paragraphs": [
            "先把 Figure 12-3 當成不考慮自轉的簡化模型：較暖、相對周圍較輕的空氣上升，較冷空氣補入，形成循環。真實大氣還受到自轉、海陸分布、地形及季節影響。",
            "太陽高度角與日照時間改變受熱；地面再透過輻射、傳導與對流和空氣交換能量。不是只要某處溫度高，就能不比較周圍空氣而判定它必然持續上升。"
          ],
          "figure": {
            "label": "Figure 12-3 · Circulation pattern in a static environment",
            "page": "12-3",
            "url": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=3"
          }
        }
      ]
    },
    {
      "id": "pressure",
      "english": "Atmospheric Pressure",
      "title": "氣壓與壓力梯度",
      "parent": "atmosphere",
      "locator": "PHAK C 版 · 12-3",
      "printedPage": "12-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=3",
      "paragraphs": [
        "氣壓是空氣作用在單位面積的壓力，水平壓差產生推動氣流的壓力梯度力。天氣圖中的高低壓是相對周圍的壓力分布，並不直接等於高低溫或好壞天氣。",
        "同一位置氣壓會隨時間改變，高度上升也通常使氣壓降低，兩種變化需分開。自編例：爬升時高度表感測壓力下降，並不表示飛機必然飛進一個天氣低壓系統。"
      ],
      "lessonBlocks": [
        {
          "title": "氣柱重量與水平壓力差",
          "paragraphs": [
            "Figure 12-4 用一平方英寸底面的氣柱，表示海平面標準氣壓約 14.7 psi；到約 18,000 ft，標準大氣壓力約減半。這是上方氣柱施加的壓力，並不是人的體重或重力減半。",
            "水平氣壓差產生壓力梯度力，指向低壓側。相同壓差若集中在較短距離，梯度較大；實際風還受科氏效應、摩擦及曲線運動影響。"
          ],
          "figure": {
            "label": "Figure 12-4 · Atmosphere weights",
            "page": "12-4",
            "url": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=4"
          },
          "check": {
            "question": "18,000 ft 的壓力約減半，表示氧氣比例也減半嗎？",
            "answer": "不是。這裡的重點是總壓及氧分壓下降，不是氧的體積比例突然由約 21% 變成約 10.5%。"
          }
        }
      ]
    },
    {
      "id": "coriolis",
      "english": "Coriolis Force",
      "title": "科氏效應與半球",
      "parent": null,
      "locator": "PHAK C 版 · 12-3",
      "printedPage": "12-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=3",
      "paragraphs": [
        "在隨地球旋轉的參考系中，運動空氣的路徑呈現偏轉，北半球向運動方向右側、南半球向左側。效應隨緯度與速度等改變，在赤道水平偏轉項為零。",
        "科氏效應不是讓靜止空氣自動開始流動的起因，壓力梯度與摩擦仍需一起考慮。自編練習：先畫空氣原本的移動方向，再標左右偏轉，避免把北半球所有風一概畫成向東。"
      ],
      "lessonBlocks": [
        {
          "title": "科氏偏轉與三圈環流",
          "paragraphs": [
            "科氏效應描述地球自轉參考系中運動的偏轉：北半球向運動方向右側、南半球向左側，赤道處為零，向兩極增強。它改變方向，不能取代壓力梯度作為氣流加速來源。",
            "Figure 12-5 的三圈環流有助理解信風與盛行西風的平均分布。實際氣流不會沿固定緯線整齊循環；不能把圖上的箭頭直接當成當天航路高空風。"
          ],
          "figure": {
            "label": "Figure 12-5 · Three-cell circulation pattern",
            "page": "12-4",
            "url": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=4"
          }
        }
      ]
    },
    {
      "id": "measurement",
      "english": "Measurement of Atmosphere Pressure",
      "title": "氣壓量測與基準",
      "parent": null,
      "locator": "PHAK C 版 · 12-4",
      "printedPage": "12-4",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=4",
      "paragraphs": [
        "水銀與無液式氣壓計用不同機構感測壓力，航空資料常以 hPa 或 inHg 表達。站壓、海平面修正氣壓和供高度表使用的設定具有不同用途，不能看到相近數字就互換。",
        "自編例：高山站的實際站壓較低，但天氣圖可能用海平面修正值比較水平分布。核對高度表設定時要看資料種類和單位，而不是將天氣圖任意一個壓力數字直接輸入。"
      ],
      "lessonBlocks": [
        {
          "title": "水銀柱把壓力轉成高度",
          "paragraphs": [
            "Figure 12-6 中，大氣壓力支撐水銀柱。標準海平面基準約 29.92 inHg、1013.25 hPa、15 °C；hPa 與 mb 的數值相同。",
            "這些是共同參考條件，不表示所有海平面測站每天都量到 29.92。水銀柱的英寸是儀器量測方式留下的壓力單位，不是航空器高度。"
          ],
          "figure": {
            "label": "Figure 12-6 · Mercurial barometer",
            "page": "12-5",
            "url": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=5"
          }
        },
        {
          "title": "膜盒形變與高度表",
          "paragraphs": [
            "Figure 12-7 的無液氣壓計利用密閉膜盒隨外壓改變而變形，經機械連桿帶動指針。氣壓高度表同樣利用壓力與高度的校準關係。",
            "儀器能測壓力，卻不能自行得知真實大氣溫度剖面或地形；設定正確仍不等於所有條件下的真高度都完全正確。"
          ],
          "figure": {
            "label": "Figure 12-7 · Aneroid barometer",
            "page": "12-5",
            "url": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=5"
          }
        }
      ]
    },
    {
      "id": "altitude-pressure",
      "english": "Altitude and Atmospheric Pressure",
      "title": "高度與壓力關係",
      "parent": null,
      "locator": "PHAK C 版 · 12-5",
      "printedPage": "12-5",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=5",
      "paragraphs": [
        "上升時上方空氣柱通常減少，壓力下降，但下降速率不是全程固定。標準大氣提供換算基準，實際溫度分布則影響兩個壓力面之間的幾何距離。",
        "原書每千呎約一英吋汞柱是低高度粗估，不宜用於整個高空範圍。自編例：同樣兩個壓力面在冷空氣中距離較小，因此氣壓高度相同不保證相對地形的實際高度相同。"
      ],
      "lessonBlocks": [
        {
          "title": "站壓、海平面氣壓與高度表設定",
          "paragraphs": [
            "Figure 12-8 把高地與海邊測站放到共同海平面基準，以免地形高度掩蓋天氣系統的氣壓差。原圖每 1,000 ft 加約 1 inHg 是教學近似，壓力隨高度的真實關係並非線性。",
            "站壓是測站所在高度的壓力；氣象海平面氣壓與高度表設定使用不同換算目的和方法，不能把 METAR 的 SLP 與 A 組數值任意互換。"
          ],
          "figure": {
            "label": "Figure 12-8 · Station pressure and sea level pressure",
            "page": "12-6",
            "url": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=6"
          },
          "table": {
            "caption": "站壓、海平面氣壓與高度表設定",
            "headers": [
              "量",
              "用途",
              "容易混淆之處"
            ],
            "rows": [
              [
                "站壓",
                "描述測站實際氣壓",
                "不等於海平面基準"
              ],
              [
                "海平面氣壓",
                "比較氣象高低壓系統",
                "需經高度及溫度等修正"
              ],
              [
                "高度表設定",
                "校準氣壓高度表基準",
                "使用發布的設定，不自行套線性公式"
              ]
            ]
          }
        }
      ],
      "references": [
        {
          "title": "NWS · Pressure Definitions",
          "url": "https://www.weather.gov/bou/pressure_definitions",
          "checked": "2026-09-19"
        }
      ]
    },
    {
      "id": "altitude-flight",
      "english": "Altitude and Flight",
      "title": "高度對性能與判讀的影響",
      "parent": null,
      "locator": "PHAK C 版 · 12-6",
      "printedPage": "12-6",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=6",
      "paragraphs": [
        "高度、壓力和溫度共同影響密度，進而影響起飛、爬升及相同 IAS 下的 TAS。氣壓高度主要提供操作和計算參考，密度高度描述密度對性能的影響。",
        "自編例：高溫高地機場即使跑道海拔固定，密度高度仍可顯著上升，需回到本機性能表。不能把「高度表已設對」當成性能也已自動修正，兩者需要不同的資料處理。"
      ],
      "lessonBlocks": [
        {
          "title": "用同一張表比較高度效應",
          "paragraphs": [
            "Figure 12-9 在圖定重量 2,400 lb、0 °C 下，海平面地面滑跑 745 ft，壓力高度 8,000 ft 為 1,590 ft：倍率 1,590 ÷ 745 ≈ 2.13。越過 50 ft 障礙則分別為 1,320 與 2,960 ft。",
            "兩個欄位不能混用。低密度下同一升力狀態需要較大 TAS，發動機與螺旋槳性能也受影響；實際距離仍要核對本機重量、風、跑道、構型及完整圖表條件。"
          ],
          "figure": {
            "label": "Figure 12-9 · Takeoff distances and altitude",
            "page": "12-6",
            "url": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=6"
          },
          "check": {
            "question": "滑跑增加了多少百分比？",
            "answer": "(1,590 − 745) ÷ 745 × 100 ≈ 113.4%；新距離是原來的約 213.4%，不是只增加 13.4%。"
          }
        }
      ]
    },
    {
      "id": "altitude-body",
      "english": "Altitude and the Human Body",
      "title": "壓力、氧分壓與人體",
      "parent": null,
      "locator": "PHAK C 版 · 12-6",
      "printedPage": "12-6",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=6",
      "paragraphs": [
        "環境壓力降低會降低吸入氧分壓，也使體內封閉氣體在壓力差下膨脹，涉及缺氧及耳鼻等壓力平衡問題。增壓與供氧各有不同功能，不可僅用飛機外部高度判斷座艙環境。",
        "個人症狀可能不易察覺，不能以感覺良好或單次血氧值替代設備、供氧和適用程序。這節建立氣象與人體的連結，詳細生理及操作限制需搭配 Chapter 17 與機型資料學習。"
      ],
      "lessonBlocks": [
        {
          "title": "氧分壓比固定高度口訣更重要",
          "paragraphs": [
            "隨高度增加，總氣壓下降，氧分壓也下降，使氧由肺進入血液的條件變差。氧的比例大致相同，並不代表每次呼吸取得的氧仍相同。",
            "缺氧反應受個人狀態、暴露時間與座艙高度等因素影響；原文列出的高度不是每個人的安全門檻。供氧與增壓用途不同，操作依設備與既有供氧教材，不以自己「感覺還好」代替判斷。"
          ]
        }
      ],
      "references": [
        {
          "title": "FAA · Hypoxia",
          "url": "https://www.faa.gov/pilots/training/airman_education/topics_of_interest/hypoxia",
          "checked": "2026-09-19"
        }
      ]
    },
    {
      "id": "wind",
      "english": "Wind and Currents",
      "title": "風與垂直氣流",
      "parent": null,
      "locator": "PHAK C 版 · 12-7",
      "printedPage": "12-7",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=7",
      "paragraphs": [
        "風通常指水平空氣運動，氣流也包含上升與下降分量。航空風向一般表示風吹來的方向，和航跡箭頭指向目的地的用法不同，讀圖前應確認慣例。",
        "自編例：西風由西往東吹，若飛機向西飛則是逆風；上升氣流可能增加地面爬升率，下降氣流也可能超過飛機能力。不能只看水平風速就判定整個空氣運動平穩。"
      ],
      "lessonBlocks": [
        {
          "title": "把風與垂直氣流分開描述",
          "paragraphs": [
            "本章以 wind 描述水平運動，以 currents 說明上升與下降運動。飛機可同時遇到側風、上升氣流與風速梯度，不能只用單一風向風速概括整個三維風場。",
            "壓力梯度、自轉、地面摩擦與局部受熱共同塑造風場。地面觀測能提供起降線索，航路各高度仍需高空風及相關天氣資料。"
          ]
        }
      ]
    },
    {
      "id": "wind-patterns",
      "english": "Wind Patterns",
      "title": "高低壓、摩擦與風向",
      "parent": "wind",
      "locator": "PHAK C 版 · 12-7",
      "printedPage": "12-7",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=7",
      "paragraphs": [
        "高空風受壓力梯度與科氏等效應影響，常大致沿等壓線或等高線流動；近地面摩擦改變平衡，風可跨線朝低壓側。北半球典型低壓環流與南半球方向相反。",
        "自編例：從天氣圖推估風時，先辨別半球、地面或高空以及地形摩擦，不能只背順逆時針。局部谷風、海風和對流外流還可能使機場實測風不同於大尺度概念。"
      ],
      "lessonBlocks": [
        {
          "title": "高低壓周圍的旋轉與穿越等壓線",
          "paragraphs": [
            "Figure 12-10 是北半球示意：近地面高壓順時針並向外，低壓逆時針並向內。摩擦減速後，風會穿越等壓線；不能把近地面風畫成完全平行等壓線。",
            "高壓常有下沉，低壓常有上升，但仍需水氣、穩定度與局部條件才能判斷雲雨。高壓下可能有逆溫與霾，並非必然視野良好。"
          ],
          "figure": {
            "label": "Figure 12-10 · Circulation about high and low pressure",
            "page": "12-7",
            "url": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=7"
          }
        },
        {
          "title": "由航向找有利風側",
          "paragraphs": [
            "Figure 12-11 以北半球環流說明：向東飛時，高壓北側或低壓南側較可能取得順風；回程需重新看風向與系統位置。",
            "這是大尺度示意，不是航路選擇的單一規則。系統在移動，不同高度風也不同；有利順風必須和天氣危害、燃油及航路條件一起考量。"
          ],
          "figure": {
            "label": "Figure 12-11 · Favorable winds near a high pressure system",
            "page": "12-8",
            "url": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=8"
          },
          "check": {
            "question": "能把北半球高壓順時針的圖直接套到南半球嗎？",
            "answer": "不能。南半球科氏偏轉方向相反，高低壓環流方向也相反。"
          }
        }
      ]
    },
    {
      "id": "convection",
      "english": "Convective Currents",
      "title": "熱對流與地方環流",
      "parent": "wind",
      "locator": "PHAK C 版 · 12-7",
      "printedPage": "12-7",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=7",
      "paragraphs": [
        "地表受熱不均使某些空氣團相對周圍較暖而上升，周圍空氣補入，形成熱對流和地方環流。陸地通常比水面更快加熱或冷卻，因此日夜可能出現海陸風差異。",
        "自編例：晴熱午後越過深色耕地與水面，可能交替遇到上升和較弱或下降氣流。無雲不表示沒有熱亂流，雲是否形成還取決於水氣和上升過程是否達到飽和。"
      ],
      "lessonBlocks": [
        {
          "title": "不同地表造成不均勻熱對流",
          "paragraphs": [
            "Figure 12-12 的熱泡代表地面受熱造成的上升氣流，周邊有補償下沉。裸地、岩石與鋪面相對水域或植被受熱不同，因此低空飛行可能連續穿過升降氣流。",
            "圖中飛到對流層頂以上只是示意較平順的可能區域，不代表越過任何雲頂就安全或無亂流；還需考慮雲類、空域與實際天氣。"
          ],
          "figure": {
            "label": "Figure 12-12 · Convective turbulence avoidance",
            "page": "12-8",
            "url": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=8"
          }
        },
        {
          "title": "海風與陸風是熱差循環",
          "paragraphs": [
            "白天地面通常比海水升溫快，近地面空氣由海向陸補入，形成海風，上方有回流。夜間陸地通常冷得較快，近地面可轉為由陸向海的陸風。",
            "Figure 12-13 的循環可能被大尺度風、雲量與海岸地形改變；不能只看時鐘就認定風向必定翻轉。"
          ],
          "figure": {
            "label": "Figure 12-13 · Sea breeze and land breeze",
            "page": "12-9",
            "url": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=9"
          }
        },
        {
          "title": "最後進場也會穿越熱差",
          "paragraphs": [
            "Figure 12-14 顯示暖地表上升氣流可能使進場軌跡抬高，水域或較冷地表附近下沉氣流可能使軌跡降低。這解釋了為什麼同一機場不同地表的進場感受會不同。",
            "把注意力放在實際空速、下降率與穩定進場狀態；圖中的箭頭不能用來預測每次飛越池塘或道路的固定修正量。"
          ],
          "figure": {
            "label": "Figure 12-14 · Currents generated by varying surface conditions",
            "page": "12-9",
            "url": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=9"
          }
        }
      ]
    },
    {
      "id": "obstructions",
      "english": "Effect of Obstructions on Wind",
      "title": "障礙物、地形與亂流",
      "parent": "wind",
      "locator": "PHAK C 版 · 12-8",
      "printedPage": "12-8",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=8",
      "paragraphs": [
        "建物、樹木和山脈使風改向、加速並產生渦流，背風側可能有明顯亂流與下降氣流。穩定分層與跨山風也可形成山岳波，雲的有無不能單獨判斷波動是否存在。",
        "自編例：跑道風向袋顯示可接受風速，附近樹列背風側仍可能造成接近地面的擾動。飛越山脊時要評估風向、風速、波動與逃逸空間，不用單一「高過山頂」數字作保證。"
      ],
      "points": [
        "機械亂流：風與障礙物作用產生，強度和分布受形狀、地形與風速影響。",
        "山岳波：可在穩定空氣與適當跨山風下形成，背風下降可顯著影響高度保持。",
        "透鏡雲與轉子雲可提供線索，但沒有這些雲不等於沒有危害。"
      ],
      "lessonBlocks": [
        {
          "title": "建築物背風側的機械亂流",
          "paragraphs": [
            "Figure 12-15 中風遇到機棚後分離、形成渦流，使附近風速和風向不均。障礙物大小、形狀、風速及跑道相對位置都影響亂流。",
            "看風向時同時看上風側障礙物。跑道風向袋或單一測站的平均值，不能保證最後進場段沒有局部下沉與陣風。"
          ],
          "figure": {
            "label": "Figure 12-15 · Turbulence caused by obstructions",
            "page": "12-10",
            "url": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=10"
          }
        },
        {
          "title": "山脈迎風抬升與背風下沉",
          "paragraphs": [
            "Figure 12-16 示意迎風坡抬升、背風坡下沉與紊流。實際山區還可能有山岳波、轉子與峽谷導流，強下沉可能超過航空器爬升能力。",
            "山區風場並非緊貼地形的整齊箭頭；沒有可見雲也不能排除亂流。需要地形、穩定度與各高度風的共同判讀。"
          ],
          "figure": {
            "label": "Figure 12-16 · Turbulence in mountainous regions",
            "page": "12-10",
            "url": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=10"
          }
        }
      ]
    },
    {
      "id": "shear",
      "english": "Low-Level Wind Shear",
      "title": "低空風切與微下擊暴流",
      "parent": "wind",
      "locator": "PHAK C 版 · 12-11",
      "printedPage": "12-11",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=11",
      "paragraphs": [
        "風切是風向或速度在空間中的變化，飛機穿越時相對氣流、空速和航徑可能迅速改變。近地面缺乏高度和時間恢復，雷暴外流、鋒面、逆溫與地形都可能造成低空風切。",
        "微下擊暴流可先帶來逆風增加，接著下降氣流和順風，使初期性能改善很快轉為惡化。地面沒有大雨也不能排除乾微下擊暴流；應依告警、避讓與本機訓練處置，而非套用普通進場修正。"
      ],
      "references": [
        {
          "title": "FAA AIM Chapter 7 Section 1：風切、雷暴與天氣資料使用",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "微下擊暴流的危險序列",
          "paragraphs": [
            "依 Figure 12-17 由左到右讀：先遇增加的逆風，接著強下沉，再進入增加的順風。航空器因慣性不能瞬間跟上風速變化，空速與飛行路徑可能迅速偏離原狀態。",
            "最初空速或性能改善不是安全訊號。原文的直徑、持續分鐘數、6,000 fpm 與風速損失是典型尺度或嚴重案例數值，不是危害的硬上限；乾微下擊暴流可能僅見雨幡或揚塵。",
            "風切可見於雷暴、鋒面、逆溫及強低空風附近。預防與避讓優先；遭遇時使用本機核准程序及訓練，這張圖不提供通用拉桿或功率口訣。"
          ],
          "figure": {
            "label": "Figure 12-17 · Effects of a microburst wind",
            "page": "12-11",
            "url": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=11"
          },
          "check": {
            "question": "穿入微下擊暴流時先出現逆風增加，能否據此繼續接近？",
            "answer": "不能。後方可能緊接強下沉和順風增加；短暫的性能改善不能代表整個風場安全。"
          }
        }
      ]
    },
    {
      "id": "weather-map",
      "english": "Wind and Pressure Representation on Surface Weather Maps",
      "title": "地面圖的風與壓力表示",
      "parent": "wind",
      "locator": "PHAK C 版 · 12-12",
      "printedPage": "12-12",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=12",
      "paragraphs": [
        "地面分析圖以等壓線、站點符號及風羽呈現氣壓與風。等壓線較密常暗示較大壓力梯度，但局部風還受摩擦和地形影響，不能從線距直接讀出精確機場風速。",
        "讀風羽先確認方向和符號單位，再核對圖的有效時間。常見半羽、全羽、旗分別代表 5、10、50 kt；自編例：一旗加一全羽可表示 60 kt，但仍應以該產品圖例為準。"
      ],
      "lessonBlocks": [
        {
          "title": "風羽由來向與符號分別解碼",
          "paragraphs": [
            "Figure 12-18 的線從測站圓圈伸向風的來向。西北風是從西北吹向東南，不是飛向西北的箭頭。先讀方向，再把羽毛代表的速度相加。",
            "全羽 10 kt、半羽 5 kt、三角旗 50 kt；同心圓表示靜風。圖中的 W/105 是來自西方，兩個三角旗加半羽，合計 105 kt。"
          ],
          "figure": {
            "label": "Figure 12-18 · Winds on a surface weather chart",
            "page": "12-12",
            "url": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=12"
          },
          "table": {
            "caption": "風羽由來向與符號分別解碼",
            "headers": [
              "符號組合",
              "速度",
              "圖中例子"
            ],
            "rows": [
              [
                "半羽",
                "5 kt",
                "NW/5"
              ],
              [
                "兩全羽",
                "20 kt",
                "SW/20"
              ],
              [
                "三全羽加半羽",
                "35 kt",
                "E/35"
              ],
              [
                "一三角旗",
                "50 kt",
                "N/50"
              ],
              [
                "兩三角旗加半羽",
                "105 kt",
                "W/105"
              ]
            ]
          },
          "check": {
            "question": "三角旗加兩全羽與半羽是多少？",
            "answer": "50 + 20 + 5 = 75 kt；來向需另外看線伸向哪一側。"
          }
        },
        {
          "title": "等壓線間距與高空風估計",
          "paragraphs": [
            "Figure 12-19 等壓線連接相同氣壓，線密表示同樣距離內氣壓變化較大，通常伴隨較強風。高壓的延伸叫脊，低壓的延伸叫槽。",
            "離開地面摩擦影響後，風通常更接近平行等壓線且較強。原文 2,000 ft AGL 比地面向右轉 20°～40° 是北半球的粗略經驗，會受地形、夜間逆溫與局部風場影響，不能取代高空風預報。"
          ],
          "figure": {
            "label": "Figure 12-19 · Isobars and pressure gradient",
            "page": "12-12",
            "url": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=12"
          }
        }
      ]
    },
    {
      "id": "stability",
      "english": "Atmospheric Stability",
      "title": "大氣穩定度與氣塊比較",
      "parent": null,
      "locator": "PHAK C 版 · 12-12",
      "printedPage": "12-12",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=12",
      "paragraphs": [
        "穩定度取決於被抬升或壓低的氣塊與周圍環境相比是否更具浮力，不能只由地面冷暖或乾濕判定。需比較環境遞減率與氣塊上升時的溫度變化，並考慮是否已飽和。",
        "未飽和氣塊乾絕熱冷卻約每千呎 3 °C，飽和後因凝結釋熱通常較慢且數值可變。ISA 的約 2 °C/千呎是另一種參考，不能當成所有上升氣塊的冷卻率或當天穩定度。"
      ],
      "points": [
        "穩定：氣塊偏離後有回復傾向，常抑制強烈垂直發展。",
        "不穩定：抬升後可繼續上升，但仍需水氣與觸發條件才能形成特定天氣。",
        "穩定空氣仍可能有低雲、霧或山岳波；不穩定也不等於每處都有雷暴。"
      ],
      "lessonBlocks": [
        {
          "title": "三種遞減率不能混成一個數字",
          "paragraphs": [
            "環境遞減率描述實際周圍空氣的溫度剖面；乾絕熱遞減率描述未飽和氣塊升降時的溫度變化。約 2 °C／1,000 ft 是標準對流層的近似環境基準，不是所有上升氣塊的冷卻率。",
            "未飽和氣塊約以 3 °C／1,000 ft 冷卻；飽和後凝結釋放潛熱，使冷卻較慢，濕絕熱率隨溫度、壓力變動。絕熱指與外界沒有熱交換的理想近似，不代表溫度不變。"
          ],
          "table": {
            "caption": "三種遞減率不能混成一個數字",
            "headers": [
              "概念",
              "比較對象",
              "用途"
            ],
            "rows": [
              [
                "環境遞減率",
                "不同高度的周圍空氣",
                "由實際剖面判斷環境"
              ],
              [
                "乾絕熱率",
                "升降的未飽和氣塊",
                "約 3 °C／1,000 ft"
              ],
              [
                "濕絕熱率",
                "升降的飽和氣塊",
                "變動值，不能固定用 2 °C"
              ]
            ]
          }
        },
        {
          "title": "穩定度看被抬升後是否繼續上升",
          "paragraphs": [
            "氣塊抬升後若相對環境較暖、密度較低，會有繼續上升的浮力；若較冷，則傾向回到原處。水氣與凝結影響比較結果，但「暖濕」或「冷乾」本身不是充分判定。",
            "自編例：起點同為 20 °C，未飽和氣塊上升 1,000 ft 後約 17 °C。若環境該高度為 18 °C，氣塊較冷；若環境為 16 °C，氣塊較暖。這裡忽略混合等效應，專注比較方法。"
          ],
          "check": {
            "question": "環境遞減率介於濕、乾絕熱率之間，為何稱條件不穩定？",
            "answer": "未飽和氣塊冷卻較快，可能受到穩定抑制；飽和後冷卻變慢，可能轉為有利上升。是否達到飽和與足夠抬升是關鍵條件。"
          }
        }
      ],
      "references": [
        {
          "title": "NWS · Adiabatic glossary",
          "url": "https://forecast.weather.gov/glossary.php?word=adiabatic",
          "checked": "2026-09-19"
        }
      ]
    },
    {
      "id": "inversion",
      "english": "Inversion",
      "title": "逆溫與混合受限",
      "parent": "stability",
      "locator": "PHAK C 版 · 12-13",
      "printedPage": "12-13",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=13",
      "paragraphs": [
        "逆溫是某層氣溫隨高度上升而增加，抑制氣塊垂直混合。地面夜間輻射冷卻、暖空氣覆蓋冷空氣或下沉等過程都可形成逆溫，不限於地表附近。",
        "逆溫下方可能累積水氣、煙霧與污染，能見度變差；頂部附近若風差顯著也可能有風切。自編例：地面風小且平穩，不表示爬升穿過逆溫層時風速與方向也不會迅速改變。"
      ],
      "lessonBlocks": [
        {
          "title": "逆溫是一層溫度向上增加的空氣",
          "paragraphs": [
            "晴朗夜晚地表輻射冷卻，可先冷卻貼地空氣，形成地面逆溫；暖空氣越過冷空氣也可形成鋒面逆溫。逆溫可位於高處，不一定只有貼地薄層。",
            "逆溫抑制垂直混合，使煙塵與水氣容易滯留下方，造成霾、霧或低雲。但穩定不等於毫無風切，也不保證逆溫上下都平順。"
          ]
        }
      ]
    },
    {
      "id": "moisture-temperature",
      "english": "Moisture and Temperature",
      "title": "水的相變與潛熱",
      "parent": "stability",
      "locator": "PHAK C 版 · 12-13",
      "printedPage": "12-13",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=13",
      "paragraphs": [
        "水在氣、液、固態間變化會交換能量，蒸發和昇華吸熱，凝結、凝華與凍結釋熱。這些能量交換影響氣塊浮力與雲發展，不只是把水換一種外觀。",
        "較高溫度通常對應較高飽和水氣壓，但「空氣能裝水」只是簡化比喻，也不是每增加固定溫度就精確翻倍。自編例：降水在乾燥空氣中蒸發可冷卻氣流，助長下降與外流。"
      ],
      "lessonBlocks": [
        {
          "title": "水的六種相變與熱交換",
          "paragraphs": [
            "蒸發與昇華把水加入氣相，凝結與凝華則使水離開氣相。原文在雲形成處把 deposition 與 sublimation 混稱，這裡分清方向：凝華是氣體直接變冰；昇華是冰直接變水蒸氣。",
            "「溫度每增加 20 °F，容量加倍」只能作粗略印象。更精確的觀念是飽和水氣壓隨溫度非線性增加，空氣不是裝滿後才溢出的容器。"
          ],
          "table": {
            "caption": "水的六種相變與熱交換",
            "headers": [
              "相變",
              "方向",
              "水的相變所需／釋放熱"
            ],
            "rows": [
              [
                "蒸發",
                "液 → 氣",
                "吸熱"
              ],
              [
                "昇華",
                "固 → 氣",
                "吸熱"
              ],
              [
                "熔化",
                "固 → 液",
                "吸熱"
              ],
              [
                "凝結",
                "氣 → 液",
                "放熱"
              ],
              [
                "凝華",
                "氣 → 固",
                "放熱"
              ],
              [
                "凝固",
                "液 → 固",
                "放熱"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "humidity",
      "english": "Relative Humidity",
      "title": "相對濕度不是絕對水量",
      "parent": "stability",
      "locator": "PHAK C 版 · 12-13",
      "printedPage": "12-13",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=13",
      "paragraphs": [
        "相對濕度比較實際水氣壓與該溫度的飽和水氣壓，所以會隨溫度改變。即使沒有增加水蒸氣，夜間冷卻也可以使相對濕度升高，不能把百分比增加直接解讀為水量增加。",
        "自編例：寒冷空氣即使接近飽和，其水蒸氣總量仍可能少於較暖但相對濕度較低的空氣。比較潮濕程度和雲霧風險時，需一起看溫度、露點及冷卻機制。"
      ],
      "lessonBlocks": [
        {
          "title": "同一份水氣也能改變相對濕度",
          "paragraphs": [
            "Figure 12-20 以理想化立方米示例比較溫度：20 °C 時 17 g 對應飽和；若用圖中 30 °C 飽和值 30 g 比較，17 ÷ 30 ≈ 57%。這是示意數字，不是精密濕度計算表。",
            "降到圖示 10 °C 時，飽和值約 9 g，原有 17 g 中約 8 g 需凝結。這個封閉體積示例不能直接套到會膨脹、混合的上升氣塊；重點是冷卻可使相對濕度增加，不一定先加入更多水氣。"
          ],
          "figure": {
            "label": "Figure 12-20 · Relative humidity, temperature, and dewpoint",
            "page": "12-14",
            "url": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=14"
          },
          "check": {
            "question": "夜間相對濕度上升，能否直接判定實際水氣量增加？",
            "answer": "不能。氣溫下降就可能提高相對濕度，需要露點或其他含水量資訊一起判斷。"
          }
        }
      ]
    },
    {
      "id": "dewpoint",
      "english": "Temperature/Dew Point Relationship",
      "title": "溫露差與雲底近似",
      "parent": "stability",
      "locator": "PHAK C 版 · 12-13",
      "printedPage": "12-13",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=13",
      "paragraphs": [
        "露點是在相應條件下把空氣冷卻至飽和所需的溫度；溫度與露點接近，表示離飽和較近，但不保證立即形成霧或降水。混合、抬升與凝結核等仍影響實際現象。",
        "對適當近地面對流氣塊，可用溫露差估算抬升凝結高度。自編例：T = 25 °C、Td = 15 °C，採約 400 ft/°C 得雲底約 4,000 ft AGL；這不是鋒面層雲或實際報告雲幕的通用預測。"
      ],
      "lessonBlocks": [
        {
          "title": "溫露差估算對流雲底",
          "paragraphs": [
            "露點是在給定壓力與含水量下，空氣冷卻到水汽飽和的溫度。原例氣溫 85 °F、露點 71 °F，溫露差 14 °F；用氣塊溫度每千呎降 5.4 °F、露點降約 1 °F，收斂率為 4.4 °F／1,000 ft。",
            "14 ÷ 4.4 × 1,000 ≈ 3,180 ft AGL。計算時保留中間精度，最後再取近似；攝氏常用溫露差乘約 400 ft／°C。",
            "這是抬升凝結高度的粗估，需要代表氣塊的地面溫露值，忽略混合與複雜剖面。它不是任意雲層的高度，也不是 METAR 或預報中的雲幕；要換成 MSL，還需加起始地面海拔。"
          ],
          "check": {
            "question": "自編例：氣溫 25 °C、露點 15 °C，機場海拔 1,500 ft，估算雲底是多少？",
            "answer": "10 × 400 ≈ 4,000 ft AGL；加機場海拔約為 5,500 ft MSL。兩者都只是這個氣塊模型的近似。"
          }
        }
      ]
    },
    {
      "id": "saturation",
      "english": "Methods by Which Air Reaches the Saturation Point",
      "title": "達到飽和的途徑",
      "parent": "stability",
      "locator": "PHAK C 版 · 12-14",
      "printedPage": "12-14",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=14",
      "paragraphs": [
        "空氣可因冷卻、增加水蒸氣或混合不同氣團而接近飽和。抬升膨脹造成冷卻不必向外界大量放熱，與夜間接觸冷地面所造成的冷卻機制不同。",
        "自編練習：將夜間谷地霧、暖濕空氣移到冷海面、冷空氣越過暖水面及氣流爬坡分別配對其機制。知道觸發原因，才能判斷日出、風向改變或水氣供應停止後是否容易消散。"
      ],
      "lessonBlocks": [
        {
          "title": "達到飽和的四條路徑",
          "paragraphs": [
            "暖濕空氣流過冷表面會冷卻；夜間地面降溫也會冷卻近地空氣；空氣抬升會因膨脹而冷卻；不同溫濕空氣混合也可能達到飽和。",
            "混合不必然生雲，溫露差小也不保證立即降水。形成可見雲霧還涉及水滴／冰晶成核，產生落到地面的降水則需要粒子繼續長大。"
          ]
        }
      ]
    },
    {
      "id": "dew-frost",
      "english": "Dew and Frost",
      "title": "露、霜與表面污染",
      "parent": "stability",
      "locator": "PHAK C 版 · 12-15",
      "printedPage": "12-15",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=15",
      "paragraphs": [
        "露是水蒸氣在較冷表面凝結成液滴，霜可由水蒸氣在低於冰點的表面凝華成冰晶；露滴再凍結也是可能的結冰途徑。表面溫度可能低於報告氣溫，所以不能只看 OAT 略高於零便排除霜。",
        "翼面微小污染也可改變氣流、升力與阻力，不能憑厚度不明顯便認定可忽略。自編例：晴冷夜後飛行前需按機型與適用清潔機翼要求檢查和處理，不能只等待引擎運轉時自行融化。"
      ],
      "lessonBlocks": [
        {
          "title": "表面溫度決定露與霜的形成",
          "paragraphs": [
            "晴朗少風夜晚，物體表面可比附近報告氣溫更冷。表面降到適當飽和條件可結露；低於冰點且條件合適時可凝華結霜。已形成的露再結冰與直接凝華成霜，是不同過程。",
            "不能只看測站氣溫高於 0 °C 就排除機翼污染。霜或冰改變表面粗糙度，妨礙氣流、降低升力並增加阻力；依本機要求檢查及清除，不能靠滑跑時吹掉。"
          ],
          "check": {
            "question": "空氣溫度 2 °C，就能保證機翼沒有霜嗎？",
            "answer": "不能。機翼表面可能更冷，須檢查實際表面與污染狀態。"
          }
        }
      ]
    },
    {
      "id": "fog",
      "english": "Fog",
      "title": "不同霧的形成與持續",
      "parent": "stability",
      "locator": "PHAK C 版 · 12-15",
      "printedPage": "12-15",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=15",
      "paragraphs": [
        "霧是接近地面的懸浮水滴或冰晶造成的能見度降低，形成途徑不同，消散條件也不同。輻射霧常與晴夜地表冷卻、濕氣和微風有關，但日出不保證在固定時間內消散。",
        "平流霧與上坡霧可持續獲得冷卻或水氣供應，不一定隨陽光就消失；冰霧和過冷水滴的凍霧也應分清。自編例：海岸霧由暖濕氣流不斷移入，不能只因陸地升溫就假定整條航路很快放晴。"
      ],
      "points": [
        "輻射霧：地表夜間冷卻使近地空氣達飽和，低窪處較易累積。",
        "平流霧：暖濕空氣移過較冷表面；上坡霧：濕空氣沿坡抬升冷卻。",
        "蒸發霧／海煙：冷空氣越過暖水面，水氣加入並混合冷卻。",
        "冰霧以冰晶為主；凍霧可由過冷液滴形成，接觸表面可能結冰。",
        "降水造成的蒸發增濕也可促成霧，不能只把低能見度歸因於夜間冷卻。"
      ],
      "lessonBlocks": [
        {
          "title": "依冷卻或加濕方式分辨霧",
          "paragraphs": [
            "Figure 12-21 補充正文提到的輻射霧原圖：地表夜間散熱，使近地濕空氣冷卻到飽和，谷地常利於冷空氣匯集。日出加熱可能使霧消散，但厚度、季節與混合條件都會影響。",
            "原文的 15 kt 平流霧風速及 20 ft 地面霧厚度只能作書中描述，不是通用的形成／消散門檻。尤其不能把「風一增強，所有霧都散」當作規則。"
          ],
          "figure": {
            "label": "Figure 12-21 · Radiation fog",
            "page": "12-15",
            "url": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=15"
          },
          "table": {
            "caption": "依冷卻或加濕方式分辨霧",
            "headers": [
              "霧型",
              "主要機制",
              "持續性的線索"
            ],
            "rows": [
              [
                "輻射霧",
                "地表夜間冷卻近地濕空氣",
                "晴朗、輕風與谷地利於形成"
              ],
              [
                "平流霧",
                "暖濕空氣流過冷表面",
                "水氣輸送持續，日出未必消散"
              ],
              [
                "上坡霧",
                "濕空氣沿坡抬升冷卻",
                "風與地形抬升可持續維持"
              ],
              [
                "蒸汽霧",
                "冷空氣流過暖水面，蒸發並混合",
                "水面似冒煙，需留意低層環境"
              ],
              [
                "冰霧",
                "很冷環境中的懸浮冰晶",
                "不是固定 −25 °F 才能形成"
              ]
            ]
          }
        },
        {
          "title": "冰霧與凍霧看粒子狀態",
          "paragraphs": [
            "冰霧由冰晶構成；凍霧則含過冷液態水滴，碰到物體可結冰。兩者都影響能見度，但不能因名稱含「霧」就推斷粒子已經全部凍結。",
            "自編判讀：暖濕海風持續吹向冷海岸，即使太陽升起仍可能維持平流霧。要看水氣供應與冷表面是否改變，不能沿用輻射霧的簡化日出消散模式。"
          ],
          "check": {
            "question": "哪兩種本文霧型特別需要考慮持續的風與地形／表面作用？",
            "answer": "平流霧與上坡霧。兩者可在日出後持續，不宜單憑早晨升溫推定消散。"
          }
        }
      ],
      "references": [
        {
          "title": "NWS · How Fog Forms",
          "url": "https://www.weather.gov/lmk/fog_tutorial",
          "checked": "2026-09-19"
        },
        {
          "title": "NWS · Advection Fog",
          "url": "https://www.weather.gov/safety/fog-advection",
          "checked": "2026-09-19"
        }
      ]
    },
    {
      "id": "clouds",
      "english": "Clouds",
      "title": "雲的形狀、層次與發展",
      "parent": "stability",
      "locator": "PHAK C 版 · 12-15",
      "printedPage": "12-15",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=15",
      "paragraphs": [
        "雲由小水滴、冰晶或兩者混合形成，外觀與高度可提供抬升、穩定度和水氣線索。層狀雲常呈廣泛覆蓋，積狀雲反映垂直發展，但只看外觀不能保證內部沒有結冰或亂流。",
        "讀雲名時可把 cirro、alto、strato、cumulo、nimbo 等詞根連到高度、形狀與降水特徵。高度分組隨緯度和資料定義不同，不能把手冊分組當成全球固定界面；實際雲底仍需觀測。"
      ],
      "points": [
        "高雲：卷雲、卷層雲、卷積雲；常有冰晶，可提示高空水氣與系統接近。",
        "中雲：高層雲、高積雲；低雲：層雲、層積雲等，需留意低雲底和視野。",
        "雨層雲常伴較廣泛降水；積雨雲有深厚對流及多種航空危害。",
        "積雲的垂直發展趨勢比一張靜態外觀更有資訊，但仍不能取代預報和雷達判讀。"
      ],
      "lessonBlocks": [
        {
          "title": "用雲底、外形與垂直發展一起分類",
          "paragraphs": [
            "Figure 12-22 把低雲、中雲、高雲與垂直發展雲分組。圖中 6,500 ft 與 20,000 ft 是教材近似分界；實際高度範圍受緯度等因素影響，使用天氣產品時仍須核對高度基準。",
            "低雲包括層雲、層積雲與雨層雲；中雲常見高層雲、高積雲；高雲包括卷雲、卷層雲、卷積雲。積雲與積雨雲可跨越多個高度層，不能只依雲底稱它是低雲就忽略雲頂。",
            "低中雲可能有過冷水滴；高雲多為冰晶，卻不能一概稱沒有飛行危害。尤其須區分普通卷雲與對流砧狀雲附近的環境。"
          ],
          "figure": {
            "label": "Figure 12-22 · Basic cloud types",
            "page": "12-16",
            "url": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=16"
          }
        },
        {
          "title": "雲名描述形狀，不能單獨當預報",
          "paragraphs": [
            "Cumulus 表示堆積狀，stratus 表示層狀，cirrus 表示纖維狀，nimbus 與降水相關；alto 表示中層命名。Castellanus 指共同底部上有城堡狀突起，fractus 指破碎外形，lenticularis 指透鏡狀。",
            "原文 lenticularus 拼法以 lenticularis 辨識。莢狀雲可提示山岳波環境；塔狀積雲提示垂直發展。雲的形狀提供線索，還要與風、溫度剖面及雷達等資料一起判讀。"
          ]
        },
        {
          "title": "垂直發展與被遮蔽的雷暴",
          "paragraphs": [
            "積雨雲有強垂直氣流，可能伴隨冰雹、雷電、強降水、亂流與風切。雷暴可單獨、成群或成線，也可能被其他雲層遮住，形成嵌入式雷暴。",
            "不能把看不見高聳雲體當成沒有對流危害。這裡先辨認雲型；雷暴生命週期與完整避讓內容留在本章後續既有章節。"
          ]
        }
      ]
    },
    {
      "id": "ceiling",
      "english": "Ceiling",
      "title": "雲幕高與最低雲層",
      "parent": "stability",
      "locator": "PHAK C 版 · 12-17",
      "printedPage": "12-17",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=17",
      "paragraphs": [
        "航空雲幕通常是最低 BKN 或 OVC 雲層的高度，天空被遮蔽時可用垂直能見度表示。FEW 或 SCT 雖可能更低，通常不構成報告雲幕，卻仍可能影響實際飛行與離雲間隔。",
        "自編例：SCT010 BKN025 表示雲幕為 2,500 ft，而不是 1,000 ft；METAR 雲高通常相對機場地面。雲幕不能直接換算整條航路的地形裕度，山區還需注意周邊地勢與局部雲。"
      ],
      "lessonBlocks": [
        {
          "title": "雲幕取最低符合條件的一層",
          "paragraphs": [
            "航空雲幕是最低 BKN、OVC 層的底部，或天空被遮蔽時的垂直能見度。BKN 為 5/8～7/8，OVC 為 8/8；較低 FEW 或 SCT 不構成雲幕，但仍是需要避讓的雲。",
            "自編例 FEW010 BKN025 OVC080，雲幕為 2,500 ft AGL。VV003 是向上能看入遮蔽的 300 ft，不是水平能見度 300 ft，也不是清楚可見的雲底。"
          ],
          "table": {
            "caption": "雲幕取最低符合條件的一層",
            "headers": [
              "報告片段",
              "解讀",
              "雲幕"
            ],
            "rows": [
              [
                "SCT010",
                "1,000 ft 散雲",
                "此層不構成雲幕"
              ],
              [
                "BKN025",
                "2,500 ft 裂雲",
                "若無更低符合層，為 2,500 ft"
              ],
              [
                "OVC080",
                "8,000 ft 密雲",
                "只有較低層不構成時才選它"
              ],
              [
                "VV003",
                "垂直能見度 300 ft",
                "不定雲幕的垂直能見度"
              ]
            ]
          },
          "check": {
            "question": "SCT008 BKN020 OVC060 的雲幕是多少？",
            "answer": "2,000 ft AGL。800 ft 散雲仍存在，雲幕值不代表下面所有空域都無雲。"
          }
        }
      ],
      "references": [
        {
          "title": "AWC · METAR data help",
          "url": "https://aviationweather.gov/help/data/",
          "checked": "2026-09-19"
        }
      ]
    },
    {
      "id": "visibility",
      "english": "Visibility",
      "title": "能見度、斜視與跑道視程",
      "parent": "stability",
      "locator": "PHAK C 版 · 12-17",
      "printedPage": "12-17",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=17",
      "paragraphs": [
        "能見度描述辨識目標的能力，受霧、降水、煙、塵與光照影響。地面主導能見度、飛行中所見能見度及跑道視程 RVR 是不同觀測或使用概念，不能只用單一數字互換。",
        "自編例：地面水平方向可見很遠，向陽斜視進場卻可能因薄霧和眩光難以辨識跑道。規劃需對照適用飛行規則、程序和實際趨勢，而非把單站一筆觀測當作整段航路的保證。"
      ],
      "lessonBlocks": [
        {
          "title": "水平、垂直與沿跑道的能見度",
          "paragraphs": [
            "METAR 的地面能見度、駕駛員實際飛行能見度與 RVR 並不是同一測量。斜向地面看去，霾或霧的視線路徑可能比地面水平觀測更不利。",
            "判讀時同時看單位、有效時間與地點。低雲幕和低能見度可同時出現，也可以只有其中一項差；任一單獨數值不能代表整條航路。"
          ]
        }
      ],
      "references": [
        {
          "title": "AWC · METAR data help",
          "url": "https://aviationweather.gov/help/data/",
          "checked": "2026-09-19"
        }
      ]
    },
    {
      "id": "precipitation",
      "english": "Precipitation",
      "title": "降水型態與垂直溫度結構",
      "parent": "stability",
      "locator": "PHAK C 版 · 12-17",
      "printedPage": "12-17",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=17",
      "paragraphs": [
        "雨、毛毛雨、雪、冰粒、凍雨與冰雹反映不同形成和落下過程。地面降水種類受到上方融化層及近地冷層影響，單看地面溫度不能完整判斷高空結冰情況。",
        "凍雨可為過冷液滴撞擊後結冰，冰粒則已在空中凍結；地面看到雨不代表高處沒有冰雹。自編例：航路上有融化層和下方冷層時，要連結結冰、能見度與跑道污染，而非只問雨大不大。"
      ],
      "lessonBlocks": [
        {
          "title": "降水須經過雲下的溫度剖面",
          "paragraphs": [
            "雨滴或冰粒在雲中長大後落下，沿途可能融化、再凍結或蒸發。毛毛雨的粒徑通常小於約 0.5 mm；virga 雨幡表示降水未到地面便蒸發或昇華，地面沒雨不代表空中沒有下沉危害。",
            "冰雹在強對流中收集過冷水滴而長大，直到無法繼續被上升氣流支撐或離開支撐區；不需要把反覆上下循環當作每顆冰雹的必要條件，也不把書中五英寸例子當成最大尺寸。"
          ]
        },
        {
          "title": "凍雨、冰粒與地面氣溫",
          "paragraphs": [
            "暖層可使雪融化成雨；下方冷層若足夠深冷，水滴可再凍結成冰粒。若仍為過冷液滴，接觸航空器或冷表面可結冰，形成凍雨危害。",
            "因此地面氣溫不能獨自代表航路結冰條件。冰粒提示上方可能有融化層及凍雨環境，但不是每次都能只靠地面粒子確定整個垂直剖面。",
            "降水也影響視野、跑道摩擦與性能；地面積水、雪冰和機體污染需要分別處理。雨雪的形成機制與實機可接受條件是不同問題。"
          ],
          "table": {
            "caption": "凍雨、冰粒與地面氣溫",
            "headers": [
              "型態",
              "到達觀測點時",
              "主要判讀"
            ],
            "rows": [
              [
                "雨／毛毛雨",
                "液態",
                "粒徑及是否過冷"
              ],
              [
                "凍雨／凍毛毛雨",
                "過冷液滴遇物結冰",
                "空中及表面結冰"
              ],
              [
                "冰粒",
                "已凍結的粒子",
                "可能有暖層加下方冷層"
              ],
              [
                "雪",
                "冰晶或聚合雪片",
                "能見度與積雪"
              ],
              [
                "冰雹",
                "對流中長大的冰塊",
                "強上升氣流及撞擊危害"
              ]
            ]
          },
          "check": {
            "question": "地面在下冰粒，能否認為沿途水滴都已結冰而安全？",
            "answer": "不能。上方仍可能存在過冷液態降水與結冰層，需核對高度剖面及當前結冰資訊。"
          }
        }
      ],
      "references": [
        {
          "title": "NWS · Freezing Rain and Sleet",
          "url": "https://www.weather.gov/jkl/measure_icing",
          "checked": "2026-09-19"
        }
      ]
    },
    {
      "id": "air-masses",
      "english": "Air Masses",
      "title": "氣團來源與改變",
      "parent": null,
      "locator": "PHAK C 版 · 12-17",
      "printedPage": "12-17",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=17",
      "paragraphs": [
        "氣團是在大範圍具有相對相似溫濕特性的空氣，其來源地常決定初始冷暖與乾濕。海洋性和大陸性、極地和熱帶等分類提供概念，但氣團移動後會受新下墊面加熱、冷卻或增濕。",
        "自編例：冷空氣越過暖水面後可能變得較不穩定並形成陣性天氣，不能只因起源寒冷就預期平穩。判讀氣團需同時看來源、移動路徑及垂直溫度結構。"
      ],
      "lessonBlocks": [
        {
          "title": "氣團代碼同時描述溫度與水氣來源",
          "paragraphs": [
            "Figure 12-23 顯示北美的典型源區。c 為 continental 大陸性、m 為 maritime 海洋性；P 為 polar 極地、T 為 tropical 熱帶，A 表示北極。這些是源區特徵，不是移動途中永遠不變的屬性。",
            "氣團經過較暖表面，從下方受熱可增強混合和對流；經過較冷表面，低層冷卻可增加穩定度。混合有助稀釋地面污染，但若同時有降水或其他遮蔽，不能保證能見度好。"
          ],
          "figure": {
            "label": "Figure 12-23 · North American air mass source regions",
            "page": "12-18",
            "url": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=18"
          },
          "table": {
            "caption": "氣團代碼同時描述溫度與水氣來源",
            "headers": [
              "氣團",
              "源區特徵",
              "典型傾向"
            ],
            "rows": [
              [
                "cP",
                "高緯大陸",
                "冷、乾"
              ],
              [
                "mP",
                "高緯海洋",
                "涼、濕"
              ],
              [
                "cT",
                "熱帶／副熱帶大陸",
                "熱、乾"
              ],
              [
                "mT",
                "暖海洋",
                "暖、濕"
              ],
              [
                "A",
                "北極",
                "很冷；移動後仍會變性"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "fronts",
      "english": "Fronts",
      "title": "鋒面是三維過渡區",
      "parent": null,
      "locator": "PHAK C 版 · 12-18",
      "printedPage": "12-18",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=18",
      "paragraphs": [
        "鋒面是不同密度與溫濕特性氣團間的過渡區，在天氣圖上常畫成地面位置的一條線，實際卻有寬度、傾斜與垂直結構。天氣可在地面鋒線之前、附近或之後出現。",
        "自編例：飛機尚未跨過圖上鋒線，就可能進入暖空氣爬升形成的雲和降水。應綜合溫度、露點、風、氣壓與雲系，而不是只用地圖上是否越線判定有無風險。"
      ],
      "lessonBlocks": [
        {
          "title": "鋒線是三維交界的地面標記",
          "paragraphs": [
            "鋒面分隔性質不同的氣團，地面天氣圖畫出的鋒線只是這個三維過渡區與地面的關係。天氣範圍可能延伸到鋒線前後及高處，不是跨過一條線才開始改變。",
            "Figure 12-24 補充正文引用的符號：暖鋒半圓、冷鋒三角形；滯留鋒兩種符號在相反側，囚錮鋒在同側。符號表示鋒面類型及相應方向，不能單憑符號推算降水強度。"
          ],
          "figure": {
            "label": "Figure 12-24 · Common chart symbology for fronts",
            "page": "12-19",
            "url": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=19"
          },
          "check": {
            "question": "看到圖上暖鋒仍在機場以外，能否認定機場上空未受影響？",
            "answer": "不能。暖空氣可沿傾斜鋒面在高處前伸，雲雨與低能見度可能在地面鋒線抵達前就出現。"
          }
        }
      ]
    },
    {
      "id": "warm-front",
      "english": "Warm Front",
      "title": "暖鋒與緩坡抬升",
      "parent": "fronts",
      "locator": "PHAK C 版 · 12-18",
      "printedPage": "12-18",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=18",
      "paragraphs": [
        "暖鋒是暖氣團推進到原冷氣團區域，暖空氣常沿冷空氣上方較緩的斜面抬升。若水氣足夠，可有從高雲到較低厚層雲及廣泛降水的序列，但並非每個暖鋒都完全相同。",
        "暖鋒也可能包含不穩定層與嵌入雷暴，不能只將它等同平穩小雨。自編例：前方雲底逐漸降低時，要檢查整條航路的備降與結冰條件，而非只等地面氣溫轉暖才更新判斷。"
      ],
      "lessonBlocks": [
        {
          "title": "暖空氣沿冷空氣上方緩慢抬升",
          "paragraphs": [
            "暖鋒是暖氣團推進、取代較冷氣團的過程。暖空氣沿較冷、較密空氣上方的緩坡抬升，冷卻後可能形成廣泛層狀雲與降水。",
            "原文典型移速 10～25 mph 是每小時英里，不是節，也不是預報保證。雲型取決於穩定度與水氣：可能先見卷狀／層狀雲，也可能含對流；夏季不能只因是暖鋒就排除積雨雲。",
            "暖鋒的剖面、沿線觀測與過境前後變化需一起判讀。以下以原書四個測站練習，區分同時的空間截面與飛行途中未來會遇到的天氣。"
          ]
        },
        {
          "title": "暖鋒過境：看趨勢，不背固定風向",
          "paragraphs": [
            "典型暖鋒接近時，雲層逐漸增厚降低，冷側可能有雨、雪、冰粒或霧；氣壓常下降。通過後氣溫通常上升，雲雨可能減弱，但低雲、霾或陣雨仍可延續。",
            "原文的東南風轉西南風是北半球特定配置的例子，不是所有鋒面的通則。露點與氣壓也不是按固定分鐘數變化；用連續觀測確認趨勢，不能只靠某一次風向轉變宣布天氣已好轉。"
          ]
        }
      ]
    },
    {
      "id": "approach-warm",
      "english": "Flight Toward an Approaching Warm Front",
      "title": "飛向暖鋒的天氣演變",
      "parent": "warm-front",
      "locator": "PHAK C 版 · 12-19",
      "printedPage": "12-19",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=19",
      "paragraphs": [
        "接近暖鋒時可能先看到高雲增厚，之後出現更低雲層、降水及能見度下降，地面冷空氣中也可能有霧。實際順序取決於水氣、穩定度和飛行方向，原書情境不是固定時間表。",
        "自編練習：沿預定到達時間比較各站觀測、預報和鋒面移動，辨識雲底下降或溫露差縮小是否影響返航與備降。不能只靠出發機場當下仍晴朗就假設前方保持可目視。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 12-25：從匹茲堡向西讀暖鋒",
          "paragraphs": [
            "剖面顯示暖空氣越過前方冷空氣，高雲可在地面鋒線很遠之前出現。下方各站都是 1950Z 的觀測，代表同一時間不同位置，並不是同一架飛機抵達各站時的預報。",
            "由 KPIT 向 KSTL，圖上從 SCT150 到 OVC010，能見度由 10SM 降至 1SM。SCT150 是 15,000 ft 的散雲，不構成雲幕；METAR 雲層高度以測站地面為基準，SM 是法定英里，不能改讀成 NM。"
          ],
          "figure": {
            "label": "Figure 12-25 · Warm front cross-section and METAR",
            "page": "12-19",
            "url": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=19"
          },
          "table": {
            "caption": "Figure 12-25：從匹茲堡向西讀暖鋒",
            "headers": [
              "測站",
              "原圖雲與能見度",
              "天氣／溫露",
              "高度表設定"
            ],
            "rows": [
              [
                "KPIT",
                "SCT150；10SM",
                "12/01 °C",
                "A3002 = 30.02 inHg"
              ],
              [
                "KCMH",
                "OVC060；6SM",
                "HZ；14/10 °C",
                "A2990 = 29.90 inHg"
              ],
              [
                "KIND",
                "BKN020；3SM",
                "RA；15/15 °C",
                "A2973 = 29.73 inHg"
              ],
              [
                "KSTL",
                "OVC010；1SM",
                "−RA；18/18 °C",
                "A2960 = 29.60 inHg"
              ]
            ]
          },
          "check": {
            "question": "KIND 的 15/15 與 BKN020 分別告訴你什麼？",
            "answer": "溫露差在報告精度下為零，利於飽和現象；BKN020 給出 2,000 ft AGL 雲幕。不能用零溫露差把已觀測雲幕直接改成地面高度。"
          }
        },
        {
          "title": "原圖與敘述不同時保留證據",
          "paragraphs": [
            "本例 KIND 的圖碼為 15/15，符合正文溫露相同的敘述；KSTL 圖碼是 −RA（小雨），正文卻稱 drizzle（毛毛雨）。教材表格照圖讀 −RA，不把它悄悄改寫成 DZ。",
            "原文建議在 Indianapolis 等待，重點是及早停止朝惡化區前進，並非要求先飛到那裡再做決定。BKN020、3SM 也不能脫離空域、飛行高度、地形和雲距要求就一概判定可繼續 VFR；等待兩天是故事可能情境，不是暖鋒固定通過時間。"
          ]
        }
      ]
    },
    {
      "id": "cold-front",
      "english": "Cold Front",
      "title": "冷鋒與較陡抬升",
      "parent": "fronts",
      "locator": "PHAK C 版 · 12-20",
      "printedPage": "12-20",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=20",
      "paragraphs": [
        "冷鋒是冷空氣推進並迫使較暖空氣上升，常有較陡的鋒面坡度。若暖側潮濕不穩定，較集中強烈的對流、陣雨和風變化可能出現；若乾燥穩定，表現可不同。",
        "冷鋒後常有降溫及氣壓上升趨勢，但雲雨何時結束並非保證。自編例：不能把越過鋒線當成即時天氣轉好的信號，後方仍可有低雲、陣雨、強風或地形效應。"
      ],
      "lessonBlocks": [
        {
          "title": "冷鋒把暖側空氣抬起",
          "paragraphs": [
            "較冷、較密空氣推進，在暖空氣下方楔入，使暖側抬升。若暖側濕且不穩定，可發展塔狀積雲、積雨雲與強陣雨；若較穩定，可能以層狀雲雨為主，乾燥時雲雨也可不明顯。",
            "原文稱冷氣團「穩定」只是一種情境，冷空氣經過暖地表後也能從下方受熱而不穩定。25～30 mph 與極端 60 mph 是移速例子，不是所有冷鋒的定義或上限。",
            "典型過境可見氣溫及露點下降、風轉向且陣性增強、氣壓由下降轉上升。過境後仍可能有低雲、陣雨、地形雲或強風，不能保證立刻取得無限能見度。"
          ]
        }
      ]
    },
    {
      "id": "fast-cold",
      "english": "Fast-Moving Cold Front",
      "title": "快速冷鋒與天氣突變",
      "parent": "cold-front",
      "locator": "PHAK C 版 · 12-20",
      "printedPage": "12-20",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=20",
      "paragraphs": [
        "快速冷鋒可使溫度、風和天氣在較短時間內改變，潮濕不穩定環境下可能伴隨強對流或鋒前颮線。天氣移動速度與雲內風速不是同一件事，也不能只用遠方外觀估算到達時間。",
        "自編例：原本可繞過的降水帶快速擴展時，需重新評估航線和降落選項，不能把上一張雷達圖中的空隙當作持續開放。資料時間與系統發展趨勢同樣重要。"
      ],
      "lessonBlocks": [
        {
          "title": "快移鋒面縮短決策時間",
          "paragraphs": [
            "快速冷鋒的抬升和天氣變化可較集中；鋒前暖空氣是否不穩定，決定是否有利強對流。颮線能在鋒前形成，因此尚未到地面鋒線不代表還有安全等待空間。",
            "自編速度例：鋒面距離 60 NM，若朝機場穩定移動 30 kt，單純外推約兩小時到達。這只核對距離／速度單位，沒有納入新胞生成、外流先到或移速變化，不能當成可用起飛窗口。"
          ],
          "check": {
            "question": "可以把原文 30 mph 直接放進 60 NM ÷ 30，得到兩小時嗎？",
            "answer": "不能。mph 與 NM 單位不配；30 mph 約 26 kt，純移動外推約 2.3 小時，且仍不是實際天氣到達保證。"
          }
        }
      ]
    },
    {
      "id": "approach-cold",
      "english": "Flight Toward an Approaching Cold Front",
      "title": "飛向冷鋒的預先判讀",
      "parent": "cold-front",
      "locator": "PHAK C 版 · 12-20",
      "printedPage": "12-20",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=20",
      "paragraphs": [
        "朝冷鋒飛行可能遇到雲帶、降水、風向突變、亂流和氣壓變化。是否看到連續雲牆並非唯一線索，嵌入或夜間對流也可能讓危害難以目視辨認。",
        "自編練習：將地面鋒位、雷達、雷暴預報與沿線風和氣壓趨勢一起看，預先保留避讓和落地空間。不要靠飛近一點再看看，來取代對快速移動系統的航前與途中評估。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 12-26：鋒後晴朗不代表能穿越到達",
          "paragraphs": [
            "由東向西依序讀 KPIT、KCMH、KIND、KSTL。KIND 的 +TSRA 是雷暴伴隨大雨，OVC010 表示 1,000 ft AGL 雲幕；KSTL 的 10SM 和散雲顯示另一側較佳天氣，卻不會消除中間的雷暴帶。",
            "圖中四站也是同時觀測。不能用目的地良好天氣代替航路評估，也不能照故事飛到正在雷暴中的 Indianapolis 才決定等待；應在仍有適當備降與避讓空間時改變計畫。"
          ],
          "figure": {
            "label": "Figure 12-26 · Cold front cross-section and METAR",
            "page": "12-21",
            "url": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=21"
          },
          "table": {
            "caption": "Figure 12-26：鋒後晴朗不代表能穿越到達",
            "headers": [
              "測站",
              "雲層／能見度",
              "圖中天氣",
              "圖中風"
            ],
            "rows": [
              [
                "KPIT",
                "SCT035／3SM",
                "FU：煙",
                "20012KT"
              ],
              [
                "KCMH",
                "BKN025／6SM",
                "HZ：霾",
                "20012KT"
              ],
              [
                "KIND",
                "OVC010／3SM",
                "+TSRA：雷暴、大雨",
                "20024KT"
              ],
              [
                "KSTL",
                "SCT010／10SM",
                "未列顯著天氣",
                "30018KT"
              ]
            ]
          },
          "check": {
            "question": "KSTL 有 10SM，能否沿原路穿過 KIND 上空到達？",
            "answer": "不能由此得出安全結論。KIND 的雷暴與大雨是航路危害，目的地能見度好並不能抵銷；應避開整區或落地等待。"
          }
        }
      ]
    },
    {
      "id": "front-comparison",
      "english": "Comparison of Cold and Warm Fronts",
      "title": "冷暖鋒的典型差異",
      "parent": "fronts",
      "locator": "PHAK C 版 · 12-20",
      "printedPage": "12-20",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=20",
      "paragraphs": [
        "暖鋒常有較緩抬升與較廣雲雨區，冷鋒常有較陡抬升及較集中的天氣變化，但這些都是典型模式。水氣、穩定度、移速及地形能改變實際危害，暖鋒也可有強對流。",
        "自編例：把「冷鋒危險、暖鋒安全」當成二分法會漏掉暖鋒結冰、低雲及嵌入雷暴。比較時應逐項看雲、降水、風切、能見度及其出現位置，而不只看鋒面名稱。"
      ],
      "lessonBlocks": [
        {
          "title": "比較典型結構與共同例外",
          "paragraphs": [
            "暖鋒常有較廣、較持續的雲雨帶；冷鋒常使變化較集中且迅速。坡度和移速有助理解時間與空間分布，真正危害仍由水氣、不穩定、抬升與風場共同決定。",
            "原文先列冷鋒 25～30 mph，後比較段列 20～35 mph，兩者都是典型範圍而非矛盾的法定分類。暖鋒可有嵌入雷暴，冷鋒也可有持續層狀降水；不要把名稱當安全等級。"
          ],
          "table": {
            "caption": "比較典型結構與共同例外",
            "headers": [
              "面向",
              "暖鋒典型",
              "冷鋒典型"
            ],
            "rows": [
              [
                "暖空氣抬升",
                "沿較緩斜面滑升",
                "受推進冷空氣較急抬升"
              ],
              [
                "天氣分布",
                "較廣、可在地面鋒線前很遠",
                "較集中；鋒前颮線可遠離鋒線"
              ],
              [
                "主要關注",
                "低雲、能見度、結冰、嵌入對流",
                "快速變化、陣風、風切與對流"
              ],
              [
                "共同例外",
                "不一定平順或緩慢",
                "不一定有雷暴或立即放晴"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "wind-shifts",
      "english": "Wind Shifts",
      "title": "鋒面風向轉變",
      "parent": "fronts",
      "locator": "PHAK C 版 · 12-21",
      "printedPage": "12-21",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=21",
      "paragraphs": [
        "鋒面附近風向和風速常隨氣團及壓力分布改變，過境前後的風變化可協助辨識，但方向不是全球固定的一套。半球、系統位置與地面摩擦都會影響實際轉向。",
        "自編例：某機場鋒面過境後原本逆風跑道可能變成側風或順風，起降性能也需重算。風向改變本身未必能唯一證明鋒面通過，仍要對照溫度、露點、氣壓與其他資料。"
      ],
      "lessonBlocks": [
        {
          "title": "風變是線索，鋒面不是兩個高壓的必然邊界",
          "paragraphs": [
            "原文將鋒面直接說成兩個高壓之間的邊界，容易造成誤解。鋒面是不同氣團的過渡區，常伴隨低壓與槽的結構；不能由兩個相鄰高壓反推出必有鋒面。",
            "圖 12-26 KIND 的風為 200°／24 kt，KSTL 為 300°／18 kt，可見鋒前後的空間差異。它不等於同一測站實測轉了 100°；要確認過境須看時間序列及溫露、氣壓、雷達等資料。"
          ],
          "check": {
            "question": "風突然轉向，是否唯一可能是冷鋒通過？",
            "answer": "不是。雷暴外流、海風、地形導流等也會造成轉向，需要其他觀測佐證。"
          }
        }
      ]
    },
    {
      "id": "stationary",
      "english": "Stationary Front",
      "title": "滯留鋒與持續影響",
      "parent": "fronts",
      "locator": "PHAK C 版 · 12-21",
      "printedPage": "12-21",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=21",
      "paragraphs": [
        "滯留鋒的地面位置移動較慢，但不表示沿鋒沒有風或雲雨不再發展。暖空氣仍可被抬升，水氣輸送也可能維持降水，使同一地區長時間受低雲與能見度影響。",
        "自編例：預報鋒面停滯時，等待一小時不一定就能得到天氣窗口，沿鋒新對流也可能持續生成。規劃要看預測演變及可持續的替代方案，而不以鋒線速度小等同危害小。"
      ],
      "lessonBlocks": [
        {
          "title": "滯留的是鋒位，不是天氣活動",
          "paragraphs": [
            "滯留鋒表示地面邊界移動緩慢，沿線仍可有氣流、水氣供應和新生對流。低雲、霧或降水可能維持多日，局部強降水也可能在相近路徑反覆發生。",
            "原文「兩氣團力量相等」是便於理解的描述，不代表整條鋒面完全靜止。評估等待是否有用，要看水氣與抬升機制是否將改變，而不是只看鋒線停在原處。"
          ]
        }
      ]
    },
    {
      "id": "occluded",
      "english": "Occluded Front",
      "title": "囚錮鋒的氣團配置",
      "parent": "fronts",
      "locator": "PHAK C 版 · 12-21",
      "printedPage": "12-21",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=21",
      "paragraphs": [
        "囚錮鋒常在較快冷鋒追上暖鋒後形成，暖空氣被抬離地面，前後兩側較冷空氣的相對冷暖決定不同結構。它不是冷暖氣團完全混合後變成沒有邊界。",
        "雲雨可能結合暖鋒與冷鋒特徵，也可能出現嵌入對流、低雲及結冰。自編練習：在剖面畫出暖空氣位於何處，再看航路高度會穿過哪些雲層，避免只用地面溫度推斷上方全部狀態。"
      ],
      "lessonBlocks": [
        {
          "title": "囚錮鋒先比較兩邊冷空氣",
          "paragraphs": [
            "冷鋒追上暖鋒後，原暖區空氣被抬離地面。冷式囚錮中，後方空氣比前方更冷，會楔入其下；暖式囚錮中，前方空氣更冷，後方較不冷空氣沿其上滑升。",
            "兩者都有暖空氣在上方，不能把「暖式」解讀成地面一定暖和，也不能只靠冷式／暖式名稱決定穩定度或嚴重程度。"
          ],
          "table": {
            "caption": "囚錮鋒先比較兩邊冷空氣",
            "headers": [
              "類型",
              "最冷空氣",
              "抬升配置"
            ],
            "rows": [
              [
                "冷式囚錮",
                "冷鋒後方",
                "後方空氣推入前方較不冷空氣下"
              ],
              [
                "暖式囚錮",
                "原暖鋒前方",
                "後方較不冷空氣滑到前方冷空氣上"
              ]
            ]
          }
        },
        {
          "title": "Figure 12-27：低雲與對流可共存",
          "paragraphs": [
            "圖中上層暖空氣形成廣泛雲系，局部又有積雨雲；不能把囚錮鋒看成只剩均勻小雨。KIND 的 29028G45KT 是 290°、28 kt、陣風 45 kt，1/2SM、TSRAGR 表示半英里能見度、雷暴、雨與冰雹，VV005 是垂直能見度 500 ft。",
            "同一圖的 KCMH 為 OVC090、2SM BR，表示較高雲幕仍可伴隨很差的水平能見度。KPIT 圖上印作 75SM；本教材保留這個原圖字樣，不自行添加小數點當作 7.5SM。"
          ],
          "figure": {
            "label": "Figure 12-27 · Occluded front cross-section and METAR",
            "page": "12-22",
            "url": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=22"
          },
          "check": {
            "question": "VV005 是否表示水平能見度 500 ft？",
            "answer": "不是。它是向上看入遮蔽的垂直能見度；本圖水平能見度另列為 1/2SM。"
          }
        }
      ]
    },
    {
      "id": "thunderstorms",
      "english": "Thunderstorms",
      "title": "雷暴條件與生命週期",
      "parent": "fronts",
      "locator": "PHAK C 版 · 12-22",
      "printedPage": "12-22",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=22",
      "paragraphs": [
        "雷暴需要足夠水氣、不穩定與觸發抬升。典型單胞由上升氣流主導的積雲期，進入上下氣流並存的成熟期，再到下降氣流占優勢的消散期，但組織化多胞或超胞可持續更新。",
        "消散中的單一胞不表示整片系統都在減弱，旁邊可同時發展新胞。自編例：若避讓路線仍穿過持續生成的對流區，不能只靠一個回波減弱就判斷安全，需評估全區演變和可用替代航路。"
      ],
      "points": [
        "積雲期：上升氣流與凝結發展，未見地面降雨不代表沒有強上升。",
        "成熟期：降水、上升與下降氣流並存，多種危害可同時出現。",
        "消散期：下降氣流占優勢，外流與其他殘留危害仍可存在。"
      ],
      "lessonBlocks": [
        {
          "title": "三階段看上下氣流的交替",
          "paragraphs": [
            "Figure 12-28 是典型單胞生命週期：積雲期以上升為主；成熟期有顯著降水，上升與下降氣流並存；消散期以下降為主，上升供應衰弱。",
            "原文約 15 分鐘到成熟期及圖中英里高度是示意尺度，不是每場雷暴的倒數計時。砧狀雲可在成熟期已形成，不能用出現砧狀雲就判定雷暴已消散。",
            "單胞在消散仍有外流、降水或冰雹等殘留危害；多胞系統可一邊消散、一邊長出新胞。沒有地面降雨的發展期也可能有很強的上升氣流。"
          ],
          "figure": {
            "label": "Figure 12-28 · Life cycle of a thunderstorm",
            "page": "12-23",
            "url": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=23"
          },
          "table": {
            "caption": "三階段看上下氣流的交替",
            "headers": [
              "階段",
              "主導特徵",
              "常見誤判"
            ],
            "rows": [
              [
                "積雲期",
                "上升與垂直成長",
                "沒下雨所以無危害"
              ],
              [
                "成熟期",
                "上下氣流並存、降水明顯",
                "從雲底下通過可避開"
              ],
              [
                "消散期",
                "下降占優勢、供應減弱",
                "整片系統立即安全"
              ]
            ]
          },
          "check": {
            "question": "某一胞回波變弱，旁邊仍有新塔狀雲，能否認定整區在消散？",
            "answer": "不能。單胞與整個系統的生命週期不同，必須查看整區的發展、移動和新生對流。"
          }
        },
        {
          "title": "持續供應讓雷暴系統延長壽命",
          "paragraphs": [
            "氣團雷暴常由局部加熱觸發；鋒面、輻合及高空系統可提供持續抬升，風切和氣流組織使部分雷暴維持更久。原文 steady-state 是持續性較強的概念，並不表示雷暴位置、強度或雲內氣流不變。",
            "雷暴形成需要足夠水氣、不穩定與啟動抬升。具備其中一項並不保證成雷暴；條件足夠後，持續補入暖濕空氣可讓整個系統超過單一氣團胞的生命週期。"
          ]
        }
      ]
    },
    {
      "id": "hazards",
      "english": "Hazards",
      "title": "雷暴危害與避讓範圍",
      "parent": "thunderstorms",
      "locator": "PHAK C 版 · 12-23",
      "printedPage": "12-23",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=23",
      "paragraphs": [
        "雷暴可能同時帶來亂流、風切、冰雹、結冰、雷擊、低能見度及強降水，外觀不能可靠判斷內部強度。可見雲邊不等於危害邊界，砧狀雲下方與外流區也可能危險。",
        "PHAK 以至少 20 NM（海里）說明嚴重或強烈回波雷暴的避讓，FAA AIM 亦提供相應避讓指引，不能將此距離當成所有條件下的安全保證。資料鏈回波有時間差，適合規劃避開整區，不適合即時選擇狹小穿越縫隙。"
      ],
      "references": [
        {
          "title": "FAA AIM · Meteorology and thunderstorm avoidance",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-19"
        }
      ],
      "currentNote": "查閱 2026-09-19：AIM Chapter 7 Section 1 強調整區避讓與資料鏈延遲；其條文使用 20 miles，PHAK 本段使用 20 NM。任何建議距離都不是危害的絕對邊界。",
      "lessonBlocks": [
        {
          "title": "把至少 20 NM 當避讓起點，不是安全邊界",
          "paragraphs": [
            "PHAK 對已辨識為嚴重或強烈回波的雷暴提出至少 20 NM 避讓，尤其要考慮砧狀雲下方冰雹。現行 AIM 的對應條文寫作至少 20 miles；閱讀來源時保留各自單位表述，不把任何距離當作雲外絕對無危害的界線。",
            "沒有可行繞行路線時，應改航並在適當地點落地等待，或起飛前留在地面。原書冷鋒故事說不能繞過，是針對可能很長的雷暴帶；不是說所有孤立雷暴都不能在充足間隔下繞行。"
          ],
          "check": {
            "question": "距離可見雲邊略超過 20 NM，就足以保證安全嗎？",
            "answer": "不能。還要考慮系統強度、移動、砧狀雲、外流及可用退路；建議間隔不是所有危害的固定外緣。"
          }
        },
        {
          "title": "資料鏈圖像用於整區避讓",
          "paragraphs": [
            "地面雷達拼接圖經掃描、處理、傳送後才到座艙；顯示的更新時間不一定等於每個像素的實際觀測時間。現行 AIM 提醒，圖上天氣可能比畫面標示的時間還舊 15～20 分鐘。",
            "因此資料鏈 NEXRAD 用於規劃避開整區，不能單靠它挑狹窄缺口即時穿越。回波主要反映降水，並不直接測量全部亂流；有機載雷達或 ATC 協助也不會使雷暴穿越成為可接受的常規計畫。"
          ]
        }
      ]
    },
    {
      "id": "squall",
      "english": "Squall Line",
      "title": "颮線與成帶對流",
      "parent": "hazards",
      "locator": "PHAK C 版 · 12-23",
      "printedPage": "12-23",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=23",
      "paragraphs": [
        "颮線是一條活躍雷暴帶，可能在冷鋒上、前方或遠離鋒面的不穩定區形成。它的連續性、強外流及快速發展會限制繞行空間，不能只把它當成一列互不影響的小雲。",
        "自編例：線上某段回波較弱，可能仍有風切、雲中亂流或快速填補的新胞。應考慮繞過整區、延後或落地等待，而不是依單張圖把低回波缺口當成可用通道。"
      ],
      "lessonBlocks": [
        {
          "title": "颮線限制的是整條可用航路",
          "paragraphs": [
            "颮線是狹長的活躍雷暴帶，可位於冷鋒上、鋒前，或遠離鋒面的不穩定區。它可能快速形成、延伸並產生強外流，使原先可繞行或落地的選項消失。",
            "原文傍晚最強是常見模式而非時段限制；夜間或其他時段也可能有強颮線。不要把回波較弱的一小段視為永久開口，應考慮整區繞行、改航、延後或及早落地。"
          ]
        }
      ]
    },
    {
      "id": "tornadoes",
      "english": "Tornadoes",
      "title": "龍捲與漏斗雲",
      "parent": "hazards",
      "locator": "PHAK C 版 · 12-23",
      "printedPage": "12-23",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=23",
      "paragraphs": [
        "龍捲是與對流雲相連且接觸地面的強烈旋轉氣柱，可見凝結漏斗未必延伸到地面。只有雲漏斗外觀不足以判定是否接地，地面碎屑或旋轉也可提供線索。",
        "旋轉危害可隱藏在降水或雲內，沒有看到完整漏斗不代表安全；水龍捲同樣不能靠近觀察。自編例：夜間或儀器天氣下，需依雷暴與龍捲相關資訊避讓，不將目視確認當成必要前提。"
      ],
      "lessonBlocks": [
        {
          "title": "龍捲的判準是旋轉氣柱接地",
          "paragraphs": [
            "龍捲是與對流雲相連且接觸地面的旋轉氣柱；可見凝結漏斗只是其中可見部分。即使漏斗尚未延伸到地面，地面旋轉碎屑仍可能顯示龍捲已存在。",
            "因此原文「雲漏斗碰到地面才是龍捲」需改成旋轉氣柱是否接地。水面上的水龍捲也須避讓；它們並不都具有同一形成機制，但都不是可接近觀察的目標。",
            "旋轉可被雨幕、黑暗或其他雲層遮蔽，且向雲內延伸。200 kt 是嚴重案例量級，不是辨識門檻，沒有看到漏斗不能排除危害。"
          ],
          "check": {
            "question": "可見漏斗與地面間還有一段空隙，能否排除龍捲？",
            "answer": "不能。凝結雲未必呈現整條旋轉氣柱，應看相關警報與其他證據，不能為確認而靠近。"
          }
        }
      ],
      "references": [
        {
          "title": "NWS · Tornado life cycle and condensation funnel",
          "url": "https://www.weather.gov/spotterguide/tor_life",
          "checked": "2026-09-19"
        }
      ]
    },
    {
      "id": "turbulence",
      "english": "Turbulence",
      "title": "雷暴內外亂流",
      "parent": "hazards",
      "locator": "PHAK C 版 · 12-24",
      "printedPage": "12-24",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=24",
      "paragraphs": [
        "強烈上升、下降氣流及兩者間風切使雷暴內有嚴重亂流潛勢，雲外的陣風鋒與外流也可延伸很遠。飛在雲底以下或砧狀雲旁，並不等於避開整個對流系統。",
        "自編例：尚未進入降雨卻突然遇到地面風大幅改變，可能已進入外流影響區。若遇意外亂流需依機型程序處理，但亂流穿越速度不能把原本不可接受的雷暴穿越變成安全計畫。"
      ],
      "references": [
        {
          "title": "FAA AIM · Meteorology and thunderstorm avoidance",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-19"
        }
      ],
      "lessonBlocks": [
        {
          "title": "Figure 12-29：第一陣風可先於雨到達",
          "paragraphs": [
            "成熟雷暴中上下氣流交界有強風切；冷下沉氣流抵地後外擴，陣風鋒、揚塵和圖中的 roll cloud 可出現在主要降水之前。可見雲體並未畫出全部受影響的空域。",
            "原文提到雲外側向約 20 miles、陣風鋒可能超前約 15 miles，是危害可延伸很遠的例子，不是固定半徑。沒有滾軸雲或揚塵也不保證沒有外流。",
            "雲下、砧狀雲附近及雲頂上方都可能有危害；小型飛機不能把爬到雷暴頂上當一般避讓策略。指定亂流穿越速度也無法保證抵抗雷暴的極端氣流。"
          ],
          "figure": {
            "label": "Figure 12-29 · Movement and turbulence of a maturing thunderstorm",
            "page": "12-24",
            "url": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=24"
          },
          "check": {
            "question": "機場尚未下雨，風卻突然變強並轉向，是否仍可能受雷暴影響？",
            "answer": "是。陣風鋒和外流可先到，必須重新評估起降風、風切及附近對流，不能等雨開始才反應。"
          }
        }
      ]
    },
    {
      "id": "icing",
      "english": "Icing",
      "title": "過冷水滴與對流結冰",
      "parent": "hazards",
      "locator": "PHAK C 版 · 12-24",
      "printedPage": "12-24",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=24",
      "paragraphs": [
        "雷暴上升氣流可支持大量過冷液態水，與機體接觸後快速結冰；不同滴徑和溫度可形成不同積冰。不能把某一溫度當成絕對分界，認為更冷就必然沒有液態水或其他冰相關危害。",
        "防除冰裝備有核准範圍，不能保證抵抗雷暴中的所有過冷水或高空冰晶影響。自編例：系統開啟後仍需監控未保護部位和性能，並依限制脫離；本節不提供跨機型的啟動時機口訣。"
      ],
      "lessonBlocks": [
        {
          "title": "過冷水滴與冰晶不能用 −15 °C 一刀切",
          "paragraphs": [
            "強上升氣流可把大量液滴帶到冰點以上的高度，也就是溫度低於 0 °C 的空域；水滴仍可能保持液態，碰到機體後快速結冰。較大滴徑和含水量可帶來快速透明冰或混合冰。",
            "原文以 −15 °C 附近描述冰晶增加，不能解讀為低於此溫度所有液水消失。原文說水蒸氣 sublimates 成冰晶，這個方向應稱 deposition（凝華）；冰變水蒸氣才是昇華。",
            "可見水氣與低溫是重要結冰警訊，但不是所有危害的完整判定。防除冰核准有範圍，不能用裝備存在或單一溫度作為穿越雷暴的依據。"
          ],
          "check": {
            "question": "−16 °C 且防冰已開，是否代表雷暴中沒有結冰風險？",
            "answer": "不是。過冷水滴、冰晶及裝備限制仍需考量；−15 °C 不是安全分界。"
          }
        }
      ]
    },
    {
      "id": "hail",
      "english": "Hail",
      "title": "冰雹與雲外落區",
      "parent": "hazards",
      "locator": "PHAK C 版 · 12-25",
      "printedPage": "12-25",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=25",
      "paragraphs": [
        "強上升氣流可讓冰粒在雲中持續收集過冷水並長大，最後落下或被風帶離主要回波區。地面落雨可能是冰雹已融化的結果，不足以證明飛行高度沒有冰雹。",
        "自編例：繞到砧狀雲下方但未進入主雲，仍可能遇到冰雹造成風擋、翼面與引擎損害。避讓需要考慮整個對流系統和風，不只依肉眼看到的降雨柱邊緣飛行。"
      ],
      "lessonBlocks": [
        {
          "title": "地面只有雨，空中仍可能有冰雹",
          "paragraphs": [
            "冰粒在上升氣流支撐下收集過冷水滴而長大，離開支撐後落下，也可被風帶出主雲。下落經過暖層會融化，所以地面觀察到雨不能排除飛行高度有冰雹。",
            "砧狀雲下方與雲外晴空都可能遇到冰雹。原文半英寸以上可迅速造成損傷，是危害例示，不代表更小冰雹可以忽略；撞擊影響還與相對速度、粒子數量及暴露時間有關。"
          ],
          "check": {
            "question": "繞開雨柱但從砧狀雲下方通過，是否已避開冰雹？",
            "answer": "沒有。冰雹可能離開主降水區或在到地面前融化，應避開整個危害區。"
          }
        }
      ]
    },
    {
      "id": "storm-ceiling",
      "english": "Ceiling and Visibility",
      "title": "雷暴的雲幕與能見度",
      "parent": "hazards",
      "locator": "PHAK C 版 · 12-25",
      "printedPage": "12-25",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=25",
      "paragraphs": [
        "雷暴內外的雲、強降水、吹塵與碎屑可使能見度迅速降低，並與亂流和風切同時發生。雲底仍高或偶爾可看見跑道，不代表下方進場路徑沒有嚴重氣流危害。",
        "自編例：先前符合目視條件的機場，在外流到達後可能突然轉為低能見度或強側風。應把天氣趨勢、到達時間和替代方案一起評估，而不是只依上一筆雲幕數字繼續。"
      ],
      "lessonBlocks": [
        {
          "title": "雲幕與能見度只是雷暴風險的一部分",
          "paragraphs": [
            "雲內視野可能接近零，雲下也可被大雨、吹塵與碎屑遮蔽。這些影響和風切、亂流、冰雹同時存在，不能只按能見度數字決定是否繼續進場。",
            "自編例：雲底很高且暫時看得到跑道，但陣風鋒正越過最後進場段。看得見目的地並不能消除氣流風險，應依當前整體條件及本機程序決策。"
          ]
        }
      ]
    },
    {
      "id": "altimeter-effects",
      "english": "Effect on Altimeters",
      "title": "雷暴附近的壓力變化",
      "parent": "hazards",
      "locator": "PHAK C 版 · 12-25",
      "printedPage": "12-25",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=25",
      "paragraphs": [
        "雷暴接近與冷外流到達時，地面壓力可能快速改變，使先前取得的高度表設定不再代表附近狀態。氣壓高度表會把壓力變化轉成指示變化，不能單看指針就認定飛機真的改變同等幾何高度。",
        "自編例：沿用舊設定進場可能減少預期地形裕度，需按程序取得適用更新並交叉核對。原書的時間和百呎量級是例示，不是每個雷暴必定相同，也不能靠更新設定來消除其他雷暴危害。"
      ],
      "lessonBlocks": [
        {
          "title": "氣壓快速改變會變成高度指示誤差",
          "paragraphs": [
            "雷暴接近時氣壓可能下降，冷外流與首陣強風到達後可能上升，再隨系統離去調整。原文約 15 分鐘與超過 100 ft 的誤差是例子，不是所有雷暴固定循環。",
            "自編近似：若適用設定由 29.92 降至 29.82 inHg，仍保留較高舊設定，指示會偏高約 100 ft。這只用低空每 1 inHg 約 1,000 ft 的粗估，不是精確幾何高度修正；更新設定也不能消除亂流和風切。"
          ],
          "check": {
            "question": "沿用偏高的舊設定，地形間隔可能比指示所暗示的多還是少？",
            "answer": "可能更少：高度表指示偏高，實際高度低於所認為的高度。需取得適用更新並依程序交叉核對。"
          }
        }
      ]
    },
    {
      "id": "lightning",
      "english": "Lightning",
      "title": "雷擊與系統影響",
      "parent": "hazards",
      "locator": "PHAK C 版 · 12-25",
      "printedPage": "12-25",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=25",
      "paragraphs": [
        "雷擊可損傷機體、天線、電氣與航電，附近閃光也可能暫時影響視覺。設計上的防護降低部分風險，卻不代表雷暴內其他危害也受控制，沒有頻繁閃電也不能證明安全。",
        "自編例：雷擊後引擎和螢幕看似正常，仍可能需要按機型程序檢查並安排維修評估。雷電偵測顯示的是相關電活動資訊，不能獨自畫出所有亂流、冰雹或可穿越區域。"
      ],
      "lessonBlocks": [
        {
          "title": "雷電會影響機體、儀表與視覺",
          "paragraphs": [
            "直接雷擊可損傷外皮、天線、通信導航與電氣系統；附近強光可短暫干擾視覺，磁羅盤也可能受影響。設計防護降低風險，卻不表示遭雷擊後不需檢查。",
            "頻繁強烈閃電提示強對流，但閃電次數不是其他危害的精確量尺；沒有看見閃電也不能判定沒有冰雹或強亂流。偵測器顯示的電活動位置，不等於可安全通行的邊界。"
          ]
        }
      ]
    },
    {
      "id": "water-ingestion",
      "english": "Engine Water Ingestion",
      "title": "強降水與引擎吞水",
      "parent": "hazards",
      "locator": "PHAK C 版 · 12-25",
      "printedPage": "12-25",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=25",
      "paragraphs": [
        "強對流可使局部液態水或冰雹含量很高，超過引擎在相應條件下可承受的範圍，可能造成燃燒不穩、熄火或損害。引擎認證包含一定環境測試，不表示可以承受所有雷暴核心。",
        "自編例：飛機有防冰與連續點火功能，不代表穿越強降水區就有保證。這些系統的使用與異常處置需依機型，規劃仍以避開不可接受的對流環境為主。"
      ],
      "lessonBlocks": [
        {
          "title": "局部高含水量可能超出引擎承受範圍",
          "paragraphs": [
            "強上升氣流若接近或超過雨滴相對空氣的下落速度，可使水滴被懸留或向上帶動，形成局部高含水量。不能把地面雨量直接當成引擎進氣口遭遇的水濃度。",
            "渦輪引擎吞入大量水或冰雹可能燃燒不穩、熄火或受損。認證測試代表指定條件下的能力，不代表每種雷暴核心都可承受；連續點火及防冰也不能作為穿越強對流的保證。"
          ]
        }
      ]
    },
    {
      "id": "summary",
      "english": "Chapter Summary",
      "title": "全章統整：形成機制與飛行影響",
      "parent": null,
      "locator": "PHAK C 版 · 12-25",
      "printedPage": "12-25",
      "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=25",
      "paragraphs": [
        "天氣由受熱、壓力差、水氣、地形與大氣運動共同形成，單一數字或雲名不足以概括其影響。判讀應連結觀測、預報、位置、高度和有效時間，再評估性能、視野、結冰與氣流。",
        "自編複習：比較輻射霧和平流霧、冷鋒和暖鋒、相對濕度和露點，再說明雷暴為何在雲外仍有危害。進一步資料可閱讀 FAA Aviation Weather Handbook；原書列出的舊 AC 與資料入口需另核對現行版本。"
      ],
      "references": [
        {
          "title": "FAA · AC 00-6B cancellation",
          "url": "https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.current/documentNumber/00-6",
          "checked": "2026-09-19"
        },
        {
          "title": "FAA · AC 00-24C cancellation",
          "url": "https://www.faa.gov/airports/resources/advisory_circulars/index.cfm/go/document.information/documentNumber/00-24C",
          "checked": "2026-09-19"
        },
        {
          "title": "FAA-H-8083-28B · Aviation Weather Handbook",
          "url": "https://www.faa.gov/regulationspolicies/handbooksmanuals/aviation/faa-h-8083-28b-aviation-weather-handbook",
          "checked": "2026-09-19"
        }
      ],
      "lessonBlocks": [
        {
          "title": "把形成機制轉成有退路的判斷",
          "paragraphs": [
            "依序問：水氣從哪裡來、什麼使空氣抬升或冷卻、環境如何回應垂直擾動、危害會出現在哪個高度及時間。再把答案連到性能、視野、結冰、氣流及備降方案。",
            "自編整合：出發地尚有散雲，前方暖鋒雲底降低，另一側冷鋒帶有 +TSRA。既不能只因出發地可目視就放行，也不能只因目的地在鋒後轉晴就忽略航路雷暴；需比較預計到達時間的天氣演變並保留替代方案。"
          ],
          "check": {
            "question": "為何沒有雷暴，也不一定適合 VFR？",
            "answer": "穩定空氣仍可能有逆溫、霧、低雲與差能見度；適飛判斷必須涵蓋航路、時間、高度、性能及適用要求。"
          }
        },
        {
          "title": "舊版 AC 與現行查閱入口",
          "paragraphs": [
            "原章列出 AC 00-6、00-24、00-45 等天氣出版物。FAA 已將相關天氣內容整合到 Aviation Weather Handbook；查閱時使用 FAA-H-8083-28B 官方入口，並核對各 AC 的狀態，不把原書清單當成全部仍現行。",
            "AC 00-6B 與 AC 00-24C 的官方頁面標示已取消。AC 91-74B 的飛行結冰指引則需獨立核對，不能推論「所有帶天氣內容的 AC 都取消」。雷暴與資料鏈天氣指引見現行 AIM Chapter 7 Section 1；原文另提到的 Section 2 主要是高度表設定。"
          ]
        }
      ]
    }
  ],
  "confusions": [
    {
      "title": "穩定與安全",
      "clarification": "穩定度描述垂直擾動反應，不是飛行安全評分。",
      "example": "穩定大氣仍可能有低雲和霾。"
    },
    {
      "title": "風與風切",
      "clarification": "風切強調風向或風速隨空間快速變化。",
      "example": "平均風速小不代表沒有局部風切。"
    },
    {
      "title": "相對濕度與實際水氣量",
      "clarification": "相對濕度同時受溫度影響，百分比高不一定代表水氣總量更多。",
      "example": "夜間沒有增加水氣，單靠冷卻也可能讓相對濕度上升。"
    },
    {
      "title": "雲幕與最低可見雲層",
      "clarification": "報告雲幕通常取最低 BKN／OVC 或遮蔽的垂直能見度。",
      "example": "SCT010 BKN025 的雲幕為 2,500 ft，仍不能忽略較低散雲。"
    },
    {
      "title": "穩定與好天氣",
      "clarification": "穩定空氣可有低雲霧，不穩定也需其他條件才形成雷暴。",
      "example": "逆溫下能見度可能很差。"
    },
    {
      "title": "雲邊與危害邊界",
      "clarification": "冰雹、風切和亂流可出現在可見雷暴雲外。",
      "example": "從砧狀雲下方穿過不等於避開雷暴。"
    }
  ],
  "scenario": "自編案例：某地無明顯對流，但低層逆溫、霾和低雲使能見度差。若只把「沒有雷暴」當成天氣可接受，就漏掉了目視飛行所需的其他條件。",
  "question": "下列何者正確？",
  "options": [
    "沒有雷暴就一定適合 VFR",
    "穩定大氣仍可能有低雲與差能見度",
    "露點就是地面高度"
  ],
  "answer": 1,
  "explanation": "穩定度不是整體天氣適飛判定，仍需看雲底、能見度及其他條件。",
  "verified": true,
  "reader": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=285",
  "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=285",
  "detailMode": "outline",
  "checked": "2026-09-19",
  "coverageNote": "全章 51 節均已加入深入講解，共 68 個單元、13 張比較表、26 題理解練習與 Figure 12-1～12-29 官方原圖指引。涵蓋大氣、風、水氣、雲霧、全部鋒面及雷暴危害；逐站解讀原圖 METAR，註明原圖與文字差異，補充現行來源及近似值限制。"
};
