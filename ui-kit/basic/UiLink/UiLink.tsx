import cn from "classnames"
import { checkTheme } from "../../utils"

import styles from "./styles.module.css"

export const options = {
  theme: ["blue-underlined-thin", "dark-underlined"],
}

export type TTheme = "blue-underlined-thin" | "dark-underlined"

interface IProps {
  theme?: TTheme
  className?: string
  children: React.ReactNode
  href: string
  target?: string
}

const UiLink: React.FC<IProps> = (props) => {
  const { theme, className, href, target = "_blank", children } = props

  const stylesTheme = checkTheme(theme, styles)

  return (
    <a
      className={cn(styles.item, stylesTheme, className)}
      href={href}
      target={target}
    >
      {children}
    </a>
  )
}

export default UiLink
