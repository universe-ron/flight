export const chapter={
  "id": "phak25c-13",
  "number": 13,
  "title": "航空氣象服務與產品",
  "english": "Aviation Weather Services",
  "section": "第 13 章；13-1～13-24，全章目錄逐節講解",
  "goal": "辨認觀測與預報，解讀時效、範圍及資料限制。",
  "primer": "METAR 提供測站觀測，TAF 提供機場區域預報，PIREP 提供機師在特定時地的觀察。它們的時間、空間與資料來源不同，應互相補充，而不是挑最樂觀的一個。",
  "terms": [
    "METAR · 機場觀測",
    "TAF · 機場預報",
    "PIREP · 機師天氣報告"
  ],
  "prompts": [
    "同一航線的 METAR、TAF、PIREP 與雷達各回答什麼問題？哪些時間要互相比對？",
    "若資料鏈中斷、預報與實況不同，你的改航或延後條件是什麼？"
  ],
  "keyPoints": [
    "觀測、預報、危害通報與服務平台分別閱讀",
    "逐項解碼 METAR／TAF／PIREP 與高空風溫",
    "辨別舊式 FA、TIBS、HIWAS、TWEB 與現行服務",
    "資料鏈與 NEXRAD 受延遲、涵蓋與感測限制"
  ],
  "detailSections": [
    {
      "id": "intro",
      "english": "Introduction",
      "title": "航空氣象服務導論",
      "parent": null,
      "locator": "PHAK C 版 · 13-1",
      "printedPage": "13-1",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=1",
      "paragraphs": [
        "本章把上一章的天氣原理轉成飛前與航路決策。先區分實際觀測、未來預報及危害通報，再確認產品的觀測時間、有效時間、地理範圍與高度，才能判斷資料是否適用自己的航班。",
        "例如出發機場目前晴朗，只回答當地此刻的情況；兩小時後的目的地、山口雲底與航路結冰仍需其他產品。學習時應把資料放在同一條時間軸上，寫出可起飛、需改航或應延後的理由。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "先問產品回答什麼問題",
          "paragraphs": [
            "NWS、FAA、軍方、其他國家機構與民間共同提供觀測、分析、預報和傳遞服務。觀測不是未來保證，預報也不是每個地點必然出現的精確劇本。",
            "本章採美國產品與編碼情境；使用其他國家的報文時，需重新確認單位與規則。歷史服務名稱保留供讀原書，旁列現行差異。"
          ]
        }
      ]
    },
    {
      "id": "observations",
      "english": "Observations",
      "title": "氣象觀測的來源",
      "parent": null,
      "locator": "PHAK C 版 · 13-2",
      "printedPage": "13-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=2",
      "paragraphs": [
        "觀測是對已發生天氣的測量，不同平台各有視角：地面站量測近地面環境，探空取得垂直剖面，雷達偵測回波，衛星由上往下觀察。把多種資料互相比對，才能減少單一觀測的盲區。",
        "資料標示的時間通常不是你開啟畫面的時間。若山區只有谷地測站，即使該站能見度良好，也不能推論山口無雲；要檢查測站位置、地形代表性、資料年齡及其他高度的佐證。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "四類觀測互相補足",
          "paragraphs": [
            "地面站描述局地近地面，高空探測提供垂直剖面，雷達探測反射體與徑向運動，衛星提供大範圍輻射觀測。每種感測器有時間、空間和物理限制。",
            "沒有收到報告、沒有回波、沒有雲圖特徵，分別可能是未觀測、未覆蓋或感測限制，不能全部解讀成好天氣。"
          ],
          "table": {
            "caption": "四類觀測互相補足",
            "headers": [
              "來源",
              "適合回答",
              "不能單獨保證"
            ],
            "rows": [
              [
                "METAR",
                "測站風、雲、能見度",
                "整條航路天氣"
              ],
              [
                "探空／航空器觀測",
                "不同高度風溫濕與實遇狀態",
                "未測空域完全相同"
              ],
              [
                "雷達",
                "反射率及相關結構",
                "所有亂流與雲都可見"
              ],
              [
                "衛星",
                "雲系範圍與發展",
                "被上層雲遮住的低雲底"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "surface-observations",
      "english": "Surface Aviation Weather Observations",
      "title": "地面航空氣象觀測",
      "parent": "observations",
      "locator": "PHAK C 版 · 13-2",
      "printedPage": "13-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=2",
      "paragraphs": [
        "機場觀測可能由人員、自動系統或兩者共同完成，主要包含風、能見度、天氣、雲況、溫度、露點及氣壓。自動感測器的空間範圍有限，雲高儀尤其只對通過感測區的雲作取樣。",
        "讀到 AUTO 不應把它當作全機場與進場區均已目視確認。跑道另一端可能有局部雨幕或霧；遇到資料缺項、感測器故障註記或實際景象不符時，應尋求補充觀測與機師報告。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "自動、人工與增補觀測",
          "paragraphs": [
            "ASOS、AWOS 及人工觀測共同提供地面資訊。AUTO 表示全自動報告；人工增補能加入某些自動設備無法完整辨識的現象，但每站感測能力不同。",
            "測站數據有代表範圍，山谷另一側或跑道另一端可能不同。應同時讀時間、RMK 和附近站，不能把同一機場代碼當成所有進場路徑的保證。"
          ]
        }
      ]
    },
    {
      "id": "artcc",
      "english": "Air Route Traffic Control Center (ARTCC)",
      "title": "航路管制中心與天氣資訊",
      "parent": "observations",
      "locator": "PHAK C 版 · 13-2",
      "printedPage": "13-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=2",
      "paragraphs": [
        "ARTCC 的主要任務是航路空中交通管制，但也會接收、運用及轉達影響飛航的天氣資訊。中心氣象人員協助管制決策，管制員則可在工作能力與設備限制內提供天氣回波資訊。",
        "管制員說前方有降水，不等同於替航空器完成雷暴穿越評估。機師應主動說明需要的偏航或高度變更，並將管制通報與自身氣象資料整合；ATC 的航向許可不保證前方沒有危險天氣。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "管制員看到的是特定顯示產品",
          "paragraphs": [
            "ARTCC 主要負責航路交通隔離，天氣圖層協助提供降水資訊。舊雷達的斜線、H 或藍色色階是設備演進的例子，並非所有席位現在相同。",
            "顯示選項、涵蓋和工作量影響可用協助；管制員未主動指出天氣，不表示前方沒有危害。飛行員需要時應明確請求資訊或偏航。"
          ]
        }
      ]
    },
    {
      "id": "upper-air",
      "english": "Upper Air Observations",
      "title": "高空觀測",
      "parent": "observations",
      "locator": "PHAK C 版 · 13-2",
      "printedPage": "13-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=2",
      "paragraphs": [
        "無線電探空儀隨氣球上升，量測不同高度的溫度、濕度、氣壓及風，提供大氣垂直結構。這些資料有助於辨識逆溫、穩定度、凍結高度與高空風，並供數值預報分析使用。",
        "探空不是在每個機場上方連續量測，氣球也會隨風漂移。用早先的探空推估下午山區對流時，必須考慮日照增溫與鋒面移動；剖面支持某種風險判斷，卻不是航路每一點的實況。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "探空剖面會隨氣球漂移",
          "paragraphs": [
            "氣球上升時量測壓力、溫度與濕度，配合位置追蹤推得風。資料沿著隨風漂移的路徑收集，不是同一根鉛直柱的瞬間照片。",
            "原文的升速、高度、發射數與回收率屬當時設備及統計；不拿舊數字當現行網路能力。探空、PIREP 與自動航空器觀測各補足不同時空缺口。"
          ]
        },
        {
          "title": "AMDAR／MDCRS：量測與傳輸分開",
          "paragraphs": [
            "商用航空器可自動提供風溫等觀測，部分另有亂流或水氣資料。AMDAR 是航空器觀測計畫，ACARS 是傳遞路徑之一，BUFR 則是資料格式，三者不是同義詞。",
            "原書 1,500 架與每日二十多萬筆、ASDAR 和組織名稱是版本背景；資料可能延後傳送。PIREP 很有價值，但不是今日唯一取得亂流或高空條件的來源。"
          ]
        }
      ]
    },
    {
      "id": "radar-observations",
      "english": "Radar Observations",
      "title": "雷達觀測",
      "parent": "observations",
      "locator": "PHAK C 版 · 13-3",
      "printedPage": "13-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=3",
      "paragraphs": [
        "氣象雷達發射電磁波，再由降水粒子等散射物的回波推估位置與反射率；都卜勒資訊可提供沿雷達視線方向的速度成分。反射率的顏色主要表示回波強弱，並不是直接量測所有亂流。",
        "無回波區仍可能有晴空亂流、雲中結冰或低層風切。距離愈遠波束通常愈高，山脈也會遮蔽；強降水後方的衰減可能使危險區看起來較弱，所以不能只沿著顏色空隙穿越雷暴。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "雷達圖的顏色先配產品圖例",
          "paragraphs": [
            "Figure 13-1 顯示降水帶的形狀與反射率，能提示對流組織。dBZ 是對數反射率量，不是每小時雨量，也不是亂流強度的直接讀值。",
            "WSR-88D 的晴空與降水掃描策略在靈敏度、角度及更新間隔間取捨；原文約 10 分鐘與 4～6 分鐘是典型模式描述，不能保證座艙資料每次都同樣新。"
          ],
          "figure": {
            "label": "Figure 13-1 · Weather radar scope",
            "page": "13-3",
            "url": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=3"
          }
        },
        {
          "title": "相同顏色不必表示相同回波",
          "paragraphs": [
            "Figure 13-2 左右兩個色尺使用不同 dBZ 範圍。先看數值與產品種類，再讀色彩，不能把晴空模式的某個顏色直接當成降水模式同級強度。",
            "TDWR 著重終端風切及外流等資訊；機場監視雷達以交通監視為主；機載天氣雷達有波束傾角、衰減與遮蔽限制，強回波後的暗區不必然乾淨。"
          ],
          "figure": {
            "label": "Figure 13-2 · Radar echo intensity legends",
            "page": "13-3",
            "url": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=3"
          }
        },
        {
          "title": "原圖分級與現行 ATC 用語",
          "paragraphs": [
            "Figure 13-3 的 Light／Moderate 分界列為 30 dBZ。現行 AIM 對能分辨強度的雷達處理器列 Light <26、Moderate 26～40、Heavy >40～50、Extreme >50 dBZ；保留原圖但以來源及設備核對分級。",
            "這些是降水回波強度，不能把 Moderate precipitation 直接翻成中度亂流，也不能拿無回波當成無亂流。"
          ],
          "figure": {
            "label": "Figure 13-3 · Precipitation intensity terminology",
            "page": "13-3",
            "url": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=3"
          },
          "check": {
            "question": "28 dBZ 在現行 AIM 四級用語屬哪一級？",
            "answer": "Moderate。原圖舊分界不同，所以必須核對產品與現行說明，不能只背顏色。"
          }
        }
      ]
    },
    {
      "id": "satellite",
      "english": "Satellite",
      "title": "衛星觀測",
      "parent": "observations",
      "locator": "PHAK C 版 · 13-4",
      "printedPage": "13-4",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=4",
      "paragraphs": [
        "可見光影像依靠反射日光，便於白天觀察雲的形狀與紋理；紅外線影像利用輻射估計亮溫，可於夜間辨識雲頂特徵。水氣影像則呈現特定大氣層的水氣訊號，不等於地面濕度圖。",
        "冷雲頂通常提示較高的雲，但影像本身不能直接給出可用的雲底或穿雲間隙。規劃越山時，可用連續影像看雲系發展，再配合地面雲高、預報與 PIREP 判斷是否保有地形淨空。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "衛星觀測不等於衛星傳送雷達",
          "paragraphs": [
            "氣象衛星可觀測可見光與紅外輻射等，協助辨識雲系。訂閱衛星資料鏈則是將各種產品傳到航空器的通訊服務，其中可能包含地面雷達拼圖。",
            "「由衛星收到」不表示產品由衛星直接量測，更不表示沒有延遲。可見光受日照影響，紅外雲頂資訊也不能直接給出雲底或保證穿雲安全。"
          ]
        }
      ]
    },
    {
      "id": "outlets",
      "english": "Service Outlets",
      "title": "氣象服務管道",
      "parent": null,
      "locator": "PHAK C 版 · 13-4",
      "printedPage": "13-4",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=4",
      "paragraphs": [
        "服務管道是取得產品的方式，產品才是需要解讀的內容。FSS、官方網站、核准的飛行資訊服務及機載資料鏈可能傳遞同一份報告，但介面、更新速度、涵蓋區及可提供的協助不同。",
        "不要因某個應用程式沒有顯示警報，就認定官方沒有發布。完整流程應先確認需要哪些資料，再檢查平台能否提供；飛前也要準備航路上失去網路或接收站涵蓋後的替代取得方式。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "服務平台與產品來源分清楚",
          "paragraphs": [
            "FSS、AWC、各地 NWS 與民間平台提供不同入口。同一產品經不同平台重新著色、裁切或解碼，應保留原始時間、來源、涵蓋及限制。",
            "原書的 DUATS、ADDS 等名稱反映舊服務環境；實際使用現行 Flight Service 與 AviationWeather.gov 入口，不依過時電話簿或書中網址判定服務仍可用。"
          ]
        }
      ]
    },
    {
      "id": "fss",
      "english": "Flight Service Station (FSS)",
      "title": "飛航服務站",
      "parent": "outlets",
      "locator": "PHAK C 版 · 13-4",
      "printedPage": "13-4",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=4",
      "paragraphs": [
        "FSS 可協助機師取得天氣簡報、飛航相關資訊及飛行計畫服務。提出需求時，應提供飛行規則、機型、航路、時間、高度與目的地，使簡報能圍繞實際飛行條件，而非只有某站的天氣。",
        "若飛行容易受結冰或山區遮蔽影響，應直接說明航空器能力與關注事項。簡報後自己仍須判斷風險；「已打電話」只證明取得資訊，不表示任何天氣條件都適合該機師與機型。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "向 Flight Service 提供完整航程背景",
          "paragraphs": [
            "在美國可透過 1-800-WX-BRIEF 及現行 Flight Service 管道取得協助；航中通訊查當地圖資頻率與涵蓋。先說飛行規則、機型呼號、出發與目的地、時間、航路、高度及航程時間。",
            "這些資訊使簡報能對應你的航段，而不是只說某城市明天好不好。簡報紀錄不等於 VFR 飛行計畫已啟用，兩項程序須分開確認。"
          ]
        }
      ]
    },
    {
      "id": "tibs",
      "english": "Telephone Information Briefing Service (TIBS)",
      "title": "電話錄音氣象簡報：歷史服務",
      "parent": "outlets",
      "locator": "PHAK C 版 · 13-4",
      "printedPage": "13-4",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=4",
      "paragraphs": [
        "原書的 TIBS 指以電話聽取預錄氣象與相關資訊的服務，特色是快速取得一般區域情況。預錄內容不會主動追問你的航路、能力或特殊需求，因此即使在提供服務的年代，也不能等同個別化完整簡報。",
        "閱讀此節的重點是分辨「一般錄音」與「針對本次飛行的評估」。這項舊服務不應列為今日飛行計畫的必要依賴；現行取得方式應從 FAA Flight Service 與官方航空氣象入口確認。"
      ],
      "references": [
        {
          "title": "FAA：阿拉斯加 TWEB／TIBS 停用通知",
          "url": "https://www.faasafety.gov/SPANS/noticeView.aspx?nid=9903",
          "checked": "2026-09-11"
        },
        {
          "title": "FAA Safety Briefing · January/February 2020",
          "url": "https://www.faa.gov/sites/faa.gov/files/2022-01/JanFeb2020.pdf",
          "checked": "2026-09-19"
        }
      ],
      "currentNote": "歷史服務：FAA 通知阿拉斯加 TWEB 與 TIBS 自 2020-01-01 停止；不要把原書的錄音／廣播服務當成現今必然可用的管道。",
      "lessonBlocks": [
        {
          "title": "TIBS 錄音簡報屬歷史服務",
          "paragraphs": [
            "TIBS 曾提供電話錄音的區域與航路摘要。CONUS 服務於 2018 年停止，阿拉斯加 TIBS 隨 TWEB 於 2020-01-01 停止；不再教讀者照舊表尋找可用錄音。",
            "原理仍值得記住：一般區域摘要不一定涵蓋特定航程需求，收到資訊後還要核對路線、時間與高度。"
          ]
        }
      ]
    },
    {
      "id": "hiwas",
      "english": "Hazardous Inflight Weather Advisory Service (HIWAS)",
      "title": "危害天氣航中廣播：歷史服務",
      "parent": "outlets",
      "locator": "PHAK C 版 · 13-4",
      "printedPage": "13-4",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=4",
      "paragraphs": [
        "HIWAS 曾透過指定導航台的語音頻道廣播危害天氣摘要，讓機師知道附近有需要進一步查詢的警報。它提供的是提示與摘要，不會逐一分析每架航空器的剩餘燃油、結冰能力或改航選項。",
        "FAA 已停止 HIWAS 服務，因此不能按舊航圖記號預期仍能收聽。今日應在飛前取得完整資料，航中利用可用的 Flight Service、ATC 通報與適用資料鏈更新；任何摘要都仍需回看範圍與有效期。"
      ],
      "references": [
        {
          "title": "FAA N JO 7110.769：停止 HIWAS 服務",
          "url": "https://www.faa.gov/documentLibrary/media/Notice/N_JO_7110.769_Hazardous_Inflight_Weather_Advisory_Service_-_HIWAS.pdf",
          "checked": "2026-09-11"
        }
      ],
      "currentNote": "原書保留舊服務介紹；HIWAS 已停止，現行飛航資訊取得方式另見 FAA AIM 7-1。",
      "lessonBlocks": [
        {
          "title": "VOR 旁的 H 是舊 HIWAS 圖例",
          "paragraphs": [
            "Figure 13-4 示範舊圖上 H 表示 HIWAS 廣播能力。HIWAS 已停用；看到舊圖符號不能推定今天有危害天氣廣播。",
            "現行替代資訊可透過 Flight Service、ATC 或適當資料鏈取得，但各自涵蓋和延遲不同。舊 EFAS／Flight Watch 專用服務名稱也不能取代現行頻率查核。"
          ],
          "figure": {
            "label": "Figure 13-4 · Historical HIWAS symbol",
            "page": "13-4",
            "url": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=4"
          }
        }
      ]
    },
    {
      "id": "tweb",
      "english": "Transcribed Weather Broadcast (TWEB) (Alaska Only)",
      "title": "阿拉斯加錄製氣象廣播：歷史服務",
      "parent": "outlets",
      "locator": "PHAK C 版 · 13-4",
      "printedPage": "13-4",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=4",
      "paragraphs": [
        "TWEB 原以錄製方式提供指定航路附近的氣象與相關資訊，適合用來理解早期如何在偏遠地區傳播天氣。它與單站 METAR 不同，內容可能涵蓋航路性質，但仍有更新時間與區域限制。",
        "阿拉斯加的 TWEB 及 TIBS 已於 2020 年 1 月 1 日停止。規劃偏遠地區飛行時，要確認現有通訊涵蓋、實際可用服務及失聯備案，不能把原書描述的廣播頻率視為今日一定存在的資源。"
      ],
      "references": [
        {
          "title": "FAA：阿拉斯加 TWEB／TIBS 停用通知",
          "url": "https://www.faasafety.gov/SPANS/noticeView.aspx?nid=9903",
          "checked": "2026-09-11"
        }
      ],
      "currentNote": "歷史服務：FAA 通知阿拉斯加 TWEB 與 TIBS 自 2020-01-01 停止；不要把原書的錄音／廣播服務當成現今必然可用的管道。",
      "lessonBlocks": [
        {
          "title": "阿拉斯加 TWEB 已停止",
          "paragraphs": [
            "TWEB 曾在選定導航設施播送氣象摘要，部分有 TEL-TWEB 電話入口。它與阿拉斯加 TIBS 自 2020-01-01 停止，原文 Alaska only 描述的是歷史時期。",
            "偏遠地區尤其要事先確認實際通訊覆蓋與備用取得方式；不能因地圖沒有天氣資料就假設沿途無危害。"
          ]
        }
      ]
    },
    {
      "id": "briefings",
      "english": "Weather Briefings",
      "title": "飛前氣象簡報",
      "parent": null,
      "locator": "PHAK C 版 · 13-5",
      "printedPage": "13-5",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=5",
      "paragraphs": [
        "氣象簡報應把危害、目前條件、預報、航路與目的地需求組織起來，而不是只朗讀代碼。開始前先交代飛行時間與路線，完成後則應能說出主要風險、可接受條件及需要重新評估的觸發點。",
        "例如原定中午起飛卻延至傍晚，對流、側風與夜間地形風險都可能改變。較早的一次完整簡報不會自動涵蓋延誤後的航班，必須以適合的新資料更新判斷。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        },
        {
          "title": "FAA AC 91-92 · Preflight self-briefing",
          "url": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-92.pdf",
          "checked": "2026-09-19"
        },
        {
          "title": "FAA AC91-92 · Preflight briefing",
          "url": "https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1036892",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "簡報是取得並理解資訊的過程",
          "paragraphs": [
            "FAA AC 91-92 說明自助飛前簡報的方法。原文每次都須由 FSS 專員提供的語氣過強；是否履行飛前準備不能只以有沒有撥電話衡量，也不能只開一張雷達圖就稱完成簡報。",
            "先界定航程、機型能力、備降與決策門檻，再看天氣、NOTAM、跑道及燃油等相關資訊；不理解或有矛盾時向 Flight Service 等適當管道求證。"
          ]
        }
      ]
    },
    {
      "id": "standard",
      "english": "Standard Briefing",
      "title": "標準簡報",
      "parent": "briefings",
      "locator": "PHAK C 版 · 13-5",
      "printedPage": "13-5",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=5",
      "paragraphs": [
        "標準簡報適用於尚未取得完整資訊的飛行，通常由影響安全的重要天氣開始，再整理概況、當前與預期情況、風及相關飛航資訊。順序的目的，是先知道是否存在讓計畫不成立的重大條件。",
        "學習時可以把簡報轉成三欄：已知危害、尚待查證、備用方案。若只記錄出發站溫度，卻沒問航路雲底與目的地趨勢，就算接收很多數字，也尚未形成完整的飛行判斷。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "標準簡報按決策順序整理",
          "paragraphs": [
            "先看會使飛行取消或改變的危害及 VFR 不建議資訊，再看綜觀形勢、實況、沿途與目的地預報、高空風溫、NOTAM 和延誤。完整不代表每個無關項目都要堆入座艙。",
            "VFR flight not recommended 是重要諮詢，不是另發一張許可，也不解除 PIC 遵守最低標準及風險決策責任。原文兩小時、只應要求才提供等細節須依現行簡報服務核對，不把未口述的 NOTAM 當不存在。"
          ],
          "table": {
            "caption": "標準簡報按決策順序整理",
            "headers": [
              "問題",
              "主要資訊",
              "決策用途"
            ],
            "rows": [
              [
                "能否按原計畫飛",
                "危害、跑道關閉、飛行條件",
                "取消／改航／延後"
              ],
              [
                "何時何處惡化",
                "實況與預報、有效時間",
                "設定途中評估點"
              ],
              [
                "航程需要多少資源",
                "高空風溫、延誤",
                "燃油與備降裕度"
              ],
              [
                "資料是否完整",
                "NOTAM、設備限制、更新",
                "起飛前補齊缺口"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "abbreviated",
      "english": "Abbreviated Briefing",
      "title": "簡要或補充簡報",
      "parent": "briefings",
      "locator": "PHAK C 版 · 13-5",
      "printedPage": "13-5",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=5",
      "paragraphs": [
        "簡要簡報用來補足先前資料或更新特定項目，因此要先告訴簡報員已取得哪些資料、取得時間及這次需要什麼。省略背景會讓對方誤以為你已掌握其餘重要資訊，形成認知缺口。",
        "例如你已完成早上的標準簡報，起飛前只想確認鋒面移動與目的地側風，可清楚提出這兩項並詢問新增危害。它不是第一次準備飛行時，為了省時而刻意跳過其他必要資料的方式。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "補充簡報先交代舊資料",
          "paragraphs": [
            "延誤或需要更新時，提供上次簡報的時間與來源，以及航路是否改變。專員才能辨識哪些內容已知、哪些需要補充。",
            "Abbreviated 不是只挑有利天氣重聽一次；如果原簡報範圍已不適用，應重建整體天氣圖像。"
          ],
          "check": {
            "question": "出發延誤三小時，原先好天氣能直接沿用嗎？",
            "answer": "不能。應更新會影響航路與 ETA 的觀測、預報、危害與 NOTAM，並告知先前簡報時間。"
          }
        }
      ]
    },
    {
      "id": "outlook",
      "english": "Outlook Briefing",
      "title": "展望簡報",
      "parent": "briefings",
      "locator": "PHAK C 版 · 13-5",
      "printedPage": "13-5",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=5",
      "paragraphs": [
        "展望簡報通常用於預定出發時間還在六小時以上的規劃階段，幫助比較出發窗口、可能航路與天氣系統趨勢。時間較遠代表不確定性較大，因此重點是形成方案，而非承諾某一時刻一定可飛。",
        "前一晚得知隔日下午可能有雷暴，可以考慮提早、改道或取消的條件。接近出發時仍要取得標準或適當更新簡報，將較新的觀測與預報放進原先方案，不能直接沿用前夜結論。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "展望簡報用於較早期規劃",
          "paragraphs": [
            "預計六小時或更久以後出發，可用 outlook 了解趨勢並選擇時間與路線。愈遠的預測愈需注意不確定性，接近出發仍要取得完整更新。",
            "Outlook 不等於只看目的地一個圖示；要把沿途天氣及備降趨勢一起納入。"
          ]
        }
      ]
    },
    {
      "id": "reports",
      "english": "Aviation Weather Reports",
      "title": "航空氣象報告",
      "parent": null,
      "locator": "PHAK C 版 · 13-5",
      "printedPage": "13-5",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=5",
      "paragraphs": [
        "報告描述已觀察到的條件，METAR 由測站提供，PIREP 來自航空器實際遭遇。兩者的測量位置、涵蓋尺度與主觀程度不同，適合互補，不能任意把一種報告當成另一種的替代品。",
        "收到報告時，先問「在哪裡、什麼時候、哪個高度、由誰或何種系統觀察」。一小時前大型噴射機的輕度亂流，對現在低空的小飛機不一定仍是輕度，更不能推論相鄰航段同樣平順。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "觀測時間先於解碼細節",
          "paragraphs": [
            "METAR 是地面觀測，PIREP 是航空器特定時地的實遇報告。先讀站點／位置和時間，再讀數值，最後比較其他來源；不要把剛下載的舊報當成剛觀測。",
            "美國 SM 是法定英里，航路位置常用 NM；METAR 雲底通常 AGL，PIREP 高度通常 MSL 或飛航空層。單位與基準先對齊才有意義。"
          ]
        }
      ]
    },
    {
      "id": "metar",
      "english": "Aviation Routine Weather Report (METAR)",
      "title": "METAR 的逐項判讀",
      "parent": "reports",
      "locator": "PHAK C 版 · 13-6",
      "printedPage": "13-6",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=6",
      "paragraphs": [
        "METAR 依固定次序描述機場觀測；先找站碼及 UTC 時間，再讀風、能見度、天氣、雲、溫度露點與高度表設定。雲高通常以機場上空高度表示，風向採真北；美國產品的能見度與氣壓單位須留意。",
        "自編例「18012G20KT 5SM -RA SCT015 BKN030 18/16 A2992」表示真風向 180 度、12 節陣風 20 節、能見度 5 法定英里及小雨；最低 BKN 在 3,000 ft AGL，才是此例的 ceiling，SCT015 並非 ceiling。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        },
        {
          "title": "AWC · METAR decoding",
          "url": "https://aviationweather.gov/help/data/",
          "checked": "2026-09-19"
        }
      ],
      "points": [
        "時間例：121651Z＝該月 12 日 16:51 UTC；需結合月份與當前日期，不能直接當作本地時間。",
        "風例：18012G20KT＝由真北基準 180° 吹來，持續 12 kt、陣風 20 kt；與塔臺口述磁風向、跑道磁方向比較時須留意基準。",
        "雲量：FEW、SCT、BKN、OVC 分別表示少量、疏散、多雲、密雲；ceiling 一般取最低 BKN／OVC 層，或天空遮蔽時的垂直能見度。",
        "雲高例：BKN030＝3,000 ft AGL；不是 30 ft，也不是 3,000 ft MSL。",
        "溫度露點：18/16 為攝氏 18／16 度，差距小表示接近飽和，但不能僅以差兩度就斷言一定起霧。",
        "氣壓例：A2992＝29.92 inHg；Q1013 使用 hPa。美式 SM、inHg 與其他地區公尺、hPa 不可混用。",
        "RMK 為備註，可能包含感測器限制或重要天氣細節；SPECI 是條件變動觸發的特別觀測，不能只等下一份例行 METAR。"
      ],
      "lessonBlocks": [
        {
          "title": "KGGG 範例：先拆識別、時間與風",
          "paragraphs": [
            "原例：METAR KGGG 161753Z AUTO 14021G26KT 3/4SM +TSRA BR BKN008 OVC012CB 18/17 A2970 RMK PRESFR。",
            "16 日 1753Z 是觀測日與 UTC 時間，不含月份年份。AUTO 表示自動；COR 是更正，不是另一種天氣。14021G26KT 表示由真方位 140° 吹來、21 kt、陣風 26 kt，不能把 140 再乘十。",
            "ICAO 代碼需查資料庫；美國本土常見 K 前綴，但阿拉斯加不是所有站都以 PA 開頭。AO1／AO2 是設備分類，不能當成品質保證。"
          ],
          "table": {
            "caption": "KGGG 範例：先拆識別、時間與風",
            "headers": [
              "群組",
              "解讀",
              "注意"
            ],
            "rows": [
              [
                "161753Z",
                "16 日 17:53 UTC",
                "結合當前月份與日期背景"
              ],
              [
                "14021G26KT",
                "真向 140°，21 kt，陣風 26 kt",
                "不是磁向或航向"
              ],
              [
                "3/4SM",
                "0.75 法定英里",
                "不是 0.75 NM"
              ],
              [
                "18/17",
                "18 °C／露點 17 °C",
                "M 前綴表示負值"
              ],
              [
                "A2970",
                "29.70 inHg 高度表設定",
                "不等於站壓"
              ],
              [
                "PRESFR",
                "氣壓快速下降",
                "RMK 必須讀"
              ]
            ]
          }
        },
        {
          "title": "天氣碼由限定詞與現象組成",
          "paragraphs": [
            "Figure 13-5 的 +TSRA BR 是雷暴伴大雨及薄霧；+ 修飾降水強度，不能直接翻成正式 severe thunderstorm。FZRA 是凍雨，SHRA 是陣雨，RA 與 DZ 不同。",
            "VC 表示附近現象，使用產品指定距離與適用現象；不把書中五至十 miles 當所有報文的通用範圍。R17L/1400FT 是跑道 17L 的 RVR 1,400 ft，不是飛機必然能看到的固定距離，也不等於 prevailing visibility。"
          ],
          "figure": {
            "label": "Figure 13-5 · METAR descriptors and weather phenomena",
            "page": "13-7",
            "url": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=7"
          },
          "check": {
            "question": "+TSRA 是否單獨證明雷暴符合「嚴重雷暴」門檻？",
            "answer": "不是。它編碼雷暴與大雨；其他嚴重條件需由相關觀測、通報及預報判讀。"
          }
        },
        {
          "title": "雲量表需分辨少雲與晴空",
          "paragraphs": [
            "Figure 13-6 的晴空列把 FEW 混入，不能據此把 FEW 當無雲。FEW 為 1～2/8，SCT 為 3～4/8，BKN 為 5～7/8，OVC 為 8/8；雲幕取最低 BKN／OVC 或垂直能見度。",
            "原例 BKN008 OVC012CB 的雲幕是 800 ft AGL，不是 1,200 ft。CLR 受自動感測範圍限制，不保證整個天空無雲；12,000 ft 是傳統系統限制描述，不能概括所有現行設備。"
          ],
          "figure": {
            "label": "Figure 13-6 · Sky cover contractions",
            "page": "13-7",
            "url": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=7"
          },
          "check": {
            "question": "FEW005 BKN020 的雲幕與最低報告雲層各是多少？",
            "answer": "雲幕 2,000 ft AGL；最低報告雲層 500 ft AGL。兩個量不同。"
          }
        }
      ]
    },
    {
      "id": "pirep",
      "english": "Pilot Weather Reports (PIREPs)",
      "title": "機師天氣報告",
      "parent": "reports",
      "locator": "PHAK C 版 · 13-8",
      "printedPage": "13-8",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=8",
      "paragraphs": [
        "PIREP 能補足測站難以掌握的雲頂、亂流、結冰與飛行能見度。判讀時要找到位置、時間、高度與機型，再看遭遇的強度及範圍；機型很重要，因同一氣流對不同重量及速度的航空器感受不同。",
        "回報時應盡量描述開始與結束的位置、高度、時間及變化，而非只說「很糟」。報告沒有提到結冰不代表已確認無冰；若需要負面觀測，應明確回報相關條件下沒有遭遇，而非由空白欄位推論。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        },
        {
          "title": "FAA Flight Services · PIREP coding",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/fs_html/chap8_section_1.html",
          "checked": "2026-09-19"
        }
      ],
      "points": [
        "UA／UUA 區分例行與緊急報告；急迫危害應及時通報，不必為了組成完美格式而延誤。",
        "常見欄位：/OV 位置、/TM UTC 時間、/FL 高度、/TP 機型、/SK 雲況、/WX 天氣、/TA 溫度、/WV 風、/TB 亂流、/IC 結冰、/RM 備註。",
        "自編例：/OV ABC090020 /TM 1500 /FL080 /TP C172 /TB MOD，描述 ABC 東側 20 NM、1500 UTC、約 8,000 ft 高度的 C172 遭遇中度亂流；不是預報整區所有高度都是中度。"
      ],
      "lessonBlocks": [
        {
          "title": "依 Figure 13-7 組織 PIREP",
          "paragraphs": [
            "先提供位置、時間、高度、機型，再描述現象。UA 是例行，UUA 是緊急；不必等專員詢問才報告重要實遇，也不必為了蒐集報告而進入危險區。",
            "原文「項目 1～5 加現象」漏掉機型的重要性。現行要求包括機型；亂流與結冰尤須機型背景。未填 /IC 表示未報，不等於 /IC NEG；圖中文字說負溫加連字號但例子用 M06，也須以現行編碼規則核對。"
          ],
          "figure": {
            "label": "Figure 13-7 · PIREP encoding and decoding",
            "page": "13-8",
            "url": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=8"
          }
        },
        {
          "title": "C182 原例逐項核對",
          "paragraphs": [
            "/OV GGG 090025 表示 GGG 090° 徑向外 25 NM；/TM1450 為 14:50 UTC；/FL060 是 6,000 ft 高度資訊，不能不分低空與飛航空層就當成標準設定下的 FL060。",
            "/SK080 OVC 是 8,000 ft MSL 的雲層描述，與 METAR 的 AGL 不同；/WX FV04SM RA 為空中能見度 4SM、雨；/TA05 為 +5 °C；/TB LGT 為輕度亂流；/RM HVY RAIN 補充大雨。",
            "/WV270030KT 是原圖格式。美國 AIM PIREP 表列磁向風，METAR／TAF／FB 則是真向；不能一概共用。現行 Flight Services 編碼速度用兩或三位，30 kt 可寫 27030KT，不照舊圖把所有速度都補成三位。"
          ],
          "check": {
            "question": "本例沒有 /IC，是否可告訴後機「已確認無結冰」？",
            "answer": "不能。沒有報告與明確報告 NEG 是不同證據；還須考慮高度、時間及機型。"
          }
        }
      ]
    },
    {
      "id": "forecasts",
      "english": "Aviation Forecasts",
      "title": "航空氣象預報",
      "parent": null,
      "locator": "PHAK C 版 · 13-9",
      "printedPage": "13-9",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=9",
      "paragraphs": [
        "預報是對未來條件的估計，必須連同發布時間、有效時段、涵蓋區與更新情況閱讀。航班跨越數個預報時段時，應按預計通過時間取資料，不能只選一張看起來最好的圖。",
        "若目的地 TAF 尚佳，但周圍區域預報顯示低雲廣布，備降方案仍可能受限。良好決策會比較產品的一致性；當實際變化比預報快，就重新評估，而不是因為預報尚未修訂而忽略現況。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "預報用途不能互相取代",
          "paragraphs": [
            "TAF 著重機場附近、GFA 提供區域圖像、危害通報描述重要現象、FB 給指定地點高度風溫。每個產品各回答一部分問題。",
            "有效時間與發布時間分開：剛發布的預報可能針對幾小時後，較早發布的預報也可能仍有效；一旦有 AMD、更正或取消就需更新。"
          ]
        }
      ]
    },
    {
      "id": "taf",
      "english": "Terminal Aerodrome Forecasts (TAF)",
      "title": "TAF 與變化群組",
      "parent": "forecasts",
      "locator": "PHAK C 版 · 13-9",
      "printedPage": "13-9",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=9",
      "paragraphs": [
        "TAF 是指定機場附近的預報，範圍與期間有限，不是整條航路的天氣保證。判讀先定位有效起迄時間，再依 FM、TEMPO 等群組建立時間線；群組代表的持續性不同，不能把所有條件混成同時發生。",
        "自編群組「FM121800 22015KT P6SM BKN040」代表 12 日 1800 UTC 起的一組新主要條件；「TEMPO 1218/1222 3SM TSRA BKN020CB」指出該區間暫時性惡化。是否符合備降或放行規則，還要按適用規章個別判定。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        },
        {
          "title": "NWS SCN24-85 · PROB30 restriction removed",
          "url": "https://www.weather.gov/media/notification/pdf_2023_24/scn24-85_prob30_use.pdf",
          "checked": "2026-09-19"
        }
      ],
      "points": [
        "先讀發布日／時，再讀有效起迄日／時；發布時間與有效時間不同。",
        "FM 為一組主要條件的新開始；TEMPO 指指定期間內的暫時波動，不能解讀成整段時間都維持同一惡劣條件。",
        "風與能見度格式近似 METAR，但 TAF 是未來預期；機場附近的預報不能代表沿途山區。",
        "美國 TAF 通常適用機場中心約 5 SM 內；24 或 30 小時等期間按該站產品確認，不可一概套用。"
      ],
      "lessonBlocks": [
        {
          "title": "TAF 的時段與範圍",
          "paragraphs": [
            "美國 TAF 主要描述跑道群中心 5SM 範圍的預期天氣，不是整條進場或航路預報。例行有效期通常 24 或 30 小時，按 00／06／12／18Z 週期，實際發布時間在報首，另有 AMD。",
            "111130Z 1112/1212 表示 11 日 11:30Z 發布、11 日 12Z 至 12 日 12Z 有效。FM 後依序日、時、分；TEMPO 是短暫偏離當時 prevailing 條件，不是新條件連續存在整段時間。",
            "PROB30 是該現象的 30% 發生機率，不是持續 30% 時間。NWS 自 2024-09-30 更新規則，允許在前九小時使用；原文「前六小時不用」及舊九小時口訣都不能當現行限制。"
          ],
          "table": {
            "caption": "TAF 的時段與範圍",
            "headers": [
              "群組",
              "作用",
              "讀法"
            ],
            "rows": [
              [
                "FM111500",
                "11 日 15:00 起的新 prevailing 條件",
                "後續直到下一次變更"
              ],
              [
                "TEMPO1112/1114",
                "11 日 12～14Z 的短暫變化",
                "每次少於一小時，總計少於該期一半"
              ],
              [
                "PROB30 1200/1204",
                "12 日 00～04Z 的低機率事件",
                "不代表可忽略危害"
              ],
              [
                "P6SM",
                "能見度大於 6SM",
                "不是等於 6SM"
              ]
            ]
          }
        },
        {
          "title": "KPIR 原例有缺漏，修訂版要標明",
          "paragraphs": [
            "原書文字解說有 15012KT P6SM BKN090，但報文開頭缺這組 prevailing 條件；FM1500 缺日碼，1408KT 缺速度補零。不能假裝原始報文完整無誤。",
            "下表是依原文解說重建的教學修訂版，不是實際發布的 TAF。TSRA 表示雷暴伴雨，沒有 SH 就不自行加成編碼中的陣雨。"
          ],
          "table": {
            "caption": "KPIR 原例有缺漏，修訂版要標明",
            "headers": [
              "時段",
              "教學修訂報文",
              "重點"
            ],
            "rows": [
              [
                "報首",
                "TAF KPIR 111130Z 1112/1212 15012KT P6SM BKN090",
                "補回原文解說中的起始條件"
              ],
              [
                "11 日 12～14Z",
                "TEMPO 1112/1114 5SM BR",
                "短暫薄霧"
              ],
              [
                "11 日 15Z 起",
                "FM111500 16015G25KT P6SM SCT040 BKN250",
                "補日碼 11"
              ],
              [
                "12 日 00Z 起",
                "FM120000 14012KT P6SM BKN080 OVC150",
                "新 prevailing 條件"
              ],
              [
                "12 日 00～04Z",
                "PROB30 1200/1204 3SM TSRA BKN030CB",
                "30% 雷暴風險"
              ],
              [
                "12 日 04Z 起",
                "FM120400 14008KT P6SM SCT040 OVC080",
                "1408KT 修為 14008KT"
              ],
              [
                "12 日 04～08Z",
                "TEMPO 1204/1208 3SM TSRA OVC030CB",
                "暫時條件疊加"
              ]
            ]
          },
          "check": {
            "question": "12 日 05Z 是否只看 FM120400 的 P6SM？",
            "answer": "不行。同時落在 TEMPO1204/1208，需考慮短暫 3SM、雷暴及 3,000 ft 雲幕。"
          }
        }
      ]
    },
    {
      "id": "fa",
      "english": "Area Forecasts (FA)",
      "title": "區域預報與 GFA 的轉換",
      "parent": "forecasts",
      "locator": "PHAK C 版 · 13-10",
      "printedPage": "13-10",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=10",
      "paragraphs": [
        "原書 FA 用文字描述較廣區域的雲與天氣，補足只有機場預報時的航路資訊。閱讀這節要保留「區域與航路條件」的概念，但不要把舊式 FA 格式誤認為所有美國地區今日仍固定發布的產品。",
        "美國本土區域預報已以 GFA 等圖形資訊取代；夏威夷 FA 亦已於 2025 年停止。使用 GFA 時，要分別選觀測或預報、有效時間與雲／能見度等圖層；阿拉斯加及其他區域的服務仍須個別查詢。"
      ],
      "references": [
        {
          "title": "NOAA AWC：GFA 與現行氣象產品說明",
          "url": "https://aviationweather.gov/help/",
          "checked": "2026-09-11"
        },
        {
          "title": "NWS：夏威夷 FA 於 2025-01-27 退役",
          "url": "https://www.weather.gov/hfo/faretirement",
          "checked": "2026-09-11"
        }
      ],
      "currentNote": "版本差異：原書產品名稱與圖例保留作概念學習；實際產品入口、覆蓋及發布方式依 AWC 現行說明確認。",
      "lessonBlocks": [
        {
          "title": "FA 地圖保留歷史閱讀用途",
          "paragraphs": [
            "Figure 13-8 是舊 CONUS 六區文字 FA 分區。如今不能把這張圖當成現行服務清單；CONUS 已轉向圖形化產品，夏威夷 FA 也在 2025 年退役，各區產品須查現行入口。",
            "舊 FA 仍可練習 SYNOPSIS、CLDS/WX、OTLK 與高度基準。例中 NWD 是向北，不是正文誤譯的西北；FL450 是壓力航空層，不應精確等同 45,000 ft 真高度 MSL。GFA 亦須選對時間、高度與圖層。"
          ],
          "figure": {
            "label": "Figure 13-8 · Historical area forecast regions",
            "page": "13-11",
            "url": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=11"
          }
        }
      ]
    },
    {
      "id": "advisories",
      "english": "Inflight Weather Advisories",
      "title": "航中危害天氣通報",
      "parent": "forecasts",
      "locator": "PHAK C 版 · 13-11",
      "printedPage": "13-11",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=11",
      "paragraphs": [
        "航中通報用來指出可能影響飛航的危害區域，通常包含現象、位置、垂直範圍、移動與有效時間。它們不是「有通報才危險」的開關，小範圍危害或新生對流可能尚未達發布標準或尚未反映。",
        "規劃穿越通報邊界時，不能假定線外立即安全。應把通報與雷達、衛星、PIREP 及地形整合，再看航空器是否具備相應能力；通報到期也不等於天氣在那一秒消失。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "危害通報不是只有起飛後才看",
          "paragraphs": [
            "AIRMET、SIGMET 與對流 SIGMET 同樣重要於飛前規劃。先讀現象、範圍、上下界、移動及有效時間，再套到預計經過的時間高度。",
            "未發布不代表局地沒有危害，通報到期也不代表天氣立刻消失；應看後續更新與實況。不同國家或 FIR 的產品制度不可直接套美國本土格式。"
          ]
        }
      ]
    },
    {
      "id": "airmet",
      "english": "AIRMET",
      "title": "AIRMET 與 G-AIRMET",
      "parent": "advisories",
      "locator": "PHAK C 版 · 13-11",
      "printedPage": "13-11",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=11",
      "paragraphs": [
        "AIRMET 類資訊處理對航空器有影響的廣域天氣，例如中度亂流、結冰、低雲能見度及山區遮蔽。Sierra、Tango、Zulu 是按危害類型分類的名稱，並不是由低到高的三級危險程度。",
        "美國本土文字 TAC AIRMET 已於 2025 年 1 月 27 日退役，仍需閱讀 G-AIRMET 等現行產品。不能由此推論阿拉斯加或夏威夷所有 AIRMET 均停用；看圖時仍要讀有效時間與高度，避免把地面風危害套到所有飛行高度。"
      ],
      "references": [
        {
          "title": "NWS SCN 24-92：美國本土文字 AIRMET 退役",
          "url": "https://www.weather.gov/media/notification/pdf_2023_24/scn24-92tac_airmet_retirement.pdf",
          "checked": "2026-09-11"
        },
        {
          "title": "NOAA AWC：資料 API 與產品退役說明",
          "url": "https://aviationweather.gov/data/api/",
          "checked": "2026-09-11"
        }
      ],
      "currentNote": "2025-01-27 起停止的是 CONUS 文字 TAC AIRMET；G-AIRMET 繼續提供，該通知未取消阿拉斯加與夏威夷的文字 AIRMET。",
      "points": [
        "Sierra：IFR 條件與山區遮蔽等。",
        "Tango：中度亂流、強地面風與非對流低空風切等。",
        "Zulu：中度結冰及凍結高度資訊等；凍結高度本身不代表必然結冰，仍需水分與其他條件。"
      ],
      "lessonBlocks": [
        {
          "title": "Sierra、Tango、Zulu 與現行 G-AIRMET",
          "paragraphs": [
            "Sierra 對應 IFR／山岳遮蔽，Tango 對應亂流、強地面風與低空風切，Zulu 對應結冰及冰點層。AIRMET 並非只關係小飛機，所有機型仍需依能力評估。",
            "CONUS 文字 TAC AIRMET 自 2025-01-27 停止，G-AIRMET 保留。圖形預報需選定時間快照，不能把一次發布的全部多邊形都當成同時有效。原文六小時文字區域敘述留作歷史例。"
          ]
        },
        {
          "title": "Boston 原例的兩個多邊形分開讀",
          "paragraphs": [
            "BOSS WA211945、VALID UNTIL220200 是 21 日 19:45Z 發布、22 日 02Z 到期；UPDT3 是更新次數。IFR 的 CAR—YSJ—150E ACK—EWR—YOW—CAR 與山岳遮蔽的 CAR—MLT—CON—SLT—SYR—CAR 是不同邊界。",
            "原文解說把兩區混在一起，並把 IFT 誤植當標題；此處按 IFR 與 MTN OBSCN 分開。CIG BLW010／VIS BLW3SM、PCPN／BR 表示低雲、差能見度、降水／薄霧；CONT BYD02Z THRU08Z 說現象可能持續，不是把這份通報效期自動延長。"
          ],
          "check": {
            "question": "通報 02Z 到期但寫天氣持續至 08Z，02Z 之後應怎麼做？",
            "answer": "查新一期通報與實況，不能當成危害已消失，也不能把舊件當成自動延長有效。"
          }
        }
      ]
    },
    {
      "id": "sigmet",
      "english": "SIGMET",
      "title": "SIGMET",
      "parent": "advisories",
      "locator": "PHAK C 版 · 13-12",
      "printedPage": "13-12",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=12",
      "paragraphs": [
        "SIGMET 用於較嚴重且可能影響各類航空器的危害，例如嚴重亂流、嚴重結冰、火山灰及符合條件的沙塵暴。美國本土非對流 SIGMET 與對流通報分工，跨境時則需理解其他地區的發布體系。",
        "「影響各類」不表示每種機型受到的後果完全相同，而是不能因為自己是大型機就忽略。讀完應畫出預計進入與離開危害區的時間高度，並評估避讓路線、燃油與可用機場是否仍成立。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "Romeo 2 的位置、層次與時間",
          "paragraphs": [
            "原例 SIGMET Romeo 2 有效至 10 日 0530Z，SEA—PDT—EUG—SEA 包圍區域預期 FL280～FL350 偶發嚴重晴空亂流，與噴射氣流相關；02Z 後開始並可能持續超過效期。",
            "PDT 是 Pendleton，不是原文解說的 Portland。國內非對流 SIGMET 常見嚴重結冰、嚴重／極端亂流、火山灰及影響能見度的沙塵；四小時與颶風六小時規則有地區前提，國際 SIGMET 也可涵蓋雷暴。"
          ],
          "check": {
            "question": "航線不在地面降雨區，能否忽略這份 CAT 通報？",
            "answer": "不能。晴空亂流不需要地面降雨，應比較通報的水平範圍、FL280～350 與通過時間。"
          }
        }
      ]
    },
    {
      "id": "convective-sigmet",
      "english": "Convective Significant Meteorological Information (WST)",
      "title": "對流 SIGMET／WST",
      "parent": "advisories",
      "locator": "PHAK C 版 · 13-12",
      "printedPage": "13-12",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=12",
      "paragraphs": [
        "對流 SIGMET 聚焦符合標準的雷暴活動，例如組織化雷暴線、範圍性雷暴或嚴重雷暴。雷暴可能同時伴隨劇烈亂流、冰雹、結冰與風切，因此不能把產品理解為單純的大雨提示。",
        "即使沒有發布 WST，孤立的新生雷暴仍可能威脅飛行。雷達顯示兩塊回波之間有空隙，也不表示可以安全穿越；應採取足夠避讓、保留轉向空間，並在選項變少以前改航或延後。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        },
        {
          "title": "AWC · Convective SIGMET criteria",
          "url": "https://aviationweather.gov/help/data/",
          "checked": "2026-09-19"
        }
      ],
      "lessonBlocks": [
        {
          "title": "20C 表示中部第 20 份，不是強度",
          "paragraphs": [
            "MKCC WST221855、20C、VALID UNTIL2055Z：22 日 18:55Z 發布，中部區第 20 份，有效至 20:55Z。MOVG FROM24045KT 是由 240° 以 45 kt 移動，朝約 060°；TOPS ABV FL450 是雲頂高於 FL450。",
            "WIND GUSTS TO60KTS RPRTD 是已報；TORNADOES、HAIL TO2IN、WIND GUSTS TO65KTS POSS ND PTN 是北達科他部分可能出現，不是全部都已觀測。",
            "現行 AWC 特別發布條件含陣風至少 50 kt、冰雹至少 3/4 inch 或龍捲；不能把一般公眾嚴重雷暴的一英寸門檻套過來。對流通報不是只有逐一達到某數字才有危險，其他有危害的對流亦可發布。"
          ],
          "check": {
            "question": "FROM24045KT 是否往西南移動？",
            "answer": "不是。FROM 指來源，移動方向約向東北 060°；45 kt 是系統移速。"
          }
        }
      ]
    },
    {
      "id": "winds-aloft",
      "english": "Winds and Temperature Aloft Forecast (FB)",
      "title": "高空風溫預報",
      "parent": "forecasts",
      "locator": "PHAK C 版 · 13-13",
      "printedPage": "13-13",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=13",
      "paragraphs": [
        "FB 等高空風溫預報依地點與高度提供風向、風速和溫度，用於航時、燃油及高度比較。它是預報而非沿途實測，還要確認高度基準與有效時間；接近地面的欄位可能因測站高度而省略。",
        "自編編碼「2318+05」可讀為 230 度、18 節、攝氏 5 度；「9900」表示微弱且方向不定的風。超過 99 節的傳統編碼另有方向加 50、風速減 100 規則，不能直接把前兩碼乘十後當成超過 360 度的風向。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        },
        {
          "title": "AWC · Wind/temperature products",
          "url": "https://aviationweather.gov/help/data/",
          "checked": "2026-09-19"
        }
      ],
      "points": [
        "原書超過 99 kt 例：731960 → 73−50＝23，即 230°；19＋100＝119 kt；高空溫度為 −60°C。先確認此高度欄採用的格式，再解碼。",
        "高於 24,000 ft 的傳統風溫編碼省略負號；低層欄位不應沿用此假設。",
        "把預報風換成航向修正與地速後，航中仍應比較實際航時與燃油，發現差異及早更新計畫。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 13-9：先核對三個時間",
          "paragraphs": [
            "151640 是傳送日／時，DATA BASED ON151200Z 是資料基準，VALID151800Z 是有效時刻，FOR USE1400-2100Z 是使用時段。這些不能全部簡化為「下午四點四十分觀測的風」。",
            "AMA 海拔 3,605 ft，3,000 ft 欄空白，6,000 ft 的2714表示真向270°／14 kt；DEN海拔5,431 ft，6,000 ft距站太近，9,000 ft 的2321−04表示230°／21 kt、−4 °C。風距站高至少1,500 ft、溫度距站高至少2,500 ft等編碼條件要分清；3,000 ft層不列溫度。"
          ],
          "figure": {
            "label": "Figure 13-9 · Winds and temperatures aloft",
            "page": "13-13",
            "url": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=13"
          },
          "table": {
            "caption": "Figure 13-9：先核對三個時間",
            "headers": [
              "碼／條件",
              "步驟",
              "結果"
            ],
            "rows": [
              [
                "2714",
                "27×10；14",
                "270°／14 kt"
              ],
              [
                "2321−04",
                "23×10；21；−04",
                "230°／21 kt、−4 °C"
              ],
              [
                "731960（高於24,000 ft）",
                "(73−50)×10；19+100；負60",
                "230°／119 kt、−60 °C"
              ],
              [
                "7799",
                "(77−50)×10；99+100",
                "270°／199 kt 或更大"
              ],
              [
                "9900",
                "特殊碼，不當作990°",
                "小於5 kt，輕且不定向"
              ]
            ]
          }
        },
        {
          "title": "高度基準與高風速編碼",
          "paragraphs": [
            "低層高度與高層 flight level 的基準不同；FL不是當天的精確真高度。ABV24000溫度負號省略，24,000 ft 本身仍看報表中的符號。",
            "100 kt 以上的編碼把方向加50、速度減100；199 kt 或更大以編碼上限表示，不能知道實際是200還是更高。原文「200才封頂」與例子7799的199以上解讀需以編碼限制釐清。"
          ],
          "check": {
            "question": "高層風碼754550代表什麼？",
            "answer": "(75−50)×10=250°；45+100=145 kt；溫度−50 °C。"
          }
        }
      ]
    },
    {
      "id": "charts",
      "english": "Weather Charts",
      "title": "氣象圖的閱讀順序",
      "parent": null,
      "locator": "PHAK C 版 · 13-13",
      "printedPage": "13-13",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=13",
      "paragraphs": [
        "氣象圖把空間關係整理成可視資訊，但圖面可能是觀測分析、預報或多來源疊圖。先讀標題、有效時間、圖例、單位及涵蓋高度，再看自己的航路，才能知道圖上的線與顏色實際代表什麼。",
        "兩張圖顯示不同天氣，可能只是有效時間不同，不一定互相矛盾。練習時應把航路通過時間標上圖，再回答哪些危害會移入航路、哪段地形限制備案，以及還缺哪些資料才能下決定。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "圖名、有效時刻、基準與圖例",
          "paragraphs": [
            "分析圖描述某一時刻的估計狀態，預報圖描述未來有效時間。原文把重要天氣預報圖混稱 current information，閱讀時應以 analysis／forecast 及圖上時間判斷。",
            "先看範圍、高度和圖例，再看自己的航路。多張圖的日期時刻不同，不能拼成同一瞬間的天氣。"
          ]
        }
      ]
    },
    {
      "id": "surface-analysis",
      "english": "Surface Analysis Chart",
      "title": "地面分析圖",
      "parent": "charts",
      "locator": "PHAK C 版 · 13-13",
      "printedPage": "13-13",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=13",
      "paragraphs": [
        "地面分析圖以測站、等壓線、鋒面與高低壓系統描繪大尺度天氣。等壓線愈密通常表示水平氣壓梯度較大，但近地面風仍受摩擦與地形影響，不能僅用線距推算某跑道的側風數字。",
        "若航路將跨越低壓槽與鋒面，可預期需要留意風向、雲雨及氣壓變化，再以具體觀測與預報驗證。分析圖描述特定時間的場，不能把鋒面目前的位置直接當成幾小時後的穿越位置。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "地面分析圖呈現大尺度配置",
          "paragraphs": [
            "Figure 13-10 可用於辨識高低壓、鋒面與地面觀測分布。等壓線呈現海平面氣壓，能看壓力梯度，但不是航路各高度風的直接預報。",
            "典型三小時分析週期不表示天氣只每三小時變一次。圖上鋒線位置有分析尺度與時效，需配沿途觀測和預報。"
          ],
          "figure": {
            "label": "Figure 13-10 · Surface analysis chart",
            "page": "13-14",
            "url": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=14"
          }
        },
        {
          "title": "站點模型的三位氣壓碼",
          "paragraphs": [
            "Figure 13-11 的三位海平面氣壓碼省略前導9或10及小數點。常用解法：碼小於500加10，500以上加9，再在末位前加小數點，取合理氣壓範圍。",
            "例如132→1013.2 hPa，987→998.7 hPa。這不是METAR A組高度表設定；圖示溫露為°F，其他產品不一定。風羽指來向，圓圈填色描述雲量。"
          ],
          "figure": {
            "label": "Figure 13-11 · Station model and chart symbols",
            "page": "13-14",
            "url": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=14"
          },
          "check": {
            "question": "氣壓碼045是否代表945 hPa？",
            "answer": "不是。按常用解法為1004.5 hPa，需確認圖例與合理範圍。"
          }
        }
      ]
    },
    {
      "id": "weather-depiction",
      "english": "Weather Depiction Chart",
      "title": "天氣描繪圖與飛行類別",
      "parent": "charts",
      "locator": "PHAK C 版 · 13-15",
      "printedPage": "13-15",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=15",
      "paragraphs": [
        "原書的 Weather Depiction Chart 將測站雲幕與能見度整理成區域飛行條件，教學重點是識別低雲、低能見度及其空間連續性。這些分類方便快速察覺問題，但本身不是空域法規的完整 VFR 最低標準。",
        "今日查詢時可從 AWC 的 GFA 雲與能見度圖層、METAR 分類等現行介面取得相關資訊，不應假定舊書每張圖仍按相同形式發布。某站顯示 VFR 類別，仍可能因山脈、夜間或空域雲距而不適合你的路線。"
      ],
      "references": [
        {
          "title": "NOAA AWC：GFA 與現行氣象產品說明",
          "url": "https://aviationweather.gov/help/",
          "checked": "2026-09-11"
        }
      ],
      "currentNote": "版本差異：原書產品名稱與圖例保留作概念學習；實際產品入口、覆蓋及發布方式依 AWC 現行說明確認。",
      "lessonBlocks": [
        {
          "title": "飛行類別採較差的那一項",
          "paragraphs": [
            "Figure 13-12 是原書天氣描繪圖的觀測型範例，不是未來天氣預報。IFR 的雲幕與能見度條件用「或」，原文寫成 and 會漏掉只有一項差的情況。",
            "現在從現行AWC觀測／GFA等入口查看圖層；顏色分類只是天氣摘要，不等於任何空域都能依法VFR或適合本機起降。"
          ],
          "figure": {
            "label": "Figure 13-12 · Historical weather depiction chart",
            "page": "13-15",
            "url": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=15"
          },
          "table": {
            "caption": "飛行類別採較差的那一項",
            "headers": [
              "類別",
              "雲幕 AGL",
              "能見度 SM"
            ],
            "rows": [
              [
                "LIFR",
                "低於500 ft",
                "或低於1"
              ],
              [
                "IFR",
                "500至低於1,000 ft",
                "或1至低於3"
              ],
              [
                "MVFR",
                "1,000～3,000 ft",
                "或3～5"
              ],
              [
                "VFR",
                "高於3,000 ft或無雲幕",
                "且大於5"
              ]
            ]
          },
          "check": {
            "question": "BKN008、10SM 是什麼類別？",
            "answer": "IFR，因雲幕800 ft；良好的水平能見度不會將整體升成VFR。"
          }
        }
      ]
    },
    {
      "id": "sigwx",
      "english": "Significant Weather Prognostic Charts",
      "title": "重要天氣預報圖",
      "parent": "charts",
      "locator": "PHAK C 版 · 13-15",
      "printedPage": "13-15",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=15",
      "paragraphs": [
        "重要天氣預報圖呈現指定未來時刻的危害分布，不同高度層與產品可能標示亂流、凍結高度、雲區或對流。讀圖要先確認低、中、高空適用範圍，不能把高空圖沒有標示理解成低空沒有危害。",
        "例如你要在低空山區飛行，應將低空天氣與地形、地面觀測一起看；高空噴流資訊只能補充大尺度背景。預報邊界是分析結果，不是實體牆壁，應對位置與時間的不確定性保留餘裕。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        },
        {
          "title": "AWC · GFA products and charts",
          "url": "https://aviationweather.gov/gfa/help/",
          "checked": "2026-09-19"
        }
      ],
      "lessonBlocks": [
        {
          "title": "低空重要天氣圖不是地面實況",
          "paragraphs": [
            "Figure 13-13 的兩幅為12與24小時預報，涵蓋低雲／能見度、亂流和冰點層等。先讀有效日期與垂直標示，不把FL240等同固定真高度。",
            "2015年版面變更是原書版本背景；今日產品以現行圖例為準。冰點層不等於必然有結冰，還需水氣及粒子狀態；危害邊界也不是精密到可貼線飛行。"
          ],
          "figure": {
            "label": "Figure 13-13 · Low-level significant weather prognostic chart",
            "page": "13-16",
            "url": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=16"
          }
        },
        {
          "title": "36／48小時地面圖看趨勢",
          "paragraphs": [
            "Figure 13-14 提供較遠期的壓力、鋒面和降水配置。它可以幫助安排大方向，但不能從區域降水色塊推導某跑道到達時的精確雲幕。",
            "預報時效愈遠越需安排更新；使用最新版本和當前觀測交叉核對，不能將前一天的圖直接當起飛前簡報。"
          ],
          "figure": {
            "label": "Figure 13-14 · 36- and 48-hour surface forecasts",
            "page": "13-17",
            "url": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=17"
          }
        }
      ]
    },
    {
      "id": "atc-weather",
      "english": "ATC Radar Weather Displays",
      "title": "ATC 雷達天氣顯示",
      "parent": null,
      "locator": "PHAK C 版 · 13-16",
      "printedPage": "13-16",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=16",
      "paragraphs": [
        "ATC 顯示器可以呈現部分降水回波，使用的感測、處理與顯示方式依設施而異。管制員提供的降水強度和位置有助於建立情境，但顯示不一定涵蓋所有高度，也不能直接描述雲中的所有危害。",
        "要求偏航時應明確說出方向、需求及是否能接受建議。若管制員因流量無法立即滿足，應及早協調其他方案；不要為了維持原許可而進入自己判斷不能安全接受的天氣區。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "ATC 降水顯示與亂流不同",
          "paragraphs": [
            "ATC 可能能顯示降水強度，卻不能由回波可靠分出雨、雪、冰雹或雨幡。WARP拼圖有延遲；原文六分鐘是特定系統描述，不是所有顯示的最大資料年齡。",
            "Intensity unknown 只表示設備或資訊不足，並非低強度。無天氣提示也不等於無危害；雷暴周圍晴空仍可能有強亂流。"
          ]
        }
      ]
    },
    {
      "id": "avoidance-assistance",
      "english": "Weather Avoidance Assistance",
      "title": "請求天氣避讓協助",
      "parent": "atc-weather",
      "locator": "PHAK C 版 · 13-18",
      "printedPage": "13-18",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=18",
      "paragraphs": [
        "機師需要避讓天氣時，越早提供需求，ATC 越有機會安排交通與空域。通話應區分「請求偏航」與已經獲准的動作，也要持續回報無法接受的航向或高度，以免双方對可行路徑的理解不同。",
        "例如前方雷暴線逐漸封住航路，可提前要求繞行或折返，同時計算燃油與備降點。ATC 可以協助安排路徑，但只有機師能結合所見天氣、機型限制與乘員狀況決定是否繼續。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "把避讓需求說具體",
          "paragraphs": [
            "請求偏航方向與距離、新航路、高度改變或向量引導時，清楚說明需求與限制，確認新的許可邊界。批准向一側偏航並不自動批准改高度或任意穿越其他空域。",
            "管制員仍有交通隔離與工作量限制。若不能安全執行，要及時說明並請求修訂，不能把缺少提醒視作航路已驗證安全。"
          ]
        }
      ]
    },
    {
      "id": "efd-weather",
      "english": "Electronic Flight Displays (EFD) /Multi-Function Display (MFD) Weather",
      "title": "電子顯示器上的氣象資訊",
      "parent": null,
      "locator": "PHAK C 版 · 13-18",
      "printedPage": "13-18",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=18",
      "paragraphs": [
        "EFD 或 MFD 把航路與天氣疊在一起，能降低查找位置的負擔，卻也容易讓人把漂亮圖像當作即時外界。圖層來源、時間戳、縮放尺度與接收狀態，和回波顏色一樣需要持續注意。",
        "把畫面放大後，像素看起來更精細，並不代表原始雷達解析度提高。學習時要能在不用猜測的情況下指出資料來源、更新中斷標示及哪些空白代表沒有涵蓋，才算真正理解顯示器。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "Figure 13-15 是特定設備選單",
          "paragraphs": [
            "NEXRAD、METAR、TAF、風、閃電、回波頂與雲頂等各有不同來源與用途。回波頂不是雲頂；按鈕名稱與可用產品依設備、軟體和訂閱不同。",
            "讀圖例、時間與涵蓋比記住某一軟鍵位置重要。沒有某圖層可能是未選、未接收、超出涵蓋或故障，不直接等同沒有天氣。"
          ],
          "figure": {
            "label": "Figure 13-15 · Weather information page",
            "page": "13-19",
            "url": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=19"
          }
        }
      ]
    },
    {
      "id": "age",
      "english": "Weather Products Age and Expiration",
      "title": "資料年齡與失效時間",
      "parent": "efd-weather",
      "locator": "PHAK C 版 · 13-18",
      "printedPage": "13-18",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=18",
      "paragraphs": [
        "產品年齡可能從觀測、合成、發布或接收等不同時點計算，畫面上的「幾分鐘前」未必包含整個處理鏈延遲。雷達拼圖由不同時間的掃描組成，因此單一時間標籤不代表每一個像素同時被觀測。",
        "假設畫面剛下載完成，雷暴也可能已在原始掃描後移動並增強。這就是資料鏈雷達適合提早繞行等策略規劃，不能用來在雷暴近旁尋找即時窄縫；產品過期後應主動停止以它支持細部決策。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "points": [
        "觀測時間 → 合成／發布時間 → 傳輸／接收時間 → 螢幕呈現時間，四者不是同一時刻。",
        "不同廠牌的 age 欄位起算方式可能不同；應查顯示器說明，不自行假設包含全部延遲。",
        "陳舊或缺資料的區域不等於晴空；不要使用資料鏈雷達作雷暴近距離穿越導航。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 13-16：四種時間分開",
          "paragraphs": [
            "觀測時間、拼圖生成時間、接收時間、預報有效時間各有意義。螢幕age或expiration要依設備手冊理解，不能假設所有廠牌從同一事件起算。",
            "自編例：12:00觀測、12:05生成、12:07收到，12:10顯示若以生成時計算age5min，實際觀測已10分鐘。過期資料仍可顯示舊圖，不能因顏色鮮明就當現況。"
          ],
          "figure": {
            "label": "Figure 13-16 · Weather product age and expiration",
            "page": "13-19",
            "url": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=19"
          },
          "check": {
            "question": "剛收到一張圖是否代表其中所有像素剛觀測？",
            "answer": "不是。掃描、拼接和傳輸均需時間，不同位置可能有不同資料年齡。"
          }
        }
      ]
    },
    {
      "id": "pilot-actions",
      "english": "What Can Pilots Do?",
      "title": "機師如何管理顯示資料",
      "parent": "efd-weather",
      "locator": "PHAK C 版 · 13-19",
      "printedPage": "13-19",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=19",
      "paragraphs": [
        "飛前應熟悉各圖層、時間標籤、缺資料符號與服務涵蓋，並確認接收器和顯示端正常。航中則定期比較更新時間與外界情況；把「沒有更新」當成需要處置的資訊，不是背景小字。",
        "可在地面練習關閉接收源，觀察系統如何表示陳舊資料與中斷。真正遇到失去更新時，就能及早改用其他來源或調整計畫，而不是一直等待畫面變化，直到安全的繞行選項消失。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "NEXRAD 用來規劃整區避讓",
          "paragraphs": [
            "Figure 13-17 的廣域拼圖提供態勢背景，並不是機鼻上的即時探測器。原書「最多五分鐘」與「最少七至八分鐘」不能當統一上下限；最舊資料可能比顯示年齡再舊15～20分鐘。",
            "起飛前完整簡報、途中使用多個資訊來源、設定改航與落地門檻；不能拿拼圖導引穿越雷暴線空隙。"
          ],
          "figure": {
            "label": "Figure 13-17 · NEXRAD display",
            "page": "13-20",
            "url": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=20"
          }
        },
        {
          "title": "縮放只改顯示，不創造新資訊",
          "paragraphs": [
            "Figure 13-18 放大可更容易讀色塊，卻不會使原始網格或掃描變得更細更新。原書NEXRAD與TOPO／TERRAIN／STORMSCOPE互斥，屬該設備設計，不是所有顯示器規則。",
            "自編例：系統以45 kt移動，20分鐘位移約15 NM；還可能同時長大。因此老圖上的空隙不保證到達時仍開放。"
          ],
          "figure": {
            "label": "Figure 13-18 · NEXRAD display range",
            "page": "13-20",
            "url": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=20"
          },
          "check": {
            "question": "45 kt 的系統20分鐘移動多遠？",
            "answer": "45×20/60=15 NM；這只算平移，未包含新生或增強。"
          }
        }
      ]
    },
    {
      "id": "nexrad-abnormalities",
      "english": "NEXRAD Abnormalities",
      "title": "NEXRAD 非氣象回波與異常",
      "parent": "efd-weather",
      "locator": "PHAK C 版 · 13-21",
      "printedPage": "13-21",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=21",
      "paragraphs": [
        "雷達可能受到地物、鳥群、昆蟲、異常傳播及融化層亮帶等影響，產生不完全對應降雨強度的回波。處理系統雖會過濾雜訊，仍無法保證畫面每個色塊都是同一種大氣現象。",
        "如果回波形狀長時間固定於地形附近，或與衛星、地面報告明顯不一致，應進一步查證。辨識可能的假回波，是為了避免誤讀；不能反過來把不方便繞開的強回波自行認定為雜訊。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "非氣象回波與遮蔽",
          "paragraphs": [
            "地物、異常傳播、日射干擾、干擾訊號及軍用干擾絲等可能產生不代表降水的回波。山脈或建築物也可造成遮蔽。",
            "可疑圖形應與時間連續性、鄰站與其他產品比較，不自行把不方便的回波當成假訊號；沒有回波也需考慮遮蔽。"
          ]
        }
      ]
    },
    {
      "id": "nexrad-limitations",
      "english": "NEXRAD Limitations",
      "title": "NEXRAD 的幾何與時間限制",
      "parent": "efd-weather",
      "locator": "PHAK C 版 · 13-21",
      "printedPage": "13-21",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=21",
      "paragraphs": [
        "NEXRAD 拼圖受波束高度、地形遮蔽、雷達間距與時間延遲影響，遠距離低層天氣可能落在波束下方。複合反射率與單一仰角產品也有不同意義，不能把畫面顏色直接當成目前飛行高度的降水。",
        "進入沒有回波的山谷，仍可能遭遇低雲、降水或強風。規劃時應把雷達當成多來源之一，並且理解「無資料」「未偵測到降水」與「已確認適航天氣」是三個不同結論。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "波束高度與產品解析度限制",
          "paragraphs": [
            "基礎反射率通常取低仰角掃描，但遠處波束已高於地面，可能越過淺層天氣；站頂附近也可能有取樣空缺。單一反射率不能完整判別降水種類或雲層。",
            "現代雷達有更多產品，但座艙是否接收並呈現取決於設備。原文1.24 miles網格與2,000 miles顯示範圍是特定產品範例，不是NEXRAD永久統一解析度或探測半徑。"
          ]
        }
      ]
    },
    {
      "id": "advisory-display",
      "english": "AIRMET/SIGMET Display",
      "title": "圖形化 AIRMET／SIGMET",
      "parent": "efd-weather",
      "locator": "PHAK C 版 · 13-21",
      "printedPage": "13-21",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=21",
      "paragraphs": [
        "電子系統常以多邊形呈現危害通報，方便看出與航路的相對位置。真正的內容仍包括有效時間、危害種類、高度及文字敘述，外框本身無法表達全部條件，重疊圖層也可能遮住重要標籤。",
        "看到航路穿過多邊形時，先打開詳文確認高度與時段；若現在不在影響高度，也要考慮爬升或備降時是否會進入。不要把顏色當成統一等級，因不同產品與廠牌的圖例未必相同。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "多邊形先讀文字詳情",
          "paragraphs": [
            "Figure 13-19 顯示危害邊界可直接疊在航圖上，省去手工連點。但要開啟文字看現象、高度、有效期及更新，不是進入虛線內每個位置都同樣危險。",
            "本土文字AIRMET退役後，設備顯示是否轉用G-AIRMET及如何表示時間快照，需按實際產品確認。"
          ],
          "figure": {
            "label": "Figure 13-19 · AIRMET information display",
            "page": "13-22",
            "url": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=22"
          }
        },
        {
          "title": "圖例顏色不能跨設備硬套",
          "paragraphs": [
            "Figure 13-20 以色彩區分結冰、亂流、IFR、山岳遮蔽等。飛行前查本機圖例；同樣虛線或顏色，在另一設備可能表示不同產品或高度。",
            "邊界外也不保證完全沒有局部危害。幾何位置只是第一步，還需把預計通過時間與垂直範圍配對。"
          ],
          "figure": {
            "label": "Figure 13-20 · SIGMET and AIRMET legend",
            "page": "13-22",
            "url": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=22"
          }
        }
      ]
    },
    {
      "id": "graphical-metar",
      "english": "Graphical METARs",
      "title": "圖形化 METAR",
      "parent": "efd-weather",
      "locator": "PHAK C 版 · 13-21",
      "printedPage": "13-21",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=21",
      "paragraphs": [
        "圖形 METAR 常用顏色或圖示概括測站飛行類別，便於快速找到雲幕與能見度較差的地區。它會省略大量細節，例如陣風、天氣現象、報告年齡及備註，必須打開原報文才能完成評估。",
        "兩站同樣顯示綠色，可能一站無風，另一站有接近航空器限制的側風。也不能以相鄰測站的綠色連線當成可飛走廊；中間地形、測站空缺與局部天氣需要其他資料佐證。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "機場旗標是摘要，不是落地許可",
          "paragraphs": [
            "Figure 13-21 的圖形METAR方便比較各站類別。旗標通常受雲幕和能見度支配，不能呈現所有側風、雷暴、跑道污染或NOTAM風險。",
            "備降前打開完整METAR／TAF與機場資料，核對更新時間。某站綠色而周邊紅色，可能是局地差異或資料時間不同，不先假定有一條安全通道。"
          ],
          "figure": {
            "label": "Figure 13-21 · Graphical METAR legend",
            "page": "13-23",
            "url": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=23"
          },
          "check": {
            "question": "綠色旗標能否證明跑道開放且適合降落？",
            "answer": "不能。需另查NOTAM、風、跑道條件、預報及本機性能。"
          }
        }
      ]
    },
    {
      "id": "data-link",
      "english": "Data Link Weather",
      "title": "資料鏈氣象",
      "parent": null,
      "locator": "PHAK C 版 · 13-21",
      "printedPage": "13-21",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=21",
      "paragraphs": [
        "資料鏈將地面氣象產品傳送到航空器，可經衛星或地面電臺等途徑接收。它提升航中資訊取得能力，但仍有接收涵蓋、服務種類、延遲與設備相容性限制，不會把地面產品變成機載即時雷達。",
        "飛行前應確認接收設備是否真的能取得所需產品，以及超出涵蓋後的計畫。看到定位與航圖仍正常，不表示氣象資料也持續更新；導航系統和天氣鏈路可能是完全不同的資料來源。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "資料鏈仍有實體涵蓋限制",
          "paragraphs": [
            "地面廣播受視距與地形遮擋，衛星通訊也受天線、機體遮蔽、服務範圍和訂閱等條件影響。原文「任何高度、全國、不受地形限制」不能作普遍承諾。",
            "接收器有電與地圖能顯示，並不代表正在取得新資料。要能辨認失聯、局部缺資料與過期狀態。"
          ]
        }
      ]
    },
    {
      "id": "data-link-products",
      "english": "Data Link Weather Products",
      "title": "資料鏈產品的差異",
      "parent": "data-link",
      "locator": "PHAK C 版 · 13-23",
      "printedPage": "13-23",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=23",
      "paragraphs": [
        "可傳送的產品可能包含雷達、METAR、TAF、危害通報及風溫資訊，但每一種有自己的更新週期、範圍與顯示限制。接收某份 METAR 成功，不能證明同一時刻的雷達或通報也已更新。",
        "使用前應做一份個人產品清單：此項回答哪個問題、何時失效、缺資料如何顯示。如此在航路改變時，才能有意識地補查新目的地與較遠區域，而非假設畫面已自動提供所有需要的資料。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "每一項產品各有週期與期限",
          "paragraphs": [
            "同一頁上的雷達、METAR與TAF可能有不同發布頻率、接收狀態及有效時段。混合圖層前先檢查時間一致性與涵蓋。",
            "TFR、NOTAM和特殊用途空域狀態亦不能只看輪廓；需讀時間、高度及適用文字。資料鏈收到摘要不等於已取得完整飛行許可。"
          ]
        }
      ]
    },
    {
      "id": "fisb",
      "english": "Flight Information Service- Broadcast (FIS-B)",
      "title": "FIS-B 廣播飛航資訊",
      "parent": "data-link",
      "locator": "PHAK C 版 · 13-23",
      "printedPage": "13-23",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=23",
      "paragraphs": [
        "美國 FIS-B 透過 978 MHz UAT 地面廣播提供飛航資訊，包括多種氣象產品。接收能力取決於相容的 ADS-B In 設備與涵蓋；只有 ADS-B Out，或只有 1090 MHz 接收能力，都不能直接推論可接收 FIS-B。",
        "低空、地形遮蔽或遠離地面站時，接收可能中斷。FIS-B 提供的是補充飛行資訊，不能取代飛前準備；即使畫面可見雷達，也要遵守資料鏈天氣的策略用途與延遲限制。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "FIS-B 是978 MHz UAT 地面廣播",
          "paragraphs": [
            "FIS-B透過ADS-B地面網路的978 MHz UAT提供適當設備可接收的氣象與航空資訊。僅有1090ES ADS-B Out不代表可接收FIS-B，也不代表飛機已有天氣顯示。",
            "資訊用於增進態勢與策略規劃，不能取代個別完整飛前簡報或用於雷暴間隙即時導航。原文把產品一律稱為不符合官方要求，應改成核對實際作業規則、來源及用途，避免一概而論。"
          ]
        }
      ]
    },
    {
      "id": "responsibility",
      "english": "Pilot Responsibility",
      "title": "機師的氣象決策責任",
      "parent": null,
      "locator": "PHAK C 版 · 13-24",
      "printedPage": "13-24",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=24",
      "paragraphs": [
        "取得資訊後，機師必須把天氣與自身資格、近期經驗、機型能力、地形、燃油及備降條件連結。法規允許的最低條件只是其中一層，不代表在該條件下每名機師都具有相同的安全餘裕。",
        "為本次飛行先寫好決策點，例如雲底低到無法保有地形淨空、對流阻斷替代航路或資訊失去更新時就改航。及早執行預先設計的選項，比在條件惡化後繼續等待更有助於控制風險。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "先設計失去更新後的行動",
          "paragraphs": [
            "知道產品週期、涵蓋、符號、失效提示與設備操作，再設定停止依賴舊資料的條件。資料少、互相衝突或中斷時，保留返航、改航或落地選項。",
            "只留下當前飛行階段需要的圖層，避免低頭與資訊過載。原文PTS時代的考核用語屬版本背景；操作能力仍需依現行訓練與機型要求建立。"
          ]
        }
      ]
    },
    {
      "id": "summary",
      "english": "Chapter Summary",
      "title": "本章整合與練習",
      "parent": null,
      "locator": "PHAK C 版 · 13-24",
      "printedPage": "13-24",
      "source": "https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page=24",
      "paragraphs": [
        "讀完本章應能把觀測、預報、通報與顯示平台分開，並說明每一份資訊的時空限制。真正的能力是由多來源建立天氣圖像，發現矛盾與缺口，再將不確定性轉成保守且可執行的飛行方案。",
        "練習選一條兩小時航線，整理出發與目的地 METAR／TAF、航路危害、高空風及替代機場。逐項標記時間與高度，最後解釋若資料延遲或目的地惡化，在哪裡作決定、改去哪裡及燃油是否足夠。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-1：氣象資訊、產品與資料鏈限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "整合練習：同時核對時地高",
          "paragraphs": [
            "自編情境：出發METAR為VFR，目的地TAF在ETA時段有TEMPO雷暴，雷達拼圖剛收到但觀測較舊，附近PIREP報結冰。四份資料不矛盾，它們描述不同位置、高度與時間。",
            "逐一確認航路是否進入危害區、備降是否仍可用、接收中斷如何處置，再做決策。不能挑最樂觀的一張，也不能用設備顯示取代原始產品限制。"
          ],
          "check": {
            "question": "哪份資料最優先？",
            "answer": "沒有固定一份永遠優先。比較與本航程最相關且最及時可靠的觀測、預報與通報，必要時求證並保留退路。"
          }
        }
      ]
    }
  ],
  "confusions": [
    {
      "title": "觀測與預報",
      "clarification": "觀測描述特定時地，預報描述預期條件。",
      "example": "目前 METAR 好不代表抵達時 TAF 也好。"
    },
    {
      "title": "下載時間與資料時間",
      "clarification": "傳輸完成不表示原始觀測剛發生。",
      "example": "剛更新的畫面仍可能含較舊資料。"
    },
    {
      "title": "FA 與 GFA",
      "clarification": "廣域天氣需求仍存在，但原書 FA 格式不代表所有區域仍發布。",
      "example": "從現行 AWC 選對有效時段與圖層，而不是搜尋不到舊 FA 就略過航路天氣。"
    },
    {
      "title": "METAR 類別與飛行合法性",
      "clarification": "圖形 VFR 色碼是快速摘要，不包含所有空域雲距、地形與個人最低標準。",
      "example": "機場綠色仍可能有超過本機能力的陣風。"
    },
    {
      "title": "ADS-B Out、In 與 FIS-B",
      "clarification": "廣播自身位置、接收交通、接收 978 MHz 天氣是不同能力。",
      "example": "有 ADS-B Out 不表示能在螢幕收到 FIS-B。"
    }
  ],
  "scenario": "自編案例：平板剛下載一張雷達圖，學員便稱它是「現在的天氣」。但下載時間、產品生成時間與原始觀測時間可能不同，且不同區域資料可能有不同年齡。",
  "question": "剛收到的資料鏈雷達圖應如何理解？",
  "options": [
    "一定沒有延遲",
    "需核對觀測、生成與顯示時效",
    "可以精準導引穿過雷暴間隙"
  ],
  "answer": 1,
  "explanation": "資料處理與傳輸存在延遲，應依產品用途及限制判讀。",
  "verified": true,
  "reader": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=311",
  "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=311",
  "detailMode": "outline",
  "checked": "2026-09-20",
  "coverageNote": "全章 45 節均已加入深入講解，共 58 個單元、7 張比較表、16 題理解練習與 Figure 13-1～13-21 官方原圖指引。逐項解讀 METAR、PIREP、TAF、危害通報與高空風溫，區分歷史服務、現行產品及資料鏈限制；TAF 修訂例明確標示重建依據。"
};
