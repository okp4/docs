"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[65880],{75303:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=t(85893),o=t(11151);const s={},a=void 0,i={id:"okp4d_query_authz_grants",title:"okp4d_query_authz_grants",description:"okp4d query authz grants",source:"@site/commands_versioned_docs/version-v5.0.0/okp4d_query_authz_grants.md",sourceDirName:".",slug:"/okp4d_query_authz_grants",permalink:"/commands/v5.0.0/okp4d_query_authz_grants",draft:!1,unlisted:!1,tags:[],version:"v5.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_authz_grants-by-granter",permalink:"/commands/v5.0.0/okp4d_query_authz_grants-by-granter"},next:{title:"okp4d_query_bank",permalink:"/commands/v5.0.0/okp4d_query_bank"}},d={},u=[{value:"okp4d query authz grants",id:"okp4d-query-authz-grants",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"okp4d-query-authz-grants",children:"okp4d query authz grants"}),"\n",(0,r.jsx)(n.p,{children:"query grants for a granter-grantee pair and optionally a msg-type-url"}),"\n",(0,r.jsx)(n.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,r.jsx)(n.p,{children:"Query authorization grants for a granter-grantee pair. If msg-type-url\nis set, it will select grants only for that msg type.\nExamples:\n$ okp4d query authz grants cosmos1skj.. cosmos1skjwj..\n$ okp4d query authz grants cosmos1skjw.. cosmos1skjwj.. /cosmos.bank.v1beta1.MsgSend"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"okp4d query authz grants [granter-addr] [grantee-addr] [msg-type-url]? [flags]\n"})}),"\n",(0,r.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'      --count-total        count total number of records in grants to query for\n      --grpc-addr string   the gRPC endpoint to use for this chain\n      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS\n      --height int         Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help               help for grants\n      --limit uint         pagination limit of grants to query for (default 100)\n      --node string        <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n      --offset uint        pagination offset of grants to query for\n  -o, --output string      Output format (text|json) (default "text")\n      --page uint          pagination page of grants to query for. This sets offset to a multiple of limit (default 1)\n      --page-key string    pagination page-key of grants to query for\n      --reverse            results are sorted in descending order\n'})}),"\n",(0,r.jsx)(n.h3,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'      --chain-id string   The network chain ID (default "okp4d")\n'})}),"\n",(0,r.jsx)(n.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/commands/v5.0.0/okp4d_query_authz",children:"okp4d query authz"}),"\t - Querying commands for the authz module"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var r=t(67294);const o={},s=r.createContext(o);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);