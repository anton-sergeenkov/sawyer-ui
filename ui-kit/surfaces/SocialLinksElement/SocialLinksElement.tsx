import cn from "classnames"
import type { IStaticImageData } from "@/sawyer-react-lib/types/common"

import styles from "./SocialLinksElement.module.css"

export interface ISocialLinksElementList {
  img: IStaticImageData
  title: string
  link: string
}

interface ISocialLinksElementProps {
  list: ISocialLinksElementList[]
  className?: string
}

const SocialLinksElement: React.FC<ISocialLinksElementProps> = (props) => {
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
