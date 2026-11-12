import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { robotoRegular } from "../../../fonts"

import UiJsonFormatter from "./UiJsonFormatter"

const meta: Meta<typeof UiJsonFormatter> = {
  title: "Basic/UiJsonFormatter",
  component: UiJsonFormatter,
  tags: ["autodocs"],
  args: {
    data: {
      name: "Tony",
      age: 23,
    },
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
} satisfies Meta<typeof UiJsonFormatter>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
