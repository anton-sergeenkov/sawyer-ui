import { ITheme } from "@/sawyer-react-lib/types/common"

export const checkThemeMode = <T>(
  theme: ITheme<T> | undefined,
  styles: { readonly [key: string]: string },
): any => {
  const mode = theme?.mode ? styles["item--" + theme.mode] : ""
  return mode
}

export const checkTheme = (
  theme: string | undefined,
  styles: { readonly [key: string]: string },
): any => {
  const mode = theme ? styles["item--" + theme] : ""
  return mode
}
