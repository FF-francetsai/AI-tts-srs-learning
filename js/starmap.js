// js/starmap.js — 星圖 AI 知識圖譜 v2.0
// 十二星座 × 四象 為視覺框架，AI 術語作為星點排列成星線圖

(function(global) {
  'use strict';

  // ── 視覺框架資料 ──────────────────────────────────────────────────────────

  // 四象：四大背景分區
  const BEASTS = [
    { name: '青龍', color: '#4ade80', start: 0,   end: 90  },
    { name: '朱雀', color: '#f87171', start: 90,  end: 180 },
    { name: '白虎', color: '#e2e8f0', start: 180, end: 270 },
    { name: '玄武', color: '#60a5fa', start: 270, end: 360 },
  ];

  // 十二星座：外圈裝飾
  const ZODIACS = [
    { sym: '♈', name: '牡羊' }, { sym: '♉', name: '金牛' }, { sym: '♊', name: '雙子' },
    { sym: '♋', name: '巨蟹' }, { sym: '♌', name: '獅子' }, { sym: '♍', name: '處女' },
    { sym: '♎', name: '天秤' }, { sym: '♏', name: '天蠍' }, { sym: '♐', name: '射手' },
    { sym: '♑', name: '摩羯' }, { sym: '♒', name: '水瓶' }, { sym: '♓', name: '雙魚' },
  ];

  // AI 類別屬性（顏色 + 歸屬哪個四象）
  const CAT_META = {
    '機器學習':  { color: '#a78bfa', beast: 0 },
    '深度學習':  { color: '#fbbf24', beast: 0 },
    '神經網路':  { color: '#34d399', beast: 1 },
    '生成式 AI': { color: '#7dd3fc', beast: 1 },
    '電腦視覺':  { color: '#f472b6', beast: 2 },
    'NLP':       { color: '#fb923c', beast: 2 },
    'AI 代理人': { color: '#c084fc', beast: 3 },
  };

  // 類別繪製順序（決定在圓內的角度排列）
  const CAT_ORDER = ['機器學習','深度學習','神經網路','生成式 AI','電腦視覺','NLP','AI 代理人'];

  // ── ConstellationAtlas class ──────────────────────────────────────────────

  class ConstellationAtlas {
    constructor(container, topics) {
      this._el      = typeof container === 'string'
        ? document.querySelector(container) : container;
      this._topics  = topics || [];
      this._rot     = 0;
      this._autoRot = true;
      this._speed   = 0.007;
      this._visible = false;
      this._raf     = null;

      this._resize();
      this._buildNodes();
      this._buildLinks();
      this._buildSVG();
      this._drawAll();
      this._bindDrag();
    }

    // ── 尺寸計算 ────────────────────────────────────────────────────────────

    _resize() {
      this._W  = this._el.clientWidth  || window.innerWidth;
      this._H  = this._el.clientHeight || window.innerHeight;
      this._cx = this._W / 2;
      this._cy = this._H / 2;
      const md    = Math.min(this._W, this._H - 90);
      this._rCore = md * 0.08;   // 中心圓
      this._rIn   = md * 0.13;   // 星域內緣
      this._rOut  = md * 0.41;   // 星域外緣
      this._rZod  = md * 0.465;  // 十二星座環
    }

    _d2r(d) { return d * Math.PI / 180; }
    _pt(deg, r) {
      const a = this._d2r(deg);
      return [Math.cos(a) * r, Math.sin(a) * r];
    }

    // ── 節點定位 ────────────────────────────────────────────────────────────

    _normCat(raw) {
      if (!raw) return '生成式 AI';
      const c = String(raw).split('\n')[0].trim();
      for (const k of CAT_ORDER) {
        if (c.includes(k) || k.includes(c.split(' ')[0])) return k;
      }
      return '生成式 AI';
    }

    _buildNodes() {
      // 按類別分組
      const byCat = {};
      this._topics.forEach(t => {
        const cat = this._normCat(t.category);
        (byCat[cat] ??= []).push(t);
      });

      // 依節點數量比例分配角度扇區
      const counts   = CAT_ORDER.map(c => (byCat[c] || []).length);
      const total    = counts.reduce((a, b) => a + b, 0) || 1;
      const sectors  = {};
      let   angleAcc = 0;
      CAT_ORDER.forEach((cat, i) => {
        const span  = (counts[i] / total) * 360;
        sectors[cat] = { start: angleAcc, span };
        angleAcc += span;
      });

      // 在扇區內以行列網格佈置星點
      this._nodes = [];
      CAT_ORDER.forEach(cat => {
        const items = byCat[cat] || [];
        if (!items.length) return;
        const meta    = CAT_META[cat] || { color: '#9ca3af', beast: 0 };
        const { start, span } = sectors[cat];
        const pad     = Math.max(2, span * 0.06);
        const rows    = Math.max(2, Math.min(5, Math.ceil(Math.sqrt(items.length))));
        const cols    = Math.ceil(items.length / rows);
        const rowStep = (this._rOut - this._rIn) / (rows + 1);
        const colStep = cols > 1 ? (span - pad * 2) / (cols - 1) : 0;

        items.forEach((t, i) => {
          const row    = i % rows;
          const col    = Math.floor(i / rows);
          const angle  = start + pad + col * colStep;
          const radius = this._rIn + (row + 1) * rowStep;
          const [x, y] = this._pt(angle, radius);
          this._nodes.push({
            id:    String(t.id || i),
            title: t.title || '',
            eng:   t.eng_name || '',
            cat, def: t.def || '',
            color: meta.color,
            r:     t.key_goal ? 6.5 : 4,
            angle, radius, x, y,
          });
        });
      });
    }

    // ── 連線（星線）────────────────────────────────────────────────────────

    _buildLinks() {
      const byCat = {};
      this._nodes.forEach(n => (byCat[n.cat] ??= []).push(n));
      this._links = [];

      Object.values(byCat).forEach(group => {
        group.sort((a, b) => a.angle - b.angle);
        const n = group.length;
        for (let i = 0; i < n; i++) {
          // 相鄰節點連線（主脈絡）
          if (i + 1 < n) this._links.push({ s: group[i], t: group[i + 1] });
          // 每隔3個跳接（形成三角形星型）
          if (i + 3 < n && i % 4 === 0) this._links.push({ s: group[i], t: group[i + 3] });
          // 不同列間的交叉連線（增加星座感）
          if (i + 2 < n && i % 5 === 1) this._links.push({ s: group[i], t: group[i + 2] });
        }
      });
    }

    // ── SVG 建構 ────────────────────────────────────────────────────────────

    _buildSVG() {
      d3.select(this._el).select('svg.ca-svg').remove();
      this._svg = d3.select(this._el).append('svg')
        .attr('class', 'ca-svg')
        .attr('width', '100%').attr('height', '100%')
        .style('position', 'absolute').style('top', 0).style('left', 0)
        .style('display', 'none');

      const defs = this._svg.append('defs');

      // 星點發光濾鏡
      const gf = defs.append('filter').attr('id', 'ca-glow')
        .attr('x', '-100%').attr('y', '-100%').attr('width', '400%').attr('height', '400%');
      gf.append('feGaussianBlur').attr('in', 'SourceGraphic').attr('stdDeviation', 3.5).attr('result', 'b');
      const gm = gf.append('feMerge');
      gm.append('feMergeNode').attr('in', 'b');
      gm.append('feMergeNode').attr('in', 'SourceGraphic');

      // 中心發光
      const cf = defs.append('filter').attr('id', 'ca-center-glow')
        .attr('x', '-60%').attr('y', '-60%').attr('width', '320%').attr('height', '320%');
      cf.append('feGaussianBlur').attr('in', 'SourceGraphic').attr('stdDeviation', 8).attr('result', 'b');
      const cm = cf.append('feMerge');
      cm.append('feMergeNode').attr('in', 'b');
      cm.append('feMergeNode').attr('in', 'SourceGraphic');

      this._root = this._svg.append('g')
        .attr('transform', `translate(${this._cx},${this._cy})`);
      this._rotG = this._root.append('g').attr('class', 'ca-rotg');
    }

    // ── 繪圖 ────────────────────────────────────────────────────────────────

    _drawAll() {
      this._drawBeastBackground();
      this._drawGuideRings();
      this._drawZodiacRing();
      this._drawLinks();
      this._drawStars();
      this._drawCenter();
    }

    // 四象四大扇形背景
    _drawBeastBackground() {
      const g = this._rotG.append('g').attr('class', 'ca-beasts');

      BEASTS.forEach(b => {
        const a0 = this._d2r(b.start), a1 = this._d2r(b.end);
        const c0 = [Math.cos(a0), Math.sin(a0)];
        const c1 = [Math.cos(a1), Math.sin(a1)];
        const ri = this._rIn * 0.6, ro = this._rOut + 8;

        // 扇形背景
        const sector = [
          `M${c0[0]*ri},${c0[1]*ri}`,
          `L${c0[0]*ro},${c0[1]*ro}`,
          `A${ro},${ro} 0 0 1 ${c1[0]*ro},${c1[1]*ro}`,
          `L${c1[0]*ri},${c1[1]*ri}`,
          `A${ri},${ri} 0 0 0 ${c0[0]*ri},${c0[1]*ri}`,
          'Z'
        ].join(' ');

        g.append('path').attr('d', sector)
          .attr('fill', b.color + '09')
          .attr('stroke', b.color + '25').attr('stroke-width', 0.6);

        // 四象名稱標籤（置於扇區中央靠近核心）
        const midA = (b.start + b.end) / 2;
        const [lx, ly] = this._pt(midA, this._rIn * 1.35);
        g.append('text').attr('x', lx).attr('y', ly)
          .attr('text-anchor', 'middle').attr('dy', '0.35em')
          .attr('fill', b.color + 'bb').attr('font-size', 10).attr('font-weight', 600)
          .attr('letter-spacing', 1).attr('pointer-events', 'none').text(b.name);

        // 分界線（四象之間）
        const [bx1, by1] = this._pt(b.start, this._rIn * 0.7);
        const [bx2, by2] = this._pt(b.start, this._rOut + 8);
        g.append('line').attr('x1', bx1).attr('y1', by1).attr('x2', bx2).attr('y2', by2)
          .attr('stroke', b.color + '30').attr('stroke-width', 1);
      });
    }

    // 導引同心圓
    _drawGuideRings() {
      const g = this._rotG.append('g').attr('class', 'ca-rings');
      const rows = 4;
      for (let i = 0; i <= rows; i++) {
        const r = this._rIn + i * (this._rOut - this._rIn) / rows;
        g.append('circle').attr('r', r).attr('fill', 'none')
          .attr('stroke', 'rgba(125,211,252,0.05)').attr('stroke-width', 0.8)
          .attr('stroke-dasharray', '3,8');
      }
    }

    // 十二星座外圈裝飾環
    _drawZodiacRing() {
      const g = this._rotG.append('g').attr('class', 'ca-zodiac');

      // 環邊界
      [this._rZod - 20, this._rZod + 20].forEach(r =>
        g.append('circle').attr('r', r).attr('fill', 'none')
          .attr('stroke', 'rgba(125,211,252,0.18)').attr('stroke-width', 1));

      // 12 分割線
      for (let i = 0; i < 12; i++) {
        const [x1, y1] = this._pt(i * 30, this._rZod - 20);
        const [x2, y2] = this._pt(i * 30, this._rZod + 20);
        g.append('line').attr('x1', x1).attr('y1', y1).attr('x2', x2).attr('y2', y2)
          .attr('stroke', 'rgba(125,211,252,0.12)').attr('stroke-width', 0.8);
      }

      // 扇區底色（與四象對應，每象3個星座）
      BEASTS.forEach((b, bi) => {
        const a0 = this._d2r(bi * 90), a1 = this._d2r(bi * 90 + 90);
        const ri = this._rZod - 20, ro = this._rZod + 20;
        const c0 = [Math.cos(a0), Math.sin(a0)];
        const c1 = [Math.cos(a1), Math.sin(a1)];
        const arc = [
          `M${c0[0]*ri},${c0[1]*ri}`,
          `L${c0[0]*ro},${c0[1]*ro}`,
          `A${ro},${ro} 0 0 1 ${c1[0]*ro},${c1[1]*ro}`,
          `L${c1[0]*ri},${c1[1]*ri}`,
          `A${ri},${ri} 0 0 0 ${c0[0]*ri},${c0[1]*ri}`,
          'Z'
        ].join(' ');
        g.append('path').attr('d', arc).attr('fill', b.color + '10');
      });

      // 星座符號
      ZODIACS.forEach((z, i) => {
        const angle = i * 30 + 15;
        const [x, y] = this._pt(angle, this._rZod);
        const beast = BEASTS[Math.floor(i / 3)];
        const ng = g.append('g').attr('transform', `translate(${x},${y})`);
        ng.append('text').attr('text-anchor', 'middle').attr('y', -5)
          .attr('fill', beast.color + 'dd').attr('font-size', 11)
          .attr('pointer-events', 'none').text(z.sym);
        ng.append('text').attr('text-anchor', 'middle').attr('y', 7)
          .attr('fill', beast.color + '88').attr('font-size', 7)
          .attr('pointer-events', 'none').text(z.name);
      });

      // 最外緣參考虛線圓
      g.append('circle').attr('r', this._rZod + 42)
        .attr('fill', 'none').attr('stroke', 'rgba(125,211,252,0.05)')
        .attr('stroke-width', 1).attr('stroke-dasharray', '2,10');
    }

    // 星線（AI 術語之間的連接線）
    _drawLinks() {
      const g = this._rotG.append('g').attr('class', 'ca-links');
      this._linkSel = g.selectAll('line').data(this._links).join('line')
        .attr('x1', d => d.s.x).attr('y1', d => d.s.y)
        .attr('x2', d => d.t.x).attr('y2', d => d.t.y)
        .attr('stroke', d => d.s.color)
        .attr('stroke-opacity', 0.20)
        .attr('stroke-width', 0.7);
    }

    // 星點（AI 術語節點）
    _drawStars() {
      const self = this;
      const g = this._rotG.append('g').attr('class', 'ca-stars');

      this._starSel = g.selectAll('g.ca-star')
        .data(this._nodes).join('g')
        .attr('class', 'ca-star')
        .attr('transform', d => `translate(${d.x},${d.y})`)
        .style('cursor', 'pointer');

      // 光暈
      this._starSel.append('circle')
        .attr('r', d => d.r * 2.8)
        .attr('fill', d => d.color + '1a')
        .attr('pointer-events', 'none');

      // 星點本體
      this._starSel.append('circle')
        .attr('r', d => d.r)
        .attr('fill', d => d.color)
        .attr('stroke', 'none')
        .style('filter', 'url(#ca-glow)');

      // 標籤（key nodes + 每類隨機抽樣）
      this._starSel.filter((d, i) => d.r > 6 || i % 4 === 0)
        .append('text')
        .attr('text-anchor', 'middle')
        .attr('dy', d => -(d.r + 6))
        .attr('fill', d => d.color + 'dd')
        .attr('font-size', 7.5)
        .attr('pointer-events', 'none')
        .text(d => d.title.length > 7 ? d.title.slice(0, 6) + '…' : d.title);

      // 互動
      this._starSel
        .on('mouseenter', (ev, d) => {
          d3.select(ev.currentTarget).select('circle:nth-child(2)')
            .transition().duration(120).attr('r', d.r * 2.5);
          self._linkSel
            .attr('stroke-opacity', l =>
              l.s.id === d.id || l.t.id === d.id ? 0.9 : 0.04)
            .attr('stroke-width', l =>
              l.s.id === d.id || l.t.id === d.id ? 2.2 : 0.5);
          self._starSel.select('circle:nth-child(2)')
            .attr('opacity', n => n.id === d.id || self._isLinked(d, n) ? 1 : 0.25);
          self._showTooltip(ev, d);
        })
        .on('mouseleave', (ev, d) => {
          d3.select(ev.currentTarget).select('circle:nth-child(2)')
            .transition().duration(200).attr('r', d.r);
          self._linkSel.attr('stroke-opacity', 0.20).attr('stroke-width', 0.7);
          self._starSel.select('circle:nth-child(2)').attr('opacity', 1);
          self._hideTooltip();
        })
        .on('click', (ev, d) => {
          ev.stopPropagation();
          self._showPanel(d);
        });

      // 預建鄰居索引
      this._neighbors = new Map();
      this._links.forEach(l => {
        if (!this._neighbors.has(l.s.id)) this._neighbors.set(l.s.id, new Set());
        if (!this._neighbors.has(l.t.id)) this._neighbors.set(l.t.id, new Set());
        this._neighbors.get(l.s.id).add(l.t.id);
        this._neighbors.get(l.t.id).add(l.s.id);
      });
    }

    _isLinked(src, dst) {
      return this._neighbors.get(src.id)?.has(dst.id) ?? false;
    }

    // 中心標誌
    _drawCenter() {
      const g = this._rotG.append('g').attr('class', 'ca-center');
      const r = this._rCore;

      g.append('circle').attr('r', r + 20)
        .attr('fill', 'none').attr('stroke', 'rgba(125,211,252,0.08)')
        .attr('stroke-width', 1).attr('stroke-dasharray', '4,10');
      g.append('circle').attr('r', r)
        .attr('fill', 'rgba(125,211,252,0.05)').attr('stroke', 'rgba(125,211,252,0.35)')
        .attr('stroke-width', 1.5).style('filter', 'url(#ca-center-glow)');
      g.append('circle').attr('r', r * 0.55)
        .attr('fill', 'none').attr('stroke', 'rgba(125,211,252,0.2)').attr('stroke-width', 1);

      g.append('text').attr('text-anchor', 'middle').attr('dy', '0.2em')
        .attr('fill', '#7dd3fc').attr('font-size', r * 0.55).attr('font-weight', 300)
        .text('AI');
      g.append('text').attr('text-anchor', 'middle').attr('y', r * 0.72)
        .attr('fill', '#7dd3fc77').attr('font-size', 6).text('KNOWLEDGE MAP');

      // 8 個裝飾星點
      for (let i = 0; i < 8; i++) {
        const [px, py] = this._pt(i * 45, r + 7);
        g.append('circle').attr('cx', px).attr('cy', py).attr('r', i % 2 === 0 ? 2.2 : 1.4)
          .attr('fill', '#7dd3fc').attr('opacity', 0.45);
      }
    }

    // ── Tooltip / Panel ──────────────────────────────────────────────────────

    _showTooltip(ev, d) {
      let tip = document.getElementById('atlas-tooltip');
      if (!tip) return;
      tip.innerHTML = `<strong style="color:${d.color}">${d.title}</strong><br>
        <span style="font-size:11px;color:#94a3b8">${d.cat}</span>`;
      tip.style.display = 'block';
      const x = Math.min(ev.clientX + 14, window.innerWidth - 220);
      const y = Math.min(ev.clientY - 10, window.innerHeight - 80);
      tip.style.left = x + 'px';
      tip.style.top  = y + 'px';
    }
    _hideTooltip() {
      const tip = document.getElementById('atlas-tooltip');
      if (tip) tip.style.display = 'none';
    }

    _showPanel(node) {
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
          <a class="panel-btn" href="chat.html?term=${encodeURIComponent(node.title)}"
             target="_blank">💬 問 AI</a>
          <a class="panel-btn" href="vocab.html" target="_blank">📖 詞庫</a>
        </div>`;
      p.classList.add('show');
    }

    // ── 拖拉旋轉 ────────────────────────────────────────────────────────────

    _bindDrag() {
      const self = this;
      let dragging = false, lastX = 0;

      this._svg
        .on('pointerdown', (ev) => {
          const tag = ev.target.tagName.toLowerCase();
          if (tag === 'circle' || tag === 'text') return;
          dragging = true; lastX = ev.clientX;
          self._autoRot = false;
          self._svg.style('cursor', 'grabbing');
        })
        .on('pointermove', (ev) => {
          if (!dragging) return;
          self._rot += (ev.clientX - lastX) * 0.25;
          lastX = ev.clientX;
          self._applyRot();
        })
        .on('pointerup',    () => { dragging = false; self._svg.style('cursor', 'grab'); })
        .on('pointerleave', () => { dragging = false; })
        .on('click', () => {
          document.getElementById('atlas-panel')?.classList.remove('show');
        });
      this._svg.style('cursor', 'grab');
    }

    _applyRot() {
      this._rotG.attr('transform', `rotate(${this._rot})`);
    }

    // ── 動畫 ────────────────────────────────────────────────────────────────

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

    // ── Public API ───────────────────────────────────────────────────────────

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

    // 搜尋高亮 AI 術語
    search(query) {
      if (!query) {
        this._starSel?.select('circle:nth-child(2)').attr('opacity', 1);
        this._linkSel?.attr('stroke-opacity', 0.20);
        return;
      }
      const q = query.toLowerCase();
      const matched = new Set(
        this._nodes.filter(n =>
          n.title.toLowerCase().includes(q) || n.eng.toLowerCase().includes(q)
        ).map(n => n.id)
      );
      this._starSel?.select('circle:nth-child(2)')
        .attr('opacity', d => matched.has(d.id) ? 1 : 0.1);
      this._linkSel?.attr('stroke-opacity', l =>
        matched.has(l.s.id) || matched.has(l.t.id) ? 0.6 : 0.04);

      // 自動旋轉至第一個命中節點
      if (matched.size) {
        const first = this._nodes.find(n => matched.has(n.id));
        if (first) {
          this._rot = -first.angle + 5;
          this._applyRot();
        }
      }
    }
  }

  // ── 對外暴露 ─────────────────────────────────────────────────────────────

  global.ConstellationAtlas = ConstellationAtlas;
  global.StarMap = ConstellationAtlas; // alias for backward compat

})(window);
