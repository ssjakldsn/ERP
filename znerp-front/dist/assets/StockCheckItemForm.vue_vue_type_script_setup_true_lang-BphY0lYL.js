import{d as z,r as h,e as D,ar as q,dW as G,n as H,o as m,c as C,y as O,a as n,q as _,w as l,f as e,F as U,p as S,eo as k,dX as L,x as j,a5 as Q,em as Y,K as Z,A as ee,B as ae,C as le,U as oe,cc as te,I as de,L as ue,J as re,j as ie,M as ne}from"./index-CIfmhqRC.js";import{P as se}from"./index-C-VA7MOy.js";import{W as ce}from"./index-DXR61XEe.js";import{S as pe}from"./index-DsNMwdtg.js";const me=z({__name:"StockCheckItemForm",props:{items:{},disabled:{type:Boolean}},setup(W,{expose:E}){const F=W,M=h(!1),c=h([]),V=D({inId:[{required:!0,message:"\u76D8\u70B9\u7F16\u53F7\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],warehouseId:[{required:!0,message:"\u4ED3\u5E93\u540D\u5B57\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],productId:[{required:!0,message:"\u4EA7\u54C1\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],count:[{required:!0,message:"\u4EA7\u54C1\u6570\u91CF\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),I=h([]),g=h([]),x=h([]),y=h(void 0);q(()=>F.items,async t=>{c.value=t},{immediate:!0}),q(()=>c.value,t=>{t&&t.length!==0&&t.forEach(u=>{u.stockCount!=null&&u.actualCount!=null?u.count=u.actualCount-u.stockCount:u.count=void 0,u.totalPrice=G(u.productPrice,u.count)})},{deep:!0});const A=t=>{const{columns:u,data:i}=t,p=[];return u.forEach((f,r)=>{if(r!==0)if(["count","totalPrice"].includes(f.property)){const s=Y(i.map(w=>Number(w[f.property])));p[r]=f.property==="count"?k(s):L(s)}else p[r]="";else p[r]="\u5408\u8BA1"}),p},P=()=>{var u;const t={id:void 0,warehouseId:(u=y.value)==null?void 0:u.id,productId:void 0,productUnitName:void 0,productBarCode:void 0,productPrice:void 0,stockCount:void 0,actualCount:void 0,count:void 0,totalPrice:void 0,remark:void 0};c.value.push(t)},$=async t=>{if(!t.productId||!t.warehouseId)return;const u=await pe.getStock2(t.productId,t.warehouseId);t.stockCount=u?u.count:0,t.actualCount=t.stockCount};return E({validate:()=>I.value.validate()}),H(async()=>{g.value=await se.getProductSimpleList(),x.value=await ce.getWarehouseSimpleList(),y.value=x.value.find(t=>t.defaultStatus),c.value.length===0&&P()}),(t,u)=>{const i=Z,p=ee,f=ae,r=le,s=oe,w=te,B=de,J=ue,K=re,R=ie,X=ne;return m(),C(U,null,[O((m(),_(K,{ref_key:"formRef",ref:I,model:n(c),rules:n(V),"label-width":"0px","inline-message":!0,disabled:t.disabled},{default:l(()=>[e(J,{data:n(c),"show-summary":"","summary-method":A,class:"-mt-10px"},{default:l(()=>[e(i,{label:"\u5E8F\u53F7",type:"index",align:"center",width:"60"}),e(i,{label:"\u4ED3\u5E93\u540D\u5B57","min-width":"125"},{default:l(({row:a,$index:d})=>[e(r,{prop:`${d}.warehouseId`,rules:n(V).warehouseId,class:"mb-0px!"},{default:l(()=>[e(f,{modelValue:a.warehouseId,"onUpdate:modelValue":o=>a.warehouseId=o,clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4ED3\u5E93\u540D\u5B57",onChange:o=>((N,b)=>{$(b)})(0,a)},{default:l(()=>[(m(!0),C(U,null,S(n(x),o=>(m(),_(p,{key:o.id,label:o.name,value:o.id},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),_:2},1032,["prop","rules"])]),_:1}),e(i,{label:"\u4EA7\u54C1\u540D\u79F0","min-width":"180"},{default:l(({row:a,$index:d})=>[e(r,{prop:`${d}.productId`,rules:n(V).productId,class:"mb-0px!"},{default:l(()=>[e(f,{modelValue:a.productId,"onUpdate:modelValue":o=>a.productId=o,clearable:"",filterable:"",onChange:o=>((N,b)=>{const v=g.value.find(T=>T.id===N);v&&(b.productUnitName=v.unitName,b.productBarCode=v.barCode,b.productPrice=v.minPrice),$(b)})(o,a),placeholder:"\u8BF7\u9009\u62E9\u4EA7\u54C1"},{default:l(()=>[(m(!0),C(U,null,S(n(g),o=>(m(),_(p,{key:o.id,label:o.name,value:o.id},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),_:2},1032,["prop","rules"])]),_:1}),e(i,{label:"\u8D26\u9762\u5E93\u5B58","min-width":"100"},{default:l(({row:a})=>[e(r,{class:"mb-0px!"},{default:l(()=>[e(s,{disabled:"",modelValue:a.stockCount,"onUpdate:modelValue":d=>a.stockCount=d,formatter:n(k)},null,8,["modelValue","onUpdate:modelValue","formatter"])]),_:2},1024)]),_:1}),e(i,{label:"\u6761\u7801","min-width":"150"},{default:l(({row:a})=>[e(r,{class:"mb-0px!"},{default:l(()=>[e(s,{disabled:"",modelValue:a.productBarCode,"onUpdate:modelValue":d=>a.productBarCode=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:1}),e(i,{label:"\u5355\u4F4D","min-width":"80"},{default:l(({row:a})=>[e(r,{class:"mb-0px!"},{default:l(()=>[e(s,{disabled:"",modelValue:a.productUnitName,"onUpdate:modelValue":d=>a.productUnitName=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:1}),e(i,{label:"\u5B9E\u9645\u5E93\u5B58",fixed:"right","min-width":"140"},{default:l(({row:a,$index:d})=>[e(r,{prop:`${d}.actualCount`,rules:n(V).actualCount,class:"mb-0px!"},{default:l(()=>[e(w,{modelValue:a.actualCount,"onUpdate:modelValue":o=>a.actualCount=o,"controls-position":"right",precision:3,class:"!w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"])]),_:1}),e(i,{label:"\u76C8\u4E8F\u6570\u91CF",prop:"count",fixed:"right","min-width":"110"},{default:l(({row:a,$index:d})=>[e(r,{prop:`${d}.count`,rules:n(V).count,class:"mb-0px!"},{default:l(()=>[e(s,{disabled:"",modelValue:a.count,"onUpdate:modelValue":o=>a.count=o,formatter:n(k),class:"!w-100%"},null,8,["modelValue","onUpdate:modelValue","formatter"])]),_:2},1032,["prop","rules"])]),_:1}),e(i,{label:"\u4EA7\u54C1\u5355\u4EF7",fixed:"right","min-width":"120"},{default:l(({row:a,$index:d})=>[e(r,{prop:`${d}.productPrice`,class:"mb-0px!"},{default:l(()=>[e(w,{modelValue:a.productPrice,"onUpdate:modelValue":o=>a.productPrice=o,"controls-position":"right",min:.01,precision:2,class:"!w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:1}),e(i,{label:"\u5408\u8BA1\u91D1\u989D",prop:"totalPrice",fixed:"right","min-width":"100"},{default:l(({row:a,$index:d})=>[e(r,{prop:`${d}.totalPrice`,class:"mb-0px!"},{default:l(()=>[e(s,{disabled:"",modelValue:a.totalPrice,"onUpdate:modelValue":o=>a.totalPrice=o,formatter:n(L)},null,8,["modelValue","onUpdate:modelValue","formatter"])]),_:2},1032,["prop"])]),_:1}),e(i,{label:"\u5907\u6CE8","min-width":"150"},{default:l(({row:a,$index:d})=>[e(r,{prop:`${d}.remark`,class:"mb-0px!"},{default:l(()=>[e(s,{modelValue:a.remark,"onUpdate:modelValue":o=>a.remark=o,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:1}),e(i,{align:"center",fixed:"right",label:"\u64CD\u4F5C",width:"60"},{default:l(({$index:a})=>[e(B,{onClick:d=>{return o=a,void c.value.splice(o,1);var o},link:""},{default:l(()=>[j("\u2014")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1},8,["model","rules","disabled"])),[[X,n(M)]]),t.disabled?Q("",!0):(m(),_(R,{key:0,justify:"center",class:"mt-3"},{default:l(()=>[e(B,{onClick:P,round:""},{default:l(()=>[j("+ \u6DFB\u52A0\u76D8\u70B9\u4EA7\u54C1")]),_:1})]),_:1}))],64)}}});export{me as _};