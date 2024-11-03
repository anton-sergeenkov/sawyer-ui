import MUIModal from "@mui/material/Modal"
import { JSXElementConstructor, ReactElement } from "react"

// import styles from "./styles.module.css"

interface IMUIModalProps {
  className?: string
  disableAutoFocus?: boolean
  open: boolean
  onClose: () => void
}

interface IProps {
  children: ReactElement<any, string | JSXElementConstructor<any>>
  modalProps: IMUIModalProps
}

const ModalElement: React.FC<IProps> = (props) => {
  const { children, modalProps } = props

  return <MUIModal {...modalProps}>{children}</MUIModal>
}

export default ModalElement
