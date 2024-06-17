import cn from "classnames"

import styles from "./Typography.module.css"

// TODO:
// import { Typography } from "@/sawyer-react-lib/ui-kit"
const PROPS = {
  className: "",
  theme: {
    mode: ["light", "dark", "dark-filled", "light-outline"],
  },
  tag: ["h1", "h2", "h3", "p"],
  children: <></>,
}

const Typography = (props) => {
  const { className, theme, tag, children } = props

  const itemMode = theme?.mode
    ? styles["item--" + theme.mode]
    : styles["item--light"]

  switch (tag) {
    case "h1":
      return <h1>{children}</h1>

    case "h2":
      return (
        <h2 className={cn(styles.h2, className)}>
          <span className={cn(styles.item, itemMode)}>{children}</span>
        </h2>
      )

    case "h3":
      return <h3>{children}</h3>

    case "p":
      return <p>{children}</p>

    default:
      return <>{children}</>
  }

  return <>{children}</>
}

export default Typography
