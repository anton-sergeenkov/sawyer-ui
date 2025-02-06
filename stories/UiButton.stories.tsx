import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"

import UiButton from "@/sawyer-react-lib/ui-kit/basic/UiButton"
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown"

const meta: Meta<typeof UiButton> = {
  title: "Ui-Kit/UiButton",
  component: UiButton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["text", "outlined", "contained"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
  args: {
    onClick: fn(),
    disabled: false,
    children: "Button",
  },
} satisfies Meta<typeof UiButton>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}

export const EndIcon: Story = {
  args: {
    endIcon: <ArrowCircleDownIcon />,
  },
}
