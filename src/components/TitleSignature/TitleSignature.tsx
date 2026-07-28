import type { HTMLAttributes, ReactNode } from "react";
import { Arch } from "../Arch/Arch";
import styles from "./TitleSignature.module.css";

export type TitleSignatureAlign = "bottom" | "center";

export interface TitleSignatureProps extends HTMLAttributes<HTMLDivElement> {
  /** Le titre (ex. `<Heading>`). */
  children: ReactNode;
  /** Hauteur de l'arche en px. Défaut 132. */
  archSize?: number;
  /** Chevauchement du titre sur l'arche en px. Défaut 28. */
  overlap?: number;
  /** Alignement vertical du titre sur l'arche. `bottom` par défaut. */
  align?: TitleSignatureAlign;
}

/**
 * TitleSignature — composition « signature titre » de la charte : l'arche
 * décorative gris posée à gauche, le titre à sa droite (et légèrement
 * par-dessus son bord). L'arche dépasse le titre en hauteur.
 */
export function TitleSignature({
  children,
  archSize = 132,
  overlap = 28,
  align = "bottom",
  className,
  ...rest
}: TitleSignatureProps) {
  const classes = [styles.wrap, styles[`align-${align}`], className].filter(Boolean).join(" ");
  return (
    <div className={classes} {...rest}>
      <Arch size={archSize} tone="surface" className={styles.arch} />
      <div className={styles.title} style={{ marginLeft: -overlap }}>
        {children}
      </div>
    </div>
  );
}
