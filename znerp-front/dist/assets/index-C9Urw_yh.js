import{bt as t}from"./index-CIfmhqRC.js";const s=async a=>await t.get({url:"/bpm/task/todo-page",params:a}),e=async a=>await t.get({url:"/bpm/task/done-page",params:a}),r=async a=>await t.get({url:"/bpm/task/manager-page",params:a}),p=async a=>await t.put({url:"/bpm/task/approve",data:a}),n=async a=>await t.put({url:"/bpm/task/reject",data:a}),i=async a=>await t.get({url:"/bpm/task/list-by-process-instance-id?processInstanceId="+a}),u=async a=>await t.get({url:"/bpm/task/list-by-return",params:{id:a}}),c=async a=>await t.put({url:"/bpm/task/return",data:a}),m=async a=>await t.put({url:"/bpm/task/delegate",data:a}),l=async a=>await t.put({url:"/bpm/task/transfer",data:a}),b=async a=>await t.put({url:"/bpm/task/create-sign",data:a}),d=async a=>await t.delete({url:"/bpm/task/delete-sign",data:a}),y=async a=>await t.get({url:"/bpm/task/list-by-parent-task-id?parentTaskId="+a});export{p as a,u as b,c,m as d,y as e,d as f,i as g,e as h,r as i,s as j,n as r,b as s,l as t};