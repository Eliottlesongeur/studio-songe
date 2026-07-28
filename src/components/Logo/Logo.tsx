import { createElement, useId } from "react";
import type { HTMLAttributes } from "react";
import { LOGO_ASSETS } from "./logoAssets";
import type { LogoVariant } from "./logoAssets";
import styles from "./Logo.module.css";

export type { LogoVariant };
export type LogoTone = "default" | "mono";

export interface LogoProps extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  /** Forme du logo. `secondaire` (horizontal) par défaut — usage nav/inline. */
  variant?: LogoVariant;
  /** Hauteur d'affichage en px. Défaut adapté à chaque variante. */
  size?: number;
  /**
   * `default` version officielle (couleur) · `mono` monochrome (suit
   * `currentColor` : brun sur fond clair, ivoire sur fond foncé).
   */
  tone?: LogoTone;
  /** Si fourni, le logo devient un lien (retour accueil). */
  href?: string;
  /** Alternative textuelle. « Studio Songe » par défaut. */
  label?: string;
}

/**
 * Logo — signature visuelle Studio Songe (SVG vectoriels de la charte).
 * Variantes : `principal` (vertical), `secondaire` (horizontal),
 * `embleme` (voile seule), `monogramme` (« S »). Couleurs tokenisées
 * (`--logo-ink` / `--logo-accent` / `--logo-fill`) ; `tone="mono"`
 * pour poser le logo monochrome sur fond clair ou foncé. Les IDs de
 * masque sont rendus uniques.
 */
export function Logo({
  variant = "secondaire",
  size,
  tone = "default",
  href,
  label = "Studio Songe",
  className,
  style,
  ...rest
}: LogoProps) {
  const asset = LOGO_ASSETS[variant];
  // useId contient des « : » invalides en id SVG / url(#…) → on nettoie.
  const rawId = useId();
  const uid = `ssl${rawId.replace(/[^a-zA-Z0-9]/g, "")}`;
  const markup = asset.hasIds ? asset.markup.replaceAll("__UID__", uid) : asset.markup;

  const classes = [styles.logo, tone !== "default" && styles[tone], className]
    .filter(Boolean)
    .join(" ");

  const height = size ?? asset.defaultHeight;

  return createElement(href ? "a" : "span", {
    ...(href ? { href } : {}),
    className: classes,
    role: "img",
    "aria-label": label,
    style: { height, ...style },
    dangerouslySetInnerHTML: { __html: markup },
    ...rest,
  });
}
