import cn from "classnames"

import MUIModal from "@mui/material/Modal"

import styles from "./styles.module.css"

interface IProps {
  children: React.ReactElement
  className?: string
  disableAutoFocus?: boolean
  open: boolean
  isContentClickClose?: boolean
  onClose: () => void
}

const UiModal: React.FC<IProps> = (props) => {
  const {
    children,
    className,
    disableAutoFocus = false,
    open,
    onClose,
    isContentClickClose = false,
  } = props

  return (
    <MUIModal
      className={cn(styles.modal)}
      disableAutoFocus={disableAutoFocus}
      open={open}
      onClose={onClose}
    >
      <div
        {...(isContentClickClose && {
          onClick: onClose,
        })}
        className={cn(className, styles.modalContent)}
      >
        {children}
      </div>
    </MUIModal>
  )
}

export default UiModal
