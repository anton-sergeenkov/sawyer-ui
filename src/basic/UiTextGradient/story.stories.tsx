import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { robotoRegular } from "../../fonts"

import UiTextGradient, { options } from "./UiTextGradient"

const meta: Meta<typeof UiTextGradient> = {
  title: "Basic/UiTextGradient",
  component: UiTextGradient,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      options: options.theme,
      control: { type: "radio" },
    },
  },
  args: {
    theme: "blue-lightblue",
    children: (
      <h2>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </h2>
    ),
  },
  decorators: [
    (Story) => (
      <div
        className={robotoRegular.className}
        style={{ backgroundColor: "#f5f8f7", padding: "10px" }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof UiTextGradient>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
