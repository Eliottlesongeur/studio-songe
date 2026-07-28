import { createElement } from "react";
import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { Heading } from "../Heading/Heading";
import { Text } from "../Text/Text";
import styles from "./ProjectCard.module.css";

export type ProjectCardMask = "arch" | "songe" | "encadre";
export type ProjectCardFrameTone = "accent" | "border" | "line";

export interface ProjectCardProps extends HTMLAttributes<HTMLElement> {
  /** Titre du projet (rendu en capitales Garet). */
  title: string;
  /** Catégorie / sous-titre (terracotta, ex. « Résidence privée »). */
  category?: string;
  /** URL de l'image de projet. */
  imageSrc?: string;
  imageAlt?: string;
  /** Si fourni, la carte entière devient un lien. */
  href?: string;
  /** Forme du masque image. `arch` (dôme) par défaut · `songe` (silhouette signature) · `encadre` (photo dans un cadre en arche à double filet — « encadré éditorial »). */
  mask?: ProjectCardMask;
  /** Filet fin décalé qui suit la forme (arche ou songe). Défaut `true`. */
  frame?: boolean;
  /** Couleur du filet : `accent` (terracotta, défaut) · `border` (brun) · `line` (sauge). */
  frameTone?: ProjectCardFrameTone;
}

/** Silhouette extérieure du masque « songe » (Mask1.svg, tracé externe). */
const SONGE_PATH =
  "M0 0C8.18599 4.81931 19.5848 10.0244 30.8662 15.1758L30.8779 15.1807L30.8896 15.1865L31.8799 15.6387L32.8945 16.1016C41.5911 20.0756 50.0988 24.0016 56.8809 27.6768L56.9033 27.6895L56.9062 27.6904C65.2367 32.205 73.5008 36.6837 81.4785 41.1045L195.898 104.848C204.645 109.652 213.711 114.506 222.938 119.446L222.999 119.48H223C270.558 144.944 322.515 172.764 358.528 208.595C393.138 243.032 417.568 289.706 429.578 336.832C438.358 371.289 437.452 407.697 437.452 442.667L436.908 817.094L1 816.693L0 0Z";

const SONGE_MASK = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 438 818' preserveAspectRatio='none'><path fill='#fff' d='${SONGE_PATH}'/></svg>`,
)}")`;

/** Flèche fine décorative (le sens est porté par le lien de la carte). */
const ArrowGlyph = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M5 12h13M12 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * ProjectCard — carte projet signature Studio Songe (charte p.20/22).
 * Image masquée en arche (défaut) ou en silhouette « songe », titre capitales,
 * catégorie terracotta, flèche. Devient un lien complet si `href`.
 */
export function ProjectCard({
  title,
  category,
  imageSrc,
  imageAlt = "",
  href,
  mask = "arch",
  frame = true,
  frameTone = "accent",
  className,
  ...rest
}: ProjectCardProps) {
  const classes = [styles.card, className].filter(Boolean).join(" ");

  const isSonge = mask === "songe";
  const isEncadre = mask === "encadre";
  const mediaClass = [styles.media, isSonge && styles.songe, isEncadre && styles.encadreMedia]
    .filter(Boolean)
    .join(" ");
  const mediaStyle: CSSProperties | undefined = isSonge
    ? {
        WebkitMaskImage: SONGE_MASK,
        maskImage: SONGE_MASK,
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
      }
    : undefined;

  const media = (
    <div className={mediaClass} style={mediaStyle}>
      {imageSrc ? (
        <img className={styles.image} src={imageSrc} alt={imageAlt} loading="lazy" />
      ) : null}
    </div>
  );

  const toneClass = styles[`frameTone-${frameTone}`];
  let framed: ReactNode = media;
  if (isEncadre) {
    // Encadré éditorial : le média porte le filet intérieur ; `frame` ajoute
    // le filet extérieur décalé → double trait signature de la charte.
    const encadreClass = [styles.encadreFrame, toneClass, frame && styles.encadreFrameDouble]
      .filter(Boolean)
      .join(" ");
    framed = <div className={encadreClass}>{media}</div>;
  } else if (frame) {
    framed = isSonge ? (
      <div className={`${styles.frameSonge} ${toneClass}`}>
        <svg
          className={styles.songeOutline}
          viewBox="0 0 438 818"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path d={SONGE_PATH} />
        </svg>
        {media}
      </div>
    ) : (
      <div className={`${styles.frame} ${toneClass}`}>{media}</div>
    );
  }

  const content = (
    <>
      {framed}
      <div className={styles.footer}>
        <div className={styles.text}>
          <Heading as="h3" variant="mineur" className={styles.title}>
            {title}
          </Heading>
          {category ? (
            <Text variant="label" tone="accent">
              {category}
            </Text>
          ) : null}
        </div>
        <span className={styles.arrow} aria-hidden="true">
          <ArrowGlyph />
        </span>
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...(rest as HTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  return createElement("article", { className: classes, ...rest }, content);
}
