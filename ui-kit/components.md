# Components

1. Добавить импорты в общий файл "ui-kit\index.ts"
2. Исправить импорты в index.ts
3. Добавить story.stories.tsx
4. Добавить Usage.mdx
5. Тема. checkThemeMode -> checkTheme

```ts
export const options = {
  theme: ["dark-filled", "light-outline"],
  tag: ["h1", "h2", "h3", "p"],
}

type TTheme = "dark-filled" | "light-outline"
```

## TODO

- Ui-Kit из Моби Трафик

## Удалить

- constants\theme.ts (portfolio)
- docs\import.md (ui-kit)

## Структура

```
📂 basic
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
