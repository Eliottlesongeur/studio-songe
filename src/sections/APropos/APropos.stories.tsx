import type { Meta, StoryObj } from "@storybook/react";
import { APropos } from "./APropos";

const meta = {
  title: "Sections/APropos",
  component: APropos,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof APropos>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defaut: Story = { name: "Défaut" };

export const Mobile: Story = {
  name: "Mobile",
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
};
