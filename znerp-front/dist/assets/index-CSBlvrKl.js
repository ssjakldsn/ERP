import{bt as e}from"./index-CIfmhqRC.js";const s=async a=>await e.get({url:"/system/role/page",params:a}),t=async()=>await e.get({url:"/system/role/simple-list"}),r=async a=>await e.get({url:"/system/role/get?id="+a}),l=async a=>await e.post({url:"/system/role/create",data:a}),o=async a=>await e.put({url:"/system/role/update",data:a}),y=async a=>await e.delete({url:"/system/role/delete?id="+a}),m=a=>e.download({url:"/system/role/export-excel",params:a});export{r as a,s as b,l as c,y as d,m as e,t as g,o as u};
