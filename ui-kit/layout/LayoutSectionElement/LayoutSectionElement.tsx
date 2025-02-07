import cn from "classnames"
import { checkThemeMode } from "../../utils"
import { ITheme } from "@/sawyer-ui/types/common"

import styles from "./styles.module.css"

export enum ThemeMode {
  HEADER_FOOTER = "header-footer",
}

interface IProps {
  theme?: ITheme<ThemeMode>
  className?: string
  children: React.ReactNode
  isTopSpacing?: boolean
}

const LayoutSectionElement: React.FC<IProps> = (props) => {
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
