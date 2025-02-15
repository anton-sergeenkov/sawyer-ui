import type { Meta, StoryObj } from "@storybook/react"

import { robotoRegular } from "@/sawyer-ui/app/fonts"
import "@/sawyer-ui/app/globals.css"

import UiLink, { options } from "./UiLink"

const meta: Meta<typeof UiLink> = {
  title: "Basic/UiLink",
  component: UiLink,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      options: options.theme,
      control: { type: "radio" },
    },
  },
  args: {
    href: "https://fonts.google.com/",
    children: "Link",
    theme: "blue-underlined",
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
} satisfies Meta<typeof UiLink>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
