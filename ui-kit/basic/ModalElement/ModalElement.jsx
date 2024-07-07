import MUIModal from "@mui/material/Modal"

// import styles from "./ModalElement.module.css"

// [UiKit]
// import { ModalElement } from "@/sawyer-react-lib/ui-kit"
const PROPS = {
  // Material-UI Modal props
  children: <></>,
}

const ModalElement = (props) => {
  const { children } = props

  return <MUIModal {...props}>{children}</MUIModal>
}

export default ModalElement
