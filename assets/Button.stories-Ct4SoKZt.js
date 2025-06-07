import{j as c}from"./jsx-runtime-BaVXK9mO.js";import{r as u}from"./iframe-vVVp-7pA.js";import{B as s}from"./_TextField-BTtPH5Y7.js";const m={component:s,args:{disabled:!1,color:"primary",variant:"filled",children:"Default button"},argTypes:{disabled:{control:"boolean"},color:{control:"select",options:["primary","secondary"]},variant:{control:"select",options:["filled","outlined"]},status:{control:"select",options:[void 0,"info","success","warning","error"]}},tags:["autodocs"],parameters:{layout:"centered"}},o={render:a=>{const t=u.useRef(null),l=()=>{console.log(t.current)};return c.jsx(s,{...a,onClick:l,ref:t})},args:{children:"Button"}};var r,e,n;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(e=o.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const f=["Default"];export{o as Default,f as __namedExportsOrder,m as default};
