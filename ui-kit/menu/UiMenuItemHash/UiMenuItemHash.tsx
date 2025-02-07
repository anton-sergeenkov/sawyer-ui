// import cn from "classnames"
import { ITheme } from "@/sawyer-react-lib/types/common"
import UiMenuNavButton, {
  ThemeMode as ThemeUiMenuButton,
} from "@/sawyer-react-lib/ui-kit/menu/UiMenuNavButton"

// import styles from "./styles.module.css"

interface IMenuItemHashElementItems {
  title: string
  hash: string
}

interface IProps {
  theme?: ITheme<ThemeUiMenuButton>
  item: IMenuItemHashElementItems
}

// FIXME: not used, not styled link
const UiMenuItemHash: React.FC<IProps> = (props) => {
  const { theme, item } = props

  return (
    <UiMenuNavButton theme={theme}>
      <a href={`#${item.hash}`}>{item.title}</a>
    </UiMenuNavButton>
  )
}

export default UiMenuItemHash
