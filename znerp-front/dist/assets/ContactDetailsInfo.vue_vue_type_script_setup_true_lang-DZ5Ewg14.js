import{_ as x}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{d as I,r as y,o as E,q as T,w as a,f as e,x as o,t as c,a as n,D as r,k as v,g as b}from"./index-CIfmhqRC.js";import{E as S,a as q}from"./el-collapse-item-BgajxfOI.js";import{E as w,a as A}from"./el-descriptions-item-BL6ba85F.js";import{_ as L}from"./DictTag.vue_vue_type_script_lang-CTpVFm77.js";import{f as s}from"./formatTime-DFFN_xWx.js";const R=b("span",{class:"text-base font-bold"},"\u57FA\u672C\u4FE1\u606F",-1),U=b("span",{class:"text-base font-bold"},"\u7CFB\u7EDF\u4FE1\u606F",-1),V=I({__name:"ContactDetailsInfo",props:{contact:{}},setup(g){const u=y(["basicInfo","systemInfo"]);return(t,f)=>{const l=w,d=L,m=A,_=S,p=q,i=x;return E(),T(i,null,{default:a(()=>[e(p,{modelValue:n(u),"onUpdate:modelValue":f[0]||(f[0]=N=>v(u)?u.value=N:null)},{default:a(()=>[e(_,{name:"basicInfo"},{title:a(()=>[R]),default:a(()=>[e(m,{column:4},{default:a(()=>[e(l,{label:"\u59D3\u540D"},{default:a(()=>[o(c(t.contact.name),1)]),_:1}),e(l,{label:"\u5BA2\u6237\u540D\u79F0"},{default:a(()=>[o(c(t.contact.customerName),1)]),_:1}),e(l,{label:"\u624B\u673A"},{default:a(()=>[o(c(t.contact.mobile),1)]),_:1}),e(l,{label:"\u7535\u8BDD"},{default:a(()=>[o(c(t.contact.telephone),1)]),_:1}),e(l,{label:"\u90AE\u7BB1"},{default:a(()=>[o(c(t.contact.email),1)]),_:1}),e(l,{label:"QQ"},{default:a(()=>[o(c(t.contact.qq),1)]),_:1}),e(l,{label:"\u5FAE\u4FE1"},{default:a(()=>[o(c(t.contact.wechat),1)]),_:1}),e(l,{label:"\u5730\u5740"},{default:a(()=>[o(c(t.contact.areaName)+" "+c(t.contact.detailAddress),1)]),_:1}),e(l,{label:"\u804C\u52A1"},{default:a(()=>[o(c(t.contact.post),1)]),_:1}),e(l,{label:"\u76F4\u5C5E\u4E0A\u7EA7"},{default:a(()=>[o(c(t.contact.parentName),1)]),_:1}),e(l,{label:"\u5173\u952E\u51B3\u7B56\u4EBA"},{default:a(()=>[e(d,{type:n(r).INFRA_BOOLEAN_STRING,value:t.contact.master},null,8,["type","value"])]),_:1}),e(l,{label:"\u6027\u522B"},{default:a(()=>[e(d,{type:n(r).SYSTEM_USER_SEX,value:t.contact.sex},null,8,["type","value"])]),_:1}),e(l,{label:"\u4E0B\u6B21\u8054\u7CFB\u65F6\u95F4"},{default:a(()=>[o(c(n(s)(t.contact.contactNextTime)),1)]),_:1}),e(l,{label:"\u5907\u6CE8"},{default:a(()=>[o(c(t.contact.remark),1)]),_:1})]),_:1})]),_:1}),e(_,{name:"systemInfo"},{title:a(()=>[U]),default:a(()=>[e(m,{column:4},{default:a(()=>[e(l,{label:"\u8D1F\u8D23\u4EBA"},{default:a(()=>[o(c(t.contact.ownerUserName),1)]),_:1}),e(l,{label:"\u6700\u540E\u8DDF\u8FDB\u8BB0\u5F55"},{default:a(()=>[o(c(t.contact.contactLastContent),1)]),_:1}),e(l,{label:"\u6700\u540E\u8DDF\u8FDB\u65F6\u95F4"},{default:a(()=>[o(c(n(s)(t.contact.contactLastTime)),1)]),_:1}),e(l,{label:""},{default:a(()=>[o("\xA0")]),_:1}),e(l,{label:"\u521B\u5EFA\u4EBA"},{default:a(()=>[o(c(t.contact.creatorName),1)]),_:1}),e(l,{label:"\u521B\u5EFA\u65F6\u95F4"},{default:a(()=>[o(c(n(s)(t.contact.createTime)),1)]),_:1}),e(l,{label:"\u66F4\u65B0\u65F6\u95F4"},{default:a(()=>[o(c(n(s)(t.contact.updateTime)),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}});export{V as _};