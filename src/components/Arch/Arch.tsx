import type { HTMLAttributes } from "react";
import styles from "./Arch.module.css";

export type ArchTone = "surface" | "accent-soft" | "brand";

export interface ArchProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  /** Hauteur en px. Défaut 200. */
  size?: number;
  /** Teinte de remplissage. `surface` (gris) par défaut. */
  tone?: ArchTone;
}

/** Silhouette de l'arche signature Studio Songe (arche-studiosonge.svg). */
const ARCH_PATH =
  "M13.7583 6.76053L13.7632 6.76249L13.7684 6.7651L14.21 6.96674L14.6621 7.17295C18.5385 8.94334 22.3309 10.6922 25.3539 12.3295L25.3638 12.3349L25.3653 12.3357C29.0785 14.3469 32.7619 16.3419 36.3179 18.3113L87.3189 46.7077C91.2178 48.8481 95.2582 51.0103 99.371 53.2113L99.3987 53.2261L99.3991 53.2263C120.597 64.57 143.756 76.9629 159.809 92.925C175.236 108.266 186.125 129.058 191.478 150.052C195.392 165.402 194.988 181.621 194.988 197.2L194.746 364L0.445736 363.822L0 0C3.64881 2.14692 8.72972 4.46569 13.7583 6.76053Z";

/**
 * Arch — motif d'arche de la charte (formes en dôme du logo).
 * Élément décoratif : masque d'image, gabarit de section, aplat.
 * La couleur suit `currentColor` ; `tone` pré-règle une teinte de marque.
 */
export function Arch({ size = 200, tone = "surface", className, style, ...rest }: ArchProps) {
  const classes = [styles.arch, styles[`tone-${tone}`], className].filter(Boolean).join(" ");
  return (
    <span
      className={classes}
      role="presentation"
      aria-hidden="true"
      style={{ height: size, ...style }}
      {...rest}
    >
      <svg viewBox="0 0 195 364" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d={ARCH_PATH} fill="currentColor" />
      </svg>
    </span>
  );
}
