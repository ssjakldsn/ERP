import{d,ai as s,e as p,ar as u,o as c,q as h,w as o,f as i,a as r}from"./index-CIfmhqRC.js";import{E as x}from"./el-card-DyMugU68.js";import{_ as g}from"./Echart.vue_vue_type_script_setup_true_lang-C-1NoClp.js";import{C as y}from"./CardTitle-CmREB7ye.js";const f=d({name:"MemberStatisticsCard",__name:"TimeSummaryChart",props:{title:s.string.def("").isRequired,value:s.object.isRequired},setup(n){const t=n,e=p({dataset:{dimensions:["time","price"],source:[]},grid:{left:20,right:20,bottom:20,top:80,containLabel:!0},legend:{top:50},series:[{name:"\u91D1\u989D",type:"line",smooth:!0,areaStyle:{}}],toolbox:{feature:{dataZoom:{yAxisIndex:!1},brush:{type:["lineX","clear"]},saveAsImage:{show:!0,name:t.title}}},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},xAxis:{type:"category",boundaryGap:!1,axisTick:{show:!1}},yAxis:{axisTick:{show:!1}}});return u(()=>t.value,a=>{a&&e.dataset&&e.dataset.source&&(e.dataset.source=a)}),(a,b)=>{const m=g,l=x;return c(),h(l,{shadow:"never"},{header:o(()=>[i(r(y),{title:t.title},null,8,["title"])]),default:o(()=>[i(m,{height:300,options:r(e)},null,8,["options"])]),_:1})}}});export{f as _};