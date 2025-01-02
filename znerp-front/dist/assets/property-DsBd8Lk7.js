import{_ as R}from"./ComponentContainerProperty-C4nJhSya.js";import{d as T,r as I,n as z,o as n,q as h,w as d,f as e,a,g as p,x as f,a5 as q,c as A,F,H,aK as L,aL as S,al as D,C as J,ae as K,ce as N,cl as j,U as Q,cf as W,J as Z}from"./index-CIfmhqRC.js";import{_ as G}from"./index-DSV6ZkbZ.js";import{E as M}from"./el-card-DyMugU68.js";import{u as O}from"./util-jDjqY1ok.js";import{a as X}from"./seckillActivity-C8ME84dn.js";import{C as Y}from"./constants-A8BI3pz7.js";import $ from"./SeckillShowcase-CglDGoGt.js";import"./color-BN7ZL7BD.js";import"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import"./Qrcode-DR4gTqIE.js";import"./el-text-DMgoq9G3.js";import"./IFrame.vue_vue_type_script_setup_true_lang-CiSUdYeS.js";import"./vuedraggable.umd-CcTr7I5e.js";import"./el-collapse-item-BgajxfOI.js";import"./el-image-DLpquQe6.js";import"./SeckillTableSelect.vue_vue_type_script_setup_true_lang-D-EBRhkA.js";import"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import"./index-CrBeVHKs.js";import"./DictTag.vue_vue_type_script_lang-CTpVFm77.js";import"./tree-BMqZf9_I.js";import"./category-CKOb63Br.js";import"./formatter-CHMUnmj-.js";import"./formatTime-DFFN_xWx.js";const ee={class:"flex gap-8px"},le={class:"flex gap-8px"},ae={class:"flex gap-8px"},oe={class:"flex gap-8px"},te={class:"flex gap-8px"},de={class:"flex gap-8px"},ue=T({name:"PromotionSeckillProperty",__name:"property",props:{modelValue:{}},emits:["update:modelValue"],setup(_,{emit:U}){const x=_,B=U,{formData:l}=O(x.modelValue,B),v=I([]);return z(async()=>{const{list:w}=await X({status:Y.ENABLE});v.value=w}),(w,o)=>{const r=M,V=H,i=L,c=S,g=D,u=J,s=G,m=K,C=N,y=j,k=Q,b=W,P=Z,E=R;return n(),h(E,{modelValue:a(l).style,"onUpdate:modelValue":o[24]||(o[24]=t=>a(l).style=t)},{default:d(()=>[e(P,{"label-width":"80px",model:a(l)},{default:d(()=>[e(r,{header:"\u79D2\u6740\u6D3B\u52A8",class:"property-group",shadow:"never"},{default:d(()=>[e($,{modelValue:a(l).activityIds,"onUpdate:modelValue":o[0]||(o[0]=t=>a(l).activityIds=t)},null,8,["modelValue"])]),_:1}),e(r,{header:"\u5546\u54C1\u6837\u5F0F",class:"property-group",shadow:"never"},{default:d(()=>[e(u,{label:"\u5E03\u5C40",prop:"type"},{default:d(()=>[e(g,{modelValue:a(l).layoutType,"onUpdate:modelValue":o[1]||(o[1]=t=>a(l).layoutType=t)},{default:d(()=>[e(c,{class:"item",content:"\u5355\u5217\u5927\u56FE",placement:"bottom"},{default:d(()=>[e(i,{value:"oneColBigImg"},{default:d(()=>[e(V,{icon:"fluent:text-column-one-24-filled"})]),_:1})]),_:1}),e(c,{class:"item",content:"\u5355\u5217\u5C0F\u56FE",placement:"bottom"},{default:d(()=>[e(i,{value:"oneColSmallImg"},{default:d(()=>[e(V,{icon:"fluent:text-column-two-left-24-filled"})]),_:1})]),_:1}),e(c,{class:"item",content:"\u53CC\u5217",placement:"bottom"},{default:d(()=>[e(i,{value:"twoCol"},{default:d(()=>[e(V,{icon:"fluent:text-column-two-24-filled"})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(u,{label:"\u5546\u54C1\u540D\u79F0",prop:"fields.name.show"},{default:d(()=>[p("div",ee,[e(s,{modelValue:a(l).fields.name.color,"onUpdate:modelValue":o[2]||(o[2]=t=>a(l).fields.name.color=t)},null,8,["modelValue"]),e(m,{modelValue:a(l).fields.name.show,"onUpdate:modelValue":o[3]||(o[3]=t=>a(l).fields.name.show=t)},null,8,["modelValue"])])]),_:1}),e(u,{label:"\u5546\u54C1\u7B80\u4ECB",prop:"fields.introduction.show"},{default:d(()=>[p("div",le,[e(s,{modelValue:a(l).fields.introduction.color,"onUpdate:modelValue":o[4]||(o[4]=t=>a(l).fields.introduction.color=t)},null,8,["modelValue"]),e(m,{modelValue:a(l).fields.introduction.show,"onUpdate:modelValue":o[5]||(o[5]=t=>a(l).fields.introduction.show=t)},null,8,["modelValue"])])]),_:1}),e(u,{label:"\u5546\u54C1\u4EF7\u683C",prop:"fields.price.show"},{default:d(()=>[p("div",ae,[e(s,{modelValue:a(l).fields.price.color,"onUpdate:modelValue":o[6]||(o[6]=t=>a(l).fields.price.color=t)},null,8,["modelValue"]),e(m,{modelValue:a(l).fields.price.show,"onUpdate:modelValue":o[7]||(o[7]=t=>a(l).fields.price.show=t)},null,8,["modelValue"])])]),_:1}),e(u,{label:"\u5E02\u573A\u4EF7",prop:"fields.marketPrice.show"},{default:d(()=>[p("div",oe,[e(s,{modelValue:a(l).fields.marketPrice.color,"onUpdate:modelValue":o[8]||(o[8]=t=>a(l).fields.marketPrice.color=t)},null,8,["modelValue"]),e(m,{modelValue:a(l).fields.marketPrice.show,"onUpdate:modelValue":o[9]||(o[9]=t=>a(l).fields.marketPrice.show=t)},null,8,["modelValue"])])]),_:1}),e(u,{label:"\u5546\u54C1\u9500\u91CF",prop:"fields.salesCount.show"},{default:d(()=>[p("div",te,[e(s,{modelValue:a(l).fields.salesCount.color,"onUpdate:modelValue":o[10]||(o[10]=t=>a(l).fields.salesCount.color=t)},null,8,["modelValue"]),e(m,{modelValue:a(l).fields.salesCount.show,"onUpdate:modelValue":o[11]||(o[11]=t=>a(l).fields.salesCount.show=t)},null,8,["modelValue"])])]),_:1}),e(u,{label:"\u5546\u54C1\u5E93\u5B58",prop:"fields.stock.show"},{default:d(()=>[p("div",de,[e(s,{modelValue:a(l).fields.stock.color,"onUpdate:modelValue":o[12]||(o[12]=t=>a(l).fields.stock.color=t)},null,8,["modelValue"]),e(m,{modelValue:a(l).fields.stock.show,"onUpdate:modelValue":o[13]||(o[13]=t=>a(l).fields.stock.show=t)},null,8,["modelValue"])])]),_:1})]),_:1}),e(r,{header:"\u89D2\u6807",class:"property-group",shadow:"never"},{default:d(()=>[e(u,{label:"\u89D2\u6807",prop:"badge.show"},{default:d(()=>[e(C,{modelValue:a(l).badge.show,"onUpdate:modelValue":o[14]||(o[14]=t=>a(l).badge.show=t)},null,8,["modelValue"])]),_:1}),a(l).badge.show?(n(),h(u,{key:0,label:"\u89D2\u6807",prop:"badge.imgUrl"},{default:d(()=>[e(y,{modelValue:a(l).badge.imgUrl,"onUpdate:modelValue":o[15]||(o[15]=t=>a(l).badge.imgUrl=t),height:"44px",width:"72px"},{tip:d(()=>[f(" \u5EFA\u8BAE\u5C3A\u5BF8\uFF1A36 * 22")]),_:1},8,["modelValue"])]),_:1})):q("",!0)]),_:1}),e(r,{header:"\u6309\u94AE",class:"property-group",shadow:"never"},{default:d(()=>[e(u,{label:"\u6309\u94AE\u7C7B\u578B",prop:"btnBuy.type"},{default:d(()=>[e(g,{modelValue:a(l).btnBuy.type,"onUpdate:modelValue":o[16]||(o[16]=t=>a(l).btnBuy.type=t)},{default:d(()=>[e(i,{value:"text"},{default:d(()=>[f("\u6587\u5B57")]),_:1}),e(i,{value:"img"},{default:d(()=>[f("\u56FE\u7247")]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(l).btnBuy.type==="text"?(n(),A(F,{key:0},[e(u,{label:"\u6309\u94AE\u6587\u5B57",prop:"btnBuy.text"},{default:d(()=>[e(k,{modelValue:a(l).btnBuy.text,"onUpdate:modelValue":o[17]||(o[17]=t=>a(l).btnBuy.text=t)},null,8,["modelValue"])]),_:1}),e(u,{label:"\u5DE6\u4FA7\u80CC\u666F",prop:"btnBuy.bgBeginColor"},{default:d(()=>[e(s,{modelValue:a(l).btnBuy.bgBeginColor,"onUpdate:modelValue":o[18]||(o[18]=t=>a(l).btnBuy.bgBeginColor=t)},null,8,["modelValue"])]),_:1}),e(u,{label:"\u53F3\u4FA7\u80CC\u666F",prop:"btnBuy.bgEndColor"},{default:d(()=>[e(s,{modelValue:a(l).btnBuy.bgEndColor,"onUpdate:modelValue":o[19]||(o[19]=t=>a(l).btnBuy.bgEndColor=t)},null,8,["modelValue"])]),_:1})],64)):(n(),h(u,{key:1,label:"\u56FE\u7247",prop:"btnBuy.imgUrl"},{default:d(()=>[e(y,{modelValue:a(l).btnBuy.imgUrl,"onUpdate:modelValue":o[20]||(o[20]=t=>a(l).btnBuy.imgUrl=t),height:"56px",width:"56px"},{tip:d(()=>[f(" \u5EFA\u8BAE\u5C3A\u5BF8\uFF1A56 * 56")]),_:1},8,["modelValue"])]),_:1}))]),_:1}),e(r,{header:"\u5546\u54C1\u6837\u5F0F",class:"property-group",shadow:"never"},{default:d(()=>[e(u,{label:"\u4E0A\u5706\u89D2",prop:"borderRadiusTop"},{default:d(()=>[e(b,{modelValue:a(l).borderRadiusTop,"onUpdate:modelValue":o[21]||(o[21]=t=>a(l).borderRadiusTop=t),max:100,min:0,"show-input":"","input-size":"small","show-input-controls":!1},null,8,["modelValue"])]),_:1}),e(u,{label:"\u4E0B\u5706\u89D2",prop:"borderRadiusBottom"},{default:d(()=>[e(b,{modelValue:a(l).borderRadiusBottom,"onUpdate:modelValue":o[22]||(o[22]=t=>a(l).borderRadiusBottom=t),max:100,min:0,"show-input":"","input-size":"small","show-input-controls":!1},null,8,["modelValue"])]),_:1}),e(u,{label:"\u95F4\u9694",prop:"space"},{default:d(()=>[e(b,{modelValue:a(l).space,"onUpdate:modelValue":o[23]||(o[23]=t=>a(l).space=t),max:100,min:0,"show-input":"","input-size":"small","show-input-controls":!1},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])}}});export{ue as default};