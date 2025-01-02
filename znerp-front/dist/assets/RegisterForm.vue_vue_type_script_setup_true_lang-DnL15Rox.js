import{_ as b}from"./Form-cSLPXDG2.js";import{_}from"./XButton-CPWgIV2x.js";import{d as k,a3 as R,a as o,e as I,r as U,y as V,a4 as q,o as x,q as F,w as i,f as t,g as d,h as L,U as B}from"./index-CIfmhqRC.js";import{u as C}from"./useForm-BJKeztt2.js";import{u as E}from"./useValidator-Dg8qyCgW.js";import{u as S,L as j,_ as z}from"./LoginFormTitle.vue_vue_type_script_setup_true_lang-RRNxBHMC.js";const G={class:"w-[100%] flex"},T={class:"w-[100%]"},A={class:"mt-15px w-[100%]"},D=k({name:"RegisterForm",__name:"RegisterForm",setup(H){const{t:e}=L(),{required:l}=E(),{register:p,elFormRef:m}=C(),{handleBackLogin:g,getLoginState:u}=S(),h=R(()=>o(u)===j.REGISTER),w=I([{field:"title",colProps:{span:24}},{field:"username",label:e("login.username"),value:"",component:"Input",colProps:{span:24},componentProps:{placeholder:e("login.usernamePlaceholder")}},{field:"password",label:e("login.password"),value:"",component:"InputPassword",colProps:{span:24},componentProps:{style:{width:"100%"},strength:!0,placeholder:e("login.passwordPlaceholder")}},{field:"check_password",label:e("login.checkPassword"),value:"",component:"InputPassword",colProps:{span:24},componentProps:{style:{width:"100%"},strength:!0,placeholder:e("login.passwordPlaceholder")}},{field:"code",label:e("login.code"),colProps:{span:24}},{field:"register",colProps:{span:24}}]),f={username:[l()],password:[l()],check_password:[l()],code:[l()]},n=U(!1);return(J,a)=>{const P=B,c=_,v=b;return V((x(),F(v,{rules:f,schema:o(w),class:"w-[100%] dark:(border-1 border-[var(--el-border-color)] border-solid)","hide-required-asterisk":"","label-position":"top",size:"large",onRegister:o(p)},{title:i(()=>[t(z,{style:{width:"100%"}})]),code:i(r=>[d("div",G,[t(P,{modelValue:r.code,"onUpdate:modelValue":s=>r.code=s,placeholder:o(e)("login.codePlaceholder")},null,8,["modelValue","onUpdate:modelValue","placeholder"])])]),register:i(()=>[d("div",T,[t(c,{loading:o(n),title:o(e)("login.register"),class:"w-[100%]",type:"primary",onClick:a[0]||(a[0]=r=>(async()=>{const s=o(m);s==null||s.validate(async y=>{if(y)try{n.value=!0}finally{n.value=!1}})})())},null,8,["loading","title"])]),d("div",A,[t(c,{title:o(e)("login.hasUser"),class:"w-[100%]",onClick:a[1]||(a[1]=r=>o(g)())},null,8,["title"])])]),_:1},8,["schema","onRegister"])),[[q,o(h)]])}}});export{D as _};
