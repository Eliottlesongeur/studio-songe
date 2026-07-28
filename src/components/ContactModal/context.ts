"use client";

import { createContext, useContext } from "react";

export interface ContactModalContextValue {
  /** Ouvre le pop-up de contact. */
  open: () => void;
  /** Ferme le pop-up de contact. */
  close: () => void;
  /** État courant (utile pour l'a11y ou des effets externes). */
  isOpen: boolean;
}

export const ContactModalContext = createContext<ContactModalContextValue | null>(null);

/**
 * Accès au pilotage du pop-up de contact global. Doit être appelé sous un
 * `<ContactModalProvider>` (monté dans le layout).
 */
export function useContactModal(): ContactModalContextValue {
  const ctx = useContext(ContactModalContext);
  if (!ctx) {
    throw new Error("useContactModal doit être utilisé dans un <ContactModalProvider>.");
  }
  return ctx;
}
