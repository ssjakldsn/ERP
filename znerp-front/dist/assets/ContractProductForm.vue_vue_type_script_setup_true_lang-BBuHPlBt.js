import{d as J,r as f,e as K,ar as x,n as L,o as p,c as P,y as O,a as d,q as v,w as a,f as e,F as U,p as W,D as X,dX as y,x as C,a5 as z,dW as G,K as H,A as Q,B as S,C as Y,U as Z,cc as ee,I as le,L as ae,J as te,j as oe,M as de}from"./index-CIfmhqRC.js";import{_ as re}from"./DictTag.vue_vue_type_script_lang-CTpVFm77.js";import{g as ue}from"./index-BVTl5RdT.js";const ie=J({__name:"ContractProductForm",props:{products:{},disabled:{type:Boolean}},setup($,{expose:I}){const k=$,N=f(!1),c=f([]),b=K({productId:[{required:!0,message:"\u4EA7\u54C1\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],contractPrice:[{required:!0,message:"\u5408\u540C\u4EF7\u683C\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],count:[{required:!0,message:"\u4EA7\u54C1\u6570\u91CF\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),g=f([]),_=f([]);x(()=>k.products,async u=>{c.value=u},{immediate:!0}),x(()=>c.value,u=>{u&&u.length!==0&&u.forEach(i=>{i.contractPrice!=null&&i.count!=null?i.totalPrice=G(i.contractPrice,i.count):i.totalPrice=void 0})},{deep:!0});const q=()=>{c.value.push({id:void 0,productId:void 0,productUnit:void 0,productNo:void 0,productPrice:void 0,contractPrice:void 0,count:1})};return I({validate:()=>g.value.validate()}),L(async()=>{_.value=await ue()}),(u,i)=>{const r=H,D=Q,R=S,n=Y,V=Z,j=re,h=ee,w=le,B=ae,F=te,M=oe,T=de;return p(),P(U,null,[O((p(),v(F,{ref_key:"formRef",ref:g,model:d(c),rules:d(b),"label-width":"0px","inline-message":!0,disabled:u.disabled},{default:a(()=>[e(B,{data:d(c),class:"-mt-10px"},{default:a(()=>[e(r,{label:"\u5E8F\u53F7",type:"index",align:"center",width:"60"}),e(r,{label:"\u4EA7\u54C1\u540D\u79F0","min-width":"180"},{default:a(({row:l,$index:o})=>[e(n,{prop:`${o}.productId`,rules:d(b).productId,class:"mb-0px!"},{default:a(()=>[e(R,{modelValue:l.productId,"onUpdate:modelValue":t=>l.productId=t,clearable:"",filterable:"",onChange:t=>((A,m)=>{const s=_.value.find(E=>E.id===A);s&&(m.productUnit=s.unit,m.productNo=s.no,m.productPrice=s.price,m.contractPrice=s.price)})(t,l),placeholder:"\u8BF7\u9009\u62E9\u4EA7\u54C1"},{default:a(()=>[(p(!0),P(U,null,W(d(_),t=>(p(),v(D,{key:t.id,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),_:2},1032,["prop","rules"])]),_:1}),e(r,{label:"\u6761\u7801","min-width":"150"},{default:a(({row:l})=>[e(n,{class:"mb-0px!"},{default:a(()=>[e(V,{disabled:"",modelValue:l.productNo,"onUpdate:modelValue":o=>l.productNo=o},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:1}),e(r,{label:"\u5355\u4F4D","min-width":"80"},{default:a(({row:l})=>[e(j,{type:d(X).CRM_PRODUCT_UNIT,value:l.productUnit},null,8,["type","value"])]),_:1}),e(r,{label:"\u4EF7\u683C\uFF08\u5143\uFF09","min-width":"120"},{default:a(({row:l})=>[e(n,{class:"mb-0px!"},{default:a(()=>[e(V,{disabled:"",modelValue:l.productPrice,"onUpdate:modelValue":o=>l.productPrice=o,formatter:d(y)},null,8,["modelValue","onUpdate:modelValue","formatter"])]),_:2},1024)]),_:1}),e(r,{label:"\u552E\u4EF7\uFF08\u5143\uFF09",fixed:"right","min-width":"140"},{default:a(({row:l,$index:o})=>[e(n,{prop:`${o}.contractPrice`,class:"mb-0px!"},{default:a(()=>[e(h,{modelValue:l.contractPrice,"onUpdate:modelValue":t=>l.contractPrice=t,"controls-position":"right",min:.001,precision:2,class:"!w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:1}),e(r,{label:"\u6570\u91CF",prop:"count",fixed:"right","min-width":"120"},{default:a(({row:l,$index:o})=>[e(n,{prop:`${o}.count`,rules:d(b).count,class:"mb-0px!"},{default:a(()=>[e(h,{modelValue:l.count,"onUpdate:modelValue":t=>l.count=t,"controls-position":"right",min:.001,precision:3,class:"!w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"])]),_:1}),e(r,{label:"\u5408\u8BA1",prop:"totalPrice",fixed:"right","min-width":"140"},{default:a(({row:l,$index:o})=>[e(n,{prop:`${o}.totalPrice`,class:"mb-0px!"},{default:a(()=>[e(V,{disabled:"",modelValue:l.totalPrice,"onUpdate:modelValue":t=>l.totalPrice=t,formatter:d(y)},null,8,["modelValue","onUpdate:modelValue","formatter"])]),_:2},1032,["prop"])]),_:1}),e(r,{align:"center",fixed:"right",label:"\u64CD\u4F5C",width:"60"},{default:a(({$index:l})=>[e(w,{onClick:o=>{return t=l,void c.value.splice(t,1);var t},link:""},{default:a(()=>[C("\u2014")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1},8,["model","rules","disabled"])),[[T,d(N)]]),u.disabled?z("",!0):(p(),v(M,{key:0,justify:"center",class:"mt-3"},{default:a(()=>[e(w,{onClick:q,round:""},{default:a(()=>[C("+ \u6DFB\u52A0\u4EA7\u54C1")]),_:1})]),_:1}))],64)}}});export{ie as _};