// import cn from "classnames"
import { useState } from "react"
import Menu from "@mui/material/Menu"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import UiMenuNavButton from "../../../UiMenuNavButton"
import type { TTheme as TThemeMenuButton } from "../../../UiMenuNavButton"
import type { IMenuItem } from "../../../../types/common"

import type { IChildComponentProps } from "../../types/types"

// import styles from "./styles.module.css"

interface IProps {
  theme?: TThemeMenuButton
  className?: string
  list: IMenuItem[]
  title: string
  isAccent?: boolean
  Component: React.ComponentType<IChildComponentProps>
}

const UiMenuNavToggle: React.FC<IProps> = (props) => {
  const { theme, className, list, title, isAccent = false, Component } = props

  const [anchorEl, setAnchorEl] = useState<(EventTarget & Element) | null>(null)

  const open = Boolean(anchorEl)

  const handleClick = (event: React.SyntheticEvent) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={className}>
      <UiMenuNavButton
        theme={theme}
        isAccent={isAccent}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {title}
      </UiMenuNavButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <Component theme={theme} list={list} onClose={handleClose} />
      </Menu>
    </div>
  )
}

export default UiMenuNavToggle
