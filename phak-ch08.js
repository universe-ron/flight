export const chapter={
  "id": "phak25c-8",
  "number": 8,
  "title": "飛行儀表",
  "english": "Flight Instruments",
  "section": "第 8 章；8-1～8-28，全章目錄逐節講解",
  "goal": "從感測來源理解讀值、誤差與故障交叉檢查。",
  "primer": "空速表比較總壓與靜壓，高度表主要使用靜壓，升降速度表利用靜壓變化。它們雖顯示不同量，可能共享同一資訊來源，因此多個儀表同時異常不一定是多個獨立故障。",
  "terms": [
    "Pitot-static · 皮托靜壓",
    "AHRS · 姿態航向參考",
    "ADC · 大氣資料電腦"
  ],
  "prompts": [
    "畫出空速、高度、VSI、姿態與航向的資料來源，找出哪些故障可能一次影響多項指示。",
    "比較皮托入口堵塞但排水孔暢通、總壓完全被困、靜壓被困三種情況，說明推論的條件。"
  ],
  "keyPoints": [
    "總壓、靜壓與排水孔的堵塞條件不同，三表反應也不同。",
    "氣壓高度不等於離地高度；IAS、TAS 與地速不可互換。",
    "ADC、AHRS 與螢幕各有不同功能，多個畫面可能共用來源。",
    "姿態、迎角、轉彎率與協調狀態分別回答不同問題。",
    "磁差、自差與動態誤差需分開，南北口訣必須註明磁半球。"
  ],
  "detailSections": [
    {
      "id": "introduction",
      "english": "Introduction",
      "title": "導論：從感測來源理解指示",
      "parent": null,
      "locator": "PHAK C 版 · 8-1",
      "printedPage": "8-1",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=1",
      "paragraphs": [
        "飛行儀表將壓力、慣性、磁場或溫度轉成可讀資訊。學習時應先確認量測什麼，再追蹤訊號如何處理與顯示，最後思考故障會讓哪些指示一起出錯。",
        "姿態、航向、航跡、高度與速度各自回答不同問題。自編例：機頭抬高不保證正在爬升，應交叉查看高度與垂直速度；單一數字看似合理，也不代表感測來源可靠。"
      ],
      "lessonBlocks": [
        {
          "title": "先問量測什麼，再判斷飛機正在做什麼",
          "paragraphs": [
            "讀表可拆成四步：辨認物理量、追蹤來源、核對基準與單位，再與其他資訊比較。例如機頭向上是姿態，爬升是高度增加，兩者之間還隔著空速、迎角與能量狀態；不能只用其中一項代替另一項。",
            "全章深入講解涵蓋皮托靜壓、電子顯示、陀螺、迎角、羅盤與外氣溫度，配合 Figure 8-1～8-39。圖解和案例用來練習原理推導、讀值基準與獨立交叉核對，機型操作以適用手冊為準。"
          ],
          "table": {
            "caption": "把儀表分成不同問題",
            "headers": [
              "要知道什麼",
              "主要資訊",
              "還需分清"
            ],
            "rows": [
              [
                "相對空氣的速度",
                "ASI／ADC",
                "不是地速"
              ],
              [
                "相對壓力基準的高度",
                "高度表／ADC",
                "不是直接量測 AGL"
              ],
              [
                "機體如何傾斜",
                "姿態表／AHRS",
                "不是飛行路徑角"
              ],
              [
                "機頭指向哪裡",
                "航向表與磁參考",
                "不是地面航跡"
              ],
              [
                "轉得多快、是否協調",
                "轉彎率與小球／滑塊",
                "是兩種不同指示"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "pitot-static",
      "english": "Pitot-Static Flight Instruments",
      "title": "皮托靜壓飛行儀表",
      "parent": null,
      "locator": "PHAK C 版 · 8-1",
      "printedPage": "8-1",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=1",
      "paragraphs": [
        "典型系統以皮托管取得總壓，以靜壓口取得環境靜壓。空速表比較兩者，高度表以靜壓推算高度，垂直速度表則利用靜壓隨時間的變化，三者的共同來源形成共同故障風險。",
        "低速近似下，總壓減靜壓等於動壓，動壓與空氣密度及空速平方相關。數位顯示仍可能依賴同樣的管路，換成玻璃座艙不會自動消除結冰、洩漏或靜壓位置誤差。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 8-1 · 沿著兩種壓力追蹤三個儀表",
          "paragraphs": [
            "先從迎風的皮托入口沿總壓管走到 ASI 膜盒，再從靜壓口沿共用管路走到 ASI 外殼、高度表及 VSI。圖中的紅、藍管路區分壓力來源；它們不是供電線，也不是讓高速氣流持續穿過所有儀表的風道。",
            "在傳統三表配置中，只有空速表需要總壓與靜壓兩者。高度表和 VSI 只需靜壓，但利用方式不同：前者把壓力換成高度，後者利用壓力變化率。備用靜壓也可能一次改變三表，故障診斷要從共用管路開始。"
          ],
          "figure": {
            "label": "Figure 8-1 · Pitot-static system and instruments",
            "page": "8-2",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=2"
          },
          "table": {
            "caption": "三表的壓力輸入",
            "headers": [
              "儀表",
              "總壓輸入",
              "靜壓用途"
            ],
            "rows": [
              [
                "ASI",
                "膜盒內",
                "外殼中的參考壓力"
              ],
              [
                "Altimeter",
                "無",
                "膜盒周圍壓力"
              ],
              [
                "VSI",
                "無",
                "直接與延遲兩條路徑形成差壓"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "impact",
      "english": "Impact Pressure Chamber and Lines",
      "title": "總壓腔與管路",
      "parent": "pitot-static",
      "locator": "PHAK C 版 · 8-2",
      "printedPage": "8-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=2",
      "paragraphs": [
        "皮托管迎向氣流的開口把流動空氣減速，將總壓送入管路；它並不是直接把純動壓送給空速表。動壓需透過總壓與靜壓的差求得，高速時還需考慮可壓縮性。",
        "排水孔讓水分排出，也使入口堵塞但排水孔暢通時的反應，與整個腔室封死不同。飛行前按檢查單確認護套已移除、開口無異物；不可自行吹氣測試而損壞敏感儀表。"
      ],
      "lessonBlocks": [
        {
          "title": "總壓減靜壓，才得到空速所需的差壓",
          "paragraphs": [
            "令 pₜ 為皮托量到的總壓、pₛ 為靜壓，空速系統使用的衝壓差為 q꜀＝pₜ−pₛ。在低馬赫數、可忽略可壓縮性的近似下，q꜀≈q＝½ρV²。皮托管不是只量到動壓；高速下也不能直接把衝壓差與不可壓縮動壓完全等同。",
            "自編例：pₛ＝100 kPa、pₜ＝102 kPa，差壓為 2 kPa。沒有相對氣流時 pₜ＝pₛ，動壓接近零；原文將這種情況寫成「動壓等於靜壓」容易混淆，應改讀為「總壓等於靜壓」。"
          ],
          "check": {
            "question": "空氣密度不變，空速加倍時差壓約增加多少？",
            "answer": "在低速近似中 q 與 V² 成正比，因此約成為四倍；空速刻度不是直接把壓力差線性放大。"
          }
        },
        {
          "title": "入口、排水孔與相對氣流",
          "paragraphs": [
            "停在地面的飛機仍可能有迎面風，因此 ASI 不一定為零。相對空氣的速度才是關鍵；同樣的正面相對氣流可來自飛機前進或風迎面吹來。偏離探頭軸線的流動會引入誤差，不能把任意斜風的全風速當成可靠 ASI 讀值。",
            "排水孔使進入腔室的水分能離開，也改變堵塞後壓力是否被困住。讀 Figure 8-1 時同時找出入口、排水孔、加熱元件與護套檢查位置；加熱功率標示是該圖範例，不是所有皮托管的規格。"
          ]
        }
      ]
    },
    {
      "id": "static",
      "english": "Static Pressure Chamber and Lines",
      "title": "靜壓來源與備用靜壓",
      "parent": "pitot-static",
      "locator": "PHAK C 版 · 8-2",
      "printedPage": "8-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=2",
      "paragraphs": [
        "靜壓口位於選定機身位置，力求量到接近環境的壓力，但仍可能有位置誤差。部分機型備用靜壓取自座艙，其壓力受通風、門窗及機體流場影響，不能假定等於外界。",
        "若備用來源壓力較低，高度與空速通常偏高，VSI 可能短暫顯示爬升。修正量與操作依 AFM／POH；原書提到破壞 VSI 玻璃的舊式作法，不可當成所有機型適用的通用程序。"
      ],
      "lessonBlocks": [
        {
          "title": "備用靜壓為何會讓三表同時跳動",
          "paragraphs": [
            "假設座艙備用靜壓低於外界、總壓仍正常：高度表把較低壓力解讀成較高高度；ASI 的總壓減去較小參考壓力，差值變大；VSI 則先感受到壓力突然下降，短暫顯示爬升。若隨後保持高度，VSI 兩側重新平衡，回到近零。",
            "這是附有前提的推導。門窗、通風與機身流場可能改變座艙壓力，實際修正量須查備用靜壓校正表。破壞 VSI 玻璃是原書提及的舊式機械系統應變方式；只有適用機型核准程序明定時才依其執行，不可自行套用到 ADC 或其他管路配置。"
          ],
          "table": {
            "caption": "切換至較低備用靜壓時",
            "headers": [
              "儀表",
              "初始反應",
              "保持高度後"
            ],
            "rows": [
              [
                "高度表",
                "指示升高",
                "保留來源壓力差造成的偏差"
              ],
              [
                "ASI",
                "指示升高",
                "依校正表修正"
              ],
              [
                "VSI",
                "短暫爬升",
                "重新平衡後接近零"
              ]
            ]
          },
          "check": {
            "question": "切換後三表都變了，是否表示三個儀表同時損壞？",
            "answer": "不一定。單一共用靜壓來源改變就足以造成三表一起變動。"
          }
        }
      ]
    },
    {
      "id": "altimeter",
      "english": "Altimeter",
      "title": "氣壓高度表",
      "parent": "pitot-static",
      "locator": "PHAK C 版 · 8-3",
      "printedPage": "8-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=3",
      "paragraphs": [
        "氣壓高度表把靜壓對照標準大氣的壓力高度關係，再依設定的基準顯示高度。它不是直接測量離地距離，地形改變時即使顯示不變，實際離地高度也可改變。",
        "傳統儀表用密封、部分抽空的膜盒及機械連桿感測壓力，電子式則使用壓力感測器。不要把標準海平面設定 29.92 inHg 誤認成膜盒內固定壓力；設定窗與感測元件是不同概念。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 8-2 · 膜盒、連桿與設定窗",
          "paragraphs": [
            "沿圖從靜壓口進入外殼，找到層疊的 aneroid wafers，再追蹤機械連桿到指針。膜盒為密封、抽去大部分空氣的彈性元件；周圍壓力降低時較能膨脹，壓力增加時受到壓縮。其位置由外壓與機械彈性等共同決定。",
            "29.92 inHg 是標準海平面氣壓及壓力高度的設定基準，不是膜盒內固定的殘留氣壓。原文以「膜盒內外壓力相等」說明停止位置也過度簡化；不能省略膜盒本身的彈性作用。設定旋鈕調整指示基準，不是把膜盒灌到指定壓力。"
          ],
          "figure": {
            "label": "Figure 8-2 · Altimeter",
            "page": "8-3",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=3"
          }
        }
      ],
      "references": [
        {
          "title": "FAA · Aneroid barometer：抽空盒與機械結構",
          "url": "https://www.faa.gov/media/28556",
          "checked": "2026-09-16"
        }
      ]
    },
    {
      "id": "altimeter-principle",
      "english": "Principle of Operation",
      "title": "高度表運作原理",
      "parent": "altimeter",
      "locator": "PHAK C 版 · 8-3",
      "printedPage": "8-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=3",
      "paragraphs": [
        "周圍靜壓下降時膜盒膨脹，連桿使指示向較高高度移動；靜壓上升時則相反。校準以標準大氣為基礎，所以相同壓力在不同實際溫度分布下，不一定對應相同幾何高度。",
        "多指針表要分清百呎、千呎與萬呎指針，數位式也要核對單位、設定與警示。自編練習：先讀完整高度再核對設定窗，避免只看長針便把相差一千呎的指示當成相同。"
      ],
      "lessonBlocks": [
        {
          "title": "讀完整高度，辨認三根指針的位值",
          "paragraphs": [
            "傳統三針式將高度拆成百呎、千呎和萬呎。各指針連續轉動，接近下一個千呎或萬呎時，較高位指針也逐步接近下一刻度，不能把它們當成互不相干的整數讀盤。圖中長細三角指針、短寬指針和百呎長針各有用途，外型以實際儀表為準。",
            "自編練習：9,800 ft 的百呎指針接近 8，千呎指針接近下一圈的 0，萬呎指針接近 1。先讀出「九千八百」，再核對設定窗與預期高度，可降低只盯一根針造成的位數錯誤。電子數字雖避免部分讀針問題，仍會受設定和來源錯誤影響。"
          ]
        }
      ]
    },
    {
      "id": "nonstandard",
      "english": "Effect of Nonstandard Pressure and Temperature",
      "title": "非標準氣壓與溫度的影響",
      "parent": "altimeter",
      "locator": "PHAK C 版 · 8-4",
      "printedPage": "8-4",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=4",
      "paragraphs": [
        "維持同一指示高度而未更新設定，從高壓區飛向低壓區時，真實高度可能比預期低。更新氣壓基準可處理設定差異，但不會自動消除非標準溫度造成的高度誤差。",
        "在比標準更冷的空氣中，壓力面間距縮小，相對設定來源上方的真實高度通常低於指示所暗示的高度。低溫修正需依適用程序，不能只改設定窗代替程序要求的修正與通報。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 8-3 · 冷空氣壓力層較薄",
          "paragraphs": [
            "圖中的同名壓力面由暖側向冷側降低。高度表只知道目前壓力，不知道壓力面在現實中距海平面多少；飛機保持同一指示高度跨入較冷氣團時，真實高度可能降低。判斷誤差應看相對標準大氣的偏差，不是只看攝氏溫度是否低於零。",
            "高壓飛向低壓而沒有更新設定，也可能使真實高度低於預期，但原因是設定基準錯誤。更新 QNH 與處理低溫誤差是兩件事；即使設定正確，寒冷空氣柱造成的幾何高度差仍存在。地形另有起伏，MSL 高度更不能直接當成 AGL。"
          ],
          "figure": {
            "label": "Figure 8-3 · Effects of nonstandard temperature",
            "page": "8-4",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=4"
          },
          "check": {
            "question": "氣壓設定已更新，是否已消除所有高度誤差？",
            "answer": "沒有。非標準溫度、靜壓位置、儀表與安裝誤差等仍可能存在。"
          }
        },
        {
          "title": "Figure 8-4 · 先減去機場標高，再查低溫表",
          "paragraphs": [
            "原圖橫列是「高於機場的高度」，不是飛機 MSL 高度。自編套用：機場標高 2,000 ft、待修正高度 3,000 ft，查表高度為 1,000 ft；報告溫度 −10°C 對應原圖約 100 ft 的可能偏低量。這是查表教學，不是把所有 3,000 ft 航段都固定加 100 ft。",
            "FAA 現行 CTA 程序保留當前高度表設定，將適用修正加到相關高度；ATC 指定高度的修正須先取得 ATC 核准，其他航段亦須遵守適用通報規定。不可轉動設定窗來代替低溫修正。適用航段、溫度限制與取整方式應查有效程序。"
          ],
          "figure": {
            "label": "Figure 8-4 · Cold temperature error table",
            "page": "8-5",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=5"
          }
        }
      ],
      "references": [
        {
          "title": "FAA AIM 7-3 · 低溫高度誤差與 CTA 程序",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_3.html",
          "checked": "2026-09-16"
        }
      ]
    },
    {
      "id": "setting",
      "english": "Setting the Altimeter",
      "title": "設定氣壓基準",
      "parent": "altimeter",
      "locator": "PHAK C 版 · 8-5",
      "printedPage": "8-5",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=5",
      "paragraphs": [
        "設定窗改變高度顯示所用的壓力基準。QNH 用於使地面指示接近海拔，標準設定用於壓力高度或飛航空層，QFE 則以指定場面基準為參考；必須先知道當前採用哪一種。",
        "在相同靜壓下，調高設定值會使指示高度增加。自編例：把 29.82 改成 29.92 inHg，指示約增加 100 呎，這是近似敏感度，不代表飛機真的爬升；換設時機依所在地規則。"
      ],
      "lessonBlocks": [
        {
          "title": "用帶正負號的差值檢查設定誤差",
          "paragraphs": [
            "僅考慮氣壓設定差、採 1 inHg≈1,000 ft 的近似：改用當前設定後的高度≈原指示高度＋1,000×（當前設定−原設定）。這是同一位置更換基準的讀值變化；它不是包含溫度等所有誤差的精確真實高度公式。",
            "沿用原書例子：仍設 29.94、讀 2,600 ft，而當地為 29.69，換成正確設定後約為 2,350 ft。若當地設定改成 30.56，則約為 3,220 ft。30.56 比 29.94 高；原文「較低設定」的措辭與數值相反，應以實際數字判斷。"
          ],
          "table": {
            "caption": "原設定 29.94 inHg、原指示 2,600 ft 的近似換算",
            "headers": [
              "當前設定",
              "當前−原設定",
              "讀值改變",
              "新讀值"
            ],
            "rows": [
              [
                "29.69",
                "−0.25 inHg",
                "−250 ft",
                "2,350 ft"
              ],
              [
                "30.56",
                "＋0.62 inHg",
                "＋620 ft",
                "3,220 ft"
              ]
            ]
          },
          "check": {
            "question": "把設定調高，飛機是否立即爬升？",
            "answer": "不會。相同靜壓下指示增加，改變的是顯示基準；飛機是否改變高度取決於後續飛行狀態。"
          }
        }
      ]
    },
    {
      "id": "altimeter-operation",
      "english": "Altimeter Operation",
      "title": "讀值、換設與交叉核對",
      "parent": "altimeter",
      "locator": "PHAK C 版 · 8-6",
      "printedPage": "8-6",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=6",
      "paragraphs": [
        "正確操作包含取得適用且及時的氣壓資料、確認 inHg 或 hPa 單位、設定數值並檢查結果是否合理。只抄到數字卻漏看單位或來源地點，可能把明顯偏差帶進飛行。",
        "原書以美國航路情境解釋換設，不能將其中轉換高度直接套到世界各地。自編練習：先預測調高設定後指示應往哪邊移動，再觀察實際結果，並核對其他高度資訊的基準差異。"
      ],
      "lessonBlocks": [
        {
          "title": "分清外界壓力變動與旋鈕調整",
          "paragraphs": [
            "飛機停在原地且設定不動，若外界壓力由 29.98 降至 29.68 inHg，讀值約增加 300 ft，因為感測元件把壓力下降解讀成爬升。取得並設定新的適用氣壓後，讀值才重新接近原地標高。",
            "相反地，若外界靜壓不變而只把設定提高 0.10 inHg，讀值也約增加 100 ft，但原因是基準調整。飛行中若保持錯誤設定與固定指示高度，飛機可能實際沿著下降的壓力面降低；這與「在固定位置轉旋鈕」是不同情境。"
          ],
          "table": {
            "caption": "兩個變數分開看",
            "headers": [
              "保持什麼不變",
              "改變什麼",
              "高度表反應"
            ],
            "rows": [
              [
                "設定不變",
                "感測靜壓下降",
                "指示升高"
              ],
              [
                "感測靜壓不變",
                "設定值提高",
                "指示升高"
              ],
              [
                "指示與設定不變",
                "飛入較低壓力區",
                "實際高度可能降低"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "altitudes",
      "english": "Types of Altitude",
      "title": "五種高度與參考基準",
      "parent": "altimeter",
      "locator": "PHAK C 版 · 8-6",
      "printedPage": "8-6",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=6",
      "paragraphs": [
        "指示高度是高度表當下讀值；真實高度是相對平均海平面的實際高度；絕對高度是相對正下方地面的高度。三者要分清參考面，氣壓高度表並不會隨腳下山谷自動改成離地指示。",
        "壓力高度以標準氣壓基準表達，密度高度則以標準大氣中具有相同密度的高度描述性能環境。高密度高度不表示地面海拔變高，而是飛機在稀薄空氣中的起飛、爬升等性能改變。"
      ],
      "points": [
        "Indicated altitude：讀值受設定、感測誤差與大氣條件影響。",
        "True altitude：MSL；Absolute altitude：AGL，參考面不同。",
        "Pressure altitude：標準設定 29.92 inHg，約 1013.25 hPa。",
        "Density altitude：相同密度的標準大氣高度，用於理解性能。"
      ],
      "lessonBlocks": [
        {
          "title": "五種高度放在同一張參考表",
          "paragraphs": [
            "高度的數字必須連同參考基準一起讀。指示高度是讀值，真實高度以 MSL 為基準，絕對高度以腳下地表為基準；壓力高度與密度高度則分別描述壓力及密度所對應的標準大氣高度。",
            "自編例：飛機真實高度 4,000 ft MSL，腳下地形為 2,500 ft MSL，當下約 1,500 ft AGL。若飛到標高 3,500 ft 的山坡上方而真實高度不變，AGL 就只剩約 500 ft；高度表不會自動替你減掉地形。"
          ],
          "table": {
            "caption": "高度種類與用途",
            "headers": [
              "名稱",
              "參考或定義",
              "常見用途"
            ],
            "rows": [
              [
                "Indicated",
                "高度表當下指示；須說明設定",
                "操縱與指定高度核對"
              ],
              [
                "True",
                "實際高於 MSL 的高度",
                "地形與障礙物關係"
              ],
              [
                "Absolute",
                "高於正下方地面的高度",
                "AGL 裕度"
              ],
              [
                "Pressure",
                "依標準大氣換算靜壓，設定 29.92 inHg",
                "性能與飛航空層基準"
              ],
              [
                "Density",
                "標準大氣中具有相同密度的高度",
                "起飛、爬升等性能評估"
              ]
            ]
          }
        },
        {
          "title": "密度高度：機場沒變高，空氣卻變稀薄",
          "paragraphs": [
            "在相同壓力高度下，溫度升高會使密度降低，因此密度高度增加。常見粗估 DA≈PA＋120×（OAT−ISA 溫度），單位為 ft 與 °C；這不是精密性能公式，也沒有完整處理濕度等影響。",
            "自編例：PA＝5,000 ft，ISA 溫度約 5°C，OAT＝30°C，得到 DA≈5,000＋120×25＝8,000 ft。使用原書的機場標高例子前，必須先確認實際壓力高度；場面標高本身不保證等於 PA。稀薄空氣會影響自然進氣引擎、螺旋槳和機翼表現，實際距離仍查 POH。"
          ],
          "check": {
            "question": "炎熱高原機場的 DA 增加，是否表示跑道海拔增加？",
            "answer": "沒有。DA 用標準大氣高度描述密度及性能環境，並非重新測量跑道的地理標高。"
          }
        }
      ]
    },
    {
      "id": "altimeter-check",
      "english": "Instrument Check",
      "title": "高度表飛行前檢查",
      "parent": "altimeter",
      "locator": "PHAK C 版 · 8-7",
      "printedPage": "8-7",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=7",
      "paragraphs": [
        "地面將高度表設為當地可靠來源提供的設定，與已知位置標高比較，可檢查讀值是否合理。機坪位置未必正好等於公布機場標高，還需確認設定時間、單位和飛機所在位置。",
        "原書以偏差超過 75 呎作為需送檢的提示，不應倒推小於此值就證明所有適航與檢查要求均已滿足。多套高度資料也要比較，但共用靜壓來源可能使它們一起出錯。"
      ],
      "lessonBlocks": [
        {
          "title": "先確認來源和所在標高，再判斷偏差",
          "paragraphs": [
            "先核對當前場站報告、單位、設定窗與飛機所在位置的已知標高。機坪不同位置可能有高差；使用錯誤或過期設定，也會讓一個原本正常的高度表看起來不準。不能單靠旋鈕轉到場面標高，就聲稱完成準確度檢查。",
            "現行 FAA AIM 7-2-3 將與已知標高相差正負 75 ft 或以上列為準確度有疑問，應由適當資格維修站評估。原書寫「超過 75 ft」，此處採現行 AIM 的邊界說明。地面核對通過也不代表已驗證全高度範圍或取代必要的系統檢驗。"
          ]
        }
      ],
      "references": [
        {
          "title": "FAA AIM 7-2-3 · 高度表地面檢查",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_2.html",
          "checked": "2026-09-16"
        }
      ]
    },
    {
      "id": "vsi",
      "english": "Vertical Speed Indicator (VSI)",
      "title": "垂直速度表",
      "parent": "pitot-static",
      "locator": "PHAK C 版 · 8-7",
      "printedPage": "8-7",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=7",
      "paragraphs": [
        "VSI 顯示氣壓高度變化率，常用每分鐘呎數，並非直接量測機頭俯仰角或相對地形的距離變化。爬升時地形也可能上升，因此正的垂直速度不保證離地裕度增加。",
        "傳統 VSI 有反應延遲，應把初始趨勢與穩定後的數值分開解讀。自編例：剛改變姿態就追逐每一次指針擺動，容易造成過度修正；需要配合姿態、高度與功率交叉監控。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 8-5 · 兩條靜壓路徑產生速率資訊",
          "paragraphs": [
            "圖中膜盒接直接靜壓，外殼則經校準漏孔連通同一來源。爬升時直接側壓力較快降低，外殼壓力暫時較高，膜盒變形帶動指針。下降時兩側差壓方向相反；儀表利用這個差值表示高度變化率。",
            "若保持穩定爬升，外界壓力仍持續改變，因此差壓可以維持，指針不會只因經過幾秒就回零。只有停止高度變化並讓壓力平衡後，VSI 才回到近零。其量測與俯仰角不同，抬頭不保證立即爬升。"
          ],
          "figure": {
            "label": "Figure 8-5 · Vertical speed indicator (VSI)",
            "page": "8-7",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=7"
          }
        }
      ]
    },
    {
      "id": "vsi-principle",
      "english": "Principle of Operation",
      "title": "校準漏孔與反應延遲",
      "parent": "vsi",
      "locator": "PHAK C 版 · 8-7",
      "printedPage": "8-7",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=7",
      "paragraphs": [
        "傳統 VSI 的膜盒直接連通靜壓，外殼則經校準漏孔緩慢跟隨。壓力變化時兩側暫時形成差壓，穩定爬降中差壓對應變化率；平飛一段時間後兩側平衡，讀值回零。",
        "原書描述典型穩定反應約需 6～9 秒，但不是所有裝置的固定延遲。IVSI 可加入加速度補償以加快反應，數位系統也可能使用濾波；都要分辨顯示趨勢與可依賴的穩定數值。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 8-6 · 趨勢、穩定速率與 IVSI",
          "paragraphs": [
            "傳統 VSI 的初始移動可告訴你變化趨勢，穩定數值則需等待壓差建立。教材的 6～9 秒是典型量級，亂流、操縱與儀表設計都可能改變反應；不要把每一次尚未穩定的讀值當成必須立刻消除的誤差。",
            "IVSI 在原有靜壓量測上加入加速度補償，圖中標出 accelerometer 與 calibrated leak。加速度可幫助更快反映變化，卻不會使靜壓口堵塞、機械故障或所有瞬態誤差消失。名稱中的 instantaneous 不代表在任何條件下都完全沒有延遲。"
          ],
          "figure": {
            "label": "Figure 8-6 · Instantaneous vertical speed indicator",
            "page": "8-8",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=8"
          },
          "check": {
            "question": "穩定爬升一分鐘後 VSI 為何仍能顯示爬升？",
            "answer": "因為靜壓一直下降，直接側與經漏孔的延遲側持續保持與變化率相應的差壓。"
          }
        }
      ]
    },
    {
      "id": "vsi-check",
      "english": "Instrument Check",
      "title": "VSI 零位與趨勢檢查",
      "parent": "vsi",
      "locator": "PHAK C 版 · 8-8",
      "printedPage": "8-8",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=8",
      "paragraphs": [
        "地面靜止且壓力穩定時，VSI 應接近零，飛行中穩定爬升則應有相符的上升指示。檢查重點包含零位、反應方向及與高度變化的一致性，而不只是指針會不會動。",
        "原書提及把小零位偏移當參考，但偏移是否可接受仍須依機型和維修要求判斷。自編例：高度表凍結且 VSI 持續為零，不能只認為飛機平飛，應思考共同靜壓來源是否異常。"
      ],
      "lessonBlocks": [
        {
          "title": "把零位檢查與飛行中的一致性檢查連起來",
          "paragraphs": [
            "地面壓力穩定時觀察零位；起飛後再核對爬升趨勢是否與高度表和姿態、功率相符。小幅偏移是否可接受應依機型規範，不可將任何錯誤都重新命名為「新的零位」。",
            "自編練習：高度在 30 秒內增加約 300 ft，這段平均爬升率為 300÷0.5＝600 fpm。若已是穩定爬升，卻持續看到 −500 fpm，應檢查來源或儀表不一致；若剛改變狀態，則先考慮延遲與取樣時段不同。"
          ]
        }
      ]
    },
    {
      "id": "asi",
      "english": "Airspeed Indicator (ASI)",
      "title": "空速表與空速種類",
      "parent": "pitot-static",
      "locator": "PHAK C 版 · 8-8",
      "printedPage": "8-8",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=8",
      "paragraphs": [
        "空速表感測總壓與靜壓之差，刻度將差壓轉為速度。它量的是相對空氣運動的資訊，不是地速；逆風中即使空速不變，到地面目的地的速度仍可下降。",
        "IAS 是直接指示，CAS 修正儀表與位置誤差，EAS 再修正可壓縮性，TAS 則反映實際密度下相對空氣的速度。性能表可能使用不同基準，查數字時必須連同 IAS／CAS 等標示一起讀。"
      ],
      "points": [
        "IAS → CAS：依校正表處理儀表與位置誤差。",
        "CAS → EAS → TAS：分別考慮可壓縮性與密度，低速時部分差異較小。",
        "Groundspeed：TAS 與風向風速的向量合成結果，不是另一個空速刻度。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 8-7 · 膜盒感受的是兩側差壓",
          "paragraphs": [
            "沿圖找到 pitot connection 通向膜盒、static air line 通向外殼，再追蹤長槓桿、齒輪到指針。兩側共有的靜壓在差值中抵消，剩餘壓差才用於指示；高度增加時皮托總壓本身也會隨環境靜壓改變。",
            "因此說「皮托壓力就是動壓」會妨礙理解堵塞。真正重要的是膜盒內外各保留或跟隨哪種壓力；只要其中一側失去正常輸入，讀值仍可能移動，卻不再代表正確空速。"
          ],
          "figure": {
            "label": "Figure 8-7 · Airspeed indicator (ASI)",
            "page": "8-8",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=8"
          }
        },
        {
          "title": "IAS → CAS → EAS → TAS，再加入風",
          "paragraphs": [
            "修正空速要分層：先依儀表與安裝校正得到 CAS，再處理可壓縮性得到 EAS，最後用密度得到 TAS。低速飛行中 CAS 與 EAS 往往接近，原書省略 EAS 不代表它在高速情境也可忽略。",
            "同一 EAS 下，TAS＝EAS×√（ρ₀／ρ）。自編例：密度為標準海平面的 81%，EAS＝100 kt，TAS 約為 100÷0.9＝111 kt。性能表若指定 IAS，就先使用其指定基準，而不是把 TAS 代入。"
          ],
          "table": {
            "caption": "速度定義",
            "headers": [
              "速度",
              "修正或參考",
              "使用時要核對"
            ],
            "rows": [
              [
                "IAS",
                "表面直接讀值",
                "單位與標記"
              ],
              [
                "CAS",
                "IAS 修正儀表及位置誤差",
                "POH 校正表及構型"
              ],
              [
                "EAS",
                "CAS 修正可壓縮性",
                "高速差異"
              ],
              [
                "TAS",
                "EAS 修正密度",
                "壓力高度、溫度"
              ],
              [
                "GS",
                "TAS 與風的向量合成",
                "航跡方向與側風"
              ]
            ]
          }
        },
        {
          "title": "2% 粗估與地速的適用條件",
          "paragraphs": [
            "每增加約 1,000 ft、TAS 比 CAS 多約 2% 是低速、近標準條件下的粗估，通常以壓力高度作計算參考。CAS＝100 kt、PA＝5,000 ft 時可先估約 110 kt；明顯非標準溫度或高空高速應使用適當飛行電腦和校正資料。",
            "地速則取決於風向與航跡。純迎風或順風且方向一致時，可用 TAS 加減風速，例如 TAS 110 kt、正迎風 20 kt，GS 為 90 kt。側風需要風三角形，不能直接把側風速從 TAS 減掉。"
          ],
          "check": {
            "question": "IAS 不變而 GS 增加，是否必然是儀表故障？",
            "answer": "不必然。風可能改變，或同一指示空速在不同密度下對應不同 TAS；先核對參考系與飛行條件。"
          }
        }
      ]
    },
    {
      "id": "asi-markings",
      "english": "Airspeed Indicator Markings",
      "title": "色弧與速度標記",
      "parent": "asi",
      "locator": "PHAK C 版 · 8-9",
      "printedPage": "8-9",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=9",
      "paragraphs": [
        "常見輕型飛機以白弧表示襟翼操作範圍、綠弧表示正常操作範圍、黃弧表示需符合平穩空氣等條件的警戒範圍，紅線標示不得超越速度。下界失速速度各有指定重量與構型。",
        "白弧不是所有襟翼位置都可任意操作的保證，部分機型不同角度有不同限制。自編例：綠弧內仍可能因大負荷因數達到臨界迎角而失速，因此色弧不能取代迎角與負荷管理。"
      ],
      "points": [
        "白弧：通常由 VS0 至 VFE；綠弧：通常由 VS1 至 VNO。",
        "黃弧：VNO 至 VNE；紅線：VNE，須查機型限制。",
        "刻度反映指定條件，實際失速與限制可能隨重量、構型及高度改變。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 8-8 · 用端點讀色弧",
          "paragraphs": [
            "先找白弧下端 VS0、上端 VFE，再找綠弧下端 VS1、上端 VNO；VNO 到 VNE 之間為黃弧，VNE 為不得超越的紅線。VNO 最後一個字母是 O，不是數字零。圖中數值屬範例飛機，不能當成所有單發機的限制。",
            "VS0 與 VS1 都有指定重量和構型條件，白弧上限也不能取代不同襟翼角度的個別限制。綠弧內若負荷因數提高，仍可能失速；黃弧所要求的平穩空氣與謹慎操作，更不代表可以忽略 AFM 的其他限制。"
          ],
          "figure": {
            "label": "Figure 8-8 · Single engine airspeed indicator",
            "page": "8-9",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=9"
          },
          "table": {
            "caption": "色弧端點的意義",
            "headers": [
              "標記",
              "定義摘要",
              "限制條件"
            ],
            "rows": [
              [
                "VS0",
                "著陸構型失速／最低穩定速度",
                "指定重量與構型"
              ],
              [
                "VS1",
                "指定構型失速／最低穩定速度",
                "常見為乾淨構型，依手冊"
              ],
              [
                "VFE",
                "襟翼放下最大速度",
                "不同角度可能不同"
              ],
              [
                "VNO",
                "最大結構巡航速度",
                "超過時需平穩空氣並謹慎"
              ],
              [
                "VNE",
                "不得超越速度",
                "依機型、高度等適用限制"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "asi-limits",
      "english": "Other Airspeed Limitations",
      "title": "未完全畫在表上的速度限制",
      "parent": "asi",
      "locator": "PHAK C 版 · 8-9",
      "printedPage": "8-9",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=9",
      "paragraphs": [
        "機動速度 VA、起落架操作速度 VLO、放下後最大速度 VLE 等未必都畫在空速表。VA 會隨重量改變，而且不是容許連續、反向或多軸滿舵操作的通用保護速度。",
        "多引擎機的藍線常標 VYSE，紅色徑向線可標 VMC，但 VMC 是特定認證條件下的控制速度，不是單發能爬升的保證。自編練習：分別查收放起落架與保持放下的限制，避免混用。"
      ],
      "lessonBlocks": [
        {
          "title": "把結構限制、爬升性能與控制能力分開",
          "paragraphs": [
            "VA 是特定設計條件下的機動速度概念，不是所有陣風、連續反向或多軸滿舵輸入都不會損壞的保證。FAA 的補充說明特別指出，在 VA 以下也不可推定多次或多軸大幅操縱受到保護。重量降低時適用 VA 通常也降低，應查當前重量對應值。",
            "VYSE 的藍線表示單發最佳爬升率或最小下沉率所需空速，並不保證還有正爬升能力。VMC 的紅色徑向標記屬特定認證條件下的方向控制界線，與 VNE 紅線及失速速度是不同概念。"
          ],
          "table": {
            "caption": "其他重要 V 速度",
            "headers": [
              "符號",
              "回答的問題",
              "容易混淆處"
            ],
            "rows": [
              [
                "VA",
                "機動設計條件的速度",
                "不是亂流及任意操縱保證"
              ],
              [
                "VLO",
                "何時能操作起落架",
                "收起與放下可有不同限值"
              ],
              [
                "VLE",
                "起落架放下後能飛多快",
                "不等於收放限制"
              ],
              [
                "VX",
                "每段水平距離可爬多高",
                "越障梯度"
              ],
              [
                "VY",
                "每段時間可爬多高",
                "爬升率"
              ],
              [
                "VYSE",
                "單發最佳爬升／最小下沉",
                "藍線不保證正爬升"
              ],
              [
                "VMC",
                "指定條件下的最低控制速度",
                "不是性能或失速保證"
              ]
            ]
          },
          "check": {
            "question": "飛機變輕後仍沿用最大重量 VA 是否合理？",
            "answer": "不可直接沿用。查手冊中適用重量的機動速度，並遵守操縱與亂流限制。"
          }
        }
      ],
      "references": [
        {
          "title": "FAA Safety Briefing · VA 與多次／多軸操縱的限制",
          "url": "https://www.faa.gov/sites/faa.gov/files/2022-01/MayJun2015.pdf",
          "checked": "2026-09-16"
        }
      ]
    },
    {
      "id": "asi-check",
      "english": "Instrument Check",
      "title": "空速表檢查",
      "parent": "asi",
      "locator": "PHAK C 版 · 8-10",
      "printedPage": "8-10",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=10",
      "paragraphs": [
        "停在無風地面時空速表通常接近零，但迎面強風也可能產生指示。飛行前確認開口、護套與適用加熱檢查，起飛滑跑中則需按程序確認空速合理增加。",
        "有指示不等於校準正確，兩支共用來源的空速表一致也不代表獨立驗證。自編例：滑跑加速但空速不動，應依既定起飛異常程序處理，不能用地速數字直接替代所需空速。"
      ],
      "lessonBlocks": [
        {
          "title": "從開口檢查到起飛滑跑趨勢",
          "paragraphs": [
            "飛行前檢查總壓與靜壓開口、護套及適用加熱程序；無風靜止時核對近零指示。滑跑中空速合理增加才提供下一層證據，不能因螢幕開機自檢成功就省略壓力來源檢查。",
            "自編案例：滑跑加速，GPS 地速增加，ASI 卻固定不動。GPS 證明對地運動，不能證明相對空氣的起飛速度已達標；應依既定異常程序處理。兩支 ASI 若共用皮托來源，其一致讀值也未必提供獨立驗證。"
          ]
        }
      ]
    },
    {
      "id": "blockage",
      "english": "Blockage of the Pitot-Static System",
      "title": "堵塞與共同來源故障",
      "parent": "pitot-static",
      "locator": "PHAK C 版 · 8-10",
      "printedPage": "8-10",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=10",
      "paragraphs": [
        "堵塞可能來自冰、水、昆蟲或未移除護套，其結果取決於哪個開口被封住以及壓力能否洩出。洩漏、感測器或處理器故障也會造成異常，不能將所有不一致都診斷為堵塞。",
        "建立診斷時先比較哪些儀表共用總壓、哪些共用靜壓，再對照姿態、功率和獨立來源。以下為理想化機械系統案例，實際故障警示、備用來源選擇和操作順序依機型程序。"
      ],
      "lessonBlocks": [
        {
          "title": "先列封閉條件，再推三表反應",
          "paragraphs": [
            "以下比較假定理想管路、沒有額外洩漏或多重故障；「偏高／偏低」是相對當時正常系統應有的指示，不是直接與 TAS 比較。若總壓、靜壓都被封住，ASI 可能維持原差壓，連爬升造成的假空速變化也不再出現。",
            "實際異常還可能來自洩漏、位置誤差、感測器、ADC 或電力。表格用來理解壓力關係，不是只憑單一徵兆就決定操作。應把姿態、功率、獨立來源與機型不可靠空速程序一起使用。"
          ],
          "table": {
            "caption": "理想化堵塞比較",
            "headers": [
              "被堵住的部分",
              "ASI",
              "高度表",
              "VSI"
            ],
            "rows": [
              [
                "皮托入口；排水孔暢通",
                "通常降向零",
                "靜壓正常則正常",
                "靜壓正常則正常"
              ],
              [
                "皮托入口與排水孔；靜壓暢通",
                "爬升增、下降減；不正常跟隨速度",
                "正常",
                "正常"
              ],
              [
                "靜壓口；皮托暢通",
                "高於堵塞高度偏低、低於時偏高",
                "凍結於堵塞時高度",
                "暫態後近零"
              ],
              [
                "總壓與靜壓都被困",
                "差壓指示通常凍結",
                "凍結",
                "暫態後近零"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "blocked-pitot",
      "english": "Blocked Pitot System",
      "title": "皮托入口與排水孔的不同堵塞",
      "parent": "blockage",
      "locator": "PHAK C 版 · 8-10",
      "printedPage": "8-10",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=10",
      "paragraphs": [
        "若皮托入口堵住而排水孔暢通，總壓腔壓力可洩出，空速通常降向零；若入口與排水孔都封住，腔內總壓被困住，空速不再正常跟隨真實速度變化。",
        "在總壓被困且靜壓正常時，爬升使外殼靜壓降低，空速指示反而增加；下降則減少，呈現類似高度表的反應。這不是飛機真的加減速，高度表與 VSI 若其靜壓正常可仍工作。"
      ],
      "points": [
        "入口堵、排水孔通：空速通常向零下降。",
        "入口與排水孔皆堵、靜壓通：爬升讀值增加，下降讀值減少。",
        "上述結論依封閉條件成立；部分堵塞、洩漏或多重故障可有不同反應。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 8-9 · 排水孔暢通，差壓消失",
          "paragraphs": [
            "入口被堵住後，迎風總壓不再補入，而排水孔讓腔內壓力向周圍壓力釋放。理想近似下膜盒與外殼最終都接近靜壓，ASI 差壓趨近零，因此很快失去正常空速指示。",
            "這與整個總壓腔完全封閉不同。高度表和 VSI 不使用皮托總壓，若其靜壓來源正常就仍可工作；不能因一支空速表失效便推定三表全失效。"
          ],
          "figure": {
            "label": "Figure 8-9 · Blocked inlet with clear drain",
            "page": "8-10",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=10"
          }
        },
        {
          "title": "Figure 8-10 · 總壓被困，空速假裝跟著高度走",
          "paragraphs": [
            "入口與排水孔都封死時，膜盒內總壓固定。爬升使正常靜壓降低，差壓反而增加；下降時靜壓提高，差壓減少。在同一高度加減速，指示也不再正常跟隨速度，因為新的總壓無法傳入。",
            "自編壓力例：封閉時 pₜ＝102 kPa、pₛ＝100 kPa，差壓為 2 kPa；爬升到 pₛ＝99 kPa 後差壓變成 3 kPa，ASI 增加。這是壓力來源錯誤，不是額外的真實加速；「像高度表」只形容反應方向，不表示可以拿它量高度。"
          ],
          "figure": {
            "label": "Figure 8-10 · Blocked pitot with clear static system",
            "page": "8-11",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=11"
          },
          "check": {
            "question": "總壓被困時，為何下降反而顯示空速減少？",
            "answer": "正常靜壓在下降時增加，從固定總壓中減去較大的靜壓，剩下的差值較小。"
          }
        }
      ]
    },
    {
      "id": "blocked-static",
      "english": "Blocked Static System",
      "title": "靜壓堵塞的三表反應",
      "parent": "blockage",
      "locator": "PHAK C 版 · 8-11",
      "printedPage": "8-11",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=11",
      "paragraphs": [
        "靜壓被困住時，高度表通常停在堵塞時的讀值，VSI 經暫態後回到零。若皮托仍正常，空速表用錯誤的固定靜壓作比較，因此還會動，卻不再正確。",
        "相對同條件下正常空速指示，在堵塞高度之上通常偏低，在其下通常偏高；不要把此敘述誤當成 IAS 與 TAS 的一般關係。若總壓也一起封閉，空速可能固定，需另作判讀。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 8-11 · 被困的參考壓力讓三表一起失真",
          "paragraphs": [
            "靜壓封閉時，高度表繼續感受原壓力，讀值凍結；VSI 內部壓力經短暫平衡後，沒有持續變化可測，回到近零。ASI 的皮托端仍接收目前總壓，卻減去過去被困的靜壓，因此不再給出正確差值。",
            "自編例：被困靜壓為 100 kPa，爬升後實際靜壓為 99 kPa，假設正確衝壓差仍為 2 kPa，皮托總壓就是 101 kPa；儀表只得到 101−100＝1 kPa，讀值偏低。下降到堵塞高度以下時則相反。此比較已固定正確差壓，避免把真實速度變化混進故障推導。"
          ],
          "figure": {
            "label": "Figure 8-11 · Blocked static system",
            "page": "8-12",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=12"
          },
          "check": {
            "question": "高度表不動且 VSI 為零，能否直接證明正在平飛？",
            "answer": "不能。它們可能共用被堵住的靜壓來源，需與獨立資訊交叉核對。"
          }
        }
      ]
    },
    {
      "id": "efd",
      "english": "Electronic Flight Display (EFD)",
      "title": "電子飛行顯示與資料依賴",
      "parent": null,
      "locator": "PHAK C 版 · 8-12",
      "printedPage": "8-12",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=12",
      "paragraphs": [
        "EFD 將多項資訊整合到螢幕，PFD 以主要飛行資訊為主，MFD 可呈現導航、引擎或系統資訊。螢幕是顯示端，背後仍需壓力、慣性、磁場等感測來源與電力。",
        "兩個畫面可能共用 ADC 或 AHRS，因此同時顯示相同數字不一定代表兩套獨立量測。應熟悉失效旗標、來源標示、備用儀表及重組顯示模式，避免將畫面恢復誤認為感測已恢復。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 8-12 · 在 PFD 上重建六表的位置",
          "paragraphs": [
            "先找中央姿態、左側空速帶、右側高度與垂直速度，再找下方航向、轉彎率及上方協調符號。傳統六大飛行儀表是空速、姿態、高度、轉彎指示、航向與 VSI；轉速表屬引擎資訊，並不取代其中一項。",
            "將多項資訊放在同一畫面可以縮短掃描距離，但資訊仍由不同感測系統提供。讀圖時練習由顯示往後追查 ADC、AHRS、磁感測器及電源，並找出備用儀表是否有真正獨立的來源。"
          ],
          "figure": {
            "label": "Figure 8-12 · Primary flight display (PFD)",
            "page": "8-12",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=12"
          }
        },
        {
          "title": "Figure 8-14 · 畫面配置可以不同，來源仍要辨認",
          "paragraphs": [
            "原圖並列 Chelton FlightLogic 與 Avidyne Entegra，顯示同樣的飛行資訊可用不同配置與符號呈現。熟悉某一套 PFD 的習慣，不能保證換到另一套時仍能正確辨認速度標記、警示或趨勢線。",
            "軟體可改變功能與布局，但機上使用需符合該設備、機型和核准配置。螢幕看起來更清晰、數字位數更多，並不代表感測來源更準；單一顯示整合多項資訊，也必須理解顯示失效時如何取得所需資料。"
          ],
          "figure": {
            "label": "Figure 8-14 · Examples of configurable flight displays",
            "page": "8-14",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=14"
          }
        }
      ]
    },
    {
      "id": "airspeed-tape",
      "english": "Airspeed Tape",
      "title": "空速帶",
      "parent": "efd",
      "locator": "PHAK C 版 · 8-12",
      "printedPage": "8-12",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=12",
      "paragraphs": [
        "空速帶以固定讀值窗口配合移動刻度呈現速度，常另有速度標記、色帶及趨勢線。數字位置與顏色依設備設計，設定的參考標記也不一定就是系統自動計算的限制。",
        "空速資料通常來自 ADC，顯示解析度更細不代表壓力來源更準確。自編例：螢幕上的空速與地速不同時，先確認兩者定義及風的影響，不能直接認定其中一個故障。"
      ],
      "lessonBlocks": [
        {
          "title": "固定讀值窗口、移動刻度與速度標記",
          "paragraphs": [
            "圖中當前 IAS 位於固定窗口，速度增加時較大的刻度從上方移向窗口。色帶沿用機型適用的空速範圍；參考 bug 可由飛行員輸入，所以它不是飛機已達到該速度的證明，也不一定會自動隨重量更新。",
            "TAS 若顯示在帶下方，仍需要空速、壓力與溫度資料計算，不是單靠 OAT 探頭得到。螢幕紅色超限提示、缺失資料符號和速度標記各有不同用途，應以設備手冊辨認，不能只看顏色猜測。"
          ]
        }
      ]
    },
    {
      "id": "efd-attitude",
      "english": "Attitude Indicator",
      "title": "電子姿態顯示",
      "parent": "efd",
      "locator": "PHAK C 版 · 8-13",
      "printedPage": "8-13",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=13",
      "paragraphs": [
        "電子姿態顯示以地平線、俯仰刻度及傾斜標記呈現機體姿態，通常由 AHRS 提供資訊。較大的畫面有助於辨識，但仍需讀懂飛機符號、地平線與指令桿各代表什麼。",
        "飛行指引給的是所選模式下的操縱指令，不是目前實際姿態；合成視景也不能證明外界已可見。自編例：先看姿態符號，再判斷指令是否合理，來源失效時按設備程序使用備援。"
      ],
      "lessonBlocks": [
        {
          "title": "地平線、飛機符號與飛行指引不是同一件事",
          "paragraphs": [
            "姿態顯示用 AHRS 的估算描述機體相對當地水平面的俯仰與傾斜。跨越畫面的人工地平線提供較大參考，但它不是攝影機看見的真實地平線；畫面穩定也不保證姿態來源正確。",
            "飛行指引的指令符號表示系統希望你如何操縱，目前姿態則由飛機符號與地平線關係表示。自編例：指令要求抬頭而實際姿態尚未改變，兩者可以同時顯示；需核對模式和資料有效性，而不是把指令當成已發生的運動。"
          ]
        }
      ]
    },
    {
      "id": "efd-altimeter",
      "english": "Altimeter",
      "title": "電子高度帶",
      "parent": "efd",
      "locator": "PHAK C 版 · 8-13",
      "printedPage": "8-13",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=13",
      "paragraphs": [
        "電子高度帶以移動刻度和數值窗口顯示氣壓高度，常附選定高度、氣壓設定及告警。選定高度只是目標，不表示飛機已到達，也不保證自動駕駛已啟用高度捕獲。",
        "電子式仍受氣壓設定與靜壓來源影響，GPS 高度若顯示則有不同基準。自編例：兩種高度不一致時應核對資料來源、設定和系統狀態，不能任意把其中一個數字抄到另一個儀表。"
      ],
      "lessonBlocks": [
        {
          "title": "當前高度、選定高度與設定值分三次讀",
          "paragraphs": [
            "高度帶中央數字為當前指示，另一標記可能是選定高度，下方則可見氣壓設定。原書圖示以 20 ft 步進呈現部分數字，這是顯示解析度，不能解讀成每次量測誤差都小於 20 ft。",
            "自編例：窗口為 4,000 ft、選定值 5,000 ft，只能證明目標設為 5,000 ft。是否開始爬升、是否啟用高度捕獲，還要看當前垂直模式與實際變化。即使數位高度很精細，仍受設定、溫度和靜壓來源限制。"
          ]
        }
      ]
    },
    {
      "id": "efd-vsi",
      "english": "Vertical Speed Indicator (VSI)",
      "title": "電子垂直速度",
      "parent": "efd",
      "locator": "PHAK C 版 · 8-13",
      "printedPage": "8-13",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=13",
      "paragraphs": [
        "電子 VSI 可採指針、條帶或數字，顯示資料的處理與平滑方式依系統。垂直速度目標標記和當前量測值應分清，否則容易把自動駕駛的選定值當成已達成的爬升率。",
        "ADC 或整合系統可由壓力變化推算垂直速度，但共用來源失效仍會影響結果。自編例：高度帶凍結而 VSI 接近零時，要和獨立來源交叉比對，不可只看螢幕仍亮著就相信讀值。"
      ],
      "lessonBlocks": [
        {
          "title": "目標爬升率與實際爬升率可能不同",
          "paragraphs": [
            "電子 VSI 可用弧形、直帶或數字；目前量測與選定 bug 要分開。自動駕駛選定 ＋700 fpm，不代表飛機已經穩定在這個爬升率，也不能保證當前功率足以長時間維持。",
            "讀值可能經過濾波或慣性補償，因此反應與傳統漏孔式未必相同。若高度帶和 VSI 共用 ADC，其一致性只是內部資料一致；遇到共同靜壓異常時，應比較來源獨立的資訊。"
          ]
        }
      ]
    },
    {
      "id": "efd-heading",
      "english": "Heading Indicator",
      "title": "電子航向與 HSI",
      "parent": "efd",
      "locator": "PHAK C 版 · 8-13",
      "printedPage": "8-13",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=13",
      "paragraphs": [
        "電子航向常整合到水平情況指示器 HSI，將航向、選定航道及偏離資訊放在一起。航向通常由 AHRS 與磁感測來源提供；航跡是實際地面移動方向，側風中兩者可以不同。",
        "航道選擇旋鈕不會直接改變飛機航向，偏離指示還取決於選中的導航來源。自編例：設定相同航道但由 GPS 切換到 VOR，顯示所代表的路徑與靈敏度可能改變，需確認來源標示。"
      ],
      "lessonBlocks": [
        {
          "title": "航向卡、航道箭頭與航跡各有基準",
          "paragraphs": [
            "HSI 把航向卡、選定航道、偏離指示與導航來源整合起來。磁感測器提供地磁資訊，AHRS 處理姿態與航向，導航接收或 GPS 則提供路徑相關資料；這些功能雖畫在一起，並不來自同一量測。",
            "自編例：為抵消側風，機頭朝 080°、地面航跡卻為 090°，兩者可同時正確。旋轉航道箭頭至 090°只是選定參考；飛機是否轉向或捕獲航道，還取決於操縱與啟用的模式。"
          ]
        }
      ]
    },
    {
      "id": "efd-turn",
      "english": "Turn Indicator",
      "title": "轉彎顯示與協調資訊",
      "parent": "efd",
      "locator": "PHAK C 版 · 8-13",
      "printedPage": "8-13",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=13",
      "paragraphs": [
        "本節原文以傾斜指標下方的滑塊說明協調狀態，名稱容易與轉彎率混淆。閱讀時應分開三件事：傾斜角、轉彎率，以及是否側滑或側甩，它們不是同一個量。",
        "滑塊偏離中央主要用於協調判讀，不能用其偏移量直接當每秒轉幾度。自編例：飛機可以在協調的轉彎中讓滑塊居中，同時航向持續改變；居中並不代表沒有轉彎。"
      ],
      "lessonBlocks": [
        {
          "title": "原文 Turn Indicator 標題下其實在談協調滑塊",
          "paragraphs": [
            "原文這個段落描述三角指標下的左右滑動橫條，功能相當於傳統小球。它主要表示橫向比力所反映的協調狀態，與航向卡附近顯示的轉彎率不同。保留原文標題便於查書，但讀圖時須按符號實際功能辨認。",
            "自編情境：右傾斜 20°、協調滑塊居中、航向向右變化，這三項完全可以同時成立。「居中」不是「未轉彎」，「向右傾斜」也不是「恰好標準率」。"
          ],
          "table": {
            "caption": "三個轉彎相關讀值",
            "headers": [
              "顯示",
              "回答什麼",
              "不能直接替代"
            ],
            "rows": [
              [
                "Bank scale",
                "傾斜幾度",
                "每秒轉幾度"
              ],
              [
                "Turn rate",
                "方向改變多快",
                "實際傾斜角"
              ],
              [
                "Slip/skid",
                "協調狀態",
                "是否正在轉彎"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "tachometer",
      "english": "Tachometer",
      "title": "轉速表與引擎資訊位置",
      "parent": "efd",
      "locator": "PHAK C 版 · 8-13",
      "printedPage": "8-13",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=13",
      "paragraphs": [
        "轉速表顯示指定引擎軸或螺旋槳的轉速，常位於引擎資訊區或 MFD，但實際配置依系統。定速槳下 RPM 保持不變時，功率仍可能因其他設定或負荷改變。",
        "原書將轉速表稱為六大飛行儀表之一，這裡需釐清：傳統六表包含空速、姿態、高度、轉彎協調、航向及垂直速度，並不包含轉速表。轉速屬重要的動力監控資訊。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 8-13 · MFD 引擎資訊與顯示重組",
          "paragraphs": [
            "圖中的 MFD 可同時呈現地圖、引擎與其他系統資訊。轉速表顯示 RPM，具體指哪一根軸或螺旋槳依機型；功率判斷還可能需要歧管壓力、扭矩或其他引擎參數，不能只靠 RPM。",
            "部分系統在螢幕失效時能把主要飛行與引擎資訊重新安排到剩餘螢幕，稱為 reversionary mode。這解決的是資訊顯示位置，無法修復已失效的 ADC、AHRS 或共用電源；應依實際配置確認剩下哪些資料有效。"
          ],
          "figure": {
            "label": "Figure 8-13 · Multi-function display (MFD)",
            "page": "8-13",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=13"
          },
          "check": {
            "question": "PFD 畫面搬到 MFD 後，是否代表故障來源恢復？",
            "answer": "不一定。若只是螢幕故障，重組可恢復可讀資訊；若感測來源失效，換螢幕仍可能沒有有效資料。"
          }
        }
      ]
    },
    {
      "id": "efd-slip",
      "english": "Slip/Skid Indicator",
      "title": "電子側滑／側甩指示",
      "parent": "efd",
      "locator": "PHAK C 版 · 8-13",
      "printedPage": "8-13",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=13",
      "paragraphs": [
        "電子側滑／側甩符號常用橫條或滑塊，功能類似傳統小球，以橫向比力等資料呈現協調狀態。符號形狀與對準方式依製造商，不能把不同顯示器的像素位移當成相同量值。",
        "穩定協調轉彎可保持居中，刻意側滑則可偏離，兩者需按飛行情境理解。自編練習：同時讀傾斜角、轉彎率與協調符號，逐一說明每個指示回答什麼問題。"
      ],
      "lessonBlocks": [
        {
          "title": "把橫條視為協調資訊，不是滾轉指令",
          "paragraphs": [
            "教材範例用一個橫條寬度對應傳統小球約一球寬的偏移。這是該顯示設計的讀法，不是所有裝置都具有相同像素或比例；應先確認符號的固定參考與可動部分。",
            "加速度計量到的是比力，處理後提供協調相關資訊。穩定協調轉彎可居中，刻意側滑時可偏離，瞬態或亂流也會影響顯示；不能單憑一瞬間的位置判定偏航角或直接下固定舵量。"
          ]
        }
      ]
    },
    {
      "id": "efd-turn-rate",
      "english": "Turn Rate Indicator",
      "title": "電子轉彎率",
      "parent": "efd",
      "locator": "PHAK C 版 · 8-13",
      "printedPage": "8-13",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=13",
      "paragraphs": [
        "轉彎率指示描述航向隨時間改變的速率，常以航向刻度附近的線段呈現。標準率轉彎是每秒 3 度，完成一圈需兩分鐘，但相同轉彎率在不同空速下需要不同傾斜角。",
        "刻度和預測時間需按設備說明確認，不能把每個短線都當成標準率。自編例：高速下保持相同傾斜角，轉彎率通常較小，因此固定傾斜角並不等於固定轉彎率。"
      ],
      "lessonBlocks": [
        {
          "title": "標準率是時間尺度，不是固定傾斜角",
          "paragraphs": [
            "標準率為 3°／s，因此轉過 90°需約 30 秒、180°需約 60 秒、360°需約 120 秒；這些時間假設已建立穩定標準率，不包含進出轉彎的過渡。航向卡附近的刻度與趨勢線依設備標定。",
            "在協調、近水平轉彎中，同樣 TAS 下傾斜越大，轉彎率越高；同樣傾斜下 TAS 越高，轉彎率越小。不能為了每次都用同一傾斜角，就期待各種空速下都維持兩分鐘轉彎。"
          ]
        }
      ]
    },
    {
      "id": "adc",
      "english": "Air Data Computer (ADC)",
      "title": "大氣資料電腦",
      "parent": "efd",
      "locator": "PHAK C 版 · 8-14",
      "printedPage": "8-14",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=14",
      "paragraphs": [
        "ADC 接收總壓、靜壓及適用溫度資料，計算空速、高度、垂直速度等大氣資料，部分資料也送給自動駕駛與其他系統。它的功能和主要處理姿態、角速率的 AHRS 不同。",
        "堵塞或錯誤輸入可讓運作正常的電腦產生錯誤結果，且影響不只一個畫面。自編例：兩個 PFD 使用同一 ADC 時，數字一致仍不能排除共同故障；確認來源與獨立備援比只比較畫面更有用。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 8-15 · 空氣壓力在這裡轉成數位資料",
          "paragraphs": [
            "圖中 ADC 的 PITOT 與 STATIC 接頭提醒我們：電子畫面仍依賴實體壓力輸入。處理器將壓力量測與溫度等資料換算成大氣資料，再送往顯示器及適用系統；故障影響範圍可能包含自動駕駛，不只螢幕上的數字。",
            "與傳統高度表相比，ADC 不需要以大型膜盒、齒輪直接推動指針；但不能因此斷言所有電子壓力感測器都沒有膜片，微型感測元件仍可能利用彈性膜結構。模組可更換也不代表可跳過核准維修與系統檢查。"
          ],
          "figure": {
            "label": "Figure 8-15 · Air Data Computer (ADC)",
            "page": "8-14",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=14"
          },
          "table": {
            "caption": "來源、處理與顯示分層",
            "headers": [
              "層次",
              "例子",
              "失效可能影響"
            ],
            "rows": [
              [
                "輸入",
                "皮托、靜壓、溫度",
                "多項大氣資料"
              ],
              [
                "計算",
                "ADC",
                "空速、高度、VSI、TAS 等"
              ],
              [
                "顯示",
                "PFD／MFD",
                "取得或呈現資訊的方式"
              ],
              [
                "使用端",
                "適用自動駕駛／其他系統",
                "依賴這些資料的功能"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "trend",
      "english": "Trend Vectors",
      "title": "趨勢向量與預測條件",
      "parent": "efd",
      "locator": "PHAK C 版 · 8-14",
      "printedPage": "8-14",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=14",
      "paragraphs": [
        "趨勢向量依目前變化率估算短時間後的速度或高度，原書範例使用六秒預測。它不是預定航跡，也不是保證將來到達的值，改變功率、姿態或遇到亂流後預測就會改變。",
        "自編例：若垂直速度維持每分鐘 600 呎，六秒相當於約 60 呎高度變化；若開始平飛，這個外推就不再成立。利用趨勢提前辨識變化，同時核對實際讀值及設備預測時間。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 8-16 · 空速趨勢是有條件的外推",
          "paragraphs": [
            "圖中洋紅色空速趨勢線表示：如果目前變化率延續，在指定預測時間後會到哪裡。原書範例採六秒，並非所有顯示器都固定相同時間；它也不是選定空速 bug 或系統保證會達到的目標。",
            "自編例：當前 120 kt，增加速率 2 kt／s，六秒外推為 120＋2×6＝132 kt。一旦減小功率、改變姿態或遇到陣風，新的變化率就會讓預測端點改變。"
          ],
          "figure": {
            "label": "Figure 8-16 · Airspeed trend vector",
            "page": "8-14",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=14"
          }
        },
        {
          "title": "Figure 8-17 · 高度趨勢與當前 VSI 對照",
          "paragraphs": [
            "若高度 3,900 ft、爬升率保持 600 fpm，六秒高度增加 600×6／60＝60 ft，趨勢端點約在 3,960 ft。它讓你提早看出正在接近某高度，但並不會替你保證平飛捕獲。",
            "圖中也有空速與航向趨勢，閱讀時先辨認刻度及時間基準。航向趨勢是角度變化的外推，不是地圖上的未來飛行路徑；開始改平或減小轉彎率時，原來的預測也隨之失效。"
          ],
          "figure": {
            "label": "Figure 8-17 · Altimeter trend vector",
            "page": "8-15",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=15"
          },
          "check": {
            "question": "高度趨勢已到選定高度，是否代表現在已到達？",
            "answer": "沒有。當前高度仍在讀值窗口；趨勢只是目前速率延續時的預測位置。"
          }
        }
      ]
    },
    {
      "id": "gyro",
      "english": "Gyroscopic Flight Instruments",
      "title": "陀螺飛行儀表",
      "parent": null,
      "locator": "PHAK C 版 · 8-15",
      "printedPage": "8-15",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=15",
      "paragraphs": [
        "傳統姿態、航向與轉彎儀表利用旋轉陀螺的特性，但安裝方式、允許自由度及量測目的不同。現代固態慣性感測器也可提供相似資訊，不能由畫面外觀推定內部機構。",
        "學習每個儀表時應列出感測軸、能源、限制及失效徵兆。自編例：真空故障可能同時影響姿態與航向，但電動轉彎儀仍可工作；這只適用於相應配置，需查實際機型。"
      ],
      "lessonBlocks": [
        {
          "title": "三種常見陀螺儀表，兩種主要用途",
          "paragraphs": [
            "姿態與航向儀表利用陀螺保持方向的特性，提供機體相對參考的角度；轉彎儀表則利用受約束陀螺對轉動的反應表示速率。讀到小飛機符號，不代表這支表一定同時提供俯仰與傾斜角。",
            "自編檢查表：替機上的姿態表、航向表、轉彎儀各填入「能源、量測內容、失效提示、備援」。真空姿態表配電動轉彎儀是常見教學配置，不是每架飛機必然如此；電子儀表外觀也不能證明它們具有獨立 AHRS。"
          ],
          "table": {
            "caption": "功能與典型原理",
            "headers": [
              "儀表",
              "主要資訊",
              "機械陀螺特性"
            ],
            "rows": [
              [
                "姿態表",
                "俯仰與傾斜角",
                "空間定向性與水平校正"
              ],
              [
                "航向表",
                "相對方向／經校正的航向",
                "空間定向性"
              ],
              [
                "轉彎儀",
                "轉彎速率；協調儀另感受滾轉",
                "受約束進動"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "gyro-principles",
      "english": "Gyroscopic Principles",
      "title": "陀螺原理",
      "parent": "gyro",
      "locator": "PHAK C 版 · 8-15",
      "printedPage": "8-15",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=15",
      "paragraphs": [
        "旋轉物體具有角動量，轉子的轉速與質量分布會影響其保持方向及對外力矩反應的特性。儀表以支架和約束設計，將這些物理特性轉為姿態參考或轉動速率資訊。",
        "自由陀螺與受約束的速率陀螺不能混為一談，前者偏重保持參考，後者利用反應量測速率。自編練習：比較姿態表與轉彎指針各自顯示角度還是角度變化率。"
      ],
      "lessonBlocks": [
        {
          "title": "角動量取決於轉速與質量分布",
          "paragraphs": [
            "理想轉子的角動量大小 L＝Iω，I 是相對旋轉軸的轉動慣量，ω 是角速度。把更多質量放在遠離軸心的位置或提高轉速，都能增加角動量；因此不只是「比較重」就一定有較強的定向效果。",
            "萬向架讓外殼與轉子參考在允許方向上相對運動；限制某些自由度並加入彈簧，則能把進動偏轉轉成速率指示。自由陀螺的角度參考與受約束陀螺的速率量測，應連同支架方式一起理解。"
          ]
        }
      ]
    },
    {
      "id": "rigidity",
      "english": "Rigidity in Space",
      "title": "空間定向性",
      "parent": "gyro-principles",
      "locator": "PHAK C 版 · 8-15",
      "printedPage": "8-15",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=15",
      "paragraphs": [
        "沒有外力矩時，陀螺角動量方向傾向保持，機體與外殼可相對這個參考旋轉。姿態與航向儀表利用此特性，讓飛行員觀察飛機相對參考的變化。",
        "實際軸承摩擦、支架限制、重力校正與地球自轉會影響指示，並非轉子一旦旋轉便永遠指北。自編例：未自動校正的航向陀螺會漂移，需要在適當穩定條件下核對可靠航向來源。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 8-18 · 底座移動，旋轉軸仍趨向原方向",
          "paragraphs": [
            "依序看圖中不同底座位置，注意轉子軸的指向。理想情況若沒有外力矩，角動量方向保持，底座及支架可以相對它移動；儀表由這種相對關係顯示飛機的轉動。",
            "「空間定向」不等於永遠自動對準磁北或當地水平面。地球自轉、飛機移動、摩擦與儀表校正機構都會影響實際參考。原書用自行車作比喻，但自行車的穩定和轉彎也涉及轉向幾何及車身動態，不能只歸因於車輪陀螺。"
          ],
          "figure": {
            "label": "Figure 8-18 · Rigidity in space",
            "page": "8-15",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=15"
          },
          "check": {
            "question": "自由旋轉的陀螺為何不能自動找到磁北？",
            "answer": "角動量保持的是已有的空間方向，磁北需要磁感測或其他適用參考來建立。"
          }
        }
      ]
    },
    {
      "id": "precession",
      "english": "Precession",
      "title": "進動與外力矩",
      "parent": "gyro-principles",
      "locator": "PHAK C 版 · 8-15",
      "printedPage": "8-15",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=15",
      "paragraphs": [
        "進動描述外力矩使陀螺角動量方向改變的反應。教材常用旋轉方向後方九十度的位置說明特定轉子上的反應，但必須先辨認轉向與施力方向，不能把口訣當成任意空間運動規則。",
        "速率儀表利用受約束陀螺的進動偏轉配合彈簧，將轉動速率轉成指示；摩擦造成的非預期進動則會引起誤差。相同物理現象可以是量測機制，也可以是需要管理的漂移來源。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 8-19 · 外力矩改變角動量方向",
          "paragraphs": [
            "圖中的外力、轉子旋轉與進動方向要一起讀。常見「沿旋轉方向約 90°的位置出現反應」是特定幾何下的教學描述，不是施力後等待四分之一圈才開始反應；更一般的關係是外力矩造成角動量向量改變。",
            "在理想穩定進動且力矩與角動量垂直的條件下，進動角速度大小 Ω＝τ／L＝τ／（Iω）。同樣力矩下，角動量越大，進動越慢。儀表可利用這種反應測速率；不希望出現的軸承摩擦力矩則會引起漂移。"
          ],
          "figure": {
            "label": "Figure 8-19 · Gyroscopic precession",
            "page": "8-16",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=16"
          }
        }
      ]
    },
    {
      "id": "gyro-power",
      "english": "Sources of Power",
      "title": "真空、壓力與電力來源",
      "parent": "gyro",
      "locator": "PHAK C 版 · 8-16",
      "printedPage": "8-16",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=16",
      "paragraphs": [
        "傳統陀螺可由真空或壓力系統的氣流驅動，也可由電動馬達驅動。典型真空系統讓經過濾的空氣流過儀表以帶動轉子，再由泵抽走，需有適當壓差和流量。",
        "真空或電源故障後轉子可能逐漸減速，儀表未必立刻變成明顯空白。自編例：姿態顯示緩慢傾斜時，應交叉檢查供能與獨立儀表，而不是等它完全停止；備援是否獨立需查系統圖。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 8-20 · 看空氣怎麼流，不只看泵是否轉",
          "paragraphs": [
            "典型真空系統把外界空氣經濾清器送入儀表，氣流帶動轉子，最後由引擎驅動泵抽出；調壓元件控制吸力。需要的是適當壓差與流量，不是只要看見引擎在轉就能保證陀螺轉速正確。",
            "教材常見吸力為 4.5～5.5 inHg，表示相對環境壓力的壓差，不是高度表的絕對壓力設定；實際正常範圍依機型。吸力不足時轉子可能逐漸減速、先產生可信外觀的錯誤指示，壓力正常也不能排除某支儀表本身故障。"
          ],
          "figure": {
            "label": "Figure 8-20 · Typical vacuum system",
            "page": "8-17",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=17"
          }
        },
        {
          "title": "追蹤共同能源，找出真正的備援",
          "paragraphs": [
            "若姿態與航向共用同一真空泵，泵故障可能同時影響兩者；電动轉彎儀可能仍可用，但前提是其電源與儀表正常。若所有資料其實來自同一 AHRS，兩個顯示器也不會自動成為兩套姿態量測。",
            "失效後應依機型程序使用仍有效的資訊，而不是等每支指針停止才承認故障。評估備援至少追到能源、感測與顯示三層，並確認備援能提供哪些量：轉彎率資訊無法直接補出失去的俯仰角。"
          ],
          "check": {
            "question": "正常真空讀值能否證明姿態表一定正確？",
            "answer": "不能。它只提供供能狀態的一項證據，不能排除儀表內部或其他故障。"
          }
        }
      ]
    },
    {
      "id": "turn-indicators",
      "english": "Turn Indicators",
      "title": "轉彎儀表的量測差異",
      "parent": "gyro",
      "locator": "PHAK C 版 · 8-16",
      "printedPage": "8-16",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=16",
      "paragraphs": [
        "轉彎儀表主要呈現方向及速率，常見轉彎側滑儀與轉彎協調儀的感測軸不同。兩者搭配的小球表示協調狀態，並不等於陀螺本身測得的轉彎率。",
        "指示向右可能代表右轉趨勢，但小飛機圖示不一定提供真正的傾斜角。自編例：若把轉彎協調儀當姿態表讀取俯仰，會得到根本不存在的資訊；應注意 NO PITCH INFORMATION 標示。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 8-21 · 比較傾斜安裝與受約束陀螺",
          "paragraphs": [
            "左圖轉彎協調儀的陀螺傾斜安裝，可對滾轉與偏航速率反應；右圖轉彎側滑儀主要指示轉彎速率。兩者的下方小球都另由液體彎管中的受力決定，不是由同一陀螺直接帶動。",
            "小飛機符號只是轉彎協調儀的顯示方式，不能把其傾斜角當成真實機翼傾斜角。儀表可以提供姿態表失效時所需的部分轉動資訊，但本身沒有俯仰指示，必須清楚知道能讀到什麼。"
          ],
          "figure": {
            "label": "Figure 8-21 · Turn coordinator and turn-and-slip indicator",
            "page": "8-17",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=17"
          }
        }
      ]
    },
    {
      "id": "turn-slip",
      "english": "Turn-and-Slip Indicator",
      "title": "轉彎側滑儀",
      "parent": "turn-indicators",
      "locator": "PHAK C 版 · 8-16",
      "printedPage": "8-16",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=16",
      "paragraphs": [
        "傳統轉彎側滑儀的速率陀螺主要感測偏航轉動，針的偏轉顯示轉彎方向及速率。小球是另一套受重力與慣性作用的裝置，兩者同在一個表面卻有不同原理。",
        "指針對準指定刻度才表示該儀表標定的轉彎率，需確認兩分鐘或其他刻度。自編例：右轉且小球居中，表示可同時存在轉彎與協調，不能把居中解釋成正在直線飛行。"
      ],
      "lessonBlocks": [
        {
          "title": "指針量速率，小球量協調",
          "paragraphs": [
            "受約束陀螺的偏轉與回復彈簧作用形成可讀指示。指針指向左或右表示轉彎方向，偏轉到指定刻度才代表標定的轉彎率；先確認這支表是兩分鐘或其他刻度，不能由外型猜測。",
            "約束與彈簧使它不像自由姿態陀螺那樣翻倒，但「不易 tumbling」不等於永不故障、沒有量測範圍限制。電源、摩擦與機械損壞仍可能使指示失真，不能把一種失效模式較少誤當成全部可靠。"
          ]
        }
      ]
    },
    {
      "id": "turn-coordinator",
      "english": "Turn Coordinator",
      "title": "轉彎協調儀",
      "parent": "turn-indicators",
      "locator": "PHAK C 版 · 8-17",
      "printedPage": "8-17",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=17",
      "paragraphs": [
        "轉彎協調儀的陀螺軸傾斜安裝，因此能對滾轉與偏航反應，進入轉彎時可較早顯示趨勢。穩定轉彎時，小飛機符號用於讀轉彎率，不是精確的機翼傾斜角。",
        "快速滾轉時的瞬時偏轉不能直接當成穩定轉彎率，且此表沒有俯仰資訊。自編練習：區分進入轉彎的過渡指示與穩定兩分鐘轉彎刻度，並另看小球判斷協調。"
      ],
      "lessonBlocks": [
        {
          "title": "進入轉彎時先反映滾轉，穩定後讀轉彎率",
          "paragraphs": [
            "快速向右滾轉時，小飛機符號可立即向右偏，且偏轉較大；此時不能把瞬時位置直接當成已穩定的右轉速率。當滾轉停止、傾斜較穩定後，才用標定刻度判讀轉彎率。",
            "兩分鐘標準率刻度代表 3°／s。自編例：已建立穩定標準率後轉過 180°約需 60 秒；完成改出仍需考慮滾轉過渡，不能等秒數到才假設航向已精確停止。小球則另用於判斷協調，與小飛機的方向分開讀。"
          ],
          "check": {
            "question": "協調儀小飛機偏得更斜，是否一定表示真實傾斜角更大？",
            "answer": "不是。它對滾轉與轉彎速率反應，不是傾斜角量測。"
          }
        }
      ]
    },
    {
      "id": "inclinometer",
      "english": "Inclinometer",
      "title": "小球與協調狀態",
      "parent": "gyro",
      "locator": "PHAK C 版 · 8-18",
      "printedPage": "8-18",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=18",
      "paragraphs": [
        "彎曲管中的球受重力與慣性作用，穩定協調轉彎時會位於中央。側滑時球通常在轉彎內側，側甩時在外側，反映傾斜與轉動的配合，而不是單純機身是否水平。",
        "「踩球」只是一種協調修正提示，不能忽略傾斜、速度及飛行情境；刻意側滑也有其用途與限制。自編例：過度內舵造成的側甩不能只靠看機翼是否平穩來排除，需交叉監控協調與迎角。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 8-22 · 同樣右轉，小球可以在三個位置",
          "paragraphs": [
            "右轉時球在內側（右）是典型 slip，表示轉彎率相對傾斜不足；球在外側（左）是典型 skid，表示轉彎率相對傾斜過大。協調時球居中，並不要求機翼水平。這是在對應穩定飛行情境下的受力判讀。",
            "「踩球」提醒朝球偏的一側施加適當方向舵以恢復協調，但修正仍要配合傾斜、迎角、速度與機型操作。刻意側滑有不同目的；低速轉彎也不能為追趕航道而持續增加內舵。球顯示的是受力相關狀態，不是直接量測鼻頭偏航角。"
          ],
          "figure": {
            "label": "Figure 8-22 · Slipping, skidding and coordinated turns",
            "page": "8-18",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=18"
          },
          "table": {
            "caption": "以右轉為例",
            "headers": [
              "狀態",
              "球位置",
              "需要理解的關係"
            ],
            "rows": [
              [
                "Slip",
                "右側、轉彎內側",
                "傾斜與轉彎率不匹配"
              ],
              [
                "Coordinated",
                "中央",
                "合成受力對準機體對稱面"
              ],
              [
                "Skid",
                "左側、轉彎外側",
                "轉彎率相對傾斜過大"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "yaw-string",
      "english": "Yaw String",
      "title": "偏航線與局部氣流",
      "parent": "inclinometer",
      "locator": "PHAK C 版 · 8-18",
      "printedPage": "8-18",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=18",
      "paragraphs": [
        "偏航線以細線在氣流中的方向呈現局部相對風，常見於滑翔機等合適位置。它不需要電力或陀螺，但安裝位置須能代表相關氣流，螺旋槳滑流與局部擾流可能影響讀值。",
        "偏航線量的是局部氣流方向，小球反映比力，二者不應在所有瞬態條件下一概視為相同。自編練習：先確認線的固定端與自由端，再依機型教學判讀，避免把小球修正口訣直接套到線尾。"
      ],
      "lessonBlocks": [
        {
          "title": "線尾跟隨局部相對風",
          "paragraphs": [
            "偏航線讓局部氣流方向變得可見，安裝在合適位置時可協助辨認側滑。它感受的不是地理北向，也不是風向袋所表示的地面風；飛機運動與機體流場都會影響線的方向。",
            "讀線前先確認固定端、自由端與正常置中方向。螺旋槳滑流或風擋擾流可能使它不代表全機側滑；其量測與小球的比力不同，瞬態時不能要求兩者逐瞬完全一致，更不應直接把「踩球」變成未經確認的「踩線尾」。"
          ]
        }
      ]
    },
    {
      "id": "turn-check",
      "english": "Instrument Check",
      "title": "轉彎指示與小球檢查",
      "parent": "inclinometer",
      "locator": "PHAK C 版 · 8-18",
      "printedPage": "8-18",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=18",
      "paragraphs": [
        "飛行前檢查傳統小球管的液體、氣泡及外觀，球在地面會依飛機停放傾斜落到低處。滑行轉彎時，轉彎指示應反映相符方向，小球通常向轉彎外側移動。",
        "滑行中的外側偏移不是空中協調轉彎的正常居中條件，因為地面受力不同。自編例：向右滑行轉彎時指示卻向左，需排查儀表或來源異常，不能以小球會動就判定全部正常。"
      ],
      "lessonBlocks": [
        {
          "title": "地面右轉：轉彎指示向右，小球通常向左",
          "paragraphs": [
            "在平整地面靜止時，小球應落在彎管低處；若機體停在斜面，低處不一定正好是刻度中央。檢查管內液體、氣泡、可動性與適用供電狀態，再在滑行中確認轉彎指示方向。",
            "自編例：向右滑行轉彎，轉彎指示應向右，小球通常向左外側移動。地面轉彎由輪胎和地面支承提供受力，與空中傾斜的協調轉彎不同；不能因地面小球不居中就認定需要用空中協調轉彎的方式解釋。"
          ]
        }
      ]
    },
    {
      "id": "gyro-attitude",
      "english": "Attitude Indicator",
      "title": "傳統姿態表",
      "parent": "gyro",
      "locator": "PHAK C 版 · 8-18",
      "printedPage": "8-18",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=18",
      "paragraphs": [
        "姿態表利用陀螺參考呈現機體俯仰及傾斜，飛機符號與地平線的相對位置才是讀值核心。俯仰角不是迎角，因為迎角還取決於相對氣流方向。",
        "傳統機械式可能有俯仰、傾斜限制，以及加速、轉彎等暫態誤差，超限或失去驅動可使顯示失真。自編例：不能因姿態表仍看似穩定就忽略真空警告，應按程序比較獨立姿態和其他資訊。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 8-23 · 飛機相對陀螺地平線轉動",
          "paragraphs": [
            "轉子在水平面旋轉，旋轉軸近於垂直；萬向架允許機體相對它俯仰及滾轉。地平線參考臂連到陀螺，飛機符號則提供機體參考，兩者的相對位置構成姿態讀值。實際儀表還需校正機構維持當地水平參考。",
            "飛機符號的上下調整可配合讀取視線，不能拿來掩蓋錯誤姿態或當成機體配平。機頭高於地平線表示正俯仰，不直接等於正爬升率；迎角還需考慮相對氣流方向。"
          ],
          "figure": {
            "label": "Figure 8-23 · Attitude indicator",
            "page": "8-18",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=18"
          }
        },
        {
          "title": "Figure 8-24 · 方向看飛機與地平線，角度看刻度",
          "paragraphs": [
            "圖中各姿態將實際飛機與儀表對照。先辨認飛機符號相對地平線是抬頭、低頭、左傾或右傾，再用刻度估角度；不同型號的 bank index 可有不同移動方式，不要只憑單一上方指標移動方向判斷左右。",
            "傳統姿態表的俯仰與傾斜限制依型號。原書列出的 60～70°俯仰、100～110°傾斜等只是部分儀表範例；超出顯示或機構範圍可能碰到止擋或翻倒，不能據此推定所有儀表的限制。沒有翻倒問題的設計仍可能有其他誤差或失效。"
          ],
          "figure": {
            "label": "Figure 8-24 · Attitude representation",
            "page": "8-19",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=19"
          },
          "check": {
            "question": "姿態顯示抬頭 10°，能否推定迎角就是 10°？",
            "answer": "不能。姿態相對地平線，迎角相對局部來流；飛行路徑不同，兩者數值就不同。"
          }
        }
      ]
    },
    {
      "id": "gyro-heading",
      "english": "Heading Indicator",
      "title": "航向陀螺與漂移",
      "parent": "gyro",
      "locator": "PHAK C 版 · 8-19",
      "printedPage": "8-19",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=19",
      "paragraphs": [
        "未自動同步的航向陀螺提供平穩方向參考，但不會自己找到磁北。摩擦與地球自轉等因素會造成漂移，需在適當穩定飛行狀態下，對照可靠磁航向來源校正。",
        "地球自轉是每小時十五度，但這不表示每一架飛機的航向表都固定每小時漂移十五度，還涉及緯度與機構。自編例：轉彎或加速時磁羅盤有暫態誤差，此時不宜盲目追著羅盤校正。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 8-25 · 平穩方向參考需要建立北向基準",
          "paragraphs": [
            "航向表的羅盤卡以 360°一圈表示方向，常省略末尾零，例如 6 表示 060°。它利用陀螺空間參考讓航向讀值較穩定，但未自動同步的陀螺不會自己找到磁北，必須先用適當參考設定。",
            "軸承摩擦與其他力矩造成漂移，地球自轉和飛機移動也影響參考。地球約每小時轉 15°不代表所有航向表每小時都固定漂移 15°，其投影與緯度、校正等有關。核對磁羅盤應在適當穩定條件下進行，避開其轉彎或加速暫態誤差。"
          ],
          "figure": {
            "label": "Figure 8-25 · Heading indicator",
            "page": "8-20",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=20"
          }
        },
        {
          "title": "HSI 是顯示形式，同步功能要看來源",
          "paragraphs": [
            "部分 HSI 配備磁同步，利用遠端磁感測器修正航向陀螺；其他配置仍可能需要人工校正。只看到 HSI 外型不能保證具備自動 slaving，也不能證明它正處於同步模式。",
            "自編案例：航向表看起來平順但逐漸與可靠磁參考偏離，先確認模式、來源與供能，再依手冊處理。追著正在擺動或加速中的磁羅盤反覆重設，可能把暫態誤差帶入原本較平穩的參考。"
          ]
        }
      ]
    },
    {
      "id": "ahrs",
      "english": "Attitude and Heading Reference System (AHRS)",
      "title": "姿態與航向參考系統",
      "parent": "gyro",
      "locator": "PHAK C 版 · 8-20",
      "printedPage": "8-20",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=20",
      "paragraphs": [
        "AHRS 整合角速率、加速度及適用磁場等資料估算姿態與航向，部分系統還使用其他輔助資訊。實作可採 MEMS 或其他慣性感測技術，不能將原書的雷射描述套到所有 AHRS。",
        "沒有傳統轉子翻倒問題，不代表無初始化、對準或運動條件限制。自編例：失去磁感測來源可能影響航向而不立即失去所有姿態功能；實際退化模式與重啟限制需查設備手冊。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 8-26 · 由感測器融合建立姿態與航向",
          "paragraphs": [
            "AHRS 將角速率與加速度等資料整合，用以估算姿態；磁感測器可提供航向參考，部分系統另使用 GPS 或大氣資料輔助。它不是單靠磁羅盤就得到俯仰，也不是只累加角速度而完全不需要修正漂移。",
            "原書把電子系統一概稱作固態雷射系統，適用範圍過窄。AHRS 可使用 MEMS 或其他感測技術；共同重點是感測、計算與參考融合。沒有傳統旋轉萬向架翻倒問題，不表示任何初始化條件、磁干擾或資料中斷下都能保持有效。"
          ],
          "figure": {
            "label": "Figure 8-26 · Attitude and heading reference system",
            "page": "8-20",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=20"
          }
        },
        {
          "title": "來源退化時，依系統模式辨認剩餘能力",
          "paragraphs": [
            "Garmin G900X 的 GRS 77 範例會依 GPS、磁場及大氣資料是否可用，採不同的姿態／航向運作模式。因此「失去一個來源」不必然等於所有顯示立即消失，但也不能假設每套 AHRS 都有相同備援邏輯。",
            "檢查重點是目前有效標示、來源和核准退化模式。重新亮起的數字可能仍在初始化；兩個顯示器若共用一套 AHRS，其相同姿態也可能來自同一錯誤。失效處置和能否空中重新對準，須依具體設備與飛機手冊。"
          ],
          "check": {
            "question": "AHRS 沒有傳統轉子，是否就不需要供能與初始化檢查？",
            "answer": "仍需要。感測器與計算依賴電力、有效輸入及適當初始化條件，失效形式只是與機械陀螺不同。"
          }
        }
      ],
      "references": [
        {
          "title": "Garmin G900X Pilot’s Guide · AHRS operation",
          "url": "https://static.garmin.com/pumac/190-00726-00_L.pdf",
          "checked": "2026-09-16"
        }
      ]
    },
    {
      "id": "fluxgate",
      "english": "The Flux Gate Compass System",
      "title": "磁通閘羅盤系統",
      "parent": "gyro",
      "locator": "PHAK C 版 · 8-20",
      "printedPage": "8-20",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=20",
      "paragraphs": [
        "磁通閘以受交流激磁的磁性材料與感應線圈，將外部磁場方向轉成可處理的電訊號。這讓磁感測器可放在較少機內干擾的位置，再把資訊傳到顯示或航向同步系統。",
        "它量測的是當地磁場，並非直接接收衛星航向，也仍可能受附近電流或磁性物品干擾。自編例：新裝設備後航向出現偏差，應考慮安裝與校準問題，而不只是旋轉顯示器旋鈕。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 8-27 · 交流激磁使地磁訊號可被感應",
          "paragraphs": [
            "原圖位於 8-21，接續 8-20 的入門說明。軟鐵框架與三組拾取線圈負責感受不同方向的磁場分量，中心線圈則以交流激磁。教材範例使用 400 Hz，使鐵芯週期性接近飽和，改變其接受外部地磁通的狀態。",
            "感應的關鍵是磁通量隨時間改變；不能把靜止不變的地磁場理解成會在靜止線圈中持續自行發電。交流激磁讓地磁相關訊號可被轉成電訊號，供後續航向同步使用。遠端安裝可減少部分干擾，但仍需合適安裝與校準；接續 Figure 8-28 與遠端羅盤單元可追蹤訊號如何傳往同步與顯示系統。"
          ],
          "figure": {
            "label": "Figure 8-27 · Flux valve",
            "page": "8-21",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=21"
          },
          "check": {
            "question": "磁通閘羅盤的北向來自 GPS 嗎？",
            "answer": "本原理的方向參考來自當地地磁場，交流激磁協助感測它；不是從 GPS 直接取得北向。"
          }
        },
        {
          "title": "Figure 8-28 · 航向改變，三組線圈的相對訊號改變",
          "paragraphs": [
            "把兩個圖中的地磁方向視為同一外部參考，再觀察飛機及三組拾取線圈相對它的方向。飛機轉向後，各線圈感受到的磁場分量不同，因此經交流激磁取得的相對訊號也不同；系統可由這組訊號建立磁方向資訊。",
            "教材以 synchro 同步器說明訊號如何傳往顯示端。完整系統還包含適用的放大、比較與驅動環節，不是地磁場直接供應足夠能量旋轉整個儀表。磁通閘感測、陀螺平穩參考與顯示卡驅動是可分辨的功能。"
          ],
          "figure": {
            "label": "Figure 8-28 · Flux valve signals with heading changes",
            "page": "8-21",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=21"
          }
        }
      ]
    },
    {
      "id": "remote-compass",
      "english": "Remote Indicating Compass",
      "title": "遠端指示羅盤",
      "parent": "gyro",
      "locator": "PHAK C 版 · 8-21",
      "printedPage": "8-21",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=21",
      "paragraphs": [
        "遠端羅盤將磁感測、訊號處理及座艙顯示分開，可用磁參考修正航向陀螺，兼顧平穩顯示與長期方向基準。同步與自由模式的切換、失效指示和人工校正依系統。",
        "RMI 可在航向卡上疊加電台方位指針，但方位指針所指目標和航向卡的資料來源不同。自編例：指針指向電台不代表機頭正對電台，應同時閱讀航向、相對方位及選定接收來源。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 8-29 · 磁參考慢慢修正平穩的陀螺航向",
          "paragraphs": [
            "先辨認 HSI、slaving meter 與同步控制組件。典型系統以遠端 flux valve 取得磁參考，再透過誤差信號和力矩馬達使陀螺進動，逐步對齊；陀螺提供平穩指示，磁參考限制長期漂移。原文的 processes the gyro 應按此理解為使陀螺進動校正。",
            "Slaved 模式使用自動磁同步，free gyro 模式則依系統設計採人工航向調整。同步表顯示的是兩個參考之間的差異，不是轉彎率；教材裝置右偏代表順時針卡片誤差、左偏代表逆時針誤差，實際極性、轉彎中指示與控制方式均須查該設備。"
          ],
          "figure": {
            "label": "Figure 8-29 · HSI and slaving controls",
            "page": "8-21",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=21"
          },
          "table": {
            "caption": "航向系統的不同工作",
            "headers": [
              "元件／模式",
              "主要作用",
              "仍需注意"
            ],
            "rows": [
              [
                "遠端磁感測器",
                "提供磁方向參考",
                "遠離干擾不等於完全無干擾"
              ],
              [
                "陀螺與同步迴路",
                "平穩顯示並校正漂移",
                "供能、有效性與模式"
              ],
              [
                "Slaved",
                "使用自動磁同步",
                "不等於磁訊號永遠正確"
              ],
              [
                "Free gyro",
                "保持陀螺參考、按需要人工校正",
                "需定期核對漂移"
              ]
            ]
          }
        },
        {
          "title": "Figure 8-30 · RMI 的卡片與兩根指針回答不同問題",
          "paragraphs": [
            "RMI 把航向卡與電台方位指針結合。圖例的一根指針由 ADF、另一根由 VOR 資料驅動，羅盤卡則由航向系統提供參考。先確認選中的來源與資料有效性，再區分機頭航向、電台方位和指針尾端的反向方位。",
            "自編例：航向卡顯示 090°，有效電台指針頭在 120°，表示電台約在機頭右側 30°；並不表示機頭朝 120°，也不保證目前地面航跡會通過電台。方位、航向和受風影響的航跡應分開判讀。"
          ],
          "figure": {
            "label": "Figure 8-30 · Radio magnetic indicator (RMI)",
            "page": "8-22",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=22"
          },
          "check": {
            "question": "航向卡來源失效，方位指針仍會動，能否照常讀取磁方位？",
            "answer": "不能直接照常使用。磁方位的讀取依賴正確航向卡與有效導航來源，指針能動只驗證其中一部分。"
          }
        },
        {
          "title": "自由陀螺的核對週期、限制與供能",
          "paragraphs": [
            "原書建議約每 15 分鐘核對未自動同步的航向表；這是常見訓練間隔，實際還要依機型、漂移情況和程序。與磁羅盤對齊時，先建立直線、平穩、定速狀態，以免把磁羅盤的動態誤差抄進航向表。",
            "原文約 55°俯仰或傾斜的翻倒限制只適用於部分儀表。Caging／重設方式也依型號，不能看到錯誤就任意操作鎖定旋鈕。真空不足會使轉子減速，可能先漂移加劇而非立即停止，需同時監控供能與獨立參考。"
          ]
        }
      ]
    },
    {
      "id": "heading-check",
      "english": "Instrument Check",
      "title": "航向系統檢查",
      "parent": "remote-compass",
      "locator": "PHAK C 版 · 8-22",
      "printedPage": "8-22",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=22",
      "paragraphs": [
        "飛行前確認航向顯示與可信參考大致一致，滑行轉彎時應平順且方向正確。具同步功能的系統還要檢查模式、電力與失效警告，不能只確認羅盤卡能轉動。",
        "核對磁羅盤時須考慮附近金屬、地面設施與暫態誤差；過度漂移可能代表機構或供能問題。自編例：兩個航向畫面若都依賴同一磁感測器，其一致性仍不能排除共同干擾。"
      ],
      "lessonBlocks": [
        {
          "title": "啟動、滑行與穩定條件下各檢查一次",
          "paragraphs": [
            "轉子加速時留意異常聲音及適用警示；滑行轉彎時核對指示方向和連續性；穩定後比較可信磁參考與同步模式。怠速吸力不足時，真空陀螺可能尚未達工作轉速，不能把這時的漂移直接當成正常飛行性能。",
            "自編案例：滑行時航向卡向正確方向移動，但供能不足且持續漂移。方向檢查通過不等於系統已可正常使用；必須確認適用運轉條件、供能範圍、警告及剩餘不一致都已按程序處理。"
          ]
        }
      ]
    },
    {
      "id": "aoa",
      "english": "Angle of Attack Indicators",
      "title": "迎角指示與失速裕度",
      "parent": null,
      "locator": "PHAK C 版 · 8-22",
      "printedPage": "8-22",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=22",
      "paragraphs": [
        "迎角指示器提供當前迎角或距離臨界迎角的相關資訊，可補足只看空速的限制。失速與臨界迎角相關，重量、負荷因數或構型改變時，失速發生的空速也可能不同。",
        "感測方式、校準、構型補償及保護範圍依裝置，不能假定顏色正常就保證所有情況安全。自編例：轉彎加大負荷時即使空速仍在平飛熟悉範圍，也應理解迎角裕度如何減少。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 8-31 · 迎角指示把失速裕度變得可見",
          "paragraphs": [
            "迎角是翼弦與相關相對氣流的夾角，不是機頭對地平線的俯仰角。AOA 顯示可以是角度、色帶或相對臨界迎角的裕度；不同設備可能利用迎角葉片、壓差或其他量測推估，不能把每種色帶都讀成相同幾度。",
            "在翼型、構型和流動條件近似不變時，達到臨界迎角才是失速判準。重量或載荷因數增加，通常使達到它的空速提高；這解釋了為何單靠平飛失速速度不能保證轉彎中的裕度。"
          ],
          "figure": {
            "label": "Figure 8-31 · Angle of attack indicators",
            "page": "8-23",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=23"
          },
          "check": {
            "question": "空速高於熟悉的平飛失速速度，是否不可能失速？",
            "answer": "仍可能。較大的載荷因數可能使飛機在更高空速達到臨界迎角，還要考慮構型和污染等條件。"
          }
        },
        {
          "title": "「相同臨界迎角」有前提，AOA 也不是完整能量表",
          "paragraphs": [
            "不要把原書列出的重量、傾斜角、溫度、密度高度、重心清單理解成任何狀況下臨界迎角都完全不變。襟翼、表面污染或結冰、馬赫數及其他流動條件可改變失速特性；重心則會改變配平、尾翼負荷及所需機翼升力，不能因此忽略其性能和操縱影響。",
            "FAA AOA 補充教材列出校準、未加熱探頭、指示型式、襟翼設定及機翼污染等限制。AOA 可協助判斷失速裕度與操縱狀態，但同一 AOA 下可能有不同速度、高度與可用推力，無法單獨表示完整能量。仍須配合空速、高度、功率與飛行路徑。"
          ],
          "table": {
            "caption": "AOA 指示的能力與邊界",
            "headers": [
              "資訊",
              "可以幫助判斷",
              "不能單獨保證"
            ],
            "rows": [
              [
                "接近臨界迎角",
                "失速裕度變小",
                "探頭與校準一定有效"
              ],
              [
                "色帶或提示音",
                "按設備定義辨認區間",
                "所有構型均使用同一門檻"
              ],
              [
                "當前 AOA",
                "當前氣動狀態的一部分",
                "完整能量、爬升能力或障礙裕度"
              ]
            ]
          }
        }
      ],
      "references": [
        {
          "title": "FAA Instrument Flying Handbook Addendum · AOA 指示限制",
          "url": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/ifh_addendum.pdf",
          "checked": "2026-09-18"
        }
      ]
    },
    {
      "id": "compass-systems",
      "english": "Compass Systems",
      "title": "羅盤系統與方向基準",
      "parent": null,
      "locator": "PHAK C 版 · 8-23",
      "printedPage": "8-23",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=23",
      "paragraphs": [
        "羅盤系統提供方向參考，直接讀取磁羅盤與遠端電子磁航向系統的機構、能源及失效方式不同。航向回答機頭指向，航道與航跡則用於描述計畫路徑和實際移動方向。",
        "真北、磁北與羅盤讀值需要分層理解，再處理風修正。自編練習：先寫出資料是 true、magnetic 還是 compass，再做換算，避免把磁差修正與側風造成的偏流混在一起。"
      ],
      "lessonBlocks": [
        {
          "title": "地磁有水平與垂直分量",
          "paragraphs": [
            "羅盤利用當地磁場建立方向參考；水平分量協助指向磁北，垂直分量則與磁傾及動態誤差有關。可自由轉動的磁鐵趨向沿磁場排列，磁通閘則利用交流激磁取得磁場分量，兩者的量測方式不同。",
            "地理北方附近的「北磁極」是地理命名；以通常磁場箭頭方向看，磁場在北磁極附近向下進入地球，在南磁極附近向外。原文把磁力線由北磁極離開、南磁極進入的描述不可直接照搬。磁極位置也不是固定不動的導航座標。"
          ]
        }
      ],
      "references": [
        {
          "title": "NOAA NCEI · 地磁方向、磁極與磁傾",
          "url": "https://www.ncei.noaa.gov/products/geomagnetism-frequently-asked-questions",
          "checked": "2026-09-18"
        }
      ]
    },
    {
      "id": "magnetic",
      "english": "Magnetic Compass",
      "title": "直接讀取磁羅盤",
      "parent": "compass-systems",
      "locator": "PHAK C 版 · 8-23",
      "printedPage": "8-23",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=23",
      "paragraphs": [
        "傳統磁羅盤以磁鐵帶動浮動羅盤卡，液體支撐並抑制振盪，基準線代表機身讀取方向。磁鐵趨向沿當地磁場的水平分量排列，不是沿直線指向一個固定地理位置。",
        "刻度從觀察者一側讀取，轉彎時容易有看似反向的視覺感受，需以基準線上的航向判斷。自編例：數字 33 代表 330 度而非 33 度；同時要留意氣泡、液位和附近磁性物品。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 8-32 · 浮子、磁鐵、液體與基準線",
          "paragraphs": [
            "沿圖辨認浮子上的磁鐵、包在浮子周圍的羅盤卡、支點及液體。浮力減少支點承受的重量，液體提供阻尼；溫度改變液體體積時，殼體內的柔性膜片或波紋管容許膨脹。它不是靠飛機電源才知道磁方向。",
            "讀值看固定在外殼上的 lubber line 所對準的刻度。3、6、33 分別表示 030°、060°、330°；長短刻線間距依該型號。原文約 18°可傾斜量是特定機構說明，不是所有液體羅盤的共同操作限值。"
          ],
          "figure": {
            "label": "Figure 8-32 · Magnetic compass",
            "page": "8-23",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=23"
          }
        },
        {
          "title": "卡片看似反向，是因為人和外殼在轉",
          "paragraphs": [
            "傳統羅盤從卡片背面讀取，飛機和飛行員轉向時，磁鐵與卡片仍趨向維持磁場方向，所以卡片相對視窗移動的方向容易造成直覺混淆。應讀基準線上的航向，而不是只看某個字母向左或向右滑動。",
            "檢查時看液位、氣泡、外觀、卡片是否自由及附近磁性物品。耳機磁鐵、支架、電流與機載設備都可能影響讀值；外觀完整且卡片平穩，不代表沒有固定偏差。維修與加液使用指定材料及程序，不自行代用液體。"
          ]
        }
      ]
    },
    {
      "id": "compass-errors",
      "english": "Magnetic Compass Induced Errors",
      "title": "磁羅盤誤差的分類",
      "parent": "magnetic",
      "locator": "PHAK C 版 · 8-24",
      "printedPage": "8-24",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=24",
      "paragraphs": [
        "磁差來自真北與當地磁北的方向差，自差來自機上磁場對羅盤的影響；轉彎、加速與振盪則涉及機構和受力。前兩者的基準修正不能消除後面的動態誤差。",
        "本節以下補入正文標題，將不同原因分開學習。原書城市磁差與等磁差線為教材時點例子，實際導航需查有效航圖；不能拿舊地圖數字當作目前地區的固定磁差。"
      ],
      "lessonBlocks": [
        {
          "title": "把基準差、機上干擾與動態誤差分開",
          "paragraphs": [
            "Variation 是真北與磁北之差，deviation 是機上磁場造成的羅盤偏差；轉彎和加減速誤差則涉及磁傾與浮動組件的受力。校正卡主要處理剩餘自差，不會消除轉彎中的暫態讀值。",
            "先辨認是哪一類問題，才知道要查航圖、校正卡，還是等待適當穩定條件。南北轉彎和 ANDS 口訣以下均以北磁半球典型磁羅盤為前提，不能不加條件地套用到所有地區或電子航向系統。"
          ],
          "table": {
            "caption": "誤差分類",
            "headers": [
              "名稱",
              "主要來源",
              "處理依據"
            ],
            "rows": [
              [
                "磁差 Variation",
                "真北與當地磁北方向不同",
                "有效航圖／磁場資料"
              ],
              [
                "自差 Deviation",
                "機內磁性與電流",
                "適用設備狀態的校正卡"
              ],
              [
                "轉彎／加減速誤差",
                "磁傾與浮動機構受力",
                "磁半球、動態條件與訓練"
              ],
              [
                "振盪",
                "運動造成卡片擺動",
                "穩定觀察及適當阻尼"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "variation",
      "english": "Variation",
      "title": "磁差：真北與磁北",
      "parent": "compass-errors",
      "locator": "PHAK C 版 · 8-24",
      "printedPage": "8-24",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=24",
      "paragraphs": [
        "磁差是某地真北與磁北之間的角度差，隨位置和時間變化。等磁差線連接相同磁差的位置，零磁差線表示兩種北向在該處重合，而不是全世界只有一條永久不動的線。",
        "由真方向換磁方向時，東磁差減、西磁差加；反向換算則反過來。自編例：真航向 090 度、東磁差 10 度，磁航向是 080 度；此例只做基準轉換，未包含風或自差。"
      ],
      "supplementalHeading": true,
      "lessonBlocks": [
        {
          "title": "Figure 8-33 · 等磁差線有位置與日期",
          "paragraphs": [
            "Isogonic line 連接相同磁差的位置，agonic line 表示零磁差。它不是羅盤卡的校正曲線；換飛機不會因機上自差不同就改變當地真北與磁北之間的關係。原圖城市與數值屬教材時點，不能用來代替今日航圖。",
            "由真方向換磁方向時，東磁差減、西磁差加。自編例：真航向 180°、西磁差 10°，磁航向為 190°；若東磁差 14°，則為 166°。反向換算要反轉運算，且在 0～360°範圍內整理結果。"
          ],
          "figure": {
            "label": "Figure 8-33 · Isogonic lines",
            "page": "8-24",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=24"
          },
          "check": {
            "question": "真航向 005°、東磁差 10°，磁航向是多少？",
            "answer": "005−010＝−005°，換成一圈內的表示就是 355°。"
          }
        }
      ],
      "references": [
        {
          "title": "NOAA NCEI · 磁極與磁差隨時間改變",
          "url": "https://www.ncei.noaa.gov/news/tracking-changes-earth-magnetic-poles",
          "checked": "2026-09-18"
        }
      ]
    },
    {
      "id": "deviation",
      "english": "Deviation",
      "title": "自差：機上磁場干擾",
      "parent": "compass-errors",
      "locator": "PHAK C 版 · 8-24",
      "printedPage": "8-24",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=24",
      "paragraphs": [
        "自差是飛機內磁性材料與電流等對羅盤造成的偏差，常隨航向與設備狀態不同。校正羅盤可減少誤差，剩餘修正記錄在適用校正卡上，不能用所在地磁差來替代。",
        "校正卡要確認是指定「欲飛方向應操多少」還是帶正負號的修正值，再依其標示使用。自編例：把耳機磁鐵或磁性支架靠近羅盤，可造成額外干擾；換裝設備也可能需要重新評估校準。"
      ],
      "supplementalHeading": true,
      "lessonBlocks": [
        {
          "title": "Figure 8-34 · 羅盤校準先建立可信磁航向",
          "paragraphs": [
            "羅盤 swing 在一系列已知磁航向比較實際方向與羅盤指示，以補償磁鐵減少機上干擾，再記錄殘餘誤差。測試地點需避免建築、金屬、地下配線等影響；看得到地面方位線並不等於該地點仍適合校準。",
            "原圖把北向標為 True north，但羅盤校準需要已知磁航向；使用真北參考時必須先換算。FAA AC 43-215 將校準、補償調整和校正卡製作列為維修，由適當資格的機身技師或維修站執行；飛行員協助滑行不等於取得調整或簽署權限。"
          ],
          "figure": {
            "label": "Figure 8-34 · Compass calibration reference",
            "page": "8-25",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=25"
          }
        },
        {
          "title": "Figure 8-35 · 校正卡可能直接告訴你應操多少",
          "paragraphs": [
            "先讀卡片欄名：若寫「FOR 某磁航向，STEER 某羅盤讀值」，可直接依對應欄位使用，不要再把兩個數字差重複加一次。若表格給帶符號的 deviation，則先確認正負號定義。原圖只示範卡片型式，飛行應使用本機適用卡片。",
            "機上電流與設備狀態會改變干擾，校正卡可能區分設備開啟或關閉等配置。中間航向的使用依卡片與程序，跨過 360°時也不能直接取普通算術平均。校正降低的是特定條件的殘餘自差，不保證新的磁性貨物或設備不再引入偏差。"
          ],
          "figure": {
            "label": "Figure 8-35 · Compass correction card",
            "page": "8-25",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=25"
          }
        },
        {
          "title": "從航道到羅盤航向，中間還有風修正",
          "paragraphs": [
            "Course 是希望飛行的地面路徑，heading 是機頭指向。原書 180°→190°→188°的例子須假定無須風修正，或起點其實已是真航向；有側風時，只做磁差與自差修正不能保證沿著真航道飛行。",
            "自編完整例：真航道 180°，風三角形算出需向右修正 5°，得真航向 185°；西磁差 10°，得磁航向 195°。假設本機校正卡明示 FOR 195° STEER 193°，應操羅盤航向 193°。反算時沿原步驟倒推，不能將每個 ± 都當成任意選擇。"
          ],
          "table": {
            "caption": "自編航向換算，校正卡數值僅為練習",
            "headers": [
              "步驟",
              "計算",
              "結果"
            ],
            "rows": [
              [
                "航道加風修正",
                "180＋5",
                "真航向 185°"
              ],
              [
                "真轉磁，西磁差加",
                "185＋10",
                "磁航向 195°"
              ],
              [
                "讀本機校正卡",
                "FOR 195，STEER 193",
                "羅盤航向 193°"
              ]
            ]
          },
          "check": {
            "question": "若已依 FOR／STEER 卡選出 193°，還要再減 2°嗎？",
            "answer": "不要。卡片已給出所需羅盤讀值，再減一次會重複修正。"
          }
        }
      ],
      "references": [
        {
          "title": "FAA AC 43-215 · 羅盤校準、資格與校正卡",
          "url": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_43-215.pdf",
          "checked": "2026-09-18"
        }
      ]
    },
    {
      "id": "dip",
      "english": "Dip Errors",
      "title": "磁傾與動態誤差來源",
      "parent": "compass-errors",
      "locator": "PHAK C 版 · 8-25",
      "printedPage": "8-25",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=25",
      "paragraphs": [
        "地磁場除水平分量外還有垂直分量，其與水平面的夾角稱磁傾角。直接讀取羅盤的懸掛與配重力求保持卡面近水平，但轉彎或加速使其傾斜時，垂直分量就可能影響指示。",
        "接近磁極時水平分量變小，磁航向參考的可用性下降。後續南北口訣以北磁半球典型羅盤為前提，南磁半球的動態誤差方向相反；不能用地理緯度口訣忽略實際磁場和機構。"
      ],
      "supplementalHeading": true,
      "lessonBlocks": [
        {
          "title": "磁傾不是磁差，磁赤道也不是地理赤道",
          "paragraphs": [
            "磁傾是磁場與水平面的夾角，磁差則是水平面內磁北與真北的夾角。磁赤道是一條磁傾約為零的曲線，會隨磁場變動，不能簡化成兩磁極之間固定的幾何中點或直接等同地理赤道。",
            "浮動羅盤透過懸掛、重心與適用平衡設計讓卡面接近水平，但機體加速或傾斜會改變受力，使垂直磁場分量影響指示。不同羅盤可能有磁區適用限制，不能由原文推論所有羅盤無需補償即可在各緯度正常工作；磁極附近水平分量很小，本來就不利磁航向判讀。"
          ],
          "check": {
            "question": "磁差校正完成，是否也消除了磁傾造成的動態誤差？",
            "answer": "沒有。兩者分別是水平基準差與垂直磁場相關效應，校正方式不能互換。"
          }
        }
      ],
      "references": [
        {
          "title": "NOAA NCEI · 磁赤道、磁傾與羅盤磁區",
          "url": "https://www.ncei.noaa.gov/products/geomagnetism-frequently-asked-questions",
          "checked": "2026-09-18"
        }
      ]
    },
    {
      "id": "north-error",
      "english": "Northerly Turning Errors",
      "title": "北向轉彎誤差",
      "parent": "compass-errors",
      "locator": "PHAK C 版 · 8-26",
      "printedPage": "8-26",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=26",
      "paragraphs": [
        "在北磁半球，從北向開始轉彎時，傳統磁羅盤指示通常落後實際轉動，初期甚至可能顯示反向。談「羅盤卡運動」與「基準線讀出的航向」時觀察角度不同，必須明確指出讀的是哪一個。",
        "向北航向改出時常用提前改平的訓練概念，但提前量受磁傾、轉彎率、傾斜及改平過程影響。不要把原書固定角度近似當成每次轉彎的精確程序，穩定後仍需核對實際航向。"
      ],
      "supplementalHeading": true,
      "lessonBlocks": [
        {
          "title": "Figure 8-36 · 北向讀值落後，改出要考慮動態誤差",
          "paragraphs": [
            "以北磁半球典型羅盤、從北向開始轉彎為例：基準線上的航向讀值通常落後實際轉動，起初甚至可能朝相反方向。原文把卡片／浮子動作稱為 lead，不能直接翻成「航向讀值領先」；本教材的領先與落後均指讀值相對實際磁航向的變化。",
            "轉向北方航向改出時，常用 UNOS 中的 Undershoot North，意指在羅盤讀值尚未到目標北向時開始適當改出。原文 15°加半緯度只是一種粗略教學估算，不能當成所有轉彎率、傾斜、磁傾與儀表的精確公式；需經訓練並在改平穩定後核對。"
          ],
          "figure": {
            "label": "Figure 8-36 · Northerly and southerly turning errors",
            "page": "8-26",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=26"
          },
          "table": {
            "caption": "北磁半球的典型羅盤讀值觀點",
            "headers": [
              "情境",
              "讀值反應／教學提示",
              "觀察對象"
            ],
            "rows": [
              [
                "從北向起轉",
                "落後，初期可能反向",
                "基準線讀出的航向"
              ],
              [
                "從南向起轉",
                "領先，轉動看似較快",
                "基準線讀出的航向"
              ],
              [
                "改出到北向",
                "Undershoot North",
                "含改平過程的動態補償"
              ],
              [
                "改出到南向",
                "Overshoot South",
                "含改平過程的動態補償"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "south-error",
      "english": "Southerly Turning Errors",
      "title": "南向轉彎誤差",
      "parent": "compass-errors",
      "locator": "PHAK C 版 · 8-26",
      "printedPage": "8-26",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=26",
      "paragraphs": [
        "在北磁半球，從南向開始轉彎時，羅盤航向讀值通常領先實際轉動。此處的領先指讀值變化相對真實航向，而不是只看浮動卡在殼內朝哪個方向轉。",
        "向南航向改出時常有延後改平的訓練概念，與北向情況配對理解。自編練習：分別描述「從南向開始轉」與「轉到南向結束」，不要把起始誤差和終止補償當成完全相同的句子。"
      ],
      "supplementalHeading": true,
      "lessonBlocks": [
        {
          "title": "南向讀值領先，避免把「卡片落後」當成讀值落後",
          "paragraphs": [
            "在北磁半球從南向開始轉彎，典型羅盤航向讀值會領先實際轉動。原書同時使用浮子運動、假指示與改出時機描述，容易讓讀者把不同觀察量混在一起；應先明確指出讀值和實際航向各是多少，再談差異。",
            "轉向南方改出時，Overshoot South 表示通常需要讓羅盤讀值通過目標南向再按訓練改出，並非要求最後實際航向超過目標。北磁半球口訣在南磁半球需反向理解；實際改出量仍受儀表、磁場與轉彎過程影響。"
          ],
          "check": {
            "question": "Overshoot South 是否表示最後應飛超過目標南向？",
            "answer": "不是。它描述使用有動態誤差的羅盤時如何安排改出，最後仍應在穩定後達到並核對目標航向。"
          }
        }
      ]
    },
    {
      "id": "acceleration-error",
      "english": "Acceleration Error",
      "title": "加速與減速誤差",
      "parent": "compass-errors",
      "locator": "PHAK C 版 · 8-26",
      "printedPage": "8-26",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=26",
      "paragraphs": [
        "在北磁半球、近東或西航向的典型直接讀取羅盤，加速會造成短暫向北的假轉彎指示，減速則向南，可用 ANDS 記憶。這來自磁傾與浮動組件受力，並不代表機頭真的轉向。",
        "此類誤差在南磁半球方向相反，且南北航向與不同運動狀態不能直接套用相同大小的反應。自編例：東向直飛增加速度時，若羅盤短暫偏北，應先交叉核對航向而非立刻追著修正。"
      ],
      "supplementalHeading": true,
      "lessonBlocks": [
        {
          "title": "Figure 8-37 · ANDS 描述假轉向，不是真實偏航",
          "paragraphs": [
            "北磁半球在東或西航向加速時，典型磁羅盤短暫顯示朝北轉；減速時短暫顯示朝南轉。這來自浮動組件的慣性、傾斜與磁傾效應，不表示飛機必然真的轉彎。ANDS 以 Acceleration North、Deceleration South 記憶。",
            "此效應在東西航向明顯，南北航向不宜直接套同樣反應；南磁半球方向相反。確認是否真轉向仍須比較適用的獨立資訊，不可只為消除加速時的瞬間羅盤偏移而追著轉機頭。"
          ],
          "figure": {
            "label": "Figure 8-37 · Acceleration and deceleration error",
            "page": "8-27",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=27"
          },
          "table": {
            "caption": "北磁半球、近東西航向的典型反應",
            "headers": [
              "原航向",
              "加速時假指示",
              "減速時假指示"
            ],
            "rows": [
              [
                "東 090°",
                "向北，讀值趨小",
                "向南，讀值趨大"
              ],
              [
                "西 270°",
                "向北，讀值趨大",
                "向南，讀值趨小"
              ]
            ]
          },
          "check": {
            "question": "同樣「加速向北」，東向與西向時數字都會變小嗎？",
            "answer": "不會。090°向北時數字趨小，270°向北時數字趨大；口訣指方向而非一律加減固定數字。"
          }
        }
      ]
    },
    {
      "id": "oscillation",
      "english": "Oscillation Error",
      "title": "振盪與穩定讀值",
      "parent": "compass-errors",
      "locator": "PHAK C 版 · 8-27",
      "printedPage": "8-27",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=27",
      "paragraphs": [
        "亂流與運動可使羅盤卡左右擺動，瞬間讀值可能不能代表穩定航向。液體阻尼降低擺動，但不能消除所有磁場和受力影響，也不能用擺動中心修正所有持續偏差。",
        "核對航向陀螺時應先建立適當穩定條件，必要時觀察擺動的平均方向。自編例：一邊加速一邊把陀螺追著羅盤每次擺動重設，反而會把暫態誤差帶入較平穩的參考。"
      ],
      "supplementalHeading": true,
      "lessonBlocks": [
        {
          "title": "取擺動中間值前，先排除持續誤差",
          "paragraphs": [
            "亂流或運動使浮子擺動，穩定條件下觀察一段時間的中心趨勢，比追逐每一瞬間讀值更有用。但振盪不是所有誤差都會互相抵消的機制，平均值仍可能帶著自差、磁干擾或持續運動造成的偏差。",
            "自編例：羅盤在 080°與 100°之間來回擺動，中心約 090°；如果旁邊新放了一個磁性物品，這個中心仍可能錯誤。核對航向陀螺前需先確立適當直線、平穩、定速條件與可靠參考。"
          ]
        }
      ]
    },
    {
      "id": "vertical-card",
      "english": "The Vertical Card Magnetic Compass",
      "title": "垂直卡式磁羅盤",
      "parent": "compass-systems",
      "locator": "PHAK C 版 · 8-27",
      "printedPage": "8-27",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=27",
      "paragraphs": [
        "垂直卡式以齒輪將磁感測組件的方向轉成面向飛行員的羅盤卡，讀法更接近航向表，減少傳統液體羅盤的視覺混淆。它仍以磁場為參考，不會因外觀像航向陀螺就變成陀螺儀。",
        "這種設計可改善讀取與阻尼特性，但仍要理解磁差、自差及動態誤差，實際補償依裝置。自編例：看到直立刻度盤不能推定它需要電力或自動同步，應先識別設備型號和原理。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 8-38 · 正面讀盤改變讀法，不改變磁參考本質",
          "paragraphs": [
            "垂直卡式羅盤以機構將磁鐵方向帶到正面刻度盤，飛機符號鼻端可作讀值基準，視覺上較接近航向陀螺。字母代表主要方向，數字及刻線的間距仍須依實際儀表辨認。",
            "外觀像航向表不代表內部就是陀螺或一定依賴電力。它仍感受當地磁場，可能受到自差及動態誤差；安裝、磁區平衡與限制依設備。可讀性改善與磁方向準確度是兩個不同問題。"
          ],
          "figure": {
            "label": "Figure 8-38 · Vertical card magnetic compass",
            "page": "8-27",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=27"
          }
        }
      ]
    },
    {
      "id": "lags-leads",
      "english": "Lags or Leads",
      "title": "領先與落後的讀值觀點",
      "parent": "vertical-card",
      "locator": "PHAK C 版 · 8-27",
      "printedPage": "8-27",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=27",
      "paragraphs": [
        "原文以從北向開始轉彎會落後、從南向開始轉彎會領先，說明典型北磁半球反應。應以基準線所讀航向與飛機實際航向比較，而不是用羅盤卡相對外殼的移動方向定義領先。",
        "此記憶方式不應直接移植到南磁半球，也不能替代具體儀表的限制與訓練。自編練習：用兩個箭頭分別畫出真實航向與顯示航向，就能避免把卡片轉向與讀值誤差混為一談。"
      ],
      "lessonBlocks": [
        {
          "title": "用兩支箭頭練習「實際」與「顯示」",
          "paragraphs": [
            "畫一支箭頭代表真實磁航向，另一支代表基準線讀值，再依轉彎方向觀察誰先變化。北磁半球從北向起轉時，顯示箭頭通常落後；從南向起轉時通常領先。這個定義比只看羅盤卡在殼內向哪邊移動更清楚。",
            "自編練習不指定固定誤差角：先從北向畫右轉初期可能出現反向讀值，再從南向畫相同右轉卻讀值變化較快。比較的是轉動進度，不是把數字較大永遠叫作領先，因為左轉及跨越 360°時數字關係會改變。"
          ]
        }
      ]
    },
    {
      "id": "eddy",
      "english": "Eddy Current Damping",
      "title": "渦電流阻尼",
      "parent": "vertical-card",
      "locator": "PHAK C 版 · 8-27",
      "printedPage": "8-27",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=27",
      "paragraphs": [
        "磁性組件振動時，相對導體的磁通量改變可產生渦電流，渦電流的磁場抵抗造成它的變化，從而降低振盪。能量以熱等形式耗散，使羅盤卡更容易穩定。",
        "阻尼主要控制動態擺動，不會把錯誤磁場變成正確磁北，也不是增加導航精度的萬能校正。自編例：卡片停得很快但旁邊有磁性物品時，仍可能穩定地指向錯誤方向。"
      ],
      "lessonBlocks": [
        {
          "title": "渦電流阻尼抵抗相對運動",
          "paragraphs": [
            "磁鐵與導電阻尼元件相對移動時，磁通量改變可在導體內感應渦電流；其磁作用抵抗造成它的相對運動，把擺動能量耗散，使卡片較快穩定。這與液體羅盤主要利用流體阻尼的機構不同。",
            "阻尼強調的是減少振盪，不會替你消除磁差、校準自差或修復錯誤磁場。若固定磁干擾仍在，羅盤可能很快而平穩地停在錯誤方向；「穩」與「準」應分開驗證。"
          ],
          "check": {
            "question": "指示很快停止擺動，是否已證明它指向正確磁航向？",
            "answer": "沒有。阻尼只改善動態擺動，還要核對來源、安裝與殘餘偏差。"
          }
        }
      ]
    },
    {
      "id": "oat",
      "english": "Outside Air Temperature (OAT) Gauge",
      "title": "外氣溫度量測",
      "parent": null,
      "locator": "PHAK C 版 · 8-28",
      "printedPage": "8-28",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=28",
      "paragraphs": [
        "原書介紹雙金屬片因熱膨脹差異帶動指針的 OAT 表，電子系統則可採其他溫度探頭。安裝位置需減少日照、引擎熱及機體影響，顯示單位也要分清攝氏與華氏。",
        "高速下探頭讀值可能包含撞擊升溫，總溫與靜溫的換算需依系統；不能把任何標作溫度的數字直接代入性能計算。自編例：計算密度高度或真空速時，先確認手冊要求的溫度種類與校正。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 8-39 · 雙金屬條把溫度變化轉成指針位移",
          "paragraphs": [
            "兩種金屬的熱膨脹程度不同，結合並繞成螺旋後，溫度改變使其產生可用位移，一端固定、另一端帶動指針。電子溫度探頭可採不同原理，不能只由面板刻度推定感測器的內部構造。",
            "感測位置需減少日照、引擎熱和機體影響，讀表時確認 °C 或 °F。自編換算：20°C＝20×9／5＋32＝68°F；把 68 當攝氏代入性能計算，會導致完全不同的密度評估。"
          ],
          "figure": {
            "label": "Figure 8-39 · Outside air temperature gauge",
            "page": "8-28",
            "url": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=28"
          }
        },
        {
          "title": "分清外氣靜溫、總溫與量測偏差",
          "paragraphs": [
            "高速下探頭可受到氣流減速升溫影響，TAT／總溫與 SAT／靜溫可能不同，修正依探頭回復特性與系統。計算 TAS、密度高度或性能前，先確認手冊要求哪種溫度，以及畫面是否已完成適用校正。",
            "單次 OAT 讀值不能保證整層大氣具有固定遞減率，也不能只用溫度判定機翼沒有結冰。它提供環境的一項量測，應與高度、壓力、可見水分及適用性能／結冰資訊一起解讀。"
          ]
        }
      ]
    },
    {
      "id": "summary",
      "english": "Chapter Summary",
      "title": "全章統整：量測、基準與交叉核對",
      "parent": null,
      "locator": "PHAK C 版 · 8-28",
      "printedPage": "8-28",
      "source": "https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page=28",
      "paragraphs": [
        "讀懂儀表需要同時知道量測來源、參考基準、顯示方式及故障反應。皮托靜壓提供大氣資料，慣性系統提供姿態與轉動資訊，磁系統提供方向參考，各自有不同限制與共同依賴。",
        "自編複習：解釋空速表為何在堵塞後可能隨爬升增加、兩個螢幕一致為何仍可能錯誤，以及航向不變時羅盤為何暫時轉動。每題先列成立條件，再用獨立資訊驗證，而不是只背結論。"
      ],
      "lessonBlocks": [
        {
          "title": "用來源圖統整全章，而不是逐表背答案",
          "paragraphs": [
            "從皮托總壓與靜壓追到 ASI、高度表、VSI 和 ADC；從供能與慣性感測追到姿態、航向與轉彎；再從當地磁場追到磁羅盤、磁通閘及同步系統。每一路都要問：量的是什麼、以誰為基準、哪些顯示共用來源、失效後還剩哪些獨立資訊。",
            "全章已提供 Figure 8-1～8-39 的讀圖指引。複習時把壓力堵塞、設定與溫度誤差、姿態和路徑、航向和航跡、磁差和自差分開，再組成完整飛行情境；機型限制與程序仍需回到 AFM／POH 及設備資料。"
          ],
          "table": {
            "caption": "全章交叉檢查練習",
            "headers": [
              "觀察",
              "先追查什麼",
              "不要直接推定"
            ],
            "rows": [
              [
                "兩個高度同時凍結",
                "共用靜壓／ADC",
                "飛機一定平飛"
              ],
              [
                "航向卡與電台指針不一致",
                "航向與導航來源、參考系",
                "兩者必須指同一方向"
              ],
              [
                "加速時磁羅盤偏北",
                "磁半球、航向與動態誤差",
                "飛機必然正在轉彎"
              ],
              [
                "AOA 顯示正常",
                "校準、構型及其他能量資訊",
                "已有足夠越障性能"
              ],
              [
                "螢幕仍亮但姿態可疑",
                "感測、電源、有效旗標",
                "亮著就可靠"
              ]
            ]
          },
          "check": {
            "question": "兩個讀值相同，什麼情況下仍不是獨立交叉檢查？",
            "answer": "它們共用同一感測器、管路、計算或供能時，單一故障可能同時影響兩者。要追查來源，而非只數顯示器。"
          }
        }
      ]
    }
  ],
  "confusions": [
    {
      "title": "空速與地速",
      "clarification": "兩者參考系不同。",
      "example": "順風增加地速，不表示指示空速一定增加。"
    },
    {
      "title": "螢幕數量與獨立性",
      "clarification": "相同來源可能造成共同錯誤。",
      "example": "兩個螢幕也可能使用同一 ADC。"
    },
    {
      "title": "總壓與動壓",
      "clarification": "皮托管取得總壓；低速近似下總壓減靜壓才是動壓。",
      "example": "無相對氣流時總壓可等於靜壓，動壓則接近零。"
    },
    {
      "title": "顯示一致與來源獨立",
      "clarification": "兩個畫面可能由同一 ADC 或 AHRS 提供資料。",
      "example": "共同靜壓堵塞可讓多個高度顯示一起出錯。"
    },
    {
      "title": "傾斜角、轉彎率與協調",
      "clarification": "機翼傾斜角、航向變化率及小球狀態是不同物理量。",
      "example": "協調轉彎中小球可居中，航向仍持續改變。"
    },
    {
      "title": "磁差與自差",
      "clarification": "磁差屬真北與當地磁北基準差，自差屬機上磁干擾。",
      "example": "更換磁性設備可能改變自差，不能靠套用航圖磁差修正。"
    },
    {
      "title": "領先／落後與觀察對象",
      "clarification": "需要指明是航向讀值還是羅盤卡運動，並說明磁半球。",
      "example": "北磁半球從北向起轉時，航向讀值通常落後真實轉動。"
    }
  ],
  "scenario": "自編案例：兩個顯示器的空速完全相同，學員便認為空速一定正確。但若兩者共用同一個大氣資料來源，來源錯誤可能同時出現在兩個畫面。",
  "question": "為何兩個螢幕顯示相同空速仍可能有問題？",
  "options": [
    "因為所有螢幕一定不準",
    "可能共用同一錯誤來源",
    "因為地速永遠等於空速"
  ],
  "answer": 1,
  "explanation": "獨立交叉檢查應考慮感測與計算來源，不能只比較顯示數量。",
  "verified": true,
  "reader": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=203",
  "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=203",
  "detailMode": "outline",
  "checked": "2026-09-18",
  "coverageNote": "全章 66 節均已加入深入講解，共 86 個單元，附 Figure 8-1～8-39 官方原圖頁面指引。包含皮托靜壓、電子與陀螺儀表、迎角、磁羅盤誤差及 OAT；算例與理解練習為本站編寫，並釐清原文觀察角度、基準與適用條件。原有情境檢核、筆記及章級完成紀錄保留。"
};
