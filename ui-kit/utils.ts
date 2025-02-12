export const checkTheme = (
  theme: string | undefined,
  styles: { readonly [key: string]: string },
): any => {
  const mode = theme ? styles["item--" + theme] : ""
  return mode
}
