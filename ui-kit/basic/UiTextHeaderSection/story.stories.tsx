import type { Meta, StoryObj } from "@storybook/react"

import { robotoRegular } from "@/sawyer-ui/app/fonts"
import "@/sawyer-ui/app/globals.css"

import UiTextHeaderSection, { options } from "./UiTextHeaderSection"

const meta: Meta<typeof UiTextHeaderSection> = {
  title: "Basic/UiTextHeaderSection",
  component: UiTextHeaderSection,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      options: options.theme,
      control: { type: "radio" },
    },
  },
  args: {
    theme: "dark-filled",
    children: "Typography",
  },
  decorators: [
    (Story) => (
      <div
        className={robotoRegular.className}
        style={{
          backgroundColor: "#f5f8f7",
          // padding: "10px",
          // border: "1px solid #000",
        }}
      >
        <div style={{ backgroundColor: "#fff" }}>
          <Story />
          <div style={{ border: "1px solid #000" }}>Content</div>
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof UiTextHeaderSection>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
