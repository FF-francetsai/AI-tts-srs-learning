// ── 蟒月 Python 試煉塔 — 12 層關卡資料（正本：workspace/level_mangyue_tower.md）──
// 2026-07-29 指揮官依設計文件移植；題目字串照設計原文，改題請先改設計正本再同步此檔。
const MANGYUE_TOWER = {
  meta: {
    id: 'mangyue_tower',
    name: 'Python 試煉塔',
    keeper: 'mangyue',                 // 塔主・蟒月（rpg-npc-personas.js）
    phases: { P0: [1, 3], P1: [4, 6], P2: [7, 9], P3: [10, 12] },
  },
  floors: [
    {
      floor: 1, phase: 'P0', name: '蛇鱗初現', topic: '變數', type: '預測輸出',
      question: '正確說出下列程式碼的輸出：\n\nx = 5\ny = "蟒月"\nprint(x * 2, y)',
      passCondition: '答對輸出結果',
      openingLine: '一層一層來，第一層最簡單——變數就像蛇的鱗片，每片都有自己的名字與位置。先猜輸出，再看答案。',
    },
    {
      floor: 2, phase: 'P0', name: '雙叉之路', topic: '條件', type: '填空',
      question: '補上條件判斷，使程式正確輸出「前進」或「後退」：\n\ndirection = input("左或右？")\nif direction == "左":\n    print("前進")\n____:\n    print("後退")',
      passCondition: '填入正確的 else 分支',
      openingLine: '巨蟒在岔路前停下，選擇決定了旅程。填空，讓牠走上正確的路。',
    },
    {
      floor: 3, phase: 'P0', name: '盤繞之環', topic: '迴圈', type: '除錯',
      question: '找出並修正以下程式中的錯誤，使其印出 1 到 10 的平方：\n\nfor i in range(10):\n    print(i * i)',
      passCondition: '修正 range 範圍使輸出為 1~10 的平方',
      openingLine: '迴圈是蛇的盤繞，一圈又一圈，直到邊界。但這條蛇少繞了一圈——幫牠補上。',
    },
    {
      floor: 4, phase: 'P1', name: '鱗片倉庫', topic: '資料結構', type: '填空',
      question: '完成以下程式，使 inventory 能存放三個物品名稱並印出第二個：\n\ninventory = ____\ninventory.append("火把")\ninventory.append("地圖")\ninventory.____("鑰匙")\nprint(inventory[____])',
      passCondition: '三個空格全部填對（[]、append、1）',
      openingLine: '蛇的鱗片排列有序，你的倉庫也該如此。把這些寶物收進清單，然後取出第二片鱗。',
    },
    {
      floor: 5, phase: 'P1', name: '蛻皮工坊', topic: '函式', type: '實作',
      question: '撰寫一個函式 蛻皮(舊皮)，接收字串 舊皮，回傳 "新" + 舊皮。例如 蛻皮("蛇鱗") 回傳 "新蛇鱗"。',
      passCondition: '函式定義正確且測例通過',
      openingLine: '重構就像蛻皮，舊殼脫去、新膚新生。寫一個函式，幫我完成這次蛻變。',
    },
    {
      floor: 6, phase: 'P1', name: '蛇信呼喚', topic: '模組', type: '預測輸出',
      question: '假設有一模組 蛇語.py 內容如下，請預測主程式的輸出：\n\n# 蛇語.py\ndef 嘶嘶():\n    return "嘶～"\n\ndef 纏繞():\n    return "～～～"\n\n# 主程式\nfrom 蛇語 import 嘶嘶\nprint(嘶嘶())\nprint(纏繞())  # 這行會發生什麼？',
      passCondition: '答出第一行輸出「嘶～」、第二行 NameError',
      openingLine: '蛇信吐訊，模組是遠方的呼喚。只引入嘶嘶，纏繞便不在你的世界中——猜猜會發生什麼？',
    },
    {
      floor: 7, phase: 'P2', name: '蛇牙刻痕', topic: '檔案', type: '實作',
      question: '寫一段程式，將使用者的輸入（一串文字）寫入 蛇痕.txt，並在讀取後印出內容。需處理檔案不存在的例外。',
      passCondition: '寫入＋讀取＋例外處理三者齊備',
      openingLine: '蛇牙刻在石上，你的筆記刻在檔案中。寫、讀、保護——三招學會就能留下印記。',
    },
    {
      floor: 8, phase: 'P2', name: '蛻皮失靈', topic: '例外', type: '除錯',
      question: '以下程式在輸入非數字時會崩潰，請用 try/except 保護，使程式不中斷並提示「請輸入數字」：\n\nnum = int(input("請輸入層數："))\nprint("你在第", num, "層")',
      passCondition: '加上 try/except ValueError 且提示正確',
      openingLine: '蛻皮偶爾失靈，就像程式遇到意外。用你的 try 鎧甲保護牠，別讓牠粉身碎骨。',
    },
    {
      floor: 9, phase: 'P2', name: '蛇鱗鏡像', topic: '除錯', type: '除錯',
      question: '下列程式本應反轉字串 "蟒月" 為 "月蟒"，但輸出錯誤。請找出並修正：\n\ns = "蟒月"\nresult = s[::-2]\nprint(result)',
      passCondition: '把步長 -2 修為 -1',
      openingLine: '鏡中的蛇鱗順序顛倒了，但這面鏡子有裂痕。用你的除錯之眼找出裂縫。',
    },
    {
      floor: 10, phase: 'P3', name: '蛇語古卷', topic: '讀碼', type: '預測輸出',
      question: '閱讀以下程式，預測其輸出：\n\ndef 蛇行(步數):\n    結果 = []\n    for i in range(步數):\n        if i % 2 == 0:\n            結果.append("左")\n        else:\n            結果.append("右")\n    return 結果\n\nprint(蛇行(5))',
      passCondition: "答出 ['左', '右', '左', '右', '左']",
      openingLine: '古卷上刻著蛇行的軌跡，閱讀它，說出這條蛇會左右搖擺多少次。',
    },
    {
      floor: 11, phase: 'P3', name: '千年蛇陣', topic: '迴圈＋資料結構', type: '實作',
      question: '撰寫程式建立一個 3×3 的二維串列（蛇陣），每個元素為 "蛇"，並逐列以空格分隔印出（共三列，每列「蛇 蛇 蛇」）。',
      passCondition: '輸出 3×3 蛇陣格式正確',
      openingLine: '千年的蛇陣，盤旋交錯成網。用迴圈編織一張 3×3 的蛇鱗地毯。',
    },
    {
      floor: 12, phase: 'P3', name: '蟒月之巔', topic: '綜合（變數、函式、例外）', type: '實作',
      question: '撰寫完整的攀登函式 爬塔(層數)：\n- 若 層數 不是整數或小於 1，拋出 ValueError 並提示「層數必須為正整數」\n- 否則用迴圈印出「你在第 X 層，距離塔頂還有 (總層數 - X) 層」\n- 總層數為 12，最後印出「你已登上蟒月之巔！」',
      passCondition: '驗證、迴圈輸出、登頂訊息三者齊備',
      openingLine: '你終於來到我面前。千年以來，能通關者屈指可數。寫出你的最終之舞——讓程式證明你值得站在這裡。',
    },
  ],
};

if (typeof window !== 'undefined') window.MANGYUE_TOWER = MANGYUE_TOWER;
if (typeof module !== 'undefined') module.exports = { MANGYUE_TOWER };
