import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./jsx-runtime-BxfXuubT.js";import{n,r}from"./lib-D2LYnDtu.js";function i(e){let t={code:`code`,h1:`h1`,h2:`h2`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...r(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:`import`,children:`Import`}),`
`,(0,o.jsx)(t.h2,{id:`common`,children:`Common`}),`
`,(0,o.jsx)(t.p,{children:`Шрифт, стили пакета и провайдер подключаются один раз, в корневом layout приложения:`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`import { UiProvider } from "sawyer-ui"
import { robotoRegular } from "sawyer-ui/fonts"
import "sawyer-ui/styles.css"
`})}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:`<html lang="en" className={robotoRegular.className}>
  <body>
    <UiProvider>{children}</UiProvider>
  </body>
</html>
`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`UiProvider`}),` — провайдер Mantine с темой sawyer-ui, без него компоненты не работают`]}),`
`,(0,o.jsxs)(t.li,{children:[`В Storybook истории оборачиваются в `,(0,o.jsx)(t.code,{children:`UiProvider`}),` декоратором в `,(0,o.jsx)(t.code,{children:`.storybook/preview.tsx`})]}),`
`]}),`
`,(0,o.jsx)(t.h2,{id:`components`,children:`Components`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`import { UiButton, UiLayoutSection } from "sawyer-ui"
import type { IMenuItem, IStaticImageData } from "sawyer-ui"
`})}),`
`,(0,o.jsx)(t.h2,{id:`fonts`,children:`Fonts`}),`
`,(0,o.jsxs)(t.p,{children:[`Шрифты Roboto (next/font) — отдельная точка входа `,(0,o.jsx)(t.code,{children:`sawyer-ui/fonts`}),` без "use client",
поэтому их можно импортировать и в серверных компонентах (app/layout.tsx)`]}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`// Public
import { robotoThin, robotoLight, robotoRegular } from "sawyer-ui/fonts"
// Internal
import { robotoLight } from "../../../fonts"
`})}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:`<span className={robotoThin.className}>Text</span>
`})}),`
`,(0,o.jsx)(t.hr,{}),`
`,(0,o.jsx)(t.h2,{id:`hooks`,children:`Hooks`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`// Public
import { useMobile } from "sawyer-ui"
// Internal
import { useMobile } from "../../../hooks"
`})})]})}function a(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;function s(){return(s=e((()=>{o=t(),n()})))()}s();export{a as default};