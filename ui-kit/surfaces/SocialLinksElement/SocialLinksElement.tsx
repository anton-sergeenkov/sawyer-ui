import cn from "classnames"
import { ISocialLinksElementList } from "./types"

import styles from "./SocialLinksElement.module.css"

interface ISocialLinksElement {
  list: ISocialLinksElementList[]
  className?: string
}

const SocialLinksElement: React.FC<ISocialLinksElement> = (props) => {
  const { list, className } = props

  return (
    <div className={cn(styles.container, className)}>
      {list.map((element, index) => (
        <a
          key={index}
          href={element.link}
          title={element.title}
          target="_blank"
          className={styles.link}
          style={{
            backgroundImage: `url(${element.img.src})`,
          }}
        ></a>
      ))}
    </div>
  )
}

export default SocialLinksElement
