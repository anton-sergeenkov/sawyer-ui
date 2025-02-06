import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"

import UiButton from "@/sawyer-react-lib/ui-kit/basic/UiButton"

const meta: Meta<typeof UiButton> = {
  title: "Ui-Kit/UiButton",
  component: UiButton,
  argTypes: {
    variant: {
      options: ["text", "outlined", "contained"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
  },
  args: {
    buttonProps: {
      onClick: fn(),
    },
    children: "Hello",
  },
} satisfies Meta<typeof UiButton>

export default meta

type Story = StoryObj<typeof meta>

export const First: Story = {
  args: {
    buttonProps: {
      onClick: fn(),
    },
  },
}
