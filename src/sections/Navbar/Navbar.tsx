"use client";

import { useEffect, useId, useState } from "react";
import { Logo } from "@/components/Logo/Logo";
import { Link } from "@/components/Link/Link";
import { Button } from "@/components/Button/Button";
import { useContactModal } from "@/components/ContactModal/context";
import { site } from "@/content/site";
import styles from "./Navbar.module.css";

export interface NavbarProps {
  /** Rend la barre collante en haut de page. Défaut : true. */
  sticky?: boolean;
}

/**
 * Navbar — en-tête global Studio Songe (porté depuis Relume Navbar 7,
 * sans le méga-menu). Logo, liens de navigation et CTA depuis
 * `content/site.ts`. Menu mobile en panneau déroulant, hamburger animé
 * en CSS. À placer une seule fois dans le layout.
 */
export function Navbar({ sticky = true }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const { open: openContact } = useContactModal();
  const panelId = useId();

  // Fermeture à la touche Échap.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const classes = [styles.navbar, sticky && styles.sticky].filter(Boolean).join(" ");

  return (
    <header className={classes}>
      <div className={styles.inner}>
        <Logo href="/" variant="secondaire" size={36} className={styles.logo} />

        {/* Navigation bureau (≥ lg) */}
        <nav className={styles.desktop} aria-label="Navigation principale">
          <ul className={styles.navList}>
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} variant="nav">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button variant="primary" size="sm" type="button" onClick={openContact}>
            {site.cta.label}
          </Button>
        </nav>

        {/* Bouton hamburger (< lg) */}
        <button
          type="button"
          className={styles.burger}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls={panelId}
          data-open={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </button>
      </div>

      {/* Panneau mobile déroulant */}
      <div id={panelId} className={styles.panel} data-open={open} inert={!open}>
        <nav aria-label="Navigation principale" className={styles.panelNav}>
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              variant="nav"
              className={styles.panelLink}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button
            variant="primary"
            size="md"
            block
            type="button"
            onClick={() => {
              setOpen(false);
              openContact();
            }}
          >
            {site.cta.label}
          </Button>
        </nav>
      </div>
    </header>
  );
}
