import type { Meta, StoryObj } from "@storybook/react"

import { robotoRegular } from "@/sawyer-ui/app/fonts"
import "@/sawyer-ui/app/globals.css"

import UiMenuItemRoutes from "./UiMenuItemRoutes"
import { options } from "../UiMenuNavButton/UiMenuNavButton"

const items = {
  title: "Contacts",
  path: "/contacts",
}

const meta: Meta<typeof UiMenuItemRoutes> = {
  title: "Menu/UiMenuItemRoutes",
  component: UiMenuItemRoutes,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      options: options.theme,
      control: { type: "radio" },
    },
    isAccent: { control: { type: "boolean" } },
    isTextLeft: { control: { type: "boolean" } },
  },
  args: {
    theme: "light-blue",
    item: items,
    isAccent: false,
    isTextLeft: false,
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
} satisfies Meta<typeof UiMenuItemRoutes>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
