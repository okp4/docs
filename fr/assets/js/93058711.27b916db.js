"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[45870],{52632:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=t(85893),o=t(11151);const r={},a=void 0,c={id:"axoned_query_blocks",title:"axoned_query_blocks",description:"axoned query blocks",source:"@site/commands/axoned_query_blocks.md",sourceDirName:".",slug:"/axoned_query_blocks",permalink:"/fr/commands/next/axoned_query_blocks",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"axoned_query_block",permalink:"/fr/commands/next/axoned_query_block"},next:{title:"axoned_query_circuit",permalink:"/fr/commands/next/axoned_query_circuit"}},i={},l=[{value:"axoned query blocks",id:"axoned-query-blocks",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"axoned-query-blocks",children:"axoned query blocks"}),"\n",(0,s.jsx)(n.p,{children:"Query for paginated blocks that match a set of events"}),"\n",(0,s.jsx)(n.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(n.p,{children:"Search for blocks that match the exact given events where results are paginated.\nThe events query is directly passed to CometBFT's RPC BlockSearch method and must\nconform to CometBFT's query syntax.\nPlease refer to each module's documentation for the full set of events to query\nfor. Each module documents its respective events under 'xx_events.md'."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"axoned query blocks [flags]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ axoned query blocks --query \"message.sender='cosmos1...' AND block.height > 7\" --page 1 --limit 30 --order-by ASC\n"})}),"\n",(0,s.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'      --grpc-addr string   the gRPC endpoint to use for this chain\n      --grpc-insecure      allow gRPC over insecure channels, if not the server must use TLS\n      --height int         Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help               help for blocks\n      --limit int          Query number of transactions results per page returned (default 100)\n      --node string        <host>:<port> to CometBFT RPC interface for this chain (default "tcp://localhost:26657")\n      --order_by string    The ordering semantics (asc|dsc)\n  -o, --output string      Output format (text|json) (default "text")\n      --page int           Query a specific page of paginated results (default 1)\n      --query string       The blocks events query per CometBFT\'s query semantics\n'})}),"\n",(0,s.jsx)(n.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/fr/commands/next/axoned_query",children:"axoned query"}),"\t - Querying subcommands"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>a});var s=t(67294);const o={},r=s.createContext(o);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);