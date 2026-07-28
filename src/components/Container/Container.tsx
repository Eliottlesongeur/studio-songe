import { createElement } from "react";
import type { ElementType, HTMLAttributes } from "react";
import styles from "./Container.module.css";

export type ContainerSize = "default" | "narrow" | "wide";

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  /** Balise rendue. `div` par défaut. */
  as?: ElementType;
  /** Largeur max. `default` 1200 · `narrow` 760 (texte) · `wide` 1400. */
  size?: ContainerSize;
}

/**
 * Container — centre le contenu et applique les gouttières latérales.
 * Brique de base de la mise en page, utilisée dans chaque Section.
 */
export function Container({ as = "div", size = "default", className, ...rest }: ContainerProps) {
  const classes = [styles.container, styles[size], className].filter(Boolean).join(" ");
  return createElement(as, { className: classes, ...rest });
}
