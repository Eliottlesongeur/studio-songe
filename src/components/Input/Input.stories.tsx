import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
  title: "Composants/Input",
  component: Input,
  parameters: { layout: "padded" },
  args: {
    placeholder: "vous@exemple.fr",
    type: "email",
    invalid: false,
    disabled: false,
    "aria-label": "Adresse e-mail",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "tel", "url", "password", "search"],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 360 }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Seul (sans Field) — piloter `invalid` / `disabled` depuis les Controls. */
export const Playground: Story = {};

/** États : défaut, erreur, désactivé. */
export const Etats: Story = {
  name: "États",
  render: () => (
    <div style={{ display: "grid", gap: "var(--ss-space-4)", maxWidth: 360 }}>
      <Input aria-label="Défaut" placeholder="Défaut" />
      <Input aria-label="En erreur" placeholder="En erreur" invalid defaultValue="valeur invalide" />
      <Input aria-label="Désactivé" placeholder="Désactivé" disabled defaultValue="Non modifiable" />
    </div>
  ),
};
