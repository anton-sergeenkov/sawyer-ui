import { addons } from "storybook/manager-api"

// Компоненты, которые используются на сайте anton-sergeenkov.github.io:
// сайт импортирует их сам или они выводятся внутри этих компонентов
// (отмечено комментарием). В сайдбаре перед их названием выводится ✅.
// UiOptions не отмечен: UiLayoutCards выводит его только с isOptions,
// а сайт этот проп не передаёт
const USED_ON_SITE = new Set([
  // Basic
  "UiButton", // внутри UiMenuNavButton
  "UiChips",
  "UiHeaderSection",
  "UiLink",
  "UiModal",
  "UiTextGradient",
  "UiTypography",
  // Layout
  "UiLayoutCards",
  "UiLayoutHeader",
  "UiLayoutPaper",
  "UiLayoutSection",
  // Menu
  "UiMenuItemGroup",
  "UiMenuItemRoutes",
  "UiMenuNavButton", // внутри UiMenuItemGroup и UiMenuItemRoutes
  // Surfaces
  "UiSocialLinks",
])

addons.setConfig({
  sidebar: {
    // Меняется только подпись в сайдбаре: id и адреса историй остаются прежними
    renderLabel: (item) =>
      (item.type === "component" || item.type === "group") &&
      USED_ON_SITE.has(item.name)
        ? `✅ ${item.name}`
        : item.name,
  },
})
