import cn from "classnames"
import { SxProps, Theme } from "@mui/material"
import MUIButton from "@mui/material/Button"
import { TOnClick } from "@/sawyer-ui/types/common"

import styles from "./styles.module.css"

// https://mui.com/material-ui/api/button/

export const options = {
  variant: ["text", "outlined", "contained"],
  size: ["small", "medium", "large"],
  color: ["primary", "secondary", "success", "error", "info", "warning"],
}

type TVariant = "text" | "outlined" | "contained"
type TSize = "small" | "medium" | "large"
type TColor = "primary" | "secondary" | "success" | "error" | "info" | "warning"

interface IProps {
  children: React.ReactNode
  variant?: TVariant
  size?: TSize
  color?: TColor
  className?: string
  sx?: SxProps<Theme>
  endIcon?: React.ReactNode
  disabled?: boolean
  onClick: TOnClick
}

const UiButton: React.FC<IProps> = (props) => {
  const {
    children,
    variant = "contained",
    size = "small",
    color = "primary",
    className,
    sx = {},
    endIcon = null,
    disabled = false,
    onClick,
  } = props

  return (
    <MUIButton
      variant={variant}
      size={size}
      color={color}
      className={cn(className, styles.button)}
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
