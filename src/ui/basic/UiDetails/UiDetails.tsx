import { useState } from "react"
import { Accordion } from "@mantine/core"

// https://mantine.dev/core/accordion/

// Значение единственного пункта аккордеона
const ITEM = "details"

interface IProps {
  title: string
  children: React.ReactNode
  isOpen?: boolean
  className?: string
}

const UiDetails: React.FC<IProps> = (props) => {
  const { children, title, isOpen = false, className } = props

  // Блок открывают и закрывают кликом по заголовку,
  // а при изменении isOpen состояние берётся из пропа
  const [value, setValue] = useState<string | null>(isOpen ? ITEM : null)
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen)

  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen)
    setValue(isOpen ? ITEM : null)
  }

  return (
    // Раскрывающийся блок в стандартном виде Mantine: заголовок со стрелкой,
    // содержимое открывается с анимацией
    <Accordion
      variant="contained"
      value={value}
      onChange={setValue}
      className={className}
    >
      <Accordion.Item value={ITEM}>
        <Accordion.Control>{title}</Accordion.Control>
        <Accordion.Panel>{children}</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  )
}

export default UiDetails
