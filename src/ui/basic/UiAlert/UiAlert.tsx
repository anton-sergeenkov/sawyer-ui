import cn from "classnames"
import { Alert } from "@mantine/core"
import {
  CheckCircle,
  Info,
  Warning,
  WarningCircle,
} from "@phosphor-icons/react"

import styles from "./styles.module.css"

// https://mantine.dev/core/alert/

export const options = {
  type: ["success", "info", "warning", "error"],
  variant: ["outlined", "standard", "filled"],
}

type TType = "success" | "info" | "warning" | "error"
type TVariant = "outlined" | "standard" | "filled"

// Иконка слева от текста — своя для каждого типа
const ICONS: Record<TType, React.ReactNode> = {
  success: <CheckCircle weight="bold" />,
  info: <Info weight="bold" />,
  warning: <Warning weight="bold" />,
  error: <WarningCircle weight="bold" />,
}

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
    <Alert
      icon={ICONS[type]}
      className={cn(
        styles.alert,
        styles[type],
        styles[variant],
        styles.item,
        classNoSpacing,
      )}
      classNames={{
        wrapper: styles.wrapper,
        icon: styles.icon,
        body: styles.body,
        message: styles.message,
        closeButton: styles.closeButton,
      }}
      // Кнопка закрытия — только если передан setIsShow
      withCloseButton={!!setIsShow}
      closeButtonLabel="Close"
      onClose={() => setIsShow?.(false)}
    >
      {children}
    </Alert>
  )
}

export default UiAlert
