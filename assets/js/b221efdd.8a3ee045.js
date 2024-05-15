"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[3823],{88479:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=s(85893),o=s(11151);const r={},i=void 0,c={id:"okp4d_query_blocks",title:"okp4d_query_blocks",description:"okp4d query blocks",source:"@site/commands_versioned_docs/version-v7.1.0/okp4d_query_blocks.md",sourceDirName:".",slug:"/okp4d_query_blocks",permalink:"/commands/okp4d_query_blocks",draft:!1,unlisted:!1,tags:[],version:"v7.1.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_block",permalink:"/commands/okp4d_query_block"},next:{title:"okp4d_query_circuit",permalink:"/commands/okp4d_query_circuit"}},l={},d=[{value:"okp4d query blocks",id:"okp4d-query-blocks",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"okp4d-query-blocks",children:"okp4d query blocks"}),"\n",(0,t.jsx)(n.p,{children:"Query for paginated blocks that match a set of events"}),"\n",(0,t.jsx)(n.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(n.p,{children:"Search for blocks that match the exact given events where results are paginated.\nThe events query is directly passed to CometBFT's RPC BlockSearch method and must\nconform to CometBFT's query syntax.\nPlease refer to each module's documentation for the full set of events to query\nfor. Each module documents its respective events under 'xx_events.md'."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"okp4d query blocks [flags]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ okp4d query blocks --query \"message.sender='cosmos1...' AND block.height > 7\" --page 1 --limit 30 --order-by ASC\n"})}),"\n",(0,t.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'      --grpc-addr string   the gRPC endpoint to use for this chain\n      --grpc-insecure      allow gRPC over insecure channels, if not the server must use TLS\n      --height int         Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help               help for blocks\n      --limit int          Query number of transactions results per page returned (default 100)\n      --node string        <host>:<port> to CometBFT RPC interface for this chain (default "tcp://localhost:26657")\n      --order_by string    The ordering semantics (asc|dsc)\n  -o, --output string      Output format (text|json) (default "text")\n      --page int           Query a specific page of paginated results (default 1)\n      --query string       The blocks events query per CometBFT\'s query semantics\n'})}),"\n",(0,t.jsx)(n.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/commands/next/okp4d_query",children:"okp4d query"}),"\t - Querying subcommands"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>i});var t=s(67294);const o={},r=t.createContext(o);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);