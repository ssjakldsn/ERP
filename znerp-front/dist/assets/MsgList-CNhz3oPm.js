import{_ as i}from"./Msg.vue_vue_type_script_setup_true_lang-CDtoXzAI.js";import{f as v}from"./formatTime-DFFN_xWx.js";import{d as g,o as A,c as o,p as u,g as a,t as n,a as d,at as L,f as Z,W as l,F as p,_ as N}from"./index-CIfmhqRC.js";import"./main.vue_vue_type_script_setup_true_lang-4T-wzdRZ.js";import"./main-D-MTREjU.js";import"./main-q6_374v6.js";import"./el-image-DLpquQe6.js";import"./main.vue_vue_type_script_setup_true_lang-rncY1S61.js";import"./main-DGKBWtix.js";import"./MsgEvent.vue_vue_type_script_setup_true_lang-Ahf7SFX-.js";import"./types-VQvH2Qnl.js";const k={class:"avatar-div"},J=["src"],P={class:"avue-comment__author"},B={class:"avue-comment__main"},E={class:"avue-comment__header"},M={class:"avue-comment__create_time"},I=N(g({name:"MsgList",__name:"MsgList",props:{list:{},accountId:{},user:{}},setup(c){const m=c,r=t=>t===1?m.user.nickname:"\u516C\u4F17\u53F7";return(t,W)=>(A(!0),o(p,null,u(m.list,s=>{return A(),o("div",{class:"execution",key:s.id},[a("div",{class:l(["avue-comment",{"avue-comment--reverse":s.sendFrom===2}])},[a("div",k,[a("img",{src:(e=s.sendFrom,e===1?m.user.avatar:"data:image/png;base64,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"),class:"avue-comment__avatar"},null,8,J),a("div",P,n(r(s.sendFrom)),1)]),a("div",B,[a("div",E,[a("div",M,n(d(v)(s.createTime)),1)]),a("div",{class:"avue-comment__body",style:L(s.sendFrom===2?"background: #6BED72;":"")},[Z(i,{item:s},null,8,["item"])],4)])],2)]);var e}),128))}}),[["__scopeId","data-v-ff188f43"]]);export{I as default};