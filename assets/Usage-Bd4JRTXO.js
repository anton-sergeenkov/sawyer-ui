import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./jsx-runtime-BxfXuubT.js";import{n,r}from"./lib-D2LYnDtu.js";function i(e){let t={code:`code`,h1:`h1`,h3:`h3`,li:`li`,pre:`pre`,ul:`ul`,...r(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:`usage`,children:`Usage`}),`
`,(0,o.jsx)(t.h3,{id:`public`,children:`Public`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`import { UiAlert } from "sawyer-ui"
`})}),`
`,(0,o.jsx)(t.h3,{id:`internal`,children:`Internal`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`import UiAlert from "../../basic/UiAlert"
`})}),`
`,(0,o.jsx)(t.h3,{id:`usage-1`,children:`Usage`}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsx)(t.li,{children:`Alert может показываться при успешном / неуспешном выполнении запроса на сервер`}),`
`]}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-tsx`,children:`import { useState } from "react"
import { UiAlert } from "sawyer-ui"

const SectionStarter: React.FC = () => {
  const [isShow, setIsShow] = useState<boolean>(false)

  return (
    <>
      <UiAlert type="info" variant="standard" isShow>
        Alert, который нельзя закрыть
      </UiAlert>

      <UiAlert
        type="success"
        variant="standard"
        isShow={isShow}
        setIsShow={setIsShow}
      >
        Alert с useState()
      </UiAlert>

      <button onClick={() => setIsShow(true)}>Show</button>
      <button onClick={() => setIsShow(false)}>Hide</button>
    </>
  )
}
`})})]})}function a(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;function s(){return(s=e((()=>{o=t(),n()})))()}s();export{a as default};