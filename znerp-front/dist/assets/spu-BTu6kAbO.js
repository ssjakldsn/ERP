import{bt as u}from"./index-CIfmhqRC.js";const a=t=>u.get({url:"/product/spu/page",params:t}),s=()=>u.get({url:"/product/spu/get-count"}),p=t=>u.post({url:"/product/spu/create",data:t}),r=t=>u.put({url:"/product/spu/update",data:t}),d=t=>u.put({url:"/product/spu/update-status",data:t}),e=t=>u.get({url:`/product/spu/get-detail?id=${t}`}),l=t=>u.get({url:`/product/spu/list?spuIds=${t}`}),o=t=>u.delete({url:`/product/spu/delete?id=${t}`}),c=async t=>await u.download({url:"/product/spu/export",params:t}),g=async()=>u.get({url:"/product/spu/list-all-simple"});export{s as a,l as b,p as c,a as d,d as e,o as f,e as g,c as h,g as i,r as u};