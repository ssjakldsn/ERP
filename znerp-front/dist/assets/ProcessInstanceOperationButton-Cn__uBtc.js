import{d as ne,ai as $,b as ie,z as ue,aq as ce,r as c,e as pe,ar as de,as as fe,o as f,c as g,g as _,f as s,w as o,x as r,y as G,a as l,q as x,t as U,a5 as w,k as K,F as R,p as W,ay as me,H as ve,I as ye,av as _e,C as be,U as ke,A as xe,B as Ue,J as Ie,an as Ve,M as ge,_ as he}from"./index-CIfmhqRC.js";import{E as Ce}from"./el-card-DyMugU68.js";import{b as we}from"./formCreate-ECTif2qa.js";import{a as ze,r as Re}from"./index-C9Urw_yh.js";import{_ as Fe}from"./TaskReturnForm.vue_vue_type_script_name_TaskRollbackDialogForm_setup_true_lang-Dk1yR8gY.js";import{_ as Oe}from"./TaskDelegateForm.vue_vue_type_script_setup_true_lang-DTmJJp6e.js";import{_ as Be}from"./TaskTransferForm.vue_vue_type_script_setup_true_lang-CRrFVNuS.js";import{_ as Ne}from"./TaskSignCreateForm.vue_vue_type_script_setup_true_lang-DfQENwcO.js";import"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import"./index-QrlE36WK.js";const Se={class:"h-50px position-fixed bottom-10 text-14px flex items-center color-#32373c dark:color-#fff font-bold btn-container"},qe={class:"flex flex-col flex-1 pt-20px px-20px"},De={class:"el-icon-picture-outline"},Ee={class:"flex flex-col flex-1 pt-20px px-20px"},Le={class:"el-icon-picture-outline"},Pe=he(ne({name:"ProcessInstanceBtnConatiner",__name:"ProcessInstanceOperationButton",props:{processInstance:$.any,userOptions:$.any},emits:["success"],setup(m,{expose:X,emit:Y}){const Z=ie().getUser.id,F=ue(),{proxy:ee}=ce(),ae=Y,b=c(!1),h=c(!1),C=c(!1),p=c({}),n=c({}),u=c({}),v=c({}),z=c(),O=pe({reason:[{required:!0,message:"\u5BA1\u6279\u5EFA\u8BAE\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]});de(()=>v.value,i=>{var e,t;(e=i==null?void 0:i.btn)==null||e.show(!1),(t=i==null?void 0:i.resetBtn)==null||t.show(!1)},{deep:!0});const B=i=>{p.value={},n.value={},u.value={},v.value={},i.forEach(e=>{if(me(e.children)||B(e.children),(e.status===1||e.status===6)&&e.assigneeUser&&e.assigneeUser.id===Z)if(p.value={...e},n.value={reason:"",copyUserIds:[]},e.formId&&e.formConf){const t={};we(t,e.formConf,e.formFields,e.formVariables),u.value=t}else u.value={}})},N=async i=>{var e;b.value=!0;try{const t=ee.$refs.formRef,y=l(t);if(!y||!await y.validate())return;const k={id:p.value.id,reason:n.value.reason,copyUserIds:n.value.copyUserIds};if(i){const d=v.value;((e=Object.keys(d))==null?void 0:e.length)>0&&(await d.validate(),k.variables=u.value.value),await ze(k),F.success("\u5BA1\u6279\u901A\u8FC7\u6210\u529F")}else await Re(k),F.success("\u5BA1\u6279\u4E0D\u901A\u8FC7\u6210\u529F");I()}finally{b.value=!1}},se=()=>{},S=i=>{h.value=!1,C.value=!1,z.value.resetFields(),i==="1"?h.value=!0:C.value=!0},q=c(),le=()=>{q.value.open(p.value.id)},D=c(),oe=async()=>{D.value.open(p.value.id)},E=c(),te=async()=>{E.value.open(p.value.id)},L=c(),re=async()=>{L.value.open(p.value.id)},I=()=>{ae("success")};return X({loadRunningTask:B}),(i,e)=>{const t=ve,y=ye,k=_e,d=be,P=fe("form-create"),T=Ce,j=ke,A=xe,H=Ue,J=Ie,M=Ve,Q=ge;return f(),g(R,null,[_("div",Se,[s(M,{visible:l(h),placement:"top-end",width:500,trigger:"click"},{reference:o(()=>[s(y,{plain:"",type:"success",onClick:e[0]||(e[0]=a=>S("1"))},{default:o(()=>[s(t,{icon:"ep:select"}),r("\xA0 \u901A\u8FC7 ")]),_:1})]),default:o(()=>[G((f(),g("div",qe,[s(J,{"label-position":"top",class:"mb-auto",ref_key:"formRef",ref:z,model:l(n),rules:l(O),"label-width":"100px"},{default:o(()=>[m.processInstance&&m.processInstance.startUser?(f(),x(d,{key:0,label:"\u6D41\u7A0B\u53D1\u8D77\u4EBA"},{default:o(()=>{var a;return[r(U((a=m.processInstance)==null?void 0:a.startUser.nickname)+" ",1),s(k,{size:"small",type:"info",class:"ml-8px"},{default:o(()=>{var V;return[r(U((V=m.processInstance)==null?void 0:V.startUser.deptName),1)]}),_:1})]}),_:1})):w("",!0),l(p).formId>0?(f(),x(T,{key:1,class:"mb-15px !-mt-10px"},{header:o(()=>{var a;return[_("span",De," \u586B\u5199\u8868\u5355\u3010"+U((a=l(p))==null?void 0:a.formName)+"\u3011 ",1)]}),default:o(()=>[s(P,{modelValue:l(u).value,"onUpdate:modelValue":e[1]||(e[1]=a=>l(u).value=a),api:l(v),"onUpdate:api":e[2]||(e[2]=a=>K(v)?v.value=a:null),option:l(u).option,rule:l(u).rule},null,8,["modelValue","api","option","rule"])]),_:1})):w("",!0),s(d,{label:"\u5BA1\u6279\u5EFA\u8BAE",prop:"reason"},{default:o(()=>[s(j,{modelValue:l(n).reason,"onUpdate:modelValue":e[3]||(e[3]=a=>l(n).reason=a),placeholder:"\u8BF7\u8F93\u5165\u5BA1\u6279\u5EFA\u8BAE",type:"textarea"},null,8,["modelValue"])]),_:1}),s(d,{label:"\u6284\u9001\u4EBA",prop:"copyUserIds"},{default:o(()=>[s(H,{modelValue:l(n).copyUserIds,"onUpdate:modelValue":e[4]||(e[4]=a=>l(n).copyUserIds=a),multiple:"",placeholder:"\u8BF7\u9009\u62E9\u6284\u9001\u4EBA"},{default:o(()=>[(f(!0),g(R,null,W(m.userOptions,a=>(f(),x(A,{key:a.id,label:a.nickname,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(d,null,{default:o(()=>[s(y,{disabled:l(b),type:"success",onClick:e[5]||(e[5]=a=>N(!0))},{default:o(()=>[r(" \u901A\u8FC7 ")]),_:1},8,["disabled"]),s(y,{onClick:e[6]||(e[6]=a=>h.value=!1)},{default:o(()=>[r(" \u53D6\u6D88 ")]),_:1})]),_:1})]),_:1},8,["model","rules"])])),[[Q,l(b)]])]),_:1},8,["visible"]),s(M,{visible:l(C),placement:"top-end",width:500,trigger:"click"},{reference:o(()=>[s(y,{class:"mr-20px",plain:"",type:"danger",onClick:e[7]||(e[7]=a=>S("2"))},{default:o(()=>[s(t,{icon:"ep:close"}),r("\xA0 \u62D2\u7EDD ")]),_:1})]),default:o(()=>[G((f(),g("div",Ee,[s(J,{"label-position":"top",class:"mb-auto",ref_key:"formRef",ref:z,model:l(n),rules:l(O),"label-width":"100px"},{default:o(()=>[m.processInstance&&m.processInstance.startUser?(f(),x(d,{key:0,label:"\u6D41\u7A0B\u53D1\u8D77\u4EBA"},{default:o(()=>{var a;return[r(U((a=m.processInstance)==null?void 0:a.startUser.nickname)+" ",1),s(k,{size:"small",type:"info",class:"ml-8px"},{default:o(()=>{var V;return[r(U((V=m.processInstance)==null?void 0:V.startUser.deptName),1)]}),_:1})]}),_:1})):w("",!0),l(p).formId>0?(f(),x(T,{key:1,class:"mb-15px !-mt-10px"},{header:o(()=>{var a;return[_("span",Le," \u586B\u5199\u8868\u5355\u3010"+U((a=l(p))==null?void 0:a.formName)+"\u3011 ",1)]}),default:o(()=>[s(P,{modelValue:l(u).value,"onUpdate:modelValue":e[8]||(e[8]=a=>l(u).value=a),api:l(v),"onUpdate:api":e[9]||(e[9]=a=>K(v)?v.value=a:null),option:l(u).option,rule:l(u).rule},null,8,["modelValue","api","option","rule"])]),_:1})):w("",!0),s(d,{label:"\u5BA1\u6279\u5EFA\u8BAE",prop:"reason"},{default:o(()=>[s(j,{modelValue:l(n).reason,"onUpdate:modelValue":e[10]||(e[10]=a=>l(n).reason=a),placeholder:"\u8BF7\u8F93\u5165\u5BA1\u6279\u5EFA\u8BAE",type:"textarea"},null,8,["modelValue"])]),_:1}),s(d,{label:"\u6284\u9001\u4EBA",prop:"copyUserIds"},{default:o(()=>[s(H,{modelValue:l(n).copyUserIds,"onUpdate:modelValue":e[11]||(e[11]=a=>l(n).copyUserIds=a),multiple:"",placeholder:"\u8BF7\u9009\u62E9\u6284\u9001\u4EBA"},{default:o(()=>[(f(!0),g(R,null,W(m.userOptions,a=>(f(),x(A,{key:a.id,label:a.nickname,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(d,null,{default:o(()=>[s(y,{disabled:l(b),type:"danger",onClick:e[12]||(e[12]=a=>N(!1))},{default:o(()=>[r(" \u62D2\u7EDD ")]),_:1},8,["disabled"]),s(y,{onClick:e[13]||(e[13]=a=>C.value=!1)},{default:o(()=>[r(" \u53D6\u6D88 ")]),_:1})]),_:1})]),_:1},8,["model","rules"])])),[[Q,l(b)]])]),_:1},8,["visible"]),_("div",{onClick:se},[s(t,{size:14,icon:"svg-icon:send"}),r("\xA0\u6284\u9001 ")]),_("div",{onClick:le},[s(t,{size:14,icon:"fa:share-square-o"}),r("\xA0\u8F6C\u4EA4 ")]),_("div",{onClick:oe},[s(t,{size:14,icon:"ep:position"}),r("\xA0\u59D4\u6D3E ")]),_("div",{onClick:re},[s(t,{size:14,icon:"ep:plus"}),r("\xA0\u52A0\u7B7E ")]),_("div",{onClick:te},[s(t,{size:14,icon:"fa:mail-reply"}),r("\xA0\u9000\u56DE ")])]),s(Be,{ref_key:"taskTransferFormRef",ref:q,onSuccess:I},null,512),s(Fe,{ref_key:"taskReturnFormRef",ref:E,onSuccess:I},null,512),s(Oe,{ref_key:"taskDelegateForm",ref:D,onSuccess:I},null,512),s(Ne,{ref_key:"taskSignCreateFormRef",ref:L,onSuccess:I},null,512)],64)}}}),[["__scopeId","data-v-51a9d2b3"]]);export{Pe as default};