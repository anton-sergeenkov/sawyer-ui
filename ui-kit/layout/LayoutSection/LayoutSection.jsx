import cn from "classnames"

import styles from "./LayoutSection.module.css"

// TODO:
// import { LayoutSection } from "@/sawyer-react-lib/ui-kit"
const PROPS = {
  theme: {
    mode: ["header-footer"],
  },
  className: "",
  children: <></>,
}

const LayoutSection = (props) => {
  const { theme, className, children } = props

  const itemMode = theme?.mode ? styles["item--" + theme.mode] : ""

  return (
    <div className={cn(styles.section, itemMode, className)}>{children}</div>
  )
}

export default LayoutSection
