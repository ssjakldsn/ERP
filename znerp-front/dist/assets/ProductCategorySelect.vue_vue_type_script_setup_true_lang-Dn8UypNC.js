import{d as i,b2 as c,ai as d,a3 as b,r as V,n as f,o as h,q as y,a as t,k as g}from"./index-CIfmhqRC.js";import{E as k}from"./el-tree-select-CYFGeiEt.js";import{h as w,d as I}from"./tree-BMqZf9_I.js";import{g as v}from"./category-CKOb63Br.js";const x=i({name:"ProductCategorySelect",__name:"ProductCategorySelect",props:{modelValue:c([Number,Array]),multiple:d.bool.def(!1),parentId:d.number.def(void 0)},emits:["update:modelValue"],setup(a,{emit:m}){const l=a,o=b({get:()=>l.modelValue,set:e=>{p("update:modelValue",e)}}),p=m,r=V([]);return f(async()=>{const e=await v({parentId:l.parentId});r.value=w(e,"id","parentId")}),(e,s)=>{const u=k;return h(),y(u,{modelValue:t(o),"onUpdate:modelValue":s[0]||(s[0]=n=>g(o)?o.value=n:null),data:t(r),props:t(I),multiple:a.multiple,"show-checkbox":a.multiple,class:"w-1/1","node-key":"id",placeholder:"\u8BF7\u9009\u62E9\u5546\u54C1\u5206\u7C7B"},null,8,["modelValue","data","props","multiple","show-checkbox"])}}});export{x as _};