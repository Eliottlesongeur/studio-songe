import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./Container";

const meta = {
  title: "Layout/Container",
  component: Container,
  parameters: { layout: "fullscreen" },
  args: { size: "default" },
  argTypes: {
    size: { control: "inline-radio", options: ["narrow", "default", "wide"] },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <div style={{ background: "var(--ss-color-surface)", paddingBlock: "var(--ss-space-8)" }}>
      <Container {...args}>
        <div
          style={{
            background: "var(--ss-color-bg)",
            border: "1px dashed var(--ss-color-border-soft)",
            borderRadius: "var(--ss-radius-md)",
            padding: "var(--ss-space-7)",
            fontFamily: "var(--ss-font-body)",
            color: "var(--ss-color-text-muted)",
            textAlign: "center",
          }}
        >
          Contenu centré dans le Container — largeur « {args.size} ».
        </div>
      </Container>
    </div>
  ),
};
