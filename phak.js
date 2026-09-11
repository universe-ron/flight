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
      "section": "第 6 章；6-1～6-12，全章目錄逐節講解",
      "goal": "理解操縱面、配平及自動駕駛如何改變飛機反應。",
      "primer": "副翼主要控制滾轉，升降舵控制俯仰，方向舵控制偏航。名稱對應的是主要作用；真實飛機存在耦合，單一操縱可能伴隨其他軸的反應。",
      "terms": [
        "Aileron · 副翼",
        "Rudder · 方向舵",
        "Trim · 配平"
      ],
      "prompts": [
        "比較 balance tab、servo tab 與 antiservo tab：機師首先控制哪個部件、小翼片如何動、控制力增加還是減少？",
        "從本章找一項尾翼和一項增升裝置，說明其設計作用及不能跨機型直接套用的操作假設。"
      ],
      "keyPoints": [
        "從指令、傳動、作動器及回饋理解系統，電傳操縱不等於自動駕駛。",
        "副翼主要滾轉、升降舵主要俯仰、方向舵主要偏航；混合機構可讓翼面兼具功能。",
        "配平片、平衡片、伺服片與反伺服片的連動和目的不同，不能只看外觀或同一個方向口訣。",
        "自動駕駛需要模式與路徑監控，不能以設備存在推定具備全部功能或通用解除方式。"
      ],
      "detailSections": [
        {
          "id": "introduction",
          "english": "Introduction",
          "title": "導論：從輸入到氣動力矩",
          "parent": null,
          "locator": "PHAK C 版 · 6-1",
          "printedPage": "6-1",
          "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=1",
          "paragraphs": [
            "飛行操縱系統把機師輸入傳到操縱面，再由氣流與壓力分布的改變產生力及力矩。機械式可用鋼索、滑輪、推拉桿等傳遞；較大或較快的飛機可能使用液壓助力及電傳操縱，不能假設座艙動作永遠直接拉動外部翼面。",
            "電傳操縱以電訊號及控制邏輯連結輸入和作動器，不代表所有操縱面都由電動馬達直接推動，也不等於自動駕駛。原文的智慧控制研究屬歷史背景，閱讀重點是辨認指令、動力、回饋及備援路徑。"
          ]
        },
        {
          "id": "systems",
          "english": "Flight Control Systems",
          "title": "飛行操縱系統的整體關係",
          "parent": null,
          "locator": "PHAK C 版 · 6-2",
          "printedPage": "6-2",
          "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=2",
          "paragraphs": [
            "同一架飛機可能結合機械連桿、液壓、電力與電腦控制。理解系統時可沿著機師輸入、訊號傳遞、作動器、操縱面和回饋逐段看，確認哪一段負責傳遞命令、哪一段提供實際移動所需能量。",
            "助力或電傳系統可能利用人工感覺裝置提供操縱回饋，手上阻力不一定等於直接承受的氣動力。自編例：液壓失效後是否仍能人工操縱，不能由控制桿還能移動就判定，須查該機型的備援設計。"
          ]
        },
        {
          "id": "controls",
          "english": "Flight Controls",
          "title": "主要與次要操縱的分類",
          "parent": "systems",
          "locator": "PHAK C 版 · 6-2",
          "printedPage": "6-2",
          "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=2",
          "paragraphs": [
            "原書將副翼、升降舵或全動式水平尾翼、方向舵列為主要操縱，用於控制滾轉、俯仰及偏航；襟翼、前緣裝置、擾流板與配平系統列為次要操縱，用於性能、氣流或持續操縱力的調整。",
            "這是功能分類，不表示次要操縱不重要，也不表示一個翼面只能執行一種功能。襟副翼可同時執行增升與滾轉功能，擾流板也可參與滾轉；應從整個控制系統理解各部件的分工。"
          ]
        },
        {
          "id": "primary",
          "english": "Primary Flight Controls",
          "title": "主要操縱面與三軸",
          "parent": "systems",
          "locator": "PHAK C 版 · 6-2",
          "printedPage": "6-2",
          "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=2",
          "paragraphs": [
            "操縱面偏轉改變周圍流場，產生使飛機繞重心轉動的力矩。副翼主要控制縱軸滾轉，升降舵或 stabilator 主要控制橫軸俯仰，方向舵主要控制垂直軸偏航；實際動作還可能伴隨其他軸的耦合。",
            "低速時氣動操縱效能通常較低，高速時小偏轉也可能產生較大作用，但助力系統的手感與限制依機型而異。操縱止擋限制行程，不代表全行程在所有速度和多軸組合下都安全，仍須遵守操作限制。"
          ],
          "points": [
            "Aileron → Roll → Longitudinal axis：副翼、滾轉、縱軸。",
            "Elevator／Stabilator → Pitch → Lateral axis：升降舵／全動式水平尾翼、俯仰、橫軸。",
            "Rudder → Yaw → Vertical axis：方向舵、偏航、垂直軸。"
          ]
        },
        {
          "id": "ailerons",
          "english": "Ailerons",
          "title": "副翼：左右升力差產生滾轉",
          "parent": "primary",
          "locator": "PHAK C 版 · 6-3",
          "printedPage": "6-3",
          "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=3",
          "paragraphs": [
            "典型副翼位於機翼外側後緣，左右反向偏轉。向右輸入時，右副翼上偏降低該側翼型的升力貢獻，左副翼下偏提高另一側的升力貢獻，形成向右滾轉力矩；這是常規未失速流動下的入門描述。",
            "副翼控制的是滾轉反應，不是把操縱盤固定某角度就保證飛機停在相同傾斜角。建立傾斜後仍需觀察並調整，偏轉帶來的阻力差也可能產生反向偏航，必須連同方向舵協調理解。"
          ],
          "supplementalHeading": true
        },
        {
          "id": "adverse-yaw",
          "english": "Adverse Yaw",
          "title": "反向偏航與協調",
          "parent": "ailerons",
          "locator": "PHAK C 版 · 6-3",
          "printedPage": "6-3",
          "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=3",
          "paragraphs": [
            "副翼讓兩翼升力及阻力改變，可能使機頭暫時朝預期滾轉的反方向偏航。例如開始右滾時，左翼增加的阻力可使機頭偏左；這與需要向右建立傾斜的意圖相反，因此稱為反向偏航。",
            "低速、大副翼偏轉等條件下效果可能更明顯，但所需協調量隨機型與狀態而異。自編辨別：機翼向右傾斜不保證機身已對準相對氣流；應以適當觀察與操縱保持協調，不能一律用固定踏板量。"
          ],
          "supplementalHeading": true
        },
        {
          "id": "differential",
          "english": "Differential Ailerons",
          "title": "差動副翼",
          "parent": "ailerons",
          "locator": "PHAK C 版 · 6-4",
          "printedPage": "6-4",
          "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=4",
          "paragraphs": [
            "差動副翼讓上偏副翼的行程大於另一側下偏行程，藉調整兩側氣動作用減輕反向偏航。這裡的 differential 是上下偏轉幅度不同，不只是一般副翼左右反向動作。",
            "它是減輕副作用的設計方式，不保證完全消除反向偏航或不需方向舵。自編練習：在原圖中比較上下偏角，再解釋為何僅看到兩邊都在動，還不足以辨認它是否具有差動安排。"
          ],
          "supplementalHeading": true
        },
        {
          "id": "frise",
          "english": "Frise-Type Ailerons",
          "title": "Frise 型副翼",
          "parent": "ailerons",
          "locator": "PHAK C 版 · 6-4",
          "printedPage": "6-4",
          "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=4",
          "paragraphs": [
            "Frise 型副翼利用偏置鉸鏈，使上偏時部分前緣伸入翼下氣流，增加該側阻力，以協助平衡另一側副翼下偏所增加的阻力。原文也說明其縫隙安排可幫助下偏副翼的氣流。",
            "這種方式與差動副翼不是互斥，某設計可以同時具有兩者。辨認時看鉸鏈位置及偏轉後前緣的相對位置，而不是只看外觀名稱；其作用仍是減輕反向偏航，不能視為所有狀態自動協調。"
          ],
          "supplementalHeading": true
        },
        {
          "id": "coupled",
          "english": "Coupled Ailerons and Rudder",
          "title": "副翼與方向舵連動",
          "parent": "ailerons",
          "locator": "PHAK C 版 · 6-4",
          "printedPage": "6-4",
          "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=4",
          "paragraphs": [
            "某些系統以彈簧及連桿連結副翼和方向舵，滾轉輸入時同時提供部分方向舵偏轉，協助抵銷副翼造成的偏航。原書例子中的彈簧連動可由機師克服，以保留需要側滑等情況的操縱能力。",
            "連動不是自動駕駛，也不是保證所有速度與功率下都完全協調。自編例：操縱盤轉動時踏板跟著動，可能是連動特性，應先理解該機型設計，不能僅憑這個現象判定方向舵由電腦控制。"
          ],
          "supplementalHeading": true
        },
        {
          "id": "flaperons",
          "english": "Flaperons",
          "title": "襟副翼與混合機構",
          "parent": "ailerons",
          "locator": "PHAK C 版 · 6-5",
          "printedPage": "6-5",
          "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=5",
          "paragraphs": [
            "襟副翼將副翼與襟翼功能合在同一組活動面：差動偏轉提供滾轉，共同下偏提供襟翼效果。機師仍可有分開的滾轉與襟翼輸入，混合機構再將兩者組合成各翼面的實際位置。",
            "自編例：左右襟副翼已共同下偏時，向右滾轉輸入是在這個基礎上增加左右差別，不代表其中一側一定回到原來收起的位置。可用行程、操縱效能及襟翼限制需依機型，不能直接套用傳統分離式副翼配置。"
          ],
          "supplementalHeading": true
        },
        {
          "id": "elevator",
          "english": "Elevator",
          "title": "升降舵與俯仰力矩",
          "parent": "primary",
          "locator": "PHAK C 版 · 6-5",
          "printedPage": "6-5",
          "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=5",
          "paragraphs": [
            "傳統尾翼的升降舵位於水平安定面後緣。向後拉控制桿通常使其後緣上偏，改變尾翼氣動力，對重心產生抬頭力矩；力矩大小與尾翼效能、力臂、局部氣流及重心位置有關。",
            "升降舵直接影響俯仰與迎角，不是按一下就直接增加高度。自編例：機頭抬起後，飛機可能爬升或因速度不足而減速，需結合功率和整體飛行狀態判斷；尾翼受力方向也不能由這個典型例子推論所有構型。"
          ]
        },
        {
          "id": "t-tail",
          "english": "T-Tail",
          "title": "T 型尾翼的氣流與深失速",
          "parent": "primary",
          "locator": "PHAK C 版 · 6-6",
          "printedPage": "6-6",
          "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=6",
          "paragraphs": [
            "T 型尾翼將水平尾翼設在垂直尾翼頂端，正常狀態下可避開部分機身、機翼或引擎排流，亦有安裝及離水高度等考量。它同時帶來結構剛性、重量與局部氣流的設計取捨，不能只按字形判定操縱優劣。",
            "在某些大迎角狀態下，機翼分離尾流可能遮蔽高置水平尾翼，降低壓低機頭的能力，形成深失速風險。實際是否易發、控制力大小及保護裝置都依機型；後重心可能加重恢復困難，不能認為保護裝置允許超出重心範圍。"
          ]
        },
        {
          "id": "stabilator",
          "english": "Stabilator",
          "title": "全動式水平尾翼",
          "parent": "primary",
          "locator": "PHAK C 版 · 6-7",
          "printedPage": "6-7",
          "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=7",
          "paragraphs": [
            "Stabilator 由整片水平尾翼繞樞軸轉動，結合安定面與升降舵的功能，和固定安定面後方附一片升降舵不同。整片翼面的氣動作用讓它能有效控制俯仰，也需適當的操縱力與平衡設計。",
            "原書例子在後緣設置 antiservo tab，使操縱時的回饋力增加、降低過度敏感；也可能設平衡配重。配重是質量平衡部件，antiservo tab 則用氣動作用調整手感，不能把兩種「平衡」機制混成同一零件。"
          ]
        },
        {
          "id": "canard",
          "english": "Canard",
          "title": "鴨式前翼與升力分配",
          "parent": "primary",
          "locator": "PHAK C 版 · 6-7",
          "printedPage": "6-7",
          "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=7",
          "paragraphs": [
            "Canard 把提供縱向功能的翼面放在主翼前方，常以向上的氣動力形成俯仰平衡，與原書典型後尾翼例子不同。全機需共同安排前翼、主翼的升力、力矩及相互氣流，而不是單把尾翼搬到前面即可。",
            "不同前翼可為固定、可動或帶活動面，不能只看前方有翼面就認定整片都能轉動。原書的效率描述是設計概念，實際阻力與失速順序依整體設計；前翼構型也不自動代表不會失速或必然較省油。"
          ]
        },
        {
          "id": "rudder",
          "english": "Rudder",
          "title": "方向舵與偏航",
          "parent": "primary",
          "locator": "PHAK C 版 · 6-8",
          "printedPage": "6-8",
          "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=8",
          "paragraphs": [
            "方向舵位於垂直尾翼後緣，偏轉後改變側向氣動力，使飛機繞垂直軸偏航。典型左踏板輸入使方向舵左偏，尾部受力向右，機頭偏左；效果取決於氣流速度，螺旋槳滑流也可能影響它。",
            "方向舵可協助協調轉彎與處理側滑，但不是像汽車方向盤一樣單獨完成所有轉彎。大幅或快速反向輸入可能帶來高載荷，即使操縱行程允許也不表示任何速度皆適合；須依機型限制和訓練操作。"
          ]
        },
        {
          "id": "v-tail",
          "english": "V-Tail",
          "title": "V 型尾翼與舵面混合",
          "parent": "primary",
          "locator": "PHAK C 版 · 6-8",
          "printedPage": "6-8",
          "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=8",
          "paragraphs": [
            "V 型尾翼用兩片傾斜翼面共同提供水平及垂直尾翼的功能，其活動面常稱 ruddervators。俯仰輸入使兩側按俯仰需求共同動作，偏航輸入則透過差動作用形成所需側向力與力矩。",
            "同時輸入升降舵與方向舵時，混合機構將兩種需求合成到各舵面，不能把單片簡單標成升降舵、另一片標成方向舵。結構、耦合反應與阻力效果依設計，不應僅因少一片尾翼就保證效率更高。"
          ]
        },
        {
          "id": "secondary",
          "english": "Secondary Flight Controls",
          "title": "次要操縱系統的角色",
          "parent": "systems",
          "locator": "PHAK C 版 · 6-8",
          "printedPage": "6-8",
          "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=8",
          "paragraphs": [
            "次要操縱系統包括襟翼、前緣裝置、擾流板及配平系統，協助調整性能、流動或持續操縱力。這些裝置的展開可能同時改變升力、阻力、力矩與操縱需求，所以不能把它們視為彼此獨立的開關。",
            "自編例：放襟翼後即使目的是低速飛行，仍要管理姿態、速度與配平變化。分類中的「次要」不代表可忽略故障或限制，實際使用需確認對稱性、位置指示及機型允許的速度與構型。"
          ]
        },
        {
          "id": "flaps",
          "english": "Flaps",
          "title": "襟翼類型與增升、增阻",
          "parent": "secondary",
          "locator": "PHAK C 版 · 6-8",
          "printedPage": "6-8",
          "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=8",
          "paragraphs": [
            "襟翼改變後緣幾何，通常增加彎度及最大升力係數，某些設計也增加有效翼面積。原書依基本機制介紹簡單式、分裂式、開縫式及 Fowler 式，圖中另呈現開縫 Fowler 的組合；分類不是互斥的商品名稱。",
            "小幅與大幅展開的升力、阻力增益不同，後段行程可能主要增加阻力，俯仰反應也依全機而異。不能把襟翼當成越多越能爬升的裝置，或一概認為會抬頭／低頭；操作速度、起飛設定及收放順序須查手冊。"
          ],
          "points": [
            "Plain flap／簡單式：後緣整段下偏，改變翼型彎度。",
            "Split flap／分裂式：下表面片下偏，常形成較大的尾流與阻力。",
            "Slotted flap／開縫式：縫隙使氣流進入襟翼上表面，幫助延緩分離。",
            "Fowler flap／Fowler 式：向後移動增加面積並配合下偏，亦可結合多段開縫。"
          ]
        },
        {
          "id": "leading-edge",
          "english": "Leading Edge Devices",
          "title": "前緣縫隙、縫翼、襟翼與袖套",
          "parent": "secondary",
          "locator": "PHAK C 版 · 6-9",
          "printedPage": "6-9",
          "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=9",
          "paragraphs": [
            "前緣裝置用於改善較大迎角下的流動及最大升力能力。Slot 是縫隙，slat 是可形成縫隙的前緣翼段，兩者不是同一零件名稱；固定縫隙與可動裝置的幾何和運作方式也不同。",
            "某些縫翼會依氣動力自動伸出，另一些由機師或系統控制，不能只因名稱是 slat 就假定自動。前緣襟翼改變幾何，固定 cuff 則改變前緣輪廓；各方式在低速效能、阻力及複雜度間取捨。"
          ],
          "points": [
            "Fixed slot：固定氣流通道；與活動翼段分開辨識。",
            "Movable slat：前緣翼段可移動，展開形成適當氣流通道。",
            "Leading edge flap：改變前緣幾何，常配合後緣增升裝置。",
            "Leading edge cuff：固定的前緣外形修改，並非每次起降都收放。"
          ]
        },
        {
          "id": "spoilers",
          "english": "Spoilers",
          "title": "擾流板的三種用途",
          "parent": "secondary",
          "locator": "PHAK C 版 · 6-10",
          "printedPage": "6-10",
          "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=10",
          "paragraphs": [
            "擾流板展開會減少相關翼段升力並增加阻力，可用於下降與減速、輔助滾轉，以及接地後卸除升力。單側展開可使該翼下降；接地後減少翼面支承，能增加由輪子承受的重量並改善煞車條件。",
            "各機型的飛行擾流板、地面擾流板與減速板邏輯可能不同，同一翼面也可兼用。展開後的速度和下降率仍取決於姿態、功率及控制，不保證自動維持速度；不得將接地專用展開方式直接搬到空中。"
          ]
        },
        {
          "id": "trim-systems",
          "english": "Trim Systems",
          "title": "配平：減輕持續操縱力",
          "parent": "secondary",
          "locator": "PHAK C 版 · 6-10",
          "printedPage": "6-10",
          "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=10",
          "paragraphs": [
            "配平讓機師在選定飛行狀態下不必長時間維持相同控制力，可透過小翼片、可調安定面或其他機構達成。目的在設定適當的力平衡，不是把飛機鎖在某高度，也不是移動行李來改變重心。",
            "通常先建立所需功率、姿態和構型，再配平以減輕持續操縱力；狀態改變後可能需重新配平。自編例：巡航時手感輕鬆，放襟翼減速後又需要施力，是新狀態的力矩需求改變，不代表先前配平失效。"
          ],
          "supplementalHeading": true
        },
        {
          "id": "trim-tabs",
          "english": "Trim Tabs",
          "title": "配平片與主操縱面的反向作用",
          "parent": "trim-systems",
          "locator": "PHAK C 版 · 6-10",
          "printedPage": "6-10",
          "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=10",
          "paragraphs": [
            "在典型升降舵配平片系統中，nose-up 配平使小翼片後緣向下，氣流作用再使升降舵傾向上偏，減輕原先需要持續向後拉的力。名稱 nose-up 描述對飛機的配平意圖，不是小翼片本身一定向上。",
            "這個反向關係適用於此種配平片，不能直接套到全動尾翼的 antiservo tab 或可調安定面。閱讀原圖時依正文追蹤「配平片 → 升降舵 → 尾部受力 → 機頭」的順序，避免只記某一支箭頭。"
          ]
        },
        {
          "id": "balance-tabs",
          "english": "Balance Tabs",
          "title": "平衡片：減輕主操縱面負荷",
          "parent": "trim-systems",
          "locator": "PHAK C 版 · 6-11",
          "printedPage": "6-11",
          "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=11",
          "paragraphs": [
            "Balance tab 透過與主操縱面連結的機構，在主面偏轉時相對朝反方向偏轉。氣流對小翼片的作用協助抵銷部分主面鉸鏈力矩，讓機師更容易移動或保持主操縱面。",
            "它與獨立設定的配平片外觀可能相近，但核心是隨主面動作的連動安排。若其連桿可由座艙調整，也可能兼具配平功能；不能只憑後緣有一片小翼面就判定其唯一用途。"
          ]
        },
        {
          "id": "servo-tabs",
          "english": "Servo Tabs",
          "title": "伺服片：先控制小翼片再帶動主面",
          "parent": "trim-systems",
          "locator": "PHAK C 版 · 6-11",
          "printedPage": "6-11",
          "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=11",
          "paragraphs": [
            "Servo tab 系統中，機師的輸入主要先移動小翼片，再利用小翼片的氣動作用帶動較大的主操縱面。它以氣動力協助產生主面動作，和機師直接移動主面、平衡片隨之助力的描述有所不同。",
            "自編比較：兩種系統都可能減輕手力，但應追問「輸入首先連到哪個部件」。因作用依賴氣流，地面沒有足夠氣流時的反應不一定像空中；系統檢查必須按機型資料，不能以手感自行推定功能正常。"
          ]
        },
        {
          "id": "antiservo-tabs",
          "english": "Antiservo Tabs",
          "title": "反伺服片：增加操縱回饋",
          "parent": "trim-systems",
          "locator": "PHAK C 版 · 6-11",
          "printedPage": "6-11",
          "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=11",
          "paragraphs": [
            "Antiservo tab 通常隨全動式水平尾翼後緣同向偏轉，使氣動作用抵抗主面的偏轉，增加機師所需控制力，降低過度敏感。這與 balance tab 反向動作、減輕控制力的目的不同。",
            "這類翼片也可能兼具配平功能，因此「增加動作回饋」和「減輕某狀態下持續操縱力」可以同時存在。自編例：尾翼上偏時小翼片也上偏，不應套用傳統升降舵配平片的反向口訣判定連桿裝反。"
          ]
        },
        {
          "id": "ground-tabs",
          "english": "Ground Adjustable Tabs",
          "title": "地面可調翼片",
          "parent": "trim-systems",
          "locator": "PHAK C 版 · 6-11",
          "printedPage": "6-11",
          "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=11",
          "paragraphs": [
            "某些小型飛機在方向舵上有地面可調的金屬翼片，設定後利用氣動作用改善某個巡航條件下的偏航或持續操縱力。其設定在飛行中不由座艙連續調整，和可操作的配平輪系統不同。",
            "固定設定通常只對特定工況提供折衷，不代表各種速度及功率下都無需方向舵。原書描述地面調整的原理，並不是授權讀者自行彎折；調整、檢查與紀錄要依該機型資料及適用維修要求。"
          ]
        },
        {
          "id": "adjustable-stabilizer",
          "english": "Adjustable Stabilizer",
          "title": "可調安定面與配平行程",
          "parent": "trim-systems",
          "locator": "PHAK C 版 · 6-12",
          "printedPage": "6-12",
          "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=12",
          "paragraphs": [
            "可調水平安定面透過改變安裝角來提供俯仰配平，可能由螺桿、鋼索或馬達驅動。與只轉動升降舵後緣小配平片相比，它改變較大翼面的氣動條件，可處理較大的配平需求。",
            "可調安定面不等於 stabilator：前者通常仍搭配升降舵，由安定面處理配平，後者以整片尾翼動作作主要俯仰操縱。兩者都可能看見水平翼面移動，必須依功能和控制路徑辨認，不能只看外觀。"
          ]
        },
        {
          "id": "autopilot",
          "english": "Autopilot",
          "title": "自動駕駛的軸向、模式與監控",
          "parent": null,
          "locator": "PHAK C 版 · 6-12",
          "printedPage": "6-12",
          "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=12",
          "paragraphs": [
            "自動駕駛根據感測資訊與所選模式，透過伺服作動器或整合控制系統操作飛機。單軸系統常控制滾轉，更完整系統可控制俯仰及偏航；航向保持、高度保持和導航耦合是不同功能，不能只因有 AP 就假定全部具備。",
            "Flight director 可顯示操縱指令，但不代表自動駕駛已接通並移動操縱面。使用時需辨認模式、來源、限制與脫離方式，持續監控實際路徑；遇異常時按機型程序處置，不能假定所有系統都能安全地靠用力推拉控制桿解除。"
          ],
          "points": [
            "模式已選擇、已待命與正在作用不同；確認目前實際控制的目標。",
            "單軸自動駕駛不必具備高度保持；導航耦合也不等於可自動起降。",
            "脫離自動駕駛後仍需留意配平及操縱力；實際限制依 AFM／POH 與補充手冊。"
          ]
        },
        {
          "id": "summary",
          "english": "Chapter Summary",
          "title": "全章統整：功能、連動與機型差異",
          "parent": null,
          "locator": "PHAK C 版 · 6-12",
          "printedPage": "6-12",
          "source": "https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page=12",
          "paragraphs": [
            "本章可沿「輸入傳到哪裡、翼面怎麼動、氣流造成什麼力矩」整理。先掌握主要操縱的三軸，再比較尾翼構型與混合機構，最後以增升、增阻及操縱力調整來區分次要系統。",
            "自編練習：說明為何 nose-up 配平不代表配平片向上，為何可調安定面不等於 stabilator，以及伺服片和反伺服片的目的差在哪裡。回到熟悉機型的 AFM／POH 核對名稱、限制與檢查方法，把通用概念連到實際配置。"
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
        },
        {
          "title": "電傳操縱與自動駕駛",
          "clarification": "電傳描述操縱指令傳遞與控制架構，自動駕駛則執行所選自動控制模式。",
          "example": "機師可手動飛行一架電傳操縱飛機。"
        },
        {
          "title": "配平片與反伺服片方向",
          "clarification": "典型升降舵配平片靠反向作用助動；反伺服片隨全動尾翼同向偏轉以增加回饋。",
          "example": "看到小翼片與主面同向不能立即判定機構錯誤。"
        },
        {
          "title": "Stabilator 與 Adjustable Stabilizer",
          "clarification": "前者是全動式主要俯仰操縱面，後者通常改變安定面安裝角來配平並搭配升降舵。",
          "example": "兩者都可能使整片水平面改變角度，但控制角色不同。"
        },
        {
          "title": "Slot 與 Slat",
          "clarification": "Slot 是縫隙，slat 是前緣翼段，可移動後形成縫隙。",
          "example": "固定縫隙不代表裝有自動伸出的縫翼。"
        },
        {
          "title": "飛行指引與自動駕駛接通",
          "clarification": "指引可顯示所需操縱，自動駕駛接通才由相應控制系統執行；可用功能依設備。",
          "example": "看到飛行指引桿不代表飛機已自動保持高度。"
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
      "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=149",
      "detailMode": "outline",
      "checked": "2026-09-10",
      "coverageNote": "涵蓋提供的 22 個目錄小節，另補正文中副翼、反向偏航、差動副翼、Frise 型副翼、連動操縱、襟副翼與配平系統 7 個標題，共 29 節。保留英文原名、印刷頁碼與 FAA 原文；中文講解及例子為本站編寫，具體操縱與檢查依機型資料。"
    },
    {
      "id": "phak25c-7",
      "number": 7,
      "title": "航空器系統",
      "english": "Aircraft Systems",
      "section": "第 7 章；7-1～7-41，全章目錄逐節講解",
      "goal": "用能量與流路理解動力、燃油、電氣及防冰系統。",
      "primer": "活塞引擎透過燃燒循環帶動軸，螺旋槳把軸功率轉成推進作用。固定槳距與可變槳距的反應不同；定速系統透過調整槳距控制轉速，但仍有工作範圍及限制。",
      "terms": [
        "Mixture · 混合比",
        "Magneto · 磁電機",
        "Anti-ice / Deice · 防冰／除冰"
      ],
      "prompts": [
        "選一項引擎與一項機體系統，畫出其來源、主要流路、控制及監控資料，並說明備援限制。",
        "比較 hot start／hung start、爆震／提前點火、供油中斷／燃油耗盡，各需要哪些資訊才能分辨？"
      ],
      "keyPoints": [
        "先沿來源、流路、控制與回饋理解系統，正常單一指示不保證整體正常。",
        "固定螺距與定速槳、化油器與噴射、磁電機與 FADEC 的依賴不同。",
        "燃油需符合核准，存量、可用量與能否送達引擎是三個不同問題。",
        "座艙增壓、氧氣供應與血氧估計不同；防冰裝備不代表所有結冰條件都可飛行。"
      ],
      "detailSections": [
        {
          "id": "introduction",
          "english": "Introduction",
          "title": "導論：用流向理解系統",
          "parent": null,
          "locator": "PHAK C 版 · 7-1",
          "printedPage": "7-1",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=1",
          "paragraphs": [
            "本章介紹常見動力與機體系統，讀法是沿著能量、空氣、燃油、油液或訊號的路徑追蹤。每個系統都可問：來源在哪裡、如何分配和控制、如何顯示狀態，以及失去一部分功能會影響哪些其他系統。",
            "圖中的零件與操作例子屬特定配置的說明，不是每架飛機都相同。先用教材建立原理，再查實際機型的 AFM／POH 及補充資料，才能把概念轉成正確的檢查、限制與異常處置。"
          ]
        },
        {
          "id": "powerplant",
          "english": "Powerplant",
          "title": "動力裝置與附屬系統",
          "parent": null,
          "locator": "PHAK C 版 · 7-1",
          "printedPage": "7-1",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=1",
          "paragraphs": [
            "動力裝置把燃料能量轉成可用推進作用，同時可能驅動發電、液壓或其他附件。活塞引擎多透過螺旋槳產生推力，渦輪引擎則可主要輸出噴流或軸功率；不能僅按外觀是否有螺旋槳判斷內部引擎類型。",
            "動力是否可用不只取決於燃燒，還依賴供油、進氣、冷卻、潤滑及控制。自編例：燃油充足卻供不到引擎，和油箱真正耗盡，最後都可能失去動力，但原因與應對依據不同。"
          ]
        },
        {
          "id": "reciprocating",
          "english": "Reciprocating Engines",
          "title": "往復式引擎與四行程",
          "parent": "powerplant",
          "locator": "PHAK C 版 · 7-2",
          "printedPage": "7-2",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=2",
          "paragraphs": [
            "活塞在汽缸內往復，透過連桿及曲軸把氣體膨脹的作用轉成旋轉輸出。常見四行程依序為進氣、壓縮、作功與排氣；每個汽缸完成一循環需曲軸轉兩圈，多汽缸依點火順序平順地接續輸出。",
            "汽缸可採水平對臥、星型等排列，點火可為火花點火或壓縮點火，不能把所有活塞航空引擎都當成磁電機加 AVGAS。原文的廠商與產品發展是歷史背景，燃料及操作方式仍依實際引擎核准資料。"
          ]
        },
        {
          "id": "propeller",
          "english": "Propeller",
          "title": "螺旋槳的能量轉換",
          "parent": "powerplant",
          "locator": "PHAK C 版 · 7-4",
          "printedPage": "7-4",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=4",
          "paragraphs": [
            "螺旋槳以旋轉翼型改變空氣動量，把引擎軸功率轉成推進作用。槳葉各半徑的旋轉速度不同，扭轉設計用來配合局部相對氣流；槳葉角、迎角和螺距各有不同定義，不能只用轉速判定推力。",
            "螺旋槳與引擎、減速機構及機體需要配合，效率隨速度和設定改變。自編例：轉速相同時若槳葉角或空速不同，推力可不同，因此後面要分開固定螺距與定速系統來理解儀表。"
          ]
        },
        {
          "id": "fixed-pitch",
          "english": "Fixed-Pitch Propeller",
          "title": "固定螺距螺旋槳",
          "parent": "propeller",
          "locator": "PHAK C 版 · 7-5",
          "printedPage": "7-5",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=5",
          "paragraphs": [
            "固定螺距的槳葉角在操作中不改變，是起飛爬升與巡航工況間的折衷。較低螺距通常偏重低速爬升，較高螺距偏重巡航，但不能直接把一種設定當成所有狀態效率最高。",
            "轉速由引擎扭矩與螺旋槳負荷平衡決定，受油門及空速共同影響。自編例：油門未動而下降加速時轉速仍可能上升，所以 RPM 是重要指示，卻不是脫離飛行條件即可換算的固定功率數字。"
          ]
        },
        {
          "id": "adjustable-pitch",
          "english": "Adjustable-Pitch Propeller",
          "title": "可調螺距與定速調速器",
          "parent": "propeller",
          "locator": "PHAK C 版 · 7-6",
          "printedPage": "7-6",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=6",
          "paragraphs": [
            "原書先介紹只能在地面調整的螺旋槳，再延伸到飛行中可變螺距與定速系統。定速調速器在可用範圍內自動改變槳葉角，以維持選定 RPM；它控制轉速，不是保證推力固定。",
            "到達高低螺距止擋後，槳葉角無法再補償，轉速便可能隨負荷或空速變化。歧管絕對壓力 MAP 與 RPM 要配合解讀，允許組合及功率調整順序依引擎手冊，不能只比較兩個表面數字大小。"
          ]
        },
        {
          "id": "overspeed",
          "english": "Propeller Overspeed in Piston Engine Aircraft",
          "title": "活塞機螺旋槳超轉",
          "parent": "propeller",
          "locator": "PHAK C 版 · 7-7",
          "printedPage": "7-7",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=7",
          "paragraphs": [
            "螺旋槳調速或變距異常可能使槳葉停在低螺距，造成高轉速但推力不足。這種狀態和引擎完全停止不同，剩餘動力、槳阻力及速度之間的關係都可能改變。",
            "原書以 2010 年 SAIB 個案說明某機型在這種故障下的最佳狀態未必等於公布的熄火滑翔速度。它不是通用減速指令，也不應套用案例速度；應先依機型超轉程序處置，不能在低高度自行試驗。"
          ]
        },
        {
          "id": "induction",
          "english": "Induction Systems",
          "title": "進氣路徑與備用氣源",
          "parent": "powerplant",
          "locator": "PHAK C 版 · 7-7",
          "printedPage": "7-7",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=7",
          "paragraphs": [
            "進氣系統把外界空氣經入口、濾清及管路送往引擎，並視設計經化油器或其他計量裝置。進氣口阻塞可能降低可用功率，備用氣源提供另一條路徑，但不一定具有相同溫度或過濾效果。",
            "自編例：引擎仍在轉不代表進氣完全正常，功率變化需與 MAP、RPM 及其他指示交叉判讀。備用氣源是自動或手動、是否繞過濾芯，以及使用限制都應查機型資料。"
          ]
        },
        {
          "id": "carburetor",
          "english": "Carburetor Systems",
          "title": "化油器如何計量燃油",
          "parent": "powerplant",
          "locator": "PHAK C 版 · 7-8",
          "printedPage": "7-8",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=8",
          "paragraphs": [
            "浮筒式化油器以浮筒和針閥維持油面，文氏管造成的壓力差使燃油進入氣流，再經節氣門控制混合氣流量。浮筒計量與節氣門不是同一功能：前者管理油室供油，後者影響送進引擎的氣流。",
            "壓力式化油器以加壓方式供油，其配置和蒸發位置不同。原書比較兩者的機動與結冰特性，不能因此認為壓力式或其他供油方式絕對不會遭遇進氣口阻塞或所有形式的冰。"
          ]
        },
        {
          "id": "mixture",
          "english": "Mixture Control",
          "title": "混合比控制的條件",
          "parent": "carburetor",
          "locator": "PHAK C 版 · 7-9",
          "printedPage": "7-9",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=9",
          "paragraphs": [
            "混合比描述燃油與空氣的比例；密度降低時，未補償的供油系統可能變得相對過濃。調貧是減少相對供油，調濃則增加，目的在依功率與環境維持適當燃燒，不是越稀越省就越好。",
            "EGT、CHT、燃油流量及運轉狀態可提供資訊，但各引擎允許的調整方式不同。過熱或爆震風險不能只靠「過稀」一個字概括，需結合功率、溫度、燃油及核准程序，不以通用圈數或單一溫度取代手冊。"
          ]
        },
        {
          "id": "carb-icing",
          "english": "Carburetor Icing",
          "title": "化油器結冰的原因與徵兆",
          "parent": "carburetor",
          "locator": "PHAK C 版 · 7-9",
          "printedPage": "7-9",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=9",
          "paragraphs": [
            "燃油蒸發與文氏管壓力降低會使化油器內部降溫，因此外界溫度高於冰點仍可能結冰。冰可縮小文氏管或節氣門附近的通道，限制混合氣流量，造成逐漸失去功率或運轉粗糙。",
            "固定螺距常先見 RPM 下降，定速槳在仍能補償時則可能 MAP 下降而 RPM 保持。自編辨別：轉速沒有變並不排除功率正在減少，也不能因機翼未結冰就認定化油器內不可能有冰。"
          ]
        },
        {
          "id": "carb-heat",
          "english": "Carburetor Heat",
          "title": "化油器加熱與暫時功率變化",
          "parent": "carburetor",
          "locator": "PHAK C 版 · 7-10",
          "printedPage": "7-10",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=10",
          "paragraphs": [
            "化油器加熱提高進氣溫度，用於適用情境的防冰或除冰；較熱的空氣密度較低，因此使用時可能先降低功率並改變混合比。若有冰，融冰過程亦可能暫時粗糙，不能只因初始 RPM 下降就判定加熱無效。",
            "是否需全熱、預防使用時機及地面限制依機型，部分熱量也不能一律視為較安全的折衷。應了解正常檢查的預期反應，發現異常按手冊處置，不把原書示例的功率百分比或恢復時間當作固定門檻。"
          ]
        },
        {
          "id": "carb-temperature",
          "english": "Carburetor Air Temperature Gauge",
          "title": "化油器空氣溫度表",
          "parent": "carburetor",
          "locator": "PHAK C 版 · 7-11",
          "printedPage": "7-11",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=11",
          "paragraphs": [
            "此表反映化油器指定感測位置的溫度，可協助評估結冰條件，與外氣溫度不是同一量。標示的警戒區表示需注意的溫度範圍，不是單憑指針進入就已證明有冰。",
            "水氣、操作功率及感測位置仍會影響判斷。自編例：OAT 在冰點以上而化油器溫度進入警戒區並不矛盾，因為進氣內部可能降溫；標色、最大溫度和加熱用法需依設備說明。"
          ]
        },
        {
          "id": "oat",
          "english": "Outside Air Temperature Gauge",
          "title": "外氣溫度表",
          "parent": "powerplant",
          "locator": "PHAK C 版 · 7-11",
          "printedPage": "7-11",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=11",
          "paragraphs": [
            "OAT 提供外界空氣溫度資訊，可用於性能、空速換算及結冰環境的判斷。它不直接量到化油器內部、汽缸頭或燃油溫度，因此不能把不同溫度表視為彼此替代。",
            "安裝位置與氣流加熱等可能影響指示，高速機還需分辨總溫與靜溫。自編例：使用計算表前先確認要求的是哪種溫度及單位，而不是把座艙任何標有 °C 的讀值都代入。"
          ]
        },
        {
          "id": "fuel-injection",
          "english": "Fuel Injection Systems",
          "title": "燃油噴射系統",
          "parent": "powerplant",
          "locator": "PHAK C 版 · 7-11",
          "printedPage": "7-11",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=11",
          "paragraphs": [
            "燃油噴射以泵、計量裝置、分配器與噴嘴送油，常見活塞機是在進氣閥附近噴入，並非全都直接噴進汽缸。相較浮筒化油器，它改變燃油分配及蒸發位置，減少典型化油器蒸發結冰問題。",
            "它仍可能有進氣口結冰、熱起動或燃油汽化問題，不能把 fuel injected 當成沒有任何冰或供油風險。輔助泵何時使用、熱機起動如何進行及備用氣源配置，都應按特定機型程序。"
          ]
        },
        {
          "id": "boost",
          "english": "Superchargers and Turbosuperchargers",
          "title": "增壓的目的與能量來源",
          "parent": null,
          "locator": "PHAK C 版 · 7-12",
          "printedPage": "7-12",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=12",
          "paragraphs": [
            "增壓器提高進氣壓力，使引擎在指定範圍內取得較多空氣或補償高度造成的壓力下降。壓縮也會升溫，因此壓力、溫度、燃油和冷卻能力需一起考慮，不能只追求更高 MAP。",
            "機械增壓與渦輪增壓的主要差別是驅動壓縮機的能量來源，並非一種只增加速度、另一種只增加高度。實際核准壓力與維持功率能力依系統，增壓不代表可以無限制提升輸出。"
          ]
        },
        {
          "id": "supercharger",
          "english": "Superchargers",
          "title": "機械增壓器",
          "parent": "boost",
          "locator": "PHAK C 版 · 7-12",
          "printedPage": "7-12",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=12",
          "paragraphs": [
            "機械增壓器由引擎透過機械傳動驅動壓縮機，消耗部分軸功率來提高進氣壓力。原書介紹不同段數與轉速配置，說明系統可針對不同高度提供增壓能力。",
            "獲得更多進氣的效益要扣除驅動與熱管理成本。自編例：同樣 MAP 不表示不同進氣溫度下有相同空氣質量，因此需依引擎資料評估設定，不能把壓力表讀值等同所有性能資訊。"
          ]
        },
        {
          "id": "turbocharger",
          "english": "Turbosuperchargers",
          "title": "排氣渦輪增壓器",
          "parent": "boost",
          "locator": "PHAK C 版 · 7-13",
          "printedPage": "7-13",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=13",
          "paragraphs": [
            "渦輪增壓器以排氣驅動渦輪，軸上壓縮機再壓縮進氣；燃燒後的排氣與乾淨進氣並非混在一起。Wastegate 控制繞過渦輪的排氣比例，影響渦輪取得的能量及增壓程度。",
            "Intercooler 若有安裝，可降低壓縮後進氣溫度，與控制排氣流量的 wastegate 功能不同。自編練習：沿圖分別畫出進氣、排氣與油路，才能看出為什麼排氣側故障或潤滑異常也會影響增壓。"
          ]
        },
        {
          "id": "turbo-operation",
          "english": "System Operation",
          "title": "增壓控制與潤滑限制",
          "parent": "turbocharger",
          "locator": "PHAK C 版 · 7-14",
          "printedPage": "7-14",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=14",
          "paragraphs": [
            "Wastegate 可由自動感壓控制或手動安排調整，部分系統以引擎油壓驅動作動器。控制反應、油溫及高度改變可能影響 MAP，自動控制也不代表完全不會過度增壓。",
            "渦輪高速高溫運轉需要合適潤滑與熱管理，功率變更及關車要求應依引擎資料。原書的暖機與冷卻說明是原理背景，不應改寫為所有渦輪增壓引擎一律需要相同等待分鐘數。"
          ]
        },
        {
          "id": "turbo-altitude",
          "english": "High Altitude Performance",
          "title": "臨界高度與可維持功率",
          "parent": "turbocharger",
          "locator": "PHAK C 版 · 7-14",
          "printedPage": "7-14",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=14",
          "paragraphs": [
            "爬升時系統可逐漸減少繞流以維持設定進氣壓力，直到控制或壓縮能力達到限制。臨界高度描述在規定條件下能維持指定性能的高度界線，超過後不能再假定 MAP 或功率不變。",
            "臨界高度不是飛機最大操作高度，也不保證到那裡仍有足夠爬升率、供氧或其他裕度。實際表現還受溫度及系統狀態影響，若與手冊預期明顯不同，需查明原因而非加大設定補償。"
          ]
        },
        {
          "id": "ignition",
          "english": "Ignition System",
          "title": "磁電機、火星塞與獨立點火",
          "parent": null,
          "locator": "PHAK C 版 · 7-15",
          "printedPage": "7-15",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=15",
          "paragraphs": [
            "傳統磁電機由引擎帶動自行發電，通常不依賴主電池維持點火。雙磁電機各帶一組火星塞，兼顧可靠性與燃燒；選擇單側時的轉速變化需和核准檢查標準比較。",
            "磁電機關閉通常靠接地抑制點火，接地故障可能使開關看似 OFF 而仍有點火能力，因此主電源關閉不代表螺旋槳可安全搬動。電子點火與 FADEC 的依賴不同，不可直接套用磁電機獨立供電的結論。"
          ]
        },
        {
          "id": "oil",
          "english": "Oil Systems",
          "title": "潤滑、散熱與油壓",
          "parent": null,
          "locator": "PHAK C 版 · 7-16",
          "printedPage": "7-16",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=16",
          "paragraphs": [
            "滑油降低摩擦、帶走部分熱量，並可協助密封、清潔或驅動特定部件。濕式油底殼把油儲在引擎下方，乾式系統另有油箱及回油安排；油量檢查時機與方式因此可能不同。",
            "油壓、油溫與油量回答不同問題，有壓力不等於存量足夠，低溫也不保證潤滑正常。自編例：油壓異常並伴隨溫度變化時應依程序處置，不能只補看另一支正常表便忽略警訊。"
          ]
        },
        {
          "id": "cooling",
          "english": "Engine Cooling Systems",
          "title": "引擎冷卻與氣流管理",
          "parent": null,
          "locator": "PHAK C 版 · 7-17",
          "printedPage": "7-17",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=17",
          "paragraphs": [
            "氣冷引擎利用鰭片、導流隔板與罩內氣流帶走熱量，液冷則透過冷卻液及散熱器轉移熱量。系統需要有效流路，外界很冷或速度很快也不代表所有汽缸自然得到足夠冷卻。",
            "CHT 反映汽缸頭溫度，油溫反映另一部分熱狀態；功率、混合比、空速與 cowl flap 等可能影響冷卻。如何調整必須依機型，不可把單一熱管理口訣套到所有引擎。"
          ]
        },
        {
          "id": "exhaust",
          "english": "Exhaust Systems",
          "title": "排氣、熱交換與洩漏",
          "parent": null,
          "locator": "PHAK C 版 · 7-18",
          "printedPage": "7-18",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=18",
          "paragraphs": [
            "排氣系統將高溫燃燒產物導離引擎及機體，可能同時驅動渦輪或為熱交換提供熱源。用排氣管外部熱量加熱座艙空氣，不代表把廢氣正常送進座艙。",
            "裂損可能造成熱損傷、火災或廢氣進入座艙，不能因引擎功率看似正常就忽略。排氣氣味也不是可靠的一氧化碳量測方式；教材著重辨識流路隔離，疑似洩漏須依機型異常程序與檢修資料處理。"
          ]
        },
        {
          "id": "starting",
          "english": "Starting System",
          "title": "起動馬達與供電",
          "parent": null,
          "locator": "PHAK C 版 · 7-18",
          "printedPage": "7-18",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=18",
          "paragraphs": [
            "起動系統以電池或外部電源供能，經接觸器帶動起動馬達使曲軸轉動，讓進氣、供油和點火建立自持運轉。馬達、起動控制電路與引擎持續點火不是同一件事。",
            "起動馬達具有運轉時間及冷卻限制，未起動成功不能無限連續帶轉。自編例：主電源有燈光不代表電池能承受起動負荷；起動前後仍需依程序確認人員淨空、指示及馬達是否解除嚙合。"
          ]
        },
        {
          "id": "combustion",
          "english": "Combustion",
          "title": "正常燃燒、爆震與提前點火",
          "parent": null,
          "locator": "PHAK C 版 · 7-18",
          "printedPage": "7-18",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=18",
          "paragraphs": [
            "正常火花點火燃燒由火焰有序傳播，壓力配合活塞行程建立。爆震涉及未燃混合氣異常自燃及壓力波；提前點火則在正常點火時刻之前被熱點等引燃，兩者原因與發生時序不同。",
            "兩種異常可能互相促成並造成高溫與損傷，僅憑座艙徵兆未必能準確分辨。燃油抗爆性、功率與溫度限制應一起遵守；不是只把混合比調到某一端就能保證免除所有異常燃燒。"
          ]
        },
        {
          "id": "fadec",
          "english": "Full Authority Digital Engine Control (FADEC)",
          "title": "全權限數位引擎控制",
          "parent": null,
          "locator": "PHAK C 版 · 7-20",
          "printedPage": "7-20",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=20",
          "paragraphs": [
            "FADEC 依感測資料及控制邏輯管理引擎燃油、點火或其他參數，具體功能依引擎而異，部分系統整合螺旋槳控制。減少手動調整不代表機師不需監控，只是日常控制角色不同。",
            "控制電源、備援通道及感測器是系統的重要依賴，雙通道也不表示所有共同來源失效都可排除。自編例：不能把傳統磁電機引擎不依賴主電池的特性直接套到 FADEC，須查其獨立供電和故障限制。"
          ]
        },
        {
          "id": "turbines",
          "english": "Turbine Engines",
          "title": "渦輪引擎的連續流動",
          "parent": null,
          "locator": "PHAK C 版 · 7-20",
          "printedPage": "7-20",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=20",
          "paragraphs": [
            "渦輪引擎經進氣、壓縮、燃燒、渦輪與排氣連續處理氣流；渦輪從熱氣流取出功以帶動壓縮機和負載。這與活塞在同一汽缸內依時間進行各行程不同。",
            "引擎可把更多能量留給噴流、風扇或輸出軸，不同用途形成不同型式。燃燒是否維持、轉軸是否轉動及是否有足夠推力也不是同一判斷，不能只看一個轉速仍存在就認為引擎正常。"
          ]
        },
        {
          "id": "turbine-types",
          "english": "Types of Turbine Engines",
          "title": "渦輪引擎的分類",
          "parent": "turbines",
          "locator": "PHAK C 版 · 7-20",
          "printedPage": "7-20",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=20",
          "paragraphs": [
            "壓縮機可採離心式、軸流式或混合配置，描述的是如何壓縮進氣。Turbojet、turbofan、turboprop、turboshaft 則按推進及功率使用方式分類，兩組分類不是互斥選項。",
            "自編例：知道引擎使用軸流壓縮機，仍不足以判斷它主要驅動螺旋槳還是以噴流產生推力。應先辨識核心，再追蹤能量送到哪個推進裝置。"
          ]
        },
        {
          "id": "turbojet",
          "english": "Turbojet",
          "title": "渦輪噴射引擎",
          "parent": "turbine-types",
          "locator": "PHAK C 版 · 7-20",
          "printedPage": "7-20",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=20",
          "paragraphs": [
            "渦輪噴射引擎主要利用通過核心後的高速排氣提供推力，渦輪先抽取維持壓縮機等所需的功。推力來自氣流動量及出口壓力作用，不是渦輪葉片本身推著機身前進。",
            "其性能與速度及環境有關，不能只用最大額定推力比較全航程效率。自編辨別：噴流速度較高不必然適合所有低速任務，要連同整個飛行需求看待。"
          ]
        },
        {
          "id": "turboprop",
          "english": "Turboprop",
          "title": "渦輪螺旋槳引擎",
          "parent": "turbine-types",
          "locator": "PHAK C 版 · 7-21",
          "printedPage": "7-21",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=21",
          "paragraphs": [
            "渦輪螺旋槳引擎將主要可用功經軸及減速機構送到螺旋槳，排氣也可能貢獻部分推力。減速機構讓渦輪與槳各在適當轉速工作，因此兩者 RPM 不必相同。",
            "常見操作需同時關注扭矩、溫度及槳或核心轉速，並非只用一個油門位置判斷輸出。定速、順槳、反推等功能和限制依機型，不能由有螺旋槳便推定全部具備。"
          ]
        },
        {
          "id": "turbofan",
          "english": "Turbofan",
          "title": "渦輪風扇引擎",
          "parent": "turbine-types",
          "locator": "PHAK C 版 · 7-21",
          "printedPage": "7-21",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=21",
          "paragraphs": [
            "渦輪風扇引擎由核心供能驅動風扇，部分氣流通過核心、部分旁通核心。旁通比描述兩股流量的比例，風扇流與核心流共同影響推力及效率。",
            "不能把旁通氣流當成沒有做功的廢氣，或把風扇只視為冷卻裝置。不同旁通比和設計適合不同任務，原書示意圖用於理解路徑，並不是所有渦扇引擎的固定推力分配。"
          ]
        },
        {
          "id": "turboshaft",
          "english": "Turboshaft",
          "title": "渦輪軸引擎",
          "parent": "turbine-types",
          "locator": "PHAK C 版 · 7-21",
          "printedPage": "7-21",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=21",
          "paragraphs": [
            "渦輪軸引擎以輸出軸功率為主要用途，例如驅動直升機旋翼。部分設計使用自由動力渦輪，使負載轉軸與氣體產生器可在不同轉速下運作。",
            "旋翼或其他負載的控制還需與傳動及調速系統配合，不能把氣體產生器轉速等同旋翼轉速。自編練習：沿能量路徑指出哪一段維持引擎本身、哪一段輸出到外部負載。"
          ]
        },
        {
          "id": "turbine-instruments",
          "english": "Turbine Engine Instruments",
          "title": "渦輪儀表：各自量什麼",
          "parent": "turbines",
          "locator": "PHAK C 版 · 7-22",
          "printedPage": "7-22",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=22",
          "paragraphs": [
            "渦輪引擎儀表可表示壓力比、氣流溫度、扭矩及各轉軸速度，不同引擎選用的主要設定參考不同。它們之間有關聯，但不能互相當作同一個量的不同名稱。",
            "自編例：達到目標 N1 不表示溫度必然在限制內，扭矩未超限也不代表槳轉速正常。應以所屬機型的限制及指示組合判斷，並注意目前是起動、起飛還是持續運轉。"
          ]
        },
        {
          "id": "epr",
          "english": "Engine Pressure Ratio (EPR)",
          "title": "引擎壓力比",
          "parent": "turbine-instruments",
          "locator": "PHAK C 版 · 7-22",
          "printedPage": "7-22",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=22",
          "paragraphs": [
            "EPR 是指定排出端與進氣端壓力的比值，部分引擎用它作為推力設定參考。它是比值而非某條管路的單一壓力，也不是直接以力的單位量到實際推力。",
            "測點及補償方式依系統，環境及探頭狀態可能影響解讀。自編例：不同引擎相同 EPR 不保證相同推力，因此不能將一架飛機的設定值直接用在另一架。"
          ]
        },
        {
          "id": "egt",
          "english": "Exhaust Gas Temperature (EGT)",
          "title": "排氣及渦輪氣流溫度",
          "parent": "turbine-instruments",
          "locator": "PHAK C 版 · 7-22",
          "printedPage": "7-22",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=22",
          "paragraphs": [
            "EGT、ITT、TIT、TOT 等名稱反映不同測溫位置，常用來監控熱限制及引擎狀態。表上的數字不一定是整個引擎最熱零件的實際溫度，但與核准限制相配合。",
            "各位置的數值不能直接互換，起動與持續運轉也可能有不同門檻及允許時間。自編例：不能把另一型引擎的 EGT 紅線套到本機 ITT，應確認儀表名稱、單位與限制階段。"
          ]
        },
        {
          "id": "torquemeter",
          "english": "Torquemeter",
          "title": "扭矩表與軸功率",
          "parent": "turbine-instruments",
          "locator": "PHAK C 版 · 7-22",
          "printedPage": "7-22",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=22",
          "paragraphs": [
            "扭矩表量測或推算輸出軸上的扭轉作用，可用百分比、力矩或經校準的壓力單位顯示。軸功率需由扭矩乘角速度得到，扭矩和功率的物理意義不能直接畫上等號。",
            "在轉速固定的工況下，扭矩可方便地反映功率變化，但轉速改變時需要重新比較。自編例：相同扭矩、不同轉速的兩個狀態，不保證輸出軸功率相同。"
          ]
        },
        {
          "id": "n1",
          "english": "N1 Indicator",
          "title": "N1 轉速指示",
          "parent": "turbine-instruments",
          "locator": "PHAK C 版 · 7-23",
          "printedPage": "7-23",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=23",
          "paragraphs": [
            "原書雙轉子軸流引擎例子中，N1 表示低壓轉子速度，以設計參考 RPM 的百分比顯示，常涉及風扇或低壓壓縮機。百分比是相對參考值，不是節氣門開度。",
            "不同引擎的命名可能不同，尤其氣體產生器或自由渦輪系統需依資料確認。自編例：N1 100% 不應自動解讀成「所有限制都恰好達到最大」或任何引擎都同一實際轉速。"
          ]
        },
        {
          "id": "n2",
          "english": "N2 Indicator",
          "title": "N2 轉速指示",
          "parent": "turbine-instruments",
          "locator": "PHAK C 版 · 7-23",
          "printedPage": "7-23",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=23",
          "paragraphs": [
            "原書雙轉子例子以 N2 表示高壓轉子速度，其渦輪和壓縮機以同軸配置的另一根軸相連，可與低壓轉子不同速。它能提供起動加速與核心運轉的重要資訊。",
            "N1 和 N2 不是兩具引擎的編號，也不是兩支儀表必須保持相同百分比。實際起動應監控哪個轉軸、何時供油及起動完成條件皆依機型，不由名稱自行推定。"
          ]
        },
        {
          "id": "turbine-operation",
          "english": "Turbine Engine Operational Considerations",
          "title": "渦輪運轉的交叉監控",
          "parent": "turbines",
          "locator": "PHAK C 版 · 7-23",
          "printedPage": "7-23",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=23",
          "paragraphs": [
            "渦輪運轉需同時維持適當氣流、燃油、點火與轉速關係，並受溫度、機械及其他限制約束。起動、加速、穩態及減速時的瞬態不同，不能只套用巡航的正常指示。",
            "本節整理過熱、異物、起動異常、壓縮機失速與熄火的辨識概念。具體中止起動或恢復方式須依檢查單，不將書中的概述排列成任何機型都能照做的緊急程序。"
          ]
        },
        {
          "id": "temperature-limits",
          "english": "Engine Temperature Limitations",
          "title": "引擎熱限制",
          "parent": "turbine-operation",
          "locator": "PHAK C 版 · 7-23",
          "printedPage": "7-23",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=23",
          "paragraphs": [
            "渦輪熱端受到高溫氣流和旋轉負荷作用，溫度限制保護材料與零件壽命。監控儀表可能設在不同位置，必須使用該位置對應的限制，不能用另一支較低溫的表證明安全。",
            "瞬間峰值、持續時間及運轉階段都可能影響超限判斷。自編例：起動時短暫超過規定界線，即使之後恢復正常，也不能自行當作沒有事件，需依手冊處理與檢查。"
          ]
        },
        {
          "id": "thrust-variation",
          "english": "Thrust Variations",
          "title": "環境與可用推力",
          "parent": "turbine-operation",
          "locator": "PHAK C 版 · 7-23",
          "printedPage": "7-23",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=23",
          "paragraphs": [
            "氣溫、壓力、流量與引擎控制限制共同影響可用推力。高溫或高地常降低可用性能，但額定控制及 flat-rating 可能在部分範圍維持特定輸出，因此不能對所有條件套用單一密度比例。",
            "自編例：相同推力手柄位置在不同日子不一定得到相同推力或爬升能力。性能應依重量與環境資料計算，不能只因儀表接近上次讀值就沿用上次的越障判斷。"
          ]
        },
        {
          "id": "fod",
          "english": "Foreign Object Damage (FOD)",
          "title": "異物損傷",
          "parent": "turbine-operation",
          "locator": "PHAK C 版 · 7-23",
          "printedPage": "7-23",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=23",
          "paragraphs": [
            "石粒、工具、冰或鳥等異物進入引擎可損害葉片、改變氣流並造成失效。地面進氣吸力及某些入口渦流使跑道或機坪上的小物也有影響，並非只有大型鳥擊才算 FOD。",
            "預防從淨空、作業環境及規定檢查做起；沒有明顯振動不代表吸入後必然無損。自編例：發現新葉片缺口或已知吸入事件，應依檢修要求確認，而不是自行用外觀大小決定可接受性。"
          ]
        },
        {
          "id": "hot-hung",
          "english": "Turbine Engine Hot/Hung Start",
          "title": "熱起動與懸滯起動",
          "parent": "turbine-operation",
          "locator": "PHAK C 版 · 7-23",
          "printedPage": "7-23",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=23",
          "paragraphs": [
            "Hot start 是起動溫度超過適用限制，可能與燃油和氣流不匹配有關；hung start 則是已點火卻未能正常加速至所需自持轉速。兩者描述不同指示，也可能在同一事件中交互出現。",
            "只看到有點火或溫度上升，不代表起動已成功，需追蹤轉速、溫度及時間。中止、吹轉、重試與維修判定均依機型程序，不能自訂多等幾秒或反覆重新供油來碰運氣。"
          ]
        },
        {
          "id": "compressor-stall",
          "english": "Compressor Stalls",
          "title": "壓縮機失速與流動失配",
          "parent": "turbine-operation",
          "locator": "PHAK C 版 · 7-23",
          "printedPage": "7-23",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=23",
          "paragraphs": [
            "壓縮機葉片也是翼型，入流與轉速不匹配可能使局部迎角過大並分離，降低壓縮能力。嚴重時系統可出現大幅壓力及流量振盪，甚至倒流，常以聲響、振動或指示變化表現。",
            "局部失速和整體 surge 的細節不同，不是每一次輕微指示都代表同等嚴重。可變導流葉片等設計有助維持裕度，但不消除所有情況；發生異常須依該引擎程序，而非套用通用加速或減速口訣。"
          ]
        },
        {
          "id": "flameout",
          "english": "Flameout",
          "title": "燃燒熄火與重新點火條件",
          "parent": "turbine-operation",
          "locator": "PHAK C 版 · 7-24",
          "printedPage": "7-24",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=24",
          "paragraphs": [
            "Flameout 指引擎燃燒意外中斷，可能由供油中斷、混合與流動條件不合或其他因素造成。即使轉子因慣性或風車效應仍轉動，也不能據此認定正在燃燒或提供正常推力。",
            "空中重新點火需要合適高度、速度、轉速及系統條件，不是只把點火開關打開便必然恢復。自編例：若原因是燃油供應本身未恢復，重複點火並不能消除根因，須依檢查單與性能條件處置。"
          ]
        },
        {
          "id": "performance-comparison",
          "english": "Performance Comparison",
          "title": "比較推力與功率",
          "parent": "turbines",
          "locator": "PHAK C 版 · 7-24",
          "printedPage": "7-24",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=24",
          "paragraphs": [
            "比較動力系統要把軸功率、推進功率和淨推力的定義分清楚。推進功率涉及推力乘速度，螺旋槳效率又連結軸功率，因此不同單位的額定數字不能直接判斷哪一種引擎「比較強」。",
            "原圖是在概念上比較速度範圍與推力曲線，並非特定引擎測試資料。若飛機大小、阻力或任務不同，結果也不能直接比較；應先說明比較的是爬升、巡航速度、油耗還是其他目標。"
          ]
        },
        {
          "id": "airframe",
          "english": "Airframe Systems",
          "title": "機體系統的相互依賴",
          "parent": null,
          "locator": "PHAK C 版 · 7-25",
          "printedPage": "7-25",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=25",
          "paragraphs": [
            "機體系統把燃油、電力、液壓及環境控制等能力分配到飛機各處。它們常共享能源或訊號，因此一個源頭失效可能同時影響看似無關的裝置，備援也可能只保留部分功能。",
            "自編練習：從一個已知負載反向追蹤其泵、母線或引氣來源，再確認備援走哪條路。這比只背每個開關名稱更能理解為什麼異常檢查單會要求減載或隔離。"
          ]
        },
        {
          "id": "fuel",
          "english": "Fuel Systems",
          "title": "燃油從油箱到引擎",
          "parent": null,
          "locator": "PHAK C 版 · 7-25",
          "printedPage": "7-25",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=25",
          "paragraphs": [
            "燃油系統儲存、選擇、過濾並輸送合格燃油到引擎，重點是可用燃油能否以所需壓力及流量送達。油箱內有油只是起點，不代表所有姿態和選擇位置都能持續供油。",
            "Fuel exhaustion 是燃油耗盡，fuel starvation 則可在別處仍有油時因路徑或選擇問題斷供。自編例：選到空油箱與整機無油的儀表結果可能相似，但剩餘資源與原因不同。"
          ]
        },
        {
          "id": "gravity",
          "english": "Gravity-Feed System",
          "title": "重力供油",
          "parent": "fuel",
          "locator": "PHAK C 版 · 7-25",
          "printedPage": "7-25",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=25",
          "paragraphs": [
            "重力供油利用油箱相對引擎的高度差提供供油壓差，常見於某些高翼配置。管路、通氣及燃油選擇閥仍需正常，不能把「沒有泵」解讀為不存在供油失效。",
            "油箱通氣阻塞可影響燃油流出，姿態及可用油量亦受設計限制。自編例：看到油箱位置較高，仍需查系統圖確認是否全程重力供油及是否存在輔助泵，而非由外形下結論。"
          ]
        },
        {
          "id": "fuel-pump",
          "english": "Fuel-Pump System",
          "title": "燃油泵系統",
          "parent": "fuel",
          "locator": "PHAK C 版 · 7-25",
          "printedPage": "7-25",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=25",
          "paragraphs": [
            "泵供油利用引擎驅動或電動泵建立所需壓力，可能設輔助泵以支援起動、特定階段或異常。泵的串並聯、旁通及控制邏輯依機型而異，開啟某泵不一定能克服所有故障。",
            "自編例：輔助泵正在運轉的聲音不能證明引擎入口已得到足夠供油。應看適用壓力或流量指示，使用時機及失效程序依手冊，不能一概認為多開一個泵一定更安全。"
          ]
        },
        {
          "id": "primer",
          "english": "Fuel Primer",
          "title": "起動注油器",
          "parent": "fuel",
          "locator": "PHAK C 版 · 7-25",
          "printedPage": "7-25",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=25",
          "paragraphs": [
            "Primer 將少量燃油送到適當進氣位置以協助起動，與正常運轉的連續計量供油不同。需要量受溫度、引擎和起動狀態影響，不能把每次起動都固定推拉同樣次數當成原理。",
            "手動注油器通常需要按設計回位及鎖定，避免不正常供油；過量注油也可能造成淹油或火災風險。自編例：起動不順應先按程序辨別冷機、熱機或淹油，不能持續追加燃油。"
          ]
        },
        {
          "id": "tanks",
          "english": "Fuel Tanks",
          "title": "油箱、通氣與可用量",
          "parent": "fuel",
          "locator": "PHAK C 版 · 7-25",
          "printedPage": "7-25",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=25",
          "paragraphs": [
            "油箱除了儲油，還需通氣、膨脹空間及適當出口安排，部分位於翼內或結構中。總容量、可用燃油與不可用燃油不同，規定姿態下無法可靠送達的部分不能列入可用航程。",
            "自編例：加到目視很滿也不能自行假設等於手冊的可用容量，機身姿態與指定加油位置都會影響判讀。通氣口、油蓋和洩漏狀態同樣是供油可靠性的一部分。"
          ]
        },
        {
          "id": "fuel-gauges",
          "english": "Fuel Gauges",
          "title": "燃油量指示與交叉確認",
          "parent": "fuel",
          "locator": "PHAK C 版 · 7-26",
          "printedPage": "7-26",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=26",
          "paragraphs": [
            "燃油量表以感測器估計油箱存量，可能受姿態、系統設計及故障影響。流量積算器則從已設定的起始量扣除計算耗油，與直接量油箱是不同資訊來源。",
            "兩者應配合目視或核准量測、加油紀錄及耗油計畫交叉檢查，不能把「油量表只在空時準」當成可忽略異常的理由。積算器起始量輸錯也可能一直顯示看似合理卻不正確的剩餘量。"
          ]
        },
        {
          "id": "selectors",
          "english": "Fuel Selectors",
          "title": "燃油選擇器",
          "parent": "fuel",
          "locator": "PHAK C 版 · 7-26",
          "printedPage": "7-26",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=26",
          "paragraphs": [
            "選擇器決定從哪個油箱或路徑供油，位置可能有 LEFT、RIGHT、BOTH、OFF 或其他安排，但不是每架飛機都有同樣選項。手柄方向、定位及指示都需依實際裝置辨識。",
            "自編例：某機型允許 BOTH 起飛，不代表另一架的左右選擇系統也能這樣使用。切換後要依程序確認位置及供油反應，不能在不熟悉標示時猜測，也不能把交輸與轉移燃油視為同一功能。"
          ]
        },
        {
          "id": "strainers",
          "english": "Fuel Strainers, Sumps, and Drains",
          "title": "濾網、低點與放油檢查",
          "parent": "fuel",
          "locator": "PHAK C 版 · 7-27",
          "printedPage": "7-27",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=27",
          "paragraphs": [
            "Sump 是讓游離水或沉積物可能聚集的低點，drain 提供取樣排放，strainer 則過濾指定污染物。各油箱與管路可能有多個取樣點，單一取樣乾淨不能保證其他位置也正常。",
            "應依機型使用合適容器及完整取樣程序辨識燃油、水和顆粒，發現污染需查明並處理。低溫凍結或姿態可使水未流到取樣點，因此不能把一次清澈樣本當成排除所有供油問題的證明。"
          ]
        },
        {
          "id": "grades",
          "english": "Fuel Grades",
          "title": "燃油牌號與核准相容性",
          "parent": "fuel",
          "locator": "PHAK C 版 · 7-27",
          "printedPage": "7-27",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=27",
          "paragraphs": [
            "AVGAS 的牌號涉及抗爆性能，不代表熱量、燃燒溫度或品質高低的通用排名；Jet fuel 與航空汽油亦不能任意互換。有些壓燃活塞引擎使用核准的噴射燃油，不能僅按是否有螺旋槳選油。",
            "使用哪種燃油必須核對引擎及航空器核准資料、標牌和適用補充核准。顏色與氣味僅是辨識線索，不足以證明正確，無鉛燃油也不能僅憑辛烷值相近便視為適用。"
          ],
          "references": [
            {
              "title": "FAA：航空汽油無鉛轉換與核准途徑",
              "url": "https://www.faa.gov/unleaded",
              "checked": "2026-09-10"
            }
          ],
          "currentNote": "查閱 2026-09-10：原書牌號表不是目前所有燃油的完整清單。無鉛燃油等選項仍需確認航空器及引擎的適用核准，不將原書「使用下一個較高牌號」當成通用替代授權。"
        },
        {
          "id": "contamination",
          "english": "Fuel Contamination",
          "title": "燃油污染與水的辨識",
          "parent": "fuel",
          "locator": "PHAK C 版 · 7-27",
          "printedPage": "7-27",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=27",
          "paragraphs": [
            "污染可包括水、顆粒或錯誤燃油，來源可能是加油、儲存、油蓋或系統狀態。游離水常沉在燃油下方，微小懸浮水則可能造成混濁；完全清澈也不能單靠外觀排除全水樣本或其他污染。",
            "自編例：首次取樣出水後，不應只倒掉那杯便繼續飛行，要依程序確認各低點及污染原因。加油來源、沉降時間、取樣與維修需共同控制，不能把任何臨時濾布都當成可靠除水設備。"
          ]
        },
        {
          "id": "fuel-icing",
          "english": "Fuel System Icing",
          "title": "燃油中的水如何結冰",
          "parent": "fuel",
          "locator": "PHAK C 版 · 7-28",
          "printedPage": "7-28",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=28",
          "paragraphs": [
            "燃油系統結冰多與水有關：游離水、懸浮微滴和溶解水是不同狀態。溫度下降可使部分溶解水析出，形成微滴或冰晶，堵塞濾網與管路，即使不處於典型化油器結冰條件也可能發生。",
            "放油能處理某些低點游離水，卻不能保證去除所有溶解水。自編辨別：化油器加熱處理進氣內部冰，不等於已解決油箱或濾芯中的結冰，應先確認異常發生的系統位置。"
          ]
        },
        {
          "id": "fuel-ice-prevention",
          "english": "Prevention Procedures",
          "title": "燃油結冰的預防條件",
          "parent": "fuel-icing",
          "locator": "PHAK C 版 · 7-28",
          "printedPage": "7-28",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=28",
          "paragraphs": [
            "預防燃油結冰需依系統控制水分、燃油溫度及適用防冰方式，部分機型可使用核准添加劑或加熱系統。添加劑適用性、濃度與混合方式具有明確資料，不能自行猜比例。",
            "原書列舉的是特定燃料及系統背景，不代表所有引擎都可加酒精或同一種抑冰劑。自編例：選購標為防冰的產品後，仍須確認該燃油、引擎及航空器是否允許，而非只看商品用途。"
          ]
        },
        {
          "id": "refueling",
          "english": "Refueling Procedures",
          "title": "加油時的辨識與靜電控制",
          "parent": null,
          "locator": "PHAK C 版 · 7-29",
          "printedPage": "7-29",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=29",
          "paragraphs": [
            "加油需確認正確燃油、所需數量及航空器適用程序，並控制點火源與靜電。Bonding 讓加油設備和航空器之間維持電位連接，與單純把其中一方接地不是同一概念，不能互相當作替代。",
            "實際連接順序、設備、引擎及電氣狀態依核准程序和作業規定。自編例：油車停在旁邊且油槍能插入，不代表燃料相容或靜電控制已完成，加油後還須依程序確認油蓋、數量及污染檢查。"
          ]
        },
        {
          "id": "heating",
          "english": "Heating System",
          "title": "座艙加熱的熱源與隔離",
          "parent": null,
          "locator": "PHAK C 版 · 7-29",
          "printedPage": "7-29",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=29",
          "paragraphs": [
            "座艙加熱可能來自燃油燃燒、排氣熱交換或壓縮機引氣，目的都是把熱量送到可呼吸的座艙氣流。需要分辨熱源、通風流及廢氣路徑，不能把熱源所在流體當成直接送入座艙的流體。",
            "各系統有不同控制、過熱保護與檢查要求，同樣開啟 cabin heat 不代表內部機制相同。自編例：加熱不正常時應先按機型資料辨識熱源，而非一律判成引擎冷卻故障。"
          ]
        },
        {
          "id": "fuel-heater",
          "english": "Fuel Fired Heaters",
          "title": "燃油加熱器",
          "parent": "heating",
          "locator": "PHAK C 版 · 7-29",
          "printedPage": "7-29",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=29",
          "paragraphs": [
            "燃油加熱器以專用燃燒室產生熱量，風扇將另一股空氣流經熱交換表面後送入座艙。它通常還依賴電力、點火及供油，並以通風和過熱保護控制燃燒條件。",
            "它與下方 combustion heater 的名稱有重疊，原書分節著重配置及保護，不應硬分成完全互斥技術。燃燒廢氣仍需和通風氣隔離，安全開關存在也不代表可以忽略洩漏、維修或異常警示。"
          ]
        },
        {
          "id": "exhaust-heating",
          "english": "Exhaust Heating Systems",
          "title": "排氣熱交換式暖氣",
          "parent": "heating",
          "locator": "PHAK C 版 · 7-29",
          "printedPage": "7-29",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=29",
          "paragraphs": [
            "此系統使乾淨空氣流過排氣管外部的熱交換區吸熱，再送入座艙或指定入口。正常情況下，排氣管內廢氣和供暖空氣不混合；故障重點之一是隔離表面是否完整。",
            "若排氣管裂損，廢氣可能污染暖氣流並形成一氧化碳風險。自編例：暖氣仍然很熱不代表隔離正常，應依檢查與異常程序判斷，不能用嗅覺或熱量大小取代完整性檢查。"
          ]
        },
        {
          "id": "combustion-heater",
          "english": "Combustion Heater Systems",
          "title": "燃燒式加熱器的控制循環",
          "parent": "heating",
          "locator": "PHAK C 版 · 7-29",
          "printedPage": "7-29",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=29",
          "paragraphs": [
            "原書此節進一步說明恆溫器、燃油電磁閥及過熱保護如何控制燃燒：需要熱量時供油燃燒，達到設定條件後停止供油，通風氣從燃燒室外側帶走熱量。",
            "某些壓差安排可降低廢氣外洩的機會，但不能據此保證完全沒有一氧化碳或火災風險。自編練習：在系統圖分別標出燃燒空氣、廢氣及座艙通風氣，確認故障時哪個閥或保護可以中止熱源。"
          ]
        },
        {
          "id": "bleed-heating",
          "english": "Bleed Air Heating Systems",
          "title": "引氣加熱",
          "parent": "heating",
          "locator": "PHAK C 版 · 7-30",
          "printedPage": "7-30",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=30",
          "paragraphs": [
            "引氣系統可從渦輪引擎壓縮機抽取熱的壓縮空氣，經調節、冷卻或混合後供應座艙。這是在燃燒之前取得的壓縮機氣流，不是把引擎排氣正常導入座艙。",
            "引氣可同時服務環境控制、防冰或其他負載，使用會影響引擎及系統能力，具體依設計而異。溫度感測、閥門與管路故障需按機型判斷，不能因引氣仍有壓力就假定送入座艙的溫度正確。"
          ]
        },
        {
          "id": "electrical",
          "english": "Electrical System",
          "title": "電源、母線與負載",
          "parent": null,
          "locator": "PHAK C 版 · 7-30",
          "printedPage": "7-30",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=30",
          "paragraphs": [
            "電氣系統以發電機或交流發電機、電池、調壓及母線向負載供電，保險絲和斷路器保護指定電路。電池可支援起動或備援，但容量有限；發電正常與電池仍有存量是不同問題。",
            "電流表可能顯示電池充放電，負載表則可能顯示發電輸出，須先理解接線位置。斷路器跳脫不能反覆復位當作修理，應按檢查單；電源失效後哪些儀表、泵及控制仍可用，要依母線與備援圖確認。"
          ]
        },
        {
          "id": "hydraulics",
          "english": "Hydraulic Systems",
          "title": "液壓：壓力、流量與作動",
          "parent": null,
          "locator": "PHAK C 版 · 7-31",
          "printedPage": "7-31",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=31",
          "paragraphs": [
            "液壓系統由油箱、泵、控制閥、管路與作動器傳遞能量，壓力配合作動面積產生力，流量影響動作速度。液壓油近似不可壓縮，但系統仍需洩壓、過濾及適用儲壓安排。",
            "不同液壓液未必相容，顏色也不是可混用的授權。自編例：油壓正常而某作動器不動，仍可能是選擇閥或局部故障；不能僅憑一支壓力表判定整個系統正常。"
          ]
        },
        {
          "id": "gear",
          "english": "Landing Gear",
          "title": "起落架系統",
          "parent": "hydraulics",
          "locator": "PHAK C 版 · 7-33",
          "printedPage": "7-33",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=33",
          "paragraphs": [
            "起落架支撐地面運動及承受接地負荷，可由輪胎、減震及結構分擔。可收放設計還需作動、鎖定、位置感測及警告系統，這些功能不能只用外觀看到輪子伸出來概括。",
            "本節列在液壓之後，但不表示所有起落架都用液壓收放。自編例：手柄選擇 DOWN 是命令，安全鎖定指示才是另一層回饋，具體確認方法與備用放下方式依機型。"
          ]
        },
        {
          "id": "tricycle",
          "english": "Tricycle Landing Gear",
          "title": "前三點式起落架",
          "parent": "gear",
          "locator": "PHAK C 版 · 7-33",
          "printedPage": "7-33",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=33",
          "paragraphs": [
            "鼻輪在前、兩主輪在後的配置通常具有較好的前方視野及地面方向穩定特性，主輪相對重心的位置是理解差異的關鍵。鼻輪可採連動轉向或自由偏轉等方式，不能一概而論。",
            "自編例：踩方向舵踏板不一定直接讓鼻輪按固定比例轉動，某些機型需配合差動煞車。正確轉向、接地與煞車方式仍取決於設計，不能因為是鼻輪機就忽略側風或鼻輪負荷限制。"
          ]
        },
        {
          "id": "tailwheel",
          "english": "Tailwheel Landing Gear",
          "title": "尾輪式起落架",
          "parent": "gear",
          "locator": "PHAK C 版 · 7-33",
          "printedPage": "7-33",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=33",
          "paragraphs": [
            "尾輪機的主輪通常在重心前方，地面偏離方向後的慣性與幾何關係可能加劇偏轉，需理解其方向控制特性。尾輪可轉向、鎖定或自由偏轉，取決於機型。",
            "機頭較高也影響前方視野與地面操縱，煞車及側風管理不能照搬鼻輪機經驗。自編例：地面滑跑仍需持續方向控制，不能因尾翼空氣動力穩定就假定地面偏轉一定自行恢復。"
          ]
        },
        {
          "id": "fixed-retractable",
          "english": "Fixed and Retractable Landing Gear",
          "title": "固定式與可收放起落架",
          "parent": "gear",
          "locator": "PHAK C 版 · 7-34",
          "printedPage": "7-34",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=34",
          "paragraphs": [
            "固定式簡化機構但保留外部阻力，可收放式以增加機構、重量及操作需求換取較低巡航阻力。收放裝置可能採電動、液壓或其他方式，且需適當鎖定。",
            "可用速度限制可能區分操作與已放下狀態，警告也不一定能涵蓋所有配置。自編例：沒有聽到警報不證明已放下鎖定，應依檢查單確認指示，異常放下程序不可跨機型套用。"
          ]
        },
        {
          "id": "brakes",
          "english": "Brakes",
          "title": "煞車與接地能量",
          "parent": "hydraulics",
          "locator": "PHAK C 版 · 7-34",
          "printedPage": "7-34",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=34",
          "paragraphs": [
            "煞車以摩擦把地面運動能量轉成熱量，常用液壓使煞車片壓向碟盤。差動煞車可協助地面方向控制，防滑系統若有則調節制動以管理輪胎滑移。",
            "煞車能力仍受輪胎附著、跑道和熱限制影響，不是腳踩更用力就必然更快停住。自編例：相同速度而重量增加，需吸收的能量也增加，因此落地重量、速度與冷卻要求都要考慮。"
          ]
        },
        {
          "id": "pressurization",
          "english": "Pressurized Aircraft",
          "title": "增壓、座艙高度與壓差",
          "parent": null,
          "locator": "PHAK C 版 · 7-34",
          "printedPage": "7-34",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=34",
          "paragraphs": [
            "增壓使座艙壓力高於外界，通常以持續進氣及控制排氣流量維持所需狀態。座艙高度是艙壓對應的標準高度，壓差是艙內外壓力差，座艙升降率則描述變化速度，三者不能互換。",
            "外界壓力隨爬升下降，維持固定艙壓會增加壓差，達限制後座艙高度可能必須上升。失壓可有不同速度，需依警示與機型緊急供氧及下降程序處置，不能因沒有巨響就排除危險，也不能把增壓當作增加氧氣比例。"
          ],
          "points": [
            "Outflow valve：控制排出的空氣以調節艙壓，不是氧氣供應閥。",
            "正壓與負壓保護：限制艙內外壓差的不同方向，保護結構。",
            "失壓辨識：交叉監控座艙高度、變化率、壓差及警告，不只看飛機高度。"
          ]
        },
        {
          "id": "oxygen",
          "english": "Oxygen Systems",
          "title": "氧氣來源、供應與適用要求",
          "parent": null,
          "locator": "PHAK C 版 · 7-37",
          "printedPage": "7-37",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=37",
          "paragraphs": [
            "供氧系統透過儲存來源、調節器、管路及面罩或鼻導管增加吸入氧氣，與座艙增壓是不同功能。可用量取決於容量、壓力、溫度、流量、使用人數及供應方式，不能只看壓力表還有指示。",
            "供氧的配備、提供及使用要求要按適用規則和座艙壓力高度辨識，法規門檻也不是個人不會缺氧的保證。本章建立設備原理，不以某個血氧讀值取代法規、機型供氧要求或醫療判斷。"
          ]
        },
        {
          "id": "masks",
          "english": "Oxygen Masks",
          "title": "面罩相容性與密合",
          "parent": "oxygen",
          "locator": "PHAK C 版 · 7-38",
          "printedPage": "7-38",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=38",
          "paragraphs": [
            "面罩需和調節器及供氧方式相容，機組面罩與乘客面罩可能有不同密合、通訊及佩戴設計。氧氣流得到面罩入口，不表示吸入者一定取得預期濃度，洩漏與佩戴狀態會影響結果。",
            "清潔、消毒及檢查應採設備製造商規定的方法，不能沿用舊教材中的通用化學配方。自編例：更換外觀相似的面罩前，仍需確認接頭、供應方式及核准用途，而非只看能否接上。"
          ]
        },
        {
          "id": "cannula",
          "english": "Cannula",
          "title": "鼻導管及其使用邊界",
          "parent": "oxygen",
          "locator": "PHAK C 版 · 7-38",
          "printedPage": "7-38",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=38",
          "paragraphs": [
            "鼻導管把氧氣送到鼻部，通常較輕便，但效果受呼吸方式、供氧裝置和環境影響。其適用高度及流量不是只按「有氧氣流出」判定，必須查該系統的核准範圍。",
            "自編例：口呼吸或未正常觸發需求式裝置時，使用者可能沒有得到預期供應。不能用鼻導管任意代替要求密合面罩的用途，指示正常亦需結合佩戴與系統檢查理解。"
          ]
        },
        {
          "id": "diluter-demand",
          "english": "Diluter-Demand Oxygen Systems",
          "title": "稀釋需求式供氧",
          "parent": "oxygen",
          "locator": "PHAK C 版 · 7-38",
          "printedPage": "7-38",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=38",
          "paragraphs": [
            "需求式系統在吸氣時供應氧氣，稀釋需求式可依調節器設定及條件混入座艙空氣，或提供較高氧濃度。這個正文標題補足連續流與壓力需求式之間的概念，不是固定每分鐘持續送相同流量。",
            "面罩密合及調節器功能會影響混合結果，不能僅把 100% 設定等同所有高度都足夠。系統適用界線與檢查方式依設備資料，亦不能把需求式誤認為一定由電池感測吸氣。"
          ],
          "supplementalHeading": true
        },
        {
          "id": "pressure-demand",
          "english": "Pressure-Demand Oxygen Systems",
          "title": "壓力需求式供氧",
          "parent": "oxygen",
          "locator": "PHAK C 版 · 7-38",
          "printedPage": "7-38",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=38",
          "paragraphs": [
            "壓力需求式在適用條件下向密合面罩供應正壓氧氣，和只在吸氣時提供混合氣的方式不同。重點不只是濃度，還包括供應壓力與面罩密合，可用於較高高度的特定需求。",
            "何時進入正壓、可用高度及緊急設定依設備，不應把原書示例數字當成所有調節器相同。自編例：面罩與調節器不匹配時，氣瓶有充足壓力也不能證明系統能提供所需保護。"
          ]
        },
        {
          "id": "continuous",
          "english": "Continuous-Flow Oxygen System",
          "title": "連續流供氧",
          "parent": "oxygen",
          "locator": "PHAK C 版 · 7-38",
          "printedPage": "7-38",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=38",
          "paragraphs": [
            "連續流系統在使用期間持續供氣，乘客面罩可能帶儲氣袋，在呼氣階段累積部分氧氣供下次吸氣使用。袋子與面罩閥門配合控制流向，不應把它當成完全封閉的呼吸循環。",
            "流量設定、可用時間與適用高度依系統，不能只以儲氣袋是否一直鼓起判定供氧正常。自編例：外觀相似的乘客面罩與需求式機組面罩，不一定可互換連接或使用。"
          ]
        },
        {
          "id": "pulse-demand",
          "english": "Electrical Pulse-Demand Oxygen System",
          "title": "電控脈衝需求式供氧",
          "parent": "oxygen",
          "locator": "PHAK C 版 · 7-38",
          "printedPage": "7-38",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=38",
          "paragraphs": [
            "脈衝需求式以感測吸氣在適當時段送出氧氣脈衝，降低非吸氣階段的浪費，部分設備還會依高度調整供應。節氧效果取決於呼吸與系統條件，不能保證固定節省比例。",
            "電源、感測、佩戴及觸發是否正常都是依賴，不能只確認氧氣瓶仍有壓力。自編例：若沒有偵測到吸氣，設備未必會按預期送氧，因此警告、備援與使用限制需在地面熟悉。"
          ]
        },
        {
          "id": "oximeter",
          "english": "Pulse Oximeters",
          "title": "血氧機：估計值與限制",
          "parent": "oxygen",
          "locator": "PHAK C 版 · 7-39",
          "printedPage": "7-39",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=39",
          "paragraphs": [
            "血氧機以光學訊號估計周邊血氧飽和度 SpO₂ 和脈搏，並非直接量血液氧分壓或證明全身供氧充足。FDA 提醒其有誤差與限制，包含皮膚色素、循環、溫度及使用條件等影響。",
            "它可作為輔助觀察，但不能以單次正常數字排除問題，或跳過供氧規則與機型要求。原書聲稱接近直接量測的固定精度不應當成所有裝置的保證；異常、症狀與飛行情境應綜合處理。"
          ],
          "references": [
            {
              "title": "FDA：Pulse Oximeters 的用途與限制",
              "url": "https://www.fda.gov/medical-devices/products-and-medical-procedures/pulse-oximeters",
              "checked": "2026-09-10"
            }
          ],
          "currentNote": "查閱 2026-09-10：FDA 說明血氧機是估計工具且存在誤差，不能把原書的固定精度描述或讀值單獨作為是否需要氧氣的依據。"
        },
        {
          "id": "oxygen-servicing",
          "english": "Servicing of Oxygen Systems",
          "title": "氧氣系統補充與清潔",
          "parent": "oxygen",
          "locator": "PHAK C 版 · 7-39",
          "printedPage": "7-39",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=39",
          "paragraphs": [
            "氧氣會強化燃燒，高壓設備與油脂污染的組合尤其需要避免。補充時使用適當規格的氣源、相容工具與清潔程序，不能把一般潤滑油或密封材料帶到氧氣接頭。",
            "壓力隨溫度改變，充填上限、檢驗週期及洩漏檢查均依設備和維修資料。這節解釋為何需要專門作業，並非提供自行充瓶步驟；飛行前使用者應按檢查單確認可用量、流量及設備狀態。"
          ]
        },
        {
          "id": "ice",
          "english": "Anti-Ice and Deice Systems",
          "title": "防冰與除冰的差異",
          "parent": null,
          "locator": "PHAK C 版 · 7-40",
          "printedPage": "7-40",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=40",
          "paragraphs": [
            "Anti-ice 以防止形成冰為目的，deice 則用於移除已形成的冰，某些裝置可具有兩種作用。保護位置可能是翼面、入口、螺旋槳或感測器，各自防護不能代替全機能力。",
            "有皮托管加熱不代表獲准在結冰條件飛行，有全套裝備也不等於任何結冰都可持續承受。應查核准條件、限制與脫離程序，不能把設備清單當成所有天氣的通行證。"
          ]
        },
        {
          "id": "airfoil-ice",
          "english": "Airfoil Anti-Ice and Deice",
          "title": "翼面防除冰方式",
          "parent": "ice",
          "locator": "PHAK C 版 · 7-40",
          "printedPage": "7-40",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=40",
          "paragraphs": [
            "充氣除冰靴以變形破裂冰層，熱防冰用引氣或電熱提高表面溫度，滲液翼則以指定液體降低積冰與附著。這些系統的能源、消耗品與指示不同，不能使用同一套啟動與檢查方式。",
            "除冰靴不應因過時的冰橋說法一律等待大量積冰才用，實際啟動依 AFM／POH。系統作動後仍可能有殘冰或未保護區積冰，應監控性能及環境，不能只見指示燈亮就認定機翼已完全恢復。"
          ]
        },
        {
          "id": "windscreen-ice",
          "english": "Windscreen Anti-Ice",
          "title": "風擋防冰",
          "parent": "ice",
          "locator": "PHAK C 版 · 7-41",
          "printedPage": "7-41",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=41",
          "paragraphs": [
            "風擋可用指定液體或導電加熱層維持視野，需控制溫度及供應狀態。加熱式的供電需求和保護範圍依設計，不能以普通除霧或座艙暖氣代替核准防冰功能。",
            "是否允許地面使用、何時開啟及可能的儀表影響均依機型。原書的地面禁用敘述不宜套到所有風擋系統；自編例：不同運輸機與小型機即使都有 windshield heat，也可能有不同的控制邏輯。"
          ]
        },
        {
          "id": "propeller-ice",
          "english": "Propeller Anti-Ice",
          "title": "螺旋槳防除冰",
          "parent": "ice",
          "locator": "PHAK C 版 · 7-41",
          "printedPage": "7-41",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=41",
          "paragraphs": [
            "螺旋槳可用電熱片或指定液體保護，部分系統分區循環加熱以管理功率。此處的加熱 boot 不應和機翼的充氣除冰靴當成相同作動方式，名稱相近但原理不同。",
            "各槳葉保護不均可能造成不平衡與振動，電流表的變化需按正常循環解讀。自編例：一段有電流不代表所有加熱區都正常，檢查及異常處置仍需核對系統指示與程序。"
          ]
        },
        {
          "id": "other-ice",
          "english": "Other Anti-Ice and Deice Systems",
          "title": "入口、感測器與通氣防冰",
          "parent": "ice",
          "locator": "PHAK C 版 · 7-41",
          "printedPage": "7-41",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=41",
          "paragraphs": [
            "皮托管、部分靜壓口、失速感測器、燃油通氣口及其他入口可採不同防冰安排，並非每個開口都一定有加熱。感測口結冰可能造成錯誤指示，與翼面升力損失是不同問題。",
            "自編練習：列出熟悉機型哪些部位受保護、依賴哪個電源或引氣，以及故障會失去哪類資訊。加熱功能檢查須按手冊，不能用手觸摸加熱表面或只看開關位置推定工作正常。"
          ]
        },
        {
          "id": "summary",
          "english": "Chapter Summary",
          "title": "全章統整：來源、路徑、控制與回饋",
          "parent": null,
          "locator": "PHAK C 版 · 7-41",
          "printedPage": "7-41",
          "source": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page=41",
          "paragraphs": [
            "本章將燃燒與推進連到機體所需的電力、液壓、熱及呼吸環境。掌握系統的方法是為每個系統列出來源、路徑、控制、指示及備援，再說明故障可能影響哪些其他功能。",
            "自編複習：解釋油箱有油卻供不到引擎、轉速穩定卻功率下降、氣瓶有壓力卻供氧不足，以及防冰開啟卻仍受結冰限制的可能原因。各題都應回到機型資料確認，而不是用單一正常指示作保證。"
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
        },
        {
          "title": "扭矩與功率",
          "clarification": "扭矩是軸上的扭轉作用，功率還需乘上角速度。",
          "example": "不同轉速下即使扭矩相同，軸功率也不一定相同。"
        },
        {
          "title": "燃油耗盡與供油中斷",
          "clarification": "耗盡是存量問題，斷供可能在其他油箱仍有油時因選擇或路徑造成。",
          "example": "選到空油箱不等於所有油箱都沒有油。"
        },
        {
          "title": "加熱空氣與燃燒廢氣",
          "clarification": "熱交換將熱量送入通風氣，正常設計並非將燃燒廢氣送入座艙。",
          "example": "排氣熱交換器裂損可污染供暖空氣，即使仍然有熱。"
        },
        {
          "title": "座艙高度與飛機高度",
          "clarification": "座艙高度由艙壓換算，增壓下可不同於外部高度。",
          "example": "飛機繼續爬升時，艙壓與壓差需同時符合限制。"
        },
        {
          "title": "有防冰設備與可飛結冰",
          "clarification": "設備保護範圍及核准限制不同，不代表所有結冰條件均可飛行。",
          "example": "皮托管加熱不會保護主翼的升力表面。"
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
      "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=161",
      "detailMode": "outline",
      "checked": "2026-09-10",
      "coverageNote": "涵蓋提供的 88 個目錄小節，另補正文 Diluter-Demand Oxygen Systems，共 89 節。每節保留英文原名、頁碼與 FAA 原文；中文解釋與案例為本站編寫。燃油及血氧機另附查核來源，操作、維修與供氧要求仍需對照適用資料。"
    },
    {
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
          "supplementalHeading": true
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
          "supplementalHeading": true
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
          "supplementalHeading": true
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
          "supplementalHeading": true
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
          "supplementalHeading": true
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
          "supplementalHeading": true
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
          "supplementalHeading": true
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
      "checked": "2026-09-11",
      "coverageNote": "涵蓋提供的 59 個目錄小節，另補正文七個磁羅盤誤差標題，共 66 節。每節有英文原名、中文解釋、頁碼與 FAA 原文。案例為本站編寫；原書特定儀表、地區與年代的描述會另作適用範圍說明。"
    },
    {
      "id": "phak25c-9",
      "number": 9,
      "title": "飛行手冊與相關文件",
      "english": "Flight Manuals and Other Documents",
      "section": "第 9 章；9-1～9-13，全章目錄逐節講解",
      "goal": "學會定位機型限制、程序、性能與適航資料。",
      "primer": "AFM／POH 涉及特定航空器的程序、限制與資料。先確認機型、序號適用範圍、修訂及裝備狀態，再使用裡面的內容；相似型號的手冊不能自動替代。",
      "terms": [
        "AFM · 飛行手冊",
        "POH · 操作手冊",
        "AD · 適航指令"
      ],
      "prompts": [
        "用本機手冊或學習範例找出一項限制、相應程序及一份補充，說明如何核對版本與適用性。",
        "設想年度仍有效但一項設備失效，列出需查的文件、規則及維修紀錄，說明為何不能只看年度日期。"
      ],
      "keyPoints": [
        "先核對 AFM／POH 的適用性、核准部分、修訂與補充，再使用限制與程序。",
        "登記、適航證書、檢查有效期與當下安全狀態是不同層次。",
        "年度與百小時的適用條件、曆月與使用時間計算需分開。",
        "失效設備不能只貼標籤；MEL 或 §91.213(d) 路徑各有條件。",
        "預防性維修工作權限、恢復使用簽放、AD 與紀錄需逐項核對。"
      ],
      "detailSections": [
        {
          "id": "introduction",
          "english": "Introduction",
          "title": "導論：文件如何支持飛行決策",
          "parent": null,
          "locator": "PHAK C 版 · 9-1",
          "printedPage": "9-1",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=1",
          "paragraphs": [
            "本章以美國 FAA 制度說明飛行手冊、登記、適航與維修文件。閱讀文件不是只確認它存在，而是核對它是否適用這架飛機、是否有效，以及是否支持今天計畫進行的操作。",
            "PHAK 提供共同知識，實際機型的核准資料提供操作依據，現行法規則決定適用要求。自編例：網站上的同型機 POH 可以協助學習，但不能直接替代本機最新重量平衡、改裝補充與限制。"
          ]
        },
        {
          "id": "afm",
          "english": "Airplane Flight Manuals (AFM)",
          "title": "AFM、POH 與一般參考手冊",
          "parent": null,
          "locator": "PHAK C 版 · 9-1",
          "printedPage": "9-1",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=1",
          "paragraphs": [
            "AFM 是經核准的飛行手冊，POH 則是製造商編製的操作手冊，可能包含被核准為 AFM 的部分。封面叫 POH 並不表示每頁都是核准內容，也不表示所有年代的飛機都採相同格式。",
            "一般 owner／information manual 可作概念參考，但若未反映本機適用性、修訂與設備，就不能當成其所需飛行手冊。閱讀時先核對核准聲明、序號範圍與補充文件，再使用限制和程序。"
          ],
          "supplementalHeading": true,
          "references": [
            {
              "title": "14 CFR §91.9",
              "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-A/section-91.9",
              "checked": "2026-09-11"
            }
          ]
        },
        {
          "id": "preliminary",
          "english": "Preliminary Pages",
          "title": "前置頁：適用性與修訂狀態",
          "parent": "afm",
          "locator": "PHAK C 版 · 9-2",
          "printedPage": "9-2",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=2",
          "paragraphs": [
            "前置頁通常包含機型識別、適用序號、核准聲明、目錄及修訂資訊，幫助確認拿到的是哪一版資料。相同機型名稱仍可能有不同引擎、儀表、設備或改裝，不能只比對封面照片。",
            "以有效頁清單、修訂紀錄及適用補充資料核對完整性，比單看一本書是否新印更可靠。自編例：主手冊已更新但仍夾著舊版自動駕駛補充，使用程序前必須先釐清適用版本。"
          ]
        },
        {
          "id": "general",
          "english": "General (Section 1)",
          "title": "一般資料與術語",
          "parent": "afm",
          "locator": "PHAK C 版 · 9-2",
          "printedPage": "9-2",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=2",
          "paragraphs": [
            "一般資料介紹機體、引擎、尺寸、容量與術語，建立閱讀後續表格所需的共同語言。翼展與高度可協助地面空間判斷，符號、單位及速度定義則直接影響操作和性能計算。",
            "同一縮寫或容量可能有特定定義，例如總燃油量與可用燃油量不能互換。自編練習：先查手冊如何定義基本空重及速度單位，再讀重量平衡和起飛表，避免拿對數字卻用錯意義。"
          ]
        },
        {
          "id": "limitations",
          "english": "Limitations (Section 2)",
          "title": "限制與核准操作範圍",
          "parent": "afm",
          "locator": "PHAK C 版 · 9-2",
          "printedPage": "9-2",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=2",
          "paragraphs": [
            "限制章列出航空器、動力與設備允許操作的邊界，包括速度、重量、重心、負荷與操作種類。這些限制需連同核准補充、標示及適用 AD 一起讀，不能只記儀表紅線。",
            "建議值、正常程序與限制各有不同作用，不能因某次操作看似順利就推翻核准限制。自編例：某設備可在系統說明中找到，不等於飛機已獲准在所有需要該設備的環境使用。"
          ],
          "references": [
            {
              "title": "14 CFR §91.9",
              "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-A/section-91.9",
              "checked": "2026-09-11"
            }
          ]
        },
        {
          "id": "airspeed",
          "english": "Airspeed",
          "title": "空速限制與條件",
          "parent": "limitations",
          "locator": "PHAK C 版 · 9-2",
          "printedPage": "9-2",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=2",
          "paragraphs": [
            "本節將空速色弧、徑向線及圖表連到核准限制，常見 VNE、VNO、VFE 等各有不同目的。限制可能依高度、重量、襟翼位置或構型而改變，需讀附註而非只看表上的顏色。",
            "自編例：襟翼第一段允許的速度可能高於全襟翼限制，白弧並不完整描述所有操作細節。VMC 也不能當成單發爬升保證，速度數值必須連同認證條件與當前性能一起理解。"
          ]
        },
        {
          "id": "powerplant",
          "english": "Powerplant",
          "title": "動力裝置限制",
          "parent": "limitations",
          "locator": "PHAK C 版 · 9-3",
          "printedPage": "9-3",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=3",
          "paragraphs": [
            "動力限制可包括起飛與連續功率、轉速、壓力、溫度、時間限制，以及燃油、滑油和螺旋槳適用規格。相同指示值在起飛與連續運轉情境下，允許的持續時間可能不同。",
            "有些轉速區間需要避免持續操作，並不只是不得超越最高 RPM。自編例：歧管壓力與轉速各自未超紅線，不一定代表其組合被允許，還需查手冊的組合限制與程序。"
          ]
        },
        {
          "id": "weight-limits",
          "english": "Weight and Loading Distribution",
          "title": "重量與裝載分布限制",
          "parent": "limitations",
          "locator": "PHAK C 版 · 9-3",
          "printedPage": "9-3",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=3",
          "paragraphs": [
            "本節定義最大核准重量、重心範圍、基準面及適用裝載限制，回答「結果允許在哪裡」。實際計算方法和本機空重資料則通常在第六節，兩者必須配合使用。",
            "總重量合格仍可能超出重心或行李艙局部承重限制，燃油消耗也可能改變重心。自編練習：分別核對起飛與落地狀態，不要只因總重量小於上限就判斷整趟航程裝載合格。"
          ]
        },
        {
          "id": "flight-limits",
          "english": "Flight Limits",
          "title": "機動與操作種類限制",
          "parent": "limitations",
          "locator": "PHAK C 版 · 9-4",
          "printedPage": "9-4",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=4",
          "paragraphs": [
            "飛行限制說明允許與禁止的機動、負荷因數、進入速度及操作種類，例如是否允許旋轉或特定結冰操作。核准類別與實際重量、重心、設備條件可能共同決定可做的機動。",
            "自編例：同型機某架可以作某項機動，不表示這架在目前裝載下也可以。應沿手冊限制、適用補充與標牌核對，避免把一般飛行技術文章當成機型核准證據。"
          ]
        },
        {
          "id": "placards",
          "english": "Placards",
          "title": "標牌與操作限制",
          "parent": "limitations",
          "locator": "PHAK C 版 · 9-4",
          "printedPage": "9-4",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=4",
          "paragraphs": [
            "標牌將與操作直接相關的要求放在使用者能看到的位置，可能來自原始設計、改裝或 AD。手冊限制章常重列其文字，但座艙與機體實際標牌的可讀性及適用性仍需檢查。",
            "標牌不全是同一種法律或操作功能，應先辨別警告、限制與失效設備標示。自編例：貼上 INOPERATIVE 只是在失效設備處理中的一環，不能讓本來必需的設備自動變成可缺少。"
          ],
          "references": [
            {
              "title": "14 CFR §91.9",
              "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-A/section-91.9",
              "checked": "2026-09-11"
            }
          ]
        },
        {
          "id": "emergency",
          "english": "Emergency Procedures (Section 3)",
          "title": "緊急程序與詳解",
          "parent": "afm",
          "locator": "PHAK C 版 · 9-4",
          "printedPage": "9-4",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=4",
          "paragraphs": [
            "緊急章把發動機失效、火災及系統異常等情況整理成程序，部分另有簡要檢查單與擴充說明。擴充段落解釋辨識條件、原因與步驟依賴，平時應先理解而不只背動作順序。",
            "只有機型明確指定的立即動作才按訓練要求記憶執行，再於適當時機核對檢查單。自編例：不同機型的重新起動條件與控制配置不同，不能把一架飛機的口訣搬到另一架。"
          ]
        },
        {
          "id": "normal",
          "english": "Normal Procedures (Section 4)",
          "title": "正常程序與階段檢查",
          "parent": "afm",
          "locator": "PHAK C 版 · 9-4",
          "printedPage": "9-4",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=4",
          "paragraphs": [
            "正常章依飛行階段組織檢查與操作，通常包含飛行前、起動、滑行、起飛、爬升、巡航、下降、落地及停機。簡要清單方便執行，詳解則補充何時、為何與如何判斷結果。",
            "動作完成與狀態確認是兩件事，設定開關後仍需看回饋是否符合預期。自編例：檢查單要求確認燃油來源，不能只摸一下選擇器而未讀定位和指示；實際流程依本機程序。"
          ]
        },
        {
          "id": "performance",
          "english": "Performance (Section 5)",
          "title": "性能資料與假設條件",
          "parent": "afm",
          "locator": "PHAK C 版 · 9-4",
          "printedPage": "9-4",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=4",
          "paragraphs": [
            "性能章提供起飛、爬升、巡航及落地等資料，讀表前需確認重量、壓力高度、溫度、風、跑道與操縱技術假設。表格內插與修正要依說明，不能自行把超出資料範圍的外推當成核准結果。",
            "自編例：越過障礙的起飛距離與地面滑跑長度是不同量，平整乾燥跑道數據也不能直接代表濕草地。本站的性能深入課程在 Chapter 11；原文此處寫 Chapter 10 Aircraft Performance 是交叉引用錯誤。"
          ]
        },
        {
          "id": "weight-balance",
          "english": "Weight and Balance/Equipment List (Section 6)",
          "title": "本機重量平衡與設備清單",
          "parent": "afm",
          "locator": "PHAK C 版 · 9-4",
          "printedPage": "9-4",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=4",
          "paragraphs": [
            "第六節提供計算重量、力矩與重心所需方法，並配合本機最新空重、設備清單及修訂紀錄。設備增減或改裝可能改變空重與重心，手冊範例不能替代實際航空器資料。",
            "計算完成後還要回到限制章核對包線與局部裝載上限。自編例：拆除一項設備後仍沿用原空重，算式即使沒有算錯，結果仍建立在錯誤輸入上；Chapter 10 會進一步解釋計算。"
          ]
        },
        {
          "id": "systems",
          "english": "Systems Description (Section 7)",
          "title": "系統說明與程序依賴",
          "parent": "afm",
          "locator": "PHAK C 版 · 9-4",
          "printedPage": "9-4",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=4",
          "paragraphs": [
            "系統章解釋本機燃油、電力、操縱、起落架、航電等配置，幫助飛行員理解正常指示與故障後果。通用原理要在這裡轉成「這架飛機的來源、控制、回饋和備援」。",
            "自編例：通用教材說有備用燃油泵，不代表本機在每個飛行階段都使用相同設定。系統說明幫助理解程序，但不能自行推導一套不同於核准資料的緊急操作。"
          ]
        },
        {
          "id": "handling",
          "english": "Handling, Service, and Maintenance (Section 8)",
          "title": "地面處理、保養與維修",
          "parent": "afm",
          "locator": "PHAK C 版 · 9-5",
          "printedPage": "9-5",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=5",
          "paragraphs": [
            "本節通常涵蓋牽引、繫留、儲存、清潔、補充油液及建議檢查，避免在地面操作中傷害結構或系統。使用的工具、油液規格與接觸位置，仍需對照本機資料。",
            "手冊說明某項保養方法，不等於每位飛行員都有執行與簽放權限。自編例：知道輪胎如何拆裝與是否可依法自行完成，是不同問題；後面要另查工作分類、人員資格及維修紀錄要求。"
          ]
        },
        {
          "id": "supplements",
          "english": "Supplements (Section 9)",
          "title": "補充手冊與改裝影響",
          "parent": "afm",
          "locator": "PHAK C 版 · 9-5",
          "printedPage": "9-5",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=5",
          "paragraphs": [
            "補充資料說明加裝或改裝設備帶來的限制、程序與性能變化，可能來自原製造商或改裝核准持有人。它不是可有可無的附讀文章，而可能是正確操作這架飛機不可缺少的一部分。",
            "讀補充時確認適用設備、序號、版本及哪些主手冊段落被修改；未修改的部分仍按主手冊。自編例：更換螺旋槳可能不只改變系統說明，也影響速度、重量平衡或性能資料。"
          ],
          "references": [
            {
              "title": "14 CFR §91.9",
              "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-A/section-91.9",
              "checked": "2026-09-11"
            }
          ]
        },
        {
          "id": "safety-tips",
          "english": "Safety Tips (Section 10)",
          "title": "安全提示與文件地位",
          "parent": "afm",
          "locator": "PHAK C 版 · 9-6",
          "printedPage": "9-6",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=6",
          "paragraphs": [
            "部分製造商增加安全與操作提示，整理常見錯誤、使用經驗或補充建議；不是每本手冊都有第十節。這些資料可幫助建立習慣，但需辨別建議、程序與核准限制的不同角色。",
            "自編例：某段建議較保守的天氣條件，可納入個人標準，卻不能藉另一段概括建議放寬限制章要求。遇到看似矛盾的文字，先查適用版本與核准補充，不自行挑選較方便的一句。"
          ]
        },
        {
          "id": "documents",
          "english": "Aircraft Documents",
          "title": "航空器文件與攜帶要求",
          "parent": null,
          "locator": "PHAK C 版 · 9-6",
          "printedPage": "9-6",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=6",
          "paragraphs": [
            "航空器文件分別回答登記身分、適航證明、操作限制與持續維修狀態等問題。常見記憶口訣只是索引，實際攜帶、展示與可供查閱要求仍需按適用規則和操作種類核對。",
            "FAA §91.203 對登記及適航文件有要求，其中適航證書還有對乘客或機組可讀的展示要求。維修紀錄的保存不等於所有日誌都必須放在座艙，跨境操作也可能有額外文件需求。"
          ],
          "references": [
            {
              "title": "14 CFR §91.203",
              "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-C/section-91.203",
              "checked": "2026-09-11"
            }
          ]
        },
        {
          "id": "registration",
          "english": "Certificate of Aircraft Registration",
          "title": "航空器登記證書",
          "parent": "documents",
          "locator": "PHAK C 版 · 9-6",
          "printedPage": "9-6",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=6",
          "paragraphs": [
            "登記證書識別航空器的登記狀態，並非 FAA 對財產所有權的保證，也不能代替適航證書。查核時需比較航空器識別、登記資料和有效狀態，出售、出口等情況可能影響有效性。",
            "FAA 已自 2023 年起把相關登記證書期限由三年延為七年；申請書臨時操作依據也不能再只背原書九十天。應核對現行條件與終止事件，而不是只看舊紙本上的日期或表格顏色。"
          ],
          "references": [
            {
              "title": "FAA Aircraft Registry：登記期限與臨時操作依據",
              "url": "https://www.faa.gov/licenses_certificates/aircraft_certification/aircraft_registry/index.cfm",
              "checked": "2026-09-11"
            }
          ],
          "currentNote": "查閱 2026-09-11：FAA 說明相關登記證書延為七年；符合條件的申請書臨時操作依據至收到證書、申請遭拒或待辦滿十二個月等終止事件為止。原書九十天敘述已過時，臨時國內操作條件仍需另核對，不能視為跨境許可。"
        },
        {
          "id": "airworthiness",
          "english": "Airworthiness Certificate",
          "title": "適航證書與持續適航",
          "parent": "documents",
          "locator": "PHAK C 版 · 9-7",
          "printedPage": "9-7",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=7",
          "paragraphs": [
            "適航證書說明航空器在相應核准基礎下獲得證明，標準與特殊適航證書的用途和限制不同。有證書不表示當下沒有故障，也不表示每種操作都已被允許。",
            "標準適航證書的持續有效有登記、適用維修與其他條件，不能把「沒有一般固定到期日」理解成永遠可飛。自編例：檢查逾期或出現影響安全的缺陷時，證書仍在機上也不能替代問題處理。"
          ],
          "references": [
            {
              "title": "14 CFR §21.181",
              "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-21/subpart-H/section-21.181",
              "checked": "2026-09-11"
            }
          ]
        },
        {
          "id": "maintenance",
          "english": "Aircraft Maintenance",
          "title": "維修與持續狀態管理",
          "parent": "documents",
          "locator": "PHAK C 版 · 9-8",
          "printedPage": "9-8",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=8",
          "paragraphs": [
            "航空器維修包含檢查、保存、翻修、修理及零件更換等工作，規劃需考慮使用時間、曆日、循環、環境及核准資料。原書提及的二十五或一百小時經驗說法，不是所有航空器的通用法定保養表。",
            "完成某次檢查只反映相應範圍和當時狀態，之後出現的故障仍需處理。自編例：昨天剛完成年度檢查，今天發現燃油滲漏，不能因下次年度尚未到期就忽略新的適航問題。"
          ]
        },
        {
          "id": "inspections",
          "english": "Aircraft Inspections",
          "title": "檢查種類、期限與適用性",
          "parent": null,
          "locator": "PHAK C 版 · 9-8",
          "printedPage": "9-8",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=8",
          "paragraphs": [
            "先確認航空器和操作所適用的檢查制度，再分別追蹤年度、使用時間、設備檢驗、壽限及 AD 要求。不同檢查可能同一天執行，但完成其中一項不會自動把其他項目的時鐘全部重設。",
            "§91.409 有年度、百小時與其他檢查方案的適用條件及例外，不能簡化為所有飛機都用同一套。自編練習：做一張「要求、上次完成、下次到期、紀錄位置」清單，再核對今天飛行用途。"
          ],
          "references": [
            {
              "title": "14 CFR §91.409",
              "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-E/section-91.409",
              "checked": "2026-09-11"
            }
          ]
        },
        {
          "id": "annual",
          "english": "Annual Inspection",
          "title": "年度檢查與曆月",
          "parent": "inspections",
          "locator": "PHAK C 版 · 9-8",
          "printedPage": "9-8",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=8",
          "paragraphs": [
            "適用 §91.409(a) 的航空器需在前十二個曆月內完成規定檢查並獲准恢復使用。自編例：2026 年 9 月 11 日完成年度檢查，該十二曆月期限至 2027 年 9 月底，而不是僅到同一天。",
            "一般百小時檢查不能取代年度，除非由有權執行年度檢查者完成並按年度檢查登錄。年度逾期沒有一般十小時寬限；若需移機送檢，另確認特殊飛行許可及其條件，不能自行先飛。"
          ],
          "references": [
            {
              "title": "14 CFR §91.409",
              "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-E/section-91.409",
              "checked": "2026-09-11"
            }
          ]
        },
        {
          "id": "hundred-hour",
          "english": "100-Hour Inspection",
          "title": "百小時檢查與十小時例外",
          "parent": "inspections",
          "locator": "PHAK C 版 · 9-8",
          "printedPage": "9-8",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=8",
          "paragraphs": [
            "§91.409(b) 涵蓋載運非機組人員取酬，或由提供航空器者收費教學等情況，並受該條例外影響。因此不能單憑「租來的飛機」或「有人付錢」就跳過對實際操作關係的判斷。",
            "為飛往可執行檢查之處，百小時可超過最多十小時，超時須計入下一週期。自編例：原應在累計 1,200 小時檢查，於 1,207 小時到維修點完成，下次通常仍以 1,300 小時計，而非 1,307。"
          ],
          "points": [
            "判斷依 time in service；不要未經確認便把任何計時表讀值當成同一定義。",
            "年度可滿足相應百小時檢查要求，百小時不能自動取代年度。",
            "最多十小時僅供前往檢查地點，不是一般教學或載客的寬限。"
          ],
          "references": [
            {
              "title": "14 CFR §91.409",
              "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-E/section-91.409",
              "checked": "2026-09-11"
            }
          ]
        },
        {
          "id": "other-programs",
          "english": "Other Inspection Programs",
          "title": "漸進式及其他檢查方案",
          "parent": "inspections",
          "locator": "PHAK C 版 · 9-9",
          "printedPage": "9-9",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=9",
          "paragraphs": [
            "大型飛機、特定多引擎渦輪飛機與其他航空器可能適用 §91.409 的其他方案，漸進式檢查也有申請、監督、程序與完整檢查要求。不是把年度項目自行分幾次做，就可宣稱採用漸進式制度。",
            "選擇或轉換方案時，原已累積的曆日、使用時間與循環仍需依規則納入追蹤。自編例：換一家維修廠或改用另一方案，不會讓壽限零件及既有到期要求自動歸零。"
          ],
          "references": [
            {
              "title": "14 CFR §91.409",
              "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-E/section-91.409",
              "checked": "2026-09-11"
            }
          ]
        },
        {
          "id": "altimeter-inspection",
          "english": "Altimeter System Inspection",
          "title": "高度與靜壓系統檢驗",
          "parent": "other-programs",
          "locator": "PHAK C 版 · 9-9",
          "printedPage": "9-9",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=9",
          "paragraphs": [
            "§91.411 對飛機與直升機在管制空域依 IFR 操作，要求相關靜壓、高度表及自動氣壓高度回報系統在前二十四曆月內完成規定檢驗。這不是把整架航空器一律認證為可飛 IFR。",
            "特定靜壓拆接或可能引入高度資料對應誤差的安裝維修後，也有追加測試要求與例外。自編例：日曆期限仍未到，但剛拆接管路，不能只看上次檢驗日期就忽略維修後檢查。"
          ],
          "references": [
            {
              "title": "14 CFR §91.411",
              "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-E/section-91.411",
              "checked": "2026-09-11"
            }
          ]
        },
        {
          "id": "transponder-inspection",
          "english": "Transponder Inspection",
          "title": "應答機檢驗",
          "parent": "other-programs",
          "locator": "PHAK C 版 · 9-9",
          "printedPage": "9-9",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=9",
          "paragraphs": [
            "§91.413 對所指 ATC 應答機的使用要求前二十四曆月內完成規定測試與檢查，並非只在 IFR 飛行才需要。是否需要配備或使用應答機，與設備檢驗是否合格是不同問題。",
            "可能造成高度資料對應誤差的安裝維修後，還需相關整合測試。自編例：管制員能收到代碼，不足以證明所有檢驗項目合格；也不能把此檢查當成 ADS-B 所有性能要求的替代證明。"
          ],
          "references": [
            {
              "title": "14 CFR §91.413",
              "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-E/section-91.413",
              "checked": "2026-09-11"
            }
          ]
        },
        {
          "id": "elt",
          "english": "Emergency Locator Transmitter",
          "title": "ELT 檢查與電池期限",
          "parent": "other-programs",
          "locator": "PHAK C 版 · 9-9",
          "printedPage": "9-9",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=9",
          "paragraphs": [
            "對 §91.207 所要求的 ELT，須按規定在上次檢查後十二曆月內檢查安裝、腐蝕、控制與撞擊感測及天線訊號。ELT 配備本身有適用範圍和例外，不能把一句「全部都要」套到所有操作。",
            "規定電池在發射器累計使用超過一小時，或達到核准壽命／充電壽命百分之五十時更換或充電，另有特定儲存型電池例外。新期限需標示並記錄，不能等到例行年度檢查才處理已到期電池。"
          ],
          "references": [
            {
              "title": "14 CFR §91.207",
              "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-C/section-91.207",
              "checked": "2026-09-11"
            }
          ]
        },
        {
          "id": "preflight",
          "english": "Preflight Inspections",
          "title": "飛行前檢查與放行判斷",
          "parent": "other-programs",
          "locator": "PHAK C 版 · 9-9",
          "printedPage": "9-9",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=9",
          "paragraphs": [
            "飛行前檢查依本機清單系統性確認外觀、油液、設備和相關文件狀態，也要閱讀尚未處理的缺陷。它不能取代維修人員的定期檢查，但能發現兩次定檢之間新出現的問題。",
            "自編例：外觀正常而年度檢查已逾期，或文件都有效但輪胎明顯受損，兩者都不能只憑另一半正常就判斷可飛。應把維修狀態、當下狀況和預定操作一起評估。"
          ]
        },
        {
          "id": "mel",
          "english": "Minimum Equipment Lists (MEL) and Operations With Inoperative Equipment",
          "title": "MEL 與失效設備操作",
          "parent": null,
          "locator": "PHAK C 版 · 9-9",
          "printedPage": "9-9",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=9",
          "paragraphs": [
            "MEL 是在核准條件下允許部分設備失效時操作的依據，MMEL 是建立相關清單的主清單，不能下載後就直接當成本機放行許可。需確認授權、適用項目、操作與維修程序、期限及多項故障的相互影響。",
            "未使用核准 MEL 的特定 Part 91 操作，才可在符合 §91.213(d) 全部條件下評估失效設備。白天不需要某盞燈，不代表只貼標籤就可飛；還需查型別、設備清單、操作規則、AD、停用與安全判斷。"
          ],
          "points": [
            "先確認是否適用 §91.213(d)(1) 的航空器與操作範圍；不能任意從 MEL 改用較方便的路徑。",
            "逐項查日間 VFR 型別認證要求、設備清單／KOEL、當次操作規則及 AD。",
            "移除時處理控制標示與維修紀錄；停用並標 INOPERATIVE，涉及維修者依 Part 43 執行與記錄。",
            "由具適當資格者判斷不構成危險，並評估其他失效項目的組合影響。",
            "MEL 是起飛前失效設備處理依據；飛行中故障先用本機異常／緊急程序。"
          ],
          "references": [
            {
              "title": "14 CFR §91.213",
              "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-C/section-91.213",
              "checked": "2026-09-11"
            },
            {
              "title": "FAA AC 91-67A：失效設備指引",
              "url": "https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1042212",
              "checked": "2026-09-11"
            }
          ],
          "currentNote": "查閱 2026-09-11：原書引用的 AC 91-67 已有 91-67A 版本。AC 是符合方法指引，MEL 授權與 §91.213 條件仍需個別確認；MMEL 本身不是任意飛行員的放行許可。"
        },
        {
          "id": "preventive",
          "english": "Preventive Maintenance",
          "title": "預防性維修與人員權限",
          "parent": null,
          "locator": "PHAK C 版 · 9-10",
          "printedPage": "9-10",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=10",
          "paragraphs": [
            "預防性維修是法規定義的工作類型，不能只憑自己覺得簡單就歸入其中。Part 43 Appendix A(c) 列出項目與條件，§43.3 說明誰可執行，§43.7 則另規定誰可批准恢復使用。",
            "對一般飛行員自行完成並簽放的情況，至少私人飛行員資格、擁有或操作該機及使用範圍等條件需一起核對；sport pilot 在特殊輕型運動類別另有條款。這不授權任意修理，也不能略過技術資料與紀錄。"
          ],
          "points": [
            "§43.3(g)：執行權限與航空器使用限制；另有明定例外，不用一句「非營業」概括全部。",
            "§43.7(f)、(h)：預防性維修後的恢復使用簽放權限，與執行工作分別判讀。",
            "§43.3(k)：符合條件的航電資料庫更新不視為維修，不能把所有軟體作業一律歸為預防性維修。"
          ],
          "references": [
            {
              "title": "14 CFR §43.3",
              "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-43/section-43.3",
              "checked": "2026-09-11"
            },
            {
              "title": "14 CFR §43.7",
              "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-43/section-43.7",
              "checked": "2026-09-11"
            }
          ]
        },
        {
          "id": "entries",
          "english": "Maintenance Entries",
          "title": "維修紀錄與簽放範圍",
          "parent": "preventive",
          "locator": "PHAK C 版 · 9-10",
          "printedPage": "9-10",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=10",
          "paragraphs": [
            "§43.9 的一般維修紀錄包含工作說明或可接受資料引用、完成日期，以及適當的執行者與批准者資訊。滿意完成後的簽名、證書號碼與類別，表示對所做工作的恢復使用批准。",
            "簽放只涵蓋所完成工作，不代表其人同時證明整機所有檢查和設備都有效。自編例：只有「更換電池」四個字而沒有日期與批准資訊，不足以完整呈現該項工作；定期檢查另有 §43.11 紀錄要求。"
          ],
          "references": [
            {
              "title": "14 CFR §43.9",
              "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-43/section-43.9",
              "checked": "2026-09-11"
            }
          ]
        },
        {
          "id": "preventive-examples",
          "english": "Examples of Preventive Maintenance",
          "title": "預防性維修例子與邊界",
          "parent": "preventive",
          "locator": "PHAK C 版 · 9-10",
          "printedPage": "9-10",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=10",
          "paragraphs": [
            "Appendix A(c) 的例子包含清潔或更換火星塞、燃油或滑油濾芯、電池維護，以及特定燈具部件更換等，但各自有限制。相似名稱不等於相同工作範圍，複雜組裝或系統改裝可能超出預防性維修。",
            "自編例：清潔火星塞與修理點火系統不是同一授權，更換既有核准電池與改裝另一種電池系統也不同。先核對法規項目、機型資料、零件適用性、本人資格與簽放紀錄，再判斷是否可做。"
          ],
          "points": [
            "照明：列舉位置燈／落地燈的燈泡、反射器與透鏡，不表示可任意重設整套電路。",
            "濾芯與火星塞：需遵守適用技術資料，不因列入項目便免除工具、程序與檢查要求。",
            "航電抽換：清單有指定安裝與設備例外，不能概括成所有面板設備都可自行換裝。"
          ],
          "references": [
            {
              "title": "14 CFR Part 43 Appendix A(c)：預防性維修項目",
              "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-43/appendix-Appendix%20A%20to%20Part%2043",
              "checked": "2026-09-11"
            }
          ]
        },
        {
          "id": "repairs",
          "english": "Repairs and Alterations",
          "title": "修理、改裝與核准資料",
          "parent": null,
          "locator": "PHAK C 版 · 9-12",
          "printedPage": "9-12",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=12",
          "paragraphs": [
            "修理著重恢復狀態，改裝涉及變更設計或配置，重大與輕微分類需依定義及工作內容判斷。價格低、零件小或施工時間短，都不能單獨證明只是輕微工作。",
            "重大修理與改裝有相應技術資料、授權與紀錄要求，常涉及 Form 337，並需依適用條款處理。自編例：新增設備後除了完成安裝，還可能要更新重量平衡、設備清單與飛行手冊補充。"
          ],
          "references": [
            {
              "title": "14 CFR §43.9",
              "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-43/section-43.9",
              "checked": "2026-09-11"
            }
          ]
        },
        {
          "id": "special-permit",
          "english": "Special Flight Permits",
          "title": "特殊飛行許可與移機",
          "parent": null,
          "locator": "PHAK C 版 · 9-12",
          "printedPage": "9-12",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=12",
          "paragraphs": [
            "特殊飛行許可可讓未完全符合適用適航要求、但仍能安全飛行的航空器，在核准目的與限制下飛行，例如移往維修地點。它不是一般商業載客授權，也不是飛行員自行宣布的臨時豁免。",
            "年度逾期或失效設備可能需要這類許可，但是否核發和附帶條件由適用程序決定。涉及 AD 時另查其許可限制及 §39.23；不能概括為所有未完成 AD 都可移機，也不能說所有情況都絕對禁止。"
          ],
          "references": [
            {
              "title": "14 CFR §21.197",
              "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-21/subpart-H/section-21.197",
              "checked": "2026-09-11"
            },
            {
              "title": "14 CFR §39.23",
              "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-39/section-39.23",
              "checked": "2026-09-11"
            }
          ]
        },
        {
          "id": "ads",
          "english": "Airworthiness Directives (ADs)",
          "title": "適航指令：適用性與符合狀態",
          "parent": null,
          "locator": "PHAK C 版 · 9-12",
          "printedPage": "9-12",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=12",
          "paragraphs": [
            "AD 是 FAA 用來處理不安全狀況的強制規則，可能適用機體、引擎、螺旋槳或裝置。查核應比對型號、序號、零件及安裝狀態，再讀生效日、完成期限、重複週期與符合方法。",
            "一項 AD 做過一次，不表示其中重複檢查就永遠結束；替代符合方法 AMOC 也不能自行發明。自編例：換裝另一具引擎後需重新核對適用 AD，不能只沿用機身型號的清單。"
          ],
          "points": [
            "Applicability：先確認產品與序號範圍，不能只看 AD 標題。",
            "Compliance：確認一次性、重複性、終止措施與下一次到期條件。",
            "Service Bulletin 與 AD 不同；服務通告若被 AD 或其他適用要求納入，須按相應要求判讀。",
            "查詢使用 FAA AD 官方入口與其現行連結，不依賴原書的舊 RGL 位址。"
          ],
          "references": [
            {
              "title": "FAA：Airworthiness Directives 官方入口",
              "url": "https://www.faa.gov/aircraft/air_cert/continued_operation/ad",
              "checked": "2026-09-11"
            }
          ]
        },
        {
          "id": "responsibilities",
          "english": "Aircraft Owner/Operator Responsibilities",
          "title": "所有人／操作人的持續責任",
          "parent": null,
          "locator": "PHAK C 版 · 9-13",
          "printedPage": "9-13",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=13",
          "paragraphs": [
            "§91.403 將維持適航、包括符合適用 AD 的主要責任放在所有人或操作人。委託維修廠不會讓此責任消失，飛行前還需確認登記、適航、限制、缺陷及當次操作需求。",
            "§91.417 將一般工作紀錄與總使用時間、壽限、檢查及 AD 狀態等資料分別規定保存方式，部分需隨飛機出售移交。自編例：一疊發票不一定能證明重複 AD 的下次到期或零件剩餘壽命。"
          ],
          "references": [
            {
              "title": "14 CFR §91.403",
              "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-E/section-91.403",
              "checked": "2026-09-11"
            },
            {
              "title": "14 CFR §91.417",
              "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-E/section-91.417",
              "checked": "2026-09-11"
            }
          ]
        },
        {
          "id": "summary",
          "english": "Chapter Summary",
          "title": "全章統整：證明與狀態相互核對",
          "parent": null,
          "locator": "PHAK C 版 · 9-13",
          "printedPage": "9-13",
          "source": "https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page=13",
          "paragraphs": [
            "本章將手冊適用性、核准限制、文件有效性、維修紀錄與實際狀況串在一起。判斷可否操作不能只靠單張證書、一個到期日期或一項正常檢查，而要核對各項適用要求。",
            "自編複習：找到本機最新補充資料、核對年度與設備檢驗期限、選一項缺陷說明評估路徑，再找出一項 AD 的符合紀錄。每個結論都應能指回具體文件與條款，並分清 FAA 與其他體制。"
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
        },
        {
          "title": "年度與百小時",
          "clarification": "適用條件與期限不同，百小時不能自動取代年度。",
          "example": "十小時移機例外不會讓年度逾期也自動獲得寬限。"
        },
        {
          "title": "MEL 與 MMEL",
          "clarification": "主清單不是本機已獲准延修的證明，還需適用授權與程序。",
          "example": "網路下載 MMEL 後不能直接把故障項目標成可放行。"
        },
        {
          "title": "執行維修與批准恢復使用",
          "clarification": "§43.3 與 §43.7 分別處理權限，完成動作不代表已取得簽放資格。",
          "example": "工作符合預防性維修項目仍需核對人員資格和紀錄。"
        },
        {
          "title": "AD 做過與持續符合",
          "clarification": "重複 AD 需追蹤下一次期限，除非已完成適用終止措施。",
          "example": "去年檢查過不代表今年無須再做。"
        },
        {
          "title": "有適航證書與當下可飛",
          "clarification": "證書不是忽略後續故障、檢查與限制的許可。",
          "example": "證書在機上，但檢查逾期或有未處理缺陷仍需評估。"
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
      "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=231",
      "detailMode": "outline",
      "checked": "2026-09-11",
      "coverageNote": "涵蓋提供的 38 個目錄小節，另補正文 Airplane Flight Manuals (AFM)，共 39 節。每節保留雙語標題、頁碼與 FAA 原文；中文講解與案例為本站編寫。現行法規另附查閱日期與 FAA／eCFR 來源，適用 FAA 制度，不直接代表其他國家的要求。"
    },
    {
      "id": "phak25c-10",
      "number": 10,
      "title": "重量與平衡",
      "english": "Weight and Balance",
      "section": "第 10 章；10-1～10-11，全章目錄逐節講解",
      "goal": "能計算重心，並理解重量、分布與飛行中的變化。",
      "primer": "總重量影響所需升力與性能，重心位置則影響力矩平衡、穩定性與操縱能力。兩者需要同時符合適用範圍；總重低於上限，不代表任何座位與行李配置都可用。",
      "terms": [
        "Datum · 基準面",
        "Arm · 力臂",
        "Moment · 力矩",
        "CG · 重心"
      ],
      "prompts": [
        "用本章 2,100 lb 算例重算總力矩與重心，再說明還缺哪些本機資料才能判斷可否起飛。",
        "比較把後艙行李前移與直接卸下兩種方案，列出各自的總重量、力矩和 CG，並解釋分母為何不同。"
      ],
      "keyPoints": [
        "重量與 CG 都要合格，且須核對不同飛行階段和局部承重。",
        "M = w × a；CG = ΣM/Σw；所有項目共用基準與單位。",
        "圖解與表格法仍在處理力矩，指數倍率不能混用。",
        "移動重量的總重量不變；增加、移除重量要用新總重量。",
        "燃油消耗的 CG 方向取決於油箱位置，少加油不會降低 ZFW。"
      ],
      "detailSections": [
        {
          "id": "introduction",
          "english": "Introduction",
          "title": "導論：重量與重心要同時合格",
          "parent": null,
          "locator": "PHAK C 版 · 10-1",
          "printedPage": "10-1",
          "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=1",
          "paragraphs": [
            "重量平衡要回答兩個問題：飛機有多重，以及這些重量集中在哪裡。即使總重量低於上限，裝載分布仍可能使重心超限；即使重心在包線內，也可能因超重而不符合限制。",
            "計算必須使用本機最新空重、力矩與設備資料，並核對滑行、起飛、航程中與落地等相關狀態。本章數字是學習算例，不是任何實機的放行資料，實際限制以適用 AFM／POH 及補充為準。"
          ]
        },
        {
          "id": "weight-control",
          "english": "Weight Control",
          "title": "重量控制與性能需求",
          "parent": null,
          "locator": "PHAK C 版 · 10-1",
          "printedPage": "10-1",
          "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=1",
          "paragraphs": [
            "重量是重力作用的力，實務裝載資料依手冊以磅或公斤等單位表達。增加重量會改變所需升力、起飛與落地能量以及爬升能力，因此座位、行李空間與油箱能裝多少，不等於都能同時裝滿。",
            "穩定平直飛行的受力平衡不能直接套到所有機動，轉彎時還需考慮負荷因數。自編例：先確認結構重量限制，再查當天天氣、跑道和障礙下的性能，取能滿足所有條件的裝載。"
          ]
        },
        {
          "id": "weight-effects",
          "english": "Effects of Weight",
          "title": "重量增加的影響",
          "parent": "weight-control",
          "locator": "PHAK C 版 · 10-2",
          "printedPage": "10-2",
          "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=2",
          "paragraphs": [
            "其他條件相近時，重量增加通常提高所需起飛與失速速度，延長滑跑，並降低爬升率與爬升角。落地時也需處理較多能量，影響距離、煞車與起落架負荷。",
            "固定構型、負荷因數與最大升力係數下，失速速度約隨重量平方根變化。自編例：重量由 2,000 增至 2,420 lb，若原失速速度為 50 kt，估算變為 50 × √(2,420/2,000) = 55 kt；這不是核准性能表的替代。"
          ]
        },
        {
          "id": "weight-changes",
          "english": "Weight Changes",
          "title": "燃油、設備與裝載變動",
          "parent": "weight-control",
          "locator": "PHAK C 版 · 10-2",
          "printedPage": "10-2",
          "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=2",
          "paragraphs": [
            "乘客、行李、燃油與固定設備變更都會影響重量，還可能因位置不同改變重心。燃油消耗要同時減去重量與相應力矩；改裝後則需使用已更新的空重和設備紀錄。",
            "原書算例將 AVGAS 取為 6 lb/US gal，所以 30 US gal 約為 180 lb；這不是所有燃料與溫度的固定密度。減少燃油也會影響航程與所需備份，不能只為讓重量過關而忽略燃油計畫。"
          ]
        },
        {
          "id": "balance",
          "english": "Balance, Stability, and Center of Gravity",
          "title": "平衡、穩定性與重心",
          "parent": null,
          "locator": "PHAK C 版 · 10-2",
          "printedPage": "10-2",
          "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=2",
          "paragraphs": [
            "重心是整體質量分布的平衡點，具有縱向、橫向與垂直位置。本章主要計算縱向重心，但側向燃油或貨物不平衡仍可能影響操縱與阻力，尤其不能忽略機型明定的橫向限制。",
            "重心會隨裝載、燃油消耗或物品移動改變，並不是機身上永久固定的標記。配平可以減少持續操縱力，卻不會改變超限裝載本身；自編例：用配平把桿力消除，不能證明重心已回包線。"
          ]
        },
        {
          "id": "adverse",
          "english": "Effects of Adverse Balance",
          "title": "不良平衡的影響",
          "parent": "balance",
          "locator": "PHAK C 版 · 10-3",
          "printedPage": "10-3",
          "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=3",
          "paragraphs": [
            "重心過前或過後會改變力矩平衡、操縱裕度與穩定特性，影響可能在低速起飛、拉平或失速恢復時才明顯。不能以巡航時還能保持平飛，推論所有飛行階段都可控制。",
            "自編例：後行李艙加入少量但力臂很長的貨物，可能比前座同重量更顯著地改變重心。評估應同時看重量與位置，也需固定貨物，避免飛行中滑動讓原計算失效。"
          ]
        },
        {
          "id": "stability",
          "english": "Stability",
          "title": "重心與縱向穩定性",
          "parent": "adverse",
          "locator": "PHAK C 版 · 10-3",
          "printedPage": "10-3",
          "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=3",
          "paragraphs": [
            "對典型傳統尾翼飛機，重心後移通常減少縱向靜穩定裕度，操縱力可能變輕，失速或旋轉恢復也可能受影響。較輕的桿力不是更安全的證據，反而可能增加過度操縱風險。",
            "重心前移常提高所需尾翼配平作用，並可能增加阻力和操縱需求。這些是理解趨勢的概念，實際機型構型與限制仍需個別判讀，不能把「越靠前越穩」當成無限制往前裝載的理由。"
          ]
        },
        {
          "id": "stability-cg",
          "english": "Stability and Center of Gravity",
          "title": "重心界限與核准資料",
          "parent": "adverse",
          "locator": "PHAK C 版 · 10-3",
          "printedPage": "10-3",
          "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=3",
          "paragraphs": [
            "正文另以此標題說明前後重心界限：它們是經核准的操作範圍，應由適用手冊、規格與相關資料確認。界限可以隨總重量、構型或操作種類改變，不一定是一條固定寬度的區間。",
            "自編例：同一重心位置在較輕重量時合格，在較重重量時可能落到包線外，因此必須用當時重量查界限。若不合格，應先調整裝載或計畫，再重新驗證整個航程的相關狀態。"
          ],
          "supplementalHeading": true
        },
        {
          "id": "control",
          "english": "Control",
          "title": "前後重心與操縱裕度",
          "parent": "adverse",
          "locator": "PHAK C 版 · 10-3",
          "printedPage": "10-3",
          "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=3",
          "paragraphs": [
            "重心過前可能需要更多抬頭操縱，低速時升降舵不足以完成起飛旋轉或落地拉平；重心過後則可能減少恢復所需的穩定和操縱裕度。前後界限因此不只是舒適或效率建議。",
            "自編例：把後艙貨物移到前艙可修正後重，但仍需檢查前限與前艙承重，不能無限前移。燃油箱位置、起落架狀態或特殊設備也可能影響重心，應按本機程序納入計算。"
          ]
        },
        {
          "id": "management",
          "english": "Management of Weight and Balance Control",
          "title": "資料更新與重量平衡管理",
          "parent": "balance",
          "locator": "PHAK C 版 · 10-4",
          "printedPage": "10-4",
          "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=4",
          "paragraphs": [
            "可靠管理先建立本機最新空重、力矩、設備清單及適用包線，再依實際乘員、行李與燃油確認裝載。維修或改裝後資料沒有更新，後續算式即使正確也會產生錯誤結果。",
            "FAA §91.9 要求遵守適用操作限制，不能把原書對是否需逐次書面計算的討論讀成可不確認重量平衡。不同營運制度另有核准方法與紀錄要求；重秤週期或可忽略變更門檻不可概括套用。"
          ],
          "references": [
            {
              "title": "14 CFR §91.9：遵守飛行手冊操作限制",
              "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-A/section-91.9",
              "checked": "2026-09-11"
            }
          ],
          "currentNote": "查閱 2026-09-11：以 §91.9 核對遵守操作限制的要求。原書舊制認證條號、重秤週期與可忽略變更說明需按本機認證基礎及適用營運制度另查，不作通用豁免。"
        },
        {
          "id": "terms",
          "english": "Terms and Definitions",
          "title": "術語、基準與單位",
          "parent": "balance",
          "locator": "PHAK C 版 · 10-4",
          "printedPage": "10-4",
          "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=4",
          "paragraphs": [
            "Datum 是由製造商指定的參考基準，arm 是從該基準量到項目重心的力臂，station 表示位置，moment 是重量乘力臂。所有項目必須使用同一基準、方向和單位，才可相加。",
            "空重定義隨年代與手冊而異，GAMA 標準空重包含不可用燃油與全量引擎油，基本空重再包含已安裝選配設備。不能重複加入已含的油量，亦不能把基本空重、有效載重與酬載當成同一概念。"
          ],
          "points": [
            "CG limits／range：前後界限及其範圍；ΔCG 表示重心變化量，不是新重心位置。",
            "Moment index：力矩除以指定常數，合計前要確認所有項目採同一縮放比例。",
            "Payload：乘員、貨物與行李；Useful load 常由相應最大允許重量減基本空重求得，再依手冊定義分配。",
            "Ramp、takeoff、landing weight：分別對應停機坪／滑行前、起飛及落地狀態，最大值未必相同。",
            "Zero fuel weight：不含可用燃油的重量；不可用燃油通常已在適用空重內。",
            "MAC 是平均氣動弦，不宜只當幾何弦長的簡單平均。%MAC = (CG station − LEMAC station) ÷ MAC × 100%，必須共用單位與基準。",
            "Floor load limit：局部地板承載限制；即使總行李重量合格，接觸面積太小仍可能超限。"
          ]
        },
        {
          "id": "principles",
          "english": "Principles of Weight and Balance Computations",
          "title": "力矩與加權平均原理",
          "parent": "balance",
          "locator": "PHAK C 版 · 10-5",
          "printedPage": "10-5",
          "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=5",
          "paragraphs": [
            "每項力矩 M = w × a，合計重量 W = Σw、力矩 M總 = Σ(w × a)，重心位置 xCG = M總/W。這是位置依重量加權的平均，不是把各座位或貨物力臂直接算術平均。",
            "自編例：100 lb 在 20 in，50 lb 在 80 in，總力矩為 2,000 + 4,000 = 6,000 lb·in，重心為 6,000/150 = 40 in。20 與 80 的平均是 50，但較重項目會把真正重心拉近 20。"
          ],
          "points": [
            "先固定正方向，例如基準後方為正、前方為負。",
            "單位示例：lb × in = lb·in；除以 lb 後得到 in。",
            "改變參考基準會改變所有力臂與力矩數字，不會改變實際裝載的物理重心。"
          ]
        },
        {
          "id": "restrictions",
          "english": "Weight and Balance Restrictions",
          "title": "包線、局部限制與性能",
          "parent": "balance",
          "locator": "PHAK C 版 · 10-6",
          "printedPage": "10-6",
          "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=6",
          "paragraphs": [
            "限制核對包含各階段最大重量、隨重量變動的前後重心界限，以及座位、行李艙、地板和側向不平衡等適用限制。手冊示範空重或其他同型機數值不能取代本機紀錄。",
            "最大核准起飛重量也不代表每條跑道、每種溫度都能安全起飛，當日性能可能要求更低重量。自編例：重量和重心都合格，卻無足夠越障爬升能力，仍需調整計畫而非只保留「包線內」的結論。"
          ]
        },
        {
          "id": "loaded",
          "english": "Determining Loaded Weight and CG",
          "title": "求裝載重量與重心的流程",
          "parent": null,
          "locator": "PHAK C 版 · 10-7",
          "printedPage": "10-7",
          "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=7",
          "paragraphs": [
            "計算法、圖解法與表格法都在追蹤同一組重量及力矩關係，差別在如何取得或呈現數值。先列完整裝載，再使用本機允許的方法，最後對照相符的重量—重心或重量—力矩包線。",
            "檢查輸入是否為當前設備、正確燃油單位、實際乘員與行李，並分別扣除相關燃油消耗。自編例：起飛合格但落地重心因後方油箱耗油而前移，仍可能需要重新檢查落地前限。"
          ]
        },
        {
          "id": "computational",
          "english": "Computational Method",
          "title": "計算法：逐項相加",
          "parent": "loaded",
          "locator": "PHAK C 版 · 10-7",
          "printedPage": "10-7",
          "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=7",
          "paragraphs": [
            "自編學習例使用基本空重 1,500 lb、力臂 40 in；前座 300 lb 在 37 in；燃油 240 lb 在 48 in；行李 60 lb 在 100 in。先各自求力矩，再加總，不可先把所有力臂平均。",
            "四項力矩分別為 60,000、11,100、11,520、6,000 lb·in，總重量 2,100 lb，總力矩 88,620 lb·in，因此 CG = 42.20 in。只有再比對該重量的真實包線和局部承重，才能判斷裝載是否允許。"
          ],
          "points": [
            "基本空重：1,500 × 40 = 60,000 lb·in。",
            "前座：300 × 37 = 11,100；燃油：240 × 48 = 11,520；行李：60 × 100 = 6,000 lb·in。",
            "合計：W = 2,100 lb；M = 88,620 lb·in；CG = 88,620 ÷ 2,100 = 42.20 in。",
            "此例只驗證算法，未提供任何實機核准重量或重心範圍。"
          ]
        },
        {
          "id": "graph",
          "english": "Graph Method",
          "title": "圖解法：載重圖與包線圖",
          "parent": "loaded",
          "locator": "PHAK C 版 · 10-7",
          "printedPage": "10-7",
          "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=7",
          "paragraphs": [
            "載重圖以各位置的線條把重量轉成力矩或力矩指數；先找該項重量、移到正確位置線，再讀另一軸。之後加上本機空重力矩，將總重量與合計力矩放入對應包線圖。",
            "圖上的 moment/1,000 不是力臂，也不能與未縮放的力矩直接相加。沿用前例，88,620 lb·in 對應指數 88.62；在重量—力矩指數圖上應用 (88.62, 2,100)，而不是把 CG 42.20 當成力矩指數。"
          ],
          "points": [
            "先看軸名、單位、縮放與各載重線的標籤，不假設每張圖方向相同。",
            "靠近邊界時，線寬和讀圖誤差可能影響判斷，應依手冊允許方法提高精度。",
            "重量—CG 包線與重量—moment 包線是不同座標，不能拿同一個橫軸數字互換。"
          ]
        },
        {
          "id": "table",
          "english": "Table Method",
          "title": "表格法：查值與內插",
          "parent": "loaded",
          "locator": "PHAK C 版 · 10-9",
          "printedPage": "10-9",
          "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=9",
          "paragraphs": [
            "表格法將特定位置、重量所對應的力矩預先列出，再依規定合計並查允許區間。某些表使用力矩指數，另一些直接提供可接受的總力矩範圍，必須先讀清欄位與倍率。",
            "自編例：固定 40 in 力臂，200 lb 的力矩為 8,000，300 lb 為 12,000 lb·in，允許線性內插時 250 lb 對應 10,000。可移動座椅、非線性燃油力臂或超出表格範圍時，不能擅自套同樣比例。"
          ]
        },
        {
          "id": "negative-arm",
          "english": "Computations With a Negative Arm",
          "title": "負力臂與代數符號",
          "parent": "loaded",
          "locator": "PHAK C 版 · 10-10",
          "printedPage": "10-10",
          "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=10",
          "paragraphs": [
            "負力臂表示項目在指定基準前方，不表示它沒有重量或重量本身為負。加入正重量而力臂為負，新增力矩就是負值；移除該項時，則扣掉原本的負力矩。",
            "自編例：原機 2,000 lb、CG 40 in，總力矩 80,000 lb·in；加入 20 lb 在 −10 in，得到 W = 2,020、M = 79,800，CG 約 39.505 in。重量增加而力矩減少完全可能，不能把負號改成絕對值。"
          ],
          "points": [
            "新增：(+20 lb) × (−10 in) = −200 lb·in。",
            "移除同一項：ΔW = −20 lb，ΔM = (−20) × (−10) = +200 lb·in，應回復原結果。",
            "先按代數運算，再檢查方向是否合理；加入前方重量應把 CG 拉向前方。"
          ]
        },
        {
          "id": "zero-fuel",
          "english": "Computations With Zero Fuel Weight",
          "title": "零燃油重量與階段核對",
          "parent": "loaded",
          "locator": "PHAK C 版 · 10-10",
          "printedPage": "10-10",
          "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=10",
          "paragraphs": [
            "零燃油重量是不含可用燃油的裝載重量，並非把所有液體或空重內的不可用燃油都扣掉。最大零燃油重量若有公布，通常涉及結構載荷分布，不能以未超最大起飛重量代替此項核對。",
            "自編例：ZFW 4,300 lb、MZFW 4,400 lb；加可用燃油 700 lb 得停機坪重量 5,000，耗用滑行燃油 20 得起飛 4,980，航程再耗 400 得落地 4,580 lb。各階段仍須分別核對重量、力矩及重心，不能只做重量減法。"
          ],
          "points": [
            "若 ZFW 已是 4,500 lb 而 MZFW 為 4,400，少加可用燃油無法修正，須減少非燃油載重等。",
            "起飛重量 = 停機坪重量 − 起動／滑行等起飛前消耗；落地重量再扣航程消耗。",
            "燃油力臂可能隨油量或油箱使用次序改變，應用手冊資料逐段計算。"
          ]
        },
        {
          "id": "changes",
          "english": "Shifting, Adding, and Removing Weight",
          "title": "三種改變方式的共同原理",
          "parent": "loaded",
          "locator": "PHAK C 版 · 10-10",
          "printedPage": "10-10",
          "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=10",
          "paragraphs": [
            "移動既有重量只改變分布，增加或移除重量則同時改變分子總力矩與分母總重量。最可靠的方法是把每個變動寫成 ΔW 與 ΔM，再用新總力矩除以新總重量。",
            "自編練習：同樣把後艙影響減小，可以前移行李，也可以卸下行李，但兩者新重量不同，不能共用一個不變分母的公式。改完還需重新查新重量的包線與局部限制，而非只看 CG 方向正確。"
          ]
        },
        {
          "id": "shifting",
          "english": "Weight Shifting",
          "title": "移動重量：總重量不變",
          "parent": "changes",
          "locator": "PHAK C 版 · 10-10",
          "printedPage": "10-10",
          "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=10",
          "paragraphs": [
            "重量 w 由力臂 a1 移到 a2 時，ΔM = w(a2 − a1)，因此 ΔCG = w(a2 − a1)/W，W 為不變的整機重量。用有符號的距離，向後移得到正變化，向前移得到負變化。",
            "自編例：W = 2,000 lb、原 CG 40 in，把 100 lb 由 100 in 移到 60 in，ΔCG = 100 × (−40)/2,000 = −2 in，新 CG 38 in。原總力矩 80,000 減 4,000 得 76,000，除以 2,000 亦為 38。"
          ],
          "points": [
            "反求搬動重量：w = W × ΔCG ÷ (a2 − a1)，符號需一致。",
            "若同例只需前移 CG 1 in，移動 50 lb 跨越 −40 in 即得 −1 in 的變化。",
            "搬動前仍需確認前艙承重、可固定位置與人員座位限制，不只求出數學答案。"
          ]
        },
        {
          "id": "addition-removal",
          "english": "Weight Addition or Removal",
          "title": "增減重量：使用新的分母",
          "parent": "changes",
          "locator": "PHAK C 版 · 10-11",
          "printedPage": "10-11",
          "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=11",
          "paragraphs": [
            "以帶符號的增量 δw 表示加入或移除，x新 = (W × x舊 + δw × a)/(W + δw)，亦可寫 ΔCG = δw(a − x舊)/(W + δw)。a 是增減項目的力臂，距離要相對舊 CG，不能用移動貨物的公式硬套。",
            "自編例：原 2,000 lb、CG 40 in，加入 100 lb 在 100 in，新 CG = 90,000/2,100 ≈ 42.857 in；若改成從原機移除同位置既有 100 lb，新 CG = 70,000/1,900 ≈ 36.842 in。兩例是各自從原狀態開始，不是連續兩步。"
          ],
          "points": [
            "加入項目通常把 CG 拉向該位置；移除項目通常把 CG 推離該位置。",
            "加入後分母用 2,100；移除後用 1,900，不能都除以原 2,000。",
            "燃油消耗也是移除重量：若油箱在舊 CG 後方，消耗會使 CG 前移；在前方則可後移。",
            "所有算例保留精度到最後再依手冊處理進位，貼近界限時不可用四捨五入掩蓋超限。"
          ]
        },
        {
          "id": "summary",
          "english": "Chapter Summary",
          "title": "全章統整：從數據到裝載判斷",
          "parent": null,
          "locator": "PHAK C 版 · 10-11",
          "printedPage": "10-11",
          "source": "https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page=11",
          "paragraphs": [
            "重量平衡計算以正確本機資料為起點，統一基準與單位後求總重量、總力矩與重心，再核對各階段包線、局部限制與性能。計算正確只是必要一步，貨物固定和資料更新同樣不可缺少。",
            "自編複習：不用重新背公式，先判斷前移、加入前方重量、移除後方重量各會讓 CG 往哪裡，再用總力矩驗證。最後說明為何減少燃油不能解決超過 MZFW，以及起飛合格為何不保證落地也合格。"
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
        },
        {
          "title": "負力臂與負重量",
          "clarification": "負力臂是基準前方的位置；負重量增量用於表示移除。",
          "example": "加入 20 lb 在 −10 in，新增重量為正而力矩為 −200 lb·in。"
        },
        {
          "title": "重心與力矩指數",
          "clarification": "CG 是距離，力矩指數是力矩除以特定倍率。",
          "example": "88,620 lb·in 的千分之一是 88.62，不是 CG 42.20 in。"
        },
        {
          "title": "移動與增減的分母",
          "clarification": "移動現有重量不改變整機重量，增減則必須用新重量。",
          "example": "2,000 lb 原機加入 100 lb，計算新 CG 的分母為 2,100。"
        },
        {
          "title": "零燃油重量與低油量",
          "clarification": "ZFW 不含可用燃油，少加可用燃油不會降低 ZFW。",
          "example": "ZFW 超限時不能只抽掉可用燃油來修正。"
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
      "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=245",
      "detailMode": "outline",
      "checked": "2026-09-11",
      "coverageNote": "涵蓋提供的 22 個目錄小節，另補正文 Stability and Center of Gravity，共 23 節。逐節有雙語標題、中文解釋、FAA 頁碼與來源；算例為本站編寫，不代表實機限制。計算涵蓋力矩、圖表座標、負力臂、零燃油重量與增減／移動載重。"
    },
    {
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
              "checked": "2026-09-11"
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
      "checked": "2026-09-11",
      "coverageNote": "依提供目錄完整展開 34 節，每節附雙語標題、中文解釋與 FAA 原文頁碼。計算例子為本站編寫並標明近似條件，不能替代本機核准性能或營運分析。"
    },
    {
      "id": "phak25c-12",
      "number": 12,
      "title": "氣象原理",
      "english": "Weather Theory",
      "section": "第 12 章；12-1～12-25，全章目錄逐節講解",
      "goal": "連結大氣運動、水氣、穩定度與飛行危害。",
      "primer": "壓力差提供氣流運動的驅動，地球自轉與地面摩擦等因素改變風向及速度。地形、障礙與對流又會造成局部差異，因此地面一個測站不能代表整段航路的風。",
      "terms": [
        "Dew point · 露點",
        "Stability · 穩定度",
        "Wind shear · 風切"
      ],
      "prompts": [
        "選一種霧和一種鋒面，說明水氣來源、冷卻或抬升機制，以及為何日出後不一定立即消散。",
        "列出雷暴在可見雲外的三種危害，說明資料鏈圖像為何適合整區避讓而不能當成即時穿越導航。"
      ],
      "keyPoints": [
        "大氣穩定度要比較氣塊與環境，不能只看地面冷暖或乾濕。",
        "相對濕度受溫度影響，溫露差小不保證立即有霧。",
        "不同霧、雲與鋒面有不同形成和消散條件，不使用固定好壞天氣口訣。",
        "雷暴危害可延伸到雲外，少雨、無可見漏斗或回波空隙都不是安全證據。",
        "所有天氣判斷需核對地點、高度、有效時間與產品限制。"
      ],
      "detailSections": [
        {
          "id": "introduction",
          "english": "Introduction",
          "title": "導論：用機制理解天氣",
          "parent": null,
          "locator": "PHAK C 版 · 12-1",
          "printedPage": "12-1",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=1",
          "paragraphs": [
            "天氣是特定時間和地點的大氣狀態，包含溫度、濕度、風、氣壓、雲與能見度。理解形成機制可以幫助判讀觀測和預報，但理論不能取代當次航路、時段及高度的最新資料。",
            "本章從大氣受熱與運動，連到飽和、雲、鋒面和雷暴。自編練習：每遇到一個現象，都問水氣從哪裡來、空氣如何被抬升或冷卻，以及對性能、視野和操縱造成什麼影響。"
          ]
        },
        {
          "id": "atmosphere",
          "english": "Atmosphere",
          "title": "大氣與分層",
          "parent": null,
          "locator": "PHAK C 版 · 12-2",
          "printedPage": "12-2",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=2",
          "paragraphs": [
            "大氣的溫度、壓力和密度隨高度改變，對流層容納大部分日常天氣，其頂部高度隨緯度與季節不同。分層是依溫度等特徵描述，不是固定高度的硬殼。",
            "對流層上方不等於完全沒有亂流、雲或對流突破，強雷暴可影響很高的空域。自編例：不能只因巡航接近對流層頂就排除天氣風險，仍需對照該時段的高空風和危害資訊。"
          ]
        },
        {
          "id": "composition",
          "english": "Composition of the Atmosphere",
          "title": "氣體組成與水氣",
          "parent": "atmosphere",
          "locator": "PHAK C 版 · 12-2",
          "printedPage": "12-2",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=2",
          "paragraphs": [
            "乾空氣約含 78% 氮、21% 氧及少量其他氣體；水蒸氣含量則隨環境變動，並對雲、降水與能量交換有重要作用。氧氣比例與氧分壓不同，不能由比例大致相同推論高空呼吸條件不變。",
            "氣態水蒸氣通常不可見，看到的雲或霧主要是小水滴或冰晶。自編例：天空透明不代表完全沒有水氣，空氣抬升冷卻後，原本不可見的水蒸氣就可能凝結成可見雲。"
          ]
        },
        {
          "id": "circulation",
          "english": "Atmospheric Circulation",
          "title": "受熱差異與環流",
          "parent": "atmosphere",
          "locator": "PHAK C 版 · 12-3",
          "printedPage": "12-3",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=3",
          "paragraphs": [
            "太陽加熱並不均勻，陸海、緯度與日夜差異造成溫度和壓力分布，驅動大尺度與地方環流。上升、下沉及水平輸送共同搬運能量與水氣，不能只用「熱空氣一定向上」描述所有流動。",
            "自編例：海岸的日間地面風可能受海風影響，但同時存在的天氣系統可加強或抵銷它。全球環流圖適合建立概念，不能直接當成某機場某時刻的風向預報。"
          ]
        },
        {
          "id": "pressure",
          "english": "Atmospheric Pressure",
          "title": "氣壓與壓力梯度",
          "parent": "atmosphere",
          "locator": "PHAK C 版 · 12-3",
          "printedPage": "12-3",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=3",
          "paragraphs": [
            "氣壓是空氣作用在單位面積的壓力，水平壓差產生推動氣流的壓力梯度力。天氣圖中的高低壓是相對周圍的壓力分布，並不直接等於高低溫或好壞天氣。",
            "同一位置氣壓會隨時間改變，高度上升也通常使氣壓降低，兩種變化需分開。自編例：爬升時高度表感測壓力下降，並不表示飛機必然飛進一個天氣低壓系統。"
          ]
        },
        {
          "id": "coriolis",
          "english": "Coriolis Force",
          "title": "科氏效應與半球",
          "parent": null,
          "locator": "PHAK C 版 · 12-3",
          "printedPage": "12-3",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=3",
          "paragraphs": [
            "在隨地球旋轉的參考系中，運動空氣的路徑呈現偏轉，北半球向運動方向右側、南半球向左側。效應隨緯度與速度等改變，在赤道水平偏轉項為零。",
            "科氏效應不是讓靜止空氣自動開始流動的起因，壓力梯度與摩擦仍需一起考慮。自編練習：先畫空氣原本的移動方向，再標左右偏轉，避免把北半球所有風一概畫成向東。"
          ]
        },
        {
          "id": "measurement",
          "english": "Measurement of Atmosphere Pressure",
          "title": "氣壓量測與基準",
          "parent": null,
          "locator": "PHAK C 版 · 12-4",
          "printedPage": "12-4",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=4",
          "paragraphs": [
            "水銀與無液式氣壓計用不同機構感測壓力，航空資料常以 hPa 或 inHg 表達。站壓、海平面修正氣壓和供高度表使用的設定具有不同用途，不能看到相近數字就互換。",
            "自編例：高山站的實際站壓較低，但天氣圖可能用海平面修正值比較水平分布。核對高度表設定時要看資料種類和單位，而不是將天氣圖任意一個壓力數字直接輸入。"
          ]
        },
        {
          "id": "altitude-pressure",
          "english": "Altitude and Atmospheric Pressure",
          "title": "高度與壓力關係",
          "parent": null,
          "locator": "PHAK C 版 · 12-5",
          "printedPage": "12-5",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=5",
          "paragraphs": [
            "上升時上方空氣柱通常減少，壓力下降，但下降速率不是全程固定。標準大氣提供換算基準，實際溫度分布則影響兩個壓力面之間的幾何距離。",
            "原書每千呎約一英吋汞柱是低高度粗估，不宜用於整個高空範圍。自編例：同樣兩個壓力面在冷空氣中距離較小，因此氣壓高度相同不保證相對地形的實際高度相同。"
          ]
        },
        {
          "id": "altitude-flight",
          "english": "Altitude and Flight",
          "title": "高度對性能與判讀的影響",
          "parent": null,
          "locator": "PHAK C 版 · 12-6",
          "printedPage": "12-6",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=6",
          "paragraphs": [
            "高度、壓力和溫度共同影響密度，進而影響起飛、爬升及相同 IAS 下的 TAS。氣壓高度主要提供操作和計算參考，密度高度描述密度對性能的影響。",
            "自編例：高溫高地機場即使跑道海拔固定，密度高度仍可顯著上升，需回到本機性能表。不能把「高度表已設對」當成性能也已自動修正，兩者需要不同的資料處理。"
          ]
        },
        {
          "id": "altitude-body",
          "english": "Altitude and the Human Body",
          "title": "壓力、氧分壓與人體",
          "parent": null,
          "locator": "PHAK C 版 · 12-6",
          "printedPage": "12-6",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=6",
          "paragraphs": [
            "環境壓力降低會降低吸入氧分壓，也使體內封閉氣體在壓力差下膨脹，涉及缺氧及耳鼻等壓力平衡問題。增壓與供氧各有不同功能，不可僅用飛機外部高度判斷座艙環境。",
            "個人症狀可能不易察覺，不能以感覺良好或單次血氧值替代設備、供氧和適用程序。這節建立氣象與人體的連結，詳細生理及操作限制需搭配 Chapter 17 與機型資料學習。"
          ]
        },
        {
          "id": "wind",
          "english": "Wind and Currents",
          "title": "風與垂直氣流",
          "parent": null,
          "locator": "PHAK C 版 · 12-7",
          "printedPage": "12-7",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=7",
          "paragraphs": [
            "風通常指水平空氣運動，氣流也包含上升與下降分量。航空風向一般表示風吹來的方向，和航跡箭頭指向目的地的用法不同，讀圖前應確認慣例。",
            "自編例：西風由西往東吹，若飛機向西飛則是逆風；上升氣流可能增加地面爬升率，下降氣流也可能超過飛機能力。不能只看水平風速就判定整個空氣運動平穩。"
          ]
        },
        {
          "id": "wind-patterns",
          "english": "Wind Patterns",
          "title": "高低壓、摩擦與風向",
          "parent": "wind",
          "locator": "PHAK C 版 · 12-7",
          "printedPage": "12-7",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=7",
          "paragraphs": [
            "高空風受壓力梯度與科氏等效應影響，常大致沿等壓線或等高線流動；近地面摩擦改變平衡，風可跨線朝低壓側。北半球典型低壓環流與南半球方向相反。",
            "自編例：從天氣圖推估風時，先辨別半球、地面或高空以及地形摩擦，不能只背順逆時針。局部谷風、海風和對流外流還可能使機場實測風不同於大尺度概念。"
          ]
        },
        {
          "id": "convection",
          "english": "Convective Currents",
          "title": "熱對流與地方環流",
          "parent": "wind",
          "locator": "PHAK C 版 · 12-7",
          "printedPage": "12-7",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=7",
          "paragraphs": [
            "地表受熱不均使某些空氣團相對周圍較暖而上升，周圍空氣補入，形成熱對流和地方環流。陸地通常比水面更快加熱或冷卻，因此日夜可能出現海陸風差異。",
            "自編例：晴熱午後越過深色耕地與水面，可能交替遇到上升和較弱或下降氣流。無雲不表示沒有熱亂流，雲是否形成還取決於水氣和上升過程是否達到飽和。"
          ]
        },
        {
          "id": "obstructions",
          "english": "Effect of Obstructions on Wind",
          "title": "障礙物、地形與亂流",
          "parent": "wind",
          "locator": "PHAK C 版 · 12-8",
          "printedPage": "12-8",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=8",
          "paragraphs": [
            "建物、樹木和山脈使風改向、加速並產生渦流，背風側可能有明顯亂流與下降氣流。穩定分層與跨山風也可形成山岳波，雲的有無不能單獨判斷波動是否存在。",
            "自編例：跑道風向袋顯示可接受風速，附近樹列背風側仍可能造成接近地面的擾動。飛越山脊時要評估風向、風速、波動與逃逸空間，不用單一「高過山頂」數字作保證。"
          ],
          "points": [
            "機械亂流：風與障礙物作用產生，強度和分布受形狀、地形與風速影響。",
            "山岳波：可在穩定空氣與適當跨山風下形成，背風下降可顯著影響高度保持。",
            "透鏡雲與轉子雲可提供線索，但沒有這些雲不等於沒有危害。"
          ]
        },
        {
          "id": "shear",
          "english": "Low-Level Wind Shear",
          "title": "低空風切與微下擊暴流",
          "parent": "wind",
          "locator": "PHAK C 版 · 12-11",
          "printedPage": "12-11",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=11",
          "paragraphs": [
            "風切是風向或速度在空間中的變化，飛機穿越時相對氣流、空速和航徑可能迅速改變。近地面缺乏高度和時間恢復，雷暴外流、鋒面、逆溫與地形都可能造成低空風切。",
            "微下擊暴流可先帶來逆風增加，接著下降氣流和順風，使初期性能改善很快轉為惡化。地面沒有大雨也不能排除乾微下擊暴流；應依告警、避讓與本機訓練處置，而非套用普通進場修正。"
          ],
          "references": [
            {
              "title": "FAA AIM Chapter 7 Section 1：風切、雷暴與天氣資料使用",
              "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
              "checked": "2026-09-11"
            }
          ]
        },
        {
          "id": "weather-map",
          "english": "Wind and Pressure Representation on Surface Weather Maps",
          "title": "地面圖的風與壓力表示",
          "parent": "wind",
          "locator": "PHAK C 版 · 12-12",
          "printedPage": "12-12",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=12",
          "paragraphs": [
            "地面分析圖以等壓線、站點符號及風羽呈現氣壓與風。等壓線較密常暗示較大壓力梯度，但局部風還受摩擦和地形影響，不能從線距直接讀出精確機場風速。",
            "讀風羽先確認方向和符號單位，再核對圖的有效時間。常見半羽、全羽、旗分別代表 5、10、50 kt；自編例：一旗加一全羽可表示 60 kt，但仍應以該產品圖例為準。"
          ]
        },
        {
          "id": "stability",
          "english": "Atmospheric Stability",
          "title": "大氣穩定度與氣塊比較",
          "parent": null,
          "locator": "PHAK C 版 · 12-12",
          "printedPage": "12-12",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=12",
          "paragraphs": [
            "穩定度取決於被抬升或壓低的氣塊與周圍環境相比是否更具浮力，不能只由地面冷暖或乾濕判定。需比較環境遞減率與氣塊上升時的溫度變化，並考慮是否已飽和。",
            "未飽和氣塊乾絕熱冷卻約每千呎 3 °C，飽和後因凝結釋熱通常較慢且數值可變。ISA 的約 2 °C/千呎是另一種參考，不能當成所有上升氣塊的冷卻率或當天穩定度。"
          ],
          "points": [
            "穩定：氣塊偏離後有回復傾向，常抑制強烈垂直發展。",
            "不穩定：抬升後可繼續上升，但仍需水氣與觸發條件才能形成特定天氣。",
            "穩定空氣仍可能有低雲、霧或山岳波；不穩定也不等於每處都有雷暴。"
          ]
        },
        {
          "id": "inversion",
          "english": "Inversion",
          "title": "逆溫與混合受限",
          "parent": "stability",
          "locator": "PHAK C 版 · 12-13",
          "printedPage": "12-13",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=13",
          "paragraphs": [
            "逆溫是某層氣溫隨高度上升而增加，抑制氣塊垂直混合。地面夜間輻射冷卻、暖空氣覆蓋冷空氣或下沉等過程都可形成逆溫，不限於地表附近。",
            "逆溫下方可能累積水氣、煙霧與污染，能見度變差；頂部附近若風差顯著也可能有風切。自編例：地面風小且平穩，不表示爬升穿過逆溫層時風速與方向也不會迅速改變。"
          ]
        },
        {
          "id": "moisture-temperature",
          "english": "Moisture and Temperature",
          "title": "水的相變與潛熱",
          "parent": "stability",
          "locator": "PHAK C 版 · 12-13",
          "printedPage": "12-13",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=13",
          "paragraphs": [
            "水在氣、液、固態間變化會交換能量，蒸發和昇華吸熱，凝結、凝華與凍結釋熱。這些能量交換影響氣塊浮力與雲發展，不只是把水換一種外觀。",
            "較高溫度通常對應較高飽和水氣壓，但「空氣能裝水」只是簡化比喻，也不是每增加固定溫度就精確翻倍。自編例：降水在乾燥空氣中蒸發可冷卻氣流，助長下降與外流。"
          ]
        },
        {
          "id": "humidity",
          "english": "Relative Humidity",
          "title": "相對濕度不是絕對水量",
          "parent": "stability",
          "locator": "PHAK C 版 · 12-13",
          "printedPage": "12-13",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=13",
          "paragraphs": [
            "相對濕度比較實際水氣壓與該溫度的飽和水氣壓，所以會隨溫度改變。即使沒有增加水蒸氣，夜間冷卻也可以使相對濕度升高，不能把百分比增加直接解讀為水量增加。",
            "自編例：寒冷空氣即使接近飽和，其水蒸氣總量仍可能少於較暖但相對濕度較低的空氣。比較潮濕程度和雲霧風險時，需一起看溫度、露點及冷卻機制。"
          ]
        },
        {
          "id": "dewpoint",
          "english": "Temperature/Dew Point Relationship",
          "title": "溫露差與雲底近似",
          "parent": "stability",
          "locator": "PHAK C 版 · 12-13",
          "printedPage": "12-13",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=13",
          "paragraphs": [
            "露點是在相應條件下把空氣冷卻至飽和所需的溫度；溫度與露點接近，表示離飽和較近，但不保證立即形成霧或降水。混合、抬升與凝結核等仍影響實際現象。",
            "對適當近地面對流氣塊，可用溫露差估算抬升凝結高度。自編例：T = 25 °C、Td = 15 °C，採約 400 ft/°C 得雲底約 4,000 ft AGL；這不是鋒面層雲或實際報告雲幕的通用預測。"
          ]
        },
        {
          "id": "saturation",
          "english": "Methods by Which Air Reaches the Saturation Point",
          "title": "達到飽和的途徑",
          "parent": "stability",
          "locator": "PHAK C 版 · 12-14",
          "printedPage": "12-14",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=14",
          "paragraphs": [
            "空氣可因冷卻、增加水蒸氣或混合不同氣團而接近飽和。抬升膨脹造成冷卻不必向外界大量放熱，與夜間接觸冷地面所造成的冷卻機制不同。",
            "自編練習：將夜間谷地霧、暖濕空氣移到冷海面、冷空氣越過暖水面及氣流爬坡分別配對其機制。知道觸發原因，才能判斷日出、風向改變或水氣供應停止後是否容易消散。"
          ]
        },
        {
          "id": "dew-frost",
          "english": "Dew and Frost",
          "title": "露、霜與表面污染",
          "parent": "stability",
          "locator": "PHAK C 版 · 12-15",
          "printedPage": "12-15",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=15",
          "paragraphs": [
            "露是水蒸氣在較冷表面凝結成液滴，霜可由水蒸氣在低於冰點的表面凝華成冰晶；露滴再凍結也是可能的結冰途徑。表面溫度可能低於報告氣溫，所以不能只看 OAT 略高於零便排除霜。",
            "翼面微小污染也可改變氣流、升力與阻力，不能憑厚度不明顯便認定可忽略。自編例：晴冷夜後飛行前需按機型與適用清潔機翼要求檢查和處理，不能只等待引擎運轉時自行融化。"
          ]
        },
        {
          "id": "fog",
          "english": "Fog",
          "title": "不同霧的形成與持續",
          "parent": "stability",
          "locator": "PHAK C 版 · 12-15",
          "printedPage": "12-15",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=15",
          "paragraphs": [
            "霧是接近地面的懸浮水滴或冰晶造成的能見度降低，形成途徑不同，消散條件也不同。輻射霧常與晴夜地表冷卻、濕氣和微風有關，但日出不保證在固定時間內消散。",
            "平流霧與上坡霧可持續獲得冷卻或水氣供應，不一定隨陽光就消失；冰霧和過冷水滴的凍霧也應分清。自編例：海岸霧由暖濕氣流不斷移入，不能只因陸地升溫就假定整條航路很快放晴。"
          ],
          "points": [
            "輻射霧：地表夜間冷卻使近地空氣達飽和，低窪處較易累積。",
            "平流霧：暖濕空氣移過較冷表面；上坡霧：濕空氣沿坡抬升冷卻。",
            "蒸發霧／海煙：冷空氣越過暖水面，水氣加入並混合冷卻。",
            "冰霧以冰晶為主；凍霧可由過冷液滴形成，接觸表面可能結冰。",
            "降水造成的蒸發增濕也可促成霧，不能只把低能見度歸因於夜間冷卻。"
          ]
        },
        {
          "id": "clouds",
          "english": "Clouds",
          "title": "雲的形狀、層次與發展",
          "parent": "stability",
          "locator": "PHAK C 版 · 12-15",
          "printedPage": "12-15",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=15",
          "paragraphs": [
            "雲由小水滴、冰晶或兩者混合形成，外觀與高度可提供抬升、穩定度和水氣線索。層狀雲常呈廣泛覆蓋，積狀雲反映垂直發展，但只看外觀不能保證內部沒有結冰或亂流。",
            "讀雲名時可把 cirro、alto、strato、cumulo、nimbo 等詞根連到高度、形狀與降水特徵。高度分組隨緯度和資料定義不同，不能把手冊分組當成全球固定界面；實際雲底仍需觀測。"
          ],
          "points": [
            "高雲：卷雲、卷層雲、卷積雲；常有冰晶，可提示高空水氣與系統接近。",
            "中雲：高層雲、高積雲；低雲：層雲、層積雲等，需留意低雲底和視野。",
            "雨層雲常伴較廣泛降水；積雨雲有深厚對流及多種航空危害。",
            "積雲的垂直發展趨勢比一張靜態外觀更有資訊，但仍不能取代預報和雷達判讀。"
          ]
        },
        {
          "id": "ceiling",
          "english": "Ceiling",
          "title": "雲幕高與最低雲層",
          "parent": "stability",
          "locator": "PHAK C 版 · 12-17",
          "printedPage": "12-17",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=17",
          "paragraphs": [
            "航空雲幕通常是最低 BKN 或 OVC 雲層的高度，天空被遮蔽時可用垂直能見度表示。FEW 或 SCT 雖可能更低，通常不構成報告雲幕，卻仍可能影響實際飛行與離雲間隔。",
            "自編例：SCT010 BKN025 表示雲幕為 2,500 ft，而不是 1,000 ft；METAR 雲高通常相對機場地面。雲幕不能直接換算整條航路的地形裕度，山區還需注意周邊地勢與局部雲。"
          ]
        },
        {
          "id": "visibility",
          "english": "Visibility",
          "title": "能見度、斜視與跑道視程",
          "parent": "stability",
          "locator": "PHAK C 版 · 12-17",
          "printedPage": "12-17",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=17",
          "paragraphs": [
            "能見度描述辨識目標的能力，受霧、降水、煙、塵與光照影響。地面主導能見度、飛行中所見能見度及跑道視程 RVR 是不同觀測或使用概念，不能只用單一數字互換。",
            "自編例：地面水平方向可見很遠，向陽斜視進場卻可能因薄霧和眩光難以辨識跑道。規劃需對照適用飛行規則、程序和實際趨勢，而非把單站一筆觀測當作整段航路的保證。"
          ]
        },
        {
          "id": "precipitation",
          "english": "Precipitation",
          "title": "降水型態與垂直溫度結構",
          "parent": "stability",
          "locator": "PHAK C 版 · 12-17",
          "printedPage": "12-17",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=17",
          "paragraphs": [
            "雨、毛毛雨、雪、冰粒、凍雨與冰雹反映不同形成和落下過程。地面降水種類受到上方融化層及近地冷層影響，單看地面溫度不能完整判斷高空結冰情況。",
            "凍雨可為過冷液滴撞擊後結冰，冰粒則已在空中凍結；地面看到雨不代表高處沒有冰雹。自編例：航路上有融化層和下方冷層時，要連結結冰、能見度與跑道污染，而非只問雨大不大。"
          ]
        },
        {
          "id": "air-masses",
          "english": "Air Masses",
          "title": "氣團來源與改變",
          "parent": null,
          "locator": "PHAK C 版 · 12-17",
          "printedPage": "12-17",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=17",
          "paragraphs": [
            "氣團是在大範圍具有相對相似溫濕特性的空氣，其來源地常決定初始冷暖與乾濕。海洋性和大陸性、極地和熱帶等分類提供概念，但氣團移動後會受新下墊面加熱、冷卻或增濕。",
            "自編例：冷空氣越過暖水面後可能變得較不穩定並形成陣性天氣，不能只因起源寒冷就預期平穩。判讀氣團需同時看來源、移動路徑及垂直溫度結構。"
          ]
        },
        {
          "id": "fronts",
          "english": "Fronts",
          "title": "鋒面是三維過渡區",
          "parent": null,
          "locator": "PHAK C 版 · 12-18",
          "printedPage": "12-18",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=18",
          "paragraphs": [
            "鋒面是不同密度與溫濕特性氣團間的過渡區，在天氣圖上常畫成地面位置的一條線，實際卻有寬度、傾斜與垂直結構。天氣可在地面鋒線之前、附近或之後出現。",
            "自編例：飛機尚未跨過圖上鋒線，就可能進入暖空氣爬升形成的雲和降水。應綜合溫度、露點、風、氣壓與雲系，而不是只用地圖上是否越線判定有無風險。"
          ]
        },
        {
          "id": "warm-front",
          "english": "Warm Front",
          "title": "暖鋒與緩坡抬升",
          "parent": "fronts",
          "locator": "PHAK C 版 · 12-18",
          "printedPage": "12-18",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=18",
          "paragraphs": [
            "暖鋒是暖氣團推進到原冷氣團區域，暖空氣常沿冷空氣上方較緩的斜面抬升。若水氣足夠，可有從高雲到較低厚層雲及廣泛降水的序列，但並非每個暖鋒都完全相同。",
            "暖鋒也可能包含不穩定層與嵌入雷暴，不能只將它等同平穩小雨。自編例：前方雲底逐漸降低時，要檢查整條航路的備降與結冰條件，而非只等地面氣溫轉暖才更新判斷。"
          ]
        },
        {
          "id": "approach-warm",
          "english": "Flight Toward an Approaching Warm Front",
          "title": "飛向暖鋒的天氣演變",
          "parent": "warm-front",
          "locator": "PHAK C 版 · 12-19",
          "printedPage": "12-19",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=19",
          "paragraphs": [
            "接近暖鋒時可能先看到高雲增厚，之後出現更低雲層、降水及能見度下降，地面冷空氣中也可能有霧。實際順序取決於水氣、穩定度和飛行方向，原書情境不是固定時間表。",
            "自編練習：沿預定到達時間比較各站觀測、預報和鋒面移動，辨識雲底下降或溫露差縮小是否影響返航與備降。不能只靠出發機場當下仍晴朗就假設前方保持可目視。"
          ]
        },
        {
          "id": "cold-front",
          "english": "Cold Front",
          "title": "冷鋒與較陡抬升",
          "parent": "fronts",
          "locator": "PHAK C 版 · 12-20",
          "printedPage": "12-20",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=20",
          "paragraphs": [
            "冷鋒是冷空氣推進並迫使較暖空氣上升，常有較陡的鋒面坡度。若暖側潮濕不穩定，較集中強烈的對流、陣雨和風變化可能出現；若乾燥穩定，表現可不同。",
            "冷鋒後常有降溫及氣壓上升趨勢，但雲雨何時結束並非保證。自編例：不能把越過鋒線當成即時天氣轉好的信號，後方仍可有低雲、陣雨、強風或地形效應。"
          ]
        },
        {
          "id": "fast-cold",
          "english": "Fast-Moving Cold Front",
          "title": "快速冷鋒與天氣突變",
          "parent": "cold-front",
          "locator": "PHAK C 版 · 12-20",
          "printedPage": "12-20",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=20",
          "paragraphs": [
            "快速冷鋒可使溫度、風和天氣在較短時間內改變，潮濕不穩定環境下可能伴隨強對流或鋒前颮線。天氣移動速度與雲內風速不是同一件事，也不能只用遠方外觀估算到達時間。",
            "自編例：原本可繞過的降水帶快速擴展時，需重新評估航線和降落選項，不能把上一張雷達圖中的空隙當作持續開放。資料時間與系統發展趨勢同樣重要。"
          ]
        },
        {
          "id": "approach-cold",
          "english": "Flight Toward an Approaching Cold Front",
          "title": "飛向冷鋒的預先判讀",
          "parent": "cold-front",
          "locator": "PHAK C 版 · 12-20",
          "printedPage": "12-20",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=20",
          "paragraphs": [
            "朝冷鋒飛行可能遇到雲帶、降水、風向突變、亂流和氣壓變化。是否看到連續雲牆並非唯一線索，嵌入或夜間對流也可能讓危害難以目視辨認。",
            "自編練習：將地面鋒位、雷達、雷暴預報與沿線風和氣壓趨勢一起看，預先保留避讓和落地空間。不要靠飛近一點再看看，來取代對快速移動系統的航前與途中評估。"
          ]
        },
        {
          "id": "front-comparison",
          "english": "Comparison of Cold and Warm Fronts",
          "title": "冷暖鋒的典型差異",
          "parent": "fronts",
          "locator": "PHAK C 版 · 12-20",
          "printedPage": "12-20",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=20",
          "paragraphs": [
            "暖鋒常有較緩抬升與較廣雲雨區，冷鋒常有較陡抬升及較集中的天氣變化，但這些都是典型模式。水氣、穩定度、移速及地形能改變實際危害，暖鋒也可有強對流。",
            "自編例：把「冷鋒危險、暖鋒安全」當成二分法會漏掉暖鋒結冰、低雲及嵌入雷暴。比較時應逐項看雲、降水、風切、能見度及其出現位置，而不只看鋒面名稱。"
          ]
        },
        {
          "id": "wind-shifts",
          "english": "Wind Shifts",
          "title": "鋒面風向轉變",
          "parent": "fronts",
          "locator": "PHAK C 版 · 12-21",
          "printedPage": "12-21",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=21",
          "paragraphs": [
            "鋒面附近風向和風速常隨氣團及壓力分布改變，過境前後的風變化可協助辨識，但方向不是全球固定的一套。半球、系統位置與地面摩擦都會影響實際轉向。",
            "自編例：某機場鋒面過境後原本逆風跑道可能變成側風或順風，起降性能也需重算。風向改變本身未必能唯一證明鋒面通過，仍要對照溫度、露點、氣壓與其他資料。"
          ]
        },
        {
          "id": "stationary",
          "english": "Stationary Front",
          "title": "滯留鋒與持續影響",
          "parent": "fronts",
          "locator": "PHAK C 版 · 12-21",
          "printedPage": "12-21",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=21",
          "paragraphs": [
            "滯留鋒的地面位置移動較慢，但不表示沿鋒沒有風或雲雨不再發展。暖空氣仍可被抬升，水氣輸送也可能維持降水，使同一地區長時間受低雲與能見度影響。",
            "自編例：預報鋒面停滯時，等待一小時不一定就能得到天氣窗口，沿鋒新對流也可能持續生成。規劃要看預測演變及可持續的替代方案，而不以鋒線速度小等同危害小。"
          ]
        },
        {
          "id": "occluded",
          "english": "Occluded Front",
          "title": "囚錮鋒的氣團配置",
          "parent": "fronts",
          "locator": "PHAK C 版 · 12-21",
          "printedPage": "12-21",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=21",
          "paragraphs": [
            "囚錮鋒常在較快冷鋒追上暖鋒後形成，暖空氣被抬離地面，前後兩側較冷空氣的相對冷暖決定不同結構。它不是冷暖氣團完全混合後變成沒有邊界。",
            "雲雨可能結合暖鋒與冷鋒特徵，也可能出現嵌入對流、低雲及結冰。自編練習：在剖面畫出暖空氣位於何處，再看航路高度會穿過哪些雲層，避免只用地面溫度推斷上方全部狀態。"
          ]
        },
        {
          "id": "thunderstorms",
          "english": "Thunderstorms",
          "title": "雷暴條件與生命週期",
          "parent": "fronts",
          "locator": "PHAK C 版 · 12-22",
          "printedPage": "12-22",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=22",
          "paragraphs": [
            "雷暴需要足夠水氣、不穩定與觸發抬升。典型單胞由上升氣流主導的積雲期，進入上下氣流並存的成熟期，再到下降氣流占優勢的消散期，但組織化多胞或超胞可持續更新。",
            "消散中的單一胞不表示整片系統都在減弱，旁邊可同時發展新胞。自編例：若避讓路線仍穿過持續生成的對流區，不能只靠一個回波減弱就判斷安全，需評估全區演變和可用替代航路。"
          ],
          "points": [
            "積雲期：上升氣流與凝結發展，未見地面降雨不代表沒有強上升。",
            "成熟期：降水、上升與下降氣流並存，多種危害可同時出現。",
            "消散期：下降氣流占優勢，外流與其他殘留危害仍可存在。"
          ]
        },
        {
          "id": "hazards",
          "english": "Hazards",
          "title": "雷暴危害與避讓範圍",
          "parent": "thunderstorms",
          "locator": "PHAK C 版 · 12-23",
          "printedPage": "12-23",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=23",
          "paragraphs": [
            "雷暴可能同時帶來亂流、風切、冰雹、結冰、雷擊、低能見度及強降水，外觀不能可靠判斷內部強度。可見雲邊不等於危害邊界，砧狀雲下方與外流區也可能危險。",
            "PHAK 以至少 20 NM（海里）說明嚴重或強烈回波雷暴的避讓，FAA AIM 亦提供相應避讓指引，不能將此距離當成所有條件下的安全保證。資料鏈回波有時間差，適合規劃避開整區，不適合即時選擇狹小穿越縫隙。"
          ],
          "references": [
            {
              "title": "FAA AIM Chapter 7 Section 1：風切、雷暴與天氣資料使用",
              "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
              "checked": "2026-09-11"
            }
          ],
          "currentNote": "查閱 2026-09-11：AIM 7-1 的雷暴避讓與 FIS 說明強調避開整片危害區；資料鏈 NEXRAD 圖像不適合即時穿越雷暴間隙。距離建議不是所有環境下的保證邊界。"
        },
        {
          "id": "squall",
          "english": "Squall Line",
          "title": "颮線與成帶對流",
          "parent": "hazards",
          "locator": "PHAK C 版 · 12-23",
          "printedPage": "12-23",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=23",
          "paragraphs": [
            "颮線是一條活躍雷暴帶，可能在冷鋒上、前方或遠離鋒面的不穩定區形成。它的連續性、強外流及快速發展會限制繞行空間，不能只把它當成一列互不影響的小雲。",
            "自編例：線上某段回波較弱，可能仍有風切、雲中亂流或快速填補的新胞。應考慮繞過整區、延後或落地等待，而不是依單張圖把低回波缺口當成可用通道。"
          ]
        },
        {
          "id": "tornadoes",
          "english": "Tornadoes",
          "title": "龍捲與漏斗雲",
          "parent": "hazards",
          "locator": "PHAK C 版 · 12-23",
          "printedPage": "12-23",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=23",
          "paragraphs": [
            "龍捲是與對流雲相連且接觸地面的強烈旋轉氣柱，可見凝結漏斗未必延伸到地面。只有雲漏斗外觀不足以判定是否接地，地面碎屑或旋轉也可提供線索。",
            "旋轉危害可隱藏在降水或雲內，沒有看到完整漏斗不代表安全；水龍捲同樣不能靠近觀察。自編例：夜間或儀器天氣下，需依雷暴與龍捲相關資訊避讓，不將目視確認當成必要前提。"
          ]
        },
        {
          "id": "turbulence",
          "english": "Turbulence",
          "title": "雷暴內外亂流",
          "parent": "hazards",
          "locator": "PHAK C 版 · 12-24",
          "printedPage": "12-24",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=24",
          "paragraphs": [
            "強烈上升、下降氣流及兩者間風切使雷暴內有嚴重亂流潛勢，雲外的陣風鋒與外流也可延伸很遠。飛在雲底以下或砧狀雲旁，並不等於避開整個對流系統。",
            "自編例：尚未進入降雨卻突然遇到地面風大幅改變，可能已進入外流影響區。若遇意外亂流需依機型程序處理，但亂流穿越速度不能把原本不可接受的雷暴穿越變成安全計畫。"
          ],
          "references": [
            {
              "title": "FAA AIM Chapter 7 Section 1：風切、雷暴與天氣資料使用",
              "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html",
              "checked": "2026-09-11"
            }
          ]
        },
        {
          "id": "icing",
          "english": "Icing",
          "title": "過冷水滴與對流結冰",
          "parent": "hazards",
          "locator": "PHAK C 版 · 12-24",
          "printedPage": "12-24",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=24",
          "paragraphs": [
            "雷暴上升氣流可支持大量過冷液態水，與機體接觸後快速結冰；不同滴徑和溫度可形成不同積冰。不能把某一溫度當成絕對分界，認為更冷就必然沒有液態水或其他冰相關危害。",
            "防除冰裝備有核准範圍，不能保證抵抗雷暴中的所有過冷水或高空冰晶影響。自編例：系統開啟後仍需監控未保護部位和性能，並依限制脫離；本節不提供跨機型的啟動時機口訣。"
          ]
        },
        {
          "id": "hail",
          "english": "Hail",
          "title": "冰雹與雲外落區",
          "parent": "hazards",
          "locator": "PHAK C 版 · 12-25",
          "printedPage": "12-25",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=25",
          "paragraphs": [
            "強上升氣流可讓冰粒在雲中持續收集過冷水並長大，最後落下或被風帶離主要回波區。地面落雨可能是冰雹已融化的結果，不足以證明飛行高度沒有冰雹。",
            "自編例：繞到砧狀雲下方但未進入主雲，仍可能遇到冰雹造成風擋、翼面與引擎損害。避讓需要考慮整個對流系統和風，不只依肉眼看到的降雨柱邊緣飛行。"
          ]
        },
        {
          "id": "storm-ceiling",
          "english": "Ceiling and Visibility",
          "title": "雷暴的雲幕與能見度",
          "parent": "hazards",
          "locator": "PHAK C 版 · 12-25",
          "printedPage": "12-25",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=25",
          "paragraphs": [
            "雷暴內外的雲、強降水、吹塵與碎屑可使能見度迅速降低，並與亂流和風切同時發生。雲底仍高或偶爾可看見跑道，不代表下方進場路徑沒有嚴重氣流危害。",
            "自編例：先前符合目視條件的機場，在外流到達後可能突然轉為低能見度或強側風。應把天氣趨勢、到達時間和替代方案一起評估，而不是只依上一筆雲幕數字繼續。"
          ]
        },
        {
          "id": "altimeter-effects",
          "english": "Effect on Altimeters",
          "title": "雷暴附近的壓力變化",
          "parent": "hazards",
          "locator": "PHAK C 版 · 12-25",
          "printedPage": "12-25",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=25",
          "paragraphs": [
            "雷暴接近與冷外流到達時，地面壓力可能快速改變，使先前取得的高度表設定不再代表附近狀態。氣壓高度表會把壓力變化轉成指示變化，不能單看指針就認定飛機真的改變同等幾何高度。",
            "自編例：沿用舊設定進場可能減少預期地形裕度，需按程序取得適用更新並交叉核對。原書的時間和百呎量級是例示，不是每個雷暴必定相同，也不能靠更新設定來消除其他雷暴危害。"
          ]
        },
        {
          "id": "lightning",
          "english": "Lightning",
          "title": "雷擊與系統影響",
          "parent": "hazards",
          "locator": "PHAK C 版 · 12-25",
          "printedPage": "12-25",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=25",
          "paragraphs": [
            "雷擊可損傷機體、天線、電氣與航電，附近閃光也可能暫時影響視覺。設計上的防護降低部分風險，卻不代表雷暴內其他危害也受控制，沒有頻繁閃電也不能證明安全。",
            "自編例：雷擊後引擎和螢幕看似正常，仍可能需要按機型程序檢查並安排維修評估。雷電偵測顯示的是相關電活動資訊，不能獨自畫出所有亂流、冰雹或可穿越區域。"
          ]
        },
        {
          "id": "water-ingestion",
          "english": "Engine Water Ingestion",
          "title": "強降水與引擎吞水",
          "parent": "hazards",
          "locator": "PHAK C 版 · 12-25",
          "printedPage": "12-25",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=25",
          "paragraphs": [
            "強對流可使局部液態水或冰雹含量很高，超過引擎在相應條件下可承受的範圍，可能造成燃燒不穩、熄火或損害。引擎認證包含一定環境測試，不表示可以承受所有雷暴核心。",
            "自編例：飛機有防冰與連續點火功能，不代表穿越強降水區就有保證。這些系統的使用與異常處置需依機型，規劃仍以避開不可接受的對流環境為主。"
          ]
        },
        {
          "id": "summary",
          "english": "Chapter Summary",
          "title": "全章統整：形成機制與飛行影響",
          "parent": null,
          "locator": "PHAK C 版 · 12-25",
          "printedPage": "12-25",
          "source": "https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page=25",
          "paragraphs": [
            "天氣由受熱、壓力差、水氣、地形與大氣運動共同形成，單一數字或雲名不足以概括其影響。判讀應連結觀測、預報、位置、高度和有效時間，再評估性能、視野、結冰與氣流。",
            "自編複習：比較輻射霧和平流霧、冷鋒和暖鋒、相對濕度和露點，再說明雷暴為何在雲外仍有危害。進一步資料可閱讀 FAA Aviation Weather Handbook；原書列出的舊 AC 與資料入口需另核對現行版本。"
          ],
          "references": [
            {
              "title": "FAA-H-8083-28B：Aviation Weather Handbook 官方入口",
              "url": "https://www.faa.gov/regulationspolicies/handbooksmanuals/aviation/faa-h-8083-28b-aviation-weather-handbook",
              "checked": "2026-09-11"
            }
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
        },
        {
          "title": "相對濕度與實際水氣量",
          "clarification": "相對濕度同時受溫度影響，百分比高不一定代表水氣總量更多。",
          "example": "夜間沒有增加水氣，單靠冷卻也可能讓相對濕度上升。"
        },
        {
          "title": "雲幕與最低可見雲層",
          "clarification": "報告雲幕通常取最低 BKN／OVC 或遮蔽的垂直能見度。",
          "example": "SCT010 BKN025 的雲幕為 2,500 ft，仍不能忽略較低散雲。"
        },
        {
          "title": "穩定與好天氣",
          "clarification": "穩定空氣可有低雲霧，不穩定也需其他條件才形成雷暴。",
          "example": "逆溫下能見度可能很差。"
        },
        {
          "title": "雲邊與危害邊界",
          "clarification": "冰雹、風切和亂流可出現在可見雷暴雲外。",
          "example": "從砧狀雲下方穿過不等於避開雷暴。"
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
      "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf#page=285",
      "detailMode": "outline",
      "checked": "2026-09-11",
      "coverageNote": "依提供目錄完整展開 51 節，逐節有雙語標題、中文解釋及 FAA 原文頁碼。雲霧、鋒面與雷暴依形成機制解說，補充來源連至 FAA AIM 及現行 Aviation Weather Handbook；案例為本站編寫。"
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
