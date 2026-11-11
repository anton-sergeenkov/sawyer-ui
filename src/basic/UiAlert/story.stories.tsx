import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { fn } from "storybook/test"

import { robotoRegular } from "../../fonts"

import UiAlert, { options } from "./UiAlert"

const meta: Meta<typeof UiAlert> = {
  title: "Basic/UiAlert",
  component: UiAlert,
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
    type: "success",
    variant: "standard",
    noSpacing: true,
    isShow: true,
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
export const CloseButton: Story = {
  args: {
    setIsShow: fn(),
  },
}
