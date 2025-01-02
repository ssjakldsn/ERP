import{bt as k,d as P,h as S,z as Y,r,e as z,o as m,q as v,w as d,f as s,a as e,x as f,y,c as G,F as J,p as M,Q as j,D as Q,t as B,a4 as w,k as H,eG as K,ak as O,al as W,C as X,cc as Z,U as $,J as ee,I as ae,M as le}from"./index-CIfmhqRC.js";import{_ as oe}from"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";function de(V){return k.get({url:"/pay/demo-transfer/page",params:V})}const se=P({__name:"DemoTransferForm",emits:["success"],setup(V,{expose:x,emit:I}){const{t:_}=S(),N=Y(),t=r(!1),g=r(""),p=r(!1),b=r(""),o=r({id:void 0,price:void 0,type:void 0,userName:void 0,alipayLogonId:void 0,openid:void 0}),L=z({price:[{required:!0,message:"\u8F6C\u8D26\u91D1\u989D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],type:[{required:!0,message:"\u8F6C\u8D26\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}]}),n=r();x({open:async u=>{t.value=!0,g.value=_("action."+u),b.value=u,h()},close:async()=>{t.value=!1,h()}});const C=I,F=async()=>{if(n&&await n.value.validate()){p.value=!0;try{const u={...o.value};u.price=K(u.price),b.value==="create"&&(await function(l){return k.post({url:"/pay/demo-transfer/create",data:l})}(u),N.success(_("common.createSuccess"))),t.value=!1,C("success")}finally{p.value=!1}}},h=()=>{var u;o.value={id:void 0,price:void 0,userName:void 0,alipayLogonId:void 0,openid:void 0},(u=n.value)==null||u.resetFields()};return(u,l)=>{const R=O,T=W,i=X,q=Z,c=$,D=ee,U=ae,A=oe,E=le;return m(),v(A,{title:e(g),modelValue:e(t),"onUpdate:modelValue":l[6]||(l[6]=a=>H(t)?t.value=a:null),width:"800px"},{footer:d(()=>[s(U,{onClick:F,type:"primary",disabled:e(p)},{default:d(()=>[f("\u786E \u5B9A")]),_:1},8,["disabled"]),s(U,{onClick:l[5]||(l[5]=a=>t.value=!1)},{default:d(()=>[f("\u53D6 \u6D88")]),_:1})]),default:d(()=>[y((m(),v(D,{ref_key:"formRef",ref:n,model:e(o),rules:e(L),"label-width":"120px"},{default:d(()=>[s(i,{label:"\u8F6C\u8D26\u7C7B\u578B",prop:"type"},{default:d(()=>[s(T,{modelValue:e(o).type,"onUpdate:modelValue":l[0]||(l[0]=a=>e(o).type=a)},{default:d(()=>[(m(!0),G(J,null,M(e(j)(e(Q).PAY_TRANSFER_TYPE),a=>(m(),v(R,{key:a.value,value:a.value,disabled:a.value===2||a.value===3||a.value===4},{default:d(()=>[f(B(a.label),1)]),_:2},1032,["value","disabled"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(i,{label:"\u8F6C\u8D26\u91D1\u989D(\u5143)",prop:"price"},{default:d(()=>[s(q,{modelValue:e(o).price,"onUpdate:modelValue":l[1]||(l[1]=a=>e(o).price=a),min:0,precision:2,step:.01,placeholder:"\u8BF7\u8F93\u5165\u8F6C\u8D26\u91D1\u989D",style:{width:"200px"}},null,8,["modelValue"])]),_:1}),s(i,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D",prop:"userName"},{default:d(()=>[s(c,{modelValue:e(o).userName,"onUpdate:modelValue":l[2]||(l[2]=a=>e(o).userName=a),placeholder:"\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u59D3\u540D"},null,8,["modelValue"])]),_:1}),y(s(i,{label:"\u652F\u4ED8\u5B9D\u767B\u5F55\u8D26\u53F7",prop:"alipayLogonId"},{default:d(()=>[s(c,{modelValue:e(o).alipayLogonId,"onUpdate:modelValue":l[3]||(l[3]=a=>e(o).alipayLogonId=a),placeholder:"\u8BF7\u8F93\u5165\u652F\u4ED8\u5B9D\u767B\u5F55\u8D26\u53F7"},null,8,["modelValue"])]),_:1},512),[[w,e(o).type===1]]),y(s(i,{label:"\u5FAE\u4FE1 openid",prop:"openid"},{default:d(()=>[s(c,{modelValue:e(o).openid,"onUpdate:modelValue":l[4]||(l[4]=a=>e(o).openid=a),placeholder:"\u8BF7\u8F93\u5165\u5FAE\u4FE1 openid"},null,8,["modelValue"])]),_:1},512),[[w,e(o).type===2]])]),_:1},8,["model","rules"])),[[E,e(p)]])]),_:1},8,["title","modelValue"])}}});export{se as _,de as g};
