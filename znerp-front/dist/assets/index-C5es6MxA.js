import{d as q,z as I,r as s,e as D,n as J,O as L,o as n,c as T,f as e,w as l,a as o,P as Q,F as U,p as j,Q as E,D as b,q as u,x as d,y,U as X,C as Y,A as Z,B as $,H as ee,I as ae,J as le,K as oe,L as te,M as ie}from"./index-CIfmhqRC.js";import{_ as re}from"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import{_ as se}from"./DictTag.vue_vue_type_script_lang-CTpVFm77.js";import{_ as ne}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{d as pe}from"./formatTime-DFFN_xWx.js";import{_ as de}from"./RoleForm.vue_vue_type_script_setup_true_lang-D1kfMALi.js";import"./index-CrBeVHKs.js";import"./color-BN7ZL7BD.js";import"./el-card-DyMugU68.js";import"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import"./constants-A8BI3pz7.js";import"./index-CSBlvrKl.js";const ue=q({__name:"index",setup(ce){const B=I(),_=s(!0),h=s(0),k=s([]),i=D({pageNo:1,pageSize:10,name:"",status:void 0}),v=s();s(!1);const c=async()=>{_.value=!0;try{k.value=[{id:101,name:"\u523A\u7EE3\u536B\u8863",detail:"\u8BA2\u5355\u5546\u54C1\u4E3A\xA0\u6307\u5B9A\u5546\u54C1SKU\xA0\uFF08Hoodie-Beige-S,Hoodie-White-S,Hoodie-Black-S,Hoodie-Gray-S,Hoodie-Mocha-S,Hoodie-Beige-M,Hoodie-White-M,Hoodie-Black-M,Hoodie-Gray-M",sort:0,status:0,action:1,operator:"\u5F20\u4E09",createTime:1609837428e3},{id:1,name:"\u523A\u7EE3\u536B\u8863",detail:"\u8BA2\u5355\u5546\u54C1\u4E3A\xA0\u6307\u5B9A\u5546\u54C1SKU\xA0\uFF08Hoodie-Beige-S,Hoodie-White-S,Hoodie-Black-S,Hoodie-Gray-S,Hoodie-Mocha-S,Hoodie-Beige-M,Hoodie-White-M,Hoodie-Black-M,Hoodie-Gray-M",sort:1,status:1,action:2,operator:"\u5F20\u4E09",createTime:1609837428e3}],h.value=2}finally{_.value=!1}},g=()=>{i.pageNo=1,c()},N=()=>{v.value.resetFields(),g()},V=s([]),O=m=>{V.value=m},M=s(),w=(m,t)=>{M.value.open(m,t)};return J(()=>{c()}),(m,t)=>{const A=X,S=Y,z=Z,G=$,f=ee,p=ae,K=le,C=ne,r=oe,x=se,W=te,F=re,H=L("hasPermi"),P=ie;return n(),T(U,null,[e(C,null,{default:l(()=>[e(K,{ref_key:"queryFormRef",ref:v,inline:!0,model:o(i),class:"-mb-15px","label-width":"68px"},{default:l(()=>[e(S,{label:"\u89C4\u5219\u540D\u79F0",prop:"name"},{default:l(()=>[e(A,{modelValue:o(i).name,"onUpdate:modelValue":t[0]||(t[0]=a=>o(i).name=a),class:"!w-240px",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u89C4\u5219\u540D\u79F0",onKeyup:Q(g,["enter"])},null,8,["modelValue"])]),_:1}),e(S,{label:"\u72B6\u6001",prop:"status"},{default:l(()=>[e(G,{modelValue:o(i).status,"onUpdate:modelValue":t[1]||(t[1]=a=>o(i).status=a),class:"!w-240px",clearable:"",placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001"},{default:l(()=>[(n(!0),T(U,null,j(o(E)(o(b).COMMON_STATUS),a=>(n(),u(z,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(S,null,{default:l(()=>[e(p,{onClick:g},{default:l(()=>[e(f,{class:"mr-5px",icon:"ep:search"}),d(" \u641C\u7D22 ")]),_:1}),e(p,{onClick:N},{default:l(()=>[e(f,{class:"mr-5px",icon:"ep:refresh"}),d(" \u91CD\u7F6E ")]),_:1}),y((n(),u(p,{plain:"",type:"primary",onClick:t[2]||(t[2]=a=>w("create"))},{default:l(()=>[e(f,{class:"mr-5px",icon:"ep:plus"}),d(" \u65B0\u589E ")]),_:1})),[[H,["system:role:create"]]]),e(p,{plain:"",type:"danger"},{default:l(()=>[e(f,{class:"mr-5px",icon:"ep:delete"}),d(" \u5220\u9664 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(C,null,{default:l(()=>[y((n(),u(W,{data:o(k),stripe:!0,onSelectionChange:O},{default:l(()=>[e(r,{width:"30",label:"\u9009\u62E9",type:"selection"}),e(r,{align:"center",label:"\u4F18\u5148\u7EA7",prop:"sort"}),e(r,{align:"center",label:"\u89C4\u5219\u540D\u79F0",prop:"name"}),e(r,{align:"left",label:"\u89C4\u5219\u5185\u5BB9","min-width":"200",prop:"detail"}),e(r,{label:"\u6267\u884C\u52A8\u4F5C",align:"center",prop:"action"},{default:l(a=>[e(x,{type:o(b).ACTION_STATUS,value:a.row.action},null,8,["type","value"])]),_:1}),e(r,{align:"center",label:"\u72B6\u6001",prop:"status"},{default:l(a=>[e(x,{type:o(b).COMMON_STATUS,value:a.row.status},null,8,["type","value"])]),_:1}),e(r,{align:"center",label:"\u64CD\u4F5C\u4EBA",prop:"operator"}),e(r,{formatter:o(pe),align:"center",label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime",width:"180"},null,8,["formatter"]),e(r,{width:160,align:"center",label:"\u64CD\u4F5C"},{default:l(a=>[y((n(),u(p,{link:"",type:"primary",onClick:R=>w("update",a.row.id)},{default:l(()=>[d(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[H,["system:role:update"]]]),y((n(),u(p,{link:"",type:"danger",onClick:R=>(async()=>{try{await B.delConfirm()}catch{}})(a.row.id)},{default:l(()=>[d(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[H,["system:role:delete"]]])]),_:1})]),_:1},8,["data"])),[[P,o(_)]]),e(F,{limit:o(i).pageSize,"onUpdate:limit":t[3]||(t[3]=a=>o(i).pageSize=a),page:o(i).pageNo,"onUpdate:page":t[4]||(t[4]=a=>o(i).pageNo=a),total:o(h),onPagination:c},null,8,["limit","page","total"])]),_:1}),e(de,{ref_key:"formRef",ref:M,onSuccess:c},null,512)],64)}}});export{ue as default};