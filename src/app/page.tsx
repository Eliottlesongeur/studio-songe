import { Hero } from "@/sections/Hero/Hero";
import { Vision } from "@/sections/Vision/Vision";
import { Approche } from "@/sections/Approche/Approche";
import { Realisations } from "@/sections/Realisations/Realisations";
import { APropos } from "@/sections/APropos/APropos";
import { Faq } from "@/sections/Faq/Faq";
import type { Metadata } from "next";
import { ContactCta } from "@/sections/ContactCta/ContactCta";
import { StructuredData } from "./StructuredData";

/** Canonical de la home (résolu contre `metadataBase` = https://studiosonge.fr). */
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/**
 * Home (one-page). Les sections sont ajoutées ici au fur et à mesure
 * de leur portage depuis Relume.
 */
export default function Home() {
  return (
    <main>
      {/* Données structurées Schema.org (SEO local) — voir StructuredData.tsx. */}
      <StructuredData />
      {/* Le décor « tracé signature » vit désormais DANS la section Hero
          (ancré à ses bords, clippé par son overflow) — voir Hero.tsx. */}
      <Hero />
      <Vision />
      <Approche />
      <Realisations />
      <APropos />
      <Faq />
      <ContactCta />
      {/* Footer — à venir */}
    </main>
  );
}
