"use client"

// import cn from "classnames"
import MenuItem from "@mui/material/MenuItem"
import UiMenuNavToggle from "@/sawyer-ui/ui-kit/menu/UiMenuNavToggle"
import UiMenuItemRoutes from "@/sawyer-ui/ui-kit/menu/UiMenuItemRoutes"
import { IMenuItem, ITheme } from "@/sawyer-ui/types/common"
import { ThemeMode as ThemeUiMenuButton } from "@/sawyer-ui/ui-kit/menu/UiMenuNavButton"
import { IChildComponentProps } from "@/sawyer-ui/ui-kit/menu/UiMenuNavToggle/UiMenuNavToggle"
import { styleMenuItem } from "@/sawyer-ui/ui-kit/constants"

import styles from "./styles.module.css"

// TODO: Interface
const ChildComponent: React.FC<IChildComponentProps> = (props) => {
  const { theme, list, onClose } = props

  return (
    <>
      {(list as IMenuItem[]).map((element, index) => (
        <div className={styles.link} key={index}>
          <MenuItem onClick={onClose} sx={styleMenuItem}>
            <UiMenuItemRoutes theme={theme} item={element} isTextLeft={true} />
          </MenuItem>
        </div>
      ))}
    </>
  )
}

interface IProps {
  className?: string
  theme?: ITheme<ThemeUiMenuButton>
  list: IMenuItem[]
  title: string
  isAccent?: boolean
}

const UiMenuItemGroupRoutes: React.FC<IProps> = (props) => {
  const { theme, list, title, isAccent, className } = props

  return (
    <UiMenuNavToggle
      className={className}
      theme={theme}
      list={list}
      title={title}
      isAccent={isAccent}
      Component={ChildComponent}
    />
  )
}

export default UiMenuItemGroupRoutes
