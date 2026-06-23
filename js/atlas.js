// atlas.js — Sphere Layout v7.0
// 全部 AI → 所有術語同心球；分類頁籤 → 只顯示該類，其他完全隱藏

class TermAtlas {
  static CAT_COLOR = {
    "機器學習":  "#a78bfa",
    "深度學習":  "#fbbf24",
    "神經網路":  "#34d399",
    "生成式 AI": "#7dd3fc",
    "電腦視覺":  "#f472b6",
    "NLP基礎":   "#fb923c",
    "AI 代理人": "#c084fc",
    "AI 治理":   "#e879f9",
    "資料科學":  "#2dd4bf",
    "AI 應用":   "#94a3b8",
    "default":   "#64748b"
  };

  constructor(containerEl, data) {
    this.el = typeof containerEl === "string"
      ? document.querySelector(containerEl) : containerEl;
    this._allTopics = data || [];
    this._setupSVG();
    this._render(this._allTopics);
  }

  _color(cat) {
    if (!cat) return TermAtlas.CAT_COLOR.default;
    const c = cat.split('\n')[0].trim();
    for (const [k, v] of Object.entries(TermAtlas.CAT_COLOR)) {
      if (k === 'default') continue;
      if (c === k || c.includes(k) || k.includes(c.split(/[\s\n]/)[0])) return v;
    }
    return TermAtlas.CAT_COLOR.default;
  }

  _concentricPos(n) {
    const W = this.el.clientWidth || window.innerWidth;
    const isMobile = W < 768;
    // 根據術語數量自動調整間距：節點多 → 緊一點
    const minSep = isMobile
      ? (n > 100 ? 7 : 9)
      : (n > 300 ? 8 : n > 150 ? 10 : n > 80 ? 12 : 15);
    const out = [];
    if (n === 0) return out;
    let ring = 0;
    while (out.length < n) {
      if (ring === 0) {
        out.push({ r: 0, th: 0 });
      } else {
        const ringR = ring * minSep;
        const cap = Math.max(1, Math.floor(2 * Math.PI * ringR / minSep));
        const offset = ring * 0.37;
        for (let i = 0; i < cap && out.length < n; i++) {
          out.push({ r: ringR, th: offset + 2 * Math.PI * i / cap });
        }
      }
      ring++;
    }
    return out;
  }

  _setupSVG() {
    d3.select(this.el).select('svg.ta-svg').remove();
    this.svg = d3.select(this.el).append('svg').attr('class', 'ta-svg')
      .attr('width', '100%').attr('height', '100%')
      .style('position', 'absolute').style('top', 0).style('left', 0)
      .style('display', 'none');

    const defs = this.svg.append('defs');
    const f = defs.append('filter').attr('id', 'ta-glow')
      .attr('x', '-80%').attr('y', '-80%')
      .attr('width', '260%').attr('height', '260%');
    f.append('feGaussianBlur').attr('in', 'SourceGraphic')
      .attr('stdDeviation', 3).attr('result', 'b');
    const m = f.append('feMerge');
    m.append('feMergeNode').attr('in', 'b');
    m.append('feMergeNode').attr('in', 'SourceGraphic');

    this.g = this.svg.append('g').attr('class', 'ta-root');

    // 滾輪縮放以游標位置為中心（D3 zoom 預設行為）
    this.zoom = d3.zoom().scaleExtent([0.04, 14])
      .on('zoom', ev => this.g.attr('transform', ev.transform));
    this.svg.call(this.zoom);
    this.svg.on('dblclick.zoom', null);
    this.svg.on('click', () =>
      document.getElementById('atlas-panel')?.classList.remove('show'));
  }

  _render(topics) {
    this.g.selectAll('*').remove();
    if (!topics || topics.length === 0) return;

    const W = this.el.clientWidth || window.innerWidth;
    const H = (this.el.clientHeight || window.innerHeight) - 90;
    const cx = W / 2, cy = H / 2 + 45;

    const pos = this._concentricPos(topics.length);
    const nodeData = topics.map((t, i) => {
      const p = pos[i] || { r: 0, th: 0 };
      const color = this._color(t.category);
      return {
        ...t,
        color,
        x: cx + p.r * Math.cos(p.th),
        y: cy + p.r * Math.sin(p.th),
        nr: t.key_goal ? 5 : 3.5
      };
    });

    // 光暈
    this.g.selectAll('circle.ta-halo').data(nodeData).join('circle')
      .attr('class', 'ta-halo')
      .attr('cx', d => d.x).attr('cy', d => d.y)
      .attr('r', d => d.nr * 3)
      .attr('fill', d => d.color + '18')
      .attr('pointer-events', 'none');

    // 主節點
    this.nodeSel = this.g.selectAll('circle.ta-node').data(nodeData).join('circle')
      .attr('class', 'ta-node')
      .attr('cx', d => d.x).attr('cy', d => d.y).attr('r', d => d.nr)
      .attr('fill', d => d.color).attr('fill-opacity', 0.88)
      .attr('stroke', d => d.color).attr('stroke-width', 0.5).attr('stroke-opacity', 0.5)
      .style('filter', 'url(#ta-glow)').style('cursor', 'pointer')
      .on('mouseenter', (ev, d) => {
        d3.select(ev.currentTarget).raise()
          .transition().duration(120).attr('r', d.nr * 2.6);
        this._tooltip(ev, d);
      })
      .on('mouseleave', (ev, d) => {
        d3.select(ev.currentTarget)
          .transition().duration(200).attr('r', d.nr);
        this._hideTooltip();
      })
      .on('click', (ev, d) => { ev.stopPropagation(); this.showPanel(d); });

    // 標籤（只標 key_goal 節點）
    this.g.selectAll('text.ta-label')
      .data(nodeData.filter(d => d.nr > 4)).join('text')
      .attr('class', 'ta-label')
      .attr('x', d => d.x).attr('y', d => d.y - d.nr - 4)
      .attr('text-anchor', 'middle')
      .attr('fill', d => d.color + 'cc')
      .attr('font-size', 7.5).attr('pointer-events', 'none')
      .text(d => d.title.length > 8 ? d.title.slice(0, 7) + '…' : d.title);

    // 重置到初始縮放（保持球在畫面中央）
    this.svg.call(this.zoom.transform, d3.zoomIdentity);
  }

  filterByCategory(cat) {
    const filtered = cat
      ? this._allTopics.filter(t => {
          const c = (t.category || '').split('\n')[0].trim();
          return c === cat
            || c.includes(cat)
            || (cat.length > 2 && cat.includes(c.split(/[\s\n]/)[0]));
        })
      : this._allTopics;
    this._render(filtered);
  }

  flyToSearch(query) {
    if (!query) {
      this.nodeSel?.attr('opacity', null);
      return;
    }
    const q = query.toLowerCase();
    this.nodeSel?.attr('opacity', d =>
      d.title.toLowerCase().includes(q) || (d.eng || '').toLowerCase().includes(q) ? 1 : 0.06
    );
  }

  _tooltip(ev, d) {
    const tip = document.getElementById('atlas-tooltip');
    if (!tip) return;
    tip.innerHTML = `<strong style="color:${d.color}">${d.title}</strong>
      ${d.eng ? `<br><span style="color:#94a3b8;font-size:10px">${d.eng}</span>` : ''}
      <br><span style="color:#64748b;font-size:10px">${(d.category||'').split('\n')[0]}</span>`;
    tip.style.display = 'block';
    tip.style.left = Math.min(ev.clientX + 14, window.innerWidth - 220) + 'px';
    tip.style.top  = Math.min(ev.clientY - 10, window.innerHeight - 80) + 'px';
  }

  _hideTooltip() {
    const t = document.getElementById('atlas-tooltip');
    if (t) t.style.display = 'none';
  }

  showPanel(node) {
    const panel = document.getElementById('atlas-panel');
    if (!panel) return;
    panel.innerHTML = `
      <button class="panel-close"
        onclick="this.closest('#atlas-panel').classList.remove('show')">×</button>
      <div class="panel-color-dot" style="background:${node.color}"></div>
      <h3 class="panel-title">${node.title}</h3>
      ${node.eng ? `<div class="panel-eng">${node.eng}</div>` : ''}
      <p class="panel-def">${node.def || '暫無說明。'}</p>
      <div class="panel-cat" style="color:${node.color}">${(node.category||'').split('\n')[0] || '—'}</div>
    `;
    panel.classList.add('show');
  }
}
