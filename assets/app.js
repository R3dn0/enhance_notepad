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
      img.addEventListener('click', (e) => {
        const overlay = document.createElement('div');
        overlay.className = 'lightbox';
        const bigImg = document.createElement('img');
        bigImg.src = img.src;
        bigImg.alt = img.alt;
        overlay.appendChild(bigImg);
        overlay.addEventListener('click', () => overlay.remove());
        document.body.appendChild(overlay);
      });
    });
  }
})();
