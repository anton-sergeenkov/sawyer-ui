import cn from "classnames"
import { Fragment } from "react"
import { checkThemeMode } from "../../utils"
import { ITheme } from "@/sawyer-react-lib/types/common"
import { robotoLight } from "@/sawyer-react-lib/app/fonts"

import styles from "./styles.module.css"

export enum ThemeMode {
  LIGHT = "light", // Not Used
  DARK = "dark",
}

interface IProps {
  className?: string
  theme?: ITheme<ThemeMode>
  items: string[]
  isUserSelect: boolean
}

const ChipsElement: React.FC<IProps> = (props) => {
  const { theme, className, items, isUserSelect = false } = props

  const stylesTheme = checkThemeMode<ThemeMode>(theme, styles)

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

export default ChipsElement
