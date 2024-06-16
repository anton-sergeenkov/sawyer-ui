import cn from "classnames"

import styles from "./Chip.module.css"

// TODO:
// import { Chip } from "@/sawyer-react-lib/ui-kit"
const PROPS = {
  className: "",
  children: <></>,
}

const Chip = (props) => {
  const { className, children } = props

  return <span className={cn(styles.item, className)}>{children}</span>
}

export default Chip
