import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./jsx-runtime-BxfXuubT.js";import{n,r}from"./lib-D2LYnDtu.js";function i(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...r(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:`storybook`,children:`Storybook`}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsx)(t.li,{children:`Category: Basic | Form | Layout | Menu | Surfaces`}),`
`,(0,o.jsxs)(t.li,{children:[`Компоненты лежат в `,(0,o.jsx)(t.code,{children:`src/ui/<категория>/<Компонент>`}),`: `,(0,o.jsx)(t.code,{children:`src/ui/form/UiButton`}),` и т.д.`]}),`
`,(0,o.jsxs)(t.li,{children:[`Storybook для Next.js (`,(0,o.jsx)(t.code,{children:`@storybook/nextjs-vite`}),`): в историях работают `,(0,o.jsx)(t.code,{children:`next/font`}),`, `,(0,o.jsx)(t.code,{children:`next/link`}),`, `,(0,o.jsx)(t.code,{children:`next/navigation`}),` и импорт картинок, как в Next.js`]}),`
`,(0,o.jsxs)(t.li,{children:[`Глобальные стили (вместе со стилями Mantine) подключены в `,(0,o.jsx)(t.code,{children:`.storybook/preview.tsx`}),`, в историях их импортировать не нужно`]}),`
`,(0,o.jsxs)(t.li,{children:[`Все истории обёрнуты в `,(0,o.jsx)(t.code,{children:`UiProvider`}),` (провайдер Mantine) декоратором в `,(0,o.jsx)(t.code,{children:`.storybook/preview.tsx`})]}),`
`,(0,o.jsxs)(t.li,{children:[`Текущий путь для `,(0,o.jsx)(t.code,{children:`usePathname()`}),` задаётся параметром истории: `,(0,o.jsx)(t.code,{children:`parameters: { nextjs: { navigation: { pathname: "/contacts" } } }`})]}),`
`,(0,o.jsx)(t.li,{children:`😈 перед названием компонента в сайдбаре — компонент построен на Mantine: использует его сам или через другие компоненты ui-kit`}),`
`,(0,o.jsxs)(t.li,{children:[`📌 перед названием компонента в сайдбаре — новый компонент (перенесён из черновиков `,(0,o.jsx)(t.code,{children:`src/@new`}),`). Если у компонента оба значка, 😈 стоит первым`]}),`
`,(0,o.jsxs)(t.li,{children:[`Списки компонентов для значков задаются в `,(0,o.jsx)(t.code,{children:`.storybook/manager.ts`})]}),`
`]}),`
`,(0,o.jsxs)(t.blockquote,{children:[`
`,(0,o.jsx)(t.p,{children:`story.stories.tsx`}),`
`]}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-tsx`,children:`import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { robotoRegular } from "../../../fonts"

import UiComponent, { options } from "./UiComponent"

const meta: Meta<typeof UiComponent> = {
  title: "Category/UiComponent",
  component: UiComponent,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      options: options.theme,
      control: { type: "radio" },
    },
    isActive: {
      control: { type: "boolean" },
    },
  },
  args: {
    children: "Content",
  },
  decorators: [
    (Story) => (
      <div
        className={robotoRegular.className}
        style={{ backgroundColor: "#fff", padding: "10px" }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof UiComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
`})})]})}function a(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;function s(){return(s=e((()=>{o=t(),n()})))()}s();export{a as default};