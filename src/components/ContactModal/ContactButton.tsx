"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/Button/Button";
import type { ButtonProps } from "@/components/Button/Button";
import { useContactModal } from "./context";

/** Mêmes props que `Button`, sans `href`/`onClick` (l'action = ouvrir le pop-up). */
export type ContactButtonProps = Omit<ButtonProps, "href" | "onClick"> & {
  children: ReactNode;
};

/**
 * ContactButton — bouton d'appel qui ouvre le pop-up de contact au lieu de
 * naviguer. Remplace les `<Button href="/#contact">` des sections. Utilisable
 * dans un Server Component (c'est un client component autonome).
 */
export function ContactButton({ children, ...rest }: ContactButtonProps) {
  const { open } = useContactModal();
  return (
    <Button type="button" {...rest} onClick={open}>
      {children}
    </Button>
  );
}
