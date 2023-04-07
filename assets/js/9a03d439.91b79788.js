"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[96011],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(t),f=o,m=c["".concat(l,".").concat(f)]||c[f]||u[f]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},13638:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={},l=void 0,d={unversionedId:"okp4d_query_bank_send-enabled",id:"okp4d_query_bank_send-enabled",title:"okp4d_query_bank_send-enabled",description:"okp4d query bank send-enabled",source:"@site/commands/okp4d_query_bank_send-enabled.md",sourceDirName:".",slug:"/okp4d_query_bank_send-enabled",permalink:"/commands/okp4d_query_bank_send-enabled",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_bank_denom-metadata",permalink:"/commands/okp4d_query_bank_denom-metadata"},next:{title:"okp4d_query_bank_spendable-balances",permalink:"/commands/okp4d_query_bank_spendable-balances"}},p={},u=[{value:"okp4d query bank send-enabled",id:"okp4d-query-bank-send-enabled",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],c={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"okp4d-query-bank-send-enabled"},"okp4d query bank send-enabled"),(0,a.kt)("p",null,"Query for send enabled entries"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Query for send enabled entries that have been specifically set."),(0,a.kt)("p",null,"To look up one or more specific denoms, supply them as arguments to this command.\nTo look up all denoms, do not provide any arguments."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"okp4d query bank send-enabled [denom1 ...] [flags]\n")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Getting one specific entry:\n  $ okp4d query bank send-enabled foocoin\n\nGetting two specific entries:\n  $ okp4d query bank send-enabled foocoin barcoin\n\nGetting all entries:\n  $ okp4d query bank send-enabled\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --count-total        count total number of records in send enabled entries to query for\n      --grpc-addr string   the gRPC endpoint to use for this chain\n      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS\n      --height int         Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help               help for send-enabled\n      --limit uint         pagination limit of send enabled entries to query for (default 100)\n      --node string        &lt;host&gt;:&lt;port&gt; to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n      --offset uint        pagination offset of send enabled entries to query for\n  -o, --output string      Output format (text|json) (default "text")\n      --page uint          pagination page of send enabled entries to query for. This sets offset to a multiple of limit (default 1)\n      --page-key string    pagination page-key of send enabled entries to query for\n      --reverse            results are sorted in descending order\n')),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/okp4d_query_bank"},"okp4d query bank"),"\t - Querying commands for the bank module")))}f.isMDXComponent=!0}}]);