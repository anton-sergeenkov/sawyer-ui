import cn from "classnames"
import type { IStaticImageData } from "@/sawyer-ui/types/common"

import styles from "./styles.module.css"

// TODO: Interface
export interface IUiSocialLinksList {
  img: IStaticImageData
  title: string
  link: string
}

interface IProps {
  list: IUiSocialLinksList[]
  className?: string
}

const UiSocialLinks: React.FC<IProps> = (props) => {
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

export default UiSocialLinks
