export const chapter={
  "id": "phak25c-14",
  "number": 14,
  "title": "機場運作",
  "english": "Airport Operations",
  "section": "第 14 章；14-1～14-38，全章目錄逐節講解",
  "goal": "理解場面標誌、通信、交通與跑道侵入預防。",
  "primer": "航圖、Chart Supplement、NOTAM 與 ATIS 提供不同面向的資料。平面圖說明佈局，但臨時關閉、施工或服務變化需要另外確認；圖上的設施不代表當下全部可用。",
  "terms": [
    "Hold short · 等待位置前停止",
    "ATIS · 終端情報",
    "Wake turbulence · 尾流亂流"
  ],
  "prompts": [
    "你能在機場圖上標出每條等待線，並說明滑行、穿越、LUAW 與起飛的授權差別嗎？",
    "如何用風、前機路徑與本機性能，判斷尾流避讓方案是否可行？"
  ],
  "keyPoints": [
    "用航圖、Chart Supplement、NOTAM 與 ATIS 建立機場圖像",
    "分辨跑道入口、等待線、標誌與各類燈光",
    "讀回並確認滑行、穿越、LUAW 與起飛指示",
    "整合航線、尾流、目視掃視及跑道侵入預防",
    "理解 EMAS 用途，不將其當成正常可用跑道"
  ],
  "detailSections": [
    {
      "id": "intro",
      "english": "Introduction",
      "title": "機場操作導論",
      "parent": null,
      "locator": "PHAK C 版 · 14-1",
      "printedPage": "14-1",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=1",
      "paragraphs": [
        "機場操作把航圖、標誌、燈光、無線電與交通判斷結合起來。飛行速度較慢不代表工作簡單，滑行時同樣需要知道自己在哪裡、獲准到哪裡，以及下一個必須停止或重新確認的位置。",
        "本章依美國 FAA 體系說明，跨國飛行仍要查當地 AIP 與機場程序。練習時可從停機坪沿預計滑行路線畫到跑道，逐一標出交叉點、等待線及可能誤入的區域，再口述每一步需要的確認。"
      ],
      "lessonBlocks": [
        {
          "title": "每一步都確認位置、許可與衝突",
          "paragraphs": [
            "機場操作從飛前查資料開始，經加入航線、落地、滑行，再到停機。讀懂圖上位置只是第一步，還要知道下一個等待點與其他交通可能從哪裡來。",
            "本章將圖例轉成判斷練習；歷史照片與機場圖供辨識用途，實際航班須使用當期資料及適用程序。原有筆記、情境題與完成紀錄仍保留。"
          ]
        }
      ]
    },
    {
      "id": "categories",
      "english": "Airport Categories",
      "title": "機場類別與用途",
      "parent": null,
      "locator": "PHAK C 版 · 14-1",
      "printedPage": "14-1",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=1",
      "paragraphs": [
        "機場可按公共運輸、一般航空及其他功能分類，這些分類協助理解機場在航空系統中的角色。行政或資助分類和跑道長度、開放條件、空域級別是不同問題，不能看到類別就直接決定是否能使用。",
        "例如一般航空機場也可能有塔臺，而大型公共機場未必適合某次訓練需求。評估目的地時，仍需查跑道、燃油、服務時間、使用限制、性能及進出程序，將「它是什麼機場」轉成「本次能否安全使用」。"
      ],
      "lessonBlocks": [
        {
          "title": "活動分類與所有權不是同一件事",
          "paragraphs": [
            "Commercial service 指公有、提供定期客運且每年登機旅客至少2,500人的機場；其中 primary 是每年超過10,000人的子類。原文列五類卻漏列 primary 的定義，這裡補齊。",
            "Cargo service 的一億磅門檻是全貨機年度落地重量總和，不是卸下貨物重量。Reliever 可公有或私有；一座機場可以兼具客運與貨運身分。不能由類別直接推斷是否有塔臺、是否允許自己的航班使用。"
          ],
          "table": {
            "caption": "活動分類與所有權不是同一件事",
            "headers": [
              "分類",
              "辨識重點"
            ],
            "rows": [
              [
                "Commercial service",
                "公有、定期客運、年度至少2,500登機人次"
              ],
              [
                "Primary",
                "Commercial service 中年度超過10,000人次"
              ],
              [
                "Cargo service",
                "全貨機年度落地總重超過100 million lb"
              ],
              [
                "Reliever",
                "指定用來分擔商用機場壅塞並改善GA使用"
              ],
              [
                "General aviation",
                "其餘GA機場；不等於一律無塔臺"
              ]
            ]
          }
        }
      ],
      "references": [
        {
          "title": "FAA：機場活動分類與Primary定義",
          "url": "https://www.faa.gov/airports/planning_capacity/categories",
          "checked": "2026-09-20"
        }
      ]
    },
    {
      "id": "types",
      "english": "Types of Airports",
      "title": "有塔臺與無塔臺機場",
      "parent": null,
      "locator": "PHAK C 版 · 14-2",
      "printedPage": "14-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=2",
      "paragraphs": [
        "從機師操作角度，是否有正在服務的管制塔臺會改變通訊、許可與交通協調方式。機場可能白天有塔臺、夜間無塔臺，因此不能把航圖上的塔臺符號當成全天候均由塔臺控制。",
        "飛前要確認塔臺服務時間、停開後的頻率及空域狀態。落地前若已接近交接時間，應及早釐清後續程序；無塔臺並不表示沒有其他航空器，也不表示可以省略模式、讓路及目視避讓。"
      ],
      "lessonBlocks": [
        {
          "title": "有塔臺與開放使用分兩軸看",
          "paragraphs": [
            "Civil、military／federal、private 描述用途或開放條件；towered／nontowered 描述當時是否有運作中的塔臺。私有機場可能開放公眾使用，軍民合用機場也有自己的限制。",
            "有塔臺建築卻已超過服務時間，操作程序可能轉為無塔臺；但周圍空域、IFR許可或特別程序仍須查明，不能只看建築決定。"
          ]
        }
      ]
    },
    {
      "id": "towered",
      "english": "Towered Airport",
      "title": "有塔臺機場",
      "parent": "types",
      "locator": "PHAK C 版 · 14-2",
      "printedPage": "14-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=2",
      "paragraphs": [
        "塔臺依適用程序管理機場附近交通與受管制的地面活動，機師須取得所需許可並遵守指示。地面、塔臺及進場頻率各有角色，頻率切換本身不代表已獲准進入跑道或起飛。",
        "滑行許可可能只允許你到某跑道前等待，不能把「taxi to」理解成可自行穿越任何中間跑道。遇到不確定的路線應停在安全位置詢問，並持續以機場圖、標誌與外部目視交叉確認。"
      ],
      "references": [
        {
          "title": "FAA AIM 4-3：機場操作、跑道許可與 LAHSO",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_3.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "收到、聽懂、能做，才是完整通訊",
          "paragraphs": [
            "在適用塔臺程序下，建立雙向通訊、遵守許可及限制。不懂就請求重述；性能、位置或交通使指令不安全時，立即說明 unable 並請求修改。",
            "回覆自己的呼號能減少相似呼號誤認。滑行指令不自動包含起飛、穿越任意跑道或超越等待點的權限；緊急偏離後，應盡快告知ATC。"
          ],
          "check": {
            "question": "ATC 指示立即轉出跑道，但速度仍太高，怎麼辦？",
            "answer": "不要勉強急轉。告知無法安全照做，保持控制並請求合適出口。"
          }
        }
      ]
    },
    {
      "id": "nontowered",
      "english": "Nontowered Airport",
      "title": "無塔臺機場",
      "parent": "types",
      "locator": "PHAK C 版 · 14-2",
      "printedPage": "14-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=2",
      "paragraphs": [
        "無塔臺機場以公布程序、目視避讓與適當的 CTAF 通話協助協調交通，沒有塔臺替每架航空器安排順序。CTAF 是共同交通諮詢頻率，通話是報告位置與意圖，不會產生管制許可或優先權。",
        "有些航空器可能沒有無線電，或使用者漏聽了你的呼叫，因此「頻率安靜」不代表跑道空。進入航線前應查方向與高度、觀察風與交通，並選擇能與既有交通安全整合的方式。"
      ],
      "references": [
        {
          "title": "FAA AIM 4-3：機場操作、跑道許可與 LAHSO",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_3.html",
          "checked": "2026-09-11"
        },
        {
          "title": "FAA AC 90-66C：無塔臺機場操作",
          "url": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_90-66C.pdf",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "CTAF 是協調頻率，不是無人塔臺",
          "paragraphs": [
            "先從現行機場資料確認CTAF。UNICOM可提供資訊，卻不給ATC起降許可；MULTICOM、FSS或塔臺關閉後的頻率可能承擔CTAF功能，不能一律選122.8。",
            "Figure 14-1 的入場10 miles、downwind、base、final及離開跑道等廣播幫助建立交通圖像。報告要有機場名、呼號、位置與意圖，並持續目視；沒聽見回覆不代表沒飛機。無塔臺本身不要求塔臺雙向通訊，但相關空域或飛行規則仍可能要求通訊。"
          ],
          "figure": {
            "label": "Figure 14-1 · Recommended communication procedures",
            "page": "14-3",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=3"
          }
        },
        {
          "title": "從反側到達：先在航線外完成下降",
          "paragraphs": [
            "Figure 14-2 示意先在適當高度跨越中場，離開航線約2 miles後再下降，平飛加入45° downwind。原書1,500 ft AGL是建立在1,000 ft航線高度之上；有大型／渦輪機較高航線時，不能照抄這個高度。",
            "以公布航線高度、雲距及現場交通規劃，避免在航線內螺旋下降。2 miles也是示意距離，不能保證已避開所有延長downwind的飛機。"
          ],
          "figure": {
            "label": "Figure 14-2 · Preferred entry crossing midfield",
            "page": "14-4",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=4"
          },
          "check": {
            "question": "機場活塞機航線1,000 ft、渦輪機1,500 ft AGL，能否在1,500 ft穿場並認為高於所有交通？",
            "answer": "不能，正好可能與渦輪機同高。查公布程序並選擇能避開各航線的進場安排。"
          }
        },
        {
          "title": "中場 crosswind 替代進入的條件",
          "paragraphs": [
            "Figure 14-3 在航線高度穿過中場再轉downwind，是需格外注意交通的替代方式；繁忙時不宜使用，應讓已在downwind及偏好45°進入的交通。",
            "直線進場也不產生優先權。先調整間隔和速度，不用突然轉彎迫使別人閃避；原文70～90 kt是機型例子，實際依本機建議速度與安全裕度。"
          ],
          "figure": {
            "label": "Figure 14-3 · Alternate midfield entry",
            "page": "14-4",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=4"
          }
        }
      ]
    },
    {
      "id": "airport-data",
      "english": "Sources for Airport Data",
      "title": "機場資料的來源",
      "parent": null,
      "locator": "PHAK C 版 · 14-3",
      "printedPage": "14-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=3",
      "paragraphs": [
        "機場資料分散於航圖、Chart Supplement、NOTAM、ATIS 及機場圖，各自負責不同時間尺度與細節。穩定出版品適合建立基本認識，即時或短期資訊則用來修正跑道、設備與程序的可用性。",
        "飛前可按四個問題整理：機場在哪裡、如何進出、今天哪些設施不能用、到達時的天氣與跑道狀態如何。只查跑道長度卻忽略入口移位或施工，會讓看似足夠的性能餘裕失去依據。"
      ],
      "lessonBlocks": [
        {
          "title": "把四種資料放進同一份計畫",
          "paragraphs": [
            "航圖看位置及空域，Chart Supplement看設施程序，NOTAM看臨時改變，ATIS看當時運作與部分重要資訊。原文說三種卻列四種，應理解為互補的四個入口。",
            "飛前查一次仍不夠：到達前再核對最新天氣、跑道和關閉資訊。圖上有鋪面不代表今天可用，ATIS沒念某NOTAM也不表示它無效。"
          ]
        }
      ]
    },
    {
      "id": "aero-charts",
      "english": "Aeronautical Charts",
      "title": "航空圖",
      "parent": "airport-data",
      "locator": "PHAK C 版 · 14-3",
      "printedPage": "14-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=3",
      "paragraphs": [
        "航空圖用符號與數字表達機場、地形、障礙物、導航及空域，讀圖能力包括查圖例及確認版本。機場圖則提供更細的跑道與滑行道布局；航路圖上的簡化符號不能代替地面滑行所需細節。",
        "機場圖上的熱點提醒曾有或可能有混淆風險的區域，不代表其他地方可放鬆注意。預先在圖上找出跑道交叉與相似編號，落地後就較不容易因工作負荷而跟錯前方航空器。"
      ],
      "lessonBlocks": [
        {
          "title": "航圖的符號是進一步查詢的索引",
          "paragraphs": [
            "先辨識機場標高、跑道資料、燈光、CTAF／塔臺頻率及RP右航線標記，再查圖例。圖面空間有限，無法容納所有場面限制。",
            "把機場與附近空域一起看，尤其塔臺非全時、機場靠近Class B/C或特殊空域時。航圖能幫助導航，不能取代滑行用機場圖。"
          ]
        }
      ]
    },
    {
      "id": "chart-supplement",
      "english": "Chart Supplement U.S. (formerly Airport/Facility Directory)",
      "title": "Chart Supplement U.S.",
      "parent": "airport-data",
      "locator": "PHAK C 版 · 14-3",
      "printedPage": "14-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=3",
      "paragraphs": [
        "Chart Supplement 提供機場的跑道、頻率、服務、航線與備註等資訊，是理解當地操作的重要補充。它的出版週期意味著近期變動仍須另查 NOTAM；舊稱 A/FD 可在早期教材中看到。",
        "如果航圖只顯示機場有燈光，實際是否需預先安排、可否由機師控制及服務時段，都可能要讀補充資料。不要只擷取表格第一行，備註常包含夜間、地形、噪音或特定跑道的限制。"
      ],
      "lessonBlocks": [
        {
          "title": "Chart Supplement 的查閱順序",
          "paragraphs": [
            "Figure 14-4 先找到正確機場識別碼，再讀標高、跑道、頻率、服務時段、備註及圖。美國區域冊一般56天更新，但週期中仍會有NOTAM變更。",
            "同時確認時區、夏令時間表示、跑道坡度、障礙、噪音程序和LAHSO資料。原書頁面與電話只是當時範例，不能直接作現行導航使用。"
          ],
          "figure": {
            "label": "Figure 14-4 · Chart Supplement example",
            "page": "14-4",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=4"
          }
        }
      ]
    },
    {
      "id": "notam",
      "english": "Notices to Airmen (NOTAM)",
      "title": "NOTAM 與短期變更",
      "parent": "airport-data",
      "locator": "PHAK C 版 · 14-4",
      "printedPage": "14-4",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=4",
      "paragraphs": [
        "NOTAM 通知可能影響飛航的設施、程序與狀態變更，例如跑道關閉、燈光失效或施工。判讀要看適用地點、開始與結束時間、可能的每日時段及內容，而不是只看發布日期或標題。",
        "一條跑道仍出現在有效航圖中，也可能今天暫時不能使用。若 NOTAM 改變可用長度，應重新計算性能與備案；資訊看不懂時需查明，不能把縮寫當成「大概與我無關」而跳過。"
      ],
      "lessonBlocks": [
        {
          "title": "NOTAM 要讀作用範圍及起訖時間",
          "paragraphs": [
            "找出受影響機場／設施、關閉或限制內容、有效日期時刻，以及是否分時生效。RWY與TWY不同，某跑道ILS停用也不一定代表整條跑道關閉。",
            "將資訊反映到滑行路線、性能與備降計畫。原書NOTAM分類與發布工具可能有版本差異，使用現行FAA入口；不因熟悉機場而跳過查詢。"
          ],
          "check": {
            "question": "圖上A滑行道存在，NOTAM卻說A的一段關閉，應相信哪個？",
            "answer": "按有效NOTAM修正計畫，確認關閉區間與可用路線；不按舊圖直接滑入。"
          }
        }
      ]
    },
    {
      "id": "atis",
      "english": "Automated Terminal Information Service (ATIS)",
      "title": "ATIS 自動終端資訊",
      "parent": "airport-data",
      "locator": "PHAK C 版 · 14-5",
      "printedPage": "14-5",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=5",
      "paragraphs": [
        "ATIS 把機場例行天氣與操作資訊持續播送，並以識別碼表示版本，減少頻率上重複通話。首次聯絡時告知已收到的版本，可讓管制員知道你掌握到哪一輪資訊，但不代表其他必要資訊均已齊全。",
        "如果聽到新版本發布，應確認變更是否影響跑道、風或進場。ATIS 不是滑行、穿越或起飛許可，也不能保證涵蓋所有與航班相關的 NOTAM；它是機場資訊鏈中的一部分。"
      ],
      "lessonBlocks": [
        {
          "title": "ATIS 代號表示你聽過哪個版本",
          "paragraphs": [
            "記下識別字母、時間、風、能見度、雲、設定值、使用跑道及重要限制；首次聯絡報出已收到的版本。代號改變時需確認更新內容。",
            "ATIS不是滑行或落地許可，也不保證涵蓋所有相關NOTAM。聽到預期跑道後仍要等實際許可並核對，避免預期心理造成跑道混淆。"
          ]
        }
      ]
    },
    {
      "id": "markings",
      "english": "Airport Markings and Signs",
      "title": "機場標線與標誌",
      "parent": null,
      "locator": "PHAK C 版 · 14-5",
      "printedPage": "14-5",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=5",
      "paragraphs": [
        "辨識地面資訊先分顏色與用途：跑道標線以白色為主，滑行道及等待位置常用黃色；標誌則利用底色與文字區分位置、方向與強制指示。顏色是入口，還需結合所在位置與指示內容。",
        "相同黃色線可能是中心線、邊線或等待線，不能只靠顏色決定可以穿越。滑行時應在接近交叉口前減速辨識，若標誌、機場圖與許可不一致，先停止釐清比越過後再詢問更容易控制風險。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-3：機場標線、標誌與 EMAS",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "先用顏色分類，再讀形狀與位置",
          "paragraphs": [
            "跑道一般以白色標記，滑行及等待相關標記多為黃色；但不能只靠顏色，例如黃色箭紋區與黃色滑行中心線用途完全不同。",
            "沿自己的路徑逐一辨認中心線、等待線、標誌與邊界。夜間或低能見度時更要配合機場圖，不能追著一條亮線就假定一路有權前進。"
          ]
        }
      ]
    },
    {
      "id": "runway-markings",
      "english": "Runway Markings and Signs",
      "title": "跑道標線與相關標誌",
      "parent": "markings",
      "locator": "PHAK C 版 · 14-5",
      "printedPage": "14-5",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=5",
      "paragraphs": [
        "跑道標線包含編號、中心線、入口、瞄準點與接地區等，幫助機師確認方向及著陸位置。不同類型跑道的標線配置不完全相同，因此缺少某項標線不必然代表設施故障，需配合跑道類型閱讀。",
        "進場時可用跑道編號、航向、長寬與周圍布局交叉確認。尤其平行跑道或旁邊有寬滑行道時，只看一條長直鋪面很容易誤認；應在最後進場前就建立一致的跑道識別。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-3：機場標線、標誌與 EMAS",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "跑道白線各自回答不同問題",
          "paragraphs": [
            "編號辨識方向，中心線協助對正，門檻表示該方向可開始落地的界線，瞄準點及接地區標記協助掌握接地位置。它們不全都裝在每種跑道。",
            "不要把瞄準點當成唯一必須觸地的位置，或把鋪面長度直接當作LDA；移位門檻、關閉區段與公布距離可能改變可用長度。"
          ]
        }
      ]
    },
    {
      "id": "relocated",
      "english": "Relocated Runway Threshold",
      "title": "暫移跑道入口",
      "parent": "runway-markings",
      "locator": "PHAK C 版 · 14-5",
      "printedPage": "14-5",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=5",
      "paragraphs": [
        "Relocated threshold 通常因施工或其他原因把入口移到新位置，前方受影響的跑道區段可能對所有起降均不再可用。其操作結果是可用跑道縮短，不能與單純的 displaced threshold 箭頭區混為一談。",
        "若原先性能計算使用全長，入口暫移後必須依公布的可用距離重算。看到現場標示與記憶不同時，應以現行 NOTAM、標線及適用指示確認，而不是沿用過去在此機場操作的經驗。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-3：機場標線、標誌及區域",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "Relocated threshold：先查被關閉的區段",
          "paragraphs": [
            "Figure 14-5 的臨時門檻移動常因施工，原區段用途依NOTAM和現場配置決定。不能把relocated與displaced混為一談，直接推論門檻前仍可滑行、起飛或落地滑跑。",
            "讀圖時找新門檻、臨時箭頭及改道的黃色滑行線，確認路線通往哪個可用區域；原書機場配置只用來練習辨識。"
          ],
          "figure": {
            "label": "Figure 14-5 · Relocated runway threshold",
            "page": "14-6",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=6"
          }
        }
      ]
    },
    {
      "id": "displaced",
      "english": "Displaced Threshold",
      "title": "位移入口",
      "parent": "runway-markings",
      "locator": "PHAK C 版 · 14-5",
      "printedPage": "14-5",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=5",
      "paragraphs": [
        "Displaced threshold 以白色箭頭引導至新的著陸入口，限制該方向的接地起點。入口前鋪面在沒有其他限制時可供起飛或反方向著陸滑跑使用，與禁止正常運作的黃色箭頭形鋪面不同。",
        "白箭頭區看起來和跑道相連，不表示可以在該方向提前接地。判斷可用距離應按起飛與著陸方向分開，並讀公布距離與 NOTAM；同一段鋪面可能對不同階段有不同用途。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-3：機場標線、標誌及區域",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html",
          "checked": "2026-09-20"
        }
      ],
      "points": [
        "白色箭頭：引向位移入口，該方向不可在入口前接地；其他使用依公布條件確認。",
        "黃色 chevrons：不供正常滑行、起飛或著陸，不能當作一般可用跑道。",
        "入口暫移／施工關閉：受影響區段可能全面不可用，須重算可用距離。"
      ],
      "lessonBlocks": [
        {
          "title": "Displaced threshold：落地起點後移",
          "paragraphs": [
            "Figure 14-6 的白箭頭引導到白色門檻線。一般而言，門檻前鋪面可供起飛及相反方向的落地滑跑，但該方向不得在移位門檻前接地；仍須核對公布距離與任何限制。",
            "黃色chevrons標示的blast pad／stopway等區域不供正常起飛、落地或滑行使用。不要因看見鋪面或箭形，就當成同一種可用區。"
          ],
          "figure": {
            "label": "Figure 14-6 · Displaced threshold",
            "page": "14-7",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=7"
          },
          "table": {
            "caption": "Displaced threshold：落地起點後移",
            "headers": [
              "辨識",
              "一般含義",
              "必須再查"
            ],
            "rows": [
              [
                "白色箭頭＋移位門檻",
                "該方向落地起點後移",
                "TORA／LDA及NOTAM"
              ],
              [
                "施工遷移門檻",
                "可用跑道配置改變",
                "關閉區段及各項用途"
              ],
              [
                "黃色chevrons",
                "不可作正常跑道／滑行使用",
                "區域性質與限制"
              ]
            ]
          },
          "check": {
            "question": "門檻前有白箭頭，進場方向能否提早接地來增加停止距離？",
            "answer": "不能。該方向須在可用落地門檻之後接地，另核對LDA。"
          }
        }
      ]
    },
    {
      "id": "rsa",
      "english": "Runway Safety Area",
      "title": "跑道安全區",
      "parent": "runway-markings",
      "locator": "PHAK C 版 · 14-6",
      "printedPage": "14-6",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=6",
      "paragraphs": [
        "RSA 是跑道周邊經規劃的區域，用以降低航空器偏出、衝出或接地過短時的損害風險。它不因此成為正常起飛或著陸距離的一部分，也不能把安全區面積加進性能計算。",
        "滑行或停等時要避免侵入受保護區，尤其尾部仍可能突出到界線另一側。理解 RSA 的目的有助於明白為何有些等待位置距離跑道很遠，以及為何「輪子已離開跑道」仍不一定算完全脫離。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-3：機場標線、標誌及區域",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "RSA 是降低偏出後果的區域",
          "paragraphs": [
            "Figure 14-7 顯示跑道周圍安全區，不是額外可用跑道或一般等待位置。整平地面有助救援與降低偏出損害，但不能保證能承載正常滑行。",
            "尺寸依跑道設計而異，原文後段500×1,000 ft只是特定標準情境。進入相關保護區前仍需遵守許可、標線及交通避讓。"
          ],
          "figure": {
            "label": "Figure 14-7 · Runway safety area",
            "page": "14-7",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=7"
          }
        }
      ]
    },
    {
      "id": "rsa-boundary",
      "english": "Runway Safety Area Boundary Sign",
      "title": "跑道安全區邊界標誌",
      "parent": "runway-markings",
      "locator": "PHAK C 版 · 14-6",
      "printedPage": "14-6",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=6",
      "paragraphs": [
        "安全區邊界標誌提供離開跑道時的辨識提示，圖形與等待位置標線相呼應。它幫助機師判斷是否已離開需保護的區域，但不能取代對實際地面標線、整架航空器位置及 ATC 指示的確認。",
        "飛機機頭越過邊界時，機尾可能仍在跑道保護區內。落地退出後應確保整架航空器通過適用的等待線，再停下整理座艙與聯絡；不能為了提早操作設備而停在界線上。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-3：機場標線、標誌及區域",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "Clear of runway 看整架航空器",
          "paragraphs": [
            "Figure 14-8 的黃底黑圖樣從離開跑道方向可見，提供安全區邊界提示。當ATC要求回報clear時，機鼻或主輪通過還不夠，機尾及翼面亦需越過適用等待標線。",
            "離開後仍不可自行越過另一條鄰近跑道或超出後續許可。不確定是否完全離開，就告知實際位置並請求協助。"
          ],
          "figure": {
            "label": "Figure 14-8 · Runway safety area boundary sign",
            "page": "14-7",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=7"
          }
        }
      ]
    },
    {
      "id": "hold-sign",
      "english": "Runway Holding Position Sign",
      "title": "跑道等待位置標誌",
      "parent": "runway-markings",
      "locator": "PHAK C 版 · 14-6",
      "printedPage": "14-6",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=6",
      "paragraphs": [
        "跑道等待標誌通常以紅底白字顯示跑道編號，提醒前方是必須取得適當許可或依程序確認後才能進入的區域。兩個跑道方向的數字有助於確認交叉的實際跑道，但不等於給予通行權。",
        "收到滑行路線後，應把預期遇到的紅色標誌與機場圖對照。如果出現的跑道號碼與你記錄不同，立即停止釐清；跟隨其他航空器或車輛，不會讓它們的許可自動適用於你。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-3：機場標線、標誌及區域",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "紅底白字提示跑道入口",
          "paragraphs": [
            "Figure 14-9 的等待位置標誌與鋪面等待線共同提醒必須確認前方權限。接近時保留停止距離，不能等機鼻已跨線才開始查圖或呼叫。",
            "有塔臺時，進入或穿越需相應明確許可；無塔臺時需確認交通與跑道可用，廣播意圖不能取代目視確認。"
          ],
          "figure": {
            "label": "Figure 14-9 · Runway holding position sign",
            "page": "14-7",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=7"
          }
        },
        {
          "title": "18–36 的左右對應門檻位置",
          "paragraphs": [
            "Figure 14-10 中18在左、36在右，表示對應門檻相對方向，不是任選一條跑道。旁邊黑底黃字A說明目前位於Taxiway A。",
            "先區分現在在哪裡與前方是哪條跑道，再和ATC給的路線對照；位置牌本身不授權轉入跑道。"
          ],
          "figure": {
            "label": "Figure 14-10 · Runway designations at an intersection",
            "page": "14-8",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=8"
          }
        },
        {
          "title": "交叉跑道的箭頭要配機場圖",
          "paragraphs": [
            "Figure 14-11 同時列出13–31與17–35，箭頭協助辨識各門檻方向。這種幾何使一次錯轉可能進入另一條跑道，因此屬需要預先簡報的hot spot。",
            "在停止位置完成方位核對，必要時請求progressive taxi；不要一面越線一面猜哪個箭頭屬於自己。"
          ],
          "figure": {
            "label": "Figure 14-11 · Complex runway intersection",
            "page": "14-9",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=9"
          }
        },
        {
          "title": "地面紅底文字也要讀",
          "paragraphs": [
            "Figure 14-12 把跑道等待資訊漆在鋪面，增加辨識機會。它與立式標誌及真正的等待標線互相補充；停止界線以等待位置標記辨認。",
            "看到32R–14L先想接下來會遇到哪條跑道，再查是否有穿越許可，而不是只追滑行中心線。"
          ],
          "figure": {
            "label": "Figure 14-12 · Surface-painted runway holding sign",
            "page": "14-10",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=10"
          }
        }
      ]
    },
    {
      "id": "hold-marking",
      "english": "Runway Holding Position Marking",
      "title": "跑道等待位置標線",
      "parent": "runway-markings",
      "locator": "PHAK C 版 · 14-8",
      "printedPage": "14-8",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=8",
      "paragraphs": [
        "標準跑道等待線由兩條實線與兩條虛線構成。從實線側接近時要在界線前停住，並遵循進入或穿越程序；離開跑道時一般從虛線側通過，整架航空器越過才算完成相應的清離。",
        "不要只看前輪是否越線，機翼與尾部同樣可能侵入受保護區。若許可聽不清楚，在標線前詢問，並讀回跑道號碼與等待要求；地面劃線的視覺確認可補足記憶和通訊錯誤。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-3：機場標線、標誌及區域",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "雙實線一側接近：先停在線前",
          "paragraphs": [
            "Figure 14-13 有兩條實線與兩條虛線。由滑行道接近跑道時先遇實線，任何部位都不應越過第一條實線，直到符合進入條件。",
            "ATC說taxi to某目的地，不會自動取消途中runway hold short；讀回完整限制並核對呼號。"
          ],
          "figure": {
            "label": "Figure 14-13 · Holding position approached from solid lines",
            "page": "14-10",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=10"
          },
          "check": {
            "question": "機鼻過線但前輪尚未過線，算有遵守hold short嗎？",
            "answer": "沒有。限制針對整架航空器，不能只看輪子。"
          }
        },
        {
          "title": "由虛線一側退出：整架通過才清空",
          "paragraphs": [
            "Figure 14-14 從跑道退出時先遇雙虛線，需繼續到整機越過全部等待標線。退出這條跑道的該標線本身不需要另一次穿越跑道許可。",
            "若前方是另一條跑道，仍要另外獲准才能進入；避免把「可退出」延伸成「可繼續所有滑行」。"
          ],
          "figure": {
            "label": "Figure 14-14 · Holding position viewed on runway exit",
            "page": "14-10",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=10"
          }
        }
      ]
    },
    {
      "id": "remaining",
      "english": "Runway Distance Remaining Signs",
      "title": "跑道剩餘距離標誌",
      "parent": "runway-markings",
      "locator": "PHAK C 版 · 14-8",
      "printedPage": "14-8",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=8",
      "paragraphs": [
        "跑道剩餘距離標誌通常是黑底白字，數字表示以千英尺計的剩餘跑道距離，幫助機師監看加速或滑跑位置。它與紅底白字的跑道等待標誌不同，也不是以公尺為單位的連續精密量測。",
        "看到「3」可理解為約剩 3,000 ft 的標示位置，但不能臨時用它取代事先性能計算與中止起飛計畫。若加速或減速表現不符預期，要依事先的決策準則處置，而非只靠最後幾面標誌猜測。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-3：機場標線、標誌與 EMAS",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "黑底白數字以千英尺讀",
          "paragraphs": [
            "Figure 14-15 的3代表約3,000 ft跑道剩餘，1代表約1,000 ft，不是跑道編號、海里或精確制動距離。最後標誌位置及設置有標準，讀數只是位置線索。",
            "實際是否能停下取決於速度、重量、制動與表面條件；不能靠看到1才開始決定如何煞車，也不能取代飛前性能計算。"
          ],
          "figure": {
            "label": "Figure 14-15 · Runway distance remaining signs",
            "page": "14-10",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=10"
          }
        }
      ]
    },
    {
      "id": "designation",
      "english": "Runway Designation Marking",
      "title": "跑道編號與左右識別",
      "parent": "runway-markings",
      "locator": "PHAK C 版 · 14-8",
      "printedPage": "14-8",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=8",
      "paragraphs": [
        "跑道編號通常依接近磁方位的十分之一取整，以兩位數表示；平行跑道再加 L、C 或 R 區分。反方向跑道的編號大致相差 18，左右標示也會隨觀看方向交換。",
        "跑道 09 代表大致朝東，並不表示精確等於 090 度。進場前應比較航向與指定跑道，特別是 09L／09R；單看「09」正確仍可能落在錯的平行跑道上。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-3：機場標線、標誌與 EMAS",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "跑道號是磁方位的近似索引",
          "paragraphs": [
            "Figure 14-16 把跑道中心線磁方位取最接近十度，再省略末尾零；北向用36。反向通常相差18，平行跑道的L/R從各自進場方向看會互換。",
            "例如09L反向為27R。磁場變化可能造成重新編號；最後仍要用現行圖、地面號碼和航向相互核對。"
          ],
          "figure": {
            "label": "Figure 14-16 · Runway designation markings",
            "page": "14-11",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=11"
          },
          "check": {
            "question": "朝向約274°的跑道通常編幾號？",
            "answer": "通常是27；反向約094°為09。實際以公布編號為準。"
          }
        }
      ]
    },
    {
      "id": "lahso",
      "english": "Land and Hold Short Operations (LAHSO)",
      "title": "著陸並等待於指定點之前",
      "parent": "runway-markings",
      "locator": "PHAK C 版 · 14-10",
      "printedPage": "14-10",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=10",
      "paragraphs": [
        "LAHSO 要求航空器著陸後停在指定跑道、滑行道交叉點或其他公布位置之前，以便維持其他運作。接受前必須了解可用著陸距離、停止位置、天氣、性能與逃脫選項，不能只因管制員提出就答應。",
        "如果無法確保符合條件，機師可以拒絕 LAHSO，並及早告知。接受後應清楚讀回等待點，將它納入進場簡報；不能把原跑道全長的著陸性能，直接當成縮短後仍足夠的證明。"
      ],
      "references": [
        {
          "title": "FAA AIM 4-3：機場操作及地面程序",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_3.html",
          "checked": "2026-09-20"
        },
        {
          "title": "FAA JO 7110.118C：現行LAHSO條件、夜間燈光及參加限制",
          "url": "https://www.faa.gov/documentLibrary/media/Order/Order_JO_7110.118C_Land_and_Hold_Short_Operations_LAHSO_FINAL.pdf",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "LAHSO 接受的是縮短後的可用距離",
          "paragraphs": [
            "Figure 14-17 的等待點可能在另一條跑道、滑行道或指定點之前。先確認ALD、性能、安全裕度及停止位置，不能拿整條跑道長度評估；PIC可拒絕不合適的LAHSO。",
            "接受後需確保任何部位不越過指定點；若需重飛，仍以安全操作為先，立刻告知ATC並遵守適用重飛安排。一般cleared to land若沒有LAHSO限制，不會因看見標線就自動變成LAHSO。"
          ],
          "figure": {
            "label": "Figure 14-17 · Land and hold short position",
            "page": "14-11",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=11"
          },
          "check": {
            "question": "跑道8,000 ft，LAHSO可用距離4,500 ft，本次需求5,000 ft，能否接受？",
            "answer": "不能以8,000 ft總長作理由接受；應告知unable並請求完整跑道或其他安排。"
          }
        },
        {
          "title": "以現行 JO 7110.118C 核對限制",
          "paragraphs": [
            "2025年生效的JO 7110.118C仍要求LAHSO可用落地區乾燥且無污染物，煞車效能不得低於good。夜間並非全面禁止，但有相應燈光與核准條件；不能以更早的許可文件推論今日可在濕跑道做LAHSO。",
            "非航空公司操作的雲幕／能見度門檻為1,000 ft AGL／3 miles；航空公司及特定配置另有條件。自報student pilot或experimental航空器時ATC不得發LAHSO許可；不應把學生限制縮成只有單飛。熟悉程序、機型資格與當地核准同樣重要。"
          ]
        }
      ]
    },
    {
      "id": "taxi-markings",
      "english": "Taxiway Markings and Signs",
      "title": "滑行道標線與標誌",
      "parent": "markings",
      "locator": "PHAK C 版 · 14-11",
      "printedPage": "14-11",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=11",
      "paragraphs": [
        "滑行道中心線通常為黃色，用來引導航空器沿設計路徑移動；邊線與位置標誌協助辨識範圍和所在滑行道。沿中心線滑行並不保證任何翼展的航空器都能避開所有障礙，仍要考慮機型尺寸與限制。",
        "滑行轉彎時，機鼻、主輪與翼尖走的路徑不同。遇到狹窄轉角或停放航空器，應減速並確認翼尖間隔；不要因中心線連續，就認定目前路徑必然適合本機型。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-3：機場標線、標誌與 EMAS",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "黃色方向牌與黑色位置牌配對",
          "paragraphs": [
            "Figure 14-18 中黑底黃字D是目前位置，黃色B與箭頭表示前方可向左右轉入B。讀箭頭的幾何方向，再確認自己的指定路線是否真的要轉。",
            "方向牌通常在交叉口前，晚看到再急轉容易偏出或進錯道；不確定就先在安全位置停下查明。"
          ],
          "figure": {
            "label": "Figure 14-18 · Taxiway direction and location signs",
            "page": "14-12",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=12"
          }
        },
        {
          "title": "鋪面箭頭同樣只是導航資訊",
          "paragraphs": [
            "Figure 14-19 的B直行、A右前方，描述道路去向，不是ATC給你的路線。把收到的taxi via逐段對應到箭頭。",
            "路線若含交叉跑道，仍需逐一確認穿越或等待指令；滑行道名稱連續不代表中間沒有跑道。"
          ],
          "figure": {
            "label": "Figure 14-19 · Surface-painted taxiway direction signs",
            "page": "14-12",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=12"
          }
        },
        {
          "title": "複雜路口先用幾何重建方向",
          "paragraphs": [
            "Figure 14-20 的S約垂直相交、F斜向相交，方向牌可能帶或不帶位置牌。把機場圖轉成自己前進方向來理解，但別只憑記憶猜角度。",
            "視角、距離與路面寬度可能誤導，應在轉彎前核對牌面、中心線和許可。"
          ],
          "figure": {
            "label": "Figure 14-20 · Complex taxiway direction signs",
            "page": "14-13",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=13"
          }
        }
      ]
    },
    {
      "id": "enhanced",
      "english": "Enhanced Taxiway Centerline Markings",
      "title": "強化滑行道中心線",
      "parent": "taxi-markings",
      "locator": "PHAK C 版 · 14-12",
      "printedPage": "14-12",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=12",
      "paragraphs": [
        "強化中心線在一般中心線兩側加入黃色虛線，提醒航空器正接近跑道等待位置。它是提高注意力的預告，不是等待線本身，也不會把原本沒有許可的狀態變成可進入跑道。",
        "看到此標線時，可以主動停止低頭工作，重新確認跑道編號、許可及兩側交通。這是一個很好的座艙提醒點：在到達真正等待線以前，把容易分心的設定與簡報工作暫停。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-3：機場標線、標誌與 EMAS",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "中心線旁的虛線提醒快到跑道",
          "paragraphs": [
            "Figure 14-21 在單實線中心線兩旁加黃色虛線，原書示意延伸到等待線前最多150 ft，目的是提高跑道入口的醒目度。",
            "它不是新的停止線，也不是有無許可的指示。看到強化線就重新檢查跑道、呼號與許可，提早減速準備停止。"
          ],
          "figure": {
            "label": "Figure 14-21 · Enhanced taxiway centerline",
            "page": "14-13",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=13"
          }
        }
      ]
    },
    {
      "id": "destination",
      "english": "Destination Signs",
      "title": "目的地方向標誌",
      "parent": "taxi-markings",
      "locator": "PHAK C 版 · 14-12",
      "printedPage": "14-12",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=12",
      "paragraphs": [
        "目的地標誌通常以黃底黑字與箭頭指向跑道、航廈或其他設施，回答「往哪裡走」。它不同於黑底黃字的位置標誌，後者主要回答「現在在哪裡」，也不具有取代 ATC 滑行許可的功能。",
        "一個箭頭通往指定跑道，不代表你獲准沿該方向立即前進。要把目的地指示與已獲准路線對上；若標誌指出捷徑但許可不同，先依許可或詢問，不要擅自改走。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-3：機場標線、標誌與 EMAS",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "FBO 是目的地，不是滑行道名字",
          "paragraphs": [
            "Figure 14-22 的FBO箭頭指向固定基地服務商區域。目的地牌可列terminal、cargo、military等，回答的是往哪裡去。",
            "即使目標就在箭頭方向，仍依獲准路線移動；不能以目的地牌取代地面管制指令。"
          ],
          "figure": {
            "label": "Figure 14-22 · Destination sign to FBO",
            "page": "14-14",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=14"
          }
        },
        {
          "title": "共用箭頭與分隔線分開解讀",
          "paragraphs": [
            "Figure 14-23 的32·2·14共用右箭頭，表示這些目的地先走共同路徑；20另配左箭頭。圓點分隔目的地，黑色直線分隔不同方向訊息。",
            "這不表示32、2、14是同一條跑道，也不表示右轉後已到起飛端。繼續用後續標誌和機場圖追蹤。"
          ],
          "figure": {
            "label": "Figure 14-23 · Runway destination sign",
            "page": "14-14",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=14"
          }
        }
      ]
    },
    {
      "id": "ils-hold",
      "english": "Holding Position Signs and Markings for an Instrument Landing System (ILS) Critical Area",
      "title": "ILS 臨界區等待位置",
      "parent": "taxi-markings",
      "locator": "PHAK C 版 · 14-12",
      "printedPage": "14-12",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=12",
      "paragraphs": [
        "ILS 臨界區需要避免航空器或車輛干擾導航訊號，因此可能設有專用等待標誌與梯狀標線。其位置可能比一般跑道等待線更遠，啟用與操作要求依機場條件、能見度和 ATC 指示而定。",
        "若被要求 hold short of ILS critical area，不能滑到一般跑道等待線才停。應先確認是哪一條界線；航空器即使沒有侵入跑道，也可能因停在臨界區而影響正在使用 ILS 的進場。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-3：機場標線、標誌及區域",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "ILS 紅牌與黃色梯形線",
          "paragraphs": [
            "Figure 14-24 的黑底G是位置，紅底ILS是保護區等待提示。ILS訊號可能受地面航空器干擾，因此低能見度操作尤其需要維持保護區淨空。",
            "指令hold short of Runway XX ILS critical area時，整機必須停在梯形標記前；它與跑道的雙實雙虛等待線不是同一位置。"
          ],
          "figure": {
            "label": "Figure 14-24 · ILS holding position sign",
            "page": "14-14",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=14"
          }
        },
        {
          "title": "未要求 ILS hold 也不等於可進跑道",
          "paragraphs": [
            "Figure 14-25 展示ILS臨界區邊界。若ATC沒有要求在該點等待，可在既有滑行許可範圍內通過ILS標線，但下一個跑道等待限制仍然有效。",
            "不要把「此處不必停」推論為「後面都能走」。核對ATC所說的是ILS hold還是runway hold。"
          ],
          "figure": {
            "label": "Figure 14-25 · ILS critical area boundary",
            "page": "14-14",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=14"
          },
          "check": {
            "question": "已獲准滑到跑道等待點，未被要求ILS hold，能一路上跑道嗎？",
            "answer": "不能。可按許可繼續到跑道等待點，但進跑道仍需相應許可。"
          }
        }
      ]
    },
    {
      "id": "taxi-hold",
      "english": "Holding Position Markings for Taxiway/Taxiway Intersections",
      "title": "滑行道交叉口等待線",
      "parent": "taxi-markings",
      "locator": "PHAK C 版 · 14-14",
      "printedPage": "14-14",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=14",
      "paragraphs": [
        "滑行道交叉口可能設置單條黃色虛線，表示適用指示下的等待位置，和跑道的兩實兩虛線不同。它的用途是協調地面交通，不應僅憑看到虛線就以為任何情況都能不減速通過。",
        "收到在某滑行道前等待的指示時，要將路名、標誌及線的位置一起確認。若機場布局不熟悉，可請求逐步滑行指引；把「我不知道這是不是那個交叉口」說清楚，比猜測前進更有效。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-3：機場標線、標誌及區域",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "單條黃色虛線是滑行道交叉等待點",
          "paragraphs": [
            "Figure 14-26 標示taxiway／taxiway等待位置；被要求hold short of Taxiway X時，確保整機停在線前。沒有畫線時，仍須留足與交叉滑行交通的間隔。",
            "不可把它當成跑道雙實雙虛線，或因只有一條虛線就忽略已收到的等待指令。"
          ],
          "figure": {
            "label": "Figure 14-26 · Taxiway intersection holding marking",
            "page": "14-15",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=15"
          }
        }
      ]
    },
    {
      "id": "permanent-closure",
      "english": "Marking and Lighting of Permanently Closed Runways and Taxiways",
      "title": "永久關閉的跑道與滑行道",
      "parent": "markings",
      "locator": "PHAK C 版 · 14-14",
      "printedPage": "14-14",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=14",
      "paragraphs": [
        "永久關閉的鋪面通常以明確關閉標記表示，相關正常燈光與標誌也會移除或停用。外觀仍像完整跑道並不代表可以使用，尤其從空中看，舊鋪面很容易被誤當成仍在運作的設施。",
        "飛前應查有效航圖，進場再對照跑道編號與關閉標記。即使長度、方向及鋪面看似合適，也不能把未確認的舊跑道當成正常選項；關閉後可能已有施工、障礙或承載問題。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-3：機場標線、標誌與 EMAS",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "永久關閉不只是換一個頻率",
          "paragraphs": [
            "永久關閉的跑道／滑行道會依規定處理標記和燈光，例如移除舊跑道識別、設黃色X及關閉燈路。殘留鋪面可能看起來仍像可用跑道。",
            "是否可用以現行資料和標示確認；無X、燈亮或過去曾用，都不是重新開放的證據。"
          ]
        }
      ]
    },
    {
      "id": "temporary-closure",
      "english": "Temporarily Closed Runways and Taxiways",
      "title": "暫時關閉的跑道與滑行道",
      "parent": "markings",
      "locator": "PHAK C 版 · 14-15",
      "printedPage": "14-15",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=15",
      "paragraphs": [
        "暫時關閉可能使用可移動的關閉標記、障礙及 NOTAM 表示，現場配置不一定和永久關閉完全相同。某些短期關閉不會及時反映在航圖上，因此最新通報與塔臺資訊特別重要。",
        "看到燈亮或沒有明顯大型叉號，也不能推翻已生效的關閉通知。若對可用區段或重新開放時間有疑問，應在使用前確認；跑道部分開放還可能伴隨距離、入口及程序變更。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-3：機場標線、標誌與 EMAS",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "黃色 X 表示關閉，沒有 X 也要查",
          "paragraphs": [
            "Figure 14-27 比較平放黃色X與更醒目的燈光X。臨時關閉可能因時段、施工方式或配置而沒有相同視覺裝置。",
            "飛前及到達前查NOTAM／ATIS；看到關閉指示與預期許可矛盾時先釐清，不自行認定標記已失效。"
          ],
          "figure": {
            "label": "Figure 14-27 · Temporarily closed runway markings",
            "page": "14-15",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=15"
          }
        }
      ]
    },
    {
      "id": "other-markings",
      "english": "Other Markings",
      "title": "其他鋪面標記",
      "parent": "markings",
      "locator": "PHAK C 版 · 14-15",
      "printedPage": "14-15",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=15",
      "paragraphs": [
        "黃色箭頭形標記常表示 blast pad、stopway 等不供正常滑行、起飛或著陸使用的鋪面；其他標記也可能表示道路、非活動區邊界或特定禁用區。判讀時應同時確認圖例與所處環境。",
        "最常見混淆是把黃色 chevrons 與位移入口前的白色箭頭視為同一件事。前者不能因鋪面堅硬就加入一般跑道距離；後者則要按飛行方向與公布用途，分別判斷可否使用。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-3：機場標線、標誌及區域",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "其他地面標記的界線不同",
          "paragraphs": [
            "車輛道路標記供地面車輛使用；VOR檢查點配合公布方位作接收器檢查。它們不授予航空器進入或穿越跑道的權限。",
            "Non-movement area邊界為一實一虛黃線，實線在非活動區一側；由非活動區進入受管制活動區需相應許可。不要與跑道等待的兩實兩虛混淆。"
          ],
          "table": {
            "caption": "其他地面標記的界線不同",
            "headers": [
              "標記",
              "辨認與用途"
            ],
            "rows": [
              [
                "跑道等待",
                "兩實兩虛，保護跑道入口"
              ],
              [
                "非活動區邊界",
                "一實一虛，區分場面管制界面"
              ],
              [
                "滑行道交叉等待",
                "單條黃色虛線，配合等待指令"
              ],
              [
                "VOR檢查點",
                "依公布頻率、徑向與容差作檢查"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "airport-signs",
      "english": "Airport Signs",
      "title": "機場標誌的分類記憶",
      "parent": "markings",
      "locator": "PHAK C 版 · 14-15",
      "printedPage": "14-15",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=15",
      "paragraphs": [
        "可用問題來記標誌：紅底白字要求你注意強制指示，黑底黃字指出所在位置，黃底黑字加箭頭引導方向或目的地。標誌通常成組設置，要將同一組中的位置與方向資訊一起讀。",
        "練習不要只背顏色配對，而應拿機場圖模擬實際路線，看到一組標誌後說出「目前在 A，左轉到 B，前方是跑道」。能把文字轉成空間位置，才較能避免在複雜路口選錯路。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-3：機場標線、標誌及區域",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html",
          "checked": "2026-09-20"
        }
      ],
      "points": [
        "紅底白字：強制指示，例如跑道等待位置。",
        "黑底黃字：位置，告訴你目前所在滑行道或跑道。",
        "黃底黑字加箭頭：方向／目的地，要搭配實際滑行許可。",
        "黑底白色數字：跑道剩餘距離，以千英尺表示。"
      ],
      "lessonBlocks": [
        {
          "title": "六種牌型用問題分類",
          "paragraphs": [
            "Mandatory回答是否有需要服從的入口限制，location回答現在在哪，direction回答下一條道往哪，destination回答目的地往哪，information補充資訊，remaining distance表示跑道剩餘長度。",
            "安全區邊界牌有專用黃黑圖樣；不能將所有邊界牌都套成黑底黃字位置牌。每塊牌都須配合位置及許可來讀。"
          ],
          "table": {
            "caption": "六種牌型用問題分類",
            "headers": [
              "種類",
              "常見配色",
              "用途"
            ],
            "rows": [
              [
                "Mandatory instruction",
                "紅底白字",
                "跑道／ILS等待等限制"
              ],
              [
                "Location",
                "黑底黃字黃邊、無箭頭",
                "目前跑道／滑行道"
              ],
              [
                "Direction",
                "黃底黑字及箭頭",
                "相交滑行道方向"
              ],
              [
                "Destination",
                "黃底黑字及箭頭",
                "機場目的地方向"
              ],
              [
                "Information",
                "黃底黑字",
                "必要補充資訊"
              ],
              [
                "Runway distance remaining",
                "黑底白數字",
                "以千英尺表示剩餘距離"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "lighting",
      "english": "Airport Lighting",
      "title": "機場燈光的作用",
      "parent": null,
      "locator": "PHAK C 版 · 14-16",
      "printedPage": "14-16",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=16",
      "paragraphs": [
        "燈光在夜間與低能見度中建立機場、跑道與滑行道的視覺參考，顏色與配置代表不同功能。燈光存在不代表天氣符合進場或著陸條件，也不能取代對可用設施與 NOTAM 的確認。",
        "從遠方看見很多燈時，應先識別跑道方向，再區分進場燈、邊燈與滑行道。過度亮度、濕地反光或鄰近道路都可能造成誤判，必要時透過適用管道調整亮度並重新確認位置。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-1：機場燈光與目視進場系統",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "燈光的功能與方向一起讀",
          "paragraphs": [
            "機場燈光可供辨識機場、建立進場視覺參考、辨認跑道／滑行道，或警告不得前進。相同顏色因位置、閃爍和觀察方向不同，可能意思不同。",
            "燈光是協助判斷的資訊；除明確適用的塔臺燈號指令外，不應把看到某色或燈熄滅直接當成ATC許可。"
          ]
        }
      ]
    },
    {
      "id": "beacon",
      "english": "Airport Beacon",
      "title": "機場燈塔",
      "parent": "lighting",
      "locator": "PHAK C 版 · 14-16",
      "printedPage": "14-16",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=16",
      "paragraphs": [
        "機場燈塔以交替光色協助辨認機場類型與位置；美國民用陸上機場常見白綠交替，水上機場常見白黃交替。軍用機場的閃光特徵另有區別，但燈塔本身不是跑道方向指示。",
        "白天亮著的燈塔可能與低雲能見度有關，也可能受操作設定影響，不能單靠它判定一定符合或不符合 VFR。仍應取得正式天氣資訊，並依實際空域與操作最低標準評估。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-1：航空燈光、Stop Bar與RWSL",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "機場燈塔辨識類型，不判定飛行合法性",
          "paragraphs": [
            "Figure 14-28 白綠交替通常是陸地機場，白黃是水上機場；直升機場可白、黃、綠，軍用機場以快速雙白閃與綠光區別。",
            "白天亮燈有時提示低雲或低能見度，但也可能由定時器或光感控制；不能只憑燈亮判IFR，或燈滅判VFR。仍查實際氣象及空域規則。"
          ],
          "figure": {
            "label": "Figure 14-28 · Airport rotating beacons",
            "page": "14-16",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=16"
          }
        }
      ]
    },
    {
      "id": "als",
      "english": "Approach Light Systems",
      "title": "進場燈光系統",
      "parent": "lighting",
      "locator": "PHAK C 版 · 14-16",
      "printedPage": "14-16",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=16",
      "paragraphs": [
        "ALS 從跑道入口向進場方向延伸，提供對準、距離感與姿態轉換的視覺線索，配置依系統類型而異。它幫助從儀表參考過渡到目視，但看見部分進場燈並不自動允許無限制繼續下降。",
        "儀表進場中可下降到何處，須依適用規則、可見參考及最低標準判定。學習時先分清跑道入口、進場燈與跑道本體的位置，避免把前方燈列的開始誤當成可接地點。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-1：機場燈光與目視進場系統",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "ALS 協助從儀表轉到視覺",
          "paragraphs": [
            "進場燈的排列、長度與閃光形式取決於系統。沿燈列可幫助辨識跑道方向與距離感，但燈本身不是下滑道，也不代表前方無障礙。",
            "儀表進場能否下降到特定高度，須依適用最低標準及所見視覺參考規定；不能籠統認為「看見一盞進場燈就可繼續落地」。"
          ]
        }
      ]
    },
    {
      "id": "glideslope",
      "english": "Visual Glideslope Indicators",
      "title": "目視下滑指示",
      "parent": "als",
      "locator": "PHAK C 版 · 14-16",
      "printedPage": "14-16",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=16",
      "paragraphs": [
        "目視下滑系統利用不同顏色或燈型表示航空器相對於設定下滑路徑的位置，提供穩定進場參考。它的有效角度、障礙保護與機場條件有邊界，不能在任意側向位置都直接套用。",
        "若沿指示下降仍感覺跑道不對稱，應確認是否對準正確跑道，以及自己是否在系統適用扇區內。大型機眼輪高度差或位移入口也可能影響接地點判斷，應查機型與機場資料。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-1：機場燈光與目視進場系統",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "視覺下滑道提供有限的保護範圍",
          "paragraphs": [
            "VASI、PAPI等以角度提供進場高度線索，通常約3°但各機場可能不同。先對正適當進場路徑，再依公布角度、有效範圍及限制使用。",
            "眼睛沿指示下滑不等於所有機型的輪子都有相同越障高度。大型機駕駛艙與輪子高度差、地形及系統位置都要納入。"
          ]
        }
      ]
    },
    {
      "id": "vasi",
      "english": "Visual Approach Slope Indicator (VASI)",
      "title": "VASI 目視進場坡度指示燈",
      "parent": "glideslope",
      "locator": "PHAK C 版 · 14-16",
      "printedPage": "14-16",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=16",
      "paragraphs": [
        "常見兩組 VASI 以紅白組合表示高低：遠排紅、近排白代表在設定坡度附近；兩排白表示偏高，兩排紅表示偏低。這個判讀是沿進場方向觀看，不能只背顏色而忽略近遠排列。",
        "使用時仍要維持速度、構型與穩定下降，避免追著燈色大幅修正。VASI 是垂直參考，不能替你確認跑道長度、側風或交通；若無法在穩定進場條件內修正，應依程序重飛。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-1：航空燈光、Stop Bar與RWSL",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html",
          "checked": "2026-09-20"
        }
      ],
      "points": [
        "遠排紅、近排白：在坡度附近。",
        "兩排白：偏高；兩排紅：偏低。",
        "這是常見兩排 VASI 的判讀，三排或其他配置應查系統說明。"
      ],
      "lessonBlocks": [
        {
          "title": "兩排 VASI 先分遠排與近排",
          "paragraphs": [
            "Figure 14-29 遠排紅、近排白為on glidepath；兩排紅表示低，兩排白表示高。所謂red over white是從進場視角看到的遠近排列，不是任意兩盞燈。",
            "典型兩排系統約3°，三排可提供兩條下滑道。原書±10°、4 NM保護範圍有系統前提，不應拿來在未對正或超出公布範圍時下降。"
          ],
          "figure": {
            "label": "Figure 14-29 · Two-bar VASI",
            "page": "14-17",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=17"
          },
          "table": {
            "caption": "兩排 VASI 先分遠排與近排",
            "headers": [
              "遠排",
              "近排",
              "判讀"
            ],
            "rows": [
              [
                "紅",
                "紅",
                "低於下滑道"
              ],
              [
                "紅",
                "白",
                "位於下滑道"
              ],
              [
                "白",
                "白",
                "高於下滑道"
              ]
            ]
          },
          "check": {
            "question": "VASI遠排紅、近排白，是否可不看跑道方向直接下降？",
            "answer": "不行。指示須在正確進場方位及適用範圍內使用，還要保持合適航跡與其他進場條件。"
          }
        }
      ]
    },
    {
      "id": "other-glide",
      "english": "Other Glidepath Systems",
      "title": "PAPI 與其他下滑系統",
      "parent": "glideslope",
      "locator": "PHAK C 版 · 14-16",
      "printedPage": "14-16",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=16",
      "paragraphs": [
        "四燈 PAPI 常以兩白兩紅表示在設定坡度附近，白燈較多表示偏高、紅燈較多表示偏低。其他系統可能使用不同光束或閃動方式，因此到陌生機場前要確認設備類型，而非把所有燈列當作 PAPI。",
        "全紅提示偏低時，要先保持適當操縱與速度，再依安全進場程序修正或重飛。不能為了讓燈色「變正確」而突然拉高姿態、失去空速，或忽略目視參考已不足的事實。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-1：航空燈光、Stop Bar與RWSL",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html",
          "checked": "2026-09-20"
        }
      ],
      "points": [
        "四燈 PAPI：四白偏高，三白一紅稍高，兩白兩紅在坡度附近，一白三紅稍低，四紅偏低。",
        "系統只在其設計與公布範圍提供參考；斜向看燈或看錯跑道，不應依色碼硬套下降。"
      ],
      "lessonBlocks": [
        {
          "title": "PAPI 的紅燈愈多，位置愈低",
          "paragraphs": [
            "Figure 14-30 的典型四燈PAPI，四白高、三白一紅略高、兩白兩紅在道上、一白三紅略低、四紅低。圖中2.5°～3.5°是該3°配置的示意，不是所有機場相同。",
            "若指示與儀表下滑道不一致，查公布差異及設備限制；不要低空突然追燈或為了改成兩紅兩白而做不穩定修正。"
          ],
          "figure": {
            "label": "Figure 14-30 · Precision approach path indicator",
            "page": "14-17",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=17"
          },
          "table": {
            "caption": "PAPI 的紅燈愈多，位置愈低",
            "headers": [
              "四燈組合",
              "相對位置"
            ],
            "rows": [
              [
                "4白",
                "高"
              ],
              [
                "3白1紅",
                "略高"
              ],
              [
                "2白2紅",
                "在下滑道"
              ],
              [
                "1白3紅",
                "略低"
              ],
              [
                "4紅",
                "低"
              ]
            ]
          }
        },
        {
          "title": "三色系統的綠色表示在道上",
          "paragraphs": [
            "Figure 14-31 單燈三色系統以紅、綠、琥珀分別表示低、在道上、高。低於綠色區時可能經過短暫暗琥珀過渡區，不能因此誤以為自己已到高側。",
            "先識別裝的是哪種系統，再使用對應圖例；不可將PAPI白紅口訣套到三色燈。"
          ],
          "figure": {
            "label": "Figure 14-31 · Tri-color visual approach slope indicator",
            "page": "14-17",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=17"
          }
        },
        {
          "title": "脈動燈要一起讀顏色與閃爍",
          "paragraphs": [
            "Figure 14-32 steady white表示在道上，steady red略低，pulsating red更低，pulsating white表示高；偏離程度增加時脈動會加快。",
            "可見距離受日夜、能見度與設備影響。原書日間約4 miles、夜間約10 miles是典型說明，不是保證在該距離一定看得到。"
          ],
          "figure": {
            "label": "Figure 14-32 · Pulsating visual approach slope indicator",
            "page": "14-18",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=18"
          }
        }
      ]
    },
    {
      "id": "runway-lights",
      "english": "Runway Lighting",
      "title": "跑道燈光的整體辨識",
      "parent": "lighting",
      "locator": "PHAK C 版 · 14-17",
      "printedPage": "14-17",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=17",
      "paragraphs": [
        "跑道燈光共同描繪邊界、入口、終端及中線；不同跑道可能只配備部分系統。機師應在飛前知道預期能看見哪些燈，再與實際觀察比對，這比到最後才猜測哪一條是跑道可靠。",
        "若預期有中線燈卻沒有，可能是設備失效、未開啟或你正看著另一條鋪面。應用入口、編號、航向及其他可用線索交叉確認，不要因「有兩排燈」就完成跑道識別。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-1：機場燈光與目視進場系統",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "從哪個方向看同一盞跑道燈",
          "paragraphs": [
            "進場方向看到門檻綠燈，從跑道向離場端看可見紅色末端燈；雙向燈具可能同一位置有不同顏色。跑道邊燈、中心線、門檻與REIL不能混為一類。",
            "辨識燈列是否與自己的跑道一致，尤其平行跑道、斜向進場及機場周圍道路很多時。"
          ]
        }
      ]
    },
    {
      "id": "reil",
      "english": "Runway End Identifier Lights (REIL)",
      "title": "跑道端識別燈",
      "parent": "runway-lights",
      "locator": "PHAK C 版 · 14-17",
      "printedPage": "14-17",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=17",
      "paragraphs": [
        "REIL 通常在跑道入口兩側設置一對同步閃光燈，目的是從複雜背景中突顯入口位置。它幫助找到跑道端，但不提供下滑坡度，也不能單獨表示剩餘跑道長度或適合著陸。",
        "夜間地面燈很多時，閃光可協助捕捉入口位置，再以跑道邊燈確認方向與寬度。若只朝閃光飛去卻沒有確認入口後的跑道布局，仍可能錯判最後進場的位置與距離。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-1：機場燈光與目視進場系統",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "REIL 是成對同步閃光",
          "paragraphs": [
            "REIL設於門檻兩側，幫助快速找到進場端，特別在周圍燈光混雜時。它不顯示剩餘距離或下滑角。",
            "不要把閃白的REIL與跑道末端固定紅燈混淆；也不能只看到兩個閃光就跳過跑道編號與位置核對。"
          ]
        }
      ]
    },
    {
      "id": "edge-lights",
      "english": "Runway Edge Lights",
      "title": "跑道邊燈",
      "parent": "runway-lights",
      "locator": "PHAK C 版 · 14-17",
      "printedPage": "14-17",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=17",
      "paragraphs": [
        "跑道邊燈通常為白色；儀表跑道接近末端的一段可用黃色警示剩餘距離，依規定取最後 2,000 ft 或跑道半長之較短者。入口方向常見綠燈，跑道終端朝跑道內側顯示紅燈。",
        "黃色邊燈提醒即將接近末端，不代表還有固定長度適用所有跑道。著陸滑跑時要把燈光變化與事前停止計畫、實際減速表現一起看，不能等到紅燈才開始判斷是否來得及停住。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-1：航空燈光、Stop Bar與RWSL",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "邊燈末段黃光是剩餘長度警示",
          "paragraphs": [
            "Figure 14-33 跑道邊燈一般白色；儀表跑道最後2,000 ft或跑道長度一半，以較短者為準，可呈黃色警示，末端以紅燈界定。",
            "HIRL、MIRL、LIRL描述可用光強等級，不是三種不同跑道顏色。能調光也不保證自動設定適合當時能見度。"
          ],
          "figure": {
            "label": "Figure 14-33 · Runway edge lighting",
            "page": "14-18",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=18"
          },
          "check": {
            "question": "長3,000 ft的儀表跑道，末段黃邊燈區按此規則多長？",
            "answer": "取2,000與1,500的較小值，為最後1,500 ft；實際仍確認設備配置。"
          }
        }
      ]
    },
    {
      "id": "in-runway",
      "english": "In-Runway Lighting",
      "title": "跑道中線與接地區燈",
      "parent": "runway-lights",
      "locator": "PHAK C 版 · 14-18",
      "printedPage": "14-18",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=18",
      "paragraphs": [
        "配備中線燈的跑道通常在大部分長度顯示白色，接近終端改為紅白交替，最後一段為紅色；接地區燈則以入口後的成組白燈強化接地區辨識。這些配置提供距離線索，但不是各跑道都具備。",
        "在標準中線配置中，最後 3,000 至 1,000 ft 為紅白交替，最後 1,000 ft 為紅色。實際操作仍需查設備與可用狀態，尤其跑道縮短時不能直接把原燈光分段當作新公布距離。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-1：航空燈光、Stop Bar與RWSL",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "中心線顏色按剩餘距離變化",
          "paragraphs": [
            "具RCLS的跑道，最後3,000 ft之前為白色，剩3,000～1,000 ft交替白紅，最後1,000 ft為紅。TDZL成對白燈列則協助辨識接地區，原書延伸3,000 ft或到中點，以較短者為準。",
            "滑行道lead-on／lead-off在相關保護區內可交替綠黃，LAHSO等待點可有脈動白燈。這些位置指示不改變已收到的許可與等待限制。"
          ],
          "table": {
            "caption": "中心線顏色按剩餘距離變化",
            "headers": [
              "燈列",
              "典型顏色／界限",
              "用途"
            ],
            "rows": [
              [
                "跑道中心線",
                "白→白紅交替→紅",
                "提示接近末端"
              ],
              [
                "接地區燈",
                "成對白色短排",
                "建立接地區視覺"
              ],
              [
                "滑行引入／引出",
                "保護區段可綠黃交替",
                "提示路徑與區域"
              ],
              [
                "LAHSO等待點",
                "一排脈動白光",
                "標示指定停止點"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "light-control",
      "english": "Control of Airport Lighting",
      "title": "機場燈光控制",
      "parent": "lighting",
      "locator": "PHAK C 版 · 14-18",
      "printedPage": "14-18",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=18",
      "paragraphs": [
        "燈光可能由塔臺、定時裝置或機師透過指定頻率控制，方式應查 Chart Supplement。常見的麥克風按鍵次數可調亮度，但不同機場系統不完全一樣，不能把某套按法當成全球通用。",
        "進場前應留出時間測試正確頻率與操作方式，並確認燈確實亮起。若沒有反應，先查頻率、電臺與服務資訊；不要在低空忙於反覆按鍵而忽略航跡、地形及重飛或轉降選項。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-1：航空燈光、Stop Bar與RWSL",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "無線電控燈要用公布頻率",
          "paragraphs": [
            "Figure 14-34 示範5秒內按送話鍵7次選最高、5次選中等或較低、3次選最低可用強度。不同設備可控制的燈具及強度不同，有些設定會關閉或降低REIL。",
            "先查機場公布頻率、時段與操作說明，不假設一定是CTAF。確認燈確實亮起並注意定時熄滅；若未成功，不能在沒有足夠視覺參考下繼續下降。"
          ],
          "figure": {
            "label": "Figure 14-34 · Pilot-controlled lighting",
            "page": "14-19",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=19"
          },
          "table": {
            "caption": "無線電控燈要用公布頻率",
            "headers": [
              "5秒內按鍵",
              "典型功能"
            ],
            "rows": [
              [
                "7次",
                "最高可用強度"
              ],
              [
                "5次",
                "中等或較低強度"
              ],
              [
                "3次",
                "最低可用強度"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "taxi-lights",
      "english": "Taxiway Lights",
      "title": "滑行道燈光",
      "parent": "lighting",
      "locator": "PHAK C 版 · 14-19",
      "printedPage": "14-19",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=19",
      "paragraphs": [
        "滑行道邊燈常為藍色，中線燈常為綠色，幫助航空器沿地面路線移動。亮著的燈只提供引導或警示，不會替代滑行許可；不同區域還可能有專門等待與保護燈光。",
        "夜間遇到綠色中線延伸穿過跑道時，不能因燈光連續就直接通過。仍要辨識等待線、紅色標誌及適用許可，尤其在複雜交叉口，應減速並以機場圖確認下一段的名稱。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-1：機場燈光與目視進場系統",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "滑行燈具要配合路面標線",
          "paragraphs": [
            "滑行道邊緣與中心線協助維持路徑，等待位置燈則提示交叉與停止位置。寬廣鋪面上可能有多條相交燈列，不能只選最亮或最直的一條。",
            "速度要能在可見距離內辨認並停止。讀圖、調頻或輸入航電需要低頭時，先在適當位置停穩並維持場面監控。"
          ]
        }
      ]
    },
    {
      "id": "omnidirectional",
      "english": "Omnidirectional",
      "title": "全向滑行道邊燈",
      "parent": "taxi-lights",
      "locator": "PHAK C 版 · 14-19",
      "printedPage": "14-19",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=19",
      "paragraphs": [
        "全向邊燈讓機師從不同方向看見滑行道邊界，通常以藍色顯示。它們主要提供橫向範圍感，不是每個燈間距都可用來精確估算距離，也不能表示鋪面承載能力或翼尖淨空。",
        "在彎道或大片停機坪附近，遠方不同路線的藍燈可能重疊。應以近處中心線、標誌及機場圖判斷路徑，避免直接朝一組看似連續的藍燈轉向，進入錯誤或不適用的區域。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-1：機場燈光與目視進場系統",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "藍色邊燈、綠色中心線",
          "paragraphs": [
            "Omnidirectional taxiway edge lights通常藍色，沿滑行道邊緣；中心線燈通常綠色。夜間應辨識兩者的相對位置，避免把邊燈當成要沿著壓過的線。",
            "綠色路線不代表已獲准穿越前方跑道；也可能延伸到需要另行許可的區域。"
          ]
        }
      ]
    },
    {
      "id": "clearance-bar",
      "english": "Clearance Bar Lights",
      "title": "滑行道停止提示燈列",
      "parent": "taxi-lights",
      "locator": "PHAK C 版 · 14-19",
      "printedPage": "14-19",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=19",
      "paragraphs": [
        "Clearance bar 通常由三盞黃色嵌入式燈組成，提高特定等待位置或交叉點在低能見度中的可見性。它與紅色 stop bar 的功能與表示不同，不能只因都是橫向一排燈就使用同一判讀。",
        "接近時要先辨識相關地面標線及 ATC 指示，了解該位置要保護什麼。黃色提示燈本身不是穿越跑道的批准，也不會取消原來的等待要求；仍須按所在區域與許可決定動作。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-1：航空燈光、Stop Bar與RWSL",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "三盞穩定黃燈是 clearance bar",
          "paragraphs": [
            "Clearance bar通常由三盞嵌入式穩定黃色燈組成，增加等待位置或滑行道交叉處的醒目度。名稱含clearance，不表示它正在發給許可。",
            "看到時對照標線和ATC限制；別把它與成對閃黃runway guard lights混淆。"
          ]
        }
      ]
    },
    {
      "id": "guard-lights",
      "english": "Runway Guard Lights",
      "title": "跑道警戒燈",
      "parent": "taxi-lights",
      "locator": "PHAK C 版 · 14-19",
      "printedPage": "14-19",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=19",
      "paragraphs": [
        "Runway guard lights 常以交替閃爍的黃色燈提醒前方跑道入口，可安裝在兩側或鋪面上。它們增加等待位置的醒目程度，提醒機師重新確認跑道與交通，而不是表示跑道已空或可進入。",
        "在能見度差或陌生機場，看到閃黃燈可以把它當作最後一次交叉確認點。若尚未確認進入許可，應在等待線前停住；燈光系統不會知道你是否誤聽了另一架航空器的指示。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-1：航空燈光、Stop Bar與RWSL",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "閃黃 guard lights 警告接近跑道",
          "paragraphs": [
            "Runway guard lights可為滑行道兩側抬高的成對閃黃燈，也可為跨滑行道的嵌入式黃燈列。它們使跑道入口醒目，而非表示跑道淨空。",
            "從燈光再找等待線與紅色跑道牌，確認是否有明確進入／穿越許可。無論白天或低能見度都不宜忽視。"
          ]
        }
      ]
    },
    {
      "id": "stop-bar",
      "english": "Stop Bar Lights",
      "title": "停止線燈",
      "parent": "taxi-lights",
      "locator": "PHAK C 版 · 14-19",
      "printedPage": "14-19",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=19",
      "paragraphs": [
        "Stop bar 以橫向紅燈表示必須停止，並常與後方引導燈配合控制跑道進入。正常操作不得穿越亮著的紅色停止線燈，即使認為已聽到進入許可，也應先停下向 ATC 釐清矛盾。",
        "不要自行推測「燈壞了所以可走」。許可與燈號不一致時，正確動作是保持停止並協調適用程序；這能在通訊誤認、控制操作失誤或設備問題造成風險前，保留最後一道防線。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-1：航空燈光、Stop Bar與RWSL",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html",
          "checked": "2026-09-20"
        }
      ],
      "points": [
        "黃色交替閃爍的 runway guard lights：警告接近跑道，不表示准許進入。",
        "橫向紅色 stop bar：停止；許可與亮紅燈矛盾時，停住並向 ATC 釐清。",
        "三盞黃色 clearance bar：提高等待點可見性，功能不同於紅色 stop bar。"
      ],
      "lessonBlocks": [
        {
          "title": "亮著紅色 stop bar 就不要跨越",
          "paragraphs": [
            "Stop bar是一排紅色停止燈，正常受控程序是獲得許可後停止燈熄滅，配合引入中心線燈引導。ATC口頭許可與紅燈矛盾時，保持停止並要求釐清。",
            "現行AIM明確提醒：即使收到進入或穿越許可，也不得跨越仍亮著的紅色stop bar。燈熄滅本身同樣不是獨立許可。"
          ],
          "check": {
            "question": "已收到cross runway，但紅色stop bar仍亮，能否照口頭指令跨過？",
            "answer": "不能。停住並告知ATC燈仍亮，取得釐清；不要自行判定燈故障而穿越。"
          }
        }
      ]
    },
    {
      "id": "obstruction",
      "english": "Obstruction Lights",
      "title": "障礙物燈",
      "parent": "lighting",
      "locator": "PHAK C 版 · 14-19",
      "printedPage": "14-19",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=19",
      "paragraphs": [
        "障礙燈以特定的紅色或白色持續／閃光配置，提高高塔等障礙物的可見性。它們提醒障礙位置，不代表附近沒有其他未設燈的物體，也不能以燈光亮度直接估算與障礙物的距離。",
        "夜間飛行應先用航圖與最低安全高度建立地形和障礙淨空，再把燈光當作確認。看不到燈可能是遮蔽、故障或角度問題，不能據此認定航圖所示障礙物已消失。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-1：機場燈光與目視進場系統",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "障礙燈是提示，不是完整障礙清單",
          "paragraphs": [
            "紅色障礙燈可固定或閃爍，白色高強度系統常依日夜調光，雙系統可日間白、夜間紅。機場內外均可能設置。",
            "燈失效、遮蔽或未設燈的物體仍可能存在；不能只靠尋找紅燈就判斷路徑無障礙，還要查圖與NOTAM。"
          ]
        }
      ]
    },
    {
      "id": "new-lights",
      "english": "New Lighting Technologies",
      "title": "新型燈光技術",
      "parent": "lighting",
      "locator": "PHAK C 版 · 14-19",
      "printedPage": "14-19",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=19",
      "paragraphs": [
        "LED 等技術可改善能耗與維護，並使光色及亮度特性不同於傳統白熾燈。設備更新不代表所有機場同時採用相同設計，也不能假設不同夜視或增強視覺設備對新光源的呈現完全一致。",
        "熟悉的機場換燈後，遠方的視覺感受可能改變，但燈號功能仍要依官方配置解讀。使用特殊視覺系統時應了解相容性限制，避免把感測器看不見的燈誤認為現場未開啟。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-1：航空燈光、Stop Bar與RWSL",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "RWSL 自動警告與 ATC 許可分開",
          "paragraphs": [
            "Figure 14-35 的Runway Entrance Lights對進入／穿越跑道的航空器提供紅燈警告。系統使用場面監視等資料判斷衝突，與管制員發給你的許可是不同資訊來源。",
            "紅燈亮應停止並聯絡ATC；熄滅只表示此警告未亮，不等於可自行進跑道。原書2016年的機場數量是歷史統計。"
          ],
          "figure": {
            "label": "Figure 14-35 · Runway entrance lights",
            "page": "14-20",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=20"
          }
        },
        {
          "title": "THL 警告已對正航空器不要起飛",
          "paragraphs": [
            "Figure 14-36 的Takeoff Hold Lights向在起飛位置的航空器顯示紅色警告，提示前方跑道狀況不適合開始起飛。它與滑行入口REL的位置和面向不同。",
            "若燈光與許可矛盾，先保持安全並立即聯絡ATC；不能因「塔臺剛剛說可以」就忽視警告。"
          ],
          "figure": {
            "label": "Figure 14-36 · Takeoff hold lights",
            "page": "14-20",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=20"
          }
        }
      ]
    },
    {
      "id": "wind-indicators",
      "english": "Wind Direction Indicators",
      "title": "風向指示裝置",
      "parent": null,
      "locator": "PHAK C 版 · 14-20",
      "printedPage": "14-20",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=20",
      "paragraphs": [
        "風向袋顯示局部近地面風向與大致強度，風從較大的開口端吹入，袋尾指向下風。風向 T 及其他裝置的意義須按圖例確認；它們能提供即時參考，但無法完整描述整條跑道的陣風與風切。",
        "在無塔臺機場應把風向袋、天氣廣播及既有交通一起評估。若不同資料矛盾，可能是風正轉變或測量位置不同，不能只挑最有利的一項；應重新確認跑道選擇及側風餘裕。"
      ],
      "lessonBlocks": [
        {
          "title": "風袋看來風，四面體看落地方向",
          "paragraphs": [
            "Figure 14-37 中風袋大口朝來風，小尾指向下風，伸直及擺動程度提供風速／陣風線索。不要把尾巴指向誤當成風的來向。",
            "Wind tee或tetrahedron可能人工設定；四面體小端指落地方向，不能單憑它推算真實風。另查風袋、天氣資訊及塔臺指令。"
          ],
          "figure": {
            "label": "Figure 14-37 · Wind direction indicators",
            "page": "14-21",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=21"
          },
          "check": {
            "question": "風袋小尾指向東，風大致從哪裡來？",
            "answer": "由西吹來；風向通常以來向命名。"
          }
        }
      ],
      "references": [
        {
          "title": "FAA AIM 4-3：機場操作及地面程序",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_3.html",
          "checked": "2026-09-20"
        }
      ]
    },
    {
      "id": "patterns",
      "english": "Traffic Patterns",
      "title": "機場交通航線",
      "parent": null,
      "locator": "PHAK C 版 · 14-20",
      "printedPage": "14-20",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=20",
      "paragraphs": [
        "交通航線以離場、側風、下風、底邊與最後進場等航段，協助航空器建立可預期的動線。美國常見左航線，但公布的右航線、地形、噪音與塔臺指示可能改變配置；高度也應查當地資料。",
        "進入前應盡量在適當高度完成觀察與協調，避免下降插入既有交通。報告位置不會讓自己獲得優先權，直線進場也不應迫使已在航線上的航空器採取危險避讓。"
      ],
      "references": [
        {
          "title": "FAA AIM 4-3：機場操作及地面程序",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_3.html",
          "checked": "2026-09-20"
        },
        {
          "title": "FAA AC 90-66C：無塔臺機場操作",
          "url": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_90-66C.pdf",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "分段圓的轉彎臂畫出航線方向",
          "paragraphs": [
            "Figure 14-38 的landing strip indicators標出跑道排列，traffic pattern indicators協助辨識非標準轉彎方向。先選你要使用的進場端，再把短臂想像放大成base與final。",
            "一般固定翼左航線，但公布RP、地面指示或適用管制程序可能不同。航線高度也以公布資料為準，並辨清MSL與AGL、雲距以及不同機型航線。"
          ],
          "figure": {
            "label": "Figure 14-38 · Segmented circle and traffic pattern indicators",
            "page": "14-21",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=21"
          }
        }
      ]
    },
    {
      "id": "single-pattern",
      "english": "Example: Key to Traffic Pattern Operations— Single Runway",
      "title": "單跑道航線範例",
      "parent": "patterns",
      "locator": "PHAK C 版 · 14-21",
      "printedPage": "14-21",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=21",
      "paragraphs": [
        "單跑道範例可用來練習依風向選定使用方向，再識別每一航段的相對位置。以左航線為例，下風段位於跑道側方且航向相反，轉底邊和最後進場時仍需觀察前方、另一側及直線進場的交通。",
        "練習時先在圖上畫出預計加入點，再口述在哪裡確認高度、風、跑道與前機間隔。常見的斜角加入方式是建議技術之一，不應被背成所有機場與所有情境唯一合法的進場路徑。"
      ],
      "references": [
        {
          "title": "FAA AIM 4-3：機場操作及地面程序",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_3.html",
          "checked": "2026-09-20"
        },
        {
          "title": "FAA AC 90-66C：無塔臺機場操作",
          "url": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_90-66C.pdf",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "單跑道航線是有方向與高度的交通流",
          "paragraphs": [
            "Figure 14-39 依序辨認departure、crosswind、downwind、base、final。原圖建議在中場附近平飛加入downwind、保持航線高度至與進場端平齊，再依本機程序安排下降。",
            "留在航線時，越過離場端且到距航線高度300 ft以內再轉crosswind，是圖中的標準建議情境。離場可直出或在適當位置向航線側45°離開；不要拿示意圖替代地方程序或ATC。"
          ],
          "figure": {
            "label": "Figure 14-39 · Single-runway traffic pattern",
            "page": "14-22",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=22"
          },
          "check": {
            "question": "機場標高500 ft MSL、航線1,000 ft AGL，預期指示高度約多少？",
            "answer": "以正確高度表設定時約1,500 ft MSL；仍核對公布TPA及當日條件。"
          }
        }
      ]
    },
    {
      "id": "parallel-pattern",
      "english": "Example: Key to Traffic Pattern Operations— Parallel Runways",
      "title": "平行跑道航線範例",
      "parent": "patterns",
      "locator": "PHAK C 版 · 14-21",
      "printedPage": "14-21",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=21",
      "paragraphs": [
        "平行跑道的航線可能配置在兩條跑道外側，以減少交會，但實際方向必須查公布程序或依塔臺指示。跑道名稱相似、間距有限及底邊轉彎過頭，都是容易侵入相鄰航線的原因。",
        "最後轉彎前應再次確認 L／R 跑道與中線延伸方向。若轉彎過頭，不要用過大坡度或不協調操縱硬拉回去；應依安全程序重飛並保持對另一跑道交通的警覺。"
      ],
      "references": [
        {
          "title": "FAA AIM 4-3：機場操作及地面程序",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_3.html",
          "checked": "2026-09-20"
        },
        {
          "title": "FAA AC 90-66C：無塔臺機場操作",
          "url": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_90-66C.pdf",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "平行跑道要守住自己的航跡空間",
          "paragraphs": [
            "Figure 14-40 的兩個航線向外轉，圖中no transgression zone提醒勿穿入另一跑道的final或departure路徑。風漂會使地面航跡與機頭方向不同。",
            "若base轉final已過頭，不要低空大坡度或不協調急轉追回；依狀況及指令安全重飛、告知ATC。平行跑道也可能有尾流漂入，距離不是唯一判斷。"
          ],
          "figure": {
            "label": "Figure 14-40 · Parallel-runway traffic patterns",
            "page": "14-23",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=23"
          }
        }
      ]
    },
    {
      "id": "radio",
      "english": "Radio Communications",
      "title": "航空無線電通訊",
      "parent": null,
      "locator": "PHAK C 版 · 14-22",
      "printedPage": "14-22",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=22",
      "paragraphs": [
        "有效通訊的目的是讓雙方對位置、意圖與指示形成相同理解，並非把標準術語念得很快。發話前先聽，確認頻率與呼號，使用清楚簡潔的語句，重要指示則讀回以發現誤聽。",
        "若一次收到多項滑行或高度指示，應記錄並確認，而不是憑印象拼湊。聽不懂時使用普通清楚的語言請求重述，比回答收到後做錯更好；標準用語應幫助理解，不能取代理解。"
      ],
      "references": [
        {
          "title": "FAA AIM 4-2：無線電通訊程序",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "先聽頻率，再簡短清楚發話",
          "paragraphs": [
            "無線電負責建立共同情境，但不能取代目視或航空器控制。先確認選台與音量、聽有無既有通話，再發出受呼單位、完整呼號、位置和請求。",
            "塔臺、地面、進場及CTAF功能不同；頻率移交不自動附帶新的起飛或落地許可。"
          ]
        }
      ]
    },
    {
      "id": "radio-license",
      "english": "Radio License",
      "title": "無線電執照與適用範圍",
      "parent": "radio",
      "locator": "PHAK C 版 · 14-22",
      "printedPage": "14-22",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=22",
      "paragraphs": [
        "航空器電臺許可、無線電操作人員資格與 FAA 飛行員證照是不同制度。美國境內某些航空器電臺可適用免個別申請的條件，但國際飛行與其他操作可能需要不同文件，不能由國內經驗直接類推。",
        "準備跨境飛行時，應向適用的通訊主管機關及目的地制度確認航空器與人員各需哪些許可。持有機師證照不會自動等於持有所有無線電資格，也不能把原書簡述當成個案文件清單。"
      ],
      "references": [
        {
          "title": "FCC 96-421：航空器電臺的個別執照與適用例外",
          "url": "https://wireless.fcc.gov/releases/fcc96421.pdf",
          "checked": "2026-09-11"
        },
        {
          "title": "FCC §87.18：航空器電臺執照要求與豁免",
          "url": "https://www.ecfr.gov/current/title-47/chapter-I/subchapter-D/part-87/subpart-B/section-87.18",
          "checked": "2026-09-20"
        }
      ],
      "currentNote": "此 FCC 文件說明制度背景；跨境或特殊電臺的個案資格應另查現行 47 CFR Part 87 與主管機關，不將一般國內例外直接套用。",
      "lessonBlocks": [
        {
          "title": "操作員許可與電臺執照分開",
          "paragraphs": [
            "原文所述美國境內一般VHF操作可有FCC執照豁免；國際飛行、不同無線電設備或其他適用情況可能使航空器電臺及操作員分別需要文件。",
            "不要把FAA飛行員證書等同FCC無線電資格。規劃跨國航班時查FCC現行條件及目的地要求，不把1990年代的地區例子當成全球規則。"
          ]
        }
      ]
    },
    {
      "id": "radio-equipment",
      "english": "Radio Equipment",
      "title": "無線電設備與設定",
      "parent": "radio",
      "locator": "PHAK C 版 · 14-22",
      "printedPage": "14-22",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=22",
      "paragraphs": [
        "航空通訊設備包括收發機、音訊面板、耳機與天線，任何一環設定或故障都可能造成只收不發或只發不收。頻率顯示正確之外，還要確認正在使用的主動頻率、選定電臺與音量。",
        "懷疑通訊中斷時，可按適用檢查程序檢查音訊選擇、插頭與備用電臺，避免立刻認定所有設備失效。排故時仍須先操縱航空器與保持安全航跡，不要長時間低頭在面板間切換。"
      ],
      "references": [
        {
          "title": "FAA AIM 4-2：無線電通訊程序",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "VHF 視距限制與頻道間隔",
          "paragraphs": [
            "常見民航VHF通話頻段約118.000～136.975 MHz。高度增加往往改善視距，但山體遮蔽仍可能使接收中斷，不能只看距離。",
            "25 kHz與8.33 kHz代表頻道安排與設備相容性；8.33的使用範圍須查當地要求。頻率顯示相近不代表可任選，應精確使用公布頻道。"
          ]
        }
      ]
    },
    {
      "id": "radio-procedures",
      "english": "Using Proper Radio Procedures",
      "title": "正確通話程序",
      "parent": "radio",
      "locator": "PHAK C 版 · 14-22",
      "printedPage": "14-22",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=22",
      "paragraphs": [
        "首次呼叫通常應交代被呼叫單位、自己呼號、位置及需求，之後依對方回應保持清楚通訊。完整或縮短呼號有使用條件，不能過早省略到與同頻其他航空器相似，尤其數字相近時要格外注意。",
        "跑道等待、穿越及其他重要指示應讀回關鍵內容與呼號。若聽到自己的呼號但後續內容不合理，應再確認；不要因頻率忙碌就假設每一段聽不清楚的話都符合原先預期。"
      ],
      "references": [
        {
          "title": "FAA AIM 4-2：無線電通訊程序",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "標準拼字避免相似字母誤聽",
          "paragraphs": [
            "Figure 14-41 是ICAO拼字與數字發音表；例如A用Alfa、B用Bravo、J用Juliett。英文普通單字或自己的綽號容易使關鍵字母失真。",
            "呼號相近時保留完整識別；跑道、等待點及高度等關鍵限制要讀回，不用roger代替必要讀回。沒聽懂就say again，不以猜測補上漏字。"
          ],
          "figure": {
            "label": "Figure 14-41 · Phonetic alphabet and numeral pronunciation",
            "page": "14-24",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=24"
          }
        }
      ]
    },
    {
      "id": "lost-comm",
      "english": "Lost Communication Procedures",
      "title": "通訊失效",
      "parent": "radio",
      "locator": "PHAK C 版 · 14-23",
      "printedPage": "14-23",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=23",
      "paragraphs": [
        "通訊失效要先區分設備問題、超出涵蓋與頻率錯誤，再依飛行規則、天氣及所處空域選擇適用程序。VFR 下可利用備用設備與塔臺燈光訊號；IFR 失聯的航路、高度與時序另有規定。",
        "7600 用來表示無線電通訊失效，但設定代碼不會自動解決交通或提供進場許可。若在 VFR 條件或後續遇到 VFR 條件，適用 IFR 失聯規則要求的處置與持續在 IMC 的情況不同，應按正式程序學習。"
      ],
      "references": [
        {
          "title": "FAA AIM 6-4：雙向無線電通訊失效",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap6_section_4.html",
          "checked": "2026-09-20"
        }
      ],
      "points": [
        "先飛行、再導航與處理通訊；檢查主動頻率、音量、音訊選擇、插頭及備用電臺。",
        "7600 表示通訊失效；如條件允許，可使用適用備用或緊急通訊管道聯絡。",
        "塔臺穩定綠燈：空中為准許著陸，地面為准許起飛；閃綠：空中返回等待後續著陸訊號，地面准許滑行。",
        "穩定紅燈：空中讓路並繼續盤旋，地面停止；閃紅：空中機場不安全、不要落地，地面滑離使用中跑道。",
        "交替紅綠：極度小心；閃白對地面表示返回機場起點。燈號需按空中／地面分辨並以適用程序確認。",
        "IFR 且持續在 IMC 時，航路、最低高度與許可界限／進場時序須依 14 CFR 91.185，不是只設定 7600 後任選機場下降。"
      ],
      "lessonBlocks": [
        {
          "title": "先控制航空器，再辨識失聯範圍",
          "paragraphs": [
            "確認音量、頻率、音源面板、耳機／麥克風及備用電臺，依機型程序處理。只失去發話與收發全失效不同；能接收就繼續監聽，依情況使用7600及燈號程序。",
            "無線電失效不自動授權進入所有受管制空域。IFR在VMC的處理與IMC下的失聯路線／高度規則不同，應依§91.185及適用程序；不要把本章VFR燈號例子當成完整IFR失聯程序。"
          ]
        },
        {
          "title": "塔臺燈號須區分地面與空中",
          "paragraphs": [
            "Figure 14-42 同一顏色在地面與空中可有不同意思。白天可依程序搖翼或移動副翼／方向舵，夜間可用適當燈光動作確認接收；先判斷訊號確實指向自己。",
            "選擇無塔臺備降可能降低通訊需求，但仍要評估天氣、交通、空域及航空器狀況，不能因失聯就忽略其他限制。"
          ],
          "figure": {
            "label": "Figure 14-42 · Light gun signals",
            "page": "14-25",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=25"
          },
          "table": {
            "caption": "塔臺燈號須區分地面與空中",
            "headers": [
              "訊號",
              "航空器在地面",
              "航空器在空中"
            ],
            "rows": [
              [
                "穩定綠",
                "准許起飛",
                "准許落地"
              ],
              [
                "閃綠",
                "准許滑行",
                "返回落地，後續等穩定綠落地許可"
              ],
              [
                "穩定紅",
                "停止",
                "讓其他航空器，繼續盤旋"
              ],
              [
                "閃紅",
                "滑離使用中跑道",
                "機場不安全，不要落地"
              ],
              [
                "閃白",
                "返回機場原起點",
                "不適用"
              ],
              [
                "紅綠交替",
                "格外小心",
                "格外小心"
              ]
            ]
          },
          "check": {
            "question": "空中看到閃綠是否已獲落地許可？",
            "answer": "不是，表示返回落地；正式落地許可為適當時機給的穩定綠。"
          }
        }
      ]
    },
    {
      "id": "atc",
      "english": "Air Traffic Control (ATC) Services",
      "title": "空中交通管制服務",
      "parent": null,
      "locator": "PHAK C 版 · 14-24",
      "printedPage": "14-24",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=24",
      "paragraphs": [
        "ATC 使用監視、通訊與程序管理交通，不同空域與服務下提供的隔離和資訊範圍不同。接受某種服務不代表所有風險都已轉交管制員，機師仍需遵守許可、維持適用目視避讓及航空器安全。",
        "例如 VFR flight following 可提高交通意識，但可能受工作量與覆蓋限制，且不等於已獲准進入所有受限制空域。需要穿越 Class B 時仍要取得相應明確許可，不能只因已分配代碼就進入。"
      ],
      "lessonBlocks": [
        {
          "title": "ATC 服務有範圍與條件",
          "paragraphs": [
            "Flight following、交通提示、向量與機場排序有助建立情境，但受雷達／通訊覆蓋、工作量及空域制度影響。主動清楚請求比假設管制員會自動提供更可靠。",
            "管制服務不取消適用的see-and-avoid責任。原書指向第12章氣象服務是交叉引用舊編號，此版本氣象服務為第13章。"
          ]
        }
      ]
    },
    {
      "id": "primary-radar",
      "english": "Primary Radar",
      "title": "一次雷達",
      "parent": "atc",
      "locator": "PHAK C 版 · 14-24",
      "printedPage": "14-24",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=24",
      "paragraphs": [
        "一次雷達利用航空器反射的電波估計距離與方位，不必由機上詢答機回覆。回波受航空器反射特性、距離、地形與雜波影響，因此沒有被清楚顯示的目標仍可能存在。",
        "一次雷達本身不直接提供完整識別與精確氣壓高度，管制系統需要結合其他來源。理解這點有助於避免把「管制員沒有報交通」當成天空已清空，尤其在低空或監視邊緣仍須保持掃視。"
      ],
      "references": [
        {
          "title": "FAA AIM 4-5：監視設備、ADS-B與限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_5.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "一次雷達測的是往返時間",
          "paragraphs": [
            "一次雷達用發射波及物體反射回波測距：R=c×Δt÷2，除以2是因電波走了來回。方位由天線指向取得；不是由航空器主動回報身份。",
            "地形、遮蔽、衰減與更新間隔影響顯示。原文最快4.7秒是特定設備描述，不能泛稱所有雷達；ADS-B也不是因用了GPS就完全不受遮蔽。"
          ]
        }
      ]
    },
    {
      "id": "atcrbs",
      "english": "ATC Radar Beacon System (ATCRBS)",
      "title": "ATCRBS 二次監視系統",
      "parent": "atc",
      "locator": "PHAK C 版 · 14-24",
      "printedPage": "14-24",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=24",
      "paragraphs": [
        "ATCRBS 由地面詢問與機載詢答機回覆配合，可傳送識別碼及適用的高度資訊。它與一次雷達互補，依賴機上設備正常設定，因此錯誤代碼或高度回報問題可能影響管制辨識。",
        "如果 ATC 要求確認代碼或高度，應先核對本機設定與指示，再清楚回報差異。不能因目視看見其他航空器，就假設它必然在二次監視畫面上；對方可能設備不足、故障或不在涵蓋內。"
      ],
      "references": [
        {
          "title": "FAA AIM 4-5：監視設備、ADS-B與限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_5.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "二次雷達需要航空器回答",
          "paragraphs": [
            "ATCRBS由地面詢問器、機載transponder與管制顯示組成。回覆代碼及適當的高度資料可讓目標更容易識別，但高度編碼及設備仍有誤差／故障可能。",
            "一次回波和二次回覆是不同來源；沒有transponder回覆不表示附近不存在航空器。ADS-B擴充監視能力，也不讓所有目標自動可見。"
          ]
        }
      ]
    },
    {
      "id": "transponder",
      "english": "Transponder",
      "title": "詢答機操作",
      "parent": "atc",
      "locator": "PHAK C 版 · 14-25",
      "printedPage": "14-25",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=25",
      "paragraphs": [
        "詢答機按 ATC 指定代碼或適用程序運作，具高度回報能力的模式會傳送氣壓高度資訊。IDENT 功能用來協助識別，通常依請求使用；它不是每次換頻後都要主動按的報到鍵。",
        "操作代碼時應避免不慎選到緊急代碼，並按設備程序完成設定。7700、7600 與 7500 各有不同意義；不知道某個代碼用途時，不能拿來試驗是否能引起管制員注意。"
      ],
      "references": [
        {
          "title": "FAA AIM 4-5：監視設備、ADS-B與限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_5.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "四位八進位碼共有4,096組",
          "paragraphs": [
            "每位只能0～7，共8⁴=4,096種。一般美國VFR用1200或其他適用指定碼；7500、7600、7700分別關聯劫機、通訊失效與緊急狀況，不能當作一般測試碼。",
            "Figure 14-43 的IDENT只在要求時使用；stop altitude squawk與stop squawk不同。設備模式名稱與地面操作依現行程序及手冊，不能因舊表有standby就假定所有地面操作都應待機。"
          ],
          "figure": {
            "label": "Figure 14-43 · Transponder phraseology",
            "page": "14-25",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=25"
          },
          "table": {
            "caption": "四位八進位碼共有4,096組",
            "headers": [
              "指令／代碼",
              "辨識重點"
            ],
            "rows": [
              [
                "SQUAWK指定碼",
                "設定指定識別碼"
              ],
              [
                "IDENT",
                "啟動識別功能"
              ],
              [
                "STOP ALTITUDE SQUAWK",
                "停止高度回報，與全關不同"
              ],
              [
                "1200",
                "一般美國VFR碼，仍服從指定"
              ],
              [
                "7500／7600／7700",
                "劫機／通訊失效／緊急"
              ]
            ]
          },
          "check": {
            "question": "為什麼不能設定1289？",
            "answer": "每位只能0～7，8與9不是有效transponder碼數字。"
          }
        }
      ]
    },
    {
      "id": "adsb",
      "english": "Automatic Dependent Surveillance– Broadcast (ADS-B)",
      "title": "ADS-B 監視",
      "parent": "atc",
      "locator": "PHAK C 版 · 14-26",
      "printedPage": "14-26",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=26",
      "paragraphs": [
        "ADS-B Out 廣播航空器的位置與其他資訊，ADS-B In 接收交通或部分飛航資訊，兩者不是同一功能。位置通常依賴導航來源，因此設備完整性、安裝與適用空域要求都需個別確認。",
        "交通顯示可能漏掉沒有相應設備或無法取得的目標，也可能有延遲。它適合引導目視搜尋與提高情境意識，不能被當成顯示器上沒有目標就可隨意轉彎或進入跑道的依據。"
      ],
      "references": [
        {
          "title": "FAA AIM 4-5：監視設備、ADS-B與限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_5.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "GPS 定位與 ADS-B 傳送是兩段鏈路",
          "paragraphs": [
            "機載設備先以GNSS等取得位置，再經1090ES或978 UAT廣播。GPS衛星提供定位，不是把所有ADS-B交通轉送到地面管制的衛星中繼。",
            "地面接收與機間通訊仍有視距、地形及設備覆蓋限制。ADS-B Out是發送自身資訊，In是接收顯示；有Out不保證能看天氣，1090ES也不是978 MHz FIS-B接收器。"
          ],
          "table": {
            "caption": "GPS 定位與 ADS-B 傳送是兩段鏈路",
            "headers": [
              "功能",
              "主要作用",
              "不可推論"
            ],
            "rows": [
              [
                "ADS-B Out",
                "廣播本機監視資訊",
                "本機一定有交通／天氣畫面"
              ],
              [
                "ADS-B In",
                "接收適用交通與資訊",
                "所有附近航空器都可見"
              ],
              [
                "GNSS位置來源",
                "提供定位與時間",
                "地形不會遮蔽資料鏈"
              ],
              [
                "978 UAT FIS-B",
                "接收地面廣播資訊",
                "1090ES Out可直接接收同服務"
              ]
            ]
          },
          "check": {
            "question": "ADS-B用GPS，是否代表山谷裡必定能收到地面站？",
            "answer": "不是。定位和資料鏈是不同環節，地面資料鏈仍可能被地形遮蔽。"
          }
        }
      ]
    },
    {
      "id": "traffic-advisories",
      "english": "Radar Traffic Advisories",
      "title": "雷達交通諮詢",
      "parent": "atc",
      "locator": "PHAK C 版 · 14-26",
      "printedPage": "14-26",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=26",
      "paragraphs": [
        "交通諮詢常以鐘點方向、距離、移動方向及已知高度描述附近目標，協助機師搜尋。鐘點方向以航空器航跡等參考產生，側風偏流或轉彎時，目視搜尋區需要配合實際情況調整。",
        "收到諮詢後應積極搜尋並如實回報是否看到，不要把交通畫面上的符號等同於已目視取得。若無法看到且距離持續縮小，可請求進一步協助；管制員的工作量也可能限制持續更新。"
      ],
      "references": [
        {
          "title": "FAA AIM 4-5：監視設備、ADS-B與限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_5.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "鐘點交通以航跡方向作參考",
          "paragraphs": [
            "Figure 14-44 比較有無風修正時，沿地面航跡的10點方向不一定正好是機鼻左前方同一角度。把距離、方向、高度和機型一起用來搜尋。",
            "ATC提示不是解除目視責任。看不到就說negative contact，不假裝目標已找到；顯示的未知高度目標也不能忽略。"
          ],
          "figure": {
            "label": "Figure 14-44 · Traffic advisories and wind correction",
            "page": "14-26",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=26"
          }
        },
        {
          "title": "TRSA、Class C、Class B 不同",
          "paragraphs": [
            "TRSA提供參加者的相關雷達服務，VFR參加本身通常自願，但所在地其他空域通訊義務仍適用。Class C及Class B的進入與隔離制度不同，不能互相替代。",
            "航路flight following也不自動成為Class B進入許可。比較服務時同時確認自己現在在哪一種空域、收到什麼明確許可。"
          ]
        }
      ]
    },
    {
      "id": "wake",
      "english": "Wake Turbulence",
      "title": "尾流亂流",
      "parent": null,
      "locator": "PHAK C 版 · 14-26",
      "printedPage": "14-26",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=26",
      "paragraphs": [
        "產生升力的機翼會形成尾渦，強度與重量、速度及構型等因素有關，常以重、慢、乾淨構型提醒高風險情境。尾流可能使後機產生難以抵抗的滾轉，尤其小翼展航空器接近大型機尾跡時。",
        "不能只用與前機的直線距離估計風險，還要考慮前機飛行路徑、旋轉及接地位置、時間和風。ATC 的間隔與通報能協助，但機師仍應判斷自身是否能安全接受。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-4：尾流特性與避讓",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_4.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "尾流可能超過後機滾轉控制能力",
          "paragraphs": [
            "尾流渦旋是升力相關流場的一部分，與噴射尾氣或螺旋槳滑流不同。後機即使翼展、速度看似足夠，也可能遇到強烈滾轉或結構載荷。",
            "先想前機走過的三維路徑、風向與時間，再決定避讓；不能只憑自己現在看見前機很遠就認為尾流已消失。"
          ]
        }
      ]
    },
    {
      "id": "vortex-generation",
      "english": "Vortex Generation",
      "title": "尾渦如何形成",
      "parent": "wake",
      "locator": "PHAK C 版 · 14-26",
      "printedPage": "14-26",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=26",
      "paragraphs": [
        "機翼上下表面的壓力差使翼尖附近氣流捲繞，形成一對向後延伸的旋轉氣流。尾渦隨升力生成，並不是只有發動機尾噴造成；螺旋槳或旋翼航空器也可能產生重要的尾流危害。",
        "因此大型機即使推力較低地進場，仍可能留下強尾渦。起飛前要注意的是它何時離地並開始產生飛行尾跡，著陸時則關注實際接地位置，而非僅觀察發動機聲音或排氣。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-4：尾流特性與避讓",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_4.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "壓差使流場捲成一對反向渦旋",
          "paragraphs": [
            "Figure 14-45 顯示翼面壓差及尾流捲起後的兩個反向旋轉渦旋。主要危險能量集中在渦核附近，但實際結構、位置與衰減不是固定畫出的兩根管子。",
            "渦旋間距、下沉及向外移動都是判斷線索；不能把翼尖延長線當成精密邊界，貼著它飛。"
          ],
          "figure": {
            "label": "Figure 14-45 · Vortex generation",
            "page": "14-27",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=27"
          }
        }
      ]
    },
    {
      "id": "terminal-wake",
      "english": "Terminal Area",
      "title": "機場附近的尾流",
      "parent": "wake",
      "locator": "PHAK C 版 · 14-27",
      "printedPage": "14-27",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=27",
      "paragraphs": [
        "起降區的尾流特別危險，因後機高度低、改變路徑的空間有限，而且跑道與進場路線使航空器反覆經過相近位置。交叉與平行跑道的交通也可能把尾流帶到本機路徑上。",
        "前機已落地或離開跑道，尾渦並不會立即消失。應觀察風向與前機接地點，並把低空重飛、直升機懸停等活動也納入考慮；必要時請求增加間隔，而不是勉強接受不舒服的排序。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-4：尾流特性與避讓",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_4.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "Heavy、slow、clean 是強尾流線索",
          "paragraphs": [
            "在其他條件相近時，較重、較慢、收起增升裝置的航空器常產生更強尾流；不同機型、翼展與構型仍會改變結果。",
            "放襟翼可能改變渦系與衰減，但不會使大型機尾流突然無害。不要用「已放輪、已進場」作為縮短間隔的理由。"
          ]
        }
      ]
    },
    {
      "id": "enroute-wake",
      "english": "En Route",
      "title": "航路上的尾流",
      "parent": "wake",
      "locator": "PHAK C 版 · 14-27",
      "printedPage": "14-27",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=27",
      "paragraphs": [
        "巡航航空器同樣產生尾流，後方較低位置可能進入下沉的尾渦。高空尾流不一定伴隨可見凝結尾，因此不能只以有無白色尾跡判斷是否存在，也不能把它與一般晴空亂流完全混淆。",
        "若看到前方上層大型機沿相近航跡飛行，應留意垂直、橫向位置與風的關係，按許可協調避讓。不要未經協調任意偏離 IFR 航路，但也應及早提出需求以保留安全選項。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-4：尾流特性與避讓",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_4.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "巡航高度仍有尾流問題",
          "paragraphs": [
            "高空低密度會影響渦強，且巡航速度較高，同樣地理間距所對應的時間較短。原文超過30 NM、低於前機2,000 ft的遭遇案例說明風險可能出現在想不到的位置。",
            "這些案例數字不是安全界限；仍要考慮風、航跡與垂直關係，需要時向ATC請求更合適的間隔或高度。"
          ]
        }
      ]
    },
    {
      "id": "vortex-behavior",
      "english": "Vortex Behavior",
      "title": "尾渦的下沉與漂移",
      "parent": "wake",
      "locator": "PHAK C 版 · 14-27",
      "printedPage": "14-27",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=27",
      "paragraphs": [
        "尾渦一般向後延伸、下沉，接近地面後會向外側移動並隨風漂移。輕微側風可能讓上風側尾渦停留在跑道附近，而下風側尾渦移向鄰近路徑；弱斜尾風尤其需要警覺。",
        "固定等待一小段時間並不保證所有情境均已安全，因尾渦消散受大氣條件影響。應把風、前機位置與適用間隔程序一起看，避免把教學中的典型下沉速度當成可精確倒數的公式。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-4：尾流特性與避讓",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_4.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "追蹤生成路徑，而不是前機現在位置",
          "paragraphs": [
            "Figure 14-46 以離地至接地標示主要飛行尾流來源。前機離開後，渦旋仍會下沉、被風平移並逐漸衰減；接地也不代表剛生成的全部尾流立刻消失。",
            "靠近地面時向外移動的渦旋可能受輕側風影響，一側滯留跑道、另一側移向鄰近跑道。輕微四分之一順風尤其值得注意，不能把等待固定兩分鐘當萬用保證。"
          ],
          "figure": {
            "label": "Figure 14-46 · Vortex behavior",
            "page": "14-27",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=27"
          },
          "check": {
            "question": "前機已滑離跑道，是否可推論其final上的尾流也已消失？",
            "answer": "不能。尾流會留在先前路徑附近並隨風移動，需要另外評估時間、風與進場軌跡。"
          }
        }
      ]
    },
    {
      "id": "vortex-avoidance",
      "english": "Vortex Avoidance Procedures",
      "title": "尾渦避讓方法",
      "parent": "wake",
      "locator": "PHAK C 版 · 14-28",
      "printedPage": "14-28",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=28",
      "paragraphs": [
        "跟隨較大航空器著陸時，通常應保持在其進場路徑之上，並在其接地點之後接地，前提是仍有足夠跑道與穩定進場條件。跟隨起飛的策略則需比較旋轉點與爬升路徑，不能盲目追上。",
        "若本機性能無法保持在前機爬升路徑上方，或指定接地点會使剩餘跑道不足，應要求延遲或選擇其他安全方案。尾流避讓不能以犧牲失速裕度、性能限制或地形淨空為代價。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-4：尾流特性與避讓",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_4.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "落地時避免飛進前機較低的尾流路徑",
          "paragraphs": [
            "Figure 14-47A示意在前機進場路徑之上並於其接地點之後落地；B提醒平行跑道也可能有漂移尾流；C示意跨越航跡時應考慮尾流位置。",
            "這些策略都有本機性能和穩定進場前提。若在前機接地點後落地會使剩餘距離不足，就增加間隔、重飛或改安排，不能為了尾流而勉強長落地。"
          ],
          "figure": {
            "label": "Figure 14-47 · Vortex avoidance procedures",
            "page": "14-29",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=29"
          }
        },
        {
          "title": "起飛避讓不能犧牲本機起飛性能",
          "paragraphs": [
            "跟隨大型機起飛常以在其旋轉點前離地並保持在其爬升路徑之上作規劃，但小飛機未必能做到。不能低於本機建議速度提早抬輪，也不能過度拉升企圖追上較高爬升路徑。",
            "交叉跑道、低空通過、touch-and-go與直升機也可能留下尾流。若無法建立安全路徑就等待或請求其他安排；ATC wake caution提醒不等於判定後機一定安全。"
          ],
          "check": {
            "question": "為在大型機旋轉點前離地，能否低於POH建議速度強行起飛？",
            "answer": "不能。應維持本機程序與性能限制，改用更大間隔或其他安全安排。"
          }
        }
      ]
    },
    {
      "id": "collision",
      "english": "Collision Avoidance",
      "title": "空中碰撞避免",
      "parent": null,
      "locator": "PHAK C 版 · 14-28",
      "printedPage": "14-28",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=28",
      "paragraphs": [
        "目視避讓需要有系統地掃描，而非偶爾望向窗外。固定相對方位且逐漸變大的交通可能具有碰撞風險，即使它在視野中幾乎不動，也不能因缺少明顯橫向移動就忽略。",
        "有優先權仍應採取必要行動避免碰撞，不能把讓路規則當成堅持航向的理由。電子交通、ATC 諮詢與乘員協助可補充掃視，但都無法保證列出附近所有目標。"
      ],
      "lessonBlocks": [
        {
          "title": "有優先權仍要避免碰撞",
          "paragraphs": [
            "目視避讓是持續工作，不只在加入航線前做一次。空域、雷達服務和交通顯示能提供資訊，卻無法保證沒有未被看見的目標。",
            "發現目標方位近乎不變而逐漸變大，需警覺接近衝突；依適用讓路規則及安全操控及早處理，避免等對方先動。"
          ]
        }
      ]
    },
    {
      "id": "clearing",
      "english": "Clearing Procedures",
      "title": "機動前的空域確認",
      "parent": "collision",
      "locator": "PHAK C 版 · 14-28",
      "printedPage": "14-28",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=28",
      "paragraphs": [
        "起飛、爬升、下降、轉彎與訓練機動前，都應檢查將要進入的空域。高翼、低翼、座艙柱及機身會形成盲區，必要時以適當小幅姿態改變取得視野，同時保持航空器控制。",
        "清空域不是完成一次轉彎就永久有效，交通會持續接近。訓練時可以口述正在檢查的方向與高度，讓教官知道掃描是否確實；每次機動後仍要重新評估新的盲區與相對位置。"
      ],
      "lessonBlocks": [
        {
          "title": "動作前先清查將要進入的空間",
          "paragraphs": [
            "進入轉彎、爬升、下降及各種訓練科目前，先掃描目標空域。高翼機可在安全條件下短暫抬起預計轉彎側機翼查看，低翼機則短暫降低該側機翼查看。",
            "這是克服遮蔽的掃描技巧，不是鼓勵突然或大幅搖翼；維持協調操控並注意相反方向及上下方的盲區。"
          ]
        }
      ]
    },
    {
      "id": "training",
      "english": "Training Operations",
      "title": "訓練活動中的交通警戒",
      "parent": "collision",
      "locator": "PHAK C 版 · 14-30",
      "printedPage": "14-30",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=30",
      "paragraphs": [
        "練習失速、慢飛或轉彎時，注意力容易集中在姿態和儀表，忽略練習區內其他航空器。訓練前應安排觀察責任、完成適當清空域程序，並在每次機動之間持續重新搜尋。",
        "雙人座艙也不能假設另一人一定在看外面。可明確分工誰操縱、誰監看交通，並以口述方式確認；進入熟悉的練習區仍須保持警覺，因其他學員可能同時選擇相同高度與參考點。"
      ],
      "currentNote": "提供的目錄未列此節頁碼；已依 FAA C 版第十四章正文補為 14-30。分章來源使用 16_phak_ch14_0.pdf，避免連到頁碼不同的舊檔。",
      "lessonBlocks": [
        {
          "title": "把 clearing 說出來但不能只喊口號",
          "paragraphs": [
            "訓練中口述clear left／right／above／below能協助教官確認學生有意識地搜尋。慢飛、失速、轉彎等科目前都要實際查看。",
            "說出clear只反映當次能看到的區域，不保證天空完全無人；過程中仍要重複掃描，分配教官與學生的監控工作。"
          ]
        }
      ]
    },
    {
      "id": "scanning",
      "english": "Scanning Techniques for Traffic Avoidance",
      "title": "交通掃視技巧",
      "parent": "collision",
      "locator": "PHAK C 版 · 14-30",
      "printedPage": "14-30",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=30",
      "paragraphs": [
        "有效掃視以短距離、有停留的眼球移動把不同區域帶入中央視野，讓眼睛有時間發現目標。單次長幅快速掠過天空容易漏看，低對比、逆光、空間近視與視線遮蔽也會降低辨識能力。",
        "可把前方天空分成約十度的小區塊，逐區停留至少約一秒，再檢查側方與上、下方。這是建立搜尋習慣的技術，不是只要照秒數做就能保證發現所有交通；仍需配合航跡與已知目標調整。"
      ],
      "references": [
        {
          "title": "FAA AIM 4-5：監視系統、ADS-B 限制及目視避讓",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_5.html",
          "checked": "2026-09-11"
        }
      ],
      "currentNote": "提供的目錄未列此節頁碼；已依 FAA C 版第十四章正文補為 14-30。分章來源使用 16_phak_ch14_0.pdf，避免連到頁碼不同的舊檔。",
      "lessonBlocks": [
        {
          "title": "分區停留掃描比快速掃過更有效",
          "paragraphs": [
            "眼睛需要時間對焦，擋風柱、機翼、陽光與低對比都會藏住交通。將視野分成小區逐段停留觀察，再查看不同高度，避免只盯正前方。",
            "長時間看近處平板後應重新對焦遠處；空白天空也可能讓眼睛停在較近焦距。使用系統性掃描並減少不必要低頭時間。"
          ]
        }
      ]
    },
    {
      "id": "see-avoid",
      "english": "Best Practices to See and Avoid",
      "title": "看見並避讓的良好習慣",
      "parent": "collision",
      "locator": "PHAK C 版 · 14-30",
      "printedPage": "14-30",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=30",
      "paragraphs": [
        "把電子交通提示加入掃視，可幫助知道哪個方向需要更仔細搜尋，但不應長時間盯住螢幕等待目標出現。顯示器可能缺少未裝 ADS-B Out 或無法被系統取得的航空器，因此畫面不是完整交通清單。",
        "飛前完成平板設定、減少不必要低頭時間，並請乘員以鐘點方向協助指出交通。進入跑道前也要看最後進場與航線，不要因已取得許可就省略外部確認。"
      ],
      "references": [
        {
          "title": "FAA AIM 4-5：監視設備、ADS-B與限制",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_5.html",
          "checked": "2026-09-20"
        }
      ],
      "currentNote": "提供的目錄未列此節頁碼；已依 FAA C 版第十四章正文補為 14-30。分章來源使用 16_phak_ch14_0.pdf，避免連到頁碼不同的舊檔。",
      "lessonBlocks": [
        {
          "title": "交通顯示用來引導目視搜尋",
          "paragraphs": [
            "ADS-B In告警能提醒朝哪個方位搜尋，卻可能看不到未裝Out／transponder或未被轉送的目標。不要把畫面空白當成機場上空完全淨空。",
            "將掃描、聆聽和畫面交叉核對；非必要輸入在工作量高時延後。交通提示與TCAS resolution advisory是不同等級訊息，不應混用其處置規則。"
          ],
          "check": {
            "question": "平板交通圖上沒有目標，能否不掃描直接進跑道？",
            "answer": "不能。仍檢查跑道及進場交通、遵守許可，顯示可能漏掉航空器。"
          }
        }
      ]
    },
    {
      "id": "deviations",
      "english": "Pilot Deviations (PDs)",
      "title": "機師偏離與違規",
      "parent": "collision",
      "locator": "PHAK C 版 · 14-31",
      "printedPage": "14-31",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=31",
      "paragraphs": [
        "Pilot deviation 指機師行為違反適用規定，可能發生於空中或地面，例如未經許可進入空域、偏離高度或跨越等待線。理解典型成因的目的，是建立早期發現與修正機制，而非只背違規名稱。",
        "若察覺位置或許可不一致，應先保持安全並及時聯絡 ATC，不要試圖悄悄修正到看不出來。緊急情況或避撞指示可能涉及不同規則，仍須依適用程序執行與通報。"
      ],
      "lessonBlocks": [
        {
          "title": "偏離可能發生在空中或地面",
          "paragraphs": [
            "Airborne deviation包括未遵守高度、航向、程序或進入需許可的空域；surface deviation可包含越線、錯走路線及未獲准起降。預先規劃、讀回及保留地理裕度可減少錯誤。",
            "緊急狀況及適用TCAS RA處置有其規定，偏離後應盡快告知ATC；不能把一般交通提示當成同等授權。GPS較精確也不是貼空域邊界或越界的理由。"
          ]
        }
      ]
    },
    {
      "id": "incursion",
      "english": "Runway Incursion Avoidance",
      "title": "預防跑道侵入",
      "parent": "collision",
      "locator": "PHAK C 版 · 14-31",
      "printedPage": "14-31",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=31",
      "paragraphs": [
        "跑道侵入涉及航空器、車輛或人員不正確地出現在供起降使用的跑道保護區，可能破壞需要的隔離。預防要從飛前讀圖、寫下滑行許可、確認跑道及維持低頭工作管理開始。",
        "每次接近等待線都應重新問：這是哪條跑道、我現在的許可是什麼、外面是否安全。若迷路，停在安全位置請求協助；隨意轉彎找回路線，可能把小錯誤變成侵入。"
      ],
      "references": [
        {
          "title": "FAA AIM 4-3：機場操作、跑道許可與 LAHSO",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_3.html",
          "checked": "2026-09-11"
        },
        {
          "title": "FAA：跑道入侵現行定義",
          "url": "https://www.faa.gov/airports/runway_safety/resources/runway_incursions",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "跑道入侵不必等到幾乎相撞才成立",
          "paragraphs": [
            "現行定義著重航空器、車輛或人員不正確地出現在供起降使用的受保護區域；不必已造成碰撞危險或實際失去隔離才算。原書舊定義與每日三起、65%等數字應視為當時背景。",
            "跑道入侵可來自飛行員、管制操作或車輛／行人。每次接近跑道都查位置、許可及交通，不因前方無人就越過hold line。"
          ],
          "check": {
            "question": "未獲准跨過等待線，當時跑道完全無其他飛機，是否一定不算入侵？",
            "answer": "不是。錯誤進入受保護區本身就可能構成跑道入侵，不以差點碰撞為必要條件。"
          }
        }
      ]
    },
    {
      "id": "incursion-causes",
      "english": "Causal Factors of Runway Incursions",
      "title": "跑道侵入的成因",
      "parent": "incursion",
      "locator": "PHAK C 版 · 14-32",
      "printedPage": "14-32",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=32",
      "paragraphs": [
        "常見因素包括複雜布局、相似呼號、預期偏差、分心、低能見度與錯誤讀回。事故往往不是單一因素，而是錯聽指示後又未查看標誌，最後在低頭操作時越線的連續失誤。",
        "可用多道確認打斷這條鏈：一人讀回、一人對圖、接近等待線停止非必要工作。單人飛行則以停下操作、簡化工作和主動請求逐步滑行指示補足，不要勉強一邊滑一邊完成複雜設定。"
      ],
      "references": [
        {
          "title": "FAA AIM 4-3：機場操作、跑道許可與 LAHSO",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_3.html",
          "checked": "2026-09-11"
        },
        {
          "title": "FAA：場面操作最佳實務與LUAW提醒",
          "url": "https://www.faa.gov/airports/runway_safety/pilots/best_practices",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "不熟悉、誤聽與分心會相互放大",
          "paragraphs": [
            "Figure 14-48 用場面情境提醒：飛前畫路線、標hot spots及等待點；滑行中維持抬頭，複雜指令寫下。準備做需要持續低頭的工作前，在合適位置停妥。",
            "不確定位置或路線時立即告知ATC並請求協助。不要為了跟上前機而猜路，也不要在已進入跑道後任意停在衝突位置做長時間查圖。"
          ],
          "figure": {
            "label": "Figure 14-48 · Runway incursion prevention",
            "page": "14-32",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=32"
          }
        }
      ]
    },
    {
      "id": "confusion",
      "english": "Runway Confusion",
      "title": "跑道與滑行道混淆",
      "parent": null,
      "locator": "PHAK C 版 · 14-32",
      "printedPage": "14-32",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=32",
      "paragraphs": [
        "跑道混淆可能導致對錯誤跑道起飛或著陸，甚至把滑行道當跑道。平行鋪面、施工改線、相似燈光與熟悉感都可能造成誤認，因此識別應依多個互相獨立的線索完成。",
        "最後進場可再次核對跑道編號、航向、左右關係與入口標記，起飛前則確認所占位置與許可。若任何一項不一致，應停止或重飛釐清，不要以「應該就是這條」壓過現場證據。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-3：機場標線、標誌與 EMAS",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html",
          "checked": "2026-09-11"
        },
        {
          "title": "FAA：跑道入侵現行定義",
          "url": "https://www.faa.gov/airports/runway_safety/resources/runway_incursions",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "辨識錯跑道與錯滑行道",
          "paragraphs": [
            "Runway confusion可能導致從錯跑道／滑行道起飛或降落；是否同時歸類為runway incursion取決於事件，不能把所有混淆都當同一統計類別。",
            "在加推力前核對許可、跑道號、航向及實際位置。2006年的錯跑道事故說明「已收到起飛許可」仍不保證自己已對正正確跑道。"
          ]
        }
      ]
    },
    {
      "id": "confusion-causes",
      "english": "Causal Factors of Runway Confusion",
      "title": "跑道混淆的成因",
      "parent": "confusion",
      "locator": "PHAK C 版 · 14-32",
      "printedPage": "14-32",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=32",
      "paragraphs": [
        "預期偏差會讓人只看到符合預先想法的資訊，例如習慣使用某跑道後，忽略今天改派另一條。夜間、疲勞與工作負荷會降低辨別力，施工或入口位移則使熟悉的視覺景象發生變化。",
        "事前可討論最容易混淆的相鄰鋪面，並設定具體確認點。重點不是反覆提醒自己小心，而是指定要看哪個編號、哪個標誌、哪個航向，讓確認變成可觀察的動作。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-3：機場標線、標誌與 EMAS",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html",
          "checked": "2026-09-11"
        }
      ],
      "lessonBlocks": [
        {
          "title": "同一入口可能通往多條跑道",
          "paragraphs": [
            "Figure 14-49 的36與斜向跑道靠得很近，追著彎曲中心線可能走錯。先在機場圖上確定轉彎後應朝哪裡，再用地面編號及航向核對。",
            "360° heading bug只是提醒，不能取代核對；若跑道當滑行路線使用，更要持續區分正在滑行與已到指定起飛位置。"
          ],
          "figure": {
            "label": "Figure 14-49 · Confusing runway intersection",
            "page": "14-33",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=33"
          }
        }
      ]
    },
    {
      "id": "atc-instructions",
      "english": "ATC Instructions",
      "title": "理解地面 ATC 指示",
      "parent": null,
      "locator": "PHAK C 版 · 14-33",
      "printedPage": "14-33",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=33",
      "paragraphs": [
        "地面指示要區分路線、等待界線、跑道穿越、進入等待與起飛，各自授權範圍不同。記錄時可把跑道號碼與等待要求特別圈出，避免長串滑行道名稱讓最重要的限制被淹沒。",
        "收到修訂後應更新整條有效指示，不能把新舊內容混在一起。若同時監看機場圖與外界太忙，可在安全位置停住重整；清楚知道下一步，比為了保持滑行速度而猜測更重要。"
      ],
      "references": [
        {
          "title": "FAA AIM 4-3：機場操作及地面程序",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_3.html",
          "checked": "2026-09-20"
        },
        {
          "title": "FAA：場面操作最佳實務與LUAW提醒",
          "url": "https://www.faa.gov/airports/runway_safety/pilots/best_practices",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "把滑行許可寫成可逐段追蹤的路線",
          "paragraphs": [
            "Figure 14-50 示範即時記下指令。先確認呼號與目的地，再逐個記via路線、cross及hold short，不把預計路線當成已收到的許可。",
            "不清楚時請求say again或progressive taxi；若無法安全照做，就及時說unable。監聽其他航班能增加情境理解，但不能把別人的許可套到自己。"
          ],
          "figure": {
            "label": "Figure 14-50 · Writing down taxi instructions",
            "page": "14-33",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=33"
          }
        }
      ]
    },
    {
      "id": "hold-short",
      "english": "ATC Instructions—“Hold Short”",
      "title": "Hold Short：在界線之前等待",
      "parent": "atc-instructions",
      "locator": "PHAK C 版 · 14-33",
      "printedPage": "14-33",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=33",
      "paragraphs": [
        "Hold short 要求在指定跑道或位置之前停住，必須讀回關鍵位置與呼號，並確保整架航空器都未侵入。指示可能針對跑道、滑行道或 ILS 臨界區，不能只記住「停一下」卻忘記停在哪裡。",
        "若等待線不明顯或你無法判斷距離，應提早停止並詢問。不要把前機停的位置當成你的標準，因航空器長度、指定路線與許可可能不同；位置確認始終要回到本機與本次指示。"
      ],
      "references": [
        {
          "title": "FAA AIM 4-3：機場操作及地面程序",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_3.html",
          "checked": "2026-09-20"
        },
        {
          "title": "FAA：場面操作最佳實務與LUAW提醒",
          "url": "https://www.faa.gov/airports/runway_safety/pilots/best_practices",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "等待限制針對整架航空器",
          "paragraphs": [
            "Figure 14-51 示範在跑道等待線前停止，機鼻及翼面都不得伸入。無塔臺時，也必須先檢查兩個方向和進場交通再決定進入。",
            "讀回跑道hold short時包含跑道識別與呼號，不用單一roger。若不知道是哪條線，先停在安全位置詢問。"
          ],
          "figure": {
            "label": "Figure 14-51 · Hold short of the runway",
            "page": "14-34",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=34"
          }
        },
        {
          "title": "先讀自己的位置，再讀前方跑道",
          "paragraphs": [
            "Figure 14-52 黑底C表示位於Charlie，紅底13–31表示相交跑道。這兩個訊息回答不同問題，可與機場圖及許可互相核對。",
            "即使已被分派使用13，也不能看到13就直接轉入；此處可能是需要等待或穿越的中段入口。"
          ],
          "figure": {
            "label": "Figure 14-52 · Runway 13–31 holding sign at Charlie",
            "page": "14-34",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=34"
          }
        },
        {
          "title": "讀回保留路線與停止點",
          "paragraphs": [
            "Figure 14-53 的例子是Runway 4、via Echo、hold short of Runway 25 at Delta。可把它拆成目的地、路線、限制三部分，再用呼號完整讀回。",
            "讀回只是在確認聽見的內容；若管制員沒有察覺錯誤，錯讀仍可能導致事件，因此也要與機場圖和自身位置驗證。"
          ],
          "figure": {
            "label": "Figure 14-53 · Taxi and hold-short readback",
            "page": "14-34",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=34"
          },
          "check": {
            "question": "聽到Runway 4 via Echo hold short Runway 25，是否已可穿越25？",
            "answer": "不可以，25正是必須等待的跑道；要等另外的明確穿越許可。"
          }
        }
      ]
    },
    {
      "id": "explicit-crossing",
      "english": "ATC Instructions—Explicit Runway Crossing",
      "title": "明確的跑道穿越許可",
      "parent": "atc-instructions",
      "locator": "PHAK C 版 · 14-34",
      "printedPage": "14-34",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=34",
      "paragraphs": [
        "穿越跑道需要適用的明確許可，滑行到指定跑道不代表可自行跨過中間所有跑道。許可應對應具體跑道，機師讀回後仍要確認等待線與外部交通，避免誤認另一個交叉點。",
        "即使那條跑道看起來沒有使用，仍不能把「不活動」當成可自行穿越的理由。若指示未包含所需穿越，應停在界線前詢問；重新確認比依過去習慣補上未說出的許可可靠。"
      ],
      "references": [
        {
          "title": "FAA AIM 4-3：機場操作及地面程序",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_3.html",
          "checked": "2026-09-20"
        },
        {
          "title": "FAA：場面操作最佳實務與LUAW提醒",
          "url": "https://www.faa.gov/airports/runway_safety/pilots/best_practices",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "每條跑道都要有明確處置",
          "paragraphs": [
            "Figure 14-54 先發via Alpha、hold short31，之後才另發cross31。不要從最終目的地推論已獲准跨越沿途跑道，也不要把前一次穿越許可套到下一條。",
            "原則適用於活動、非活動及關閉跑道；管制端的特殊程序不等於飛行員可自行推定多條穿越。進入前仍目視檢查，即使許可已收到。"
          ],
          "figure": {
            "label": "Figure 14-54 · Explicit runway crossing clearance",
            "page": "14-34",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=34"
          }
        }
      ]
    },
    {
      "id": "luaw",
      "english": "ATC Instructions—“Line Up and Wait” (LUAW)",
      "title": "Line Up and Wait：進入對正並等待",
      "parent": "atc-instructions",
      "locator": "PHAK C 版 · 14-34",
      "printedPage": "14-34",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=34",
      "paragraphs": [
        "LUAW 允許進入指定跑道對正等待，並不是起飛許可。航空器占用跑道後應持續注意最後進場、其他通話與等待時間，避免因預期很快獲准起飛而提早加速。",
        "如果等待時間超出合理預期，或聽到可能影響本機的其他許可，應主動詢問。起飛前再次確認自己的呼號、跑道與明確起飛許可，不能把另一架航空器收到的指示接成自己的下一步。"
      ],
      "references": [
        {
          "title": "FAA AIM 4-3：機場操作、跑道許可與 LAHSO",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_3.html",
          "checked": "2026-09-11"
        },
        {
          "title": "FAA：場面操作最佳實務與LUAW提醒",
          "url": "https://www.faa.gov/airports/runway_safety/pilots/best_practices",
          "checked": "2026-09-20"
        },
        {
          "title": "FAA JO 7110.65 3-9：LUAW及縮短跑道程序",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/atc_html/chap3_section_9.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "Line up and wait 不是起飛許可",
          "paragraphs": [
            "LUAW授權在指定跑道及入口對正等待，真正起飛仍需cleared for takeoff。交叉口起飛時要核對taxiway識別與可用長度，不能自動假設位在全長端。",
            "留意進場交通及預期延遲原因。若等待超過90秒仍無後續指示，或任何時候看出可能衝突，立即聯絡塔臺；90秒不是必須忍住不問的最低時間。"
          ],
          "check": {
            "question": "收到LUAW後見前機已離地，能否自行開始起飛？",
            "answer": "不能，仍需本機明確起飛許可；前機離開不等於限制已自動解除。"
          }
        }
      ]
    },
    {
      "id": "shortened",
      "english": "ATC Instructions—“Runway Shortened”",
      "title": "跑道縮短資訊",
      "parent": "atc-instructions",
      "locator": "PHAK C 版 · 14-35",
      "printedPage": "14-35",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=35",
      "paragraphs": [
        "跑道縮短可能改變起飛或著陸可用距離、入口位置與原有視覺線索。ATC 提醒 runway shortened 是重要資訊，但性能評估仍需使用適用的公布距離、機型資料及實際環境。",
        "若出發前的計算依全長完成，不能只聽到提醒後口頭接受而不重算。應確認縮短從哪一端開始、影響哪個操作階段，以及原先中止或接地計畫是否仍有效，必要時更換跑道或延後。"
      ],
      "references": [
        {
          "title": "FAA AIM 4-3：機場操作、跑道許可與 LAHSO",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_3.html",
          "checked": "2026-09-11"
        },
        {
          "title": "FAA JO 7110.65 3-9：LUAW及縮短跑道程序",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/atc_html/chap3_section_9.html",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "Shortened 要重新計算可用距離",
          "paragraphs": [
            "施工使跑道縮短時，ATIS及ATC會使用相應提醒；不能沿用熟悉的全長性能計算。交叉口起飛還要考慮入口到剩餘可用端的距離。",
            "核對TORA、TODA、ASDA、LDA與當期NOTAM，四者用途不同。EMAS、blast pad或關閉鋪面不能自行加入正常起飛／落地距離。"
          ]
        }
      ]
    },
    {
      "id": "landing-flow",
      "english": "Pre-Landing, Landing, and After-Landing",
      "title": "落地前、落地及脫離跑道",
      "parent": null,
      "locator": "PHAK C 版 · 14-35",
      "printedPage": "14-35",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=35",
      "paragraphs": [
        "落地前應完成跑道、出口與滑行路線預想，落地後先控制航空器與減速，再依可用出口安全脫離。不要為了趕上某出口而採取不適合速度的急轉，也不要在仍占用跑道時忙於整理座艙。",
        "整架航空器越過適用等待線後，再按程序切換頻率與執行落地後檢查。若出口後立刻面對另一條跑道，仍需新的適用許可；脫離一條跑道不會自動授權穿越下一條。"
      ],
      "references": [
        {
          "title": "FAA AIM 4-3：機場操作及地面程序",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_3.html",
          "checked": "2026-09-20"
        },
        {
          "title": "FAA：場面操作最佳實務與LUAW提醒",
          "url": "https://www.faa.gov/airports/runway_safety/pilots/best_practices",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "落地前先想出口，落地後先確定已清空",
          "paragraphs": [
            "進場前看機場圖、預期安全出口及相鄰等待線；高速時不接受自己無法安全完成的突然轉彎。離開應使用合適滑行道，不擅自轉入另一條跑道。",
            "整架航空器越過等待線後，按已收到的滑行指令移動；沒有後續許可就停止並聯絡。落地後檢查單及非必要調整等離開活動跑道、位置安全後再做。"
          ]
        }
      ]
    },
    {
      "id": "emas",
      "english": "Engineered Materials Arresting Systems (EMAS)",
      "title": "EMAS 跑道端攔阻系統",
      "parent": null,
      "locator": "PHAK C 版 · 14-36",
      "printedPage": "14-36",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=36",
      "paragraphs": [
        "EMAS 以可壓碎的工程材料設於特定跑道端，讓衝出跑道的航空器藉材料變形吸收能量並減速。它是降低衝出後果的設施，不是供正常起降使用的延長跑道，也不能加入公布起降距離。",
        "知道跑道端有 EMAS 不應使機師接受不足的性能餘裕。正常操作仍要依距離與條件決策；若真的進入攔阻床，處置應以適用 FAA 與機型程序為準，並及時通報狀況。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-3：機場標線、標誌與 EMAS",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html",
          "checked": "2026-09-11"
        },
        {
          "title": "FAA：EMAS 官方介紹與現行設置資訊",
          "url": "https://www.faa.gov/newsroom/engineered-material-arresting-system-emas-0",
          "checked": "2026-09-11"
        },
        {
          "title": "FAA：EMAS原理與現行資訊",
          "url": "https://www.faa.gov/airports/engineering/incursions_excursions/emas",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "EMAS 補足跑道末端可用緩衝空間",
          "paragraphs": [
            "Figure 14-55 展示跑道末端因道路、水域或地形無法提供理想安全區時的安排。EMAS透過輪子壓入特製材料消耗動能，降低overrun後果。",
            "它不是延長的正常跑道，也不能補償原本不足的起降性能。RSA尺寸與可用替代設計須看機場實際標準，不能把500×1,000 ft套所有場地。"
          ],
          "figure": {
            "label": "Figure 14-55 · Runway end safety area and EMAS",
            "page": "14-36",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=36"
          }
        },
        {
          "title": "材料、床長與機型共同決定效果",
          "paragraphs": [
            "Figure 14-56 的平面、剖面與斷面顯示setback、導入坡及側階。原書EMASMAX的可壓碎混凝土是特定設計例，不能推論所有現代系統材料相同。",
            "圖註40～70 kt描述設計情境，不保證所有床長、機重與進入速度都能完全停住。較輕GA機可能不足以壓入材料，效果有限。"
          ],
          "figure": {
            "label": "Figure 14-56 · EMAS plan, profile and section",
            "page": "14-37",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=37"
          },
          "check": {
            "question": "跑道後有EMAS，能否把它加到LDA用來接受原本停不下的落地？",
            "answer": "不能。EMAS是越出後果緩解設施，不是正常可用落地距離。"
          }
        }
      ]
    },
    {
      "id": "emas-incidents",
      "english": "Incidents",
      "title": "EMAS 案例的學習方式",
      "parent": "emas",
      "locator": "PHAK C 版 · 14-36",
      "printedPage": "14-36",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=36",
      "paragraphs": [
        "原書透過實際衝出事件說明 EMAS 能減少傷害與損壞，但案例呈現的是特定航空器、速度與進入條件的結果。成功案例不代表任何重量、方向或速度下都能保證停住，也不能用來替代性能限制。",
        "讀案例時可分成事件原因、攔阻過程與後果三部分，分別思考哪些因素在進入 EMAS 之前就能控制。把設施視為最後的減害措施，比把過往成功攔阻當成額外可用跑道更符合其用途。"
      ],
      "references": [
        {
          "title": "FAA：EMAS 官方介紹與現行設置資訊",
          "url": "https://www.faa.gov/newsroom/engineered-material-arresting-system-emas-0",
          "checked": "2026-09-11"
        },
        {
          "title": "FAA：EMAS原理與現行資訊",
          "url": "https://www.faa.gov/airports/engineering/incursions_excursions/emas",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "成功攔阻案例是歷史證據",
          "paragraphs": [
            "Figure 14-57 顯示航空器進入材料床後的情況；原書列1999～2011年若干成功案例，說明系統可以降低後果。",
            "這份舊清單不是截至今日全部事件，也不能概括所有事件都只有極小損害或沒有傷害。判斷本場效果要看設計機型與現況。"
          ],
          "figure": {
            "label": "Figure 14-57 · Aircraft arrested by EMAS",
            "page": "14-38",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=38"
          }
        },
        {
          "title": "Yeager 案例觀察輪子與材料",
          "paragraphs": [
            "Figure 14-58 的CRJ-200事件照片可看出輪子壓碎材料形成的痕跡，幫助理解減速不是靠纜索勾住航空器。",
            "成功停下不表示可以加推力自行滑出；材料、結構及起落架可能受損，後續移動應交由相應救援與維修處置。"
          ],
          "figure": {
            "label": "Figure 14-58 · CRJ-200 EMAS arrestment",
            "page": "14-38",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=38"
          }
        }
      ]
    },
    {
      "id": "emas-installations",
      "english": "EMAS Installations and Information",
      "title": "EMAS 設置與資料查詢",
      "parent": "emas",
      "locator": "PHAK C 版 · 14-37",
      "printedPage": "14-37",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=37",
      "paragraphs": [
        "不是每條跑道都有 EMAS，設置形式與涵蓋範圍也依場地和設計條件而異。原書列出的數量與機場名單只代表出版時資料，現今應查 FAA 官方資訊及該機場的有效出版品。",
        "飛前若想了解跑道端條件，可從機場圖、補充資料與 NOTAM 確認，而不是依記憶認定兩端都有。了解設施位置有助於事故後通報與救援，但不改變正常起降性能的可用距離。"
      ],
      "references": [
        {
          "title": "FAA：EMAS 官方介紹與現行設置資訊",
          "url": "https://www.faa.gov/newsroom/engineered-material-arresting-system-emas-0",
          "checked": "2026-09-11"
        },
        {
          "title": "FAA：EMAS原理與現行資訊",
          "url": "https://www.faa.gov/airports/engineering/incursions_excursions/emas",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "查現行機場資料，不背舊安裝總數",
          "paragraphs": [
            "Figure 14-59 的Boston Chart Supplement範例在ARRESTING GEAR／SYSTEM列出EMAS跑道。圖上的日期、距離及配置是教學歷史資料，不作本次飛行依據。",
            "原文63個跑道端、42個機場是舊統計。飛前真正需要確認的是本次使用跑道末端是否有EMAS、其位置及相關限制。"
          ],
          "figure": {
            "label": "Figure 14-59 · EMAS in the Chart Supplement",
            "page": "14-39",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=39"
          }
        },
        {
          "title": "機場圖定位 EMAS 與跑道末端",
          "paragraphs": [
            "Figure 14-60 把EMAS位置與照片連起來。先找跑道方向與末端，再看標示區，避免把旁邊鋪面、停止道或其他設施誤認為EMAS。",
            "把是否有EMAS納入離場與進場簡報，但仍按AFM／POH、公布距離和實際跑道條件計算性能。"
          ],
          "figure": {
            "label": "Figure 14-60 · EMAS on an airport diagram",
            "page": "14-40",
            "url": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=40"
          }
        }
      ]
    },
    {
      "id": "emas-pilot",
      "english": "Pilot Considerations",
      "title": "機師對 EMAS 的操作考量",
      "parent": "emas",
      "locator": "PHAK C 版 · 14-37",
      "printedPage": "14-37",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=37",
      "paragraphs": [
        "在可能衝出的情況下，機師仍應依適用程序維持方向控制與可用減速，避免為了躲避攔阻床而引入更高風險。FAA 的一般建議包括朝攔阻床方向保持直行，但實際處置仍要結合機型程序與當下控制能力。",
        "進入後應通報 ATC、評估火災與疏散需要，並依適用程序處理發動機與系統。不要假設航空器停住就能自行滑出；材料、起落架與結構可能受損，需要專業評估與回收安排。"
      ],
      "references": [
        {
          "title": "FAA AIM 2-3：機場標線、標誌與 EMAS",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html",
          "checked": "2026-09-11"
        },
        {
          "title": "FAA：EMAS 官方介紹與現行設置資訊",
          "url": "https://www.faa.gov/newsroom/engineered-material-arresting-system-emas-0",
          "checked": "2026-09-11"
        },
        {
          "title": "FAA：EMAS原理與現行資訊",
          "url": "https://www.faa.gov/airports/engineering/incursions_excursions/emas",
          "checked": "2026-09-20"
        }
      ],
      "lessonBlocks": [
        {
          "title": "不可避免進入時持續控制與減速",
          "paragraphs": [
            "若判斷將越出並進入EMAS，依飛機手冊持續執行中止起飛或最大適用落地減速程序，沿跑道中心線直進材料床，不為躲避而任意向兩側偏轉。",
            "系統被動工作，不需飛行員另行啟動；保持減速與方向控制。停住後不要嘗試自行滑出，依情況處理火災、撤離、救援與通報。"
          ],
          "table": {
            "caption": "不可避免進入時持續控制與減速",
            "headers": [
              "階段",
              "重點"
            ],
            "rows": [
              [
                "進入前",
                "持續適用減速程序，維持方向"
              ],
              [
                "進入材料床",
                "沿中心線，持續減速努力"
              ],
              [
                "停止後",
                "不要自行移動，處理後續緊急需求"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "summary",
      "english": "Chapter Summary",
      "title": "本章整合與練習",
      "parent": null,
      "locator": "PHAK C 版 · 14-38",
      "printedPage": "14-38",
      "source": "https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page=38",
      "paragraphs": [
        "本章能力可以用一次完整機場操作串起來：飛前查資料、辨識跑道與標誌、理解許可、控制地面工作量，再管理航線、交通與尾流。每個環節都需要把資訊轉成航空器的實際位置與動作。",
        "找一張陌生機場圖，設計停機坪到跑道的路線，再模擬跑道更換、停止線亮紅、LUAW 及落地後錯過出口。逐項說明在哪裡停止、應確認什麼與如何通報，檢查自己是否真的能運用本章概念。"
      ],
      "lessonBlocks": [
        {
          "title": "把一趟機場操作串成可口述的計畫",
          "paragraphs": [
            "飛前查機場圖、NOTAM與性能；到達前確認天氣、跑道、航線及尾流；地面逐段核對標誌、位置與許可。遇到不一致就及早說明並釐清。",
            "讀完後能回答：現在在哪裡、下一個必須停的點是哪裡、哪些交通可能衝突，以及若不能安全照做要怎麼改。這比只背圖號更能把知識轉成操作判斷。"
          ],
          "check": {
            "question": "已完成飛前資料查詢，滑行時又遇到與圖不符的關閉標誌，接下來如何處理？",
            "answer": "停止在安全位置，核對現況並向ATC或適當單位查明可用路線，不能以先前計畫為由繼續。"
          }
        }
      ]
    }
  ],
  "confusions": [
    {
      "title": "通報與許可",
      "clarification": "自行通報意圖不一定構成航管許可。",
      "example": "說出要穿越跑道不等於已獲准。"
    },
    {
      "title": "有地圖與資訊完整",
      "clarification": "臨時變更需另外確認。",
      "example": "圖上存在的滑行道可能暫時關閉。"
    },
    {
      "title": "位移入口、暫移入口與黃色箭頭形區",
      "clarification": "三者可用區段不同；不能把相連鋪面都加入著陸距離。",
      "example": "白箭頭前段可能可供起飛，黃色 chevrons 不供正常起降。"
    },
    {
      "title": "LUAW 與起飛許可",
      "clarification": "進入跑道對正等待尚未獲准起飛。",
      "example": "收到自己呼號與明確起飛許可後，才按程序開始起飛。"
    },
    {
      "title": "紅色停止線與口頭許可",
      "clarification": "亮紅 stop bar 與許可矛盾時，應停住向 ATC 釐清。",
      "example": "不能自行認定燈壞了就穿越。"
    },
    {
      "title": "交通畫面與完整目視搜尋",
      "clarification": "ADS-B In 可能漏掉未裝備或未被取得的交通。",
      "example": "畫面空白仍需在進入跑道前看最後進場。"
    }
  ],
  "scenario": "自編案例：學員接近一個不熟悉的交叉口，發現標誌和記憶中的路徑不同。較合理的是在安全位置停下核對圖面與所需許可，並澄清疑問，而非沿著前機繼續走。",
  "question": "不確定滑行路徑與等待位置時，較合理的是？",
  "options": [
    "跟著前機就好",
    "安全停止、核對並澄清",
    "先進入跑道再詢問"
  ],
  "answer": 1,
  "explanation": "先保持位置安全與明確，再確認路徑及適用許可，避免以猜測取代資訊。",
  "verified": true,
  "reader": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=335",
  "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=335",
  "detailMode": "outline",
  "checked": "2026-09-20",
  "coverageNote": "全章 90 節均已加入深入講解，共 112 個單元、12 張比較表、24 題理解練習與 Figure 14-1～14-60 官方原圖指引。補齊場面標誌、燈光、通訊、航線、尾流及 EMAS，並依現行 FAA 文件釐清 LAHSO、跑道入侵定義與 ADS-B 限制。"
};
