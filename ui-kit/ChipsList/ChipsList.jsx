import { Fragment } from "react"
import cn from "classnames"

import Chip from "../Chip"

import styles from "./ChipsList.module.css"

// theme:
// - "default-light"

const ChipsList = (props) => {
  const { theme, items, className } = props

  const itemStyle = theme ? styles["item--" + theme] : ""

  return (
    <>
      {items.map((element, index) => (
        <Fragment key={index}>
          <Chip className={cn(itemStyle, className)}>{element}</Chip>
        </Fragment>
      ))}
    </>
  )
}

export default ChipsList
