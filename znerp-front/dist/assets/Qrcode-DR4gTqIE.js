import{d as Vt,ai as $,r as Ct,a3 as At,ar as qt,y as $t,o as ot,c as bt,q as Zt,a_ as Wt,W as Bt,a as D,g as It,f as Xt,t as Gt,a5 as te,at as ee,$ as ne,M as re,H as oe,aw as ie,aB as ae,b6 as Tt,_ as se}from"./index-CIfmhqRC.js";var O={},Mt={},L={};let it;const ue=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];L.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},L.getSymbolTotalCodewords=function(t){return ue[t]},L.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e},L.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');it=t},L.isKanjiModeEnabled=function(){return it!==void 0},L.toSJIS=function(t){return it(t)};var S,Z={};function Pt(){this.buffer=[],this.length=0}(S=Z).L={bit:1},S.M={bit:0},S.Q={bit:3},S.H={bit:2},S.isValid=function(t){return t&&t.bit!==void 0&&t.bit>=0&&t.bit<4},S.from=function(t,e){if(S.isValid(t))return t;try{return function(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"l":case"low":return S.L;case"m":case"medium":return S.M;case"q":case"quartile":return S.Q;case"h":case"high":return S.H;default:throw new Error("Unknown EC Level: "+r)}}(t)}catch{return e}},Pt.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)==1},put:function(t,e){for(let r=0;r<e;r++)this.putBit((t>>>e-r-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var ce=Pt;function j(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}j.prototype.set=function(t,e,r,n){const i=t*this.size+e;this.data[i]=r,n&&(this.reservedBit[i]=!0)},j.prototype.get=function(t,e){return this.data[t*this.size+e]},j.prototype.xor=function(t,e,r){this.data[t*this.size+e]^=r},j.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var le=j,Nt={};(function(t){const e=L.getSymbolSize;t.getRowColCoords=function(r){if(r===1)return[];const n=Math.floor(r/7)+2,i=e(r),s=i===145?26:2*Math.ceil((i-13)/(2*n-2)),o=[i-7];for(let l=1;l<n-1;l++)o[l]=o[l-1]-s;return o.push(6),o.reverse()},t.getPositions=function(r){const n=[],i=t.getRowColCoords(r),s=i.length;for(let o=0;o<s;o++)for(let l=0;l<s;l++)o===0&&l===0||o===0&&l===s-1||o===s-1&&l===0||n.push([i[o],i[l]]);return n}})(Nt);var Rt={};const fe=L.getSymbolSize;Rt.getPositions=function(t){const e=fe(t);return[[0,0],[e-7,0],[0,e-7]]};var Lt={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e=3,r=3,n=40,i=10;function s(o,l,f){switch(o){case t.Patterns.PATTERN000:return(l+f)%2==0;case t.Patterns.PATTERN001:return l%2==0;case t.Patterns.PATTERN010:return f%3==0;case t.Patterns.PATTERN011:return(l+f)%3==0;case t.Patterns.PATTERN100:return(Math.floor(l/2)+Math.floor(f/3))%2==0;case t.Patterns.PATTERN101:return l*f%2+l*f%3==0;case t.Patterns.PATTERN110:return(l*f%2+l*f%3)%2==0;case t.Patterns.PATTERN111:return(l*f%3+(l+f)%2)%2==0;default:throw new Error("bad maskPattern:"+o)}}t.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},t.from=function(o){return t.isValid(o)?parseInt(o,10):void 0},t.getPenaltyN1=function(o){const l=o.size;let f=0,a=0,u=0,c=null,d=null;for(let w=0;w<l;w++){a=u=0,c=d=null;for(let h=0;h<l;h++){let p=o.get(w,h);p===c?a++:(a>=5&&(f+=e+(a-5)),c=p,a=1),p=o.get(h,w),p===d?u++:(u>=5&&(f+=e+(u-5)),d=p,u=1)}a>=5&&(f+=e+(a-5)),u>=5&&(f+=e+(u-5))}return f},t.getPenaltyN2=function(o){const l=o.size;let f=0;for(let a=0;a<l-1;a++)for(let u=0;u<l-1;u++){const c=o.get(a,u)+o.get(a,u+1)+o.get(a+1,u)+o.get(a+1,u+1);c!==4&&c!==0||f++}return f*r},t.getPenaltyN3=function(o){const l=o.size;let f=0,a=0,u=0;for(let c=0;c<l;c++){a=u=0;for(let d=0;d<l;d++)a=a<<1&2047|o.get(c,d),d>=10&&(a===1488||a===93)&&f++,u=u<<1&2047|o.get(d,c),d>=10&&(u===1488||u===93)&&f++}return f*n},t.getPenaltyN4=function(o){let l=0;const f=o.data.length;for(let a=0;a<f;a++)l+=o.data[a];return Math.abs(Math.ceil(100*l/f/5)-10)*i},t.applyMask=function(o,l){const f=l.size;for(let a=0;a<f;a++)for(let u=0;u<f;u++)l.isReserved(u,a)||l.xor(u,a,s(o,u,a))},t.getBestMask=function(o,l){const f=Object.keys(t.Patterns).length;let a=0,u=1/0;for(let c=0;c<f;c++){l(c),t.applyMask(c,o);const d=t.getPenaltyN1(o)+t.getPenaltyN2(o)+t.getPenaltyN3(o)+t.getPenaltyN4(o);t.applyMask(c,o),d<u&&(u=d,a=c)}return a}})(Lt);var W={};const k=Z,X=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],G=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];W.getBlocksCount=function(t,e){switch(e){case k.L:return X[4*(t-1)+0];case k.M:return X[4*(t-1)+1];case k.Q:return X[4*(t-1)+2];case k.H:return X[4*(t-1)+3];default:return}},W.getTotalCodewordsCount=function(t,e){switch(e){case k.L:return G[4*(t-1)+0];case k.M:return G[4*(t-1)+1];case k.Q:return G[4*(t-1)+2];case k.H:return G[4*(t-1)+3];default:return}};var xt={},tt={};const Q=new Uint8Array(512),et=new Uint8Array(256);(function(){let t=1;for(let e=0;e<255;e++)Q[e]=t,et[t]=e,t<<=1,256&t&&(t^=285);for(let e=255;e<512;e++)Q[e]=Q[e-255]})(),tt.log=function(t){if(t<1)throw new Error("log("+t+")");return et[t]},tt.exp=function(t){return Q[t]},tt.mul=function(t,e){return t===0||e===0?0:Q[et[t]+et[e]]},function(t){const e=tt;t.mul=function(r,n){const i=new Uint8Array(r.length+n.length-1);for(let s=0;s<r.length;s++)for(let o=0;o<n.length;o++)i[s+o]^=e.mul(r[s],n[o]);return i},t.mod=function(r,n){let i=new Uint8Array(r);for(;i.length-n.length>=0;){const s=i[0];for(let l=0;l<n.length;l++)i[l]^=e.mul(n[l],s);let o=0;for(;o<i.length&&i[o]===0;)o++;i=i.slice(o)}return i},t.generateECPolynomial=function(r){let n=new Uint8Array([1]);for(let i=0;i<r;i++)n=t.mul(n,new Uint8Array([1,e.exp(i)]));return n}}(xt);const St=xt;function at(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}at.prototype.initialize=function(t){this.degree=t,this.genPoly=St.generateECPolynomial(this.degree)},at.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(t.length+this.degree);e.set(t);const r=St.mod(e,this.genPoly),n=this.degree-r.length;if(n>0){const i=new Uint8Array(this.degree);return i.set(r,n),i}return r};var de=at,Ut={},z={},kt={isValid:function(t){return!isNaN(t)&&t>=1&&t<=40}},U={};const zt="[0-9]+";let V="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";V=V.replace(/u/g,"\\u");const he="(?:(?![A-Z0-9 $%*+\\-./:]|"+V+`)(?:.|[\r
]))+`;U.KANJI=new RegExp(V,"g"),U.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),U.BYTE=new RegExp(he,"g"),U.NUMERIC=new RegExp(zt,"g"),U.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");const ge=new RegExp("^"+V+"$"),pe=new RegExp("^"+zt+"$"),we=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");U.testKanji=function(t){return ge.test(t)},U.testNumeric=function(t){return pe.test(t)},U.testAlphanumeric=function(t){return we.test(t)},function(t){const e=kt,r=U;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(n,i){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!e.isValid(i))throw new Error("Invalid version: "+i);return i>=1&&i<10?n.ccBits[0]:i<27?n.ccBits[1]:n.ccBits[2]},t.getBestModeForData=function(n){return r.testNumeric(n)?t.NUMERIC:r.testAlphanumeric(n)?t.ALPHANUMERIC:r.testKanji(n)?t.KANJI:t.BYTE},t.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},t.isValid=function(n){return n&&n.bit&&n.ccBits},t.from=function(n,i){if(t.isValid(n))return n;try{return function(s){if(typeof s!="string")throw new Error("Param is not a string");switch(s.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+s)}}(n)}catch{return i}}}(z),function(t){const e=L,r=W,n=Z,i=z,s=kt,o=e.getBCHDigit(7973);function l(a,u){return i.getCharCountIndicator(a,u)+4}function f(a,u){let c=0;return a.forEach(function(d){const w=l(d.mode,u);c+=w+d.getBitsLength()}),c}t.from=function(a,u){return s.isValid(a)?parseInt(a,10):u},t.getCapacity=function(a,u,c){if(!s.isValid(a))throw new Error("Invalid QR Code version");c===void 0&&(c=i.BYTE);const d=8*(e.getSymbolTotalCodewords(a)-r.getTotalCodewordsCount(a,u));if(c===i.MIXED)return d;const w=d-l(c,a);switch(c){case i.NUMERIC:return Math.floor(w/10*3);case i.ALPHANUMERIC:return Math.floor(w/11*2);case i.KANJI:return Math.floor(w/13);case i.BYTE:default:return Math.floor(w/8)}},t.getBestVersionForData=function(a,u){let c;const d=n.from(u,n.M);if(Array.isArray(a)){if(a.length>1)return function(w,h){for(let p=1;p<=40;p++)if(f(w,p)<=t.getCapacity(p,h,i.MIXED))return p}(a,d);if(a.length===0)return 1;c=a[0]}else c=a;return function(w,h,p){for(let g=1;g<=40;g++)if(h<=t.getCapacity(g,p,w))return g}(c.mode,c.getLength(),d)},t.getEncodedBits=function(a){if(!s.isValid(a)||a<7)throw new Error("Invalid QR Code version");let u=a<<12;for(;e.getBCHDigit(u)-o>=0;)u^=7973<<e.getBCHDigit(u)-o;return a<<12|u}}(Ut);var Dt={};const st=L,_t=st.getBCHDigit(1335);Dt.getEncodedBits=function(t,e){const r=t.bit<<3|e;let n=r<<10;for(;st.getBCHDigit(n)-_t>=0;)n^=1335<<st.getBCHDigit(n)-_t;return 21522^(r<<10|n)};var Ht={};const me=z;function H(t){this.mode=me.NUMERIC,this.data=t.toString()}H.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},H.prototype.getLength=function(){return this.data.length},H.prototype.getBitsLength=function(){return H.getBitsLength(this.data.length)},H.prototype.write=function(t){let e,r,n;for(e=0;e+3<=this.data.length;e+=3)r=this.data.substr(e,3),n=parseInt(r,10),t.put(n,10);const i=this.data.length-e;i>0&&(r=this.data.substr(e),n=parseInt(r,10),t.put(n,3*i+1))};var ye=H;const Ee=z,ut=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function F(t){this.mode=Ee.ALPHANUMERIC,this.data=t}F.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},F.prototype.getLength=function(){return this.data.length},F.prototype.getBitsLength=function(){return F.getBitsLength(this.data.length)},F.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let r=45*ut.indexOf(this.data[e]);r+=ut.indexOf(this.data[e+1]),t.put(r,11)}this.data.length%2&&t.put(ut.indexOf(this.data[e]),6)};var ve=F;const Ce=z;function J(t){this.mode=Ce.BYTE,this.data=typeof t=="string"?new TextEncoder().encode(t):new Uint8Array(t)}J.getBitsLength=function(t){return 8*t},J.prototype.getLength=function(){return this.data.length},J.prototype.getBitsLength=function(){return J.getBitsLength(this.data.length)},J.prototype.write=function(t){for(let e=0,r=this.data.length;e<r;e++)t.put(this.data[e],8)};var Ae=J;const be=z,Be=L;function K(t){this.mode=be.KANJI,this.data=t}K.getBitsLength=function(t){return 13*t},K.prototype.getLength=function(){return this.data.length},K.prototype.getBitsLength=function(){return K.getBitsLength(this.data.length)},K.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let r=Be.toSJIS(this.data[e]);if(r>=33088&&r<=40956)r-=33088;else{if(!(r>=57408&&r<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);r-=49472}r=192*(r>>>8&255)+(255&r),t.put(r,13)}};var Ie=K,Ft={exports:{}};(function(t){var e={single_source_shortest_paths:function(r,n,i){var s={},o={};o[n]=0;var l,f,a,u,c,d,w,h=e.PriorityQueue.make();for(h.push(n,0);!h.empty();)for(a in f=(l=h.pop()).value,u=l.cost,c=r[f]||{})c.hasOwnProperty(a)&&(d=u+c[a],w=o[a],(o[a]===void 0||w>d)&&(o[a]=d,h.push(a,d),s[a]=f));if(i!==void 0&&o[i]===void 0){var p=["Could not find a path from ",n," to ",i,"."].join("");throw new Error(p)}return s},extract_shortest_path_from_predecessor_list:function(r,n){for(var i=[],s=n;s;)i.push(s),r[s],s=r[s];return i.reverse(),i},find_path:function(r,n,i){var s=e.single_source_shortest_paths(r,n,i);return e.extract_shortest_path_from_predecessor_list(s,i)},PriorityQueue:{make:function(r){var n,i=e.PriorityQueue,s={};for(n in r=r||{},i)i.hasOwnProperty(n)&&(s[n]=i[n]);return s.queue=[],s.sorter=r.sorter||i.default_sorter,s},default_sorter:function(r,n){return r.cost-n.cost},push:function(r,n){var i={value:r,cost:n};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(Ft);var Te=Ft.exports;(function(t){const e=z,r=ye,n=ve,i=Ae,s=Ie,o=U,l=L,f=Te;function a(h){return unescape(encodeURIComponent(h)).length}function u(h,p,g){const v=[];let m;for(;(m=h.exec(g))!==null;)v.push({data:m[0],index:m.index,mode:p,length:m[0].length});return v}function c(h){const p=u(o.NUMERIC,e.NUMERIC,h),g=u(o.ALPHANUMERIC,e.ALPHANUMERIC,h);let v,m;return l.isKanjiModeEnabled()?(v=u(o.BYTE,e.BYTE,h),m=u(o.KANJI,e.KANJI,h)):(v=u(o.BYTE_KANJI,e.BYTE,h),m=[]),p.concat(g,v,m).sort(function(E,y){return E.index-y.index}).map(function(E){return{data:E.data,mode:E.mode,length:E.length}})}function d(h,p){switch(p){case e.NUMERIC:return r.getBitsLength(h);case e.ALPHANUMERIC:return n.getBitsLength(h);case e.KANJI:return s.getBitsLength(h);case e.BYTE:return i.getBitsLength(h)}}function w(h,p){let g;const v=e.getBestModeForData(h);if(g=e.from(p,v),g!==e.BYTE&&g.bit<v.bit)throw new Error('"'+h+'" cannot be encoded with mode '+e.toString(g)+`.
 Suggested mode is: `+e.toString(v));switch(g!==e.KANJI||l.isKanjiModeEnabled()||(g=e.BYTE),g){case e.NUMERIC:return new r(h);case e.ALPHANUMERIC:return new n(h);case e.KANJI:return new s(h);case e.BYTE:return new i(h)}}t.fromArray=function(h){return h.reduce(function(p,g){return typeof g=="string"?p.push(w(g,null)):g.data&&p.push(w(g.data,g.mode)),p},[])},t.fromString=function(h,p){const g=function(y){const A=[];for(let b=0;b<y.length;b++){const C=y[b];switch(C.mode){case e.NUMERIC:A.push([C,{data:C.data,mode:e.ALPHANUMERIC,length:C.length},{data:C.data,mode:e.BYTE,length:C.length}]);break;case e.ALPHANUMERIC:A.push([C,{data:C.data,mode:e.BYTE,length:C.length}]);break;case e.KANJI:A.push([C,{data:C.data,mode:e.BYTE,length:a(C.data)}]);break;case e.BYTE:A.push([{data:C.data,mode:e.BYTE,length:a(C.data)}])}}return A}(c(h,l.isKanjiModeEnabled())),v=function(y,A){const b={},C={start:{}};let R=["start"];for(let P=0;P<y.length;P++){const T=y[P],N=[];for(let M=0;M<T.length;M++){const B=T[M],x=""+P+M;N.push(x),b[x]={node:B,lastCount:0},C[x]={};for(let _=0;_<R.length;_++){const I=R[_];b[I]&&b[I].node.mode===B.mode?(C[I][x]=d(b[I].lastCount+B.length,B.mode)-d(b[I].lastCount,B.mode),b[I].lastCount+=B.length):(b[I]&&(b[I].lastCount=B.length),C[I][x]=d(B.length,B.mode)+4+e.getCharCountIndicator(B.mode,A))}}R=N}for(let P=0;P<R.length;P++)C[R[P]].end=0;return{map:C,table:b}}(g,p),m=f.find_path(v.map,"start","end"),E=[];for(let y=1;y<m.length-1;y++)E.push(v.table[m[y]].node);return t.fromArray(function(y){return y.reduce(function(A,b){const C=A.length-1>=0?A[A.length-1]:null;return C&&C.mode===b.mode?(A[A.length-1].data+=b.data,A):(A.push(b),A)},[])}(E))},t.rawSplit=function(h){return t.fromArray(c(h,l.isKanjiModeEnabled()))}})(Ht);const nt=L,ct=Z,Me=ce,Pe=le,Ne=Nt,Re=Rt,lt=Lt,ft=W,Le=de,rt=Ut,xe=Dt,Se=z,dt=Ht;function ht(t,e,r){const n=t.size,i=xe.getEncodedBits(e,r);let s,o;for(s=0;s<15;s++)o=(i>>s&1)==1,s<6?t.set(s,8,o,!0):s<8?t.set(s+1,8,o,!0):t.set(n-15+s,8,o,!0),s<8?t.set(8,n-s-1,o,!0):s<9?t.set(8,15-s-1+1,o,!0):t.set(8,15-s-1,o,!0);t.set(n-8,8,1,!0)}function Ue(t,e,r){const n=new Me;r.forEach(function(o){n.put(o.mode.bit,4),n.put(o.getLength(),Se.getCharCountIndicator(o.mode,t)),o.write(n)});const i=8*(nt.getSymbolTotalCodewords(t)-ft.getTotalCodewordsCount(t,e));for(n.getLengthInBits()+4<=i&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(0);const s=(i-n.getLengthInBits())/8;for(let o=0;o<s;o++)n.put(o%2?17:236,8);return function(o,l,f){const a=nt.getSymbolTotalCodewords(l),u=ft.getTotalCodewordsCount(l,f),c=a-u,d=ft.getBlocksCount(l,f),w=a%d,h=d-w,p=Math.floor(a/d),g=Math.floor(c/d),v=g+1,m=p-g,E=new Le(m);let y=0;const A=new Array(d),b=new Array(d);let C=0;const R=new Uint8Array(o.buffer);for(let B=0;B<d;B++){const x=B<h?g:v;A[B]=R.slice(y,y+x),b[B]=E.encode(A[B]),y+=x,C=Math.max(C,x)}const P=new Uint8Array(a);let T,N,M=0;for(T=0;T<C;T++)for(N=0;N<d;N++)T<A[N].length&&(P[M++]=A[N][T]);for(T=0;T<m;T++)for(N=0;N<d;N++)P[M++]=b[N][T];return P}(n,t,e)}function ke(t,e,r,n){let i;if(Array.isArray(t))i=dt.fromArray(t);else{if(typeof t!="string")throw new Error("Invalid data");{let a=e;if(!a){const u=dt.rawSplit(t);a=rt.getBestVersionForData(u,r)}i=dt.fromString(t,a||40)}}const s=rt.getBestVersionForData(i,r);if(!s)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<s)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+s+`.
`)}else e=s;const o=Ue(e,r,i),l=nt.getSymbolSize(e),f=new Pe(l);return function(a,u){const c=a.size,d=Re.getPositions(u);for(let w=0;w<d.length;w++){const h=d[w][0],p=d[w][1];for(let g=-1;g<=7;g++)if(!(h+g<=-1||c<=h+g))for(let v=-1;v<=7;v++)p+v<=-1||c<=p+v||(g>=0&&g<=6&&(v===0||v===6)||v>=0&&v<=6&&(g===0||g===6)||g>=2&&g<=4&&v>=2&&v<=4?a.set(h+g,p+v,!0,!0):a.set(h+g,p+v,!1,!0))}}(f,e),function(a){const u=a.size;for(let c=8;c<u-8;c++){const d=c%2==0;a.set(c,6,d,!0),a.set(6,c,d,!0)}}(f),function(a,u){const c=Ne.getPositions(u);for(let d=0;d<c.length;d++){const w=c[d][0],h=c[d][1];for(let p=-2;p<=2;p++)for(let g=-2;g<=2;g++)p===-2||p===2||g===-2||g===2||p===0&&g===0?a.set(w+p,h+g,!0,!0):a.set(w+p,h+g,!1,!0)}}(f,e),ht(f,r,0),e>=7&&function(a,u){const c=a.size,d=rt.getEncodedBits(u);let w,h,p;for(let g=0;g<18;g++)w=Math.floor(g/3),h=g%3+c-8-3,p=(d>>g&1)==1,a.set(w,h,p,!0),a.set(h,w,p,!0)}(f,e),function(a,u){const c=a.size;let d=-1,w=c-1,h=7,p=0;for(let g=c-1;g>0;g-=2)for(g===6&&g--;;){for(let v=0;v<2;v++)if(!a.isReserved(w,g-v)){let m=!1;p<u.length&&(m=(u[p]>>>h&1)==1),a.set(w,g-v,m),h--,h===-1&&(p++,h=7)}if(w+=d,w<0||c<=w){w-=d,d=-d;break}}}(f,o),isNaN(n)&&(n=lt.getBestMask(f,ht.bind(null,f,r))),lt.applyMask(n,f),ht(f,r,n),{modules:f,version:e,errorCorrectionLevel:r,maskPattern:n,segments:i}}Mt.create=function(t,e){if(t===void 0||t==="")throw new Error("No input text");let r,n,i=ct.M;return e!==void 0&&(i=ct.from(e.errorCorrectionLevel,ct.M),r=rt.from(e.version),n=lt.from(e.maskPattern),e.toSJISFunc&&nt.setToSJISFunction(e.toSJISFunc)),ke(t,r,i,n)};var Jt={},gt={};(function(t){function e(r){if(typeof r=="number"&&(r=r.toString()),typeof r!="string")throw new Error("Color should be defined as hex string");let n=r.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+r);n.length!==3&&n.length!==4||(n=Array.prototype.concat.apply([],n.map(function(s){return[s,s]}))),n.length===6&&n.push("F","F");const i=parseInt(n.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:255&i,hex:"#"+n.slice(0,6).join("")}}t.getOptions=function(r){r||(r={}),r.color||(r.color={});const n=r.margin===void 0||r.margin===null||r.margin<0?4:r.margin,i=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:i,scale:i?4:s,margin:n,color:{dark:e(r.color.dark||"#000000ff"),light:e(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},t.getScale=function(r,n){return n.width&&n.width>=r+2*n.margin?n.width/(r+2*n.margin):n.scale},t.getImageWidth=function(r,n){const i=t.getScale(r,n);return Math.floor((r+2*n.margin)*i)},t.qrToImageData=function(r,n,i){const s=n.modules.size,o=n.modules.data,l=t.getScale(s,i),f=Math.floor((s+2*i.margin)*l),a=i.margin*l,u=[i.color.light,i.color.dark];for(let c=0;c<f;c++)for(let d=0;d<f;d++){let w=4*(c*f+d),h=i.color.light;c>=a&&d>=a&&c<f-a&&d<f-a&&(h=u[o[Math.floor((c-a)/l)*s+Math.floor((d-a)/l)]?1:0]),r[w++]=h.r,r[w++]=h.g,r[w++]=h.b,r[w]=h.a}}})(gt),function(t){const e=gt;t.render=function(r,n,i){let s=i,o=n;s!==void 0||n&&n.getContext||(s=n,n=void 0),n||(o=function(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}()),s=e.getOptions(s);const l=e.getImageWidth(r.modules.size,s),f=o.getContext("2d"),a=f.createImageData(l,l);return e.qrToImageData(a.data,r,s),function(u,c,d){u.clearRect(0,0,c.width,c.height),c.style||(c.style={}),c.height=d,c.width=d,c.style.height=d+"px",c.style.width=d+"px"}(f,o,l),f.putImageData(a,0,0),o},t.renderToDataURL=function(r,n,i){let s=i;s!==void 0||n&&n.getContext||(s=n,n=void 0),s||(s={});const o=t.render(r,n,s),l=s.type||"image/png",f=s.rendererOpts||{};return o.toDataURL(l,f.quality)}}(Jt);var Kt={};const ze=gt;function Yt(t,e){const r=t.a/255,n=e+'="'+t.hex+'"';return r<1?n+" "+e+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function pt(t,e,r){let n=t+e;return r!==void 0&&(n+=" "+r),n}Kt.render=function(t,e,r){const n=ze.getOptions(e),i=t.modules.size,s=t.modules.data,o=i+2*n.margin,l=n.color.light.a?"<path "+Yt(n.color.light,"fill")+' d="M0 0h'+o+"v"+o+'H0z"/>':"",f="<path "+Yt(n.color.dark,"stroke")+' d="'+function(c,d,w){let h="",p=0,g=!1,v=0;for(let m=0;m<c.length;m++){const E=Math.floor(m%d),y=Math.floor(m/d);E||g||(g=!0),c[m]?(v++,m>0&&E>0&&c[m-1]||(h+=g?pt("M",E+w,.5+y+w):pt("m",p,0),p=0,g=!1),E+1<d&&c[m+1]||(h+=pt("h",v),v=0)):p++}return h}(s,i,n.margin)+'"/>',a='viewBox="0 0 '+o+" "+o+'"',u='<svg xmlns="http://www.w3.org/2000/svg" '+(n.width?'width="'+n.width+'" height="'+n.width+'" ':"")+a+' shape-rendering="crispEdges">'+l+f+`</svg>
`;return typeof r=="function"&&r(null,u),u};const De=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},wt=Mt,Ot=Jt,_e=Kt;function mt(t,e,r,n,i){const s=[].slice.call(arguments,1),o=s.length,l=typeof s[o-1]=="function";if(!l&&!De())throw new Error("Callback required as last argument");if(!l){if(o<1)throw new Error("Too few arguments provided");return o===1?(r=e,e=n=void 0):o!==2||e.getContext||(n=r,r=e,e=void 0),new Promise(function(f,a){try{const u=wt.create(r,n);f(t(u,e,n))}catch(u){a(u)}})}if(o<2)throw new Error("Too few arguments provided");o===2?(i=r,r=e,e=n=void 0):o===3&&(e.getContext&&i===void 0?(i=n,n=void 0):(i=n,n=r,r=e,e=void 0));try{const f=wt.create(r,n);i(null,t(f,e,n))}catch(f){i(f)}}O.create=wt.create,O.toCanvas=mt.bind(null,Ot.render),O.toDataURL=mt.bind(null,Ot.renderToDataURL),O.toString=mt.bind(null,function(t,e,r){return _e.render(t,r)});const He={class:"absolute left-[50%] top-[50%] font-bold"},Fe=se(Vt({name:"Qrcode",__name:"Qrcode",props:{tag:$.string.validate(t=>["canvas","img"].includes(t)).def("canvas"),text:{type:[String,Array],default:null},options:{type:Object,default:()=>({})},width:$.number.def(200),logo:{type:[String,Object],default:""},disabled:$.bool.def(!1),disabledText:$.string.def("")},emits:["done","click","disabled-click"],setup(t,{emit:e}){const r=t,n=e,{getPrefixCls:i}=ne(),s=i("qrcode"),{toCanvas:o,toDataURL:l}=O,f=Ct(!0),a=Ct(null),u=At(()=>String(r.text)),c=At(()=>({width:r.width+"px",height:r.width+"px"}));qt(()=>u.value,m=>{m&&(async()=>{await ie();const E=ae(r.options||{});if(r.tag==="canvas"){E.errorCorrectionLevel=E.errorCorrectionLevel||h(D(u));const y=await w(D(u),E);E.scale=r.width===0?void 0:r.width/y*4;const A=await o(D(a),D(u),E);if(r.logo){const b=await d(A);n("done",b),f.value=!1}else n("done",A.toDataURL()),f.value=!1}else{const y=await l(u.value,{errorCorrectionLevel:"H",width:r.width,...E});D(a).src=y,n("done",y),f.value=!1}})()},{deep:!0,immediate:!0});const d=m=>{const E=m.width,y=Object.assign({logoSize:.15,bgColor:"#ffffff",borderSize:.05,crossOrigin:"anonymous",borderRadius:8,logoRadius:0},Tt(r.logo)?{}:r.logo),{logoSize:A=.15,bgColor:b="#ffffff",borderSize:C=.05,crossOrigin:R="anonymous",borderRadius:P=8,logoRadius:T=0}=y,N=Tt(r.logo)?r.logo:r.logo.src,M=E*A,B=E*(1-A)/2,x=E*(A+C),_=E*(1-A-C)/2,I=m.getContext("2d");if(!I)return;p(I)(_,_,x,x,P),I.fillStyle=b,I.fill();const Y=new Image;return(R||T)&&Y.setAttribute("crossOrigin",R),Y.src=N,new Promise(jt=>{Y.onload=()=>{var yt;T?(Qt=>{const q=document.createElement("canvas");q.width=B+M,q.height=B+M;const Et=q.getContext("2d");if(!Et||!I||(Et.drawImage(Qt,B,B,M,M),p(I)(B,B,M,M,T),!I))return;const vt=I.createPattern(q,"no-repeat");vt&&(I.fillStyle=vt,I.fill())})(Y):(yt=Y,I.drawImage(yt,B,B,M,M)),jt(m.toDataURL())}})},w=async(m,E)=>{const y=document.createElement("canvas");return await o(y,m,E),y.width},h=m=>m.length>36?"M":m.length>16?"Q":"H",p=m=>(E,y,A,b,C)=>{const R=Math.min(A,b);return C>R/2&&(C=R/2),m.beginPath(),m.moveTo(E+C,y),m.arcTo(E+A,y,E+A,y+b,C),m.arcTo(E+A,y+b,E,y+b,C),m.arcTo(E,y+b,E,y,C),m.arcTo(E,y,E+A,y,C),m.closePath(),m},g=()=>{n("click")},v=()=>{n("disabled-click")};return(m,E)=>{const y=oe,A=re;return $t((ot(),bt("div",{class:Bt([D(s),"relative inline-block"]),style:ee(c.value)},[(ot(),Zt(Wt(t.tag),{ref_key:"wrapRef",ref:a,onClick:g},null,512)),t.disabled?(ot(),bt("div",{key:0,class:Bt([`${D(s)}--disabled`,"absolute left-0 top-0 h-full w-full flex items-center justify-center"]),onClick:v},[It("div",He,[Xt(y,{size:30,color:"var(--el-color-primary)",icon:"ep:refresh-right"}),It("div",null,Gt(t.disabledText),1)])],2)):te("",!0)],6)),[[A,f.value]])}}}),[["__scopeId","data-v-b0d4f951"]]);export{Fe as Q};
