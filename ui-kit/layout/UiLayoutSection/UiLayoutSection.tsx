import cn from "classnames"
import { checkTheme } from "../../utils"

import styles from "./styles.module.css"

export const options = {
  theme: ["header-footer"],
}

type TTheme = "header-footer"

interface IProps {
  theme?: TTheme
  className?: string
  children: React.ReactNode
  isTopSpacing?: boolean
}

const UiLayoutSection: React.FC<IProps> = (props) => {
  const { theme, className, isTopSpacing, children } = props

  const stylesTheme = checkTheme(theme, styles)

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

export default UiLayoutSection
