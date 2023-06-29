"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[21233],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return r?n.createElement(f,p(p({ref:t},c),{},{components:r})):n.createElement(f,p({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var l=2;l<i;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},64994:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),p=["components"],o={},s="DescribeResponse Schema",l={unversionedId:"okp4-cognitarium-responses-describeresponse",id:"okp4-cognitarium-responses-describeresponse",title:"DescribeResponse Schema",description:"Represents the response of a \\[QueryMsg::Describe] query.",source:"@site/contracts/okp4-cognitarium-responses-describeresponse.md",sourceDirName:".",slug:"/okp4-cognitarium-responses-describeresponse",permalink:"/contracts/next/okp4-cognitarium-responses-describeresponse",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Untitled undefined type in okp4-cognitarium Schema",permalink:"/contracts/next/okp4-cognitarium-responses-describeresponse-properties-format"},next:{title:"Untitled string in okp4-cognitarium Schema",permalink:"/contracts/next/okp4-cognitarium-responses-selectresponse-definitions-head-properties-vars-items"}},c={},d=[{value:"describe Type",id:"describe-type",level:2},{value:"data",id:"data",level:2},{value:"data Type",id:"data-type",level:3},{value:"format",id:"format",level:2},{value:"format Type",id:"format-type",level:3},{value:"Definitions group Binary",id:"definitions-group-binary",level:2},{value:"Definitions group DataFormat",id:"definitions-group-dataformat",level:2}],m={toc:d};function u(e){var t=e.components,o=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"describeresponse-schema"},"DescribeResponse Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/responses/describe\n")),(0,i.kt)("p",null,"Represents the response of a ","[","QueryMsg::Describe] query."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,i.kt)("td",{parentName:"tr",align:"left"},"none"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{target:"_blank",href:r(38426).Z,title:"open original schema"},"okp4-cognitarium.json*"))))),(0,i.kt)("h2",{id:"describe-type"},"describe Type"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"object")," (",(0,i.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-responses-describeresponse"},"DescribeResponse"),")"),(0,i.kt)("h1",{id:"describe-properties"},"describe Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Nullable"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Defined by"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#data"},"data")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Merged"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/contracts/next/okp4-cognitarium-responses-describeresponse-properties-data",title:"undefined#/responses/describe/properties/data"},"okp4-cognitarium"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#format"},"format")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Merged"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/contracts/next/okp4-cognitarium-responses-describeresponse-properties-format",title:"undefined#/responses/describe/properties/format"},"okp4-cognitarium"))))),(0,i.kt)("h2",{id:"data"},"data"),(0,i.kt)("p",null,"The data serialized in the specified format."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"data")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"is required")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Type: merged type (",(0,i.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-responses-describeresponse-properties-data"},"Details"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"cannot be null")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"defined in: ",(0,i.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-responses-describeresponse-properties-data",title:"undefined#/responses/describe/properties/data"},"okp4-cognitarium")))),(0,i.kt)("h3",{id:"data-type"},"data Type"),(0,i.kt)("p",null,"merged type (",(0,i.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-responses-describeresponse-properties-data"},"Details"),")"),(0,i.kt)("p",null,"all of"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/contracts/next/okp4-cognitarium-responses-describeresponse-properties-data-allof-0",title:"check type definition"},"Untitled undefined type in okp4-cognitarium"))),(0,i.kt)("h2",{id:"format"},"format"),(0,i.kt)("p",null,"The format of the data."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"format")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"is required")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Type: merged type (",(0,i.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-responses-describeresponse-properties-format"},"Details"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"cannot be null")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"defined in: ",(0,i.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-responses-describeresponse-properties-format",title:"undefined#/responses/describe/properties/format"},"okp4-cognitarium")))),(0,i.kt)("h3",{id:"format-type"},"format Type"),(0,i.kt)("p",null,"merged type (",(0,i.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-responses-describeresponse-properties-format"},"Details"),")"),(0,i.kt)("p",null,"all of"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/contracts/next/okp4-cognitarium-responses-describeresponse-properties-format-allof-0",title:"check type definition"},"Untitled undefined type in okp4-cognitarium"))),(0,i.kt)("h1",{id:"describeresponse-definitions"},"DescribeResponse Definitions"),(0,i.kt)("h2",{id:"definitions-group-binary"},"Definitions group Binary"),(0,i.kt)("p",null,"Reference this group by using"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{"$ref":"undefined#/responses/describe/definitions/Binary"}\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Nullable"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Defined by")))),(0,i.kt)("h2",{id:"definitions-group-dataformat"},"Definitions group DataFormat"),(0,i.kt)("p",null,"Reference this group by using"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{"$ref":"undefined#/responses/describe/definitions/DataFormat"}\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Nullable"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Defined by")))))}u.isMDXComponent=!0},38426:function(e,t,r){t.Z=r.p+"assets/files/okp4-cognitarium-34f8dee3f448cb3f845117fb3974c24b.json"}}]);