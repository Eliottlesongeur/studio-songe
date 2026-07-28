import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section/Section";
import { Container } from "@/components/Container/Container";
import { Heading } from "@/components/Heading/Heading";
import { legal } from "@/content/legal";
import { site } from "@/content/site";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site ${site.nom} — éditeur, hébergeur et informations légales.`,
  robots: { index: false, follow: true },
};

const { editeur, directeurPublication, hebergeur, registrar, derniereMaj } = legal;

export default function MentionsLegalesPage() {
  return (
    <main className={styles.page}>
      <Section spacing="lg">
        <Container>
          <div className={styles.wrap}>
            <Link href="/" className={styles.retour}>
              ← Retour à l'accueil
            </Link>

            <Heading as="h1" variant="section" className={styles.titre}>
              Mentions légales
            </Heading>
            <p className={styles.maj}>Dernière mise à jour : {derniereMaj}</p>

            <section className={styles.bloc}>
              <Heading as="h2" variant="sous-titre" className={styles.blocTitre}>
                Éditeur du site
              </Heading>
              <address className={styles.contact}>
                {editeur.denomination} — {editeur.statut}
                <br />
                Représenté par {editeur.representant}
                <br />
                {editeur.adresse}, {editeur.codePostalVille}
                <br />
                Email :{" "}
                <a href={`mailto:${editeur.email}`}>{editeur.email}</a>
                <br />
                Téléphone : {editeur.telephone}
                <br />
                SIRET : {editeur.siret}
                <br />
                {editeur.rcs && (
                  <>
                    RCS : {editeur.rcs}
                    <br />
                  </>
                )}
                {editeur.tva}
              </address>
            </section>

            <section className={styles.bloc}>
              <Heading as="h2" variant="sous-titre" className={styles.blocTitre}>
                Directeur de la publication
              </Heading>
              <p>
                {directeurPublication.href ? (
                  <a href={directeurPublication.href} target="_blank" rel="noopener noreferrer">
                    {directeurPublication.nom}
                  </a>
                ) : (
                  directeurPublication.nom
                )}
              </p>
            </section>

            <section className={styles.bloc}>
              <Heading as="h2" variant="sous-titre" className={styles.blocTitre}>
                Hébergeur
              </Heading>
              <address className={styles.contact}>
                {hebergeur.nom}
                <br />
                {hebergeur.adresse}
                <br />
                <a href={`https://${hebergeur.site}`} target="_blank" rel="noopener noreferrer">
                  {hebergeur.site}
                </a>
              </address>
              <p>
                Nom de domaine enregistré auprès de {registrar.nom} — {registrar.adresse}.
              </p>
            </section>

            <section className={styles.bloc}>
              <Heading as="h2" variant="sous-titre" className={styles.blocTitre}>
                Propriété intellectuelle
              </Heading>
              <p>
                L'ensemble des contenus présents sur ce site (textes, photographies, visuels,
                logo, mise en page, éléments graphiques) est la propriété de {editeur.denomination}
                {" "}ou de ses ayants droit, et est protégé par le droit de la propriété
                intellectuelle. Toute reproduction, représentation, modification ou diffusion,
                totale ou partielle, sans l'autorisation écrite préalable de {editeur.denomination},
                est interdite et constitue une contrefaçon sanctionnée par le Code de la propriété
                intellectuelle.
              </p>
              <p>
                Les photographies de réalisations sont publiées avec l'accord des clients concernés
                et restent la propriété de leurs auteurs respectifs.
              </p>
            </section>

            <section className={styles.bloc}>
              <Heading as="h2" variant="sous-titre" className={styles.blocTitre}>
                Responsabilité
              </Heading>
              <p>
                {editeur.denomination} s'efforce d'assurer l'exactitude et la mise à jour des
                informations diffusées sur ce site, sans pouvoir en garantir l'exhaustivité ou
                l'absence d'erreur. Les informations sont fournies à titre indicatif et ne sauraient
                engager la responsabilité de l'éditeur. L'utilisateur reste seul responsable de
                l'usage qu'il fait du site.
              </p>
            </section>

            <section className={styles.bloc}>
              <Heading as="h2" variant="sous-titre" className={styles.blocTitre}>
                Liens hypertextes
              </Heading>
              <p>
                Ce site peut contenir des liens vers des sites tiers. {editeur.denomination}
                {" "}n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à
                leur contenu ou à leur politique de confidentialité.
              </p>
            </section>

            <section className={styles.bloc}>
              <Heading as="h2" variant="sous-titre" className={styles.blocTitre}>
                Données personnelles
              </Heading>
              <p>
                Le traitement des données personnelles collectées via ce site est détaillé dans
                notre{" "}
                <Link href="/politique-de-confidentialite">politique de confidentialité</Link>.
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </main>
  );
}
