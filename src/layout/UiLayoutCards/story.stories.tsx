import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { robotoRegular } from "../../fonts"

import UiLayoutCards, { options } from "./UiLayoutCards"
import { options as optionsUiLink } from "../../basic/UiLink"

import coverImage from "../../../resources/img/card.svg"

const items = [
  {
    title: "Title",
    link: "https://www.youtube.com/",
    img: coverImage,
    description: "School of Frontend Development, courses and mentoring",
    links: [
      { name: "Instagram", link: "https://www.instagram.com/" },
      { name: "YouTube", link: "https://www.youtube.com/" },
    ],
  },
]

const meta: Meta<typeof UiLayoutCards> = {
  title: "Layout/UiLayoutCards",
  component: UiLayoutCards,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      options: options.theme,
      control: { type: "radio" },
    },
    themeLink: {
      options: optionsUiLink.theme,
      control: { type: "radio" },
    },
    isOptions: {
      control: { type: "boolean" },
    },
  },
  args: {
    theme: "light",
    themeLink: "dark-underlined",
    items,
    isOptions: true,
  },
  decorators: [
    (Story) => (
      <div
        className={robotoRegular.className}
        style={{ backgroundColor: "#f5f8f7", padding: "10px" }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof UiLayoutCards>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
