import{_ as A}from"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import{d as B,u as M,N as O,r as d,e as R,n as D,o as _,c as k,f as e,w as r,a as l,aj as H,x as n,F as b,p as I,q as J,t as L,Q,D as G,k as K,h as P,z as W,H as X,I as Y,U as Z,C as $,ak as aa,al as ea,J as la}from"./index-CIfmhqRC.js";import{_ as ra}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{C as sa}from"./constants-A8BI3pz7.js";import{g as ta,c as ua,u as oa}from"./index-X3qw9mzS.js";import{s as ma,e as da,a as na}from"./formCreate-ECTif2qa.js";import{u as ia}from"./tagsView-CqxiFcdS.js";import{u as pa}from"./useFormCreateDesigner-DYq6rWJw.js";import"./el-card-DyMugU68.js";import"./dict.type-BZ12AT8E.js";const fa=B({name:"BpmFormEditor",__name:"index",setup(ca){const{t:v}=P(),y=W(),{push:g,currentRoute:h}=M(),{query:w}=O(),{delView:x}=ia(),m=d();pa(m);const o=d(!1),i=d(!1),t=d({name:"",status:sa.ENABLE,remark:""}),U=R({name:[{required:!0,message:"\u8868\u5355\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],status:[{required:!0,message:"\u5F00\u542F\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),p=d(),C=()=>{o.value=!0},q=async()=>{if(p&&await p.value.validate()){i.value=!0;try{const u=t.value;u.conf=da(m),u.fields=na(m),u.id?(await oa(u),y.success(v("common.updateSuccess"))):(await ua(u),y.success(v("common.createSuccess"))),o.value=!1,E()}finally{i.value=!1}}},E=()=>{x(l(h)),g("/bpm/manager/form")};return D(async()=>{const u=w.id;if(!u)return;const a=await ta(u);t.value=a,ma(m,a.conf,a.fields)}),(u,a)=>{const N=X,f=Y,S=ra,V=Z,c=$,F=aa,T=ea,j=la,z=A;return _(),k(b,null,[e(S,null,{default:r(()=>[e(l(H),{ref_key:"designer",ref:m,height:"780px"},{handle:r(()=>[e(f,{round:"",size:"small",type:"primary",onClick:C},{default:r(()=>[e(N,{class:"mr-5px",icon:"ep:plus"}),n(" \u4FDD\u5B58 ")]),_:1})]),_:1},512)]),_:1}),e(z,{modelValue:l(o),"onUpdate:modelValue":a[4]||(a[4]=s=>K(o)?o.value=s:null),title:"\u4FDD\u5B58\u8868\u5355",width:"600"},{footer:r(()=>[e(f,{disabled:l(i),type:"primary",onClick:q},{default:r(()=>[n("\u786E \u5B9A")]),_:1},8,["disabled"]),e(f,{onClick:a[3]||(a[3]=s=>o.value=!1)},{default:r(()=>[n("\u53D6 \u6D88")]),_:1})]),default:r(()=>[e(j,{ref_key:"formRef",ref:p,model:l(t),rules:l(U),"label-width":"80px"},{default:r(()=>[e(c,{label:"\u8868\u5355\u540D",prop:"name"},{default:r(()=>[e(V,{modelValue:l(t).name,"onUpdate:modelValue":a[0]||(a[0]=s=>l(t).name=s),placeholder:"\u8BF7\u8F93\u5165\u8868\u5355\u540D"},null,8,["modelValue"])]),_:1}),e(c,{label:"\u72B6\u6001",prop:"status"},{default:r(()=>[e(T,{modelValue:l(t).status,"onUpdate:modelValue":a[1]||(a[1]=s=>l(t).status=s)},{default:r(()=>[(_(!0),k(b,null,I(l(Q)(l(G).COMMON_STATUS),s=>(_(),J(F,{key:s.value,value:s.value},{default:r(()=>[n(L(s.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(c,{label:"\u5907\u6CE8",prop:"remark"},{default:r(()=>[e(V,{modelValue:l(t).remark,"onUpdate:modelValue":a[2]||(a[2]=s=>l(t).remark=s),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])],64)}}});export{fa as default};