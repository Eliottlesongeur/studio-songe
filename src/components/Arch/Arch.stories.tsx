import type { Meta, StoryObj } from "@storybook/react";
import { Arch } from "./Arch";

const meta = {
  title: "Marque/Arche",
  component: Arch,
  parameters: { layout: "centered" },
  args: { size: 220, tone: "surface" },
  argTypes: {
    size: { control: { type: "number", min: 40, max: 480, step: 10 } },
    tone: {
      control: "inline-radio",
      options: ["surface", "accent-soft", "brand"],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Arch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Teintes: Story = {
  name: "Teintes",
  parameters: { layout: "fullscreen" },
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "var(--ss-space-7)",
        alignItems: "flex-end",
        padding: "var(--ss-space-8)",
        background: "var(--ss-color-bg)",
      }}
    >
      <Arch size={200} tone="surface" />
      <Arch size={200} tone="accent-soft" />
      <Arch size={200} tone="brand" />
    </div>
  ),
};
