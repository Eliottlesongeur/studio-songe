import type { Meta, StoryObj } from "@storybook/react";
import { Bullet } from "./Bullet";

const meta = {
  title: "Marque/Bullet",
  component: Bullet,
  parameters: { layout: "centered" },
  args: { shape: "arch", tone: "accent" },
  argTypes: {
    shape: { control: "inline-radio", options: ["arch", "dot"] },
    tone: { control: "inline-radio", options: ["accent", "line", "current"] },
    size: { control: { type: "number", min: 8, max: 48, step: 2 } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Bullet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

/** Emploi typique : liste à puces « arche » terracotta (charte). */
export const DansUneListe: Story = {
  name: "Dans une liste",
  render: () => (
    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "var(--ss-space-4)" }}>
      {["Étude du lieu et des usages", "Conception sur mesure", "Suivi de chantier"].map((t) => (
        <li
          key={t}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--ss-space-3)",
            fontFamily: "var(--ss-font-body)",
            fontWeight: "var(--ss-font-weight-light)",
            fontSize: "var(--ss-size-body-lg)",
            color: "var(--ss-color-text)",
          }}
        >
          <Bullet shape="arch" tone="accent" />
          {t}
        </li>
      ))}
    </ul>
  ),
};
