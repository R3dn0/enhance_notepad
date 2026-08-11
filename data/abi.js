window.StashApp.register('abi', {
  meta: {
    theme: 'abi',
    eyebrow: "📦 Stash // Personal memo",
    title: "<span>R3dn0</span>'s Notes",
    sub: "Notes on Arena Breakout: Infinite — loadouts, builds, guides and video summaries gathered over my sessions. Not an absolute truth, just what I noted to find my way around. Prices at the time of the videos, check the market.",
    footer: "R3dn0 — ABI notes · indicative prices (at the time of the videos) · updated over time"
  },
  tabs: [
    { id:'porktv', label:'Pork TV' },
    { id:'andrewz', label:'Andrew Z' },
  ],
  data: {
    porktv: {
      videos: [
        {
          id:'only-loadout-guide',
          label:'📼 The Only Loadout Guide',
          filters:[
            {id:'all', label:'All'},
            {id:'budget', label:'Budget'},
            {id:'hybrid', label:'Hybrid'},
            {id:'chad', label:'Chad'},
          ],
          categories:[
            {
              id:'guide-header',
              label:'The Only Loadout Guide',
              subcats:[{
                label:'',
                recap:"6 loadouts for <b>Lockdown</b> (2 Budget, 2 Hybrid, 2 Chad) broken down by <b>Pork TV</b> — 2,500 raids, 450M stash value, top 100. The method: pick your category, copy the blueprint, make it yours.<br><br>\ud83c\udfac <a href='https://www.youtube.com/watch?v=MAYzuyx7XV4'>Watch the video — The Only Loadout Guide You'll Ever Need</a>",
                items:[]
              }]
            },
            {
              id:'budget',
              label:'\ud83d\udc8b Budget',
              subcats:[{
                label:'Simple, cheap and effective',
                recap:'Armor below tier four is basically useless in Lockdown (80% of players run tier four ammo). Helmets are a different story — ricochet chance is real. Guns and ammo are always your priority.',
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
                    note:"Any gun around that price point still competes." },
                  { cat:'budget', name:'AUG — the budget monster',
                    img:'assets/abi/porktv/only-loadout-guide/budget/AUG.webp',
                    imgFull:'assets/abi/porktv/only-loadout-guide/budget/AUG-hd.webp',
                    weapon:'AUG (one of the best budget guns)',
                    ammo:'5.56 A1 (tier 4) all the time',
                    helmet:'Retro Steel',
                    headset:'M32',
                    rig:'Hunter vest (more space, 2x2 slot)',
                    bag:'XA4 tactical backpack',
                    note:"The A1 is very cheap right now for a tier 4, and it still packs a serious punch." }
                ]
              }]
            },
            {
              id:'hybrid',
              label:'\ud83d\udd00 Hybrid',
              subcats:[{
                label:'This is where 90% of players belong',
                recap:"You can chill and farm or rush into a fight — both work. Weapon budget between 300 and 400k.",
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
                    note:"Especially strong for newer players." },
                  { cat:'hybrid', name:'AK-12 — awareness variant',
                    img:'assets/abi/porktv/only-loadout-guide/hybrid/AK_12.webp',
                    imgFull:'assets/abi/porktv/only-loadout-guide/hybrid/AK_12-hd.webp',
                    weapon:'AK-12',
                    helmet:'KSS tactical + tier 4 visor',
                    headset:'Commander',
                    rig:'H-Tac armored rig',
                    bag:'Chapman military backpack',
                    total:'835k + 100-150k ammo/consumables',
                    note:'Both rigs are solid — pick whatever suits your playstyle.' }
                ]
              }]
            },
            {
              id:'chad',
              label:'\ud83d\udd25 Chad',
              subcats:[{
                label:'For the sweaty players who want PvP',
                recap:"Yes, you can go over 1M value in Lockdown — tip: strip the attachments off your gun to get under the 1M cap.",
                items:[
                  { cat:'chad', name:'HK Shredder — PvP under 1M',
                    img:'assets/abi/porktv/only-loadout-guide/chad/H416.webp',
                    imgFull:'assets/abi/porktv/only-loadout-guide/chad/H416-hd.webp',
                    weapon:'HK Shredder build (~400k)',
                    helmet:'03H (tier 5 protection)',
                    headset:'Commander or GS2',
                    rig:'Warrior rig (tier 5)',
                    bag:'Rush backpack',
                    total:'just under 1M',
                    note:"Strip the attachments down." },
                  { cat:'chad', name:"Masochist — the creator's favorite",
                    img:'assets/abi/porktv/only-loadout-guide/chad/AK_12.webp',
                    imgFull:'assets/abi/porktv/only-loadout-guide/chad/AK_12-hd.webp',
                    weapon:'AK-12 or HK (your call)',
                    helmet:'Masochist (Mad Skull)',
                    rig:'M4 armored rig (tier 5, double 2x2)',
                    bag:'Rush backpack',
                    note:"Both guns work." }
                ]
              }]
            }
          ],
          legend:[
            {label:'Budget — ~200-240k', color:'var(--color-accent)'},
            {label:'Hybrid — 300-400k weapon', color:'var(--abi-orange)'},
            {label:'Chad — 1M+, gear destroyed', color:'var(--abi-red)'},
          ]
        },
        {
          id:'budget-loadouts',
          label:'\ud83d\udcb8 Budget Weapon Loadouts',
          filters:[
            {id:'all', label:'All'},
            {id:'optimal', label:'Optimal'},
            {id:'mega', label:'Mega'},
          ],
          categories:[
            {
              id:'loadouts-header',
              label:'Budget Weapon Loadouts',
              subcats:[{
                label:'',
                recap:"10 budget guns for <b>Lockdown</b> by <b>Pork TV</b> — two categories: Optimal Budget (max 400K) and Mega Budget (cheapest possible).<br><br>\ud83c\udfac <a href='https://www.youtube.com/watch?v=yWwMwwHEX2M'>Watch the video — Budget Weapon Loadouts</a>",
                items:[]
              }]
            },
            {
              id:'optimal',
              label:'\ud83c\udfaf Optimal Budget (max 400K)',
              subcats:[{
                label:'The sweet spot between budget and performance',
                recap:"Builds that let you compete with pretty much everything in Lockdown. Top-load tier five ammo.",
                items:[
                  { cat:'budget', name:'M4 — annihilation machine',
                    img:'assets/abi/porktv/budget-loadouts/optimal/M4.webp',
                    imgFull:'assets/abi/porktv/budget-loadouts/optimal/M4-hd.webp',
                    weapon:'M4A1 build (just under 400k)',
                    ammo:'Tier 5 top-loaded',
                    note:"Everybody loves this manly gun. Slightly pull down and kill everybody." },
                  { cat:'budget', name:'AK-12 — Juicer Destroyer',
                    img:'assets/abi/porktv/budget-loadouts/optimal/AK_12.webp',
                    imgFull:'assets/abi/porktv/budget-loadouts/optimal/AK_12-hd.webp',
                    weapon:'AK-12 build',
                    ammo:'Tier 5 — two-tap headshot outside effective range',
                    note:"Best all-around gun. Can also play with iron sights to save money." },
                  { cat:'budget', name:'AMB-17 — Dominator',
                    img:'assets/abi/porktv/budget-loadouts/optimal/AMB_17.webp',
                    imgFull:'assets/abi/porktv/budget-loadouts/optimal/AMB_17-hd.webp',
                    weapon:'AMB-17 build',
                    ammo:'Tier 5 always',
                    note:"S-tier in CQC, specifically TV Station." },
                  { cat:'budget', name:'U191 — My Girlfriend',
                    img:'assets/abi/porktv/budget-loadouts/optimal/U191.webp',
                    imgFull:'assets/abi/porktv/budget-loadouts/optimal/U191-hd.webp',
                    weapon:'U191 build with 40-round mag',
                    ammo:'Tier 5',
                    note:"Best gun for lockdown. 40-round mag is enough to kill a full squad." },
                  { cat:'budget', name:'HK416 — the meta king',
                    img:'assets/abi/porktv/budget-loadouts/optimal/H416.webp',
                    imgFull:'assets/abi/porktv/budget-loadouts/optimal/H416-hd.webp',
                    weapon:'HK416 iron sights build',
                    ammo:'Tier 5',
                    note:"Best gun overall. Insane TTK. Ammo is trash outside 47m." }
                ]
              }]
            },
            {
              id:'mega',
              label:'\ud83d\udcb8 Mega Budget',
              subcats:[{
                label:'The stingiest and cheapest loadouts',
                recap:"These builds require ratting, playing slow. Not optimal, but they work.",
                items:[
                  { cat:'budget', name:'MP5 — ZC-807',
                    img:'assets/abi/porktv/budget-loadouts/mega/MP5.webp',
                    imgFull:'assets/abi/porktv/budget-loadouts/mega/MP5-hd.webp',
                    weapon:'MP5 build (~115k)',
                    ammo:'Tier 4+',
                    note:"Can do some damage below 30m effective range." },
                  { cat:'budget', name:'The In-Between Build',
                    img:'assets/abi/porktv/budget-loadouts/mega/ZCB.webp',
                    imgFull:'assets/abi/porktv/budget-loadouts/mega/ZCB-hd.webp',
                    weapon:'Build shown in video',
                    ammo:'Good ammo combo',
                    note:"Almost 50m effective range, uses very good ammo." },
                  { cat:'budget', name:'T-951 — the starter',
                    img:'assets/abi/porktv/budget-loadouts/mega/T951.webp',
                    imgFull:'assets/abi/porktv/budget-loadouts/mega/T951-hd.webp',
                    weapon:'T-951 build with 40-round mag',
                    ammo:'Top-load tier 5, rest tier 4',
                    note:"Low cost, good for solo players who rotate. Great start for new players." },
                  { cat:'budget', name:'MPX — love it or hate it',
                    img:'assets/abi/porktv/budget-loadouts/mega/MPX.webp',
                    imgFull:'assets/abi/porktv/budget-loadouts/mega/MPX-hd.webp',
                    weapon:'MPX build (~250k)',
                    ammo:'Tier 4+',
                    note:"Either loved or hated. Give it a try." },
                  { cat:'budget', name:'AUG — easiest to mod',
                    img:'assets/abi/porktv/budget-loadouts/mega/AUG.webp',
                    imgFull:'assets/abi/porktv/budget-loadouts/mega/AUG-hd.webp',
                    weapon:'AUG build (very cheap)',
                    ammo:'Tier 4',
                    note:"Slap a 42-round mag and a red dot, done." }
                ]
              }]
            }
          ],
          legend:[
            {label:'Budget — all builds in this video', color:'var(--color-accent)'},
          ]
        }
      ]
    },
    andrewz: {
      videos: [
        {
          id:'m4-budget',
          label:'\ud83c\udfac Budget M4 (~290k)',
          filters:[
            {id:'all', label:'All'},
            {id:'budget', label:'Budget'},
          ],
          categories:[
            {
              id:'andrewz-header',
              label:'Budget M4',
              subcats:[{
                label:'',
                recap:"A budget <b>M4</b> by <b>Andrew Z</b> — bare-bones M4 shooting A1s out of SCAR mags, one of the cheapest tier 4 setups.<br><br>\ud83c\udfac <a href='https://www.youtube.com/watch?v=jGvOYM_w16c'>Watch the video — 300k kit, 3.3M extract</a>",
                items:[]
              }]
            },
            {
              id:'budget',
              label:'\ud83d\udc8b Budget',
              subcats:[{
                label:'A1s + built-in audio helmet',
                recap:'T3 helmet with built-in headphones, TM1 rig for storage and tier 4 protection.',
                items:[
                  { cat:'budget', name:"M4 — Andrew Z's 300k kit",
                    img:'assets/abi/andrewz/m4-budget/M4A1.webp',
                    imgFull:'assets/abi/andrewz/m4-budget/M4A1-hd.webp',
                    weapon:'M4A1 bare-bones — A1s in SCAR mags',
                    ammo:'5.56 A1 (tier 4, one of the cheapest)',
                    helmet:'T3 helmet, built-in headphones',
                    rig:'TM1 (tier 4 — armor + storage)',
                    bag:'Large camping backpack',
                    total:'~290k',
                    note:"vs KSS tactical + GS2 (~390k) you save ~100k. Ran a 300k kit into a 3.3M extract (7 kills)." }
                ]
              }]
            }
          ],
          legend:[
            {label:'Budget — ~290k total', color:'var(--color-accent)'},
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
      ['weapon','Weapon'],['ammo','Ammo'],['helmet','Helmet'],
      ['headset','Headset'],['rig','Rig'],['armor','Armor'],['bag','Backpack']
    ];
    return '<div class="subcat">' +
      '<h3>' + sc.label + '</h3>' +
      (sc.recap ? '<div class="recap">' + sc.recap + '</div>' : '') +
      (sc.items.length ? '<div class="cards">' +
        sc.items.map(function(it) {
          return '<div class="card loadout">' +
            '<div class="loadout-head">' +
              '<span class="loadout-cat c-' + it.cat + '">' + (tagLabels[it.cat] || it.cat) + '</span>' +
              (it.total ? '<span class="loadout-total">~ ' + it.total + '</span>' : '') +
            '</div>' +
            '<div class="loadout-name">' + it.name + '</div>' +
            '<div class="loadout-main' + (it.img ? ' has-img' : '') + '">' +
              '<div class="loadout-gear">' +
                gearFields.filter(function(f){ return it[f[0]]; }).map(function(f) {
                  return '<div class="gear-row"><span>' + f[1] + '</span><b>' + it[f[0]] + '</b></div>';
                }).join('') +
              '</div>' +
              (it.img ? '<div class="loadout-img"><img src="' + it.img + '" data-full="' + (it.imgFull || it.img) + '" alt="' + it.name + '" loading="lazy"></div>' : '') +
            '</div>' +
            (it.note ? '<div class="loadout-note">' + it.note + '</div>' : '') +
          '</div>';
        }).join('') +
      '</div>' : '') +
    '</div>';
  }
});