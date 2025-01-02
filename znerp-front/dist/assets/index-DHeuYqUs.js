import{d as we,N as Ce,z as ge,r as l,a3 as ke,n as _e,o as p,q as w,w as c,f as i,a,g as d,x as B,t as H,c as W,a5 as y,y as Te,k as X,au as be,aw as U,H as Ie,I as xe,b7 as Oe,e2 as Me,ce as ze,ea as De,b5 as Le,a0 as Re,a1 as Se,_ as Ee}from"./index-CIfmhqRC.js";import{C as A}from"./index-CdT4chXa.js";import{C as Ne}from"./index-DkeRi2NZ.js";import Ve from"./ConversationList-V1ivGBIe.js";import{_ as qe}from"./ConversationUpdateForm.vue_vue_type_script_setup_true_lang-yMRR4s-E.js";import Be from"./MessageList-C6mpv2l7.js";import He from"./MessageListEmpty-CR6fxEi0.js";import Ue from"./MessageLoading-uo3nAqux.js";import Ae from"./MessageNewConversation-DPSy8HLu.js";import"./fetch-D5K_4anA.js";import"./el-drawer-QOxzUn5j.js";import"./el-text-DMgoq9G3.js";import"./el-empty-fTn0RAmM.js";import"./RoleRepository-CeKxvkCd.js";import"./RoleHeader-C3mJeNTM.js";import"./RoleList-CB48LlBH.js";import"./el-card-DyMugU68.js";import"./el-dropdown-item-CvgBZuG7.js";import"./ChatRoleForm.vue_vue_type_script_setup_true_lang-BLlgdX66.js";import"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import"./constants-A8BI3pz7.js";import"./index-DvHknbTX.js";import"./RoleCategoryList-DQ1BXv6f.js";import"./gpt-WhTktY3S.js";import"./el-avatar-Cbg-oQZd.js";import"./formatTime-DFFN_xWx.js";import"./index-CY7R6inO.js";import"./index-BDu05CpY.js";import"./avatar-BG6NdH5s.js";import"./el-skeleton-item-Dm6LwaUQ.js";const Ge={class:"title"},Ke={key:0},Pe={key:0,class:"btns"},$e=["innerHTML"],je={class:"message-container"},Fe={class:"prompt-from"},Je={class:"prompt-btns"},Qe=(I=>(Re("data-v-3b7d254d"),I=I(),Se(),I))(()=>d("span",{class:"ml-5px text-14px text-#8f8f8f"},"\u4E0A\u4E0B\u6587",-1)),We=we({name:"AiChat",__name:"index",setup(I){const G=Ce(),f=ge(),K=l(),n=l(null),u=l(null),r=l(!1),x=l(),o=l([]),C=l(!1),L=l(),T=l(50),R=l(!1),g=l(!1),O=l(),S=l(),m=l(),M=l(!0),k=l(""),z=l(""),P=async e=>{if(!e)return;const t=await Ne.getChatConversationMy(e);t&&(u.value=t,n.value=t.id)},Y=async e=>r.value?(f.alert("\u5BF9\u8BDD\u4E2D\uFF0C\u4E0D\u5141\u8BB8\u5207\u6362!"),!1):(n.value=e.id,u.value=e,await E(),b(!0),m.value="",!0),Z=async e=>{n.value===e.id&&await $()},$=async()=>{if(r.value)return f.alert("\u5BF9\u8BDD\u4E2D\uFF0C\u4E0D\u5141\u8BB8\u5207\u6362!"),!1;n.value=null,u.value=null,o.value=[]},j=l(),ee=async()=>{j.value.open(n.value)},ae=async()=>{await P(n.value)},te=async()=>{await K.value.createConversation()},le=async()=>{m.value=""},E=async()=>{try{if(n.value===null)return;L.value=setTimeout(()=>{C.value=!0},60),o.value=await A.getChatMessageListByConversationId(n.value),await U(),await b()}finally{L.value&&clearTimeout(L.value),C.value=!1}},N=ke(()=>{var e;return o.value.length>0?o.value:(e=u.value)!=null&&e.systemMessage?[{id:0,type:"system",content:u.value.systemMessage}]:[]}),ne=()=>{r.value?f.alert("\u56DE\u7B54\u4E2D\uFF0C\u4E0D\u80FD\u5220\u9664!"):E()},oe=async()=>{if(n.value)try{await f.delConfirm("\u786E\u8BA4\u6E05\u7A7A\u5BF9\u8BDD\u6D88\u606F\uFF1F"),await A.deleteByConversationId(n.value),o.value=[]}catch{}},se=()=>{x.value.handlerGoTop()},ie=async e=>{var s;if(g.value||r.value)return;const t=(s=m.value)==null?void 0:s.trim();e.key==="Enter"&&(e.shiftKey?(m.value+=`\r
`,e.preventDefault()):(await D(t),e.preventDefault()))},ue=()=>{var e;D((e=m.value)==null?void 0:e.trim())},re=e=>{if(!g.value){if(e.data==null)return;g.value=!0}S.value&&clearTimeout(S.value),S.value=setTimeout(()=>{g.value=!1},400)},ve=()=>{g.value=!0},ce=()=>{setTimeout(()=>{g.value=!1},200)},D=async e=>{e.length<1?f.error("\u53D1\u9001\u5931\u8D25\uFF0C\u539F\u56E0\uFF1A\u5185\u5BB9\u4E3A\u7A7A\uFF01"):n.value!=null?(m.value="",await me({conversationId:n.value,content:e})):f.error("\u8FD8\u6CA1\u521B\u5EFA\u5BF9\u8BDD\uFF0C\u4E0D\u80FD\u53D1\u9001!")},me=async e=>{O.value=new AbortController,r.value=!0,k.value="";try{o.value.push({id:-1,conversationId:n.value,type:"user",content:e.content,createTime:new Date}),o.value.push({id:-2,conversationId:n.value,type:"assistant",content:"\u601D\u8003\u4E2D...",createTime:new Date}),await U(),await b(),fe();let t=!0;await A.sendChatMessageStream(e.conversationId,e.content,O.value,M.value,async s=>{const{code:v,data:_,msg:q}=JSON.parse(s.data);v===0?_.receive.content!==""&&(t&&(t=!1,o.value.pop(),o.value.pop(),o.value.push(_.send),o.value.push(_.receive)),k.value=k.value+_.receive.content,await b()):f.alert(`\u5BF9\u8BDD\u5F02\u5E38! ${q}`)},s=>{f.alert(`\u5BF9\u8BDD\u5F02\u5E38! ${s}`),V()},()=>{V()})}catch{}},V=async()=>{O.value&&O.value.abort(),r.value=!1},pe=e=>{m.value=e.content},de=e=>{D(e.content)},b=async e=>{await U(),x.value&&x.value.scrollToBottom(e)},fe=async()=>{let e=0;try{if(R.value)return;R.value=!0,z.value="";const t=async()=>{const v=(k.value.length-z.value.length)/10;T.value=v>5?10:v>2?30:v>1.5?50:100,r.value||(T.value=10),e<k.value.length?(z.value+=k.value[e],e++,o.value[o.value.length-1].content=z.value,await b(),s=setTimeout(t,T.value)):r.value?s=setTimeout(t,T.value):(R.value=!1,clearTimeout(s))};let s=setTimeout(t,T.value)}catch{}};return _e(async()=>{if(G.query.conversationId){const e=G.query.conversationId;n.value=e,await P(e)}C.value=!0,await E()}),(e,t)=>{const s=Ie,v=xe,_=Oe,q=Me,ye=ze,he=De,F=Le;return p(),w(F,{class:"ai-layout"},{default:c(()=>[i(Ve,{"active-id":a(n),ref_key:"conversationListRef",ref:K,onOnConversationCreate:le,onOnConversationClick:Y,onOnConversationClear:$,onOnConversationDelete:Z},null,8,["active-id"]),i(F,{class:"detail-container"},{default:c(()=>[i(_,{class:"header"},{default:c(()=>{var h,J;return[d("div",Ge,[B(H((h=a(u))!=null&&h.title?(J=a(u))==null?void 0:J.title:"\u5BF9\u8BDD")+" ",1),a(o).length?(p(),W("span",Ke,"("+H(a(o).length)+")",1)):y("",!0)]),a(u)?(p(),W("div",Pe,[i(v,{type:"primary",bg:"",plain:"",size:"small",onClick:ee},{default:c(()=>{var Q;return[d("span",{innerHTML:(Q=a(u))==null?void 0:Q.modelName},null,8,$e),i(s,{icon:"ep:setting",class:"ml-10px"})]}),_:1}),i(v,{size:"small",class:"btn",onClick:oe},{default:c(()=>[i(s,{icon:"heroicons-outline:archive-box-x-mark",color:"#787878"})]),_:1}),i(v,{size:"small",class:"btn"},{default:c(()=>[i(s,{icon:"ep:download",color:"#787878"})]),_:1}),i(v,{size:"small",class:"btn",onClick:se},{default:c(()=>[i(s,{icon:"ep:top",color:"#787878"})]),_:1})])):y("",!0)]}),_:1}),i(q,{class:"main-container"},{default:c(()=>[d("div",null,[d("div",je,[a(C)?(p(),w(Ue,{key:0})):y("",!0),a(u)?y("",!0):(p(),w(Ae,{key:1,onOnNewConversation:te})),!a(C)&&a(N).length===0&&a(u)?(p(),w(He,{key:2,onOnPrompt:D})):y("",!0),!a(C)&&a(N).length>0?(p(),w(Be,{key:3,ref_key:"messageRef",ref:x,conversation:a(u),list:a(N),onOnDeleteSuccess:ne,onOnEdit:pe,onOnRefresh:de},null,8,["conversation","list"])):y("",!0)])])]),_:1}),i(he,{class:"footer-container"},{default:c(()=>[d("form",Fe,[Te(d("textarea",{class:"prompt-input","onUpdate:modelValue":t[0]||(t[0]=h=>X(m)?m.value=h:null),onKeydown:ie,onInput:re,onCompositionstart:ve,onCompositionend:ce,placeholder:"\u95EE\u6211\u4EFB\u4F55\u95EE\u9898...\uFF08Shift+Enter \u6362\u884C\uFF0C\u6309\u4E0B Enter \u53D1\u9001\uFF09"},null,544),[[be,a(m)]]),d("div",Je,[d("div",null,[i(ye,{modelValue:a(M),"onUpdate:modelValue":t[1]||(t[1]=h=>X(M)?M.value=h:null)},null,8,["modelValue"]),Qe]),a(r)==0?(p(),w(v,{key:0,type:"primary",size:"default",onClick:ue,loading:a(r)},{default:c(()=>[B(H(a(r)?"\u8FDB\u884C\u4E2D":"\u53D1\u9001"),1)]),_:1},8,["loading"])):y("",!0),a(r)==1?(p(),w(v,{key:1,type:"danger",size:"default",onClick:t[2]||(t[2]=h=>V())},{default:c(()=>[B(" \u505C\u6B62 ")]),_:1})):y("",!0)])])]),_:1})]),_:1}),i(qe,{ref_key:"conversationUpdateFormRef",ref:j,onSuccess:ae},null,512)]),_:1})}}}),Xe=Ee(We,[["__scopeId","data-v-3b7d254d"]]);export{Xe as default};
