import{d as T,h as z,z as D,r as o,e as J,o as m,q as c,w as u,f as t,a,x as f,y as Q,c as k,F as w,p as I,Q as R,D as j,t as H,k as K,U as P,C as W,A as X,B as Y,ak as Z,al as $,J as ee,I as ae,M as le}from"./index-CIfmhqRC.js";import{_ as se}from"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import{C as h}from"./constants-A8BI3pz7.js";import{a as ue,c as te,u as re}from"./index-DoOVXCWW.js";import{g as oe}from"./index-QrlE36WK.js";const de=T({name:"UserGroupForm",__name:"UserGroupForm",emits:["success"],setup(ie,{expose:q,emit:x}){const{t:v}=z(),_=D(),d=o(!1),V=o(""),i=o(!1),b=o(""),s=o({id:void 0,name:void 0,description:void 0,userIds:void 0,status:h.ENABLE}),A=J({name:[{required:!0,message:"\u7EC4\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],description:[{required:!0,message:"\u63CF\u8FF0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],userIds:[{required:!0,message:"\u6210\u5458\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],status:[{required:!0,message:"\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),n=o(),g=o([]);q({open:async(r,l)=>{if(d.value=!0,V.value=v("action."+r),b.value=r,F(),l){i.value=!0;try{s.value=await ue(l)}finally{i.value=!1}}g.value=await oe()}});const C=x,E=async()=>{if(n&&await n.value.validate()){i.value=!0;try{const r=s.value;b.value==="create"?(await te(r),_.success(v("common.createSuccess"))):(await re(r),_.success(v("common.updateSuccess"))),d.value=!1,C("success")}finally{i.value=!1}}},F=()=>{var r;s.value={id:void 0,name:void 0,description:void 0,userIds:void 0,status:h.ENABLE},(r=n.value)==null||r.resetFields()};return(r,l)=>{const y=P,p=W,S=X,B=Y,M=Z,N=$,G=ee,U=ae,L=se,O=le;return m(),c(L,{modelValue:a(d),"onUpdate:modelValue":l[5]||(l[5]=e=>K(d)?d.value=e:null),title:a(V)},{footer:u(()=>[t(U,{disabled:a(i),type:"primary",onClick:E},{default:u(()=>[f("\u786E \u5B9A")]),_:1},8,["disabled"]),t(U,{onClick:l[4]||(l[4]=e=>d.value=!1)},{default:u(()=>[f("\u53D6 \u6D88")]),_:1})]),default:u(()=>[Q((m(),c(G,{ref_key:"formRef",ref:n,model:a(s),rules:a(A),"label-width":"100px"},{default:u(()=>[t(p,{label:"\u7EC4\u540D",prop:"name"},{default:u(()=>[t(y,{modelValue:a(s).name,"onUpdate:modelValue":l[0]||(l[0]=e=>a(s).name=e),placeholder:"\u8BF7\u8F93\u5165\u7EC4\u540D"},null,8,["modelValue"])]),_:1}),t(p,{label:"\u63CF\u8FF0"},{default:u(()=>[t(y,{modelValue:a(s).description,"onUpdate:modelValue":l[1]||(l[1]=e=>a(s).description=e),placeholder:"\u8BF7\u8F93\u5165\u63CF\u8FF0",type:"textarea"},null,8,["modelValue"])]),_:1}),t(p,{label:"\u6210\u5458",prop:"userIds"},{default:u(()=>[t(B,{modelValue:a(s).userIds,"onUpdate:modelValue":l[2]||(l[2]=e=>a(s).userIds=e),multiple:"",placeholder:"\u8BF7\u9009\u62E9\u6210\u5458"},{default:u(()=>[(m(!0),k(w,null,I(a(g),e=>(m(),c(S,{key:e.id,label:e.nickname,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(p,{label:"\u72B6\u6001",prop:"status"},{default:u(()=>[t(N,{modelValue:a(s).status,"onUpdate:modelValue":l[3]||(l[3]=e=>a(s).status=e)},{default:u(()=>[(m(!0),k(w,null,I(a(R)(a(j).COMMON_STATUS),e=>(m(),c(M,{key:e.value,value:e.value},{default:u(()=>[f(H(e.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[O,a(i)]])]),_:1},8,["modelValue","title"])}}});export{de as _};