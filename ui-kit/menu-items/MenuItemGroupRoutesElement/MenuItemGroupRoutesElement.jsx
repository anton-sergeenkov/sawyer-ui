"use client"

import MenuItem from "@mui/material/MenuItem"

import MenuToggleElement from "@/sawyer-react-lib/ui-kit/menu-navigation/MenuToggleElement"
import MenuItemRoutesElement from "@/sawyer-react-lib/ui-kit/menu-items/MenuItemRoutesElement"

// import { ITheme } from "@/sawyer-react-lib/types/common"
// import { ThemeMode as ThemeMenuButtonElement } from "@/sawyer-react-lib/ui-kit/menu-navigation/MenuButtonElement"

// TODO:
// interface I {
//   theme?: ITheme<ThemeMenuButtonElement>
//   list: IMenuItem[]
// }

import styles from "./MenuItemGroupRoutesElement.module.css"

const ChildComponent = (props) => {
  const { theme, list, onClose } = props

  return (
    <>
      {list.map((element, index) => (
        <div className={styles.link} key={index}>
          <MenuItem
            onClick={onClose}
            sx={{
              padding: 0,
              margin: 0,
              minHeight: "auto",
              cursor: "default",
            }}
          >
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

const MenuItemGroupRoutesElement = (props) => {
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
