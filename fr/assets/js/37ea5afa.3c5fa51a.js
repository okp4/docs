"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[33150],{3905:(t,e,n)=>{n.d(e,{Zo:()=>f,kt:()=>u});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},f=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,f=l(t,["components","mdxType","originalType","parentName"]),s=c(n),u=a,d=s["".concat(p,".").concat(u)]||s[u]||m[u]||o;return n?r.createElement(d,i(i({ref:e},f),{},{components:n})):r.createElement(d,i({ref:e},f))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},71166:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},i="Turtle Schema",l={unversionedId:"okp4-cognitarium-executemsg-definitions-dataformat-oneof-turtle",id:"version-v2.0.0/okp4-cognitarium-executemsg-definitions-dataformat-oneof-turtle",title:"Turtle Schema",description:"Output in Turtle format.",source:"@site/contracts_versioned_docs/version-v2.0.0/okp4-cognitarium-executemsg-definitions-dataformat-oneof-turtle.md",sourceDirName:".",slug:"/okp4-cognitarium-executemsg-definitions-dataformat-oneof-turtle",permalink:"/fr/contracts/v2.0.0/okp4-cognitarium-executemsg-definitions-dataformat-oneof-turtle",draft:!1,tags:[],version:"v2.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"RDF XML Schema",permalink:"/fr/contracts/v2.0.0/okp4-cognitarium-executemsg-definitions-dataformat-oneof-rdf-xml"},next:{title:"DataFormat Schema",permalink:"/fr/contracts/v2.0.0/okp4-cognitarium-executemsg-definitions-dataformat"}},p={},c=[{value:"1 Type",id:"1-type",level:2},{value:"1 Constraints",id:"1-constraints",level:2}],f={toc:c};function m(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,r.Z)({},f,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"turtle-schema"},"Turtle Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/execute/definitions/DataFormat/oneOf/1\n")),(0,a.kt)("p",null,"Output in ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/turtle/"},"Turtle")," format."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,a.kt)("td",{parentName:"tr",align:"left"},"No"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Unknown identifiability"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Allowed"),(0,a.kt)("td",{parentName:"tr",align:"left"},"none"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{target:"_blank",href:n(26730).Z,title:"open original schema"},"okp4-cognitarium.json*"))))),(0,a.kt)("h2",{id:"1-type"},"1 Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"string")," (",(0,a.kt)("a",{parentName:"p",href:"/fr/contracts/v2.0.0/okp4-cognitarium-executemsg-definitions-dataformat-oneof-turtle"},"Turtle"),")"),(0,a.kt)("h2",{id:"1-constraints"},"1 Constraints"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"enum"),": the value of this property must be equal to one of the following values:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Explanation"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},'"turtle"')),(0,a.kt)("td",{parentName:"tr",align:"left"})))))}m.isMDXComponent=!0},26730:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/files/okp4-cognitarium-8b047f6626171599919daf0f24fc304f.json"}}]);