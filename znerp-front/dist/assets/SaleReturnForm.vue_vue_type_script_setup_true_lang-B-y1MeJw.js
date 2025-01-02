import{d as le,h as te,z as oe,r as i,e as de,a3 as ue,ar as re,dW as se,o as c,c as v,f as e,w as o,a as t,q as f,x as g,a5 as ie,y as ne,F as _,p as S,k as B,dX as R,U as ce,C as me,E as pe,G as fe,H as ve,I as _e,A as be,B as Ve,cn as Pe,j as Ue,l as Ie,m as he,cc as ke,J as we,M as ye}from"./index-CIfmhqRC.js";import{_ as ge}from"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import{_ as Se}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{S as x}from"./index-D2thxsIa.js";import{_ as Re}from"./SaleReturnItemForm.vue_vue_type_script_setup_true_lang-D-ofNN2v.js";import{C as xe}from"./index-CIRABDoG.js";import{A as Ce}from"./index-DBGbv79t.js";import{_ as Te}from"./SaleOrderReturnEnableList.vue_vue_type_script_setup_true_lang-SVgOuJBn.js";import{g as Fe}from"./index-QrlE36WK.js";const Ne=le({name:"SaleReturnForm",__name:"SaleReturnForm",emits:["success"],setup(Ae,{expose:J,emit:M}){const{t:b}=te(),C=oe(),m=i(!1),T=i(""),p=i(!1),V=i(""),l=i({id:void 0,customerId:void 0,accountId:void 0,saleUserId:void 0,returnTime:void 0,remark:void 0,fileUrl:"",discountPercent:0,discountPrice:0,totalPrice:0,otherPrice:0,orderNo:void 0,items:[],no:void 0}),O=de({customerId:[{required:!0,message:"\u5BA2\u6237\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],returnTime:[{required:!0,message:"\u9000\u8D27\u65F6\u95F4\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),P=ue(()=>V.value==="detail"),U=i(),F=i([]),I=i([]),N=i([]),h=i("item"),A=i();re(()=>l.value,u=>{if(!u)return;const a=u.items.reduce((r,s)=>r+s.totalPrice,0),n=u.discountPercent!=null?se(a,u.discountPercent/100):0;l.value.totalPrice=a-n+u.otherPrice},{deep:!0}),J({open:async(u,a)=>{if(m.value=!0,T.value=b("action."+u),V.value=u,H(),a){p.value=!0;try{l.value=await x.getSaleReturn(a)}finally{p.value=!1}}F.value=await xe.getCustomerSimpleList(),N.value=await Fe(),I.value=await Ce.getAccountSimpleList();const n=I.value.find(r=>r.defaultStatus);n&&(l.value.accountId=n.id)}});const q=i(),W=()=>{q.value.open()},z=u=>{l.value.orderId=u.id,l.value.orderNo=u.no,l.value.customerId=u.customerId,l.value.accountId=u.accountId,l.value.saleUserId=u.saleUserId,l.value.discountPercent=u.discountPercent,l.value.remark=u.remark,l.value.fileUrl=u.fileUrl,u.items.forEach(a=>{a.count=a.outCount-a.returnCount,a.orderItemId=a.id,a.id=void 0}),l.value.items=u.items.filter(a=>a.count>0)},D=M,G=async()=>{await U.value.validate(),await A.value.validate(),p.value=!0;try{const u=l.value;V.value==="create"?(await x.createSaleReturn(u),C.success(b("common.createSuccess"))):(await x.updateSaleReturn(u),C.success(b("common.updateSuccess"))),m.value=!1,D("success")}finally{p.value=!1}},H=()=>{var u;l.value={id:void 0,customerId:void 0,accountId:void 0,saleUserId:void 0,returnTime:void 0,remark:void 0,fileUrl:void 0,discountPercent:0,discountPrice:0,totalPrice:0,otherPrice:0,items:[]},(u=U.value)==null||u.resetFields()};return(u,a)=>{const n=ce,r=me,s=pe,X=fe,Y=ve,k=_e,w=be,y=Ve,j=Pe,E=Ue,K=Ie,Q=he,Z=Se,L=ke,$=we,ee=ge,ae=ye;return c(),v(_,null,[e(ee,{title:t(T),modelValue:t(m),"onUpdate:modelValue":a[14]||(a[14]=d=>B(m)?m.value=d:null),width:"1440"},{footer:o(()=>[t(P)?ie("",!0):(c(),f(k,{key:0,onClick:G,type:"primary",disabled:t(p)},{default:o(()=>[g(" \u786E \u5B9A ")]),_:1},8,["disabled"])),e(k,{onClick:a[13]||(a[13]=d=>m.value=!1)},{default:o(()=>[g("\u53D6 \u6D88")]),_:1})]),default:o(()=>[ne((c(),f($,{ref_key:"formRef",ref:U,model:t(l),rules:t(O),"label-width":"100px",disabled:t(P)},{default:o(()=>[e(E,{gutter:20},{default:o(()=>[e(s,{span:8},{default:o(()=>[e(r,{label:"\u9000\u8D27\u5355\u53F7",prop:"no"},{default:o(()=>[e(n,{disabled:"",modelValue:t(l).no,"onUpdate:modelValue":a[0]||(a[0]=d=>t(l).no=d),placeholder:"\u4FDD\u5B58\u65F6\u81EA\u52A8\u751F\u6210"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:8},{default:o(()=>[e(r,{label:"\u9000\u8D27\u65F6\u95F4",prop:"returnTime"},{default:o(()=>[e(X,{modelValue:t(l).returnTime,"onUpdate:modelValue":a[1]||(a[1]=d=>t(l).returnTime=d),type:"date","value-format":"x",placeholder:"\u9009\u62E9\u9000\u8D27\u65F6\u95F4",class:"!w-1/1"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:8},{default:o(()=>[e(r,{label:"\u5173\u8054\u8BA2\u5355",prop:"orderNo"},{default:o(()=>[e(n,{modelValue:t(l).orderNo,"onUpdate:modelValue":a[2]||(a[2]=d=>t(l).orderNo=d),readonly:""},{append:o(()=>[e(k,{onClick:W},{default:o(()=>[e(Y,{icon:"ep:search"}),g(" \u9009\u62E9 ")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{span:8},{default:o(()=>[e(r,{label:"\u5BA2\u6237",prop:"customerId"},{default:o(()=>[e(y,{modelValue:t(l).customerId,"onUpdate:modelValue":a[3]||(a[3]=d=>t(l).customerId=d),clearable:"",filterable:"",disabled:"",placeholder:"\u8BF7\u9009\u62E9\u5BA2\u6237",class:"!w-1/1"},{default:o(()=>[(c(!0),v(_,null,S(t(F),d=>(c(),f(w,{key:d.id,label:d.name,value:d.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{span:8},{default:o(()=>[e(r,{label:"\u9500\u552E\u4EBA\u5458",prop:"saleUserId"},{default:o(()=>[e(y,{modelValue:t(l).saleUserId,"onUpdate:modelValue":a[4]||(a[4]=d=>t(l).saleUserId=d),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u9500\u552E\u4EBA\u5458",class:"!w-1/1"},{default:o(()=>[(c(!0),v(_,null,S(t(N),d=>(c(),f(w,{key:d.id,label:d.nickname,value:d.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{span:16},{default:o(()=>[e(r,{label:"\u5907\u6CE8",prop:"remark"},{default:o(()=>[e(n,{type:"textarea",modelValue:t(l).remark,"onUpdate:modelValue":a[5]||(a[5]=d=>t(l).remark=d),rows:1,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:8},{default:o(()=>[e(r,{label:"\u9644\u4EF6",prop:"fileUrl"},{default:o(()=>[e(j,{"is-show-tip":!1,modelValue:t(l).fileUrl,"onUpdate:modelValue":a[6]||(a[6]=d=>t(l).fileUrl=d),limit:1},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(Z,null,{default:o(()=>[e(Q,{modelValue:t(h),"onUpdate:modelValue":a[7]||(a[7]=d=>B(h)?h.value=d:null),class:"-mt-15px -mb-10px"},{default:o(()=>[e(K,{label:"\u9000\u8D27\u4EA7\u54C1\u6E05\u5355",name:"item"},{default:o(()=>[e(Re,{ref_key:"itemFormRef",ref:A,items:t(l).items,disabled:t(P)},null,8,["items","disabled"])]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(E,{gutter:20},{default:o(()=>[e(s,{span:8},{default:o(()=>[e(r,{label:"\u4F18\u60E0\u7387\uFF08%\uFF09",prop:"discountPercent"},{default:o(()=>[e(L,{modelValue:t(l).discountPercent,"onUpdate:modelValue":a[8]||(a[8]=d=>t(l).discountPercent=d),"controls-position":"right",min:0,precision:2,placeholder:"\u8BF7\u8F93\u5165\u4F18\u60E0\u7387",class:"!w-1/1"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:8},{default:o(()=>[e(r,{label:"\u9000\u6B3E\u4F18\u60E0",prop:"discountPrice"},{default:o(()=>[e(n,{disabled:"",modelValue:t(l).discountPrice,"onUpdate:modelValue":a[9]||(a[9]=d=>t(l).discountPrice=d),formatter:t(R)},null,8,["modelValue","formatter"])]),_:1})]),_:1}),e(s,{span:8},{default:o(()=>[e(r,{label:"\u4F18\u60E0\u540E\u91D1\u989D"},{default:o(()=>[e(n,{disabled:"","model-value":t(l).totalPrice-t(l).otherPrice,formatter:t(R)},null,8,["model-value","formatter"])]),_:1})]),_:1}),e(s,{span:8},{default:o(()=>[e(r,{label:"\u5176\u5B83\u8D39\u7528",prop:"otherPrice"},{default:o(()=>[e(L,{modelValue:t(l).otherPrice,"onUpdate:modelValue":a[10]||(a[10]=d=>t(l).otherPrice=d),"controls-position":"right",min:0,precision:2,placeholder:"\u8BF7\u8F93\u5165\u5176\u5B83\u8D39\u7528",class:"!w-1/1"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:8},{default:o(()=>[e(r,{label:"\u7ED3\u7B97\u8D26\u6237",prop:"accountId"},{default:o(()=>[e(y,{modelValue:t(l).accountId,"onUpdate:modelValue":a[11]||(a[11]=d=>t(l).accountId=d),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u7ED3\u7B97\u8D26\u6237",class:"!w-1/1"},{default:o(()=>[(c(!0),v(_,null,S(t(I),d=>(c(),f(w,{key:d.id,label:d.name,value:d.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{span:8},{default:o(()=>[e(r,{label:"\u5E94\u9000\u91D1\u989D",prop:"totalPrice"},{default:o(()=>[e(n,{disabled:"",modelValue:t(l).totalPrice,"onUpdate:modelValue":a[12]||(a[12]=d=>t(l).totalPrice=d),formatter:t(R)},null,8,["modelValue","formatter"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules","disabled"])),[[ae,t(p)]])]),_:1},8,["title","modelValue"]),e(Te,{ref_key:"saleOrderReturnEnableListRef",ref:q,onSuccess:z},null,512)],64)}}});export{Ne as _};
