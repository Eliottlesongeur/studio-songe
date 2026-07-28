import { createElement, forwardRef } from "react";
import type { HTMLAttributes } from "react";
import styles from "./Text.module.css";

export type TextVariant = "body-lg" | "body" | "body-sm" | "caption" | "label";
export type TextTone = "default" | "muted" | "inverse" | "accent";

export interface TextProps extends HTMLAttributes<HTMLElement> {
  /** Rôle typographique (police Work Sans, sauf `label` en Garet capitales). */
  variant?: TextVariant;
  /** Balise HTML rendue. `p` par défaut, `span` conseillé en ligne. */
  as?: "p" | "span" | "div" | "label" | "figcaption" | "li";
  weight?: "light" | "medium";
  tone?: TextTone;
  align?: "left" | "center" | "right";
}

/**
 * Text — corps de texte & labels Studio Songe (police Work Sans).
 * `variant="label"` bascule en Garet petites capitales (nav, sur-titres).
 */
export const Text = forwardRef<HTMLElement, TextProps>(function Text(
  {
    variant = "body",
    as = "p",
    weight = "light",
    tone = "default",
    align = "left",
    className,
    children,
    ...rest
  },
  ref,
) {
  const classes = [
    styles.text,
    styles[variant],
    styles[`weight-${weight}`],
    styles[`tone-${tone}`],
    styles[`align-${align}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return createElement(as, { ref, className: classes, ...rest }, children);
});
