# Flightdeck Academy

繁體中文機師學習網站原型，使用原生 HTML / CSS / JavaScript，無須安裝依賴。

## 啟動

需要 Node.js 18 以上：

```sh
npm start
```

開啟 http://localhost:3000 。以 `PORT=3001 npm start` 變更連接埠。伺服器僅綁定本機。

## 功能

- ICAO 共通基礎、台灣 CAA、FAA、EASA 四個入口
- 15 道自編入門示範題、主題與關鍵字搜尋
- 練習即時解析、最多 5 題 / 5 分鐘模擬考、交卷與超時評分
- 每題答案回顧、跨體系錯題重練、真實累計答題統計
- localStorage 保存體系、答題紀錄與錯題；無帳號與雲端同步
- 官方來源入口、題目整理日期與版本資訊

## 內容邊界

這是示範教材，非官方考古題、完整證照課程或實際飛航工具。地方題目目前是制度與資源識讀，不宣稱涵蓋 PPL/CPL/ATP/ATPL 法規或考綱。ICAO 是共通知識分類，並非統一的證照考試體系。航空氣象與機場圖情境題尚待加入。

參考入口見 `data.js`。題目日期是編寫／整理日期，不是法規生效日。官方資料可能修訂，擴充正式內容需逐條核對原文、版本、生效日並由合格人員審校。未重製受授權限制的 ICAO 文件或官方完整題庫。

執行 `npm test` 驗證資料完整性、體系隔離與計分；`node --check app.js` 檢查語法。Google Fonts 是可選視覺增強；無網路時使用系統字體。

## 學習教室

側欄「學習教室」或 `#learn` 提供六篇繁中入門文章：迎角與失速、航向／地速、跑道編號、ICAO Annex 1、台灣備考來源識讀、EASA 文件入門。可搜尋及按體系篩選，每篇附段落引用、官方連結、章節及版本／查閱日期。導航文章附正頂風／順風計算器；五篇可直接進入相關題目，跑道篇提供紙上練習。

文章獨立網址採 `#lesson/文章ID`；已讀標記沿用本機紀錄，兼容先前的題庫紀錄。教材內容位於 `lessons.js`。使用 VS Code Live Server 開啟 `index.html` 同樣適用。內容是本站改寫及自編例子，非官方翻譯。部分大型 PDF 未完成逐頁查核，已在對應文章來源欄標示。

## GitHub Pages 自動部署

已提供 `.github/workflows/pages.yml`，每次推送到 `main` 會檢查語法、執行測試，只發布五個網站檔案。無須另租主機或部署 Node.js 伺服器。

首次設定：

1. 將專案發布到 GitHub repository，預設分支使用 `main`。
2. 到 GitHub repository 的 **Settings → Pages → Build and deployment → Source**，選擇 **GitHub Actions**。
3. 推送到 `main`；若已先推送，到 **Actions → Publish Flightdeck to GitHub Pages → Run workflow** 手動啟動第一次部署。
4. 工作流程成功後，在 **Settings → Pages** 或部署工作結果取得網站網址，一般為 `https://帳號.github.io/repository名稱/`。

之後在 VS Code 提交修改並 Push／Sync Changes，等待 Actions 成功後重新整理網站即可。部署不是即時同步；執行失敗可在 Actions 查看，測試失敗不會發布新版。

靜態網站支援 GitHub Pages 子路徑與 Live Server。文章網址使用 hash，可直接分享及重新整理。學習紀錄仍保存在瀏覽器；本機與 GitHub Pages 為不同來源，紀錄不會自動搬移或跨裝置同步。GitHub Pages 免費方案使用公開 repository；首次發布前確認要公開的教材與原始碼。

## 教材擴充（2026-09-06）

目前共 **12 篇文章、27 道自編題**。新增飛行操縱、皮托靜壓儀表、重量平衡、密度高度、雲霧與美式 METAR 六篇教材，皆附學習目標、四節正文、常見誤解、自我檢核與兩道章末題；部分章節另有對照表。學習教室可按體系、主題及正文關鍵字組合篩選。

教學呈現參考 [FLIGHT DECK 飛行養成](https://flightdecktw.net/) 公開首頁所介紹的短單元、觀念解說與來源回查方式。本站新增文字、題目及表格為原創，航空內容引用 FAA 與 NOAA／NWS 官方資料，不採用參考站的文字、圖像或程式碼。各篇來源欄列出實際引用資料；該參考站不是本文航空知識的事實來源，也與本專案沒有合作或隸屬關係。

新章節已核對所引用官方資料的相關段落，但尚未經合格教官專業審校。METAR 與裝載計算都是明確標示的虛構範例，非即時氣象或實機資料。這次擴充不代表已完整涵蓋任一證照課綱。
