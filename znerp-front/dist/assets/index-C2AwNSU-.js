import{bt as a}from"./index-CIfmhqRC.js";const e=async s=>await a.get({url:"/system/permission/list-role-menus?roleId="+s}),t=async s=>await a.post({url:"/system/permission/assign-role-menu",data:s}),r=async s=>await a.post({url:"/system/permission/assign-role-data-scope",data:s}),i=async s=>await a.get({url:"/system/permission/list-user-roles?userId="+s}),o=async s=>await a.post({url:"/system/permission/assign-user-role",data:s});export{t as a,r as b,i as c,o as d,e as g};
