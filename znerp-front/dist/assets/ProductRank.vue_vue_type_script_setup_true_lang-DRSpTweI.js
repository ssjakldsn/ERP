import{d as k,r as n,e as x,n as S,o as d,q as w,w as p,g as R,f as e,a as o,y as z,eJ as N,K as D,L as E,M as j}from"./index-CIfmhqRC.js";import{E as F}from"./el-card-DyMugU68.js";import{_ as I}from"./index.vue_vue_type_script_setup_true_lang-DYHi04Tm.js";import{E as q}from"./el-image-DLpquQe6.js";import{_ as J}from"./index.vue_vue_type_script_setup_true_lang-Q5GCgRyW.js";import{P as K}from"./product-BrLdzF_Q.js";import{C as L}from"./CardTitle-CmREB7ye.js";const M={class:"flex flex-row items-center justify-between"},$=k({name:"ProductRank",__name:"ProductRank",setup(A){const b=a=>`${a.browseConvertPercent}%`,f=a=>{r.sortingFields=[N(a)],i()},g=a=>{r.times=a,i()},h=n(),r=x({pageNo:1,pageSize:10,times:[],sortingFields:{}}),m=n(!1),c=n(0),u=n([]),i=async()=>{m.value=!0;try{const a=await K.getProductStatisticsRankPage(r);u.value=a.list,c.value=a.total}finally{m.value=!1}};return S(async()=>{await i()}),(a,l)=>{const v=J,t=D,C=q,P=E,y=I,_=F,U=j;return d(),w(_,{shadow:"never"},{header:p(()=>[R("div",M,[e(o(L),{title:"\u5546\u54C1\u6392\u884C"}),e(v,{ref_key:"shortcutDateRangePicker",ref:h,onChange:g},null,512)])]),default:p(()=>[z((d(),w(P,{data:o(u),onSortChange:f},{default:p(()=>[e(t,{label:"\u5546\u54C1ID",prop:"spuId","min-width":"70"}),e(t,{label:"\u5546\u54C1\u56FE\u7247",align:"center",prop:"picUrl",width:"80"},{default:p(({row:s})=>[e(C,{src:s.picUrl,"preview-src-list":[s.picUrl],class:"h-30px w-30px","preview-teleported":""},null,8,["src","preview-src-list"])]),_:1}),e(t,{label:"\u5546\u54C1\u540D\u79F0",prop:"name","min-width":"200","show-overflow-tooltip":!0}),e(t,{label:"\u6D4F\u89C8\u91CF",prop:"browseCount","min-width":"90",sortable:"custom"}),e(t,{label:"\u8BBF\u5BA2\u6570",prop:"browseUserCount","min-width":"90",sortable:"custom"}),e(t,{label:"\u52A0\u8D2D\u4EF6\u6570",prop:"cartCount","min-width":"105",sortable:"custom"}),e(t,{label:"\u4E0B\u5355\u4EF6\u6570",prop:"orderCount","min-width":"105",sortable:"custom"}),e(t,{label:"\u652F\u4ED8\u4EF6\u6570",prop:"orderPayCount","min-width":"105",sortable:"custom"}),e(t,{label:"\u652F\u4ED8\u91D1\u989D",prop:"orderPayPrice","min-width":"105",sortable:"custom"}),e(t,{label:"\u6536\u85CF\u6570",prop:"favoriteCount","min-width":"90",sortable:"custom"}),e(t,{label:"\u8BBF\u5BA2-\u652F\u4ED8\u8F6C\u5316\u7387(%)",prop:"browseConvertPercent","min-width":"180",sortable:"custom",formatter:b})]),_:1},8,["data"])),[[U,o(m)]]),e(y,{total:o(c),page:o(r).pageNo,"onUpdate:page":l[0]||(l[0]=s=>o(r).pageNo=s),limit:o(r).pageSize,"onUpdate:limit":l[1]||(l[1]=s=>o(r).pageSize=s),onPagination:i},null,8,["total","page","limit"])]),_:1})}}});export{$ as _};
