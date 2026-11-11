// import cn from "classnames"
import UiMenuNavButton from "../UiMenuNavButton"
import type { TTheme as TThemeMenuButton } from "../UiMenuNavButton"

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
