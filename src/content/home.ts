/* =============================================================
   Studio Songe — Contenu de la page d'accueil (home one-page)
   ============================================================= */

import type { NavLink } from "./site";

export interface HeroImage {
  /** Chemin dans /public. Vide → placeholder dégradé. */
  src: string;
  /** Texte alternatif (a11y + SEO). */
  alt: string;
}

export interface Hero {
  /** Sur-titre (petites capitales terracotta). */
  surtitre: string;
  /** Titre — 1re ligne, graisse light. */
  titreLight: string;
  /** Titre — 2e ligne, graisse bold. */
  titreBold: string;
  description: string;
  ctaPrimaire: NavLink;
  ctaSecondaire: NavLink;
  /** Trois visuels de la composition décalée : gauche, centre, droite. */
  images: [HeroImage, HeroImage, HeroImage];
}

/** Un temps de la démarche du studio (bloc scroll-driven de la section Vision). */
export interface VisionBloc {
  /** Sur-titre du bloc (petites capitales terracotta). */
  tagline: string;
  heading: string;
  description: string;
  /** Lien optionnel en pied de bloc. */
  lien?: NavLink;
  /** Visuel associé (affiché au centre au défilement). Src vide → placeholder. */
  image: HeroImage;
}

/** Section « Vision » — image centrale qui change au fil des blocs (scroll). */
export interface Vision {
  /** Ancre de section (#studio). */
  id: string;
  surtitre: string;
  /** Titre — 1re ligne, graisse light (même format que le H1 du Hero). */
  titreLight: string;
  /** Titre — 2e ligne, graisse bold. */
  titreBold: string;
  description: string;
  blocs: VisionBloc[];
}

/** Une carte-principe de la section Approche (cartes empilées en sticky). */
export interface ApprocheCarte {
  titre: string;
  description: string;
  /** Icône-tuile (clé de `components/Icon/tiles`) affichée à la place du numéro. */
  icone?: string;
}

/** Section « Approche / Processus » — colonne collante + cartes empilées. */
export interface Approche {
  /** Ancre de section (#approche). */
  id: string;
  surtitre: string;
  /** Titre — 1re ligne, graisse light. */
  titreLight: string;
  /** Titre — 2e ligne, graisse bold. */
  titreBold: string;
  description: string;
  /** CTA optionnel sous le texte. */
  cta?: NavLink;
  cartes: ApprocheCarte[];
}

/** Une réalisation mise en avant (panneau texte + image de la section). */
export interface Realisation {
  /** Sur-titre du panneau (type de projet / lieu). */
  tagline: string;
  heading: string;
  /** Lien vers le cas-client. */
  lien: NavLink;
  image: HeroImage;
}

/** Section « Réalisations » — panneaux empilés en sticky, texte/image alternés. */
export interface Realisations {
  /** Ancre de section (#realisations). */
  id: string;
  surtitre: string;
  /** Première ligne du titre (poids normal). */
  titreLight: string;
  /** Deuxième ligne du titre (en gras). */
  titreBold: string;
  description: string;
  items: Realisation[];
}

/** Un chiffre-clé de la section « À propos » (grand nombre + libellé). */
export interface AProposStat {
  /** Chiffre mis en avant (ex. « 10 ans », « 50+ »). */
  title: string;
  description: string;
}

/** Section « À propos » — texte + chiffres-clés à gauche, image à droite (Relume Layout27). */
export interface APropos {
  /** Ancre de section (#a-propos). */
  id: string;
  surtitre: string;
  /** Première ligne du titre (poids normal). */
  titreLight: string;
  /** Suite du titre (en gras). */
  titreBold: string;
  description: string;
  stats: AProposStat[];
  image: HeroImage;
}

/** Une entrée d'accordéon FAQ. */
export interface FaqQuestion {
  question: string;
  reponse: string;
}

/** Section « FAQ » — accordéon de questions + bloc de contact en pied. */
export interface Faq {
  /** Ancre de section (#faq). */
  id: string;
  surtitre: string;
  heading: string;
  description: string;
  questions: FaqQuestion[];
  /** Pied : relance vers le contact. */
  cta: NavLink;
}

/** Section « Contact » — bannière image + voile sombre, titre et CTA centrés. */
export interface ContactCta {
  /** Ancre de section (#contact). */
  id: string;
  heading: string;
  description: string;
  /** Boutons (le 1er = primaire, les suivants = secondaires). */
  boutons: NavLink[];
  image: HeroImage;
}

export const home: {
  hero: Hero;
  vision: Vision;
  approche: Approche;
  realisations: Realisations;
  apropos: APropos;
  faq: Faq;
  contactCta: ContactCta;
} = {
  hero: {
    surtitre: "Studio Songe · Architecture d'intérieur",
    titreLight: "Des espaces intérieurs",
    titreBold: "songés pour vous",
    description:
      "Basé à Dinard et Paris, Studio Songe accompagne particuliers et professionnels sur la Côte d'Émeraude, Saint-Malo, Rennes, Paris et leurs environs.",
    ctaPrimaire: { label: "Parler de mon projet", href: "/#contact" },
    ctaSecondaire: { label: "Voir nos réalisations", href: "/#realisations" },
    images: [
      {
        src: "/projets/hero/renovation-appartement-dinard-couloirs.jpg",
        alt: "Cuisine ouverte sur mur bleu nuit avec îlot en bois et crédence en zellige, rénovation d'appartement à Dinard par Studio Songe",
      },
      {
        src: "/projets/hero/renovation-maison-coulommiers-salon.jpg",
        alt: "Salon chaleureux aux poutres en bois et grandes fenêtres, rénovation de maison à Coulommiers par Studio Songe",
      },
      {
        src: "/projets/hero/renovation-maison-fontainebleau-rideaux.jpg",
        alt: "Rideaux en lin clair habillant les fenêtres d'un salon, rénovation de maison à Fontainebleau par Studio Songe",
      },
    ],
  },

  vision: {
    id: "studio",
    surtitre: "Studio Songe · Notre démarche",
    titreLight: "Un projet intérieur",
    titreBold: "demande plus qu'une belle idée",
    description:
      "Concevoir un intérieur, c'est trouver le juste équilibre entre esthétique et fonctionnalité, et créer une valeur qui s'inscrit dans le temps.",
    blocs: [
      {
        tagline: "Usage",
        heading: "Le projet s'adapte à vos besoins et à votre mode de vie.",
        description:
          "Recevoir, travailler, se reposer, partager, chaque espace est conçu pour s'adapter à votre quotidien.",
        image: {
          src: "/projets/hero/renovation-maison-fontainebleau-salonext.jpg",
          alt: "Salon lumineux prolongé d'une extension vitrée, rénovation de maison à Fontainebleau par Studio Songe",
        },
      },
      {
        tagline: "Contraintes",
        heading: "Les contraintes nourrissent la créativité.",
        description:
          "Un projet réussi ne contourne pas les contraintes, il les intègre pour construire une réponse cohérente.",
        image: {
          src: "/projets/hero/renovation-appartement-dinard-sdb.jpg",
          alt: "Salle de bains optimisée aux tons clairs, rénovation d'appartement à Dinard par Studio Songe",
        },
      },
      {
        tagline: "Finitions",
        heading: "Les finitions donnent du caractère à l'espace.",
        description:
          "Matériaux, couleurs, éclairages, décoration, détails… Chaque élément est choisi pour créer un lieu personnel.",
        image: {
          src: "/projets/hero/renovation-maison-fontainebleau-verriere.jpg",
          alt: "Jardin d'hiver en rotin avec poêle à bois sous une verrière en acier, rénovation de maison à Fontainebleau par Studio Songe",
        },
      },
      {
        tagline: "Technique",
        heading: "Entre faisabilité et exigences.",
        description:
          "Un réseau de professionnels sélectionnés selon les besoins de chaque projet ; artisans, bureaux d'études, économistes, garantissant une mise en œuvre optimisée et maîtrisée.",
        lien: { label: "Parler de mon projet", href: "/#contact" },
        image: {
          src: "/projets/hero/renovation-maison-coulommiers-rideaux.jpg",
          alt: "Rideaux en lin clair habillant de larges fenêtres dans un séjour lumineux, rénovation de maison à Coulommiers par Studio Songe",
        },
      },
    ],
  },

  approche: {
    id: "approche",
    surtitre: "Studio Songe · Processus",
    titreLight: "Une approche sensible,",
    titreBold: "structurée et exigeante",
    description:
      "Chaque projet avance par étapes, de la première intention jusqu'à la réalisation, Studio Songe vous accompagne pour concrétiser vos envies.",
    cta: { label: "Parler de mon projet", href: "/#contact" },
    cartes: [
      {
        titre: "Conception",
        icone: "Pencil",
        description:
          "Nous définissons les bases du projet à partir de vos besoins et de vos souhaits.\nÉtude de concept, intentions d'aménagement, modélisation 3D et création d'agencements sur mesure.",
      },
      {
        titre: "Développement du projet",
        icone: "Home",
        description:
          "Nous transformons les idées en projet concret et exploitable par tous les partenaires.\nPlans détaillés, rendus 3D réalistes pour vous projeter précisément dans votre futur espace.",
      },
      {
        titre: "Accompagnement pendant les travaux",
        icone: "Users",
        description:
          "Nous vous accompagnons dans la phase de réalisation. Analyse des devis, sélection des artisans et visites de chantier régulières pour vérifier la cohérence esthétique avec le projet validé.",
      },
    ],
  },

  realisations: {
    id: "realisations",
    surtitre: "Studio Songe · Réalisations",
    titreLight: "Des intérieurs",
    titreBold: "conçus sur mesure",
    description: "Voici une sélection de nos réalisations.",
    items: [
      {
        tagline: "2025",
        heading: "Extension d'une maison 1930 - Fontainebleau",
        lien: { label: "Découvrir le projet", href: "/projets/maison-1930-fontainebleau" },
        image: {
          src: "/projets/hero/renovation-maison-fontainebleau-extarriere.jpg",
          alt: "Façade arrière et extension d'une maison de 1930 rénovée à Fontainebleau par Studio Songe",
        },
      },
      {
        tagline: "2025",
        heading: "Rénovation d'une maison - Coulommiers",
        lien: { label: "Découvrir le projet", href: "/projets/maison-coulommiers" },
        image: {
          src: "/projets/realisation-coulommiers/realisation-renovation-maison-coulommiers-deco.jpg",
          alt: "Décoration et aménagement d'une maison rénovée à Coulommiers par Studio Songe",
        },
      },
      {
        tagline: "2026",
        heading: "Rénovation d'un appartement - Dinard",
        lien: { label: "Découvrir le projet", href: "/projets/appartement-dinard" },
        image: {
          src: "/projets/hero/renovation-appartement-dinard-table.jpg",
          alt: "Espace repas et table dans un appartement rénové à Dinard par Studio Songe",
        },
      },
      {
        tagline: "2026",
        heading: "Réhabilitation d'une verrière - En cours",
        lien: { label: "Découvrir le projet", href: "/projets/verriere" },
        image: {
          src: "/projets/hero/amenagement-bureaux.png",
          alt: "Aménagement d'espaces de bureaux par Studio Songe",
        },
      },
    ],
  },

  apropos: {
    id: "a-propos",
    surtitre: "Studio Songe · À propos",
    titreLight: "À l'origine de Studio Songe,",
    titreBold: "une conviction",
    description:
      "Que chaque projet mérite une réflexion singulière, bien au-delà des tendances. Fort de plusieurs années d'expérience au sein d'agences reconnues, Eliott Lesongeur fonde Studio Songe pour proposer une approche basée sur l'écoute, l'exigence et l'envie de concrétiser vos projets les plus personnels.",
    stats: [
      {
        title: "+10",
        description: "ans d'expérience",
      },
      {
        title: "+70",
        description: "projets menés à bien",
      },
    ],
    image: {
      src: "/projets/hero/photo-eliott-lesongeur.jpg",
      alt: "Portrait d'Eliott Lesongeur, fondateur et architecte d'intérieur de Studio Songe",
    },
  },

  faq: {
    id: "faq",
    surtitre: "Studio Songe · FAQ",
    heading: "Questions fréquentes",
    description:
      "Tout ce qu'il faut savoir avant de démarrer un projet avec Studio Songe. Une autre question ? Écrivez-nous.",
    questions: [
      {
        question: "Comment se déroule un projet ?",
        reponse:
          "Chaque projet débute par un échange pour comprendre vos besoins, suivi d'une visite sur site. Nous réalisons ensuite des propositions d'aménagement, des plans pour vous ainsi que pour les différents intervenants, des visuels 3D, jusqu'à la validation du projet final et sa réalisation.",
      },
      {
        question: "Quel prix pour un architecte ?",
        reponse:
          "Le coût dépend de la nature du projet, de sa complexité et du niveau d'accompagnement souhaité.\nLes honoraires sont établis sur mesure (au forfait ou au pourcentage selon les cas) après un premier échange et une visite sur site.\nUn devis clair est systématiquement proposé avant tout engagement.",
      },
      {
        question: "Travaillez-vous avec tous les budgets ?",
        reponse:
          "Oui, selon la faisabilité. L'objectif est d'adapter le projet à votre enveloppe budgétaire tout en garantissant un résultat cohérent, fonctionnel et esthétique.",
      },
      {
        question: "Quel prix pour une rénovation ?",
        reponse:
          "Le budget global dépend principalement de l'ampleur des travaux, des matériaux choisis et des prestations réalisées. Dès les premières étapes du projet, nous vous aidons à définir une enveloppe budgétaire cohérente et à faire les choix les plus adaptés pour la respecter.",
      },
      {
        question: "Intervenez-vous pour des petites surfaces ?",
        reponse:
          "Oui, chaque espace peut être optimisé, quelle que soit sa taille : restaurants avec plus ou moins de couverts, boutique, appartement, maison ou pièce unique.",
      },
      {
        question: "Combien de temps dure un projet ?",
        reponse:
          "La durée varie selon l'ampleur des travaux et la diversité des pièces. En moyenne, une phase de conception prend quelques semaines, puis le chantier dépend des entreprises et de la complexité du projet.",
      },
    ],
    cta: { label: "Vous avez d'autres questions ?", href: "/#contact" },
  },

  contactCta: {
    id: "contact",
    heading: "Parlons de votre espace",
    description:
      "Vous avez un projet, une envie, une contrainte. Studio Songe écoute et construit avec vous.",
    boutons: [
      { label: "Parler de mon projet", href: "mailto:e.lesongeur@studiosonge.fr" },
    ],
    image: {
      src: "",
      alt: "Intérieur chaleureux signé Studio Songe, invitation à démarrer un projet d'architecture d'intérieur",
    },
  },
};
