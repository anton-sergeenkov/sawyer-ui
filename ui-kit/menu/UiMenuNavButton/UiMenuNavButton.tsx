// import cn from 'classnames'

import UiButton from "@/sawyer-ui/ui-kit/basic/UiButton"
import { getStyles } from "./utils"
import { TOnClick } from "@/sawyer-ui/types/common"

// import styles from "./styles.module.css"

/* FIXME: Import
import UiMenuNavButton from "@/sawyer-ui/ui-kit/menu/UiMenuNavButton"
import { ThemeMode as ThemeUiMenuButton } from "@/sawyer-ui/ui-kit/menu/UiMenuNavButton"
*/

export const options = {
  theme: ["light-blue"],
}

export type TTheme = "light-blue"

interface IProps {
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

const UiMenuNavButton: React.FC<IProps> = (props) => {
  const {
    className,
    children,
    theme,
    isAccent,
    isActive,
    isHoverTransparent = false,
    isTextLeft = false,
    disabled = false,
    endIcon = null,
    onClick = () => null,
  } = props

  const { stylesButton, stylesText } = getStyles({
    theme,
    isAccent,
    isActive,
    isHoverTransparent,
    isDisabled: disabled,
    isTextLeft,
  })

  return (
    <UiButton
      variant="text"
      size="small"
      className={className}
      sx={stylesButton}
      endIcon={endIcon}
      disabled={disabled}
      onClick={onClick}
    >
      <div style={stylesText}>{children}</div>
    </UiButton>
  )
}

export default UiMenuNavButton
