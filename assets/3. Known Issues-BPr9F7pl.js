import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./jsx-runtime-BxfXuubT.js";import{n,r}from"./lib-D2LYnDtu.js";function i(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...r(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:`known-issues`,children:`Known Issues`}),`
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