import{bt as t}from"./index-CIfmhqRC.js";const o=async a=>await t.get({url:"/promotion/article-category/page",params:a}),r=async()=>await t.get({url:"/promotion/article-category/list-all-simple"}),e=async a=>await t.get({url:"/promotion/article-category/get?id="+a}),i=async a=>await t.post({url:"/promotion/article-category/create",data:a}),c=async a=>await t.put({url:"/promotion/article-category/update",data:a}),l=async a=>await t.delete({url:"/promotion/article-category/delete?id="+a});export{e as a,o as b,i as c,l as d,r as g,c as u};