"use client"

import { useState } from "react"
import cn from "classnames"

import { IconButton, Menu, MenuItem } from "@mui/material"
import MoreVertIcon from "@mui/icons-material/MoreVert"

import { LinkElement } from "@/sawyer-react-lib/ui-kit"

import styles from "./OptionsElement.module.css"

// TODO:
// import { OptionsElement } from "@/sawyer-react-lib/ui-kit"
const PROPS = {
  options: [
    { name: "Website", link: "https://letscode-dev.github.io/" },
    { name: "YouTube", link: "https://www.youtube.com/c/letscode-dev" },
  ],
  classes: {
    container: "",
    icon: "",
    link: "",
  },
}

const OptionsElement = (props) => {
  const {
    options,
    classes = {
      container: "",
      button: "",
      icon: "",
      link: "",
    },
  } = props

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={cn(styles.container, classes.container)}>
      <IconButton onClick={handleClick} className={styles.button}>
        <MoreVertIcon className={cn(styles.icon, classes.icon)} />
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {options.map((item, index) => (
          <MenuItem
            key={index}
            onClick={handleClose}
            sx={{ minHeight: "auto" }}
          >
            <LinkElement
              href={item.link}
              theme={{
                mode: "dark-underlined",
              }}
              className={cn(styles.link, classes.link)}
            >
              {item.name}
            </LinkElement>
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default OptionsElement
