import{d as z,r as o,o as m,q as f,w as r,f as d,x as c,a as l,y as B,c as S,p as T,F as A,k as j,z as J,A as M,B as R,C as D,U as E,J as G,I as H,M as K}from"./index-CIfmhqRC.js";import{_ as L}from"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import{s as N}from"./index-C9Urw_yh.js";import{g as O}from"./index-QrlE36WK.js";const P=z({name:"TaskSignCreateForm",__name:"TaskSignCreateForm",emits:["success"],setup(Q,{expose:b,emit:g}){const k=J(),t=o(!1),i=o(!1),s=o({id:"",userIds:[],type:"",reason:""}),V=o({userIds:[{required:!0,message:"\u52A0\u7B7E\u5904\u7406\u4EBA\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],reason:[{required:!0,message:"\u52A0\u7B7E\u7406\u7531\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}]}),n=o(),v=o([]);b({open:async u=>{t.value=!0,h(),s.value.id=u,v.value=await O()}});const w=g,y=async u=>{if(n&&await n.value.validate()){i.value=!0,s.value.type=u;try{await N(s.value),k.success("\u52A0\u7B7E\u6210\u529F"),t.value=!1,w("success")}finally{i.value=!1}}},h=()=>{var u;s.value={id:"",userIds:[],type:"",reason:""},(u=n.value)==null||u.resetFields()};return(u,e)=>{const C=M,I=R,_=D,x=E,F=G,p=H,U=L,q=K;return m(),f(U,{modelValue:l(t),"onUpdate:modelValue":e[5]||(e[5]=a=>j(t)?t.value=a:null),title:"\u52A0\u7B7E",width:"500"},{footer:r(()=>[d(p,{disabled:l(i),type:"primary",onClick:e[2]||(e[2]=a=>y("before"))},{default:r(()=>[c(" \u5411\u524D\u52A0\u7B7E ")]),_:1},8,["disabled"]),d(p,{disabled:l(i),type:"primary",onClick:e[3]||(e[3]=a=>y("after"))},{default:r(()=>[c(" \u5411\u540E\u52A0\u7B7E ")]),_:1},8,["disabled"]),d(p,{onClick:e[4]||(e[4]=a=>t.value=!1)},{default:r(()=>[c("\u53D6 \u6D88")]),_:1})]),default:r(()=>[B((m(),f(F,{ref_key:"formRef",ref:n,model:l(s),rules:l(V),"label-width":"110px"},{default:r(()=>[d(_,{label:"\u52A0\u7B7E\u5904\u7406\u4EBA",prop:"userIds"},{default:r(()=>[d(I,{modelValue:l(s).userIds,"onUpdate:modelValue":e[0]||(e[0]=a=>l(s).userIds=a),multiple:"",clearable:"",style:{width:"100%"}},{default:r(()=>[(m(!0),S(A,null,T(l(v),a=>(m(),f(C,{key:a.id,label:a.nickname,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),d(_,{label:"\u52A0\u7B7E\u7406\u7531",prop:"reason"},{default:r(()=>[d(x,{modelValue:l(s).reason,"onUpdate:modelValue":e[1]||(e[1]=a=>l(s).reason=a),clearable:"",placeholder:"\u8BF7\u8F93\u5165\u52A0\u7B7E\u7406\u7531"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[q,l(i)]])]),_:1},8,["modelValue"])}}});export{P as _};