import{d as P,h as T,z,r as m,e as D,o as i,q as n,w as s,f as o,a,x as y,y as J,c as K,F as U,p as k,dS as j,D as h,Q,t as G,k as H,A as W,B as X,C as Y,U as Z,ak as $,al as ee,J as ae,I as le,M as ue}from"./index-CIfmhqRC.js";import{_ as se}from"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import{A as _}from"./index-Bb8IOC82.js";import{C as w}from"./constants-A8BI3pz7.js";const oe=P({name:"ApiKeyForm",__name:"ApiKeyForm",emits:["success"],setup(te,{expose:F,emit:L}){const{t:v}=T(),V=z(),r=m(!1),b=m(""),d=m(!1),A=m(""),u=m({id:void 0,name:void 0,apiKey:void 0,platform:void 0,url:void 0,status:w.ENABLE}),S=D({name:[{required:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],apiKey:[{required:!0,message:"\u5BC6\u94A5\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],platform:[{required:!0,message:"\u5E73\u53F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],status:[{required:!0,message:"\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),c=m();F({open:async(t,l)=>{if(r.value=!0,b.value=v("action."+t),A.value=t,E(),l){d.value=!0;try{u.value=await _.getApiKey(l)}finally{d.value=!1}}}});const q=L,C=async()=>{await c.value.validate(),d.value=!0;try{const t=u.value;A.value==="create"?(await _.createApiKey(t),V.success(v("common.createSuccess"))):(await _.updateApiKey(t),V.success(v("common.updateSuccess"))),r.value=!1,q("success")}finally{d.value=!1}},E=()=>{var t;u.value={id:void 0,name:void 0,apiKey:void 0,platform:void 0,url:void 0,status:w.ENABLE},(t=c.value)==null||t.resetFields()};return(t,l)=>{const I=W,x=X,p=Y,f=Z,M=$,N=ee,R=ae,g=le,B=se,O=ue;return i(),n(B,{title:a(b),modelValue:a(r),"onUpdate:modelValue":l[6]||(l[6]=e=>H(r)?r.value=e:null)},{footer:s(()=>[o(g,{onClick:C,type:"primary",disabled:a(d)},{default:s(()=>[y("\u786E \u5B9A")]),_:1},8,["disabled"]),o(g,{onClick:l[5]||(l[5]=e=>r.value=!1)},{default:s(()=>[y("\u53D6 \u6D88")]),_:1})]),default:s(()=>[J((i(),n(R,{ref_key:"formRef",ref:c,model:a(u),rules:a(S),"label-width":"120px"},{default:s(()=>[o(p,{label:"\u6240\u5C5E\u5E73\u53F0",prop:"platform"},{default:s(()=>[o(x,{modelValue:a(u).platform,"onUpdate:modelValue":l[0]||(l[0]=e=>a(u).platform=e),placeholder:"\u8BF7\u8F93\u5165\u5E73\u53F0",clearable:""},{default:s(()=>[(i(!0),K(U,null,k(a(j)(a(h).AI_PLATFORM),e=>(i(),n(I,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(p,{label:"\u540D\u79F0",prop:"name"},{default:s(()=>[o(f,{modelValue:a(u).name,"onUpdate:modelValue":l[1]||(l[1]=e=>a(u).name=e),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])]),_:1}),o(p,{label:"\u5BC6\u94A5",prop:"apiKey"},{default:s(()=>[o(f,{modelValue:a(u).apiKey,"onUpdate:modelValue":l[2]||(l[2]=e=>a(u).apiKey=e),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u94A5"},null,8,["modelValue"])]),_:1}),o(p,{label:"\u81EA\u5B9A\u4E49 API URL",prop:"url"},{default:s(()=>[o(f,{modelValue:a(u).url,"onUpdate:modelValue":l[3]||(l[3]=e=>a(u).url=e),placeholder:"\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49 API URL"},null,8,["modelValue"])]),_:1}),o(p,{label:"\u72B6\u6001",prop:"status"},{default:s(()=>[o(N,{modelValue:a(u).status,"onUpdate:modelValue":l[4]||(l[4]=e=>a(u).status=e)},{default:s(()=>[(i(!0),K(U,null,k(a(Q)(a(h).COMMON_STATUS),e=>(i(),n(M,{key:e.value,value:e.value},{default:s(()=>[y(G(e.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[O,a(d)]])]),_:1},8,["title","modelValue"])}}});export{oe as _};