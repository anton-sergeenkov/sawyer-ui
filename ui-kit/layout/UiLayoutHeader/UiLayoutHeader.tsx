import cn from "classnames"

import UiLayoutSection from "@/sawyer-ui/ui-kit/layout/UiLayoutSection"

import styles from "./styles.module.css"

interface IProps {
  className?: string
  children: React.ReactNode
  fullWidth?: boolean
}

const UiLayoutHeader: React.FC<IProps> = (props) => {
  const { className, children, fullWidth = false } = props

  return (
    <UiLayoutSection
      className={cn(className, styles.wrapper)}
      theme="header-footer"
      isSpacingY={false}
      fullWidth={fullWidth}
    >
      <div className={styles.container}>{children}</div>
    </UiLayoutSection>
  )
}

export default UiLayoutHeader
