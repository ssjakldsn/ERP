import{h as n}from"./index-CIfmhqRC.js";const{t:m}=n(),t=()=>({required:a=>({required:!0,message:a||m("common.required")}),lengthRange:a=>{const{min:o,max:e,message:r}=a;return{min:o,max:e,message:r||m("common.lengthRange",{min:o,max:e})}},notSpace:a=>({validator:(o,e,r)=>{(e==null?void 0:e.indexOf(" "))!==-1?r(new Error(a||m("common.notSpace"))):r()}}),notSpecialCharacters:a=>({validator:(o,e,r)=>{/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/gi.test(e)?r(new Error(a||m("common.notSpecialCharacters"))):r()}})});export{t as u};
