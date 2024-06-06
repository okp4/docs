"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[73492],{8056:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>d,metadata:()=>c,toc:()=>t});var o=n(85893),s=n(11151);const d={},i=void 0,c={id:"okp4d_query",title:"okp4d_query",description:"okp4d query",source:"@site/commands_versioned_docs/version-v7.1.0/okp4d_query.md",sourceDirName:".",slug:"/okp4d_query",permalink:"/fr/commands/okp4d_query",draft:!1,unlisted:!1,tags:[],version:"v7.1.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_prune",permalink:"/fr/commands/okp4d_prune"},next:{title:"okp4d_query_auth",permalink:"/fr/commands/okp4d_query_auth"}},a={},t=[{value:"okp4d query",id:"okp4d-query",level:2},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function u(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h2,{id:"okp4d-query",children:"okp4d query"}),"\n",(0,o.jsx)(r.p,{children:"Querying subcommands"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"okp4d query [flags]\n"})}),"\n",(0,o.jsx)(r.h3,{id:"options",children:"Options"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"  -h, --help   help for query\n"})}),"\n",(0,o.jsx)(r.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"/fr/commands/okp4d",children:"okp4d"}),"\t - OKP4 Daemon \ud83d\udc79"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"/fr/commands/okp4d_query_auth",children:"okp4d query auth"}),"\t - Querying commands for the auth module"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"/fr/commands/okp4d_query_authz",children:"okp4d query authz"}),"\t - Querying commands for the authz module"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"/fr/commands/okp4d_query_bank",children:"okp4d query bank"}),"\t - Querying commands for the bank module"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"/fr/commands/okp4d_query_block",children:"okp4d query block"}),"\t - Query for a committed block by height, hash, or event(s)"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"/fr/commands/okp4d_query_block-results",children:"okp4d query block-results"}),"\t - Query for a committed block's results by height"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"/fr/commands/okp4d_query_blocks",children:"okp4d query blocks"}),"\t - Query for paginated blocks that match a set of events"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"/fr/commands/okp4d_query_circuit",children:"okp4d query circuit"}),"\t - Querying commands for the circuit module"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"/fr/commands/okp4d_query_consensus",children:"okp4d query consensus"}),"\t - Querying commands for the consensus module"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"/fr/commands/okp4d_query_distribution",children:"okp4d query distribution"}),"\t - Querying commands for the distribution module"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"/fr/commands/okp4d_query_event-query-tx-for",children:"okp4d query event-query-tx-for"}),"\t - Query for a transaction by hash"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"/fr/commands/okp4d_query_evidence",children:"okp4d query evidence"}),"\t - Querying commands for the evidence module"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"/fr/commands/okp4d_query_feegrant",children:"okp4d query feegrant"}),"\t - Querying commands for the feegrant module"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"/fr/commands/okp4d_query_gov",children:"okp4d query gov"}),"\t - Querying commands for the gov module"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"/fr/commands/okp4d_query_group",children:"okp4d query group"}),"\t - Querying commands for the group module"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"/fr/commands/okp4d_query_ibc",children:"okp4d query ibc"}),"\t - Querying commands for the IBC module"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"/fr/commands/okp4d_query_ibc-fee",children:"okp4d query ibc-fee"}),"\t - IBC relayer incentivization query subcommands"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"/fr/commands/okp4d_query_ibc-transfer",children:"okp4d query ibc-transfer"}),"\t - IBC fungible token transfer query subcommands"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"/fr/commands/okp4d_query_interchain-accounts",children:"okp4d query interchain-accounts"}),"\t - IBC interchain accounts query subcommands"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"/fr/commands/okp4d_query_logic",children:"okp4d query logic"}),"\t - Querying commands for the logic module"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"/fr/commands/okp4d_query_mint",children:"okp4d query mint"}),"\t - Querying commands for the minting module"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"/fr/commands/okp4d_query_params",children:"okp4d query params"}),"\t - Querying commands for the params module"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"/fr/commands/okp4d_query_slashing",children:"okp4d query slashing"}),"\t - Querying commands for the slashing module"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"/fr/commands/okp4d_query_staking",children:"okp4d query staking"}),"\t - Querying commands for the staking module"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"/fr/commands/okp4d_query_tx",children:"okp4d query tx"}),'\t - Query for a transaction by hash, "<addr>/<seq>" combination or comma-separated signatures in a committed block']}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"/fr/commands/okp4d_query_txs",children:"okp4d query txs"}),"\t - Query for paginated transactions that match a set of events"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"/fr/commands/okp4d_query_upgrade",children:"okp4d query upgrade"}),"\t - Querying commands for the upgrade module"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"/fr/commands/okp4d_query_wasm",children:"okp4d query wasm"}),"\t - Querying commands for the wasm module"]}),"\n"]})]})}function l(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>i});var o=n(67294);const s={},d=o.createContext(s);function i(e){const r=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(d.Provider,{value:r},e.children)}}}]);