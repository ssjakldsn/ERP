import{bt as e}from"./index-CIfmhqRC.js";const c=async a=>await e.get({url:"/crm/receivable-plan/page",params:a}),t=async a=>await e.get({url:"/crm/receivable-plan/page-by-customer",params:a}),l=async a=>await e.get({url:"/crm/receivable-plan/get?id="+a}),s=async(a,r)=>await e.get({url:`/crm/receivable-plan/simple-list?customerId=${a}&contractId=${r}`}),i=async a=>await e.post({url:"/crm/receivable-plan/create",data:a}),n=async a=>await e.put({url:"/crm/receivable-plan/update",data:a}),p=async a=>await e.delete({url:"/crm/receivable-plan/delete?id="+a}),m=async a=>await e.download({url:"/crm/receivable-plan/export-excel",params:a}),u=async()=>await e.get({url:"/crm/receivable-plan/remind-count"});export{s as a,l as b,i as c,p as d,c as e,u as f,t as g,m as h,n as u};
