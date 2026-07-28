import type { Meta, StoryObj } from "@storybook/react";
import { ProjectCard } from "./ProjectCard";

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=80`;

const meta = {
  title: "Composants/ProjectCard",
  component: ProjectCard,
  parameters: { layout: "padded" },
  args: {
    title: "Maison L.",
    category: "Résidence privée",
    imageSrc: img("photo-1600585154340-be6161a56a0c"),
    imageAlt: "Salon lumineux d'une résidence privée",
    href: "#",
    mask: "arch",
    frame: true,
    frameTone: "accent",
  },
  argTypes: {
    href: { control: "text" },
    // Bascule arche ↔ songe depuis le panneau Controls.
    mask: {
      control: "inline-radio",
      options: ["arch", "songe", "encadre"],
      description: "Forme du masque image",
    },
    frame: {
      control: "boolean",
      description: "Filet fin décalé autour de l'arche",
    },
    frameTone: {
      control: "inline-radio",
      options: ["accent", "border", "line"],
      description: "Couleur du filet",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Carte seule — utilise le contrôle `mask` pour tester arche ou songe. */
export const Defaut: Story = {
  name: "Défaut",
  render: (args) => (
    <div style={{ maxWidth: 320 }}>
      <ProjectCard {...args} />
    </div>
  ),
};

/** Grille de projets — le contrôle `mask` s'applique à toutes les cartes. */
export const Grille: Story = {
  parameters: { layout: "fullscreen" },
  render: (args) => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "var(--ss-space-6)",
        padding: "var(--ss-space-8)",
        background: "var(--ss-color-bg)",
      }}
    >
      <ProjectCard
        title="Maison L."
        category="Résidence privée"
        href="#"
        mask={args.mask}
        imageSrc={img("photo-1600585154340-be6161a56a0c")}
      />
      <ProjectCard
        title="Atelier V."
        category="Showroom"
        href="#"
        mask={args.mask}
        imageSrc={img("photo-1600566753086-00f18fb6b3ea")}
      />
      <ProjectCard
        title="Café S."
        category="Espace commercial"
        href="#"
        mask={args.mask}
        imageSrc={img("photo-1600607687939-ce8a6c25118c")}
      />
    </div>
  ),
};

/** Comparaison figée des deux masques, côte à côte. */
export const Masques: Story = {
  name: "Masques (arche · songe · encadré)",
  render: () => (
    <div style={{ display: "flex", gap: "var(--ss-space-8)", alignItems: "flex-start" }}>
      <div style={{ width: 300 }}>
        <ProjectCard
          title="Maison L."
          category="Résidence privée · arche"
          href="#"
          mask="arch"
          imageSrc={img("photo-1600585154340-be6161a56a0c")}
        />
      </div>
      <div style={{ width: 300 }}>
        <ProjectCard
          title="Maison L."
          category="Résidence privée · songe"
          href="#"
          mask="songe"
          imageSrc={img("photo-1600585154340-be6161a56a0c")}
        />
      </div>
      <div style={{ width: 300 }}>
        <ProjectCard
          title="Maison L."
          category="Résidence privée · encadré"
          href="#"
          mask="encadre"
          frameTone="line"
          imageSrc={img("photo-1600585154340-be6161a56a0c")}
        />
      </div>
    </div>
  ),
};

/** Encadré éditorial — photo dans un cadre en arche à double filet (sauge). */
export const Encadre: Story = {
  name: "Encadré éditorial",
  args: {
    mask: "encadre",
    frameTone: "line",
    title: "Maison L.",
    category: "Résidence privée",
    imageSrc: img("photo-1600585154340-be6161a56a0c"),
  },
  render: (args) => (
    <div style={{ maxWidth: 320 }}>
      <ProjectCard {...args} />
    </div>
  ),
};

export const SansImage: Story = {
  name: "Sans image (placeholder)",
  render: (args) => (
    <div style={{ maxWidth: 320 }}>
      <ProjectCard {...args} imageSrc={undefined} title="Projet à venir" category="Bientôt dévoilé" />
    </div>
  ),
};
