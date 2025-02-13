"use strict";(self.webpackChunksawyer_ui=self.webpackChunksawyer_ui||[]).push([[123],{"./ui-kit/menu/UiMenuNavButton/story.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Icon:()=>Icon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_mui_icons_material_ArrowCircleDown__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/icons-material/esm/ArrowCircleDown.js"),_sawyer_ui_app_fonts__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/fonts.ts"),_UiMenuNavButton__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./app/globals.css"),__webpack_require__("./ui-kit/menu/UiMenuNavButton/UiMenuNavButton.tsx"));const __WEBPACK_DEFAULT_EXPORT__={title:"Menu/UiMenuNavButton",component:_UiMenuNavButton__WEBPACK_IMPORTED_MODULE_3__.A,tags:["autodocs"],argTypes:{theme:{options:_UiMenuNavButton__WEBPACK_IMPORTED_MODULE_3__.f.theme,control:{type:"radio"}},isAccent:{control:{type:"boolean"}},isActive:{control:{type:"boolean"}},isHoverTransparent:{control:{type:"boolean"}},isTextLeft:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}},args:{children:"Content",theme:"light-blue",isAccent:!1,isActive:!1,isHoverTransparent:!1,isTextLeft:!1,disabled:!1},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:_sawyer_ui_app_fonts__WEBPACK_IMPORTED_MODULE_1__.IZ.className,style:{backgroundColor:"#fff",padding:"10px",width:"200px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})]},Basic={args:{endIcon:null}},Icon={args:{endIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_ArrowCircleDown__WEBPACK_IMPORTED_MODULE_4__.A,{})}},__namedExportsOrder=["Basic","Icon"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    endIcon: null\n  }\n}",...Basic.parameters?.docs?.source}}},Icon.parameters={...Icon.parameters,docs:{...Icon.parameters?.docs,source:{originalSource:"{\n  args: {\n    endIcon: <ArrowCircleDownIcon />\n  }\n}",...Icon.parameters?.docs?.source}}}},"./ui-kit/menu/UiMenuNavButton/UiMenuNavButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>UiMenuNavButton_UiMenuNavButton,f:()=>options});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),UiButton=__webpack_require__("./ui-kit/basic/UiButton/UiButton.tsx");const CONFIG_COLORS_default={color:"#2b2b2b",bgHover:"#ececec"},CONFIG_COLORS_active={color:"#6673ff"},CONFIG_COLORS_accent={color:"#edeeef",bg:"#6673ff",bgHover:"#2b2b2b"},light_blue_theme={StylesButtonDefault:{color:CONFIG_COLORS_default.color,textTransform:"none",borderRadius:"20px",backgroundColor:"transparent",width:"auto",padding:"4px 10px",transition:".4s",":hover":{backgroundColor:CONFIG_COLORS_default.bgHover}},StylesButtonAccent:{backgroundColor:CONFIG_COLORS_accent.bg,color:CONFIG_COLORS_accent.color,":hover":{backgroundColor:CONFIG_COLORS_accent.bgHover}},StylesButtonActive:{},StylesTextDefault:{color:CONFIG_COLORS_default.color},StylesTextAccent:{color:CONFIG_COLORS_accent.color},StylesTextActive:{color:CONFIG_COLORS_active.color}},default_theme={StylesButtonDefault:{},StylesButtonAccent:{},StylesButtonActive:{},StylesTextDefault:{},StylesTextAccent:{},StylesTextActive:{}},stylesButtonHover={":hover":{background:"none"}},stylesTextDisabled={color:"var(--color-gray-50)"},getStyles=props=>{const{theme,isAccent=!1,isActive=!1,isHoverTransparent=!1,isDisabled=!1,isTextLeft=!1}=props,{StylesButtonDefault,StylesButtonAccent,StylesButtonActive,StylesTextDefault,StylesTextAccent,StylesTextActive}=(theme=>"light-blue"===theme?light_blue_theme:default_theme)(theme);return{stylesButton:{...StylesButtonDefault,...isAccent&&StylesButtonAccent,...!isAccent&&isActive&&StylesButtonActive,...isHoverTransparent&&stylesButtonHover,width:"100%"},stylesText:{...StylesTextDefault,...isAccent&&StylesTextAccent,...!isAccent&&isActive&&StylesTextActive,...isDisabled&&stylesTextDisabled,width:"100%",textAlign:isTextLeft?"left":"center"}}},options={theme:["light-blue"]},UiMenuNavButton=props=>{const{className,children,theme,isAccent,isActive,isHoverTransparent=!1,isTextLeft=!1,disabled=!1,endIcon=null,onClick=()=>null}=props,{stylesButton,stylesText}=getStyles({theme,isAccent,isActive,isHoverTransparent,isDisabled:disabled,isTextLeft});return(0,jsx_runtime.jsx)(UiButton.A,{variant:"text",size:"small",className,sx:stylesButton,endIcon,disabled,onClick,children:(0,jsx_runtime.jsx)("div",{style:stylesText,children})})},UiMenuNavButton_UiMenuNavButton=UiMenuNavButton;UiMenuNavButton.__docgenInfo={description:"",methods:[],displayName:"UiMenuNavButton"}}}]);