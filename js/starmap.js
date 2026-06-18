// js/starmap.js — AI 知識星象圖 v6.0
(function(global) {
  'use strict';

  const MANSIONS = [
    { sym:'斗', g:'N', stars:[[-6,-8],[-2,-12],[4,-10],[8,-4],[4,2],[-2,4]], lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[2,4]] },
    { sym:'牛', g:'N', stars:[[-7,-10],[7,-10],[-2,-3],[2,-3],[0,4],[0,10]], lines:[[0,2],[1,3],[2,3],[2,4],[3,4],[4,5]] },
    { sym:'女', g:'N', stars:[[-4,-8],[4,-8],[0,-2],[-7,5],[7,5]],           lines:[[0,2],[1,2],[2,3],[2,4]] },
    { sym:'虛', g:'N', stars:[[-6,-3],[6,3]],                                lines:[[0,1]] },
    { sym:'危', g:'N', stars:[[0,-10],[-6,2],[6,2],[0,8]],                   lines:[[0,1],[0,2],[1,3],[2,3]] },
    { sym:'室', g:'N', stars:[[-8,-4],[8,-4],[8,5],[-8,5],[0,-11]],          lines:[[0,1],[1,2],[2,3],[3,0],[0,4],[1,4]] },
    { sym:'壁', g:'N', stars:[[-6,-8],[6,8],[0,0],[6,-8],[-6,8]],            lines:[[0,2],[2,1],[3,2],[2,4]] },
    { sym:'角', g:'E', stars:[[-8,-4],[8,4]],                                lines:[[0,1]] },
    { sym:'亢', g:'E', stars:[[-6,-6],[-2,-12],[6,-4],[0,4]],                lines:[[0,1],[1,2],[2,3],[3,0]] },
    { sym:'氐', g:'E', stars:[[-8,-4],[8,-4],[8,5],[-8,5]],                  lines:[[0,1],[1,2],[2,3],[3,0]] },
    { sym:'房', g:'E', stars:[[-6,-8],[6,-8],[6,8],[-6,8]],                  lines:[[0,1],[1,2],[2,3],[3,0],[0,2]] },
    { sym:'心', g:'E', stars:[[-10,0],[0,-4],[10,0]],                        lines:[[0,1],[1,2]] },
    { sym:'尾', g:'E', stars:[[-4,-14],[-2,-7],[0,0],[2,6],[4,10],[6,12],[4,6],[2,14],[-2,18]], lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[3,7],[7,8]] },
    { sym:'箕', g:'E', stars:[[0,-8],[-10,4],[0,10],[10,4]],                 lines:[[0,1],[1,2],[2,3],[3,0]] },
    { sym:'奎', g:'W', stars:[[0,-12],[-5,-6],[5,-6],[-8,0],[8,0],[-5,6],[5,6],[0,10]], lines:[[0,1],[0,2],[1,3],[2,4],[3,5],[4,6],[5,7],[6,7],[1,4]] },
    { sym:'婁', g:'W', stars:[[-8,0],[0,-8],[8,0]],                          lines:[[0,1],[1,2]] },
    { sym:'胃', g:'W', stars:[[0,-8],[-6,4],[6,4]],                          lines:[[0,1],[1,2],[2,0]] },
    { sym:'昴', g:'W', stars:[[0,0],[-6,-6],[6,-6],[-8,0],[8,0],[-4,6],[4,6]], lines:[[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[1,2],[5,6]] },
    { sym:'畢', g:'W', stars:[[-4,-10],[0,-4],[4,-10],[-7,2],[7,2],[-4,8],[0,12],[4,8]], lines:[[0,1],[2,1],[1,3],[1,4],[3,5],[5,6],[6,7],[7,4]] },
    { sym:'觜', g:'W', stars:[[-6,-4],[6,-4],[0,6]],                         lines:[[0,2],[2,1],[0,1]] },
    { sym:'參', g:'W', stars:[[0,-12],[-6,-6],[6,-6],[-4,0],[0,0],[4,0],[0,8]], lines:[[0,1],[0,2],[1,3],[2,5],[3,4],[4,5],[3,6],[5,6]] },
    { sym:'井', g:'S', stars:[[-6,-6],[6,-6],[8,0],[6,6],[-6,6],[-8,0],[0,-12],[0,10]], lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[0,6],[1,6]] },
    { sym:'鬼', g:'S', stars:[[0,0],[-6,-6],[6,-6],[-6,6],[6,6]],            lines:[[0,1],[0,2],[0,3],[0,4],[1,2],[3,4]] },
    { sym:'柳', g:'S', stars:[[-10,-4],[-6,-8],[-2,-6],[2,-4],[6,-2],[8,2],[6,6],[2,8]], lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]] },
    { sym:'星', g:'S', stars:[[0,0],[-8,0],[8,0],[0,-8],[0,8],[-4,-4],[4,4]],lines:[[0,1],[0,2],[0,3],[0,4],[0,5],[0,6]] },
    { sym:'張', g:'S', stars:[[-8,-4],[0,-8],[8,-4],[8,4],[0,8],[-8,4]],     lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,0]] },
    { sym:'翼', g:'S', stars:[[-10,-6],[-4,-10],[4,-10],[10,-6],[6,0],[0,2],[-6,0],[-4,8],[4,8]], lines:[[0,1],[1,2],[2,3],[0,6],[3,4],[4,5],[5,6],[5,7],[5,8],[7,8]] },
    { sym:'軫', g:'S', stars:[[-6,-6],[6,-6],[6,6],[-6,6]],                  lines:[[0,1],[1,2],[2,3],[3,0],[0,2],[1,3]] },
  ];

  const GROUP_COLOR  = { N:'#60a5fa', E:'#4ade80', W:'#d1d5db', S:'#f87171' };
  const GROUP_ANGLES = {
    N:[-130,-117,-103,-90,-77,-63,-50],
    E:[140,153,167,180,193,207,220],
    W:[-40,-27,-13,0,13,27,40],
    S:[50,63,77,90,103,117,130],
  };
  const GROUP_CAT = {
    N:['機器學習','神經網路'],
    E:['深度學習','電腦視覺'],
    W:['NLP基礎','AI 代理人'],
    S:['生成式 AI','深度學習'],
  };
  const GROUP_ORDER = { N:0, E:7, W:14, S:21 };

  const ZODIAC_PATTERNS = [
    { stars:[[-12,4],[-6,0],[0,-5],[8,-2],[14,4]],                                     lines:[[0,1],[1,2],[2,3],[3,4]] },
    { stars:[[-10,8],[-5,2],[0,-2],[5,2],[10,8],[2,-9]],                               lines:[[0,1],[1,2],[2,3],[3,4],[2,5]] },
    { stars:[[-8,-10],[-8,-2],[-8,6],[-8,14],[8,-10],[8,-2],[8,6],[8,14]],             lines:[[0,1],[1,2],[2,3],[4,5],[5,6],[6,7],[1,5],[2,6]] },
    { stars:[[0,-12],[0,-4],[-9,4],[9,4],[-5,12],[5,12]],                              lines:[[0,1],[1,2],[1,3],[2,4],[3,5]] },
    { stars:[[0,-12],[4,-6],[8,0],[4,5],[-2,5],[-6,2],[-4,-3],[6,10],[2,14]],          lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,1],[7,8]] },
    { stars:[[-10,-10],[0,-6],[10,-10],[2,0],[0,8],[-8,14],[4,14]],                    lines:[[0,1],[2,1],[1,3],[3,4],[4,5],[4,6]] },
    { stars:[[0,-12],[-10,0],[0,6],[10,0],[-6,12],[6,12]],                             lines:[[0,1],[0,3],[1,2],[3,2],[1,4],[3,5],[4,5]] },
    { stars:[[-8,-14],[-4,-8],[0,-2],[2,4],[4,8],[6,10],[8,8],[6,12],[2,16]],          lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[5,7],[7,8]] },
    { stars:[[-10,-6],[-6,-12],[0,-8],[8,-10],[6,-2],[0,4],[-6,4],[6,8],[10,12]],      lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0],[4,7],[7,8]] },
    { stars:[[-12,-6],[-6,-10],[0,-12],[6,-8],[12,-4],[8,4],[2,8],[-4,6],[-10,2]],     lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,0]] },
    { stars:[[-12,-6],[-4,-10],[4,-8],[12,-4],[8,2],[0,4],[-8,2],[-4,10],[4,12]],      lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8]] },
    { stars:[[-10,-10],[-14,-2],[-10,6],[-4,2],[-2,-6],[2,-6],[4,2],[10,6],[14,-2],[10,-10],[0,0]], lines:[[0,1],[1,2],[2,3],[3,4],[4,0],[5,6],[6,7],[7,8],[8,9],[9,5],[3,10],[10,6]] },
  ];

  const ZODIAC_CAT = [
    'AI 代理人','機器學習','NLP基礎','神經網路',
    '生成式 AI','深度學習','電腦視覺','機器學習',
    'AI 代理人','神經網路','生成式 AI','NLP基礎',
  ];

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

  // ─────────────────────────────────────────────────────────────────────────────

  class ConstellationAtlas {
    constructor(container, topics) {
      this._el      = typeof container === 'string' ? document.querySelector(container) : container;
      this._topics  = topics || [];
      this._rot     = 0;
      this._autoRot = true;
      this._speed   = 0.005;
      this._visible = false;
      this._raf     = null;
      this._byCat   = {};

      this._calc();
      this._buildTermPools();
      this._buildClusters();
      this._buildZodiacNodes();
      this._buildMansionNodes();
      this._buildSVG();
      this._drawAll();
    }

    _calc() {
      this._W  = this._el.clientWidth  || window.innerWidth;
      this._H  = this._el.clientHeight || window.innerHeight;
      this._cx = this._W / 2;
      this._cy = this._H / 2;
      const md      = Math.min(this._W, this._H - 90);
      this._orbitR  = md * 0.285;
      this._zodR    = md * 0.405;
      this._sxR     = md * 0.520;
      this._coreR   = md * 0.055;
    }

    _d2r(d) { return d * Math.PI / 180; }
    _pt(deg, r) {
      const a = this._d2r(deg);
      return [Math.cos(a) * r, Math.sin(a) * r];
    }

    _normCat(raw) {
      const c = String(raw || '').split('\n')[0].trim()
        .replace(/\s+/g,' ')
        .replace(/NLP\s*基礎/i,'NLP基礎')
        .replace(/生成式AI/i,'生成式 AI')
        .replace(/AI\s*代理人/i,'AI 代理人');
      for (const d of CAT_DEFS) if (c === d.cat) return d.cat;
      for (const d of CAT_DEFS) if (c.includes(d.cat)||d.cat.includes(c.replace(/ /g,''))) return d.cat;
      const cl = c.toLowerCase();
      if (cl.includes('ml')||cl.includes('機器')) return '機器學習';
      if (cl.includes('dl')||cl.includes('深度')) return '深度學習';
      if (cl.includes('nn')||cl.includes('神經')) return '神經網路';
      if (cl.includes('gen')||cl.includes('生成')) return '生成式 AI';
      if (cl.includes('cv')||cl.includes('視覺')) return '電腦視覺';
      if (cl.includes('nlp')||cl.includes('語言')) return 'NLP基礎';
      if (cl.includes('agt')||cl.includes('代理')) return 'AI 代理人';
      return '生成式 AI';
    }

    _buildTermPools() {
      this._topics.forEach(t => {
        const cat = this._normCat(t.category);
        (this._byCat[cat] ??= []).push({
          id:       String(t.id || ('r'+Math.random())),
          title:    t.title    || '',
          eng:      t.eng_name || '',
          cat,
          def:      t.def      || '',
          key_goal: !!t.key_goal,
        });
      });
    }

    _buildClusters() {
      this._clusters = [];
      CAT_DEFS.forEach((def, ci) => {
        const items  = this._byCat[def.cat] || [];
        const angle  = (ci / CAT_DEFS.length) * 360 - 90;
        const [gcx, gcy] = this._pt(angle, this._orbitR);
        const n      = items.length;
        const groupR = Math.max(52, Math.min(130, 28 + Math.sqrt(n) * 11));
        const G      = Math.PI * (3 - Math.sqrt(5));

        const nodes = items.map((t, i) => {
          const r  = groupR * Math.sqrt((i+0.5)/Math.max(n,1));
          const th = i * G;
          return { id:t.id, title:t.title, eng:t.eng, cat:def.cat, def:t.def,
            color:def.color, r:t.key_goal ? 5.5 : 3.5,
            lx: gcx + r*Math.cos(th), ly: gcy + r*Math.sin(th) };
        });
        const links = this._mstLinks(nodes);
        this._clusters.push({ def, centerAngle:angle, gcx, gcy, groupR, nodes, links });
      });
      this._allNodes = this._clusters.flatMap(c => c.nodes);
    }

    _mstLinks(nodes) {
      if (nodes.length <= 1) return [];
      const dist = (a,b) => Math.hypot(a.lx-b.lx, a.ly-b.ly);
      const inMST = new Set([0]);
      const links = [];
      while (inMST.size < nodes.length) {
        let best = { d:Infinity, i:-1, j:-1 };
        inMST.forEach(i => {
          nodes.forEach((_, j) => {
            if (inMST.has(j)) return;
            const d = dist(nodes[i], nodes[j]);
            if (d < best.d) best = { d, i, j };
          });
        });
        if (best.j === -1) break;
        inMST.add(best.j);
        links.push({ s:nodes[best.i], t:nodes[best.j] });
      }
      const used = new Set(links.map(l => `${l.s.id}-${l.t.id}`));
      nodes.forEach((a,i) => {
        nodes.map((b,j)=>({j,d:dist(a,b)})).filter(({j})=>j!==i)
          .sort((x,y)=>x.d-y.d).slice(0,3).forEach(({j})=>{
            const k1=`${a.id}-${nodes[j].id}`, k2=`${nodes[j].id}-${a.id}`;
            if (!used.has(k1)&&!used.has(k2)&&dist(a,nodes[j])<55){
              used.add(k1); links.push({s:a,t:nodes[j]});
            }
          });
      });
      return links;
    }

    _buildZodiacNodes() {
      const ptrs = Object.fromEntries(CAT_DEFS.map(d=>[d.cat,0]));
      this._zodiacData = ZODIAC_PATTERNS.map((pat, zi) => {
        const cat    = ZODIAC_CAT[zi];
        const catDef = CAT_DEFS.find(d=>d.cat===cat);
        const pool   = this._byCat[cat] || [];
        const mid    = zi*30+15;
        const [cx,cy]= this._pt(mid, this._zodR);
        const nodes  = pat.stars.map((s,si) => {
          if (!pool.length) return null;
          const t = pool[ptrs[cat]++ % pool.length];
          return { id:`z${zi}_${si}`, title:t.title, eng:t.eng, cat,
            def:t.def, color:catDef.color, r:t.key_goal?3.5:2.2,
            lx:cx+s[0], ly:cy+s[1] };
        }).filter(Boolean);
        return { pat, zi, mid, cx, cy, catDef, nodes };
      });
    }

    _buildMansionNodes() {
      const ptrs = Object.fromEntries(CAT_DEFS.map(d=>[d.cat,0]));
      this._mansionData = MANSIONS.map((m, idx) => {
        const grp      = m.g;
        const localIdx = idx - GROUP_ORDER[grp];
        if (localIdx < 0 || localIdx >= 7) return null;
        const angle    = GROUP_ANGLES[grp][localIdx];
        const color    = GROUP_COLOR[grp];
        const [cx,cy]  = this._pt(angle, this._sxR);
        const cat      = GROUP_CAT[grp][localIdx % GROUP_CAT[grp].length];
        const catDef   = CAT_DEFS.find(d=>d.cat===cat);
        const pool     = this._byCat[cat] || [];
        const nodes    = m.stars.map((s,si) => {
          if (!pool.length) return null;
          const t = pool[ptrs[cat]++ % pool.length];
          return { id:`m${idx}_${si}`, title:t.title, eng:t.eng, cat,
            def:t.def, color:catDef?catDef.color:color, r:t.key_goal?3.0:1.8,
            lx:cx+s[0], ly:cy+s[1] };
        }).filter(Boolean);
        return { m, idx, angle, cx, cy, color, nodes };
      }).filter(Boolean);
    }

    _buildSVG() {
      d3.select(this._el).select('svg.ca-svg').remove();
      this._svg = d3.select(this._el).append('svg').attr('class','ca-svg')
        .attr('width','100%').attr('height','100%')
        .style('position','absolute').style('top',0).style('left',0)
        .style('display','none');

      const defs = this._svg.append('defs');
      const sf = defs.append('filter').attr('id','star-glow')
        .attr('x','-150%').attr('y','-150%').attr('width','500%').attr('height','500%');
      sf.append('feGaussianBlur').attr('in','SourceGraphic').attr('stdDeviation',3.5).attr('result','b');
      const sm = sf.append('feMerge');
      sm.append('feMergeNode').attr('in','b');
      sm.append('feMergeNode').attr('in','SourceGraphic');

      const pf = defs.append('filter').attr('id','pulse-glow')
        .attr('x','-200%').attr('y','-200%').attr('width','600%').attr('height','600%');
      pf.append('feGaussianBlur').attr('in','SourceGraphic').attr('stdDeviation',5).attr('result','b');
      const pm = pf.append('feMerge');
      pm.append('feMergeNode').attr('in','b');
      pm.append('feMergeNode').attr('in','SourceGraphic');

      const cf = defs.append('filter').attr('id','core-glow')
        .attr('x','-100%').attr('y','-100%').attr('width','400%').attr('height','400%');
      cf.append('feGaussianBlur').attr('in','SourceGraphic').attr('stdDeviation',10).attr('result','b');
      const cm = cf.append('feMerge');
      cm.append('feMergeNode').attr('in','b');
      cm.append('feMergeNode').attr('in','SourceGraphic');

      const g = defs.append('radialGradient').attr('id','core-grad').attr('cx','35%').attr('cy','35%');
      g.append('stop').attr('offset','0%').attr('stop-color','#fff7d6');
      g.append('stop').attr('offset','45%').attr('stop-color','#fbbf24');
      g.append('stop').attr('offset','100%').attr('stop-color','#b45309');

      // Root → zoomG (D3 pan+zoom) → rotG (auto-rotation)
      this._root  = this._svg.append('g').attr('class','ca-root');
      this._zoomG = this._root.append('g').attr('class','ca-zoomg')
        .attr('transform',`translate(${this._cx},${this._cy})`);
      this._rotG  = this._zoomG.append('g').attr('class','ca-rotg');

      // D3 zoom: scroll=zoom, drag=pan; exclude node elements from drag-start
      this._zoomBehavior = d3.zoom()
        .scaleExtent([0.18, 7])
        .filter(ev => {
          if (ev.type === 'wheel') return true;
          const tag = ev.target.tagName.toLowerCase();
          return tag !== 'circle' && tag !== 'text';
        })
        .on('zoom', ev => {
          const t = ev.transform;
          this._zoomG.attr('transform',
            `translate(${this._cx + t.x},${this._cy + t.y}) scale(${t.k})`);
        });
      this._svg.call(this._zoomBehavior);
      this._svg.on('dblclick.zoom', null);

      // Click on background closes panel
      this._svg.on('click', () =>
        document.getElementById('atlas-panel')?.classList.remove('show'));
    }

    _drawAll() {
      this._drawOrbitalRings();
      this._drawCrossLinks();
      this._drawMansions();
      this._drawZodiacPatterns();
      this._drawClusters();
      this._drawCore();
    }

    _drawOrbitalRings() {
      const g = this._rotG.append('g').attr('class','ca-orbit');
      g.append('circle').attr('r',this._orbitR).attr('fill','none')
        .attr('stroke','rgba(125,211,252,0.14)').attr('stroke-width',1).attr('stroke-dasharray','6,9');
      [this._zodR-16, this._zodR+16].forEach(r =>
        g.append('circle').attr('r',r).attr('fill','none')
          .attr('stroke','rgba(125,211,252,0.10)').attr('stroke-width',0.7));
      for (let i=0;i<12;i++) {
        const a = i*30;
        const [x1,y1]=this._pt(a,this._zodR-16), [x2,y2]=this._pt(a,this._zodR+16);
        g.append('line').attr('x1',x1).attr('y1',y1).attr('x2',x2).attr('y2',y2)
          .attr('stroke','rgba(125,211,252,0.07)').attr('stroke-width',0.6);
      }
      g.append('circle').attr('r',this._sxR).attr('fill','none')
        .attr('stroke','rgba(125,211,252,0.07)').attr('stroke-width',0.8).attr('stroke-dasharray','2,10');
      g.append('circle').attr('r',this._sxR+34).attr('fill','none')
        .attr('stroke','rgba(125,211,252,0.04)').attr('stroke-width',1).attr('stroke-dasharray','1,14');
    }

    _drawCrossLinks() {
      const g = this._rotG.append('g').attr('class','ca-crosslinks');
      const byName = Object.fromEntries(this._clusters.map(c=>[c.def.cat,c]));
      CROSS_LINKS.forEach(({a,b}) => {
        const ca = byName[a], cb = byName[b];
        if (!ca||!cb||!ca.nodes.length||!cb.nodes.length) return;
        const dx=cb.gcx-ca.gcx, dy=cb.gcy-ca.gcy, dir=Math.atan2(dy,dx);
        const nodeA = [...ca.nodes].sort((p,q)=>
          Math.abs(this._adiff(Math.atan2(p.ly-ca.gcy,p.lx-ca.gcx),dir)) -
          Math.abs(this._adiff(Math.atan2(q.ly-ca.gcy,q.lx-ca.gcx),dir)))[0];
        const nodeB = cb.nodes.reduce((b,n)=>
          Math.hypot(n.lx-nodeA.lx,n.ly-nodeA.ly)<Math.hypot(b.lx-nodeA.lx,b.ly-nodeA.ly)?n:b, cb.nodes[0]);
        g.append('line')
          .attr('x1',nodeA.lx).attr('y1',nodeA.ly).attr('x2',nodeB.lx).attr('y2',nodeB.ly)
          .attr('stroke',ca.def.color).attr('stroke-opacity',0.10)
          .attr('stroke-width',0.5).attr('stroke-dasharray','4,7');
      });
    }

    _adiff(a,b) {
      let d=a-b;
      while(d>Math.PI)d-=2*Math.PI;
      while(d<-Math.PI)d+=2*Math.PI;
      return d;
    }

    // ── 二十八宿：AI術語節點填入星點位置 ────────────────────────────────────

    _drawMansions() {
      const g = this._rotG.append('g').attr('class','ca-mansions');
      const self = this;
      this._mansionData.forEach(({ m, cx, cy, color, nodes }) => {
        const mg = g.append('g').attr('transform',`translate(${cx},${cy})`);
        m.lines.forEach(([si,ti]) => {
          const s=m.stars[si], t=m.stars[ti];
          mg.append('line').attr('x1',s[0]).attr('y1',s[1]).attr('x2',t[0]).attr('y2',t[1])
            .attr('stroke',color).attr('stroke-opacity',0.38).attr('stroke-width',0.8);
        });
        const ns = mg.selectAll('g.mn').data(nodes).join('g').attr('class','mn')
          .attr('transform',(_,i)=>`translate(${m.stars[i][0]},${m.stars[i][1]})`)
          .style('cursor','pointer');
        ns.append('circle').attr('r',d=>d.r).attr('data-nid',d=>d.id)
          .attr('fill',d=>d.color).attr('fill-opacity',0.72)
          .style('filter','url(#star-glow)');
        ns.on('mouseenter',(ev,d)=>{
            d3.select(ev.currentTarget).select('circle')
              .transition().duration(100).attr('r',d.r*2.8);
            self._tooltip(ev,d);
          })
          .on('mouseleave',(ev,d)=>{
            d3.select(ev.currentTarget).select('circle')
              .transition().duration(200).attr('r',d.r);
            self._hideTooltip();
          })
          .on('click',(ev,d)=>{
            ev.stopPropagation();
            self._panel(d);
            self._glowNode(d);
          });
      });
    }

    // ── 十二星座：AI術語節點填入，無文字標籤 ────────────────────────────────

    _drawZodiacPatterns() {
      const g = this._rotG.append('g').attr('class','ca-zodiac');
      const self = this;
      this._zodiacData.forEach(({ pat, cx, cy, catDef, nodes }) => {
        const pg = g.append('g').attr('transform',`translate(${cx},${cy})`);
        pat.lines.forEach(([si,ti]) => {
          const s=pat.stars[si], t=pat.stars[ti];
          pg.append('line').attr('x1',s[0]).attr('y1',s[1]).attr('x2',t[0]).attr('y2',t[1])
            .attr('stroke',catDef.color).attr('stroke-opacity',0.38).attr('stroke-width',0.9);
        });
        const ns = pg.selectAll('g.zn').data(nodes).join('g').attr('class','zn')
          .attr('transform',(_,i)=>`translate(${pat.stars[i][0]},${pat.stars[i][1]})`)
          .style('cursor','pointer');
        ns.append('circle').attr('r',d=>d.r).attr('data-nid',d=>d.id)
          .attr('fill',d=>d.color).attr('fill-opacity',0.78)
          .style('filter','url(#star-glow)');
        ns.on('mouseenter',(ev,d)=>{
            d3.select(ev.currentTarget).select('circle')
              .transition().duration(100).attr('r',d.r*2.8);
            self._tooltip(ev,d);
          })
          .on('mouseleave',(ev,d)=>{
            d3.select(ev.currentTarget).select('circle')
              .transition().duration(200).attr('r',d.r);
            self._hideTooltip();
          })
          .on('click',(ev,d)=>{
            ev.stopPropagation();
            self._panel(d);
            self._glowNode(d);
          });
      });
    }

    // ── 七大 AI 類別星座群（內環）────────────────────────────────────────────

    _drawClusters() {
      const self = this;
      this._clusterEls = [];
      this._clusters.forEach((cluster, ci) => {
        const cg = this._rotG.append('g').attr('class',`ca-cluster ca-cluster-${ci}`);
        const lo = cluster.groupR + 18;
        const [lx,ly] = this._pt(cluster.centerAngle, this._orbitR + lo);
        cg.append('text').attr('x',lx).attr('y',ly-4).attr('text-anchor','middle')
          .attr('fill',cluster.def.color).attr('font-size',11).attr('font-weight',700)
          .attr('letter-spacing',1).attr('pointer-events','none').text(cluster.def.cat);
        cg.append('text').attr('x',lx).attr('y',ly+9).attr('text-anchor','middle')
          .attr('fill',cluster.def.color+'88').attr('font-size',8).attr('pointer-events','none')
          .text(`(${cluster.def.shortName})`);

        const linesSel = cg.selectAll(`line.cl${ci}`).data(cluster.links).join('line')
          .attr('class',`cl${ci}`)
          .attr('x1',d=>d.s.lx).attr('y1',d=>d.s.ly)
          .attr('x2',d=>d.t.lx).attr('y2',d=>d.t.ly)
          .attr('stroke',cluster.def.color).attr('stroke-opacity',0.32).attr('stroke-width',1);

        const nodeSel = cg.selectAll(`g.cs${ci}`).data(cluster.nodes).join('g')
          .attr('class',`cs${ci}`)
          .attr('transform',d=>`translate(${d.lx},${d.ly})`)
          .style('cursor','pointer');

        nodeSel.append('circle').attr('r',d=>d.r*3)
          .attr('fill',cluster.def.color+'16').attr('pointer-events','none');
        nodeSel.append('circle').attr('r',d=>d.r).attr('data-nid',d=>d.id)
          .attr('fill',cluster.def.color)
          .attr('stroke','#fff').attr('stroke-width',0.5).attr('stroke-opacity',0.5)
          .style('filter','url(#star-glow)');

        // Only label key_goal nodes (r > 5)
        nodeSel.filter(d=>d.r>5).append('text')
          .attr('text-anchor','middle').attr('dy',d=>-(d.r+7))
          .attr('fill',cluster.def.color+'dd').attr('font-size',8.5)
          .attr('pointer-events','none')
          .text(d=>d.title.length>9?d.title.slice(0,8)+'…':d.title);

        nodeSel
          .on('mouseenter',(ev,d)=>{
            d3.select(ev.currentTarget).select('circle:nth-child(2)')
              .transition().duration(120).attr('r',d.r*2.5);
            linesSel
              .attr('stroke-opacity',l=>l.s.id===d.id||l.t.id===d.id?1:0.08)
              .attr('stroke-width',l=>l.s.id===d.id||l.t.id===d.id?2.5:0.8);
            self._tooltip(ev,d);
          })
          .on('mouseleave',(ev,d)=>{
            d3.select(ev.currentTarget).select('circle:nth-child(2)')
              .transition().duration(200).attr('r',d.r);
            linesSel.attr('stroke-opacity',0.32).attr('stroke-width',1);
            self._hideTooltip();
          })
          .on('click',(ev,d)=>{
            ev.stopPropagation();
            self._panel(d);
            self._neuralPulse(d, cluster.links, cluster.def.color);
          });

        this._clusterEls.push({ cg, linesSel, nodeSel, cluster });
      });
    }

    // ── 點擊：神經傳電脈衝動畫 ───────────────────────────────────────────────

    _glowNode(node) {
      this._rotG.selectAll(`circle[data-nid="${node.id}"]`)
        .transition().duration(200).attr('r', node.r*5).style('filter','url(#pulse-glow)')
        .transition().duration(700).attr('r', node.r).style('filter','url(#star-glow)');
    }

    _neuralPulse(clickedNode, links, color) {
      this._glowNode(clickedNode);
      const connected = links.filter(l=>l.s.id===clickedNode.id||l.t.id===clickedNode.id);
      connected.slice(0,8).forEach((link, i) => {
        const other = link.s.id===clickedNode.id ? link.t : link.s;
        setTimeout(() => {
          // Travelling dot
          const dot = this._rotG.append('circle')
            .attr('cx', clickedNode.lx).attr('cy', clickedNode.ly)
            .attr('r', 4).attr('fill', color).attr('fill-opacity', 1)
            .attr('pointer-events','none')
            .style('filter','url(#pulse-glow)');
          dot.transition().duration(520).ease(d3.easeLinear)
            .attr('cx', other.lx).attr('cy', other.ly)
            .attr('fill-opacity', 0)
            .on('end', function() {
              d3.select(this).remove();
            });
          // Glow destination after pulse arrives
          setTimeout(() => this._glowNode(other), 480);
        }, i * 90);
      });
    }

    // ── 中心核心 ──────────────────────────────────────────────────────────────

    _drawCore() {
      const g=this._rotG.append('g').attr('class','ca-core');
      const r=this._coreR, r2=r*1.6;
      g.append('circle').attr('r',r2+8).attr('fill','none')
        .attr('stroke','rgba(125,211,252,0.08)').attr('stroke-width',1).attr('stroke-dasharray','3,12');
      g.append('circle').attr('r',r2).attr('fill','none')
        .attr('stroke','rgba(125,211,252,0.16)').attr('stroke-width',1);
      g.append('circle').attr('r',r).attr('fill','url(#core-grad)').style('filter','url(#core-glow)');
      g.append('text').attr('text-anchor','middle').attr('dy','0.3em')
        .attr('fill','#1c1917').attr('font-size',r*0.55).attr('font-weight',700).text('AI');
      for (let i=0;i<8;i++) {
        const a=this._d2r(i*45), r0=r+2, r1=r+(i%2===0?16:9);
        g.append('line')
          .attr('x1',Math.cos(a)*r0).attr('y1',Math.sin(a)*r0)
          .attr('x2',Math.cos(a)*r1).attr('y2',Math.sin(a)*r1)
          .attr('stroke','#fbbf24').attr('stroke-width',i%2===0?1.5:1).attr('stroke-opacity',0.7);
      }
    }

    // ── Tooltip & Panel ───────────────────────────────────────────────────────

    _tooltip(ev, d) {
      const tip = document.getElementById('atlas-tooltip');
      if (!tip) return;
      tip.innerHTML = `<strong style="color:${d.color}">${d.title}</strong>
        ${d.eng?`<br><span style="color:#94a3b8;font-size:10px">${d.eng}</span>`:''}
        <br><span style="color:#64748b;font-size:10px">${d.cat}</span>`;
      tip.style.display = 'block';
      tip.style.left = Math.min(ev.clientX+14, window.innerWidth-220)+'px';
      tip.style.top  = Math.min(ev.clientY-10, window.innerHeight-80)+'px';
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
        ${node.eng?`<div class="panel-eng">${node.eng}</div>`:''}
        <p class="panel-def">${node.def||'暫無說明。'}</p>
        <div class="panel-cat" style="color:${node.color}">${node.cat}</div>
        <div class="panel-actions">
          <a class="panel-btn" href="chat.html?term=${encodeURIComponent(node.title)}" target="_blank">💬 問 AI</a>
          <a class="panel-btn" href="vocab.html" target="_blank">📖 詞庫</a>
        </div>`;
      p.classList.add('show');
    }

    // ── 旋轉動畫 ──────────────────────────────────────────────────────────────

    _applyRot() {
      this._rotG.attr('transform', `rotate(${this._rot})`);
    }

    _startAnim() {
      const self = this;
      (function loop() {
        if (self._visible && self._autoRot) {
          self._rot = (self._rot + self._speed) % 360;
          self._applyRot();
        }
        self._raf = requestAnimationFrame(loop);
      })();
    }

    // ── 搜尋 ──────────────────────────────────────────────────────────────────

    search(query) {
      if (!this._clusterEls) return;
      if (!query) {
        this._clusterEls.forEach(({nodeSel,linesSel}) => {
          nodeSel.select('circle:nth-child(2)').attr('opacity',1);
          linesSel.attr('stroke-opacity',0.32);
        });
        return;
      }
      const q = query.toLowerCase();
      const hitIds = new Set(
        this._allNodes.filter(n=>n.title.toLowerCase().includes(q)||n.eng.toLowerCase().includes(q))
          .map(n=>n.id)
      );
      this._clusterEls.forEach(({nodeSel,linesSel}) => {
        nodeSel.select('circle:nth-child(2)').attr('opacity',d=>hitIds.has(d.id)?1:0.07);
        linesSel.attr('stroke-opacity',l=>hitIds.has(l.s.id)||hitIds.has(l.t.id)?0.7:0.04);
      });
      if (hitIds.size) {
        const first = this._allNodes.find(n=>hitIds.has(n.id));
        if (first) {
          const cl = this._clusters.find(c=>c.nodes.includes(first));
          if (cl) { this._rot = -cl.centerAngle+5; this._applyRot(); }
        }
      }
    }

    // ── Public API ────────────────────────────────────────────────────────────

    show() {
      this._visible = true;
      this._svg.style('display','block');
      if (!this._raf) this._startAnim();
    }

    hide() {
      this._visible = false;
      this._svg.style('display','none');
      this._hideTooltip();
    }

    toggleRotation() {
      this._autoRot = !this._autoRot;
      return this._autoRot;
    }

    resetView() {
      this._rot = 0;
      this._applyRot();
      this._svg.transition().duration(600)
        .call(this._zoomBehavior.transform, d3.zoomIdentity);
    }
  }

  global.ConstellationAtlas = ConstellationAtlas;
  global.StarMap = ConstellationAtlas;

})(window);
