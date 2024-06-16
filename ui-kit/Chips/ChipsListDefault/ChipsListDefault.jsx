import cn from "classnames"

import ChipsList from "../ChipsList"

import styles from "./ChipsListDefault.module.css"

const ChipsListDefault = (props) => {
  const { items, classNameChip } = props

  return (
    <ChipsList items={items} classNameChip={cn(styles.chip, classNameChip)} />
  )
}

export default ChipsListDefault
