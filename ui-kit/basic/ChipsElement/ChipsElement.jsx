import { Fragment } from "react"
import cn from "classnames"
import { checkThemeMode } from "../../utils"

import styles from "./ChipsElement.module.css"

// [UiKit]
// import { ChipsElement } from "@/sawyer-react-lib/ui-kit"
const PROPS = {
  className: "",
  theme: {
    mode: [
      // "light",
      "dark",
    ],
  },
  items: ["Item-1", "Item-2", "Item-3"],
  isUserSelect: true,
}

const ChipsElement = (props) => {
  const { className, theme, items, isUserSelect = false } = props

  const stylesTheme = checkThemeMode(theme, styles)

  return (
    <>
      {items.map((element, index) => (
        <Fragment key={index}>
          <span
            className={cn(styles.item, stylesTheme, className)}
            style={{ userSelect: isUserSelect ? "auto" : "none" }}
          >
            {element}
          </span>
        </Fragment>
      ))}
    </>
  )
}

export default ChipsElement
