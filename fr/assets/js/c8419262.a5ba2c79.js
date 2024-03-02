"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[30248],{65961:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=o(85893),s=o(11151);const r={},a=void 0,l={id:"okp4d_rollback",title:"okp4d_rollback",description:"okp4d rollback",source:"@site/commands_versioned_docs/version-v5.0.0/okp4d_rollback.md",sourceDirName:".",slug:"/okp4d_rollback",permalink:"/fr/commands/v5.0.0/okp4d_rollback",draft:!1,unlisted:!1,tags:[],version:"v5.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_wasm_pinned",permalink:"/fr/commands/v5.0.0/okp4d_query_wasm_pinned"},next:{title:"okp4d_start",permalink:"/fr/commands/v5.0.0/okp4d_start"}},i={},c=[{value:"okp4d rollback",id:"okp4d-rollback",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"okp4d-rollback",children:"okp4d rollback"}),"\n",(0,t.jsx)(n.p,{children:"rollback cosmos-sdk and tendermint state by one height"}),"\n",(0,t.jsx)(n.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(n.p,{children:"A state rollback is performed to recover from an incorrect application state transition,\nwhen Tendermint has persisted an incorrect app hash and is thus unable to make\nprogress. Rollback overwrites a state at height n with the state at height n - 1.\nThe application also rolls back to height n - 1. No blocks are removed, so upon\nrestarting Tendermint the transactions in block n will be re-executed against the\napplication."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"okp4d rollback [flags]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'      --hard          remove last block as well as state\n  -h, --help          help for rollback\n      --home string   The application home directory (default "/home/john/.okp4d")\n'})}),"\n",(0,t.jsx)(n.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/fr/commands/next/okp4d",children:"okp4d"}),"\t - OKP4 Daemon \ud83d\udc79"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>a});var t=o(67294);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);