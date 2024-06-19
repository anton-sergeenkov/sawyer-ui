"use client"

import MenuItem from "@mui/material/MenuItem"

import {
  MenuItemRoutesElement,
  MenuToggleElement,
} from "@/sawyer-react-lib/ui-kit"

import styles from "./MenuItemGroupRoutesElement.module.css"

const ChildComponent = (props) => {
  const { theme, list, handleClose } = props

  return (
    <>
      {list.map((item, index) => (
        <div className={styles.link} key={index}>
          <MenuItem
            onClick={handleClose}
            sx={{
              padding: 0,
              margin: 0,
              minHeight: "auto",
              cursor: "default",
            }}
          >
            <MenuItemRoutesElement theme={theme} item={item} />
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
