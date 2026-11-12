import { Select } from "@mantine/core"

// https://mantine.dev/core/select/

export interface IUiSelectItem {
  value: string
  label: string
}

interface IProps {
  items: IUiSelectItem[]
  value: string
  setValue: (value: string) => void
  // Подсказка, пока ничего не выбрано (placeholder)
  label?: string
  // Подпись над полем
  title?: string
  disabled?: boolean
  // Поле растягивается во flex-контейнере (flex: 1)
  styleGrow?: boolean
  className?: string
}

const UiSelect: React.FC<IProps> = (props) => {
  const {
    items,
    value,
    setValue,
    label,
    title,
    disabled = false,
    styleGrow = false,
    className,
  } = props

  const onChange = (newValue: string | null): void => {
    if (newValue !== null) {
      setValue(newValue)
    }
  }

  return (
    // Выпадающий список в стандартном виде Mantine: title — подпись над полем (label),
    // label — подсказка (placeholder)
    <Select
      className={className}
      label={title}
      placeholder={label}
      // Без подписи имя поля для скринридеров — подсказка
      aria-label={title ? undefined : label}
      data={items}
      value={value || null}
      onChange={onChange}
      disabled={disabled}
      // Выбранный пункт не снимается повторным кликом: значение всегда задано
      allowDeselect={false}
      flex={styleGrow ? 1 : undefined}
    />
  )
}

export default UiSelect
