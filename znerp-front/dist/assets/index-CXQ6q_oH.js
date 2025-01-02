import{d as W,ev as X,h as Y,z as Z,r as u,e as $,n as ee,O as ae,o as n,c as K,f as e,w as l,a as o,P as le,F as L,p as oe,Q as te,D as se,q as f,x as i,y as w,a5 as re,aw as ne,ew as M,U as ie,C as ue,A as pe,B as de,H as ce,I as me,J as fe,K as we,ce as ve,L as ye,M as _e}from"./index-CIfmhqRC.js";import{_ as he}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{_ as be}from"./index-2RHHZ-Zv.js";import{h as ke}from"./tree-BMqZf9_I.js";import{b as Ce,d as xe,u as Ve}from"./index-DC6o_CWG.js";import{_ as ge}from"./MenuForm.vue_vue_type_script_setup_true_lang-DML71yGF.js";import{C as D}from"./constants-A8BI3pz7.js";import"./el-card-DyMugU68.js";import"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import"./Tooltip.vue_vue_type_script_setup_true_lang-qxoFczfQ.js";import"./index-CrBeVHKs.js";import"./el-tree-select-CYFGeiEt.js";const Se=W({name:"SystemMenu",__name:"index",setup(Ue){const{wsCache:E}=X(),{t:F}=Y(),b=Z(),k=u(!0),R=u([]),p=$({name:void 0,status:void 0}),O=u(),C=u(!1),x=u(!0),y=async()=>{k.value=!0;try{const _=await Ce(p);R.value=ke(_)}finally{k.value=!1}},V=()=>{y()},N=()=>{O.value.resetFields(),V()},A=u(),g=(_,t,h)=>{A.value.open(_,t,h)},T=()=>{x.value=!1,C.value=!C.value,ne(()=>{x.value=!0})},q=async()=>{try{await b.confirm("\u5373\u5C06\u66F4\u65B0\u7F13\u5B58\u5237\u65B0\u6D4F\u89C8\u5668\uFF01","\u5237\u65B0\u83DC\u5355\u7F13\u5B58"),E.delete(M.USER),E.delete(M.ROLE_ROUTERS),location.reload()}catch{}},S=u({});return ee(()=>{y()}),(_,t)=>{const h=be,I=ie,U=ue,P=pe,z=de,d=ce,s=me,H=fe,B=he,r=we,J=ve,Q=ye,v=ae("hasPermi"),j=_e;return n(),K(L,null,[e(h,{title:"\u529F\u80FD\u6743\u9650",url:"https://doc.iocoder.cn/resource-permission"}),e(h,{title:"\u83DC\u5355\u8DEF\u7531",url:"https://doc.iocoder.cn/vue3/route/"}),e(B,null,{default:l(()=>[e(H,{ref_key:"queryFormRef",ref:O,inline:!0,model:o(p),class:"-mb-15px","label-width":"68px"},{default:l(()=>[e(U,{label:"\u83DC\u5355\u540D\u79F0",prop:"name"},{default:l(()=>[e(I,{modelValue:o(p).name,"onUpdate:modelValue":t[0]||(t[0]=a=>o(p).name=a),class:"!w-240px",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0",onKeyup:le(V,["enter"])},null,8,["modelValue"])]),_:1}),e(U,{label:"\u72B6\u6001",prop:"status"},{default:l(()=>[e(z,{modelValue:o(p).status,"onUpdate:modelValue":t[1]||(t[1]=a=>o(p).status=a),class:"!w-240px",clearable:"",placeholder:"\u8BF7\u9009\u62E9\u83DC\u5355\u72B6\u6001"},{default:l(()=>[(n(!0),K(L,null,oe(o(te)(o(se).COMMON_STATUS),a=>(n(),f(P,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(U,null,{default:l(()=>[e(s,{onClick:V},{default:l(()=>[e(d,{class:"mr-5px",icon:"ep:search"}),i(" \u641C\u7D22 ")]),_:1}),e(s,{onClick:N},{default:l(()=>[e(d,{class:"mr-5px",icon:"ep:refresh"}),i(" \u91CD\u7F6E ")]),_:1}),w((n(),f(s,{plain:"",type:"primary",onClick:t[2]||(t[2]=a=>g("create"))},{default:l(()=>[e(d,{class:"mr-5px",icon:"ep:plus"}),i(" \u65B0\u589E ")]),_:1})),[[v,["system:menu:create"]]]),e(s,{plain:"",type:"danger",onClick:T},{default:l(()=>[e(d,{class:"mr-5px",icon:"ep:sort"}),i(" \u5C55\u5F00/\u6298\u53E0 ")]),_:1}),e(s,{plain:"",onClick:q},{default:l(()=>[e(d,{class:"mr-5px",icon:"ep:refresh"}),i(" \u5237\u65B0\u83DC\u5355\u7F13\u5B58 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(B,null,{default:l(()=>[o(x)?w((n(),f(Q,{key:0,data:o(R),"default-expand-all":o(C),"row-key":"id"},{default:l(()=>[e(r,{"show-overflow-tooltip":!0,label:"\u83DC\u5355\u540D\u79F0",prop:"name",width:"250"}),e(r,{align:"center",label:"\u56FE\u6807",prop:"icon",width:"100"},{default:l(a=>[e(d,{icon:a.row.icon},null,8,["icon"])]),_:1}),e(r,{label:"\u6392\u5E8F",prop:"sort",width:"60"}),e(r,{"show-overflow-tooltip":!0,label:"\u6743\u9650\u6807\u8BC6",prop:"permission"}),e(r,{"show-overflow-tooltip":!0,label:"\u7EC4\u4EF6\u8DEF\u5F84",prop:"component"}),e(r,{"show-overflow-tooltip":!0,label:"\u7EC4\u4EF6\u540D\u79F0",prop:"componentName"}),e(r,{label:"\u72B6\u6001",prop:"status"},{default:l(a=>[w(e(J,{class:"ml-4px",modelValue:a.row.status,"onUpdate:modelValue":c=>a.row.status=c,"active-value":o(D).ENABLE,"inactive-value":o(D).DISABLE,loading:o(S)[a.row.id],onChange:c=>(async(m,G)=>{S.value[m.id]=!0;try{m.status=G,await Ve(m)}finally{S.value[m.id]=!1}})(a.row,c)},null,8,["modelValue","onUpdate:modelValue","active-value","inactive-value","loading","onChange"]),[[v,["system:menu:update"]]])]),_:1}),e(r,{align:"center",label:"\u64CD\u4F5C"},{default:l(a=>[w((n(),f(s,{link:"",type:"primary",onClick:c=>g("update",a.row.id)},{default:l(()=>[i(" \u4FEE\u6539 ")]),_:2},1032,["onClick"])),[[v,["system:menu:update"]]]),w((n(),f(s,{link:"",type:"primary",onClick:c=>g("create",void 0,a.row.id)},{default:l(()=>[i(" \u65B0\u589E ")]),_:2},1032,["onClick"])),[[v,["system:menu:create"]]]),w((n(),f(s,{link:"",type:"danger",onClick:c=>(async m=>{try{await b.delConfirm(),await xe(m),b.success(F("common.delSuccess")),await y()}catch{}})(a.row.id)},{default:l(()=>[i(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[v,["system:menu:delete"]]])]),_:1})]),_:1},8,["data","default-expand-all"])),[[j,o(k)]]):re("",!0)]),_:1}),e(ge,{ref_key:"formRef",ref:A,onSuccess:y},null,512)],64)}}});export{Se as default};
