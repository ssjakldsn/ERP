import{d as J,r as u,e as K,u as O,bA as X,n as Y,O as j,o,c as R,f as a,w as l,a as r,F as N,p as G,q as p,y as E,x as d,t as m,dV as H,D as Q,dX as w,g as W,A as Z,B as $,C as ee,J as ae,af as re,K as le,I as te,L as ie,M as oe}from"./index-CIfmhqRC.js";import{_ as ne}from"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import{E as pe}from"./el-text-DMgoq9G3.js";import{_ as de}from"./DictTag.vue_vue_type_script_lang-CTpVFm77.js";import{_ as se}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{b as g,d as P}from"./formatTime-DFFN_xWx.js";import{e as me}from"./index-DdHHUXAi.js";import{R as ce}from"./common-BQQO87UM.js";import{_ as ue}from"./ReceivableForm.vue_vue_type_script_setup_true_lang-Cav8NmDw.js";const fe=W("div",{class:"pb-5 text-xl"},"\u5F85\u56DE\u6B3E\u63D0\u9192",-1),be=J({name:"ReceivablePlanRemindList",__name:"ReceivablePlanRemindList",setup(we){const v=u(!0),y=u(0),h=u([]),i=K({pageNo:1,pageSize:10,remindType:1}),I=u(),c=async()=>{v.value=!0;try{const _=await me(i);h.value=_.list,y.value=_.total}finally{v.value=!1}},U=()=>{i.pageNo=1,c()},x=u(),{push:k}=O();return X(async()=>{await c()}),Y(async()=>{await c()}),(_,s)=>{const V=Z,D=$,L=ee,S=ae,C=se,T=re,t=le,z=de,f=pe,A=te,B=ie,F=ne,q=j("hasPermi"),M=oe;return o(),R(N,null,[a(C,null,{default:l(()=>[fe,a(S,{ref_key:"queryFormRef",ref:I,inline:!0,model:r(i),class:"-mb-15px","label-width":"68px"},{default:l(()=>[a(L,{label:"\u5408\u540C\u72B6\u6001",prop:"remindType"},{default:l(()=>[a(D,{modelValue:r(i).remindType,"onUpdate:modelValue":s[0]||(s[0]=e=>r(i).remindType=e),class:"!w-240px",placeholder:"\u72B6\u6001",onChange:U},{default:l(()=>[(o(!0),R(N,null,G(r(ce),(e,b)=>(o(),p(V,{label:e.label,value:e.value,key:b},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1}),a(C,null,{default:l(()=>[E((o(),p(B,{data:r(h),stripe:!0,"show-overflow-tooltip":!0},{default:l(()=>[a(t,{align:"center",fixed:"left",label:"\u5BA2\u6237\u540D\u79F0",prop:"customerName",width:"150"},{default:l(e=>[a(T,{underline:!1,type:"primary",onClick:b=>{return n=e.row.customerId,void k({name:"CrmCustomerDetail",params:{id:n}});var n}},{default:l(()=>[d(m(e.row.customerName),1)]),_:2},1032,["onClick"])]),_:1}),a(t,{align:"center",label:"\u5408\u540C\u7F16\u53F7",prop:"contractNo",width:"200px"}),a(t,{align:"center",label:"\u671F\u6570",prop:"period"},{default:l(e=>[a(T,{underline:!1,type:"primary",onClick:b=>{return n=e.row.id,void k({name:"CrmReceivablePlanDetail",params:{id:n}});var n}},{default:l(()=>[d(m(e.row.period),1)]),_:2},1032,["onClick"])]),_:1}),a(t,{align:"center",label:"\u8BA1\u5212\u56DE\u6B3E\u91D1\u989D\uFF08\u5143\uFF09",prop:"price",width:"160",formatter:r(H)},null,8,["formatter"]),a(t,{formatter:r(g),align:"center",label:"\u8BA1\u5212\u56DE\u6B3E\u65E5\u671F",prop:"returnTime",width:"180px"},null,8,["formatter"]),a(t,{align:"center",label:"\u63D0\u524D\u51E0\u5929\u63D0\u9192",prop:"remindDays",width:"150"}),a(t,{align:"center",label:"\u63D0\u9192\u65E5\u671F",prop:"remindTime",width:"180px",formatter:r(g)},null,8,["formatter"]),a(t,{align:"center",label:"\u56DE\u6B3E\u65B9\u5F0F",prop:"returnType",width:"130px"},{default:l(e=>[a(z,{type:r(Q).CRM_RECEIVABLE_RETURN_TYPE,value:e.row.returnType},null,8,["type","value"])]),_:1}),a(t,{align:"center",label:"\u5907\u6CE8",prop:"remark"}),a(t,{label:"\u8D1F\u8D23\u4EBA",prop:"ownerUserName",width:"120"}),a(t,{align:"center",label:"\u5B9E\u9645\u56DE\u6B3E\u91D1\u989D\uFF08\u5143\uFF09",prop:"receivable.price",width:"160"},{default:l(e=>[e.row.receivable?(o(),p(f,{key:0},{default:l(()=>[d(m(r(w)(e.row.receivable.price)),1)]),_:2},1024)):(o(),p(f,{key:1},{default:l(()=>[d(m(r(w)(0)),1)]),_:1}))]),_:1}),a(t,{align:"center",label:"\u5B9E\u9645\u56DE\u6B3E\u65E5\u671F",prop:"receivable.returnTime",width:"180px",formatter:r(g)},null,8,["formatter"]),a(t,{align:"center",label:"\u5B9E\u9645\u56DE\u6B3E\u91D1\u989D\uFF08\u5143\uFF09",prop:"receivable.price",width:"160"},{default:l(e=>[e.row.receivable?(o(),p(f,{key:0},{default:l(()=>[d(m(r(w)(e.row.price-e.row.receivable.price)),1)]),_:2},1024)):(o(),p(f,{key:1},{default:l(()=>[d(m(r(w)(e.row.price)),1)]),_:2},1024))]),_:1}),a(t,{formatter:r(P),align:"center",label:"\u66F4\u65B0\u65F6\u95F4",prop:"updateTime",width:"180px"},null,8,["formatter"]),a(t,{formatter:r(P),align:"center",label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime",width:"180px"},null,8,["formatter"]),a(t,{align:"center",label:"\u521B\u5EFA\u4EBA",prop:"creatorName",width:"100px"}),a(t,{align:"center",fixed:"right",label:"\u64CD\u4F5C",width:"180px"},{default:l(e=>[E((o(),p(A,{link:"",type:"success",onClick:b=>{return n=e.row,void x.value.open("create",void 0,n);var n},disabled:e.row.receivableId},{default:l(()=>[d(" \u521B\u5EFA\u56DE\u6B3E ")]),_:2},1032,["onClick","disabled"])),[[q,["crm:receivable:create"]]])]),_:1})]),_:1},8,["data"])),[[M,r(v)]]),a(F,{total:r(y),page:r(i).pageNo,"onUpdate:page":s[1]||(s[1]=e=>r(i).pageNo=e),limit:r(i).pageSize,"onUpdate:limit":s[2]||(s[2]=e=>r(i).pageSize=e),onPagination:c},null,8,["total","page","limit"])]),_:1}),a(ue,{ref_key:"receivableFormRef",ref:x,onSuccess:c},null,512)],64)}}});export{be as _};