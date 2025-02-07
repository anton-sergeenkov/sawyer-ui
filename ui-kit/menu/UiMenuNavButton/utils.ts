import { CSSProperties } from "react"
import { theme as themeLightBlue } from "./themes/light-blue"
import { theme as themeDefault } from "./themes/default"
import { ThemeMode } from "./UiMenuNavButton"

export const getTheme = (theme: ThemeMode | undefined) => {
  switch (theme) {
    case ThemeMode.LIGHT_BLUE:
      return themeLightBlue
    default:
      return themeDefault
  }
}

const stylesButtonHover = {
  ":hover": {
    background: "none",
  },
}

const stylesTextDisabled = {
  color: "var(--color-gray-50)",
}

interface IGetStyles {
  mode: ThemeMode | undefined
  isAccent?: boolean
  isActive?: boolean
  isHoverTransparent?: boolean
  isDisabled?: boolean
  isTextLeft?: boolean
}

interface IGetStylesReturn {
  stylesButton: CSSProperties
  stylesText: CSSProperties
}

export const getStyles = (props: IGetStyles): IGetStylesReturn => {
  const {
    mode,
    isAccent = false,
    isActive = false,
    isHoverTransparent = false,
    isDisabled = false,
    isTextLeft = false,
  } = props

  const {
    // Button
    StylesButtonDefault,
    StylesButtonAccent,
    StylesButtonActive,
    // Text
    StylesTextDefault,
    StylesTextAccent,
    StylesTextActive,
  } = getTheme(mode)

  const stylesButton: CSSProperties = {
    ...StylesButtonDefault,
    ...(isAccent && StylesButtonAccent),
    ...(!isAccent && isActive && StylesButtonActive),
    ...(isHoverTransparent && stylesButtonHover),
    ...{ width: "100%" },
  }

  const stylesText: CSSProperties = {
    ...StylesTextDefault,
    ...(isAccent && StylesTextAccent),
    ...(!isAccent && isActive && StylesTextActive),
    ...(isDisabled && stylesTextDisabled),
    ...{
      width: "100%",
      textAlign: isTextLeft ? "left" : "center",
    },
  }

  return {
    stylesButton,
    stylesText,
  }
}
