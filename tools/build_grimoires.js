#!/usr/bin/env node
// build_grimoires.js — 從題庫自動編譯「秘笈」知識道具（node tools/build_grimoires.js）
// 來源：data.js（952 術語，stage 0-3 由淺至深）＋ python_quizzes.js（P0-P3）
// 產出：grimoires.js（window.GRIMOIRES）。題庫更新後重跑即可，勿手改產出檔。
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

// ── 載入資料（data.js / rpg-data.js 皆為瀏覽器全域腳本，用 eval 取值）──────
global.window = global;
const dataSrc = fs.readFileSync(path.join(ROOT, 'data.js'), 'utf8');
eval(dataSrc + ';globalThis.__LESSON=lessonData;');
const LESSON = globalThis.__LESSON;
require(path.join(ROOT, 'python_quizzes.js'));
const PYQ = global.PYTHON_QUIZ_POOL || [];

// DOMAINS：只取定義段（rpg-data.js 後半依賴瀏覽器環境）
const rpgDataSrc = fs.readFileSync(path.join(ROOT, 'rpg-data.js'), 'utf8');
const domEnd = rpgDataSrc.indexOf('// ── 術語池');
eval(rpgDataSrc.slice(0, domEnd > 0 ? domEnd : rpgDataSrc.indexOf('function getTermPool')) + ';globalThis.__D=DOMAINS;');
const DOMAINS = globalThis.__D;

// ── 秘笈定義（名稱與守護者綁定；稀有度對應知識深度）──────────────────────
const RARITY = {
  1: { name: '凡品', color: '#C8CCD4' },
  2: { name: '靈品', color: '#4ED7A1' },
  3: { name: '寶品', color: '#4A7BFF' },
  4: { name: '仙品', color: '#B16CFF' },
  5: { name: '聖品', color: '#F2C84B' },
};
// extraFilter＝秘笈補充題材（只影響秘笈編頁，不動遊戲出題的 catFilter）
const BOOK_DEFS = [
  { key: 'INTRO', name: '《入門星典・伊莎貝爾手記》', rarity: 1 },
  { key: 'DATA',  name: '《礦場寶鑑・選料真訣》',     rarity: 1,
    extraFilter: ['資料工程', '數據處理', '資料品質', '數據治理', '大數據'] },
  { key: 'SL',    name: '《神殿典章・監督正法》',     rarity: 2 },
  { key: 'DISC',  name: '《機庫圖譜・鑑別要術》',     rarity: 2,
    extraFilter: ['模型評估', '模型指標', '評估指標', '文本評估', '異常偵測', '目標偵測', '物件偵測', '影像分割'] },
  { key: 'UL',    name: '《荒野星圖・無標之道》',     rarity: 2,
    extraFilter: ['特徵工程', '統計學', '統計分析', '資料分析', '數據前處理', '資料前處理', '數據採樣'] },
  { key: 'DL',    name: '《熔爐心法・千錘百鍊》',     rarity: 3 },
  { key: 'GEN',   name: '《創界畫譜・生成祕藝》',     rarity: 3 },
  { key: 'RL',    name: '《競技真經・試錯拳譜》',     rarity: 4,
    extraFilter: ['AI 代理人', '數學優化', '數值優化', '集成學習'] },
  { key: 'ADV',   name: '《議會通鑑・九星合參》',     rarity: 4,
    extraFilter: ['專案管理', 'AI 專案', '風險管理', '系統架構', '模型部署', '模型監控', '模型治理', '敏捷開發'] },
  { key: 'CORE',  name: '《星盟總綱・亞特拉斯遺卷》', rarity: 5 },
];
const TOWER_BOOKS = [
  { stage: 'P0', name: '《蟒月秘傳・初蛻篇》', rarity: 1, floor: 1 },
  { stage: 'P1', name: '《蟒月秘傳・纏繞篇》', rarity: 2, floor: 4 },
  { stage: 'P2', name: '《蟒月秘傳・毒牙篇》', rarity: 3, floor: 7 },
  { stage: 'P3', name: '《蟒月秘傳・登頂篇》', rarity: 4, floor: 10 },
];
const MAX_PAGES = 60;
const SUBJ_ORDER = s => (s || '').startsWith('初') ? 0 : ((s || '').startsWith('中') ? 1 : 2);

function termPool(domain, extraFilter) {
  const filters = (domain.catFilter || []).concat(extraFilter || []);
  const seen = new Set();
  return LESSON.filter(t => {
    const cat = (t.category || '').toLowerCase();
    const hit = filters.some(f => cat.includes(f.toLowerCase()) || (t.title || '').includes(f));
    if (!hit || seen.has(t.title)) return false;
    seen.add(t.title);
    return true;
  });
}

function clip(s, n) { s = (s || '').trim(); return s.length > n ? s.slice(0, n) + '…' : s; }

const books = [];

// 10 星域秘笈：術語由淺至深（stage ↑ → 初科先於中科）
for (const bd of BOOK_DEFS) {
  const domain = DOMAINS.find(d => d.key === bd.key);
  if (!domain) continue;
  const pool = termPool(domain, bd.extraFilter)
    .sort((a, b) => (Number(a.stage) - Number(b.stage)) || (SUBJ_ORDER(a.subject) - SUBJ_ORDER(b.subject)))
    .slice(0, MAX_PAGES);
  books.push({
    id: 'book_' + bd.key.toLowerCase(),
    name: bd.name,
    rarity: bd.rarity, rarityName: RARITY[bd.rarity].name, color: RARITY[bd.rarity].color,
    emoji: domain.emoji, guardian: domain.guardian, domainKey: domain.key,
    unlock: { type: 'domain', key: domain.key, hint: `進入「${domain.name}」後解鎖` },
    pages: pool.map(t => ({
      t: t.title,
      e: [t.eng_name, t.eng_abbr && `(${t.eng_abbr})`].filter(Boolean).join(' '),
      def: clip(t.def, 160),
      goal: clip(t.key_goal, 80),
      deep: clip(t.detail_explain, 220),
    })),
  });
}

// 4 卷蟒月秘傳：Python 題庫依主題成頁，每頁附 1 例題
for (const tb of TOWER_BOOKS) {
  const qs = PYQ.filter(q => q.stage === tb.stage);
  const topics = [...new Set(qs.map(q => q.topic))];
  books.push({
    id: 'book_py_' + tb.stage.toLowerCase(),
    name: tb.name,
    rarity: tb.rarity, rarityName: RARITY[tb.rarity].name, color: RARITY[tb.rarity].color,
    emoji: '🐍', guardian: '塔主・蟒月', domainKey: 'PYTOWER',
    unlock: { type: 'tower', floor: tb.floor, hint: `試煉塔第 ${tb.floor} 層解鎖` },
    pages: topics.length === 0 ? [{
      t: '卷冊擴充中',
      def: '本卷對應的試煉題庫每日凌晨自動擴充，新知識入庫後此卷會自動增頁。先去試煉塔累積實戰吧！',
      deep: '（塔主・蟒月：一層一層來，急不得。）',
    }] : topics.slice(0, MAX_PAGES).map(topic => {
      const ex = qs.find(q => q.topic === topic && q.q_type === 'read_code' && q.code_block) ||
                 qs.find(q => q.topic === topic);
      return {
        t: topic,
        def: ex ? clip(ex.question, 140) : '',
        code: ex && ex.code_block ? clip(ex.code_block, 300) : '',
        ans: ex ? ('答案：' + (ex['opt_' + ex.answer] || ex.answer)) : '',
        deep: ex ? clip(ex.explanation, 200) : '',
      };
    }),
  });
}

const out = '// grimoires.js — 秘笈知識道具（自動產生：node tools/build_grimoires.js，勿手改）\n' +
  '// 來源：data.js + python_quizzes.js；編譯時間：' + new Date().toISOString() + '\n' +
  'window.GRIMOIRES = ' + JSON.stringify({ builtAt: new Date().toISOString(), books }) + ';\n';
fs.writeFileSync(path.join(ROOT, 'grimoires.js'), out);
const stat = books.map(b => `${b.name} ${b.pages.length}頁`).join('\n  ');
console.log(`✅ grimoires.js 產出完成：${books.length} 本\n  ${stat}`);
