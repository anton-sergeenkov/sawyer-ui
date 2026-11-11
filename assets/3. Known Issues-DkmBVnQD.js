import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{o as t}from"./iframe-BY93WzDE.js";import{n,r}from"./lib-BwYUNdvo.js";function i(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...r(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:`known-issues`,children:`Known Issues`}),`
`,(0,o.jsxs)(t.h2,{id:`-mui-ошибка-в-компоненте-menu-`,children:[`📌 [MUI] Ошибка в компоненте `,(0,o.jsx)(t.code,{children:`<Menu />`})]}),`
`,(0,o.jsx)(t.h3,{id:`описание-проблемы`,children:`Описание проблемы`}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsx)(t.li,{children:`При клике на кнопку открывается выпадающий список, при этом скрывается скролл и происходит смещение части интерфейса`}),`
`,(0,o.jsx)(t.li,{children:`Как это работает у MUI: к body добавляются следующие стили:`}),`
`]}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-html`,children:`<body
  style="
    padding-right: 11px;
    overflow: hidden;
  "
>
`})}),`
`,(0,o.jsx)(t.h3,{id:`решение`,children:`Решение`}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`Вариант 1`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[`Резервировать место для скролла, чтобы он был виден всегда. Реализовано в `,(0,o.jsx)(t.a,{href:`https://letscode-dev.github.io/`,rel:`nofollow`,children:`https://letscode-dev.github.io/`})]}),`
`]}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`Вариант 2`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsx)(t.li,{children:`Добавить стили`}),`
`]}),`
`,(0,o.jsxs)(t.blockquote,{children:[`
`,(0,o.jsx)(t.p,{children:`Нерабочее решение! При скролле выпадающий список фиксированно остается на экране и скроллится вместе со страницей.`}),`
`]}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-css`,children:`body {
  overflow: auto !important;
  padding-right: 0 !important;
}
`})}),`
`,(0,o.jsx)(t.hr,{}),`
`,(0,o.jsx)(t.h2,{id:`-nextjs-ошибка-build-css-при-использовании-css-nesting`,children:`📌 [Next.js] Ошибка build CSS при использовании CSS nesting`}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsx)(t.li,{children:`Локально работает корректно, но при build не работает`}),`
`]}),`
`,(0,o.jsxs)(t.blockquote,{children:[`
`,(0,o.jsxs)(t.p,{children:[`Свойства для `,(0,o.jsx)(t.code,{children:`.item`}),` не сработают. Нельзя объявлять `,(0,o.jsx)(t.code,{children:`.container`}),` два раза`]}),`
`]}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-css`,children:`.container {
  backdround-color: green;
}
.container {
  .item {
    color: blue;
  }
}
`})}),`
`,(0,o.jsxs)(t.blockquote,{children:[`
`,(0,o.jsxs)(t.p,{children:[`Корректный вариант. Нужно указать дочерние элементы внутри первого указания `,(0,o.jsx)(t.code,{children:`.container`})]}),`
`]}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-css`,children:`.container {
  backdround-color: green;

  .item {
    color: blue;
  }
}
`})})]})}function a(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;function s(){return(s=e((()=>{o=t(),n()})))()}s();export{a as default};