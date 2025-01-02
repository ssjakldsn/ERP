import{d as T,r as p,u as G,a2 as J,a3 as K,a as o,e as X,ar as A,n as B,y as D,a4 as H,o as Q,q as W,w as n,f as e,P as Y,x as F,t as v,h as Z,z as $,a6 as aa,dp as ea,ah as V,aa as oa,ab as ta,ac as la,ad as na,a8 as ra,C as sa,E as ia,U as pa,ae as da,af as ma,j as ua,J as ca,ag as fa,_ as ga}from"./index-CIfmhqRC.js";import{_ as ha}from"./Verify-jghUIUps.js";import{_ as wa}from"./XButton-CPWgIV2x.js";import{u as ya,L as _a,_ as xa,a as ba}from"./LoginFormTitle.vue_vue_type_script_setup_true_lang-RRNxBHMC.js";import{u as c}from"./useIcon-DXiy73tX.js";import{r as f}from"./formRules-C3y0LKNH.js";const Fa=ga(T({name:"LoginForm",__name:"LoginForm",setup(va){const{t:d}=Z();$(),c({icon:"ep:house"});const N=c({icon:"ep:avatar"}),k=c({icon:"ep:lock"}),g=p(),{validForm:L}=ba(g),{setLoginState:Va,getLoginState:M}=ya(),{currentRoute:P,push:z}=G(),E=J(),m=p(""),u=p(!1),h=p(),S=p("blockPuzzle"),U=K(()=>o(M)===_a.LOGIN),I={tenantName:[f],username:[f],password:[f]},t=X({isShowPassword:!1,captchaEnable:"false",tenantEnable:"true",loginForm:{tenantName:"\u828B\u9053\u6E90\u7801",username:"",password:"",captchaVerification:"",rememberMe:!0}}),w=async()=>{t.captchaEnable==="false"?await _({}):h.value.show()},y=p(),_=async l=>{u.value=!0;try{if(await(async()=>{if(t.tenantEnable==="true"){const r=await fa(t.loginForm.tenantName);V(r)}})(),!await L())return;const a={...t.loginForm};a.captchaVerification=l.captchaVerification;const s=await oa(a);if(!s)return;y.value=ta.service({lock:!0,text:"\u6B63\u5728\u52A0\u8F7D\u7CFB\u7EDF\u4E2D...",background:"rgba(0, 0, 0, 0.7)"}),a.rememberMe?la(a):na(),ra(s),m.value||(m.value="/"),m.value.indexOf("sso")!==-1?window.location.href=window.location.href.replace("/login?redirect=",""):z({path:m.value||E.addRouters[0].path})}finally{u.value=!1,y.value.close()}};return A(()=>P.value,l=>{var a;m.value=(a=l==null?void 0:l.query)==null?void 0:a.redirect},{immediate:!0}),B(()=>{(()=>{const l=aa();l&&(t.loginForm={...t.loginForm,username:l.username?l.username:t.loginForm.username,password:l.password?l.password:t.loginForm.password,rememberMe:l.rememberMe,tenantName:l.tenantName?l.tenantName:t.loginForm.tenantName})})(),(async()=>{const l=location.host,a=await ea(l);a&&(t.loginForm.tenantName=a.name,V(a.id))})()}),(l,a)=>{const s=sa,r=ia,x=pa,j=da,q=ma,b=ua,C=wa,O=ha,R=ca;return D((Q(),W(R,{ref_key:"formLogin",ref:g,model:o(t).loginForm,rules:I,class:"login-form","label-position":"top","label-width":"120px",size:"large"},{default:n(()=>[e(b,{style:{"margin-right":"-10px","margin-left":"-10px"}},{default:n(()=>[e(r,{span:24,style:{"padding-right":"10px","padding-left":"10px"}},{default:n(()=>[e(s,null,{default:n(()=>[e(xa,{style:{width:"100%"}})]),_:1})]),_:1}),e(r,{span:24,style:{"padding-right":"10px","padding-left":"10px"}},{default:n(()=>[e(s,{prop:"username"},{default:n(()=>[e(x,{modelValue:o(t).loginForm.username,"onUpdate:modelValue":a[0]||(a[0]=i=>o(t).loginForm.username=i),placeholder:o(d)("login.usernamePlaceholder"),"prefix-icon":o(N)},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),e(r,{span:24,style:{"padding-right":"10px","padding-left":"10px"}},{default:n(()=>[e(s,{prop:"password"},{default:n(()=>[e(x,{modelValue:o(t).loginForm.password,"onUpdate:modelValue":a[1]||(a[1]=i=>o(t).loginForm.password=i),placeholder:o(d)("login.passwordPlaceholder"),"prefix-icon":o(k),"show-password":"",type:"password",onKeyup:a[2]||(a[2]=Y(i=>w(),["enter"]))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),e(r,{span:24,style:{"padding-right":"10px","padding-left":"10px","margin-top":"-20px","margin-bottom":"-20px"}},{default:n(()=>[e(s,null,{default:n(()=>[e(b,{justify:"space-between",style:{width:"100%"}},{default:n(()=>[e(r,{span:6},{default:n(()=>[e(j,{modelValue:o(t).loginForm.rememberMe,"onUpdate:modelValue":a[3]||(a[3]=i=>o(t).loginForm.rememberMe=i)},{default:n(()=>[F(v(o(d)("login.remember")),1)]),_:1},8,["modelValue"])]),_:1}),e(r,{offset:6,span:12},{default:n(()=>[e(q,{style:{float:"right"},type:"primary"},{default:n(()=>[F(v(o(d)("login.forgetPassword")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{span:24,style:{"padding-right":"10px","padding-left":"10px"}},{default:n(()=>[e(s,null,{default:n(()=>[e(C,{loading:o(u),title:o(d)("login.login"),class:"w-[100%]",type:"primary",onClick:a[4]||(a[4]=i=>w())},null,8,["loading","title"])]),_:1})]),_:1}),e(O,{ref_key:"verify",ref:h,captchaType:o(S),imgSize:{width:"400px",height:"200px"},mode:"pop",onSuccess:_},null,8,["captchaType"])]),_:1})]),_:1},8,["model"])),[[H,o(U)]])}}}),[["__scopeId","data-v-f6a43bda"]]);export{Fa as default};
