import type { HTMLAttributes } from "react";
import styles from "./Tag.module.css";

export type TagVariant = "solid" | "soft" | "outline";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  /** `solid` (terracotta plein) · `soft` (terracotta clair) · `outline` (contour). */
  variant?: TagVariant;
}

/**
 * Tag — étiquette / catégorie Studio Songe (terracotta, capitales Garet).
 * Ex. « Résidence privée », « Nouveauté ».
 */
export function Tag({ variant = "soft", className, children, ...rest }: TagProps) {
  const classes = [styles.tag, styles[variant], className].filter(Boolean).join(" ");
  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  );
}
