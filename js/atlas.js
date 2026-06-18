// atlas.js — D3.js v7 AI Term Atlas v6.1
// Requires: D3.js v7 loaded before this file

class TermAtlas {
  static CAT_COLOR = {
    "機器學習":   "#a78bfa",   // 薰衣草紫
    "深度學習":   "#fbbf24",   // 琥珀橘
    "神經網路":   "#34d399",   // 翡翠綠
    "生成式 AI":  "#7dd3fc",   // 天藍 (最多 57 筆)
    "電腦視覺":   "#f472b6",   // 玫瑰粉 (34 筆)
    "NLP":        "#fb923c",   // 橙色
    "AI 代理人":  "#c084fc",   // 紫羅蘭
    "default":    "#9ca3af"
  };

  constructor(containerEl, data) {
    this.el = typeof containerEl === "string"
      ? document.querySelector(containerEl) : containerEl;
    this.W = this.el.clientWidth  || window.innerWidth;
    this.H = this.el.clientHeight || window.innerHeight;
    this._buildGraph(data);
    this._setupSVG();
    this._drawEdges();
    this._drawNodes();
    this._drawLabels();
    this._simulate();
    this._setupZoom();
    this._setupSearch();
  }

  _color(cat) {
    if (!cat) return TermAtlas.CAT_COLOR.default;
    for (const [k, v] of Object.entries(TermAtlas.CAT_COLOR)) {
      if (cat.includes(k) || k.includes(cat)) return v;
    }
    return TermAtlas.CAT_COLOR.default;
  }

  _buildGraph(raw) {
    this.nodes = (raw || []).map((item, i) => ({
      id:       item.id ?? `n${i}`,
      title:    item.title    || "",
      eng:      item.eng_name || "",
      category: item.category || "AI概念",
      def:      item.def      || "",
      color:    this._color(item.category),
      r:        item.key_goal ? 9 : 6
    }));

    const byCat = {};
    this.nodes.forEach(n => { (byCat[n.category] ??= []).push(n); });
    this.links = [];
    Object.values(byCat).forEach(group => {
      const max = Math.min(group.length - 1, 10);
      for (let i = 0; i < max; i++) {
        this.links.push({
          source: group[i].id,
          target: group[(i + 1) % group.length].id
        });
      }
    });
  }

  _setupSVG() {
    this.svg = d3.select(this.el).append("svg")
      .attr("width", "100%").attr("height", "100%")
      .style("position", "absolute").style("top", 0).style("left", 0);

    const defs = this.svg.append("defs");
    Object.entries(TermAtlas.CAT_COLOR).forEach(([key]) => {
      const f = defs.append("filter").attr("id", `glow-${key}`)
        .attr("x", "-80%").attr("y", "-80%")
        .attr("width", "260%").attr("height", "260%");
      f.append("feGaussianBlur").attr("in", "SourceGraphic")
        .attr("stdDeviation", 4).attr("result", "blur");
      const m = f.append("feMerge");
      m.append("feMergeNode").attr("in", "blur");
      m.append("feMergeNode").attr("in", "SourceGraphic");
    });

    this.g = this.svg.append("g").attr("class", "atlas-root");
  }

  _glowId(cat) {
    if (!cat) return "glow-default";
    for (const k of Object.keys(TermAtlas.CAT_COLOR)) {
      if (cat.includes(k) || k.includes(cat)) return `glow-${k}`;
    }
    return "glow-default";
  }

  _drawEdges() {
    this.edgeSel = this.g.append("g").selectAll("line")
      .data(this.links).join("line")
      .attr("stroke", "#7dd3fc").attr("stroke-opacity", 0.12)
      .attr("stroke-width", 1);
  }

  _drawNodes() {
    const drag = d3.drag()
      .on("start", (ev, d) => {
        if (!ev.active) this.sim.alphaTarget(0.3).restart();
        d.fx = d.x; d.fy = d.y;
      })
      .on("drag",  (ev, d) => { d.fx = ev.x; d.fy = ev.y; })
      .on("end",   (ev, d) => {
        if (!ev.active) this.sim.alphaTarget(0);
        d.fx = null; d.fy = null;
      });

    this.nodeSel = this.g.append("g").selectAll("circle")
      .data(this.nodes).join("circle")
      .attr("r", d => d.r)
      .attr("fill", d => d.color).attr("fill-opacity", 0.9)
      .attr("stroke", d => d.color).attr("stroke-width", 1.5)
      .attr("stroke-opacity", 0.5)
      .style("filter", d => `url(#${this._glowId(d.category)})`)
      .style("cursor", "pointer")
      .call(drag)
      .on("click",      (ev, d) => { ev.stopPropagation(); this.showPanel(d); })
      .on("mouseenter", (ev, d) => {
        d3.select(ev.currentTarget).raise()
          .transition().duration(150).attr("r", d.r * 2).attr("stroke-width", 3);
        this._highlightLinks(d);
      })
      .on("mouseleave", (ev, d) => {
        d3.select(ev.currentTarget)
          .transition().duration(200).attr("r", d.r).attr("stroke-width", 1.5);
        this._clearHighlight();
      });
  }

  _drawLabels() {
    const labeled = this.nodes.filter(n => n.r > 7 || Math.random() < 0.12);
    this.labelSel = this.g.append("g").selectAll("text")
      .data(labeled).join("text")
      .text(d => d.title.length > 8 ? d.title.slice(0, 7) + "…" : d.title)
      .attr("fill", "#94a3b8").attr("font-size", 9)
      .attr("text-anchor", "middle").attr("pointer-events", "none")
      .attr("dy", d => d.r + 12);
  }

  _simulate() {
    this.sim = d3.forceSimulation(this.nodes)
      .force("link",    d3.forceLink(this.links).id(d => d.id).distance(70).strength(0.3))
      .force("charge",  d3.forceManyBody().strength(-200))
      .force("center",  d3.forceCenter(this.W / 2, this.H / 2).strength(0.05))
      .force("collide", d3.forceCollide(d => d.r + 16))
      .on("tick", () => this._tick());

    for (let i = 0; i < 200; i++) this.sim.tick();
    this._tick();
  }

  _tick() {
    this.edgeSel
      .attr("x1", d => d.source.x ?? 0).attr("y1", d => d.source.y ?? 0)
      .attr("x2", d => d.target.x ?? 0).attr("y2", d => d.target.y ?? 0);
    this.nodeSel.attr("cx", d => d.x ?? 0).attr("cy", d => d.y ?? 0);
    this.labelSel.attr("x", d => d.x ?? 0).attr("y", d => d.y ?? 0);
  }

  _setupZoom() {
    this.zoom = d3.zoom().scaleExtent([0.05, 10])
      .on("zoom", ev => this.g.attr("transform", ev.transform));
    this.svg.call(this.zoom);
    this.svg.on("click", () => {
      document.getElementById("atlas-panel")?.classList.remove("show");
    });
    document.getElementById("atlas-reset")?.addEventListener("click", () => {
      this.svg.transition().duration(600)
        .call(this.zoom.transform, d3.zoomIdentity);
    });
  }

  _setupSearch() {
    document.getElementById("atlas-search")
      ?.addEventListener("input", e => this.flyToSearch(e.target.value.trim()));
  }

  _highlightLinks(node) {
    const ids = new Set([node.id]);
    this.links.forEach(l => {
      if (l.source.id === node.id) ids.add(l.target.id);
      if (l.target.id === node.id) ids.add(l.source.id);
    });
    this.nodeSel.attr("opacity", d => ids.has(d.id) ? 1 : 0.1);
    this.edgeSel.attr("stroke-opacity", d =>
      (d.source.id === node.id || d.target.id === node.id) ? 0.8 : 0.02);
  }

  _clearHighlight() {
    this.nodeSel.attr("opacity", null);
    this.edgeSel.attr("stroke-opacity", 0.12);
  }

  flyToSearch(query) {
    if (!query) {
      this.nodeSel?.classed("dim", false).classed("match", false);
      return;
    }
    const q = query.toLowerCase();
    const matches = this.nodes.filter(n =>
      n.title.toLowerCase().includes(q) || n.eng.toLowerCase().includes(q));
    this.nodeSel?.classed("dim",   d => !matches.includes(d))
                 .classed("match", d =>  matches.includes(d));
    if (!matches.length) return;
    const { x, y } = matches[0];
    const scale = 3;
    this.svg.transition().duration(750).call(
      this.zoom.transform,
      d3.zoomIdentity.translate(this.W / 2 - scale * x, this.H / 2 - scale * y).scale(scale)
    );
    this.showPanel(matches[0]);
  }

  filterByCategory(cat) {
    // Partial match: "NLP" matches "NLP 基礎","NLP 模型"; "電腦視覺" matches "電腦視覺技術" etc.
    const matchFn = cat ? (n => n.category.includes(cat) || cat.includes(n.category.split('\n')[0].trim())) : null;
    const ids = matchFn ? new Set(this.nodes.filter(matchFn).map(n => n.id)) : null;
    this.nodeSel?.attr("opacity", d => !ids || ids.has(d.id) ? 1 : 0.08);
    this.edgeSel?.attr("stroke-opacity", d =>
      !ids || (ids.has(d.source.id) && ids.has(d.target.id)) ? 0.2 : 0.01);
  }

  showPanel(node) {
    const panel = document.getElementById("atlas-panel");
    if (!panel) return;
    panel.innerHTML = `
      <button class="panel-close"
        onclick="this.closest('#atlas-panel').classList.remove('show')">×</button>
      <div class="panel-color-dot" style="background:${node.color}"></div>
      <h3 class="panel-title">${node.title}</h3>
      ${node.eng ? `<div class="panel-eng">${node.eng}</div>` : ""}
      <p class="panel-def">${node.def || "暫無說明。"}</p>
      <div class="panel-cat" style="color:${node.color}">${node.category || "—"}</div>
    `;
    panel.classList.add("show");
  }
}
