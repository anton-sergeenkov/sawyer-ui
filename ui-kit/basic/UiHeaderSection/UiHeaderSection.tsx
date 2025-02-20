import cn from "classnames"
import { checkTheme } from "../../utils"
import { robotoLight } from "@/sawyer-ui/app/fonts"

import styles from "./styles.module.css"

export const options = {
  theme: ["basic", "dark-filled", "light-filled"],
}

type TTheme = "basic" | "dark-filled" | "light-filled"

interface IProps {
  theme?: TTheme
  className?: string
  children: React.ReactNode
}

const UiHeaderSection: React.FC<IProps> = (props) => {
  const { theme = "basic", className, children } = props

  const stylesTheme = checkTheme(theme, styles)

  if (theme === "dark-filled" || theme === "light-filled") {
    return (
      <h2 className={cn(styles.headerFilled, robotoLight.className, className)}>
        <span className={cn(styles.itemFilled, stylesTheme)}>{children}</span>
      </h2>
    )
  }

  return (
    <h2
      className={cn(
        styles.headerBasic,
        robotoLight.className,
        className,
        stylesTheme,
      )}
    >
      {children}
    </h2>
  )
}

export default UiHeaderSection
