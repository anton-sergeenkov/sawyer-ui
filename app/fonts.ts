import { Roboto } from "next/font/google"

export const robotoThin = Roboto({
  weight: "100",
  subsets: ["latin", "cyrillic"],
  display: "swap",
})

// FIXME:
export const robotoLight = Roboto({
  weight: "300",
  // variable: "--font-roboto-light",
  subsets: ["latin", "cyrillic"],
  display: "swap",
})

// FIXME:
export const robotoRegular = Roboto({
  weight: "400",
  // variable: "--font-roboto-regular",
  subsets: ["latin", "cyrillic"],
  display: "swap",
})
