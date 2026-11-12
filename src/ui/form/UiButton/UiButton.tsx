import cn from "classnames"
import { Button } from "@mantine/core"
import type { TOnClick } from "../../../types/common"
import { checkTheme } from "../../../utils"

import styles from "./styles.module.css"

// https://mantine.dev/core/button/

export const options = {
  theme: ["basic", "black", "white"],
  variant: ["text", "outlined", "contained"],
  size: ["small", "medium", "large"],
  color: ["primary", "secondary", "success", "error", "info", "warning"],
}

type TTheme = "basic" | "black" | "white"
type TVariant = "text" | "outlined" | "contained"
type TSize = "small" | "medium" | "large"
type TColor = "primary" | "secondary" | "success" | "error" | "info" | "warning"

// Остальные атрибуты <button> (ref, id, aria-* и т.п.) передаются кнопке:
// так кнопку можно сделать целью выпадающего меню (Menu.Target в UiMenuItemGroup)
type TButtonAttributes = Omit<
  React.ComponentPropsWithRef<"button">,
  "children" | "className" | "color" | "disabled" | "onClick"
>

interface IProps extends TButtonAttributes {
  children: React.ReactNode
  className?: string
  theme?: TTheme
  variant?: TVariant
  size?: TSize
  color?: TColor
  endIcon?: React.ReactNode
  disabled?: boolean
  isMenuButton?: boolean
  onClick: TOnClick
}

const UiButton: React.FC<IProps> = (props) => {
  const {
    children,
    className,
    theme = "basic",
    variant = "contained",
    size = "small",
    color = "primary",
    endIcon = null,
    disabled = false,
    isMenuButton = false,
    onClick,
    ...attributes
  } = props

  const stylesTheme = checkTheme(theme, styles)

  return (
    <Button
      {...attributes}
      className={cn(
        styles.button,
        styles[variant],
        styles[`${variant}-${size}`],
        styles[`size-${size}`],
        styles[`color-${color}`],
        !isMenuButton && styles.buttonBasic,
        stylesTheme,
        className,
      )}
      classNames={{
        inner: styles.inner,
        label: styles.label,
        section: styles.section,
      }}
      rightSection={endIcon}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export default UiButton
