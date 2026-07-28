import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta = {
  title: "Composants/Text",
  component: Text,
  parameters: { layout: "padded" },
  args: {
    children:
      "Studio Songe conçoit des espaces sur mesure, pensés pour révéler le potentiel de chaque lieu.",
    variant: "body",
    weight: "light",
    tone: "default",
    align: "left",
  },
  argTypes: {
    variant: { control: "select", options: ["body-lg", "body", "body-sm", "caption", "label"] },
    weight: { control: "inline-radio", options: ["light", "medium"] },
    tone: { control: "inline-radio", options: ["default", "muted", "inverse", "accent"] },
    align: { control: "inline-radio", options: ["left", "center", "right"] },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Body: Story = {};

export const Roles: Story = {
  name: "Rôles",
  render: () => (
    <div style={{ display: "grid", gap: 16, maxWidth: 640 }}>
      <Text variant="label" tone="accent">Studio Songe</Text>
      <Text variant="body-lg">Paragraphe large (18px) pour les introductions.</Text>
      <Text variant="body">Corps de texte standard (16px), Work Sans Light.</Text>
      <Text variant="body-sm" tone="muted">Texte secondaire (14px), teinte atténuée.</Text>
      <Text variant="caption" tone="muted">Légende / mention (12px).</Text>
    </div>
  ),
};

export const Label: Story = {
  name: "Label (nav / sur-titre)",
  args: { variant: "label", children: "Projets" },
};
