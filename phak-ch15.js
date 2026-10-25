export const chapter={
  "id": "phak25c-15",
  "number": 15,
  "title": "空域",
  "english": "Airspace",
  "section": "第 15 章；15-1～15-11，全章目錄逐節講解",
  "goal": "建立美國空域分類、進入條件與查圖方法。",
  "primer": "本章描述美國空域體系，包括 A、B、C、D、E 與 G 類。分類與服務、通信、天氣及裝備要求相關，不能只背顏色就判斷是否能進入。",
  "terms": [
    "Controlled airspace · 管制空域",
    "MSL / AGL · 海平面／地面基準",
    "TFR · 臨時飛航限制"
  ],
  "prompts": [
    "為一條跨越 G、E、C／D 的路線列出空域上下限、天氣、通訊、資格及設備條件。",
    "Class B 許可、MOA 活動與 TFR 同時涉及航線時，你會如何逐項確認？"
  ],
  "keyPoints": [
    "按位置、高度與時間辨識 A／B／C／D／E／G",
    "通訊、明確許可、天氣與設備是不同條件",
    "分辨特殊用途空域、TFR、MTR、TRSA 與 NSA",
    "以 FAA 規則學習；不直接套用其他國家空域制度"
  ],
  "detailSections": [
    {
      "id": "intro",
      "english": "Introduction",
      "title": "空域導論",
      "parent": null,
      "locator": "PHAK C 版 · 15-1",
      "printedPage": "15-1",
      "source": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=1",
      "paragraphs": [
        "空域不是只在地圖上畫幾個圓，而是三維範圍、服務、使用規則與時間條件的組合。本章依美國 FAA 制度介紹 A、B、C、D、E、G 及特殊用途區域；相同字母在不同國家的實施細節不能直接互套。",
        "規劃一條航線時，要依高度與時間逐段問：這裡是哪類空域、需要什麼通訊或許可、天氣是否符合、機師與設備是否合格。把這四個問題分開，才不會因其中一項符合就誤判全部可以進入。"
      ],
      "references": [
        {
          "title": "FAA AIM 3-2：受管制空域的範圍與要求",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_2.html",
          "checked": "2026-09-11"
        },
        {
          "title": "FAA AIM 3-1：分類與VFR天氣標準",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_1.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "剖面圖是分類模型，不是任何機場的實際邊界",
          "paragraphs": [
            "Figure 15-1 把A、B、C、D、E、G畫在同一剖面，幫助看出水平與垂直關係。實際空域不一定對稱，地形、儀表程序和個別指定會改變形狀。",
            "Regulatory／nonregulatory是制度分類，controlled／uncontrolled／special use／other是用途架構；它們不是互相排斥的一列選項。航線同一點可能是Class E，同時有軍事活動或臨時限制。"
          ],
          "figure": {
            "label": "Figure 15-1 · Airspace profile",
            "page": "15-2",
            "url": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=2"
          },
          "check": {
            "question": "只知道所在位置是Class E，是否已能排除TFR限制？",
            "answer": "不能。空域類別和疊加限制要一起檢查，不能只選其中一項。"
          }
        }
      ]
    },
    {
      "id": "controlled",
      "english": "Controlled Airspace",
      "title": "受管制空域",
      "parent": null,
      "locator": "PHAK C 版 · 15-2",
      "printedPage": "15-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=2",
      "paragraphs": [
        "受管制空域包含 Class A 至 E，ATC 依空域分類與飛行規則提供相應服務。名稱中的 controlled 不表示所有 VFR 航空器都必須先取得相同許可，也不表示地面到無限高都屬於圖上同一層。",
        "例如 Class E 中的普通 VFR 與 Class B 的進入條件差異很大，但 IFR 航班仍可能在 E 類接受管制。閱讀航圖時必須同時看底限與頂限，不能只看水平邊界顏色。"
      ],
      "references": [
        {
          "title": "FAA AIM 3-2：空域範圍、通訊與機師設備",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_2.html",
          "checked": "2026-09-20"
        },
        {
          "title": "FAA AIM 3-1：分類與VFR天氣標準",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_1.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "受管制不表示所有VFR都需同一種許可",
          "paragraphs": [
            "Class A～E都屬受管制空域，但服務與進入條件不同。Class B需明確許可，C／D通常要求進入前建立雙向通訊；普通VFR在E類不因E本身而必須先取得進入許可。",
            "IFR在受管制空域須有適用飛行計畫及許可。正在接受雷達交通諮詢，並不解除飛行員確認空域進入條件的責任。"
          ],
          "table": {
            "caption": "受管制不表示所有VFR都需同一種許可",
            "headers": [
              "空域",
              "一般進入重點",
              "不能混淆"
            ],
            "rows": [
              [
                "A",
                "除經授權例外外依IFR及許可",
                "不能因天晴改成普通VFR"
              ],
              [
                "B",
                "明確ATC許可",
                "呼號被回覆還不夠"
              ],
              [
                "C／D",
                "適當ATC雙向通訊",
                "仍須服從remain outside"
              ],
              [
                "E",
                "普通VFR無單獨進入許可要求",
                "仍有天氣、設備及其他限制"
              ],
              [
                "G",
                "非管制空域",
                "不是無規則區域"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "class-a",
      "english": "Class A Airspace",
      "title": "Class A：高空儀表飛行空域",
      "parent": "controlled",
      "locator": "PHAK C 版 · 15-2",
      "printedPage": "15-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=2",
      "paragraphs": [
        "美國 Class A 一般從 18,000 ft MSL 延伸至並包含 FL600，適用地域另有界定；正常操作需按 IFR 及相應管制要求進行。下限使用海平面高度、上限使用飛航空層，讀數基準不能混淆。",
        "飛到 17,500 ft 並不表示只差一個固定的真實垂直距離就到 FL180，氣壓條件會影響高度關係。進入高空前還要確認氧氣、增壓、設備及機師資格等要求，不能只因飛機爬得上去就認為可進入。"
      ],
      "references": [
        {
          "title": "FAA AIM 3-2：空域範圍、通訊與機師設備",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_2.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "18,000 ft MSL 到包含 FL600",
          "paragraphs": [
            "美國Class A一般由18,000 ft MSL到FL600（含），主要適用範圍與地理例外要依正式指定。FL600使用標準氣壓基準，不能精確等同當天60,000 ft真高度。",
            "正常以IFR操作，需相應機師資格、航空器設備與ATC許可。原圖用整片紅色表示概念，不代表全世界或美國所有領土都套同一範圍。"
          ],
          "check": {
            "question": "FL600本身與其上方，一般分屬哪一類？",
            "answer": "FL600仍在Class A；其上方一般為Class E，仍須看適用地理指定。"
          }
        }
      ]
    },
    {
      "id": "class-b",
      "english": "Class B Airspace",
      "title": "Class B：繁忙大型機場周圍",
      "parent": "controlled",
      "locator": "PHAK C 版 · 15-2",
      "printedPage": "15-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=2",
      "paragraphs": [
        "Class B 通常以多層階梯形區域包圍繁忙機場，但形狀、半徑與高度依個別機場設計。VFR 進入前需獲得明確的 Class B 許可，通訊建立、獲分配詢答機代碼或接受交通諮詢都不等同該許可。",
        "假設管制員回覆你的呼號並要求等待，應留在 B 類之外，直到收到清楚的進入許可。也要確認機師資格與設備；在下層外側飛行時，仍可能落在另外規定的詢答機或 ADS-B 區域內。"
      ],
      "references": [
        {
          "title": "FAA AIM 3-2：空域範圍、通訊與機師設備",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_2.html",
          "checked": "2026-09-20"
        },
        {
          "title": "14 CFR 91.131：Class B操作與資格",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-B/section-91.131",
          "checked": "2026-09-20"
        }
      ],
      "points": [
        "自編通話：收到「N123AB, standby」＝尚未取得 Class B 進入許可，應留在外面。",
        "必須取得明確的 Class B 進入許可；指定 squawk 或 radar contact 不能替代。",
        "典型倒置蛋糕形是記憶工具，實際底限、頂限與缺口需讀現行航圖。"
      ],
      "lessonBlocks": [
        {
          "title": "Class B 的層架要逐段讀底限",
          "paragraphs": [
            "倒婚禮蛋糕只是常見形狀，各B類依機場需求設計，頂限也以圖示為準。藍色實線及各區高度標示要一起看，不能以距機場遠近猜自己在不在B內。",
            "聽到呼號、squawk碼或radar contact，都不等於明確Class B進入許可。未獲准就保持在外，避免以貼底限或貼邊界方式消耗誤差裕度。"
          ],
          "check": {
            "question": "Approach回覆N123AB radar contact，但沒有Class B許可，能否進入？",
            "answer": "不能。須取得明確Class B許可，並符合機師與設備要求。"
          }
        }
      ]
    },
    {
      "id": "class-c",
      "english": "Class C Airspace",
      "title": "Class C：雷達服務機場周圍",
      "parent": "controlled",
      "locator": "PHAK C 版 · 15-2",
      "printedPage": "15-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=2",
      "paragraphs": [
        "Class C 常見內圈地面起約 5 NM、外圈約 10 NM，頂部通常在機場上空約 4,000 ft，但每個機場可能調整，航圖數字才是依據。VFR 進入前通常需與負責單位建立並維持雙向通訊，另須符合設備要求。",
        "若 ATC 使用你的呼號回覆，表示通訊已建立；只說「aircraft calling, standby」則尚未識別你。即使已建立通訊，若明確要求留在外面仍須遵守，不能把這項規則解讀為可忽略後續限制。"
      ],
      "references": [
        {
          "title": "FAA AIM 3-2：空域範圍、通訊與機師設備",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_2.html",
          "checked": "2026-09-20"
        }
      ],
      "points": [
        "自編通話：「N123AB, standby」使用你的呼號，表示雙向通訊已建立；若另說 remain outside，仍需留在外面。",
        "「Aircraft calling, standby」沒有識別你的航空器，尚未建立所需雙向通訊。",
        "上述邏輯不能套到 Class B；B 類另需明確進入許可。"
      ],
      "lessonBlocks": [
        {
          "title": "Class C 的5／10 NM是典型配置",
          "paragraphs": [
            "常見核心半徑5 NM自地面起，外層架至10 NM，頂部約高於機場4,000 ft；高度以圖上MSL標示，層架底限一般不低於機場上方1,200 ft。實際配置可不同。",
            "建立雙向通訊須由提供服務的ATC回覆自己的呼號；若回覆N123AB standby，通常已建立通訊，但若同時說remain outside，就仍要留在外面。只說aircraft calling standby未識別本機，不能當作已建立。"
          ],
          "table": {
            "caption": "Class C 的5／10 NM是典型配置",
            "headers": [
              "回覆",
              "判斷"
            ],
            "rows": [
              [
                "N123AB standby",
                "已識別本機並建立雙向通訊；服從其他限制"
              ],
              [
                "Aircraft calling standby",
                "未建立以本機呼號確認的雙向通訊"
              ],
              [
                "N123AB remain outside",
                "即使已通訊，仍不得進入"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "class-d",
      "english": "Class D Airspace",
      "title": "Class D：塔臺機場周圍",
      "parent": "controlled",
      "locator": "PHAK C 版 · 15-2",
      "printedPage": "15-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=2",
      "paragraphs": [
        "Class D 通常從地面延伸至機場上空約 2,500 ft，實際範圍依公布設計而定；航圖高度通常以 MSL 表示。VFR 進入前需建立與塔臺等負責單位的雙向通訊，並遵守指示。",
        "有塔臺不代表一定是 D 類，也不能假設塔臺關閉後一律變成 G 類。應查服務時段及空域備註；若閉塔後轉為 E 類或 G 類，相應程序、頻率與天氣條件可能不同。"
      ],
      "references": [
        {
          "title": "FAA AIM 3-2：空域範圍、通訊與機師設備",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_2.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "Class D 依運作時段及公布範圍辨認",
          "paragraphs": [
            "典型頂限約機場上方2,500 ft，圖上以MSL標示，邊界常為藍色虛線。實際形狀及頂限可能不同，不能畫一個固定半徑圓就當完整空域。",
            "塔臺關閉後可能變E或G，需查Chart Supplement的時段與指定。不能因頻率暫時無人回覆，就自行宣告Class D已關閉。"
          ]
        }
      ]
    },
    {
      "id": "class-e",
      "english": "Class E Airspace",
      "title": "Class E：其他受管制空域",
      "parent": "controlled",
      "locator": "PHAK C 版 · 15-2",
      "printedPage": "15-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=2",
      "paragraphs": [
        "Class E 可從地面、700 ft AGL、1,200 ft AGL 或其他指定高度開始，支援儀表航路與終端操作。普通 VFR 並非一律需要事前進入許可，但仍要符合天氣、設備及其他適用限制。",
        "航圖上某處 E 類底限是 700 ft AGL 時，下方可能是 G 類；若爬升跨過底限，VFR 雲距要求也可能改變。MSL 是海平面基準，AGL 隨地形改變，不能把山區的同一高度讀數都當成相同離地高度。"
      ],
      "references": [
        {
          "title": "FAA AIM 3-2：空域範圍、通訊與機師設備",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_2.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "Class E 的底限可能隨位置與地形改變",
          "paragraphs": [
            "E類可從地面、700 ft AGL、1,200 ft AGL或其他指定高度開始。淡洋紅暈圈常提示700 ft底限一側，地面E常用洋紅虛線；需配完整圖例與正式指定，不能把所有E邊界都想成相同顏色。",
            "原文「未畫就從14,500 ft MSL起」有地理和高度例外，包括相關高地的離地限制，不能作萬用判讀。一般E上達但不含18,000 ft MSL，FL600以上另有E類。"
          ]
        },
        {
          "title": "海拔高度固定，離地高度仍會變",
          "paragraphs": [
            "教學例：航空器在2,500 ft MSL，地面1,000 ft MSL，離地1,500 ft；若前方地面升至2,000 ft MSL而飛機不爬升，離地只剩500 ft。若各處E底限都為700 ft AGL，兩點相對E底限的位置不同。",
            "這只是幾何練習，不能把進入G當成合法低空或可降低雲距的策略；還要符合最低安全高度、地形與其他操作規則。"
          ],
          "check": {
            "question": "地面1,000 ft MSL，E底限700 ft AGL，底限換算為何？",
            "answer": "1,700 ft MSL。判斷飛行位置時仍須確認地形與正式空域指定。"
          }
        }
      ]
    },
    {
      "id": "uncontrolled",
      "english": "Uncontrolled Airspace",
      "title": "非管制空域的意義",
      "parent": null,
      "locator": "PHAK C 版 · 15-3",
      "printedPage": "15-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=3",
      "paragraphs": [
        "美國非管制空域主要指 Class G，表示未被指定為 A 至 E 的空間，並不代表沒有法規或不用避免碰撞。飛行仍受適用的天氣最低標準、讓路、最低安全高度與其他作業限制約束。",
        "「沒有塔臺」與「非管制空域」不是同義詞：無塔臺機場可能位在地面起始的 E 類。應先讀空域分類，再決定程序，而不是看到沒有塔臺就自動套用 G 類規則。"
      ],
      "references": [
        {
          "title": "FAA AIM 3-3：Class G",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_3.html",
          "checked": "2026-09-11"
        },
        {
          "title": "FAA AIM 3-2：空域範圍、通訊與機師設備",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_2.html",
          "checked": "2026-09-20"
        },
        {
          "title": "14 CFR 91.126：G類機場及塔臺通訊",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-B/section-91.126",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "Uncontrolled 描述服務架構，不取消法規",
          "paragraphs": [
            "Class G是未指定為A、B、C、D、E的空域。沒有一般受管制空域的IFR隔離架構，不表示無需遵守讓路、最低高度、天氣或其他適用規則。",
            "原文把ATC說成完全沒有權限容易誤解：G類機場仍可能有運作塔臺及相關通訊規定，ATC亦可提供其能力與規則允許的資訊。"
          ]
        }
      ]
    },
    {
      "id": "class-g",
      "english": "Class G Airspace",
      "title": "Class G：貼近地面的常見空域",
      "parent": "uncontrolled",
      "locator": "PHAK C 版 · 15-3",
      "printedPage": "15-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=3",
      "paragraphs": [
        "Class G 的高度範圍取決於上方受管制空域的底限，某些地方很薄，偏遠地區可能較高。VFR 最低條件還要按離地高度、海平面高度、晝夜及航空器種類判斷，不能簡化成永遠一英里能見度。",
        "白天低空某些條件可適用較低的法定最低值，但山區地形與迎面交通仍可能要求更大餘裕。學習時應把法定下限與個人最低標準分開，也不要為了較低雲距規則而刻意貼地飛行。"
      ],
      "references": [
        {
          "title": "FAA AIM 3-3：Class G",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_3.html",
          "checked": "2026-09-11"
        },
        {
          "title": "FAA AIM 3-1-4：基本 VFR 天氣最低標準與例外提示",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_1.html",
          "checked": "2026-09-11"
        },
        {
          "title": "FAA AIM 3-2：空域範圍、通訊與機師設備",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_2.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "先確定真在G，再查G的天氣表",
          "paragraphs": [
            "G常由地面延伸到上方E底限，但高度不是全國固定700或1,200 ft。地形、地面E及其他指定都會改變結果。",
            "無塔臺機場不必然在G；地面E也可能沒有塔臺。先用空域資料定位，再依日夜、AGL、MSL與航空器種類判斷天氣條件。"
          ],
          "check": {
            "question": "機場沒有塔臺，是否可以直接用G類日間1SM、雲外？",
            "answer": "不可以，該機場可能在地面E或其他空域，需先確認類別。"
          }
        }
      ]
    },
    {
      "id": "special-use",
      "english": "Special Use Airspace",
      "title": "特殊用途空域",
      "parent": null,
      "locator": "PHAK C 版 · 15-3",
      "printedPage": "15-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=3",
      "paragraphs": [
        "特殊用途空域為特定活動設置，可能禁止或限制一般飛行，也可能只是告知有特殊危害。必須分清區域種類、啟用時間、垂直範圍與負責單位，不能把所有斜線區都當成同樣禁止進入。",
        "一條航線可能在平面上穿過某區，卻在其下方或非啟用時段通過；是否可行仍需查正式條件與其他重疊限制。規劃時保留側向與高度餘裕，避免導航誤差或臨時活動使計畫失效。"
      ],
      "references": [
        {
          "title": "FAA AIM 3-4：特殊用途空域",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_4.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "特殊用途區先查四個維度",
          "paragraphs": [
            "名稱／編號指出區域，水平邊界與垂直上下限指出空間，活動時間指出何時可能有危害，使用／管制機關提供查詢及協調資訊。航圖背面或相關資料頁不可省略。",
            "不活動與已釋放給FAA不是一律同義；沒有聽到活動也不是確認停用。是否可進入取決於區域種類、即時狀態及適用許可。"
          ],
          "table": {
            "caption": "特殊用途區先查四個維度",
            "headers": [
              "區域",
              "核心目的",
              "VFR不能推論"
            ],
            "rows": [
              [
                "P",
                "禁止飛行／安全保護",
                "通訊建立就可進入"
              ],
              [
                "R",
                "限制危險活動區",
                "看不見危險就可穿越"
              ],
              [
                "W",
                "警告海上危害",
                "非禁止就沒有風險"
              ],
              [
                "MOA",
                "軍事訓練與IFR協調",
                "VFR可飛就一定安全"
              ],
              [
                "Alert",
                "高密度／特殊活動提醒",
                "參加者會替你避讓"
              ],
              [
                "CFA",
                "遇接近航空器暫停危險活動",
                "未畫圖即代表無活動"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "prohibited",
      "english": "Prohibited Areas",
      "title": "禁止區",
      "parent": "special-use",
      "locator": "PHAK C 版 · 15-3",
      "printedPage": "15-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=3",
      "paragraphs": [
        "Prohibited area 基於國家安全或其他特定理由禁止航空器在指定範圍飛行，通常以 P 加編號識別。它不是普通的忙碌空域，也不能透過一般交通諮詢就取得通行權，特殊授權須依其規定處理。",
        "看到航路接近禁止區時，應把邊界、上下限與定位誤差一起納入規劃。不要貼著線飛以省少量距離，也不要把「管制員沒提醒」視為可以進入的證據；避免侵入仍是機師的重要責任。"
      ],
      "references": [
        {
          "title": "FAA AIM 3-4：特殊用途空域",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_4.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "P區不是普通機場進入許可",
          "paragraphs": [
            "Figure 15-2 以P-40示範禁止區的圖示。此類區域為國家安全等原因設立，一般不得擅入，不能把附近ATC交通諮詢當成禁止區授權。",
            "歷史圖的P-40邊界不是今日飛行資料；也要看可能擴大的臨時限制。先規劃足夠繞行裕度，再核對最新通告。"
          ],
          "figure": {
            "label": "Figure 15-2 · Prohibited area P-40",
            "page": "15-3",
            "url": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=3"
          }
        }
      ]
    },
    {
      "id": "restricted",
      "english": "Restricted Areas",
      "title": "限制區",
      "parent": "special-use",
      "locator": "PHAK C 版 · 15-3",
      "printedPage": "15-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=3",
      "paragraphs": [
        "Restricted area 可能存在砲擊、飛彈或其他看不見的危害，在適用條件下限制非參與航空器。R 編號之外還要查啟用時段、高度與使用／管制單位；未啟用時的通行處理也須按公布安排。",
        "不要只根據機載畫面顏色判定當下是否開放。若需要穿越，應透過適當單位確認與取得所需授權；普通 flight following 或一個詢答機代碼，不會自動替你消除區域限制。"
      ],
      "references": [
        {
          "title": "FAA AIM 3-4：特殊用途空域",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_4.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "R區可能有看不見的危險",
          "paragraphs": [
            "Figure 15-3 的R編號表示限制區，可能有射擊、飛彈等活動。先查高度、時間與機關，未取得適當授權不能因沒有目視交通就穿越。",
            "對共同使用且已釋放FAA的區域，ATC可依相關IFR許可程序讓航空器通過；若活動且未釋放則避開。這是有條件的IFR協調，不是所有VFR都可照著航線自行進入。"
          ],
          "figure": {
            "label": "Figure 15-3 · Restricted areas on a sectional chart",
            "page": "15-4",
            "url": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=4"
          },
          "check": {
            "question": "R區公告時間已過，但尚未查明即時狀態，可以因看不到飛機就穿過嗎？",
            "answer": "不能以目視空白作授權。核對有效時段、即時活動與適當機關要求。"
          }
        }
      ]
    },
    {
      "id": "warning",
      "english": "Warning Areas",
      "title": "警告區",
      "parent": "special-use",
      "locator": "PHAK C 版 · 15-4",
      "printedPage": "15-4",
      "source": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=4",
      "paragraphs": [
        "Warning area 在美國海岸外一定範圍開始的空域標示可能危及非參與航空器的活動，與限制區的法律及地理背景不同。它提供危害警告，不能一律當成禁止區，也不能因位於海上就忽略活動風險。",
        "飛越前應查啟用資訊、活動類型及可協調單位，必要時選擇繞行。海上缺少迫降與通訊選項，會放大遭遇危害後的後果；是否有法律禁止與是否適合進入，必須分開評估。"
      ],
      "references": [
        {
          "title": "FAA AIM 3-4：特殊用途空域",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_4.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "W區警告危害，不是陸上R區的同義詞",
          "paragraphs": [
            "Figure 15-4 圖示W警告區，通常由美國海岸外3 NM起，可能跨國內與國際水域。其目的是提醒危害，司法及運作背景與R區不同。",
            "原圖caption誤寫Requirements for airspace operations；此處按正文作warning area讀圖。非禁止性質不代表適合穿越，仍查活動並避開危險。"
          ],
          "figure": {
            "label": "Figure 15-4 · Warning area chart example",
            "page": "15-4",
            "url": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=4"
          }
        }
      ]
    },
    {
      "id": "moa",
      "english": "Military Operation Areas (MOAs)",
      "title": "軍事操作區",
      "parent": "special-use",
      "locator": "PHAK C 版 · 15-4",
      "printedPage": "15-4",
      "source": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=4",
      "paragraphs": [
        "MOA 用來將特定軍事訓練活動與 IFR 交通協調分隔，可能包含高速、急轉及不同高度的軍機。VFR 並非僅因 MOA 啟用就一概禁止，但應高度警覺並向負責單位查詢活動情況。",
        "沒有聽到軍機通話或沒有看到電子交通，不代表區域安靜。若能繞行通常更容易降低遭遇風險；若選擇通過，需持續目視搜尋並理解軍機機動速度，不能把通報「目前有活動」當成隔離保證。"
      ],
      "references": [
        {
          "title": "FAA AIM 3-4：特殊用途空域",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_4.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "MOA 對IFR隔離與VFR風險不同",
          "paragraphs": [
            "Figure 15-5 的Camden Ridge MOA以名稱識別，邊界、高度與時段要和資料欄一起看。ATC能提供IFR隔離時可讓非參加IFR通過，否則會改道或限制。",
            "VFR一般不因MOA本身而必須取得進入許可，但活動軍機可能高速、大幅機動；應查狀態、聯絡管制機關並評估繞行。可合法進入不等於有安全間隔保證。"
          ],
          "figure": {
            "label": "Figure 15-5 · Camden Ridge military operations area",
            "page": "15-5",
            "url": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=5"
          },
          "check": {
            "question": "VFR穿越活動MOA時，是否自動享有軍機與本機的雷達隔離？",
            "answer": "不是。應了解活動與服務條件，持續避讓；必要時繞行或等待。"
          }
        }
      ]
    },
    {
      "id": "alert",
      "english": "Alert Areas",
      "title": "警戒區",
      "parent": "special-use",
      "locator": "PHAK C 版 · 15-4",
      "printedPage": "15-4",
      "source": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=4",
      "paragraphs": [
        "Alert area 用來提醒可能有大量訓練或其他特殊航空活動，通常以 A 加編號識別。它不是 Class A，也不是由名稱就可推論需要特別進入許可的區域；參與與非參與航空器仍需遵守適用規則。",
        "規劃經過密集訓練區時，可以考慮改變航路或避開常用高度，並增強掃視。警戒區邊界只是資訊提示，航空器也可能在區外進出，因此不要一離開界線就立即停止注意周圍交通。"
      ],
      "references": [
        {
          "title": "FAA AIM 3-4：特殊用途空域",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_4.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "Alert area 的A不是Class A",
          "paragraphs": [
            "Figure 15-6 的A-211提醒高量訓練或特殊飛行活動，是區域編號；與18,000 ft以上常見Class A是不同制度。",
            "參與及穿越的飛行員都須遵守規則並負責避撞。訓練航空器可能改變高度和方向，穿越時要增加掃描並減少低頭。"
          ],
          "figure": {
            "label": "Figure 15-6 · Alert area A-211",
            "page": "15-5",
            "url": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=5"
          }
        }
      ]
    },
    {
      "id": "cfa",
      "english": "Controlled Firing Areas (CFAs)",
      "title": "受控射擊區",
      "parent": "special-use",
      "locator": "PHAK C 版 · 15-4",
      "printedPage": "15-4",
      "source": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=4",
      "paragraphs": [
        "CFA 的活動須在非參與航空器接近時中止，以避免危害一般航空交通。因活動方負責在必要時停止，這類區域通常不需像其他特殊用途空域一樣刊在航空圖上，也不要求一般機師據此改變航路。",
        "它與限制區的差別在危害如何被管理，而非名稱看起來是否嚴重。沒有在航圖上看到 CFA 不代表地面完全沒有特殊活動；機師仍應保持正常監視，並遵守其他已公布的限制。"
      ],
      "references": [
        {
          "title": "FAA AIM 3-4：特殊用途空域",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_4.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "CFA 以暫停危險活動保護通過者",
          "paragraphs": [
            "Controlled firing area的觀察員、雷達或空中監看若發現航空器接近，必須暫停可能危及它的活動。因不要求非參加者改變航路，CFA一般不畫在航圖上。",
            "這與R區的進入限制不同；不要從地圖沒有標記推論下方不可能有活動，也不能將CFA機制套到所有射擊區。"
          ]
        }
      ]
    },
    {
      "id": "other",
      "english": "Other Airspace Areas",
      "title": "其他空域區域與服務",
      "parent": null,
      "locator": "PHAK C 版 · 15-4",
      "printedPage": "15-4",
      "source": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=4",
      "paragraphs": [
        "除了基本分類與特殊用途空域，還有 TFR、軍事訓練航路、TRSA、NSA 及特定 VFR 路徑等。它們可能是限制、服務範圍或協調路徑，常疊加在原本的 A 至 G 分類之上。",
        "同一位置可同時是 E 類、位於軍事訓練航路附近並受到臨時限制。判斷時不能選其中最寬鬆的一項，而要確認所有適用條件；航圖與短期通告必須一起讀。"
      ],
      "references": [
        {
          "title": "FAA AIM 3-5：其他空域、LAA、MTR及TFR",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_5.html",
          "checked": "2026-09-20"
        },
        {
          "title": "NOAA：指定海洋保護區飛越限制",
          "url": "https://sanctuaries.noaa.gov/flight/noaa-regulated-overflight-zones.html",
          "checked": "2026-09-20"
        },
        {
          "title": "FAA：美國空域安全與DC特殊程序",
          "url": "https://www.faa.gov/air_traffic/publications/us_restrictions/procedures/index.cfm",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "其他空域條件可能疊加在A至G之上",
          "paragraphs": [
            "ADIZ涉及識別與適用飛行計畫／報告要求，DVFR不是一般VFR計畫的別名。遭攔截時應依公布攔截程序及通訊指示處理，必要時使用121.5建立聯絡。",
            "DC的60 NM VFR特別認知訓練範圍、SFRA與內部FRZ不是同一條邊界。完成訓練不等於已獲SFRA／FRZ進入授權，還須核對Part 93、NOTAM及相應程序。"
          ]
        },
        {
          "title": "保育飛越要求不能都簡化成2,000 ft",
          "paragraphs": [
            "原文野生保育區／荒野上空的2,000 ft常屬請求性避擾指引，特定園區另有強制程序。NOAA海洋保護區則須按實際區域規定，部分西岸指定區使用1,000 ft門檻，不是一律2,000 ft AGL。",
            "繫留氣球除了球體還有難看見的纜線。原書60,000 ft數字不能當所有纜線的固定上限或避讓高度，應看個別圖示、NOTAM及管制區域；自由氣球與繫留氣球也不同。"
          ]
        }
      ]
    },
    {
      "id": "laa",
      "english": "Local Airport Advisory (LAA)",
      "title": "地方機場諮詢服務",
      "parent": "other",
      "locator": "PHAK C 版 · 15-6",
      "printedPage": "15-6",
      "source": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=6",
      "paragraphs": [
        "LAA 是機場諮詢服務，提供風、跑道與已知交通等資訊，不是塔臺管制。現行 FAA AIM 將此服務描述為阿拉斯加特定設有 FSS 且沒有運作中塔臺的機場服務，範圍為機場周邊 10 法定英里。",
        "接到建議使用某跑道，不代表收到管制著陸許可，也不保證所有交通都已知。應查機場是否實際提供服務及使用頻率，再把諮詢與目視確認結合，避免把 LAA 和塔臺角色混淆。"
      ],
      "references": [
        {
          "title": "FAA AIM 3-5：其他空域、LAA、MTR及TFR",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_5.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "LAA是諮詢服務，不發起降許可",
          "paragraphs": [
            "現行AIM所述LAA僅在阿拉斯加特定機場提供，由機場內FSS在塔臺未運作時提供當地資訊，範圍為機場周圍10 statute miles。",
            "可以取得天氣、風及相關機場資訊，但服務名稱不會把機場變成有塔臺。持續自我廣播、掃描及遵守適用讓路程序。"
          ]
        }
      ]
    },
    {
      "id": "mtr",
      "english": "Military Training Routes (MTRs)",
      "title": "軍事訓練航路",
      "parent": "other",
      "locator": "PHAK C 版 · 15-6",
      "printedPage": "15-6",
      "source": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=6",
      "paragraphs": [
        "MTR 是軍機執行低空高速等訓練的航路，IR 與 VR 表示相關飛行規則條件，而不是一般民航可以自由套用的快捷航線。四位數航路通常全段不高於 1,500 ft AGL，三位數則至少一段高於此高度。",
        "航圖中心線不代表整個活動只有一條無寬度的線，實際路寬與高度要查相關資料。接近時可詢問活動情況並加強目視搜尋，尤其低空軍機接近很快，電子顯示沒有目標也不足以排除風險。"
      ],
      "references": [
        {
          "title": "FAA AIM 3-5：其他空域、LAA、MTR及TFR",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_5.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "MTR 位數描述最高航段，不是寬度",
          "paragraphs": [
            "Figure 15-7 中IR表示IFR訓練航路，VR表示VFR；四位編號表示沒有航段高於1,500 ft AGL，三位表示至少一段高於此高度。剛好1,500 ft仍符合四位規則。",
            "軍機可能以超過250 kt操作，部分航段可高於10,000 ft MSL。圖上的細線不是航路實際寬度，編號也不表示本機取得高速飛行或穿越其他受限區的權限。"
          ],
          "figure": {
            "label": "Figure 15-7 · Military training route chart symbols",
            "page": "15-6",
            "url": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=6"
          },
          "table": {
            "caption": "MTR 位數描述最高航段，不是寬度",
            "headers": [
              "例子",
              "可推知",
              "不能推知"
            ],
            "rows": [
              [
                "VR1207",
                "所有航段不高於1,500 ft AGL",
                "飛機一定正在活動／固定航路寬度"
              ],
              [
                "IR206",
                "至少一段高於1,500 ft AGL，按IFR運作",
                "所有航段都在高空"
              ],
              [
                "IR／VR線",
                "軍事訓練航路位置線索",
                "精確可貼線避讓的邊界"
              ]
            ]
          },
          "check": {
            "question": "航路最高一段剛好1,500 ft AGL，應用三位還是四位規則？",
            "answer": "四位；三位的條件是至少一段高於1,500 ft AGL。"
          }
        }
      ]
    },
    {
      "id": "tfr",
      "english": "Temporary Flight Restrictions (TFR)",
      "title": "臨時飛行限制",
      "parent": "other",
      "locator": "PHAK C 版 · 15-6",
      "printedPage": "15-6",
      "source": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=6",
      "paragraphs": [
        "TFR 以通告建立特定時間與範圍的限制，可能用於災害救援、重要人物、太空活動或其他安全需求。每一項的適用例外、聯絡及授權條件不同，不能把某次 TFR 的經驗套到所有情況。",
        "查詢時要同時確認開始結束時間、時區、中心位置、半徑、高度及多層區域。圖形便於理解，但正式文字中的條件仍必須讀；飛前查過之後若行程延誤或改航，也應重新檢查。"
      ],
      "references": [
        {
          "title": "FAA AIM 3-5：其他空域、LAA、MTR及TFR",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_5.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "TFR 要讀完整文字及例外條件",
          "paragraphs": [
            "TFR可因救災、重要人物、太空活動或其他法定目的發布。先讀法律依據、中心／多邊形、半徑、上下限、起訖UTC、每日時段與進入條件，不只看地圖紅圈。",
            "原文將距離一律寫成statute miles並不可靠；實際公告常用NM，必須照該公告的單位。網站圖層與座艙資料可能延遲，起飛前及途中需要適時更新。"
          ],
          "check": {
            "question": "TFR寫半徑3 NM，能否按3 SM規劃邊界？",
            "answer": "不能。3 NM約3.45 SM，混用會低估範圍；應直接以公告單位規劃並留裕度。"
          }
        }
      ]
    },
    {
      "id": "vfr-routes",
      "english": "Published VFR Routes",
      "title": "公布的 VFR 路徑",
      "parent": "other",
      "locator": "PHAK C 版 · 15-6",
      "printedPage": "15-6",
      "source": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=6",
      "paragraphs": [
        "VFR flyway、corridor 與 transition route 名稱相近，實際功能卻不同。Flyway 常提供避開繁忙空域的建議，corridor 可能是穿過 B 類布局而排除在 B 類之外的通道，transition route 則可能需要相關許可。",
        "不能因航圖上有一條線就認為沿線免許可。應逐一閱讀高度、方向、通訊與空域邊界，確認整段路徑的條件；某段在 B 類外，下一段仍可能需要先獲准才能繼續。"
      ],
      "references": [
        {
          "title": "FAA AIM 3-5：其他空域、LAA、MTR及TFR",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_5.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "Flyway、corridor、transition不是同一種通行證",
          "paragraphs": [
            "VFR flyway提供建議繞避路徑；VFR corridor可能是穿過B類配置但不屬B的走廊；Class B VFR transition route則仍可能在B內，需要明確B許可。",
            "先查該路徑的空域、方向、高度、通訊及個別程序。地圖上有線不代表沿線自動取得進入許可，也不能把一座機場的做法套到另一處。"
          ],
          "table": {
            "caption": "Flyway、corridor、transition不是同一種通行證",
            "headers": [
              "路徑種類",
              "判讀重點"
            ],
            "rows": [
              [
                "Flyway",
                "規劃建議，確認沿線實際空域"
              ],
              [
                "VFR corridor",
                "核對是否及如何排除於B類之外"
              ],
              [
                "Class B transition",
                "依公布路徑及明確B許可操作"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "trsa",
      "english": "Terminal Radar Service Areas (TRSAs)",
      "title": "終端雷達服務區",
      "parent": "other",
      "locator": "PHAK C 版 · 15-7",
      "printedPage": "15-7",
      "source": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=7",
      "paragraphs": [
        "TRSA 提供終端雷達服務，對 VFR 的參與通常屬自願性，但區域中機場周圍原有的 D 類等要求仍然有效。TRSA 並不是用一個新字母取代全部底層空域，應把服務區與法定分類分開理解。",
        "選擇不參與 TRSA 的服務，不代表可以不聯絡塔臺就進入其中的 Class D。反過來，接受雷達服務也不等於任何受限制區均已放行；每項通訊與許可要求仍須逐一確認。"
      ],
      "references": [
        {
          "title": "FAA AIM 3-5：其他空域、LAA、MTR及TFR",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_5.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "TRSA 自願參加不等於D類通訊也自願",
          "paragraphs": [
            "TRSA常以黑色實線及各區高度標示，包含主要機場的D類及周圍E類等。VFR可選擇參加其額外雷達服務，且通常鼓勵聯絡。",
            "但飛入其中D類仍須滿足D類通訊條件；TRSA服務範圍不是另一個A至G類別。依所處空域和是否參加服務分開判斷。"
          ],
          "check": {
            "question": "不參加TRSA服務，能否不聯絡就進入內部Class D？",
            "answer": "不能。TRSA參加自願不取消Class D的雙向通訊要求。"
          }
        }
      ]
    },
    {
      "id": "nsa",
      "english": "National Security Areas (NSAs)",
      "title": "國家安全區",
      "parent": "other",
      "locator": "PHAK C 版 · 15-7",
      "printedPage": "15-7",
      "source": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=7",
      "paragraphs": [
        "NSA 標示需要提高安全保護的區域，通常請機師自願避開；必要時也可能透過正式限制使部分飛行受到禁止。它和禁止區不同，不能僅依 NSA 名稱就推論當下的法律效果。",
        "飛前應查相關 NOTAM 與區域說明，確認是否已有強制限制及其範圍。即使只是請求避開，規劃時也可以選擇較遠路線，減少誤入敏感區與後續協調的機會。"
      ],
      "references": [
        {
          "title": "FAA AIM 3-5：其他空域與服務",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_5.html",
          "checked": "2026-09-11"
        },
        {
          "title": "FAA AIM 3-4：特殊用途空域",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_4.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "NSA 的避讓請求可能另變成強制限制",
          "paragraphs": [
            "National Security Area提醒地面設施的安全需求，通常請求飛行員自願避開；必要時可依適用法規以NOTAM發布禁止飛行。",
            "應查現在是否有強制限制，不能因舊圖只寫requested就忽略新公告。現行AIM將NSA列在特殊用途空域章節，原書放在other是編排差異。"
          ]
        }
      ]
    },
    {
      "id": "nas",
      "english": "Air Traffic Control and the National Airspace System",
      "title": "ATC 與國家空域系統",
      "parent": null,
      "locator": "PHAK C 版 · 15-7",
      "printedPage": "15-7",
      "source": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=7",
      "paragraphs": [
        "NAS 包含空域、機場、導航、監視、通訊、程序與人員等共同運作的系統。ATC 是其中的重要部分，但不是全部；航空器能否安全完成飛行，也依賴資料、設備、機師能力及各單位協調。",
        "可把一趟 IFR 飛行分成放行、地面、塔臺、離場、航路與進場，觀察控制單位如何交接。換頻表示服務責任正在轉移，不表示原許可自動取消或新單位已替你核對所有需求。"
      ],
      "lessonBlocks": [
        {
          "title": "服務能力有限，仍有明確優先工作",
          "paragraphs": [
            "ATC主要防止系統內航空器衝突並促進有序流動；額外服務受頻率壅塞、工作量、設備與覆蓋影響。在工作情況允許時應提供相應服務，不是任意可做可不做。",
            "飛行員不能把未收到警告當成前方無危害，也不能假設flight following涵蓋所有空域許可。需要協助時明確提出，不能照做時及時告知。"
          ]
        }
      ]
    },
    {
      "id": "coordination",
      "english": "Coordinating the Use of Airspace",
      "title": "協調空域的使用",
      "parent": "nas",
      "locator": "PHAK C 版 · 15-7",
      "printedPage": "15-7",
      "source": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=7",
      "paragraphs": [
        "空域同時服務民航、軍事、訓練與其他活動，透過規劃、啟用時段與即時協調降低衝突。某區目前可用不代表整天都可用，管制員提供的資訊也需與實際獲准範圍和時段配合。",
        "若航班延誤使通過時間落入限制區啟用期間，原先可行路線可能需要重排。計畫中應留下改航燃油與通訊時間，避免到邊界前才發現必須折返，讓協調變成時間緊迫的決策。"
      ],
      "references": [
        {
          "title": "FAA AIM 3-5：其他空域與服務",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_5.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "控制權移交不由飛行員自行猜測",
          "paragraphs": [
            "ATC在航空器進入另一管制區或跨區改航向、高度、速度前，要完成必要協調。由FSS、ARINC或其他航空器轉達指令，也不免除管制端協調。",
            "對飛行員而言，frequency change、radar handoff與新的空域許可是不同概念。按指示聯絡下一單位，若不確定是否已獲所需許可就釐清。"
          ]
        }
      ]
    },
    {
      "id": "operating",
      "english": "Operating in the Various Types of Airspace",
      "title": "在不同空域中操作",
      "parent": null,
      "locator": "PHAK C 版 · 15-7",
      "printedPage": "15-7",
      "source": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=7",
      "paragraphs": [
        "進入每一段空域前，可用固定順序檢查分類與上下限、天氣、機師資格、通訊許可及設備。這些是同時成立的條件，而非可互相替代；符合能見度不會彌補缺少進入許可。",
        "例如一架 VFR 飛機收到 Class B 進入許可，仍需符合該處天氣與適用設備要求。若設備在途中失效，不能因許可已取得就忽略問題，應依規則與 ATC 協調可行處置。"
      ],
      "references": [
        {
          "title": "FAA AIM 3-2：受管制空域的範圍與要求",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_2.html",
          "checked": "2026-09-11"
        },
        {
          "title": "FAA AIM 3-1：分類與VFR天氣標準",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_1.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "每個航段用四個問題檢查",
          "paragraphs": [
            "先確定水平位置與高度，再問：空域及疊加限制是什麼、天氣是否符合、機師／航空器是否合格、進入前通訊或許可是否完成。任何一項不足都不能由其他項目代替。",
            "自編情境：天氣晴朗、有ADS-B Out、正在flight following，仍不能在未獲明確B許可時進入B。設備合格和天氣合格只回答其中兩項。"
          ]
        }
      ]
    },
    {
      "id": "vfr-minima",
      "english": "Basic VFR Weather Minimums",
      "title": "基本 VFR 天氣最低標準",
      "parent": "operating",
      "locator": "PHAK C 版 · 15-7",
      "printedPage": "15-7",
      "source": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=7",
      "paragraphs": [
        "美國基本 VFR 最低條件依空域、高度、晝夜與航空器種類改變，必須同時檢查飛行能見度及雲距。天氣產品的 VFR／MVFR 色碼並不是法規表格，地面測站的分類也不直接回答航空器與雲的距離。",
        "例如 C、D 或低於 10,000 ft MSL 的 E 類，一般基本 VFR 需 3 SM 能見度並保持雲下 500、雲上 1,000、水平 2,000 ft。若雲底是 2,000 ft AGL，飛在 1,800 ft AGL 就可能不符雲下距離，即使能見度很好。"
      ],
      "references": [
        {
          "title": "FAA AIM 3-1：分類與VFR天氣標準",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_1.html",
          "checked": "2026-09-20"
        },
        {
          "title": "14 CFR 91.155：VFR最低標準、例外及E底限規則",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-B/section-91.155",
          "checked": "2026-09-20"
        }
      ],
      "points": [
        "以下為一般固定翼的基本 VFR 學習整理，SM 是法定英里；不涵蓋全部特殊 VFR、直升機或 91.155(b) 例外。學生機師另受 61.89 等較嚴條件約束。",
        "Class A：正常操作依 IFR，不列基本 VFR 雲距數值。",
        "Class B：能見度至少 3 SM，保持雲外。",
        "Class C、D，以及 E 類低於 10,000 ft MSL：3 SM；雲下 500 ft、雲上 1,000 ft、水平 2,000 ft。",
        "Class E 達到或高於 10,000 ft MSL：5 SM；雲下 1,000 ft、雲上 1,000 ft、水平 1 SM。",
        "Class G 在 1,200 ft AGL 或以下：日間一般為 1 SM、雲外；夜間一般為 3 SM、雲下 500／雲上 1,000／水平 2,000 ft。需另查法規例外。",
        "Class G 高於 1,200 ft AGL 且低於 10,000 ft MSL：日間 1 SM、夜間 3 SM；兩者一般均為雲下 500／雲上 1,000／水平 2,000 ft。",
        "Class G 高於 1,200 ft AGL 且達到或高於 10,000 ft MSL：5 SM；雲下與雲上各 1,000 ft、水平 1 SM。",
        "為機場指定至地面的受管制空域，雲幕下的 VFR 還有 ceiling 等要求；一般 ceiling 低於 1,000 ft 不可在其下作普通 VFR。SVFR 是另外的許可與條件，不能自行宣布改用。",
        "地面能見度、飛行能見度、ceiling 與實際雲距是不同量；起降規則還需查看 91.155(c)、(d) 等，不只背一個 3 SM 數字。"
      ],
      "lessonBlocks": [
        {
          "title": "先選正確列，再同時檢查能見度與雲距",
          "paragraphs": [
            "Figure 15-8 是基本VFR表。下表整理一般飛機情境，SM為法定英里；距雲各方向都要滿足，clear of clouds不表示可以飛進薄雲。Class A不列基本VFR數值，不能解讀成無最低標準。",
            "C、D以及低於10,000 ft MSL的E常用3-152記憶：3 SM、雲上1,000、雲下500、水平2,000 ft。表中順序改成雲下／雲上／水平，讀時勿顛倒。"
          ],
          "figure": {
            "label": "Figure 15-8 · Basic VFR weather minimums",
            "page": "15-8",
            "url": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=8"
          },
          "table": {
            "caption": "先選正確列，再同時檢查能見度與雲距",
            "headers": [
              "空域／高度",
              "飛行能見度",
              "雲下／雲上／水平"
            ],
            "rows": [
              [
                "A",
                "不適用普通VFR表",
                "正常依IFR"
              ],
              [
                "B",
                "3 SM",
                "保持雲外"
              ],
              [
                "C／D",
                "3 SM",
                "500 ft／1,000 ft／2,000 ft"
              ],
              [
                "E，低於10,000 ft MSL",
                "3 SM",
                "500 ft／1,000 ft／2,000 ft"
              ],
              [
                "E，達到或高於10,000 ft MSL",
                "5 SM",
                "1,000 ft／1,000 ft／1 SM"
              ],
              [
                "G，≤1,200 ft AGL，日間",
                "1 SM",
                "保持雲外"
              ],
              [
                "G，≤1,200 ft AGL，夜間",
                "3 SM",
                "500 ft／1,000 ft／2,000 ft"
              ],
              [
                "G，>1,200 ft AGL且<10,000 ft MSL，日間",
                "1 SM",
                "500 ft／1,000 ft／2,000 ft"
              ],
              [
                "G，>1,200 ft AGL且<10,000 ft MSL，夜間",
                "3 SM",
                "500 ft／1,000 ft／2,000 ft"
              ],
              [
                "G，>1,200 ft AGL且≥10,000 ft MSL",
                "5 SM",
                "1,000 ft／1,000 ft／1 SM"
              ]
            ]
          }
        },
        {
          "title": "10,000 MSL與1,200 AGL的邊界不同",
          "paragraphs": [
            "E類在剛好10,000 ft MSL即採5 SM及高空雲距。G類若仍在1,200 ft AGL或以下，依低AGL列判讀，不因海拔達10,000 ft便直接套高AGL列；高空那列要同時高於1,200 AGL且達10,000 MSL。",
            "另有§91.155(e)：就此天氣條文而言，恰在Class E底限高度的航空器視為位於其下方空域。這是條文特定用途的邊界規則，不宜擴張成所有許可或設備要求都一樣，也不宜貼邊飛行。"
          ],
          "check": {
            "question": "日間確在G類、10,500 ft MSL但只有1,000 ft AGL，一般飛機套哪一列？",
            "answer": "套G類≤1,200 ft AGL的日間列：1 SM且保持雲外；並須符合其他適用規則。"
          }
        },
        {
          "title": "雲底與航空器高度先換成同一基準",
          "paragraphs": [
            "教學例：機場標高1,000 ft MSL，雲底BKN020為機場上方2,000 ft，因此約3,000 ft MSL。若在低空E類飛2,700 ft MSL，只在雲下300 ft，不足所需500 ft。",
            "若其他條件均可行，2,500 ft MSL才剛好達到雲下500 ft；這不是建議貼最低標準飛行。地形起伏、雲底變動及高度誤差都要留裕度。"
          ],
          "check": {
            "question": "本例能見度10 SM，是否能抵銷不足的雲下距離？",
            "answer": "不能。能見度及各方向雲距是同時要求，不能互相補償。"
          }
        },
        {
          "title": "機場地面區還要看雲幕與地面能見度",
          "paragraphs": [
            "為機場指定至地面的受管制空域，雲幕低於1,000 ft時，一般不得在雲幕下作普通VFR。起飛、落地或進入航線另有地面能見度至少3 SM要求；未報地面能見度時才依相應飛行能見度規則。",
            "METAR的MVFR／VFR色碼不能代替這些檢查。SVFR是另有ATC許可及條件的制度，還涉及機型、日夜與資格等限制，不能由飛行員自行宣布採用。"
          ]
        },
        {
          "title": "低空G的例外不能擴大成一般夜航最低標準",
          "paragraphs": [
            "§91.155(b)對低於1,200 ft AGL、在距預定落地跑道半英里內航線操作的特定航空器，容許符合條件的較低夜間能見度及雲外操作。原表的註腳不能忽略，也不能延伸到一般夜間航路飛行。",
            "直升機在G類≤1,200 ft AGL有另外的日間1/2 SM、夜間1 SM且雲外標準，並另有航線例外。學生飛行員及個人最低標準可能更嚴，不能只靠本章一般飛機表判定全部合法性。"
          ]
        }
      ]
    },
    {
      "id": "pilot-equipment",
      "english": "Operating Rules and Pilot/Equipment Requirements",
      "title": "操作規則、機師與設備",
      "parent": "operating",
      "locator": "PHAK C 版 · 15-8",
      "printedPage": "15-8",
      "source": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=8",
      "paragraphs": [
        "通訊、詢答機及 ADS-B Out 的適用範圍不完全重合，機師證照、簽註與 IFR 資格也有獨立要求。不能用「有收音機」概括設備合格，也不能把 ADS-B In 交通顯示當成已滿足 ADS-B Out 規定。",
        "例如 Class B 周圍的 Mode C veil 可能延伸到 B 類本身之外；設備要求還有高度、區域與例外條件。規劃時要分別回查 14 CFR 91.215、91.225 及適用空域條文，失效或偏離需依正式程序處理。"
      ],
      "references": [
        {
          "title": "FAA AIM 3-2：空域範圍、通訊與機師設備",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_2.html",
          "checked": "2026-09-20"
        },
        {
          "title": "14 CFR 91.215：詢答機與高度回報",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-C/section-91.215",
          "checked": "2026-09-20"
        },
        {
          "title": "14 CFR 91.225：ADS-B Out適用空域與例外",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-C/section-91.225",
          "checked": "2026-09-20"
        },
        {
          "title": "14 CFR 91.131：Class B操作與資格",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-B/section-91.131",
          "checked": "2026-09-20"
        },
        {
          "title": "14 CFR 91.185：完整IFR失聯規則",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-B/section-91.185",
          "checked": "2026-09-20"
        },
        {
          "title": "14 CFR 91.126：G類機場及塔臺通訊",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-B/section-91.126",
          "checked": "2026-09-20"
        }
      ],
      "points": [
        "先查所在地是否要求雙向通訊，再查機師是否具備資格與必要簽註。",
        "詢答機和高度回報依 91.215；ADS-B Out 依 91.225，兩者各有適用區域與例外。",
        "Mode C veil 常見為指定 B 類主要機場周圍 30 NM、地面至 10,000 ft MSL；實際適用機場、邊界及例外依條文確認。",
        "ADS-B In 接收交通與 ADS-B Out 廣播不同；顯示交通不代表已符合 Out 規定。"
      ],
      "lessonBlocks": [
        {
          "title": "原圖設備表需加上現行規定",
          "paragraphs": [
            "Figure 15-9 把基本進入條件排在一起，但原書ADS-B註腳屬2020生效前的寫法，如今要按現行§91.225判斷。D、E、G列的no specific requirement只表示該分類本身的概括，其他重疊設備區仍可能適用。",
            "A類正常須能合法執行IFR；B類涉及證照或適用簽註例外，部分指定主要機場仍要求至少私人飛行員。C／D沒有單獨特殊最低證照門檻，不等於無證照也可操作。"
          ],
          "figure": {
            "label": "Figure 15-9 · Pilot and equipment requirements",
            "page": "15-9",
            "url": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=9"
          },
          "table": {
            "caption": "原圖設備表需加上現行規定",
            "headers": [
              "層次",
              "確認項目"
            ],
            "rows": [
              [
                "機師",
                "證照權限、機型資格、簽註及IFR適用資格"
              ],
              [
                "通訊",
                "B明確許可；C／D適當雙向通訊"
              ],
              [
                "監視設備",
                "分查transponder、高度回報及ADS-B Out"
              ],
              [
                "其他作業",
                "導航設備、適航、氣象及疊加限制"
              ]
            ]
          }
        },
        {
          "title": "Mode C veil與B類本體不同",
          "paragraphs": [
            "指定主要機場周圍30 NM、地面至10,000 ft MSL的設備區可能涵蓋B層架下方的G／E。飛在B外不必然免除transponder或ADS-B Out要求。",
            "未裝引擎驅動電氣系統航空器有條文特定例外，不能等同於「電池沒電」或「設備壞了」。設備失效、未裝設備及合法例外的處置不同，需分別查§91.215／§91.225和所需事前授權。"
          ],
          "check": {
            "question": "在B層架下方、距指定主要機場20 NM，能否只因不在B就認為不需ADS-B Out？",
            "answer": "不能。仍可能在30 NM設備區，另查適用設備條文及例外。"
          }
        },
        {
          "title": "ADS-B Out範圍不只Class B與C",
          "paragraphs": [
            "一般要求包括A、B、C、指定30 NM範圍、B／C頂部上方至10,000 ft MSL的指定區，以及美國本土48州與DC部分高空E類；後者為達10,000 ft MSL，但排除地面上方2,500 ft或以下。",
            "另有美國灣岸指定海域E類、3,000 ft MSL起至離岸12 NM等規定。這個海域要求不與transponder條文完全相同；ADS-B In也不能代替Out。A類採1090ES，其他適用空域的設備選擇依規定。"
          ]
        },
        {
          "title": "E或G也可能有運作中的塔臺",
          "paragraphs": [
            "在E／G機場若有運作塔臺，適用通訊規定仍須遵守，包括相關4 NM、機場上方2,500 ft（含）範圍。不能把E／G普通VFR無一般進入許可要求解讀成塔臺可以不聯絡。",
            "由C／D內無塔臺衛星機場離場時，有as soon as practicable建立通訊的規定；這不是到達航空器可先闖入再呼叫的通則。相關機場程序與空域條文須一起讀。"
          ]
        },
        {
          "title": "IFR失聯不能只背航路順序",
          "paragraphs": [
            "原文多次列assigned、vectored、expected、filed的航路安排，但那不是完整§91.185。若在VFR條件下失聯或後來遇到VFR條件，應繼續VFR並儘速在可行情況下落地。",
            "若須依IFR失聯規則繼續，除航路外，該航段高度要比較最後指定、最低IFR高度與預期高度取最高，並處理clearance limit及進場時間。VFR塔臺燈號落地則需符合相應天氣、目視塔臺及落地許可條件，7600本身不給落地許可。"
          ],
          "check": {
            "question": "IFR失聯後只照filed航路飛，完全不檢查已指定航路、高度及天氣，可以嗎？",
            "answer": "不可以。先判斷VFR條件處置，再按適用航路優先順序、高度及許可終點時間規則操作。"
          }
        }
      ]
    },
    {
      "id": "ultralight",
      "english": "Ultralight Vehicles",
      "title": "超輕型載具",
      "parent": "operating",
      "locator": "PHAK C 版 · 15-11",
      "printedPage": "15-11",
      "source": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=11",
      "paragraphs": [
        "美國符合 Part 103 定義的 ultralight vehicle 有特定用途、重量與性能等條件，不等於所有體積小或單座飛機。它有自己的操作限制，不能因無須一般航空器的同一套證照流程就認為沒有空域規範。",
        "涉及 A、B、C、D 或為機場指定的地面 E 類空域時，應查 Part 103 的事先授權要求；人口密集區、晝夜與能見度亦有規定。先確認載具是否真的符合定義，再判斷適用規則，不能自行貼標籤。"
      ],
      "references": [
        {
          "title": "14 CFR Part 103：超輕型載具",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-103",
          "checked": "2026-09-11"
        },
        {
          "title": "FAA AIM 3-2：空域範圍、通訊與機師設備",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_2.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "Part 103 的事前授權是獨立要求",
          "paragraphs": [
            "超輕型載具進入A、B、C、D，或為機場指定至地面的E類橫向範圍，須取得適用ATC事前授權。不能套一般有人飛機VFR在E類不需進入許可的簡化口訣。",
            "先確認載具確實符合Part 103定義及其他運作限制；不是重量輕或沒有機號就自動屬於Part 103。"
          ]
        }
      ]
    },
    {
      "id": "balloons",
      "english": "Unmanned Free Balloons",
      "title": "無人自由氣球",
      "parent": "operating",
      "locator": "PHAK C 版 · 15-11",
      "printedPage": "15-11",
      "source": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=11",
      "paragraphs": [
        "無人自由氣球可能隨風跨越多層空域，對航空器形成難以主動避讓的障礙。適用的 Part 101 要求依氣球與載荷特性判定，可能涉及操作限制、裝備、通知與追蹤，不能把所有氣球一概而論。",
        "從有人航空器角度，收到相關通告時要留意預計路徑、高度及時間的不確定性。氣球沒有機師可立即聽從交通指示，且不一定出現在交通顯示器上，因此仍需目視警戒與適當通報。"
      ],
      "references": [
        {
          "title": "14 CFR Part 101：無人自由氣球等活動",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-101",
          "checked": "2026-09-11"
        },
        {
          "title": "FAA AIM 3-2：空域範圍、通訊與機師設備",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_2.html",
          "checked": "2026-09-20"
        },
        {
          "title": "14 CFR 101.33：無人自由氣球操作限制",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-101/subpart-D/section-101.33",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "自由氣球與繫留氣球不同",
          "paragraphs": [
            "原書Part 101情境中，未經ATC授權，不得在為機場指定的B、C、D或E類地面區橫向範圍、低於地面2,000 ft操作適用無人自由氣球。",
            "這不是宣告高於2,000 ft就無其他限制；氣球及載荷適用條件、天氣、通知與追蹤仍需查規定。繫留氣球另有纜線危害，不套同一套自由漂流假設。"
          ]
        }
      ]
    },
    {
      "id": "uas",
      "english": "Unmanned Aircraft Systems",
      "title": "無人航空器系統",
      "parent": "operating",
      "locator": "PHAK C 版 · 15-11",
      "printedPage": "15-11",
      "source": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=11",
      "paragraphs": [
        "UAS 的適用規則依作業性質與航空器條件而定，美國常見路徑包括 Part 107 與符合條件的休閒飛行規定。登記、Remote ID、空域授權與機師資格各有作用，不能把其中一項完成就視為全面合規。",
        "LAANC 等工具可協助取得特定受管制空域授權，但不會自動豁免所有高度、視距或其他操作限制。有人機師亦需注意低空無人機活動；本章先建立辨識框架，實際任務應查 FAA 現行規則與授權條件。"
      ],
      "references": [
        {
          "title": "FAA：無人航空器入門與現行規則入口",
          "url": "https://www.faa.gov/uas/getting_started",
          "checked": "2026-09-11"
        },
        {
          "title": "FAA：現行Part 107操作入口",
          "url": "https://www.faa.gov/uas/commercial_operators",
          "checked": "2026-09-20"
        },
        {
          "title": "FAA：LAANC空域授權與限制",
          "url": "https://www.faa.gov/uas/getting_started/laanc",
          "checked": "2026-09-20"
        }
      ],
      "currentNote": "原書為 2023 年版；UAS 資格、登記、Remote ID、空域授權及作業條件，依 FAA 現行規則與個案授權判斷。",
      "lessonBlocks": [
        {
          "title": "Part 107已施行，不再是2016年待發布計畫",
          "paragraphs": [
            "原文保留「預計2016年夏發布」的歷史敘述，現行小型UAS須依適用路徑操作，例如Part 107或符合條件的休閒飛行規定。Remote ID、登記、遙控機師資格及空域授權是不同事項。",
            "LAANC可協助取得支援範圍內的空域授權，但不是全國任意飛行通行證，也不自動豁免視距、高度或其他操作限制。地圖上的可申請高度不是已核准；G類也仍有TFR等限制。"
          ],
          "check": {
            "question": "LAANC地圖某格顯示100 ft，是否代表已能在該受管制空域起飛？",
            "answer": "不是。格網是授權評估資訊，仍須取得實際適用授權並符合其他規則。"
          }
        }
      ]
    },
    {
      "id": "parachute",
      "english": "Parachute Jumps",
      "title": "跳傘活動",
      "parent": "operating",
      "locator": "PHAK C 版 · 15-11",
      "printedPage": "15-11",
      "source": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=11",
      "paragraphs": [
        "跳傘活動涉及投放航空器、自由落體與開傘後不同速度的下降，受適用 Part 105、空域與 ATC 協調規則管理。航圖跳傘符號提示可能活動的地點，不代表活動只限於一個點或只在你看到飛機時才存在。",
        "接近時應查活動時間與通告，聯絡適當單位並留意空中及地面信號。不要只看投放機已離開就判定區域清空，跳傘者可能仍在下降，且難以被雷達或 ADS-B 交通畫面呈現。"
      ],
      "references": [
        {
          "title": "14 CFR Part 105：跳傘作業",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-105",
          "checked": "2026-09-11"
        },
        {
          "title": "FAA AIM 3-2：空域範圍、通訊與機師設備",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_2.html",
          "checked": "2026-09-20"
        },
        {
          "title": "14 CFR 105.25：跳傘空域授權與通知",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-105/subpart-B/section-105.25",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "跳傘地點標記是活動提示，不是專用空域",
          "paragraphs": [
            "常用跳傘地點在Chart Supplement與航圖標示，跳傘航空器、傘具及下降者可能分散在不同高度。經過時留意通訊與目視資訊，避免從活動區下方穿越。",
            "Part 105在A、B、C、D內或進入其中跳傘須有ATC授權且符合條件；E／G亦有適用通知及操作規定。不能因沒有塔臺或不在B／C就當作沒有跳傘協調要求。"
          ]
        }
      ]
    },
    {
      "id": "summary",
      "english": "Chapter Summary",
      "title": "本章整合與練習",
      "parent": null,
      "locator": "PHAK C 版 · 15-11",
      "printedPage": "15-11",
      "source": "https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page=11",
      "paragraphs": [
        "空域學習的目標是能對真實航路逐段判斷，而非單背每個字母的典型形狀。把底限頂限、許可通訊、天氣、資格設備與特殊活動疊在一起，才能知道一條路線在特定時間是否成立。",
        "自編一條由 G 類起飛、爬入 E 類、接近 C 類並繞開 TFR 的路線，逐段寫出需要的資料與動作。再加入塔臺關閉、雲底下降或詢答機失效，檢查哪些原先假設改變後必須重新規劃。"
      ],
      "lessonBlocks": [
        {
          "title": "整合：合法進入與適合繼續是兩次判斷",
          "paragraphs": [
            "先在圖上建立三維位置，疊加TFR與特殊用途活動，再查天氣、機師、設備及通訊。已符合最低條件，仍須保留地形、天氣變化與交通風險裕度。",
            "練習用一句話說出限制來源，例如「已在C外建立通訊，但被要求remain outside，所以仍等待」；不要只背顏色、數字或某一個許可詞。"
          ],
          "check": {
            "question": "天氣與設備都符合，ATC卻要求remain outside Class C，下一步為何？",
            "answer": "保持在外並與ATC協調；符合其他條件不會取消明確指令。"
          }
        }
      ]
    }
  ],
  "confusions": [
    {
      "title": "無管制與無規則",
      "clarification": "非管制空域仍有適用規則。",
      "example": "不能把 Class G 理解為任何行為都允許。"
    },
    {
      "title": "MSL 與 AGL",
      "clarification": "兩種高度使用不同基準。",
      "example": "地形抬高會改變相同 MSL 的離地高度。"
    },
    {
      "title": "Class B 與 Class C／D",
      "clarification": "B 類需明確許可；C／D 的雙向通訊條件不同。",
      "example": "帶呼號的 standby 可能建立 C／D 通訊，卻不是 B 類許可。"
    },
    {
      "title": "MOA 與限制區",
      "clarification": "MOA 不等同禁止 VFR 進入；限制區需依其啟用與授權條件。",
      "example": "兩者都要查活動，但不能使用同一個可進入結論。"
    },
    {
      "title": "TRSA 與底層空域",
      "clarification": "VFR 參與 TRSA 服務通常自願，但內部 D 類要求仍適用。",
      "example": "不參與雷達服務仍須先建立進入 D 類所需通訊。"
    },
    {
      "title": "基本 VFR 色碼與法規最低值",
      "clarification": "天氣站分類不能取代空域、高度、晝夜與雲距條件。",
      "example": "E 類低於 10,000 ft 時，能見度足夠仍須保持規定雲距。"
    }
  ],
  "scenario": "自編案例：兩架飛機在相近地面位置、不同高度，可能落在不同空域層。先確認位置與高度基準，再讀各層邊界，才能查下一步適用條件。",
  "question": "判斷所在空域時，下列哪組資訊較完整？",
  "options": [
    "只知道附近機場名稱",
    "位置、高度基準、時間與現行資料",
    "只知道 GPS 地速"
  ],
  "answer": 1,
  "explanation": "空域具有水平、垂直與可能的時間條件，需要完整資料才能判讀。",
  "verified": true,
  "reader": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=376",
  "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=376",
  "detailMode": "outline",
  "checked": "2026-09-20",
  "coverageNote": "全章 33 節均已加入深入講解，共 43 個單元、7 張比較表、16 題理解練習與 Figure 15-1～15-9 官方原圖指引。涵蓋三維空域判讀、特殊用途區、VFR天氣邊界及機師／設備條件，補充現行UAS規則、TFR單位與海洋保育限制。"
};
