import type { Meta, StoryObj } from "@storybook/react";
import { Motif } from "./Motif";
import { Heading } from "../Heading/Heading";
import { Text } from "../Text/Text";

const meta = {
  title: "Marque/Motif",
  component: Motif,
  parameters: { layout: "centered" },
  args: { variant: "signature", tone: "line", size: 360 },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["signature", "arche", "eventail", "courbe"],
    },
    tone: { control: "inline-radio", options: ["line", "accent"] },
    size: { control: { type: "number", min: 120, max: 720, step: 20 } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Motif>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

/** Les motifs linéaires supplémentaires (arche · eventail · courbe). */
export const Variantes: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "grid", gap: "var(--ss-space-7)", maxWidth: 380 }}>
      {(["arche", "eventail", "courbe"] as const).map((v) => (
        <div key={v} style={{ display: "grid", gap: "var(--ss-space-3)" }}>
          <Text variant="caption" tone="muted">{v}</Text>
          <Motif variant={v} size={v === "eventail" ? 150 : 340} />
        </div>
      ))}
    </div>
  ),
};

/** En accent décoratif derrière un contenu (fond de section). */
export const EnFond: Story = {
  name: "En fond de section",
  parameters: { layout: "fullscreen" },
  render: () => (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: 420,
        padding: "var(--ss-space-9) var(--ss-space-8)",
        background: "var(--ss-color-bg)",
      }}
    >
      <Motif
        size={620}
        style={{ position: "absolute", top: -80, right: -120, opacity: 0.5 }}
      />
      <div style={{ position: "relative", maxWidth: 460 }}>
        <Heading as="h2" variant="section">
          Des espaces songés
        </Heading>
        <Text variant="body-lg" tone="muted" style={{ marginTop: "var(--ss-space-4)" }}>
          Le motif signature en fond, tout en finesse, pose la marque sans
          alourdir la composition.
        </Text>
      </div>
    </div>
  ),
};
