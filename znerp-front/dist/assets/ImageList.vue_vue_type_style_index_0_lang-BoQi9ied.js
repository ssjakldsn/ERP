import{d as A,z as B,u as U,e as q,r as o,n as G,bo as D,o as y,c as _,f as m,w,x as R,g as N,F as x,p as F,a as l,q as H,ab as X,I as Z}from"./index-CIfmhqRC.js";import{E as J}from"./el-card-DyMugU68.js";import{_ as K}from"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import{I as g}from"./index-CPjFT88E.js";import Q from"./ImageDetail-BLoTTat3.js";import T from"./ImageCard-D6BgTkhG.js";import{A as E}from"./constants-PZ18_Kze.js";import{d as V}from"./download-D5Lb_h0f.js";const W={class:"task-image-pagination"},Y=A({__name:"ImageList",emits:["onRegeneration"],setup($,{expose:O,emit:b}){const I=B(),z=U(),n=q({pageNo:1,pageSize:10}),k=o(0),r=o([]),c=o(),h=o(),v=o({}),p=o(),f=o(!1),S=o(0),C=()=>{z.push({name:"AiImageSquare"})},L=async()=>{f.value=!1},u=async()=>{try{c.value=X.service({target:h.value,text:"\u52A0\u8F7D\u4E2D..."});const{list:e,total:a}=await g.getImagePageMy(n);r.value=e,k.value=a;const s={};r.value.forEach(t=>{t.status===E.IN_PROGRESS&&(s[t.id]=t)}),v.value=s}finally{c.value&&(c.value.close(),c.value=null)}},M=async(e,a)=>e==="more"?(S.value=a.id,void await(async()=>{f.value=!0})()):e==="delete"?(await I.confirm("\u662F\u5426\u5220\u9664\u7167\u7247?"),await g.deleteImageMy(a.id),await u(),void I.success("\u5220\u9664\u6210\u529F!")):void(e!=="download"?e!=="regeneration"||await j("onRegeneration",a):await V.image({url:a.picUrl})),P=async(e,a)=>{const s={id:a.id,customId:e.customId};await g.midjourneyAction(s),await u()};O({getImageList:u});const j=b;return G(async()=>{await u(),p.value=setInterval(async()=>{await(async()=>{const e=Object.keys(v.value).map(Number);if(e.length==0)return;const a=await g.getImageListMyByIds(e),s={};a.forEach(t=>{if(t.status===E.IN_PROGRESS)s[t.id]=t;else{const d=r.value.findIndex(i=>t.id===i.id);d>=0&&(r.value[d]=t)}}),v.value=s})()},3e3)}),D(async()=>{p.value&&clearInterval(p.value)}),(e,a)=>{const s=Z,t=K,d=J;return y(),_(x,null,[m(d,{class:"dr-task","body-class":"task-card",shadow:"never"},{header:w(()=>[R(" \u7ED8\u753B\u4EFB\u52A1 "),m(s,{onClick:C},{default:w(()=>[R("\u7ED8\u753B\u4F5C\u54C1")]),_:1})]),default:w(()=>[N("div",{class:"task-image-list",ref_key:"imageListRef",ref:h},[(y(!0),_(x,null,F(l(r),i=>(y(),H(T,{key:i.id,detail:i,onOnBtnClick:M,onOnMjBtnClick:P},null,8,["detail"]))),128))],512),N("div",W,[m(t,{total:l(k),page:l(n).pageNo,"onUpdate:page":a[0]||(a[0]=i=>l(n).pageNo=i),limit:l(n).pageSize,"onUpdate:limit":a[1]||(a[1]=i=>l(n).pageSize=i),onPagination:u},null,8,["total","page","limit"])])]),_:1}),m(Q,{show:l(f),id:l(S),onHandleDrawerClose:L},null,8,["show","id"])],64)}}});export{Y as _};