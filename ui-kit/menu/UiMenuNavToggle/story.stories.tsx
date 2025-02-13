import type { Meta, StoryObj } from "@storybook/react"

import { robotoRegular } from "@/sawyer-ui/app/fonts"
import "@/sawyer-ui/app/globals.css"

import UiMenuNavToggle from "./UiMenuNavToggle"
import { options } from "../UiMenuNavButton/UiMenuNavButton"

import { IChildComponentProps } from "@/sawyer-ui/ui-kit/menu/UiMenuNavToggle/UiMenuNavToggle"
import { IMenuItem } from "@/sawyer-ui/types/common"
import MenuItem from "@mui/material/MenuItem"
import UiMenuItemRoutes from "@/sawyer-ui/ui-kit/menu/UiMenuItemRoutes"

const ChildComponent: React.FC<IChildComponentProps> = (props) => {
  const { theme, list, onClose } = props

  return (
    <div className={robotoRegular.className}>
      {(list as IMenuItem[]).map((element, index) => (
        <div key={index}>
          <MenuItem onClick={onClose}>
            <UiMenuItemRoutes theme={theme} item={element} isTextLeft={true} />
          </MenuItem>
        </div>
      ))}
    </div>
  )
}

const items = [
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contacts",
    path: "/contacts",
  },
]

const meta: Meta<typeof UiMenuNavToggle> = {
  title: "Menu/UiMenuNavToggle",
  component: UiMenuNavToggle,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      options: options.theme,
      control: { type: "radio" },
    },
    isAccent: {
      control: { type: "boolean" },
    },
  },
  args: {
    theme: "light-blue",
    list: items,
    title: "Title",
    isAccent: false,
    Component: ChildComponent,
  },
  decorators: [
    (Story) => (
      <div
        className={robotoRegular.className}
        style={{ backgroundColor: "#fff", padding: "10px", width: "200px" }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof UiMenuNavToggle>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
