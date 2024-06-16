import MUIButton from "@mui/material/Button"

// import styles from "./Button.module.css"

// TODO:
// import { Button } from "@/sawyer-react-lib/ui-kit"
const PROPS = {
  // Material-UI Button props
  children: <></>,
}

const Button = (props) => {
  const { children } = props

  return <MUIButton {...props}>{children}</MUIButton>
}

export default Button
