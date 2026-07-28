import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "Ivoire",
      values: [
        { name: "Ivoire", value: "#FFFBF8" },
        { name: "Gris clair", value: "#EBEBEB" },
        { name: "Brun foncé", value: "#4A3F36" },
      ],
    },
    layout: "centered",
  },
};

export default preview;
