import { addons } from "storybook/manager-api"

// Компоненты, которые используются на сайте anton-sergeenkov.github.io:
// сайт импортирует их сам или они выводятся внутри этих компонентов
// (отмечено комментарием). В сайдбаре перед их названием выводится ✅.
// UiOptions не отмечен: UiLayoutCards выводит его только с isOptions,
// а сайт этот проп не передаёт
const USED_ON_SITE = new Set([
  // Basic
  "UiChips",
  "UiHeaderSection",
  "UiLink",
  "UiModal",
  "UiTextGradient",
  "UiTypography",
  // Form
  "UiButton", // внутри UiMenuNavButton
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

// Новые компоненты (перенесены из черновиков src/@new).
// В сайдбаре перед их названием выводится 📌
const NEW_COMPONENTS = new Set([
  // Basic
  "UiTable",
  "UiTabs",
  // Form
  "UiInput",
  "UiSelect",
])

addons.setConfig({
  sidebar: {
    // Меняется только подпись в сайдбаре: id и адреса историй остаются прежними
    renderLabel: (item) => {
      if (item.type !== "component" && item.type !== "group") {
        return item.name
      }
      if (USED_ON_SITE.has(item.name)) {
        return `✅ ${item.name}`
      }
      if (NEW_COMPONENTS.has(item.name)) {
        return `📌 ${item.name}`
      }
      return item.name
    },
  },
})
