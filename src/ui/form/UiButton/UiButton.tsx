import cn from "classnames"
import { Button } from "@mantine/core"
import type { ButtonProps } from "@mantine/core"
import type { TOnClick } from "../../../types/common"

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

// Варианты Mantine: contained — заливка, outlined — рамка,
// text — только текст, фон появляется при наведении
const VARIANTS: Record<TVariant, ButtonProps["variant"]> = {
  contained: "filled",
  outlined: "outline",
  text: "subtle",
}

// Размеры Mantine: высота 36 / 42 / 50px
const SIZES: Record<TSize, "sm" | "md" | "lg"> = {
  small: "sm",
  medium: "md",
  large: "lg",
}

// Цвета кнопок sawyer-ui. Оттенки для наведения и полупрозрачного фона
// Mantine рассчитывает из основного цвета
const COLORS: Record<TColor, string> = {
  primary: "#1976d2",
  secondary: "#9c27b0",
  success: "#2e7d32",
  error: "#d32f2f",
  info: "#0288d1",
  warning: "#ed6c02",
}

// Темы задают цвет кнопки вместо variant и color:
// black — тёмная заливка, white — белая кнопка с серым текстом
const THEMES: Record<
  Exclude<TTheme, "basic">,
  { variant: ButtonProps["variant"]; color: string }
> = {
  black: { variant: "filled", color: "#3f3f3f" },
  white: { variant: "white", color: "#616161" },
}

// Остальные атрибуты <button> (ref, id, aria-* и т.п.) передаются кнопке:
// так кнопку можно сделать целью выпадающего меню (Menu.Target в UiMenuItemGroup)
type TButtonAttributes = Omit<
  React.ComponentPropsWithRef<"button">,
  "children" | "className" | "color" | "disabled" | "onClick"
>

interface IProps extends TButtonAttributes {
  children: React.ReactNode
  className?: string
  // Классы внутренних элементов Mantine Button (inner, label, section)
  classNames?: ButtonProps["classNames"]
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
    classNames,
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

  const themeColors = theme === "basic" ? null : THEMES[theme]

  return (
    // Кнопка в стандартном виде Mantine со скруглением и цветами sawyer-ui
    <Button
      {...attributes}
      variant={themeColors ? themeColors.variant : VARIANTS[variant]}
      color={themeColors ? themeColors.color : COLORS[color]}
      // Кнопка в меню — компактный размер Mantine: ниже и с меньшими отступами
      size={isMenuButton ? `compact-${SIZES[size]}` : SIZES[size]}
      radius="var(--border-radius-button)"
      className={cn(styles.button, className)}
      classNames={classNames}
      rightSection={endIcon}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export default UiButton
