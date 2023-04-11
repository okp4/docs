"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[95435],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55721:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],c={},l="okp4-objectarium Schema",s={unversionedId:"okp4-objectarium",id:"okp4-objectarium",title:"okp4-objectarium Schema",description:"Overview",source:"@site/contracts/okp4-objectarium.md",sourceDirName:".",slug:"/okp4-objectarium",permalink:"/contracts/next/okp4-objectarium",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Untitled undefined type in okp4-objectarium Schema",permalink:"/contracts/next/okp4-objectarium-responses"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Instantiate",id:"instantiate",level:3},{value:"Execute",id:"execute",level:3},{value:"Query",id:"query",level:3},{value:"okp4-objectarium Type",id:"okp4-objectarium-type",level:2}],m={toc:u};function d(e){var t=e.components,c=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"okp4-objectarium-schema"},"okp4-objectarium Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"undefined\n")),(0,o.kt)("h1",{id:"objectarium"},"Objectarium"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"okp4-objectarium")," smart contract enables the storage of arbitrary ",(0,o.kt)("inlineCode",{parentName:"p"},"objects")," in any ",(0,o.kt)("a",{parentName:"p",href:"https://cosmos.network/"},"Cosmos blockchains")," using the ",(0,o.kt)("a",{parentName:"p",href:"https://cosmwasm.com/"},"CosmWasm")," framework."),(0,o.kt)("p",null,"This contract allows for storing ",(0,o.kt)("inlineCode",{parentName:"p"},"objects"),", pinning and unpinning ",(0,o.kt)("inlineCode",{parentName:"p"},"objects")," for a given sender address, and it also includes the ability to remove (forget) ",(0,o.kt)("inlineCode",{parentName:"p"},"objects")," if they are no longer pinned."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"instantiate"},"Instantiate"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"okp4-objectarium")," can be instantiated as follows, refer to the schema for more information on configuration, limits and pagination configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'okp4d tx wasm instantiate $CODE_ID \\\n    --label "my-storage" \\\n    --from $ADDR \\\n    --admin $ADMIN_ADDR \\\n    --gas 1000000 \\\n    --broadcast-mode block \\\n    \'{"bucket":"my-bucket","limits":{}, "config": {}, "pagination": {}}\'\n')),(0,o.kt)("h3",{id:"execute"},"Execute"),(0,o.kt)("p",null,"We can store an object by providing its data in base64 encoded, we can pin the stored object to prevent it from being removed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'okp4d tx wasm execute $CONTRACT_ADDR \\\n    --from $ADDR \\\n    --gas 1000000 \\\n    --broadcast-mode block \\\n    "{\\"store_object\\":{\\"data\\": \\"$(cat my-data | base64)\\",\\"pin\\":true}}"\n')),(0,o.kt)("p",null,"The object id is stable as it is a hash, we can't store an object twice."),(0,o.kt)("p",null,"With the following commands we can pin and unpin existing objects:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'okp4d tx wasm execute $CONTRACT_ADDR \\\n    --from $ADDR \\\n    --gas 1000000 \\\n    --broadcast-mode block \\\n    "{\\"pin_object\\":{\\"id\\": \\"$OBJECT_ID\\"}}"\n\nokp4d tx wasm execute $CONTRACT_ADDR \\\n    --from $ADDR \\\n    --gas 1000000 \\\n    --broadcast-mode block \\\n    "{\\"unpin_object\\":{\\"id\\": \\"$OBJECT_ID\\"}}"\n')),(0,o.kt)("p",null,"And if an object is not pinned, or pinned by the sender of transaction, we can remove it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'okp4d tx wasm execute $CONTRACT_ADDR \\\n    --from $ADDR \\\n    --gas 1000000 \\\n    --broadcast-mode block \\\n    "{\\"forget_object\\":{\\"id\\": \\"$OBJECT_ID\\"}}"\n')),(0,o.kt)("h3",{id:"query"},"Query"),(0,o.kt)("p",null,"Query an object by its id:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'okp4d query wasm contract-state smart $CONTRACT_ADDR \\\n    "{\\"object\\": {\\"id\\": \\"$OBJECT_ID\\"}}"\n')),(0,o.kt)("p",null,"Or its data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'okp4d query wasm contract-state smart $CONTRACT_ADDR \\\n    "{\\"object_data\\": {\\"id\\": \\"$OBJECT_ID\\"}}"\n')),(0,o.kt)("p",null,"We can also list the objects, eventually filtering on the object owner:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'okp4d query wasm contract-state smart $CONTRACT_ADDR \\\n    "{\\"objects\\": {\\"address\\": \\"okp41p8u47en82gmzfm259y6z93r9qe63l25dfwwng6\\"}}"\n')),(0,o.kt)("p",null,"And navigate in a cursor based pagination:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'okp4d query wasm contract-state smart $CONTRACT_ADDR \\\n    "{\\"objects\\": {\\"first\\": 5, \\"after\\": \\"23Y5t5DBe7DkPwfJo3Sd26Y8Z9epmtpA1FTpdG7DiG6MD8vPRTzzbQ9TccmyoBcePkPK6atUiqcAzJVo3TfYNBGY\\"}}"\n')),(0,o.kt)("p",null,"We can also query object pins with the same cursor based pagination:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'okp4d query wasm contract-state smart $CONTRACT_ADDR \\\n    "{\\"object_pins\\": {\\"id\\": \\"$OBJECT_ID\\", \\"first\\": 5, \\"after\\": \\"23Y5t5DBe7DkPwfJo3Sd26Y8Z9epmtpA1FTpdG7DiG6MD8vPRTzzbQ9TccmyoBcePkPK6atUiqcAzJVo3TfYNBGY\\"}}"\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,o.kt)("td",{parentName:"tr",align:"left"},"No"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Unknown identifiability"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Allowed"),(0,o.kt)("td",{parentName:"tr",align:"left"},"none"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{target:"_blank",href:n(78567).Z,title:"open original schema"},"okp4-objectarium.json"))))),(0,o.kt)("h2",{id:"okp4-objectarium-type"},"okp4-objectarium Type"),(0,o.kt)("p",null,"unknown (",(0,o.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium"},"okp4-objectarium"),")"))}d.isMDXComponent=!0},78567:function(e,t,n){t.Z=n.p+"assets/files/okp4-objectarium-aed1c4279337e383577893543c5e0b01.json"}}]);