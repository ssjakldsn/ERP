import{d as Z,z as H,h as I,r as c,e as J,n as K,o as x,c as M,f as e,w as l,a as s,x as o,y as j,q as B,t as f,F as D,U as E,C as W,H as $,I as G,J as O,K as Q,av as T,L as X,M as Y}from"./index-CIfmhqRC.js";import{_ as ee}from"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import{_ as ae}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{Z as F}from"./index-H3f_2XHj.js";import{_ as le}from"./SenderForm.vue_vue_type_script_setup_true_lang-QeInFxPD.js";import"./index-CrBeVHKs.js";import"./el-card-DyMugU68.js";import"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";const te=Z({__name:"index",setup(se){const _=H(),{t:S}=I(),u=c(!0),g=c(0),y=c([]),r=J({pageNo:1,pageSize:10,senderFirstName:""}),i=async()=>{u.value=!0;try{const p=await F.senderAddrPage(r);y.value=p.list,g.value=p.total}finally{u.value=!1}},w=()=>{r.pageNo=1,i()},b=c(),v=()=>{b.value.resetFields(),w()},k=c(),C=(p,t)=>{k.value.open(p,t)};return K(()=>{i()}),(p,t)=>{const z=E,N=W,m=$,d=G,U=O,h=ae,n=Q,P=T,V=X,q=ee,A=Y;return x(),M(D,null,[e(h,null,{default:l(()=>[e(U,{ref_key:"queryFormRef",ref:b,inline:!0,model:s(r),class:"-mb-15px","label-width":"88px"},{default:l(()=>[e(N,{label:"\u53D1\u4EF6\u4EBA",prop:"senderFirstName"},{default:l(()=>[e(z,{modelValue:s(r).senderFirstName,"onUpdate:modelValue":t[0]||(t[0]=a=>s(r).senderFirstName=a),placeholder:"\u8BF7\u8F93\u5165\u53D1\u4EF6\u4EBA",clearable:"",class:"!w-240px"},null,8,["modelValue"])]),_:1}),e(N,null,{default:l(()=>[e(d,{onClick:w},{default:l(()=>[e(m,{class:"mr-5px",icon:"ep:search"}),o(" \u641C\u7D22 ")]),_:1}),e(d,{onClick:v},{default:l(()=>[e(m,{class:"mr-5px",icon:"ep:refresh"}),o(" \u91CD\u7F6E ")]),_:1}),e(d,{type:"primary",plain:"",onClick:t[1]||(t[1]=a=>C("create"))},{default:l(()=>[e(m,{icon:"ep:plus",class:"mr-5px"}),o(" \u65B0\u589E\u53D1\u4EF6\u4EBA ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(h,null,{default:l(()=>[j((x(),B(V,{data:s(y),stripe:!0},{default:l(()=>[e(n,{align:"center",label:"\u59D3\u540D"},{default:l(a=>[o(f(a.row.senderFirstName)+f(a.row.senderLastName),1)]),_:1}),e(n,{align:"center",label:"\u7535\u8BDD",prop:"senderPhone"}),e(n,{label:"\u7701/\u5DDE",align:"center",prop:"senderState"}),e(n,{align:"center",label:"\u57CE\u5E02",prop:"senderCity"}),e(n,{align:"center","min-width":"200",label:"\u8BE6\u7EC6\u5730\u5740",prop:"senderStreet"}),e(n,{align:"center",label:"\u90AE\u7F16",prop:"senderZip"}),e(n,{align:"left",label:"\u72B6\u6001"},{default:l(a=>[e(P,{type:a.row.status==0?"info":"success"},{default:l(()=>[o(f(a.row.status==0?"\u7981\u7528":"\u542F\u7528"),1)]),_:2},1032,["type"])]),_:1}),e(n,{width:160,align:"center",label:"\u64CD\u4F5C"},{default:l(a=>[e(d,{link:"",type:"primary",onClick:L=>C("update",a.row)},{default:l(()=>[o(" \u7F16\u8F91 ")]),_:2},1032,["onClick"]),e(d,{link:"",type:"danger",onClick:L=>(async R=>{try{await _.delConfirm(),await F.deleteSenderAddr(R),_.success(S("common.delSuccess")),await i()}catch{}})(a.row.id)},{default:l(()=>[o(" \u5220\u9664 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[A,s(u)]]),e(q,{limit:s(r).pageSize,"onUpdate:limit":t[2]||(t[2]=a=>s(r).pageSize=a),page:s(r).pageNo,"onUpdate:page":t[3]||(t[3]=a=>s(r).pageNo=a),total:s(g),onPagination:i},null,8,["limit","page","total"])]),_:1}),e(le,{ref_key:"formRef",ref:k,onSuccess:i},null,512)],64)}}});export{te as default};