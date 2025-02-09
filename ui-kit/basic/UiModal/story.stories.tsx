import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"

import { robotoRegular } from "@/sawyer-ui/app/fonts"
import "@/sawyer-ui/app/globals.css"

import UiModal from "./UiModal"

const meta: Meta<typeof UiModal> = {
  title: "Basic/UiModal",
  component: UiModal,
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: { type: "boolean" },
    },
    disableAutoFocus: {
      control: { type: "boolean" },
    },
    isContentClickClose: {
      control: { type: "boolean" },
    },
  },
  args: {
    open: true,
    disableAutoFocus: true,
    isContentClickClose: false,
    onClose: fn(),
    children: (
      <div
        style={{
          width: "350px",
          height: "350px",
          padding: "10px",
        }}
        className={robotoRegular.className}
      >
        Content
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <div className={robotoRegular.className}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof UiModal>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
