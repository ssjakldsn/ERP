import m from"./OrderItem-Bpiqn_Aj.js";import{e as i}from"./index-DDOznnSc.js";import{c}from"./concat-BmzGRl5v.js";import{d,r as l,e as g,a3 as v,o as u,c as y,p as f,q as w,a as x,F as H}from"./index-CIfmhqRC.js";const I=d({name:"OrderBrowsingHistory",__name:"OrderBrowsingHistory",setup(N,{expose:n}){const r=l([]),e=l(0),a=g({pageNo:1,pageSize:10,userId:0}),p=v(()=>e.value>0&&Math.ceil(e.value/a.pageSize)===a.pageNo);return n({getHistoryList:async s=>{a.userId=s.userId;const o=await i(a);e.value=o.total,r.value=o.list},loadMore:async()=>{if(p.value)return;a.pageNo+=1;const s=await i(a);e.value=s.total,c(r.value,s.list)}}),(s,o)=>(u(!0),y(H,null,f(x(r),t=>(u(),w(m,{key:t.id,order:t,class:"mb-10px"},null,8,["order"]))),128))}});export{I as _};