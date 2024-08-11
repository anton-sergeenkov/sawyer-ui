"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import MenuButtonElement from "@/sawyer-react-lib/ui-kit/menu-navigation/MenuButtonElement"

// import styles from "./MenuItemRoutesElement.module.css"

// TODO: theme from MenuButtonElement

// [UiKit]
// import { MenuItemRoutesElement } from "@/sawyer-react-lib/ui-kit"
const PROPS = {
  theme: {
    mode: "",
  },
  item: {
    title: "",
    path: "",
  },
  isAccent: true,
  isTextLeft: true,
}

const MenuItemRoutesElement = (props) => {
  const { theme, item, isAccent, isTextLeft } = props

  const pathname = usePathname()

  return (
    <Link href={item.path}>
      <MenuButtonElement
        theme={theme}
        isAccent={isAccent}
        isActive={pathname === item.path}
        isTextLeft={isTextLeft}
      >
        {item.title}
      </MenuButtonElement>
    </Link>
  )
}

export default MenuItemRoutesElement
