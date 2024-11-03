"use client"

// import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined'
import MenuItem from "@mui/material/MenuItem"
import MenuToggleElement from "@/sawyer-react-lib/ui-kit/menu-navigation/MenuToggleElement"
import MenuButtonElement, {
  ThemeMode as ThemeMenuButtonElement,
} from "@/sawyer-react-lib/ui-kit/menu-navigation/MenuButtonElement"
import { IMenuGroupItems, ITheme } from "@/sawyer-react-lib/types/common"
import { IChildComponentProps } from "@/sawyer-react-lib/ui-kit/menu-navigation/MenuToggleElement/MenuToggleElement"
import { styleMenuItem } from "@/sawyer-react-lib/ui-kit/constants"

import styles from "./styles.module.css"

const ChildComponent: React.FC<IChildComponentProps> = (props) => {
  const { theme, list, onClose } = props

  return (
    <>
      {(list as IMenuGroupItems).items.map((element, index) => (
        <MenuItem key={index} onClick={onClose} sx={styleMenuItem}>
          <a className={styles.link} href={element.path} target="_blank">
            <MenuButtonElement
              theme={theme}
              isAccent={false}
              isActive={false}
              disabled={!!element.disabled}
              isHoverTransparent={true}
              isTextLeft={true}
            >
              {element.title}
            </MenuButtonElement>
          </a>
        </MenuItem>
      ))}
    </>
  )
}

interface IMenuItemGroupLinksElementProps {
  className?: string
  theme?: ITheme<ThemeMenuButtonElement>
  list: IMenuGroupItems
  title: string
  isAccent: boolean
}

const MenuItemGroupLinksElement: React.FC<IMenuItemGroupLinksElementProps> = (
  props,
) => {
  const { theme, list, title, isAccent, className } = props

  return (
    <MenuToggleElement
      className={className}
      theme={theme}
      list={list}
      title={title}
      isAccent={isAccent}
      Component={ChildComponent}
    />
  )
}

export default MenuItemGroupLinksElement
