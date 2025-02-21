import cn from "classnames"
import { Alert } from "@mui/material"

import styles from "./styles.module.css"

export const options = {
  type: ["success", "info", "warning", "error"],
  variant: ["outlined", "standard", "filled"],
}

type TType = "success" | "info" | "warning" | "error"
type TVariant = "outlined" | "standard" | "filled"

interface IProps {
  type: TType
  variant?: TVariant
  noSpacing?: boolean
  children: React.ReactNode
  onClose: () => void
}

export const UiAlert: React.FC<IProps> = (props) => {
  const { type, variant = "outlined", noSpacing, children, onClose } = props

  const classNoSpacing = noSpacing ? styles.noSpacing : ""

  return (
    <Alert
      severity={type}
      onClose={onClose}
      variant={variant}
      className={cn(styles.item, classNoSpacing)}
    >
      {children}
    </Alert>
  )
}

export default UiAlert
