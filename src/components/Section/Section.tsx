import { createElement } from "react";
import type { ElementType, HTMLAttributes } from "react";
import styles from "./Section.module.css";

export type SectionTone = "default" | "alt" | "muted";
export type SectionSpacing = "sm" | "md" | "lg";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** Balise rendue. `section` par défaut. */
  as?: ElementType;
  /** Fond : `default` ivoire · `alt` brun (texte inversé) · `muted` gris. */
  tone?: SectionTone;
  /** Rythme vertical. `md` par défaut. */
  spacing?: SectionSpacing;
}

/**
 * Section — bloc de page à rythme vertical constant. Gère l'espacement
 * haut/bas et un fond de marque optionnel ; enveloppe en général un
 * `Container`.
 */
export function Section({
  as = "section",
  tone = "default",
  spacing = "md",
  className,
  ...rest
}: SectionProps) {
  const classes = [
    styles.section,
    styles[`tone-${tone}`],
    styles[`spacing-${spacing}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return createElement(as, { className: classes, ...rest });
}
