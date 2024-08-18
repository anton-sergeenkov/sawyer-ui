"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ITheme } from "@/sawyer-react-lib/types/common"
import MenuButtonElement, {
  ThemeMode as ThemeMenuButtonElement,
} from "@/sawyer-react-lib/ui-kit/menu-navigation/MenuButtonElement"

// import styles from "./MenuItemRoutesElement.module.css"

interface IMenuItemRoutesElementItems {
  title: string
  path: string
}

interface IMenuItemRoutesElementProps {
  theme?: ITheme<ThemeMenuButtonElement>
  item: IMenuItemRoutesElementItems
  isAccent?: boolean
  isTextLeft?: boolean
}

const MenuItemRoutesElement: React.FC<IMenuItemRoutesElementProps> = (
  props,
) => {
  const { theme, item, isAccent = false, isTextLeft = false } = props

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
