import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section/Section";
import { Container } from "@/components/Container/Container";
import { Heading } from "@/components/Heading/Heading";
import { Text } from "@/components/Text/Text";
import { ContactCta } from "@/sections/ContactCta/ContactCta";
import { getProjet, projets } from "@/content/projets";
import type { ProjetImage } from "@/content/projets";
import styles from "./projet.module.css";

interface Params {
  params: Promise<{ slug: string }>;
}

/** Génère les pages statiques pour chaque projet au build. */
export function generateStaticParams() {
  return projets.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const projet = getProjet(slug);
  if (!projet) return {};
  return { title: projet.titre, description: projet.resume };
}

const LOREM =
  "Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.";

/** Photo optimisée (next/image fill) ou placeholder dégradé si src vide. */
function Visual({ image, sizes }: { image: ProjetImage; sizes: string }) {
  return (
    <div className={styles.media}>
      {image.src ? (
        <Image src={image.src} alt={image.alt} fill sizes={sizes} className={styles.photo} />
      ) : (
        <div className={styles.placeholder} role="img" aria-label={image.alt} />
      )}
    </div>
  );
}

/**
 * Cas client (page réalisation) — TEMPLATE en contenu placeholder (lorem ipsum),
 * porté du wireframe Relume (Header · Aperçu/Content14 · Détail/Layout432 ·
 * Témoignage · CTA). Sert à valider l'agencement des sections ; le vrai
 * copywriting sera injecté ensuite. Navbar + Footer sont globaux (layout).
 */
export default async function ProjetPage({ params }: Params) {
  const { slug } = await params;
  const projet = getProjet(slug);
  if (!projet) notFound();

  return (
    <main className={styles.page}>
      {/* ---------- Header : titre + intro + tags ---------- */}
      <Section spacing="lg" className={styles.header}>
        <Container>
          <div className={styles.headerInner}>
            <Link href="/#realisations" className={styles.retour}>
              ← Toutes les réalisations
            </Link>
            <Heading as="h1" variant="section" align="center" className={styles.titre}>
              {projet.titreBold ? (
                <>
                  <span className={styles.ligne}>{projet.titreLight}</span>
                  <span className={`${styles.ligne} ${styles.fort}`}>{projet.titreBold}</span>
                </>
              ) : (
                projet.titre
              )}
            </Heading>
            {projet.resume && (
              <Text variant="body-lg" tone="muted" align="center" className={styles.intro}>
                {projet.resume}
              </Text>
            )}
          </div>
        </Container>
      </Section>

      {/* ---------- Aperçu : couverture + méta + récit (Content14) ---------- */}
      <Section spacing="lg" className={styles.apercuSection}>
        <Container>
          <figure className={`${styles.cover} ${styles.frame}`}>
            <Visual image={projet.couverture} sizes="(max-width: 1024px) 100vw, 1200px" />
          </figure>
          <div className={styles.apercu}>
            <dl className={styles.meta}>
              <div>
                <dt>Lieu</dt>
                <dd>{projet.lieu}</dd>
              </div>
              <div>
                <dt>Année</dt>
                <dd>{projet.annee}</dd>
              </div>
              <div>
                <dt>Catégorie</dt>
                <dd>{projet.categorie}</dd>
              </div>
              <div>
                <dt>Surface</dt>
                <dd>— m²</dd>
              </div>
            </dl>
            <div className={styles.richtext}>
              {(projet.apercu ?? [LOREM, LOREM]).map((paragraphe, i) => (
                <Text key={i}>{paragraphe}</Text>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------- Détail : images + texte (Layout432) ---------- */}
      <Section spacing="lg">
        <Container>
          <div className={styles.detail}>
            <figure className={`${styles.detailMain} ${styles.frame}`}>
              <Visual
                image={projet.galerie?.[0] ?? projet.couverture}
                sizes="(max-width: 767px) 100vw, 50vw"
              />
            </figure>
            <div className={styles.detailAside}>
              <div className={styles.detailImages}>
                <figure className={`${styles.detailSmall} ${styles.frame}`}>
                  <Visual
                    image={projet.galerie?.[1] ?? { src: "", alt: "Détail du projet" }}
                    sizes="25vw"
                  />
                </figure>
                <figure className={`${styles.detailSmall} ${styles.frame}`}>
                  <Visual
                    image={projet.galerie?.[2] ?? { src: "", alt: "Détail du projet" }}
                    sizes="25vw"
                  />
                </figure>
              </div>
              <div className={styles.detailText}>
                {(projet.detail ?? [LOREM]).map((paragraphe, i) => (
                  <Text key={i} tone="muted">
                    {paragraphe}
                  </Text>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------- Témoignage (Testimonial4) ---------- */}
      <Section spacing="lg" className={styles.temoignageSection}>
        <Container>
          <figure className={styles.temoignage}>
            <blockquote className={styles.citation}>
              «&nbsp;{projet.temoignage?.citation ?? LOREM}&nbsp;»
            </blockquote>
            <figcaption className={styles.client}>
              <span className={styles.clientNom}>
                {projet.temoignage?.auteur ?? "Nom du client"}
              </span>
              <span className={styles.clientRole}>
                {projet.temoignage?.role ?? `Propriétaire · ${projet.lieu}`}
              </span>
            </figcaption>
          </figure>
        </Container>
      </Section>

      {/* ---------- CTA final : réutilise le CTA de la landing (motif signature) ---------- */}
      <ContactCta />
    </main>
  );
}
