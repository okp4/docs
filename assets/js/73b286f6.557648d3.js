"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[35018],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),c=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),f=c(a),u=r,d=f["".concat(p,".").concat(u)]||f[u]||s[u]||i;return a?n.createElement(d,o(o({ref:e},m),{},{components:a})):n.createElement(d,o({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=f;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},35087:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={},o="DataFormat Schema",l={unversionedId:"okp4-cognitarium-executemsg-definitions-dataformat",id:"version-v2.0.0/okp4-cognitarium-executemsg-definitions-dataformat",title:"DataFormat Schema",description:"Represents the format in which the data are serialized, for example when returned by a query or when inserted in the store.",source:"@site/contracts_versioned_docs/version-v2.0.0/okp4-cognitarium-executemsg-definitions-dataformat.md",sourceDirName:".",slug:"/okp4-cognitarium-executemsg-definitions-dataformat",permalink:"/contracts/v2.0.0/okp4-cognitarium-executemsg-definitions-dataformat",draft:!1,tags:[],version:"v2.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Turtle Schema",permalink:"/contracts/v2.0.0/okp4-cognitarium-executemsg-definitions-dataformat-oneof-turtle"},next:{title:"Untitled string in okp4-cognitarium Schema",permalink:"/contracts/v2.0.0/okp4-cognitarium-executemsg-definitions-iri-oneof-full-properties-full"}},p={},c=[{value:"DataFormat Type",id:"dataformat-type",level:2}],m={toc:c};function s(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dataformat-schema"},"DataFormat Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/execute/definitions/DataFormat\n")),(0,r.kt)("p",null,"Represents the format in which the data are serialized, for example when returned by a query or when inserted in the store."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unknown identifiability"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Allowed"),(0,r.kt)("td",{parentName:"tr",align:"left"},"none"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{target:"_blank",href:a(26730).Z,title:"open original schema"},"okp4-cognitarium.json*"))))),(0,r.kt)("h2",{id:"dataformat-type"},"DataFormat Type"),(0,r.kt)("p",null,"merged type (",(0,r.kt)("a",{parentName:"p",href:"/contracts/v2.0.0/okp4-cognitarium-executemsg-definitions-dataformat"},"DataFormat"),")"),(0,r.kt)("p",null,"one (and only one) of"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/contracts/v2.0.0/okp4-cognitarium-executemsg-definitions-dataformat-oneof-rdf-xml",title:"check type definition"},"RDF XML"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/contracts/v2.0.0/okp4-cognitarium-executemsg-definitions-dataformat-oneof-turtle",title:"check type definition"},"Turtle"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/contracts/v2.0.0/okp4-cognitarium-executemsg-definitions-dataformat-oneof-n-triples",title:"check type definition"},"N-Triples"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/contracts/v2.0.0/okp4-cognitarium-executemsg-definitions-dataformat-oneof-n-quads",title:"check type definition"},"N-Quads")))))}s.isMDXComponent=!0},26730:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/files/okp4-cognitarium-8b047f6626171599919daf0f24fc304f.json"}}]);