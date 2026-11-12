import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./jsx-runtime-BxfXuubT.js";import{n,r}from"./lib-D2LYnDtu.js";function i(e){let t={code:`code`,h1:`h1`,h3:`h3`,li:`li`,pre:`pre`,ul:`ul`,...r(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:`usage`,children:`Usage`}),`
`,(0,o.jsx)(t.h3,{id:`public`,children:`Public`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`import { UiInput } from "sawyer-ui"
`})}),`
`,(0,o.jsx)(t.h3,{id:`internal`,children:`Internal`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`import UiInput from "../../form/UiInput"
`})}),`
`,(0,o.jsx)(t.h3,{id:`usage-1`,children:`Usage`}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[`Поле управляемое: значение хранит родитель (`,(0,o.jsx)(t.code,{children:`value`}),` + `,(0,o.jsx)(t.code,{children:`setValue`}),`)`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`label`}),` — подсказка в пустом поле, `,(0,o.jsx)(t.code,{children:`title`}),` — подпись над полем`]}),`
`,(0,o.jsxs)(t.li,{children:[`Кнопка очистки появляется, когда в поле есть текст (`,(0,o.jsx)(t.code,{children:`isClearButton={false}`}),` — без неё)`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`multiline`}),` — многострочное поле на 10 строк`]}),`
`]}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-tsx`,children:`import { useState } from "react"
import { UiInput } from "sawyer-ui"

const SectionLink: React.FC = () => {
  const [linkValue, setLinkValue] = useState<string>("")

  return (
    <UiInput
      label="Insert your link here"
      title="Link"
      value={linkValue}
      setValue={setLinkValue}
      styleGrow
    />
  )
}
`})})]})}function a(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;function s(){return(s=e((()=>{o=t(),n()})))()}s();export{a as default};