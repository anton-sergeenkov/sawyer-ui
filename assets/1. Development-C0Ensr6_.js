import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./jsx-runtime-BxfXuubT.js";import{n,r}from"./lib-D2LYnDtu.js";function i(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...r(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:`development`,children:`Development`}),`
`,(0,o.jsx)(t.h2,{id:`1-родительская-диретория`,children:`1. Родительская диретория`}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[`Добавить репозиторий `,(0,o.jsx)(t.code,{children:`sawyer-ui`})]}),`
`,(0,o.jsx)(t.li,{children:`Создать директорию "@bash" и добавить всё из "sawyer-ui/bash/runners/"`}),`
`]}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:`📂 Parent Folder
  📂 @bash
  📑 sawyer-ui
  📑 Проект на Next.js
`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[`Проект на Next.js подключает Ui-Kit как npm-пакет `,(0,o.jsx)(t.code,{children:`sawyer-ui`}),` и не зависит от расположения папки `,(0,o.jsx)(t.code,{children:`sawyer-ui`})]}),`
`]}),`
`,(0,o.jsxs)(t.h2,{id:`2-проект-sawyer-ui`,children:[`2. Проект `,(0,o.jsx)(t.code,{children:`sawyer-ui`})]}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`Клонирование проекта`})}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-bash`,children:`git clone https://github.com/anton-sergeenkov/sawyer-ui.git
`})}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`Установка зависимостей для проекта`})}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-bash`,children:`npm i
`})}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`Команды`})}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-bash`,children:`npm run storybook   # Storybook для Next.js (@storybook/nextjs-vite) на http://localhost:6006
npm run build       # сборка npm-пакета в dist: index.js, fonts.js, styles.css и типы
npm run lint        # ESLint
npm run deploy      # сборка Storybook и публикация на GitHub Pages
`})}),`
`,(0,o.jsx)(t.h2,{id:`3-публикация-npm-пакета`,children:`3. Публикация npm-пакета`}),`
`,(0,o.jsxs)(t.ol,{children:[`
`,(0,o.jsxs)(t.li,{children:[`Увеличить `,(0,o.jsx)(t.code,{children:`version`}),` в `,(0,o.jsx)(t.code,{children:`package.json`})]}),`
`,(0,o.jsxs)(t.li,{children:[`Выполнить `,(0,o.jsx)(t.code,{children:`npm publish`}),` — перед публикацией автоматически запустится `,(0,o.jsx)(t.code,{children:`npm run build`})]}),`
`,(0,o.jsxs)(t.li,{children:[`В проекте на Next.js обновить пакет: `,(0,o.jsx)(t.code,{children:`npm i sawyer-ui@latest`})]}),`
`]})]})}function a(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;function s(){return(s=e((()=>{o=t(),n()})))()}s();export{a as default};