import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./jsx-runtime-BxfXuubT.js";import{n,r}from"./lib-D2LYnDtu.js";function i(e){let t={code:`code`,h1:`h1`,h3:`h3`,li:`li`,pre:`pre`,ul:`ul`,...r(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:`usage`,children:`Usage`}),`
`,(0,o.jsx)(t.h3,{id:`public`,children:`Public`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`import { UiModal } from "sawyer-ui"
`})}),`
`,(0,o.jsx)(t.h3,{id:`internal`,children:`Internal`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`import UiModal from "../../basic/UiModal"
`})}),`
`,(0,o.jsx)(t.h3,{id:`usage-1`,children:`Usage`}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[`Окно управляемое: открыто, пока `,(0,o.jsx)(t.code,{children:`open`}),` равен `,(0,o.jsx)(t.code,{children:`true`})]}),`
`,(0,o.jsxs)(t.li,{children:[`Закрывается кликом мимо окна и клавишей Esc (вызывается `,(0,o.jsx)(t.code,{children:`onClose`}),`), с `,(0,o.jsx)(t.code,{children:`isContentClickClose`}),` — и кликом по содержимому`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`className`}),` применяется к блоку с содержимым внутри окна`]}),`
`]}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-tsx`,children:`import { useState } from "react"
import { UiButton, UiModal } from "sawyer-ui"

const SectionModal: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <UiButton onClick={() => setOpen(true)}>Open modal</UiButton>

      <UiModal open={open} onClose={() => setOpen(false)}>
        <div>Content</div>
      </UiModal>
    </>
  )
}
`})})]})}function a(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;function s(){return(s=e((()=>{o=t(),n()})))()}s();export{a as default};