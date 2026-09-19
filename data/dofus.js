window.StashApp.register("dofus", {
  meta: {
    theme: "dofus",
    eyebrow: "📦 Stash // Personal memo",
    title: "<span>R3dn0</span>'s Notes",
    sub: "Notes, guides et récapitulatifs pour Dofus — ordre des Dofus, astuces kamas, métagame des classes et mécaniques de donjons. Construit et enrichi au fil de mes sessions de jeu.",
    footer: "R3dn0 — Dofus notes · mis à jour au fil des aventures dans le Monde des Douze"
  },
  tabs: [
    { id: "progression", label: "Dofus & Quêtes" },
    { id: "kamas", label: "Génération Kamas" },
    { id: "classes", label: "Classes & Synergies" },
    { id: "donjons", label: "Donjons & Boss" }
  ],
  data: {
    progression: {
      filters: [
        { id: "summary", label: "Résumé" },
        { id: "early", label: "Early (1-100)" },
        { id: "mid", label: "Mid (100-180)" },
        { id: "endgame", label: "Endgame (190-200)" },
        { id: "all", label: "Tout" }
      ],
      categories: [
        {
          id: "summary",
          label: "Résumé & Ordre Prioritaire des Dofus",
          subcats: [
            {
              label: "🥚 Ordre Recommandé d'Obtention",
              recap: "Suivre l'ordre chronologique des succès et quêtes principales permet d'accumuler de l'XP, des succès et des Kamas naturels sans devoir grind inutilement.",
              items: [
                { tier: "S", name: "Dofus Argenté / Scintillant", desc: "Indispensable en leveling pour la survie et le proc de régen gratuit une fois par combat." },
                { tier: "S", name: "Dofus Cawotte & Dokoko", desc: "Le combo early game ultime (+60 Sagesse / Régen 10% PV tous les 3 tours aux tours 4, 8, 12)." },
                { tier: "A", name: "Dofus des Veilleurs & Pourpre", desc: "Veilleur apporte du soin de zone passif très fort en équipe. Le Pourpre offre jusqu'à 20% de dégâts finaux." },
                { tier: "A", name: "Dofus Émeraude & Turquoise", desc: "Émeraude est le meilleur Dofus de tanking/mêlée (PB cumulables). Le Turquoise maximise les coups critiques et boosts de dégâts." },
                { tier: "S", name: "Dofus Ocre / Ivoire / Ébène / Vulbis", desc: "Le quatuor Endgame. Ocre (+1 PA), Ivoire (-50% 1er coup + résistances), Ébène (poison/fuite) et Vulbis (+1 PM + 10% dégâts à distance)." }
              ]
            }
          ]
        },
        {
          id: "early",
          label: "Level 1 à 100 — Les Fondations",
          subcats: [
            {
              label: "Quêtes Principales & Premiers Dofus",
              recap: "Faire Incarnam à 100% puis enchaîner sur Astrub et les îles thématiques (Wabbit, Moon, Pandala début).",
              items: [
                { tier: "S", name: "Dofus Argenté (Niv. 20+)", desc: "Obtenu à la fin des quêtes d'Astrub. Indispensable pour sécuriser les combats serrés." },
                { tier: "S", name: "Dofus Cawotte (Niv. 60+)", desc: "Obtenu sur l'Île des Wabbits. +60 Sagesse, rentabilise tout le leveling ultérieur." },
                { tier: "S", name: "Dokoko (Niv. 80+)", desc: "Quêtes de Moon. Régénère 10% des PV max au tour 4, 8, 12... Sauve des combats de donjons complexes." },
                { tier: "B", name: "Dofawa & Dofus des Glaces fake", desc: "Pour les succès de quête et l'introduction au lore." }
              ]
            }
          ]
        },
        {
          id: "mid",
          label: "Level 100 à 180 — Dofus Majeurs",
          subcats: [
            {
              label: "Les Piliers du Mid-Game",
              recap: "Période clé pour faire l'Émeraude, le Pourpre, le Turquoise et le Dofus des Veilleurs.",
              items: [
                { tier: "A", name: "Dofus des Veilleurs (Niv. 100+)", desc: "Quêtes de dimension Enutrosor / Srambad / Xélorium. Soin en ligne et diagonale très puissant." },
                { tier: "S", name: "Dofus Émeraude (Niv. 100+)", desc: "Quêtes de Cania (les 3 bandits de Cania). Donne des points de bouclier à chaque tour au contact d'ennemis." },
                { tier: "S", name: "Dofus Pourpre (Niv. 110+)", desc: "Quête du Minotoror / Labyrinthe. Jusqu'à +20% de dégâts finaux quand on subit des coups à distance." },
                { tier: "A", name: "Dofus Turquoise (Niv. 160+)", desc: "Quêtes des 4 donjons majeurs avec idoles/défis. +10% Crit et bonus de puissance sur coup critique." }
              ]
            }
          ]
        },
        {
          id: "endgame",
          label: "Level 190 à 200 — Les Dofus Primordiaux & Endgame",
          subcats: [
            {
              label: "Optimisation Ultime",
              recap: "Quêtes longues demandant investissement, prérequis de quêtes et combats tactiques de haut niveau.",
              items: [
                { tier: "S", name: "Dofus Ocre", desc: "Quête de l'Éternelle Moisson (Otomaï). +1 PA permanent, indispensable pour les combos 12 PA." },
                { tier: "S", name: "Dofus Ivoire", desc: "Quête d'Alignement 100 (Bonta / Brâkmar). Réduit le premier coup subi de 50% et donne 40 résistances fixes." },
                { tier: "S", name: "Dofus Vulbis", desc: "Quêtes de Songes Infinis et donjons 200. +1 PM et +10% dégâts finaux à distance tant qu'on ne se fait pas toucher." },
                { tier: "A", name: "Dofus Ébène", desc: "Quête des 4 cavaliers de l'Eliocalypse. Poison cumulable et bonus de fuite." },
                { tier: "A", name: "Dofus Abyssal", desc: "Quêtes des Abysses de Sufokia. +1 PM à distance ou +1 PA au corps-à-corps à chaque début de tour." }
              ]
            }
          ]
        }
      ],
      legend: [
        { label: "S — Indispensable / Meta", color: "var(--dofus-gold)" },
        { label: "A — Très Puissant / Recommandé", color: "var(--dofus-emerald)" },
        { label: "B — Situationnel / Utile", color: "var(--dofus-teal)" }
      ]
    },
    kamas: {
      filters: [
        { id: "summary", label: "Résumé" },
        { id: "farming", label: "Farming & Récolte" },
        { id: "craft", label: "Craft & FM" },
        { id: "elevage", label: "Élevage & Autres" },
        { id: "all", label: "Tout" }
      ],
      categories: [
        {
          id: "summary",
          label: "Vue d'Ensemble Économique",
          subcats: [
            {
              label: "💰 Les Méthodes les Plus Rentables",
              recap: "La diversification est la clé : combiner du revenu passif (élevage), semi-passif (almanax, quêtes journalières) et actif (forgemagie, passage donjons).",
              items: [
                { tag: "kamas", name: "Forgemagie & Brisage", desc: "La méthode #1 pour faire des dizaines de millions : repérer les items sous-évalués, FM over/exo et briser pour runes PA/PM/Po/Ga Pme." },
                { tag: "opti", name: "Élevage Volkorne & Dragodindes", desc: "Excellente rente quotidienne de parchemins et de générations pures une fois le cheptel en place." },
                { tag: "quete", name: "Tour du Monde & Succès Donjons", desc: "Ressources de boss gratuites + énormes injections de Kamas bruts lors de la progression de 1 à 200." },
                { tag: "base", name: "Chasses aux Trésors", desc: "Revenu stable, sans risque, générant roses des sables, pépites, fragments de cartes et XP." }
              ]
            }
          ]
        },
        {
          id: "farming",
          label: "Farming & Métiers de Récolte",
          subcats: [
            {
              label: "Récolte & Zones Populaires",
              recap: "Les métiers de récolte demandent d'atteindre le niveau 200 pour maximiser la vitesse de fauche et les protecteurs de ressources.",
              items: [
                { tag: "metier", name: "Mineur & Bûcheron", desc: "Indispensables pour tous les crafts d'alliages et de trophées. Les filons d'obsidienne et d'or sont très disputés." },
                { tag: "metier", name: "Alchimiste & Paysan", desc: "Consommables (pain, potions de téléportation, potions de rappel, popos de soin) qui tournent en continu à l'Hôtel des Ventes." },
                { tag: "farming", name: "Chasses Légendaires & Trésors", desc: "Farming de Roses des Sables indispensables pour la quête du Pourpre et le craft du Dofus Tournesol Sauvage." }
              ]
            }
          ]
        },
        {
          id: "craft",
          label: "Craft, Brisage & Forgemagie",
          subcats: [
            {
              label: "L'Artisanat Rentable",
              recap: "Ne jamais vendre de ressources brutes sans vérifier le prix des équipements craftables correspondants.",
              items: [
                { tag: "kamas", name: "Brisage à coefficient élevé", desc: "Craftez des items peu populaires mais contenant des runes chères (Ga PA, Ga Pme, Ra Fo, etc.) pour exploiter les coefficients cachés du concasseur." },
                { tag: "opti", name: "Over Vitalité & Exo Résistances", desc: "Même sur les items bas/moyen niveau, un simple over Vita de 100-150 PV fait doubler le prix de vente." },
                { tag: "kamas", name: "Exo PA / PM (Endgame)", desc: "Investissement à gros capital avec retour sur investissement massif (taux moyen de passage 1/100)." }
              ]
            }
          ]
        },
        {
          id: "elevage",
          label: "Élevage & Routines Quotidiennes",
          subcats: [
            {
              label: "Revenus Passifs",
              recap: "Idéal à faire en début ou fin de session de jeu.",
              items: [
                { tag: "opti", name: "Élevage en Enclos Publics / Privés", desc: "Focalisez-vous sur les pures pour parchemins de caractéristiques ou sur les générations d'accouplement pour les succès." },
                { tag: "quete", name: "Almanax Quotidien", desc: "Faire l'offrande sur tous ses personnages chaque jour (Kamas bruts, XP, almatons et Dofus Dolmanax après 365 jours)." },
                { tag: "quete", name: "Quêtes Avis de Recherche", desc: "Gros pactole de doplons et kamas bruts pour chaque avis de recherche capturé." }
              ]
            }
          ]
        }
      ],
      legend: [
        { label: "Kamas — Très Rentable", color: "var(--dofus-gold)" },
        { label: "Opti — Optimisation & Rente", color: "var(--dofus-emerald)" },
        { label: "Quête — Récompenses de Quête", color: "var(--dofus-teal)" },
        { label: "Métier — Récolte & Craft", color: "var(--dofus-purple)" }
      ]
    },
    classes: {
      filters: [
        { id: "summary", label: "Résumé" },
        { id: "solo", label: "Solo PvM" },
        { id: "team", label: "Synergies Team" },
        { id: "all", label: "Tout" }
      ],
      categories: [
        {
          id: "summary",
          label: "Tier List des Classes PvM",
          subcats: [
            {
              label: "⚔️ Rôles & Efficacité Globale",
              recap: "Chaque classe possède son domaine de prédilection, mais certaines brillent par leur polyvalence en solo et leur utilité en donjons endgame.",
              items: [
                { tier: "S", name: "Pandawa", desc: "Le roi absolu du PvM. Placement inégalé, portage de mobs/alliés, tanking indestructible et vulné." },
                { tier: "S", name: "Cra", desc: "Le choix solo #1 : énorme portée, repousse, dégâts de zone massifs et farming rapide sans risque." },
                { tier: "S", name: "Elotrop", desc: "Multiplicateur de dégâts colossal grâce aux portails. Rends les boss endgame beaucoup plus simples avec une team adaptée." },
                { tier: "A", name: "Feca", desc: "Réductions de dégâts, glyphes de pesanteur/entrave, invulnérabilités et très bon rox mêlée/mi-distance." },
                { tier: "A", name: "Iop", desc: "Dégâts burst monocible et zone de référence (Colère de Iop, Épée du Destin). Parfait avec Panda/Elio." },
                { tier: "A", name: "Eniripsa", desc: "Soin, boost PA/Puissance, débuff et survie d'équipe." }
              ]
            }
          ]
        },
        {
          id: "solo",
          label: "Meilleures Classes pour Jouer Solo",
          subcats: [
            {
              label: "Autonomie & Vitesse de Farm",
              recap: "Classes disposant de portée, d'auto-soin, de mobilité ou de capacités de kiting.",
              items: [
                { tier: "S", name: "Cra (Feu / Multi Do Crit)", desc: "Facilité absolue pour clean les quêtes, combats de zone et leveling rapide." },
                { tier: "A", name: "Huppermage (Multi / Éléments variés)", desc: "Couteau suisse : vol de vie, mobilité, bouclier, vulné, entrave." },
                { tier: "A", name: "Sadida (Terre / Eau / Ret PM)", desc: "Contrôle total de la map avec les poupées, poison et ralentissement PM imparable pour l'IA." },
                { tier: "A", name: "Forgelance (Feu / Eau / Terre)", desc: "Très gros dégâts de zone à mi-distance et excellente mobilité." }
              ]
            }
          ]
        },
        {
          id: "team",
          label: "Compositions & Synergies Classiques",
          subcats: [
            {
              label: "Compositions de 4 Personnages",
              recap: "La composition classique de 4 permet de passer l'intégralité des succès donjons du jeu.",
              items: [
                { tier: "S", name: "Panda + Elio + Iop + Eniripsa", desc: "Le quatuor classique : Placement, Portails pour boost x2-x3 les dégâts du Iop, Soin/PA Eni." },
                { tier: "S", name: "Panda + Feca + Cra + Enu", desc: "La team distance / contrôle : Panda place et tank, Feca protège/ralentit, Enu ret PM à 15 PO, Cra tue tout au loin." },
                { tier: "A", name: "Panda + Roublard + Feca + Enu", desc: "Team mur de bombes : OS n'importe quel boss en un tour dans les bombes du Roublard." }
              ]
            }
          ]
        }
      ],
      legend: [
        { label: "S — Tier Divin", color: "var(--dofus-gold)" },
        { label: "A — Excellent", color: "var(--dofus-emerald)" },
        { label: "B — Bon / Situationnel", color: "var(--dofus-teal)" }
      ]
    },
    donjons: {
      filters: [
        { id: "summary", label: "Résumé" },
        { id: "mecaniques", label: "Mécaniques Clés" },
        { id: "songes", label: "Songes Infinis" },
        { id: "all", label: "Tout" }
      ],
      categories: [
        {
          id: "summary",
          label: "Guide & Récapitulatif Donjons",
          subcats: [
            {
              label: "🏰 Stratégies Essentielles",
              recap: "Dans Dofus à haut niveau, les boss possèdent des états d'invulnérabilité ou des mécaniques de one-shot qui demandent une exécution rigoureuse.",
              items: [
                { tier: "S", name: "Gestion des États Pesanteur & Indéplaçable", desc: "Crucial pour neutraliser les monstres à forte mobilité ou empêcher le boss de fuir." },
                { tier: "A", name: "Gestion des Lignes de Vue & Portée", desc: "Exploiter l'IA des monstres : beaucoup refusent d'avancer si aucune cible n'est en ligne de vue." },
                { tier: "A", name: "Délivrance & Débuff", desc: "Toujours avoir au moins une source de débuff d'envoûtements dans le groupe." }
              ]
            }
          ]
        },
        {
          id: "mecaniques",
          label: "Boss 200 Notables & Délock",
          subcats: [
            {
              label: "Déverrouillage des Boss Mythiques",
              recap: "Mécaniques pour retirer l'état Invulnérable.",
              items: [
                { tier: "S", name: "Comte Harebourg", desc: "Confusion horaire (Pi/2, Pi, etc.) : adapter le sens de lancement des sorts selon les heures et placer les monstres dans les glyphes." },
                { tier: "S", name: "Reine des Voleurs", desc: "Gestion des bombes de la Reine : les faire exploser sans détruire sa propre équipe." },
                { tier: "A", name: "Vortex", desc: "Gestion des vagues et des glyphes temporels pour éviter le submergement." },
                { tier: "A", name: "Tal Kasha", desc: "Gestion des pyramides et résurrections de monstres." }
              ]
            }
          ]
        },
        {
          id: "songes",
          label: "Songes Infinis (Infinite Dreams)",
          subcats: [
            {
              label: "Optimisation des Étages de Songes",
              recap: "Mode de jeu infini générant des reflets oniriques, runes astral et Dofus Vulbis.",
              items: [
                { tier: "S", name: "Panda Tank & Feca", desc: "Le socle obligatoire pour bloquer les monstres au cac dans les étages 200 à 400+." },
                { tier: "A", name: "Choix des Cauchemars & Rêves", desc: "Éviter impérativement les boss à érosion massive ou sorts de désenvoûtement complet." },
                { tier: "A", name: "Achat de Bienfaits & Gravures", desc: "Prioriser les % Dommages Finaux, Résistances % et PA/PM additionnels." }
              ]
            }
          ]
        }
      ],
      legend: [
        { label: "S — Incontournable", color: "var(--dofus-gold)" },
        { label: "A — Important", color: "var(--dofus-emerald)" }
      ]
    }
  },
  tagLabels: {
    dofus: "Dofus", quete: "Quête", kamas: "Kamas",
    donjon: "Donjon", metier: "Métier", succes: "Succès",
    opti: "Opti", base: "Base", farming: "Farming"
  }
});
