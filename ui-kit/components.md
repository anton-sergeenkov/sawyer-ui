# Components

## Рефакторинг

- Изменить название компонентов с "element" на "ui". Проверить поиском все "element"

## Ui-Kit

- Добавить все компоненты в ui-kit
- Вынести код для подключения компонента в "stories\name.stories.tsx"

## ThemeMode

> ui-kit\layout\UiLayoutCards\UiLayoutCards.tsx

- Темы перечислять в виде типа: "light" | "dark"
- checkThemeMode -> checkTheme
- Удалить "constants\theme.ts" из портфолио

## Структура

```
📂 basic
    📑 ModalElement
    📑 TypographyElement 💎
    📑 TypographyGradientElement 💎
📂 layout
    📑 LayoutSectionContainerElement
    📑 LayoutSectionElement 💎
📂 menu
    - UiMenuItemGroupLinks
    - UiMenuItemGroupRoutes
    - UiMenuItemHash
    - UiMenuItemRoutes
    - UiMenuNavButton 💎
    - UiMenuNavToggle
📂 surfaces
    📑 OptionsElement
    📑 SocialLinksElement
```
