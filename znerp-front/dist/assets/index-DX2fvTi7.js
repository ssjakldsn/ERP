import{bt as t}from"./index-CIfmhqRC.js";const d=async a=>await t.get({url:"/bpm/model/page",params:a}),p=async a=>await t.get({url:"/bpm/model/get?id="+a}),l=async a=>await t.put({url:"/bpm/model/update",data:a}),m=async(a,e)=>{const s={id:a,state:e};return await t.put({url:"/bpm/model/update-state",data:s})},o=async a=>await t.post({url:"/bpm/model/create",data:a}),r=async a=>await t.delete({url:"/bpm/model/delete?id="+a}),u=async a=>await t.post({url:"/bpm/model/deploy?id="+a});export{d as a,m as b,o as c,r as d,u as e,p as g,l as u};