import{ap as h,d0 as V,a9 as w,cr as a}from"./index-CIfmhqRC.js";const c=h("tagsView",{state:()=>({visitedViews:[],cachedViews:new Set}),getters:{getVisitedViews(){return this.visitedViews},getCachedViews(){return Array.from(this.cachedViews)}},actions:{addView(i){this.addVisitedView(i),this.addCachedView()},addVisitedView(i){var e,s;this.visitedViews.some(t=>t.path===i.path)||(e=i.meta)!=null&&e.noTagsView||this.visitedViews.push(Object.assign({},i,{title:((s=i.meta)==null?void 0:s.title)||"no-name"}))},addCachedView(){var e;const i=new Set;for(const s of this.visitedViews){const t=V(s);if((e=t.meta)!=null&&e.noCache)continue;const d=t.name;i.add(d)}Array.from(this.cachedViews).sort().toString()!==Array.from(i).sort().toString()&&(this.cachedViews=i)},delView(i){this.delVisitedView(i),this.delCachedView()},delVisitedView(i){for(const[e,s]of this.visitedViews.entries())if(s.path===i.path){this.visitedViews.splice(e,1);break}},delCachedView(){const i=w.currentRoute.value,e=a(this.getCachedViews,s=>s===i.name);e>-1&&this.cachedViews.delete(this.getCachedViews[e])},delAllViews(){this.delAllVisitedViews(),this.delCachedView()},delAllVisitedViews(){this.visitedViews=[]},delOthersViews(i){this.delOthersVisitedViews(i),this.addCachedView()},delOthersVisitedViews(i){this.visitedViews=this.visitedViews.filter(e=>{var s;return((s=e==null?void 0:e.meta)==null?void 0:s.affix)||e.path===i.path})},delLeftViews(i){const e=a(this.visitedViews,s=>s.path===i.path);e>-1&&(this.visitedViews=this.visitedViews.filter((s,t)=>{var d;return((d=s==null?void 0:s.meta)==null?void 0:d.affix)||s.path===i.path||t>e}),this.addCachedView())},delRightViews(i){const e=a(this.visitedViews,s=>s.path===i.path);e>-1&&(this.visitedViews=this.visitedViews.filter((s,t)=>{var d;return((d=s==null?void 0:s.meta)==null?void 0:d.affix)||s.path===i.path||t<e}),this.addCachedView())},updateVisitedView(i){for(let e of this.visitedViews)if(e.path===i.path){e=Object.assign(e,i);break}}},persist:!1});export{c as u};