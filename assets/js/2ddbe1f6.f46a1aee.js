"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[94788],{59091:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=o(85893),s=o(11151);const r={},i=void 0,c={id:"okp4d_query_block",title:"okp4d_query_block",description:"okp4d query block",source:"@site/commands_versioned_docs/version-v7.1.0/okp4d_query_block.md",sourceDirName:".",slug:"/okp4d_query_block",permalink:"/commands/okp4d_query_block",draft:!1,unlisted:!1,tags:[],version:"v7.1.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_block-results",permalink:"/commands/okp4d_query_block-results"},next:{title:"okp4d_query_blocks",permalink:"/commands/okp4d_query_blocks"}},l={},d=[{value:"okp4d query block",id:"okp4d-query-block",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"okp4d-query-block",children:"okp4d query block"}),"\n",(0,t.jsx)(n.p,{children:"Query for a committed block by height, hash, or event(s)"}),"\n",(0,t.jsx)(n.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsxs)(n.p,{children:["Query for a specific committed block using the CometBFT RPC ",(0,t.jsx)(n.code,{children:"block"})," and ",(0,t.jsx)(n.code,{children:"block_by_hash"})," method"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"okp4d query block --type=[height|hash] [height|hash] [flags]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ okp4d query block --type=height <height>\n$ okp4d query block --type=hash <hash>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'      --grpc-addr string   the gRPC endpoint to use for this chain\n      --grpc-insecure      allow gRPC over insecure channels, if not the server must use TLS\n      --height int         Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help               help for block\n      --node string        <host>:<port> to CometBFT RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string      Output format (text|json) (default "text")\n      --type string        The type to be used when querying tx, can be one of "height", "hash" (default "hash")\n'})}),"\n",(0,t.jsx)(n.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/commands/next/okp4d_query",children:"okp4d query"}),"\t - Querying subcommands"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>i});var t=o(67294);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);