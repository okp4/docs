"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[28077],{3905:(t,e,n)=>{n.d(e,{Zo:()=>f,kt:()=>u});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},f=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,f=l(t,["components","mdxType","originalType","parentName"]),c=s(n),u=a,d=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return n?r.createElement(d,o(o({ref:e},f),{},{components:n})):r.createElement(d,o({ref:e},f))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},22861:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={},o="N-Triples Schema",l={unversionedId:"okp4-cognitarium-querymsg-definitions-dataformat-oneof-n-triples",id:"version-v2.0.0/okp4-cognitarium-querymsg-definitions-dataformat-oneof-n-triples",title:"N-Triples Schema",description:"Output in N-Triples format.",source:"@site/contracts_versioned_docs/version-v2.0.0/okp4-cognitarium-querymsg-definitions-dataformat-oneof-n-triples.md",sourceDirName:".",slug:"/okp4-cognitarium-querymsg-definitions-dataformat-oneof-n-triples",permalink:"/fr/contracts/v2.0.0/okp4-cognitarium-querymsg-definitions-dataformat-oneof-n-triples",draft:!1,tags:[],version:"v2.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"N-Quads Schema",permalink:"/fr/contracts/v2.0.0/okp4-cognitarium-querymsg-definitions-dataformat-oneof-n-quads"},next:{title:"RDF XML Schema",permalink:"/fr/contracts/v2.0.0/okp4-cognitarium-querymsg-definitions-dataformat-oneof-rdf-xml"}},p={},s=[{value:"2 Type",id:"2-type",level:2},{value:"2 Constraints",id:"2-constraints",level:2}],f={toc:s};function m(t){let{components:e,...i}=t;return(0,a.kt)("wrapper",(0,r.Z)({},f,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"n-triples-schema"},"N-Triples Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/query/definitions/DataFormat/oneOf/2\n")),(0,a.kt)("p",null,"Output in ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/n-triples/"},"N-Triples")," format."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,a.kt)("td",{parentName:"tr",align:"left"},"No"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Unknown identifiability"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Allowed"),(0,a.kt)("td",{parentName:"tr",align:"left"},"none"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{target:"_blank",href:n(26730).Z,title:"open original schema"},"okp4-cognitarium.json*"))))),(0,a.kt)("h2",{id:"2-type"},"2 Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"string")," (",(0,a.kt)("a",{parentName:"p",href:"/fr/contracts/v2.0.0/okp4-cognitarium-querymsg-definitions-dataformat-oneof-n-triples"},"N-Triples"),")"),(0,a.kt)("h2",{id:"2-constraints"},"2 Constraints"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"enum"),": the value of this property must be equal to one of the following values:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Explanation"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},'"n_triples"')),(0,a.kt)("td",{parentName:"tr",align:"left"})))))}m.isMDXComponent=!0},26730:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/files/okp4-cognitarium-8b047f6626171599919daf0f24fc304f.json"}}]);