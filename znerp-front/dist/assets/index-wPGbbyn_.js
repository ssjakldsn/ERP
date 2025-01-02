import{d as H,z as J,r as d,u as j,ar as W,n as X,O as Z,o as n,c as _,f as e,w as t,a,P as L,F as b,p as S,Q as V,D as p,q as m,x as y,y as z,t as $,U as ee,C as le,A as ae,B as te,H as oe,I as re,J as ue,af as ne,K as pe,L as ie,M as de}from"./index-CIfmhqRC.js";import{_ as se}from"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import{_ as me}from"./DictTag.vue_vue_type_script_lang-CTpVFm77.js";import{_ as ce}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{_ as fe}from"./index-2RHHZ-Zv.js";import{d as w}from"./formatTime-DFFN_xWx.js";import{d as ve}from"./download-D5Lb_h0f.js";import{e as _e,o as be}from"./index-BZptzjxi.js";import"./index-CrBeVHKs.js";import"./color-BN7ZL7BD.js";import"./el-card-DyMugU68.js";const ye=H({name:"CrmCustomerPool",__name:"index",setup(we){const P=J(),g=d(!0),T=d(0),E=d([]),o=d({pageNo:1,pageSize:10,name:"",mobile:"",industryId:void 0,level:void 0,source:void 0,sceneType:void 0,pool:!0}),M=d(),h=d(!1),c=async()=>{g.value=!0;try{const s=await _e(o.value);E.value=s.list,T.value=s.total}finally{g.value=!1}},f=()=>{o.value.pageNo=1,c()},{currentRoute:D,push:F}=j(),A=async()=>{try{await P.exportConfirm(),h.value=!0;const s=await be(o.value);ve.excel(s,"\u5BA2\u6237\u516C\u6D77.xls")}catch{}finally{h.value=!1}};return W(()=>D.value,()=>{c()}),X(()=>{c()}),(s,r)=>{const I=fe,N=ee,i=le,C=ae,x=te,R=oe,U=re,K=ue,O=ce,q=ne,u=pe,v=me,B=ie,Q=se,Y=Z("hasPermi"),G=de;return n(),_(b,null,[e(I,{title:"\u3010\u5BA2\u6237\u3011\u5BA2\u6237\u7BA1\u7406\u3001\u516C\u6D77\u5BA2\u6237",url:"https://doc.iocoder.cn/crm/customer/"}),e(I,{title:"\u3010\u901A\u7528\u3011\u6570\u636E\u6743\u9650",url:"https://doc.iocoder.cn/crm/permission/"}),e(O,null,{default:t(()=>[e(K,{ref_key:"queryFormRef",ref:M,inline:!0,model:a(o),class:"-mb-15px","label-width":"68px"},{default:t(()=>[e(i,{label:"\u5BA2\u6237\u540D\u79F0",prop:"name"},{default:t(()=>[e(N,{modelValue:a(o).name,"onUpdate:modelValue":r[0]||(r[0]=l=>a(o).name=l),class:"!w-240px",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u5BA2\u6237\u540D\u79F0",onKeyup:L(f,["enter"])},null,8,["modelValue"])]),_:1}),e(i,{label:"\u624B\u673A",prop:"mobile"},{default:t(()=>[e(N,{modelValue:a(o).mobile,"onUpdate:modelValue":r[1]||(r[1]=l=>a(o).mobile=l),class:"!w-240px",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A",onKeyup:L(f,["enter"])},null,8,["modelValue"])]),_:1}),e(i,{label:"\u6240\u5C5E\u884C\u4E1A",prop:"industryId"},{default:t(()=>[e(x,{modelValue:a(o).industryId,"onUpdate:modelValue":r[2]||(r[2]=l=>a(o).industryId=l),class:"!w-240px",clearable:"",placeholder:"\u8BF7\u9009\u62E9\u6240\u5C5E\u884C\u4E1A"},{default:t(()=>[(n(!0),_(b,null,S(a(V)(a(p).CRM_CUSTOMER_INDUSTRY),l=>(n(),m(C,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"\u5BA2\u6237\u7EA7\u522B",prop:"level"},{default:t(()=>[e(x,{modelValue:a(o).level,"onUpdate:modelValue":r[3]||(r[3]=l=>a(o).level=l),class:"!w-240px",clearable:"",placeholder:"\u8BF7\u9009\u62E9\u5BA2\u6237\u7EA7\u522B"},{default:t(()=>[(n(!0),_(b,null,S(a(V)(a(p).CRM_CUSTOMER_LEVEL),l=>(n(),m(C,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"\u5BA2\u6237\u6765\u6E90",prop:"source"},{default:t(()=>[e(x,{modelValue:a(o).source,"onUpdate:modelValue":r[4]||(r[4]=l=>a(o).source=l),class:"!w-240px",clearable:"",placeholder:"\u8BF7\u9009\u62E9\u5BA2\u6237\u6765\u6E90"},{default:t(()=>[(n(!0),_(b,null,S(a(V)(a(p).CRM_CUSTOMER_SOURCE),l=>(n(),m(C,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(i,null,{default:t(()=>[e(U,{onClick:f},{default:t(()=>[e(R,{class:"mr-5px",icon:"ep:search"}),y(" \u641C\u7D22 ")]),_:1}),e(U,{onClick:r[5]||(r[5]=l=>(M.value.resetFields(),o.value={pageNo:1,pageSize:10,name:"",mobile:"",industryId:void 0,level:void 0,source:void 0,sceneType:void 0,pool:!0},void f()))},{default:t(()=>[e(R,{class:"mr-5px",icon:"ep:refresh"}),y(" \u91CD\u7F6E ")]),_:1}),z((n(),m(U,{loading:a(h),plain:"",type:"success",onClick:A},{default:t(()=>[e(R,{class:"mr-5px",icon:"ep:download"}),y(" \u5BFC\u51FA ")]),_:1},8,["loading"])),[[Y,["crm:customer:export"]]])]),_:1})]),_:1},8,["model"])]),_:1}),e(O,null,{default:t(()=>[z((n(),m(B,{data:a(E),"show-overflow-tooltip":!0,stripe:!0},{default:t(()=>[e(u,{align:"center",label:"\u5BA2\u6237\u540D\u79F0",fixed:"left",prop:"name",width:"160"},{default:t(l=>[e(q,{underline:!1,type:"primary",onClick:ge=>{return k=l.row.id,void F({name:"CrmCustomerDetail",params:{id:k}});var k}},{default:t(()=>[y($(l.row.name),1)]),_:2},1032,["onClick"])]),_:1}),e(u,{align:"center",label:"\u5BA2\u6237\u6765\u6E90",prop:"source",width:"100"},{default:t(l=>[e(v,{type:a(p).CRM_CUSTOMER_SOURCE,value:l.row.source},null,8,["type","value"])]),_:1}),e(u,{label:"\u624B\u673A",align:"center",prop:"mobile",width:"120"}),e(u,{label:"\u7535\u8BDD",align:"center",prop:"telephone",width:"130"}),e(u,{label:"\u90AE\u7BB1",align:"center",prop:"email",width:"180"}),e(u,{align:"center",label:"\u5BA2\u6237\u7EA7\u522B",prop:"level",width:"135"},{default:t(l=>[e(v,{type:a(p).CRM_CUSTOMER_LEVEL,value:l.row.level},null,8,["type","value"])]),_:1}),e(u,{align:"center",label:"\u5BA2\u6237\u884C\u4E1A",prop:"industryId",width:"100"},{default:t(l=>[e(v,{type:a(p).CRM_CUSTOMER_INDUSTRY,value:l.row.industryId},null,8,["type","value"])]),_:1}),e(u,{formatter:a(w),align:"center",label:"\u4E0B\u6B21\u8054\u7CFB\u65F6\u95F4",prop:"contactNextTime",width:"180px"},null,8,["formatter"]),e(u,{align:"center",label:"\u5907\u6CE8",prop:"remark",width:"200"}),e(u,{align:"center",label:"\u6210\u4EA4\u72B6\u6001",prop:"dealStatus"},{default:t(l=>[e(v,{type:a(p).INFRA_BOOLEAN_STRING,value:l.row.dealStatus},null,8,["type","value"])]),_:1}),e(u,{formatter:a(w),align:"center",label:"\u6700\u540E\u8DDF\u8FDB\u65F6\u95F4",prop:"contactLastTime",width:"180px"},null,8,["formatter"]),e(u,{align:"center",label:"\u6700\u540E\u8DDF\u8FDB\u8BB0\u5F55",prop:"contactLastContent",width:"200"}),e(u,{formatter:a(w),align:"center",label:"\u66F4\u65B0\u65F6\u95F4",prop:"updateTime",width:"180px"},null,8,["formatter"]),e(u,{formatter:a(w),align:"center",label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime",width:"180px"},null,8,["formatter"]),e(u,{align:"center",label:"\u521B\u5EFA\u4EBA",prop:"creatorName",width:"100px"})]),_:1},8,["data"])),[[G,a(g)]]),e(Q,{limit:a(o).pageSize,"onUpdate:limit":r[6]||(r[6]=l=>a(o).pageSize=l),page:a(o).pageNo,"onUpdate:page":r[7]||(r[7]=l=>a(o).pageNo=l),total:a(T),onPagination:c},null,8,["limit","page","total"])]),_:1})],64)}}});export{ye as default};
