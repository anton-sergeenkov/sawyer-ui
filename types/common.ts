// import image from "./image.svg"
export interface IStaticImageData {
  src: string
  height: number
  width: number
  blurDataURL?: string
  blurWidth?: number
  blurHeight?: number
}

export interface IMenuItem {
  title: string
  path: string
  // FIXME: not correct
  disabled?: boolean
}

export type TOnClick = (event: React.SyntheticEvent) => void | null

export interface IListCommon {
  title: string
  items: string[]
}
