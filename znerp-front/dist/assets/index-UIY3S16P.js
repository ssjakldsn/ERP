import{d as G,z as Q,h as W,r as m,e as X,u as Y,n as Z,O as $,o as d,c as ee,f as e,w as a,a as l,P as ae,x as s,y as f,q as w,k as le,t as L,dV as te,F as re,U as ie,C as oe,H as ne,I as se,J as pe,l as me,m as ce,af as de,K as ue,L as fe,M as we}from"./index-CIfmhqRC.js";import{_ as ge}from"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import{_ as he}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{_ as xe}from"./index-2RHHZ-Zv.js";import{d as g}from"./formatTime-DFFN_xWx.js";import{d as be}from"./download-D5Lb_h0f.js";import{f as ye,h as _e,i as Ce}from"./index-B5nlbV2q.js";import{_ as ke}from"./BusinessForm.vue_vue_type_script_setup_true_lang-BT6WnAjK.js";import"./index-CrBeVHKs.js";import"./el-card-DyMugU68.js";import"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import"./index-CwB7FJGa.js";import"./index-BZptzjxi.js";import"./index-QrlE36WK.js";import"./BusinessProductForm.vue_vue_type_script_setup_true_lang-23yRPDfu.js";import"./DictTag.vue_vue_type_script_lang-CTpVFm77.js";import"./color-BN7ZL7BD.js";import"./index-BVTl5RdT.js";const ve=G({name:"CrmBusiness",__name:"index",setup(Ne){const y=Q(),{t:B}=W(),_=m(!0),T=m(0),U=m([]),o=X({pageNo:1,pageSize:10,sceneType:"1",name:null}),V=m(),C=m(!1),k=m("1"),u=async()=>{_.value=!0;try{const n=await ye(o);U.value=n.list,T.value=n.total}finally{_.value=!1}},h=()=>{o.pageNo=1,u()},H=()=>{V.value.resetFields(),h()},K=n=>{o.sceneType=n.paneName,h()},{push:S}=Y(),z=m(),P=(n,i)=>{z.value.open(n,i)},R=async()=>{try{await y.exportConfirm(),C.value=!0;const n=await Ce(o);be.excel(n,"\u5546\u673A.xls")}catch{}finally{C.value=!1}};return Z(()=>{u()}),(n,i)=>{const q=xe,J=ie,D=oe,x=ne,c=se,M=pe,F=he,v=me,O=ce,I=de,r=ue,j=fe,A=ge,b=$("hasPermi"),E=we;return d(),ee(re,null,[e(q,{title:"\u3010\u5546\u673A\u3011\u5546\u673A\u7BA1\u7406\u3001\u5546\u673A\u72B6\u6001",url:"https://doc.iocoder.cn/crm/business/"}),e(q,{title:"\u3010\u901A\u7528\u3011\u6570\u636E\u6743\u9650",url:"https://doc.iocoder.cn/crm/permission/"}),e(F,null,{default:a(()=>[e(M,{ref_key:"queryFormRef",ref:V,inline:!0,model:l(o),class:"-mb-15px","label-width":"68px"},{default:a(()=>[e(D,{label:"\u5546\u673A\u540D\u79F0",prop:"name"},{default:a(()=>[e(J,{modelValue:l(o).name,"onUpdate:modelValue":i[0]||(i[0]=t=>l(o).name=t),class:"!w-240px",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u5546\u673A\u540D\u79F0",onKeyup:ae(h,["enter"])},null,8,["modelValue"])]),_:1}),e(D,null,{default:a(()=>[e(c,{onClick:h},{default:a(()=>[e(x,{class:"mr-5px",icon:"ep:search"}),s(" \u641C\u7D22 ")]),_:1}),e(c,{onClick:H},{default:a(()=>[e(x,{class:"mr-5px",icon:"ep:refresh"}),s(" \u91CD\u7F6E ")]),_:1}),f((d(),w(c,{type:"primary",onClick:i[1]||(i[1]=t=>P("create"))},{default:a(()=>[e(x,{class:"mr-5px",icon:"ep:plus"}),s(" \u65B0\u589E ")]),_:1})),[[b,["crm:business:create"]]]),f((d(),w(c,{loading:l(C),plain:"",type:"success",onClick:R},{default:a(()=>[e(x,{class:"mr-5px",icon:"ep:download"}),s(" \u5BFC\u51FA ")]),_:1},8,["loading"])),[[b,["crm:business:export"]]])]),_:1})]),_:1},8,["model"])]),_:1}),e(F,null,{default:a(()=>[e(O,{modelValue:l(k),"onUpdate:modelValue":i[2]||(i[2]=t=>le(k)?k.value=t:null),onTabClick:K},{default:a(()=>[e(v,{label:"\u6211\u8D1F\u8D23\u7684",name:"1"}),e(v,{label:"\u6211\u53C2\u4E0E\u7684",name:"2"}),e(v,{label:"\u4E0B\u5C5E\u8D1F\u8D23\u7684",name:"3"})]),_:1},8,["modelValue"]),f((d(),w(j,{data:l(U),"show-overflow-tooltip":!0,stripe:!0},{default:a(()=>[e(r,{align:"center",fixed:"left",label:"\u5546\u673A\u540D\u79F0",prop:"name",width:"160"},{default:a(t=>[e(I,{underline:!1,type:"primary",onClick:N=>{return p=t.row.id,void S({name:"CrmBusinessDetail",params:{id:p}});var p}},{default:a(()=>[s(L(t.row.name),1)]),_:2},1032,["onClick"])]),_:1}),e(r,{align:"center",fixed:"left",label:"\u5BA2\u6237\u540D\u79F0",prop:"customerName",width:"120"},{default:a(t=>[e(I,{underline:!1,type:"primary",onClick:N=>{return p=t.row.customerId,void S({name:"CrmCustomerDetail",params:{id:p}});var p}},{default:a(()=>[s(L(t.row.customerName),1)]),_:2},1032,["onClick"])]),_:1}),e(r,{formatter:l(te),align:"center",label:"\u5546\u673A\u91D1\u989D\uFF08\u5143\uFF09",prop:"totalPrice",width:"140"},null,8,["formatter"]),e(r,{formatter:l(g),align:"center",label:"\u9884\u8BA1\u6210\u4EA4\u65E5\u671F",prop:"dealTime",width:"180px"},null,8,["formatter"]),e(r,{align:"center",label:"\u5907\u6CE8",prop:"remark",width:"200"}),e(r,{formatter:l(g),align:"center",label:"\u4E0B\u6B21\u8054\u7CFB\u65F6\u95F4",prop:"contactNextTime",width:"180px"},null,8,["formatter"]),e(r,{align:"center",label:"\u8D1F\u8D23\u4EBA",prop:"ownerUserName",width:"100px"}),e(r,{align:"center",label:"\u6240\u5C5E\u90E8\u95E8",prop:"ownerUserDeptName",width:"100px"}),e(r,{formatter:l(g),align:"center",label:"\u6700\u540E\u8DDF\u8FDB\u65F6\u95F4",prop:"contactLastTime",width:"180px"},null,8,["formatter"]),e(r,{formatter:l(g),align:"center",label:"\u66F4\u65B0\u65F6\u95F4",prop:"updateTime",width:"180px"},null,8,["formatter"]),e(r,{formatter:l(g),align:"center",label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime",width:"180px"},null,8,["formatter"]),e(r,{align:"center",label:"\u521B\u5EFA\u4EBA",prop:"creatorName",width:"100px"}),e(r,{align:"center",fixed:"right",label:"\u5546\u673A\u72B6\u6001\u7EC4",prop:"statusTypeName",width:"140"}),e(r,{align:"center",fixed:"right",label:"\u5546\u673A\u9636\u6BB5",prop:"statusName",width:"120"}),e(r,{align:"center",fixed:"right",label:"\u64CD\u4F5C",width:"130px"},{default:a(t=>[f((d(),w(c,{link:"",type:"primary",onClick:N=>P("update",t.row.id)},{default:a(()=>[s(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[b,["crm:business:update"]]]),f((d(),w(c,{link:"",type:"danger",onClick:N=>(async p=>{try{await y.delConfirm(),await _e(p),y.success(B("common.delSuccess")),await u()}catch{}})(t.row.id)},{default:a(()=>[s(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[b,["crm:business:delete"]]])]),_:1})]),_:1},8,["data"])),[[E,l(_)]]),e(A,{limit:l(o).pageSize,"onUpdate:limit":i[3]||(i[3]=t=>l(o).pageSize=t),page:l(o).pageNo,"onUpdate:page":i[4]||(i[4]=t=>l(o).pageNo=t),total:l(T),onPagination:u},null,8,["limit","page","total"])]),_:1}),e(ke,{ref_key:"formRef",ref:z,onSuccess:u},null,512)],64)}}});export{ve as default};