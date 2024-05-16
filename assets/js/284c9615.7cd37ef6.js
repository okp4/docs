"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[85761],{6722:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=o(85893),a=o(11151);const s={},r=void 0,l={id:"axoned_rollback",title:"axoned_rollback",description:"axoned rollback",source:"@site/commands/axoned_rollback.md",sourceDirName:".",slug:"/axoned_rollback",permalink:"/commands/next/axoned_rollback",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"axoned_query_wasm_pinned",permalink:"/commands/next/axoned_query_wasm_pinned"},next:{title:"axoned_snapshots",permalink:"/commands/next/axoned_snapshots"}},i={},c=[{value:"axoned rollback",id:"axoned-rollback",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"axoned-rollback",children:"axoned rollback"}),"\n",(0,t.jsx)(n.p,{children:"rollback Cosmos SDK and CometBFT state by one height"}),"\n",(0,t.jsx)(n.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(n.p,{children:"A state rollback is performed to recover from an incorrect application state transition,\nwhen CometBFT has persisted an incorrect app hash and is thus unable to make\nprogress. Rollback overwrites a state at height n with the state at height n - 1.\nThe application also rolls back to height n - 1. No blocks are removed, so upon\nrestarting CometBFT the transactions in block n will be re-executed against the\napplication."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"axoned rollback [flags]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'      --hard          remove last block as well as state\n  -h, --help          help for rollback\n      --home string   The application home directory (default "/home/john/.axoned")\n'})}),"\n",(0,t.jsx)(n.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/commands/next/axoned",children:"axoned"}),"\t - Axone - Orchestration Layer for AI"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>r});var t=o(67294);const a={},s=t.createContext(a);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);