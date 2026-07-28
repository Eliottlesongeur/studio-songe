import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta = {
  title: "Composants/Textarea",
  component: Textarea,
  parameters: { layout: "padded" },
  args: {
    placeholder: "Je souhaite réaménager…",
    rows: 4,
    invalid: false,
    disabled: false,
    "aria-label": "Votre projet",
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 420 }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const EnErreur: Story = {
  name: "En erreur",
  args: { invalid: true, defaultValue: "Trop court" },
};
