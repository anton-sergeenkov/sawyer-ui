import { useId } from "react"
import cn from "classnames"
import { CloseButton, TextInput, Textarea } from "@mantine/core"

import styles from "./styles.module.css"

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
  fullWidth?: boolean
  // Поле растягивается во flex-контейнере (flex-grow: 1)
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

  const titleId = useId()

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setValue(event.target.value)
  }

  const onClear = (): void => {
    setValue("")
  }

  const isClear = Boolean(value) && isClearButton

  // Кнопка очистки. Иконка-крестик Phosphor задана в теме UiProvider (CloseButton)
  const rightSection = isClear ? (
    <CloseButton
      className={styles.clear}
      aria-label="Clear"
      disabled={disabled}
      onClick={onClear}
    />
  ) : null

  const fieldProps = {
    // С подписью растягивается обёртка, а поле занимает её ширину
    className: cn(
      styles.input,
      (fullWidth || (title && styleGrow)) && styles.fullWidth,
      !title && styleGrow && styles.grow,
      className,
    ),
    classNames: {
      wrapper: cn(
        styles.wrapper,
        isClear && styles.wrapperClear,
        multiline && styles.wrapperMultiline,
      ),
      input: styles.field,
      section: styles.section,
    },
    value,
    onChange,
    disabled,
    placeholder: label,
    // Имя поля для скринридеров: подпись над полем или подсказка
    ...(title ? { "aria-labelledby": titleId } : { "aria-label": label }),
    rightSection,
    rightSectionPointerEvents: "all" as const,
  }

  const renderInput = multiline ? (
    <Textarea {...fieldProps} rows={10} />
  ) : (
    <TextInput {...fieldProps} type={type} />
  )

  if (!title) {
    return renderInput
  }

  return (
    <div
      className={cn(
        styles.container,
        fullWidth && styles.fullWidth,
        styleGrow && styles.grow,
      )}
    >
      <div id={titleId} className={styles.title}>
        {title}
      </div>
      {renderInput}
    </div>
  )
}

export default UiInput
