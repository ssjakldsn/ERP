import{d as q,u as z,r as i,e as F,n as H,o as v,c as M,f as e,w as t,a,P,x as g,y as S,q as B,F as K,U as j,C as G,G as J,H as L,I as R,J as A,K as E,L as O,M as Q}from"./index-CIfmhqRC.js";import{_ as W}from"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import{_ as X}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{_ as Z}from"./index-2RHHZ-Zv.js";import{d as x}from"./formatTime-DFFN_xWx.js";import{j as $}from"./index-C9Urw_yh.js";import"./index-CrBeVHKs.js";import"./el-card-DyMugU68.js";const ee=q({name:"BpmTodoTask",__name:"index",setup(ae){const{push:T}=z(),p=i(!0),h=i(0),w=i([]),l=F({pageNo:1,pageSize:10,name:"",createTime:[]}),b=i(),d=async()=>{p.value=!0;try{const c=await $(l);w.value=c.list,h.value=c.total}finally{p.value=!1}},m=()=>{l.pageNo=1,d()},V=()=>{b.value.resetFields(),m()};return H(()=>{d()}),(c,r)=>{const s=Z,D=j,u=G,U=J,_=L,f=R,C=A,y=X,n=E,I=O,N=W,Y=Q;return v(),M(K,null,[e(s,{title:"\u5BA1\u6279\u901A\u8FC7\u3001\u4E0D\u901A\u8FC7\u3001\u9A73\u56DE",url:"https://doc.iocoder.cn/bpm/task-todo-done/"}),e(s,{title:"\u5BA1\u6279\u52A0\u7B7E\u3001\u51CF\u7B7E",url:"https://doc.iocoder.cn/bpm/sign/"}),e(s,{title:"\u5BA1\u6279\u8F6C\u529E\u3001\u59D4\u6D3E\u3001\u6284\u9001",url:"https://doc.iocoder.cn/bpm/task-delegation-and-cc/"}),e(s,{title:"\u5BA1\u6279\u52A0\u7B7E\u3001\u51CF\u7B7E",url:"https://doc.iocoder.cn/bpm/sign/"}),e(y,null,{default:t(()=>[e(C,{ref_key:"queryFormRef",ref:b,inline:!0,model:a(l),class:"-mb-15px","label-width":"68px"},{default:t(()=>[e(u,{label:"\u4EFB\u52A1\u540D\u79F0",prop:"name"},{default:t(()=>[e(D,{modelValue:a(l).name,"onUpdate:modelValue":r[0]||(r[0]=o=>a(l).name=o),class:"!w-240px",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u4EFB\u52A1\u540D\u79F0",onKeyup:P(m,["enter"])},null,8,["modelValue"])]),_:1}),e(u,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime"},{default:t(()=>[e(U,{modelValue:a(l).createTime,"onUpdate:modelValue":r[1]||(r[1]=o=>a(l).createTime=o),"default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-240px","end-placeholder":"\u7ED3\u675F\u65E5\u671F","start-placeholder":"\u5F00\u59CB\u65E5\u671F",type:"daterange","value-format":"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue","default-time"])]),_:1}),e(u,null,{default:t(()=>[e(f,{onClick:m},{default:t(()=>[e(_,{class:"mr-5px",icon:"ep:search"}),g(" \u641C\u7D22 ")]),_:1}),e(f,{onClick:V},{default:t(()=>[e(_,{class:"mr-5px",icon:"ep:refresh"}),g(" \u91CD\u7F6E ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(y,null,{default:t(()=>[S((v(),B(I,{data:a(w)},{default:t(()=>[e(n,{align:"center",label:"\u6D41\u7A0B",prop:"processInstance.name",width:"180"}),e(n,{align:"center",label:"\u53D1\u8D77\u4EBA",prop:"processInstance.startUser.nickname",width:"100"}),e(n,{formatter:a(x),align:"center",label:"\u53D1\u8D77\u65F6\u95F4",prop:"createTime",width:"180"},null,8,["formatter"]),e(n,{align:"center",label:"\u5F53\u524D\u4EFB\u52A1",prop:"name",width:"180"}),e(n,{formatter:a(x),align:"center",label:"\u4EFB\u52A1\u65F6\u95F4",prop:"createTime",width:"180"},null,8,["formatter"]),e(n,{align:"center",label:"\u6D41\u7A0B\u7F16\u53F7",prop:"id","show-overflow-tooltip":!0}),e(n,{align:"center",label:"\u4EFB\u52A1\u7F16\u53F7",prop:"id","show-overflow-tooltip":!0}),e(n,{align:"center",label:"\u64CD\u4F5C",fixed:"right",width:"80"},{default:t(o=>[e(f,{link:"",type:"primary",onClick:le=>{return k=o.row,void T({name:"BpmProcessInstanceDetail",query:{id:k.processInstance.id}});var k}},{default:t(()=>[g("\u529E\u7406")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[Y,a(p)]]),e(N,{limit:a(l).pageSize,"onUpdate:limit":r[2]||(r[2]=o=>a(l).pageSize=o),page:a(l).pageNo,"onUpdate:page":r[3]||(r[3]=o=>a(l).pageNo=o),total:a(h),onPagination:d},null,8,["limit","page","total"])]),_:1})],64)}}});export{ee as default};