import{b8 as p,bh as r,d as t,bY as u,ba as c,a3 as m,bL as o,o as b,q as d,w as y,aT as f,W as g,a as v,at as x,a_ as S,bb as _,bc as w}from"./index-CIfmhqRC.js";const C=p({type:{type:String,values:["primary","success","info","warning","danger",""],default:""},size:{type:String,values:r,default:""},truncated:Boolean,lineClamp:{type:[String,Number]},tag:{type:String,default:"span"}}),E=t({name:"ElText"}),T=w(_(t({...E,props:C,setup(l){const s=l,n=u(),a=c("text"),i=m(()=>[a.b(),a.m(s.type),a.m(n.value),a.is("truncated",s.truncated),a.is("line-clamp",!o(s.lineClamp))]);return(e,h)=>(b(),d(S(e.tag),{class:g(v(i)),style:x({"-webkit-line-clamp":e.lineClamp})},{default:y(()=>[f(e.$slots,"default")]),_:3},8,["class","style"]))}}),[["__file","text.vue"]]));export{T as E};
