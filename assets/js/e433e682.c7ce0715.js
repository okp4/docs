"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[96282],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),f=c(n),u=r,h=f["".concat(l,".").concat(u)]||f[u]||m[u]||i;return n?a.createElement(h,o(o({ref:e},p),{},{components:n})):a.createElement(h,o({ref:e},p))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},40577:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={},l="SHA256 Schema",c={unversionedId:"okp4-objectarium-instantiatemsg-definitions-hashalgorithm-oneof-sha256",id:"version-v2.1.0/okp4-objectarium-instantiatemsg-definitions-hashalgorithm-oneof-sha256",title:"SHA256 Schema",description:"Represents the SHA-256 algorithm. SHA-256 is a member of the SHA-2 family of hash functions that produces a 256-bit hash value. It is widely used in cryptography and other security-related applications. The computational cost of SHA-256 is moderate, and its hash length strikes a good balance between security and convenience.",source:"@site/contracts_versioned_docs/version-v2.1.0/okp4-objectarium-instantiatemsg-definitions-hashalgorithm-oneof-sha256.md",sourceDirName:".",slug:"/okp4-objectarium-instantiatemsg-definitions-hashalgorithm-oneof-sha256",permalink:"/contracts/okp4-objectarium-instantiatemsg-definitions-hashalgorithm-oneof-sha256",draft:!1,tags:[],version:"v2.1.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"SHA1 Schema",permalink:"/contracts/okp4-objectarium-instantiatemsg-definitions-hashalgorithm-oneof-sha1"},next:{title:"SHA384 Schema",permalink:"/contracts/okp4-objectarium-instantiatemsg-definitions-hashalgorithm-oneof-sha384"}},p={},m=[{value:"2 Type",id:"2-type",level:2},{value:"2 Constraints",id:"2-constraints",level:2}],f={toc:m};function u(t){var e=t.components,s=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},f,s,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sha256-schema"},"SHA256 Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/instantiate/definitions/HashAlgorithm/oneOf/2\n")),(0,i.kt)("p",null,"Represents the SHA-256 algorithm. SHA-256 is a member of the SHA-2 family of hash functions that produces a 256-bit hash value. It is widely used in cryptography and other security-related applications. The computational cost of SHA-256 is moderate, and its hash length strikes a good balance between security and convenience."),(0,i.kt)("p",null,"SHA-256 hashes are stored on-chain as 64 hexadecimal characters."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SHA-2"},"the SHA-2 Wikipedia page")," for more information."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Unknown identifiability"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Allowed"),(0,i.kt)("td",{parentName:"tr",align:"left"},"none"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{target:"_blank",href:n(9819).Z,title:"open original schema"},"okp4-objectarium.json*"))))),(0,i.kt)("h2",{id:"2-type"},"2 Type"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")," (",(0,i.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-instantiatemsg-definitions-hashalgorithm-oneof-sha256"},"SHA256"),")"),(0,i.kt)("h2",{id:"2-constraints"},"2 Constraints"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"enum"),": the value of this property must be equal to one of the following values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Explanation"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"sha256"')),(0,i.kt)("td",{parentName:"tr",align:"left"})))))}u.isMDXComponent=!0},9819:function(t,e,n){e.Z=n.p+"assets/files/okp4-objectarium-eada0cda6e11102840a1c57adfa7132e.json"}}]);