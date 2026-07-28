import type { HTMLAttributes } from "react";
import styles from "./SignatureLine.module.css";

export type SignatureLineOrientation = "vertical" | "horizontal";

export interface SignatureLineProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  /** Sens du trait. `vertical` par défaut. */
  orientation?: SignatureLineOrientation;
  /** Longueur du trait en px (hauteur si vertical, largeur si horizontal). Défaut 96. */
  length?: number;
  /** Épaisseur en px. Défaut 1.5. */
  thickness?: number;
}

/**
 * SignatureLine — fin trait sauge de la charte (ligne-studio-songe.svg).
 * Motif signature purement décoratif (accents verticaux dans les sections/hero).
 */
export function SignatureLine({
  orientation = "vertical",
  length = 96,
  thickness = 1.5,
  className,
  style,
  ...rest
}: SignatureLineProps) {
  const isVertical = orientation === "vertical";
  const classes = [styles.line, className].filter(Boolean).join(" ");
  return (
    <span
      className={classes}
      role="presentation"
      aria-hidden="true"
      style={{
        width: isVertical ? thickness : length,
        height: isVertical ? length : thickness,
        ...style,
      }}
      {...rest}
    />
  );
}
