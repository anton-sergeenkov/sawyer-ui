import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./jsx-runtime-BxfXuubT.js";import{n,r}from"./lib-D2LYnDtu.js";function i(e){let t={code:`code`,h1:`h1`,h3:`h3`,li:`li`,pre:`pre`,ul:`ul`,...r(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:`usage`,children:`Usage`}),`
`,(0,o.jsx)(t.h3,{id:`public`,children:`Public`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`import { UiMenuItemGroup } from "sawyer-ui"
`})}),`
`,(0,o.jsx)(t.h3,{id:`internal`,children:`Internal`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`import UiMenuItemGroup from "../../menu/UiMenuItemGroup"
`})}),`
`,(0,o.jsx)(t.h3,{id:`usage-1`,children:`Usage`}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[`Выпадающее меню — стандартный `,(0,o.jsx)(t.code,{children:`Menu`}),` Mantine, пункты — `,(0,o.jsx)(t.code,{children:`Menu.Item`})]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`type="routes"`}),` — пункты-ссылки `,(0,o.jsx)(t.code,{children:`next/link`}),`, текущая страница (по `,(0,o.jsx)(t.code,{children:`usePathname()`}),`) выделена основным цветом темы Mantine`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`type="links"`}),` — внешние ссылки, открываются в новой вкладке`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`theme`}),` и `,(0,o.jsx)(t.code,{children:`isAccent`}),` задают вид кнопки, открывающей меню`]}),`
`]}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-tsx`,children:`<UiMenuItemGroup
  type="routes"
  theme="light-blue"
  title="Menu"
  list={[
    { title: "About", path: "/about" },
    { title: "Contacts", path: "/contacts" },
  ]}
/>
`})})]})}function a(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;function s(){return(s=e((()=>{o=t(),n()})))()}s();export{a as default};