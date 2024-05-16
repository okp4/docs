"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[26876],{83578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=n(85893),o=n(11151);const r={},i=void 0,a={id:"okp4d_query_tx",title:"okp4d_query_tx",description:"okp4d query tx",source:"@site/commands_versioned_docs/version-v6.0.0/okp4d_query_tx.md",sourceDirName:".",slug:"/okp4d_query_tx",permalink:"/commands/v6.0.0/okp4d_query_tx",draft:!1,unlisted:!1,tags:[],version:"v6.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_staking_validators",permalink:"/commands/v6.0.0/okp4d_query_staking_validators"},next:{title:"okp4d_query_txs",permalink:"/commands/v6.0.0/okp4d_query_txs"}},d={},c=[{value:"okp4d query tx",id:"okp4d-query-tx",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function u(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"okp4d-query-tx",children:"okp4d query tx"}),"\n",(0,s.jsx)(t.p,{children:'Query for a transaction by hash, "<addr>/<seq>" combination or comma-separated signatures in a committed block'}),"\n",(0,s.jsx)(t.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(t.p,{children:"Example:\n$ okp4d query tx <hash>\n$ okp4d query tx --type=acc_seq <addr>/<sequence>\n$ okp4d query tx --type=signature <sig1_base64>,<sig2_base64...>"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"okp4d query tx --type=[hash|acc_seq|signature] [hash|acc_seq|signature] [flags]\n"})}),"\n",(0,s.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'      --grpc-addr string   the gRPC endpoint to use for this chain\n      --grpc-insecure      allow gRPC over insecure channels, if not the server must use TLS\n      --height int         Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help               help for tx\n      --node string        <host>:<port> to CometBFT RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string      Output format (text|json) (default "text")\n      --type string        The type to be used when querying tx, can be one of "hash", "acc_seq", "signature" (default "hash")\n'})}),"\n",(0,s.jsx)(t.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/commands/v6.0.0/okp4d_query",children:"okp4d query"}),"\t - Querying subcommands"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var s=n(67294);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);