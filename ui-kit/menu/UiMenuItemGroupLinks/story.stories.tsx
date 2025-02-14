import type { Meta, StoryObj } from "@storybook/react"

import { robotoRegular } from "@/sawyer-ui/app/fonts"
import "@/sawyer-ui/app/globals.css"

import UiMenuItemGroupLinks from "./UiMenuItemGroupLinks"
import { options } from "../UiMenuNavButton/UiMenuNavButton"

const items = [
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contacts",
    path: "/contacts",
  },
]

const meta: Meta<typeof UiMenuItemGroupLinks> = {
  title: "Menu/UiMenuItemGroupLinks",
  component: UiMenuItemGroupLinks,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      options: options.theme,
      control: { type: "radio" },
    },
    isAccent: {
      control: { type: "boolean" },
    },
  },
  args: {
    theme: "light-blue",
    list: items,
    title: "Menu",
    isAccent: false,
  },
  decorators: [
    (Story) => (
      <div
        className={robotoRegular.className}
        style={{ backgroundColor: "#fff", padding: "10px", width: "200px" }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof UiMenuItemGroupLinks>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
