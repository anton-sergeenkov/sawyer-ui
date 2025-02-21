import type { Meta, StoryObj } from "@storybook/react"

import { robotoRegular } from "@/sawyer-ui/app/fonts"
import "@/sawyer-ui/app/globals.css"

import UiAlert, { options } from "./UiAlert"

const meta: Meta<typeof UiAlert> = {
  title: "Alerts/UiAlert",
  component: UiAlert,
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
} satisfies Meta<typeof UiAlert>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
