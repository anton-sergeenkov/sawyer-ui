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
    ⚠️ UiChips
    ⚠️ UiLink
    - ModalElement
    - TypographyElement
    - TypographyGradientElement
📂 layout
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

### UiChips

```jsx
import UiChips, { ThemeMode } from "@/sawyer-react-lib/ui-kit/basic/UiChips"

args: {
  items: ["One", "Two"],
  children: "Link",
  isUserSelect: true,
  theme: {
    mode: ThemeMode.DARK,
    mode: ThemeMode.LIGHT,
  }
}
```

### UiLink

```jsx
import UiLink, { ThemeMode } from "@/sawyer-react-lib/ui-kit/basic/UiLink"

args: {
  href: "https://fonts.google.com/",
  children: "Link",
  theme: {
    mode: ThemeMode.BLUE_UNDERLINED_THIN,
    mode: ThemeMode.DARK_UNDERLINED,
  }
}
```
