window.StashApp.register('dofus', {
  meta: {
    theme: 'dofus',
    eyebrow: "📦 Stash // Personal memo",
    title: "<span>R3dn0</span>'s Notes",
    sub: "Notes, outils et récapitulatifs pour Dofus.",
    footer: "R3dn0 — Dofus notes · mis à jour au fil des aventures dans le Monde des Douze"
  },
  tabs: [
    { id: 'tools', label: 'Tools' }
  ],
  data: {
    tools: {
      filters: [
        { id: 'all', label: 'All' },
        { id: 'tools', label: 'Tools' }
      ],
      categories: [
        {
          id: 'tools',
          label: 'Tools',
          subcats: [
            {
              label: '🛠️ Outils & Utilitaires',
              recap: 'Section en préparation. Les prochains outils et notes pour Dofus apparaîtront ici.',
              items: []
            }
          ]
        }
      ]
    }
  }
});
