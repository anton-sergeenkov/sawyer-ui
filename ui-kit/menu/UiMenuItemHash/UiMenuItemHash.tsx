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

const UiMenuItemHash: React.FC<IProps> = (props) => {
  const { theme, item } = props

  return (
    <a href={`#${item.hash}`}>
      <UiMenuNavButton theme={theme}>{item.title}</UiMenuNavButton>
    </a>
  )
}

export default UiMenuItemHash
