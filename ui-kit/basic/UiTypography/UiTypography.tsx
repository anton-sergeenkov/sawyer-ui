import cn from "classnames"
import { checkTheme } from "../../utils"
import { robotoLight } from "@/sawyer-ui/app/fonts"

import styles from "./styles.module.css"

export const options = {
  theme: ["dark-filled", "light-outline"],
  tag: ["h1", "h2", "h3", "p"],
}

type TTheme = "dark-filled" | "light-outline"
type TTag = "h1" | "h2" | "h3" | "p"

interface IProps {
  theme?: TTheme
  className?: string
  tag?: TTag
  children: React.ReactNode
}

const UiTypography: React.FC<IProps> = (props) => {
  const { theme, className, tag, children } = props

  const stylesTheme = checkTheme(theme, styles)

  switch (tag) {
    case "h1":
      return (
        <h1 className={cn(styles.h1, robotoLight.className, className)}>
          {children}
        </h1>
      )

    case "h2":
      return (
        <h2 className={cn(styles.h2, robotoLight.className, className)}>
          <span className={cn(styles.item, stylesTheme)}>{children}</span>
        </h2>
      )

    case "h3":
      return <h3 className={cn(styles.h3, className)}>{children}</h3>

    case "p":
      return <p className={cn(styles.p, className)}>{children}</p>

    default:
      return <>{children}</>
  }
}

export default UiTypography
