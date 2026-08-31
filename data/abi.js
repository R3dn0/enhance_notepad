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
    { id:'surafps', label:'SuraFPS' },
    { id:'mavity', label:'Mavity' },
    { id:'shamy', label:'Shamy' },
    { id:'fartinzilla', label:'Fartinzilla' },
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
        },
        {
          id:'scar-budget',
          label:'🎬 Budget SCAR-L (~85k)',
          filters:[
            {id:'all', label:'All'},
            {id:'budget', label:'Budget'},
          ],
          categories:[
            {
              id:'scar-header',
              label:'Budget SCAR-L',
              subcats:[{
                label:'',
                recap:"A super cheap budget <b>SCAR-L</b> by <b>Andrew Z</b> — one of the most common and cost-effective weapons in the game. Built for ~85k reference price, designed for snowballing on solo Lockdown into massive profits.<br><br>🎬 <a href='https://www.youtube.com/watch?v=9BkR3xUoGwM'>Watch the video — This Budget SCAR-L Build is TOO GOOD For its Price!</a>",
                items:[]
              }]
            },
            {
              id:'budget',
              label:'💋 Budget',
              subcats:[{
                label:'High Firing Power + Budget Attachments',
                recap:'Large barrel for high firing power, cheap muzzle and foregrip, paired with Tier 4 ammo and gear to snowball.',
                items:[
                  { cat:'budget', name:"SCAR-L — Andrew Z's 85k Budget Build",
                    img:'assets/abi/andrewz/scar-budget/SCAR-L.webp',
                    imgFull:'assets/abi/andrewz/scar-budget/SCAR-L-hd.webp',
                    weapon:'SCAR-L budget build (~85k)',
                    ammo:'5.56x45mm A1 (Tier 4)',
                    helmet:'Tier 4 helmet (or budget T3/T4)',
                    armor:'Tier 4 armor',
                    total:'~85k (weapon)',
                    note:"Large barrel (high firing power), RK6 foregrip (or lightweight tilt), AR universal muzzle (600 Koen vs 25k), A18 red dot / PK reflex, default stock & standard polymer rear grip, 30-round mags. Excellent budget laser to snowball on Farm Lockdown (2.7M extract, 8 kills)." }
                ]
              }]
            }
          ],
          legend:[
            {label:'Budget — ~85k weapon build', color:'var(--color-accent)'},
          ]
        }
      ]
    },
    surafps: {
      videos: [
        {
          id:'m4-polyvalent',
          label:'🎬 The Most Polyvalent AR',
          filters:[
            {id:'all', label:'All'},
            {id:'chad', label:'PvP'},
          ],
          categories:[
            {
              id:'surafps-header',
              label:'The Most Polyvalent Assault Rifle',
              subcats:[{
                label:'',
                recap:"The <b>M4</b> shown by <b>SuraFPS</b> in solo Lockdown — the polyvalent AR. The meta around it: everyone runs AK-12 or <b>995</b> (tier 5 rounds), and the <b>T5 visor is non-negotiable</b> — not having one is 'trolling' because one BS round to the face kills you. Sound is king in this game.<br><br>\ud83c\udfac <a href='https://www.youtube.com/watch?v=tMMWfN_gVTE'>Watch the video — The Most Polyvalent Assault Rifle</a>",
                items:[]
              }]
            },
            {
              id:'chad',
              label:'\ud83d\udd2b The build',
              subcats:[{
                label:'M4 — the polyvalent AR',
                recap:'Solo Lockdown, TV Station. 3.1M extract, 7 real kills.',
                items:[
                  { cat:'chad', name:'M4 — the polyvalent AR',
                    img:'assets/abi/surafps/m4-polyvalent/M4.webp',
                    imgFull:'assets/abi/surafps/m4-polyvalent/M4-hd.webp',
                    weapon:'M4 (the most polyvalent AR)',
                    ammo:'5.56 995 (tier 5)',
                    helmet:'Best T5 helmet ~150k',
                    headset:'Sound is king — T5 over T6 helmet',
                    note:"T5 visor is mandatory: without it you die to one BS round to the face. The best T5 helmet is ~150k (the one with built-in headset is ~300k)." }
                ]
              }]
            }
          ],
          legend:[
            {label:'PvP — chad level', color:'var(--abi-red)'},
          ]
        }
      ]
    },
    mavity: {
      videos: [
        {
          id:'t03-budget',
          label:'🎬 Budget T03 (~200k)',
          filters:[
            {id:'all', label:'All'},
            {id:'budget', label:'Budget'},
          ],
          categories:[
            {
              id:'mavity-header',
              label:'Budget T03',
              subcats:[{
                label:'',
                recap:"A budget <b>T03</b> build by <b>Mavity</b> — a very effective ~200k lockdown build utilizing DVC12 ammo. The flashlight is kept, but you can swap the handguard and remove the flashlight for a better stock to get more horizontal recoil control and ergo.<br><br>🎬 <a href='https://www.youtube.com/watch?v=JqAfhWBH480'>Watch the video — Best budget options for lockdown</a>",
                items:[]
              }]
            },
            {
              id:'budget',
              label:'💋 Budget',
              subcats:[{
                label:'T03 + Flashlight',
                recap:'Tier 4 armor, a small bag, vest, and a headset. Extremely lucrative for running Lockdown and TV Station.',
                items:[
                  { cat:'budget', name:"T03 — Mavity's 200k kit",
                    img:'assets/abi/mavity/t3-budget/T03.webp',
                    imgFull:'assets/abi/mavity/t3-budget/T03-hd.webp',
                    weapon:'T03 budget build (~200k)',
                    ammo:'5.8x42mm DVC12 (Tier 5)',
                    headset:'Little headset',
                    rig:'Vest',
                    armor:'Tier 4 armor',
                    bag:'Small bag',
                    total:'~200k',
                    note:"Allows taking advantage of the high-tier DVC12 ammo. Slap a flashlight on. Extracting 4M in 3 runs (855k, 875k, 3M)." }
                ]
              }]
            }
          ],
          legend:[
            {label:'Budget — ~200k weapon build', color:'var(--color-accent)'},
          ]
        }
      ]
    },
    shamy: {
      videos: [
        {
          id:'ar57-budget',
          label:'🎬 Budget AR-57 (~230k)',
          filters:[
            {id:'all', label:'All'},
            {id:'budget', label:'Budget'},
          ],
          categories:[
            {
              id:'shamy-header',
              label:'Budget AR-57',
              subcats:[{
                label:'',
                recap:"The most perfect <b>AR-57</b> budget build by <b>Shamy</b> — a highly competitive 230k loadout with low recoil that shreds in Lockdown. It is compact enough to fit inside most backpacks, saving even more money.<br><br>🎬 <a href='https://www.youtube.com/watch?v=NmSLwkvrvHY'>Watch the video — The Perfect Budget Build (AR-57)</a>",
                items:[]
              }]
            },
            {
              id:'budget',
              label:'💋 Budget',
              subcats:[{
                label:'AR-57 + Tier 4/5 Gear',
                recap:'Low-recoil budget shredder paired with high-tier ammo and budget gear/bundles to maximize ROI.',
                items:[
                  { cat:'budget', name:"AR-57 — Shamy's Budget Build",
                    img:'assets/abi/shamy/ar57-budget/AR-57.webp',
                    imgFull:'assets/abi/shamy/ar57-budget/AR-57-hd.webp',
                    weapon:'AR-57 budget build (~230k)',
                    ammo:'SS198 (T5) top-loaded / SS190 (T4) bottom-loaded',
                    helmet:'Tier 4 / 5 helmet (or weekly bundle)',
                    armor:'Tier 4 / 5 armor (or weekly bundle)',
                    bag:'Fits in most backpacks (5*1)',
                    total:'~230k (weapon)',
                    note:"Low recoil, compact. Top-load mags with 25x SS198 (T5) and bottom-load with 25x SS190 (T4). Save 120k by trading the weapon via Randall Fisher (-100k) and using 50-round mags (-20k). Buy Tier 4 gear bundles from the point store weekly." }
                ]
              }]
            }
          ],
          legend:[
            {label:'Budget — ~230k weapon build', color:'var(--color-accent)'},
          ]
        },
        {
          id:'an94-budget',
          label:'🎬 Budget AN-94',
          filters:[
            {id:'all', label:'All'},
            {id:'budget', label:'Budget'},
          ],
          categories:[
            {
              id:'an94-header',
              label:'Budget AN-94',
              subcats:[{
                label:'',
                recap:"A solid and fun <b>AN-94</b> build by <b>Shamy</b> — performs exceptionally well with budget attachments. Only the initial 4-8 bullets have vertical recoil before turning purely horizontal. Receives a +50 RPM buff in Season 6.<br><br>🎬 <a href='https://www.youtube.com/watch?v=fNRnwE1j4MM'>Watch the video — AN-94 Budget Build</a>",
                items:[]
              }]
            },
            {
              id:'budget',
              label:'💋 Budget',
              subcats:[{
                label:'AN-94 + Right-hand peak flashlight',
                recap:'Solid 5.45 rifle for Lockdown. Budget attachments with best value stock and scope of choice.',
                items:[
                  { cat:'budget', name:"AN-94 — Shamy's Budget Build",
                    img:'assets/abi/shamy/an94-budget/AN-94.webp',
                    imgFull:'assets/abi/shamy/an94-budget/AN-94-hd.webp',
                    weapon:'AN-94 budget build',
                    ammo:'5.45x39mm BS (Tier 5 — 3-tap T4/T5)',
                    note:"Control the first 4-8 bullets (vertical), then recoil becomes purely horizontal. Flashlight on the right side for right-hand peak advantage. Save ~40k Koen by trading the base weapon with contact Flatline. RPM trick: clicking rapidly instead of holding left-click increases rate of fire. Buffed with +50 RPM in Season 6." }
                ]
              }]
            }
          ],
          legend:[
            {label:'Budget — weapon build', color:'var(--color-accent)'},
          ]
        }
      ]
    },
    fartinzilla: {
      videos: [
        {
          id:'best-gear-survive',
          label:'🎬 Best Gear to Survive',
          filters:[
            {id:'all', label:'All'},
            {id:'chad', label:'Chad'},
          ],
          categories:[
            {
              id:'fartinzilla-header',
              label:'Best Gear to Survive',
              subcats:[{
                label:'',
                recap:"Fartinzilla's go-to high-tier loadout for <b>Forbidden Zone</b> in Season 3. The strategy: prioritize <b>P90</b> with expensive rounds, high-tier armor (Tier 6 KN or Marshall), and the <b>SH 65 military helmet</b> (low sound blocking is key). Avoid T5 gear, which is overpriced for the protection it offers.<br><br>🎬 <a href='https://www.youtube.com/watch?v=JzxYDrlflKQ'>Watch the video — Best Gear to Survive with in Forbidden Zone</a>",
                items:[]
              }]
            },
            {
              id:'chad',
              label:'🔥 Chad',
              subcats:[{
                label:'P90 + Tier 6 Gear',
                recap:'A high-end setup designed to win close-range gunfights in Forbidden Zone.',
                items:[
                  { cat:'chad', name:"P90 — Fartinzilla's Go-To Kit",
                    img:'assets/abi/fartinzilla/best-gear-survive/P90.webp',
                    imgFull:'assets/abi/fartinzilla/best-gear-survive/P90-hd.webp',
                    weapon:'P90 (meta close-range, expensive rounds)',
                    ammo:'Most expensive rounds (~7k/rd, top-loaded or full)',
                    helmet:'SH 65 military helmet (low sound blocking, high ergo/speed)',
                    armor:'KN (T6, best speed/ergo) or Marshall (T6, cheaper alternative)',
                    bag:'Small backpack (loot N26 / Field bags from dead PMCs)',
                    note:"Pop painkillers often (carry 2x Energy Drinks for hydration). Use Endurance boosters to aim/sprint longer, and Strength boosters to carry out enemy loot. For grenades, use Stuns to locate campers (hit marker) and slow targets, then follow up with GH/Frags. Use Tear Gas to finish downed enemies or block their team from reviving."
                  },
                  { cat:'chad', name:"Alternative Weapons — Fartinzilla's recommendations",
                    weapon:'M4, F2000, AEK, AK-12 (BS only), MP5/MPX (Dum Dums)',
                    note:"If you want to save money on the weapon: M4 (decent, pull down recoil), F2000 (cheaper, low recoil), AEK (nerfed but still good), AK-12 (only run BS rounds, BP is hit or miss), or MP5/MPX (use Dum Dums to shred legs on a budget)."
                  }
                ]
              }]
            }
          ],
          legend:[
            {label:'Chad — high-end T6/P90 build', color:'var(--abi-red)'},
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