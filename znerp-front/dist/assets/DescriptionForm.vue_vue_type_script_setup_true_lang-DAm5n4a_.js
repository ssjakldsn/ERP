import{d as w,ai as d,r as p,e as x,ar as l,o as y,q as h,w as m,a as t,J as j,f as c,ck as N,z as V,dK as g,C as k}from"./index-CIfmhqRC.js";import{r as O}from"./formRules-C3y0LKNH.js";const q=w({name:"ProductDescriptionForm",__name:"DescriptionForm",props:{propFormData:{type:Object,default:()=>{}},activeName:d.string.def(""),isDetail:d.bool.def(!1)},emits:["update:activeName"],setup(r,{expose:n,emit:u}){const f=V(),o=r,s=p(),a=p({description:""}),v=x({description:[O]});l(()=>a.value.description,e=>{e==="<p><br></p>"&&(a.value.description="")},{deep:!0,immediate:!0}),l(()=>o.propFormData,e=>{e&&g(a.value,e)},{immediate:!0});const b=u;return n({validate:async()=>{var e;if(s)try{await((e=t(s))==null?void 0:e.validate()),Object.assign(o.propFormData,a.value)}catch(i){throw f.error("\u3010\u5546\u54C1\u8BE6\u60C5\u3011\u4E0D\u5B8C\u5584\uFF0C\u8BF7\u586B\u5199\u76F8\u5173\u4FE1\u606F"),b("update:activeName","description"),i}}}),(e,i)=>{const D=k,_=j;return y(),h(_,{ref_key:"formRef",ref:s,model:t(a),rules:t(v),"label-width":"120px",disabled:r.isDetail},{default:m(()=>[c(D,{label:"\u5546\u54C1\u8BE6\u60C5",prop:"description"},{default:m(()=>[c(t(N),{modelValue:t(a).description,"onUpdate:modelValue":i[0]||(i[0]=F=>t(a).description=F)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules","disabled"])}}});export{q as _};
