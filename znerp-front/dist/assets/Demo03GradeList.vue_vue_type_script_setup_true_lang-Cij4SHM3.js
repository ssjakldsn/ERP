import{d as q,h as D,z as F,r as d,e as G,ar as H,O as j,o as i,c as K,f as a,w as l,y as m,q as u,x as w,a as o,F as M,H as O,I as R,K as A,L as B,M as E}from"./index-CIfmhqRC.js";import{_ as J}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{_ as Q}from"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import{d as V}from"./formatTime-DFFN_xWx.js";import{k as W,l as X}from"./index-GZdKtFk5.js";import{_ as Y}from"./Demo03GradeForm.vue_vue_type_script_setup_true_lang-CpHVpiq6.js";const Z=q({__name:"Demo03GradeList",props:{studentId:{}},setup(C){const{t:S}=D(),c=F(),f=C,g=d(!1),k=d([]),h=d(0),r=G({pageNo:1,pageSize:10,studentId:void 0});H(()=>f.studentId,e=>{e&&(r.studentId=e,b())},{immediate:!0,deep:!0});const p=async()=>{g.value=!0;try{const e=await W(r);k.value=e.list,h.value=e.total}finally{g.value=!1}},b=()=>{r.pageNo=1,p()},v=d(),I=(e,t)=>{f.studentId?v.value.open(e,t,f.studentId):c.error("\u8BF7\u9009\u62E9\u4E00\u4E2A\u5B66\u751F")};return(e,t)=>{const N=O,_=R,n=A,x=B,z=Q,L=J,y=j("hasPermi"),P=E;return i(),K(M,null,[a(L,null,{default:l(()=>[m((i(),u(_,{plain:"",type:"primary",onClick:t[0]||(t[0]=s=>I("create"))},{default:l(()=>[a(N,{class:"mr-5px",icon:"ep:plus"}),w(" \u65B0\u589E ")]),_:1})),[[y,["infra:demo03-student:create"]]]),m((i(),u(x,{data:o(k),"show-overflow-tooltip":!0,stripe:!0},{default:l(()=>[a(n,{align:"center",label:"\u7F16\u53F7",prop:"id"}),a(n,{align:"center",label:"\u540D\u5B57",prop:"name"}),a(n,{align:"center",label:"\u73ED\u4E3B\u4EFB",prop:"teacher"}),a(n,{formatter:o(V),align:"center",label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime",width:"180px"},null,8,["formatter"]),a(n,{align:"center",label:"\u64CD\u4F5C"},{default:l(s=>[m((i(),u(_,{link:"",type:"primary",onClick:T=>I("update",s.row.id)},{default:l(()=>[w(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[y,["infra:demo03-student:update"]]]),m((i(),u(_,{link:"",type:"danger",onClick:T=>(async U=>{try{await c.delConfirm(),await X(U),c.success(S("common.delSuccess")),await p()}catch{}})(s.row.id)},{default:l(()=>[w(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[y,["infra:demo03-student:delete"]]])]),_:1})]),_:1},8,["data"])),[[P,o(g)]]),a(z,{limit:o(r).pageSize,"onUpdate:limit":t[1]||(t[1]=s=>o(r).pageSize=s),page:o(r).pageNo,"onUpdate:page":t[2]||(t[2]=s=>o(r).pageNo=s),total:o(h),onPagination:p},null,8,["limit","page","total"])]),_:1}),a(Y,{ref_key:"formRef",ref:v,onSuccess:p},null,512)],64)}}});export{Z as _};
