import{d as j,ai as C,z as q,r as i,n as z,ar as B,o as f,q as h,w as e,y as D,a as l,L as E,f as s,k as _,x as c,t as b,aD as K,ak as L,K as M,M as N}from"./index-CIfmhqRC.js";import{_ as A}from"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import{E as F}from"./el-image-DLpquQe6.js";import{g as G}from"./spu-BTu6kAbO.js";const H=j({name:"SkuTableSelect",__name:"SkuTableSelect",props:{spuId:C.number.def(null)},emits:["change"],setup(g,{expose:x,emit:y}){const p=g;q();const w=i([]),m=i(!1),t=i(!1),u=i(),V=y;return x({open:()=>{t.value=!0}}),z(async()=>{}),B(()=>p.spuId,()=>{p.spuId&&(async()=>{m.value=!0;try{const v=await G(p.spuId);w.value=v.skus}finally{m.value=!1}})()}),(v,r)=>{const k=L,n=M,I=F,S=A,U=N;return f(),h(S,{modelValue:l(t),"onUpdate:modelValue":r[1]||(r[1]=a=>_(t)?t.value=a:null),appendToBody:!0,title:"\u9009\u62E9\u89C4\u683C",width:"700"},{default:e(()=>[D((f(),h(l(E),{data:l(w),"show-overflow-tooltip":""},{default:e(()=>[s(n,{label:"#",width:"55"},{default:e(({row:a})=>[s(k,{value:a.id,modelValue:l(u),"onUpdate:modelValue":r[0]||(r[0]=o=>_(u)?u.value=o:null),onChange:o=>(d=>{V("change",d),t.value=!1,u.value=void 0})(a)},{default:e(()=>[c("\xA0 ")]),_:2},1032,["value","modelValue","onChange"])]),_:1}),s(n,{label:"\u56FE\u7247","min-width":"80"},{default:e(({row:a})=>[s(I,{src:a.picUrl,class:"h-30px w-30px","preview-src-list":[a.picUrl],"preview-teleported":""},null,8,["src","preview-src-list"])]),_:1}),s(n,{label:"\u89C4\u683C",align:"center","min-width":"80"},{default:e(({row:a})=>{var o,d;return[c(b((d=(o=a.properties)==null?void 0:o.map(T=>T.valueName))==null?void 0:d.join(" ")),1)]}),_:1}),s(n,{align:"center",label:"\u9500\u552E\u4EF7(\u5143)","min-width":"80"},{default:e(({row:a})=>[c(b(l(K)(a.price)),1)]),_:1})]),_:1},8,["data"])),[[U,l(m)]])]),_:1},8,["modelValue"])}}});export{H as _};
