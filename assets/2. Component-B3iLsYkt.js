import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./jsx-runtime-BxfXuubT.js";import{n,r}from"./lib-D2LYnDtu.js";function i(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,hr:`hr`,p:`p`,pre:`pre`,...r(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:`component`,children:`Component`}),`
`,(0,o.jsx)(t.h2,{id:`basic-component-with-theme`,children:`Basic Component with Theme`}),`
`,(0,o.jsxs)(t.blockquote,{children:[`
`,(0,o.jsx)(t.p,{children:`UiComponent.tsx`}),`
`]}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-tsx`,children:`import cn from "classnames"
import { checkTheme } from "../../../utils"
import styles from "./styles.module.css"

export const options = {
  theme: ["light", "dark"],
}

type TTheme = "light" | "dark"

interface IProps {
  theme?: TTheme
  className?: string
  children: React.ReactNode
}

const UiComponent: React.FC<IProps> = (props) => {
  const { theme, className, children } = props

  const stylesTheme = checkTheme(theme, styles)

  return (
    <div
      className={cn(className, styles.wrapper, stylesTheme)}
    >
      Content
    </div>
  )
}
`})}),`
`,(0,o.jsxs)(t.blockquote,{children:[`
`,(0,o.jsx)(t.p,{children:`styles.module.css`}),`
`]}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-css`,children:`.wrapper {
  background-color: #fff;
}
`})}),`
`,(0,o.jsxs)(t.blockquote,{children:[`
`,(0,o.jsx)(t.p,{children:`index.ts`}),`
`]}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`import { options } from "./UiComponent"

export { default } from "./UiComponent"
export { options }
`})}),`
`,(0,o.jsx)(t.hr,{}),`
`,(0,o.jsx)(t.h2,{id:`component-without-props`,children:`Component without Props`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-tsx`,children:`const UiComponent: React.FC = () => {
  return <></>
}
`})})]})}function a(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;function s(){return(s=e((()=>{o=t(),n()})))()}s();export{a as default};