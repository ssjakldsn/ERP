import{u as R,_ as A,a as M}from"./useTable-g1Pz2Y8i.js";import{_ as w}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{d as j,r as P,n as q,O as F,o as n,c as O,f as o,w as i,a,y as p,q as c,x as u,F as U,H as D,I as H}from"./index-CIfmhqRC.js";import{_ as I}from"./index-2RHHZ-Zv.js";import{a as b}from"./account.data-DB2SYEX0.js";import{a as B,d as E}from"./index-BulLiPxL.js";import{_ as G}from"./MailAccountForm.vue_vue_type_script_setup_true_lang-NVoI0_B8.js";import{_ as J}from"./MailAccountDetail.vue_vue_type_script_setup_true_lang-BoLX0O3Z.js";import"./Form-cSLPXDG2.js";import"./el-virtual-list-Czht-gcx.js";import"./el-tree-select-CYFGeiEt.js";import"./el-time-select-Ct728u6V.js";import"./InputPassword-BH-q229L.js";import"./index-CrBeVHKs.js";import"./useForm-BJKeztt2.js";import"./download-D5Lb_h0f.js";import"./el-card-DyMugU68.js";import"./formatTime-DFFN_xWx.js";import"./formRules-C3y0LKNH.js";import"./useCrudSchemas-BA8R3pf3.js";import"./tree-BMqZf9_I.js";import"./DictTag.vue_vue_type_script_lang-CTpVFm77.js";import"./color-BN7ZL7BD.js";import"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import"./Descriptions-mqXOIPLW.js";import"./Descriptions.vue_vue_type_style_index_0_scoped_30b8da63_lang-CeyRU9LV.js";import"./el-descriptions-item-BL6ba85F.js";const K=j({name:"SystemMailAccount",__name:"index",setup(N){const{tableObject:r,tableMethods:d}=R({getListApi:B,delListApi:E}),{getList:f,setSearchParams:g}=d,_=P(),y=(S,t)=>{_.value.open(S,t)},k=P();return q(()=>{f()}),(S,t)=>{const v=I,z=D,m=H,L=A,h=w,x=M,l=F("hasPermi");return n(),O(U,null,[o(v,{title:"\u90AE\u4EF6\u914D\u7F6E",url:"https://doc.iocoder.cn/mail"}),o(h,null,{default:i(()=>[o(L,{schema:a(b).searchSchema,onSearch:a(g),onReset:a(g)},{actionMore:i(()=>[p((n(),c(m,{type:"primary",plain:"",onClick:t[0]||(t[0]=e=>y("create"))},{default:i(()=>[o(z,{icon:"ep:plus",class:"mr-5px"}),u(" \u65B0\u589E ")]),_:1})),[[l,["system:mail-account:create"]]])]),_:1},8,["schema","onSearch","onReset"])]),_:1}),o(h,null,{default:i(()=>[o(x,{columns:a(b).tableColumns,data:a(r).tableList,loading:a(r).loading,pagination:{total:a(r).total},pageSize:a(r).pageSize,"onUpdate:pageSize":t[1]||(t[1]=e=>a(r).pageSize=e),currentPage:a(r).currentPage,"onUpdate:currentPage":t[2]||(t[2]=e=>a(r).currentPage=e)},{action:i(({row:e})=>[p((n(),c(m,{link:"",type:"primary",onClick:C=>y("update",e.id)},{default:i(()=>[u(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[l,["system:mail-account:update"]]]),p((n(),c(m,{link:"",type:"primary",onClick:C=>{return s=e.id,void k.value.open(s);var s}},{default:i(()=>[u(" \u8BE6\u60C5 ")]),_:2},1032,["onClick"])),[[l,["system:mail-account:query"]]]),p((n(),c(m,{link:"",type:"danger",onClick:C=>{return s=e.id,void d.delList(s,!1);var s}},{default:i(()=>[u(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[l,["system:mail-account:delete"]]])]),_:1},8,["columns","data","loading","pagination","pageSize","currentPage"])]),_:1}),o(G,{ref_key:"formRef",ref:_,onSuccess:a(f)},null,8,["onSuccess"]),o(J,{ref_key:"detailRef",ref:k},null,512)],64)}}});export{K as default};