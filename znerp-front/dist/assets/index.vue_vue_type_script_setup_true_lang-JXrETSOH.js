import{d as x,b4 as v,r as g,e as b,o as y,c as V,g as s,f as r,t as i,a,y as j,a4 as k,am as w,H as z,cf as _}from"./index-CIfmhqRC.js";import{E as h}from"./el-image-DLpquQe6.js";import{c as T}from"./formatTime-DFFN_xWx.js";const U={class:"flex items-center justify-between px-2 h-72px bg-[var(--el-bg-color-overlay)] b-solid b-1 b-[var(--el-border-color)] b-l-none"},Z={class:"flex gap-[10px]"},C={class:"text-[12px] text-gray-400"},E={class:"flex gap-[12px] items-center"},I={class:"flex gap-[16px] items-center"},J=["src"],P={class:"flex gap-[16px] items-center"},R=x({name:"Index",__name:"index",setup(S){const u=v("currentSong",{}),t=g(null),e=b({autoplay:!0,paused:!1,currentTime:"00:00",duration:"00:00",muted:!1,volume:50});function p(o){e[o]=!e[o],o==="paused"&&t.value&&(e[o]?t.value.pause():t.value.play())}function d(o){e.currentTime=T(new Date(o.timeStamp),"mm:ss")}return(o,l)=>{const f=h,c=z,m=_;return y(),V("div",U,[s("div",Z,[r(f,{src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",class:"w-[45px]"}),s("div",null,[s("div",null,i(a(u).name),1),s("div",C,i(a(u).singer),1)])]),s("div",E,[r(c,{icon:"majesticons:back-circle",size:20,class:"text-gray-300 cursor-pointer"}),r(c,{icon:a(e).paused?"mdi:arrow-right-drop-circle":"solar:pause-circle-bold",size:30,class:"cursor-pointer",onClick:l[0]||(l[0]=n=>p("paused"))},null,8,["icon"]),r(c,{icon:"majesticons:next-circle",size:20,class:"text-gray-300 cursor-pointer"}),s("div",I,[s("span",null,i(a(e).currentTime),1),r(m,{modelValue:a(e).duration,"onUpdate:modelValue":l[1]||(l[1]=n=>a(e).duration=n),color:"#409eff",class:"w-[160px!important]"},null,8,["modelValue"]),s("span",null,i(a(e).duration),1)]),j(s("audio",w(a(e),{ref_key:"audioRef",ref:t,controls:"",onTimeupdate:d}),[s("source",{src:a("/assets/response-8_J3LZnh.mp3")},null,8,J)],16),[[k,!a(e)]])]),s("div",P,[r(c,{icon:a(e).muted?"tabler:volume-off":"tabler:volume",size:20,class:"cursor-pointer",onClick:l[2]||(l[2]=n=>p("muted"))},null,8,["icon"]),r(m,{modelValue:a(e).volume,"onUpdate:modelValue":l[3]||(l[3]=n=>a(e).volume=n),color:"#409eff",class:"w-[160px!important]"},null,8,["modelValue"])])])}}});export{R as _};