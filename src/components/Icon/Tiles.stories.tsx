import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../Text/Text";
import * as Tiles from "./tiles";

const tileList = Object.entries(Tiles).filter(([, v]) => typeof v === "function");

const meta: Meta = {
  title: "Fondations/Iconographie",
  parameters: { layout: "padded" },
  tags: ["!autodocs"],
};
export default meta;
type Story = StoryObj;

/** La librairie complète — dessinée main, duotone (trait + remplissage). */
export const Librairie: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, minmax(120px, 1fr))",
        gap: "var(--ss-space-5)",
        color: "var(--ss-color-line)",
        maxWidth: 720,
      }}
    >
      {tileList.map(([name, Tile]) => (
        <div
          key={name}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "var(--ss-space-3)",
            padding: "var(--ss-space-4)",
            border: "1px solid var(--ss-color-border-soft)",
            borderRadius: "var(--ss-radius-md)",
          }}
        >
          <Tile size={72} title={name} />
          <Text variant="caption" tone="muted">{name}</Text>
        </div>
      ))}
    </div>
  ),
};

/** `currentColor` : le trait se recolore, le remplissage reste gris de marque. */
export const Couleurs: Story = {
  render: () => {
    const { Home } = Tiles;
    return (
      <div style={{ display: "flex", gap: "var(--ss-space-6)", alignItems: "center" }}>
        <Home size={72} style={{ color: "var(--ss-color-line)" }} />
        <Home size={72} style={{ color: "var(--ss-color-accent)" }} />
        <Home size={72} style={{ color: "var(--ss-color-text)" }} />
        <div style={{ background: "var(--ss-color-bg-alt)", padding: 12, borderRadius: 16 }}>
          <Home size={72} style={{ color: "var(--ss-color-text-inverse)" }} />
        </div>
      </div>
    );
  },
};

/** Échelle : net de la favicon au grand format. */
export const Tailles: Story = {
  render: () => {
    const { Home } = Tiles;
    return (
      <div style={{ display: "flex", gap: "var(--ss-space-5)", alignItems: "center", color: "var(--ss-color-line)" }}>
        {[24, 32, 48, 72, 120].map((s) => (
          <Home key={s} size={s} />
        ))}
      </div>
    );
  },
};
