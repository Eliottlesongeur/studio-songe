import type { Meta, StoryObj } from "@storybook/react";
import { Approche } from "./Approche";

const meta = {
  title: "Sections/Approche",
  component: Approche,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Approche>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defaut: Story = { name: "Défaut" };

export const Mobile: Story = {
  name: "Mobile",
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
};
