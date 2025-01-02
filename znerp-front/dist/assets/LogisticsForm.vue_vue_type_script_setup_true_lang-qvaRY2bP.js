import{d as T,h as z,z as j,r,e as I,o as V,q as g,w as s,f as t,a as l,x as _,y as J,k as K,U as M,C as R,ce as Z,J as A,I as D,M as E}from"./index-CIfmhqRC.js";import{_ as G}from"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import{Z as b}from"./index-H3f_2XHj.js";const H=T({name:"LogisticsForm",__name:"LogisticsForm",emits:["success"],setup(N,{expose:U,emit:h}){const{t:p}=z(),v=j(),u=r(!1),f=r(""),d=r(!1),k=r(""),a=r({id:void 0,name:"",code:"",apikey:"",token:"",status:Boolean}),x=I({name:[{required:!0,message:"\u7269\u6D41\u5546\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],code:[{required:!0,message:"\u7269\u6D41\u5546\u4EE3\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],key:[{required:!0,message:"key\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],value:[{required:!0,message:"value\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),m=r(),q=()=>{var i;a.value={id:void 0,name:"",code:"",apikey:"",token:"",status:Boolean},(i=m.value)==null||i.resetFields()};U({open:async(i,e)=>{if(u.value=!0,f.value=p("action."+i),k.value=i,q(),e){d.value=!0;try{a.value={id:e.id,name:e.name,code:e.code,apikey:e.apikey,token:e.token,status:e.status}}finally{d.value=!1}}}});const w=h,C=async()=>{if(m&&await m.value.validate()){d.value=!0;try{k.value==="create"?(await b.logisticsCreate(a.value),v.success(p("common.createSuccess"))):(await b.logisticsUpdate(a.value),v.success(p("common.updateSuccess"))),u.value=!1,w("success")}finally{d.value=!1}}};return(i,e)=>{const c=M,n=R,F=Z,B=A,y=D,L=G,S=E;return V(),g(L,{modelValue:l(u),"onUpdate:modelValue":e[6]||(e[6]=o=>K(u)?u.value=o:null),title:l(f)},{footer:s(()=>[t(y,{disabled:l(d),type:"primary",onClick:C},{default:s(()=>[_("\u786E \u5B9A")]),_:1},8,["disabled"]),t(y,{onClick:e[5]||(e[5]=o=>u.value=!1)},{default:s(()=>[_("\u53D6 \u6D88")]),_:1})]),default:s(()=>[J((V(),g(B,{ref_key:"formRef",ref:m,model:l(a),rules:l(x),"label-width":"120px"},{default:s(()=>[t(n,{label:"\u7269\u6D41\u5546\u540D\u79F0",prop:"name"},{default:s(()=>[t(c,{modelValue:l(a).name,"onUpdate:modelValue":e[0]||(e[0]=o=>l(a).name=o),placeholder:"\u8BF7\u8F93\u5165\u7269\u6D41\u5546\u540D\u79F0"},null,8,["modelValue"])]),_:1}),t(n,{label:"\u7269\u6D41\u5546\u4EE3\u7801",prop:"code"},{default:s(()=>[t(c,{modelValue:l(a).code,"onUpdate:modelValue":e[1]||(e[1]=o=>l(a).code=o),placeholder:"\u8BF7\u8F93\u5165\u7269\u6D41\u5546\u4EE3\u7801"},null,8,["modelValue"])]),_:1}),t(n,{label:"apikey",prop:"apikey"},{default:s(()=>[t(c,{modelValue:l(a).apikey,"onUpdate:modelValue":e[2]||(e[2]=o=>l(a).apikey=o),placeholder:"\u8BF7\u8F93\u5165Key"},null,8,["modelValue"])]),_:1}),t(n,{label:"Token",prop:"token"},{default:s(()=>[t(c,{modelValue:l(a).token,"onUpdate:modelValue":e[3]||(e[3]=o=>l(a).token=o),placeholder:"\u8BF7\u8F93\u5165Token"},null,8,["modelValue"])]),_:1}),t(n,{label:"\u72B6\u6001"},{default:s(()=>[t(F,{modelValue:l(a).status,"onUpdate:modelValue":e[4]||(e[4]=o=>l(a).status=o),"inline-prompt":"","active-text":"\u542F\u7528","inactive-text":"\u7981\u7528"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[S,l(d)]])]),_:1},8,["modelValue","title"])}}});export{H as _};
