"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[90872],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},78273:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={},c=void 0,l={unversionedId:"okp4d_query_logic_ask",id:"version-v5.0.0/okp4d_query_logic_ask",title:"okp4d_query_logic_ask",description:"okp4d query logic ask",source:"@site/commands_versioned_docs/version-v5.0.0/okp4d_query_logic_ask.md",sourceDirName:".",slug:"/okp4d_query_logic_ask",permalink:"/commands/okp4d_query_logic_ask",draft:!1,tags:[],version:"v5.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_logic",permalink:"/commands/okp4d_query_logic"},next:{title:"okp4d_query_logic_params",permalink:"/commands/okp4d_query_logic_params"}},u={},p=[{value:"okp4d query logic ask",id:"okp4d-query-logic-ask",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"okp4d-query-logic-ask"},"okp4d query logic ask"),(0,i.kt)("p",null,"executes a logic query and returns the solutions found."),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Executes the ","[query]"," and return the solution(s) found."),(0,i.kt)("p",null,"Optionally, a program can be transmitted, which will be interpreted before the query is processed."),(0,i.kt)("p",null,"Since the query is without any side-effect, the query is not executed in the context of a transaction and no fee\nis charged for this, but the execution is constrained by the current limits configured in the module (that you can\nquery)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"okp4d query logic ask [query] [flags]\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'okp4d query logic ask "chain_id(X)." # returns the chain-id\n')),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --grpc-addr string      the gRPC endpoint to use for this chain\n      --grpc-insecure         allow gRPC over insecure channels, if not TLS the server must use TLS\n      --height int            Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help                  help for ask\n      --node string           &lt;host&gt;:&lt;port&gt; to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string         Output format (text|json) (default "text")\n      --program string        reads the program from the given string.\n      --program-file string   reads the program from the given filename or from stdin if "-" is passed as the filename.\n')),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_logic"},"okp4d query logic"),"\t - Querying commands for the logic module")))}f.isMDXComponent=!0}}]);