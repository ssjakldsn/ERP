import{d as M,r as w,e as J,u as K,bA as O,n as X,O as j,o as d,c as N,f as e,w as l,a as t,F as T,p as E,q as h,y as D,x as s,t as u,dV as y,dX as G,D as H,g as Q,A as W,B as Y,C as Z,J as $,K as ee,af as ae,I as te,L as re,M as le}from"./index-CIfmhqRC.js";import{_ as ie}from"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import{_ as oe}from"./DictTag.vue_vue_type_script_lang-CTpVFm77.js";import{_ as ne}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{b as _,d as v}from"./formatTime-DFFN_xWx.js";import{e as pe}from"./index-jPQDaA_X.js";import{C as se}from"./common-BQQO87UM.js";const me=Q("div",{class:"pb-5 text-xl"}," \u5373\u5C06\u5230\u671F\u7684\u5408\u540C ",-1),de=M({__name:"ContractRemindList",setup(ue){const g=w(!0),C=w(0),x=w([]),o=J({pageNo:1,pageSize:10,sceneType:"1",expiryType:1}),P=w(),c=async()=>{g.value=!0;try{const b=await pe(o);x.value=b.list,C.value=b.total}finally{g.value=!1}},U=()=>{o.pageNo=1,c()},{push:m}=K();return O(async()=>{await c()}),X(()=>{c()}),(b,n)=>{const I=W,S=Y,R=Z,q=$,k=ne,r=ee,f=ae,A=oe,L=te,V=re,z=ie,B=j("hasPermi"),F=le;return d(),N(T,null,[e(k,null,{default:l(()=>[me,e(q,{class:"-mb-15px",model:t(o),ref_key:"queryFormRef",ref:P,inline:!0,"label-width":"68px"},{default:l(()=>[e(R,{label:"\u5230\u671F\u72B6\u6001",prop:"expiryType"},{default:l(()=>[e(S,{modelValue:t(o).expiryType,"onUpdate:modelValue":n[0]||(n[0]=a=>t(o).expiryType=a),class:"!w-240px",placeholder:"\u72B6\u6001",onChange:U},{default:l(()=>[(d(!0),N(T,null,E(t(se),(a,p)=>(d(),h(I,{label:a.label,value:a.value,key:p},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1}),e(k,null,{default:l(()=>[D((d(),h(V,{data:t(x),"show-overflow-tooltip":!0,stripe:!0},{default:l(()=>[e(r,{align:"center",fixed:"left",label:"\u5408\u540C\u7F16\u53F7",prop:"no",width:"180"}),e(r,{align:"center",fixed:"left",label:"\u5408\u540C\u540D\u79F0",prop:"name",width:"160"},{default:l(a=>[e(f,{underline:!1,type:"primary",onClick:p=>{return i=a.row.id,void m({name:"CrmContractDetail",params:{id:i}});var i}},{default:l(()=>[s(u(a.row.name),1)]),_:2},1032,["onClick"])]),_:1}),e(r,{align:"center",label:"\u5BA2\u6237\u540D\u79F0",prop:"customerName",width:"120"},{default:l(a=>[e(f,{underline:!1,type:"primary",onClick:p=>{return i=a.row.customerId,void m({name:"CrmCustomerDetail",params:{id:i}});var i}},{default:l(()=>[s(u(a.row.customerName),1)]),_:2},1032,["onClick"])]),_:1}),e(r,{align:"center",label:"\u5546\u673A\u540D\u79F0",prop:"businessName",width:"130"},{default:l(a=>[e(f,{underline:!1,type:"primary",onClick:p=>{return i=a.row.businessId,void m({name:"CrmBusinessDetail",params:{id:i}});var i}},{default:l(()=>[s(u(a.row.businessName),1)]),_:2},1032,["onClick"])]),_:1}),e(r,{align:"center",label:"\u5408\u540C\u91D1\u989D\uFF08\u5143\uFF09",prop:"totalPrice",width:"140",formatter:t(y)},null,8,["formatter"]),e(r,{align:"center",label:"\u4E0B\u5355\u65F6\u95F4",prop:"orderDate",width:"120",formatter:t(_)},null,8,["formatter"]),e(r,{align:"center",label:"\u5408\u540C\u5F00\u59CB\u65F6\u95F4",prop:"startTime",width:"120",formatter:t(_)},null,8,["formatter"]),e(r,{align:"center",label:"\u5408\u540C\u7ED3\u675F\u65F6\u95F4",prop:"endTime",width:"120",formatter:t(_)},null,8,["formatter"]),e(r,{align:"center",label:"\u5BA2\u6237\u7B7E\u7EA6\u4EBA",prop:"contactName",width:"130"},{default:l(a=>[e(f,{underline:!1,type:"primary",onClick:p=>{return i=a.row.signContactId,void m({name:"CrmContactDetail",params:{id:i}});var i}},{default:l(()=>[s(u(a.row.signContactName),1)]),_:2},1032,["onClick"])]),_:1}),e(r,{align:"center",label:"\u516C\u53F8\u7B7E\u7EA6\u4EBA",prop:"signUserName",width:"130"}),e(r,{align:"center",label:"\u5907\u6CE8",prop:"remark",width:"200"}),e(r,{align:"center",label:"\u5DF2\u56DE\u6B3E\u91D1\u989D\uFF08\u5143\uFF09",prop:"totalReceivablePrice",width:"140",formatter:t(y)},null,8,["formatter"]),e(r,{align:"center",label:"\u672A\u56DE\u6B3E\u91D1\u989D\uFF08\u5143\uFF09",prop:"totalReceivablePrice",width:"140",formatter:t(y)},{default:l(a=>[s(u(t(G)(a.row.totalPrice-a.row.totalReceivablePrice)),1)]),_:1},8,["formatter"]),e(r,{formatter:t(v),align:"center",label:"\u6700\u540E\u8DDF\u8FDB\u65F6\u95F4",prop:"contactLastTime",width:"180px"},null,8,["formatter"]),e(r,{align:"center",label:"\u8D1F\u8D23\u4EBA",prop:"ownerUserName",width:"120"}),e(r,{align:"center",label:"\u6240\u5C5E\u90E8\u95E8",prop:"ownerUserDeptName",width:"100px"}),e(r,{formatter:t(v),align:"center",label:"\u66F4\u65B0\u65F6\u95F4",prop:"updateTime",width:"180px"},null,8,["formatter"]),e(r,{formatter:t(v),align:"center",label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime",width:"180px"},null,8,["formatter"]),e(r,{align:"center",label:"\u521B\u5EFA\u4EBA",prop:"creatorName",width:"120"}),e(r,{align:"center",fixed:"right",label:"\u5408\u540C\u72B6\u6001",prop:"auditStatus",width:"120"},{default:l(a=>[e(A,{type:t(H).CRM_AUDIT_STATUS,value:a.row.auditStatus},null,8,["type","value"])]),_:1}),e(r,{fixed:"right",label:"\u64CD\u4F5C",width:"90"},{default:l(a=>[D((d(),h(L,{link:"",type:"primary",onClick:p=>{return i=a.row,void m({name:"BpmProcessInstanceDetail",query:{id:i.processInstanceId}});var i}},{default:l(()=>[s(" \u67E5\u770B\u5BA1\u6279 ")]),_:2},1032,["onClick"])),[[B,["crm:contract:update"]]])]),_:1})]),_:1},8,["data"])),[[F,t(g)]]),e(z,{limit:t(o).pageSize,"onUpdate:limit":n[1]||(n[1]=a=>t(o).pageSize=a),page:t(o).pageNo,"onUpdate:page":n[2]||(n[2]=a=>t(o).pageNo=a),total:t(C),onPagination:c},null,8,["limit","page","total"])]),_:1})],64)}}});export{de as _};
