"use client";

import { createContext, useContext } from "react";

/** Contexte fourni par `Field` pour câbler automatiquement le contrôle (a11y). */
export interface FieldContextValue {
  /** id du contrôle (relié au <label htmlFor>). */
  id: string;
  /** Liste d'ids (aide + erreur) pour aria-describedby. */
  describedBy?: string;
  /** Le champ est en erreur. */
  invalid: boolean;
  /** Le champ est requis. */
  required: boolean;
}

export const FieldContext = createContext<FieldContextValue | null>(null);

/** À utiliser dans Input/Textarea pour hériter des attributs du `Field` parent. */
export function useFieldContext(): FieldContextValue | null {
  return useContext(FieldContext);
}
