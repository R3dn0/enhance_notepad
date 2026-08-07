window.StashApp.register('stalzone', {
  meta: {
    theme: 'stalzone',
    showHazardBar: true,
    eyebrow: "📦 Stash // Personal memo",
    title: "<span>R3dn0</span>'s Notes",
    sub: "Rankings, recaps and recommendations gathered at the edges of the Zone. Not an absolute truth, just what I noted to find my way around. Tabs will evolve over my sessions.",
    footer: "R3dn0 — Zone notes · sources & links at the bottom of the summaries · updated over time"
  },
  tabs: [
    { id: 'armor', label: 'Armor' },
    { id: 'weapons', label: 'Weapons' },
    { id: 'artifacts', label: 'Artifacts' },
    { id: 'progression', label: 'Progression' },
    { id: 'money', label: 'Money Making' }
  ],
  data: {
  armor: {
    filters: [
      {id:'summary', label:'Summary'},
      {id:'science', label:'Science'},
      {id:'combo', label:'Combo'},
      {id:'combat', label:'Combat'},
      {id:'all', label:'All'},
    ],
    categories: [
      {
        id:'summary',
        label:'Summary',
        subcats:[
          {
            label:'🔬 Science',
            recap:'The <b>Saturn</b> remains the reference — protects everywhere except Klondike. Avoid the <b>Ganymede</b>, a degraded Saturn on every point that matters.',
            items:[
              {tier:'S', name:'Saturn', desc:"Absolute reference — protects against everything except Klondike. THE canonical suit."},
              {tier:'A', name:'Antares', desc:"Excellent stats, but -7% speed is punishing in real PvP."},
              {tier:'B', name:'Faction science', desc:"Good combat/science compromise, but commits you to a faction."},
              {tier:'C', name:'Atlas', desc:"Cheap stopgap via quest, combinable with artifacts."},
              {tier:'D', name:'Ganymede', desc:"A degraded Saturn on every point — to avoid.", warn:true},
            ]
          },
          {
            label:'⚔️ Combo',
            recap:'The <b>Riot Gear</b> dominates pure combo. Faction speedsters are an excellent plan B given the chaotic gameplay. Skip the heal builds (Reps/JD).',
            items:[
              {tier:'A', name:'Riot Gear', desc:"Best combo for heavy fighting in the zone. Versatile but a bit slow."},
              {tier:'B', name:'Speedsters', desc:"Very popular in PvP — speed > resistance given the server lag."},
              {tier:'B', name:'Albatross / Martin', desc:"Decent compromises, good for farming."},
              {tier:'D', name:'Reps / JD', desc:"Heal builds too nerfed, not recommended.", warn:true},
            ]
          },
          {
            label:'🎯 Combat',
            recap:'The <b>Centurion</b> is the best resistance/speed ratio for the majority. The Beasthunter is almost a dead end outside mutant-heavy events.',
            items:[
              {tier:'S', name:'SBA Tank', desc:"Peak resistance, speed sacrificed. For positioning experts."},
              {tier:'A', name:'Centurion', desc:"Best all-around compromise for most players."},
              {tier:'B', name:'Faction combat', desc:"Good for farm/PvP transport, don't compensate for heavy weapon debuffs."},
              {tier:'C', name:'Cargo', desc:"Ace Mule, Hector, CD4 — for loot transport."},
              {tier:'F', name:'Beasthunter', desc:"Useless in late game, mutants die while you backpedal.", warn:true},
            ]
          }
        ]
      },
      {
        id:'science',
        label:'Science Suits',
        subcats:[
          {
            label:'Overview',
            recap:'The <b>Saturn</b> remains the absolute reference — protects everywhere except Klondike. Variants exist mostly for price or preference, not real superiority.',
            items:[
              {tier:'S', name:'Saturn', desc:"The golden standard. Protects against everything the zone can throw except Klondike. Tons of skins, THE 'canon' suit for any player."},
              {tier:'A', name:'Antares', desc:"A Centurion in science form: 329 resistance at +15, increased stability, removes weapon speed debuffs. But -7% speed drags it down in real PvP."},
              {tier:'B', name:'Faction suits (Rice → Covenant)', desc:"Combat-ready version of the Saturn, level 4 protection everywhere, reasonable speed debuff (2% to 5%). Commits you fully to your faction."},
              {tier:'C', name:'Miss X Atlas', desc:"Cheap band-aid solution via quest. Same bullet resistance as the Saturn but level 3 protection (except chemical). Designed to be combined with artifacts."},
              {tier:'D', name:'Ganymede', desc:"The black sheep. Buyable at the auction house but elemental resistances cut in half and -3% speed. 'Jack of no trades, master of being shit'."},
            ]
          }
        ]
      },
      {
        id:'combo',
        label:'Combo Suits',
        subcats:[
          {
            label:'Pure combo (anomalous + combat)',
            recap:'The <b>Riot Gear</b> dominates pure bullet-tank combo. Heal builds (Reps/JD) are to avoid while the regen nerfs keep coming.',
            items:[
              {tier:'A', name:'Riot Gear', desc:"The 'Centurion' of combos: +300 bullet resistance at +15, +22 stability, allows anomalous zones AND heavy combat. A bit heavy but very versatile."},
              {tier:'C', name:'CD-4 (simple combo)', desc:"No-brainer option, no real pros/cons. Good if you don't have access to the Riegel and don't want to optimize."},
              {tier:'D', name:'Reps', desc:"Flimsy jack-of-all-trades: anomalous protection <300, 2% regen, good bleed resistance. Low priority unless fully committing to a heal build."},
              {tier:'D', name:'JD Suit Gas', desc:"Even flimsier than the Reps but 3% regen. Same limit: heal builds keep getting nerfed right now."},
            ]
          },
          {
            label:'Speedsters',
            recap:'Given the chaotic gameplay and server lag, running fast often beats tanking. The <b>Ryza\'s Hound</b> is the fastest, the <b>Albatross</b> the best speed/protection compromise.',
            items:[
              {tier:'A', name:"Ryza's Hound", desc:"The fastest of all (+12% speed). The protection reduction is well worth it according to the creator."},
              {tier:'A', name:'Albatross', desc:"Next-gen faction speedster, only -6% (best protected of the speedsters), buyable at the auction house. Good compromise without crafting a dedicated speed suit."},
              {tier:'B', name:'Investigator / Punisher', desc:"Mid-range between the Hound and the Missionary — good speed/bullet resistance balance."},
              {tier:'B', name:'Missionary', desc:"The slowest speedster (+9% speed) but the best bullet resistance of the group."},
              {tier:'B-', name:'Martin', desc:"Albatross's cargo cousin (+35 weight, +3 speed only). Not yet available at the time of the guide, judged decent everywhere, great nowhere."},
            ]
          }
        ]
      },
      {
        id:'combat',
        label:'Combat Suits',
        subcats:[
          {
            label:'High-level PvP',
            recap:'The <b>Centurion</b> is the best resistance/speed ratio for most players. The SBA/Mega Combat reserved for those who know how to manage their movement.',
            items:[
              {tier:'S', name:'SBA Tank / Mega Combat Armor', desc:"The peak in pure bullet resistance, speed sacrificed. Reserved for those who handle cover and movement well."},
              {tier:'A', name:'Centurion', desc:"Best compromise for most: 355 resistance at +15, minimal speed debuff, easy to compensate with a melee weapon."},
            ]
          },
          {
            label:'Faction (artifact builds)',
            recap:"Faction suits are 'chariots with blades': good transport/protection compromise for artifact builds, but don't compensate for heavy weapon debuffs.",
            items:[
              {tier:'B', name:'Templar & faction suits', desc:"35kg of carry, +20% stamina, boosted weapon stability. Ideal for PvP artifact builds or farming in PvP zones."},
            ]
          },
          {
            label:'Cargo (farm & transport)',
            recap:'Choice depends on accessibility: <b>Ace Mule</b> for max weight, <b>Hector</b> for speed (flimsy), <b>CD4</b> for a full compromise.',
            items:[
              {tier:'B', name:'CD4', desc:"Best stamina, versatile, no real weakness — ideal for testing crazy artifact builds."},
              {tier:'C', name:'Ace Mule', desc:"Carries the most weight. For those who like farming for hours and filling their inventory."},
              {tier:'C', name:'Hector', desc:"The fastest cargo but one of the flimsiest in combat. Decent in PvE, avoid in serious PvP."},
            ]
          },
          {
            label:'Mutant hunting',
            recap:'Almost useless niche outside specific events — in late game, most mutants die while you backpedal and shoot.',
            items:[
              {tier:'F', name:'Beasthunter', desc:"The only suit dedicated to mutant hunting. Weak bullet resistance, no speed bonus. Useful only on mutant-heavy events."},
            ]
          }
        ]
      }
    ]
  },

  weapons: {
    filters: [
      {id:'summary', label:'Summary'},
      {id:'ar', label:'Assault rifles'},
      {id:'shotguns', label:'Shotguns'},
      {id:'snipers', label:'Snipers'},
      {id:'smg', label:'SMG'},
      {id:'pistols', label:'Pistols'},
      {id:'mg', label:'Machine guns'},
      {id:'all', label:'All'},
    ],
    categories: [
      {
        id:'summary',
        label:'Summary',
        subcats:[
          {
            label:'🔫 Assault rifles',
            recap:'The <b>Thunderbird</b> is the gold standard. Avoid weapons without drum access (AK308, AMB-17, DSA58) — a problem given their already-low damage/fire rate.',
            items:[
              {tier:'S', name:'Thunderbird', desc:"Gold standard — best damage/fire rate/recoil balance."},
              {tier:'A', name:'A545 / KS1', desc:"Excellent alternatives. The KS1 best all-rounder."},
              {tier:'A', name:'AK-15 / MK-47', desc:"Best mid-level compromise."},
              {tier:'D', name:'AK308 / AMB-17 / DSA58', desc:"To avoid — no drum access.", warn:true},
            ]
          },
          {
            label:'💥 Shotguns',
            recap:'Komrad/Saiga 12 for farming, KS23 to dominate PvP (if accessible). The Derya is a trap — too many constraints for the result.',
            items:[
              {tier:'A', name:'Komrad / Saiga 12', desc:"Best in PvE — 30-round drum."},
              {tier:'S', name:'KS23', desc:"Devastating one-shot in PvP but nearly inaccessible."},
              {tier:'A', name:'AEK965', desc:"Good more accessible PvP plan B."},
              {tier:'D', name:'Derya', desc:"To avoid — too many constraints.", warn:true},
            ]
          },
          {
            label:'🎯 Snipers',
            recap:'Be honest about your aim: reliable headshots → McMillan. Otherwise a versatile DMR. The VSK is a noob trap until armed.',
            items:[
              {tier:'S', name:'McMillan', desc:"King of headshots. Weak body damage."},
              {tier:'A', name:'VSS Vykhlop', desc:"Best body damage."},
              {tier:'A', name:'MK-14 / QBU / SVD-M', desc:"Very versatile DMRs."},
              {tier:'F', name:'VSK', desc:"Noob trap — effort better invested elsewhere.", warn:true},
            ]
          },
          {
            label:'⚡ SMGs',
            recap:'The <b>A545</b> does everything an SMG does, better — only take one as a complement to an established AR, for pure hit-and-run.',
            items:[
              {tier:'C', name:'All SMGs', desc:"The A545 does everything better. Niche: pure speed build after having an AR."},
            ]
          },
          {
            label:'🔫 Pistols',
            recap:'Pernach for raw damage, RSH for accuracy — both clearly outclass the other pistols.',
            items:[
              {tier:'A', name:'Pernach / RSH', desc:"Best choices — monstrous damage or accuracy."},
              {tier:'B', name:'Glock / Deagle / Sig', desc:"Decent all-rounders."},
            ]
          },
          {
            label:'🔧 Machine guns',
            recap:'Low priority in general — an AR with a drum does as well for less. The PKP remains the only truly viable one.',
            items:[
              {tier:'A', name:'PKP Pecheneg', desc:"The only accessible and viable MG."},
              {tier:'C', name:'MGs in general', desc:"Low priority — AR + drum does just as well."},
            ]
          }
        ]
      },
      {
        id:'ar',
        label:'Assault rifles',
        subcats:[
          {
            label:'Fast Shooters (high fire rate)',
            recap:'The <b>QBZ Thunderbird</b> is the gold standard. Without it, the <b>A545</b> is the reliable, more accessible alternative.',
            items:[
              {tier:'S', name:'QBZ Thunderbird', desc:"Best damage/fire rate/recoil/moddability balance according to the creator."},
              {tier:'A', name:'A545', desc:"Fires even faster for slightly less damage. Reliable alternative if unlucky with loot boxes."},
              {tier:'B', name:'HK416', desc:"Decent when arsenalized. Drum access, cheap (basic purple weapon)."},
              {tier:'C', name:'FN2000', desc:"Less moddable, no drum access → clearly inferior to the A545."},
            ]
          },
          {
            label:'All Rounders (versatile)',
            recap:'The <b>KS1</b> stands out thanks to its moddability and drum. Avoid weapons without drum access in this category.',
            items:[
              {tier:'A', name:'KS1', desc:"Best of the group: very moddable, drum access."},
              {tier:'B', name:'AUG A3', desc:"Decent when arsenalized, unique look."},
              {tier:'C', name:'Beretta ARX', desc:"Fine but nothing special."},
              {tier:'D', name:'AK308 / AMB-17 / DSA58', desc:"Not recommended: no drum access, problematic with already-low damage/fire rate.", warn:true},
            ]
          },
          {
            label:'Hard Hitters (big damage)',
            recap:'The <b>Ash 12</b> hits hardest but demands excellent skill. For the majority, <b>AK-15</b> or <b>MK-47</b> are the best compromise.',
            items:[
              {tier:'S', name:'Ash 12', desc:"Highest damage of all ARs, but 30 rounds max and demands a very good level — otherwise an overqualified but outclassed PvE gun."},
              {tier:'A', name:'AK-15 / MK-47 Mutant', desc:"Main mid-level recommendation: good damage/fire rate compromise, manageable recoil once mastered."},
            ]
          }
        ]
      },
      {
        id:'shotguns',
        label:'Shotguns',
        subcats:[
          {
            label:'PvE side',
            recap:'<b>Komrad</b> or <b>Saiga 12</b> for mutant farming — 30-round drum. The <b>Protecta</b> remains an excellent budget choice.',
            items:[
              {tier:'A', name:'Komrad / Saiga 12', desc:"Best choices: 30-round drum access, perfect against mutants."},
              {tier:'B', name:'AA12', desc:"Very good too but less accessible."},
              {tier:'B-', name:'Protecta', desc:"Budget choice — slow reload but hits just as hard, way more accessible."},
              {tier:'D', name:'Derya', desc:"Not recommended — outclassed by everything except the Protecta, and must be arsenalized to be useful.", warn:true},
            ]
          },
          {
            label:'PvP side',
            recap:'The <b>KS23</b> broke the Clan Wars meta but stays nearly unreachable. The <b>TOZ84</b> or <b>Ultima</b> are far more accessible alternatives.',
            items:[
              {tier:'S', name:'KS23', desc:"Literally broke the Clan Wars meta. Devastating one-shot capacity, only 4 rounds. Nearly unreachable."},
              {tier:'A', name:'AEK965', desc:"Does almost what the KS23 does, slightly worse, but more accessible."},
              {tier:'B', name:'TOZ84', desc:"One-shots most players, 2 rounds only, more accessible than the previous two."},
              {tier:'B', name:'Ultima', desc:"Good PvE/PvP compromise, decent mag and very moddable."},
              {tier:'B-', name:'RMO 93', desc:"Honorable mention, former one-shot king before the AA12 became mainstream."},
            ]
          }
        ]
      },
      {
        id:'snipers',
        label:'Snipers',
        subcats:[
          {
            label:'Hard Hitters (one-shot)',
            recap:"The question to ask: 'do I hit my headshots?' If yes, the <b>McMillan</b> is unbeatable. Otherwise step down to Karbach then L96.",
            items:[
              {tier:'S', name:'McMillan', desc:"The headshotter's dream — outclasses everything on headshots, but very weak body damage."},
              {tier:'A', name:'VSS Vykhlop', desc:"Best limb/body damage, weaker multipliers — the inverse of the McMillan."},
              {tier:'A', name:'Karbach', desc:"Good alternative if slightly less confident on headshots."},
              {tier:'B', name:'Cheytac 300', desc:"Average in the hard hitter group."},
              {tier:'B', name:'L96A1', desc:"For those even less sure of their aim."},
            ]
          },
          {
            label:'DMR (faster fire rate)',
            recap:"If headshots aren't your thing, take a DMR: <b>MK-14</b>/<b>QBU</b> for the AR/sniper hybrid, <b>SVD-M</b> for a classic DMR.",
            items:[
              {tier:'A', name:'MK-14 / QBU', desc:"The most versatile: high damage, accurate, drum access — AR/sniper hybrids."},
              {tier:'A', name:'SVD-M', desc:"Best classic DMR option via the arms dealer."},
              {tier:'A', name:'Wave', desc:"Unique: full-auto sniper. You just have to hit all your shots."},
              {tier:'F', name:'VSK', desc:"Not recommended — must be arsenalized to be good. Still a cheap stopgap in Clan Wars if nothing else.", warn:true},
            ]
          }
        ]
      },
      {
        id:'smg',
        label:'SMG',
        subcats:[
          {
            label:'Overview',
            recap:'The <b>A545</b> does everything an SMG does, better. SMGs only make sense for pure hit-and-run in a speed build — only after you already have an AR.',
            items:[
              {tier:'C', name:'PPK / Kriss Vector / Evo Scorpion / MP7', desc:"Fast fire rate, handled recoil, good hip fire — but overall outclassed by the A545 in versatility and moddability. Useful for pure speed builds (no mobility penalty)."},
            ]
          }
        ]
      },
      {
        id:'pistols',
        label:'Pistols',
        subcats:[
          {
            label:'Overview',
            recap:'Only master-tier sidearms available. <b>RSH</b> for the accurate, <b>Pernach</b> for raw damage, the big pistols for a versatile compromise.',
            items:[
              {tier:'A', name:'RSH (revolver)', desc:"Highest one-shot pistol damage (250 on headshot at +15). For precise shooters."},
              {tier:'A', name:'OTS Pernach', desc:"Monstrous damage (44 min) — comparable to some ARs. Great as a main sidearm."},
              {tier:'B', name:'Glock 18', desc:"Much better capacity than the Pernach, but only available at Christmas → limited accessibility."},
              {tier:'B', name:'Deagle / Big Bill / Sig Sauer', desc:"Good all-rounders, neither great nor bad, effective in good hands."},
            ]
          }
        ]
      },
      {
        id:'mg',
        label:'Machine guns',
        subcats:[
          {
            label:'Overview',
            recap:'Low priority in general (-6% speed minimum, hard to control standing up). The <b>PKP</b> remains the only truly accessible and solid one.',
            items:[
              {tier:'A', name:'PKP Pecheneg', desc:"The only machine gun reasonably accessible via the arms dealer, very good."},
              {tier:'B', name:'Little Boy', desc:"Hits very hard but requires extreme farming in session battles."},
              {tier:'B', name:'DSA RPD', desc:"In-between AR/machine gun, via recipe parts."},
            ]
          }
        ]
      }
    ]
  },

  money: {
    filters: [
      {id:'video1', label:'Mediocre Dude — How 2 Make Money in Stalzone'},
      {id:'video2', label:'Cheeki Breeki — Best Ways to Make Money'},
    ],
    categories: [
      {
        id:'video1',
        label:'Mediocre Dude — How 2 Make Money in Stalzone',
        subcats:[
          {
            label:'📼 Video summary',
            recap:'Offbeat and blunt guide on the \'standard\' ways to make money solo: fresh artifact farming, flipping Advanced Spare Parts via the season pass, backpack delivery, south material farming and signal hunting, north spots (Labyrinth/Black Detour/Reflection/Forge/Lewich), and even begging or buying stalcoins directly. Ends with a market lesson from the CheyTac Intervention crash: when everyone panic-sells, that is the time to buy.<br><br>🎬 <a href="https://www.youtube.com/watch?v=76gllfsLGO0">Watch the video</a> — channel: <a href="https://www.youtube.com/@HeraldOfMediocrity">Mediocre Dude</a>',
            items:[]
          },
          {
            label:'Artifacts',
            recap:"Grabbing and reselling fast while it is 'fresh' stays one of the most profitable ways — but watch out for PvP competition after an emission, especially on static anomalies.",
            items:[
              {tag:'risky', name:'Artifact farming (general)', desc:"Filling your bag easily guarantees a few hundred K, more if you find red/purple/blue. Sell fresh (clock icon still white) for a better price at the fence."},
              {tag:'risky', name:'Static anomalies', desc:"Spawn the most valuable artifacts (shards, mirrors, atoms, prisms) but high-traffic areas — heavy PvP competition right after an emission."},
            ]
          },
          {
            label:'South materials & Signal hunting',
            recap:'An option accessible even in the south, but slow and unreliable — the real value is in schematic parts (notably the Wave) and the new relay stations.',
            items:[
              {tag:'slow', name:'Copper wires / Crap height', desc:"Bottleneck resources in high demand from south players, resellable at a premium to endgame players (100-150k per spool, 50-70k per crap height). Slow but accessible from the start."},
              {tag:'slow', name:'Signal hunting (general)', desc:"Overall barely profitable — hundreds of hours for gear or niche special ammo."},
              {tag:'luck', name:'Schematic parts & the Wave', desc:"The real value of signal hunting: each part resells for 100-300k. The Wave (full-auto sniper) is THE deal if you find its parts."},
              {tag:'luck', name:'Relay stations', desc:"New item at the time of the video: converts into 20 trackers at once, saves a huge amount of time. Still rare, watch the price."},
            ]
          },
          {
            label:'North farming spots',
            recap:'The Labyrinth stays fast but dangerous; Black Detour/Reflection are safer for steady income; Lewich offers the best time/risk ratio for a solo player.',
            items:[
              {tag:'risky', name:'Labyrinth', desc:"Fast for farming anomalous dust but heavy PvP competition. The dust market is now diluted with Black Detour/Reflection."},
              {tag:'slow', name:'Black Detour / Reflection', desc:"Safer and slower than the Labyrinth for the same anomalous dust — good steady income over time."},
              {tag:'slow', name:'Forge 11', desc:"Much less profitable than before the nerfs. Useful mainly for dailies and material farming, not for getting rich."},
              {tag:'fast', name:'Lewich', desc:"Risky (proximity detector off, exit requires killing a boss) but very profitable solo: 100-150k per 10-minute run, plus unique resources (dark limbo, lambda data...)."},
            ]
          },
          {
            label:'Season Pass',
            recap:"Flipping Advanced Spare Parts (ASP) is 'the most stable and consistent income' according to the creator — gacha boxes are more for the thrill than the profit.",
            items:[
              {tag:'reliable', name:'Advanced Spare Parts (ASP)', desc:"Buy ASP with season pass currency and resell at 40-45k each — 100 ASP ≈ 4 to 5 million. Income judged the most stable in the game."},
              {tag:'luck', name:'Gacha boxes', desc:"Can bring in tens of millions if you are lucky, but statistically you will end up with items of little value."},
              {tag:'rmt', name:'Season pass via act tickets', desc:"The creator strongly advises against buying season passes with act tickets — keep them for gold gear (Albatross, Gauss, Civil Fair).", warn:true},
            ]
          },
          {
            label:'Backpack delivery',
            recap:'Not glamorous, but always available — a reliable daily income source, even in endgame.',
            items:[
              {tag:'reliable', name:'Backpack deliveries', desc:"Up to 500k per day on a single character (more with alts). Just needs speed and vigilance on the route."},
            ]
          },
          {
            label:'Begging',
            recap:'A real viable method if you polish your presentation — but expect a reputation that degrades over time.',
            items:[
              {tag:'luck', name:'Begging', desc:"Works mainly through a good profile (description, skins, displayed achievements) rather than spamming messages. Attracts sympathy... until other players get tired of it."},
            ]
          },
          {
            label:'Buying stalcoins (RMT)',
            recap:'The most time-efficient method in rubles, but it literally burns real money — the creator is clear: this is not advice, just a statement.',
            items:[
              {tag:'rmt', name:'Buying premium currency', desc:"Indirectly buys tradeable high-value items (mostly cosmetics) that you resell. Season pass and overdrive packs are the safest bets, cosmetics the most lucrative but random."},
            ]
          },
          {
            label:'The CheyTac crash lesson',
            recap:'When everyone panic-sells, that is the time to buy — then wait for the market to stabilize next season.',
            items:[
              {tag:'risky', name:'Hold during a crash', desc:"When the CheyTac Intervention launched, everyone liquidated their assets to afford the gun (up to 150M), crashing all prices. The creator stacked ASP and skins at cut prices while waiting for stabilization next season."},
            ]
          }
        ]
      },
      {
        id:'video2',
        label:'Cheeki Breeki — Best Ways to Make Money',
        subcats:[
          {
            label:'📼 Video summary',
            recap:'Methodical, number-crunching approach (spreadsheet included) designed for an average solo player, no clan. Ranking based on hundreds of timed runs: stashes come first, just ahead of artifact hunting and proto-anomalies, far ahead of anomalous installations, signals or mutant farming. Also mentions auction house flipping and battle pass loot box gambling as \'off-ranking\' but potentially very profitable activities.<br><br>🎬 <a href="https://www.youtube.com/watch?v=tTz2iHHkn9g">Watch the video</a> — channel: <a href="https://www.youtube.com/@CheekiBreekiTv">Cheeki Breeki</a><br>📊 <a href="https://docs.google.com/spreadsheets/d/1yNwwNMTRAeoMh5XN--gkH3FCWfJBUkp99AUa5XP5VwY/edit?gid=1684694789#gid=1684694789">Creator\'s full spreadsheet</a>',
            items:[]
          },
          {
            label:'The podium (average solo player)',
            recap:'Important context: this creator plays solo 99% of the time, no clan, and calls himself bad at PvP — his ranking is built for the average player, not clans controlling Lyubech or PvP squads in Stillwater.',
            items:[
              {tag:'reliable', name:'Stashes (n°1)', desc:"No specific gear required — no Buryat or Saturn needed, playable anytime without waiting for an emission. A run of 18 stashes in under 7 minutes. Nearly equal to artifact hunting in raw money, and far more consistent. Creator's tip: loot absolutely everything in the crates, don't sort on the spot."},
              {tag:'risky', name:'Artifact hunting (n°2)', desc:"~900k per emission on average. Requires the Buryat, and at least a worn Saturn for the lab/Black Detour/Reflection/Stillwater. Staying near your faction base is surprisingly effective and safe — the lab and Black Detour are richer but far more contested."},
              {tag:'slow', name:'Proto-anomalies (n°3)', desc:"60 seconds per proto in theory, but in real play you have to run around to find them and sometimes share them with other players — a much bigger drop in efficiency than stashes. More of an opportunistic activity than a real active farm. The Mines are the best general spot, the Lab excellent with a Saturn."},
            ]
          },
          {
            label:'Secondary activities (average to low)',
            recap:'Neither great nor useless — mostly interesting for side objectives (battle pass, craft materials) rather than pure money.',
            items:[
              {tag:'slow', name:'Anomalous installations', desc:"Not as bad as their reputation, notably for the tools/parts they drop — good for the battle pass 'kill mutants' missions. Between midnight and 4am, the wisps don't attack the installation (playable 'for free' but boring)."},
              {tag:'slow', name:'Signals', desc:"Once excellent (resellable acid, dust via fragments+strange artifact), but these recipes got nerfed in the last patch. Still useful for the battle pass and farming trackers for the Buryat — no longer really for money."},
              {tag:'slow', name:'Mutants', desc:"Fine if you need fern (upgrade) or meat/hooves (hideout recipes), but bad for pure money and very boring. About 6 battle pass levels per hour — there are far better ways to farm the battle pass."},
            ]
          },
          {
            label:'Battle pass & flipping',
            recap:'Two off-ranking activities: one because it is too random to compare, the other because it is hard to quantify — but both potentially very profitable.',
            items:[
              {tag:'luck', name:'Gambling on loot boxes', desc:"Could be the most profitable method of all according to the creator — but so luck-based he refuses to rank it seriously. Selling unopened crates (and old crates whose price rises over time) remains a steady, safe income."},
              {tag:'reliable', name:'Auction house flipping', desc:"Probably in his own personal top 3. Buy below market price and resell higher — example given: oil, buyable directly from the vendor while many think it can only be farmed outside, resold at about twice the purchase price."},
            ]
          },
          {
            label:'⚠️ The hideout',
            recap:'A clear, direct warning: do not actively invest in the hideout expecting income, in the game\'s current state.',
            items:[
              {tag:'slow', name:'Investing in the hideout for profit', desc:"The last patch nerfed almost every interesting recipe. Keep upgrading it passively (it comes fast with stash farming) but don't actively invest in it expecting to make money — it has become a resource sink rather than an income source.", warn:true},
            ]
          }
        ]
      }
    ]
  },

  artifacts: {
    filters: [
      {id:'summary', label:'Summary'},
      {id:'early', label:'Early Game'},
      {id:'mid', label:'Mid Game'},
      {id:'late', label:'Late Game'},
      {id:'all', label:'All'},
    ],
    categories: [
      {
        id:'summary',
        label:'Summary',
        subcats:[
          {
            label:'🎯 Good to know first',
            recap:'The recurring question: is farming the <b>Buryat</b> (detector) worth it? Yes, no doubt — it makes artifact farming much faster and more profitable, despite the painful grind to get it.',
            items:[
              {tag:'value', name:'The Buryat is worth it', desc:"Painful to farm (300 signals before getting it), but makes artifact hunting much faster. One emission can easily bring in 300k in 15-20 minutes in common artifacts alone."},
              {tag:'budget', name:'Perfect rolls ≠ real rolls', desc:"All the creator's stats assume a perfect roll (110% green, 120% blue, 130% pink). In real play, expect less without extra grinding — it's a comparison base, not a guarantee."},
            ]
          },
          {
            label:'💰 Best quality/price ratios per stage',
            recap:"One build per stage that keeps coming up in the creator's recommendations — adjust to your budget with the more complete variants in the provided table.",
            items:[
              {tag:'value', name:'Early Speed — Candlelight, Comet, 2x Rattle', desc:"~51,000 rubles. Good move speed + big stamina bonus. The real recommended starting point (not the free minimum)."},
              {tag:'value', name:'Mid PvP — Proto-Onion, Veiner, Onion, Spiral, Shrimp', desc:"~1.9M. Balanced 'jack of all trades' build that avoids switching between a speed bag and a PvP container."},
              {tag:'expensive', name:'Late PvP — Atom, Branch, 2x Shard, Steel Hedgehog, Cursed Rose', desc:"~75M. The creator's personal endgame build — good vitality/heal/BR without paying the Prism premium (a +15 Steel Hedgehog equals a blue Prism in BR, for far less)."},
            ]
          }
        ]
      },
      {
        id:'early',
        label:'Early Game (green artifacts)',
        subcats:[
          {
            label:'Speed / Stamina',
            recap:'Start with a 4-slot bag (duffelbag). The <b>Candlelight + Comet + 2 Rattle</b> combo is the real recommended start — the minimum budget (Wolf Tears) works, but the price gap isn\'t worth the sacrifice.',
            items:[
              {tag:'budget', name:'Wolf Tears + 3x Rattle', desc:"32,000₽. Movespeed 2.64, Stamina 36.63, Carry +5.72. 'Better than nothing', per the creator — but grind the extra 20k if you can."},
              {tag:'value', name:'Candlelight, Comet, 2x Rattle', desc:"51,000₽. Movespeed 3.08, Stamina 42.24, Stamina R 2.20. The best starting point for the price."},
              {tag:'value', name:'Gum, Rattle x2, Spiral', desc:"306,000₽. Movespeed 3.52, Stamina 24.42, Stamina R 2.86, Carry +7.70. Natural upgrade once you have some money set aside (swap Candlelight→Gum, one Rattle→Spiral)."},
              {tag:'gamble', name:'Transformer, 2x Ice Hedgehog, White Bracelet', desc:"440,000₽. Movespeed 6.16, Stamina R 9.02, Carry +8.58. A white artifact can roll at 0% — the creator speaks from experience ('using a change serum on a white artifact is blasphemy')."},
              {tag:'value', name:'Scrubber, Helium, 2x Spiral', desc:"650,000₽. Movespeed 5.17, Stamina 12.87, Stamina R 5.06, Carry +15.40. The best choice for the wealthy without the white bracelet gamble."},
            ]
          },
          {
            label:'PvP (KZS-4 / KZS-5)',
            recap:'Under 200 BR, the only priority is stacking more — diminishing returns kick in around 300. The creator\'s personal build at this level adds a Polyhedron against snipers.',
            items:[
              {tag:'budget', name:'2x Onion, 2x Rose (KZS-4)', desc:"36,000₽. BR 28.16, Stamina 17.16. 'Nothing crazy will happen here' — but still better than nothing for 36k."},
              {tag:'value', name:'Proto-Onion, Cursed Rose, Onion, Shrimp (KZS-4)', desc:"248,000₽. BR 26.95, Stamina 8.58, Carry +11.99. 6-7x the price for the same BR as the budget option, but carry weight and stamina make the build actually playable."},
              {tag:'value', name:'Proto-Onion, Cursed Rose, 2x Onion, Shrimp (KZS-5)', desc:"256,000₽. BR 33.33, Stamina 17.16, Carry +11.99. Very solid early game PvP build for the price, once you have access to the KZS-5."},
              {tag:'tip', name:'Gum, Sun, 2x Onion, Steel Hedgehog', desc:"406,000₽. BR 27.06, Vita 2.09, Bleeding -1.21. Anti-sniper: against the rifle trend dealing bleeding, think bleed reduction rather than pure BR."},
              {tag:'value', name:'Proto-Onion, Polyhedron, Cursed Rose, Crust, Shrimp', desc:"740,000₽. BR 31.68, Carry +11.99. The creator's personal build at this level — the Polyhedron absorbs a big chunk of damage, saves your life against snipers more than expected. Swap the Crust for an Onion if the budget is tight."},
            ]
          }
        ]
      },
      {
        id:'mid',
        label:'Mid Game (blue/pink artifacts)',
        subcats:[
          {
            label:'Speed / Stamina',
            recap:'Go straight to pink if the budget allows — no point wasting time on blue. The Forager (Limansk resources) is an excellent mid-game container, even if Limansk scares beginners.',
            items:[
              {tag:'budget', name:'Gum, Comet, Rattle, Spiral, Golden Prima', desc:"~2,045,000₽. Movespeed 6, Stamina 32.76, Carry +23.28. Solid if the 'almost 3M' build is too expensive — sacrifices a bit of movespeed/stamina regen."},
              {tag:'expensive', name:'Proto-Onion, Golden Prima, Rattle, 2x Spiral (KZS-5)', desc:"~2,875,000₽. Movespeed 6.48, Stamina 13.32, Carry +31.68. One of the best complete speed builds at this stage, but at the top of the mid-game budget."},
              {tag:'value', name:'Golden Prima, Spiral, Ice Hedge, Rattle (Forager)', desc:"~1,875,000₽. Movespeed 6.48, Stamina 13.32, Carry +23.28. The Forager gives -2.5 radiation and works on any armor, even heavy — one of the creator's favorite mid-game containers."},
            ]
          },
          {
            label:'Balanced PvP',
            recap:"Two approaches: keep a speed bag + switch to a PvP container when needed, or play a 'jack of all trades' build in a single container. The creator prefers the second.",
            items:[
              {tag:'value', name:'Proto-Onion, Veiner, Onion, Spiral, Shrimp', desc:"~1,885,000₽. Movespeed 1.92, Stamina 9.36, Carry +28.8, BR 23.64. The creator's 'go-to' build at this level — a bit of everything without switching containers."},
              {tag:'expensive', name:'Proto-Onion, Veiner, Onion, Spiral, Steel Hedgehog', desc:"~2,785,000₽. Carry +15.72, BR 30.72. Tankier variant of the previous build — swap the Shrimp for a Steel Hedgehog, lose carry weight but gain a lot of BR."},
              {tag:'gamble', name:'2x Cursed Rose, Veiner, Steel Hedgehog (Forager)', desc:"~2,300,000₽. BR 51.6. Insane BR for a light container, easy to carry and switch in PvP — but a very specialized build, not for continuous play."},
            ]
          }
        ]
      },
      {
        id:'late',
        label:'Late Game (+15 pink artifacts)',
        subcats:[
          {
            label:'Speed',
            recap:'The Bear\'s Den endgame goal requires a well-rolled Transformer (anti-psy-emission protection) — risky to push to +15 without a good starting roll. The Hive offers a safer alternative.',
            items:[
              {tag:'expensive', name:'Transformer, Helium, Spiral, 3x Bracelet (Bear\'s Den)', desc:"~76,400,000₽. Movespeed 23.32, Stamina 82.13, Carry +33.46. The creator's endgame speed goal — requires a Transformer with the right anti-psy roll, otherwise guaranteed psy damage. Swap a Bracelet for a Shrimp = cheaper version with more carry weight."},
              {tag:'value', name:'Scrubber, Golden Prima, Spiral, 3x Ice Hedgehog', desc:"~8,000,000₽. Movespeed 18.08, Stamina 101.06, Carry +43.94. Much cheaper alternative to progress toward the Bear's Den goal, without the Transformer gamble."},
              {tag:'expensive', name:'Helium, Spiral, Golden Prima, 2x Bracelet (Hive)', desc:"~52,000,000₽. Movespeed 21.13, Stamina 76.73, Carry +43.94. One of the best speed builds in the game per the creator — 2-Bracelet builds should avoid perfect rolls or risk psy damage."},
            ]
          },
          {
            label:'PvP',
            recap:'At this level you already play master armors with a lot of base BR — the focus shifts to vitality and healing. The creator avoids the Prism (too expensive for the gain) in favor of the Steel Hedgehog.',
            items:[
              {tag:'expensive', name:'Atom, 2x Branch, 2x Shard, Prism (Bear\'s Den)', desc:"~109,000,000₽. Vita 15.55, Heal Eff 101.4, BR 32.79. The most common build seen by the creator watching the best players — the heart of all Bear's Den PvP builds."},
              {tag:'value', name:'Atom, Branch, 2x Shard, Steel Hedgehog, Cursed Rose', desc:"~75,000,000₽. Vita 12.17, Heal Eff 70.3, BR 55.6. The creator's personal build — a +15 Steel Hedgehog equals the BR of a blue Prism for half the price. 'I'm not paying 10M more for 3 more BR', says he."},
              {tag:'value', name:'Branch, Shard, Prism, Sun, Snake Eyes (Hive)', desc:"~65,500,000₽. Vita 16.56, Heal Eff 50.7, BR 32.79. The core of the most common Hive PvP builds — also swap the Prism for a Steel Hedgehog if you want to save."},
              {tag:'value', name:'Branch, Shard, Sun, Snake Eyes, Heel (Hive, full heal)', desc:"~63,500,000₽. Vita 16.56, Heal Eff 87.88. On the heaviest armors (Hive), you can drop BR entirely for full vitality/heal by replacing the Prism with a Heel."},
            ]
          }
        ]
      }
    ]
  },

  progression: {
    filters: [
      {id:'summary', label:'Summary'},
      {id:'swamps', label:'Swamps'},
      {id:'roadside', label:'Roadside'},
      {id:'bar', label:'Bar (Stalker)'},
      {id:'veteran', label:'Veteran'},
      {id:'all', label:'All'},
    ],
    categories: [
      {
        id:'summary',
        label:'Summary',
        subcats:[
          {
            label:'🗺️ The golden rules',
            recap:'The thread through the whole guide: <b>never push your gear beyond your current crafting level</b> — matchmaking scales to your gear, and ending up against players with 500-700h of experience ruins the experience.',
            items:[
              {tag:'key', name:'Beware of gear matchmaking', desc:"Never buy gear above what you can currently craft, and don't upgrade beyond +3 at Roadside. It avoids getting catapulted into far too hard lobbies."},
              {tag:'key', name:'Keep your Act Tickets', desc:"NEVER spend them before fully understanding their value (later in the game). Any other currency can be spent freely, not these."},
              {tag:'key', name:'Keep Advanced Spare Parts / Advanced Tools', desc:"Don't spend them until reaching the north — stock them, you'll need them later. Basic tools/parts can be spent freely."},
            ]
          },
          {
            label:'⚠️ Common traps',
            recap:'Mistakes the creator himself made in 7000+ hours of play.',
            items:[
              {tag:'caution', name:'Ash 12 / VSSsk / RSH12 weapon lines', desc:"These lines force crafting via Limansk later — a permanent war zone. Avoid them if you don't want that imposed difficulty level.", warn:true},
              {tag:'caution', name:'Session battles without preset gear', desc:"On classic maps you'll face players with 200M+ builds. Stay on Arms Race or Death Match (preset gear) until you're ready.", warn:true},
              {tag:'caution', name:'Crafting containers too early', desc:"They only become interesting with a real artifact budget, which you don't have at Roadside yet. A waste of time at this stage.", warn:true},
            ]
          },
          {
            label:'📍 Step by step (express recap)',
            recap:'The whole journey in one sentence per zone.',
            items:[
              {tag:'tip', name:'Swamps', desc:"Very chill tutorial zone. Just finish the story quest, don't waste time crafting everything."},
              {tag:'tip', name:'Roadside', desc:"4 zones, infection system introduced. Craft one weapon + one armor, explore a bit, cheap artifacts only (<15k)."},
              {tag:'tip', name:'Bar (Stalker level)', desc:"Data fragment farming (Electra, installations, signals), first real artifact builds, more PvP."},
              {tag:'tip', name:'Veteran', desc:"Post-emission artifact hunting, specialized builds up to +5/+15, end of the south arc (radar boss) then north faction choice."},
            ]
          }
        ]
      },
      {
        id:'swamps',
        label:'Swamps (tutorial)',
        subcats:[
          {
            label:'Basics to know',
            recap:'The chillest zone in the game, almost no PvP. The only real goal here: understand the mechanics and finish the story quest — no need to linger.',
            items:[
              {tag:'key', name:'The faction choice barely matters', desc:"Bandits or Stalkers — just pick the one you prefer visually/thematically, it has no major impact at this stage."},
              {tag:'key', name:'Understand the barter system', desc:"Gather resources and money, use them to craft/upgrade weapons and armor. That's the whole progression loop of the game."},
              {tag:'tip', name:'Don\'t waste time crafting everything', desc:"You'll never need to come back to the swamps to craft anything useful later — no need to follow every craft line here."},
              {tag:'tip', name:'Buy a shotgun from the start (280₽)', desc:"Usable in the secondary slot instead of a pistol, 6 rounds in the mag. Shotguns are particularly strong against mutants and will carry you to the middle of the Zone."},
              {tag:'key', name:'Map awareness', desc:"The real danger is other players. Spot where enemies can come from and divide each zone into danger levels before venturing in with loot."},
              {tag:'caution', name:'Loot loss on death', desc:"Almost everything you farm (resources, unpacked ammo, medkits) drops into a bag on the ground if you die. Only items with a padlock or shield symbol are protected.", warn:true},
              {tag:'tip', name:'The quick wheel', desc:"Hover an item, press a number to add it to the wheel (key C to open). Lets you use weapon/bag/meds without opening the inventory."},
            ]
          }
        ]
      },
      {
        id:'roadside',
        label:'Roadside',
        subcats:[
          {
            label:'Navigation & risk zones',
            recap:'4 zones more dangerous than the swamps but overall chill. The further north, the riskier the zones — but rewards follow. New: danger zones (infection).',
            items:[
              {tag:'tip', name:'Intermediate zones = good compromise', desc:"Side zones let you farm without too much risk, as long as you avoid the Scrapyard entrances. Ideal if you still lack confidence."},
              {tag:'key', name:'Scrapyard = best rewards', desc:"The only zone that lets you farm the final reputation level of the Roadside base. Not mandatory to go right away."},
              {tag:'key', name:'3 armor types vs danger zones', desc:"Combat = weakest protection. Science = total protection. Combo = partial protection or more time to flee. Most players craft either a combat + a science (to switch), or a single combo (with limitations)."},
              {tag:'tip', name:'Bandages against bleeding', desc:"Very effective against bleeding from snipers or strong mutants. Cheap items that can save your life — always carry some."},
            ]
          },
          {
            label:'Gear & artifacts',
            recap:'Experiment with weapons freely, but don\'t craft containers yet — they only get interesting with a real artifact budget. Stay under 15k per artifact for now.',
            items:[
              {tag:'tip', name:'Experiment with weapons freely', desc:"Crafting takes longer than in the swamps but stays reasonable. Pick what you like, no universal best weapon."},
              {tag:'caution', name:'Don\'t craft containers yet', desc:"They only get really strong with a serious artifact investment, which you don't have yet at this stage. Waste of resources.", warn:true},
              {tag:'tip', name:'Cheap artifacts only', desc:"Don't exceed 15,000₽ per artifact. Take ones with different negative-infection resistances, whatever the type (speed, HP, heal)."},
              {tag:'caution', name:'Don\'t buy gear that is too high-level', desc:"Even if the auction house (unlocked at Roadside base level 2) offers better gear, it can push you into far too hard lobbies because of gear-based matchmaking.", warn:true},
              {tag:'tip', name:'Exception: knives', desc:"A cheap blue or purple knife can be bought just for the movement speed bonus, without matchmaking risk."},
              {tag:'key', name:'Upgrades limited to +3', desc:"Like gear purchases, upgrading too high can mess with your matchmaking. Stay at +3 maximum at this stage."},
              {tag:'key', name:'Keep Advanced Spare Parts and Advanced Tools', desc:"Don't spend them before reaching the north — stock them. Basic tools/parts can be spent freely."},
              {tag:'tip', name:'Don\'t upgrade your artifacts yet', desc:"Pure waste of resources and time at this stage. Keep your catalysts and energy sources for later."},
            ]
          },
          {
            label:'Attachments & resources',
            recap:'Always check attachment compatibility before crafting anything — each weapon has its own module slots.',
            items:[
              {tag:'key', name:'Check compatibility before crafting', desc:"Each weapon has different slots for barrel, laser, grip and scope — and not all attachments work together. Preview the weapon at the barter before spending anything."},
              {tag:'tip', name:'Copper wires via metal detector', desc:"Obtained through the story quest at the diggers' base. A sound signal indicates proximity — bring out the detector, get close, small piles appear to dig."},
              {tag:'tip', name:'Resell copper wire spools', desc:"Sell well at the auction house, like burning karpite. Good passive income source at this stage."},
              {tag:'optional', name:'Wiki map for caches', desc:"If you specifically need a lot of copper wires, the Stall Zone wiki map shows the yellow zones where caches are found."},
            ]
          }
        ]
      },
      {
        id:'bar',
        label:'Bar (Stalker level)',
        subcats:[
          {
            label:'Zones around the Bar',
            recap:'Bar, forest and pit offer the same rewards — only differences: danger level and travel time. Expect much more PvP than before, some players even get killed before setting their respawn point.',
            items:[
              {tag:'caution', name:'Zones to avoid if you want peace', desc:"The middle entrance to the bar and the whole upper part are especially dangerous — avoid them if you're not looking for combat."},
              {tag:'key', name:'No caches in the bar itself', desc:"If you need caches, you have to go to the forest or the pit — the bar alone doesn't offer any."},
            ]
          },
          {
            label:'Data fragment farming',
            recap:'Three methods to farm data fragments — Electra anomalies are the simplest but boring, installations and signals offer more variety.',
            items:[
              {tag:'tip', name:'Electra anomalies', desc:"Stay within the anomaly's radius without leaving (the progress resets otherwise) — doable even in combat armor if played well. Simple but repetitive."},
              {tag:'tip', name:'Anomalous research installations', desc:"Buy one from Gromaika, place it near an anomalous rift, defend it against mutant waves, then collect the reward."},
              {tag:'tip', name:'Signals', desc:"Long-range detector to spot an area, short-range detector to locate the exact signal. No spawn map — you have to run and check regularly."},
              {tag:'caution', name:'Signal dungeons', desc:"Give more loot depending on difficulty, but if you die inside, your bag is permanently lost, with no recovery possible.", warn:true},
              {tag:'optional', name:'Daily quest board', desc:"Take them all and complete them alongside your normal farm. Not mandatory — cancel the too hard or too long ones and take another the next day."},
            ]
          },
          {
            label:'Gear & tactics',
            recap:'Start settling on a specific gear line — each next tier requires the previous item of the same line to be crafted.',
            items:[
              {tag:'caution', name:'Avoid Ash 12 / VSSsk / RSH12 as a newbie', desc:"These lines force crafting via Limansk later, a permanent combat zone. Pick another line if you want to avoid that imposed challenge.", warn:true},
              {tag:'key', name:'Armor-piercing ammo for PvP', desc:"Expansive ammo is good in PvE but clearly weakens you against players — switch to armor-piercing ammo."},
              {tag:'tip', name:'Steel plates (PvE) vs ceramic (PvP)', desc:"Farm with a steel plate equipped, then switch to a ceramic plate before extracting your loot for better PvP chances. Ceramic breaks fast, so use it at the right moment."},
              {tag:'tip', name:'Use caches (stashes)', desc:"Place them near your farming spots in dangerous zones (forest/pit), stock your loot as you go, then extract everything once things calm down."},
              {tag:'optional', name:'Trade coins to buy resources', desc:"Obtained via login rewards, battle pass and crates. Useful for what you can't easily farm — no reason to hoard them."},
            ]
          },
          {
            label:'Battle Pass & session battles',
            recap:'The battle pass is bought with rubles without spending real money — no need to prioritize it at this stage. For competitive PvP, only touch preset-gear modes.',
            items:[
              {tag:'key', name:'Never use your Act Tickets', desc:"Extremely valuable and limited — their value becomes clear much later. Any other currency can be spent freely at this stage.", warn:true},
              {tag:'tip', name:'Reroll your tasks toward the most common ones', desc:"Lets you progress naturally in the battle pass by doing what you'd do anyway."},
              {tag:'caution', name:'Avoid session battles on classic maps', desc:"You'll face players with master/legendary gear worth 200M+. Stay on Arms Race or Death Match which use preset gear.", warn:true},
            ]
          }
        ]
      },
      {
        id:'veteran',
        label:'Veteran level',
        subcats:[
          {
            label:'Zones & dangers',
            recap:'4 zones to start veteran crafting. Side zones are safer but less generous — Graveyard and Dead City aren\'t simple either, with their danger zones.',
            items:[
              {tag:'tip', name:'Plescoy / Path of Fools / Graveyard / Dead City', desc:"Safer side zones but weaker rewards. Plescoy and Path of Fools have more PvP; Graveyard and Dead City have danger zones to watch."},
              {tag:'caution', name:'Anti-rads and antidotes mandatory without a science suit', desc:"If you don't use a science armor, always keep these items on you in danger zones.", warn:true},
            ]
          },
          {
            label:'Artifact hunting',
            recap:'A real gold rush after every emission. Can bring in millions per run if you\'re lucky — but you have to be fast and methodical.',
            items:[
              {tag:'key', name:'Emission timing', desc:"Random between 2h30 and 4h after the previous one (timer visible top-left of the map). Artifacts spawn 5 to 35 minutes after the emission."},
              {tag:'tip', name:'Run toward high anomaly-density spots', desc:"Scope out in advance where you've already seen lots of anomalies, then chain spots while managing enemy players trying to steal from you."},
              {tag:'tip', name:'The Beluga (detector) helps a lot', desc:"Cheap and easy to craft, shows nearby artifacts — also useful for signal hunting."},
              {tag:'caution', name:'Stop looting anything', desc:"Random ammo, steel plates and other junk slow your run and force you back to base more often. Only take what has value or serves your hideout's crafting.", warn:true},
            ]
          },
          {
            label:'Artifact builds',
            recap:'Build recommendations change regularly with updates — what was good yesterday can be bad today. Aim for \'special\' quality minimum, never common.',
            items:[
              {tag:'key', name:'Never common artifacts', desc:"A pure waste of resources. Start directly with 'special' quality artifacts — they resell well and lose less value on upgrade, unlike uncommon ones."},
              {tag:'tip', name:'Aim for +5 at the Bar, +15 only in the north', desc:"No need to push higher before reaching the north — no point spending rare resources too early."},
              {tag:'tip', name:'Upgrade process', desc:"Research the artifact at the scientist, fill the installation with energy (anomalous dust, common proto-artifacts, anomalous batteries = the cheapest sources), then pick catalysts and launch attempts. Every 5-level tier gives a bonus property."},
              {tag:'optional', name:'Wiki build calculator', desc:"Useful to test and adapt recommended builds to your situation before committing financially."},
            ]
          },
          {
            label:'End of the south arc',
            recap:'The Radar quest ends the south arc with a boss fight — prepare before going. Then, the north faction choice is mandatory to access the north.',
            items:[
              {tag:'key', name:'Radar boss', desc:"Take a high-capacity magazine weapon and destroy the lamps on the boss's body during the fight."},
              {tag:'key', name:'North faction choice mandatory', desc:"Impossible to access the north without picking one. Three approaches: the style/ideology you like, the faction population (clan stats on the Stall Zone HQ site), or just the armor visuals."},
              {tag:'tip', name:'All factions have the same 4 armor types', desc:"Only the stats vary slightly and the look changes — at the core, they're the same armors with a different skin per faction."},
            ]
          }
        ]
      }
    ]
  }
  },
  tagLabels: {
  reliable:'Reliable', risky:'Risky', luck:'Luck', slow:'Slow', fast:'Fast', rmt:'RMT',
  value:'Value', budget:'Budget', gamble:'Gamble', expensive:'Expensive',
  key:'Key', tip:'Tip', caution:'Caution', optional:'Optional'
  },
  legends: {
  money: [
    {label:'Reliable — slow but safe', color:'var(--toxic)'},
    {label:'Fast — good time ratio', color:'var(--teal)'},
    {label:'Risky — PvP / danger', color:'var(--red)'},
    {label:'Luck — random', color:'var(--amber)'},
    {label:'Slow — low output per hour', color:'var(--grey)'},
    {label:'RMT — real money', color:'var(--orange)'},
  ],
  artifacts: [
    {label:'Value — best quality/price', color:'var(--toxic)'},
    {label:'Budget — cheapest playable', color:'var(--grey)'},
    {label:'Gamble — random roll', color:'var(--amber)'},
    {label:'Expensive — heavy investment', color:'var(--orange)'},
  ],
  progression: [
    {label:'Key — important rule', color:'var(--amber)'},
    {label:'Tip — practical advice', color:'var(--teal)'},
    {label:'Caution — common trap', color:'var(--red)'},
    {label:'Optional — if it interests you', color:'var(--grey)'},
  ]
  },
  summaries: {
  armor: {
    title:"Summary — which armor to go for",
    paragraphs:[
      "Priority #1: a <b>science suit</b> (Saturn, Ganymede or Atlas depending on budget) to farm Black Detour and Reflection without struggling.",
      "Priority #2: a <b>combo suit</b>, ideally a faction speed suit — given Stalcraft's chaotic gameplay, speed often beats raw resistance.",
      "Priority #3: a <b>combat suit</b> — Centurion for PvP/clan wars, Ace Mule if you stay in PvE.",
      "Golden rule: if an armor is craftable via blueprint with no equivalent in its category, go for it first — cheaper, no anomalous serum spent.",
      "🎬 <a href=\"https://www.youtube.com/watch?v=vYEt1Z_vWJ0\">Watch the source video — Armor Ranking</a>"
    ]
  },
  weapons: {
    title:"Summary — which weapon to go for",
    paragraphs:[
      "There's <b>no objectively best weapon</b> — each category shines in a specific situation.",
      "Main rifle: QBZ Thunderbird or A545. For big damage: AK-15/MK-47 (mid-level) or Ash 12 (if you aim well).",
      "Shotgun: Komrad/Saiga 12 in PvE, KS23/AEK965 in PvP if accessible, otherwise TOZ84.",
      "Sniper: be honest about your aim — reliable headshots → McMillan/Karbach, otherwise take a DMR (MK-14, QBU, SVD-M).",
      "SMG and machine guns: low priority, as a complement once the main kit is established.",
      "Trap to avoid: 'noob trap' weapons (VSK, Derya, AK308, HK417) are good in good hands, but their low cost attracts players not yet ready for the skill level they imply.",
      "🎬 <a href=\"https://www.youtube.com/watch?v=afvIVzWMxtI\">Watch the source video — Weapon Ranking</a>"
    ]
  },
  money: {
    title:"Summary — how to make money",
    paragraphs:[
      "The creator lays out a simple triangle: <b>time, risk, reliability</b> — you never get all three at once for a single method.",
      "Most <b>stable</b> income: flipping Advanced Spare Parts via the season pass (40-45k/unit, about 4-5M for 100 ASP).",
      "Best ratio for a <b>busy solo</b>: Lewich, despite the risk — 100-150k per 10-minute run.",
      "For <b>safe, steady</b> income but slow: Black Detour/Reflection rather than the Labyrinth, now more diluted.",
      "Trap to avoid: gacha boxes and season passes bought with act tickets — the expected gain isn't worth the cost.",
      "Market lesson: when everyone panic-sells (e.g. the CheyTac Intervention launch), it's often the right time to buy and wait for the next season.",
      "🎬 <a href=\"https://www.youtube.com/watch?v=76gllfsLGO0\">Watch the source video — Money Making</a>"
    ]
  },
  artifacts: {
    title:"Summary — building your artifact setup",
    paragraphs:[
      "The <b>Buryat</b> (detector) is worth the grind despite the pain — it makes all artifact hunting much faster and more profitable.",
      "Early game: start with a cheap speed build (Candlelight, Comet, 2x Rattle, ~51k) rather than the bare minimum.",
      "Mid game: the Forager (Limansk resources) is underrated — usable on any armor, very versatile for ~2M.",
      "Late game PvP: skip the Prism if the budget is tight — a +15 Steel Hedgehog offers almost the same BR for a fraction of the price.",
      "All stats assume perfect rolls (110%/120%/130%) — prices move with the market, check stalcraftdb.net for real time.",
      "🎬 <a href=\"https://www.youtube.com/watch?v=tIbqRal7sCI\">Watch the source video — Artifact Builds</a>"
    ]
  },
  progression: {
    title:"Summary — starting off without getting trapped",
    paragraphs:[
      "The absolute rule: <b>never exceed your current crafting level</b> in bought gear or upgrades — matchmaking scales to it and can throw you against veterans.",
      "Keep your <b>Act Tickets</b> and <b>Advanced Spare Parts/Tools</b> safe — their value only becomes clear as you progress, don't waste them early.",
      "Avoid the Ash 12 / VSSsk / RSH12 weapon lines if you don't want to be forced to craft via Limansk.",
      "For competitive PvP before you're ready: stay on Arms Race / Death Match (preset gear), avoid classic maps.",
      "Artifacts: only special quality or better, never common. Aim for +5 at the Bar, +15 only in the north.",
      "🎬 <a href=\"https://www.youtube.com/watch?v=_QxAfl2gNTQ\">Watch the source video — Full progression guide</a>"
    ]
  }
  }
});
