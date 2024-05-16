"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[28567],{50341:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=o(85893),r=o(11151);const s={},i=void 0,c={id:"okp4d_query_logic_ask",title:"okp4d_query_logic_ask",description:"okp4d query logic ask",source:"@site/commands_versioned_docs/version-v7.0.0/okp4d_query_logic_ask.md",sourceDirName:".",slug:"/okp4d_query_logic_ask",permalink:"/fr/commands/v7.0.0/okp4d_query_logic_ask",draft:!1,unlisted:!1,tags:[],version:"v7.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_logic",permalink:"/fr/commands/v7.0.0/okp4d_query_logic"},next:{title:"okp4d_query_logic_params",permalink:"/fr/commands/v7.0.0/okp4d_query_logic_params"}},a={},d=[{value:"okp4d query logic ask",id:"okp4d-query-logic-ask",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"okp4d-query-logic-ask",children:"okp4d query logic ask"}),"\n",(0,t.jsx)(n.p,{children:"executes a logic query and returns the solutions found."}),"\n",(0,t.jsx)(n.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(n.p,{children:"Executes the [query] and return the solution(s) found.\nOptionally, a program can be transmitted, which will be interpreted before the query is processed.\nSince the query is without any side-effect, the query is not executed in the context of a transaction and no fee\nis charged for this, but the execution is constrained by the current limits configured in the module (that you can\nquery)."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"okp4d query logic ask [query] [flags]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'$ okp4d query logic ask "chain_id(X)." # returns the chain-id\n'})}),"\n",(0,t.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'      --grpc-addr string   the gRPC endpoint to use for this chain\n      --grpc-insecure      allow gRPC over insecure channels, if not the server must use TLS\n      --height int         Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help               help for ask\n      --node string        <host>:<port> to CometBFT RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string      Output format (text|json) (default "text")\n      --program string     reads the program from the given string.\n'})}),"\n",(0,t.jsx)(n.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/fr/commands/v7.0.0/okp4d_query_logic",children:"okp4d query logic"}),"\t - Querying commands for the logic module"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>i});var t=o(67294);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);