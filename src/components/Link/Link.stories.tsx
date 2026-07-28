import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

const meta = {
  title: "Composants/Link",
  component: Link,
  parameters: { layout: "padded" },
  args: {
    children: "Prendre rendez-vous",
    variant: "inline",
    href: "#",
    external: false,
    onDark: false,
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["inline", "nav", "quiet", "standalone"],
    },
    href: { control: "text" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Terrain de jeu — combine `variant`, `external`, `onDark`. */
export const Playground: Story = {};

/** Lien inline au fil du texte (souligné fin, terracotta au survol). */
export const Inline: Story = {
  render: (args) => (
    <p
      style={{
        fontFamily: "var(--ss-font-body)",
        fontWeight: "var(--ss-font-weight-light)",
        fontSize: "var(--ss-size-body)",
        color: "var(--ss-color-text)",
        lineHeight: "var(--ss-leading-normal)",
        maxWidth: "48ch",
      }}
    >
      Studio Songe conçoit des lieux sur mesure. Pour discuter de votre projet,{" "}
      <Link {...args} variant="inline">
        prenez rendez-vous
      </Link>{" "}
      ou consultez nos{" "}
      <Link href="#" variant="inline">
        réalisations
      </Link>
      .
    </p>
  ),
};

/** Les quatre variantes côte à côte. */
export const Variantes: Story = {
  parameters: { layout: "fullscreen" },
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--ss-space-6)",
        alignItems: "flex-start",
        padding: "var(--ss-space-8)",
        background: "var(--ss-color-bg)",
      }}
    >
      <Row label="inline">
        <Link href="#" variant="inline">
          En savoir plus sur le studio
        </Link>
      </Row>
      <Row label="nav">
        <nav style={{ display: "flex", gap: "var(--ss-space-6)" }}>
          <Link href="#" variant="nav">
            Le Studio
          </Link>
          <Link href="#" variant="nav">
            Approche
          </Link>
          <Link href="#" variant="nav">
            Réalisations
          </Link>
        </nav>
      </Row>
      <Row label="quiet">
        <Link href="#" variant="quiet">
          Mentions légales
        </Link>
      </Row>
      <Row label="standalone">
        <Link href="#" variant="standalone">
          Voir le projet
        </Link>
      </Row>
      <Row label="external">
        <Link href="https://instagram.com" variant="quiet" external>
          Instagram
        </Link>
      </Row>
    </div>
  ),
};

/** Nav — au survol (ou focus clavier), la puce arche signature apparaît à gauche. */
export const NavSurvol: Story = {
  name: "Nav (survol puce)",
  render: () => (
    <nav style={{ display: "flex", gap: "var(--ss-space-6)" }}>
      <Link href="#" variant="nav">Accueil</Link>
      <Link href="#" variant="nav">Projets</Link>
      <Link href="#" variant="nav">Le Studio</Link>
      <Link href="#" variant="nav">Contact</Link>
    </nav>
  ),
};

/** Sur fond foncé (sections brun / footer). */
export const SurFondFonce: Story = {
  name: "Sur fond foncé",
  parameters: { layout: "fullscreen" },
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--ss-space-5)",
        alignItems: "flex-start",
        padding: "var(--ss-space-8)",
        background: "var(--ss-color-bg-alt)",
      }}
    >
      <nav style={{ display: "flex", gap: "var(--ss-space-6)" }}>
        <Link href="#" variant="nav" onDark>
          Le Studio
        </Link>
        <Link href="#" variant="nav" onDark>
          Approche
        </Link>
      </nav>
      <Link href="#" variant="quiet" onDark>
        Confidentialité
      </Link>
      <Link href="#" variant="quiet" onDark external>
        LinkedIn
      </Link>
      <Link href="#" variant="standalone" onDark>
        Voir toutes les réalisations
      </Link>
    </div>
  ),
};

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--ss-space-5)" }}>
      <code
        style={{
          width: 96,
          fontSize: 12,
          color: "var(--ss-color-text-muted)",
        }}
      >
        {label}
      </code>
      {children}
    </div>
  );
}
