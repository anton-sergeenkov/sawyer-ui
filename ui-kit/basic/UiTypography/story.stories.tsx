import type { Meta, StoryObj } from "@storybook/react"

import { robotoRegular } from "@/sawyer-ui/app/fonts"
import "@/sawyer-ui/app/globals.css"

import UiTypography, { options } from "./UiTypography"

const meta: Meta<typeof UiTypography> = {
  title: "Basic/UiTypography",
  component: UiTypography,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      options: options.theme,
      control: { type: "radio" },
    },
    tag: {
      options: options.tag,
      control: { type: "radio" },
    },
  },
  args: {
    children: "Typography",
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
} satisfies Meta<typeof UiTypography>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
