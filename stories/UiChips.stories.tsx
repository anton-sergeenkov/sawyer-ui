import type { Meta, StoryObj } from "@storybook/react"

import { robotoRegular } from "@/sawyer-react-lib/app/fonts"
import "@/sawyer-react-lib/app/globals.css"

import UiChips, { options } from "@/sawyer-react-lib/ui-kit/basic/UiChips"

// TODO: code
// import UiChips from "@/sawyer-react-lib/ui-kit/basic/UiChips"

const meta: Meta<typeof UiChips> = {
  title: "Basic/UiChips",
  component: UiChips,
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
