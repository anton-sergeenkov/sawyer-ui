export interface ITheme<T> {
  mode: T // "light" | "dark"
  filled?: boolean
  outlined?: boolean
  notUnderlined?: boolean
}
