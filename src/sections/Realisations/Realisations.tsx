import Image from "next/image";
import { Section } from "@/components/Section/Section";
import { Container } from "@/components/Container/Container";
import { Heading } from "@/components/Heading/Heading";
import { Text } from "@/components/Text/Text";
import { Button } from "@/components/Button/Button";
import { home } from "@/content/home";
import type { HeroImage } from "@/content/home";
import styles from "./Realisations.module.css";

/** Flèche fine « → » du CTA-lien (même tracé que le bouton « Avec flèche »). */
const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M4 12h15M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Photo optimisée (next/image fill) ou placeholder dégradé si src vide. */
function Visual({ image, sizes }: { image: HeroImage; sizes: string }) {
  return image.src ? (
    <Image src={image.src} alt={image.alt} fill sizes={sizes} className={styles.photo} />
  ) : (
    <div className={styles.placeholder} role="img" aria-label={image.alt} />
  );
}

/**
 * Realisations — panneaux de projets empilés (porté de Relume Layout408).
 * Chaque panneau se fige en `sticky` et le suivant vient le recouvrir
 * (effet de pile au défilement) ; texte et image alternent de côté.
 * Le rétrécissement au scroll (scale) de Relume — qui dépendait de
 * framer-motion — est laissé aux finitions. CSS pur → Server Component.
 */
export function Realisations() {
  const { id, titreLight, titreBold, description, items } = home.realisations;

  return (
    <Section id={id} spacing="lg" className={styles.section}>
      <Container>
        <div className={styles.intro}>
          <Heading as="h2" variant="section" align="center" className={styles.titre}>
            <span className={styles.ligne}>{titreLight}</span>
            <span className={`${styles.ligne} ${styles.fort}`}>{titreBold}</span>
          </Heading>
          <Text variant="body-lg" tone="muted" align="center" className={styles.description}>
            {description}
          </Text>
        </div>

        <div className={styles.stack}>
          {items.map((item, index) => (
            <article
              key={item.heading}
              className={`${styles.panneau} ${index % 2 === 0 ? "" : styles.reverse}`}
            >
              <div className={styles.texte}>
                <Text variant="label" tone="accent" className={styles.panneauTag}>
                  {item.tagline}
                </Text>
                <Heading as="h3" variant="sous-titre" className={styles.panneauTitre}>
                  {item.heading}
                </Heading>
                <div className={styles.actions}>
                  <Button
                    variant="ghost"
                    href={item.lien.href}
                    trailingIcon={<ArrowRight />}
                    className={styles.cta}
                  >
                    {item.lien.label}
                  </Button>
                </div>
              </div>
              <figure className={styles.media}>
                <Visual image={item.image} sizes="(max-width: 767px) 100vw, 50vw" />
              </figure>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
