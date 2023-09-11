"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[97920],{42027:(e,t,a)=>{a.r(t),a.d(t,{default:()=>A});var r=a(67294),n=a(52263),l=a(46375),s=a(35742),c=a(39960),o=a(95999);const u=["zero","one","two","few","many","other"];function m(e){return u.filter((t=>e.includes(t)))}const h={locale:"en",pluralForms:m(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:m(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),h}}),[e])}function p(){const e=i();return{selectMessage:(t,a)=>function(e,t,a){const r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const n=a.select(t),l=a.pluralForms.indexOf(n);return r[Math.min(l,r.length-1)]}(a,t,e)}}var d=a(86010),g=a(76775),f=a(10412);const y=function(){const e=(0,g.k6)(),t=(0,g.TH)(),{siteConfig:{baseUrl:a}}=(0,n.Z)(),r=f.Z.canUseDOM?new URLSearchParams(t.search):null,l=(null==r?void 0:r.get("q"))||"",s=(null==r?void 0:r.get("ctx"))||"",c=(null==r?void 0:r.get("version"))||"",o=e=>{const a=new URLSearchParams(t.search);return e?a.set("q",e):a.delete("q"),a};return{searchValue:l,searchContext:s,searchVersion:c,updateSearchPath:t=>{const a=o(t);e.replace({search:a.toString()})},updateSearchContext:a=>{const r=new URLSearchParams(t.search);r.set("ctx",a),e.replace({search:r.toString()})},generateSearchPageLink:e=>{const t=o(e);return`${a}search?${t.toString()}`}}};var E=a(90022),S=a(98202),v=a(82539),w=a(10726),x=a(91073),C=a(80311),_=a(73926),I=a(61029);const P="searchContextInput_mXoe",b="searchQueryInput_CFBF",k="searchResultItem_U687",F="searchResultItemPath_uIbk",R="searchResultItemSummary_oZHr",$="searchQueryColumn_q7nx",Z="searchContextColumn_oWAF";function N(){const{siteConfig:{baseUrl:e}}=(0,n.Z)(),{selectMessage:t}=p(),{searchValue:a,searchContext:l,searchVersion:c,updateSearchPath:u,updateSearchContext:m}=y(),[h,i]=(0,r.useState)(a),[g,f]=(0,r.useState)(),[v,w]=(0,r.useState)(),x=`${e}${c}`,_=(0,r.useMemo)((()=>h?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:h}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[h]);(0,r.useEffect)((()=>{u(h),g&&(h?g(h,(e=>{w(e)})):w(void 0))}),[h,g]);const k=(0,r.useCallback)((e=>{i(e.target.value)}),[]);return(0,r.useEffect)((()=>{a&&a!==h&&i(a)}),[a]),(0,r.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,E.w)(x,l);f((()=>(0,S.v)(e,t,100)))}()}),[l,x]),r.createElement(r.Fragment,null,r.createElement(s.Z,null,r.createElement("meta",{property:"robots",content:"noindex, follow"}),r.createElement("title",null,_)),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("h1",null,_),r.createElement("div",{className:"row"},r.createElement("div",{className:(0,d.Z)("col",{[$]:Array.isArray(I.Kc),"col--9":Array.isArray(I.Kc),"col--12":!Array.isArray(I.Kc)})},r.createElement("input",{type:"search",name:"q",className:b,"aria-label":"Search",onChange:k,value:h,autoComplete:"off",autoFocus:!0})),Array.isArray(I.Kc)?r.createElement("div",{className:(0,d.Z)("col","col--3","padding-left--none",Z)},r.createElement("select",{name:"search-context",className:P,id:"context-selector",value:l,onChange:e=>m(e.target.value)},r.createElement("option",{value:""},I.pQ?(0,o.I)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"}):""),I.Kc.map((e=>r.createElement("option",{key:e,value:e},e))))):null),!g&&h&&r.createElement("div",null,r.createElement(C.Z,null)),v&&(v.length>0?r.createElement("p",null,t(v.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:v.length}))):r.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),r.createElement("section",null,v&&v.map((e=>r.createElement(q,{key:e.document.i,searchResult:e}))))))}function q(e){let{searchResult:{document:t,type:a,page:n,tokens:l,metadata:s}}=e;const o=0===a,u=2===a,m=(o?t.b:n.b).slice(),h=u?t.s:t.t;o||m.push(n.t);let i="";if(I.vc&&l.length>0){const e=new URLSearchParams;for(const t of l)e.append("_highlight",t);i=`?${e.toString()}`}return r.createElement("article",{className:k},r.createElement("h2",null,r.createElement(c.Z,{to:t.u+i+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,v.C)(h,l):(0,w.o)(h,(0,x.m)(s,"t"),l,100)}})),m.length>0&&r.createElement("p",{className:F},(0,_.e)(m)),u&&r.createElement("p",{className:R,dangerouslySetInnerHTML:{__html:(0,w.o)(t.t,(0,x.m)(s,"t"),l,100)}}))}const A=function(){return r.createElement(l.Z,null,r.createElement(N,null))}}}]);