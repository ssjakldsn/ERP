import{d as N,r as s,e as P,n as F,o as i,c as b,f as e,w as t,a,P as H,F as _,p as z,Q as A,D as u,q as g,x as B,y as M,U as q,C as Z,A as J,B as L,G as Q,H as j,I as W,J as X,K as $,L as ee,M as le}from"./index-CIfmhqRC.js";import{_ as ae}from"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import{_ as te}from"./DictTag.vue_vue_type_script_lang-CTpVFm77.js";import{E as re}from"./el-avatar-Cbg-oQZd.js";import{_ as oe}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{_ as pe}from"./index-2RHHZ-Zv.js";import{d as D}from"./formatTime-DFFN_xWx.js";import{g as ie}from"./index-BNxgj32s.js";import{f as ne}from"./formatter-CHMUnmj-.js";import"./index-CrBeVHKs.js";import"./color-BN7ZL7BD.js";import"./el-card-DyMugU68.js";const se=N({name:"TradeBrokerageRecord",__name:"index",setup(ue){const d=s(!0),w=s(0),h=s([]),r=P({pageNo:1,pageSize:10,userId:null,bizType:null,price:null,status:null,createTime:[]}),v=s(),m=async()=>{d.value=!0;try{const f=await ie(r);h.value=f.list,w.value=f.total}finally{d.value=!1}},c=()=>{r.pageNo=1,m()},I=()=>{v.value.resetFields(),c()};return F(()=>{m()}),(f,o)=>{const O=pe,U=q,n=Z,y=J,T=L,k=Q,R=j,x=W,C=X,E=oe,p=$,S=re,V=te,K=ee,Y=ae,G=le;return i(),b(_,null,[e(O,{title:"\u3010\u4EA4\u6613\u3011\u5206\u9500\u8FD4\u4F63",url:"https://doc.iocoder.cn/mall/trade-brokerage/"}),e(E,null,{default:t(()=>[e(C,{class:"-mb-15px",model:a(r),ref_key:"queryFormRef",ref:v,inline:!0,"label-width":"68px"},{default:t(()=>[e(n,{label:"\u7528\u6237\u7F16\u53F7",prop:"userId"},{default:t(()=>[e(U,{modelValue:a(r).userId,"onUpdate:modelValue":o[0]||(o[0]=l=>a(r).userId=l),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u7F16\u53F7",clearable:"",onKeyup:H(c,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),e(n,{label:"\u4E1A\u52A1\u7C7B\u578B",prop:"bizType"},{default:t(()=>[e(T,{modelValue:a(r).bizType,"onUpdate:modelValue":o[1]||(o[1]=l=>a(r).bizType=l),placeholder:"\u8BF7\u9009\u62E9\u4E1A\u52A1\u7C7B\u578B",clearable:"",class:"!w-240px"},{default:t(()=>[(i(!0),b(_,null,z(a(A)(a(u).BROKERAGE_RECORD_BIZ_TYPE),l=>(i(),g(y,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"\u72B6\u6001",prop:"status"},{default:t(()=>[e(T,{modelValue:a(r).status,"onUpdate:modelValue":o[2]||(o[2]=l=>a(r).status=l),placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001",clearable:"",class:"!w-240px"},{default:t(()=>[(i(!0),b(_,null,z(a(A)(a(u).BROKERAGE_RECORD_STATUS),l=>(i(),g(y,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime"},{default:t(()=>[e(k,{modelValue:a(r).createTime,"onUpdate:modelValue":o[3]||(o[3]=l=>a(r).createTime=l),"value-format":"YYYY-MM-DD HH:mm:ss",type:"daterange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-240px"},null,8,["modelValue","default-time"])]),_:1}),e(n,null,{default:t(()=>[e(x,{onClick:c},{default:t(()=>[e(R,{icon:"ep:search",class:"mr-5px"}),B(" \u641C\u7D22")]),_:1}),e(x,{onClick:I},{default:t(()=>[e(R,{icon:"ep:refresh",class:"mr-5px"}),B(" \u91CD\u7F6E")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(E,null,{default:t(()=>[M((i(),g(K,{data:a(h),stripe:!0,"show-overflow-tooltip":!0},{default:t(()=>[e(p,{label:"\u7F16\u53F7",align:"center",prop:"id","min-width":"60"}),e(p,{label:"\u7528\u6237\u7F16\u53F7",align:"center",prop:"userId","min-width":"80"}),e(p,{label:"\u5934\u50CF",align:"center",prop:"userAvatar",width:"70px"},{default:t(l=>[e(S,{src:l.row.userAvatar},null,8,["src"])]),_:1}),e(p,{label:"\u6635\u79F0",align:"center",prop:"userNickname","min-width":"80px"}),e(p,{label:"\u4E1A\u52A1\u7C7B\u578B",align:"center",prop:"bizType","min-width":"85"},{default:t(l=>[e(V,{type:a(u).BROKERAGE_RECORD_BIZ_TYPE,value:l.row.bizType},null,8,["type","value"])]),_:1}),e(p,{label:"\u4E1A\u52A1\u7F16\u53F7",align:"center",prop:"bizId","min-width":"80"}),e(p,{label:"\u6807\u9898",align:"center",prop:"title","min-width":"110"}),e(p,{label:"\u91D1\u989D",align:"center",prop:"price","min-width":"60",formatter:a(ne)},null,8,["formatter"]),e(p,{label:"\u8BF4\u660E",align:"center",prop:"description","min-width":"120"}),e(p,{label:"\u72B6\u6001",align:"center",prop:"status","min-width":"85"},{default:t(l=>[e(V,{type:a(u).BROKERAGE_RECORD_STATUS,value:l.row.status},null,8,["type","value"])]),_:1}),e(p,{label:"\u89E3\u51BB\u65F6\u95F4",align:"center",prop:"unfreezeTime",formatter:a(D),width:"180px"},null,8,["formatter"]),e(p,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"createTime",formatter:a(D),width:"180px"},null,8,["formatter"])]),_:1},8,["data"])),[[G,a(d)]]),e(Y,{total:a(w),page:a(r).pageNo,"onUpdate:page":o[4]||(o[4]=l=>a(r).pageNo=l),limit:a(r).pageSize,"onUpdate:limit":o[5]||(o[5]=l=>a(r).pageSize=l),onPagination:m},null,8,["total","page","limit"])]),_:1})],64)}}});export{se as default};
