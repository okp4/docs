"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[51122],{56414:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=t(85893),o=t(11151);const r={},a=void 0,i={id:"axoned_query_tx",title:"axoned_query_tx",description:"axoned query tx",source:"@site/commands/axoned_query_tx.md",sourceDirName:".",slug:"/axoned_query_tx",permalink:"/commands/next/axoned_query_tx",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"axoned_query_staking_validators",permalink:"/commands/next/axoned_query_staking_validators"},next:{title:"axoned_query_txs",permalink:"/commands/next/axoned_query_txs"}},d={},c=[{value:"axoned query tx",id:"axoned-query-tx",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"axoned-query-tx",children:"axoned query tx"}),"\n",(0,s.jsx)(n.p,{children:'Query for a transaction by hash, "<addr>/<seq>" combination or comma-separated signatures in a committed block'}),"\n",(0,s.jsx)(n.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(n.p,{children:"Example:\n$ axoned query tx <hash>\n$ axoned query tx --type=acc_seq <addr>/<sequence>\n$ axoned query tx --type=signature <sig1_base64>,<sig2_base64...>"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"axoned query tx --type=[hash|acc_seq|signature] [hash|acc_seq|signature] [flags]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'      --grpc-addr string   the gRPC endpoint to use for this chain\n      --grpc-insecure      allow gRPC over insecure channels, if not the server must use TLS\n      --height int         Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help               help for tx\n      --node string        <host>:<port> to CometBFT RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string      Output format (text|json) (default "text")\n      --type string        The type to be used when querying tx, can be one of "hash", "acc_seq", "signature" (default "hash")\n'})}),"\n",(0,s.jsx)(n.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/commands/next/axoned_query",children:"axoned query"}),"\t - Querying subcommands"]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var s=t(67294);const o={},r=s.createContext(o);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);