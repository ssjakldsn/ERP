import{d as X,u as j,N as A,r as p,e as E,n as G,as as H,o as n,c as J,f as t,w as o,y as W,a,q as m,g as v,t as w,x as y,a5 as z,k as h,am as Z,F as $,K as O,I as Q,av as R,L as Y,M as ee}from"./index-CIfmhqRC.js";import{_ as ae}from"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import{_ as te}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{_ as oe}from"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import{_ as le}from"./index-2RHHZ-Zv.js";import{d as re}from"./formatTime-DFFN_xWx.js";import{k as ie}from"./bpmn-embedded-BXCF3ZCj.js";import{g as pe,a as ne}from"./index-w37PzF0B.js";import{b as me}from"./formCreate-ECTif2qa.js";import"./el-card-DyMugU68.js";import"./index-CrBeVHKs.js";import"./XTextButton-eNQK5rLc.js";import"./XButton-CPWgIV2x.js";import"./el-collapse-item-BgajxfOI.js";import"./index-X3qw9mzS.js";import"./el-tree-select-CYFGeiEt.js";import"./tree-BMqZf9_I.js";import"./index-CSBlvrKl.js";import"./index-C34hh2Ad.js";import"./index-5G2YP0dG.js";import"./index-QrlE36WK.js";import"./index-DoOVXCWW.js";import"./constants-A8BI3pz7.js";import"./index-D8KNv32A.js";import"./el-drawer-QOxzUn5j.js";import"./DictTag.vue_vue_type_script_lang-CTpVFm77.js";import"./color-BN7ZL7BD.js";import"./index-BbfStrPJ.js";const se=X({name:"BpmProcessDefinition",__name:"index",setup(ue){const{push:T}=j(),{query:B}=A(),g=p(!0),b=p(0),C=p([]),s=E({pageNo:1,pageSize:10,key:B.key}),V=async()=>{g.value=!0;try{const r=await pe(s);C.value=r.list,b.value=r.total}finally{g.value=!1}},d=p(!1),_=p({rule:[],option:{}}),x=async r=>{r.formType==10?(me(_,r.formConf,r.formFields),d.value=!0):await T({path:r.formCustomCreatePath})},f=p(!1),u=p(null),N=p({prefix:"flowable"});return G(()=>{V()}),(r,l)=>{const F=le,i=O,k=Q,c=R,q=Y,D=oe,I=te,K=H("form-create"),P=ae,L=ee;return n(),J($,null,[t(F,{title:"\u5DE5\u4F5C\u6D41\u624B\u518C",url:"https://doc.iocoder.cn/bpm/"}),t(I,null,{default:o(()=>[W((n(),m(q,{data:a(C)},{default:o(()=>[t(i,{label:"\u5B9A\u4E49\u7F16\u53F7",align:"center",prop:"id",width:"400"}),t(i,{label:"\u6D41\u7A0B\u540D\u79F0",align:"center",prop:"name",width:"200"},{default:o(e=>[t(k,{type:"primary",link:"",onClick:S=>(async M=>{var U;u.value=(U=await ne(M.id))==null?void 0:U.bpmnXml,f.value=!0})(e.row)},{default:o(()=>[v("span",null,w(e.row.name),1)]),_:2},1032,["onClick"])]),_:1}),t(i,{label:"\u5B9A\u4E49\u5206\u7C7B",align:"center",prop:"categoryName",width:"100"}),t(i,{label:"\u8868\u5355\u4FE1\u606F",align:"center",prop:"formType",width:"200"},{default:o(e=>[e.row.formType===10?(n(),m(k,{key:0,type:"primary",link:"",onClick:S=>x(e.row)},{default:o(()=>[v("span",null,w(e.row.formName),1)]),_:2},1032,["onClick"])):(n(),m(k,{key:1,type:"primary",link:"",onClick:S=>x(e.row)},{default:o(()=>[v("span",null,w(e.row.formCustomCreatePath),1)]),_:2},1032,["onClick"]))]),_:1}),t(i,{label:"\u6D41\u7A0B\u7248\u672C",align:"center",prop:"processDefinition.version",width:"80"},{default:o(e=>[e.row?(n(),m(c,{key:0},{default:o(()=>[y("v"+w(e.row.version),1)]),_:2},1024)):(n(),m(c,{key:1,type:"warning"},{default:o(()=>[y("\u672A\u90E8\u7F72")]),_:1}))]),_:1}),t(i,{label:"\u72B6\u6001",align:"center",prop:"version",width:"80"},{default:o(e=>[e.row.suspensionState===1?(n(),m(c,{key:0,type:"success"},{default:o(()=>[y("\u6FC0\u6D3B")]),_:1})):z("",!0),e.row.suspensionState===2?(n(),m(c,{key:1,type:"warning"},{default:o(()=>[y("\u6302\u8D77")]),_:1})):z("",!0)]),_:1}),t(i,{label:"\u90E8\u7F72\u65F6\u95F4",align:"center",prop:"deploymentTime",width:"180",formatter:a(re)},null,8,["formatter"]),t(i,{label:"\u5B9A\u4E49\u63CF\u8FF0",align:"center",prop:"description",width:"300","show-overflow-tooltip":""})]),_:1},8,["data"])),[[L,a(g)]]),t(D,{total:a(b),page:a(s).pageNo,"onUpdate:page":l[0]||(l[0]=e=>a(s).pageNo=e),limit:a(s).pageSize,"onUpdate:limit":l[1]||(l[1]=e=>a(s).pageSize=e),onPagination:V},null,8,["total","page","limit"])]),_:1}),t(P,{title:"\u8868\u5355\u8BE6\u60C5",modelValue:a(d),"onUpdate:modelValue":l[2]||(l[2]=e=>h(d)?d.value=e:null),width:"800"},{default:o(()=>[t(K,{rule:a(_).rule,option:a(_).option},null,8,["rule","option"])]),_:1},8,["modelValue"]),t(P,{title:"\u6D41\u7A0B\u56FE",modelValue:a(f),"onUpdate:modelValue":l[4]||(l[4]=e=>h(f)?f.value=e:null),width:"800"},{default:o(()=>[t(a(ie),Z({key:"designer",modelValue:a(u),"onUpdate:modelValue":l[3]||(l[3]=e=>h(u)?u.value=e:null),value:a(u)},a(N),{prefix:a(N).prefix}),null,16,["modelValue","value","prefix"])]),_:1},8,["modelValue"])],64)}}});export{se as default};
