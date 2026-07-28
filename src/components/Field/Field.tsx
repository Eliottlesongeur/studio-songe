"use client";

import { useId } from "react";
import type { ReactNode } from "react";
import { FieldContext } from "./fieldContext";
import type { FieldContextValue } from "./fieldContext";
import styles from "./Field.module.css";

export interface FieldProps {
  /** Libellé du champ (relié au contrôle via htmlFor). */
  label: ReactNode;
  /** Le contrôle : `<Input />` ou `<Textarea />` (hérite du câblage a11y). */
  children: ReactNode;
  /** Texte d'aide affiché sous le libellé. */
  hint?: ReactNode;
  /** Message d'erreur (bascule le champ en état invalide). */
  error?: ReactNode;
  /** Marque le champ requis (astérisque + `required` sur le contrôle). */
  required?: boolean;
  /** id du contrôle. Généré automatiquement si absent. */
  id?: string;
  className?: string;
}

/**
 * Field — enveloppe d'un champ de formulaire Studio Songe.
 * Rend le libellé, l'aide et l'erreur, et câble l'accessibilité
 * (`htmlFor`, `aria-describedby`, `aria-invalid`, `required`) au
 * `Input`/`Textarea` enfant via le contexte.
 */
export function Field({
  label,
  children,
  hint,
  error,
  required = false,
  id,
  className,
}: FieldProps) {
  const base = useId();
  const controlId = id ?? `${base}-control`;
  const hintId = `${base}-hint`;
  const errorId = `${base}-error`;

  const describedBy =
    [hint ? hintId : null, error ? errorId : null].filter(Boolean).join(" ") || undefined;

  const ctx: FieldContextValue = {
    id: controlId,
    describedBy,
    invalid: Boolean(error),
    required,
  };

  const classes = [styles.field, className].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      <label htmlFor={controlId} className={styles.label}>
        {label}
        {required && (
          <span className={styles.required} aria-hidden="true">
            *
          </span>
        )}
      </label>
      {hint && (
        <p id={hintId} className={styles.hint}>
          {hint}
        </p>
      )}
      <FieldContext.Provider value={ctx}>{children}</FieldContext.Provider>
      {error && (
        <p id={errorId} className={styles.error} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
