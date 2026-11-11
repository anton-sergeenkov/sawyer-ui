import cn from "classnames"
import { Alert } from "@mui/material"

import styles from "./styles.module.css"

export const options = {
  type: ["success", "info", "warning", "error"],
  variant: ["outlined", "standard", "filled"],
}

type TType = "success" | "info" | "warning" | "error"
type TVariant = "outlined" | "standard" | "filled"

export interface IProps {
  // Alert
  type?: TType
  variant?: TVariant
  noSpacing?: boolean
  children: React.ReactNode
  // State
  isShow: boolean
  setIsShow?: React.Dispatch<React.SetStateAction<boolean>>
}

export const UiAlert: React.FC<IProps> = (props) => {
  const {
    type = "info",
    variant = "outlined",
    noSpacing,
    children,
    isShow,
    setIsShow,
  } = props

  const classNoSpacing = noSpacing ? styles.noSpacing : ""

  if (!isShow) {
    return null
  }

  return (
    <>
      {isShow && (
        <Alert
          severity={type}
          variant={variant}
          className={cn(styles.item, classNoSpacing)}
          {...(setIsShow && {
            onClose: () => setIsShow(false),
          })}
        >
          {children}
        </Alert>
      )}
    </>
  )
}

export default UiAlert
