import{d as Z,z as E,h as H,r as m,e as I,n as J,o as C,c as L,f as e,w as a,a as o,P as M,x as r,y as T,q as j,t as A,F as B,U as D,C as G,H as W,I as $,J as O,K as Q,av as X,L as Y,M as ee}from"./index-CIfmhqRC.js";import{_ as ae}from"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import{_ as le}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{Z as S}from"./index-H3f_2XHj.js";import{d as te}from"./formatTime-DFFN_xWx.js";import{_ as ne}from"./ShopForm.vue_vue_type_script_setup_true_lang-DyyNidmM.js";import"./index-CrBeVHKs.js";import"./el-card-DyMugU68.js";import"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";const oe=Z({name:"ZnErpShop",__name:"index",setup(se){const g=E(),{t:v}=H(),c=m(!0),_=m([]),y=m(0),w=m(),n=I({pageNo:1,pageSize:10,name:void 0}),p=async()=>{c.value=!0;let u={pageNo:n.pageNo,pageSize:n.pageSize,name:n.name};try{const l=await S.shopPage(u);_.value=l.list,y.value=l.total}finally{c.value=!1}},d=()=>{n.pageNo=1,p()},N=()=>{w.value.resetFields(),d()},h=m(),b=(u,l)=>{h.value.open(u,l)};return J(async()=>{await p()}),(u,l)=>{const z=D,k=G,f=W,i=$,P=O,x=le,s=Q,U=X,F=Y,V=ae,q=ee;return C(),L(B,null,[e(x,null,{default:a(()=>[e(P,{class:"-mb-15px",model:o(n),ref_key:"queryFormRef",ref:w,inline:!0,"label-width":"88px"},{default:a(()=>[e(k,{label:"\u5E97\u94FA\u540D\u79F0",prop:"name"},{default:a(()=>[e(z,{modelValue:o(n).name,"onUpdate:modelValue":l[0]||(l[0]=t=>o(n).name=t),placeholder:"\u8BF7\u8F93\u5165\u5E97\u94FA\u540D\u79F0",clearable:"",onKeyup:M(d,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),e(k,null,{default:a(()=>[e(i,{onClick:d},{default:a(()=>[e(f,{icon:"ep:search",class:"mr-5px"}),r(" \u641C\u7D22 ")]),_:1}),e(i,{onClick:N},{default:a(()=>[e(f,{icon:"ep:refresh",class:"mr-5px"}),r(" \u91CD\u7F6E ")]),_:1}),e(i,{type:"primary",plain:"",onClick:l[1]||(l[1]=t=>b("create"))},{default:a(()=>[e(f,{icon:"ep:plus",class:"mr-5px"}),r(" \u65B0\u589E\u5E97\u94FA ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(x,null,{default:a(()=>[T((C(),j(F,{data:o(_),stripe:!0},{default:a(()=>[e(s,{align:"center",label:"\u5E97\u94FA\u4E2D\u6587\u540D","min-width":"100",prop:"name"}),e(s,{align:"center",label:"\u5E97\u94FA\u82F1\u6587\u540D",prop:"enName"}),e(s,{align:"center",label:"\u5E97\u957F",prop:"username"}),e(s,{align:"center",label:"\u8054\u7CFB\u7535\u8BDD",prop:"phone"}),e(s,{align:"left",label:"\u72B6\u6001"},{default:a(t=>[e(U,{type:t.row.status==0?"info":"success"},{default:a(()=>[r(A(t.row.status==0?"\u7981\u7528":"\u542F\u7528"),1)]),_:2},1032,["type"])]),_:1}),e(s,{align:"center",width:160,formatter:o(te),label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime"},null,8,["formatter"]),e(s,{width:160,align:"center",label:"\u64CD\u4F5C"},{default:a(t=>[e(i,{link:"",type:"primary",onClick:K=>b("update",t.row)},{default:a(()=>[r(" \u7F16\u8F91 ")]),_:2},1032,["onClick"]),e(i,{link:"",type:"danger",onClick:K=>(async R=>{try{await g.delConfirm(),await S.deleteShop(R),g.success(v("common.delSuccess")),await p()}catch{}})(t.row.id)},{default:a(()=>[r(" \u5220\u9664 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[q,o(c)]]),e(V,{limit:o(n).pageSize,"onUpdate:limit":l[2]||(l[2]=t=>o(n).pageSize=t),page:o(n).pageNo,"onUpdate:page":l[3]||(l[3]=t=>o(n).pageNo=t),total:o(y),onPagination:p},null,8,["limit","page","total"])]),_:1}),e(ne,{ref_key:"formRef",ref:h,onSuccess:p},null,512)],64)}}});export{oe as default};
