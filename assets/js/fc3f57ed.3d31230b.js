"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[19236],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(n),h=a,m=f["".concat(l,".").concat(h)]||f[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},66090:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={},l="SHA512 Schema",p={unversionedId:"okp4-objectarium-responses-bucketresponse-definitions-hashalgorithm-oneof-sha512",id:"version-v2.1.0/okp4-objectarium-responses-bucketresponse-definitions-hashalgorithm-oneof-sha512",title:"SHA512 Schema",description:"Represents the SHA-512 algorithm. SHA-512 is a member of the SHA-2 family of hash functions that produces a 512-bit hash value. It is widely used in cryptography and other security-related applications. The computational cost of SHA-512 is relatively high, but its longer hash length provides better security against hash collisions.",source:"@site/contracts_versioned_docs/version-v2.1.0/okp4-objectarium-responses-bucketresponse-definitions-hashalgorithm-oneof-sha512.md",sourceDirName:".",slug:"/okp4-objectarium-responses-bucketresponse-definitions-hashalgorithm-oneof-sha512",permalink:"/contracts/okp4-objectarium-responses-bucketresponse-definitions-hashalgorithm-oneof-sha512",draft:!1,tags:[],version:"v2.1.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"SHA384 Schema",permalink:"/contracts/okp4-objectarium-responses-bucketresponse-definitions-hashalgorithm-oneof-sha384"},next:{title:"Untitled undefined type in okp4-objectarium Schema",permalink:"/contracts/okp4-objectarium-responses-bucketresponse-definitions-hashalgorithm"}},c={},u=[{value:"4 Type",id:"4-type",level:2},{value:"4 Constraints",id:"4-constraints",level:2}],f={toc:u};function h(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sha512-schema"},"SHA512 Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/responses/bucket/definitions/HashAlgorithm/oneOf/4\n")),(0,o.kt)("p",null,"Represents the SHA-512 algorithm. SHA-512 is a member of the SHA-2 family of hash functions that produces a 512-bit hash value. It is widely used in cryptography and other security-related applications. The computational cost of SHA-512 is relatively high, but its longer hash length provides better security against hash collisions."),(0,o.kt)("p",null,"SHA-512 hashes are stored on-chain as 128 hexadecimal characters."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SHA-2"},"the SHA-2 Wikipedia page")," for more information."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,o.kt)("td",{parentName:"tr",align:"left"},"No"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Unknown identifiability"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Allowed"),(0,o.kt)("td",{parentName:"tr",align:"left"},"none"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{target:"_blank",href:n(9819).Z,title:"open original schema"},"okp4-objectarium.json*"))))),(0,o.kt)("h2",{id:"4-type"},"4 Type"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"string")," (",(0,o.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-responses-bucketresponse-definitions-hashalgorithm-oneof-sha512"},"SHA512"),")"),(0,o.kt)("h2",{id:"4-constraints"},"4 Constraints"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"enum"),": the value of this property must be equal to one of the following values:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Explanation"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},'"sha512"')),(0,o.kt)("td",{parentName:"tr",align:"left"})))))}h.isMDXComponent=!0},9819:function(e,t,n){t.Z=n.p+"assets/files/okp4-objectarium-eada0cda6e11102840a1c57adfa7132e.json"}}]);