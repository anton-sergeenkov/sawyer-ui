const CONFIG_COLORS = {
  default: {
    color: "#2b2b2b", // dark
  },
  active: {
    color: "#6673ff", // blue
  },
  accent: {
    color: "#edeeef", // light-gray
    bg: "#6673ff", // blue
    bgHover: "#2b2b2b", // dark
  },
}

// Button
const StylesButtonDefault = {
  color: CONFIG_COLORS.default.color,
  textTransform: "none",
  fontFamily: "var(--font-roboto-regular)",
  borderRadius: "20px",
  backgroundColor: "transparent",
  width: "auto",
  padding: "4px 10px",
  transition: ".4s",
}
const StylesButtonAccent = {
  backgroundColor: CONFIG_COLORS.accent.bg,
  color: CONFIG_COLORS.accent.color,
  ":hover": {
    backgroundColor: CONFIG_COLORS.accent.bgHover,
  },
}
const StylesButtonActive = {}

// Text
const StylesTextDefault = {
  color: CONFIG_COLORS.default.color,
}
const StylesTextAccent = {
  color: CONFIG_COLORS.accent.color,
}
const StylesTextActive = {
  color: CONFIG_COLORS.active.color,
}

export const theme = {
  StylesButtonDefault,
  StylesButtonAccent,
  StylesButtonActive,
  StylesTextDefault,
  StylesTextAccent,
  StylesTextActive,
}
