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
  isSpacingY?: boolean
  isSpacingX?: boolean
}

const UiLayoutSection: React.FC<IProps> = (props) => {
  const {
    theme,
    className,
    children,
    isSpacingY = true,
    isSpacingX = true,
  } = props

  const stylesTheme = checkTheme(theme, styles)

  return (
    <div className={cn(styles.wrapper, className)}>
      <div
        className={cn(
          styles.section,
          isSpacingY && styles.sectionPaddingY,
          isSpacingX && styles.sectionPaddingX,
          stylesTheme,
        )}
      >
        {children}
      </div>
    </div>
  )
}

export default UiLayoutSection
