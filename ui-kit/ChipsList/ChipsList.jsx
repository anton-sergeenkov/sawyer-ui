import { Fragment } from "react"
import cn from "classnames"

import Chip from "./Chip"

import styles from "./ChipsList.module.css"

// TODO:
// import { ChipsList } from "@/sawyer-react-lib/ui-kit"
const PROPS = {
  className: "",
  theme: {
    mode: ["light", "dark"],
  },
  items: ["Item-1", "Item-2", "Item-3"],
}

// FIXME: Chips
const ChipsList = (props) => {
  const { className, theme, items } = props

  const itemMode = theme?.mode
    ? styles["item--" + theme.mode]
    : styles["item--light"]

  return (
    <>
      {items.map((element, index) => (
        <Fragment key={index}>
          <Chip className={cn(styles.item, itemMode, className)}>
            {element}
          </Chip>
        </Fragment>
      ))}
    </>
  )
}

export default ChipsList
