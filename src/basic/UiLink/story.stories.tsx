import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { robotoRegular } from "../../fonts"

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
    theme: "blue-underlined",
    href: "https://fonts.google.com/",
    children: "Link",
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
