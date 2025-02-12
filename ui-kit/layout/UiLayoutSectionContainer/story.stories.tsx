import type { Meta, StoryObj } from "@storybook/react"

import { robotoRegular } from "@/sawyer-ui/app/fonts"
import "@/sawyer-ui/app/globals.css"

import UiLayoutSectionContainer from "./UiLayoutSectionContainer"

const meta: Meta<typeof UiLayoutSectionContainer> = {
  title: "Layout/UiLayoutSectionContainer",
  component: UiLayoutSectionContainer,
  tags: ["autodocs"],
  argTypes: {
    isNoPadding: {
      control: { type: "boolean" },
    },
  },
  args: {
    children:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
} satisfies Meta<typeof UiLayoutSectionContainer>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    isNoPadding: false,
  },
}
