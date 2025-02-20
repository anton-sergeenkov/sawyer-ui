import cn from "classnames"
import { checkTheme } from "../../utils"
import { robotoLight } from "@/sawyer-ui/app/fonts"

import styles from "./styles.module.css"

export const options = {
  theme: ["dark-filled", "light-outline"],
}

type TTheme = "dark-filled" | "light-outline"

interface IProps {
  theme?: TTheme
  className?: string
  children: React.ReactNode
}

const UiTextHeaderSection: React.FC<IProps> = (props) => {
  const { theme, className, children } = props

  const stylesTheme = checkTheme(theme, styles)

  return (
    <h2 className={cn(styles.h2, robotoLight.className, className)}>
      <span className={cn(styles.item, stylesTheme)}>{children}</span>
    </h2>
  )
}

export default UiTextHeaderSection
