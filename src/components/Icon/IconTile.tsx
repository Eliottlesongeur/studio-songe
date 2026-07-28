import { forwardRef } from "react";
import type { SVGProps } from "react";

export interface IconTileProps extends Omit<SVGProps<SVGSVGElement>, "stroke"> {
  /** Taille (px) — carré. Défaut 48 (canvas de dessin de la charte). */
  size?: number | string;
  /** Épaisseur du trait. Défaut 1 (aligné sur l'icône Check, dessinée pleine). */
  strokeWidth?: number;
  /** viewBox — surchargeable (ex. tuile 49px de large). */
  viewBox?: string;
  /** Libellé accessible. Fourni → role="img" ; omis → décoratif. */
  title?: string;
}

/**
 * IconTile — socle des icônes "tuile" Studio Songe (charte p.16).
 * Chaque icône est une tuile complète (cadre + grille + glyphe), dessinée
 * main sur un canvas 48 puis convertie ici. Duotone : le trait est
 * `currentColor` (recolorable), le remplissage `var(--ss-color-surface)`.
 *
 * Le SVG n'impose PAS de `stroke` global : chaque tracé porte ses propres
 * attributs (fill/stroke), pour que les formes pleines ne soient pas
 * involontairement contournées. `strokeWidth`/jointures s'appliquent aux
 * tracés qui ont un trait.
 */
export const IconTile = forwardRef<SVGSVGElement, IconTileProps>(
  function IconTile(
    { size = 48, strokeWidth = 1, viewBox = "-2 -2 52 52", title, children, ...rest },
    ref,
  ) {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox={viewBox}
        fill="none"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        role={title ? "img" : undefined}
        aria-hidden={title ? undefined : true}
        focusable="false"
        {...rest}
      >
        {title ? <title>{title}</title> : null}
        {children}
      </svg>
    );
  },
);
