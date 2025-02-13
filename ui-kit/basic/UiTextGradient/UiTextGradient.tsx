import cn from "classnames"
import { checkTheme } from "../../utils"

import styles from "./styles.module.css"

export const options = {
  theme: ["blue-lightblue", "green-blue", "darkblue-violet"],
}

type TTheme = "blue-lightblue" | "green-blue" | "darkblue-violet"

interface IProps {
  className?: string
  theme?: TTheme
  children: React.ReactNode
}

const UiTextGradient: React.FC<IProps> = (props) => {
  const { theme, className, children } = props

  const stylesTheme = checkTheme(theme, styles)

  return (
    <div className={cn(stylesTheme, styles.item, className)}>{children}</div>
  )
}

export default UiTextGradient
