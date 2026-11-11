import { Roboto } from "next/font/google"

// Шрифты подключаются через next/font. Модуль собирается в отдельную точку входа
// "sawyer-ui/fonts" без директивы "use client", поэтому шрифты можно импортировать
// и в серверном app/layout.tsx приложения, и в компонентах пакета
export const robotoThin = Roboto({
  weight: "100",
  subsets: ["latin", "cyrillic"],
  display: "swap",
})

export const robotoLight = Roboto({
  weight: "300",
  subsets: ["latin", "cyrillic"],
  display: "swap",
})

export const robotoRegular = Roboto({
  weight: "400",
  subsets: ["latin", "cyrillic"],
  display: "swap",
})
