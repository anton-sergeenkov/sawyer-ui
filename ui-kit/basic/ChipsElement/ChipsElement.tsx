import { Fragment } from "react"
import cn from "classnames"
import { checkThemeMode } from "../../utils"
import { ITheme } from "@/sawyer-react-lib/types/common"
import styles from "./ChipsElement.module.css"

export enum ThemeMode {
  LIGHT = "light", // Not Used
  DARK = "dark",
}

interface IChipsElement {
  className: string
  theme?: ITheme<ThemeMode>
  items: string[]
  isUserSelect: boolean
}

const ChipsElement: React.FC<IChipsElement> = (props) => {
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
