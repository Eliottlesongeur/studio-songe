import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M4 12h15M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const meta = {
  title: "Composants/Button",
  component: Button,
  parameters: { layout: "centered" },
  args: {
    children: "Découvrir",
    variant: "primary",
    size: "md",
  },
  argTypes: {
    variant: { control: "inline-radio", options: ["primary", "secondary", "ghost"] },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    onDark: { control: "boolean" },
    block: { control: "boolean" },
    iconOnly: { table: { disable: true } },
    leadingIcon: { table: { disable: true } },
    trailingIcon: { table: { disable: true } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    block: false,
    children: "Parler de mon projet"
  }
};

export const Secondary: Story = { args: { variant: "secondary" } };

export const Ghost: Story = { args: { variant: "ghost" } };

export const AvecFleche: Story = {
  name: "Avec flèche",
  args: { trailingIcon: <ArrowRight /> },
};

export const IconeSeule: Story = {
  name: "Icône seule",
  args: {
    variant: "secondary",
    iconOnly: true,
    leadingIcon: <ArrowRight />,
    "aria-label": "Voir le projet",
    children: undefined,
  },
};

export const Tailles: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      <Button {...args} size="sm">Petit</Button>
      <Button {...args} size="md">Moyen</Button>
      <Button {...args} size="lg">Grand</Button>
    </div>
  ),
};

export const Variantes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      <Button variant="primary">Découvrir</Button>
      <Button variant="secondary">Nous contacter</Button>
      <Button variant="ghost">En savoir plus</Button>
      <Button variant="secondary" iconOnly aria-label="Suivant" trailingIcon={<ArrowRight />} />
    </div>
  ),
};

export const SurFondFonce: Story = {
  name: "Sur fond foncé",
  parameters: { backgrounds: { default: "Brun foncé" } },
  render: () => (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      <Button variant="primary">Découvrir</Button>
      <Button variant="secondary" onDark>Nous contacter</Button>
      <Button variant="ghost" onDark>En savoir plus</Button>
    </div>
  ),
};

export const Desactive: Story = {
  name: "Désactivé",
  args: { disabled: true },
};
