import { createElement } from "react";
import type { CSSProperties, ElementType, HTMLAttributes } from "react";
import styles from "./Grid.module.css";

export interface GridProps extends HTMLAttributes<HTMLElement> {
  /** Balise rendue. `div` par défaut. */
  as?: ElementType;
  /**
   * Colonnes : un nombre (colonnes égales) ou un template CSS libre
   * (ex. `"2fr 1fr"`, `"repeat(4, 1fr)"`). Ignoré si `min` est fourni.
   */
  columns?: number | string;
  /**
   * Largeur mini d'une colonne (ex. `"260px"`) → grille responsive auto-fit.
   * Prioritaire sur `columns`. Défaut si ni `columns` ni `min` : auto-fit 260px.
   */
  min?: string;
  /**
   * Hauteur des lignes implicites (grid-auto-rows). Utile pour le bento afin
   * que les `rowSpan` aient une base régulière. Ex. `"minmax(180px, 1fr)"`.
   */
  autoRows?: string;
  /** Gouttière. Défaut `var(--ss-space-6)`. */
  gap?: string;
}

/**
 * Grid — grille CSS. `min` (auto-fit) pour un responsive fluide ; `columns`
 * (nombre ou template) pour une grille contrôlée. Combiné à `GridItem`
 * (colSpan/rowSpan) et `autoRows`, permet les mises en page bento.
 */
export function Grid({
  as = "div",
  columns,
  min,
  autoRows,
  gap = "var(--ss-space-6)",
  className,
  style,
  ...rest
}: GridProps) {
  const template = min
    ? `repeat(auto-fit, minmax(${min}, 1fr))`
    : columns != null
      ? typeof columns === "number"
        ? `repeat(${columns}, minmax(0, 1fr))`
        : columns
      : "repeat(auto-fit, minmax(260px, 1fr))";

  const gridStyle: CSSProperties = {
    gridTemplateColumns: template,
    gridAutoRows: autoRows,
    gap,
    ...style,
  };

  const classes = [styles.grid, className].filter(Boolean).join(" ");
  return createElement(as, { className: classes, style: gridStyle, ...rest });
}
