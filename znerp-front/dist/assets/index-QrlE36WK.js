import{bt as t}from"./index-CIfmhqRC.js";const r=s=>t.get({url:"/system/user/page",params:s}),u=s=>t.get({url:"/system/user/get?id="+s}),d=s=>t.post({url:"/system/user/create",data:s}),p=s=>t.put({url:"/system/user/update",data:s}),l=s=>t.delete({url:"/system/user/delete?id="+s}),m=s=>t.download({url:"/system/user/export",params:s}),o=()=>t.download({url:"/system/user/get-import-template"}),y=(s,e)=>{const a={id:s,password:e};return t.put({url:"/system/user/update-password",data:a})},i=(s,e)=>{const a={id:s,status:e};return t.put({url:"/system/user/update-status",data:a})},g=()=>t.get({url:"/system/user/simple-list"});export{u as a,r as b,d as c,i as d,m as e,l as f,g,o as i,y as r,p as u};