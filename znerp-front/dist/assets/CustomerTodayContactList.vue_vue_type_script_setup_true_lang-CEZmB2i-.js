import{d as D,u as F,r as i,n as z,o as p,c as g,f as e,w as o,a as l,F as _,p as R,q as b,y as B,x as U,t as L,D as s,g as q,A as G,B as j,C as J,J as K,af as P,K as W,L as Y,M as H}from"./index-CIfmhqRC.js";import{_ as Q}from"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import{_ as X}from"./DictTag.vue_vue_type_script_lang-CTpVFm77.js";import{_ as Z}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{e as $}from"./index-BZptzjxi.js";import{d as c}from"./formatTime-DFFN_xWx.js";import{a as ee,S as ae}from"./common-BQQO87UM.js";const le=q("div",{class:"pb-5 text-xl"}," \u4ECA\u65E5\u9700\u8054\u7CFB\u5BA2\u6237 ",-1),te=D({name:"CrmCustomerTodayContactList",__name:"CustomerTodayContactList",setup(oe){const{push:k}=F(),m=i(!0),y=i(0),v=i([]),r=i({pageNo:1,pageSize:10,contactStatus:1,sceneType:1,pool:null}),E=i(),f=async()=>{m.value=!0;try{const w=await $(r.value);v.value=w.list,y.value=w.total}finally{m.value=!1}},h=()=>{r.value.pageNo=1,f()};return z(()=>{f()}),(w,n)=>{const C=G,S=j,x=J,O=K,T=Z,I=P,t=W,u=X,M=Y,V=Q,A=H;return p(),g(_,null,[e(T,null,{default:o(()=>[le,e(O,{ref_key:"queryFormRef",ref:E,inline:!0,model:l(r),class:"-mb-15px","label-width":"68px"},{default:o(()=>[e(x,{label:"\u72B6\u6001",prop:"contactStatus"},{default:o(()=>[e(S,{modelValue:l(r).contactStatus,"onUpdate:modelValue":n[0]||(n[0]=a=>l(r).contactStatus=a),class:"!w-240px",placeholder:"\u72B6\u6001",onChange:h},{default:o(()=>[(p(!0),g(_,null,R(l(ee),(a,d)=>(p(),b(C,{label:a.label,value:a.value,key:d},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(x,{label:"\u5F52\u5C5E",prop:"sceneType"},{default:o(()=>[e(S,{modelValue:l(r).sceneType,"onUpdate:modelValue":n[1]||(n[1]=a=>l(r).sceneType=a),class:"!w-240px",placeholder:"\u5F52\u5C5E",onChange:h},{default:o(()=>[(p(!0),g(_,null,R(l(ae),(a,d)=>(p(),b(C,{label:a.label,value:a.value,key:d},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1}),e(T,null,{default:o(()=>[B((p(),b(M,{data:l(v),"show-overflow-tooltip":!0,stripe:!0},{default:o(()=>[e(t,{align:"center",label:"\u5BA2\u6237\u540D\u79F0",fixed:"left",prop:"name",width:"160"},{default:o(a=>[e(I,{underline:!1,type:"primary",onClick:d=>{return N=a.row.id,void k({name:"CrmCustomerDetail",params:{id:N}});var N}},{default:o(()=>[U(L(a.row.name),1)]),_:2},1032,["onClick"])]),_:1}),e(t,{align:"center",label:"\u5BA2\u6237\u6765\u6E90",prop:"source",width:"100"},{default:o(a=>[e(u,{type:l(s).CRM_CUSTOMER_SOURCE,value:a.row.source},null,8,["type","value"])]),_:1}),e(t,{label:"\u624B\u673A",align:"center",prop:"mobile",width:"120"}),e(t,{label:"\u7535\u8BDD",align:"center",prop:"telephone",width:"130"}),e(t,{label:"\u90AE\u7BB1",align:"center",prop:"email",width:"180"}),e(t,{align:"center",label:"\u5BA2\u6237\u7EA7\u522B",prop:"level",width:"135"},{default:o(a=>[e(u,{type:l(s).CRM_CUSTOMER_LEVEL,value:a.row.level},null,8,["type","value"])]),_:1}),e(t,{align:"center",label:"\u5BA2\u6237\u884C\u4E1A",prop:"industryId",width:"100"},{default:o(a=>[e(u,{type:l(s).CRM_CUSTOMER_INDUSTRY,value:a.row.industryId},null,8,["type","value"])]),_:1}),e(t,{formatter:l(c),align:"center",label:"\u4E0B\u6B21\u8054\u7CFB\u65F6\u95F4",prop:"contactNextTime",width:"180px"},null,8,["formatter"]),e(t,{align:"center",label:"\u5907\u6CE8",prop:"remark",width:"200"}),e(t,{align:"center",label:"\u9501\u5B9A\u72B6\u6001",prop:"lockStatus"},{default:o(a=>[e(u,{type:l(s).INFRA_BOOLEAN_STRING,value:a.row.lockStatus},null,8,["type","value"])]),_:1}),e(t,{align:"center",label:"\u6210\u4EA4\u72B6\u6001",prop:"dealStatus"},{default:o(a=>[e(u,{type:l(s).INFRA_BOOLEAN_STRING,value:a.row.dealStatus},null,8,["type","value"])]),_:1}),e(t,{formatter:l(c),align:"center",label:"\u6700\u540E\u8DDF\u8FDB\u65F6\u95F4",prop:"contactLastTime",width:"180px"},null,8,["formatter"]),e(t,{align:"center",label:"\u6700\u540E\u8DDF\u8FDB\u8BB0\u5F55",prop:"contactLastContent",width:"200"}),e(t,{label:"\u5730\u5740",align:"center",prop:"detailAddress",width:"180"}),e(t,{align:"center",label:"\u8DDD\u79BB\u8FDB\u5165\u516C\u6D77\u5929\u6570",prop:"poolDay",width:"140"},{default:o(a=>[U(L(a.row.poolDay)+" \u5929",1)]),_:1}),e(t,{align:"center",label:"\u8D1F\u8D23\u4EBA",prop:"ownerUserName",width:"100px"}),e(t,{align:"center",label:"\u6240\u5C5E\u90E8\u95E8",prop:"ownerUserDeptName",width:"100px"}),e(t,{formatter:l(c),align:"center",label:"\u66F4\u65B0\u65F6\u95F4",prop:"updateTime",width:"180px"},null,8,["formatter"]),e(t,{formatter:l(c),align:"center",label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime",width:"180px"},null,8,["formatter"]),e(t,{align:"center",label:"\u521B\u5EFA\u4EBA",prop:"creatorName",width:"100px"})]),_:1},8,["data"])),[[A,l(m)]]),e(V,{limit:l(r).pageSize,"onUpdate:limit":n[2]||(n[2]=a=>l(r).pageSize=a),page:l(r).pageNo,"onUpdate:page":n[3]||(n[3]=a=>l(r).pageNo=a),total:l(y),onPagination:f},null,8,["limit","page","total"])]),_:1})],64)}}});export{te as _};