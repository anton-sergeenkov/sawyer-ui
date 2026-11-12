import cn from "classnames"
import { ActionIcon, Menu } from "@mantine/core"
import { DotsThreeVertical } from "@phosphor-icons/react"
import UiLink from "../../basic/UiLink"
import { robotoLight } from "../../../fonts"
import { menuProps } from "../../../styles/menu"
import menuStyles from "../../../styles/menu.module.css"

import styles from "./styles.module.css"

// https://mantine.dev/core/menu/

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
    <div className={cn(styles.container, classes.container)}>
      {/* Меню закрывается само: по клику на пункт, клику мимо и Esc */}
      <Menu
        {...menuProps}
        classNames={{
          dropdown: menuStyles.dropdown,
          item: menuStyles.item,
          itemLabel: menuStyles.itemLabel,
        }}
      >
        <Menu.Target>
          <ActionIcon className={styles.button}>
            <DotsThreeVertical
              weight="bold"
              className={cn(styles.icon, classes.icon)}
            />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown>
          {options.map((element, index) => (
            // Пункт — div: внутри уже есть ссылка
            <Menu.Item key={index} component="div">
              <UiLink
                href={element.link}
                theme="dark-underlined"
                className={cn(styles.link, robotoLight.className, classes.link)}
              >
                {element.name}
              </UiLink>
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </div>
  )
}

export default UiOptions
