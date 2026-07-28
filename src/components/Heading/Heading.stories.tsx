import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Heading";

const meta = {
  title: "Composants/Heading",
  component: Heading,
  parameters: { layout: "padded" },
  args: {
    children: "Des intérieurs pensés pour vous",
    variant: "hero",
    weight: "light",
    tone: "default",
    align: "left",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["hero", "section", "sous-titre", "mineur"],
    },
    weight: { control: "inline-radio", options: ["light", "bold"] },
    tone: { control: "inline-radio", options: ["default", "inverse", "accent"] },
    align: { control: "inline-radio", options: ["left", "center"] },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Hero: Story = {};

export const Echelle: Story = {
  name: "Échelle",
  render: () => (
    <div style={{ display: "grid", gap: 28, maxWidth: 900 }}>
      <Heading variant="hero">Titre hero</Heading>
      <Heading variant="section">Titre section</Heading>
      <Heading variant="sous-titre">Sous-titre en minuscule</Heading>
      <Heading variant="mineur">Sous-titre mineur en minuscule</Heading>
    </div>
  ),
};

export const DeuxGraisses: Story = {
  args: {
    align: "center",
  },

  name: "Deux graisses (charte hero)",

  render: () => (
    <div style={{ display: "grid", gap: 4 }}>
      <Heading variant="hero" weight="light">
        Des intérieurs
      </Heading>
      <Heading variant="hero" weight="bold">
        Pensés pour vous
      </Heading>
    </div>
  ),
};
