import MUIButton from "@mui/material/Button"

// import styles from "./ButtonElement.module.css"

// [UiKit]
// import { ButtonElement } from "@/sawyer-react-lib/ui-kit"
const PROPS = {
  // Material-UI Button props
  children: <></>,
}

const ButtonElement = (props) => {
  const { children } = props

  return <MUIButton {...props}>{children}</MUIButton>
}

export default ButtonElement
