export interface ITheme<T> {
  mode: T // "light" | "dark"
  filled?: boolean
  outlined?: boolean
  notUnderlined?: boolean
}

export interface IThemeElements<T> {
  mode: T // "light" | "dark"
}

export interface IStaticImageData {
  src: string
  height: number
  width: number
  blurDataURL?: string
  blurWidth?: number
  blurHeight?: number
}
