import cn from "classnames"
import { checkThemeMode } from "../../utils"

import styles from "./TypographyGradientElement.module.css"

// [UiKit]
// import { TypographyGradientElement } from "@/sawyer-react-lib/ui-kit"
const PROPS = {
  className: "",
  theme: {
    mode: ["darkblue-blue"],
  },
  children: <></>,
}

const TypographyGradientElement = (props) => {
  const { className, theme, children } = props

  const stylesTheme = checkThemeMode(theme, styles)

  return (
    <div className={cn(stylesTheme, styles.item, className)}>{children}</div>
  )
}

export default TypographyGradientElement
