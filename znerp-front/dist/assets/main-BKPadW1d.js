import{d as x,a3 as U,r as T,ar as h,a as m,o as I,q as M,w as a,f as e,x as s,k as r,H as N,j,l as R,m as k,_ as q}from"./index-CIfmhqRC.js";import{N as H,R as i,c as _,T as P}from"./TabNews-7oV1NnBl.js";import{_ as S}from"./TabText.vue_vue_type_script_setup_true_lang-56KExiTN.js";import W from"./TabImage-E636bkCf.js";import z from"./TabVoice-Dqn1wB6g.js";import A from"./TabVideo-C4oWHYiJ.js";import{_ as B}from"./TabMusic.vue_vue_type_script_setup_true_lang-YMp3hNn3.js";import"./main-q6_374v6.js";import"./el-image-DLpquQe6.js";import"./main-CfsIYUE7.js";import"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import"./index-CrBeVHKs.js";import"./main-D-MTREjU.js";import"./main.vue_vue_type_script_setup_true_lang-4T-wzdRZ.js";import"./index-B3YA5cCI.js";import"./index-DO3zXEBC.js";import"./formatTime-DFFN_xWx.js";import"./useUpload-Dugldi2L.js";const C=q(x({name:"WxReplySelect",__name:"main",props:{modelValue:{},newsType:{default:()=>H.Published}},emits:["update:modelValue"],setup(v,{expose:g,emit:b}){const f=v,w=b,l=U({get:()=>f.modelValue,set:n=>w("update:modelValue",n)}),c=new Map,V=T(f.modelValue.type||i.Text);return h(V,(n,o)=>{if(o===void 0||n===void 0)return;c.set(o,m(l));const t=c.get(n);if(t)l.value=t;else{let u=_(l);u.type=n,l.value=u}},{immediate:!0}),g({clear:()=>{l.value=_(l)}}),(n,o)=>{const t=N,u=j,p=R,y=k;return I(),M(y,{type:"border-card",modelValue:m(V),"onUpdate:modelValue":o[6]||(o[6]=d=>r(V)?V.value=d:null)},{default:a(()=>[e(p,{name:m(i).Text},{label:a(()=>[e(u,{align:"middle"},{default:a(()=>[e(t,{icon:"ep:document"}),s(" \u6587\u672C")]),_:1})]),default:a(()=>[e(S,{modelValue:m(l).content,"onUpdate:modelValue":o[0]||(o[0]=d=>m(l).content=d)},null,8,["modelValue"])]),_:1},8,["name"]),e(p,{name:m(i).Image},{label:a(()=>[e(u,{align:"middle"},{default:a(()=>[e(t,{icon:"ep:picture",class:"mr-5px"}),s(" \u56FE\u7247")]),_:1})]),default:a(()=>[e(W,{modelValue:m(l),"onUpdate:modelValue":o[1]||(o[1]=d=>r(l)?l.value=d:null)},null,8,["modelValue"])]),_:1},8,["name"]),e(p,{name:m(i).Voice},{label:a(()=>[e(u,{align:"middle"},{default:a(()=>[e(t,{icon:"ep:phone"}),s(" \u8BED\u97F3")]),_:1})]),default:a(()=>[e(z,{modelValue:m(l),"onUpdate:modelValue":o[2]||(o[2]=d=>r(l)?l.value=d:null)},null,8,["modelValue"])]),_:1},8,["name"]),e(p,{name:m(i).Video},{label:a(()=>[e(u,{align:"middle"},{default:a(()=>[e(t,{icon:"ep:share"}),s(" \u89C6\u9891")]),_:1})]),default:a(()=>[e(A,{modelValue:m(l),"onUpdate:modelValue":o[3]||(o[3]=d=>r(l)?l.value=d:null)},null,8,["modelValue"])]),_:1},8,["name"]),e(p,{name:m(i).News},{label:a(()=>[e(u,{align:"middle"},{default:a(()=>[e(t,{icon:"ep:reading"}),s(" \u56FE\u6587")]),_:1})]),default:a(()=>[e(P,{modelValue:m(l),"onUpdate:modelValue":o[4]||(o[4]=d=>r(l)?l.value=d:null),"news-type":n.newsType},null,8,["modelValue","news-type"])]),_:1},8,["name"]),e(p,{name:m(i).Music},{label:a(()=>[e(u,{align:"middle"},{default:a(()=>[e(t,{icon:"ep:service"}),s("\u97F3\u4E50")]),_:1})]),default:a(()=>[e(B,{modelValue:m(l),"onUpdate:modelValue":o[5]||(o[5]=d=>r(l)?l.value=d:null)},null,8,["modelValue"])]),_:1},8,["name"])]),_:1},8,["modelValue"])}}}),[["__scopeId","data-v-1d5dc1ea"]]);export{C as default};