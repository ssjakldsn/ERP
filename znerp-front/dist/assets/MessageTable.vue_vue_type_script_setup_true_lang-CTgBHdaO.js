import{d as b,O as E,o as t,c as l,y as c,q as p,w as i,f as o,a as r,x as a,t as u,g as y,K as x,av as U,I as q,L as K,M}from"./index-CIfmhqRC.js";import{_ as I}from"./main.vue_vue_type_script_setup_true_lang-4T-wzdRZ.js";import C from"./main-D-MTREjU.js";import{_ as L}from"./main.vue_vue_type_script_setup_true_lang-rncY1S61.js";import T from"./main-DGKBWtix.js";import V from"./main-q6_374v6.js";import{d as F}from"./formatTime-DFFN_xWx.js";import{M as n}from"./types-VQvH2Qnl.js";const A={key:0},B={key:1},D={key:2},N={key:3},O={key:4},P={key:5},W={key:6},X={key:7},Y={key:8},j={key:9},z={key:10},G={key:11},H={key:12},J={key:13},Q=["href"],R=["src"],S={key:14},Z={key:15},$=["href"],ee={key:16},te={key:17},re={key:18},oe={key:19},le=b({__name:"MessageTable",props:{list:{type:Array,required:!0},loading:{type:Boolean,required:!0}},emits:["send"],setup(m,{emit:v}){const w=m,f=v;return(ae,ie)=>{const s=x,d=U,_=q,k=K,g=E("hasPermi"),h=M;return t(),l("div",null,[c((t(),p(k,{data:w.list},{default:i(()=>[o(s,{label:"\u53D1\u9001\u65F6\u95F4",align:"center",prop:"createTime",width:"180",formatter:r(F)},null,8,["formatter"]),o(s,{label:"\u6D88\u606F\u7C7B\u578B",align:"center",prop:"type",width:"80"}),o(s,{label:"\u53D1\u9001\u65B9",align:"center",prop:"sendFrom",width:"80"},{default:i(e=>[e.row.sendFrom===1?(t(),p(d,{key:0,type:"success"},{default:i(()=>[a("\u7C89\u4E1D")]),_:1})):(t(),p(d,{key:1,type:"info"},{default:i(()=>[a("\u516C\u4F17\u53F7")]),_:1}))]),_:1}),o(s,{label:"\u7528\u6237\u6807\u8BC6",align:"center",prop:"openid",width:"300"}),o(s,{label:"\u5185\u5BB9",prop:"content"},{default:i(e=>[e.row.type===r(n).Event&&e.row.event==="subscribe"?(t(),l("div",A,[o(d,{type:"success"},{default:i(()=>[a("\u5173\u6CE8")]),_:1})])):e.row.type===r(n).Event&&e.row.event==="unsubscribe"?(t(),l("div",B,[o(d,{type:"danger"},{default:i(()=>[a("\u53D6\u6D88\u5173\u6CE8")]),_:1})])):e.row.type===r(n).Event&&e.row.event==="CLICK"?(t(),l("div",D,[o(d,null,{default:i(()=>[a("\u70B9\u51FB\u83DC\u5355")]),_:1}),a(" \u3010"+u(e.row.eventKey)+"\u3011 ",1)])):e.row.type===r(n).Event&&e.row.event==="VIEW"?(t(),l("div",N,[o(d,null,{default:i(()=>[a("\u70B9\u51FB\u83DC\u5355\u94FE\u63A5")]),_:1}),a(" \u3010"+u(e.row.eventKey)+"\u3011 ",1)])):e.row.type===r(n).Event&&e.row.event==="scancode_waitmsg"?(t(),l("div",O,[o(d,null,{default:i(()=>[a("\u626B\u7801\u7ED3\u679C")]),_:1}),a(" \u3010"+u(e.row.eventKey)+"\u3011 ",1)])):e.row.type===r(n).Event&&e.row.event==="scancode_push"?(t(),l("div",P,[o(d,null,{default:i(()=>[a("\u626B\u7801\u7ED3\u679C")]),_:1}),a(" \u3010"+u(e.row.eventKey)+"\u3011 ",1)])):e.row.type===r(n).Event&&e.row.event==="pic_sysphoto"?(t(),l("div",W,[o(d,null,{default:i(()=>[a("\u7CFB\u7EDF\u62CD\u7167\u53D1\u56FE")]),_:1})])):e.row.type===r(n).Event&&e.row.event==="pic_photo_or_album"?(t(),l("div",X,[o(d,null,{default:i(()=>[a("\u62CD\u7167\u6216\u8005\u76F8\u518C")]),_:1})])):e.row.type===r(n).Event&&e.row.event==="pic_weixin"?(t(),l("div",Y,[o(d,null,{default:i(()=>[a("\u5FAE\u4FE1\u76F8\u518C")]),_:1})])):e.row.type===r(n).Event&&e.row.event==="location_select"?(t(),l("div",j,[o(d,null,{default:i(()=>[a("\u9009\u62E9\u5730\u7406\u4F4D\u7F6E")]),_:1})])):e.row.type===r(n).Event?(t(),l("div",z,[o(d,{type:"danger"},{default:i(()=>[a("\u672A\u77E5\u4E8B\u4EF6\u7C7B\u578B")]),_:1})])):e.row.type===r(n).Text?(t(),l("div",G,u(e.row.content),1)):e.row.type===r(n).Voice?(t(),l("div",H,[o(r(C),{url:e.row.mediaUrl,content:e.row.recognition},null,8,["url","content"])])):e.row.type===r(n).Image?(t(),l("div",J,[y("a",{target:"_blank",href:e.row.mediaUrl},[y("img",{src:e.row.mediaUrl,style:{width:"100px"}},null,8,R)],8,Q)])):e.row.type===r(n).Video||e.row.type==="shortvideo"?(t(),l("div",S,[o(r(I),{url:e.row.mediaUrl,style:{"margin-top":"10px"}},null,8,["url"])])):e.row.type===r(n).Link?(t(),l("div",Z,[o(d,null,{default:i(()=>[a("\u94FE\u63A5")]),_:1}),a(" \uFF1A "),y("a",{href:e.row.url,target:"_blank"},u(e.row.title),9,$)])):e.row.type===r(n).Location?(t(),l("div",ee,[o(r(L),{label:e.row.label,"location-y":e.row.locationY,"location-x":e.row.locationX},null,8,["label","location-y","location-x"])])):e.row.type===r(n).Music?(t(),l("div",te,[o(r(T),{title:e.row.title,description:e.row.description,"thumb-media-url":e.row.thumbMediaUrl,"music-url":e.row.musicUrl,"hq-music-url":e.row.hqMusicUrl},null,8,["title","description","thumb-media-url","music-url","hq-music-url"])])):e.row.type===r(n).News?(t(),l("div",re,[o(r(V),{articles:e.row.articles},null,8,["articles"])])):(t(),l("div",oe,[o(d,{type:"danger"},{default:i(()=>[a("\u672A\u77E5\u6D88\u606F\u7C7B\u578B")]),_:1})]))]),_:1}),o(s,{label:"\u64CD\u4F5C",align:"center","class-name":"small-padding fixed-width"},{default:i(e=>[c((t(),p(_,{link:"",type:"primary",onClick:ne=>f("send",e.row.userId)},{default:i(()=>[a(" \u6D88\u606F ")]),_:2},1032,["onClick"])),[[g,["mp:message:send"]]])]),_:1})]),_:1},8,["data"])),[[h,w.loading]])])}}});export{le as _};
