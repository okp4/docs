"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[2509],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=p(n),g=o,d=c["".concat(u,".").concat(g)]||c[g]||f[g]||a;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},75694:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return f}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={},u=void 0,p={unversionedId:"okp4d_query_feegrant_grants-by-grantee",id:"version-v5.0.0/okp4d_query_feegrant_grants-by-grantee",title:"okp4d_query_feegrant_grants-by-grantee",description:"okp4d query feegrant grants-by-grantee",source:"@site/commands_versioned_docs/version-v5.0.0/okp4d_query_feegrant_grants-by-grantee.md",sourceDirName:".",slug:"/okp4d_query_feegrant_grants-by-grantee",permalink:"/commands/okp4d_query_feegrant_grants-by-grantee",draft:!1,tags:[],version:"v5.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_feegrant_grant",permalink:"/commands/okp4d_query_feegrant_grant"},next:{title:"okp4d_query_feegrant_grants-by-granter",permalink:"/commands/okp4d_query_feegrant_grants-by-granter"}},l={},f=[{value:"okp4d query feegrant grants-by-grantee",id:"okp4d-query-feegrant-grants-by-grantee",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],c={toc:f};function g(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"okp4d-query-feegrant-grants-by-grantee"},"okp4d query feegrant grants-by-grantee"),(0,a.kt)("p",null,"Query all grants of a grantee"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Queries all the grants for a grantee address."),(0,a.kt)("p",null,"Example:\n$ okp4d query feegrant grants-by-grantee ","[grantee]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"okp4d query feegrant grants-by-grantee [grantee] [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --count-total        count total number of records in grants to query for\n      --grpc-addr string   the gRPC endpoint to use for this chain\n      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS\n      --height int         Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help               help for grants-by-grantee\n      --limit uint         pagination limit of grants to query for (default 100)\n      --node string        &lt;host&gt;:&lt;port&gt; to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n      --offset uint        pagination offset of grants to query for\n  -o, --output string      Output format (text|json) (default "text")\n      --page uint          pagination page of grants to query for. This sets offset to a multiple of limit (default 1)\n      --page-key string    pagination page-key of grants to query for\n      --reverse            results are sorted in descending order\n')),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_feegrant"},"okp4d query feegrant"),"\t - Querying commands for the feegrant module")))}g.isMDXComponent=!0}}]);