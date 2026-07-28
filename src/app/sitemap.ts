import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { projets } from "@/content/projets";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  return [
    {
      url: `${base}/`,
      priority: 1,
      images: [
        `${base}/projets/hero/renovation-appartement-dinard-couloirs.jpg`,
        `${base}/projets/hero/renovation-maison-coulommiers-salon.jpg`,
        `${base}/projets/hero/renovation-maison-fontainebleau-verriere.jpg`,
      ],
    },
    { url: `${base}/projets`, priority: 0.8 },
    ...projets.map((p) => ({
      url: `${base}/projets/${p.slug}`,
      priority: 0.6,
    })),
  ];
}
