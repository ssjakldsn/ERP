import{bt as a}from"./index-CIfmhqRC.js";const i=async t=>await a.get({url:"/promotion/seckill-activity/page",params:t}),o=t=>a.get({url:`/promotion/seckill-activity/list-by-ids?ids=${t}`}),s=async t=>await a.get({url:"/promotion/seckill-activity/get?id="+t}),l=async t=>await a.post({url:"/promotion/seckill-activity/create",data:t}),c=async t=>await a.put({url:"/promotion/seckill-activity/update",data:t}),e=async t=>await a.put({url:"/promotion/seckill-activity/close?id="+t}),r=async t=>await a.delete({url:"/promotion/seckill-activity/delete?id="+t});export{i as a,e as b,l as c,r as d,o as e,s as g,c as u};