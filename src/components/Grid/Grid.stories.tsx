import type { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "./Grid";
import { GridItem } from "./GridItem";

const meta = {
  title: "Layout/Grid",
  component: Grid,
  parameters: { layout: "padded" },
  args: { min: "220px", gap: "var(--ss-space-6)" },
  tags: ["autodocs"],
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

const Box = ({ n }: { n: ReactNode }) => (
  <div
    style={{
      height: "100%",
      display: "grid",
      placeItems: "center",
      background: "var(--ss-color-surface)",
      borderRadius: "var(--ss-radius-md)",
      padding: "var(--ss-space-6)",
      textAlign: "center",
      fontFamily: "var(--ss-font-body)",
      color: "var(--ss-color-text-muted)",
    }}
  >
    {n}
  </div>
);

/** Responsive par défaut (auto-fit selon `min`). */
export const Playground: Story = {
  render: (args) => (
    <Grid {...args}>
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <Box key={n} n={n} />
      ))}
    </Grid>
  ),
};

/** Nombre de colonnes fixe. */
export const ColonnesFixes: Story = {
  name: "Colonnes fixes",
  args: { columns: 3, min: undefined },
  render: (args) => (
    <Grid {...args}>
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <Box key={n} n={n} />
      ))}
    </Grid>
  ),
};

/** Colonnes asymétriques via un template libre (`columns="2fr 1fr"`). */
export const ColonnesAsymetriques: Story = {
  name: "Colonnes asymétriques",
  render: () => (
    <Grid columns="2fr 1fr" gap="var(--ss-space-4)">
      <Box n="2fr" />
      <Box n="1fr" />
    </Grid>
  ),
};

/** Bento — les tuiles s'étendent via `GridItem` (colSpan / rowSpan). */
export const Bento: Story = {
  render: () => (
    <Grid columns={4} autoRows="120px" gap="var(--ss-space-4)">
      <GridItem colSpan={2} rowSpan={2}>
        <Box n="1 · 2×2" />
      </GridItem>
      <GridItem colSpan={2}>
        <Box n="2 · 2×1" />
      </GridItem>
      <GridItem>
        <Box n="3" />
      </GridItem>
      <GridItem>
        <Box n="4" />
      </GridItem>
      <GridItem colSpan={2}>
        <Box n="5 · 2×1" />
      </GridItem>
      <GridItem colSpan={4}>
        <Box n="6 · pleine largeur" />
      </GridItem>
    </Grid>
  ),
};
