import type { HTMLAttributes, ReactElement } from "react";
import styles from "./Bullet.module.css";

export type BulletShape = "arch" | "dot";
export type BulletTone = "accent" | "line" | "current";

export interface BulletProps extends HTMLAttributes<HTMLSpanElement> {
  /** `arch` (arche signature, défaut) · `dot` (point). */
  shape?: BulletShape;
  /** `accent` (terracotta) · `line` (sauge) · `current` (couleur du texte). */
  tone?: BulletTone;
  /** Hauteur en px. Défaut : suit la taille du texte (1em). */
  size?: number;
}

/** Silhouette d'arche de la puce de liste (charte, puceslistes.svg). */
const ARCH_PATH =
  "M1.54167 0.760417L1.58854 0.78125L1.64063 0.802083C2.07292 1 2.5 1.19792 2.83854 1.38021C3.25521 1.60938 3.66667 1.83333 4.06771 2.05208L9.77604 5.23438C10.2135 5.47396 10.6667 5.71354 11.125 5.96354H11.1302C13.5052 7.23438 16.0937 8.625 17.8906 10.4115C19.6198 12.1302 20.8385 14.4583 21.4375 16.8125C21.875 18.5312 21.8333 20.349 21.8333 22.0938L21.8021 40.7813L0.0520833 40.7604L0 0C0.406249 0.239583 0.979167 0.500001 1.54167 0.760417Z";

interface ShapeDef {
  viewBox: string;
  el: ReactElement;
}

const SHAPES: Record<BulletShape, ShapeDef> = {
  arch: { viewBox: "0 0 22 41", el: <path d={ARCH_PATH} fill="currentColor" /> },
  dot: { viewBox: "0 0 12 12", el: <circle cx="6" cy="6" r="3" fill="currentColor" /> },
};

/**
 * Bullet — puce de liste Studio Songe. Par défaut l'arche terracotta de la
 * charte (silhouette signature) ; `dot` en variante simple.
 */
export function Bullet({
  shape = "arch",
  tone = "accent",
  size,
  className,
  style,
  ...rest
}: BulletProps) {
  const { viewBox, el } = SHAPES[shape];
  const classes = [styles.bullet, styles[`tone-${tone}`], className].filter(Boolean).join(" ");
  return (
    <span
      className={classes}
      role="presentation"
      aria-hidden="true"
      style={size ? { height: size, ...style } : style}
      {...rest}
    >
      <svg viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
        {el}
      </svg>
    </span>
  );
}
