import type { Meta, StoryObj } from "@storybook/react"

import { robotoRegular } from "@/sawyer-ui/app/fonts"
import "@/sawyer-ui/app/globals.css"

import UiHeaderSection, { options } from "./UiHeaderSection"

const meta: Meta<typeof UiHeaderSection> = {
  title: "Basic/UiHeaderSection",
  component: UiHeaderSection,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      options: options.theme,
      control: { type: "radio" },
    },
  },
  args: {
    theme: "basic",
    children: "Header Section",
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
} satisfies Meta<typeof UiHeaderSection>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
