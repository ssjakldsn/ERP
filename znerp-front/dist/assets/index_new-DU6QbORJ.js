import{d as Y,N as Z,z as $,r as i,n as G,as as H,o as y,q as O,w as l,g as n,a,t as b,f as e,D as L,x as P,y as W,c as R,k as aa,a5 as q,aw as ea,ax as sa,i as ta,E as oa,j as ia,l as la,m as ra,M as na,a0 as ma,a1 as pa,_ as ua}from"./index-CIfmhqRC.js";import{_ as ca}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{_ as da}from"./DictTag.vue_vue_type_script_lang-CTpVFm77.js";import{_ as fa,a as va}from"./ProcessInstanceTimeline.vue_vue_type_script_setup_true_lang-DkjaCaio.js";import{f as xa}from"./formatTime-DFFN_xWx.js";import{b as _a}from"./formCreate-ECTif2qa.js";import{a as ga}from"./index-w37PzF0B.js";import{g as ya}from"./index-ECQfPeC-.js";import{g as ba}from"./index-C9Urw_yh.js";import{_ as Ta}from"./ProcessInstanceBpmnViewer.vue_vue_type_style_index_0_lang-D8Q-vtEF.js";import{_ as ka}from"./ProcessInstanceTaskList.vue_vue_type_script_setup_true_lang-BImN91er.js";import ha from"./ProcessInstanceOperationButton-Cn__uBtc.js";import{g as wa}from"./index-QrlE36WK.js";import"./el-card-DyMugU68.js";import"./color-BN7ZL7BD.js";import"./el-timeline-item-r9TewDuU.js";import"./bpmn-embedded-BXCF3ZCj.js";import"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import"./XTextButton-eNQK5rLc.js";import"./XButton-CPWgIV2x.js";import"./el-collapse-item-BgajxfOI.js";import"./index-X3qw9mzS.js";import"./el-tree-select-CYFGeiEt.js";import"./tree-BMqZf9_I.js";import"./index-CSBlvrKl.js";import"./index-C34hh2Ad.js";import"./index-5G2YP0dG.js";import"./index-DoOVXCWW.js";import"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import"./index-CrBeVHKs.js";import"./constants-A8BI3pz7.js";import"./index-D8KNv32A.js";import"./el-drawer-QOxzUn5j.js";import"./index-BbfStrPJ.js";import"./TaskSignList.vue_vue_type_script_setup_true_lang-DXj2-Asd.js";import"./TaskSignDeleteForm.vue_vue_type_script_setup_true_lang-BbO0JK4E.js";import"./TaskReturnForm.vue_vue_type_script_name_TaskRollbackDialogForm_setup_true_lang-Dk1yR8gY.js";import"./TaskDelegateForm.vue_vue_type_script_setup_true_lang-DTmJJp6e.js";import"./TaskTransferForm.vue_vue_type_script_setup_true_lang-CRrFVNuS.js";import"./TaskSignCreateForm.vue_vue_type_script_setup_true_lang-DfQENwcO.js";const Ca=["src"],Sa={class:"text-#878c93"},Da={class:"flex items-center gap-5 mb-10px"},Ba={class:"text-26px font-bold mb-5px"},Va={class:"flex items-center gap-5 mb-10px text-13px"},Ia={class:"bg-gray-100 h-35px rounded-3xl flex items-center p-8px gap-2 dark:color-gray-600"},Ua=(f=>(ma("data-v-66ec6ea5"),f=f(),pa(),f))(()=>n("img",{class:"rounded-full h-28px",src:va,alt:""},null,-1)),ja={class:"text-#878c93"},Ea={class:"form-box flex flex-col mb-30px flex-1"},Na={key:1},Oa=ua(Y({name:"BpmProcessInstanceDetail",__name:"index_new",setup(f){const{query:A}=Z(),K=$(),v=A.id,x=i(!1),t=i({}),h=i(),w=i(""),T=i(!0),m=i([]),M={1:"/assets/audit1-Cm4KjmYZ.svg",2:"/assets/audit2-BQD8ihNj.svg",3:"/assets/audit3-C_en7x-2.svg"},p=i(),d=i({rule:[],option:{},value:{}}),C=()=>{z(),D()},S=i(null),z=async()=>{var u;try{x.value=!0;const o=await ya(v);if(!o)return void K.error("\u67E5\u8BE2\u4E0D\u5230\u6D41\u7A0B\u4FE1\u606F\uFF01");t.value=o;const s=o.processDefinition;s.formType===10?(_a(d,s.formConf,s.formFields,o.formVariables),ea().then(()=>{var r,_,c;(r=p.value)==null||r.btn.show(!1),(_=p.value)==null||_.resetBtn.show(!1),(c=p.value)==null||c.disabled(!0)})):S.value=sa(o.processDefinition.formCustomViewPath),w.value=(u=await ga(s.id))==null?void 0:u.bpmnXml}finally{x.value=!1}},D=async()=>{var u;try{T.value=!0;const o=await ba(v);m.value=[],o.forEach(s=>{s.status!==4&&m.value.push(s)}),m.value.sort((s,r)=>s.endTime&&r.endTime?r.endTime-s.endTime:s.endTime?1:r.endTime?-1:r.createTime-s.createTime),(u=h.value)==null||u.loadRunningTask(m.value)}finally{T.value=!1}},B=i([]);return G(async()=>{C(),B.value=await wa()}),(u,o)=>{const s=ta,r=da,_=H("form-create"),c=oa,F=ia,g=la,J=ra,Q=ca,X=na;return y(),O(Q,{bodyStyle:{padding:"10px 20px"},class:"position-relative"},{default:l(()=>{var V,I;return[n("img",{class:"position-absolute right-20px",width:"150",src:M[a(t).status],alt:""},null,8,Ca),n("div",Sa,"\u7F16\u53F7\uFF1A"+b(a(v)),1),e(s,{class:"!my-8px"}),n("div",Da,[n("div",Ba,b(a(t).name),1),e(r,{type:a(L).BPM_PROCESS_INSTANCE_STATUS,value:a(t).status},null,8,["type","value"])]),n("div",Va,[n("div",Ia,[Ua,P(" "+b((I=(V=a(t))==null?void 0:V.startUser)==null?void 0:I.nickname),1)]),n("div",ja,b(a(xa)(a(t).startTime))+" \u63D0\u4EA4 ",1)]),e(J,null,{default:l(()=>[e(g,{label:"\u8868\u5355\u4FE1\u606F"},{default:l(()=>[e(F,{gutter:10},{default:l(()=>[e(c,{span:18,class:"!flex !flex-col formCol"},{default:l(()=>{var U,j,E,N;return[W((y(),R("div",Ea,[((j=(U=a(t))==null?void 0:U.processDefinition)==null?void 0:j.formType)===10?(y(),O(c,{key:0,offset:6,span:16},{default:l(()=>[e(_,{modelValue:a(d).value,"onUpdate:modelValue":o[0]||(o[0]=k=>a(d).value=k),api:a(p),"onUpdate:api":o[1]||(o[1]=k=>aa(p)?p.value=k:null),option:a(d).option,rule:a(d).rule},null,8,["modelValue","api","option","rule"])]),_:1})):q("",!0),((N=(E=a(t))==null?void 0:E.processDefinition)==null?void 0:N.formType)===20?(y(),R("div",Na,[e(a(S),{id:a(t).businessKey},null,8,["id"])])):q("",!0)])),[[X,a(x)]]),e(ha,{ref_key:"operationButtonRef",ref:h,processInstance:a(t),userOptions:a(B),onSuccess:C},null,8,["processInstance","userOptions"])]}),_:1}),e(c,{span:6},{default:l(()=>[e(fa,{"process-instance":a(t),tasks:a(m)},null,8,["process-instance","tasks"])]),_:1})]),_:1})]),_:1}),e(g,{label:"\u6D41\u7A0B\u56FE"},{default:l(()=>[e(Ta,{id:`${a(v)}`,"bpmn-xml":a(w),loading:a(x),"process-instance":a(t),tasks:a(m)},null,8,["id","bpmn-xml","loading","process-instance","tasks"])]),_:1}),e(g,{label:"\u6D41\u8F6C\u8BB0\u5F55"},{default:l(()=>[e(ka,{loading:a(T),"process-instance":a(t),tasks:a(m),onRefresh:D},null,8,["loading","process-instance","tasks"])]),_:1}),e(g,{label:"\u6D41\u8F6C\u8BC4\u8BBA"},{default:l(()=>[P(" \u6D41\u8F6C\u8BC4\u8BBA ")]),_:1})]),_:1})]}),_:1})}}}),[["__scopeId","data-v-66ec6ea5"]]);export{Oa as default};
