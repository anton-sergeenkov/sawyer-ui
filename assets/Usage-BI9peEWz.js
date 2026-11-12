import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./jsx-runtime-BxfXuubT.js";import{n,r}from"./lib-D2LYnDtu.js";function i(e){let t={code:`code`,h1:`h1`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...r(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:`usage`,children:`Usage`}),`
`,(0,o.jsx)(t.h3,{id:`public`,children:`Public`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`import { UiTable, UiTableRecord } from "sawyer-ui"
import type { IUiTableData, IUiTableRecordRow } from "sawyer-ui"
`})}),`
`,(0,o.jsx)(t.h3,{id:`internal`,children:`Internal`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`import UiTable, { UiTableRecord } from "../../basic/UiTable"
`})}),`
`,(0,o.jsx)(t.h3,{id:`usage-1`,children:`Usage`}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`headers`}),` — заголовки колонок`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`fields`}),` — строки: значения объекта выводятся по порядку, по одному в колонку`]}),`
`,(0,o.jsx)(t.li,{children:`Если строк нет, вместо таблицы выводится уведомление «No results», которое можно закрыть`}),`
`]}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-tsx`,children:`const users = [
  { name: "Tony", age: 23 },
  { name: "Jack", age: 27 },
]

<UiTable data={{ headers: ["Name", "Age"], fields: users }} />
`})}),`
`,(0,o.jsx)(t.h3,{id:`uitablerecord`,children:`UiTableRecord`}),`
`,(0,o.jsx)(t.p,{children:`Таблица-запись из этой же папки: в каждой строке название поля и значение`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-tsx`,children:`<UiTableRecord
  rows={[
    { title: "Name", data: "Tony" },
    { title: "Age", data: 23 },
  ]}
/>
`})})]})}function a(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;function s(){return(s=e((()=>{o=t(),n()})))()}s();export{a as default};