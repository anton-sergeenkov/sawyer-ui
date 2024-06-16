import { Fragment } from "react"
// import cn from "classnames"

import Chip from "../Chip"

// import styles from "./ChipsList.module.css"

const ChipsList = (props) => {
  const { items, classNameChip } = props

  return (
    <>
      {items.map((element, index) => (
        <Fragment key={index}>
          <Chip className={classNameChip}>{element}</Chip>
        </Fragment>
      ))}
    </>
  )
}

export default ChipsList
