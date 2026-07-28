import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Motif.module.css";

export type MotifTone = "line" | "accent";
export type MotifVariant = "signature" | "signature-mobile" | "arche" | "eventail" | "courbe";

export interface MotifProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  /**
   * Motif à afficher. `signature` (arche signature paysage, défaut) ·
   * `signature-mobile` (variante portrait/compacte) · `arche` · `eventail`
   * · `courbe` (motifs linéaires supplémentaires).
   */
  variant?: MotifVariant;
  /** `line` (sauge, défaut) · `accent` (terracotta). */
  tone?: MotifTone;
  /** Largeur en px (la hauteur suit le ratio). Défaut 360. */
  size?: number;
}

/** Tracé signature de la charte (motif-signature-desktop.svg, Eliott) :
 *  cadre serré 847×536, en trait `stroke` + deux points d'intersection. */
const SIGNATURE = {
  viewBox: "0 0 847 536",
  path: "M69.9938 535.5V320.503C75.8017 134.056 180.819 74.6178 317.493 75.5018H846.993M775.928 0L775.928 203.922C770.934 390.392 666.176 450.288 529.499 450L0.00439453 452.31",
  strokeWidth: 2,
  /** Points pleins aux intersections (rayon en unités viewBox). */
  dots: [
    { cx: 69.9995, cy: 452 },
    { cx: 775.759, cy: 75.5 },
  ],
  dotRadius: 6,
};

/** Variante portrait/compacte du motif signature (motif-signature-mobile.svg,
 *  Eliott) : cadre serré 480×620, tracé en `fill` (contour vectorisé) +
 *  deux points d'intersection. Tous les tracés en `currentColor`. */
const SIGNATURE_MOBILE = {
  viewBox: "0 0 480 620",
  paths: [
    "M25.9009 17.3737C25.9009 19.9329 23.3306 22.0076 20.1599 22.0076C16.9893 22.0076 14.4189 19.9329 14.4189 17.3737C14.4189 14.8144 16.9893 12.7397 20.1599 12.7397C23.3306 12.7397 25.9009 14.8144 25.9009 17.3737Z",
    "M466.044 603.953C466.044 606.513 463.473 608.587 460.303 608.587C457.132 608.587 454.562 606.513 454.562 603.953C454.562 601.394 457.132 599.319 460.303 599.319C463.473 599.319 466.044 601.394 466.044 603.953Z",
    "M255.653 604.062L255.632 605.061L255.643 605.062L255.654 605.062L255.653 604.062ZM20.4189 413.56L21.4189 413.566L21.4189 413.562L20.4189 413.56ZM220.001 17.0296L220.018 16.0298L220.009 16.0296L219.999 16.0296L220.001 17.0296ZM456.262 206.701L455.262 206.701L455.262 206.709L456.262 206.701ZM479.938 604.062L479.937 603.062L255.651 603.062L255.653 604.062L255.654 605.062L479.94 605.062L479.938 604.062ZM255.653 604.062L255.674 603.062C166.594 601.068 107.967 579.865 71.66 546.165C35.3725 512.483 21.2204 466.165 21.4189 413.566L20.4189 413.56L19.4189 413.555C19.219 466.514 33.4757 513.45 70.3006 547.63C107.106 581.793 166.295 603.062 255.632 605.061L255.653 604.062ZM20.4189 413.56L21.4189 413.562L21.4189 1.26367L20.4189 1.26216L19.4188 1.26071L19.4188 413.559L20.4189 413.56ZM0.0668642 17.0319L0.0683519 18.0319L220.002 18.0296L220.001 17.0296L219.999 16.0296L0.0653765 16.0319L0.0668642 17.0319ZM220.001 17.0296L219.983 18.0294C309.072 19.7092 367.815 40.7055 404.304 74.2779C440.774 107.833 455.176 154.101 455.262 206.701L456.262 206.701L457.262 206.701C457.175 153.742 442.665 106.857 405.657 72.807C368.668 38.7745 309.365 17.7144 220.018 16.0298L220.001 17.0296ZM456.262 206.701L455.262 206.709L459.391 618.744L460.391 618.736L461.391 618.727L457.262 206.692L456.262 206.701Z",
  ],
};

/** Motifs linéaires supplémentaires — tracés vectorisés de la charte. */
const LINE_MOTIFS: Record<
  Exclude<MotifVariant, "signature" | "signature-mobile">,
  { viewBox: string; path: string; strokeWidth: number }
> = {
  arche: {
    viewBox: "0 0 342 43",
    path: "M0.5 42.5C0.5 42.5 133.752 42.5 142.671 42.5C142.671 35.5933 142.671 0.500178 173.623 0.5C209.297 0.500483 205.625 42.5 205.625 42.5H341.5",
    strokeWidth: 1,
  },
  eventail: {
    viewBox: "0 0 124 150",
    path: "M1 66V148.5M9 42V148.5M16 28.5V148.5M24 18.5V148.5M32.5 148.5V12.5M40.5 148.5V7M48 148.5V4M55 148.5V2.5M62.5 148.5V1M70 148.5V2.5M78 148.5V4M85.5 148.5V7M93 148.5V12.5M100 148.5V18.5M108 148.5V28.5M115.5 148.5V42M123 148.5V66",
    strokeWidth: 2,
  },
  courbe: {
    viewBox: "0 0 333 58",
    path: "M1 56.0002C112.104 56.0002 174.396 56.0002 285.5 56.0002C324.769 57.7531 335.5 31.0002 329.5 1.00024",
    strokeWidth: 2,
  },
};

/**
 * Motif — motifs décoratifs Studio Songe (charte). `signature` : grande forme
 * en arche pleine (fond de section, accent d'angle). `arche` / `eventail` /
 * `courbe` : lignes signature supplémentaires. Couleur tokenisée
 * (`currentColor`), largeur pilotée par `size`, la hauteur suit le ratio.
 */
export function Motif({
  variant = "signature",
  tone = "line",
  size = 360,
  className,
  style,
  ...rest
}: MotifProps) {
  const classes = [styles.motif, styles[`tone-${tone}`], className]
    .filter(Boolean)
    .join(" ");

  let viewBox: string;
  let content: ReactNode;

  if (variant === "signature") {
    viewBox = SIGNATURE.viewBox;
    content = (
      <>
        <path
          d={SIGNATURE.path}
          stroke="currentColor"
          strokeWidth={SIGNATURE.strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          fill="none"
        />
        {SIGNATURE.dots.map((d) => (
          <circle key={`${d.cx}-${d.cy}`} cx={d.cx} cy={d.cy} r={SIGNATURE.dotRadius} fill="currentColor" />
        ))}
      </>
    );
  } else if (variant === "signature-mobile") {
    viewBox = SIGNATURE_MOBILE.viewBox;
    content = (
      <>
        {SIGNATURE_MOBILE.paths.map((d, i) => (
          <path key={i} d={d} fill="currentColor" />
        ))}
      </>
    );
  } else {
    const m = LINE_MOTIFS[variant];
    viewBox = m.viewBox;
    content = (
      <path
        d={m.path}
        stroke="currentColor"
        strokeWidth={m.strokeWidth}
        strokeLinecap="round"
        fill="none"
      />
    );
  }

  return (
    <span
      className={classes}
      role="presentation"
      aria-hidden="true"
      style={{ width: size, ...style }}
      {...rest}
    >
      <svg viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
        {content}
      </svg>
    </span>
  );
}
