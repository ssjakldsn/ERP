import{d as E,h as N,z as O,r as m,e as T,o as p,q as V,w as r,f as s,a as e,x as _,y as j,c as z,F as B,p as D,Q as G,D as I,t as J,k as K,U as L,C as Q,ak as R,al as H,cc as X,J as Y,I as Z,M as $}from"./index-CIfmhqRC.js";import{_ as ee}from"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import{W as h}from"./index-DXR61XEe.js";import{C as ae}from"./constants-A8BI3pz7.js";const le=E({name:"WarehouseForm",__name:"WarehouseForm",emits:["success"],setup(oe,{expose:y,emit:U}){const{t:n}=N(),k=O(),t=m(!1),b=m(""),i=m(!1),g=m(""),o=m({id:void 0,name:void 0,address:void 0,sort:void 0,remark:void 0,principal:void 0,warehousePrice:void 0,truckagePrice:void 0,status:void 0}),P=T({name:[{required:!0,message:"\u4ED3\u5E93\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],sort:[{required:!0,message:"\u6392\u5E8F\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],status:[{required:!0,message:"\u5F00\u542F\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),v=m();y({open:async(u,a)=>{if(t.value=!0,b.value=n("action."+u),g.value=u,q(),a){i.value=!0;try{o.value=await h.getWarehouse(a)}finally{i.value=!1}}}});const C=U,W=async()=>{await v.value.validate(),i.value=!0;try{const u=o.value;g.value==="create"?(await h.createWarehouse(u),k.success(n("common.createSuccess"))):(await h.updateWarehouse(u),k.success(n("common.updateSuccess"))),t.value=!1,C("success")}finally{i.value=!1}},q=()=>{var u;o.value={id:void 0,name:void 0,address:void 0,sort:void 0,remark:void 0,principal:void 0,warehousePrice:void 0,truckagePrice:void 0,status:ae.ENABLE},(u=v.value)==null||u.resetFields()};return(u,a)=>{const c=L,d=Q,x=R,S=H,f=X,F=Y,w=Z,M=ee,A=$;return p(),V(M,{title:e(b),modelValue:e(t),"onUpdate:modelValue":a[9]||(a[9]=l=>K(t)?t.value=l:null)},{footer:r(()=>[s(w,{onClick:W,type:"primary",disabled:e(i)},{default:r(()=>[_("\u786E \u5B9A")]),_:1},8,["disabled"]),s(w,{onClick:a[8]||(a[8]=l=>t.value=!1)},{default:r(()=>[_("\u53D6 \u6D88")]),_:1})]),default:r(()=>[j((p(),V(F,{ref_key:"formRef",ref:v,model:e(o),rules:e(P),"label-width":"100px"},{default:r(()=>[s(d,{label:"\u4ED3\u5E93\u540D\u79F0",prop:"name"},{default:r(()=>[s(c,{modelValue:e(o).name,"onUpdate:modelValue":a[0]||(a[0]=l=>e(o).name=l),placeholder:"\u8BF7\u8F93\u5165\u4ED3\u5E93\u540D\u79F0"},null,8,["modelValue"])]),_:1}),s(d,{label:"\u4ED3\u5E93\u5730\u5740",prop:"address"},{default:r(()=>[s(c,{modelValue:e(o).address,"onUpdate:modelValue":a[1]||(a[1]=l=>e(o).address=l),placeholder:"\u8BF7\u8F93\u5165\u4ED3\u5E93\u5730\u5740"},null,8,["modelValue"])]),_:1}),s(d,{label:"\u4ED3\u5E93\u72B6\u6001",prop:"status"},{default:r(()=>[s(S,{modelValue:e(o).status,"onUpdate:modelValue":a[2]||(a[2]=l=>e(o).status=l)},{default:r(()=>[(p(!0),z(B,null,D(e(G)(e(I).COMMON_STATUS),l=>(p(),V(x,{key:l.value,value:l.value},{default:r(()=>[_(J(l.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(d,{label:"\u4ED3\u50A8\u8D39",prop:"warehousePrice"},{default:r(()=>[s(f,{modelValue:e(o).warehousePrice,"onUpdate:modelValue":a[3]||(a[3]=l=>e(o).warehousePrice=l),placeholder:"\u8BF7\u8F93\u5165\u4ED3\u50A8\u8D39\uFF0C\u5355\u4F4D\uFF1A\u5143/\u5929/KG",min:0,precision:2,class:"!w-1/1"},null,8,["modelValue"])]),_:1}),s(d,{label:"\u642C\u8FD0\u8D39",prop:"truckagePrice"},{default:r(()=>[s(f,{modelValue:e(o).truckagePrice,"onUpdate:modelValue":a[4]||(a[4]=l=>e(o).truckagePrice=l),placeholder:"\u8BF7\u8F93\u5165\u642C\u8FD0\u8D39\uFF0C\u5355\u4F4D\uFF1A\u5143",min:0,precision:2,class:"!w-1/1"},null,8,["modelValue"])]),_:1}),s(d,{label:"\u8D1F\u8D23\u4EBA",prop:"principal"},{default:r(()=>[s(c,{modelValue:e(o).principal,"onUpdate:modelValue":a[5]||(a[5]=l=>e(o).principal=l),placeholder:"\u8BF7\u8F93\u5165\u8D1F\u8D23\u4EBA"},null,8,["modelValue"])]),_:1}),s(d,{label:"\u6392\u5E8F",prop:"sort"},{default:r(()=>[s(f,{modelValue:e(o).sort,"onUpdate:modelValue":a[6]||(a[6]=l=>e(o).sort=l),placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F",precision:0,class:"!w-1/1"},null,8,["modelValue"])]),_:1}),s(d,{label:"\u5907\u6CE8",prop:"remark"},{default:r(()=>[s(c,{type:"textarea",modelValue:e(o).remark,"onUpdate:modelValue":a[7]||(a[7]=l=>e(o).remark=l),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[A,e(i)]])]),_:1},8,["title","modelValue"])}}});export{le as _};