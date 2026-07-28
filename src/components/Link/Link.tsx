import { forwardRef } from "react";
import type { AnchorHTMLAttributes } from "react";
import { Bullet } from "../Bullet/Bullet";
import styles from "./Link.module.css";

export type LinkVariant = "inline" | "nav" | "quiet" | "standalone";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * `inline` (dans un paragraphe, souligné) · `nav` (capitales, navigation) ·
   * `quiet` (listes / pied de page) · `standalone` (lien-action fléché).
   */
  variant?: LinkVariant;
  /** Ouvre dans un nouvel onglet + ajoute rel de sécurité et une icône ↗. */
  external?: boolean;
  /** Adapte les couleurs aux sections sur fond foncé. */
  onDark?: boolean;
}

/** Flèche « → » du lien standalone (glisse au survol). */
const ArrowGlyph = () => (
  <svg
    className={styles.arrow}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    aria-hidden="true"
  >
    <path d="M5 12h13M12 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Icône « ↗ » signalant un lien externe. */
const ExternalGlyph = () => (
  <svg
    className={styles.external}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    aria-hidden="true"
  >
    <path d="M8 6h10v10M18 6L7 17" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * Link — lien Studio Songe (sobre, premium).
 * `inline` souligné fin (terracotta au survol) ; `nav` capitales Work Sans
 * (brun atténué → brun plein) ; `quiet` pour listes/footer ; `standalone`
 * lien-action avec flèche. `external` + `onDark` transverses.
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { variant = "inline", external = false, onDark = false, className, children, ...rest },
  ref,
) {
  const classes = [styles.link, styles[variant], onDark && styles.onDark, className]
    .filter(Boolean)
    .join(" ");

  const externalAttrs = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a ref={ref} className={classes} {...externalAttrs} {...rest}>
      {variant === "nav" && (
        <Bullet shape="arch" tone="accent" className={styles.navBullet} />
      )}
      {children}
      {variant === "standalone" && <ArrowGlyph />}
      {external && <ExternalGlyph />}
    </a>
  );
});
