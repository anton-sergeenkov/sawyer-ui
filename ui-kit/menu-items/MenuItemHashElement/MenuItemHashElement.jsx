import { MenuButtonElement } from "@/sawyer-react-lib/ui-kit"

// import styles from "./MenuItemHashElement.module.css"

// FIXME: not used, not styled link
const MenuItemHashElement = (props) => {
  const { theme, item } = props

  return (
    <MenuButtonElement theme={theme}>
      <a href={`#${item.hash}`}>{item.title}</a>
    </MenuButtonElement>
  )
}

export default MenuItemHashElement
