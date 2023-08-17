"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[76133],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(n),u=r,m=f["".concat(l,".").concat(u)]||f[u]||h[u]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},69363:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={},i="SHA384 Schema",s={unversionedId:"okp4-objectarium-responses-bucketresponse-definitions-hashalgorithm-oneof-sha384",id:"version-v2.0.0/okp4-objectarium-responses-bucketresponse-definitions-hashalgorithm-oneof-sha384",title:"SHA384 Schema",description:"Represents the SHA-384 algorithm. SHA-384 is a variant of the SHA-2 family of hash functions that produces a 384-bit hash value. It is similar to SHA-512, but with a shorter output size. The computational cost of SHA-384 is relatively high, but its longer hash length provides better security against hash collisions.",source:"@site/contracts_versioned_docs/version-v2.0.0/okp4-objectarium-responses-bucketresponse-definitions-hashalgorithm-oneof-sha384.md",sourceDirName:".",slug:"/okp4-objectarium-responses-bucketresponse-definitions-hashalgorithm-oneof-sha384",permalink:"/fr/contracts/v2.0.0/okp4-objectarium-responses-bucketresponse-definitions-hashalgorithm-oneof-sha384",draft:!1,tags:[],version:"v2.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"SHA256 Schema",permalink:"/fr/contracts/v2.0.0/okp4-objectarium-responses-bucketresponse-definitions-hashalgorithm-oneof-sha256"},next:{title:"SHA512 Schema",permalink:"/fr/contracts/v2.0.0/okp4-objectarium-responses-bucketresponse-definitions-hashalgorithm-oneof-sha512"}},l={},p=[{value:"3 Type",id:"3-type",level:2},{value:"3 Constraints",id:"3-constraints",level:2}],c={toc:p};function h(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sha384-schema"},"SHA384 Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/responses/bucket/definitions/HashAlgorithm/oneOf/3\n")),(0,r.kt)("p",null,"Represents the SHA-384 algorithm. SHA-384 is a variant of the SHA-2 family of hash functions that produces a 384-bit hash value. It is similar to SHA-512, but with a shorter output size. The computational cost of SHA-384 is relatively high, but its longer hash length provides better security against hash collisions."),(0,r.kt)("p",null,"SHA-384 hashes are stored on-chain as 96 hexadecimal characters."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SHA-2"},"the SHA-2 Wikipedia page")," for more information."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unknown identifiability"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Allowed"),(0,r.kt)("td",{parentName:"tr",align:"left"},"none"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{target:"_blank",href:n(77839).Z,title:"open original schema"},"okp4-objectarium.json*"))))),(0,r.kt)("h2",{id:"3-type"},"3 Type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")," (",(0,r.kt)("a",{parentName:"p",href:"/fr/contracts/v2.0.0/okp4-objectarium-responses-bucketresponse-definitions-hashalgorithm-oneof-sha384"},"SHA384"),")"),(0,r.kt)("h2",{id:"3-constraints"},"3 Constraints"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"enum"),": the value of this property must be equal to one of the following values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Explanation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"sha384"')),(0,r.kt)("td",{parentName:"tr",align:"left"})))))}h.isMDXComponent=!0},77839:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/okp4-objectarium-289208c92e0639b047130ca484754519.json"}}]);