import{d as O,N as T,r as s,e as j,n as D,O as E,o as p,c as U,f as e,w as l,a as t,F as P,p as G,q as m,P as Q,x as c,y as f,z as W,h as X,A as Y,B as Z,C as $,U as ee,H as ae,I as le,J as te,K as re,L as oe,M as pe}from"./index-CIfmhqRC.js";import{_ as se}from"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import{_ as ne}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{d as ie}from"./formatTime-DFFN_xWx.js";import{g as de,a as ue,d as me}from"./property-DPsKsB2C.js";import{_ as ce}from"./ValueForm.vue_vue_type_script_setup_true_lang-mbBBmvIJ.js";import"./index-CrBeVHKs.js";import"./el-card-DyMugU68.js";import"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";const fe=O({name:"ProductPropertyValue",__name:"index",setup(ye){const k=W(),{t:S}=X(),{params:z}=T(),y=s(!0),h=s(0),v=s([]),r=j({pageNo:1,pageSize:10,propertyId:Number(z.propertyId),name:void 0}),x=s(),C=s([]),n=async()=>{y.value=!0;try{const i=await ue(r);v.value=i.list,h.value=i.total}finally{y.value=!1}},_=()=>{r.pageNo=1,n()},F=()=>{x.value.resetFields(),_()},I=s(),V=(i,o)=>{I.value.open(i,r.propertyId,o)};return D(async()=>{await n(),C.value.push(await de(r.propertyId))}),(i,o)=>{const R=Y,q=Z,g=$,A=ee,w=ae,d=le,K=te,N=ne,u=re,B=oe,H=se,b=E("hasPermi"),J=pe;return p(),U(P,null,[e(N,null,{default:l(()=>[e(K,{class:"-mb-15px",model:t(r),ref_key:"queryFormRef",ref:x,inline:!0,"label-width":"68px"},{default:l(()=>[e(g,{label:"\u5C5E\u6027\u9879",prop:"propertyId"},{default:l(()=>[e(q,{modelValue:t(r).propertyId,"onUpdate:modelValue":o[0]||(o[0]=a=>t(r).propertyId=a),class:"!w-240px",disabled:""},{default:l(()=>[(p(!0),U(P,null,G(t(C),a=>(p(),m(R,{key:a.id,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(g,{label:"\u540D\u79F0",prop:"name"},{default:l(()=>[e(A,{modelValue:t(r).name,"onUpdate:modelValue":o[1]||(o[1]=a=>t(r).name=a),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",clearable:"",onKeyup:Q(_,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),e(g,null,{default:l(()=>[e(d,{onClick:_},{default:l(()=>[e(w,{icon:"ep:search",class:"mr-5px"}),c(" \u641C\u7D22")]),_:1}),e(d,{onClick:F},{default:l(()=>[e(w,{icon:"ep:refresh",class:"mr-5px"}),c(" \u91CD\u7F6E")]),_:1}),f((p(),m(d,{plain:"",type:"primary",onClick:o[2]||(o[2]=a=>V("create"))},{default:l(()=>[e(w,{icon:"ep:plus",class:"mr-5px"}),c(" \u65B0\u589E ")]),_:1})),[[b,["product:property:create"]]])]),_:1})]),_:1},8,["model"])]),_:1}),e(N,null,{default:l(()=>[f((p(),m(B,{data:t(v)},{default:l(()=>[e(u,{label:"\u7F16\u53F7",align:"center","min-width":"60",prop:"id"}),e(u,{label:"\u5C5E\u6027\u503C\u540D\u79F0",align:"center","min-width":"150",prop:"name"}),e(u,{label:"\u5907\u6CE8",align:"center",prop:"remark","show-overflow-tooltip":!0}),e(u,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"createTime",width:"180",formatter:t(ie)},null,8,["formatter"]),e(u,{label:"\u64CD\u4F5C",align:"center"},{default:l(a=>[f((p(),m(d,{link:"",type:"primary",onClick:L=>V("update",a.row.id)},{default:l(()=>[c(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[b,["product:property:update"]]]),f((p(),m(d,{link:"",type:"danger",onClick:L=>(async M=>{try{await k.delConfirm(),await me(M),k.success(S("common.delSuccess")),await n()}catch{}})(a.row.id)},{default:l(()=>[c(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[b,["product:property:delete"]]])]),_:1})]),_:1},8,["data"])),[[J,t(y)]]),e(H,{total:t(h),page:t(r).pageNo,"onUpdate:page":o[3]||(o[3]=a=>t(r).pageNo=a),limit:t(r).pageSize,"onUpdate:limit":o[4]||(o[4]=a=>t(r).pageSize=a),onPagination:n},null,8,["total","page","limit"])]),_:1}),e(ce,{ref_key:"formRef",ref:I,onSuccess:n},null,512)],64)}}});export{fe as default};