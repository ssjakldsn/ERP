import{u as F,_ as M,a as w}from"./useTable-g1Pz2Y8i.js";import{_ as j}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{d as A,r as P,n as O,O as T,o as s,c as U,f as r,w as i,a,y as p,q as c,x as u,F as q,H as D,I as H,__tla as I}from"./index-CIfmhqRC.js";import{_ as B}from"./index-2RHHZ-Zv.js";import{a as v,_ as E,__tla as G}from"./MailTemplateForm.vue_vue_type_script_setup_true_lang-Cfvmh_8p.js";import{a as J,d as K}from"./index-D1OBEWqz.js";import{_ as N}from"./MailTemplateSendForm.vue_vue_type_script_setup_true_lang-YnCREw99.js";import"./Form-cSLPXDG2.js";import"./el-virtual-list-Czht-gcx.js";import"./el-tree-select-CYFGeiEt.js";import"./el-time-select-Ct728u6V.js";import"./InputPassword-BH-q229L.js";import"./index-CrBeVHKs.js";import"./useForm-BJKeztt2.js";import"./download-D5Lb_h0f.js";import"./el-card-DyMugU68.js";import"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import"./formatTime-DFFN_xWx.js";import"./index-BulLiPxL.js";import"./formRules-C3y0LKNH.js";import"./useCrudSchemas-BA8R3pf3.js";import"./tree-BMqZf9_I.js";import"./DictTag.vue_vue_type_script_lang-CTpVFm77.js";import"./color-BN7ZL7BD.js";let b,Q=Promise.all([(()=>{try{return I}catch{}})(),(()=>{try{return G}catch{}})()]).then(async()=>{b=A({name:"SystemMailTemplate",__name:"index",setup(V){const{tableObject:o,tableMethods:d}=F({getListApi:J,delListApi:K}),{getList:_,setSearchParams:f}=d,g=P(),y=(k,e)=>{g.value.open(k,e)},h=P();return O(()=>{_()}),(k,e)=>{const z=B,L=D,m=H,x=M,S=j,R=w,n=T("hasPermi");return s(),U(q,null,[r(z,{title:"\u90AE\u4EF6\u914D\u7F6E",url:"https://doc.iocoder.cn/mail"}),r(S,null,{default:i(()=>[r(x,{schema:a(v).searchSchema,onSearch:a(f),onReset:a(f)},{actionMore:i(()=>[p((s(),c(m,{type:"primary",plain:"",onClick:e[0]||(e[0]=t=>y("create"))},{default:i(()=>[r(L,{icon:"ep:plus",class:"mr-5px"}),u(" \u65B0\u589E ")]),_:1})),[[n,["system:mail-template:create"]]])]),_:1},8,["schema","onSearch","onReset"])]),_:1}),r(S,null,{default:i(()=>[r(R,{columns:a(v).tableColumns,data:a(o).tableList,loading:a(o).loading,pagination:{total:a(o).total},pageSize:a(o).pageSize,"onUpdate:pageSize":e[1]||(e[1]=t=>a(o).pageSize=t),currentPage:a(o).currentPage,"onUpdate:currentPage":e[2]||(e[2]=t=>a(o).currentPage=t)},{action:i(({row:t})=>[p((s(),c(m,{link:"",type:"primary",onClick:C=>{return l=t.id,void h.value.open(l);var l}},{default:i(()=>[u(" \u6D4B\u8BD5 ")]),_:2},1032,["onClick"])),[[n,["system:mail-template:send-mail"]]]),p((s(),c(m,{link:"",type:"primary",onClick:C=>y("update",t.id)},{default:i(()=>[u(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[n,["system:mail-template:update"]]]),p((s(),c(m,{link:"",type:"danger",onClick:C=>{return l=t.id,void d.delList(l,!1);var l}},{default:i(()=>[u(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[n,["system:mail-template:delete"]]])]),_:1},8,["columns","data","loading","pagination","pageSize","currentPage"])]),_:1}),r(E,{ref_key:"formRef",ref:g,onSuccess:a(_)},null,8,["onSuccess"]),r(N,{ref_key:"sendFormRef",ref:h},null,512)],64)}}})});export{Q as __tla,b as default};