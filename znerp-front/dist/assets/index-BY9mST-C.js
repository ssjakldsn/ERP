import{bt as t}from"./index-CIfmhqRC.js";const r=(a,p)=>{const e={appId:a,code:p};return t.get({url:"/pay/channel/get",params:e})},n=a=>t.post({url:"/pay/channel/create",data:a}),c=a=>t.put({url:"/pay/channel/update",data:a});export{n as c,r as g,c as u};