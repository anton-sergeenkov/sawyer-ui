import MenuButtonElement from "@/sawyer-react-lib/ui-kit/menu-navigation/MenuButtonElement"

// import styles from "./MenuItemHashElement.module.css"

// TODO: theme from MenuButtonElement

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
