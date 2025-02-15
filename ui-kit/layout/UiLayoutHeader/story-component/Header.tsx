import cn from "classnames"

import UiMenuItemGroup from "@/sawyer-ui/ui-kit/menu/UiMenuItemGroup"
import UiMenuItemRoutes from "@/sawyer-ui/ui-kit/menu/UiMenuItemRoutes"
import UiMenuItemHash from "@/sawyer-ui/ui-kit/menu/UiMenuItemHash"

import styles from "./Header.module.css"

export const ROUTES = [
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contacts",
    path: "/contacts",
  },
]

export const ROUTES_LINKS = [
  {
    title: "Google",
    path: "https://www.google.com/",
  },
  {
    title: "Yandex",
    path: "https://ya.ru/",
  },
]

const THEME_MENU = "light-blue"

const Header: React.FC = () => {
  return (
    <ul>
      {/* Links (Desktop + Mobile) */}
      <li>
        <UiMenuItemGroup
          type="links"
          theme={THEME_MENU}
          list={ROUTES_LINKS}
          title="Links"
          isAccent
        />
      </li>

      {/* Routes (Mobile) */}
      <li className={cn(styles.mobile)}>
        <UiMenuItemGroup
          type="routes"
          theme={THEME_MENU}
          list={ROUTES}
          title="Menu"
        />
      </li>

      {/* Routes (Desktop) */}
      {ROUTES.map((element, index) => (
        <li className={cn(styles.desktop)} key={index}>
          <UiMenuItemRoutes theme={THEME_MENU} item={element} />
        </li>
      ))}

      {/* Hask (Desktop) */}
      <li className={cn(styles.desktop)}>
        <UiMenuItemHash
          theme={THEME_MENU}
          item={{
            title: "Section",
            hash: "section",
          }}
        />
      </li>
    </ul>
  )
}

export default Header
