import type { Meta, StoryObj } from "@storybook/react"

import { robotoRegular } from "@/sawyer-ui/app/fonts"
import "@/sawyer-ui/app/globals.css"

import UiTypographyGradient, { options } from "./UiTypographyGradient"

const meta: Meta<typeof UiTypographyGradient> = {
  title: "Basic/UiTypographyGradient",
  component: UiTypographyGradient,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      options: options.theme,
      control: { type: "radio" },
    },
  },
  args: {
    theme: "blue-lightblue",
    children: <h2>Typography Gradient Text Sample</h2>,
  },
  decorators: [
    (Story) => (
      <div
        className={robotoRegular.className}
        style={{ backgroundColor: "#f5f8f7", padding: "10px" }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof UiTypographyGradient>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
