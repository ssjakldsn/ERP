import{d as I,z as J,h as L,r as d,e as Q,n as j,O as E,o as s,c as v,f as e,w as t,a as l,P as W,F as V,p as X,Q as Z,D as M,q as m,x as c,y as _,a5 as $,U as ee,C as ae,A as le,B as te,G as re,H as oe,I as se,J as pe,K as ne,L as ue,M as ie}from"./index-CIfmhqRC.js";import{_ as de}from"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import{_ as me}from"./DictTag.vue_vue_type_script_lang-CTpVFm77.js";import{_ as ce}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{_ as fe}from"./index-2RHHZ-Zv.js";import{d as _e}from"./formatTime-DFFN_xWx.js";import{b as be,d as ye}from"./brand-CPSHRwFA.js";import{_ as ge}from"./BrandForm.vue_vue_type_script_setup_true_lang-z4xJKEUk.js";import"./index-CrBeVHKs.js";import"./color-BN7ZL7BD.js";import"./el-card-DyMugU68.js";import"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import"./constants-A8BI3pz7.js";const we=["src"],ve=I({name:"ProductBrand",__name:"index",setup(ke){const k=J(),{t:D}=L(),b=d(!0),h=d(0),x=d([]),o=Q({pageNo:1,pageSize:10,name:void 0,status:void 0,createTime:[]}),C=d(),n=async()=>{b.value=!0;try{const u=await be(o);x.value=u.list,h.value=u.total}finally{b.value=!1}},y=()=>{n()},N=()=>{C.value.resetFields(),y()},U=d(),S=(u,r)=>{U.value.open(u,r)};return j(()=>{n()}),(u,r)=>{const O=fe,Y=ee,f=ae,z=le,H=te,P=re,g=oe,i=se,A=pe,T=ce,p=ne,F=me,q=ue,B=de,w=E("hasPermi"),K=ie;return s(),v(V,null,[e(O,{title:"\u5546\u57CE\u624B\u518C\uFF08\u529F\u80FD\u5F00\u542F\uFF09",url:"https://doc.iocoder.cn/mall/build/"}),e(T,null,{default:t(()=>[e(A,{class:"-mb-15px",model:l(o),ref_key:"queryFormRef",ref:C,inline:!0,"label-width":"68px"},{default:t(()=>[e(f,{label:"\u54C1\u724C\u540D\u79F0",prop:"name"},{default:t(()=>[e(Y,{modelValue:l(o).name,"onUpdate:modelValue":r[0]||(r[0]=a=>l(o).name=a),placeholder:"\u8BF7\u8F93\u5165\u54C1\u724C\u540D\u79F0",clearable:"",onKeyup:W(y,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),e(f,{label:"\u72B6\u6001",prop:"status"},{default:t(()=>[e(H,{modelValue:l(o).status,"onUpdate:modelValue":r[1]||(r[1]=a=>l(o).status=a),placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001",clearable:"",class:"!w-240px"},{default:t(()=>[(s(!0),v(V,null,X(l(Z)(l(M).COMMON_STATUS),a=>(s(),m(z,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(f,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime"},{default:t(()=>[e(P,{modelValue:l(o).createTime,"onUpdate:modelValue":r[2]||(r[2]=a=>l(o).createTime=a),"value-format":"YYYY-MM-DD HH:mm:ss",type:"daterange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-240px"},null,8,["modelValue","default-time"])]),_:1}),e(f,null,{default:t(()=>[e(i,{onClick:y},{default:t(()=>[e(g,{icon:"ep:search",class:"mr-5px"}),c(" \u641C\u7D22")]),_:1}),e(i,{onClick:N},{default:t(()=>[e(g,{icon:"ep:refresh",class:"mr-5px"}),c(" \u91CD\u7F6E")]),_:1}),_((s(),m(i,{type:"primary",plain:"",onClick:r[3]||(r[3]=a=>S("create"))},{default:t(()=>[e(g,{icon:"ep:plus",class:"mr-5px"}),c(" \u65B0\u589E ")]),_:1})),[[w,["product:brand:create"]]])]),_:1})]),_:1},8,["model"])]),_:1}),e(T,null,{default:t(()=>[_((s(),m(q,{data:l(x),"row-key":"id","default-expand-all":""},{default:t(()=>[e(p,{label:"\u54C1\u724C\u540D\u79F0",prop:"name",sortable:""}),e(p,{label:"\u54C1\u724C\u56FE\u7247",align:"center",prop:"picUrl"},{default:t(a=>[a.row.picUrl?(s(),v("img",{key:0,src:a.row.picUrl,alt:"\u54C1\u724C\u56FE\u7247",class:"h-30px"},null,8,we)):$("",!0)]),_:1}),e(p,{label:"\u54C1\u724C\u6392\u5E8F",align:"center",prop:"sort"}),e(p,{label:"\u5F00\u542F\u72B6\u6001",align:"center",prop:"status"},{default:t(a=>[e(F,{type:l(M).COMMON_STATUS,value:a.row.status},null,8,["type","value"])]),_:1}),e(p,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"createTime",width:"180",formatter:l(_e)},null,8,["formatter"]),e(p,{label:"\u64CD\u4F5C",align:"center"},{default:t(a=>[_((s(),m(i,{link:"",type:"primary",onClick:R=>S("update",a.row.id)},{default:t(()=>[c(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[w,["product:brand:update"]]]),_((s(),m(i,{link:"",type:"danger",onClick:R=>(async G=>{try{await k.delConfirm(),await ye(G),k.success(D("common.delSuccess")),await n()}catch{}})(a.row.id)},{default:t(()=>[c(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[w,["product:brand:delete"]]])]),_:1})]),_:1},8,["data"])),[[K,l(b)]]),e(B,{total:l(h),page:l(o).pageNo,"onUpdate:page":r[4]||(r[4]=a=>l(o).pageNo=a),limit:l(o).pageSize,"onUpdate:limit":r[5]||(r[5]=a=>l(o).pageSize=a),onPagination:n},null,8,["total","page","limit"])]),_:1}),e(ge,{ref_key:"formRef",ref:U,onSuccess:n},null,512)],64)}}});export{ve as default};