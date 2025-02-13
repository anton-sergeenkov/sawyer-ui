import type { Meta, StoryObj } from "@storybook/react"

import { robotoRegular } from "@/sawyer-ui/app/fonts"
import "@/sawyer-ui/app/globals.css"

import UiMenuItemHash from "./UiMenuItemHash"
import { options } from "../UiMenuNavButton/UiMenuNavButton"

const meta: Meta<typeof UiMenuItemHash> = {
  title: "Menu/UiMenuItemHash",
  component: UiMenuItemHash,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      options: options.theme,
      control: { type: "radio" },
    },
  },
  args: {
    theme: "light-blue",
    item: {
      title: "About",
      hash: "about",
    },
  },
  decorators: [
    (Story) => (
      <div
        className={robotoRegular.className}
        style={{ backgroundColor: "#fff", padding: "10px" }}
      >
        <div style={{ width: "200px" }}>
          <Story />
        </div>

        <div
          style={{
            border: "1px solid #bfbfbf",
            marginTop: "8px",
            padding: "20px",
          }}
        >
          <h3 id="about">About</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium est aperiam expedita, rerum neque labore praesentium
            sint tempore tenetur ex, quod officia animi nostrum voluptatibus
            omnis, alias magnam dicta quaerat?
          </p>
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof UiMenuItemHash>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
