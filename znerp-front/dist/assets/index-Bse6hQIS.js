import{d as k,r as p,ar as h,n as B,o,q as _,w as z,g as x,at as l,a as r,c as i,F as L,p as j,f as b,a5 as v,W as C,t as g,aD as I,b0 as U}from"./index-CIfmhqRC.js";import{E as W}from"./el-image-DLpquQe6.js";import{b as q}from"./spu-BTu6kAbO.js";const D={key:0,class:"absolute left-0 top-0 z-1 items-center justify-center"},E=k({name:"ProductList",__name:"index",props:{property:{}},setup(R){const a=R,s=p([]);h(()=>a.property.spuIds,async()=>{s.value=await q(a.property.spuIds)},{immediate:!0,deep:!0});const d=p(375),m=p(),t=p(2),u=p("100%"),c=p("0"),y=p("");return h(()=>[a.property,d,s.value.length],()=>{t.value=a.property.layoutType==="twoCol"?2:3;const e=(d.value-a.property.space*(t.value-1))/t.value;c.value=t.value===2?"64px":`${e}px`,a.property.layoutType==="horizSwiper"?(y.value=`repeat(auto-fill, ${e}px)`,u.value=e*s.value.length+a.property.space*(s.value.length-1)+"px"):(y.value=`repeat(${t.value}, auto)`,u.value="100%")},{immediate:!0,deep:!0}),B(()=>{var e,n;d.value=((n=(e=m.value)==null?void 0:e.wrapRef)==null?void 0:n.offsetWidth)||375}),(e,n)=>{const w=W,$=U;return o(),_($,{class:"z-1 min-h-30px","wrap-class":"w-full",ref_key:"containerRef",ref:m},{default:z(()=>[x("div",{class:"grid overflow-x-auto",style:l({gridGap:`${e.property.space}px`,gridTemplateColumns:r(y),width:r(u)})},[(o(!0),i(L,null,j(r(s),(f,T)=>(o(),i("div",{class:"relative box-content flex flex-row flex-wrap overflow-hidden bg-white",style:l({borderTopLeftRadius:`${e.property.borderRadiusTop}px`,borderTopRightRadius:`${e.property.borderRadiusTop}px`,borderBottomLeftRadius:`${e.property.borderRadiusBottom}px`,borderBottomRightRadius:`${e.property.borderRadiusBottom}px`}),key:T},[e.property.badge.show?(o(),i("div",D,[b(w,{fit:"cover",src:e.property.badge.imgUrl,class:"h-26px w-38px"},null,8,["src"])])):v("",!0),b(w,{fit:"cover",src:f.picUrl,style:l({width:r(c),height:r(c)})},null,8,["src","style"]),x("div",{class:C(["flex flex-col gap-8px p-8px box-border",{"w-[calc(100%-64px)]":r(t)===2,"w-full":r(t)===3}])},[e.property.fields.name.show?(o(),i("div",{key:0,class:"truncate text-12px",style:l({color:e.property.fields.name.color})},g(f.name),5)):v("",!0),x("div",null,[e.property.fields.price.show?(o(),i("span",{key:0,class:"text-12px",style:l({color:e.property.fields.price.color})}," \uFFE5"+g(r(I)(f.price)),5)):v("",!0)])],2)],4))),128))],4)]),_:1},512)}}});export{E as default};
