interface IStaticImageData {
  src: string
  height: number
  width: number
  blurDataURL?: string
  blurWidth?: number
  blurHeight?: number
}

export interface ISocialLinksElementList {
  img: IStaticImageData // import coverLinkedin from "./img/linkedin.svg"
  title: string // "Linkedin"
  link: string // "https://www.linkedin.com/in/sergeenkov-anton"
}
