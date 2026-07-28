import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./Logo";

const meta = {
  title: "Marque/Logo",
  component: Logo,
  parameters: { layout: "centered" },
  args: {
    variant: "secondaire",
    tone: "default",
    label: "Studio Songe",
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["principal", "secondaire", "embleme", "monogramme"],
      description: "Forme du logo",
    },
    tone: {
      control: "inline-radio",
      options: ["default", "mono"],
      description: "Officielle (couleur) ou monochrome (suit currentColor)",
    },
    size: { control: { type: "number", min: 16, max: 320, step: 4 } },
    href: { control: "text" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Terrain de jeu — combine `variant`, `tone` et `size` depuis les Controls. */
export const Playground: Story = {};

/** Les quatre formes livrées, à hauteur homogène. */
export const Variantes: Story = {
  parameters: { layout: "fullscreen" },
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "var(--ss-space-8)",
        alignItems: "flex-end",
        flexWrap: "wrap",
        padding: "var(--ss-space-8)",
        background: "var(--ss-color-bg)",
      }}
    >
      <Cell label="principal">
        <Logo variant="principal" size={160} />
      </Cell>
      <Cell label="secondaire">
        <Logo variant="secondaire" size={56} />
      </Cell>
      <Cell label="embleme">
        <Logo variant="embleme" size={96} />
      </Cell>
      <Cell label="monogramme">
        <Logo variant="monogramme" size={72} />
      </Cell>
    </div>
  ),
};

/**
 * Déclinaisons officielles de la charte (planche « DÉCLINAISON LOGO ») :
 * version officielle couleur, monochrome sur fond clair, monochrome sur
 * fond foncé — posées sur les fonds de la palette de marque.
 */
export const Variations: Story = {
  parameters: { layout: "fullscreen" },
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(240px, 1fr))",
        gap: "var(--ss-space-6)",
        padding: "var(--ss-space-8)",
        maxWidth: 760,
        background: "var(--ss-color-bg)",
      }}
    >
      {/* Monochrome sur fond foncé (brun) */}
      <VariationTile bg="var(--ss-palette-brun)" caption="Monochrome · fond foncé">
        <Logo variant="principal" size={150} tone="mono" style={{ color: "var(--ss-palette-ivoire)" }} />
      </VariationTile>

      {/* Monochrome sur fond clair (gris) */}
      <VariationTile bg="var(--ss-palette-gris)" border caption="Monochrome · fond clair">
        <Logo variant="principal" size={150} tone="mono" style={{ color: "var(--ss-palette-brun)" }} />
      </VariationTile>

      {/* Version officielle (couleur) sur ivoire */}
      <VariationTile bg="var(--ss-palette-ivoire)" borderAccent caption="Version officielle">
        <Logo variant="principal" size={150} tone="default" />
      </VariationTile>

      {/* Monochrome sur fond foncé (terracotta) */}
      <VariationTile bg="var(--ss-palette-terracotta)" caption="Monochrome · fond terracotta">
        <Logo variant="principal" size={150} tone="mono" style={{ color: "var(--ss-palette-ivoire)" }} />
      </VariationTile>
    </div>
  ),
};

/** Emploi réel dans une barre de nav (logo secondaire, hauteur réduite). */
export const DansLeHeader: Story = {
  name: "Dans le header",
  parameters: { layout: "fullscreen" },
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: 74,
        padding: "0 var(--ss-space-7)",
        borderBottom: "1px solid var(--ss-color-border-soft)",
        background: "var(--ss-color-bg)",
      }}
    >
      <Logo variant="secondaire" size={34} href="#" />
      <span
        style={{
          fontFamily: "var(--ss-font-body)",
          fontSize: "var(--ss-size-body-sm)",
          letterSpacing: "var(--ss-tracking-caps-sm)",
          textTransform: "uppercase",
          color: "var(--ss-color-text-muted)",
        }}
      >
        Le Studio · Approche · Réalisations
      </span>
    </div>
  ),
};

function Cell({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "grid", gap: "var(--ss-space-3)", justifyItems: "center" }}>
      {children}
      <code style={{ fontSize: 12, color: "var(--ss-color-text-muted)" }}>{label}</code>
    </div>
  );
}

function VariationTile({
  bg,
  caption,
  border = false,
  borderAccent = false,
  children,
}: {
  bg: string;
  caption: string;
  border?: boolean;
  borderAccent?: boolean;
  children: React.ReactNode;
}) {
  return (
    <figure style={{ margin: 0, display: "grid", gap: "var(--ss-space-3)" }}>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          aspectRatio: "1 / 1",
          padding: "var(--ss-space-7)",
          borderRadius: 36,
          background: bg,
          border: borderAccent
            ? "1px solid var(--ss-color-line)"
            : border
              ? "1px solid var(--ss-color-border-soft)"
              : "none",
        }}
      >
        {children}
      </div>
      <figcaption
        style={{
          fontFamily: "var(--ss-font-body)",
          fontSize: "var(--ss-size-caption)",
          letterSpacing: "var(--ss-tracking-caps-sm)",
          textTransform: "uppercase",
          color: "var(--ss-color-text-muted)",
          textAlign: "center",
        }}
      >
        {caption}
      </figcaption>
    </figure>
  );
}
