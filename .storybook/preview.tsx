import type { Preview } from "@storybook/nextjs-vite"

import UiProvider from "../src/provider/UiProvider"
import { robotoRegular } from "../src/fonts"

// Глобальные стили, стили Mantine и токены ui-kit. В приложении они подключаются
// одной строкой: import "sawyer-ui/styles.css"
import "../src/styles/mantine.css"
import "../src/styles/tokens.css"
import "../src/styles/globals.css"

// Шрифт — на <html>, как в приложении (robotoRegular.className в app/layout.tsx).
// Его наследует и содержимое порталов: выпадающие меню, модальные окна
document.documentElement.classList.add(robotoRegular.className)

const preview: Preview = {
  // Компоненты построены на Mantine: каждая история — внутри провайдера,
  // как приложение внутри UiProvider в app/layout.tsx
  decorators: [
    (Story) => (
      <UiProvider>
        <Story />
      </UiProvider>
    ),
  ],

  parameters: {
    // Next.js App Router: next/navigation (usePathname) и next/link работают
    // в историях через моки Storybook
    nextjs: {
      appDirectory: true,
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
}

export default preview
