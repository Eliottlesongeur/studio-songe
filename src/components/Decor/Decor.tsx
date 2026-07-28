import type { HTMLAttributes } from "react";
import styles from "./Decor.module.css";

/* =============================================================
   Decor — filets décoratifs Studio Songe (tracés vectoriels dessinés par
   Sasha, charte). Couleur sauge par défaut (var(--ss-color-line)),
   recolorable via `color`/`currentColor` (ex. ivoire sur fond terracotta).
   Purement décoratifs : role="presentation" + aria-hidden.
   Le trait ne s'épaissit pas à l'agrandissement (vector-effect
   non-scaling-stroke) → filet fin constant quelle que soit la taille.
   ============================================================= */

export type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right";

/** Flip CSS du tracé canonique (coin haut-gauche) vers les autres coins. */
const CORNER_TRANSFORM: Record<Corner, string> = {
  "top-left": "none",
  "top-right": "scaleX(-1)",
  "bottom-left": "scaleY(-1)",
  "bottom-right": "scale(-1, -1)",
};

/** Ratio natif des viewBox (pour préserver les proportions au scaling). */
const BRACKET_RATIO = 91 / 92;
const CROSS_RATIO = 67 / 136;
const CROSS_BRACKET_RATIO = 127 / 196;
const CORNER_CROSS_RATIO = 288 / 262;

export interface CornerBracketProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  /** Coin visé. `top-left` par défaut (tracé canonique). */
  corner?: Corner;
  /** Largeur en px (la hauteur suit le ratio). Défaut 88. */
  size?: number;
  /** Épaisseur du trait en px (constante, non impactée par le scaling). Défaut 1.5. */
  thickness?: number;
}

/** Équerre à coin arrondi (tracé exact de la charte). */
export function CornerBracket({
  corner = "top-left",
  size = 88,
  thickness = 1.5,
  className,
  style,
  ...rest
}: CornerBracketProps) {
  const classes = [styles.decor, className].filter(Boolean).join(" ");
  return (
    <span
      className={classes}
      role="presentation"
      aria-hidden="true"
      style={{ width: size, height: size * BRACKET_RATIO, transform: CORNER_TRANSFORM[corner], ...style }}
      {...rest}
    >
      <svg viewBox="0 0 92 91" width="100%" height="100%" fill="none">
        <path
          d="M0.5 91V15C0.536903 3.20641 4 0.5 16 0.5C28 0.5 92 0.5 92 0.5"
          stroke="currentColor"
          strokeWidth={thickness}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  );
}

export interface CrossMarkProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  /** Largeur en px (la hauteur suit le ratio). Défaut 120. */
  size?: number;
  /** Épaisseur du trait en px (constante). Défaut 1.5. */
  thickness?: number;
  /** Rotation 90° : le long filet devient vertical. Défaut false (horizontal). */
  vertical?: boolean;
  /** Miroir : renvoie le tiret + point de l'autre côté du filet. Défaut false. */
  flip?: boolean;
}

/** Croix : long filet + tiret + point à l'intersection (charte). Horizontale
 *  par défaut, `vertical` la bascule à 90° (même tracé, pivoté). */
export function CrossMark({
  size = 120,
  thickness = 1.5,
  vertical = false,
  flip = false,
  className,
  style,
  ...rest
}: CrossMarkProps) {
  const classes = [styles.decor, className].filter(Boolean).join(" ");
  const transform = [vertical ? "rotate(90deg)" : "", flip ? "scaleX(-1)" : ""]
    .filter(Boolean)
    .join(" ") || undefined;
  return (
    <span
      className={classes}
      role="presentation"
      aria-hidden="true"
      style={{ width: size, height: size * CROSS_RATIO, transform, ...style }}
      {...rest}
    >
      <svg viewBox="0 0 136 67" width="100%" height="100%" fill="none">
        <path
          d="M0.5 35H135M25 0.5V66.5"
          stroke="currentColor"
          strokeWidth={thickness}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <circle cx="25" cy="35" r="2.5" fill="currentColor" />
      </svg>
    </span>
  );
}

export interface CrossBracketProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  /** Largeur en px (la hauteur suit le ratio). Défaut 180. */
  size?: number;
  /** Épaisseur du trait en px (constante). Défaut 1.5. */
  thickness?: number;
  /** Rotation en degrés (0/90/180/270). Défaut 0. */
  rotate?: 0 | 90 | 180 | 270;
  /** Miroir horizontal. Défaut false. */
  flip?: boolean;
}

/** Filet à croix (+ deux points) prolongé d'un coin arrondi (charte, equerre2). */
export function CrossBracket({
  size = 180,
  thickness = 1.5,
  rotate = 0,
  flip = false,
  className,
  style,
  ...rest
}: CrossBracketProps) {
  const classes = [styles.decor, className].filter(Boolean).join(" ");
  const transform = [rotate ? `rotate(${rotate}deg)` : "", flip ? "scaleX(-1)" : ""]
    .filter(Boolean)
    .join(" ") || undefined;
  return (
    <span
      className={classes}
      role="presentation"
      aria-hidden="true"
      style={{ width: size, height: size * CROSS_BRACKET_RATIO, transform, ...style }}
      {...rest}
    >
      <svg viewBox="0 0 196 127" width="100%" height="100%" fill="none">
        <path
          d="M0.5 35.5H135M30 1V67"
          stroke="currentColor"
          strokeWidth={thickness}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <circle cx="30" cy="35.5" r="1.5" fill="currentColor" />
        <circle cx="30" cy="1.5" r="1.5" fill="currentColor" />
        <path
          d="M102.5 35.4998L179 35.4998C190.793 35.4452 194.404 38.0004 194.497 50C194.59 61.9996 194.498 125.5 194.498 125.5"
          stroke="currentColor"
          strokeWidth={thickness}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  );
}

export interface CornerCrossProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  /** Largeur en px (la hauteur suit le ratio). Défaut 240. */
  size?: number;
  /** Épaisseur du trait en px (constante). Défaut 1.5. */
  thickness?: number;
  /** Rotation en degrés (0/90/180/270). Défaut 0. */
  rotate?: 0 | 90 | 180 | 270;
  /** Miroir horizontal. Défaut false. */
  flip?: boolean;
}

/** Croix d'angle : filet vertical croisant un filet horizontal qui s'incurve
 *  vers un coin (charte, equerre4). Se cale dans un angle de section. */
export function CornerCross({
  size = 240,
  thickness = 1.5,
  rotate = 0,
  flip = false,
  className,
  style,
  ...rest
}: CornerCrossProps) {
  const classes = [styles.decor, className].filter(Boolean).join(" ");
  const transform = [rotate ? `rotate(${rotate}deg)` : "", flip ? "scaleX(-1)" : ""]
    .filter(Boolean)
    .join(" ") || undefined;
  return (
    <span
      className={classes}
      role="presentation"
      aria-hidden="true"
      style={{ width: size, height: size * CORNER_CROSS_RATIO, transform, ...style }}
      {...rest}
    >
      <svg viewBox="0 0 262 288" width="100%" height="100%" fill="none">
        <path
          d="M158.857 287.053V0.0534668M261.857 84.0535C189.22 84.0535 132.357 84.0535 75.8572 84.0535C19.3572 84.0535 -2.64251 32.5535 0.857428 0.0534668"
          stroke="currentColor"
          strokeWidth={thickness}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <circle cx="158.857" cy="84.0535" r="2.5" fill="currentColor" />
      </svg>
    </span>
  );
}

export interface DotProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  /** Diamètre en px. Défaut 7. */
  size?: number;
}

/** Point plein (terminaison de filet). */
export function Dot({ size = 7, className, style, ...rest }: DotProps) {
  const classes = [styles.dot, className].filter(Boolean).join(" ");
  return (
    <span
      className={classes}
      role="presentation"
      aria-hidden="true"
      style={{ width: size, height: size, ...style }}
      {...rest}
    />
  );
}
