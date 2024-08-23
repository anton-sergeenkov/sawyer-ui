"use client"

import MenuItem from "@mui/material/MenuItem"
import MenuToggleElement from "@/sawyer-react-lib/ui-kit/menu-navigation/MenuToggleElement"
import MenuItemRoutesElement from "@/sawyer-react-lib/ui-kit/menu-items/MenuItemRoutesElement"
import { IMenuItem, ITheme } from "@/sawyer-react-lib/types/common"
import { ThemeMode as ThemeMenuButtonElement } from "@/sawyer-react-lib/ui-kit/menu-navigation/MenuButtonElement"
import { IChildComponentProps } from "@/sawyer-react-lib/ui-kit/menu-navigation/MenuToggleElement/MenuToggleElement"
import { styleMenuItem } from "@/sawyer-react-lib/ui-kit/constants"

import styles from "./MenuItemGroupRoutesElement.module.css"

const ChildComponent: React.FC<IChildComponentProps> = (props) => {
  const { theme, list, onClose } = props

  return (
    <>
      {(list as IMenuItem[]).map((element, index) => (
        <div className={styles.link} key={index}>
          <MenuItem onClick={onClose} sx={styleMenuItem}>
            <MenuItemRoutesElement
              theme={theme}
              item={element}
              isTextLeft={true}
            />
          </MenuItem>
        </div>
      ))}
    </>
  )
}

interface IMenuItemGroupRoutesElementProps {
  className?: string
  theme?: ITheme<ThemeMenuButtonElement>
  list: IMenuItem[]
  title: string
  isAccent?: boolean
}

const MenuItemGroupRoutesElement: React.FC<IMenuItemGroupRoutesElementProps> = (
  props,
) => {
  const { theme, list, title, isAccent, className } = props

  return (
    <MenuToggleElement
      className={className}
      theme={theme}
      list={list}
      title={title}
      isAccent={isAccent}
      Component={ChildComponent}
    />
  )
}

export default MenuItemGroupRoutesElement
