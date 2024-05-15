"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[17459],{73389:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var i=t(85893),s=t(11151);const o={},r=void 0,d={id:"okp4d_prune",title:"okp4d_prune",description:"okp4d prune",source:"@site/commands_versioned_docs/version-v6.0.0/okp4d_prune.md",sourceDirName:".",slug:"/okp4d_prune",permalink:"/commands/v6.0.0/okp4d_prune",draft:!1,unlisted:!1,tags:[],version:"v6.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_keys_show",permalink:"/commands/v6.0.0/okp4d_keys_show"},next:{title:"okp4d_query",permalink:"/commands/v6.0.0/okp4d_query"}},p={},l=[{value:"okp4d prune",id:"okp4d-prune",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"okp4d-prune",children:"okp4d prune"}),"\n",(0,i.jsx)(n.p,{children:"Prune app history states by keeping the recent heights and deleting old heights"}),"\n",(0,i.jsx)(n.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(n.p,{children:"Prune app history states by keeping the recent heights and deleting old heights.\nThe pruning option is provided via the 'pruning' argument or alternatively with '--pruning-keep-recent'"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"default: the last 362880 states are kept"}),"\n",(0,i.jsx)(n.li,{children:"nothing: all historic states will be saved, nothing will be deleted (i.e. archiving node)"}),"\n",(0,i.jsx)(n.li,{children:"everything: 2 latest states will be kept"}),"\n",(0,i.jsx)(n.li,{children:"custom: allow pruning options to be manually specified through 'pruning-keep-recent'"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Note: When the --app-db-backend flag is not specified, the default backend type is 'goleveldb'.\nSupported app-db-backend types include 'goleveldb', 'rocksdb', 'pebbledb'."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"okp4d prune [pruning-method] [flags]\n"})}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"prune custom --pruning-keep-recent 100 --app-db-backend 'goleveldb'\n"})}),"\n",(0,i.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"      --app-db-backend string      The type of database for application and snapshots databases\n  -h, --help                       help for prune\n      --home string                The application home directory (default \"/home/john/.okp4d\")\n      --pruning-interval uint      Height interval at which pruned heights are removed from disk (ignored if pruning is not 'custom'), \n                                   \t\tthis is not used by this command but kept for compatibility with the complete pruning options (default 10)\n      --pruning-keep-recent uint   Number of recent heights to keep on disk (ignored if pruning is not 'custom')\n"})}),"\n",(0,i.jsx)(n.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/commands/next/okp4d",children:"okp4d"}),"\t - OKP4 Daemon \ud83d\udc79"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>r});var i=t(67294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);