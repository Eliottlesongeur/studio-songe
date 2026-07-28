import type { Meta, StoryObj } from "@storybook/react";
import { Vision } from "./Vision";

const meta = {
  title: "Sections/Vision",
  component: Vision,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Vision>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defaut: Story = { name: "Défaut" };

export const Mobile: Story = {
  name: "Mobile",
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
};
