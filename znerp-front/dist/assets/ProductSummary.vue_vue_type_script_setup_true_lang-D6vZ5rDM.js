import{d as D,z as q,r as g,e as z,O as Y,o as C,q as S,w as c,g as G,f as a,a as e,y as H,x as O,ey as f,aD as w,ct as X,H as Z,I as J,E as K,j as M}from"./index-CIfmhqRC.js";import{E as N}from"./el-card-DyMugU68.js";import{E as Q}from"./el-skeleton-item-Dm6LwaUQ.js";import{_ as V}from"./Echart.vue_vue_type_script_setup_true_lang-C-1NoClp.js";import{_ as W}from"./index.vue_vue_type_script_setup_true_lang-Q5GCgRyW.js";import{P as h}from"./product-BrLdzF_Q.js";import{_ as p}from"./index.vue_vue_type_script_setup_true_lang-D_t4NQ-2.js";import{d as $}from"./download-D5Lb_h0f.js";import{C as ee}from"./CardTitle-CmREB7ye.js";import{n as te,f as ae}from"./formatTime-DFFN_xWx.js";const oe={class:"flex flex-row items-center justify-between"},le=D({name:"ProductSummary",__name:"ProductSummary",setup(re){const _=q(),b=g(!0),P=g(!1),t=g(),y=g(),v=z({dataset:{dimensions:["time","browseCount","browseUserCount","orderPayPrice","afterSaleRefundPrice"],source:[]},grid:{left:20,right:20,bottom:20,top:80,containLabel:!0},legend:{top:50},series:[{name:"\u5546\u54C1\u6D4F\u89C8\u91CF",type:"line",smooth:!0,itemStyle:{color:"#B37FEB"}},{name:"\u5546\u54C1\u8BBF\u5BA2\u6570",type:"line",smooth:!0,itemStyle:{color:"#FFAB2B"}},{name:"\u652F\u4ED8\u91D1\u989D",type:"bar",smooth:!0,yAxisIndex:1,itemStyle:{color:"#1890FF"}},{name:"\u9000\u6B3E\u91D1\u989D",type:"bar",smooth:!0,yAxisIndex:1,itemStyle:{color:"#00C050"}}],toolbox:{feature:{dataZoom:{yAxisIndex:!1},brush:{type:["lineX","clear"]},saveAsImage:{show:!0,name:"\u5546\u54C1\u72B6\u51B5"}}},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},xAxis:{type:"category",boundaryGap:!0,axisTick:{show:!1}},yAxis:[{type:"value",name:"\u91D1\u989D",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"#7F8B9C"}},splitLine:{show:!0,lineStyle:{color:"#F5F7F9"}}},{type:"value",name:"\u6570\u91CF",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"#7F8B9C"}},splitLine:{show:!0,lineStyle:{color:"#F5F7F9"}}}]}),F=async()=>{b.value=!0;const u=y.value.times;te(u[0],u[1])&&(u[0]=ae(X(u[0]).subtract(1,"d"))),await Promise.all([A(),R()]),b.value=!1},A=async()=>{const u=y.value.times;t.value=await h.getProductStatisticsAnalyse({times:u})},R=async()=>{const u=y.value.times,x=await h.getProductStatisticsList({times:u});for(let m of x)m.orderPayPrice=w(m.orderPayPrice),m.afterSaleRefundPrice=w(m.afterSaleRefundPrice);v.dataset&&v.dataset.source&&(v.dataset.source=x)},k=async()=>{try{await _.exportConfirm(),P.value=!0;const u=y.value.times,x=await h.exportProductStatisticsExcel({times:u});$.excel(x,"\u5546\u54C1\u72B6\u51B5.xls")}catch{}finally{P.value=!1}};return(u,x)=>{const m=Z,L=J,B=W,d=K,E=M,I=V,U=Q,T=N,j=Y("hasPermi");return C(),S(T,{shadow:"never"},{header:c(()=>[G("div",oe,[a(e(ee),{title:"\u5546\u54C1\u6982\u51B5"}),a(B,{ref_key:"shortcutDateRangePicker",ref:y,onChange:F},{default:c(()=>[H((C(),S(L,{class:"ml-4",onClick:k,loading:e(P)},{default:c(()=>[a(m,{icon:"ep:download",class:"mr-1"}),O("\u5BFC\u51FA ")]),_:1},8,["loading"])),[[j,["statistics:product:export"]]])]),_:1},512)])]),default:c(()=>[a(E,{gutter:16},{default:c(()=>[a(d,{xl:4,md:8,sm:24},{default:c(()=>{var o,l,r,i,s,n;return[a(p,{title:"\u5546\u54C1\u6D4F\u89C8\u91CF",tooltip:"\u5728\u9009\u5B9A\u6761\u4EF6\u4E0B\uFF0C\u6240\u6709\u5546\u54C1\u8BE6\u60C5\u9875\u88AB\u8BBF\u95EE\u7684\u6B21\u6570\uFF0C\u4E00\u4E2A\u4EBA\u5728\u7EDF\u8BA1\u65F6\u95F4\u5185\u8BBF\u95EE\u591A\u6B21\u8BB0\u4E3A\u591A\u6B21",icon:"ep:view","icon-color":"bg-blue-100","icon-bg-color":"text-blue-500",prefix:"",decimals:0,value:((l=(o=e(t))==null?void 0:o.value)==null?void 0:l.browseCount)||0,percent:e(f)((i=(r=e(t))==null?void 0:r.value)==null?void 0:i.browseCount,(n=(s=e(t))==null?void 0:s.reference)==null?void 0:n.browseCount)},null,8,["value","percent"])]}),_:1}),a(d,{xl:4,md:8,sm:24},{default:c(()=>{var o,l,r,i,s,n;return[a(p,{title:"\u5546\u54C1\u8BBF\u5BA2\u6570",tooltip:"\u5728\u9009\u5B9A\u6761\u4EF6\u4E0B\uFF0C\u8BBF\u95EE\u4EFB\u4F55\u5546\u54C1\u8BE6\u60C5\u9875\u7684\u4EBA\u6570\uFF0C\u4E00\u4E2A\u4EBA\u5728\u7EDF\u8BA1\u65F6\u95F4\u8303\u56F4\u5185\u8BBF\u95EE\u591A\u6B21\u53EA\u8BB0\u4E3A\u4E00\u4E2A",icon:"ep:user-filled","icon-color":"bg-purple-100","icon-bg-color":"text-purple-500",prefix:"",decimals:0,value:((l=(o=e(t))==null?void 0:o.value)==null?void 0:l.browseUserCount)||0,percent:e(f)((i=(r=e(t))==null?void 0:r.value)==null?void 0:i.browseUserCount,(n=(s=e(t))==null?void 0:s.reference)==null?void 0:n.browseUserCount)},null,8,["value","percent"])]}),_:1}),a(d,{xl:4,md:8,sm:24},{default:c(()=>{var o,l,r,i,s,n;return[a(p,{title:"\u652F\u4ED8\u4EF6\u6570",tooltip:"\u5728\u9009\u5B9A\u6761\u4EF6\u4E0B\uFF0C\u6210\u529F\u4ED8\u6B3E\u8BA2\u5355\u7684\u5546\u54C1\u4EF6\u6570\u4E4B\u548C",icon:"fa-solid:money-check-alt","icon-color":"bg-yellow-100","icon-bg-color":"text-yellow-500",prefix:"",decimals:0,value:((l=(o=e(t))==null?void 0:o.value)==null?void 0:l.orderPayCount)||0,percent:e(f)((i=(r=e(t))==null?void 0:r.value)==null?void 0:i.orderPayCount,(n=(s=e(t))==null?void 0:s.reference)==null?void 0:n.orderPayCount)},null,8,["value","percent"])]}),_:1}),a(d,{xl:4,md:8,sm:24},{default:c(()=>{var o,l,r,i,s,n;return[a(p,{title:"\u652F\u4ED8\u91D1\u989D",tooltip:"\u5728\u9009\u5B9A\u6761\u4EF6\u4E0B\uFF0C\u6210\u529F\u4ED8\u6B3E\u8BA2\u5355\u7684\u5546\u54C1\u91D1\u989D\u4E4B\u548C",icon:"ep:warning-filled","icon-color":"bg-green-100","icon-bg-color":"text-green-500",prefix:"\uFFE5",decimals:2,value:e(w)(((l=(o=e(t))==null?void 0:o.value)==null?void 0:l.orderPayPrice)||0),percent:e(f)((i=(r=e(t))==null?void 0:r.value)==null?void 0:i.orderPayPrice,(n=(s=e(t))==null?void 0:s.reference)==null?void 0:n.orderPayPrice)},null,8,["value","percent"])]}),_:1}),a(d,{xl:4,md:8,sm:24},{default:c(()=>{var o,l,r,i,s,n;return[a(p,{title:"\u9000\u6B3E\u4EF6\u6570",tooltip:"\u5728\u9009\u5B9A\u6761\u4EF6\u4E0B\uFF0C\u6210\u529F\u9000\u6B3E\u7684\u5546\u54C1\u4EF6\u6570\u4E4B\u548C",icon:"fa-solid:wallet","icon-color":"bg-cyan-100","icon-bg-color":"text-cyan-500",prefix:"",decimals:0,value:((l=(o=e(t))==null?void 0:o.value)==null?void 0:l.afterSaleCount)||0,percent:e(f)((i=(r=e(t))==null?void 0:r.value)==null?void 0:i.afterSaleCount,(n=(s=e(t))==null?void 0:s.reference)==null?void 0:n.afterSaleCount)},null,8,["value","percent"])]}),_:1}),a(d,{xl:4,md:8,sm:24},{default:c(()=>{var o,l,r,i,s,n;return[a(p,{title:"\u9000\u6B3E\u91D1\u989D",tooltip:"\u5728\u9009\u5B9A\u6761\u4EF6\u4E0B\uFF0C\u6210\u529F\u9000\u6B3E\u7684\u5546\u54C1\u91D1\u989D\u4E4B\u548C",icon:"fa-solid:award","icon-color":"bg-yellow-100","icon-bg-color":"text-yellow-500",prefix:"\uFFE5",decimals:2,value:e(w)(((l=(o=e(t))==null?void 0:o.value)==null?void 0:l.afterSaleRefundPrice)||0),percent:e(f)((i=(r=e(t))==null?void 0:r.value)==null?void 0:i.afterSaleRefundPrice,(n=(s=e(t))==null?void 0:s.reference)==null?void 0:n.afterSaleRefundPrice)},null,8,["value","percent"])]}),_:1})]),_:1}),a(U,{loading:e(b),animated:""},{default:c(()=>[a(I,{height:500,options:e(v)},null,8,["options"])]),_:1},8,["loading"])]),_:1})}}});export{le as _};