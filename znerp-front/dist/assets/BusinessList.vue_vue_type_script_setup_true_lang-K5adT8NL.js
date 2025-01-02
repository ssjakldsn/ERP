import{d as D,r as l,e as F,u as H,ar as K,O as V,o as p,c as G,f as e,w as r,x as d,a as s,y as v,q as m,a5 as k,t as J,dV as Q,F as W,z as X,H as Y,I as Z,j as $,K as ee,af as ae,L as se,M as te}from"./index-CIfmhqRC.js";import{_ as oe}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{_ as ie}from"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import{b as re,g as ne}from"./index-B5nlbV2q.js";import{h as ce,i as le}from"./index-B_QTmj5f.js";import{_ as ue}from"./BusinessForm.vue_vue_type_script_setup_true_lang-BT6WnAjK.js";import{B as S}from"./index-8CYEcIk3.js";import{_ as pe}from"./BusinessListModal.vue_vue_type_script_setup_true_lang-DoLUy-ZT.js";const de=D({name:"CrmBusinessList",__name:"BusinessList",props:{bizType:{},bizId:{},customerId:{},contactId:{}},setup(T){const f=X(),t=T,I=l(!0),w=l(0),z=l([]),a=F({pageNo:1,pageSize:10,customerId:void 0,contactId:void 0}),b=async()=>{I.value=!0;try{a.customerId=void 0,a.contactId=void 0;let o={list:[],total:0};switch(t.bizType){case S.CRM_CUSTOMER:a.customerId=t.bizId,o=await ne(a);break;case S.CRM_CONTACT:a.contactId=t.bizId,o=await re(a);break;default:return}z.value=o.list,w.value=o.total}finally{I.value=!1}},g=()=>{a.pageNo=1,b()},C=l(),x=()=>{C.value.open("create",null,t.customerId,t.contactId)},{push:M}=H(),h=l(),O=()=>{h.value.open()},B=async o=>{const i={contactId:t.bizId,businessIds:o};y.value.getSelectionRows().forEach(u=>{i.businessIds.push(u.id)}),await ce(i),f.success("\u5173\u8054\u5546\u673A\u6210\u529F"),g()},y=l(),L=async()=>{const o={contactId:t.bizId,businessIds:y.value.getSelectionRows().map(i=>i.id)};if(o.businessIds.length===0)return f.error("\u672A\u9009\u62E9\u5546\u673A");await le(o),f.success("\u53D6\u5173\u5546\u673A\u6210\u529F"),g()};return K(()=>[t.bizId,t.bizType],()=>{g()},{immediate:!0,deep:!0}),(o,i)=>{const u=Y,_=Z,U=$,n=ee,j=ae,E=se,P=ie,q=oe,N=V("hasPermi"),A=te;return p(),G(W,null,[e(U,{justify:"end"},{default:r(()=>[e(_,{onClick:x},{default:r(()=>[e(u,{class:"mr-5px",icon:"ep:opportunity"}),d(" \u521B\u5EFA\u5546\u673A ")]),_:1}),s(a).contactId?v((p(),m(_,{key:0,onClick:O},{default:r(()=>[e(u,{class:"mr-5px",icon:"ep:circle-plus"}),d("\u5173\u8054 ")]),_:1})),[[N,["crm:contact:create-business"]]]):k("",!0),s(a).contactId?v((p(),m(_,{key:1,onClick:L},{default:r(()=>[e(u,{class:"mr-5px",icon:"ep:remove"}),d("\u89E3\u9664\u5173\u8054 ")]),_:1})),[[N,["crm:contact:delete-business"]]]):k("",!0)]),_:1}),e(q,{class:"mt-10px"},{default:r(()=>[v((p(),m(E,{ref_key:"businessRef",ref:y,data:s(z),stripe:!0,"show-overflow-tooltip":!0},{default:r(()=>[s(a).contactId?(p(),m(n,{key:0,type:"selection",width:"55"})):k("",!0),e(n,{label:"\u5546\u673A\u540D\u79F0",fixed:"left",align:"center",prop:"name"},{default:r(c=>[e(j,{type:"primary",underline:!1,onClick:me=>{return R=c.row.id,void M({name:"CrmBusinessDetail",params:{id:R}});var R}},{default:r(()=>[d(J(c.row.name),1)]),_:2},1032,["onClick"])]),_:1}),e(n,{label:"\u5546\u673A\u91D1\u989D",align:"center",prop:"price",formatter:s(Q)},null,8,["formatter"]),e(n,{label:"\u5BA2\u6237\u540D\u79F0",align:"center",prop:"customerName"}),e(n,{label:"\u5546\u673A\u7EC4",align:"center",prop:"statusTypeName"}),e(n,{label:"\u5546\u673A\u9636\u6BB5",align:"center",prop:"statusName"})]),_:1},8,["data"])),[[A,s(I)]]),e(P,{total:s(w),page:s(a).pageNo,"onUpdate:page":i[0]||(i[0]=c=>s(a).pageNo=c),limit:s(a).pageSize,"onUpdate:limit":i[1]||(i[1]=c=>s(a).pageSize=c),onPagination:b},null,8,["total","page","limit"])]),_:1}),e(ue,{ref_key:"formRef",ref:C,onSuccess:b},null,512),e(pe,{ref_key:"businessModalRef",ref:h,"customer-id":t.customerId,onSuccess:B},null,8,["customer-id"])],64)}}});export{de as _};