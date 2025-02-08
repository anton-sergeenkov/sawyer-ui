# Components

- Ui-Kit из Моби Трафик

## Рефакторинг

- Добавить импорты в общий файл "ui-kit\index.ts"
- Добавить все компоненты в ui-kit
- Вынести код для подключения компонента в "stories\name.stories.tsx"
- Деплой Ui-Kit

## ThemeMode

> ui-kit\layout\UiLayoutCards\UiLayoutCards.tsx

- Темы перечислять в виде типа: "light" | "dark"
- checkThemeMode -> checkTheme
- Удалить "constants\theme.ts" из портфолио

## Структура

```
📂 basic
    - UiTypography 💎
    - UiTypographyGradient 💎
📂 layout
    - UiLayoutSectionContainer
    - UiLayoutSection 💎
📂 menu
    - UiMenuItemGroupLinks
    - UiMenuItemGroupRoutes
    - UiMenuItemHash
    - UiMenuItemRoutes
    - UiMenuNavButton 💎
    - UiMenuNavToggle
📂 surfaces
    - UiOptions
    - UiSocialLinks
```

- Вынести стилии в UiModal из "app\qr\components\SectionStarter\SectionStarter.tsx"
