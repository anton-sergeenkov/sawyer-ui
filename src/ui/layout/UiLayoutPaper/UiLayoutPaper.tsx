import cn from "classnames"

import styles from "./styles.module.css"

interface IProps {
  className?: string
  children: React.ReactNode
  withPadding?: boolean
  withShadow?: boolean
}

const UiLayoutPaper: React.FC<IProps> = (props) => {
  const { className, withPadding = true, withShadow = false, children } = props

  return (
    <div
      className={cn(
        styles.container,
        withPadding ? styles.containerPadding : {},
        withShadow ? styles.containerShadow : {},
        className,
      )}
    >
      {children}
    </div>
  )
}

export default UiLayoutPaper
