import{d as P,u as Y,r as i,e as q,n as z,o as T,c as B,f as e,w as r,a,P as F,x as s,y as H,q as K,D as A,t as G,F as J,U as L,C as R,G as j,H as E,I as O,J as W,K as $,L as Q,M as X}from"./index-CIfmhqRC.js";import{_ as Z}from"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import{_ as ee}from"./DictTag.vue_vue_type_script_lang-CTpVFm77.js";import{_ as ae}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{_ as le}from"./index-2RHHZ-Zv.js";import{d as g,a as te}from"./formatTime-DFFN_xWx.js";import{i as re}from"./index-C9Urw_yh.js";import"./index-CrBeVHKs.js";import"./color-BN7ZL7BD.js";import"./el-card-DyMugU68.js";const ne=P({name:"BpmManagerTask",__name:"index",setup(oe){const{push:x}=Y(),p=i(!0),w=i(0),h=i([]),n=q({pageNo:1,pageSize:10,name:"",createTime:[]}),_=i(),m=async()=>{p.value=!0;try{const u=await re(n);h.value=u.list,w.value=u.total}finally{p.value=!1}},d=()=>{n.pageNo=1,m()},k=()=>{_.value.resetFields(),d()};return z(()=>{m()}),(u,o)=>{const U=le,I=L,c=R,M=j,b=E,f=O,V=W,y=ae,l=$,D=ee,S=Q,C=Z,N=X;return T(),B(J,null,[e(U,{title:"\u5DE5\u4F5C\u6D41\u624B\u518C",url:"https://doc.iocoder.cn/bpm/"}),e(y,null,{default:r(()=>[e(V,{ref_key:"queryFormRef",ref:_,inline:!0,model:a(n),class:"-mb-15px","label-width":"68px"},{default:r(()=>[e(c,{label:"\u4EFB\u52A1\u540D\u79F0",prop:"name"},{default:r(()=>[e(I,{modelValue:a(n).name,"onUpdate:modelValue":o[0]||(o[0]=t=>a(n).name=t),class:"!w-240px",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u4EFB\u52A1\u540D\u79F0",onKeyup:F(d,["enter"])},null,8,["modelValue"])]),_:1}),e(c,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime"},{default:r(()=>[e(M,{modelValue:a(n).createTime,"onUpdate:modelValue":o[1]||(o[1]=t=>a(n).createTime=t),"default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-240px","end-placeholder":"\u7ED3\u675F\u65E5\u671F","start-placeholder":"\u5F00\u59CB\u65E5\u671F",type:"daterange","value-format":"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue","default-time"])]),_:1}),e(c,null,{default:r(()=>[e(f,{onClick:d},{default:r(()=>[e(b,{class:"mr-5px",icon:"ep:search"}),s(" \u641C\u7D22 ")]),_:1}),e(f,{onClick:k},{default:r(()=>[e(b,{class:"mr-5px",icon:"ep:refresh"}),s(" \u91CD\u7F6E ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(y,null,{default:r(()=>[H((T(),K(S,{data:a(h)},{default:r(()=>[e(l,{align:"center",label:"\u6D41\u7A0B",prop:"processInstance.name",width:"180"}),e(l,{align:"center",label:"\u53D1\u8D77\u4EBA",prop:"processInstance.startUser.nickname",width:"100"}),e(l,{formatter:a(g),align:"center",label:"\u53D1\u8D77\u65F6\u95F4",prop:"createTime",width:"180"},null,8,["formatter"]),e(l,{align:"center",label:"\u5F53\u524D\u4EFB\u52A1",prop:"name",width:"180"}),e(l,{formatter:a(g),align:"center",label:"\u4EFB\u52A1\u5F00\u59CB\u65F6\u95F4",prop:"createTime",width:"180"},null,8,["formatter"]),e(l,{formatter:a(g),align:"center",label:"\u4EFB\u52A1\u7ED3\u675F\u65F6\u95F4",prop:"endTime",width:"180"},null,8,["formatter"]),e(l,{align:"center",label:"\u5BA1\u6279\u4EBA",prop:"assigneeUser.nickname",width:"100"}),e(l,{align:"center",label:"\u5BA1\u6279\u72B6\u6001",prop:"status",width:"120"},{default:r(t=>[e(D,{type:a(A).BPM_TASK_STATUS,value:t.row.status},null,8,["type","value"])]),_:1}),e(l,{align:"center",label:"\u5BA1\u6279\u5EFA\u8BAE",prop:"reason","min-width":"180"}),e(l,{align:"center",label:"\u8017\u65F6",prop:"durationInMillis",width:"160"},{default:r(t=>[s(G(a(te)(t.row.durationInMillis)),1)]),_:1}),e(l,{align:"center",label:"\u6D41\u7A0B\u7F16\u53F7",prop:"id","show-overflow-tooltip":!0}),e(l,{align:"center",label:"\u4EFB\u52A1\u7F16\u53F7",prop:"id","show-overflow-tooltip":!0}),e(l,{align:"center",label:"\u64CD\u4F5C",fixed:"right",width:"80"},{default:r(t=>[e(f,{link:"",type:"primary",onClick:ie=>{return v=t.row,void x({name:"BpmProcessInstanceDetail",query:{id:v.processInstance.id}});var v}},{default:r(()=>[s("\u5386\u53F2")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[N,a(p)]]),e(C,{limit:a(n).pageSize,"onUpdate:limit":o[2]||(o[2]=t=>a(n).pageSize=t),page:a(n).pageNo,"onUpdate:page":o[3]||(o[3]=t=>a(n).pageNo=t),total:a(w),onPagination:m},null,8,["limit","page","total"])]),_:1})],64)}}});export{ne as default};