"use client"

// import cn from "classnames"
// import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined'
import MenuItem from "@mui/material/MenuItem"
import UiMenuNavToggle from "@/sawyer-react-lib/ui-kit/menu/UiMenuNavToggle"
import UiMenuNavButton, {
  ThemeMode as ThemeUiMenuButton,
} from "@/sawyer-react-lib/ui-kit/menu/UiMenuNavButton"
import { IMenuGroupItems, ITheme } from "@/sawyer-react-lib/types/common"
import { IChildComponentProps } from "@/sawyer-react-lib/ui-kit/menu/UiMenuNavToggle/UiMenuNavToggle"
import { styleMenuItem } from "@/sawyer-react-lib/ui-kit/constants"

import styles from "./styles.module.css"

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
  theme?: ITheme<ThemeUiMenuButton>
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
