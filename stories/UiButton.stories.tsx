import type { Meta, StoryObj } from "@storybook/react"

import { UiButton } from "./UiButton"

const meta: Meta<typeof UiButton> = {
  title: "Ui-Kit/UiButton",
  component: UiButton,
  args: {
    title: "Hello",
    variant: "contained",
  },
} satisfies Meta<typeof UiButton>

export default meta

type Story = StoryObj<typeof meta>

export const First: Story = {
  args: {
    title: "First",
    variant: "outlined",
  },
}
