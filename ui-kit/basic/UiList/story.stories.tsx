import type { Meta, StoryObj } from "@storybook/react"

import { robotoRegular } from "@/sawyer-ui/app/fonts"
import "@/sawyer-ui/app/globals.css"

import UiList from "./UiList"

const itemsString = ["First", "Second", "Third", "Fourth", "Fifth"]
const itemsReact = [
  <b>First</b>,
  <b>Second</b>,
  <b>Third</b>,
  <b>Fourth</b>,
  <b>Fifth</b>,
]

const meta: Meta<typeof UiList> = {
  title: "Basic/UiList",
  component: UiList,
  tags: ["autodocs"],
  args: {
    items: itemsString,
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
} satisfies Meta<typeof UiList>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
export const ReactItems: Story = {
  args: {
    items: itemsReact,
  },
}
export const WithTitle: Story = {
  args: {
    title: "Title",
  },
}
