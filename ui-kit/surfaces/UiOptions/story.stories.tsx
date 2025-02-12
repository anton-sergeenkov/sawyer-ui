import type { Meta, StoryObj } from "@storybook/react"

import { robotoRegular } from "@/sawyer-ui/app/fonts"
import "@/sawyer-ui/app/globals.css"

import UiOptions from "./UiOptions"

const items = [
  { name: "Instagram", link: "https://www.instagram.com/" },
  { name: "YouTube", link: "https://www.youtube.com/" },
]

const meta: Meta<typeof UiOptions> = {
  title: "Surfaces/UiOptions",
  component: UiOptions,
  tags: ["autodocs"],
  args: {
    options: items,
  },
  decorators: [
    (Story) => (
      <div
        className={robotoRegular.className}
        style={{
          backgroundColor: "#fff",
          padding: "10px",
          width: "200px",
          height: "200px",
          position: "relative",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof UiOptions>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
