import{_ as I}from"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import{d as M,r as m,o as T,q as A,w as u,f as l,x as d,t,a as e,D as i,c as P,a5 as C,k as g}from"./index-CIfmhqRC.js";import{E as h,a as Y}from"./el-descriptions-item-BL6ba85F.js";import{_ as D}from"./DictTag.vue_vue_type_script_lang-CTpVFm77.js";import{f as n}from"./formatTime-DFFN_xWx.js";import{b as R}from"./index-C7IuAID-.js";const w={key:0},x=M({name:"SystemSmsLogDetail",__name:"SmsLogDetail",setup(L,{expose:b}){const o=m(!1),r=m(!1),a=m(),S=m([]);return b({open:async f=>{o.value=!0,r.value=!0;try{a.value=f}finally{r.value=!1}S.value=await R()}}),(f,v)=>{const s=h,p=D,y=Y,E=I;return T(),A(E,{modelValue:e(o),"onUpdate:modelValue":v[0]||(v[0]=_=>g(o)?o.value=_:null),"max-height":500,scroll:!0,title:"\u8BE6\u60C5",width:"800"},{default:u(()=>[l(y,{column:1,border:""},{default:u(()=>[l(s,{label:"\u65E5\u5FD7\u4E3B\u952E","min-width":"120"},{default:u(()=>[d(t(e(a).id),1)]),_:1}),l(s,{label:"\u77ED\u4FE1\u6E20\u9053"},{default:u(()=>{var _;return[d(t((_=e(S).find(c=>c.id===e(a).channelId))==null?void 0:_.signature)+" ",1),l(p,{type:e(i).SYSTEM_SMS_CHANNEL_CODE,value:e(a).channelCode},null,8,["type","value"])]}),_:1}),l(s,{label:"\u77ED\u4FE1\u6A21\u677F"},{default:u(()=>[d(t(e(a).templateId)+" | "+t(e(a).templateCode)+" ",1),l(p,{type:e(i).SYSTEM_SMS_TEMPLATE_TYPE,value:e(a).templateType},null,8,["type","value"])]),_:1}),l(s,{label:"API \u7684\u6A21\u677F\u7F16\u53F7"},{default:u(()=>[d(t(e(a).apiTemplateId),1)]),_:1}),l(s,{label:"\u7528\u6237\u4FE1\u606F"},{default:u(()=>[d(t(e(a).mobile)+" ",1),e(a).userType&&e(a).userId?(T(),P("span",w,[l(p,{type:e(i).USER_TYPE,value:e(a).userType},null,8,["type","value"]),d(" ("+t(e(a).userId)+") ",1)])):C("",!0)]),_:1}),l(s,{label:"\u77ED\u4FE1\u5185\u5BB9"},{default:u(()=>[d(t(e(a).templateContent),1)]),_:1}),l(s,{label:"\u77ED\u4FE1\u53C2\u6570"},{default:u(()=>[d(t(e(a).templateParams),1)]),_:1}),l(s,{label:"\u521B\u5EFA\u65F6\u95F4"},{default:u(()=>[d(t(e(n)(e(a).createTime)),1)]),_:1}),l(s,{label:"\u53D1\u9001\u72B6\u6001"},{default:u(()=>[l(p,{type:e(i).SYSTEM_SMS_SEND_STATUS,value:e(a).sendStatus},null,8,["type","value"])]),_:1}),l(s,{label:"\u53D1\u9001\u65F6\u95F4"},{default:u(()=>[d(t(e(n)(e(a).sendTime)),1)]),_:1}),l(s,{label:"API \u53D1\u9001\u7ED3\u679C"},{default:u(()=>[d(t(e(a).apiSendCode)+" | "+t(e(a).apiSendMsg),1)]),_:1}),l(s,{label:"API \u77ED\u4FE1\u7F16\u53F7"},{default:u(()=>[d(t(e(a).apiSerialNo),1)]),_:1}),l(s,{label:"API \u8BF7\u6C42\u7F16\u53F7"},{default:u(()=>[d(t(e(a).apiRequestId),1)]),_:1}),l(s,{label:"API \u63A5\u6536\u72B6\u6001"},{default:u(()=>[l(p,{type:e(i).SYSTEM_SMS_RECEIVE_STATUS,value:e(a).receiveStatus},null,8,["type","value"]),d(" "+t(e(n)(e(a).receiveTime)),1)]),_:1}),l(s,{label:"API \u63A5\u6536\u7ED3\u679C"},{default:u(()=>[d(t(e(a).apiReceiveCode)+" | "+t(e(a).apiReceiveMsg),1)]),_:1})]),_:1})]),_:1},8,["modelValue"])}}});export{x as _};