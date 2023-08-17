"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[5823],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),h=p(a),f=r,u=h["".concat(s,".").concat(f)]||h[f]||m[f]||i;return a?n.createElement(u,o(o({ref:e},c),{},{components:a})):n.createElement(u,o({ref:e},c))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},41660:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={},o="SHA512 Schema",l={unversionedId:"okp4-objectarium-instantiatemsg-definitions-hashalgorithm-oneof-sha512",id:"version-v2.0.0/okp4-objectarium-instantiatemsg-definitions-hashalgorithm-oneof-sha512",title:"SHA512 Schema",description:"Represents the SHA-512 algorithm. SHA-512 is a member of the SHA-2 family of hash functions that produces a 512-bit hash value. It is widely used in cryptography and other security-related applications. The computational cost of SHA-512 is relatively high, but its longer hash length provides better security against hash collisions.",source:"@site/contracts_versioned_docs/version-v2.0.0/okp4-objectarium-instantiatemsg-definitions-hashalgorithm-oneof-sha512.md",sourceDirName:".",slug:"/okp4-objectarium-instantiatemsg-definitions-hashalgorithm-oneof-sha512",permalink:"/contracts/v2.0.0/okp4-objectarium-instantiatemsg-definitions-hashalgorithm-oneof-sha512",draft:!1,tags:[],version:"v2.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"SHA384 Schema",permalink:"/contracts/v2.0.0/okp4-objectarium-instantiatemsg-definitions-hashalgorithm-oneof-sha384"},next:{title:"Untitled undefined type in okp4-objectarium Schema",permalink:"/contracts/v2.0.0/okp4-objectarium-instantiatemsg-definitions-hashalgorithm"}},s={},p=[{value:"4 Type",id:"4-type",level:2},{value:"4 Constraints",id:"4-constraints",level:2}],c={toc:p};function m(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sha512-schema"},"SHA512 Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/instantiate/definitions/HashAlgorithm/oneOf/4\n")),(0,r.kt)("p",null,"Represents the SHA-512 algorithm. SHA-512 is a member of the SHA-2 family of hash functions that produces a 512-bit hash value. It is widely used in cryptography and other security-related applications. The computational cost of SHA-512 is relatively high, but its longer hash length provides better security against hash collisions."),(0,r.kt)("p",null,"SHA-512 hashes are stored on-chain as 128 hexadecimal characters."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SHA-2"},"the SHA-2 Wikipedia page")," for more information."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unknown identifiability"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Allowed"),(0,r.kt)("td",{parentName:"tr",align:"left"},"none"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{target:"_blank",href:a(77839).Z,title:"open original schema"},"okp4-objectarium.json*"))))),(0,r.kt)("h2",{id:"4-type"},"4 Type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")," (",(0,r.kt)("a",{parentName:"p",href:"/contracts/v2.0.0/okp4-objectarium-instantiatemsg-definitions-hashalgorithm-oneof-sha512"},"SHA512"),")"),(0,r.kt)("h2",{id:"4-constraints"},"4 Constraints"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"enum"),": the value of this property must be equal to one of the following values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Explanation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"sha512"')),(0,r.kt)("td",{parentName:"tr",align:"left"})))))}m.isMDXComponent=!0},77839:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/files/okp4-objectarium-289208c92e0639b047130ca484754519.json"}}]);