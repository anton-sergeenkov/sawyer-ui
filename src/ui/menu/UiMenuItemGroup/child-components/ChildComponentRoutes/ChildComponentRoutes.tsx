import { Menu } from "@mantine/core"
import UiMenuItemRoutes from "../../../UiMenuItemRoutes"

import type { IChildComponentProps } from "../../types/types"

import styles from "./styles.module.css"

const ChildComponentRoutes: React.FC<IChildComponentProps> = (props) => {
  const { theme, list } = props

  return (
    <>
      {list.map((element, index) => (
        <div className={styles.linkRoutes} key={index}>
          {/* Пункт — div: внутри уже есть ссылка с кнопкой */}
          <Menu.Item component="div">
            <UiMenuItemRoutes theme={theme} item={element} isTextLeft={true} />
          </Menu.Item>
        </div>
      ))}
    </>
  )
}

export default ChildComponentRoutes
