import type { Meta, StoryObj } from "@storybook/react"

import { robotoRegular } from "@/sawyer-ui/app/fonts"
import "@/sawyer-ui/app/globals.css"

import UiLayoutHeader from "./UiLayoutHeader"

import Header from "./story-component"

const meta: Meta<typeof UiLayoutHeader> = {
  title: "Layout/UiLayoutHeader",
  component: UiLayoutHeader,
  tags: ["autodocs"],

  args: {
    children: <Header />,
  },
  decorators: [
    (Story) => (
      <div
        className={robotoRegular.className}
        style={{ backgroundColor: "#fff", padding: "10px" }}
      >
        <Story />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id omnis
          illo, porro esse sed ipsam doloribus libero quis veniam. Accusantium
          laborum soluta iure? Aspernatur delectus enim ratione aliquid minima
          id?
        </p>
      </div>
    ),
  ],
} satisfies Meta<typeof UiLayoutHeader>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
