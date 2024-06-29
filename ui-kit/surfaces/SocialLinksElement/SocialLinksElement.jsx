import cn from "classnames"

import styles from "./SocialLinksElement.module.css"

// TODO:
// import { SocialLinksElement } from "@/sawyer-react-lib/ui-kit"
const PROPS = {
  // Material-UI Button props
  list: [
    {
      img: "", // import coverLinkedin from "./img/linkedin.svg"
      title: "Linkedin",
      link: "https://www.linkedin.com/in/sergeenkov-anton",
    },
  ],
  className: "",
}

const SocialLinksElement = (props) => {
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
