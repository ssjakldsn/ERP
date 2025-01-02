import{d as le,z as re,h as oe,r as f,e as ne,u as ie,n as ce,O as pe,o as m,c as M,f as e,w as t,a as l,P as S,F as j,p as me,q as d,x as c,y as w,k as se,t as C,dV as T,dX as de,D as ue,a5 as fe,U as we,C as ye,A as be,B as _e,H as ge,I as ke,J as Ce,l as he,m as ve,K as xe,af as Ne,L as Ve,M as Ue}from"./index-CIfmhqRC.js";import{_ as Ie}from"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import{_ as Se}from"./DictTag.vue_vue_type_script_lang-CTpVFm77.js";import{_ as Te}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{_ as De}from"./index-2RHHZ-Zv.js";import{b as D,d as P}from"./formatTime-DFFN_xWx.js";import{d as Pe}from"./download-D5Lb_h0f.js";import{e as Re,i as qe,j as ze,s as Ke}from"./index-jPQDaA_X.js";import{_ as Ae}from"./ContractForm.vue_vue_type_script_setup_true_lang-BKXLCfjR.js";import{a as Be}from"./index-BZptzjxi.js";import"./index-CrBeVHKs.js";import"./color-BN7ZL7BD.js";import"./el-card-DyMugU68.js";import"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import"./index-QrlE36WK.js";import"./index-B_QTmj5f.js";import"./index-B5nlbV2q.js";import"./ContractProductForm.vue_vue_type_script_setup_true_lang-BBuHPlBt.js";import"./index-BVTl5RdT.js";const Fe=le({name:"CrmContract",__name:"index",setup(He){const g=re(),{t:G}=oe(),N=f(!0),R=f(0),q=f([]),i=ne({pageNo:1,pageSize:10,sceneType:"1",name:null,customerId:null,orderDate:[],no:null}),z=f(),V=f(!1),U=f("1"),K=f([]),O=p=>{i.sceneType=p.paneName,_()},b=async()=>{N.value=!0;try{const p=await Re(i);q.value=p.list,R.value=p.total}finally{N.value=!1}},_=()=>{i.pageNo=1,b()},Q=()=>{z.value.resetFields(),_()},A=f(),B=(p,o)=>{A.value.open(p,o)},W=async()=>{try{await g.exportConfirm(),V.value=!0;const p=await ze(i);Pe.excel(p,"\u5408\u540C.xls")}catch{}finally{V.value=!1}},{push:k}=ie(),F=p=>{k({name:"CrmContractDetail",params:{id:p}})};return ce(async()=>{await b(),K.value=await Be()}),(p,o)=>{const H=De,J=we,h=ye,X=be,$=_e,v=ge,s=ke,E=Ce,L=Te,I=he,Y=ve,r=xe,x=Ne,Z=Se,ee=Ve,ae=Ie,y=pe("hasPermi"),te=Ue;return m(),M(j,null,[e(H,{title:"\u3010\u5408\u540C\u3011\u5408\u540C\u7BA1\u7406\u3001\u5408\u540C\u63D0\u9192",url:"https://doc.iocoder.cn/crm/contract/"}),e(H,{title:"\u3010\u901A\u7528\u3011\u6570\u636E\u6743\u9650",url:"https://doc.iocoder.cn/crm/permission/"}),e(L,null,{default:t(()=>[e(E,{ref_key:"queryFormRef",ref:z,inline:!0,model:l(i),class:"-mb-15px","label-width":"68px"},{default:t(()=>[e(h,{label:"\u5408\u540C\u7F16\u53F7",prop:"no"},{default:t(()=>[e(J,{modelValue:l(i).no,"onUpdate:modelValue":o[0]||(o[0]=a=>l(i).no=a),class:"!w-240px",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u5408\u540C\u7F16\u53F7",onKeyup:S(_,["enter"])},null,8,["modelValue"])]),_:1}),e(h,{label:"\u5408\u540C\u540D\u79F0",prop:"name"},{default:t(()=>[e(J,{modelValue:l(i).name,"onUpdate:modelValue":o[1]||(o[1]=a=>l(i).name=a),class:"!w-240px",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u5408\u540C\u540D\u79F0",onKeyup:S(_,["enter"])},null,8,["modelValue"]),e(h,{label:"\u5BA2\u6237",prop:"customerId"},{default:t(()=>[e($,{modelValue:l(i).customerId,"onUpdate:modelValue":o[2]||(o[2]=a=>l(i).customerId=a),class:"!w-240px",clearable:"","lable-key":"name",placeholder:"\u8BF7\u9009\u62E9\u5BA2\u6237","value-key":"id",onKeyup:S(_,["enter"])},{default:t(()=>[(m(!0),M(j,null,me(l(K),a=>(m(),d(X,{key:a.id,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(s,{onClick:_},{default:t(()=>[e(v,{class:"mr-5px",icon:"ep:search"}),c(" \u641C\u7D22 ")]),_:1}),e(s,{onClick:Q},{default:t(()=>[e(v,{class:"mr-5px",icon:"ep:refresh"}),c(" \u91CD\u7F6E ")]),_:1}),w((m(),d(s,{type:"primary",onClick:o[3]||(o[3]=a=>B("create"))},{default:t(()=>[e(v,{class:"mr-5px",icon:"ep:plus"}),c(" \u65B0\u589E ")]),_:1})),[[y,["crm:contract:create"]]]),w((m(),d(s,{loading:l(V),plain:"",type:"success",onClick:W},{default:t(()=>[e(v,{class:"mr-5px",icon:"ep:download"}),c(" \u5BFC\u51FA ")]),_:1},8,["loading"])),[[y,["crm:contract:export"]]])]),_:1})]),_:1},8,["model"])]),_:1}),e(L,null,{default:t(()=>[e(Y,{modelValue:l(U),"onUpdate:modelValue":o[4]||(o[4]=a=>se(U)?U.value=a:null),onTabClick:O},{default:t(()=>[e(I,{label:"\u6211\u8D1F\u8D23\u7684",name:"1"}),e(I,{label:"\u6211\u53C2\u4E0E\u7684",name:"2"}),e(I,{label:"\u4E0B\u5C5E\u8D1F\u8D23\u7684",name:"3"})]),_:1},8,["modelValue"]),w((m(),d(ee,{data:l(q),"show-overflow-tooltip":!0,stripe:!0},{default:t(()=>[e(r,{align:"center",fixed:"left",label:"\u5408\u540C\u7F16\u53F7",prop:"no",width:"180"}),e(r,{align:"center",fixed:"left",label:"\u5408\u540C\u540D\u79F0",prop:"name",width:"160"},{default:t(a=>[e(x,{underline:!1,type:"primary",onClick:u=>F(a.row.id)},{default:t(()=>[c(C(a.row.name),1)]),_:2},1032,["onClick"])]),_:1}),e(r,{align:"center",label:"\u5BA2\u6237\u540D\u79F0",prop:"customerName",width:"120"},{default:t(a=>[e(x,{underline:!1,type:"primary",onClick:u=>{return n=a.row.customerId,void k({name:"CrmCustomerDetail",params:{id:n}});var n}},{default:t(()=>[c(C(a.row.customerName),1)]),_:2},1032,["onClick"])]),_:1}),e(r,{align:"center",label:"\u5546\u673A\u540D\u79F0",prop:"businessName",width:"130"},{default:t(a=>[e(x,{underline:!1,type:"primary",onClick:u=>{return n=a.row.businessId,void k({name:"CrmBusinessDetail",params:{id:n}});var n}},{default:t(()=>[c(C(a.row.businessName),1)]),_:2},1032,["onClick"])]),_:1}),e(r,{align:"center",label:"\u5408\u540C\u91D1\u989D\uFF08\u5143\uFF09",prop:"totalPrice",width:"140",formatter:l(T)},null,8,["formatter"]),e(r,{align:"center",label:"\u4E0B\u5355\u65F6\u95F4",prop:"orderDate",width:"120",formatter:l(D)},null,8,["formatter"]),e(r,{align:"center",label:"\u5408\u540C\u5F00\u59CB\u65F6\u95F4",prop:"startTime",width:"120",formatter:l(D)},null,8,["formatter"]),e(r,{align:"center",label:"\u5408\u540C\u7ED3\u675F\u65F6\u95F4",prop:"endTime",width:"120",formatter:l(D)},null,8,["formatter"]),e(r,{align:"center",label:"\u5BA2\u6237\u7B7E\u7EA6\u4EBA",prop:"contactName",width:"130"},{default:t(a=>[e(x,{underline:!1,type:"primary",onClick:u=>{return n=a.row.signContactId,void k({name:"CrmContactDetail",params:{id:n}});var n}},{default:t(()=>[c(C(a.row.signContactName),1)]),_:2},1032,["onClick"])]),_:1}),e(r,{align:"center",label:"\u516C\u53F8\u7B7E\u7EA6\u4EBA",prop:"signUserName",width:"130"}),e(r,{align:"center",label:"\u5907\u6CE8",prop:"remark",width:"200"}),e(r,{align:"center",label:"\u5DF2\u56DE\u6B3E\u91D1\u989D\uFF08\u5143\uFF09",prop:"totalReceivablePrice",width:"140",formatter:l(T)},null,8,["formatter"]),e(r,{align:"center",label:"\u672A\u56DE\u6B3E\u91D1\u989D\uFF08\u5143\uFF09",prop:"totalReceivablePrice",width:"140",formatter:l(T)},{default:t(a=>[c(C(l(de)(a.row.totalPrice-a.row.totalReceivablePrice)),1)]),_:1},8,["formatter"]),e(r,{formatter:l(P),align:"center",label:"\u6700\u540E\u8DDF\u8FDB\u65F6\u95F4",prop:"contactLastTime",width:"180px"},null,8,["formatter"]),e(r,{align:"center",label:"\u8D1F\u8D23\u4EBA",prop:"ownerUserName",width:"120"}),e(r,{align:"center",label:"\u6240\u5C5E\u90E8\u95E8",prop:"ownerUserDeptName",width:"100px"}),e(r,{formatter:l(P),align:"center",label:"\u66F4\u65B0\u65F6\u95F4",prop:"updateTime",width:"180px"},null,8,["formatter"]),e(r,{formatter:l(P),align:"center",label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime",width:"180px"},null,8,["formatter"]),e(r,{align:"center",label:"\u521B\u5EFA\u4EBA",prop:"creatorName",width:"120"}),e(r,{align:"center",fixed:"right",label:"\u5408\u540C\u72B6\u6001",prop:"auditStatus",width:"120"},{default:t(a=>[e(Z,{type:l(ue).CRM_AUDIT_STATUS,value:a.row.auditStatus},null,8,["type","value"])]),_:1}),e(r,{fixed:"right",label:"\u64CD\u4F5C",width:"250"},{default:t(a=>[a.row.auditStatus===0?w((m(),d(s,{key:0,link:"",type:"primary",onClick:u=>B("update",a.row.id)},{default:t(()=>[c(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[y,["crm:contract:update"]]]):fe("",!0),a.row.auditStatus===0?w((m(),d(s,{key:1,link:"",type:"primary",onClick:u=>(async n=>{await g.confirm(`\u60A8\u786E\u5B9A\u63D0\u4EA4\u3010${n.name}\u3011\u5BA1\u6838\u5417\uFF1F`),await Ke(n.id),g.success("\u63D0\u4EA4\u5BA1\u6838\u6210\u529F\uFF01"),await b()})(a.row)},{default:t(()=>[c(" \u63D0\u4EA4\u5BA1\u6838 ")]),_:2},1032,["onClick"])),[[y,["crm:contract:update"]]]):w((m(),d(s,{key:2,link:"",type:"primary",onClick:u=>{return n=a.row,void k({name:"BpmProcessInstanceDetail",query:{id:n.processInstanceId}});var n}},{default:t(()=>[c(" \u67E5\u770B\u5BA1\u6279 ")]),_:2},1032,["onClick"])),[[y,["crm:contract:update"]]]),w((m(),d(s,{link:"",type:"primary",onClick:u=>F(a.row.id)},{default:t(()=>[c(" \u8BE6\u60C5 ")]),_:2},1032,["onClick"])),[[y,["crm:contract:query"]]]),w((m(),d(s,{link:"",type:"danger",onClick:u=>(async n=>{try{await g.delConfirm(),await qe(n),g.success(G("common.delSuccess")),await b()}catch{}})(a.row.id)},{default:t(()=>[c(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[y,["crm:contract:delete"]]])]),_:1})]),_:1},8,["data"])),[[te,l(N)]]),e(ae,{limit:l(i).pageSize,"onUpdate:limit":o[5]||(o[5]=a=>l(i).pageSize=a),page:l(i).pageNo,"onUpdate:page":o[6]||(o[6]=a=>l(i).pageNo=a),total:l(R),onPagination:b},null,8,["limit","page","total"])]),_:1}),e(Ae,{ref_key:"formRef",ref:A,onSuccess:b},null,512)],64)}}});export{Fe as default};
