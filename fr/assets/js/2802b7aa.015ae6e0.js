"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[57164],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(a),f=r,u=h["".concat(l,".").concat(f)]||h[f]||m[f]||o;return a?n.createElement(u,i(i({ref:t},c),{},{components:a})):n.createElement(u,i({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},19766:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={},i="SHA1 Schema",s={unversionedId:"okp4-objectarium-responses-bucketresponse-definitions-hashalgorithm-oneof-sha1",id:"version-v2.1.0/okp4-objectarium-responses-bucketresponse-definitions-hashalgorithm-oneof-sha1",title:"SHA1 Schema",description:"Represents the SHA-224 algorithm. SHA-224 is a variant of the SHA-2 family of hash functions that produces a 224-bit hash value. It is similar to SHA-256, but with a shorter output size. The computational cost of SHA-224 is moderate, and its relatively short hash length makes it easier to store and transmit.",source:"@site/contracts_versioned_docs/version-v2.1.0/okp4-objectarium-responses-bucketresponse-definitions-hashalgorithm-oneof-sha1.md",sourceDirName:".",slug:"/okp4-objectarium-responses-bucketresponse-definitions-hashalgorithm-oneof-sha1",permalink:"/fr/contracts/okp4-objectarium-responses-bucketresponse-definitions-hashalgorithm-oneof-sha1",draft:!1,tags:[],version:"v2.1.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"MD5 Schema",permalink:"/fr/contracts/okp4-objectarium-responses-bucketresponse-definitions-hashalgorithm-oneof-md5"},next:{title:"SHA256 Schema",permalink:"/fr/contracts/okp4-objectarium-responses-bucketresponse-definitions-hashalgorithm-oneof-sha256"}},l={},p=[{value:"1 Type",id:"1-type",level:2},{value:"1 Constraints",id:"1-constraints",level:2}],c={toc:p};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sha1-schema"},"SHA1 Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/responses/bucket/definitions/HashAlgorithm/oneOf/1\n")),(0,r.kt)("p",null,"Represents the SHA-224 algorithm. SHA-224 is a variant of the SHA-2 family of hash functions that produces a 224-bit hash value. It is similar to SHA-256, but with a shorter output size. The computational cost of SHA-224 is moderate, and its relatively short hash length makes it easier to store and transmit."),(0,r.kt)("p",null,"SHA-224 hashes are stored on-chain as 56 hexadecimal characters."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SHA-2"},"the SHA-2 Wikipedia page")," for more information."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unknown identifiability"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Allowed"),(0,r.kt)("td",{parentName:"tr",align:"left"},"none"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{target:"_blank",href:a(9819).Z,title:"open original schema"},"okp4-objectarium.json*"))))),(0,r.kt)("h2",{id:"1-type"},"1 Type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")," (",(0,r.kt)("a",{parentName:"p",href:"/fr/contracts/okp4-objectarium-responses-bucketresponse-definitions-hashalgorithm-oneof-sha1"},"SHA1"),")"),(0,r.kt)("h2",{id:"1-constraints"},"1 Constraints"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"enum"),": the value of this property must be equal to one of the following values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Explanation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"sha224"')),(0,r.kt)("td",{parentName:"tr",align:"left"})))))}m.isMDXComponent=!0},9819:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/okp4-objectarium-eada0cda6e11102840a1c57adfa7132e.json"}}]);