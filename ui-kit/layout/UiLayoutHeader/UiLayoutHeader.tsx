import cn from "classnames"

import UiLayoutSection from "@/sawyer-ui/ui-kit/layout/UiLayoutSection"

import styles from "./styles.module.css"

interface IProps {
  className?: string
  children: React.ReactNode
}

const UiLayoutHeader: React.FC<IProps> = (props) => {
  const { className, children } = props

  return (
    <UiLayoutSection
      className={cn(className, styles.wrapper)}
      theme="header-footer"
      isSpacingY={false}
    >
      <div className={styles.container}>{children}</div>
    </UiLayoutSection>
  )
}

export default UiLayoutHeader
