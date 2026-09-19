window.StashApp.register("dofus", {
  meta: {
    theme: "dofus",
    eyebrow: "📦 Stash // Personal memo",
    title: "<span>R3dn0</span>'s Notes",
    sub: "Notes, outils et récapitulatifs pour Dofus.",
    footer: "R3dn0 — Dofus notes · mis à jour au fil du temps"
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
              label: "Skinator",
              recap: "Outil de création de skins et prévisualisation d'apparences d'équipements / apparats.<br><br>🎨 <a href='https://dofusbook.net/fr/outils/skinator'>Accéder au Skinator sur DofusBook</a>",
              items: [
                {
                  tag: "tool",
                  name: "Skinator (DofusBook)",
                  desc: "Permet de prévisualiser l'ensemble des chapeaux, capes, boucliers, familiers/montiliers, costumes et d'obtenir les codes couleurs hexadécimaux pour relooker son personnage."
                }
              ]
            }
          ]
        }
      ]
    }
  },
  tagLabels: {
    tool: "Outil"
  }
});
