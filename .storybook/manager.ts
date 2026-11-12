import { addons } from "storybook/manager-api"

// Компоненты, построенные на Mantine: используют его сами или через другие
// компоненты ui-kit (отмечено комментарием). В сайдбаре перед названием — 😈
const USES_MANTINE = new Set([
  // Basic
  "UiAlert",
  "UiDetails",
  "UiModal",
  "UiTable",
  "UiTabs",
  // Form
  "UiButton",
  "UiInput",
  "UiSelect",
  // Layout
  "UiLayoutCards", // через UiOptions (isOptions)
  // Menu
  "UiMenuItemGroup",
  "UiMenuItemHash", // через UiMenuNavButton
  "UiMenuItemRoutes", // через UiMenuNavButton
  "UiMenuNavButton", // через UiButton
  // Surfaces
  "UiOptions",
])

// Новые компоненты (перенесены из черновиков src/@new).
// В сайдбаре перед названием — 📌
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
    // Меняется только подпись в сайдбаре: id и адреса историй остаются прежними.
    // Порядок значков: 😈, затем 📌
    renderLabel: (item) => {
      if (item.type !== "component" && item.type !== "group") {
        return item.name
      }

      const marks = [
        USES_MANTINE.has(item.name) ? "😈" : "",
        NEW_COMPONENTS.has(item.name) ? "📌" : "",
      ].filter(Boolean)

      return [...marks, item.name].join(" ")
    },
  },
})
