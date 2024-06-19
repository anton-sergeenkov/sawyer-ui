"use client"

// import cn from "classnames"

import { useState } from "react"

import Menu from "@mui/material/Menu"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

import { MenuButtonElement } from "@/sawyer-react-lib/ui-kit"

// import styles from "./MenuToggleElement.module.css"

// TODO:
// import { MenuToggleElement } from "@/sawyer-react-lib/ui-kit"
const PROPS = {
  className: "",
  theme: {
    mode: ["light-violet"],
  },
  list: [],
  title: "",
  isAccent: true,
  Component: <></>,
}

const MenuToggleElement = (props) => {
  const { className, theme, list, title, isAccent, Component } = props

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
        <Component list={list} handleClose={handleClose} />
      </Menu>
    </div>
  )
}

export default MenuToggleElement
