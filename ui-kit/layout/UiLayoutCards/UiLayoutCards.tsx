import cn from "classnames"
import { checkTheme } from "../../utils"
import { UiLink } from "@/sawyer-ui/ui-kit"
import { TTheme as TThemeUiLink } from "@/sawyer-ui/ui-kit/basic/UiLink"
import OptionsElement from "@/sawyer-ui/ui-kit/surfaces/OptionsElement"
import { IStaticImageData } from "@/sawyer-ui/types/common"
import { robotoLight } from "@/sawyer-ui/app/fonts"

import styles from "./styles.module.css"

export const options = {
  theme: ["light", "dark"],
}

// TODO: Interface
interface IUiLayoutCardsItemsLinks {
  name: string
  link: string
}

// TODO: Interface
export interface IUiLayoutCardsItems {
  title: string
  link: string
  img: IStaticImageData
  description: string
  links: IUiLayoutCardsItemsLinks[]
}

interface IProps {
  theme?: "light" | "dark"
  themeLink?: TThemeUiLink
  items: IUiLayoutCardsItems[]
  isOptions?: boolean
}

const UiLayoutCards: React.FC<IProps> = (props) => {
  const { theme = "light", themeLink, items, isOptions = false } = props

  const stylesTheme = checkTheme(theme, styles)

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
                <UiLink href={itemLink.link} theme={themeLink}>
                  {itemLink.name}
                </UiLink>
              </div>
            ))}

            {isOptions && <OptionsElement options={element.links} />}
          </div>
        </div>
      ))}
    </div>
  )
}

export default UiLayoutCards
