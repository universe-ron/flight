export const chapter={
  "id": "phak25c-11",
  "number": 11,
  "title": "航空器性能",
  "english": "Aircraft Performance",
  "section": "第 11 章；11-1～11-28，全章目錄逐節講解",
  "goal": "理解性能輸入、圖表條件與起飛爬升的差別。",
  "primer": "性能數字對應重量、壓力高度、溫度、風、跑道與構型等條件。若忽略註記，計算可能很精確卻不適用；先確認資料輸入，比急著找答案更重要。",
  "terms": [
    "Vx · 最佳爬升角速度",
    "Vy · 最佳爬升率速度",
    "Interpolation · 內插"
  ],
  "prompts": [
    "以 600 ft/min 和不同地速重算爬升梯度，解釋相同爬升率為何有不同越障結果。",
    "選一張本機起飛或落地表，列出其輸入、假設、修正次序和輸出，再說明目前資料能與不能支持哪些結論。"
  ],
  "keyPoints": [
    "PA、DA 與 OAT 是不同輸入，避免重複溫度修正。",
    "爬升角看距離，爬升率看時間；越障還受地速影響。",
    "最大航程與最長續航不同，螺旋槳與噴射機不可共用口訣。",
    "性能表需核對全部假設，內插不能變成任意外推。",
    "跑道足夠正常離地，不保證故障情況、越障和落地評估都合格。"
  ],
  "detailSections": [
    {
      "id": "introduction",
      "english": "Introduction",
      "title": "導論：把環境轉成性能判斷",
      "parent": null,
      "locator": "PHAK C 版 · 11-1",
      "printedPage": "11-1",
      "source": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=1",
      "paragraphs": [
        "航空器性能描述在指定重量、構型、動力及環境下可以達成的速度、距離、爬升與續航。它不只是飛機型錄上的數字，同一架飛機在炎熱高地和寒冷低地會有不同能力。",
        "本章先解釋影響性能的物理原因，再練習讀取手冊圖表。所有自編數字只用來驗證方法，實際放行仍需本機核准資料、當日條件與適用操作要求，不能把教材例子當成機型限制。"
      ],
      "lessonBlocks": [
        {
          "title": "先選性能問題，再選對資料",
          "paragraphs": [
            "同一架飛機可以用不同速度追求最短越障距離、最快爬升、最長滯空或最遠航程。每個最佳值都有重量、構型、動力及環境前提，不能把某一種「最佳速度」套用到所有任務。",
            "本章以原圖和算例連結物理關係，涵蓋大氣、爬升、巡航、起降及運輸類性能。學習時先寫出要回答的量與單位，再核對本機資料及限制，避免把原書示意數字當作實機性能。"
          ]
        }
      ]
    },
    {
      "id": "data",
      "english": "Importance of Performance Data",
      "title": "性能資料的適用性",
      "parent": null,
      "locator": "PHAK C 版 · 11-1",
      "printedPage": "11-1",
      "source": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=1",
      "paragraphs": [
        "AFM／POH 的性能數據有特定假設，例如重量、襟翼、跑道、風、功率與操縱技術。不同手冊可能用壓力高度加溫度，也可能要求密度高度，輸入錯誤會讓讀圖正確卻結果失真。",
        "自編例：一張圖已要求壓力高度與 OAT，若先換算密度高度再把 OAT 加進去，可能重複修正溫度。使用前逐一核對圖名、條件、單位、附註及最後輸出是滑跑還是越障距離。"
      ],
      "lessonBlocks": [
        {
          "title": "讀表前先讀條件，避免溫度被修正兩次",
          "paragraphs": [
            "手冊可能要求壓力高度加 OAT，也可能直接使用密度高度；有的列滑跑，有的列越過指定高度障礙的總距離。重量、風、坡度、跑道表面、功率和襟翼等附註，都是數據成立的條件。",
            "自編例：圖表已用 PA＝5,000 ft 和 OAT＝25°C 作輸入，就不要再把先算出的 DA 代入 PA 欄並保留 25°C，否則可能重複加入溫度影響。數字讀得精確也不能補救選錯圖或單位。"
          ],
          "table": {
            "caption": "使用性能資料前的核對",
            "headers": [
              "項目",
              "要確認的內容"
            ],
            "rows": [
              [
                "適用性",
                "本機型號、配置、有效修訂及補充"
              ],
              [
                "輸入",
                "PA 或 DA、重量、OAT、風與單位"
              ],
              [
                "條件",
                "功率、襟翼、跑道和操作技術"
              ],
              [
                "輸出",
                "時間、燃油、滑跑、總距離或梯度"
              ],
              [
                "邊界",
                "允許內插方式、限制與未涵蓋條件"
              ]
            ]
          },
          "check": {
            "question": "兩張圖都寫 takeoff distance，是否能不看附註直接比較？",
            "answer": "不能。須確認是否同為滑跑或越障距離，以及重量、構型、環境和技術假設。"
          }
        }
      ]
    },
    {
      "id": "atmosphere",
      "english": "Structure of the Atmosphere",
      "title": "大氣結構與密度",
      "parent": null,
      "locator": "PHAK C 版 · 11-2",
      "printedPage": "11-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=2",
      "paragraphs": [
        "空氣是具有質量、可壓縮且能流動的氣體混合物，密度代表單位體積的質量。高度上升通常伴隨壓力與密度降低，使機翼、螺旋槳和自然進氣引擎在相同設定下呈現不同反應。",
        "乾空氣中氧氣體積比例在一般飛行高度並非突然消失，主要是總壓下降使氧分壓及單位體積氧量減少。不要把高空性能下降理解成超過某高度就沒有氧氣，而應追蹤密度、功率與真空速。"
      ],
      "lessonBlocks": [
        {
          "title": "空氣的質量、組成和氧分壓分開理解",
          "paragraphs": [
            "乾空氣約含 78% 氮與 21% 氧，剩餘為氬等氣體。一般航空高度內，氧的比例沒有在 35,000 ft 突然中斷；往高空走，主要是壓力及單位體積分子數下降，氧分壓也隨之降低。",
            "密度是每單位體積的質量。相同 TAS、構型和迎角下，較低密度使氣動力較小；保持相同升力時則可能需要更高 TAS 或不同迎角。不能只說「高處升力變少」，卻省略哪些飛行條件保持不變。"
          ]
        }
      ]
    },
    {
      "id": "pressure",
      "english": "Atmospheric Pressure",
      "title": "氣壓與標準大氣",
      "parent": null,
      "locator": "PHAK C 版 · 11-2",
      "printedPage": "11-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=2",
      "paragraphs": [
        "氣壓反映上方空氣柱重量及大氣狀態，隨高度變化並非全程固定線性。ISA 海平面參考約為 15 °C、1013.25 hPa 或 29.92 inHg，提供性能比較的共同基準。",
        "低高度常用每千呎約一英吋汞柱與溫度每千呎約降 2 °C 作粗估，但不能延伸為整個大氣的精確定律。自編例：高山機場性能應按圖表壓力高度處理，而非只使用公布海拔。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 11-1 · 標準海平面是共同參考",
          "paragraphs": [
            "標準海平面約為 1013.25 hPa＝29.92 inHg、15°C，壓力約 14.7 psi。hPa 與 mb 數值相同；inHg 是壓力單位，不能把它和重量、密度或高度本身混為一談。",
            "原圖以液柱高度說明壓力的測量。氣壓隨時間、位置和高度改變；實際飛行性能要使用當時狀況，ISA 只是比較與校準的參考，不是每天都會出現的天氣。"
          ],
          "figure": {
            "label": "Figure 11-1 · Standard sea level pressure",
            "page": "11-2",
            "url": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=2"
          }
        },
        {
          "title": "Figure 11-2 · 氣壓不是每千呎固定少一英吋",
          "paragraphs": [
            "原表從海平面 29.92 inHg 到 10,000 ft 的 20.57，再到 20,000 ft 的 13.74，顯示同樣高度增量的壓差逐漸縮小。「每千呎約一英吋」只能作低高度粗估，不能用它重建整個大氣。",
            "低層標準溫度約每千呎下降 1.98°C，至約 36,000 ft。原文把後續等溫層概括到 80,000 ft；較完整的標準模型在 20 km（約 65,600 ft）以上已進入升溫層，不能將原文概括當作精確 ISA 分層或實際探空資料。"
          ],
          "figure": {
            "label": "Figure 11-2 · Properties of standard atmosphere",
            "page": "11-3",
            "url": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=3"
          },
          "table": {
            "caption": "原表的部分參考點",
            "headers": [
              "高度 ft",
              "壓力 inHg",
              "溫度 °C"
            ],
            "rows": [
              [
                "0",
                "29.92",
                "15.0"
              ],
              [
                "5,000",
                "24.89",
                "5.1"
              ],
              [
                "10,000",
                "20.57",
                "−4.8"
              ],
              [
                "20,000",
                "13.74",
                "−24.6"
              ]
            ]
          }
        }
      ],
      "references": [
        {
          "title": "NASA NIAC 研究報告 · 標準大氣分層模型",
          "url": "https://www.niac.usra.edu/files/studies/final_report/836Colozza.pdf",
          "checked": "2026-09-18"
        }
      ]
    },
    {
      "id": "pressure-altitude",
      "english": "Pressure Altitude",
      "title": "壓力高度與設定",
      "parent": null,
      "locator": "PHAK C 版 · 11-3",
      "printedPage": "11-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=3",
      "paragraphs": [
        "壓力高度是目前壓力對應到標準大氣的高度，可由高度表標準設定讀取，或依手冊與計算工具求得。它不必等於機場海拔，也不是離地高度。",
        "近似式 PA = 場高 + (29.92 − 氣壓設定 inHg) × 1,000。自編例：場高 2,000 ft、設定 29.42 inHg，PA 約 2,500 ft；此為學習粗估，不能拿來替代飛行中依法所需的高度表設定。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 11-3 · 修正的是壓力高度，不是地形高度",
          "paragraphs": [
            "PA 是實際壓力在標準大氣所對應的高度，可由標準設定高度表、適用修正表或飛行計算工具求得。圖例在海平面場地、altimeter setting 29.70 inHg，查表加 205 ft，得到 PA 約 205 ft。",
            "用每 inHg 約 1,000 ft 的粗估則得到 (29.92−29.70)×1,000＝220 ft，與圖值不同是近似方法的差異。場高 2,000 ft 若沿同一圖表方法，則加 205 得約 2,205 ft；實際依手冊要求方法計算。"
          ],
          "figure": {
            "label": "Figure 11-3 · Field elevation versus pressure",
            "page": "11-3",
            "url": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=3"
          },
          "check": {
            "question": "PA 高於場高 205 ft，代表飛機或跑道真的升高了嗎？",
            "answer": "不是。它表示壓力相當於標準大氣中較高的位置。"
          }
        },
        {
          "title": "Altimeter setting 不是機場實際站壓",
          "paragraphs": [
            "高度表設定是經換算的設定值，不能當成高地機場的當地絕對壓力直接代入密度公式。計算工具若要求 station pressure，須提供站壓；若要求 altimeter setting 和場高，則依其欄位給值。",
            "為計算性能而理解 29.92 標準設定，不等於可在任何空域任意更改操作所需設定。PA、真實高度與離地高度各有用途，性能表與導航／障礙的高度基準也需分清。"
          ]
        }
      ],
      "references": [
        {
          "title": "NWS · 站壓及壓力高度換算欄位",
          "url": "https://www.weather.gov/lsx/calc",
          "checked": "2026-09-18"
        }
      ]
    },
    {
      "id": "density-altitude",
      "english": "Density Altitude",
      "title": "密度高度與性能環境",
      "parent": null,
      "locator": "PHAK C 版 · 11-3",
      "printedPage": "11-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=3",
      "paragraphs": [
        "密度高度是標準大氣中具有相同密度的高度，常以壓力高度再修正非標準溫度理解。高密度高度意味空氣較稀薄，並不表示地面高度改變，或所有儀表都應改顯示此值。",
        "同一 IAS 的起飛通常對應更高 TAS，再加上可能降低的功率和推進能力，起飛滑跑及爬升會受影響。增壓引擎可在一定範圍維持功率，但不能消除翼面、螺旋槳及較高地速等所有影響。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 11-4 · 由 OAT 與 PA 找到相同密度的標準高度",
          "paragraphs": [
            "從下方 OAT 軸向上到相應 PA 斜線，再向左讀 DA。紅色標準溫度線附近，PA 與 DA 相同；同一 PA 上越熱，讀到的 DA 越高。圖上的 DA 是性能環境，不是飛機在地形上方的高度。",
            "原書例以 PA 5,000 ft、ISA 約 5°C 為起點，若高於標準 20°C，即 OAT 約 25°C，DA 會高於 7,000 ft。自編粗估 DA≈PA＋120×(OAT−ISA)，得到約 7,400 ft；係數屬近似，精算與操作依適用工具／手冊。"
          ],
          "figure": {
            "label": "Figure 11-4 · Density altitude chart",
            "page": "11-4",
            "url": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=4"
          },
          "check": {
            "question": "PA 5,000 ft，OAT 比 ISA 高 20°C，粗估 DA 是多少？",
            "answer": "約 5,000＋120×20＝7,400 ft；不是把 OAT 25 直接乘 120。"
          }
        },
        {
          "title": "同一 IAS 可能對應更高 TAS 與起飛地速",
          "paragraphs": [
            "高 DA 時，若維持相同重量、構型及近似相同 IAS，通常需要較高 TAS；無風時起飛地速也較高。自然進氣引擎的功率與推進表現又可能降低，使加速和爬升更不利。",
            "增壓可在一定範圍維持引擎功率，但不會消除所有空氣密度影響。原書 790 ft 增至接近 1,000 ft 只是特定示例，不能據此給所有飛機套用固定距離修正；濕度與實際設備性能也需按適用資料處理。"
          ]
        }
      ]
    },
    {
      "id": "density-pressure",
      "english": "Effects of Pressure on Density",
      "title": "壓力對密度的影響",
      "parent": "density-altitude",
      "locator": "PHAK C 版 · 11-4",
      "printedPage": "11-4",
      "source": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=4",
      "paragraphs": [
        "在溫度及組成不變下，提高壓力會增加單位體積內的空氣質量，密度隨之上升。比較密度時必須固定其他條件，不能只看到高壓便認定任何情況都比低壓更稠密。",
        "自編例：同溫兩天，較低氣壓設定通常使同一機場的壓力高度較高，性能較不利。實際計算仍要加入當日溫度，因為氣壓與溫度的影響可能同時出現或互相抵銷。"
      ],
      "lessonBlocks": [
        {
          "title": "密度與壓力成正比，要固定溫度和組成",
          "paragraphs": [
            "乾空氣的理想氣體近似為 ρ＝p／(RT)，T 用絕對溫度。若 T 和氣體組成不變，p 降低 10%，ρ 也降低 10%；不能在溫度同時改變時仍只按壓力比例判斷。",
            "自編例：同溫同組成，100 kPa 改成 90 kPa，密度比為 0.90。這裡 p 是當地絕對壓力，不是直接取 METAR 的高度表設定，也不是皮托總壓減靜壓所得的動壓。"
          ]
        }
      ]
    },
    {
      "id": "density-temperature",
      "english": "Effects of Temperature on Density",
      "title": "溫度對密度的影響",
      "parent": "density-altitude",
      "locator": "PHAK C 版 · 11-5",
      "printedPage": "11-5",
      "source": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=5",
      "paragraphs": [
        "固定壓力及組成下，氣體升溫膨脹，密度下降；理想氣體關係使用絕對溫度，不是攝氏數字直接成比例。實際大氣中壓力和溫度會一起變，不能只用一個變數推斷全部。",
        "自編例：同一壓力高度，炎熱午後通常比涼爽清晨有更高密度高度，起飛和爬升可能更差。可調整出發時間或裝載，但仍需使用預定時段的資料，不能沿用早上算好的性能。"
      ],
      "lessonBlocks": [
        {
          "title": "溫度反比使用 Kelvin，不用攝氏倍數",
          "paragraphs": [
            "固定壓力與組成時，ρ2／ρ1＝T1／T2。自編例：20°C 升到 40°C，密度比約為 293.15／313.15＝0.936，下降約 6.4%，不是因攝氏翻倍就減半。",
            "實際上升過程中，壓力與溫度常同時下降，兩者對密度的作用相反，通常壓力下降占優勢。比較兩個氣團或出發時段時，仍需共同考慮壓力、溫度和組成。"
          ],
          "check": {
            "question": "0°C 時是否能把密度公式的溫度分母設為零？",
            "answer": "不能。0°C＝273.15 K，公式使用絕對溫度。"
          }
        }
      ]
    },
    {
      "id": "density-humidity",
      "english": "Effects of Humidity (Moisture) on Density",
      "title": "濕度對密度的影響",
      "parent": "density-altitude",
      "locator": "PHAK C 版 · 11-5",
      "printedPage": "11-5",
      "source": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=5",
      "paragraphs": [
        "在相同總壓與溫度下，水蒸氣比例增加會使混合氣體平均分子量下降，因而降低密度。這裡說的是氣態水蒸氣，不能用水滴比空氣重來反駁，也不能省略固定壓溫的前提。",
        "簡易性能圖未必提供濕度修正，並不代表濕度沒有物理影響。應依手冊接受的方法處理，不自行加一個通用百分比；尤其不能把濕跑道造成的摩擦變化與空氣濕度的密度效應混在一起。"
      ],
      "lessonBlocks": [
        {
          "title": "濕空氣較輕的前提是相同溫度與總壓",
          "paragraphs": [
            "水蒸氣分子量約 18，低於乾空氣平均約 29；在同溫同總壓下，水蒸氣替代部分乾空氣，使混合氣密度下降。這不是往固定容積任意加入水後總質量必定減少，也不是談液態水滴的重量。",
            "Relative humidity 是水蒸氣壓相對該溫度飽和水蒸氣壓的比例，不等於所有濕度指標。相同 RH 的冷暖空氣，其水蒸氣含量可以不同；比較「暖濕」與「冷乾」時仍不能省略壓力條件。"
          ]
        },
        {
          "title": "濕度可以計算，但不可自行編造性能修正率",
          "paragraphs": [
            "原文「沒有圖表或方法計算濕度效應」過於絕對。NWS 提供以氣溫、站壓及露點求 DA 的方法，其中使用虛溫處理水蒸氣影響；常見僅 PA＋OAT 的圖表則採較簡化處理。",
            "有濕度計算方法，不代表可把任意 DA 修正塞進所有 POH 圖表。依本機資料接受的方法處理；空氣濕度降低密度，濕跑道改變加速／煞車條件，兩種影響需各自評估。"
          ],
          "check": {
            "question": "兩天 RH 都是 70%，是否代表水蒸氣含量與 DA 都一樣？",
            "answer": "不代表。還需溫度、壓力等資料，不能只比較相對濕度。"
          }
        }
      ],
      "references": [
        {
          "title": "NWS · 氣溫、站壓、露點與虛溫的 DA 計算",
          "url": "https://www.weather.gov/media/epz/wxcalc/densityAltitude.pdf",
          "checked": "2026-09-18"
        }
      ]
    },
    {
      "id": "performance",
      "english": "Performance",
      "title": "性能目標與取捨",
      "parent": null,
      "locator": "PHAK C 版 · 11-5",
      "printedPage": "11-5",
      "source": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=5",
      "paragraphs": [
        "短場起飛、快速巡航、長續航與高酬載是不同性能目標，不一定由同一速度或設定最佳化。飛機設計和引擎特性決定可用推力／功率，氣動與重量則決定需求。",
        "自編練習：先說明任務要最短越障距離、最快爬升還是最少耗油，再選對圖表和速度。不能因某速度名為「最佳」就認為它適用所有階段，限制與安全裕度仍需一併考慮。"
      ],
      "lessonBlocks": [
        {
          "title": "把可用量與需求量放在同一條件比較",
          "paragraphs": [
            "氣動構型、重量與速度影響所需推力或功率；動力裝置、環境與限制決定可用量。只有單位、速度、重量、構型及高度一致時，兩條曲線的差才有性能意義。",
            "短場、速度、載重、航程與續航目標常互相取捨。更換目標時需換相應資料與設定；不能把較低燃油流量自動視為較遠航程，也不能把較高爬升率自動視為較佳地面越障梯度。"
          ]
        }
      ]
    },
    {
      "id": "level",
      "english": "Straight-and-Level Flight",
      "title": "平直飛行的需求與可用量",
      "parent": "performance",
      "locator": "PHAK C 版 · 11-5",
      "printedPage": "11-5",
      "source": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=5",
      "paragraphs": [
        "在簡化穩定平直飛行模型中，升力平衡重量，推力平衡阻力；有效推進功率等於推力乘真空速。低速時誘導阻力較重要，高速時寄生阻力較重要，最低阻力點並非最低功率點。",
        "固定密度和構型等條件下，寄生阻力約隨速度平方增加，其功率需求約隨速度立方增加。自編例：速度加倍時此部分阻力約四倍、功率約八倍；這不是說整架飛機總阻力在任何狀態都恰好四倍。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 11-5 · 最低阻力來自兩種阻力的合計",
          "paragraphs": [
            "簡化定常平飛時 L≈W、T≈D。固定密度、重量及構型的低速模型中，寄生阻力約隨 V² 增加，誘導阻力約隨 1／V² 減少；合計得到 U 形曲線，最低點對應該條件下的 L／D 最大值。",
            "100 kt 增到 200 kt 的理想化比較中，寄生阻力成四倍，誘導阻力成四分之一。這不代表總阻力四倍；接近失速或高速壓縮性明顯時，也不能繼續無條件套用相同比例。"
          ],
          "figure": {
            "label": "Figure 11-5 · Drag versus speed",
            "page": "11-6",
            "url": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=6"
          }
        },
        {
          "title": "Figure 11-6 · 功率需求是阻力再乘 TAS",
          "paragraphs": [
            "有效推進功率 P＝D×V，因此寄生部分約隨 V³、誘導部分約隨 1／V。速度加倍時，兩部分功率分別約為八倍和二分之一；最低功率點通常比最低阻力點更慢。",
            "圖中可用功率與需求功率的高速交點示意最大定常平飛速度。低速端還受失速、操縱與穩定條件限制，不能只看曲線交點就保證可飛；圖示平飛速度上限也不是結構 VNE。"
          ],
          "figure": {
            "label": "Figure 11-6 · Power versus speed",
            "page": "11-6",
            "url": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=6"
          },
          "table": {
            "caption": "固定密度、重量、構型的簡化比例",
            "headers": [
              "分量",
              "阻力隨 V",
              "功率隨 V",
              "速度加倍的功率"
            ],
            "rows": [
              [
                "寄生",
                "V²",
                "V³",
                "8 倍"
              ],
              [
                "誘導",
                "1／V²",
                "1／V",
                "1／2 倍"
              ]
            ]
          },
          "check": {
            "question": "最低阻力速度是否一定就是最低功率速度？",
            "answer": "不是。功率還乘上 TAS，所以曲線最低點通常不同。"
          }
        }
      ]
    },
    {
      "id": "climb",
      "english": "Climb Performance",
      "title": "爬升與能量",
      "parent": "performance",
      "locator": "PHAK C 版 · 11-6",
      "printedPage": "11-6",
      "source": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=6",
      "paragraphs": [
        "持續定速爬升需要把可用能量的一部分轉成位能，核心在多餘推力或多餘功率。短暫拉高機頭也可用空速換高度，但若速度持續下降，不能把這種短暫爬升當成持續爬升能力。",
        "推力是力，功率是作功能力的速率，兩者不是同義詞。自編例：一架飛機瞬間抬頭上升但逐漸失速，並未證明它具備清越障礙所需的穩定爬升性能。"
      ],
      "lessonBlocks": [
        {
          "title": "推力是力，功率是能量變化率",
          "paragraphs": [
            "推力用 N 或 lbf，功率用 W、kW 或 hp；沿速度方向的有效推進功率為 T×V。引擎軸功率與推進功率之間還有螺旋槳等效率，不能直接把所有引擎額定馬力當成爬升功率。",
            "原書用可用 200 hp、平飛需 130 hp 示意剩餘 70 hp。只有兩者採相同功率定義和條件時才能直接相減；定速爬升再以剩餘有效功率除以重量求 ROC。"
          ]
        },
        {
          "title": "持續爬升與用速度換高度不同",
          "paragraphs": [
            "簡化能量帳為 (T−D)V＝W×ROC＋mV×dV／dt。定速時後項為零，多餘功率用於增加位能；減速時也能暫時用動能換高度，不能把這段 zoom climb 當成持續爬升能力。",
            "自編理想上限：忽略淨推進作功與損失，從 120 kt 減至 90 kt 的高度增量為 (V1²−V2²)／(2g)，約 85 m，即 279 ft。真實結果還受推力、阻力、迎角及操縱限制，此例只驗證能量單位。"
          ],
          "check": {
            "question": "抬頭後短暫 VSI 上升，是否已證明能持續越障？",
            "answer": "不能。需查看速度是否下降及可持續的爬升性能。"
          }
        }
      ]
    },
    {
      "id": "aoc",
      "english": "Angle of Climb (AOC)",
      "title": "爬升角與 VX",
      "parent": "climb",
      "locator": "PHAK C 版 · 11-7",
      "printedPage": "11-7",
      "source": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=7",
      "paragraphs": [
        "爬升角關心每單位水平距離換得多少高度，簡化定速模型有 sin γ = (T − D)/W。VX 針對最佳爬升角，通常用於相關越障需求；它與追求每分鐘最高高度增加的 VY 不同。",
        "手冊爬升角概念與地面障礙梯度還要透過風和地速連結。同樣爬升率下，順風會讓每海里取得的高度變少；自編例：不能只看到垂直速度正常，就忽略飛向山脊時地速變快造成的梯度下降。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 11-7 · VX 比高度／距離，VY 比高度／時間",
          "paragraphs": [
            "原例 VX 軌跡 30 秒上升 1,000 ft、水平移動 3,000 ft；VY 軌跡同時上升 1,500 ft、水平移動 6,000 ft。前者爬升率 2,000 fpm、梯度 33.3%；後者 3,000 fpm、梯度 25%，較快爬高卻不是較陡。",
            "33.3% 梯度不等於 33.3°角；角度為 arctan(高度／水平距離)，本例約 18.4°和 14.0°。這是圖解數字，不能當成某型訓練機保證性能；原書全油門敘述亦須服從本機額定與時間限制。"
          ],
          "figure": {
            "label": "Figure 11-7 · Maximum angle versus maximum rate of climb",
            "page": "11-7",
            "url": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=7"
          },
          "table": {
            "caption": "原圖比較",
            "headers": [
              "軌跡",
              "高度／時間",
              "ROC",
              "高度／水平距離"
            ],
            "rows": [
              [
                "最大 AOC",
                "1,000 ft／30 s",
                "2,000 fpm",
                "1,000／3,000＝33.3%"
              ],
              [
                "最大 ROC",
                "1,500 ft／30 s",
                "3,000 fpm",
                "1,500／6,000＝25%"
              ]
            ]
          }
        },
        {
          "title": "Figure 11-8 · 最大爬升角找最大剩餘推力",
          "paragraphs": [
            "定常、推力近沿航跡的模型為 sinγ＝(T−D)／W。圖中 TA 和 TR 的垂直差是剩餘推力；噴射機以近似固定推力示意，最大差約在最低阻力處；螺旋槳推力隨速度改變，最大差可位於更低速度。",
            "這是典型曲線，不是讓飛行員靠近失速去尋找 VX。實際速度與構型由手冊給定；空氣相對爬升角也不直接等於有風時的地面航跡角，越障還要考慮風和地速。"
          ],
          "figure": {
            "label": "Figure 11-8 · Maximum AOC: jet and propeller airplanes",
            "page": "11-7",
            "url": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=7"
          }
        }
      ]
    },
    {
      "id": "roc",
      "english": "Rate of Climb (ROC)",
      "title": "爬升率與 VY",
      "parent": "climb",
      "locator": "PHAK C 版 · 11-7",
      "printedPage": "11-7",
      "source": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=7",
      "paragraphs": [
        "爬升率關心每單位時間增加的高度，定速時可由多餘有效功率除以重量理解。VY 對應最佳爬升率，與 VX 的目標不同，兩者實際數值還會隨高度、重量和構型改變。",
        "自編例：爬升率 600 ft/min、地速 90 kt 即 1.5 NM/min，地面梯度為 400 ft/NM。若地速變成 120 kt 而爬升率不變，梯度降為 300 ft/NM；每分鐘表現相同卻不代表越障效果相同。"
      ],
      "points": [
        "地面梯度 ft/NM = ROC ft/min × 60 ÷ GS kt。",
        "百分比梯度需把水平距離換成同單位；400 ft/NM 約為 6.58%。",
        "轉換公式只描述當下穩定條件，不能保證未來整段航跡都維持相同性能。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 11-9 · 最大爬升率找最大剩餘功率",
          "paragraphs": [
            "圖中的 PA−PR 才是可持續爬升所用的有效剩餘功率。噴射機最大差一般在高於 L／DMAX 的速度，典型螺旋槳機則可較接近它；實際可用功率曲線並非永遠水平，不能直接用最低功率需求點代替 VY。",
            "自編例：剩餘有效功率 33,000 ft·lbf/s、重量 3,000 lbf，ROC＝11 ft/s＝660 fpm。若用引擎軸馬力，需先處理推進效率；若飛機同時加速，部分功率還會增加動能。"
          ],
          "figure": {
            "label": "Figure 11-9 · Maximum ROC: jet and propeller airplanes",
            "page": "11-8",
            "url": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=8"
          },
          "check": {
            "question": "知道額定馬力和重量，就能直接算出 VY 與爬升率嗎？",
            "answer": "不夠。還需當下可用功率、效率、需求曲線、構型及環境。"
          }
        },
        {
          "title": "地面梯度用 GS，空氣動力模型用相應空速",
          "paragraphs": [
            "定常條件下地面梯度 ft/NM＝ROC×60／GS。600 fpm、90 kt 得 400 ft/NM；同樣 ROC、120 kt 得 300 ft/NM。風改變地速，因此即使空氣相對爬升表現相同，地面越障結果也不同。",
            "把 ft/NM 轉百分比時以 1 NM≈6,076 ft 換算，400／6,076×100≈6.58%。順逆風的定常比較不等於風切或垂直氣流情境；也不能只用某一瞬間的 VSI 保證整段爬升。"
          ]
        }
      ]
    },
    {
      "id": "climb-factors",
      "english": "Climb Performance Factors",
      "title": "爬升因素與升限",
      "parent": "climb",
      "locator": "PHAK C 版 · 11-8",
      "printedPage": "11-8",
      "source": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=8",
      "paragraphs": [
        "重量、密度高度、功率、機體阻力及構型共同影響多餘功率。起落架、襟翼或結冰增加阻力後，即使引擎輸出未變，可用來爬升的剩餘能量也可能大幅減少。",
        "實用升限與絕對升限的定義要看適用性能資料，不能用單一通用爬升率代表所有航空器。雙引擎失去一具也不等於爬升能力只少一半，因為原先可用的爬升功率只是扣除平飛需求後的差額。"
      ],
      "lessonBlocks": [
        {
          "title": "重量和阻力會同時壓縮剩餘量",
          "paragraphs": [
            "同速度、密度與構型下增加重量，需較大升力係數，誘導阻力通常增加。原文把寄生阻力也一概說成隨重量增加，過於概括；簡化固定構型模型的寄生項不直接由重量決定。",
            "重量還出現在 ROC 分母，因此同樣剩餘功率下，較重仍爬得較慢。起落架、襟翼、結冰與高度的影響需按實際機型：增壓、額定功率及適用速度基準會改變曲線，不能把所有機型描述成完全相同。"
          ]
        },
        {
          "title": "Figure 11-10 · 升限取決於條件，IAS 與 TAS 不可混用",
          "paragraphs": [
            "原圖以 IAS 示意 VX 隨高度增加、VY 減少，至絕對升限附近匯合；此處最大持續 ROC 為零。這是典型示意趨勢，具體速度、高度、重量及構型須依機型資料，不把圖中高度當成限制。",
            "本章以最大 ROC 降至 100 fpm 說明常見輕型機 service ceiling；其他機型或單發升限可用不同準則。實用升限不等於最高核准操作高度，也不證明在該高度具備所需越障、氧氣或失壓應對能力。"
          ],
          "figure": {
            "label": "Figure 11-10 · Absolute and service ceiling",
            "page": "11-9",
            "url": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=9"
          }
        },
        {
          "title": "四種 loading 比值的分母不同",
          "paragraphs": [
            "Power loading 用重量除功率，wing loading 用重量除翼面積；旋翼 blade loading 用重量除槳葉面積，disk loading 則除以旋翼掃掠圓盤面積。比較數值前要確認定義、單位與參考條件一致。",
            "自編例：2,400 lb、200 hp、翼面積 160 ft²，power loading＝12 lb/hp、wing loading＝15 lb/ft²。翼載荷會影響速度需求，但落地速度還取決於最大升力係數、密度等，不是只由一個比值決定。"
          ],
          "table": {
            "caption": "Loading 名稱與分母",
            "headers": [
              "名稱",
              "常用形式",
              "不可混淆"
            ],
            "rows": [
              [
                "Power loading",
                "W／額定 hp",
                "較小值通常表示每單位重量有較多功率"
              ],
              [
                "Wing loading",
                "W／翼面積",
                "不是整架機身表面積"
              ],
              [
                "Blade loading",
                "W／旋翼槳葉面積",
                "不是掃掠圓盤"
              ],
              [
                "Disk loading",
                "W／旋翼圓盤面積",
                "不是實際槳葉總面積"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "range",
      "english": "Range Performance",
      "title": "航程、續航與比航程",
      "parent": "performance",
      "locator": "PHAK C 版 · 11-9",
      "printedPage": "11-9",
      "source": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=9",
      "paragraphs": [
        "航程衡量能飛多遠，續航時間衡量能飛多久；比航程可用速度除燃油流量表達。對螺旋槳與噴射機而言，燃油流量和所需功率／推力的關係不同，因此不能共用同一最佳速度口訣。",
        "自編例：120 kt 地速、10 gal/h，地面比航程為 12 NM/gal；逆風後只有 90 kt，則為 9 NM/gal。最大續航通常看較低燃油流量，最大航程需比較距離與燃油，並扣除實際所需備份。"
      ],
      "points": [
        "理想化螺旋槳模型：最低功率常與最長續航相關，最佳升阻比附近常與最大無風航程相關。",
        "噴射機燃油流量較直接連到推力需求，最佳航程／續航點不能照搬螺旋槳模型。",
        "實際最佳設定需查重量、高度、引擎及螺旋槳效率、風與手冊資料。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 11-11 · 最長時間與最遠距離找不同點",
          "paragraphs": [
            "在圖示螺旋槳簡化模型，最低燃油流量對應最大續航時間；從原點到燃油流量／功率曲線的相切線，對應最大速度與消耗比值，即最大無風比航程。最大航程點通常比最大續航點更快。",
            "把 fuel flow 和 power required 疊在同一縱軸，隱含耗油與功率關係的近似；推進效率與引擎比油耗變化會改變最佳點。圖示 L／DMAX 航程關係不能不加條件套用噴射機或任何實際巡航設定。"
          ],
          "figure": {
            "label": "Figure 11-11 · Airspeed for maximum endurance",
            "page": "11-9",
            "url": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=9"
          }
        },
        {
          "title": "Specific endurance 與 specific range 先看單位",
          "paragraphs": [
            "Specific endurance＝1／fuel flow，以 h/gal 或 h/lb 表示；specific range＝速度／fuel flow，以 NM/gal 或 NM/lb 表示。用 TAS 得空氣相對比航程，用 GS 得地面比航程；兩者不可不標示就混用。",
            "自編例：可供該段使用燃油 20 gal、油耗 10 gal/h，定常續航為 2 h；TAS 120 kt 得無風距離 240 NM，若固定逆風使 GS 90 kt，地面距離變為 180 NM。此例已假定燃油另扣保留量，也未計爬升下降等變化。"
          ],
          "table": {
            "caption": "同一油耗，不同距離基準",
            "headers": [
              "量",
              "計算",
              "結果"
            ],
            "rows": [
              [
                "比續航",
                "1／10 gal/h",
                "0.1 h/gal"
              ],
              [
                "空氣相對比航程",
                "120 kt／10 gal/h",
                "12 NM/gal"
              ],
              [
                "逆風後地面比航程",
                "90 kt／10 gal/h",
                "9 NM/gal"
              ]
            ]
          },
          "check": {
            "question": "油耗最低的速度是否一定能飛最遠？",
            "answer": "不是。續航只看時間／燃油，航程還要比較速度／燃油並考慮風。"
          }
        },
        {
          "title": "Figure 11-12 · 燒油後最佳巡航條件也會改變",
          "paragraphs": [
            "同高度同構型下，較重的所需功率曲線通常向較高速度和功率移動。燃油消耗後，最佳速度及所需功率可能下降，或可選更高的適宜高度；需依手冊巡航管理，不能只在起飛前選一個設定就當作全程最優。",
            "在相同氣動模型及構型下，L／DMAX 對應的升力係數／迎角近似不隨重量直接改變，但達到它的速度會變。這不代表實際雷諾數、馬赫數、效率與構型變化都能忽略。"
          ],
          "figure": {
            "label": "Figure 11-12 · Effect of weight",
            "page": "11-10",
            "url": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=10"
          }
        },
        {
          "title": "Long-range cruise 是速度與經濟性的取捨",
          "paragraphs": [
            "原文常見 long-range cruise 以約 99% 最大比航程換取較高巡航速度，並提到約 3～5% 速度增益；它是典型說明，不是每架飛機都適用的固定設定或保證。實際看本機重量、高度、風與巡航資料。",
            "逆風加速、順風減速可能在某些模型下改善地面比航程，但需要完整油耗和速度關係，沒有可套所有機型的單一加減值。起飛、爬升、巡航、下降、轉降與保留燃油都要納入全程計畫。"
          ]
        },
        {
          "title": "Figure 11-13 · 高度增加 TAS，不必然增加比航程",
          "paragraphs": [
            "固定重量、構型並在相同最佳升阻條件比較，低密度下 TAS 較高，而阻力可近似相同，所需有效功率 P＝D×TAS 隨之增加。圖中兩條功率曲線共用切線，表示在這個簡化模型下速度／功率比不變。",
            "要把速度／功率比換成速度／燃油流量，還需引擎比油耗、混合比及螺旋槳效率。原文稱往復機比航程直到絕對升限幾乎不變，是受限的近似；實際高度選擇也須計入爬升油量、風、功率限制及全程任務。增壓維持功率不等於保證任意高空航程。"
          ],
          "figure": {
            "label": "Figure 11-13 · Effect of altitude on range",
            "page": "11-11",
            "url": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=11"
          }
        }
      ]
    },
    {
      "id": "reversed",
      "english": "Region of Reversed Command",
      "title": "反操縱區與低速功率需求",
      "parent": "performance",
      "locator": "PHAK C 版 · 11-11",
      "printedPage": "11-11",
      "source": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=11",
      "paragraphs": [
        "在最低所需功率速度以下，為維持同一高度而再減速，反而需要更多功率，稱反操縱區。這是穩定平飛需求曲線的描述，不是油門減少就一定使速度增加，也不是操縱面反向作用。",
        "自編例：低速進場持續抬頭想維持高度，若功率不足，可能讓速度更低而下降更快。應依機型程序協調姿態與功率、維持迎角裕度，不能把「用更多油門」視為超出可用功率後仍能解決一切。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 11-14 · 反操縱區描述維持高度所需的功率",
          "paragraphs": [
            "曲線最低點左側，速度再降低，維持定常平飛所需功率反而增加；右側則速度越高需要越多功率。圖上最大可用功率與需求曲線之差是剩餘量，不是看到低速就一定仍有功率可以補。",
            "它不表示操縱面反向，也不表示減油門會自動加速。原圖把最低功率點稱為最佳續航速度，仍受油耗與效率模型假設限制；近地、接近失速或最低控制速度時，應依本機程序協調姿態與功率。"
          ],
          "figure": {
            "label": "Figure 11-14 · Power required curve",
            "page": "11-12",
            "url": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=12"
          }
        },
        {
          "title": "離地不等於能爬離地面效應",
          "paragraphs": [
            "軟場起飛可能先在地面效應內離地，再按程序建立爬升速度。若迎角過大、速度不足，離開地面效應後誘導阻力增加，即使已用最大允許功率仍可能無法維持高度。",
            "原文以降機頭加速說明能量不足，但不是任何高度都可用同一動作安全恢復，也不是保證加功率就能消除下降。應依機型和訓練維持迎角／速度裕度、及早辨識不穩定狀況，避免在低高度靠臨時補救完成起降。"
          ],
          "check": {
            "question": "全油門、已離地，是否保證還能持續爬升？",
            "answer": "不保證。需有足夠剩餘功率、正確速度與構型，並考慮離開地面效應的阻力變化。"
          }
        }
      ]
    },
    {
      "id": "takeoff-landing",
      "english": "Takeoff and Landing Performance",
      "title": "起降性能的組成",
      "parent": "performance",
      "locator": "PHAK C 版 · 11-12",
      "printedPage": "11-12",
      "source": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=12",
      "paragraphs": [
        "起飛距離包含加速滑跑與相應空中越障段，落地距離則包含從指定起始高度到接地及停止的過程。地面滑跑長度不等於全部所需跑道距離，兩者資料不能互換。",
        "風、坡度、表面、重量、密度及操縱技術都會影響結果。自編例：查到滑跑 900 ft，不能直接宣稱長 1,000 ft 且末端有障礙的跑道足夠，還須查相應距離與適用裕度。"
      ],
      "lessonBlocks": [
        {
          "title": "速度平方關係來自動能與減速度假設",
          "paragraphs": [
            "地面動能為 ½mVGS²；若可把加／減速度視為常數，距離可用 VGS²／(2a) 理解。精確加倍速度時動能四倍，在相同減速度假設下停止距離也四倍；原文 75 與 37 kt 只是接近二倍的取值。",
            "實際加速、升力、阻力、輪胎正向力和制動會隨速度變，空中段也不符合這個地面定減速度模型。IAS 用於飛行狀態與程序，地面動能則看 GS；不能將速度平方直接當成全部起降距離的通用修正公式。"
          ],
          "check": {
            "question": "速度高 10%，距離一定只多 10% 嗎？",
            "answer": "不是。相同質量下動能約多 21%，但真實總距離仍需查適用性能資料。"
          }
        }
      ]
    },
    {
      "id": "runway",
      "english": "Runway Surface and Gradient",
      "title": "跑道表面與坡度",
      "parent": "performance",
      "locator": "PHAK C 版 · 11-12",
      "printedPage": "11-12",
      "source": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=12",
      "paragraphs": [
        "草地、鬆軟地面和污染物會改變滾動阻力與制動，坡度則改變沿跑道方向的重力分量。上坡通常不利起飛加速，卻可能協助落地減速；下坡通常呈相反趨勢。",
        "百分比坡度是高度差除水平長度，不是角度本身。自編例：2% 坡度代表每 100 ft 水平距離約變高 2 ft，並不等於 2 度；實際修正依手冊，不能為了選下坡而忽略順風和障礙。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 11-15 · 先查跑道條件與附註修正的基數",
          "paragraphs": [
            "圖例基於 paved、level、dry runway 與指定短場技術，並有獨立的風、起落架和混合比條件。乾草地附註以 ground roll 的 15% 作增加量，不能把它改成任何表面都乘整段越障距離的 1.15。",
            "自編示範：原滑跑 1,000 ft、總距離 1,600 ft，若依此類附註對兩個距離加上「滑跑的 15%」，增加量同為 150 ft，得到 1,150 與 1,750 ft。實機以該表文字和適用程序為準，不與其他圖的草地修正混用。"
          ],
          "figure": {
            "label": "Figure 11-15 · Takeoff distance chart conditions",
            "page": "11-13",
            "url": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=13"
          }
        },
        {
          "title": "Figure 11-16 · 軟地面增加滾阻，不能當作可靠煞車",
          "paragraphs": [
            "照片比較硬面與草地跑道。輪胎下陷、泥、積水、雪及坑洞可妨礙加速，污染也可降低制動和方向控制；即使某種阻滯效應增加，也不能把泥水宣稱為可縮短落地的安全手段。",
            "原文把 braking effectiveness 描述為加到煞車的功率，應理解為可用制動能力與避免輪胎滑移的條件。摩擦、積水、胎況、正向力及系統狀態共同影響它；沒有適用資料時，不能由乾燥硬面表任意推算污染跑道。"
          ],
          "figure": {
            "label": "Figure 11-16 · Runway surface and aircraft performance",
            "page": "11-13",
            "url": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=13"
          }
        },
        {
          "title": "Figure 11-17 · 坡度要連同方向、風及有效資料讀",
          "paragraphs": [
            "圖中的機場資料是歷史範例，用來辨認跑道表面、坡度與方向，不能當現行機場資訊。Chart Supplement、最新跑道狀況與相關通告需配合使用；同一跑道反向使用，坡度作用也反向。",
            "坡度％＝高度差／水平距離×100。3,000 ft 上升 60 ft 為 2%，不是 2°。上坡通常延長起飛滑跑、協助落地減速，下坡通常相反；不能為取下坡加速優勢而忽略順風、障礙和其他限制。"
          ],
          "figure": {
            "label": "Figure 11-17 · Chart Supplement runway information",
            "page": "11-14",
            "url": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=14"
          }
        }
      ]
    },
    {
      "id": "hydroplaning",
      "english": "Water on the Runway and Dynamic Hydroplaning",
      "title": "積水與動態水漂",
      "parent": "performance",
      "locator": "PHAK C 版 · 11-13",
      "printedPage": "11-13",
      "source": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=13",
      "paragraphs": [
        "輪胎與跑道之間的水層可能讓接觸和摩擦大幅減少，使制動與方向控制惡化。動態水漂與速度、胎壓及積水等條件有關，但濕滑道面也可在未達此狀態前就明顯降低制動。",
        "原書近似 V ≈ 9√p，p 用 psi、V 用 kt；36 psi 得 54 kt。此值不是低於它就安全的硬門檻，也不能用來改變核准胎壓；其他水漂機制、持續水漂及污染條件仍需考慮，處置依機型。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 11-18 · 9√p 是近似，不是制動恢復的保證",
          "paragraphs": [
            "原圖使用 V≈9√p，p 為主輪胎壓 psi，V 為 kt；36 psi 得 54 kt。這是動態水漂的經驗近似，FAA Airplane Flying Handbook 另列 8.6 倍係數；兩者都不能當成低於某個整數就必然安全的界線。",
            "動態水漂可在輪胎未鎖死時發生，且開始後可能持續到較低速度。黏性水漂與橡膠返原水漂也有不同機制，不能由此式排除；勿為改變計算值自行提高胎壓。制動、防滑和氣動減速方式依本機資料。"
          ],
          "figure": {
            "label": "Figure 11-18 · Tire pressure and dynamic hydroplaning",
            "page": "11-14",
            "url": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=14"
          },
          "check": {
            "question": "36 psi 算得 54 kt，是否可保證 53 kt 有正常煞車？",
            "answer": "不能。公式近似且不涵蓋所有水漂、污染與制動條件。"
          }
        }
      ],
      "references": [
        {
          "title": "FAA Airplane Flying Handbook · 水漂類型與近似速度",
          "url": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/10_afh_ch9.pdf",
          "checked": "2026-09-18"
        }
      ]
    },
    {
      "id": "takeoff",
      "english": "Takeoff Performance",
      "title": "起飛距離與可用能力",
      "parent": "performance",
      "locator": "PHAK C 版 · 11-14",
      "printedPage": "11-14",
      "source": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=14",
      "paragraphs": [
        "起飛性能需確認加速至適當離地速度、離地後建立爬升及越障的整個過程。高密度高度和重量增加可能同時提高所需地速、降低加速與爬升能力，影響可能相互累加。",
        "逆風常降低相同空速下的地速，但不能假設起飛途中風永遠不變。自編例：早上冷空氣與逆風下的成功起飛，不能作為炎熱午後順風滿載的證據；每次都要用預定條件重新核對性能。"
      ],
      "lessonBlocks": [
        {
          "title": "重量、密度與速度同時改變加速及距離",
          "paragraphs": [
            "同升力係數和密度時，所需離地速度約隨重量平方根變化。重量增加 21%，速度約增加 10%；增加 10% 重量則速度約增加 4.9%，同時還有較大質量與可能減少的淨加速力。",
            "高 DA 時相同飛行構型的離地 IAS 可近似不變，但 TAS／無風 GS 增加；自然進氣引擎也可能失去功率。原文 C182 由 2,400 至 2,700 lb 是增加 12.5%，440 至 575 ft 是增加約 30.7%，不是括註的 11% 與 23%；這組數字僅訂正算術，不能作實機性能表。"
          ]
        },
        {
          "title": "Figure 11-19 · 風修正以相對速度比例示意",
          "paragraphs": [
            "若其他條件可近似固定，逆風為相關空速的 10%，地速比為 0.9，平方為 0.81，距離約少 19%；相同比例順風則 1.1²＝1.21，約多 21%。橫軸是風速／起降速度比，不是「每十節」或「每十 mph」的固定百分比。",
            "實際表可能規定不同逆風、順風折算及上限，不能用這張概念圖覆蓋 AFM／POH。速度、風和單位需一致，並核對起飛全程風況；離地過早或為感覺更穩而任意加速，都可能破壞預期距離與爬升。"
          ],
          "figure": {
            "label": "Figure 11-19 · Effect of wind on takeoff and landing",
            "page": "11-15",
            "url": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=15"
          },
          "check": {
            "question": "10 kt 順風是否對所有飛機都固定增加 21% 距離？",
            "answer": "不是。圖示用的是風速與相關起降速度之比；實際按本機表格及限制。"
          }
        }
      ]
    },
    {
      "id": "landing",
      "english": "Landing Performance",
      "title": "落地距離與能量管理",
      "parent": "performance",
      "locator": "PHAK C 版 · 11-16",
      "printedPage": "11-16",
      "source": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=16",
      "paragraphs": [
        "落地距離受進場起始高度、速度、重量、構型、接地位置、坡度及制動條件影響。過快或過高會增加空中段和需消耗的能量，不能只在接地後才開始考慮距離。",
        "自編例：相同質量下地速增加 10%，動能增加約 21%，但實際落地距離不必恰好增加 21%，還受浮飄、阻力與制動影響。以手冊和適用著陸評估決定可行性，並按穩定進場與重飛政策操作。"
      ],
      "lessonBlocks": [
        {
          "title": "煞車、氣動阻力與反推須依指定技術使用",
          "paragraphs": [
            "落地性能從指定起始高度、進場速度與構型計到停止，不能只看接地後滑跑。高地速增加動能，接地過遠也消耗可用跑道；最大制動、氣動減速、反推及襟翼／擾流板使用各有機型程序。",
            "原文提及氣動減速在低於接地速度 60～70% 時作用減少，屬趨勢描述，不是所有飛機統一的切換煞車速度。抬頭氣動減速也會影響輪胎載荷與方向控制，不應為節省煞車磨耗而偏離距離計算採用的技術。"
          ]
        },
        {
          "title": "重量、高度與風的百分比必須保留模型條件",
          "paragraphs": [
            "原文重量與最短落地距離成正比、每千呎約加 3.5% 等，是簡化比較，不是所有機型、溫度與道面的通用修正。較高 DA 通常提高同 IAS 的 TAS；地面制動還受速度、升力和污染影響，不能一概說整段淨減速力完全不變。",
            "進場速度修正需依重量、風及本機程序。任意低於指定速度會損失失速和操縱裕度，任意過快則可能增加浮飄與制動需求；不穩定進場應依政策及程序處理，不能只寄望接地後重煞車。"
          ]
        },
        {
          "title": "原書順風濕跑道故事：風險成立，但算術需更正",
          "paragraphs": [
            "80 相對 70 kt 是增加約 14.3%，不是 10%；速度平方比約為 1.306，而非 1.20。故事又混用 knots 與 mph，並把 Figure 11-19 的速度比例誤讀為固定風速加成，因此不能用其結果證明剩餘跑道足夠。",
            "即使僅作算術練習，暫採兩次各增加 20%：1,600×1.2×1.2＝2,304 ft，不是 2,240。再加已耗掉的 1,000 ft 得 3,304 ft，距 3,500 ft 只差 196 ft；此差額仍不是安全裕度，尚未證明濕道性能、位置和穩定進場等條件成立。"
          ],
          "table": {
            "caption": "故事中需分開的問題",
            "headers": [
              "原敘述",
              "核對結果"
            ],
            "rows": [
              [
                "80 比 70 快約 10%",
                "實為約 14.3%"
              ],
              [
                "1,920 再增加 20%＝2,240",
                "應為 2,304 ft"
              ],
              [
                "10 kt 與 10 mph 當同一量",
                "單位不同，且圖用風速比例"
              ],
              [
                "低於 54 kt 就恢復正常煞車",
                "水漂近似式無法保證恢復"
              ]
            ]
          },
          "check": {
            "question": "把故事算術改對，是否就足以批准繼續落地？",
            "answer": "不夠。仍需適用性能、當下位置／速度、風、污染和穩定進場判斷。"
          }
        }
      ]
    },
    {
      "id": "speeds",
      "english": "Performance Speeds",
      "title": "性能速度的不同目的",
      "parent": null,
      "locator": "PHAK C 版 · 11-18",
      "printedPage": "11-18",
      "source": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=18",
      "paragraphs": [
        "VX、VY、最佳滑翔和其他性能速度分別服務爬升角、爬升率、滑翔或特定操作目標。速度數值須連同重量、構型、高度和 IAS／CAS 等定義閱讀，不能只背一個機型常見數字。",
        "VA 與結構和操縱條件有關，VLE 與 VLO 分別涉及起落架放下和操作，VMC 不保證單發爬升。自編練習：對照本機手冊列出速度目的、適用條件及來源頁碼，不將「最佳」理解為所有場合都最佳。"
      ],
      "points": [
        "VX：最佳爬升角；VY：最佳爬升率，數值與高度變化依機型。",
        "VFE：襟翼限制可能分角度；VLO／VLE：操作與保持放下需分開。",
        "VNE、VNO、VA：各有不同限制與前提，VA 不是任意反覆滿舵的保護。",
        "V1、VR、V2 若適用，依運輸機核准性能與程序，不能當成輕型機的通用起飛速度。"
      ],
      "lessonBlocks": [
        {
          "title": "IAS、CAS、EAS、TAS 的修正次序",
          "paragraphs": [
            "IAS 是直接讀值；CAS 修正儀表與位置誤差；EAS 再修正可壓縮性效應；TAS 則反映真實密度下相對空氣的速度。低速時 CAS 與 EAS 常很接近，高速或高空時不能忽略差異。",
            "原文海平面標準條件下的相等關係是特定參考，不能推成任何機場或高度都相等。圖表標 KIAS、KCAS、kt 或 mph 時都要照欄位讀，空速校正也不能用地速代替。"
          ],
          "table": {
            "caption": "速度與用途",
            "headers": [
              "符號",
              "用途／修正"
            ],
            "rows": [
              [
                "IAS",
                "儀表讀值，按程序控制"
              ],
              [
                "CAS",
                "IAS 修正儀表與位置誤差"
              ],
              [
                "EAS",
                "CAS 再修正可壓縮性"
              ],
              [
                "TAS",
                "對應真實密度的空氣相對速度"
              ],
              [
                "GS",
                "地面航程、時間與地面能量"
              ]
            ]
          }
        },
        {
          "title": "V 速度的限制與目的不可互換",
          "paragraphs": [
            "VS0／VS1 是指定構型的失速或最低穩定速度；VX／VY 分別最佳爬升角及爬升率；VLO 是起落架操作、VLE 是保持放下，VFE 可能隨襟翼角度不同。VNO 是最大結構巡航速度，VNE 是不得超越速度，還需看本機高度或其他附帶條件。",
            "VA 是設計機動速度，不是所有陣風和任意操縱的保護。低於 VA 仍不保護反覆大幅反向、同軸多次滿舵或多軸同時滿舵；重量較低時適用 VA 通常也較低，數值依手冊而非自行使用最高公布值。"
          ],
          "check": {
            "question": "低於 VA，是否可以連續左右滿舵而保證不傷結構？",
            "answer": "不可以。VA 的設計條件不包含所有反覆、反向或多軸操作。"
          }
        }
      ],
      "references": [
        {
          "title": "FAA／DOT · 機動速度限制聲明",
          "url": "https://www.transportation.gov/regulations/federal-register-documents/2010-20195",
          "checked": "2026-09-18"
        }
      ]
    },
    {
      "id": "charts",
      "english": "Performance Charts",
      "title": "讀性能圖表的順序",
      "parent": null,
      "locator": "PHAK C 版 · 11-19",
      "printedPage": "11-19",
      "source": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=19",
      "paragraphs": [
        "先確認本機、版本及所需輸出，再讀條件和單位，依指定方向沿參考線處理每個變數。複合圖的多個區域可能依序修正重量、風及障礙，不能任意交換步驟或漏讀附註。",
        "結果應做方向與量級檢查，例如炎熱重載不應因抄錯欄位得到反而更短的起飛距離。數位軟體也需要相同核對，輸入錯誤不會因畫面漂亮或數字多位小數而被自動修正。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 11-20 · 條件和附註也是性能資料",
          "paragraphs": [
            "原圖條件包括襟翼收、起落架收、指定 RPM、整流罩襟翼及標準溫度；附註另列起動／滑行／起飛燃油、溫度及無風假設。先讀這些再看表內時間、燃油和距離，避免漏算或重複算。",
            "範例中的 16 lb 燃油額度、每高於標準 10°C 加 10% 等只屬這張表。其他圖可用不同溫差、不同燃油單位甚至不同機型；也不能用一般「補償係數」讓有故障或不適航的飛機取得有效性能。"
          ],
          "figure": {
            "label": "Figure 11-20 · Conditions and notes chart",
            "page": "11-19",
            "url": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=19"
          }
        }
      ]
    },
    {
      "id": "interpolation",
      "english": "Interpolation",
      "title": "內插與外推的界線",
      "parent": "charts",
      "locator": "PHAK C 版 · 11-20",
      "printedPage": "11-20",
      "source": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=20",
      "paragraphs": [
        "內插是在資料範圍內，依手冊允許方式估算兩個已知點之間的值。線性內插使用位置比例，而多變數表需逐軸處理；圖表若有特殊曲線或限制，不能擅自假設所有區段都線性。",
        "自編例：20 °C 距離 1,000 ft、30 °C 距離 1,200 ft，25 °C 位於一半，線性內插得 1,100 ft。40 °C 已超出這兩點涵蓋範圍，不能把同一算式的延長線當成已驗證性能。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 11-21 · 先求位置比例，再插入距離",
          "paragraphs": [
            "原圖 20°C 下，PA 2,000 ft 的滑跑為 1,115 ft，3,000 ft 為 1,230 ft。2,500 ft 在正中，得 1,115＋0.5×(1,230−1,115)＝1,172.5 ft，原圖取約 1,173 ft。",
            "非正中時用 f＝(目標−下端)／(上端−下端)，再算 y＝y低＋f(y高−y低)。內插不等於外推；空白、刪除或超出資料範圍不能靠延長直線補出，靠近限制也不可用有利的取位掩蓋超限。"
          ],
          "figure": {
            "label": "Figure 11-21 · Interpolating charts",
            "page": "11-20",
            "url": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=20"
          },
          "check": {
            "question": "若目標 PA 為 2,200 ft，沿同表線性內插比例是多少？",
            "answer": "(2,200−2,000)／1,000＝0.2，滑跑為 1,138 ft。"
          }
        }
      ]
    },
    {
      "id": "da-chart",
      "english": "Density Altitude Charts",
      "title": "密度高度圖與近似驗算",
      "parent": "charts",
      "locator": "PHAK C 版 · 11-20",
      "printedPage": "11-20",
      "source": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=20",
      "paragraphs": [
        "讀密度高度圖先由場高和氣壓求壓力高度，再按圖加入 OAT。若使用簡易近似 DA ≈ PA + 120 × (OAT − ISA溫度)，高度用 ft、溫差用 °C，結果僅為有限範圍的粗估。",
        "自編例：PA 2,500 ft，ISA 溫度約 10 °C，OAT 30 °C，DA 約 4,900 ft。若性能圖直接要求 PA 與 OAT，就輸入這兩者，不能又把 4,900 當 PA，造成溫度修正重複。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 11-22 · 場高先轉 PA，再用 OAT 讀 DA",
          "paragraphs": [
            "原題場高 5,883 ft、高度表設定 30.10 inHg，查修正 −165 ft，PA＝5,718 ft。70°F 約為 21.1°C，從溫度軸至 5,718 ft PA 線，再向左讀 DA 約 7,700 ft。",
            "5,718 在 5,000 至 6,000 之間約 71.8% 的位置；原文說約三分之二只屬粗略定位。簡式以 ISA 約 3.6°C，算 DA 約 7,800 ft，可作量級檢查，不能要求近似公式與有限解析度圖完全一致。"
          ],
          "figure": {
            "label": "Figure 11-22 · Density altitude chart",
            "page": "11-21",
            "url": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=21"
          },
          "check": {
            "question": "30.10 的修正為 −165，PA 應比場高高還是低？",
            "answer": "低：5,883−165＝5,718 ft。"
          }
        }
      ]
    },
    {
      "id": "takeoff-chart",
      "english": "Takeoff Charts",
      "title": "起飛圖：輸入、修正與輸出",
      "parent": "charts",
      "locator": "PHAK C 版 · 11-20",
      "printedPage": "11-20",
      "source": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=20",
      "paragraphs": [
        "起飛圖可能分滑跑與越障距離，並要求指定襟翼、最大功率、短場技術及乾燥平整跑道。依手冊順序處理氣壓、溫度、重量與風，確認每個修正適用於哪一欄。",
        "自編例：若題目明示先對 1,000 ft 增加 10%，再乘 1.2 的表面修正，得到 1,320 ft，而不是把百分比任意相加成 1,300。真實手冊未提供這些因子時，不可自行借用本例作放行。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 11-23 · 依序走完溫度、重量、風與障礙區",
          "paragraphs": [
            "原題 PA 2,000 ft、22°C、2,600 lb、逆風 6 kt、障礙 50 ft。由溫度上移至 PA 線，橫移參考線，再沿相鄰導引線到重量；重複經風區，最後分別讀零障礙滑跑及 50 ft 總距離。",
            "原圖約得滑跑 700 ft、越障總距離 1,400 ft。上表 2,600 lb 對應離地 63 kt、50 ft 處 68 kt，兩個速度不可互換；表列襟翼、混合比、功率和起落架程序仍須同時滿足。"
          ],
          "figure": {
            "label": "Figure 11-23 · Takeoff distance graph",
            "page": "11-22",
            "url": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=22"
          }
        },
        {
          "title": "Figure 11-24 · 短場表的逆風修正逐欄計算",
          "paragraphs": [
            "2,400 lb、PA 3,000 ft、30°C 查得滑跑 1,325 ft、50 ft 總距離 2,480 ft。此表規定每 9 kt 逆風減 10%，18 kt 對應減 20%，所以分別乘 0.8 得 1,060 ft 及 1,984 ft。",
            "不要把兩個距離相加，總距離已包含滑跑。此表的起飛速度、草地與順風附註也不能借用別張圖；空白格不是零距離或自動允許外推。這些機型範例應各自計算，不拼成一套虛構飛機資料。"
          ],
          "figure": {
            "label": "Figure 11-24 · Takeoff distance short-field chart",
            "page": "11-22",
            "url": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=22"
          },
          "table": {
            "caption": "Sample Problem 3",
            "headers": [
              "輸出",
              "無風 ft",
              "18 kt 逆風修正",
              "結果 ft"
            ],
            "rows": [
              [
                "滑跑",
                "1,325",
                "×0.8",
                "1,060"
              ],
              [
                "50 ft 總距離",
                "2,480",
                "×0.8",
                "1,984"
              ]
            ]
          },
          "check": {
            "question": "1,984 ft 是否還要再加 1,060 ft？",
            "answer": "不用。前者是從起飛開始到越過 50 ft 障礙的總距離。"
          }
        }
      ]
    },
    {
      "id": "climb-cruise-charts",
      "english": "Climb and Cruise Charts",
      "title": "爬升與巡航表",
      "parent": "charts",
      "locator": "PHAK C 版 · 11-21",
      "printedPage": "11-21",
      "source": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=21",
      "paragraphs": [
        "爬升表可提供瞬時爬升率，或從基準高度到某高度的累計時間、燃油和距離；巡航表則常以高度、功率與溫度給出 TAS 和油耗。不同輸出不能混用，尤其累計表要取差值。",
        "自編例：到 3,000 ft 累計需 4 分鐘、到 6,000 ft 需 10 分鐘，該段爬升時間是 6 分鐘而非 10。巡航油耗還需加起飛、爬升、下降及所需備份，不能用一個巡航數字乘整趟時間。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 11-25 · 累計值相減，時間應為 4.5 分鐘",
          "paragraphs": [
            "原題出發 PA 6,000 ft／25°C，查累計燃油 3.5 gal、時間 6 min、距離 9 NM；巡航 PA 10,000 ft／10°C，查約 6 gal、10.5 min、15 NM。依原圖例取兩組差值求該段爬升。",
            "結果為 2.5 gal、4.5 min、6 NM；原文寫 4 分鐘是算術誤植。圖為指定重量、構型、最大連續功率與無風情境，6 NM 不能不經風修正就稱為實際有風地面距離。"
          ],
          "figure": {
            "label": "Figure 11-25 · Fuel, time, and distance climb chart",
            "page": "11-23",
            "url": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=23"
          },
          "table": {
            "caption": "Sample Problem 4 差值",
            "headers": [
              "項目",
              "巡航累計",
              "出發累計",
              "該段"
            ],
            "rows": [
              [
                "燃油 gal",
                "6.0",
                "3.5",
                "2.5"
              ],
              [
                "時間 min",
                "10.5",
                "6.0",
                "4.5"
              ],
              [
                "距離 NM",
                "15",
                "9",
                "6"
              ]
            ]
          }
        },
        {
          "title": "Figure 11-26 · 溫差附註與燃油單位各自核對",
          "paragraphs": [
            "3,400 lb 從海平面至 PA 8,000 ft，標準資料為 10 min、21 lb、20 NM。原題海平面 22°C，即 ISA＋7°C，按此表每高 7°C 加 10% 的例題假設，得 11 min、23.1 lb、22 NM。",
            "以本章 AVGAS 6 lb/US gal 換算，23.1 lb＝3.85 gal。這仍只是爬升段；表註另有起動／滑行／起飛 16 lb 額度，完整計畫須按其範圍另計且避免重複。不能由出發 OAT 推定真實全層溫度廓線必然相同。"
          ],
          "figure": {
            "label": "Figure 11-26 · Fuel, time, and distance to climb",
            "page": "11-23",
            "url": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=23"
          }
        },
        {
          "title": "Figure 11-27 · 38 gal 無保留量的表不是可用續航承諾",
          "paragraphs": [
            "PA 5,000 ft、2,400 RPM 查得 TAS 116 mph、油耗 6.9 gal/h；38 gal 欄列續航 5.5 h、航程 635 statute miles。mph 不是 knots，這張表的 miles 也不能換到其他圖的 NM 軸直接比較。",
            "38÷6.9≈5.51 h；用取位的 116×5.5≈638 miles，與表列 635 的小差距顯示取位與表內資料不宜混成更高精度答案。原表明列 no reserve；實際計畫還需扣適用保留燃油及其他階段消耗。"
          ],
          "figure": {
            "label": "Figure 11-27 · Cruise and range performance",
            "page": "11-24",
            "url": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=24"
          }
        },
        {
          "title": "Figure 11-28 · ISA＋20°C 是溫差，不是 OAT 20°C",
          "paragraphs": [
            "原題 PA 6,000 ft、比標準高 36°F，等於高 20°C。進入 ISA＋20°C 欄，可讀 2,450 RPM、21.0 inHg、11.5 gal/h、161 kt；該列 OAT 約 26°C，不能直接把「高 20」當絕對溫度。",
            "表題為 65% maximum continuous power 或全油門，陰影代表全油門區；高空不一定還能維持同一百分比。並讀表列重量及 fuel flow per engine 等限定，不能把每引擎油耗當多發機總油耗。"
          ],
          "figure": {
            "label": "Figure 11-28 · Cruise power setting",
            "page": "11-25",
            "url": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=25"
          }
        },
        {
          "title": "Figure 11-29 · 有保留量與無保留量分兩條線",
          "paragraphs": [
            "標準溫度、PA 5,000 ft、65% 功率，原例約讀有保留量 522、無保留量 581。圖橫軸明列 nautical miles，因此應為 522 NM 與 581 NM，不能將正文泛稱 miles 解讀成英里。",
            "圖有 45 分鐘保留量、指定功率／混合比，以及重量、48 gal 可用燃油、無風和輪罩條件，並註明含爬升下降距離。讀圖保留量不等於已滿足每一種營運的燃油要求，仍要查本次任務與規則。"
          ],
          "figure": {
            "label": "Figure 11-29 · Best power mixture range",
            "page": "11-25",
            "url": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=25"
          }
        },
        {
          "title": "Figure 11-30 · 依圖例分 best power 與 best economy",
          "paragraphs": [
            "原題 OAT 16°C、PA 6,000 ft、65% best power、未裝輪罩。依相應功率／混合比線讀約 140 kt，再按圖註減 8 kt，得 132 kt。不能把輪罩造成的修正套到沒有同樣附註的其他機型。",
            "原文同句混稱 best power 和 best economy，應回圖例辨認：本圖 best power 為實線、best economy 為虛線，兩者不能因都寫 65% 就互換。相關 EGT 與混合比值只屬此圖條件，不是所有引擎通用調整程序。"
          ],
          "figure": {
            "label": "Figure 11-30 · Cruise performance graph",
            "page": "11-26",
            "url": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=26"
          },
          "check": {
            "question": "把 ISA＋36°F 當成 OAT 36°F，會發生什麼問題？",
            "answer": "把溫差誤當絕對溫度，會選錯性能欄；本例應讀 ISA＋20°C。"
          }
        }
      ]
    },
    {
      "id": "wind-chart",
      "english": "Crosswind and Headwind Component Chart",
      "title": "側風與逆風分量",
      "parent": "charts",
      "locator": "PHAK C 版 · 11-25",
      "printedPage": "11-25",
      "source": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=25",
      "paragraphs": [
        "相對跑道方向的風可分解為沿跑道及橫向分量，需確保風向與跑道方位使用同一真／磁基準。夾角 θ 下，逆風分量為 V cosθ，側風大小為 V sinθ，超過九十度時沿跑道分量成順風。",
        "自編例：20 kt 風與跑道夾角 30°，側風 10 kt、逆風約 17.3 kt。最大展示側風是否屬操作限制要查手冊及營運政策，不能一概當硬限制，也不能因不是硬限制就忽略濕跑道與操縱能力。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 11-31 · 先統一方位基準，再分解風",
          "paragraphs": [
            "原例以 runway 17 近似 170°，風來自 140°、25 kt，夾角 30°。逆風為 25cos30°≈21.65 kt，側風為 25sin30°＝12.5 kt，圖解約取 22 與 13 kt，側風來自左側。",
            "原 PDF 此圖圖說誤印為 Figure 10-31，按章節應為 Figure 11-31。實際計算用公布跑道方位及風資料的真／磁基準，不能只靠兩位跑道號當精確航向。逆風分量可用於適用性能修正；側風則另核對限制、操縱能力、陣風與道面狀況。"
          ],
          "figure": {
            "label": "Figure 11-31 · Crosswind component chart",
            "page": "11-26",
            "url": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=26"
          },
          "check": {
            "question": "25 kt 風是否可直接全部當成 25 kt 逆風修正？",
            "answer": "不可以，除非方向正對跑道；本例只有約 21.65 kt 逆風分量。"
          }
        },
        {
          "title": "展示側風值與操作限制需要分別查",
          "paragraphs": [
            "原書以 0.2VS0 說明側風展示，屬特定認證基礎的簡化敘述，不能說每架航空器都只有同一標準。現行 Part 23 採性能導向條文，既有機型的認證基礎與核准資料仍需個別確認。",
            "Maximum demonstrated crosswind 是否列為限制須讀本機 AFM／POH 及營運政策；未列硬限制也不是能無限增加側風的證明。乾跑道展示不能保證濕滑道面具相同方向控制，飛行員能力與其他限制也可能更嚴。"
          ]
        }
      ],
      "references": [
        {
          "title": "eCFR Part 23 · 現行正常類飛機認證架構",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-23",
          "checked": "2026-09-18"
        }
      ]
    },
    {
      "id": "landing-chart",
      "english": "Landing Charts",
      "title": "落地圖與到場評估",
      "parent": "charts",
      "locator": "PHAK C 版 · 11-26",
      "printedPage": "11-26",
      "source": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=26",
      "paragraphs": [
        "落地表的指定重量、越障高度、進場速度、襟翼與制動條件要全部核對。計畫落地時還應考慮到場風、污染、坡度與所需裕度，而非直接沿用出發時的最佳條件。",
        "自編例：查得越過指定高度到停止的距離，不表示可以接地到跑道中段仍用同一剩餘長度。若制動報告或風改變，應重新評估；認證數據、航前放行距離及到場評估可能有不同規定。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 11-32 · 兩欄各自內插，滑跑與總距離分開",
          "paragraphs": [
            "原題 PA 1,250 ft、標準溫度，位於海平面與 2,500 ft 正中。50 ft 總距離＝(1,075＋1,135)／2＝1,105 ft；滑跑＝(445＋470)／2＝457.5 ft。原文引用 Figure 10-32 是圖號誤植，應為 11-32。",
            "這張表採 1,600 lb、指定進場 mph、40°襟翼、無動力及硬面無風等條件。乾草地附註以總越障距離的 20% 為基數，與起飛表用滑跑 15% 不同；不要只記「草地加百分比」而漏看分母。"
          ],
          "figure": {
            "label": "Figure 11-32 · Landing distance table",
            "page": "11-27",
            "url": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=27"
          },
          "table": {
            "caption": "Sample Problem 11",
            "headers": [
              "項目",
              "海平面 ft",
              "2,500 ft 處 ft",
              "1,250 ft 內插"
            ],
            "rows": [
              [
                "滑跑",
                "445",
                "470",
                "457.5 ft"
              ],
              [
                "50 ft 總距離",
                "1,075",
                "1,135",
                "1,105 ft"
              ]
            ]
          }
        },
        {
          "title": "Figure 11-33 · 複合落地圖還包含進場與制動條件",
          "paragraphs": [
            "57°F 約 13.9°C，PA 4,000 ft、落地重量 2,400 lb、逆風 6 kt、障礙 50 ft，沿溫度／高度、重量、風及障礙區依次追線，原例約得滑跑 975 ft、總距離 1,500 ft。",
            "該重量的表列 50 ft 處速度為 63 kt，並附指定進場下降率、構型、乾燥平整硬面及最大制動條件。這是讀圖例，不宜單獨抽出下降率當通用進場目標；到場重量、風或道面改變時須重新確認適用性能。"
          ],
          "figure": {
            "label": "Figure 11-33 · Landing distance graph",
            "page": "11-27",
            "url": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=27"
          },
          "check": {
            "question": "圖算出總距離 1,500 ft，接地後還能把 1,500 ft 當滑跑額度嗎？",
            "answer": "不能。總距離包含空中段，且必須滿足圖列起始條件與技術。"
          }
        }
      ]
    },
    {
      "id": "stall-chart",
      "english": "Stall Speed Performance Charts",
      "title": "失速速度與負荷因數",
      "parent": "charts",
      "locator": "PHAK C 版 · 11-27",
      "printedPage": "11-27",
      "source": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=27",
      "paragraphs": [
        "失速表可能依重量、功率、構型和傾斜角列值，先確認是協調定高轉彎等何種假設。定高協調轉彎負荷因數 n = 1/cosφ，失速速度在其他條件相近時約乘 √n。",
        "自編例：60° 傾斜定高轉彎 n = 2，若原失速速度 50 kt，估算約 70.7 kt。不是任何傾斜六十度瞬間都必然兩倍負荷，下降或其他操縱可不同；失速根本條件仍是臨界迎角。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 11-34 · 先選構型、功率，再選傾斜角和單位",
          "paragraphs": [
            "原例重量 2,750 lb、gear and flaps down、power off、45° bank，讀到 78 mph 或 68 kt。不要讀成上半部 gear/flaps up 或 power on 那一列，也不要把 mph 數字直接當節。",
            "在協調定高轉彎近似中 n＝1／cos45°≈1.414，失速速度因子 √n≈1.189。由表內平飛 66 mph 估約 78.5 mph，與表列 78 的取位量級一致；真正判斷仍用該表，傾斜角本身不保證任何機動都維持同一負荷。"
          ],
          "figure": {
            "label": "Figure 11-34 · Stall speed table",
            "page": "11-28",
            "url": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=28"
          }
        }
      ]
    },
    {
      "id": "transport",
      "english": "Transport Category Aircraft Performance",
      "title": "運輸類別的性能架構",
      "parent": null,
      "locator": "PHAK C 版 · 11-28",
      "printedPage": "11-28",
      "source": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=28",
      "paragraphs": [
        "運輸類別性能把正常與規定故障情況、跑道可用距離、爬升和障礙限制結合評估。運輸類飛機與直升機的認證框架不同，不能把輕型單引擎的起飛表直接套到多引擎運輸機。",
        "理解加速停止、繼續起飛、淨起飛航跡等概念時，要連同本機 AFM 及適用營運要求閱讀。自編例：跑道足以正常離地，不代表規定的拒絕起飛或發動機失效後越障條件也已滿足。"
      ],
      "lessonBlocks": [
        {
          "title": "認證性能、放行評估與當下操作是不同層次",
          "paragraphs": [
            "運輸類飛機以 Part 25、運輸類直升機以 Part 29 的相應認證架構處理，還要配合適用營運規則和本機 AFM。正常離地距離、拒絕起飛所需距離、失效後繼續起飛及爬升限制可能共同決定允許重量。",
            "機場宣布的可用距離與物理跑道長度也可能不同；不能把 stopway、clearway 和跑道當成同一種可用路面。資料庫或航務軟體的結果需核對跑道、道面、風、重量、設備延修與版本，並由適用制度確認。"
          ]
        }
      ]
    },
    {
      "id": "obstacles",
      "english": "Air Carrier Obstacle Clearance Requirements",
      "title": "航空運輸越障與淨航跡",
      "parent": null,
      "locator": "PHAK C 版 · 11-28",
      "printedPage": "11-28",
      "source": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=28",
      "paragraphs": [
        "航空運輸越障評估需使用適用的起飛航跡與淨性能資料，考慮跑道、重量、環境、障礙及轉彎。公布離場程序與營運人的發動機失效分析目的不同，遵循一條離場線不自動證明所有失效性能要求合格。",
        "FAA §121.189 對適用渦輪飛機起飛距離與越障有具體條件，不能從本章幾句概要推導適用全球的單一梯度。應由核准資料及營運分析確認路徑和重量，原書另指向 Instrument Procedures Handbook 延伸學習。"
      ],
      "references": [
        {
          "title": "14 CFR §121.189：適用渦輪飛機起飛限制",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-G/part-121/subpart-I/section-121.189",
          "checked": "2026-09-18"
        }
      ],
      "lessonBlocks": [
        {
          "title": "SID 與發動機失效越障分析目的不同",
          "paragraphs": [
            "公布離場程序不自動保證單發失效後符合所有性能要求。適用航空運輸評估需結合淨起飛航跡、障礙、轉彎、環境和重量限制；不能用雙發正常 VY 或一個當下 VSI 數字替代分析。",
            "§121.189 對其適用渦輪飛機列出加速停止、起飛距離／滑跑與淨航跡等要求，還規定相關修正和假設。不同認證年代及營運條件有差別，本章不把單一淨梯度或清障數字套到所有航空器。"
          ],
          "check": {
            "question": "正常雙發能飛完 SID，就證明單發失效也能越障嗎？",
            "answer": "不能，需完成適用失效性能與航跡分析。"
          }
        }
      ]
    },
    {
      "id": "summary",
      "english": "Chapter Summary",
      "title": "全章統整：輸入正確才能判讀",
      "parent": null,
      "locator": "PHAK C 版 · 11-28",
      "printedPage": "11-28",
      "source": "https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page=28",
      "paragraphs": [
        "性能判斷需要連結大氣、重量、阻力、動力與跑道條件，再使用正確圖表算出距離、時間、燃油或梯度。結果還需核對限制與實際飛行可維持的條件，不能只追求一個精確數字。",
        "自編複習：說明 VX／VY、航程／續航、PA／DA、滑跑／越障距離各有何差別；再用一張手冊圖列出所有輸入與假設。當條件超出資料範圍時，辨識未知比自行外推更能支持正確決策。"
      ],
      "lessonBlocks": [
        {
          "title": "把圖表變成可追查的性能判斷",
          "paragraphs": [
            "每次計算記住輸入、適用條件、圖表版本與單位，依指定順序修正，最後核對限制、可用距離與實際飛行條件。數位工具也不能代替資料選擇與合理性檢查；查表結果更不是低於限制就可忽略穩定進場或跑道狀態的保證。",
            "整合複習：先分 PA／DA、IAS／TAS／GS、滑跑／越障、累計／區段、lb／gal、mile／NM，再檢查加成的基數及保留燃油。原書樣本來自不同機型與條件，學到的是讀法，不能把各圖最有利的數字拼成一趟可飛的計畫。"
          ],
          "check": {
            "question": "爬升、巡航和落地圖分別取自不同示例機型，能否合成真實飛行計畫？",
            "answer": "不可以。應使用同一實際航空器適用且有效的資料與配置。"
          }
        }
      ]
    }
  ],
  "confusions": [
    {
      "title": "Vx 與 Vy",
      "clarification": "前者最大化角度，後者最大化每分鐘高度增加。",
      "example": "越障與最短時間爬高不是同一題。"
    },
    {
      "title": "滑跑與越障距離",
      "clarification": "越障總距離還包含離地後的飛行。",
      "example": "只比較滑跑距離可能漏掉障礙要求。"
    },
    {
      "title": "爬升率與梯度",
      "clarification": "ft/min 是每時間，ft/NM 是每距離，換算需用地速。",
      "example": "600 ft/min 在 90 kt 是 400 ft/NM，在 120 kt 是 300 ft/NM。"
    },
    {
      "title": "反操縱區與操縱反向",
      "clarification": "描述低速維持高度的功率需求，不表示操縱面或油門作用反轉。",
      "example": "再減速可能需要更高功率才能保持高度。"
    },
    {
      "title": "水漂近似與安全門檻",
      "clarification": "9√p 是有條件的動態水漂近似，低於它仍可能制動很差。",
      "example": "36 psi 算出 54 kt，不代表 53 kt 一定安全。"
    }
  ],
  "scenario": "自編算例：假設同一張教學表在 20°C 為 1,000 ft、30°C 為 1,200 ft，其他條件相同且允許線性內插，25°C 得 1,100 ft。",
  "question": "上述教學表允許線性內插時，25°C 的距離是？",
  "options": [
    "900 ft",
    "1,100 ft",
    "1,400 ft"
  ],
  "answer": 1,
  "explanation": "25°C 位於兩點中間，1,000＋0.5×200＝1,100 ft；僅在題設條件成立時有效。",
  "verified": true,
  "reader": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=257",
  "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=257",
  "detailMode": "outline",
  "checked": "2026-09-18",
  "coverageNote": "全章 34 節均已加入深入講解，共 63 個單元，附 Figure 11-1～11-34 官方原圖指引。涵蓋大氣、爬升、巡航、反操縱區、起降與跑道、水漂、全部性能圖表及運輸類越障概念；逐步驗算原書例題，標明取位、單位及算術誤植，例題不取代本機性能資料。保留原有情境題、筆記及完成紀錄，官方補充查閱於 2026-09-18。"
};
