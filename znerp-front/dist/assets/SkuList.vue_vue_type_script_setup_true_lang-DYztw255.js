import{d as M,ai as B,r as N,ar as j,o as p,c as U,q as w,w as o,a as c,a5 as h,F as C,f as i,cl as Q,p as A,g as T,t as m,x as f,L,aA as y,aT as X,z as Y,aH as Z,dK as ee,ay as K,K as le,U as ae,cc as te,I as ie}from"./index-CIfmhqRC.js";import{E as oe}from"./el-image-DLpquQe6.js";const re={style:{"font-weight":"bold",color:"#40aaff"}},ne={style:{"font-weight":"bold",color:"#40aaff"}},se={style:{"font-weight":"bold",color:"#40aaff"}},ce=M({name:"SkuList",__name:"SkuList",props:{propFormData:{type:Object,default:()=>{}},propertyList:{type:Array,default:()=>[]},ruleConfig:{type:Array,default:()=>[]},isBatch:B.bool.def(!1),isDetail:B.bool.def(!1),isComponent:B.bool.def(!1),isActivityComponent:B.bool.def(!1)},emits:["selectionChange"],setup(g,{expose:R,emit:$}){const E=Y(),V=g,u=N(),S=N([{price:0,marketPrice:0,costPrice:0,barCode:"",picUrl:"",stock:0,weight:0,volume:0,firstBrokeragePrice:0,secondBrokeragePrice:0}]),I=t=>{Z({zIndex:9999999,urlList:[t]})},q=()=>{O(),u.value.skus.forEach(t=>{ee(t,S.value[0])})},O=()=>{const t="\u5B58\u5728\u5C5E\u6027\u5C5E\u6027\u503C\u4E3A\u7A7A\uFF0C\u8BF7\u5148\u68C0\u67E5\u5B8C\u5584\u5C5E\u6027\u503C\u540E\u91CD\u8BD5\uFF01\uFF01\uFF01";for(const d of V.propertyList)if(!d.values||K(d.values))throw E.warning(t),new Error(t)},P=N([]),H=(t,d)=>{const e=d.split(".");let r=t;for(const n of e){if(!r||typeof r!="object"||!(n in r)){r=void 0;break}r=r[n]}return r},W=$,G=t=>{W("selectionChange",t)};j(()=>V.propFormData,t=>{t&&(u.value=t)},{deep:!0,immediate:!0});const D=t=>{const d=t.map(r=>r.values.map(n=>({propertyId:r.id,propertyName:r.name,valueId:n.id,valueName:n.name}))),e=J(d);z(t)||(u.value.skus=[]);for(const r of e){const n={properties:Array.isArray(r)?r:[r],price:0,marketPrice:0,costPrice:0,barCode:"",picUrl:"",stock:0,weight:0,volume:0,firstBrokeragePrice:0,secondBrokeragePrice:0};u.value.skus.findIndex(_=>JSON.stringify(_.properties)===JSON.stringify(n.properties))===-1&&u.value.skus.push(n)}},z=t=>{const d=[];u.value.skus.forEach(r=>{var n,_;return(_=(n=r.properties)==null?void 0:n.map(v=>v.propertyId))==null?void 0:_.forEach(v=>{d.indexOf(v)===-1&&d.push(v)})});const e=t.map(r=>r.id);return d.length===e.length},J=t=>{if(t.length===0)return[];if(t.length===1)return t[0];{const d=[],e=J(t.slice(1));for(let r=0;r<t[0].length;r++)for(let n=0;n<e.length;n++)Array.isArray(e[n])?d.push([t[0][r],...e[n]]):d.push([t[0][r],e[n]]);return d}};j(()=>V.propertyList,t=>{u.value.specType&&(V.isBatch&&(S.value=[{price:0,marketPrice:0,costPrice:0,barCode:"",picUrl:"",stock:0,weight:0,volume:0,firstBrokeragePrice:0,secondBrokeragePrice:0}]),JSON.stringify(t)!=="[]"&&(P.value=[],t.forEach((d,e)=>{P.value.push({prop:`name${e}`,label:d.name})}),z(t)||t.some(d=>!d.values||K(d.values))||D(t)))},{deep:!0,immediate:!0});const F=N();return R({generateTableData:D,validateSku:()=>{O();let t="\u8BF7\u68C0\u67E5\u5546\u54C1\u5404\u884C\u76F8\u5173\u5C5E\u6027\u914D\u7F6E\uFF0C",d=!0;for(const e of u.value.skus){for(const r of V==null?void 0:V.ruleConfig){const n=H(e,r.name);if(!r.rule(n)){d=!1,t+=r.message;break}}if(!d)throw E.warning(t),new Error(t)}},getSkuTableRef:()=>F.value}),(t,d)=>{const e=le,r=ae,n=te,_=ie,v=oe;return p(),U(C,null,[g.isDetail||g.isActivityComponent?h("",!0):(p(),w(c(L),{key:0,data:g.isBatch?c(S):c(u).skus,border:"",class:"tabNumWidth","max-height":"500",size:"small"},{default:o(()=>{var l;return[i(e,{align:"center",label:"\u56FE\u7247","min-width":"65"},{default:o(({row:a})=>[i(c(Q),{modelValue:a.picUrl,"onUpdate:modelValue":s=>a.picUrl=s,height:"50px",width:"50px"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),c(u).specType&&!g.isBatch?(p(!0),U(C,{key:0},A(c(P),(a,s)=>(p(),w(e,{key:s,label:a.label,align:"center","min-width":"120"},{default:o(({row:b})=>{var k,x;return[T("span",re,m((x=(k=b.properties)==null?void 0:k[s])==null?void 0:x.valueName),1)]}),_:2},1032,["label"]))),128)):h("",!0),i(e,{align:"center",label:"\u5546\u54C1\u6761\u7801","min-width":"168"},{default:o(({row:a})=>[i(r,{modelValue:a.barCode,"onUpdate:modelValue":s=>a.barCode=s,class:"w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),i(e,{align:"center",label:"\u9500\u552E\u4EF7","min-width":"168"},{default:o(({row:a})=>[i(n,{modelValue:a.price,"onUpdate:modelValue":s=>a.price=s,min:0,precision:2,step:.1,class:"w-100%","controls-position":"right"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),i(e,{align:"center",label:"\u5E02\u573A\u4EF7","min-width":"168"},{default:o(({row:a})=>[i(n,{modelValue:a.marketPrice,"onUpdate:modelValue":s=>a.marketPrice=s,min:0,precision:2,step:.1,class:"w-100%","controls-position":"right"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),i(e,{align:"center",label:"\u6210\u672C\u4EF7","min-width":"168"},{default:o(({row:a})=>[i(n,{modelValue:a.costPrice,"onUpdate:modelValue":s=>a.costPrice=s,min:0,precision:2,step:.1,class:"w-100%","controls-position":"right"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),i(e,{align:"center",label:"\u5E93\u5B58","min-width":"168"},{default:o(({row:a})=>[i(n,{modelValue:a.stock,"onUpdate:modelValue":s=>a.stock=s,min:0,class:"w-100%","controls-position":"right"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),i(e,{align:"center",label:"\u91CD\u91CF(kg)","min-width":"168"},{default:o(({row:a})=>[i(n,{modelValue:a.weight,"onUpdate:modelValue":s=>a.weight=s,min:0,precision:2,step:.1,class:"w-100%","controls-position":"right"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),i(e,{align:"center",label:"\u4F53\u79EF(m^3)","min-width":"168"},{default:o(({row:a})=>[i(n,{modelValue:a.volume,"onUpdate:modelValue":s=>a.volume=s,min:0,precision:2,step:.1,class:"w-100%","controls-position":"right"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),c(u).subCommissionType?(p(),U(C,{key:1},[i(e,{align:"center",label:"\u4E00\u7EA7\u8FD4\u4F63(\u5143)","min-width":"168"},{default:o(({row:a})=>[i(n,{modelValue:a.firstBrokeragePrice,"onUpdate:modelValue":s=>a.firstBrokeragePrice=s,min:0,precision:2,step:.1,class:"w-100%","controls-position":"right"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),i(e,{align:"center",label:"\u4E8C\u7EA7\u8FD4\u4F63(\u5143)","min-width":"168"},{default:o(({row:a})=>[i(n,{modelValue:a.secondBrokeragePrice,"onUpdate:modelValue":s=>a.secondBrokeragePrice=s,min:0,precision:2,step:.1,class:"w-100%","controls-position":"right"},null,8,["modelValue","onUpdate:modelValue"])]),_:1})],64)):h("",!0),(l=c(u))!=null&&l.specType?(p(),w(e,{key:2,align:"center",fixed:"right",label:"\u64CD\u4F5C",width:"80"},{default:o(({row:a})=>[g.isBatch?(p(),w(_,{key:0,link:"",size:"small",type:"primary",onClick:q},{default:o(()=>[f(" \u6279\u91CF\u6DFB\u52A0 ")]),_:1})):(p(),w(_,{key:1,link:"",size:"small",type:"primary",onClick:s=>(b=>{const k=u.value.skus.findIndex(x=>JSON.stringify(x.properties)===JSON.stringify(b.properties));u.value.skus.splice(k,1)})(a)},{default:o(()=>[f("\u5220\u9664")]),_:2},1032,["onClick"]))]),_:1})):h("",!0)]}),_:1},8,["data"])),g.isDetail?(p(),w(c(L),{key:1,ref_key:"activitySkuListRef",ref:F,data:c(u).skus,border:"","max-height":"500",size:"small",style:{width:"99%"},onSelectionChange:G},{default:o(()=>[g.isComponent?(p(),w(e,{key:0,type:"selection",width:"45"})):h("",!0),i(e,{align:"center",label:"\u56FE\u7247","min-width":"80"},{default:o(({row:l})=>[l.picUrl?(p(),w(v,{key:0,src:l.picUrl,class:"h-50px w-50px",onClick:a=>I(l.picUrl)},null,8,["src","onClick"])):h("",!0)]),_:1}),c(u).specType&&!g.isBatch?(p(!0),U(C,{key:1},A(c(P),(l,a)=>(p(),w(e,{key:a,label:l.label,align:"center","min-width":"80"},{default:o(({row:s})=>{var b,k;return[T("span",ne,m((k=(b=s.properties)==null?void 0:b[a])==null?void 0:k.valueName),1)]}),_:2},1032,["label"]))),128)):h("",!0),i(e,{align:"center",label:"\u5546\u54C1\u6761\u7801","min-width":"100"},{default:o(({row:l})=>[f(m(l.barCode),1)]),_:1}),i(e,{align:"center",label:"\u9500\u552E\u4EF7(\u5143)","min-width":"80"},{default:o(({row:l})=>[f(m(c(y)(l.price)),1)]),_:1}),i(e,{align:"center",label:"\u5E02\u573A\u4EF7(\u5143)","min-width":"80"},{default:o(({row:l})=>[f(m(c(y)(l.marketPrice)),1)]),_:1}),i(e,{align:"center",label:"\u6210\u672C\u4EF7(\u5143)","min-width":"80"},{default:o(({row:l})=>[f(m(c(y)(l.costPrice)),1)]),_:1}),i(e,{align:"center",label:"\u5E93\u5B58","min-width":"80"},{default:o(({row:l})=>[f(m(l.stock),1)]),_:1}),i(e,{align:"center",label:"\u91CD\u91CF(kg)","min-width":"80"},{default:o(({row:l})=>[f(m(l.weight),1)]),_:1}),i(e,{align:"center",label:"\u4F53\u79EF(m^3)","min-width":"80"},{default:o(({row:l})=>[f(m(l.volume),1)]),_:1}),c(u).subCommissionType?(p(),U(C,{key:2},[i(e,{align:"center",label:"\u4E00\u7EA7\u8FD4\u4F63(\u5143)","min-width":"80"},{default:o(({row:l})=>[f(m(c(y)(l.firstBrokeragePrice)),1)]),_:1}),i(e,{align:"center",label:"\u4E8C\u7EA7\u8FD4\u4F63(\u5143)","min-width":"80"},{default:o(({row:l})=>[f(m(c(y)(l.secondBrokeragePrice)),1)]),_:1})],64)):h("",!0)]),_:1},8,["data"])):h("",!0),g.isActivityComponent?(p(),w(c(L),{key:2,data:c(u).skus,border:"","max-height":"500",size:"small",style:{width:"99%"}},{default:o(()=>[g.isComponent?(p(),w(e,{key:0,type:"selection",width:"45"})):h("",!0),i(e,{align:"center",label:"\u56FE\u7247","min-width":"80"},{default:o(({row:l})=>[i(v,{src:l.picUrl,class:"h-60px w-60px",onClick:a=>I(l.picUrl)},null,8,["src","onClick"])]),_:1}),c(u).specType?(p(!0),U(C,{key:1},A(c(P),(l,a)=>(p(),w(e,{key:a,label:l.label,align:"center","min-width":"80"},{default:o(({row:s})=>{var b,k;return[T("span",se,m((k=(b=s.properties)==null?void 0:b[a])==null?void 0:k.valueName),1)]}),_:2},1032,["label"]))),128)):h("",!0),i(e,{align:"center",label:"\u5546\u54C1\u6761\u7801","min-width":"100"},{default:o(({row:l})=>[f(m(l.barCode),1)]),_:1}),i(e,{align:"center",label:"\u9500\u552E\u4EF7(\u5143)","min-width":"80"},{default:o(({row:l})=>[f(m(c(y)(l.price)),1)]),_:1}),i(e,{align:"center",label:"\u5E02\u573A\u4EF7(\u5143)","min-width":"80"},{default:o(({row:l})=>[f(m(c(y)(l.marketPrice)),1)]),_:1}),i(e,{align:"center",label:"\u6210\u672C\u4EF7(\u5143)","min-width":"80"},{default:o(({row:l})=>[f(m(c(y)(l.costPrice)),1)]),_:1}),i(e,{align:"center",label:"\u5E93\u5B58","min-width":"80"},{default:o(({row:l})=>[f(m(l.stock),1)]),_:1}),X(t.$slots,"extension")]),_:3},8,["data"])):h("",!0)],64)}}});export{ce as _};
