import type { Meta, StoryObj } from "@storybook/react";
import { Section } from "./Section";
import { Container } from "../Container/Container";
import { Grid } from "../Grid/Grid";
import { Heading } from "../Heading/Heading";
import { Text } from "../Text/Text";
import { Motif } from "../Motif/Motif";

const meta = {
  title: "Layout/Section",
  component: Section,
  parameters: { layout: "fullscreen" },
  args: { tone: "default", spacing: "md" },
  argTypes: {
    tone: { control: "inline-radio", options: ["default", "alt", "muted"] },
    spacing: { control: "inline-radio", options: ["sm", "md", "lg"] },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Section + Container : le duo de base d'une page. */
export const Playground: Story = {
  render: (args) => (
    <Section {...args}>
      <Container>
        <Motif size={200} tone="line" style={{ marginBottom: "var(--ss-space-4)" }} />
        <Heading as="h2" variant="section">
          Une section de page
        </Heading>
        <Text variant="body-lg" tone={args.tone === "alt" ? "inverse" : "muted"}>
          Rythme vertical constant, gouttières gérées par le Container.
        </Text>
      </Container>
    </Section>
  ),
};

/** Enchaînement de sections avec fonds alternés (aperçu de page). */
export const Enchainement: Story = {
  name: "Enchaînement",
  render: () => (
    <>
      <Section tone="default">
        <Container>
          <Heading as="h2" variant="sous-titre">
            Le Studio
          </Heading>
          <Text tone="muted">Fond ivoire (default).</Text>
        </Container>
      </Section>
      <Section tone="muted">
        <Container>
          <Heading as="h2" variant="sous-titre">
            Réalisations
          </Heading>
          <Grid min="200px" style={{ marginTop: "var(--ss-space-6)" }}>
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                style={{
                  aspectRatio: "4 / 3",
                  background: "var(--ss-color-bg)",
                  borderRadius: "var(--ss-radius-md)",
                }}
              />
            ))}
          </Grid>
        </Container>
      </Section>
      <Section tone="alt">
        <Container size="narrow">
          <Heading as="h2" variant="sous-titre" tone="inverse">
            Parlons de votre projet
          </Heading>
          <Text tone="inverse">Fond brun (alt) — texte inversé.</Text>
        </Container>
      </Section>
    </>
  ),
};
