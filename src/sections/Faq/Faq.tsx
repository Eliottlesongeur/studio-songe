import { Section } from "@/components/Section/Section";
import { Container } from "@/components/Container/Container";
import { Heading } from "@/components/Heading/Heading";
import { Text } from "@/components/Text/Text";
import { ContactButton } from "@/components/ContactModal/ContactButton";
import { home } from "@/content/home";
import styles from "./Faq.module.css";

/**
 * Faq — accordéon de questions fréquentes (porté de Relume Faq1).
 * L'accordéon Radix de Relume est remplacé par des `<details>/<summary>`
 * natifs : accessibles au clavier, plusieurs ouverts possibles (équivaut
 * au `type="multiple"`), sans JS ni dépendance → Server Component.
 */
export function Faq() {
  const { id, heading, description, questions, cta } = home.faq;

  return (
    <Section id={id} spacing="lg" className={styles.section}>
      <Container>
        <div className={styles.wrap}>
          <div className={styles.intro}>
            <Heading as="h2" variant="section" align="center" className={styles.titre}>
              {heading}
            </Heading>
            <Text variant="body-lg" tone="muted" align="center" className={styles.description}>
              {description}
            </Text>
          </div>

          <div className={styles.liste}>
            {questions.map((q) => (
              <details key={q.question} className={styles.item}>
                <summary className={styles.trigger}>
                  <span className={styles.question}>{q.question}</span>
                  <svg
                    className={styles.icone}
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <div className={styles.reponse}>
                  <Text tone="muted">{q.reponse}</Text>
                </div>
              </details>
            ))}
          </div>

          <div className={styles.footer}>
            <div className={styles.actions}>
              <ContactButton variant="secondary" className={styles.cta}>
                {cta.label}
              </ContactButton>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
