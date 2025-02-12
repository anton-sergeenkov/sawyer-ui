// import cn from "classnames"
import UiMenuNavButton, {
  TTheme as TThemeMenuButton,
} from "@/sawyer-ui/ui-kit/menu/UiMenuNavButton"

// import styles from "./styles.module.css"

interface IUiMenuItemHashItems {
  title: string
  hash: string
}

interface IProps {
  theme?: TThemeMenuButton
  item: IUiMenuItemHashItems
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
