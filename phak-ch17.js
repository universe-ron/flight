export const chapter={
  "id": "phak25c-17",
  "number": 17,
  "title": "航空醫學與人因",
  "english": "Aeromedical Factors",
  "section": "第 17 章；17-1～17-29，全章目錄逐節講解",
  "goal": "理解生理限制、錯覺、疲勞與飛行前自我評估。",
  "primer": "身體、睡眠、壓力及藥物可能影響注意力與判斷。持有體檢資格不代表每一天都處於同樣狀態；飛行前仍需依適用程序評估當下狀況。",
  "terms": [
    "Hypoxia · 缺氧",
    "Spatial disorientation · 空間迷向",
    "Fatigue · 疲勞"
  ],
  "prompts": [
    "座艙高度上升且同伴反應變慢時，哪些原因與設備狀態需要立即處理？",
    "窄跑道、黑洞進場與過亮燈光分別可能誘發什麼錯誤修正？如何交叉確認？",
    "體檢仍有效、八小時已過、血氧儀正常，各自為何都不足以單獨證明適飛？"
  ],
  "keyPoints": [
    "四類缺氧、過度換氣、CO 與減壓症分開理解",
    "以可靠參考辨認前庭、進場及夜間錯覺",
    "體檢資格與當日健康、疲勞、酒精和藥物狀態分開評估",
    "供氧與潛水等待使用正確高度基準及適用條件",
    "分辨視神經盤盲點、夜間中央盲區、SVS 與 EFVS"
  ],
  "detailSections": [
    {
      "id": "intro",
      "english": "Introduction",
      "title": "航空醫學導論",
      "parent": null,
      "locator": "PHAK C 版 · 17-1",
      "printedPage": "17-1",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=1",
      "paragraphs": [
        "飛行不只考驗航空器，也考驗人的感官、供氧、注意力與決策。本章把身體如何取得氧氣、如何感受姿態與看見外界，連結到高空、夜間、疲勞及壓力環境，說明為何自覺正常仍可能發生判斷錯誤。",
        "學習重點是提早辨識風險、建立適當操作習慣與求助時機。以下屬航空生理與 FAA 制度教材；個人疾病、用藥與適飛資格須由醫療人員及航空醫學檢查醫師評估，不能只靠章末題目自行判定。"
      ],
      "references": [
        {
          "title": "FAA：航空體檢申請與 AME 檢查流程",
          "url": "https://www.faa.gov/pilots/medical_certification/get",
          "checked": "2026-09-12"
        }
      ]
    },
    {
      "id": "medical",
      "english": "Obtaining a Medical Certificate",
      "title": "取得航空體檢證明",
      "parent": null,
      "locator": "PHAK C 版 · 17-2",
      "printedPage": "17-2",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=2",
      "paragraphs": [
        "FAA 航空體檢透過 MedXPress 申請及 AME 檢查，依所需飛行權利評估適用的體檢等級。一般第三等與私人飛行、第二等與商業飛行、第一等與部分航線運輸職務相關，但實際要求、有效期間及例外需按資格與操作查規則。",
        "準備訓練時可先了解病史及文件需求，誠實提供診斷、治療與用藥資料。AME 可能核發、轉送 FAA 審查或作其他處理；持有未到期證明仍須評估當天健康，BasicMed 等替代制度也有獨立條件，並非人人自動適用。"
      ],
      "references": [
        {
          "title": "FAA：航空體檢申請與 AME 檢查流程",
          "url": "https://www.faa.gov/pilots/medical_certification/get",
          "checked": "2026-09-12"
        },
        {
          "title": "14 CFR 61.23：體檢要求與有效期間",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-D/part-61/subpart-A/section-61.23",
          "checked": "2026-09-12"
        },
        {
          "title": "FAA：BasicMed 現行資格與操作條件",
          "url": "https://www.faa.gov/licenses_certificates/airmen_certification/basic_med",
          "checked": "2026-09-12"
        },
        {
          "title": "14 CFR 61.53：醫療狀態不符時禁止操作",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-D/part-61/subpart-A/section-61.53",
          "checked": "2026-09-12"
        }
      ],
      "currentNote": "版本差異：BasicMed 的航空器／載員範圍已有擴大，不能沿用舊版的 6,000 lb／6 人限制。現行官方入口列出不超過 12,500 lb、核准不超過 7 名乘員且實際不超過 6 名乘客等條件；仍須逐項符合資格、醫療及操作要求。",
      "points": [
        "申請流程：MedXPress 填寫 → 保留確認碼 → 備妥所需病史與用藥文件 → 合格 AME 檢查 → 依結果核發或送 FAA 審查。",
        "AME 是獲指定執行航空體檢的醫師；一般診所的健康證明不自動等於 FAA medical certificate。",
        "同一張證明的可用期間與執行的權利、檢查時年齡等有關；第一等權利到期，不一定代表所有較低等權利在同日一併失效。",
        "學生機師證照與醫療證明是不同文件；不能沿用早期兩者合一的制度理解現況。",
        "BasicMed、運動機師及不需一般體檢的特定操作各有條件；「不是每次都要 medical」不等於免除當日安全適飛責任。",
        "自編情境：證明仍有效，但服藥後嗜睡或急性疾病已影響操作，仍可能不符合 61.53；到期日不是唯一判準。"
      ]
    },
    {
      "id": "health",
      "english": "Health and Physiological Factors Affecting Pilot Performance",
      "title": "健康與生理因素如何影響表現",
      "parent": null,
      "locator": "PHAK C 版 · 17-3",
      "printedPage": "17-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=3",
      "paragraphs": [
        "感冒、睡眠不足、藥物、焦慮與高溫會同時影響注意力、反應和身體耐受度，風險常互相加重。機師可能最先出現的是漏看、漏聽或計算變慢，而不是明顯疼痛，因此不能只問自己有沒有不舒服。",
        "飛前可用 IMSAFE 逐項檢查疾病、藥物、壓力、酒精、疲勞及情緒。若已知狀況會妨礙安全操作，應調整或停止飛行並取得合適協助；排程壓力不會改變人體的生理限制。"
      ],
      "references": [
        {
          "title": "14 CFR 61.53：醫療狀態不符時禁止操作",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-D/part-61/subpart-A/section-61.53",
          "checked": "2026-09-12"
        },
        {
          "title": "FAA AIM 8-1：適飛、生理與視覺",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html",
          "checked": "2026-09-12"
        }
      ],
      "points": [
        "I — Illness：疾病與症狀是否影響工作？",
        "M — Medication：成分、治療原因與副作用是否已釐清？",
        "S — Stress：壓力是否占用注意力或影響判斷？",
        "A — Alcohol：是否符合時間、濃度及不受影響等所有條件？",
        "F — Fatigue：睡眠量、品質、節律及清醒時間是否足以支撐任務？",
        "E — Emotion：情緒是否妨礙安全操作？部分訓練版本另以 Eating 提醒營養，應理解內容而非只背字母。"
      ]
    },
    {
      "id": "hypoxia",
      "english": "Hypoxia",
      "title": "缺氧的共同概念",
      "parent": "health",
      "locator": "PHAK C 版 · 17-3",
      "printedPage": "17-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=3",
      "paragraphs": [
        "缺氧是組織獲得或利用的氧不足，原因可能出在肺部取得氧、血液攜帶氧、循環輸送或細胞利用。四種類型按問題所在環節分類，不是四種固定嚴重程度，也可能同時存在。",
        "例如高座艙高度加上排氣漏入座艙，可能同時造成低氧性與血液性問題。處理時不能只背某一類名稱，還要看高度、設備、環境與乘員狀態，依程序盡快恢復安全供氧並終止危險暴露。"
      ],
      "references": [
        {
          "title": "FAA AIM 8-1：適飛、生理與視覺",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html",
          "checked": "2026-09-12"
        }
      ],
      "points": [
        "低氧性：吸入／肺部交換的氧供應不足，典型情境是低氣壓。",
        "血液性：血液攜氧能力下降，例如 CO 或貧血。",
        "循環性：血液輸送不足，即使血中有氧也送不到所需組織。",
        "組織毒性：細胞利用氧的能力受毒性干擾。",
        "辨識原因是為了理解處置差異，不能靠一個頭痛或血氧數字自行完成鑑別診斷。"
      ]
    },
    {
      "id": "hypoxic",
      "english": "Hypoxic Hypoxia",
      "title": "低氧性缺氧",
      "parent": "hypoxia",
      "locator": "PHAK C 版 · 17-3",
      "printedPage": "17-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=3",
      "paragraphs": [
        "低氧性缺氧常見於高度增加、氣壓下降，使吸入氧分壓不足。一般飛行高度內空氣的氧比例仍約為 21%，問題主要不是比例突然消失，而是每次呼吸能形成的肺泡氧分壓與交換條件改變。",
        "增壓系統失效後，即使發動機正常、航空器高度不變，座艙壓力高度也可能迅速升高。判斷應看座艙高度與供氧狀態；不能以「外面仍是同一種空氣」或沒有立即不適來排除缺氧。"
      ],
      "references": [
        {
          "title": "FAA AIM 8-1：適飛、生理與視覺",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html",
          "checked": "2026-09-12"
        }
      ],
      "points": [
        "正文補充：乾冰昇華產生 CO₂，在通風不足的座艙可累積並造成高碳酸血症與缺氧危害。這是 CO₂，不是排氣中的 CO，也不是過度換氣造成的低 CO₂。",
        "乾冰密封可造成容器增壓；運輸應依適用危險物品及機型程序，不能自行用密封盒消除氣體問題。"
      ]
    },
    {
      "id": "hypemic",
      "english": "Hypemic Hypoxia",
      "title": "血液性缺氧",
      "parent": "hypoxia",
      "locator": "PHAK C 版 · 17-3",
      "printedPage": "17-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=3",
      "paragraphs": [
        "血液性缺氧是血液運送氧的能力不足，例如血紅素量偏低或一氧化碳占據血紅素結合位置。此時即使肺部接觸的空氣含氧正常，送到組織的有效氧量仍可能不足，與單純高度造成的低氧不同。",
        "排氣洩漏或貧血能降低對高度的耐受度，兩者也不能只靠深呼吸消除。若同機多人同時頭痛、暈眩，應考慮共同環境暴露，依航空器程序處理並尋求醫療協助，而非各自猜測是否暈機。"
      ],
      "references": [
        {
          "title": "FAA AIM 8-1：適飛、生理與視覺",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html",
          "checked": "2026-09-12"
        }
      ]
    },
    {
      "id": "stagnant",
      "english": "Stagnant Hypoxia",
      "title": "循環性缺氧",
      "parent": "hypoxia",
      "locator": "PHAK C 版 · 17-3",
      "printedPage": "17-3",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=3",
      "paragraphs": [
        "循環性缺氧是血液流動不足，導致即使血中有氧，也無法及時供應組織。休克、循環疾病或持續加速度使血液分布改變，都可影響供氧；它提醒我們供氧不只取決於吸入多少氧氣。",
        "正向加速度可能使腦部血液供應下降，出現視野變灰甚至意識喪失風險。補充氧不能取代對循環與加速度原因的處理，相關機動與防護須依機型訓練，不能把一般生理介紹當作抗 G 操作指令。"
      ],
      "references": [
        {
          "title": "FAA AIM 8-1：適飛、生理與視覺",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html",
          "checked": "2026-09-12"
        }
      ]
    },
    {
      "id": "histotoxic",
      "english": "Histotoxic Hypoxia",
      "title": "組織毒性缺氧",
      "parent": "hypoxia",
      "locator": "PHAK C 版 · 17-4",
      "printedPage": "17-4",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=4",
      "paragraphs": [
        "組織毒性缺氧是細胞受到毒性影響，無法正常利用已送達的氧；原書以酒精、藥物及毒物說明此環節。它與肺部吸入不足或血液運輸不足不同，因此不能把所有缺氧都理解成多吸幾口空氣即可解決。",
        "酒精與某些藥物還可能同時抑制中樞神經、降低判斷與高度耐受度。學習時應辨認多種作用可以重疊，不能因其中一個供氧數據看似正常，就否定整體功能已受損的可能。"
      ],
      "references": [
        {
          "title": "FAA AIM 8-1：適飛、生理與視覺",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html",
          "checked": "2026-09-12"
        }
      ]
    },
    {
      "id": "hypoxia-symptoms",
      "english": "Symptoms of Hypoxia",
      "title": "缺氧的症狀與辨識限制",
      "parent": "hypoxia",
      "locator": "PHAK C 版 · 17-4",
      "printedPage": "17-4",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=4",
      "paragraphs": [
        "缺氧可能造成頭痛、暈眩、視覺變差、反應遲緩、判斷不良或異常愉快感，後者尤其可能讓人低估危險。症狀與進展受高度、時間、個人狀況及暴露方式影響，不是每次都按固定順序出現。",
        "同伴發現你漏回通話或無法完成簡單任務，可能比你自己感到喘更早。不要等待嘴唇發紫或失去意識才處理；受控生理訓練可提高警覺，但不能保證每次都能靠熟悉感及時認出缺氧。"
      ],
      "references": [
        {
          "title": "FAA AIM 8-1：適飛、生理與視覺",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html",
          "checked": "2026-09-12"
        }
      ]
    },
    {
      "id": "hypoxia-response",
      "english": "Treatment of Hypoxia",
      "title": "缺氧時的處置原則",
      "parent": "hypoxia",
      "locator": "PHAK C 版 · 17-4",
      "printedPage": "17-4",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=4",
      "paragraphs": [
        "懷疑高空缺氧時，應立即按機型程序使用適當氧氣系統、確認供氧並恢復安全座艙高度或下降，同時維持航空器控制及協調 ATC。可用意識時間代表尚能有效行動的時間，不是能安心等待的倒數。",
        "供氧面罩戴上卻未密合、選錯模式或沒有流量，仍可能無法改善。改善感覺後也不能直接忽略原因；排氣暴露、設備故障或持續症狀需要進一步處理。法定供氧門檻是最低要求，不代表其下每個人都不會缺氧。"
      ],
      "references": [
        {
          "title": "FAA AIM 8-1：適飛、生理與視覺",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html",
          "checked": "2026-09-12"
        },
        {
          "title": "14 CFR 91.211：補充氧氣法規",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-C/section-91.211",
          "checked": "2026-09-12"
        }
      ],
      "currentNote": "以下高度門檻依 91.211(a) 的座艙壓力高度判讀，屬美國規則的最低要求；增壓航空器另有 91.211(b) 規定，不能用本節簡表取代整套操作要求。",
      "points": [
        "座艙壓力高度 >12,500 ft 且 ≤14,000 ft：必要最低飛航組員在超過 30 分鐘的部分須配備並使用補充氧氣。",
        "座艙壓力高度 >14,000 ft：必要最低飛航組員在該高度全程須配備並使用補充氧氣。",
        "座艙壓力高度 >15,000 ft：每位乘員都須獲提供補充氧氣；「提供」與組員條文中的「使用」應分開讀。",
        "12,500、14,000、15,000 的邊界不可把大於讀成大於等於；其他規則、機型及健康條件仍可能要求更早使用。",
        "FAA AIM 鼓勵為最佳保護在日間高於 10,000 ft、夜間高於 5,000 ft 使用補充氧；建議與法定最低門檻不同。",
        "TUC／有效行動時間不是到昏迷的固定秒數，且快速失壓可能縮短可用時間；先依訓練使用氧氣及處置，勿等待症狀完整出現。"
      ]
    },
    {
      "id": "hyperventilation",
      "english": "Hyperventilation",
      "title": "過度換氣",
      "parent": "health",
      "locator": "PHAK C 版 · 17-4",
      "printedPage": "17-4",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=4",
      "paragraphs": [
        "過度換氣是通氣超過代謝需要，使二氧化碳下降並改變血液酸鹼狀態，可引起暈眩、麻刺感、胸悶及手部痙攣。它不是呼吸太快就一定成立，疼痛、缺氧或其他疾病也可能讓人呼吸加速。",
        "在高空出現相似症狀時，不能直接認定只是緊張而停止供氧。應依程序排查缺氧和設備問題，保持平穩正常呼吸並尋求協助；不採用紙袋回吸，因誤把缺氧當成過度換氣可能進一步降低吸入氧。"
      ],
      "references": [
        {
          "title": "FAA AIM 8-1：適飛、生理與視覺",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html",
          "checked": "2026-09-12"
        },
        {
          "title": "ANZCOR 9.2.8：快速呼吸與過度換氣急救",
          "url": "https://www.anzcor.org/home/first-aid/guideline-9-2-8-first-aid-management-of-rapid-breathing-including-panic-attack",
          "checked": "2026-09-12"
        }
      ],
      "currentNote": "原書及部分 FAA 文字仍提到紙袋回吸；ANZCOR 現行急救指引強烈反對回吸做法，因可能造成危險低氧。本站不把紙袋回吸列為操作建議；症狀重疊時先按航空器程序處理缺氧可能並尋求協助。"
    },
    {
      "id": "ear-sinus",
      "english": "Middle Ear and Sinus Problems",
      "title": "中耳與鼻竇壓力問題",
      "parent": "health",
      "locator": "PHAK C 版 · 17-5",
      "printedPage": "17-5",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=5",
      "paragraphs": [
        "中耳與鼻竇內空氣需與座艙壓力平衡，感冒或過敏造成的阻塞會使氣體難以進出。下降時外部壓力增加，中耳更容易無法及時平衡，可能引起劇痛、聽力下降或壓力傷害。",
        "吞嚥、打呵欠等溫和動作可協助平衡，但不應強行反覆用力吹壓來壓過疼痛。已有鼻塞或無法平衡時應在飛前評估，不能只服成藥掩蓋症狀；持續疼痛、眩暈或聽力變化需就醫。"
      ],
      "references": [
        {
          "title": "FAA AIM 8-1：適飛、生理與視覺",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html",
          "checked": "2026-09-12"
        }
      ]
    },
    {
      "id": "disorientation",
      "english": "Spatial Disorientation and Illusions",
      "title": "空間迷向與感官衝突",
      "parent": "health",
      "locator": "PHAK C 版 · 17-6",
      "printedPage": "17-6",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=6",
      "paragraphs": [
        "空間迷向是無法正確感受航空器相對地面的姿態、位置或運動。視覺、內耳前庭及肌肉關節的訊息可能彼此矛盾，尤其沒有可靠地平線時，大腦會把不適用的身體感覺當成實際姿態。",
        "夜間海面看似晴朗，仍可能缺乏足夠外部參考。感覺「飛得很平」不能證明機翼水平，應依訓練交叉檢查可信儀表與其他資訊；單一儀表也可能故障，所以重點是建立一致且可靠的參考。"
      ],
      "references": [
        {
          "title": "FAA AIM 8-1：適飛、生理與視覺",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html",
          "checked": "2026-09-12"
        }
      ]
    },
    {
      "id": "vestibular",
      "english": "Vestibular Illusions",
      "title": "前庭錯覺",
      "parent": "disorientation",
      "locator": "PHAK C 版 · 17-7",
      "printedPage": "17-7",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=7",
      "paragraphs": [
        "半規管主要感受角加速度，耳石器官感受重力與線性加速度的合成作用；兩者不是直接量測航空器姿態的儀器。持續穩定轉彎後，轉動感可能衰退，恢復水平時反而感覺正在往相反方向轉。",
        "此節把傾斜錯覺、科氏錯覺、墓地螺旋、軀體重力錯覺、倒轉錯覺與升降機錯覺分開理解。共同風險是機師依錯誤感覺修正正常姿態，使真正的偏差擴大，甚至失去控制。"
      ],
      "points": [
        "The Leans：緩慢坡度未被察覺，回到水平卻像向反方向傾斜；可能想重新傾回原坡度。",
        "Coriolis：持續轉彎時快速改變頭部平面，刺激其他半規管，產生強烈跨軸翻滾感。",
        "Graveyard Spiral：持續轉彎後覺得已不轉；發現下降便拉桿，卻在未解除坡度下收緊螺旋並加快失高。",
        "Somatogravic：向前加速像機頭抬高，可能錯誤推桿；快速減速可能感覺機頭下俯而錯誤拉桿。",
        "Inversion：由爬升突然轉平可能像向後翻倒，急推機頭會使危險更大。",
        "Elevator：突然向上加速可能像爬升，向下加速可能像下降；依感覺反向修正會導致不必要姿態變化。"
      ]
    },
    {
      "id": "visual-illusions",
      "english": "Visual Illusions",
      "title": "視覺造成的迷向",
      "parent": "disorientation",
      "locator": "PHAK C 版 · 17-8",
      "printedPage": "17-8",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=8",
      "paragraphs": [
        "視覺通常是重要姿態線索，但斜雲層、岸線燈光與孤立光點可能被錯認為地平線或移動物體。假地平線使機師依錯誤水平線傾斜航空器，自動運動錯覺則使靜止光點看似自行移動。",
        "預防不是完全不看外面，而是確認外部參考是否固定、可靠且與儀表一致。若夜間只見一點燈光，應保持掃視與多來源確認，不要為追逐那一點看似移動的光而改變姿態。"
      ]
    },
    {
      "id": "postural",
      "english": "Postural Considerations",
      "title": "身體姿勢與座椅感覺",
      "parent": "disorientation",
      "locator": "PHAK C 版 · 17-8",
      "printedPage": "17-8",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=8",
      "paragraphs": [
        "皮膚、肌肉和關節感覺到的是身體受力與相對姿勢，不會直接告訴你航空器相對地面的傾斜角。協調轉彎中合力可持續把人壓向座椅，使傾斜狀態仍感覺像「正坐著」。",
        "側滑、加速與亂流也可能產生類似傾斜的感覺。所謂憑屁股感覺飛行，不能替代可靠姿態資訊；感覺與儀表衝突時，應依訓練驗證儀表，不要單以身體偏向哪一側決定操縱方向。"
      ]
    },
    {
      "id": "demonstrations",
      "english": "Demonstration of Spatial Disorientation",
      "title": "空間迷向示範的學習目的",
      "parent": "disorientation",
      "locator": "PHAK C 版 · 17-8",
      "printedPage": "17-8",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=8",
      "paragraphs": [
        "原書示範利用受控環境比較身體感覺與實際姿態，目的是讓學員理解正常感官也會誤導。有人感覺很強，有人沒有明顯感覺；沒有察覺轉動本身，也能顯示感官無法可靠監測姿態。",
        "以下小節解釋各示範的現象與風險，不是自行閉眼飛行的練習單。實作應由合格教官在適當模擬設備或安全安排下管理，由負責控制者維持監視與接管能力，避免在低空或單人飛行中嘗試。"
      ]
    },
    {
      "id": "accelerating-climb",
      "english": "Climbing While Accelerating",
      "title": "加速時的爬升感",
      "parent": "demonstrations",
      "locator": "PHAK C 版 · 17-9",
      "printedPage": "17-9",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=9",
      "paragraphs": [
        "航空器向前加速時，耳石系統受到的合力方向改變，可能讓人感到頭向後仰，誤認機頭正在抬高。即使真實姿態保持接近水平，缺少外部參考的機師仍可能感到正在爬升。",
        "夜間起飛是典型風險情境：若把加速感當成過度仰角而推低機頭，可能飛向地面。示範要理解的是加速度與姿態並非同一量，實際起飛應按適用姿態、速度與儀表交叉檢查。"
      ]
    },
    {
      "id": "turning-climb",
      "english": "Climbing While Turning",
      "title": "轉彎時的爬升感",
      "parent": "demonstrations",
      "locator": "PHAK C 版 · 17-9",
      "printedPage": "17-9",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=9",
      "paragraphs": [
        "協調轉彎的載重增加會提高座椅壓力，身體可能把這種受力感解釋成爬升，而沒有察覺已建立坡度。緩慢進入轉彎時，前庭轉動感也可能不明顯，使錯誤解讀更加可信。",
        "若在真實轉彎中因感覺爬升而推桿，可能改變高度卻未解除坡度。學習時應比較姿態、載重與升降率各自代表什麼，不能把「壓在椅子上的感覺」直接換算為爬升。"
      ]
    },
    {
      "id": "turning-dive",
      "english": "Diving While Turning",
      "title": "轉彎改出時的俯衝感",
      "parent": "demonstrations",
      "locator": "PHAK C 版 · 17-9",
      "printedPage": "17-9",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=9",
      "paragraphs": [
        "由轉彎恢復時，載重與前庭刺激改變，可能讓人感到向下俯衝或仍在轉動。原書將它與前一種轉彎爬升感相連，顯示同一段機動的不同階段會產生不同錯誤感覺。",
        "危險在於機師為了阻止感覺中的下降而突然拉桿，造成不必要的載重或失速風險。應把儀表上的實際坡度、速度與垂直趨勢放在一起判斷，不依單一瞬間的身體感覺做大幅修正。"
      ]
    },
    {
      "id": "left-right-tilt",
      "english": "Tilting to Right or Left",
      "title": "向右或向左傾斜感",
      "parent": "demonstrations",
      "locator": "PHAK C 版 · 17-9",
      "printedPage": "17-9",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=9",
      "paragraphs": [
        "即使機翼接近水平，側向加速度仍可能讓身體感到向一側傾斜。這說明前庭與姿勢系統感受的是合力，無法只憑受力把「機翼傾斜」和「水平但不協調的側向運動」完全分開。",
        "當乘員或機師說感覺被甩向一邊，應同時檢查姿態及協調資訊。用不正確的傾斜修正去消除受力感，可能反而建立真正坡度；此節應與滑轉指示及協調轉彎概念一起學習。"
      ]
    },
    {
      "id": "reversal",
      "english": "Reversal of Motion",
      "title": "運動反轉感",
      "parent": "demonstrations",
      "locator": "PHAK C 版 · 17-9",
      "printedPage": "17-9",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=9",
      "paragraphs": [
        "當轉動開始、持續及停止時，半規管液體與感受構造的相對運動不同，停止後可能感到反向轉動。這個錯覺可出現在不同旋轉平面，並不表示航空器真的依感覺所示反向運動。",
        "若機師為了消除停止後的反轉感，再把航空器帶回原轉彎，可能形成持續偏離。訓練的重點是比較感覺的時間延遲與實際儀表變化，了解為何不能用「終於感覺不轉了」作為水平判定。"
      ]
    },
    {
      "id": "beyond-vertical",
      "english": "Diving or Rolling Beyond the Vertical Plane",
      "title": "超越垂直面的俯衝或滾轉感",
      "parent": "demonstrations",
      "locator": "PHAK C 版 · 17-9",
      "printedPage": "17-9",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=9",
      "paragraphs": [
        "在旋轉中改變頭部方向，可能同時刺激不同半規管，造成強烈翻滾、下墜或超越垂直面的感覺。實際航空器姿態可能遠小於感受到的變化，這類跨軸刺激與科氏錯覺相關。",
        "真實飛行中，轉彎時突然低頭撿物或快速轉頭也可能觸發類似迷向。應在地面安排物品位置、降低不必要頭部動作，若出現迷向則回到受訓的儀表控制流程，而不是依翻滾感大幅反向操縱。"
      ]
    },
    {
      "id": "coping",
      "english": "Coping with Spatial Disorientation",
      "title": "應對空間迷向",
      "parent": "disorientation",
      "locator": "PHAK C 版 · 17-9",
      "printedPage": "17-9",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=9",
      "paragraphs": [
        "預防迷向需結合天氣規劃、夜航與儀表熟練度、身體狀態及工作量管理。辨認感官限制後，仍要實際練習以可信儀表維持航空器控制；只讀過錯覺名稱不會自動建立操縱能力。",
        "發現外部參考不可靠或感覺矛盾時，維持受訓的交叉檢查，避免突然追隨感覺，必要時明確交接操縱與向 ATC 求助。VFR 機師不能因有姿態儀就把自己當成已具備雲中飛行能力。"
      ],
      "references": [
        {
          "title": "FAA AIM 8-1：適飛、生理與視覺",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html",
          "checked": "2026-09-12"
        }
      ]
    },
    {
      "id": "optical",
      "english": "Optical Illusions",
      "title": "進場與著陸的光學錯覺",
      "parent": "health",
      "locator": "PHAK C 版 · 17-10",
      "printedPage": "17-10",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=10",
      "paragraphs": [
        "大腦會以熟悉的跑道形狀、坡度、地面紋理與燈光估計距離和高度。當陌生機場的條件不同，這些經驗可能產生系統性偏差，使看似正常的進場實際過低或過高。",
        "學習時應分成三步：什麼外界條件改變、因此看起來如何、機師可能做出什麼錯誤修正。這比只背「有錯覺」更能幫助進場簡報，也能解釋為何要交叉使用公布下滑參考與穩定進場條件。"
      ]
    },
    {
      "id": "width",
      "english": "Runway Width Illusion",
      "title": "跑道寬度錯覺",
      "parent": "optical",
      "locator": "PHAK C 版 · 17-10",
      "printedPage": "17-10",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=10",
      "paragraphs": [
        "比慣常跑道更窄的跑道，可能讓機師覺得自己比實際更高，於是壓低進場；更寬的跑道則可能讓人覺得太低，而提前拉平或飛高。這種判斷依賴熟悉的視角，不能僅由感覺抵消。",
        "例如轉飛小機場時，不應為了讓跑道看起來和熟悉的大跑道一樣寬而降低高度。應先查實際寬度，按適用的下滑指示、位置和高度確認，避免把視覺印象直接當成精確高度尺。"
      ]
    },
    {
      "id": "slope",
      "english": "Runway and Terrain Slopes Illusion",
      "title": "跑道與地形坡度錯覺",
      "parent": "optical",
      "locator": "PHAK C 版 · 17-10",
      "printedPage": "17-10",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=10",
      "paragraphs": [
        "上坡跑道或上坡進場地形可能讓航空器看起來比實際高，促使機師採取過低進場；下坡情況可能相反。跑道坡度也會影響性能，因此它同時是視覺與起降計算中的重要資料。",
        "飛前查坡度並在進場簡報指出預期錯覺，可降低臨場意外修正。不要為了把傾斜跑道視覺調成平常熟悉的形狀而改變下滑路徑，仍需以適用位置、高度與穩定進場參考驗證。"
      ]
    },
    {
      "id": "featureless",
      "english": "Featureless Terrain Illusion",
      "title": "缺乏地面特徵的錯覺",
      "parent": "optical",
      "locator": "PHAK C 版 · 17-10",
      "printedPage": "17-10",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=10",
      "paragraphs": [
        "夜間水面、黑暗地形或積雪會移除平時估計高度的紋理與相對位置線索。即使跑道燈很清楚，周圍的黑暗仍可能讓機師感到偏高，逐步降低進場，形成黑洞進場風險。",
        "「看得到跑道」不等於有足夠資料估計垂直路徑。應事先確認公布進場坡度、障礙與機場高度，持續交叉檢查；若無法維持可靠目視參考與穩定進場，應及早依程序重飛或改變計畫。"
      ]
    },
    {
      "id": "refraction",
      "english": "Water Refraction",
      "title": "擋風玻璃雨水與折射",
      "parent": "optical",
      "locator": "PHAK C 版 · 17-10",
      "printedPage": "17-10",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=10",
      "paragraphs": [
        "雨水附著在擋風玻璃會改變光線路徑與地平線的外觀，使機師可能覺得自己比實際高。水滴也降低清晰度與深度線索，因此不是只有看不清楚，還可能把看見的景象解讀錯誤。",
        "若為了補償這種偏高感而降低進場，會侵蝕障礙淨空。應依機型使用適當除雨設備，並以可靠下滑與高度資料交叉確認，不能只因跑道輪廓仍可辨認就忽略雨水造成的視覺變形。"
      ]
    },
    {
      "id": "haze",
      "english": "Haze",
      "title": "霾與距離判斷",
      "parent": "optical",
      "locator": "PHAK C 版 · 17-10",
      "printedPage": "17-10",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=10",
      "paragraphs": [
        "霾降低對比，讓跑道看起來更遠或更高，機師可能因此飛出過低進場。反過來，極清澈的空氣可能使遠方物體看似較近，造成不同的距離錯估；能見度好也不是完全沒有視覺偏差。",
        "不要用跑道顏色深淺或清晰程度單獨推算距離，應配合已知位置與適用進場參考。若外觀與距離資訊不一致，先辨識大氣影響，而不是立即調整下降率來滿足熟悉的視覺印象。"
      ]
    },
    {
      "id": "fog",
      "english": "Fog",
      "title": "霧中的姿態錯覺",
      "parent": "optical",
      "locator": "PHAK C 版 · 17-10",
      "printedPage": "17-10",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=10",
      "paragraphs": [
        "飛入霧時，外部視覺線索突然消失或改變，可能產生機頭抬高的感覺，使機師不自覺壓低機頭並加陡下降。這同時是能見度與感官可靠性問題，不應只當成跑道暫時變模糊。",
        "若接近地面時失去必要目視參考，應按適用程序處置，不能繼續下降等待跑道重新出現。實際能見度、機師資格與操作最低標準共同決定能否繼續，錯覺知識不會提供額外的下降權限。"
      ]
    },
    {
      "id": "ground-lights",
      "english": "Ground Lighting Illusions",
      "title": "地面燈光錯覺",
      "parent": "optical",
      "locator": "PHAK C 版 · 17-10",
      "printedPage": "17-10",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=10",
      "paragraphs": [
        "道路或列車燈光可能被錯當成跑道與進場燈，過亮的跑道燈也可能讓跑道看似較近，使進場偏高。燈光形狀與亮度只能提供部分線索，還需核對跑道方向、編號與周圍位置。",
        "若只追著一列燈光對正，可能對到道路、錯跑道或其他設施。夜間進場應在較早階段完成識別，再以多個固定特徵與導航位置確認；對燈光的疑問不能拖到最後接地才處理。"
      ]
    },
    {
      "id": "prevent-landing-errors",
      "english": "How To Prevent Landing Errors Due to Optical Illusions",
      "title": "預防錯覺造成的著陸偏差",
      "parent": "optical",
      "locator": "PHAK C 版 · 17-10",
      "printedPage": "17-10",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=10",
      "paragraphs": [
        "陌生機場應提前查跑道長寬、坡度、燈光、障礙與適用進場資料，將可能錯覺列入簡報。穩定進場要同時看速度、構型、下降路徑與接地區，不能只追求讓跑道看起來熟悉。",
        "有適用 VASI／PAPI 或其他下滑參考時，確認在其有效範圍內使用並與其他資訊比對。發現無法穩定、認不清跑道或失去必要參考時，及早重飛可避免把持續修正變成低空的急迫決策。"
      ],
      "points": [
        "窄跑道／上坡：常見偏高感 → 可能壓低進場。",
        "寬跑道／下坡：可能感覺太低 → 飛高或提早拉平。",
        "黑暗無特徵地形／雨水折射／霾：可能讓人感覺偏高或太遠 → 低進場風險。",
        "進霧：可能感覺抬頭 → 錯誤壓低機頭。",
        "過亮跑道燈：可能感覺太近 → 高進場；道路燈則可能直接誤認跑道。",
        "上述是常見傾向，不是每次必然反應。核對地形、實際位置、適用下滑參考與穩定進場條件，無法建立時重飛。"
      ]
    },
    {
      "id": "motion-sickness",
      "english": "Motion Sickness",
      "title": "暈機",
      "parent": "health",
      "locator": "PHAK C 版 · 17-12",
      "printedPage": "17-12",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=12",
      "paragraphs": [
        "暈機與視覺、前庭和身體感覺不一致有關，可出現噁心、冒汗、蒼白與注意力下降。它不是意志薄弱，也不能保證有經驗者永遠不會發生；亂流、焦慮與長時間低頭可能增加負擔。",
        "學員應及早告知教官，讓操縱與課程安排能調整，而不是等到無法工作才承認。看向可靠遠方參考與減少頭部動作可能有幫助，但暈機藥常會影響警覺，用藥與適飛仍需專業確認。"
      ],
      "references": [
        {
          "title": "FAA AIM 8-1：適飛、生理與視覺",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html",
          "checked": "2026-09-12"
        }
      ]
    },
    {
      "id": "co",
      "english": "Carbon Monoxide (CO) Poisoning",
      "title": "一氧化碳中毒",
      "parent": "health",
      "locator": "PHAK C 版 · 17-12",
      "printedPage": "17-12",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=12",
      "paragraphs": [
        "一氧化碳無色無味，與血紅素結合後妨礙氧輸送，也會傷害組織。使用排氣熱交換的暖氣系統若洩漏，可能把 CO 帶入座艙；頭痛、暈眩、噁心與判斷下降容易被誤認為疲勞或暈機。",
        "懷疑暴露時，依機型程序停止相關熱源、引入安全新鮮空氣、使用適用氧氣並盡快落地求醫與通報。不要等聞到味道或一般指夾血氧數值下降；常見血氧儀不能可靠排除 CO 中毒。"
      ],
      "references": [
        {
          "title": "FAA AIM 8-1：適飛、生理與視覺",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html",
          "checked": "2026-09-12"
        },
        {
          "title": "CDC：CO 中毒與一般脈搏血氧儀的限制",
          "url": "https://www.cdc.gov/carbon-monoxide/hcp/clinical-guidance/index.html",
          "checked": "2026-09-12"
        }
      ],
      "currentNote": "一般雙波長指夾血氧儀不能可靠分辨 CO 相關血紅素，正常讀值不能排除 CO 中毒；應依暴露情境與專業醫療評估，不靠單一讀數繼續飛行。",
      "points": [
        "共同暴露線索：多人同時頭痛、暈眩、噁心，或開暖氣後症狀出現。這是警訊而非確診。",
        "CO 本身無色無味，聞不到不能排除；偵測器應按製造商期限、測試與安裝要求使用。",
        "保持控制 → 按機型處理污染來源與通風／氧氣 → 協調盡快落地 → 專業醫療評估。",
        "普通血氧儀顯示正常不能排除中毒；停止暴露後症狀減輕也不代表不需評估。"
      ]
    },
    {
      "id": "stress",
      "english": "Stress",
      "title": "壓力",
      "parent": "health",
      "locator": "PHAK C 版 · 17-12",
      "printedPage": "17-12",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=12",
      "paragraphs": [
        "急性壓力會讓心跳與警覺提高，但過強時可能縮窄注意力、降低工作記憶與判斷。長期工作、家庭或財務壓力也可能持續占用思考資源，並與疲勞、疾病及外在行程壓力相互加重。",
        "自編例：機師反覆想著必須準時抵達，便忽略天氣退路與燃油更新。可在飛前設定取消與改航條件、分配工作並誠實評估狀態；若壓力已妨礙專注，調整飛行比硬撐更能控制風險。"
      ],
      "references": [
        {
          "title": "FAA AIM 8-1：適飛、生理與視覺",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html",
          "checked": "2026-09-12"
        }
      ]
    },
    {
      "id": "fatigue",
      "english": "Fatigue",
      "title": "疲勞",
      "parent": "health",
      "locator": "PHAK C 版 · 17-13",
      "printedPage": "17-13",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=13",
      "paragraphs": [
        "疲勞可能來自睡眠不足、長時間清醒、工作負荷、單調及晝夜節律不匹配，會降低反應、記憶與自我監控能力。累積性睡眠不足不一定靠短暫休息就恢復，而人對自己受損程度的感覺常不可靠。",
        "咖啡或意志不能替代充足恢復，持續白天嗜睡、嚴重打鼾或疑似睡眠呼吸中止也值得醫療評估。飛前除了問睡了多久，還要看睡眠品質、值勤時段及後續負荷，避免把沒有打瞌睡當成沒有疲勞。"
      ],
      "references": [
        {
          "title": "FAA AIM 8-1：適飛、生理與視覺",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html",
          "checked": "2026-09-12"
        }
      ]
    },
    {
      "id": "chemicals",
      "english": "Exposure to Chemicals",
      "title": "化學物質暴露",
      "parent": "health",
      "locator": "PHAK C 版 · 17-13",
      "printedPage": "17-13",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=13",
      "paragraphs": [
        "航空作業可能接觸燃油、油液、清潔劑及蒸氣，進入人體的途徑包括吸入、眼睛、皮膚或誤食。危害依具體產品與濃度不同，不能把所有液體統一當作同樣有毒，或因以前碰過就認為安全。",
        "處理前應查安全資料表 SDS、使用適當防護並依程序清理洩漏。出現暴露症狀時先脫離來源、取得適當急救與醫療協助；高壓注入傷可能表面很小，仍可能造成嚴重深部傷害。"
      ]
    },
    {
      "id": "hydraulic",
      "english": "Hydraulic Fluid",
      "title": "液壓油",
      "parent": "chemicals",
      "locator": "PHAK C 版 · 17-13",
      "printedPage": "17-13",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=13",
      "paragraphs": [
        "液壓油的成分與對眼睛、皮膚的刺激程度因產品而異，高壓系統還存在注入組織的機械性危害。小漏孔形成的油柱不一定容易看見，不能用手去摸索洩漏點或在未卸壓狀態下任意拆管。",
        "若眼睛或皮膚接觸，依該產品 SDS 與急救指示處理；疑似高壓注入應立即就醫，即使傷口不痛也不能等待。對機師而言，異常油霧、氣味或系統壓力也需與故障程序一起評估。"
      ],
      "references": [
        {
          "title": "HSE：高壓液體注入傷害",
          "url": "https://www.hse.gov.uk/safetybulletins/hydraulic-injection-injury.htm",
          "checked": "2026-09-12"
        }
      ]
    },
    {
      "id": "oil",
      "english": "Engine Oil",
      "title": "發動機油",
      "parent": "chemicals",
      "locator": "PHAK C 版 · 17-14",
      "printedPage": "17-14",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=14",
      "paragraphs": [
        "發動機油可能造成皮膚與眼睛刺激，熱油可燙傷，霧滴或受熱分解產物則帶來吸入風險。危害取決於配方、溫度與暴露方式，不能把正常外部油污與進入呼吸環境的煙霧視為同一問題。",
        "檢查機油時應避免接觸高溫表面、依程序戴防護並清理洩漏。航中出現煙霧或異味時，按煙火／污染程序維持控制與尋找落地選項，不應用「只是油味」自行排除嚴重故障。"
      ]
    },
    {
      "id": "fuel",
      "english": "Fuel",
      "title": "燃油暴露",
      "parent": "chemicals",
      "locator": "PHAK C 版 · 17-14",
      "printedPage": "17-14",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=14",
      "paragraphs": [
        "燃油蒸氣可能影響中樞神經並造成刺激，液態燃油對皮膚和眼睛也有危害，同時具火災風險。不同航空燃油配方與添加物不同，處理時需依產品和加油程序，而不是只靠氣味強弱估計安全。",
        "不要用嘴吸油管或用燃油清洗皮膚；若誤吞，需立即聯絡毒物或醫療專業，不能自行催吐而增加吸入肺部風險。加油與清理後如有暈眩或其他症狀，應先處理暴露與適飛問題。"
      ],
      "references": [
        {
          "title": "MedlinePlus：汽油暴露與避免自行催吐",
          "url": "https://medlineplus.gov/ency/article/002806.htm",
          "checked": "2026-09-12"
        }
      ]
    },
    {
      "id": "heat",
      "english": "Dehydration and Heatstroke",
      "title": "脫水與熱中暑",
      "parent": "health",
      "locator": "PHAK C 版 · 17-14",
      "printedPage": "17-14",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=14",
      "paragraphs": [
        "高溫、日照與流汗會增加水分流失，脫水可能降低專注與耐受度，但熱中暑是體溫調節失常的嚴重急症，不能簡化成口渴。意識混亂、步態不穩或昏倒是重要警訊，患者可能仍在大量流汗。",
        "應預先安排飲水、通風、遮陽與休息，而非刻意少喝水來避免如廁。疑似熱中暑要立即求救、移至較涼處並開始降溫；意識不清者不可強灌水，飛行中需協調盡快安全落地與醫療支援。"
      ],
      "references": [
        {
          "title": "CDC／NIOSH：熱相關疾病與急救",
          "url": "https://www.cdc.gov/niosh/heat-stress/about/illnesses.html",
          "checked": "2026-09-12"
        }
      ],
      "currentNote": "熱中暑可能皮膚乾熱，也可能大量流汗；不可用「仍在流汗」排除。意識改變等症狀需緊急求助與降溫，不只補水等待。"
    },
    {
      "id": "alcohol",
      "english": "Alcohol",
      "title": "酒精與宿醉",
      "parent": "health",
      "locator": "PHAK C 版 · 17-15",
      "printedPage": "17-15",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=15",
      "paragraphs": [
        "酒精會影響判斷、視覺、協調與高度耐受度，宿醉也可能在酒精濃度下降後繼續妨礙安全。喝咖啡、洗澡或短睡不能保證加速清除或恢復適飛，因此不能只用主觀清醒感判斷。",
        "美國 14 CFR 91.17 同時限制飲酒後八小時內、仍受酒精影響、特定血液／呼氣濃度及影響安全的藥物使用。滿八小時不是自動放行，營運人或個人標準可能更嚴，當下狀況仍須符合安全與規則。"
      ],
      "references": [
        {
          "title": "FAA AIM 8-1：適飛、生理與視覺",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html",
          "checked": "2026-09-12"
        },
        {
          "title": "14 CFR 91.17：酒精與藥物限制",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-A/section-91.17",
          "checked": "2026-09-12"
        }
      ],
      "points": [
        "91.17(a)(1)：任何酒精飲料攝取後 8 小時內不得執行或嘗試執行民用航空器組員職務。",
        "91.17(a)(2)：仍受酒精影響時不得執行；不是等滿 8 小時便豁免。",
        "91.17(a)(4)：血液或呼氣酒精濃度達 0.04 或以上亦禁止；條文單位為 g/dL 血液或 g/210 L 呼氣。",
        "91.17(a)(3)：影響安全能力的藥物也受限制，與是否飲酒無關。",
        "自編情境：飲酒後已 10 小時但仍宿醉、反應下降，不能僅以超過 8 小時判斷可飛。"
      ]
    },
    {
      "id": "drugs",
      "english": "Drugs",
      "title": "藥物與適飛",
      "parent": "health",
      "locator": "PHAK C 版 · 17-16",
      "printedPage": "17-16",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=16",
      "paragraphs": [
        "處方、非處方與複方藥都可能影響警覺、視力或協調，治療的疾病本身也可能不適合飛行。藥品能合法買到或已獲 FDA 核准，不代表 FAA 已同意在某種機師狀況下使用並執行飛行職務。",
        "應讓 AME 知道實際成分、劑量、使用頻率與疾病，而非只說品牌名稱。FAA 的 DNI／DNF 清單有不同用途且不是完整白名單；不要自行停用必要治療來飛行，也不能把某種藥的等待時間套給所有藥物。"
      ],
      "references": [
        {
          "title": "14 CFR 61.53：醫療狀態不符時禁止操作",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-D/part-61/subpart-A/section-61.53",
          "checked": "2026-09-12"
        },
        {
          "title": "FAA AIM 8-1：適飛、生理與視覺",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html",
          "checked": "2026-09-12"
        },
        {
          "title": "14 CFR 91.17：酒精與藥物限制",
          "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-A/section-91.17",
          "checked": "2026-09-12"
        },
        {
          "title": "FAA AME Guide：Do Not Issue／Do Not Fly",
          "url": "https://www.faa.gov/ame_guide/pharm/dni_dnf",
          "checked": "2026-09-12"
        }
      ],
      "currentNote": "DNI 是 AME 不得直接核發、需 FAA 決定的藥物類別；DNF 涉及停飛及適用等待條件。清單不是完整白名單，不能由未列出就推論個人可用藥飛行。原書的 48 小時觀察及五倍給藥間隔也不是所有藥物的通用放行條件，應查現行個別藥物指引。",
      "points": [
        "評估兩件事：疾病本身是否安全、藥物是否適合飛行；不能只檢查其中一項。",
        "複方感冒藥可能含使人嗜睡的抗組織胺；同品牌不同配方不一定相同。",
        "DNI／DNF 是不同的航空醫學處理類別，不是單純藥效強弱排名。",
        "等待時間取決於成分、劑量、使用方式及適用指引，不在本站建立自動藥物放行計算器。",
        "不要自行停藥以規避限制；與治療醫師及 AME 協調治療和恢復飛行。"
      ]
    },
    {
      "id": "dcs",
      "english": "Altitude-Induced Decompression Sickness (DCS)",
      "title": "高度引起的減壓症",
      "parent": "health",
      "locator": "PHAK C 版 · 17-18",
      "printedPage": "17-18",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=18",
      "paragraphs": [
        "環境壓力降低時，原先溶於體液的氮可能形成氣泡，造成關節、皮膚、呼吸或神經系統症狀，這是減壓症的核心機制。它與缺氧或耳竇壓力不平衡不同，可能同時存在，症狀也可能在落地後才明顯。",
        "若懷疑 DCS，應依受訓程序供氧、停止進一步減壓暴露、下降或恢復適當壓力並盡速取得緊急醫療評估。症狀緩解不代表問題已結束，也不應自行安排再次升空來測試是否完全恢復。"
      ],
      "references": [
        {
          "title": "FAA AIM 8-1：適飛、生理與視覺",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html",
          "checked": "2026-09-12"
        }
      ],
      "points": [
        "關節疼痛（bends）、皮膚異常、呼吸困難（chokes）、感覺或神經功能異常，都可能是需要緊急評估的表現。",
        "DCS 是溶解氣體形成氣泡；缺氧是組織可用氧不足；耳竇 block 是空腔壓力不平衡。三者不能互相代稱。",
        "落地後才發生症狀仍需說明近期高度與潛水暴露史，不能因已回地面就排除 DCS。"
      ]
    },
    {
      "id": "scuba",
      "english": "DCS After Scuba Diving",
      "title": "水肺潛水後飛行",
      "parent": "dcs",
      "locator": "PHAK C 版 · 17-18",
      "printedPage": "17-18",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=18",
      "paragraphs": [
        "潛水在較高壓力下增加體內惰性氣體負荷，隨後飛行再次減壓，可能增加 DCS 風險。等待建議取決於潛水型態與後續高度，增壓航空器也不能完全忽略失壓可能，不能只看預定座艙高度。",
        "FAA AIM 的建議對飛行至 8,000 ft AMSL 及以下，無需減壓停留的潛水至少等 12 小時、需減壓停留者至少 24 小時；高於 8,000 ft AMSL，任何水肺潛水後至少 24 小時。這些不是個人無風險保證，有症狀需先就醫。"
      ],
      "references": [
        {
          "title": "FAA AIM 8-1：適飛、生理與視覺",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html",
          "checked": "2026-09-12"
        }
      ],
      "currentNote": "FAA AIM 8-1-2 的 8,000 ft 分界是實際飛行高度 AMSL，不是增壓座艙高度。12／24 小時是該指引的最低等待建議，不是個人放行或無減壓症保證；重複／多日潛水及個人狀況應再與潛水醫學專業確認。",
      "points": [
        "實際飛行高度 ≤8,000 ft AMSL，無減壓停留潛水：FAA 建議至少 12 小時。",
        "實際飛行高度 ≤8,000 ft AMSL，需減壓停留潛水：FAA 建議至少 24 小時。",
        "實際飛行高度 >8,000 ft AMSL：任何水肺潛水後至少 24 小時。",
        "不要把「需減壓停留」理解成只有這類潛水才需控制上升速度，所有潛水仍須遵守其安全上升程序。",
        "自編情境：噴射機巡航高於 8,000 ft AMSL，即使正常座艙低於此值，不能僅用座艙高度套入 12 小時欄。",
        "這是 FAA 航空建議的整理，不是潛水醫學個案放行；若有疑似 DCS 症狀，先求醫而非等滿時間再飛。"
      ]
    },
    {
      "id": "vision",
      "english": "Vision in Flight",
      "title": "飛行視覺的基礎",
      "parent": null,
      "locator": "PHAK C 版 · 17-19",
      "printedPage": "17-19",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=19",
      "paragraphs": [
        "視覺由光線進入眼睛、在視網膜成像，再由神經系統處理解讀。錐狀細胞擅長明亮環境的細節與色彩，桿狀細胞較適合低光；眼睛看見訊號與大腦正確理解是兩個不同環節。",
        "視力表表現良好不代表夜間、低對比或逆光下也能同樣清楚。飛行中要結合適當矯正、清潔視窗、掃視與光線管理，並持續留意功能變化；突然視力異常應交由醫療人員評估。"
      ],
      "references": [
        {
          "title": "FAA AIM 8-1：適飛、生理與視覺",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html",
          "checked": "2026-09-12"
        }
      ]
    },
    {
      "id": "vision-types",
      "english": "Vision Types",
      "title": "明視、間視與暗視",
      "parent": "vision",
      "locator": "PHAK C 版 · 17-20",
      "printedPage": "17-20",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=20",
      "paragraphs": [
        "明視、間視與暗視按照明條件和主要工作細胞分類，不是三種可由機師立即切換的開關。光線逐漸下降時，辨識細節、顏色與周邊目標的能力會改變，轉換還需要適應時間。",
        "黃昏可能仍覺得環境很亮，卻已無法像白天一樣辨認細小地標。應提早調整燈光與掃描方法，不能等到完全黑暗才開始夜航準備，也不能把日間可辨識距離直接套到夜間。"
      ]
    },
    {
      "id": "photopic",
      "english": "Photopic Vision",
      "title": "明視覺",
      "parent": "vision-types",
      "locator": "PHAK C 版 · 17-20",
      "printedPage": "17-20",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=20",
      "paragraphs": [
        "明亮環境主要由錐狀細胞處理視覺，中央凹特別適合辨識細節及顏色，所以白天直接注視物體通常可看清形狀。這種優勢仍受眩光、對比、疲勞與視力矯正狀況影響。",
        "閱讀儀表與辨識遠方機型需要把目標帶到適合的視野範圍，但不能因此只盯住前方中央。白天交通搜索仍應分區、有停留地掃視，因細小目標可能位於周邊且不易自行吸引注意。"
      ]
    },
    {
      "id": "mesopic",
      "english": "Mesopic Vision",
      "title": "間視覺",
      "parent": "vision-types",
      "locator": "PHAK C 版 · 17-21",
      "printedPage": "17-21",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=21",
      "paragraphs": [
        "間視發生在黃昏、黎明等中間亮度，桿狀與錐狀細胞共同參與，細節與色彩能力逐步改變。它不是白天視覺原封不動延伸到日落，也不是突然完全轉成夜間黑白視覺。",
        "在此階段，原先依色彩辨識的地標可能變得不明顯，而人仍高估自己的觀察能力。可提前使用低光掃描方法、確認儀表照明與航路參考，避免在能力轉變時依賴白天的熟悉感。"
      ]
    },
    {
      "id": "scotopic",
      "english": "Scotopic Vision",
      "title": "暗視覺",
      "parent": "vision-types",
      "locator": "PHAK C 版 · 17-21",
      "printedPage": "17-21",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=21",
      "paragraphs": [
        "低光環境主要依賴桿狀細胞，對弱光敏感但細節及色彩辨識較差。中央凹缺少桿狀細胞，因此非常暗的目標可能在直接注視時不明顯，稍微偏離視線反而較容易看見。",
        "夜間看見一點光，不等於能辨認其距離、種類或方向。應用偏心觀察與持續掃視提高偵測，再由多種位置與交通線索確認，不能把「看到」當成「已正確識別」。"
      ]
    },
    {
      "id": "central-blind",
      "english": "Central Blind Spot",
      "title": "視神經盤盲點",
      "parent": "vision",
      "locator": "PHAK C 版 · 17-21",
      "printedPage": "17-21",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=21",
      "paragraphs": [
        "原書 Central Blind Spot 此節介紹視神經離開視網膜的視神經盤，該處沒有桿狀或錐狀細胞，因此每眼都有生理盲點。它位於相對視野的特定側方，不能因標題含 central 就當成夜間正中央看不見的同一機制。",
        "雙眼通常可互相補足部分缺口，但座艙柱遮住一眼的視線時，另一眼的盲點可能使交通漏失。適當移動觀察位置並持續掃視有助於減少漏看，不能因目前視野看似連續就認為沒有盲區。"
      ],
      "points": [
        "視神經盤盲點：沒有感光細胞，是每眼固定的生理缺口；不等於視線正中央的低光盲區。",
        "夜間中央盲區：中央凹缺少桿狀細胞，低光時中央弱光物體不易辨識。",
        "座艙柱遮蔽與眼球盲點可疊加；使用雙眼、適當改變觀察位置及掃視降低漏看。"
      ]
    },
    {
      "id": "empty-field",
      "english": "Empty-Field Myopia",
      "title": "空間近視",
      "parent": "vision",
      "locator": "PHAK C 版 · 17-22",
      "printedPage": "17-22",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=22",
      "paragraphs": [
        "缺乏清楚遠方目標時，眼睛可能回到較近的休止焦距，造成看似望向遠處卻未真正對焦遠方。雲霧、均勻天空或黑暗背景都可能缺少足夠聚焦線索，細小交通因此更難被發現。",
        "可以定期在可用的遠方地標或清楚目標上重新對焦，再繼續分區搜尋。不要把長時間朝窗外發呆當成有效掃視；焦距、停留與掃描區域都會影響是否真的偵測到目標。"
      ]
    },
    {
      "id": "night-vision",
      "english": "Night Vision",
      "title": "夜間視覺",
      "parent": "vision",
      "locator": "PHAK C 版 · 17-22",
      "printedPage": "17-22",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=22",
      "paragraphs": [
        "夜間飛行的限制不只是外面比較暗，還包含暗適應、中央弱光盲區、深度線索減少及光源造成的錯覺。座艙內外亮度差若過大，也會使在儀表與外界間切換時更難保留低光敏感度。",
        "飛前應安排暗適應、照明與可用導航參考，夜間航線也要考慮迫降與地形線索不足。晴朗夜空仍可能沒有地平線，不能只因能見度數字高就認定外部姿態參考充分。"
      ],
      "references": [
        {
          "title": "FAA AIM 8-1：適飛、生理與視覺",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html",
          "checked": "2026-09-12"
        }
      ]
    },
    {
      "id": "night-blind",
      "english": "Night Blind Spot",
      "title": "夜間中央盲區",
      "parent": "night-vision",
      "locator": "PHAK C 版 · 17-22",
      "printedPage": "17-22",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=22",
      "paragraphs": [
        "低光時中央凹的錐狀細胞效能下降，又缺少桿狀細胞，形成中央弱光目標難以辨識的區域。這與視神經盤缺少感光細胞的生理盲點不同，前者特別與低照度和正中央視線有關。",
        "若一顆微弱星光或遠方小燈在直視時消失，稍微偏看可能重新看見。飛行掃描應利用這個特性而不是死盯目標，但也不能大幅轉頭造成新的遮蔽或在轉彎中增加前庭迷向。"
      ]
    },
    {
      "id": "dark-adaptation",
      "english": "Dark Adaptation",
      "title": "暗適應",
      "parent": "night-vision",
      "locator": "PHAK C 版 · 17-23",
      "printedPage": "17-23",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=23",
      "paragraphs": [
        "由明亮轉入黑暗後，視覺敏感度需逐步恢復，桿狀細胞的適應比初期變化更慢，常需要約三十分鐘或更久。時間受先前光照與個人狀況影響，並非過了某一分鐘就保證達到最佳夜視。",
        "強烈白光、手機或手電筒照射可能破壞已建立的適應。應在飛前管理照明並預先找到開關；需要亮光處理安全問題時，先處理問題，再認知自己的夜視可能暫時下降並調整後續操作。"
      ],
      "references": [
        {
          "title": "FAA AIM 8-1：適飛、生理與視覺",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html",
          "checked": "2026-09-12"
        }
      ]
    },
    {
      "id": "night-scan",
      "english": "Scanning Techniques",
      "title": "夜間掃描技巧",
      "parent": "night-vision",
      "locator": "PHAK C 版 · 17-23",
      "printedPage": "17-23",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=23",
      "paragraphs": [
        "夜間掃描可把視線略偏離微弱目標，讓桿狀細胞較多的區域參與，並以有停留的小區塊搜索。偏心觀察不是永遠不看目標，而是用不同視線位置互補偵測與辨識能力。",
        "原書建議將視線偏離目標約 10 度再比較，但實際效果受光照與個人視覺影響。持續換區而非盯住孤立光點，既能降低目標消失，也能減少自動運動錯覺；仍要兼顧儀表與姿態確認。"
      ],
      "references": [
        {
          "title": "FAA AIM 8-1：適飛、生理與視覺",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html",
          "checked": "2026-09-12"
        }
      ]
    },
    {
      "id": "night-protection",
      "english": "Night Vision Protection",
      "title": "保護夜視能力",
      "parent": "night-vision",
      "locator": "PHAK C 版 · 17-23",
      "printedPage": "17-23",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=23",
      "paragraphs": [
        "保護夜視要減少不必要強光、保持視窗清潔並使座艙燈亮到足以讀取關鍵資料。燈太暗會增加讀錯，太亮則影響外界觀察，因此目標是符合任務的照明，而不是一律調到最低。",
        "紅光可能有助於降低某些暗適應影響，但也會使航圖顏色與細節難辨，不能當作所有工作唯一光源。用適當亮度核對重要標示，並預先管理平板與閃光來源，避免接近地面才忙於找燈。"
      ]
    },
    {
      "id": "self-stress",
      "english": "Self-Imposed Stress",
      "title": "自身因素造成的夜視負擔",
      "parent": "night-vision",
      "locator": "PHAK C 版 · 17-25",
      "printedPage": "17-25",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=25",
      "paragraphs": [
        "吸菸相關 CO 暴露、酒精、疲勞、某些藥物與缺氧，都可能降低夜視與視覺判斷。這些因素會疊加，不是只要眼鏡度數正確就能排除；夜間視覺對供氧不足尤其敏感。",
        "若白天已疲勞，不能因夜間路線較短就忽略風險。應把健康、睡眠、光照與供氧需求放在同一個飛前評估中，且不要用高劑量維生素或自行用藥作為恢復夜視與適飛的捷徑。"
      ],
      "references": [
        {
          "title": "FAA AIM 8-1：適飛、生理與視覺",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html",
          "checked": "2026-09-12"
        }
      ]
    },
    {
      "id": "depth",
      "english": "Distance Estimation and Depth Perception",
      "title": "距離估計與深度知覺",
      "parent": "night-vision",
      "locator": "PHAK C 版 · 17-25",
      "printedPage": "17-25",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=25",
      "paragraphs": [
        "距離感來自相對大小、遮擋、透視、地面紋理、清晰度及運動等多種線索。夜間常只剩燈光，物體大小或亮度的先驗假設容易出錯，所以同樣看起來很近的光可能來自不同距離。",
        "跑道平行邊線在遠方看似會合是透視線索，但寬度、坡度與地形不同會改變印象。應以已知位置和可靠進場參考交叉確認，不要只用燈亮不亮或一眼的大小感決定下降與拉平。"
      ],
      "points": [
        "相對大小：需知道或合理估計物體真實尺寸，未知尺寸不可直接當距離尺。",
        "透視：平行線看似向遠方會合，跑道寬度與坡度會改變外觀。",
        "遮擋與紋理：前物擋後物、近處細節較清楚；黑暗或霾可能移除這些線索。",
        "亮度：受燈光功率、方向和天氣影響，不是單一可靠測距方法。"
      ]
    },
    {
      "id": "binocular",
      "english": "Binocular Cues",
      "title": "雙眼深度線索",
      "parent": "night-vision",
      "locator": "PHAK C 版 · 17-26",
      "printedPage": "17-26",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=26",
      "paragraphs": [
        "雙眼從略不同位置觀看近物，差異可提供深度資訊，但物體距離很遠時，兩眼角度差變小，實用性也降低。飛行中多數外部目標距離很遠，因此不能把日常近距離的立體感直接當成遠方距離尺。",
        "即使雙眼視覺正常，夜間仍可能估錯跑道或交通距離。需要結合單眼也能使用的透視、相對運動與已知位置線索；一眼被遮擋或視覺功能改變時，則應依情況進一步評估。"
      ]
    },
    {
      "id": "night-illusions",
      "english": "Night Vision Illusions",
      "title": "夜間視覺錯覺總覽",
      "parent": "vision",
      "locator": "PHAK C 版 · 17-26",
      "printedPage": "17-26",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=26",
      "paragraphs": [
        "夜間少量燈光會讓大腦自行補足缺少的形狀與距離資訊，產生光點移動、假地平線或交通方向反轉等錯覺。這些現象不是只發生在視力差的人，也不能以飛行時數保證免疫。",
        "每次判斷光點是什麼、在哪裡、往哪裡走時，都應找第二種線索驗證。若姿態、位置與所見燈光不一致，優先保持控制並重新辨識，而不是急著讓航空器配合第一個印象。"
      ]
    },
    {
      "id": "autokinesis",
      "english": "Autokinesis",
      "title": "自動運動錯覺",
      "parent": "night-illusions",
      "locator": "PHAK C 版 · 17-26",
      "printedPage": "17-26",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=26",
      "paragraphs": [
        "在黑暗背景長時間注視單一靜止光點，光點可能看似自行移動，稱為 autokinesis。缺乏周圍參考使眼球微小運動難以被大腦正確解讀，機師可能把虛假的移動當成交通或地平線變化。",
        "不要跟著孤立光點反覆修正航向或姿態，應恢復掃視、看不同距離與位置的參考並交叉確認儀表。原書提到數秒至約十秒即可出現，這是警覺提示，不是未滿秒數就可放心凝視。"
      ]
    },
    {
      "id": "false-horizon",
      "english": "False Horizon",
      "title": "假地平線",
      "parent": "night-illusions",
      "locator": "PHAK C 版 · 17-26",
      "printedPage": "17-26",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=26",
      "paragraphs": [
        "斜雲層、海岸燈、城市燈光或星空可能形成一條看似水平的線，但它未必是真正地平線。若航空器為了對齊這條假線而傾斜，機師可能在感覺正常的情況下建立不必要坡度。",
        "沿黑暗海面接近亮岸時尤其要驗證岸線與姿態的關係。應依可靠儀表與固定地形資訊確認，不要因一條燈線很整齊就假設水平；地面道路本來也可能有坡度或不與飛行方向垂直。"
      ]
    },
    {
      "id": "reversible",
      "english": "Reversible Perspective Illusion",
      "title": "可反轉的方向知覺",
      "parent": "night-illusions",
      "locator": "PHAK C 版 · 17-26",
      "printedPage": "17-26",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=26",
      "paragraphs": [
        "夜間只看到少量航空器燈光時，可能把接近的交通誤認為正在遠離，或對相對方向產生相反解讀。缺少完整機身輪廓與背景距離，會使同一組光點支持不只一種空間想像。",
        "應比較航行燈組合、相對方位與變化趨勢，並運用 ATC 或交通資訊協助搜尋。亮度變化可能提供線索但也受光源與大氣影響，不能單憑變暗就認定對方正在遠離。"
      ]
    },
    {
      "id": "size-distance",
      "english": "Size-Distance Illusion",
      "title": "大小與距離錯覺",
      "parent": "night-illusions",
      "locator": "PHAK C 版 · 17-27",
      "printedPage": "17-27",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=27",
      "paragraphs": [
        "光源變亮可能被解讀為接近，變暗則被解讀為遠離，但燈光功率、指向角度、霧霾或調光也會造成同樣變化。視覺系統把亮度和距離連結的習慣，在缺乏其他線索時容易誤導。",
        "例如跑道燈調亮後，看似更近不表示航空器瞬間前進。應維持已確認的進場路徑並重新比較位置與高度，不要單因燈變亮就提前拉平或大幅改變下降率。"
      ]
    },
    {
      "id": "fixation",
      "english": "Fascination (Fixation)",
      "title": "注意力固著",
      "parent": "night-illusions",
      "locator": "PHAK C 版 · 17-27",
      "printedPage": "17-27",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=27",
      "paragraphs": [
        "Fixation 是注意力被單一目標或任務占住，使其他姿態、交通、速度或地形線索被忽略。夜間外界資訊少，更容易長時間盯著某燈光、儀表或跑道，直到重要偏差已經擴大才察覺。",
        "自編例：為了把航跡線置中而持續低頭，忽略速度下降和接近地形。可用固定交叉檢查、工作分配及必要時暫停次要任務打斷固著；不是把某一數值調得完美就代表整體安全。"
      ]
    },
    {
      "id": "flicker",
      "english": "Flicker Vertigo",
      "title": "閃光性眩暈",
      "parent": "night-illusions",
      "locator": "PHAK C 版 · 17-27",
      "printedPage": "17-27",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=27",
      "paragraphs": [
        "閃爍光源可能造成噁心、眩暈及其他不良反應，原書以每秒約 4～20 次的閃爍說明易引發問題的條件。旋轉螺旋槳遮斷日光、反射或閃燈都可能形成刺激，個人反應並不一致。",
        "應避免凝視閃光，依情況調整遮陽、視線或適用燈光設定，同時保持操縱與必要防撞功能。若出現嚴重症狀，應交接操縱或尋求協助與醫療評估；不要自行用閃光測試耐受度。"
      ]
    },
    {
      "id": "night-landing",
      "english": "Night Landing Illusions",
      "title": "夜間著陸錯覺",
      "parent": "vision",
      "locator": "PHAK C 版 · 17-27",
      "printedPage": "17-27",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=27",
      "paragraphs": [
        "夜間著陸同時結合寬度、坡度、黑暗地形與燈光錯覺，某些因素促使進場偏低，另一些卻使人飛高或提早拉平。這些影響不會簡單互相抵消，機師也難靠主觀感覺判斷哪一個占優勢。",
        "應提前了解機場與地形，保留可用的下滑、距離及高度參考，並採用穩定進場決策。若天氣或視覺條件不再支持既定路徑，及早重飛或改航，不以「快到了」作為繼續下降理由。"
      ]
    },
    {
      "id": "enhanced",
      "english": "Enhanced Night Vision Systems",
      "title": "增強夜間視覺系統",
      "parent": "vision",
      "locator": "PHAK C 版 · 17-27",
      "printedPage": "17-27",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=27",
      "paragraphs": [
        "合成視覺與感測器增強視覺能協助呈現地形或外界，但資料來源與限制不同。某系統畫出跑道可能來自資料庫，另一系統顯示的影像則來自實際感測；兩者不能只因畫面相似就當成同樣證據。",
        "使用前應知道影像如何產生、何時可能失準及機型獲准的用途。增加情境資訊不等於自動取得較低進場最低標準；設備、訓練與操作授權仍須一起符合，才能使用特定運行權利。"
      ],
      "references": [
        {
          "title": "FAA AIM 5-4：EFVS 操作與 SVS 的區別",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_4.html",
          "checked": "2026-09-12"
        }
      ]
    },
    {
      "id": "svs",
      "english": "Synthetic Vision System",
      "title": "合成視覺系統",
      "parent": "enhanced",
      "locator": "PHAK C 版 · 17-28",
      "printedPage": "17-28",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=28",
      "paragraphs": [
        "SVS 以地形與障礙資料庫、導航位置及姿態資料產生外界的合成圖像，不是即時拍攝窗外。即使實際外面有雲、施工或未收錄障礙，螢幕仍可能呈現清楚地形，因此不能以畫面清晰證明外界可見。",
        "它能提高空間位置意識，但資料庫、位置或姿態錯誤也會影響圖像。是否可用於特定操作必須看核准條件；一般 SVS 顯示不等同符合 EFVS 要求，也不能取代必要的自然目視參考。"
      ],
      "references": [
        {
          "title": "FAA AIM 5-4：EFVS 操作與 SVS 的區別",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_4.html",
          "checked": "2026-09-12"
        }
      ],
      "points": [
        "來源：資料庫＋導航／姿態解算 → 合成外界圖像。",
        "不直接量到當下雲霧、臨時障礙或跑道占用狀態；這些資訊若存在也須確認額外來源。",
        "即時感測影像、合成地形與飛行引導符號要分清；螢幕有跑道並不等於依法取得必要外界目視參考。"
      ]
    },
    {
      "id": "efvs",
      "english": "Enhanced Flight Vision System",
      "title": "增強飛行視覺系統",
      "parent": "enhanced",
      "locator": "PHAK C 版 · 17-28",
      "printedPage": "17-28",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=28",
      "paragraphs": [
        "EFVS 使用感測器取得外界影像，並依核准設計與飛行引導資訊呈現，可能在某些低能見度條件提供額外視覺線索。感測器仍受天氣、波段、光源與系統限制影響，不能保證看穿所有霧或辨識每個障礙。",
        "依 14 CFR 91.176 的特定操作，可在滿足設備、資格、訓練、視覺參考與其他條件下使用 EFVS。一般攝影機、平板影像或未具相應核准的增強視覺，不能自行比照取得下降至較低高度的權利。"
      ],
      "references": [
        {
          "title": "FAA AIM 5-4：EFVS 操作與 SVS 的區別",
          "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_4.html",
          "checked": "2026-09-12"
        },
        {
          "title": "FAA：EFVS 現行操作政策與規則入口",
          "url": "https://www.faa.gov/about/office_org/headquarters_offices/avs/offices/afx/afs/afs400/afs410/efvs",
          "checked": "2026-09-12"
        }
      ],
      "currentNote": "原書的發展中設備與核准描述具有年代背景；現行 EFVS 操作按 91.176、機型核准、訓練與適用授權判斷。一般 SVS 或 EVS 影像不自動具備相同操作權利。",
      "points": [
        "來源：實際感測器取得外界訊號，經處理與核准顯示方式呈現。",
        "可見能力依波段、天氣、設備及燈光而異，不能假設所有 LED 或所有霧都同樣清晰。",
        "依核准範圍，不同 EFVS 操作有不同下降、接地與滑跑條件；按 FAA 現行規則與個案授權使用。"
      ]
    },
    {
      "id": "summary",
      "english": "Chapter Summary",
      "title": "本章整合與後續閱讀",
      "parent": null,
      "locator": "PHAK C 版 · 17-29",
      "printedPage": "17-29",
      "source": "https://www.faa.gov/sites/faa.gov/files/19_phak_ch17.pdf#page=29",
      "paragraphs": [
        "本章將供氧、感官與當日健康串成一個飛行前及航中的評估流程：先辨識可能受損的功能，再選可靠資訊驗證，並在能力下降前調整計畫。體檢證明、主觀清醒與實際適飛狀態必須分開理解。",
        "可用夜間高地機場進場案例，自行列出疲勞、供氧、跑道錯覺與迷向風險，再說明何時停止或求助。附件所列附錄 A～C、字彙表及索引的官方入口列於下方，供性能讀圖、術語查詢與標誌複習；它們另屬參考資料。"
      ],
      "references": [
        {
          "title": "Appendix A：Cessna 172R／Challenger 605 性能資料 · A-1",
          "url": "https://www.faa.gov/sites/faa.gov/files/20_phak_appendices.pdf#page=1",
          "checked": "2026-09-12"
        },
        {
          "title": "Appendix B：縮寫與 NOTAM 縮略語 · B-1",
          "url": "https://www.faa.gov/sites/faa.gov/files/20_phak_appendices.pdf#page=9",
          "checked": "2026-09-12"
        },
        {
          "title": "Appendix C：機場標誌與標線 · C-1",
          "url": "https://www.faa.gov/sites/faa.gov/files/20_phak_appendices.pdf#page=21",
          "checked": "2026-09-12"
        },
        {
          "title": "Glossary：FAA PHAK 字彙表",
          "url": "https://www.faa.gov/regulationspolicies/handbooksmanuals/aviation/phak/glossary",
          "checked": "2026-09-12"
        },
        {
          "title": "Index：FAA PHAK 索引",
          "url": "https://www.faa.gov/regulationspolicies/handbooksmanuals/aviation/phak/index",
          "checked": "2026-09-12"
        }
      ],
      "points": [
        "附錄 A：配合性能章練習讀表，數據限定原書範例，不能當成實際航空器現行 AFM／POH。",
        "附錄 B：查原書縮寫與 NOTAM 用語，遇舊服務或名稱仍需回查現行發布資料。",
        "附錄 C：配合第十四章複習標誌和等待線，實際機場以有效圖表、現場及管制資訊為準。",
        "字彙表用來找定義，索引用來找概念出現的頁碼；兩者是工具，不代表已另編逐詞或逐附錄教材。"
      ]
    }
  ],
  "confusions": [
    {
      "title": "氧氣比例與分壓",
      "clarification": "高度增加時主要問題之一是分壓降低。",
      "example": "不能說高空大氣完全沒有氧氣。"
    },
    {
      "title": "感覺與實際姿態",
      "clarification": "內耳及視覺可能受到錯覺影響。",
      "example": "感覺正在轉彎不保證儀表一定錯。"
    },
    {
      "title": "缺氧、過度換氣與 CO",
      "clarification": "三者症狀可能重疊，但機制與需要處理的原因不同。",
      "example": "高空麻刺感不能直接當成緊張；一般血氧儀正常也不能排除 CO。"
    },
    {
      "title": "供氧的高度與潛水等待的高度",
      "clarification": "91.211(a) 依座艙壓力高度；FAA 潛水等待建議的 8,000 ft 分界為實際飛行高度 AMSL。",
      "example": "不能拿低座艙高度替高空噴射機選較短的潛水等待建議。"
    },
    {
      "title": "體檢有效與今天適飛",
      "clarification": "證明有效不能取代當日健康、藥物及疲勞評估。",
      "example": "急性疾病或藥物嗜睡仍可能禁止執行飛行職務。"
    },
    {
      "title": "八小時與不受酒精影響",
      "clarification": "時間、濃度及功能條件都要符合，不是擇一。",
      "example": "已過八小時但仍宿醉，不代表可以飛。"
    },
    {
      "title": "兩種盲點",
      "clarification": "視神經盤沒有感光細胞；夜間中央盲區與中央凹缺少桿狀細胞有關。",
      "example": "偏心觀察幫助弱光辨識，但不能讓所有座艙遮蔽與生理盲點消失。"
    },
    {
      "title": "SVS 與 EFVS",
      "clarification": "合成資料庫圖像與實際感測影像不同，核准用途亦不同。",
      "example": "SVS 畫出跑道，不代表窗外可見或已取得 EFVS 操作權利。"
    }
  ],
  "scenario": "自編案例：學員前一晚睡眠不足，又因行程壓力認為「喝咖啡就能照常」。先辨認疲勞與外在壓力可能共同影響判斷，與教官討論是否需要調整安排，而非把主觀意志當成能力證明。",
  "question": "關於空間迷向，何者較正確？",
  "options": [
    "身體感覺永遠可靠",
    "感官可能誤導，需要適當訓練與可信參考",
    "只有沒有經驗的人才會遇到"
  ],
  "answer": 1,
  "explanation": "空間迷向源於感官限制，不能以自信排除；實際處置需依訓練與適用程序。",
  "verified": true,
  "reader": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=423",
  "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=423",
  "detailMode": "outline",
  "checked": "2026-09-12",
  "coverageNote": "依提供目錄完整展開 73 節；保留英文原名、中文詳解與 FAA 原文頁碼。醫療、藥物與供氧要求附現行來源；迷向示範說明原理，實作需適當教官及安全安排。附錄 A～C、字彙表與索引另列於章末官方閱讀入口。"
};
