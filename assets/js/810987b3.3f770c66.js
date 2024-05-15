"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[70674],{33844:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=n(85893),s=n(11151);const a={},r=void 0,l={id:"okp4d_rollback",title:"okp4d_rollback",description:"okp4d rollback",source:"@site/commands_versioned_docs/version-v6.0.0/okp4d_rollback.md",sourceDirName:".",slug:"/okp4d_rollback",permalink:"/commands/v6.0.0/okp4d_rollback",draft:!1,unlisted:!1,tags:[],version:"v6.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_wasm_pinned",permalink:"/commands/v6.0.0/okp4d_query_wasm_pinned"},next:{title:"okp4d_snapshots",permalink:"/commands/v6.0.0/okp4d_snapshots"}},i={},c=[{value:"okp4d rollback",id:"okp4d-rollback",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function d(e){const o={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"okp4d-rollback",children:"okp4d rollback"}),"\n",(0,t.jsx)(o.p,{children:"rollback Cosmos SDK and CometBFT state by one height"}),"\n",(0,t.jsx)(o.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(o.p,{children:"A state rollback is performed to recover from an incorrect application state transition,\nwhen CometBFT has persisted an incorrect app hash and is thus unable to make\nprogress. Rollback overwrites a state at height n with the state at height n - 1.\nThe application also rolls back to height n - 1. No blocks are removed, so upon\nrestarting CometBFT the transactions in block n will be re-executed against the\napplication."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"okp4d rollback [flags]\n"})}),"\n",(0,t.jsx)(o.h3,{id:"options",children:"Options"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:'      --hard          remove last block as well as state\n  -h, --help          help for rollback\n      --home string   The application home directory (default "/home/john/.okp4d")\n'})}),"\n",(0,t.jsx)(o.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.a,{href:"/commands/next/okp4d",children:"okp4d"}),"\t - OKP4 Daemon \ud83d\udc79"]}),"\n"]})]})}function p(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,o,n)=>{n.d(o,{Z:()=>l,a:()=>r});var t=n(67294);const s={},a=t.createContext(s);function r(e){const o=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:o},e.children)}}}]);