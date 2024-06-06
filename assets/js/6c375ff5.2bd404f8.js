"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[92505],{16006:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=t(85893),o=t(11151);const i={},s=void 0,r={id:"axoned_query_wait-tx",title:"axoned_query_wait-tx",description:"axoned query wait-tx",source:"@site/commands/axoned_query_wait-tx.md",sourceDirName:".",slug:"/axoned_query_wait-tx",permalink:"/commands/next/axoned_query_wait-tx",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"axoned_query_upgrade_plan",permalink:"/commands/next/axoned_query_upgrade_plan"},next:{title:"axoned_query_wasm",permalink:"/commands/next/axoned_query_wasm"}},d={},c=[{value:"axoned query wait-tx",id:"axoned-query-wait-tx",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"axoned-query-wait-tx",children:"axoned query wait-tx"}),"\n",(0,a.jsx)(n.p,{children:"Wait for a transaction to be included in a block"}),"\n",(0,a.jsx)(n.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,a.jsx)(n.p,{children:"Subscribes to a CometBFT WebSocket connection and waits for a transaction event with the given hash."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"axoned query wait-tx [hash] [flags]\n"})}),"\n",(0,a.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'By providing the transaction hash:\n$ axonedd q wait-tx [hash]\n\nOr, by piping a "tx" command:\n$ axonedd tx [flags] | axonedd q wait-tx\n\n'})}),"\n",(0,a.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'      --grpc-addr string   the gRPC endpoint to use for this chain\n      --grpc-insecure      allow gRPC over insecure channels, if not the server must use TLS\n      --height int         Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help               help for wait-tx\n      --node string        <host>:<port> to CometBFT RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string      Output format (text|json) (default "text")\n      --timeout duration   The maximum time to wait for the transaction to be included in a block (default 15s)\n'})}),"\n",(0,a.jsx)(n.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/commands/next/axoned_query",children:"axoned query"}),"\t - Querying subcommands"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var a=t(67294);const o={},i=a.createContext(o);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);