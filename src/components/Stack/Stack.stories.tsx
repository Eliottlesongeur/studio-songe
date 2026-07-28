import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "./Stack";

const meta = {
  title: "Layout/Stack",
  component: Stack,
  parameters: { layout: "padded" },
  args: {
    direction: "column",
    gap: "4",
    align: "stretch",
    justify: "start",
    wrap: false,
  },
  argTypes: {
    direction: { control: "inline-radio", options: ["column", "row"] },
    gap: {
      control: "select",
      options: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    },
    align: {
      control: "inline-radio",
      options: ["start", "center", "end", "stretch"],
    },
    justify: {
      control: "select",
      options: ["start", "center", "end", "between", "around"],
    },
    wrap: { control: "boolean" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

const Box = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      background: "var(--ss-color-surface)",
      borderRadius: "var(--ss-radius-sm)",
      padding: "var(--ss-space-4) var(--ss-space-5)",
      fontFamily: "var(--ss-font-body)",
      color: "var(--ss-color-text-muted)",
    }}
  >
    {children}
  </div>
);

/** Empilement vertical (défaut) — réglable via les controls. */
export const Playground: Story = {
  render: (args) => (
    <Stack {...args}>
      <Box>Élément 1</Box>
      <Box>Élément 2</Box>
      <Box>Élément 3</Box>
    </Stack>
  ),
};

/** Rangée horizontale alignée aux extrémités (ex. barre logo ↔ actions). */
export const Rangee: Story = {
  name: "Rangée (row)",
  args: { direction: "row", align: "center", justify: "between", gap: "5" },
  render: (args) => (
    <Stack {...args}>
      <Box>Logo</Box>
      <Box>Navigation</Box>
    </Stack>
  ),
};

/** Cluster : rangée qui passe à la ligne (ex. tags, groupe de boutons). */
export const Cluster: Story = {
  args: { direction: "row", wrap: true, gap: "3", align: "center" },
  render: (args) => (
    <Stack {...args}>
      {["Salon", "Cuisine", "Chambre", "Bureau", "Extérieur", "Entrée"].map(
        (t) => (
          <Box key={t}>{t}</Box>
        ),
      )}
    </Stack>
  ),
};

/** Empilement centré — brique typique d'un hero. */
export const Hero: Story = {
  args: { align: "center", gap: "5" },
  render: (args) => (
    <Stack {...args}>
      <Box>Titre</Box>
      <Box>Sous-titre / intro</Box>
      <Box>Bouton</Box>
    </Stack>
  ),
};
