import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../Text/Text";
import { CornerBracket, CrossMark, CrossBracket, CornerCross, Dot } from "./Decor";
import type { Corner } from "./Decor";

const meta: Meta = {
  title: "Marque/Decor",
  parameters: { layout: "padded" },
  tags: ["!autodocs"],
};
export default meta;
type Story = StoryObj;

const corners: Corner[] = ["top-left", "top-right", "bottom-left", "bottom-right"];

/** Les primitives de filets décoratifs (sauge par défaut). */
export const Primitives: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "var(--ss-space-8)", alignItems: "flex-end", flexWrap: "wrap" }}>
      {corners.map((c) => (
        <div key={c} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--ss-space-3)" }}>
          <CornerBracket corner={c} size={72} />
          <Text variant="caption" tone="muted">{c}</Text>
        </div>
      ))}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--ss-space-3)" }}>
        <CrossMark size={120} />
        <Text variant="caption" tone="muted">CrossMark</Text>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--ss-space-3)" }}>
        <CrossBracket size={170} />
        <Text variant="caption" tone="muted">CrossBracket</Text>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--ss-space-3)" }}>
        <CrossBracket size={110} rotate={90} />
        <Text variant="caption" tone="muted">CrossBracket · rotate 90</Text>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--ss-space-3)" }}>
        <CornerCross size={200} />
        <Text variant="caption" tone="muted">CornerCross</Text>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--ss-space-3)" }}>
        <Dot size={10} />
        <Text variant="caption" tone="muted">Dot</Text>
      </div>
    </div>
  ),
};

/** Composition type « mockup » : équerres d'angle + croix (filet + tiret + point). */
export const Composition: Story = {
  render: () => (
    <div
      style={{
        position: "relative",
        height: 320,
        border: "1px dashed var(--ss-color-border-soft)",
        borderRadius: "var(--ss-radius-lg)",
        background: "var(--ss-color-bg)",
      }}
    >
      <CornerBracket corner="top-left" size={80} style={{ position: "absolute", top: 16, left: 16 }} />
      <CornerBracket corner="bottom-right" size={80} style={{ position: "absolute", bottom: 16, right: 16 }} />
      <CrossMark size={130} flip style={{ position: "absolute", top: 40, right: 0 }} />
    </div>
  ),
};

/** Recoloration : `color` change le filet (ex. ivoire sur fond foncé). */
export const Recoloration: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "var(--ss-space-6)" }}>
      <div style={{ color: "var(--ss-color-line)" }}><CornerBracket size={72} /></div>
      <div style={{ color: "var(--ss-color-accent)" }}><CornerBracket size={72} /></div>
      <div style={{ background: "var(--ss-palette-terracotta)", padding: 16, borderRadius: 12, color: "var(--ss-color-text-inverse)" }}>
        <CornerBracket size={72} />
      </div>
    </div>
  ),
};
