import{d as Q,z as j,h as E,r as m,e as W,n as X,O as Y,o as n,c as S,f as e,w as l,a as t,P as Z,F as x,p as A,Q as $,D as M,q as p,x as i,y as _,g as ee,t as v,U as ae,C as le,A as te,B as se,H as oe,I as re,J as ne,K as ie,av as pe,L as ue,M as de}from"./index-CIfmhqRC.js";import{_ as ce}from"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import{_ as me}from"./DictTag.vue_vue_type_script_lang-CTpVFm77.js";import{_ as fe}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{_ as _e}from"./index-2RHHZ-Zv.js";import{d as ye}from"./formatTime-DFFN_xWx.js";import{_ as ge,g as he,d as be}from"./ClientForm.vue_vue_type_script_setup_true_lang-BjViNtxZ.js";import"./index-CrBeVHKs.js";import"./color-BN7ZL7BD.js";import"./el-card-DyMugU68.js";import"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import"./constants-A8BI3pz7.js";const ke=["src"],we=Q({name:"SystemOAuth2Client",__name:"index",setup(Se){const C=j(),{t:F}=E(),y=m(!0),T=m(0),V=m([]),o=W({pageNo:1,pageSize:10,name:null,status:void 0}),O=m(),u=async()=>{y.value=!0;try{const d=await he(o);V.value=d.list,T.value=d.total}finally{y.value=!1}},g=()=>{o.pageNo=1,u()},G=()=>{O.value.resetFields(),g()},U=m(),z=(d,s)=>{U.value.open(d,s)};return X(()=>{u()}),(d,s)=>{const P=_e,R=ae,h=le,q=te,I=se,b=oe,c=re,K=ne,N=fe,r=ie,B=me,D=pe,H=ue,J=ce,k=Y("hasPermi"),L=de;return n(),S(x,null,[e(P,{title:"OAuth 2.0\uFF08SSO \u5355\u70B9\u767B\u5F55)",url:"https://doc.iocoder.cn/oauth2/"}),e(N,null,{default:l(()=>[e(K,{class:"-mb-15px",model:t(o),ref_key:"queryFormRef",ref:O,inline:!0,"label-width":"68px"},{default:l(()=>[e(h,{label:"\u5E94\u7528\u540D",prop:"name"},{default:l(()=>[e(R,{modelValue:t(o).name,"onUpdate:modelValue":s[0]||(s[0]=a=>t(o).name=a),placeholder:"\u8BF7\u8F93\u5165\u5E94\u7528\u540D",clearable:"",onKeyup:Z(g,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),e(h,{label:"\u72B6\u6001",prop:"status"},{default:l(()=>[e(I,{modelValue:t(o).status,"onUpdate:modelValue":s[1]||(s[1]=a=>t(o).status=a),placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001",clearable:"",class:"!w-240px"},{default:l(()=>[(n(!0),S(x,null,A(t($)(t(M).COMMON_STATUS),a=>(n(),p(q,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(h,null,{default:l(()=>[e(c,{onClick:g},{default:l(()=>[e(b,{icon:"ep:search",class:"mr-5px"}),i(" \u641C\u7D22")]),_:1}),e(c,{onClick:G},{default:l(()=>[e(b,{icon:"ep:refresh",class:"mr-5px"}),i(" \u91CD\u7F6E")]),_:1}),_((n(),p(c,{plain:"",type:"primary",onClick:s[2]||(s[2]=a=>z("create"))},{default:l(()=>[e(b,{icon:"ep:plus",class:"mr-5px"}),i(" \u65B0\u589E ")]),_:1})),[[k,["system:oauth2-client:create"]]])]),_:1})]),_:1},8,["model"])]),_:1}),e(N,null,{default:l(()=>[_((n(),p(H,{data:t(V)},{default:l(()=>[e(r,{label:"\u5BA2\u6237\u7AEF\u7F16\u53F7",align:"center",prop:"clientId"}),e(r,{label:"\u5BA2\u6237\u7AEF\u5BC6\u94A5",align:"center",prop:"secret"}),e(r,{label:"\u5E94\u7528\u540D",align:"center",prop:"name"}),e(r,{label:"\u5E94\u7528\u56FE\u6807",align:"center",prop:"logo"},{default:l(a=>[ee("img",{width:"40px",height:"40px",src:a.row.logo},null,8,ke)]),_:1}),e(r,{label:"\u72B6\u6001",align:"center",prop:"status"},{default:l(a=>[e(B,{type:t(M).COMMON_STATUS,value:a.row.status},null,8,["type","value"])]),_:1}),e(r,{label:"\u8BBF\u95EE\u4EE4\u724C\u7684\u6709\u6548\u671F",align:"center",prop:"accessTokenValiditySeconds"},{default:l(a=>[i(v(a.row.accessTokenValiditySeconds)+" \u79D2",1)]),_:1}),e(r,{label:"\u5237\u65B0\u4EE4\u724C\u7684\u6709\u6548\u671F",align:"center",prop:"refreshTokenValiditySeconds"},{default:l(a=>[i(v(a.row.refreshTokenValiditySeconds)+" \u79D2",1)]),_:1}),e(r,{label:"\u6388\u6743\u7C7B\u578B",align:"center",prop:"authorizedGrantTypes"},{default:l(a=>[(n(!0),S(x,null,A(a.row.authorizedGrantTypes,(w,f)=>(n(),p(D,{"disable-transitions":!0,key:f,index:f,class:"mr-5px"},{default:l(()=>[i(v(w),1)]),_:2},1032,["index"]))),128))]),_:1}),e(r,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"createTime",width:"180",formatter:t(ye)},null,8,["formatter"]),e(r,{label:"\u64CD\u4F5C",align:"center"},{default:l(a=>[_((n(),p(c,{link:"",type:"primary",onClick:w=>z("update",a.row.id)},{default:l(()=>[i(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[k,["system:oauth2-client:update"]]]),_((n(),p(c,{link:"",type:"danger",onClick:w=>(async f=>{try{await C.delConfirm(),await be(f),C.success(F("common.delSuccess")),await u()}catch{}})(a.row.id)},{default:l(()=>[i(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[k,["system:oauth2-client:delete"]]])]),_:1})]),_:1},8,["data"])),[[L,t(y)]]),e(J,{total:t(T),page:t(o).pageNo,"onUpdate:page":s[3]||(s[3]=a=>t(o).pageNo=a),limit:t(o).pageSize,"onUpdate:limit":s[4]||(s[4]=a=>t(o).pageSize=a),onPagination:u},null,8,["total","page","limit"])]),_:1}),e(ge,{ref_key:"formRef",ref:U,onSuccess:u},null,512)],64)}}});export{we as default};