import { theme as themeLightViolet } from "./themes/light-violet"
import { theme as themeDefault } from "./themes/default"
import { ThemeMode } from "./MenuButtonElement"
import { CSSProperties } from "react"

export const getTheme = (theme: ThemeMode | undefined) => {
  switch (theme) {
    case ThemeMode.LIGHT_VIOLET:
      return themeLightViolet
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
  color: "var(--color-gray)",
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

  const stylesButton = {
    ...StylesButtonDefault,
    ...(isAccent && StylesButtonAccent),
    ...(!isAccent && isActive && StylesButtonActive),
    ...(isHoverTransparent && stylesButtonHover),
    ...{ width: "100%" },
  }

  const stylesText = {
    ...StylesTextDefault,
    ...(isAccent && StylesTextAccent),
    ...(!isAccent && isActive && StylesTextActive),
    ...(isDisabled && stylesTextDisabled),
    // ...(isTextLeft && { textAlign: "left" }),
    ...{
      width: "100%",
      ["text-align"]: isTextLeft ? "left" : "center",
    },
  }

  return {
    stylesButton,
    stylesText,
  }
}
