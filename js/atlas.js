// MODULE: atlas
// js/atlas.js — AI 術語星圖 Canvas 視覺化引擎
(function(global) {
  if (!global.TermAtlas) {
    class TermAtlas {
      constructor(canvas, data) {
        if (!canvas || !data) { this.error = 'Missing canvas or data'; return; }
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.data = Array.isArray(data) ? data : global.lessonData || [];
        this.nodes = [];
        this.edges = [];
        this.zoom = 1;
        this.rotation = 0;
        this.dragging = false;
        this.lastMouse = {x:0,y:0};
        this.selected = null;
        this.searchTerm = '';
        this.initNodes();
        this.initEvents();
        this.animate();
      }
      initNodes() {
        if (!this.data.length) return;
        const categoryColors = {DL:'#fbbf24',NN:'#34d399',ML:'#a78bfa',AI:'#7dd3fc'};
        const cx = this.canvas.width/2, cy = this.canvas.height/2;
        const count = this.data.length;
        this.data.forEach((item, i) => {
          const angle = 2*Math.PI*i/count;
          const r = Math.min(cx,cy)*0.7;
          this.nodes.push({
            x: cx + r*Math.cos(angle),
            y: cy + r*Math.sin(angle),
            vx:0, vy:0,
            color: categoryColors[item.category] || '#9ca3af',
            ...item
          });
        });
      }
      initEvents() {
        const c = this.canvas;
        c.addEventListener('mousedown', (e) => {
          this.dragging = true;
          this.lastMouse = {x:e.offsetX, y:e.offsetY};
        });
        c.addEventListener('mousemove', (e) => {
          if (!this.dragging) return;
          const dx = e.offsetX - this.lastMouse.x;
          this.rotation += dx*0.01;
          this.lastMouse = {x:e.offsetX, y:e.offsetY};
        });
        c.addEventListener('mouseup', () => { this.dragging = false; });
        c.addEventListener('wheel', (e) => {
          e.preventDefault();
          this.zoom *= (e.deltaY>0)?0.9:1.1;
          this.zoom = Math.max(0.2, Math.min(5, this.zoom));
        });
        c.addEventListener('click', (e) => {
          this.selected = null;
          const cx = this.canvas.width/2, cy = this.canvas.height/2;
          for (let n of this.nodes) {
            const dx = (n.x-cx)*Math.cos(this.rotation)-(n.y-cy)*Math.sin(this.rotation)+cx - e.offsetX;
            const dy = (n.x-cx)*Math.sin(this.rotation)+(n.y-cy)*Math.cos(this.rotation)+cy - e.offsetY;
            if (Math.hypot(dx,dy) < 20) { this.selected = n; break; }
          }
          this.showPanel();
        });
        const sb = document.getElementById('atlas-search');
        if (sb) {
          sb.addEventListener('input', (e) => {
            this.searchTerm = e.target.value.toLowerCase();
            this.flyToSearch();
          });
        }
      }
      flyToSearch() {
        if (!this.searchTerm) return;
        for (let n of this.nodes) {
          if ((n.title && n.title.toLowerCase().includes(this.searchTerm)) ||
              (n.eng_name && n.eng_name.toLowerCase().includes(this.searchTerm))) {
            const cx = this.canvas.width/2, cy = this.canvas.height/2;
            this.rotation = 0;
            const dx = cx - n.x, dy = cy - n.y;
            this.nodes.forEach(node => { node.x += dx; node.y += dy; });
            break;
          }
        }
      }
      showPanel() {
        const panel = document.getElementById('atlas-panel');
        if (!panel) return;
        if (!this.selected) { panel.style.display='none'; return; }
        panel.style.display='block';
        panel.innerHTML = `
          <h3>${this.selected.title||''}</h3>
          <p><em>${this.selected.eng_name||''}</em></p>
          <p>${this.selected.def||'無定義'}</p>
          <p style="color:${this.selected.color};">類別: ${this.selected.category||'其他'}</p>
        `;
      }
      animate() {
        const ctx = this.ctx, w = this.canvas.width, h = this.canvas.height;
        ctx.clearRect(0,0,w,h);
        const cx = w/2, cy = h/2;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(this.rotation);
        ctx.scale(this.zoom, this.zoom);
        ctx.translate(-cx, -cy);
        for (let i=0; i<this.nodes.length; i++) {
          for (let j=i+1; j<this.nodes.length; j++) {
            if (this.nodes[i].category === this.nodes[j].category) {
              ctx.beginPath();
              ctx.moveTo(this.nodes[i].x, this.nodes[i].y);
              ctx.lineTo(this.nodes[j].x, this.nodes[j].y);
              ctx.strokeStyle = 'rgba(170,170,170,0.15)';
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
        for (let n of this.nodes) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, this.selected===n ? 18 : 12, 0, 2*Math.PI);
          ctx.fillStyle = n.color;
          ctx.fill();
          ctx.strokeStyle = this.selected===n ? '#fff' : 'rgba(255,255,255,0.4)';
          ctx.lineWidth = this.selected===n ? 2.5 : 1;
          ctx.stroke();
          ctx.fillStyle = '#fff';
          ctx.font = '9px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(n.title ? n.title.slice(0,8) : '', n.x, n.y-16);
        }
        ctx.restore();
        requestAnimationFrame(() => this.animate());
      }
    }
    global.TermAtlas = TermAtlas;
  }
})(window);
