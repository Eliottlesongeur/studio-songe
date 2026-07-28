import { Section } from "@/components/Section/Section";
import { Heading } from "@/components/Heading/Heading";
import { Text } from "@/components/Text/Text";
import { ContactButton } from "@/components/ContactModal/ContactButton";
import { Motif } from "@/components/Motif/Motif";
import { home } from "@/content/home";
import styles from "./ContactCta.module.css";

/**
 * ContactCta — appel à l'action finale, sans fond plein. Le motif signature
 * (arche) de la charte est posé en `absolute` au centre d'une section
 * `relative` + `overflow:hidden` ; le contenu (titre + description + bouton)
 * est superposé au-dessus (`z-index`). Le SVG porte la forme, le CSS pilote
 * sa taille (`clamp`) et son placement → responsive, sans déformation.
 * Ancre `#contact` (cible du CTA de la navbar).
 */
export function ContactCta() {
  const { id, heading, description, boutons } = home.contactCta;

  return (
    <Section id={id} spacing="lg" className={styles.section}>
      {/* Motif paysage (≥ 768px) — CSS masque l'un ou l'autre selon la largeur. */}
      <Motif
        variant="signature"
        tone="line"
        className={styles.motif}
        style={{ width: "var(--ss-cta-motif-w)" }}
      />
      {/* Motif portrait/compact (< 768px, contenu verticalisé). */}
      <Motif
        variant="signature-mobile"
        tone="line"
        className={styles.motifMobile}
        style={{ width: "var(--ss-cta-motif-mobile-w)" }}
      />

      <div className={styles.content}>
        <div className={styles.texte}>
          <Heading as="h2" variant="hero" align="center" className={styles.titre}>
            {heading}
          </Heading>
          <Text variant="body-lg" tone="muted" align="center">
            {description}
          </Text>
        </div>
        {boutons.length > 0 && (
          <div className={styles.actions}>
            {boutons.map((bouton) => (
              <ContactButton key={bouton.label} variant="primary">
                {bouton.label}
              </ContactButton>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
