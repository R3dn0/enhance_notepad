window.StashApp.register("dofus", {
  meta: {
    theme: "dofus",
    eyebrow: "📦 Stash // Personal memo",
    title: "<span>R3dn0</span>'s Notes",
    sub: "Notes, guides et récapitulatifs pour Dofus.",
    footer: "R3dn0 — Dofus notes · mis à jour au fil du temps"
  },
  tabs: [
    { id: "notes", label: "Notes" }
  ],
  data: {
    notes: {
      filters: [
        { id: "all", label: "All" }
      ],
      categories: []
    }
  }
});
