"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[98334],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),s=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(a.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,y=d["".concat(a,".").concat(m)]||d[m]||l[m]||i;return n?o.createElement(y,u(u({ref:t},c),{},{components:n})):o.createElement(y,u({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,u=new Array(i);u[0]=d;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:r,u[1]=p;for(var s=2;s<i;s++)u[s]=n[s];return o.createElement.apply(null,u)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22797:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return l}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),u=["components"],p={},a=void 0,s={unversionedId:"okp4d_query_distribution_community-pool",id:"version-v5.0.0/okp4d_query_distribution_community-pool",title:"okp4d_query_distribution_community-pool",description:"okp4d query distribution community-pool",source:"@site/commands_versioned_docs/version-v5.0.0/okp4d_query_distribution_community-pool.md",sourceDirName:".",slug:"/okp4d_query_distribution_community-pool",permalink:"/commands/okp4d_query_distribution_community-pool",draft:!1,tags:[],version:"v5.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_distribution_commission",permalink:"/commands/okp4d_query_distribution_commission"},next:{title:"okp4d_query_distribution_params",permalink:"/commands/okp4d_query_distribution_params"}},c={},l=[{value:"okp4d query distribution community-pool",id:"okp4d-query-distribution-community-pool",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],d={toc:l};function m(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"okp4d-query-distribution-community-pool"},"okp4d query distribution community-pool"),(0,i.kt)("p",null,"Query the amount of coins in the community pool"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Query all coins in the community pool which is under Governance control."),(0,i.kt)("p",null,"Example:\n$ okp4d query distribution community-pool"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"okp4d query distribution community-pool [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --grpc-addr string   the gRPC endpoint to use for this chain\n      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS\n      --height int         Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help               help for community-pool\n      --node string        &lt;host&gt;:&lt;port&gt; to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string      Output format (text|json) (default "text")\n')),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_distribution"},"okp4d query distribution"),"\t - Querying commands for the distribution module")))}m.isMDXComponent=!0}}]);