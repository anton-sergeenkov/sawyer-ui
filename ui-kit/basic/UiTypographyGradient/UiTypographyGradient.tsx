import cn from "classnames"
import { checkTheme } from "../../utils"

import styles from "./styles.module.css"

export const options = {
  theme: ["blue-lightblue", "darkblue-violet"],
}

type TTheme = "blue-lightblue" | "darkblue-violet"

interface IProps {
  className?: string
  theme?: TTheme
  children: React.ReactNode
}

const UiTypographyGradient: React.FC<IProps> = (props) => {
  const { theme, className, children } = props

  const stylesTheme = checkTheme(theme, styles)

  return (
    <div className={cn(stylesTheme, styles.item, className)}>{children}</div>
  )
}

export default UiTypographyGradient
