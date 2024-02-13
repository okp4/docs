(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[42594],{94285:(e,t,n)=>{"use strict";n.d(t,{Z:()=>H});var o=n(67294),s=n(72389),c=n(90512),r=n(66412),a=n(35281),l=n(87594),i=n.n(l);const u=/title=(?<quote>["'])(?<title>.*?)\1/,d=/\{(?<range>[\d,-]+)\}/,m={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},p={...m,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},b=Object.keys(m);function f(e,t){const n=e.map((e=>{const{start:n,end:o}=p[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function h(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:s,metastring:c}=t;if(c&&d.test(c)){const e=c.match(d).groups.range;if(0===s.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${c}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=s[0].className,o=i()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const r=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return f(["js","jsBlock"],t);case"jsx":case"tsx":return f(["js","jsBlock","jsx"],t);case"html":return f(["js","jsBlock","html"],t);case"python":case"py":case"bash":return f(["bash"],t);case"markdown":case"md":return f(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return f(["tex"],t);case"lua":case"haskell":case"sql":return f(["lua"],t);case"wasm":return f(["wasm"],t);case"vb":case"vba":case"visual-basic":return f(["vb","rem"],t);case"vbnet":return f(["vbnet","rem"],t);case"batch":return f(["rem"],t);case"basic":return f(["rem","f90"],t);case"fsharp":return f(["js","ml"],t);case"ocaml":case"sml":return f(["ml"],t);case"fortran":return f(["f90"],t);case"cobol":return f(["cobol"],t);default:return f(b,t)}}(o,s),a=n.split("\n"),l=Object.fromEntries(s.map((e=>[e.className,{start:0,range:""}]))),u=Object.fromEntries(s.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),m=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),p=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let i=0;i<a.length;){const e=a[i].match(r);if(!e){i+=1;continue}const t=e.slice(1).find((e=>void 0!==e));u[t]?l[u[t]].range+=`${i},`:m[t]?l[m[t]].start=i:p[t]&&(l[p[t]].range+=`${l[p[t]].start}-${i-1},`),a.splice(i,1)}n=a.join("\n");const h={};return Object.entries(l).forEach((e=>{let[t,{range:n}]=e;i()(n).forEach((e=>{h[e]??=[],h[e].push(t)}))})),{lineClassNames:h,code:n}}const g={codeBlockContainer:"codeBlockContainer_Ckt0"};var k=n(85893);function x(e){let{as:t,...n}=e;const o=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,s]=e;const c=t[o];c&&"string"==typeof s&&(n[c]=s)})),n}((0,r.p)());return(0,k.jsx)(t,{...n,style:o,className:(0,c.Z)(n.className,g.codeBlockContainer,a.k.common.codeBlock)})}const B={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function j(e){let{children:t,className:n}=e;return(0,k.jsx)(x,{as:"pre",tabIndex:0,className:(0,c.Z)(B.codeBlockStandalone,"thin-scrollbar",n),children:(0,k.jsx)("code",{className:B.codeBlockLines,children:t})})}var y=n(86668),v=n(902);const C={attributes:!0,characterData:!0,childList:!0,subtree:!0};function N(e,t){const[n,s]=(0,o.useState)(),c=(0,o.useCallback)((()=>{s(e.current?.closest("[role=tabpanel][hidden]"))}),[e,s]);(0,o.useEffect)((()=>{c()}),[c]),function(e,t,n){void 0===n&&(n=C);const s=(0,v.zX)(t),c=(0,v.Ql)(n);(0,o.useEffect)((()=>{const t=new MutationObserver(s);return e&&t.observe(e,c),()=>t.disconnect()}),[e,s,c])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var w=n(42573);const L={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function E(e){let{line:t,classNames:n,showLineNumbers:o,getLineProps:s,getTokenProps:r}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const a=s({line:t,className:(0,c.Z)(n,o&&L.codeLine)}),l=t.map(((e,t)=>(0,k.jsx)("span",{...r({token:e,key:t})},t)));return(0,k.jsxs)("span",{...a,children:[o?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("span",{className:L.codeLineNumber}),(0,k.jsx)("span",{className:L.codeLineContent,children:l})]}):l,(0,k.jsx)("br",{})]})}var _=n(95999);function I(e){return(0,k.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,k.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function S(e){return(0,k.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,k.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const A={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function T(e){let{code:t,className:n}=e;const[s,r]=(0,o.useState)(!1),a=(0,o.useRef)(void 0),l=(0,o.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const o=document.createElement("textarea"),s=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const c=document.getSelection(),r=c.rangeCount>0&&c.getRangeAt(0);n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch{}o.remove(),r&&(c.removeAllRanges(),c.addRange(r)),s&&s.focus()}(t),r(!0),a.current=window.setTimeout((()=>{r(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(a.current)),[]),(0,k.jsx)("button",{type:"button","aria-label":s?(0,_.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,_.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,_.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,c.Z)("clean-btn",n,A.copyButton,s&&A.copyButtonCopied),onClick:l,children:(0,k.jsxs)("span",{className:A.copyButtonIcons,"aria-hidden":"true",children:[(0,k.jsx)(I,{className:A.copyButtonIcon}),(0,k.jsx)(S,{className:A.copyButtonSuccessIcon})]})})}function $(e){return(0,k.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,k.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const W={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function M(e){let{className:t,onClick:n,isEnabled:o}=e;const s=(0,_.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,k.jsx)("button",{type:"button",onClick:n,className:(0,c.Z)("clean-btn",t,o&&W.wordWrapButtonEnabled),"aria-label":s,title:s,children:(0,k.jsx)($,{className:W.wordWrapButtonIcon,"aria-hidden":"true"})})}function Z(e){let{children:t,className:n="",metastring:s,title:a,showLineNumbers:l,language:i}=e;const{prism:{defaultLanguage:d,magicComments:m}}=(0,y.L)(),p=function(e){return e?.toLowerCase()}(i??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??d),b=(0,r.p)(),f=function(){const[e,t]=(0,o.useState)(!1),[n,s]=(0,o.useState)(!1),c=(0,o.useRef)(null),r=(0,o.useCallback)((()=>{const n=c.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[c,e]),a=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=c.current,n=e>t||c.current.querySelector("code").hasAttribute("style");s(n)}),[c]);return N(c,a),(0,o.useEffect)((()=>{a()}),[e,a]),(0,o.useEffect)((()=>(window.addEventListener("resize",a,{passive:!0}),()=>{window.removeEventListener("resize",a)})),[a]),{codeBlockRef:c,isEnabled:e,isCodeScrollable:n,toggle:r}}(),g=function(e){return e?.match(u)?.groups.title??""}(s)||a,{lineClassNames:j,code:v}=h(t,{metastring:s,language:p,magicComments:m}),C=l??function(e){return Boolean(e?.includes("showLineNumbers"))}(s);return(0,k.jsxs)(x,{as:"div",className:(0,c.Z)(n,p&&!n.includes(`language-${p}`)&&`language-${p}`),children:[g&&(0,k.jsx)("div",{className:B.codeBlockTitle,children:g}),(0,k.jsxs)("div",{className:B.codeBlockContent,children:[(0,k.jsx)(w.y$,{theme:b,code:v,language:p??"text",children:e=>{let{className:t,style:n,tokens:o,getLineProps:s,getTokenProps:r}=e;return(0,k.jsx)("pre",{tabIndex:0,ref:f.codeBlockRef,className:(0,c.Z)(t,B.codeBlock,"thin-scrollbar"),style:n,children:(0,k.jsx)("code",{className:(0,c.Z)(B.codeBlockLines,C&&B.codeBlockLinesWithNumbering),children:o.map(((e,t)=>(0,k.jsx)(E,{line:e,getLineProps:s,getTokenProps:r,classNames:j[t],showLineNumbers:C},t)))})})}}),(0,k.jsxs)("div",{className:B.buttonGroup,children:[(f.isEnabled||f.isCodeScrollable)&&(0,k.jsx)(M,{className:B.codeButton,onClick:()=>f.toggle(),isEnabled:f.isEnabled}),(0,k.jsx)(T,{className:B.codeButton,code:v})]})]})]})}function H(e){let{children:t,...n}=e;const c=(0,s.Z)(),r=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),a="string"==typeof r?Z:j;return(0,k.jsx)(a,{...n,children:r},String(c))}},66412:(e,t,n)=>{"use strict";n.d(t,{p:()=>c});var o=n(92949),s=n(86668);function c(){const{prism:e}=(0,s.L)(),{colorMode:t}=(0,o.I)(),n=e.theme,c=e.darkTheme||n;return"dark"===t?c:n}},87594:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,s,c]=t;if(o&&c){o=parseInt(o),c=parseInt(c);const e=o<c?1:-1;"-"!==s&&".."!==s&&"\u2025"!==s||(c+=e);for(let t=o;t!==c;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},11151:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a,a:()=>r});var o=n(67294);const s={},c=o.createContext(s);function r(e){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);