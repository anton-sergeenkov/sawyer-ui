import type { Meta, StoryObj } from "@storybook/react"

import { robotoRegular } from "@/sawyer-ui/app/fonts"
import "@/sawyer-ui/app/globals.css"

import UiSocialLinks from "./UiSocialLinks"

import coverInstagram from "../../../resources/img/social/instagram.svg"
import coverLinkedin from "../../../resources/img/social/linkedin.svg"
import coverTelegram from "../../../resources/img/social/telegram.svg"

const items = [
  {
    img: coverInstagram,
    title: "Instagram",
    link: "https://www.instagram.com/",
  },
  {
    img: coverLinkedin,
    title: "Linkedin",
    link: "https://www.linkedin.com/",
  },
  {
    img: coverTelegram,
    title: "Telegram",
    link: "https://web.telegram.org/",
  },
]

const meta: Meta<typeof UiSocialLinks> = {
  title: "Surfaces/UiSocialLinks",
  component: UiSocialLinks,
  tags: ["autodocs"],
  args: {
    list: items,
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
} satisfies Meta<typeof UiSocialLinks>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
