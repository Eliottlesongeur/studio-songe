import { forwardRef } from "react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonOwnProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Icône affichée avant le libellé. */
  leadingIcon?: ReactNode;
  /** Icône affichée après le libellé (ex. flèche →). */
  trailingIcon?: ReactNode;
  /** Bouton carré ne contenant qu'une icône. `aria-label` requis. */
  iconOnly?: boolean;
  /** Pleine largeur du conteneur. */
  block?: boolean;
  /** Styles adaptés aux sections sur fond brun foncé. */
  onDark?: boolean;
  /**
   * Si fourni, rend un `<a href>` stylé bouton (au lieu d'un `<button>`).
   * Utile pour les CTA qui sont en réalité des liens (meilleur SEO/a11y).
   */
  href?: string;
}

export type ButtonProps = ButtonOwnProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonOwnProps> &
  Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "rel">;

const Icon = ({ children }: { children: ReactNode }) => (
  <span className={styles.icon} aria-hidden="true">
    {children}
  </span>
);

/**
 * Button — action Studio Songe (police Garet, capitales aérées).
 * Variantes : `primary` (terracotta plein), `secondary` (contour),
 * `ghost` (texte). Supporte icônes, `iconOnly`, `onDark`, `block`.
 * Avec `href`, rend un `<a>` stylé bouton (lien-action).
 */
export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(
    {
      variant = "primary",
      size = "md",
      leadingIcon,
      trailingIcon,
      iconOnly = false,
      block = false,
      onDark = false,
      type = "button",
      href,
      className,
      children,
      ...rest
    },
    ref,
  ) {
    const classes = [
      styles.button,
      styles[variant],
      styles[size],
      iconOnly && styles.iconOnly,
      block && styles.block,
      onDark && styles.onDark,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const content = iconOnly ? (
      <Icon>{leadingIcon ?? trailingIcon ?? children}</Icon>
    ) : (
      <>
        {leadingIcon && <Icon>{leadingIcon}</Icon>}
        {children}
        {trailingIcon && <Icon>{trailingIcon}</Icon>}
      </>
    );

    if (href !== undefined) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        className={classes}
        {...rest}
      >
        {content}
      </button>
    );
  },
);
