import cn from "classnames"
import { checkThemeMode } from "../../utils"
import { ITheme } from "@/sawyer-react-lib/types/common"

import styles from "./styles.module.css"

export enum ThemeMode {
  DARKBLUE_BLUE = "darkblue-blue",
}

interface IProps {
  className?: string
  theme?: ITheme<ThemeMode>
  children: React.ReactNode
}

const TypographyGradientElement: React.FC<IProps> = (props) => {
  const { theme, className, children } = props

  const stylesTheme = checkThemeMode<ThemeMode>(theme, styles)

  return (
    <div className={cn(stylesTheme, styles.item, className)}>{children}</div>
  )
}

export default TypographyGradientElement
