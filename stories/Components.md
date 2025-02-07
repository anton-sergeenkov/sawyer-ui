# Components

## Рефакторинг

- Изменить название компонентов с "element" на "ui"
- Проверить поиском все "element"
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

> stories\UiLayoutCards.stories.tsx
> Используется ThemeModeLink.DARK_UNDERLINED
