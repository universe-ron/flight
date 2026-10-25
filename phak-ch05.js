export const chapter={
  "id": "phak25c-5",
  "number": 5,
  "title": "飛行空氣動力學",
  "english": "Aerodynamics of Flight",
  "section": "第 5 章；5-1～5-51，全章目錄逐節講解",
  "goal": "連結四力、阻力、穩定性、轉彎與失速。",
  "primer": "推力、阻力、升力與重量的方向需要相對飛行路徑和機體理解。在穩定直線平飛的簡化情境中，可討論升力與重量、推力與阻力的平衡；加速、爬升或轉彎時不能不加條件地照搬。",
  "terms": [
    "AOA · 迎角",
    "Load factor · 載荷因數",
    "Induced drag · 誘導阻力"
  ],
  "prompts": [
    "比較同傾斜角和同轉彎率兩種情境：真空速增加時，載荷、轉彎率或半徑如何改變？請列出假設。",
    "選出尾流、VA、臨界迎角與高速操縱各一項限制，說明為什麼不能把原書示例當成所有機型的通則。"
  ],
  "keyPoints": [
    "先辨認飛行狀態與力的方向，再使用受力平衡、升力與阻力關係。",
    "靜穩定、動穩定與可操縱性不同，荷蘭滾、螺旋俯衝與尾旋也不能互換。",
    "失速核心是迎角；載荷增加提高失速速度，VA 不是任意操縱的安全保證。",
    "螺旋槳四種效應須保留旋向及作用軸前提；高速則須區分空速、Mach 與局部流動。"
  ],
  "detailSections": [
    {
      "id": "forces",
      "english": "Forces Acting on the Aircraft",
      "title": "航空器受力：先選參考方向",
      "parent": null,
      "locator": "PHAK C 版 · 5-1",
      "printedPage": "5-1",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=1",
      "paragraphs": [
        "推力、阻力、升力與重量共同決定飛機的運動。升力垂直於相對氣流，阻力沿相對氣流向後，重量朝向地心，推力則依動力裝置方向作用。分析時先畫出飛行路徑和各力方向，再判斷其分量是否平衡。",
        "定常平直水平飛行常簡化為升力等於重量、推力等於阻力，但這不是所有飛行狀態的通則。爬升、轉彎或推力線傾斜時需重新分解；等速也不必然沒有加速度，因為速度方向仍可能改變。"
      ],
      "lessonBlocks": [
        {
          "title": "先指定受力物體與座標，再談平衡",
          "paragraphs": [
            "Thrust、drag、lift、weight 是作用在航空器上的四種主要力的名稱。重量經 CG 指向地心；升力垂直相對來流，阻力平行相對來流並反對運動；推力方向由推進系統安裝與狀態決定，不一定與航跡平行。",
            "定常直線飛行表示速度大小和方向不變，因此合力為零；定常轉彎雖速度大小固定，方向改變，仍需要向心加速度。原文把直線平衡直接歸因於牛頓第三定律不精確：合力與加速度的關係應用第一、第二定律，第三定律的成對力作用於不同物體。"
          ]
        },
        {
          "title": "Figure 5-1 · 四力相抵，不是四個數值都相等",
          "paragraphs": [
            "這張圖採用簡化的水平飛行模型：推力近似水平，升力近似垂直，因此 T = D、L = W。它沒有要求 T = L，也不能從箭頭畫得差不多長就量出實際力的比值。",
            "更一般的水平飛行可能有向上的推力分量，則總向上力才等於重量，而不只是機翼升力。除了合力為零，若姿態也不變，還需檢查俯仰、滾轉與偏航力矩是否平衡。"
          ],
          "figure": {
            "label": "Figure 5-1 · Relationship of forces",
            "page": "5-2",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=2"
          }
        },
        {
          "title": "Figure 5-2 · 穩定爬升為何不一定 L > W？",
          "paragraphs": [
            "令航跡與水平夾角為 γ，並假設推力平行航跡、沒有加速度。在沿航跡方向，T − D − W sin γ = 0；垂直航跡方向，L − W cos γ = 0。因此穩定爬升時 T = D + W sin γ，而 L = W cos γ，略小於 W。",
            "自編例：W = 10,000 N，γ = 10°，D = 1,000 N，則 L 約 9,848 N，T 約 2,736 N。飛機仍能穩定爬升，因為應比較各方向分量，而不是只看升力是否大於重量。若推力相對航跡有夾角，還需加入其垂直分量，不能照抄這個簡化式。",
            "無動力穩定滑翔時，沿下降航跡的重量分量平衡阻力；這不是引擎產生了推力，也不是重力變成真正的氣動阻力。分量名稱隨座標而變，力的來源不變。"
          ],
          "figure": {
            "label": "Figure 5-2 · Force vectors during a stabilized climb",
            "page": "5-2",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=2"
          },
          "check": {
            "question": "穩定爬升的升力一定大於重量嗎？",
            "answer": "不一定。按航跡分解，在推力平行航跡的簡化模型中，L = W cos γ；沿航跡另有推力平衡阻力與重量分量。"
          }
        }
      ]
    },
    {
      "id": "thrust",
      "english": "Thrust",
      "title": "推力、速度與功率",
      "parent": "forces",
      "locator": "PHAK C 版 · 5-2",
      "printedPage": "5-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=2",
      "paragraphs": [
        "推力是動力系統對飛機提供的力，功率則是能量傳遞速率，兩者單位與意義不同。在推力沿速度方向的簡化模型中，推進功率等於推力乘速度；螺旋槳把引擎軸功率轉成推進功率時還有其效率。",
        "增加推力後飛機可能加速、爬升或兩者兼有，結果取決於姿態、阻力及操縱配合。自編例：要在增加功率後仍保持高度，不能只改油門而假設其他狀態固定，必須觀察速度和升力的變化。"
      ],
      "lessonBlocks": [
        {
          "title": "加動力後：先有暫態，再看新的平衡",
          "paragraphs": [
            "推力與其他沿航跡力的合力決定加速度。簡化水平飛行中，T > D 時加速；T = D 時速度可以維持，不是速度降到零。油門位置本身不等於某個固定推力，實際推力還受空速、密度、螺旋槳或引擎特性影響。",
            "原文描述減速時阻力隨之下降，是針對部分工況的概括。若為維持水平飛行而增加迎角，低速時誘導阻力反而可能增加，總阻力曲線不是全程向同一方向變化；不能假定收油門後一定自然到達可維持水平的新速度。"
          ]
        },
        {
          "title": "Figure 5-3 · 相同重量，低速需要較大 C_L",
          "paragraphs": [
            "在固定密度、重量、構型的穩定水平簡化模型中，速度下降時需要較高 C_L，通常透過增加迎角達成。高速則需要較小 C_L。圖上的 3°、6°、12° 是示例，不能當成各機型的巡航或進場設定。",
            "增加動力而仍要維持同一高度，需要讓姿態與迎角隨性能變化適當協調；反過來，只抬頭也不能保證空速與高度都維持。飛行員應交叉檢查實際性能，而不是背一句「油門只管高度」或「操縱桿只管速度」。"
          ],
          "figure": {
            "label": "Figure 5-3 · Angle of attack at various speeds",
            "page": "5-3",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=3"
          }
        },
        {
          "title": "Figure 5-4 · 可改變推力方向的航空器",
          "paragraphs": [
            "圖中的推力向量與傾轉旋翼例子說明，推力不是永遠沿固定機身方向。改變推力方向會改變水平與垂直分量，也改變所需翼面氣動力與力矩平衡。",
            "這是特殊設計的能力，不能套用到一般固定式螺旋槳飛機。即使推力有向上分量，航空器仍受推進系統限制、構型與控制需求約束；照片只用來辨識受力模型何時需要修改。"
          ],
          "figure": {
            "label": "Figure 5-4 · Changing the direction of thrust",
            "page": "5-4",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=4"
          }
        }
      ]
    },
    {
      "id": "lift",
      "english": "Lift",
      "title": "升力方程式與臨界迎角",
      "parent": "forces",
      "locator": "PHAK C 版 · 5-3",
      "printedPage": "5-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=3",
      "paragraphs": [
        "升力可寫成 L = ½ρV²SCL，其中 ρ 是空氣密度、V 是相對空氣的速度、S 是參考翼面積、CL 是升力係數。CL 隨迎角、構型及流動條件改變；因此速度平方關係只有在其他變數固定時才能直接比較。",
        "在未失速範圍內，增加迎角通常提高 CL，直到最大值附近；再增加迎角，分離加劇而升力係數下降。維持相同重量的水平飛行時，速度較低通常需要較大的 CL；不能因公式有 V² 就說飛得越快，實際升力一定越大。"
      ],
      "points": [
        "自編比較：密度、面積與 CL 固定，速度加倍，公式中的升力變成四倍。",
        "若維持同一重量的定常水平飛行，速度增加時需相應降低所需 CL，而非讓升力任意增加。",
        "原圖中的角度與曲線屬示例，不是所有翼型的臨界迎角或最佳性能角度。"
      ],
      "lessonBlocks": [
        {
          "title": "L = ½ρV²S C_L：每個符號的條件",
          "paragraphs": [
            "ρ 是空氣密度，V 是相對空氣的真實速度，S 是定義所用的參考翼面積，C_L 是無因次升力係數。C_L 受到迎角、翼型、構型及流況等影響，不是只由機翼名稱決定的固定常數。",
            "在其他因素保持不變時，速度加倍，升力變為四倍；但若要保持同一重量的水平飛行，升力不能一直變成四倍，就需要降低 C_L。自編例：ρ = 1.2 kg/m³、V = 40 m/s、S = 16 m²、C_L = 0.5，則 L = 7,680 N；在相同條件下 V = 80 m/s 時 L = 30,720 N。",
            "公式中的速度不能直接用未修正的地速替代。風會影響地速，而機翼主要感受相對空氣的運動；高空維持相近指示空速時，真空速通常較高，不能由「密度下降」單獨推論當下升力必然不足。"
          ]
        },
        {
          "title": "Figure 5-5 · 三條曲線用三組刻度",
          "paragraphs": [
            "紅線 C_L 先隨迎角增加，到示意的最大值後下降；橙線 C_D 描述阻力係數；綠線 L/D 描述升阻比。先確認各線對應的縱軸再比較，不能用圖上紅線與橙線相交，就說兩係數或升力阻力相等。",
            "本圖示意 C_Lmax 約在 20°，而 L/Dmax 約在 6°，兩者是不同目標。最大升力係數並不代表最有效率，最大升阻比也不是最大升力。這些角度只屬本圖，不是所有航空器的臨界迎角。",
            "失速是超過適用臨界迎角後的流動分離與升力能力下降，不是升力瞬間變成零，也不是引擎停止。操縱桿通常透過改變力矩與姿態影響迎角，並非在每個瞬間都能直接指定某個 C_L。"
          ],
          "figure": {
            "label": "Figure 5-5 · Lift, drag and lift/drag coefficients",
            "page": "5-4",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=4"
          },
          "check": {
            "question": "C_Lmax 和 L/Dmax 是同一點嗎？",
            "answer": "不是。前者是最大升力係數，後者是每單位阻力得到最多升力的效率點。"
          }
        },
        {
          "title": "密度、重量與面積：比例成立前先檢查假設",
          "paragraphs": [
            "若密度降低而要維持相同升力，在 S 與 C_L 固定的模型中，速度需按密度比的平方根反向增加。原文說 18,000 ft 密度約為海平面一半過於粗略：標準大氣在此處是氣壓約一半，密度並非同樣一半。不要把壓力比直接當成密度比。",
            "S 加倍時升力加倍也需固定其餘量；真實把機翼做大可能同時改變重量、展弦比、結構與 C_L。重量增加時，在同一 C_L、密度與面積下需要較高速度；不是飛機因載重就能自動產生更多升力。"
          ]
        }
      ]
    },
    {
      "id": "lift-drag",
      "english": "Lift/Drag Ratio",
      "title": "升阻比：效率與最大升力不同",
      "parent": "lift",
      "locator": "PHAK C 版 · 5-5",
      "printedPage": "5-5",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=5",
      "paragraphs": [
        "升阻比 L/D 表示每單位阻力對應多少升力；使用相同動壓和參考面積定義係數時，也等於 CL/CD。最大升阻比出現在特定狀態，通常不是最大升力係數或臨界迎角，因為接近失速時阻力也會大幅增加。",
        "在定常、無動力且忽略其他推力的滑翔模型中，較高升阻比對應較平的空中滑翔路徑。最佳滑翔距離與最小下降率是不同目標；地面可達距離還受風影響，實際操作速度與構型應依機型資料。"
      ],
      "lessonBlocks": [
        {
          "title": "升阻比衡量效率，不直接等於任何機型的最佳航程",
          "paragraphs": [
            "L/D 是相同狀態下的升力除以阻力。當兩個係數使用相同 q = ½ρV² 與參考面積時，L/D = C_L/C_D。自編例：C_L = 0.6、C_D = 0.04，則 L/D = 15，不能把這理解成爬升梯度是 15。",
            "對無風、無推力的穩定滑翔簡化模型，L/D 與水平距離對高度損失的比值相同；實際對地距離仍受風與構型影響。有動力飛機的航程與續航還涉及耗油率及推進效率，不能把所有最佳航程、最佳續航與 L/Dmax 全部當成同一速度。"
          ]
        },
        {
          "title": "Figure 5-6 · 最小阻力與最小功率不是同一點",
          "paragraphs": [
            "圖的橫軸是空速，綠線表示寄生阻力、紅線表示誘導阻力，藍線為總和。低速要維持升力會提高誘導阻力，高速則寄生阻力占比上升，因此總阻力有低谷。",
            "在固定重量與構型的穩定水平近似下，L 接近 W，最大 L/D 對應最小總阻力。所需推進功率是 D × V，所以最小功率通常出現在比最小阻力更低的速度；圖上最低阻力點不是所有性能目標的答案。"
          ],
          "figure": {
            "label": "Figure 5-6 · Drag versus speed",
            "page": "5-5",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=5"
          }
        }
      ]
    },
    {
      "id": "drag",
      "english": "Drag",
      "title": "阻力與速度曲線",
      "parent": "forces",
      "locator": "PHAK C 版 · 5-6",
      "printedPage": "5-6",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=6",
      "paragraphs": [
        "阻力沿相對氣流方向反向作用，可從寄生阻力與誘導阻力建立低速飛行的入門模型。對一定重量及構型的定常水平飛行，低速端通常誘導阻力較大，高速端寄生阻力較大，總阻力形成有最低點的曲線。",
        "讀曲線時要保留重量、密度、構型與平衡條件，不能把圖形當成任意加速過程的描述。高速壓縮性、起落架或襟翼改變都會影響阻力；最低阻力速度也不是最低所需功率速度，因為功率還乘上速度。"
      ],
      "lessonBlocks": [
        {
          "title": "阻力分類是分析工具，不是各力互不影響",
          "paragraphs": [
            "阻力按相對來流方向定義，不能一律當成地面水平向後。入門時分寄生阻力與誘導阻力，有助理解高速與低速需求；更完整模型還會考慮可壓縮性、波阻與構型等因素。",
            "增加襟翼或改變迎角會同時影響升力與多種阻力分量。所謂 parasite 並非完全沒有設計用途，例如某些構型刻意增加阻力以控制下降，但它不是因有限翼展產生升力而定義的誘導阻力。"
          ]
        }
      ]
    },
    {
      "id": "parasite",
      "english": "Parasite Drag",
      "title": "寄生阻力的三個來源",
      "parent": "drag",
      "locator": "PHAK C 版 · 5-6",
      "printedPage": "5-6",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=6",
      "paragraphs": [
        "寄生阻力指不以產生升力為必要前提的阻力，原書分為形狀阻力、干擾阻力與表面摩擦阻力。物體外形影響分離與尾流，部件接合處的氣流互相干擾，黏性則造成表面剪力。",
        "在密度、外形和阻力係數近似固定時，這類阻力通常隨速度平方增加。流線整流罩、適當接合外形及維持表面狀態各自處理不同來源；不能只靠把表面磨亮就消除所有寄生阻力。"
      ],
      "points": [
        "Form drag／形狀阻力：外形和流動分離改變前後壓力分布。",
        "Interference drag／干擾阻力：例如翼身接合的流場互相影響，總效果不只是單獨部件相加。",
        "Skin friction drag／表面摩擦阻力：與黏性邊界層有關，光滑表面也不是零摩擦。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 5-7 · 形狀阻力：看分離與尾流",
          "paragraphs": [
            "圖依序比較平板、球體與加入整流外形的物體。鈍體後方較大的分離區會形成不利壓力分布，前後壓力無法完全抵消；流線外形可以使分離延後並減少這部分阻力。",
            "外形變長或濕潤面積增加也可能增加摩擦，因此不是任何位置任意加大整流罩都一定降低總阻力。圖示用來比較流動機制，不是不同實際飛機間直接的阻力數值排名。"
          ],
          "figure": {
            "label": "Figure 5-7 · Form drag",
            "page": "5-6",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=6"
          }
        },
        {
          "title": "Figure 5-8 · 干擾阻力：組合不等於各自相加",
          "paragraphs": [
            "機翼與機身接合處會讓流場、壓力梯度及邊界層相互作用，因此兩個零件組合後的阻力可能大於分別量測再相加。Fairing 透過平順過渡改善這種干擾。",
            "圖中翼根指出應觀察的區域，不表示所有直角接合都有相同阻力，也不代表磨平接縫就可以任意改變核准結構。外部掛載與附近表面也會造成類似的流場耦合。"
          ],
          "figure": {
            "label": "Figure 5-8 · Wing-root interference drag",
            "page": "5-6",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=6"
          }
        },
        {
          "title": "表面摩擦：邊界層不固定是一張紙厚",
          "paragraphs": [
            "相對翼面，貼壁流速接近零，向外逐漸接近主流速度，速度梯度產生黏性剪力。邊界層厚度隨位置、速度、尺度與流態改變，原書用紙片厚度的比喻不能視為所有機翼的固定數值。",
            "層流、紊流與分離是不同概念：紊流邊界層摩擦通常較大，但在某些壓力梯度下更能抵抗分離。表面污染會改變流動，清潔與表面維護應依製造商要求，不能把原文打蠟的描述當成每種航空器的通用程序。"
          ],
          "table": {
            "caption": "三種寄生阻力辨識",
            "headers": [
              "類別",
              "主要觀察",
              "典型例子"
            ],
            "rows": [
              [
                "Form drag",
                "物體外形與壓力分離",
                "鈍體後方尾流。"
              ],
              [
                "Interference drag",
                "不同部件流場相互作用",
                "翼根與機身接合。"
              ],
              [
                "Skin friction drag",
                "表面的黏性剪應力",
                "翼面邊界層。"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "induced",
      "english": "Induced Drag",
      "title": "誘導阻力與有限翼展",
      "parent": "drag",
      "locator": "PHAK C 版 · 5-7",
      "printedPage": "5-7",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=7",
      "paragraphs": [
        "有限翼展機翼產生升力時會形成三維流場及下洗，使局部氣動作用相對自由流具有向後分量，這與誘導阻力相關。可從力的方向或尾流能量理解同一現象，不要把兩種描述重複算成兩份阻力。",
        "在重量、密度與構型固定的定常水平飛行模型中，較低速度需要較大 CL，誘導阻力通常隨之增加。這個「低速較大」結論依賴所需升力固定；若改成 CL 固定的比較，不能直接沿用反比速度平方的結論。"
      ],
      "lessonBlocks": [
        {
          "title": "誘導阻力來自有限翼展的升力流場",
          "paragraphs": [
            "有限機翼產生升力時，展向載荷分布與尾流相連，下洗改變局部來流與氣動力方向。把總力相對遠方自由流分解，就有升力相關的向後分量。不要把下洗造成的傾斜分量與形成尾流所需能量算成兩份獨立阻力再相加。",
            "在入門近似中 C_Di = C_L²／(πeAR)，AR 為展弦比，e 為展向效率因子。固定重量、密度、構型並維持水平飛行時，誘導阻力近似與 V² 成反比；若改成固定 C_L 比較，就不能再沿用同一速度反比結論。"
          ]
        },
        {
          "title": "Figure 5-9 · 看得見的是示蹤物，不是尾流存在的條件",
          "paragraphs": [
            "照片中的物質讓渦流捲動可視化。實際尾流常看不見，不能以有無煙霧或凝結線判定有沒有渦流。從機尾向前看，兩側主要尾渦反向旋轉；若觀察方向換到機頭，左右旋轉描述也須跟著調整。",
            "原文將誘導阻力與效率損失連結是直覺說明，但不是所有翼型升力都必然有相同三維阻力。例如理想二維無限翼展模型沒有有限翼展誘導阻力；實際機翼則必須考慮三維效應。"
          ],
          "figure": {
            "label": "Figure 5-9 · Visible wingtip vortex",
            "page": "5-7",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=7"
          }
        },
        {
          "title": "Figure 5-10、5-11 · 近地面改變尾流與下洗",
          "paragraphs": [
            "Figure 5-10 比較離地較遠和接近地面的渦流示意。這裡的 high altitude 是相對地面的高度，不是密度高度，也不是只要飛到某個固定海拔就有特定渦流大小。"
          ],
          "figure": {
            "label": "Figure 5-10 · Vortices away from and near the ground",
            "page": "5-7",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=7"
          }
        },
        {
          "title": "Figure 5-11 · 讀出合力方向的改變",
          "paragraphs": [
            "較強下洗使局部氣動作用相對自由流有較大的向後分量；近地面時下洗與誘導阻力可減少。圖中的角度及箭頭只作比較，不能當成某架飛機的力或角度限制。",
            "翼尖渦、下洗與誘導阻力屬於同一整體三維流場。原文將此下洗與產生升力的下洗說成毫無關係，容易讓人誤認有兩套互不相關的空氣運動，應避免這種讀法。"
          ],
          "figure": {
            "label": "Figure 5-11 · Downwash and induced drag near the ground",
            "page": "5-8",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=8"
          }
        }
      ],
      "references": [
        {
          "title": "NASA · Induced Drag Coefficient",
          "url": "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/induced-drag-coefficient/",
          "checked": "2026-09-13"
        }
      ]
    },
    {
      "id": "weight",
      "english": "Weight",
      "title": "重量與升力需求",
      "parent": "forces",
      "locator": "PHAK C 版 · 5-8",
      "printedPage": "5-8",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=8",
      "paragraphs": [
        "重量是重力對航空器及其載荷的作用，方向朝向地心，作用線通過重心。它與質量相關，但不能和座椅支承力或飛行中所感受的 G 負荷混同；轉彎時人覺得更重，不表示飛機的質量突然增加。",
        "在其他條件相同的水平飛行中，重量增加使所需升力增加，通常需要更大的 CL 或速度，也影響阻力及性能。燃油消耗會改變重量，還可能改變重心，因此飛行前後不能只用同一個裝載數字概括。"
      ],
      "lessonBlocks": [
        {
          "title": "重量與重心：質量分布不等於氣動力分布",
          "paragraphs": [
            "Weight 是重力，可將其等效作用位置放在 CG；CP 則與氣動壓力分布及力矩有關。原書的 CG 在 CP 前或後造成俯仰，是局部簡化，完整平衡還須考慮尾翼、推力線與其他力矩。",
            "不能用「CG 必須永遠在 CP 前方」代替該機核准的重量平衡包線，也不能由某個單一翼型 CP 位置判定整機穩定。實際限制取決於設計、構型與重量，後續穩定性段落會進一步展開。",
            "L > W 表示在簡化垂直模型中有向上加速度，不是當下已經在爬升；正在下降的飛機可以先減少下降率。L = W 也不直接代表高度一定不變，還要看既有速度與其他分量。"
          ]
        }
      ]
    },
    {
      "id": "vortices",
      "english": "Wingtip Vortices",
      "title": "翼尖渦流與尾流風險",
      "parent": null,
      "locator": "PHAK C 版 · 5-8",
      "printedPage": "5-8",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=8",
      "paragraphs": [
        "產生升力的有限機翼在尾流中留下旋轉流動；翼尖附近的壓力差和展向流動是理解其形成的入口。尾流中的滾轉作用可能超過後機的操縱能力，不能只把渦流當成照片中可見的細線。",
        "尾流是否可見取決於水氣與凝結等條件，看不到並不代表不存在。它的強度、位置及消散受產生者、風和大氣狀態影響；本節建立物理概念，實際避讓須結合下一節及現行操作指引。"
      ],
      "lessonBlocks": [
        {
          "title": "尾流的危險是操縱能力可能不足",
          "paragraphs": [
            "尾流不是只讓座艙晃動：旋轉氣流能對後機造成滾轉力矩，且可能超過其可用操縱能力。遭遇後果取決於產生機與後機的尺寸、翼展、相對位置及飛行狀態。",
            "小型飛機也會產生尾流；翼尖小翼不會把尾流消除。辨識風險時要想像前機走過的空間及尾流後續移動，而不是只注意前機此刻所在位置。"
          ]
        }
      ]
    },
    {
      "id": "formation",
      "english": "Formation of Vortices",
      "title": "渦流形成、下沉與漂移",
      "parent": "vortices",
      "locator": "PHAK C 版 · 5-8",
      "printedPage": "5-8",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=8",
      "paragraphs": [
        "機翼上下表面壓力差促成翼尖繞流，並與尾緣流動形成尾隨渦系。原書用重量較大、速度較低時需要較大升力係數，解釋強渦流常見條件；clean 指收起高升力裝置等構型，並非機身洗得乾淨。",
        "在常見情境中，渦流會下沉並隨風漂移，接近地面後還可能向兩側移動。小側風可能讓上風側渦流停留在跑道附近，也可能把另一側推向鄰近跑道，因此不能把「有風」一律當作尾流已清除。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 5-12 · Heavy、clean、slow 的比較條件",
          "paragraphs": [
            "固定同一架飛機的大致構型與翼展，重量增加或速度降低而仍須提供所需升力時，尾渦通常更強。Clean 指收起襟翼等增阻裝置的氣動構型，不是機身洗得乾淨。",
            "展向流動與尾流捲起形成兩側主要反向旋轉渦系；不是兩個只停在翼尖的旋風。把不同機型比較時，翼展、翼形及構型也要考慮，不能只按重量排出所有遭遇風險。"
          ],
          "figure": {
            "label": "Figure 5-12 · Wingtip vortices",
            "page": "5-9",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=9"
          }
        }
      ]
    },
    {
      "id": "wake-avoidance",
      "english": "Avoiding Wake Turbulence",
      "title": "尾流避讓：判斷路徑與風",
      "parent": "vortices",
      "locator": "PHAK C 版 · 5-9",
      "printedPage": "5-9",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=9",
      "paragraphs": [
        "避讓先辨認前機的飛行路徑、離地或接地位置，再考慮尾流的下沉與風漂移。典型在較大飛機後方落地的指引包括保持在其進場路徑上方並在其接地點之後接地，但仍須同時滿足穩定進場、剩餘跑道及其他限制。",
        "若無法安全安排路徑或不確定尾流位置，應與 ATC 協調額外間隔或採適當替代方案，不能為追求提早離地而低於機型要求速度強拉起飛。原書的時間、距離例子不是所有航空器及跑道組合的通用保證；直升機也會產生強尾流。"
      ],
      "references": [
        {
          "title": "FAA AIM 7-4：Wake Turbulence",
          "url": "https://www.faa.gov/Air_traffic/publications/atpubs/aim_html/chap7_section_4.html",
          "checked": "2026-09-10"
        },
        {
          "title": "FAA AIM 7-4 · Wake Turbulence",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_4.html",
          "checked": "2026-09-13"
        }
      ],
      "currentNote": "查閱 2026-09-13：尾流行為示例不等於現行間隔規定。「三分鐘」與「1,000 ft」不能當成所有情況的安全保證；依適用 FAA AIM、當地程序、ATC 安排及機型性能處理。",
      "lessonBlocks": [
        {
          "title": "Figure 5-13 · 下沉範圍不是保證安全的邊界",
          "paragraphs": [
            "圖示大型航空器尾渦可隨時間下沉，因此前機後下方是重要風險區。圖中的每分鐘數百呎、名目 500～1,000 ft 是行為概述，不是超出 1,000 ft 就永遠安全的規則。",
            "尾流會隨風移動，也可能受風切、熱力及地形影響而抬升或傾斜。不能只用前機目前高度減固定數字推算「安全層」，仍要辨認整段可能交會的航跡。"
          ],
          "figure": {
            "label": "Figure 5-13 · Sinking wake behind an aircraft",
            "page": "5-9",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=9"
          }
        },
        {
          "title": "Figure 5-14 · 前機的抬輪與接地點，是觀察線索",
          "paragraphs": [
            "這張圖用抬輪與接地標示強尾流軌跡的起止概念；接地不會讓先前產生的尾流立即消失。跟隨落地與跟隨起飛的情境不同，不能把同一個接地點策略套到所有排列。",
            "「在前機抬輪點之前離地」必須以自身正常起飛性能可做到為前提，不能為了避尾流而在不足速度時強拉。跟隨落地的飛機時，也不能為了落在其接地點之後而接受不穩定進場或不足的剩餘跑道。若條件無法兼顧，應要求更大間隔、延後或重飛。"
          ],
          "figure": {
            "label": "Figure 5-14 · Rotation, touchdown and wake trail",
            "page": "5-10",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=10"
          }
        },
        {
          "title": "Figure 5-15 · 小側風為何也可能不利？",
          "paragraphs": [
            "上半圖無風時，近地面尾渦向兩側移動；下半圖的風可能抵消上風側尾渦的橫向移動，同時加快下風側移動。因此看見有一點側風，不能直接推定跑道上的尾流已被吹乾淨。",
            "圖中的 3 kt + 3 kt = 6 kt、3 kt − 3 kt = 0 是向量概念示例，不是對每場機場的即時預報。鄰近跑道也可能受到漂移尾流影響；原文約等候三分鐘不是所有機型、間隔制度與天氣下的消散保證。"
          ],
          "figure": {
            "label": "Figure 5-15 · Wake drift with and without crosswind",
            "page": "5-10",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=10"
          }
        },
        {
          "title": "把原文提示與現行間隔程序分開",
          "paragraphs": [
            "尾流間隔需按所在地規定、機型分類、跑道配置、操作情境與管制程序判斷，不能用本站的一個通用分鐘數取代。收到許可或沒收到尾流警告，也不代表沒有風險；有疑慮應向 ATC 提出並取得適當安排。",
            "直升機懸停的下洗與地面外流同樣危險。FAA AIM 提供小型航空器避開懸停或慢速懸停滑行直升機三個旋翼直徑內的指引；這不是界線外必定無風險，向前飛行的直升機也會留下強尾流。"
          ],
          "check": {
            "question": "前機離開三分鐘，就可以一律判定尾流消失嗎？",
            "answer": "不能。需依適用間隔與現場風、機型、航跡等條件判斷；通用等候時間不是消散保證。"
          }
        }
      ]
    },
    {
      "id": "ground-effect",
      "english": "Ground Effect",
      "title": "地面效應與離地後的性能",
      "parent": null,
      "locator": "PHAK C 版 · 5-11",
      "printedPage": "5-11",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=11",
      "paragraphs": [
        "靠近地面或水面時，表面限制機翼周圍的三維流動，改變下洗及渦流，通常降低相同升力所需的誘導阻力。這與翼高相對翼展有關，不能只當成一團被壓住的空氣墊，也不能用固定幾呎概括所有飛機。",
        "地面效應可能讓飛機在尚不足以正常爬升的速度先離地，離開後阻力需求增加而下沉；落地時多餘速度則可能造成長距離飄浮。自編例：跑道上方能短暫飛起並不能證明能越障，起飛與構型變更仍依機型程序。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 5-16 · 地面效應是流場改變，不只是氣墊",
          "paragraphs": [
            "靠近地面或水面時，表面邊界改變機翼周圍三維流動、下洗與尾流，在相同升力需求下通常減少誘導阻力。原書的氣墊是感受上的比喻，不能理解成翼下封存一團完全不能流走的空氣。",
            "影響的重要尺度是翼面離地高度相對翼展，不是對所有機型都相同的幾呎。其他表面與力矩也可能受影響，所以不能把整架飛機的反應完全簡化為只多出一個向上力。"
          ],
          "figure": {
            "label": "Figure 5-16 · Ground effect changes airflow",
            "page": "5-11",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=11"
          }
        },
        {
          "title": "Figure 5-17 · 分別固定迎角與固定升力來比較",
          "paragraphs": [
            "右圖比較 C_L 與迎角：在示意範圍中，同一幾何迎角的近地面 C_L 較高；若固定同一 C_L，近地面所需幾何迎角較低。左圖比較同速度的所需推力，近地面因誘導阻力減少而降低，低速部分尤其明顯。",
            "這些敘述必須指出保持不變的量。原書列出翼高等於翼展、四分之一翼展、十分之一翼展的降阻百分比，是特定模型的示例，不能當成任何飛機滑跑距離按相同比例縮短。所需推力曲線也不等於可用推力曲線。"
          ],
          "figure": {
            "label": "Figure 5-17 · Ground effect changes drag and lift",
            "page": "5-11",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=11"
          }
        },
        {
          "title": "離地不等於能離開地面效應持續爬升",
          "paragraphs": [
            "在高重量、高密度高度或速度不足的情況，飛機可能在較低阻力的近地面區域離地，卻沒有足夠性能繼續爬升。離開地面效應時，維持所需升力與克服阻力的要求改變，不能用「已浮起來」當成性能已足夠的證明。",
            "起飛速度、加速方式及收襟翼／起落架時機依 AFM／POH 與機型程序。原文的正爬升與安全高度提醒不能當成所有飛機通用的收輪順序；同樣不要為避前機尾流而過早離地，這兩種風險必須一起考慮。",
            "降落時阻力降低可能增加飄浮，帶著多餘速度進入拉平更容易消耗跑道。應依訓練與適用程序維持穩定進場，不能把地面效應當成必然能挽救錯誤速度的工具。"
          ],
          "check": {
            "question": "飛機已在跑道上方浮起來，就代表能安全爬升嗎？",
            "answer": "不代表。地面效應內可離地，不等於離開後仍有足夠速度、升力與剩餘動力。"
          }
        },
        {
          "title": "高度表／空速位置誤差與俯仰反應",
          "paragraphs": [
            "近地面流場可能改變靜壓孔附近的壓力，進而影響儀表位置誤差；程度與方向依安裝及機型而異。不能用書中「多數情況」自己替高度表或空速表加固定修正。",
            "俯仰力矩與穩定性的變化同樣取決於翼、尾翼及地面間的相互作用。不要把原書列出的鼻上反應視為每一架飛機離開地面效應的必然特性；使用該機資料辨認正常反應。"
          ]
        }
      ],
      "references": [
        {
          "title": "FAA Airplane Flying Handbook Chapter 6 · Takeoffs",
          "url": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/07_afh_ch6.pdf",
          "checked": "2026-09-13"
        }
      ]
    },
    {
      "id": "axes",
      "english": "Axes of an Aircraft",
      "title": "三軸與滾轉、俯仰、偏航",
      "parent": null,
      "locator": "PHAK C 版 · 5-12",
      "printedPage": "5-12",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=12",
      "paragraphs": [
        "航空器的縱軸、橫軸與垂直軸可視為通過重心的三條參考線。縱軸由機頭到機尾，繞它是滾轉；橫軸沿左右方向，繞它是俯仰；繞垂直軸則是偏航。軸名與運動名不是同一組字的直接對應。",
        "操縱面主要對應某一軸，但實際運動可以耦合。例如副翼產生滾轉時也可能出現偏航，方向舵造成側滑時可能引起滾轉。先識別主要力矩方向，再看耦合效應，才能理解後面的穩定性和螺旋槳章節。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 5-18 · 三軸隨機體轉動，名稱不要反過來",
          "paragraphs": [
            "三軸在機體座標中互相垂直並通過 CG。Longitudinal axis 從機頭到機尾，繞它是 roll；lateral axis 橫向穿過機體，繞它是 pitch；vertical axis 在機體中上下，繞它是 yaw。",
            "圖示沿翼尖方向畫橫軸是便於辨識，不表示每架飛機的軸都實際連著兩個翼尖。機體垂直軸在傾斜飛行時也不一定對準地心。三種轉動可以耦合，偏航不等同航跡已完成轉彎。"
          ],
          "table": {
            "caption": "軸與轉動的對照",
            "headers": [
              "軸",
              "轉動",
              "典型主要控制面"
            ],
            "rows": [
              [
                "Longitudinal 縱軸",
                "Roll 滾轉",
                "Ailerons"
              ],
              [
                "Lateral 橫軸",
                "Pitch 俯仰",
                "Elevator／stabilator"
              ],
              [
                "Vertical 垂直軸",
                "Yaw 偏航",
                "Rudder"
              ]
            ]
          },
          "figure": {
            "label": "Figure 5-18 · Axes of an airplane",
            "page": "5-12",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=12"
          },
          "check": {
            "question": "機頭上下動是繞縱軸嗎？",
            "answer": "不是。俯仰繞橫軸；縱軸是滾轉的旋轉軸。"
          }
        },
        {
          "title": "Figure 5-19 · 控制功能相同，機構可以不同",
          "paragraphs": [
            "Weight-shift control aircraft 的飛行員透過操縱架改變翼與懸吊重量的相對位置，進而改變受力及力矩。它不像典型固定翼以副翼與升降舵分別實現滾轉、俯仰，不能照搬同一操縱動作。",
            "原書用移動 CG 概括機制，閱讀時還要觀察柔性翼、懸吊點與載荷之間的相對運動。圖中的外形只用來辨認結構與控制方式，不是實際操作教學。"
          ],
          "figure": {
            "label": "Figure 5-19 · Weight-shift control aircraft",
            "page": "5-13",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=13"
          }
        },
        {
          "title": "Figure 5-20 · Powered parachute 的翼與控制線",
          "paragraphs": [
            "動力傘的翼由充氣的翼胞保持形狀，前緣開口讓氣流進入；翼胞之間的通道協助壓力分布。翼面有翼型，不是單純把圓形降落傘加上引擎。",
            "控制線改變翼面形狀，動力改變整體能量與飛行狀態。原文描述的座位、接點與機架為典型例子，不代表所有型號配置完全一致；仍須使用該類航空器的訓練與手冊。"
          ],
          "figure": {
            "label": "Figure 5-20 · Powered parachute",
            "page": "5-13",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=13"
          }
        }
      ]
    },
    {
      "id": "moment",
      "english": "Moment and Moment Arm",
      "title": "力矩與垂直力臂",
      "parent": null,
      "locator": "PHAK C 版 · 5-13",
      "printedPage": "5-13",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=13",
      "paragraphs": [
        "力矩描述力使物體繞某點或某軸轉動的作用，大小可寫成力乘垂直力臂。力臂是參考點到力作用線的垂直距離，而不是任意量一段零件長度；力相同但作用位置不同，造成的俯仰或偏航作用可能不同。",
        "自編例：相同重量的行李放得離重心更遠，會有更大的重量力矩。重量平衡表使用指定基準面和正負號，不能直接把以基準面算的力臂當成機翼氣動力繞重心的力臂；計算前先確認參考點。"
      ],
      "lessonBlocks": [
        {
          "title": "力矩的力臂是垂直距離",
          "paragraphs": [
            "Moment 描述力造成轉動的作用，大小為力乘以從參考點到力作用線的垂直距離。不能把任意斜向距離直接當成力臂。三維自由航空器可用 CG 描述平移及繞 CG 的旋轉，但同時仍可向前移動，不是只繞一個固定空間點。",
            "自編例：尾翼向下力 500 N，其作用線在 CG 後方 4 m，俯仰力矩大小是 2,000 N·m。方向須由位置與力一起判斷；前後或上下相反的位置可能產生相反力矩。"
          ]
        },
        {
          "title": "重量平衡的 datum 與氣動力矩的 CG 分開",
          "paragraphs": [
            "載重計算常用核准 datum 的重量 × arm，得到如 lb·in 的矩，再用總矩除以總重量求 CG。分析俯仰平衡則常取 CG 加總各氣動與推力矩。兩者都叫 moment，參考點與目的卻不同。",
            "原文提到約 20% MAC 是概述，不能當成所有飛機的目標 CG 或核准範圍。MAC 是平均氣動弦，不一定等於翼根弦；非矩形翼更不能只量翼根長度來算 %MAC。"
          ]
        },
        {
          "title": "配平改變力矩，不會把 CG 自動搬回包線",
          "paragraphs": [
            "配平片或可調水平安定面改變氣動作用，減少維持狀態所需的操縱力；燃油消耗、載重位置則可能改變 CG。這兩種變化應分開追蹤，不能用「配平調得回來」證明載重合法。",
            "改變空速、動力或構型時，翼、尾翼、推力線等作用可能同時改變。單一力矩的示意有助理解方向，完整平衡則要把所有作用合起來。"
          ],
          "check": {
            "question": "尾翼 500 N、垂直力臂 4 m，力矩多少？",
            "answer": "大小為 2,000 N·m；正負方向還須按所選座標和作用方向判定。"
          }
        }
      ]
    },
    {
      "id": "design",
      "english": "Aircraft Design Characteristics",
      "title": "設計特性與任務取捨",
      "parent": null,
      "locator": "PHAK C 版 · 5-14",
      "printedPage": "5-14",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=14",
      "paragraphs": [
        "飛機設計需要在穩定性、機動性與可操縱性之間取捨。穩定性關心受擾後的自然反應，機動性關心改變運動狀態的能力，可操縱性則關心機師能否透過控制完成所需動作；三者相關但不能互換。",
        "適合長時間巡航的自然反應，不一定適合快速機動任務。評估某機型時要結合其核准用途、重心和速度範圍，而不是認為越穩定就一定越好轉彎，或容易轉動就代表更容易從異常狀態恢復。"
      ],
      "lessonBlocks": [
        {
          "title": "穩定性、機動性、可操縱性是三個問題",
          "paragraphs": [
            "Stability 問受到擾動後的反應；maneuverability 問能否完成所需機動及承受相關負載；controllability 問操縱輸入能否有效改變姿態與航跡。手感輕不一定更穩定，手感重也不直接代表操縱能力不足。",
            "設計需在任務、結構限制及飛行員可接受的操縱力間取捨。評估時要注明速度、構型、CG 和控制系統狀態，不能只用「這種飛機很穩」概括整個包線。"
          ]
        }
      ]
    },
    {
      "id": "stability",
      "english": "Stability",
      "title": "穩定性：受擾後如何反應",
      "parent": "design",
      "locator": "PHAK C 版 · 5-14",
      "printedPage": "5-14",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=14",
      "paragraphs": [
        "穩定性以某個原先平衡狀態為起點，觀察小擾動後的反應。要分辨靜穩定與動穩定，也要指明俯仰、滾轉或偏航等方向；在一個方向穩定並不保證所有模態都同樣穩定。",
        "自編例：陣風使機頭偏離原狀態，飛機可能先出現回復傾向，接著卻來回擺動且越擺越大。前半段觀察和長時間結果回答不同問題，不能只看到一次回頭便判定它最後會自己穩定。"
      ],
      "lessonBlocks": [
        {
          "title": "先有配平狀態，再談擾動後反應",
          "paragraphs": [
            "配平是原本的力與力矩平衡；穩定性則描述離開該狀態後怎樣反應。某架飛機可在某點被配平，卻對小擾動有發散趨勢，所以 trim 和 stability 不是同義詞。",
            "還要區分自然氣動特性、飛行員持續修正及自動控制增穩。自動駕駛維持高度，不證明關閉後每個模態都會自行衰減；穩定也不保證回到原地理航跡或原航向。"
          ]
        }
      ]
    },
    {
      "id": "static",
      "english": "Static Stability",
      "title": "靜穩定：最初的回復傾向",
      "parent": "stability",
      "locator": "PHAK C 版 · 5-14",
      "printedPage": "5-14",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=14",
      "paragraphs": [
        "正靜穩定表示偏離平衡後最初有回到原平衡的傾向；中性表示沒有回復或繼續偏離的初始傾向；負靜穩定則傾向進一步離開。判斷的是初始力或力矩方向，不是計時飛機多久回正。",
        "原書的球在凹面、平面或凸面上的例子可幫助記憶，但真實飛機有多個相互影響的自由度。靜穩定本身不能說明振盪是否衰減，因此還要閱讀下一節的動穩定。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 5-21 · 看初始趨勢，不看最後結果",
          "paragraphs": [
            "碗底球受到小擾動後傾向回去，是正靜穩定；平面上的球沒有回復趨勢，是中性；隆起表面上的球傾向離開，是負靜穩定。圖中的球與物體是回復趨勢的比喻，不是飛機實際靠地面支點平衡。",
            "靜穩定只回答最初回復方向。即使初始方向朝平衡點，之後仍可能反覆越過而越擺越大；要回答是否安定下來，必須看動穩定。"
          ],
          "figure": {
            "label": "Figure 5-21 · Types of static stability",
            "page": "5-14",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=14"
          }
        }
      ]
    },
    {
      "id": "dynamic",
      "english": "Dynamic Stability",
      "title": "動穩定：隨時間的變化",
      "parent": "stability",
      "locator": "PHAK C 版 · 5-14",
      "printedPage": "5-14",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=14",
      "paragraphs": [
        "動穩定觀察受擾後的整段反應。振盪逐漸衰減是正動穩定的例子；振幅維持或增大則分別示意中性與負動穩定。回復力與阻尼共同影響結果，有回復方向不等於有足夠阻尼。",
        "自編例：每次穿越原高度後偏離幅度變小，和每次偏離更大，是不同的時間反應。實際判斷還須看速度、姿態與模態，不應在未按訓練程序的情況下放手測試，把教材圖像當成自行試飛指令。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 5-22 · 比較振幅包絡線",
          "paragraphs": [
            "橫軸是時間、縱軸是離開平衡的位移。衰減振盪的峰值逐次減小，等幅振盪不減不增，發散振盪的峰值越來越大。不要只看曲線有沒有穿越零點；穿越零點不等於已恢復穩定。",
            "圖中的三種振盪都可具有初始回復趨勢，卻有不同動態結果。原文以老舊避震器比喻中性動穩定只能作直覺，真正設備仍可能有不同程度的阻尼。氣動模態也可能非振盪地慢慢發散，例如後面的螺旋模態。"
          ],
          "figure": {
            "label": "Figure 5-22 · Damped, undamped and divergent motion",
            "page": "5-15",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=15"
          },
          "check": {
            "question": "每次都向原姿態回頭，振幅卻增加，算正動穩定嗎？",
            "answer": "不是。回復趨勢可為正靜穩定，但振幅增加表示此振盪動態發散。"
          }
        }
      ]
    },
    {
      "id": "longitudinal",
      "english": "Longitudinal Stability (Pitching)",
      "title": "縱向穩定：俯仰力矩的平衡",
      "parent": "stability",
      "locator": "PHAK C 版 · 5-15",
      "printedPage": "5-15",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=15",
      "paragraphs": [
        "縱向穩定討論繞橫軸的俯仰反應，與重心、機翼氣動力矩、尾翼作用及推力線等有關。原書以傳統尾翼常提供向下作用力的設計說明平衡，但不能據此斷言所有飛機的尾翼都必須向下受力。",
        "重心後移通常降低傳統設計的縱向靜穩定裕度，可能影響降低迎角和恢復的能力；重心過前則可能需要更多尾翼力與操縱能力。推力變更亦可能改變力矩及尾翼氣流，實際趨勢須依機型理解。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 5-23 · 縱向穩定是繞橫軸的俯仰穩定",
          "paragraphs": [
            "圖把機翼合力、重量及尾翼力簡化成槓桿，幫助辨識力臂。傳統布局的尾翼可提供向下力平衡機翼等力矩，但不是所有配置、速度或 CG 都必須有同樣的尾翼力方向。",
            "真正的靜穩定要求擾動後出現回復力矩，例如迎角增加時產生使迎角減小的趨勢。單看某一瞬間 CG 在 CP 前方，還不足以證明整機符合這個條件；要看力矩如何隨狀態改變。"
          ],
          "figure": {
            "label": "Figure 5-23 · Longitudinal force and moment balance",
            "page": "5-16",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=16"
          }
        },
        {
          "title": "Figure 5-24 · 尾翼感受到局部流場",
          "paragraphs": [
            "原圖用不同速度的尾翼向下力來解釋一種傳統布局的恢復機制。尾翼受力取決於局部動壓、迎角、機翼下洗及螺旋槳滑流等，不能只看全機空速就認定下洗與尾翼力必然同方向單調變化。",
            "在固定重量的水平飛行，速度下降時機翼迎角通常上升；這也會改變下洗。因此原書「速度越快、下洗必然越大」應當成情境示意，不是所有比較條件下的定律。"
          ],
          "figure": {
            "label": "Figure 5-24 · Speed and tail loading illustration",
            "page": "5-16",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=16"
          }
        },
        {
          "title": "Figure 5-25 · 減動力後的俯仰反應依機型而定",
          "paragraphs": [
            "圖示減動力、尾翼作用改變後機頭下俯的例子。實際反應同時受到推力矩、滑流、空速和尾翼流場影響，不可只用「少了向下尾翼力」解釋每架飛機。",
            "之後可能出現空速與高度交換的長週期運動；振幅是否衰減取決於動態特性。穩定性講解不是邀請讀者自行鬆手做飛行試驗，實機演示應在適用訓練條件下進行。"
          ],
          "figure": {
            "label": "Figure 5-25 · Reduced power and pitch response",
            "page": "5-16",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=16"
          }
        },
        {
          "title": "Figure 5-26 · 推力線通過 CG 就沒有直接推力俯仰矩",
          "paragraphs": [
            "只看圖示向前推力：作用線低於 CG 可產生鼻上矩，高於 CG 可產生鼻下矩，通過 CG 時直接俯仰力臂為零。這是力作用線與參考點的幾何結果。",
            "通過 CG 不代表加減動力後全機一定沒有俯仰反應，因為滑流及其他氣動作用仍可能改變。將直接推力矩和間接氣動作用分開，才能解釋看似例外的機型反應。"
          ],
          "figure": {
            "label": "Figure 5-26 · Thrust line relative to CG",
            "page": "5-17",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=17"
          }
        },
        {
          "title": "Figure 5-27 · 動力與氣動力矩一起看",
          "paragraphs": [
            "本圖比較同一示意布局的巡航、怠速和全動力狀態。讀時先找推力線位置，再考慮尾翼作用，不要把一張圖的鼻上或鼻下反應當成所有飛機的操作口訣。",
            "CG、翼與尾翼的位置及尾翼面積共同影響俯仰特性，配平只能處理特定狀態的平衡。穩定性與正常操縱仍需以該機型手冊和訓練為準。"
          ],
          "figure": {
            "label": "Figure 5-27 · Power changes and pitch response",
            "page": "5-17",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=17"
          }
        }
      ]
    },
    {
      "id": "lateral",
      "english": "Lateral Stability (Rolling)",
      "title": "橫向穩定：側滑如何帶來滾轉",
      "parent": "stability",
      "locator": "PHAK C 版 · 5-17",
      "printedPage": "5-17",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=17",
      "paragraphs": [
        "橫向穩定討論繞縱軸的滾轉反應。上反角、後掠、翼身配置及側面受力等因素會影響側滑時的滾轉力矩；上反角的回復效果需要連到相對來流，並非機翼只要傾斜就自動被重力扳平。",
        "自編例：陣風使一翼下降，伴隨的側滑可讓左右翼遇到不同有效迎角，產生回復滾轉。高翼與低翼可能透過不同設計取得所需效果，所以不能只看機翼位置就決定整架飛機的橫向穩定程度。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 5-28 · 上反角是幾何，效應需要側滑",
          "paragraphs": [
            "Dihedral 是左右翼相對橫向水平面的上折角。它對側滑的滾轉反應有貢獻，但單純把機翼傾斜而沒有側滑，不會自動因重力多出一個直接恢復滾轉力矩。",
            "Lateral stability 是繞縱軸的滾轉相關穩定，名稱指運動性質，不是說繞 lateral axis。上反角、後掠、機身干擾與垂直位置都可影響整體 dihedral effect。"
          ],
          "figure": {
            "label": "Figure 5-28 · Dihedral geometry",
            "page": "5-18",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=18"
          }
        },
        {
          "title": "Figure 5-29 · 側向來流使兩翼有效迎角不同",
          "paragraphs": [
            "在圖示側滑中，上反角使兩翼相對局部來流有不同有效迎角，形成升力差及滾轉力矩。這是將側滑與滾轉連起來的機制，不是低翼因「比較接近地面」而多出升力。",
            "先辨識相對風箭頭，再判斷哪側有效迎角增加。圖中 blade 指翼面示意，並非此處開始改講旋翼；回復強弱仍依整架機體流場決定。"
          ],
          "figure": {
            "label": "Figure 5-29 · Sideslip and unequal wing loading",
            "page": "5-18",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=18"
          }
        },
        {
          "title": "Figure 5-30 · 後掠也可產生上反角效應",
          "paragraphs": [
            "側滑時，左右後掠翼相對來流的有效後掠不同，翼面氣動作用因此不對稱，可產生滾轉反應。翼在機身高低位置造成的干擾，也會改變整體效應。",
            "原書用 10° 後掠近似 1° 有效上反角、高翼近似多 5° 的數字，是粗略比較，不能代替任何設計計算。高速機型也不因後掠就一定在低速時自動恢復水平。"
          ],
          "figure": {
            "label": "Figure 5-30 · Sweepback and lateral response",
            "page": "5-18",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=18"
          }
        },
        {
          "title": "Figure 5-31 · Keel effect 不是懸掛鐘擺",
          "paragraphs": [
            "側滑時，CG 上下的側向受風面及其力臂會產生滾轉力矩。圖把較大的側向面積放在 CG 上方，用來提示側向氣動作用的位置很重要。",
            "自由飛行的飛機沒有懸在空中的固定翼支點，重量通過 CG，本身不直接對 CG 產生力矩。因此高翼機身像鐘擺的比喻不可照字面使用；要回到側向氣動力、力臂及翼身干擾分析。"
          ],
          "figure": {
            "label": "Figure 5-31 · Keel area and CG",
            "page": "5-19",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=19"
          }
        }
      ]
    },
    {
      "id": "directional",
      "english": "Directional Stability (Yawing)",
      "title": "方向穩定：風標效應",
      "parent": "stability",
      "locator": "PHAK C 版 · 5-19",
      "printedPage": "5-19",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=19",
      "paragraphs": [
        "方向穩定討論繞垂直軸的偏航反應，垂直尾翼和重心前後的側面面積、力臂共同影響結果。常用風標比喻：側滑時尾部氣動作用提供回復力矩，使機身重新對準相對氣流。",
        "對準相對氣流並不表示自動回到擾動前的地面航向或航跡。自編例：飛機消除側滑後仍可能在新的方向飛行，導航路徑要另行管理；穩定性不具備自動追蹤原航線的功能。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 5-32 · 風向標作用是對準來流，不是記住航向",
          "paragraphs": [
            "垂直尾翼與 CG 後方的側向面積能在側滑時產生回復偏航力矩。除了面積，還要看相對 CG 的力臂和局部氣流，不能只算機身前後外觀面積誰大。",
            "飛機在擾動後可能對準新的相對來流方向，卻已偏離原航向或地理航跡。方向穩定不等於自動導航，飛行員仍需監控航向及航跡。",
            "後掠翼對方向穩定可能有貢獻，但通常不能取代尾翼的主要作用。也不要由 CP 後移一項就判定縱向和方向穩定都自動改善；這是不同軸向的力矩問題。"
          ],
          "figure": {
            "label": "Figure 5-32 · Fuselage and fin directional stability",
            "page": "5-19",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=19"
          }
        }
      ]
    },
    {
      "id": "dutch-roll",
      "english": "Free Directional Oscillations (Dutch Roll)",
      "title": "荷蘭滾：偏航與滾轉耦合振盪",
      "parent": "design",
      "locator": "PHAK C 版 · 5-20",
      "printedPage": "5-20",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=20",
      "paragraphs": [
        "荷蘭滾是橫向與方向運動耦合的振盪，滾轉和偏航通常有相位差。其阻尼隨機型和狀態而異，某些後掠翼飛機需要偏航阻尼系統協助抑制，不能將它視為單獨左右晃動或正常轉彎。",
        "學習時可追蹤機頭與機翼如何交替偏離，而不是只看其中一軸。偏航阻尼系統的可用狀態、限制與失效程序應依機型資料；不能把「飛機原本穩定」當成該系統不重要的理由。"
      ],
      "lessonBlocks": [
        {
          "title": "Dutch roll 是滾轉與偏航耦合振盪",
          "paragraphs": [
            "偏航、側滑及滾轉互相影響，可能形成相位不同的振盪，看起來像機頭在地平附近畫圈或八字。這不是兩個完全獨立、大小必定相同的正弦運動，阻尼也依機型與狀態而異。",
            "Yaw damper 用控制系統增加相關模態阻尼，與把方向舵固定在某角度不同。原文說此模態通常穩定但不安全過於籠統：是否可接受取決於阻尼、幅度、飛行條件及適航設計要求。系統失效後限制須查機型資料。"
          ]
        }
      ]
    },
    {
      "id": "spiral",
      "english": "Spiral Instability",
      "title": "螺旋不穩定與螺旋俯衝",
      "parent": "design",
      "locator": "PHAK C 版 · 5-20",
      "printedPage": "5-20",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=20",
      "paragraphs": [
        "螺旋不穩定是傾斜和轉彎狀態可能緩慢發散的模式，與方向穩定及橫向回復作用的相對效果有關。若未修正，傾斜角、下降與速度可能逐步增加，初期變化小不代表可一直放任。",
        "螺旋俯衝與尾旋不同：前者不必失速，尾旋涉及失速與自轉。高速且大傾斜時一味向後拉桿可能增加載荷並收緊轉彎；辨識與恢復須依訓練及機型程序，不能直接把尾旋口訣套到螺旋俯衝。"
      ],
      "lessonBlocks": [
        {
          "title": "螺旋模態慢慢發散，不是失速尾旋",
          "paragraphs": [
            "螺旋不穩定是側向／方向耦合中的緩慢發散趨勢，可能讓傾角、下降與速度逐步增加。強方向回復而較弱滾轉回復是原書的直覺比較，實際模態還受其他氣動導數影響，不能只看尾翼大小就判斷。",
            "Spiral dive 的機翼通常未失速；spin 則涉及失速與自轉。兩者可能都下降旋轉，辨識及恢復要求不同，不能只憑外觀繞圈就套用相同程序。",
            "在陡螺旋中一味後拉，可能增加載荷並使轉彎更緊，帶來結構與失速風險。實際恢復依 AFM／POH 與受訓程序；原書對事故排名的推測缺乏此處可核對的統計依據，本站不沿用為現行事實。"
          ],
          "check": {
            "question": "下降時一直繞圈，就一定是 spin 嗎？",
            "answer": "不是。螺旋俯衝通常未失速且速度可能迅速增加，失速尾旋涉及失速與自轉，需正確辨識。"
          }
        }
      ],
      "references": [
        {
          "title": "FAA Airplane Flying Handbook Chapter 5 · Upset and stall training",
          "url": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/06_afh_ch5.pdf",
          "checked": "2026-09-13"
        }
      ]
    },
    {
      "id": "planform",
      "english": "Effect of Wing Planform",
      "title": "平面形狀、展弦比與失速分布",
      "parent": null,
      "locator": "PHAK C 版 · 5-20",
      "printedPage": "5-20",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=20",
      "paragraphs": [
        "機翼平面形狀是從上方看的輪廓，與剖面翼型不同。展弦比一般可寫成翼展平方除以翼面積，矩形翼才可直接簡化成翼展除以翼弦；錐度及後掠也會改變展向載荷與失速傾向。",
        "較大展弦比在適當比較下有助降低誘導阻力，卻也涉及結構重量與彎矩。矩形、橢圓或大錐度翼的實際失速分布還受扭轉、翼型和裝置影響，不能僅從輪廓保證翼根或翼尖一定先失速。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 5-33 · 平面形、展弦比、錐度分開",
          "paragraphs": [
            "Planform 是俯視形狀，airfoil 是剖面形狀。一般展弦比 AR = b²／S，只有矩形翼才可直接用 b／c；錐度比通常是翼尖弦長除以翼根弦長，厚度變化則另說明。後掠角還要指出量測的參考線。",
            "較大翼展能改善部分誘導阻力表現，卻也影響彎矩、重量與結構；低 AR 本身不必然代表高翼載 W／S，因為重量及面積可以另外變動。不能由一項幾何比例直接斷言失速速度。"
          ],
          "figure": {
            "label": "Figure 5-33 · Wing planforms",
            "page": "5-21",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=21"
          }
        },
        {
          "title": "橢圓形外觀與橢圓升力分布不是同義詞",
          "paragraphs": [
            "在固定翼展與總升力等假設下，理想平面翼的橢圓展向升力分布可使誘導阻力最小。這是載荷分布的結果，不是任何畫成橢圓輪廓的翼在所有迎角下總阻力都最低。",
            "扭轉、翼型沿展向變化與錐度可讓其他外形接近所需分布。幾何扭轉改變局部安裝角，氣動扭轉則可藉翼型特性變化達成，因此不能只看外輪廓預測每一截面的升力。"
          ]
        },
        {
          "title": "失速順序由整體設計決定",
          "paragraphs": [
            "矩形翼常有翼根先失速的有利傾向，可保留外側副翼效能；高度錐形翼等布局可能更需控制翼尖失速。但實際順序還受到扭轉、翼型、增升裝置與表面狀態影響。",
            "原文把橢圓翼視為理想次音速平面形、錐度必然增升減阻，是過度概括。比較時必須指定工況及目標，並兼顧可操縱性、結構、製造與失速警告，不能只選一個效率指標。"
          ]
        }
      ],
      "references": [
        {
          "title": "NASA · Elliptical lift distribution and induced drag",
          "url": "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/induced-drag-coefficient/",
          "checked": "2026-09-13"
        }
      ]
    },
    {
      "id": "maneuvers",
      "english": "Aerodynamic Forces in Flight Maneuvers",
      "title": "飛行動作中的受力分析",
      "parent": null,
      "locator": "PHAK C 版 · 5-22",
      "printedPage": "5-22",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=22",
      "paragraphs": [
        "同樣四個基本力，在轉彎、爬升和下降中的方向分解不同。先判斷是否定常、是否協調以及沿哪個座標分析，再畫力的分量，能避免把水平飛行的等式套到所有動作。",
        "尤其要分開「從一個狀態過渡」與「已經建立的穩定狀態」。拉起建立爬升時可能有垂直加速度，但穩定爬升不代表一直有向上的加速度；速度不變的轉彎則因方向持續變化仍有加速度。"
      ],
      "lessonBlocks": [
        {
          "title": "機動分析先列出假設",
          "paragraphs": [
            "轉彎、進入爬升、穩定爬升與進入下降不是同一狀態。先辨認速度大小和方向是否在變，再決定合力是否為零；轉彎即使等速也有向心加速度。",
            "以下算例採簡化的協調、定高、定速模型，忽略次要側力並以升力與重量為主要垂直作用。若有側滑、垂直加速度或推力向量，不能直接搬用這組公式。"
          ]
        }
      ]
    },
    {
      "id": "turns",
      "english": "Forces in Turns",
      "title": "轉彎：升力的水平與垂直分量",
      "parent": "maneuvers",
      "locator": "PHAK C 版 · 5-22",
      "printedPage": "5-22",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=22",
      "paragraphs": [
        "在簡化的協調定常水平轉彎中，升力傾斜後的水平分量提供向心加速度，垂直分量平衡重量。若只傾斜而不增加所需總升力，垂直支承會不足；維持高度需配合迎角與適當功率。",
        "在地面慣性座標中，向心力是淨力的描述，不需另加一個真實離心力把它抵消。方向舵協助協調偏航，不能當成汽車方向盤；側滑與外滑也不能用更多拉桿掩蓋，應依機型和訓練正確協調。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 5-34 · 同一升力分成垂直與水平分量",
          "paragraphs": [
            "以 φ 表示傾角，簡化協調定高轉彎滿足 L cos φ = W，而 L sin φ = mV²／R。升力水平分量提供向心加速度；增加傾角但不增加總升力時，垂直支持會減少。",
            "圖中 centrifugal force 是在隨飛機轉動的參考系中引入的慣性力表示，不是地面慣性系中另一股真實力剛好取消向心力。若在慣性系把它和升力水平分量相消，就無法解釋轉彎加速度。"
          ],
          "figure": {
            "label": "Figure 5-34 · Coordinated level-turn forces",
            "page": "5-22",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=22"
          }
        },
        {
          "title": "載荷、轉彎率與半徑：關係不是傾角的直線函數",
          "paragraphs": [
            "簡化模型的 n = L／W = 1／cos φ；轉彎角速度 ω = g tan φ／V（rad/s）；半徑 R = V²／(g tan φ)。V 是真空速，公式未包含風對地面航跡的改變。",
            "在同一傾角增速，轉彎率下降、半徑增加；同一空速增加傾角，轉彎率增加但載荷也增加。維持同一轉彎率增速時要增加傾角，不能由原文再推定迎角必須完全固定。"
          ],
          "table": {
            "caption": "定高協調轉彎的自編比較",
            "headers": [
              "傾角",
              "載荷因數 n",
              "若 1 g 失速速度為 50 kt，理想失速速度"
            ],
            "rows": [
              [
                "30°",
                "約 1.155",
                "約 53.7 kt"
              ],
              [
                "45°",
                "約 1.414",
                "約 59.5 kt"
              ],
              [
                "60°",
                "2.000",
                "約 70.7 kt"
              ]
            ]
          },
          "check": {
            "question": "60° 定高協調轉彎需要多少升力？",
            "answer": "簡化模型中為重量的兩倍，即 2 g 載荷；不是所有傾角 60° 的機動都自動等於 2 g。"
          }
        },
        {
          "title": "修正原文 400 mph 標準率算例",
          "paragraphs": [
            "400 mph 約為 178.8 m/s，標準率 3°/s 約為 0.05236 rad/s。由 tan φ = ωV／g 得 φ 約 43.7°，與原文約 44° 接近；但垂直升力比例 cos 44° 約 71.9%，並非原文的 79%。",
            "相應簡化載荷約 1.39 g。這是數學比較，不是要求任何機型以該傾角做標準率轉彎；高速機型的程序、載荷與乘坐限制仍須另外確認。"
          ]
        },
        {
          "title": "Figure 5-35 · 協調、內滑與外滑",
          "paragraphs": [
            "正常協調轉彎的側向受力感覺沿機體垂直方向；slipping turn 與 skidding turn 表示側滑／偏航和所需轉彎不匹配。圖中的離心力箭頭同樣屬轉動參考系的說明，不是增加一個獨立外力來源。",
            "方向舵用於協調偏航與側滑，實際需要量依機型、動力及轉彎狀態而異，不能把「建立轉彎後完全不用方向舵」當普遍規則。也不能說機翼不傾斜就絕不可能改變方向；有側向氣動力時仍可有非協調運動。",
            "不要用「多踩內側舵」強迫低速轉彎追上跑道方向。接近失速又不協調時可能增加尾旋風險，理解偏差後應依訓練與機型程序處置，而非把圖當成固定舵量指令。"
          ],
          "figure": {
            "label": "Figure 5-35 · Coordinated, slipping and skidding turns",
            "page": "5-24",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=24"
          }
        }
      ],
      "currentNote": "本站核算：原文 400 mph、3°/s 的約 44° 傾角接近正確，但 cos 44° 約為 71.9%，不是 79%。轉彎公式使用協調、定高、定速等假設；圖中離心力屬旋轉參考系表示。"
    },
    {
      "id": "climbs",
      "english": "Forces in Climbs",
      "title": "爬升：過渡與定常狀態",
      "parent": "maneuvers",
      "locator": "PHAK C 版 · 5-23",
      "printedPage": "5-23",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=23",
      "paragraphs": [
        "若推力沿飛行路徑，定常直線爬升可簡化為 T − D = W sin γ，L = W cos γ，γ 是爬升路徑角。這說明沿路徑需要推力克服阻力及重量分量，並非穩定爬升時升力一定大於重量。",
        "建立爬升的過渡階段可能先增加升力來改變路徑，之後重新達到受力平衡。爬升率與剩餘功率相關，爬升角與剩餘推力相關；最佳爬升率速度和最佳爬升角速度是不同目標，不應互換。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 5-36 · 進入爬升與穩定爬升分開",
          "paragraphs": [
            "開始抬頭時，相對來流方向尚未立即跟著機頭改變，迎角可短暫增加，氣動力使航跡向上彎曲。這是有加速度的過渡，不是穩定爬升的永久受力狀態。",
            "航跡建立後，若推力平行航跡且等速直線爬升，仍是 L = W cos γ。小角度時接近 W，原文才說與平飛差不多；不能把這個近似寫成任何爬升升力都剛好等於重量。"
          ],
          "figure": {
            "label": "Figure 5-36 · Lift during climb entry",
            "page": "5-24",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=24"
          }
        },
        {
          "title": "Figure 5-37 · 爬升角看剩餘推力，爬升率看剩餘功率",
          "paragraphs": [
            "沿爬升航跡，T − D = W sin γ；乘以速度得 (T − D)V = W × ROC。左邊是簡化模型的剩餘推進功率，說明有多少能量可用於增加高度。重量沿航跡的分量不是新的氣動阻力。",
            "若保持原動力進入爬升，速度可能改變，但不能推定對所有曲線都自然穩定在某個安全低速。自編例：剩餘推進功率 20,000 W、重量 10,000 N，理想穩定爬升率為 2 m/s；不能把引擎銘牌軸功率直接當成這個剩餘值。"
          ],
          "figure": {
            "label": "Figure 5-37 · Speed and force balance during climb entry",
            "page": "5-24",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=24"
          }
        }
      ]
    },
    {
      "id": "descents",
      "english": "Forces in Descents",
      "title": "下降與滑翔的能量來源",
      "parent": "maneuvers",
      "locator": "PHAK C 版 · 5-24",
      "printedPage": "5-24",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=24",
      "paragraphs": [
        "在無動力定常直線滑翔的簡化模型中，重量沿下降路徑的分量平衡阻力，垂直於路徑的分量由升力平衡。飛機藉高度降低釋放位能以克服阻力，並非引擎停止就沒有相對氣流或沒有升力。",
        "在下降中增加功率或改變姿態，可能改變速度、下降率及路徑角，不能只背一個控制對應一個結果。滑翔性能還受構型、風與機型限制影響；最佳空中滑翔比與最小下降率仍需分開理解。"
      ],
      "lessonBlocks": [
        {
          "title": "下降不是機翼突然失去飛行能力",
          "paragraphs": [
            "進入下降時，迎角與升力可暫時降低，航跡因合力改變；等下降穩定後，再按下降航跡分解。若下降角大小為 θ、推力沿航跡，則 D = T + W sin θ，L = W cos θ。",
            "重量的沿航跡分量提供部分克服阻力的作用，因此同空速、構型下通常可用較少推進功率維持下降；這不是說所有下降都無需動力，也不是說一直 L < W 就必然維持固定下降率。",
            "拉平或改變下降率又是新的過渡。要看姿態、空速與航跡一起變化，而不是把操縱桿位置直接等同某個固定垂直速度。"
          ]
        }
      ]
    },
    {
      "id": "stalls",
      "english": "Stalls",
      "title": "失速：臨界迎角與流動分離",
      "parent": null,
      "locator": "PHAK C 版 · 5-25",
      "printedPage": "5-25",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=25",
      "paragraphs": [
        "失速與超過適用狀態的臨界迎角有關，表現為分離加劇及升力係數下降，而不是升力瞬間完全歸零。低速、大載荷拉起或轉彎都可能到達臨界迎角，因此不能只用一個公布的 1G 失速速度判斷所有情況。",
        "「同一臨界迎角」需限定翼型、構型和流動條件；冰霜污染、裝置變更及壓縮性等可能改變特性。恢復的必要核心是降低迎角，其他動作與高度管理依機型程序；單純加油門而持續維持過大迎角，不保證解除失速。"
      ],
      "points": [
        "失速是空氣動力現象，不是引擎熄火；滑翔中的機翼也可正常產生升力。",
        "失速可以出現在機頭向下的姿態；迎角相對氣流，俯仰姿態相對地平線。",
        "原文臨界角度與結冰減損比例是背景例子，不是全機型固定數值。"
      ],
      "lessonBlocks": [
        {
          "title": "失速由迎角決定，但臨界值有適用條件",
          "paragraphs": [
            "超過適用的臨界迎角後，分離使 C_L 越過最大值並降低。失速不是所有升力消失，也不一定要在鼻上姿態或某個低空速發生；「無法維持水平」更不是唯一判定，因為飛機可能在其他機動中失速。",
            "原文「每架飛機只有一個固定失速迎角」要加上同一構型及相近流況的條件。襟翼、結冰或污染、Mach 與動態效應等都可改變失速特性，16°～20° 只是書中概括，不能當成通用操作門檻。"
          ]
        },
        {
          "title": "翼根先失速、扭轉與 CG",
          "paragraphs": [
            "翼根先失速有助保留外側控制效能，設計可使用 washout、翼型變化或經核准的 stall strips。這些是設計方法，不是允許自行在前緣黏貼物件改變失速順序。",
            "後 CG 可能降低回復裕度，甚至缺乏足夠降低迎角的操縱能力；配平或增加動力不能取代符合 CG 限制。失速後的鼻下趨勢取決於整體力矩，不能只以單一 CP 在 CG 前後的位置概括。"
          ]
        },
        {
          "title": "Figure 5-38 · 俯衝速度高，也能拉到失速",
          "paragraphs": [
            "快速拉起時，機頭方向改變得比航跡快，迎角可能迅速增加。图示 100 kt 是情境數字，不是所有機型的保護速度；加速失速說明速度高於平常 1 g 失速速度也未必安全。",
            "附圖延伸至官方原文 5-26，接續你附件的未完段落。氣動失速與超限載荷都是需要防範的結果，不能把拉得越用力理解成恢復越快。"
          ],
          "figure": {
            "label": "Figure 5-38 · Pullout and accelerated stall",
            "page": "5-26",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=26"
          }
        },
        {
          "title": "Figure 5-39 · V_S 隨載荷的平方根增加",
          "paragraphs": [
            "在相同重量、密度、構型及 C_Lmax 的近似下，V_S,n = V_S,1g × √n。2 g 不是失速速度加倍，而是乘 √2；50 kt 的示例會成為約 70.7 kt。這與前面的定高轉彎算例相連。",
            "圖表延伸至 5-26，屬原文失速相關補充圖。恢復失速的關鍵是降低迎角到適用臨界值以下；實際動力、姿態與控制順序依 AFM／POH 和受訓程序，不能以固定鼻下角度取代。"
          ],
          "figure": {
            "label": "Figure 5-39 · Load factor and stall speed",
            "page": "5-26",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=26"
          },
          "check": {
            "question": "看到空速高於平飛失速速度，就不可能失速嗎？",
            "answer": "不是。載荷增加時失速速度升高，關鍵仍是迎角與當下構型、流況。"
          }
        },
        {
          "title": "Figure 5-40 · 薄冰也會改變翼型與失速特性",
          "paragraphs": [
            "結冰、霜或其他污染會改變外形和表面狀態，可能降低最大升力係數、增加阻力並改變臨界迎角。影響不只來自增加的重量；小量粗糙污染也可能破壞原本氣動性能。",
            "原文 0.8 mm 與升力降低 25% 是示例，不能拿來當通用厚度門檻或允許量。結冰需要合適溫度、可用水分等條件，不是所有低於 0 °C 的雲都會以同一方式積冰；18,000 ft 也不是結冰風險的上限。",
            "本圖顯示積冰外觀，不足以判定程度或繼續飛行許可。依該機防冰能力、AFM／POH 與天氣資料處置，不能因 AOA 指示仍未警告就推定污染後的翼面安全。"
          ],
          "figure": {
            "label": "Figure 5-40 · Inflight ice formation",
            "page": "5-26",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=26"
          }
        }
      ],
      "references": [
        {
          "title": "FAA Airplane Flying Handbook Chapter 5 · Upset and stall training",
          "url": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/06_afh_ch5.pdf",
          "checked": "2026-09-13"
        },
        {
          "title": "FAA · Flight in icing guidance",
          "url": "https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentid/1028388",
          "checked": "2026-09-13"
        }
      ]
    },
    {
      "id": "aoa-indicators",
      "english": "Angle of Attack Indicators",
      "title": "迎角指示器與失速裕度",
      "parent": null,
      "locator": "PHAK C 版 · 5-26",
      "printedPage": "5-26",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=26",
      "paragraphs": [
        "迎角指示器用感測或推算資訊呈現迎角及接近臨界狀態的程度，能補充單看空速的不足。相同空速下，重量、轉彎載荷及構型不同，所需升力係數與失速裕度都可能不同。",
        "指示器必須依其安裝、校準、適用構型與使用限制解讀，顏色及刻度不一定跨機型一致。它也不是完整能量或結構安全顯示器；看似足夠的迎角裕度不代表高度、速度限制與其他系統狀態都合適。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 5-41 · 指示格式不同，先學該設備的意義",
          "paragraphs": [
            "AOA 指示器提供迎角或接近失速裕度的資訊，形式可為燈條、符號或指針。顏色與標記並非所有廠牌共用，不一定顯示幾何角度的數字；不能把別台的綠燈或音調直接套到自己的安裝。",
            "1 g 失速速度只對指定重量、構型與試驗條件有意義，AOA 資訊可補充速度不足以表達的負載狀態。但它不取代姿態、空速、飛行手冊速度及其他失速警告，亦不直接量出全部能量或可用航程。"
          ],
          "figure": {
            "label": "Figure 5-41 · Examples of AOA displays",
            "page": "5-27",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=27"
          }
        },
        {
          "title": "Figure 5-42 · 曲線與校準點是設備示意",
          "paragraphs": [
            "橫軸為迎角、縱軸為 C_L。圖用不同飛行姿態搭配同一曲線，提醒姿態與迎角不是同一量；接近 C_Lmax 時可用的迎角裕度減少，但曲線後段也說明不能把升力係數一直外推上升。",
            "圖中 Ground、OAA、Cruise alpha，以及 1.3 V_S、V_A 等校準標示屬圖示方法，不是所有 AOA 系統的校準程序，也不能推定 V_A 就是巡航空速或固定迎角。實際零點、校準條件、襟翼補償及顯示規則必須查製造商文件。",
            "較大的失速裕度不等於必然較佳燃油效率；最佳效率還涉及阻力、動力與任務。原文把能源管理、裕度與效率直接連成單一關係，閱讀時應拆開理解。"
          ],
          "figure": {
            "label": "Figure 5-42 · Lift curve and AOA indications",
            "page": "5-28",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=28"
          }
        },
        {
          "title": "探頭、污染、構型與訓練限制",
          "paragraphs": [
            "量測位置感受到局部流場，設備可使用葉片式感測、差壓或其他方式，並非每台都直接量測同一個全機 AOA。校準、探頭加熱狀態、堵塞、翼面污染及襟翼構型都可能影響提示是否適用。",
            "原文 2014 年安裝政策是歷史背景，不表示今天任何 AOA 裝置都可自行裝上或校準。使用前需要理解該安裝的核准用途、失效提示與限制；遇到資訊不一致時不能只相信單一顏色。"
          ],
          "check": {
            "question": "AOA 在綠區，結冰後就不可能失速嗎？",
            "answer": "不能保證。污染可改變翼面失速特性，感測與校準也有適用條件，須合併機型程序與其他資訊判斷。"
          }
        }
      ]
    },
    {
      "id": "propeller",
      "english": "Basic Propeller Principles",
      "title": "螺旋槳：旋轉翼型與螺距",
      "parent": null,
      "locator": "PHAK C 版 · 5-28",
      "printedPage": "5-28",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=28",
      "paragraphs": [
        "槳葉相對氣流由旋轉速度、前進速度及誘導流共同決定。槳根與槳尖的周向速度不同，槳葉扭轉可讓不同半徑位置更接近設計工作迎角；幾何槳葉角、迎角及螺距各有不同定義。",
        "固定螺距是在不同工況間取捨；可變螺距或定速系統則透過改變槳葉角配合功率與速度。定速不等於推力固定，螺旋槳效率也不是所有飛行條件的常數；槳葉設定和引擎限制需一起理解。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 5-43 · 葉片是沿半徑變化的翼型",
          "paragraphs": [
            "引擎提供軸功率，螺旋槳以葉片與空氣交換動量來產生推力。剖面沿半徑改變形狀、厚度及角度，以配合強度與局部流速；不能只拿翼尖一個剖面代表整支葉片。",
            "原文描述平坦 blade face 是典型外觀，不是所有螺旋槳的幾何定義。氣動推力來自各段葉片壓力與剪力合成，不是只看某一側「吸力」或只靠下表面拍打空氣。"
          ],
          "figure": {
            "label": "Figure 5-43 · Blade airfoil sections",
            "page": "5-29",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=29"
          }
        },
        {
          "title": "Figure 5-44 · 葉片角和迎角用不同參考線",
          "paragraphs": [
            "Blade angle 是弦線相對旋轉平面的幾何角度；AOA 是弦線與局部相對來流的角度。相對來流包含旋轉速度、前進速度及誘導流，簡圖忽略部分細節來幫助辨認方向。",
            "因此固定槳距不代表固定迎角；相同 rpm 下飛行速度改變，迎角也可能改變。Pitch 以每轉的幾何前進距離表示，和以角度表示的 blade angle 有關，但單位與意義不能互換。"
          ],
          "figure": {
            "label": "Figure 5-44 · Blade angle and relative wind",
            "page": "5-29",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=29"
          }
        },
        {
          "title": "Figure 5-45 · 幾何槳距、實際前進與 slip",
          "paragraphs": [
            "原書以 74–48 為尺寸示例，通常表示直徑 74 in、標稱槳距 48 in；具體編碼仍須查製造商。幾何槳距像螺絲在固體中每轉的前進距離，實際在空氣中每轉前進距離可不同，兩者差用來介紹 slip。",
            "螺旋槳效率通常定義為有用推進功率 T×V 除以軸功率。不能只由 slip 差值直接算出所有效率損失；飛機靜止時此定義的前進有用功率為零，但螺旋槳仍可有很大的靜推力，並非引擎完全沒有作用。"
          ],
          "figure": {
            "label": "Figure 5-45 · Geometric and effective pitch",
            "page": "5-30",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=30"
          }
        },
        {
          "title": "Figure 5-46 · 外側每圈走得更遠",
          "paragraphs": [
            "切向速度為 ωr，相同轉速下半徑越大速度越快。圖示不同直徑截面在 2,500 rpm 的運動，用來解釋葉片扭轉需求。若直徑 60 in，半徑 0.762 m，切向速度約 199.5 m/s；這尚未加入前進或誘導速度。",
            "為使各段有合適迎角，通常根部幾何角較大、翼尖較小。原文把相同幾何槳距與相同葉片角混用的描述不可照抄：即使幾何槳距沿半徑相同，所需幾何角仍隨半徑而變。"
          ],
          "figure": {
            "label": "Figure 5-46 · Rotational speed along the blade",
            "page": "5-30",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=30"
          }
        },
        {
          "title": "定速螺旋槳維持選定 rpm，不直接鎖住最佳迎角",
          "paragraphs": [
            "典型定速系統用調速器改變葉片角與負載，在可調範圍內維持飛行員所選 rpm。它不保證所有飛行狀態都精確最佳效率；遇到槳距止擋、功率不足或系統限制時也可能無法維持所選轉速。",
            "固定槳距是多工況間的折衷，地面可調式則需依程序在地面調整，不能在飛行中直接改槳距。原文起飛低槳距、高速較高槳距是典型例子，不是每一類螺旋槳都具有相同自動邏輯。",
            "保持同一 rpm 時加大槳距會增加負載的直覺，有助理解調速；但操作中的歧管壓力、轉速調整順序及限制依 AFM／POH，不能以此段固定口訣取代。原書 50～87% 效率與 1°～4° 高效率 AOA 同樣不是普遍保證。"
          ],
          "check": {
            "question": "定速槳是否表示推力和葉片角都固定？",
            "answer": "不是。系統主要維持所選 rpm，葉片角會變，推力則隨動力與流況等條件改變。"
          }
        }
      ]
    },
    {
      "id": "torque-pfactor",
      "english": "Torque and P-Factor",
      "title": "四種旋轉與偏航效應",
      "parent": "propeller",
      "locator": "PHAK C 版 · 5-30",
      "printedPage": "5-30",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=30",
      "paragraphs": [
        "本節把扭矩反作用、螺旋滑流、陀螺作用及 P-factor 放在一起比較，但它們的成因與主要作用軸不同。原書以從駕駛座看螺旋槳順時針轉動的典型單引擎配置為主，方向判斷必須保留這個前提。",
        "功率、空速、迎角、姿態變化及機體設計決定各效應相對強弱。不能把任何向左偏航都稱為 P-factor，也不能認為所有螺旋槳飛機永遠向左轉；反向旋轉或其他配置須重新分析。"
      ],
      "lessonBlocks": [
        {
          "title": "四種效應先分軸，再分機制",
          "paragraphs": [
            "原書用 torque 泛指左轉傾向，但嚴格說有不同機制：反扭矩主要造成滾轉，螺旋滑流主要可造成偏航，陀螺效應是旋轉軸改變時的耦合，P-factor 是槳盤負載不對稱。",
            "以下左／右方向採典型由飛行員座位向前看順時針旋轉的單發牽引式螺旋槳。旋轉方向、布局或操作狀態改變，結果也可能改變；不要把「永遠向左」套到所有航空器。"
          ],
          "table": {
            "caption": "四種偏轉效應",
            "headers": [
              "機制",
              "主要起因",
              "典型觀察"
            ],
            "rows": [
              [
                "Torque reaction",
                "引擎／槳旋轉的反作用矩",
                "空中主要滾轉。"
              ],
              [
                "Corkscrew",
                "旋轉滑流吹向尾部",
                "尾翼側力造成偏航。"
              ],
              [
                "Gyroscopic action",
                "旋轉軸方向改變",
                "俯仰與偏航耦合。"
              ],
              [
                "P-factor",
                "槳盤斜向來流、兩側負載不同",
                "推力中心偏移而偏航。"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "torque-reaction",
      "english": "Torque Reaction",
      "title": "扭矩反作用：主要是滾轉",
      "parent": "propeller",
      "locator": "PHAK C 版 · 5-31",
      "printedPage": "5-31",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=31",
      "paragraphs": [
        "引擎帶動槳朝一方向旋轉時，機體受到相反方向的扭矩。在原書順時針槳的例子中，空中主要傾向繞縱軸向左滾轉，而不是直接把這個扭矩當作繞垂直軸的偏航。",
        "地面滑跑時，滾轉反作用還可能改變左右主輪負荷與摩擦，間接帶來偏航。自編辨別：說「左轉傾向」之前先指出是哪一軸，再看起落架接地與否，才不會把空中和地面的效果混在一起。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 5-47 · 反作用矩先是滾轉，不等於偏航",
          "paragraphs": [
            "引擎帶動螺旋槳旋轉時，機體承受反向力矩。依本節旋向約定，空中可表現為向左滾轉；設計可能透過調整或操縱補償，但補償不一定在所有轉速與速度都相同。",
            "地面時滾轉力矩可能改變兩側主輪負載和阻力，間接造成偏航。這和空中直接偏航是不同受力路徑，程度還取決於輪架、跑道及其他力。"
          ],
          "figure": {
            "label": "Figure 5-47 · Torque reaction",
            "page": "5-31",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=31"
          }
        }
      ]
    },
    {
      "id": "corkscrew",
      "english": "Corkscrew Effect",
      "title": "螺旋滑流與垂直尾翼",
      "parent": "propeller",
      "locator": "PHAK C 版 · 5-31",
      "printedPage": "5-31",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=31",
      "paragraphs": [
        "螺旋槳後方氣流具有旋轉成分，繞機身的滑流可能以側向角度撞擊垂直尾翼，產生偏航力矩。原書的典型旋向與尾翼配置會形成左偏航，實際方向需結合旋向和幾何位置判斷。",
        "高槳轉速而前進速度較低時，滑流形狀與尾翼受力常更明顯，隨速度改變其效果也變化。這是尾翼受到氣流作用的結果，和槳葉左右推力不均的 P-factor 或引擎扭矩反作用都不是同一機制。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 5-48 · 滑流旋轉與尾翼側力",
          "paragraphs": [
            "螺旋槳後方滑流除了向後，也帶有旋轉。在典型旋向與尾翼布局中，尾翼受到側向作用形成偏航力矩；高動力、低前進速度時常較明顯。",
            "原文提到滑流也可能有滾轉分量，且與反扭矩方向不同，並不代表兩者會精確相消。相對強弱隨狀態而變，不能把任何一個效應當成固定不變的校正量。"
          ],
          "figure": {
            "label": "Figure 5-48 · Corkscrew slipstream",
            "page": "5-31",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=31"
          }
        }
      ]
    },
    {
      "id": "gyroscopic",
      "english": "Gyroscopic Action",
      "title": "陀螺作用與姿態變化",
      "parent": "propeller",
      "locator": "PHAK C 版 · 5-31",
      "printedPage": "5-31",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=31",
      "paragraphs": [
        "旋轉螺旋槳具有角動量，改變旋轉軸方向需要力矩，並會對機體產生耦合作用。原書用沿旋轉方向約 90° 的進動圖像幫助理解，重點是旋向與軸方向變化，而非所有姿態下都有固定左偏航。",
        "在原書旋向的尾輪機例子中，起飛滑跑抬尾改變槳軸方向，會帶來偏航效應；相反的俯仰變化或不同旋向可能產生不同結果。效應也與姿態改變速率相關，不能只看目前迎角判斷。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 5-49 · 90° 的圖解不是時間延遲",
          "paragraphs": [
            "旋轉螺旋槳具有角動量，改變旋轉軸方向需要力矩。理想陀螺的圖示以旋轉方向前方 90° 的等效反應位置幫助辨識方向，不是施力後要等待轉四分之一圈才有反應。",
            "結果取決於角動量方向、軸方向變化及轉動速率；不能把一個局部推力箭頭直接當成所有陀螺系統的通用操縱指令。"
          ],
          "figure": {
            "label": "Figure 5-49 · Gyroscopic precession",
            "page": "5-32",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=32"
          }
        },
        {
          "title": "Figure 5-50 · 抬尾是俯仰變化，也可帶來偏航",
          "paragraphs": [
            "尾輪機起飛過程抬尾會改變機體俯仰與槳軸方向，因此可引發陀螺耦合偏航；在本節旋向約定下，圖示為向左偏航。抬尾越突然、角動量越大，效應可能越明顯。",
            "這不是尾輪機專有的物理定律，任何合適的旋轉軸變化都可能有此效應。實際操縱仍需配合機型、速度與其他偏轉力，不是固定踩同一方向到同一量。"
          ],
          "figure": {
            "label": "Figure 5-50 · Raising the tail and gyroscopic response",
            "page": "5-32",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=32"
          }
        }
      ]
    },
    {
      "id": "p-factor",
      "english": "Asymmetric Loading (P-Factor)",
      "title": "P-factor：槳盤不對稱負荷",
      "parent": "propeller",
      "locator": "PHAK C 版 · 5-32",
      "printedPage": "5-32",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=32",
      "paragraphs": [
        "當來流斜向穿過槳盤時，上行與下行槳葉的相對氣流不同，使平均推力分布偏向一側。在原書典型順時針槳、正迎角條件下，下行的右側槳葉貢獻較多推力，使推力中心右移並帶來左偏航。",
        "這不是右邊槳葉比較長，也不是直接由飛機重心右移造成。自編比較：即使姿態變化已停止，只要斜向入流仍存在，P-factor 仍可存在；陀螺作用則需要考慮槳軸方向的改變，兩者不能混同。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 5-51 · 槳盤兩側的負載不對稱",
          "paragraphs": [
            "當來流與槳軸不對正，旋轉中的上行與下行葉片具有不同局部相對速度與迎角，兩側平均推力可能不同。在本節典型旋向與正迎角條件，下行側負載較大，使推力中心偏移並產生左偏航矩。",
            "圖比較低與高迎角情況，不能只用「右邊葉片比較低」解釋。也不能與陀螺效應混淆：P-factor 可在穩定高迎角飛行存在，不需要槳軸正在快速改變方向。"
          ],
          "figure": {
            "label": "Figure 5-51 · Asymmetric propeller loading",
            "page": "5-33",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=33"
          },
          "check": {
            "question": "P-factor 是否就是抬尾時的陀螺反應？",
            "answer": "不是。前者是槳盤負載不對稱，後者與改變旋轉軸方向有關。"
          }
        }
      ]
    },
    {
      "id": "load-factors",
      "english": "Load Factors",
      "title": "載荷因數與結構、失速的關係",
      "parent": null,
      "locator": "PHAK C 版 · 5-33",
      "printedPage": "5-33",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=33",
      "paragraphs": [
        "在本章常用的飛機法向受力模型中，載荷因數 n = L/W，是無因次比值，常以 G 表達。它比較氣動支承負荷與重量，不是說重力加速度本身變成好幾倍，也不是任意方向的淨力都可以直接當作 L。",
        "增加載荷因數會增加結構負擔，也提高相同構型與重量下所需的升力能力，因此可能在高於 1G 失速速度時失速。自編例：2G 不是質量變成兩倍，而是相關支承載荷約為重量的兩倍。"
      ],
      "lessonBlocks": [
        {
          "title": "n = L／W：無因次比值，不是新增重量",
          "paragraphs": [
            "在本章簡化氣動模型中，載荷因數 n 為升力對重量的比值，常用 g 表達。2 g 不表示地球重力或飛機質量變成兩倍，而是所需支承載荷相對重量增加。",
            "實際結構各部位受力並不必然全部同倍數增加；慣性、操縱面與局部負載還要分開分析。座椅壓力感覺能提供線索，但不能精準取代儀表或核准限制。"
          ]
        }
      ]
    },
    {
      "id": "design-loads",
      "english": "Load Factors in Aircraft Design",
      "title": "限制載荷與極限載荷",
      "parent": "load-factors",
      "locator": "PHAK C 版 · 5-33",
      "printedPage": "5-33",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=33",
      "paragraphs": [
        "結構設計需考慮預期操作、陣風與其他載荷情況。限制載荷是正常核准設計範圍的重要界線，極限載荷則包含設計安全係數；原書常見 1.5 倍的說明不是允許機師額外使用的操作裕度。",
        "原文列舉舊分類系統的載荷數值，不能只按 normal 或 utility 名稱自行推定某架飛機可做的動作。實際依核准手冊、標牌、構型及重量限制；即使沒有立即斷裂，超載仍可能造成永久變形或累積損傷。"
      ],
      "lessonBlocks": [
        {
          "title": "Limit 與 ultimate：不是可以借用的安全餘額",
          "paragraphs": [
            "Limit load 是設計需承受的限制載荷條件；ultimate load 通常按規定安全係數由限制載荷推得。典型 1.5 倍是設計驗證要求，不是飛行員可自由超過限制再多用 50% 的操作空間。",
            "原文把 ultimate 說成結構一定斷裂的那個點也不精確：它是規定的設計／驗證載荷，不等於每架成品的精確破壞值。實際載荷限制、構型與檢查要求仍依手冊。"
          ]
        },
        {
          "title": "原書類別表要連同認證基礎閱讀",
          "paragraphs": [
            "原書的 normal、utility、acrobatic 數字屬其介紹的傳統類別框架，不能當成任何機型今天都可承受的通用值；襟翼伸出、重量與操作類別可能對限制有不同影響。",
            "不要由「沒有類別牌示」推論可按 utility 使用，也不要把結構強度等同允許特技或尾旋。應查該機 AFM／POH、牌示與核准認證基礎；缺少必要資訊不是放寬限制的理由。"
          ]
        }
      ]
    },
    {
      "id": "steep-turns",
      "english": "Load Factors in Steep Turns",
      "title": "大傾斜轉彎的載荷",
      "parent": "load-factors",
      "locator": "PHAK C 版 · 5-34",
      "printedPage": "5-34",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=34",
      "paragraphs": [
        "在協調、定常、保持高度且採簡化受力的轉彎中，L cos φ = W，因此 n = 1/cos φ。45° 時約 1.41G，60° 時為 2G；越接近 90°，此模型維持高度所需的升力越大。",
        "這不是「任何 60° 傾斜都一定 2G」的定律。下降、卸載或非定常動作可有不同載荷；公式接近 90° 的發散也不是操作建議。使用前先說明水平協調轉彎的條件，並核對飛機的實際限制。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 5-52 · 2 g 轉彎的向量三角形",
          "paragraphs": [
            "在協調、定高、定速且忽略其他垂直力的模型中，60° 傾角使 L／W = 2；水平分量約 1.73 W。圖中的重力 1 g、水平 1.73 g 與合成 2 g 是向量關係，不是 1 + 1.73 的純量相加。",
            "離心力仍是旋轉參考系中的表示；在慣性系，升力水平分量提供向心加速度。不同參考系不要混在同一張受力圖重複加力。"
          ],
          "figure": {
            "label": "Figure 5-52 · Load factor in a coordinated turn",
            "page": "5-34",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=34"
          }
        },
        {
          "title": "Figure 5-53 · 接近 90° 時定高模型發散",
          "paragraphs": [
            "n = 1／cos φ，在 60° 為 2、80° 約 5.76。曲線越來越陡，說明同樣多一點傾角帶來的載荷增量並不固定。當 φ 趨近 90°，此理想定高模型所需升力趨於無限。",
            "這不表示飛機不能短暫達到 90° 傾角，而是不能用這個只靠傾斜升力的模型維持定高。原文「一般航空最大約 60°」不是普遍核准上限；應查限制並辨認機動狀態。"
          ],
          "figure": {
            "label": "Figure 5-53 · Bank angle and load factor",
            "page": "5-34",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=34"
          }
        }
      ]
    },
    {
      "id": "stall-speeds",
      "english": "Load Factors and Stalling Speeds",
      "title": "載荷增加如何提高失速速度",
      "parent": "load-factors",
      "locator": "PHAK C 版 · 5-34",
      "printedPage": "5-34",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=34",
      "paragraphs": [
        "在相同重量、構型與最大升力係數的準定常比較中，正載荷失速速度可近似寫為 Vs,n = Vs,1√n。這說明拉起或水平轉彎時，即使空速高於公布的 1G 數值，也可能達到臨界迎角。",
        "自編例：若該條件下 1G 失速速度為 50 kt，2G 時約為 70.7 kt，並非直接加倍到 100 kt。這是條件化的理論比較，不能忽略結冰、構型、壓縮性或儀表差異，也不能反過來當作任意動作的安全速度。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 5-54 · 用平方根讀失速速度增加",
          "paragraphs": [
            "在相同重量、構型、密度及 C_Lmax 的近似下，V_S,n = V_S,1g √n。左圖先由 g 值取得速度比，右圖再沿對應的原始失速速度線找到結果；各條線不是不同機型的核准性能表。",
            "自編例：1 g 失速速度 50 kt，3 g 約 86.6 kt，4 g 為 100 kt。反過來，速度是原來 1.7 倍時，相同 C_Lmax 對應約 2.89 g，不是精確 3 g。"
          ],
          "figure": {
            "label": "Figure 5-54 · Load factor and accelerated stall speed",
            "page": "5-35",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=35"
          }
        },
        {
          "title": "V_A 不代表任何操縱都不會傷機體",
          "paragraphs": [
            "機動速度與設計操縱載荷及特定假設有關。低於 V_A 也不保證反覆大幅反向操縱、多軸同時輸入或陣風加機動不會超限，不能理解成想怎麼拉都安全。",
            "使用 AFM／POH 指定的重量相關速度與限制，不用原文 1.7 V_S 當通用替代式。簡化同構型模型下重量較低時相應速度會降低，但實際選值及是否另有 V_O 或亂流穿越速度仍依手冊。"
          ],
          "check": {
            "question": "低於 V_A 就能快速左右打滿、同時拉滿嗎？",
            "answer": "不能。反覆反向或多軸大幅輸入不受這種簡單保護假設保障。"
          }
        }
      ],
      "references": [
        {
          "title": "FAA Safety Briefing · Maneuvering speed limits",
          "url": "https://www.faa.gov/sites/faa.gov/files/2022-01/MayJun2015.pdf",
          "checked": "2026-09-13"
        }
      ]
    },
    {
      "id": "maneuver-loads",
      "english": "Load Factors and Flight Maneuvers",
      "title": "不同動作與陣風的載荷",
      "parent": "load-factors",
      "locator": "PHAK C 版 · 5-36",
      "printedPage": "5-36",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=36",
      "paragraphs": [
        "拉起、急轉彎、陣風及突然操縱都可能改變載荷。從下降中恢復時，除了抵抗重量還需改變速度方向，若在高速下猛拉，可能同時逼近結構限制和升力能力界線。",
        "機動速度 VA 不是「以下怎麼操作都安全」的保證；連續大幅反向操縱、多軸同時大幅輸入或其他載荷情況仍可能損害結構。遭遇亂流或需要恢復時，應使用機型規定的速度與程序，不能把通用圖示當成免受損傷的承諾。"
      ],
      "references": [
        {
          "title": "FAA：AFM 對快速反向與多軸操縱的限制說明（AC 25.1581-1）",
          "url": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_25_1581-1_with_change_1.pdf",
          "checked": "2026-09-10"
        }
      ],
      "lessonBlocks": [
        {
          "title": "失速恢復與尾旋：不能套固定 g 值",
          "paragraphs": [
            "失速恢復首先需要解除過大迎角；若過度俯衝後又急拉，可能增加結構負載或再次失速。原文 2～2.5 g 的概括不能作為所有機型恢復程序或允許高度損失的目標。",
            "尾旋涉及失速與自轉，不是普通失速單純多了一個轉動即可完全套用相同程序。原文約 1 g、速度接近某值或恢復約 2.5 g 都不應當成保證；以該機核准能力與訓練程序為準。"
          ]
        },
        {
          "title": "Chandelle、lazy eight 與亂流的比較",
          "paragraphs": [
            "這些機動涉及速度、俯仰與傾角連續變化，載荷也隨時間改變，不能只以機動名稱給一個固定 g。平順操作與能量管理有助減少不必要負荷，但不是超過核准包線的豁免。",
            "亂流可能帶來快速迎角和載荷變化，飛行員操縱又可能與陣風疊加。手冊指定的亂流穿越速度與程序，比把所有情況都簡化成 V_A 更有用；V_NE 下方也不表示可在任何亂流或操縱下安全。"
          ]
        }
      ]
    },
    {
      "id": "vg",
      "english": "Vg Diagram",
      "title": "Vg 圖：速度與載荷包線",
      "parent": "load-factors",
      "locator": "PHAK C 版 · 5-37",
      "printedPage": "5-37",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=37",
      "paragraphs": [
        "Vg 圖以速度為橫軸、載荷因數為縱軸，把升力能力曲線、正負載荷限制及速度界線放在一起。低速端可能先到達最大升力能力，高速端則可能在失速前先超過結構負荷；圖形須對應指定重量與條件。",
        "原書把某交點作為機動速度的概念說明，但簡化包線不涵蓋所有軸向、瞬態與陣風情境。較輕重量的適用 VA 通常較低，應查手冊；也不能把從未超過正 G 上限當成其他部件、負 G 或高速限制都未受影響。"
      ],
      "references": [
        {
          "title": "FAA：AFM 對快速反向與多軸操縱的限制說明（AC 25.1581-1）",
          "url": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_25_1581-1_with_change_1.pdf",
          "checked": "2026-09-10"
        }
      ],
      "currentNote": "原書以簡化 Vg 圖描述 VA 以下的保護，不能擴張為所有操縱與陣風組合皆不會損傷。FAA 補充資料明確提醒：快速、大幅交替輸入或多軸全幅輸入，即使低於機動速度仍可能造成結構損傷。實際以該機型 AFM／POH 為準。",
      "lessonBlocks": [
        {
          "title": "Figure 5-55 · 橫軸速度、縱軸載荷",
          "paragraphs": [
            "先讀彎曲的最大升力能力邊界，再讀正、負結構載荷限制與右方速度界線。某速度下可達到的最大氣動載荷隨速度平方增加，直到與結構限制相交；這是圖中機動速度概念的位置。",
            "正負邊界不一定對稱；圖示 +4.4 g、負載荷、225 mph 等都是特定示意，不是本網站推薦的任何飛機限制。超過限制可能損傷，但不能從顏色邊界精確預測何時必定斷裂。",
            "圖示簡化包線有效性受到重量、構型、高度與速度定義等條件限制。完整設計還有陣風與其他載荷情境；留在這張示意圖的綠色區域，不能保證每一種快速操縱都安全。"
          ],
          "figure": {
            "label": "Figure 5-55 · Typical V–g diagram",
            "page": "5-38",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=38"
          }
        },
        {
          "title": "失速邊界與結構邊界是不同限制",
          "paragraphs": [
            "低速時，可能先達到最大升力係數；較高速時，在到達同一迎角前就可能產生超過結構限制的載荷。這正是為什麼高空速急拉可能同時涉及加速失速與結構風險。",
            "失速曲線不是可穿過而繼續保持相同定常模型的性能線，也不表示失速後有自動結構保護。圖中的綠黃紅區不是保證能完整套到空速表色帶的所有構型限制，須回到該機資料。"
          ],
          "check": {
            "question": "在示意 V–g 圖綠區，就保證可以任意反向操縱嗎？",
            "answer": "不能。圖未涵蓋所有瞬態、多軸、陣風與局部結構負載，仍須遵守手冊限制。"
          }
        }
      ]
    },
    {
      "id": "turn-rate",
      "english": "Rate of Turn",
      "title": "轉彎率與真空速",
      "parent": "load-factors",
      "locator": "PHAK C 版 · 5-38",
      "printedPage": "5-38",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=38",
      "paragraphs": [
        "在協調定常水平轉彎模型中，角速度 ω = g tan φ / V，V 使用真空速及一致單位。固定傾斜角時，速度越大轉彎率越小；固定速度時，增加傾斜角可提高轉彎率，但也提高維持高度所需載荷。",
        "標準率轉彎是每秒 3° 的角度變化概念，不代表任何速度都用同一傾斜角。自編例：同傾斜角下真空速加倍，理論轉彎率減半；地面航跡還受風影響，不能把空中轉彎率公式直接當作地面路徑預測。"
      ],
      "lessonBlocks": [
        {
          "title": "本頁引入：轉彎率的速度用 TAS",
          "paragraphs": [
            "Rate of turn 是方向隨時間改變的速率。簡化協調定高模型可寫 ROT（°/s）≈ 1,091 tan φ／V，其中 V 的單位是 knots TAS；若改用 mph 或 m/s，常數也要改。",
            "同傾角增速，轉彎率下降；同速度增加傾角，轉彎率上升但載荷也增加。這裡先接續 5-38 的引言，後續圖例與半徑計算仍在原有導讀段落。"
          ]
        },
        {
          "title": "Figure 5-56 · 從空速和傾角計算轉彎率",
          "paragraphs": [
            "採協調、定高、定速的簡化模型，ROT = 1,091 tan φ／V，V 為 knots TAS。120 kt、30° 時約 5.25°/s，一圈約 360／5.25 = 68.6 s。這是相對空氣的計算，未加入風造成的對地航跡變化。",
            "三角函數須用正確角度單位，不能將 30 當成弧度；常數也不能搭配 mph。公式描述已建立的轉彎，尚未計入滾入、滾出和反應時間。"
          ],
          "figure": {
            "label": "Figure 5-56 · Turn rate at 120 knots",
            "page": "5-39",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=39"
          }
        },
        {
          "title": "Figure 5-57 · 同傾角增速，轉彎率減半",
          "paragraphs": [
            "240 kt、30° 的轉彎率約 2.62°/s，一圈約 137 s。速度加倍但傾角不變時，轉彎率減半，不是因為飛得快就更快轉完一圈。",
            "比較時固定傾角是關鍵；若同時改變傾角或載荷，不能直接套用倍數結論。"
          ],
          "figure": {
            "label": "Figure 5-57 · Turn rate at 240 knots",
            "page": "5-39",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=39"
          }
        },
        {
          "title": "Figure 5-58 · 維持相同轉彎率須增加傾角",
          "paragraphs": [
            "若要在 240 kt 維持約 5.25°/s，tan φ = 240 × 5.25／1,091，得到約 49.1°。原文反三角函數那一行應讀作 arctan，不能把正切值本身當角度。",
            "傾角增加也提高定高轉彎載荷及所需升力，不能只追求轉彎率而忽略速度、失速裕度與機型限制。"
          ],
          "figure": {
            "label": "Figure 5-58 · Bank for equal turn rate",
            "page": "5-39",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=39"
          }
        }
      ]
    },
    {
      "id": "turn-radius",
      "english": "Radius of Turn",
      "title": "轉彎半徑與速度平方",
      "parent": "load-factors",
      "locator": "PHAK C 版 · 5-39",
      "printedPage": "5-39",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=39",
      "paragraphs": [
        "在相同的協調定常水平轉彎模型中，R = V²/(g tan φ)。固定傾斜角時，真空速加倍使相對空氣的轉彎半徑變成四倍，而非兩倍；這也是高速時需要更多空間的重要原因。",
        "增加傾斜角雖可縮小半徑，卻受載荷、失速裕度與機型限制約束。自編比較：固定轉彎率時 R = V/ω，半徑隨速度成正比；先辨識固定的是傾斜角還是轉彎率，才能選對關係，風中地面軌跡另需分析。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 5-59 · 半徑公式先看單位",
          "paragraphs": [
            "R（ft）≈ V²／[11.26 tan φ]，V 使用 knots TAS。120 kt、30° 得約 2,215 ft。半徑是中心到航跡的距離，所需整個轉彎寬度涉及直徑 2R，不是 R。",
            "此式與 R = V²／(g tan φ) 相同，只是已整合單位換算。低速極限、載荷、風和轉入過程不能從這一個定常公式直接得到。"
          ],
          "figure": {
            "label": "Figure 5-59 · Radius at 120 knots",
            "page": "5-39",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=39"
          }
        },
        {
          "title": "Figure 5-60 · 速度加倍，半徑為四倍",
          "paragraphs": [
            "同樣 30° 時，240 kt 得約 8,861 ft，是 120 kt 的四倍，因為 R 與 V² 成正比。這個結論只在其他條件相同時成立。",
            "原圖文字提到的 Figure 5-41 是交叉引用錯置；此處比較的是 Figure 5-59 與 5-60 的半徑算例，不是 AOA 指示器照片。"
          ],
          "figure": {
            "label": "Figure 5-60 · Radius at 240 knots",
            "page": "5-40",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=40"
          }
        },
        {
          "title": "Figure 5-61 · 由一圈距離核對半徑",
          "paragraphs": [
            "先將速度轉為 ft/s，再乘一圈時間求圓周長，最後除以 2π 得半徑。原書使用 1 kt ≈ 1.69 ft/s 和四捨五入時間，得到約 2,214 ft；與前式的少量差異來自近似。",
            "以精確單位換算或先四捨五入，結果末位可不同；重點是方法與尺度一致，不是把兩個相差一呎的算例當成不同物理。"
          ],
          "figure": {
            "label": "Figure 5-61 · Radius from circumference",
            "page": "5-40",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=40"
          }
        },
        {
          "title": "Figure 5-62 · 峽谷圖是空間需求示例，不是逃脫程序",
          "paragraphs": [
            "圖示 120 kt、30° 的直徑約 4,430 ft，140 kt 則約 6,028 ft，與 5,000 ft 寬度相比差異很大。只增加 20 kt 就讓所需直徑增加約 36%，說明速度平方的影響。",
            "理想圓能放進峽谷不代表實際可安全完成：滾轉過渡、風、地形、爬降性能及反應距離都未納入。不能把減速當成已受困時的通用解方，因為低速與傾斜也會消耗失速裕度。應事先保留地形避讓與轉向空間。"
          ],
          "figure": {
            "label": "Figure 5-62 · Canyon width and turn diameter",
            "page": "5-41",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=41"
          }
        }
      ]
    },
    {
      "id": "weight-balance",
      "english": "Weight and Balance",
      "title": "重量與平衡：兩種限制都要檢查",
      "parent": null,
      "locator": "PHAK C 版 · 5-40",
      "printedPage": "5-40",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=40",
      "paragraphs": [
        "重量平衡不只是確認總重量未超過最大值，還包括重心範圍、局部承載限制及飛行期間的變化。乘員、行李和燃油以不同位置加入，可能在總重量相同時形成不同重心與慣性特性。",
        "自編例：滿座、滿油和滿行李不一定能同時成立，即使每個空間都放得下。起飛、燃油消耗及落地都應納入檢查；本節解釋背後物理，完整計算方法在第十章及機型重量平衡資料。"
      ],
      "lessonBlocks": [
        {
          "title": "重量與 CG 是分開必須滿足的限制",
          "paragraphs": [
            "重量平衡資料需反映實際裝備及適用修訂；不能只用交機時空重，忽略後續改裝。乘員、行李和燃油的重量及位置都要納入，不以座位數直接推定可載滿油。",
            "檢查總重量、CG、局部載重和飛行過程的變化。燃油消耗會改變重量與 CG，起飛合格不能直接保證落地也符合。原文對氣球或重量移動航空器免計算的概括，不能取代各型號的載重與懸吊限制。"
          ]
        }
      ]
    },
    {
      "id": "weight-performance",
      "english": "Effect of Weight on Flight Performance",
      "title": "重量如何影響性能",
      "parent": "weight-balance",
      "locator": "PHAK C 版 · 5-42",
      "printedPage": "5-42",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=42",
      "paragraphs": [
        "重量增加會提高支撐所需的升力，通常使起飛及落地距離增加、爬升能力降低，並提高相同構型下的失速速度。這些結果與可用動力、阻力及能量需求相連，不能只看引擎是否能讓飛機離地。",
        "自編例：跑道足夠讓較重的飛機短暫離地，仍不代表爬升梯度或越障能力足夠。實際變化不是固定百分比，應依手冊圖表同時考慮重量、壓力高度、溫度及跑道等指定條件。"
      ],
      "lessonBlocks": [
        {
          "title": "較重時的性能，要用相同條件比較",
          "paragraphs": [
            "在其他條件相同時，重量增加通常提高所需升力、起飛與降落速度需求，增加距離並降低爬升表現。實際結果還受密度高度、風、跑道和動力影響，不能用固定重量百分比直接推算所有性能。",
            "有座位、行李空間與油箱容量，不代表三者可同時裝滿。即使總重合格，CG 或行李艙局部限制仍可能先達上限；以當次 AFM／POH 計算判定。"
          ]
        }
      ]
    },
    {
      "id": "weight-structure",
      "english": "Effect of Weight on Aircraft Structure",
      "title": "重量、G 負荷與局部結構",
      "parent": "weight-balance",
      "locator": "PHAK C 版 · 5-42",
      "printedPage": "5-42",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=42",
      "paragraphs": [
        "相同載荷因數下，重量越大，結構承受的相關總負荷越大，例如 3G 時每增加一單位重量，對應支承負荷增加約三單位。總重量限制和座椅、地板、行李艙的局部承載限制都必須遵守。",
        "自編例：總重與重心合格，但把重物集中在載重上限較低的行李位置，仍可能超出局部結構限制。超載不一定立刻看見變形，不能以「上次飛過沒事」作為結構安全證據。"
      ],
      "lessonBlocks": [
        {
          "title": "nW 是總載荷示例，局部結構另有要求",
          "paragraphs": [
            "同樣 3 g 的簡化負載下，多 100 lb 重量對應多約 300 lbf 氣動載荷。這解釋超重在機動中被放大的結果，但不代表每個構件都均勻分擔相同增量。",
            "座椅、地板及行李艙可能有個別重量或面積載荷限制，即使總重與 CG 合格仍不能超過。原文傳統類別的 3.8／4.4／6.0 g 是背景示例，不是每架機的通用限制；超重能起飛也不代表結構允許。"
          ]
        }
      ]
    },
    {
      "id": "weight-control",
      "english": "Effect of Weight on Stability and Controllability",
      "title": "重量與可操縱性",
      "parent": "weight-balance",
      "locator": "PHAK C 版 · 5-42",
      "printedPage": "5-42",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=42",
      "paragraphs": [
        "重量及其分布會改變飛機的慣性、配平需求和操縱反應，超出核准範圍後不能沿用正常裝載下的操縱預期。穩定性是受擾後的反應，可操縱性是控制所能達成的能力，兩者須分別看待。",
        "自編例：更大慣性可能使飛機對相同力矩反應較慢，但這不表示它更容易安全恢復或更有失速裕度。評估時應分辨總重與重心各自造成什麼影響，而不是用「重的比較穩」一句話取代限制。"
      ],
      "lessonBlocks": [
        {
          "title": "總重量、CG 與轉動慣量都影響操縱",
          "paragraphs": [
            "同一總重量與 CG，若重量更分散在遠離旋轉軸的位置，轉動慣量可更大，相同力矩下角加速度較小。不能只看 CG 相同就判定操縱感和尾旋特性完全一致。",
            "超出核准重量時，性能、結構及操縱可能不再符合已證明的條件；也不能由原文概述推論所有機型一超重就以完全相同方式失穩。"
          ]
        }
      ]
    },
    {
      "id": "distribution",
      "english": "Effect of Load Distribution",
      "title": "重心位置與分布慣性",
      "parent": "weight-balance",
      "locator": "PHAK C 版 · 5-43",
      "printedPage": "5-43",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=43",
      "paragraphs": [
        "對典型傳統尾翼設計，較前重心常需要更大尾翼向下作用力，使機翼需承受額外升力需求及阻力；較後重心可能減少這項需求，卻降低縱向穩定和恢復裕度。這不是鼓勵把重心推到後界，更不能超界。",
        "即使總重和重心相同，把重量分散到離轉軸更遠處，也會增加轉動慣量，改變操縱反應。自編例：將兩件相同貨物對稱向前後移動可保持重心，卻未必保持相同俯仰反應，顯示重心位置不是分布的全部資訊。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 5-63 · 前 CG 可能需要更多尾翼向下力",
          "paragraphs": [
            "在圖示傳統布局中，前 CG 需要較大的平衡力矩與尾翼下壓，主翼為支承重量及尾翼下壓而承受更多負荷，可增加阻力與失速速度。這不表示實際總重量被尾翼改變。",
            "後 CG 在包線內可能減少配平阻力，但不能為省油越過後限；穩定和降低迎角的操縱裕度可能不足。零位配平標記也不等於尾翼受力為零。"
          ],
          "figure": {
            "label": "Figure 5-63 · Load distribution and tail force",
            "page": "5-43",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=43"
          }
        },
        {
          "title": "CG 前後限是完整設計結果，不是固定幾吋",
          "paragraphs": [
            "前限涉及低速抬頭、拉平、配平及地面操作等條件；後限涉及穩定性、控制裕度及失速／尾旋恢復等。不能以原文一吋、兩吋的例子替代某機型包線。",
            "Flat spin 的複雜動態不能只歸因於離心力把尾巴拉出去；後 CG 與質量分布可能使恢復困難，但某個後移量並不對所有機型產生同樣結果。配平也不能修正不合法的載重位置。"
          ]
        }
      ]
    },
    {
      "id": "high-speed",
      "english": "High Speed Flight",
      "title": "高速飛行：壓縮性與控制範圍",
      "parent": null,
      "locator": "PHAK C 版 · 5-44",
      "printedPage": "5-44",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=44",
      "paragraphs": [
        "高速飛行需把局部流速、壓縮性、震波及操縱效能納入分析。整架飛機的自由流 Mach 數尚未到 1，翼面部分區域仍可能先達音速甚至超音速，造成阻力、壓力分布與俯仰力矩變化。",
        "低速近似並非全部失效，但必須知道哪些假設不再足夠。實際飛行同時受速度、Mach、重量、高度及構型限制，不能只看空速指針未超過某值就推定高速裕度充足。"
      ],
      "lessonBlocks": [
        {
          "title": "高速不會讓物理定律失效，而是需要更完整模型",
          "paragraphs": [
            "接近音速時，密度變化、壓縮波與震波更重要，低速不可壓縮近似可能不足。牛頓定律、質量與能量守恆仍然成立，不是原文所說的低速理論在某一點全部失效。",
            "主題從速度名稱開始，再看局部流場、邊界層、震波和操縱影響，避免把全機 Mach 與翼面局部 Mach 混在一起。"
          ]
        }
      ]
    },
    {
      "id": "subsonic-supersonic",
      "english": "Subsonic Versus Supersonic Flow",
      "title": "次音速與超音速流動",
      "parent": "high-speed",
      "locator": "PHAK C 版 · 5-44",
      "printedPage": "5-44",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=44",
      "paragraphs": [
        "低 Mach 數時，常可在某些計算中忽略小幅密度變化；接近音速時，壓縮性對流場的重要性提高。空氣本身一直是可壓縮且有黏性的流體，近似不是材料性質突然改變，也沒有適用所有高度的單一節數門檻。",
        "次音速擾動可向上游傳遞，超音速流動的資訊傳播方向受到限制，壓縮變化可能集中成震波。要分辨自由流和局部流速：同一機翼附近可同時存在次音速及超音速區域。"
      ],
      "lessonBlocks": [
        {
          "title": "低速近似看 Mach 與所需精度，不只看 knots",
          "paragraphs": [
            "空氣一直具有可壓縮性與黏性。低 Mach 流可在部分分析忽略密度變化，但邊界層與失速仍不能忽略黏性；原文約 260 kt 不是全球通用的不可壓縮門檻。",
            "機翼使局部氣流加速，因此飛機整體仍次音速時，上表面某處可能已到音速或超音速。這是跨音速問題的關鍵，而不是必須全機先飛過 Mach 1 才有震波。"
          ]
        }
      ]
    },
    {
      "id": "speed-ranges",
      "english": "Speed Ranges",
      "title": "速度區間與臨界 Mach",
      "parent": "high-speed",
      "locator": "PHAK C 版 · 5-44",
      "printedPage": "5-44",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=44",
      "paragraphs": [
        "Mach 數是真空速除以當地音速，音速隨絕對溫度而變。原書用約 0.75～1.20 示意穿音速區間，但這是概括分類；某翼面何時開始出現局部音速流，仍取決於設計、迎角及狀態。",
        "臨界 Mach 是局部流動首次達音速時的自由流 Mach，不等於飛機整體已達 Mach 1，也不等於最大操作 Mach。VMO 與 MMO 是操作限制，需依該機型使用；教材區間和氣動現象不能代替限制值。"
      ],
      "points": [
        "原書概略分區：次音速低於約 M 0.75；穿音速約 M 0.75～1.20。",
        "超音速區間約 M 1.20～5.00，高超音速約 M 5 以上；分區邊界是概括描述。",
        "臨界 Mach、阻力急增點與 MMO 各自回答不同問題，不能當作同一個速度名稱。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 5-64 · 臨界 Mach 看第一個局部音速點",
          "paragraphs": [
            "圖由局部全次音速，進到某點達音速，再形成局部超音速區與震波。Mcrit 是首次出現局部 Mach 1 時的自由流 Mach，不是自由流本身已到 1。",
            "圖上 0.50、0.72、0.77 屬示意翼型與狀態。臨界值隨翼型、迎角及構型改變，不是所有飛機共用的巡航指標。"
          ],
          "figure": {
            "label": "Figure 5-64 · Local sonic and supersonic flow",
            "page": "5-45",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=45"
          }
        },
        {
          "title": "Figure 5-65 · 臨界 Mach 與阻力發散不同",
          "paragraphs": [
            "先有局部音速，不一定立刻有劇烈阻力增加；隨速度進一步提高，震波及分離等可造成阻力快速上升。圖中的阻力發散點與 Mcrit 是不同概念，兩者差距沒有通用固定百分比。",
            "原書將次音速、跨音速等分段作入門範圍，邊界仍屬概括。V_MO 與 M_MO 是最大操作限制，不是最佳巡航建議；應同時遵守適用速度限制，而不是只選其中一個。"
          ],
          "figure": {
            "label": "Figure 5-65 · Critical Mach and drag divergence",
            "page": "5-45",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=45"
          }
        }
      ]
    },
    {
      "id": "mach-airspeed",
      "english": "Mach Number Versus Airspeed",
      "title": "IAS、TAS 與 Mach 的差別",
      "parent": "high-speed",
      "locator": "PHAK C 版 · 5-45",
      "printedPage": "5-45",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=45",
      "paragraphs": [
        "IAS 是儀表指示，CAS 修正儀表及位置誤差，TAS 是相對空氣的實際速度，Mach 則以當地音速為分母。密度下降時，相同指示空速通常對應較高真空速，但高速還必須考慮可壓縮性修正，不能把所有空速視為相同量。",
        "在溫度隨高度下降的區間，固定 Mach 的爬升可能伴隨 TAS 下降；若溫度不再下降，這個趨勢也需重新判斷。高空低速與高速限制可能逐漸靠近，但不是所有飛機都有固定同一高度的 coffin corner。"
      ],
      "lessonBlocks": [
        {
          "title": "Mach = TAS／當地音速：兩者要用相同單位",
          "paragraphs": [
            "音速主要取決於氣體溫度。原書將 661 或 574 的音速標為 KCAS 不精確，這是局部傳播速度以 knots 表示，不能當成經高度表式修正的校正空速。",
            "IAS、CAS、EAS、TAS 有不同修正與用途；相同動壓直接對應的是 EAS 關係，跨音速附近不能把 CAS 完全當作動壓速度。原文在高空保持同一 CAS 卻宣稱動壓完全相同，應視為簡化。"
          ]
        },
        {
          "title": "固定 Mach 爬升，TAS 不一定一直下降",
          "paragraphs": [
            "在溫度下降的高度範圍，固定 Mach 的 TAS 會下降；進入等溫層時，固定 Mach 的 TAS 可近似不變。CAS／IAS 仍會受壓力等關係影響，因此不可將三種速度都說成隨高度無限下降。",
            "原書海平面一路以 M_MO 爬升是概念假設，不是核准操作程序；實際爬升速度計畫、轉換高度與限制按機型及程序。"
          ]
        }
      ]
    },
    {
      "id": "boundary-layer",
      "english": "Boundary Layer",
      "title": "邊界層：局部速度的變化",
      "parent": "high-speed",
      "locator": "PHAK C 版 · 5-46",
      "printedPage": "5-46",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=46",
      "paragraphs": [
        "黏性使靠近表面的氣流速度相對壁面較低，向外逐漸接近外部流速，形成邊界層。它雖薄，卻會影響摩擦、有效外形與分離；高速外部流動分析忽略黏性時，仍不能忽略邊界層帶來的實際後果。",
        "層流與紊流是邊界層中的不同流動狀態，附著或分離則是另一個分類。自編辨別：一段紊流邊界層可以仍貼附於翼面，不表示該翼段已失速；層流也不保證永遠不會分離。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 5-66 · 邊界層不是固定順序的三個階段",
          "paragraphs": [
            "流速在貼壁處接近零，向外接近主流。圖示先層流、後轉捩再紊流，是一種情況；不是每個表面都必須依同樣位置和順序經歷。",
            "紊流邊界層內仍有近壁黏性層，不能說紊流區全是無規則大渦。圖的厚度經放大以便閱讀，不能拿來量實際翼面厚度。"
          ],
          "figure": {
            "label": "Figure 5-66 · Boundary layer and transition",
            "page": "5-47",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=47"
          }
        }
      ]
    },
    {
      "id": "laminar",
      "english": "Laminar Boundary Layer Flow",
      "title": "層流邊界層",
      "parent": "boundary-layer",
      "locator": "PHAK C 版 · 5-46",
      "printedPage": "5-46",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=46",
      "paragraphs": [
        "層流中的速度變化較有規律，橫向混合較弱，通常具有較低表面摩擦。維持層流有助降低某些阻力，但其發展受表面狀態、壓力梯度及流動條件影響，不是只靠外表光亮便能保證。",
        "當下游壓力上升時，近壁低速流可能較容易失去向前流動的能力。這說明低摩擦不等於在所有條件下更抗分離；設計需要在摩擦、分離和其他需求間取捨。"
      ],
      "lessonBlocks": [
        {
          "title": "層流摩擦較小，但不保證更能抵抗分離",
          "paragraphs": [
            "層流流層較有秩序，在可比條件下表面摩擦通常較小。能維持多長距離與壓力梯度、表面、雷諾數及外界擾動等有關。",
            "層流也可能直接分離，並非一定先轉成紊流。因此氣動設計不是只追求越多層流越好，而要兼顧全機流場與失速特性。"
          ]
        }
      ]
    },
    {
      "id": "turbulent",
      "english": "Turbulent Boundary Layer Flow",
      "title": "紊流邊界層",
      "parent": "boundary-layer",
      "locator": "PHAK C 版 · 5-46",
      "printedPage": "5-46",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=46",
      "paragraphs": [
        "紊流包含速度脈動和混合，使外側較高動量流體更有效地交換到近壁區，通常增加摩擦阻力，也可能提高抵抗逆壓力梯度分離的能力。它不是整片氣流已經脫離機翼的同義詞。",
        "原書描述層流轉成紊流的過程，但轉捩位置不是固定比例，也不是每一條流線都必然依同樣順序演變。自編例：渦流產生器可能增加局部混合來延緩分離，因此額外小渦流不必然使整體性能更差。"
      ],
      "lessonBlocks": [
        {
          "title": "混合作用帶來摩擦，也可能延緩分離",
          "paragraphs": [
            "紊流有較強動量混合，讓近壁流可獲得外側較高動量，因而在某些逆壓梯度下比層流更能保持附著；代價通常是更大表面摩擦。",
            "紊流邊界層不是飛機遭遇大氣亂流的同義詞，也不表示翼面已失速。這兩種尺度和觀察對象不同。"
          ]
        }
      ]
    },
    {
      "id": "separation",
      "english": "Boundary Layer Separation",
      "title": "邊界層分離與渦流產生器",
      "parent": "boundary-layer",
      "locator": "PHAK C 版 · 5-46",
      "printedPage": "5-46",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=46",
      "paragraphs": [
        "當近壁流動不足以克服沿程壓力上升等影響時，可能停滯、逆流並離開表面，改變壓力分布和尾流。分離可增加阻力並降低升力能力，範圍及影響視狀態而定，不能把小局部分離一概等同全翼完全失速。",
        "渦流產生器藉混合把較高動量帶入近壁區，可在設計條件下延緩分離，包括某些震波造成的分離。位置、尺寸及適用範圍具有機型依據，不能自行加裝或把它視為不受迎角限制的裝置。"
      ],
      "lessonBlocks": [
        {
          "title": "分離、轉捩與 vortex generator 的角色",
          "paragraphs": [
            "不利壓力梯度可能讓近壁流無法維持向前運動，產生分離。分離可增加阻力並降低升力能力，但不等於升力立即全部消失。",
            "Vortex generators 藉小渦混合提高近壁動量，可能延後特定分離，並非憑空增加能量。尺寸、角度及位置都屬設計內容，原文 12°～15° 不是供讀者自行安裝的規格。"
          ]
        }
      ]
    },
    {
      "id": "shock",
      "english": "Shock Waves",
      "title": "震波、波阻與壓力損失",
      "parent": "high-speed",
      "locator": "PHAK C 版 · 5-46",
      "printedPage": "5-46",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=46",
      "paragraphs": [
        "震波是壓力、密度、溫度及速度在很短距離內急劇改變的區域。對正震波，超音速流通過後變成次音速，靜壓和靜溫上升而總壓下降；不能把總壓損失誤說成所有能量憑空消失。",
        "震波後的壓力上升可能促成邊界層分離，增加阻力並引起抖振、配平及操縱變化。局部超音速區可在自由流仍低於 Mach 1 時出現，因此不能等整架飛機達音速才開始考慮震波效應。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 5-67 · 正震波前後哪些量改變？",
          "paragraphs": [
            "對理想氣體的絕熱正震波，超音速流降至次音速，靜壓、靜溫與密度上升；總壓下降，而總溫保持不變。總壓損失不等於總能量憑空消失，原文將兩者等同的敘述需修正。",
            "正震波垂直來流，斜震波則有不同幾何及下游條件，不能將所有震波都說成通過後必定全次音速。圖中翼面與前方弓形波是不同狀態的示意。",
            "震波與邊界層互相作用可造成分離、阻力及抖振。原文把波阻只視為震波誘發分離也不完整；可壓縮流中的波阻與分離阻力應辨別。"
          ],
          "figure": {
            "label": "Figure 5-67 · Shock waves",
            "page": "5-47",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=47"
          }
        }
      ],
      "references": [
        {
          "title": "NASA · Normal shock relations",
          "url": "https://www.grc.nasa.gov/www/BGH/normal.html",
          "checked": "2026-09-13"
        }
      ]
    },
    {
      "id": "sweepback",
      "english": "Sweepback",
      "title": "後掠翼：延後壓縮性效應的取捨",
      "parent": "high-speed",
      "locator": "PHAK C 版 · 5-48",
      "printedPage": "5-48",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=48",
      "paragraphs": [
        "後掠可減少來流垂直於前緣的速度分量，作為理解延後某些壓縮性效應的入門模型。這不表示飛機的真空速真的降低，也不表示其他流向分量完全沒有氣動作用。",
        "後掠與錐度可能增加翼尖先失速及俯仰上仰的設計挑戰；某些 T 尾設計在大迎角下還有尾翼陷入翼後尾流的深失速風險。實際有無此風險及抖桿、推桿裝置的觸發依機型，不能套用全機型固定門檻。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 5-68 · 後掠降低法向分量，不是飛機真變慢",
          "paragraphs": [
            "簡化無限後掠翼觀點中，垂直特徵線的速度分量減少，可延後部分可壓縮性效應。圖示 Mach 0.85 與法向分量 0.70 不是兩個不同的飛機空速。",
            "有限機翼有展向流動、扭轉和複雜載荷，不能只乘一個 cos 就得到所有性能。後掠可能帶來低速與翼尖失速上的取捨。"
          ],
          "figure": {
            "label": "Figure 5-68 · Sweepback and velocity components",
            "page": "5-48",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=48"
          }
        },
        {
          "title": "Figure 5-69 · 翼尖失速與俯仰耦合",
          "paragraphs": [
            "某些後掠翼的外側載荷位於 CG 後方，當外側升力先減少時，可能出現鼻上力矩，進一步增大迎角。這是特定布局的風險，不是所有後掠翼都有相同失速順序。",
            "設計可用扭轉、翼型或流動控制等改善，不能由一張俯視圖推定整架飛機的失速恢復能力。"
          ],
          "figure": {
            "label": "Figure 5-69 · Wingtip pre-stall",
            "page": "5-49",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=49"
          }
        },
        {
          "title": "Figure 5-70 · 深失速與警告／推桿系統",
          "paragraphs": [
            "某些 T-tail 布局在大迎角時尾翼可能被主翼尾流遮蔽，降低低頭控制能力，造成 deep stall 風險。鼻下姿態或空速增加也不能單獨證明迎角已降到可恢復區域。",
            "Stick shaker 是警告，stick pusher 是主動介入，功能不同且不是每架飛機都裝。原文固定提前幾節或一節介入的說法只是概括，實際邏輯、限制及失效處置依機型。"
          ],
          "figure": {
            "label": "Figure 5-70 · T-tail and deep-stall illustration",
            "page": "5-49",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=49"
          }
        }
      ]
    },
    {
      "id": "buffet",
      "english": "Mach Buffet Boundaries",
      "title": "高空抖振邊界與裕度",
      "parent": "high-speed",
      "locator": "PHAK C 版 · 5-49",
      "printedPage": "5-49",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=49",
      "paragraphs": [
        "高空可用速度範圍受到低速升力需求及高速壓縮性效應等界線限制。重量、載荷因數與高度變化可能縮小裕度；飛機即使處於平直巡航時的可接受速度，轉彎增加載荷後也不代表仍有相同餘裕。",
        "低速側與高速側抖振的詳細機制取決於機翼和操作狀態，不能只憑「有抖動」就猜測應加速或減速。需要依機型顯示、限制和程序辨識，原圖或範例中的交會點不是所有飛機的通用飛行高度。"
      ],
      "lessonBlocks": [
        {
          "title": "高低速抖振邊界由重量、載荷與高度共同決定",
          "paragraphs": [
            "高空高速端可能受可壓縮性及震波影響，低速端在所需升力增加時也可能遇到抖振。重量、轉彎載荷及陣風都可減少可用裕度，因此不能只以一個固定 Mach 判定安全範圍。",
            "Coffin corner 是裕度收窄的概念，不必等同「1 g 失速 Mach 恰好等於 M_MO」的一個點。實際最高操作高度與機動抖振裕度需按 AFM 資料，而不是以理論交點作為可飛目標。"
          ]
        }
      ]
    },
    {
      "id": "high-speed-controls",
      "english": "High Speed Flight Controls",
      "title": "高速操縱面、增升與配平",
      "parent": "high-speed",
      "locator": "PHAK C 版 · 5-49",
      "printedPage": "5-49",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=49",
      "paragraphs": [
        "高速動壓下操縱面負荷增加，某些機型利用內外側副翼分工、擾流板協助滾轉及液壓或電力作動。擾流板也可用於減速或接地後卸升力，但各模式的展開邏輯及可用功能依系統而異。",
        "前緣縫翼與襟翼改善低速升力能力，可變安裝角水平安定面處理較大配平需求，讓升降舵保有操縱範圍。不能把原書機型的副翼鎖定方式或人工備援套到所有飛機；失去助力後是否仍能人工操縱須查該機型。"
      ],
      "lessonBlocks": [
        {
          "title": "Figure 5-71 · 控制面名稱與功能分開看",
          "paragraphs": [
            "圖列出舊型 737、727 的代表性配置，幫助辨識襟翼、縫翼、副翼、擾流板與各種 tabs。不是所有同系列或現代噴射機都用同一配置、尺寸或連動方式。",
            "Spoilers 可減升、增阻或協助滾轉，飛行與地面功能及啟用條件依設計。內外側副翼的分工、鎖定以及擾流板差動也不是每種機型共用的邏輯。",
            "前後緣增升裝置共同改善低速升力能力，但原文可降低 50 kt 的例子不是一般保證；任何構型變化都需遵守速度與使用限制。"
          ],
          "figure": {
            "label": "Figure 5-71 · Representative transport control surfaces",
            "page": "5-50",
            "url": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=50"
          }
        },
        {
          "title": "可變安裝角水平安定面：配平範圍與升降舵餘量",
          "paragraphs": [
            "大型飛機的 CG、速度與增升裝置變化需要較大的配平能力。改變安定面安裝角可提供主要平衡力矩，讓升降舵保留進一步操縱的行程，並可能減少大偏轉帶來的阻力。",
            "這不是安定面與升降舵作用完全互不影響，也不代表任何時候升降舵都在中立位。安定面很有力，誤配平或故障須按機型程序處置，不能用本章比喻代替實機檢查單。"
          ]
        },
        {
          "title": "動力操縱失效後，不一定能靠 tabs 接手",
          "paragraphs": [
            "液壓或電力作動器可提供飛行員無法直接施加的舵面力。控制指令與實際舵面之間還可能有機械、電子與增穩系統，並非所有設計都是簡單角度跟隨。",
            "原文說完全失去動力後可手動控制 tabs，只適用具備相應備援機構的機型；有些飛機沒有 manual reversion。是否仍可控制、有哪些剩餘系統，必須查該機設計與程序，不能從通用教材推定。"
          ]
        }
      ]
    },
    {
      "id": "summary",
      "english": "Chapter Summary",
      "title": "全章統整：用條件連結概念",
      "parent": null,
      "locator": "PHAK C 版 · 5-51",
      "printedPage": "5-51",
      "source": "https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page=51",
      "paragraphs": [
        "本章從四力與阻力曲線，延伸到尾流、地面效應、穩定性、飛行動作、失速、螺旋槳、載荷與高速流動。閱讀成果應是能說明每個結論的條件，而不是背下速度越大、迎角越大之類未限定情境的句子。",
        "自編複習：分別解釋 60° 傾斜何時等於 2G、P-factor 和扭矩作用在哪個軸、重心合格為何仍需查局部載重，以及紊流為何不等於分離。最後把任何涉及操作數值的答案對回 AFM／POH，避免以教學例子取代機型限制。"
      ],
      "lessonBlocks": [
        {
          "title": "全章收束：力、力矩、能量與限制一起看",
          "paragraphs": [
            "先用四力與力矩理解平衡，再用迎角、密度及速度解釋升阻力；接著辨認穩定、載荷、失速與高速流場的限制。每個簡化模型都需要注明保持不變的條件與參考座標。",
            "轉彎數字、CG 圖及 V–g 包線都能幫助推理，但不能取代該機當次重量、構型與 AFM／POH。能解釋為什麼某操作提高負載或降低裕度，是理解本章的目標，並不是背完示例就取得任何機型的操作資格。"
          ]
        }
      ]
    }
  ],
  "confusions": [
    {
      "title": "失速與引擎停止",
      "clarification": "空氣動力失速是機翼流動問題，不等於發動機熄火。",
      "example": "有動力時也能失速。"
    },
    {
      "title": "靜穩定與動穩定",
      "clarification": "初始回復傾向不等於振盪一定隨時間減小。",
      "example": "最初回到平衡方向後，振幅仍可能增大。"
    },
    {
      "title": "60° 傾斜與 2G",
      "clarification": "2G 結論限於簡化的協調定常水平轉彎，不能只憑瞬間傾斜角推定載荷。",
      "example": "卸載或下降時的 60° 傾斜不必有同樣載荷。"
    },
    {
      "title": "VA 以下與任意操縱",
      "clarification": "機動速度並非涵蓋連續反向、多軸輸入及所有陣風情境的結構保證。",
      "example": "低於 VA 仍不能把方向舵快速反覆全幅踩到底。"
    },
    {
      "title": "扭矩與 P-factor",
      "clarification": "扭矩反作用主要造成滾轉，P-factor 是推力分布不對稱造成偏航；方向需保留旋向前提。",
      "example": "不能把所有向左偏航都叫引擎扭矩。"
    },
    {
      "title": "層流、紊流與分離",
      "clarification": "層流和紊流都可能附著於翼面；分離是氣流離開表面的另一現象。",
      "example": "渦流產生器增加混合，可能延緩分離。"
    },
    {
      "title": "臨界 Mach 與 MMO",
      "clarification": "前者是局部首次達音速的自由流條件，後者是機型最大操作 Mach 限制。",
      "example": "自由流低於 Mach 1 時仍可能出現局部超音速區及震波。"
    }
  ],
  "scenario": "自編算例：假設某構型 1 g 失速速度為 50 kt，在相同重量與構型、協調等高 60° 轉彎的簡化條件下，n＝2，估算失速速度為 50×√2，約 70.7 kt。",
  "question": "上述 50 kt、2 g 的簡化算例約得到多少？",
  "options": [
    "50 kt",
    "70.7 kt",
    "100 kt"
  ],
  "answer": 1,
  "explanation": "相同重量與構型下使用 50×√2≈70.7 kt；結果不代表實際操作限制。",
  "verified": true,
  "reader": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=98",
  "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=98",
  "detailMode": "outline",
  "checked": "2026-09-10",
  "coverageNote": "全章 62 節均已加入深入講解，涵蓋 5-1～5-51，附 Figure 5-1～5-71 官方原圖指引、比較表、自編算例與理解練習。內容為原創閱讀輔助，補充原文近似、單位及適用條件，不是逐字翻譯或機型操作手冊。"
};
