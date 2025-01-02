import{d as I,z as P,r as n,e as j,o as i,q as f,w as o,f as t,a as l,x as v,y as z,c as b,F as k,p as U,Q as h,D as E,t as D,k as J,U as Q,C as R,A as G,B as H,ak as K,al as W,J as X,I as Z,M as $}from"./index-CIfmhqRC.js";import{_ as ee}from"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import{g as le,c as ae,u as ue}from"./index-BkURrpGi.js";import{C as T}from"./constants-A8BI3pz7.js";const te=I({__name:"NotifyTemplateForm",emits:["success"],setup(oe,{expose:q,emit:w}){const V=P(),d=n(!1),_=n(""),m=n(!1),g=n(""),u=n({id:void 0,name:"",nickname:"",code:"",content:"",type:void 0,params:"",status:T.ENABLE,remark:""}),A=j({type:[{required:!0,message:"\u6D88\u606F\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],status:[{required:!0,message:"\u5F00\u542F\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],code:[{required:!0,message:"\u6A21\u677F\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],name:[{required:!0,message:"\u6A21\u677F\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],nickname:[{required:!0,message:"\u53D1\u4EF6\u4EBA\u59D3\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],content:[{required:!0,message:"\u6A21\u677F\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),c=n();q({open:async(s,a)=>{if(d.value=!0,_.value=s,g.value=s,C(),a){m.value=!0;try{u.value=await le(a)}finally{m.value=!1}}}});const M=w,x=async()=>{if(c&&await c.value.validate()){m.value=!0;try{const s=u.value;g.value==="create"?(await ae(s),V.success("\u65B0\u589E\u6210\u529F")):(await ue(s),V.success("\u4FEE\u6539\u6210\u529F")),d.value=!1,M("success")}finally{m.value=!1}}},C=()=>{var s;u.value={id:void 0,name:"",nickname:"",code:"",content:"",type:void 0,params:"",status:T.ENABLE,remark:""},(s=c.value)==null||s.resetFields()};return(s,a)=>{const p=Q,r=R,F=G,N=H,O=K,S=W,B=X,y=Z,L=ee,Y=$;return i(),f(L,{title:l(_),modelValue:l(d),"onUpdate:modelValue":a[8]||(a[8]=e=>J(d)?d.value=e:null)},{footer:o(()=>[t(y,{onClick:x,type:"primary",disabled:l(m)},{default:o(()=>[v("\u786E \u5B9A")]),_:1},8,["disabled"]),t(y,{onClick:a[7]||(a[7]=e=>d.value=!1)},{default:o(()=>[v("\u53D6 \u6D88")]),_:1})]),default:o(()=>[z((i(),f(B,{ref_key:"formRef",ref:c,model:l(u),rules:l(A),"label-width":"140px"},{default:o(()=>[t(r,{label:"\u6A21\u7248\u7F16\u7801",prop:"code"},{default:o(()=>[t(p,{modelValue:l(u).code,"onUpdate:modelValue":a[0]||(a[0]=e=>l(u).code=e),placeholder:"\u8BF7\u8F93\u5165\u6A21\u7248\u7F16\u7801"},null,8,["modelValue"])]),_:1}),t(r,{label:"\u6A21\u677F\u540D\u79F0",prop:"name"},{default:o(()=>[t(p,{modelValue:l(u).name,"onUpdate:modelValue":a[1]||(a[1]=e=>l(u).name=e),placeholder:"\u8BF7\u8F93\u5165\u6A21\u7248\u540D\u79F0"},null,8,["modelValue"])]),_:1}),t(r,{label:"\u53D1\u4EF6\u4EBA\u540D\u79F0",prop:"nickname"},{default:o(()=>[t(p,{modelValue:l(u).nickname,"onUpdate:modelValue":a[2]||(a[2]=e=>l(u).nickname=e),placeholder:"\u8BF7\u8F93\u5165\u53D1\u4EF6\u4EBA\u540D\u79F0"},null,8,["modelValue"])]),_:1}),t(r,{label:"\u6A21\u677F\u5185\u5BB9",prop:"content"},{default:o(()=>[t(p,{type:"textarea",modelValue:l(u).content,"onUpdate:modelValue":a[3]||(a[3]=e=>l(u).content=e),placeholder:"\u8BF7\u8F93\u5165\u6A21\u677F\u5185\u5BB9"},null,8,["modelValue"])]),_:1}),t(r,{label:"\u7C7B\u578B",prop:"type"},{default:o(()=>[t(N,{modelValue:l(u).type,"onUpdate:modelValue":a[4]||(a[4]=e=>l(u).type=e),placeholder:"\u8BF7\u9009\u62E9\u7C7B\u578B"},{default:o(()=>[(i(!0),b(k,null,U(l(h)(l(E).SYSTEM_NOTIFY_TEMPLATE_TYPE),e=>(i(),f(F,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(r,{label:"\u5F00\u542F\u72B6\u6001",prop:"status"},{default:o(()=>[t(S,{modelValue:l(u).status,"onUpdate:modelValue":a[5]||(a[5]=e=>l(u).status=e)},{default:o(()=>[(i(!0),b(k,null,U(l(h)(l(E).COMMON_STATUS),e=>(i(),f(O,{key:e.value,value:e.value},{default:o(()=>[v(D(e.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(r,{label:"\u5907\u6CE8",prop:"remark"},{default:o(()=>[t(p,{modelValue:l(u).remark,"onUpdate:modelValue":a[6]||(a[6]=e=>l(u).remark=e),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[Y,l(m)]])]),_:1},8,["title","modelValue"])}}});export{te as _};