"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[93107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,f=u["".concat(l,".").concat(h)]||u[h]||m[h]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},29099:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={},o="Untitled object in okp4-objectarium Schema",s={unversionedId:"okp4-objectarium-responses-bucketresponse-definitions-bucketconfig",id:"version-v2.0.0/okp4-objectarium-responses-bucketresponse-definitions-bucketconfig",title:"Untitled object in okp4-objectarium Schema",description:"BucketConfig is the type of the configuration of a bucket.",source:"@site/contracts_versioned_docs/version-v2.0.0/okp4-objectarium-responses-bucketresponse-definitions-bucketconfig.md",sourceDirName:".",slug:"/okp4-objectarium-responses-bucketresponse-definitions-bucketconfig",permalink:"/fr/contracts/v2.0.0/okp4-objectarium-responses-bucketresponse-definitions-bucketconfig",draft:!1,tags:[],version:"v2.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Untitled undefined type in okp4-objectarium Schema",permalink:"/fr/contracts/v2.0.0/okp4-objectarium-responses-bucketresponse-definitions-bucketconfig-properties-hash_algorithm"},next:{title:"Untitled undefined type in okp4-objectarium Schema",permalink:"/fr/contracts/v2.0.0/okp4-objectarium-responses-bucketresponse-definitions-bucketlimits-properties-max_object_pins-anyof-0"}},l={},p=[{value:"BucketConfig Type",id:"bucketconfig-type",level:2},{value:"accepted_compression_algorithms",id:"accepted_compression_algorithms",level:2},{value:"accepted_compression_algorithms Type",id:"accepted_compression_algorithms-type",level:3},{value:"accepted_compression_algorithms Default Value",id:"accepted_compression_algorithms-default-value",level:3},{value:"hash_algorithm",id:"hash_algorithm",level:2},{value:"hash_algorithm Type",id:"hash_algorithm-type",level:3},{value:"hash_algorithm Default Value",id:"hash_algorithm-default-value",level:3}],c={toc:p};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"untitled-object-in-okp4-objectarium-schema"},"Untitled object in okp4-objectarium Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/responses/bucket/definitions/BucketConfig\n")),(0,r.kt)("p",null,"BucketConfig is the type of the configuration of a bucket."),(0,r.kt)("p",null,"The configuration is set at the instantiation of the bucket, and is immutable and cannot be changed. The configuration is optional and if not set, the default configuration is used."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,r.kt)("td",{parentName:"tr",align:"left"},"none"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{target:"_blank",href:n(77839).Z,title:"open original schema"},"okp4-objectarium.json*"))))),(0,r.kt)("h2",{id:"bucketconfig-type"},"BucketConfig Type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"object")," (",(0,r.kt)("a",{parentName:"p",href:"/fr/contracts/v2.0.0/okp4-objectarium-responses-bucketresponse-definitions-bucketconfig"},"Details"),")"),(0,r.kt)("h1",{id:"bucketconfig-properties"},"BucketConfig Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Nullable"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Defined by"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#accepted_compression_algorithms"},"accepted","_","compression","_","algorithms")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,r.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/fr/contracts/v2.0.0/okp4-objectarium-responses-bucketresponse-definitions-bucketconfig-properties-accepted_compression_algorithms",title:"undefined#/responses/bucket/definitions/BucketConfig/properties/accepted_compression_algorithms"},"okp4-objectarium"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#hash_algorithm"},"hash","_","algorithm")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Merged"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,r.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/fr/contracts/v2.0.0/okp4-objectarium-responses-bucketresponse-definitions-bucketconfig-properties-hash_algorithm",title:"undefined#/responses/bucket/definitions/BucketConfig/properties/hash_algorithm"},"okp4-objectarium"))))),(0,r.kt)("h2",{id:"accepted_compression_algorithms"},"accepted","_","compression","_","algorithms"),(0,r.kt)("p",null,"The acceptable compression algorithms for the objects in the bucket. If this parameter is not set (none or empty array), then all compression algorithms are accepted. If this parameter is set, then only the compression algorithms in the array are accepted."),(0,r.kt)("p",null,"When an object is stored in the bucket without a specified compression algorithm, the first algorithm in the array is used. Therefore, the order of the algorithms in the array is significant. Typically, the most efficient compression algorithm, such as the NoCompression algorithm, should be placed first in the array."),(0,r.kt)("p",null,"Any attempt to store an object using a different compression algorithm than the ones specified here will fail."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"accepted_compression_algorithms")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"is optional")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Type: unknown","[","]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"cannot be null")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"defined in: ",(0,r.kt)("a",{parentName:"p",href:"/fr/contracts/v2.0.0/okp4-objectarium-responses-bucketresponse-definitions-bucketconfig-properties-accepted_compression_algorithms",title:"undefined#/responses/bucket/definitions/BucketConfig/properties/accepted_compression_algorithms"},"okp4-objectarium")))),(0,r.kt)("h3",{id:"accepted_compression_algorithms-type"},"accepted","_","compression","_","algorithms Type"),(0,r.kt)("p",null,"unknown","[","]"),(0,r.kt)("h3",{id:"accepted_compression_algorithms-default-value"},"accepted","_","compression","_","algorithms Default Value"),(0,r.kt)("p",null,"The default value is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  "passthrough",\n  "snappy"\n]\n')),(0,r.kt)("h2",{id:"hash_algorithm"},"hash","_","algorithm"),(0,r.kt)("p",null,"The algorithm used to hash the content of the objects to generate the id of the objects. The algorithm is optional and if not set, the default algorithm is used."),(0,r.kt)("p",null,"The default algorithm is Sha256 if not set."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"hash_algorithm")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"is optional")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Type: merged type (",(0,r.kt)("a",{parentName:"p",href:"/fr/contracts/v2.0.0/okp4-objectarium-responses-bucketresponse-definitions-bucketconfig-properties-hash_algorithm"},"Details"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"cannot be null")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"defined in: ",(0,r.kt)("a",{parentName:"p",href:"/fr/contracts/v2.0.0/okp4-objectarium-responses-bucketresponse-definitions-bucketconfig-properties-hash_algorithm",title:"undefined#/responses/bucket/definitions/BucketConfig/properties/hash_algorithm"},"okp4-objectarium")))),(0,r.kt)("h3",{id:"hash_algorithm-type"},"hash","_","algorithm Type"),(0,r.kt)("p",null,"merged type (",(0,r.kt)("a",{parentName:"p",href:"/fr/contracts/v2.0.0/okp4-objectarium-responses-bucketresponse-definitions-bucketconfig-properties-hash_algorithm"},"Details"),")"),(0,r.kt)("p",null,"all of"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/fr/contracts/v2.0.0/okp4-objectarium-responses-bucketresponse-definitions-bucketconfig-properties-hash_algorithm-allof-0",title:"check type definition"},"Untitled undefined type in okp4-objectarium"))),(0,r.kt)("h3",{id:"hash_algorithm-default-value"},"hash","_","algorithm Default Value"),(0,r.kt)("p",null,"The default value is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"sha256"\n')))}m.isMDXComponent=!0},77839:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/okp4-objectarium-289208c92e0639b047130ca484754519.json"}}]);