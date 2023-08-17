"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[30044],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=i,f=d["".concat(o,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,p(p({ref:t},u),{},{components:r})):n.createElement(f,p({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,p=new Array(a);p[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,p[1]=l;for(var s=2;s<a;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},61822:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const a={},p="DescribeQuery Schema",l={unversionedId:"okp4-cognitarium-querymsg-definitions-describequery",id:"version-v2.0.0/okp4-cognitarium-querymsg-definitions-describequery",title:"DescribeQuery Schema",description:"Represents a DESCRIBE query over the triple store, allowing to retrieve a description of a resource as a set of triples serialized in a specific format.",source:"@site/contracts_versioned_docs/version-v2.0.0/okp4-cognitarium-querymsg-definitions-describequery.md",sourceDirName:".",slug:"/okp4-cognitarium-querymsg-definitions-describequery",permalink:"/contracts/v2.0.0/okp4-cognitarium-querymsg-definitions-describequery",draft:!1,tags:[],version:"v2.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Untitled array in okp4-cognitarium Schema",permalink:"/contracts/v2.0.0/okp4-cognitarium-querymsg-definitions-describequery-properties-where"},next:{title:"Untitled string in okp4-cognitarium Schema",permalink:"/contracts/v2.0.0/okp4-cognitarium-querymsg-definitions-iri-oneof-full-properties-full"}},o={},s=[{value:"DescribeQuery Type",id:"describequery-type",level:2},{value:"prefixes",id:"prefixes",level:2},{value:"prefixes Type",id:"prefixes-type",level:3},{value:"resource",id:"resource",level:2},{value:"resource Type",id:"resource-type",level:3},{value:"where",id:"where",level:2},{value:"where Type",id:"where-type",level:3}],u={toc:s};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"describequery-schema"},"DescribeQuery Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/query/definitions/DescribeQuery\n")),(0,i.kt)("p",null,"Represents a DESCRIBE query over the triple store, allowing to retrieve a description of a resource as a set of triples serialized in a specific format."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,i.kt)("td",{parentName:"tr",align:"left"},"none"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{target:"_blank",href:r(26730).Z,title:"open original schema"},"okp4-cognitarium.json*"))))),(0,i.kt)("h2",{id:"describequery-type"},"DescribeQuery Type"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"object")," (",(0,i.kt)("a",{parentName:"p",href:"/contracts/v2.0.0/okp4-cognitarium-querymsg-definitions-describequery"},"DescribeQuery"),")"),(0,i.kt)("h1",{id:"describequery-properties"},"DescribeQuery Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Nullable"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Defined by"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#prefixes"},"prefixes")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"array")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/contracts/v2.0.0/okp4-cognitarium-querymsg-definitions-describequery-properties-prefixes",title:"undefined#/query/definitions/DescribeQuery/properties/prefixes"},"okp4-cognitarium"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#resource"},"resource")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Merged"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/contracts/v2.0.0/okp4-cognitarium-querymsg-definitions-describequery-properties-resource",title:"undefined#/query/definitions/DescribeQuery/properties/resource"},"okp4-cognitarium"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#where"},"where")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"array")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/contracts/v2.0.0/okp4-cognitarium-querymsg-definitions-describequery-properties-where",title:"undefined#/query/definitions/DescribeQuery/properties/where"},"okp4-cognitarium"))))),(0,i.kt)("h2",{id:"prefixes"},"prefixes"),(0,i.kt)("p",null,"The prefixes used in the query."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"prefixes")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"is required")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Type: unknown","[","]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"cannot be null")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"defined in: ",(0,i.kt)("a",{parentName:"p",href:"/contracts/v2.0.0/okp4-cognitarium-querymsg-definitions-describequery-properties-prefixes",title:"undefined#/query/definitions/DescribeQuery/properties/prefixes"},"okp4-cognitarium")))),(0,i.kt)("h3",{id:"prefixes-type"},"prefixes Type"),(0,i.kt)("p",null,"unknown","[","]"),(0,i.kt)("h2",{id:"resource"},"resource"),(0,i.kt)("p",null,"The resource to describe given as a variable or a node."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"resource")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"is required")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Type: merged type (",(0,i.kt)("a",{parentName:"p",href:"/contracts/v2.0.0/okp4-cognitarium-querymsg-definitions-describequery-properties-resource"},"Details"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"cannot be null")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"defined in: ",(0,i.kt)("a",{parentName:"p",href:"/contracts/v2.0.0/okp4-cognitarium-querymsg-definitions-describequery-properties-resource",title:"undefined#/query/definitions/DescribeQuery/properties/resource"},"okp4-cognitarium")))),(0,i.kt)("h3",{id:"resource-type"},"resource Type"),(0,i.kt)("p",null,"merged type (",(0,i.kt)("a",{parentName:"p",href:"/contracts/v2.0.0/okp4-cognitarium-querymsg-definitions-describequery-properties-resource"},"Details"),")"),(0,i.kt)("p",null,"all of"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/contracts/v2.0.0/okp4-cognitarium-querymsg-definitions-describequery-properties-resource-allof-0",title:"check type definition"},"Untitled undefined type in okp4-cognitarium"))),(0,i.kt)("h2",{id:"where"},"where"),(0,i.kt)("p",null,"The WHERE clause. This clause is used to specify the resource identifier to describe using variable bindings."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"where")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"is required")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Type: unknown","[","]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"cannot be null")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"defined in: ",(0,i.kt)("a",{parentName:"p",href:"/contracts/v2.0.0/okp4-cognitarium-querymsg-definitions-describequery-properties-where",title:"undefined#/query/definitions/DescribeQuery/properties/where"},"okp4-cognitarium")))),(0,i.kt)("h3",{id:"where-type"},"where Type"),(0,i.kt)("p",null,"unknown","[","]"))}c.isMDXComponent=!0},26730:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/files/okp4-cognitarium-8b047f6626171599919daf0f24fc304f.json"}}]);