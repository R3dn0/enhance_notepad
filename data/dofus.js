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

  // 7 slots cosmétiques alignés sur Barbofus :
  // Coiffe / Cape / Bouclier / Costume / Épaulière / Misc / Familiers
  const COSMETIC_SLOTS = [
    { id: 'coiffe', label: 'Coiffe', icon: '🎩' },
    { id: 'cape', label: 'Cape', icon: '🧣' },
    { id: 'bouclier', label: 'Bouclier', icon: '🛡️' },
    { id: 'costume', label: 'Costume', icon: '👘' },
    { id: 'epaulieres', label: 'Épaulière', icon: '🥋' },
    { id: 'misc', label: 'Misc', icon: '⚔️' },
    { id: 'familier', label: 'Familiers - monture - montilier', icon: '🐾' }
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

  // Base de données des skins Dofus (alimentée par vos ajouts)
  const SKINS = [
    {
        "id": "sram-f-012",
        "name": "Gany (Aslaaks)",
        "class": "sram",
        "gender": "female",
        "head": "Tête 2",
        "headImage": "assets/dofus/skins/sram-f-012-head.webp",
        "image": "assets/dofus/skins/sram-f-012.webp",
        "imageFull": "assets/dofus/skins/sram-f-012-hd.webp",
        "colors": {
            "peau": "#FFB378",
            "cheveux": "#E2DECA",
            "vetement1": "#D2A229",
            "vetement2": "#D2A229",
            "vetement3": "#F3F4EF",
            "vetement4": "#5A8028"
        },
        "items": {
            "coiffe": "Diadème de Ganymède",
            "cape": "Voile Féca",
            "bouclier": "Bouclier d'Aur",
            "costume": "Costume Siquitoure",
            "epaulieres": "Épaulières Aegis",
            "misc": "Atours d'Aur",
            "familier": "Dième"
        }
    },
    {
        "id": "sram-f-011",
        "name": "Spiritrap (Pandaddy-choco)",
        "class": "sram",
        "gender": "female",
        "head": "Tête 2",
        "headImage": "assets/dofus/skins/sram-f-011-head.webp",
        "image": "assets/dofus/skins/sram-f-011.webp",
        "imageFull": "assets/dofus/skins/sram-f-011-hd.webp",
        "colors": {
            "peau": "#EAB366",
            "cheveux": "#FFFEF0",
            "vetement1": "#8D9B5B",
            "vetement2": "#FFFEF0",
            "vetement3": "#4D6235",
            "vetement4": "#FFFEF0"
        },
        "items": {
            "coiffe": "Masque Brûlâme",
            "cape": "Cape diaprée du Démon I",
            "bouclier": "Bouclier Chimèrivan 9",
            "costume": "Costume Chimèrivan 3",
            "epaulieres": "Épaulières diaprées de la Démone II",
            "misc": "Aucun",
            "familier": "Flâme"
        }
    },
    {
        "id": "sram-f-010",
        "name": " (Sneuneu)",
        "class": "sram",
        "gender": "female",
        "head": "Tête 16",
        "headImage": "assets/dofus/skins/sram-f-010-head.webp",
        "image": "assets/dofus/skins/sram-f-010.webp",
        "imageFull": "assets/dofus/skins/sram-f-010-hd.webp",
        "colors": {
            "peau": "#DA9566",
            "cheveux": "#EADEC0",
            "vetement1": "#FFFFFF",
            "vetement2": "#EEAAAA",
            "vetement3": "#E3AB8C",
            "vetement4": "#EEAAAA"
        },
        "items": {
            "coiffe": "Chapeau Colorivant 2",
            "cape": "Écharpe de Ricola Flanelle",
            "bouclier": "Écu Colorivant 2",
            "costume": "Costume Shushivan 2",
            "epaulieres": "Épaulières malicieuses",
            "misc": "Ailes Chimèrivan 1",
            "familier": "Le père Hoquet"
        }
    },
    {
        "id": "sram-f-009",
        "name": " (Aikso)",
        "class": "sram",
        "gender": "female",
        "head": "Tête 14",
        "headImage": "assets/dofus/skins/sram-f-009-head.webp",
        "image": "assets/dofus/skins/sram-f-009.webp",
        "imageFull": "assets/dofus/skins/sram-f-009-hd.webp",
        "colors": {
            "peau": "#D18458",
            "cheveux": "#D4C29B",
            "vetement1": "#171522",
            "vetement2": "#641336",
            "vetement3": "#641336",
            "vetement4": "#D4C29B"
        },
        "items": {
            "coiffe": "Oreilles du Chtigre",
            "cape": "Cape Hétale",
            "bouclier": "Aucun",
            "costume": "Aucun",
            "epaulieres": "Spalla Carnavalo",
            "misc": "Ailes Chimèrivan 6",
            "familier": "Fuyutora"
        }
    },
    {
        "id": "sram-f-007",
        "name": " (Nayera)",
        "class": "sram",
        "gender": "female",
        "head": "Tête 14",
        "headImage": "assets/dofus/skins/sram-f-007-head.webp",
        "image": "assets/dofus/skins/sram-f-007.webp",
        "imageFull": "assets/dofus/skins/sram-f-007-hd.webp",
        "colors": {
            "peau": "#E59B68",
            "cheveux": "#D4C29B",
            "vetement1": "#641827",
            "vetement2": "#292323",
            "vetement3": "#D4C29B",
            "vetement4": "#D5A12E"
        },
        "items": {
            "coiffe": "Oreilles du Chtigre",
            "cape": "Pèlerine Colorivante 10",
            "bouclier": "Écu Colorivant 7",
            "costume": "Aucun",
            "epaulieres": "Spalla Carnavalo",
            "misc": "Ailes Chimèrivan 2",
            "familier": "Kinryu"
        }
    },
    {
        "id": "sram-f-006",
        "name": "Chtigre (Kronk811)",
        "class": "sram",
        "gender": "female",
        "head": "Tête 1",
        "headImage": "assets/dofus/skins/sram-f-006-head.webp",
        "image": "assets/dofus/skins/sram-f-006.webp",
        "imageFull": "assets/dofus/skins/sram-f-006-hd.webp",
        "colors": {
            "peau": "#A2744C",
            "cheveux": "#212121",
            "vetement1": "#D8C8A5",
            "vetement2": "#4A3822",
            "vetement3": "#2B3236",
            "vetement4": "#493821"
        },
        "items": {
            "coiffe": "Oreilles du Chtigre",
            "cape": "Cape du Chtigre",
            "bouclier": "Aucun",
            "costume": "Costume Chimèrivan 3",
            "epaulieres": "Brassards du Chtigre",
            "misc": "Aucun",
            "familier": "Aucun"
        }
    },
    {
        "id": "forgelance-f-007",
        "name": "La nonne (Francois-l-Olonnais)",
        "class": "forgelance",
        "gender": "female",
        "head": "Tête 10",
        "headImage": "assets/dofus/skins/forgelance-f-007-head.webp",
        "image": "assets/dofus/skins/forgelance-f-007.webp",
        "imageFull": "assets/dofus/skins/forgelance-f-007-hd.webp",
        "colors": {
            "peau": "#BCB0A9",
            "cheveux": "#000000",
            "vetement1": "#000000",
            "vetement2": "#000000",
            "vetement3": "#BCB0A9",
            "vetement4": "#000000"
        },
        "items": {
            "coiffe": "Capuche d'Éther",
            "cape": "Manteau Colorivant 7",
            "bouclier": "Aucun",
            "costume": "Costume Chimèrivan 2",
            "epaulieres": "Épaulières Adacetra",
            "misc": "Aucun",
            "familier": "Chacha de Voyage"
        }
    },
    {
        "id": "forgelance-f-006",
        "name": "blackforg (pain)",
        "class": "forgelance",
        "gender": "female",
        "head": "Tête 18",
        "headImage": "assets/dofus/skins/forgelance-f-006-head.webp",
        "image": "assets/dofus/skins/forgelance-f-006.webp",
        "imageFull": "assets/dofus/skins/forgelance-f-006-hd.webp",
        "colors": {
            "peau": "#030202",
            "cheveux": "#3C1F45",
            "vetement1": "#8E8C8F",
            "vetement2": "#3C393B",
            "vetement3": "#3C1F45",
            "vetement4": "#403D3F"
        },
        "items": {
            "coiffe": "Pointe du Crépuscule",
            "cape": "Manteau Colorivant 7",
            "bouclier": "Aucun",
            "costume": "Costume Chimèrivan 3",
            "epaulieres": "Épaulières Chimèrivan 5",
            "misc": "Aucun",
            "familier": "Carpé"
        }
    },
    {
        "id": "forgelance-f-005",
        "name": " (Tiwab)",
        "class": "forgelance",
        "gender": "female",
        "head": "Tête 17",
        "headImage": "assets/dofus/skins/forgelance-f-005-head.webp",
        "image": "assets/dofus/skins/forgelance-f-005.webp",
        "imageFull": "assets/dofus/skins/forgelance-f-005-hd.webp",
        "colors": {
            "peau": "#A36C48",
            "cheveux": "#C5B6A0",
            "vetement1": "#4E3B4B",
            "vetement2": "#D3BE92",
            "vetement3": "#897958",
            "vetement4": "#703861"
        },
        "items": {
            "coiffe": "Aucune",
            "cape": "Cape de Chevalier Noir",
            "bouclier": "Gant d'Elely",
            "costume": "Aucun",
            "epaulieres": "Aucune",
            "misc": "Ailes Chimèrivan 3",
            "familier": "Minimou"
        }
    },
    {
        "id": "forgelance-f-004",
        "name": "Lyvs (Lyvs)",
        "class": "forgelance",
        "gender": "female",
        "head": "Tête 3",
        "headImage": "assets/dofus/skins/forgelance-f-004-head.webp",
        "image": "assets/dofus/skins/forgelance-f-004.webp",
        "imageFull": "assets/dofus/skins/forgelance-f-004-hd.webp",
        "colors": {
            "peau": "#DA9566",
            "cheveux": "#EADEC0",
            "vetement1": "#383838",
            "vetement2": "#B68825",
            "vetement3": "#C08D21",
            "vetement4": "#333333"
        },
        "items": {
            "coiffe": "Tignasse du Maudit",
            "cape": "Voile du Maudit",
            "bouclier": "Aucun",
            "costume": "Costume du Maudit",
            "epaulieres": "Épaulières du Corbeau Noir",
            "misc": "Aucun",
            "familier": "« L'Épée »"
        }
    },
    {
        "id": "forgelance-f-003",
        "name": "Chtigre (R3dn0)",
        "class": "forgelance",
        "gender": "female",
        "head": "Tête 14",
        "headImage": "assets/dofus/skins/forgelance-f-003-head.webp",
        "image": "assets/dofus/skins/forgelance-f-003.webp",
        "imageFull": "assets/dofus/skins/forgelance-f-003-hd.webp",
        "colors": {
            "peau": "#A2744C",
            "cheveux": "#212121",
            "vetement1": "#D8C8A5",
            "vetement2": "#4A3822",
            "vetement3": "#2B3236",
            "vetement4": "#493821"
        },
        "items": {
            "coiffe": "Oreilles du Chtigre",
            "cape": "Cape du Chtigre",
            "bouclier": "Égide du Chtigre",
            "costume": "Costume Chimèrivan 3",
            "epaulieres": "Brassards du Chtigre",
            "misc": "Aucun",
            "familier": "Garudania Crépitant"
        }
    },
    {
        "id": "forgelance-f-002",
        "name": "Forja (Raampardox)",
        "class": "forgelance",
        "gender": "female",
        "head": "Tête 13",
        "headImage": "assets/dofus/skins/forgelance-f-002-head.webp",
        "image": "assets/dofus/skins/forgelance-f-002.webp",
        "imageFull": "assets/dofus/skins/forgelance-f-002-hd.webp",
        "colors": {
            "peau": "#E59B68",
            "cheveux": "#E4DFD1",
            "vetement1": "#20282C",
            "vetement2": "#E9D7AA",
            "vetement3": "#20282C",
            "vetement4": "#E9D7AA"
        },
        "items": {
            "coiffe": "Casque Chimèrivan 10",
            "cape": "Cape du Chtigre",
            "bouclier": "Bouclier Chimèrivan 6",
            "costume": "Costume Chimèrivan 2",
            "epaulieres": "Épaulières Chimèrivan 6",
            "misc": "Lames ailées Corpo",
            "familier": "Chiminou"
        }
    }
  ];

  // =========================================================================
  // GESTION DES FAVORIS (LocalStorage & Tri prioritaire)
  // =========================================================================
  const FAV_STORAGE_KEY = 'dofus_favorite_skins';

  function getFavorites() {
    try {
      const stored = localStorage.getItem(FAV_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) return new Set(parsed);
      }
    } catch (e) {
      console.warn('LocalStorage inaccessible pour les favoris Dofus', e);
    }
    return new Set();
  }

  function saveFavorites(favSet) {
    try {
      localStorage.setItem(FAV_STORAGE_KEY, JSON.stringify(Array.from(favSet)));
    } catch (e) {
      console.warn('Impossible de sauvegarder les favoris', e);
    }
  }

  const favoritesSet = getFavorites();

  function isFavorite(skinId) {
    return favoritesSet.has(skinId);
  }

  function toggleFavorite(skinId) {
    if (favoritesSet.has(skinId)) {
      favoritesSet.delete(skinId);
    } else {
      favoritesSet.add(skinId);
    }
    saveFavorites(favoritesSet);
  }

  // Clé pour les skins personnalisés importés localement
  const CUSTOM_SKINS_STORAGE_KEY = 'dofus_custom_skins';

  function getCustomSkins() {
    try {
      const stored = localStorage.getItem(CUSTOM_SKINS_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {
      console.warn('LocalStorage inaccessible pour les skins personnalisés', e);
    }
    return [];
  }

  function saveCustomSkin(skin) {
    try {
      unDeleteSkinId(skin.id);
      const current = getCustomSkins();
      const existingIdx = current.findIndex(function(s) { return s.id === skin.id; });
      if (existingIdx >= 0) {
        current[existingIdx] = skin;
      } else {
        current.unshift(skin);
      }
      localStorage.setItem(CUSTOM_SKINS_STORAGE_KEY, JSON.stringify(current));
    } catch (e) {
      console.warn('Impossible de sauvegarder le skin personnalisé', e);
    }
  }

  // Clé pour les skins supprimés par l'utilisateur (persistance locale)
  const TRASH_STORAGE_KEY = 'dofus_trash_skins';
  const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

  function getTrashList() {
    try {
      const stored = localStorage.getItem(TRASH_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {
      console.warn('LocalStorage inaccessible pour la corbeille', e);
    }
    return [];
  }

  function saveTrashList(list) {
    try {
      localStorage.setItem(TRASH_STORAGE_KEY, JSON.stringify(list));
    } catch (e) {
      console.warn('Impossible de sauvegarder la corbeille', e);
    }
  }

  function getDaysRemaining(deletedAt) {
    const elapsed = Date.now() - (Number(deletedAt) || Date.now());
    const remainingMs = Math.max(0, SEVEN_DAYS_MS - elapsed);
    return Math.max(1, Math.ceil(remainingMs / (24 * 60 * 60 * 1000)));
  }

  function getTrashSkinIds() {
    return new Set(getTrashList().map(function(t) { return t.skin ? t.skin.id : t.id; }));
  }

  function cleanupExpiredTrash() {
    const trash = getTrashList();
    const now = Date.now();
    const kept = [];
    trash.forEach(function(item) {
      const del = item.deletedAt ? Number(item.deletedAt) : 0;
      if (now - del > SEVEN_DAYS_MS) {
        const skinId = item.skin ? item.skin.id : item.id;
        fetch('/api/delete-skin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: skinId })
        }).catch(function() {});
      } else {
        kept.push(item);
      }
    });
    if (kept.length !== trash.length) {
      saveTrashList(kept);
    }
  }

  function syncTrashFromServer() {
    fetch('/api/trash-skins')
      .then(function(res) { return res.ok ? res.json() : null; })
      .then(function(data) {
        if (data && data.success && Array.isArray(data.trash)) {
          saveTrashList(data.trash);
          const mainEl = document.querySelector('#main');
          if (mainEl && document.querySelector('#skin-class-list')) {
            renderSidebar(mainEl);
            if (skinState.selectedClass === 'trash') renderGrid(mainEl);
          }
        }
      })
      .catch(function() {});
  }

  function deleteSkin(skinId) {
    const skin = getAllSkins().find(function(s) { return s.id === skinId; }) ||
                 SKINS.find(function(s) { return s.id === skinId; });

    if (favoritesSet.has(skinId)) {
      favoritesSet.delete(skinId);
      saveFavorites(favoritesSet);
    }

    const trash = getTrashList().filter(function(t) { return (t.skin ? t.skin.id : t.id) !== skinId; });
    const trashItem = {
      skin: skin || { id: skinId },
      deletedAt: Date.now()
    };
    trash.unshift(trashItem);
    saveTrashList(trash);

    try {
      const custom = getCustomSkins().filter(function(s) { return s.id !== skinId; });
      localStorage.setItem(CUSTOM_SKINS_STORAGE_KEY, JSON.stringify(custom));
    } catch (e) {}

    const idx = SKINS.findIndex(function(s) { return s.id === skinId; });
    if (idx >= 0) {
      SKINS.splice(idx, 1);
    }

    fetch('/api/trash-skin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: skinId, skin: skin, deletedAt: trashItem.deletedAt })
    }).catch(function() {});
  }

  function restoreSkin(skinId) {
    const trash = getTrashList();
    const item = trash.find(function(t) { return (t.skin ? t.skin.id : t.id) === skinId; });
    const kept = trash.filter(function(t) { return (t.skin ? t.skin.id : t.id) !== skinId; });
    saveTrashList(kept);

    if (item && item.skin) {
      if (!SKINS.some(function(s) { return s.id === item.skin.id; })) {
        SKINS.unshift(item.skin);
      }
      saveCustomSkin(item.skin);
    }

    fetch('/api/restore-skin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: skinId, skin: item ? item.skin : null })
    }).catch(function() {});
  }

  function purgePermanentSkin(skinId) {
    const trash = getTrashList().filter(function(t) { return (t.skin ? t.skin.id : t.id) !== skinId; });
    saveTrashList(trash);

    const idx = SKINS.findIndex(function(s) { return s.id === skinId; });
    if (idx >= 0) SKINS.splice(idx, 1);

    try {
      const custom = getCustomSkins().filter(function(s) { return s.id !== skinId; });
      localStorage.setItem(CUSTOM_SKINS_STORAGE_KEY, JSON.stringify(custom));
    } catch (e) {}

    fetch('/api/delete-skin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: skinId })
    }).catch(function() {});
  }

  function getTrashSkins() {
    cleanupExpiredTrash();
    return getTrashList().map(function(item) {
      return item.skin || { id: item.id };
    }).filter(Boolean);
  }

  function getAllSkins() {
    cleanupExpiredTrash();
    const trashIds = getTrashSkinIds();
    const custom = getCustomSkins();
    const ids = new Set();
    const result = [];
    custom.forEach(function(s) {
      if (!trashIds.has(s.id) && !ids.has(s.id)) {
        ids.add(s.id);
        result.push(s);
      }
    });
    SKINS.forEach(function(s) {
      if (!trashIds.has(s.id) && !ids.has(s.id)) {
        ids.add(s.id);
        result.push(s);
      }
    });
    return result;
  }

  cleanupExpiredTrash();
  syncTrashFromServer();

  const skinState = {
    selectedClass: 'all', // 'all', 'favorites', 'trash', ou id de la classe ('sram', ...)
    selectedGender: 'all',
    favoritesOnly: false
  };

  function getClassName(classId) {
    if (classId === 'trash') return 'Corbeille';
    const c = DOFUS_CLASSES.find(function(cls) { return cls.id === classId; });
    return c ? c.name : classId;
  }

  function getClassIcon(classId) {
    if (classId === 'trash') return '🗑️';
    const c = DOFUS_CLASSES.find(function(cls) { return cls.id === classId; });
    return c ? c.icon : '🛡️';
  }

  function countSkinsByClass(classId, gender, favOnly) {
    if (classId === 'trash') {
      return getTrashSkins().filter(function(s) {
        return gender === 'all' || s.gender === gender;
      }).length;
    }
    return getAllSkins().filter(function(s) {
      const matchFav = (classId === 'favorites' || favOnly) ? isFavorite(s.id) : true;
      const matchClass = (classId === 'all' || classId === 'favorites') ? true : s.class === classId;
      const matchGender = gender === 'all' || s.gender === gender;
      return matchFav && matchClass && matchGender;
    }).length;
  }

  function renderSkinsApp(mainEl) {
    mainEl.innerHTML = `
      <div class="skin-layout">
        <!-- Colonne Gauche (1/5) : Liste alphabétique des classes + Favoris -->
        <aside class="skin-sidebar">
          <div class="skin-sidebar-head">
            <span class="skin-sidebar-title">Classes</span>
            <span class="skin-sidebar-badge" id="skin-sidebar-total">${getAllSkins().length} skins</span>
          </div>
          <div class="skin-class-list" id="skin-class-list"></div>
        </aside>

        <!-- Colonne Droite (4/5) : Toolbar avec filtres & Sélecteur + Grille des skins -->
        <section class="skin-content">
          <div class="skin-toolbar">
            <div class="skin-toolbar-info">
              <h2 id="skin-current-class-title">Toutes les classes</h2>
              <span class="skin-count" id="skin-filtered-count"></span>
            </div>
            <div class="skin-toolbar-actions">
              <button class="skin-import-btn" id="skin-import-open-btn" title="Ajouter un skin depuis Barbofus">
                <span>📥</span>
                <span>Importer un skin</span>
              </button>
              <button class="skin-fav-filter-btn ${skinState.favoritesOnly ? 'active' : ''}" id="skin-fav-filter-toggle" title="Filtrer uniquement les skins favoris">
                <span>⭐</span>
                <span>Favoris uniquement</span>
              </button>
              <div class="skin-sex-selector" id="skin-sex-selector">
                <button class="skin-sex-btn ${skinState.selectedGender === 'all' ? 'active' : ''}" data-gender="all">Tous</button>
                <button class="skin-sex-btn ${skinState.selectedGender === 'male' ? 'active' : ''}" data-gender="male">♂ Homme</button>
                <button class="skin-sex-btn ${skinState.selectedGender === 'female' ? 'active' : ''}" data-gender="female">♀ Femme</button>
              </div>
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

    const totalBadge = mainEl.querySelector('#skin-sidebar-total');
    if (totalBadge) {
      totalBadge.textContent = `${getAllSkins().length} skins`;
    }

    const totalCount = countSkinsByClass('all', skinState.selectedGender, false);
    const favCount = countSkinsByClass('favorites', skinState.selectedGender, false);
    const trashCount = countSkinsByClass('trash', skinState.selectedGender, false);

    let html = `
      <button class="skin-class-btn ${skinState.selectedClass === 'all' && !skinState.favoritesOnly ? 'active' : ''}" data-class="all">
        <span class="skin-class-name">✨ Toutes les classes</span>
        <span class="skin-class-count ${totalCount > 0 ? 'has-skins' : ''}">${totalCount}</span>
      </button>
      <button class="skin-class-btn skin-fav-class-btn ${skinState.selectedClass === 'favorites' ? 'active' : ''}" data-class="favorites">
        <span class="skin-class-name">⭐ Mes favoris</span>
        <span class="skin-class-count skin-fav-count ${favCount > 0 ? 'has-skins' : ''}">${favCount}</span>
      </button>
      <div class="skin-sidebar-divider"></div>
    `;

    DOFUS_CLASSES.forEach(function(cls) {
      const cnt = countSkinsByClass(cls.id, skinState.selectedGender, skinState.favoritesOnly);
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

    html += `
      <div class="skin-sidebar-divider"></div>
      <button class="skin-class-btn skin-trash-class-btn ${skinState.selectedClass === 'trash' ? 'active' : ''}" data-class="trash">
        <span class="skin-class-name">🗑️ Corbeille (7j)</span>
        <span class="skin-class-count skin-trash-count ${trashCount > 0 ? 'has-skins' : ''}">${trashCount}</span>
      </button>
    `;

    listEl.innerHTML = html;

    listEl.querySelectorAll('.skin-class-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        skinState.selectedClass = btn.dataset.class;
        if (skinState.selectedClass === 'favorites' || skinState.selectedClass === 'trash') {
          skinState.favoritesOnly = false;
        }
        renderSidebar(mainEl);
        renderGrid(mainEl);
        bindToolbarEvents(mainEl);
      });
    });
  }

  function bindToolbarEvents(mainEl) {
    const importBtn = mainEl.querySelector('#skin-import-open-btn');
    if (importBtn && !importBtn._bound) {
      importBtn._bound = true;
      importBtn.addEventListener('click', function() {
        openImportBarbofusModal(mainEl);
      });
    }

    const sexSelector = mainEl.querySelector('#skin-sex-selector');
    if (sexSelector && !sexSelector._bound) {
      sexSelector._bound = true;
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

    const favToggle = mainEl.querySelector('#skin-fav-filter-toggle');
    if (favToggle && !favToggle._bound) {
      favToggle._bound = true;
      favToggle.addEventListener('click', function() {
        skinState.favoritesOnly = !skinState.favoritesOnly;
        favToggle.classList.toggle('active', skinState.favoritesOnly);
        renderSidebar(mainEl);
        renderGrid(mainEl);
      });
    }
  }

  function renderGrid(mainEl) {
    const gridEl = mainEl.querySelector('#skin-grid');
    const titleEl = mainEl.querySelector('#skin-current-class-title');
    const countEl = mainEl.querySelector('#skin-filtered-count');
    if (!gridEl) return;

    const isTrashView = skinState.selectedClass === 'trash';

    // Titre de la vue active
    if (isTrashView) {
      titleEl.textContent = "🗑️ Corbeille (Conservation 7 jours)";
    } else if (skinState.selectedClass === 'favorites') {
      titleEl.textContent = "⭐ Mes favoris";
    } else if (skinState.selectedClass === 'all') {
      titleEl.textContent = skinState.favoritesOnly ? "✨ Toutes les classes (Favoris)" : "Toutes les classes";
    } else {
      const cls = DOFUS_CLASSES.find(function(c) { return c.id === skinState.selectedClass; });
      const baseName = cls ? `${cls.icon} ${cls.name}` : skinState.selectedClass;
      titleEl.textContent = skinState.favoritesOnly ? `${baseName} (Favoris)` : baseName;
    }

    // Filtrage des skins
    const sourceList = isTrashView ? getTrashSkins() : getAllSkins();
    const filtered = sourceList.filter(function(skin) {
      if (isTrashView) {
        return skinState.selectedGender === 'all' || skin.gender === skinState.selectedGender;
      }
      const matchFav = (skinState.selectedClass === 'favorites' || skinState.favoritesOnly)
        ? isFavorite(skin.id)
        : true;
      const matchClass = (skinState.selectedClass === 'all' || skinState.selectedClass === 'favorites')
        ? true
        : skin.class === skinState.selectedClass;
      const matchGender = skinState.selectedGender === 'all' || skin.gender === skinState.selectedGender;
      return matchFav && matchClass && matchGender;
    });

    if (!isTrashView) {
      filtered.sort(function(a, b) {
        const favA = isFavorite(a.id) ? 1 : 0;
        const favB = isFavorite(b.id) ? 1 : 0;
        if (favA !== favB) return favB - favA;
        return 0;
      });
    }

    countEl.textContent = `${filtered.length} skin${filtered.length > 1 ? 's' : ''}`;

    if (filtered.length === 0) {
      if (isTrashView) {
        gridEl.innerHTML = `
          <div class="skin-empty">
            <div class="skin-empty-icon">🗑️</div>
            <h3>Corbeille vide</h3>
            <p>Aucun skin supprimé dans la corbeille. Tout skin supprimé y est conservé pendant 7 jours avant d'être effacé définitivement.</p>
          </div>
        `;
        return;
      }

      if (skinState.selectedClass === 'favorites' || skinState.favoritesOnly) {
        gridEl.innerHTML = `
          <div class="skin-empty">
            <div class="skin-empty-icon">⭐</div>
            <h3>Aucun skin favori</h3>
            <p>Clique sur l'étoile <strong>★</strong> sur n'importe quel skin pour l'ajouter à tes favoris et le voir apparaître en premier !</p>
          </div>
        `;
        return;
      }

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

    const trashMap = new Map(getTrashList().map(function(t) { return [t.skin ? t.skin.id : t.id, t]; }));

    gridEl.innerHTML = filtered.map(function(skin) {
      const isFav = isFavorite(skin.id);
      const genderLabel = skin.gender === 'male' ? '♂ Homme' : '♀ Femme';
      const genderClass = skin.gender === 'male' ? 'gender-male' : 'gender-female';
      const colors = skin.colors || {};

      let trashBadgeHtml = '';
      let actionBtnHtml = '';

      if (isTrashView) {
        const trashRecord = trashMap.get(skin.id);
        const daysLeft = trashRecord ? getDaysRemaining(trashRecord.deletedAt) : 7;
        trashBadgeHtml = `<span class="skin-badge-tag badge-trash">⏳ ${daysLeft}j restant${daysLeft > 1 ? 's' : ''}</span>`;
        actionBtnHtml = `
          <button class="skin-restore-btn" data-skin-id="${skin.id}" title="Restaurer ce skin" aria-label="Restaurer">
            ♻️
          </button>
        `;
      } else {
        actionBtnHtml = `
          <button class="skin-fav-btn ${isFav ? 'active' : ''}" data-skin-id="${skin.id}" title="${isFav ? 'Retirer des favoris' : 'Ajouter aux favoris'}" aria-label="Favori">
            ${isFav ? '★' : '☆'}
          </button>
        `;
      }

      const swatchesHtml = COLOR_ZONES.map(function(z) {
        const hex = colors[z.id] || '#2ec486';
        return `<span class="skin-swatch-dot" style="background-color:${hex};" title="${z.label}: ${hex}"></span>`;
      }).join('');

      return `
        <div class="skin-card ${isFav && !isTrashView ? 'is-favorite' : ''}" data-skin-id="${skin.id}">
          <div class="skin-card-badge skin-card-badges">
            <div class="skin-badge-tags">
              <span class="skin-badge-tag">${getClassIcon(skin.class)} ${getClassName(skin.class)}</span>
              <span class="skin-badge-tag ${genderClass}">${genderLabel}</span>
              ${trashBadgeHtml}
            </div>
            ${actionBtnHtml}
          </div>
          <div class="skin-card-visual">
            <img src="${skin.image}" alt="${skin.name}" loading="lazy">
          </div>
          <div class="skin-card-info">
            <div class="skin-card-name-row">
              <h4 class="skin-card-name">${skin.name}</h4>
              ${isFav && !isTrashView ? '<span class="skin-fav-indicator" title="Favori">★</span>' : ''}
            </div>
            <div class="skin-card-swatches">${swatchesHtml}</div>
            <div class="skin-card-cta">${isTrashView ? 'Voir ou restaurer →' : 'Détails & couleurs →'}</div>
          </div>
        </div>
      `;
    }).join('');

    gridEl.querySelectorAll('.skin-fav-btn').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const skinId = btn.dataset.skinId;
        toggleFavorite(skinId);
        renderSidebar(mainEl);
        renderGrid(mainEl);
      });
    });

    gridEl.querySelectorAll('.skin-restore-btn').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const skinId = btn.dataset.skinId;
        restoreSkin(skinId);
        renderSidebar(mainEl);
        renderGrid(mainEl);
      });
    });

    gridEl.querySelectorAll('.skin-card').forEach(function(card) {
      card.addEventListener('click', function() {
        const skinId = card.dataset.skinId;
        const skin = (isTrashView ? getTrashSkins() : getAllSkins()).find(function(s) { return s.id === skinId; });
        if (skin) {
          openSkinModal(skin, isTrashView);
        }
      });
    });
  }

  // =========================================================================
  // MODALE DÉTAILLÉE DU SKIN
  // Rappel du visuel + Hexadécimaux avec nom de zone + 7 items cosmétiques
  // =========================================================================
  function openSkinModal(skin, isTrash) {
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
        <div class="skin-color-item" data-copy="${hex}" title="Cliquer pour copier ${hex}">
          <div class="skin-color-left">
            <div class="skin-color-box" style="background-color:${hex};"></div>
            <div class="skin-color-texts">
              <span class="skin-color-zone">${zone.label}</span>
              <span class="skin-color-hex">${hex}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // 2. Liste des items cosmétiques dans l'ordre strict
    const itemsHtml = COSMETIC_SLOTS.map(function(slot) {
      const val = items[slot.id];
      const isNone = !val || val.toLowerCase() === 'aucun' || val.toLowerCase() === 'aucune' || val === '—';
      return `
        <div class="skin-item-row ${!isNone ? 'is-clickable' : ''}" ${!isNone ? `data-copy="${val}" title="Cliquer pour copier ${val}"` : ''}>
          <span class="skin-item-slot">
            <span class="skin-slot-icon">${slot.icon}</span>
            <span>${slot.label}</span>
          </span>
          <span class="skin-item-name ${isNone ? 'is-empty' : ''}">${val || '—'}</span>
        </div>
      `;
    }).join('');

    const fullCopyText = [
      `Skin: ${skin.name} (${getClassName(skin.class)} ${genderLabel})`,
      skin.head ? `Tête choisie: ${skin.head}` : '',
      '--- Couleurs ---',
      COLOR_ZONES.map(function(z) { return `${z.label}: ${colors[z.id] || '-'}`; }).join('\n'),
      '--- Cosmétiques ---',
      COSMETIC_SLOTS.map(function(s) { return `${s.label}: ${items[s.id] || 'Aucun'}`; }).join('\n')
    ].filter(Boolean).join('\n');

    let actionsHtml = '';
    if (isTrash) {
      actionsHtml = `
        <button class="skin-modal-restore-btn" id="modal-restore-btn" data-skin-id="${skin.id}" title="Restaurer ce skin dans la collection">
          <span>♻️</span>
          <span>Restaurer</span>
        </button>
        <button class="skin-modal-delete-btn" id="modal-delete-btn" data-skin-id="${skin.id}" title="Supprimer définitivement ce skin">
          <span class="skin-modal-delete-icon">🗑️</span>
          <span class="skin-modal-delete-label">Supprimer définitivement</span>
        </button>
      `;
    } else {
      actionsHtml = `
        <button class="skin-modal-fav-btn ${isFavorite(skin.id) ? 'is-fav' : ''}" id="modal-fav-btn" data-skin-id="${skin.id}" title="${isFavorite(skin.id) ? 'Retirer des favoris' : 'Ajouter aux favoris'}">
          <span class="skin-modal-fav-star">${isFavorite(skin.id) ? '★' : '☆'}</span>
          <span class="skin-modal-fav-label">${isFavorite(skin.id) ? 'Favori' : 'Ajouter aux favoris'}</span>
        </button>
        <button class="skin-modal-delete-btn" id="modal-delete-btn" data-skin-id="${skin.id}" title="Placer dans la corbeille (7 jours)">
          <span class="skin-modal-delete-icon">🗑️</span>
          <span class="skin-modal-delete-label">Supprimer</span>
        </button>
      `;
    }

    modalOverlay.innerHTML = `
      <div class="skin-modal" role="dialog" aria-modal="true">
        <div class="skin-modal-head">
          <div class="skin-modal-head-info">
            <div class="skin-modal-title-row">
              <h3 class="skin-modal-title">${skin.name}</h3>
              <div class="skin-modal-header-actions">
                ${actionsHtml}
              </div>
            </div>
            <div class="skin-modal-subtitle">${getClassIcon(skin.class)} ${getClassName(skin.class)} • ${genderLabel} ${isTrash ? '• 🗑️ Corbeille' : ''}</div>
          </div>
          <button class="skin-modal-close" aria-label="Fermer la modale">✕</button>
        </div>

        <div class="skin-modal-body">
          <!-- Colonne Gauche : Rappel du visuel grand format + Tête choisie -->
          <div class="skin-modal-col-left">
            <div class="skin-modal-visual" id="skin-modal-image-wrap">
              <img src="${skin.imageFull || skin.image}" alt="${skin.name}" title="Cliquer pour zoomer">
            </div>
            <div class="skin-modal-visual-hint">🔍 Cliquez sur l'image pour agrandir</div>

            ${(skin.headImage || skin.head) ? `
              <div class="skin-modal-head-box">
                ${skin.headImage ? `
                  <div class="skin-modal-head-avatar">
                    <img src="${skin.headImage}" alt="Tête choisie">
                  </div>
                ` : ''}
                <div class="skin-modal-head-meta">
                  <span class="skin-modal-head-label">Tête sélectionnée</span>
                  <span class="skin-modal-head-val">${skin.head || 'Tête 1'}</span>
                </div>
              </div>
            ` : ''}

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
      if (document.querySelector('.lightbox')) return;
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

    // Copie au clic sur toute la div couleur (.skin-color-item)
    modalOverlay.querySelectorAll('.skin-color-item').forEach(function(itemEl) {
      itemEl.addEventListener('click', function() {
        const textToCopy = itemEl.dataset.copy;
        if (!textToCopy) return;
        copyToClipboard(textToCopy, function() {
          itemEl.classList.add('copied');
          setTimeout(function() {
            itemEl.classList.remove('copied');
          }, 1200);
        });
      });
    });

    // Copie au clic sur toute la div item cosmétique (.skin-item-row.is-clickable)
    modalOverlay.querySelectorAll('.skin-item-row.is-clickable').forEach(function(rowEl) {
      rowEl.addEventListener('click', function() {
        const textToCopy = rowEl.dataset.copy;
        if (!textToCopy) return;
        copyToClipboard(textToCopy, function() {
          rowEl.classList.add('copied');
          setTimeout(function() {
            rowEl.classList.remove('copied');
          }, 1200);
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

    // Gestion de la restauration depuis la modale
    const modalRestoreBtn = modalOverlay.querySelector('#modal-restore-btn');
    if (modalRestoreBtn) {
      modalRestoreBtn.addEventListener('click', function() {
        restoreSkin(skin.id);
        closeModal();
        const mainEl = document.querySelector('#main');
        if (mainEl) {
          renderSidebar(mainEl);
          renderGrid(mainEl);
        }
      });
    }

    // Gestion du favori depuis la modale
    const modalFavBtn = modalOverlay.querySelector('#modal-fav-btn');
    if (modalFavBtn) {
      modalFavBtn.addEventListener('click', function() {
        toggleFavorite(skin.id);
        const nowFav = isFavorite(skin.id);
        modalFavBtn.classList.toggle('is-fav', nowFav);
        modalFavBtn.querySelector('.skin-modal-fav-star').textContent = nowFav ? '★' : '☆';
        modalFavBtn.querySelector('.skin-modal-fav-label').textContent = nowFav ? 'Favori' : 'Ajouter aux favoris';
        modalFavBtn.setAttribute('title', nowFav ? 'Retirer des favoris' : 'Ajouter aux favoris');
        const mainEl = document.querySelector('#main');
        if (mainEl) {
          renderSidebar(mainEl);
          renderGrid(mainEl);
        }
      });
    }

    // Gestion de la suppression depuis la modale
    const modalDeleteBtn = modalOverlay.querySelector('#modal-delete-btn');
    if (modalDeleteBtn) {
      let confirmTimeout = null;
      modalDeleteBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (!modalDeleteBtn.classList.contains('confirming')) {
          modalDeleteBtn.classList.add('confirming');
          modalDeleteBtn.querySelector('.skin-modal-delete-label').textContent = 'Confirmer ?';
          modalDeleteBtn.setAttribute('title', isTrash ? 'Confirmer la suppression définitive sur le disque' : 'Confirmer le placement dans la corbeille pour 7 jours');

          confirmTimeout = setTimeout(function() {
            modalDeleteBtn.classList.remove('confirming');
            modalDeleteBtn.querySelector('.skin-modal-delete-label').textContent = isTrash ? 'Supprimer définitivement' : 'Supprimer';
            modalDeleteBtn.setAttribute('title', isTrash ? 'Supprimer définitivement ce skin' : 'Supprimer ce skin');
          }, 3500);
        } else {
          clearTimeout(confirmTimeout);
          if (isTrash) {
            purgePermanentSkin(skin.id);
          } else {
            deleteSkin(skin.id);
          }
          closeModal();
          const mainEl = document.querySelector('#main');
          if (mainEl) {
            renderSidebar(mainEl);
            renderGrid(mainEl);
          }
        }
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
  // IMPORTATEUR DE SKINS BARBOFUS (PARSER & MODALE)
  // =========================================================================
  const CLASS_MAP = {
    'cra': 'cra', 'crâ': 'cra',
    'ecaflip': 'ecaflip',
    'eliotrope': 'eliotrope', 'éliotrope': 'eliotrope',
    'eniripsa': 'eniripsa',
    'enutrof': 'enutrof',
    'feca': 'feca', 'féca': 'feca',
    'forgelance': 'forgelance',
    'huppermage': 'huppermage',
    'iop': 'iop',
    'osamodas': 'osamodas',
    'ouginak': 'ouginak',
    'pandawa': 'pandawa',
    'roublard': 'roublard',
    'sacrieur': 'sacrieur',
    'sadida': 'sadida',
    'sram': 'sram',
    'steamer': 'steamer',
    'xelor': 'xelor', 'xélor': 'xelor',
    'zobal': 'zobal'
  };

  const BARBOFUS_ORDER_MAP = {
    1: 'coiffe',
    2: 'epaulieres',
    3: 'misc',
    4: 'cape',
    5: 'bouclier',
    6: 'costume',
    7: 'familier'
  };

  function parseBarbofusClientHTML(html, classOverride, genderOverride) {
    if (!html || typeof html !== 'string') {
      throw new Error("Le contenu HTML est vide.");
    }

    // 1. Titre et Auteur
    let name = 'Nouveau Skin';
    const titleMatch = html.match(/<h2[^>]*>\s*([^<&]+?)\s*(?:&nbsp;)?\s*<\/h2>\s*<h2[^>]*>\s*par\s*<span[^>]*>\s*([^<]+?)\s*<\/span>\s*<\/h2>/i);
    if (titleMatch) {
      const skinTitle = titleMatch[1].trim();
      const author = titleMatch[2].trim();
      name = author ? `${skinTitle} (${author})` : skinTitle;
    } else {
      const singleTitle = html.match(/<h2[^>]*>\s*([^<&]+?)\s*(?:&nbsp;)?\s*<\/h2>/i);
      if (singleTitle) name = singleTitle[1].trim();
    }

    // 2. Classe
    let classId = (classOverride && classOverride !== 'auto' && CLASS_MAP[classOverride.toLowerCase()]) || null;
    if (!classId) {
      const classMatch = html.match(/<p class="font-thin text-\[min\(6vw,1\.25rem\)\] text-secondary">\s*([A-Za-zéèÉÈêÊëËïÏîÎôÔûÛçÇ]+)\s*<\/p>/i);
      if (classMatch) {
        const rawClass = classMatch[1].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        if (CLASS_MAP[rawClass]) classId = CLASS_MAP[rawClass];
      }
    }
    if (!classId) {
      for (const rawName in CLASS_MAP) {
        const regex = new RegExp(`>\\s*${rawName}\\s*<`, 'i');
        if (regex.test(html)) {
          classId = CLASS_MAP[rawName];
          break;
        }
      }
    }
    if (!classId) classId = 'forgelance';

    // 3. Sexe
    let gender = (genderOverride && genderOverride !== 'auto')
      ? (genderOverride.toLowerCase().startsWith('f') ? 'female' : 'male')
      : null;
    if (!gender) {
      const genderMatch = html.match(/<p class="font-thin text-\[min\(6vw,1\.25rem\)\] text-secondary">\s*(Homme|Femme)\s*<\/p>/i)
        || html.match(/>\s*(Homme|Femme)\s*</i);
      if (genderMatch) {
        gender = genderMatch[1].toLowerCase() === 'femme' ? 'female' : 'male';
      } else {
        gender = 'female';
      }
    }

    // 4. Visage / Tête
    let headImage = '';
    let headName = 'Tête 1';
    const faceMatch = html.match(/<img[^>]*src="([^"]*faces\/unity\/[^"]+)"/i) || html.match(/<img[^>]*src="([^"]*faces\/[^"]+)"/i);
    if (faceMatch) {
      headImage = faceMatch[1].trim();
      const numMatch = headImage.match(/_(\d+)\.png/i);
      if (numMatch) {
        headName = `Tête ${parseInt(numMatch[1], 10)}`;
      }
    }

    // 5. Visuel Principal
    let image = '';
    const ogMatch = html.match(/<meta property="og:image" content="([^"]+)"/i);
    if (ogMatch) {
      image = ogMatch[1].trim();
    } else {
      const imgMatch = html.match(/<img[^>]*src="([^"]*\/storage\/images\/skins\/[^"]+)"/i);
      if (imgMatch) image = imgMatch[1].trim();
    }

    // 6. Couleurs hexadécimales
    const colors = {
      peau: '#A16F4D',
      cheveux: '#26221A',
      vetement1: '#EFE8CC',
      vetement2: '#6B4134',
      vetement3: '#6D423A',
      vetement4: '#492C24'
    };
    const colorMatches = Array.from(html.matchAll(/color:\s*['"]([0-9a-fA-F]{6})['"]/gi));
    if (colorMatches.length >= 6) {
      colors.peau = '#' + colorMatches[0][1].toUpperCase();
      colors.cheveux = '#' + colorMatches[1][1].toUpperCase();
      colors.vetement1 = '#' + colorMatches[2][1].toUpperCase();
      colors.vetement2 = '#' + colorMatches[3][1].toUpperCase();
      colors.vetement3 = '#' + colorMatches[4][1].toUpperCase();
      colors.vetement4 = '#' + colorMatches[5][1].toUpperCase();
    }

    // 7. Cosmétiques (7 slots Barbofus : Coiffe, Cape, Bouclier, Costume, Épaulière, Misc, Familiers)
    const items = {
      coiffe: 'Aucune',
      cape: 'Aucune',
      bouclier: 'Aucun',
      costume: 'Aucun',
      epaulieres: 'Aucune',
      misc: 'Aucun',
      familier: 'Aucun'
    };

    for (let i = 1; i <= 7; i++) {
      const regex = new RegExp(`\\border-${i}\\b(?:(?!\\border-[1-7]\\b)[\\s\\S])*?<p class="[^"]*min-\\[750px\\]:text-lg">([^<]+)<\\/p>`, 'i');
      const m = html.match(regex);
      const noneVal = (i === 1 || i === 2 || i === 4) ? 'Aucune' : 'Aucun';
      items[BARBOFUS_ORDER_MAP[i]] = m ? m[1].trim().replace(/&#039;/g, "'").replace(/&quot;/g, '"') : noneVal;
    }

    const skinId = `${classId}-${gender === 'female' ? 'f' : 'm'}-${Date.now().toString().slice(-4)}`;

    return {
      id: skinId,
      name: name,
      class: classId,
      gender: gender,
      head: headName,
      headImage: headImage,
      image: image,
      imageFull: image,
      colors: colors,
      items: items
    };
  }

  function openImportBarbofusModal(mainEl) {
    const existing = document.querySelector('.barbofus-modal-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.className = 'skin-modal-overlay barbofus-modal-overlay';

    const classOptionsHtml = DOFUS_CLASSES.map(function(c) {
      return `<option value="${c.id}">${c.icon} ${c.name}</option>`;
    }).join('');

    overlay.innerHTML = `
      <div class="barbofus-modal" role="dialog" aria-modal="true">
        <div class="skin-modal-head">
          <div class="skin-modal-head-info">
            <div class="skin-modal-title-row">
              <h3 class="skin-modal-title">📥 Importer un skin Barbofus</h3>
            </div>
            <div class="skin-modal-subtitle">Ajoutez un skin Unity depuis barbofus.com à votre collection</div>
          </div>
          <button class="skin-modal-close" aria-label="Fermer la modale">✕</button>
        </div>

        <div class="barbofus-form">
          <div class="barbofus-input-group">
            <label for="barbofus-url-input">🔗 Lien URL Barbofus</label>
            <input type="url" id="barbofus-url-input" placeholder="https://barbofus.com/unity-skin/104749" spellcheck="false" autocomplete="off" autofocus />
          </div>

          <div class="barbofus-row">
            <div class="barbofus-input-group">
              <label for="barbofus-class-select">🛡️ Classe (optionnel si auto-détecté)</label>
              <select id="barbofus-class-select">
                <option value="auto">🤖 Auto-détecter depuis la page</option>
                ${classOptionsHtml}
              </select>
            </div>
            <div class="barbofus-input-group">
              <label for="barbofus-gender-select">⚧ Sexe (optionnel si auto-détecté)</label>
              <select id="barbofus-gender-select">
                <option value="auto">🤖 Auto-détecter depuis la page</option>
                <option value="female">♀ Femme</option>
                <option value="male">♂ Homme</option>
              </select>
            </div>
          </div>

          <div class="barbofus-actions">
            <button id="barbofus-fetch-btn" class="barbofus-btn-primary" type="button">
              <span>⚡</span>
              <span>Analyser & Importer</span>
            </button>
            <button id="barbofus-toggle-manual" class="barbofus-btn-secondary" type="button">
              <span>📝</span>
              <span>Code source HTML manuel</span>
            </button>
          </div>

          <div id="barbofus-status" style="display: none;"></div>

          <div id="barbofus-manual-section" style="display: none; flex-direction: column; gap: 8px; margin-top: 4px;">
            <div class="barbofus-input-group">
              <label for="barbofus-html-input">📄 Code source HTML complet (si le serveur local n'est pas actif : Ctrl+U sur Barbofus, copier/coller)</label>
              <textarea id="barbofus-html-input" placeholder="Collez le code source HTML complet de la page Barbofus ici..."></textarea>
            </div>
            <div>
              <button id="barbofus-parse-html-btn" class="barbofus-btn-primary" type="button" style="padding: 7px 14px; font-size: 12px;">
                <span>🔍</span>
                <span>Extraire les données du HTML</span>
              </button>
            </div>
          </div>
        </div>

        <div class="barbofus-preview" id="barbofus-preview" style="display: none;"></div>
      </div>
    `;

    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    function closeModal() {
      document.removeEventListener('keydown', onEsc);
      document.body.style.overflow = '';
      overlay.remove();
    }

    function onEsc(e) {
      if (e.key === 'Escape') closeModal();
    }
    document.addEventListener('keydown', onEsc);

    overlay.querySelector('.skin-modal-close').addEventListener('click', closeModal);
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) closeModal();
    });

    const urlInput = overlay.querySelector('#barbofus-url-input');
    const classSelect = overlay.querySelector('#barbofus-class-select');
    const genderSelect = overlay.querySelector('#barbofus-gender-select');
    const fetchBtn = overlay.querySelector('#barbofus-fetch-btn');
    const toggleManualBtn = overlay.querySelector('#barbofus-toggle-manual');
    const manualSection = overlay.querySelector('#barbofus-manual-section');
    const htmlInput = overlay.querySelector('#barbofus-html-input');
    const parseHtmlBtn = overlay.querySelector('#barbofus-parse-html-btn');
    const statusEl = overlay.querySelector('#barbofus-status');
    const previewEl = overlay.querySelector('#barbofus-preview');

    let currentParsedSkin = null;

    if (urlInput) {
      setTimeout(function() {
        urlInput.focus();
        urlInput.select();
      }, 50);

      urlInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          fetchBtn.click();
        }
      });
    }

    toggleManualBtn.addEventListener('click', function() {
      const isHidden = manualSection.style.display === 'none';
      manualSection.style.display = isHidden ? 'flex' : 'none';
      if (isHidden) htmlInput.focus();
    });

    function showStatus(msg, type) {
      statusEl.style.display = 'flex';
      statusEl.className = 'barbofus-status-msg ' + (type || 'info');
      statusEl.innerHTML = msg;
    }

    function renderPreviewCard(skin, isServerSaved) {
      currentParsedSkin = skin;
      previewEl.style.display = 'flex';
      const colors = skin.colors || {};
      const items = skin.items || {};
      const genderLabel = skin.gender === 'female' ? '♀ Femme' : '♂ Homme';

      const swatchesHtml = COLOR_ZONES.map(function(z) {
        const hex = colors[z.id] || '#000000';
        return `
          <div class="barbofus-color-chip" title="${z.label}: ${hex}">
            <span class="barbofus-color-dot" style="background-color:${hex};"></span>
            <span>${hex}</span>
          </div>
        `;
      }).join('');

      const itemsHtml = COSMETIC_SLOTS.map(function(s) {
        const val = items[s.id] || '—';
        return `<div><span>${s.icon} <b>${s.label}:</b> ${val}</span></div>`;
      }).join('');

      previewEl.innerHTML = `
        <div class="barbofus-preview-box">
          <div class="barbofus-preview-img">
            <img src="${skin.imageFull || skin.image}" alt="${skin.name}">
          </div>
          <div class="barbofus-preview-details">
            <h4 class="barbofus-preview-title">${skin.name}</h4>
            <div class="barbofus-preview-meta">
              <span>${getClassIcon(skin.class)} ${getClassName(skin.class)}</span>
              <span>•</span>
              <span>${genderLabel}</span>
              ${skin.head ? `<span>•</span><span>${skin.head}</span>` : ''}
            </div>

            <div class="barbofus-preview-colors">
              ${swatchesHtml}
            </div>

            <div class="barbofus-preview-items">
              ${itemsHtml}
            </div>

            <div class="barbofus-preview-footer">
              <button class="barbofus-btn-primary" id="barbofus-add-to-site-btn">
                <span>💾</span>
                <span>${isServerSaved ? '✓ Skin enregistré sur le disque ! Voir dans la galerie' : 'Ajouter au site (Sauvegarde locale)'}</span>
              </button>
              <button class="barbofus-btn-secondary" id="barbofus-copy-code-btn">
                <span>📋</span>
                <span>Copier le code JS</span>
              </button>
            </div>
          </div>
        </div>
      `;

      previewEl.querySelector('#barbofus-add-to-site-btn').addEventListener('click', function() {
        if (!isServerSaved) {
          saveCustomSkin(currentParsedSkin);
        }
        closeModal();
        if (mainEl) {
          skinState.selectedClass = currentParsedSkin.class;
          renderSidebar(mainEl);
          renderGrid(mainEl);
        }
      });

      previewEl.querySelector('#barbofus-copy-code-btn').addEventListener('click', function(e) {
        const btn = e.currentTarget;
        const code = JSON.stringify(currentParsedSkin, null, 2);
        copyToClipboard(code, function() {
          const orig = btn.textContent;
          btn.textContent = '✓ Code copié !';
          setTimeout(function() { btn.textContent = orig; }, 1800);
        });
      });
    }

    // Traitement via le bouton principal "Analyser & Importer"
    fetchBtn.addEventListener('click', async function() {
      const url = urlInput.value.trim();
      if (!url) {
        showStatus("⚠️ Veuillez saisir l'URL du skin Barbofus (ex: https://barbofus.com/unity-skin/104749)", "error");
        urlInput.focus();
        return;
      }
      if (!url.includes('barbofus.com')) {
        showStatus("⚠️ L'URL doit provenir du site barbofus.com.", "error");
        urlInput.focus();
        return;
      }

      fetchBtn.disabled = true;
      showStatus("⏳ Analyse et téléchargement en cours via le serveur local...", "info");

      const classVal = classSelect.value;
      const genderVal = genderSelect.value;
      const apiUrl = '/api/import-barbofus';

      try {
        const resp = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            url: url,
            classId: classVal !== 'auto' ? classVal : null,
            gender: genderVal !== 'auto' ? genderVal : null
          })
        });

        if (!resp.ok) {
          const errData = await resp.json().catch(function() { return {}; });
          throw new Error(errData.error || ('Erreur HTTP ' + resp.status));
        }

        const data = await resp.json();
        if (!data.success || !data.skin) {
          throw new Error(data.error || "Erreur lors de l'import du skin.");
        }

        // Le skin a été téléchargé, converti en webp et enregistré par le serveur !
        const alreadyInSkins = SKINS.some(function(s) { return s.id === data.skin.id; });
        if (!alreadyInSkins) {
          SKINS.unshift(data.skin);
        }

        showStatus("🎉 Skin importé avec succès ! Images converties en WebP et enregistrées.", "success");
        renderPreviewCard(data.skin, true);
      } catch (err) {
        console.warn("Échec API import :", err);
        showStatus(`
          ⚠️ Serveur local non joignable (<code>${err.message}</code>).<br>
          💡 <b>Option 1 :</b> Démarrez le serveur avec <code>npm run serve</code> ou utilisez la commande CLI <code>npm run import:skin "${url}"</code>.<br>
          💡 <b>Option 2 :</b> Ouvrez le lien Barbofus, faites <kbd>Ctrl+U</kbd>, copiez tout le HTML et collez-le ci-dessous pour l'ajouter directement !
        `, "error");
        manualSection.style.display = 'flex';
        htmlInput.focus();
      } finally {
        fetchBtn.disabled = false;
      }
    });

    // Traitement via le bouton d'extraction manuelle HTML
    parseHtmlBtn.addEventListener('click', function() {
      const rawHtml = htmlInput.value.trim();
      if (!rawHtml) {
        showStatus("⚠️ Veuillez coller le code source HTML de la page Barbofus.", "error");
        htmlInput.focus();
        return;
      }

      try {
        const classVal = classSelect.value;
        const genderVal = genderSelect.value;
        const parsed = parseBarbofusClientHTML(rawHtml, classVal, genderVal);

        showStatus("✅ Données extraites avec succès depuis le code source HTML !", "success");
        renderPreviewCard(parsed, false);
      } catch (err) {
        console.error("Erreur parsing HTML :", err);
        showStatus("❌ Impossible d'extraire les données : " + err.message, "error");
      }
    });
  }

  // =========================================================================
  // DONNÉES DES GUIDES DOFUS (DAIGO & MÉTIERS)
  // =========================================================================
  const GUIDES_DATA = {
    videos: [
      {
        id: 'metiers-economie',
        label: '⚒️ Métiers — Du 0 Kamas au 200 (Daigo)',
        filters: [
          { id: 'all', label: 'Tout voir' },
          { id: 'theorie', label: '💡 Principes Économiques' },
          { id: 'paliers', label: '⚡ Paliers & Synergies' },
          { id: 'route', label: '🗺️ Roadmap 0 Kamas' },
          { id: 'passifs', label: '📦 Routine Passive' },
          { id: 'tierlist', label: '🏆 Tier List' }
        ],
        categories: [
          {
            id: 'guide-header',
            label: 'Guide Métiers Dofus — Économie & Optimisation',
            subcats: [
              {
                label: 'Tout ce que vous devez savoir pour monter vos métiers sans perte',
                recap: "Monter ses métiers dans Dofus fonctionne comme une <b>véritable entreprise de production</b> : stratégie, logistique, offre et demande. Plutôt que de subir des pertes financières, cette méthode repose sur la maximisation de la <b>liquidité</b>, l'anticipation des <b>synergies</b> (intégration verticale) et l'exploitation des <b>rentes de marché</b> pour amener tous ses métiers au niveau 200 en partant de 0 kamas.<br><br>🎬 <a href='https://www.youtube.com/watch?v=u2eHffxtrBw'>Voir la vidéo originale sur YouTube — Tout ce que vous devez savoir pour monter vos métiers (Daigo)</a>",
                items: []
              }
            ]
          },
          {
            id: 'theorie',
            label: '💡 Principes Économiques Fondamentaux',
            subcats: [
              {
                label: 'Les 4 Règles d\'Or de l\'Économie Dofusienne',
                recap: "Pour éviter d'immobiliser ses kamas et optimiser son temps de jeu, 4 concepts économiques doivent guider chaque décision : la liquidité des ventes, le coût d'opportunité, la vélocité du capital et la gestion de trésorerie.",
                items: [
                  {
                    tag: 'opti',
                    name: 'Volume de transaction & Liquidité',
                    desc: "Un objet très liquide s'échange rapidement sans déstabiliser son cours. Un objet à faible rotation fait peser le risque du <b>stock mort</b> : vos kamas restent bloqués en HDV sans générer de valeur."
                  },
                  {
                    tag: 'opti',
                    name: "Coût d'opportunité (Le piège du faux gratuit)",
                    desc: "Passer 1h à récolter soi-même ses ressources pour un craft rapportant 50 000 k/h alors qu'une autre activité rapporte 150 000 k/h équivaut à <b>perdre 100 000 k/h</b>. Farmez l'activité la plus lucrative et achetez les composants en HDV."
                  },
                  {
                    tag: 'metier',
                    name: 'Intégration verticale & Synergies',
                    desc: "Posséder les maillons en amont de sa chaîne de production élimine les marges payées aux intermédiaires (ex. : l'Alchimiste fabrique les potions pour le Bûcheron qui fournit le bois au Forgeron)."
                  },
                  {
                    tag: 'kamas',
                    name: 'Vélocité du capital (Cycle Achat → Craft → Vente)',
                    desc: "Vitesse à laquelle vos kamas investis reviennent avec leur bénéfice. Mieux vaut un cycle court de 2 heures avec 15% de marge (ex. substrats) qu'un item avec 80% de marge qui met une semaine à partir."
                  },
                  {
                    tag: 'base',
                    name: 'Gestion de trésorerie 80 / 20 (Loi de Pareto)',
                    desc: "<b>80% de vos kamas doivent être réinvestis</b> dans des flux de production ou en HDV (un kama qui dort rapporte 0%). Gardez <b>20% de cash liquide</b> pour saisir les opportunités imprévues (erreurs de prix, canal commerce)."
                  }
                ]
              },
              {
                label: 'Formules de Décision : Quoi Fabriquer ?',
                recap: "Ne regardez jamais la marge en pourcentage seule (un item à 80% de marge vendu 1x/semaine perd face à un item à 20% vendu 50x/jour). Raisonnez toujours en <b>moyenne sur les 30 derniers jours</b> pour lisser la volatilité :<br><br>• <b>Vente journalière moyenne :</b> <code>Volume 30 jours / 30</code><br>• <b>Marge journalière brute :</b> <code>Ventes/j × Marge nette unitaire en kamas</code> (indique le cash générable par jour)<br>• <b>Indice de profitabilité :</b> <code>Ventes/j × Marge en %</code> (arbitre le meilleur retour sur investissement sans immobiliser trop de capital)<br><br><div class='guide-callout'><b>Exemple concret :</b> L'Huile de coude génère plus de marge brute potentielle (+530k k/j vs 384k k/j), mais l'Épée de boisaille a un meilleur indice de profitabilité (13 400 vs 9 700) car elle nécessite un investissement initial bien plus faible.</div>",
                items: [
                  {
                    tag: 'kamas',
                    name: 'Marge Journalière Brute',
                    desc: "Multiplie les ventes journalières par la marge nette en kamas. C'est l'indicateur direct du cash que le produit peut injecter dans votre trésorerie chaque jour."
                  },
                  {
                    tag: 'opti',
                    name: 'Indice de Profitabilité',
                    desc: "Multiplie les ventes journalières par la marge en %. À gain brut similaire, choisissez toujours l'indice le plus haut pour engager un minimum de capital."
                  },
                  {
                    tag: 'base',
                    name: 'Actualisation des prix & Taxes de vente',
                    desc: "Baisser un prix coûte une taxe de 2% (1% sans baisse). N'actualisez que si le cours s'écarte nettement de sa moyenne sur 30 jours. Sur un marché stable, modifier sans cesse son prix détruit vos profits."
                  }
                ]
              },
              {
                label: 'D\'où Vient le Profit ? (Les 3 Socles Réels)',
                recap: "Le risque et l'innovation n'étant pas protégés dans un jeu vidéo (pas de propriété intellectuelle), le bénéfice durable repose sur 3 leviers : l'information, la compétence et la puissance financière.",
                items: [
                  {
                    tag: 'kamas',
                    name: 'Rente Informationnelle (Le Brisage)',
                    desc: "Vous payez l'information en brisant des équipements à l'aveugle. Dès qu'un bon coefficient de runes est déniché, vous captez une rente temporaire jusqu'à ce que d'autres joueurs découvrent le filon."
                  },
                  {
                    tag: 'metier',
                    name: 'Compétence Technique (Forgemagie & Élevage)',
                    desc: "Maîtriser les calculs de puits, poids de runes et over-stats constitue une <b>barrière à l'entrée durable</b>. Ce savoir-faire ne se copie pas d'un simple clic : sa marge reste pérenne dans le temps."
                  },
                  {
                    tag: 'kamas',
                    name: 'Puissance du Capital (Activité de Grossiste)',
                    desc: "Acheter en gros volumes permet de négocier des prix bas et de revendre au détail ou par lots (1, 10, 100) avec une surprime unitaire, apportant de la liquidité tout en dégageant un profit automatique."
                  }
                ]
              },
              {
                label: 'Diversification des Ventes en HDV',
                recap: "Ne mettez pas tous vos œufs dans le même panier. Pour que vos rentrées de kamas soient constantes même quand un secteur ralentit, diversifiez votre capital selon la vitesse de vente des marchés :<table><thead><tr><th>Marché HDV</th><th>Allocation</th><th>Comportement & Intérêt</th></tr></thead><tbody><tr><td><b>HDV Ressources</b></td><td>50 %</td><td>Rotation ultra-rapide, flux de kamas continu au quotidien</td></tr><tr><td><b>HDV Runes</b></td><td>30 %</td><td>Issu du brisage régulier, très grosse liquidité</td></tr><tr><td><b>HDV Équipements</b></td><td>15 %</td><td>Items de quête BL et pièces FM à forte plus-value</td></tr><tr><td><b>Divers / Consommables</b></td><td>5 %</td><td>Pierres d'âmes, potions, huiles, cosmétiques</td></tr></tbody></table>",
                items: []
              }
            ]
          },
          {
            id: 'paliers',
            label: '⚡ Paliers de Puissance & Synergies',
            subcats: [
              {
                label: 'Power Spikes : La Progression Non-Linéaire',
                recap: "Dans Dofus, monter un métier niveau par niveau sans plan est une perte de temps et de kamas. Il faut cibler des <b>paliers stratégiques</b> qui débloquent des crafts très rentables ou des recettes à ratio XP/kamas imbattable.",
                items: [
                  {
                    tag: 'opti',
                    name: 'Métiers de Craft d\'équipements',
                    desc: "<b>Inutiles avant le niveau 60.</b> Au niveau 60, accès au brisage BL qui débloque quasi toutes les runes du jeu. Nouveaux pics au niveau 110 (forte demande de stuff) et 150-200."
                  },
                  {
                    tag: 'metier',
                    name: 'Métiers de Forgemagie (Costumage, Cordo...)',
                    desc: "Suivent la demande d'équipement des joueurs. Le <b>palier 110 est roi</b> : forte demande, coût abordable et FM accessible pour sortir des over-stats très recherchées."
                  },
                  {
                    tag: 'farming',
                    name: 'Alchimiste (Paliers 30 / 60 / 100)',
                    desc: "<b>30 :</b> Potions de souvenir (clé des substrats). <b>60 :</b> Potion TP village éleveurs (ratio record de 1100 XP / 1000 k) et teinture rouge. <b>100 :</b> Edelweiss (1ère récolte rentable)."
                  },
                  {
                    tag: 'farming',
                    name: 'Bûcheron (Paliers 40 / 90+)',
                    desc: "<b>40 :</b> Substrat de bocage (premier substrat très rentable). <b>90+ :</b> Pins et bois nobles dont la récolte rapporte gros. Progression naturelle ensuite tous les 20 niveaux via les substrats."
                  },
                  {
                    tag: 'farming',
                    name: 'Mineur (Paliers 40 / 100-120)',
                    desc: "<b>40 :</b> Alliage Ébonite. <b>100-120 :</b> Étain, bauxite et minerais nobles. Métier autarcique : peu de synergies au début, explose en récolte à haut niveau."
                  },
                  {
                    tag: 'farming',
                    name: 'Paysan (Paliers 32 / 100 / 160)',
                    desc: "<b>32 :</b> Huiles de coude et de noix (pierres d'âmes). <b>100 :</b> Seigle. <b>160 :</b> Céréales rares. Démarrage très accessible, synergies permanentes avec l'alchimiste."
                  },
                  {
                    tag: 'farming',
                    name: 'Pêcheur (Paliers 80 / 95 / 120+)',
                    desc: "<b>80 & 120 :</b> Brandades (craft full XP à très bas coût). <b>95 :</b> Jus de poisson (1er craft rentable). Très faible avant le niveau 100, à monter plus tardivement.",
                    warn: true
                  }
                ]
              },
              {
                label: 'Le Réseau de Synergies Croisées',
                recap: "Les métiers s'alimentent mutuellement en boucle fermée :<br><br>• <b>Le couple Alchimiste ↔ Paysan :</b> Doit progresser avec 20 à 40 niveaux d'écart. L'Alchimiste fournit des ressources pour le craft Paysan à n+20 (le craft Paysan 120 demande des récoltes Alchi 100). En retour, le Paysan 100/120 fournit les céréales pour les potions Alchi 95/135.<br>• <b>La chaîne Alchimiste → Bûcheron :</b> Alchi 30 (souvenir) → Substrats Bûch 40/60 ; Alchi 95 (vieillesse) → Substrats Bûch 100 ; Alchi 135 (ancêtres) → Substrats Bûch 140/160 ; Alchi 175 (glandage) → Substrats Bûch 180/200.<br>• <b>XP Dégressive (Dofus 3 / Unity) :</b> Plus votre niveau dépasse celui d'une recette, plus l'XP accordée baisse drastiquement. Utilisez le calculateur DofusDB pour optimiser vos quantités de crafts.",
                items: []
              }
            ]
          },
          {
            id: 'route',
            label: '🗺️ Roadmap 0 Kamas : Progression Étape par Étape',
            subcats: [
              {
                label: 'Phase 1 : Le Démarrage à Nu — Incarnam & Début Astrub (0k)',
                recap: "Objectif : Créer le premier apport de trésorerie sans aucun investissement.<br><br>1. Équipez une arme de chasse dès Incarnam. Farmez les mobs pour préparer <b>77 bouillons de chair</b> → <b>Chasseur niv. 10</b>. Vendez les drops pour constituer votre premier capital.<br>2. Montez <b>Mineur niv. 10</b> sur les filons regroupés d'Incarnam.<br>3. Récoltez blé et orties sur les maps communes. Vendez les orties brutes en HDV. Craftez du pain avec le blé (même à perte) pour <b>rusher Paysan niv. 32</b>.<br>4. <span class='guide-badge-pill kamas'>Flux Passif #1</span> Dès le niveau 32 Paysan atteint, craftez et mettez en vente des <b>Huiles de coude et de noix</b> (ingrédients incontournables des pierres d'âmes). Réapprovisionnez dès que vendu.",
                items: [
                  {
                    tag: 'farming',
                    name: 'Chasseur niv. 10 (77 bouillons)',
                    desc: "Le farm Incarnam génère viandes et drops vendables pour amorcer la trésorerie de départ sans aucun coût."
                  },
                  {
                    tag: 'opti',
                    name: 'Rush Paysan 32 (Pain à perte assumée)',
                    desc: "Le pain est produit à perte contrôlée dans l'unique but de franchir immédiatement le cap des huiles lucratives."
                  },
                  {
                    tag: 'kamas',
                    name: 'Flux Passif 1 : Huiles de coude & noix',
                    desc: "Premier investissement passif à réapprovisionner en permanence en HDV consommables."
                  }
                ]
              },
              {
                label: 'Phase 2 : Le Moteur Alchimiste & Bûcheron (Forêt d\'Astrub)',
                recap: "Objectif : Débloquer la boucle des substrats de bois.<br><br>1. Récoltez en Forêt d'Astrub (maps combinant bois et plantes) et cueillez de l'orge. Vendez orties, frêne et orge jusqu'à <b>Alchi niv. 20</b>.<br>2. <b>Investissez 30 000 k</b> pour rusher <b>Alchi niv. 30</b> : craftez 100 potions chasseur de trésor OU 190 potions destination inconnue.<br>3. <b>Stockage :</b> Arrêtez de vendre vos orties et sauges : conservez-les pour fabriquer vos <b>potions de souvenir</b> gratuites.<br>4. Montez <b>Bûcheron niv. 20 → 40</b> grâce à ces substrats faits maison.<br>5. <span class='guide-badge-pill kamas'>Flux Passif #2</span> Déblocage des <b>Substrats de bocage (niv. 40)</b>. Achetez les matières premières en HDV, craftez et revendez directement.<br>6. Farmez les <i>Souterrains d'Astrub</i> (viandes niveau 10 + ressources) pour amener votre capital à <b>200 000 kamas</b>.",
                items: [
                  {
                    tag: 'opti',
                    name: 'Injection 30k k : Alchimiste niv. 20 → 30',
                    desc: "100 potions chasseur de trésor ou 190 destination inconnue pour déverrouiller immédiatement les potions de souvenir."
                  },
                  {
                    tag: 'kamas',
                    name: 'Flux Passif 2 : Substrats de bocage 40',
                    desc: "Cycle d'achat-craft-vente ultra-court sur 5 ressources très liquides (orties, sauge, frêne, châtaignier, noyer)."
                  },
                  {
                    tag: 'farming',
                    name: 'Souterrains d\'Astrub (Chasseur 10)',
                    desc: "Farm des viandes niveau 10 et drops de valeur pour franchir le palier d'entrée de 200 000 kamas."
                  }
                ]
              },
              {
                label: 'Phase 3 : Bonta, Métiers de Craft & Brisage BL (Seuil : 200 000 k)',
                recap: "Objectif : Transformer des équipements à bas coût en runes à forte valeur.<br><br>1. Rendez-vous aux ateliers de Bonta avec vos 200k k. Choisissez un premier métier (ex. : <b>Bijoutier</b>) :<br>   • <b>Niv. 1 à 25 :</b> Recettes purement axées sur l'XP à coût minimal.<br>   • <b>Niv. 25 à 50 :</b> Craftez des séries d'amulettes/anneaux BL et <b>brisez-les</b>. Vendez les runes en HDV.<br>2. Dès que les runes sont vendues et que les 200k k sont reconstitués, dupliquez sur les autres métiers : <b>Tailleur → Cordonnier → Sculpteur → Forgeron</b>.<br>3. <span class='guide-badge-pill kamas'>Flux Passif #3</span> Vos métiers de craft sont niveau 50. Réalisez chaque jour quelques tests de brisage BL pour dénicher les coefficients cachés.<br>4. La fabrication répétée des substrats 40 fait naturellement passer votre <b>Bûcheron niveau 60</b> → activez les <b>Substrats 60</b> en passif.",
                items: [
                  {
                    tag: 'metier',
                    name: 'Bijoutier, Tailleur, Cordonnier niv. 50',
                    desc: "Leveling 1-25 craft XP, 25-50 brisage BL. Les runes se vendent rapidement et financent les métiers suivants."
                  },
                  {
                    tag: 'kamas',
                    name: 'Flux Passif 3 : Brisage BL quotidien',
                    desc: "Séance de brisage quotidienne pour approvisionner l'HDV runes et capter la rente informationnelle."
                  },
                  {
                    tag: 'metier',
                    name: 'Bûcheron niv. 60 (Substrats 60)',
                    desc: "Montée automatique grâce aux ventes de substrats 40. Vous ajoutez les substrats 60 à vos flux passifs."
                  }
                ]
              },
              {
                label: 'Phase 4 : L\'Effet de Levier du Million & Mineur 40 (Seuil : 1M k)',
                recap: "Objectif : Débloquer les alliages de mineur via un investissement à perte contrôlée.<br><br>1. Faites tourner vos flux passifs (huiles, substrats 40/60, brisage BL) jusqu'à atteindre <b>1 000 000 k</b>.<br>2. Vérifiez en HDV que l'<b>Ébonite</b> offre une marge positive (idéalement 20-25%).<br>3. Investissez 500k à 600k k à perte pour propulser le Mineur :<br>   • 59 Féneuses/Ferrites (niv. 10 → 20)<br>   • 65 Aluminites (niv. 20 → 30)<br>   • 171 Aluminites (niv. 30 → 40)<br>4. <span class='guide-badge-pill kamas'>Flux Passif #4</span> Craftez et vendez l'<b>Ébonite</b> (Mineur 40) en continu jusqu'au up 60 pour débloquer l'alliage suivant.<br><div class='guide-callout'>À ce stade, le potentiel théorique de marge de vos métiers dépasse largement les <b>10 millions de kamas par jour</b>.</div>",
                items: [
                  {
                    tag: 'opti',
                    name: 'Rush Mineur niv. 10 → 40 (-500k k)',
                    desc: "Perte délibérée et entièrement amortie par les autres passifs pour débloquer l'Ébonite au niveau 40."
                  },
                  {
                    tag: 'kamas',
                    name: 'Flux Passif 4 : Alliage Ébonite 40',
                    desc: "Mise en vente en continu en HDV Mineur jusqu'au déblocage du palier d'alliage 60+."
                  }
                ]
              },
              {
                label: 'Phase 5 : Façonneur, Trophées & Écosystème Niv. 100',
                recap: "Objectif : Boucler les synergies avancées Paysan/Alchimiste/Bûcheron.<br><br>1. <b>La boucle Alchi / Paysan / Bûcheron :</b><br>   • Up <b>Alchimiste 80</b> → permet <b>Paysan 100</b>.<br>   • Céréales Paysan 100 → Potions de vieillesse (<b>Alchimiste 95</b>).<br>   • Potions de vieillesse → <b>Substrats Bûcheron 100</b>.<br>2. Montez <b>Façonneur niv. 1 à 50</b> via des boucliers BL, puis craftez et vendez les <b>Trophées niveau 50</b> (très forte rotation en HDV).<br>3. Vos métiers de craft atteignent le <b>niveau 100</b> grâce à vos séances régulières de brisage, élargissant votre catalogue d'objets testables.",
                items: [
                  {
                    tag: 'metier',
                    name: 'Façonneur 50 & Trophées 50',
                    desc: "Boucliers BL pour up 50, puis vente en continu des Trophées 50 très prisés des joueurs en leveling."
                  },
                  {
                    tag: 'opti',
                    name: 'Boucle Alchi 95 / Bûcheron 100',
                    desc: "Les potions de vieillesse ouvrent les substrats 100 en boucle fermée sans dépendre du marché."
                  }
                ]
              },
              {
                label: 'Phase 6 : L\'Assaut sur la Forgemagie (Seuil : 5M k)',
                recap: "Objectif : Conquérir la rente de compétence la plus rentable du jeu.<br><br>1. <b>Ne commencez pas la FM avec de petites économies :</b> Attendez d'avoir accumulé 5 millions de kamas en trésorerie.<br>2. <b>Règle du One-Shot :</b> Montez un premier métier de FM <b>directement au niveau 110 d'une seule traite</b> (commencez par <b>Costumage</b>).<br>3. Réalisez des over-stats propres sur les équipements du palier 110 (gros volume de vente, FM facile et marge très élevée).<br>4. <b>Règle d'or :</b> Attendez de vendre vos équipements FM et de reconstituer vos 5M k de base avant de monter le métier suivant (Cordomage, puis Joaillomage).",
                items: [
                  {
                    tag: 'kamas',
                    name: 'Rush FM Direct Niv. 110 (Costumage)',
                    desc: "Monter d'un coup au niveau 110 pour attaquer directement la tranche de stuff la plus demandée du jeu."
                  },
                  {
                    tag: 'base',
                    name: 'Reconstitution stricte du capital',
                    desc: "Ne lancez le 2e métier de FM qu'après avoir retrouvé vos 5M de trésorerie initiale via les ventes FM."
                  }
                ]
              },
              {
                label: 'Phase 7 : Finition 200 & Métiers Secondaires',
                recap: "Objectif : Clôturer les niveaux 200 et maximiser les flux passifs.<br><br>1. <b>Derniers substrats Bûcheron :</b> Paysan 120 → Alchi 135 (ancêtres) → Substrats 140/160. Alchi 140 → Paysan 180 → Alchi 175 (glandage) → Substrats 180/200.<br>2. <b>Mineur 120 à 200 :</b> L'étain, la bauxite et les minerais nobles transforment la récolte pure en jackpot.<br>3. <b>Façonneur 100+ :</b> Trophées 100 et boucliers HL.<br>4. <b>Métiers secondaires :</b> Pêcheur 100+ (jus de poisson 95), Chasseur HL, et FM d'armes (Forgemage, Sculptemage, Façonmage).",
                items: [
                  {
                    tag: 'metier',
                    name: 'Potions Ancêtres & Glandage',
                    desc: "Alimente les substrats 140 à 200 pour finaliser le Bûcheron en profit total."
                  },
                  {
                    tag: 'farming',
                    name: 'Mineur Récolte 120-200',
                    desc: "L'étain et les minerais précieux transforment le mineur en formidable pourvoyeur de kamas bruts."
                  },
                  {
                    tag: 'metier',
                    name: 'FM d\'Armes & Trophées 100',
                    desc: "Sculptemage, Forgemage et Façonmage complètent la collection pour capter chaque besoin du serveur."
                  }
                ]
              }
            ]
          },
          {
            id: 'passifs',
            label: '📦 Routine des Flux Passifs Quotidiens',
            subcats: [
              {
                label: 'Votre Magasin Automatique en HDV',
                recap: "Une fois la machine en place, vous ne perdez plus votre temps à farmer manuellement. Votre routine quotidienne se résume à réapprovisionner vos rayons dès que les ventes tombent :<table><thead><tr><th>Catégorie</th><th>Items prioritaires</th><th>Métier & Palier requis</th></tr></thead><tbody><tr><td><b>Consommables</b></td><td>Huile de coude, Huile de noix, Jus de poisson</td><td>Paysan 32, Pêcheur 95</td></tr><tr><td><b>Substrats</b></td><td>Bocage (40), puis 60, 100, 140, 180, 200</td><td>Bûcheron + Alchimiste</td></tr><tr><td><b>Alliages</b></td><td>Ébonite (40), puis alliages 60+</td><td>Mineur</td></tr><tr><td><b>Trophées</b></td><td>Trophées 50 & 100, Boucliers prisés</td><td>Façonneur 50+</td></tr><tr><td><b>Runes</b></td><td>Runes de brisage BL/ML découvertes</td><td>Bijoutier, Tailleur, Cordo 50+</td></tr><tr><td><b>Équipements FM</b></td><td>Items 110 over-stats à forte rotation</td><td>Costumage, Cordomage, Joaillomage</td></tr></tbody></table>",
                items: [
                  {
                    tag: 'kamas',
                    name: 'Huiles de coude & noix',
                    desc: "Vente en continu pour les éleveurs et captureurs d'âmes. Production instantanée, composants très accessibles."
                  },
                  {
                    tag: 'opti',
                    name: 'Substrats de bois (40 à 200)',
                    desc: "Le meilleur cycle d'achat-craft-vente de Dofus. Des millions de volume mensuel, zéro variable aléatoire."
                  },
                  {
                    tag: 'metier',
                    name: 'Alliages de mineur (Ébonite 40+)',
                    desc: "À produire en flux tendu dès que la marge nette en HDV Mineur est supérieure à 20%."
                  },
                  {
                    tag: 'kamas',
                    name: 'Trophées 50 & 100',
                    desc: "Indispensables pour tous les joueurs en cours de leveling. Rotation rapide à cours très stable."
                  },
                  {
                    tag: 'opti',
                    name: 'Runes issues du brisage',
                    desc: "Catalogue de runes alimenté chaque jour par vos tests de brisage sur les équipements BL/ML."
                  },
                  {
                    tag: 'kamas',
                    name: 'Items FM 110 over-stats',
                    desc: "Le sommet de la valeur ajoutée : convertir des runes et des items bruts en une rentabilité colossale."
                  }
                ]
              }
            ]
          },
          {
            id: 'tierlist',
            label: '🏆 Tier List des Métiers (Départ de Zéro)',
            subcats: [
              {
                label: 'Classement selon Accessibilité, Facilité, Rentabilité et Synergies',
                recap: "Évaluation globale pour un personnage débutant sans capital. Avec un gros compte déjà riche, les métiers de récolte baissent et les métiers de Forgemagie occupent sans conteste le sommet absolu.",
                items: [
                  {
                    tier: 'S',
                    name: 'Chasseur',
                    desc: "Investissement zéro, leveling passif en combattant des monstres. Génère un flux de kamas constant sans coûter la moindre ressource. Le meilleur revenu passif du jeu."
                  },
                  {
                    tier: 'S',
                    name: 'Joaillomage, Costumage, Cordomage',
                    desc: "Rente de compétence durable protégée par une vraie barrière à l'entrée. Demande colossale sur les items 110, 150 et 190+. Les rois incontestés du profit."
                  },
                  {
                    tier: 'A',
                    name: 'Bûcheron',
                    desc: "Au cœur de l'économie grâce aux substrats ultra-liquides. Devient extrêmement rémunérateur en récolte pure dès le niveau 90+ (bois de pin, etc.)."
                  },
                  {
                    tier: 'A',
                    name: 'Paysan & Alchimiste',
                    desc: "Démarrage rapide et gratuit. Synergies croisées indispensables pour alimenter les potions et substrats. Très faciles d'accès en début de serveur."
                  },
                  {
                    tier: 'B',
                    name: 'Façonneur & Métiers de Craft (Bijoutier, Tailleur...)',
                    desc: "Nécessitent un capital initial mais ouvrent la voie aux trophées et au brisage d'items BL/ML générateur de runes dès le niveau 50-60."
                  },
                  {
                    tier: 'B',
                    name: 'Mineur',
                    desc: "Évolue en autarcie. Pénible et coûteux avant le niveau 40 (Ébonite), mais devient une mine d'or en récolte pure aux niveaux 120-160+ (étain, bauxite)."
                  },
                  {
                    tier: 'D',
                    name: 'Pêcheur',
                    desc: "Progression lente, aucun craft rentable avant le niveau 95 (jus de poisson). Les poissons rares sur protecteurs ont un ratio temps/kamas trop défavorable.",
                    warn: true
                  }
                ]
              }
            ]
          }
        ],
        legend: [
          { label: 'Tier S — Métier indispensable / rentabilité maximale', color: 'var(--dofus-gold)' },
          { label: 'Tier A — Pilier économique / synergies fortes', color: 'var(--dofus-emerald)' },
          { label: 'Tier B — Métier de transition / investissement requis', color: 'var(--dofus-teal)' },
          { label: 'Tier D — Faible rentabilité horaire / secondaire', color: 'var(--dofus-crimson)' },
          { label: 'Opti / Kamas — Leviers financiers et rentes', color: 'var(--dofus-gold)' }
        ]
      },
      {
        id: 'mineur-200',
        label: '⛏️ Mineur 1 à 200 — Chemins & Mines Secrètes (Mercato)',
        filters: [
          { id: 'all', label: 'Tout voir' },
          { id: 'boucle1-80', label: '⛏️ Boucle Niv. 1 à 80' },
          { id: 'boucle80-200', label: '🌋 Chemin Niv. 80 à 200' },
          { id: 'thl', label: '❄️ Rush THL (Albuera & Sakaï)' },
          { id: 'secretes', label: '🤫 Mines Secrètes & Raccourcis' },
          { id: 'conseils', label: '💡 Astuces & Économie' }
        ],
        categories: [
          {
            id: 'guide-header',
            label: 'Guide Mineur 1 à 200 — Chemins Optimisés & Mines Secrètes',
            subcats: [
              {
                label: 'Atteindre le niveau 200 en 1 semaine et dominer le marché des minerais THL',
                recap: "Retour d'expérience et chemins ultra-optimisés par <b>Mercato</b>, membre du <b>Top 10 Mineur</b> en début de serveur ayant atteint le <b>niveau 200 en 1 semaine</b>.<br><br>Ce guide détaille les circuits de récolte en boucle fermée, la localisation exacte des filons stratégiques, les passages secrets méconnus et les raccourcis clés pour devancer la concurrence et générer des millions de kamas en début de serveur.<br><br>🎬 <a href='https://www.youtube.com/watch?v=zkQIW31S00M'>Voir la vidéo originale sur YouTube — Monter le Métier Mineur 200 en 1 Semaine (Mercato)</a>",
                items: []
              }
            ]
          },
          {
            id: 'boucle1-80',
            label: '⛏️ Boucle Optimisée Niv. 1 à 80 (Le Circuit des 10 Mines)',
            subcats: [
              {
                label: 'Stratégie de la Phase 1 à 80 : Rythme & Vélocité',
                recap: "La tranche 1 à 80 est la plus longue et compétitive en début de serveur. Pour maximiser votre XP et vos récoltes :<br><br>• <b>Ne jamais camper sur les respawns :</b> Enchaînez les 10 mines du circuit en continu. Si une mine est déjà squattée, sautez-la directement pour conserver votre tempo.<br>• <b>Rotation d'inventaire :</b> À chaque tour complet des 10 mines, videz en banque ou transformez vos minerais en <b>alliages</b> pour accumuler un gros bonus d'XP métier.<br>• <b>Pods maximum :</b> Équipez-vous dès le départ avec des sacs à pods, ceintures pods et stats adaptées.",
                items: []
              },
              {
                label: 'La Route des 10 Mines (Coordonnées & Minerais)',
                recap: "<table><thead><tr><th>#</th><th>Zone & Coordonnées</th><th>Minerais principaux</th><th>Conseils & Spécificités</th></tr></thead><tbody><tr><td><b>1</b></td><td><b>Mine d'Amakna</b> <code>[0, 3]</code></td><td>Fer exclusif (100 %)</td><td>Spot de base pour up 1 à 20. Idéal pour stationner un perso secondaire.</td></tr><tr><td><b>2</b></td><td><b>Mine Donjon Larves</b> <code>[-2, -5]</code></td><td>Fer, Cuivre, Bronze, Manganèse, Cobalt</td><td>Contestez le manganèse aux joueurs AFK sur la map.</td></tr><tr><td><b>3</b></td><td><b>Mine Secrète Abraknydes</b> <code>[-14, -9]</code></td><td>Cuivre, Bronze, Cobalt, Manganèse</td><td><b>Cliquer derrière le rocher</b>. Très souvent pleine la nuit et tôt le matin.</td></tr><tr><td><b>4</b></td><td><b>Mine du Lac de Cania</b> <code>[-1, -42]</code></td><td>Fer, Cuivre, Bronze, Cobalt, Manganèse</td><td>Très fréquentée mais très dense en filons variés.</td></tr><tr><td><b>5</b></td><td><b>Mine des Canigs</b> <code>[1, -54]</code></td><td>Tous minerais (1 à 200)</td><td><b>L'incontournable absolue</b> : vous y reviendrez du niveau 1 au niveau 200.</td></tr><tr><td><b>6</b></td><td><b>Mine Dopeuls Nord</b> <code>[-32, -8]</code></td><td>Fer, Cuivre, Bronze, Cobalt</td><td>Gros gisement de Cobalt souvent disponible.</td></tr><tr><td><b>7</b></td><td><b>Mine Dopeuls Sud</b> <code>[-29, -11]</code></td><td>Fer, Cuivre, Bronze, Cobalt</td><td>Deuxième mine Dopeuls pour blinder les réserves de Cobalt.</td></tr><tr><td><b>8</b></td><td><b>Landes de Sidimote</b> <code>[-23, 21]</code></td><td>Bronze, Cobalt</td><td>Gisement massif de Bronze et Cobalt pour vos alliages.</td></tr><tr><td><b>9</b></td><td><b>Mine Secrète de Lave</b> <code>[-28, 28]</code></td><td>Bronze massif (100 %)</td><td><b>Cliquer derrière le lac de lave</b>. Rasez tout le Bronze sans exception.</td></tr><tr><td><b>10</b></td><td><b>Tunnel Carton-Pâte & Donjon DC</b> <code>[1, 32]</code></td><td>Bronze, Cuivre, Fer, Cobalt</td><td>Vider le tunnel vers Carton-Pâte puis la mine du Donjon Dragon Cochon.</td></tr></tbody></table>",
                items: [
                  {
                    tag: 'farming',
                    name: 'Mine d\'Amakna [0, 3] — Rush Fer 1-20',
                    desc: "Mine composée exclusivement de Fer. Essentielle pour franchir les 20 premiers niveaux d'une traite."
                  },
                  {
                    tag: 'opti',
                    name: 'Mine Secrète Abraknydes [-14, -9]',
                    desc: "Entrée cachée derrière le rocher. Filon très riche en Cuivre, Bronze, Cobalt et Manganèse aux heures calmes."
                  },
                  {
                    tag: 'farming',
                    name: 'Mine des Canigs [1, -54] — Le Pilier 1 à 200',
                    desc: "La mine la plus complète du jeu. Elle abrite l'ensemble des minerais indispensables tout au long de votre leveling."
                  },
                  {
                    tag: 'farming',
                    name: 'Mines Dopeuls [-32, -8] & [-29, -11]',
                    desc: "Parfaites pour accumuler un stock massif de Cobalt, composant critique et très convoité."
                  },
                  {
                    tag: 'opti',
                    name: 'Mine Secrète du Lac de Lave [-28, 28]',
                    desc: "Accès dissimulé derrière le lac de lave. Véritable réserve géante de Bronze à récolter intégralement."
                  }
                ]
              }
            ]
          },
          {
            id: 'boucle80-200',
            label: '🌋 Progression & Chemin Niv. 80 à 200',
            subcats: [
              {
                label: 'Principe d\'Évolution : Transition & Nouveaux Minerais',
                recap: "À partir du niveau 80, la formule s'adapte :<br><br>1. <b>Conservation des anciens minerais :</b> Continuez à ramasser les minerais BL/ML qui composent les alliages de votre tranche de niveau.<br>2. <b>Rush systématique des nouveaux minerais :</b> Dès qu'un minerai est débloqué (Étain, Argent, Bauxite, Or, Silicate, Dolomite), intégrez immédiatement son spot dans votre boucle.<br>3. <b>Exploitation des heures creuses :</b> Les mines d'étain et de bauxite étant très disputées, privilégiez le farm tôt le matin ou tard dans la nuit.",
                items: []
              },
              {
                label: 'La Grande Boucle 80-200 Étape par Étape',
                recap: "<table><thead><tr><th>Étape</th><th>Zone & Coordonnées</th><th>Minerais ciblés</th><th>Recommandations</th></tr></thead><tbody><tr><td><b>1</b></td><td><b>Mine des Canigs</b> <code>[1, -54]</code></td><td>Mix complet</td><td>Point de départ classique : récoltez anciens et nouveaux minerais.</td></tr><tr><td><b>2</b></td><td><b>Massif de Cania</b> <code>[-20, -20]</code></td><td>Argent, Bauxite</td><td>Mine clé très prisée. À faire de préférence aux heures creuses.</td></tr><tr><td><b>3</b></td><td><b>Mines des Dopeuls</b> <code>[-32, -8] & [-29, -11]</code></td><td>Fer, Cuivre, Bronze, Cobalt, Manganèse</td><td>Maintien régulier du stock de minerais indispensables aux alliages.</td></tr><tr><td><b>4</b></td><td><b>Massif de Cania</b> <code>[-21, -7]</code></td><td>Étain massif</td><td>Gros gisement d'Étain, composant phare de cette tranche.</td></tr><tr><td><b>5</b></td><td><b>Landes de Sidimote</b> <code>[-26, 5]</code></td><td>Étain, Manganèse</td><td>Ajout indispensable à la boucle Sidimote pour l'Étain et le Manganèse.</td></tr><tr><td><b>6</b></td><td><b>Territoire des Gisgoules</b> <code>[17, 21]</code></td><td>Argent, Bauxite</td><td>Excellent spot pour consolider les stocks d'Argent et de Bauxite.</td></tr><tr><td><b>7</b></td><td><b>Carton-Pâte & Saharach</b> <code>[-16, 60]</code></td><td>Or, Bronze</td><td>Traverser le chemin de Carton-Pâte puis miner l'Or dans la mine de Saharach.</td></tr><tr><td><b>8</b></td><td><b>Île des Wabbits</b> <code>[23, -4]</code></td><td>Argent, Cobalt, Manganèse</td><td>Située à 2 maps à gauche du Zaap principal. Souvent pleine et très rentable.</td></tr><tr><td><b>9</b></td><td><b>Terredala (Pandala)</b></td><td>Silicate, Dolomite</td><td>Minerais nobles très rares : à miner absolument dès que vous les croisez.</td></tr></tbody></table>",
                items: [
                  {
                    tag: 'farming',
                    name: 'Massif de Cania [-20, -20] — Argent & Bauxite',
                    desc: "La référence pour l'Argent et la Bauxite. Crucial pour tous vos alliages intermédiaires et HL."
                  },
                  {
                    tag: 'farming',
                    name: 'Massif de Cania [-21, -7] — Gisement d\'Étain',
                    desc: "Mine saturée en Étain. Fréquentation très élevée : ciblez les créneaux matinaux ou nocturnes."
                  },
                  {
                    tag: 'farming',
                    name: 'Saharach [-16, 60] — Filon d\'Or',
                    desc: "Mine principale pour l'Or, complétée par la récolte tout le long du chemin de Carton-Pâte."
                  },
                  {
                    tag: 'farming',
                    name: 'Île des Wabbits [23, -4] — Argent & Manganèse',
                    desc: "Mine rapide d'accès (2 maps à gauche du Zaap) fournissant de l'Argent, du Cobalt et du Manganèse en quantité."
                  },
                  {
                    tag: 'opti',
                    name: 'Terredala (Pandala) — Silicate & Dolomite',
                    desc: "Ressources rares et chères. Même si vous n'en avez pas l'utilité immédiate, récoltez-les sans hésiter pour la suite."
                  }
                ]
              }
            ]
          },
          {
            id: 'thl',
            label: '❄️ Rush THL (Niveaux 170 à 200 : Albuera & Sakaï)',
            subcats: [
              {
                label: 'Les 3 Mines Stratégiques des Niveaux 170-200',
                recap: "Dans les 30 derniers niveaux, 3 mines dédiées aux minerais THL permettent d'achever le leveling 200 tout en s'assurant le monopole des minerais les plus chers :<br><br>• <b>Île d'Albuera <code>[33, -70]</code> (Archipel de Valonia) :</b> Prendre le bateau vers Albuera. Récoltez tout le <b>Cendre-pierre</b> présent.<br>• <b>Île de Sakaï (Mine Nord) <code>[-50, -45]</code> :</b> <span class='guide-badge-pill opti'>Ordre Crucial</span> À faire <b>en premier</b> car la téléportation vers le Havresac y est bloquée.<br>• <b>Île de Sakaï (Mine Sud) <code>[-51, -44]</code> :</b> À faire <b>en second</b> pour terminer la tournée, car le TP Havresac y est autorisé pour repartir immédiatement.",
                items: [
                  {
                    tag: 'farming',
                    name: 'Albuera [33, -70] — Cendre-Pierre',
                    desc: "Accès par bateau depuis Valonia. Filon incontournable pour récolter le Cendre-pierre THL."
                  },
                  {
                    tag: 'opti',
                    name: 'Sakaï Nord [-50, -45] — Étape 1 (Havresac Bloqué)',
                    desc: "Commencez impérativement par cette mine car la téléportation vers le Havresac y est impossible."
                  },
                  {
                    tag: 'opti',
                    name: 'Sakaï Sud [-51, -44] — Étape 2 (Sortie Havresac)',
                    desc: "Terminez votre run Sakaï par cette mine : le TP Havresac fonctionne, permettant un retour instantané en banque."
                  }
                ]
              }
            ]
          },
          {
            id: 'secretes',
            label: '🤫 Mines Secrètes & Raccourcis Clés',
            subcats: [
              {
                label: 'Les Passages Secrets Méconnus',
                recap: "L'avantage concurrentiel d'un mineur repose sur sa connaissance des accès cachés et des raccourcis de transport pour devancer les autres joueurs :",
                items: [
                  {
                    tag: 'opti',
                    name: 'Mine Secrète d\'Abraknydes [-14, -9]',
                    desc: "Cliquer derrière le gros rocher de la map pour entrer dans une mine généreuse en Cuivre, Bronze, Cobalt et Manganèse."
                  },
                  {
                    tag: 'opti',
                    name: 'Mine Secrète de Lave [-28, 28]',
                    desc: "Cliquer directement derrière le lac de lave dans les Landes de Sidimote pour accéder à une mine 100% Bronze."
                  },
                  {
                    tag: 'opti',
                    name: '2 Mines Secrètes du Nord Wabbit',
                    desc: "Situées tout au nord de l'île Wabbit. Débloquez le Zaap <i>Laboratoire abandonné</i> pour y accéder rapidement."
                  },
                  {
                    tag: 'opti',
                    name: 'Raccourci Consommable Cokawotte',
                    desc: "Utilisez le consommable Cokawotte (prérequis Dofus Cawotte) pour vous téléporter directement au nord de l'île et farmer ces mines souvent pleines avec étoiles."
                  }
                ]
              }
            ]
          },
          {
            id: 'conseils',
            label: '💡 Astuces d\'Optimisation & Économie',
            subcats: [
              {
                label: 'Conseils Pratiques du Top 10 Mineur',
                recap: "Monter 200 en une semaine exige une discipline stricte sur le temps passé et la rentabilité horaire :",
                items: [
                  {
                    tag: 'opti',
                    name: 'Règle du non-stop (Zéro camp)',
                    desc: "Ne perdez jamais de temps à attendre le repop d'un minerai. Tournez en boucle continue sur votre circuit de mines."
                  },
                  {
                    tag: 'opti',
                    name: 'Astuce Multi-Compte (Mine d\'Amakna)',
                    desc: "En multi-compte, laissez un personnage secondaire stationné dans la mine 100% Fer [0, 3] pour vider les repops pendant que votre personnage principal parcourt la grande boucle."
                  },
                  {
                    tag: 'kamas',
                    name: 'Monopole des Minerais THL',
                    desc: "Faire partie des premiers mineurs 200 du serveur permet de vendre les minerais nobles (Silicate, Dolomite, Cendre-pierre) à prix d'or pendant le rush initial des artisans."
                  },
                  {
                    tag: 'metier',
                    name: 'Craft d\'Alliages en Fin de Tournée',
                    desc: "Convertissez directement vos minerais en alliages à la fin de chaque boucle pour libérer vos pods tout en maximisant votre gain d'XP par rotation."
                  }
                ]
              }
            ]
          }
        ],
        legend: [
          { label: 'Farm — Gisement majeur & récolte intensive', color: 'var(--dofus-emerald)' },
          { label: 'Opti — Passages secrets, ordres de visite & raccourcis', color: 'var(--dofus-gold)' },
          { label: 'Kamas — Monopole & ventes lucratives THL', color: 'var(--dofus-gold)' },
          { label: 'Métier — Synergies et crafts d\'alliages', color: 'var(--dofus-purple)' }
        ]
      }
    ]
  };

  // =========================================================================
  // MODULE TOOLS : ÉLEVAGE MINUTEURS (6 ENCLOS : 3 2 1 / 4 5 6)
  // =========================================================================
  const STORAGE_KEY_ELEVAGE = 'dofus_elevage_timers_v2';
  const ENCLOS_GRID_ORDER = [3, 2, 1, 4, 5, 6];

  let audioCtxInstance = null;
  let lastAlarmSoundTimestamp = 0;

  function getAudioCtx() {
    if (!audioCtxInstance) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) audioCtxInstance = new AudioCtx();
    }
    if (audioCtxInstance && audioCtxInstance.state === 'suspended') {
      audioCtxInstance.resume();
    }
    return audioCtxInstance;
  }

  function playSynthesizerAlarm() {
    const settings = getElevageSettings();
    if (settings.soundEnabled === false) return;
    try {
      const ctx = getAudioCtx();
      if (!ctx) return;
      const now = ctx.currentTime;
      const rawVol = settings.volume !== undefined ? settings.volume : 70;
      const masterVol = Math.max(0.1, Math.min(1.0, rawVol / 100));

      // Carillon mélodique en cascade pentatonique (Do5 -> Mi5 -> Sol5 -> La5 -> Sol5 -> Mi5 -> Ré5 -> Do5)
      // Fluide, harmonieux, sans saut d'octave brutal et naturellement résolu
      const notes = [
        { freq: 523.25, start: 0.00, dur: 0.22, vol: 0.35 * masterVol },   // Do 5
        { freq: 659.25, start: 0.16, dur: 0.22, vol: 0.38 * masterVol },   // Mi 5
        { freq: 783.99, start: 0.32, dur: 0.24, vol: 0.40 * masterVol },   // Sol 5
        { freq: 880.00, start: 0.48, dur: 0.26, vol: 0.42 * masterVol },   // La 5
        { freq: 783.99, start: 0.66, dur: 0.24, vol: 0.40 * masterVol },   // Sol 5 (descente douce)
        { freq: 659.25, start: 0.84, dur: 0.24, vol: 0.38 * masterVol },   // Mi 5
        { freq: 587.33, start: 1.02, dur: 0.26, vol: 0.36 * masterVol },   // Ré 5
        { freq: 523.25, start: 1.22, dur: 0.70, vol: 0.45 * masterVol }    // Do 5 (résolution finale tenue)
      ];

      notes.forEach(function(n) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(n.freq, now + n.start);

        gain.gain.setValueAtTime(0.0001, now + n.start);
        gain.gain.exponentialRampToValueAtTime(n.vol, now + n.start + 0.025);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + n.start + n.dur);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + n.start);
        osc.stop(now + n.start + n.dur);
      });
    } catch (err) {
      console.warn("Erreur AudioContext :", err);
    }
  }

  function getDefaultEnclosData() {
    return {
      settings: {
        soundEnabled: true,
        volume: 70
      },
      enclos: {
        3: { id: 3, name: 'Enclos #3', currentVal: -2500, targetVal: 0, speed: 20, remainingMs: 0, totalMs: 0, running: false, endTimestamp: null, alarm: false },
        2: { id: 2, name: 'Enclos #2', currentVal: 0, targetVal: 2000, speed: 20, remainingMs: 0, totalMs: 0, running: false, endTimestamp: null, alarm: false },
        1: { id: 1, name: 'Enclos #1', currentVal: 2000, targetVal: 0, speed: 20, remainingMs: 0, totalMs: 0, running: false, endTimestamp: null, alarm: false },
        4: { id: 4, name: 'Enclos #4', currentVal: -2000, targetVal: 0, speed: 20, remainingMs: 0, totalMs: 0, running: false, endTimestamp: null, alarm: false },
        5: { id: 5, name: 'Enclos #5', currentVal: 0, targetVal: -2000, speed: 20, remainingMs: 0, totalMs: 0, running: false, endTimestamp: null, alarm: false },
        6: { id: 6, name: 'Enclos #6', currentVal: 0, targetVal: 5000, speed: 20, remainingMs: 0, totalMs: 0, running: false, endTimestamp: null, alarm: false }
      }
    };
  }

  function loadElevageState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_ELEVAGE);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && parsed.enclos) {
          const now = Date.now();
          ENCLOS_GRID_ORDER.forEach(function(id) {
            const enc = parsed.enclos[id];
            if (enc) {
              if (enc.running && enc.endTimestamp) {
                const left = enc.endTimestamp - now;
                if (left <= 0) {
                  enc.remainingMs = 0;
                  enc.running = false;
                  enc.alarm = true;
                } else {
                  enc.remainingMs = left;
                }
              } else if (!enc.running && (enc.remainingMs === undefined || enc.remainingMs === null || enc.remainingMs <= 0)) {
                enc.remainingMs = calculateEnclosDurationMs(enc);
                enc.totalMs = enc.remainingMs;
              }
            }
          });
          return parsed;
        }
      }
    } catch (e) {
      console.warn("Échec chargement timers élevage :", e);
    }
    const def = getDefaultEnclosData();
    ENCLOS_GRID_ORDER.forEach(function(id) {
      def.enclos[id].remainingMs = calculateEnclosDurationMs(def.enclos[id]);
      def.enclos[id].totalMs = def.enclos[id].remainingMs;
    });
    return def;
  }

  let elevageState = loadElevageState();

  function saveElevageState() {
    try {
      localStorage.setItem(STORAGE_KEY_ELEVAGE, JSON.stringify(elevageState));
    } catch (e) {
      console.warn("Échec sauvegarde timers élevage :", e);
    }
  }

  function getElevageSettings() {
    if (!elevageState.settings) {
      elevageState.settings = { soundEnabled: true, volume: 70 };
    }
    if (elevageState.settings.volume === undefined) {
      elevageState.settings.volume = 70;
    }
    return elevageState.settings;
  }

  function calculateEnclosDurationMs(enc) {
    const cur = Number(enc.currentVal) || 0;
    const tgt = Number(enc.targetVal) || 0;
    const diff = Math.abs(tgt - cur);
    const spd = Number(enc.speed) || 20;
    if (spd <= 0 || diff <= 0) return 0;
    const ticks = Math.ceil(diff / spd);
    return ticks * 10 * 1000; // 10 secondes par activation/tick
  }

  function formatTimeHMS(ms) {
    if (ms <= 0) return "00:00";
    const totalSec = Math.ceil(ms / 1000);
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    const pad = function(n) { return String(n).padStart(2, '0'); };
    if (h > 0) {
      return pad(h) + ":" + pad(m) + ":" + pad(s);
    }
    return pad(m) + ":" + pad(s);
  }

  function formatEtaTime(ms) {
    if (ms <= 0) return "Prêt !";
    const targetDate = new Date(Date.now() + ms);
    const pad = function(n) { return String(n).padStart(2, '0'); };
    return "Fin à " + pad(targetDate.getHours()) + ":" + pad(targetDate.getMinutes()) + ":" + pad(targetDate.getSeconds());
  }

  // Ticker global actif en tâche de fond (toutes les 250ms)
  let elevageTickerInterval = null;
  function startGlobalTicker() {
    if (elevageTickerInterval) return;
    elevageTickerInterval = setInterval(function() {
      let stateChanged = false;
      const now = Date.now();
      let hasActiveAlarm = false;

      ENCLOS_GRID_ORDER.forEach(function(id) {
        const enc = elevageState.enclos[id];
        if (enc) {
          if (enc.running && enc.endTimestamp) {
            const left = enc.endTimestamp - now;
            if (left <= 0) {
              enc.remainingMs = 0;
              enc.running = false;
              enc.alarm = true;
              stateChanged = true;
              hasActiveAlarm = true;
              playSynthesizerAlarm();
              lastAlarmSoundTimestamp = now;
            } else {
              enc.remainingMs = left;
            }
          }
          if (enc.alarm) {
            hasActiveAlarm = true;
          }
        }
      });

      // Si une ou plusieurs alarmes sont actives, répète le carillon toutes les 10 secondes tant qu'elles ne sont pas stoppées !
      if (hasActiveAlarm) {
        if (now - lastAlarmSoundTimestamp >= 10000) { // 10 secondes
          playSynthesizerAlarm();
          lastAlarmSoundTimestamp = now;
        }
      }

      if (stateChanged) {
        saveElevageState();
      }

      // Mise à jour fluide du DOM si la page élevage est affichée
      const container = document.getElementById('elevage-app-container');
      if (container) {
        updateElevageDOM(container);
      }
    }, 250);
  }
  startGlobalTicker();

  function updateElevageDOM(container) {
    let anyAlarmActive = false;

    ENCLOS_GRID_ORDER.forEach(function(id) {
      const enc = elevageState.enclos[id];
      if (!enc) return;
      if (enc.alarm) anyAlarmActive = true;

      const card = container.querySelector(`[data-enclos-id="${id}"]`);
      if (!card) return;

      // Classes de la carte
      card.classList.toggle('is-running', enc.running);
      card.classList.toggle('is-paused', !enc.running && enc.remainingMs > 0 && enc.remainingMs < (enc.totalMs || 1));
      card.classList.toggle('is-alarm', enc.alarm);

      // Statut Badge
      const statusEl = card.querySelector('.elevage-card-status');
      if (statusEl) {
        if (enc.alarm) {
          statusEl.className = 'elevage-card-status status-alarm';
          statusEl.innerHTML = '🔔 TERMINÉ !';
        } else if (enc.running) {
          statusEl.className = 'elevage-card-status status-running';
          statusEl.innerHTML = '▶ EN COURS';
        } else if (enc.remainingMs > 0 && enc.remainingMs < (enc.totalMs || 1)) {
          statusEl.className = 'elevage-card-status status-paused';
          statusEl.innerHTML = '⏸ EN PAUSE';
        } else {
          statusEl.className = 'elevage-card-status status-idle';
          statusEl.innerHTML = '⏸ EN ATTENTE';
        }
      }

      // Digits & ETA
      const digitsEl = card.querySelector('.elevage-digits');
      if (digitsEl) {
        digitsEl.textContent = formatTimeHMS(enc.remainingMs);
        digitsEl.classList.toggle('is-running', enc.running);
        digitsEl.classList.toggle('is-alarm', enc.alarm);
      }

      const etaEl = card.querySelector('.elevage-eta');
      if (etaEl) {
        if (enc.alarm) {
          etaEl.textContent = '🔔 Alarme active (sonne toutes les 10s)';
        } else if (enc.running) {
          etaEl.textContent = formatEtaTime(enc.remainingMs);
        } else {
          etaEl.textContent = enc.remainingMs > 0 ? 'Durée : ' + formatTimeHMS(enc.remainingMs) : 'Prêt à démarrer';
        }
      }

      // Barre de progression
      const barEl = card.querySelector('.elevage-progress-bar');
      if (barEl) {
        barEl.classList.toggle('is-alarm', enc.alarm);
        const total = enc.totalMs || enc.remainingMs || 1;
        const elapsed = Math.max(0, total - enc.remainingMs);
        const pct = Math.min(100, Math.max(0, (elapsed / total) * 100));
        barEl.style.width = (enc.alarm ? 100 : pct) + '%';
      }

      // Bouton Toggle
      const toggleBtn = card.querySelector('.elevage-btn-toggle');
      if (toggleBtn) {
        toggleBtn.classList.toggle('is-running', enc.running);
        toggleBtn.classList.toggle('is-alarm', enc.alarm);
        if (enc.alarm) {
          toggleBtn.innerHTML = '⏹️ ARRÊTER ALARME';
        } else if (enc.running) {
          toggleBtn.innerHTML = '⏸ PAUSE';
        } else {
          toggleBtn.innerHTML = '▶ DÉMARRER';
        }
      }
    });

    // Bouton d'arrêt d'urgence global si au moins une alarme retentit
    const stopAllAlarmsBtn = container.querySelector('#elevage-stop-alarms-btn');
    if (stopAllAlarmsBtn) {
      stopAllAlarmsBtn.style.display = anyAlarmActive ? 'inline-flex' : 'none';
    }
  }

  function renderElevageCardHTML(enc) {
    const diff = Math.abs((Number(enc.targetVal) || 0) - (Number(enc.currentVal) || 0));
    const ticks = enc.speed > 0 ? Math.ceil(diff / enc.speed) : 0;
    const calcDurationSec = ticks * 10;

    return `
      <div class="elevage-card ${enc.running ? 'is-running' : ''} ${enc.alarm ? 'is-alarm' : ''}" data-enclos-id="${enc.id}">
        <div class="elevage-card-head">
          <div class="elevage-card-title-group">
            <span class="elevage-card-badge">Enclos #${enc.id}</span>
            <input type="text" class="elevage-card-name-input" value="${enc.name || 'Enclos #' + enc.id}" placeholder="Nom / Dragodinde..." title="Renommer l'enclos" />
          </div>
          <span class="elevage-card-status ${enc.alarm ? 'status-alarm' : enc.running ? 'status-running' : 'status-idle'}">
            ${enc.alarm ? '🔔 TERMINÉ !' : enc.running ? '▶ EN COURS' : '⏸ EN ATTENTE'}
          </span>
        </div>

        <div class="elevage-card-body">
          <div class="elevage-inputs-grid">
            <!-- Input 1 : Valeur Actuelle -->
            <div class="elevage-field">
              <label>
                <span>Valeur Actuelle</span>
                <span class="field-hint">-5000 à 5000</span>
              </label>
              <div class="elevage-num-input-wrap">
                <input type="number" class="input-current" min="-10000" max="10000" step="100" value="${enc.currentVal}" />
              </div>
            </div>

            <!-- Input 2 : Valeur Souhaitée -->
            <div class="elevage-field">
              <label>
                <span>Valeur Souhaitée</span>
                <span class="field-hint">-5000 à 5000</span>
              </label>
              <div class="elevage-num-input-wrap">
                <input type="number" class="input-target" min="-10000" max="10000" step="100" value="${enc.targetVal}" />
              </div>
            </div>

            <!-- Raccourcis Cibles Dofus -->
            <div class="elevage-field field-full">
              <label>
                <span>Raccourcis Cible (Sérénité / Stats)</span>
              </label>
              <div class="elevage-presets-row">
                <button class="elevage-preset-chip" data-set-target="0" title="Neutralité Sérénité pour Maturité">🎯 0 (Maturité)</button>
                <button class="elevage-preset-chip" data-set-target="2000" title="Sérénité positive pour Amour">+2000 (Amour)</button>
                <button class="elevage-preset-chip" data-set-target="-2000" title="Sérénité négative pour Endurance">-2000 (Endurance)</button>
                <button class="elevage-preset-chip" data-set-target="5000" title="Cap sérénité max">+5000</button>
                <button class="elevage-preset-chip" data-set-target="-5000" title="Cap sérénité min">-5000</button>
                <button class="elevage-preset-chip" data-action="invert-sign" title="Inverser le signe de la valeur actuelle">± Inverser</button>
              </div>
            </div>

            <!-- Input 3 : Vitesse par activation (10, 20, 30 / 10s) -->
            <div class="elevage-field field-full">
              <label>
                <span>Vitesse de Gain (par activation de 10s)</span>
                <span class="field-hint">Objets d'élevage</span>
              </label>
              <div class="elevage-speed-pills">
                <button class="elevage-speed-btn ${enc.speed === 10 ? 'active' : ''}" data-speed="10">⚡ 10 / 10s</button>
                <button class="elevage-speed-btn ${enc.speed === 20 ? 'active' : ''}" data-speed="20">⚡ 20 / 10s</button>
                <button class="elevage-speed-btn ${enc.speed === 30 ? 'active' : ''}" data-speed="30">⚡ 30 / 10s</button>
              </div>
            </div>
          </div>

          <!-- Boîte de calcul live -->
          <div class="elevage-calc-box">
            <div class="elevage-calc-item">
              <span class="elevage-calc-label">Différence (Δ)</span>
              <span class="elevage-calc-val val-diff">${diff} pts</span>
            </div>
            <div class="elevage-calc-item">
              <span class="elevage-calc-label">Activations (10s)</span>
              <span class="elevage-calc-val val-ticks">${ticks} ticks</span>
            </div>
            <div class="elevage-calc-item">
              <span class="elevage-calc-label">Durée Estimée</span>
              <span class="elevage-calc-val val-duration">${formatTimeHMS(calcDurationSec * 1000)}</span>
            </div>
          </div>

          <!-- Affichage du Minuteur Digital & Progress -->
          <div class="elevage-timer-display">
            <div class="elevage-digits ${enc.running ? 'is-running' : ''} ${enc.alarm ? 'is-alarm' : ''}">
              ${formatTimeHMS(enc.remainingMs)}
            </div>
            <div class="elevage-eta">
              ${enc.alarm ? '🔔 Alarme active (sonne toutes les 10s)' : enc.running ? formatEtaTime(enc.remainingMs) : 'Durée : ' + formatTimeHMS(enc.remainingMs)}
            </div>
            <div class="elevage-progress-track">
              <div class="elevage-progress-bar ${enc.alarm ? 'is-alarm' : ''}" style="width: ${enc.alarm ? '100%' : '0%'}"></div>
            </div>
          </div>

          <!-- Contrôles du Minuteur -->
          <div class="elevage-controls">
            <button class="elevage-btn-toggle ${enc.running ? 'is-running' : ''} ${enc.alarm ? 'is-alarm' : ''}">
              ${enc.alarm ? '⏹️ ARRÊTER ALARME' : enc.running ? '⏸ PAUSE' : '▶ DÉMARRER'}
            </button>
            <button class="elevage-btn-reset">↺ RESET</button>
          </div>

          <!-- Ajustements rapides -->
          <div class="elevage-adjust-row">
            <button class="elevage-adj-btn" data-adj="-300">-5 min</button>
            <button class="elevage-adj-btn" data-adj="-60">-1 min</button>
            <button class="elevage-adj-btn" data-adj="60">+1 min</button>
            <button class="elevage-adj-btn" data-adj="300">+5 min</button>
          </div>
        </div>
      </div>
    `;
  }

  function renderElevageTimersApp(main) {
    const settings = getElevageSettings();
    const currentVol = settings.volume !== undefined ? settings.volume : 70;

    main.innerHTML = `
      <div class="elevage-wrap" id="elevage-app-container">
        <!-- Barre d'outils supérieure -->
        <div class="elevage-toolbar">
          <div class="elevage-toolbar-left">
            <h2 class="elevage-toolbar-title">🐴 Minuteurs d'Élevage Dofus</h2>
            <div class="elevage-toolbar-desc">
              6 enclos interactifs configurés en disposition <b>[3 2 1 / 4 5 6]</b> avec calcul automatique de ticks (10s) et carillon répété toutes les 10 secondes.
            </div>
          </div>

          <div class="elevage-toolbar-actions">
            <!-- Bouton Son Actif / Muet -->
            <button class="elevage-btn ${settings.soundEnabled ? 'active' : ''}" id="elevage-sound-toggle-btn" title="Activer ou couper l'alarme sonore">
              ${settings.soundEnabled ? '🔊 Son Activé' : '🔇 Son Coupé'}
            </button>

            <!-- Slider de volume sonore (0 à 100%, bloqué à 10% minimum) -->
            <div class="elevage-volume-wrap" title="Volume sonore du carillon (minimum 10%)">
              <span class="elevage-volume-label">🔊 Vol :</span>
              <input type="range" id="elevage-volume-slider" min="0" max="100" step="1" value="${currentVol}" />
              <span class="elevage-volume-val" id="elevage-volume-display">${currentVol}%</span>
            </div>

            <button class="elevage-btn btn-gold" id="elevage-test-sound-btn" title="Tester le carillon au volume réglé">
              🧪 Tester Carillon
            </button>

            <!-- Bouton Couper Toutes les Alarmes (visible quand au moins 1 sonne) -->
            <button class="elevage-btn btn-danger" id="elevage-stop-alarms-btn" style="display: none; font-weight: 700;">
              ⏹️ Couper Toutes les Alarmes
            </button>

            <!-- Actions globales -->
            <button class="elevage-btn btn-primary" id="elevage-start-all-btn">▶ Tout Lancer</button>
            <button class="elevage-btn" id="elevage-pause-all-btn">⏸ Tout Pause</button>
            <button class="elevage-btn btn-danger" id="elevage-reset-all-btn">↺ Tout Reset</button>
          </div>
        </div>

        <!-- Grille des 6 Enclos (3 2 1 / 4 5 6) -->
        <div class="elevage-grid" id="elevage-grid">
          ${ENCLOS_GRID_ORDER.map(function(id) {
            return renderElevageCardHTML(elevageState.enclos[id]);
          }).join('')}
        </div>

        <!-- Mémo & Rappel Règles Élevage -->
        <div class="elevage-memo-card">
          <div class="elevage-memo-title">💡 Mémo Pratique — Règles d'Élevage & Ticks d'Objets</div>
          <p style="margin: 0; color: var(--color-muted);">
            • <b>Fréquence d'activation :</b> Dans un enclos, une monture déclenche l'effet des objets d'élevage toutes les <b>10 secondes</b> lorsqu'elle se déplace.<br>
            • <b>Répétition de l'alarme :</b> Dès qu'un enclos atteint son objectif, le carillon retentit <b>toutes les 10 secondes</b> jusqu'à ce que vous cliquiez sur <b>Arrêter Alarme</b>.<br>
            • <b>Formule de durée :</b> <code>Temps = ⌈ |Valeur Souhaitée - Valeur Actuelle| / Vitesse ⌉ × 10 secondes</code>.<br>
            • <b>Sérénité & Orientation :</b>
            <b>[-5000 à -2000]</b> = Baffeurs (baisse sérénité) ➔ autorise le gain d'<b>Endurance</b> (Foudroyeurs).<br>
            <b>[-2000 à +2000]</b> = Sérénité moyenne ➔ autorise le gain de <b>Maturité</b> (Abreuvoirs).<br>
            <b>[+2000 à +5000]</b> = Caresseurs (augmente sérénité) ➔ autorise le gain d'<b>Amour</b> (Dragofesses).
          </p>
        </div>
      </div>
    `;

    bindElevageEvents(main);
  }

  function bindElevageEvents(container) {
    // Sound toggle button
    const soundToggleBtn = container.querySelector('#elevage-sound-toggle-btn');
    if (soundToggleBtn) {
      soundToggleBtn.addEventListener('click', function() {
        getAudioCtx();
        const settings = getElevageSettings();
        settings.soundEnabled = !settings.soundEnabled;
        saveElevageState();
        this.classList.toggle('active', settings.soundEnabled);
        this.innerHTML = settings.soundEnabled ? '🔊 Son Activé' : '🔇 Son Coupé';
        if (settings.soundEnabled) {
          playSynthesizerAlarm();
        }
      });
    }

    // Volume Slider (min 10% locked, display 0 to 100)
    const volumeSlider = container.querySelector('#elevage-volume-slider');
    const volumeDisplay = container.querySelector('#elevage-volume-display');
    if (volumeSlider && volumeDisplay) {
      function updateVolumeFromSlider(sliderEl) {
        let val = Number(sliderEl.value);
        if (val < 10) {
          val = 10;
          sliderEl.value = 10;
        }
        const settings = getElevageSettings();
        settings.volume = val;
        volumeDisplay.textContent = val + '%';
        saveElevageState();
      }

      volumeSlider.addEventListener('input', function() {
        updateVolumeFromSlider(this);
      });

      volumeSlider.addEventListener('change', function() {
        updateVolumeFromSlider(this);
        getAudioCtx();
        playSynthesizerAlarm();
      });
    }

    // Test alarm button
    const testSoundBtn = container.querySelector('#elevage-test-sound-btn');
    if (testSoundBtn) {
      testSoundBtn.addEventListener('click', function() {
        getAudioCtx();
        playSynthesizerAlarm();
      });
    }

    // Stop all active alarms
    const stopAllAlarmsBtn = container.querySelector('#elevage-stop-alarms-btn');
    if (stopAllAlarmsBtn) {
      stopAllAlarmsBtn.addEventListener('click', function() {
        ENCLOS_GRID_ORDER.forEach(function(id) {
          const enc = elevageState.enclos[id];
          if (enc && enc.alarm) {
            enc.alarm = false;
            enc.remainingMs = calculateEnclosDurationMs(enc);
            enc.totalMs = enc.remainingMs;
            enc.running = false;
          }
        });
        saveElevageState();
        updateElevageDOM(container);
      });
    }

    // Global Actions (Start All, Pause All, Reset All)
    const startAllBtn = container.querySelector('#elevage-start-all-btn');
    if (startAllBtn) {
      startAllBtn.addEventListener('click', function() {
        getAudioCtx();
        const now = Date.now();
        ENCLOS_GRID_ORDER.forEach(function(id) {
          const enc = elevageState.enclos[id];
          if (enc && !enc.running) {
            if (enc.remainingMs <= 0 || enc.alarm) {
              enc.remainingMs = calculateEnclosDurationMs(enc);
              enc.totalMs = enc.remainingMs;
            }
            if (enc.remainingMs > 0) {
              enc.endTimestamp = now + enc.remainingMs;
              enc.running = true;
              enc.alarm = false;
            }
          }
        });
        saveElevageState();
        updateElevageDOM(container);
      });
    }

    const pauseAllBtn = container.querySelector('#elevage-pause-all-btn');
    if (pauseAllBtn) {
      pauseAllBtn.addEventListener('click', function() {
        const now = Date.now();
        ENCLOS_GRID_ORDER.forEach(function(id) {
          const enc = elevageState.enclos[id];
          if (enc && enc.running) {
            enc.remainingMs = Math.max(0, enc.endTimestamp - now);
            enc.running = false;
          }
        });
        saveElevageState();
        updateElevageDOM(container);
      });
    }

    const resetAllBtn = container.querySelector('#elevage-reset-all-btn');
    if (resetAllBtn) {
      resetAllBtn.addEventListener('click', function() {
        ENCLOS_GRID_ORDER.forEach(function(id) {
          const enc = elevageState.enclos[id];
          if (enc) {
            enc.running = false;
            enc.alarm = false;
            enc.remainingMs = calculateEnclosDurationMs(enc);
            enc.totalMs = enc.remainingMs;
          }
        });
        saveElevageState();
        updateElevageDOM(container);
      });
    }

    // Events on each card
    ENCLOS_GRID_ORDER.forEach(function(id) {
      const card = container.querySelector(`[data-enclos-id="${id}"]`);
      if (!card) return;
      const enc = elevageState.enclos[id];

      function syncCalcAndDisplay() {
        const diff = Math.abs((Number(enc.targetVal) || 0) - (Number(enc.currentVal) || 0));
        const ticks = enc.speed > 0 ? Math.ceil(diff / enc.speed) : 0;
        const durSec = ticks * 10;
        const durMs = durSec * 1000;

        const diffEl = card.querySelector('.val-diff');
        if (diffEl) diffEl.textContent = diff + ' pts';

        const ticksEl = card.querySelector('.val-ticks');
        if (ticksEl) ticksEl.textContent = ticks + ' ticks';

        const durEl = card.querySelector('.val-duration');
        if (durEl) durEl.textContent = formatTimeHMS(durMs);

        if (!enc.running && !enc.alarm) {
          enc.remainingMs = durMs;
          enc.totalMs = durMs;
          const digitsEl = card.querySelector('.elevage-digits');
          if (digitsEl) digitsEl.textContent = formatTimeHMS(durMs);
          const etaEl = card.querySelector('.elevage-eta');
          if (etaEl) etaEl.textContent = 'Durée : ' + formatTimeHMS(durMs);
        }
        saveElevageState();
      }

      // Name change
      const nameInput = card.querySelector('.elevage-card-name-input');
      if (nameInput) {
        nameInput.addEventListener('change', function() {
          enc.name = this.value.trim() || ('Enclos #' + enc.id);
          saveElevageState();
        });
      }

      // Input Current
      const curInput = card.querySelector('.input-current');
      if (curInput) {
        curInput.addEventListener('input', function() {
          enc.currentVal = Number(this.value) || 0;
          syncCalcAndDisplay();
        });
      }

      // Input Target
      const tgtInput = card.querySelector('.input-target');
      if (tgtInput) {
        tgtInput.addEventListener('input', function() {
          enc.targetVal = Number(this.value) || 0;
          syncCalcAndDisplay();
        });
      }

      // Target Preset Buttons
      card.querySelectorAll('[data-set-target]').forEach(function(btn) {
        btn.addEventListener('click', function() {
          const val = Number(this.dataset.setTarget);
          enc.targetVal = val;
          if (tgtInput) tgtInput.value = val;
          syncCalcAndDisplay();
        });
      });

      // Invert Sign Button
      const invertBtn = card.querySelector('[data-action="invert-sign"]');
      if (invertBtn) {
        invertBtn.addEventListener('click', function() {
          enc.currentVal = -enc.currentVal;
          if (curInput) curInput.value = enc.currentVal;
          syncCalcAndDisplay();
        });
      }

      // Speed Pill Buttons
      card.querySelectorAll('.elevage-speed-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
          const spd = Number(this.dataset.speed);
          enc.speed = spd;
          card.querySelectorAll('.elevage-speed-btn').forEach(function(b) {
            b.classList.toggle('active', Number(b.dataset.speed) === spd);
          });
          syncCalcAndDisplay();
        });
      });

      // Toggle Start / Pause / Stop Alarm
      const toggleBtn = card.querySelector('.elevage-btn-toggle');
      if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
          getAudioCtx();
          if (enc.alarm) {
            enc.alarm = false;
            enc.remainingMs = calculateEnclosDurationMs(enc);
            enc.totalMs = enc.remainingMs;
            enc.running = false;
          } else if (enc.running) {
            enc.remainingMs = Math.max(0, enc.endTimestamp - Date.now());
            enc.running = false;
          } else {
            if (enc.remainingMs <= 0) {
              enc.remainingMs = calculateEnclosDurationMs(enc);
              enc.totalMs = enc.remainingMs;
            }
            if (enc.remainingMs > 0) {
              enc.endTimestamp = Date.now() + enc.remainingMs;
              enc.running = true;
              enc.alarm = false;
            }
          }
          saveElevageState();
          updateElevageDOM(container);
        });
      }

      // Reset Button
      const resetBtn = card.querySelector('.elevage-btn-reset');
      if (resetBtn) {
        resetBtn.addEventListener('click', function() {
          enc.running = false;
          enc.alarm = false;
          enc.remainingMs = calculateEnclosDurationMs(enc);
          enc.totalMs = enc.remainingMs;
          saveElevageState();
          updateElevageDOM(container);
        });
      }

      // Adjust Buttons
      card.querySelectorAll('.elevage-adj-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
          const adjSec = Number(this.dataset.adj);
          const adjMs = adjSec * 1000;
          enc.remainingMs = Math.max(0, enc.remainingMs + adjMs);
          if (enc.running) {
            enc.endTimestamp = Date.now() + enc.remainingMs;
          }
          enc.totalMs = Math.max(enc.totalMs || 0, enc.remainingMs);
          saveElevageState();
          updateElevageDOM(container);
        });
      });
    });
  }

  // =========================================================================
  // ENREGISTREMENT DU THÈME DOFUS AUPRÈS DE STASHAPP
  // =========================================================================
  window.StashApp.register('dofus', {
    meta: {
      theme: 'dofus',
      eyebrow: "📦 Stash // Personal memo",
      title: "<span>R3dn0</span>'s Notes",
      sub: "Galerie de skins, guides d'optimisation et outils d'élevage pour Dofus.",
      footer: "R3dn0 — Dofus skins, guides & tools · mis à jour au fil des aventures dans le Monde des Douze"
    },
    tabs: [
      { id: 'skins', label: '🎨 Skins' },
      { id: 'guides', label: '📖 Guides' },
      { id: 'tools', label: '🛠️ Tools' }
    ],
    data: {
      skins: {
        filters: [{ id: 'all', label: 'All' }],
        categories: []
      },
      guides: GUIDES_DATA,
      tools: {
        filters: [{ id: 'elevage', label: '🐴 Élevage Minuteurs' }],
        categories: []
      }
    },
    tagLabels: {
      opti: 'Opti',
      kamas: 'Kamas',
      metier: 'Métier',
      farming: 'Farm',
      dofus: 'Dofus',
      base: 'Base'
    },
    render: function(state, root, cfg) {
      const main = root.querySelector('#main');
      const filterbar = root.querySelector('#filterbar');
      const subtabs = root.querySelector('#subtabs');

      // Met à jour l'onglet actif dans le header
      root.querySelectorAll('.maintab').forEach(function(b) {
        b.classList.toggle('active', b.dataset.tab === state.tab);
      });

      if (state.tab === 'skins') {
        if (subtabs) {
          subtabs.style.display = 'none';
          subtabs.innerHTML = '';
        }
        if (filterbar) {
          filterbar.style.display = 'none';
          filterbar.innerHTML = '';
        }
        renderSkinsApp(main);
      } else if (state.tab === 'tools') {
        if (subtabs) {
          subtabs.style.display = '';
          subtabs.innerHTML = `
            <button class="subtab active" data-tool="elevage">🐴 Élevage Minuteurs</button>
          `;
        }
        if (filterbar) {
          filterbar.style.display = 'none';
          filterbar.innerHTML = '';
        }
        renderElevageTimersApp(main);
      } else {
        if (filterbar) {
          filterbar.style.display = '';
        }
        if (subtabs) {
          subtabs.style.display = '';
        }
        window.StashApp.renderDefault(cfg, state, root);
      }
    },
    // Expose pour ajout futur programmatique ou tests
    skinsList: SKINS,
    getAllSkins: getAllSkins,
    getCustomSkins: getCustomSkins,
    saveCustomSkin: saveCustomSkin,
    deleteSkin: deleteSkin,
    openImportBarbofusModal: openImportBarbofusModal,
    classesList: DOFUS_CLASSES,
    guidesData: GUIDES_DATA,
    isFavorite: isFavorite,
    toggleFavorite: toggleFavorite,
    elevageState: elevageState,
    renderElevageTimersApp: renderElevageTimersApp
  });

})();



