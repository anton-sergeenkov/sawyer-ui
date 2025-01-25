import cn from "classnames"
import { checkThemeMode } from "../../utils"
import LinkElement, {
  ThemeMode as ThemeLinkElement,
} from "@/sawyer-react-lib/ui-kit/basic/LinkElement"
import OptionsElement from "@/sawyer-react-lib/ui-kit/surfaces/OptionsElement"
import {
  ITheme,
  IThemeElements,
  IStaticImageData,
} from "@/sawyer-react-lib/types/common"
import { robotoLight } from "@/sawyer-react-lib/app/fonts"

import styles from "./styles.module.css"

export enum ThemeMode {
  LIGHT = "light",
  DARK = "dark",
}

// TODO: Interface
interface ILayoutCardsElementItemsLinks {
  name: string
  link: string
}

// TODO: Interface
export interface ILayoutCardsElementItems {
  title: string
  link: string
  img: IStaticImageData
  description: string
  links: ILayoutCardsElementItemsLinks[]
}

interface IProps {
  theme?: ITheme<ThemeMode>
  themeLink?: IThemeElements<ThemeLinkElement>
  items: ILayoutCardsElementItems[]
  isOptions?: boolean
}

const LayoutCardsElement: React.FC<IProps> = (props) => {
  const { theme, themeLink, items, isOptions = false } = props

  const stylesTheme = checkThemeMode<ThemeMode>(theme, styles)

  return (
    <div className={cn(styles.gridContainer, stylesTheme)}>
      {items.map((element, index) => (
        <div className={styles.gridItem} key={index}>
          <a
            href={element.link}
            className={styles.logo}
            style={{
              backgroundImage: `url(${element.img.src})`,
            }}
            target="_blank"
          ></a>

          <div className={styles.gridContent}>
            <h3 className={styles.header}>{element.title}</h3>
            <div className={cn(robotoLight.className, styles.description)}>
              {element.description}
            </div>

            {element.links.map((itemLink, indexLink) => (
              <div key={indexLink}>
                <LinkElement href={itemLink.link} theme={themeLink}>
                  {itemLink.name}
                </LinkElement>
              </div>
            ))}

            {isOptions && <OptionsElement options={element.links} />}
          </div>
        </div>
      ))}
    </div>
  )
}

export default LayoutCardsElement
