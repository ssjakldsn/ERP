import{bt as t}from"./index-CIfmhqRC.js";const c=async a=>await t.get({url:"/crm/contact/page",params:a}),s=async a=>await t.get({url:"/crm/contact/page-by-customer",params:a}),e=async a=>await t.get({url:"/crm/contact/page-by-business",params:a}),r=async a=>await t.get({url:"/crm/contact/get?id="+a}),n=async a=>await t.post({url:"/crm/contact/create",data:a}),l=async a=>await t.put({url:"/crm/contact/update",data:a}),i=async a=>await t.delete({url:"/crm/contact/delete?id="+a}),o=async a=>await t.download({url:"/crm/contact/export-excel",params:a}),u=async()=>await t.get({url:"/crm/contact/simple-all-list"}),m=async a=>await t.post({url:"/crm/contact/create-business-list",data:a}),d=async a=>await t.post({url:"/crm/contact/create-business-list2",data:a}),p=async a=>await t.delete({url:"/crm/contact/delete-business-list",data:a}),y=async a=>await t.delete({url:"/crm/contact/delete-business-list2",data:a}),w=async a=>await t.put({url:"/crm/contact/transfer",data:a});export{r as a,u as b,n as c,e as d,d as e,y as f,s as g,m as h,p as i,c as j,i as k,o as l,w as t,l as u};