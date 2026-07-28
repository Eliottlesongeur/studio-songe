import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "../components/Heading/Heading";
import { Text } from "../components/Text/Text";

const meta: Meta = {
  title: "Fondations/Vue d'ensemble",
  parameters: { layout: "fullscreen" },
  tags: ["!autodocs"],
};
export default meta;
type Story = StoryObj;

const palette = [
  { name: "Ivoire très clair", token: "--ss-palette-ivoire", hex: "#FFFBF8", usage: "Fond principal", dark: false },
  { name: "Terracotta", token: "--ss-palette-terracotta", hex: "#A85C3C", usage: "CTA · marqueurs · actif", dark: true },
  { name: "Brun foncé", token: "--ss-palette-brun", hex: "#4A3F36", usage: "Texte · sections foncées", dark: true },
  { name: "Gris clair", token: "--ss-palette-gris", hex: "#EBEBEB", usage: "Surfaces · arches", dark: false },
  { name: "Vert sauge", token: "--ss-palette-sauge", hex: "#5A8C55", usage: "Lignes fines (signature)", dark: true },
];

const spacing = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const radii = [
  { name: "sm (boutons)", token: "--ss-radius-sm" },
  { name: "md", token: "--ss-radius-md" },
  { name: "lg (cartes)", token: "--ss-radius-lg" },
  { name: "xl", token: "--ss-radius-xl" },
  { name: "pill", token: "--ss-radius-pill" },
];

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section style={{ marginBottom: "var(--ss-space-9)" }}>
    <Heading variant="sous-titre" style={{ marginBottom: "var(--ss-space-5)" }}>{title}</Heading>
    {children}
  </section>
);

export const Fondations: Story = {
  render: () => (
    <div style={{ background: "var(--ss-color-bg)", minHeight: "100vh", padding: "var(--ss-space-8)" }}>
      <Text variant="label" tone="accent" style={{ marginBottom: "var(--ss-space-2)" }}>
        Studio Songe
      </Text>
      <Heading variant="hero" style={{ marginBottom: "var(--ss-space-8)" }}>
        Design System
      </Heading>

      <Section title="Palette de couleurs">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "var(--ss-space-4)" }}>
          {palette.map((c) => (
            <div key={c.token} style={{ border: "1px solid var(--ss-color-border-soft)", borderRadius: "var(--ss-radius-md)", overflow: "hidden" }}>
              <div style={{ background: `var(${c.token})`, height: 96, color: c.dark ? "#FFFBF8" : "#4A3F36", display: "flex", alignItems: "flex-end", padding: "var(--ss-space-3)", fontFamily: "var(--ss-font-body)", fontSize: 13 }}>
                {c.hex}
              </div>
              <div style={{ padding: "var(--ss-space-3)" }}>
                <Text variant="body-sm" weight="medium">{c.name}</Text>
                <Text variant="caption" tone="muted">{c.usage}</Text>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Typographie">
        <div style={{ display: "grid", gap: "var(--ss-space-4)" }}>
          <Heading variant="hero">Titre hero — capitales (48px)</Heading>
          <Heading variant="section">Titre section — capitales (36px)</Heading>
          <Heading variant="sous-titre">Sous-titre — minuscule (24px)</Heading>
          <Heading variant="mineur">Titre mineur — minuscule (20px)</Heading>
          <Text variant="body-lg">Work Sans Light — introduction (18px).</Text>
          <Text variant="body">Work Sans Light — corps de texte standard (16px).</Text>
          <Text variant="label" tone="accent">Label — petites capitales aérées</Text>
        </div>
      </Section>

      <Section title="Espacements (base 4px)">
        <div style={{ display: "flex", gap: "var(--ss-space-4)", alignItems: "flex-end", flexWrap: "wrap" }}>
          {spacing.map((s) => (
            <div key={s} style={{ textAlign: "center" }}>
              <div style={{ width: `var(--ss-space-${s})`, height: `var(--ss-space-${s})`, background: "var(--ss-color-accent)", borderRadius: 2, marginBottom: 8 }} />
              <Text variant="caption" tone="muted">{s}</Text>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Rayons">
        <div style={{ display: "flex", gap: "var(--ss-space-5)", flexWrap: "wrap" }}>
          {radii.map((r) => (
            <div key={r.token} style={{ textAlign: "center" }}>
              <div style={{ width: 88, height: 88, background: "var(--ss-color-surface)", border: "1.5px solid var(--ss-color-border)", borderRadius: `var(${r.token})`, marginBottom: 8 }} />
              <Text variant="caption" tone="muted">{r.name}</Text>
            </div>
          ))}
        </div>
      </Section>
    </div>
  ),
};
