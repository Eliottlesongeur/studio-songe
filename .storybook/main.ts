import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-vite";

const nextImageMock = fileURLToPath(new URL("./next-image-mock.tsx", import.meta.url));

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  staticDirs: ["../public"],
  // Next impose `jsx: preserve` dans tsconfig.json, ce qui pousse esbuild vers
  // le runtime JSX "classic" (React.createElement) → "React is not defined".
  // On force le runtime automatique côté Storybook, sans toucher au tsconfig.
  async viteFinal(config) {
    config.esbuild = { ...config.esbuild, jsx: "automatic" };
    // `next/image` n'a pas de runtime sous Vite → on l'alias vers un mock <img>.
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...(config.resolve.alias as Record<string, string> | undefined),
      "next/image": nextImageMock,
    };
    return config;
  },
};

export default config;
