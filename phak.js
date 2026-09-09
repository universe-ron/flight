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
      "section": "第 2 章；印刷頁碼 2-1 起",
      "goal": "將風險辨識、選項與持續評估連成決策流程。",
      "primer": "ADM 是在航空環境中有系統地判斷並選擇行動。飛行中的資料會變，原本合理的計畫也可能需要修改；重點是及早辨認變化，保留選項並檢查行動後的結果。",
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
        "決策不是一次性的起飛許可",
        "PAVE 把風險分成四個觀察方向",
        "3P 與 DECIDE 的用途",
        "態度、資源與自動化"
      ],
      "detailSections": [
        {
          "title": "決策不是一次性的起飛許可",
          "locator": "Introduction；The Decision-Making Process",
          "paragraphs": [
            "ADM 是在航空環境中有系統地判斷並選擇行動。飛行中的資料會變，原本合理的計畫也可能需要修改；重點是及早辨認變化，保留選項並檢查行動後的結果。",
            "自編例：出發時天氣可接受，不代表兩小時後目的地仍然相同。若把「已經出發」當作繼續的理由，會忽略原計畫所依賴的條件已經改變。"
          ]
        },
        {
          "title": "PAVE 把風險分成四個觀察方向",
          "locator": "The PAVE Checklist；2-8～2-9",
          "paragraphs": [
            "PAVE 分別檢查機師、航空器、環境與外在壓力。它幫助避免只注意天氣而漏掉疲勞、設備狀態或趕行程的壓力。風險可能互相加強，不能因為每一項看起來都只差一點就直接忽略。",
            "例如陌生機型、夜間與時間壓力同時出現時，應一起討論工作負荷。個人最低標準可預先建立決策界線，但不能用來放寬法規或航空器限制。"
          ]
        },
        {
          "title": "3P 與 DECIDE 的用途",
          "locator": "Perceive, Process, Perform；The DECIDE Model",
          "paragraphs": [
            "3P 強調察覺、處理與執行；DECIDE 引導辨認問題、估計反應需要、選擇結果、找出行動、執行並評估。記憶口訣的目的，是減少漏步驟，而非延遲明顯必要的處置。",
            "練習時可以先寫觀察，再寫解釋與選項。這樣比較容易發現自己是否把猜測當成事實，或在尚未考慮替代方案前就只剩下一個答案。"
          ]
        },
        {
          "title": "態度、資源與自動化",
          "locator": "Hazardous Attitudes；Use of Resources；Automation",
          "paragraphs": [
            "反權威、衝動、無敵感、逞強與放棄等危險態度，可能扭曲風險判斷。辨識自己常見的反應，比只背名稱更有用；教官、航管、旅客協助及設備資訊也應依情境妥善運用。",
            "自動化能降低部分工作量，也可能因模式不熟或輸入錯誤增加負荷。機師需要知道系統現在做什麼、預期下一步是什麼，並保有監控及替代方式。"
          ]
        },
        {
          "title": "案例：抵達壓力如何改變決策",
          "locator": "本站自編案例；對照 PAVE 與 3P",
          "paragraphs": [
            "自編案例：目的地天氣轉差，旅客一直提醒會議快開始。先辨認外在壓力與天氣變化，再比較延後、改降等可用選項，並核對各方案需要的燃油與機场資料。",
            "評估後仍需持續更新，不能只因選過一次備案便停止監控。這是決策練習；實際處置須依當時資訊、資格、限制與適用程序。"
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
      "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=40"
    },
    {
      "id": "phak25c-3",
      "number": 3,
      "title": "航空器構造",
      "english": "Aircraft Construction",
      "section": "第 3 章；印刷頁碼 3-1 起",
      "goal": "理解結構如何承載，以及主要部件如何配合。",
      "primer": "機身容納人員與設備，機翼提供主要升力，尾翼參與穩定與控制，起落架支撐地面作業，動力裝置提供推進。這些部件透過接合與結構把載荷傳遞，不能只把外形當作彼此無關的零件。",
      "terms": [
        "Fuselage · 機身",
        "Empennage · 尾翼組",
        "Semimonocoque · 半硬殼式"
      ],
      "prompts": [
        "你能用自己的話解釋「從主要部件理解功能」，並指出適用條件嗎？",
        "本章案例中，哪些資料或條件改變後，需要重新判斷？"
      ],
      "keyPoints": [
        "從主要部件理解功能",
        "桁架、硬殼與半硬殼",
        "機翼與尾翼的內部安排",
        "複合材料的優點與觀察限制"
      ],
      "detailSections": [
        {
          "title": "從主要部件理解功能",
          "locator": "Major Components；3-3～3-7",
          "paragraphs": [
            "機身容納人員與設備，機翼提供主要升力，尾翼參與穩定與控制，起落架支撐地面作業，動力裝置提供推進。這些部件透過接合與結構把載荷傳遞，不能只把外形當作彼此無關的零件。",
            "自編例：機翼受力最後要傳到機身接合位置；地面不平也會透過起落架把力傳入結構。理解力的路徑，可以讓檢查時的觀察更有方向。"
          ]
        },
        {
          "title": "桁架、硬殼與半硬殼",
          "locator": "Types of Aircraft Construction；3-8～3-9",
          "paragraphs": [
            "桁架利用構件組合承載；硬殼式依靠承力外殼；半硬殼式則由外皮與內部框架、縱向構件共同承載。外皮在某些構造中具有結構作用，不能一概當成裝飾。",
            "因此凹陷、裂紋或接合異常不能只按外觀大小判定重要性。真正的可接受損傷與修理方式需由適用維修資料及有資格人員判斷，教材只建立理解。"
          ]
        },
        {
          "title": "機翼與尾翼的內部安排",
          "locator": "Wings；Empennage",
          "paragraphs": [
            "樑、肋與蒙皮共同維持翼型並傳遞載荷。尾翼的固定面與活動面在不同設計中可能有不同配置，例如傳統升降舵與全動式水平尾翼，不能假設外觀相似就作用完全相同。",
            "學習時可對照飛機圖，把固定結構、活動控制面與連接位置分別標出，再查該機型文件確認名稱及動作。這為下一章的受力與操縱概念建立空間感。"
          ]
        },
        {
          "title": "複合材料的優點與觀察限制",
          "locator": "Composite Construction；3-9～3-12",
          "paragraphs": [
            "複合材料可結合不同材料的特性，提供重量與外形設計上的優勢；同時也有損傷辨識、熱及化學影響等需要注意的面向。某些內部損傷不一定由外觀立即看出。",
            "自編例：表面碰撞痕跡不深，不等於內部必然完整。反過來，看到痕跡也不能直接自行宣布結構失效；應記錄位置與事件，交由適用檢查程序判斷。"
          ]
        },
        {
          "title": "案例：把發現描述清楚",
          "locator": "本站自編案例；對照結構與材料主題",
          "paragraphs": [
            "自編案例：學員看到機翼表面有一處新凹痕。較有用的紀錄包含位置、大小、是否接近接合、發現時間及是否有已知碰撞，而不是只寫「應該沒事」。",
            "接下來尋求合格人員依文件評估。讀完本章應能說出為什麼承力方式影響損傷的重要性，而不把學到的結構名稱當成自行核准航空器的資格。"
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
      "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=72"
    },
    {
      "id": "phak25c-4",
      "number": 4,
      "title": "飛行基本原理",
      "english": "Principles of Flight",
      "section": "第 4 章；印刷頁碼 4-1 起",
      "goal": "用空氣性質、壓力與流動建立升力的理解。",
      "primer": "空氣有密度、黏性與壓力，因此流過物體時會產生作用力。飛機並不是在空的背景中移動；機翼與周圍流場彼此影響，黏性也關係到貼近表面的流動。",
      "terms": [
        "Density altitude · 密度高度",
        "Airfoil · 翼型",
        "Relative wind · 相對風"
      ],
      "prompts": [
        "你能用自己的話解釋「空氣是具有質量的流體」，並指出適用條件嗎？",
        "本章案例中，哪些資料或條件改變後，需要重新判斷？"
      ],
      "keyPoints": [
        "空氣是具有質量的流體",
        "壓力高度與密度高度",
        "壓力分布與動量觀點互相補充",
        "翼型、迎角與三維機翼"
      ],
      "detailSections": [
        {
          "title": "空氣是具有質量的流體",
          "locator": "Air is a Fluid；4-2～4-3",
          "paragraphs": [
            "空氣有密度、黏性與壓力，因此流過物體時會產生作用力。飛機並不是在空的背景中移動；機翼與周圍流場彼此影響，黏性也關係到貼近表面的流動。",
            "理解升力時，應同時注意翼型、迎角、速度與空氣狀態。只記住「上面比較快」會漏掉流動為什麼改變，以及在不同條件下何時不再維持。"
          ]
        },
        {
          "title": "壓力高度與密度高度",
          "locator": "Pressure Altitude；Density Altitude；4-4",
          "paragraphs": [
            "壓力高度以標準壓力面為基準；密度高度表達當時空氣密度相當於標準大氣的哪個高度。它不是飛機距離地面的高度，而是協助理解性能的環境量。",
            "同一機場在炎熱時可能有較高密度高度，表示空氣較稀薄。較高溫度、較低壓力及濕度變化會影響密度；實際性能計算要依該機型圖表所指定的輸入與修正。"
          ]
        },
        {
          "title": "壓力分布與動量觀點互相補充",
          "locator": "Theories in the Production of Lift；4-5～4-6",
          "paragraphs": [
            "升力可以從翼面壓力分布理解，也可以從流動動量改變理解。伯努力關係和牛頓運動定律不是互相排斥的選項，而是以不同方式描述相關物理現象。",
            "不需要假設分開經過機翼上下的空氣必須同時抵達後緣。這種等時說法無法正確建立流場；學習應回到壓力、速度及氣流偏轉，而不是把錯誤故事當成必要條件。"
          ]
        },
        {
          "title": "翼型、迎角與三維機翼",
          "locator": "Airfoil Design；A Third Dimension；4-6～4-9",
          "paragraphs": [
            "翼弦是幾何參考，迎角是翼弦與相對風之間的角。俯仰姿態則相對於地平線，兩者基準不同。飛行路徑改變時，即使機頭姿態相似，迎角也可能不同。",
            "真實機翼有翼尖，不是無限延伸的二維剖面，因此會出現三維流動效應。後續的誘導阻力與翼尖渦流，正是把剖面概念延伸到整片機翼的結果。"
          ]
        },
        {
          "title": "案例：炎熱機場與相同指示",
          "locator": "本站自編案例；對照密度高度",
          "paragraphs": [
            "自編案例：同一架飛機在同一機場，早晨與炎熱午後起飛。機場標高相同，但空氣密度可能不同，因此不能直接沿用早晨的性能判斷。",
            "先取得正確環境資料，再依機型手冊計算。此案例要學的是幾何高度與性能環境不同，不是提供一個可套用所有飛機的距離增加比例。"
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
      "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=88"
    },
    {
      "id": "phak25c-5",
      "number": 5,
      "title": "飛行空氣動力學",
      "english": "Aerodynamics of Flight",
      "section": "第 5 章；印刷頁碼 5-1 起",
      "goal": "連結四力、阻力、穩定性、轉彎與失速。",
      "primer": "推力、阻力、升力與重量的方向需要相對飛行路徑和機體理解。在穩定直線平飛的簡化情境中，可討論升力與重量、推力與阻力的平衡；加速、爬升或轉彎時不能不加條件地照搬。",
      "terms": [
        "AOA · 迎角",
        "Load factor · 載荷因數",
        "Induced drag · 誘導阻力"
      ],
      "prompts": [
        "你能用自己的話解釋「四力平衡有適用條件」，並指出適用條件嗎？",
        "本章案例中，哪些資料或條件改變後，需要重新判斷？"
      ],
      "keyPoints": [
        "四力平衡有適用條件",
        "失速看迎角，不只看速度",
        "轉彎、載荷與速度平方根",
        "穩定、尾流與高速效應"
      ],
      "detailSections": [
        {
          "title": "四力平衡有適用條件",
          "locator": "Forces Acting on the Aircraft；5-1～5-8",
          "paragraphs": [
            "推力、阻力、升力與重量的方向需要相對飛行路徑和機體理解。在穩定直線平飛的簡化情境中，可討論升力與重量、推力與阻力的平衡；加速、爬升或轉彎時不能不加條件地照搬。",
            "寄生阻力隨速度增加通常變重要；在其他條件相同、需要維持升力時，低速所需較大迎角會使誘導阻力增加。總阻力曲線因此不是單純一直上升或下降。"
          ]
        },
        {
          "title": "失速看迎角，不只看速度",
          "locator": "Stalls；5-25～5-26",
          "paragraphs": [
            "失速與達到臨界迎角有關，流動分離使升力特性明顯改變。機型公布的失速速度對應特定重量、構型與載荷條件，不能當成所有情境下永遠固定的界線。",
            "自編例：拉高載荷的轉彎中，即使速度高於平飛時熟悉的失速速度，仍可能達到臨界迎角。學習失速應連同構型與受力理解，實作則由教官依核准訓練程序指導。"
          ]
        },
        {
          "title": "轉彎、載荷與速度平方根",
          "locator": "Forces in Turns；Load Factors；5-22、5-33 起",
          "paragraphs": [
            "在協調且保持高度的轉彎中，升力要同時提供垂直支撐與水平轉彎分量；坡度增加，需要的總升力也增加。此條件下，載荷因數 n＝1/cosφ，60° 坡度對應約 2 g。",
            "同重量及構型的簡化關係為失速速度隨 √n 增加。這不是所有轉彎的通用載荷公式；若不保持高度或不是穩定協調轉彎，必須重新看受力條件。"
          ]
        },
        {
          "title": "穩定、尾流與高速效應",
          "locator": "Stability；Wingtip Vortices；High Speed Flight",
          "paragraphs": [
            "靜穩定描述受擾動後最初的回復傾向，動穩定描述反應隨時間如何發展。翼尖渦流與地面效應則影響附近氣流和誘導阻力；地面效應中離地，不等於一定具備正常爬升性能。",
            "高速部分引入馬赫數、可壓縮性、震波與邊界層。此時不能只沿用低速直覺；重量、重心、速度限制和特定機型資料仍需一起查閱。"
          ]
        },
        {
          "title": "案例：同一飛機的失速速度會變",
          "locator": "本站自編算例；對照 Load Factors and Stalling Speeds",
          "paragraphs": [
            "自編算例：假設某構型 1 g 失速速度為 50 kt，在相同重量與構型、協調等高 60° 轉彎的簡化條件下，n＝2，估算失速速度為 50×√2，約 70.7 kt。",
            "算例用來展示載荷影響，不是任何機型的操作速度。作答時先寫條件，再代公式；若題目沒有等高轉彎條件，就不能只憑坡度直接套用。"
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
      "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=98"
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
