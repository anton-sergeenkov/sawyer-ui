import { CloseButton, TextInput, Textarea } from "@mantine/core"

// https://mantine.dev/core/text-input/
// https://mantine.dev/core/textarea/

interface IProps {
  // Подсказка в пустом поле (placeholder)
  label: string
  value: string
  setValue: (value: string) => void
  // Подпись над полем
  title?: string
  type?: React.HTMLInputTypeAttribute
  disabled?: boolean
  // Многострочное поле (10 строк)
  multiline?: boolean
  isClearButton?: boolean
  // Поле на всю ширину контейнера
  fullWidth?: boolean
  // Поле растягивается во flex-контейнере (flex: 1)
  styleGrow?: boolean
  className?: string
}

const UiInput: React.FC<IProps> = (props) => {
  const {
    label,
    value,
    setValue,
    title,
    type = "text",
    disabled = false,
    multiline = false,
    isClearButton = true,
    fullWidth = false,
    styleGrow = false,
    className,
  } = props

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setValue(event.target.value)
  }

  const onClear = (): void => {
    setValue("")
  }

  // Кнопка очистки — когда в поле есть текст.
  // Иконка-крестик Phosphor задана в теме UiProvider (CloseButton)
  const rightSection =
    Boolean(value) && isClearButton ? (
      <CloseButton aria-label="Clear" disabled={disabled} onClick={onClear} />
    ) : null

  // Поле в стандартном виде Mantine: title — подпись над полем (label),
  // label — подсказка (placeholder)
  const fieldProps = {
    className,
    label: title,
    placeholder: label,
    // Без подписи имя поля для скринридеров — подсказка
    "aria-label": title ? undefined : label,
    value,
    onChange,
    disabled,
    w: fullWidth ? "100%" : undefined,
    flex: styleGrow ? 1 : undefined,
    rightSection,
    rightSectionPointerEvents: "all" as const,
  }

  return multiline ? (
    <Textarea {...fieldProps} rows={10} />
  ) : (
    <TextInput {...fieldProps} type={type} />
  )
}

export default UiInput
