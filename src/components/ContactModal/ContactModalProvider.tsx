"use client";

import { useCallback, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { ContactModalContext } from "./context";
import { ContactModal } from "./ContactModal";

/**
 * ContactModalProvider — fournit le pilotage du pop-up de contact à tout
 * l'arbre et monte le `ContactModal` une seule fois. À placer dans le layout,
 * autour de la Navbar, du contenu et du Footer, afin que n'importe quel
 * `ContactButton` puisse l'ouvrir.
 */
export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ open, close, isOpen }), [open, close, isOpen]);

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      <ContactModal isOpen={isOpen} onClose={close} />
    </ContactModalContext.Provider>
  );
}
