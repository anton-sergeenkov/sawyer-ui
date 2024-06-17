import cn from "classnames"

import styles from "./Link.module.css"

// TODO:
// import { Link } from "@/sawyer-react-lib/ui-kit"
const PROPS = {
  // Common
  className: "",
  theme: {
    notUnderlined: true,
  },
  children: <></>,
  // Native
  href: "",
  target: "_blank",
}

const Link = (props) => {
  const { className, theme, href, target = "_blank", children } = props

  const itemUnderlined = theme?.notUnderlined ? styles.notUnderlined : ""

  return (
    <a
      href={href}
      className={cn(styles.item, itemUnderlined, className)}
      target={target}
    >
      {children}
    </a>
  )
}

export default Link
