import Image from "next/image";
import { Section } from "@/components/Section/Section";
import { Container } from "@/components/Container/Container";
import { Heading } from "@/components/Heading/Heading";
import { Text } from "@/components/Text/Text";
import { Button } from "@/components/Button/Button";
import { ContactButton } from "@/components/ContactModal/ContactButton";
import { Stack } from "@/components/Stack/Stack";
import { home } from "@/content/home";
import type { HeroImage } from "@/content/home";
import { HeroBgPath } from "./HeroBgPath";
import styles from "./Hero.module.css";

/**
 * Rend une photo optimisée (next/image, formats modernes + responsive),
 * ou un placeholder dégradé si aucune source (état de scaffold / Storybook).
 */
function Visual({
  image,
  sizes,
  priority = false,
}: {
  image: HeroImage;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <div className={styles.media}>
      {image.src ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={styles.photo}
        />
      ) : (
        <div className={styles.placeholder} role="img" aria-label={image.alt} />
      )}
    </div>
  );
}

/**
 * Hero — en-tête de la home (porté de Relume Header 141).
 * Texte centré (titre signature deux graisses, sur-titre, CTA) au-dessus
 * d'une composition de trois photos en arche, décalées. Server Component :
 * aucune interactivité JS (la parallaxe Relume est remplacée par une
 * composition statique, façon Studio Songe).
 */
export function Hero() {
  const { titreLight, titreBold, description, ctaPrimaire, ctaSecondaire, images } = home.hero;

  return (
    <Section as="header" spacing="lg" className={styles.hero}>
      {/* Décor « tracé signature » ancré aux bords de la section (left/right
          d'écran + bas de section), clippé par `.hero { overflow: hidden }`. */}
      <HeroBgPath />
      <Container>
        <div className={styles.intro}>
          <Heading as="h1" variant="hero" align="center" className={styles.titre}>
            <span className={styles.ligne}>{titreLight}</span>
            <span className={`${styles.ligne} ${styles.fort}`}>{titreBold}</span>
          </Heading>
          <Text variant="body-lg" tone="muted" align="center" className={styles.description}>
            {description}
          </Text>
          <Stack direction="row" gap="4" justify="center" wrap className={styles.actions}>
            <ContactButton variant="primary">{ctaPrimaire.label}</ContactButton>
            <Button variant="secondary" href={ctaSecondaire.href}>
              {ctaSecondaire.label}
            </Button>
          </Stack>
        </div>

        <div className={styles.gallery}>
          <figure className={`${styles.frame} ${styles.left}`}>
            <Visual image={images[0]} sizes="(max-width: 1024px) 40vw, 480px" />
          </figure>
          <figure className={`${styles.frame} ${styles.center}`}>
            {/* Image centrale = candidat LCP → priority (chargement immédiat). */}
            <Visual image={images[1]} sizes="(max-width: 1024px) 50vw, 600px" priority />
          </figure>
          <figure className={`${styles.frame} ${styles.right}`}>
            <Visual image={images[2]} sizes="(max-width: 1024px) 40vw, 480px" />
          </figure>
        </div>
      </Container>
    </Section>
  );
}
