import type { Meta, StoryObj } from "@storybook/react";
import { Hero } from "./Hero";

const meta = {
  title: "Sections/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defaut: Story = { name: "Défaut" };

export const Mobile: Story = {
  name: "Mobile",
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
};
