"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[18572],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(a),u=r,f=s["".concat(p,".").concat(u)]||s[u]||m[u]||i;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},11846:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={},p="DeleteData Schema",d={unversionedId:"okp4-cognitarium-executemsg-oneof-deletedata",id:"version-v2.1.0/okp4-cognitarium-executemsg-oneof-deletedata",title:"DeleteData Schema",description:"Delete the data (RDF triples) from the store matching the patterns defined by the provided query. For non-existing triples it acts as no-op.",source:"@site/contracts_versioned_docs/version-v2.1.0/okp4-cognitarium-executemsg-oneof-deletedata.md",sourceDirName:".",slug:"/okp4-cognitarium-executemsg-oneof-deletedata",permalink:"/contracts/okp4-cognitarium-executemsg-oneof-deletedata",draft:!1,tags:[],version:"v2.1.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Untitled object in okp4-cognitarium Schema",permalink:"/contracts/okp4-cognitarium-executemsg-oneof-deletedata-properties-delete_data"},next:{title:"Untitled undefined type in okp4-cognitarium Schema",permalink:"/contracts/okp4-cognitarium-executemsg-oneof-insertdata-properties-insert_data-properties-data-allof-0"}},c={},m=[{value:"1 Type",id:"1-type",level:2},{value:"delete_data",id:"delete_data",level:2},{value:"delete_data Type",id:"delete_data-type",level:3}],s={toc:m};function u(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deletedata-schema"},"DeleteData Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/execute/oneOf/1\n")),(0,i.kt)("p",null,"Delete the data (RDF triples) from the store matching the patterns defined by the provided query. For non-existing triples it acts as no-op."),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},'json { "prefixes": [ { "prefix": "foaf", "namespace": "http://xmlns.com/foaf/0.1/" } ], "delete": [ { "subject": { "variable": "s" }, "predicate": { "variable": "p" }, "object": { "variable": "o" } } ], "where": [ { "simple": { "triplePattern": { "subject": { "variable": "s" }, "predicate": { "node": { "namedNode": {"prefixed": "foaf:givenName"} } }, "object": { "literal": { "simple": "Myrddin" } } } } }, { "simple": { "triplePattern": { "subject": { "variable": "s" }, "predicate": { "variable": "p" }, "object": { "variable": "o" } } } } ] ')),(0,i.kt)("p",null,"Only the smart contract owner (i.e. the address who instantiated it) is authorized to perform this action."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,i.kt)("td",{parentName:"tr",align:"left"},"none"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{target:"_blank",href:a(62804).Z,title:"open original schema"},"okp4-cognitarium.json*"))))),(0,i.kt)("h2",{id:"1-type"},"1 Type"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"object")," (",(0,i.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-executemsg-oneof-deletedata"},"DeleteData"),")"),(0,i.kt)("h1",{id:"1-properties"},"1 Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Nullable"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Defined by"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#delete_data"},"delete","_","data")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"object")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/contracts/next/okp4-cognitarium-executemsg-oneof-deletedata-properties-delete_data",title:"undefined#/execute/oneOf/1/properties/delete_data"},"okp4-cognitarium"))))),(0,i.kt)("h2",{id:"delete_data"},"delete","_","data"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"delete_data")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"is required")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"object")," (",(0,i.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-executemsg-oneof-deletedata-properties-delete_data"},"Details"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"cannot be null")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"defined in: ",(0,i.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-executemsg-oneof-deletedata-properties-delete_data",title:"undefined#/execute/oneOf/1/properties/delete_data"},"okp4-cognitarium")))),(0,i.kt)("h3",{id:"delete_data-type"},"delete","_","data Type"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"object")," (",(0,i.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-executemsg-oneof-deletedata-properties-delete_data"},"Details"),")"))}u.isMDXComponent=!0},62804:function(e,t,a){t.Z=a.p+"assets/files/okp4-cognitarium-34f8dee3f448cb3f845117fb3974c24b.json"}}]);