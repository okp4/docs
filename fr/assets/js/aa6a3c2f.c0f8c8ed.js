"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[85673],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),p=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),m=p(a),f=r,u=m["".concat(l,".").concat(f)]||m[f]||h[f]||i;return a?n.createElement(u,o(o({ref:e},c),{},{components:a})):n.createElement(u,o({ref:e},c))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},61409:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={},o="SHA384 Schema",s={unversionedId:"okp4-objectarium-instantiatemsg-definitions-hashalgorithm-oneof-sha384",id:"version-v2.1.0/okp4-objectarium-instantiatemsg-definitions-hashalgorithm-oneof-sha384",title:"SHA384 Schema",description:"Represents the SHA-384 algorithm. SHA-384 is a variant of the SHA-2 family of hash functions that produces a 384-bit hash value. It is similar to SHA-512, but with a shorter output size. The computational cost of SHA-384 is relatively high, but its longer hash length provides better security against hash collisions.",source:"@site/contracts_versioned_docs/version-v2.1.0/okp4-objectarium-instantiatemsg-definitions-hashalgorithm-oneof-sha384.md",sourceDirName:".",slug:"/okp4-objectarium-instantiatemsg-definitions-hashalgorithm-oneof-sha384",permalink:"/fr/contracts/okp4-objectarium-instantiatemsg-definitions-hashalgorithm-oneof-sha384",draft:!1,tags:[],version:"v2.1.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"SHA256 Schema",permalink:"/fr/contracts/okp4-objectarium-instantiatemsg-definitions-hashalgorithm-oneof-sha256"},next:{title:"SHA512 Schema",permalink:"/fr/contracts/okp4-objectarium-instantiatemsg-definitions-hashalgorithm-oneof-sha512"}},l={},p=[{value:"3 Type",id:"3-type",level:2},{value:"3 Constraints",id:"3-constraints",level:2}],c={toc:p};function h(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sha384-schema"},"SHA384 Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/instantiate/definitions/HashAlgorithm/oneOf/3\n")),(0,r.kt)("p",null,"Represents the SHA-384 algorithm. SHA-384 is a variant of the SHA-2 family of hash functions that produces a 384-bit hash value. It is similar to SHA-512, but with a shorter output size. The computational cost of SHA-384 is relatively high, but its longer hash length provides better security against hash collisions."),(0,r.kt)("p",null,"SHA-384 hashes are stored on-chain as 96 hexadecimal characters."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SHA-2"},"the SHA-2 Wikipedia page")," for more information."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unknown identifiability"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Allowed"),(0,r.kt)("td",{parentName:"tr",align:"left"},"none"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{target:"_blank",href:a(9819).Z,title:"open original schema"},"okp4-objectarium.json*"))))),(0,r.kt)("h2",{id:"3-type"},"3 Type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")," (",(0,r.kt)("a",{parentName:"p",href:"/fr/contracts/okp4-objectarium-instantiatemsg-definitions-hashalgorithm-oneof-sha384"},"SHA384"),")"),(0,r.kt)("h2",{id:"3-constraints"},"3 Constraints"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"enum"),": the value of this property must be equal to one of the following values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Explanation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"sha384"')),(0,r.kt)("td",{parentName:"tr",align:"left"})))))}h.isMDXComponent=!0},9819:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/files/okp4-objectarium-eada0cda6e11102840a1c57adfa7132e.json"}}]);