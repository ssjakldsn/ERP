import{d as h,r as d,e as b,n as v,o as p,c as _,f as a,w as s,a as n,y as k,q as A,F,en as q,K as C,L as P,M as R}from"./index-CIfmhqRC.js";import{E}from"./el-card-DyMugU68.js";import{E as I}from"./el-skeleton-item-Dm6LwaUQ.js";import{_ as L}from"./Echart.vue_vue_type_script_setup_true_lang-C-1NoClp.js";import{S as j}from"./rank-DmDJ--L4.js";const D=h({name:"FollowCountRank",__name:"FollowCountRank",props:{queryParams:{}},setup(u,{expose:c}){const g=u,e=d(!1),i=d([]),t=b({dataset:{dimensions:["nickname","count"],source:[]},grid:{left:20,right:20,bottom:20,containLabel:!0},legend:{top:50},series:[{name:"\u8DDF\u8FDB\u6B21\u6570\u6392\u884C",type:"bar"}],toolbox:{feature:{dataZoom:{yAxisIndex:!1},brush:{type:["lineX","clear"]},saveAsImage:{show:!0,name:"\u8DDF\u8FDB\u6B21\u6570\u6392\u884C"}}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"value",name:"\u8DDF\u8FDB\u6B21\u6570\uFF08\u6B21\uFF09"},yAxis:{type:"category",name:"\u5458\u5DE5"}}),l=async()=>{e.value=!0;const r=await j.getFollowCountRank(g.queryParams);t.dataset&&t.dataset.source&&(t.dataset.source=q(r).reverse()),i.value=r,e.value=!1};return c({loadData:l}),v(()=>{l()}),(r,K)=>{const w=L,x=I,m=E,o=C,y=P,f=R;return p(),_(F,null,[a(m,{shadow:"never"},{default:s(()=>[a(x,{loading:n(e),animated:""},{default:s(()=>[a(w,{height:500,options:n(t)},null,8,["options"])]),_:1},8,["loading"])]),_:1}),a(m,{shadow:"never",class:"mt-16px"},{default:s(()=>[k((p(),A(y,{data:n(i)},{default:s(()=>[a(o,{label:"\u516C\u53F8\u6392\u540D",align:"center",type:"index",width:"80"}),a(o,{label:"\u5458\u5DE5",align:"center",prop:"nickname","min-width":"200"}),a(o,{label:"\u90E8\u95E8",align:"center",prop:"deptName","min-width":"200"}),a(o,{label:"\u8DDF\u8FDB\u6B21\u6570\uFF08\u6B21\uFF09",align:"center",prop:"count","min-width":"200"})]),_:1},8,["data"])),[[f,n(e)]])]),_:1})],64)}}});export{D as _};
