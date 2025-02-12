"use client"

// import cn from "classnames"
// import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined'
import MenuItem from "@mui/material/MenuItem"
import UiMenuNavToggle from "@/sawyer-ui/ui-kit/menu/UiMenuNavToggle"
import UiMenuNavButton, {
  TTheme as TThemeMenuButton,
} from "@/sawyer-ui/ui-kit/menu/UiMenuNavButton"
import { IMenuGroupItems } from "@/sawyer-ui/types/common"
import { IChildComponentProps } from "@/sawyer-ui/ui-kit/menu/UiMenuNavToggle/UiMenuNavToggle"
import { styleMenuItem } from "@/sawyer-ui/ui-kit/constants"

import styles from "./styles.module.css"

/* FIXME: Import
import UiMenuItemGroupLinks from "@/sawyer-ui/ui-kit/menu/UiMenuItemGroupLinks"
*/

// TODO: Interface
const ChildComponent: React.FC<IChildComponentProps> = (props) => {
  const { theme, list, onClose } = props

  return (
    <>
      {(list as IMenuGroupItems).items.map((element, index) => (
        <MenuItem key={index} onClick={onClose} sx={styleMenuItem}>
          <a className={styles.link} href={element.path} target="_blank">
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
  list: IMenuGroupItems
  title: string
  isAccent: boolean
}

const UiMenuItemGroupLinks: React.FC<IProps> = (props) => {
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

export default UiMenuItemGroupLinks
