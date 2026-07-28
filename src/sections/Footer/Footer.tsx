import type { ReactNode } from "react";
import { Logo } from "@/components/Logo/Logo";
import { Link } from "@/components/Link/Link";
import { Text } from "@/components/Text/Text";
import { site } from "@/content/site";
import styles from "./Footer.module.css";

/**
 * Icônes réseaux inline (react-icons n'est pas installé — on reste sans
 * dépendance). Clé = `label` de `site.reseaux`.
 */
const socialIcons: Record<string, ReactNode> = {
  Instagram: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  ),
};

/**
 * Footer — pied de page global (porté de Relume Footer4). Logo, navigation,
 * réseaux, filet, puis copyright et liens légaux. Monté une seule fois dans
 * le layout. Données issues de `content/site.ts`. Server Component.
 */
export function Footer() {
  const navLinks = [...site.nav, { label: "Contact", href: "/#contact" }];
  const annee = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <Logo href="/" variant="secondaire" size={40} className={styles.logo} />

          <nav className={styles.nav} aria-label="Navigation pied de page">
            <ul className={styles.navList}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} variant="nav">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.socials}>
            {site.reseaux.map((reseau) => (
              <a
                key={reseau.href}
                href={reseau.href}
                className={styles.social}
                aria-label={reseau.label}
                target="_blank"
                rel="noreferrer"
              >
                {socialIcons[reseau.label] ?? reseau.label}
              </a>
            ))}
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.bottom}>
          <Text variant="body-sm" tone="muted" className={styles.copy}>
            © {annee} {site.nom}. Tous droits réservés.
          </Text>
          <ul className={styles.legal}>
            {site.legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} variant="quiet">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
