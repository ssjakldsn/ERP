import{d as M,z as R,b4 as z,a3 as F,r as n,e as G,o as H,q as J,w as t,f as o,x as p,a as e,k as P,g as j,I as S,br as $,i as A,U as D,C as E,J as K,cG as L}from"./index-CIfmhqRC.js";import{U as N,H as O,c as Q}from"./upload-BszPi5c5.js";import{U as T}from"./useUpload-Dugldi2L.js";const W=j("span",{class:"el-upload__tip",style:{"margin-left":"10px"}},"\u683C\u5F0F\u652F\u6301 MP4\uFF0C\u6587\u4EF6\u5927\u5C0F\u4E0D\u8D85\u8FC7 10MB",-1),X=M({__name:"UploadVideo",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue","uploaded"],setup(y,{emit:b}){const i=R(),v=z("accountId"),U={title:[{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u9898",trigger:"blur"}],introduction:[{required:!0,message:"\u8BF7\u8F93\u5165\u63CF\u8FF0",trigger:"blur"}]},k=y,m=b,s=F({get:()=>k.modelValue,set(l){m("update:modelValue",l)}}),c=n([]),r=G({type:T.Video,title:"",introduction:"",accountId:v}),f=n(null),V=n(null),h=()=>{var l;(l=f.value)==null||l.validate(a=>{var u;if(!a)return!1;(u=V.value)==null||u.submit()})},q=l=>{if(l.code!==0)return i.error("\u4E0A\u4F20\u51FA\u9519\uFF1A"+l.msg),!1;c.value=[],r.title="",r.introduction="",s.value=!1,i.notifySuccess("\u4E0A\u4F20\u6210\u529F"),m("uploaded")},x=l=>i.error(`\u4E0A\u4F20\u5931\u8D25: ${l.message}`);return(l,a)=>{const u=S,w=$,C=A,_=D,g=E,I=K,B=L;return H(),J(B,{title:"\u65B0\u5EFA\u89C6\u9891",modelValue:e(s),"onUpdate:modelValue":a[3]||(a[3]=d=>P(s)?s.value=d:null),width:"600px"},{footer:t(()=>[o(u,{onClick:a[2]||(a[2]=d=>s.value=!1)},{default:t(()=>[p("\u53D6 \u6D88")]),_:1}),o(u,{type:"primary",onClick:h},{default:t(()=>[p("\u63D0 \u4EA4")]),_:1})]),default:t(()=>[o(w,{action:e(N),headers:e(O),multiple:"",limit:1,"file-list":e(c),data:e(r),"before-upload":e(Q),"on-error":x,"on-success":q,ref_key:"uploadVideoRef",ref:V,"auto-upload":!1,class:"mb-5"},{trigger:t(()=>[o(u,{type:"primary",plain:""},{default:t(()=>[p("\u9009\u62E9\u89C6\u9891")]),_:1})]),tip:t(()=>[W]),_:1},8,["action","headers","file-list","data","before-upload"]),o(C),o(I,{model:e(r),rules:U,ref_key:"uploadFormRef",ref:f},{default:t(()=>[o(g,{label:"\u6807\u9898",prop:"title"},{default:t(()=>[o(_,{modelValue:e(r).title,"onUpdate:modelValue":a[0]||(a[0]=d=>e(r).title=d),placeholder:"\u6807\u9898\u5C06\u5C55\u793A\u5728\u76F8\u5173\u64AD\u653E\u9875\u9762\uFF0C\u5EFA\u8BAE\u586B\u5199\u6E05\u6670\u3001\u51C6\u786E\u3001\u751F\u52A8\u7684\u6807\u9898"},null,8,["modelValue"])]),_:1}),o(g,{label:"\u63CF\u8FF0",prop:"introduction"},{default:t(()=>[o(_,{rows:3,type:"textarea",modelValue:e(r).introduction,"onUpdate:modelValue":a[1]||(a[1]=d=>e(r).introduction=d),placeholder:"\u4ECB\u7ECD\u8BED\u5C06\u5C55\u793A\u5728\u76F8\u5173\u64AD\u653E\u9875\u9762\uFF0C\u5EFA\u8BAE\u586B\u5199\u7B80\u6D01\u660E\u786E\u3001\u6709\u4FE1\u606F\u91CF\u7684\u5185\u5BB9"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])}}});export{X as _};
