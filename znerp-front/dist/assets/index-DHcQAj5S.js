import{d as P,e as S,b as T,r as d,a3 as A,ar as B,n as J,o as v,c as q,f as e,w as l,a,F as x,p as j,q as K,x as g,k as L,G as N,C as O,A as Q,B as W,H as X,I as $,J as Z,l as ee,m as ae,E as le}from"./index-CIfmhqRC.js";import{_ as re}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{E as se}from"./el-tree-select-CYFGeiEt.js";import{g as te}from"./index-C34hh2Ad.js";import{g as de}from"./index-QrlE36WK.js";import{f as C,e as oe,g as ue,h as me}from"./formatTime-DFFN_xWx.js";import{h as U,d as pe}from"./tree-BMqZf9_I.js";import{_ as fe}from"./PortraitCustomerArea.vue_vue_type_script_setup_true_lang-CDPrWH1S.js";import{_ as ne}from"./PortraitCustomerIndustry.vue_vue_type_script_setup_true_lang-hn2w4DS8.js";import{_ as ie}from"./PortraitCustomerSource.vue_vue_type_script_setup_true_lang-CxHa2PbE.js";import{_ as ce}from"./PortraitCustomerLevel.vue_vue_type_script_setup_true_lang-DhrDWxFc.js";import"./el-card-DyMugU68.js";import"./el-skeleton-item-Dm6LwaUQ.js";import"./Echart.vue_vue_type_script_setup_true_lang-C-1NoClp.js";import"./echarts-D6KrxhA1.js";import"./china-aeAnb323.js";import"./portrait-CaDgKbEx.js";import"./DictTag.vue_vue_type_script_lang-CTpVFm77.js";import"./color-BN7ZL7BD.js";const _e=P({name:"CrmStatisticsPortrait",__name:"index",setup(ye){const r=S({deptId:T().getUser.deptId,userId:void 0,times:[C(oe(new Date(new Date().getTime()-6048e5))),C(ue(new Date(new Date().getTime()-864e5)))]}),b=d(),k=d([]),h=d([]),Y=A(()=>r.deptId?h.value.filter(o=>o.deptId===r.deptId):[]),n=d("areaRef"),w=d(),I=d(),R=d(),D=d(),y=()=>{var o,s,m,u,p,c,f,i;switch(n.value){case"areaRef":(s=(o=w.value)==null?void 0:o.loadData)==null||s.call(o);break;case"levelRef":(u=(m=I.value)==null?void 0:m.loadData)==null||u.call(m);break;case"sourceRef":(c=(p=R.value)==null?void 0:p.loadData)==null||c.call(p);break;case"industryRef":(i=(f=D.value)==null?void 0:f.loadData)==null||i.call(f)}};B(n,()=>{y()});const z=()=>{b.value.resetFields(),y()};return J(async()=>{k.value=U(await te()),h.value=U(await de())}),(o,s)=>{const m=N,u=O,p=se,c=Q,f=W,i=X,V=$,F=Z,H=re,_=ee,E=ae,G=le;return v(),q(x,null,[e(H,null,{default:l(()=>[e(F,{ref_key:"queryFormRef",ref:b,inline:!0,model:a(r),class:"-mb-15px","label-width":"68px"},{default:l(()=>[e(u,{label:"\u65F6\u95F4\u8303\u56F4",prop:"orderDate"},{default:l(()=>[e(m,{modelValue:a(r).times,"onUpdate:modelValue":s[0]||(s[0]=t=>a(r).times=t),"default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],shortcuts:a(me),class:"!w-240px","end-placeholder":"\u7ED3\u675F\u65E5\u671F","start-placeholder":"\u5F00\u59CB\u65E5\u671F",type:"daterange","value-format":"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue","default-time","shortcuts"])]),_:1}),e(u,{label:"\u5F52\u5C5E\u90E8\u95E8",prop:"deptId"},{default:l(()=>[e(p,{modelValue:a(r).deptId,"onUpdate:modelValue":s[1]||(s[1]=t=>a(r).deptId=t),data:a(k),props:a(pe),"check-strictly":"",class:"!w-240px","node-key":"id",placeholder:"\u8BF7\u9009\u62E9\u5F52\u5C5E\u90E8\u95E8",onChange:s[2]||(s[2]=t=>a(r).userId=void 0)},null,8,["modelValue","data","props"])]),_:1}),e(u,{label:"\u5458\u5DE5",prop:"userId"},{default:l(()=>[e(f,{modelValue:a(r).userId,"onUpdate:modelValue":s[3]||(s[3]=t=>a(r).userId=t),class:"!w-240px",clearable:"",placeholder:"\u5458\u5DE5"},{default:l(()=>[(v(!0),q(x,null,j(a(Y),(t,M)=>(v(),K(c,{key:M,label:t.nickname,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(u,null,{default:l(()=>[e(V,{onClick:y},{default:l(()=>[e(i,{class:"mr-5px",icon:"ep:search"}),g(" \u641C\u7D22 ")]),_:1}),e(V,{onClick:z},{default:l(()=>[e(i,{class:"mr-5px",icon:"ep:refresh"}),g(" \u91CD\u7F6E ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(G,null,{default:l(()=>[e(E,{modelValue:a(n),"onUpdate:modelValue":s[4]||(s[4]=t=>L(n)?n.value=t:null)},{default:l(()=>[e(_,{label:"\u57CE\u5E02\u5206\u5E03\u5206\u6790",lazy:"",name:"areaRef"},{default:l(()=>[e(fe,{ref_key:"areaRef",ref:w,"query-params":a(r)},null,8,["query-params"])]),_:1}),e(_,{label:"\u5BA2\u6237\u7EA7\u522B\u5206\u6790",lazy:"",name:"levelRef"},{default:l(()=>[e(ce,{ref_key:"levelRef",ref:I,"query-params":a(r)},null,8,["query-params"])]),_:1}),e(_,{label:"\u5BA2\u6237\u6765\u6E90\u5206\u6790",lazy:"",name:"sourceRef"},{default:l(()=>[e(ie,{ref_key:"sourceRef",ref:R,"query-params":a(r)},null,8,["query-params"])]),_:1}),e(_,{label:"\u5BA2\u6237\u884C\u4E1A\u5206\u6790",lazy:"",name:"industryRef"},{default:l(()=>[e(ne,{ref_key:"industryRef",ref:D,"query-params":a(r)},null,8,["query-params"])]),_:1})]),_:1},8,["modelValue"])]),_:1})],64)}}});export{_e as default};