import { StorybookConfig } from "@storybook/vue3-vite";

const config: StorybookConfig = {
  framework: "@storybook/vue3-vite",
  stories: ["../packages/src/**/*.stories.@(js|ts)"],
  addons: [
    "@storybook/addon-controls",
    "@storybook/addon-actions",
    "@storybook/addon-measure",
    "@storybook/addon-outline",
    "@storybook/addon-docs",
  ],
};

export default config;
