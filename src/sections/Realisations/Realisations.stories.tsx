import type { Meta, StoryObj } from "@storybook/react";
import { Realisations } from "./Realisations";

const meta = {
  title: "Sections/Realisations",
  component: Realisations,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Realisations>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defaut: Story = { name: "Défaut" };

export const Mobile: Story = {
  name: "Mobile",
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
};
