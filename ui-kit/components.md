# Components

1. `ui-kit\index.ts` - добавить импорт
2. `index.ts` - исправить импорты
3. `UiComponent.tsx` - checkThemeMode -> checkTheme
4. `story.stories.tsx`
5. `Usage.mdx`

## TODO

- Ui-Kit из Моби Трафик

## Удалить

- constants\theme.ts (portfolio)
- docs\import.md (ui-kit)
- import { ITheme } from "@/sawyer-ui/types/common"

## Структура

```
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
