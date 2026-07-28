import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";

const meta = {
  title: "Sections/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    sticky: { control: "boolean" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defaut: Story = {
  name: "Défaut",
  render: (args) => (
    <div style={{ minHeight: "160vh" }}>
      <Navbar {...args} />
      <p style={{ padding: "var(--ss-space-6) var(--ss-gutter)" }}>
        Faites défiler pour voir la barre rester collée en haut.
      </p>
    </div>
  ),
};

export const Mobile: Story = {
  name: "Mobile (menu déroulant)",
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
  render: (args) => (
    <div style={{ minHeight: "120vh" }}>
      <Navbar {...args} />
    </div>
  ),
};
