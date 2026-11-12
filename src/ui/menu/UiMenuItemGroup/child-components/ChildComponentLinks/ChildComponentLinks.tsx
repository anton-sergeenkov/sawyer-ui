import { Menu } from "@mantine/core"

import type { IChildComponentProps } from "../../types/types"

// Пункты — внешние ссылки, открываются в новой вкладке.
// У отключённого пункта нет href, поэтому по нему нельзя перейти
const ChildComponentLinks: React.FC<IChildComponentProps> = (props) => {
  const { list } = props

  return (
    <>
      {list.map((element, index) => (
        <Menu.Item
          key={index}
          component="a"
          href={element.disabled ? undefined : element.path}
          target="_blank"
          disabled={!!element.disabled}
        >
          {element.title}
        </Menu.Item>
      ))}
    </>
  )
}

export default ChildComponentLinks
