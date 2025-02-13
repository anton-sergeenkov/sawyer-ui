import type { Meta, StoryObj } from "@storybook/react"
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown"

import { robotoRegular } from "@/sawyer-ui/app/fonts"
import "@/sawyer-ui/app/globals.css"

import UiMenuNavButton, { options } from "./UiMenuNavButton"

const meta: Meta<typeof UiMenuNavButton> = {
  title: "Menu/UiMenuNavButton",
  component: UiMenuNavButton,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      options: options.theme,
      control: { type: "radio" },
    },
    isAccent: { control: { type: "boolean" } },
    isActive: { control: { type: "boolean" } },
    isHoverTransparent: { control: { type: "boolean" } },
    isTextLeft: { control: { type: "boolean" } },
    disabled: { control: { type: "boolean" } },
  },
  args: {
    children: "Content",
    theme: "light-blue",
    isAccent: false,
    isActive: false,
    isHoverTransparent: false,
    isTextLeft: false,
    disabled: false,
  },
  decorators: [
    (Story) => (
      <div
        className={robotoRegular.className}
        style={{ backgroundColor: "#fff", padding: "10px", width: "200px" }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof UiMenuNavButton>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    endIcon: null,
  },
}

export const Icon: Story = {
  args: {
    endIcon: <ArrowCircleDownIcon />,
  },
}
