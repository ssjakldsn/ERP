import{d as g,e as b,r as y,o as h,c as v,g as p,f as t,w as d,x as i,a as s,k as _,U as G,I as V,a0 as k,a1 as C,_ as I}from"./index-CIfmhqRC.js";import{E as U}from"./el-text-DMgoq9G3.js";import{i as A}from"./constants-PZ18_Kze.js";const B={class:"w-[350px] p-5 flex flex-col bg-[#f5f7f9]"},E=(o=>(k("data-v-80e62cfb"),o=o(),C(),o))(()=>p("h3",{class:"w-full h-full h-7 text-5 text-center leading-[28px] title"},"\u601D\u7EF4\u5BFC\u56FE\u521B\u4F5C\u4E2D\u5FC3",-1)),L={class:"flex-grow overflow-y-auto"},j={class:"mt-[30ppx]"},q={class:"mt-[30px]"},z=I(g({__name:"Left",props:{isGenerating:{type:Boolean}},emits:["submit","directGenerate"],setup(o,{expose:x,emit:w}){const m=w,n=b({prompt:""}),a=y(A);return x({setGeneratedContent(r){a.value=r}}),(r,e)=>{const u=U,c=G,f=V;return h(),v("div",B,[E,p("div",L,[p("div",j,[t(u,{tag:"b"},{default:d(()=>[i("\u60A8\u7684\u9700\u6C42\uFF1F")]),_:1}),t(c,{modelValue:s(n).prompt,"onUpdate:modelValue":e[0]||(e[0]=l=>s(n).prompt=l),maxlength:"1024",rows:"5",class:"w-100% mt-15px","input-style":"border-radius: 7px;",placeholder:"\u8BF7\u8F93\u5165\u63D0\u793A\u8BCD\uFF0C\u8BA9AI\u5E2E\u4F60\u5B8C\u5584","show-word-limit":"",type:"textarea"},null,8,["modelValue"]),t(f,{class:"!w-full mt-[15px]",type:"primary",loading:r.isGenerating,onClick:e[1]||(e[1]=l=>m("submit",s(n)))},{default:d(()=>[i(" \u667A\u80FD\u751F\u6210\u601D\u7EF4\u5BFC\u56FE ")]),_:1},8,["loading"])]),p("div",q,[t(u,{tag:"b"},{default:d(()=>[i("\u4F7F\u7528\u5DF2\u6709\u5185\u5BB9\u751F\u6210\uFF1F")]),_:1}),t(c,{modelValue:s(a),"onUpdate:modelValue":e[2]||(e[2]=l=>_(a)?a.value=l:null),maxlength:"1024",rows:"5",class:"w-100% mt-15px","input-style":"border-radius: 7px;",placeholder:"\u4F8B\u5982\uFF1A\u7AE5\u8BDD\u91CC\u7684\u5C0F\u5C4B\u5E94\u8BE5\u662F\u4EC0\u4E48\u6837\u5B50\uFF1F","show-word-limit":"",type:"textarea"},null,8,["modelValue"]),t(f,{class:"!w-full mt-[15px]",type:"primary",onClick:e[3]||(e[3]=l=>m("directGenerate",s(a))),disabled:r.isGenerating},{default:d(()=>[i(" \u76F4\u63A5\u751F\u6210 ")]),_:1},8,["disabled"])])])])}}}),[["__scopeId","data-v-80e62cfb"]]);export{z as default};
