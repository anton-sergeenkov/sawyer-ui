import { SxProps, Theme } from "@mui/material"
import MUIButton from "@mui/material/Button"
import { TOnClick } from "@/sawyer-react-lib/types/common"
// import styles from "./ButtonElement.module.css"

// https://mui.com/material-ui/api/button/

interface IMUIButtonProps {
  className?: string
  size: "small" | "medium" | "large"
  variant?: "text" | "outlined" | "contained" // "filled"
  sx?: SxProps<Theme>
  endIcon?: React.ReactNode
  disabled?: boolean
  onClick: TOnClick
}

interface IButtonElementProps {
  children: React.ReactNode
  buttonProps: IMUIButtonProps
}

const ButtonElement: React.FC<IButtonElementProps> = (props) => {
  const { children, buttonProps } = props

  return (
    // FIXME: filled
    // @ts-ignore
    <MUIButton {...buttonProps} variant="filled">
      {children}
    </MUIButton>
  )
}

export default ButtonElement
