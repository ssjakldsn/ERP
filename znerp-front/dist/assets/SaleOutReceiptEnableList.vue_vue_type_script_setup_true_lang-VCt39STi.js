import{d as q,r as p,e as B,o as d,q as g,w as t,f as e,a,x as u,P as K,c as S,F as A,p as G,y as J,L as W,dV as I,t as X,dX as j,k as Q,aw as Z,U as $,C as ee,A as ae,B as le,G as te,H as oe,I as re,J as ie,K as se,av as pe,M as ne}from"./index-CIfmhqRC.js";import{_ as de}from"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import{_ as ue}from"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import{_ as me}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{b as ce}from"./formatTime-DFFN_xWx.js";import{P as fe}from"./index-C-VA7MOy.js";import{S as ge}from"./index-B62C0gYf.js";const be={key:0},we=q({name:"SaleOutReceiptEnableList",__name:"SaleOutReceiptEnableList",emits:["success"],setup(_e,{expose:N,emit:U}){const _=p([]),v=p(0),b=p(!1),n=p(!1),o=B({pageNo:1,pageSize:10,no:void 0,productId:void 0,outTime:[],receiptEnable:!0,customerId:void 0}),y=p(),h=p([]),m=p([]),C=s=>{m.value=s};N({open:async s=>{n.value=!0,await Z(),o.customerId=s,await x(),h.value=await fe.getProductSimpleList()}});const T=U,L=()=>{try{T("success",m.value)}finally{n.value=!1}},V=async()=>{b.value=!0;try{const s=await ge.getSaleOutPage(o);_.value=s.list,v.value=s.total}finally{b.value=!1}},x=()=>{y.value.resetFields(),w()},w=()=>{o.pageNo=1,m.value=[],V()};return(s,r)=>{const Y=$,c=ee,D=ae,E=le,z=te,P=oe,f=re,F=ie,k=me,i=se,H=pe,M=ue,O=de,R=ne;return d(),g(O,{title:"\u9009\u62E9\u9500\u552E\u51FA\u5E93\uFF08\u4EC5\u5C55\u793A\u53EF\u6536\u6B3E\uFF09",modelValue:a(n),"onUpdate:modelValue":r[6]||(r[6]=l=>Q(n)?n.value=l:null),appendToBody:!0,scroll:!0,width:"1080"},{footer:t(()=>[e(f,{disabled:!a(m).length,type:"primary",onClick:L},{default:t(()=>[u(" \u786E \u5B9A ")]),_:1},8,["disabled"]),e(f,{onClick:r[5]||(r[5]=l=>n.value=!1)},{default:t(()=>[u("\u53D6 \u6D88")]),_:1})]),default:t(()=>[e(k,null,{default:t(()=>[e(F,{class:"-mb-15px",model:a(o),ref_key:"queryFormRef",ref:y,inline:!0,"label-width":"68px"},{default:t(()=>[e(c,{label:"\u51FA\u5E93\u5355\u53F7",prop:"no"},{default:t(()=>[e(Y,{modelValue:a(o).no,"onUpdate:modelValue":r[0]||(r[0]=l=>a(o).no=l),placeholder:"\u8BF7\u8F93\u5165\u51FA\u5E93\u5355\u53F7",clearable:"",onKeyup:K(w,["enter"]),class:"!w-160px"},null,8,["modelValue"])]),_:1}),e(c,{label:"\u4EA7\u54C1",prop:"productId"},{default:t(()=>[e(E,{modelValue:a(o).productId,"onUpdate:modelValue":r[1]||(r[1]=l=>a(o).productId=l),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4EA7\u54C1",class:"!w-160px"},{default:t(()=>[(d(!0),S(A,null,G(a(h),l=>(d(),g(D,{key:l.id,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(c,{label:"\u51FA\u5E93\u65F6\u95F4",prop:"orderTime"},{default:t(()=>[e(z,{modelValue:a(o).outTime,"onUpdate:modelValue":r[2]||(r[2]=l=>a(o).outTime=l),"value-format":"YYYY-MM-DD HH:mm:ss",type:"daterange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-160px"},null,8,["modelValue","default-time"])]),_:1}),e(c,null,{default:t(()=>[e(f,{onClick:w},{default:t(()=>[e(P,{icon:"ep:search",class:"mr-5px"}),u(" \u641C\u7D22")]),_:1}),e(f,{onClick:x},{default:t(()=>[e(P,{icon:"ep:refresh",class:"mr-5px"}),u(" \u91CD\u7F6E")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(k,null,{default:t(()=>[J((d(),g(a(W),{data:a(_),"show-overflow-tooltip":!0,stripe:!0,onSelectionChange:C},{default:t(()=>[e(i,{width:"30",label:"\u9009\u62E9",type:"selection"}),e(i,{"min-width":"180",label:"\u51FA\u5E93\u5355\u53F7",align:"center",prop:"no"}),e(i,{label:"\u5BA2\u6237",align:"center",prop:"customerName"}),e(i,{label:"\u4EA7\u54C1\u4FE1\u606F",align:"center",prop:"productNames","min-width":"200"}),e(i,{label:"\u51FA\u5E93\u65F6\u95F4",align:"center",prop:"outTime",formatter:a(ce),width:"120px"},null,8,["formatter"]),e(i,{label:"\u521B\u5EFA\u4EBA",align:"center",prop:"creatorName"}),e(i,{label:"\u5E94\u6536\u91D1\u989D",align:"center",prop:"totalPrice",formatter:a(I)},null,8,["formatter"]),e(i,{label:"\u5DF2\u6536\u91D1\u989D",align:"center",prop:"receiptPrice",formatter:a(I)},null,8,["formatter"]),e(i,{label:"\u672A\u6536\u91D1\u989D",align:"center"},{default:t(l=>[l.row.receiptPrice===l.row.totalPrice?(d(),S("span",be,"0")):(d(),g(H,{key:1,type:"danger"},{default:t(()=>[u(X(a(j)(l.row.totalPrice-l.row.receiptPrice)),1)]),_:2},1024))]),_:1})]),_:1},8,["data"])),[[R,a(b)]]),e(M,{limit:a(o).pageSize,"onUpdate:limit":r[3]||(r[3]=l=>a(o).pageSize=l),page:a(o).pageNo,"onUpdate:page":r[4]||(r[4]=l=>a(o).pageNo=l),total:a(v),onPagination:V},null,8,["limit","page","total"])]),_:1})]),_:1},8,["modelValue"])}}});export{we as _};