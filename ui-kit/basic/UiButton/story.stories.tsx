import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown"

import { robotoRegular } from "@/sawyer-ui/app/fonts"
import "@/sawyer-ui/app/globals.css"

import UiButton, { options } from "./UiButton"

const meta: Meta<typeof UiButton> = {
  title: "Basic/UiButton",
  component: UiButton,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      options: options.theme,
      control: { type: "radio" },
    },
    variant: {
      options: options.variant,
      control: { type: "radio" },
    },
    color: {
      options: options.color,
      control: { type: "radio" },
    },
    size: {
      options: options.size,
      control: { type: "radio" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
  args: {
    onClick: fn(),
    disabled: false,
    theme: "black",
    children: "Button Content",
    variant: "contained",
    color: "primary",
    size: "small",
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
