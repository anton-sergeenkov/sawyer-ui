import cn from "classnames"
import { Fragment } from "react"
import { checkTheme } from "../../utils"
import { robotoLight } from "@/sawyer-react-lib/app/fonts"

import styles from "./styles.module.css"

export const options = {
  theme: ["light", "dark"],
}

interface IProps {
  className?: string
  theme?: "light" | "dark"
  items: string[]
  isUserSelect?: boolean
}

const UiChips: React.FC<IProps> = (props) => {
  const { theme = "light", className, items, isUserSelect = true } = props

  const stylesTheme = checkTheme(theme, styles)

  return (
    <>
      {items.map((element, index) => (
        <Fragment key={index}>
          <span
            className={cn(
              styles.item,
              robotoLight.className,
              stylesTheme,
              className,
            )}
            style={{ userSelect: isUserSelect ? "auto" : "none" }}
          >
            {element}
          </span>
        </Fragment>
      ))}
    </>
  )
}

export default UiChips
