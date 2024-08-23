import cn from "classnames"
import { checkThemeMode } from "../../utils"
import { ITheme } from "@/sawyer-react-lib/types/common"

import styles from "./LinkElement.module.css"

export enum ThemeMode {
  BLUE_UNDERLINED_THIN = "blue-underlined-thin",
  DARK_UNDERLINED = "dark-underlined",
}

interface ILinkElementProps {
  theme?: ITheme<ThemeMode>
  className?: string
  children: React.ReactNode
  href: string
  target?: string // "_blank"
}

const LinkElement: React.FC<ILinkElementProps> = (props) => {
  const { theme, className, href, target = "_blank", children } = props

  const stylesTheme = checkThemeMode<ThemeMode>(theme, styles)

  return (
    <a
      className={cn(styles.item, stylesTheme, className)}
      href={href}
      target={target}
    >
      {children}
    </a>
  )
}

export default LinkElement
