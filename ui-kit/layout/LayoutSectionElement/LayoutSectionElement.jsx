import cn from "classnames"

import styles from "./LayoutSectionElement.module.css"

// TODO:
// import { LayoutSectionElement } from "@/sawyer-react-lib/ui-kit"
const PROPS = {
  className: "",
  theme: {
    mode: ["header-footer"],
  },
  children: <></>,
}

const LayoutSectionElement = (props) => {
  const { theme, className, children } = props

  const itemMode = theme?.mode ? styles["item--" + theme.mode] : ""

  return (
    <div className={cn(styles.section, itemMode, className)}>{children}</div>
  )
}

export default LayoutSectionElement
