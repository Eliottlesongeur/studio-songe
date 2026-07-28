/* =============================================================
   Studio Songe — Contenu global du site
   Source unique pour la navigation, le CTA et les coordonnées.
   Séparé des composants : les sections lisent ces données,
   elles ne les écrivent jamais en dur.
   ============================================================= */

export interface NavLink {
  /** Libellé affiché dans le menu. */
  label: string;
  /** Cible : ancre de la home (#…) ou route (/…). */
  href: string;
}

export interface SiteContact {
  email: string;
  telephone?: string;
  /** Numéro + rue. */
  adresse?: string;
  codePostal?: string;
  ville?: string;
}

export interface SiteSocial {
  label: string;
  href: string;
}

export interface Site {
  /** Nom de la marque. */
  nom: string;
  /** Baseline / description SEO par défaut. */
  description: string;
  /** URL de production (à ajuster au déploiement). Sert au sitemap / OG. */
  url: string;
  /** Entrées du menu principal (nav épurée). */
  nav: NavLink[];
  /** Appel à l'action principal du header. */
  cta: NavLink;
  contact: SiteContact;
  reseaux: SiteSocial[];
  /** Liens légaux affichés en pied de page. */
  legalLinks: NavLink[];
}

export const site: Site = {
  nom: "Studio Songe",
  description:
    "Studio Songe — architecture et design d'intérieur. Nous donnons vie à vos espaces, pensés pour vos usages.",
  url: "https://studiosonge.fr",

  nav: [
    { label: "Approche", href: "/#approche" },
    { label: "Réalisation", href: "/#realisations" },
    { label: "A Propos", href: "/#a-propos" },
  ],

  cta: { label: "Parler de mon projet", href: "/#contact" },

  contact: {
    email: "e.lesongeur@studiosonge.fr",
    adresse: "20 B rue René Kieffer",
    codePostal: "35800",
    ville: "Dinard",
  },

  reseaux: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/studio_songe",
    },
  ],

  legalLinks: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
  ],
};
