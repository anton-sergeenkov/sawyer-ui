"use client"

// import cn from "classnames"
import Link from "next/link"
import { usePathname } from "next/navigation"
import UiMenuNavButton, {
  TTheme as TThemeMenuButton,
} from "@/sawyer-ui/ui-kit/menu/UiMenuNavButton"
import type { IMenuItem } from "@/sawyer-ui/types/common"

// import styles from "./styles.module.css"

/* FIXME: Import
import UiMenuItemRoutes from "@/sawyer-ui/ui-kit/menu/UiMenuItemRoutes"
*/

interface IProps {
  theme?: TThemeMenuButton
  item: IMenuItem
  isAccent?: boolean
  isTextLeft?: boolean
}

const UiMenuItemRoutes: React.FC<IProps> = (props) => {
  const { theme, item, isAccent = false, isTextLeft = false } = props

  const pathname = usePathname()

  return (
    <Link href={item.path}>
      <UiMenuNavButton
        theme={theme}
        isAccent={isAccent}
        isActive={pathname === item.path}
        isTextLeft={isTextLeft}
      >
        {item.title}
      </UiMenuNavButton>
    </Link>
  )
}

export default UiMenuItemRoutes
