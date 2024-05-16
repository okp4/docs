"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[59569],{70466:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=t(85893),i=t(11151);const r={},s=void 0,a={id:"axoned_query_logic_ask",title:"axoned_query_logic_ask",description:"axoned query logic ask",source:"@site/commands/axoned_query_logic_ask.md",sourceDirName:".",slug:"/axoned_query_logic_ask",permalink:"/commands/next/axoned_query_logic_ask",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"axoned_query_logic",permalink:"/commands/next/axoned_query_logic"},next:{title:"axoned_query_logic_params",permalink:"/commands/next/axoned_query_logic_params"}},c={},l=[{value:"axoned query logic ask",id:"axoned-query-logic-ask",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"axoned-query-logic-ask",children:"axoned query logic ask"}),"\n",(0,o.jsx)(n.p,{children:"executes a logic query and returns the solutions found."}),"\n",(0,o.jsx)(n.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,o.jsx)(n.p,{children:"Executes the [query] and return the solution(s) found.\nOptionally, a program can be transmitted, which will be interpreted before the query is processed.\nSince the query is without any side-effect, the query is not executed in the context of a transaction and no fee\nis charged for this, but the execution is constrained by the current limits configured in the module (that you can\nquery)."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"axoned query logic ask [query] [flags]\n"})}),"\n",(0,o.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'$ axoned query logic ask "chain_id(X)." # returns the chain-id\n'})}),"\n",(0,o.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'      --grpc-addr string   the gRPC endpoint to use for this chain\n      --grpc-insecure      allow gRPC over insecure channels, if not the server must use TLS\n      --height int         Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help               help for ask\n      --limit uint         limit the maximum number of solutions to return.\n                           This parameter is constrained by the \'max_result_count\' setting in the module configuration, which specifies the maximum number of results that can be requested per query. (default 1)\n      --node string        <host>:<port> to CometBFT RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string      Output format (text|json) (default "text")\n      --program string     reads the program from the given string.\n'})}),"\n",(0,o.jsx)(n.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/commands/next/axoned_query_logic",children:"axoned query logic"}),"\t - Querying commands for the logic module"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var o=t(67294);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);