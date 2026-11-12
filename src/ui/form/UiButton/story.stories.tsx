import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { fn } from "storybook/test"
import { ArrowCircleDown } from "@phosphor-icons/react"

import { robotoRegular } from "../../../fonts"

import UiButton, { options } from "./UiButton"

const meta: Meta<typeof UiButton> = {
  title: "Form/UiButton",
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
    isMenuButton: {
      control: { type: "boolean" },
    },
  },
  args: {
    theme: "basic",
    children: "Button Content",
    variant: "contained",
    color: "primary",
    size: "small",
    disabled: false,
    isMenuButton: false,
    onClick: fn(),
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
    endIcon: <ArrowCircleDown weight="bold" />,
  },
}
