import{bt as m,d as D,h as K,z as N,r,e as W,a3 as O,o as b,q as S,w as t,a as e,x as T,a5 as Q,f as a,y as X,k as F,U as Y,C as Z,E as $,G as ee,cn as ae,j as le,J as te,l as oe,m as se,I as de,M as ue}from"./index-CIfmhqRC.js";import{_ as re}from"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import{_ as me}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{_ as ie}from"./StockMoveItemForm.vue_vue_type_script_setup_true_lang-BZybpB3G.js";const n={getStockMovePage:async o=>await m.get({url:"/erp/stock-move/page",params:o}),getStockMove:async o=>await m.get({url:"/erp/stock-move/get?id="+o}),createStockMove:async o=>await m.post({url:"/erp/stock-move/create",data:o}),updateStockMove:async o=>await m.put({url:"/erp/stock-move/update",data:o}),updateStockMoveStatus:async(o,f)=>await m.put({url:"/erp/stock-move/update-status",params:{id:o,status:f}}),deleteStockMove:async o=>await m.delete({url:"/erp/stock-move/delete",params:{ids:o.join(",")}}),exportStockMove:async o=>await m.download({url:"/erp/stock-move/export-excel",params:o})},ce=D({name:"StockMoveForm",__name:"StockMoveForm",emits:["success"],setup(o,{expose:f,emit:C}){const{t:k}=K(),M=N(),i=r(!1),g=r(""),c=r(!1),_=r(""),s=r({id:void 0,customerId:void 0,moveTime:void 0,remark:void 0,fileUrl:"",items:[]}),I=W({moveTime:[{required:!0,message:"\u8C03\u5EA6\u65F6\u95F4\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),y=O(()=>_.value==="detail"),w=r(),V=r("item"),U=r();f({open:async(u,l)=>{if(i.value=!0,g.value=k("action."+u),_.value=u,E(),l){c.value=!0;try{s.value=await n.getStockMove(l)}finally{c.value=!1}}}});const q=C,j=async()=>{await w.value.validate(),await U.value.validate(),c.value=!0;try{const u=s.value;_.value==="create"?(await n.createStockMove(u),M.success(k("common.createSuccess"))):(await n.updateStockMove(u),M.success(k("common.updateSuccess"))),i.value=!1,q("success")}finally{c.value=!1}},E=()=>{var u;s.value={id:void 0,customerId:void 0,moveTime:void 0,remark:void 0,fileUrl:void 0,items:[]},(u=w.value)==null||u.resetFields()};return(u,l)=>{const x=Y,p=Z,v=$,R=ee,z=ae,G=le,H=te,J=oe,L=se,P=me,h=de,A=re,B=ue;return b(),S(A,{title:e(g),modelValue:e(i),"onUpdate:modelValue":l[6]||(l[6]=d=>F(i)?i.value=d:null),width:"1080"},{footer:t(()=>[e(y)?Q("",!0):(b(),S(h,{key:0,onClick:j,type:"primary",disabled:e(c)},{default:t(()=>[T(" \u786E \u5B9A ")]),_:1},8,["disabled"])),a(h,{onClick:l[5]||(l[5]=d=>i.value=!1)},{default:t(()=>[T("\u53D6 \u6D88")]),_:1})]),default:t(()=>[X((b(),S(H,{ref_key:"formRef",ref:w,model:e(s),rules:e(I),"label-width":"100px",disabled:e(y)},{default:t(()=>[a(G,{gutter:20},{default:t(()=>[a(v,{span:8},{default:t(()=>[a(p,{label:"\u8C03\u5EA6\u5355\u53F7",prop:"no"},{default:t(()=>[a(x,{disabled:"",modelValue:e(s).no,"onUpdate:modelValue":l[0]||(l[0]=d=>e(s).no=d),placeholder:"\u4FDD\u5B58\u65F6\u81EA\u52A8\u751F\u6210"},null,8,["modelValue"])]),_:1})]),_:1}),a(v,{span:8},{default:t(()=>[a(p,{label:"\u8C03\u5EA6\u65F6\u95F4",prop:"moveTime"},{default:t(()=>[a(R,{modelValue:e(s).moveTime,"onUpdate:modelValue":l[1]||(l[1]=d=>e(s).moveTime=d),type:"date","value-format":"x",placeholder:"\u9009\u62E9\u8C03\u5EA6\u65F6\u95F4",class:"!w-1/1"},null,8,["modelValue"])]),_:1})]),_:1}),a(v,{span:16},{default:t(()=>[a(p,{label:"\u5907\u6CE8",prop:"remark"},{default:t(()=>[a(x,{type:"textarea",modelValue:e(s).remark,"onUpdate:modelValue":l[2]||(l[2]=d=>e(s).remark=d),rows:1,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1}),a(v,{span:8},{default:t(()=>[a(p,{label:"\u9644\u4EF6",prop:"fileUrl"},{default:t(()=>[a(z,{"is-show-tip":!1,modelValue:e(s).fileUrl,"onUpdate:modelValue":l[3]||(l[3]=d=>e(s).fileUrl=d),limit:1},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules","disabled"])),[[B,e(c)]]),a(P,null,{default:t(()=>[a(L,{modelValue:e(V),"onUpdate:modelValue":l[4]||(l[4]=d=>F(V)?V.value=d:null),class:"-mt-15px -mb-10px"},{default:t(()=>[a(J,{label:"\u8C03\u5EA6\u4EA7\u54C1\u6E05\u5355",name:"item"},{default:t(()=>[a(ie,{ref_key:"itemFormRef",ref:U,items:e(s).items,disabled:e(y)},null,8,["items","disabled"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["title","modelValue"])}}});export{n as S,ce as _};
