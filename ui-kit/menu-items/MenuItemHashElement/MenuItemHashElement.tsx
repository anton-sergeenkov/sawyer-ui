import { ITheme } from "@/sawyer-react-lib/types/common"
import MenuButtonElement, {
  ThemeMode as ThemeMenuButtonElement,
} from "@/sawyer-react-lib/ui-kit/menu-navigation/MenuButtonElement"

// import styles from "./styles.module.css"

interface IMenuItemHashElementItems {
  title: string
  hash: string
}

interface IProps {
  theme?: ITheme<ThemeMenuButtonElement>
  item: IMenuItemHashElementItems
}

// FIXME: not used, not styled link
const MenuItemHashElement: React.FC<IProps> = (props) => {
  const { theme, item } = props

  return (
    <MenuButtonElement theme={theme}>
      <a href={`#${item.hash}`}>{item.title}</a>
    </MenuButtonElement>
  )
}

export default MenuItemHashElement
