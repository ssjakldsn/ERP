import{d as q,r as u,e as z,o as n,q as v,w as l,f as m,x as p,a,y as A,c as B,p as D,F as J,k as M,h as j,z as R,A as E,B as G,C as H,J as K,I as L,M as N}from"./index-CIfmhqRC.js";import{_ as O}from"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import{d as P}from"./index-BZptzjxi.js";import{g as Q}from"./index-QrlE36WK.js";const S=q({__name:"CustomerDistributeForm",emits:["success"],setup(T,{expose:w,emit:_}){j();const y=R(),r=u(!1),t=u(!1),f=u([]),s=u({id:void 0,ownerUserId:void 0}),U=z({ownerUserId:[{required:!0,message:"\u8D1F\u8D23\u4EBA\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),i=u();w({open:async d=>{r.value=!0,k(),s.value.id=d,f.value=await Q()}});const b=_,I=async()=>{if(i&&await i.value.validate()){t.value=!0;try{await P([s.value.id],s.value.ownerUserId),y.success("\u5206\u914D\u5BA2\u6237\u6210\u529F"),r.value=!1,b("success")}finally{t.value=!1}}},k=()=>{var d;s.value={id:void 0,ownerUserId:void 0},(d=i.value)==null||d.resetFields()};return(d,o)=>{const V=E,g=G,x=H,C=K,c=L,F=O,h=N;return n(),v(F,{modelValue:a(r),"onUpdate:modelValue":o[2]||(o[2]=e=>M(r)?r.value=e:null),title:"\u5206\u914D\u5BA2\u6237"},{footer:l(()=>[m(c,{disabled:a(t),type:"primary",onClick:I},{default:l(()=>[p("\u786E \u5B9A")]),_:1},8,["disabled"]),m(c,{onClick:o[1]||(o[1]=e=>r.value=!1)},{default:l(()=>[p("\u53D6 \u6D88")]),_:1})]),default:l(()=>[A((n(),v(C,{ref_key:"formRef",ref:i,model:a(s),rules:a(U),"label-width":"100px"},{default:l(()=>[m(x,{label:"\u8D1F\u8D23\u4EBA",prop:"ownerUserId"},{default:l(()=>[m(g,{modelValue:a(s).ownerUserId,"onUpdate:modelValue":o[0]||(o[0]=e=>a(s).ownerUserId=e),class:"w-1/1"},{default:l(()=>[(n(!0),B(J,null,D(a(f),e=>(n(),v(V,{key:e.id,label:e.nickname,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[h,a(t)]])]),_:1},8,["modelValue"])}}});export{S as _};
