(function () {
  'use strict';

  const topics = {};

  window.StashApp = {
    register(id, cfg) {
      topics[id] = cfg;
    },
    get(id) {
      return topics[id];
    },
    init(id) {
      const cfg = topics[id];
      if (!cfg) { console.error('Unknown theme:', id); return; }
      if (!cfg.data || !cfg.tabs) { console.error('Misconfigured theme:', id); return; }
      const root = document.getElementById('stash-app');
      buildHeader(cfg, root);
      const state = {
        tab: cfg.tabs[0].id,
        filter: cfg.data[cfg.tabs[0].id].filters[0].id
      };
      const hash = location.hash.replace(/^#\/?/, '');
      if (hash && cfg.data[hash]) {
        state.tab = hash;
        state.filter = cfg.data[hash].filters[0].id;
      }
      bindTabs(cfg, state, root);
      render(cfg, state, root);
    }
  };

  function buildHeader(cfg, root) {
    const deco = cfg.meta.showHazardBar ? '<div class="hazard-bar"></div>' : '';
    root.querySelector('#header').innerHTML = `
      ${deco}
      <div class="eyebrow">${cfg.meta.eyebrow}</div>
      <h1>${cfg.meta.title}</h1>
      <div class="sub">${cfg.meta.sub}</div>
      <div class="maintabs">
        ${cfg.tabs.map(t => `<button class="maintab" data-tab="${t.id}">${t.label}</button>`).join('')}
      </div>
    `;
    if (cfg.meta.footer) {
      const footer = root.querySelector('#footer');
      if (footer) footer.innerHTML = cfg.meta.footer;
    }
  }

  function bindTabs(cfg, state, root) {
    root.querySelectorAll('.maintab').forEach(btn => {
      btn.addEventListener('click', () => {
        state.tab = btn.dataset.tab;
        state.filter = cfg.data[state.tab].filters[0].id;
        location.hash = '/' + state.tab;
        render(cfg, state, root);
      });
    });
  }

  function render(cfg, state, root) {
    if (typeof cfg.render === 'function') {
      cfg.render(state, root, cfg);
    } else {
      renderTopic(cfg, state, root);
    }
    openExternalLinksInNewTab(root.querySelector('#main'));
  }

  function defaultCardHTML(it, tagLabels) {
    if (it.tag) {
      return `<div class="badge p-${it.tag}">${tagLabels[it.tag] || it.tag}</div>`;
    }
    const t = it.tier || '—';
    return `<div class="tier t-${String(t).charAt(0)}">${t}</div>`;
  }

  function renderTopic(cfg, state, root) {
    const d = cfg.data;
    const cardHTML = cfg.cardHTML || defaultCardHTML;
    const subcatHTML = cfg.subcatHTML;
    const tagLabels = cfg.tagLabels || {};
    const summaries = cfg.summaries || {};
    const legends = cfg.legends || {};

    root.querySelectorAll('.maintab').forEach(b => b.classList.toggle('active', b.dataset.tab === state.tab));

    const fb = root.querySelector('#filterbar');
    fb.innerHTML = '';
    d[state.tab].filters.forEach(f => {
      const btn = document.createElement('button');
      btn.className = 'pill' + (f.id === state.filter ? ' active' : '');
      btn.textContent = f.label;
      btn.addEventListener('click', () => { state.filter = f.id; render(cfg, state, root); });
      fb.appendChild(btn);
    });

    const main = root.querySelector('#main');
    main.innerHTML = '';
    const cats = d[state.tab].categories.filter(c => state.filter === 'all' ? c.id !== 'summary' : c.id === state.filter);

    cats.forEach(cat => {
      const itemCount = cat.subcats.reduce((n, sc) => n + sc.items.length, 0);
      const section = document.createElement('section');
      section.className = 'category';
      section.innerHTML = `
        <div class="category-head">
          <h2>${cat.label}</h2>
          <span class="count">${itemCount} entr${itemCount > 1 ? 'ies' : 'y'}</span>
        </div>
        <div class="category-rule"></div>
      `;

      if (cat.id === 'summary' && summaries[state.tab]) {
        const s = summaries[state.tab];
        const box = document.createElement('div');
        box.className = 'summary';
        box.innerHTML = `
          <div class="eyebrow">Priorities</div>
          <h3>${s.title}</h3>
          ${s.paragraphs.map(p => `<p>${p}</p>`).join('')}
        `;
        section.appendChild(box);
      }

      cat.subcats.forEach(sc => {
        if (typeof subcatHTML === 'function') {
          const html = subcatHTML(sc, tagLabels);
          if (typeof html === 'string') {
            const tmp = document.createElement('div');
            tmp.innerHTML = html;
            while (tmp.firstChild) section.appendChild(tmp.firstChild);
          } else {
            section.appendChild(html);
          }
          return;
        }
        const scEl = document.createElement('div');
        scEl.className = 'subcat';
        scEl.innerHTML = `
          <h3>${sc.label}</h3>
          ${sc.recap ? `<div class="recap">${sc.recap}</div>` : ''}
          <div class="cards">
            ${sc.items.map(it => `
              <div class="card${it.tag ? ' tagged' : ''}${it.warn ? ' warn' : ''}">
                ${cardHTML(it, tagLabels)}
                <div class="card-body">
                  <div class="name">${it.name}${it.warn ? '<span class="warn-tag">⚠ caution</span>' : ''}</div>
                  <div class="desc">${it.desc}</div>
                </div>
              </div>
            `).join('')}
          </div>
        `;
        section.appendChild(scEl);
      });

      main.appendChild(section);
    });

    if (legends[state.tab]) {
      const legend = document.createElement('div');
      legend.className = 'legend';
      legend.innerHTML = legends[state.tab].map(l => `<span><i style="color:${l.color}"></i>${l.label}</span>`).join('');
      main.appendChild(legend);
    }
  }

  function openExternalLinksInNewTab(container) {
    container.querySelectorAll('a[href^="http"]').forEach(a => {
      a.target = '_blank';
      const rel = new Set(String(a.rel || '').split(/\s+/).filter(Boolean));
      rel.add('noopener');
      rel.add('noreferrer');
      a.rel = Array.from(rel).join(' ');
    });

    container.querySelectorAll('.loadout-img img').forEach(img => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => openLightbox(img));
    });
  }

  function openLightbox(imgEl) {
    if (document.querySelector('.lightbox')) return;

    const overlay = document.createElement('div');
    overlay.className = 'lightbox';
    const bigImg = document.createElement('img');
    bigImg.src = imgEl.currentSrc || imgEl.src;
    bigImg.alt = imgEl.alt || '';
    const badge = document.createElement('span');
    badge.className = 'lightbox-zoom';
    overlay.appendChild(bigImg);
    overlay.appendChild(badge);
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    let scale = 1;
    let tx = 0;
    let ty = 0;
    const MIN_SCALE = 1;
    const MAX_SCALE = 8;
    const pointers = new Map();
    let lastDist = 0;
    let lastMid = { x: 0, y: 0 };

    function rect() {
      return overlay.getBoundingClientRect();
    }

    function clampPan() {
      const r = rect();
      const baseW = bigImg.offsetWidth;
      const baseH = bigImg.offsetHeight;
      const maxX = baseW * scale > r.width ? (baseW * scale - r.width) / 2 : 0;
      const maxY = baseH * scale > r.height ? (baseH * scale - r.height) / 2 : 0;
      tx = Math.max(-maxX, Math.min(maxX, tx));
      ty = Math.max(-maxY, Math.min(maxY, ty));
    }

    function apply() {
      bigImg.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
      badge.textContent = `${scale.toFixed(2).replace(/\.?0+$/, '')}x`;
    }

    function zoomAt(factor, cx, cy) {
      const r = rect();
      const newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, scale * factor));
      const f = newScale / scale;
      if (f === 1) return;
      const ocx = r.left + r.width / 2;
      const ocy = r.top + r.height / 2;
      const ox = cx - ocx - tx;
      const oy = cy - ocy - ty;
      tx = cx - ocx - ox * f;
      ty = cy - ocy - oy * f;
      scale = newScale;
      clampPan();
      apply();
    }

    function close() {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      overlay.remove();
    }

    function onKey(e) {
      if (e.key === 'Escape') close();
    }

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) close();
    });

    overlay.addEventListener('wheel', (e) => {
      e.preventDefault();
      zoomAt(Math.exp(-e.deltaY * 0.0015), e.clientX, e.clientY);
    }, { passive: false });

    bigImg.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      if (bigImg.setPointerCapture) bigImg.setPointerCapture(e.pointerId);
      bigImg.classList.add('dragging');
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size === 2) {
        const [p1, p2] = [...pointers.values()];
        lastDist = Math.hypot(p2.x - p1.x, p2.y - p1.y);
        lastMid = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
      }
    });

    bigImg.addEventListener('pointermove', (e) => {
      if (!pointers.has(e.pointerId)) return;
      const prev = pointers.get(e.pointerId);
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size === 1) {
        tx += e.clientX - prev.x;
        ty += e.clientY - prev.y;
        clampPan();
        apply();
      } else if (pointers.size === 2) {
        const [p1, p2] = [...pointers.values()];
        const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y);
        const mid = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
        if (lastDist > 0) zoomAt(dist / lastDist, mid.x, mid.y);
        tx += mid.x - lastMid.x;
        ty += mid.y - lastMid.y;
        clampPan();
        apply();
        lastDist = dist;
        lastMid = mid;
      }
    });

    const endPointer = (e) => {
      pointers.delete(e.pointerId);
      if (pointers.size === 0) bigImg.classList.remove('dragging');
    };

    bigImg.addEventListener('pointerup', endPointer);
    bigImg.addEventListener('pointercancel', endPointer);
    bigImg.addEventListener('pointerleave', endPointer);

    document.addEventListener('keydown', onKey);
    apply();
  }
})();
