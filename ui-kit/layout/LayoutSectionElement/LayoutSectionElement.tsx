import cn from "classnames"
import { checkThemeMode } from "../../utils"
import { ITheme } from "@/sawyer-react-lib/types/common"

import styles from "./LayoutSectionElement.module.css"

export enum ThemeMode {
  HEADER_FOOTER = "header-footer",
}

interface ILayoutSectionElementProps {
  theme?: ITheme<ThemeMode>
  className?: string
  children: React.ReactNode
  isTopSpacing?: boolean
}

const LayoutSectionElement: React.FC<ILayoutSectionElementProps> = (props) => {
  const { theme, className, isTopSpacing, children } = props

  const stylesTheme = checkThemeMode<ThemeMode>(theme, styles)

  return (
    <div
      className={cn(
        styles.section,
        isTopSpacing ? styles.sectionTopSpacing : {},
        stylesTheme,
        className,
      )}
    >
      {children}
    </div>
  )
}

export default LayoutSectionElement
