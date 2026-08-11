window.StashApp.register('abi', {
  meta: {
    theme: 'abi',
    eyebrow: "📦 Stash // Personal memo",
    title: "<span>R3dn0</span>'s Notes",
    sub: "Notes on Arena Breakout: Infinite — loadouts, builds, guides and video summaries gathered over my sessions. Not an absolute truth, just what I noted to find my way around. Prices at the time of the videos, check the market.",
    footer: "R3dn0 — ABI notes · indicative prices (at the time of the videos) · updated over time"
  },
  tabs: [
    { id: 'builds', label: 'Builds' }
  ],
  data: {
  builds: {
    filters: [
      {id:'all', label:'All'},
      {id:'porktv', label:'Pork TV'},
      {id:'andrewz', label:'Andrew Z'},
    ],
    categories: [
      {
        id:'porktv',
        label:'Pork TV',
        subcats:[
          {
            label:'📼 The Only Loadout Guide',
            recap:'6 loadouts for <b>Lockdown</b> (2 Budget, 2 Hybrid, 2 Chad) broken down by <b>Pork TV</b> — 2,500 raids, 450M stash value, top 100. The method: pick your category, copy the blueprint, make it yours.<br><br>🎬 <a href="https://www.youtube.com/watch?v=MAYzuyx7XV4">Watch the video — The Only Loadout Guide You\'ll Ever Need</a>',
            items:[]
          },
          {
            label:'💰 Budget',
            recap:'Simple, cheap and effective. Armor below tier four is basically useless in Lockdown (80% of players run tier four ammo). Helmets are a different story — ricochet chance is real. Guns and ammo are always your priority.',
            items:[
              { cat:'budget', name:'T-951 — simple, effective',
                img:'assets/abi/porktv/only-loadout-guide/budget/T951.webp',
                imgFull:'assets/abi/porktv/only-loadout-guide/budget/T951-hd.webp',
                weapon:'T-951 budget build (~170k)',
                ammo:'Tier 3 base, top-loaded tier 4',
                helmet:'Retro Steel (6k, high ricochet)',
                headset:'M32 (cheapest one that is not trash)',
                rig:'BH Rig',
                bag:'Medfield (or similar)',
                total:'220-240k',
                note:"Any gun around that price point still competes. Total before meds and ammo — price varies depending on the time of day." },
              { cat:'budget', name:'AUG — the budget monster',
                img:'assets/abi/porktv/only-loadout-guide/budget/AUG.webp',
                imgFull:'assets/abi/porktv/only-loadout-guide/budget/AUG-hd.webp',
                weapon:'AUG (one of the best budget guns in the game)',
                ammo:'5.56 A1 (tier 4) all the time — no top load needed',
                helmet:'Retro Steel',
                headset:'M32',
                rig:'Hunter vest (more space, 2x2 slot)',
                bag:'XA4 tactical backpack',
                note:"The A1 is very cheap right now for a tier 4, and it still packs a serious punch." }
            ]
          },
          {
            label:'🔀 Hybrid',
            recap:"This is where 90% of players belong: you can chill and farm or rush into a fight — both work. Weapon budget between 300 and 400k.",
            items:[
              { cat:'hybrid', name:'AK-12 — the best lockdown tier gun',
                img:'assets/abi/porktv/only-loadout-guide/hybrid/AK_12.webp',
                imgFull:'assets/abi/porktv/only-loadout-guide/hybrid/AK_12-hd.webp',
                weapon:'AK-12 (cheap ammo, high damage, manageable recoil)',
                helmet:'Helicopter helmet (tier 4, built-in audio)',
                rig:'FA Multi (double 2x2 slot, stacks beautifully)',
                armor:'6B23 (one of the best tier 4 armors)',
                bag:'Rush backpack (best for stacking)',
                total:'764k + 100-150k ammo/consumables',
                note:"Especially strong for newer players — you will destroy people with this." },
              { cat:'hybrid', name:'AK-12 — awareness variant',
                img:'assets/abi/porktv/only-loadout-guide/hybrid/AK_12.webp',
                imgFull:'assets/abi/porktv/only-loadout-guide/hybrid/AK_12-hd.webp',
                weapon:'AK-12',
                helmet:'KSS tactical + tier 4 visor',
                headset:'Commander',
                rig:'H-Tac armored rig (A8 I run, A9 for more slots)',
                bag:'Chapman military backpack (slightly bigger than the Rush)',
                total:'835k + 100-150k ammo/consumables',
                note:'Both rigs are solid — pick whatever suits your playstyle.' }
            ]
          },
          {
            label:'🔥 Chad',
            recap:"For the sweaty players who want PvP. Yes, you can go over 1M value in Lockdown — tip: strip the attachments off your gun to get under the 1M cap.",
            items:[
              { cat:'chad', name:'HK Shredder — PvP under 1M',
                img:'assets/abi/porktv/only-loadout-guide/chad/H416.webp',
                imgFull:'assets/abi/porktv/only-loadout-guide/chad/H416-hd.webp',
                weapon:'HK Shredder build (~400k)',
                helmet:'03H (tier 5 protection)',
                headset:'Commander or GS2',
                rig:'Warrior rig (tier 5 — best value for money at this level)',
                bag:'Rush backpack',
                total:'just under 1M',
                note:"You can do this with any gun — just strip the attachments down." },
              { cat:'chad', name:'Masochist — the creator\'s favorite',
                img:'assets/abi/porktv/only-loadout-guide/chad/AK_12.webp',
                imgFull:'assets/abi/porktv/only-loadout-guide/chad/AK_12-hd.webp',
                weapon:'AK-12 or HK (your call)',
                helmet:'Masochist (Mad Skull) — the no-sound helmet',
                rig:'M4 armored rig (most tanky tier 5 rig, double 2x2 slot)',
                bag:'Rush backpack',
                note:"Both guns work — you know the drill by now." }
            ]
          },
          {
            label:'📼 Budget Weapon Loadouts',
            recap:'10 budget guns for <b>Lockdown</b> by <b>Pork TV</b> — two categories: Optimal Budget (max 400K, compete with everything) and Mega Budget (cheapest possible, rat gameplay). Tier five ammo is cheap, always use it.<br><br>🎬 <a href="https://www.youtube.com/watch?v=yWwMwwHEX2M">Watch the video — Budget Weapon Loadouts</a>',
            items:[]
          },
          {
            label:'🎯 Optimal Budget (max 400K)',
            recap:"Builds that are the sweet spot between budgeting and getting the most out of it. You're not going to be stingy — these guns let you compete with pretty much everything in Lockdown. All somewhat the same tier, the difference is minimal when you top-load tier five ammo.",
            items:[
              { cat:'budget', name:'M4 — annihilation machine',
                img:'assets/abi/porktv/budget-loadouts/optimal/M4.png',
                weapon:'M4A1 build (just under 400k)',
                ammo:'Tier 5 top-loaded',
                note:"Everybody loves this manly gun. Has a soul. Slightly pull down and kill everybody in sight." },
              { cat:'budget', name:'AK-12 — Juicer Destroyer',
                img:'assets/abi/porktv/budget-loadouts/optimal/AK_12.png',
                weapon:'AK-12 build',
                ammo:'Tier 5 — two-tap headshot outside effective range',
                note:"Best all-around gun because it's kind of bugged. If you have a life outside of gaming, this gun will be too sexy to refuse. Can also play with iron sights to save money." },
              { cat:'budget', name:'AMB-17 — Dominator',
                img:'assets/abi/porktv/budget-loadouts/optimal/AMB_17.png',
                weapon:'AMB-17 build',
                ammo:'Tier 5 always — cheap and shreds',
                note:"S-tier in close-quarters combat, specifically TV Station. This Dominator build is the best budget gun for TV Station. Anything more is too much, anything less is too little." },
              { cat:'budget', name:'U191 — My Girlfriend',
                img:'assets/abi/porktv/budget-loadouts/optimal/U191.png',
                weapon:'U191 build with 40-round mag',
                ammo:'Tier 5',
                note:"Best gun for lockdown all around — very easy to control. 40-round mag with tier 5 ammo is enough to kill a full squad. Everyone in the Discord uses this one." },
              { cat:'budget', name:'HK416 — the meta king',
                img:'assets/abi/porktv/budget-loadouts/optimal/H416.png',
                weapon:'HK416 iron sights build',
                ammo:'Tier 5',
                note:"Currently the best gun in the game overall. Insane TTK. Downside: ammo is pretty much trash outside effective range (47m). Close to mid-range fights only. The more you build, the bigger laser beam it becomes." }
            ]
          },
          {
            label:'💸 Mega Budget',
            recap:"The stingiest and cheapest loadouts. These builds require a specific gameplay style — ratting, playing slow. Not optimal, but they exist. If you want to improve, consider spending a bit more for the optimal category.",
            items:[
              { cat:'budget', name:'MP5 — ZC-807',
                img:'assets/abi/porktv/budget-loadouts/mega/MP5.png',
                weapon:'MP5 build (~115k)',
                ammo:'Tier 4+',
                note:"People get sold a dream that this gun will fix their negative P&L. Can do some damage below 30m effective range. Not the creator's choice, but it works for the price." },
              { cat:'budget', name:'The In-Between Build',
                img:'assets/abi/porktv/budget-loadouts/mega/ZCB.png',
                weapon:'Build shown in video',
                ammo:'Good ammo combo',
                note:"Best in-between gun build — optimized but still cheap. Almost 50m effective range, uses very good ammo. Used across several seasons with really good results." },
              { cat:'budget', name:'T-951 — the starter',
                img:'assets/abi/porktv/budget-loadouts/mega/T951.png',
                weapon:'T-951 build with 40-round mag',
                ammo:'Top-load tier 5, rest tier 4',
                note:"Low cost, packs a good punch, but won't kill a whole team. Good for solo players who know how to rotate. One of the first weapons that actually worked for the creator. Great start for new players." },
              { cat:'budget', name:'MPX — love it or hate it',
                img:'assets/abi/porktv/budget-loadouts/mega/MPX.png',
                weapon:'MPX build (~250k)',
                ammo:'Tier 4+',
                note:"Either loved or hated in the community. Some people make millions with it, others never found love with it. Give it a try — if you like the feel, it's a decent choice." },
              { cat:'budget', name:'AUG — easiest to mod',
                img:'assets/abi/porktv/budget-loadouts/mega/AUG.png',
                weapon:'AUG build (very cheap)',
                ammo:'Tier 4',
                note:"Easiest gun to mod — you don't have many options. Slap a 42-round mag and a red dot, and you've got a killing machine. Best choice for new players who want easy-to-use and easy-to-build." }
            ]
          }
        ]
      },
      {
        id:'andrewz',
        label:'Andrew Z',
        subcats:[
          {
            label:'📼 Budget M4 (~290k)',
            recap:'A budget <b>M4</b> by <b>Andrew Z</b> — bare-bones M4 shooting A1s out of SCAR mags, one of the cheapest tier 4 setups. 100k cheaper than KSS tactical + GS2.<br><br>🎬 <a href="https://www.youtube.com/watch?v=jGvOYM_w16c">Watch the video — 300k kit, 3.3M extract</a>',
            items:[]
          },
          {
            label:'💰 Budget',
            recap:'A1s do some damage. T3 helmet with built-in headphones, TM1 rig for storage and tier 4 protection.',
            items:[
              { cat:'budget', name:'M4 — Andrew Z\'s 300k kit',
                img:'assets/abi/andrewz/m4-budget/M4A1.webp',
                imgFull:'assets/abi/andrewz/m4-budget/M4A1-hd.webp',
                weapon:'M4A1 bare-bones (base gun) — A1s in SCAR mags',
                ammo:'5.56 A1 (tier 4, one of the cheapest tier 4 rounds)',
                helmet:'T3 helmet, built-in headphones (high ricochet chance)',
                rig:'TM1 (tier 4 rig — armor + storage)',
                bag:'Large camping backpack',
                total:'~290k',
                note:"vs KSS tactical + GS2 (~390k) you save ~100k. Meds: 3 liquid painkillers + a few region-set painkillers. Ran a 300k kit into a 3.3M extract (7 kills) — one safe can pay for the whole kit." }
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
      ['weapon','Weapon'],
      ['ammo','Ammo'],
      ['helmet','Helmet'],
      ['headset','Headset'],
      ['rig','Rig'],
      ['armor','Armor'],
      ['bag','Backpack']
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
                ${it.img ? `<div class="loadout-img"><img src="${it.img}" data-full="${it.imgFull || it.img}" alt="${it.name}" loading="lazy"></div>` : ''}
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
    {label:'Budget — the essentials to exist (~200-240k)', color:'var(--color-accent)'},
    {label:'Hybrid — farm + combat (300-400k weapon)', color:'var(--abi-orange)'},
    {label:'Chad — sweaty PvP (1M+, gear destroyed)', color:'var(--abi-red)'},
  ]
  }
});
