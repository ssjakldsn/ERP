import{b8 as te,bi as Ce,d_ as we,aq as le,cF as ke,r as h,a3 as B,a as e,f7 as ne,bk as Se,ar as q,eI as Me,n as oe,c0 as xe,cy as Te,c8 as Ee,cX as Be,cs as He,d as J,ba as ie,bP as Ne,o as H,c as P,q as re,w as Q,y as F,g as _,W as L,a$ as X,f as K,bm as se,cT as _e,a4 as U,Z as ue,a5 as W,cU as Le,aT as ve,at as ce,F as Ae,p as $e,t as Ve,bb as de,b4 as Pe,e as ze,bo as De,bL as Ge,bc as Oe,bf as Re}from"./index-CIfmhqRC.js";const We=te({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},cardScale:{type:Number,default:.83},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0},motionBlur:Boolean}),je={change:(l,A)=>[l,A].every(Ce)},fe=Symbol("carouselContextKey"),qe=(l,A,i)=>{const{children:n,addChild:T,removeChild:I}=we(le(),"ElCarouselItem"),w=ke(),o=h(-1),c=h(null),S=h(!1),d=h(),M=h(0),C=h(!0),p=h(!0),v=h(!1),z=B(()=>l.arrow!=="never"&&!e(E)),m=B(()=>n.value.some(a=>a.props.label.toString().length>0)),y=B(()=>l.type==="card"),E=B(()=>l.direction==="vertical"),G=B(()=>l.height!=="auto"?{height:l.height}:{height:`${M.value}px`,overflow:"hidden"}),O=ne(a=>{s(a)},300,{trailing:!0}),R=ne(a=>{(function(u){l.trigger==="hover"&&u!==o.value&&(o.value=u,p.value||(v.value=!0))})(a)},300);function x(){c.value&&(clearInterval(c.value),c.value=null)}function $(){l.interval<=0||!l.autoplay||c.value||(c.value=setInterval(()=>f(),l.interval))}const f=()=>{p.value||(v.value=!0),p.value=!1,o.value<n.value.length-1?o.value=o.value+1:l.loop?o.value=0:v.value=!1};function s(a){if(p.value||(v.value=!0),p.value=!1,Se(a)){const r=n.value.filter(D=>D.props.name===a);r.length>0&&(a=n.value.indexOf(r[0]))}if(a=Number(a),Number.isNaN(a)||a!==Math.floor(a))return;const u=n.value.length,k=o.value;o.value=a<0?l.loop?u-1:0:a>=u?l.loop?0:u-1:a,k===o.value&&g(k),t()}function g(a){n.value.forEach((u,k)=>{u.translateItem(k,o.value,a)})}function t(){x(),l.pauseOnHover||$()}q(()=>o.value,(a,u)=>{g(u),C.value&&(a%=2,u%=2),u>-1&&A("change",a,u)}),q(()=>l.autoplay,a=>{a?$():x()}),q(()=>l.loop,()=>{s(o.value)}),q(()=>l.interval,()=>{t()});const b=Me();return oe(()=>{q(()=>n.value,()=>{n.value.length>0&&s(l.initialIndex)},{immediate:!0}),b.value=xe(d.value,()=>{g()}),$()}),Te(()=>{x(),d.value&&b.value&&b.value.stop()}),Ee(fe,{root:d,isCardType:y,isVertical:E,items:n,loop:l.loop,cardScale:l.cardScale,addItem:T,removeItem:I,setActiveItem:s,setContainerHeight:function(a){l.height==="auto"&&(M.value=a)}}),{root:d,activeIndex:o,arrowDisplay:z,hasLabel:m,hover:S,isCardType:y,isTransitioning:v,items:n,isVertical:E,containerStyle:G,isItemsTwoLength:C,handleButtonEnter:function(a){e(E)||n.value.forEach((u,k)=>{a===function(r,D){var V,N,Y,Z;const j=e(n),ee=j.length;if(ee===0||!r.states.inStage)return!1;const pe=D+1,me=D-1,ae=ee-1,ge=j[ae].states.active,ye=j[0].states.active,be=(N=(V=j[pe])==null?void 0:V.states)==null?void 0:N.active,Ie=(Z=(Y=j[me])==null?void 0:Y.states)==null?void 0:Z.active;return D===ae&&ye||be?"left":!!(D===0&&ge||Ie)&&"right"}(u,k)&&(u.states.hover=!0)})},handleTransitionEnd:function(){v.value=!1},handleButtonLeave:function(){e(E)||n.value.forEach(a=>{a.states.hover=!1})},handleIndicatorClick:function(a){a!==o.value&&(p.value||(v.value=!0)),o.value=a},handleMouseEnter:function(){S.value=!0,l.pauseOnHover&&x()},handleMouseLeave:function(){S.value=!1,$()},setActiveItem:s,prev:function(){s(o.value-1)},next:function(){s(o.value+1)},PlaceholderItem:function(){var a;const u=(a=w.default)==null?void 0:a.call(w);if(!u)return null;const k=Be(u).filter(r=>He(r)&&r.type.name==="ElCarouselItem");return(k==null?void 0:k.length)===2&&l.loop&&!y.value?(C.value=!0,k):(C.value=!1,null)},isTwoLengthShow:a=>!C.value||(o.value<=1?a<=1:a>1),throttledArrowClick:O,throttledIndicatorHover:R}},Fe=J({name:"ElCarousel"});var Xe=de(J({...Fe,props:We,emits:je,setup(l,{expose:A,emit:i}){const n=l,{root:T,activeIndex:I,arrowDisplay:w,hasLabel:o,hover:c,isCardType:S,items:d,isVertical:M,containerStyle:C,handleButtonEnter:p,handleButtonLeave:v,isTransitioning:z,handleIndicatorClick:m,handleMouseEnter:y,handleMouseLeave:E,handleTransitionEnd:G,setActiveItem:O,prev:R,next:x,PlaceholderItem:$,isTwoLengthShow:f,throttledArrowClick:s,throttledIndicatorHover:g}=qe(n,i),t=ie("carousel"),{t:b}=Ne(),a=B(()=>{const r=[t.b(),t.m(n.direction)];return e(S)&&r.push(t.m("card")),r}),u=B(()=>{const r=[t.e("container")];return n.motionBlur&&e(z)&&r.push(e(M)?`${t.namespace.value}-transitioning-vertical`:`${t.namespace.value}-transitioning`),r}),k=B(()=>{const r=[t.e("indicators"),t.em("indicators",n.direction)];return e(o)&&r.push(t.em("indicators","labels")),n.indicatorPosition==="outside"&&r.push(t.em("indicators","outside")),e(M)&&r.push(t.em("indicators","right")),r});return A({activeIndex:I,setActiveItem:O,prev:R,next:x}),(r,D)=>(H(),P("div",{ref_key:"root",ref:T,class:L(e(a)),onMouseenter:X(e(y),["stop"]),onMouseleave:X(e(E),["stop"])},[e(w)?(H(),re(ue,{key:0,name:"carousel-arrow-left",persisted:""},{default:Q(()=>[F(_("button",{type:"button",class:L([e(t).e("arrow"),e(t).em("arrow","left")]),"aria-label":e(b)("el.carousel.leftArrow"),onMouseenter:V=>e(p)("left"),onMouseleave:e(v),onClick:X(V=>e(s)(e(I)-1),["stop"])},[K(e(se),null,{default:Q(()=>[K(e(_e))]),_:1})],42,["aria-label","onMouseenter","onMouseleave","onClick"]),[[U,(r.arrow==="always"||e(c))&&(n.loop||e(I)>0)]])]),_:1})):W("v-if",!0),e(w)?(H(),re(ue,{key:1,name:"carousel-arrow-right",persisted:""},{default:Q(()=>[F(_("button",{type:"button",class:L([e(t).e("arrow"),e(t).em("arrow","right")]),"aria-label":e(b)("el.carousel.rightArrow"),onMouseenter:V=>e(p)("right"),onMouseleave:e(v),onClick:X(V=>e(s)(e(I)+1),["stop"])},[K(e(se),null,{default:Q(()=>[K(e(Le))]),_:1})],42,["aria-label","onMouseenter","onMouseleave","onClick"]),[[U,(r.arrow==="always"||e(c))&&(n.loop||e(I)<e(d).length-1)]])]),_:1})):W("v-if",!0),_("div",{class:L(e(u)),style:ce(e(C)),onTransitionend:e(G)},[K(e($)),ve(r.$slots,"default")],46,["onTransitionend"]),r.indicatorPosition!=="none"?(H(),P("ul",{key:2,class:L(e(k))},[(H(!0),P(Ae,null,$e(e(d),(V,N)=>F((H(),P("li",{key:N,class:L([e(t).e("indicator"),e(t).em("indicator",r.direction),e(t).is("active",N===e(I))]),onMouseenter:Y=>e(g)(N),onClick:X(Y=>e(m)(N),["stop"])},[_("button",{class:L(e(t).e("button")),"aria-label":e(b)("el.carousel.indicator",{index:N+1})},[e(o)?(H(),P("span",{key:0},Ve(V.props.label),1)):W("v-if",!0)],10,["aria-label"])],42,["onMouseenter","onClick"])),[[U,e(f)(N)]])),128))],2)):W("v-if",!0),n.motionBlur?(H(),P("svg",{key:3,xmlns:"http://www.w3.org/2000/svg",version:"1.1",style:{display:"none"}},[_("defs",null,[_("filter",{id:"elCarouselHorizontal"},[_("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"12,0"})]),_("filter",{id:"elCarouselVertical"},[_("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0,10"})])])])):W("v-if",!0)],42,["onMouseenter","onMouseleave"]))}}),[["__file","carousel.vue"]]);const Ke=te({name:{type:String,default:""},label:{type:[String,Number],default:""}}),Ue=(l,A)=>{const i=Pe(fe),n=le(),T=h(),I=h(!1),w=h(0),o=h(1),c=h(!1),S=h(!1),d=h(!1),M=h(!1),{isCardType:C,isVertical:p,cardScale:v}=i,z=(m,y,E)=>{var G;const O=e(C),R=(G=i.items.value.length)!=null?G:Number.NaN,x=m===y;O||Ge(E)||(M.value=x||m===E),!x&&R>2&&i.loop&&(m=function(f,s,g){const t=g-1,b=g/2;return s===0&&f===t?-1:s===t&&f===0?g:f<s-1&&s-f>=b?g+1:f>s+1&&f-s>=b?-2:f}(m,y,R));const $=e(p);c.value=x,O?(d.value=Math.round(Math.abs(m-y))<=1,w.value=function(f,s){var g,t;const b=e(p)?((g=i.root.value)==null?void 0:g.offsetHeight)||0:((t=i.root.value)==null?void 0:t.offsetWidth)||0;return d.value?b*((2-v)*(f-s)+1)/4:f<s?-(1+v)*b/4:(3+v)*b/4}(m,y),o.value=e(c)?1:v):w.value=function(f,s,g){const t=i.root.value;return t?((g?t.offsetHeight:t.offsetWidth)||0)*(f-s):0}(m,y,$),S.value=!0,x&&T.value&&i.setContainerHeight(T.value.offsetHeight)};return oe(()=>{i.addItem({props:l,states:ze({hover:I,translate:w,scale:o,active:c,ready:S,inStage:d,animating:M}),uid:n.uid,translateItem:z})}),De(()=>{i.removeItem(n.uid)}),{carouselItemRef:T,active:c,animating:M,hover:I,inStage:d,isVertical:p,translate:w,isCardType:C,scale:o,ready:S,handleItemClick:function(){if(i&&e(C)){const m=i.items.value.findIndex(({uid:y})=>y===n.uid);i.setActiveItem(m)}}}},Ye=J({name:"ElCarouselItem"});var he=de(J({...Ye,props:Ke,setup(l){const A=l,i=ie("carousel"),{carouselItemRef:n,active:T,animating:I,hover:w,inStage:o,isVertical:c,translate:S,isCardType:d,scale:M,ready:C,handleItemClick:p}=Ue(A),v=B(()=>[i.e("item"),i.is("active",T.value),i.is("in-stage",o.value),i.is("hover",w.value),i.is("animating",I.value),{[i.em("item","card")]:d.value,[i.em("item","card-vertical")]:d.value&&c.value}]),z=B(()=>({transform:[`${"translate"+(e(c)?"Y":"X")}(${e(S)}px)`,`scale(${e(M)})`].join(" ")}));return(m,y)=>F((H(),P("div",{ref_key:"carouselItemRef",ref:n,class:L(e(v)),style:ce(e(z)),onClick:e(p)},[e(d)?F((H(),P("div",{key:0,class:L(e(i).e("mask"))},null,2)),[[U,!e(T)]]):W("v-if",!0),ve(m.$slots,"default")],14,["onClick"])),[[U,e(C)]])}}),[["__file","carousel-item.vue"]]);const Je=Oe(Xe,{CarouselItem:he}),Qe=Re(he);export{Qe as E,Je as a};
