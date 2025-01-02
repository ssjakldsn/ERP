import{_ as I}from"./Echart.vue_vue_type_script_setup_true_lang-C-1NoClp.js";import{d as O,h as D,r as H,e as f,o as P,c as S,f as a,w as s,a as e,g as t,W as n,t as _,F as q,$ as C,H as F,E as M,j as Q,s as x,_ as T}from"./index-CIfmhqRC.js";import{E as U}from"./el-card-DyMugU68.js";import{E as W}from"./el-skeleton-item-Dm6LwaUQ.js";import{_ as B}from"./CountTo.vue_vue_type_script_setup_true_lang-Sjd3MeH7.js";import{p as G,b as J,l as K}from"./echarts-data-9_PMKC1T.js";import"./echarts-D6KrxhA1.js";const L={class:"flex flex-col justify-between"},N={class:"flex flex-col justify-between"},R={class:"flex flex-col justify-between"},V={class:"flex flex-col justify-between"},X=T(O({name:"Home2",__name:"Index2",setup(Y){const{t:m}=D(),d=H(!0),{getPrefixCls:j}=C(),i=j("panel"),g=f(G);let w=f({users:0,messages:0,moneys:0,shoppings:0});const E=async()=>{w=Object.assign(w,{users:102400,messages:81212,moneys:9280,shoppings:13600})},A=async()=>{const o=[{value:335,name:"analysis.directAccess"},{value:310,name:"analysis.mailMarketing"},{value:234,name:"analysis.allianceAdvertising"},{value:135,name:"analysis.videoAdvertising"},{value:1548,name:"analysis.searchEngines"}];x(g,"legend.data",o.map(l=>m(l.name))),x(g,"series.data",o)},v=f(J),k=async()=>{const o=[{value:13253,name:"analysis.monday"},{value:34235,name:"analysis.tuesday"},{value:26321,name:"analysis.wednesday"},{value:12340,name:"analysis.thursday"},{value:24643,name:"analysis.friday"},{value:1322,name:"analysis.saturday"},{value:1324,name:"analysis.sunday"}];x(v,"xAxis.data",o.map(l=>m(l.name))),x(v,"series",[{name:m("analysis.activeQuantity"),data:o.map(l=>l.value),type:"bar"}])},h=f(K),z=async()=>{const o=[{estimate:100,actual:120,name:"analysis.january"},{estimate:120,actual:82,name:"analysis.february"},{estimate:161,actual:91,name:"analysis.march"},{estimate:134,actual:154,name:"analysis.april"},{estimate:105,actual:162,name:"analysis.may"},{estimate:160,actual:140,name:"analysis.june"},{estimate:165,actual:145,name:"analysis.july"},{estimate:114,actual:250,name:"analysis.august"},{estimate:163,actual:134,name:"analysis.september"},{estimate:185,actual:56,name:"analysis.october"},{estimate:118,actual:99,name:"analysis.november"},{estimate:123,actual:123,name:"analysis.december"}];x(h,"xAxis.data",o.map(l=>m(l.name))),x(h,"series",[{name:m("analysis.estimate"),smooth:!0,type:"line",data:o.map(l=>l.estimate),animationDuration:2800,animationEasing:"cubicInOut"},{name:m("analysis.actual"),smooth:!0,type:"line",itemStyle:{},data:o.map(l=>l.actual),animationDuration:2800,animationEasing:"quadraticOut"}])};return(async()=>(await Promise.all([E(),A(),k(),z()]),d.value=!1))(),(o,l)=>{const p=F,y=B,u=W,c=U,r=M,$=Q,b=I;return P(),S(q,null,[a($,{class:n(e(i)),gutter:20,justify:"space-between"},{default:s(()=>[a(r,{lg:6,md:12,sm:12,xl:6,xs:24},{default:s(()=>[a(c,{class:"mb-20px",shadow:"hover"},{default:s(()=>[a(u,{loading:e(d),rows:2,animated:""},{default:s(()=>[t("div",{class:n(`${e(i)}__item flex justify-between`)},[t("div",null,[t("div",{class:n(`${e(i)}__item--icon ${e(i)}__item--peoples p-16px inline-block rounded-6px`)},[a(p,{size:40,icon:"svg-icon:peoples"})],2)]),t("div",L,[t("div",{class:n(`${e(i)}__item--text text-16px text-gray-500 text-right`)},_(e(m)("analysis.newUser")),3),a(y,{duration:2600,"end-val":102400,"start-val":0,class:"text-right text-20px font-700"})])],2)]),_:1},8,["loading"])]),_:1})]),_:1}),a(r,{lg:6,md:12,sm:12,xl:6,xs:24},{default:s(()=>[a(c,{class:"mb-20px",shadow:"hover"},{default:s(()=>[a(u,{loading:e(d),rows:2,animated:""},{default:s(()=>[t("div",{class:n(`${e(i)}__item flex justify-between`)},[t("div",null,[t("div",{class:n(`${e(i)}__item--icon ${e(i)}__item--message p-16px inline-block rounded-6px`)},[a(p,{size:40,icon:"svg-icon:message"})],2)]),t("div",N,[t("div",{class:n(`${e(i)}__item--text text-16px text-gray-500 text-right`)},_(e(m)("analysis.unreadInformation")),3),a(y,{duration:2600,"end-val":81212,"start-val":0,class:"text-right text-20px font-700"})])],2)]),_:1},8,["loading"])]),_:1})]),_:1}),a(r,{lg:6,md:12,sm:12,xl:6,xs:24},{default:s(()=>[a(c,{class:"mb-20px",shadow:"hover"},{default:s(()=>[a(u,{loading:e(d),rows:2,animated:""},{default:s(()=>[t("div",{class:n(`${e(i)}__item flex justify-between`)},[t("div",null,[t("div",{class:n(`${e(i)}__item--icon ${e(i)}__item--money p-16px inline-block rounded-6px`)},[a(p,{size:40,icon:"svg-icon:money"})],2)]),t("div",R,[t("div",{class:n(`${e(i)}__item--text text-16px text-gray-500 text-right`)},_(e(m)("analysis.transactionAmount")),3),a(y,{duration:2600,"end-val":9280,"start-val":0,class:"text-right text-20px font-700"})])],2)]),_:1},8,["loading"])]),_:1})]),_:1}),a(r,{lg:6,md:12,sm:12,xl:6,xs:24},{default:s(()=>[a(c,{class:"mb-20px",shadow:"hover"},{default:s(()=>[a(u,{loading:e(d),rows:2,animated:""},{default:s(()=>[t("div",{class:n(`${e(i)}__item flex justify-between`)},[t("div",null,[t("div",{class:n(`${e(i)}__item--icon ${e(i)}__item--shopping p-16px inline-block rounded-6px`)},[a(p,{size:40,icon:"svg-icon:shopping"})],2)]),t("div",V,[t("div",{class:n(`${e(i)}__item--text text-16px text-gray-500 text-right`)},_(e(m)("analysis.totalShopping")),3),a(y,{duration:2600,"end-val":13600,"start-val":0,class:"text-right text-20px font-700"})])],2)]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["class"]),a($,{gutter:20,justify:"space-between"},{default:s(()=>[a(r,{lg:10,md:24,sm:24,xl:10,xs:24},{default:s(()=>[a(c,{class:"mb-20px",shadow:"hover"},{default:s(()=>[a(u,{loading:e(d),animated:""},{default:s(()=>[a(b,{height:300,options:e(g)},null,8,["options"])]),_:1},8,["loading"])]),_:1})]),_:1}),a(r,{lg:14,md:24,sm:24,xl:14,xs:24},{default:s(()=>[a(c,{class:"mb-20px",shadow:"hover"},{default:s(()=>[a(u,{loading:e(d),animated:""},{default:s(()=>[a(b,{height:300,options:e(v)},null,8,["options"])]),_:1},8,["loading"])]),_:1})]),_:1}),a(r,{span:24},{default:s(()=>[a(c,{class:"mb-20px",shadow:"hover"},{default:s(()=>[a(u,{loading:e(d),rows:4,animated:""},{default:s(()=>[a(b,{height:350,options:e(h)},null,8,["options"])]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})],64)}}}),[["__scopeId","data-v-66f62258"]]);export{X as default};