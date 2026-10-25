export const chapter={
  "id": "phak25c-16",
  "number": 16,
  "title": "導航",
  "english": "Navigation",
  "section": "第 16 章；16-1～16-35，全章目錄逐節講解",
  "goal": "把航向、航跡、風、時間與燃油計算連起來。",
  "primer": "航圖提供位置、地形、空域與導航資訊，使用前先確認種類、比例尺及有效性。真北、磁北與羅盤指示的基準不同，換算時應保留方向與修正的順序。",
  "terms": [
    "Heading · 航向",
    "Track · 航跡",
    "Variation / Deviation · 磁差／羅差"
  ],
  "prompts": [
    "你能從 TC、TAS、風、磁差與羅差卡，算出 CH、GS、航段時間與用油，並檢查方向合理嗎？",
    "在 090 radial 上向台飛時，OBS、TO／FROM 與機頭方向分別代表什麼？",
    "若 GPS 位置不可信或目的地關閉，你能用哪些資料重新定位並計算轉降燃油？"
  ],
  "keyPoints": [
    "分辨真航線、真航向、磁航向、羅盤航向及實際航跡",
    "依原書四步作風三角，連結 TAS、GS、時間與燃油",
    "用目視領航和推測航法交叉驗證電子位置",
    "辨別 VOR 徑向線／TO–FROM、CDI 模式、ADF 方位與 DME 斜距",
    "理解 GPS／RAIM 限制及 VFR 計畫啟用、關閉與改航"
  ],
  "detailSections": [
    {
      "id": "intro",
      "english": "Introduction",
      "title": "導航導論",
      "parent": null,
      "locator": "PHAK C 版 · 16-1",
      "printedPage": "16-1",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=1",
      "paragraphs": [
        "導航要持續回答目前在哪裡、應往哪裡、何時抵達，以及燃油是否足夠。本章把航圖、目視領航、推測航法與電子導航串起來；電子設備提供位置，機師仍須判斷航路是否符合地形、天氣、空域與性能條件。",
        "一條螢幕上的直線只連結兩個座標，並未替你確認中間山脈、限制區或低雲。練習應同時保留預定航向、檢查點、預計時間與替代機場，再以實際觀察修正計畫，而非只追著導航線飛行。"
      ],
      "references": [
        {
          "title": "FAA AIM 5-1：飛前準備、NOTAM 與飛行計畫",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_1.html",
          "checked": "2026-09-12"
        }
      ],
      "lessonBlocks": [
        {
          "title": "導航是持續核對位置，不只是起飛前畫線",
          "paragraphs": [
            "Pilotage以地標定位，dead reckoning以時間、方向、速度推算，radio navigation使用導航設施；三者可互相驗證。先規劃航線、檢查點、天氣、航向、時間與燃油，再在飛行中比較預期與實際。",
            "本輪接續深化至RMI時間／距離估算與Figure 16-33，涵蓋飛行計畫、VOR及其儀表。CDI時間／距離估算至章末仍為既有概述，尚未標成全章深化完成。"
          ]
        }
      ]
    },
    {
      "id": "charts",
      "english": "Aeronautical Charts",
      "title": "航空圖的選用",
      "parent": null,
      "locator": "PHAK C 版 · 16-2",
      "printedPage": "16-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=2",
      "paragraphs": [
        "航空圖依用途呈現地形、機場、空域、導航台與障礙物，比例尺決定同一張紙能容納的範圍與細節。使用前先確認圖種、涵蓋區及生效日期，並了解圖例與高度基準，不可把不同圖種視為可互換的背景圖。",
        "電子地圖放大不一定增加原始資料的解析度，也不代表所有標籤都會顯示。若要辨識終端空域細節，應切到適當圖層與比例尺；近期關閉、導航台失效及臨時限制仍要查 NOTAM。"
      ],
      "references": [
        {
          "title": "FAA：Sectional 比例尺與現行更新週期",
          "url": "https://www.faa.gov/air_traffic/flight_info/aeronav/productcatalog/vfrcharts/sectional/",
          "checked": "2026-09-12"
        }
      ],
      "currentNote": "FAA 現行 Sectional 產品每 56 天更新；原書較長更新週期的敘述不可直接沿用，使用前仍需確認生效日期與 NOTAM。",
      "points": [
        "比例尺分母愈小，在同一紙面上呈現的地面範圍愈小，通常可容納更多細節。",
        "Sectional 1:500,000；TAC 1:250,000；原書 WAC 1:1,000,000。用錯量尺會直接影響距離、航時及燃油。",
        "圖面有效日期、導航資料庫週期與 NOTAM 各有角色；下載成功不等於內容已生效或完整。"
      ],
      "lessonBlocks": [
        {
          "title": "比例尺決定紙面距離所代表的地面距離",
          "paragraphs": [
            "比例尺1:n表示圖上一個長度單位對應地面n個相同單位。分母較小的TAC是較大比例尺，可呈現更多局部細節；分母較大的WAC涵蓋較廣但細節較少。",
            "電子地圖放大不一定增加原始資料精度；縮放過的PDF也不能直接用原印刷比例尺量紙面英寸，除非確認印製倍率。"
          ],
          "table": {
            "caption": "比例尺決定紙面距離所代表的地面距離",
            "headers": [
              "圖種",
              "比例尺",
              "原尺寸1 inch約代表"
            ],
            "rows": [
              [
                "Sectional",
                "1:500,000",
                "6.86 NM／7.89 SM"
              ],
              [
                "TAC",
                "1:250,000",
                "3.43 NM／3.95 SM"
              ],
              [
                "歷史FAA WAC",
                "1:1,000,000",
                "13.71 NM／15.78 SM"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "sectional",
      "english": "Sectional Charts",
      "title": "Sectional 區域航空圖",
      "parent": "charts",
      "locator": "PHAK C 版 · 16-2",
      "printedPage": "16-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=2",
      "paragraphs": [
        "美國 Sectional 比例尺為 1:500,000，是常用的 VFR 導航圖，兼顧地形辨識與航路資訊。圖上包含機場、障礙物、地形、空域及導航設施，但每類數字的單位和基準需按圖例辨認。",
        "例如山區的地形標高、障礙物頂高與括號內離地高不能混用，最大標高數字也不等於一條經核准的安全航路高度。應按實際航線另評估地形淨空、天氣與逃脫路徑，並使用現行有效版本。"
      ],
      "references": [
        {
          "title": "FAA：Sectional比例尺與56天更新",
          "url": "https://www.faa.gov/air_traffic/flight_info/aeronav/productcatalog/vfrcharts/sectional/",
          "checked": "2026-09-20"
        }
      ],
      "currentNote": "FAA 現行 Sectional 產品每 56 天更新；原書較長更新週期的敘述不可直接沿用，使用前仍需確認生效日期與 NOTAM。",
      "lessonBlocks": [
        {
          "title": "Sectional圖例先分高度、符號與邊界",
          "paragraphs": [
            "Figure 16-1 練習將機場資訊、導航設施、地形與空域分開讀。障礙物MSL頂高、AGL高度和空域底限可能用不同表示法，不能把每個數字都當作海拔。",
            "FAA現行Sectional每56天更新，原文半年／一年說法不再適用。還要核對生效日期與NOTAM；新障礙或臨時限制不一定已印在圖上。"
          ],
          "figure": {
            "label": "Figure 16-1 · Sectional chart and legend",
            "page": "16-2",
            "url": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=2"
          }
        }
      ]
    },
    {
      "id": "tac",
      "english": "VFR Terminal Area Charts",
      "title": "VFR 終端區域圖",
      "parent": "charts",
      "locator": "PHAK C 版 · 16-2",
      "printedPage": "16-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=2",
      "paragraphs": [
        "TAC 常以 1:250,000 比例尺呈現繁忙終端區，比 Sectional 更容易閱讀細小的空域分層與目視參考。同樣一公分紙面距離在 TAC 代表的實際距離較短，因此量距時必須使用正確比例尺。",
        "TAC 上的 VFR 路線可能有方向、高度及通訊條件，不能把畫出的路徑當成自動獲准穿越 Class B。接近複雜空域前，應先用圖理解各層底限，再判斷整條路線需要哪些許可。"
      ],
      "references": [
        {
          "title": "FAA：TAC比例尺與56天更新",
          "url": "https://www.faa.gov/air_traffic/flight_info/aeronav/productcatalog/vfrcharts/terminalarea/",
          "checked": "2026-09-20"
        }
      ],
      "currentNote": "TAC 比例尺 1:250,000，現行產品以 FAA 公布的有效版本與更新資訊為準。",
      "lessonBlocks": [
        {
          "title": "TAC讓繁忙終端區的細節更清楚",
          "paragraphs": [
            "Figure 16-2 比較TAC的1:250,000尺度。相同地面距離在TAC上是Sectional的兩倍長，較容易閱讀B類層架與視覺檢查點。",
            "FAA現行TAC亦每56天更新。圖上路徑與頻率供規劃使用，畫著VFR路徑不代表已取得B類許可；需要的通訊與授權仍須另行完成。"
          ],
          "figure": {
            "label": "Figure 16-2 · Terminal area chart and legend",
            "page": "16-3",
            "url": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=3"
          },
          "check": {
            "question": "Sectional上2 inches的航段，在原尺寸TAC上約多長？",
            "answer": "4 inches，因TAC比例尺分母減半，同一地面距離畫成兩倍長。"
          }
        }
      ]
    },
    {
      "id": "wac",
      "english": "World Aeronautical Charts",
      "title": "World Aeronautical Chart：歷史圖種",
      "parent": "charts",
      "locator": "PHAK C 版 · 16-2",
      "printedPage": "16-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=2",
      "paragraphs": [
        "原書介紹的 WAC 比例尺為 1:1,000,000，涵蓋較廣區域而細節較少，適合理解不同圖種的取捨。與 Sectional 相比，它在相同紙面長度上代表兩倍的實際距離，不適合用來取代較細的終端區判讀。",
        "FAA 已停止 WAC 系列的製作，舊圖可用來學習符號與比例尺，但不能當成現行導航資料。這項停用是 FAA 產品的狀態，不代表所有國家的同名或相同比例尺航圖都同時停用。"
      ],
      "references": [
        {
          "title": "FAA：WAC停止製作通知",
          "url": "https://www.faa.gov/air_traffic/flight_info/aeronav/safety_alerts/media/ChartingNotice_EVCG_15-02.pdf",
          "checked": "2026-09-20"
        }
      ],
      "currentNote": "歷史圖種：FAA 已停止 WAC 系列；保留原書小節作比例尺與圖種學習，不將舊 WAC 當成可取得的現行導航圖。",
      "lessonBlocks": [
        {
          "title": "WAC是本章的歷史圖種",
          "paragraphs": [
            "Figure 16-3 說明1:1,000,000圖如何以較少細節涵蓋較大區域。不要拿它取代細部終端導航或最新機場資料。",
            "FAA已停止WAC系列，依官方停止通知及現行產品清單選圖；這是FAA產品狀態，不表示全球所有相同比例尺航圖都停止。原文年度更新週期保留作版本背景。"
          ],
          "figure": {
            "label": "Figure 16-3 · Historical world aeronautical chart",
            "page": "16-4",
            "url": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=4"
          }
        }
      ]
    },
    {
      "id": "coordinates",
      "english": "Latitude and Longitude (Meridians and Parallels)",
      "title": "緯度、經度、經線與緯線",
      "parent": null,
      "locator": "PHAK C 版 · 16-3",
      "printedPage": "16-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=3",
      "paragraphs": [
        "緯度由赤道向北或南量到九十度，經度由本初子午線向東或西量到一百八十度。緯線平行赤道，經線在兩極會合；因此一分緯度約一海里，一分經度的地面距離則隨緯度改變。",
        "輸入座標時，要分清度分秒、度與小數分、十進位度。例如 25°30′N 是 25.5°N，不是 25.30°N；再核對 N／S、E／W，因為符號錯誤可能讓格式正確的座標落在完全不同的地區。"
      ],
      "points": [
        "自編：25°30′00″N＝25.5000°N；25.30°N＝25°18′00″N，相差 12′ 緯度，約 12 NM。",
        "一般換算：十進位度＝度＋分／60＋秒／3,600，再依南北／東西決定正負。",
        "緯度每分約 1 NM；經度每分約為 cos(緯度) NM，例如緯度 60° 處約 0.5 NM，不可全球固定為 1 NM。"
      ],
      "lessonBlocks": [
        {
          "title": "緯度由赤道量，經度由本初子午線量",
          "paragraphs": [
            "Figure 16-4 的緯線沿東西延伸，標示南北角距；經線連接兩極，標示東西角距。輸入座標要同時核對N／S、E／W與度分秒或十進位格式。",
            "1°有60角分，1角分有60角秒；39°30′N等於39.5°N，不是39.30°。一角分緯度約一海里，而一角分經度的距離會隨緯度改變。"
          ],
          "figure": {
            "label": "Figure 16-4 · Meridians and parallels",
            "page": "16-4",
            "url": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=4"
          },
          "check": {
            "question": "39°30′N與39.30°N相同嗎？",
            "answer": "不同。前者為39.5°N；後者的0.30°為18′。"
          }
        }
      ]
    },
    {
      "id": "time-zones",
      "english": "Time Zones",
      "title": "時區與 UTC",
      "parent": "coordinates",
      "locator": "PHAK C 版 · 16-3",
      "printedPage": "16-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=3",
      "paragraphs": [
        "地球約二十四小時自轉一周，因此每十五度經度約對應一小時，但民用時區邊界受行政安排影響，不能只由經度計算當地鐘點。航空報告與飛行計畫常使用 UTC，換算時還要處理日期跨越及夏令時間。",
        "自編例：臺北 12 日 01:30 為 UTC 11 日 17:30，因臺北比 UTC 快八小時。跨午夜的航班若只改小時、不改日期，可能選到錯誤的 TAF 時段或誤填起飛時間，應連日期一起記錄。"
      ],
      "lessonBlocks": [
        {
          "title": "時區圖呈現同一瞬間的不同鐘點",
          "paragraphs": [
            "Figure 16-5 是美國本土標準時間示意：PST10:00、MST11:00、CST12:00、EST13:00為同一瞬間。時區邊界與夏令時間有地方例外，不只由每15°經度決定。",
            "24小時制中9 a.m.為0900、1 p.m.為1300、10 p.m.為2200；別把上午下午標記漏掉。太陽過當地子午線是地方視太陽正午，不保證剛好等於民用鐘錶12:00。"
          ],
          "figure": {
            "label": "Figure 16-5 · US standard time zones",
            "page": "16-5",
            "url": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=5"
          }
        },
        {
          "title": "轉UTC連日期一起轉",
          "paragraphs": [
            "由美國標準時間換UTC，EST加5、CST加6、MST加7、PST加8；若該地該日採夏令時間，所加時差通常少1小時。不可不查適用日期就一律減1。",
            "例：11日21:30 EST換成12日02:30Z；若是EDT則為12日01:30Z。跨時區不會改變實際飛行耗時，但會改變當地鐘點及可用日照，日落應依目的地和日期查證。"
          ],
          "table": {
            "caption": "轉UTC連日期一起轉",
            "headers": [
              "原時間",
              "換算",
              "UTC"
            ],
            "rows": [
              [
                "11日21:30 EST",
                "加5小時",
                "12日02:30Z"
              ],
              [
                "11日21:30 EDT",
                "加4小時",
                "12日01:30Z"
              ],
              [
                "臺北12日01:30（UTC+8）",
                "減8小時",
                "11日17:30Z"
              ]
            ]
          },
          "check": {
            "question": "11日23:20 PST加8小時，只寫07:20Z夠不夠？",
            "answer": "不夠，日期已變成12日；完整為12日07:20Z。"
          }
        }
      ]
    },
    {
      "id": "direction",
      "english": "Measurement of Direction",
      "title": "方向、航線與航向",
      "parent": "coordinates",
      "locator": "PHAK C 版 · 16-5",
      "printedPage": "16-5",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=5",
      "paragraphs": [
        "方向通常由北開始順時針量測，東為九十度、南為一百八十度。Course 是計畫的對地航線方向，heading 是機頭指向，track 是實際對地移動方向；另須指出使用真北、磁北或羅盤哪一種基準。",
        "計畫向東飛而受到南風時，若仍把機頭朝正東，航跡會向北偏。GPS 顯示的對地航跡不是機頭航向；兩個數字不同可能是正常風修正，不應立刻認定儀表出錯。"
      ],
      "points": [
        "TC：真航線，預定對地路徑相對真北。",
        "TH：真航向，機頭方向相對真北；TC 加上有正負方向的 WCA 得 TH。",
        "MH：磁航向，由 TH 修正磁差後取得。",
        "CH：羅盤航向，依該機羅差卡把 MH 換成要保持的羅盤讀值。",
        "Track：實際對地航跡；風修正正確時，track 可與預定 course 一致，但 heading 仍可能不同。"
      ],
      "lessonBlocks": [
        {
          "title": "真航線以真北順時針量角",
          "paragraphs": [
            "Figure 16-6 羅盤玫瑰的北、東、南、西對應000／360、090、180、270°。在航圖畫出所需航線後，以合適位置的子午線為參考量真航線TC。",
            "子午線會向兩極收斂，原書建議在航段中點附近量測；長航段可能要分段，不能假設整條大圓航線在各處真方向都一樣。"
          ],
          "figure": {
            "label": "Figure 16-6 · Compass rose",
            "page": "16-6",
            "url": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=6"
          }
        },
        {
          "title": "航線與機頭方向先分清楚",
          "paragraphs": [
            "Figure 16-7 的短航段A到B為065°、反向約245°，互差180°。原書此例先假定無風，才讓heading與course重合。",
            "Course是計畫對地路徑，heading是機頭朝向，track是實際對地路徑。有風時回程的所需heading不能簡單把去程heading加180°，必須重新算風。"
          ],
          "figure": {
            "label": "Figure 16-7 · Course and reciprocal course",
            "page": "16-6",
            "url": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=6"
          },
          "check": {
            "question": "去程真航線065°，反向航線為何？若有風，機頭也一定245°嗎？",
            "answer": "反向航線約245°；有風時仍要另算WCA，機頭未必朝245°。"
          }
        }
      ]
    },
    {
      "id": "variation",
      "english": "Variation",
      "title": "磁差的概念",
      "parent": "coordinates",
      "locator": "PHAK C 版 · 16-6",
      "printedPage": "16-6",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=6",
      "paragraphs": [
        "真北依地理經線定義，磁北依地球磁場方向而定，兩者的夾角稱為 variation。磁差依位置與時間改變，航圖上的等磁差線能協助換算，但必須使用適當版本，不能把多年前的數值永遠沿用。",
        "導航流程應先由真航線配合風求真航向，再換成磁航向與羅盤航向。磁差修正只是在改變方向的參考基準，不會修正風吹造成的偏航；把磁差當成風修正角會留下實際的航路偏差。"
      ],
      "lessonBlocks": [
        {
          "title": "磁差是當地真北與磁北之間的角",
          "paragraphs": [
            "Figure 16-8 用不同線系表示地理與磁場方向。磁羅盤依當地磁場水平分量指向，不是把指針當作一直指向某固定地理座標的直線。",
            "原文北磁極71°N、96°W是過時位置；磁極與磁差會隨時間移動。實務以當期航圖及適用磁場模型為準，不拿舊座標重新推導航磁差。"
          ],
          "figure": {
            "label": "Figure 16-8 · True and magnetic meridians",
            "page": "16-6",
            "url": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=6"
          }
        },
        {
          "title": "等磁差線不是固定不動的地理線",
          "paragraphs": [
            "Figure 16-9 的isogonic line連同磁差點，agonic line表示零磁差。圖示西部偏東、東部偏西是原書背景，不是全境永久規則。",
            "NOAA的WMM會更新，磁差也依地點與日期改變。沿途跨不同磁差區時要用合適值；不要把一張舊示意圖的零磁差線當成現行導航資料。"
          ],
          "figure": {
            "label": "Figure 16-9 · Isogonic and agonic lines",
            "page": "16-7",
            "url": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=7"
          }
        }
      ],
      "references": [
        {
          "title": "NOAA NCEI：現行World Magnetic Model與磁場變化",
          "url": "https://www.ncei.noaa.gov/products/world-magnetic-model",
          "checked": "2026-09-20"
        }
      ]
    },
    {
      "id": "magnetic-variation",
      "english": "Magnetic Variation",
      "title": "真方向與磁方向換算",
      "parent": "variation",
      "locator": "PHAK C 版 · 16-7",
      "printedPage": "16-7",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=7",
      "paragraphs": [
        "由真方向換成磁方向時，東磁差通常相減、西磁差相加；反向換算則反過來。記口訣前先寫清楚目前是 T 轉 M 還是 M 轉 T，並將結果整理在零至三百六十度的範圍。",
        "自編例：真航向 090°、磁差 8°E，磁航向為 082°；若磁差改為 8°W，則為 098°。同一個東磁差，從磁航向換回真航向時要加回去，因此不能只記「東減」而不記換算方向。"
      ],
      "points": [
        "T → M：東磁差減、西磁差加；M → T：方向相反。",
        "自編跨零例：TH 005°、10°E → MH −005°，整理為 355°。",
        "不要把磁差套兩次：若工具已輸出磁航向，就不能再把它當真航向重做修正。"
      ],
      "lessonBlocks": [
        {
          "title": "真轉磁：東減、西加有指定方向",
          "paragraphs": [
            "Figure 16-10 示意磁北在真北東或西側。定義東磁差為正值V時，MH=TH−V；西磁差為負值，自然變成相加。反向由磁轉真時運算相反。",
            "原書9°E例：TH360°→MH351°，TH090°→081°，TH060°→051°。這只是磁差換算；有風時先由TC求TH，不能把未修風TC直接當機頭方向。"
          ],
          "figure": {
            "label": "Figure 16-10 · Effect of variation",
            "page": "16-7",
            "url": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=7"
          },
          "table": {
            "caption": "真轉磁：東減、西加有指定方向",
            "headers": [
              "已知真航向",
              "磁差",
              "所得磁航向"
            ],
            "rows": [
              [
                "360°",
                "9°E",
                "351°"
              ],
              [
                "090°",
                "9°E",
                "081°"
              ],
              [
                "060°",
                "9°E",
                "051°"
              ],
              [
                "005°",
                "9°E",
                "356°"
              ]
            ]
          },
          "check": {
            "question": "由MH081°換回TH，磁差9°E，是再減9°嗎？",
            "answer": "不是。反向換算要加9°，TH090°。"
          }
        }
      ]
    },
    {
      "id": "magnetic-deviation",
      "english": "Magnetic Deviation",
      "title": "羅盤受到航空器磁場影響",
      "parent": "variation",
      "locator": "PHAK C 版 · 16-7",
      "printedPage": "16-7",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=7",
      "paragraphs": [
        "Magnetic deviation 是航空器本身的磁性與電氣設備，使羅盤偏離應有磁北指示的誤差，與地理位置造成的磁差不同。機身磁場相對於羅盤的方向會隨航向改變，所以羅差通常不是全方向同一個固定值。",
        "羅差修正卡是針對該航空器與相關設備狀態建立，不能借用另一架同型飛機的卡片。新增設備、維修或座艙磁性物品也可能影響羅盤，若讀數不合理，應按維護與操作程序處理。"
      ],
      "lessonBlocks": [
        {
          "title": "羅差來自本機，磁差來自當地磁場",
          "paragraphs": [
            "Figure 16-11 用磁化引擎說明不同機頭方向可有不同偏差。實際來源還有電路、設備及其他金屬，不能只用一個固定補正值涵蓋所有航向。",
            "補償或swing compass是依適用維護程序進行的校準工作；換設備、改電氣配置或發現異常時需適當檢查，飛行員則使用有效的本機羅差卡。"
          ],
          "figure": {
            "label": "Figure 16-11 · Aircraft-induced compass deviation",
            "page": "16-8",
            "url": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=8"
          }
        }
      ]
    },
    {
      "id": "deviation",
      "english": "Deviation",
      "title": "依羅差卡取得羅盤航向",
      "parent": "coordinates",
      "locator": "PHAK C 版 · 16-8",
      "printedPage": "16-8",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=8",
      "paragraphs": [
        "羅差卡常以「欲飛磁航向」對應「應保持羅盤指示」的形式列出修正。使用時直接讀清楚兩欄的意義，必要時依適用方法內插，而不是看到某數值就自行假設那是應加或應減的羅差。",
        "自編卡片若列「FOR 090, STEER 092」，表示要保持磁航向 090°，羅盤應指示 092°。這只是在穩定狀態的修正；轉彎、加減速造成的磁羅盤動態誤差，仍需另外理解與交叉確認。"
      ],
      "lessonBlocks": [
        {
          "title": "FOR是所需磁航向，STEER是羅盤讀數",
          "paragraphs": [
            "Figure 16-12 中FOR090、STEER086，表示要飛磁航向090°時保持羅盤086°，不是要在090上再加86。卡片已給目的讀數，不需再套一次東減西加。",
            "本卡FOR180→STEER180，FOR210→STEER212；在適用線性內插下，FOR195的修正為+1°，故STEER196°。原書只寫+1是修正量，不是最終羅盤讀數。"
          ],
          "figure": {
            "label": "Figure 16-12 · Compass deviation card",
            "page": "16-8",
            "url": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=8"
          },
          "table": {
            "caption": "FOR是所需磁航向，STEER是羅盤讀數",
            "headers": [
              "所需磁航向FOR",
              "應保持羅盤STEER",
              "修正量"
            ],
            "rows": [
              [
                "060°",
                "057°",
                "−3°"
              ],
              [
                "090°",
                "086°",
                "−4°"
              ],
              [
                "180°",
                "180°",
                "0°"
              ],
              [
                "195°（內插）",
                "196°",
                "+1°"
              ],
              [
                "210°",
                "212°",
                "+2°"
              ]
            ]
          },
          "check": {
            "question": "FOR090 STEER086是否表示真航向090°時就指086°？",
            "answer": "不一定。FOR指磁航向，真航向還須先處理磁差；這裡也尚未替你計算風修正。"
          }
        }
      ]
    },
    {
      "id": "wind",
      "english": "Effect of Wind",
      "title": "風對航向與地速的影響",
      "parent": null,
      "locator": "PHAK C 版 · 16-8",
      "printedPage": "16-8",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=8",
      "paragraphs": [
        "航空器相對空氣的速度向量，加上空氣相對地面的風向量，得到對地速度向量。順逆風主要改變地速，側風要求機頭偏向來風側以維持航線；真正計算時，兩種效應會同時存在。",
        "要沿真航線 090°、TAS 120 kt 飛行，若真風由 360° 以 20 kt 吹來，需向左迎風約 9.6°，真航向約 080.4°，地速約 118.3 kt。純側風也會讓沿航線的空速分量略減，地速不會仍恰為 120 kt。"
      ],
      "points": [
        "向量關係：對地速度＝相對空氣速度＋風速度；氣象風向是吹來方向，畫風箭頭要指向相反方向。",
        "自編純側風：TC 090°、TAS 120 kt、風 360°／20 kt；WCA＝−arcsin(20／120)≈−9.6°，TH≈080.4°。",
        "沿線地速＝√(120²−20²)≈118.3 kt；風分量超過可抵消的側向空速時，不能硬套 arcsin 產生可行航向。",
        "若維持 TH 090° 不修正，同一例會向南漂，track 約 099.5°；不是保持所需東向航線。"
      ],
      "lessonBlocks": [
        {
          "title": "順逆風改變地速，不直接改變TAS",
          "paragraphs": [
            "Figure 16-13 假定TAS120 kt、沿東向飛：無風GS120，270°／20 kt風為順風GS140，090°／20 kt風為逆風GS100。風向數字是吹來方向。",
            "這是在均勻穩定風場下的向量模型；陣風、風切與風梯度可能影響空速和受力，不能把「風不影響TAS」擴大成任何風變化都無影響。"
          ],
          "figure": {
            "label": "Figure 16-13 · Headwind and tailwind effect",
            "page": "16-9",
            "url": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=9"
          }
        },
        {
          "title": "不修正側風時，地速是斜邊",
          "paragraphs": [
            "Figure 16-14 假定機頭090°、TAS120 kt，風向南20 kt；一小時後向東120 NM、向南20 NM，實際距離√(120²+20²)=121.66 NM，GS121.66 kt。",
            "但實際track約099.46°，不是想要的090°。不能因地速大於120就把側風誤認為有利的沿線順風；你已偏到航線南邊。"
          ],
          "figure": {
            "label": "Figure 16-14 · Uncorrected crosswind vector",
            "page": "16-10",
            "url": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=10"
          },
          "check": {
            "question": "風把飛機吹向南20 NM，能否只用東向120 NM當實際一小時位移長度？",
            "answer": "不能，位移有東、南兩個分量；合成長度約121.66 NM，但這不是保持東向航線的結果。"
          }
        },
        {
          "title": "Drift angle與WCA是不同角度",
          "paragraphs": [
            "Figure 16-15 的drift angle在heading與實際track之間；WCA則是為了保持預定course而選的heading差。不能把未修正時的漂移角永遠照抄成精確WCA。",
            "本例不修正時漂移約9.46°；若要抵銷側風，WCA=−arcsin(20/120)≈−9.59°。兩者接近但不是同一個算式。"
          ],
          "figure": {
            "label": "Figure 16-15 · Drift angle",
            "page": "16-10",
            "url": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=10"
          }
        },
        {
          "title": "TC→TH→MH→CH逐步走",
          "paragraphs": [
            "Figure 16-16 的TH088°、MH078°、CH074°示意真、磁、羅盤基準轉換：先TH減10°E磁差成MH，再按該例羅差修正為CH。此圖不是Figure 16-12全部航向的同一組卡值。",
            "風先決定要讓機頭偏多少，磁差改變北的基準，羅差補償本機指示。反過來由羅盤讀數求航跡時，不能只把CH當成TC。"
          ],
          "figure": {
            "label": "Figure 16-16 · True, magnetic and compass headings",
            "page": "16-10",
            "url": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=10"
          },
          "table": {
            "caption": "TC→TH→MH→CH逐步走",
            "headers": [
              "步驟",
              "含義"
            ],
            "rows": [
              [
                "TC＋有正負號的WCA＝TH",
                "先決定相對真北的機頭方向"
              ],
              [
                "TH−東正西負的磁差＝MH",
                "換成磁北基準"
              ],
              [
                "MH依本機羅差卡＝CH",
                "取得羅盤應保持讀數"
              ]
            ]
          }
        },
        {
          "title": "迎風偏航後，沿線分量仍要重算",
          "paragraphs": [
            "Figure 16-17 示意機頭向來風側偏，讓track回到course。對TC090、TAS120、風360／20的本章教學例，TH約080.41°，沿線GS=√(120²−20²)=118.32 kt。",
            "圖中075°是示意航向，沒有給足同一組風速條件，不應拿它替換本例080.41°。側風需要占用部分空速分量；若所需抵銷的側風超過TAS，就沒有這種穩定保持航線的解。"
          ],
          "figure": {
            "label": "Figure 16-17 · Wind correction angle",
            "page": "16-11",
            "url": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=11"
          },
          "check": {
            "question": "修正純側風之後，GS仍必定等於TAS嗎？",
            "answer": "不是，本例約118.32 kt，低於120 kt；需要保留向北的空速分量抵消向南風。"
          }
        }
      ]
    },
    {
      "id": "calculations",
      "english": "Basic Calculations",
      "title": "導航基本計算",
      "parent": null,
      "locator": "PHAK C 版 · 16-11",
      "printedPage": "16-11",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=11",
      "paragraphs": [
        "時間、距離、地速與燃油互相關聯，但公式必須使用相容單位。海里配節時，時間要以小時計；若使用分鐘，需加入六十的換算。對地航段時間用地速，不是直接拿指示空速或真空速代入。",
        "計算後可做量級檢查：地速 120 kt 等於每分鐘兩海里，所以三十分鐘應約六十海里。如果答案成為三千六百海里，問題通常在小時與分鐘混用，而不是飛行電腦本身失準。"
      ],
      "points": [
        "T（小時）＝D（NM）／GS（kt）；T（分鐘）＝60×D／GS。",
        "D（NM）＝GS（kt）×T（小時）；GS（kt）＝60×D／T（分鐘）。",
        "燃油＝適用耗油率×時間；耗油率若用 US gal/h，時間也要用小時。",
        "所有算例是教學用；實際 TAS、階段耗油率與燃油需求依適用 AFM／POH、條件和規則。"
      ],
      "lessonBlocks": [
        {
          "title": "算式先寫單位，再看答案量級",
          "paragraphs": [
            "時間用小時時，kt×h得到NM，US gal/h×h得到US gal。若輸入分鐘就先除60，不要讓計算器自行猜單位。",
            "航行時間使用GS，風三角的航空器速度使用TAS。IAS、TAS及GS回答不同問題，混用即使算術正確也會得到錯誤計畫。"
          ]
        }
      ]
    },
    {
      "id": "minutes",
      "english": "Converting Minutes to Equivalent Hours",
      "title": "分鐘換成小時",
      "parent": "calculations",
      "locator": "PHAK C 版 · 16-11",
      "printedPage": "16-11",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=11",
      "paragraphs": [
        "把分鐘換成小時需除以六十，小時換回分鐘則乘六十。小數小時不是鐘面的分數表示，0.5 小時等於三十分鐘，0.1 小時等於六分鐘，不是十分鐘。",
        "自編例：一小時四十五分鐘為 1＋45÷60＝1.75 小時；七十五分鐘為 1.25 小時。計算燃油時若把 1:45 寫成 1.45，會低估時間與用油，應在導航紀錄上明確標示格式。"
      ],
      "lessonBlocks": [
        {
          "title": "小數小時不是鐘面分鐘",
          "paragraphs": [
            "30 min÷60=0.5 h；0.75 h×60=45 min。1:45是1+45/60=1.75 h，不是1.45 h。",
            "把每段時間記成一致格式並標單位；跨午夜另處理日期，不把UTC鐘點相減後的負數直接當航行時間。"
          ],
          "table": {
            "caption": "小數小時不是鐘面分鐘",
            "headers": [
              "時間",
              "小數小時"
            ],
            "rows": [
              [
                "30 min",
                "0.50 h"
              ],
              [
                "45 min",
                "0.75 h"
              ],
              [
                "1 h 30 min",
                "1.50 h"
              ],
              [
                "1 h 45 min",
                "1.75 h"
              ]
            ]
          },
          "check": {
            "question": "以1.45 h代替1小時45分，少算幾分鐘？",
            "answer": "1.45 h為87分鐘，少算18分鐘。"
          }
        }
      ]
    },
    {
      "id": "time",
      "english": "Time T = D/GS",
      "title": "時間：T＝D／GS",
      "parent": "calculations",
      "locator": "PHAK C 版 · 16-11",
      "printedPage": "16-11",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=11",
      "paragraphs": [
        "時間等於對地距離除以地速，當 D 使用 NM、GS 使用 kt，結果為小時。航路不同段落風與速度可能不同，應分段計算後相加；用出發時的一個地速代表全程，可能造成到達時間誤差。",
        "自編例：航段 75 NM、地速 100 kt，需要 0.75 小時，也就是 45 分鐘。若遇逆風使地速降至 75 kt，時間變為 60 分鐘；同一距離多出的十五分鐘，也必須反映在預計燃油中。"
      ],
      "lessonBlocks": [
        {
          "title": "時間T=D／GS",
          "paragraphs": [
            "原書210 NM÷140 kt=1.5 h，即1小時30分。1.5不是1小時50分，也不是90秒。",
            "這是假設整段GS固定的估算；若沿途風改變或含不同爬升階段，分段計算後再加總。"
          ],
          "check": {
            "question": "同為210 NM，GS由140降至105 kt，時間變多少？",
            "answer": "210÷105=2小時，比原計畫多30分鐘。"
          }
        }
      ]
    },
    {
      "id": "distance",
      "english": "Distance D = GS X T",
      "title": "距離：D＝GS×T",
      "parent": "calculations",
      "locator": "PHAK C 版 · 16-11",
      "printedPage": "16-11",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=11",
      "paragraphs": [
        "距離等於地速乘時間，使用節時需先把時間轉成小時。推估位置時，這個距離應沿實際或合理估計的對地航跡量出，而不是沿機頭方向畫線，否則側風會使推估位置偏離。",
        "自編例：地速 110 kt 持續飛行 18 分鐘，距離為 110×18÷60＝33 NM。這是該段速度假設下的結果；若途中爬升、轉彎或風明顯改變，應分段處理並用地標再確認。"
      ],
      "lessonBlocks": [
        {
          "title": "距離D=GS×T",
          "paragraphs": [
            "原書120 kt×1.75 h=210 NM。使用的是對地速度，所以結果是沿該速度方向的對地距離，不是航空器相對空氣走過的距離。",
            "若地速隨時間變化，要把各段GS×時間加總，不能把某一瞬間的GPS地速套整趟。"
          ]
        }
      ]
    },
    {
      "id": "groundspeed",
      "english": "GS GS = D/T",
      "title": "地速：GS＝D／T",
      "parent": "calculations",
      "locator": "PHAK C 版 · 16-11",
      "printedPage": "16-11",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=11",
      "paragraphs": [
        "在兩個已確認位置之間，用已知距離除以實際經過時間，可估算該航段平均地速。計時起點與終點必須對應同一組地標，否則把遠方剛看到地標的時刻當成通過時刻，會造成系統性誤差。",
        "自編例：兩檢查點相隔 24 NM，實際用 12 分鐘，平均地速為 24÷0.2＝120 kt。再用這個地速更新下一段 ETA，但若下一段轉向，風分量會改變，不能無條件沿用。"
      ],
      "lessonBlocks": [
        {
          "title": "由檢查點反算實際GS",
          "paragraphs": [
            "原書270 NM÷3 h=90 kt。短航段可用已確認的兩個檢查點與經過時間估GS，再更新剩餘時間。",
            "教學例：18 NM用12 min，GS=18÷(12/60)=90 kt；剩60 NM若此地速持續，約40 min。前提是定位與計時可信，不把認錯地標的結果當成新風資料。"
          ],
          "check": {
            "question": "18 NM用12 min，直接算18÷12=1.5代表1.5 kt嗎？",
            "answer": "不是，1.5是NM/min，乘60才是90 kt。"
          }
        }
      ]
    },
    {
      "id": "knots-mph",
      "english": "Converting Knots to Miles Per Hour",
      "title": "節與英里每小時換算",
      "parent": "calculations",
      "locator": "PHAK C 版 · 16-11",
      "printedPage": "16-11",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=11",
      "paragraphs": [
        "一節是一海里每小時，海里與法定英里不是相同長度。近似換算為 kt×1.15078＝mph，反向則以 mph 除以 1.15078；一海里也等於 1.852 公里。",
        "自編例：100 kt 約為 115.1 mph。若距離表寫 statute miles，速度卻用 knots 而未換算，航時就會錯；使用舊機型 POH、航圖量尺或不同軟體時，應先確認每個欄位的單位。"
      ],
      "lessonBlocks": [
        {
          "title": "NM、SM與速度單位保持一致",
          "paragraphs": [
            "1 NM=1,852 m，1 SM=1,609.344 m，故1 kt約1.15078 mph。原書用1.15作心算，20 kt約23 mph。",
            "要從mph轉回kt需除1.15078，不能再乘。舊空速表可能以mph為主，風資料常用kt，混算前先統一單位。"
          ]
        }
      ]
    },
    {
      "id": "fuel",
      "english": "Fuel Consumption",
      "title": "燃油消耗與剩餘量",
      "parent": "calculations",
      "locator": "PHAK C 版 · 16-11",
      "printedPage": "16-11",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=11",
      "paragraphs": [
        "航段用油可以耗油率乘時間估算，但滑行、起飛、爬升、巡航與下降的耗油率未必相同。還要分清可用與不可用燃油、體積與重量，並另外保留適用法定與操作備份，而非只算剛好到目的地。",
        "自編例：巡航 1.5 小時、8 US gal/h，航段用油為 12 US gal；這不包含額外地面、爬升或備份用油。若實際地速低於計畫，應及早重算到達與改降後的剩餘量，不要等油量接近下限才處理。"
      ],
      "points": [
        "先分地面、爬升、巡航及其他階段，再加上適用備份與操作餘裕。",
        "自編分段例：爬升 15 min×10 US gal/h＝2.5 US gal；巡航 45 min×8 US gal/h＝6 US gal，兩段共 8.5 US gal，尚未含地面與備份。",
        "對相同距離，逆風降低 GS、增加航時，即使每小時耗油未變也會增加航段用油。",
        "不要把油量表總量等同全部可用燃油，US gallon 與 Imperial gallon 也不可混用。"
      ],
      "lessonBlocks": [
        {
          "title": "航段燃油用時間乘耗油率",
          "paragraphs": [
            "附件例：400 NM、GS100 kt、耗油5 US gal/h，航時4 h、航段用油20 US gal。這還沒包含地面、爬升及所需備份。若逆風使GS80而耗油率仍5，時間5 h、用油25 US gal。",
            "同一TAS不保證任何條件下耗油都一樣，還取決於高度、功率、混合比和機型。用AFM／POH適用條件的數據並監控實際消耗，不等低油量警示才開始重新規劃。"
          ],
          "table": {
            "caption": "航段燃油用時間乘耗油率",
            "headers": [
              "情境",
              "時間",
              "航段用油"
            ],
            "rows": [
              [
                "400 NM／100 kt／5 US gal/h",
                "4 h",
                "20 US gal"
              ],
              [
                "400 NM／80 kt／5 US gal/h",
                "5 h",
                "25 US gal"
              ]
            ]
          }
        },
        {
          "title": "Specific range的量綱要是距離／燃油",
          "paragraphs": [
            "對地specific range=GS÷耗油率，例如100 NM/h÷5 US gal/h=20 NM/US gal；逆算耗油率÷GS則是US gal/NM，不能也叫NM/gal。空氣相對航程則以TAS除耗油率。",
            "燃油體積會隨溫度變化，密度也會變；固定一批燃油的質量不會僅因熱脹冷縮而改變。原文把density與weight混寫並說密度較不受溫度影響，應改以質量、體積及密度三者關係理解。"
          ],
          "check": {
            "question": "GS100 kt、耗油20 lb/h，specific range是多少？",
            "answer": "100÷20=5 NM/lb；20÷100=0.2 lb/NM是它的倒數。"
          }
        },
        {
          "title": "巡航之外還要預算其他階段及備份",
          "paragraphs": [
            "先分地面、起飛／爬升、巡航與其餘階段。爬升時水平空速分量較小，但實際GS也受TAS與風影響，不能泛稱所有爬升GS必定低於所有巡航GS。",
            "美國§91.151一般飛機VFR起飛前須考量風和預報，有足夠燃油到第一預定落地點後，按正常巡航速度再飛日間至少30分、夜間45分；旋翼機為20分。這是特定法定最低要求，仍需操作餘裕，不能把備份當成日常必須消耗到盡的航段燃油。"
          ]
        }
      ],
      "references": [
        {
          "title": "14 CFR 91.151：VFR起飛前燃油要求",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-B/subject-group-ECFR4d5279ba676bedc/section-91.151",
          "checked": "2026-09-20"
        }
      ]
    },
    {
      "id": "computer",
      "english": "Flight Computers",
      "title": "飛行計算器",
      "parent": "calculations",
      "locator": "PHAK C 版 · 16-12",
      "printedPage": "16-12",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=12",
      "paragraphs": [
        "傳統 E6B 與電子飛行計算器都能處理時間、距離、風修正及單位換算，但它們只依輸入與模式算出結果。選錯真風／磁風、把 IAS 當 TAS，或讓舊航段資料留在欄位中，都可能得到看似精確的錯誤答案。",
        "使用前先寫下已知量與所求量，算完再檢查方向與量級。例如風從左側吹來，保持航線所需機頭應偏左；若結果偏右，先檢查風向是「來自」還是「吹往」，不要直接照數字飛。"
      ],
      "lessonBlocks": [
        {
          "title": "E6B與電子計算器都需要正確輸入",
          "paragraphs": [
            "Figure 16-18 展示plotter、機械E6B及電子計算器。機械計算面可處理時間速度距離等，風面處理向量；電子設備同樣要確認TAS、風來向、真磁基準及單位。",
            "用簡單量級檢查抓小數點錯誤：120 kt飛半小時應約60 NM，不會是6或600。工具顯示多位小數不代表預報風也有同等精度。"
          ],
          "figure": {
            "label": "Figure 16-18 · Plotter and flight computers",
            "page": "16-13",
            "url": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=13"
          }
        }
      ]
    },
    {
      "id": "plotter",
      "english": "Plotter",
      "title": "航線量角尺",
      "parent": "calculations",
      "locator": "PHAK C 版 · 16-12",
      "printedPage": "16-12",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=12",
      "paragraphs": [
        "Plotter 結合量角與比例尺，先把航線方向相對於經線讀成真航線，再用符合圖種的尺度量距。應讀經線而非任意紙邊，且要選向目的地方向的數字，避免誤讀相差一百八十度的反向刻度。",
        "把 Sectional 用的尺量在 TAC 上，可能得到錯一倍的距離。電子列印或縮放過的航圖也可能改變紙面尺度；應用圖上的比例尺或適用量測工具確認，不要假定所有印出的圖都維持原尺寸。"
      ],
      "lessonBlocks": [
        {
          "title": "Plotter先選正確圖種與距離刻度",
          "paragraphs": [
            "量角器讀航線角，尺邊讀距離；常有Sectional與其他圖種、NM與SM多套刻度。先看標籤，再把航線端點對上刻度。",
            "同一半英寸，在原尺寸Sectional約3.43 NM，而TAC約1.71 NM。若打印縮放或螢幕任意縮放，改用與圖同步的比例尺或工具量距。"
          ],
          "check": {
            "question": "把TAC航段用Sectional尺讀，距離會偏大還是偏小？",
            "answer": "約大一倍，因錯用1:500,000而不是1:250,000的刻度。"
          }
        }
      ]
    },
    {
      "id": "pilotage",
      "english": "Pilotage",
      "title": "目視領航",
      "parent": null,
      "locator": "PHAK C 版 · 16-12",
      "printedPage": "16-12",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=12",
      "paragraphs": [
        "Pilotage 以地面特徵與航圖互相比對，確認位置及路線。好的地標要容易辨認、在適當時間看得見且不易與其他特徵混淆，例如明顯河流轉彎、道路交會或湖泊形狀，而非僅依一棟不穩定存在的建物。",
        "辨識時至少搭配方向、距離、周邊地形與預計通過時間。看到一座水塔就宣布定位，可能把相似城鎮混為一談；夜間、積雪或季節變化也會改變外觀，應準備替代地標與其他導航方法。"
      ],
      "lessonBlocks": [
        {
          "title": "檢查點要能與周圍特徵共同辨認",
          "paragraphs": [
            "選河流交會、湖岸形狀、鐵路與主要道路等可由多個特徵確認的位置。航線兩側的明顯邊界可幫助限制漂移，但應選有安全裕度的地標，不拿禁區邊界當可貼線飛行的欄杆。",
            "原尺寸Sectional上距航線半英寸的檢查點約偏離3.43 NM；在空中看得到不代表已飛越它。記錄預期通過側、方位及時間，避免只看見熟悉形狀就認定位置。"
          ]
        },
        {
          "title": "漏掉地標時保持有控制的定位流程",
          "paragraphs": [
            "未找到單一檢查點，不要立刻朝某個猜測目標亂轉；先保持安全控制，核對時間、最後確定位置與其他特徵。原文hold heading不是要求明知前方地形、天氣或空域不安全仍盲目維持。",
            "新道路、天線及纜線可能未畫或難以看見。原書高於天線500 ft提醒不能當成任何情境都合規或保證安全的最低高度，還要按地形、障礙及適用規則規劃。"
          ]
        }
      ]
    },
    {
      "id": "dead-reckoning",
      "english": "Dead Reckoning",
      "title": "推測航法",
      "parent": null,
      "locator": "PHAK C 版 · 16-13",
      "printedPage": "16-13",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=13",
      "paragraphs": [
        "Dead reckoning 從已知位置出發，依航向、真空速、風與經過時間推估下一位置。它能在地標稀少時提供搜尋範圍，但誤差會隨時間累積，因此要持續用可靠的目視或電子定位重新校正起點。",
        "自編例：已知點後以估計地速 90 kt 飛行二十分鐘，應約前進 30 NM；若只找到距出發點 20 NM 的地標，需檢查認錯地標、風估計或計時。推算的用途是檢驗假設，不是迫使外界符合原先計畫。"
      ],
      "lessonBlocks": [
        {
          "title": "推測位置要由觀測持續校正",
          "paragraphs": [
            "Dead reckoning從已知位置出發，以預估heading、GS及經過時間推下一位置；pilotage再檢查是否到達預期地標。兩者配合能發現風與速度估錯。",
            "偏離可能來自風變、航向維持或定位／計時誤差，先找原因再修正。不要把一次不確定目視估計當成精確新位置，讓後面每段都累積誤差。"
          ]
        }
      ]
    },
    {
      "id": "triangle",
      "english": "Wind Triangle or Vector Analysis",
      "title": "風三角與向量分析",
      "parent": "dead-reckoning",
      "locator": "PHAK C 版 · 16-13",
      "printedPage": "16-13",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=13",
      "paragraphs": [
        "風三角的三邊分別代表航空器相對空氣的運動、空氣相對地面的風，以及航空器相對地面的運動。所有速度使用相同比例與同一時間長度，所有方向使用一致基準，才能以首尾相接的方法閉合三角形。",
        "原書範例設定真航線 090°、TAS 120 kt、真風由 045° 以 40 kt 吹來。風會把飛機推向西南，因此機頭必須向東偏北；以下四步沿用這組條件，分別畫出航線、風及空速向量。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 16-19的數字不能同時成立",
          "paragraphs": [
            "圖上同時出現080°heading、090°course、10°drift、8°left correction與020°／35 kt風等標示。080與090已相差10°，不能又把8°當成同一修正。",
            "若以TC090、TAS120、風由020／35作完整條件重算，TH約074.09°、GS103.43 kt，而非圖上080／110。此圖保留作三向量概念辨識，不作精確算例答案；後續使用正文一致的045／40風。"
          ],
          "figure": {
            "label": "Figure 16-19 · Wind triangle principle and inconsistent labels",
            "page": "16-14",
            "url": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=14"
          }
        },
        {
          "title": "首尾相接：風邊加空速邊等於地速邊",
          "paragraphs": [
            "Figure 16-20 的E→W是風，W→P是空速，E→P是地速；風邊可以平移而不改向量，所以把風放在前面仍代表同一相加關係。",
            "三條長度都用一小時及同一速度比例尺。正文已知TC090、TAS120、風由045以40 kt吹來；未知的是heading與GS，不能先把地速邊硬畫成120。"
          ],
          "figure": {
            "label": "Figure 16-20 · Practical wind triangle",
            "page": "16-14",
            "url": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=14"
          }
        }
      ]
    },
    {
      "id": "step-1",
      "english": "Step 1",
      "title": "Step 1：建立真北與角度參考",
      "parent": "triangle",
      "locator": "PHAK C 版 · 16-14",
      "printedPage": "16-14",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=14",
      "paragraphs": [
        "先在紙上畫南北線，標出起點 E，再由真北順時針找出航線 090° 與來風方向 045°。這一步只建立方向基準與標記，不要先把風的箭頭畫成朝向來風處，因向量代表的是空氣實際移動方向。",
        "以原書例來說，090° 在 E 的正東，045° 在東北方。檢查紙上北、東與起點標示後再繼續，可以避免整個三角形旋轉或把目的地方向讀成西方；同時先決定速度比例，後續各邊一致使用。"
      ],
      "lessonBlocks": [
        {
          "title": "Step 1：建立真北基準與兩個角標",
          "paragraphs": [
            "Figure 16-21 從E畫南北參考線，用量角器標090°航線與045°風來向。所有角度都以真北為基準，不能一個用磁航向、一個用真風。",
            "045°標點是指出風從哪裡來；真正風箭頭下一步要向其相反方向225°畫。先標角，不要此時就把40單位畫往東北。"
          ],
          "figure": {
            "label": "Figure 16-21 · Wind triangle construction steps",
            "page": "16-15",
            "url": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=15"
          }
        }
      ]
    },
    {
      "id": "step-2",
      "english": "Step 2",
      "title": "Step 2：畫出預定真航線",
      "parent": "triangle",
      "locator": "PHAK C 版 · 16-15",
      "printedPage": "16-15",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=15",
      "paragraphs": [
        "由 E 朝 090° 畫出航線射線，延伸到足以容納結果的長度，標記 TC 090°。這條線代表希望實際對地移動的方向，最後的目的位置 P 必須落在其上，但現在還不知道一小時能前進多遠。",
        "不要直接在這條線上量 120 單位當作地速，因為 120 kt 是相對空氣的速度。風修正後的地速需等三角形完成才能取得，先把 TAS 當成航段距離會跳過整個風效應。"
      ],
      "lessonBlocks": [
        {
          "title": "Step 2：畫TC方向，不先決定GS長度",
          "paragraphs": [
            "由E沿090°畫向東射線並標TC090。這條線限定所需地面航跡，末端P尚未求出，所以不把射線長度當作已知航程。",
            "它代表一小時後地面位置可能落在的方向，之後用120單位空速邊與它相交求P。"
          ]
        }
      ]
    },
    {
      "id": "step-3",
      "english": "Step 3",
      "title": "Step 3：畫出吹往方向的風向量",
      "parent": "triangle",
      "locator": "PHAK C 版 · 16-15",
      "printedPage": "16-15",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=15",
      "paragraphs": [
        "風由 045° 吹來，實際吹往 225°，因此從 E 向西南畫長度為 40 速度單位的箭頭，終點記為 W。這是原書作圖最容易反向的一步：氣象風向說明來源，向量箭頭則表示去向。",
        "若選每公分代表 20 kt，風向量長度就是 2 公分，稍後的 TAS 向量則需 6 公分。箭頭畫成東北會把逆風和側風效果一起反轉；完成後先口述「空氣把我推向哪裡」再接下一邊。"
      ],
      "lessonBlocks": [
        {
          "title": "Step 3：把來向反轉成風向量",
          "paragraphs": [
            "風由045°來，朝225°吹；由E向西南畫40單位到W。若選1單位代表1 kt的一小時距離，三邊都要同樣處理。",
            "畫錯成向東北會把逆風／南向側風變成順風／北向側風，得到完全相反的修正。畫完先問箭頭是否與氣象FROM相反。"
          ],
          "check": {
            "question": "045°／40 kt的風，向量應畫往045還是225？",
            "answer": "225°，氣象045是來向，向量箭頭表示空氣往哪裡移動。"
          }
        }
      ]
    },
    {
      "id": "step-4",
      "english": "Step 4",
      "title": "Step 4：閉合三角形並求航向與地速",
      "parent": "triangle",
      "locator": "PHAK C 版 · 16-15",
      "printedPage": "16-15",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=15",
      "paragraphs": [
        "以 W 為起點，取長度 120 單位的空速向量，使另一端交在東向航線上，交點為 P。W 到 P 的方向是真航向，E 到 P 的長度是一小時的對地距離，也就是地速；不能用 E 到 W 的方向當成機頭方向。",
        "原書量圖約得真航向 076°、地速 88 kt；用三角函數重算約為 076.37°、88.33 kt，差異來自作圖取整。取得真航向後才套磁差與羅差，航段時間則用地速計算，再依時間估算燃油。"
      ],
      "points": [
        "原書條件：TC 090°、TAS 120 kt、風由 045°／40 kt；北向與東向的風分量均為約 −28.28 kt。",
        "需用空速的向北分量抵消向南風，WCA≈−13.63°，所以 TH≈076.37°。",
        "東向地速＝√(120²−28.28²)−28.28≈88.33 kt；原書作圖取約 88 kt。",
        "原書沿用 88 kt 算 220 NM，時間為 2.5 h、以 8 gal/h 算約 20 gal；若用未取整的 88.33 kt，約為 2.491 h、19.92 gal。這是同一模型不同取整，不是額外燃油裕度。",
        "W → P 是空速／航向邊，E → W 是風邊，E → P 是地速／航線邊；三邊必須用同一比例尺。"
      ],
      "lessonBlocks": [
        {
          "title": "Step 4：用120單位空速邊閉合",
          "paragraphs": [
            "從W量120單位，使端點P落在E的東向射線。W→P是真航向及TAS，E→P長度是一小時對地距離，數值相當於GS。",
            "本例量圖約得TH076°、GS88 kt；向北的空速分量抵銷向南的風，東向分量則再扣掉逆風。量圖取整不代表條件真的精確到一度或一節。"
          ]
        },
        {
          "title": "Figure 16-22實際是在量真航向",
          "paragraphs": [
            "圖內量角器沿南北線，讀W→P相對真北約076°，是直接量TH。圖下caption卻寫by the wind correction angle，與實際圖示方法不一致。",
            "此處按圖內量角器位置辨認方法，不依錯置caption命名。它與下一幅以航線為基準量14°的方法應得到一致航向。"
          ],
          "figure": {
            "label": "Figure 16-22 · Direct true-heading measurement; caption mismatch",
            "page": "16-16",
            "url": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=16"
          }
        },
        {
          "title": "Figure 16-23實際是在量風修正角",
          "paragraphs": [
            "圖內量角器在P沿TC線量空速邊的夾角，得約14°左修正，所以TH=090−14=076°。圖下caption寫direct measurement，與上一幅的標題方法對調。",
            "這兩幅是Step 4在下一頁的直接延伸。先求TH，再用磁差及本機羅差卡得到CH，不能把076°直接當羅盤應保持讀數。"
          ],
          "figure": {
            "label": "Figure 16-23 · Wind-correction-angle measurement; caption mismatch",
            "page": "16-16",
            "url": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=16"
          }
        },
        {
          "title": "獨立向量驗算與220 NM用油",
          "paragraphs": [
            "風的東、北分量均為−40/√2≈−28.284 kt。空速需向北+28.284，向東為√(120²−28.284²)≈116.619；所以GS≈88.33477 kt，TH≈076.36698°。",
            "原書採88 kt：220÷88=2.5 h，8 US gal/h×2.5=20 US gal。用未取整GS則2.49053 h、19.92421 US gal，取兩位小數19.92。本站舊概述19.93已訂正；這些都只是該航段燃油，未含其他階段與備份。"
          ],
          "table": {
            "caption": "獨立向量驗算與220 NM用油",
            "headers": [
              "算法",
              "TH",
              "GS",
              "220 NM時間",
              "8 US gal/h用油"
            ],
            "rows": [
              [
                "原書量圖取整",
                "076°",
                "88 kt",
                "2.50 h",
                "20.00 US gal"
              ],
              [
                "向量重算",
                "076.37°",
                "88.33477 kt",
                "2.49053 h",
                "19.92421 US gal"
              ]
            ]
          },
          "check": {
            "question": "向量重算比20 gal少約0.08 gal，可否把差額視為額外安全備份？",
            "answer": "不能。這只是計算取整差異，預報誤差及備份要另外規劃。"
          }
        }
      ]
    },
    {
      "id": "planning",
      "english": "Flight Planning",
      "title": "完整飛行計畫",
      "parent": null,
      "locator": "PHAK C 版 · 16-17",
      "printedPage": "16-17",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=17",
      "paragraphs": [
        "飛行計畫先整合機師、航空器、天氣、路線、時間及備案，再產生可執行的導航紀錄。並非把起點終點輸入軟體就完成，因為可用跑道、爬升能力、地形與日落時間都可能改變路線是否成立。",
        "可以從目的地反推：預計抵達時是否可用、若不能落地去哪裡、何時必須改航。再往前檢查每段的高度、風、通訊及燃油，讓計畫包含決策點，而不是只列一串樂觀的到達時間。"
      ],
      "references": [
        {
          "title": "FAA AIM 5-1：飛前準備、NOTAM 與飛行計畫",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_1.html",
          "checked": "2026-09-12"
        },
        {
          "title": "14 CFR 91.103 — Preflight action",
          "url": "https://www.ecfr.gov/current/title-14/section-91.103",
          "checked": "2026-09-21"
        }
      ],
      "lessonBlocks": [
        {
          "title": "行前資訊要能支持出發與備案",
          "paragraphs": [
            "91.103要求PIC熟悉與飛行相關的可用資訊。IFR或離開機場附近的飛行，須納入天氣報告與預報、燃油、無法完成原計畫時的替代方案，以及ATC已告知的交通延誤。",
            "所有飛行還須考量擬用機場跑道長度及適用起降性能資料。把航行計算與可用跑道、重量、風、溫度和地形一起檢查，才知道計畫是否可行。"
          ],
          "check": {
            "question": "已算出到目的地只需35分鐘，是否已完成行前準備？",
            "answer": "沒有。仍須查天氣、機場與跑道、航空器性能、空域、燃油及替代方案等相關資訊。"
          }
        }
      ]
    },
    {
      "id": "materials",
      "english": "Assembling Necessary Material",
      "title": "準備所需資料與工具",
      "parent": "planning",
      "locator": "PHAK C 版 · 16-17",
      "printedPage": "16-17",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=17",
      "paragraphs": [
        "出發前應備妥有效航圖、機場資料、天氣與 NOTAM、機型性能資料、導航紀錄及可用計算工具。電子資料需確認已下載離線內容、電力與備援，不要假定在空中仍能取得地面網路。",
        "把最常用的資料放在能迅速找到的位置，例如下一段頻率、目的地機場圖與改降機場。若必須在低空反覆翻找多層選單，資料雖然存在，仍未成為可實際運用的資源。"
      ],
      "references": [
        {
          "title": "FAA AIM 5-1：飛前準備、NOTAM 與飛行計畫",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_1.html",
          "checked": "2026-09-12"
        }
      ],
      "lessonBlocks": [
        {
          "title": "把航路與鄰近區域資料準備好",
          "paragraphs": [
            "除了現行航圖，航線接近圖幅邊界時也應備妥相鄰區域，供偏航或改降使用。攜帶熟悉的plotter、飛行計算器或合適電子工具，並確認離線資料、電量與備援。",
            "夜航照明、沙漠飲水等用品應隨環境安排。資料齊全但操作不熟，仍可能在飛行中造成長時間低頭；先在地面練習查頻率、改航和重新計算。"
          ]
        }
      ]
    },
    {
      "id": "weather",
      "english": "Weather Check",
      "title": "天氣檢查與航路選擇",
      "parent": "planning",
      "locator": "PHAK C 版 · 16-17",
      "printedPage": "16-17",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=17",
      "paragraphs": [
        "導航所用風應對應預計通過的高度與時間，並與沿途雲、能見度、結冰、對流及地形條件一起評估。單看目的地 METAR 不足以代表整條航路，風向轉變也會同時影響航向、地速與燃油。",
        "若較高高度有更強順風，不能只因縮短航時就選它；還要檢查爬升性能、氧氣、雲層與下降條件。延誤起飛或改變高度後，應重新評估天氣與導航數值，不直接沿用原航行紀錄。"
      ],
      "references": [
        {
          "title": "FAA AIM 5-1：飛前準備、NOTAM 與飛行計畫",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_1.html",
          "checked": "2026-09-12"
        }
      ],
      "lessonBlocks": [
        {
          "title": "先查天氣，再決定航路是否成立",
          "paragraphs": [
            "先判斷VFR飛行是否可行，再選路與高度。檢查出發、沿途、目的地與備案的時間趨勢，不只讀一份目的地觀測；風資料要對應預定高度和通過時間。",
            "延後起飛、改路或換高度後，重新評估雲、能見度、對流及可用日照，也重算地速與燃油。原航行表的精確小數不能補救已失效的預報假設。"
          ]
        }
      ]
    },
    {
      "id": "supplement",
      "english": "Use of Chart Supplement U.S. (formerly Airport/Facility Directory)",
      "title": "使用 Chart Supplement",
      "parent": "planning",
      "locator": "PHAK C 版 · 16-17",
      "printedPage": "16-17",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=17",
      "paragraphs": [
        "Chart Supplement 補充機場頻率、跑道、服務時間、進出及其他備註，也提供部分導航設施資料。它回答航圖空間不足以完整呈現的問題，但短期失效與變更仍需透過 NOTAM 等現行資訊確認。",
        "例如計畫依賴某機場補油，應查油品、營業時間及是否需事先安排，而不是只看有燃油符號。若到達時服務已結束，原本可行的下一段燃油計畫可能失效，應在起飛前確認替代方案。"
      ],
      "references": [
        {
          "title": "FAA AIM 5-1：飛前準備、NOTAM 與飛行計畫",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_1.html",
          "checked": "2026-09-12"
        },
        {
          "title": "FAA Chart Supplements",
          "url": "https://www.faa.gov/air_traffic/flight_info/aeronav/productcatalog/supplementalcharts/airportdirectory/",
          "checked": "2026-09-21"
        }
      ],
      "lessonBlocks": [
        {
          "title": "機場資料要讀到備註與營業時間",
          "paragraphs": [
            "Figure 16-24 示範Chart Supplement條目。讀取位置、標高、跑道與燈光、頻率、服務和備註；若依賴中途加油，確認油品、服務時間及安排條件。",
            "FAA現行Chart Supplement採56天週期。原文「NOTAM每28天發行」不能理解成NOTAM只在固定日期更新；短期變更仍須查有效NOTAM。航圖與機場資料有差異時，核對生效日期及適用範圍，不只比較書名。"
          ],
          "figure": {
            "label": "Figure 16-24 · Chart Supplement entry",
            "page": "16-17",
            "url": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=17"
          },
          "check": {
            "question": "圖上有燃油服務符號，能否保證晚上抵達仍可加到需要的油？",
            "answer": "不能。還要確認油品、服務時間、可用狀態，以及是否需預先安排。"
          }
        }
      ]
    },
    {
      "id": "poh",
      "english": "Airplane Flight Manual or Pilot’s Operating Handbook (AFM/POH)",
      "title": "AFM／POH 與導航數據",
      "parent": "planning",
      "locator": "PHAK C 版 · 16-17",
      "printedPage": "16-17",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=17",
      "paragraphs": [
        "AFM／POH 提供適用機型的性能與操作限制，導航計算中的 TAS、耗油、爬升時間與距離應從符合重量、高度、溫度及功率的資料取得。範例飛機的數值不能直接套到同型但設備或條件不同的航空器。",
        "若把全程都當成巡航，會漏掉爬升耗時和燃油，尤其高密度高度或重載時影響更大。規劃時依各階段分段，並確認表格假設、插值範圍及可用燃油，才有可靠的 ETA 與剩餘量。"
      ],
      "references": [
        {
          "title": "FAA AIM 5-1：飛前準備、NOTAM 與飛行計畫",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_1.html",
          "checked": "2026-09-12"
        }
      ],
      "lessonBlocks": [
        {
          "title": "使用本機最新重量平衡與性能",
          "paragraphs": [
            "從本機有效AFM／POH及永久紀錄取得最新空重、空重CG與設備狀態，加入實際乘員、行李及燃油，檢查重量與CG限制。依所用空重定義判斷滑油與不可用燃油是否已包含，避免重複加算。",
            "用預期重量、標高、溫度、風與跑道條件查起降性能，並依適用圖表計算爬升和巡航油耗。高密度高度或重載對性能不利，但各項修正應依本機資料，不能套用一個通用百分比。"
          ],
          "check": {
            "question": "知道總重量低於最大重量，能否省略CG計算？",
            "answer": "不能。同一總重量可能因裝載位置不同而超出前後CG限制；還要考慮燃油消耗後的狀態。"
          }
        }
      ]
    },
    {
      "id": "chart-course",
      "english": "Charting the Course",
      "title": "在航圖上規劃航線",
      "parent": null,
      "locator": "PHAK C 版 · 16-18",
      "printedPage": "16-18",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=18",
      "paragraphs": [
        "在圖上連接兩地只是起點，接著要檢查沿線地形、障礙、空域、可辨認地標與備降選項，必要時改成數個安全航段。航線長度最短不一定最適合，稍微繞行可能換得更多迫降或天氣退路。",
        "每段應記錄真航線與距離，再使用該段預期風求航向與地速。選檢查點時兼顧辨識與合理間隔，不能為了每五分鐘剛好一點，挑選容易混淆或必須長時間低頭才能確認的小地標。"
      ],
      "references": [
        {
          "title": "FAA AIM 5-1：飛前準備、NOTAM 與飛行計畫",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_1.html",
          "checked": "2026-09-12"
        }
      ],
      "lessonBlocks": [
        {
          "title": "Chickasha至Guthrie是歷史教學航線",
          "paragraphs": [
            "本例給定TAS115 kt、風360°／10 kt、可用燃油38 US gal、耗油8 US gal/h與羅差修正+2°。這些是範例條件，不能當作今日航線、機場或某架飛機的有效資料。",
            "Figure 16-25 從A到F畫出航線，再辨認檢查點、地形、障礙與空域。直接線不合適時可分段繞行；不同段要各自量TC、距離並計算風。"
          ],
          "figure": {
            "label": "Figure 16-25 · Historical sectional route example",
            "page": "16-19",
            "url": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=19"
          },
          "table": {
            "caption": "Chickasha至Guthrie是歷史教學航線",
            "headers": [
              "範例輸入",
              "數值"
            ],
            "rows": [
              [
                "TAS",
                "115 kt"
              ],
              [
                "風（吹來方向）",
                "360°／10 kt"
              ],
              [
                "機上可用燃油",
                "38 US gal"
              ],
              [
                "巡航耗油率",
                "8 US gal/h"
              ],
              [
                "本例羅差修正",
                "+2°"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "chart-steps",
      "english": "Steps in Charting the Course",
      "title": "繪製航線的完整步驟",
      "parent": "chart-course",
      "locator": "PHAK C 版 · 16-18",
      "printedPage": "16-18",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=18",
      "paragraphs": [
        "可依序選路、查地形與空域、標檢查點、量真航線和距離、選高度，再由性能與風算出航向、地速、時間及燃油。完成後補上頻率、備案與決策點，最後核對各段加總與整趟飛行限制。",
        "飛行中應填入實際通過時間，與預計數值比較。若第一段落後五分鐘，不能只把後續 ETA 全部順延而不分析原因；先判斷是風較強、速度不足或繞行，再決定哪些航段與燃油估計需要更新。"
      ],
      "references": [
        {
          "title": "FAA AIM 5-1：飛前準備、NOTAM 與飛行計畫",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_1.html",
          "checked": "2026-09-12"
        }
      ],
      "points": [
        "一、選擇能避開地形、天氣與不適用空域的航路，確認可用機場與備案。",
        "二、挑可辨認的檢查點，分段量真航線與 NM 距離，標出高度及主要障礙。",
        "三、依性能求 TAS、耗油與爬升資料，依時段／高度取真風，求 TH 和 GS。",
        "四、由磁差換 MH，再依羅差卡取 CH；由 GS 求 ETE、ETA 與燃油。",
        "五、填頻率、機場資料、備案及改航觸發點，核對各段加總和燃油餘裕。",
        "六、航中記錄實際時間、位置與用油，查明差異並更新後續計畫。"
      ],
      "lessonBlocks": [
        {
          "title": "檢查點與高度都要有判讀依據",
          "paragraphs": [
            "原例以塔、道路鐵路、機場等組合交叉辨認四個檢查點。大城的黃色區塊通常容易辨認，但能否實際看見仍取決於地形、天氣、光線與角度；小圓點城鎮不一定適合。",
            "原圖Class C頂5,300 ft MSL、Class D頂3,800 ft MSL，正文選5,500 ft MSL；這些只供閱讀舊圖。巡航高度規則以磁航線及離地高度等適用條件判斷，不以羅盤航向選奇偶，也不能只要高過空域就忽略雲與障礙。",
            "Figure 16-26 上表8,000與下表8,000／10,000高度欄，和正文及Figure 16-27的5,500不一致。本教材保留差異提示，不把衝突數字拼成可執行的飛行計畫。"
          ],
          "figure": {
            "label": "Figure 16-26 · Planning sheet and visual flight log",
            "page": "16-20",
            "url": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=20"
          }
        },
        {
          "title": "TC031到CH023：每一步保留基準",
          "paragraphs": [
            "依原例取整：TC031°加左修正−3°得到TH028°，減7°E磁差得到MH021°，再加本例羅差2°得到CH023°。原圖磁差6°30′E取整為7°，不能作現行磁差使用。",
            "以TAS115、風360／10和TC031向量驗算，WCA約−2.57°、TH028.43°、GS106.31 kt；原書的3°與106 kt是教學取整。CH023不是地面航線方向，而是此例羅盤保持值。"
          ],
          "table": {
            "caption": "TC031到CH023：每一步保留基準",
            "headers": [
              "轉換",
              "原書取整結果"
            ],
            "rows": [
              [
                "TC",
                "031°"
              ],
              [
                "WCA",
                "−3°"
              ],
              [
                "TH",
                "028°"
              ],
              [
                "磁差",
                "7°E（減7°）"
              ],
              [
                "MH",
                "021°"
              ],
              [
                "羅差",
                "+2°"
              ],
              [
                "CH",
                "023°"
              ]
            ]
          },
          "check": {
            "question": "原例羅盤023°與航圖031°不同，是否一定偏離航線？",
            "answer": "不是。兩者分別是CH與TC，還隔著風修正、磁差與羅差；應以地面位置核對航跡。"
          }
        },
        {
          "title": "53 NM、35分鐘、4.7 gallons分別代表什麼",
          "paragraphs": [
            "檢查點航段11、10、10.5、13、8.5 NM，合計53 NM。以原例GS106 kt計算，純巡航時間30分鐘；原書另加5分鐘爬升，得到35分鐘，按8 US gal/h估用油4.6667，約4.7 US gal。",
            "實際應用AFM／POH分算爬升時間、距離與油量，再算剩餘巡航，避免既把全程當巡航又完整重複計入爬升距離。原例加5分鐘是其簡化做法，不是所有飛行通用。",
            "38 US gal是附件明列的機上可用燃油，不是這趟耗油；38÷8=4.75 h即4小時45分的簡化續航。備份、地面用油和各階段實耗仍須另計，不能把4小時45分全部當作可排定航時。"
          ],
          "table": {
            "caption": "53 NM、35分鐘、4.7 gallons分別代表什麼",
            "headers": [
              "量",
              "計算",
              "結果"
            ],
            "rows": [
              [
                "總距離",
                "11＋10＋10.5＋13＋8.5",
                "53 NM"
              ],
              [
                "巡航時間",
                "53÷106×60",
                "30 min"
              ],
              [
                "範例總時間",
                "30＋5",
                "35 min"
              ],
              [
                "範例航程耗油",
                "35÷60×8",
                "4.7 US gal"
              ],
              [
                "機上可用燃油",
                "題設",
                "38 US gal"
              ],
              [
                "簡化續航",
                "38÷8",
                "4 h 45 min"
              ]
            ]
          },
          "check": {
            "question": "Figure 16-26的TOTAL FUEL 38 gal是否代表35分鐘燒掉38 gal？",
            "answer": "不是。38 gal是可用燃油題設；原例35分鐘按8 GPH估約4.7 gal。"
          }
        }
      ]
    },
    {
      "id": "vfr-plan",
      "english": "Filing a VFR Flight Plan",
      "title": "提交、啟用與關閉 VFR 飛行計畫",
      "parent": null,
      "locator": "PHAK C 版 · 16-21",
      "printedPage": "16-21",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=21",
      "paragraphs": [
        "VFR 飛行計畫的重要作用是提供航路、時間與聯絡資訊，協助在逾時失聯時展開搜尋。提交、啟用與關閉是不同動作，僅送出資料不表示已記錄實際出發，也不能假定到有塔臺的機場落地就自動關閉。",
        "接受 VFR flight following 不等於啟用 VFR 搜救飛行計畫。應依所用服務確認啟用方式、起飛後的實際時間與到達後關閉責任；改航或大幅延誤時也要更新，避免錯誤警報或搜尋依據失準。"
      ],
      "references": [
        {
          "title": "FAA AIM 5-1 — Flight planning",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_1.html",
          "checked": "2026-09-21"
        }
      ],
      "currentNote": "原書展示舊 FAA Form 7233-1；現行一般民用提交依 FAA Form 7233-4／ICAO 格式資訊處理，7233-1 有限定例外。提交格式與 VFR 飛行計畫的啟用、更新、關閉是不同問題，依 FAA AIM 5-1 與所用服務確認。",
      "points": [
        "提交：航班識別、機型、設備、出發地、預計時間、航路、目的地與相關補充資訊，依適用格式填寫。",
        "啟用：依服務方式回報實際起飛時間或確認已安排的啟用方式；不能假設按下送出即已啟用。",
        "更新：目的地、航路或時間大幅改變時，讓飛行計畫的搜尋資訊反映現況。",
        "關閉：到達後確認 VFR 計畫已關閉；塔臺不會像部分 IFR 情況一樣自動關閉 VFR 計畫。",
        "Flight following 是 ATC 交通諮詢，與 Flight Service 的 VFR 飛行計畫／搜救資訊不同。"
      ],
      "lessonBlocks": [
        {
          "title": "舊國內表格與現行ICAO格式分開讀",
          "paragraphs": [
            "Figure 16-27 是歷史FAA Form 7233-1。現行一般民用申報使用FAA Form 7233-4國際格式；AIM列有DoD與特定stereo route使用者例外。舊C150/X的斜線裝備碼不能原封不動當成現行欄位填法。",
            "舊表以UTC填出發時間，ETE35分鐘與fuel endurance4小時45分鐘分欄。現行表格的編號和裝備欄位不同，應依適用表單說明填寫，不照舊圖Item 3、6、7等號碼搬移。"
          ],
          "figure": {
            "label": "Figure 16-27 · Historical domestic flight plan form",
            "page": "16-21",
            "url": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=21"
          }
        },
        {
          "title": "提交、啟用、更新與關閉各有責任",
          "paragraphs": [
            "一般國內美國VFR飛行計畫主要供搜尋救援；涉及ADIZ等特殊作業仍可能有申報要求。Filing不等於activation，也不是進入空域的ATC許可；flight following同樣不能取代啟用。",
            "現行AIM說明VFR proposals通常保留至預定出發後2小時，與原文1小時不同。可用電話、無線電或電子方式依服務流程辦理；若採假定出發時間啟用，延誤時要更新，避免搜尋依據錯誤。",
            "抵達後確認關閉，途中更改路線或時間也應更新。不要因目的地有塔臺就假定VFR計畫會自動啟閉。"
          ],
          "check": {
            "question": "收到flight following的雷達辨識，是否代表搜救飛行計畫已啟用？",
            "answer": "不代表。需另按Flight Service或申報服務流程確認啟用與關閉。"
          }
        }
      ]
    },
    {
      "id": "ground-nav",
      "english": "Ground-Based Navigation",
      "title": "地面導航設施",
      "parent": null,
      "locator": "PHAK C 版 · 16-22",
      "printedPage": "16-22",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=22",
      "paragraphs": [
        "地面導航透過已知位置的無線電台提供方位、航線或距離資訊，機師必須確認所調設施、可用狀態與訊號涵蓋。航圖上仍有台站不代表此刻正常，維修、退役及服務範圍限制都可能影響使用。",
        "電子設備顯示一根穩定指針，也不能取代識別台站與檢查旗標。應依現行資料確認頻率及識別，並將測得的位置與航圖、其他導航來源交叉比對，尤其在低空或距離台站較遠時。"
      ],
      "references": [
        {
          "title": "FAA AIM 1-1：導航設備、GPS 完整性與 VFR 航點",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html",
          "checked": "2026-09-12"
        }
      ],
      "lessonBlocks": [
        {
          "title": "無線電導航不全是地面台站",
          "paragraphs": [
            "本節原文將VOR、NDB與GPS一起介紹；VOR和NDB使用地面發射台，GPS是衛星導航，不因放在Ground-Based Navigation標題下就變成地面設施。",
            "無線電來源應與目視地標、推算位置交叉核對。訊號有效、來源選對與台站識別是不同檢查，不能只看指針穩定就相信顯示。"
          ]
        }
      ]
    },
    {
      "id": "vor",
      "english": "Very High Frequency (VHF) Omnidirectional Range (VOR)",
      "title": "VOR 全向導航台",
      "parent": "ground-nav",
      "locator": "PHAK C 版 · 16-22",
      "printedPage": "16-22",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=22",
      "paragraphs": [
        "VOR 提供航空器相對於台站的徑向方位，radial 一律指由台站向外的方向。航空器在台站東側位於約 090 radial，不論機頭朝東、西、南或北，所在徑向線都不會因轉動機頭而立即改變。",
        "若在 090 radial 上飛向台站，進台航線約為 270°，不是 090°。VOR 方位依台站採用的磁方位基準，與 GPS 計算使用的磁模型可能略有差異；應按公布資料與設備模式判讀。"
      ],
      "references": [
        {
          "title": "FAA AIM 1-1 — Navigation aids and service volumes",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html",
          "checked": "2026-09-21"
        },
        {
          "title": "14 CFR 91.171 — VOR checks",
          "url": "https://www.ecfr.gov/current/title-14/section-91.171",
          "checked": "2026-09-21"
        }
      ],
      "lessonBlocks": [
        {
          "title": "VOR給方位，距離需要另一項能力",
          "paragraphs": [
            "VOR radial是從台站向外的磁方位。在090 radial上進台，所需course為270°；機頭如何偏風不會改變radial的定義。",
            "VOR／DME加上測距；VORTAC結合VOR與TACAN，民機可用合適DME取得距離。只有VOR接收器與CDI，並不會因地面站是VORTAC就自動得到距離。",
            "Figure 16-28 顯示視線限制：高度、距離與遮蔽物會影響接收。108.0～117.95 MHz是VOR工作頻帶，不代表其中每個頻率都可任意當VOR使用；必須調航圖公布的台站頻率。"
          ],
          "figure": {
            "label": "Figure 16-28 · Line-of-sight reception",
            "page": "16-22",
            "url": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=22"
          }
        },
        {
          "title": "服務範圍不等於只要聽得到就能使用",
          "paragraphs": [
            "原文T、L、H是傳統標準服務範圍；現行AIM還有VL與VH。高度基準是ATH，即高於發射天線的高度，不能直接把表格數字當MSL或本機下方地形的AGL。",
            "下表整理傳統範圍，低於1,000 ft ATH的細節另查AIM圖。新VL在5,000至未滿18,000 ft ATH可達70 NM；VH亦有擴充區段，須依台站實際分類查完整現行表。VOR與同址DME不一定有相同服務範圍。",
            "地形、公布限制與NOTAM仍會影響可用性。標準服務範圍、經核准的延伸服務及單純收到訊號，是不同概念。"
          ],
          "table": {
            "caption": "服務範圍不等於只要聽得到就能使用",
            "headers": [
              "傳統分類",
              "高度（ft ATH）",
              "半徑"
            ],
            "rows": [
              [
                "T",
                "1,000～12,000（含）",
                "25 NM"
              ],
              [
                "L",
                "1,000～18,000（含）",
                "40 NM"
              ],
              [
                "H",
                "1,000～14,500（含）",
                "40 NM"
              ],
              [
                "H",
                "14,500～60,000（含）",
                "100 NM"
              ],
              [
                "H擴大區段",
                "18,000～45,000（含）",
                "130 NM"
              ]
            ]
          },
          "check": {
            "question": "台站標高2,000 ft，12,000 ft ATH可直接讀成12,000 ft MSL嗎？",
            "answer": "不能。ATH以發射天線為基準；兩者高度基準不同，還須知道天線標高。"
          }
        },
        {
          "title": "VOR檢查容差與VFR／IFR適用範圍",
          "paragraphs": [
            "91.171針對民用航空器IFR使用VOR導航：除按核准程序維護檢查的途徑外，通常須在此前30天內完成合格操作檢查，並記錄日期、地點、方位誤差及簽名。不能把這條直接說成所有VFR都需30天檢查。",
            "VFR仍應確認設備可靠。原文年度校準是建議，與91.171操作檢查不是同一件事。地面台對準精度約±1°也不是整套機載系統或所有飛行條件的總誤差保證。"
          ],
          "table": {
            "caption": "VOR檢查容差與VFR／IFR適用範圍",
            "headers": [
              "檢查方法",
              "容許誤差／差值"
            ],
            "rows": [
              [
                "適用VOT／核准測試訊號",
                "±4°"
              ],
              [
                "指定地面檢查點",
                "±4°"
              ],
              [
                "指定空中檢查點",
                "±6°"
              ],
              [
                "雙獨立VOR系統同台比較",
                "兩者差值不超過4°"
              ]
            ]
          },
          "check": {
            "question": "兩部接收器各差4°、分別在基準兩側，是否通過雙機比較？",
            "answer": "不通過。兩者相差8°，超過雙機比較4°上限。"
          }
        }
      ]
    },
    {
      "id": "using-vor",
      "english": "Using the VOR",
      "title": "使用 VOR 的基本流程",
      "parent": "vor",
      "locator": "PHAK C 版 · 16-23",
      "printedPage": "16-23",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=23",
      "paragraphs": [
        "先調頻並辨識台站，確認訊號有效，再用 OBS 選擇需要的航線，配合 CDI 與 TO／FROM 判斷相對位置。TO／FROM 與選定航線和所在位置有關，不是感測機頭正在向台或離台飛。",
        "自編例：在台站東側，選 270° 並位於中心線，通常顯示 TO；即使機頭暫時朝東，指示也不會只因機頭朝向而變 FROM。理解位置、選擇與飛行方向三者，才能避免反向感應。"
      ],
      "references": [
        {
          "title": "FAA AIM 1-1 — VOR identification",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html",
          "checked": "2026-09-21"
        }
      ],
      "points": [
        "調頻 → 識別 → 確認有效 → 設 OBS → 判讀 CDI／TO–FROM → 選截獲與風修正。",
        "自編位置：台站東側 090 radial，選 090° 居中通常 FROM；選 270° 居中通常 TO。",
        "轉動機頭不改變所在 radial；轉 OBS 不改變航空器的實際位置。",
        "在傳統 CDI 上若用與飛行方向相反的課程設定，可能產生反向感應，不能盲目「向針轉」。"
      ],
      "lessonBlocks": [
        {
          "title": "調頻後先確認識別與導航來源",
          "paragraphs": [
            "台站識別用Morse code或正確的自動語音識別；一般FSS語音不是該VOR的身分證明。設備能實際解碼識別時，依其功能核對；單純從資料庫顯示預期名稱，不等於已驗證收到的台站。",
            "失效或維修資訊優先於看似正常的指針。無有效識別、NAV旗標或NOTAM標明不能使用時，不以穩定顯示掩蓋問題；改用合適導航備援。"
          ]
        }
      ]
    },
    {
      "id": "cdi",
      "english": "Course Deviation Indicator (CDI)",
      "title": "CDI 航線偏差指示器",
      "parent": "ground-nav",
      "locator": "PHAK C 版 · 16-23",
      "printedPage": "16-23",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=23",
      "paragraphs": [
        "CDI 顯示相對於所選航線的偏差，傳統 VOR 模式是角度偏差，距台愈遠，同樣一格所代表的側向距離愈大。它不是通用的「往哪裡轉」指令；要先確認航線選擇、TO／FROM 與飛行方向符合預期。",
        "傳統 VOR 五點刻度常以每點約 2°、滿刻度約 10° 表示，但 GPS 或 localizer 模式的尺度不同。看到同一根指針，必須先檢查導航來源和模式，不能把每一格都固定換成兩度或一海里。"
      ],
      "references": [
        {
          "title": "FAA AIM 1-1：導航設備、GPS 完整性與 VFR 航點",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html",
          "checked": "2026-09-12"
        }
      ],
      "points": [
        "VOR 偏差是角度：在台站 60 NM 處，偏 2° 約為 2.1 NM；在 15 NM 處，同角度約 0.52 NM。",
        "VOR 每點約 2° 的慣例不能套用 GPS、localizer 或所有顯示器；模式與尺度須由設備確認。",
        "旗標無效、錯誤台站或導航來源錯選時，居中的指針也不代表正在正確航路上。"
      ],
      "lessonBlocks": [
        {
          "title": "CDI中線只說明相對所選航線的位置",
          "paragraphs": [
            "Figure 16-29 包括OBS、左右偏差針及TO／FROM。轉OBS直到中線，可以讀取所在radial的FROM值，或其相反方向的TO course；這不是風修正後的heading。",
            "在台站東側090 radial，OBS270且居中通常為TO，OBS090且居中為FROM。就算原地改變機頭方向，位置與OBS未變，TO／FROM也不會因此自動翻轉。"
          ],
          "figure": {
            "label": "Figure 16-29 · VOR course deviation indicator",
            "page": "16-24",
            "url": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=24"
          },
          "check": {
            "question": "090 radial上選270 TO，中線是否表示機頭一定朝270？",
            "answer": "不是。中線與TO由位置和所選航線決定；機頭朝向另看航向儀，保持航線還需風修正。"
          }
        },
        {
          "title": "反向感應先檢查所選course",
          "paragraphs": [
            "要沿進台course飛，就選對應TO；沿離台course飛，就選對應FROM。用相反course而朝另一方向飛，會使傳統CDI的左右意義與預期相反。",
            "VOR常見五點式刻度每點約2°；同樣角度在遠處代表較大的側向距離。GPS和localizer尺度不同，不能把所有CDI模式都當固定2°一點，也不能把偏針直接當無條件轉彎指令。"
          ]
        }
      ]
    },
    {
      "id": "hsi",
      "english": "Horizontal Situation Indicator",
      "title": "HSI 水平情況指示器",
      "parent": "ground-nav",
      "locator": "PHAK C 版 · 16-24",
      "printedPage": "16-24",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=24",
      "paragraphs": [
        "HSI 把航向卡、選定航線、偏差與 TO／FROM 等資訊放在同一平面，幫助理解機頭與航線的相對幾何。它能減少單獨 CDI 的心算負擔，但不會自動替你選對導航來源、航線或截獲方向。",
        "進入下一航段時，要確認 course pointer、heading bug 與實際導航來源各自用途。航向游標指向某數字，不代表 CDI 已在追蹤那條線；自動駕駛的 HDG 與 NAV 模式也可能產生不同動作。"
      ],
      "references": [
        {
          "title": "FAA AIM 1-1：導航設備、GPS 完整性與 VFR 航點",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html",
          "checked": "2026-09-12"
        }
      ],
      "lessonBlocks": [
        {
          "title": "HSI同時呈現航向與選定航線",
          "paragraphs": [
            "Figure 16-30 本機航向184°、course pointer295°、尾端115°。三個讀數可以同時成立：184是機頭方向，295是選定航線，115是其反向，不能混為自動駕駛命令。",
            "偏差桿顯示相對航線的位置；TO／FROM箭頭朝course頭或尾表示其方向關係。NAV旗標表示導航訊號問題，HDG旗標表示航向資料問題，需分別判讀。原文flux valve是所示傳統設備架構，現代顯示器不一定使用同一感測方式。"
          ],
          "figure": {
            "label": "Figure 16-30 · Horizontal situation indicator",
            "page": "16-24",
            "url": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=24"
          },
          "check": {
            "question": "HSI航向184、course295，是否應立即把course旋到184？",
            "answer": "不應只因兩者不同就改course；先確認任務航線、截獲狀態與風修正，兩者原本就可能不同。"
          }
        }
      ]
    },
    {
      "id": "rmi",
      "english": "Radio Magnetic Indicator (RMI)",
      "title": "RMI 無線電磁指示器",
      "parent": "ground-nav",
      "locator": "PHAK C 版 · 16-24",
      "printedPage": "16-24",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=24",
      "paragraphs": [
        "RMI 把指向台站的方位指針疊在旋轉航向卡上，若航向與訊號有效，指針頭可讀出磁方位 TO，尾端可讀出相反方向。使用 VOR 資料時，尾端對應航空器所在的向外徑向線。",
        "在台站東側時，指針頭大致指向 270°、尾端約 090°。若航向卡故障、選到 ADF 來源或台站未識別，外觀相同的讀數就可能有不同限制；先確認來源與航向有效，才解讀方位。"
      ],
      "references": [
        {
          "title": "FAA AIM 1-1：導航設備、GPS 完整性與 VFR 航點",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html",
          "checked": "2026-09-12"
        }
      ],
      "lessonBlocks": [
        {
          "title": "RMI指針給方位，不替你算風修正",
          "paragraphs": [
            "Figure 16-31 的旋轉卡片表示航向，兩根方位指針依來源開關接VOR、ADF或合適GPS資料。圖中的顏色只屬於該圖，不能當作所有儀表的通用來源標準。",
            "在航向卡與VOR資料有效時，頭端讀磁方位TO，尾端讀所在radial FROM。RMI不需OBS選course；要確認來源和指示有效，不把指針頭直接當成保持直線進台所需的迎風heading。"
          ],
          "figure": {
            "label": "Figure 16-31 · Radio magnetic indicator",
            "page": "16-25",
            "url": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=25"
          }
        }
      ]
    },
    {
      "id": "tracking",
      "english": "Tracking With VOR",
      "title": "沿 VOR 航線追蹤",
      "parent": "ground-nav",
      "locator": "PHAK C 版 · 16-25",
      "printedPage": "16-25",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=25",
      "paragraphs": [
        "截獲航線後，應保持能抵消側風的航向，觀察 CDI 趨勢並作小幅修正。單純把機頭指向選定 course 不保證留在線上，因為風仍會造成漂移；偏離後也需要先截回，再改成保持航線的修正角。",
        "若 CDI 緩慢向左移，先在正確感應條件下判斷本機位於航線哪側，再選合理的截獲航向。接近中心時提前減小角度，避免指針一過中線就大轉彎，形成反覆左右擺動的 S 形航跡。"
      ],
      "references": [
        {
          "title": "FAA AIM 1-1：導航設備、GPS 完整性與 VFR 航點",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html",
          "checked": "2026-09-12"
        }
      ],
      "lessonBlocks": [
        {
          "title": "先截回航線，再減為保持角",
          "paragraphs": [
            "Figure 16-32 以350°進台course示範：右側風使航空器往左漂，正確感應下CDI往右；右轉截回，接近中心後減小截獲角，保留足以抵風的航向。",
            "原例試360°發現修正過多，再調355°觀察。這是試調例，不是所有右側風一律修5°；要看趨勢並避免反覆大轉彎造成S形航跡。"
          ],
          "figure": {
            "label": "Figure 16-32 · Tracking a radial in a crosswind",
            "page": "16-25",
            "url": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=25"
          }
        },
        {
          "title": "沿同一條直線過台，OBS可以不變",
          "paragraphs": [
            "原例OBS350、TO進台時位於170 radial一側；越台後若繼續同一直線，會在350 radial上以FROM離台，OBS仍是350。改飛不同離台航線才需重設並截獲新course。",
            "過台附近可能快速偏針與TO／FROM切換，應以整體位置和趨勢判斷，不追逐瞬間大偏轉。"
          ],
          "check": {
            "question": "OBS350 TO進台，越台後沿原直線繼續飛，應把OBS轉成170嗎？",
            "answer": "不需要。仍選350，指示轉FROM；170是原進台位置的radial，不是繼續向前的離台course。"
          }
        }
      ]
    },
    {
      "id": "vor-tips",
      "english": "Tips on Using the VOR",
      "title": "VOR 使用要點",
      "parent": "ground-nav",
      "locator": "PHAK C 版 · 16-26",
      "printedPage": "16-26",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=26",
      "paragraphs": [
        "VOR 訊號具有視線傳播特性，山脈、距離與低高度可能造成接收限制；過台附近也可能出現快速偏轉與 TO／FROM 轉換。這些情況要與真正故障分辨，不能看到每一次小抖動都立刻大幅修正。",
        "先識別台站、確認有效旗標與適用涵蓋，再設定正確航線。過台時保持合理航向與整體導航判斷，不要追逐不穩定指針；如訊號持續不可信，就改用適用備援並查明，而不是以舊讀數繼續推論。"
      ],
      "references": [
        {
          "title": "FAA AIM 1-1：導航設備、GPS 完整性與 VFR 航點",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html",
          "checked": "2026-09-12"
        }
      ],
      "lessonBlocks": [
        {
          "title": "不要用旋轉OBS掩蓋偏離指定航線",
          "paragraphs": [
            "原文提示小抖動先觀察，但其中「recenter the course to the needle」容易誤讀。若任務是保持既定radial，應用合適航向截回；把OBS轉到中線只是改了所選航線，沒有使航空器回到原航線。",
            "確認台站、旗標、服務範圍與感應方向後再修正。若訊號持續不可信，不把等待當成解決故障；使用合適備援並重新確認位置。"
          ],
          "check": {
            "question": "偏離指定radial後把OBS轉到針居中，是否已回到原航線？",
            "answer": "沒有，航空器位置未變，只改了被比較的航線。"
          }
        }
      ]
    },
    {
      "id": "rmi-time",
      "english": "Time and Distance Check From a Station Using a RMI",
      "title": "利用 RMI 估算距台時間與距離",
      "parent": "ground-nav",
      "locator": "PHAK C 版 · 16-26",
      "printedPage": "16-26",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=26",
      "paragraphs": [
        "這項傳統技巧讓台站接近翼尖方向，保持航向與速度，計時方位改變一小段角度，再以小角度幾何估算距離。它依賴穩定飛行、適當的相對角度與合理風假設，不能任意在轉彎或迎台飛行時套公式。",
        "原書以方位改變 10° 作例：若需 75 秒，估計等效距台時間約 75÷10＝7.5 分鐘；若相關對地速度約 120 kt，也就是 2 NM/min，距離約 15 NM。這是近似量測，不是現在沿原機頭方向就會在七分半後到台。"
      ],
      "references": [
        {
          "title": "FAA AIM 1-1：導航設備、GPS 完整性與 VFR 航點",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html",
          "checked": "2026-09-12"
        }
      ],
      "points": [
        "近似式：等效距台時間（分鐘）≈方位變化耗時（秒）／變化角度（度）。",
        "距離（NM）≈等效時間（分鐘）×相關速度（kt）／60；有風時需理解所用 GS 與橫向飛行幾何。",
        "這是小角度近似，不是精密測距；原書示例使用 TAS 的場合也受風影響，不能把 TAS 永遠當成 GS。"
      ],
      "lessonBlocks": [
        {
          "title": "RMI的90°是台站在翼尖方向",
          "paragraphs": [
            "先讓台站方位指針位於相對機頭的90°或270°附近，再保持穩定航向與速度，計時方位改變10°。這裡不是要求磁方位恰好090°。",
            "Figure 16-33 以120秒改變10°，估計等效距台時間120÷10=12分鐘。除法輸入是秒、輸出是分鐘，是小角度近似公式的特定單位組合，不是普通單位消去。"
          ],
          "figure": {
            "label": "Figure 16-33 · Time-distance check example",
            "page": "16-26",
            "url": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=26"
          },
          "table": {
            "caption": "RMI的90°是台站在翼尖方向",
            "headers": [
              "量",
              "範例"
            ],
            "rows": [
              [
                "方位改變",
                "10°"
              ],
              [
                "經過時間",
                "120 s"
              ],
              [
                "近似等效距台時間",
                "120÷10＝12 min"
              ],
              [
                "另設相關對地速度120 kt",
                "12÷60×120＝24 NM"
              ]
            ]
          }
        },
        {
          "title": "12分鐘不是保持當前航向就會到台",
          "paragraphs": [
            "量測航向大致橫過台站方向，航空器不是正朝台站飛；12分鐘表示以相關速度直飛該估計距離的等效時間。額外假設120 kt時才得到約24 NM，原圖本身未提供速度。",
            "公式用小角度與每弧度約60°的近似。理想無風、初始航跡垂直方位線、120 kt飛2分鐘走4 NM時，幾何初始距離4／tan10°≈22.69 NM，結束距離4／sin10°≈23.04 NM；24 NM只是近似。",
            "強風會使heading與track不重合，破壞翼尖量測假設；速度、計時和方位誤差也會累積。不能任意用TAS取代所需對地速度，或把此估算法當成程序要求的DME。"
          ],
          "check": {
            "question": "只知道120秒改變10°，能直接斷言距離24 NM嗎？",
            "answer": "不能。先得近似12分鐘；還需要速度及量測幾何假設，另設120 kt才約24 NM。"
          }
        }
      ]
    },
    {
      "id": "cdi-time",
      "english": "Time and Distance Check From a Station Using a CDI",
      "title": "利用 CDI 估算距台時間與距離",
      "parent": "ground-nav",
      "locator": "PHAK C 版 · 16-27",
      "printedPage": "16-27",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=27",
      "paragraphs": [
        "CDI 方法先定位徑向線並轉到接近垂直於台站方向的航向，依原書程序轉動 OBS，對相鄰角度的兩次中線通過計時。原理仍是以已飛的短距離與方位改變量推算距台距離，不是 CDI 直接量出海里。",
        "自編例：跨過 10° 方位變化用了 2 分鐘，近似等效距台時間為 60×2÷10＝12 分鐘；若估計地速 90 kt，距離約 18 NM。強風、計時誤差或角度過大會降低精度，不能用它取代程序要求的合格距離來源。"
      ],
      "references": [
        {
          "title": "FAA AIM 1-1：導航設備、GPS 完整性與 VFR 航點",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html",
          "checked": "2026-09-12"
        }
      ],
      "points": [
        "依原書先調頻識別、定位徑向線並朝台置中；轉至進台航線左或右 90°，OBS 朝相反方向調到近的 10° 刻度。",
        "保持航向，在 CDI 居中時開始計時；再把 OBS 沿相同調整方向轉 10°，下一次居中時記錄耗時。",
        "近似式：等效時間（分鐘）≈60×實飛分鐘／角度變化；距離≈相關地速×實飛分鐘／角度變化。",
        "自編：2 min、10°、90 kt → 12 min 等效時間、18 NM 估計距離；儀表數值應配合航向、風與計時精度檢驗。"
      ]
    },
    {
      "id": "intercept",
      "english": "Course Intercept",
      "title": "航線截獲",
      "parent": "ground-nav",
      "locator": "PHAK C 版 · 16-27",
      "printedPage": "16-27",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=27",
      "paragraphs": [
        "截獲是先選擇一條會與目標航線相交的航向，再在接近交點時轉成沿線追蹤。先判斷本機位於航線哪側、要向台或離台，以及風如何影響航跡，才能決定往哪側及以多大角度切入。",
        "若只把 OBS 轉到指針居中，那只是重新選出目前所在的線，並沒有把航空器移回原指定航線。正確截獲需要改變實際航跡，並保留轉彎提前量，避免等到中線已到才開始轉。"
      ],
      "references": [
        {
          "title": "FAA AIM 1-1：導航設備、GPS 完整性與 VFR 航點",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html",
          "checked": "2026-09-12"
        }
      ]
    },
    {
      "id": "intercept-rate",
      "english": "Rate of Intercept",
      "title": "截獲速率",
      "parent": "intercept",
      "locator": "PHAK C 版 · 16-27",
      "printedPage": "16-27",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=27",
      "paragraphs": [
        "指針接近中心的速率受截獲角、地速與距台遠近共同影響。對 VOR 而言，徑向線接近台站時收斂，所以同樣側向移動在近台會造成較快角度變化，遠台則可能看起來移動很慢。",
        "地速較高或截獲角較大時，要較早準備轉入航線；接近台站不宜因指針快速移動而慌忙追針。應用趨勢、距離與轉彎能力預判，而非把固定一格當成所有情境相同的轉彎時機。"
      ],
      "references": [
        {
          "title": "FAA AIM 1-1：導航設備、GPS 完整性與 VFR 航點",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html",
          "checked": "2026-09-12"
        }
      ]
    },
    {
      "id": "intercept-angle",
      "english": "Angle of Intercept",
      "title": "截獲角的選擇",
      "parent": "intercept",
      "locator": "PHAK C 版 · 16-27",
      "printedPage": "16-27",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=27",
      "paragraphs": [
        "截獲角是用來切入航線的方向與目標航線之間的夾角，角度較大通常提高側向接近速度，但也增加轉入所需提前量。選角時要考慮偏離程度、距台距離、地速、風及空域邊界，不能只記住固定三十度。",
        "例如距台 60 NM 時一度約對應 1 NM，距台 30 NM 則約半海里；同樣偏三度，側向距離並不相同。接近航線後應減小角度，再以風修正保持，避免把截獲航向當成永久追蹤航向。"
      ],
      "references": [
        {
          "title": "FAA AIM 1-1：導航設備、GPS 完整性與 VFR 航點",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html",
          "checked": "2026-09-12"
        }
      ]
    },
    {
      "id": "dme",
      "english": "Distance Measuring Equipment (DME)",
      "title": "DME 距離測量設備",
      "parent": "ground-nav",
      "locator": "PHAK C 版 · 16-27",
      "printedPage": "16-27",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=27",
      "paragraphs": [
        "DME 藉航空器詢問與地面回覆的時間差估計距離，顯示的是航空器至台站的斜距，不是水平地面距離。VOR／DME 或 VORTAC 的配對選頻方便使用，但仍要確認正確台站與 DME 是否保持在其他頻道。",
        "航空器在台站正上方且高出台站約 6,076 ft，DME 仍約為 1 NM，不會歸零。DME 推估地速或到台時間以距離變化為基礎，若橫向飛過、繞台或近台爬降，就不能直接當成真實對地速度與抵達時間。"
      ],
      "references": [
        {
          "title": "FAA AIM 1-1：導航設備、GPS 完整性與 VFR 航點",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html",
          "checked": "2026-09-12"
        }
      ],
      "points": [
        "斜距近似：DME＝√(水平距離²＋相對台站高度²)，兩種長度必須先換成相同單位。",
        "自編：水平距離 3 NM、高出台站 4 NM，斜距為 5 NM；直接把 5 NM 當地面距離會高估。",
        "在台站正上方，高出台站 6,076 ft 約為 1 NM；應使用相對台站的高度，不是任意地點的 AGL。",
        "距台遠且相對高度小時，斜距與水平距離差較小；近台高空時差異較大。",
        "若設備有 DME HOLD，切換 VOR 頻率後距離可能仍來自前一台；要確認配對與識別。"
      ]
    },
    {
      "id": "vor-dme-rnav",
      "english": "VOR/DME RNAV",
      "title": "VOR／DME 區域導航",
      "parent": "ground-nav",
      "locator": "PHAK C 版 · 16-28",
      "printedPage": "16-28",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=28",
      "paragraphs": [
        "傳統 VOR／DME RNAV 利用測得的徑向方位與距離建立本機位置，再相對於設定的偏移航點提供導航。它讓路線不必直接經過台站，但仍受地面訊號、台站幾何、設備設定及涵蓋範圍影響。",
        "這與以衛星定位的 GPS RNAV 是不同位置來源，也不代表具備所有現代 RNAV／RNP 程序能力。輸入偏移航點時應核對基準台、方位與距離，並確認設備及操作是否適用所需路線。"
      ],
      "references": [
        {
          "title": "FAA AIM 1-1：導航設備、GPS 完整性與 VFR 航點",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html",
          "checked": "2026-09-12"
        }
      ]
    },
    {
      "id": "adf",
      "english": "Automatic Direction Finder (ADF)",
      "title": "ADF 自動測向儀",
      "parent": "ground-nav",
      "locator": "PHAK C 版 · 16-29",
      "printedPage": "16-29",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=29",
      "paragraphs": [
        "ADF 透過 NDB 等適用訊號指示台站相對於機頭的方向，固定刻度卡上的 relative bearing 需與航向相加才成為相應基準的台站方位。指針只指向台站，不會自動計算維持一條對地航線所需的迎風修正。",
        "自編例：磁航向 100°、相對方位 040°，台站磁方位約為 140°。一直把指針維持正前方是 homing，側風下可能形成彎曲路徑；tracking 則需建立風修正，並留意雷暴、夜間、海岸與地形等訊號誤差。"
      ],
      "references": [
        {
          "title": "FAA AIM 1-1：導航設備、GPS 完整性與 VFR 航點",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html",
          "checked": "2026-09-12"
        }
      ],
      "points": [
        "固定卡 ADF：磁方位 TO≈磁航向＋相對方位，超過 360° 時減 360°；旋轉卡與 RMI 的讀法不同。",
        "Homing：持續機頭朝台，側風會讓地面路徑彎曲。Tracking：用迎風角維持所需對地路徑。",
        "ADF 易受雷暴靜電、夜間傳播、地形及海岸效應影響；某些設備缺乏明確失效旗標，必須識別並交叉確認。"
      ]
    },
    {
      "id": "gps",
      "english": "Global Positioning System",
      "title": "全球定位系統",
      "parent": "ground-nav",
      "locator": "PHAK C 版 · 16-30",
      "printedPage": "16-30",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=30",
      "paragraphs": [
        "GPS 接收器以衛星訊號的傳播時間推估偽距，配合已知衛星位置解算本機位置與時間。一般三維定位至少需要四顆衛星以同時求位置與接收器時鐘誤差，但能顯示座標不等於已具備所需完整性保證。",
        "GPS 提供的是位置與對地運動資訊，單一天線系統通常不能在靜止時僅靠位置變化得知機頭方向。設備核准、安裝、資料庫、接收品質與操作模式都影響用途；有 GPS 的平板不因此成為核准的 IFR 導航設備。"
      ],
      "references": [
        {
          "title": "FAA AIM 1-1：導航設備、GPS 完整性與 VFR 航點",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html",
          "checked": "2026-09-12"
        }
      ]
    },
    {
      "id": "sa",
      "english": "Selective Availability",
      "title": "Selective Availability：歷史性精度限制",
      "parent": "gps",
      "locator": "PHAK C 版 · 16-31",
      "printedPage": "16-31",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=31",
      "paragraphs": [
        "Selective Availability 曾是刻意降低民用 GPS 精度的機制，與天線遮蔽、干擾及設備故障不同。美國在 2000 年 5 月停止使用 SA，因此原書相關介紹應理解為系統歷史，而不是今天持續存在的固定誤差來源。",
        "SA 停止不代表 GPS 從此沒有錯誤。大氣延遲、多路徑、衛星幾何、干擾與欺騙等仍可能影響導航，機師應依現行設備警示與其他參考交叉檢查，不能用一項歷史改善否定所有異常。"
      ],
      "references": [
        {
          "title": "GPS.gov：Selective Availability 的停止與歷史",
          "url": "https://www.gps.gov/selective-availability",
          "checked": "2026-09-12"
        }
      ],
      "currentNote": "歷史機制：SA 在 2000 年 5 月停止；這不代表排除今日的 GNSS 干擾、欺騙、遮蔽或其他誤差。"
    },
    {
      "id": "vfr-gps",
      "english": "VFR Use of GPS",
      "title": "VFR 使用 GPS",
      "parent": "gps",
      "locator": "PHAK C 版 · 16-32",
      "printedPage": "16-32",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=32",
      "paragraphs": [
        "VFR 使用 GPS 可提高位置意識、協助辨識空域與檢查 ETA，但仍要保持目視、地形淨空與適用天氣條件。導航線不會把 VFR 航班變成可穿雲的 IFR 航班，也不保證直飛路徑符合任何特殊空域要求。",
        "進入陌生地區前可先核對航點與機場識別，航中再用地標或其他導航來源驗證。若螢幕位置與可靠外界觀察衝突，不應只因電子數字較精細就選擇相信它，而要找出資料或系統問題。"
      ],
      "references": [
        {
          "title": "FAA AIM 1-1：導航設備、GPS 完整性與 VFR 航點",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html",
          "checked": "2026-09-12"
        }
      ]
    },
    {
      "id": "raim",
      "english": "RAIM Capability",
      "title": "RAIM 自主完整性監視",
      "parent": "vfr-gps",
      "locator": "PHAK C 版 · 16-32",
      "printedPage": "16-32",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=32",
      "paragraphs": [
        "RAIM 用額外且幾何條件適當的衛星量測互相比對，偵測位置解算是否可能不可靠。典型故障偵測需至少五顆衛星，或四顆加合格氣壓輔助；故障排除通常需六顆，或五顆加氣壓輔助，不能只數能定位的四顆。",
        "「無法提供完整性監視」與「已偵測到不一致」是不同警示，但都不能忽略。不是所有 VFR 接收器都有相同 RAIM 能力，WAAS 設備也有其核准方式與警示；實際處置應依設備手冊、操作階段與適用程序。"
      ],
      "references": [
        {
          "title": "FAA AIM 1-1：導航設備、GPS 完整性與 VFR 航點",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html",
          "checked": "2026-09-12"
        }
      ],
      "currentNote": "RAIM 是完整性監視，不是單純提高位置精度。衛星數是典型最低條件，還需適當幾何與設備能力；WAAS／其他核准系統依各自手冊與適用操作要求判斷。",
      "points": [
        "一般三維位置解算：典型至少四顆衛星；這不等同完整性監視已可用。",
        "RAIM 故障偵測：典型五顆，或四顆加適用 baro-aiding；FDE 排除：典型六顆，或五顆加適用 baro-aiding。",
        "數量足夠仍可能因幾何不佳無法滿足要求，預測可用也不是航中永不失效的保證。",
        "無法監視＝沒有足夠條件確認完整性；偵測不一致＝發現可能有錯。按設備警示與適用程序處置。",
        "不能用 GPS 高度冒充合格氣壓輔助輸入；氣壓設定與輸入方式依設備手冊。"
      ]
    },
    {
      "id": "gps-tips",
      "english": "Tips for Using GPS for VFR Operations",
      "title": "VFR GPS 操作習慣",
      "parent": "ground-nav",
      "locator": "PHAK C 版 · 16-33",
      "printedPage": "16-33",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=33",
      "paragraphs": [
        "在地面先設定航路與航點，確認資料庫、導航來源、縮放、電源和備援，能減少空中低頭操作。每次改航或按 Direct-To 後，應核對新目的地、航段方向與空域地形，避免同名或近似識別造成錯選。",
        "GPS 或 GNSS 異常可能同時影響導航、地速及其他依賴定位的系統。飛前查相關 NOTAM，航中若出現跳位、矛盾或失效，先控制航空器、改用可靠參考並協調 ATC；不要連續重輸航路而忽略外界。"
      ],
      "references": [
        {
          "title": "FAA AIM 5-1：飛前準備、NOTAM 與飛行計畫",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_1.html",
          "checked": "2026-09-12"
        },
        {
          "title": "FAA AIM 1-1：導航設備、GPS 完整性與 VFR 航點",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html",
          "checked": "2026-09-12"
        }
      ]
    },
    {
      "id": "vfr-waypoints",
      "english": "VFR Waypoints",
      "title": "VFR 航點",
      "parent": "ground-nav",
      "locator": "PHAK C 版 · 16-33",
      "printedPage": "16-33",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=33",
      "paragraphs": [
        "FAA VFR 航點的五字母識別通常以 VP 開頭，方便資料庫輸入與位置參考；識別本身不是預定用於 ATC 通話的可發音名稱。若與目視報告點重合，通話可按公布的地標名稱使用，而非自行逐字念 VP 代碼。",
        "VFR 航點不構成 IFR 航路，也不授予空域進入權。山口入口航點只是定位輔助，不能直接把兩個點連成必然安全的穿山路徑；接近常用航點時還要留意交通集中與視野限制。"
      ],
      "references": [
        {
          "title": "FAA AIM 1-1：導航設備、GPS 完整性與 VFR 航點",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html",
          "checked": "2026-09-12"
        }
      ],
      "points": [
        "VP 開頭的五字母代碼供資料庫與 VFR 計畫使用，不能當成 IFR 航路點提交。",
        "ATC 通訊使用適用的目視地標名稱；不要假設管制員認得所有 VP 代碼。",
        "航點不代表空域許可、地形安全或雲中通道，山口兩點直接連線尤其不可當作保證安全的路線。"
      ]
    },
    {
      "id": "lost",
      "english": "Lost Procedures",
      "title": "迷航處置",
      "parent": null,
      "locator": "PHAK C 版 · 16-34",
      "printedPage": "16-34",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=34",
      "paragraphs": [
        "發現位置不確定時，先保持航空器控制、合適速度與安全地形淨空，避免慌張轉彎或只盯螢幕。由最後已知位置、航向、時間與估計地速建立合理區域，再比對大尺度地標、可用導航訊號及燃油餘裕。",
        "應及早向 ATC 或 Flight Service 說明位置不確定並請求協助；無法取得聯絡時可使用適用緊急頻率。為改善視野或通訊而爬升前，仍需確認雲、地形、空域與性能，不能把「迷航就爬高」當成無條件指令。"
      ],
      "references": [
        {
          "title": "FAA AIM 6-2：緊急通訊與尋求協助",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap6_section_2.html",
          "checked": "2026-09-12"
        }
      ],
      "points": [
        "先維持控制與地形淨空，記錄最後已知點、經過時間、航向、燃油與可用資訊。",
        "及早承認不確定並求助，提供呼號、機型、估計位置／高度、最後已知點、燃油與需求。",
        "若原頻率無法聯絡，可用 121.5 MHz 尋求緊急協助；緊急代碼與宣告依實際情況及 ATC 指示處理，不把短暫定位疑問一律當成無線電失效。",
        "爬升可能改善視野與無線電涵蓋，但仍須符合天氣、空域、地形與性能條件；不要為了定位而進入雲中。",
        "不要耗盡燃油才選擇降落；在仍有可用機場與餘裕時採取行動。"
      ]
    },
    {
      "id": "diversion",
      "english": "Flight Diversion",
      "title": "改航與轉降",
      "parent": null,
      "locator": "PHAK C 版 · 16-34",
      "printedPage": "16-34",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=34",
      "paragraphs": [
        "改航先選擇在天氣、跑道、燃油、地形與服務上適合的替代機場，再估算新航向、距離、時間與到達燃油。最近的機場不一定最合適，而原先的備降點也可能因天氣變化不再可用。",
        "自編例：替代機場距 36 NM、預估地速 90 kt，約需 24 分鐘；若耗油率 8 US gal/h，該段約用 3.2 US gal，另須計入轉向、爬降與所需備份。決定後更新 ATC／飛行計畫，避免一邊繼續遠離選項一邊慢慢計算。"
      ],
      "references": [
        {
          "title": "FAA AIM 6-2：緊急通訊與尋求協助",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap6_section_2.html",
          "checked": "2026-09-12"
        }
      ],
      "points": [
        "先選安全可行的替代地點並建立大致航向，急迫時不要等所有精算完成才開始脫離危險。",
        "記錄改航起點與時間，再更新風修正、GS、ETA 及剩餘燃油，保持外部掃視與航空器控制。",
        "36 NM／90 kt＝0.4 h＝24 min；8 US gal/h×0.4 h＝3.2 US gal，這只是該段用油。",
        "改航後確認新機場跑道、天氣、NOTAM 與進入條件，並更新適用的 ATC／飛行計畫資訊。"
      ]
    },
    {
      "id": "summary",
      "english": "Chapter Summary",
      "title": "本章整合與練習",
      "parent": null,
      "locator": "PHAK C 版 · 16-35",
      "printedPage": "16-35",
      "source": "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf#page=35",
      "paragraphs": [
        "本章把位置與方向、風與速度、時間與燃油，以及不同導航來源的限制連成一個循環。計畫提供預期，飛行觀察用來驗證，差異則觸發重新計算或改航；精確數字不能取代對資料品質的理解。",
        "練習規劃一條三航段路線，列出真航線、磁差、風修正、地速、時間與燃油，再加入 VOR 失效、GPS 異常或目的地關閉。逐一說明如何用其他來源重新定位，何時改航，以及剩餘燃油是否仍足夠。"
      ]
    }
  ],
  "confusions": [
    {
      "title": "航向與航跡",
      "clarification": "一個指機頭方向，一個指對地路徑。",
      "example": "側風中兩者可能不同。"
    },
    {
      "title": "磁差與羅差",
      "clarification": "前者是地理磁場方向差，後者是航空器對羅盤的影響。",
      "example": "羅差應依適用修正卡查閱。"
    },
    {
      "title": "TAS 與 GS",
      "clarification": "TAS 相對空氣，GS 相對地面；對地航段時間用 GS。",
      "example": "75 NM 在 GS 100 kt 時需 45 分鐘，不可直接拿 IAS 代入。"
    },
    {
      "title": "VOR 徑向線與進台航線",
      "clarification": "Radial 永遠由台向外命名，TO／FROM 不由機頭朝向直接決定。",
      "example": "位於 090 radial，向台航線約為 270°。"
    },
    {
      "title": "DME 斜距與水平距離",
      "clarification": "DME 包含相對台站高度，過台不一定歸零。",
      "example": "在台站上方約 6,076 ft 仍可能顯示 1 NM。"
    },
    {
      "title": "GPS 定位、精度與完整性",
      "clarification": "顯示座標不等於系統能確認該座標符合所需完整性。",
      "example": "四顆衛星能定位，並不直接表示具備可用 RAIM。"
    },
    {
      "title": "VFR 計畫與 flight following",
      "clarification": "提交、啟用、更新、關閉 VFR 搜救計畫與 ATC 交通諮詢不同。",
      "example": "有詢答機代碼或收到 radar contact，不代表 VFR 計畫已啟用。"
    }
  ],
  "scenario": "自編算例：航段 90 NM、地速 90 kt，時間為 1 小時；假設該航段耗油率 8 US gal/h，航段用油為 8 US gal。若地速降為 60 kt，時間變 1.5 小時，同耗油率下為 12 US gal。",
  "question": "90 NM 航段以 60 kt 地速飛行需要多久？",
  "options": [
    "0.5 小時",
    "1 小時",
    "1.5 小時"
  ],
  "answer": 2,
  "explanation": "90÷60＝1.5 小時；計算對地航段時間需使用地速。",
  "verified": true,
  "reader": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=388",
  "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=388",
  "detailMode": "outline",
  "checked": "2026-09-21",
  "coverageNote": "本輪深化前 46 節（導論至 RMI 時間／距離估算），共 68 個單元、14 張比較表、28 題理解練習與 Figure 16-1～16-33 官方原圖指引。核對航行表燃油與高度差異、現行飛行計畫及VOR服務範圍、儀表判讀與近似量測；CDI時間／距離估算至章末仍為既有概述，未標為全章深化完成。"
};
