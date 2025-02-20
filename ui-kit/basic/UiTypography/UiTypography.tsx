import cn from "classnames"
import { robotoLight } from "@/sawyer-ui/app/fonts"

import styles from "./styles.module.css"

export const options = {
  tag: ["h1", "h2", "h3", "p", "comment"],
}

type TTag = "h1" | "h2" | "h3" | "p" | "comment"

interface IProps {
  className?: string
  tag?: TTag
  noSpacing?: boolean
  children: React.ReactNode
}

const UiTypography: React.FC<IProps> = (props) => {
  const { className, tag, noSpacing = true, children } = props

  const classNoSpacing = noSpacing ? styles.noSpacing : ""

  switch (tag) {
    case "h1":
      return (
        <h1
          className={cn(
            styles.h1,
            robotoLight.className,
            classNoSpacing,
            className,
          )}
        >
          {children}
        </h1>
      )

    case "h2":
      return (
        <h2
          className={cn(
            styles.h2,
            robotoLight.className,
            classNoSpacing,
            className,
          )}
        >
          {children}
        </h2>
      )

    case "h3":
      return (
        <h3 className={cn(styles.h3, classNoSpacing, className)}>{children}</h3>
      )

    case "p":
      return (
        <p className={cn(styles.p, classNoSpacing, className)}>{children}</p>
      )

    case "comment":
      return (
        <span className={cn(styles.comment, classNoSpacing, className)}>
          {children}
        </span>
      )

    default:
      return <>{children}</>
  }
}

export default UiTypography
