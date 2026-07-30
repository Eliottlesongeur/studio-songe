import { site } from "@/content/site";
import { legal } from "@/content/legal";

/**
 * StructuredData — données structurées Schema.org (JSON-LD) décrivant Studio
 * Songe comme entreprise locale (`ProfessionalService`, sous-type de
 * `LocalBusiness`). Améliore le SEO local : éligibilité au *local pack*, aux
 * rich results et cohérence avec Google Business Profile. Alimenté par les
 * sources uniques `content/site.ts` + `content/legal.ts`. Rendu une fois sur
 * la home (entité principale du site).
 */
export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#studiosonge`,
    name: site.nom,
    description: site.description,
    url: site.url,
    image: `${site.url}/og-image.png`,
    logo: `${site.url}/apple-icon.png`,
    email: site.contact.email,
    telephone: legal.editeur.telephone.replace(/\s+/g, ""),
    founder: { "@type": "Person", name: legal.editeur.representant },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.adresse,
      postalCode: site.contact.codePostal,
      addressLocality: site.contact.ville,
      addressCountry: "FR",
    },
    areaServed: ["Dinard", "Saint-Malo", "Rennes", "Paris", "Côte d'Émeraude"],
    sameAs: site.reseaux.map((r) => r.href),
    knowsAbout: [
      "Architecture d'intérieur",
      "Design d'intérieur",
      "Rénovation",
      "Décoration",
      "Aménagement d'espaces",
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify échappe déjà le contenu ; données de marque maîtrisées.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
