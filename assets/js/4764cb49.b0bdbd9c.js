"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[80262],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,v=d["".concat(s,".").concat(f)]||d[f]||c[f]||i;return n?o.createElement(v,a(a({ref:t},l),{},{components:n})):o.createElement(v,a({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79704:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],p={},s=void 0,u={unversionedId:"okp4d_query_gov_votes",id:"okp4d_query_gov_votes",title:"okp4d_query_gov_votes",description:"okp4d query gov votes",source:"@site/commands/okp4d_query_gov_votes.md",sourceDirName:".",slug:"/okp4d_query_gov_votes",permalink:"/commands/next/okp4d_query_gov_votes",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_gov_vote",permalink:"/commands/next/okp4d_query_gov_vote"},next:{title:"okp4d_query_group",permalink:"/commands/next/okp4d_query_group"}},l={},c=[{value:"okp4d query gov votes",id:"okp4d-query-gov-votes",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],d={toc:c};function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"okp4d-query-gov-votes"},"okp4d query gov votes"),(0,i.kt)("p",null,"Query votes on a proposal"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Query vote details for a single proposal by its identifier."),(0,i.kt)("p",null,"Example:\n$ okp4d query gov votes 1\n$ okp4d query gov votes 1 --page=2 --limit=100"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"okp4d query gov votes [proposal-id] [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --count-total        count total number of records in votes to query for\n      --grpc-addr string   the gRPC endpoint to use for this chain\n      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS\n      --height int         Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help               help for votes\n      --limit uint         pagination limit of votes to query for (default 100)\n      --node string        &lt;host&gt;:&lt;port&gt; to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n      --offset uint        pagination offset of votes to query for\n  -o, --output string      Output format (text|json) (default "text")\n      --page uint          pagination page of votes to query for. This sets offset to a multiple of limit (default 1)\n      --page-key string    pagination page-key of votes to query for\n      --reverse            results are sorted in descending order\n')),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_gov"},"okp4d query gov"),"\t - Querying commands for the governance module")))}f.isMDXComponent=!0}}]);