import cn from "classnames"

import styles from "./TypographyGradientElement.module.css"

// TODO:
// import { TypographyGradientElement } from "@/sawyer-react-lib/ui-kit"
const PROPS = {
  className: "",
  theme: {
    mode: ["darkblue-blue"],
  },
  children: <></>,
}

const TypographyGradientElement = (props) => {
  const { className, theme, children } = props

  const itemMode = theme?.mode ? styles["item--" + theme.mode] : ""

  return <div className={cn(itemMode, styles.item, className)}>{children}</div>
}

export default TypographyGradientElement
