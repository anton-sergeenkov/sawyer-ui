"use client"

// import cn from "classnames"

import { useState } from "react"

import Menu from "@mui/material/Menu"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

import MenuButtonElement from "@/sawyer-react-lib/ui-kit/menu-navigation/MenuButtonElement"

// TODO: theme from MenuButtonElement

// import styles from "./MenuToggleElement.module.css"

// [UiKit]
// import { MenuToggleElement } from "@/sawyer-react-lib/ui-kit"
const PROPS = {
  className: "",
  theme: {
    mode: "",
  },
  list: [],
  title: "",
  isAccent: true,
  Component: <></>,
}

const MenuToggleElement = (props) => {
  const { theme, className, list, title, isAccent, Component } = props

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={className}>
      <MenuButtonElement
        theme={theme}
        isAccent={isAccent}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {title}
      </MenuButtonElement>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <Component theme={theme} list={list} handleClose={handleClose} />
      </Menu>
    </div>
  )
}

export default MenuToggleElement
