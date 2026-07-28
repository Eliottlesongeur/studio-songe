import type { Metadata } from "next";
import Link from "next/link";
import { projets } from "@/content/projets";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Les lieux songés par Studio Songe : projets d'architecture et de design d'intérieur.",
};

/**
 * Liste des réalisations. Stub de scaffold : la mise en page finale
 * (grille de ProjectCard + Filters) sera portée depuis Relume.
 */
export default function ProjetsPage() {
  return (
    <main>
      <h1>Réalisations</h1>
      <ul>
        {projets.map((p) => (
          <li key={p.slug}>
            <Link href={`/projets/${p.slug}`}>
              {p.titre} — {p.lieu} ({p.annee})
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
