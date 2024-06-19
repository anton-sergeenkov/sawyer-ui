import { theme as themeLightViolet } from "./themes/light-violet"
import { theme as themeDefault } from "./themes/default"

const themes = ["light-violet"]

export const getTheme = (theme) => {
  switch (theme) {
    case "light-violet":
      return themeLightViolet
    default:
      return themeDefault
  }
}

export const getStyles = (theme, isAccent, isActive) => {
  const {
    // Button
    StylesButtonDefault,
    StylesButtonAccent,
    StylesButtonActive,
    // Text
    StylesTextDefault,
    StylesTextAccent,
    StylesTextActive,
  } = getTheme(theme)

  const stylesButton = {
    ...StylesButtonDefault,
    ...(isAccent && StylesButtonAccent),
    ...(!isAccent && isActive && StylesButtonActive),
  }

  const stylesText = {
    ...StylesTextDefault,
    ...(isAccent && StylesTextAccent),
    ...(!isAccent && isActive && StylesTextActive),
  }

  return {
    stylesButton,
    stylesText,
  }
}
