"use client"

// import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined'
import MenuItem from "@mui/material/MenuItem"

import { MenuButtonElement, MenuToggleElement } from "@/sawyer-react-lib/ui-kit"

import styles from "./MenuItemGroupLinksElement.module.css"

const ChildComponent = (props) => {
  const { theme, list, handleClose } = props

  return (
    <>
      {list.items.map((element, index) => (
        <MenuItem
          key={index}
          onClick={handleClose}
          sx={{
            padding: 0,
            margin: 0,
            minHeight: "auto",
            cursor: "default",
          }}
        >
          <MenuButtonElement
            theme={theme}
            isAccent={false}
            isActive={false}
            disabled={element.disabled}
            isHoverTransparent={true}
            isTextLeft={true}
          >
            {!element.disabled ? (
              <a className={styles.link} href={element.path} target="_blank">
                {element.title}
              </a>
            ) : (
              <span>{element.title}</span>
            )}
          </MenuButtonElement>
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
