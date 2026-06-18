// js/starmap.js — 天象星圖 v1.0
// 十二星座 × 四象二十八星宿  旋轉星線圖

(function(global) {
  'use strict';

  const ELEM_COLOR = {
    fire:  '#f97316',
    earth: '#4ade80',
    air:   '#7dd3fc',
    water: '#818cf8'
  };

  const ZODIACS = [
    { name: '牡羊座', eng: 'Aries',       sym: '♈', el: 'fire',  desc: '火象星座・開創宮・3/21–4/19，代表衝動、勇氣與開創力' },
    { name: '金牛座', eng: 'Taurus',      sym: '♉', el: 'earth', desc: '土象星座・固定宮・4/20–5/20，代表穩健、美感與物質享受' },
    { name: '雙子座', eng: 'Gemini',      sym: '♊', el: 'air',   desc: '風象星座・變動宮・5/21–6/20，代表溝通、機智與變化多端' },
    { name: '巨蟹座', eng: 'Cancer',      sym: '♋', el: 'water', desc: '水象星座・開創宮・6/21–7/22，代表情感、家庭與保護本能' },
    { name: '獅子座', eng: 'Leo',         sym: '♌', el: 'fire',  desc: '火象星座・固定宮・7/23–8/22，代表創意、自信與領導力' },
    { name: '處女座', eng: 'Virgo',       sym: '♍', el: 'earth', desc: '土象星座・變動宮・8/23–9/22，代表分析、完美與服務精神' },
    { name: '天秤座', eng: 'Libra',       sym: '♎', el: 'air',   desc: '風象星座・開創宮・9/23–10/22，代表平衡、美與人際關係' },
    { name: '天蠍座', eng: 'Scorpio',     sym: '♏', el: 'water', desc: '水象星座・固定宮・10/23–11/21，代表轉化、神秘與深刻洞察' },
    { name: '射手座', eng: 'Sagittarius', sym: '♐', el: 'fire',  desc: '火象星座・變動宮・11/22–12/21，代表哲學、自由與探索精神' },
    { name: '摩羯座', eng: 'Capricorn',   sym: '♑', el: 'earth', desc: '土象星座・開創宮・12/22–1/19，代表紀律、目標與成就' },
    { name: '水瓶座', eng: 'Aquarius',    sym: '♒', el: 'air',   desc: '風象星座・固定宮・1/20–2/18，代表創新、人道與未來願景' },
    { name: '雙魚座', eng: 'Pisces',      sym: '♓', el: 'water', desc: '水象星座・變動宮・2/19–3/20，代表直覺、靈性與同理心' },
  ];

  // 四象以28宿中心角定位
  const SI_XIANG = [
    { name: '東方青龍', short: '青龍', eng: 'Azure Dragon',   color: '#4ade80', mStart: 0,
      desc: '東方七宿之守護神獸，象徵春季，五行屬木，主生機萌發。七宿：角、亢、氐、房、心、尾、箕' },
    { name: '南方朱雀', short: '朱雀', eng: 'Vermilion Bird', color: '#f87171', mStart: 7,
      desc: '南方七宿之守護神獸，象徵夏季，五行屬火，主繁盛炎熱。七宿：井、鬼、柳、星、張、翼、軫' },
    { name: '西方白虎', short: '白虎', eng: 'White Tiger',    color: '#e2e8f0', mStart: 14,
      desc: '西方七宿之守護神獸，象徵秋季，五行屬金，主肅殺收斂。七宿：奎、婁、胃、昴、畢、觜、參' },
    { name: '北方玄武', short: '玄武', eng: 'Black Tortoise', color: '#60a5fa', mStart: 21,
      desc: '北方七宿之守護神獸，象徵冬季，五行屬水，主潛藏蟄伏。七宿：斗、牛、女、虛、危、室、壁' },
  ];

  const MANSIONS = [
    // 東方青龍 0–6
    { name: '角', sx: 0, desc: '東方青龍之首，龍角。春分點所在，黃道入口，天之門戶' },
    { name: '亢', sx: 0, desc: '東方青龍之頸，龍頸。主疾病與法令，天之大廟' },
    { name: '氐', sx: 0, desc: '東方青龍之根，龍胸。主根基與宮室，天之宮府' },
    { name: '房', sx: 0, desc: '東方青龍之腹，龍腹。即天駟，主命宮與車馬' },
    { name: '心', sx: 0, desc: '東方青龍之心，龍心。即天蠍座α(心宿二)，為帝王之星' },
    { name: '尾', sx: 0, desc: '東方青龍之尾，龍尾。主多子之兆，九子之宿' },
    { name: '箕', sx: 0, desc: '東方青龍之箕，龍箕。主風雨，天之簸箕' },
    // 南方朱雀 7–13
    { name: '井', sx: 1, desc: '南方朱雀之首，朱雀之口。天之南門，即獵戶座北側，主水利' },
    { name: '鬼', sx: 1, desc: '南方朱雀之目，朱雀之眼。即鬼宿星團(M44/蜂巢)，主死喪' },
    { name: '柳', sx: 1, desc: '南方朱雀之嘴，朱雀之唇。主草木繁盛，為天廚之宿' },
    { name: '星', sx: 1, desc: '南方朱雀之頸，七星宿。主急兵，為天廟中心，帝王所居' },
    { name: '張', sx: 1, desc: '南方朱雀之膀，張翅欲飛。主飲食豐盛，天之廚房' },
    { name: '翼', sx: 1, desc: '南方朱雀之翼，朱雀雙翅。主文才藝術，南方之極' },
    { name: '軫', sx: 1, desc: '南方朱雀之尾，車軫之宿。主車乘出行，有珍珠星長沙' },
    // 西方白虎 14–20
    { name: '奎', sx: 2, desc: '西方白虎之足，白虎尾足。主文章庫府，奎宿十六星' },
    { name: '婁', sx: 2, desc: '西方白虎之腰，婁宿三星。主聚衆牧場，為天之苑囿' },
    { name: '胃', sx: 2, desc: '西方白虎之胃，天倉之宿。主倉庫儲蓄，糧食充盈' },
    { name: '昴', sx: 2, desc: '西方白虎之肺，旄頭星。即七姐妹星團(昴星團)，主邊旄' },
    { name: '畢', sx: 2, desc: '西方白虎之目，畢宿八星。即畢星團(Hyades)，主邊兵罰星' },
    { name: '觜', sx: 2, desc: '西方白虎之嘴，觜宿三星。白虎之口，主軍威邊事' },
    { name: '參', sx: 2, desc: '西方白虎之頭，白虎首宿。即獵戶座，主斬殺征伐' },
    // 北方玄武 21–27
    { name: '斗', sx: 3, desc: '北方玄武之首，南斗六星。主壽命爵祿，天之廟堂' },
    { name: '牛', sx: 3, desc: '北方玄武之角，牛宿六星。主牧場農耕，牛郎星附近' },
    { name: '女', sx: 3, desc: '北方玄武之腹，女宿四星。主婦人針線，織女相對' },
    { name: '虛', sx: 3, desc: '北方玄武之心，虛宿二星。主空虛哀喪，秋冬悲涼之象' },
    { name: '危', sx: 3, desc: '北方玄武之背，危宿三星。主屋宇建築，危險兵破之兆' },
    { name: '室', sx: 3, desc: '北方玄武之殼，即飛馬座。天子之宮，營室之宿' },
    { name: '壁', sx: 3, desc: '北方玄武之足，壁宿二星。主圖書典籍，天之城垣' },
  ];

  // 歷史天文對應：角宿 ≈ 春分 ≈ 牡羊座起點
  // 各星座對應二十八宿全域索引
  const Z_LINKS = [
    [0, 1, 2],    // 牡羊 → 角,亢,氐
    [3, 4],       // 金牛 → 房,心
    [5, 6],       // 雙子 → 尾,箕
    [7, 8],       // 巨蟹 → 井,鬼
    [9, 10, 11],  // 獅子 → 柳,星,張
    [12, 13],     // 處女 → 翼,軫
    [14, 15],     // 天秤 → 奎,婁
    [16, 17],     // 天蠍 → 胃,昴
    [18, 19, 20], // 射手 → 畢,觜,參
    [21, 22],     // 摩羯 → 斗,牛
    [23, 24, 25], // 水瓶 → 女,虛,危
    [26, 27],     // 雙魚 → 室,壁
  ];

  // ─────────────────────────────────────────────────────────────────────────

  class StarMap {
    constructor(container) {
      this._el = typeof container === 'string'
        ? document.querySelector(container) : container;
      this._rot      = 0;
      this._autoRot  = true;
      this._rotSpeed = 0.008;
      this._visible  = false;
      this._raf      = null;

      this._calc();
      this._buildSVG();
      this._drawAll();
      this._bindDrag();
    }

    _calc() {
      this._W  = this._el.clientWidth  || window.innerWidth;
      this._H  = this._el.clientHeight || window.innerHeight;
      this._cx = this._W / 2;
      this._cy = this._H / 2;
      const md  = Math.min(this._W, this._H - 90);
      this._r0 = md * 0.065;
      this._r1 = md * 0.155;
      this._r2 = md * 0.285;
      this._r3 = md * 0.400;
    }

    _buildSVG() {
      d3.select(this._el).select('svg.sm-svg').remove();
      this._svg = d3.select(this._el).append('svg')
        .attr('class', 'sm-svg')
        .attr('width', '100%').attr('height', '100%')
        .style('position', 'absolute').style('top', 0).style('left', 0)
        .style('display', 'none');

      const defs = this._svg.append('defs');
      // Glow filters for 四象 colors
      ['4ade80','f87171','e2e8f0','60a5fa'].forEach((hex, i) => {
        const f = defs.append('filter').attr('id', `smglow${i}`)
          .attr('x','-100%').attr('y','-100%').attr('width','400%').attr('height','400%');
        f.append('feGaussianBlur').attr('in','SourceGraphic').attr('stdDeviation', 4).attr('result','b');
        const m = f.append('feMerge');
        m.append('feMergeNode').attr('in','b');
        m.append('feMergeNode').attr('in','SourceGraphic');
      });

      this._root = this._svg.append('g')
        .attr('transform', `translate(${this._cx},${this._cy})`);
      this._rotG = this._root.append('g').attr('class', 'sm-rotg');
    }

    _d2r(d) { return d * Math.PI / 180; }

    _mAngle(i) { return i * (360 / 28); }
    _zAngle(i) { return i * 30 + 15; }
    _sxAngle(i) {
      const s = i * 7, e = i * 7 + 6;
      return (this._mAngle(s) + this._mAngle(e)) / 2;
    }

    _pt(deg, r) {
      const rad = this._d2r(deg);
      return [Math.cos(rad) * r, Math.sin(rad) * r];
    }

    _sectorPath(a0, a1, r1, r2) {
      const s0 = this._d2r(a0), s1 = this._d2r(a1);
      const la = (a1 - a0 > 180) ? 1 : 0;
      const p = (a, r) => [Math.cos(a) * r, Math.sin(a) * r];
      const [ox1, oy1] = p(s0, r2), [ox2, oy2] = p(s1, r2);
      const [ix1, iy1] = p(s0, r1), [ix2, iy2] = p(s1, r1);
      return `M${ox1},${oy1} A${r2},${r2} 0 ${la} 1 ${ox2},${oy2} L${ix2},${iy2} A${r1},${r1} 0 ${la} 0 ${ix1},${iy1} Z`;
    }

    _drawAll() {
      this._drawRings();
      this._drawLinks();
      this._drawSiXiang();
      this._drawMansions();
      this._drawZodiacs();
      this._drawCenter();
    }

    _drawRings() {
      const g = this._rotG.append('g').attr('class', 'sm-rings');

      // Outermost faint circle
      g.append('circle').attr('r', this._r3 + 55)
        .attr('fill', 'none').attr('stroke', 'rgba(125,211,252,0.05)').attr('stroke-width', 1);

      // Zodiac ring borders
      [this._r3 - 22, this._r3 + 22].forEach(r =>
        g.append('circle').attr('r', r).attr('fill', 'none')
          .attr('stroke', 'rgba(125,211,252,0.15)').attr('stroke-width', 1));

      // Mansion ring borders (dashed)
      [this._r2 - 16, this._r2 + 16].forEach(r =>
        g.append('circle').attr('r', r).attr('fill', 'none')
          .attr('stroke', 'rgba(125,211,252,0.1)').attr('stroke-width', 0.8)
          .attr('stroke-dasharray', '5,4'));

      // 四象 ring borders
      [this._r1 - 22, this._r1 + 22].forEach(r =>
        g.append('circle').attr('r', r).attr('fill', 'none')
          .attr('stroke', 'rgba(125,211,252,0.08)').attr('stroke-width', 0.8));

      // 四象 sector shading
      SI_XIANG.forEach((sx, i) => {
        const a0 = this._mAngle(i * 7) - 360 / 56;
        const a1 = this._mAngle(i * 7 + 6) + 360 / 56;
        g.append('path').attr('d', this._sectorPath(a0, a1, this._r1 - 22, this._r2 + 16))
          .attr('fill', sx.color + '07')
          .attr('stroke', sx.color + '22').attr('stroke-width', 0.5);
      });

      // 28-mansion tick lines on mansion ring
      for (let i = 0; i < 28; i++) {
        const a = this._mAngle(i) - 360 / 56;
        const [x1, y1] = this._pt(a, this._r2 - 16);
        const [x2, y2] = this._pt(a, this._r2 + 16);
        g.append('line').attr('x1', x1).attr('y1', y1).attr('x2', x2).attr('y2', y2)
          .attr('stroke', 'rgba(125,211,252,0.1)').attr('stroke-width', 0.5);
      }

      // 12 zodiac division lines on zodiac ring
      for (let i = 0; i < 12; i++) {
        const a = i * 30;
        const [x1, y1] = this._pt(a, this._r3 - 22);
        const [x2, y2] = this._pt(a, this._r3 + 22);
        g.append('line').attr('x1', x1).attr('y1', y1).attr('x2', x2).attr('y2', y2)
          .attr('stroke', 'rgba(125,211,252,0.12)').attr('stroke-width', 0.8);
      }
    }

    _drawLinks() {
      const g = this._rotG.append('g').attr('class', 'sm-links');

      // Mansion → 四象
      MANSIONS.forEach((m, i) => {
        const [mx, my] = this._pt(this._mAngle(i), this._r2);
        const [sx, sy] = this._pt(this._sxAngle(m.sx), this._r1);
        const c = SI_XIANG[m.sx].color;
        g.append('line')
          .attr('class', `sm-l-sx${m.sx} sm-l-m${i}`)
          .attr('x1', mx).attr('y1', my).attr('x2', sx).attr('y2', sy)
          .attr('stroke', c).attr('stroke-opacity', 0.18).attr('stroke-width', 0.8);
      });

      // Zodiac → Mansion
      Z_LINKS.forEach((mList, zIdx) => {
        const [zx, zy] = this._pt(this._zAngle(zIdx), this._r3);
        const c = ELEM_COLOR[ZODIACS[zIdx].el];
        mList.forEach(mIdx => {
          const [mx, my] = this._pt(this._mAngle(mIdx), this._r2);
          g.append('line')
            .attr('class', `sm-l-z${zIdx} sm-l-m${mIdx}`)
            .attr('x1', zx).attr('y1', zy).attr('x2', mx).attr('y2', my)
            .attr('stroke', c).attr('stroke-opacity', 0.14).attr('stroke-width', 0.6);
        });
      });

      // Dashed arc connecting adjacent zodiacs
      for (let i = 0; i < 12; i++) {
        const [x1, y1] = this._pt(this._zAngle(i), this._r3);
        const [x2, y2] = this._pt(this._zAngle((i + 1) % 12), this._r3);
        g.append('line').attr('x1', x1).attr('y1', y1).attr('x2', x2).attr('y2', y2)
          .attr('stroke', 'rgba(125,211,252,0.1)').attr('stroke-width', 0.5)
          .attr('stroke-dasharray', '3,7');
      }
    }

    _drawSiXiang() {
      const self = this;
      const g = this._rotG.append('g').attr('class', 'sm-sx');

      SI_XIANG.forEach((sx, i) => {
        const [x, y] = this._pt(this._sxAngle(i), this._r1);
        const ng = g.append('g').attr('class', `sm-sx-node sm-sx${i}`)
          .attr('transform', `translate(${x},${y})`).style('cursor', 'pointer');

        ng.append('circle').attr('r', 21)
          .attr('fill', sx.color + '18').attr('stroke', sx.color)
          .attr('stroke-width', 1.5).attr('stroke-opacity', 0.65);
        ng.append('text').attr('text-anchor', 'middle').attr('dy', '0.35em')
          .attr('fill', sx.color).attr('font-size', 13).attr('font-weight', 700)
          .attr('pointer-events', 'none').text(sx.short);

        ng.on('mouseenter', (ev) => {
          d3.select(ev.currentTarget).select('circle')
            .transition().duration(150).attr('r', 27).attr('stroke-width', 2.5);
          self._rotG.selectAll(`.sm-l-sx${i}`)
            .attr('stroke-opacity', 0.8).attr('stroke-width', 2);
        })
        .on('mouseleave', (ev) => {
          d3.select(ev.currentTarget).select('circle')
            .transition().duration(200).attr('r', 21).attr('stroke-width', 1.5);
          self._rotG.selectAll(`.sm-l-sx${i}`)
            .attr('stroke-opacity', 0.18).attr('stroke-width', 0.8);
        })
        .on('click', (ev) => {
          ev.stopPropagation();
          self._panel({ name: sx.name, eng: sx.eng, color: sx.color, sub: '四象', desc: sx.desc });
        });
      });
    }

    _drawMansions() {
      const self = this;
      const g = this._rotG.append('g').attr('class', 'sm-mansions');

      MANSIONS.forEach((m, i) => {
        const [x, y] = this._pt(this._mAngle(i), this._r2);
        const c = SI_XIANG[m.sx].color;
        const sxIdx = m.sx;
        const ng = g.append('g').attr('class', `sm-m-node sm-mn${i}`)
          .attr('transform', `translate(${x},${y})`).style('cursor', 'pointer');

        ng.append('circle').attr('r', 10)
          .attr('fill', c + '22').attr('stroke', c)
          .attr('stroke-width', 1).attr('stroke-opacity', 0.65);
        ng.append('text').attr('text-anchor', 'middle').attr('dy', '0.35em')
          .attr('fill', c).attr('font-size', 8).attr('font-weight', 600)
          .attr('pointer-events', 'none').text(m.name);

        ng.on('mouseenter', (ev) => {
          d3.select(ev.currentTarget).select('circle')
            .transition().duration(150).attr('r', 14).attr('stroke-width', 2);
          self._rotG.selectAll(`.sm-l-m${i}`)
            .attr('stroke-opacity', 0.85).attr('stroke-width', 2);
        })
        .on('mouseleave', (ev) => {
          d3.select(ev.currentTarget).select('circle')
            .transition().duration(200).attr('r', 10).attr('stroke-width', 1);
          self._rotG.selectAll(`.sm-l-m${i}`).each(function() {
            const el = d3.select(this);
            const isSx = el.classed(`sm-l-sx${sxIdx}`);
            el.attr('stroke-opacity', isSx ? 0.18 : 0.14)
              .attr('stroke-width', isSx ? 0.8 : 0.6);
          });
        })
        .on('click', (ev) => {
          ev.stopPropagation();
          self._panel({
            name: m.name + '宿',
            eng: SI_XIANG[m.sx].short + ' · ' + m.name,
            color: c, sub: '二十八星宿', desc: m.desc
          });
        });
      });
    }

    _drawZodiacs() {
      const self = this;
      const g = this._rotG.append('g').attr('class', 'sm-zodiacs');

      ZODIACS.forEach((z, i) => {
        const [x, y] = this._pt(this._zAngle(i), this._r3);
        const c = ELEM_COLOR[z.el];
        const ng = g.append('g').attr('class', `sm-z-node sm-zn${i}`)
          .attr('transform', `translate(${x},${y})`).style('cursor', 'pointer');

        ng.append('circle').attr('r', 17)
          .attr('fill', c + '1c').attr('stroke', c)
          .attr('stroke-width', 1).attr('stroke-opacity', 0.55);
        ng.append('text').attr('text-anchor', 'middle').attr('y', -4)
          .attr('fill', c).attr('font-size', 11)
          .attr('pointer-events', 'none').text(z.sym);
        ng.append('text').attr('text-anchor', 'middle').attr('y', 8)
          .attr('fill', c + 'cc').attr('font-size', 6.5)
          .attr('pointer-events', 'none').text(z.name.slice(0, -1));

        const [lx, ly] = this._pt(this._zAngle(i), this._r3 + 40);
        g.append('text').attr('x', lx).attr('y', ly)
          .attr('text-anchor', 'middle').attr('dy', '0.35em')
          .attr('fill', c + '99').attr('font-size', 7.5)
          .attr('pointer-events', 'none').text(z.eng);

        ng.on('mouseenter', (ev) => {
          d3.select(ev.currentTarget).select('circle')
            .transition().duration(150).attr('r', 23).attr('stroke-width', 2);
          self._rotG.selectAll(`.sm-l-z${i}`)
            .attr('stroke-opacity', 0.85).attr('stroke-width', 2);
        })
        .on('mouseleave', (ev) => {
          d3.select(ev.currentTarget).select('circle')
            .transition().duration(200).attr('r', 17).attr('stroke-width', 1);
          self._rotG.selectAll(`.sm-l-z${i}`)
            .attr('stroke-opacity', 0.14).attr('stroke-width', 0.6);
        })
        .on('click', (ev) => {
          ev.stopPropagation();
          const elLabel = { fire:'火象', earth:'土象', air:'風象', water:'水象' };
          self._panel({
            name: z.name, eng: z.eng, color: c,
            sub: elLabel[z.el] + '星座 · 十二星座', desc: z.desc
          });
        });
      });
    }

    _drawCenter() {
      const g = this._rotG.append('g').attr('class', 'sm-center');
      const r = this._r0;

      g.append('circle').attr('r', r + 16)
        .attr('fill', 'none').attr('stroke', 'rgba(125,211,252,0.1)')
        .attr('stroke-width', 1).attr('stroke-dasharray', '3,9');
      g.append('circle').attr('r', r)
        .attr('fill', 'rgba(125,211,252,0.04)').attr('stroke', 'rgba(125,211,252,0.3)')
        .attr('stroke-width', 1.5);
      g.append('circle').attr('r', r * 0.55)
        .attr('fill', 'none').attr('stroke', 'rgba(125,211,252,0.18)').attr('stroke-width', 1);

      g.append('text').attr('text-anchor', 'middle').attr('dy', '-0.1em')
        .attr('fill', '#7dd3fc').attr('font-size', r * 0.55).attr('font-weight', 300)
        .text('天');
      g.append('text').attr('text-anchor', 'middle').attr('y', r * 0.6)
        .attr('fill', '#7dd3fc77').attr('font-size', 6.5)
        .text('CELESTIAL ATLAS');

      for (let i = 0; i < 8; i++) {
        const [px, py] = this._pt(i * 45, r + 5);
        g.append('circle').attr('cx', px).attr('cy', py).attr('r', i % 2 === 0 ? 2.5 : 1.5)
          .attr('fill', '#7dd3fc').attr('opacity', 0.4);
      }
    }

    _panel(data) {
      const p = document.getElementById('atlas-panel');
      if (!p) return;
      p.innerHTML = `
        <button class="panel-close"
          onclick="this.closest('#atlas-panel').classList.remove('show')">×</button>
        <span class="panel-color-dot" style="background:${data.color}"></span>
        <h3 class="panel-title">${data.name}</h3>
        ${data.eng ? `<div class="panel-eng">${data.eng}</div>` : ''}
        <p class="panel-def">${data.desc || '暫無說明。'}</p>
        <div class="panel-cat" style="color:${data.color}">${data.sub || ''}</div>
      `;
      p.classList.add('show');
    }

    _bindDrag() {
      const self = this;
      let dragging = false, lastX = 0;

      this._svg
        .on('pointerdown', (ev) => {
          if (ev.target.tagName === 'circle' || ev.target.tagName === 'text') return;
          dragging = true;
          lastX = ev.clientX;
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

    _startAnim() {
      const self = this;
      (function loop() {
        if (self._visible && self._autoRot) {
          self._rot += self._rotSpeed;
          self._applyRot();
        }
        self._raf = requestAnimationFrame(loop);
      })();
    }

    show() {
      this._visible = true;
      this._svg.style('display', 'block');
      if (!this._raf) this._startAnim();
    }

    hide() {
      this._visible = false;
      this._svg.style('display', 'none');
    }

    toggleRotation() {
      this._autoRot = !this._autoRot;
      return this._autoRot;
    }
  }

  global.StarMap = StarMap;
})(window);
