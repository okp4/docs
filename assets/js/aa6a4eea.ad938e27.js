"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[19719],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},l=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=p(n),m=o,h=l["".concat(i,".").concat(m)]||l[m]||u[m]||r;return n?a.createElement(h,c(c({ref:t},d),{},{components:n})):a.createElement(h,c({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=l;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var p=2;p<r;p++)c[p]=n[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},8810:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),c=["components"],s={},i=void 0,p={unversionedId:"okp4d_tx_interchain-accounts_host_generate-packet-data",id:"version-v5.0.0/okp4d_tx_interchain-accounts_host_generate-packet-data",title:"okp4d_tx_interchain-accounts_host_generate-packet-data",description:"okp4d tx interchain-accounts host generate-packet-data",source:"@site/commands_versioned_docs/version-v5.0.0/okp4d_tx_interchain-accounts_host_generate-packet-data.md",sourceDirName:".",slug:"/okp4d_tx_interchain-accounts_host_generate-packet-data",permalink:"/commands/okp4d_tx_interchain-accounts_host_generate-packet-data",draft:!1,tags:[],version:"v5.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_interchain-accounts_host",permalink:"/commands/okp4d_tx_interchain-accounts_host"},next:{title:"okp4d_tx_logic",permalink:"/commands/okp4d_tx_logic"}},d={},u=[{value:"okp4d tx interchain-accounts host generate-packet-data",id:"okp4d-tx-interchain-accounts-host-generate-packet-data",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],l={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"okp4d-tx-interchain-accounts-host-generate-packet-data"},"okp4d tx interchain-accounts host generate-packet-data"),(0,r.kt)("p",null,"Generates ICA packet data."),(0,r.kt)("h3",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,'generate-packet-data accepts a message string and serializes it\ninto packet data which is outputted to stdout. It can be used in conjunction with send-tx"\nwhich submits pre-built packet data containing messages to be executed on the host chain.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"okp4d tx interchain-accounts host generate-packet-data [message] [flags]\n")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'okp4d tx interchain-accounts host generate-packet-data \'{\n    "@type":"/cosmos.bank.v1beta1.MsgSend",\n    "from_address":"cosmos15ccshhmp0gsx29qpqq6g4zmltnnvgmyu9ueuadh9y2nc5zj0szls5gtddz",\n    "to_address":"cosmos10h9stc5v6ntgeygf5xf945njqq5h32r53uquvw",\n    "amount": [\n        {\n            "denom": "stake",\n            "amount": "1000"\n        }\n    ]\n}\' --memo memo\n\n\nokp4d tx interchain-accounts host generate-packet-data \'[{\n    "@type":"/cosmos.bank.v1beta1.MsgSend",\n    "from_address":"cosmos15ccshhmp0gsx29qpqq6g4zmltnnvgmyu9ueuadh9y2nc5zj0szls5gtddz",\n    "to_address":"cosmos10h9stc5v6ntgeygf5xf945njqq5h32r53uquvw",\n    "amount": [\n        {\n            "denom": "stake",\n            "amount": "1000"\n        }\n    ]\n},\n{\n    "@type": "/cosmos.staking.v1beta1.MsgDelegate",\n    "delegator_address": "cosmos15ccshhmp0gsx29qpqq6g4zmltnnvgmyu9ueuadh9y2nc5zj0szls5gtddz",\n    "validator_address": "cosmosvaloper1qnk2n4nlkpw9xfqntladh74w6ujtulwnmxnh3k",\n    "amount": {\n        "denom": "stake",\n        "amount": "1000"\n    }\n}]\'\n')),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  -h, --help          help for generate-packet-data\n      --memo string   an optional memo to be included in the interchain account packet data\n")),(0,r.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/next/okp4d_tx_interchain-accounts_host"},"okp4d tx interchain-accounts host"),"\t - IBC interchain accounts host transaction subcommands")))}m.isMDXComponent=!0}}]);