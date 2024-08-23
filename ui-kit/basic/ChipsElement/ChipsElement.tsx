import { Fragment } from "react"
import cn from "classnames"
import { checkThemeMode } from "../../utils"
import { ITheme } from "@/sawyer-react-lib/types/common"
import styles from "./ChipsElement.module.css"

export enum ThemeMode {
  LIGHT = "light", // Not Used
  DARK = "dark",
}

interface IChipsElementProps {
  className?: string
  theme?: ITheme<ThemeMode>
  items: string[]
  isUserSelect: boolean
}

const ChipsElement: React.FC<IChipsElementProps> = (props) => {
  const { theme, className, items, isUserSelect = false } = props

  const stylesTheme = checkThemeMode<ThemeMode>(theme, styles)

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
