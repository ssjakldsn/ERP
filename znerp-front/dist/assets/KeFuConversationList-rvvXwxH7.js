import{bt as C,d as X,z as A,V as $,r as u,a3 as b,ar as G,O as H,o as w,c as k,F as N,p as W,W as q,a as n,a$ as m,g as a,f as l,w as B,t as D,y as f,a4 as g,x,at as J,ei as Q,H as Z,_ as ee}from"./index-CIfmhqRC.js";import{E as ae}from"./el-avatar-Cbg-oQZd.js";import{u as se}from"./emoji-B3TTaVnW.js";import{c as te}from"./formatTime-DFFN_xWx.js";import{K as i}from"./constants-CD8mqZTg.js";const ne=async()=>await C.get({url:"/promotion/kefu-conversation/list"}),ie=async d=>await C.put({url:"/promotion/kefu-conversation/update-conversation-pinned",data:d}),oe=async d=>await C.delete({url:`/promotion/kefu-conversation/delete?id=${d}`}),le={class:"kefu"},ce=["onClick","onContextmenu"],re={class:"flex justify-center items-center w-100%"},ue={class:"flex justify-center items-center w-50px h-50px"},me={class:"ml-10px w-100%"},de={class:"flex justify-between items-center w-100%"},pe={class:"username"},ve={class:"color-[var(--left-menu-text-color)]",style:{"font-size":"13px"}},fe={class:"last-message flex items-center color-[var(--left-menu-text-color)]"},xe=ee(X({name:"KeFuConversationList",__name:"KeFuConversationList",emits:["change"],setup(d,{expose:L,emit:O}){const E=A(),j=$(),{replaceEmoji:I}=se(),M=u([]),h=u(-1),z=b(()=>j.getCollapse),y=async()=>{const s=await ne();s.sort((t,Y)=>t.adminPinned?-1:1),M.value=s};L({getConversationList:y});const F=O,K=b(()=>(s,t)=>{switch(s){case i.SYSTEM:return"[\u7CFB\u7EDF\u6D88\u606F]";case i.VIDEO:return"[\u89C6\u9891\u6D88\u606F]";case i.IMAGE:return"[\u56FE\u7247\u6D88\u606F]";case i.PRODUCT:return"[\u5546\u54C1\u6D88\u606F]";case i.ORDER:return"[\u8BA2\u5355\u6D88\u606F]";case i.VOICE:return"[\u8BED\u97F3\u6D88\u606F]";case i.TEXT:return I(t);default:return""}}),p=u(!1),P=u({}),c=u({}),r=()=>{p.value=!1},T=async s=>{await ie({id:c.value.id,adminPinned:s}),E.notifySuccess(s?"\u7F6E\u9876\u6210\u529F":"\u53D6\u6D88\u7F6E\u9876\u6210\u529F"),r(),await y()},R=async()=>{await E.confirm("\u60A8\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u4F1A\u8BDD\u5417\uFF1F"),await oe(c.value.id),r(),await y()};return G(p,s=>{s?document.body.addEventListener("click",r):document.body.removeEventListener("click",r)}),(s,t)=>{const Y=ae,S=Q,v=Z,U=H("dompurify-html");return w(),k("div",le,[(w(!0),k(N,null,W(n(M),e=>(w(),k("div",{key:e.id,class:q([{active:e.id===n(h),pinned:e.adminPinned},"kefu-conversation flex items-center"]),onClick:_=>(o=>{h.value=o.id,F("change",o)})(e),onContextmenu:m(_=>((o,V)=>{c.value=V,p.value=!0,P.value={top:o.clientY-110+"px",left:z.value?o.clientX-80+"px":o.clientX-210+"px"}})(_,e),["prevent"])},[a("div",re,[a("div",ue,[l(S,{hidden:e.adminUnreadMessageCount===0,max:99,value:e.adminUnreadMessageCount},{default:B(()=>[l(Y,{src:e.userAvatar,alt:"avatar"},null,8,["src"])]),_:2},1032,["hidden","value"])]),a("div",me,[a("div",de,[a("span",pe,D(e.userNickname),1),a("span",ve,D(n(te)(e.lastMessageTime,"YYYY-MM-DD")),1)]),f(a("div",fe,null,512),[[U,n(K)(e.lastMessageContentType,e.lastMessageContent)]])])])],42,ce))),128)),f(a("ul",{style:J(n(P)),class:"right-menu-ul"},[f(a("li",{class:"flex items-center",onClick:t[0]||(t[0]=m(e=>T(!0),["stop"]))},[l(v,{class:"mr-5px",icon:"ep:top"}),x(" \u7F6E\u9876\u4F1A\u8BDD ")],512),[[g,!n(c).adminPinned]]),f(a("li",{class:"flex items-center",onClick:t[1]||(t[1]=m(e=>T(!1),["stop"]))},[l(v,{class:"mr-5px",icon:"ep:bottom"}),x(" \u53D6\u6D88\u7F6E\u9876 ")],512),[[g,n(c).adminPinned]]),a("li",{class:"flex items-center",onClick:m(R,["stop"])},[l(v,{class:"mr-5px",color:"red",icon:"ep:delete"}),x(" \u5220\u9664\u4F1A\u8BDD ")]),a("li",{class:"flex items-center",onClick:m(r,["stop"])},[l(v,{class:"mr-5px",color:"red",icon:"ep:close"}),x(" \u53D6\u6D88 ")])],4),[[g,n(p)]])])}}}),[["__scopeId","data-v-f5d6577f"]]);export{xe as default};