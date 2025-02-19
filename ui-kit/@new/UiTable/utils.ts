import { CSSProperties } from "react"

export const checkWidth = (fullWidth: boolean | undefined): CSSProperties => {
  if (fullWidth) {
    return {
      width: "100%",
    }
  }

  return {
    width: "auto",
    minWidth: "50%",
  }
}
