// Dofus Skinator Module
(function() {
  "use strict";

  const SLOT_ORDER = ["coiffe", "cape", "bouclier", "costume", "epauliere", "ailes", "familier", "montilier", "monture", "harnachement", "arme"];

  const putVarInt = function(arr, val) {
    var r = val >>> 0;
    do {
      var t = r & 127;
      r = Math.floor(r / 128);
      arr.push(r ? t | 128 : t);
    } while (r);
  };

  const readVarInt = function(arr, cursor) {
    var r = 0, t = 0, i;
    do {
      i = arr[cursor.i++];
      r += (i & 127) * Math.pow(2, t);
      t += 7;
    } while (i & 128);
    return r;
  };

  const toBase64Url = function(bytes) {
    var s = "";
    for (var i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
    return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  };

  const fromBase64Url = function(str) {
    var s = atob(str.replace(/-/g, "+").replace(/_/g, "/"));
    var bytes = new Uint8Array(s.length);
    for (var i = 0; i < s.length; i++) bytes[i] = s.charCodeAt(i);
    return bytes;
  };

  function encodeSkinCode(skin) {
    if (!skin || !skin.breedId) return "";
    var bId = Number(skin.breedId) & 31;
    var genderBit = skin.gender === "female" ? 32 : 0;
    var bKey = (Number(skin.bodyKey) || 0) & 7;
    var hKey = ((Number(skin.headKey) || 0) & 31) << 3;
    var bytes = [2, bId | genderBit, bKey | hKey];

    var colors = skin.couleurs || {};
    var colorMask = 0;
    var activeColorIndices = [];
    for (var i = 0; i < 6; i++) {
      if (colors[i] != null) {
        colorMask |= 1 << i;
        activeColorIndices.push(i);
      }
    }
    bytes.push(colorMask);
    for (var j = 0; j < activeColorIndices.length; j++) {
      var c = Number(colors[activeColorIndices[j]]) >>> 0;
      bytes.push((c >> 16) & 255, (c >> 8) & 255, c & 255);
    }

    var slots = skin.slots || {};
    var slotMask = 0;
    var activeSlotValues = [];
    SLOT_ORDER.forEach(function(slotName, idx) {
      if (slots[slotName] != null) {
        slotMask |= 1 << idx;
        activeSlotValues.push(Number(slots[slotName]));
      }
    });
    bytes.push(slotMask & 255, (slotMask >> 8) & 255);
    for (var k = 0; k < activeSlotValues.length; k++) {
      putVarInt(bytes, activeSlotValues[k]);
    }

    return toBase64Url(Uint8Array.from(bytes));
  }

  function decodeSkinCode(rawCode) {
    if (!rawCode) return null;
    var code = rawCode.trim();
    if (code.indexOf("/skinator/") !== -1) {
      code = code.split("/skinator/")[1].split(/[?#]/)[0];
    }
    try {
      var bytes = fromBase64Url(code);
      if (bytes[0] !== 2) return null;
      var cursor = { i: 3 };
      var res = {
        breedId: bytes[1] & 31,
        gender: (bytes[1] & 32) ? "female" : "male",
        bodyKey: String(bytes[2] & 7),
        headKey: String((bytes[2] >> 3) & 31),
        couleurs: {},
        slots: {}
      };
      var colorMask = bytes[cursor.i++];
      for (var s = 0; s < 6; s++) {
        if (colorMask & (1 << s)) {
          res.couleurs[s] = (bytes[cursor.i] << 16) | (bytes[cursor.i + 1] << 8) | bytes[cursor.i + 2];
          cursor.i += 3;
        }
      }
      var slotMask = bytes[cursor.i] | (bytes[cursor.i + 1] << 8);
      cursor.i += 2;
      SLOT_ORDER.forEach(function(slotName, idx) {
        if (slotMask & (1 << idx)) {
          res.slots[slotName] = readVarInt(bytes, cursor);
        }
      });
      return res;
    } catch (e) {
      console.warn("Invalid skin code:", e);
      return null;
    }
  }

  const STORAGE_KEY = "stash_dofus_saved_skins";
  function loadSavedSkins() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveSkinsList(list) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (e) {
      console.error("Storage save failed:", e);
    }
  }

  function showToast(msg) {
    var prev = document.querySelector(".skinator-toast");
    if (prev) prev.remove();
    var t = document.createElement("div");
    t.className = "skinator-toast";
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function() {
      t.style.opacity = "0";
      t.style.transition = "opacity 0.3s ease";
      setTimeout(function() { t.remove(); }, 300);
    }, 2200);
  }

  function numToHex(num) {
    if (num == null) return "#ffffff";
    return "#" + Number(num).toString(16).padStart(6, "0");
  }

  function hexToNum(hex) {
    if (!hex) return 0;
    return parseInt(hex.replace("#", ""), 16) || 0;
  }

  const SLOTS = [
    { id: "coiffe", label: "Coiffe", icon: "🎩" },
    { id: "cape", label: "Cape", icon: "🦸" },
    { id: "bouclier", label: "Bouclier", icon: "🛡️" },
    { id: "familier", label: "Familier", icon: "🐾" },
    { id: "montilier", label: "Montilier", icon: "🐎" },
    { id: "monture", label: "Monture", icon: "🦎" },
    { id: "costume", label: "Costume", icon: "🥋" },
    { id: "ailes", label: "Ailes", icon: "🪽" },
    { id: "epauliere", label: "Épaulières", icon: "⚔️" }
  ];

  const COLOR_CHANNELS = [
    { id: 0, label: "Peau" },
    { id: 1, label: "Cheveux" },
    { id: 2, label: "Habit 1" },
    { id: 3, label: "Habit 2" },
    { id: 4, label: "Habit 3" }
  ];

  window.DofusSkinator = {
    dataLoaded: false,
    breeds: [],
    items: [],
    itemsById: {},
    itemsBySlot: {},

    skin: {
      id: null,
      name: "Nouveau Skin",
      breedId: 8,
      gender: "male",
      headKey: "0",
      bodyKey: "1",
      couleurs: { 0: 16110515, 1: 16737792, 2: 3355443, 3: 16777215, 4: 11149858 },
      slots: {}
    },

    activeView: "studio",
    show3D: false,
    modalSlot: null,
    modalSearch: "",

    loadData: async function() {
      if (this.dataLoaded) return;
      try {
        var res = await fetch("./data/skinator-items.json");
        var json = await res.json();
        this.breeds = json.breeds || [];
        this.items = json.items || [];
        var self = this;
        this.items.forEach(function(it) {
          self.itemsById[it.id] = it;
          if (!self.itemsBySlot[it.slot]) self.itemsBySlot[it.slot] = [];
          self.itemsBySlot[it.slot].push(it);
        });
        this.dataLoaded = true;
      } catch (err) {
        console.error("Failed to load skinator-items.json:", err);
      }
    },

    setBreed: function(breedId) {
      this.skin.breedId = Number(breedId);
      var self = this;
      var breed = this.breeds.find(function(b) { return b.id === self.skin.breedId; });
      if (breed) {
        var colors = breed.colors[this.skin.gender] || breed.colors.male || [];
        colors.forEach(function(c, idx) {
          if (idx < 5) self.skin.couleurs[idx] = c;
        });
      }
      this.render();
    },

    setGender: function(gender) {
      this.skin.gender = gender;
      var self = this;
      var breed = this.breeds.find(function(b) { return b.id === self.skin.breedId; });
      if (breed) {
        var colors = breed.colors[gender] || [];
        colors.forEach(function(c, idx) {
          if (idx < 5) self.skin.couleurs[idx] = c;
        });
      }
      this.render();
    },

    setColor: function(channelIdx, hexValue) {
      this.skin.couleurs[channelIdx] = hexToNum(hexValue);
      this.render();
    },

    equipItem: function(slot, itemId) {
      this.skin.slots[slot] = itemId;
      this.modalSlot = null;
      this.render();
      showToast("Équipement mis à jour !");
    },

    unequipItem: function(slot) {
      delete this.skin.slots[slot];
      this.render();
    },

    resetSkin: function() {
      this.skin.id = null;
      this.skin.name = "Nouveau Skin";
      this.skin.slots = {};
      this.setBreed(this.skin.breedId);
      showToast("Skin réinitialisé");
    },

    importSkinPrompt: function() {
      var codeOrUrl = prompt("Collez le code de skin ou l\'URL Duffus.fr :");
      if (!codeOrUrl) return;
      var decoded = decodeSkinCode(codeOrUrl);
      if (!decoded) {
        alert("Code de skin invalide ou non reconnu.");
        return;
      }
      this.skin.id = null;
      this.skin.breedId = decoded.breedId || 8;
      this.skin.gender = decoded.gender || "male";
      this.skin.headKey = decoded.headKey || "0";
      this.skin.bodyKey = decoded.bodyKey || "1";
      this.skin.couleurs = Object.assign({}, decoded.couleurs);
      this.skin.slots = Object.assign({}, decoded.slots);
      this.render();
      showToast("Skin importé avec succès !");
    },

    saveCurrentSkin: function() {
      var self = this;
      var breed = this.breeds.find(function(b) { return b.id === self.skin.breedId; });
      var defaultName = (breed ? breed.name : "Skin") + " " + (this.skin.gender === "female" ? "♀" : "♂");
      var name = prompt("Donnez un nom à ce skin :", this.skin.name === "Nouveau Skin" ? defaultName : this.skin.name);
      if (!name) return;

      var saved = loadSavedSkins();
      var code = encodeSkinCode(this.skin);
      var skinEntry = {
        id: this.skin.id || "skin_" + Date.now(),
        name: name.trim(),
        breedId: this.skin.breedId,
        gender: this.skin.gender,
        couleurs: Object.assign({}, this.skin.couleurs),
        slots: Object.assign({}, this.skin.slots),
        code: code,
        updatedAt: new Date().toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" })
      };

      var existingIdx = saved.findIndex(function(s) { return s.id === skinEntry.id; });
      if (existingIdx !== -1) {
        saved[existingIdx] = skinEntry;
      } else {
        saved.unshift(skinEntry);
      }
      saveSkinsList(saved);
      this.skin.id = skinEntry.id;
      this.skin.name = skinEntry.name;
      this.render();
      showToast("Skin sauvegardé dans vos favoris !");
    },

    loadSkin: function(id) {
      var saved = loadSavedSkins();
      var target = saved.find(function(s) { return s.id === id; });
      if (!target) return;
      this.skin = {
        id: target.id,
        name: target.name,
        breedId: target.breedId,
        gender: target.gender,
        headKey: "0",
        bodyKey: "1",
        couleurs: Object.assign({}, target.couleurs),
        slots: Object.assign({}, target.slots)
      };
      this.activeView = "studio";
      this.render();
      showToast("Skin chargé : " + target.name);
    },

    deleteSavedSkin: function(id) {
      if (!confirm("Supprimer définitivement ce skin ?")) return;
      var saved = loadSavedSkins().filter(function(s) { return s.id !== id; });
      saveSkinsList(saved);
      this.render();
      showToast("Skin supprimé");
    },

    exportAllSkins: function() {
      var saved = loadSavedSkins();
      var blob = new Blob([JSON.stringify(saved, null, 2)], { type: "application/json" });
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = "dofus-skins-backup.json";
      a.click();
      URL.revokeObjectURL(url);
    },

    importAllSkins: function(e) {
      var file = e.target.files[0];
      if (!file) return;
      var self = this;
      var reader = new FileReader();
      reader.onload = function(evt) {
        try {
          var list = JSON.parse(evt.target.result);
          if (Array.isArray(list)) {
            saveSkinsList(list);
            self.render();
            showToast(list.length + " skins importés !");
          } else {
            alert("Format de fichier JSON invalide");
          }
        } catch (err) {
          alert("Erreur lors de la lecture du fichier JSON");
        }
      };
      reader.readAsText(file);
    },

    copySkinCode: function() {
      var code = encodeSkinCode(this.skin);
      navigator.clipboard.writeText(code).then(function() {
        showToast("Code de skin copié !");
      });
    },

    copyDofusColors: function() {
      var self = this;
      var parts = COLOR_CHANNELS.map(function(ch) {
        return numToHex(self.skin.couleurs[ch.id] != null ? self.skin.couleurs[ch.id] : 0);
      });
      var text = parts.join(", ");
      navigator.clipboard.writeText(text).then(function() {
        showToast("Codes couleurs copiés : " + text);
      });
    },

    mount: async function(mountEl) {
      this.mountEl = mountEl;
      if (!this.dataLoaded) {
        mountEl.innerHTML = '<div style="padding:40px; text-align:center; color:var(--color-muted); font-family:JetBrains Mono,monospace;">Chargement du catalogue Dofus (3 800+ items)...</div>';
        await this.loadData();
      }
      this.render();
    },

    render: function() {
      if (!this.mountEl) return;
      var skinCode = encodeSkinCode(this.skin);
      var self = this;
      var currentBreed = this.breeds.find(function(b) { return b.id === self.skin.breedId; }) || { name: "Iop" };
      var savedCount = loadSavedSkins().length;

      var html = '<div class="skinator-root">';
      html += '<div class="skinator-toolbar">';
      html += '<div class="skinator-btn-group">';
      html += '<button class="skinator-btn ' + (this.activeView === "studio" ? "active" : "") + '" id="btn-view-studio">🎨 Éditeur</button>';
      html += '<button class="skinator-btn ' + (this.activeView === "gallery" ? "active" : "") + '" id="btn-view-gallery">📂 Mes skins (' + savedCount + ')</button>';
      html += '</div>';

      html += '<div class="skinator-btn-group">';
      html += '<button class="skinator-btn primary" id="btn-save-skin">💾 Sauvegarder</button>';
      html += '<button class="skinator-btn" id="btn-import-code">🔗 Importer code</button>';
      html += '<button class="skinator-btn" id="btn-reset-skin">🔄 Nouveau</button>';
      html += '</div>';
      html += '</div>';

      if (this.activeView === "gallery") {
        html += this.renderGallery();
      } else {
        html += this.renderStudio(skinCode, currentBreed);
      }

      html += '</div>';

      if (this.modalSlot) {
        html += this.renderItemModal(this.modalSlot);
      }

      this.mountEl.innerHTML = html;
      this.attachEvents();
    },

    renderStudio: function(skinCode, currentBreed) {
      var self = this;
      var html = '<div class="skinator-studio">';

      // Colonne 1 : Personnage & Equipements
      html += '<div class="skinator-panel">';
      html += '<h3 class="skinator-panel-title">1. Personnage & Équipements <span class="sub-info">' + currentBreed.name + ' · ' + (this.skin.gender === "female" ? "Femme" : "Homme") + '</span></h3>';

      html += '<div class="skinator-char-meta">';
      html += '<div class="char-select-wrap"><select id="select-breed">';
      this.breeds.forEach(function(b) {
        html += '<option value="' + b.id + '" ' + (b.id === self.skin.breedId ? 'selected' : '') + '>' + b.name + '</option>';
      });
      html += '</select></div>';

      html += '<div class="gender-toggle">';
      html += '<button type="button" class="' + (this.skin.gender === "male" ? "active" : "") + '" id="btn-gender-male">♂ Homme</button>';
      html += '<button type="button" class="' + (this.skin.gender === "female" ? "active" : "") + '" id="btn-gender-female">♀ Femme</button>';
      html += '</div>';
      html += '</div>';

      html += '<div class="skinator-slots-grid">';
      SLOTS.forEach(function(slot) {
        var itemId = self.skin.slots[slot.id];
        var item = itemId ? self.itemsById[itemId] : null;
        var isEquipped = !!item;

        html += '<div class="skinator-slot ' + (isEquipped ? 'is-equipped' : '') + '">';
        html += '<div class="slot-top-row">';
        html += '<span>' + slot.icon + ' ' + slot.label + '</span>';
        if (isEquipped) {
          html += '<button class="slot-remove-btn" data-unequip="' + slot.id + '" title="Retirer">✕</button>';
        }
        html += '</div>';

        if (isEquipped) {
          html += '<div class="slot-item-info">';
          html += '<div class="slot-item-img"><img src="https://duffus.fr/dofus-data/img/item/2x/' + item.icon + '-128.png" alt="" loading="lazy"></div>';
          html += '<div class="slot-item-details">';
          html += '<div class="item-title" title="' + item.name + '">' + item.name + '</div>';
          html += '<div class="item-meta">Niv. ' + item.lvl + '</div>';
          html += '</div>';
          html += '</div>';

          if (item.teintes && item.teintes.length) {
            html += '<div class="slot-teintes-list"><span class="teintes-tag">Harmonie:</span>';
            item.teintes.forEach(function(t) {
              html += '<span class="teinte-chip" style="background:#' + t + '" title="Appliquer #' + t + ' à Habit 1" data-apply-color="#' + t + '"></span>';
            });
            html += '</div>';
          }
        } else {
          html += '<button class="slot-empty" data-open-slot="' + slot.id + '">+ Équiper</button>';
        }

        html += '</div>';
      });
      html += '</div>';
      html += '</div>';

      // Colonne 2 : Couleurs & Code & 3D
      html += '<div class="skinator-panel">';
      html += '<h3 class="skinator-panel-title">2. Couleurs & Partage <button class="skinator-btn sm" id="btn-copy-dofus-colors" title="Format: #HEX1, #HEX2...">📋 Copier pour Dofus</button></h3>';

      html += '<div class="skinator-colors">';
      COLOR_CHANNELS.forEach(function(ch) {
        var hexVal = numToHex(self.skin.couleurs[ch.id] != null ? self.skin.couleurs[ch.id] : 0);
        html += '<div class="color-row">';
        html += '<span class="color-name">' + ch.label + '</span>';
        html += '<input type="color" class="color-picker" data-channel="' + ch.id + '" value="' + hexVal + '">';
        html += '<input type="text" class="color-input" data-hex-channel="' + ch.id + '" value="' + hexVal + '" maxlength="7">';
        html += '<button class="color-copy-btn" data-copy-hex="' + hexVal + '" title="Copier ce code">📋</button>';
        html += '</div>';
      });
      html += '</div>';

      html += '<div class="skinator-code-box">';
      html += '<div style="font-family:Oswald,sans-serif; font-size:13px; text-transform:uppercase; color:var(--color-text);">Code Skin Duffus</div>';
      html += '<div class="code-field-group">';
      html += '<input type="text" readonly value="' + skinCode + '" id="input-skin-code">';
      html += '<button class="skinator-btn primary" id="btn-copy-skin-code">Copier</button>';
      html += '</div>';

      html += '<div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:4px;">';
      html += '<a href="https://duffus.fr/skinator/' + skinCode + '" target="_blank" class="skinator-btn gold" style="text-decoration:none;">🚀 Ouvrir sur Duffus.fr ↗</a>';
      html += '<button class="skinator-btn" id="btn-toggle-3d">' + (this.show3D ? '👁️ Masquer la 3D' : '👁️ Visualiser la 3D ici') + '</button>';
      html += '</div>';
      html += '</div>';

      if (this.show3D) {
        html += '<div class="skinator-3d-box">';
        html += '<iframe src="https://duffus.fr/skinator/' + skinCode + '" title="Rendu 3D Duffus" allow="fullscreen"></iframe>';
        html += '</div>';
      }

      html += '</div>';
      html += '</div>';
      return html;
    },

    renderGallery: function() {
      var saved = loadSavedSkins();
      var self = this;
      if (!saved.length) {
        return '<div style="background:var(--color-panel-2); border:1px solid var(--color-line); padding:40px 20px; text-align:center;">' +
          '<div style="font-family:Oswald,sans-serif; font-size:18px; text-transform:uppercase; color:var(--color-muted); margin-bottom:10px;">Aucun skin sauvegardé</div>' +
          '<div style="font-size:12.5px; color:var(--color-faint); margin-bottom:20px;">Créez votre premier skin dans l\'éditeur et cliquez sur "Sauvegarder" pour le retrouver ici.</div>' +
          '<button class="skinator-btn primary" id="btn-go-editor">Créer un skin</button>' +
          '</div>';
      }

      var html = '<div style="display:flex; flex-direction:column; gap:16px;">';
      html += '<div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">';
      html += '<div style="font-family:Oswald,sans-serif; font-size:16px; text-transform:uppercase; color:var(--dofus-emerald);">Vos Skins Sauvegardés (' + saved.length + ')</div>';
      html += '<div style="display:flex; gap:8px;">';
      html += '<button class="skinator-btn sm" id="btn-export-skins">📥 Sauvegarder (Export JSON)</button>';
      html += '<label class="skinator-btn sm" style="cursor:pointer;">📤 Restaurer (Import JSON)<input type="file" id="file-import-skins" accept=".json" style="display:none;"></label>';
      html += '</div>';
      html += '</div>';

      html += '<div class="gallery-grid">';
      saved.forEach(function(item) {
        var breed = self.breeds.find(function(b) { return b.id === item.breedId; });
        var breedName = breed ? breed.name : "Classe";
        var colors = item.couleurs || {};

        html += '<div class="gallery-card">';
        html += '<div class="g-head">';
        html += '<div><h4 class="g-title">' + item.name + '</h4>';
        html += '<div class="g-meta">' + breedName + ' ' + (item.gender === "female" ? "♀" : "♂") + ' · ' + (item.updatedAt || '') + '</div>';
        html += '</div></div>';

        html += '<div class="g-colors">';
        [0, 1, 2, 3, 4].forEach(function(idx) {
          html += '<div class="g-dot" style="background:' + numToHex(colors[idx]) + '" title="' + COLOR_CHANNELS[idx].label + ': ' + numToHex(colors[idx]) + '"></div>';
        });
        html += '</div>';

        html += '<div class="g-slots">';
        Object.keys(item.slots || {}).forEach(function(slotName) {
          var itId = item.slots[slotName];
          var itObj = self.itemsById[itId];
          if (!itObj) return;
          html += '<span class="g-slot-pill" title="' + slotName + ': ' + itObj.name + '"><img src="https://duffus.fr/dofus-data/img/item/2x/' + itObj.icon + '-128.png" alt="" loading="lazy">' + itObj.name + '</span>';
        });
        html += '</div>';

        html += '<div class="g-actions">';
        html += '<button class="skinator-btn primary sm" data-load-skin="' + item.id + '">⚡ Charger</button>';
        html += '<a href="https://duffus.fr/skinator/' + item.code + '" target="_blank" class="skinator-btn gold sm" style="text-decoration:none;">🌐 3D ↗</a>';
        html += '<button class="skinator-btn sm" data-copy-code="' + item.code + '">📋 Code</button>';
        html += '<button class="skinator-btn danger sm" data-delete-skin="' + item.id + '" style="margin-left:auto;">🗑️</button>';
        html += '</div>';

        html += '</div>';
      });
      html += '</div>';
      html += '</div>';
      return html;
    },

    renderItemModal: function(slotId) {
      var slotDef = SLOTS.find(function(s) { return s.id === slotId; }) || { label: slotId };
      var allSlotItems = this.itemsBySlot[slotId] || [];
      var query = (this.modalSearch || "").trim().toLowerCase();
      var filtered = query ? allSlotItems.filter(function(it) { return it.name.toLowerCase().indexOf(query) !== -1; }) : allSlotItems;
      var displayItems = filtered.slice(0, 100);

      var html = '<div class="skinator-modal-backdrop" id="modal-backdrop">';
      html += '<div class="skinator-modal-dialog">';
      html += '<div class="modal-header">';
      html += '<h3>Équiper ' + slotDef.label + ' (' + filtered.length + ' disponibles)</h3>';
      html += '<button class="close-modal-btn" id="btn-close-modal">✕</button>';
      html += '</div>';

      html += '<div class="modal-search-bar">';
      html += '<input type="text" placeholder="Rechercher par nom (ex: Voile d\'encre, Solomonk...)" value="' + this.modalSearch + '" id="modal-search-input" autofocus>';
      html += '</div>';

      html += '<div class="modal-items-scroll">';
      if (displayItems.length) {
        displayItems.forEach(function(it) {
          html += '<button type="button" class="modal-item-card" data-select-item="' + it.id + '">';
          html += '<img src="https://duffus.fr/dofus-data/img/item/2x/' + it.icon + '-128.png" alt="" loading="lazy">';
          html += '<div class="mic-text"><div class="mic-name">' + it.name + '</div><div class="mic-lvl">Niv. ' + it.lvl + '</div></div>';
          html += '</button>';
        });
      } else {
        html += '<div style="grid-column: 1/-1; padding:30px; text-align:center; color:var(--color-muted);">Aucun équipement trouvé pour "' + this.modalSearch + '"</div>';
      }
      html += '</div>';
      html += '</div>';
      html += '</div>';
      return html;
    },

    attachEvents: function() {
      var root = this.mountEl;
      if (!root) return;
      var self = this;

      var btnStudio = root.querySelector("#btn-view-studio");
      if (btnStudio) btnStudio.addEventListener("click", function() { self.activeView = "studio"; self.render(); });

      var btnGallery = root.querySelector("#btn-view-gallery");
      if (btnGallery) btnGallery.addEventListener("click", function() { self.activeView = "gallery"; self.render(); });

      var btnGoEditor = root.querySelector("#btn-go-editor");
      if (btnGoEditor) btnGoEditor.addEventListener("click", function() { self.activeView = "studio"; self.render(); });

      var btnSave = root.querySelector("#btn-save-skin");
      if (btnSave) btnSave.addEventListener("click", function() { self.saveCurrentSkin(); });

      var btnImport = root.querySelector("#btn-import-code");
      if (btnImport) btnImport.addEventListener("click", function() { self.importSkinPrompt(); });

      var btnReset = root.querySelector("#btn-reset-skin");
      if (btnReset) btnReset.addEventListener("click", function() { self.resetSkin(); });

      var btnCopyCode = root.querySelector("#btn-copy-skin-code");
      if (btnCopyCode) btnCopyCode.addEventListener("click", function() { self.copySkinCode(); });

      var btnCopyColors = root.querySelector("#btn-copy-dofus-colors");
      if (btnCopyColors) btnCopyColors.addEventListener("click", function() { self.copyDofusColors(); });

      var btnToggle3d = root.querySelector("#btn-toggle-3d");
      if (btnToggle3d) btnToggle3d.addEventListener("click", function() { self.show3D = !self.show3D; self.render(); });

      var btnExport = root.querySelector("#btn-export-skins");
      if (btnExport) btnExport.addEventListener("click", function() { self.exportAllSkins(); });

      var fileImport = root.querySelector("#file-import-skins");
      if (fileImport) fileImport.addEventListener("change", function(e) { self.importAllSkins(e); });

      root.querySelectorAll("[data-load-skin]").forEach(function(btn) {
        btn.addEventListener("click", function() { self.loadSkin(btn.dataset.loadSkin); });
      });

      root.querySelectorAll("[data-delete-skin]").forEach(function(btn) {
        btn.addEventListener("click", function() { self.deleteSavedSkin(btn.dataset.deleteSkin); });
      });

      root.querySelectorAll("[data-copy-code]").forEach(function(btn) {
        btn.addEventListener("click", function() {
          navigator.clipboard.writeText(btn.dataset.copyCode).then(function() { showToast("Code copié !"); });
        });
      });

      var selectBreed = root.querySelector("#select-breed");
      if (selectBreed) selectBreed.addEventListener("change", function(e) { self.setBreed(e.target.value); });

      var btnMale = root.querySelector("#btn-gender-male");
      if (btnMale) btnMale.addEventListener("click", function() { self.setGender("male"); });

      var btnFemale = root.querySelector("#btn-gender-female");
      if (btnFemale) btnFemale.addEventListener("click", function() { self.setGender("female"); });

      root.querySelectorAll("[data-open-slot]").forEach(function(btn) {
        btn.addEventListener("click", function() {
          self.modalSlot = btn.dataset.openSlot;
          self.modalSearch = "";
          self.render();
          var inp = self.mountEl.querySelector("#modal-search-input");
          if (inp) inp.focus();
        });
      });

      root.querySelectorAll("[data-unequip]").forEach(function(btn) {
        btn.addEventListener("click", function() { self.unequipItem(btn.dataset.unequip); });
      });

      root.querySelectorAll("[data-apply-color]").forEach(function(chip) {
        chip.addEventListener("click", function() {
          var col = chip.dataset.applyColor;
          self.setColor(2, col);
          showToast("Couleur " + col + " appliquée à Habit 1 !");
        });
      });

      root.querySelectorAll(".color-picker").forEach(function(inp) {
        inp.addEventListener("input", function(e) {
          self.setColor(Number(e.target.dataset.channel), e.target.value);
        });
      });

      root.querySelectorAll(".color-input").forEach(function(inp) {
        inp.addEventListener("change", function(e) {
          var ch = Number(e.target.dataset.hexChannel);
          var val = e.target.value.trim();
          if (val.indexOf("#") !== 0) val = "#" + val;
          if (/^#[0-9a-fA-F]{6}$/.test(val)) {
            self.setColor(ch, val);
          } else {
            showToast("Code hex invalide");
            self.render();
          }
        });
      });

      root.querySelectorAll("[data-copy-hex]").forEach(function(btn) {
        btn.addEventListener("click", function() {
          navigator.clipboard.writeText(btn.dataset.copyHex).then(function() {
            showToast("Code " + btn.dataset.copyHex + " copié !");
          });
        });
      });

      var backdrop = root.querySelector("#modal-backdrop");
      if (backdrop) {
        backdrop.addEventListener("click", function(e) {
          if (e.target === backdrop) {
            self.modalSlot = null;
            self.render();
          }
        });

        var btnClose = root.querySelector("#btn-close-modal");
        if (btnClose) btnClose.addEventListener("click", function() {
          self.modalSlot = null;
          self.render();
        });

        var sInput = root.querySelector("#modal-search-input");
        if (sInput) {
          sInput.addEventListener("input", function(e) {
            self.modalSearch = e.target.value;
            var scroll = root.querySelector(".modal-items-scroll");
            if (scroll && self.modalSlot) {
              var allSlotItems = self.itemsBySlot[self.modalSlot] || [];
              var q = self.modalSearch.trim().toLowerCase();
              var filtered = q ? allSlotItems.filter(function(it) { return it.name.toLowerCase().indexOf(q) !== -1; }) : allSlotItems;
              var displayItems = filtered.slice(0, 100);
              var itemsHtml = "";
              if (displayItems.length) {
                displayItems.forEach(function(it) {
                  itemsHtml += '<button type="button" class="modal-item-card" data-select-item="' + it.id + '">';
                  itemsHtml += '<img src="https://duffus.fr/dofus-data/img/item/2x/' + it.icon + '-128.png" alt="" loading="lazy">';
                  itemsHtml += '<div class="mic-text"><div class="mic-name">' + it.name + '</div><div class="mic-lvl">Niv. ' + it.lvl + '</div></div>';
                  itemsHtml += '</button>';
                });
              } else {
                itemsHtml = '<div style="grid-column: 1/-1; padding:30px; text-align:center; color:var(--color-muted);">Aucun équipement trouvé pour "' + self.modalSearch + '"</div>';
              }
              scroll.innerHTML = itemsHtml;
              scroll.querySelectorAll("[data-select-item]").forEach(function(itemBtn) {
                itemBtn.addEventListener("click", function() {
                  self.equipItem(self.modalSlot, Number(itemBtn.dataset.selectItem));
                });
              });
            }
          });
        }

        root.querySelectorAll("[data-select-item]").forEach(function(itemBtn) {
          itemBtn.addEventListener("click", function() {
            self.equipItem(self.modalSlot, Number(itemBtn.dataset.selectItem));
          });
        });
      }
    }
  };

  window.StashApp.register("dofus", {
    meta: {
      theme: "dofus",
      eyebrow: "📦 Stash // Personal memo",
      title: "<span>R3dn0</span>'s Notes",
      sub: "Outils, créateur de skins et récapitulatifs pour Dofus.",
      footer: "R3dn0 — Dofus notes · mis à jour au fil des aventures dans le Monde des Douze"
    },
    tabs: [
      { id: "tools", label: "Tools" }
    ],
    data: {
      tools: {
        filters: [
          { id: "all", label: "All" },
          { id: "tools", label: "Tools" }
        ],
        categories: [
          {
            id: "tools",
            label: "Tools",
            subcats: [
              {
                id: "skinator-app",
                type: "skinator",
                label: "Skinator",
                recap: "Créez, personnalisez et sauvegardez vos skins d'apparat Dofus. Compatible avec les codes de partage <a href='https://duffus.fr/skinator/' target='_blank'>Duffus.fr</a>, avec recherche parmi 3 800+ équipements officiels, suggestions de teintes d'harmonie et coffre-fort de skins personnel.",
                items: []
              }
            ]
          }
        ]
      }
    },
    subcatHTML: function(sc) {
      if (sc.type === "skinator" || sc.id === "skinator-app" || sc.label === "Skinator") {
        var container = document.createElement("div");
        container.className = "subcat";
        container.innerHTML = '<h3>' + sc.label + '</h3>' +
          (sc.recap ? '<div class="recap">' + sc.recap + '</div>' : '') +
          '<div id="skinator-mount-point"></div>';
        setTimeout(function() {
          var mountEl = container.querySelector("#skinator-mount-point");
          if (mountEl && window.DofusSkinator) {
            window.DofusSkinator.mount(mountEl);
          }
        }, 0);
        return container;
      }
      return "";
    }
  });

})();
