import{bt as t}from"./index-CIfmhqRC.js";const c=async a=>await t.post({url:"/mp/account/create",data:a}),e=async a=>t.put({url:"/mp/account/update",data:a}),s=async a=>t.delete({url:"/mp/account/delete?id="+a,method:"delete"}),u=async a=>t.get({url:"/mp/account/get?id="+a}),n=async a=>t.get({url:"/mp/account/page",params:a}),p=async()=>t.get({url:"/mp/account/list-all-simple"}),l=async a=>t.put({url:"/mp/account/generate-qr-code?id="+a}),o=async a=>t.put({url:"/mp/account/clear-quota?id="+a});export{n as a,l as b,c,s as d,o as e,p as f,u as g,e as u};