import MUIButton from "@mui/material/Button"
// import styles from "./ButtonElement.module.css"

const PROPS = {
  // Material-UI Button props
  children: <></>,
}

// interface IButtonElementProps {
//   className: string
//   size: "small" | "medium" | "large"
//   // variant: "text" | "outlined" | "contained" | "filled" // "filled"
//   sx?: SxProps<Theme>
//   onClick: () => void | null
//   endIcon?: React.ReactNode
//   disabled?: boolean
//   children: React.ReactNode
// }

const ButtonElement = (props) => {
  const { children } = props

  return <MUIButton {...props}>{children}</MUIButton>
}

export default ButtonElement
