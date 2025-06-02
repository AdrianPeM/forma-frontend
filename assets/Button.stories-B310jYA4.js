import{j as c}from"./jsx-runtime-B3CkwUKM.js";import{r as u}from"./iframe-DO8_0VoW.js";import{B as s}from"./_TextField-TVssyJu-.js";const m={component:s,args:{disabled:!1,color:"primary",variant:"filled",children:"Default button"},argTypes:{disabled:{control:"boolean"},color:{control:"select",options:["primary","secondary"]},variant:{control:"select",options:["filled","outlined"]},status:{control:"select",options:[void 0,"info","success","warning","error"]}},tags:["autodocs","!dev"],parameters:{layout:"centered"}},o={render:a=>{const t=u.useRef(null),l=()=>{console.log(t.current)};return c.jsx(s,{...a,onClick:l,ref:t})},args:{children:"Button"}};var e,r,n;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: args => {
    const $button = useRef<HTMLButtonElement>(null);
    const handleClick = () => {
      console.log($button.current);
    };
    return <Button {...args} onClick={handleClick} ref={$button} />;
  },
  args: {
    children: "Button"
  }
}`,...(n=(r=o.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const f=["Default"];export{o as Default,f as __namedExportsOrder,m as default};
