/* =============================================================
   Studio Songe — Réalisations (cas clients)
   Alimente la page /projets (liste) et /projets/[slug] (détail).
   ============================================================= */

export interface ProjetImage {
  /** Chemin dans /public (ex. "/projets/villa-sauge/salon.jpg"). */
  src: string;
  /** Texte alternatif — obligatoire pour l'accessibilité et le SEO. */
  alt: string;
  largeur?: number;
  hauteur?: number;
}

/** Bloc de récit d'un cas client (titre + texte + image optionnelle). */
export interface ProjetBloc {
  titre: string;
  texte: string;
  image?: ProjetImage;
}

export interface Projet {
  /** Identifiant d'URL : /projets/<slug>. */
  slug: string;
  /** Titre complet (SEO, métadonnées, fallback H1). */
  titre: string;
  /** Titre H1 en 2 parties (light + bold, comme la Hero). Optionnel :
   *  sans ça, le H1 affiche `titre` en une seule graisse (light). */
  titreLight?: string;
  titreBold?: string;
  lieu: string;
  annee: number;
  /** Surface du projet en m² (méta Aperçu). Optionnel → affiche « — m² » si absent. */
  surface?: number;
  /** Catégorie pour les filtres (ex. "Résidentiel", "Commerce"). */
  categorie: string;
  /** Accroche courte affichée sur la carte et en tête de page. */
  resume: string;
  /** Récit d'introduction (section Aperçu) : un paragraphe par entrée. */
  apercu?: string[];
  /** Texte de la section Détail (trio de photos) : un paragraphe par entrée. */
  detail?: string[];
  /** Témoignage du client (section avis). */
  temoignage?: { citation: string; auteur: string; role?: string };
  /** Visuel principal (carte + couverture de la page détail). */
  couverture: ProjetImage;
  /** Trio de la section Détail : [image principale, petite 1, petite 2]. */
  galerie?: ProjetImage[];
  /** Récit détaillé de la page cas client. */
  blocs: ProjetBloc[];
}

/* Contenu PLACEHOLDER (lorem ipsum) : sert à valider le template de la page
   cas client. Le vrai copywriting d'Eliott sera injecté ensuite. */
const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.";

export const projets: Projet[] = [
  {
    slug: "maison-1930-fontainebleau",
    titre: "Extension d'une maison 1930 - Fontainebleau",
    titreLight: "Extension d'une maison 1930",
    titreBold: "Fontainebleau",
    lieu: "Fontainebleau",
    annee: 2025,
    surface: 32, // provisoire (véranda / jardin d'hiver) — à remplacer par la vraie valeur
    categorie: "Résidentiel",
    resume: "", // sous-titre retiré pour ce projet (rendu conditionnel)
    apercu: [
      "Pour cette maison des années 1930, le Studio Songe a accompagné la création d'une véranda. L'objectif était de préserver le charme de l'existant tout en offrant un nouvel espace à vivre.",
      "Un soubassement habillé de pierres a été conçu afin d'intégrer l'ouvrage au style anglo-normand de la maison tout en faisant un clin d'œil britannique, cher aux propriétaires.",
    ],
    detail: [
      "Le souhait des propriétaires était de profiter du jardin été comme hiver. Nous avons donc aménagé un espace lumineux, végétalisé et largement ouvert sur l'extérieur.",
      "Un poêle en prolonge l'usage pendant les mois les plus frais, la véranda devient alors un jardin d'hiver.",
      "Le mobilier en osier des années 30, a été chiné spécialement pour le projet et complété par des coussins réalisés sur mesure.",
    ],
    temoignage: {
      citation:
        "Studio Songe a su préserver le charme de notre maison. L'accompagnement a toujours été à l'écoute de nos envies. Nous profitions pleinement de notre véranda qui semble avoir toujours fait partie de la maison. Le projet correspond totalement à ce que nous désirions.",
      auteur: "Sophie.M",
      role: "Propriétaire",
    },
    couverture: {
      src: "/projets/realisation-fontainebleau/realisation-renovation-maison-fontainebleau-verranda.jpg",
      alt: "Véranda vitrée en extension d'une maison des années 1930 à Fontainebleau, réalisation Studio Songe",
    },
    galerie: [
      {
        src: "/projets/realisation-fontainebleau/realisation-renovation-maison-fontainebleau-salonhiver.jpg",
        alt: "Intérieur de la véranda aménagé en jardin d'hiver, mobilier en osier des années 30, Fontainebleau par Studio Songe",
      },
      {
        src: "/projets/realisation-fontainebleau/realisation-renovation-maison-fontainebleau-exterieur.jpg",
        alt: "Vue extérieure de la véranda et du soubassement en pierres, maison de 1930 à Fontainebleau par Studio Songe",
      },
      {
        src: "/projets/realisation-fontainebleau/realisation-renovation-maison-fontainebleau-arriere.jpg",
        alt: "Façade arrière de la maison avec son extension véranda, Fontainebleau par Studio Songe",
      },
    ],
    blocs: [
      { titre: "Le besoin", texte: LOREM },
      { titre: "La réponse", texte: LOREM },
    ],
  },
  {
    slug: "maison-coulommiers",
    titre: "Rénovation d'une maison — Coulommiers",
    // TODO copy Eliott — H1 en 2 graisses (light + bold), comme Fontainebleau
    titreLight: "Rénovation d'une maison",
    titreBold: "Coulommiers",
    lieu: "Coulommiers",
    annee: 2025,
    surface: 145, // provisoire (maison rénovée) — à remplacer par la vraie valeur
    categorie: "Résidentiel",
    resume: "", // sous-titre retiré par défaut (rendu conditionnel) — à remplir si besoin
    apercu: [
      "Les propriétaires souhaitaient faire de cette maison un véritable lieu de calme et de réflexion. Ils désiraient également pouvoir recevoir leurs proches dans des espaces conviviaux, tout en préservant des lieux plus intimistes propices à la lecture, aux échanges ou au repos.",
      "Passionnés d'antiquités, ils tenaient à mettre en valeur leur mobilier et les objets qui racontent leur histoire.",
      "L'aménagement a donc été pensé comme un écrin où chaque pièce trouve naturellement sa place et participe à l'atmosphère singulière de la maison.",
    ],
    detail: [
      "Nous avons repensé l'aménagement intérieur afin de créer deux espaces de vie distincts. L'un, plus cosy et intimiste, est dédié aux soirées et moments de convivialité.",
      "L'autre, plus lumineux, invite à partager les repas et à profiter pleinement de la lumière naturelle tout au long de la journée.",
    ],
    temoignage: {
      citation:
        "Nous souhaitions une maison qui nous ressemble. Studio Songe a parfaitement compris nos attentes et a su les traduire avec sensibilité. Aujourd'hui, notre maison est harmonieuse et agréable à vivre, nous sommes ravis du résultat.",
      auteur: "Michèle.M et Alain.B",
      role: "Propriétaires",
    },
    couverture: {
      src: "/projets/realisation-coulommiers/realisation-renovation-maison-coulommiers-deco.jpg",
      alt: "Décoration et aménagement d'une maison rénovée à Coulommiers par Studio Songe",
    },
    galerie: [
      {
        src: "/projets/realisation-coulommiers/realisation-renovation-maison-coulommiers-salon.jpg",
        alt: "Salon rénové et aménagé d'une maison à Coulommiers par Studio Songe",
      },
      {
        src: "/projets/realisation-coulommiers/realisation-renovation-maison-coulommiers-entree-1.jpg",
        alt: "Entrée aménagée de la maison rénovée à Coulommiers par Studio Songe",
      },
      {
        src: "/projets/realisation-coulommiers/realisation-renovation-maison-coulommiers-entree-2.jpg",
        alt: "Détail de l'entrée de la maison rénovée à Coulommiers par Studio Songe",
      },
    ],
    blocs: [
      { titre: "Le besoin", texte: LOREM },
      { titre: "La réponse", texte: LOREM },
    ],
  },
  {
    slug: "appartement-dinard",
    titre: "Rénovation d'un appartement — Dinard",
    titreLight: "Rénovation d'un appartement",
    titreBold: "Dinard",
    lieu: "Dinard",
    annee: 2026,
    surface: 42, // provisoire (petit appartement) — à remplacer par la vraie valeur
    categorie: "Résidentiel",
    resume: "", // sous-titre retiré par défaut (rendu conditionnel)
    apercu: [
      "Ce petit appartement a été entièrement repensé pour révéler tout son potentiel. Chaque mètre carré a été optimisé afin d'offrir un intérieur fonctionnel, confortable et lumineux.",
      "Le nouvel aménagement intègre de nombreux rangements tout en préservant une circulation fluide.",
      "Chaque choix a été guidé par la volonté de faire oublier la surface au profit d'un lieu de vie harmonieux et chaleureux.",
    ],
    detail: [
      "Ce projet avait avant tout pour ambition de créer une véritable atmosphère. Le choix des couleurs structure les espaces, rythme la circulation et donne à chaque pièce une identité chaleureuse et intemporelle. Les matières, les contrastes et le soin apportés aux détails proposent un intérieur vivant propice à la détente et au séjour en bord de mer.",
    ],
    temoignage: {
      citation:
        "Studio Songe a su trouver des solutions auxquelles nous n'aurions jamais pensé. Nous avions un petit appartement dont il fallait repenser chaque espace. Aujourd'hui, il est pratique et nous nous y sentons bien.",
      auteur: "Nom du client", // TODO Eliott — nom du client Dinard (non fourni)
      role: "Propriétaires",
    },
    couverture: {
      src: "/projets/realisation-dinard/realisation-renovation-appartement-dinard-salon.jpg",
      alt: "Salon d'un appartement rénové à Dinard, en bord de mer, par Studio Songe",
    },
    galerie: [
      {
        src: "/projets/realisation-dinard/realisation-renovation-appartement-dinard-piece-de-vie.jpg",
        alt: "Pièce de vie de l'appartement rénové à Dinard par Studio Songe",
      },
      {
        src: "/projets/realisation-dinard/realisation-renovation-appartement-dinard-salle-de-bain.jpg",
        alt: "Salle de bain de l'appartement rénové à Dinard par Studio Songe",
      },
      {
        src: "/projets/realisation-dinard/realisation-renovation-appartement-dinard-salon-2.jpg",
        alt: "Coin salon de l'appartement rénové à Dinard par Studio Songe",
      },
    ],
    blocs: [
      { titre: "Le besoin", texte: LOREM },
      { titre: "La réponse", texte: LOREM },
    ],
  },
  {
    slug: "verriere",
    titre: "Réhabilitation d'une verrière",
    titreLight: "Réhabilitation d'une",
    titreBold: "verrière",
    lieu: "En cours",
    annee: 2026,
    surface: 58, // provisoire (verrière étroite réhabilitée en bureaux) — à remplacer par la vraie valeur
    categorie: "Tertiaire", // ex-"Résidentiel" — projet = transformation en bureaux (à confirmer)
    resume: "", // sous-titre retiré par défaut (rendu conditionnel)
    apercu: [
      "Très étroite et fortement endommagée, cette ancienne verrière présente un véritable défi. L'objectif est de lui offrir une seconde vie en la transformant en bureaux. Le projet s'est attaché à préserver son authenticité et à inscrire durablement cet ouvrage dans une nouvelle histoire.",
    ],
    detail: [
      "L'aménagement intérieur s'appuie sur le linéaire de la verrière pour organiser les différents espaces de travail. L'ensemble du mobilier est dessiné sur mesure afin d'optimiser la surface de travail. Le contraste entre les finitions mates et brillantes apporte profondeur et subtilité.",
      "Un lieu atypique pour un espace de travail aussi agréable qu'inspirant.",
    ],
    temoignage: {
      // Citation client conservée verbatim ; « hésitons » possiblement « hésitions » (à trancher Eliott).
      citation:
        "Nous avons été accompagnés par Studio Songe dès l'achat de cette ancienne verrière. Là où nous hésitons encore, ils ont su voir le potentiel du lieu et nous ont aidé à nous projeter.",
      auteur: "Nom du client", // TODO Eliott — nom du client Verrière (non fourni)
      role: "Propriétaires",
    },
    couverture: {
      src: "/projets/realisation-verriere/realisation-rehabilitation-verriere-bureaux.jpg",
      alt: "Ancienne verrière réhabilitée en bureaux par Studio Songe",
    },
    galerie: [
      {
        src: "/projets/realisation-verriere/realisation-rehabilitation-verriere-bureaux-2.jpg",
        alt: "Espace de travail aménagé dans l'ancienne verrière par Studio Songe",
      },
      {
        src: "/projets/realisation-verriere/realisation-rehabilitation-verriere-verriere-1.jpg",
        alt: "Mobilier sur mesure de la verrière réhabilitée en bureaux par Studio Songe",
      },
      {
        src: "/projets/realisation-verriere/realisation-rehabilitation-verriere-verriere-2.jpg",
        alt: "Détail des finitions de la verrière réhabilitée en bureaux par Studio Songe",
      },
    ],
    blocs: [
      { titre: "Le besoin", texte: LOREM },
      { titre: "La réponse", texte: LOREM },
    ],
  },
];

/** Récupère un projet par son slug. */
export function getProjet(slug: string): Projet | undefined {
  return projets.find((p) => p.slug === slug);
}
