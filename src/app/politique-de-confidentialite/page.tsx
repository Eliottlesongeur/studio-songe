import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section/Section";
import { Container } from "@/components/Container/Container";
import { Heading } from "@/components/Heading/Heading";
import { legal } from "@/content/legal";
import { site } from "@/content/site";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Politique de confidentialité du site ${site.nom} — données collectées, finalités et droits (RGPD).`,
  robots: { index: false, follow: true },
};

const { editeur, hebergeur, confidentialite, derniereMaj } = legal;

export default function PolitiqueConfidentialitePage() {
  return (
    <main className={styles.page}>
      <Section spacing="lg">
        <Container>
          <div className={styles.wrap}>
            <Link href="/" className={styles.retour}>
              ← Retour à l'accueil
            </Link>

            <Heading as="h1" variant="section" className={styles.titre}>
              Politique de confidentialité
            </Heading>
            <p className={styles.maj}>Dernière mise à jour : {derniereMaj}</p>

            <section className={styles.bloc}>
              <p>
                La présente politique décrit la manière dont {editeur.denomination} collecte et
                traite vos données personnelles lorsque vous utilisez ce site, conformément au
                Règlement général sur la protection des données (RGPD) et à la loi
                « Informatique et Libertés ».
              </p>
            </section>

            <section className={styles.bloc}>
              <Heading as="h2" variant="sous-titre" className={styles.blocTitre}>
                Responsable du traitement
              </Heading>
              <address className={styles.contact}>
                {editeur.denomination}, représenté par {editeur.representant}
                <br />
                {editeur.adresse}, {editeur.codePostalVille}
                <br />
                <a href={`mailto:${editeur.email}`}>{editeur.email}</a>
              </address>
            </section>

            <section className={styles.bloc}>
              <Heading as="h2" variant="sous-titre" className={styles.blocTitre}>
                Données collectées et finalités
              </Heading>
              <p>
                Nous collectons uniquement les données que vous nous transmettez volontairement
                via le formulaire de contact :
              </p>
              <ul className={styles.liste}>
                <li>votre nom ;</li>
                <li>votre adresse email ;</li>
                <li>votre numéro de téléphone (facultatif) ;</li>
                <li>le contenu de votre message.</li>
              </ul>
              <p>
                Ces données sont utilisées à la seule fin de répondre à votre demande et
                d'échanger avec vous au sujet de votre projet. Elles ne font l'objet d'aucune
                prospection commerciale ni d'aucune cession à des tiers à des fins commerciales.
              </p>
            </section>

            <section className={styles.bloc}>
              <Heading as="h2" variant="sous-titre" className={styles.blocTitre}>
                Base légale
              </Heading>
              <p>
                Le traitement repose sur votre consentement (envoi volontaire du formulaire) et sur
                l'exécution de mesures précontractuelles prises à votre demande.
              </p>
            </section>

            <section className={styles.bloc}>
              <Heading as="h2" variant="sous-titre" className={styles.blocTitre}>
                Destinataires et sous-traitants
              </Heading>
              <p>
                Vos données sont destinées à {editeur.denomination}. Pour acheminer les messages du
                formulaire, nous faisons appel au service <strong>Web3Forms</strong> (agissant comme
                sous-traitant). Le site est hébergé par <strong>{hebergeur.nom}</strong>. Ces
                prestataires étant susceptibles d'opérer en dehors de l'Union européenne
                (États-Unis), les transferts éventuels sont encadrés par les garanties appropriées
                prévues par le RGPD (clauses contractuelles types).
              </p>
            </section>

            <section className={styles.bloc}>
              <Heading as="h2" variant="sous-titre" className={styles.blocTitre}>
                Durée de conservation
              </Heading>
              <p>
                Vos données sont conservées pendant {confidentialite.dureeConservation}, puis
                supprimées ou anonymisées.
              </p>
            </section>

            <section className={styles.bloc}>
              <Heading as="h2" variant="sous-titre" className={styles.blocTitre}>
                Cookies et mesure d'audience
              </Heading>
              {confidentialite.analyticsCookieless ? (
                <p>
                  Ce site n'utilise <strong>aucun cookie de traçage ou publicitaire</strong>, ni
                  aucun outil de mesure d'audience à ce jour. Aucune bannière de consentement n'est
                  donc nécessaire. Seuls les cookies strictement nécessaires au bon fonctionnement
                  du site peuvent être déposés. Cette politique sera mise à jour si un outil de
                  statistiques est ajouté ultérieurement.
                </p>
              ) : (
                <p>
                  Ce site utilise des cookies de mesure d'audience. Vous pouvez accepter ou refuser
                  leur dépôt via la bannière de consentement affichée lors de votre première visite,
                  et modifier votre choix à tout moment.
                </p>
              )}
            </section>

            <section className={styles.bloc}>
              <Heading as="h2" variant="sous-titre" className={styles.blocTitre}>
                Vos droits
              </Heading>
              <p>
                Conformément au RGPD, vous disposez d'un droit d'accès, de rectification,
                d'effacement, d'opposition, de limitation et de portabilité de vos données. Vous
                pouvez exercer ces droits en écrivant à{" "}
                <a href={`mailto:${editeur.email}`}>{editeur.email}</a>.
              </p>
              <p>
                Vous avez également le droit d'introduire une réclamation auprès de la Commission
                nationale de l'informatique et des libertés (CNIL —{" "}
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
                  cnil.fr
                </a>
                ) si vous estimez que le traitement de vos données n'est pas conforme.
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </main>
  );
}
