// import cn from "classnames"

import type { IMenuItem } from "../../../types/common"
import type { TTheme as TThemeMenuButton } from "../UiMenuNavButton"

import UiMenuNavToggle from "./components/UiMenuNavToggle"
import ChildComponentRoutes from "./child-components/ChildComponentRoutes"
import ChildComponentLinks from "./child-components/ChildComponentLinks"

// import styles from "./styles.module.css"

export const options = {
  type: ["routes", "links"],
}

type TType = "routes" | "links"

interface IProps {
  className?: string
  theme?: TThemeMenuButton
  list: IMenuItem[]
  title: string
  isAccent?: boolean
  type: TType
}

const getChildComponent = (type: TType) => {
  switch (type) {
    case "routes":
      return ChildComponentRoutes
    case "links":
      return ChildComponentLinks
    default:
      return ChildComponentRoutes
  }
}

const UiMenuItemGroup: React.FC<IProps> = (props) => {
  const { type, theme, list, title, isAccent, className } = props

  return (
    <UiMenuNavToggle
      className={className}
      theme={theme}
      list={list}
      title={title}
      isAccent={isAccent}
      Component={getChildComponent(type)}
    />
  )
}

export default UiMenuItemGroup
