import type { Meta, StoryObj } from "@storybook/react"

import { robotoRegular } from "@/sawyer-react-lib/app/fonts"
import "@/sawyer-react-lib/app/globals.css"

import UiLayoutCards, {
  options,
} from "@/sawyer-react-lib/ui-kit/layout/UiLayoutCards"

import { ThemeMode as ThemeModeLink } from "@/sawyer-react-lib/ui-kit/basic/UiLink"

import coverImage from "./img/image.svg"

const items = [
  {
    title: "Title",
    link: "https://letscode-dev.github.io/",
    img: coverImage,
    description: "School of Frontend Development, courses and mentoring",
    links: [
      { name: "Website", link: "https://letscode-dev.github.io/" },
      { name: "YouTube", link: "https://www.youtube.com/c/letscode-dev" },
    ],
  },
]

const meta: Meta<typeof UiLayoutCards> = {
  title: "Layout/UiLayoutCards",
  component: UiLayoutCards,
  argTypes: {
    theme: {
      options: options.theme,
      control: { type: "radio" },
    },
    isOptions: {
      control: { type: "boolean" },
    },
  },
  args: {
    items,
    isOptions: false,
    theme: "light",
    themeLink: {
      mode: ThemeModeLink.DARK_UNDERLINED,
    },
  },
  decorators: [
    (Story) => (
      <div className={robotoRegular.className}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof UiLayoutCards>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    isOptions: true,
    theme: "light",
  },
}
