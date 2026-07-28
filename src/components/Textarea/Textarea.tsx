"use client";

import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";
import { useFieldContext } from "../Field/fieldContext";
import control from "../Field/control.module.css";
import styles from "./Textarea.module.css";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Force l'état erreur (sinon hérité du `Field` parent). */
  invalid?: boolean;
}

/**
 * Textarea — champ multiligne Studio Songe. Même intégration `Field` que
 * `Input` ; hauteur minimale confortable et redimensionnement vertical.
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { invalid, required, className, id, rows = 4, ...rest },
  ref,
) {
  const ctx = useFieldContext();
  const isInvalid = invalid ?? ctx?.invalid ?? false;
  const describedBy = rest["aria-describedby"] ?? ctx?.describedBy;
  const classes = [control.control, styles.textarea, isInvalid && control.invalid, className]
    .filter(Boolean)
    .join(" ");

  return (
    <textarea
      {...rest}
      ref={ref}
      rows={rows}
      id={id ?? ctx?.id}
      required={required ?? ctx?.required}
      aria-invalid={isInvalid || undefined}
      aria-describedby={describedBy}
      className={classes}
    />
  );
});
