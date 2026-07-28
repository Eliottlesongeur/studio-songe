/* =============================================================
   Studio Songe — Données légales de l'éditeur
   Source unique pour /mentions-legales et /politique-de-confidentialite.
   Les valeurs entre crochets [À COMPLÉTER …] sont à renseigner AVANT la mise
   en ligne (infos fournies par Studio Songe). Le reste est déjà rempli.
   ============================================================= */

export const legal = {
  /** Éditeur du site (obligatoire — LCEN art. 6-III). */
  editeur: {
    denomination: "Studio Songe",
    statut: "Entrepreneur individuel",
    representant: "Eliott Lesongeur",
    adresse: "2ème étage droite, 20 B rue René Kieffer",
    codePostalVille: "35800 Dinard",
    email: "e.lesongeur@studiosonge.fr",
    telephone: "+33 6 87 90 36 53",
    siret: "821 657 954 00029",
    /** Vide pour un entrepreneur individuel (pas de RCS). La ligne est masquée si vide. */
    rcs: "",
    /** ⚠️ À CONFIRMER par Eliott : hypothèse franchise en base (micro). S'il facture la TVA, remplacer par son n° de TVA intracommunautaire. */
    tva: "TVA non applicable, art. 293 B du CGI",
  },

  /** Directeur de la publication (obligatoire). `href` optionnel → lien sur le nom. */
  directeurPublication: { nom: "Webdiiv", href: "https://webdiiv.com" },

  /** Hébergeur (obligatoire) — le site est déployé sur Vercel. */
  hebergeur: {
    nom: "Vercel Inc.",
    adresse: "340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis",
    site: "vercel.com",
  },

  /** Bureau d'enregistrement du nom de domaine (informatif). */
  registrar: {
    nom: "IONOS SARL",
    adresse: "7 place de la Gare, BP 70109, 57201 Sarreguemines Cedex, France",
  },

  /** Confidentialité (RGPD). */
  confidentialite: {
    /** Durée de conservation des messages du formulaire. */
    dureeConservation: "3 ans à compter du dernier contact",
    /**
     * true  = mesure d'audience SANS cookie (Vercel Web Analytics) → pas de
     *         bannière de consentement (recommandé pour un site vitrine).
     * false = Google Analytics (ou équivalent) → bannière de consentement requise.
     */
    analyticsCookieless: true,
  },

  /** Date de dernière mise à jour affichée sur les pages. */
  derniereMaj: "27 juillet 2026",
};
