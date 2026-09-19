(function() {
  "use strict";

  // Liste des 19 classes de Dofus dans un ordre alphabétique strict
  const DOFUS_CLASSES = [
    { id: 'cra', name: 'Crâ', icon: '🏹' },
    { id: 'ecaflip', name: 'Ecaflip', icon: '🎲' },
    { id: 'eliotrope', name: 'Éliotrope', icon: '🌀' },
    { id: 'eniripsa', name: 'Eniripsa', icon: '✨' },
    { id: 'enutrof', name: 'Enutrof', icon: '⛏️' },
    { id: 'feca', name: 'Féca', icon: '🛡️' },
    { id: 'forgelance', name: 'Forgelance', icon: '🔱' },
    { id: 'huppermage', name: 'Huppermage', icon: '🔮' },
    { id: 'iop', name: 'Iop', icon: '⚔️' },
    { id: 'osamodas', name: 'Osamodas', icon: '🐉' },
    { id: 'ouginak', name: 'Ouginak', icon: '🐺' },
    { id: 'pandawa', name: 'Pandawa', icon: '🍶' },
    { id: 'roublard', name: 'Roublard', icon: '💣' },
    { id: 'sacrieur', name: 'Sacrieur', icon: '🩸' },
    { id: 'sadida', name: 'Sadida', icon: '🌿' },
    { id: 'sram', name: 'Sram', icon: '💀' },
    { id: 'steamer', name: 'Steamer', icon: '⚙️' },
    { id: 'xelor', name: 'Xélor', icon: '⏳' },
    { id: 'zobal', name: 'Zobal', icon: '🎭' }
  ];

  // Ordre strict des 7 slots cosmétiques demandé :
  // Coiffe / cape / bouclier / familier ou montilier / epaulieres / costume / armes
  const COSMETIC_SLOTS = [
    { id: 'coiffe', label: 'Coiffe', icon: '🎩' },
    { id: 'cape', label: 'Cape', icon: '🧣' },
    { id: 'bouclier', label: 'Bouclier', icon: '🛡️' },
    { id: 'familier', label: 'Familier ou montilier', icon: '🐾' },
    { id: 'epaulieres', label: 'Épaulières', icon: '🥋' },
    { id: 'costume', label: 'Costume', icon: '👘' },
    { id: 'armes', label: 'Armes', icon: '⚔️' }
  ];

  // Zones de couleurs (Peau / Cheveux / Vetement 1 / 2 / 3 / 4)
  const COLOR_ZONES = [
    { id: 'peau', label: 'Peau' },
    { id: 'cheveux', label: 'Cheveux' },
    { id: 'vetement1', label: 'Vêtement 1' },
    { id: 'vetement2', label: 'Vêtement 2' },
    { id: 'vetement3', label: 'Vêtement 3' },
    { id: 'vetement4', label: 'Vêtement 4' }
  ];

  // Maquette & Base de données des skins Dofus
  const SKINS = [
    {
      id: 'cra-sentinelle-sylvestre',
      name: 'Sentinelle Sylvestre',
      class: 'cra',
      gender: 'male',
      image: 'assets/dofus/skins/cra-sentinelle-sylvestre.webp',
      imageFull: 'assets/dofus/skins/cra-sentinelle-sylvestre-hd.webp',
      colors: {
        peau: '#F5D5B8',
        cheveux: '#2B3E2B',
        vetement1: '#1E7E53',
        vetement2: '#153223',
        vetement3: '#D4A329',
        vetement4: '#0F1814'
      },
      items: {
        coiffe: "Chapeau de la Ronce Flétrie",
        cape: "Voile d'Encre",
        bouclier: "Bouclier d'Amakna",
        familier: "Kramkram",
        epaulieres: "Épaulières Célestes",
        costume: "Aucun",
        armes: "Arc du Roi des Bouftous"
      }
    },
    {
      id: 'cra-archere-boreale',
      name: 'Archère Boréale',
      class: 'cra',
      gender: 'female',
      image: 'assets/dofus/skins/cra-archere-boreale.webp',
      imageFull: 'assets/dofus/skins/cra-archere-boreale-hd.webp',
      colors: {
        peau: '#FAE3D2',
        cheveux: '#8AD5E0',
        vetement1: '#23495D',
        vetement2: '#0F222D',
        vetement3: '#D8F2F5',
        vetement4: '#1B323C'
      },
      items: {
        coiffe: "Diadème de Givrefoux",
        cape: "Cape Hivernale",
        bouclier: "Bouclier du Comte Harebourg",
        familier: "Siroko",
        epaulieres: "Épaulières Cristallines",
        costume: "Aucun",
        armes: "Arc Corrompu"
      }
    },
    {
      id: 'iop-guerrier-solaire',
      name: 'Guerrier Solaire',
      class: 'iop',
      gender: 'male',
      image: 'assets/dofus/skins/iop-guerrier-solaire.webp',
      imageFull: 'assets/dofus/skins/iop-guerrier-solaire-hd.webp',
      colors: {
        peau: '#EDD0B5',
        cheveux: '#D95829',
        vetement1: '#B82727',
        vetement2: '#291515',
        vetement3: '#E5B22D',
        vetement4: '#471F1F'
      },
      items: {
        coiffe: "Casque du Dragoeuf Doré",
        cape: "Cape Resplendissante",
        bouclier: "Bouclier Hispanique",
        familier: "Dragodinde Dorée et Ébène",
        epaulieres: "Épaulières d'Obsidiante",
        costume: "Aucun",
        armes: "Épée du Chevalier Noir"
      }
    },
    {
      id: 'iop-championne-amakna',
      name: "Championne d'Amakna",
      class: 'iop',
      gender: 'female',
      image: 'assets/dofus/skins/iop-championne-amakna.webp',
      imageFull: 'assets/dofus/skins/iop-championne-amakna-hd.webp',
      colors: {
        peau: '#F0D3BC',
        cheveux: '#FAD02C',
        vetement1: '#2F528F',
        vetement2: '#152238',
        vetement3: '#D4AF37',
        vetement4: '#FFFFFF'
      },
      items: {
        coiffe: "Couronne du Roi Jouet",
        cape: "Cape des Justiciers",
        bouclier: "Bouclier Luminescent",
        familier: "Brâkmarok",
        epaulieres: "Épaulières Dorées",
        costume: "Costume de Guilde",
        armes: "Épée Kari"
      }
    },
    {
      id: 'ecaflip-gentleman-joueur',
      name: 'Gentleman Joueur',
      class: 'ecaflip',
      gender: 'male',
      image: 'assets/dofus/skins/ecaflip-gentleman-joueur.webp',
      imageFull: 'assets/dofus/skins/ecaflip-gentleman-joueur-hd.webp',
      colors: {
        peau: '#E0D8CF',
        cheveux: '#2B262D',
        vetement1: '#7B2CBF',
        vetement2: '#240046',
        vetement3: '#FFD166',
        vetement4: '#10002B'
      },
      items: {
        coiffe: "Haut-de-Forme Énigmatique",
        cape: "Cape de la Roulette Impériale",
        bouclier: "Bouclier Félin d'Apparat",
        familier: "Chacha Tigré d'Apparat",
        epaulieres: "Épaulières de Velours",
        costume: "Costume du Valet de Pique",
        armes: "Bâton d'As"
      }
    }
  ];

  // État local pour les filtres du module Skins
  const skinState = {
    selectedClass: 'all', // 'all' ou id de la classe ('cra', 'iop', ...)
    selectedGender: 'all', // 'all', 'male', 'female'
  };

  function getClassName(classId) {
    const c = DOFUS_CLASSES.find(function(cls) { return cls.id === classId; });
    return c ? c.name : classId;
  }

  function getClassIcon(classId) {
    const c = DOFUS_CLASSES.find(function(cls) { return cls.id === classId; });
    return c ? c.icon : '🛡️';
  }

  function countSkinsByClass(classId, gender) {
    return SKINS.filter(function(s) {
      const matchClass = classId === 'all' || s.class === classId;
      const matchGender = gender === 'all' || s.gender === gender;
      return matchClass && matchGender;
    }).length;
  }

  function renderSkinsApp(mainEl) {
    mainEl.innerHTML = `
      <div class="skin-layout">
        <!-- Colonne Gauche (1/5) : Liste alphabétique des classes -->
        <aside class="skin-sidebar">
          <div class="skin-sidebar-head">
            <span class="skin-sidebar-title">Classes</span>
            <span class="skin-sidebar-badge" id="skin-sidebar-total">${SKINS.length} skins</span>
          </div>
          <div class="skin-class-list" id="skin-class-list"></div>
        </aside>

        <!-- Colonne Droite (4/5) : En-tête avec sélecteur Homme / Femme + Grille des skins -->
        <section class="skin-content">
          <div class="skin-toolbar">
            <div class="skin-toolbar-info">
              <h2 id="skin-current-class-title">Toutes les classes</h2>
              <span class="skin-count" id="skin-filtered-count"></span>
            </div>
            <div class="skin-sex-selector" id="skin-sex-selector">
              <button class="skin-sex-btn ${skinState.selectedGender === 'all' ? 'active' : ''}" data-gender="all">Tous</button>
              <button class="skin-sex-btn ${skinState.selectedGender === 'male' ? 'active' : ''}" data-gender="male">♂ Homme</button>
              <button class="skin-sex-btn ${skinState.selectedGender === 'female' ? 'active' : ''}" data-gender="female">♀ Femme</button>
            </div>
          </div>

          <div class="skin-grid" id="skin-grid"></div>
        </section>
      </div>
    `;

    renderSidebar(mainEl);
    renderGrid(mainEl);
    bindToolbarEvents(mainEl);
  }

  function renderSidebar(mainEl) {
    const listEl = mainEl.querySelector('#skin-class-list');
    if (!listEl) return;

    const totalCount = countSkinsByClass('all', skinState.selectedGender);
    let html = `
      <button class="skin-class-btn ${skinState.selectedClass === 'all' ? 'active' : ''}" data-class="all">
        <span class="skin-class-name">✨ Toutes les classes</span>
        <span class="skin-class-count ${totalCount > 0 ? 'has-skins' : ''}">${totalCount}</span>
      </button>
    `;

    DOFUS_CLASSES.forEach(function(cls) {
      const cnt = countSkinsByClass(cls.id, skinState.selectedGender);
      const isActive = skinState.selectedClass === cls.id;
      html += `
        <button class="skin-class-btn ${isActive ? 'active' : ''}" data-class="${cls.id}">
          <span class="skin-class-name">
            <span>${cls.icon}</span>
            <span>${cls.name}</span>
          </span>
          <span class="skin-class-count ${cnt > 0 ? 'has-skins' : ''}">${cnt}</span>
        </button>
      `;
    });

    listEl.innerHTML = html;

    listEl.querySelectorAll('.skin-class-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        skinState.selectedClass = btn.dataset.class;
        renderSidebar(mainEl);
        renderGrid(mainEl);
      });
    });
  }

  function bindToolbarEvents(mainEl) {
    const sexSelector = mainEl.querySelector('#skin-sex-selector');
    if (!sexSelector) return;

    sexSelector.querySelectorAll('.skin-sex-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        skinState.selectedGender = btn.dataset.gender;
        sexSelector.querySelectorAll('.skin-sex-btn').forEach(function(b) {
          b.classList.toggle('active', b === btn);
        });
        renderSidebar(mainEl);
        renderGrid(mainEl);
      });
    });
  }

  function renderGrid(mainEl) {
    const gridEl = mainEl.querySelector('#skin-grid');
    const titleEl = mainEl.querySelector('#skin-current-class-title');
    const countEl = mainEl.querySelector('#skin-filtered-count');
    if (!gridEl) return;

    // Titre de la classe active
    if (skinState.selectedClass === 'all') {
      titleEl.textContent = "Toutes les classes";
    } else {
      const cls = DOFUS_CLASSES.find(function(c) { return c.id === skinState.selectedClass; });
      titleEl.textContent = cls ? `${cls.icon} ${cls.name}` : skinState.selectedClass;
    }

    // Filtrage des skins
    const filtered = SKINS.filter(function(skin) {
      const matchClass = skinState.selectedClass === 'all' || skin.class === skinState.selectedClass;
      const matchGender = skinState.selectedGender === 'all' || skin.gender === skinState.selectedGender;
      return matchClass && matchGender;
    });

    countEl.textContent = `${filtered.length} skin${filtered.length > 1 ? 's' : ''}`;

    if (filtered.length === 0) {
      const genderLabel = skinState.selectedGender === 'male' ? 'homme' : (skinState.selectedGender === 'female' ? 'femme' : '');
      const classLabel = skinState.selectedClass === 'all' ? 'dans cette catégorie' : `pour la classe ${getClassName(skinState.selectedClass)}`;

      gridEl.innerHTML = `
        <div class="skin-empty">
          <div class="skin-empty-icon">🎨</div>
          <h3>Aucun skin trouvé</h3>
          <p>Il n'y a pas encore de skin ${genderLabel} ${classLabel}. Fournis un screen pour l'ajouter à la collection !</p>
        </div>
      `;
      return;
    }

    gridEl.innerHTML = filtered.map(function(skin) {
      const genderLabel = skin.gender === 'male' ? '♂ Homme' : '♀ Femme';
      const genderClass = skin.gender === 'male' ? 'gender-male' : 'gender-female';
      const colors = skin.colors || {};

      const swatchesHtml = COLOR_ZONES.map(function(z) {
        const hex = colors[z.id] || '#2ec486';
        return `<span class="skin-swatch-dot" style="background-color:${hex};" title="${z.label}: ${hex}"></span>`;
      }).join('');

      return `
        <div class="skin-card" data-skin-id="${skin.id}">
          <div class="skin-card-visual">
            <div class="skin-card-badges">
              <span class="skin-badge-tag">${getClassIcon(skin.class)} ${getClassName(skin.class)}</span>
              <span class="skin-badge-tag ${genderClass}">${genderLabel}</span>
            </div>
            <img src="${skin.image}" alt="${skin.name}" loading="lazy">
          </div>
          <div class="skin-card-info">
            <h4 class="skin-card-name">${skin.name}</h4>
            <div class="skin-card-swatches">${swatchesHtml}</div>
            <div class="skin-card-cta">Détails & couleurs →</div>
          </div>
        </div>
      `;
    }).join('');

    gridEl.querySelectorAll('.skin-card').forEach(function(card) {
      card.addEventListener('click', function() {
        const skinId = card.dataset.skinId;
        const skin = SKINS.find(function(s) { return s.id === skinId; });
        if (skin) {
          openSkinModal(skin);
        }
      });
    });
  }

  // =========================================================================
  // MODALE DÉTAILLÉE DU SKIN
  // Rappel du visuel + Hexadécimaux avec nom de zone + 7 items cosmétiques
  // =========================================================================
  function openSkinModal(skin) {
    // Ferme toute modale existante
    const existing = document.querySelector('.skin-modal-overlay');
    if (existing) existing.remove();

    const colors = skin.colors || {};
    const items = skin.items || {};
    const genderLabel = skin.gender === 'male' ? '♂ Homme' : '♀ Femme';

    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'skin-modal-overlay';

    // 1. Grille des codes hexadécimaux
    const colorsHtml = COLOR_ZONES.map(function(zone) {
      const hex = colors[zone.id] || '#000000';
      return `
        <div class="skin-color-item">
          <div class="skin-color-left">
            <div class="skin-color-box" style="background-color:${hex};"></div>
            <div class="skin-color-texts">
              <span class="skin-color-zone">${zone.label}</span>
              <span class="skin-color-hex">${hex}</span>
            </div>
          </div>
          <button class="skin-copy-btn" data-copy="${hex}" title="Copier le code">Copier</button>
        </div>
      `;
    }).join('');

    // 2. Liste des items cosmétiques dans l'ordre strict :
    // Coiffe / cape / bouclier / familier ou montilier / epaulieres / costume / armes
    const itemsHtml = COSMETIC_SLOTS.map(function(slot) {
      const val = items[slot.id];
      const isNone = !val || val.toLowerCase() === 'aucun' || val.toLowerCase() === 'aucune' || val === '—';
      return `
        <div class="skin-item-row">
          <span class="skin-item-slot">
            <span class="skin-slot-icon">${slot.icon}</span>
            <span>${slot.label}</span>
          </span>
          <span class="skin-item-name ${isNone ? 'is-empty' : ''}">${val || '—'}</span>
        </div>
      `;
    }).join('');

    // Texte à copier pour tout exporter
    const fullCopyText = [
      `Skin: ${skin.name} (${getClassName(skin.class)} ${genderLabel})`,
      '--- Couleurs ---',
      COLOR_ZONES.map(function(z) { return `${z.label}: ${colors[z.id] || '-'}`; }).join('\n'),
      '--- Cosmétiques ---',
      COSMETIC_SLOTS.map(function(s) { return `${s.label}: ${items[s.id] || 'Aucun'}`; }).join('\n')
    ].join('\n');

    modalOverlay.innerHTML = `
      <div class="skin-modal" role="dialog" aria-modal="true">
        <div class="skin-modal-head">
          <div>
            <h3 class="skin-modal-title">${skin.name}</h3>
            <div class="skin-modal-subtitle">${getClassIcon(skin.class)} ${getClassName(skin.class)} • ${genderLabel}</div>
          </div>
          <button class="skin-modal-close" aria-label="Fermer la modale">✕</button>
        </div>

        <div class="skin-modal-body">
          <!-- Colonne Gauche : Rappel du visuel grand format -->
          <div class="skin-modal-col-left">
            <div class="skin-modal-visual" id="skin-modal-image-wrap">
              <img src="${skin.imageFull || skin.image}" alt="${skin.name}" title="Cliquer pour zoomer">
            </div>
            <div class="skin-modal-visual-hint">🔍 Cliquez sur l'image pour agrandir</div>
            <button class="skin-btn-copy-all" id="skin-btn-copy-all">
              📋 Copier toutes les infos
            </button>
          </div>

          <!-- Colonne Droite : Hexadécimaux & Cosmétiques -->
          <div class="skin-modal-col-right">
            <!-- Section Hexadécimaux -->
            <div class="skin-block">
              <h4 class="skin-block-title">
                <span>🎨</span> Codes Couleurs Hexadécimaux
              </h4>
              <div class="skin-colors-grid">
                ${colorsHtml}
              </div>
            </div>

            <!-- Section Cosmétiques dans l'ordre demandé -->
            <div class="skin-block">
              <h4 class="skin-block-title">
                <span>🛡️</span> Items Cosmétiques Utilisés
              </h4>
              <div class="skin-items-list">
                ${itemsHtml}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modalOverlay);
    document.body.style.overflow = 'hidden';

    function closeModal() {
      document.removeEventListener('keydown', onEsc);
      document.body.style.overflow = '';
      modalOverlay.remove();
    }

    function onEsc(e) {
      if (e.key === 'Escape') closeModal();
    }
    document.addEventListener('keydown', onEsc);

    modalOverlay.querySelector('.skin-modal-close').addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', function(e) {
      if (e.target === modalOverlay) closeModal();
    });

    // Zoom Lightbox sur l'image
    const imgWrap = modalOverlay.querySelector('#skin-modal-image-wrap img');
    if (imgWrap && window.StashApp && typeof window.StashApp.openLightbox === 'function') {
      imgWrap.addEventListener('click', function() {
        window.StashApp.openLightbox(imgWrap);
      });
    }

    // Copie individuelle des codes hexadécimaux
    modalOverlay.querySelectorAll('.skin-copy-btn').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const textToCopy = btn.dataset.copy;
        copyToClipboard(textToCopy, function() {
          const original = btn.textContent;
          btn.textContent = '✓ Copié';
          btn.classList.add('copied');
          setTimeout(function() {
            btn.textContent = original;
            btn.classList.remove('copied');
          }, 1600);
        });
      });
    });

    // Bouton pour tout copier en une fois
    const copyAllBtn = modalOverlay.querySelector('#skin-btn-copy-all');
    if (copyAllBtn) {
      copyAllBtn.addEventListener('click', function() {
        copyToClipboard(fullCopyText, function() {
          const original = copyAllBtn.textContent;
          copyAllBtn.textContent = '✓ Infos copiées dans le presse-papier !';
          setTimeout(function() {
            copyAllBtn.textContent = original;
          }, 2000);
        });
      });
    }
  }

  function copyToClipboard(text, onSuccess) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(onSuccess).catch(function() {
        fallbackCopy(text, onSuccess);
      });
    } else {
      fallbackCopy(text, onSuccess);
    }
  }

  function fallbackCopy(text, onSuccess) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error('Erreur copie:', err);
    }
    document.body.removeChild(ta);
  }

  // =========================================================================
  // ENREGISTREMENT DU THÈME DOFUS AUPRÈS DE STASHAPP
  // =========================================================================
  window.StashApp.register('dofus', {
    meta: {
      theme: 'dofus',
      eyebrow: "📦 Stash // Personal memo",
      title: "<span>R3dn0</span>'s Notes",
      sub: "Notes, outils, récapitulatifs et galerie de skins pour Dofus.",
      footer: "R3dn0 — Dofus notes & skins · mis à jour au fil des aventures dans le Monde des Douze"
    },
    tabs: [
      { id: 'skins', label: '🎨 Skins' },
      { id: 'tools', label: '🛠️ Tools' }
    ],
    data: {
      skins: {
        filters: [{ id: 'all', label: 'All' }],
        categories: []
      },
      tools: {
        filters: [
          { id: 'all', label: 'All' },
          { id: 'tools', label: 'Tools' }
        ],
        categories: [
          {
            id: 'tools',
            label: 'Tools',
            subcats: [
              {
                label: '🛠️ Outils & Utilitaires',
                recap: 'Section en préparation. Les prochains outils et notes pour Dofus apparaîtront ici.',
                items: []
              }
            ]
          }
        ]
      }
    },
    render: function(state, root, cfg) {
      const main = root.querySelector('#main');
      const filterbar = root.querySelector('#filterbar');
      const subtabs = root.querySelector('#subtabs');

      // Met à jour l'onglet actif dans le header
      root.querySelectorAll('.maintab').forEach(function(b) {
        b.classList.toggle('active', b.dataset.tab === state.tab);
      });

      if (subtabs) {
        subtabs.style.display = 'none';
        subtabs.innerHTML = '';
      }

      if (state.tab === 'skins') {
        if (filterbar) {
          filterbar.style.display = 'none';
          filterbar.innerHTML = '';
        }
        renderSkinsApp(main);
      } else {
        if (filterbar) {
          filterbar.style.display = '';
        }
        if (window.StashApp && typeof window.StashApp.renderDefault === 'function') {
          window.StashApp.renderDefault(cfg, state, root);
        }
      }
    },
    // Expose pour ajout futur programmatique ou tests
    skinsList: SKINS,
    classesList: DOFUS_CLASSES
  });

})();
