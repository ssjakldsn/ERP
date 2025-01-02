import{d as W,r as m,e as q,n as z,o as h,c as D,f as e,w as t,x as v,a as l,y as I,q as T,D as j,F as k,I as A,aW as L,E as M,j as N,K as U,L as K,M as O}from"./index-CIfmhqRC.js";import{_ as R}from"./DictTag.vue_vue_type_script_lang-CTpVFm77.js";import{E as V}from"./el-card-DyMugU68.js";import{E as Y}from"./el-skeleton-item-Dm6LwaUQ.js";import{_ as G}from"./Echart.vue_vue_type_script_setup_true_lang-C-1NoClp.js";import{S as _}from"./funnel-DvnBhkJI.js";const H=W({name:"FunnelBusiness",__name:"FunnelBusiness",props:{queryParams:{}},setup(g,{expose:S}){const d=g,p=m(!0),u=m(!1),f=m([]),n=q({title:{text:"\u9500\u552E\u6F0F\u6597"},tooltip:{trigger:"item",formatter:"{a} <br/>{b}"},toolbox:{feature:{dataView:{readOnly:!1},restore:{},saveAsImage:{}}},legend:{data:["\u5BA2\u6237","\u5546\u673A","\u8D62\u5355"]},series:[{name:"\u9500\u552E\u6F0F\u6597",type:"funnel",left:"10%",top:60,bottom:60,width:"80%",min:0,max:100,minSize:"0%",maxSize:"100%",sort:"descending",gap:2,label:{show:!0,position:"inside"},labelLine:{length:10,lineStyle:{width:1,type:"solid"}},itemStyle:{borderColor:"#fff",borderWidth:1},emphasis:{label:{fontSize:20}},data:[{value:60,name:"\u5BA2\u6237-0\u4E2A"},{value:40,name:"\u5546\u673A-0\u4E2A"},{value:20,name:"\u8D62\u5355-0\u4E2A"}]}]}),b=async a=>{p.value=a,await o()},o=async()=>{u.value=!0;const a=await _.getFunnelSummary(d.queryParams);if(a&&n.series&&n.series[0]&&n.series[0].data){const s=[];p.value?(s.push({value:60,name:`\u5BA2\u6237-${a.customerCount||0}\u4E2A`}),s.push({value:40,name:`\u5546\u673A-${a.businessCount||0}\u4E2A`}),s.push({value:20,name:`\u8D62\u5355-${a.businessWinCount||0}\u4E2A`})):(s.push({value:a.customerCount||0,name:`\u5BA2\u6237-${a.customerCount||0}\u4E2A`}),s.push({value:a.businessCount||0,name:`\u5546\u673A-${a.businessCount||0}\u4E2A`}),s.push({value:a.businessWinCount||0,name:`\u8D62\u5355-${a.businessWinCount||0}\u4E2A`})),n.series[0].data=s}f.value=await _.getBusinessSummaryByEndStatus(d.queryParams),u.value=!1};return S({loadData:o}),z(()=>{o()}),(a,s)=>{const c=A,w=L,C=G,x=Y,E=M,$=N,y=V,i=U,B=R,F=K,P=O;return h(),D(k,null,[e(y,{shadow:"never"},{default:t(()=>[e($,null,{default:t(()=>[e(E,{span:24},{default:t(()=>[e(w,{class:"mb-10px"},{default:t(()=>[e(c,{type:"primary",onClick:s[0]||(s[0]=r=>b(!0))},{default:t(()=>[v("\u5BA2\u6237\u89C6\u89D2")]),_:1}),e(c,{type:"primary",onClick:s[1]||(s[1]=r=>b(!1))},{default:t(()=>[v("\u52A8\u6001\u89C6\u89D2")]),_:1})]),_:1}),e(x,{loading:l(u),animated:""},{default:t(()=>[e(C,{height:500,options:l(n)},null,8,["options"])]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1}),e(y,{class:"mt-16px",shadow:"never"},{default:t(()=>[I((h(),T(F,{data:l(f)},{default:t(()=>[e(i,{align:"center",label:"\u5E8F\u53F7",type:"index",width:"80"}),e(i,{align:"center",label:"\u9636\u6BB5",prop:"endStatus",width:"200"},{default:t(r=>[e(B,{type:l(j).CRM_BUSINESS_END_STATUS_TYPE,value:r.row.endStatus},null,8,["type","value"])]),_:1}),e(i,{align:"center",label:"\u5546\u673A\u6570","min-width":"200",prop:"businessCount"}),e(i,{align:"center",label:"\u5546\u673A\u603B\u91D1\u989D(\u5143)","min-width":"200",prop:"totalPrice"})]),_:1},8,["data"])),[[P,l(u)]])]),_:1})],64)}}});export{H as _};