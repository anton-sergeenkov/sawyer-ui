import MUIModal from "@mui/material/Modal"

// import styles from "./Button.module.css"

// TODO:
// import { Modal } from "@/sawyer-react-lib/ui-kit"
const PROPS = {
  // Material-UI Button props
  children: <></>,
}

const Modal = (props) => {
  const { children } = props

  return <MUIModal {...props}>{children}</MUIModal>
}

export default Modal
