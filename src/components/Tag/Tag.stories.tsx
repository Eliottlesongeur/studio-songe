import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";

const meta = {
  title: "Composants/Tag",
  component: Tag,
  parameters: { layout: "centered" },
  args: { children: "Résidence privée", variant: "soft" },
  argTypes: {
    variant: { control: "inline-radio", options: ["solid", "soft", "outline"] },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variantes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "var(--ss-space-4)", alignItems: "center" }}>
      <Tag variant="solid">Nouveauté</Tag>
      <Tag variant="soft">Résidence privée</Tag>
      <Tag variant="outline">Showroom</Tag>
    </div>
  ),
};
