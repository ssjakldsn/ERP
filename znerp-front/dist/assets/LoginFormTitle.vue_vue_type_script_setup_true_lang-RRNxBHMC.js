import{r as S,a3 as s,a as e,d as g,o as E,c,t as m,h as O}from"./index-CIfmhqRC.js";var o=(n=>(n[n.LOGIN=0]="LOGIN",n[n.REGISTER=1]="REGISTER",n[n.RESET_PASSWORD=2]="RESET_PASSWORD",n[n.MOBILE=3]="MOBILE",n[n.QR_CODE=4]="QR_CODE",n[n.SSO=5]="SSO",n))(o||{});const i=S(0);function a(){function n(t){i.value=t}return{setLoginState:n,getLoginState:s(()=>i.value),handleBackLogin:function(){n(0)}}}function R(n){return{validForm:async function(){const t=e(n);if(t)return await t.validate()}}}const u={class:"enter-x mb-3 text-center text-2xl font-bold xl:text-center xl:text-3xl"},T=g({name:"LoginFormTitle",__name:"LoginFormTitle",setup(n){const{t}=O(),{getLoginState:r}=a(),l=s(()=>({[o.RESET_PASSWORD]:t("sys.login.forgetFormTitle"),[o.LOGIN]:t("sys.login.signInFormTitle"),[o.REGISTER]:t("sys.login.signUpFormTitle"),[o.MOBILE]:t("sys.login.mobileSignInFormTitle"),[o.QR_CODE]:t("sys.login.qrSignInFormTitle"),[o.SSO]:t("sys.login.ssoFormTitle")})[e(r)]);return(L,I)=>(E(),c("h2",u,m(e(l)),1))}});export{o as L,T as _,R as a,a as u};
