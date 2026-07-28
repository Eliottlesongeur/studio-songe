import type { Meta, StoryObj } from "@storybook/react";
import { TitleSignature } from "./TitleSignature";
import { Heading } from "../Heading/Heading";

const meta = {
  title: "Marque/Signature titre",
  component: TitleSignature,
  parameters: { layout: "padded" },
  args: {
    archSize: 132,
    overlap: 28,
    align: "bottom",
    children: (
      <Heading as="h2" variant="section">
        Des intérieurs
        <br />
        pensés pour vous
      </Heading>
    ),
  },
  argTypes: {
    archSize: { control: { type: "number", min: 60, max: 280, step: 4 } },
    overlap: { control: { type: "number", min: 0, max: 120, step: 2 } },
    align: { control: "inline-radio", options: ["bottom", "center"] },
    children: { control: false },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TitleSignature>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Arche à gauche + titre (règle `archSize` / `overlap` dans les Controls). */
export const Playground: Story = {
  render: (args) => (
    <TitleSignature {...args}>
      <Heading as="h2" variant="section">
        Des intérieurs
        <br />
        pensés pour vous
      </Heading>
    </TitleSignature>
  ),
};

/** Titre court sur une seule ligne. */
export const TitreCourt: Story = {
  name: "Titre court",
  args: { archSize: 96 },
  render: (args) => (
    <TitleSignature {...args}>
      <Heading as="h2" variant="sous-titre">
        Réalisations
      </Heading>
    </TitleSignature>
  ),
};
