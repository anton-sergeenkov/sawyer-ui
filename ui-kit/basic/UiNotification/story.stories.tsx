import type { Meta, StoryObj } from "@storybook/react"

import { robotoRegular } from "@/sawyer-ui/app/fonts"
import "@/sawyer-ui/app/globals.css"

import UiNotification, { options } from "./UiNotification"

const meta: Meta<typeof UiNotification> = {
  title: "Basic/UiNotification",
  component: UiNotification,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      options: options.theme,
      control: { type: "radio" },
    },
    noSpacing: {
      control: { type: "boolean" },
    },
  },
  args: {
    children: "Text for Notification",
    theme: "info",
    noSpacing: false,
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
} satisfies Meta<typeof UiNotification>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
