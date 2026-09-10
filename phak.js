export const phakDocument = {
  "id": "phak25c",
  "authority": "FAA",
  "title": "PHAK 飛行知識手冊",
  "english": "Pilot’s Handbook of Aeronautical Knowledge",
  "number": "FAA-H-8083-25C",
  "edition": "C 版（2023）",
  "checked": "2026-09-08",
  "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
  "reader": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf",
  "accessSource": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
  "chapters": [
    {
      "id": "phak25c-1",
      "number": 1,
      "title": "飛行入門與訓練路徑",
      "english": "Introduction to Flying",
      "section": "第 1 章；1-1～1-24，全章目錄逐節講解",
      "goal": "理解美國飛行訓練、證照、檢定與官方資料的關係。",
      "primer": "從原書小節逐步理解航空制度與訓練路徑；每節保留英文原名、中文講解與來源頁碼，制度變動另列查核說明。",
      "terms": [
        "Certificate · 證照",
        "Rating · 檢定",
        "Endorsement · 簽註"
      ],
      "prompts": [
        "你能用自己的話解釋「從飛行目標選擇訓練路徑」，並指出適用條件嗎？",
        "本章案例中，哪些資料或條件改變後，需要重新判斷？"
      ],
      "keyPoints": [
        "從航空史理解安全監理與經濟管制的差異",
        "分辨 CFR、AIM、手冊、AC、飛航出版品與 NOTAM",
        "依所屬證照閱讀權利、限制與簽註，避免混用",
        "把學校、CFI、學生資格、醫療條件與考試標準串成路徑"
      ],
      "detailSections": [
        {
          "id": "introduction",
          "english": "Introduction",
          "title": "本章導論",
          "parent": null,
          "locator": "PHAK C 版 · 1-1",
          "printedPage": "1-1",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=1",
          "paragraphs": [
            "PHAK 的任務，是為初學與進階機師建立共通知識。本章先回答「航空制度如何形成、遇到問題去哪裡查、如何開始訓練」，之後才進入空氣動力、系統及氣象。你可以把它當作後續學習的資料導航。",
            "本章提到的手冊、法規與考試標準各有用途。讀懂概念後，還要分辨哪份文件規定資格、哪份提供操作資料，以及哪份用來評量能力；讀完知識教材不會直接產生飛行權利。"
          ]
        },
        {
          "id": "flight-history",
          "english": "History of Flight",
          "title": "飛行的歷史",
          "parent": null,
          "locator": "PHAK C 版 · 1-2",
          "printedPage": "1-2",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=2",
          "paragraphs": [
            "早期模仿鳥類拍翼的嘗試，受限於人的肌肉能力與對飛行原理的理解。熱氣球使人能升空，但升空不等於能控制速度與方向；風箏與滑翔研究則促使人分開思考支撐、推進及控制。",
            "Cayley 研究固定翼飛行的基本構成，Lilienthal 累積滑翔經驗，萊特兄弟再透過風洞、模型與試飛修正設計。1903 年 12 月 17 日的動力飛行成果，值得學的是以測試驗證假設，而不只是記住日期。"
          ]
        },
        {
          "id": "faa-history",
          "english": "History of the Federal Aviation Administration (FAA)",
          "title": "FAA 的發展背景",
          "parent": null,
          "locator": "PHAK C 版 · 1-3",
          "printedPage": "1-3",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=3",
          "paragraphs": [
            "早期航空活動規模小、成本高，制度也尚未成熟。當航空從運動和展示，逐漸轉向定期載客、郵運與大規模運輸，就需要穩定航路、可靠航空器及能共同遵守的標準。",
            "書中以 1914 年聖彼得堡至坦帕的定期航線，以及第一次世界大戰帶來的航空器發展，說明需求如何擴大。這一節的重點不是「FAA 一開始就存在」，而是今天的機關經過多次制度重組才形成。"
          ]
        },
        {
          "id": "air-mail",
          "english": "Transcontinental Air Mail Route",
          "title": "橫貫美國航空郵運航路",
          "parent": "faa-history",
          "locator": "PHAK C 版 · 1-4",
          "printedPage": "1-4",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=4",
          "paragraphs": [
            "航空郵運把飛機從偶發飛行帶向跨區域、重複運作的服務。紐約至舊金山的航路需要中途停靠與導航支援；地面燈塔和方向指引讓飛行不再只依靠熟悉地形。",
            "1926 年 Air Commerce Act 把航空交通規則、機師發照、航空器認證、航路及導航設施納入聯邦角色。因果關係是：可靠運輸需要共同基礎設施與標準，而不只是增加更多飛機。"
          ]
        },
        {
          "id": "federal-certification",
          "english": "Federal Certification of Pilots and Mechanics",
          "title": "機師與維修人員的聯邦認證",
          "parent": "faa-history",
          "locator": "PHAK C 版 · 1-4",
          "printedPage": "1-4",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=4",
          "paragraphs": [
            "1927 年開始的聯邦機師與維修人員發照，把「某人說自己會操作或維修」轉成有共同門檻的資格制度。航空器的設計與適航認證也在發展，顯示安全需要同時處理人員和機器。",
            "書中接著談到商務航空局與早期 ATC 中心。把這些放在一起看：合格人員、合格航空器與交通協調是不同防線，任何一項都不能自動取代另外兩項。"
          ]
        },
        {
          "id": "civil-act-1938",
          "english": "The Civil Aeronautics Act of 1938",
          "title": "1938 年民用航空法",
          "parent": "faa-history",
          "locator": "PHAK C 版 · 1-5",
          "printedPage": "1-5",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=5",
          "paragraphs": [
            "這是正文出現、你貼出的目錄未列出的標題。1938 年的制度調整建立 Civil Aeronautics Authority，並使票價與航線等經濟面向成為監管工作；後續再分出行政與委員會角色。",
            "要留意歷史上的 CAA 縮寫在不同時期代表不同名稱，不能直接套成今天其他國家的民航機關。此處應掌握制度分工如何改變，而不是將所有曾負責航空的機關都叫 FAA。"
          ],
          "supplementalHeading": true
        },
        {
          "id": "act-1958",
          "english": "The Federal Aviation Act of 1958",
          "title": "1958 年聯邦航空法",
          "parent": "faa-history",
          "locator": "PHAK C 版 · 1-6",
          "printedPage": "1-6",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=6",
          "paragraphs": [
            "航空交通增加、噴射機速度提高及空中相撞事故，凸顯分散管理難以應付新的交通複雜度。1958 年立法建立 Federal Aviation Agency，並整合民用與軍用共同使用的航行及航管系統管理。",
            "注意這時的名稱是 Agency。現在熟悉的 Administration 名稱是後來納入 DOT 時使用；兩者都縮寫 FAA，因此閱讀年表時要看全名和年份，才不會把兩次制度變動混成一次。"
          ]
        },
        {
          "id": "dot",
          "english": "Department of Transportation (DOT)",
          "title": "美國運輸部",
          "parent": "faa-history",
          "locator": "PHAK C 版 · 1-6",
          "printedPage": "1-6",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=6",
          "paragraphs": [
            "DOT 的設立把不同運輸模式放在共同的部會架構中，並於 1967 年開始運作。FAA 成為其中的航空機關，名稱由 Federal Aviation Agency 改為 Federal Aviation Administration。",
            "本段也涉及事故調查與其他任務的重新分配。學習時要把運輸政策、航空安全監理和事故調查分開；它們會互相合作，但不能因為都和交通有關就認為是同一項權責。"
          ]
        },
        {
          "id": "atc-automation",
          "english": "ATC Automation",
          "title": "航管自動化",
          "parent": "faa-history",
          "locator": "PHAK C 版 · 1-6",
          "printedPage": "1-6",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=6",
          "paragraphs": [
            "雷達與電腦的結合，使管制員能更直接看到航空器識別、高度與地速，部分例行資料處理由系統協助完成。目的在讓人員把注意力用於交通衝突與隔離等重要工作。",
            "自動化不是移除管制員，而是改變人與系統的分工。交通成長又會使既有能力不足，因此本段連到 1982 年 NAS Plan 的設備、通信與監視改進；它是一個持續更新的系統問題。"
          ]
        },
        {
          "id": "patco",
          "english": "The Professional Air Traffic Controllers Organization (PATCO) Strike",
          "title": "PATCO 航管人員罷工",
          "parent": "faa-history",
          "locator": "PHAK C 版 · 1-6",
          "printedPage": "1-6",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=6",
          "paragraphs": [
            "1981 年 PATCO 罷工造成航管人力重大中斷，政府解僱大量參與人員，並用交通限制等方式維持系統運作。書中藉此說明航管能力不只由雷達或電腦數量決定，也依賴受訓人員。",
            "這段歷史可以連到容量管理：當可提供的服務能力下降，系統可能需要降低流量，而不是維持原本班表不變。這是理解人力、工作負荷和安全裕度的例子，不是當今航管人力的統計。"
          ]
        },
        {
          "id": "deregulation",
          "english": "The Airline Deregulation Act of 1978",
          "title": "1978 年航空業解除管制法",
          "parent": "faa-history",
          "locator": "PHAK C 版 · 1-7",
          "printedPage": "1-7",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=7",
          "paragraphs": [
            "解除管制主要針對航線、市場進入與票價等經濟管制，讓航空公司有更大的競爭空間。書中介紹 CAB 的角色及其經濟管制逐步退場，說明航空市場如何轉變。",
            "「解除管制」不表示機師資格、航空器適航或飛航安全要求全部取消。可以把兩個問題分開：誰能決定票價與航線，是經濟制度；飛機和人員如何符合安全標準，是另一套要求。"
          ]
        },
        {
          "id": "faa-role",
          "english": "The Role of the FAA",
          "title": "FAA 的角色",
          "parent": null,
          "locator": "PHAK C 版 · 1-7",
          "printedPage": "1-7",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=7",
          "paragraphs": [
            "FAA 的核心工作涉及民用航空安全標準、監理與空域系統等領域。本章把角色說明接到 CFR 和地方辦公室，是要讓學員知道規定從何而來，以及實際問題由哪個管道處理。",
            "自編例：對執照申請有問題，和飛行中向航管申請許可，是不同情境。兩者都可能和 FAA 有關，但聯絡對象、所需資訊與決策程序不能互相替代。"
          ]
        },
        {
          "id": "cfr",
          "english": "The Code of Federal Regulations (CFR)",
          "title": "聯邦法規彙編的閱讀方法",
          "parent": "faa-role",
          "locator": "PHAK C 版 · 1-7",
          "printedPage": "1-7",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=7",
          "paragraphs": [
            "CFR 把一般性、持續適用的聯邦規則按 Title、Chapter、Part、Section 等層級整理。航空學習常見的 14 CFR 中，Part 61 涉及機師與教官資格，Part 91 涉及一般運作，Part 43 涉及維修等事項。",
            "讀「14 CFR 61.87」時，要能分辨 Title 14、Part 61 與具體條文。查到一段後還需讀適用對象、前提、例外及相互引用；只截取一句話，容易把條件式允許誤讀為所有情況都允許。"
          ]
        },
        {
          "id": "locations",
          "english": "Primary Locations of the FAA",
          "title": "FAA 主要據點",
          "parent": "faa-role",
          "locator": "PHAK C 版 · 1-8",
          "printedPage": "1-8",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=8",
          "paragraphs": [
            "書中用總部、Mike Monroney Aeronautical Center 及技術中心等例子，說明政策、訓練後勤、研究測試等工作需要不同設施。這些單位共同支援航空系統，不都是學員日常申請的窗口。",
            "本節應記住職能差異，不必把舊版辦公室數量或組織名稱當成永久答案。真正聯絡時使用目前官方目錄，按問題與服務地區找單位，避免寄往歷史資料中的地址。"
          ],
          "references": [
            {
              "title": "FAA 地區辦公室與服務範圍",
              "url": "https://www.faa.gov/about/office_org/field_offices/fsdo",
              "checked": "2026-09-10"
            }
          ]
        },
        {
          "id": "field-offices",
          "english": "Field Offices",
          "title": "地方辦公室",
          "parent": "locations",
          "locator": "PHAK C 版 · 1-8",
          "printedPage": "1-8",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=8",
          "paragraphs": [
            "地方辦公室把全國標準落實到具體的營運者、航空器和人員。Flight Standards 的工作包含認證、檢查、監督與執法，並非只在有人考照時出現。",
            "理解地方服務時可先列出自己的問題：資格、維修、營運還是其他事項，再核對該辦公室職掌及服務區域。地理上最近，不一定就能處理每一種 FAA 業務。"
          ],
          "references": [
            {
              "title": "FAA 地區辦公室與服務範圍",
              "url": "https://www.faa.gov/about/office_org/field_offices/fsdo",
              "checked": "2026-09-10"
            }
          ]
        },
        {
          "id": "fsdo",
          "english": "Flight Standards District Office (FSDO)",
          "title": "飛航標準地區辦公室",
          "parent": "field-offices",
          "locator": "PHAK C 版 · 1-9",
          "printedPage": "1-9",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=9",
          "paragraphs": [
            "正文在 Field Offices 下另外說明 FSDO。它是航空社群與飛航標準體系的重要接點，服務涉及人員資格、航空器維修、營運與法規執行等事項。",
            "若要詢問訓練或資格，先整理目標證照、航空器種類和具體問題，會比只問「我能不能飛」更有用。查詢服務區域與聯絡方式應使用 FAA 現行 FSDO 頁面。"
          ],
          "supplementalHeading": true,
          "references": [
            {
              "title": "FAA 地區辦公室與服務範圍",
              "url": "https://www.faa.gov/about/office_org/field_offices/fsdo",
              "checked": "2026-09-10"
            }
          ]
        },
        {
          "id": "asi",
          "english": "Aviation Safety Inspector (ASI)",
          "title": "航空安全檢查員",
          "parent": "faa-role",
          "locator": "PHAK C 版 · 1-9",
          "printedPage": "1-9",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=9",
          "paragraphs": [
            "ASI 是 FAA 執行安全標準與監理工作的專業人員，其工作可能涵蓋營運、適航、製造或人員評量等不同專長。不是每位檢查員都處理全部類型的航空問題。",
            "與 CFI 相比，ASI 的主要位置在主管機關監理體系；與 DPE 相比，ASI 是 FAA 人員，而 DPE 是在授權範圍內執行特定認證任務的民間指定人員。辨認角色有助於找對協助。"
          ]
        },
        {
          "id": "faasteam",
          "english": "FAA Safety Team (FAASTeam)",
          "title": "FAA 安全推廣團隊",
          "parent": "faa-role",
          "locator": "PHAK C 版 · 1-9",
          "printedPage": "1-9",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=9",
          "paragraphs": [
            "FAASTeam 透過教育、推廣及與航空社群合作，促進安全習慣與持續學習。它關心的不只是學员能不能通過一次考試，也包括取得資格後如何繼續改善判斷和操作。",
            "自編例：參加安全研討會可以增進特定主題理解，但不能因此推定自己已獲得新的機型操作權利。推廣教育、訓練簽註和正式證照，各自有不同的成立條件。"
          ]
        },
        {
          "id": "assistance",
          "english": "Obtaining Assistance from the FAA",
          "title": "如何向 FAA 尋求協助",
          "parent": "faa-role",
          "locator": "PHAK C 版 · 1-9",
          "printedPage": "1-9",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=9",
          "paragraphs": [
            "本節列出官方聯絡與資料取得的途徑。最有效的做法，是先辨認問題類型，再附上相關文件名稱、版本和待確認的條件，讓承辦人能理解你真正需要的資訊。",
            "例如「Part 61 某條是否適用我的訓練情境」比「網路說可以，是真的嗎」更明確。不要把一般說明當作特殊情境的個別核准；聯絡方式也應回查現行官方頁面。"
          ],
          "references": [
            {
              "title": "FAA 地區辦公室與服務範圍",
              "url": "https://www.faa.gov/about/office_org/field_offices/fsdo",
              "checked": "2026-09-10"
            }
          ]
        },
        {
          "id": "aim",
          "english": "Aeronautical Information Manual (AIM)",
          "title": "航空資訊手冊",
          "parent": "assistance",
          "locator": "PHAK C 版 · 1-9",
          "printedPage": "1-9",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=9",
          "paragraphs": [
            "AIM 提供美國 NAS 的基本飛航資訊、航管程序與常用術語，適合回答「在這套系統中一般如何溝通與運作」。它與 CFR 的用途不同：CFR 是規則來源之一，AIM 則幫助理解程序與實施情境。",
            "不能因 AIM 不是 CFR 就把其中內容全部忽略，也不能把 AIM 每一句話都稱為獨立法條。閱讀時分辨規則引用、程序說明與建議，再依問題回查適用來源。"
          ]
        },
        {
          "id": "handbooks",
          "english": "Handbooks",
          "title": "航空訓練手冊",
          "parent": "assistance",
          "locator": "PHAK C 版 · 1-10",
          "printedPage": "1-10",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=10",
          "paragraphs": [
            "FAA 手冊依學習目的分工，例如 PHAK 說明航空知識，Airplane Flying Handbook 偏重飛行操作學習，儀器相關手冊則處理其專門主題。它們幫助理解和訓練，不是單一文件包辦所有需求。",
            "製造商的 AFM／POH 又是另一層：對應特定航空器的限制、程序與性能。自編例：理解失速可讀 PHAK；查某架飛機的限制速度，應核對該機適用的核准文件。"
          ]
        },
        {
          "id": "acs-circulars",
          "english": "Advisory Circulars (ACs)",
          "title": "諮詢通告與編號",
          "parent": "assistance",
          "locator": "PHAK C 版 · 1-10",
          "printedPage": "1-10",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=10",
          "paragraphs": [
            "AC 用於說明、指引或提供符合要求的可接受方法，並不是因為名稱有 FAA 就等同一條新法規。它可能幫助理解規定如何落實，但仍要讀本身的用途和適用說明。",
            "AC 編號通常由主題範圍、序號及修訂字母組成。例如讀到 AC 61-65 的某修訂版，要知道 61 是主題線索，後綴與字母不是證照等級。書中的舊修訂號不能當作目前最新版。"
          ]
        },
        {
          "id": "flight-publications",
          "english": "Flight Publications",
          "title": "飛航出版品",
          "parent": "assistance",
          "locator": "PHAK C 版 · 1-11",
          "printedPage": "1-11",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=11",
          "paragraphs": [
            "航圖、終端程序與機場資料等出版品，提供飛行規劃和運作所需的空間資訊。它們與用來學原理的課本不同，版次與有效日期直接影響是否適合使用。",
            "自編例：一張舊機場圖可用來練習看符號，卻不能只憑它判斷今天跑道和滑行道狀態。正式出版資料還需搭配臨時更新及適用通告，形成完整資訊。"
          ]
        },
        {
          "id": "pilot-info",
          "english": "Pilot and Aeronautical Information",
          "title": "機師與航空資訊",
          "parent": "faa-role",
          "locator": "PHAK C 版 · 1-12",
          "printedPage": "1-12",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=12",
          "paragraphs": [
            "航空資訊包含相對穩定的基礎資料，也包含短期變動。出版品更新週期無法立即吸收所有變化，因此要有補充通報機制，把影響飛行的事件傳達給使用者。",
            "理解這一節可以用兩個問題：這項資訊原本記在哪裡？從發布到我使用之間，可能發生哪些改變？這會自然連到 NOTAM 的用途，以及查閱時間的重要性。"
          ]
        },
        {
          "id": "notams",
          "english": "Notices to Airmen (NOTAMs)",
          "title": "飛航公告",
          "parent": "pilot-info",
          "locator": "PHAK C 版 · 1-12",
          "printedPage": "1-12",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=12",
          "paragraphs": [
            "NOTAM 傳達需要及時得知的設施、服務、程序或危害變化，例如跑道關閉、導航設備異常或特定限制。它不是用來取代所有航圖，而是讓使用者知道基礎資料之外的重要變動。",
            "讀公告時要找對識別、影響對象、地理與高度範圍、起迄時間及狀態；不能只看標題或某個縮寫。自編例：跑道夜間關閉的公告，不應被簡化成「這個機場永遠不能用」。"
          ],
          "currentNote": "保留原書標題。FAA 現行說明記載：2025-02-10 名稱由 Notice to Air Missions 改回 Notice to Airmen；縮寫仍為 NOTAM。查閱的是實際內容與時效，不只名稱。",
          "references": [
            {
              "title": "FAA NOTAM 現行說明",
              "url": "https://www.faa.gov/about/initiatives/notam/what_is_a_notam",
              "checked": "2026-09-10"
            }
          ]
        },
        {
          "id": "spans",
          "english": "Safety Program Airmen Notification System (SPANS)",
          "title": "安全活動通知系統",
          "parent": "pilot-info",
          "locator": "PHAK C 版 · 1-14",
          "printedPage": "1-14",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=14",
          "paragraphs": [
            "SPANS 在書中用來說明安全研討會與活動資訊如何通知機師，讓持續教育不必完全依賴紙本郵寄。它屬於學習和安全推廣資訊，目的與飛航前查看設施異常的 NOTAM 不同。",
            "不要因為兩者都有 notification 的概念就混用。收到活動通知不等於完成訓練或簽註；本節依書中功能解說，網站介面與可用活動需另行確認，不能把歷史操作畫面當成現行流程。"
          ]
        },
        {
          "id": "classification",
          "english": "Aircraft Classifications and Ultralight Vehicles",
          "title": "航空器分類與超輕型載具",
          "parent": null,
          "locator": "PHAK C 版 · 1-14",
          "printedPage": "1-14",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=14",
          "paragraphs": [
            "分類要先辨認語境。對機師資格而言，category、class、type 分別提供不同程度的操作分類；對航空器認證而言，相同單字可能描述不同設計或使用分類，不能把兩套例子直接互換。",
            "Ultralight vehicle 也不是「很小的飛機」的日常稱呼而已，而是涉及特定定義與條件。書中的 light-sport 定義則屬於該版背景，後續 MOSAIC 已改變相關制度；判斷某架航空器時須查其資料及現行定義。"
          ],
          "currentNote": "MOSAIC 於 2025 年發布並分階段實施，涉及 light-sport 航空器及 Sport Pilot 權利。本站保留 2023 年文件脈絡，不把原書的舊重量或性能界線當作現行完整規則。",
          "references": [
            {
              "title": "FAA MOSAIC 規則更新說明",
              "url": "https://www.faa.gov/newsroom/us-transportation-secretary-sean-p-duffy-announces-improvements-recreational-aviation",
              "checked": "2026-09-10"
            }
          ]
        },
        {
          "id": "certificates",
          "english": "Pilot Certifications",
          "title": "機師證照、檢定與簽註",
          "parent": null,
          "locator": "PHAK C 版 · 1-16",
          "printedPage": "1-16",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=16",
          "paragraphs": [
            "Certificate 表示證照資格；rating 進一步界定相關檢定；endorsement 則記錄由授權人員確認的特定訓練或授權。實際權利還會受到航空器、作業、近期經驗及適用條件影響。",
            "閱讀各證照時，固定用相同問題比較：能做什麼、不能做什麼、需哪些訓練、如何證明熟練度。不要把私人、商用與航線運輸資格只理解成「小飛機、中飛機、大飛機」。"
          ]
        },
        {
          "id": "sport",
          "english": "Sport Pilot",
          "title": "運動類機師",
          "parent": "certificates",
          "locator": "PHAK C 版 · 1-16",
          "printedPage": "1-16",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=16",
          "paragraphs": [
            "原文在 Pilot Certifications 下先介紹 Sport Pilot，然後才列它的 Privileges 與 Limitations。你貼出的目錄省略了這個父標題，若直接把後面兩項接在所有證照下面，會誤解適用對象。",
            "本節的定位是較特定範圍的運動與休閒航空資格，並非所有休閒飛行都必須使用這種證照。原書列出的訓練時數、機型與醫療途徑，要與後續制度變動分開看，不作當前個人資格的完整清單。"
          ],
          "supplementalHeading": true,
          "currentNote": "現行 Sport Pilot 與 LSA 規則受到 MOSAIC 調整；選擇訓練路徑時，需由適用規則與教官確認。",
          "references": [
            {
              "title": "FAA MOSAIC 規則更新說明",
              "url": "https://www.faa.gov/newsroom/us-transportation-secretary-sean-p-duffy-announces-improvements-recreational-aviation",
              "checked": "2026-09-10"
            }
          ]
        },
        {
          "id": "sport-privileges",
          "english": "Privileges:",
          "title": "權利：運動類機師",
          "parent": "sport",
          "locator": "PHAK C 版 · 1-16",
          "printedPage": "1-16",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=16",
          "paragraphs": [
            "本版以擔任特定輕型運動航空器 PIC、攜帶旅客、分攤特定費用及日間目視飛行等項目，示範 Sport Pilot 可行使的權利。每項都必須連同後續限制閱讀，不能只抄第一句。",
            "理解方法是把「能做的活動」和「成立條件」配對。例如分攤費用不等於可以任意販售載客服務；權利也不單由航空器外形決定，還要確認所受訓練、簽註和當時適用規則。"
          ],
          "currentNote": "上段解釋 2023 年本版的列舉方式，不宣稱其日夜、裝備及航空器範圍仍是現行完整限制；請併讀 MOSAIC 更新。",
          "references": [
            {
              "title": "FAA MOSAIC 規則更新說明",
              "url": "https://www.faa.gov/newsroom/us-transportation-secretary-sean-p-duffy-announces-improvements-recreational-aviation",
              "checked": "2026-09-10"
            }
          ]
        },
        {
          "id": "sport-limitations",
          "english": "Limitations:",
          "title": "限制：運動類機師",
          "parent": "sport",
          "locator": "PHAK C 版 · 1-17",
          "printedPage": "1-17",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=17",
          "paragraphs": [
            "本版接著說明空域、境外飛行、拖曳、報酬及業務用途等限制，並介紹類別與級別權利的簽註安排。讀到「需額外訓練與簽註」時，要與「禁止」區別，不能把有條件的規則一律變成永久禁止。",
            "限制不是只看一張表就結束：同一活動可能同時涉及人員資格、航空器核准和營運規定。若其中一層尚未符合，不能用另一層的允許直接補足。"
          ],
          "currentNote": "這裡講解原書的限制分類；具體現行允許範圍需查更新規則，不直接沿用本版逐項列舉。",
          "references": [
            {
              "title": "FAA MOSAIC 規則更新說明",
              "url": "https://www.faa.gov/newsroom/us-transportation-secretary-sean-p-duffy-announces-improvements-recreational-aviation",
              "checked": "2026-09-10"
            }
          ]
        },
        {
          "id": "recreational",
          "english": "Recreational Pilot",
          "title": "休閒機師",
          "parent": "certificates",
          "locator": "PHAK C 版 · 1-17",
          "printedPage": "1-17",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=17",
          "paragraphs": [
            "Recreational Pilot 與 Sport Pilot 是兩種不同證照，雖然中文名稱都讓人想到休閒活動，不能互相替代。書中把前者與較受限的航空器及飛行範圍連結，並介紹某些延伸活動需要追加訓練。",
            "選擇時應先問自己的實際目標，是否需要較廣的航路、不同作業或未來進階訓練，再比較路徑。不能只因最低訓練時間較少就推定總成本、完成速度和適用性一定最好。"
          ],
          "references": [
            {
              "title": "14 CFR §61.101 現行條文",
              "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-D/part-61/subpart-D/section-61.101",
              "checked": "2026-09-10"
            }
          ]
        },
        {
          "id": "recreational-privileges",
          "english": "Privileges:",
          "title": "權利：休閒機師",
          "parent": "recreational",
          "locator": "PHAK C 版 · 1-17",
          "printedPage": "1-17",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=17",
          "paragraphs": [
            "現行 §61.101 的開頭允許最多一名旅客，並規定與旅客飛行時費用分攤的範圍和比例。這顯示「可以載人」與「可以用任何方式收錢」是兩個不同問題。",
            "本節也要連到區域訓練與操作條件。自編例：熟悉出發機場附近的飛行，不自動代表已符合更遠航程所需條件；權利要與對應訓練、簽註及其他條文一起讀。"
          ],
          "references": [
            {
              "title": "14 CFR §61.101 現行條文",
              "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-D/part-61/subpart-D/section-61.101",
              "checked": "2026-09-10"
            }
          ]
        },
        {
          "id": "recreational-limitations",
          "english": "Limitations:",
          "title": "限制：休閒機師",
          "parent": "recreational",
          "locator": "PHAK C 版 · 1-17",
          "printedPage": "1-17",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=17",
          "paragraphs": [
            "書中列出多項限制，包含航空器、日夜與空域等面向。實際 §61.101 還有針對訓練和簽註的細節，因此不能把手冊一句「50 NM」當成所有情境都不可超越的絕對規則。",
            "閱讀限制應分成：一般規則是什麼、是否存在明列途徑、需誰確認、還有哪些前提。尤其不要把 Sport Pilot 的限制拿來回答 Recreational Pilot 的題目，兩者所屬條文不同。"
          ],
          "references": [
            {
              "title": "14 CFR §61.101 現行條文",
              "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-D/part-61/subpart-D/section-61.101",
              "checked": "2026-09-10"
            }
          ]
        },
        {
          "id": "private",
          "english": "Private Pilot",
          "title": "私人機師",
          "parent": "certificates",
          "locator": "PHAK C 版 · 1-17",
          "printedPage": "1-17",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=17",
          "paragraphs": [
            "私人機師證照提供比前述受限路徑更廣的學習與運作基礎，但不等於所有飛行活動都可執行。機師仍需相應檢定、簽註、近期經驗及適用的健康和操作條件。",
            "報酬與費用分攤問題應回查 §61.113 的原則與例外。不能只背「私人完全不能碰到錢」或「分攤就一定合法」；實際目的、支付方式和條文條件都會影響判斷。"
          ],
          "references": [
            {
              "title": "14 CFR §61.113 現行條文",
              "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-D/part-61/subpart-E/section-61.113",
              "checked": "2026-09-10"
            }
          ]
        },
        {
          "id": "commercial",
          "english": "Commercial Pilot",
          "title": "商用機師",
          "parent": "certificates",
          "locator": "PHAK C 版 · 1-18",
          "printedPage": "1-18",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=18",
          "paragraphs": [
            "Commercial Pilot 與私人資格的重要差別之一，是在適用條件下執行取得報酬或受僱的飛行。訓練也提高對精確操作、知識與判斷的要求，但不是把飛機尺寸變大就稱為商用。",
            "機師具有商用資格，不代表自己已取得經營所有載客業務所需的營運許可。要分開看「誰操縱航空器的資格」與「該運輸服務如何被核准」，也要確認航空器和具體活動的要求。"
          ]
        },
        {
          "id": "atp",
          "english": "Airline Transport Pilot",
          "title": "航線運輸機師",
          "parent": "certificates",
          "locator": "PHAK C 版 · 1-18",
          "printedPage": "1-18",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=18",
          "paragraphs": [
            "ATP 位於機師證照體系較高層級，書中以航空運輸任務說明其角色。要把證照等級、航空器型別檢定和特定營運者的訓練要求分開，取得其中之一不表示其他部分自動完成。",
            "自編例：持有 ATP 的人轉到另一種需要型別資格的航空器，仍需符合相應要求。申請條件、受限 ATP 路徑與現行訓練要求應另查，這一節建立的是資格架構而非個別錄取保證。"
          ],
          "references": [
            {
              "title": "FAA 現行 ACS 目錄",
              "url": "https://www.faa.gov/training_testing/testing/acs",
              "checked": "2026-09-10"
            }
          ]
        },
        {
          "id": "school",
          "english": "Selecting a Flight School",
          "title": "選擇飛行學校",
          "parent": null,
          "locator": "PHAK C 版 · 1-18",
          "printedPage": "1-18",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=18",
          "paragraphs": [
            "原書比較 Part 61 與 Part 141 訓練安排：前者有較大的組織彈性，後者涉及經核准的學校與課程架構。不同安排不代表某一路徑可以忽略資格標準，也不能直接等同「自由」與「安全」。",
            "評估學校時把自己的時間、目標、預算和學習方式放進來。確認是否有課程大綱、明確進度回饋及可持續的教官和飛機安排，比只比較廣告中的最低時數有用。"
          ]
        },
        {
          "id": "reputable-program",
          "english": "How To Find a Reputable Flight Program",
          "title": "如何評估可靠的訓練課程",
          "parent": "school",
          "locator": "PHAK C 版 · 1-19",
          "printedPage": "1-19",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=19",
          "paragraphs": [
            "先看課程如何安排地面與飛行學習、如何記錄進步和處理落後，再了解教官、航空器、維修安排及收費內容。預估成本應包含可能的額外練習，不能把最低要求直接當成每個人的結業總時數。",
            "自編例：兩校每小時報價不同，但其中一校不含地面教學或其他費用，直接比較會失真。參觀、詢問在訓學員並確認書面條款，可以把印象轉成可比較的資訊。"
          ]
        },
        {
          "id": "choose-cfi",
          "english": "How To Choose a Certificated Flight Instructor (CFI)",
          "title": "如何選擇合適的飛行教官",
          "parent": "school",
          "locator": "PHAK C 版 · 1-19",
          "printedPage": "1-19",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=19",
          "paragraphs": [
            "好的 CFI 不只是自己飛得熟，還需能解釋、示範、觀察你的錯誤並提供可行回饋。原書強調學習原理與有效溝通，因為教學能力不會單靠累積飛行時間自動成立。",
            "可以觀察每堂課是否有目標、飛前說明和飛後檢討，教官是否願意回答原因而不只要求模仿。時間安排與溝通風格也重要；若長期無法有效學習，應討論調整而不是默默重複同樣錯誤。"
          ]
        },
        {
          "id": "student",
          "english": "The Student Pilot",
          "title": "學生機師",
          "parent": null,
          "locator": "PHAK C 版 · 1-20",
          "printedPage": "1-20",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=20",
          "paragraphs": [
            "Student Pilot 是通往第一張完整機師資格的訓練階段，並在符合條件時允許有限的單飛。它不是准許學員自行安排所有航程的通行證，也不能把有教官在場的飛行和單飛混在一起。",
            "FAA 現行說明清楚區分：接受飛行課程本身不需要先有學生機師證照，但單飛前需要。選擇航空器與訓練路徑後，再逐項確認所需證照、簽註及其他條件。"
          ],
          "references": [
            {
              "title": "FAA 學生機師資格與申請",
              "url": "https://www.faa.gov/pilots/become/student_cert",
              "checked": "2026-09-10"
            }
          ]
        },
        {
          "id": "basic-requirements",
          "english": "Basic Requirements",
          "title": "基本申請要求",
          "parent": "student",
          "locator": "PHAK C 版 · 1-20",
          "printedPage": "1-20",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=20",
          "paragraphs": [
            "FAA 現行學生機師說明列出一般最低 16 歲，滑翔機或氣球為 14 歲，並要求英語理解能力。申請可透過 IACRA 或適用紙本流程，由授權人員處理；證照申請和單飛能力評估是分開的事情。",
            "現行流程中學生機師證照與體檢證明是不同文件，單飛簽註記在 logbook。即使已收到證照，仍需完成單飛所需訓練與教官確認；不能把行政文件的核發等同操作能力已驗證。"
          ],
          "references": [
            {
              "title": "FAA 學生機師資格與申請",
              "url": "https://www.faa.gov/pilots/become/student_cert",
              "checked": "2026-09-10"
            }
          ]
        },
        {
          "id": "medical",
          "english": "Medical Certification Requirements",
          "title": "體檢證明與健康條件",
          "parent": "basic-requirements",
          "locator": "PHAK C 版 · 1-20",
          "printedPage": "1-20",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=20",
          "paragraphs": [
            "本節介紹 AME 航空醫學檢查醫師及體檢證明，並說明早期確認健康條件能避免訓練投入後才發現需處理的問題。MedXPress 是申請資料工具，不是填完就取得證明。",
            "需要哪類醫療證明取決於行使的權利與適用途徑；某些例外或替代安排有額外前提。不能把原書一句「可用駕照」讀成任何人都可跳過醫療問題，也不能由本站內容判定個人的適飛資格。"
          ],
          "currentNote": "學生機師證照與體檢證明應分開查核。原書含舊流程用語；現行 FAA 說明導向 §61.23，個人病史或資格問題需由 AME／FAA 確認。",
          "references": [
            {
              "title": "FAA 學生機師資格與申請",
              "url": "https://www.faa.gov/pilots/become/student_cert",
              "checked": "2026-09-10"
            }
          ]
        },
        {
          "id": "solo",
          "english": "Student Pilot Solo Requirements",
          "title": "學生機師單飛要求",
          "parent": "student",
          "locator": "PHAK C 版 · 1-21",
          "printedPage": "1-21",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=21",
          "paragraphs": [
            "這是正文補充標題。學員達到適當知識與操作熟練度後，CFI 可依適用條件在 logbook 簽註有限的單飛授權；證照存在與單飛授權有效，是兩個獨立檢查項目。",
            "FAA 學生機師說明也區分單飛與單飛越野：一般單飛簽註不會自動涵蓋所有越野飛行。學員應能說清楚授權的機型與範圍，不能把一次簽註當成永久且無條件的飛行權利。"
          ],
          "supplementalHeading": true,
          "references": [
            {
              "title": "FAA 學生機師資格與申請",
              "url": "https://www.faa.gov/pilots/become/student_cert",
              "checked": "2026-09-10"
            }
          ]
        },
        {
          "id": "becoming",
          "english": "Becoming a Pilot",
          "title": "把知識與實作連成訓練",
          "parent": null,
          "locator": "PHAK C 版 · 1-21",
          "printedPage": "1-21",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=21",
          "paragraphs": [
            "訓練需要同時發展航空知識、操縱技巧和判斷能力。書中描述教官示範、引導操作、監督練習再到適當單飛練習的過程，說明技能要逐步建立，不能只靠閱讀。",
            "自編例：學習轉彎前先理解升力與載荷，在教官帶領下觀察飛機反應，再於飛後檢討錯誤。把原理、實作與回饋連起來，才能在情境改變時運用知識，而不只是背固定口令。"
          ]
        },
        {
          "id": "tests",
          "english": "Knowledge and Skill Tests",
          "title": "知識與技能考試的分工",
          "parent": null,
          "locator": "PHAK C 版 · 1-21",
          "printedPage": "1-21",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=21",
          "paragraphs": [
            "知識測驗檢查航空知識的理解與應用，實作測驗則觀察符合標準的操作與判斷。兩者測量面向不同，知識成績好不等於所有實作都已成熟，實作熟練也不能取代必要的知識準備。",
            "準備考試時應對照目標證照適用的標準，把每項要求連到教材、訓練與證據。本站情境題只能協助學習，不是 FAA 題庫，也不會產生正式考試效力。"
          ],
          "references": [
            {
              "title": "FAA 考試與申請資源",
              "url": "https://www.faa.gov/training_testing/testing",
              "checked": "2026-09-10"
            },
            {
              "title": "FAA 現行 ACS 目錄",
              "url": "https://www.faa.gov/training_testing/testing/acs",
              "checked": "2026-09-10"
            }
          ]
        },
        {
          "id": "knowledge",
          "english": "Knowledge Tests",
          "title": "知識測驗",
          "parent": "tests",
          "locator": "PHAK C 版 · 1-21",
          "printedPage": "1-21",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=21",
          "paragraphs": [
            "原書介紹電腦化選擇題測驗，讓不同考生以一致方式評量。有效準備不只是記答案，而是能說明公式條件、圖表基準與排除其他選項的原因，避免題目稍改就失去判斷。",
            "報名所需身分、測驗類型、資格與授權文件應查 FAA 現行考試資源。不要依舊教材推定所有考試都有相同題數、時間或有效期，也不要把本站的小型練習設定當成正式格式。"
          ],
          "references": [
            {
              "title": "FAA 考試與申請資源",
              "url": "https://www.faa.gov/training_testing/testing",
              "checked": "2026-09-10"
            }
          ]
        },
        {
          "id": "when-knowledge",
          "english": "When To Take the Knowledge Test",
          "title": "何時參加知識測驗",
          "parent": "knowledge",
          "locator": "PHAK C 版 · 1-22",
          "printedPage": "1-22",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=22",
          "paragraphs": [
            "本版建議在累積一些飛行經驗後參加知識測驗，並提到單飛越野帶來的理解。這是訓練安排上的建議，不應直接轉述成所有學員都必須先完成越野才能報名的法定先決條件。",
            "適當時機取決於你的理解、課程安排、適用資格與教官評估。可用檢核問題確認：能否獨立讀圖、說出限制及解釋錯題？若只有熟悉題目的選項位置，還需要回到概念練習。"
          ],
          "references": [
            {
              "title": "FAA 考試與申請資源",
              "url": "https://www.faa.gov/training_testing/testing",
              "checked": "2026-09-10"
            }
          ]
        },
        {
          "id": "practical",
          "english": "Practical Test",
          "title": "實作測驗與 ACS／PTS",
          "parent": "tests",
          "locator": "PHAK C 版 · 1-22",
          "printedPage": "1-22",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=22",
          "paragraphs": [
            "實作測驗涵蓋口頭討論與實際任務表現，不只檢查機械式動作。ACS 把知識、風險管理與技能整合到任務中；原書仍以過渡時期的措辭介紹 ACS 與 PTS，需要配合現行標準閱讀。",
            "測驗標準也不是完整課程大綱。它說明應證明什麼能力，教學材料和教官則協助你學會如何建立能力；只把標準中的容許誤差背熟，不能取代情境判斷。"
          ],
          "currentNote": "FAA 現行目錄已列出多種生效的 ACS，例如 Private Pilot Airplane 的 FAA-S-ACS-6C。仍須按目標資格選擇適用 ACS／PTS，不能把原書的「將來取代」當成目前狀態。",
          "references": [
            {
              "title": "FAA 現行 ACS 目錄",
              "url": "https://www.faa.gov/training_testing/testing/acs",
              "checked": "2026-09-10"
            }
          ]
        },
        {
          "id": "when-practical",
          "english": "When To Take the Practical Test",
          "title": "何時參加實作測驗",
          "parent": "practical",
          "locator": "PHAK C 版 · 1-23",
          "printedPage": "1-23",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=23",
          "paragraphs": [
            "在滿足適用訓練與經驗條件之外，還要確認是否能穩定展現所需能力，以及教官是否完成相應確認。最低時數是資格條件的一部分，不是保證人人一到該時數便已準備完成。",
            "原書也提醒熟悉供測驗航空器的文件與適航資料。準備可分成三欄：個人資格、航空器與文件、任務熟練度；其中任一欄缺漏，都不應只靠「已經約到考官」掩蓋。"
          ],
          "references": [
            {
              "title": "FAA 考試與申請資源",
              "url": "https://www.faa.gov/training_testing/testing",
              "checked": "2026-09-10"
            },
            {
              "title": "FAA 現行 ACS 目錄",
              "url": "https://www.faa.gov/training_testing/testing/acs",
              "checked": "2026-09-10"
            }
          ]
        },
        {
          "id": "administers",
          "english": "Who Administers the FAA Practical Tests?",
          "title": "誰執行 FAA 實作測驗",
          "parent": "practical",
          "locator": "PHAK C 版 · 1-23",
          "printedPage": "1-23",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=23",
          "paragraphs": [
            "本章介紹 FAA ASI 與獲指定的 DPE 執行實作測驗。DPE 不是因為飛行經驗豐富就自然取得權限，而是需在 FAA 指定範圍內執行相應的認證工作。",
            "預約時應核對考官是否具有所需授權、航空器和測驗安排是否合適，以及相關費用與文件。支付費用是服務安排的一部分，不代表購買通過結果或降低標準。"
          ],
          "references": [
            {
              "title": "FAA 考試與申請資源",
              "url": "https://www.faa.gov/training_testing/testing",
              "checked": "2026-09-10"
            }
          ]
        },
        {
          "id": "cfi-role",
          "english": "Role of the Certificated Flight Instructor",
          "title": "飛行教官在訓練中的角色",
          "parent": "tests",
          "locator": "PHAK C 版 · 1-23",
          "printedPage": "1-23",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=23",
          "paragraphs": [
            "CFI 負責把知識與安全操作習慣融入每次訓練，包括飛前簡報、示範、觀察、飛後檢討及必要紀錄。學員也會模仿教官的日常行為，因此教官如何使用檢查表與管理風險，本身就是教學。",
            "合格教學不是只為了在考試那天完成幾個動作，而是建立能在不同情境持續使用的能力。自編例：操作失誤後，除了指出偏差，還要追查判斷、注意力或理解哪裡出了問題。"
          ]
        },
        {
          "id": "dpe-role",
          "english": "Role of the Designated Pilot Examiner",
          "title": "指定機師考官的角色",
          "parent": "tests",
          "locator": "PHAK C 版 · 1-24",
          "printedPage": "1-24",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=24",
          "paragraphs": [
            "DPE 是獲 FAA 指定執行特定認證任務的民間人員，需依相應政策、方法與標準評量。角色核心是取得足以判斷是否達標的證據，不是取代日常教官從頭教完整課程。",
            "不要把「教官願意推薦」和「考官必須判通過」混為一談。前者代表訓練與準備評估，後者仍須按正式測驗表現作判斷；考官權限也受到其指定範圍限制。"
          ],
          "references": [
            {
              "title": "FAA 考試與申請資源",
              "url": "https://www.faa.gov/training_testing/testing",
              "checked": "2026-09-10"
            }
          ]
        },
        {
          "id": "summary",
          "english": "Chapter Summary",
          "title": "本章總結與理解檢核",
          "parent": null,
          "locator": "PHAK C 版 · 1-24",
          "printedPage": "1-24",
          "source": "https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page=24",
          "paragraphs": [
            "本章可以串成三條線：航空需求促成制度與基礎設施；FAA 透過文件、機關及人員提供規範和服務；學員則由合適訓練、資格申請及評量逐步成長。理解它們的連結，比背下一串縮寫更有用。",
            "自編檢核：你能解釋經濟解除管制與安全監理的差別嗎？能為「查限制、找教官、確認單飛、準備考試」各選對文件或角色嗎？若能指出依據及適用條件，就已為下一章 ADM 的決策學習打好基礎。"
          ]
        }
      ],
      "confusions": [
        {
          "title": "讀完教材與取得資格",
          "clarification": "學習知識是訓練的一部分，不能取代資格、經驗和檢核要求。",
          "example": "讀完導航章不等於已取得儀器飛行檢定。"
        },
        {
          "title": "通用手冊與機型文件",
          "clarification": "PHAK 解釋一般概念，AFM／POH 對應具體航空器。",
          "example": "某機型的速度限制應回查它的核准資料。"
        }
      ],
      "scenario": "自編案例：你想開始單發飛機訓練，先列出訓練目標、擬使用機型、教官、教材版本，以及需要向學校確認的資格和考試資料。清單應把已知與待確認項目分開。",
      "question": "要查特定訓練機的操作限制，哪個來源最直接？",
      "options": [
        "適用的 AFM／POH 與核准資料",
        "只看 PHAK 的通用例子",
        "其他機型的論壇討論"
      ],
      "answer": 0,
      "explanation": "先確認機型、序號適用範圍與版本，再查限制；通用教材用來理解概念。",
      "verified": true,
      "reader": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=16",
      "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=16",
      "checked": "2026-09-10",
      "detailMode": "outline",
      "coverageNote": "已對照你提供的 Chapter 1 目錄逐節講解，另補入正文中的 1938 年民用航空法、FSDO、Sport Pilot 與學生單飛標題。保留原書層級與頁碼；不是逐字翻譯。"
    },
    {
      "id": "phak25c-2",
      "number": 2,
      "title": "航空決策與風險管理",
      "english": "Aeronautical Decision-Making",
      "section": "第 2 章；2-1～2-32，全章目錄逐節講解",
      "goal": "將風險辨識、選項與持續評估連成決策流程。",
      "primer": "沿原書目錄學習風險、危險態度、資源管理與自動化，並以 PAVE、5P、3P、CARE、TEAM、DECIDE 串連思考與行動。",
      "terms": [
        "ADM · 航空決策",
        "PAVE · 風險檢視",
        "SRM · 單人資源管理"
      ],
      "prompts": [
        "你能用自己的話解釋「決策不是一次性的起飛許可」，並指出適用條件嗎？",
        "本章案例中，哪些資料或條件改變後，需要重新判斷？"
      ],
      "keyPoints": [
        "用危害、後果與條件說明風險，避免只靠信心或分數",
        "分辨 PAVE 的辨識、CARE 的評估與 TEAM 的控制",
        "以 5P 定期回顧，以 DECIDE 理清問題與結果",
        "管理工作負荷、資訊與模式，持續確認自動化符合預期"
      ],
      "detailSections": [
        {
          "id": "introduction",
          "english": "Introduction",
          "title": "航空決策的用途",
          "parent": null,
          "locator": "PHAK C 版 · 2-1",
          "printedPage": "2-1",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=1",
          "paragraphs": [
            "ADM 是在航空情境中，有系統地蒐集資訊、判斷風險及選擇行動的方法。它不只出現在緊急狀況；決定何時出發、是否繼續、何時改變計畫，都需要判斷，而且先前的答案可能隨新資訊而失效。",
            "本章要建立的是可練習的思考過程。技術操作回答如何控制飛機，ADM 還要回答為什麼選這個行動、還有什麼選項及如何確認效果；兩者共同構成能力，不能只靠熟悉操縱就假設決策一定正確。"
          ]
        },
        {
          "id": "history",
          "english": "History of ADM",
          "title": "ADM 的發展",
          "parent": null,
          "locator": "PHAK C 版 · 2-2",
          "printedPage": "2-2",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=2",
          "paragraphs": [
            "早期常把良好判斷視為經驗自然累積的結果，但長時間沒有出事不等於每次選擇都合理。航空業逐漸把人因與資源管理納入訓練，FAA 也發展相應教材，讓判斷能被討論、練習和改善。",
            "原書介紹早期研究與訓練成果，是要支持「判斷可以教」的觀念。研究中的比例與事故資料具有時間和樣本背景，不能直接當成今天所有飛行活動的統計，也不能用一次成功證明某方法必然有效。"
          ]
        },
        {
          "id": "risk-management",
          "english": "Risk Management",
          "title": "風險管理流程與原則",
          "parent": null,
          "locator": "PHAK C 版 · 2-3",
          "printedPage": "2-3",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=3",
          "paragraphs": [
            "風險管理從辨認危害開始，接著評估風險、分析控制方式、決定與執行控制，最後監控結果。每一步都要連到下一步：只列出很多危害，卻沒有改變任何安排，仍未完成管理。",
            "原書的四項原則可理解為：避免無必要風險、由合適層級決定、衡量利益與危險，以及把管理融入全程。利益衡量不能用來越過法規或航空器限制；所謂接受，也不代表已把風險變成零。"
          ]
        },
        {
          "id": "crm-srm",
          "english": "Crew Resource Management (CRM) and Single-Pilot Resource Management",
          "title": "CRM 與單人資源管理",
          "parent": null,
          "locator": "PHAK C 版 · 2-4",
          "printedPage": "2-4",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=4",
          "paragraphs": [
            "CRM 關注機組如何運用人員、設備及資訊來合作；SRM 把許多相同概念帶到單人操作。單人機師仍可使用機上與外部資源，因此「只有一位機師」不等於「所有工作都必須不求助地完成」。",
            "SRM 涉及決策、任務、自動化、地形及情境認知等面向。自編例：先請航管提供可用資訊，與把風險判斷完全交給航管不同；資源協助你形成決定，不會自動取代 PIC 的責任。"
          ]
        },
        {
          "id": "hazard-risk",
          "english": "Hazard and Risk",
          "title": "危害與風險的差別",
          "parent": null,
          "locator": "PHAK C 版 · 2-4",
          "printedPage": "2-4",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=4",
          "paragraphs": [
            "Hazard 是可能造成不良結果的條件、事件或情況，risk 則著眼於它可能造成的影響及程度。自編例：目的地低雲是條件；它與自己的資格、地形、燃油及備選方案結合後，才形成具體的風險情境。",
            "不同人可能對同一條件作不同評估，但主觀信心不是客觀限制的替代品。書中的螺旋槳損傷例子用來說明評估差異，不能解讀成有經驗的人可不依維修資料就自行放行受損飛機。"
          ]
        },
        {
          "id": "attitudes",
          "english": "Hazardous Attitudes and Antidotes",
          "title": "五種危險態度與修正思考",
          "parent": "hazard-risk",
          "locator": "PHAK C 版 · 2-5",
          "printedPage": "2-5",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=5",
          "paragraphs": [
            "危險態度會在注意到事實之前，就把判斷推向特定答案。原書的 antidote 是用另一個想法打斷慣性：先認出自己正在想什麼，再用相應提醒把注意力帶回資訊與合適行動。",
            "這不是替人貼永久人格標籤；同一個人在不同壓力下可能出現不同反應。自編練習是回想一次自己急著證明能力或不願改變計畫的情境，寫出當時想法、忽略的資料及可採用的修正提醒。"
          ],
          "points": [
            "Anti-authority（反權威）：把要求當成多餘干涉。修正：先遵循適用規則，有疑問就查證；質疑可能錯誤的指令與一概拒絕規則不同。",
            "Impulsivity（衝動）：急著做任何事，沒有先辨認問題。修正：在可用時間內先思考，按已受訓程序處理；不是拖延需要立即執行的必要動作。",
            "Invulnerability（無敵感）：相信事故只會發生在別人身上。修正：承認自己同樣可能受影響，以條件和證據評估，不以過去沒出事作保證。",
            "Macho（逞強）：為了證明能力而接受不必要風險。修正：冒險不是能力證明；願意延後或更改安排也是專業判斷。",
            "Resignation（放棄）：認為做什麼都沒有用，把決定交給命運。修正：辨認自己仍能控制的事項並採取適當行動，避免放棄仍存在的選項。"
          ]
        },
        {
          "id": "risk",
          "english": "Risk",
          "title": "把風險寫成具體情境",
          "parent": "hazard-risk",
          "locator": "PHAK C 版 · 2-6",
          "printedPage": "2-6",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=6",
          "paragraphs": [
            "只說「天氣不好」或「風險很高」不足以支持決定。需要交代哪個條件，可能讓誰在什麼階段受到什麼影響，以及有多少時間和資源可處理；多個因素也可能互相放大。",
            "自編例：短航段並不會自動抵銷陌生機型、疲勞和低雲的組合。把每個危害與後果連起來，再看它們如何一起影響工作負荷，才比較不會被單一有利因素說服。"
          ]
        },
        {
          "id": "assessing",
          "english": "Assessing Risk",
          "title": "評估可能性與嚴重性",
          "parent": "risk",
          "locator": "PHAK C 版 · 2-6",
          "printedPage": "2-6",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=6",
          "paragraphs": [
            "風險矩陣透過可能性和嚴重性整理判斷，但分類仍需要資訊和清楚定義。不能因為某件事不常發生，就忽略它一旦發生的重大後果；也不能把彩色表格當成會自動產生正確答案的工具。",
            "單人機師可能同時是決策者與自己的檢查者，因此疲勞、期待或趕行程容易影響評估。可先記錄未知資訊和假設，再請合適的人協助檢視；不要為了讓總分落在可接受區而任意降低評分。"
          ]
        },
        {
          "id": "mitigating",
          "english": "Mitigating Risk",
          "title": "降低風險需要改變條件",
          "parent": "risk",
          "locator": "PHAK C 版 · 2-8",
          "printedPage": "2-8",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=8",
          "paragraphs": [
            "評估後要比較真正能改變情境的方式，例如延後、取消、選擇合適替代方案或安排相應訓練與協助。控制措施需要說明它減少哪種暴露或影響，而不是只寫「小心一點」。",
            "自編例：換到設備較多的飛機，也可能引入不熟悉設備的新風險。做出改變後應重新檢查整體情境；找人同行也不自動解決資格、航空器限制或天氣不合適的問題。"
          ]
        },
        {
          "id": "pave",
          "english": "The PAVE Checklist",
          "title": "PAVE：完整檢視飛行條件",
          "parent": "hazard-risk",
          "locator": "PHAK C 版 · 2-8",
          "printedPage": "2-8",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=8",
          "paragraphs": [
            "PAVE 把危害搜尋分成 Pilot、Aircraft、enVironment 和 External pressures。清單避免機師只注意外在天氣，卻漏掉自己的狀態、飛機能力或非飛行因素造成的壓力。",
            "它主要幫助你找需要處理的條件，不是直接計算結果的公式。四類之間也會互動：新機型與複雜環境相遇時，即使各自看似可管理，組合後仍可能超出目前能力。"
          ]
        },
        {
          "id": "pave-pilot",
          "english": "P = Pilot in Command (PIC)",
          "title": "P：機師本人的能力與狀態",
          "parent": "pave",
          "locator": "PHAK C 版 · 2-8",
          "printedPage": "2-8",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=8",
          "paragraphs": [
            "檢視自己是否有相應資格、近期熟練度、經驗與身心準備。原書以 IMSAFE 提醒疾病、藥物、壓力、酒精、疲勞及情緒等因素；這些是自我檢視方向，不是能取代醫療判斷的診斷表。",
            "自編例：總時數不少，但幾個月未使用特定設備，仍可能在忙碌時花很多時間查操作。個人最低標準應反映當下熟練度，不能只以最高曾做到的表現設定。"
          ]
        },
        {
          "id": "pave-aircraft",
          "english": "A = Aircraft",
          "title": "A：航空器是否適合任務",
          "parent": "pave",
          "locator": "PHAK C 版 · 2-8",
          "printedPage": "2-8",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=8",
          "paragraphs": [
            "檢查航空器狀態、設備、性能、重量平衡及燃油是否支持計畫。問題不只是它是否能飛，也包括在今天條件下，這架飛機能否完成預期任務並保留適當選項。",
            "自編例：導航設備正常，卻不代表起飛性能、油量或目的地條件都已確認。把各項需求連到適用 AFM／POH 及實際資料，避免用「平常都飛這架」取代當次查核。"
          ]
        },
        {
          "id": "pave-environment",
          "english": "V = EnVironment",
          "title": "V：天氣、地形、機場與空域",
          "parent": "pave",
          "locator": "PHAK C 版 · 2-9",
          "printedPage": "2-9",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=9",
          "paragraphs": [
            "環境包含出發、航路、目的地與備選場的天氣、地形、跑道、空域及夜間因素。預報是計畫依據之一，但不能假設它必然成真；還需準備條件不如預期時可行的替代選項。",
            "自編例：目的地天氣預計好轉，途中山區卻仍可能有低雲。只看抵達預報就出發，會漏掉航路障礙與改變計畫所需的時間、燃油和機場資料。"
          ]
        },
        {
          "id": "pave-external",
          "english": "E = External Pressures",
          "title": "E：外在壓力與行程期待",
          "parent": "pave",
          "locator": "PHAK C 版 · 2-9",
          "printedPage": "2-9",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=9",
          "paragraphs": [
            "趕會議、歸還租用飛機、旅客期待與不願讓人失望，都可能影響判斷。壓力未必由別人直接提出；機師自己想維持形象，也可能使原本可以延後的行程看起來非完成不可。",
            "可在出發前安排延誤與替代交通的可能，並讓旅客理解計畫可以改變。這會減少臨時承認改降時的心理負擔，避免因為已答應一個抵達時間就忽略其他風險。"
          ]
        },
        {
          "id": "human-factors",
          "english": "Human Factors",
          "title": "人因不只是人的失誤",
          "parent": null,
          "locator": "PHAK C 版 · 2-10",
          "printedPage": "2-10",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=10",
          "paragraphs": [
            "人因研究人的能力、限制及其與工具、任務、環境的互動。它涉及心理、工程、設計及其他領域，適用於飛行、維修與航管；CRM 是相關應用之一，但不能用 CRM 包括全部人因。",
            "自編例：資訊位置不清、警示難以辨認和工作負荷過高，都可能影響表現。分析時若只寫「機師不小心」，就可能漏掉能透過設計、程序或訓練改善的部分。"
          ]
        },
        {
          "id": "human-behavior",
          "english": "Human Behavior",
          "title": "從行為模式理解事故鏈",
          "parent": null,
          "locator": "PHAK C 版 · 2-11",
          "printedPage": "2-11",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=11",
          "paragraphs": [
            "書中以研究和案例討論冒險傾向、紀律、資訊使用和事故之間的關聯。學習重點是辨認反覆出現的選擇，例如受干擾後沒有回到檢查表，而不把一次失誤直接推論為無法改變的人格。",
            "事故常是多個條件和決定逐步連成的結果。回顧時問「在哪一個節點還能發現或中斷問題」，比只問誰最後操作錯更有用；研究中的歷史樣本也不能用來診斷任何特定學員。"
          ]
        },
        {
          "id": "decision-process",
          "english": "The Decision-Making Process",
          "title": "把決策拆成可檢查的步驟",
          "parent": null,
          "locator": "PHAK C 版 · 2-12",
          "printedPage": "2-12",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=12",
          "paragraphs": [
            "先辨認出現了什麼變化，再蒐集與影響相關的資訊、比較控制和選項、執行並觀察結果。把觀察與推測分開，能減少一開始認錯問題，後面卻非常有效率地做錯事的情況。",
            "時間允許時可用 5P、3P 或 DECIDE 整理；需要即時反應的情境則依受訓與核准程序處理。決策模型是思考輔助，不能要求機師為了完整念完口訣而延誤必要動作。"
          ]
        },
        {
          "id": "srm-process",
          "english": "Single-Pilot Resource Management (SRM)",
          "title": "把 SRM 用在資訊與選擇",
          "parent": "decision-process",
          "locator": "PHAK C 版 · 2-13",
          "printedPage": "2-13",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=13",
          "paragraphs": [
            "前面的 SRM 介紹資源範圍，這裡進一步談如何蒐集、分析及及時決定。單人飛行缺少機上另一位機師的交叉檢查，因此更需要有意識地建立回顧和確認的習慣。",
            "自編例：把自己認為可接受的方案說出理由，可能暴露出尚未證實的假設。不同情境可能有不同合適答案，但不表示任何答案都同樣合理；仍需符合事實、能力與適用限制。"
          ]
        },
        {
          "id": "five-ps",
          "english": "The 5 Ps Check",
          "title": "5P：在關鍵時點重新檢視",
          "parent": "decision-process",
          "locator": "PHAK C 版 · 2-13",
          "printedPage": "2-13",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=13",
          "paragraphs": [
            "5P 分別是 Plan、Plane、Pilot、Passengers、Programming，用來在飛行的關鍵時點主動回顧。原書建議飛前、起飛前、途中、下降前及最後進場相關時點檢查，避免等問題變緊急才開始想。",
            "5P 不是把一次風險表填完就收起來，也不是只在出事時使用。自編例：途中得知目的地條件改變，可重新檢查五項變數，趁替代機場仍可用時作決定，而非等原定目的地已近在眼前。"
          ]
        },
        {
          "id": "five-plan",
          "english": "The Plan",
          "title": "計畫：不斷更新的假設",
          "parent": "five-ps",
          "locator": "PHAK C 版 · 2-14",
          "printedPage": "2-14",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=14",
          "paragraphs": [
            "Plan 包含航路、天氣、燃油及相關任務安排。計畫依賴一組假設；新的觀測、速度或目的地資訊出現時，原本估算就可能需要調整，而不是因為已經起飛便固定不變。",
            "自編例：逆風比預期強，抵達時間與用油會一起改變。此時更新計畫應包含備選方案及決策時點，不只是把導航畫面上的 ETA 看一眼就繼續。"
          ]
        },
        {
          "id": "five-plane",
          "english": "The Plane",
          "title": "飛機：設備與備援的當下狀態",
          "parent": "five-ps",
          "locator": "PHAK C 版 · 2-14",
          "printedPage": "2-14",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=14",
          "paragraphs": [
            "Plane 包含機體、系統、航電、自動化、資料庫及備援能力。起飛時正常的設備可能在途中失效，因此要評估它的變化如何影響後面任務，而不只看故障本身是否令人不便。",
            "自編例：原計畫高度依賴自動駕駛來管理單人工作量，途中失效後即使仍可手飛，整個後續計畫也應重新評估。航空器能繼續受控，不等於原任務風險完全沒變。"
          ]
        },
        {
          "id": "five-pilot",
          "english": "The Pilot",
          "title": "機師：狀態會隨航程變化",
          "parent": "five-ps",
          "locator": "PHAK C 版 · 2-14",
          "printedPage": "2-14",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=14",
          "paragraphs": [
            "Pilot 的回顧要納入疲勞、身體狀況、經驗與當下負荷。出發前休息充足，不表示長時間飛行後仍有相同注意力；接近目的地時往往還面臨更多程序與通信。",
            "自編例：你發現自己需要重讀相同資訊、反覆漏掉呼叫，這些可作為負荷或注意力問題的線索。應及早重新評估工作安排和可用協助，而不是把「快到了」當成不需處理的理由。"
          ]
        },
        {
          "id": "five-passengers",
          "english": "The Passengers",
          "title": "旅客：需求、壓力與可用協助",
          "parent": "five-ps",
          "locator": "PHAK C 版 · 2-14",
          "printedPage": "2-14",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=14",
          "paragraphs": [
            "旅客可能提供觀察和簡單協助，也可能因不適、期待或不理解風險造成額外負荷。讓旅客知道可能延後或改降，以及何時需要減少非必要談話，能改善彼此的預期。",
            "若旅客也是機師，仍需清楚確認 PIC 與分工，不能臨時出現多人各自指揮。自編例：機師以為旅客一定要當晚到，其實對方願意改搭車；先溝通可消除自行想像出的壓力。"
          ]
        },
        {
          "id": "five-programming",
          "english": "The Programming",
          "title": "設定工作：安排時間與注意力",
          "parent": "five-ps",
          "locator": "PHAK C 版 · 2-15",
          "printedPage": "2-15",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=15",
          "paragraphs": [
            "Programming 不只是會按哪個鍵，更包含何時適合輸入航路或更改程序，以及哪個階段不應把注意力長時間留在畫面。設備可減少某些負荷，同時也可能吸引注意力並產生新的負荷。",
            "自編例：進場前臨時改程序時，先評估剩餘時間、熟悉度和飛機控制，再選合適安排。不同廠牌介面並不一致；能操作上一架飛機的航電，不代表新平台也能立即熟練使用。"
          ]
        },
        {
          "id": "three-p",
          "english": "Perceive, Process, Perform (3P) Model",
          "title": "3P：察覺、評估、執行的循環",
          "parent": "decision-process",
          "locator": "PHAK C 版 · 2-15",
          "printedPage": "2-15",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=15",
          "paragraphs": [
            "Perceive 找出目前條件，Process 評估其影響，Perform 執行合適行動。PAVE、CARE 與 TEAM 分別幫助整理這三個階段；它們不是三張互不相關的表，而是把同一個問題向前推進。",
            "行動後情境會改變，因此還要重新察覺與評估。自編例：改降雖降低目的地天氣風險，卻帶來新機場、燃油和旅客安排問題；新方案不能因為叫「備案」就免於重新檢查。"
          ]
        },
        {
          "id": "three-pave",
          "english": "PAVE Checklist: Identify Hazards and Personal Minimums",
          "title": "以 PAVE 辨認危害與個人最低標準",
          "parent": "three-p",
          "locator": "PHAK C 版 · 2-15",
          "printedPage": "2-15",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=15",
          "paragraphs": [
            "在 3P 的第一階段，使用 PAVE 對每個面向問「什麼可能傷害我、旅客或航空器」。不只把單項列出，還要看機師與航空器的組合，是否能處理今天的環境和任務。",
            "個人最低標準適合在沒有趕行程壓力時，依能力與熟練度建立。它可以比適用最低要求更保守，不能拿來放寬法規或機型限制，也不宜到了機場才為了起飛臨時降低門檻。"
          ]
        },
        {
          "id": "care",
          "english": "CARE Checklist: Review Hazards and Evaluate Risks",
          "title": "CARE：把危害轉成影響評估",
          "parent": "three-p",
          "locator": "PHAK C 版 · 2-16",
          "printedPage": "2-16",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=16",
          "paragraphs": [
            "CARE 包含 Consequences、Alternatives、Reality、External factors。先問後果可能是什麼，再找替代方案，核對現實條件，最後檢視外在因素是否扭曲判斷；原文範例也用 external pressures 說明最後一項。",
            "自編例：工作一整天後要夜航開會，後果涉及疲勞，替代可包括延後或改搭交通，現實核對自己是否仍有足夠能力，外在因素則是會議時間。重點是把「應該還好」改成可檢查的理由。"
          ],
          "points": [
            "Consequences（後果）：說明若危害發展下去，可能損失什麼，以及誰或哪些資源會受影響。",
            "Alternatives（替代）：不只列理想方案，還要確認方案在時間、燃油、天氣和能力上是否可行。",
            "Reality（現實）：以可用證據核對機師與飛機的能力，不把期待、面子或曾經成功當成保證。",
            "External factors（外在因素）：辨認約定、費用及他人期待，是否讓你低估前面已找出的影響。"
          ]
        },
        {
          "id": "team",
          "english": "TEAM Checklist: Choose and Implement Risk Controls",
          "title": "TEAM：選擇並執行風險控制",
          "parent": "three-p",
          "locator": "PHAK C 版 · 2-16",
          "printedPage": "2-16",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=16",
          "paragraphs": [
            "TEAM 的選項是 Transfer、Eliminate、Accept、Mitigate。它把前面評估連到行動：尋求合適層級協助決定、消除危害、在適用條件下接受，或以措施降低風險。不能只在紙上圈選而沒有執行。",
            "Transfer 不是把 PIC 責任推給旅客或航管，Accept 也不是忽略限制。自編例：向主任教官諮詢陌生任務，可能幫助找到更適合的安排；最後仍要知道由誰實施控制、結果如何確認。"
          ],
          "points": [
            "Transfer（移交合適層級／尋求協助）：考慮是否需要由能處理該問題的人參與決策，例如請主任教官評估訓練安排。",
            "Eliminate（消除）：改變活動使該危害不再暴露，例如取消原定飛行；消除某一危害不代表其他活動也完全沒有風險。",
            "Accept（接受）：在不違反適用限制的前提下，有意識地評估並接受剩餘風險，仍需持續監控。",
            "Mitigate（降低）：選擇能減少可能性、影響或暴露的措施，並核對其效果與是否引入新問題。"
          ]
        },
        {
          "id": "decide",
          "english": "The DECIDE Model",
          "title": "DECIDE：六步決策模型",
          "parent": "decision-process",
          "locator": "PHAK C 版 · 2-18",
          "printedPage": "2-18",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=18",
          "paragraphs": [
            "DECIDE 依序是 Detect、Estimate、Choose、Identify、Do、Evaluate。它把辨認問題、判斷需要、選擇方向、找出解法、執行和檢查結果分開，避免看見一個現象就直接跳到熟悉動作。",
            "原書以模擬引擎故障案例說明，未正確認出問題便行動可能使情況惡化。此處學習的是查證與決策順序，不提供可跨機型使用的故障處置；真正操作應依受訓和適用程序。"
          ]
        },
        {
          "id": "decide-detect",
          "english": "Detect (the Problem)",
          "title": "D：辨認發生的變化",
          "parent": "decide",
          "locator": "PHAK C 版 · 2-20",
          "printedPage": "2-20",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=20",
          "paragraphs": [
            "Detect 包含發現意外變化，也包括預期變化沒有發生。第一個關鍵是區分觀察與解釋：儀表讀值下降是觀察，原因一定是某個部件故障則可能只是猜測。",
            "自編例：系統沒有如預期截獲指定高度，先察覺實際飛行狀態與模式不符，不能只因自己按過鍵就認為一定已啟動。若問題一開始辨認錯誤，後續選項也可能被導向錯誤方向。"
          ]
        },
        {
          "id": "decide-estimate",
          "english": "Estimate (the Need To React)",
          "title": "E：估計影響與反應急迫性",
          "parent": "decide",
          "locator": "PHAK C 版 · 2-20",
          "printedPage": "2-20",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=20",
          "paragraphs": [
            "Estimate 問題需要多快處理、可能造成什麼影響，以及眼前有哪些其他任務。令人驚嚇的現象不一定最急迫，而看似小的異常在高負荷環境也可能有更大影響。",
            "自編例：同一個非關鍵設備異常，在低負荷巡航與繁忙進場中帶來的分心程度不同。估計不是縮小問題，而是依情境安排優先順序，避免過度反應或只盯著一項異常。"
          ]
        },
        {
          "id": "decide-choose",
          "english": "Choose (a Course of Action)",
          "title": "C：選擇期望結果與行動方向",
          "parent": "decide",
          "locator": "PHAK C 版 · 2-20",
          "printedPage": "2-20",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=20",
          "paragraphs": [
            "Choose 先界定想達成的結果，再選擇行動方向。原文雖以 course of action 作標題，內文也強調 desirable outcome；這能避免把「一定完成原定行程」錯當成唯一可以接受的目標。",
            "自編例：目標改成在條件合適的位置安全結束飛行，就會開啟原目的地以外的選項。此步與 Identify 的差別是先確立要去哪裡，再討論哪些具體方法能到達那個結果。"
          ]
        },
        {
          "id": "decide-identify",
          "english": "Identify (Solutions)",
          "title": "I：找出可行解法",
          "parent": "decide",
          "locator": "PHAK C 版 · 2-20",
          "printedPage": "2-20",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=20",
          "paragraphs": [
            "Identify 把行動方向轉成可用方案，評估各方案的條件與代價。可用選項有時很多，有時非常有限；重要的是不要無限比較而不決定，也不要一開始就只保留最熟悉的一條路。",
            "自編例：若需要改降，應核對候選場的天氣、距離、燃油與設施，而不是只選地圖上看起來最近的一點。可行性來自現在的資料，不能只依過去使用經驗。"
          ]
        },
        {
          "id": "decide-do",
          "english": "Do (the Necessary Actions)",
          "title": "D：把決定落實為行動",
          "parent": "decide",
          "locator": "PHAK C 版 · 2-20",
          "printedPage": "2-20",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=20",
          "paragraphs": [
            "Do 是實施已選定的方式，包含必要的控制、通信與工作分配。只說「應該改降」卻持續朝原方向飛行，表示決策還沒有落實；行動內容應與前面選定目標一致。",
            "自編例：計畫改變後，導航設定、燃油估計和旅客說明可能需要一起更新。實施時仍需維持飛機控制與適用程序，不能為了完成設定而忽略當下正在發生的事。"
          ]
        },
        {
          "id": "decide-evaluate",
          "english": "Evaluate (the Effect of the Action)",
          "title": "E：檢查實際效果",
          "parent": "decide",
          "locator": "PHAK C 版 · 2-20",
          "printedPage": "2-20",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=20",
          "paragraphs": [
            "Evaluate 比較實際結果與期望結果，並找出是否出現新問題。採取過行動不表示問題已解決；如果反應不符合預期，就需要重新檢視辨認、假設或方案。",
            "自編例：改變航路後仍無法保持原本預期的燃油餘裕，應回到新的情境重新決策，而不是因為剛改過一次就拒絕再改。這使 DECIDE 成為循環，而非只執行一遍的流程圖。"
          ]
        },
        {
          "id": "dynamic",
          "english": "Decision-Making in a Dynamic Environment",
          "title": "動態環境中的決策",
          "parent": null,
          "locator": "PHAK C 版 · 2-21",
          "printedPage": "2-21",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=21",
          "paragraphs": [
            "飛行情境會持續變動，決策需要兼顧資訊品質和可用時間。分析型模型讓思考更完整，但現場不一定有時間把所有選項逐條寫完；訓練需讓機師知道何時用哪種程度的分析。",
            "自編例：可在飛前充分比較替代機場，到了時間緊迫的階段就能利用已建立的選項。提前準備的價值，是讓重要決定不要全部擠在最忙碌的時刻，而不是假設臨場總能迅速想出答案。"
          ]
        },
        {
          "id": "automatic-decisions",
          "english": "Automatic Decision-Making",
          "title": "經驗形成的快速判斷",
          "parent": "dynamic",
          "locator": "PHAK C 版 · 2-21",
          "printedPage": "2-21",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=21",
          "paragraphs": [
            "這裡的 automatic 指人透過經驗與訓練形成的快速辨識，不是自動駕駛幫忙作決定。熟練者可能迅速辨認情境並想到行動，但前提是辨認與實際情況相符。",
            "如果把新情境誤認成練過的舊情境，快速反應也可能快速出錯。練習應包含變化與檢討，讓人知道熟悉模式的邊界，而不只是重複同一提示與同一按鍵。"
          ]
        },
        {
          "id": "pitfalls",
          "english": "Operational Pitfalls",
          "title": "常見操作與行為陷阱",
          "parent": "automatic-decisions",
          "locator": "PHAK C 版 · 2-21",
          "printedPage": "2-21",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=21",
          "paragraphs": [
            "原書整理的陷阱包括同儕壓力、思維定勢、急於抵達，以及忽視規劃或限制等行為。它們往往不是突然出現，而是從幾次看似合理的小妥協逐步累積。",
            "自編練習：為每個陷阱找出一個早期訊號和可中斷點。例如反覆說「只要再往前一點」可能顯示目標固著；若還沒到不可逆的階段，就應重新評估而非持續等待奇蹟。"
          ],
          "points": [
            "Peer pressure（同儕壓力）：為回應別人的期待而忽略客觀條件；先把人際期待與飛行需求分開。",
            "Mindset（思維定勢）：新資訊出現後仍堅持原解釋；主動問哪些觀察不符合原假設。",
            "Get-there-itis（非到不可）：把原定目的地當成唯一目標；預先接受延後、取消或改降也可能是成功結果。",
            "Duck-under syndrome（往最低標準下方試探）：為了完成進場而忽略最低限制；不得假設程序另藏可自行使用的裕度。",
            "Scud running（低空追逐目視條件）：試圖在惡化天氣下貼近地形維持目視；地形、障礙與可用選項可能同步惡化。",
            "Continuing VFR into instrument conditions：在條件惡化後仍延續目視飛行計畫，可能導致迷向或撞擊；不能用原先好天氣替後續狀態背書。",
            "Getting behind the aircraft（落後於飛機）：一直忙著回應已發生的事，來不及準備下一步；需降低非必要負荷並重新建立先後順序。",
            "Loss of positional or situational awareness：不清楚位置或未察覺情境惡化；不要讓熟悉感取代位置及狀態核對。",
            "Operating without adequate fuel reserves：因過度自信或規劃不足而忽視所需燃油；以實際消耗和可行選項持續檢查。",
            "Descent below the minimum en route altitude：為了繼續行程而忽視航路最低高度等要求；目的地壓力不會改變地形與程序限制。",
            "Flying outside the envelope：誤把航空器性能或自己的技巧想得過高；應依實際核准範圍和當下能力判斷。",
            "Neglect of flight planning, preflight inspections, and checklists：以熟悉路線或記憶代替必要準備；長期沒有出事仍不能證明省略程序合理。"
          ]
        },
        {
          "id": "stress",
          "english": "Stress Management",
          "title": "壓力管理",
          "parent": "dynamic",
          "locator": "PHAK C 版 · 2-21",
          "printedPage": "2-21",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=21",
          "paragraphs": [
            "壓力來源可包括環境、生理與心理因素，例如噪音、疲勞及生活事件；同時處理太多工作也會增加壓力。它可能讓注意力變窄，導致機師只專注一個問題而漏掉其他資訊。",
            "管理從認出負荷開始，並透過準備、適當工作安排和協助減少不必要壓力。不是要求自己單靠意志維持表現；個人身體或醫療問題仍需適當專業評估，本節不提供自行治療方法。"
          ]
        },
        {
          "id": "resources",
          "english": "Use of Resources",
          "title": "選擇適當資源",
          "parent": "dynamic",
          "locator": "PHAK C 版 · 2-21",
          "printedPage": "2-21",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=21",
          "paragraphs": [
            "資源包含人員、設備、文件與外部服務，但使用本身也要花時間和注意力。應判斷資源能解決什麼問題，以及取得它會不會在此刻增加更重要的負荷。",
            "自編例：尋求航管協助可能有用，但不是任何情況都應先投入長篇通信。把可在飛前準備的資訊先整理好，能讓忙碌時比較容易選對可用資源。"
          ]
        },
        {
          "id": "internal",
          "english": "Internal Resources",
          "title": "機上資源",
          "parent": "resources",
          "locator": "PHAK C 版 · 2-23",
          "printedPage": "2-23",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=23",
          "paragraphs": [
            "檢查表、AFM／POH、航電與適當的旅客協助，都可能成為機上資源。檢查表幫助確認設定與程序，不應因為有經驗就把它當成初學者才需要的工具。",
            "旅客可在說明和能力允許時協助簡單事項，例如讀出文字或提醒看到的交通；這不代表可以把 PIC 判斷或未受訓的操作責任直接交給旅客。分工需清楚，並確認資訊已被理解。"
          ]
        },
        {
          "id": "external",
          "english": "External Resources",
          "title": "機外資源",
          "parent": "resources",
          "locator": "PHAK C 版 · 2-23",
          "printedPage": "2-23",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=23",
          "paragraphs": [
            "航管、飛航服務及其他適當管道可提供天氣、交通或規劃資訊。事先知道如何取得服務、如何清楚描述問題，比遇到不確定時仍堅持不求助更有幫助。",
            "本版包含部分歷史服務名稱，例如 Flight Watch 或 TWEB。此處保留其資源管理概念，不把舊頻率或服務流程寫成現行指引；實際使用前應查目前 FAA 發布的可用服務與程序。"
          ]
        },
        {
          "id": "sa",
          "english": "Situational Awareness",
          "title": "情境認知",
          "parent": null,
          "locator": "PHAK C 版 · 2-24",
          "printedPage": "2-24",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=24",
          "paragraphs": [
            "情境認知不只是知道地圖上的位置，也包括理解飛機狀態、環境、任務和各條件如何影響後續安全。你可能知道在哪裡，卻沒注意到燃油、天氣或工作量正在惡化。",
            "自編例：航路位置正確，但尚未準備即將需要的頻率和程序，仍可能很快落後於飛機。持續整合資訊並預想下一步，比只盯著某一個正常指示更能維持整體理解。"
          ]
        },
        {
          "id": "sa-obstacles",
          "english": "Obstacles to Maintaining Situational Awareness",
          "title": "妨礙情境認知的因素",
          "parent": "sa",
          "locator": "PHAK C 版 · 2-24",
          "printedPage": "2-24",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=24",
          "paragraphs": [
            "疲勞、壓力、分心與固著，會影響哪些資訊被注意及如何解釋。資訊很多也不保證認知更好；若注意力長時間停在一個畫面，其他狀態可能在未察覺時改變。",
            "自編例：為了輸入航點反覆查選單，可能漏掉航向和高度趨勢。辨認「我正在忽略什麼」有助恢復整體觀察，而不是把完成設定當成當下唯一目標。"
          ]
        },
        {
          "id": "workload",
          "english": "Workload Management",
          "title": "工作負荷與優先順序",
          "parent": "sa-obstacles",
          "locator": "PHAK C 版 · 2-24",
          "printedPage": "2-24",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=24",
          "paragraphs": [
            "有效管理不是同時把所有事做得更快，而是決定哪些現在必要、哪些可提早完成、哪些能延後或交由適當協助。較低負荷階段可準備後面需要的資料，減少高負荷時來回切換。",
            "自編例：在進場前先熟悉圖面與所需資訊，比進入繁忙階段才開始搜尋更從容。反覆漏步、驚訝或無法追上狀態，可能是負荷過高的線索，應重新安排而非繼續增加非必要任務。"
          ]
        },
        {
          "id": "sa-risk",
          "english": "Managing Risks",
          "title": "用準備與旅客簡報降低干擾",
          "parent": "sa-obstacles",
          "locator": "PHAK C 版 · 2-25",
          "printedPage": "2-25",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=25",
          "paragraphs": [
            "本節把風險管理落到簡報、任務安排及減少干擾。書中的 SAFETY 清單涵蓋安全帶與座椅、通風、滅火器、出口和緊急安排、交通提醒及旅客提問，讓旅客知道如何配合。",
            "高負荷階段應減少非必要談話，但不能因此禁止旅客提醒煙味或其他安全疑慮。此處是一般工作負荷教學，不把本版對安靜座艙的示例時點直接當成所有飛行適用的法規。"
          ]
        },
        {
          "id": "automation",
          "english": "Automation",
          "title": "自動化的幫助與代價",
          "parent": null,
          "locator": "PHAK C 版 · 2-25",
          "printedPage": "2-25",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=25",
          "paragraphs": [
            "整合式航電可把姿態、導航、資訊和控制功能連起來，減少某些搜尋與操縱負擔。但自動化也會改變機師的工作：從直接執行更多轉向設定、監控、確認模式及處理不符預期的反應。",
            "「有更多設備」不等於任務自動變得可接受。機師仍需理解資料來源、系統限制及自身能力；若設備使人放寬原有界線，增加的風險可能抵銷原本的協助。"
          ]
        },
        {
          "id": "study-results",
          "english": "Results of the Study",
          "title": "如何理解書中的研究結果",
          "parent": "automation",
          "locator": "PHAK C 版 · 2-27",
          "printedPage": "2-27",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=27",
          "paragraphs": [
            "原書討論研究中長期使用 EFIS 的機師，在部分手飛或臨時變更情境下，出現技巧維持與低頭設定的問題。重點是訓練和使用習慣會影響自動化帶來的結果，而不只是設備本身。",
            "這是特定年代、樣本與任務背景的研究，不能推出所有玻璃座艙機師都比傳統儀表機師差。可採取的學習方向是持續練習手飛、系統理解與臨時變更，並檢查自己的弱點。"
          ]
        },
        {
          "id": "equipment",
          "english": "Equipment Use",
          "title": "設備使用需要可解釋的理解",
          "parent": "automation",
          "locator": "PHAK C 版 · 2-27",
          "printedPage": "2-27",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=27",
          "paragraphs": [
            "設備使用包含知道功能做什麼、如何啟用、什麼情況不適用，以及如何確認結果。熟悉正常流程之外，也需理解輸入錯誤、模式轉換和設備失效時會改變哪些工作。",
            "自編例：能從記憶輸入一條航路，不表示能解釋臨時改變進場或導航來源後的反應。這些能力應在適當訓練與低風險環境建立，不留到工作最忙時首次摸索。"
          ]
        },
        {
          "id": "autopilot",
          "english": "Autopilot Systems",
          "title": "自動駕駛與工作負荷",
          "parent": "equipment",
          "locator": "PHAK C 版 · 2-27",
          "printedPage": "2-27",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=27",
          "paragraphs": [
            "自動駕駛可協助保持指定狀態，讓機師有更多能力處理其他工作；但它是否可用、如何工作，以及機師是否熟悉，都會影響這項協助是否實際存在。",
            "若原計畫依賴自動駕駛，起飛前已知故障就應重新評估整體任務，不能只問飛機是否仍能手飛。實際使用限制、解除與異常程序依機型和系統文件，不從本站摘要推導。"
          ]
        },
        {
          "id": "familiarity",
          "english": "Familiarity",
          "title": "熟悉度如何建立",
          "parent": "equipment",
          "locator": "PHAK C 版 · 2-27",
          "printedPage": "2-27",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=27",
          "paragraphs": [
            "熟悉度來自理解、練習和回饋，而不是看過示範就自動具備。系統手冊、合適訓練軟體和循序情境可協助學習，但仍需確認學到的是自己所使用的版本與配置。",
            "自編例：在地面練習更改目的地，除了輸入成功，還要解釋哪些航段被改變、何時生效和如何確認。這比只記住按鍵順序更能應付不同的起始狀態。"
          ]
        },
        {
          "id": "respect",
          "english": "Respect for Onboard Systems",
          "title": "理解機上系統的能力與邊界",
          "parent": "equipment",
          "locator": "PHAK C 版 · 2-29",
          "printedPage": "2-29",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=29",
          "paragraphs": [
            "尊重系統不是盲信，而是知道它擅長什麼、依賴什麼資料、有哪些限制，以及機師必須持續確認的事項。系統可以很準確地執行命令，卻不一定知道你輸入的任務是否合理。",
            "原文也談到循序練習與重複強化，讓使用從不熟悉變成可掌握。練習應配合手飛與最基本資訊的運用，避免只有所有功能正常時才有能力控制和理解飛機。"
          ]
        },
        {
          "id": "rote",
          "english": "Getting Beyond Rote Workmanship",
          "title": "超越背按鍵順序",
          "parent": "equipment",
          "locator": "PHAK C 版 · 2-29",
          "printedPage": "2-29",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=29",
          "paragraphs": [
            "死記按鍵的方式依賴固定起點與固定問題。當介面狀態、航路或任務改變，原本背熟的順序可能不再正確；真正理解需要能說明這個操作改變哪個資料或模式。",
            "自編例：不要只回答「按三次再旋轉」，而要回答「我要修改哪個航段、系統目前顯示什麼、確認後哪個功能會生效」。這能在遇到不同狀態時選對方法，而不是不停重播同一串動作。"
          ]
        },
        {
          "id": "platform",
          "english": "Understand the Platform",
          "title": "理解整套航電平台",
          "parent": "equipment",
          "locator": "PHAK C 版 · 2-29",
          "printedPage": "2-29",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=29",
          "paragraphs": [
            "Platform 指自己使用的整套飛機與系統配置，不只是單一螢幕。導航來源、顯示、飛行指引和自動駕駛之間可能互相影響，所以學習需要把連接關係一起看。",
            "自編例：更換導航來源後，某系統可能有不同模式反應，不能直接沿用另一機型的經驗。應讀適用手冊並在訓練中確認行為，保有按正確程序處理與手飛的能力。"
          ]
        },
        {
          "id": "aircraft-automation",
          "english": "Managing Aircraft Automation",
          "title": "管理自動化的三種能力",
          "parent": "automation",
          "locator": "PHAK C 版 · 2-29",
          "printedPage": "2-29",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=29",
          "paragraphs": [
            "本節把先前內容整理成資訊管理、自動化管理與風險管理。資訊管理決定看什麼，自動化管理掌握系統如何工作，風險管理則檢查在目前人機能力下任務是否仍適合。",
            "三者相互影響：資料輸入正確但模式不對，可能得不到預期反應；模式正常但任務超出能力，也不能因此稱為安全。學習不只追求設備操作熟練，還要能把設備行為放回整體飛行情境。"
          ]
        },
        {
          "id": "information",
          "english": "Information Management",
          "title": "資訊管理：選擇與核對",
          "parent": "aircraft-automation",
          "locator": "PHAK C 版 · 2-30",
          "printedPage": "2-30",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=30",
          "paragraphs": [
            "先閱讀再操作，並依當下任務選擇需要的資訊。地圖朝向、比例尺與顯示內容會影響你看到的細節；資訊太多或設定不合適，都可能讓重要訊息難以察覺。",
            "自編例：更改地圖朝向後，要知道畫面向上代表北方、航跡還是機頭，避免憑上一次設定直覺判斷。簡化顯示應保留任務所需資訊，不能為了畫面乾淨把重要限制一併忽略。"
          ]
        },
        {
          "id": "enhanced-sa",
          "english": "Enhanced Situational Awareness",
          "title": "用核對增強情境認知",
          "parent": "automation",
          "locator": "PHAK C 版 · 2-30",
          "printedPage": "2-30",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=30",
          "paragraphs": [
            "移動地圖與整合資訊可以幫助定位，但仍需確認航路、航點、方向和距離是否合理。機師應主動比較預期與顯示，而不是只因畫面連續、沒有警示就停止檢查。",
            "自編例：輸入一個相似名稱的錯誤航點，系統可能照樣畫出平順航路。對照預計方向、航段長度與其他可靠資料，加上口頭確認，有助發現輸入與意圖不一致。"
          ]
        },
        {
          "id": "automation-management",
          "english": "Automation Management",
          "title": "模式待命與作用中的差別",
          "parent": "automation",
          "locator": "PHAK C 版 · 2-31",
          "printedPage": "2-31",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=31",
          "paragraphs": [
            "管理自動化需要知道目前哪些模式正在作用，哪些只是 armed、等待條件成立。按下某功能不保證飛機已按該功能運作，還要觀察模式顯示及實際反應是否在預期時發生。",
            "自編例：導航截獲已待命，飛機仍可能由原橫向模式控制。導航來源改變後的模式反應也依系統不同；不能把某機型示例推廣為所有自動駕駛的固定行為。"
          ]
        },
        {
          "id": "automation-risk",
          "english": "Risk Management",
          "title": "自動化環境中的風險管理",
          "parent": "automation",
          "locator": "PHAK C 版 · 2-31",
          "printedPage": "2-31",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=31",
          "paragraphs": [
            "本章第二個 Risk Management 標題放在自動化脈絡：設備提供的能力是否被過度信任，機師是否因此接受原本不適合的任務，以及監控是否因習慣而鬆懈。這與前段流程相關，但關注對象不同。",
            "原書以錯誤航點造成的飛行路徑問題提醒，系統可能忠實執行錯誤輸入。避免變成只坐著觀看的乘客，需要持續核對航路與狀態，並用能力和限制評估任務，而不是把新設備當成風險已消失的證明。"
          ]
        },
        {
          "id": "summary",
          "english": "Chapter Summary",
          "title": "本章總結與完整案例回顧",
          "parent": null,
          "locator": "PHAK C 版 · 2-32",
          "printedPage": "2-32",
          "source": "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page=32",
          "paragraphs": [
            "本章可以串成一條循環：辨認人與環境的條件、找出危害、評估影響、選擇控制、執行後再觀察。PAVE、CARE、TEAM 幫助走完 3P；5P 提醒定期回顧；DECIDE 則把問題解決拆成六步。",
            "自編檢核：目的地天氣轉差、旅客趕時間、自動駕駛又不可用。先用 PAVE 找條件，以 CARE 分析，使用 TEAM 選擇控制，再說明何時重新跑 5P。若能解釋資訊、選項和監控方式，比只背完所有縮寫更接近真正理解。"
          ]
        }
      ],
      "confusions": [
        {
          "title": "合法與適合自己",
          "clarification": "符合最低要求不等於符合當下能力及熟練度。",
          "example": "經驗不足時，個人界線可能比法規更保守。"
        },
        {
          "title": "自動化與責任",
          "clarification": "系統協助執行，不會取代機師理解及監控。",
          "example": "輸入錯誤航點後，系統可能很準確地飛向錯誤位置。"
        },
        {
          "title": "PAVE 與 5P",
          "clarification": "PAVE 依危害來源檢查；5P 依五個變數在關鍵時點重新回顧。兩者用途重疊但不是相同清單。",
          "example": "5P 特別列出旅客和設定工作；PAVE 把外在壓力獨立成一項。"
        },
        {
          "title": "CARE 與 TEAM",
          "clarification": "CARE 分析危害對安全的影響，TEAM 選擇並實施風險控制。找出替代方案後，還需決定如何行動。",
          "example": "發現延後可降低壓力屬於評估選項；實際更改安排才完成相應控制。"
        },
        {
          "title": "Automatic decision-making 與 autopilot",
          "clarification": "前者指人以經驗快速辨識情境，後者是執行控制功能的系統。兩者都需要檢查是否符合實際狀況。",
          "example": "機師迅速察覺熟悉的異常，不表示自動駕駛已替他決定處置。"
        },
        {
          "title": "Armed 與 active",
          "clarification": "待命模式可能尚未控制飛機；需等條件成立並確認實際啟動。",
          "example": "按下導航截獲功能後，仍需確認何時截獲及飛機如何反應。"
        }
      ],
      "scenario": "自編案例：目的地天氣轉差，旅客一直提醒會議快開始。先辨認外在壓力與天氣變化，再比較延後、改降等可用選項，並核對各方案需要的燃油與機场資料。",
      "question": "旅客催促準時抵達主要屬於 PAVE 哪一項？",
      "options": [
        "Aircraft",
        "External pressures",
        "Environment"
      ],
      "answer": 1,
      "explanation": "屬於外在壓力；它可能讓人忽略天氣或燃油資訊，應與其他風險一起評估。",
      "verified": true,
      "reader": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=40",
      "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=40",
      "detailMode": "outline",
      "checked": "2026-09-10",
      "coverageNote": "依提供的 Chapter 2 目錄逐節展開；重複出現的 SRM、PAVE 與 Risk Management 保留各自情境。英文標題、印刷頁碼與分章 PDF 連結供回查；中文案例與說明為自編，非逐字翻譯。",
      "modelComparison": [
        [
          "PAVE",
          "有哪些危害條件？",
          "機師、航空器、環境、外在壓力的清單"
        ],
        [
          "5P",
          "目前計畫與能力改變了嗎？",
          "在關鍵時點回顧計畫、飛機、機師、旅客與設定"
        ],
        [
          "3P",
          "如何從發現走到行動？",
          "Perceive → Process → Perform，結果再回饋"
        ],
        [
          "CARE",
          "這些條件有什麼影響與替代？",
          "後果、替代、現實、外在因素的評估"
        ],
        [
          "TEAM",
          "用哪種方式處理？",
          "Transfer／Eliminate／Accept／Mitigate"
        ],
        [
          "DECIDE",
          "問題、期望結果與解法是否一致？",
          "辨認 → 估計 → 選擇 → 解法 → 執行 → 評估"
        ]
      ]
    },
    {
      "id": "phak25c-3",
      "number": 3,
      "title": "航空器構造",
      "english": "Aircraft Construction",
      "section": "第 3 章；3-1～3-13，附圖至 3-16",
      "goal": "理解結構如何承載，以及主要部件如何配合。",
      "primer": "機身容納人員與設備，機翼提供主要升力，尾翼參與穩定與控制，起落架支撐地面作業，動力裝置提供推進。這些部件透過接合與結構把載荷傳遞，不能只把外形當作彼此無關的零件。",
      "terms": [
        "Fuselage · 機身",
        "Empennage · 尾翼組",
        "Semimonocoque · 半硬殼式"
      ],
      "prompts": [
        "半硬殼式蒙皮與複合材料表面各有哪些不能僅憑外觀判斷的事項？請指出原文位置。",
        "設定爬升姿態後，哪些儀表告訴你控制設定、實際結果，以及相對航道的位置？"
      ],
      "keyPoints": [
        "辨識五個主要部件，從連接處理解載荷傳遞。",
        "區分桁架、硬殼式與半硬殼式，以及纖維與基材的功能。",
        "複材的重量優勢取決於設計；碰撞、熱、油液與雷擊需分別理解。",
        "控制儀表看姿態與功率，性能儀表看實際結果，導航儀表看相對路徑。"
      ],
      "detailSections": [
        {
          "id": "introduction",
          "english": "Introduction",
          "title": "導論：從構造理解飛行",
          "parent": null,
          "locator": "PHAK C 版 · 3-1",
          "printedPage": "3-1",
          "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=1",
          "paragraphs": [
            "Aircraft 是航空器的總稱，airplane 則是其中以動力推進、固定翼產生主要支承力的飛機。本章主要用飛機解釋構造，不能把其機翼、尾翼與操縱方式直接套用到旋翼機、氣球或重心移動控制航空器。",
            "學習構造可以依序問三件事：這個部件做什麼、承受的力如何傳遞、它依賴哪些系統。先建立整架飛機的空間關係，再閱讀後續的空氣動力、飛行操縱與系統章節，名稱就能連到實際功能。"
          ]
        },
        {
          "id": "certification",
          "english": "Aircraft Design, Certification, and Airworthiness",
          "title": "設計、認證與適航",
          "parent": null,
          "locator": "PHAK C 版 · 3-2",
          "printedPage": "3-2",
          "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=2",
          "paragraphs": [
            "型別合格證（TC）處理產品型別設計是否符合適用標準；型別合格證資料表（TCDS）記載該型別的重要特性與限制。製造符合性檢查則確認實際製成的產品符合核准設計，不能用設計已通過來代替製造品質的確認。",
            "適航證對應到個別航空器；對具有核准型別設計的航空器，理解適航還必須同時看符合其核准構型，以及處於安全操作狀態。自編例：同型號的兩架飛機即使依相同設計製造，其中一架發現未處理的結構損傷，也不能因另一架正常而判斷它能安全飛行。"
          ],
          "references": [
            {
              "title": "FAA：標準適航證與持續有效條件",
              "url": "https://www.faa.gov/aircraft/air_cert/aw_cert/standard_aw_certificates",
              "checked": "2026-09-10"
            }
          ]
        },
        {
          "id": "lsa",
          "english": "A Note About Light Sport Aircraft",
          "title": "輕型運動航空器的認證差異",
          "parent": "certification",
          "locator": "PHAK C 版 · 3-2",
          "printedPage": "3-2",
          "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=2",
          "paragraphs": [
            "這節用 LSA 引出另一條認證途徑：FAA 接受的產業共識標準可作為符合要求的依據。共識標準不是製造商自行宣稱安全即可，仍需對照適用要求、符合性文件與個別航空器的證件；也不能把運動類機師權限和航空器認證類別視為同一件事。",
            "閱讀 2023 年原文時，要特別區分型別設計核准與個別適航證的核發。原文把 LSA 描述成整機取得 TC，容易造成誤解；請搭配下方 FAA 說明理解此差異，並以適用於該航空器及交付時間的文件查核實際認證依據。"
          ],
          "currentNote": "查閱 2026-09-10：FAA 的 MOSAIC 製造與認證 FAQ 明確說明，FAA 不向 light-sport category aircraft 或 experimental LSA 核發設計／生產核准，而依適用條文向個別航空器核發適航證。2026-07-24 起的 LSA 認證變更亦涉及 Part 22 與新的共識標準；本節不沿用原書「整機取得 TC」的說法作為現行規則。",
          "references": [
            {
              "title": "FAA MOSAIC：LSA 製造與認證 FAQ",
              "url": "https://www.faa.gov/aircraft/MOSAIC/mosaic_faq_manufacture_cert_LSA",
              "checked": "2026-09-10"
            }
          ]
        },
        {
          "id": "forces",
          "english": "Lift and Basic Aerodynamics",
          "title": "升力、四力與三軸",
          "parent": null,
          "locator": "PHAK C 版 · 3-2",
          "printedPage": "3-2",
          "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=2",
          "paragraphs": [
            "飛機的基本受力包括升力、重力、推力與阻力。升力方向垂直於相對氣流，阻力沿相對氣流方向向後，重力通過重心向地心作用；只有在相應的平衡條件下，才能用升力等於重量、推力等於阻力的簡化圖像，轉彎或加速時需重新分析。",
            "三個轉動軸通過重心：縱軸對應滾轉、橫軸對應俯仰、垂直軸對應偏航。重心位置影響穩定與操縱能力，燃油消耗也可能改變重心；不能只查起飛時的裝載，還要依機型資料確認飛行中的重量與重心保持在限制內。"
          ],
          "points": [
            "Roll／滾轉：繞機頭到機尾的縱軸轉動，並非繞翼尖連線。",
            "Pitch／俯仰：繞橫軸轉動；機頭姿態改變不等於飛行路徑立即等量改變。",
            "Yaw／偏航：繞垂直軸轉動；方向舵作用與協調轉彎需在操縱章節進一步理解。"
          ]
        },
        {
          "id": "components",
          "english": "Major Components",
          "title": "主要部件與載荷路徑",
          "parent": null,
          "locator": "PHAK C 版 · 3-3",
          "printedPage": "3-3",
          "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=3",
          "paragraphs": [
            "多數傳統飛機可分成機身、機翼、尾翼組、起落架和動力裝置。外形會隨載人、運貨、訓練或其他設計任務而變，但每個部件的功能都必須和全機的重量、阻力、穩定性與結構需求配合。",
            "自編例：落地衝擊由輪胎與起落架傳入機體，飛行時翼面受力則經翼內構件與接合處傳遞。檢視飛機時，除了認出部件，也應能指出它連到哪裡，以及連接處為什麼具有結構上的重要性。"
          ]
        },
        {
          "id": "fuselage",
          "english": "Fuselage",
          "title": "機身",
          "parent": "components",
          "locator": "PHAK C 版 · 3-3",
          "printedPage": "3-3",
          "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=3",
          "paragraphs": [
            "機身容納機組、旅客與貨物，也是機翼及尾翼組的主要結構連接中心。座艙空間與外表只是它的一部分，內部框架、外皮及接合位置還必須把不同方向的載荷傳遞到其他構件。",
            "早期常見桁架骨架加覆面，另有硬殼式與半硬殼式構造。不同方式的外皮承力程度不同，因此不能因為看到的是薄板或布面，就用同一套直覺評估損傷；先辨識承力方式，才能理解為何檢查與修理依據不同。"
          ]
        },
        {
          "id": "wings",
          "english": "Wings",
          "title": "機翼：配置、骨架與活動面",
          "parent": "components",
          "locator": "PHAK C 版 · 3-3",
          "printedPage": "3-3",
          "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=3",
          "paragraphs": [
            "機翼是主要升力面，依安裝位置可分高翼、中翼及低翼，依翼面組數可分單翼與雙翼。半懸臂式利用外部支柱分擔載荷，全懸臂式由內部結構承載而不需這類外部支柱；看不到支柱不代表機翼缺少支撐。",
            "翼樑、翼肋、縱向加強構件與蒙皮共同工作：翼肋維持翼型，翼樑等構件傳遞主要載荷，機翼內也可能設置油箱。典型副翼位於較外側後緣，以左右差動動作控制滾轉；襟翼較靠內側，通常同向放下以改變升阻特性，兩者不可只按位置背誦而忽略功能。"
          ]
        },
        {
          "id": "alternate-wings",
          "english": "Alternate Types of Wings",
          "title": "其他機翼形式",
          "parent": "wings",
          "locator": "PHAK C 版 · 3-5",
          "printedPage": "3-5",
          "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=5",
          "paragraphs": [
            "本節補入正文中的其他機翼形式。不同任務可採不同平面形狀、後掠與柔性設計，重心移動控制航空器更可能透過機體相對翼面的重量位置變化達到操縱，不能預設都有傳統副翼與升降舵。",
            "自編練習：對照原圖，找出固定翼飛機與重心移動控制航空器各自改變什麼來控制飛行。重點是結構與控制方法的配合，不是把某一種翼型直接判定為所有速度與用途下都比較好。"
          ],
          "supplementalHeading": true
        },
        {
          "id": "empennage",
          "english": "Empennage",
          "title": "尾翼組與配平面",
          "parent": "components",
          "locator": "PHAK C 版 · 3-6",
          "printedPage": "3-6",
          "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=6",
          "paragraphs": [
            "傳統尾翼組包括水平與垂直安定面，以及升降舵、方向舵和可能設置的配平片。安定面與活動面分工不同：前者參與穩定，後者提供控制力矩；配平片則協助減少機師持續施加的操縱力。",
            "全動式水平尾翼（stabilator）由整個水平面轉動，不是固定安定面後面再接一片升降舵。原文示例的 antiservo tab 隨尾翼後緣同向偏轉，增加操縱回饋並可兼作配平；不要把它和所有其他種類的小翼片都視為相同機構。"
          ]
        },
        {
          "id": "gear",
          "english": "Landing Gear",
          "title": "起落架與地面支承",
          "parent": "components",
          "locator": "PHAK C 版 · 3-7",
          "printedPage": "3-7",
          "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=7",
          "paragraphs": [
            "起落架在停放、滑行、起飛與落地時支撐飛機，接地裝置可為輪子、浮筒或滑橇。常見輪式配置是兩個主輪加鼻輪或尾輪；鼻輪式稱三點式，尾輪式又稱 conventional gear，這裡的 conventional 是配置名稱。",
            "地面方向控制可能透過可轉向鼻輪或尾輪，也可能配合差動煞車，實際連動依機型而異。自編例：同樣踩方向舵踏板，不能假設不同飛機的地面轉向角度與反應一致，必須先了解其轉向及煞車安排。"
          ]
        },
        {
          "id": "powerplant",
          "english": "The Powerplant",
          "title": "動力裝置與螺旋槳",
          "parent": "components",
          "locator": "PHAK C 版 · 3-7",
          "printedPage": "3-7",
          "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=7",
          "paragraphs": [
            "本章以引擎加螺旋槳的組合為主：引擎提供轉矩，旋轉的槳葉作為翼型把能量轉成推力。引擎也可能驅動發電或儀表所需的附屬設備，整流罩除了整理外部氣流，還引導冷卻氣流；不是每架飛機都使用相同的真空或供暖方式。",
            "槳葉各半徑位置的周向速度不同，沿展向的扭轉讓各段更接近設計所需的工作迎角。槳葉幾何角度、相對氣流迎角與螺距不能混為一談；螺距描述理想一圈的前進距離，並不表示真實空氣中每轉必然前進同樣距離。"
          ]
        },
        {
          "id": "subcomponents",
          "english": "Subcomponents",
          "title": "機體、電力、操縱與煞車系統",
          "parent": null,
          "locator": "PHAK C 版 · 3-8",
          "printedPage": "3-8",
          "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=8",
          "paragraphs": [
            "Airframe 是承受氣動力及燃油、人員、載荷所造成應力的基本機體結構。電力系統則負責發電、調節與分配，來源可隨飛機大小和配置包括引擎驅動發電機、輔助動力裝置或外部電源；閱讀列舉時不要當成每架訓練機都有的設備。",
            "飛行操縱系統把機師或自動駕駛的命令傳到操縱面，煞車則透過摩擦吸收地面運動能量。這些系統與結構彼此依賴：例如電力異常可能影響儀表資訊，而起落架承力正常也不代表其煞車功能正常。"
          ]
        },
        {
          "id": "construction",
          "english": "Types of Aircraft Construction",
          "title": "構造方式：誰在承受載荷",
          "parent": null,
          "locator": "PHAK C 版 · 3-8",
          "printedPage": "3-8",
          "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=8",
          "paragraphs": [
            "分類結構時，應看載荷由哪些部分分擔，而不只看材料名稱。桁架式以骨架承力，硬殼式高度依賴承力外殼，半硬殼式由外皮與內部加強構件共同工作；複合材料則是在描述材料系統，可用於不同結構安排。",
            "自編比較：兩架外形相似的飛機，一架覆面主要整理氣流，另一架蒙皮承受重要的剪力與彎扭載荷。同樣大小的表面異常未必具有相同意義，結構名稱的用途是幫助理解力的路徑，並非自行制定可接受損傷尺寸。"
          ]
        },
        {
          "id": "truss",
          "english": "Truss Structure",
          "title": "桁架式結構",
          "parent": "construction",
          "locator": "PHAK C 版 · 3-8",
          "printedPage": "3-8",
          "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=8",
          "paragraphs": [
            "桁架透過縱向構件、支柱與斜撐形成穩定骨架，承受不同方向的載荷。整形框與縱向小構件可用來維持機身外形和支撐覆面；在典型桁架設計中，外部布面主要提供平順外形，不承擔與承力蒙皮相同的角色。",
            "早期骨架外形不利於流線化，因此逐漸加入覆面整理氣流。自編例：看到一架覆布飛機時，可以分辨「讓外形平順的表面」與「在內部傳力的骨架」，但覆面本身仍需符合該機型的狀態要求，不能因非主要承力就忽視破損。"
          ]
        },
        {
          "id": "monocoque",
          "english": "Monocoque",
          "title": "硬殼式結構",
          "parent": "construction",
          "locator": "PHAK C 版 · 3-8",
          "printedPage": "3-8",
          "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=8",
          "paragraphs": [
            "硬殼式主要由承力外殼承受載荷，內部框形構件協助維持形狀。原文用飲料罐比喻薄殼：外形完整時可承受相當軸向力，局部變形卻可能明顯降低抵抗失穩的能力，說明外皮幾何形狀也是結構功能的一部分。",
            "這個比喻不能用來計算航空器損傷允許值，也不表示硬殼式內部完全沒有構件。學習時要抓住它與桁架的核心差別：主要彎扭載荷更多透過外殼傳遞，因此不能將凹陷僅視為外觀問題。"
          ],
          "supplementalHeading": true
        },
        {
          "id": "semimonocoque",
          "english": "Semimonocoque",
          "title": "半硬殼式結構",
          "parent": "construction",
          "locator": "PHAK C 版 · 3-9",
          "printedPage": "3-9",
          "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=9",
          "paragraphs": [
            "半硬殼式在承力外皮內加入隔框、整形框與縱向構件，讓外皮與骨架共同分擔載荷，維持形狀並提高抗彎等能力。「半」不是固定各負擔一半的數學比例，而是描述相較純承力外殼增加內部加強的構造概念。",
            "機身主要結構還包括機翼連接處及防火牆。典型單引擎飛機的防火牆隔開引擎艙和座艙，以耐熱材料協助保護人員；它的功能與一般隔板不同，但也不能理解成發生引擎火災後可無限期隔絕所有熱與煙。"
          ]
        },
        {
          "id": "composites",
          "english": "Composite Construction",
          "title": "複合材料構造",
          "parent": "construction",
          "locator": "PHAK C 版 · 3-9",
          "printedPage": "3-9",
          "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=9",
          "paragraphs": [
            "複合材料把不同材料結合，利用纖維與基材的互補特性製成結構。玻璃纖維、碳纖維與芳綸纖維等名稱描述增強材料，樹脂則把纖維結合並形成構件；複材不是某一種單一塑膠的同義詞。",
            "設計者可透過纖維方向、材料與構形配合受力需求，因此不能僅憑「碳纖維」三字推定重量、強度或耐撞能力。學習本節要同時看到設計自由度與檢查限制，避免把材料優勢等同整架飛機在所有情境都更安全。"
          ]
        },
        {
          "id": "composite-history",
          "english": "History",
          "title": "複合材料的應用歷史",
          "parent": "composites",
          "locator": "PHAK C 版 · 3-9",
          "printedPage": "3-9",
          "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=9",
          "paragraphs": [
            "原文從二戰時玻璃纖維作為隔熱用途，談到後來滑翔機把它用作主要結構，呈現同一類材料如何從附屬用途進入承力用途。高性能滑翔機需要平順曲面與良好氣動外形，提供了複材應用的重要場景。",
            "歷史段落中的年份、當時新機使用比例與產品例子，是技術演進的背景，並非目前市場統計。閱讀時可整理成「用途如何擴大、製造如何成熟、結構責任如何增加」三條線，不必把過去的比例當成今天選機的依據。"
          ]
        },
        {
          "id": "composite-materials",
          "english": "Composite Materials in Aircraft",
          "title": "纖維與基材如何共同工作",
          "parent": "composites",
          "locator": "PHAK C 版 · 3-9",
          "printedPage": "3-9",
          "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=9",
          "paragraphs": [
            "纖維承受大部分主要載荷，基材把纖維結合、維持形狀並協助傳遞載荷。航空常見環氧樹脂屬熱固性材料，不同配方的固化條件、耐熱與結構性能各異；即使增強纖維相同，基材不同也可能改變構件表現。",
            "玻璃纖維通常較容易加工且成本較低，碳纖維可提供較高剛性與重量方面的優勢，但脆性及撞擊反應也需考慮。原文強調材料與樹脂系統的選擇會影響結果，因此不能用一種複材的經驗推論所有複材。"
          ],
          "supplementalHeading": true
        },
        {
          "id": "advantages",
          "english": "Advantages of Composites",
          "title": "複合材料的優點",
          "parent": "composites",
          "locator": "PHAK C 版 · 3-10",
          "printedPage": "3-10",
          "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=10",
          "paragraphs": [
            "複材能形成平順且複雜的曲面，有助於降低外形阻力，也可能在適當設計下減輕重量。減重並非自動發生：纖維種類、結構尺寸、接合方式及實際載荷需求都會影響成品是否比其他方案輕。",
            "相較金屬，複材具有不同的腐蝕與疲勞特性，適合某些反覆彎曲的結構用途。這不等於它永不老化或不需檢查；應把優點理解成工程設計可運用的特性，而不是對所有環境與損傷的免疫能力。"
          ]
        },
        {
          "id": "disadvantages",
          "english": "Disadvantages of Composites",
          "title": "隱藏損傷、熱與化學限制",
          "parent": "composites",
          "locator": "PHAK C 版 · 3-10",
          "printedPage": "3-10",
          "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=10",
          "paragraphs": [
            "複材受撞後可能發生分層、纖維斷裂或基材損傷，外表痕跡卻不明顯。低能量碰撞也可能造成內部損傷範圍大於可見痕跡；有碰撞事實就應完整記錄並由熟悉該結構的人員依資料評估，而不是只摸表面是否平滑。",
            "樹脂也有耐熱和化學相容性限制，塗裝顏色與吸熱會影響溫度，除漆劑可能損害材料。原文的溫度例子並非所有複材的通用限制；表面補土或臨時遮蓋也不等於恢復承力能力，真正的結構修理須使用適用資料。"
          ]
        },
        {
          "id": "fluids",
          "english": "Fluid Spills on Composites",
          "title": "液體接觸與材料相容性",
          "parent": "composites",
          "locator": "PHAK C 版 · 3-11",
          "printedPage": "3-11",
          "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=11",
          "paragraphs": [
            "燃油、油液或液壓液是否影響複材，取決於樹脂、塗層、液體成分與接觸條件。原文說明某些現代環氧系統能承受常見油液接觸，但也指出不同聚酯樹脂與含乙醇燃油可能有相容性問題。",
            "不能從「某些玻璃纖維油箱可直接接觸燃油」推論任何複材油箱都可加任何汽油。自編例：發現潑灑後，先辨識液體及接觸部位，再依該機型資料處置；表面漆色看似正常，並不是對所有材料和情況的充分證明。"
          ]
        },
        {
          "id": "lightning",
          "english": "Lightning Strike Protection",
          "title": "雷擊防護與導電路徑",
          "parent": "composites",
          "locator": "PHAK C 版 · 3-11",
          "printedPage": "3-11",
          "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=11",
          "paragraphs": [
            "雷擊防護需要把電流經設計的路徑分散並導出，降低局部損害，同時保護燃油系統與航電。鋁蒙皮具有良好導電性，玻璃纖維偏向絕緣，碳纖維雖導電卻不能直接視同鋁，因此複材外層常需另設金屬網等導電安排。",
            "修理具有雷擊防護的區域時，承力結構與導電防護都必須納入，不能只恢復表面形狀。原文亦提到內置天線需要與防護網及材料的無線電特性配合；這說明結構修理可能同時影響通訊與電氣防護。"
          ]
        },
        {
          "id": "future",
          "english": "The Future of Composites",
          "title": "複合材料的發展方向",
          "parent": "composites",
          "locator": "PHAK C 版 · 3-12",
          "printedPage": "3-12",
          "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=12",
          "paragraphs": [
            "本節以設計彈性、耐腐蝕特性及可能達成的高強度重量比，說明複材為何持續受到航空設計採用。從滑翔機到運輸機，材料的價值要和製造、檢查及全壽命維護能力一起評估，不能單靠外觀或新穎程度判斷。",
            "原書使用的「未來」是該段文字的時代觀點，並非本站對最新產業趨勢的調查。自編閱讀問題：若一種材料更輕但需要不同損傷檢測方法，使用者和維修體系需要增加哪些能力，才能實際取得設計帶來的好處？"
          ]
        },
        {
          "id": "instrumentation",
          "english": "Instrumentation: Moving into the Future",
          "title": "從傳統儀表到整合顯示",
          "parent": null,
          "locator": "PHAK C 版 · 3-12",
          "printedPage": "3-12",
          "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=12",
          "paragraphs": [
            "電子飛行顯示把原本分散的資訊整合到螢幕，常見主飛行顯示器 PFD 與多功能顯示器 MFD 分別呈現核心飛行資訊及地圖、系統等資料，實際配置依機型而異。顯示方式變了，資訊仍可依性能、控制與導航三種功能分類。",
            "一個螢幕可能同時顯示多種功能，不代表它們都由同一種感測器取得，也不表示備援一定獨立。學習玻璃座艙時應連結第二章的自動化管理：辨識資料來源、模式與失效提示，並理解何時需要交叉核對其他資訊。"
          ]
        },
        {
          "id": "performance",
          "english": "Performance Instruments",
          "title": "性能儀表：實際達成的結果",
          "parent": "instrumentation",
          "locator": "PHAK C 版 · 3-12",
          "printedPage": "3-12",
          "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=12",
          "paragraphs": [
            "性能儀表反映飛機實際達成的狀態，例如空速、高度、垂直速度及航向等資訊。這裡的 performance 並不只指起飛距離或最大速度，而是用來回答目前飛機的表現如何，和控制設定是否達到想要的結果。",
            "自編例：設定爬升姿態與功率後，仍要查看空速及垂直速度等變化，才能確認實際爬升狀態。性能資訊可能有反應延遲或感測限制，因此不能用一個瞬間讀值取代持續交叉檢查。"
          ],
          "supplementalHeading": true
        },
        {
          "id": "control",
          "english": "Control Instruments",
          "title": "控制儀表：姿態與功率",
          "parent": "instrumentation",
          "locator": "PHAK C 版 · 3-13",
          "printedPage": "3-13",
          "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=13",
          "paragraphs": [
            "控制儀表呈現姿態與功率的變化，讓機師能精確建立與調整控制設定。姿態指示器說明飛機如何傾斜，適用的動力儀表反映功率相關參數；本分類不是指所有能被手操作的旋鈕或控制面。",
            "機頭抬高和功率設定完成，並不能單靠這兩項就知道飛機現在的高度或空速。自編例：相似姿態在重量、阻力或其他條件不同時可能產生不同結果，因此要用性能儀表驗證，形成設定與結果的回饋。"
          ]
        },
        {
          "id": "navigation",
          "english": "Navigation Instruments",
          "title": "導航儀表：相對預定路徑的位置",
          "parent": "instrumentation",
          "locator": "PHAK C 版 · 3-13",
          "printedPage": "3-13",
          "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=13",
          "paragraphs": [
            "導航儀表呈現航空器相對於選定導航設施、定位點或航道的位置，資訊可包括方位、距離、航道偏差與下滑道偏差。它們可能使用 GPS、VOR、NDB 或 ILS 等不同來源；同一顯示器呈現的指針也可能因所選來源而改變意義。",
            "導航偏差回答相對於目標路徑在哪裡，不直接告訴你目前姿態或應施加多少操縱量。自編例：看到偏差後，先確認選定的航道、訊號來源和有效性，再結合飛行狀態修正；詳細判讀與程序在導航章節繼續學習。"
          ]
        },
        {
          "id": "gps",
          "english": "Global Positioning System (GPS)",
          "title": "GPS 定位原理與使用限制",
          "parent": null,
          "locator": "PHAK C 版 · 3-13",
          "printedPage": "3-13",
          "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=13",
          "paragraphs": [
            "GPS 接收器利用多顆衛星訊號解算位置；原文用三顆衛星與二維、四顆以上與三維定位的入門模型介紹。實際解算還涉及接收器時鐘誤差與衛星幾何，三顆衛星的二維解通常需要高度等額外約束，不能把衛星數量當成定位品質的唯一判準。",
            "能顯示經緯度不等於已符合特定航空導航用途的完整性與設備要求。自編例：移動地圖上有飛機符號時，仍應確認資料有效性和設備提示；本節建立定位概念，航空使用方式與限制應搭配第十六章、適用 AIM 及設備文件。"
          ],
          "references": [
            {
              "title": "GPS.gov：定位與時間解算原理",
              "url": "https://archive.gps.gov/cgsic/meetings/2008/kelley.pdf",
              "checked": "2026-09-10"
            },
            {
              "title": "GPS.gov：定位精度的影響因素",
              "url": "https://www.gps.gov/gps-accuracy-0",
              "checked": "2026-09-10"
            }
          ]
        },
        {
          "id": "summary",
          "english": "Chapter Summary",
          "title": "全章統整與練習",
          "parent": null,
          "locator": "PHAK C 版 · 3-13",
          "printedPage": "3-13",
          "source": "https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page=13",
          "paragraphs": [
            "讀完本章應能沿著機身、機翼、尾翼、起落架與動力裝置說明功能及連接關係，再比較桁架、硬殼式與半硬殼式的承力方式。複材部分要同時記得纖維與基材的分工、設計優勢及外觀難以顯示全部損傷的限制。",
            "自編練習：選一張熟悉機型的圖，指出五個主要部件，再選三項座艙資訊分成控制、性能與導航，說明各自回答什麼問題。把尚不能確認的構造與設備記在筆記，對照原文及該機型資料；本章末的 3-14～3-16 尚有儀表比較圖可一併閱讀。"
          ]
        }
      ],
      "confusions": [
        {
          "title": "外皮與裝飾板",
          "clarification": "承力外皮可能參與傳遞載荷。",
          "example": "半硬殼式的蒙皮不是單純包住骨架。"
        },
        {
          "title": "看不見與不存在",
          "clarification": "外觀檢查可能不足以排除內部損傷。",
          "example": "複合材料受撞後可能需要特定檢查。"
        },
        {
          "title": "材料與結構分類",
          "clarification": "複合材料描述材料系統；半硬殼式描述承力安排，兩者不是必然互斥的類別。",
          "example": "知道一架飛機使用碳纖維，仍需確認外皮與內部構件如何分擔載荷。"
        },
        {
          "title": "控制、性能與導航儀表",
          "clarification": "姿態與功率設定、飛機實際表現、相對導航路徑的位置，回答的是不同問題；同一螢幕可以整合三類資訊。",
          "example": "抬頭姿態不保證正在爬升，航道指針置中也不表示高度正確。"
        },
        {
          "title": "螺距與迎角",
          "clarification": "螺距是幾何前進距離的概念，迎角是槳葉與相對氣流之間的角度。",
          "example": "幾何設定不變時，飛行速度改變仍可能改變槳葉迎角。"
        }
      ],
      "scenario": "自編案例：學員看到機翼表面有一處新凹痕。較有用的紀錄包含位置、大小、是否接近接合、發現時間及是否有已知碰撞，而不是只寫「應該沒事」。",
      "question": "半硬殼式結構的載荷主要如何承受？",
      "options": [
        "只有座椅承受",
        "外皮與內部結構共同承受",
        "外皮完全不受力"
      ],
      "answer": 1,
      "explanation": "半硬殼式使用內部構件強化承力外皮，兩者共同工作。",
      "verified": true,
      "reader": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=72",
      "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=72",
      "detailMode": "outline",
      "checked": "2026-09-10",
      "coverageNote": "依 FAA-H-8083-25C 第三章逐節整理，保留提供的目錄順序，另補正文中的 Alternate Types of Wings、Monocoque、Composite Materials in Aircraft、Performance Instruments 四個標題。原書正文至 3-13，儀表附圖延續至 3-16；中文講解與案例為本站編寫，法規版本差異另註。"
    },
    {
      "id": "phak25c-4",
      "number": 4,
      "title": "飛行基本原理",
      "english": "Principles of Flight",
      "section": "第 4 章；4-1～4-9，全章目錄逐節講解",
      "goal": "用空氣性質、壓力與流動建立升力的理解。",
      "primer": "空氣有密度、黏性與壓力，因此流過物體時會產生作用力。飛機並不是在空的背景中移動；機翼與周圍流場彼此影響，黏性也關係到貼近表面的流動。",
      "terms": [
        "Density altitude · 密度高度",
        "Airfoil · 翼型",
        "Relative wind · 相對風"
      ],
      "prompts": [
        "同一機場在氣壓近似固定而升溫時，壓力高度、密度高度與幾何標高分別如何變化？",
        "如何用對稱翼型反駁等時會合說法？壓力分布與下洗為什麼不能算成兩份升力相加？"
      ],
      "keyPoints": [
        "空氣有質量、黏性與壓力；邊界層具有速度分布，不只是一層黏住的分子。",
        "壓力高度對應氣壓，密度高度對應密度；溫度與濕度的比較須說明固定條件。",
        "牛頓與伯努利描述同一流動；上下氣流不必在後緣同時會合。",
        "翼型、迎角與三維翼尖效應共同影響氣動力，固定上下升力占比並不適用。"
      ],
      "detailSections": [
        {
          "id": "introduction",
          "english": "Introduction",
          "title": "導論：環境、流動與受力",
          "parent": null,
          "locator": "PHAK C 版 · 4-1",
          "printedPage": "4-1",
          "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=1",
          "paragraphs": [
            "本章從空氣的物理性質出發，連到航空器的受力與性能。空氣具有質量、壓力和黏性，機翼在其中運動會改變周圍氣流；理解飛行不是只背四個力的名稱，而是說清楚環境及流動改變後，受力為什麼也改變。",
            "可以把閱讀分成三步：先了解壓力、溫度與濕度如何影響密度，再用運動定律和壓力分布解釋升力，最後從二維翼型延伸到有翼尖的三維機翼。後續章節的失速、阻力與性能計算，都以這些觀念為基礎。"
          ]
        },
        {
          "id": "atmosphere",
          "english": "Structure of the Atmosphere",
          "title": "大氣的組成與性質",
          "parent": null,
          "locator": "PHAK C 版 · 4-1",
          "printedPage": "4-1",
          "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=1",
          "paragraphs": [
            "大氣是包圍地球的氣體混合物，具有質量並受到重力作用。乾空氣按體積約含 78% 氮、21% 氧及少量其他氣體；實際空氣還包含變動的水氣。這些比例描述組成，不能和每單位體積內有多少空氣的密度混為一談。",
            "閱讀時要分開「氧氣占比」與「一定體積內的氧氣量」：大氣越稀薄，即使組成比例近似，單位體積中的分子數仍會下降。本章把重點放在空氣密度、壓力與性能的關係；不要用氧氣較重的單一描述推論日常飛行高度中的氣體完全分層。"
          ],
          "references": [
            {
              "title": "NASA：對流層的混合作用與大氣環境",
              "url": "https://science.nasa.gov/wp-content/uploads/2023/09/chap3.pdf",
              "checked": "2026-09-10"
            }
          ]
        },
        {
          "id": "fluid",
          "english": "Air is a Fluid",
          "title": "空氣也是流體",
          "parent": "atmosphere",
          "locator": "PHAK C 版 · 4-2",
          "printedPage": "4-2",
          "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=2",
          "paragraphs": [
            "Fluid 包括液體與氣體，不只指水或油。流體在剪力作用下會持續變形並流動，氣體還會膨脹以占據容器的可用空間；因此空氣能繞過機翼，卻同時對表面施加壓力與黏性剪力。",
            "低速問題常可近似把空氣視為密度變化很小的流體，但空氣本身仍具有可壓縮性。這個近似是為了處理特定條件，不代表密度永遠固定；討論高度變化、高溫或高速流動時，必須重新檢查假設。"
          ]
        },
        {
          "id": "viscosity",
          "english": "Viscosity",
          "title": "黏性：流層之間的動量傳遞",
          "parent": "fluid",
          "locator": "PHAK C 版 · 4-2",
          "printedPage": "4-2",
          "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=2",
          "paragraphs": [
            "黏性描述流體抵抗相鄰流層相對滑動的特性，會使不同速度的流層互相影響。原文以油和水的流動作比喻；空氣雖然容易流動，黏性仍非零，靠近翼面時的黏性效應尤其重要。",
            "不要把黏性和密度當成同一個量：密度是單位體積的質量，黏性則關係到速度差造成的剪力。自編例：知道某流體更重，並不足以判定它流動時的內部阻力更大；兩者必須分別辨識。"
          ]
        },
        {
          "id": "friction",
          "english": "Friction",
          "title": "表面摩擦與邊界層",
          "parent": "fluid",
          "locator": "PHAK C 版 · 4-2",
          "printedPage": "4-2",
          "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=2",
          "paragraphs": [
            "在通常的黏性流動模型中，貼近固體表面的空氣相對表面速度趨近零，往外才逐漸接近外部流速。這個速度明顯受表面影響的薄區域稱為邊界層，不只是貼住翼面的單一層分子；速度差形成壁面剪力與摩擦阻力。",
            "表面粗糙、污染及流動狀態會影響邊界層發展，但即使表面非常光滑，也不代表摩擦完全消失。自編例：機翼外觀平整仍有黏性效應；而翼面異常也可能改變流動分離，影響不一定只是多一點表面摩擦。"
          ]
        },
        {
          "id": "pressure",
          "english": "Pressure",
          "title": "壓力：每單位面積的正向作用力",
          "parent": "fluid",
          "locator": "PHAK C 版 · 4-3",
          "printedPage": "4-3",
          "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=3",
          "paragraphs": [
            "壓力是單位面積上的正向力，常見單位有 Pa、hPa、psi 或 inHg；同一壓力作用在不同面積上，總力會不同。壓力與沿表面方向的剪力要分開，計算物體受力時還須考慮每一小片表面的方向。",
            "在同一位置，靜止流體的壓力向各方向作用；這不表示整個物體各處必然有相同壓力。高度差或流動都可能造成壓力分布差異，將各處作用力按方向加總，才能判斷淨力，不能只挑一個測點代表整片機翼。"
          ]
        },
        {
          "id": "atmospheric-pressure",
          "english": "Atmospheric Pressure",
          "title": "大氣壓力與標準大氣",
          "parent": "atmosphere",
          "locator": "PHAK C 版 · 4-3",
          "printedPage": "4-3",
          "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=3",
          "paragraphs": [
            "大氣壓力與上方空氣的重量相關，一般隨高度增加而下降，也隨天氣、時間及位置改變。ISA 提供共同參考：海平面溫度 15°C、壓力約 1013.25 hPa（29.92 inHg）；這是比較性能與校準的模型，不是每天實際天氣的承諾。",
            "原書用每千呎約下降 2°C 描述標準對流層溫度變化，並提供壓力對照表。氣壓隨高度的變化不是固定直線，不能把低空的每千呎約 1 inHg 粗估延伸到所有高度；使用性能資料時，應依指定的壓力與溫度輸入。"
          ]
        },
        {
          "id": "pressure-altitude",
          "english": "Pressure Altitude",
          "title": "壓力高度：把氣壓換成標準高度",
          "parent": "atmosphere",
          "locator": "PHAK C 版 · 4-4",
          "printedPage": "4-4",
          "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=4",
          "paragraphs": [
            "壓力高度是當地靜壓在標準大氣中對應的高度。把高度表設定為 29.92 inHg／約 1013.25 hPa 時，理想指示就是壓力高度；它使用共同壓力基準，而不是直接量測飛機到海面或地面的幾何距離。",
            "同一座機場在不同氣壓下可以有不同壓力高度，標高本身則沒有改變。自編例：氣壓下降而機場位置不變，標準大氣會把該氣壓對應到更高的位置。這個量可供性能資料使用，但不要把計算示例理解為任意改動飛行中的高度表設定程序。"
          ]
        },
        {
          "id": "density-altitude",
          "english": "Density Altitude",
          "title": "密度高度：把空氣密度換成標準高度",
          "parent": "atmosphere",
          "locator": "PHAK C 版 · 4-4",
          "printedPage": "4-4",
          "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=4",
          "paragraphs": [
            "密度高度是當時空氣密度在標準大氣中所對應的高度。密度越低，等效高度越高；常見方法先求壓力高度，再修正非標準溫度。它描述性能環境，不能由高度表直接讀出，也不是飛機的離地高度。",
            "在相同真空速、翼面積與升力係數下，密度降低會使升力減少；若要支撐相同重量，就需調整相應條件。稀薄空氣亦影響螺旋槳與引擎能力，程度依系統而異。實際起飛與爬升性能仍需查機型圖表，不能把「像在更高處」當成所有參數都完全相同。"
          ],
          "points": [
            "同一機場：氣壓近似不變而溫度升高時，壓力高度近似不變，密度高度升高。",
            "標準溫度條件下：常用乾空氣模型的壓力高度與密度高度相等。",
            "圖表輸入：若手冊已要求壓力高度及溫度，不要擅自改填密度高度而重複修正。"
          ]
        },
        {
          "id": "density-pressure",
          "english": "Effect of Pressure on Density",
          "title": "壓力如何影響密度",
          "parent": "density-altitude",
          "locator": "PHAK C 版 · 4-4",
          "printedPage": "4-4",
          "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=4",
          "paragraphs": [
            "在溫度及氣體組成相同時，提高壓力會增加單位體積中的質量，因此密度與絕對壓力成正比。這裡的「其他條件相同」是結論的一部分；若壓縮同時讓溫度上升，就不能只用壓力倍數推算密度倍數。",
            "自編例：比較兩個溫度相同、成分相同但氣壓不同的空氣樣本，較低壓的樣本密度較低。航空性能的壓力輸入也須用正確定義，不能把已換算到海平面的高度表設定值直接當作高地機場的實際站壓。"
          ]
        },
        {
          "id": "density-temperature",
          "english": "Effect of Temperature on Density",
          "title": "溫度如何影響密度",
          "parent": "density-altitude",
          "locator": "PHAK C 版 · 4-4",
          "printedPage": "4-4",
          "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=4",
          "paragraphs": [
            "在壓力與組成相同時，空氣密度與絕對溫度成反比，溫度升高便會降低密度。絕對溫度應使用 Kelvin；不能說攝氏溫度從 10°C 變成 20°C，密度就減半，因為攝氏零點不是分子熱運動的零點。",
            "自編例：早晨與午後的機場標高相同，如果壓力近似不變而午後更熱，午後密度高度就較高。真實大氣中的溫度和壓力常同時變化，因此不能只因高空較冷就推論高空空氣一定比較密。"
          ]
        },
        {
          "id": "density-humidity",
          "english": "Effect of Humidity (Moisture) on Density",
          "title": "水氣如何影響密度",
          "parent": "density-altitude",
          "locator": "PHAK C 版 · 4-5",
          "printedPage": "4-5",
          "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=5",
          "paragraphs": [
            "在總壓力和溫度相同時，水氣比例增加會降低空氣密度，因為水分子的分子量小於乾空氣的平均值。這裡討論的是氣態水取代部分其他氣體，不是把可見水滴或雨水重量加進空氣的直覺模型。",
            "相對濕度是相對於該溫度下飽和狀態的比例，不是空氣中水氣的質量百分比；不同溫度即使相對濕度相同，水氣量仍可能不同。濕度會影響密度，但常用性能圖表的處理方式不同，應遵循手冊，不能自行套用固定起飛距離加成。"
          ]
        },
        {
          "id": "lift-theories",
          "english": "Theories in the Production of Lift",
          "title": "升力的壓力與動量觀點",
          "parent": null,
          "locator": "PHAK C 版 · 4-5",
          "printedPage": "4-5",
          "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=5",
          "paragraphs": [
            "升力是氣動合力中垂直於相對氣流的分量。機翼改變周圍流場，翼面各處的壓力作用形成合力，同一流場也呈現空氣動量的改變；這是描述同一個物理作用的不同方式，不是各算一次再把兩份升力相加。",
            "牛頓定律提供力與動量的關係，伯努利關係在適用條件下連結速度和壓力。定常平直水平飛行的簡化平衡中，升力與重量相等即可維持飛行；不必持續讓升力大於重量，轉彎或加速則要另外分析合力。"
          ],
          "references": [
            {
              "title": "NASA：Bernoulli and Newton — 壓力與動量的共同解釋",
              "url": "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/bernoulli-and-newton/",
              "checked": "2026-09-10"
            }
          ]
        },
        {
          "id": "newton",
          "english": "Newton’s Basic Laws of Motion",
          "title": "牛頓三大運動定律",
          "parent": "lift-theories",
          "locator": "PHAK C 版 · 4-5",
          "printedPage": "4-5",
          "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=5",
          "paragraphs": [
            "第一定律說明沒有淨外力時物體維持靜止或等速直線運動；第二定律把淨力與動量變化相連，定質量時可寫成 F = ma。加速度包括速度大小或方向的變化，因此定速轉彎仍需要非零合力。",
            "第三定律的作用力與反作用力作用在不同物體上。機翼對空氣施力、空氣對機翼施力，不能把它們放進同一張飛機受力圖互相抵消；同樣地，螺旋槳推動空氣向後，空氣對槳提供向前的作用力。"
          ],
          "points": [
            "第一定律：平衡的是同一物體上的外力，不是沒有任何力存在。",
            "第二定律：比較相同淨力時，質量越大，加速度越小；速度方向改變也算加速。",
            "第三定律：機翼作用於空氣的力與空氣作用於機翼的力是一對；升力與重量不是這一對。"
          ]
        },
        {
          "id": "bernoulli",
          "english": "Bernoulli’s Principle of Differential Pressure",
          "title": "伯努利原理與壓力差",
          "parent": "lift-theories",
          "locator": "PHAK C 版 · 4-6",
          "printedPage": "4-6",
          "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=6",
          "paragraphs": [
            "對穩定、可近似不可壓縮且黏性耗散可忽略的流動，沿同一流線可用 p + ½ρV² + ρgh 為常數來理解能量關係。同高度時，流速增加對應靜壓降低；不能在不同能量來源的任意兩股氣流之間直接套用這句話。",
            "文氏管在適用近似下以流通面積縮小、流速增加示範此關係，但機翼周圍沒有形成相同的封閉管壁。要預測翼面壓力，仍須知道正確流場；「上方路程長所以必須趕上」不是可用來決定流速的物理條件。"
          ],
          "references": [
            {
              "title": "NASA：Bernoulli and Newton — 壓力與動量的共同解釋",
              "url": "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/bernoulli-and-newton/",
              "checked": "2026-09-10"
            }
          ]
        },
        {
          "id": "airfoil",
          "english": "Airfoil Design",
          "title": "翼型幾何與設計取捨",
          "parent": null,
          "locator": "PHAK C 版 · 4-6",
          "printedPage": "4-6",
          "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=6",
          "paragraphs": [
            "翼型是機翼等部件的剖面形狀。前緣、後緣的連線是翼弦線，平均弧線描述上下表面中間的彎曲趨勢；厚度與彎度是不同幾何特性。迎角是翼弦與相對氣流之間的角度，不能直接拿機頭相對地平線的俯仰角代替。",
            "不同任務在升力、阻力、速度範圍及其他需求間取捨，沒有適合所有條件的單一最佳翼型。襟翼等裝置可改變翼型或有效面積以配合低速需求；「上凸下平」只是某些設計的外形，對稱翼型和薄板也能在適當條件下產生升力。"
          ]
        },
        {
          "id": "low-pressure",
          "english": "Low Pressure Above",
          "title": "上表面的低壓區",
          "parent": "airfoil",
          "locator": "PHAK C 版 · 4-7",
          "printedPage": "4-7",
          "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=7",
          "paragraphs": [
            "在許多產生正升力的流動狀態下，上表面外側氣流加速，靜壓相較自由流降低。低壓區沿翼弦並不均勻，位置與強度隨翼型、迎角及流動條件而變，不能用上表面的一個速度值代表全翼。",
            "上下分開的氣流沒有必須在後緣同時會合的規則；也不需要先指定一條較長路徑才能形成升力。自編練習：若某解釋無法說明對稱翼型在正迎角產生升力，就應重新檢查它對流場所做的假設。"
          ],
          "references": [
            {
              "title": "NASA：Bernoulli and Newton — 壓力與動量的共同解釋",
              "url": "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/bernoulli-and-newton/",
              "checked": "2026-09-10"
            }
          ],
          "currentNote": "原文 4-8 的壓差與下洗描述容易被讀成兩份升力。NASA 補充說明以完整壓力分布或流動動量變化皆可求得同一氣動力；本站採此方式講解，並排除「上下氣流必須等時抵達」與「機翼是半個文氏管」的假設。"
        },
        {
          "id": "high-pressure",
          "english": "High Pressure Below",
          "title": "下表面的壓力貢獻",
          "parent": "airfoil",
          "locator": "PHAK C 版 · 4-8",
          "printedPage": "4-8",
          "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=8",
          "paragraphs": [
            "典型正迎角流動中，下表面部分區域可能出現高於自由流的靜壓，提供升力貢獻；前緣附近的停滯區流速低、靜壓較高。但下表面不是在每種翼型及迎角下都整片維持正壓，必須看實際壓力分布。",
            "上下表面都參與氣流轉向與表面受力，不能把下表面專門歸給牛頓、上表面專門歸給伯努利。原書也提醒兩側升力占比不是固定值；背誦固定的上方百分比與下方百分比，會掩蓋飛行條件改變的影響。"
          ],
          "references": [
            {
              "title": "NASA：Bernoulli and Newton — 壓力與動量的共同解釋",
              "url": "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/bernoulli-and-newton/",
              "checked": "2026-09-10"
            }
          ]
        },
        {
          "id": "distribution",
          "english": "Pressure Distribution",
          "title": "壓力分布與壓力中心",
          "parent": "airfoil",
          "locator": "PHAK C 版 · 4-8",
          "printedPage": "4-8",
          "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=8",
          "paragraphs": [
            "壓力分布圖中的正負通常是相對自由流壓力而言，負值不代表絕對壓力小於零。各處壓力需乘上對應面積並考慮方向，才能加總成氣動力；壓力中心 CP 描述合力作用線的位置，不是簡單取幾個壓力數值的算術平均。",
            "原圖示範特定翼型在不同迎角下的 CP 移動，不能把其移動方向視為所有翼型及失速狀態的定律。CP 是氣動概念，重心 CG 由質量分布決定；即使位置接近，也不能互換，兩者相對關係會影響俯仰力矩。"
          ],
          "references": [
            {
              "title": "NASA：Bernoulli and Newton — 壓力與動量的共同解釋",
              "url": "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/bernoulli-and-newton/",
              "checked": "2026-09-10"
            }
          ]
        },
        {
          "id": "behavior",
          "english": "Airfoil Behavior",
          "title": "翼型行為：形狀與迎角共同作用",
          "parent": "airfoil",
          "locator": "PHAK C 版 · 4-8",
          "printedPage": "4-8",
          "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=8",
          "paragraphs": [
            "對稱翼型的上下表面形狀相同，仍可因相對氣流的入射角而形成不對稱流場和升力。這說明翼型外形與迎角需要一起考慮；同一翼型在不同迎角下，不會具有完全相同的壓力與流動分布。",
            "增加迎角在一定範圍內通常能增加升力係數，但不能無限制延伸，流動分離與失速會改變這個關係。自編練習：說明「翼弦如何對著氣流」與「飛機機頭朝哪裡」各自的基準，再到第五章連結臨界迎角與失速。"
          ]
        },
        {
          "id": "third-dimension",
          "english": "A Third Dimension",
          "title": "從二維翼型到三維機翼",
          "parent": null,
          "locator": "PHAK C 版 · 4-9",
          "printedPage": "4-9",
          "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=9",
          "paragraphs": [
            "真實機翼具有有限翼展，翼尖附近有上下表面壓力差造成的繞流，形成尾隨渦流及下洗。這些三維效應會改變機翼遇到的局部氣流方向與有效迎角，並與誘導阻力相連，因此不能把二維剖面的結果原封不動套到整片機翼。",
            "翼尖小翼和其他翼尖設計可改善流場、降低適當條件下的誘導阻力，但不會讓尾流或翼尖渦流完全消失。原書以堤防比喻阻隔繞流，學習時應理解為減弱或重新安排三維效應，而非安裝小翼後就沒有尾流。"
          ],
          "references": [
            {
              "title": "NASA：Winglets 的作用與限制",
              "url": "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/winglets/",
              "checked": "2026-09-10"
            }
          ]
        },
        {
          "id": "summary",
          "english": "Chapter Summary",
          "title": "全章統整與自我解釋",
          "parent": null,
          "locator": "PHAK C 版 · 4-9",
          "printedPage": "4-9",
          "source": "https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page=9",
          "paragraphs": [
            "本章串起兩條主線：壓力、溫度與水氣決定空氣密度，而翼型、迎角及周圍流動共同決定氣動力。壓力高度與密度高度協助描述環境，牛頓與伯努利觀點協助理解流動和受力，最後再加入有限翼展的三維效應。",
            "自編練習：同一機場午後升溫時，先說明哪些高度概念改變；再用對稱翼型說明為什麼不需要等時會合假設；最後解釋翼尖小翼為何可以減少某些阻力卻不會消除尾流。每題都回到本章小節和來源核對，而非只背答案。"
          ]
        }
      ],
      "confusions": [
        {
          "title": "迎角與俯仰姿態",
          "clarification": "迎角以相對風為基準，姿態以地平線為基準。",
          "example": "下降中也可能有較大的迎角。"
        },
        {
          "title": "密度高度與地面高度",
          "clarification": "密度高度描述空氣密度，不是離地距離。",
          "example": "炎熱天密度高度升高，機場本身並沒有升高。"
        },
        {
          "title": "氣壓、密度與高度",
          "clarification": "壓力與密度成正比需固定溫度及組成；壓力高度和密度高度不必相同。",
          "example": "同一氣壓下升溫，壓力高度不變但密度高度升高。"
        },
        {
          "title": "濕空氣是否比較重",
          "clarification": "同溫同總壓下，水氣比例增加使空氣密度降低；相對濕度也不是水氣質量百分比。",
          "example": "不能因霧滴看似有重量，就把氣態水增加的密度效果說反。"
        },
        {
          "title": "兩種觀點不是兩份升力",
          "clarification": "完整壓力分布與氣流動量變化描述同一受力；等時會合不是伯努利原理的要求。",
          "example": "不能先算壓差升力再額外加上相同氣流的下洗反作用力。"
        },
        {
          "title": "壓力中心與重心",
          "clarification": "CP 關係到氣動合力作用位置，CG 關係到質量分布。",
          "example": "迎角變化可改變壓力分布，不表示機內貨物因此移位。"
        },
        {
          "title": "翼尖小翼與尾流",
          "clarification": "翼尖小翼可改善流場及誘導阻力，不能完全消除渦流。",
          "example": "不能因前機裝有翼尖小翼就認為沒有尾流影響。"
        }
      ],
      "scenario": "自編案例：同一架飛機在同一機場，早晨與炎熱午後起飛。機場標高相同，但空氣密度可能不同，因此不能直接沿用早晨的性能判斷。",
      "question": "密度高度主要幫助理解什麼？",
      "options": [
        "機場跑道編號",
        "當時空氣密度對性能的影響",
        "飛機精確離地高度"
      ],
      "answer": 1,
      "explanation": "密度高度以標準大氣的等效高度表示空氣密度，性能仍應查機型資料。",
      "verified": true,
      "reader": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=88",
      "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=88",
      "detailMode": "outline",
      "checked": "2026-09-10",
      "coverageNote": "依 FAA-H-8083-25C 第四章的 22 個目錄小節逐節整理。保留英文原名、層級及印刷頁碼；移除貼上目錄中的頁尾 ix 與多餘符號。中文說明與案例由本站編寫，對升力及翼尖小翼的簡化描述另附 NASA 補充來源。"
    },
    {
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
            }
          ],
          "currentNote": "查閱 2026-09-10：本節依 FAA AIM 7-4 補充避讓情境。原書的約三分鐘敘述不作為尾流必然消失的保證；實際間隔、風及路徑須依適用情境判斷。"
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
          ]
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
          "currentNote": "原書以簡化 Vg 圖描述 VA 以下的保護，不能擴張為所有操縱與陣風組合皆不會損傷。FAA 補充資料明確提醒：快速、大幅交替輸入或多軸全幅輸入，即使低於機動速度仍可能造成結構損傷。實際以該機型 AFM／POH 為準。"
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
      "coverageNote": "依 FAA-H-8083-25C 第五章的 62 個目錄小節逐節整理，保留英文標題、父節與印刷頁碼。中文講解與算例為本站編寫，公式均需配合所列假設；尾流與機動速度的易誤解敘述另附 FAA 補充資料。"
    },
    {
      "id": "phak25c-6",
      "number": 6,
      "title": "飛行操縱",
      "english": "Flight Controls",
      "section": "第 6 章；印刷頁碼 6-1 起",
      "goal": "理解操縱面、配平及自動駕駛如何改變飛機反應。",
      "primer": "副翼主要控制滾轉，升降舵控制俯仰，方向舵控制偏航。名稱對應的是主要作用；真實飛機存在耦合，單一操縱可能伴隨其他軸的反應。",
      "terms": [
        "Aileron · 副翼",
        "Rudder · 方向舵",
        "Trim · 配平"
      ],
      "prompts": [
        "你能用自己的話解釋「主要操縱與三個軸」，並指出適用條件嗎？",
        "本章案例中，哪些資料或條件改變後，需要重新判斷？"
      ],
      "keyPoints": [
        "主要操縱與三個軸",
        "副翼不利偏航與協調",
        "襟翼、前緣裝置與擾流板",
        "配平與自動駕駛"
      ],
      "detailSections": [
        {
          "title": "主要操縱與三個軸",
          "locator": "Primary Flight Controls；6-2 起",
          "paragraphs": [
            "副翼主要控制滾轉，升降舵控制俯仰，方向舵控制偏航。名稱對應的是主要作用；真實飛機存在耦合，單一操縱可能伴隨其他軸的反應。",
            "操縱面產生氣動力矩，再改變姿態及飛行路徑。把「動了哪個面」「產生哪個力矩」「飛機如何回應」分開，有助理解操縱並非按鈕式的單一結果。"
          ]
        },
        {
          "title": "副翼不利偏航與協調",
          "locator": "Ailerons；Adverse Yaw",
          "paragraphs": [
            "副翼差動改變兩翼升力時，也可能帶來不同阻力，造成與預期轉彎方向相反的偏航趨勢。差動副翼、Frise 型副翼等設計及適當協調，都是理解這個問題的線索。",
            "方向舵並非在所有飛行情境中單獨「把飛機轉彎」。轉彎需要看升力方向與協調狀態；實際操縱量和時機應依飛機反應與教官指導。"
          ]
        },
        {
          "title": "襟翼、前緣裝置與擾流板",
          "locator": "Secondary Flight Controls；6-8～6-10",
          "paragraphs": [
            "襟翼改變機翼的升力與阻力特性，不同型式可能改變弧度、面積或流動。前緣裝置協助特定迎角下的流動；擾流板則破壞部分升力並增加阻力。",
            "放下裝置也會改變力矩及性能，不能簡化成「越多越安全」。使用構型、限制速度及相應性能，都應依適用 AFM／POH，而不是只看通用原理。"
          ]
        },
        {
          "title": "配平與自動駕駛",
          "locator": "Trim Tabs；Adjustable Stabilizer；Autopilot",
          "paragraphs": [
            "配平用來降低維持所需狀態的持續操縱力，不是取代建立正確姿態與速度。不同配平設計可能透過小翼面或可調水平尾翼達成，不能以外觀推定工作方式。",
            "自動駕駛也是透過控制系統執行命令，需要辨識模式、限制與解除方式。當系統行為不符預期，教材只能說明理解方向，實際程序要依核准資料和訓練。"
          ]
        },
        {
          "title": "案例：改變構型後為什麼還要調整",
          "locator": "本站自編案例；對照襟翼與配平",
          "paragraphs": [
            "自編案例：學員在模擬器改變襟翼後，發現原先操縱力與速度趨勢改變。先辨認構型導致的升力、阻力與力矩變化，再依訓練程序建立需要的狀態與配平。",
            "若只把配平當成直接命令速度的旋鈕，就會漏掉功率、姿態及構型之間的關係。練習目標是解釋反應，不是在教材中提供跨機型的固定操縱步驟。"
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
      "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=149"
    },
    {
      "id": "phak25c-7",
      "number": 7,
      "title": "航空器系統",
      "english": "Aircraft Systems",
      "section": "第 7 章；印刷頁碼 7-1 起",
      "goal": "用能量與流路理解動力、燃油、電氣及防冰系統。",
      "primer": "活塞引擎透過燃燒循環帶動軸，螺旋槳把軸功率轉成推進作用。固定槳距與可變槳距的反應不同；定速系統透過調整槳距控制轉速，但仍有工作範圍及限制。",
      "terms": [
        "Mixture · 混合比",
        "Magneto · 磁電機",
        "Anti-ice / Deice · 防冰／除冰"
      ],
      "prompts": [
        "你能用自己的話解釋「活塞引擎、螺旋槳與渦輪」，並指出適用條件嗎？",
        "本章案例中，哪些資料或條件改變後，需要重新判斷？"
      ],
      "keyPoints": [
        "活塞引擎、螺旋槳與渦輪",
        "進氣、混合比與燃燒異常",
        "燃油、潤滑、冷卻與電氣",
        "液壓、增壓、氧氣與結冰防護"
      ],
      "detailSections": [
        {
          "title": "活塞引擎、螺旋槳與渦輪",
          "locator": "Powerplant；7-1 起；Turbine Engines；7-20 起",
          "paragraphs": [
            "活塞引擎透過燃燒循環帶動軸，螺旋槳把軸功率轉成推進作用。固定槳距與可變槳距的反應不同；定速系統透過調整槳距控制轉速，但仍有工作範圍及限制。",
            "渦輪系統包含壓縮、燃燒與膨脹過程，依設計可輸出噴流推力或軸功率。讀儀表時要知道顯示的是轉速、扭矩、溫度還是壓力比，不能跨機型直接比較相同數字。"
          ]
        },
        {
          "title": "進氣、混合比與燃燒異常",
          "locator": "Induction Systems；7-7 起；Combustion；7-18 起",
          "paragraphs": [
            "化油器內壓力降低與燃油汽化會造成降溫，因此外氣高於冰點也可能形成化油器冰。燃油噴射避免某些化油器問題，但不表示整個進氣系統完全不會結冰。",
            "爆震是未燃混合氣異常劇烈燃燒，早燃則是預定點火前已被高溫來源點燃。兩者不同，也可能相互影響；辨識概念後，處置和混合比設定仍需按機型程序。"
          ]
        },
        {
          "title": "燃油、潤滑、冷卻與電氣",
          "locator": "Fuel Systems；7-25 起；Oil Systems；Electrical System",
          "paragraphs": [
            "燃油系統涉及油箱、通氣、選擇、供油與污染檢查；潤滑和冷卻協助控制摩擦與熱。理解一個系統時，先畫來源、流路、控制點、指示與失效後影響。",
            "傳統磁電機點火可獨立於主電氣系統工作，但不能推廣到所有電子控制引擎。電瓶、發電機與匯流排的角色也不同；看到電氣故障不應未核對設計就直接判定引擎一定停止或一定不受影響。"
          ]
        },
        {
          "title": "液壓、增壓、氧氣與結冰防護",
          "locator": "Hydraulic Systems；Pressurized Aircraft；Oxygen Systems；Anti-Ice and Deice",
          "paragraphs": [
            "液壓可驅動起落架、煞車等裝置；增壓與氧氣系統處理不同的座艙環境需求。設備存在不等於沒有高度、時間、供給量或使用條件限制。",
            "防冰以預防積冰為目的，除冰以移除已形成的冰為目的。具備某項裝置不等於航空器獲准進入所有結冰條件；核准範圍、限制與程序需回查實機文件。"
          ]
        },
        {
          "title": "案例：外氣不冷也要理解化油器冰",
          "locator": "本站自編案例；對照 Carburetor Icing",
          "paragraphs": [
            "自編案例：學員以為外氣 15°C 就不可能出現化油器冰。回到流路思考，文氏管壓降與燃油汽化可能使內部比外氣更冷，因此只看外氣是否低於 0°C 不足以判斷。",
            "若實際飛行出現動力異常，應依機型核准程序處理。本例只檢查成因理解，不提供一套可適用所有引擎的故障排除順序。"
          ]
        }
      ],
      "confusions": [
        {
          "title": "爆震與早燃",
          "clarification": "前者涉及異常燃燒，後者涉及過早點燃。",
          "example": "不能把所有高溫現象都叫早燃。"
        },
        {
          "title": "防冰與進入結冰核准",
          "clarification": "有裝置不等於所有結冰情境都可飛。",
          "example": "仍需查航空器限制與核准範圍。"
        }
      ],
      "scenario": "自編案例：學員以為外氣 15°C 就不可能出現化油器冰。回到流路思考，文氏管壓降與燃油汽化可能使內部比外氣更冷，因此只看外氣是否低於 0°C 不足以判斷。",
      "question": "外氣高於冰點仍可能化油器結冰的原因是？",
      "options": [
        "跑道太長",
        "壓降與燃油汽化使內部降溫",
        "只有油箱外皮降溫"
      ],
      "answer": 1,
      "explanation": "內部降溫可使濕氣結冰，外氣是否低於冰點不是唯一判斷條件。",
      "verified": true,
      "reader": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=161",
      "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=161"
    },
    {
      "id": "phak25c-8",
      "number": 8,
      "title": "飛行儀表",
      "english": "Flight Instruments",
      "section": "第 8 章；印刷頁碼 8-1 起",
      "goal": "從感測來源理解讀值、誤差與故障交叉檢查。",
      "primer": "空速表比較總壓與靜壓，高度表主要使用靜壓，升降速度表利用靜壓變化。它們雖顯示不同量，可能共享同一資訊來源，因此多個儀表同時異常不一定是多個獨立故障。",
      "terms": [
        "Pitot-static · 皮托靜壓",
        "AHRS · 姿態航向參考",
        "ADC · 大氣資料電腦"
      ],
      "prompts": [
        "你能用自己的話解釋「先追感測來源，再看顯示」，並指出適用條件嗎？",
        "本章案例中，哪些資料或條件改變後，需要重新判斷？"
      ],
      "keyPoints": [
        "先追感測來源，再看顯示",
        "IAS、CAS、TAS 與 GS",
        "堵塞故障取決於堵在哪裡",
        "陀螺、磁羅盤與電子資料"
      ],
      "detailSections": [
        {
          "title": "先追感測來源，再看顯示",
          "locator": "Pitot-Static Flight Instruments；8-1 起",
          "paragraphs": [
            "空速表比較總壓與靜壓，高度表主要使用靜壓，升降速度表利用靜壓變化。它們雖顯示不同量，可能共享同一資訊來源，因此多個儀表同時異常不一定是多個獨立故障。",
            "電子顯示也需要感測器與計算單元。螢幕看起來不同，不代表背後資料獨立；交叉檢查應確認來源是否共用，而不只是數有幾個畫面。"
          ]
        },
        {
          "title": "IAS、CAS、TAS 與 GS",
          "locator": "Airspeed Indicator；8-8 起",
          "paragraphs": [
            "IAS 是指示空速；CAS 修正儀表與位置誤差；TAS 描述相對空氣的真實速度；GS 則相對地面。從空速換到地速需要考慮風，不能只把名稱當成同一速度的不同單位。",
            "自編例：相同 TAS 遇逆風時地速下降，飛同一地面距離需要更久。GPS 的地速不能直接取代機型所要求的指示空速限制。"
          ]
        },
        {
          "title": "堵塞故障取決於堵在哪裡",
          "locator": "Blockage of the Pitot-Static System；8-10～8-11",
          "paragraphs": [
            "若皮托入口堵住但排水孔仍通，空速表可能趨近零；若入口與排水孔都封住而靜壓正常，困住的壓力會使讀值隨高度變化，呈現類似高度表的反應。描述故障時必須交代這些條件。",
            "若靜壓來源堵塞，高度表可能停留在堵塞時讀值，升降速度指示也受影響。實際備用來源及程序因機型不同，不能僅靠通用故障故事決定操作。"
          ]
        },
        {
          "title": "陀螺、磁羅盤與電子資料",
          "locator": "Gyroscopic Flight Instruments；Compass Systems；Electronic Flight Display",
          "paragraphs": [
            "傳統陀螺儀表利用陀螺特性，磁羅盤受到地磁及航空器磁場影響；轉彎與加減速也可能產生誤差。電子系統則融合感測與計算，同樣需要理解資料有效性及限制。",
            "姿態、航向和位置是不同資訊。看到航向正常不代表姿態來源必然正常；警示、失效旗標與其他獨立資訊，應一起用來理解顯示是否可信。"
          ]
        },
        {
          "title": "案例：兩個螢幕是否真的互相驗證",
          "locator": "本站自編案例；對照 Electronic Flight Display",
          "paragraphs": [
            "自編案例：兩個顯示器的空速完全相同，學員便認為空速一定正確。但若兩者共用同一個大氣資料來源，來源錯誤可能同時出現在兩個畫面。",
            "先查系統架構與來源切換，再依核准程序進行交叉檢查。概念上要分清「顯示器有兩個」與「獨立量測有兩套」。"
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
      "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=203"
    },
    {
      "id": "phak25c-9",
      "number": 9,
      "title": "飛行手冊與相關文件",
      "english": "Flight Manuals and Other Documents",
      "section": "第 9 章；印刷頁碼 9-1 起",
      "goal": "學會定位機型限制、程序、性能與適航資料。",
      "primer": "AFM／POH 涉及特定航空器的程序、限制與資料。先確認機型、序號適用範圍、修訂及裝備狀態，再使用裡面的內容；相似型號的手冊不能自動替代。",
      "terms": [
        "AFM · 飛行手冊",
        "POH · 操作手冊",
        "AD · 適航指令"
      ],
      "prompts": [
        "你能用自己的話解釋「文件的適用性比名稱更重要」，並指出適用條件嗎？",
        "本章案例中，哪些資料或條件改變後，需要重新判斷？"
      ],
      "keyPoints": [
        "文件的適用性比名稱更重要",
        "用章節快速找對問題",
        "補充文件與裝備變更",
        "維修、檢查與 AD 的角色"
      ],
      "detailSections": [
        {
          "title": "文件的適用性比名稱更重要",
          "locator": "Introduction；9-1～9-2",
          "paragraphs": [
            "AFM／POH 涉及特定航空器的程序、限制與資料。先確認機型、序號適用範圍、修訂及裝備狀態，再使用裡面的內容；相似型號的手冊不能自動替代。",
            "POH 與 AFM 的關係依文件而異，部分 POH 同時具有核准飛行手冊身分。閱讀時看核准與適用說明，避免只因封面名稱就判斷所有頁面具有相同地位。"
          ]
        },
        {
          "title": "用章節快速找對問題",
          "locator": "Limitations；Emergency Procedures；Normal Procedures；9-2～9-4",
          "paragraphs": [
            "限制章回答必須遵守的操作邊界，程序章處理正常與緊急情境，性能章提供在指定條件下的計算資料。先辨識問題類型，可以降低翻錯資料的機會。",
            "自編例：想知道襟翼限制速度，應查限制；想計算起飛距離，應查性能與相關條件。不要把一張性能圖的示例速度當成全機操作限制。"
          ]
        },
        {
          "title": "補充文件與裝備變更",
          "locator": "Supplements；Weight and Balance/Equipment List",
          "paragraphs": [
            "裝備或改裝可能帶來補充手冊與新的限制。重量平衡資料也需要反映目前航空器狀態，不能只拿最早出廠的一份空重數字永久使用。",
            "學習時建立主手冊、補充資料、設備清單與重量平衡之間的連結。若文件互相看似矛盾，先核對版本與適用範圍，而不是挑自己偏好的數值。"
          ]
        },
        {
          "title": "維修、檢查與 AD 的角色",
          "locator": "Aircraft Documents；Maintenance；Airworthiness Directives；9-5 起",
          "paragraphs": [
            "文件與紀錄協助確認航空器是否符合適用要求。AD 涉及需要處理的適航問題，其適用機型、序號、條件與符合方式應逐項核對，不是只看標題。",
            "PHAK 提供制度理解；檢查間隔、維修資格與具體義務應查現行規定和正式指令。教材不以概略說明替代實際適航判定。"
          ]
        },
        {
          "title": "案例：同型飛機也可能資料不同",
          "locator": "本站自編案例；對照 Supplements",
          "paragraphs": [
            "自編案例：兩架外觀相同的訓練機，其中一架裝了不同設備並附有補充手冊。直接把另一架的資料套上，可能漏掉重量、程序或限制差異。",
            "先對照航空器身分、裝備與適用修訂，再找需要的限制和計算表。讀完本章應能說出資料為什麼適用，而不只是能找到一張圖。"
          ]
        }
      ],
      "confusions": [
        {
          "title": "示例與核准限制",
          "clarification": "教學例題不是航空器限制。",
          "example": "PHAK 例題數值不能直接用於你的訓練機。"
        },
        {
          "title": "同型號與同配置",
          "clarification": "設備及修訂仍可能不同。",
          "example": "補充手冊可能改變適用程序。"
        }
      ],
      "scenario": "自編案例：兩架外觀相同的訓練機，其中一架裝了不同設備並附有補充手冊。直接把另一架的資料套上，可能漏掉重量、程序或限制差異。",
      "question": "使用性能表之前最先應核對什麼？",
      "options": [
        "表格是否彩色",
        "機型、配置與文件適用版本",
        "網路下載次數"
      ],
      "answer": 1,
      "explanation": "資料必須對應實際航空器及條件，才能進行後續計算。",
      "verified": true,
      "reader": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=231",
      "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=231"
    },
    {
      "id": "phak25c-10",
      "number": 10,
      "title": "重量與平衡",
      "english": "Weight and Balance",
      "section": "第 10 章；印刷頁碼 10-1 起",
      "goal": "能計算重心，並理解重量、分布與飛行中的變化。",
      "primer": "總重量影響所需升力與性能，重心位置則影響力矩平衡、穩定性與操縱能力。兩者需要同時符合適用範圍；總重低於上限，不代表任何座位與行李配置都可用。",
      "terms": [
        "Datum · 基準面",
        "Arm · 力臂",
        "Moment · 力矩",
        "CG · 重心"
      ],
      "prompts": [
        "你能用自己的話解釋「重量合格不等於重心合格」，並指出適用條件嗎？",
        "本章案例中，哪些資料或條件改變後，需要重新判斷？"
      ],
      "keyPoints": [
        "重量合格不等於重心合格",
        "基準面、力臂與力矩",
        "燃油消耗與移動載重",
        "計算完還要對照包線"
      ],
      "detailSections": [
        {
          "title": "重量合格不等於重心合格",
          "locator": "Weight Control；Balance, Stability, and Center of Gravity；10-1 起",
          "paragraphs": [
            "總重量影響所需升力與性能，重心位置則影響力矩平衡、穩定性與操縱能力。兩者需要同時符合適用範圍；總重低於上限，不代表任何座位與行李配置都可用。",
            "前重心可能增加操縱需求，後重心可能降低穩定性並影響失速回復能力。具體限制依機型核准包線，不能把一般趨勢當成自行擴大範圍的理由。"
          ]
        },
        {
          "title": "基準面、力臂與力矩",
          "locator": "Terms and Definitions；Principles of Weight and Balance Computations；10-4～10-6",
          "paragraphs": [
            "基準面由製造商定義，力臂是相對它的位置，力矩＝重量×力臂。各項力矩相加後，重心位置＝總力矩÷總重量；負力臂與力矩縮放指數都需依文件處理。",
            "必須維持一致單位，例如 lb 與 in 對應 lb·in。若表格使用 moment/1000，應確認是否需還原或全程沿用同一縮放，避免差三個數量級。"
          ]
        },
        {
          "title": "燃油消耗與移動載重",
          "locator": "Determining Loaded Weight and CG；Shifting, Adding, and Removing Weight",
          "paragraphs": [
            "燃油燃燒會改變重量及力矩，重心如何移動取決於油箱位置與消耗方式。因此起飛時合格，不代表飛行中或降落時都自動合格。",
            "同一件行李向後移動時，總重量不變但力矩改變；新增或移除載重則兩者都變。把「移動」與「增減」分清楚，可以避免誤用分母。"
          ]
        },
        {
          "title": "計算完還要對照包線",
          "locator": "Weight and Balance Restrictions；10-6 起",
          "paragraphs": [
            "算出重心不是終點，需把總重量與重心配對，放到適用包線或表格中檢查。還可能有行李艙、座位、地板載荷及其他限制，不能只看一個總值。",
            "實務資料應使用目前空重與裝備紀錄，燃油重量換算也要依適用資料。圖表讀取、四捨五入與單位均應清楚記錄，讓結果可被覆核。"
          ]
        },
        {
          "title": "案例：一個簡化的重心計算",
          "locator": "本站自編算例；對照 Computational Method",
          "paragraphs": [
            "自編算例：把兩項重量簡化為 1,000 lb 在 40 in、200 lb 在 70 in，總力矩為 40,000＋14,000＝54,000 lb·in，總重量 1,200 lb，重心為 45 in。",
            "這不是完整航空器載重表，沒有提供任何核准包線，因此只能得到數學位置，不能宣稱可飛。若把 200 lb 移到更後方，總重不變而重心向後移。"
          ]
        }
      ],
      "confusions": [
        {
          "title": "總重量與重心",
          "clarification": "前者是重量總和，後者是分布結果。",
          "example": "同樣 1,200 lb 可以有不同重心。"
        },
        {
          "title": "力臂與力矩",
          "clarification": "力臂是位置，力矩還包括重量。",
          "example": "同位置放兩倍重量，力矩也加倍。"
        }
      ],
      "scenario": "自編算例：把兩項重量簡化為 1,000 lb 在 40 in、200 lb 在 70 in，總力矩為 40,000＋14,000＝54,000 lb·in，總重量 1,200 lb，重心為 45 in。",
      "question": "上述總力矩 54,000 lb·in、總重 1,200 lb 的重心為？",
      "options": [
        "45 in",
        "70 in",
        "1,200 in"
      ],
      "answer": 0,
      "explanation": "54,000÷1,200＝45 in；仍須另查航空器包線，算例不能判定適航。",
      "verified": true,
      "reader": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=245",
      "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=245"
    },
    {
      "id": "phak25c-11",
      "number": 11,
      "title": "航空器性能",
      "english": "Aircraft Performance",
      "section": "第 11 章；印刷頁碼 11-1 起",
      "goal": "理解性能輸入、圖表條件與起飛爬升的差別。",
      "primer": "性能數字對應重量、壓力高度、溫度、風、跑道與構型等條件。若忽略註記，計算可能很精確卻不適用；先確認資料輸入，比急著找答案更重要。",
      "terms": [
        "Vx · 最佳爬升角速度",
        "Vy · 最佳爬升率速度",
        "Interpolation · 內插"
      ],
      "prompts": [
        "你能用自己的話解釋「性能圖背後有條件」，並指出適用條件嗎？",
        "本章案例中，哪些資料或條件改變後，需要重新判斷？"
      ],
      "keyPoints": [
        "性能圖背後有條件",
        "密度高度如何影響性能",
        "爬升角與爬升率回答不同問題",
        "起飛、落地與低速功率需求"
      ],
      "detailSections": [
        {
          "title": "性能圖背後有條件",
          "locator": "Importance of Performance Data；Performance Charts",
          "paragraphs": [
            "性能數字對應重量、壓力高度、溫度、風、跑道與構型等條件。若忽略註記，計算可能很精確卻不適用；先確認資料輸入，比急著找答案更重要。",
            "自編例：圖表假設特定跑道狀態和技術，不能直接保證另一種表面也達到同樣距離。應依核准修正與適當規劃程序處理，不能自行外推到圖表之外。"
          ]
        },
        {
          "title": "密度高度如何影響性能",
          "locator": "Density Altitude；11-3～11-5",
          "paragraphs": [
            "空氣稀薄會影響機翼、螺旋槳與引擎的表現，程度依設計而異。同一指示空速對應的真空速可能較高，地面滑跑和爬升表現也需要重新計算。",
            "因此「同一跑道以前飛過」不足以取代當天計算。重量、溫度、壓力與風一起改變時，不能只記得其中一項比較有利便忽略其餘項目。"
          ]
        },
        {
          "title": "爬升角與爬升率回答不同問題",
          "locator": "Angle of Climb；Rate of Climb；11-7",
          "paragraphs": [
            "爬升角關注水平距離內取得多少高度；爬升率關注每單位時間取得多少高度。Vx 與 Vy 分別對應這兩種最大化目標，實際數值隨機型與條件改變。",
            "風會改變對地進展，因而影響對地爬升梯度；ft/min 與 ft/NM 也不能混用。障礙物問題需要距離與高度的關係，不能只看到較大爬升率就宣布能越障。"
          ]
        },
        {
          "title": "起飛、落地與低速功率需求",
          "locator": "Takeoff and Landing Performance；Region of Reversed Command",
          "paragraphs": [
            "地面滑跑距離與越過指定障礙高度的總距離是不同數字。落地圖也有進場條件、構型和技術假設，不能把跑道長度只和某個較小的地面距離比較。",
            "在反操縱區域，降低速度可能需要更多功率來維持相同飛行狀態。這有助理解低速時功率與阻力的關係，但不能取代機型程序與飛行訓練。"
          ]
        },
        {
          "title": "案例：內插只能在適用範圍內",
          "locator": "本站自編算例；對照 Interpolation",
          "paragraphs": [
            "自編算例：假設同一張教學表在 20°C 為 1,000 ft、30°C 為 1,200 ft，其他條件相同且允許線性內插，25°C 得 1,100 ft。",
            "這僅示範中間值算法，不是 FAA 公布的某機型性能。若溫度超過圖表範圍或跑道條件不同，不能照比例延伸並保證結果。"
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
      "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=257"
    },
    {
      "id": "phak25c-12",
      "number": 12,
      "title": "氣象原理",
      "english": "Weather Theory",
      "section": "第 12 章；印刷頁碼 12-1 起",
      "goal": "連結大氣運動、水氣、穩定度與飛行危害。",
      "primer": "壓力差提供氣流運動的驅動，地球自轉與地面摩擦等因素改變風向及速度。地形、障礙與對流又會造成局部差異，因此地面一個測站不能代表整段航路的風。",
      "terms": [
        "Dew point · 露點",
        "Stability · 穩定度",
        "Wind shear · 風切"
      ],
      "prompts": [
        "你能用自己的話解釋「壓力差驅動氣流，環境改變風」，並指出適用條件嗎？",
        "本章案例中，哪些資料或條件改變後，需要重新判斷？"
      ],
      "keyPoints": [
        "壓力差驅動氣流，環境改變風",
        "水氣、露點與凝結",
        "穩定度決定垂直擾動的反應",
        "鋒面、雷暴、結冰與風切"
      ],
      "detailSections": [
        {
          "title": "壓力差驅動氣流，環境改變風",
          "locator": "Atmospheric Circulation；Wind and Currents",
          "paragraphs": [
            "壓力差提供氣流運動的驅動，地球自轉與地面摩擦等因素改變風向及速度。地形、障礙與對流又會造成局部差異，因此地面一個測站不能代表整段航路的風。",
            "自編例：跑道附近測得的風與山谷內的風可能不同。看天氣時應把大尺度系統與局部地形一起理解，而不是只背高低壓符號。"
          ]
        },
        {
          "title": "水氣、露點與凝結",
          "locator": "Moisture and Temperature；12-13 起",
          "paragraphs": [
            "相對濕度描述在當時溫度下接近飽和的程度；露點提供空氣冷卻至飽和的線索。溫度與露點接近可提示凝結可能性增加，但仍需考慮水氣供給、混合及冷卻機制。",
            "雲、霧、露和霜有不同形成條件。簡化雲底估算法只能作概念練習，不能保證實際雲底，也不能取代觀測與預報。"
          ]
        },
        {
          "title": "穩定度決定垂直擾動的反應",
          "locator": "Atmospheric Stability；Inversion；12-12～12-13",
          "paragraphs": [
            "若一團空氣被抬升後傾向回到原位置，代表較穩定；若傾向持續離開，代表較不穩定。這與雲型、對流和亂流可能性相關，但不能單靠一種外觀判斷所有條件。",
            "逆溫常抑制垂直混合，可能伴隨霾或低層能見度問題。穩定並不等於對飛行完全沒有危害；低雲與差能見度同樣重要。"
          ]
        },
        {
          "title": "鋒面、雷暴、結冰與風切",
          "locator": "Fronts；Thunderstorms；12-18 起",
          "paragraphs": [
            "鋒面是不同氣團的交界，相關天氣依水氣、穩定度及抬升而變。雷暴可伴隨強烈垂直氣流、冰雹、結冰與風切，危害不只存在於最深顏色的降水核心。",
            "結冰會改變翼型與性能，風切則是風在短距離內明顯改變。地面天氣良好不代表航路或高度層沒有這些現象；應結合多種官方資訊及適用規劃程序。"
          ]
        },
        {
          "title": "案例：天空穩定也可能難以目視飛行",
          "locator": "本站自編案例；對照 Stability 與 Visibility",
          "paragraphs": [
            "自編案例：某地無明顯對流，但低層逆溫、霾和低雲使能見度差。若只把「沒有雷暴」當成天氣可接受，就漏掉了目視飛行所需的其他條件。",
            "先列出能見度、雲底、地形與航路資料，再評估飛行需求。這個案例強調多項天氣條件要一起看，而非用單一現象給出放行結論。"
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
      "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=285"
    },
    {
      "id": "phak25c-13",
      "number": 13,
      "title": "航空氣象服務與產品",
      "english": "Aviation Weather Services",
      "section": "第 13 章；印刷頁碼 13-1 起",
      "goal": "辨認觀測與預報，解讀時效、範圍及資料限制。",
      "primer": "METAR 提供測站觀測，TAF 提供機場區域預報，PIREP 提供機師在特定時地的觀察。它們的時間、空間與資料來源不同，應互相補充，而不是挑最樂觀的一個。",
      "terms": [
        "METAR · 機場觀測",
        "TAF · 機場預報",
        "PIREP · 機師天氣報告"
      ],
      "prompts": [
        "你能用自己的話解釋「先辨認產品回答什麼問題」，並指出適用條件嗎？",
        "本章案例中，哪些資料或條件改變後，需要重新判斷？"
      ],
      "keyPoints": [
        "先辨認產品回答什麼問題",
        "讀 METAR 先看身分與時間",
        "讀預報與警報要看有效範圍",
        "資料鏈天氣不是即時雷達"
      ],
      "detailSections": [
        {
          "title": "先辨認產品回答什麼問題",
          "locator": "Observations；Aviation Weather Reports；13-2 起",
          "paragraphs": [
            "METAR 提供測站觀測，TAF 提供機場區域預報，PIREP 提供機師在特定時地的觀察。它們的時間、空間與資料來源不同，應互相補充，而不是挑最樂觀的一個。",
            "PHAK 此版包含歷史服務名稱與介面說明。產品可用性、格式及服務入口可能變動；學習產品原理後，實際使用應回查 FAA 與官方氣象服務的現行說明。"
          ]
        },
        {
          "title": "讀 METAR 先看身分與時間",
          "locator": "Aviation Routine Weather Report (METAR)；13-6 起",
          "paragraphs": [
            "先確認站碼、觀測時間與報文類型，再讀風、能見度、天氣現象、雲層、溫度露點及高度表設定。順序有助於避免把過期或其他測站資料套到目的地。",
            "雲量和雲底並非同一資訊，能見度單位也要核對。閱讀縮寫時保留原始報文，不要只抄翻譯後的單一數字，才能回查是否漏掉變動或備註。"
          ]
        },
        {
          "title": "讀預報與警報要看有效範圍",
          "locator": "Terminal Aerodrome Forecasts；Inflight Weather Advisories",
          "paragraphs": [
            "TAF 的預報期間與變化群組需要一起讀；不同時段可能有不同條件。AIRMET、SIGMET 與對流相關資訊提供危害線索，其地理範圍、高度與時效不能省略。",
            "沒有某種警報不代表沿途每一點都安全；預報也不是保證。規劃時把出發、航路、目的地及備選方案串起來，並在資訊更新後重新檢視。"
          ]
        },
        {
          "title": "資料鏈天氣不是即時雷達",
          "locator": "Weather Products Age and Expiration；13-18 起",
          "paragraphs": [
            "資料從觀測、處理、傳送到顯示需要時間，畫面上的更新標記不一定等於所有觀測都在那一刻發生。多站合成及處理也會帶來差異。",
            "因此資料鏈降水圖適合支持較大範圍的天氣判斷，不應當作可精準穿越雷暴間隙的即時導引。產品限制與實際使用程序需一起理解。"
          ]
        },
        {
          "title": "案例：新收到不等於新觀測",
          "locator": "本站自編案例；對照 Weather Products Age",
          "paragraphs": [
            "自編案例：平板剛下載一張雷達圖，學員便稱它是「現在的天氣」。但下載時間、產品生成時間與原始觀測時間可能不同，且不同區域資料可能有不同年齡。",
            "先核對時間標記與產品說明，再結合其他觀測和預報。例題要檢查時效判讀，不提供依圖像穿越對流的操作建議。"
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
      "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=311"
    },
    {
      "id": "phak25c-14",
      "number": 14,
      "title": "機場運作",
      "english": "Airport Operations",
      "section": "第 14 章；印刷頁碼 14-1 起",
      "goal": "理解場面標誌、通信、交通與跑道侵入預防。",
      "primer": "航圖、Chart Supplement、NOTAM 與 ATIS 提供不同面向的資料。平面圖說明佈局，但臨時關閉、施工或服務變化需要另外確認；圖上的設施不代表當下全部可用。",
      "terms": [
        "Hold short · 等待位置前停止",
        "ATIS · 終端情報",
        "Wake turbulence · 尾流亂流"
      ],
      "prompts": [
        "你能用自己的話解釋「機場資訊不是只看一張平面圖」，並指出適用條件嗎？",
        "本章案例中，哪些資料或條件改變後，需要重新判斷？"
      ],
      "keyPoints": [
        "機場資訊不是只看一張平面圖",
        "標誌、標線與燈光一起判讀",
        "通信與交通模式",
        "尾流與目視防撞"
      ],
      "detailSections": [
        {
          "title": "機場資訊不是只看一張平面圖",
          "locator": "Sources for Airport Data；14-3 起",
          "paragraphs": [
            "航圖、Chart Supplement、NOTAM 與 ATIS 提供不同面向的資料。平面圖說明佈局，但臨時關閉、施工或服務變化需要另外確認；圖上的設施不代表當下全部可用。",
            "先建立目前位置、目的位置與預期路徑，再確認沿途交叉口和等待位置。這能降低忙著通信時失去位置感的可能性。"
          ]
        },
        {
          "title": "標誌、標線與燈光一起判讀",
          "locator": "Airport Markings and Signs；Airport Lighting",
          "paragraphs": [
            "跑道標誌、滑行道位置與方向標誌使用不同顏色與形式。等待位置標線包含實線和虛線，接近跑道時要辨認自己位於哪一側；具體進入或穿越仍需符合場站程序與所需許可。",
            "不要只憑一個箭頭猜測位置。把地圖、標誌、標線與實際方向交叉核對；若不確定，先在安全位置停止並澄清，而不是邊猜邊進入可能的跑道區域。"
          ]
        },
        {
          "title": "通信與交通模式",
          "locator": "Traffic Patterns；Radio Communications；14-19 起",
          "paragraphs": [
            "有塔台與無塔台機場的通信安排不同。頻率上的通報有助交通協調，但通報本身不會消除其他航空器，也不等於所有情境下已取得許可。",
            "理解指令時需辨認完整呼號、路徑與等待限制。回讀與執行不是兩件無關的事；若指令和眼前位置不一致，應及早確認，而不是靠印象補齊。"
          ]
        },
        {
          "title": "尾流與目視防撞",
          "locator": "Wake Turbulence；Collision Avoidance；14-26 起",
          "paragraphs": [
            "產生升力的航空器會形成尾流，渦流位置與移動受飛行路徑及風影響。不能只因看得到前機距離，就假定其尾流已不再影響自己。",
            "目視掃描也有視野、注意力與相對運動限制。交通顯示器和航管資訊能協助，但不代表所有目標都已顯示；需依飛行條件、程序及訓練持續建立情境認知。"
          ]
        },
        {
          "title": "案例：滑行到陌生交叉口",
          "locator": "本站自編案例；對照 Runway Incursion Avoidance",
          "paragraphs": [
            "自編案例：學員接近一個不熟悉的交叉口，發現標誌和記憶中的路徑不同。較合理的是在安全位置停下核對圖面與所需許可，並澄清疑問，而非沿著前機繼續走。",
            "追隨別架飛機不會自動取得相同的路徑或許可。本章學習成果是能說出自己在哪裡、要去哪裡及下一個限制點。"
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
      "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=335"
    },
    {
      "id": "phak25c-15",
      "number": 15,
      "title": "空域",
      "english": "Airspace",
      "section": "第 15 章；印刷頁碼 15-1 起",
      "goal": "建立美國空域分類、進入條件與查圖方法。",
      "primer": "本章描述美國空域體系，包括 A、B、C、D、E 與 G 類。分類與服務、通信、天氣及裝備要求相關，不能只背顏色就判斷是否能進入。",
      "terms": [
        "Controlled airspace · 管制空域",
        "MSL / AGL · 海平面／地面基準",
        "TFR · 臨時飛航限制"
      ],
      "prompts": [
        "你能用自己的話解釋「分類是起點，進入條件需一起看」，並指出適用條件嗎？",
        "本章案例中，哪些資料或條件改變後，需要重新判斷？"
      ],
      "keyPoints": [
        "分類是起點，進入條件需一起看",
        "高度基準與邊界",
        "天氣、通信與裝備是不同檢查項",
        "特殊使用空域與臨時限制"
      ],
      "detailSections": [
        {
          "title": "分類是起點，進入條件需一起看",
          "locator": "Controlled Airspace；Uncontrolled Airspace；15-2 起",
          "paragraphs": [
            "本章描述美國空域體系，包括 A、B、C、D、E 與 G 類。分類與服務、通信、天氣及裝備要求相關，不能只背顏色就判斷是否能進入。",
            "這是 FAA 教材，不直接代表世界各國相同字母下的實際安排。跨國使用時應回查當地 AIP 與適用規定；美國實際飛行也需使用現行航圖與規則。"
          ]
        },
        {
          "title": "高度基準與邊界",
          "locator": "Operating in the Various Types of Airspace；15-7 起",
          "paragraphs": [
            "MSL 是海平面基準，AGL 是相對當地地面。地形高度改變時，兩者差值也改變；讀空域上下限必須先看標示規則與基準。",
            "航圖上的數字可能經縮寫或使用特定單位，應依圖例解讀。不要把所有邊界想成以機場為中心的單一圓柱，實際形狀和分層需要逐區查看。"
          ]
        },
        {
          "title": "天氣、通信與裝備是不同檢查項",
          "locator": "Basic VFR Weather Minimums；Operating Rules and Pilot/Equipment Requirements",
          "paragraphs": [
            "天氣符合 VFR 條件，不等於通信或裝備條件也滿足。不同類別對進入安排可能不同，所需許可與雙向通信也不能混為同一概念。",
            "本教材不把 2023 年的表格當作永久有效的操作檢查單。學習時先建立檢查項目，再回查現行要求、航圖、NOTAM 與自身資格和設備。"
          ]
        },
        {
          "title": "特殊使用空域與臨時限制",
          "locator": "Special Use Airspace；Other Airspace Areas",
          "paragraphs": [
            "禁止區、限制區、軍事活動區等名稱有不同意義，不能全部當成同一種永久禁飛區。需要核對活動時間、範圍、狀態及適用進入要求。",
            "TFR 等臨時資訊可能不會單靠紙本航圖完整呈現。規劃後仍需更新動態資訊；曾經飛過的路線，不代表今天條件完全相同。"
          ]
        },
        {
          "title": "案例：位置相同，高度不同",
          "locator": "本站自編案例；對照高度與空域邊界",
          "paragraphs": [
            "自編案例：兩架飛機在相近地面位置、不同高度，可能落在不同空域層。先確認位置與高度基準，再讀各層邊界，才能查下一步適用條件。",
            "如果只說「在某機場旁邊」，資訊不足以判定。練習時把位置、高度、時段、飛行規則與設備列齊，再進行查證。"
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
      "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=376"
    },
    {
      "id": "phak25c-16",
      "number": 16,
      "title": "導航",
      "english": "Navigation",
      "section": "第 16 章；印刷頁碼 16-1 起",
      "goal": "把航向、航跡、風、時間與燃油計算連起來。",
      "primer": "航圖提供位置、地形、空域與導航資訊，使用前先確認種類、比例尺及有效性。真北、磁北與羅盤指示的基準不同，換算時應保留方向與修正的順序。",
      "terms": [
        "Heading · 航向",
        "Track · 航跡",
        "Variation / Deviation · 磁差／羅差"
      ],
      "prompts": [
        "你能用自己的話解釋「地圖、方向與北方基準」，並指出適用條件嗎？",
        "本章案例中，哪些資料或條件改變後，需要重新判斷？"
      ],
      "keyPoints": [
        "地圖、方向與北方基準",
        "風三角連接空速與地速",
        "時間、距離與燃油",
        "目視、推算與電子導航互相驗證"
      ],
      "detailSections": [
        {
          "title": "地圖、方向與北方基準",
          "locator": "Aeronautical Charts；Latitude and Longitude；16-2 起",
          "paragraphs": [
            "航圖提供位置、地形、空域與導航資訊，使用前先確認種類、比例尺及有效性。真北、磁北與羅盤指示的基準不同，換算時應保留方向與修正的順序。",
            "磁差來自真北與磁北差異，羅差來自航空器磁場等對羅盤的影響。不能把兩者合成一個永遠固定的修正值；羅差還可能隨航向與裝備狀態改變。"
          ]
        },
        {
          "title": "風三角連接空速與地速",
          "locator": "Effect of Wind；Wind Triangle；16-8、16-13 起",
          "paragraphs": [
            "航向是機頭方向，航跡是對地移動路徑。空氣相對地面也在移動，因此真空速向量加上風向量得到地速向量；有側風時，想維持航跡通常需要修正航向。",
            "風向資料通常表示風從哪裡來，畫向量時要避免把來源方向直接當成吹往方向。先定義基準與單位，再解風三角，比只背左右加減更可靠。"
          ]
        },
        {
          "title": "時間、距離與燃油",
          "locator": "Basic Calculations；16-11 起",
          "paragraphs": [
            "時間＝距離÷地速；若距離用 NM、地速用 kt，時間得到小時。燃油消耗可用耗油率乘時間估算，但完整規劃還需涵蓋各飛行階段與適用餘油要求。",
            "逆風降低地速時，相同地面距離需要較久，燃油需求也可能增加。不能只按真空速計算對地到達時間，也不能把算例中得到的航段用油當成出發所需全部燃油。"
          ]
        },
        {
          "title": "目視、推算與電子導航互相驗證",
          "locator": "Pilotage；Dead Reckoning；Ground-Based Navigation；GPS",
          "paragraphs": [
            "目視導航利用地標，推算導航依速度、時間與方向推估位置，VOR 等地面設備和 GPS 提供其他定位資訊。各自都有覆蓋、誤差、資料庫或使用限制。",
            "VOR radial 是由台站向外的方位，與自己飛向台站的航向不是同一量；DME 測得斜距，靠近台站且高度較大時不能直接當水平距離。GPS 也需要確認航點、模式與資料有效性。"
          ]
        },
        {
          "title": "案例：逆風下的時間與用油",
          "locator": "本站自編算例；對照 Basic Calculations",
          "paragraphs": [
            "自編算例：航段 90 NM、地速 90 kt，時間為 1 小時；假設該航段耗油率 8 US gal/h，航段用油為 8 US gal。若地速降為 60 kt，時間變 1.5 小時，同耗油率下為 12 US gal。",
            "例題尚未包含起動、滑行、爬升、備用或法定餘油，不能用來決定實際加油量。重點是風透過地速與時間影響需求，須重新計算。"
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
      "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=388"
    },
    {
      "id": "phak25c-17",
      "number": 17,
      "title": "航空醫學與人因",
      "english": "Aeromedical Factors",
      "section": "第 17 章；印刷頁碼 17-1 起",
      "goal": "理解生理限制、錯覺、疲勞與飛行前自我評估。",
      "primer": "身體、睡眠、壓力及藥物可能影響注意力與判斷。持有體檢資格不代表每一天都處於同樣狀態；飛行前仍需依適用程序評估當下狀況。",
      "terms": [
        "Hypoxia · 缺氧",
        "Spatial disorientation · 空間迷向",
        "Fatigue · 疲勞"
      ],
      "prompts": [
        "你能用自己的話解釋「身體狀態也是飛行條件」，並指出適用條件嗎？",
        "本章案例中，哪些資料或條件改變後，需要重新判斷？"
      ],
      "keyPoints": [
        "身體狀態也是飛行條件",
        "缺氧與過度換氣要分辨機制",
        "空間迷向與視覺錯覺",
        "疲勞、一氧化碳、視覺與其他因素"
      ],
      "detailSections": [
        {
          "title": "身體狀態也是飛行條件",
          "locator": "Health and Physiological Factors；17-3 起",
          "paragraphs": [
            "身體、睡眠、壓力及藥物可能影響注意力與判斷。持有體檢資格不代表每一天都處於同樣狀態；飛行前仍需依適用程序評估當下狀況。",
            "本章教的是航空生理概念，不提供個人診斷、服藥建議或適飛判定。具體健康疑問應交由合適醫療人員與航空醫學檢查醫師確認。"
          ]
        },
        {
          "title": "缺氧與過度換氣要分辨機制",
          "locator": "Hypoxia；Hyperventilation；17-3～17-5",
          "paragraphs": [
            "缺氧指組織可用氧不足，可能涉及吸入條件、血液攜氧、循環或組織利用等不同環節。高度增加時氧氣比例大致不變，但分壓下降會影響可用氧。",
            "過度換氣涉及通氣超過需要而使二氧化碳下降，部分感受可能和其他問題重疊。不能只憑一個症狀自行確診；實際異常需依訓練與航空器程序處理並尋求適當協助。"
          ]
        },
        {
          "title": "空間迷向與視覺錯覺",
          "locator": "Spatial Disorientation and Illusions；Optical Illusions；17-6 起",
          "paragraphs": [
            "身體感覺不一定能準確辨認飛機姿態。缺少外部參考、加速、轉彎與頭部動作可能使感覺與實際不一致；跑道寬度、坡度及地面特徵也可能影響視覺判斷。",
            "理解錯覺的目的，是知道何時感官可能不可靠，以及為何需要適當訓練與可信資訊。不要自行進行教材中的迷向示範；相關實作需要合格教官及安全安排。"
          ]
        },
        {
          "title": "疲勞、一氧化碳、視覺與其他因素",
          "locator": "Carbon Monoxide；Stress；Fatigue；Drugs；Vision in Flight",
          "paragraphs": [
            "疲勞可能影響反應與判斷，一氧化碳會妨礙攜氧，酒精、藥物與脫水等也可能影響表現。不同風險可同時存在，不能因自覺精神尚可便全部排除。",
            "夜間視覺和白天不同，暗適應、燈光與掃描方式都值得學習。潛水後飛行、補充氧氣及體檢要求涉及具體條件，應回查現行正式資料與醫療意見，不用本站摘要決定個人等待時間或治療。"
          ]
        },
        {
          "title": "案例：自覺能撐不等於狀態良好",
          "locator": "本站自編案例；對照 Fatigue 與決策",
          "paragraphs": [
            "自編案例：學員前一晚睡眠不足，又因行程壓力認為「喝咖啡就能照常」。先辨認疲勞與外在壓力可能共同影響判斷，與教官討論是否需要調整安排，而非把主觀意志當成能力證明。",
            "練習時可把已知狀態、未知影響與需要專業確認的事項寫出。本章不提供藉由某種飲料或藥物恢復適飛資格的方法。"
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
      "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=423"
    }
  ]
};
