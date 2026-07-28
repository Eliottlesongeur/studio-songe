import { createElement } from "react";
import type { CSSProperties, ElementType, HTMLAttributes } from "react";
import styles from "./Grid.module.css";

export interface GridItemProps extends HTMLAttributes<HTMLElement> {
  /** Balise rendue. `div` par défaut. */
  as?: ElementType;
  /** Nombre de colonnes couvertes (grid-column: span N). */
  colSpan?: number;
  /** Nombre de lignes couvertes (grid-row: span N). */
  rowSpan?: number;
  /** Colonne de départ (placement explicite, optionnel). */
  colStart?: number;
  /** Ligne de départ (placement explicite, optionnel). */
  rowStart?: number;
}

/**
 * GridItem — cellule d'une `Grid` qui peut s'étendre sur plusieurs colonnes
 * ou lignes (`colSpan`/`rowSpan`) ou se placer explicitement
 * (`colStart`/`rowStart`). Brique des mises en page bento.
 */
export function GridItem({
  as = "div",
  colSpan,
  rowSpan,
  colStart,
  rowStart,
  className,
  style,
  ...rest
}: GridItemProps) {
  const itemStyle: CSSProperties = {
    gridColumn: colStart
      ? `${colStart} / span ${colSpan ?? 1}`
      : colSpan
        ? `span ${colSpan}`
        : undefined,
    gridRow: rowStart
      ? `${rowStart} / span ${rowSpan ?? 1}`
      : rowSpan
        ? `span ${rowSpan}`
        : undefined,
    ...style,
  };

  const classes = [styles.item, className].filter(Boolean).join(" ");
  return createElement(as, { className: classes, style: itemStyle, ...rest });
}
