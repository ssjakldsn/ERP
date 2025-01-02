import{d as ce,h as oe,z as le,r as H,e as ue,n as de,O as ge,o as L,q as P,w as N,g as V,y as J,f as Z,a as w,c as me,F as be,p as _e,x as pe,t as fe,k as he,e4 as ye,cA as ve,b0 as Ee,I as Ae,l as we,m as Ne,M as xe}from"./index-CIfmhqRC.js";import{_ as Se}from"./Dialog.vue_vue_type_style_index_0_lang-CtaLqQeX.js";import{E as ke}from"./el-card-DyMugU68.js";import{a as Re}from"./tree-BMqZf9_I.js";import{p as Oe}from"./index-Cd9gjVFL.js";import{H as x}from"./index-BDu05CpY.js";import{j as U}from"./java-DB6dfEyf.js";const W="[A-Za-z$_][0-9A-Za-z$_]*",Ce=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],Ie=["true","false","null","undefined","NaN","Infinity"],Q=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],X=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Y=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Te=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Me=[].concat(Y,Q,X);function je(e){const a=e.regex,n=W,E="<>",v="</>",c={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(h,k)=>{const R=h[0].length+h.index,O=h.input[R];if(O==="<"||O===",")return void k.ignoreMatch();let C;O===">"&&(((B,{after:G})=>{const K="</"+B[0].slice(1);return B.input.indexOf(K,G)!==-1})(h,{after:R})||k.ignoreMatch());const z=h.input.substring(R);((C=z.match(/^\s*=/))||(C=z.match(/^\s+extends\s+/))&&C.index===0)&&k.ignoreMatch()}},s={$pattern:W,keyword:Ce,literal:Ie,built_in:Me,"variable.language":Te},y="[0-9](_?[0-9])*",m=`\\.(${y})`,A="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",o={className:"number",variants:[{begin:`(\\b(${A})((${m})|\\.)?|(${m}))[eE][+-]?(${y})\\b`},{begin:`\\b(${A})\\b((${m})\\b|\\.)?|(${m})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},t={className:"subst",begin:"\\$\\{",end:"\\}",keywords:s,contains:[]},r={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,t],subLanguage:"xml"}},b={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,t],subLanguage:"css"}},d={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,t],subLanguage:"graphql"}},l={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,t]},_={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:n+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},g=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,r,b,d,l,{match:/\$\d+/},o];t.contains=g.concat({begin:/\{/,end:/\}/,keywords:s,contains:["self"].concat(g)});const p=[].concat(_,t.contains),i=p.concat([{begin:/(\s*)\(/,end:/\)/,keywords:s,contains:["self"].concat(p)}]),u={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:i},I={variants:[{match:[/class/,/\s+/,n,/\s+/,/extends/,/\s+/,a.concat(n,"(",a.concat(/\./,n),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,n],scope:{1:"keyword",3:"title.class"}}]},f={relevance:0,match:a.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Q,...X]}},D={variants:[{match:[/function/,/\s+/,n,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[u],illegal:/%/},T={match:a.concat(/\b/,(S=[...Y,"super","import"].map(h=>`${h}\\s*\\(`),a.concat("(?!",S.join("|"),")")),n,a.lookahead(/\s*\(/)),className:"title.function",relevance:0};var S;const M={begin:a.concat(/\./,a.lookahead(a.concat(n,/(?![0-9A-Za-z$_(])/))),end:n,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},j={match:[/get|set/,/\s+/,n,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},u]},$="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",q={match:[/const|var|let/,/\s+/,n,/\s*/,/=\s*/,/(async\s*)?/,a.lookahead($)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[u]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:s,exports:{PARAMS_CONTAINS:i,CLASS_REFERENCE:f},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,r,b,d,l,_,{match:/\$\d+/},o,f,{className:"attr",begin:n+a.lookahead(":"),relevance:0},q,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[_,e.REGEXP_MODE,{className:"function",begin:$,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:i}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:E,end:v},{match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:c.begin,"on:begin":c.isTrulyOpeningTag,end:c.end}],subLanguage:"xml",contains:[{begin:c.begin,end:c.end,skip:!0,contains:["self"]}]}]},D,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[u,e.inherit(e.TITLE_MODE,{begin:n,className:"title.function"})]},{match:/\.\.\./,relevance:0},M,{match:"\\$"+n,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[u]},T,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},I,j,{match:/\$[(.]/}]}}function $e(e){const a=e.regex,n=e.COMMENT("--","$"),E=["true","false","unknown"],v=["bigint","binary","blob","boolean","char","character","clob","date","dec","decfloat","decimal","float","int","integer","interval","nchar","nclob","national","numeric","real","row","smallint","time","timestamp","varchar","varying","varbinary"],c=["abs","acos","array_agg","asin","atan","avg","cast","ceil","ceiling","coalesce","corr","cos","cosh","count","covar_pop","covar_samp","cume_dist","dense_rank","deref","element","exp","extract","first_value","floor","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","last_value","lead","listagg","ln","log","log10","lower","max","min","mod","nth_value","ntile","nullif","percent_rank","percentile_cont","percentile_disc","position","position_regex","power","rank","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","row_number","sin","sinh","sqrt","stddev_pop","stddev_samp","substring","substring_regex","sum","tan","tanh","translate","translate_regex","treat","trim","trim_array","unnest","upper","value_of","var_pop","var_samp","width_bucket"],s=["create table","insert into","primary key","foreign key","not null","alter table","add constraint","grouping sets","on overflow","character set","respect nulls","ignore nulls","nulls first","nulls last","depth first","breadth first"],y=c,m=["abs","acos","all","allocate","alter","and","any","are","array","array_agg","array_max_cardinality","as","asensitive","asin","asymmetric","at","atan","atomic","authorization","avg","begin","begin_frame","begin_partition","between","bigint","binary","blob","boolean","both","by","call","called","cardinality","cascaded","case","cast","ceil","ceiling","char","char_length","character","character_length","check","classifier","clob","close","coalesce","collate","collect","column","commit","condition","connect","constraint","contains","convert","copy","corr","corresponding","cos","cosh","count","covar_pop","covar_samp","create","cross","cube","cume_dist","current","current_catalog","current_date","current_default_transform_group","current_path","current_role","current_row","current_schema","current_time","current_timestamp","current_path","current_role","current_transform_group_for_type","current_user","cursor","cycle","date","day","deallocate","dec","decimal","decfloat","declare","default","define","delete","dense_rank","deref","describe","deterministic","disconnect","distinct","double","drop","dynamic","each","element","else","empty","end","end_frame","end_partition","end-exec","equals","escape","every","except","exec","execute","exists","exp","external","extract","false","fetch","filter","first_value","float","floor","for","foreign","frame_row","free","from","full","function","fusion","get","global","grant","group","grouping","groups","having","hold","hour","identity","in","indicator","initial","inner","inout","insensitive","insert","int","integer","intersect","intersection","interval","into","is","join","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","language","large","last_value","lateral","lead","leading","left","like","like_regex","listagg","ln","local","localtime","localtimestamp","log","log10","lower","match","match_number","match_recognize","matches","max","member","merge","method","min","minute","mod","modifies","module","month","multiset","national","natural","nchar","nclob","new","no","none","normalize","not","nth_value","ntile","null","nullif","numeric","octet_length","occurrences_regex","of","offset","old","omit","on","one","only","open","or","order","out","outer","over","overlaps","overlay","parameter","partition","pattern","per","percent","percent_rank","percentile_cont","percentile_disc","period","portion","position","position_regex","power","precedes","precision","prepare","primary","procedure","ptf","range","rank","reads","real","recursive","ref","references","referencing","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","release","result","return","returns","revoke","right","rollback","rollup","row","row_number","rows","running","savepoint","scope","scroll","search","second","seek","select","sensitive","session_user","set","show","similar","sin","sinh","skip","smallint","some","specific","specifictype","sql","sqlexception","sqlstate","sqlwarning","sqrt","start","static","stddev_pop","stddev_samp","submultiset","subset","substring","substring_regex","succeeds","sum","symmetric","system","system_time","system_user","table","tablesample","tan","tanh","then","time","timestamp","timezone_hour","timezone_minute","to","trailing","translate","translate_regex","translation","treat","trigger","trim","trim_array","true","truncate","uescape","union","unique","unknown","unnest","update","upper","user","using","value","values","value_of","var_pop","var_samp","varbinary","varchar","varying","versioning","when","whenever","where","width_bucket","window","with","within","without","year","add","asc","collation","desc","final","first","last","view"].filter(o=>!c.includes(o)),A={begin:a.concat(/\b/,a.either(...y),/\s*\(/),relevance:0,keywords:{built_in:y}};return{name:"SQL",case_insensitive:!0,illegal:/[{}]|<\//,keywords:{$pattern:/\b[\w\.]+/,keyword:function(o,{exceptions:t,when:r}={}){const b=r;return t=t||[],o.map(d=>d.match(/\|\d+$/)||t.includes(d)?d:b(d)?`${d}|0`:d)}(m,{when:o=>o.length<3}),literal:E,type:v,built_in:["current_catalog","current_date","current_default_transform_group","current_path","current_role","current_schema","current_transform_group_for_type","current_user","session_user","system_time","system_user","current_time","localtime","current_timestamp","localtimestamp"]},contains:[{begin:a.either(...s),relevance:0,keywords:{$pattern:/[\w\.]+/,keyword:m.concat(s),literal:E,type:v}},{className:"type",begin:a.either("double precision","large object","with timezone","without timezone")},A,{className:"variable",begin:/@[a-z0-9][a-z0-9_]*/},{className:"string",variants:[{begin:/'/,end:/'/,contains:[{begin:/''/}]}]},{begin:/"/,end:/"/,contains:[{begin:/""/}]},e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE,n,{className:"operator",begin:/[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,relevance:0}]}}const F="[A-Za-z$_][0-9A-Za-z$_]*",ee=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],ae=["true","false","null","undefined","NaN","Infinity"],ne=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],te=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],re=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],se=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],ie=[].concat(re,ne,te);function ze(e){const a=e.regex,n=F,E="<>",v="</>",c={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(h,k)=>{const R=h[0].length+h.index,O=h.input[R];if(O==="<"||O===",")return void k.ignoreMatch();let C;O===">"&&(((B,{after:G})=>{const K="</"+B[0].slice(1);return B.input.indexOf(K,G)!==-1})(h,{after:R})||k.ignoreMatch());const z=h.input.substring(R);((C=z.match(/^\s*=/))||(C=z.match(/^\s+extends\s+/))&&C.index===0)&&k.ignoreMatch()}},s={$pattern:F,keyword:ee,literal:ae,built_in:ie,"variable.language":se},y="[0-9](_?[0-9])*",m=`\\.(${y})`,A="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",o={className:"number",variants:[{begin:`(\\b(${A})((${m})|\\.)?|(${m}))[eE][+-]?(${y})\\b`},{begin:`\\b(${A})\\b((${m})\\b|\\.)?|(${m})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},t={className:"subst",begin:"\\$\\{",end:"\\}",keywords:s,contains:[]},r={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,t],subLanguage:"xml"}},b={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,t],subLanguage:"css"}},d={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,t],subLanguage:"graphql"}},l={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,t]},_={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:n+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},g=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,r,b,d,l,{match:/\$\d+/},o];t.contains=g.concat({begin:/\{/,end:/\}/,keywords:s,contains:["self"].concat(g)});const p=[].concat(_,t.contains),i=p.concat([{begin:/(\s*)\(/,end:/\)/,keywords:s,contains:["self"].concat(p)}]),u={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:i},I={variants:[{match:[/class/,/\s+/,n,/\s+/,/extends/,/\s+/,a.concat(n,"(",a.concat(/\./,n),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,n],scope:{1:"keyword",3:"title.class"}}]},f={relevance:0,match:a.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...ne,...te]}},D={variants:[{match:[/function/,/\s+/,n,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[u],illegal:/%/},T={match:a.concat(/\b/,(S=[...re,"super","import"].map(h=>`${h}\\s*\\(`),a.concat("(?!",S.join("|"),")")),n,a.lookahead(/\s*\(/)),className:"title.function",relevance:0};var S;const M={begin:a.concat(/\./,a.lookahead(a.concat(n,/(?![0-9A-Za-z$_(])/))),end:n,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},j={match:[/get|set/,/\s+/,n,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},u]},$="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",q={match:[/const|var|let/,/\s+/,n,/\s*/,/=\s*/,/(async\s*)?/,a.lookahead($)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[u]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:s,exports:{PARAMS_CONTAINS:i,CLASS_REFERENCE:f},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,r,b,d,l,_,{match:/\$\d+/},o,f,{className:"attr",begin:n+a.lookahead(":"),relevance:0},q,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[_,e.REGEXP_MODE,{className:"function",begin:$,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:i}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:E,end:v},{match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:c.begin,"on:begin":c.isTrulyOpeningTag,end:c.end}],subLanguage:"xml",contains:[{begin:c.begin,end:c.end,skip:!0,contains:["self"]}]}]},D,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[u,e.inherit(e.TITLE_MODE,{begin:n,className:"title.function"})]},{match:/\.\.\./,relevance:0},M,{match:"\\$"+n,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[u]},T,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},I,j,{match:/\$[(.]/}]}}function Be(e){const a=ze(e),n=F,E=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],v={begin:[/namespace/,/\s+/,e.IDENT_RE],beginScope:{1:"keyword",3:"title.class"}},c={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:E},contains:[a.exports.CLASS_REFERENCE]},s={$pattern:F,keyword:ee.concat(["type","interface","public","private","protected","implements","declare","abstract","readonly","enum","override","satisfies"]),literal:ae,built_in:ie.concat(E),"variable.language":se},y={className:"meta",begin:"@"+n},m=(o,t,r)=>{const b=o.contains.findIndex(d=>d.label===t);if(b===-1)throw new Error("can not find mode to replace");o.contains.splice(b,1,r)};Object.assign(a.keywords,s),a.exports.PARAMS_CONTAINS.push(y);const A=a.contains.find(o=>o.className==="attr");return a.exports.PARAMS_CONTAINS.push([a.exports.CLASS_REFERENCE,A]),a.contains=a.contains.concat([y,v,c]),m(a,"shebang",e.SHEBANG()),m(a,"use_strict",{className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/}),a.contains.find(o=>o.label==="func.def").relevance=0,Object.assign(a,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),a}const Le={class:"flex"},Ze={class:"hljs"},De=ce({name:"InfraCodegenPreviewCode",__name:"PreviewCode",setup(e,{expose:a}){const{t:n}=oe(),E=le(),v=H(!1),c=H(!1),s=ue({fileTree:[],activeName:""}),y=H(),m=async(t,r)=>{if(r&&!r.isLeaf)return!1;s.activeName=t.id};a({open:async t=>{v.value=!0;try{c.value=!0;const r=await Oe(t);y.value=r;let b=A(r);s.fileTree=Re(b,"id","parentId","children","/"),s.activeName=r[0].filePath}finally{c.value=!1}}});const A=t=>{let r={},b=[];for(const d of t){let l=d.filePath.split("/"),_="";if(l[l.length-1].indexOf(".java")>=0){let g=[];for(let p=0;p<l.length;p++){let i=l[p];if(i!=="java"){g.push(i);continue}g.push(i);let u="";for(;p<l.length&&(i=l[p+1],i!=="controller"&&i!=="convert"&&i!=="dal"&&i!=="enums"&&i!=="service"&&i!=="vo"&&i!=="mysql"&&i!=="dataobject");)u=u?u+"."+i:i,p++;u&&g.push(u)}l=g}for(let g=0;g<l.length;g++){let p=_;_=_.length===0?l[g]:_.replaceAll(".","/")+"/"+l[g],r[_]||(r[_]=!0,b.push({id:_,label:l[g],parentId:p||"/"}))}}return b},o=t=>{const r=t.filePath.substring(t.filePath.lastIndexOf(".")+1);return x.highlight(r,t.code||"",!0).value||"&nbsp;"};return de(async()=>{x.registerLanguage("java",U),x.registerLanguage("xml",U),x.registerLanguage("html",U),x.registerLanguage("vue",U),x.registerLanguage("javascript",je),x.registerLanguage("sql",$e),x.registerLanguage("typescript",Be)}),(t,r)=>{const b=ve,d=Ee,l=ke,_=Ae,g=we,p=Ne,i=Se,u=xe,I=ge("dompurify-html");return L(),P(i,{modelValue:w(v),"onUpdate:modelValue":r[1]||(r[1]=f=>he(v)?v.value=f:null),"align-center":"",class:"app-infra-codegen-preview-container",title:"\u4EE3\u7801\u9884\u89C8",width:"80%"},{default:N(()=>[V("div",Le,[J((L(),P(l,{gutter:12,class:"w-1/3","element-loading-text":"\u751F\u6210\u6587\u4EF6\u76EE\u5F55\u4E2D...",shadow:"hover"},{default:N(()=>[Z(d,{height:"calc(100vh - 88px - 40px)"},{default:N(()=>[Z(b,{ref:"treeRef",data:w(s).fileTree,"expand-on-click-node":!1,"default-expand-all":"","highlight-current":"","node-key":"id",onNodeClick:m},null,8,["data"])]),_:1})]),_:1})),[[u,w(c)]]),J((L(),P(l,{gutter:12,class:"ml-3 w-2/3","element-loading-text":"\u52A0\u8F7D\u4EE3\u7801\u4E2D...",shadow:"hover"},{default:N(()=>[Z(p,{modelValue:w(s).activeName,"onUpdate:modelValue":r[0]||(r[0]=f=>w(s).activeName=f)},{default:N(()=>[(L(!0),me(be,null,_e(w(y),f=>(L(),P(g,{key:f.filePath,label:f.filePath.substring(f.filePath.lastIndexOf("/")+1),name:f.filePath},{default:N(()=>[Z(_,{class:"float-right",text:"",type:"primary",onClick:D=>(async T=>{const{copy:S,copied:M,isSupported:j}=ye({source:T});j?(await S(),w(M)&&E.success(n("common.copySuccess"))):E.error(n("common.copyError"))})(f.code)},{default:N(()=>[pe(fe(w(n)("common.copy")),1)]),_:2},1032,["onClick"]),Z(d,{height:"600px"},{default:N(()=>[V("pre",null,[J(V("code",Ze,null,512),[[I,o(f)]])])]),_:2},1024)]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])]),_:1})),[[u,w(c)]])])]),_:1},8,["modelValue"])}}});export{De as _};