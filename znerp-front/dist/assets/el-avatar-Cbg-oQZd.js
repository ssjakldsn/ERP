import{b8 as k,bh as z,bi as p,bj as E,b9 as _,d as b,ba as j,r as q,a3 as n,bk as x,bl as w,ar as A,o as c,c as v,at as f,a as i,q as m,w as B,a_ as F,bm as N,aT as T,W as V,bb as W,bc as $}from"./index-CIfmhqRC.js";const C=k({size:{type:[Number,String],values:z,default:"",validator:s=>p(s)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:E},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:_(String),default:"cover"}}),D={error:s=>s instanceof Event},G=b({name:"ElAvatar"}),H=$(W(b({...G,props:C,emits:D,setup(s,{emit:y}){const e=s,t=j("avatar"),l=q(!1),d=n(()=>{const{size:a,icon:o,shape:u}=e,r=[t.b()];return x(a)&&r.push(t.m(a)),o&&r.push(t.m("icon")),u&&r.push(t.m(u)),r}),S=n(()=>{const{size:a}=e;return p(a)?t.cssVarBlock({size:w(a)||""}):void 0}),g=n(()=>({objectFit:e.fit}));function h(a){l.value=!0,y("error",a)}return A(()=>e.src,()=>l.value=!1),(a,o)=>(c(),v("span",{class:V(i(d)),style:f(i(S))},[!a.src&&!a.srcSet||l.value?a.icon?(c(),m(i(N),{key:1},{default:B(()=>[(c(),m(F(a.icon)))]),_:1})):T(a.$slots,"default",{key:2}):(c(),v("img",{key:0,src:a.src,alt:a.alt,srcset:a.srcSet,style:f(i(g)),onError:h},null,44,["src","alt","srcset"]))],6))}}),[["__file","avatar.vue"]]));export{H as E};
