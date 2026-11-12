import cn from "classnames"

import UiButton from "../../form/UiButton"
import type { TOnClick } from "../../../types/common"

import styles from "./styles.module.css"

export const options = {
  theme: ["basic", "light-blue"],
}

export type TTheme = "basic" | "light-blue"

// Остальные атрибуты <button> (ref, id, aria-* и т.п.) передаются кнопке:
// так кнопка может быть целью выпадающего меню (Menu.Target в UiMenuItemGroup)
type TButtonAttributes = Omit<
  React.ComponentPropsWithRef<"button">,
  "children" | "className" | "color" | "disabled" | "onClick"
>

interface IProps extends TButtonAttributes {
  className?: string
  children: React.ReactNode
  theme?: TTheme
  isAccent?: boolean
  isActive?: boolean
  isHoverTransparent?: boolean
  isTextLeft?: boolean
  disabled?: boolean
  endIcon?: React.ReactNode
  onClick?: TOnClick
}

// Состояние текста: disabled важнее accent, accent важнее active
const getTextState = (
  disabled: boolean,
  isAccent: boolean,
  isActive: boolean,
): string => {
  if (disabled) return "disabled"
  if (isAccent) return "accent"
  if (isActive) return "active"
  return "default"
}

const UiMenuNavButton: React.FC<IProps> = (props) => {
  const {
    className,
    children,
    theme = "basic",
    isAccent = false,
    isActive = false,
    isHoverTransparent = false,
    isTextLeft = false,
    disabled = false,
    endIcon = null,
    onClick = () => null,
    ...attributes
  } = props

  const textState = getTextState(disabled, isAccent, isActive)

  return (
    <UiButton
      {...attributes}
      variant="text"
      size="small"
      className={cn(
        styles.button,
        styles[theme],
        isAccent && styles.accent,
        isHoverTransparent ? styles.hoverTransparent : styles.hover,
        className,
      )}
      classNames={{
        inner: styles.contents,
        label: styles.contents,
        section: styles.section,
      }}
      endIcon={endIcon}
      disabled={disabled}
      onClick={onClick}
      isMenuButton
    >
      <div
        className={cn(
          styles.text,
          isTextLeft && styles.textLeft,
          styles[`text-${textState}`],
        )}
      >
        {children}
      </div>
    </UiButton>
  )
}

export default UiMenuNavButton
