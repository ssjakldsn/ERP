import{d as I,z as J,h as L,r as i,e as j,n as B,O as G,o as m,c as Q,f as e,w as l,a,P as v,x as u,y as f,q as _,D as W,F as X,U as Y,C as Z,H as $,I as ee,J as le,K as ae,L as oe,M as te}from"./index-CIfmhqRC.js";import{_ as re}from"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import{_ as pe}from"./DictTag.vue_vue_type_script_lang-CTpVFm77.js";import{_ as ne}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{_ as se}from"./index-2RHHZ-Zv.js";import{d as ie}from"./download-D5Lb_h0f.js";import{C as k}from"./index-CIRABDoG.js";import{_ as me}from"./CustomerForm.vue_vue_type_script_setup_true_lang-BeuH2jZq.js";import"./index-CrBeVHKs.js";import"./color-BN7ZL7BD.js";import"./el-card-DyMugU68.js";import"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import"./constants-A8BI3pz7.js";const ue=I({name:"ErpCustomer",__name:"index",setup(ce){const h=J(),{t:K}=L(),w=i(!0),V=i([]),S=i(0),t=j({pageNo:1,pageSize:10,name:void 0,mobile:void 0,telephone:void 0}),U=i(),x=i(!1),c=async()=>{w.value=!0;try{const n=await k.getCustomerPage(t);V.value=n.list,S.value=n.total}finally{w.value=!1}},d=()=>{t.pageNo=1,c()},F=()=>{U.value.resetFields(),d()},z=i(),N=(n,r)=>{z.value.open(n,r)},M=async()=>{try{await h.exportConfirm(),x.value=!0;const n=await k.exportCustomer(t);ie.excel(n,"\u5BA2\u6237.xls")}catch{}finally{x.value=!1}};return B(()=>{c()}),(n,r)=>{const O=se,C=Y,g=Z,y=$,s=ee,q=le,P=ne,p=ae,R=pe,T=oe,A=re,b=G("hasPermi"),D=te;return m(),Q(X,null,[e(O,{title:"\u3010\u9500\u552E\u3011\u9500\u552E\u8BA2\u5355\u3001\u51FA\u5E93\u3001\u9000\u8D27",url:"https://doc.iocoder.cn/erp/sale/"}),e(P,null,{default:l(()=>[e(q,{class:"-mb-15px",model:a(t),ref_key:"queryFormRef",ref:U,inline:!0,"label-width":"68px"},{default:l(()=>[e(g,{label:"\u540D\u79F0",prop:"name"},{default:l(()=>[e(C,{modelValue:a(t).name,"onUpdate:modelValue":r[0]||(r[0]=o=>a(t).name=o),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",clearable:"",onKeyup:v(d,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),e(g,{label:"\u624B\u673A\u53F7\u7801",prop:"mobile"},{default:l(()=>[e(C,{modelValue:a(t).mobile,"onUpdate:modelValue":r[1]||(r[1]=o=>a(t).mobile=o),placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801",clearable:"",onKeyup:v(d,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),e(g,{label:"\u8054\u7CFB\u7535\u8BDD",prop:"telephone"},{default:l(()=>[e(C,{modelValue:a(t).telephone,"onUpdate:modelValue":r[2]||(r[2]=o=>a(t).telephone=o),placeholder:"\u8BF7\u8F93\u5165\u8054\u7CFB\u7535\u8BDD",clearable:"",onKeyup:v(d,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),e(g,null,{default:l(()=>[e(s,{onClick:d},{default:l(()=>[e(y,{icon:"ep:search",class:"mr-5px"}),u(" \u641C\u7D22")]),_:1}),e(s,{onClick:F},{default:l(()=>[e(y,{icon:"ep:refresh",class:"mr-5px"}),u(" \u91CD\u7F6E")]),_:1}),f((m(),_(s,{type:"primary",plain:"",onClick:r[3]||(r[3]=o=>N("create"))},{default:l(()=>[e(y,{icon:"ep:plus",class:"mr-5px"}),u(" \u65B0\u589E ")]),_:1})),[[b,["erp:customer:create"]]]),f((m(),_(s,{type:"success",plain:"",onClick:M,loading:a(x)},{default:l(()=>[e(y,{icon:"ep:download",class:"mr-5px"}),u(" \u5BFC\u51FA ")]),_:1},8,["loading"])),[[b,["erp:customer:export"]]])]),_:1})]),_:1},8,["model"])]),_:1}),e(P,null,{default:l(()=>[f((m(),_(T,{data:a(V),stripe:!0,"show-overflow-tooltip":!0},{default:l(()=>[e(p,{label:"\u540D\u79F0",align:"center",prop:"name"}),e(p,{label:"\u8054\u7CFB\u4EBA",align:"center",prop:"contact"}),e(p,{label:"\u624B\u673A\u53F7\u7801",align:"center",prop:"mobile"}),e(p,{label:"\u8054\u7CFB\u7535\u8BDD",align:"center",prop:"telephone"}),e(p,{label:"\u7535\u5B50\u90AE\u7BB1",align:"center",prop:"email"}),e(p,{label:"\u5907\u6CE8",align:"center",prop:"remark"}),e(p,{label:"\u6392\u5E8F",align:"center",prop:"sort"}),e(p,{label:"\u72B6\u6001",align:"center",prop:"status"},{default:l(o=>[e(R,{type:a(W).COMMON_STATUS,value:o.row.status},null,8,["type","value"])]),_:1}),e(p,{label:"\u64CD\u4F5C",align:"center"},{default:l(o=>[f((m(),_(s,{link:"",type:"primary",onClick:E=>N("update",o.row.id)},{default:l(()=>[u(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[b,["erp:customer:update"]]]),f((m(),_(s,{link:"",type:"danger",onClick:E=>(async H=>{try{await h.delConfirm(),await k.deleteCustomer(H),h.success(K("common.delSuccess")),await c()}catch{}})(o.row.id)},{default:l(()=>[u(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[b,["erp:customer:delete"]]])]),_:1})]),_:1},8,["data"])),[[D,a(w)]]),e(A,{total:a(S),page:a(t).pageNo,"onUpdate:page":r[4]||(r[4]=o=>a(t).pageNo=o),limit:a(t).pageSize,"onUpdate:limit":r[5]||(r[5]=o=>a(t).pageSize=o),onPagination:c},null,8,["total","page","limit"])]),_:1}),e(me,{ref_key:"formRef",ref:z,onSuccess:c},null,512)],64)}}});export{ue as default};
