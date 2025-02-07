import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"

import { robotoRegular } from "@/sawyer-react-lib/app/fonts"
import "@/sawyer-react-lib/app/globals.css"

import UiButton, { options } from "@/sawyer-react-lib/ui-kit/basic/UiButton"
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown"

// TODO: code
// import UiButton from "@/sawyer-react-lib/ui-kit/basic/UiButton"

const meta: Meta<typeof UiButton> = {
  title: "Basic/UiButton",
  component: UiButton,
  argTypes: {
    variant: {
      options: options.variant,
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
    children: "Button",
  },
  decorators: [
    (Story) => (
      <div className={robotoRegular.className}>
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
