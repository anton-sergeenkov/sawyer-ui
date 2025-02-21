import cn from "classnames"
import { checkTheme } from "../../utils"

import styles from "./styles.module.css"

export const options = {
  theme: ["info", "success", "warning", "error"],
}

type TTheme = "info" | "success" | "warning" | "error"

interface IProps {
  theme?: TTheme
  className?: string
  noSpacing?: boolean
  children: React.ReactNode
}

const UiAlert: React.FC<IProps> = (props) => {
  const { className, theme = "info", noSpacing = false, children } = props

  const stylesTheme = checkTheme(theme, styles)
  const classNoSpacing = noSpacing ? styles.noSpacing : ""

  return (
    <div className={cn(styles.item, stylesTheme, classNoSpacing, className)}>
      {children}
    </div>
  )
}

export default UiAlert
