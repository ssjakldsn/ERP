import{d as V,z as W,e4 as j,a3 as m,r as B,ar as C,o as H,q as R,w as t,g as n,y as f,f as o,x as b,a4 as h,a as y,k as T,H as U,I as q,U as E,a0 as A,a1 as D,_ as F}from"./index-CIfmhqRC.js";import{E as G}from"./el-card-DyMugU68.js";const J={class:"m-0 px-7 shrink-0 flex items-center justify-between"},K=(s=>(A("data-v-39dbb5c0"),s=s(),D(),s))(()=>n("span",null,"\u9884\u89C8",-1)),L={class:"w-full min-h-full relative flex-grow bg-white box-border p-3 sm:p-7"},M=F(V({__name:"Right",props:{content:{type:String,default:""},isWriting:{type:Boolean,default:!1}},emits:["update:content","stopStream"],setup(s,{expose:g,emit:x}){const v=W(),{copied:_,copy:w}=j(),l=s,c=x,r=m({get:()=>l.content,set(e){c("update:content",e)}}),i=B();g({scrollToBottom(){var e,a;(a=i.value)==null||a.scrollTo(0,(e=i.value)==null?void 0:e.scrollHeight)}});const z=m(()=>l.content&&!l.isWriting),k=()=>{w(l.content)};return C(_,e=>{e&&v.success("\u590D\u5236\u6210\u529F")}),(e,a)=>{const d=U,u=q,S=E,I=G;return H(),R(I,{class:"my-card h-full"},{header:t(()=>[n("h3",J,[K,f(o(u,{color:"#846af7",onClick:k,size:"small"},{icon:t(()=>[o(d,{icon:"ph:copy-bold"})]),default:t(()=>[b(" \u590D\u5236 ")]),_:1},512),[[h,y(z)]])])]),default:t(()=>[n("div",{ref_key:"contentRef",ref:i,class:"hide-scroll-bar h-full box-border overflow-y-auto"},[n("div",L,[f(o(u,{class:"absolute bottom-2 sm:bottom-5 left-1/2 -translate-x-1/2 z-36",onClick:a[0]||(a[0]=p=>c("stopStream")),size:"small"},{icon:t(()=>[o(d,{icon:"material-symbols:stop"})]),default:t(()=>[b(" \u7EC8\u6B62\u751F\u6210 ")]),_:1},512),[[h,s.isWriting]]),o(S,{id:"inputId",type:"textarea",modelValue:y(r),"onUpdate:modelValue":a[1]||(a[1]=p=>T(r)?r.value=p:null),autosize:"","input-style":{boxShadow:"none"},resize:"none",placeholder:"\u751F\u6210\u7684\u5185\u5BB9\u2026\u2026"},null,8,["modelValue"])])],512)]),_:1})}}}),[["__scopeId","data-v-39dbb5c0"]]);export{M as default};
