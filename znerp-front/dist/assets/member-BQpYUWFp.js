import{bt as s}from"./index-CIfmhqRC.js";import{f as e}from"./formatTime-DFFN_xWx.js";const a=()=>s.get({url:"/statistics/member/summary"}),m=t=>s.get({url:"/statistics/member/analyse",params:{times:[e(t.times[0]),e(t.times[1])]}}),r=()=>s.get({url:"/statistics/member/area-statistics-list"}),c=()=>s.get({url:"/statistics/member/sex-statistics-list"}),l=()=>s.get({url:"/statistics/member/terminal-statistics-list"}),u=()=>s.get({url:"/statistics/member/user-count-comparison"}),o=(t,i)=>s.get({url:"/statistics/member/register-count-list",params:{times:[e(t),e(i)]}});export{u as a,l as b,m as c,a as d,r as e,c as f,o as g};
