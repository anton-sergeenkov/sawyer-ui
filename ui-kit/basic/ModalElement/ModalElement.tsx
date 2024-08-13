import MUIModal from "@mui/material/Modal"
import { JSXElementConstructor, ReactElement } from "react"

// import styles from "./ModalElement.module.css"

interface IMUIModalProps {
  className?: string
  disableAutoFocus?: boolean
  open: boolean
  onClose: () => void
}

interface IModalElementElement {
  children: ReactElement<any, string | JSXElementConstructor<any>>
  modalProps: IMUIModalProps
}

const ModalElement: React.FC<IModalElementElement> = (props) => {
  const { children, modalProps } = props

  return <MUIModal {...modalProps}>{children}</MUIModal>
}

export default ModalElement
