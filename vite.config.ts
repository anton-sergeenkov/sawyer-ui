import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Сборка в режиме библиотеки: npm run build → папка dist
  build: {
    lib: {
      // Две точки входа:
      // index — компоненты, публичный API пакета → dist/index.js ("sawyer-ui")
      // fonts — шрифты next/font → dist/fonts.js ("sawyer-ui/fonts")
      entry: { index: "src/index.ts", fonts: "src/fonts.ts" },
      formats: ["es"], // только ES-модули (import/export)
      fileName: (_format, entryName) => `${entryName}.js`,
    },
    cssCodeSplit: false, // весь CSS пакета собирается в один файл
    // Без минификации: вызовы next/font должны остаться в исходном виде
    // (см. topLevelVar ниже), а код пакета всё равно минифицирует сборка приложения
    minify: false,
    rollupOptions: {
      // Эти пакеты не попадают в бандл — они возьмутся из node_modules приложения.
      // Регулярки покрывают и подпути: react/jsx-runtime, next/link, @mui/material/Button и т.п.
      external: [
        /^react($|\/)/,
        /^react-dom($|\/)/,
        /^next($|\/)/,
        /^@mui\//,
        /^@emotion\//,
        "classnames",
      ],
      output: {
        // next/font обрабатывает только вызовы вида const robotoLight = Roboto({...})
        // на верхнем уровне модуля, поэтому const не переписываются в var
        topLevelVar: false,
        // Компоненты пакета клиентские (useState, MUI, usePathname), поэтому
        // dist/index.js помечается директивой "use client" — тогда его можно
        // импортировать в серверных компонентах Next.js (App Router).
        // dist/fonts.js остаётся без директивы: next/font работает и на сервере
        banner: (chunk) => (chunk.name === "index" ? '"use client";' : ""),
        // Единственный CSS-файл называем styles.css → dist/styles.css
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css"))
            return "styles.css"
          return "assets/[name]-[hash][extname]"
        },
      },
    },
  },
})
