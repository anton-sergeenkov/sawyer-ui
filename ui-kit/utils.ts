import { ITheme } from "@/sawyer-react-lib/types/common"

export const checkThemeMode = <T>(
  theme: ITheme<T> | undefined,
  styles: { readonly [key: string]: string },
): any => {
  const mode = theme?.mode ? styles["item--" + theme.mode] : ""
  return mode
}
