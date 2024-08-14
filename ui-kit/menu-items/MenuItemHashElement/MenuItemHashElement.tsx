import { ITheme } from "@/sawyer-react-lib/types/common"
import MenuButtonElement, {
  ThemeMode as ThemeMenuButtonElement,
} from "@/sawyer-react-lib/ui-kit/menu-navigation/MenuButtonElement"

// import styles from "./MenuItemHashElement.module.css"

interface IItems {
  title: string
  hash: string
}

interface IMenuItemHashElement {
  theme?: ITheme<ThemeMenuButtonElement>
  item: IItems
}

// FIXME: not used, not styled link
const MenuItemHashElement: React.FC<IMenuItemHashElement> = (props) => {
  const { theme, item } = props

  return (
    <MenuButtonElement theme={theme}>
      <a href={`#${item.hash}`}>{item.title}</a>
    </MenuButtonElement>
  )
}

export default MenuItemHashElement
