import{e as F,D as V,d as Y,h as A,z as H,r as m,o as I,q as j,w as d,f,a as i,x as M,y as E,k as O,I as R,M as U,__tla as q}from"./index-CIfmhqRC.js";import{_ as z}from"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import{_ as N}from"./Form-cSLPXDG2.js";import{g as B,c as G,u as J}from"./index-D1OBEWqz.js";import{d as K}from"./formatTime-DFFN_xWx.js";import{b as L}from"./index-BulLiPxL.js";import{r as a}from"./formRules-C3y0LKNH.js";import{u as Q}from"./useCrudSchemas-BA8R3pf3.js";let P,h,W=Promise.all([(()=>{try{return q}catch{}})()]).then(async()=>{let c,y,v;c=await L(),y=F({name:[a],code:[a],accountId:[a],label:[a],content:[a],params:[a],status:[a]}),v=F([{label:"\u6A21\u677F\u7F16\u7801",field:"code",isSearch:!0,search:{componentProps:{style:{width:"240px"}}}},{label:"\u6A21\u677F\u540D\u79F0",field:"name",isSearch:!0,search:{componentProps:{style:{width:"240px"}}}},{label:"\u6A21\u677F\u6807\u9898",field:"title"},{label:"\u6A21\u677F\u5185\u5BB9",field:"content",form:{component:"Editor",componentProps:{valueHtml:"",height:200}}},{label:"\u90AE\u7BB1\u8D26\u53F7",field:"accountId",width:"200px",formatter:(T,b,p)=>{var l;return(l=c.find(n=>n.id===p))==null?void 0:l.mail},search:{show:!0,component:"Select",api:()=>c,componentProps:{optionsAlias:{labelField:"mail",valueField:"id"},style:{width:"240px"}}},form:{component:"Select",api:()=>c,componentProps:{optionsAlias:{labelField:"mail",valueField:"id"}}}},{label:"\u53D1\u9001\u4EBA\u540D\u79F0",field:"nickname"},{label:"\u5F00\u542F\u72B6\u6001",field:"status",isSearch:!0,dictType:V.COMMON_STATUS,dictClass:"number",search:{componentProps:{style:{width:"240px"}}}},{label:"\u5907\u6CE8",field:"remark",isTable:!1},{label:"\u521B\u5EFA\u65F6\u95F4",field:"createTime",isForm:!1,formatter:K,search:{show:!0,component:"DatePicker",componentProps:{valueFormat:"YYYY-MM-DD HH:mm:ss",type:"daterange",defaultTime:[new Date("1 00:00:00"),new Date("1 23:59:59")],style:{width:"240px"}}}},{label:"\u64CD\u4F5C",field:"action",isForm:!1}]),{allSchemas:h}=Q(v),P=Y({name:"SystemMailTemplateForm",__name:"MailTemplateForm",emits:["success"],setup(T,{expose:b,emit:p}){const{t:l}=A(),n=H(),t=m(!1),w=m(""),s=m(!1),_=m(""),r=m();b({open:async(o,e)=>{if(t.value=!0,w.value=l("action."+o),_.value=o,e){s.value=!0;try{const u=await B(e);r.value.setValues(u)}finally{s.value=!1}}}});const k=p,D=async()=>{if(r&&await r.value.getElFormRef().validate()){s.value=!0;try{const o=r.value.formModel;_.value==="create"?(await G(o),n.success(l("common.createSuccess"))):(await J(o),n.success(l("common.updateSuccess"))),t.value=!1,k("success")}finally{s.value=!1}}};return(o,e)=>{const u=N,S=R,g=z,C=U;return I(),j(g,{modelValue:i(t),"onUpdate:modelValue":e[1]||(e[1]=x=>O(t)?t.value=x:null),"max-height":500,scroll:!0,title:i(w),width:800},{footer:d(()=>[f(S,{disabled:i(s),type:"primary",onClick:D},{default:d(()=>[M("\u786E \u5B9A")]),_:1},8,["disabled"]),f(S,{onClick:e[0]||(e[0]=x=>t.value=!1)},{default:d(()=>[M("\u53D6 \u6D88")]),_:1})]),default:d(()=>[E(f(u,{ref_key:"formRef",ref:r,rules:i(y),schema:i(h).formSchema},null,8,["rules","schema"]),[[C,i(s)]])]),_:1},8,["modelValue","title"])}}})});export{P as _,W as __tla,h as a};
