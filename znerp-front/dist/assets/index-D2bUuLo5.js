import{d as J,e as L,b as Q,r as s,a3 as Z,ar as j,n as K,o as w,c as C,f as e,w as r,a,F as V,p as F,Q as O,D as W,q as P,x as Y,k as X,G as $,C as ee,A as ae,B as le,H as re,I as oe,J as te,l as se,m as ue,E as me}from"./index-CIfmhqRC.js";import{_ as de}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{E as pe}from"./el-tree-select-CYFGeiEt.js";import{g as ne}from"./index-C34hh2Ad.js";import{g as fe}from"./index-QrlE36WK.js";import{f as H,e as ye,g as ce,h as ie}from"./formatTime-DFFN_xWx.js";import{h as M,d as _e}from"./tree-BMqZf9_I.js";import{_ as ve}from"./CustomerConversionStat.vue_vue_type_script_setup_true_lang-BK7Ate-v.js";import{_ as be}from"./CustomerDealCycleByUser.vue_vue_type_script_setup_true_lang-D6XxWqDX.js";import{_ as ke}from"./CustomerDealCycleByArea.vue_vue_type_script_setup_true_lang-Bu4kXkwX.js";import{_ as we}from"./CustomerDealCycleByProduct.vue_vue_type_script_setup_true_lang-Dq-6TYiR.js";import{_ as De}from"./CustomerFollowUpSummary.vue_vue_type_script_setup_true_lang-BSvApSTF.js";import{_ as he}from"./CustomerFollowUpType.vue_vue_type_script_setup_true_lang-CLa3bpCq.js";import{_ as qe}from"./CustomerSummary.vue_vue_type_script_setup_true_lang-4FOtoOfH.js";import{_ as Ce}from"./CustomerPoolSummary.vue_vue_type_script_setup_true_lang-C9po2JJu.js";import"./el-card-DyMugU68.js";import"./DictTag.vue_vue_type_script_lang-CTpVFm77.js";import"./color-BN7ZL7BD.js";import"./el-skeleton-item-Dm6LwaUQ.js";import"./Echart.vue_vue_type_script_setup_true_lang-C-1NoClp.js";import"./echarts-D6KrxhA1.js";import"./customer-Y0u55tjD.js";const Ve=J({name:"CrmStatisticsCustomer",__name:"index",setup(Ie){const o=L({interval:2,deptId:Q().getUser.deptId,userId:void 0,times:[H(ye(new Date(new Date().getTime()-6048e5))),H(ce(new Date(new Date().getTime()-864e5)))]}),I=s(),U=s([]),S=s([]),N=Z(()=>o.deptId?S.value.filter(p=>p.deptId===o.deptId):[]),v=s("customerSummary"),x=s(),g=s(),B=s(),R=s(),z=s(),T=s(),A=s(),E=s(),d=()=>{var p,t,y,m,n,b,c,k,f,D,i,u,_,h,l,q;switch(v.value){case"customerSummary":(t=(p=x.value)==null?void 0:p.loadData)==null||t.call(p);break;case"followUpSummary":(m=(y=g.value)==null?void 0:y.loadData)==null||m.call(y);break;case"followUpType":(b=(n=B.value)==null?void 0:n.loadData)==null||b.call(n);break;case"conversionStat":(k=(c=R.value)==null?void 0:c.loadData)==null||k.call(c);break;case"poolSummary":(D=(f=z.value)==null?void 0:f.loadData)==null||D.call(f);break;case"dealCycleByUser":(u=(i=T.value)==null?void 0:i.loadData)==null||u.call(i);break;case"dealCycleByArea":(h=(_=A.value)==null?void 0:_.loadData)==null||h.call(_);break;case"dealCycleByProduct":(q=(l=E.value)==null?void 0:l.loadData)==null||q.call(l)}};j(v,()=>{d()});const G=()=>{I.value.resetFields(),d()};return K(async()=>{U.value=M(await ne()),S.value=M(await fe())}),(p,t)=>{const y=$,m=ee,n=ae,b=le,c=pe,k=re,f=oe,D=te,i=de,u=se,_=ue,h=me;return w(),C(V,null,[e(i,null,{default:r(()=>[e(D,{ref_key:"queryFormRef",ref:I,inline:!0,model:a(o),class:"-mb-15px","label-width":"68px"},{default:r(()=>[e(m,{label:"\u65F6\u95F4\u8303\u56F4",prop:"orderDate"},{default:r(()=>[e(y,{modelValue:a(o).times,"onUpdate:modelValue":t[0]||(t[0]=l=>a(o).times=l),"default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],shortcuts:a(ie),class:"!w-240px","end-placeholder":"\u7ED3\u675F\u65E5\u671F","start-placeholder":"\u5F00\u59CB\u65E5\u671F",type:"daterange","value-format":"YYYY-MM-DD HH:mm:ss",onChange:d},null,8,["modelValue","default-time","shortcuts"])]),_:1}),e(m,{label:"\u65F6\u95F4\u95F4\u9694",prop:"interval"},{default:r(()=>[e(b,{modelValue:a(o).interval,"onUpdate:modelValue":t[1]||(t[1]=l=>a(o).interval=l),class:"!w-240px",placeholder:"\u95F4\u9694\u7C7B\u578B",onChange:d},{default:r(()=>[(w(!0),C(V,null,F(a(O)(a(W).DATE_INTERVAL),l=>(w(),P(n,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(m,{label:"\u5F52\u5C5E\u90E8\u95E8",prop:"deptId"},{default:r(()=>[e(c,{modelValue:a(o).deptId,"onUpdate:modelValue":t[2]||(t[2]=l=>a(o).deptId=l),data:a(U),props:a(_e),"check-strictly":"",class:"!w-240px","node-key":"id",placeholder:"\u8BF7\u9009\u62E9\u5F52\u5C5E\u90E8\u95E8",onChange:t[3]||(t[3]=l=>(a(o).userId=void 0,d()))},null,8,["modelValue","data","props"])]),_:1}),e(m,{label:"\u5458\u5DE5",prop:"userId"},{default:r(()=>[e(b,{modelValue:a(o).userId,"onUpdate:modelValue":t[4]||(t[4]=l=>a(o).userId=l),class:"!w-240px",clearable:"",placeholder:"\u5458\u5DE5",onChange:d},{default:r(()=>[(w(!0),C(V,null,F(a(N),(l,q)=>(w(),P(n,{key:q,label:l.nickname,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(m,null,{default:r(()=>[e(f,{onClick:d},{default:r(()=>[e(k,{class:"mr-5px",icon:"ep:search"}),Y(" \u67E5\u8BE2 ")]),_:1}),e(f,{onClick:G},{default:r(()=>[e(k,{class:"mr-5px",icon:"ep:refresh"}),Y(" \u91CD\u7F6E ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(h,null,{default:r(()=>[e(_,{modelValue:a(v),"onUpdate:modelValue":t[5]||(t[5]=l=>X(v)?v.value=l:null)},{default:r(()=>[e(u,{label:"\u5BA2\u6237\u603B\u91CF\u5206\u6790",lazy:"",name:"customerSummary"},{default:r(()=>[e(qe,{ref_key:"customerSummaryRef",ref:x,"query-params":a(o)},null,8,["query-params"])]),_:1}),e(u,{label:"\u5BA2\u6237\u8DDF\u8FDB\u6B21\u6570\u5206\u6790",lazy:"",name:"followUpSummary"},{default:r(()=>[e(De,{ref_key:"followUpSummaryRef",ref:g,"query-params":a(o)},null,8,["query-params"])]),_:1}),e(u,{label:"\u5BA2\u6237\u8DDF\u8FDB\u65B9\u5F0F\u5206\u6790",lazy:"",name:"followUpType"},{default:r(()=>[e(he,{ref_key:"followUpTypeRef",ref:B,"query-params":a(o)},null,8,["query-params"])]),_:1}),e(u,{label:"\u5BA2\u6237\u8F6C\u5316\u7387\u5206\u6790",lazy:"",name:"conversionStat"},{default:r(()=>[e(ve,{ref_key:"conversionStatRef",ref:R,"query-params":a(o)},null,8,["query-params"])]),_:1}),e(u,{label:"\u516C\u6D77\u5BA2\u6237\u5206\u6790",lazy:"",name:"poolSummary"},{default:r(()=>[e(Ce,{ref_key:"customerPoolSummaryRef",ref:z,"query-params":a(o)},null,8,["query-params"])]),_:1}),e(u,{label:"\u5458\u5DE5\u5BA2\u6237\u6210\u4EA4\u5468\u671F\u5206\u6790",lazy:"",name:"dealCycleByUser"},{default:r(()=>[e(be,{ref_key:"dealCycleByUserRef",ref:T,"query-params":a(o)},null,8,["query-params"])]),_:1}),e(u,{label:"\u5730\u533A\u5BA2\u6237\u6210\u4EA4\u5468\u671F\u5206\u6790",lazy:"",name:"dealCycleByArea"},{default:r(()=>[e(ke,{ref_key:"dealCycleByAreaRef",ref:A,"query-params":a(o)},null,8,["query-params"])]),_:1}),e(u,{label:"\u4EA7\u54C1\u5BA2\u6237\u6210\u4EA4\u5468\u671F\u5206\u6790",lazy:"",name:"dealCycleByProduct"},{default:r(()=>[e(we,{ref_key:"dealCycleByProductRef",ref:E,"query-params":a(o)},null,8,["query-params"])]),_:1})]),_:1},8,["modelValue"])]),_:1})],64)}}});export{Ve as default};
