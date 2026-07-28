import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Filters } from "./Filters";

const items = [
  { label: "Tous", value: "tous" },
  { label: "Résidences", value: "residences" },
  { label: "Commerces", value: "commerces" },
  { label: "Bureaux", value: "bureaux" },
];

const meta = {
  title: "Composants/Filters",
  component: Filters,
  parameters: { layout: "padded" },
  args: { items, defaultValue: "tous", ariaLabel: "Filtrer les réalisations" },
  tags: ["autodocs"],
} satisfies Meta<typeof Filters>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Non contrôlé — l'état actif est géré en interne. */
export const Playground: Story = {};

/** Contrôlé — la sélection pilote l'affichage sous la barre. */
export const Controle: Story = {
  name: "Contrôlé",
  render: (args) => {
    const [value, setValue] = useState("residences");
    return (
      <div style={{ display: "grid", gap: "var(--ss-space-5)" }}>
        <Filters {...args} value={value} onValueChange={setValue} />
        <p
          style={{
            fontFamily: "var(--ss-font-body)",
            fontSize: "var(--ss-size-body-sm)",
            color: "var(--ss-color-text-muted)",
          }}
        >
          Filtre actif : <strong style={{ color: "var(--ss-color-accent)" }}>{value}</strong>
        </p>
      </div>
    );
  },
};
