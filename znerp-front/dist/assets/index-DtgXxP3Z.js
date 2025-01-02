import{d as J,z as j,h as B,r as i,e as G,n as Q,O as W,o as c,c as X,f as e,w as l,a,P as Y,x as d,y as u,q as f,dV as v,D as Z,F as $,U as ee,C as ae,H as le,I as te,J as re,K as oe,L as pe,M as ne}from"./index-CIfmhqRC.js";import{_ as ie}from"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import{_ as se}from"./DictTag.vue_vue_type_script_lang-CTpVFm77.js";import{_ as ce}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{E as de}from"./el-tree-select-CYFGeiEt.js";import{_ as me}from"./index-2RHHZ-Zv.js";import{d as ue}from"./formatTime-DFFN_xWx.js";import{d as fe}from"./download-D5Lb_h0f.js";import{P as C}from"./index-C-VA7MOy.js";import{P as ge}from"./index-C8586r3L.js";import{_ as ye}from"./ProductForm.vue_vue_type_script_setup_true_lang-CzHERHMT.js";import{h as _e,d as we}from"./tree-BMqZf9_I.js";import"./index-CrBeVHKs.js";import"./color-BN7ZL7BD.js";import"./el-card-DyMugU68.js";import"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import"./index-DKjClyJm.js";import"./constants-A8BI3pz7.js";const xe=J({name:"ErpProduct",__name:"index",setup(be){const _=j(),{t:z}=B(),w=i(!0),P=i([]),k=i(0),r=G({pageNo:1,pageSize:10,name:void 0,categoryId:void 0}),S=i(),x=i(!1),N=i([]),m=async()=>{w.value=!0;try{const n=await C.getProductPage(r);P.value=n.list,k.value=n.total}finally{w.value=!1}},b=()=>{r.pageNo=1,m()},M=()=>{S.value.resetFields(),b()},V=i(),I=(n,o)=>{V.value.open(n,o)},T=async()=>{try{await _.exportConfirm(),x.value=!0;const n=await C.exportProduct(r);fe.excel(n,"\u4EA7\u54C1.xls")}catch{}finally{x.value=!1}};return Q(async()=>{await m();const n=await ge.getProductCategorySimpleList();N.value=_e(n,"id","parentId")}),(n,o)=>{const E=me,F=ee,h=ae,O=de,g=le,s=te,q=re,U=ce,p=oe,D=se,K=pe,L=ie,y=W("hasPermi"),R=ne;return c(),X($,null,[e(E,{title:"\u3010\u4EA7\u54C1\u3011\u4EA7\u54C1\u4FE1\u606F\u3001\u5206\u7C7B\u3001\u5355\u4F4D",url:"https://doc.iocoder.cn/erp/product/"}),e(U,null,{default:l(()=>[e(q,{class:"-mb-15px",model:a(r),ref_key:"queryFormRef",ref:S,inline:!0,"label-width":"68px"},{default:l(()=>[e(h,{label:"\u540D\u79F0",prop:"name"},{default:l(()=>[e(F,{modelValue:a(r).name,"onUpdate:modelValue":o[0]||(o[0]=t=>a(r).name=t),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",clearable:"",onKeyup:Y(b,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),e(h,{label:"\u5206\u7C7B",prop:"categoryId"},{default:l(()=>[e(O,{modelValue:a(r).categoryId,"onUpdate:modelValue":o[1]||(o[1]=t=>a(r).categoryId=t),data:a(N),props:a(we),"check-strictly":"","default-expand-all":"",placeholder:"\u8BF7\u8F93\u5165\u5206\u7C7B",class:"!w-240px"},null,8,["modelValue","data","props"])]),_:1}),e(h,null,{default:l(()=>[e(s,{onClick:b},{default:l(()=>[e(g,{icon:"ep:search",class:"mr-5px"}),d(" \u641C\u7D22")]),_:1}),e(s,{onClick:M},{default:l(()=>[e(g,{icon:"ep:refresh",class:"mr-5px"}),d(" \u91CD\u7F6E")]),_:1}),u((c(),f(s,{type:"primary",plain:"",onClick:o[2]||(o[2]=t=>I("create"))},{default:l(()=>[e(g,{icon:"ep:plus",class:"mr-5px"}),d(" \u65B0\u589E ")]),_:1})),[[y,["erp:product:create"]]]),u((c(),f(s,{type:"success",plain:"",onClick:T,loading:a(x)},{default:l(()=>[e(g,{icon:"ep:download",class:"mr-5px"}),d(" \u5BFC\u51FA ")]),_:1},8,["loading"])),[[y,["erp:product:export"]]])]),_:1})]),_:1},8,["model"])]),_:1}),e(U,null,{default:l(()=>[u((c(),f(K,{data:a(P),stripe:!0,"show-overflow-tooltip":!0},{default:l(()=>[e(p,{label:"\u6761\u7801",align:"center",prop:"barCode"}),e(p,{label:"\u540D\u79F0",align:"center",prop:"name"}),e(p,{label:"\u89C4\u683C",align:"center",prop:"standard"}),e(p,{label:"\u5206\u7C7B",align:"center",prop:"categoryName"}),e(p,{label:"\u5355\u4F4D",align:"center",prop:"unitName"}),e(p,{label:"\u91C7\u8D2D\u4EF7\u683C",align:"center",prop:"purchasePrice",formatter:a(v)},null,8,["formatter"]),e(p,{label:"\u9500\u552E\u4EF7\u683C",align:"center",prop:"salePrice",formatter:a(v)},null,8,["formatter"]),e(p,{label:"\u6700\u4F4E\u4EF7\u683C",align:"center",prop:"minPrice",formatter:a(v)},null,8,["formatter"]),e(p,{label:"\u72B6\u6001",align:"center",prop:"status"},{default:l(t=>[e(D,{type:a(Z).COMMON_STATUS,value:t.row.status},null,8,["type","value"])]),_:1}),e(p,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"createTime",formatter:a(ue),width:"180px"},null,8,["formatter"]),e(p,{label:"\u64CD\u4F5C",align:"center",width:"110"},{default:l(t=>[u((c(),f(s,{link:"",type:"primary",onClick:A=>I("update",t.row.id)},{default:l(()=>[d(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[y,["erp:product:update"]]]),u((c(),f(s,{link:"",type:"danger",onClick:A=>(async H=>{try{await _.delConfirm(),await C.deleteProduct(H),_.success(z("common.delSuccess")),await m()}catch{}})(t.row.id)},{default:l(()=>[d(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[y,["erp:product:delete"]]])]),_:1})]),_:1},8,["data"])),[[R,a(w)]]),e(L,{total:a(k),page:a(r).pageNo,"onUpdate:page":o[3]||(o[3]=t=>a(r).pageNo=t),limit:a(r).pageSize,"onUpdate:limit":o[4]||(o[4]=t=>a(r).pageSize=t),onPagination:m},null,8,["total","page","limit"])]),_:1}),e(ye,{ref_key:"formRef",ref:V,onSuccess:m},null,512)],64)}}});export{xe as default};