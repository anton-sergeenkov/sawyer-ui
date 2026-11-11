# sawyer-ui

Ui-Kit для Next.js на React и MUI. Документация и примеры компонентов — в Storybook: [anton-sergeenkov.github.io/sawyer-ui](https://anton-sergeenkov.github.io/sawyer-ui/)

## Установка

```bash
npm install sawyer-ui
```

В приложении должны быть установлены `next` версии 15 и выше, `react` и `react-dom` версии 19 и выше (peerDependencies). MUI (`@mui/material`, `@mui/icons-material`, `@emotion/*`) и `classnames` устанавливаются вместе с пакетом.

## Подключение

Шрифт и стили пакета (CSS-переменные, базовые глобальные стили и стили компонентов) подключаются один раз — в корневом layout приложения:

```tsx
// app/layout.tsx (Next.js, App Router)
import { robotoRegular } from "sawyer-ui/fonts"
import "sawyer-ui/styles.css"

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en" className={robotoRegular.className}>
    <body>{children}</body>
  </html>
)

export default RootLayout
```

Чтобы `className`, переданный компоненту со страницы, переопределял стили пакета, CSS должен подключаться в порядке импорта. По умолчанию Next.js объединяет CSS-файлы и может поставить стили пакета из layout после стилей страницы, поэтому в `next.config.js` включается строгий порядок:

```js
// next.config.js
const nextConfig = {
  experimental: {
    cssChunking: "strict",
  },
}
```

Компоненты, хуки и типы импортируются из пакета по имени:

```tsx
import { UiLayoutSection, UiHeaderSection, UiChips } from "sawyer-ui"
import type { IMenuItem, IStaticImageData } from "sawyer-ui"
```

Все компоненты пакета клиентские (бандл помечен директивой `"use client"`), поэтому их можно импортировать и в серверных компонентах Next.js.

## Шрифты

Шрифты Roboto (latin и cyrillic) подключаются через `next/font/google` и экспортируются из отдельной точки входа `sawyer-ui/fonts`:

```ts
import { robotoThin, robotoLight, robotoRegular } from "sawyer-ui/fonts" // 100, 300, 400
```

```tsx
<span className={robotoThin.className}>Text</span>
```

`sawyer-ui/fonts` собран без `"use client"`, поэтому шрифты можно использовать и в серверных компонентах, например в `app/layout.tsx`.

## Навигация

`UiMenuItemRoutes` и `UiMenuItemGroup` с `type="routes"` используют `Link` из `next/link` и `usePathname()` из `next/navigation`: переход по пунктам меню идёт без перезагрузки страницы, активный пункт подсвечивается по текущему пути.

```tsx
<UiMenuItemRoutes
  theme="light-blue"
  item={{ title: "Stack", path: "/stack" }}
/>
```

## Разработка

```bash
npm i                 # установка зависимостей
npm run storybook     # Storybook для Next.js (@storybook/nextjs-vite) на http://localhost:6006
npm run build         # сборка пакета в dist: index.js, fonts.js, styles.css и типы
npm run lint          # ESLint
npm run deploy        # сборка Storybook и публикация на GitHub Pages
```

Публикация новой версии: увеличить `version` в `package.json` и выполнить `npm publish` — перед публикацией автоматически запустится `npm run build`.
