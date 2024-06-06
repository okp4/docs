"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[37988],{53179:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=c(85893),t=c(11151);const s={},r=void 0,o={id:"okp4d_query_ibc_channel_unreceived-packets",title:"okp4d_query_ibc_channel_unreceived-packets",description:"okp4d query ibc channel unreceived-packets",source:"@site/commands_versioned_docs/version-v7.0.0/okp4d_query_ibc_channel_unreceived-packets.md",sourceDirName:".",slug:"/okp4d_query_ibc_channel_unreceived-packets",permalink:"/commands/v7.0.0/okp4d_query_ibc_channel_unreceived-packets",draft:!1,unlisted:!1,tags:[],version:"v7.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_ibc_channel_unreceived-acks",permalink:"/commands/v7.0.0/okp4d_query_ibc_channel_unreceived-acks"},next:{title:"okp4d_query_ibc_client",permalink:"/commands/v7.0.0/okp4d_query_ibc_client"}},a={},d=[{value:"okp4d query ibc channel unreceived-packets",id:"okp4d-query-ibc-channel-unreceived-packets",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"okp4d-query-ibc-channel-unreceived-packets",children:"okp4d query ibc channel unreceived-packets"}),"\n",(0,i.jsx)(n.p,{children:"Query all the unreceived packets associated with a channel"}),"\n",(0,i.jsx)(n.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(n.p,{children:"Determine if a packet, given a list of packet commitment sequences, is unreceived."}),"\n",(0,i.jsx)(n.p,{children:"The return value represents:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Unreceived packet commitments: no acknowledgement exists on receiving chain for the given packet commitment sequence on sending chain."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"okp4d query ibc channel unreceived-packets [port-id] [channel-id] [flags]\n"})}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"okp4d query ibc channel unreceived-packets [port-id] [channel-id] --sequences=1,2,3\n"})}),"\n",(0,i.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'      --grpc-addr string       the gRPC endpoint to use for this chain\n      --grpc-insecure          allow gRPC over insecure channels, if not the server must use TLS\n      --height int             Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help                   help for unreceived-packets\n      --node string            <host>:<port> to CometBFT RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string          Output format (text|json) (default "text")\n      --sequences int64Slice   comma separated list of packet sequence numbers (default [])\n'})}),"\n",(0,i.jsx)(n.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/commands/v7.0.0/okp4d_query_ibc_channel",children:"okp4d query ibc channel"}),"\t - IBC channel query subcommands"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,c)=>{c.d(n,{Z:()=>o,a:()=>r});var i=c(67294);const t={},s=i.createContext(t);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);