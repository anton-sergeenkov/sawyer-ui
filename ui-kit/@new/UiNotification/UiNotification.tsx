// https://mui.com/material-ui/react-alert/

import cn from "classnames"

import styles from "./styles.module.css"

interface IProps {
  type: "info" | "success" | "warning" | "error"
  children: React.ReactNode
  className?: string
}

const UiNotification: React.FC<IProps> = (props) => {
  const { className, children, type = "info" } = props

  return (
    <div className={cn(styles.item, styles["item--" + type], className)}>
      {children}
    </div>
  )
}

export default UiNotification
