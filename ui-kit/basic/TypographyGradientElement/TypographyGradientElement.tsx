import cn from "classnames"
import { checkThemeMode } from "../../utils"
import { ITheme } from "@/sawyer-react-lib/types/common"
import styles from "./TypographyGradientElement.module.css"

export enum ThemeMode {
  DARKBLUE_BLUE = "darkblue-blue",
}

interface ITypographyGradientElement {
  className?: string
  theme?: ITheme<ThemeMode>
  children: React.ReactNode
}

const TypographyGradientElement: React.FC<ITypographyGradientElement> = (
  props,
) => {
  const { className, theme, children } = props

  const stylesTheme = checkThemeMode(theme, styles)

  return (
    <div className={cn(stylesTheme, styles.item, className)}>{children}</div>
  )
}

export default TypographyGradientElement
