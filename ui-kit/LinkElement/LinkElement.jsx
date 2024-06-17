import cn from "classnames"

import styles from "./LinkElement.module.css"

// TODO:
// import { LinkElement } from "@/sawyer-react-lib/ui-kit"
const PROPS = {
  // Common
  className: "",
  theme: {
    mode: ['blue-underlined-thin', 'dark-underlined'],
  },
  children: <></>,
  // Native
  href: "",
  target: "_blank",
}

const LinkElement = (props) => {
  const { className, theme, href, target = "_blank", children } = props

  const itemMode = theme?.mode
    ? styles["item--" + theme.mode]
    : ''

  return (
    <a
      className={cn(styles.item, itemMode, className)}
      href={href}
      target={target}
    >
      {children}
    </a>
  )
}

export default LinkElement
