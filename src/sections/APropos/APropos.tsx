import Image from "next/image";
import { Section } from "@/components/Section/Section";
import { Container } from "@/components/Container/Container";
import { Heading } from "@/components/Heading/Heading";
import { Text } from "@/components/Text/Text";
import { home } from "@/content/home";
import styles from "./APropos.module.css";

/**
 * APropos — présentation du studio (portée de Relume Layout27).
 * Deux colonnes : à gauche titre, description et chiffres-clés ; à droite
 * une image (portrait du fondateur). Statique, aucune interactivité JS →
 * Server Component.
 */
export function APropos() {
  const { id, titreLight, titreBold, description, stats, image } = home.apropos;

  return (
    <Section id={id} spacing="lg" className={styles.section}>
      <Container>
        <div className={styles.layout}>
          {/* Colonne gauche : texte + chiffres. */}
          <div className={styles.texte}>
            <Heading as="h2" variant="section" className={styles.titre}>
              <span className={styles.ligne}>{titreLight}</span>
              <span className={`${styles.ligne} ${styles.fort}`}>{titreBold}</span>
            </Heading>
            <Text variant="body-lg" tone="muted" className={styles.description}>
              {description}
            </Text>

            <dl className={styles.stats}>
              {stats.map((stat) => (
                <div key={stat.title} className={styles.stat}>
                  <dt className={styles.statNum}>{stat.title}</dt>
                  <dd className={styles.statDesc}>
                    <Text tone="muted">{stat.description}</Text>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Colonne droite : image. */}
          <figure className={styles.media}>
            {image.src ? (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                className={styles.photo}
              />
            ) : (
              <div className={styles.placeholder} role="img" aria-label={image.alt} />
            )}
          </figure>
        </div>
      </Container>
    </Section>
  );
}
