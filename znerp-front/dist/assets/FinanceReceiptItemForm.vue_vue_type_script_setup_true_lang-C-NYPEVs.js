import{d as j,z as q,r as m,e as A,ar as O,o as _,c as B,y as G,a as n,q as k,w as a,f as e,dX as h,x as V,a5 as J,F as K,em as M,K as X,U as D,C as H,cc as Q,I as W,L as Y,J as Z,j as ee,M as ae}from"./index-CIfmhqRC.js";import{_ as le}from"./SaleOutReceiptEnableList.vue_vue_type_script_setup_true_lang-VCt39STi.js";import{_ as re}from"./SaleReturnRefundEnableList.vue_vue_type_script_setup_true_lang-DIDltFq7.js";import{E as g}from"./constants-A8BI3pz7.js";const te=j({__name:"FinanceReceiptItemForm",props:{items:{},customerId:{},disabled:{type:Boolean}},setup(v,{expose:z}){const f=v,x=q(),I=m(!1),c=m([]),R=A({receiptPrice:[{required:!0,message:"\u672C\u6B21\u6536\u6B3E\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),w=m([]);m([]),O(()=>f.items,async t=>{c.value=t},{immediate:!0});const E=t=>{const{columns:l,data:o}=t,d=[];return l.forEach((s,u)=>{if(u!==0)if(["totalPrice","receiptedPrice","receiptPrice"].includes(s.property)){const b=M(o.map(P=>Number(P[s.property])));d[u]=h(b)}else d[u]="";else d[u]="\u5408\u8BA1"}),d},y=m(),L=()=>{f.customerId?y.value.open(f.customerId):x.error("\u8BF7\u9009\u62E9\u5BA2\u6237")},N=t=>{t.forEach(l=>{c.value.push({bizId:l.id,bizType:g.SALE_OUT,bizNo:l.no,totalPrice:l.totalPrice,receiptedPrice:l.receiptPrice,receiptPrice:l.totalPrice-l.receiptPrice})})},U=m(),C=()=>{f.customerId?U.value.open(f.customerId):x.error("\u8BF7\u9009\u62E9\u5BA2\u6237")},$=t=>{t.forEach(l=>{c.value.push({bizId:l.id,bizType:g.SALE_RETURN,bizNo:l.no,totalPrice:-l.totalPrice,receiptedPrice:-l.refundPrice,receiptPrice:-l.totalPrice+l.refundPrice})})};return z({validate:()=>w.value.validate()}),(t,l)=>{const o=X,d=D,s=H,u=Q,b=W,P=Y,S=Z,T=ee,F=ae;return _(),B(K,null,[G((_(),k(S,{ref_key:"formRef",ref:w,model:n(c),rules:n(R),"label-width":"0px","inline-message":!0,disabled:t.disabled},{default:a(()=>[e(P,{data:n(c),"show-summary":"","summary-method":E,class:"-mt-10px"},{default:a(()=>[e(o,{label:"\u5E8F\u53F7",type:"index",align:"center",width:"60"}),e(o,{label:"\u9500\u552E\u5355\u636E\u7F16\u53F7","min-width":"200"},{default:a(({row:r})=>[e(s,{class:"mb-0px!"},{default:a(()=>[e(d,{disabled:"",modelValue:r.bizNo,"onUpdate:modelValue":i=>r.bizNo=i},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:1}),e(o,{label:"\u5E94\u4ED8\u91D1\u989D",prop:"totalPrice",fixed:"right","min-width":"100"},{default:a(({row:r})=>[e(s,{class:"mb-0px!"},{default:a(()=>[e(d,{disabled:"",modelValue:r.totalPrice,"onUpdate:modelValue":i=>r.totalPrice=i,formatter:n(h)},null,8,["modelValue","onUpdate:modelValue","formatter"])]),_:2},1024)]),_:1}),e(o,{label:"\u5DF2\u4ED8\u91D1\u989D",prop:"receiptedPrice",fixed:"right","min-width":"100"},{default:a(({row:r})=>[e(s,{class:"mb-0px!"},{default:a(()=>[e(d,{disabled:"",modelValue:r.receiptedPrice,"onUpdate:modelValue":i=>r.receiptedPrice=i,formatter:n(h)},null,8,["modelValue","onUpdate:modelValue","formatter"])]),_:2},1024)]),_:1}),e(o,{label:"\u672C\u6B21\u6536\u6B3E",prop:"receiptPrice",fixed:"right","min-width":"115"},{default:a(({row:r,$index:i})=>[e(s,{prop:`${i}.receiptPrice`,class:"mb-0px!"},{default:a(()=>[e(u,{modelValue:r.receiptPrice,"onUpdate:modelValue":p=>r.receiptPrice=p,"controls-position":"right",precision:2,class:"!w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:1}),e(o,{label:"\u5907\u6CE8","min-width":"150"},{default:a(({row:r,$index:i})=>[e(s,{prop:`${i}.remark`,class:"mb-0px!"},{default:a(()=>[e(d,{modelValue:r.remark,"onUpdate:modelValue":p=>r.remark=p,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:1}),e(o,{align:"center",fixed:"right",label:"\u64CD\u4F5C",width:"60"},{default:a(({$index:r})=>[e(b,{onClick:i=>{return p=r,void c.value.splice(p,1);var p},link:""},{default:a(()=>[V("\u2014")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1},8,["model","rules","disabled"])),[[F,n(I)]]),t.disabled?J("",!0):(_(),k(T,{key:0,justify:"center",class:"mt-3"},{default:a(()=>[e(b,{onClick:L,round:""},{default:a(()=>[V("+ \u6DFB\u52A0\u9500\u552E\u51FA\u5E93\u5355")]),_:1}),e(b,{onClick:C,round:""},{default:a(()=>[V("+ \u6DFB\u52A0\u9500\u552E\u9000\u8D27\u5355")]),_:1})]),_:1})),e(le,{ref_key:"saleOutReceiptEnableListRef",ref:y,onSuccess:N},null,512),e(re,{ref_key:"saleReturnRefundEnableListRef",ref:U,onSuccess:$},null,512)],64)}}});export{te as _};