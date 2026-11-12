import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./jsx-runtime-BxfXuubT.js";import{n,r}from"./lib-D2LYnDtu.js";function i(e){let t={code:`code`,h1:`h1`,h3:`h3`,li:`li`,pre:`pre`,ul:`ul`,...r(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:`usage`,children:`Usage`}),`
`,(0,o.jsx)(t.h3,{id:`public`,children:`Public`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`import { UiSelect } from "sawyer-ui"
import type { IUiSelectItem } from "sawyer-ui"
`})}),`
`,(0,o.jsx)(t.h3,{id:`internal`,children:`Internal`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`import UiSelect from "../../form/UiSelect"
`})}),`
`,(0,o.jsx)(t.h3,{id:`usage-1`,children:`Usage`}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[`Поле управляемое: значение хранит родитель (`,(0,o.jsx)(t.code,{children:`value`}),` + `,(0,o.jsx)(t.code,{children:`setValue`}),`)`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`label`}),` — подсказка, пока ничего не выбрано, `,(0,o.jsx)(t.code,{children:`title`}),` — подпись над полем`]}),`
`]}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-tsx`,children:`import { useState } from "react"
import { UiSelect } from "sawyer-ui"
import type { IUiSelectItem } from "sawyer-ui"

const PLATFORMS: IUiSelectItem[] = [
  { value: "instagram", label: "Instagram" },
  { value: "youtube", label: "YouTube" },
]

const SectionPlatform: React.FC = () => {
  const [platformValue, setPlatformValue] = useState<string>("")

  return (
    <UiSelect
      label="Select platform"
      title="Platform"
      items={PLATFORMS}
      value={platformValue}
      setValue={setPlatformValue}
    />
  )
}
`})})]})}function a(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;function s(){return(s=e((()=>{o=t(),n()})))()}s();export{a as default};