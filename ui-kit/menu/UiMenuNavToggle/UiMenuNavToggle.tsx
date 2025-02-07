"use client"

// import cn from "classnames"
import { useState } from "react"
import Menu from "@mui/material/Menu"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { ITheme } from "@/sawyer-ui/types/common"
import UiMenuNavButton, {
  ThemeMode as ThemeUiMenuButton,
} from "@/sawyer-ui/ui-kit/menu/UiMenuNavButton"
import type {
  IMenuItem,
  IMenuGroupItems,
} from "@/sawyer-ui/types/common"

// import styles from "./styles.module.css"

type TList = IMenuItem[] | IMenuGroupItems

// TODO: Interface
export interface IChildComponentProps {
  theme?: ITheme<ThemeUiMenuButton>
  list: TList
  onClose: () => void
}

interface IProps {
  theme?: ITheme<ThemeUiMenuButton>
  className?: string
  list: TList
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
