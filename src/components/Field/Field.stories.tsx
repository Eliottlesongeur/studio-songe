import type { Meta, StoryObj } from "@storybook/react";
import { Field } from "./Field";
import { Input } from "../Input/Input";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";

const meta = {
  title: "Composants/Field",
  component: Field,
  parameters: { layout: "padded" },
  args: {
    label: "Adresse e-mail",
    required: false,
    hint: "",
    error: "",
    children: <Input type="email" placeholder="vous@exemple.fr" />,
  },
  argTypes: {
    hint: { control: "text" },
    error: { control: "text" },
    children: { control: false },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 420 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Terrain de jeu — ajoute une aide ou une erreur depuis les Controls. */
export const Playground: Story = {
  render: (args) => (
    <Field {...args}>
      <Input type="email" placeholder="vous@exemple.fr" />
    </Field>
  ),
};

/** Avec texte d'aide. */
export const AvecAide: Story = {
  name: "Avec aide",
  args: { label: "Téléphone", hint: "Optionnel — pour un rappel sous 24 h." },
  render: (args) => (
    <Field {...args}>
      <Input type="tel" placeholder="06 12 34 56 78" />
    </Field>
  ),
};

/** En erreur (bordure terracotta + message role=alert). */
export const EnErreur: Story = {
  name: "En erreur",
  args: {
    label: "Adresse e-mail",
    required: true,
    error: "Merci d'indiquer une adresse e-mail valide.",
  },
  render: (args) => (
    <Field {...args}>
      <Input type="email" defaultValue="bonjour@" />
    </Field>
  ),
};

/** Textarea dans un Field. */
export const AvecTextarea: Story = {
  name: "Avec Textarea",
  args: { label: "Votre projet", hint: "Décrivez le lieu, la surface, vos envies." },
  render: (args) => (
    <Field {...args}>
      <Textarea placeholder="Je souhaite réaménager…" />
    </Field>
  ),
};

/** Exemple complet : formulaire de contact Studio Songe. */
export const FormulaireContact: Story = {
  name: "Formulaire de contact",
  render: () => (
    <form
      style={{ display: "grid", gap: "var(--ss-space-5)" }}
      onSubmit={(e) => e.preventDefault()}
    >
      <Field label="Nom complet" required>
        <Input autoComplete="name" placeholder="Camille Durand" />
      </Field>
      <Field label="Adresse e-mail" required>
        <Input type="email" autoComplete="email" placeholder="vous@exemple.fr" />
      </Field>
      <Field label="Votre projet" hint="Le plus de détails possible nous aide à mieux vous répondre.">
        <Textarea placeholder="Je souhaite réaménager…" />
      </Field>
      <Button type="submit">Envoyer la demande</Button>
    </form>
  ),
};
