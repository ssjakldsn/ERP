import{d as G,z as q,r as n,o as m,c as S,g as s,f as e,w as u,x as p,a as t,k as v,F as U,p as z,q as P,t as O,U as M,I as j,A as H,B as J,_ as K}from"./index-CIfmhqRC.js";import{E as Q}from"./el-space-BPh1ziUL.js";import{E as R}from"./el-text-DMgoq9G3.js";import{I as W}from"./index-CPjFT88E.js";import{h as X,S as Y,b as Z,c as $,a as E}from"./constants-PZ18_Kze.js";const ll={class:"prompt"},el={class:"hot-words"},al={class:"group-item"},ul={class:"group-item"},sl={class:"group-item"},tl={class:"group-item"},ol={class:"group-item"},dl={class:"group-item"},pl={class:"group-item"},rl={class:"btns"},nl=K(G({__name:"index",emits:["onDrawStart","onDrawComplete"],setup(il,{expose:A,emit:B}){const L=q(),I=n(!1),D=n(""),c=n(""),g=n(512),y=n(512),w=n("DDIM"),b=n(20),_=n(42),V=n(7.5),h=n("NONE"),x=n("3d-model"),N=B,T=async()=>{if(o=c.value,/[\u4e00-\u9fa5]/.test(o))L.alert("\u6682\u4E0D\u652F\u6301\u4E2D\u6587\uFF01");else{var o;await L.confirm("\u786E\u8BA4\u751F\u6210\u5185\u5BB9?");try{I.value=!0,N("onDrawStart",E.STABLE_DIFFUSION);const a={platform:E.STABLE_DIFFUSION,model:"stable-diffusion-v1-6",prompt:c.value,width:g.value,height:y.value,options:{seed:_.value,steps:b.value,scale:V.value,sampler:w.value,clipGuidancePreset:h.value,stylePreset:x.value}};await W.drawImage(a)}finally{N("onDrawComplete",E.STABLE_DIFFUSION),I.value=!1}}};return A({settingValues:async o=>{var a,d,i,k,r,f;c.value=o.prompt,g.value=o.width,y.value=o.height,_.value=(a=o.options)==null?void 0:a.seed,b.value=(d=o.options)==null?void 0:d.steps,V.value=(i=o.options)==null?void 0:i.scale,w.value=(k=o.options)==null?void 0:k.sampler,h.value=(r=o.options)==null?void 0:r.clipGuidancePreset,x.value=(f=o.options)==null?void 0:f.stylePreset}}),(o,a)=>{const d=R,i=M,k=j,r=Q,f=H,F=J;return m(),S(U,null,[s("div",ll,[e(d,{tag:"b"},{default:u(()=>[p("\u753B\u9762\u63CF\u8FF0")]),_:1}),e(d,{tag:"p"},{default:u(()=>[p("\u5EFA\u8BAE\u4F7F\u7528\u201C\u5F62\u5BB9\u8BCD+\u52A8\u8BCD+\u98CE\u683C\u201D\u7684\u683C\u5F0F\uFF0C\u4F7F\u7528\u201C\uFF0C\u201D\u9694\u5F00")]),_:1}),e(i,{modelValue:t(c),"onUpdate:modelValue":a[0]||(a[0]=l=>v(c)?c.value=l:null),maxlength:"1024",rows:"5",class:"w-100% mt-15px","input-style":"border-radius: 7px;",placeholder:"\u4F8B\u5982\uFF1A\u7AE5\u8BDD\u91CC\u7684\u5C0F\u5C4B\u5E94\u8BE5\u662F\u4EC0\u4E48\u6837\u5B50\uFF1F","show-word-limit":"",type:"textarea"},null,8,["modelValue"])]),s("div",el,[s("div",null,[e(d,{tag:"b"},{default:u(()=>[p("\u968F\u673A\u70ED\u8BCD")]),_:1})]),e(r,{wrap:"",class:"word-list"},{default:u(()=>[(m(!0),S(U,null,z(t(X),l=>(m(),P(k,{round:"",class:"btn",type:t(D)===l?"primary":"default",key:l,onClick:ml=>(async C=>{D.value!=C?(D.value=C,c.value=C):D.value=""})(l)},{default:u(()=>[p(O(l),1)]),_:2},1032,["type","onClick"]))),128))]),_:1})]),s("div",al,[s("div",null,[e(d,{tag:"b"},{default:u(()=>[p("\u91C7\u6837\u65B9\u6CD5")]),_:1})]),e(r,{wrap:"",class:"group-item-body"},{default:u(()=>[e(F,{modelValue:t(w),"onUpdate:modelValue":a[1]||(a[1]=l=>v(w)?w.value=l:null),placeholder:"Select",size:"large",class:"!w-350px"},{default:u(()=>[(m(!0),S(U,null,z(t(Y),l=>(m(),P(f,{key:l.key,label:l.name,value:l.key},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),s("div",ul,[s("div",null,[e(d,{tag:"b"},{default:u(()=>[p("CLIP")]),_:1})]),e(r,{wrap:"",class:"group-item-body"},{default:u(()=>[e(F,{modelValue:t(h),"onUpdate:modelValue":a[2]||(a[2]=l=>v(h)?h.value=l:null),placeholder:"Select",size:"large",class:"!w-350px"},{default:u(()=>[(m(!0),S(U,null,z(t(Z),l=>(m(),P(f,{key:l.key,label:l.name,value:l.key},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),s("div",sl,[s("div",null,[e(d,{tag:"b"},{default:u(()=>[p("\u98CE\u683C")]),_:1})]),e(r,{wrap:"",class:"group-item-body"},{default:u(()=>[e(F,{modelValue:t(x),"onUpdate:modelValue":a[3]||(a[3]=l=>v(x)?x.value=l:null),placeholder:"Select",size:"large",class:"!w-350px"},{default:u(()=>[(m(!0),S(U,null,z(t($),l=>(m(),P(f,{key:l.key,label:l.name,value:l.key},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),s("div",tl,[s("div",null,[e(d,{tag:"b"},{default:u(()=>[p("\u56FE\u7247\u5C3A\u5BF8")]),_:1})]),e(r,{wrap:"",class:"group-item-body"},{default:u(()=>[e(i,{modelValue:t(g),"onUpdate:modelValue":a[4]||(a[4]=l=>v(g)?g.value=l:null),class:"w-170px",placeholder:"\u56FE\u7247\u5BBD\u5EA6"},null,8,["modelValue"]),e(i,{modelValue:t(y),"onUpdate:modelValue":a[5]||(a[5]=l=>v(y)?y.value=l:null),class:"w-170px",placeholder:"\u56FE\u7247\u9AD8\u5EA6"},null,8,["modelValue"])]),_:1})]),s("div",ol,[s("div",null,[e(d,{tag:"b"},{default:u(()=>[p("\u8FED\u4EE3\u6B65\u6570")]),_:1})]),e(r,{wrap:"",class:"group-item-body"},{default:u(()=>[e(i,{modelValue:t(b),"onUpdate:modelValue":a[6]||(a[6]=l=>v(b)?b.value=l:null),type:"number",size:"large",class:"!w-350px",placeholder:"Please input"},null,8,["modelValue"])]),_:1})]),s("div",dl,[s("div",null,[e(d,{tag:"b"},{default:u(()=>[p("\u5F15\u5BFC\u7CFB\u6570")]),_:1})]),e(r,{wrap:"",class:"group-item-body"},{default:u(()=>[e(i,{modelValue:t(V),"onUpdate:modelValue":a[7]||(a[7]=l=>v(V)?V.value=l:null),type:"number",size:"large",class:"!w-350px",placeholder:"Please input"},null,8,["modelValue"])]),_:1})]),s("div",pl,[s("div",null,[e(d,{tag:"b"},{default:u(()=>[p("\u968F\u673A\u56E0\u5B50")]),_:1})]),e(r,{wrap:"",class:"group-item-body"},{default:u(()=>[e(i,{modelValue:t(_),"onUpdate:modelValue":a[8]||(a[8]=l=>v(_)?_.value=l:null),type:"number",size:"large",class:"!w-350px",placeholder:"Please input"},null,8,["modelValue"])]),_:1})]),s("div",rl,[e(k,{type:"primary",size:"large",round:"",loading:t(I),onClick:T},{default:u(()=>[p(O(t(I)?"\u751F\u6210\u4E2D":"\u751F\u6210\u5185\u5BB9"),1)]),_:1},8,["loading"])])],64)}}}),[["__scopeId","data-v-3fe20467"]]);export{nl as default};