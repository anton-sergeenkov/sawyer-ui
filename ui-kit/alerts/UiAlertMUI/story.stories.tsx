import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"

import { robotoRegular } from "@/sawyer-ui/app/fonts"
import "@/sawyer-ui/app/globals.css"

import UiAlertMUI, { options } from "./UiAlertMUI"

const meta: Meta<typeof UiAlertMUI> = {
  title: "Alerts/UiAlertMUI",
  component: UiAlertMUI,
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
    noSpacing: {
      control: { type: "boolean" },
    },
  },
  args: {
    children: "Text for Notification",
    type: "info",
    variant: "outlined",
    noSpacing: true,
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
} satisfies Meta<typeof UiAlertMUI>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
export const CloseButton: Story = {
  args: {
    onClose: fn(),
  },
}
