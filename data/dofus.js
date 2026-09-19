// Dofus Skinator Module - Native Visuals & Local Storage
(function() {
  "use strict";

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

  function strToHex(str) {
    return Array.from(String(str)).map(function(c) {
      return c.charCodeAt(0).toString(16).padStart(2, "0");
    }).join("");
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

    // Current skin state
    skin: {
      id: null,
      name: "Nouveau Skin",
      breedId: 8, // Iop
      gender: "male",
      headKey: "0",
      bodyKey: "1",
      couleurs: { 0: 15704172, 1: 15301153, 2: 14736065, 3: 12200764, 4: 484225 },
      slots: {}
    },

    direction: 1, // 0 to 7 (1 = 3/4 face standard)
    viewMode: "full", // 'full' or 'head'
    activeView: "studio", // 'studio' or 'gallery'
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

    getRenderUrl: function(skinObj, opts) {
      opts = opts || {};
      var dir = opts.direction != null ? opts.direction : this.direction;
      var mode = opts.mode || this.viewMode;
      var size = opts.size || (mode === "head" ? "200_200" : "350_350");

      var s = skinObj || this.skin;
      var breed = this.breeds.find(function(b) { return b.id === s.breedId; });
      var gender = s.gender === "female" ? "female" : "male";
      var isFemale = gender === "female";

      var headsMap = (breed && breed.heads) ? breed.heads[gender] : null;
      var bodiesMap = (breed && breed.bodies) ? breed.bodies[gender] : null;

      var headKey = String(s.headKey != null ? s.headKey : "0");

      // Always use the valid base body skin ("1") for the server renderer so the body is always rendered
      var bodySkin = (bodiesMap && bodiesMap["1"]) || (isFemale ? 11 : 10);
      var headSkin = (headsMap && headsMap[headKey]) || (headsMap && headsMap["0"]) || (isFemale ? 2020 : 2012);

      var skins = [bodySkin, headSkin];

      if (s.slots) {
        var self = this;
        Object.keys(s.slots).forEach(function(slotName) {
          var itId = s.slots[slotName];
          var it = self.itemsById[itId];
          if (it) {
            var asset = isFemale ? (it.femaleAssetId || it.assetId) : it.assetId;
            if (asset) skins.push(asset);
          }
        });
      }

      var colors = s.couleurs || {};
      var colorParts = [];
      for (var i = 0; i < 5; i++) {
        if (colors[i] != null) {
          colorParts.push((i + 1) + "=" + Number(colors[i]));
        }
      }

      var lookStr = "{1|" + skins.join(",") + "|" + colorParts.join(",") + "|100}";
      var hexLook = strToHex(lookStr);
      return "https://renderer.dofusdb.fr/look/" + hexLook + "/" + mode + "/" + dir + "/" + size + ".png";
    },

    setBreed: function(breedId) {
      this.skin.breedId = Number(breedId);
      var self = this;
      var breed = this.breeds.find(function(b) { return b.id === self.skin.breedId; });
      if (breed) {
        if (breed.colors) {
          var colors = breed.colors[this.skin.gender] || breed.colors.male || [];
          colors.forEach(function(c, idx) {
            if (idx < 5) self.skin.couleurs[idx] = c;
          });
        }
        var gender = this.skin.gender === "female" ? "female" : "male";
        var headsMap = breed.heads ? breed.heads[gender] : null;
        if (headsMap && !headsMap[this.skin.headKey]) {
          var keys = Object.keys(headsMap);
          this.skin.headKey = keys.length ? keys[0] : "0";
        }
      }
      this.render();
    },

    setGender: function(gender) {
      this.skin.gender = gender;
      var self = this;
      var breed = this.breeds.find(function(b) { return b.id === self.skin.breedId; });
      if (breed) {
        if (breed.colors) {
          var colors = breed.colors[gender] || [];
          colors.forEach(function(c, idx) {
            if (idx < 5) self.skin.couleurs[idx] = c;
          });
        }
        var headsMap = breed.heads ? breed.heads[gender] : null;
        if (headsMap && !headsMap[this.skin.headKey]) {
          var keys = Object.keys(headsMap);
          this.skin.headKey = keys.length ? keys[0] : "0";
        }
      }
      this.render();
    },

    setHeadKey: function(key) {
      this.skin.headKey = String(key);
      this.render();
    },

    cycleHead: function(delta) {
      var self = this;
      var breed = this.breeds.find(function(b) { return b.id === self.skin.breedId; });
      var gender = this.skin.gender === "female" ? "female" : "male";
      var headsMap = (breed && breed.heads) ? breed.heads[gender] : null;
      if (!headsMap) return;
      var keys = Object.keys(headsMap);
      if (!keys.length) return;
      var currentIdx = keys.indexOf(String(this.skin.headKey));
      if (currentIdx === -1) currentIdx = 0;
      var nextIdx = (currentIdx + delta + keys.length) % keys.length;
      this.skin.headKey = keys[nextIdx];
      this.render();
    },

    setBodyKey: function(key) {
      this.skin.bodyKey = String(key);
      this.render();
    },

    setColor: function(channelIdx, hexValue) {
      this.skin.couleurs[channelIdx] = hexToNum(hexValue);
      this.render();
    },

    rotateCharacter: function(delta) {
      this.direction = (this.direction + delta + 8) % 8;
      this.updateAvatarImage();
    },

    toggleViewMode: function() {
      this.viewMode = this.viewMode === "full" ? "head" : "full";
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
      this.skin.headKey = "0";
      this.skin.bodyKey = "1";
      this.setBreed(this.skin.breedId);
      showToast("Skin réinitialisé");
    },

    saveCurrentSkin: function() {
      var self = this;
      var breed = this.breeds.find(function(b) { return b.id === self.skin.breedId; });
      var defaultName = (breed ? breed.name : "Skin") + " " + (this.skin.gender === "female" ? "♀" : "♂");
      var name = prompt("Donnez un nom à ce skin :", this.skin.name === "Nouveau Skin" ? defaultName : this.skin.name);
      if (!name) return;

      var saved = loadSavedSkins();
      var skinEntry = {
        id: this.skin.id || "skin_" + Date.now(),
        name: name.trim(),
        breedId: this.skin.breedId,
        gender: this.skin.gender,
        headKey: String(this.skin.headKey != null ? this.skin.headKey : "0"),
        bodyKey: String(this.skin.bodyKey != null ? this.skin.bodyKey : "1"),
        couleurs: Object.assign({}, this.skin.couleurs),
        slots: Object.assign({}, this.skin.slots),
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
        headKey: String(target.headKey != null ? target.headKey : "0"),
        bodyKey: String(target.bodyKey != null ? target.bodyKey : "1"),
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
      a.download = "dofus-skins-collection.json";
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

    downloadCurrentPng: function() {
      var url = this.getRenderUrl(this.skin, { size: "600_600" });
      var a = document.createElement("a");
      a.href = url;
      a.download = (this.skin.name || "dofus-skin").replace(/[^a-zA-Z0-9-_]/g, "_") + ".png";
      a.target = "_blank";
      a.click();
      showToast("Téléchargement du PNG haute résolution...");
    },

    updateAvatarImage: function() {
      var img = this.mountEl ? this.mountEl.querySelector("#live-avatar-img") : null;
      if (img) {
        img.classList.remove("morph-body-1", "morph-body-2", "morph-body-3");
        img.classList.add("morph-body-" + (this.skin.bodyKey || "1"));
        img.classList.add("loading");
        var newUrl = this.getRenderUrl();
        img.src = newUrl;
        img.onload = function() { img.classList.remove("loading"); };
        img.onerror = function() { img.classList.remove("loading"); };
      }
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
      html += '<button class="skinator-btn" id="btn-download-png">📸 Télécharger PNG</button>';
      html += '<button class="skinator-btn" id="btn-reset-skin">🔄 Nouveau</button>';
      html += '</div>';
      html += '</div>';

      if (this.activeView === "gallery") {
        html += this.renderGallery();
      } else {
        html += this.renderStudio(currentBreed);
      }

      html += '</div>';

      if (this.modalSlot) {
        html += this.renderItemModal(this.modalSlot);
      }

      this.mountEl.innerHTML = html;
      this.attachEvents();
    },

    renderStudio: function(currentBreed) {
      var self = this;
      var avatarUrl = this.getRenderUrl();
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

      var gender = this.skin.gender === "female" ? "female" : "male";
      var headsMap = (currentBreed && currentBreed.heads) ? currentBreed.heads[gender] : null;
      var bodiesMap = (currentBreed && currentBreed.bodies) ? currentBreed.bodies[gender] : null;
      var headKeys = headsMap ? Object.keys(headsMap) : ["0"];
      var currentHead = String(this.skin.headKey != null ? this.skin.headKey : "0");
      var currentBody = String(this.skin.bodyKey != null ? this.skin.bodyKey : "1");
      var currentHeadIdx = headKeys.indexOf(currentHead);
      if (currentHeadIdx === -1) currentHeadIdx = 0;

      var headsHtml = "";
      headKeys.forEach(function(k, index) {
        var headSkinId = headsMap ? headsMap[k] : null;
        var isActive = (String(k) === currentHead) ? " active" : "";
        var thumbUrl = headSkinId ? ("https://duffus.fr/head-previews/" + headSkinId + ".png") : "";
        headsHtml += '<button type="button" class="head-cell-btn' + isActive + '" data-head-key="' + k + '" title="Visage ' + (index + 1) + '">';
        if (thumbUrl) {
          headsHtml += '<img src="' + thumbUrl + '" alt="Visage ' + (index + 1) + '" loading="lazy" onerror="this.style.display=\'none\';">';
        }
        headsHtml += '<span class="head-cell-num">' + (index + 1) + '</span>';
        headsHtml += '</button>';
      });

      var bodyDefs = [
        { key: "1", label: "Standard" },
        { key: "2", label: "Fin" },
        { key: "3", label: "Musclé" }
      ];
      var bodiesHtml = "";
      bodyDefs.forEach(function(bd) {
        var bodySkinId = bodiesMap ? bodiesMap[bd.key] : null;
        var isActive = (currentBody === bd.key) ? " active" : "";
        var thumbUrl = bodySkinId ? ("https://duffus.fr/body-previews/" + bodySkinId + ".png") : "";
        bodiesHtml += '<button type="button" class="body-card-btn' + isActive + '" data-body-key="' + bd.key + '" title="' + bd.label + '">';
        if (thumbUrl) {
          bodiesHtml += '<img src="' + thumbUrl + '" alt="' + bd.label + '" class="body-thumb" loading="lazy" onerror="this.style.display=\'none\';">';
        }
        bodiesHtml += '<span class="body-card-name">' + bd.label + '</span>';
        bodiesHtml += '</button>';
      });

      html += '<div class="skinator-morph-meta">';
      html += '<div class="morph-group">';
      html += '<div class="morph-header">';
      html += '<span class="morph-label">Visage (<span class="head-current-num">' + (currentHeadIdx + 1) + '</span> / ' + headKeys.length + ')</span>';
      html += '<div class="morph-nav-btns">';
      html += '<button type="button" class="skinator-btn sm" id="btn-head-prev" title="Visage précédent">◀</button>';
      html += '<button type="button" class="skinator-btn sm" id="btn-head-next" title="Visage suivant">▶</button>';
      html += '</div>';
      html += '</div>';
      html += '<div class="heads-visual-grid">' + headsHtml + '</div>';
      html += '</div>';

      html += '<div class="morph-group">';
      html += '<div class="morph-header">';
      html += '<span class="morph-label">Corpulence</span>';
      html += '</div>';
      html += '<div class="body-visual-grid">' + bodiesHtml + '</div>';
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

      // Colonne 2 : Rendu Visuel Natif & Couleurs
      html += '<div class="skinator-panel">';
      html += '<h3 class="skinator-panel-title">2. Rendu Visuel en Direct</h3>';

      // Visual stage with character render
      html += '<div class="skinator-preview-stage">';
      html += '<div class="avatar-render-wrap">';
      html += '<img id="live-avatar-img" class="avatar-img morph-body-' + (this.skin.bodyKey || "1") + '" src="' + avatarUrl + '" alt="Rendu de ' + this.skin.name + '">';
      html += '</div>';

      html += '<div class="avatar-controls">';
      html += '<button class="skinator-btn sm" id="btn-rot-left" title="Tourner à gauche">⟲ Tourner</button>';
      html += '<button class="skinator-btn sm" id="btn-rot-right" title="Tourner à droite">Tourner ⟳</button>';
      html += '<button class="skinator-btn sm" id="btn-toggle-zoom" title="Changer le zoom">' + (this.viewMode === "full" ? "🔍 Zoom Visage" : "👤 Corps Entier") + '</button>';
      html += '</div>';
      html += '</div>';

      // Palette de couleurs
      html += '<h3 class="skinator-panel-title" style="margin-top:4px;">3. Palette de Couleurs <button class="skinator-btn sm" id="btn-copy-dofus-colors" title="Format: #HEX1, #HEX2...">📋 Copier pour Dofus</button></h3>';

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
        var cardRenderUrl = self.getRenderUrl(item, { direction: 1, mode: "full", size: "260_260" });

        html += '<div class="gallery-card">';
        html += '<div class="g-preview-wrap">';
        html += '<img src="' + cardRenderUrl + '" alt="' + item.name + '" loading="lazy">';
        html += '</div>';

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
        html += '<button class="skinator-btn sm" data-copy-saved-colors="' + item.id + '">🎨 Couleurs</button>';
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

      var btnDownload = root.querySelector("#btn-download-png");
      if (btnDownload) btnDownload.addEventListener("click", function() { self.downloadCurrentPng(); });

      var btnReset = root.querySelector("#btn-reset-skin");
      if (btnReset) btnReset.addEventListener("click", function() { self.resetSkin(); });

      var btnCopyColors = root.querySelector("#btn-copy-dofus-colors");
      if (btnCopyColors) btnCopyColors.addEventListener("click", function() { self.copyDofusColors(); });

      var btnRotLeft = root.querySelector("#btn-rot-left");
      if (btnRotLeft) btnRotLeft.addEventListener("click", function() { self.rotateCharacter(-1); });

      var btnRotRight = root.querySelector("#btn-rot-right");
      if (btnRotRight) btnRotRight.addEventListener("click", function() { self.rotateCharacter(1); });

      var btnToggleZoom = root.querySelector("#btn-toggle-zoom");
      if (btnToggleZoom) btnToggleZoom.addEventListener("click", function() { self.toggleViewMode(); });

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

      root.querySelectorAll("[data-copy-saved-colors]").forEach(function(btn) {
        btn.addEventListener("click", function() {
          var target = loadSavedSkins().find(function(s) { return s.id === btn.dataset.copySavedColors; });
          if (target && target.couleurs) {
            var parts = COLOR_CHANNELS.map(function(ch) { return numToHex(target.couleurs[ch.id] || 0); });
            var text = parts.join(", ");
            navigator.clipboard.writeText(text).then(function() { showToast("Codes couleurs copiés : " + text); });
          }
        });
      });

      var selectBreed = root.querySelector("#select-breed");
      if (selectBreed) selectBreed.addEventListener("change", function(e) { self.setBreed(e.target.value); });

      var btnMale = root.querySelector("#btn-gender-male");
      if (btnMale) btnMale.addEventListener("click", function() { self.setGender("male"); });

      var btnFemale = root.querySelector("#btn-gender-female");
      if (btnFemale) btnFemale.addEventListener("click", function() { self.setGender("female"); });

      root.querySelectorAll("[data-head-key]").forEach(function(btn) {
        btn.addEventListener("click", function() {
          self.setHeadKey(btn.dataset.headKey);
        });
      });

      var btnHeadPrev = root.querySelector("#btn-head-prev");
      if (btnHeadPrev) {
        btnHeadPrev.addEventListener("click", function() {
          self.cycleHead(-1);
        });
      }

      var btnHeadNext = root.querySelector("#btn-head-next");
      if (btnHeadNext) {
        btnHeadNext.addEventListener("click", function() {
          self.cycleHead(1);
        });
      }

      root.querySelectorAll("[data-body-key]").forEach(function(btn) {
        btn.addEventListener("click", function() {
          self.setBodyKey(btn.dataset.bodyKey);
        });
      });

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
          var ch = Number(e.target.dataset.channel);
          self.skin.couleurs[ch] = hexToNum(e.target.value);
          var txt = root.querySelector('[data-hex-channel="' + ch + '"]');
          if (txt) txt.value = e.target.value;
          self.updateAvatarImage();
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
                recap: "Créez, personnalisez et sauvegardez vos skins d\'apparat Dofus. Rendu visuel en direct avec rotation à 360°, recherche parmi plus de 3 800 équipements officiels et coffre-fort de skins personnel.",
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
