import{bt as t}from"./index-CIfmhqRC.js";const r=async a=>await t.post({url:"/pay/transfer/create",data:a}),s=async a=>await t.get({url:"/pay/transfer/page",params:a}),e=async a=>await t.get({url:"/pay/transfer/get?id="+a});export{s as a,r as c,e as g};