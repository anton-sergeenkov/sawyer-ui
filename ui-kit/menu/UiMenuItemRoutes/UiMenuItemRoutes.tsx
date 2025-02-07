"use client"

// import cn from "classnames"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ITheme } from "@/sawyer-react-lib/types/common"
import UiMenuNavButton, {
  ThemeMode as ThemeUiMenuButton,
} from "@/sawyer-react-lib/ui-kit/menu/UiMenuNavButton"
import type { IMenuItem } from "@/sawyer-react-lib/types/common"

// import styles from "./styles.module.css"

interface IProps {
  theme?: ITheme<ThemeUiMenuButton>
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
