import { Modal } from "@mantine/core"

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
    // Модальное окно в стандартном виде Mantine: по центру экрана, размер
    // по содержимому. Закрывается кликом мимо окна и Esc
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
    >
      <div
        {...(isContentClickClose && {
          onClick: onClose,
        })}
        className={className}
      >
        {children}
      </div>
    </Modal>
  )
}

export default UiModal
