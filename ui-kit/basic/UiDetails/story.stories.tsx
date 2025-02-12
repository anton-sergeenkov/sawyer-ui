import type { Meta, StoryObj } from "@storybook/react"

import { robotoRegular } from "@/sawyer-ui/app/fonts"
import "@/sawyer-ui/app/globals.css"

import UiDetails from "./UiDetails"

const meta: Meta<typeof UiDetails> = {
  title: "Basic/UiDetails",
  component: UiDetails,
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: { type: "boolean" },
    },
  },
  args: {
    title: "Title",
    children: "Content",
    isOpen: false,
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
} satisfies Meta<typeof UiDetails>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
