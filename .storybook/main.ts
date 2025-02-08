import type { StorybookConfig } from "@storybook/nextjs"

const config: StorybookConfig = {
  stories: [
    "../ui-kit/**/*.mdx",
    "../ui-kit/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../docs/**/*.mdx",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
}
export default config
