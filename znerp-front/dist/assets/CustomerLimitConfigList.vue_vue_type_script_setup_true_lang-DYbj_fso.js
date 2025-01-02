import{d as R,z,h as A,r as d,e as j,n as F,O as P,o as p,c as Q,f as e,w as r,x as g,y,q as u,a as t,D as Y,a5 as D,F as q,H as B,I as G,K as H,L as K,M as J}from"./index-CIfmhqRC.js";import{_ as V}from"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import{_ as W}from"./DictTag.vue_vue_type_script_lang-CTpVFm77.js";import{d as X}from"./formatTime-DFFN_xWx.js";import{L,_ as Z,g as $,d as aa}from"./CustomerLimitConfigForm.vue_vue_type_script_setup_true_lang-Dh7Es7X6.js";const ea=R({name:"CustomerLimitConfigList",__name:"CustomerLimitConfigList",props:{confType:{}},setup(v){const T=z(),{t:S}=A(),{confType:w}=v,_=d(!0),k=d(0),b=d([]),s=j({pageNo:1,pageSize:10,type:w}),m=async()=>{_.value=!0;try{const i=await $(s);b.value=i.list,k.value=i.total}finally{_.value=!1}},N=d(),h=(i,l)=>{N.value.open(i,w,l)},x=()=>{s.pageNo=1,m()};return F(()=>{m()}),(i,l)=>{const I=B,f=G,o=H,E=W,U=K,M=V,C=P("hasPermi"),O=J;return p(),Q(q,null,[e(f,{plain:"",onClick:x},{default:r(()=>[e(I,{icon:"ep:refresh",class:"mr-5px"}),g(" \u5237\u65B0 ")]),_:1}),y((p(),u(f,{type:"primary",plain:"",onClick:l[0]||(l[0]=a=>h("create"))},{default:r(()=>[e(I,{icon:"ep:plus",class:"mr-5px"}),g(" \u65B0\u589E ")]),_:1})),[[C,["crm:customer-limit-config:create"]]]),y((p(),u(U,{data:t(b),stripe:!0,"show-overflow-tooltip":!0,class:"mt-4"},{default:r(()=>[e(o,{label:"\u7F16\u53F7",align:"center",prop:"id"}),e(o,{label:"\u89C4\u5219\u9002\u7528\u4EBA\u7FA4",align:"center",formatter:a=>{var n;return(n=a.users)==null?void 0:n.map(c=>c.nickname).join("\uFF0C")}},null,8,["formatter"]),e(o,{label:"\u89C4\u5219\u9002\u7528\u90E8\u95E8",align:"center",formatter:a=>{var n;return(n=a.depts)==null?void 0:n.map(c=>c.name).join("\uFF0C")}},null,8,["formatter"]),e(o,{label:i.confType===t(L).CUSTOMER_QUANTITY_LIMIT?"\u62E5\u6709\u5BA2\u6237\u6570\u4E0A\u9650":"\u9501\u5B9A\u5BA2\u6237\u6570\u4E0A\u9650",align:"center",prop:"maxCount"},null,8,["label"]),i.confType===t(L).CUSTOMER_QUANTITY_LIMIT?(p(),u(o,{key:0,label:"\u6210\u4EA4\u5BA2\u6237\u662F\u5426\u5360\u7528\u62E5\u6709\u5BA2\u6237\u6570",align:"center",prop:"dealCountEnabled","min-width":"100"},{default:r(a=>[e(E,{type:t(Y).INFRA_BOOLEAN_STRING,value:a.row.dealCountEnabled},null,8,["type","value"])]),_:1})):D("",!0),e(o,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"createTime",formatter:t(X),width:"180px"},null,8,["formatter"]),e(o,{label:"\u64CD\u4F5C",align:"center","min-width":"110",fixed:"right"},{default:r(a=>[y((p(),u(f,{link:"",type:"primary",onClick:n=>h("update",a.row.id)},{default:r(()=>[g(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[C,["crm:customer-limit-config:update"]]]),y((p(),u(f,{link:"",type:"danger",onClick:n=>(async c=>{try{await T.delConfirm(),await aa(c),T.success(S("common.delSuccess")),await m()}catch{}})(a.row.id)},{default:r(()=>[g(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[C,["crm:customer-limit-config:delete"]]])]),_:1})]),_:1},8,["data"])),[[O,t(_)]]),e(M,{total:t(k),page:t(s).pageNo,"onUpdate:page":l[1]||(l[1]=a=>t(s).pageNo=a),limit:t(s).pageSize,"onUpdate:limit":l[2]||(l[2]=a=>t(s).pageSize=a),onPagination:m},null,8,["total","page","limit"]),e(Z,{ref_key:"formRef",ref:N,onSuccess:m},null,512)],64)}}});export{ea as _};