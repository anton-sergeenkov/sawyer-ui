// Точка входа библиотеки — публичный API npm-пакета sawyer-ui

// Глобальные стили подключаем первыми: в dist/styles.css они окажутся в начале,
// а стили компонентов — после них. Стили Mantine лежат в @layer mantine
// и уступают любым стилям без слоя независимо от порядка
import "./styles/mantine.css"
import "./styles/tokens.css"
import "./styles/globals.css"

// Provider
export { default as UiProvider } from "./provider/UiProvider"
// Basic
export { default as UiChips } from "./ui/basic/UiChips"
export { default as UiLink } from "./ui/basic/UiLink"
export { default as UiModal } from "./ui/basic/UiModal"
export { default as UiTypography } from "./ui/basic/UiTypography"
export { default as UiTextGradient } from "./ui/basic/UiTextGradient"
export { default as UiHeaderSection } from "./ui/basic/UiHeaderSection"
export { default as UiDetails } from "./ui/basic/UiDetails"
export { default as UiJsonFormatter } from "./ui/basic/UiJsonFormatter"
export { default as UiAlert } from "./ui/basic/UiAlert"
export { default as UiAlertSimple } from "./ui/basic/UiAlertSimple"
export { default as UiList } from "./ui/basic/UiList"
export { default as UiTable, UiTableRecord } from "./ui/basic/UiTable"
export { default as UiTabs } from "./ui/basic/UiTabs"
// Form
export { default as UiButton } from "./ui/form/UiButton"
export { default as UiInput } from "./ui/form/UiInput"
export { default as UiSelect } from "./ui/form/UiSelect"
// Layout
export { default as UiLayoutCards } from "./ui/layout/UiLayoutCards"
export { default as UiLayoutSection } from "./ui/layout/UiLayoutSection"
export { default as UiLayoutPaper } from "./ui/layout/UiLayoutPaper"
export { default as UiLayoutHeader } from "./ui/layout/UiLayoutHeader"
// Menu
export { default as UiMenuItemGroup } from "./ui/menu/UiMenuItemGroup"
export { default as UiMenuItemHash } from "./ui/menu/UiMenuItemHash"
export { default as UiMenuItemRoutes } from "./ui/menu/UiMenuItemRoutes"
export { default as UiMenuNavButton } from "./ui/menu/UiMenuNavButton"
// Surfaces
export { default as UiOptions } from "./ui/surfaces/UiOptions"
export { default as UiSocialLinks } from "./ui/surfaces/UiSocialLinks"

// Hooks
export { useMobile } from "./hooks"

// Types
export type { IUiLayoutCardsItems } from "./ui/layout/UiLayoutCards"
export type { IUiSocialLinksList } from "./ui/surfaces/UiSocialLinks"
export type { IUiSelectItem } from "./ui/form/UiSelect"
export type { IUiTableData, IUiTableRecordRow } from "./ui/basic/UiTable"
export type { IUiTabsData } from "./ui/basic/UiTabs"
export type {
  IStaticImageData,
  IMenuItem,
  IListCommon,
  TOnClick,
} from "./types/common"
