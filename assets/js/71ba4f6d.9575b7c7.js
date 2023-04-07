"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[26603],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),s=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(a.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,u=e.originalType,a=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=s(t),d=o,f=l["".concat(a,".").concat(d)]||l[d]||m[d]||u;return t?n.createElement(f,p(p({ref:r},c),{},{components:t})):n.createElement(f,p({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var u=t.length,p=new Array(u);p[0]=l;var i={};for(var a in r)hasOwnProperty.call(r,a)&&(i[a]=r[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var s=2;s<u;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},81110:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var n=t(87462),o=t(63366),u=(t(67294),t(3905)),p=["components"],i={},a=void 0,s={unversionedId:"okp4d_query_group_group-members",id:"okp4d_query_group_group-members",title:"okp4d_query_group_group-members",description:"okp4d query group group-members",source:"@site/commands/okp4d_query_group_group-members.md",sourceDirName:".",slug:"/okp4d_query_group_group-members",permalink:"/commands/okp4d_query_group_group-members",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_group_group-info",permalink:"/commands/okp4d_query_group_group-info"},next:{title:"okp4d_query_group_group-policies-by-admin",permalink:"/commands/okp4d_query_group_group-policies-by-admin"}},c={},m=[{value:"okp4d query group group-members",id:"okp4d-query-group-group-members",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],l={toc:m};function d(e){var r=e.components,t=(0,o.Z)(e,p);return(0,u.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"okp4d-query-group-group-members"},"okp4d query group group-members"),(0,u.kt)("p",null,"Query for group members by group id with pagination flags"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"okp4d query group group-members [id] [flags]\n")),(0,u.kt)("h3",{id:"options"},"Options"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},'      --count-total        count total number of records in group-members to query for\n      --grpc-addr string   the gRPC endpoint to use for this chain\n      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS\n      --height int         Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help               help for group-members\n      --limit uint         pagination limit of group-members to query for (default 100)\n      --node string        &lt;host&gt;:&lt;port&gt; to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n      --offset uint        pagination offset of group-members to query for\n  -o, --output string      Output format (text|json) (default "text")\n      --page uint          pagination page of group-members to query for. This sets offset to a multiple of limit (default 1)\n      --page-key string    pagination page-key of group-members to query for\n      --reverse            results are sorted in descending order\n')),(0,u.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,u.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/commands/okp4d_query_group"},"okp4d query group"),"\t - Querying commands for the group module")))}d.isMDXComponent=!0}}]);