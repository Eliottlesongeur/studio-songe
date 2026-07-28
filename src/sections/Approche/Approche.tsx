import { Section } from "@/components/Section/Section";
import { Container } from "@/components/Container/Container";
import { Heading } from "@/components/Heading/Heading";
import { Text } from "@/components/Text/Text";
import { ContactButton } from "@/components/ContactModal/ContactButton";
import type { ComponentType } from "react";
import * as Tiles from "@/components/Icon/tiles";
import type { TileProps } from "@/components/Icon/tiles";
import { home } from "@/content/home";
import styles from "./Approche.module.css";

/**
 * Approche — section « processus » (portée de Relume Layout353).
 * Colonne gauche collante (sur-titre, titre, description, CTA) face à une
 * pile de cartes-principes qui se figent en `sticky` à des hauteurs
 * légèrement croissantes (effet d'empilement au défilement). CSS pur,
 * aucune interactivité JS → Server Component. Icônes Relume remplacées par
 * un marqueur numéroté (finitions à venir).
 */
export function Approche() {
  const { id, titreLight, titreBold, description, cta, cartes } = home.approche;

  return (
    <Section id={id} spacing="lg" className={styles.section}>
      <Container>
        <div className={styles.layout}>
          {/* Colonne gauche — collante en bureau. */}
          <div className={styles.intro}>
            <Heading as="h2" variant="section" className={styles.titre}>
              <span className={styles.ligne}>{titreLight}</span>
              <span className={`${styles.ligne} ${styles.fort}`}>{titreBold}</span>
            </Heading>
            <Text variant="body-lg" tone="muted" className={styles.description}>
              {description}
            </Text>
            {cta && (
              <div className={styles.actions}>
                <ContactButton variant="primary">{cta.label}</ContactButton>
              </div>
            )}
          </div>

          {/* Colonne droite — cartes empilées. */}
          <div className={styles.cartes}>
            {cartes.map((carte, index) => {
              const Tile = carte.icone
                ? (Tiles[carte.icone as keyof typeof Tiles] as
                    | ComponentType<TileProps>
                    | undefined)
                : undefined;
              return (
              <article
                key={carte.titre}
                className={styles.carte}
                style={{ top: `calc(var(--approche-carte-top) + ${index * 2}rem)` }}
              >
                {Tile ? (
                  <Tile size={40} className={styles.icone} />
                ) : (
                  <span className={styles.numero} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                )}
                <Heading as="h3" variant="sous-titre" className={styles.carteTitre}>
                  {carte.titre}
                </Heading>
                <Text tone="muted" className={styles.carteDesc}>
                  {carte.description}
                </Text>
              </article>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
