"use client"

// import cn from "classnames"
import MenuItem from "@mui/material/MenuItem"
import MenuToggleElement from "@/sawyer-react-lib/ui-kit/menu-navigation/MenuToggleElement"
import MenuItemRoutesElement from "@/sawyer-react-lib/ui-kit/menu-items/MenuItemRoutesElement"
import { IMenuItem, ITheme } from "@/sawyer-react-lib/types/common"
import { ThemeMode as ThemeUiMenuButton } from "@/sawyer-react-lib/ui-kit/menu-navigation/MenuButtonElement"
import { IChildComponentProps } from "@/sawyer-react-lib/ui-kit/menu-navigation/MenuToggleElement/MenuToggleElement"
import { styleMenuItem } from "@/sawyer-react-lib/ui-kit/constants"

import styles from "./styles.module.css"

// TODO: Interface
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

interface IProps {
  className?: string
  theme?: ITheme<ThemeUiMenuButton>
  list: IMenuItem[]
  title: string
  isAccent?: boolean
}

const MenuItemGroupRoutesElement: React.FC<IProps> = (props) => {
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
