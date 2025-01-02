import{d as L,z as O,h as Q,r as d,e as j,n as W,O as Z,o as n,c as T,f as e,w as t,a,P as $,F as D,p as ee,Q as ae,D as E,q as u,x as m,y as f,U as le,C as te,A as oe,B as re,G as ne,H as se,I as ie,J as pe,K as de,L as ue,M as me}from"./index-CIfmhqRC.js";import{_ as ce}from"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import{_ as fe}from"./DictTag.vue_vue_type_script_lang-CTpVFm77.js";import{_ as _e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{_ as xe}from"./index-2RHHZ-Zv.js";import{d as Y}from"./formatTime-DFFN_xWx.js";import{d as ye}from"./download-D5Lb_h0f.js";import{d as ge,e as we,f as be}from"./index-DYj3WLtm.js";import{_ as he}from"./Demo03StudentForm.vue_vue_type_script_setup_true_lang-BC4Zqval.js";import"./index-CrBeVHKs.js";import"./color-BN7ZL7BD.js";import"./el-card-DyMugU68.js";import"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import"./Demo03CourseForm.vue_vue_type_script_setup_true_lang-DckKe5es.js";import"./Demo03GradeForm.vue_vue_type_script_setup_true_lang-Cw_CaUY1.js";const ve=L({name:"Demo03Student",__name:"index",setup(Se){const g=O(),{t:M}=Q(),w=d(!0),v=d([]),S=d(0),o=j({pageNo:1,pageSize:10,name:null,sex:null,description:null,createTime:[]}),k=d(),b=d(!1),c=async()=>{w.value=!0;try{const s=await ge(o);v.value=s.list,S.value=s.total}finally{w.value=!1}},h=()=>{o.pageNo=1,c()},N=()=>{k.value.resetFields(),h()},C=d(),V=(s,r)=>{C.value.open(s,r)},z=async()=>{try{await g.exportConfirm(),b.value=!0;const s=await be(o);ye.excel(s,"\u5B66\u751F.xls")}catch{}finally{b.value=!1}};return W(()=>{c()}),(s,r)=>{const H=xe,R=le,_=te,q=oe,F=re,P=ne,x=se,p=ie,G=pe,U=_e,i=de,K=fe,X=ue,A=ce,y=Z("hasPermi"),B=me;return n(),T(D,null,[e(H,{title:"\u4EE3\u7801\u751F\u6210\uFF08\u4E3B\u5B50\u8868\uFF09",url:"https://doc.iocoder.cn/new-feature/master-sub/"}),e(U,null,{default:t(()=>[e(G,{class:"-mb-15px",model:a(o),ref_key:"queryFormRef",ref:k,inline:!0,"label-width":"68px"},{default:t(()=>[e(_,{label:"\u540D\u5B57",prop:"name"},{default:t(()=>[e(R,{modelValue:a(o).name,"onUpdate:modelValue":r[0]||(r[0]=l=>a(o).name=l),placeholder:"\u8BF7\u8F93\u5165\u540D\u5B57",clearable:"",onKeyup:$(h,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),e(_,{label:"\u6027\u522B",prop:"sex"},{default:t(()=>[e(F,{modelValue:a(o).sex,"onUpdate:modelValue":r[1]||(r[1]=l=>a(o).sex=l),placeholder:"\u8BF7\u9009\u62E9\u6027\u522B",clearable:"",class:"!w-240px"},{default:t(()=>[(n(!0),T(D,null,ee(a(ae)(a(E).SYSTEM_USER_SEX),l=>(n(),u(q,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(_,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime"},{default:t(()=>[e(P,{modelValue:a(o).createTime,"onUpdate:modelValue":r[2]||(r[2]=l=>a(o).createTime=l),"value-format":"YYYY-MM-DD HH:mm:ss",type:"daterange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-240px"},null,8,["modelValue","default-time"])]),_:1}),e(_,null,{default:t(()=>[e(p,{onClick:h},{default:t(()=>[e(x,{icon:"ep:search",class:"mr-5px"}),m(" \u641C\u7D22")]),_:1}),e(p,{onClick:N},{default:t(()=>[e(x,{icon:"ep:refresh",class:"mr-5px"}),m(" \u91CD\u7F6E")]),_:1}),f((n(),u(p,{type:"primary",plain:"",onClick:r[3]||(r[3]=l=>V("create"))},{default:t(()=>[e(x,{icon:"ep:plus",class:"mr-5px"}),m(" \u65B0\u589E ")]),_:1})),[[y,["infra:demo03-student:create"]]]),f((n(),u(p,{type:"success",plain:"",onClick:z,loading:a(b)},{default:t(()=>[e(x,{icon:"ep:download",class:"mr-5px"}),m(" \u5BFC\u51FA ")]),_:1},8,["loading"])),[[y,["infra:demo03-student:export"]]])]),_:1})]),_:1},8,["model"])]),_:1}),e(U,null,{default:t(()=>[f((n(),u(X,{data:a(v),stripe:!0,"show-overflow-tooltip":!0},{default:t(()=>[e(i,{label:"\u7F16\u53F7",align:"center",prop:"id"}),e(i,{label:"\u540D\u5B57",align:"center",prop:"name"}),e(i,{label:"\u6027\u522B",align:"center",prop:"sex"},{default:t(l=>[e(K,{type:a(E).SYSTEM_USER_SEX,value:l.row.sex},null,8,["type","value"])]),_:1}),e(i,{label:"\u51FA\u751F\u65E5\u671F",align:"center",prop:"birthday",formatter:a(Y),width:"180px"},null,8,["formatter"]),e(i,{label:"\u7B80\u4ECB",align:"center",prop:"description"}),e(i,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"createTime",formatter:a(Y),width:"180px"},null,8,["formatter"]),e(i,{label:"\u64CD\u4F5C",align:"center"},{default:t(l=>[f((n(),u(p,{link:"",type:"primary",onClick:I=>V("update",l.row.id)},{default:t(()=>[m(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[y,["infra:demo03-student:update"]]]),f((n(),u(p,{link:"",type:"danger",onClick:I=>(async J=>{try{await g.delConfirm(),await we(J),g.success(M("common.delSuccess")),await c()}catch{}})(l.row.id)},{default:t(()=>[m(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[y,["infra:demo03-student:delete"]]])]),_:1})]),_:1},8,["data"])),[[B,a(w)]]),e(A,{total:a(S),page:a(o).pageNo,"onUpdate:page":r[4]||(r[4]=l=>a(o).pageNo=l),limit:a(o).pageSize,"onUpdate:limit":r[5]||(r[5]=l=>a(o).pageSize=l),onPagination:c},null,8,["total","page","limit"])]),_:1}),e(he,{ref_key:"formRef",ref:C,onSuccess:c},null,512)],64)}}});export{ve as default};
