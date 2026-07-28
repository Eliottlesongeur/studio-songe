import type { Meta, StoryObj } from "@storybook/react";
import { Faq } from "./Faq";

const meta = {
  title: "Sections/Faq",
  component: Faq,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Faq>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defaut: Story = { name: "Défaut" };

export const Mobile: Story = {
  name: "Mobile",
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
};
