"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[34450],{17437:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=t(85893),o=t(11151);const s={},r=void 0,a={id:"okp4d_keys_migrate",title:"okp4d_keys_migrate",description:"okp4d keys migrate",source:"@site/commands_versioned_docs/version-v7.0.0/okp4d_keys_migrate.md",sourceDirName:".",slug:"/okp4d_keys_migrate",permalink:"/fr/commands/v7.0.0/okp4d_keys_migrate",draft:!1,unlisted:!1,tags:[],version:"v7.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_keys_list",permalink:"/fr/commands/v7.0.0/okp4d_keys_list"},next:{title:"okp4d_keys_mnemonic",permalink:"/fr/commands/v7.0.0/okp4d_keys_mnemonic"}},d={},l=[{value:"okp4d keys migrate",id:"okp4d-keys-migrate",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"okp4d-keys-migrate",children:"okp4d keys migrate"}),"\n",(0,i.jsx)(n.p,{children:"Migrate keys from amino to proto serialization format"}),"\n",(0,i.jsx)(n.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsxs)(n.p,{children:["Migrate keys from Amino to Protocol Buffers records.\nFor each key material entry, the command will check if the key can be deserialized using proto.\nIf this is the case, the key is already migrated. Therefore, we skip it and continue with a next one.\nOtherwise, we try to deserialize it using Amino into LegacyInfo. If this attempt is successful, we serialize\nLegacyInfo to Protobuf serialization format and overwrite the keyring entry. If any error occurred, it will be\noutputted in CLI and migration will be continued until all keys in the keyring DB are exhausted.\nSee ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/cosmos-sdk/pull/9695",children:"https://github.com/cosmos/cosmos-sdk/pull/9695"}),"  for more details."]}),"\n",(0,i.jsx)(n.p,{children:"It is recommended to run in 'dry-run' mode first to verify all key migration material."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"okp4d keys migrate [flags]\n"})}),"\n",(0,i.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  -h, --help   help for migrate\n"})}),"\n",(0,i.jsx)(n.h3,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "test")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --output string            Output format (text|json) (default "text")\n'})}),"\n",(0,i.jsx)(n.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/fr/commands/v7.0.0/okp4d_keys",children:"okp4d keys"}),"\t - Manage your application's keys"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(67294);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);