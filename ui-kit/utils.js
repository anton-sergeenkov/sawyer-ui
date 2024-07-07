export const checkThemeMode = (theme, styles) => {
  const mode = theme?.mode ? styles["item--" + theme.mode] : ""
  return mode
}
