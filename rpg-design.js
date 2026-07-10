// rpg-design.js — AI 星際聯盟 RPG 視覺設計層 v1.0
// 設計者：HermesAgent（行星視覺、守護者人設、場景配色）
//         OpenClaw（Tileset 規格、AI 守護者行為）
// 整合者：ClaudeCode 指揮官

// ============================================================
// 1. PLANET_DESIGN — 星域行星 SVG 渲染規格（HermesAgent）
//    key: 星域 ID（大寫），對應 rpg-data.js
// ============================================================
const PLANET_DESIGN = {
  INTRO: {
    gradient: { start: '#FFD580', end: '#E8A030', highlight: '#FFF8DC' },
    features: ['soft_cloud', 'small_moon'],
    ringColor: 'rgba(255,200,100,0.4)',
    glowColor: '#FFE0A0'
  },
  DATA: {
    gradient: { start: '#2EB8E6', end: '#0A4C73', highlight: '#A0F0FF' },
    features: ['binary_ring', 'data_stream'],
    ringColor: 'rgba(0,220,255,0.55)',
    glowColor: '#00C8FF'
  },
  SL: {
    gradient: { start: '#4B3F72', end: '#1B1440', highlight: '#B3A0E8' },
    features: ['starlight_trail', 'pulse_ring'],
    ringColor: 'rgba(160,130,255,0.5)',
    glowColor: '#9F8FFF'
  },
  DISC: {
    gradient: { start: '#5EAF6B', end: '#1E5B2F', highlight: '#C8F0A0' },
    features: ['explorer_satellite', 'spore_cloud'],
    ringColor: 'rgba(150,210,100,0.45)',
    glowColor: '#7FD060'
  },
  UL: {
    gradient: { start: '#F0F4F8', end: '#B0C4DE', highlight: '#FFFFFF' },
    features: ['celestial_ring', 'floating_isles'],
    ringColor: 'rgba(220,230,255,0.6)',
    glowColor: '#E8F0FF'
  },
  DL: {
    gradient: { start: '#4A2040', end: '#1C0A1E', highlight: '#C06090' },
    features: ['shadow_moon', 'void_crack'],
    ringColor: 'rgba(150,40,100,0.55)',
    glowColor: '#B04070'
  },
  GEN: {
    gradient: { start: '#FF9FE0', end: '#405DE6', highlight: '#FFEEFF' },
    features: ['energy_swirl', 'prism_ring'],
    ringColor: 'rgba(255,255,255,0.7)',
    glowColor: '#FFFFFF'
  },
  RL: {
    gradient: { start: '#9E8F7E', end: '#4D3E2E', highlight: '#D4C4A8' },
    features: ['ancient_plate', 'rune_ring'],
    ringColor: 'rgba(200,170,120,0.5)',
    glowColor: '#C8B080'
  },
  ADV: {
    gradient: { start: '#E03A3A', end: '#7A1515', highlight: '#FFAA60' },
    features: ['flame_aura', 'warrior_satellite'],
    ringColor: 'rgba(255,120,0,0.6)',
    glowColor: '#FF6A20'
  },
  CORE: {
    gradient: { start: '#1F1F2E', end: '#0A0A14', highlight: '#D0E0FF' },
    features: ['multi_ring', 'cosmic_vortex', 'starfield'],
    ringColor: 'rgba(200,200,255,0.8)',
    glowColor: '#C8E0FF'
  }
};

// ============================================================
// 2. GUARDIAN_VISUAL — 守護者視覺人設（HermesAgent）
//    key: guardianChar ID（小寫）
// ============================================================
const GUARDIAN_VISUAL = {
  isabel: {
    clothing: { primary: '#FFC078', accent: '#8B4513' },
    hair: '蜜金色長辮，辮尾綁琥珀色絲帶',
    symbol: '守護燈塔',
    pixelNote: '32×48 點陣，暖色調長袍，手持提燈；走動時燭火搖曳'
  },
  dada: {
    clothing: { primary: '#1E90FF', accent: '#FFFFFF' },
    hair: '銀藍色短髮，瀏海斜分，全息投影眼鏡',
    symbol: '全息水晶球',
    pixelNote: '袍上有流動資料線條動畫，身邊環繞浮點字元'
  },
  kael: {
    clothing: { primary: '#2C2C54', accent: '#C8A0FF' },
    hair: '銀白長髮束高馬尾，紫色星芒髮飾',
    symbol: '星軌六分儀',
    pixelNote: '披風內側為星空點陣，移動時星點隨機明滅'
  },
  sara: {
    clothing: { primary: '#556B2F', accent: '#DAA520' },
    hair: '棕紅色短鮑伯頭，頭戴護目鏡',
    symbol: '古代地圖卷軸',
    pixelNote: '腰間掛繩索與小鏟子，待機時會蹲下檢查地面'
  },
  rova: {
    clothing: { primary: '#F5F5F5', accent: '#FFD700' },
    hair: '淡金色長直髮，頭頂懸浮光環',
    symbol: '光之天平',
    pixelNote: '衣服邊緣有微弱光暈，周圍飄落羽毛粒子'
  },
  moon: {
    clothing: { primary: '#3A1F3A', accent: '#B03060' },
    hair: '深紫色波浪長髮，臉旁垂下兩縷銀絲',
    symbol: '月相羅盤',
    pixelNote: '腳底有暗影漣漪，雙眼為異色（左紫右金）'
  },
  aura: {
    clothing: { primary: '#FFFFFF', accent: '#FF69B4' },
    hair: '漸層彩虹色長髮（粉→紫→藍）',
    symbol: '創造光球',
    pixelNote: '全身帶虹彩色移效果，周圍有小光點環繞'
  },
  liyang: {
    clothing: { primary: '#808080', accent: '#FFD700' },
    hair: '鐵灰色短髮，髮膠向後，面容剛毅',
    symbol: '真知之盾',
    pixelNote: '重甲外形，肩甲有符文雕飾，行走有重量感'
  },
  council: {
    clothing: { primary: '#8B0000', accent: '#FFD700' },
    hair: '白髮，長鬚，頭戴桂冠',
    symbol: '議會權杖',
    pixelNote: '披風深紅色底，邊緣金線；周圍有浮游小徽章'
  },
  atlas: {
    clothing: { primary: '#000022', accent: '#00FFFF' },
    hair: '無，星雲般光體取代頭髮',
    symbol: '微縮宇宙',
    pixelNote: '身體由透明星雲層疊構成，四肢為星光流束'
  }
};

// ============================================================
// 3. SCENE_PALETTE — 星域場景等距 tile 配色（HermesAgent）
//    key: 星域 ID（大寫）
// ============================================================
const SCENE_PALETTE = {
  INTRO: {
    topColor: '#E0D5B0', leftColor: '#C0B080', rightColor: '#A09060',
    accentColor: '#F0E0A0', atmosphere: '明亮溫暖的起始平原，空氣中有飄浮的微光花粉'
  },
  DATA: {
    topColor: '#1A3A5C', leftColor: '#0E2A45', rightColor: '#224A6E',
    accentColor: '#00D4FF', atmosphere: '數位化的格狀地面，線條發光，如行走於電路板上'
  },
  SL: {
    topColor: '#2A204A', leftColor: '#1A1035', rightColor: '#3A2A5E',
    accentColor: '#A888FF', atmosphere: '深空中的星光走廊，地面散布跳動的星點'
  },
  DISC: {
    topColor: '#3A5C30', leftColor: '#2A4520', rightColor: '#4A6E3A',
    accentColor: '#B8D050', atmosphere: '翠綠叢林邊緣，苔蘚覆蓋的石板路與古代遺跡碎片'
  },
  UL: {
    topColor: '#E8EEF2', leftColor: '#C8D4DE', rightColor: '#D8E0EA',
    accentColor: '#FFD700', atmosphere: '雲端之上的浮空平台，純白大理石質感，灑落柔和聖光'
  },
  DL: {
    topColor: '#301A30', leftColor: '#1E0E20', rightColor: '#3A2040',
    accentColor: '#C05080', atmosphere: '深邃暗域，暗紫晶簇散落，空氣中有淡淡的螢光薄霧'
  },
  GEN: {
    topColor: '#F5EBFF', leftColor: '#D0C0F0', rightColor: '#E0D0FF',
    accentColor: '#FF88CC', atmosphere: '色彩流動的創造之間，地面磚塊緩慢變換色相'
  },
  RL: {
    topColor: '#7A6E60', leftColor: '#5A4E40', rightColor: '#8A7E70',
    accentColor: '#C8B080', atmosphere: '古老石造宮殿，巖壁嵌有發光符文，氛圍沉穩莊嚴'
  },
  ADV: {
    topColor: '#6A2020', leftColor: '#4A1010', rightColor: '#7A2A2A',
    accentColor: '#FF4A10', atmosphere: '火山邊緣的試煉場，地面有岩漿裂縫，天空映著赤紅'
  },
  CORE: {
    topColor: '#0A0A1A', leftColor: '#050510', rightColor: '#0E0E2A',
    accentColor: '#80D8FF', atmosphere: '宇宙之心，漆黑的星圖地板上繁光流轉，萬物歸於寧靜'
  }
};

// ============================================================
// 4. TILESET_SPEC — Tile 視覺規格（OpenClaw）
//    key: 星域 ID（大寫），tile id 0=地板 3=障礙 8=牆
// ============================================================
const TILESET_SPEC = {
  INTRO: { tiles: [
    { id:0, name:'草地',  topColor:'#a0d468', leftColor:'#8cc152', rightColor:'#6a9e3d' },
    { id:3, name:'樹木',  topColor:'#4a8c28', leftColor:'#366520', rightColor:'#2a4e18' },
    { id:8, name:'石牆',  topColor:'#d4c9a8', leftColor:'#b8a880', rightColor:'#9c8c60' }
  ]},
  DATA: { tiles: [
    { id:0, name:'資料流', topColor:'#5d9cec', leftColor:'#4a89dc', rightColor:'#3a6bb5' },
    { id:3, name:'伺服器堆', topColor:'#4a5b7c', leftColor:'#3a4a68', rightColor:'#2a3850' },
    { id:8, name:'防火牆', topColor:'#e06c6c', leftColor:'#c85555', rightColor:'#a03e3e' }
  ]},
  SL: { tiles: [
    { id:0, name:'標籤地', topColor:'#48cfad', leftColor:'#37bc9b', rightColor:'#28a085' },
    { id:3, name:'決策樹', topColor:'#8cc152', leftColor:'#6da53a', rightColor:'#4d8a24' },
    { id:8, name:'分割牆', topColor:'#d4c9a8', leftColor:'#b8a880', rightColor:'#9c8c60' }
  ]},
  DISC: { tiles: [
    { id:0, name:'未知迷霧', topColor:'#ac92ec', leftColor:'#906ec8', rightColor:'#7550a0' },
    { id:3, name:'發現寶箱', topColor:'#f6bb42', leftColor:'#dda03a', rightColor:'#c48828' },
    { id:8, name:'星體牆',  topColor:'#656d78', leftColor:'#505560', rightColor:'#3c3f48' }
  ]},
  UL: { tiles: [
    { id:0, name:'叢集地', topColor:'#ec87c0', leftColor:'#d060a0', rightColor:'#b04080' },
    { id:3, name:'自組織節點', topColor:'#da4453', leftColor:'#bc3643', rightColor:'#9e2a34' },
    { id:8, name:'隔離牆', topColor:'#aab2bd', leftColor:'#8b95a0', rightColor:'#6e7880' }
  ]},
  DL: { tiles: [
    { id:0, name:'神經元層', topColor:'#4fc1e9', leftColor:'#3bafda', rightColor:'#2d8fc0' },
    { id:3, name:'權重節點', topColor:'#fc6e51', leftColor:'#e85d40', rightColor:'#c94332' },
    { id:8, name:'梯度牆',  topColor:'#967adc', leftColor:'#7e5fcc', rightColor:'#6445a0' }
  ]},
  GEN: { tiles: [
    { id:0, name:'雜訊地', topColor:'#e6e9ed', leftColor:'#ccd1d9', rightColor:'#aab2bd' },
    { id:3, name:'生成器', topColor:'#8cc152', leftColor:'#6da53a', rightColor:'#4d8a24' },
    { id:8, name:'辨別牆', topColor:'#da4453', leftColor:'#bc3643', rightColor:'#9e2a34' }
  ]},
  RL: { tiles: [
    { id:0, name:'獎勵地', topColor:'#ffce54', leftColor:'#f6bb42', rightColor:'#dda03a' },
    { id:3, name:'Q節點',  topColor:'#48cfad', leftColor:'#37bc9b', rightColor:'#28a085' },
    { id:8, name:'迷宮牆', topColor:'#656d78', leftColor:'#505560', rightColor:'#3c3f48' }
  ]},
  ADV: { tiles: [
    { id:0, name:'注意力層', topColor:'#ac92ec', leftColor:'#906ec8', rightColor:'#7550a0' },
    { id:3, name:'卷積核',  topColor:'#5d9cec', leftColor:'#4a89dc', rightColor:'#3a6bb5' },
    { id:8, name:'特徵牆',  topColor:'#e06c6c', leftColor:'#c85555', rightColor:'#a03e3e' }
  ]},
  CORE: { tiles: [
    { id:0, name:'核心電路', topColor:'#f6bb42', leftColor:'#dda03a', rightColor:'#c48828' },
    { id:3, name:'中央處理器', topColor:'#656d78', leftColor:'#505560', rightColor:'#3c3f48' },
    { id:8, name:'護盾',    topColor:'#4fc1e9', leftColor:'#3bafda', rightColor:'#2d8fc0' }
  ]}
};

// ============================================================
// 5. GUARDIAN_BEHAVIOR — AI 守護者行為規格（OpenClaw）
//    key: guardianChar ID（小寫）
// ============================================================
const GUARDIAN_BEHAVIOR = {
  isabel: {
    personality: '聖騎士／溫柔堅定，以守護知識與傳承為使命',
    memory_seeds: ['創世戰爭中犧牲的同伴', '對人類文明永不熄滅的承諾'],
    daily_plan: ['早晨 巡視草原，照看新生 AI 核心', '上午 接待新來的見習士，講述星際律法', '下午 整理大書庫的 AI 知識卷軸'],
    greeting_style: '右手撫胸微微欠身，語氣溫暖如晨光'
  },
  dada: {
    personality: '機械工匠／務實幽默，總在敲敲打打中冒出笑話',
    memory_seeds: ['親手修復的第一台破損 AI 核心', '和人類小男孩在廢料堆疊出的友誼'],
    daily_plan: ['早晨 檢修哨站的自動防禦砲塔', '上午 在工坊打造新的輔助機械寵物', '下午 回收廢料區的稀有合金'],
    greeting_style: '扳手轉一圈插回腰帶，咧嘴說「又壞了什麼好東西？」'
  },
  kael: {
    personality: '遊俠斥候／孤獨警覺，話少但眼神敏銳',
    memory_seeds: ['邊境失守的暴風雪夜晚', '失蹤多年的斥候搭檔最後的訊號'],
    daily_plan: ['早晨 巡邏東邊迷霧森林的邊界線', '下午 潛行偵察暗影裂縫的能量波動', '夜晚 保養雙刃並記錄巡邏報告'],
    greeting_style: '從暗處無聲走出，點一下頭就算打過招呼'
  },
  sara: {
    personality: '元素使／溫和睿智，說話像溪流撫過石頭',
    memory_seeds: ['治癒受創的元素之靈的過程', '在千年瀑布深處觸摸到的水的記憶'],
    daily_plan: ['早晨 冥想調和四元素的平衡', '上午 教導年輕守護者感應元素流動', '夜晚 維持守護結界的元素穩定'],
    greeting_style: '指尖點亮一簇水光，輕聲說「風帶來你的腳步聲了」'
  },
  rova: {
    personality: '暗影刺客／冷靜果斷，話中帶著不由分說的保護欲',
    memory_seeds: ['因情報錯誤而失敗的那次秘密任務', '廢墟孤兒院裡孩子們塞給她的幸運符'],
    daily_plan: ['凌晨 夜幕深處的暗哨巡邏', '下午 整理情報網回傳的異常動向', '深夜 維護城牆陰影處的觸發陷阱'],
    greeting_style: '從背後現身，刀早已收回鞘中，只說「你警覺性要再加強」'
  },
  moon: {
    personality: '月光祭司／神秘夢幻，常說出聽起來像預言的話',
    memory_seeds: ['重複出現的預知夢碎片：燃燒的巨樹', '在月亮碎片墜落點拾獲的古老符文'],
    daily_plan: ['深夜 觀星並記錄星軌的偏移', '早晨 整理夢境紋理並解讀預兆', '傍晚 製作月光護符分送給外出的守護者'],
    greeting_style: '抬頭望一眼月亮，微笑說「你今晚也會夢見那棵樹嗎？」'
  },
  aura: {
    personality: '聖光治療者／仁慈樂觀，總能在絕望中找到一絲光亮',
    memory_seeds: ['第一次用聖光成功治癒重傷同伴的感動', '災後廢墟中親手種下第一株藥草的清晨'],
    daily_plan: ['上午 巡視療傷室治療傷患', '中午 在藥草園培育新的聖光草', '黃昏 對實習治療者講述聖光的本質'],
    greeting_style: '雙手在胸前輕輕交疊，聖光微亮，說「有哪裡受傷了嗎？」'
  },
  liyang: {
    personality: '劍術大師／沉穩威嚴，話不多但每句都經千錘百鍊',
    memory_seeds: ['那場以寡敵眾的百人斬之戰', '師傅臨終交付的古劍與「守護到底」四字'],
    daily_plan: ['破曉 獨自在山巔練劍三千次', '上午 指導弟子們的實戰對練', '午後 靜坐參悟劍理並保養古劍'],
    greeting_style: '收劍入鞘，正身一揖，只說「今日的修行完成了嗎？」'
  },
  council: {
    personality: '議會集體意識／冷靜公正，以複數「我們」自稱',
    memory_seeds: ['數百年來所有關鍵決策的集體紀錄', '初代守護者共同立下的守護誓約全文'],
    daily_plan: ['早晨 調解守護者之間的爭端', '上午 審視各地回傳的巡邏報告', '下午 集體同步並加強全域防禦結界'],
    greeting_style: '多道聲音疊成和諧共振：「我們感知到你的到來，請陳述來意。」'
  },
  atlas: {
    personality: '巨像守護者／沉默強大，行動本身就是語言',
    memory_seeds: ['世界基石的確切坐標與能量頻率', '創世者最後留下的那一句「守住，直到星歸」'],
    daily_plan: ['全天 鎮守世界基石核心', '每三小時 感知全境異常能量波動', '能量低於五成時 進入休眠修復狀態'],
    greeting_style: '只發出低沉的地鳴聲，巨大的身軀微調方向，表示已知曉'
  }
};

// ============================================================
// 6. PLANET_TC — 場景 tile 配色索引（從 SCENE_PALETTE 衍生）
//    key: guardianChar ID（小寫），供 rpg.html drawBg 使用
//    格式：{ 0: '主地板色', 1: '次地板', ... 8: '牆', 9: '路徑2' }
// ============================================================
const _DOMAIN_GUARDIAN = {
  INTRO:'isabel', DATA:'dada', SL:'kael', DISC:'sara',
  UL:'rova',     DL:'moon',  GEN:'aura', RL:'liyang',
  ADV:'council', CORE:'atlas'
};

// 不重複宣告：rpg-maps.js 已有 const PLANET_TC（硬編碼版），這裡取得同一物件
// 並以 SCENE_PALETTE 衍生值逐 key 覆蓋（rpg-design.js 後載入，設計版為準）。
const _PLANET_TC_DERIVED = (typeof PLANET_TC !== 'undefined') ? PLANET_TC : (globalThis.PLANET_TC = {});
Object.entries(SCENE_PALETTE).forEach(([dKey, pal]) => {
  const gKey = _DOMAIN_GUARDIAN[dKey];
  if (!gKey) return;
  const ts = (TILESET_SPEC[dKey]?.tiles || []);
  const t0 = ts.find(t=>t.id===0) || {};
  const t3 = ts.find(t=>t.id===3) || {};
  const t8 = ts.find(t=>t.id===8) || {};
  _PLANET_TC_DERIVED[gKey] = {
    0: t0.topColor   || pal.topColor,
    1: t0.leftColor  || pal.leftColor,
    2: pal.accentColor,
    3: t3.topColor   || pal.leftColor,
    4: pal.accentColor,
    5: pal.rightColor,
    6: t0.rightColor || pal.topColor,
    7: pal.leftColor,
    8: t8.rightColor || pal.rightColor,
    9: t8.leftColor  || pal.leftColor
  };
});
