import{d as h,z as k,r as i,e as S,o as c,q as f,w as m,f as u,a as t,x as y,y as q,c as F,F as M,p as T,k as j,U as z,C as I,J,I as R,M as A}from"./index-CIfmhqRC.js";import{_ as B}from"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import{g as D,s as E}from"./index-FpPFi-SX.js";const G=h({name:"SystemSmsTemplateSendForm",__name:"SmsTemplateSendForm",setup(H,{expose:V}){const _=k(),d=i(!1),p=i(!1),a=i({content:"",params:{},mobile:"",templateCode:"",templateParams:new Map}),v=S({mobile:[{required:!0,message:"\u624B\u673A\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],templateCode:[{required:!0,message:"\u6A21\u7248\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],templateParams:{}}),n=i();V({open:async s=>{d.value=!0,P(),p.value=!0;try{const e=await D(s);a.value.content=e.content,a.value.params=e.params,a.value.templateCode=e.code,a.value.templateParams=e.params.reduce((o,r)=>(o[r]="",o),{}),v.templateParams=e.params.reduce((o,r)=>(o[r]={required:!0,message:"\u53C2\u6570 "+r+" \u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},o),{})}finally{p.value=!1}}});const g=async()=>{if(n&&await n.value.validate()){p.value=!0;try{const s=a.value,e=await E(s);e&&_.success("\u63D0\u4EA4\u53D1\u9001\u6210\u529F\uFF01\u53D1\u9001\u7ED3\u679C\uFF0C\u89C1\u53D1\u9001\u65E5\u5FD7\u7F16\u53F7\uFF1A"+e),d.value=!1}finally{p.value=!1}}},P=()=>{var s;a.value={content:"",params:{},mobile:"",templateCode:"",templateParams:new Map},(s=n.value)==null||s.resetFields()};return(s,e)=>{const o=z,r=I,w=J,b=R,C=B,x=A;return c(),f(C,{modelValue:t(d),"onUpdate:modelValue":e[3]||(e[3]=l=>j(d)?d.value=l:null),title:"\u6D4B\u8BD5"},{footer:m(()=>[u(b,{disabled:t(p),type:"primary",onClick:g},{default:m(()=>[y("\u786E \u5B9A")]),_:1},8,["disabled"]),u(b,{onClick:e[2]||(e[2]=l=>d.value=!1)},{default:m(()=>[y("\u53D6 \u6D88")]),_:1})]),default:m(()=>[q((c(),f(w,{ref_key:"formRef",ref:n,model:t(a),rules:t(v),"label-width":"140px"},{default:m(()=>[u(r,{label:"\u6A21\u677F\u5185\u5BB9",prop:"content"},{default:m(()=>[u(o,{modelValue:t(a).content,"onUpdate:modelValue":e[0]||(e[0]=l=>t(a).content=l),placeholder:"\u8BF7\u8F93\u5165\u6A21\u677F\u5185\u5BB9",readonly:"",type:"textarea"},null,8,["modelValue"])]),_:1}),u(r,{label:"\u624B\u673A\u53F7",prop:"mobile"},{default:m(()=>[u(o,{modelValue:t(a).mobile,"onUpdate:modelValue":e[1]||(e[1]=l=>t(a).mobile=l),placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},null,8,["modelValue"])]),_:1}),(c(!0),F(M,null,T(t(a).params,l=>(c(),f(r,{key:l,label:"\u53C2\u6570 {"+l+"}",prop:"templateParams."+l},{default:m(()=>[u(o,{modelValue:t(a).templateParams[l],"onUpdate:modelValue":U=>t(a).templateParams[l]=U,placeholder:"\u8BF7\u8F93\u5165 "+l+" \u53C2\u6570"},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["label","prop"]))),128))]),_:1},8,["model","rules"])),[[x,t(p)]])]),_:1},8,["modelValue"])}}});export{G as _};
