import cn from "classnames"
import { checkThemeMode } from "../../utils"

import styles from "./LayoutSectionElement.module.css"

// TODO:
// import { LayoutSectionElement } from "@/sawyer-react-lib/ui-kit"
const PROPS = {
  className: "",
  theme: {
    mode: ["header-footer"],
  },
  children: <></>,
}

const LayoutSectionElement = (props) => {
  const { theme, className, children } = props

  const stylesTheme = checkThemeMode(theme, styles)

  return (
    <div className={cn(styles.section, stylesTheme, className)}>{children}</div>
  )
}

export default LayoutSectionElement
