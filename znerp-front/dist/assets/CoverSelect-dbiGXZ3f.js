import{d as F,z as S,e8 as W,a3 as A,b4 as E,r as f,e as G,o as m,c as H,g as u,a as e,q as g,W as D,f as i,w as l,x as h,k as J,H as T,I as K,br as L,cG as N,a0 as O,a1 as P,_ as Q}from"./index-CIfmhqRC.js";import{E as R}from"./el-image-DLpquQe6.js";import{W as X}from"./main-CfsIYUE7.js";import{U as b,u as Y}from"./useUpload-Dugldi2L.js";import"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import"./index-CrBeVHKs.js";import"./main-q6_374v6.js";import"./main-D-MTREjU.js";import"./main.vue_vue_type_script_setup_true_lang-4T-wzdRZ.js";import"./index-B3YA5cCI.js";import"./index-DO3zXEBC.js";import"./formatTime-DFFN_xWx.js";const y=s=>(O("data-v-71a48231"),s=s(),P(),s),Z=y(()=>u("p",null,"\u5C01\u9762:",-1)),$={class:"thumb-div"},aa={class:"thumb-but"},ea=y(()=>u("div",{class:"el-upload__tip"},"\u652F\u6301 bmp/png/jpeg/jpg/gif \u683C\u5F0F\uFF0C\u5927\u5C0F\u4E0D\u8D85\u8FC7 2M",-1)),ta=Q(F({__name:"CoverSelect",props:{modelValue:{},isFirst:{type:Boolean}},emits:["update:modelValue"],setup(s,{emit:I}){const d=S(),_={Authorization:"Bearer "+W()},x=s,V=I,t=A({get:()=>x.modelValue,set(a){V("update:modelValue",a)}}),p=E("accountId"),r=f(!1),n=f([]),U=G({type:b.Image,accountId:p}),M=a=>{r.value=!1,t.value.thumbMediaId=a.mediaId,t.value.thumbUrl=a.url},k=a=>Y(b.Image,2)(a),z=a=>{if(a.code!==0)return d.error("\u4E0A\u4F20\u51FA\u9519\uFF1A"+a.msg),!1;n.value=[],t.value.thumbMediaId=a.data.mediaId,t.value.thumbUrl=a.data.url},j=a=>{d.error("\u4E0A\u4F20\u5931\u8D25: "+a.message)};return(a,o)=>{const w=R,B=T,c=K,q=L,C=N;return m(),H("div",null,[Z,u("div",$,[e(t).thumbUrl?(m(),g(w,{key:0,style:{width:"300px","max-height":"300px"},src:e(t).thumbUrl,fit:"contain"},null,8,["src"])):(m(),g(B,{key:1,icon:"ep:plus",class:D(["avatar-uploader-icon",a.isFirst?"avatar":"avatar1"])},null,8,["class"])),u("div",aa,[i(q,{action:"https://erpapi.vqmjc.cc/admin-api/mp/material/upload-permanent",headers:_,multiple:"",limit:1,"file-list":e(n),data:e(U),"before-upload":k,"on-error":j,"on-success":z},{trigger:l(()=>[i(c,{size:"small",type:"primary"},{default:l(()=>[h("\u672C\u5730\u4E0A\u4F20")]),_:1})]),tip:l(()=>[ea]),default:l(()=>[i(c,{size:"small",type:"primary",onClick:o[0]||(o[0]=v=>r.value=!0),style:{"margin-left":"5px"}},{default:l(()=>[h(" \u7D20\u6750\u5E93\u9009\u62E9 ")]),_:1})]),_:1},8,["file-list","data"])]),i(C,{title:"\u9009\u62E9\u56FE\u7247",modelValue:e(r),"onUpdate:modelValue":o[1]||(o[1]=v=>J(r)?r.value=v:null),width:"80%","append-to-body":"","destroy-on-close":""},{default:l(()=>[i(e(X),{type:"image","account-id":e(p),onSelectMaterial:M},null,8,["account-id"])]),_:1},8,["modelValue"])])])}}}),[["__scopeId","data-v-71a48231"]]);export{ta as default};