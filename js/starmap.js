// js/starmap.js — 星圖 AI 知識星座圖 v3.0
// 每個 AI 類別 = 一組獨立星座星群，排列在軌道環上，可旋轉
// 視覺參考：四象二十八星宿星圖 + 十二星座黃道圖

(function(global) {
  'use strict';

  // ── AI 類別星座定義 ──────────────────────────────────────────────────────

  const CAT_DEFS = [
    { cat: '機器學習',  color: '#a78bfa', label: 'ML',  beast: '青龍域' },
    { cat: '深度學習',  color: '#fbbf24', label: 'DL',  beast: '青龍域' },
    { cat: '神經網路',  color: '#34d399', label: 'NN',  beast: '朱雀域' },
    { cat: '生成式 AI', color: '#7dd3fc', label: 'GEN', beast: '朱雀域' },
    { cat: '電腦視覺',  color: '#f472b6', label: 'CV',  beast: '白虎域' },
    { cat: 'NLP',       color: '#fb923c', label: 'NLP', beast: '白虎域' },
    { cat: 'AI 代理人', color: '#c084fc', label: 'AGT', beast: '玄武域' },
  ];

  // 四象方位標（與圖0相同，標在外圈四個方向）
  const BEAST_LABELS = [
    { name: '青龍', color: '#4ade80', angle: 270, desc: '東方七宿' },
    { name: '朱雀', color: '#f87171', angle: 0,   desc: '南方七宿' },
    { name: '白虎', color: '#e2e8f0', angle: 90,  desc: '西方七宿' },
    { name: '玄武', color: '#60a5fa', angle: 180, desc: '北方七宿' },
  ];

  // 十二星座（外圈裝飾環）
  const ZODIACS = [
    '♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓'
  ];

  // ── 星座圖主類別 ──────────────────────────────────────────────────────────

  class ConstellationAtlas {
    constructor(container, topics) {
      this._el      = typeof container === 'string'
        ? document.querySelector(container) : container;
      this._topics  = topics || [];
      this._rot     = 0;
      this._autoRot = true;
      this._speed   = 0.006;
      this._visible = false;
      this._raf     = null;

      this._calc();
      this._buildClusters();
      this._buildSVG();
      this._drawAll();
      this._bindDrag();
    }

    // ── 尺寸 ────────────────────────────────────────────────────────────────

    _calc() {
      this._W   = this._el.clientWidth  || window.innerWidth;
      this._H   = this._el.clientHeight || window.innerHeight;
      this._cx  = this._W / 2;
      this._cy  = this._H / 2;
      const md  = Math.min(this._W, this._H - 90);
      this._orbitR  = md * 0.355;  // 星座群中心所在軌道半徑
      this._zodR    = md * 0.470;  // 十二星座外裝飾環
      this._coreR   = md * 0.055;  // 中心核心
    }

    _d2r(d) { return d * Math.PI / 180; }
    _pt(deg, r) {
      const a = this._d2r(deg);
      return [Math.cos(a) * r, Math.sin(a) * r];
    }

    // ── 建立各星座群 ─────────────────────────────────────────────────────────

    _normCat(raw) {
      const c = String(raw || '').split('\n')[0].trim();
      for (const d of CAT_DEFS) {
        if (c.includes(d.cat) || d.cat.includes(c.split(' ')[0])) return d.cat;
      }
      return '生成式 AI';
    }

    _buildClusters() {
      // 按類別分組
      const byCat = {};
      this._topics.forEach(t => {
        const cat = this._normCat(t.category);
        (byCat[cat] ??= []).push(t);
      });

      const nCats = CAT_DEFS.length;
      this._clusters = [];

      CAT_DEFS.forEach((def, ci) => {
        const items = byCat[def.cat] || [];
        // 每個星座群的中心角度（等間距排列在軌道上）
        const centerAngle = (ci / nCats) * 360 - 90; // 從12點鐘開始
        const [gcx, gcy] = this._pt(centerAngle, this._orbitR);

        // 星座群內半徑（依節點數量決定大小）
        const n         = items.length;
        const groupR    = Math.max(30, Math.min(85, 22 + Math.sqrt(n) * 8.5));

        // 黃金角螺旋佈點（自然星群分佈，與真實星座相似）
        const GOLDEN    = Math.PI * (3 - Math.sqrt(5));
        const nodes     = items.map((t, i) => {
          const r      = groupR * Math.sqrt((i + 0.5) / n);
          const theta  = i * GOLDEN;
          const lx     = gcx + r * Math.cos(theta);
          const ly     = gcy + r * Math.sin(theta);
          return {
            id:    String(t.id || `${ci}_${i}`),
            title: t.title || '',
            eng:   t.eng_name || '',
            cat:   def.cat,
            def:   t.def || '',
            color: def.color,
            r:     t.key_goal ? 5.5 : 3.5,
            lx, ly,            // local coords (rotate with group)
            x: lx, y: ly,     // world coords (updated on rotate)
          };
        });

        // 星線：以最小生成樹（MST）連接，模仿真實星座連線
        const links = this._mstLinks(nodes);

        this._clusters.push({
          def, centerAngle, gcx, gcy, groupR, nodes, links,
          label: def.cat,
          labelColor: def.color,
        });
      });

      // 扁平化所有節點和連線（供搜尋用）
      this._allNodes = this._clusters.flatMap(c => c.nodes);
      this._allLinks = this._clusters.flatMap(c => c.links);
    }

    // 最小生成樹（Prim算法）+ 少量額外短邊，形成自然星座形狀
    _mstLinks(nodes) {
      if (nodes.length <= 1) return [];
      const n     = nodes.length;
      const dist  = (a, b) => Math.hypot(a.lx - b.lx, a.ly - b.ly);
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

      // 補充：每個節點額外連一條次近邊（增加三角形密度，星座感更強）
      const used = new Set(links.map(l => `${l.s.id}-${l.t.id}`));
      nodes.forEach((a, i) => {
        const nearby = nodes
          .map((b, j) => ({ j, d: dist(a, b) }))
          .filter(({ j }) => j !== i)
          .sort((x, y) => x.d - y.d)
          .slice(0, 3);
        nearby.forEach(({ j }) => {
          const key1 = `${a.id}-${nodes[j].id}`;
          const key2 = `${nodes[j].id}-${a.id}`;
          if (!used.has(key1) && !used.has(key2) && dist(a, nodes[j]) < 55) {
            used.add(key1);
            links.push({ s: a, t: nodes[j] });
          }
        });
      });

      return links;
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

      // 星點發光
      const sf = defs.append('filter').attr('id', 'star-glow')
        .attr('x', '-150%').attr('y', '-150%').attr('width', '500%').attr('height', '500%');
      sf.append('feGaussianBlur').attr('in', 'SourceGraphic').attr('stdDeviation', 4).attr('result', 'b');
      const sm = sf.append('feMerge');
      sm.append('feMergeNode').attr('in', 'b');
      sm.append('feMergeNode').attr('in', 'SourceGraphic');

      // 中心發光
      const cf = defs.append('filter').attr('id', 'core-glow')
        .attr('x', '-100%').attr('y', '-100%').attr('width', '400%').attr('height', '400%');
      cf.append('feGaussianBlur').attr('in', 'SourceGraphic').attr('stdDeviation', 10).attr('result', 'b');
      const cm = cf.append('feMerge');
      cm.append('feMergeNode').attr('in', 'b');
      cm.append('feMergeNode').attr('in', 'SourceGraphic');

      this._root = this._svg.append('g')
        .attr('transform', `translate(${this._cx},${this._cy})`);
      // 旋轉群組
      this._rotG = this._root.append('g').attr('class', 'ca-rotg');
      // 靜態群組（不旋轉的元素，如 tooltip）
      this._staticG = this._root.append('g').attr('class', 'ca-static');
    }

    // ── 繪圖 ────────────────────────────────────────────────────────────────

    _drawAll() {
      this._drawOrbitRing();
      this._drawZodiacRing();
      this._drawBeastLabels();
      this._drawClusters();
      this._drawCore();
    }

    // 軌道環（類似圖1的黃道橢圓）
    _drawOrbitRing() {
      const g = this._rotG.append('g').attr('class', 'ca-orbit');
      // 主軌道環（虛線圓）
      g.append('circle').attr('r', this._orbitR)
        .attr('fill', 'none')
        .attr('stroke', 'rgba(125,211,252,0.18)')
        .attr('stroke-width', 1)
        .attr('stroke-dasharray', '6,8');
      // 內緣參考
      g.append('circle').attr('r', this._orbitR * 0.62)
        .attr('fill', 'none')
        .attr('stroke', 'rgba(125,211,252,0.06)')
        .attr('stroke-width', 0.8)
        .attr('stroke-dasharray', '3,12');
    }

    // 十二星座外裝飾環
    _drawZodiacRing() {
      const g = this._rotG.append('g').attr('class', 'ca-zodiac');
      // 外環雙線
      [this._zodR - 16, this._zodR + 16].forEach(r =>
        g.append('circle').attr('r', r).attr('fill', 'none')
          .attr('stroke', 'rgba(125,211,252,0.2)').attr('stroke-width', 1));

      // 12 分割線 + 星座符號
      ZODIACS.forEach((sym, i) => {
        const angle   = i * 30;
        const midAngle = angle + 15;
        // 分割線
        const [lx1, ly1] = this._pt(angle, this._zodR - 16);
        const [lx2, ly2] = this._pt(angle, this._zodR + 16);
        g.append('line').attr('x1', lx1).attr('y1', ly1).attr('x2', lx2).attr('y2', ly2)
          .attr('stroke', 'rgba(125,211,252,0.15)').attr('stroke-width', 0.8);
        // 符號
        const [sx, sy] = this._pt(midAngle, this._zodR);
        g.append('text').attr('x', sx).attr('y', sy)
          .attr('text-anchor', 'middle').attr('dy', '0.35em')
          .attr('fill', 'rgba(125,211,252,0.65)').attr('font-size', 12)
          .attr('pointer-events', 'none').text(sym);
      });

      // 最外緣虛線
      g.append('circle').attr('r', this._zodR + 30)
        .attr('fill', 'none').attr('stroke', 'rgba(125,211,252,0.06)')
        .attr('stroke-width', 1).attr('stroke-dasharray', '2,12');
    }

    // 四象方位大字標（仿圖0的「青龍」「白虎」「朱雀」「玄武」）
    _drawBeastLabels() {
      const g = this._rotG.append('g').attr('class', 'ca-beasts');
      BEAST_LABELS.forEach(b => {
        const [x, y] = this._pt(b.angle, this._zodR + 52);
        g.append('text').attr('x', x).attr('y', y)
          .attr('text-anchor', 'middle').attr('dy', '0.35em')
          .attr('fill', b.color).attr('font-size', 16).attr('font-weight', 700)
          .attr('letter-spacing', 3).attr('pointer-events', 'none').text(b.name);
        // 副標「七宿」
        const [dx, dy] = this._pt(b.angle, this._zodR + 72);
        g.append('text').attr('x', dx).attr('y', dy)
          .attr('text-anchor', 'middle').attr('dy', '0.35em')
          .attr('fill', b.color + '88').attr('font-size', 9)
          .attr('pointer-events', 'none').text(b.desc);
      });
    }

    // 各 AI 類別星座群
    _drawClusters() {
      const self = this;
      this._clusterEls = [];

      this._clusters.forEach((cluster, ci) => {
        const cg = this._rotG.append('g')
          .attr('class', `ca-cluster ca-cluster-${ci}`);

        // 星座群名稱標籤（仿圖0的 宿名、圖1的星座名）
        const labelOffset = cluster.groupR + 16;
        const labelAngle  = cluster.centerAngle;
        const [lx, ly]    = this._pt(labelAngle, this._orbitR + labelOffset);
        cg.append('text').attr('x', lx).attr('y', ly - 4)
          .attr('text-anchor', 'middle')
          .attr('fill', cluster.labelColor).attr('font-size', 11).attr('font-weight', 700)
          .attr('letter-spacing', 1).attr('pointer-events', 'none')
          .text(cluster.label);
        cg.append('text').attr('x', lx).attr('y', ly + 9)
          .attr('text-anchor', 'middle')
          .attr('fill', cluster.labelColor + '99').attr('font-size', 8)
          .attr('pointer-events', 'none')
          .text(cluster.def.beast);

        // 星線（MST + 短邊）
        const linesSel = cg.selectAll(`line.clink-${ci}`)
          .data(cluster.links).join('line')
          .attr('class', `clink-${ci}`)
          .attr('x1', d => d.s.lx).attr('y1', d => d.s.ly)
          .attr('x2', d => d.t.lx).attr('y2', d => d.t.ly)
          .attr('stroke', cluster.def.color)
          .attr('stroke-opacity', 0.35)
          .attr('stroke-width', 1);

        // 星點
        const nodeSel = cg.selectAll(`g.cstar-${ci}`)
          .data(cluster.nodes).join('g')
          .attr('class', `cstar-${ci}`)
          .attr('transform', d => `translate(${d.lx},${d.ly})`)
          .style('cursor', 'pointer');

        // 外光暈
        nodeSel.append('circle')
          .attr('r', d => d.r * 3)
          .attr('fill', cluster.def.color + '18')
          .attr('pointer-events', 'none');

        // 星點本體（四芒星效果：大圓 + 小閃光）
        nodeSel.append('circle')
          .attr('r', d => d.r)
          .attr('fill', cluster.def.color)
          .attr('stroke', '#ffffff')
          .attr('stroke-width', 0.5)
          .attr('stroke-opacity', 0.6)
          .style('filter', 'url(#star-glow)');

        // 術語標籤（只顯示 key nodes 或每隔幾個）
        nodeSel.filter((d, i) => d.r > 5 || i % 5 === 0)
          .append('text')
          .attr('text-anchor', 'middle')
          .attr('dy', d => -(d.r + 6))
          .attr('fill', cluster.def.color + 'ee')
          .attr('font-size', 8)
          .attr('pointer-events', 'none')
          .text(d => d.title.length > 8 ? d.title.slice(0, 7) + '…' : d.title);

        // 互動事件
        nodeSel
          .on('mouseenter', (ev, d) => {
            d3.select(ev.currentTarget).select('circle:nth-child(2)')
              .transition().duration(120).attr('r', d.r * 2.5);
            // 高亮此群星線
            linesSel
              .attr('stroke-opacity', l =>
                l.s.id === d.id || l.t.id === d.id ? 1 : 0.15)
              .attr('stroke-width', l =>
                l.s.id === d.id || l.t.id === d.id ? 2.5 : 0.8);
            self._tooltip(ev, d);
          })
          .on('mouseleave', (ev, d) => {
            d3.select(ev.currentTarget).select('circle:nth-child(2)')
              .transition().duration(200).attr('r', d.r);
            linesSel.attr('stroke-opacity', 0.35).attr('stroke-width', 1);
            self._hideTooltip();
          })
          .on('click', (ev, d) => {
            ev.stopPropagation();
            self._panel(d);
          });

        this._clusterEls.push({ cg, linesSel, nodeSel, cluster });
      });
    }

    // 中心核心（仿圖1的太陽 / 中心天體）
    _drawCore() {
      const g   = this._rotG.append('g').attr('class', 'ca-core');
      const r   = this._coreR;
      const r2  = this._coreR * 1.6;

      // 脈動外環
      g.append('circle').attr('r', r2 + 8)
        .attr('fill', 'none').attr('stroke', 'rgba(125,211,252,0.1)')
        .attr('stroke-width', 1).attr('stroke-dasharray', '3,12');
      g.append('circle').attr('r', r2)
        .attr('fill', 'none').attr('stroke', 'rgba(125,211,252,0.18)')
        .attr('stroke-width', 1);

      // 核心球體（橙金色，像圖1的太陽）
      const grad = this._svg.select('defs').append('radialGradient')
        .attr('id', 'core-grad').attr('cx', '35%').attr('cy', '35%');
      grad.append('stop').attr('offset', '0%').attr('stop-color', '#fff7d6');
      grad.append('stop').attr('offset', '45%').attr('stop-color', '#fbbf24');
      grad.append('stop').attr('offset', '100%').attr('stop-color', '#b45309');

      g.append('circle').attr('r', r)
        .attr('fill', 'url(#core-grad)')
        .style('filter', 'url(#core-glow)');

      // 中心文字
      g.append('text').attr('text-anchor', 'middle').attr('dy', '0.3em')
        .attr('fill', '#1c1917').attr('font-size', r * 0.55).attr('font-weight', 700)
        .text('AI');

      // 8條光芒
      for (let i = 0; i < 8; i++) {
        const a    = this._d2r(i * 45);
        const r0   = r + 2, r1 = r + (i % 2 === 0 ? 16 : 9);
        g.append('line')
          .attr('x1', Math.cos(a) * r0).attr('y1', Math.sin(a) * r0)
          .attr('x2', Math.cos(a) * r1).attr('y2', Math.sin(a) * r1)
          .attr('stroke', '#fbbf24').attr('stroke-width', i % 2 === 0 ? 1.5 : 1)
          .attr('stroke-opacity', 0.7);
      }
    }

    // ── Tooltip / Panel ──────────────────────────────────────────────────────

    _tooltip(ev, d) {
      let tip = document.getElementById('atlas-tooltip');
      if (!tip) return;
      tip.innerHTML = `<strong style="color:${d.color}">${d.title}</strong>
        ${d.eng ? `<br><span style="color:#94a3b8;font-size:10px">${d.eng}</span>` : ''}
        <br><span style="color:#64748b;font-size:10px">${d.cat}</span>`;
      tip.style.display = 'block';
      tip.style.left = Math.min(ev.clientX + 14, window.innerWidth - 220) + 'px';
      tip.style.top  = Math.min(ev.clientY - 10, window.innerHeight - 80)  + 'px';
    }
    _hideTooltip() {
      const t = document.getElementById('atlas-tooltip');
      if (t) t.style.display = 'none';
    }

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
          <a class="panel-btn" href="chat.html?term=${encodeURIComponent(node.title)}"
             target="_blank">💬 問 AI</a>
          <a class="panel-btn" href="vocab.html" target="_blank">📖 詞庫</a>
        </div>`;
      p.classList.add('show');
    }

    // ── 旋轉 ────────────────────────────────────────────────────────────────

    _bindDrag() {
      const self = this;
      let dragging = false, lastX = 0;
      this._svg
        .on('pointerdown', (ev) => {
          if (['circle','text'].includes(ev.target.tagName.toLowerCase())) return;
          dragging = true; lastX = ev.clientX;
          self._autoRot = false;
          self._svg.style('cursor', 'grabbing');
        })
        .on('pointermove', (ev) => {
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

    _applyRot() {
      this._rotG.attr('transform', `rotate(${this._rot})`);
    }

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

    // ── 搜尋 ────────────────────────────────────────────────────────────────

    search(query) {
      if (!this._clusterEls) return;
      if (!query) {
        this._clusterEls.forEach(({ nodeSel, linesSel }) => {
          nodeSel.select('circle:nth-child(2)').attr('opacity', 1);
          linesSel.attr('stroke-opacity', 0.35);
        });
        return;
      }
      const q = query.toLowerCase();
      const hitIds = new Set(
        this._allNodes
          .filter(n => n.title.toLowerCase().includes(q) || n.eng.toLowerCase().includes(q))
          .map(n => n.id)
      );
      this._clusterEls.forEach(({ nodeSel, linesSel }) => {
        nodeSel.select('circle:nth-child(2)')
          .attr('opacity', d => hitIds.has(d.id) ? 1 : 0.08);
        linesSel.attr('stroke-opacity',
          l => hitIds.has(l.s.id) || hitIds.has(l.t.id) ? 0.7 : 0.05);
      });

      // 旋轉至第一個命中的星座群
      if (hitIds.size) {
        const first = this._allNodes.find(n => hitIds.has(n.id));
        if (first) {
          const cluster = this._clusters.find(c => c.nodes.includes(first));
          if (cluster) {
            this._rot = -cluster.centerAngle + 5;
            this._applyRot();
          }
        }
      }
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
  }

  global.ConstellationAtlas = ConstellationAtlas;
  global.StarMap = ConstellationAtlas;

})(window);
