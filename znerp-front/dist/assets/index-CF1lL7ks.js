import{bt as e}from"./index-CIfmhqRC.js";const r=a=>e.get({url:"/infra/config/page",params:a}),t=a=>e.get({url:"/infra/config/get?id="+a}),i=a=>e.get({url:"/infra/config/get-value-by-key?key="+a}),n=a=>e.post({url:"/infra/config/create",data:a}),f=a=>e.put({url:"/infra/config/update",data:a}),o=a=>e.delete({url:"/infra/config/delete?id="+a}),g=a=>e.download({url:"/infra/config/export",params:a});export{r as a,i as b,n as c,o as d,g as e,t as g,f as u};
