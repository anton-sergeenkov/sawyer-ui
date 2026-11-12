import { Menu } from "@mantine/core"
import { CaretDown } from "@phosphor-icons/react"
import UiMenuNavButton from "../../../UiMenuNavButton"
import type { TTheme as TThemeMenuButton } from "../../../UiMenuNavButton"
import type { IMenuItem } from "../../../../../types/common"
import { menuProps } from "../../../../../styles/menu"
import menuStyles from "../../../../../styles/menu.module.css"

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
      {/* Меню закрывается само: по клику на пункт, клику мимо и Esc */}
      <Menu
        {...menuProps}
        classNames={{
          dropdown: menuStyles.dropdown,
          item: menuStyles.itemNav,
          itemLabel: menuStyles.itemLabel,
        }}
      >
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
          <Component theme={theme} list={list} />
        </Menu.Dropdown>
      </Menu>
    </div>
  )
}

export default UiMenuNavToggle
