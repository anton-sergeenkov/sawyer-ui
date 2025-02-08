// import cn from "classnames"
import MUIModal from "@mui/material/Modal"
import { JSXElementConstructor, ReactElement } from "react"

// import styles from "./styles.module.css"

interface IProps {
  children: ReactElement<any, string | JSXElementConstructor<any>>
  className?: string
  disableAutoFocus?: boolean
  open: boolean
  onClose: () => void
}

const UiModal: React.FC<IProps> = (props) => {
  const { children, className, disableAutoFocus = false, open, onClose } = props

  return (
    <MUIModal
      className={className}
      disableAutoFocus={disableAutoFocus}
      open={open}
      onClose={onClose}
    >
      {children}
    </MUIModal>
  )
}

export default UiModal
