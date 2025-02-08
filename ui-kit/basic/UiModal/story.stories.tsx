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
  },
  args: {
    open: true,
    onClose: fn(),
    children: (
      <div
        style={{
          border: "1px solid #000",
          width: "200px",
          height: "200px",
          background: "#fff",
        }}
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
