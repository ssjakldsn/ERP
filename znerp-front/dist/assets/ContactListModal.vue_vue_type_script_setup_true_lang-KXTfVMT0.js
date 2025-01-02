import{d as T,r,e as j,u as Q,O as W,o as y,q as v,w as a,f as e,x as u,a as o,P as X,y as R,t as Y,D as Z,k as $,z as ee,U as ae,C as le,H as te,I as oe,J as se,K as re,af as ne,L as ie,M as pe}from"./index-CIfmhqRC.js";import{_ as ue}from"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import{_ as me}from"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import{_ as ce}from"./DictTag.vue_vue_type_script_lang-CTpVFm77.js";import{_ as de}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{g as fe}from"./index-B_QTmj5f.js";import{_ as _e}from"./ContactForm.vue_vue_type_script_setup_true_lang-CLRF_VIq.js";const ge=T({name:"ContactListModal",__name:"ContactListModal",props:{customerId:{}},emits:["success"],setup(S,{expose:V,emit:z}){const L=ee(),w=S,n=r(!1),d=r(!0),b=r(0),C=r([]),k=r(),U=r(!1),s=j({pageNo:1,pageSize:10,name:void 0,customerId:w.customerId});V({open:async()=>{n.value=!0,s.customerId=w.customerId,await c()}});const c=async()=>{d.value=!0;try{const i=await fe(s);C.value=i.list,b.value=i.total}finally{d.value=!1}},f=()=>{s.pageNo=1,c()},F=()=>{k.value.resetFields(),f()},x=r(),M=z,_=r(),O=async()=>{const i=_.value.getSelectionRows().map(l=>l.id);if(i.length===0)return L.error("\u672A\u9009\u62E9\u8054\u7CFB\u4EBA");n.value=!1,M("success",i,_.value.getSelectionRows())},{push:P}=Q();return(i,l)=>{const q=ae,h=le,g=te,m=oe,A=se,I=de,p=re,D=ne,J=ce,K=ie,B=me,E=ue,G=W("hasPermi"),H=pe;return y(),v(E,{modelValue:o(n),"onUpdate:modelValue":l[5]||(l[5]=t=>$(n)?n.value=t:null),title:"\u5173\u8054\u8054\u7CFB\u4EBA"},{footer:a(()=>[e(m,{disabled:o(U),type:"primary",onClick:O},{default:a(()=>[u("\u786E \u5B9A")]),_:1},8,["disabled"]),e(m,{onClick:l[4]||(l[4]=t=>n.value=!1)},{default:a(()=>[u("\u53D6 \u6D88")]),_:1})]),default:a(()=>[e(I,null,{default:a(()=>[e(A,{ref_key:"queryFormRef",ref:k,inline:!0,model:o(s),class:"-mb-15px","label-width":"90px"},{default:a(()=>[e(h,{label:"\u8054\u7CFB\u4EBA\u540D\u79F0",prop:"name"},{default:a(()=>[e(q,{modelValue:o(s).name,"onUpdate:modelValue":l[0]||(l[0]=t=>o(s).name=t),class:"!w-240px",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u8054\u7CFB\u4EBA\u540D\u79F0",onKeyup:X(f,["enter"])},null,8,["modelValue"])]),_:1}),e(h,null,{default:a(()=>[e(m,{onClick:f},{default:a(()=>[e(g,{class:"mr-5px",icon:"ep:search"}),u(" \u641C\u7D22 ")]),_:1}),e(m,{onClick:F},{default:a(()=>[e(g,{class:"mr-5px",icon:"ep:refresh"}),u(" \u91CD\u7F6E ")]),_:1}),R((y(),v(m,{type:"primary",onClick:l[1]||(l[1]=t=>{x.value.open("create")})},{default:a(()=>[e(g,{class:"mr-5px",icon:"ep:plus"}),u(" \u65B0\u589E ")]),_:1})),[[G,["crm:business:create"]]])]),_:1})]),_:1},8,["model"])]),_:1}),e(I,{class:"mt-10px"},{default:a(()=>[R((y(),v(K,{ref_key:"contactRef",ref:_,data:o(C),"show-overflow-tooltip":!0,stripe:!0},{default:a(()=>[e(p,{type:"selection",width:"55"}),e(p,{align:"center",fixed:"left",label:"\u59D3\u540D",prop:"name"},{default:a(t=>[e(D,{underline:!1,type:"primary",onClick:ye=>{return N=t.row.id,void P({name:"CrmContactDetail",params:{id:N}});var N}},{default:a(()=>[u(Y(t.row.name),1)]),_:2},1032,["onClick"])]),_:1}),e(p,{align:"center",label:"\u624B\u673A\u53F7",prop:"mobile"}),e(p,{align:"center",label:"\u804C\u4F4D",prop:"post"}),e(p,{align:"center",label:"\u76F4\u5C5E\u4E0A\u7EA7",prop:"parentName"}),e(p,{align:"center",label:"\u662F\u5426\u5173\u952E\u51B3\u7B56\u4EBA","min-width":"100",prop:"master"},{default:a(t=>[e(J,{type:o(Z).INFRA_BOOLEAN_STRING,value:t.row.master},null,8,["type","value"])]),_:1})]),_:1},8,["data"])),[[H,o(d)]]),e(B,{limit:o(s).pageSize,"onUpdate:limit":l[2]||(l[2]=t=>o(s).pageSize=t),page:o(s).pageNo,"onUpdate:page":l[3]||(l[3]=t=>o(s).pageNo=t),total:o(b),onPagination:c},null,8,["limit","page","total"])]),_:1}),e(_e,{ref_key:"formRef",ref:x,onSuccess:c},null,512)]),_:1},8,["modelValue"])}}});export{ge as _};
