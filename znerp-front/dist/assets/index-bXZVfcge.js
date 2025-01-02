import{d as H,z as I,h as J,r as i,e as L,n as j,O as B,o as n,c as K,f as e,w as a,a as r,P as N,x as c,y as u,q as m,a5 as G,D as Q,F as W,U as X,C as Y,H as Z,I as $,J as ee,K as ae,L as le,M as re}from"./index-CIfmhqRC.js";import{_ as oe}from"./DictTag.vue_vue_type_script_lang-CTpVFm77.js";import{_ as se}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{_ as te}from"./index-2RHHZ-Zv.js";import{d as pe}from"./formatTime-DFFN_xWx.js";import{d as ne}from"./download-D5Lb_h0f.js";import{b as de,d as ie,e as ce}from"./index-CqFYyUKb.js";import{_ as ue}from"./ExpressForm.vue_vue_type_script_setup_true_lang-DeGEdsNi.js";import"./color-BN7ZL7BD.js";import"./el-card-DyMugU68.js";import"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import"./constants-A8BI3pz7.js";const me=["src"],fe=H({name:"Express",__name:"index",setup(ye){const w=I(),{t:z}=J(),F=i(0),g=i(!0),k=i([]),o=L({pageNo:1,pageSize:10,code:"",name:""}),h=i(),v=i(!1),f=async()=>{g.value=!0;try{const t=await de(o);k.value=t.list,F.value=t.total}finally{g.value=!1}},y=()=>{o.pageNo=1,f()},M=()=>{h.value.resetFields(),y()},C=i(),V=(t,s)=>{C.value.open(t,s)},O=async()=>{try{await w.exportConfirm(),v.value=!0;const t=await ce(o);ne.excel(t,"\u5FEB\u9012\u516C\u53F8.xls")}catch{}finally{v.value=!1}};return j(()=>{f()}),(t,s)=>{const P=te,S=X,b=Y,_=Z,d=$,T=ee,U=se,p=ae,q=oe,R=le,x=B("hasPermi"),A=re;return n(),K(W,null,[e(P,{title:"\u3010\u4EA4\u6613\u3011\u5FEB\u9012\u53D1\u8D27",url:"https://doc.iocoder.cn/mall/trade-delivery-express/"}),e(U,null,{default:a(()=>[e(T,{class:"-mb-15px",model:r(o),ref_key:"queryFormRef",ref:h,inline:!0,"label-width":"100px"},{default:a(()=>[e(b,{label:"\u5FEB\u9012\u516C\u53F8\u7F16\u53F7",prop:"code"},{default:a(()=>[e(S,{modelValue:r(o).code,"onUpdate:modelValue":s[0]||(s[0]=l=>r(o).code=l),placeholder:"\u8BF7\u8F93\u5FEB\u9012\u516C\u53F8\u7F16\u53F7",clearable:"",onKeyup:N(y,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),e(b,{label:"\u5FEB\u9012\u516C\u53F8\u540D\u79F0",prop:"name"},{default:a(()=>[e(S,{modelValue:r(o).name,"onUpdate:modelValue":s[1]||(s[1]=l=>r(o).name=l),placeholder:"\u8BF7\u8F93\u5FEB\u9012\u516C\u53F8\u540D\u79F0",clearable:"",onKeyup:N(y,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),e(b,null,{default:a(()=>[e(d,{onClick:y},{default:a(()=>[e(_,{icon:"ep:search",class:"mr-5px"}),c(" \u641C\u7D22")]),_:1}),e(d,{onClick:M},{default:a(()=>[e(_,{icon:"ep:refresh",class:"mr-5px"}),c(" \u91CD\u7F6E")]),_:1}),u((n(),m(d,{type:"primary",plain:"",onClick:s[2]||(s[2]=l=>V("create"))},{default:a(()=>[e(_,{icon:"ep:plus",class:"mr-5px"}),c(" \u65B0\u589E ")]),_:1})),[[x,["trade:delivery:express:create"]]]),u((n(),m(d,{type:"success",plain:"",onClick:O,loading:r(v)},{default:a(()=>[e(_,{icon:"ep:download",class:"mr-5px"}),c(" \u5BFC\u51FA ")]),_:1},8,["loading"])),[[x,["trade:delivery:express:export"]]])]),_:1})]),_:1},8,["model"])]),_:1}),e(U,null,{default:a(()=>[u((n(),m(R,{data:r(k)},{default:a(()=>[e(p,{label:"\u516C\u53F8\u7F16\u7801",prop:"code"}),e(p,{label:"\u516C\u53F8\u540D\u79F0",prop:"name"}),e(p,{label:"\u516C\u53F8 logo ",prop:"logo"},{default:a(l=>[l.row.logo?(n(),K("img",{key:0,src:l.row.logo,alt:"\u516C\u53F8logo",class:"h-40px"},null,8,me)):G("",!0)]),_:1}),e(p,{label:"\u6392\u5E8F",align:"center",prop:"sort"}),e(p,{label:"\u5F00\u542F\u72B6\u6001",align:"center",prop:"status"},{default:a(l=>[e(q,{type:r(Q).COMMON_STATUS,value:l.row.status},null,8,["type","value"])]),_:1}),e(p,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"createTime",width:"180",formatter:r(pe)},null,8,["formatter"]),e(p,{label:"\u64CD\u4F5C",align:"center"},{default:a(l=>[u((n(),m(d,{link:"",type:"primary",onClick:D=>V("update",l.row.id)},{default:a(()=>[c(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[x,["trade:delivery:express:update"]]]),u((n(),m(d,{link:"",type:"danger",onClick:D=>(async E=>{try{await w.delConfirm(),await ie(E),w.success(z("common.delSuccess")),await f()}catch{}})(l.row.id)},{default:a(()=>[c(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[x,["trade:delivery:express:delete"]]])]),_:1})]),_:1},8,["data"])),[[A,r(g)]])]),_:1}),e(ue,{ref_key:"formRef",ref:C,onSuccess:f},null,512)],64)}}});export{fe as default};
