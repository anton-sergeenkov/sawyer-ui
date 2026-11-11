import type { StorybookConfig } from "@storybook/nextjs-vite"
import { mergeConfig } from "vite"

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../docs/**/*.mdx",
  ],
  addons: ["@storybook/addon-a11y", "@storybook/addon-docs"],
  framework: "@storybook/nextjs-vite",
  // Картинки историй не инлайнятся в data:-URL: компоненты подставляют src
  // в url() без кавычек, а data:-URL SVG содержит кавычки и ломает стиль
  viteFinal: (config) =>
    mergeConfig(config, { build: { assetsInlineLimit: 0 } }),
}
export default config
