import { Menu } from "@mantine/core"
import { CaretDown } from "@phosphor-icons/react"
import UiMenuNavButton from "../../../UiMenuNavButton"
import type { TTheme as TThemeMenuButton } from "../../../UiMenuNavButton"
import type { IMenuItem } from "../../../../../types/common"

import type { IChildComponentProps } from "../../types/types"

import styles from "./styles.module.css"

// https://mantine.dev/core/menu/

interface IProps {
  theme?: TThemeMenuButton
  className?: string
  list: IMenuItem[]
  title: string
  isAccent?: boolean
  Component: React.ComponentType<IChildComponentProps>
}

const UiMenuNavToggle: React.FC<IProps> = (props) => {
  const { theme, className, list, title, isAccent = false, Component } = props

  return (
    <div className={className}>
      {/* Выпадающее меню в стандартном виде Mantine, по левому краю кнопки.
          Закрывается само: по клику на пункт, клику мимо и Esc */}
      <Menu shadow="md" position="bottom-start">
        <Menu.Target>
          <UiMenuNavButton
            theme={theme}
            isAccent={isAccent}
            endIcon={<CaretDown weight="bold" className={styles.chevron} />}
          >
            {title}
          </UiMenuNavButton>
        </Menu.Target>

        <Menu.Dropdown>
          <Component list={list} />
        </Menu.Dropdown>
      </Menu>
    </div>
  )
}

export default UiMenuNavToggle
