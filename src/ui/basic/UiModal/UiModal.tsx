import cn from "classnames"
import { Modal } from "@mantine/core"

import styles from "./styles.module.css"

// https://mantine.dev/core/modal/

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
    <Modal
      opened={open}
      onClose={onClose}
      centered
      size="auto"
      withCloseButton={false}
      // disableAutoFocus: фокус не переносится в окно при открытии
      // и не возвращается обратно при закрытии
      trapFocus={!disableAutoFocus}
      returnFocus={!disableAutoFocus}
      transitionProps={{ transition: "fade", duration: 225 }}
      classNames={{
        overlay: styles.overlay,
        inner: styles.inner,
        content: styles.content,
        body: styles.body,
      }}
    >
      {/* Видимое окно — этот div: на него же ставится className */}
      <div
        {...(isContentClickClose && {
          onClick: onClose,
        })}
        className={cn(className, styles.modalContent)}
      >
        {children}
      </div>
    </Modal>
  )
}

export default UiModal
