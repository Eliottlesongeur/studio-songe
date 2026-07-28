import { createElement } from "react";
import type { CSSProperties, ElementType, HTMLAttributes } from "react";
import styles from "./Stack.module.css";

/** Espacement entre enfants — pas de l'échelle `--ss-space-*`. */
export type StackGap = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
export type StackDirection = "row" | "column";
export type StackAlign = "start" | "center" | "end" | "stretch";
export type StackJustify = "start" | "center" | "end" | "between" | "around";

export interface StackProps extends HTMLAttributes<HTMLElement> {
  /** Balise rendue. `div` par défaut. */
  as?: ElementType;
  /** Direction du flux. `column` par défaut (empilement vertical). */
  direction?: StackDirection;
  /** Espacement entre enfants (échelle `--ss-space-*`). Défaut `4` = 16px. */
  gap?: StackGap;
  /** Alignement transversal (align-items). */
  align?: StackAlign;
  /** Répartition dans l'axe principal (justify-content). */
  justify?: StackJustify;
  /** Autorise le retour à la ligne (utile en `row` → cluster). */
  wrap?: boolean;
}

/**
 * Stack — primitive de micro-layout. Empile (colonne) ou aligne (rangée)
 * des éléments avec un `gap` piloté par les tokens d'espacement.
 * Remplace les `style={{ display: 'flex', gap: … }}` écrits à la main.
 */
export function Stack({
  as = "div",
  direction = "column",
  gap = "4",
  align,
  justify,
  wrap = false,
  className,
  style,
  ...rest
}: StackProps) {
  const classes = [
    styles.stack,
    styles[direction],
    align && styles[`align-${align}`],
    justify && styles[`justify-${justify}`],
    wrap && styles.wrap,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const stackStyle = {
    "--stack-gap": `var(--ss-space-${gap})`,
    ...style,
  } as CSSProperties;

  return createElement(as, { className: classes, style: stackStyle, ...rest });
}
