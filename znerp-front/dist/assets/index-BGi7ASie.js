import{_ as B}from"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import{d as U,h as V,z as A,r as c,n as F,as as K,O as $,o as h,c as C,f as e,w as l,g as d,x as g,a as n,t as q,y as G,a5 as H,k as Q,F as W,eq as P,e4 as X,b6 as Y,I as Z,E as ee,j as ae,b0 as te}from"./index-CIfmhqRC.js";import{_ as le}from"./ContentWrap.vue_vue_type_script_setup_true_lang-sm5dIhPQ.js";import{u as ne}from"./useFormCreateDesigner-DYq6rWJw.js";import{H as v}from"./index-BDu05CpY.js";import{j as se}from"./java-DB6dfEyf.js";import"./el-card-DyMugU68.js";import"./dict.type-BZ12AT8E.js";function oe(r){const s=["true","false","null"],m={scope:"literal",beginKeywords:s.join(" ")};return{name:"JSON",aliases:["jsonc"],keywords:{literal:s},contains:[{className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},{match:/[{}[\],:]/,className:"punctuation",relevance:0},r.QUOTE_STRING_MODE,m,r.C_NUMBER_MODE,r.C_LINE_COMMENT_MODE,r.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}const re={class:"float-right mb-2"},ie={key:0,ref:"editor"},ue={class:"hljs"},ce=U({name:"InfraBuild",__name:"index",setup(r){const{t:s}=V(),m=A(),o=c(),i=c(!1),y=c(""),p=c(-1),u=c("");ne(o);const _=a=>{i.value=!0,y.value=a},N=()=>{_("\u751F\u6210 JSON"),p.value=0,u.value=o.value.getRule()},S=()=>{_("\u751F\u6210 Options"),p.value=1,u.value=o.value.getOption()},E=()=>{_("\u751F\u6210\u7EC4\u4EF6"),p.value=2,u.value=M()},M=()=>{const a=o.value.getRule(),t=o.value.getOption();return`<template>
    <form-create
      v-model:api="fApi"
      :rule="rule"
      :option="option"
      @submit="onSubmit"
    ></form-create>
  </template>
  <script setup lang=ts>
    const faps = ref(null)
    const rule = ref('')
    const option = ref('')
    const init = () => {
      rule.value = formCreate.parseJson('${P.toJson(a).replaceAll("\\","\\\\")}')
      option.value = formCreate.parseJson('${JSON.stringify(t)}')
    }
    const onSubmit = (formData) => {
      //todo \u63D0\u4EA4\u8868\u5355
    }
    init()
  <\/script>`},b=a=>{let t="json";return p.value===2&&(t="xml"),Y(a)||(a=JSON.stringify(a)),v.highlight(t,a,!0).value||"&nbsp;"};return F(async()=>{v.registerLanguage("xml",se),v.registerLanguage("json",oe)}),(a,t)=>{const f=Z,k=ee,J=ae,j=K("FcDesigner"),x=le,D=te,L=B,w=$("dompurify-html");return h(),C(W,null,[e(x,null,{default:l(()=>[e(J,null,{default:l(()=>[e(k,null,{default:l(()=>[d("div",re,[e(f,{size:"small",type:"primary",onClick:N},{default:l(()=>[g("\u751F\u6210 JSON")]),_:1}),e(f,{size:"small",type:"success",onClick:S},{default:l(()=>[g("\u751F\u6210 Options")]),_:1}),e(f,{size:"small",type:"danger",onClick:E},{default:l(()=>[g("\u751F\u6210\u7EC4\u4EF6")]),_:1})])]),_:1})]),_:1}),e(j,{ref_key:"designer",ref:o,height:"780px"},null,512)]),_:1}),e(L,{modelValue:n(i),"onUpdate:modelValue":t[1]||(t[1]=O=>Q(i)?i.value=O:null),title:n(y),"max-height":"600"},{default:l(()=>[n(i)?(h(),C("div",ie,[e(f,{style:{float:"right"},onClick:t[0]||(t[0]=O=>(async z=>{const{copy:I,copied:R,isSupported:T}=X({source:z});T?(await I(),n(R)&&m.success(s("common.copySuccess"))):m.error(s("common.copyError"))})(n(u)))},{default:l(()=>[g(q(n(s)("common.copy")),1)]),_:1}),e(D,{height:"580"},{default:l(()=>[d("div",null,[d("pre",null,[G(d("code",ue,null,512),[[w,b(n(u))]])])])]),_:1})],512)):H("",!0)]),_:1},8,["modelValue","title"])],64)}}});export{ce as default};
