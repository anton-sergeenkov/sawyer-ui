# Components

## Рефакторинг

- Изменить название компонентов с "element" на "ui"
- Проверить поиском все "element"
- Добавить все компоненты в ui-kit

## ThemeMode

> ui-kit\layout\UiLayoutCards\UiLayoutCards.tsx

- Темы перечислять в виде типа: "light" | "dark"
- checkThemeMode -> checkTheme

## Структура

```
📂 basic
    ✅ UiButton
    ⚠️ UiChips
    ⚠️ UiLink
    - ModalElement
    - TypographyElement
    - TypographyGradientElement
📂 layout
    ✅ UiLayoutCards
    - LayoutSectionContainerElement
    - LayoutSectionElement
📂 menu-items
    - MenuItemGroupLinksElement
    - MenuItemGroupRoutesElement
    - MenuItemHashElement
    - MenuItemRoutesElement
📂 menu-navigation
    - MenuButtonElement
    - MenuToggleElement
📂 surfaces
    - OptionsElement
    - SocialLinksElement
```
