import cn from "classnames"

import styles from "./styles.module.css"

interface IProps {
  className?: string
  children: React.ReactNode
  isNoPadding?: boolean
}

const UiLayoutSectionContainer: React.FC<IProps> = (props) => {
  const { className, isNoPadding = false, children } = props

  return (
    <div
      className={cn(
        styles.container,
        !isNoPadding ? styles.containerPadding : {},
        className,
      )}
    >
      {children}
    </div>
  )
}

export default UiLayoutSectionContainer
