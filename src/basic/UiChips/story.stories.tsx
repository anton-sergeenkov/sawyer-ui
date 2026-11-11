import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { robotoRegular } from "../../fonts"

import UiChips, { options } from "./UiChips"

const meta: Meta<typeof UiChips> = {
  title: "Basic/UiChips",
  component: UiChips,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      options: options.theme,
      control: { type: "radio" },
    },
    isUserSelect: {
      control: { type: "boolean" },
    },
  },
  args: {
    theme: "light",
    items: ["One", "Two", "Three", "Four"],
    isUserSelect: true,
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
} satisfies Meta<typeof UiChips>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
