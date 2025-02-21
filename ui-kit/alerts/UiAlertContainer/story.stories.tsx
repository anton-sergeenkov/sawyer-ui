import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"

import { robotoRegular } from "@/sawyer-ui/app/fonts"
import "@/sawyer-ui/app/globals.css"

import UiAlertContainer from "./UiAlertContainer"
import { options } from "../UiAlert"

const meta: Meta<typeof UiAlertContainer> = {
  title: "Alerts/UiAlertContainer",
  component: UiAlertContainer,
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: options.type,
      control: { type: "radio" },
    },
    variant: {
      options: options.variant,
      control: { type: "radio" },
    },
    noSpacing: { control: { type: "boolean" } },
    isShow: { control: { type: "boolean" } },
  },
  args: {
    children: "Text for Notification",
    type: "info",
    variant: "outlined",
    noSpacing: true,
    isShow: true,
    setIsShow: fn(),
  },
  decorators: [
    (Story) => (
      <div
        className={robotoRegular.className}
        style={{ backgroundColor: "#fff", padding: "10px" }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof UiAlertContainer>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
