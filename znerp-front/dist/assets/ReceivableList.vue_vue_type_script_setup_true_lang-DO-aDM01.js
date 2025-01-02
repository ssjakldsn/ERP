import{d as j,r as p,e as M,ar as V,O as q,o as d,c as A,f as e,w as s,x as g,y as I,a as o,q as v,D as B,dV as D,F,z as H,h as K,H as O,I as Y,j as G,K as J,L as Q,M as W}from"./index-CIfmhqRC.js";import{_ as X}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{_ as Z}from"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import{_ as $}from"./DictTag.vue_vue_type_script_lang-CTpVFm77.js";import{g as ee,d as ae}from"./index-CvUtKmzr.js";import{_ as te}from"./ReceivableForm.vue_vue_type_script_setup_true_lang-Cav8NmDw.js";import{b as re}from"./formatTime-DFFN_xWx.js";const oe=j({name:"CrmReceivableList",__name:"ReceivableList",props:{customerId:{},contractId:{}},setup(h,{expose:x}){const a=h,_=H(),{t:C}=K(),m=p(!0),b=p(0),y=p([]),t=M({pageNo:1,pageSize:10,customerId:void 0,contractId:void 0}),i=async()=>{m.value=!0;try{a.customerId&&!a.contractId?t.customerId=a.customerId:a.customerId&&a.contractId&&(t.customerId=a.customerId,t.contractId=a.contractId);const l=await ee(t);y.value=l.list,b.value=l.total}finally{m.value=!1}},u=p(),w=(l,r)=>{u.value.open(l,r,{customerId:a.customerId,contractId:a.contractId})};return x({createReceivable:l=>{const r=l;u.value.open("create",void 0,r)}}),V(()=>[a.customerId,a.contractId],l=>{l[0]&&(t.pageNo=1,t.customerId=void 0,t.contractId=void 0,i())},{immediate:!0,deep:!0}),(l,r)=>{const R=O,f=Y,N=G,c=J,E=$,S=Q,T=Z,z=X,k=q("hasPermi"),L=W;return d(),A(F,null,[e(N,{justify:"end"},{default:s(()=>[e(f,{onClick:r[0]||(r[0]=n=>w("create"))},{default:s(()=>[e(R,{class:"mr-5px",icon:"icon-park:income-one"}),g(" \u521B\u5EFA\u56DE\u6B3E ")]),_:1})]),_:1}),e(z,{class:"mt-10px"},{default:s(()=>[I((d(),v(S,{data:o(y),"show-overflow-tooltip":!0,stripe:!0},{default:s(()=>[e(c,{align:"center",label:"\u56DE\u6B3E\u7F16\u53F7",prop:"no"}),e(c,{align:"center",label:"\u5BA2\u6237",prop:"customerName"}),e(c,{align:"center",label:"\u5408\u540C",prop:"contract.no"}),e(c,{formatter:o(re),align:"center",label:"\u56DE\u6B3E\u65E5\u671F",prop:"returnTime",width:"150px"},null,8,["formatter"]),e(c,{align:"center",label:"\u56DE\u6B3E\u65B9\u5F0F",prop:"returnType",width:"130px"},{default:s(n=>[e(E,{type:o(B).CRM_RECEIVABLE_RETURN_TYPE,value:n.row.returnType},null,8,["type","value"])]),_:1}),e(c,{align:"center",label:"\u56DE\u6B3E\u91D1\u989D(\u5143)",prop:"price",formatter:o(D)},null,8,["formatter"]),e(c,{align:"center",label:"\u8D1F\u8D23\u4EBA",prop:"ownerUserName"}),e(c,{align:"center",label:"\u5907\u6CE8",prop:"remark"}),e(c,{align:"center",fixed:"right",label:"\u64CD\u4F5C",width:"130px"},{default:s(n=>[I((d(),v(f,{link:"",type:"primary",onClick:U=>w("update",n.row.id)},{default:s(()=>[g(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[k,["crm:receivable:update"]]]),I((d(),v(f,{link:"",type:"danger",onClick:U=>(async P=>{try{await _.delConfirm(),await ae(P),_.success(C("common.delSuccess")),await i()}catch{}})(n.row.id)},{default:s(()=>[g(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[k,["crm:receivable:delete"]]])]),_:1})]),_:1},8,["data"])),[[L,o(m)]]),e(T,{limit:o(t).pageSize,"onUpdate:limit":r[1]||(r[1]=n=>o(t).pageSize=n),page:o(t).pageNo,"onUpdate:page":r[2]||(r[2]=n=>o(t).pageNo=n),total:o(b),onPagination:i},null,8,["limit","page","total"])]),_:1}),e(te,{ref_key:"formRef",ref:u,onSuccess:i},null,512)],64)}}});export{oe as _};