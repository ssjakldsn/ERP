import{bt as e}from"./index-CIfmhqRC.js";const t=s=>e.get({url:"/system/sms-template/page",params:s}),a=s=>e.get({url:"/system/sms-template/get?id="+s}),m=s=>e.post({url:"/system/sms-template/create",data:s}),l=s=>e.put({url:"/system/sms-template/update",data:s}),p=s=>e.delete({url:"/system/sms-template/delete?id="+s}),r=s=>e.download({url:"/system/sms-template/export-excel",params:s}),d=s=>e.post({url:"/system/sms-template/send-sms",data:s});export{t as a,m as c,p as d,r as e,a as g,d as s,l as u};
