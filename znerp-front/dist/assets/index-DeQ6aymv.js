import{d as ue,N as pe,aq as me,b as de,r as i,e as ce,ar as fe,n as ve,as as ye,o as m,q as _,w as r,c as N,p as Q,y as W,a as e,g as S,t as x,f as o,x as v,a5 as D,F as Y,k as ke,z as _e,aw as be,ax as he,ay as Ue,C as ge,av as Ce,U as Ve,A as we,B as xe,J as Te,H as Ie,I as Fe,E as De,M as Re}from"./index-CIfmhqRC.js";import{_ as Se}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{E as qe}from"./el-card-DyMugU68.js";import{b as Z}from"./formCreate-ECTif2qa.js";import{a as ze}from"./index-w37PzF0B.js";import{g as Be}from"./index-ECQfPeC-.js";import{a as Ee,r as Ne,g as $e}from"./index-C9Urw_yh.js";import{_ as Pe}from"./ProcessInstanceBpmnViewer.vue_vue_type_style_index_0_lang-D8Q-vtEF.js";import{_ as je}from"./ProcessInstanceTaskList.vue_vue_type_script_setup_true_lang-BImN91er.js";import{_ as Ae}from"./TaskReturnForm.vue_vue_type_script_name_TaskRollbackDialogForm_setup_true_lang-Dk1yR8gY.js";import{_ as He}from"./TaskDelegateForm.vue_vue_type_script_setup_true_lang-DTmJJp6e.js";import{_ as Je}from"./TaskTransferForm.vue_vue_type_script_setup_true_lang-CRrFVNuS.js";import{_ as Ke}from"./TaskSignCreateForm.vue_vue_type_script_setup_true_lang-DfQENwcO.js";import{g as Me}from"./index-QrlE36WK.js";import"./bpmn-embedded-BXCF3ZCj.js";import"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import"./XTextButton-eNQK5rLc.js";import"./XButton-CPWgIV2x.js";import"./el-collapse-item-BgajxfOI.js";import"./index-X3qw9mzS.js";import"./el-tree-select-CYFGeiEt.js";import"./tree-BMqZf9_I.js";import"./index-CSBlvrKl.js";import"./index-C34hh2Ad.js";import"./index-5G2YP0dG.js";import"./index-DoOVXCWW.js";import"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import"./index-CrBeVHKs.js";import"./constants-A8BI3pz7.js";import"./index-D8KNv32A.js";import"./el-drawer-QOxzUn5j.js";import"./DictTag.vue_vue_type_script_lang-CTpVFm77.js";import"./color-BN7ZL7BD.js";import"./index-BbfStrPJ.js";import"./formatTime-DFFN_xWx.js";import"./el-timeline-item-r9TewDuU.js";import"./TaskSignList.vue_vue_type_script_setup_true_lang-DXj2-Asd.js";import"./TaskSignDeleteForm.vue_vue_type_script_setup_true_lang-BbO0JK4E.js";const Oe={class:"el-icon-picture-outline"},Xe={class:"el-icon-picture-outline"},Ge={style:{"margin-bottom":"20px","margin-left":"10%","font-size":"14px"}},Le={class:"el-icon-document"},Qe={key:1},We=ue({name:"BpmProcessInstanceDetail",__name:"index",setup(Ye){const{query:ee}=pe(),q=_e(),{proxy:ae}=me(),oe=de().getUser.id,z=ee.id,T=i(!1),n=i({}),$=i(""),B=i(!0),b=i([]),h=i([]),f=i([]),se=ce({reason:[{required:!0,message:"\u5BA1\u6279\u5EFA\u8BAE\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),y=i([]),I=i([]),U=i(),F=i({rule:[],option:{},value:{}});fe(()=>I.value,u=>{u==null||u.forEach(a=>{a.btn.show(!1),a.resetBtn.show(!1)})},{deep:!0});const P=async(u,a)=>{const l=h.value.indexOf(u),C=ae.$refs["form"+l][0],k=e(C);if(!k||!await k.validate())return;const d={id:u.id,reason:f.value[l].reason,copyUserIds:f.value[l].copyUserIds};if(a){const R=I.value[l];R&&(await R.validate(),d.variables=y.value[l].value),await Ee(d),q.success("\u5BA1\u6279\u901A\u8FC7\u6210\u529F")}else await Ne(d),q.success("\u5BA1\u6279\u4E0D\u901A\u8FC7\u6210\u529F");g()},j=i(),A=i(),H=i(),J=i(),g=()=>{le(),M()},K=i(null),le=async()=>{var u;try{T.value=!0;const a=await Be(z);if(!a)return void q.error("\u67E5\u8BE2\u4E0D\u5230\u6D41\u7A0B\u4FE1\u606F\uFF01");n.value=a;const l=a.processDefinition;l.formType===10?(Z(F,l.formConf,l.formFields,a.formVariables),be().then(()=>{var C,k,d;(C=U.value)==null||C.btn.show(!1),(k=U.value)==null||k.resetBtn.show(!1),(d=U.value)==null||d.disabled(!0)})):K.value=he(a.processDefinition.formCustomViewPath),$.value=(u=await ze(l.id))==null?void 0:u.bpmnXml}finally{T.value=!1}},M=async()=>{h.value=[],f.value=[],y.value=[],I.value=[];try{B.value=!0;const u=await $e(z);b.value=[],u.forEach(a=>{a.status!==4&&b.value.push(a)}),b.value.sort((a,l)=>a.endTime&&l.endTime?l.endTime-a.endTime:a.endTime?1:l.endTime?-1:l.createTime-a.createTime),O(b.value)}finally{B.value=!1}},O=u=>{u.forEach(a=>{if(Ue(a.children)||O(a.children),(a.status===1||a.status===6)&&a.assigneeUser&&a.assigneeUser.id===oe)if(h.value.push({...a}),f.value.push({reason:"",copyUserIds:[]}),a.formId&&a.formConf){const l={};Z(l,a.formConf,a.formFields,a.formVariables),y.value.push(l)}else y.value.push({})})},X=i([]);return ve(async()=>{g(),X.value=await Me()}),(u,a)=>{const l=ge,C=Ce,k=ye("form-create"),d=qe,R=Ve,re=we,te=xe,ie=Te,V=Ie,w=Fe,G=De,ne=Se,L=Re;return m(),_(ne,null,{default:r(()=>[(m(!0),N(Y,null,Q(e(h),(c,t)=>W((m(),_(d,{key:t,class:"box-card"},{header:r(()=>[S("span",Oe,"\u5BA1\u6279\u4EFB\u52A1\u3010"+x(c.name)+"\u3011",1)]),default:r(()=>[o(G,{offset:6,span:16},{default:r(()=>[o(ie,{ref_for:!0,ref:"form"+t,model:e(f)[t],rules:e(se),"label-width":"100px"},{default:r(()=>[e(n)&&e(n).name?(m(),_(l,{key:0,label:"\u6D41\u7A0B\u540D"},{default:r(()=>[v(x(e(n).name),1)]),_:1})):D("",!0),e(n)&&e(n).startUser?(m(),_(l,{key:1,label:"\u6D41\u7A0B\u53D1\u8D77\u4EBA"},{default:r(()=>{var s;return[v(x((s=e(n))==null?void 0:s.startUser.nickname)+" ",1),o(C,{size:"small",type:"info"},{default:r(()=>{var p;return[v(x((p=e(n))==null?void 0:p.startUser.deptName),1)]}),_:1})]}),_:1})):D("",!0),e(h)[t].formId>0?(m(),_(d,{key:2,class:"mb-15px !-mt-10px"},{header:r(()=>{var s;return[S("span",Xe," \u586B\u5199\u8868\u5355\u3010"+x((s=e(h)[t])==null?void 0:s.formName)+"\u3011 ",1)]}),default:r(()=>[o(k,{modelValue:e(y)[t].value,"onUpdate:modelValue":s=>e(y)[t].value=s,api:e(I)[t],"onUpdate:api":s=>e(I)[t]=s,option:e(y)[t].option,rule:e(y)[t].rule},null,8,["modelValue","onUpdate:modelValue","api","onUpdate:api","option","rule"])]),_:2},1024)):D("",!0),o(l,{label:"\u5BA1\u6279\u5EFA\u8BAE",prop:"reason"},{default:r(()=>[o(R,{modelValue:e(f)[t].reason,"onUpdate:modelValue":s=>e(f)[t].reason=s,placeholder:"\u8BF7\u8F93\u5165\u5BA1\u6279\u5EFA\u8BAE",type:"textarea"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),o(l,{label:"\u6284\u9001\u4EBA",prop:"copyUserIds"},{default:r(()=>[o(te,{modelValue:e(f)[t].copyUserIds,"onUpdate:modelValue":s=>e(f)[t].copyUserIds=s,multiple:"",placeholder:"\u8BF7\u9009\u62E9\u6284\u9001\u4EBA"},{default:r(()=>[(m(!0),N(Y,null,Q(e(X),s=>(m(),_(re,{key:s.id,label:s.nickname,value:s.id},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1032,["model","rules"]),S("div",Ge,[o(w,{type:"success",onClick:s=>P(c,!0)},{default:r(()=>[o(V,{icon:"ep:select"}),v(" \u901A\u8FC7 ")]),_:2},1032,["onClick"]),o(w,{type:"danger",onClick:s=>P(c,!1)},{default:r(()=>[o(V,{icon:"ep:close"}),v(" \u4E0D\u901A\u8FC7 ")]),_:2},1032,["onClick"]),o(w,{type:"primary",onClick:s=>{return p=c.id,void j.value.open(p);var p}},{default:r(()=>[o(V,{icon:"ep:edit"}),v(" \u8F6C\u529E ")]),_:2},1032,["onClick"]),o(w,{type:"primary",onClick:s=>(async p=>{A.value.open(p.id)})(c)},{default:r(()=>[o(V,{icon:"ep:position"}),v(" \u59D4\u6D3E ")]),_:2},1032,["onClick"]),o(w,{type:"primary",onClick:s=>(async p=>{J.value.open(p.id)})(c)},{default:r(()=>[o(V,{icon:"ep:plus"}),v(" \u52A0\u7B7E ")]),_:2},1032,["onClick"]),o(w,{type:"warning",onClick:s=>(async p=>{H.value.open(p.id)})(c)},{default:r(()=>[o(V,{icon:"ep:back"}),v(" \u56DE\u9000 ")]),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024)),[[L,e(T)]])),128)),W((m(),_(d,{class:"box-card"},{header:r(()=>[S("span",Le,"\u7533\u8BF7\u4FE1\u606F\u3010"+x(e(n).name)+"\u3011",1)]),default:r(()=>{var c,t,s,p;return[((t=(c=e(n))==null?void 0:c.processDefinition)==null?void 0:t.formType)===10?(m(),_(G,{key:0,offset:6,span:16},{default:r(()=>[o(k,{modelValue:e(F).value,"onUpdate:modelValue":a[0]||(a[0]=E=>e(F).value=E),api:e(U),"onUpdate:api":a[1]||(a[1]=E=>ke(U)?U.value=E:null),option:e(F).option,rule:e(F).rule},null,8,["modelValue","api","option","rule"])]),_:1})):D("",!0),((p=(s=e(n))==null?void 0:s.processDefinition)==null?void 0:p.formType)===20?(m(),N("div",Qe,[o(e(K),{id:e(n).businessKey},null,8,["id"])])):D("",!0)]}),_:1})),[[L,e(T)]]),o(je,{loading:e(B),"process-instance":e(n),tasks:e(b),onRefresh:M},null,8,["loading","process-instance","tasks"]),o(Pe,{id:`${e(z)}`,"bpmn-xml":e($),loading:e(T),"process-instance":e(n),tasks:e(b)},null,8,["id","bpmn-xml","loading","process-instance","tasks"]),o(Je,{ref_key:"taskTransferFormRef",ref:j,onSuccess:g},null,512),o(Ae,{ref_key:"taskReturnFormRef",ref:H,onSuccess:g},null,512),o(He,{ref_key:"taskDelegateForm",ref:A,onSuccess:g},null,512),o(Ke,{ref_key:"taskSignCreateFormRef",ref:J,onSuccess:g},null,512)]),_:1})}}});export{We as default};