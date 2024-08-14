"use client"

// import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined'
import MenuItem from "@mui/material/MenuItem"

import { MenuToggleElement } from "@/sawyer-react-lib/ui-kit"
import MenuButtonElement from "@/sawyer-react-lib/ui-kit/menu-navigation/MenuButtonElement"

import styles from "./MenuItemGroupLinksElement.module.css"

// TODO: theme from MenuButtonElement

const ChildComponent = (props) => {
  const { theme, list, onClose } = props

  return (
    <>
      {list.items.map((element, index) => (
        <MenuItem
          key={index}
          onClick={onClose}
          sx={{
            padding: 0,
            margin: 0,
            minHeight: "auto",
            cursor: "default",
          }}
        >
          <a className={styles.link} href={element.path} target="_blank">
            <MenuButtonElement
              theme={theme}
              isAccent={false}
              isActive={false}
              disabled={element.disabled}
              isHoverTransparent={true}
              isTextLeft={true}
            >
              {element.title}
            </MenuButtonElement>
          </a>
        </MenuItem>
      ))}
    </>
  )
}

const MenuItemGroupLinksElement = (props) => {
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

export default MenuItemGroupLinksElement
