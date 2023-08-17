"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[66755],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,u=f["".concat(p,".").concat(d)]||f[d]||m[d]||a;return n?r.createElement(u,i(i({ref:t},l),{},{components:n})):r.createElement(u,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},33423:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={},i="Untitled undefined type in okp4-objectarium Schema",s={unversionedId:"okp4-objectarium-responses-bucketresponse-definitions-compressionalgorithm",id:"version-v2.1.0/okp4-objectarium-responses-bucketresponse-definitions-compressionalgorithm",title:"Untitled undefined type in okp4-objectarium Schema",description:"CompressionAlgorithm is an enumeration that defines the different compression algorithms supported for compressing the content of objects. The compression algorithm specified here are relevant algorithms for compressing data on-chain, which means that they are fast to compress and decompress, and have a low computational cost.",source:"@site/contracts_versioned_docs/version-v2.1.0/okp4-objectarium-responses-bucketresponse-definitions-compressionalgorithm.md",sourceDirName:".",slug:"/okp4-objectarium-responses-bucketresponse-definitions-compressionalgorithm",permalink:"/fr/contracts/okp4-objectarium-responses-bucketresponse-definitions-compressionalgorithm",draft:!1,tags:[],version:"v2.1.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Snappy Schema",permalink:"/fr/contracts/okp4-objectarium-responses-bucketresponse-definitions-compressionalgorithm-oneof-snappy"},next:{title:"MD5 Schema",permalink:"/fr/contracts/okp4-objectarium-responses-bucketresponse-definitions-hashalgorithm-oneof-md5"}},p={},c=[{value:"CompressionAlgorithm Type",id:"compressionalgorithm-type",level:2}],l={toc:c};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"untitled-undefined-type-in-okp4-objectarium-schema"},"Untitled undefined type in okp4-objectarium Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/responses/bucket/definitions/CompressionAlgorithm\n")),(0,o.kt)("p",null,"CompressionAlgorithm is an enumeration that defines the different compression algorithms supported for compressing the content of objects. The compression algorithm specified here are relevant algorithms for compressing data on-chain, which means that they are fast to compress and decompress, and have a low computational cost."),(0,o.kt)("p",null,"The order of the compression algorithms is based on their estimated computational cost (quite opinionated) during both compression and decompression, ranging from the lowest to the highest. This particular order is utilized to establish the default compression algorithm for storing an object."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,o.kt)("td",{parentName:"tr",align:"left"},"No"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Unknown identifiability"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Allowed"),(0,o.kt)("td",{parentName:"tr",align:"left"},"none"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{target:"_blank",href:n(9819).Z,title:"open original schema"},"okp4-objectarium.json*"))))),(0,o.kt)("h2",{id:"compressionalgorithm-type"},"CompressionAlgorithm Type"),(0,o.kt)("p",null,"merged type (",(0,o.kt)("a",{parentName:"p",href:"/fr/contracts/okp4-objectarium-responses-bucketresponse-definitions-compressionalgorithm"},"Details"),")"),(0,o.kt)("p",null,"one (and only one) of"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/fr/contracts/okp4-objectarium-responses-bucketresponse-definitions-compressionalgorithm-oneof-passthrough",title:"check type definition"},"Passthrough"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/fr/contracts/okp4-objectarium-responses-bucketresponse-definitions-compressionalgorithm-oneof-snappy",title:"check type definition"},"Snappy")))))}m.isMDXComponent=!0},9819:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/okp4-objectarium-eada0cda6e11102840a1c57adfa7132e.json"}}]);