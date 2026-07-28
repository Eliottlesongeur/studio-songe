"use client";

import { useEffect, useState } from "react";
import { Section } from "@/components/Section/Section";
import { Container } from "@/components/Container/Container";
import { Heading } from "@/components/Heading/Heading";
import { Text } from "@/components/Text/Text";
import { Bullet } from "@/components/Bullet/Bullet";
import { home } from "@/content/home";
import styles from "./Vision.module.css";

/**
 * Vision — section « démarche » du studio, en accordéon d'images horizontal :
 * chaque bloc s'étale au clic (flex 7:1) et révèle son texte. Fond terracotta,
 * texte ivoire. Les parties dynamiques (flex-grow, opacité, background-size)
 * restent en inline (JSX) ; le reste vit dans le CSS Module + tokens DS.
 */
export function Vision() {
  const { id, titreLight, titreBold, description, blocs } = home.vision;
  const [activeIndex, setActiveIndex] = useState(0);
  const [animated, setAnimated] = useState<number[]>([]);

  // Entrée en cascade (slide + fade).
  useEffect(() => {
    const timers = blocs.map((_, i) =>
      setTimeout(() => setAnimated((prev) => [...prev, i]), 180 * i),
    );
    return () => timers.forEach(clearTimeout);
  }, [blocs.length]);

  const select = (index: number) => setActiveIndex(index);

  return (
    <Section id={id} spacing="lg" className={styles.section}>
      <Container>
        <div className={styles.header}>
          <Heading as="h2" variant="section" tone="inverse" align="center" className={styles.title}>
            <span className={styles.ligne}>{titreLight}</span>
            <span className={`${styles.ligne} ${styles.fort}`}>{titreBold}</span>
          </Heading>
          <Text variant="body-lg" tone="inverse" align="center" className={styles.subtitle}>
            {description}
          </Text>
        </div>
      </Container>

      <div className={styles.options}>
        {blocs.map((bloc, index) => {
          const active = activeIndex === index;
          const shown = animated.includes(index);
          return (
            <div
              key={index}
              className={`${styles.option} ${active ? styles.active : ""}`}
              style={{
                backgroundImage: bloc.image.src ? `url('${bloc.image.src}')` : undefined,
                // `cover` : la photo remplit toujours la carte, quelle que soit
                // sa forme (rail étroit inactif ↔ large actif) et son format
                // (carré, paysage…). C'est l'élargissement de la carte qui
                // révèle plus d'image — pas de bande sombre sur les côtés.
                backgroundSize: "cover",
                opacity: shown ? 1 : 0,
                transform: shown ? "translateX(0)" : "translateX(-60px)",
                flex: active ? "7 1 0%" : "1 1 0%",
                borderColor: active ? "var(--ss-palette-ivoire)" : "rgba(255,255,255,0.14)",
                zIndex: active ? 10 : 1,
              }}
              onClick={() => select(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  select(index);
                }
              }}
              role="button"
              tabIndex={0}
              aria-pressed={active}
              aria-label={bloc.tagline}
            >
              <span className={styles.shade} aria-hidden="true" />
              {/* Puce ancrée en absolu en bas de la carte : même position en état
                  rangé et sélectionné (hors flux du texte). Dot sauge + numéro
                  centré (typo titres). */}
              <span className={styles.badge} aria-hidden="true">
                <Bullet shape="dot" tone="line" size={60} />
                <span className={styles.badgeNum}>{index + 1}</span>
              </span>
              <div className={styles.label}>
                <span className={styles.info}>
                  <span
                    className={styles.eyebrow}
                    style={{
                      opacity: active ? 1 : 0,
                      transform: active ? "translateX(0)" : "translateX(25px)",
                    }}
                  >
                    {bloc.tagline}
                  </span>
                  <span
                    className={styles.main}
                    style={{
                      opacity: active ? 1 : 0,
                      transform: active ? "translateX(0)" : "translateX(25px)",
                    }}
                  >
                    {bloc.heading}
                  </span>
                  <span
                    className={styles.sub}
                    style={{
                      opacity: active ? 1 : 0,
                      transform: active ? "translateX(0)" : "translateX(25px)",
                    }}
                  >
                    {bloc.description}
                  </span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
