import{d as M,u as D,r as i,bA as V,n as z,o as d,c as y,f as e,w as r,a as t,F as h,p as B,q as S,y as q,x as C,t as x,D as u,g as G,A as J,B as K,C as P,J as j,af as Y,K as H,L as Q,M as W}from"./index-CIfmhqRC.js";import{_ as X}from"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import{_ as Z}from"./DictTag.vue_vue_type_script_lang-CTpVFm77.js";import{_ as $}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{e as ee}from"./index-BZptzjxi.js";import{d as m}from"./formatTime-DFFN_xWx.js";import{F as le}from"./common-BQQO87UM.js";const ae=G("div",{class:"pb-5 text-xl"},"\u5206\u914D\u7ED9\u6211\u7684\u5BA2\u6237",-1),te=M({name:"CrmCustomerFollowList",__name:"CustomerFollowList",setup(re){const{push:N}=D(),c=i(!0),w=i(0),g=i([]),o=i({pageNo:1,pageSize:10,sceneType:1,followUpStatus:!1}),U=i(),s=async()=>{c.value=!0;try{const f=await ee(o.value);g.value=f.list,w.value=f.total}finally{c.value=!1}},R=()=>{o.value.pageNo=1,s()};return V(async()=>{await s()}),z(()=>{s()}),(f,p)=>{const T=J,L=K,k=P,E=j,_=$,O=Y,a=H,n=Z,A=Q,F=X,I=W;return d(),y(h,null,[e(_,null,{default:r(()=>[ae,e(E,{ref_key:"queryFormRef",ref:U,inline:!0,model:t(o),class:"-mb-15px","label-width":"68px"},{default:r(()=>[e(k,{label:"\u72B6\u6001",prop:"followUpStatus"},{default:r(()=>[e(L,{modelValue:t(o).followUpStatus,"onUpdate:modelValue":p[0]||(p[0]=l=>t(o).followUpStatus=l),class:"!w-240px",placeholder:"\u72B6\u6001",onChange:R},{default:r(()=>[(d(!0),y(h,null,B(t(le),(l,b)=>(d(),S(T,{label:l.label,value:l.value,key:b},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1}),e(_,null,{default:r(()=>[q((d(),S(A,{data:t(g),"show-overflow-tooltip":!0,stripe:!0},{default:r(()=>[e(a,{align:"center",label:"\u5BA2\u6237\u540D\u79F0",fixed:"left",prop:"name",width:"160"},{default:r(l=>[e(O,{underline:!1,type:"primary",onClick:b=>{return v=l.row.id,void N({name:"CrmCustomerDetail",params:{id:v}});var v}},{default:r(()=>[C(x(l.row.name),1)]),_:2},1032,["onClick"])]),_:1}),e(a,{align:"center",label:"\u5BA2\u6237\u6765\u6E90",prop:"source",width:"100"},{default:r(l=>[e(n,{type:t(u).CRM_CUSTOMER_SOURCE,value:l.row.source},null,8,["type","value"])]),_:1}),e(a,{label:"\u624B\u673A",align:"center",prop:"mobile",width:"120"}),e(a,{label:"\u7535\u8BDD",align:"center",prop:"telephone",width:"130"}),e(a,{label:"\u90AE\u7BB1",align:"center",prop:"email",width:"180"}),e(a,{align:"center",label:"\u5BA2\u6237\u7EA7\u522B",prop:"level",width:"135"},{default:r(l=>[e(n,{type:t(u).CRM_CUSTOMER_LEVEL,value:l.row.level},null,8,["type","value"])]),_:1}),e(a,{align:"center",label:"\u5BA2\u6237\u884C\u4E1A",prop:"industryId",width:"100"},{default:r(l=>[e(n,{type:t(u).CRM_CUSTOMER_INDUSTRY,value:l.row.industryId},null,8,["type","value"])]),_:1}),e(a,{formatter:t(m),align:"center",label:"\u4E0B\u6B21\u8054\u7CFB\u65F6\u95F4",prop:"contactNextTime",width:"180px"},null,8,["formatter"]),e(a,{align:"center",label:"\u5907\u6CE8",prop:"remark",width:"200"}),e(a,{align:"center",label:"\u9501\u5B9A\u72B6\u6001",prop:"lockStatus"},{default:r(l=>[e(n,{type:t(u).INFRA_BOOLEAN_STRING,value:l.row.lockStatus},null,8,["type","value"])]),_:1}),e(a,{align:"center",label:"\u6210\u4EA4\u72B6\u6001",prop:"dealStatus"},{default:r(l=>[e(n,{type:t(u).INFRA_BOOLEAN_STRING,value:l.row.dealStatus},null,8,["type","value"])]),_:1}),e(a,{formatter:t(m),align:"center",label:"\u6700\u540E\u8DDF\u8FDB\u65F6\u95F4",prop:"contactLastTime",width:"180px"},null,8,["formatter"]),e(a,{align:"center",label:"\u6700\u540E\u8DDF\u8FDB\u8BB0\u5F55",prop:"contactLastContent",width:"200"}),e(a,{label:"\u5730\u5740",align:"center",prop:"detailAddress",width:"180"}),e(a,{align:"center",label:"\u8DDD\u79BB\u8FDB\u5165\u516C\u6D77\u5929\u6570",prop:"poolDay",width:"140"},{default:r(l=>[C(x(l.row.poolDay)+" \u5929",1)]),_:1}),e(a,{align:"center",label:"\u8D1F\u8D23\u4EBA",prop:"ownerUserName",width:"100px"}),e(a,{align:"center",label:"\u6240\u5C5E\u90E8\u95E8",prop:"ownerUserDeptName",width:"100px"}),e(a,{formatter:t(m),align:"center",label:"\u66F4\u65B0\u65F6\u95F4",prop:"updateTime",width:"180px"},null,8,["formatter"]),e(a,{formatter:t(m),align:"center",label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime",width:"180px"},null,8,["formatter"]),e(a,{align:"center",label:"\u521B\u5EFA\u4EBA",prop:"creatorName",width:"100px"})]),_:1},8,["data"])),[[I,t(c)]]),e(F,{limit:t(o).pageSize,"onUpdate:limit":p[1]||(p[1]=l=>t(o).pageSize=l),page:t(o).pageNo,"onUpdate:page":p[2]||(p[2]=l=>t(o).pageNo=l),total:t(w),onPagination:s},null,8,["limit","page","total"])]),_:1})],64)}}});export{te as _};
