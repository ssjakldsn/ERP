import{d as b,r as o,e as _,ar as V,y,a as l,o as q,q as I,w as u,f as r,U as w,C as x,J as U,M as D}from"./index-CIfmhqRC.js";import{b as k}from"./index-DYj3WLtm.js";const C=b({__name:"Demo03GradeForm",props:{studentId:{}},setup(p,{expose:c}){const f=p,t=o(!1),e=o([]),v=_({studentId:[{required:!0,message:"\u5B66\u751F\u7F16\u53F7\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],name:[{required:!0,message:"\u540D\u5B57\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],teacher:[{required:!0,message:"\u73ED\u4E3B\u4EFB\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),m=o();return V(()=>f.studentId,async d=>{if(e.value={id:void 0,studentId:void 0,name:void 0,teacher:void 0},d)try{t.value=!0;const a=await k(d);if(!a)return;e.value=a}finally{t.value=!1}},{immediate:!0}),c({validate:()=>m.value.validate(),getData:()=>e.value}),(d,a)=>{const n=w,i=x,g=U,h=D;return y((q(),I(g,{ref_key:"formRef",ref:m,model:l(e),rules:l(v),"label-width":"100px"},{default:u(()=>[r(i,{label:"\u540D\u5B57",prop:"name"},{default:u(()=>[r(n,{modelValue:l(e).name,"onUpdate:modelValue":a[0]||(a[0]=s=>l(e).name=s),placeholder:"\u8BF7\u8F93\u5165\u540D\u5B57"},null,8,["modelValue"])]),_:1}),r(i,{label:"\u73ED\u4E3B\u4EFB",prop:"teacher"},{default:u(()=>[r(n,{modelValue:l(e).teacher,"onUpdate:modelValue":a[1]||(a[1]=s=>l(e).teacher=s),placeholder:"\u8BF7\u8F93\u5165\u73ED\u4E3B\u4EFB"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[h,l(t)]])}}});export{C as _};
