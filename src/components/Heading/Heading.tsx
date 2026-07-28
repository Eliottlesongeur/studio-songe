import { createElement, forwardRef } from "react";
import type { HTMLAttributes } from "react";
import styles from "./Heading.module.css";

/**
 * Rôle visuel du titre (échelle + traitement typographique charte).
 * Découplé de la balise HTML : la sémantique se règle via `as`.
 */
export type HeadingVariant = "hero" | "section" | "sous-titre" | "mineur";
export type HeadingTone = "default" | "inverse" | "accent";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /** Rôle visuel (charte). `hero`/`section` en capitales aérées, `sous-titre`/`mineur` en minuscule. */
  variant?: HeadingVariant;
  /** Balise HTML rendue. Par défaut déduite du variant (accessibilité). */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  /** Graisse Garet. Le bold n'a d'effet que sur `hero`/`section` (charte hero). */
  weight?: "light" | "bold";
  tone?: HeadingTone;
  align?: "left" | "center";
}

const defaultTag: Record<HeadingVariant, HeadingProps["as"]> = {
  hero: "h1",
  section: "h2",
  "sous-titre": "h3",
  mineur: "h4",
};

/** Le bold (charte hero deux graisses) n'est autorisé que sur les gros titres caps. */
const boldAllowed: Record<HeadingVariant, boolean> = {
  hero: true,
  section: true,
  "sous-titre": false,
  mineur: false,
};

/**
 * Heading — titres Studio Songe (police Garet).
 *
 * - `hero`/`section` : capitales très aérées (tracking +0.4em).
 * - `sous-titre`/`mineur` : Garet minuscule, tracking resserré.
 */
export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  function Heading(
    {
      variant = "section",
      as,
      weight = "light",
      tone = "default",
      align = "left",
      className,
      children,
      ...rest
    },
    ref,
  ) {
    const tag = as ?? defaultTag[variant] ?? "h2";
    const effectiveWeight = boldAllowed[variant] ? weight : "light";
    const classes = [
      styles.heading,
      styles[variant],
      styles[effectiveWeight],
      styles[`tone-${tone}`],
      styles[`align-${align}`],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return createElement(tag, { ref, className: classes, ...rest }, children);
  },
);
