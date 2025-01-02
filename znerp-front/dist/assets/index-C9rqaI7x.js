import{d as L,z as O,h as R,r as i,e as j,n as Q,O as W,o as d,c as z,f as e,w as t,a as l,F as S,p as X,q as g,P as Z,x as w,y as T,g as $,t as ee,a5 as ae,k as le,aw as te,A as re,B as oe,C as ne,U as ie,G as de,H as pe,I as se,J as me,K as ue,L as ce,M as fe}from"./index-CIfmhqRC.js";import{E as ge}from"./el-drawer-QOxzUn5j.js";import{_ as we}from"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import{_ as he}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{d as _e}from"./formatTime-DFFN_xWx.js";import{A as D}from"./index-LbDC7svD.js";import{g as be}from"./index-QrlE36WK.js";import ve from"./Right-BByH3va5.js";import"./index-CrBeVHKs.js";import"./el-card-DyMugU68.js";import"./fetch-D5K_4anA.js";import"./index-CY7R6inO.js";import"./download-D5Lb_h0f.js";const ye=L({name:"AiMindMapManager",__name:"index",setup(ke){const k=O(),{t:H}=R(),h=i(!0),x=i([]),V=i(0),r=j({pageNo:1,pageSize:10,userId:void 0,prompt:void 0,createTime:[]}),C=i(),_=i([]),s=async()=>{h.value=!0;try{const y=await D.getMindMapPage(r);x.value=y.list,V.value=y.total}finally{h.value=!1}},b=()=>{r.pageNo=1,s()},N=()=>{C.value.resetFields(),b()},m=i(!1),v=i(!1),M=i("");return Q(async()=>{s(),_.value=await be()}),(y,o)=>{const P=re,Y=oe,u=ne,A=ie,E=de,I=pe,c=se,F=me,U=he,n=ue,q=ce,G=we,K=ge,B=W("hasPermi"),J=fe;return d(),z(S,null,[e(U,null,{default:t(()=>[e(F,{class:"-mb-15px",model:l(r),ref_key:"queryFormRef",ref:C,inline:!0,"label-width":"68px"},{default:t(()=>[e(u,{label:"\u7528\u6237\u7F16\u53F7",prop:"userId"},{default:t(()=>[e(Y,{modelValue:l(r).userId,"onUpdate:modelValue":o[0]||(o[0]=a=>l(r).userId=a),clearable:"",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u7F16\u53F7",class:"!w-240px"},{default:t(()=>[(d(!0),z(S,null,X(l(_),a=>(d(),g(P,{key:a.id,label:a.nickname,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(u,{label:"\u63D0\u793A\u8BCD",prop:"prompt"},{default:t(()=>[e(A,{modelValue:l(r).prompt,"onUpdate:modelValue":o[1]||(o[1]=a=>l(r).prompt=a),placeholder:"\u8BF7\u8F93\u5165\u63D0\u793A\u8BCD",clearable:"",onKeyup:Z(b,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),e(u,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime"},{default:t(()=>[e(E,{modelValue:l(r).createTime,"onUpdate:modelValue":o[2]||(o[2]=a=>l(r).createTime=a),"value-format":"YYYY-MM-DD HH:mm:ss",type:"daterange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-240px"},null,8,["modelValue","default-time"])]),_:1}),e(u,null,{default:t(()=>[e(c,{onClick:b},{default:t(()=>[e(I,{icon:"ep:search",class:"mr-5px"}),w(" \u641C\u7D22")]),_:1}),e(c,{onClick:N},{default:t(()=>[e(I,{icon:"ep:refresh",class:"mr-5px"}),w(" \u91CD\u7F6E")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(U,null,{default:t(()=>[T((d(),g(q,{data:l(x),stripe:!0,"show-overflow-tooltip":!0},{default:t(()=>[e(n,{label:"\u7F16\u53F7",align:"center",prop:"id",width:"180",fixed:"left"}),e(n,{label:"\u7528\u6237",align:"center",prop:"userId",width:"180"},{default:t(a=>{var f;return[$("span",null,ee((f=l(_).find(p=>p.id===a.row.userId))==null?void 0:f.nickname),1)]}),_:1}),e(n,{label:"\u63D0\u793A\u8BCD",align:"center",prop:"prompt",width:"180"}),e(n,{label:"\u601D\u7EF4\u5BFC\u56FE",align:"center",prop:"generatedContent","min-width":"300"}),e(n,{label:"\u6A21\u578B",align:"center",prop:"model",width:"180"}),e(n,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"createTime",formatter:l(_e),width:"180px"},null,8,["formatter"]),e(n,{label:"\u9519\u8BEF\u4FE1\u606F",align:"center",prop:"errorMessage"}),e(n,{label:"\u64CD\u4F5C",align:"center",width:"120",fixed:"right"},{default:t(a=>[e(c,{link:"",type:"primary",onClick:f=>(async p=>{v.value=!1,m.value=!0,await te(),v.value=!0,M.value=p.generatedContent})(a.row)},{default:t(()=>[w(" \u9884\u89C8 ")]),_:2},1032,["onClick"]),T((d(),g(c,{link:"",type:"danger",onClick:f=>(async p=>{try{await k.delConfirm(),await D.deleteMindMap(p),k.success(H("common.delSuccess")),await s()}catch{}})(a.row.id)},{default:t(()=>[w(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[B,["ai:mind-map:delete"]]])]),_:1})]),_:1},8,["data"])),[[J,l(h)]]),e(G,{total:l(V),page:l(r).pageNo,"onUpdate:page":o[3]||(o[3]=a=>l(r).pageNo=a),limit:l(r).pageSize,"onUpdate:limit":o[4]||(o[4]=a=>l(r).pageSize=a),onPagination:s},null,8,["total","page","limit"])]),_:1}),e(K,{modelValue:l(m),"onUpdate:modelValue":o[5]||(o[5]=a=>le(m)?m.value=a:null),"with-header":!1,size:"800px"},{default:t(()=>[l(v)?(d(),g(ve,{key:0,generatedContent:l(M),isEnd:!0,isGenerating:!1,isStart:!1},null,8,["generatedContent"])):ae("",!0)]),_:1},8,["modelValue"])],64)}}});export{ye as default};