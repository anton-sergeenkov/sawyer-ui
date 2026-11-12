# sawyer-ui

## Публикация и установка пакета

```bash
npm login
npm publish
npm install sawyer-ui@latest
```

## Ссылки

- https://anton-sergeenkov.github.io/sawyer-ui/ - StoryBook для Ui-Kit
- https://github.com/anton-sergeenkov/sawyer-ui - Репозиторий

## Основные библиотеки

- https://mantine.dev/ - Mantine UI
- https://phosphoricons.com/ - Иконки Phosphor

---

## Подключение

Шрифт, стили пакета (CSS-переменные, базовые глобальные стили, стили Mantine и компонентов) и провайдер `UiProvider` подключаются один раз — в корневом layout приложения:

```tsx
// app/layout.tsx (Next.js, App Router)
import { UiProvider } from "sawyer-ui"
import { robotoRegular } from "sawyer-ui/fonts"
import "sawyer-ui/styles.css"

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en" className={robotoRegular.className}>
    <body>
      <UiProvider>{children}</UiProvider>
    </body>
  </html>
)

export default RootLayout
```

`UiProvider` — провайдер Mantine (`MantineProvider`) с темой sawyer-ui: без него компоненты пакета не работают.

Стили Mantine лежат в `@layer mantine`, поэтому любые стили приложения без слоя переопределяют их независимо от порядка подключения. Глобальный сброс Mantine (`baseline.css`, стили `body`) в пакет не входит — базовые стили задаёт sawyer-ui.

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

## Иконки

Компоненты используют иконки [Phosphor](https://phosphoricons.com/) (`@phosphor-icons/react`). Иконку можно передать и в проп компонента, например `endIcon` у `UiButton`: для этого приложению нужно установить `@phosphor-icons/react` (или другой набор иконок).

```ts
import { ArrowCircleDown } from "@phosphor-icons/react"
```

```tsx
<UiButton endIcon={<ArrowCircleDown weight="bold" />} onClick={onClick}>
  Download
</UiButton>
```

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
