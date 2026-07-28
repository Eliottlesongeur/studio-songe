import type { Meta, StoryObj } from "@storybook/react";
import { SignatureLine } from "./SignatureLine";

const meta = {
  title: "Marque/Ligne signature",
  component: SignatureLine,
  parameters: { layout: "centered" },
  args: { orientation: "vertical", length: 96, thickness: 1.5 },
  argTypes: {
    orientation: { control: "inline-radio", options: ["vertical", "horizontal"] },
    length: { control: { type: "number", min: 16, max: 400, step: 4 } },
    thickness: { control: { type: "number", min: 1, max: 8, step: 0.5 } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SignatureLine>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

/** Accent vertical sauge tel qu'employé dans le hero de la charte. */
export const AccentHero: Story = {
  name: "Accent hero",
  parameters: { layout: "fullscreen" },
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "var(--ss-space-5)",
        alignItems: "flex-start",
        padding: "var(--ss-space-8)",
        background: "var(--ss-color-bg)",
      }}
    >
      <SignatureLine length={120} />
      <span
        style={{
          fontFamily: "var(--ss-font-body)",
          fontSize: "var(--ss-size-caption)",
          letterSpacing: "var(--ss-tracking-caps-sm)",
          textTransform: "uppercase",
          color: "var(--ss-color-text-muted)",
          maxWidth: 220,
        }}
      >
        Architecture d'intérieur — des espaces sur mesure, pensés pour être vécus.
      </span>
    </div>
  ),
};
