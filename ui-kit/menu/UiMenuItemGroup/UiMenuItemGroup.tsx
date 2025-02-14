"use client"

// import cn from "classnames"
import MenuItem from "@mui/material/MenuItem"

import UiMenuItemRoutes from "@/sawyer-ui/ui-kit/menu/UiMenuItemRoutes"
import { IMenuItem } from "@/sawyer-ui/types/common"
import UiMenuNavButton, {
  TTheme as TThemeMenuButton,
} from "@/sawyer-ui/ui-kit/menu/UiMenuNavButton"

import UiMenuNavToggle from "./components/UiMenuNavToggle"
import { IChildComponentProps } from "./components/UiMenuNavToggle/UiMenuNavToggle"

import styles from "./styles.module.css"

export const options = {
  type: ["routes", "links"],
}

type TType = "routes" | "links"

export const styleMenuItem = {
  padding: 0,
  margin: 0,
  minHeight: "auto",
  cursor: "default",
}

// TODO: Interface
const ChildComponentRoutes: React.FC<IChildComponentProps> = (props) => {
  const { theme, list, onClose } = props

  return (
    <>
      {list.map((element, index) => (
        <div className={styles.linkRoutes} key={index}>
          <MenuItem onClick={onClose} sx={styleMenuItem}>
            <UiMenuItemRoutes theme={theme} item={element} isTextLeft={true} />
          </MenuItem>
        </div>
      ))}
    </>
  )
}

// TODO: Interface
const ChildComponentLinks: React.FC<IChildComponentProps> = (props) => {
  const { theme, list, onClose } = props

  return (
    <>
      {list.map((element, index) => (
        <MenuItem key={index} onClick={onClose} sx={styleMenuItem}>
          <a className={styles.linkLinks} href={element.path} target="_blank">
            <UiMenuNavButton
              theme={theme}
              isAccent={false}
              isActive={false}
              disabled={!!element.disabled}
              isHoverTransparent={true}
              isTextLeft={true}
            >
              {element.title}
            </UiMenuNavButton>
          </a>
        </MenuItem>
      ))}
    </>
  )
}

interface IProps {
  className?: string
  theme?: TThemeMenuButton
  list: IMenuItem[]
  title: string
  isAccent?: boolean
  type: TType
}

const checkChildComponent = (type: TType) => {
  switch (type) {
    case "routes":
      return ChildComponentRoutes
    case "links":
      return ChildComponentLinks
    default:
      return ChildComponentRoutes
  }
}

const UiMenuItemGroup: React.FC<IProps> = (props) => {
  const { type, theme, list, title, isAccent, className } = props

  return (
    <UiMenuNavToggle
      className={className}
      theme={theme}
      list={list}
      title={title}
      isAccent={isAccent}
      Component={checkChildComponent(type)}
    />
  )
}

export default UiMenuItemGroup
