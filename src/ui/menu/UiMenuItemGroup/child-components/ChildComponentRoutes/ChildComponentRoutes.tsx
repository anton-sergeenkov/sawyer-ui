import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, useMantineTheme } from "@mantine/core"

import type { IChildComponentProps } from "../../types/types"

// Пункты — ссылки next/link (переход без перезагрузки страницы).
// Текущая страница выделена основным цветом темы Mantine
const ChildComponentRoutes: React.FC<IChildComponentProps> = (props) => {
  const { list } = props

  const pathname = usePathname()
  const { primaryColor } = useMantineTheme()

  return (
    <>
      {list.map((element, index) => {
        const isActive = pathname === element.path

        return (
          <Menu.Item
            key={index}
            component={Link}
            href={element.path}
            color={isActive ? primaryColor : undefined}
            aria-current={isActive ? "page" : undefined}
          >
            {element.title}
          </Menu.Item>
        )
      })}
    </>
  )
}

export default ChildComponentRoutes
