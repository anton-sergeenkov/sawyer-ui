import cn from "classnames"
import { checkThemeMode } from "../../utils"
import { ITheme } from "@/sawyer-react-lib/types/common"

import styles from "./LayoutSectionElement.module.css"

export enum ThemeMode {
  HEADER_FOOTER = "header-footer",
}

interface ILayoutSectionElementElement {
  theme?: ITheme<ThemeMode>
  className?: string
  children: React.ReactNode
}

const LayoutSectionElement: React.FC<ILayoutSectionElementElement> = (
  props,
) => {
  const { theme, className, children } = props

  const stylesTheme = checkThemeMode(theme, styles)

  return (
    <div className={cn(styles.section, stylesTheme, className)}>{children}</div>
  )
}

export default LayoutSectionElement
