import cn from "classnames"

import { LinkElement } from "@/sawyer-react-lib/ui-kit"
import { OptionsElement } from "@/sawyer-react-lib/ui-kit"

import styles from "./LayoutCardElement.module.css"

// TODO:
// import { LayoutCardElement } from "@/sawyer-react-lib/ui-kit"
const PROPS = {
  theme: {
    mode: ["light", "dark"],
  },
  themeLink: {
    mode: "",
  },
  items: [
    {
      title: "Educational project",
      link: "https://letscode-dev.github.io/",
      img: null, // import coverLetscode from "./img/letscode.svg"
      description: "School of Frontend Development",
      links: [
        { name: "Website", link: "https://letscode-dev.github.io/" },
        { name: "YouTube", link: "https://www.youtube.com/c/letscode-dev" },
      ],
    },
  ],
  isOptions: true,
}

const LayoutCardElement = (props) => {
  const { theme, themeLink, items, isOptions = false } = props

  const itemMode = theme?.mode ? styles["item--" + theme.mode] : ""

  return (
    <div className={cn(styles.gridContainer, itemMode)}>
      {items.map((item, index) => (
        <div className={styles.gridItem} key={index}>
          <a
            href={item.link}
            className={styles.logo}
            style={{
              backgroundImage: `url(${item.img.src})`,
            }}
            target="_blank"
          ></a>

          <div className={styles.gridContent}>
            <h3 className={styles.header}>{item.title}</h3>
            <div className={styles.description}>{item.description}</div>

            {item.links.map((itemLink, indexLink) => (
              <div key={indexLink}>
                <LinkElement href={itemLink.link} theme={themeLink}>
                  {itemLink.name}
                </LinkElement>
              </div>
            ))}

            {isOptions && <OptionsElement options={item.links} />}
          </div>
        </div>
      ))}
    </div>
  )
}

export default LayoutCardElement
