window.StashApp.register('abi', {
  meta: {
    theme: 'abi',
    eyebrow: "📦 Stash // Pense-bête personnel",
    title: "Notes de <span>R3dn0</span>",
    sub: "Notes sur Arena Breakout: Infinite — loadouts, builds, guides et résumés de vidéos glanés au fil de mes sessions. Pas une vérité absolue, juste ce que j'ai noté pour m'y retrouver. Prix au moment des vidéos, à vérifier sur le marché.",
    footer: "R3dn0 — Notes ABI · prix indicatifs (au moment des vidéos) · mis à jour au fil du temps"
  },
  tabs: [
    { id: 'builds', label: 'Builds' }
  ],
  data: {
  builds: {
    filters: [
      {id:'guide', label:'The Only Loadout Guide'},
      {id:'all', label:'Tout'},
    ],
    categories: [
      {
        id:'guide',
        label:'The Only Loadout Guide',
        subcats:[
          {
            label:'📼 La vidéo',
            recap:'6 loadouts pour le mode <b>Lockdown</b> (2 Budget, 2 Hybrid, 2 Chad) expliqués par <b>Pork TV</b> — 2500 raids, 450M de stash value, top 100. La méthode : choisis ta catégorie, copie le blueprint, adapte-le.<br><br>🎬 <a href="https://www.youtube.com/watch?v=MAYzuyx7XV4">Voir la vidéo — The Only Loadout Guide You\'ll Ever Need</a>',
            items:[]
          },
          {
            label:'💰 Budget',
            recap:'Simple, pas cher, efficace. Armure sous T4 = quasi inutile en Lockdown (80% des joueurs roulent en munitions T4). Les casques font exception — la chance de ricochet est réelle. Priorité absolue : arme et munitions, toujours.',
            items:[
              { cat:'budget', name:'T-951 — simple, efficace',
                img:'assets/abi/T951.webp',
                weapon:'T-951 budget build (~170k)',
                ammo:'T3 en base, top-loadé T4',
                helmet:'Retro Steel (6k, ricochet élevé)',
                headset:'M32 (le moins cher qui vaut le coup)',
                rig:'BH Rig',
                bag:'Medfield (ou équivalent)',
                total:'220-240k',
                note:"Tout gun vers ce prix peut compéter. Total avant meds et munitions — le prix fluctue selon l'heure." },
              { cat:'budget', name:'AUG — le monstre budget',
                img:'assets/abi/AUG.webp',
                weapon:'AUG (une des meilleures guns budget)',
                ammo:'5.56 A1 (T4) en continu — pas besoin de top load',
                helmet:'Retro Steel',
                headset:'M32',
                rig:'Hunter vest (plus de place, slot 2x2)',
                bag:'XA4 tactical backpack',
                note:"Le A1 est très bon marché en ce moment pour un T4, et il tape sérieusement." }
            ]
          },
          {
            label:'🔀 Hybrid',
            recap:"Tu peux farm tranquille ou foncer dans un combat — les deux marchent. Budget d'arme entre 300 et 400k.",
            items:[
              { cat:'hybrid', name:'AK-12 — le best tier de Lockdown',
                img:'assets/abi/AK_12.webp',
                weapon:'AK-12 (ammo pas chère, gros dégâts, recoil gérable)',
                helmet:'Helicopter helmet (T4, audio intégré)',
                rig:'FA Multi (double slot 2x2, stack nickel)',
                armor:'6B23 (un des meilleurs T4)',
                bag:'Rush backpack (best pour stacker)',
                total:'764k + 100-150k ammo/consos',
                note:"Particulièrement fort pour les nouveaux joueurs — tu vas détruire du monde." },
              { cat:'hybrid', name:'AK-12 — variante awareness',
                img:'assets/abi/AK_12.webp',
                weapon:'AK-12',
                helmet:'KSS tactical + visière T4',
                headset:'Commander',
                rig:'H-Tac armored rig (A8 perso, A9 pour plus de slots)',
                bag:'Chapman military backpack (un peu plus grand que le Rush)',
                total:'835k + 100-150k ammo/consos',
                note:'Les deux rigs sont solides — choisis selon ton playstyle.' }
            ]
          },
          {
            label:'🔥 Chad',
            recap:"Pour les sweaty players qui veulent du PvP. On peut dépasser 1M de valeur en Lockdown — astuce : strip les attachements de ton arme pour passer sous le cap des 1M.",
            items:[
              { cat:'chad', name:'HK Shredder — PvP sous 1M',
                img:'assets/abi/H416.webp',
                weapon:'HK Shredder build (~400k)',
                helmet:'03H (protection T5)',
                headset:'Commander ou GS2',
                rig:'Warrior rig (T5 — meilleur ratio valeur/prix)',
                bag:'Rush backpack',
                total:'juste sous 1M',
                note:"Faisable avec n'importe quelle arme — il suffit de strip les attachements." },
              { cat:'chad', name:'Masochist — le perso du créateur',
                img:'assets/abi/AK_12.webp',
                weapon:'AK-12 ou HK (au choix)',
                helmet:'Masochist (Mad Skull) — le casque sans son',
                rig:'M4 armored rig (le plus tanky des T5, double slot 2x2)',
                bag:'Rush backpack',
                note:"Les deux armes marchent — le drill est le même." }
            ]
          }
        ]
      }
    ]
  }
  },
  tagLabels: {
  budget:'Budget', hybrid:'Hybrid', chad:'Chad'
  },
  subcatHTML: function(sc, tagLabels) {
    const gearFields = [
      ['weapon','Arme'],
      ['ammo','Munitions'],
      ['helmet','Casque'],
      ['headset','Casque audio'],
      ['rig','Gilet / Rig'],
      ['armor','Armure'],
      ['bag','Sac']
    ];
    return `
      <div class="subcat">
        <h3>${sc.label}</h3>
        ${sc.recap ? `<div class="recap">${sc.recap}</div>` : ''}
        ${sc.items.length ? `<div class="cards">
          ${sc.items.map(it => `
            <div class="card loadout">
              <div class="loadout-head">
                <span class="loadout-cat c-${it.cat}">${tagLabels[it.cat] || it.cat}</span>
                ${it.total ? `<span class="loadout-total">≈ ${it.total}</span>` : ''}
              </div>
              <div class="loadout-name">${it.name}</div>
              <div class="loadout-main${it.img ? ' has-img' : ''}">
                <div class="loadout-gear">
                  ${gearFields.filter(f => it[f[0]]).map(f => `<div class="gear-row"><span>${f[1]}</span><b>${it[f[0]]}</b></div>`).join('')}
                </div>
                ${it.img ? `<div class="loadout-img"><img src="${it.img}" alt="${it.name}" loading="lazy"></div>` : ''}
              </div>
              ${it.note ? `<div class="loadout-note">${it.note}</div>` : ''}
            </div>
          `).join('')}
        </div>` : ''}
      </div>
    `;
  },
  legends: {
  builds: [
    {label:'Budget — l\'essentiel pour exister (~200-240k)', color:'var(--color-accent)'},
    {label:'Hybrid — farm + combat (arme 300-400k)', color:'var(--abi-orange)'},
    {label:'Chad — PvP sweaty (1M+, gear détruit)', color:'var(--abi-red)'},
  ]
  }
});
