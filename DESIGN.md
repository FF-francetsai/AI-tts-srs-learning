---
version: alpha
name: iPAS-AI-應用規劃智策網學院-design-system
description: 星際／星圖主題的深色學習平台設計系統。以近黑深空為畫布，薰衣草紫、天藍、翡翠綠三色漸層作為品牌主識別，搭配呼吸／浮動動畫（刻意不用轉圈 spinner），卡片化資訊架構貫穿首頁、學習與知識星圖頁面。本檔案依 VoltAgent/awesome-design-md 的 DESIGN.md 格式撰寫，token 全部從現有 index.html / atlas.html / style.css 實際取值萃取，而非另立新色。

colors:
  canvas: "#0a0a1a"
  canvas-soft: "rgba(255,255,255,0.04)"
  hairline: "rgba(255,255,255,0.1)"
  hairline-soft: "rgba(255,255,255,0.12)"
  ink: "#e0e0f0"
  ink-strong: "#e8e8f8"
  body: "#8b8ba0"
  mute: "#94a3b8"
  mute-soft: "#555570"
  primary-lavender: "#a78bfa"
  secondary-sky: "#7dd3fc"
  accent-emerald: "#34d399"
  accent-amber: "#fbbf24"
  accent-orange: "#fb923c"
  accent-pink: "#f472b6"
  accent-purple: "#c084fc"
  gradient-hero: "linear-gradient(135deg, #a78bfa, #7dd3fc, #34d399)"

typography:
  display-hero:
    fontFamily: "Segoe UI, Noto Sans TC, sans-serif"
    fontSize: 48px
    fontWeight: 700
    note: "套用 gradient-hero 做文字漸層（background-clip:text）"
  display-sub:
    fontFamily: "Segoe UI, Noto Sans TC, sans-serif"
    fontSize: 18.4px
    fontWeight: 400
    color: "{colors.body}"
    letterSpacing: 0.05em
  card-title:
    fontSize: 19.2px
    fontWeight: 700
    color: "{colors.ink-strong}"
  card-desc:
    fontSize: 14.08px
    fontWeight: 400
    color: "{colors.body}"
    lineHeight: 1.5
  nav-pill:
    fontSize: 15.2px
    fontWeight: 600
  caption:
    fontSize: 13px
    color: "{colors.body}"

rounded:
  sm: 10px
  md: 12px
  lg: 16px
  pill: 28px
  full: 9999px

spacing:
  xxs: 4px
  xs: 6px
  sm: 8px
  md: 14px
  lg: 20px
  xl: 24px
  2xl: 32px
  3xl: 48px
  4xl: 56px
  5xl: 80px

motion:
  # 全站鐵則：不用 transform:rotate 轉圈 spinner（2026-07-11 定案，見 loading-overlay 與 stage-badge-1 修正）。
  # 一律用「呼吸／浮動」類動畫：scale + opacity 或 translateY + box-shadow。
  pulse-glow:
    keyframes: "0%,100%{scale:1;opacity:.55} 50%{scale:1.15;opacity:1;filter:drop-shadow}"
    duration: 1.6s
    usage: "loading-overlay 的星球圖示"
  planet-float:
    keyframes: "0%,100%{translateY(0)} 50%{translateY(-6px);box-shadow 加深}"
    duration: 3.5s
    usage: "stage-badge-1（iPAS 初級徽章）"
  card-hover-lift:
    transform: "translateY(-6px)"
    boxShadow: "0 8px 32px rgba(167,139,250,0.25), 0 0 0 1px rgba(167,139,250,0.3)"
    duration: 0.35s
    easing: "cubic-bezier(.4,0,.2,1)"

components:
  domain-nav-pill:
    backgroundColor: "{colors.canvas-soft}"
    borderColor: "{colors.hairline-soft}"
    rounded: "{rounded.pill}"
    padding: "10px 22px"
    hover: "translateY(-2px) + 該分類主色 15% 透明底 + 主色邊框"
    perCategoryColor:
      ml: "{colors.primary-lavender}"
      dl: "{colors.accent-amber}"
      nn: "{colors.accent-emerald}"
      conc: "{colors.secondary-sky}"
      app: "{colors.accent-pink}"
      practice: "{colors.accent-purple}"

  feature-card:
    backgroundColor: "{colors.canvas-soft}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.lg}"
    padding: "32px 24px"
    hover: "{motion.card-hover-lift}"
    layout: "icon（2.4rem）→ card-title → card-desc，置中"

  stage-card:
    backgroundColor: "取決於 stage-badge-N 漸層（各 Stage 專屬色，非統一 primary）"
    rounded: "{rounded.md}"
    content: "icon → s-name → s-count（術語數，動態）→ CTA 按鈕（s-btn）"
    motion: "{motion.planet-float}（僅 badge-1，其餘 badge 建議統一套用同款浮動而非各自 rotate）"

  chapter-guide-details:
    element: "<details>/<summary>"
    borderColor: "{colors.hairline-soft}"
    rounded: "{rounded.sm}"
    padding: "8px 12px"
    content: "summary=Stage 名稱＋章節數；展開內容＝各章 chapter/intro"

  loading-overlay:
    backgroundColor: "{colors.canvas}"
    content: "loader-mark（emoji，pulse-glow）＋ loader-text（{colors.primary-lavender}）"
    zIndex: 999

  daily-goal-card:
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.md}"
    content: "goal-title → goal-bar（進度條）→ goal-info（計數＋連續天數）→ goal-btn CTA"

principles:
  - "深色宇宙畫布為底，內容一律浮於 z-index:10 的 content-layer，背景是 three.js 星空/粒子畫布。"
  - "三色漸層（紫→藍→綠）只用在最高階層的英雄標題與強調文字，不濫用在內文，避免視覺疲勞。"
  - "禁止 rotate 轉圈類動畫；載入/強調一律用呼吸（scale+opacity）或浮動（translateY+shadow）表達「進行中」。"
  - "卡片是核心資訊單元：feature-card／stage-card／chapter-guide-details 共用同一組 hairline 邊框＋backdrop-blur 質感，差異只在內容排版，維持全站卡片手感一致。"
  - "術語數量、進度等動態數據一律標示在卡片內（s-count／goal-info），不要讓使用者點進下一頁才第一次看到範圍。"
