// js/starmap.js — AI 星象圖 v5.0
// 參考圖：0.jpg(四象二十八星宿星群連線) + 1.jpg(十二星座連線圖)
// 四象不標名稱，以各宿星群連線造型體現
// 十二星座以實際星點連線造型呈現（不用♈–♓符號）

(function(global) {
  'use strict';

  // ── 二十八星宿（各宿星群連線造型，正規化座標 ±15px）─────────────────────
  // g: N=北方玄武(blue) E=東方青龍(green) W=西方白虎(silver) S=南方朱雀(red)

  const MANSIONS = [
    // ── 北方玄武七宿 ──────────────────────────────────────────────────────────
    { sym:'斗', g:'N', stars:[[-6,-8],[-2,-12],[4,-10],[8,-4],[4,2],[-2,4]], lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[2,4]] },
    { sym:'牛', g:'N', stars:[[-7,-10],[7,-10],[-2,-3],[2,-3],[0,4],[0,10]], lines:[[0,2],[1,3],[2,3],[2,4],[3,4],[4,5]] },
    { sym:'女', g:'N', stars:[[-4,-8],[4,-8],[0,-2],[-7,5],[7,5]],           lines:[[0,2],[1,2],[2,3],[2,4]] },
    { sym:'虛', g:'N', stars:[[-6,-3],[6,3]],                                lines:[[0,1]] },
    { sym:'危', g:'N', stars:[[0,-10],[-6,2],[6,2],[0,8]],                   lines:[[0,1],[0,2],[1,3],[2,3]] },
    { sym:'室', g:'N', stars:[[-8,-4],[8,-4],[8,5],[-8,5],[0,-11]],          lines:[[0,1],[1,2],[2,3],[3,0],[0,4],[1,4]] },
    { sym:'壁', g:'N', stars:[[-6,-8],[6,8],[0,0],[6,-8],[-6,8]],            lines:[[0,2],[2,1],[3,2],[2,4]] },

    // ── 東方青龍七宿 ──────────────────────────────────────────────────────────
    { sym:'角', g:'E', stars:[[-8,-4],[8,4]],                                lines:[[0,1]] },
    { sym:'亢', g:'E', stars:[[-6,-6],[-2,-12],[6,-4],[0,4]],                lines:[[0,1],[1,2],[2,3],[3,0]] },
    { sym:'氐', g:'E', stars:[[-8,-4],[8,-4],[8,5],[-8,5]],                  lines:[[0,1],[1,2],[2,3],[3,0]] },
    { sym:'房', g:'E', stars:[[-6,-8],[6,-8],[6,8],[-6,8]],                  lines:[[0,1],[1,2],[2,3],[3,0],[0,2]] },
    { sym:'心', g:'E', stars:[[-10,0],[0,-4],[10,0]],                        lines:[[0,1],[1,2]] },
    { sym:'尾', g:'E', stars:[[-4,-14],[-2,-7],[0,0],[2,6],[4,10],[6,12],[4,6],[2,14],[-2,18]], lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[3,7],[7,8]] },
    { sym:'箕', g:'E', stars:[[0,-8],[-10,4],[0,10],[10,4]],                 lines:[[0,1],[1,2],[2,3],[3,0]] },

    // ── 西方白虎七宿 ──────────────────────────────────────────────────────────
    { sym:'奎', g:'W', stars:[[0,-12],[-5,-6],[5,-6],[-8,0],[8,0],[-5,6],[5,6],[0,10]], lines:[[0,1],[0,2],[1,3],[2,4],[3,5],[4,6],[5,7],[6,7],[1,4]] },
    { sym:'婁', g:'W', stars:[[-8,0],[0,-8],[8,0]],                          lines:[[0,1],[1,2]] },
    { sym:'胃', g:'W', stars:[[0,-8],[-6,4],[6,4]],                          lines:[[0,1],[1,2],[2,0]] },
    { sym:'昴', g:'W', stars:[[0,0],[-6,-6],[6,-6],[-8,0],[8,0],[-4,6],[4,6]], lines:[[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[1,2],[5,6]] },
    { sym:'畢', g:'W', stars:[[-4,-10],[0,-4],[4,-10],[-7,2],[7,2],[-4,8],[0,12],[4,8]], lines:[[0,1],[2,1],[1,3],[1,4],[3,5],[5,6],[6,7],[7,4]] },
    { sym:'觜', g:'W', stars:[[-6,-4],[6,-4],[0,6]],                         lines:[[0,2],[2,1],[0,1]] },
    { sym:'參', g:'W', stars:[[0,-12],[-6,-6],[6,-6],[-4,0],[0,0],[4,0],[0,8]], lines:[[0,1],[0,2],[1,3],[2,5],[3,4],[4,5],[3,6],[5,6]] },

    // ── 南方朱雀七宿 ──────────────────────────────────────────────────────────
    { sym:'井', g:'S', stars:[[-6,-6],[6,-6],[8,0],[6,6],[-6,6],[-8,0],[0,-12],[0,10]], lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[0,6],[1,6]] },
    { sym:'鬼', g:'S', stars:[[0,0],[-6,-6],[6,-6],[-6,6],[6,6]],            lines:[[0,1],[0,2],[0,3],[0,4],[1,2],[3,4]] },
    { sym:'柳', g:'S', stars:[[-10,-4],[-6,-8],[-2,-6],[2,-4],[6,-2],[8,2],[6,6],[2,8]], lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]] },
    { sym:'星', g:'S', stars:[[0,0],[-8,0],[8,0],[0,-8],[0,8],[-4,-4],[4,4]],lines:[[0,1],[0,2],[0,3],[0,4],[0,5],[0,6]] },
    { sym:'張', g:'S', stars:[[-8,-4],[0,-8],[8,-4],[8,4],[0,8],[-8,4]],     lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,0]] },
    { sym:'翼', g:'S', stars:[[-10,-6],[-4,-10],[4,-10],[10,-6],[6,0],[0,2],[-6,0],[-4,8],[4,8]], lines:[[0,1],[1,2],[2,3],[0,6],[3,4],[4,5],[5,6],[5,7],[5,8],[7,8]] },
    { sym:'軫', g:'S', stars:[[-6,-6],[6,-6],[6,6],[-6,6]],                  lines:[[0,1],[1,2],[2,3],[3,0],[0,2],[1,3]] },
  ];

  // 四象方位顏色（以色彩體現方位，不標名稱）
  const GROUP_COLOR = { N:'#60a5fa', E:'#4ade80', W:'#d1d5db', S:'#f87171' };

  // 各方位七宿的角度（度）
  // N=頂(-90°)，E=左(180°)，W=右(0°)，S=底(90°)，各展±40°
  const GROUP_ANGLES = {
    N: [-130,-117,-103,-90,-77,-63,-50],
    E: [ 140, 153, 167,180,193,207,220],
    W: [ -40, -27, -13,  0, 13, 27, 40],
    S: [  50,  63,  77, 90,103,117,130],
  };

  // ── 十二星座（中環星群連線造型，正規化座標 ±18px）────────────────────────
  const ZODIAC_PATTERNS = [
    { name:'牡羊', stars:[[-12,4],[-6,0],[0,-5],[8,-2],[14,4]], lines:[[0,1],[1,2],[2,3],[3,4]] },
    { name:'金牛', stars:[[-10,8],[-5,2],[0,-2],[5,2],[10,8],[2,-9]], lines:[[0,1],[1,2],[2,3],[3,4],[2,5]] },
    { name:'雙子', stars:[[-8,-10],[-8,-2],[-8,6],[-8,14],[8,-10],[8,-2],[8,6],[8,14]], lines:[[0,1],[1,2],[2,3],[4,5],[5,6],[6,7],[1,5],[2,6]] },
    { name:'巨蟹', stars:[[0,-12],[0,-4],[-9,4],[9,4],[-5,12],[5,12]], lines:[[0,1],[1,2],[1,3],[2,4],[3,5]] },
    { name:'獅子', stars:[[0,-12],[4,-6],[8,0],[4,5],[-2,5],[-6,2],[-4,-3],[6,10],[2,14]], lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,1],[7,8]] },
    { name:'處女', stars:[[-10,-10],[0,-6],[10,-10],[2,0],[0,8],[-8,14],[4,14]], lines:[[0,1],[2,1],[1,3],[3,4],[4,5],[4,6]] },
    { name:'天秤', stars:[[0,-12],[-10,0],[0,6],[10,0],[-6,12],[6,12]], lines:[[0,1],[0,3],[1,2],[3,2],[1,4],[3,5],[4,5]] },
    { name:'天蠍', stars:[[-8,-14],[-4,-8],[0,-2],[2,4],[4,8],[6,10],[8,8],[6,12],[2,16]], lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[5,7],[7,8]] },
    { name:'射手', stars:[[-10,-6],[-6,-12],[0,-8],[8,-10],[6,-2],[0,4],[-6,4],[6,8],[10,12]], lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0],[4,7],[7,8]] },
    { name:'摩羯', stars:[[-12,-6],[-6,-10],[0,-12],[6,-8],[12,-4],[8,4],[2,8],[-4,6],[-10,2]], lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,0]] },
    { name:'水瓶', stars:[[-12,-6],[-4,-10],[4,-8],[12,-4],[8,2],[0,4],[-8,2],[-4,10],[4,12]], lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8]] },
    { name:'雙魚', stars:[[-10,-10],[-14,-2],[-10,6],[-4,2],[-2,-6],[2,-6],[4,2],[10,6],[14,-2],[10,-10],[0,0]], lines:[[0,1],[1,2],[2,3],[3,4],[4,0],[5,6],[6,7],[7,8],[8,9],[9,5],[3,10],[10,6]] },
  ];

  // ── AI 類別定義 ──────────────────────────────────────────────────────────────
  const CAT_DEFS = [
    { cat:'機器學習',  color:'#a78bfa', shortName:'ML'  },
    { cat:'深度學習',  color:'#fbbf24', shortName:'DL'  },
    { cat:'神經網路',  color:'#34d399', shortName:'NN'  },
    { cat:'生成式 AI', color:'#7dd3fc', shortName:'GEN' },
    { cat:'電腦視覺',  color:'#f472b6', shortName:'CV'  },
    { cat:'NLP基礎',   color:'#fb923c', shortName:'NLP' },
    { cat:'AI 代理人', color:'#c084fc', shortName:'AGT' },
  ];

  const CROSS_LINKS = [
    { a:'機器學習',  b:'深度學習'  },
    { a:'深度學習',  b:'神經網路'  },
    { a:'神經網路',  b:'電腦視覺'  },
    { a:'神經網路',  b:'生成式 AI' },
    { a:'生成式 AI', b:'NLP基礎'   },
    { a:'生成式 AI', b:'AI 代理人' },
    { a:'NLP基礎',   b:'AI 代理人' },
  ];

  // ── 主類別 ───────────────────────────────────────────────────────────────────

  class ConstellationAtlas {
    constructor(container, topics) {
      this._el      = typeof container === 'string' ? document.querySelector(container) : container;
      this._topics  = topics || [];
      this._rot     = 0;
      this._autoRot = true;
      this._speed   = 0.005;
      this._visible = false;
      this._raf     = null;

      this._calc();
      this._buildClusters();
      this._buildSVG();
      this._drawAll();
      this._bindDrag();
    }

    // ── 尺寸計算 ──────────────────────────────────────────────────────────────

    _calc() {
      this._W      = this._el.clientWidth  || window.innerWidth;
      this._H      = this._el.clientHeight || window.innerHeight;
      this._cx     = this._W / 2;
      this._cy     = this._H / 2;
      const md     = Math.min(this._W, this._H - 90);
      this._orbitR = md * 0.300;   // AI 星座群軌道半徑（內環）
      this._zodR   = md * 0.415;   // 十二星座星群半徑（中環）
      this._sxR    = md * 0.530;   // 二十八宿半徑（外環）
      this._coreR  = md * 0.055;   // 中心核心
    }

    _d2r(d) { return d * Math.PI / 180; }
    _pt(deg, r) {
      const a = this._d2r(deg);
      return [Math.cos(a) * r, Math.sin(a) * r];
    }

    // ── 類別名稱正規化 ────────────────────────────────────────────────────────

    _normCat(raw) {
      const c = String(raw || '').split('\n')[0].trim()
        .replace(/\s+/g, ' ')
        .replace(/NLP\s*基礎/i, 'NLP基礎')
        .replace(/生成式AI/i,   '生成式 AI')
        .replace(/AI\s*代理人/i,'AI 代理人');
      for (const d of CAT_DEFS) {
        if (c === d.cat) return d.cat;
      }
      for (const d of CAT_DEFS) {
        if (c.includes(d.cat) || d.cat.includes(c.replace(/ /g,''))) return d.cat;
      }
      const cl = c.toLowerCase();
      if (cl.includes('ml') || cl.includes('機器')) return '機器學習';
      if (cl.includes('dl') || cl.includes('深度')) return '深度學習';
      if (cl.includes('nn') || cl.includes('神經')) return '神經網路';
      if (cl.includes('gen')|| cl.includes('生成')) return '生成式 AI';
      if (cl.includes('cv') || cl.includes('視覺')) return '電腦視覺';
      if (cl.includes('nlp')|| cl.includes('語言')) return 'NLP基礎';
      if (cl.includes('agt')|| cl.includes('代理')) return 'AI 代理人';
      return '生成式 AI';
    }

    // ── 建立各星座群 ──────────────────────────────────────────────────────────

    _buildClusters() {
      const byCat = {};
      this._topics.forEach(t => {
        const cat = this._normCat(t.category);
        (byCat[cat] ??= []).push(t);
      });

      const nCats  = CAT_DEFS.length;
      this._clusters = [];

      CAT_DEFS.forEach((def, ci) => {
        const items      = byCat[def.cat] || [];
        const centerAngle = (ci / nCats) * 360 - 90;
        const [gcx, gcy] = this._pt(centerAngle, this._orbitR);
        const n          = items.length;
        const groupR     = Math.max(28, Math.min(75, 20 + Math.sqrt(n) * 8));
        const GOLDEN     = Math.PI * (3 - Math.sqrt(5));

        const nodes = items.map((t, i) => {
          const r     = groupR * Math.sqrt((i + 0.5) / Math.max(n, 1));
          const theta = i * GOLDEN;
          return {
            id:    String(t.id || `${ci}_${i}`),
            title: t.title    || '',
            eng:   t.eng_name || '',
            cat:   def.cat,
            def:   t.def      || '',
            color: def.color,
            r:     t.key_goal ? 5.5 : 3.5,
            lx: gcx + r * Math.cos(theta),
            ly: gcy + r * Math.sin(theta),
          };
        });
        nodes.forEach(n => { n.x = n.lx; n.y = n.ly; });

        const links = this._mstLinks(nodes);
        this._clusters.push({ def, centerAngle, gcx, gcy, groupR, nodes, links,
          label: def.cat, labelColor: def.color });
      });

      this._allNodes = this._clusters.flatMap(c => c.nodes);
      this._allLinks = this._clusters.flatMap(c => c.links);
    }

    _mstLinks(nodes) {
      if (nodes.length <= 1) return [];
      const n    = nodes.length;
      const dist = (a, b) => Math.hypot(a.lx - b.lx, a.ly - b.ly);
      const inMST = new Set([0]);
      const links = [];
      while (inMST.size < n) {
        let best = { d: Infinity, i: -1, j: -1 };
        inMST.forEach(i => {
          for (let j = 0; j < n; j++) {
            if (inMST.has(j)) continue;
            const d = dist(nodes[i], nodes[j]);
            if (d < best.d) best = { d, i, j };
          }
        });
        if (best.j === -1) break;
        inMST.add(best.j);
        links.push({ s: nodes[best.i], t: nodes[best.j] });
      }
      const used = new Set(links.map(l => `${l.s.id}-${l.t.id}`));
      nodes.forEach((a, i) => {
        nodes.map((b, j) => ({ j, d: dist(a, b) }))
          .filter(({ j }) => j !== i)
          .sort((x, y) => x.d - y.d)
          .slice(0, 3)
          .forEach(({ j }) => {
            const k1 = `${a.id}-${nodes[j].id}`, k2 = `${nodes[j].id}-${a.id}`;
            if (!used.has(k1) && !used.has(k2) && dist(a, nodes[j]) < 55) {
              used.add(k1);
              links.push({ s: a, t: nodes[j] });
            }
          });
      });
      return links;
    }

    // ── SVG 建構 ──────────────────────────────────────────────────────────────

    _buildSVG() {
      d3.select(this._el).select('svg.ca-svg').remove();
      this._svg = d3.select(this._el).append('svg')
        .attr('class', 'ca-svg')
        .attr('width', '100%').attr('height', '100%')
        .style('position', 'absolute').style('top', 0).style('left', 0)
        .style('display', 'none');

      const defs = this._svg.append('defs');

      const sf = defs.append('filter').attr('id', 'star-glow')
        .attr('x', '-150%').attr('y', '-150%').attr('width', '500%').attr('height', '500%');
      sf.append('feGaussianBlur').attr('in', 'SourceGraphic').attr('stdDeviation', 3.5).attr('result', 'b');
      const sm = sf.append('feMerge');
      sm.append('feMergeNode').attr('in', 'b');
      sm.append('feMergeNode').attr('in', 'SourceGraphic');

      const cf = defs.append('filter').attr('id', 'core-glow')
        .attr('x', '-100%').attr('y', '-100%').attr('width', '400%').attr('height', '400%');
      cf.append('feGaussianBlur').attr('in', 'SourceGraphic').attr('stdDeviation', 10).attr('result', 'b');
      const cm = cf.append('feMerge');
      cm.append('feMergeNode').attr('in', 'b');
      cm.append('feMergeNode').attr('in', 'SourceGraphic');

      const grad = defs.append('radialGradient').attr('id', 'core-grad').attr('cx', '35%').attr('cy', '35%');
      grad.append('stop').attr('offset', '0%').attr('stop-color', '#fff7d6');
      grad.append('stop').attr('offset', '45%').attr('stop-color', '#fbbf24');
      grad.append('stop').attr('offset', '100%').attr('stop-color', '#b45309');

      this._root    = this._svg.append('g').attr('transform', `translate(${this._cx},${this._cy})`);
      this._rotG    = this._root.append('g').attr('class', 'ca-rotg');
      this._staticG = this._root.append('g').attr('class', 'ca-static');
    }

    // ── 繪圖總入口 ────────────────────────────────────────────────────────────

    _drawAll() {
      this._drawOrbitalRings();
      this._drawCrossLinks();
      this._drawMansions();       // 二十八星宿（外環）
      this._drawZodiacPatterns(); // 十二星座（中環）
      this._drawClusters();       // AI 類別星點（內環）
      this._drawCore();
    }

    // ── 軌道環 ────────────────────────────────────────────────────────────────

    _drawOrbitalRings() {
      const g = this._rotG.append('g').attr('class', 'ca-orbit');

      // 內環虛線（AI 星座群）
      g.append('circle').attr('r', this._orbitR)
        .attr('fill', 'none').attr('stroke', 'rgba(125,211,252,0.14)')
        .attr('stroke-width', 1).attr('stroke-dasharray', '6,9');

      // 十二星座雙環
      [this._zodR - 16, this._zodR + 16].forEach(r =>
        g.append('circle').attr('r', r).attr('fill', 'none')
          .attr('stroke', 'rgba(125,211,252,0.12)').attr('stroke-width', 0.7));

      // 30度分割線（黃道十二宮）
      for (let i = 0; i < 12; i++) {
        const a = i * 30;
        const [x1, y1] = this._pt(a, this._zodR - 16);
        const [x2, y2] = this._pt(a, this._zodR + 16);
        g.append('line').attr('x1', x1).attr('y1', y1).attr('x2', x2).attr('y2', y2)
          .attr('stroke', 'rgba(125,211,252,0.09)').attr('stroke-width', 0.6);
      }

      // 二十八宿外環
      g.append('circle').attr('r', this._sxR)
        .attr('fill', 'none').attr('stroke', 'rgba(125,211,252,0.08)')
        .attr('stroke-width', 0.8).attr('stroke-dasharray', '2,10');

      // 最外邊界
      g.append('circle').attr('r', this._sxR + 36)
        .attr('fill', 'none').attr('stroke', 'rgba(125,211,252,0.04)')
        .attr('stroke-width', 1).attr('stroke-dasharray', '1,14');
    }

    // ── 跨類別語意連線 ────────────────────────────────────────────────────────

    _drawCrossLinks() {
      const g = this._rotG.append('g').attr('class', 'ca-crosslinks');
      const byName = Object.fromEntries(this._clusters.map(c => [c.def.cat, c]));

      CROSS_LINKS.forEach(({ a, b }) => {
        const ca = byName[a], cb = byName[b];
        if (!ca || !cb || !ca.nodes.length || !cb.nodes.length) return;
        const dx = cb.gcx - ca.gcx, dy = cb.gcy - ca.gcy;
        const dirAngle = Math.atan2(dy, dx);
        const sortedA = [...ca.nodes].sort((p, q) => {
          const ap = Math.atan2(p.ly - ca.gcy, p.lx - ca.gcx);
          const aq = Math.atan2(q.ly - ca.gcy, q.lx - ca.gcx);
          return Math.abs(this._angleDiff(ap, dirAngle)) - Math.abs(this._angleDiff(aq, dirAngle));
        });
        const nodeA = sortedA[0];
        const nodeB = cb.nodes.reduce((best, n) =>
          Math.hypot(n.lx - nodeA.lx, n.ly - nodeA.ly) <
          Math.hypot(best.lx - nodeA.lx, best.ly - nodeA.ly) ? n : best, cb.nodes[0]);

        g.append('line')
          .attr('x1', nodeA.lx).attr('y1', nodeA.ly)
          .attr('x2', nodeB.lx).attr('y2', nodeB.ly)
          .attr('stroke', ca.def.color).attr('stroke-opacity', 0.10)
          .attr('stroke-width', 0.5).attr('stroke-dasharray', '4,7');
      });
    }

    _angleDiff(a, b) {
      let d = a - b;
      while (d > Math.PI)  d -= 2 * Math.PI;
      while (d < -Math.PI) d += 2 * Math.PI;
      return d;
    }

    // ── 二十八星宿（外環，星群連線造型，不標四象名稱）─────────────────────

    _drawMansions() {
      const g = this._rotG.append('g').attr('class', 'ca-mansions');

      // 計算每宿在外環的位置
      const groupOrder = { N:0, E:7, W:14, S:21 };

      MANSIONS.forEach((m, idx) => {
        const grp     = m.g;
        const gAngles = GROUP_ANGLES[grp];
        const localIdx= idx - groupOrder[grp];
        if (localIdx < 0 || localIdx >= gAngles.length) return;

        const angle   = gAngles[localIdx];
        const color   = GROUP_COLOR[grp];
        const [cx, cy]= this._pt(angle, this._sxR);

        const mg = g.append('g')
          .attr('class', `mansion-${m.sym}`)
          .attr('transform', `translate(${cx},${cy})`);

        // 星座連線
        m.lines.forEach(([si, ti]) => {
          const s = m.stars[si], t = m.stars[ti];
          mg.append('line')
            .attr('x1', s[0]).attr('y1', s[1]).attr('x2', t[0]).attr('y2', t[1])
            .attr('stroke', color).attr('stroke-opacity', 0.50)
            .attr('stroke-width', 0.9);
        });

        // 星點
        m.stars.forEach((s, si) => {
          const isKey = si === 0 || si === 1 || si === m.stars.length - 1;
          mg.append('circle')
            .attr('cx', s[0]).attr('cy', s[1])
            .attr('r', isKey ? 2.5 : 1.6)
            .attr('fill', color)
            .attr('fill-opacity', isKey ? 0.92 : 0.68)
            .style('filter', 'url(#star-glow)');
        });

      });
    }

    // ── 十二星座（中環，星群連線造型）──────────────────────────────────────

    _drawZodiacPatterns() {
      const g = this._rotG.append('g').attr('class', 'ca-zodiac');

      ZODIAC_PATTERNS.forEach((pat, i) => {
        const midAngle = i * 30 + 15;
        const [cx, cy] = this._pt(midAngle, this._zodR);

        const pg = g.append('g')
          .attr('class', `zod-${i}`)
          .attr('transform', `translate(${cx},${cy})`);

        // 星座連線
        pat.lines.forEach(([si, ti]) => {
          const s = pat.stars[si], t = pat.stars[ti];
          pg.append('line')
            .attr('x1', s[0]).attr('y1', s[1]).attr('x2', t[0]).attr('y2', t[1])
            .attr('stroke', 'rgba(200,220,255,0.50)').attr('stroke-width', 0.9);
        });

        // 星點
        pat.stars.forEach((s, si) => {
          const isMain = si === 0 || si === pat.stars.length - 1;
          pg.append('circle')
            .attr('cx', s[0]).attr('cy', s[1])
            .attr('r', isMain ? 2.4 : 1.6)
            .attr('fill', isMain ? '#e2e8f0' : 'rgba(180,210,255,0.80)')
            .style('filter', 'url(#star-glow)');
        });

        // 星座名稱（外側）
        const labelR  = this._zodR + 22;
        const [lx, ly]= this._pt(midAngle, labelR);
        g.append('text')
          .attr('x', lx).attr('y', ly)
          .attr('text-anchor', 'middle').attr('dy', '0.35em')
          .attr('fill', 'rgba(180,210,255,0.55)').attr('font-size', 9)
          .attr('pointer-events', 'none')
          .text(pat.name);
      });
    }

    // ── AI 類別星座群（內環）─────────────────────────────────────────────────

    _drawClusters() {
      const self = this;
      this._clusterEls = [];

      this._clusters.forEach((cluster, ci) => {
        const cg = this._rotG.append('g').attr('class', `ca-cluster ca-cluster-${ci}`);

        // 星座群標籤
        const labelOffset = cluster.groupR + 18;
        const [lx, ly]    = this._pt(cluster.centerAngle, this._orbitR + labelOffset);
        cg.append('text').attr('x', lx).attr('y', ly - 4)
          .attr('text-anchor', 'middle').attr('fill', cluster.labelColor)
          .attr('font-size', 11).attr('font-weight', 700).attr('letter-spacing', 1)
          .attr('pointer-events', 'none').text(cluster.label);
        cg.append('text').attr('x', lx).attr('y', ly + 9)
          .attr('text-anchor', 'middle').attr('fill', cluster.labelColor + '88')
          .attr('font-size', 8).attr('pointer-events', 'none')
          .text(`(${cluster.def.shortName})`);

        // 星線
        const linesSel = cg.selectAll(`line.clink-${ci}`)
          .data(cluster.links).join('line')
          .attr('class', `clink-${ci}`)
          .attr('x1', d => d.s.lx).attr('y1', d => d.s.ly)
          .attr('x2', d => d.t.lx).attr('y2', d => d.t.ly)
          .attr('stroke', cluster.def.color).attr('stroke-opacity', 0.35).attr('stroke-width', 1);

        // 星點
        const nodeSel = cg.selectAll(`g.cstar-${ci}`)
          .data(cluster.nodes).join('g')
          .attr('class', `cstar-${ci}`)
          .attr('transform', d => `translate(${d.lx},${d.ly})`)
          .style('cursor', 'pointer');

        nodeSel.append('circle').attr('r', d => d.r * 3)
          .attr('fill', cluster.def.color + '18').attr('pointer-events', 'none');

        nodeSel.append('circle').attr('r', d => d.r)
          .attr('fill', cluster.def.color)
          .attr('stroke', '#ffffff').attr('stroke-width', 0.5).attr('stroke-opacity', 0.6)
          .style('filter', 'url(#star-glow)');

        nodeSel.filter((d, i) => d.r > 5 || i % 5 === 0)
          .append('text')
          .attr('text-anchor', 'middle').attr('dy', d => -(d.r + 6))
          .attr('fill', cluster.def.color + 'ee').attr('font-size', 8)
          .attr('pointer-events', 'none')
          .text(d => d.title.length > 8 ? d.title.slice(0, 7) + '…' : d.title);

        nodeSel
          .on('mouseenter', (ev, d) => {
            d3.select(ev.currentTarget).select('circle:nth-child(2)')
              .transition().duration(120).attr('r', d.r * 2.5);
            linesSel
              .attr('stroke-opacity', l => l.s.id === d.id || l.t.id === d.id ? 1 : 0.15)
              .attr('stroke-width',   l => l.s.id === d.id || l.t.id === d.id ? 2.5 : 0.8);
            self._tooltip(ev, d);
          })
          .on('mouseleave', (ev, d) => {
            d3.select(ev.currentTarget).select('circle:nth-child(2)')
              .transition().duration(200).attr('r', d.r);
            linesSel.attr('stroke-opacity', 0.35).attr('stroke-width', 1);
            self._hideTooltip();
          })
          .on('click', (ev, d) => { ev.stopPropagation(); self._panel(d); });

        this._clusterEls.push({ cg, linesSel, nodeSel, cluster });
      });
    }

    // ── 中心核心 ──────────────────────────────────────────────────────────────

    _drawCore() {
      const g  = this._rotG.append('g').attr('class', 'ca-core');
      const r  = this._coreR;
      const r2 = r * 1.6;

      g.append('circle').attr('r', r2 + 8).attr('fill', 'none')
        .attr('stroke', 'rgba(125,211,252,0.08)').attr('stroke-width', 1).attr('stroke-dasharray', '3,12');
      g.append('circle').attr('r', r2).attr('fill', 'none')
        .attr('stroke', 'rgba(125,211,252,0.16)').attr('stroke-width', 1);
      g.append('circle').attr('r', r)
        .attr('fill', 'url(#core-grad)').style('filter', 'url(#core-glow)');
      g.append('text').attr('text-anchor', 'middle').attr('dy', '0.3em')
        .attr('fill', '#1c1917').attr('font-size', r * 0.55).attr('font-weight', 700).text('AI');

      for (let i = 0; i < 8; i++) {
        const a  = this._d2r(i * 45);
        const r0 = r + 2, r1 = r + (i % 2 === 0 ? 16 : 9);
        g.append('line')
          .attr('x1', Math.cos(a) * r0).attr('y1', Math.sin(a) * r0)
          .attr('x2', Math.cos(a) * r1).attr('y2', Math.sin(a) * r1)
          .attr('stroke', '#fbbf24')
          .attr('stroke-width', i % 2 === 0 ? 1.5 : 1).attr('stroke-opacity', 0.7);
      }
    }

    // ── Tooltip ───────────────────────────────────────────────────────────────

    _tooltip(ev, d) {
      const tip = document.getElementById('atlas-tooltip');
      if (!tip) return;
      tip.innerHTML = `<strong style="color:${d.color}">${d.title}</strong>
        ${d.eng ? `<br><span style="color:#94a3b8;font-size:10px">${d.eng}</span>` : ''}
        <br><span style="color:#64748b;font-size:10px">${d.cat}</span>`;
      tip.style.display = 'block';
      tip.style.left = Math.min(ev.clientX + 14, window.innerWidth  - 220) + 'px';
      tip.style.top  = Math.min(ev.clientY - 10, window.innerHeight -  80) + 'px';
    }

    _hideTooltip() {
      const t = document.getElementById('atlas-tooltip');
      if (t) t.style.display = 'none';
    }

    // ── 側板 ──────────────────────────────────────────────────────────────────

    _panel(node) {
      const p = document.getElementById('atlas-panel');
      if (!p) return;
      p.innerHTML = `
        <button class="panel-close"
          onclick="this.closest('#atlas-panel').classList.remove('show')">×</button>
        <span class="panel-color-dot" style="background:${node.color}"></span>
        <h3 class="panel-title">${node.title}</h3>
        ${node.eng ? `<div class="panel-eng">${node.eng}</div>` : ''}
        <p class="panel-def">${node.def || '暫無說明。'}</p>
        <div class="panel-cat" style="color:${node.color}">${node.cat}</div>
        <div class="panel-actions">
          <a class="panel-btn" href="chat.html?term=${encodeURIComponent(node.title)}" target="_blank">💬 問 AI</a>
          <a class="panel-btn" href="vocab.html" target="_blank">📖 詞庫</a>
        </div>`;
      p.classList.add('show');
    }

    // ── 拖曳旋轉 ──────────────────────────────────────────────────────────────

    _bindDrag() {
      const self = this;
      let dragging = false, lastX = 0;
      this._svg
        .on('pointerdown', ev => {
          if (['circle','text'].includes(ev.target.tagName.toLowerCase())) return;
          dragging = true; lastX = ev.clientX;
          self._autoRot = false; self._svg.style('cursor', 'grabbing');
        })
        .on('pointermove', ev => {
          if (!dragging) return;
          self._rot += (ev.clientX - lastX) * 0.22;
          lastX = ev.clientX;
          self._applyRot();
        })
        .on('pointerup',    () => { dragging = false; self._svg.style('cursor', 'grab'); })
        .on('pointerleave', () => { dragging = false; })
        .on('click', () => document.getElementById('atlas-panel')?.classList.remove('show'));
      this._svg.style('cursor', 'grab');
    }

    _applyRot() { this._rotG.attr('transform', `rotate(${this._rot})`); }

    _startAnim() {
      const self = this;
      (function loop() {
        if (self._visible && self._autoRot) {
          self._rot += self._speed;
          self._applyRot();
        }
        self._raf = requestAnimationFrame(loop);
      })();
    }

    // ── 搜尋 ──────────────────────────────────────────────────────────────────

    search(query) {
      if (!this._clusterEls) return;
      if (!query) {
        this._clusterEls.forEach(({ nodeSel, linesSel }) => {
          nodeSel.select('circle:nth-child(2)').attr('opacity', 1);
          linesSel.attr('stroke-opacity', 0.35);
        });
        return;
      }
      const q      = query.toLowerCase();
      const hitIds = new Set(
        this._allNodes
          .filter(n => n.title.toLowerCase().includes(q) || n.eng.toLowerCase().includes(q))
          .map(n => n.id)
      );
      this._clusterEls.forEach(({ nodeSel, linesSel }) => {
        nodeSel.select('circle:nth-child(2)').attr('opacity', d => hitIds.has(d.id) ? 1 : 0.08);
        linesSel.attr('stroke-opacity',
          l => hitIds.has(l.s.id) || hitIds.has(l.t.id) ? 0.7 : 0.05);
      });
      if (hitIds.size) {
        const first = this._allNodes.find(n => hitIds.has(n.id));
        if (first) {
          const cluster = this._clusters.find(c => c.nodes.includes(first));
          if (cluster) { this._rot = -cluster.centerAngle + 5; this._applyRot(); }
        }
      }
    }

    // ── Public API ────────────────────────────────────────────────────────────

    show() {
      this._visible = true;
      this._svg.style('display', 'block');
      if (!this._raf) this._startAnim();
    }

    hide() {
      this._visible = false;
      this._svg.style('display', 'none');
      this._hideTooltip();
    }

    toggleRotation() {
      this._autoRot = !this._autoRot;
      return this._autoRot;
    }
  }

  global.ConstellationAtlas = ConstellationAtlas;
  global.StarMap             = ConstellationAtlas;

})(window);
