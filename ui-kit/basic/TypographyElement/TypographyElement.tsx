import cn from "classnames"
import { checkThemeMode } from "../../utils"
import { ITheme } from "@/sawyer-ui/types/common"
import { robotoLight } from "@/sawyer-ui/app/fonts"

import styles from "./styles.module.css"

export enum ThemeMode {
  DARK_FILLED = "dark-filled",
  LIGHT_OUTLINE = "light-outline",
}

export enum Tag {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  P = "p",
}

interface IProps {
  theme?: ITheme<ThemeMode>
  className?: string
  tag?: Tag
  children: React.ReactNode
}

const TypographyElement: React.FC<IProps> = (props) => {
  const { theme, className, tag, children } = props

  const stylesTheme = checkThemeMode<ThemeMode>(theme, styles)

  switch (tag) {
    case Tag.H1:
      return (
        <h1 className={cn(styles.h1, robotoLight.className, className)}>
          {children}
        </h1>
      )

    case Tag.H2:
      return (
        <h2 className={cn(styles.h2, robotoLight.className, className)}>
          <span className={cn(styles.item, stylesTheme)}>{children}</span>
        </h2>
      )

    case Tag.H3:
      return <h3 className={cn(styles.h3, className)}>{children}</h3>

    case Tag.P:
      return <p className={cn(styles.p, className)}>{children}</p>

    default:
      return <>{children}</>
  }
}

export default TypographyElement
