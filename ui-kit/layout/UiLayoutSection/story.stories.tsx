import type { Meta, StoryObj } from "@storybook/react"

import { robotoRegular } from "@/sawyer-ui/app/fonts"
import "@/sawyer-ui/app/globals.css"

import UiLayoutSection, { options } from "./UiLayoutSection"

const meta: Meta<typeof UiLayoutSection> = {
  title: "Layout/UiLayoutSection",
  component: UiLayoutSection,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      options: options.theme,
      control: { type: "radio" },
    },
    fullWidth: { control: { type: "boolean" } },
    isSpacingY: { control: { type: "boolean" } },
    isSpacingX: { control: { type: "boolean" } },
  },
  args: {
    children:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fullWidth: false,
    isSpacingX: true,
    isSpacingY: true,
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
} satisfies Meta<typeof UiLayoutSection>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    theme: "header-footer",
  },
}
