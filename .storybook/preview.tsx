import type { Preview } from "@storybook/nextjs-vite"

// Глобальные стили и токены ui-kit. В приложении они подключаются
// одной строкой: import "sawyer-ui/styles.css"
import "../src/styles/tokens.css"
import "../src/styles/globals.css"

const preview: Preview = {
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
