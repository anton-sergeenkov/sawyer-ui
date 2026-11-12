import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { robotoRegular } from "../../../fonts"

import UiTypography, { options } from "./UiTypography"

const meta: Meta<typeof UiTypography> = {
  title: "Basic/UiTypography",
  component: UiTypography,
  tags: ["autodocs"],
  argTypes: {
    tag: {
      options: options.tag,
      control: { type: "radio" },
    },
    noSpacing: {
      control: { type: "boolean" },
    },
  },
  args: {
    tag: "h1",
    noSpacing: false,
    children: "Typography",
  },
  decorators: [
    (Story) => (
      <div
        className={robotoRegular.className}
        style={{
          backgroundColor: "#f5f8f7",
        }}
      >
        <div style={{ backgroundColor: "#fff" }}>
          <Story />
          <div style={{ border: "1px solid #000" }}>Content</div>
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof UiTypography>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
