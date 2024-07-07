import cn from "classnames"
import { checkThemeMode } from "../../utils"

import styles from "./TypographyElement.module.css"

// [UiKit]
// import { TypographyElement } from "@/sawyer-react-lib/ui-kit"
const PROPS = {
  className: "",
  theme: {
    mode: [
      // "light",
      // "dark",
      "dark-filled",
      "light-outline",
    ],
  },
  tag: ["h1", "h2", "h3", "p"],
  children: <></>,
}

const TypographyElement = (props) => {
  const { className, theme, tag, children } = props

  const stylesTheme = checkThemeMode(theme, styles)

  switch (tag) {
    case "h1":
      return <h1 className={cn(styles.h1, className)}>{children}</h1>

    case "h2":
      return (
        <h2 className={cn(styles.h2, className)}>
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

export default TypographyElement
