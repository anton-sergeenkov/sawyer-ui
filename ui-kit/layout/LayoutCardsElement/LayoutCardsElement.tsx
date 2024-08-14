import cn from "classnames"
import { checkThemeMode } from "../../utils"
import { LinkElement } from "@/sawyer-react-lib/ui-kit"
import OptionsElement from "@/sawyer-react-lib/ui-kit/surfaces/OptionsElement"
import { ITheme, IThemeElements } from "@/sawyer-react-lib/types/common"
import type { IStaticImageData } from "@/sawyer-react-lib/types/common"
import { ThemeMode as ThemeLinkElement } from "@/sawyer-react-lib/ui-kit/basic/LinkElement"

import styles from "./LayoutCardsElement.module.css"

export enum ThemeMode {
  LIGHT = "light",
  DARK = "dark",
}

interface ILayoutCardsElementItemsLinks {
  name: string
  link: string
}

export interface ILayoutCardsElementItems {
  title: string
  link: string
  img: IStaticImageData
  description: string
  links: ILayoutCardsElementItemsLinks[]
}

interface ILayoutCardsElement {
  theme?: ITheme<ThemeMode>
  themeLink?: IThemeElements<ThemeLinkElement>
  items: ILayoutCardsElementItems[]
  isOptions?: boolean
}

const LayoutCardsElement: React.FC<ILayoutCardsElement> = (props) => {
  const { theme, themeLink, items, isOptions = false } = props

  const stylesTheme = checkThemeMode(theme, styles)

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
            <div className={styles.description}>{element.description}</div>

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
