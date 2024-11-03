"use client"

// import cn from "classnames"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ITheme } from "@/sawyer-react-lib/types/common"
import MenuButtonElement, {
  ThemeMode as ThemeMenuButtonElement,
} from "@/sawyer-react-lib/ui-kit/menu-navigation/MenuButtonElement"
import type { IMenuItem } from "@/sawyer-react-lib/types/common"

// import styles from "./styles.module.css"

interface IProps {
  theme?: ITheme<ThemeMenuButtonElement>
  item: IMenuItem
  isAccent?: boolean
  isTextLeft?: boolean
}

const MenuItemRoutesElement: React.FC<IProps> = (props) => {
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
