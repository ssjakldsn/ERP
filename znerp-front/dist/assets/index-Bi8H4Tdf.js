import{d as ae,z as le,h as re,r as d,e as te,n as oe,as as se,o as s,c as m,f as e,w as l,a as o,P as ie,F as v,p as K,q as g,x as i,y as A,g as n,D as pe,t as f,a5 as C,k as ue,U as de,C as ne,A as ce,B as me,H as fe,I as we,J as he,K as _e,L as ge,i as ye,af as ke,cG as ve,M as be}from"./index-CIfmhqRC.js";import{_ as Se}from"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import{E as xe}from"./el-image-DLpquQe6.js";import{_ as Ne}from"./DictTag.vue_vue_type_script_lang-CTpVFm77.js";import{_ as Ce}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{_ as Ue}from"./PurchaseOrderForm.vue_vue_type_script_setup_true_lang-eg3s4DM-.js";import{_ as Ve}from"./UploadImage.vue_vue_type_script_setup_true_lang-CrxuI2Mo.js";import{_ as qe}from"./CheckForm.vue_vue_type_script_setup_true_lang-Cf0grHjr.js";import{Z as U}from"./index-H3f_2XHj.js";import{n as ze}from"./PurchaseOrderItemForm.vue_vue_type_script_setup_true_lang-Wwp1t-rc.js";import{_ as Pe}from"./LogisticsOrderForm.vue_vue_type_script_setup_true_lang-BIHTgjLi.js";import"./index-CrBeVHKs.js";import"./color-BN7ZL7BD.js";import"./el-card-DyMugU68.js";import"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import"./el-descriptions-item-BL6ba85F.js";import"./formatTime-DFFN_xWx.js";const Re={class:"flex bg-blue-50 py-1 px-3 dark:bg-blue-900"},Fe={class:"flex-1 text-blue-500 ml-4"},Oe={class:"pl-4"},Ie={class:"flex gap-5"},Te={class:"flex-1"},Be={key:1,class:"bg-gray-100 text-gray-600 px-2 dark:bg-blue-100"},De={class:"text-gray-400"},Je=n("span",null,"\u9762\u5355\u6253\u5370\u72B6\u6001\u786E\u8BA4",-1),Ke={class:"dialog-footer"},Ae=ae({__name:"index",setup(Ee){const V=le();re();const y=d(!1),b=d(!0),q=d(0),z=d([]),p=te({pageNo:1,pageSize:10,orderNumber:"",status:"31",shopName:void 0}),P=d(),R=d([]),E=d([{info:"\u5546\u54C1\u4FE1\u606F",price:"\u5355\u4EF7\uFF08USD\uFF09",num:"\u6570\u91CF",requiresShipping:"\u914D\u9001\u65B9\u5F0F"}]),c=async()=>{b.value=!0;try{const w=await U.getOrderPage(p);z.value=w.list,q.value=w.total}finally{b.value=!1}},S=()=>{p.pageNo=1,c()},Z=()=>{P.value.resetFields(),S()},F=d(),O=(w,r,k)=>{F.value.open(w,r,k)},j=d(),G=async()=>{};return oe(async()=>{await c(),await(async()=>{var r;const w=await U.shopPage({pageNo:1,pageSize:10});R.value=(r=w.list)==null?void 0:r.map(k=>({label:k.name,value:k.enName}))})()}),(w,r)=>{const k=de,x=ne,H=ce,L=me,I=fe,h=we,M=he,T=Ce,u=_e,N=ge,Q=Ne,B=ye,W=ke,D=se("tempate"),X=xe,Y=Se,$=ve,J=be;return s(),m(v,null,[e(T,null,{default:l(()=>[e(M,{ref_key:"queryFormRef",ref:P,inline:!0,model:o(p),class:"-mb-15px","label-width":"88px"},{default:l(()=>[e(x,{label:"\u8BA2\u5355\u53F7",prop:"orderNumber"},{default:l(()=>[e(k,{modelValue:o(p).orderNumber,"onUpdate:modelValue":r[0]||(r[0]=a=>o(p).orderNumber=a),placeholder:"\u8BF7\u8F93\u5165\u8BA2\u5355\u53F7",clearable:"",onKeyup:ie(S,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),e(x,{label:"\u5E97\u94FA",prop:"shopName"},{default:l(()=>[e(L,{modelValue:o(p).shopName,"onUpdate:modelValue":r[1]||(r[1]=a=>o(p).shopName=a),placeholder:"\u8BF7\u9009\u62E9\u5E97\u94FA",clearable:"",class:"!w-240px"},{default:l(()=>[(s(!0),m(v,null,K(o(R),a=>(s(),g(H,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(x,null,{default:l(()=>[e(h,{onClick:S},{default:l(()=>[e(I,{class:"mr-5px",icon:"ep:search"}),i(" \u641C\u7D22 ")]),_:1}),e(h,{onClick:Z},{default:l(()=>[e(I,{class:"mr-5px",icon:"ep:refresh"}),i(" \u91CD\u7F6E ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(T,null,{default:l(()=>[A((s(),g(N,{data:o(z)},{default:l(()=>[e(u,null,{header:l(()=>[e(N,{data:o(E),"show-header":!1},{default:l(()=>[e(u,{prop:"info",width:"500"}),e(u,{prop:"price",width:"200"}),e(u,{prop:"num",width:"100"}),e(u,{prop:"requiresShipping",width:"200"}),e(u,{prop:"option",align:"right"})]),_:1},8,["data"])]),default:l(a=>[n("div",Re,[e(Q,{type:o(pe).ZN_ORDER_STATUS,value:a.row.status},null,8,["type","value"]),n("div",Fe,f(a.row.id),1),n("div",Oe,[e(h,{link:"",onClick:t=>O("detail",a.row)},{default:l(()=>[i(" \u67E5\u770B\u8BE6\u60C5 ")]),_:2},1032,["onClick"]),a.row.channelId?(s(),g(D,{key:0},{default:l(()=>[e(B,{direction:"vertical"}),a.row.wayBillNumber?C("",!0):(s(),g(h,{key:0,link:"",onClick:t=>(async _=>{try{await V.confirm("\u786E\u5B9A\u7533\u8BF7\u8FD0\u5355\u53F7\u5417\uFF1F"),await U.logisticsOrderSend([_.id]),V.success("\u7533\u8BF7\u6210\u529F\uFF01"),await c()}catch{}})(a.row)},{default:l(()=>[i(" \u7533\u8BF7\u8FD0\u5355\u53F7 ")]),_:2},1032,["onClick"])),a.row.wayBillNumber&&a.row.tagUrl?(s(),g(W,{key:1,type:"primary",href:a.row.tagUrl,target:"_blank",onClick:t=>(async _=>{try{console.log("id url111",_),y.value=!0}catch{}})(a.row.id)},{default:l(()=>[i("\u6253\u5370\u9762\u5355")]),_:2},1032,["href","onClick"])):C("",!0)]),_:2},1024)):(s(),g(D,{key:1},{default:l(()=>[e(B,{direction:"vertical"}),e(h,{link:"",onClick:t=>O("detail",a.row,"wl")},{default:l(()=>[i(" \u8BF7\u9009\u62E9\u7269\u6D41\u65B9\u5F0F ")]),_:2},1032,["onClick"])]),_:2},1024))])]),A((s(),g(N,{data:a.row.orderItems,"show-header":!1},{default:l(()=>[e(u,{width:"500"},{default:l(t=>[n("div",Ie,[e(X,{style:{width:"64px",height:"64px"},src:t.row.src?t.row.src:o(ze),fit:"cover"},null,8,["src"]),n("div",Te,[n("h4",null,f(t.row.title),1),JSON.parse(t.row.properties).length>0?(s(!0),m(v,{key:0},K(JSON.parse(t.row.properties),(_,ee)=>(s(),m("p",{key:"prop_"+ee},[_.value.includes("https://")?C("",!0):(s(),m(v,{key:0},[i(f(_.name)+": "+f(_.value),1)],64))]))),128)):(s(),m("span",Be,"Variants: "+f(t.row.variantTitle?t.row.variantTitle:"\u6682\u65E0"),1)),n("p",De,"SKU\uFF1A"+f(t.row.zhProductSku?t.row.zhProductSku:"\u6682\u65E0"),1)])])]),_:1}),e(u,{width:"200"},{default:l(t=>[i(f(t.row.price),1)]),_:1}),e(u,{width:"100"},{default:l(t=>[i(f(t.row.quantity),1)]),_:1}),e(u,{prop:"requiresShipping"},{default:l(t=>[t.row.requiresShipping==1?(s(),m(v,{key:0},[i(" \u8FD0\u8F93 ")],64)):(s(),m(v,{key:1},[i("\u65E0\u9700\u53D1\u8D27")],64))]),_:1})]),_:2},1032,["data"])),[[J,o(b)]])]),_:1})]),_:1},8,["data"])),[[J,o(b)]]),e(Y,{limit:o(p).pageSize,"onUpdate:limit":r[2]||(r[2]=a=>o(p).pageSize=a),page:o(p).pageNo,"onUpdate:page":r[3]||(r[3]=a=>o(p).pageNo=a),total:o(q),onPagination:c},null,8,["limit","page","total"])]),_:1}),e(Ue,{ref_key:"detailRef",ref:F,onSuccess:c},null,512),e(Ve,{ref:"uploadImgRef",onSuccess:c},null,512),e(qe,{ref:"checkRef",onSuccess:c},null,512),e(Pe,{ref_key:"orderForm",ref:j,onSuccess:c},null,512),e($,{modelValue:o(y),"onUpdate:modelValue":r[6]||(r[6]=a=>ue(y)?y.value=a:null),title:"\u6253\u5370\u4FE1\u606F",width:"500","before-close":G},{footer:l(()=>[n("div",Ke,[e(h,{onClick:r[4]||(r[4]=a=>y.value=!1)},{default:l(()=>[i("\u53D6\u6D88")]),_:1}),e(h,{type:"primary",onClick:r[5]||(r[5]=a=>y.value=!1)},{default:l(()=>[i(" \u6253\u5370\u5B8C\u6210 ")]),_:1})])]),default:l(()=>[Je]),_:1},8,["modelValue"])],64)}}});export{Ae as default};