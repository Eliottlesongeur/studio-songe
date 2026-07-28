"use client";

import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import { useFieldContext } from "../Field/fieldContext";
import styles from "../Field/control.module.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Force l'état erreur (sinon hérité du `Field` parent). */
  invalid?: boolean;
}

/**
 * Input — champ texte Studio Songe. Placé dans un `Field`, il hérite
 * automatiquement de l'id, `aria-describedby`, `aria-invalid` et `required`.
 * Utilisable seul, tous les attributs natifs sont transmis.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { invalid, required, className, id, type = "text", ...rest },
  ref,
) {
  const ctx = useFieldContext();
  const isInvalid = invalid ?? ctx?.invalid ?? false;
  const describedBy = rest["aria-describedby"] ?? ctx?.describedBy;
  const classes = [styles.control, isInvalid && styles.invalid, className]
    .filter(Boolean)
    .join(" ");

  return (
    <input
      {...rest}
      ref={ref}
      type={type}
      id={id ?? ctx?.id}
      required={required ?? ctx?.required}
      aria-invalid={isInvalid || undefined}
      aria-describedby={describedBy}
      className={classes}
    />
  );
});
