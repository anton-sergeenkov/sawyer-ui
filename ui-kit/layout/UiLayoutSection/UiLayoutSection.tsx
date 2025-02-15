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
  isSpacingX?: boolean
  isSpacingY?: boolean
  fullWidth?: boolean
}

const UiLayoutSection: React.FC<IProps> = (props) => {
  const {
    theme,
    className,
    children,
    isSpacingX = true,
    isSpacingY = true,
    fullWidth = false,
  } = props

  const stylesTheme = checkTheme(theme, styles)

  return (
    <div className={cn(styles.wrapper, className)}>
      <div
        className={cn(
          !fullWidth && styles.sectionMaxWidth,
          isSpacingX && styles.sectionPaddingX,
          isSpacingY && styles.sectionPaddingY,
          stylesTheme,
        )}
      >
        {children}
      </div>
    </div>
  )
}

export default UiLayoutSection
