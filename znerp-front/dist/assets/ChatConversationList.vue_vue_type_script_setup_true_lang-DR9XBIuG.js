import{d as K,z as L,h as G,r as n,e as J,n as O,O as R,o as s,c as I,f as e,w as t,a as l,F as T,p as j,q as b,P as E,x as _,y as U,g as Q,t as W,A as X,B as Z,C as $,U as ee,G as ae,H as le,I as te,J as oe,K as re,L as ie,M as ne}from"./index-CIfmhqRC.js";import{_ as se}from"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import{_ as de}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{d as pe}from"./formatTime-DFFN_xWx.js";import{C as N}from"./index-DkeRi2NZ.js";import{g as ue}from"./index-QrlE36WK.js";const me=K({__name:"ChatConversationList",setup(ce){const v=L(),{t:Y}=G(),u=n(!0),x=n([]),C=n(0),o=J({pageNo:1,pageSize:10,userId:void 0,title:void 0,createTime:[]}),y=n(),m=n([]),d=async()=>{u.value=!0;try{const f=await N.getChatConversationPage(o);x.value=f.list,C.value=f.total}finally{u.value=!1}},c=()=>{o.pageNo=1,d()},z=()=>{y.value.resetFields(),c()};return O(async()=>{d(),m.value=await ue()}),(f,i)=>{const D=X,F=Z,p=$,P=ee,S=ae,k=le,g=te,H=oe,V=de,r=re,M=ie,q=se,A=R("hasPermi"),B=ne;return s(),I(T,null,[e(V,null,{default:t(()=>[e(H,{class:"-mb-15px",model:l(o),ref_key:"queryFormRef",ref:y,inline:!0,"label-width":"68px"},{default:t(()=>[e(p,{label:"\u7528\u6237\u7F16\u53F7",prop:"userId"},{default:t(()=>[e(F,{modelValue:l(o).userId,"onUpdate:modelValue":i[0]||(i[0]=a=>l(o).userId=a),clearable:"",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u7F16\u53F7",class:"!w-240px"},{default:t(()=>[(s(!0),I(T,null,j(l(m),a=>(s(),b(D,{key:a.id,label:a.nickname,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(p,{label:"\u804A\u5929\u7F16\u53F7",prop:"title"},{default:t(()=>[e(P,{modelValue:l(o).title,"onUpdate:modelValue":i[1]||(i[1]=a=>l(o).title=a),placeholder:"\u8BF7\u8F93\u5165\u804A\u5929\u7F16\u53F7",clearable:"",onKeyup:E(c,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),e(p,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime"},{default:t(()=>[e(S,{modelValue:l(o).createTime,"onUpdate:modelValue":i[2]||(i[2]=a=>l(o).createTime=a),"value-format":"YYYY-MM-DD HH:mm:ss",type:"daterange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-240px"},null,8,["modelValue","default-time"])]),_:1}),e(p,null,{default:t(()=>[e(g,{onClick:c},{default:t(()=>[e(k,{icon:"ep:search",class:"mr-5px"}),_(" \u641C\u7D22")]),_:1}),e(g,{onClick:z},{default:t(()=>[e(k,{icon:"ep:refresh",class:"mr-5px"}),_(" \u91CD\u7F6E")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(V,null,{default:t(()=>[U((s(),b(M,{data:l(x),stripe:!0,"show-overflow-tooltip":!0},{default:t(()=>[e(r,{label:"\u5BF9\u8BDD\u7F16\u53F7",align:"center",prop:"id",width:"180",fixed:"left"}),e(r,{label:"\u5BF9\u8BDD\u6807\u9898",align:"center",prop:"title",width:"180",fixed:"left"}),e(r,{label:"\u7528\u6237",align:"center",prop:"userId",width:"180"},{default:t(a=>{var h;return[Q("span",null,W((h=l(m).find(w=>w.id===a.row.userId))==null?void 0:h.nickname),1)]}),_:1}),e(r,{label:"\u89D2\u8272",align:"center",prop:"roleName",width:"180"}),e(r,{label:"\u6A21\u578B\u6807\u8BC6",align:"center",prop:"model",width:"180"}),e(r,{label:"\u6D88\u606F\u6570",align:"center",prop:"messageCount"}),e(r,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"createTime",formatter:l(pe),width:"180px"},null,8,["formatter"]),e(r,{label:"\u6E29\u5EA6\u53C2\u6570",align:"center",prop:"temperature"}),e(r,{label:"\u56DE\u590D Token \u6570",align:"center",prop:"maxTokens",width:"120"}),e(r,{label:"\u4E0A\u4E0B\u6587\u6570\u91CF",align:"center",prop:"maxContexts",width:"120"}),e(r,{label:"\u64CD\u4F5C",align:"center",width:"180",fixed:"right"},{default:t(a=>[U((s(),b(g,{link:"",type:"danger",onClick:h=>(async w=>{try{await v.delConfirm(),await N.deleteChatConversationByAdmin(w),v.success(Y("common.delSuccess")),await d()}catch{}})(a.row.id)},{default:t(()=>[_(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[A,["ai:chat-conversation:delete"]]])]),_:1})]),_:1},8,["data"])),[[B,l(u)]]),e(q,{total:l(C),page:l(o).pageNo,"onUpdate:page":i[3]||(i[3]=a=>l(o).pageNo=a),limit:l(o).pageSize,"onUpdate:limit":i[4]||(i[4]=a=>l(o).pageSize=a),onPagination:d},null,8,["total","page","limit"])]),_:1})],64)}}});export{me as _};