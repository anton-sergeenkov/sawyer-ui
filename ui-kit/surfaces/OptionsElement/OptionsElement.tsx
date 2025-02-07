"use client"

import cn from "classnames"
import { useState } from "react"
import { IconButton, Menu, MenuItem } from "@mui/material"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import UiLink from "@/sawyer-react-lib/ui-kit/basic/UiLink"
import { robotoLight } from "@/sawyer-react-lib/app/fonts"

import styles from "./styles.module.css"

// TODO: Interface
interface IOptionsElementOptions {
  name: string
  link: string
}

// TODO: Interface
interface IOptionsElementClasses {
  container: string
  icon: string
  link: string
}

interface IProps {
  options: IOptionsElementOptions[]
  classes?: IOptionsElementClasses
}

const OptionsElement: React.FC<IProps> = (props) => {
  const {
    options,
    classes = {
      container: "",
      button: "",
      icon: "",
      link: "",
    },
  } = props

  const [anchorEl, setAnchorEl] = useState<(EventTarget & Element) | null>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.SyntheticEvent): void => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (): void => {
    setAnchorEl(null)
  }

  return (
    <div className={cn(styles.container, classes.container)}>
      <IconButton onClick={handleClick} className={styles.button}>
        <MoreVertIcon className={cn(styles.icon, classes.icon)} />
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {options.map((element, index) => (
          <MenuItem
            key={index}
            onClick={handleClose}
            sx={{ minHeight: "auto" }}
          >
            <UiLink
              href={element.link}
              theme="dark-underlined"
              className={cn(styles.link, robotoLight.className, classes.link)}
            >
              {element.name}
            </UiLink>
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default OptionsElement
