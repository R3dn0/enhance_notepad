window.StashApp.register('stalzone', {
  meta: {
    theme: 'stalzone',
    showHazardBar: true,
    eyebrow: "📦 Stash // Pense-bête personnel",
    title: "Notes de <span>R3dn0</span>",
    sub: "Classements, récaps et recommandations glanés aux frontières de la Zone. Pas une vérité absolue, juste ce que j'ai noté pour m'y retrouver. Les onglets évolueront au fil de mes sessions.",
    footer: "R3dn0 — Notes de la Zone · sources & liens en bas des synthèses · mis à jour au fil du temps"
  },
  tabs: [
    { id: 'armures', label: 'Armures' },
    { id: 'armes', label: 'Armes' },
    { id: 'artefacts', label: 'Artéfacts' },
    { id: 'progression', label: 'Progression' },
    { id: 'argent', label: 'Money Making' }
  ],
  data: {
  armures: {
    filters: [
      {id:'synthese', label:'Synthèse'},
      {id:'science', label:'Science'},
      {id:'combo', label:'Combo'},
      {id:'combat', label:'Combat'},
      {id:'all', label:'Tout'},
    ],
    categories: [
      {
        id:'synthese',
        label:'Synthèse',
        subcats:[
          {
            label:'🔬 Science',
            recap:'Le <b>Saturn</b> reste la référence — protège partout sauf Klondike. Évite le <b>Ganymède</b>, un Saturn dégradé sur tous les points qui comptent.',
            items:[
              {tier:'S', name:'Saturn', desc:"Référence absolue — protège de tout sauf Klondike. LA suit canon."},
              {tier:'A', name:'Antares', desc:"Stats excellentes, mais -7% vitesse pénalisant en PvP réel."},
              {tier:'B', name:'Faction science', desc:"Bon compromis combat/science, mais t'engage dans une faction."},
              {tier:'C', name:'Atlas', desc:"Dépannage pas cher via quête, combinable avec artéfacts."},
              {tier:'D', name:'Ganymède', desc:"Saturn dégradé sur tous les points — à éviter.", warn:true},
            ]
          },
          {
            label:'⚔️ Combo',
            recap:'Le <b>Riot Gear</b> domine en combo pur. Les speedsters de faction sont un excellent plan B vu le gameplay chaotique. Laisse tomber les builds heal (Reps/JD).',
            items:[
              {tier:'A', name:'Riot Gear', desc:"Meilleur combo pour le combat lourd en zone. Polyvalent mais un peu lent."},
              {tier:'B', name:'Speedsters', desc:"Très populaires en PvP — la vitesse > la résistance vu le lag serveur."},
              {tier:'B', name:'Albatross / Martin', desc:"Compromis corrects, bons pour le farm."},
              {tier:'D', name:'Reps / JD', desc:"Builds heal trop nerfés, déconseillés.", warn:true},
            ]
          },
          {
            label:'🎯 Combat',
            recap:'Le <b>Centurion</b> est le meilleur rapport résistance/vitesse pour la majorité. La Beasthunter est une quasi-impasse hors événements mutant-heavy.',
            items:[
              {tier:'S', name:'SBA Tank', desc:"Sommet de résistance, vitesse sacrifiée. Pour experts du placement."},
              {tier:'A', name:'Centurion', desc:"Meilleur compromis général pour la majorité des joueurs."},
              {tier:'B', name:'Faction combat', desc:"Bonnes pour farm/transport PvP, ne compensent pas le debuff des armes lourdes."},
              {tier:'C', name:'Cargo', desc:"Ace Mule, Hector, CD4 — pour le transport de loot."},
              {tier:'F', name:'Beasthunter', desc:"Inutile en late game, les mutants meurent en reculant.", warn:true},
            ]
          }
        ]
      },
      {
        id:'science',
        label:'Suits Science',
        subcats:[
          {
            label:'Vue d\'ensemble',
            recap:'Le <b>Saturn</b> reste la référence absolue — protège partout sauf Klondike. Les variantes existent surtout pour des raisons de prix ou de préférence, pas de vraie supériorité.',
            items:[
              {tier:'S', name:'Saturn', desc:"Le standard doré. Protège contre tout ce que la zone peut envoyer sauf Klondike. Énormément de skins, LA suit \"canon\" pour tout joueur."},
              {tier:'A', name:'Antares', desc:"Un Centurion version science : 329 résistance à +15, stabilité augmentée, annule les debuffs de vitesse d'arme. Mais -7% vitesse le plombe en vrai PvP."},
              {tier:'B', name:'Suits de faction (Rice → Covenant)', desc:"Version combat-ready du Saturn, protection niveau 4 partout, debuff vitesse raisonnable (2% à 5%). Engage pleinement dans ta faction."},
              {tier:'C', name:'Miss X Atlas', desc:"Solution pansement pas chère, accessible via quête. Même résistance balles que le Saturn mais protection niveau 3 (sauf chimique). Pensée pour être combinée avec des artéfacts."},
              {tier:'D', name:'Ganymede', desc:"Le mouton noir. Achetable à l'hôtel des ventes mais résistances élémentaires coupées en deux et -3% vitesse. \"Jack of no trades, master of being shit\"."},
            ]
          }
        ]
      },
      {
        id:'combo',
        label:'Suits Combo',
        subcats:[
          {
            label:'Combo pur (anomalous + combat)',
            recap:'Le <b>Riot Gear</b> domine en pur combo bullet-tank. Les builds heal (Reps/JD) sont à éviter tant que les nerfs de régénération continuent.',
            items:[
              {tier:'A', name:'Riot Gear', desc:"Le \"Centurion\" des combos : +300 résistance balles à +15, +22 stabilité, permet zones anomalous ET combat lourd. Un peu lourd mais très polyvalent."},
              {tier:'C', name:'CD-4 (combo simple)', desc:"Option sans prise de tête, pas de vrais avantages/désavantages. Bon si pas accès au Riegel et pas envie d'optimiser."},
              {tier:'D', name:'Reps', desc:"Jack-of-all-trades flimsy : protection anomalous <300, régén 2%, bonne résistance saignement. Priorité basse sauf engagement total dans un build heal."},
              {tier:'D', name:'JD Suit Gas', desc:"Encore plus fragile que le Reps mais régén 3%. Même limite : les builds heal se font nerfer sans arrêt en ce moment."},
            ]
          },
          {
            label:'Speedsters',
            recap:'Vu le gameplay chaotique et le lag serveur, courir vite bat souvent tanker. Le <b>Ryza\'s Hound</b> est le plus rapide, l\'<b>Albatross</b> le meilleur compromis vitesse/protection.',
            items:[
              {tier:'A', name:"Ryza's Hound", desc:"Le plus rapide de tous (+12% vitesse). La réduction de protection vaut largement le coup selon le créateur."},
              {tier:'A', name:'Albatross', desc:"Next-gen speedster de faction, seulement -6% (le mieux protégé des speedsters), achetable à l'hôtel des ventes. Bon compromis sans crafter une speed suit dédiée."},
              {tier:'B', name:'Investigator / Punisher', desc:"Milieu de gamme entre le Hound et le Missionary — bon équilibre vitesse/résistance balles."},
              {tier:'B', name:'Missionary', desc:"Le plus lent des speedsters (+9% vitesse) mais la meilleure résistance balles du groupe."},
              {tier:'B-', name:'Martin', desc:"Cousin cargo de l'Albatross (+35 poids, +3 vitesse seulement). Pas encore dispo au moment du guide, jugé correct partout, excellent nulle part."},
            ]
          }
        ]
      },
      {
        id:'combat',
        label:'Suits Combat',
        subcats:[
          {
            label:'PvP haut niveau',
            recap:'Le <b>Centurion</b> est le meilleur rapport résistance/vitesse pour la majorité des joueurs. Le SBA/Mega Combat réservé à ceux qui savent gérer leurs déplacements.',
            items:[
              {tier:'S', name:'SBA Tank / Mega Combat Armor', desc:"Le sommet en pure résistance balles, vitesse sacrifiée. Réservé à ceux qui gèrent bien couverture et déplacements."},
              {tier:'A', name:'Centurion', desc:"Meilleur compromis pour la plupart : 355 résistance à +15, debuff vitesse minime, facile à compenser avec une arme de mêlée."},
            ]
          },
          {
            label:'Faction (artefact builds)',
            recap:'Les suits de faction sont des \"chariots avec des lames\" : bon compromis transport/protection pour builds artefact, mais ne compensent pas les debuffs des armes lourdes.',
            items:[
              {tier:'B', name:'Templar & suits de faction', desc:"35kg de transport, +20% stamina, stabilité d'arme boostée. Idéal pour builds artefact PvP ou farm en zone PvP."},
            ]
          },
          {
            label:'Cargo (farm & transport)',
            recap:'Choix selon l\'accessibilité : <b>Ace Mule</b> pour le poids max, <b>Hector</b> pour la vitesse (fragile), <b>CD4</b> pour un compromis complet.',
            items:[
              {tier:'B', name:'CD4', desc:"Meilleure stamina, polyvalent, pas de vraie faiblesse — idéal pour tester des builds artefact fous."},
              {tier:'C', name:'Ace Mule', desc:"Transporte le plus de poids. Pour ceux qui aiment farmer des heures et remplir leur inventaire."},
              {tier:'C', name:'Hector', desc:"Le plus rapide des cargos mais l'un des plus fragiles en combat. Décent en PvE, à éviter en PvP sérieux."},
            ]
          },
          {
            label:'Mutant hunting',
            recap:'Niche quasi inutile hors events spécifiques — en late game, la plupart des mutants meurent en reculant tout en tirant.',
            items:[
              {tier:'F', name:'Beasthunter', desc:"Seule suit dédiée à la chasse aux mutants. Faible résistance balles, pas de bonus vitesse. Utile uniquement sur événements mutant-heavy."},
            ]
          }
        ]
      }
    ]
  },

  armes: {
    filters: [
      {id:'synthese', label:'Synthèse'},
      {id:'ar', label:'Fusils d\'assaut'},
      {id:'shotguns', label:'Shotguns'},
      {id:'snipers', label:'Snipers'},
      {id:'smg', label:'SMG'},
      {id:'pistols', label:'Pistolets'},
      {id:'mg', label:'Mitrailleuses'},
      {id:'all', label:'Tout'},
    ],
    categories: [
      {
        id:'synthese',
        label:'Synthèse',
        subcats:[
          {
            label:'🔫 Fusils d\'assaut',
            recap:'Le <b>Thunderbird</b> est le gold standard. Évite les armes sans accès tambour (AK308, AMB-17, DSA58) — problématique vu leurs dégâts/cadence déjà faibles.',
            items:[
              {tier:'S', name:'Thunderbird', desc:"Gold standard — meilleur équilibre dégâts/cadence/recoil."},
              {tier:'A', name:'A545 / KS1', desc:"Excellentes alternatives. Le KS1 meilleur All Rounder."},
              {tier:'A', name:'AK-15 / MK-47', desc:"Meilleur compromis pour mid-level."},
              {tier:'D', name:'AK308 / AMB-17 / DSA58', desc:"À éviter — pas d'accès au tambour.", warn:true},
            ]
          },
          {
            label:'💥 Shotguns',
            recap:'Komrad/Saiga 12 pour le farm, KS23 pour dominer en PvP (si accessible). La Derya est un piège — trop de contraintes pour le résultat.',
            items:[
              {tier:'A', name:'Komrad / Saiga 12', desc:"Meilleurs en PvE — tambour 30 coups."},
              {tier:'S', name:'KS23', desc:"One-shot dévastateur en PvP mais quasi inaccessible."},
              {tier:'A', name:'AEK965', desc:"Bon plan B PvP plus accessible."},
              {tier:'D', name:'Derya', desc:"À éviter — trop de contraintes.", warn:true},
            ]
          },
          {
            label:'🎯 Snipers',
            recap:'Sois honnête sur ton niveau de visée : headshots fiables → McMillan. Sinon un DMR polyvalent. Le VSK est un noob trap à éviter tant que non arsenalisé.',
            items:[
              {tier:'S', name:'McMillan', desc:"King du headshot. Dégâts corps faibles."},
              {tier:'A', name:'VSS Vykhlop', desc:"Meilleur en dégâts sur le corps."},
              {tier:'A', name:'MK-14 / QBU / SVD-M', desc:"DMRs très polyvalents."},
              {tier:'F', name:'VSK', desc:"Noob trap — effort mieux investi ailleurs.", warn:true},
            ]
          },
          {
            label:'⚡ SMGs',
            recap:'L\'A545 fait tout ce qu\'une SMG fait, en mieux — n\'en prends une qu\'en complément d\'un AR déjà établi, pour du pur hit-and-run.',
            items:[
              {tier:'C', name:'Toutes les SMGs', desc:"L'A545 fait tout mieux. Niche : build vitesse pure après avoir un AR."},
            ]
          },
          {
            label:'🔫 Pistolets',
            recap:'Pernach pour le dégât brut, RSH pour la précision — les deux surclassent nettement les autres pistolets.',
            items:[
              {tier:'A', name:'Pernach / RSH', desc:"Meilleurs choix — dégâts monstrueux ou précision."},
              {tier:'B', name:'Glock / Deagle / Sig', desc:"All-rounders corrects."},
            ]
          },
          {
            label:'🔧 Mitrailleuses',
            recap:'Priorité basse en général — un AR avec tambour fait aussi bien pour moins cher. Le PKP reste la seule vraiment valable.',
            items:[
              {tier:'A', name:'PKP Pecheneg', desc:"Seule MG accessible et valable."},
              {tier:'C', name:'MG en général', desc:"Faible priorité — AR + tambour fait aussi bien."},
            ]
          }
        ]
      },
      {
        id:'ar',
        label:'Fusils d\'assaut',
        subcats:[
          {
            label:'Fast Shooters (haute cadence)',
            recap:'Le <b>QBZ Thunderbird</b> est le gold standard. Sans lui, l\'<b>A545</b> est l\'alternative fiable et plus accessible.',
            items:[
              {tier:'S', name:'QBZ Thunderbird', desc:"Meilleur équilibre dégâts/cadence/recoil/moddabilité selon le créateur."},
              {tier:'A', name:'A545', desc:"Tire encore plus vite pour un poil moins de dégâts. Alternative fiable si pas de chance en loot box."},
              {tier:'B', name:'HK416', desc:"Décent si arsenalisé. Accès au tambour, pas cher (arme violette de base)."},
              {tier:'C', name:'FN2000', desc:"Moins moddable, pas d'accès au tambour → clairement inférieur à l'A545."},
            ]
          },
          {
            label:'All Rounders (polyvalents)',
            recap:'Le <b>KS1</b> ressort du lot grâce à sa moddabilité et son tambour. Éviter les armes sans accès tambour dans cette catégorie.',
            items:[
              {tier:'A', name:'KS1', desc:"Le meilleur du groupe : très moddable, accès tambour."},
              {tier:'B', name:'AUG A3', desc:"Décent si arsenalisé, look unique."},
              {tier:'C', name:'Beretta ARX', desc:"Correct mais sans distinction particulière."},
              {tier:'D', name:'AK308 / AMB-17 / DSA58', desc:"Déconseillés : pas d'accès au tambour, problématique avec des dégâts/cadence déjà faibles.", warn:true},
            ]
          },
          {
            label:'Hard Hitters (gros dégâts)',
            recap:'L\'<b>Ash 12</b> tape le plus fort mais exige un excellent niveau. Pour la majorité, <b>AK-15</b> ou <b>MK-47</b> sont le meilleur compromis.',
            items:[
              {tier:'S', name:'Ash 12', desc:"Dégâts les plus élevés de tous les AR, mais 30 balles max et exige un très bon niveau — sinon arme PvE surqualifiée mais dépassée."},
              {tier:'A', name:'AK-15 / MK-47 Mutant', desc:"Recommandation principale pour mid-level : bon compromis dégâts/cadence, recoil gérable une fois maîtrisé."},
            ]
          }
        ]
      },
      {
        id:'shotguns',
        label:'Shotguns',
        subcats:[
          {
            label:'Côté PvE',
            recap:'<b>Komrad</b> ou <b>Saiga 12</b> pour le farm de mutants — tambour 30 coups. La <b>Protecta</b> reste un excellent choix économique.',
            items:[
              {tier:'A', name:'Komrad / Saiga 12', desc:"Meilleurs choix : accès tambour 30 coups, parfaits contre les mutants."},
              {tier:'B', name:'AA12', desc:"Très bon aussi mais moins accessible."},
              {tier:'B-', name:'Protecta', desc:"Choix économique — rechargement lent mais tape aussi fort, bien plus accessible."},
              {tier:'D', name:'Derya', desc:"Déconseillé — surclassé par tous sauf la Protecta, et doit être arsenalisé pour être utile.", warn:true},
            ]
          },
          {
            label:'Côté PvP',
            recap:'La <b>KS23</b> a cassé la méta des Clan Wars mais reste quasi inatteignable. La <b>TOZ84</b> ou l\'<b>Ultima</b> sont des alternatives bien plus accessibles.',
            items:[
              {tier:'S', name:'KS23', desc:"A littéralement cassé la méta des Clan Wars. Capacité one-shot dévastatrice, seulement 4 coups. Quasi inatteignable."},
              {tier:'A', name:'AEK965', desc:"Fait presque pareil que la KS23, un peu moins bien, mais plus accessible."},
              {tier:'B', name:'TOZ84', desc:"One-shot la plupart des joueurs, 2 coups seulement, plus accessible que les deux précédentes."},
              {tier:'B', name:'Ultima', desc:"Bon compromis PvE/PvP, clip décent et très moddable."},
              {tier:'B-', name:'RMO 93', desc:"Mention honorable, ancien king du one-shot avant la démocratisation de l'AA12."},
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
            recap:'Question à se poser : \"est-ce que je touche mes headshots ?\" Si oui, le <b>McMillan</b> est imbattable. Sinon descends vers Karbach puis L96.',
            items:[
              {tier:'S', name:'McMillan', desc:"Le rêve du headshotter — surclasse tout sur headshot, mais dégâts corps très faibles."},
              {tier:'A', name:'VSS Vykhlop', desc:"Meilleurs dégâts sur membres/corps, multiplicateurs plus faibles — l'inverse du McMillan."},
              {tier:'A', name:'Karbach', desc:"Bonne alternative si un peu moins confiant sur les headshots."},
              {tier:'B', name:'Cheytac 300', desc:"Dans la moyenne du groupe hard hitter."},
              {tier:'B', name:'L96A1', desc:"Pour ceux encore moins sûrs de leur visée."},
            ]
          },
          {
            label:'DMR (cadence plus rapide)',
            recap:'Si les headshots ne sont pas ton fort, prends un DMR : <b>MK-14</b>/<b>QBU</b> pour l\'hybride AR/sniper, <b>SVD-M</b> pour un DMR classique.',
            items:[
              {tier:'A', name:'MK-14 / QBU', desc:"Les plus polyvalents : dégâts élevés, précis, accès tambour — hybrides AR/sniper."},
              {tier:'A', name:'SVD-M', desc:"Meilleure option DMR classique accessible via l'arms dealer."},
              {tier:'A', name:'Wave', desc:"Unique : sniper full-auto. Faut juste toucher tous ses tirs."},
              {tier:'F', name:'VSK', desc:"Déconseillé — doit être arsenalisé pour être bon. Reste un bon dépannage bon marché en Clan Wars si rien d'autre.", warn:true},
            ]
          }
        ]
      },
      {
        id:'smg',
        label:'SMG',
        subcats:[
          {
            label:'Vue d\'ensemble',
            recap:'L\'<b>A545</b> fait tout ce qu\'une SMG fait, en mieux. Les SMGs ne se justifient que pour du pur hit-and-run en build vitesse — à prendre seulement après avoir déjà un AR.',
            items:[
              {tier:'C', name:'PPK / Kriss Vector / Evo Scorpion / MP7', desc:"Cadence rapide, recoil géré, tirent bien à la hanche — mais globalement surclassées par l'A545 en polyvalence et moddabilité. Utiles pour builds vitesse purs (aucun malus de mobilité)."},
            ]
          }
        ]
      },
      {
        id:'pistols',
        label:'Pistolets',
        subcats:[
          {
            label:'Vue d\'ensemble',
            recap:'Seuls sidearms master tier disponibles. <b>RSH</b> pour les précis, <b>Pernach</b> pour le dégât brut, les gros pistolets pour un compromis polyvalent.',
            items:[
              {tier:'A', name:'RSH (revolver)', desc:"Dégâts en un coup les plus élevés du pistolet (250 sur headshot à +15). Pour les tireurs précis."},
              {tier:'A', name:'OTS Pernach', desc:"Dégâts monstrueux (44 mini) — comparable à certains AR. Bon en sidearm principal."},
              {tier:'B', name:'Glock 18', desc:"Bien meilleure capacité que le Pernach, mais dispo uniquement à Noël → accessibilité limitée."},
              {tier:'B', name:'Deagle / Big Bill / Sig Sauer', desc:"Bons all-rounders, ni excellents ni mauvais, efficaces entre bonnes mains."},
            ]
          }
        ]
      },
      {
        id:'mg',
        label:'Mitrailleuses',
        subcats:[
          {
            label:'Vue d\'ensemble',
            recap:'Priorité basse en général (-6% vitesse mini, dur à contrôler debout). Le <b>PKP</b> reste la seule vraiment accessible et solide.',
            items:[
              {tier:'A', name:'PKP Pecheneg', desc:"Seule mitrailleuse raisonnablement accessible via l'arms dealer, très bonne."},
              {tier:'B', name:'Little Boy', desc:"Tape très fort mais nécessite un farming extrême en session battles."},
              {tier:'B', name:'DSA RPD', desc:"Entre-deux AR/mitrailleuse, via pièces de recette."},
            ]
          }
        ]
      }
    ]
  },

  argent: {
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
            label:'📼 Résumé de la vidéo',
            recap:'Guide décalé et cash sur les moyens \"standards\" de se faire de l\'argent en solo : farm d\'artéfacts frais, flip d\'Advanced Spare Parts via le season pass, backpack delivery, farm de matériaux sud et signal hunting, spots nordiques (Labyrinthe/Black Detour/Reflection/Forge/Lewich), et même la mendicité ou l\'achat direct de stalcoins. Se termine sur une leçon de marché tirée du crash du CheyTac Intervention : quand tout le monde panique-vend, c\'est le moment d\'acheter.<br><br>🎬 <a href="https://www.youtube.com/watch?v=76gllfsLGO0">Voir la vidéo</a> — chaîne : <a href="https://www.youtube.com/@HeraldOfMediocrity">Mediocre Dude</a>',
            items:[]
          },
          {
            label:'Artéfacts',
            recap:'Ramasser et revendre vite pendant que c\'est \"frais\" reste l\'un des moyens les plus rentables — mais attention à la compétition PvP après une émission, surtout sur les anomalies statiques.',
            items:[
              {tag:'risque', name:'Farm d\'artéfacts (général)', desc:"Remplir son sac garantit facilement quelques centaines de K, plus si tu tombes sur du rouge/violet/bleu. Vends frais (icône horloge encore blanche) pour un meilleur prix au fence."},
              {tag:'risque', name:'Anomalies statiques', desc:"Spawnent les artéfacts les plus précieux (shards, miroirs, atomes, prismes) mais zones à fort trafic — grosse compétition PvP juste après une émission."},
            ]
          },
          {
            label:'Matériaux sud & Signal hunting',
            recap:'Une option accessible même en zone sud, mais lente et peu fiable — le vrai intérêt, ce sont les pièces de schéma (notamment la Wave) et les nouvelles stations relais.',
            items:[
              {tag:'lent', name:'Fils de cuivre / Crap height', desc:"Ressources bottleneck très demandées par les joueurs du sud, revendables cher aux joueurs de fin de jeu (100-150k le spool, 50-70k le crap height). Lent mais accessible dès le début."},
              {tag:'lent', name:'Signal hunting (général)', desc:"Globalement peu rentable — des centaines d'heures pour du matos ou de l'ammo spéciale peu utile."},
              {tag:'chance', name:'Pièces de schéma & la Wave', desc:"Le vrai intérêt du signal hunting : chaque pièce se revend 100-300k. La Wave (sniper full-auto) est LE bon plan si tu tombes sur ses pièces."},
              {tag:'chance', name:'Stations relais', desc:"Nouvel item au moment de la vidéo : convertit en 20 trackers d'un coup, fait gagner un temps monstre. Encore rare, prix à surveiller."},
            ]
          },
          {
            label:'Spots de farm nordiques',
            recap:'Le Labyrinthe reste rapide mais dangereux ; Black Detour/Reflection sont plus sûrs pour un revenu stable ; Lewich offre le meilleur ratio temps/risque pour un joueur solo.',
            items:[
              {tag:'risque', name:'Labyrinthe', desc:"Rapide pour farmer de la poussière anomalous mais forte compétition PvP. Le marché de la poussière est désormais dilué avec Black Detour/Reflection."},
              {tag:'lent', name:'Black Detour / Reflection', desc:"Plus sûr et plus lent que le Labyrinthe pour la même poussière anomalous — bon revenu stable au fil du temps."},
              {tag:'lent', name:'Forge 11', desc:"Beaucoup moins rentable qu'avant les nerfs. Utile surtout pour les dailies et le farming de matériaux, pas pour s'enrichir."},
              {tag:'rapide', name:'Lewich', desc:"Risqué (détecteur de proximité coupé, sortie conditionnée à tuer un boss) mais très rentable en solo : 100-150k par run de 10 minutes, plus des ressources uniques (dark limbo, lambda data...)."},
            ]
          },
          {
            label:'Season Pass',
            recap:'Flipper des Advanced Spare Parts (ASP) est \"le revenu le plus stable et constant\" selon le créateur — les gacha boxes, c\'est plutôt pour le frisson que pour la rentabilité.',
            items:[
              {tag:'fiable', name:'Advanced Spare Parts (ASP)', desc:"Achète les ASP via la monnaie du season pass et revends à 40-45k l'unité — 100 ASP = environ 4 à 5 millions. Revenu jugé le plus stable du jeu."},
              {tag:'chance', name:'Gacha boxes', desc:"Peut rapporter des dizaines de millions si tu as de la chance, mais statistiquement tu finiras avec des objets sans grande valeur."},
              {tag:'rmt', name:'Season pass via act tickets', desc:"Le créateur déconseille formellement d'acheter des season passes avec des act tickets — garde-les plutôt pour du matériel doré (Albatross, Gauss, Civil Fair).", warn:true},
            ]
          },
          {
            label:'Backpack delivery',
            recap:'Pas glamour, mais toujours disponible — une source de revenu quotidienne fiable, même en fin de jeu.',
            items:[
              {tag:'fiable', name:'Livraisons de sac à dos', desc:"Jusqu'à 500k par jour sur un seul personnage (plus avec des alts). Demande juste de la vitesse et de la vigilance sur le trajet."},
            ]
          },
          {
            label:'Mendicité',
            recap:'Une vraie méthode viable si tu soignes ta présentation — mais attends-toi à une réputation qui se dégrade avec le temps.',
            items:[
              {tag:'chance', name:'Mendier', desc:"Fonctionne surtout via un bon profil (description, skins, réalisations affichées) plutôt qu'en spammant des messages. Attire la sympathie... jusqu'à ce que les autres joueurs s'en lassent."},
            ]
          },
          {
            label:'Achat de stalcoins (RMT)',
            recap:'La méthode la plus efficace en temps/rubles, mais elle consomme littéralement de l\'argent réel — le créateur est clair : ce n\'est pas un conseil, juste un constat.',
            items:[
              {tag:'rmt', name:'Achat de monnaie premium', desc:"Achète indirectement des objets tradables à haute valeur (cosmétiques surtout) que tu revends. Season pass et packs overdrive sont les paris les plus sûrs, les cosmétiques les plus lucratifs mais aléatoires."},
            ]
          },
          {
            label:'La leçon du crash CheyTac',
            recap:'Quand tout le monde vend en panique, c\'est le moment d\'acheter — puis d\'attendre la stabilisation du marché à la saison suivante.',
            items:[
              {tag:'risque', name:'Hold pendant un crash', desc:"Lors de la sortie du CheyTac Intervention, tout le monde a liquidé ses biens pour payer l'arme (jusqu'à 150M), faisant chuter tous les prix. Le créateur a accumulé ASP et skins à prix cassé en attendant la stabilisation à la saison suivante."},
            ]
          }
        ]
      },
      {
        id:'video2',
        label:'Cheeki Breeki — Best Ways to Make Money',
        subcats:[
          {
            label:'📼 Résumé de la vidéo',
            recap:'Approche méthodique et chiffrée (spreadsheet à l\'appui) pensée pour un joueur solo moyen, sans clan. Classement basé sur des centaines de runs chronométrés : les stashes arrivent en tête, juste devant la chasse aux artéfacts et les proto-anomalies, loin devant les installations anomales, les signaux ou le farm de mutants. Mentionne aussi le flip à l\'hôtel des ventes et le gamble sur les loot boxes du battle pass comme activités \"hors classement\" mais potentiellement très rentables.<br><br>🎬 <a href="https://www.youtube.com/watch?v=tTz2iHHkn9g">Voir la vidéo</a> — chaîne : <a href="https://www.youtube.com/@CheekiBreekiTv">Cheeki Breeki</a><br>📊 <a href="https://docs.google.com/spreadsheets/d/1yNwwNMTRAeoMh5XN--gkH3FCWfJBUkp99AUa5XP5VwY/edit?gid=1684694789#gid=1684694789">Spreadsheet complet du créateur</a>',
            items:[]
          },
          {
            label:'Le podium (joueur solo moyen)',
            recap:'Contexte important : ce créateur joue solo à 99%, sans clan, et se dit mauvais en PvP — son classement est pensé pour le joueur moyen, pas les clans qui contrôlent Lyubech ou les squads PvP en Stillwater.',
            items:[
              {tag:'fiable', name:'Stashes (n°1)', desc:"Aucun gear spécifique requis — pas besoin du Buryat ni d'un Saturn, jouable à tout moment sans attendre d'émission. Un run de 18 stashes en moins de 7 minutes. Quasi égal à la chasse aux artéfacts en argent brut, et bien plus consistant. Astuce du créateur : loot absolument tout dans les caisses, ne pas trier sur place."},
              {tag:'risque', name:'Chasse aux artéfacts (n°2)', desc:"~900k par émission en moyenne. Nécessite le Buryat, et au moins un Saturn usé pour le labo/Black Detour/Reflection/Stillwater. Rester près de sa base de faction est étonnamment efficace et sûr — le labo et Black Detour sont plus riches mais bien plus contestés."},
              {tag:'lent', name:'Proto-anomalies (n°3)', desc:"60 secondes par proto en théorie, mais en jeu réel il faut courir pour en trouver et parfois les partager avec d'autres joueurs — chute de rendement bien plus marquée que pour les stashes. Plus une activité opportuniste qu'un vrai farm actif. Les Mines sont le meilleur spot général, le Labo excellent avec un Saturn."},
            ]
          },
          {
            label:'Activités secondaires (moyennes à faibles)',
            recap:'Ni excellentes ni inutiles — surtout intéressantes pour des objectifs annexes (battle pass, matériaux de craft) plutôt que pour l\'argent pur.',
            items:[
              {tag:'lent', name:'Installations anomales', desc:"Pas aussi mauvaises que leur réputation, notamment pour les tools/parts qu'elles font tomber — bonnes pour les missions \"tuer des mutants\" du battle pass. Entre minuit et 4h du matin, les wisps n'attaquent pas l'installation (jouable \"gratuitement\" mais ennuyeux)."},
              {tag:'lent', name:'Signaux', desc:"Autrefois excellents (acide revendable, dust via fragments+artefact étrange), mais ces recettes ont été nerfées dans le dernier patch. Restent utiles pour le battle pass et le farm de trackers pour le Buryat — plus vraiment pour l'argent."},
              {tag:'lent', name:'Mutants', desc:"Corrects si tu as besoin de fern (upgrade) ou de viande/sabots (recettes hideout), mais mauvais pour l'argent pur et très ennuyeux. Environ 6 niveaux de battle pass par heure — il existe de bien meilleures façons de farmer le battle pass."},
            ]
          },
          {
            label:'Battle pass & flip',
            recap:'Deux activités hors classement officiel : l\'une parce qu\'elle est trop aléatoire pour être comparée, l\'autre parce qu\'elle est difficile à chiffrer — mais toutes deux potentiellement très rentables.',
            items:[
              {tag:'chance', name:'Gamble sur les loot boxes', desc:"Pourrait être la méthode la plus rentable de toutes selon le créateur — mais tellement basée sur la chance qu'il refuse de la classer sérieusement. Vendre les caisses fermées (et les vieilles caisses dont le prix grimpe avec le temps) reste un revenu stable et sûr."},
              {tag:'fiable', name:'Flip à l\'hôtel des ventes', desc:"Probablement dans son propre top 3 personnel. Acheter en dessous du prix du marché et revendre plus cher — exemple donné : l'huile, achetable directement chez le marchand alors que beaucoup pensent qu'elle ne se farm qu'en extérieur, revendue à environ deux fois le prix d'achat."},
            ]
          },
          {
            label:'⚠️ Le hideout',
            recap:'Un avertissement clair et direct : ne pas investir activement dans le hideout dans l\'optique de générer du revenu, dans l\'état actuel du jeu.',
            items:[
              {tag:'lent', name:'Investir dans le hideout pour le profit', desc:"Le dernier patch a nerfé presque toutes les recettes intéressantes. Continue de l'upgrader passivement (ça vient vite avec le farm de stashes) mais n'investis pas activement dedans en pensant y gagner de l'argent pour l'instant — c'est devenu un gouffre à ressources plus qu'une source de revenu.", warn:true},
            ]
          }
        ]
      }
    ]
  },

  artefacts: {
    filters: [
      {id:'synthese', label:'Synthèse'},
      {id:'early', label:'Early Game'},
      {id:'mid', label:'Mid Game'},
      {id:'late', label:'Late Game'},
      {id:'all', label:'Tout'},
    ],
    categories: [
      {
        id:'synthese',
        label:'Synthèse',
        subcats:[
          {
            label:'🎯 À savoir avant tout',
            recap:'La question qui revient tout le temps : farmer le <b>Buryat</b> (détecteur), ça vaut le coup ? Oui, sans hésiter — ça rend le farm d\'artéfacts bien plus rapide et rentable, malgré le grind pénible pour l\'obtenir.',
            items:[
              {tag:'valeur', name:'Le Buryat vaut le coup', desc:"Douloureux à farmer (300 signaux avant de l'avoir), mais rend la chasse aux artéfacts nettement plus rapide. Une émission peut rapporter 300k facilement en 15-20 minutes rien qu'en artéfacts communs."},
              {tag:'budget', name:'Rolls parfaits ≠ rolls réels', desc:"Toutes les stats du créateur supposent un roll parfait (110% vert, 120% bleu, 130% rose). En vrai jeu, attends-toi à moins sans grind supplémentaire — c'est une base de comparaison, pas une garantie."},
            ]
          },
          {
            label:'💰 Meilleurs rapports qualité/prix par étape',
            recap:'Un build par étape qui revient souvent dans les recommandations du créateur — à ajuster selon ton budget avec les variantes plus complètes du tableau fourni.',
            items:[
              {tag:'valeur', name:'Early Speed — Candlelight, Comet, 2x Rattle', desc:"~51 000 rubles. Bon move speed + gros bonus de stamina. Le vrai point de départ recommandé (pas le tout gratuit)."},
              {tag:'valeur', name:'Mid PvP — Proto-Onion, Veiner, Onion, Spiral, Shrimp', desc:"~1,9M. Build équilibré \"jack of all trades\" qui évite d'avoir à switcher entre un sac speed et un container PvP."},
              {tag:'cher', name:'Late PvP — Atom, Branch, 2x Shard, Steel Hedgehog, Cursed Rose', desc:"~75M. Le build personnel du créateur en fin de jeu — bonne vitalité/heal/BR sans payer le surcoût du Prism (un Steel Hedgehog +15 égale un Prism bleu en BR, pour bien moins cher)."},
            ]
          }
        ]
      },
      {
        id:'early',
        label:'Early Game (artéfacts verts)',
        subcats:[
          {
            label:'Speed / Stamina',
            recap:'Commence avec un sac 4 slots (duffelbag). Le combo <b>Candlelight + Comet + 2 Rattle</b> est le vrai point de départ recommandé — le budget minimal (Wolf Tears) marche, mais l\'écart de prix ne vaut pas le sacrifice.',
            items:[
              {tag:'budget', name:'Wolf Tears + 3x Rattle', desc:"32 000₽. Movespeed 2.64, Stamina 36.63, Carry +5.72. \"Mieux que rien\", dixit le créateur — mais grind les 20k de plus si tu peux."},
              {tag:'valeur', name:'Candlelight, Comet, 2x Rattle', desc:"51 000₽. Movespeed 3.08, Stamina 42.24, Stamina R 2.20. Le meilleur point de départ pour le prix."},
              {tag:'valeur', name:'Gum, Rattle x2, Spiral', desc:"306 000₽. Movespeed 3.52, Stamina 24.42, Stamina R 2.86, Carry +7.70. Upgrade naturel une fois un peu d'argent de côté (swap Candlelight→Gum, un Rattle→Spiral)."},
              {tag:'gamble', name:'Transformer, 2x Ice Hedgehog, White Bracelet', desc:"440 000₽. Movespeed 6.16, Stamina R 9.02, Carry +8.58. Un artefact blanc peut roll à 0% — le créateur parle d'expérience (\"utiliser un serum de changement sur un artefact blanc, c'est un blasphème\")."},
              {tag:'valeur', name:'Scrubber, Helium, 2x Spiral', desc:"650 000₽. Movespeed 5.17, Stamina 12.87, Stamina R 5.06, Carry +15.40. Le meilleur choix pour les riches sans le gamble du bracelet blanc."},
            ]
          },
          {
            label:'PvP (KZS-4 / KZS-5)',
            recap:'Sous 200 BR, la seule priorité c\'est d\'en accumuler plus — les diminishing returns démarrent vers 300. Le build personnel du créateur à ce niveau ajoute un Polyhedron contre les snipers.',
            items:[
              {tag:'budget', name:'2x Onion, 2x Rose (KZS-4)', desc:"36 000₽. BR 28.16, Stamina 17.16. \"Rien de fou ne va se passer ici\" — mais toujours mieux que rien pour 36k."},
              {tag:'valeur', name:'Proto-Onion, Cursed Rose, Onion, Shrimp (KZS-4)', desc:"248 000₽. BR 26.95, Stamina 8.58, Carry +11.99. 6-7x le prix pour le même BR que l'option budget, mais carry weight et stamina rendent le build vraiment jouable."},
              {tag:'valeur', name:'Proto-Onion, Cursed Rose, 2x Onion, Shrimp (KZS-5)', desc:"256 000₽. BR 33.33, Stamina 17.16, Carry +11.99. Build PvP early game très solide pour le prix, dès l'accès au KZS-5."},
              {tag:'astuce', name:'Gum, Sun, 2x Onion, Steel Hedgehog', desc:"406 000₽. BR 27.06, Vita 2.09, Bleeding -1.21. Anti-sniper : contre la mode des fusils qui infligent du bleeding, pense à la réduction de saignement plutôt qu'au pur BR."},
              {tag:'valeur', name:'Proto-Onion, Polyhedron, Cursed Rose, Crust, Shrimp', desc:"740 000₽. BR 31.68, Carry +11.99. Le build personnel du créateur à ce niveau — le Polyhedron absorbe un gros chunk de dégâts, sauve la vie contre les snipers plus que prévu. Remplace le Crust par un Onion si le budget est serré."},
            ]
          }
        ]
      },
      {
        id:'mid',
        label:'Mid Game (artéfacts bleus/roses)',
        subcats:[
          {
            label:'Speed / Stamina',
            recap:'Passe directement au rose si le budget le permet — inutile de perdre du temps sur le bleu. Le Forager (ressources Limansk) est un excellent container mi-jeu, même si Limansk fait peur aux débutants.',
            items:[
              {tag:'budget', name:'Gum, Comet, Rattle, Spiral, Golden Prima', desc:"~2 045 000₽. Movespeed 6, Stamina 32.76, Carry +23.28. Solide si le build \"presque 3M\" est trop cher — sacrifie un peu de movespeed/stamina régen."},
              {tag:'cher', name:'Proto-Onion, Golden Prima, Rattle, 2x Spiral (KZS-5)', desc:"~2 875 000₽. Movespeed 6.48, Stamina 13.32, Carry +31.68. Un des meilleurs builds speed complets à ce stade, mais sur le haut du budget mid-game."},
              {tag:'valeur', name:'Golden Prima, Spiral, Ice Hedge, Rattle (Forager)', desc:"~1 875 000₽. Movespeed 6.48, Stamina 13.32, Carry +23.28. Le Forager donne -2.5 radiation et marche sur n'importe quelle armure, même lourde — un des containers préférés du créateur pour le mid-game."},
            ]
          },
          {
            label:'PvP équilibré',
            recap:'Deux approches : garder un sac speed + switcher vers un container PvP au besoin, ou jouer un build \"jack of all trades\" dans un seul container. Le créateur préfère la seconde option.',
            items:[
              {tag:'valeur', name:'Proto-Onion, Veiner, Onion, Spiral, Shrimp', desc:"~1 885 000₽. Movespeed 1.92, Stamina 9.36, Carry +28.8, BR 23.64. Le build \"go-to\" du créateur à ce niveau — un peu de tout sans avoir à switcher de container."},
              {tag:'cher', name:'Proto-Onion, Veiner, Onion, Spiral, Steel Hedgehog', desc:"~2 785 000₽. Carry +15.72, BR 30.72. Variante plus tanky du build précédent — swap le Shrimp contre un Steel Hedgehog, perd du carry weight mais gagne beaucoup de BR."},
              {tag:'gamble', name:'2x Cursed Rose, Veiner, Steel Hedgehog (Forager)', desc:"~2 300 000₽. BR 51.6. Permet un BR délirant pour un container léger, facile à transporter et à switcher au besoin en PvP — mais ça reste un build très spécialisé, pas pour jouer en continu."},
            ]
          }
        ]
      },
      {
        id:'late',
        label:'Late Game (artéfacts roses +15)',
        subcats:[
          {
            label:'Speed',
            recap:'L\'objectif final en Bear\'s Den demande un Transformer bien roulé (protection anti-psy-émission) — risqué à monter en +15 sans un bon roll de départ. La Hive offre une alternative plus safe.',
            items:[
              {tag:'cher', name:'Transformer, Helium, Spiral, 3x Bracelet (Bear\'s Den)', desc:"~76 400 000₽. Movespeed 23.32, Stamina 82.13, Carry +33.46. L'objectif final du créateur pour la vitesse — nécessite un Transformer avec le bon roll anti-psy, sinon dégâts psy garantis. Swap un Bracelet pour un Shrimp = version moins chère avec plus de carry weight."},
              {tag:'valeur', name:'Scrubber, Golden Prima, Spiral, 3x Ice Hedgehog', desc:"~8 000 000₽. Movespeed 18.08, Stamina 101.06, Carry +43.94. Alternative bien moins chère pour progresser vers l'objectif Bear's Den, sans le gamble du Transformer."},
              {tag:'cher', name:'Helium, Spiral, Golden Prima, 2x Bracelet (Hive)', desc:"~52 000 000₽. Movespeed 21.13, Stamina 76.73, Carry +43.94. Un des meilleurs builds speed du jeu selon le créateur — les builds à 2 Bracelets doivent éviter les rolls parfaits sous peine de dégâts psy."},
            ]
          },
          {
            label:'PvP',
            recap:'À ce niveau tu joues déjà des armures master avec beaucoup de BR de base — le focus glisse vers la vitalité et le heal. Le créateur évite le Prism (trop cher pour le gain) au profit du Steel Hedgehog.',
            items:[
              {tag:'cher', name:'Atom, 2x Branch, 2x Shard, Prism (Bear\'s Den)', desc:"~109 000 000₽. Vita 15.55, Heal Eff 101.4, BR 32.79. Le build le plus commun vu par le créateur en observant les meilleurs joueurs — le cœur de tous les builds Bear's Den PvP."},
              {tag:'valeur', name:'Atom, Branch, 2x Shard, Steel Hedgehog, Cursed Rose', desc:"~75 000 000₽. Vita 12.17, Heal Eff 70.3, BR 55.6. Le build personnel du créateur — un Steel Hedgehog +15 égale la BR d'un Prism bleu pour moitié moins cher. \"Je ne paie pas 10M de plus pour 3 BR en plus\", dixit."},
              {tag:'valeur', name:'Branch, Shard, Prism, Sun, Snake Eyes (Hive)', desc:"~65 500 000₽. Vita 16.56, Heal Eff 50.7, BR 32.79. Le cœur des builds Hive PvP les plus courants — remplace aussi le Prism par un Steel Hedgehog si tu veux économiser."},
              {tag:'valeur', name:'Branch, Shard, Sun, Snake Eyes, Heel (Hive, full heal)', desc:"~63 500 000₽. Vita 16.56, Heal Eff 87.88. Sur les armures les plus lourdes (Hive), tu peux complètement lâcher le BR pour du full vitalité/heal en remplaçant le Prism par un Heel."},
            ]
          }
        ]
      }
    ]
  },

  progression: {
    filters: [
      {id:'synthese', label:'Synthèse'},
      {id:'swamps', label:'Marais'},
      {id:'roadside', label:'Roadside'},
      {id:'bar', label:'Bar (Stalker)'},
      {id:'veteran', label:'Vétéran'},
      {id:'all', label:'Tout'},
    ],
    categories: [
      {
        id:'synthese',
        label:'Synthèse',
        subcats:[
          {
            label:'🗺️ Les règles d\'or',
            recap:'Le fil rouge de tout le guide : <b>ne pousse jamais ton équipement au-delà de ton niveau de craft actuel</b> — le matchmaking s\'ajuste sur ton gear, et te retrouver face à des joueurs avec 500-700h d\'expérience ruine l\'expérience.',
            items:[
              {tag:'cle', name:'Attention au matchmaking gear', desc:"N'achète jamais de gear plus haut niveau que ce que tu peux actuellement crafter, et n'upgrade pas au-delà de +3 à Roadside. Ça t'évite d'être catapulté dans des lobbies bien trop difficiles."},
              {tag:'cle', name:'Garde tes Act Tickets', desc:"Ne les dépense JAMAIS avant de bien comprendre leur valeur (plus tard dans le jeu). Toute autre monnaie peut être dépensée librement, pas celle-là."},
              {tag:'cle', name:'Garde Advanced Spare Parts / Advanced Tools', desc:"Ne les dépense pas avant d'atteindre le nord — stocke-les, tu en auras besoin plus tard. Les tools/parts basiques peuvent être dépensés librement."},
            ]
          },
          {
            label:'⚠️ Pièges fréquents',
            recap:'Des erreurs que le créateur a lui-même faites en 7000+ heures de jeu.',
            items:[
              {tag:'attention', name:'Lignes d\'armes Ash 12 / VSSsk / RSH12', desc:"Ces lignes forcent à crafter via Limansk plus tard — une zone de guerre permanente. Évite-les si tu ne veux pas ce niveau de difficulté imposé.", warn:true},
              {tag:'attention', name:'Sessions battles sans preset gear', desc:"Sur les maps classiques, tu affronteras des joueurs avec des builds à 200M+. Reste sur Arms Race ou Death Match (gear imposé) tant que t'es pas prêt.", warn:true},
              {tag:'attention', name:'Crafter des containers trop tôt', desc:"Ils ne deviennent intéressants qu'avec un vrai budget artéfacts, que t'as pas encore à Roadside. Perte de temps à ce stade.", warn:true},
            ]
          },
          {
            label:'📍 Par étape (résumé express)',
            recap:'Le parcours complet en une phrase par zone.',
            items:[
              {tag:'astuce', name:'Marais', desc:"Zone tutoriel très chill. Termine juste la quête d'histoire, ne perds pas de temps à tout crafter."},
              {tag:'astuce', name:'Roadside', desc:"4 zones, système d'infection introduit. Crafte une arme + une armure, explore un peu, artéfacts pas chers seulement (<15k)."},
              {tag:'astuce', name:'Bar (niveau Stalker)', desc:"Farm de data fragments (Electra, installations, signaux), premiers vrais builds artéfacts, plus de PvP."},
              {tag:'astuce', name:'Vétéran', desc:"Chasse aux artéfacts après émissions, builds spécialisés jusqu'à +5/+15, fin de trame sud (boss du radar) puis choix de faction nordique."},
            ]
          }
        ]
      },
      {
        id:'swamps',
        label:'Marais (tutoriel)',
        subcats:[
          {
            label:'Bases à connaître',
            recap:'Zone la plus chill du jeu, quasi pas de PvP. Le seul vrai objectif ici : comprendre les mécaniques et finir la quête d\'histoire — pas besoin de s\'attarder.',
            items:[
              {tag:'cle', name:'Le choix de faction ne compte pas vraiment', desc:"Bandits ou Stalkers — choisis juste celle que tu préfères visuellement/thématiquement, ça n'a pas d'impact majeur à ce stade."},
              {tag:'cle', name:'Comprendre le système de barter', desc:"Récolte des ressources et de l'argent, utilise-les pour crafter/upgrader arme et armure. C'est toute la boucle de progression du jeu."},
              {tag:'astuce', name:'Ne perds pas de temps à tout crafter', desc:"Tu n'auras jamais besoin de revenir dans les marais pour crafter quoi que ce soit d'utile plus tard — inutile de suivre toutes les lignes de craft ici."},
              {tag:'astuce', name:'Achète un shotgun dès le départ (280₽)', desc:"Utilisable en slot secondaire à la place d'un pistolet, 6 coups en magasin. Les shotguns sont particulièrement forts contre les mutants et t'aideront jusqu'au milieu de la Zone."},
              {tag:'cle', name:'Compréhension de la carte', desc:"Le vrai danger, ce sont les autres joueurs. Repère d'où les ennemis peuvent venir et découpe chaque zone en niveaux de danger avant de t'y aventurer avec du loot."},
              {tag:'attention', name:'Perte de loot à la mort', desc:"Presque tout ce que tu farmes (ressources, munitions non paquetées, medkits) tombe dans un sac au sol si tu meurs. Seuls les objets avec un symbole cadenas ou bouclier sont protégés.", warn:true},
              {tag:'astuce', name:'La roue d\'accès rapide', desc:"Survole un objet, appuie sur un chiffre pour l'ajouter à la roue (touche C pour l'ouvrir). Permet d'utiliser arme/sac/médicaments sans ouvrir l'inventaire."},
            ]
          }
        ]
      },
      {
        id:'roadside',
        label:'Roadside',
        subcats:[
          {
            label:'Navigation & zones à risque',
            recap:'4 zones plus dangereuses que les marais mais globalement chill. Plus tu vas au nord, plus les zones sont risquées — mais les récompenses suivent. Nouveauté : les zones de danger (infection).',
            items:[
              {tag:'astuce', name:'Zones intermédiaires = bon compromis', desc:"Les zones latérales permettent de farmer sans trop de risque, tant que tu évites les entrées de Scrapyard. Idéal si tu manques encore de confiance."},
              {tag:'cle', name:'Scrapyard = meilleures récompenses', desc:"Seule zone qui permet de farmer le niveau de réputation final de la base Roadside. Pas obligatoire d'y aller tout de suite."},
              {tag:'cle', name:'3 types d\'armures face aux zones de danger', desc:"Combat = protection la plus faible. Science = protection totale. Combo = protection partielle ou plus de temps pour fuir. La plupart des joueurs crafte soit une combat + une science (à switcher), soit une combo seule (avec limitations)."},
              {tag:'astuce', name:'Bandages contre le saignement', desc:"Très efficaces contre le bleeding causé par les snipers ou mutants puissants. Objets peu chers qui peuvent sauver la vie — à toujours avoir sur soi."},
            ]
          },
          {
            label:'Équipement & artéfacts',
            recap:'Expérimente librement les armes, mais ne crafte pas encore de containers — ils ne deviennent intéressants qu\'avec un vrai budget artéfacts. Reste sous les 15k par artéfact pour l\'instant.',
            items:[
              {tag:'astuce', name:'Expérimente les armes librement', desc:"Le craft prend plus de temps qu'aux marais mais reste raisonnable. Choisis ce qui te plaît, pas de meilleure arme universelle."},
              {tag:'attention', name:'Ne crafte pas de containers encore', desc:"Ils ne deviennent vraiment forts qu'avec un investissement sérieux en artéfacts, que tu n'as pas encore à ce stade. Perte de ressources.", warn:true},
              {tag:'astuce', name:'Artéfacts bon marché uniquement', desc:"Ne dépasse pas 15 000₽ par artéfact. Prends-en avec différentes résistances aux infections négatives, peu importe le type (vitesse, HP, heal)."},
              {tag:'attention', name:'N\'achète pas de gear trop haut niveau', desc:"Même si l'hôtel des ventes (débloqué au niveau 2 de la base Roadside) propose du matériel supérieur, ça peut te pousser vers des lobbies bien trop difficiles à cause du matchmaking basé sur le gear.", warn:true},
              {tag:'astuce', name:'Exception : les couteaux', desc:"Un couteau bleu ou violet pas cher peut être acheté juste pour le bonus de vitesse de déplacement, sans risque de matchmaking."},
              {tag:'cle', name:'Upgrades limités à +3', desc:"Comme pour l'achat de gear, upgrader trop haut peut perturber ton matchmaking. Reste à +3 maximum à ce stade."},
              {tag:'cle', name:'Garde Advanced Spare Parts et Advanced Tools', desc:"Ne les dépense pas avant d'atteindre le nord — stocke-les. Les tools/parts basiques peuvent eux être dépensés librement."},
              {tag:'astuce', name:'Ne upgrade pas encore tes artéfacts', desc:"Pure perte de ressources et de temps à ce stade. Garde tes catalyseurs et sources d'énergie pour plus tard."},
            ]
          },
          {
            label:'Attachements & ressources',
            recap:'Vérifie toujours la compatibilité des attachements avant de crafter quoi que ce soit — chaque arme a ses propres slots de module.',
            items:[
              {tag:'cle', name:'Vérifie la compatibilité avant de crafter', desc:"Chaque arme a des slots différents pour canon, laser, poignée et viseur — et tous les attachements ne fonctionnent pas ensemble. Preview l'arme chez le barter avant de dépenser quoi que ce soit."},
              {tag:'astuce', name:'Fils de cuivre via détecteur de métaux', desc:"Obtenu via la quête d'histoire à la base des diggers. Un signal sonore indique la proximité — sors le détecteur, approche-toi, des petits tas apparaissent à creuser."},
              {tag:'astuce', name:'Revends les spools de fils de cuivre', desc:"Se vendent cher à l'hôtel des ventes, comme le burning karpite. Bonne source de revenu passive à ce stade."},
              {tag:'optionnel', name:'Carte du wiki pour les caches', desc:"Si tu as besoin de beaucoup de fils de cuivre spécifiquement, la carte du wiki Stall Zone indique les zones jaunes où trouver des caches."},
            ]
          }
        ]
      },
      {
        id:'bar',
        label:'Bar (niveau Stalker)',
        subcats:[
          {
            label:'Zones autour du Bar',
            recap:'Bar, forêt et fosse offrent les mêmes récompenses — seules différences : niveau de danger et temps de trajet. Attends-toi à beaucoup plus de PvP qu\'avant, certains joueurs se font même tuer avant de poser leur point de respawn.',
            items:[
              {tag:'attention', name:'Zones à éviter si tu veux la paix', desc:"L'entrée du milieu vers le bar et toute la partie supérieure sont particulièrement dangereuses — évite-les si tu ne cherches pas le combat."},
              {tag:'cle', name:'Pas de caches dans le bar lui-même', desc:"Si tu as besoin de caches, il faut aller en forêt ou à la fosse — le bar seul ne les propose pas."},
            ]
          },
          {
            label:'Farm de data fragments',
            recap:'Trois méthodes pour farmer les data fragments — les anomalies Electra sont les plus simples mais ennuyeuses, les installations et signaux offrent plus de variété.',
            items:[
              {tag:'astuce', name:'Anomalies Electra', desc:"Reste dans le rayon de l'anomalie sans en sortir (le progrès redescend sinon) — faisable même en armure combat si bien joué. Simple mais répétitif."},
              {tag:'astuce', name:'Installations de recherche anomale', desc:"Achète-en une chez Gromaika, place-la près d'une faille anomale, défends-la contre des vagues de mutants, puis récupère la récompense."},
              {tag:'astuce', name:'Signaux', desc:"Détecteur longue portée pour repérer une zone, détecteur courte portée pour localiser le signal précis. Pas de carte des spawns — il faut courir et checker régulièrement."},
              {tag:'attention', name:'Donjons via signaux', desc:"Donnent plus de loot selon la difficulté, mais si tu meurs à l'intérieur, ton sac est perdu définitivement, sans possibilité de récupération.", warn:true},
              {tag:'optionnel', name:'Tableau de quêtes journalières', desc:"Prends-les toutes et complète-les en marge de ton farm normal. Pas obligatoires — annule celles trop dures ou trop longues et prends-en une autre le lendemain."},
            ]
          },
          {
            label:'Équipement & tactique',
            recap:'Commence à te stabiliser sur une ligne de gear précise — chaque prochain palier nécessite l\'objet précédent de la même ligne pour être crafté.',
            items:[
              {tag:'attention', name:'Évite Ash 12 / VSSsk / RSH12 en tant que newbie', desc:"Ces lignes forcent à crafter plus tard via Limansk, une zone de combat permanent. Choisis une autre ligne si tu veux éviter ce niveau de challenge imposé.", warn:true},
              {tag:'cle', name:'Munitions perforantes pour le PvP', desc:"Les munitions expansives sont bonnes en PvE mais t'affaiblissent nettement contre les joueurs — passe aux munitions perforantes."},
              {tag:'astuce', name:'Plaques acier (PvE) vs céramique (PvP)', desc:"Farme avec une plaque acier équipée, puis switch vers une plaque céramique avant d'extraire ton loot pour de meilleures chances en PvP. La céramique casse vite, donc à utiliser au bon moment."},
              {tag:'astuce', name:'Utilise des caches (stashes)', desc:"Place-les près de tes spots de farm en zone dangereuse (forêt/fosse), stocke ton loot au fur et à mesure, puis extrait tout une fois la situation calmée."},
              {tag:'optionnel', name:'Trade coins pour acheter des ressources', desc:"Obtenus via récompenses de connexion, battle pass et caisses. Utile pour ce que tu ne peux pas farmer facilement — inutile de les garder sans raison."},
            ]
          },
          {
            label:'Battle Pass & session battles',
            recap:'Le battle pass s\'achète avec des rubles sans dépenser d\'argent réel — pas besoin de le prioriser à ce stade. Côté PvP compétitif, ne touche qu\'aux modes à gear imposé.',
            items:[
              {tag:'cle', name:'N\'utilise jamais tes Act Tickets', desc:"Extrêmement précieux et limités — leur valeur devient claire bien plus tard. Toute autre monnaie peut être dépensée librement à ce stade.", warn:true},
              {tag:'astuce', name:'Reroll tes tâches vers les plus communes', desc:"Permet de progresser naturellement dans le battle pass en faisant ce que tu ferais de toute façon."},
              {tag:'attention', name:'Évite les session battles sur maps classiques', desc:"Tu affronteras des joueurs avec du gear master/legendary valant 200M+. Reste sur Arms Race ou Death Match qui utilisent du gear imposé.", warn:true},
            ]
          }
        ]
      },
      {
        id:'veteran',
        label:'Niveau Vétéran',
        subcats:[
          {
            label:'Zones & dangers',
            recap:'4 zones pour débuter le craft vétéran. Les zones latérales sont plus sûres mais moins généreuses — Graveyard et Dead City ne sont pas simples non plus, avec leurs zones de danger.',
            items:[
              {tag:'astuce', name:'Plescoy / Path of Fools / Graveyard / Dead City', desc:"Zones latérales plus sûres mais récompenses plus faibles. Plescoy et Path of Fools ont plus de PvP ; Graveyard et Dead City ont des zones de danger à surveiller."},
              {tag:'attention', name:'Anti-rads et antidotes obligatoires sans suit science', desc:"Si tu n'utilises pas une armure science, garde toujours ces objets sur toi face aux zones de danger.", warn:true},
            ]
          },
          {
            label:'Chasse aux artéfacts',
            recap:'Une vraie ruée vers l\'or après chaque émission. Ça peut rapporter des millions par run si t\'as de la chance — mais il faut être rapide et méthodique.',
            items:[
              {tag:'cle', name:'Timing des émissions', desc:"Aléatoire entre 2h30 et 4h après la précédente (timer visible en haut à gauche de la carte). Les artéfacts spawnent 5 à 35 minutes après l'émission."},
              {tag:'astuce', name:'Cours vers les spots à forte densité d\'anomalies', desc:"Repère à l'avance les endroits où tu as déjà vu beaucoup d'anomalies, puis enchaîne les spots en gérant les joueurs ennemis qui tentent de te voler."},
              {tag:'astuce', name:'Le Beluga (détecteur) aide énormément', desc:"Pas cher et facile à crafter, montre les artéfacts proches — utile aussi pour la chasse aux signaux."},
              {tag:'attention', name:'Arrête de looter n\'importe quoi', desc:"Munitions random, plaques acier et autre camelote ralentissent ton run et te forcent à revenir en base plus souvent. Ne prends que ce qui a de la valeur ou sert au craft de ta planque.", warn:true},
            ]
          },
          {
            label:'Builds artéfacts',
            recap:'Les recommandations de builds changent régulièrement avec les mises à jour — ce qui était bon hier peut être mauvais aujourd\'hui. Vise la qualité \"spéciale\" minimum, jamais commune.',
            items:[
              {tag:'cle', name:'Jamais d\'artéfacts communs', desc:"Une perte de ressources pure. Commence directement avec des artéfacts de qualité \"spéciale\" — ils se revendent bien et perdent moins de valeur à l'upgrade, contrairement aux uncommon."},
              {tag:'astuce', name:'Vise +5 au niveau du Bar, +15 seulement dans le nord', desc:"Pas besoin de pousser plus haut avant d'atteindre le nord — inutile de dépenser des ressources rares trop tôt."},
              {tag:'astuce', name:'Process d\'upgrade', desc:"Recherche l'artéfact chez le scientifique, remplis l'installation d'énergie (poussière anomalous, proto-artéfacts communs, batteries anomalous = sources les moins chères), puis choisis des catalyseurs et lance les tentatives. Chaque palier de 5 niveaux donne une propriété bonus."},
              {tag:'optionnel', name:'Calculateur de builds du wiki', desc:"Utile pour tester et adapter les builds recommandés à ta situation avant de t'engager financièrement."},
            ]
          },
          {
            label:'Fin de la trame sud',
            recap:'La quête du Radar termine la trame sud avec un combat de boss — prépare-toi avant d\'y aller. Ensuite, le choix de faction nordique est obligatoire pour accéder au nord.',
            items:[
              {tag:'cle', name:'Boss du Radar', desc:"Prends une arme à grand chargeur et détruis les lampes sur le corps du boss pendant le combat."},
              {tag:'cle', name:'Choix de faction nordique obligatoire', desc:"Impossible d'accéder au nord sans en choisir une. Trois approches : le style/l'idéologie qui te plaît, la population de la faction (stats de clans sur le site Stall Zone HQ), ou juste le visuel des armures."},
              {tag:'astuce', name:'Toutes les factions ont les mêmes 4 types d\'armure', desc:"Seules les stats varient légèrement et le visuel change — au fond, ce sont les mêmes armures avec un skin différent selon la faction."},
            ]
          }
        ]
      }
    ]
  }
  },
  tagLabels: {
  fiable:'Fiable', risque:'Risqué', chance:'Chance', lent:'Lent', rapide:'Rapide', rmt:'RMT',
  valeur:'Valeur', budget:'Budget', gamble:'Gamble', cher:'Cher',
  cle:'Clé', astuce:'Astuce', attention:'Attention', optionnel:'Optionnel'
  },
  legends: {
  argent: [
    {label:'Fiable — lent mais sûr', color:'var(--toxic)'},
    {label:'Rapide — bon ratio temps', color:'var(--teal)'},
    {label:'Risqué — PvP / danger', color:'var(--red)'},
    {label:'Chance — aléatoire', color:'var(--amber)'},
    {label:'Lent — faible rendement/h', color:'var(--grey)'},
    {label:'RMT — argent réel', color:'var(--orange)'},
  ],
  artefacts: [
    {label:'Valeur — meilleur rapport qualité/prix', color:'var(--toxic)'},
    {label:'Budget — le moins cher jouable', color:'var(--grey)'},
    {label:'Gamble — roll aléatoire', color:'var(--amber)'},
    {label:'Cher — investissement lourd', color:'var(--orange)'},
  ],
  progression: [
    {label:'Clé — règle importante', color:'var(--amber)'},
    {label:'Astuce — conseil pratique', color:'var(--teal)'},
    {label:'Attention — piège fréquent', color:'var(--red)'},
    {label:'Optionnel — si ça t\'intéresse', color:'var(--grey)'},
  ]
  },
  summaries: {
  armures: {
    title:"Résumé — vers quelle armure te tourner",
    paragraphs:[
      "Priorité n°1 : une <b>suit science</b> (Saturn, Ganymede ou Atlas selon budget) pour farmer Black Detour et Reflection sans galérer.",
      "Priorité n°2 : une <b>combo suit</b>, idéalement une speed suit de faction — vu le gameplay chaotique de Stalcraft, la vitesse vaut souvent plus que la résistance brute.",
      "Priorité n°3 : une <b>combat suit</b> — Centurion pour du PvP/clan wars, Ace Mule si tu restes en PvE.",
      "Règle d'or : si une armure est craftable via schéma et sans équivalent dans sa catégorie, fonce dessus en priorité — moins cher, pas de serum anomalous dépensé.",
      "🎬 <a href=\"https://www.youtube.com/watch?v=vYEt1Z_vWJ0\">Voir la vidéo source — Classement Armures</a>"
    ]
  },
  armes: {
    title:"Résumé — vers quelle arme te tourner",
    paragraphs:[
      "Il n'existe <b>pas d'arme objectivement meilleure</b> que les autres — chaque catégorie brille dans une situation précise.",
      "Fusil principal : QBZ Thunderbird ou A545. Pour du gros dégât : AK-15/MK-47 (mid-level) ou Ash 12 (si tu vises bien).",
      "Shotgun : Komrad/Saiga 12 en PvE, KS23/AEK965 en PvP si accessible, sinon TOZ84.",
      "Sniper : sois honnête sur ton niveau de visée — headshots fiables → McMillan/Karbach, sinon prends un DMR (MK-14, QBU, SVD-M).",
      "SMG et mitrailleuses : priorité basse, en complément une fois le kit principal établi.",
      "Piège à éviter : les armes \"noob trap\" (VSK, Derya, AK308, HK417) sont bonnes entre bonnes mains mais leur faible coût attire des joueurs pas encore prêts pour le niveau de jeu qu'elles impliquent.",
      "🎬 <a href=\"https://www.youtube.com/watch?v=afvIVzWMxtI\">Voir la vidéo source — Classement Armes</a>"
    ]
  },
  argent: {
    title:"Résumé — comment se faire de l'argent",
    paragraphs:[
      "Le créateur pose un triangle simple : <b>temps, risque, fiabilité</b> — tu n'obtiens jamais les trois à la fois pour une même méthode.",
      "Revenu le plus <b>stable</b> : flipper des Advanced Spare Parts via le season pass (40-45k/unité, environ 4-5M pour 100 ASP).",
      "Meilleur ratio pour un <b>solo pressé</b> : Lewich, malgré le risque — 100-150k pour un run de 10 minutes.",
      "Pour un revenu <b>sûr et constant</b> mais lent : Black Detour/Reflection plutôt que le Labyrinthe, désormais plus dilué.",
      "Piège à éviter : les gacha boxes et les season passes achetés avec des act tickets — l'espérance de gain ne vaut pas le coût.",
      "Leçon de marché : quand tout le monde panique-vend (ex. sortie du CheyTac Intervention), c'est souvent le bon moment pour acheter et attendre la saison suivante.",
      "🎬 <a href=\"https://www.youtube.com/watch?v=76gllfsLGO0\">Voir la vidéo source — Money Making</a>"
    ]
  },
  artefacts: {
    title:"Résumé — construire son build artéfacts",
    paragraphs:[
      "Le <b>Buryat</b> (détecteur) vaut le grind malgré la douleur — il rend toute la chasse aux artéfacts bien plus rapide et rentable.",
      "Early game : commence par un build vitesse pas cher (Candlelight, Comet, 2x Rattle, ~51k) plutôt que le strict minimum.",
      "Mid game : le Forager (ressources Limansk) est sous-coté — utilisable sur toute armure, très polyvalent pour ~2M.",
      "Late game PvP : évite le Prism si le budget est serré — un Steel Hedgehog +15 offre presque le même BR pour une fraction du prix.",
      "Toutes les stats supposent des rolls parfaits (110%/120%/130%) — les prix bougent avec le marché, vérifie stalcraftdb.net pour du temps réel.",
      "🎬 <a href=\"https://www.youtube.com/watch?v=tIbqRal7sCI\">Voir la vidéo source — Artifact Builds</a>"
    ]
  },
  progression: {
    title:"Résumé — bien débuter sans se faire piéger",
    paragraphs:[
      "La règle absolue : <b>ne jamais dépasser ton niveau de craft actuel</b> en gear acheté ou en upgrades — le matchmaking s'ajuste dessus et peut te jeter face à des vétérans.",
      "Garde précieusement tes <b>Act Tickets</b> et tes <b>Advanced Spare Parts/Tools</b> — leur valeur ne devient claire qu'en avançant, ne les gaspille pas tôt.",
      "Évite les lignes d'armes Ash 12 / VSSsk / RSH12 si tu veux éviter d'être forcé de crafter via Limansk.",
      "Pour le PvP compétitif avant d'être prêt : reste sur Arms Race / Death Match (gear imposé), évite les maps classiques.",
      "Artéfacts : uniquement qualité spéciale ou mieux, jamais commune. Vise +5 au Bar, +15 seulement dans le nord.",
      "🎬 <a href=\"https://www.youtube.com/watch?v=_QxAfl2gNTQ\">Voir la vidéo source — Guide de progression complet</a>"
    ]
  }
  }
});
