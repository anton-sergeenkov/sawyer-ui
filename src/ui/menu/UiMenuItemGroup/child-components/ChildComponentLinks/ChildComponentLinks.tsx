import { Menu } from "@mantine/core"

import UiMenuNavButton from "../../../UiMenuNavButton"

import type { IChildComponentProps } from "../../types/types"

import styles from "./styles.module.css"

const ChildComponentLinks: React.FC<IChildComponentProps> = (props) => {
  const { theme, list } = props

  return (
    <>
      {list.map((element, index) => (
        // Пункт — div: внутри уже есть ссылка с кнопкой
        <Menu.Item key={index} component="div">
          <a className={styles.linkLinks} href={element.path} target="_blank">
            <UiMenuNavButton
              theme={theme}
              isAccent={false}
              isActive={false}
              disabled={!!element.disabled}
              isHoverTransparent={true}
              isTextLeft={true}
            >
              {element.title}
            </UiMenuNavButton>
          </a>
        </Menu.Item>
      ))}
    </>
  )
}

export default ChildComponentLinks
