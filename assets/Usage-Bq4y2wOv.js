import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./jsx-runtime-BxfXuubT.js";import{n,r}from"./lib-D2LYnDtu.js";function i(e){let t={code:`code`,h1:`h1`,h3:`h3`,li:`li`,pre:`pre`,ul:`ul`,...r(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:`usage`,children:`Usage`}),`
`,(0,o.jsx)(t.h3,{id:`public`,children:`Public`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`import { UiTabs } from "sawyer-ui"
import type { IUiTabsData } from "sawyer-ui"
`})}),`
`,(0,o.jsx)(t.h3,{id:`internal`,children:`Internal`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`import UiTabs from "../../basic/UiTabs"
`})}),`
`,(0,o.jsx)(t.h3,{id:`usage-1`,children:`Usage`}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`data`}),` — вкладки: название (`,(0,o.jsx)(t.code,{children:`tab`}),`) и компонент с содержимым (`,(0,o.jsx)(t.code,{children:`content`}),`)`]}),`
`,(0,o.jsx)(t.li,{children:`Компоненты содержимого объявляются вне рендера, иначе при каждом рендере вкладка будет монтироваться заново`}),`
`]}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-tsx`,children:`import { UiTabs } from "sawyer-ui"

const TabProfile: React.FC = () => <div>Profile</div>
const TabProjects: React.FC = () => <div>Projects</div>

<UiTabs
  data={[
    { tab: "Profile", content: TabProfile },
    { tab: "Projects", content: TabProjects },
  ]}
/>
`})})]})}function a(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;function s(){return(s=e((()=>{o=t(),n()})))()}s();export{a as default};