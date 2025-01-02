import{bt as v,d as z,h as J,z as j,r as p,e as K,o,q as m,w as s,f as u,a as l,x as y,y as L,c as T,F as S,p as I,Q as w,D as U,t as k,a5 as N,k as Q,U as B,C as G,ak as H,al as W,J as X,I as Z,M as $}from"./index-CIfmhqRC.js";import{_ as ee}from"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";const le=async f=>await v.get({url:"/system/social-client/page",params:f}),ae=async f=>await v.delete({url:"/system/social-client/delete?id="+f}),te=z({__name:"SocialClientForm",emits:["success"],setup(f,{expose:x,emit:M}){const{t:_}=J(),q=j(),r=p(!1),C=p(""),c=p(!1),h=p(""),t=p({id:void 0,name:void 0,socialType:void 0,userType:void 0,clientId:void 0,clientSecret:void 0,agentId:void 0,status:0}),F=K({name:[{required:!0,message:"\u5E94\u7528\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],socialType:[{required:!0,message:"\u793E\u4EA4\u5E73\u53F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],userType:[{required:!0,message:"\u7528\u6237\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],clientId:[{required:!0,message:"\u5BA2\u6237\u7AEF\u7F16\u53F7\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],clientSecret:[{required:!0,message:"\u5BA2\u6237\u7AEF\u5BC6\u94A5\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],status:[{required:!0,message:"\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),g=p();x({open:async(d,a)=>{if(r.value=!0,C.value=_("action."+d),h.value=d,A(),a){c.value=!0;try{t.value=await(async n=>await v.get({url:"/system/social-client/get?id="+n}))(a)}finally{c.value=!1}}}});const O=M,Y=async()=>{if(g&&await g.value.validate()){c.value=!0;try{const d=t.value;h.value==="create"?(await(async a=>await v.post({url:"/system/social-client/create",data:a}))(d),q.success(_("common.createSuccess"))):(await(async a=>await v.put({url:"/system/social-client/update",data:a}))(d),q.success(_("common.updateSuccess"))),r.value=!1,O("success")}finally{c.value=!1}}},A=()=>{var d;t.value={id:void 0,name:void 0,socialType:void 0,userType:void 0,clientId:void 0,clientSecret:void 0,agentId:void 0,status:0},(d=g.value)==null||d.resetFields()};return(d,a)=>{const n=B,i=G,V=H,b=W,D=X,E=Z,P=ee,R=$;return o(),m(P,{modelValue:l(r),"onUpdate:modelValue":a[8]||(a[8]=e=>Q(r)?r.value=e:null),title:l(C)},{footer:s(()=>[u(E,{disabled:l(c),type:"primary",onClick:Y},{default:s(()=>[y("\u786E \u5B9A")]),_:1},8,["disabled"]),u(E,{onClick:a[7]||(a[7]=e=>r.value=!1)},{default:s(()=>[y("\u53D6 \u6D88")]),_:1})]),default:s(()=>[L((o(),m(D,{ref_key:"formRef",ref:g,model:l(t),rules:l(F),"label-width":"120px"},{default:s(()=>[u(i,{label:"\u5E94\u7528\u540D",prop:"name"},{default:s(()=>[u(n,{modelValue:l(t).name,"onUpdate:modelValue":a[0]||(a[0]=e=>l(t).name=e),placeholder:"\u8BF7\u8F93\u5165\u5E94\u7528\u540D"},null,8,["modelValue"])]),_:1}),u(i,{label:"\u793E\u4EA4\u5E73\u53F0",prop:"socialType"},{default:s(()=>[u(b,{modelValue:l(t).socialType,"onUpdate:modelValue":a[1]||(a[1]=e=>l(t).socialType=e)},{default:s(()=>[(o(!0),T(S,null,I(l(w)(l(U).SYSTEM_SOCIAL_TYPE),e=>(o(),m(V,{key:e.value,value:e.value},{default:s(()=>[y(k(e.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(i,{label:"\u7528\u6237\u7C7B\u578B",prop:"userType"},{default:s(()=>[u(b,{modelValue:l(t).userType,"onUpdate:modelValue":a[2]||(a[2]=e=>l(t).userType=e)},{default:s(()=>[(o(!0),T(S,null,I(l(w)(l(U).USER_TYPE),e=>(o(),m(V,{key:e.value,value:e.value},{default:s(()=>[y(k(e.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(i,{label:"\u5BA2\u6237\u7AEF\u7F16\u53F7",prop:"clientId"},{default:s(()=>[u(n,{modelValue:l(t).clientId,"onUpdate:modelValue":a[3]||(a[3]=e=>l(t).clientId=e),placeholder:"\u8BF7\u8F93\u5165\u5BA2\u6237\u7AEF\u7F16\u53F7,\u5BF9\u5E94\u5404\u5E73\u53F0\u7684appKey"},null,8,["modelValue"])]),_:1}),u(i,{label:"\u5BA2\u6237\u7AEF\u5BC6\u94A5",prop:"clientSecret"},{default:s(()=>[u(n,{modelValue:l(t).clientSecret,"onUpdate:modelValue":a[4]||(a[4]=e=>l(t).clientSecret=e),placeholder:"\u8BF7\u8F93\u5165\u5BA2\u6237\u7AEF\u5BC6\u94A5,\u5BF9\u5E94\u5404\u5E73\u53F0\u7684appSecret"},null,8,["modelValue"])]),_:1}),l(t).socialType===30?(o(),m(i,{key:0,label:"agentId",prop:"agentId"},{default:s(()=>[u(n,{modelValue:l(t).agentId,"onUpdate:modelValue":a[5]||(a[5]=e=>l(t).agentId=e),placeholder:"\u6388\u6743\u65B9\u7684\u7F51\u9875\u5E94\u7528 ID\uFF0C\u6709\u5219\u586B"},null,8,["modelValue"])]),_:1})):N("",!0),u(i,{label:"\u72B6\u6001",prop:"status"},{default:s(()=>[u(b,{modelValue:l(t).status,"onUpdate:modelValue":a[6]||(a[6]=e=>l(t).status=e)},{default:s(()=>[(o(!0),T(S,null,I(l(w)(l(U).COMMON_STATUS),e=>(o(),m(V,{key:e.value,value:e.value},{default:s(()=>[y(k(e.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[R,l(c)]])]),_:1},8,["modelValue","title"])}}});export{te as _,ae as d,le as g};
