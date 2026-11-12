import { Alert } from "@mantine/core"
import type { AlertProps } from "@mantine/core"
import {
  CheckCircle,
  Info,
  Warning,
  WarningCircle,
} from "@phosphor-icons/react"

// https://mantine.dev/core/alert/

export const options = {
  type: ["success", "info", "warning", "error"],
  variant: ["outlined", "standard", "filled"],
}

type TType = "success" | "info" | "warning" | "error"
type TVariant = "outlined" | "standard" | "filled"

// Цвет темы Mantine и иконка для каждого типа уведомления
const TYPES: Record<TType, { color: string; icon: React.ReactNode }> = {
  success: { color: "green", icon: <CheckCircle size={20} /> },
  info: { color: "blue", icon: <Info size={20} /> },
  warning: { color: "orange", icon: <Warning size={20} /> },
  error: { color: "red", icon: <WarningCircle size={20} /> },
}

// Варианты оформления Mantine
const VARIANTS: Record<TVariant, AlertProps["variant"]> = {
  standard: "light",
  outlined: "outline",
  filled: "filled",
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

  if (!isShow) {
    return null
  }

  return (
    // Уведомление в стандартном виде Mantine
    <Alert
      color={TYPES[type].color}
      variant={VARIANTS[variant]}
      icon={TYPES[type].icon}
      // Отступ сверху между блоками; noSpacing — без отступа
      mt={noSpacing ? undefined : "var(--spacing-blocks)"}
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
