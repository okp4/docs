"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[50020],{7e4:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=t(85893),a=t(11151);const s={},o=void 0,i={id:"axoned_query_authz_grants",title:"axoned_query_authz_grants",description:"axoned query authz grants",source:"@site/commands/axoned_query_authz_grants.md",sourceDirName:".",slug:"/axoned_query_authz_grants",permalink:"/fr/commands/next/axoned_query_authz_grants",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"axoned_query_authz_grants-by-granter",permalink:"/fr/commands/next/axoned_query_authz_grants-by-granter"},next:{title:"axoned_query_bank",permalink:"/fr/commands/next/axoned_query_bank"}},u={},d=[{value:"axoned query authz grants",id:"axoned-query-authz-grants",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"axoned-query-authz-grants",children:"axoned query authz grants"}),"\n",(0,r.jsx)(n.p,{children:"Query grants for a granter-grantee pair and optionally a msg-type-url"}),"\n",(0,r.jsx)(n.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,r.jsx)(n.p,{children:"Query authorization grants for a granter-grantee pair. If msg-type-url is set, it will select grants only for that msg type."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"axoned query authz grants [granter-addr] [grantee-addr] <msg-type-url> [flags]\n"})}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"axoned query authz grants cosmos1skj.. cosmos1skjwj.. /cosmos.bank.v1beta1.MsgSend\n"})}),"\n",(0,r.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'      --grpc-addr string   the gRPC endpoint to use for this chain\n      --grpc-insecure      allow gRPC over insecure channels, if not the server must use TLS\n      --height int         Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help               help for grants\n      --no-indent          Do not indent JSON output\n      --node string        <host>:<port> to CometBFT RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string      Output format (text|json) (default "text")\n      --page-count-total   \n      --page-key binary    \n      --page-limit uint    \n      --page-offset uint   \n      --page-reverse       \n'})}),"\n",(0,r.jsx)(n.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/fr/commands/next/axoned_query_authz",children:"axoned query authz"}),"\t - Querying commands for the authz module"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var r=t(67294);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);