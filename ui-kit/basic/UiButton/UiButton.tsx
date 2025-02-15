import cn from "classnames"
import { SxProps, Theme } from "@mui/material"
import MUIButton from "@mui/material/Button"
import { TOnClick } from "@/sawyer-ui/types/common"
import { checkTheme } from "../../utils"

import styles from "./styles.module.css"

// https://mui.com/material-ui/api/button/

export const options = {
  theme: ["menu", "black", "white"],
  variant: ["text", "outlined", "contained"],
  size: ["small", "medium", "large"],
  color: ["primary", "secondary", "success", "error", "info", "warning"],
}

type TTheme = "black" | "white"
type TVariant = "text" | "outlined" | "contained"
type TSize = "small" | "medium" | "large"
type TColor = "primary" | "secondary" | "success" | "error" | "info" | "warning"

interface IProps {
  children: React.ReactNode
  className?: string
  theme?: TTheme
  variant?: TVariant
  size?: TSize
  color?: TColor
  sx?: SxProps<Theme>
  endIcon?: React.ReactNode
  disabled?: boolean
  isMenuButton?: boolean
  onClick: TOnClick
}

const UiButton: React.FC<IProps> = (props) => {
  const {
    children,
    className,
    theme,
    variant = "contained",
    size = "small",
    color = "primary",
    sx = {},
    endIcon = null,
    disabled = false,
    isMenuButton = false,
    onClick,
  } = props

  const stylesTheme = checkTheme(theme, styles)

  return (
    <MUIButton
      className={cn(
        !isMenuButton && styles.buttonBasic,
        styles.button,
        stylesTheme,
        className,
      )}
      variant={variant}
      size={size}
      color={color}
      sx={sx}
      endIcon={endIcon}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </MUIButton>
  )
}

export default UiButton
