import type { Meta, StoryObj } from "@storybook/react"

import { robotoRegular } from "@/sawyer-ui/app/fonts"
import "@/sawyer-ui/app/globals.css"

import UiMenuItemGroup, { options } from "./UiMenuItemGroup"
import { options as optionsMenuNavButton } from "../UiMenuNavButton/UiMenuNavButton"

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

const meta: Meta<typeof UiMenuItemGroup> = {
  title: "Menu/UiMenuItemGroup",
  component: UiMenuItemGroup,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      options: optionsMenuNavButton.theme,
      control: { type: "radio" },
    },
    type: {
      options: options.type,
      control: { type: "radio" },
    },
    isAccent: {
      control: { type: "boolean" },
    },
  },
  args: {
    theme: "light-blue",
    type: "routes",
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
} satisfies Meta<typeof UiMenuItemGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
