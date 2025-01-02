import{bt as k,d as E,r as z,e as w,n as A,o as C,c as j,f as t,w as l,x as r,t as i,a as n,F as L,E as R,j as B,b0 as O}from"./index-CIfmhqRC.js";import{_ as T}from"./Echart.vue_vue_type_script_setup_true_lang-C-1NoClp.js";import{E as I}from"./el-card-DyMugU68.js";import{E as K,a as N}from"./el-descriptions-item-BL6ba85F.js";import{_ as P}from"./index-2RHHZ-Zv.js";import"./echarts-D6KrxhA1.js";const b=()=>k.get({url:"/infra/redis/get-monitor-info"}),U=E({__name:"index",setup(W){const o=z(),u=w({title:{text:"\u5185\u5B58\u4F7F\u7528\u60C5\u51B5",left:"center",show:!0,offsetCenter:[0,"20%"],color:"yellow",fontSize:20},toolbox:{show:!1,feature:{restore:{show:!0},saveAsImage:{show:!0}}},series:[{name:"\u5CF0\u503C",type:"gauge",min:0,max:50,splitNumber:10,color:"#F5C74E",radius:"85%",center:["50%","50%"],startAngle:225,endAngle:-45,axisLine:{lineStyle:{color:[[.2,"#7FFF00"],[.8,"#00FFFF"],[1,"#FF0000"]],width:10}},axisTick:{length:5,lineStyle:{color:"#76D9D7"}},splitLine:{length:20,lineStyle:{color:"#76D9D7"}},axisLabel:{color:"#76D9D7",distance:15,fontSize:15},pointer:{width:7,show:!0},detail:{textStyle:{fontWeight:"normal",fontSize:15,color:"#FFFFFF"},valueAnimation:!0},progress:{show:!0}}]}),m=w({title:{text:"\u547D\u4EE4\u7EDF\u8BA1",left:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{type:"scroll",orient:"vertical",right:30,top:10,bottom:20,data:[],textStyle:{color:"#a1a1a1"}},series:[{name:"\u547D\u4EE4",type:"pie",radius:[20,120],center:["40%","60%"],data:[],roseType:"radius",label:{show:!0},emphasis:{label:{show:!0},itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}),F=async()=>{u.series[0].data=[];try{const d=await b();o.value=d;const _=[],f=[];d.commandStats.forEach(s=>{_.push({name:s.command,value:s.calls}),f.push(s.command)}),m.legend.data=f,m.series[0].data=_}catch{}},v=async()=>{try{const d=await b();o.value=d,u.series[0].detail={show:!0,offsetCenter:[0,"50%"],color:"auto",fontSize:30,formatter:o.value.info.used_memory_human},u.series[0].data[0]={value:o.value.info.used_memory_human,name:"\u5185\u5B58\u6D88\u8017"},console.log(o.value.info),u.tooltip={formatter:"{b} <br/>{a} : "+o.value.info.used_memory_human}}catch{}};return A(()=>{(async()=>{const d=await b();o.value=d})(),F(),v()}),(d,_)=>{const f=P,s=K,x=N,h=I,p=R,g=T,S=B,D=O;return C(),j(L,null,[t(f,{title:"Redis \u7F13\u5B58",url:"https://doc.iocoder.cn/redis-cache/"}),t(f,{title:"\u672C\u5730\u7F13\u5B58",url:"https://doc.iocoder.cn/local-cache/"}),t(D,{height:"calc(100vh - 88px - 40px - 50px)"},{default:l(()=>[t(S,null,{default:l(()=>[t(p,{span:24,class:"card-box",shadow:"hover"},{default:l(()=>[t(h,null,{default:l(()=>[t(x,{title:"\u57FA\u672C\u4FE1\u606F",column:6,border:""},{default:l(()=>[t(s,{label:"Redis\u7248\u672C :"},{default:l(()=>{var e,a;return[r(i((a=(e=n(o))==null?void 0:e.info)==null?void 0:a.redis_version),1)]}),_:1}),t(s,{label:"\u8FD0\u884C\u6A21\u5F0F :"},{default:l(()=>{var e,a;return[r(i(((a=(e=n(o))==null?void 0:e.info)==null?void 0:a.redis_mode)=="standalone"?"\u5355\u673A":"\u96C6\u7FA4"),1)]}),_:1}),t(s,{label:"\u7AEF\u53E3 :"},{default:l(()=>{var e,a;return[r(i((a=(e=n(o))==null?void 0:e.info)==null?void 0:a.tcp_port),1)]}),_:1}),t(s,{label:"\u5BA2\u6237\u7AEF\u6570 :"},{default:l(()=>{var e,a;return[r(i((a=(e=n(o))==null?void 0:e.info)==null?void 0:a.connected_clients),1)]}),_:1}),t(s,{label:"\u8FD0\u884C\u65F6\u95F4(\u5929) :"},{default:l(()=>{var e,a;return[r(i((a=(e=n(o))==null?void 0:e.info)==null?void 0:a.uptime_in_days),1)]}),_:1}),t(s,{label:"\u4F7F\u7528\u5185\u5B58 :"},{default:l(()=>{var e,a;return[r(i((a=(e=n(o))==null?void 0:e.info)==null?void 0:a.used_memory_human),1)]}),_:1}),t(s,{label:"\u4F7F\u7528CPU :"},{default:l(()=>{var e,a,c;return[r(i((e=n(o))!=null&&e.info?parseFloat((c=(a=n(o))==null?void 0:a.info)==null?void 0:c.used_cpu_user_children).toFixed(2):""),1)]}),_:1}),t(s,{label:"\u5185\u5B58\u914D\u7F6E :"},{default:l(()=>{var e,a;return[r(i((a=(e=n(o))==null?void 0:e.info)==null?void 0:a.maxmemory_human),1)]}),_:1}),t(s,{label:"AOF\u662F\u5426\u5F00\u542F :"},{default:l(()=>{var e,a;return[r(i(((a=(e=n(o))==null?void 0:e.info)==null?void 0:a.aof_enabled)=="0"?"\u5426":"\u662F"),1)]}),_:1}),t(s,{label:"RDB\u662F\u5426\u6210\u529F :"},{default:l(()=>{var e,a;return[r(i((a=(e=n(o))==null?void 0:e.info)==null?void 0:a.rdb_last_bgsave_status),1)]}),_:1}),t(s,{label:"Key\u6570\u91CF :"},{default:l(()=>{var e;return[r(i((e=n(o))==null?void 0:e.dbSize),1)]}),_:1}),t(s,{label:"\u7F51\u7EDC\u5165\u53E3/\u51FA\u53E3 :"},{default:l(()=>{var e,a,c,y;return[r(i((a=(e=n(o))==null?void 0:e.info)==null?void 0:a.instantaneous_input_kbps)+"kps/ "+i((y=(c=n(o))==null?void 0:c.info)==null?void 0:y.instantaneous_output_kbps)+"kps ",1)]}),_:1})]),_:1})]),_:1})]),_:1}),t(p,{span:12,class:"mt-3"},{default:l(()=>[t(h,{gutter:12,shadow:"hover"},{default:l(()=>[t(g,{options:n(m),height:420},null,8,["options"])]),_:1})]),_:1}),t(p,{span:12,class:"mt-3"},{default:l(()=>[t(h,{class:"ml-3",gutter:12,shadow:"hover"},{default:l(()=>[t(g,{options:n(u),height:420},null,8,["options"])]),_:1})]),_:1})]),_:1})]),_:1})],64)}}});export{U as default};
