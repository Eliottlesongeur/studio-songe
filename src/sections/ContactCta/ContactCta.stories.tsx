import type { Meta, StoryObj } from "@storybook/react";
import { ContactCta } from "./ContactCta";

const meta = {
  title: "Sections/ContactCta",
  component: ContactCta,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ContactCta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defaut: Story = { name: "Défaut" };

export const Mobile: Story = {
  name: "Mobile",
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
};
