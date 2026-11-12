import cn from "classnames"
import { ActionIcon, Menu } from "@mantine/core"
import { DotsThreeVertical } from "@phosphor-icons/react"

import styles from "./styles.module.css"

// https://mantine.dev/core/menu/
// https://mantine.dev/core/action-icon/

// TODO: Interface
interface IOptionsOptions {
  name: string
  link: string
}

// TODO: Interface
interface IOptionsClasses {
  container: string
  icon: string
  link: string
}

interface IProps {
  options: IOptionsOptions[]
  classes?: IOptionsClasses
}

const UiOptions: React.FC<IProps> = (props) => {
  const {
    options,
    classes = {
      container: "",
      icon: "",
      link: "",
    },
  } = props

  return (
    // Круглая кнопка в правом верхнем углу карточки (у карточки position: relative)
    <div className={cn(styles.container, classes.container)}>
      {/* Меню в стандартном виде Mantine, по левому краю кнопки.
          Закрывается само: по клику на пункт, клику мимо и Esc */}
      <Menu shadow="md" position="bottom-start">
        <Menu.Target>
          <ActionIcon className={styles.button} aria-label="Options">
            <DotsThreeVertical
              weight="bold"
              className={cn(styles.icon, classes.icon)}
            />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown>
          {options.map((element, index) => (
            // Пункт — ссылка, открывается в новой вкладке
            <Menu.Item
              key={index}
              component="a"
              href={element.link}
              target="_blank"
              className={classes.link}
            >
              {element.name}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </div>
  )
}

export default UiOptions
