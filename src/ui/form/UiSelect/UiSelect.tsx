import { useId } from "react"
import cn from "classnames"
import { Select } from "@mantine/core"
import { CaretDown } from "@phosphor-icons/react"
import menuStyles from "../../../styles/menu.module.css"

import styles from "./styles.module.css"

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
  // Поле растягивается во flex-контейнере (flex-grow: 1)
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

  const titleId = useId()

  const onChange = (newValue: string | null): void => {
    if (newValue !== null) {
      setValue(newValue)
    }
  }

  const renderInput = (
    <Select
      // С подписью растягивается обёртка, а поле занимает её ширину
      className={cn(
        styles.input,
        title && styleGrow && styles.fullWidth,
        !title && styleGrow && styles.grow,
        className,
      )}
      classNames={{
        wrapper: styles.wrapper,
        input: styles.field,
        section: styles.section,
        dropdown: cn(menuStyles.dropdown, styles.dropdown),
        option: styles.option,
      }}
      data={items}
      value={value || null}
      onChange={onChange}
      disabled={disabled}
      // Подсказка видна, пока ничего не выбрано
      placeholder={label}
      // Имя поля для скринридеров: подпись над полем или подсказка
      {...(title ? { "aria-labelledby": titleId } : { "aria-label": label })}
      rightSection={<CaretDown weight="fill" />}
      withCheckIcon={false}
      allowDeselect={false}
      withScrollArea={false}
      // Пока ничего не выбрано, при открытии активен первый пункт
      selectFirstOptionOnDropdownOpen={!value}
      comboboxProps={{
        position: "bottom-start",
        offset: 0,
        middlewares: { shift: { padding: 16 } },
      }}
    />
  )

  if (!title) {
    return renderInput
  }

  return (
    <div className={cn(styles.container, styleGrow && styles.grow)}>
      <div id={titleId} className={styles.title}>
        {title}
      </div>
      {renderInput}
    </div>
  )
}

export default UiSelect
