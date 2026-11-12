import type { MenuProps, MantineTransition } from "@mantine/core"

// Общие настройки выпадающих меню Mantine (UiMenuItemGroup, UiOptions).
// Вид меню задаётся в menu.module.css

// Появление: увеличение от левого верхнего угла с проявлением
const transitionGrow: MantineTransition = {
  in: { opacity: 1, transform: "scale(1, 1)" },
  out: { opacity: 0, transform: "scale(0.75, 0.5625)" },
  common: { transformOrigin: "top left" },
  transitionProperty: "opacity, transform",
}

export const menuProps: Partial<MenuProps> = {
  // Под кнопкой, по её левому краю, без зазора
  position: "bottom-start",
  offset: 0,
  // Не ближе 16px к краям окна
  middlewares: { shift: { padding: 16 } },
  transitionProps: {
    transition: transitionGrow,
    duration: 225,
    timingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  // После закрытия фокус возвращается на кнопку
  returnFocus: true,
  // Невидимая подложка на всю страницу под меню: клик мимо меню только
  // закрывает его, а кнопка под курсором не остаётся подсвеченной
  withOverlay: true,
  overlayProps: { backgroundOpacity: 0 },
}
