import{d as Q,u as X,r as y,e as Z,n as $,cL as h,D as m,o as s,c,f as l,w as t,a,P as S,F as f,p as w,q as _,x as T,y as ee,t as b,g as x,aD as le,aB as ae,aH as te,U as re,C as ue,A as oe,B as se,G as ne,H as pe,I as de,J as ie,l as me,m as ce,K as fe,av as _e,L as be,M as ve}from"./index-CIfmhqRC.js";import{_ as ye}from"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import{_ as we}from"./DictTag.vue_vue_type_script_lang-CTpVFm77.js";import{E as Te}from"./el-image-DLpquQe6.js";import{_ as Ae}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{_ as Ve}from"./index-2RHHZ-Zv.js";import{e as ge}from"./index-CVn1e3q1.js";import{f as he}from"./formatTime-DFFN_xWx.js";import"./index-CrBeVHKs.js";import"./color-BN7ZL7BD.js";import"./el-card-DyMugU68.js";const xe={class:"flex items-center"},Ee={class:"mr-10px"},Ne=Q({name:"TradeAfterSale",__name:"index",setup(ke){const{push:U}=X(),E=y(!0),D=y(0),R=y([]),C=y([{label:"\u5168\u90E8",value:"0"}]),F=y(),r=Z({pageNo:1,pageSize:10,no:null,status:"0",orderNo:null,spuName:null,createTime:[],way:null,type:null}),A=async()=>{E.value=!0;try{const o=ae(r);o.status==="0"&&delete o.status;const u=await ge(o);R.value=u.list,D.value=u.total}finally{E.value=!1}},v=async()=>{r.pageNo=1,await A()},H=()=>{var o;(o=F.value)==null||o.resetFields(),v()},I=async o=>{r.status=o.paneName,await A()};return $(async()=>{await A();for(const o of h(m.TRADE_AFTER_SALE_STATUS))C.value.push({label:o.label,value:o.value})}),(o,u)=>{const K=Ve,N=re,p=ue,V=oe,k=se,z=ne,L=pe,g=de,B=ie,Y=Ae,M=me,q=ce,n=fe,W=Te,G=_e,P=we,J=be,O=ye,j=ve;return s(),c(f,null,[l(K,{title:"\u3010\u4EA4\u6613\u3011\u552E\u540E\u9000\u6B3E",url:"https://doc.iocoder.cn/mall/trade-aftersale/"}),l(Y,null,{default:t(()=>[l(B,{ref_key:"queryFormRef",ref:F,inline:!0,model:a(r),"label-width":"68px"},{default:t(()=>[l(p,{label:"\u5546\u54C1\u540D\u79F0",prop:"spuName"},{default:t(()=>[l(N,{modelValue:a(r).spuName,"onUpdate:modelValue":u[0]||(u[0]=e=>a(r).spuName=e),class:"!w-280px",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1 SPU \u540D\u79F0",onKeyup:S(v,["enter"])},null,8,["modelValue"])]),_:1}),l(p,{label:"\u9000\u6B3E\u7F16\u53F7",prop:"no"},{default:t(()=>[l(N,{modelValue:a(r).no,"onUpdate:modelValue":u[1]||(u[1]=e=>a(r).no=e),class:"!w-280px",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u9000\u6B3E\u7F16\u53F7",onKeyup:S(v,["enter"])},null,8,["modelValue"])]),_:1}),l(p,{label:"\u8BA2\u5355\u7F16\u53F7",prop:"orderNo"},{default:t(()=>[l(N,{modelValue:a(r).orderNo,"onUpdate:modelValue":u[2]||(u[2]=e=>a(r).orderNo=e),class:"!w-280px",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u8BA2\u5355\u7F16\u53F7",onKeyup:S(v,["enter"])},null,8,["modelValue"])]),_:1}),l(p,{label:"\u552E\u540E\u72B6\u6001",prop:"status"},{default:t(()=>[l(k,{modelValue:a(r).status,"onUpdate:modelValue":u[3]||(u[3]=e=>a(r).status=e),class:"!w-280px",clearable:"",placeholder:"\u8BF7\u9009\u62E9\u552E\u540E\u72B6\u6001"},{default:t(()=>[l(V,{label:"\u5168\u90E8",value:"0"}),(s(!0),c(f,null,w(a(h)(a(m).TRADE_AFTER_SALE_STATUS),e=>(s(),_(V,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(p,{label:"\u552E\u540E\u65B9\u5F0F",prop:"way"},{default:t(()=>[l(k,{modelValue:a(r).way,"onUpdate:modelValue":u[4]||(u[4]=e=>a(r).way=e),class:"!w-280px",clearable:"",placeholder:"\u8BF7\u9009\u62E9\u552E\u540E\u65B9\u5F0F"},{default:t(()=>[(s(!0),c(f,null,w(a(h)(a(m).TRADE_AFTER_SALE_WAY),e=>(s(),_(V,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(p,{label:"\u552E\u540E\u7C7B\u578B",prop:"type"},{default:t(()=>[l(k,{modelValue:a(r).type,"onUpdate:modelValue":u[5]||(u[5]=e=>a(r).type=e),class:"!w-280px",clearable:"",placeholder:"\u8BF7\u9009\u62E9\u552E\u540E\u7C7B\u578B"},{default:t(()=>[(s(!0),c(f,null,w(a(h)(a(m).TRADE_AFTER_SALE_TYPE),e=>(s(),_(V,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(p,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime"},{default:t(()=>[l(z,{modelValue:a(r).createTime,"onUpdate:modelValue":u[6]||(u[6]=e=>a(r).createTime=e),"default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-280px","end-placeholder":"\u81EA\u5B9A\u4E49\u65F6\u95F4","start-placeholder":"\u81EA\u5B9A\u4E49\u65F6\u95F4",type:"daterange","value-format":"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue","default-time"])]),_:1}),l(p,null,{default:t(()=>[l(g,{onClick:v},{default:t(()=>[l(L,{class:"mr-5px",icon:"ep:search"}),T(" \u641C\u7D22 ")]),_:1}),l(g,{onClick:H},{default:t(()=>[l(L,{class:"mr-5px",icon:"ep:refresh"}),T(" \u91CD\u7F6E ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),l(Y,null,{default:t(()=>[l(q,{modelValue:a(r).status,"onUpdate:modelValue":u[7]||(u[7]=e=>a(r).status=e),onTabClick:I},{default:t(()=>[(s(!0),c(f,null,w(a(C),e=>(s(),_(M,{key:e.label,label:e.label,name:e.value},null,8,["label","name"]))),128))]),_:1},8,["modelValue"]),ee((s(),_(J,{data:a(R)},{default:t(()=>[l(n,{align:"center",label:"\u9000\u6B3E\u7F16\u53F7","min-width":"200",prop:"no"}),l(n,{align:"center",label:"\u8BA2\u5355\u7F16\u53F7","min-width":"200",prop:"orderNo"},{default:t(({row:e})=>[l(g,{link:"",type:"primary",onClick:i=>{return d=e.orderId,void U({name:"TradeOrderDetail",params:{id:d}});var d}},{default:t(()=>[T(b(e.orderNo),1)]),_:2},1032,["onClick"])]),_:1}),l(n,{label:"\u5546\u54C1\u4FE1\u606F","min-width":"600",prop:"spuName"},{default:t(({row:e})=>[x("div",xe,[l(W,{src:e.picUrl,class:"mr-10px h-30px w-30px",onClick:i=>{return d=e.picUrl,void te({urlList:[d]});var d}},null,8,["src","onClick"]),x("span",Ee,b(e.spuName),1),(s(!0),c(f,null,w(e.properties,i=>(s(),_(G,{key:i.propertyId,class:"mr-10px"},{default:t(()=>[T(b(i.propertyName)+": "+b(i.valueName),1)]),_:2},1024))),128))])]),_:1}),l(n,{align:"center",label:"\u8BA2\u5355\u91D1\u989D","min-width":"120",prop:"refundPrice"},{default:t(e=>[x("span",null,b(a(le)(e.row.refundPrice))+" \u5143",1)]),_:1}),l(n,{align:"center",label:"\u4E70\u5BB6",prop:"user.nickname"}),l(n,{align:"center",label:"\u7533\u8BF7\u65F6\u95F4",prop:"createTime",width:"180"},{default:t(e=>[x("span",null,b(a(he)(e.row.createTime)),1)]),_:1}),l(n,{align:"center",label:"\u552E\u540E\u72B6\u6001",width:"100"},{default:t(e=>[l(P,{type:a(m).TRADE_AFTER_SALE_STATUS,value:e.row.status},null,8,["type","value"])]),_:1}),l(n,{align:"center",label:"\u552E\u540E\u65B9\u5F0F"},{default:t(e=>[l(P,{type:a(m).TRADE_AFTER_SALE_WAY,value:e.row.way},null,8,["type","value"])]),_:1}),l(n,{align:"center",fixed:"right",label:"\u64CD\u4F5C",width:"160"},{default:t(({row:e})=>[l(g,{link:"",type:"primary",onClick:i=>{return d=e.id,void U({name:"TradeAfterSaleDetail",params:{id:d}});var d}},{default:t(()=>[T("\u5904\u7406\u9000\u6B3E")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[j,a(E)]]),l(O,{limit:a(r).pageSize,"onUpdate:limit":u[8]||(u[8]=e=>a(r).pageSize=e),page:a(r).pageNo,"onUpdate:page":u[9]||(u[9]=e=>a(r).pageNo=e),total:a(D),onPagination:A},null,8,["limit","page","total"])]),_:1})],64)}}});export{Ne as default};