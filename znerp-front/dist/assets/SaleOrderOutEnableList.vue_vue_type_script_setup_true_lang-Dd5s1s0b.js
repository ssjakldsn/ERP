import{d as A,r as n,e as G,o as f,q as _,w as t,f as e,a,x as i,P as R,c as j,F as Q,p as W,y as X,L as Z,k as N,ep as I,dV as T,aw as $,U as ee,C as ae,A as le,B as te,G as oe,H as re,I as de,J as ne,ak as ue,K as ie,M as pe}from"./index-CIfmhqRC.js";import{_ as se}from"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import{_ as me}from"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import{_ as ce}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{S as fe}from"./index-DgdCYQ3d.js";import{b as ve}from"./formatTime-DFFN_xWx.js";import{P as ge}from"./index-C-VA7MOy.js";const be=A({name:"ErpSaleOrderOutEnableList",__name:"SaleOrderOutEnableList",emits:["success"],setup(_e,{expose:E,emit:L}){const w=n([]),V=n(0),v=n(!1),u=n(!1),r=G({pageNo:1,pageSize:10,no:void 0,productId:void 0,orderTime:[],outEnable:!0}),h=n(),y=n([]),p=n(void 0),s=n(void 0);E({open:async()=>{u.value=!0,await $(),await C(),y.value=await ge.getProductSimpleList()}});const O=L,D=()=>{try{O("success",s.value)}finally{u.value=!1}},x=async()=>{v.value=!0;try{const b=await fe.getSaleOrderPage(r);w.value=b.list,V.value=b.total}finally{v.value=!1}},C=()=>{h.value.resetFields(),g()},g=()=>{r.pageNo=1,p.value=void 0,s.value=void 0,x()};return(b,o)=>{const Y=ee,m=ae,z=le,F=te,H=oe,k=re,c=de,M=ne,P=ce,q=ue,d=ie,B=me,J=se,K=pe;return f(),_(J,{title:"\u9009\u62E9\u9500\u552E\u8BA2\u5355\uFF08\u4EC5\u5C55\u793A\u53EF\u51FA\u5E93\uFF09",modelValue:a(u),"onUpdate:modelValue":o[7]||(o[7]=l=>N(u)?u.value=l:null),appendToBody:!0,scroll:!0,width:"1080"},{footer:t(()=>[e(c,{disabled:!a(s),type:"primary",onClick:D},{default:t(()=>[i("\u786E \u5B9A")]),_:1},8,["disabled"]),e(c,{onClick:o[6]||(o[6]=l=>u.value=!1)},{default:t(()=>[i("\u53D6 \u6D88")]),_:1})]),default:t(()=>[e(P,null,{default:t(()=>[e(M,{class:"-mb-15px",model:a(r),ref_key:"queryFormRef",ref:h,inline:!0,"label-width":"68px"},{default:t(()=>[e(m,{label:"\u8BA2\u5355\u5355\u53F7",prop:"no"},{default:t(()=>[e(Y,{modelValue:a(r).no,"onUpdate:modelValue":o[0]||(o[0]=l=>a(r).no=l),placeholder:"\u8BF7\u8F93\u5165\u8BA2\u5355\u5355\u53F7",clearable:"",onKeyup:R(g,["enter"]),class:"!w-160px"},null,8,["modelValue"])]),_:1}),e(m,{label:"\u4EA7\u54C1",prop:"productId"},{default:t(()=>[e(F,{modelValue:a(r).productId,"onUpdate:modelValue":o[1]||(o[1]=l=>a(r).productId=l),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4EA7\u54C1",class:"!w-160px"},{default:t(()=>[(f(!0),j(Q,null,W(a(y),l=>(f(),_(z,{key:l.id,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(m,{label:"\u8BA2\u5355\u65F6\u95F4",prop:"orderTime"},{default:t(()=>[e(H,{modelValue:a(r).orderTime,"onUpdate:modelValue":o[2]||(o[2]=l=>a(r).orderTime=l),"value-format":"YYYY-MM-DD HH:mm:ss",type:"daterange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-160px"},null,8,["modelValue","default-time"])]),_:1}),e(m,null,{default:t(()=>[e(c,{onClick:g},{default:t(()=>[e(k,{icon:"ep:search",class:"mr-5px"}),i(" \u641C\u7D22")]),_:1}),e(c,{onClick:C},{default:t(()=>[e(k,{icon:"ep:refresh",class:"mr-5px"}),i(" \u91CD\u7F6E")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(P,null,{default:t(()=>[X((f(),_(a(Z),{data:a(w),"show-overflow-tooltip":!0,stripe:!0},{default:t(()=>[e(d,{align:"center",width:"65"},{default:t(l=>[e(q,{value:l.row.id,modelValue:a(p),"onUpdate:modelValue":o[3]||(o[3]=S=>N(p)?p.value=S:null),onChange:S=>{return U=l.row,void(s.value=U);var U}},{default:t(()=>[i(" \xA0 ")]),_:2},1032,["value","modelValue","onChange"])]),_:1}),e(d,{"min-width":"180",label:"\u8BA2\u5355\u5355\u53F7",align:"center",prop:"no"}),e(d,{label:"\u5BA2\u6237",align:"center",prop:"customerName"}),e(d,{label:"\u4EA7\u54C1\u4FE1\u606F",align:"center",prop:"productNames","min-width":"200"}),e(d,{label:"\u8BA2\u5355\u65F6\u95F4",align:"center",prop:"orderTime",formatter:a(ve),width:"120px"},null,8,["formatter"]),e(d,{label:"\u521B\u5EFA\u4EBA",align:"center",prop:"creatorName"}),e(d,{label:"\u603B\u6570\u91CF",align:"center",prop:"totalCount",formatter:a(I)},null,8,["formatter"]),e(d,{label:"\u51FA\u5E93\u6570\u91CF",align:"center",prop:"outCount",formatter:a(I)},null,8,["formatter"]),e(d,{label:"\u91D1\u989D\u5408\u8BA1",align:"center",prop:"totalProductPrice",formatter:a(T)},null,8,["formatter"]),e(d,{label:"\u542B\u7A0E\u91D1\u989D",align:"center",prop:"totalPrice",formatter:a(T)},null,8,["formatter"])]),_:1},8,["data"])),[[K,a(v)]]),e(B,{limit:a(r).pageSize,"onUpdate:limit":o[4]||(o[4]=l=>a(r).pageSize=l),page:a(r).pageNo,"onUpdate:page":o[5]||(o[5]=l=>a(r).pageNo=l),total:a(V),onPagination:x},null,8,["limit","page","total"])]),_:1})]),_:1},8,["modelValue"])}}});export{be as _};
